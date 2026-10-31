import { createRoute, z } from '@hono/zod-openapi'

const GoogleAnalyticsAdminV1betaNumericValueSchema = z
  .object({
    doubleValue: z.float64().exactOptional().openapi({ description: 'Double value' }),
    int64Value: z.string().exactOptional().openapi({ description: 'Integer value' }),
  })
  .openapi({ description: 'To represent a number.', required: [] })
  .openapi('GoogleAnalyticsAdminV1betaNumericValue')

const GoogleAnalyticsAdminV1betaAccessBetweenFilterSchema = z
  .object({
    fromValue: GoogleAnalyticsAdminV1betaNumericValueSchema.exactOptional().openapi({
      description: 'Begins with this number.',
    }),
    toValue: GoogleAnalyticsAdminV1betaNumericValueSchema.exactOptional().openapi({
      description: 'Ends with this number.',
    }),
  })
  .openapi({
    description: 'To express that the result needs to be between two numbers (inclusive).',
    required: [],
  })
  .openapi('GoogleAnalyticsAdminV1betaAccessBetweenFilter')

const GoogleAnalyticsAdminV1betaAccessInListFilterSchema = z
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
  .openapi('GoogleAnalyticsAdminV1betaAccessInListFilter')

const GoogleAnalyticsAdminV1betaAccessNumericFilterSchema = z
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
    value: GoogleAnalyticsAdminV1betaNumericValueSchema.exactOptional().openapi({
      description: 'A numeric value or a date value.',
    }),
  })
  .openapi({ description: 'Filters for numeric or date values.', required: [] })
  .openapi('GoogleAnalyticsAdminV1betaAccessNumericFilter')

const GoogleAnalyticsAdminV1betaAccessStringFilterSchema = z
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
  .openapi({ description: 'The filter for strings.', required: [] })
  .openapi('GoogleAnalyticsAdminV1betaAccessStringFilter')

type GoogleAnalyticsAdminV1betaAccessFilterType = {
  betweenFilter?: z.infer<typeof GoogleAnalyticsAdminV1betaAccessBetweenFilterSchema>
  fieldName?: string
  inListFilter?: z.infer<typeof GoogleAnalyticsAdminV1betaAccessInListFilterSchema>
  numericFilter?: z.infer<typeof GoogleAnalyticsAdminV1betaAccessNumericFilterSchema>
  stringFilter?: z.infer<typeof GoogleAnalyticsAdminV1betaAccessStringFilterSchema>
}

const GoogleAnalyticsAdminV1betaAccessFilterSchema: z.ZodType<GoogleAnalyticsAdminV1betaAccessFilterType> =
  z
    .object({
      betweenFilter: GoogleAnalyticsAdminV1betaAccessBetweenFilterSchema.exactOptional().openapi({
        description: 'A filter for two values.',
      }),
      fieldName: z
        .string()
        .exactOptional()
        .openapi({ description: 'The dimension name or metric name.' }),
      inListFilter: GoogleAnalyticsAdminV1betaAccessInListFilterSchema.exactOptional().openapi({
        description: 'A filter for in list values.',
      }),
      numericFilter: GoogleAnalyticsAdminV1betaAccessNumericFilterSchema.exactOptional().openapi({
        description: 'A filter for numeric or date values.',
      }),
      stringFilter: GoogleAnalyticsAdminV1betaAccessStringFilterSchema.exactOptional().openapi({
        description: 'Strings related filter.',
      }),
    })
    .openapi({ description: 'An expression to filter dimension or metric values.', required: [] })
    .openapi('GoogleAnalyticsAdminV1betaAccessFilter')

const GoogleAnalyticsAdminV1betaAccessFilterExpressionListSchema: z.ZodType<GoogleAnalyticsAdminV1betaAccessFilterExpressionListType> =
  z
    .lazy(() =>
      z
        .object({
          expressions: z
            .array(GoogleAnalyticsAdminV1betaAccessFilterExpressionSchema)
            .exactOptional()
            .openapi({ description: 'A list of filter expressions.' }),
        })
        .openapi({ description: 'A list of filter expressions.', required: [] }),
    )
    .openapi('GoogleAnalyticsAdminV1betaAccessFilterExpressionList')

type GoogleAnalyticsAdminV1betaAccessFilterExpressionType = {
  accessFilter?: z.infer<typeof GoogleAnalyticsAdminV1betaAccessFilterSchema>
  andGroup?: z.infer<typeof GoogleAnalyticsAdminV1betaAccessFilterExpressionListSchema>
  notExpression?: GoogleAnalyticsAdminV1betaAccessFilterExpressionType
  orGroup?: z.infer<typeof GoogleAnalyticsAdminV1betaAccessFilterExpressionListSchema>
}

const GoogleAnalyticsAdminV1betaAccessFilterExpressionSchema: z.ZodType<GoogleAnalyticsAdminV1betaAccessFilterExpressionType> =
  z
    .lazy(() =>
      z
        .object({
          accessFilter: GoogleAnalyticsAdminV1betaAccessFilterSchema.exactOptional().openapi({
            description:
              "A primitive filter. In the same FilterExpression, all of the filter's field names need to be either all dimensions or all metrics.",
          }),
          andGroup:
            GoogleAnalyticsAdminV1betaAccessFilterExpressionListSchema.exactOptional().openapi({
              description:
                'Each of the FilterExpressions in the and_group has an AND relationship.',
            }),
          notExpression:
            GoogleAnalyticsAdminV1betaAccessFilterExpressionSchema.exactOptional().openapi({
              description: 'The FilterExpression is NOT of not_expression.',
            }),
          orGroup:
            GoogleAnalyticsAdminV1betaAccessFilterExpressionListSchema.exactOptional().openapi({
              description: 'Each of the FilterExpressions in the or_group has an OR relationship.',
            }),
        })
        .openapi({
          description:
            'Expresses dimension or metric filters. The fields in the same expression need to be either all dimensions or all metrics.',
          required: [],
        }),
    )
    .openapi('GoogleAnalyticsAdminV1betaAccessFilterExpression')

type GoogleAnalyticsAdminV1betaAccessFilterExpressionListType = {
  expressions?: z.infer<typeof GoogleAnalyticsAdminV1betaAccessFilterExpressionSchema>[]
}

const GoogleAnalyticsAdminV1betaAccessDateRangeSchema = z
  .object({
    endDate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The inclusive end date for the query in the format `YYYY-MM-DD`. Cannot be before `startDate`. The format `NdaysAgo`, `yesterday`, or `today` is also accepted, and in that case, the date is inferred based on the current time in the request's time zone.",
      }),
    startDate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The inclusive start date for the query in the format `YYYY-MM-DD`. Cannot be after `endDate`. The format `NdaysAgo`, `yesterday`, or `today` is also accepted, and in that case, the date is inferred based on the current time in the request's time zone.",
      }),
  })
  .openapi({
    description: 'A contiguous range of days: startDate, startDate + 1, ..., endDate.',
    required: [],
  })
  .openapi('GoogleAnalyticsAdminV1betaAccessDateRange')

const GoogleAnalyticsAdminV1betaAccessDimensionSchema = z
  .object({
    dimensionName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The API name of the dimension. See [Data Access Schema](https://developers.google.com/analytics/devguides/config/admin/v1/access-api-schema) for the list of dimensions supported in this API. Dimensions are referenced by name in `dimensionFilter` and `orderBys`.',
      }),
  })
  .openapi({
    description:
      'Dimensions are attributes of your data. For example, the dimension `userEmail` indicates the email of the user that accessed reporting data. Dimension values in report responses are strings.',
    required: [],
  })
  .openapi('GoogleAnalyticsAdminV1betaAccessDimension')

const GoogleAnalyticsAdminV1betaAccessDimensionHeaderSchema = z
  .object({
    dimensionName: z
      .string()
      .exactOptional()
      .openapi({ description: "The dimension's name; for example 'userEmail'." }),
  })
  .openapi({
    description:
      'Describes a dimension column in the report. Dimensions requested in a report produce column entries within rows and DimensionHeaders. However, dimensions used exclusively within filters or expressions do not produce columns in a report; correspondingly, those dimensions do not produce headers.',
    required: [],
  })
  .openapi('GoogleAnalyticsAdminV1betaAccessDimensionHeader')

const GoogleAnalyticsAdminV1betaAccessDimensionValueSchema = z
  .object({
    value: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The dimension value. For example, this value may be 'France' for the 'country' dimension.",
      }),
  })
  .openapi({ description: 'The value of a dimension.', required: [] })
  .openapi('GoogleAnalyticsAdminV1betaAccessDimensionValue')

const GoogleAnalyticsAdminV1betaAccessMetricSchema = z
  .object({
    metricName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The API name of the metric. See [Data Access Schema](https://developers.google.com/analytics/devguides/config/admin/v1/access-api-schema) for the list of metrics supported in this API. Metrics are referenced by name in `metricFilter` & `orderBys`.',
      }),
  })
  .openapi({
    description:
      'The quantitative measurements of a report. For example, the metric `accessCount` is the total number of data access records.',
    required: [],
  })
  .openapi('GoogleAnalyticsAdminV1betaAccessMetric')

const GoogleAnalyticsAdminV1betaAccessMetricHeaderSchema = z
  .object({
    metricName: z
      .string()
      .exactOptional()
      .openapi({ description: "The metric's name; for example 'accessCount'." }),
  })
  .openapi({
    description:
      'Describes a metric column in the report. Visible metrics requested in a report produce column entries within rows and MetricHeaders. However, metrics used exclusively within filters or expressions do not produce columns in a report; correspondingly, those metrics do not produce headers.',
    required: [],
  })
  .openapi('GoogleAnalyticsAdminV1betaAccessMetricHeader')

const GoogleAnalyticsAdminV1betaAccessMetricValueSchema = z
  .object({
    value: z
      .string()
      .exactOptional()
      .openapi({ description: "The measurement value. For example, this value may be '13'." }),
  })
  .openapi({ description: 'The value of a metric.', required: [] })
  .openapi('GoogleAnalyticsAdminV1betaAccessMetricValue')

const GoogleAnalyticsAdminV1betaAccessOrderByDimensionOrderBySchema = z
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
  .openapi('GoogleAnalyticsAdminV1betaAccessOrderByDimensionOrderBy')

const GoogleAnalyticsAdminV1betaAccessOrderByMetricOrderBySchema = z
  .object({
    metricName: z
      .string()
      .exactOptional()
      .openapi({ description: 'A metric name in the request to order by.' }),
  })
  .openapi({ description: 'Sorts by metric values.', required: [] })
  .openapi('GoogleAnalyticsAdminV1betaAccessOrderByMetricOrderBy')

const GoogleAnalyticsAdminV1betaAccessOrderBySchema = z
  .object({
    desc: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If true, sorts by descending order. If false or unspecified, sorts in ascending order.',
      }),
    dimension:
      GoogleAnalyticsAdminV1betaAccessOrderByDimensionOrderBySchema.exactOptional().openapi({
        description: "Sorts results by a dimension's values.",
      }),
    metric: GoogleAnalyticsAdminV1betaAccessOrderByMetricOrderBySchema.exactOptional().openapi({
      description: "Sorts results by a metric's values.",
    }),
  })
  .openapi({
    description:
      'Order bys define how rows will be sorted in the response. For example, ordering rows by descending access count is one ordering, and ordering rows by the country string is a different ordering.',
    required: [],
  })
  .openapi('GoogleAnalyticsAdminV1betaAccessOrderBy')

const GoogleAnalyticsAdminV1betaAccessQuotaStatusSchema = z
  .object({
    consumed: z.int32().exactOptional().openapi({ description: 'Quota consumed by this request.' }),
    remaining: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Quota remaining after this request.' }),
  })
  .openapi({ description: 'Current state for a particular quota group.', required: [] })
  .openapi('GoogleAnalyticsAdminV1betaAccessQuotaStatus')

const GoogleAnalyticsAdminV1betaAccessQuotaSchema = z
  .object({
    concurrentRequests: GoogleAnalyticsAdminV1betaAccessQuotaStatusSchema.exactOptional().openapi({
      description: 'Properties can use up to 50 concurrent requests.',
    }),
    serverErrorsPerProjectPerHour:
      GoogleAnalyticsAdminV1betaAccessQuotaStatusSchema.exactOptional().openapi({
        description: 'Properties and cloud project pairs can have up to 50 server errors per hour.',
      }),
    tokensPerDay: GoogleAnalyticsAdminV1betaAccessQuotaStatusSchema.exactOptional().openapi({
      description:
        'Properties can use 250,000 tokens per day. Most requests consume fewer than 10 tokens.',
    }),
    tokensPerHour: GoogleAnalyticsAdminV1betaAccessQuotaStatusSchema.exactOptional().openapi({
      description:
        'Properties can use 50,000 tokens per hour. An API request consumes a single number of tokens, and that number is deducted from all of the hourly, daily, and per project hourly quotas.',
    }),
    tokensPerProjectPerHour:
      GoogleAnalyticsAdminV1betaAccessQuotaStatusSchema.exactOptional().openapi({
        description:
          'Properties can use up to 25% of their tokens per project per hour. This amounts to Analytics 360 Properties can use 12,500 tokens per project per hour. An API request consumes a single number of tokens, and that number is deducted from all of the hourly, daily, and per project hourly quotas.',
      }),
  })
  .openapi({
    description:
      'Current state of all quotas for this Analytics property. If any quota for a property is exhausted, all requests to that property will return Resource Exhausted errors.',
    required: [],
  })
  .openapi('GoogleAnalyticsAdminV1betaAccessQuota')

const GoogleAnalyticsAdminV1betaAccessRowSchema = z
  .object({
    dimensionValues: z
      .array(GoogleAnalyticsAdminV1betaAccessDimensionValueSchema)
      .exactOptional()
      .openapi({
        description:
          'List of dimension values. These values are in the same order as specified in the request.',
      }),
    metricValues: z
      .array(GoogleAnalyticsAdminV1betaAccessMetricValueSchema)
      .exactOptional()
      .openapi({
        description:
          'List of metric values. These values are in the same order as specified in the request.',
      }),
  })
  .openapi({ description: 'Access report data for each row.', required: [] })
  .openapi('GoogleAnalyticsAdminV1betaAccessRow')

const GoogleAnalyticsAdminV1betaAccountSchema = z
  .object({
    createTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Time when this account was originally created.',
        readOnly: true,
      }),
    deleted: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Output only. Indicates whether this Account is soft-deleted or not. Deleted accounts are excluded from List results unless specifically requested.',
        readOnly: true,
      }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. Human-readable display name for this account.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Resource name of this account. Format: accounts/{account} Example: "accounts/100"',
        readOnly: true,
      }),
    regionCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'Country of business. Must be a Unicode CLDR region code.' }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Time when account payload fields were last updated.',
        readOnly: true,
      }),
  })
  .openapi({
    description: 'A resource message representing a Google Analytics account.',
    required: [],
  })
  .openapi('GoogleAnalyticsAdminV1betaAccount')

const GoogleAnalyticsAdminV1betaPropertySummarySchema = z
  .object({
    displayName: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Display name for the property referred to in this property summary.',
      }),
    parent: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Resource name of this property\'s logical parent. Note: The Property-Moving UI can be used to change the parent. Format: accounts/{account}, properties/{property} Example: "accounts/100", "properties/200"',
      }),
    property: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Resource name of property referred to by this property summary Format: properties/{property_id} Example: "properties/1000"',
      }),
    propertyType: z
      .enum([
        'PROPERTY_TYPE_UNSPECIFIED',
        'PROPERTY_TYPE_ORDINARY',
        'PROPERTY_TYPE_SUBPROPERTY',
        'PROPERTY_TYPE_ROLLUP',
      ])
      .exactOptional()
      .openapi({ description: "The property's property type." }),
  })
  .openapi({
    description: 'A virtual resource representing metadata for a GA4 property.',
    required: [],
  })
  .openapi('GoogleAnalyticsAdminV1betaPropertySummary')

const GoogleAnalyticsAdminV1betaAccountSummarySchema = z
  .object({
    account: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Resource name of account referred to by this account summary Format: accounts/{account_id} Example: "accounts/1000"',
      }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Display name for the account referred to in this account summary.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Resource name for this account summary. Format: accountSummaries/{account_id} Example: "accountSummaries/1000"',
      }),
    propertySummaries: z
      .array(GoogleAnalyticsAdminV1betaPropertySummarySchema)
      .exactOptional()
      .openapi({ description: 'List of summaries for child accounts of this account.' }),
  })
  .openapi({
    description:
      'A virtual resource representing an overview of an account and all its child GA4 properties.',
    required: [],
  })
  .openapi('GoogleAnalyticsAdminV1betaAccountSummary')

const GoogleAnalyticsAdminV1betaAcknowledgeUserDataCollectionRequestSchema = z
  .object({
    acknowledgement: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. An acknowledgement that the caller of this method understands the terms of user data collection. This field must contain the exact value: "I acknowledge that I have the necessary privacy disclosures and rights from my end users for the collection and processing of their data, including the association of such data with the visitation information Google Analytics collects from my site and/or app property."',
      }),
  })
  .openapi({ description: 'Request message for AcknowledgeUserDataCollection RPC.', required: [] })
  .openapi('GoogleAnalyticsAdminV1betaAcknowledgeUserDataCollectionRequest')

const GoogleAnalyticsAdminV1betaAcknowledgeUserDataCollectionResponseSchema = z
  .object({})
  .openapi({ description: 'Response message for AcknowledgeUserDataCollection RPC.' })
  .openapi('GoogleAnalyticsAdminV1betaAcknowledgeUserDataCollectionResponse')

const GoogleAnalyticsAdminV1betaArchiveCustomDimensionRequestSchema = z
  .object({})
  .openapi({ description: 'Request message for ArchiveCustomDimension RPC.' })
  .openapi('GoogleAnalyticsAdminV1betaArchiveCustomDimensionRequest')

const GoogleAnalyticsAdminV1betaArchiveCustomMetricRequestSchema = z
  .object({})
  .openapi({ description: 'Request message for ArchiveCustomMetric RPC.' })
  .openapi('GoogleAnalyticsAdminV1betaArchiveCustomMetricRequest')

const GoogleAnalyticsAdminV1betaConversionEventSchema = z
  .object({
    createTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Time when this conversion event was created in the property.',
        readOnly: true,
      }),
    custom: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Output only. If set to true, this conversion event refers to a custom event. If set to false, this conversion event refers to a default event in GA. Default events typically have special meaning in GA. Default events are usually created for you by the GA system, but in some cases can be created by property admins. Custom events count towards the maximum number of custom conversion events that may be created per property.',
        readOnly: true,
      }),
    deletable: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Output only. If set, this event can currently be deleted with DeleteConversionEvent.',
        readOnly: true,
      }),
    eventName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Immutable. The event name for this conversion event. Examples: 'click', 'purchase'",
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Resource name of this conversion event. Format: properties/{property}/conversionEvents/{conversion_event}',
        readOnly: true,
      }),
  })
  .openapi({ description: 'A conversion event in a Google Analytics property.', required: [] })
  .openapi('GoogleAnalyticsAdminV1betaConversionEvent')

const GoogleAnalyticsAdminV1betaDataRetentionSettingsSchema = z
  .object({
    eventDataRetention: z
      .enum([
        'RETENTION_DURATION_UNSPECIFIED',
        'TWO_MONTHS',
        'FOURTEEN_MONTHS',
        'TWENTY_SIX_MONTHS',
        'THIRTY_EIGHT_MONTHS',
        'FIFTY_MONTHS',
      ])
      .exactOptional()
      .openapi({ description: 'The length of time that event-level data is retained.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Resource name for this DataRetentionSetting resource. Format: properties/{property}/dataRetentionSettings',
        readOnly: true,
      }),
    resetUserDataOnNewActivity: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If true, reset the retention period for the user identifier with every event from that user.',
      }),
  })
  .openapi({
    description: 'Settings values for data retention. This is a singleton resource.',
    required: [],
  })
  .openapi('GoogleAnalyticsAdminV1betaDataRetentionSettings')

const GoogleAnalyticsAdminV1betaDataStreamAndroidAppStreamDataSchema = z
  .object({
    firebaseAppId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. ID of the corresponding Android app in Firebase, if any. This ID can change if the Android app is deleted and recreated.',
        readOnly: true,
      }),
    packageName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Immutable. The package name for the app being measured. Example: "com.example.myandroidapp"',
      }),
  })
  .openapi({ description: 'Data specific to Android app streams.', required: [] })
  .openapi('GoogleAnalyticsAdminV1betaDataStreamAndroidAppStreamData')

const GoogleAnalyticsAdminV1betaDataStreamIosAppStreamDataSchema = z
  .object({
    bundleId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Immutable. The Apple App Store Bundle ID for the app Example: "com.example.myiosapp"',
      }),
    firebaseAppId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. ID of the corresponding iOS app in Firebase, if any. This ID can change if the iOS app is deleted and recreated.',
        readOnly: true,
      }),
  })
  .openapi({ description: 'Data specific to iOS app streams.', required: [] })
  .openapi('GoogleAnalyticsAdminV1betaDataStreamIosAppStreamData')

const GoogleAnalyticsAdminV1betaDataStreamWebStreamDataSchema = z
  .object({
    defaultUri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Immutable. Domain name of the web app being measured, or empty. Example: "http://www.google.com", "https://www.google.com"',
      }),
    firebaseAppId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. ID of the corresponding web app in Firebase, if any. This ID can change if the web app is deleted and recreated.',
        readOnly: true,
      }),
    measurementId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Analytics "Measurement ID", without the "G-" prefix. Example: "G-1A2BCD345E" would just be "1A2BCD345E"',
        readOnly: true,
      }),
  })
  .openapi({ description: 'Data specific to web streams.', required: [] })
  .openapi('GoogleAnalyticsAdminV1betaDataStreamWebStreamData')

const GoogleAnalyticsAdminV1betaDataStreamSchema = z
  .object({
    androidAppStreamData:
      GoogleAnalyticsAdminV1betaDataStreamAndroidAppStreamDataSchema.exactOptional().openapi({
        description:
          'Data specific to Android app streams. Must be populated if type is ANDROID_APP_DATA_STREAM.',
      }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Time when this stream was originally created.',
        readOnly: true,
      }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Human-readable display name for the Data Stream. Required for web data streams. The max allowed display name length is 255 UTF-16 code units.',
      }),
    iosAppStreamData:
      GoogleAnalyticsAdminV1betaDataStreamIosAppStreamDataSchema.exactOptional().openapi({
        description:
          'Data specific to iOS app streams. Must be populated if type is IOS_APP_DATA_STREAM.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Resource name of this Data Stream. Format: properties/{property_id}/dataStreams/{stream_id} Example: "properties/1000/dataStreams/2000"',
        readOnly: true,
      }),
    type: z
      .enum([
        'DATA_STREAM_TYPE_UNSPECIFIED',
        'WEB_DATA_STREAM',
        'ANDROID_APP_DATA_STREAM',
        'IOS_APP_DATA_STREAM',
      ])
      .exactOptional()
      .openapi({ description: 'Required. Immutable. The type of this DataStream resource.' }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Time when stream payload fields were last updated.',
        readOnly: true,
      }),
    webStreamData: GoogleAnalyticsAdminV1betaDataStreamWebStreamDataSchema.exactOptional().openapi({
      description: 'Data specific to web streams. Must be populated if type is WEB_DATA_STREAM.',
    }),
  })
  .openapi({ description: 'A resource message representing a data stream.', required: [] })
  .openapi('GoogleAnalyticsAdminV1betaDataStream')

const GoogleAnalyticsAdminV1betaFirebaseLinkSchema = z
  .object({
    createTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Time when this FirebaseLink was originally created.',
        readOnly: true,
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Example format: properties/1234/firebaseLinks/5678',
        readOnly: true,
      }),
    project: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Immutable. Firebase project resource name. When creating a FirebaseLink, you may provide this resource name using either a project number or project ID. Once this resource has been created, returned FirebaseLinks will always have a project_name that contains a project number. Format: 'projects/{project number}' Example: 'projects/1234'",
      }),
  })
  .openapi({ description: 'A link between a GA4 property and a Firebase project.', required: [] })
  .openapi('GoogleAnalyticsAdminV1betaFirebaseLink')

const GoogleAnalyticsAdminV1betaGoogleAdsLinkSchema = z
  .object({
    adsPersonalizationEnabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Enable personalized advertising features with this integration. Automatically publish my Google Analytics audience lists and Google Analytics remarketing events/parameters to the linked Google Ads account. If this field is not set on create/update, it will be defaulted to true.',
      }),
    canManageClients: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Output only. If true, this link is for a Google Ads manager account.',
        readOnly: true,
      }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Time when this link was originally created.',
        readOnly: true,
      }),
    creatorEmailAddress: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Output only. Email address of the user that created the link. An empty string will be returned if the email address can't be retrieved.",
        readOnly: true,
      }),
    customerId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Immutable. Google Ads customer ID.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Format: properties/{propertyId}/googleAdsLinks/{googleAdsLinkId} Note: googleAdsLinkId is not the Google Ads customer ID.',
        readOnly: true,
      }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Time when this link was last updated.',
        readOnly: true,
      }),
  })
  .openapi({ description: 'A link between a GA4 property and a Google Ads account.', required: [] })
  .openapi('GoogleAnalyticsAdminV1betaGoogleAdsLink')

const GoogleAnalyticsAdminV1betaMeasurementProtocolSecretSchema = z
  .object({
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. Human-readable display name for this secret.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Resource name of this secret. This secret may be a child of any type of stream. Format: properties/{property}/dataStreams/{dataStream}/measurementProtocolSecrets/{measurementProtocolSecret}',
        readOnly: true,
      }),
    secretValue: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Output only. The measurement protocol secret value. Pass this value to the api_secret field of the Measurement Protocol API when sending hits to this secret's parent property.",
        readOnly: true,
      }),
  })
  .openapi({
    description: 'A secret value used for sending hits to Measurement Protocol.',
    required: [],
  })
  .openapi('GoogleAnalyticsAdminV1betaMeasurementProtocolSecret')

const GoogleAnalyticsAdminV1betaPropertySchema = z
  .object({
    account: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Immutable. The resource name of the parent account Format: accounts/{account_id} Example: "accounts/123"',
      }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Time when the entity was originally created.',
        readOnly: true,
      }),
    currencyCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The currency type used in reports involving monetary values. Format: https://en.wikipedia.org/wiki/ISO_4217 Examples: "USD", "EUR", "JPY"',
      }),
    deleteTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. If set, the time at which this property was trashed. If not set, then this property is not currently in the trash can.',
        readOnly: true,
      }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Human-readable display name for this property. The max allowed display name length is 100 UTF-16 code units.',
      }),
    expireTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. If set, the time at which this trashed property will be permanently deleted. If not set, then this property is not currently in the trash can and is not slated to be deleted.',
        readOnly: true,
      }),
    industryCategory: z
      .enum([
        'INDUSTRY_CATEGORY_UNSPECIFIED',
        'AUTOMOTIVE',
        'BUSINESS_AND_INDUSTRIAL_MARKETS',
        'FINANCE',
        'HEALTHCARE',
        'TECHNOLOGY',
        'TRAVEL',
        'OTHER',
        'ARTS_AND_ENTERTAINMENT',
        'BEAUTY_AND_FITNESS',
        'BOOKS_AND_LITERATURE',
        'FOOD_AND_DRINK',
        'GAMES',
        'HOBBIES_AND_LEISURE',
        'HOME_AND_GARDEN',
        'INTERNET_AND_TELECOM',
        'LAW_AND_GOVERNMENT',
        'NEWS',
        'ONLINE_COMMUNITIES',
        'PEOPLE_AND_SOCIETY',
        'PETS_AND_ANIMALS',
        'REAL_ESTATE',
        'REFERENCE',
        'SCIENCE',
        'SPORTS',
        'JOBS_AND_EDUCATION',
        'SHOPPING',
      ])
      .exactOptional()
      .openapi({
        description: 'Industry associated with this property Example: AUTOMOTIVE, FOOD_AND_DRINK',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Resource name of this property. Format: properties/{property_id} Example: "properties/1000"',
        readOnly: true,
      }),
    parent: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Immutable. Resource name of this property\'s logical parent. Note: The Property-Moving UI can be used to change the parent. Format: accounts/{account}, properties/{property} Example: "accounts/100", "properties/101"',
      }),
    propertyType: z
      .enum([
        'PROPERTY_TYPE_UNSPECIFIED',
        'PROPERTY_TYPE_ORDINARY',
        'PROPERTY_TYPE_SUBPROPERTY',
        'PROPERTY_TYPE_ROLLUP',
      ])
      .exactOptional()
      .openapi({
        description:
          'Immutable. The property type for this Property resource. When creating a property, if the type is "PROPERTY_TYPE_UNSPECIFIED", then "ORDINARY_PROPERTY" will be implied. "SUBPROPERTY" and "ROLLUP_PROPERTY" types cannot yet be created with the Google Analytics Admin API.',
      }),
    serviceLevel: z
      .enum(['SERVICE_LEVEL_UNSPECIFIED', 'GOOGLE_ANALYTICS_STANDARD', 'GOOGLE_ANALYTICS_360'])
      .exactOptional()
      .openapi({
        description:
          'Output only. The Google Analytics service level that applies to this property.',
        readOnly: true,
      }),
    timeZone: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Reporting Time Zone, used as the day boundary for reports, regardless of where the data originates. If the time zone honors DST, Analytics will automatically adjust for the changes. NOTE: Changing the time zone only affects data going forward, and is not applied retroactively. Format: https://www.iana.org/time-zones Example: "America/Los_Angeles"',
      }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Time when entity payload fields were last updated.',
        readOnly: true,
      }),
  })
  .openapi({
    description: 'A resource message representing a Google Analytics GA4 property.',
    required: [],
  })
  .openapi('GoogleAnalyticsAdminV1betaProperty')

const GoogleAnalyticsAdminV1betaChangeHistoryChangeChangeHistoryResourceSchema = z
  .object({
    account: GoogleAnalyticsAdminV1betaAccountSchema.exactOptional().openapi({
      description: 'A snapshot of an Account resource in change history.',
    }),
    conversionEvent: GoogleAnalyticsAdminV1betaConversionEventSchema.exactOptional().openapi({
      description: 'A snapshot of a ConversionEvent resource in change history.',
    }),
    dataRetentionSettings:
      GoogleAnalyticsAdminV1betaDataRetentionSettingsSchema.exactOptional().openapi({
        description: 'A snapshot of a data retention settings resource in change history.',
      }),
    dataStream: GoogleAnalyticsAdminV1betaDataStreamSchema.exactOptional().openapi({
      description: 'A snapshot of a DataStream resource in change history.',
    }),
    firebaseLink: GoogleAnalyticsAdminV1betaFirebaseLinkSchema.exactOptional().openapi({
      description: 'A snapshot of a FirebaseLink resource in change history.',
    }),
    googleAdsLink: GoogleAnalyticsAdminV1betaGoogleAdsLinkSchema.exactOptional().openapi({
      description: 'A snapshot of a GoogleAdsLink resource in change history.',
    }),
    measurementProtocolSecret:
      GoogleAnalyticsAdminV1betaMeasurementProtocolSecretSchema.exactOptional().openapi({
        description: 'A snapshot of a MeasurementProtocolSecret resource in change history.',
      }),
    property: GoogleAnalyticsAdminV1betaPropertySchema.exactOptional().openapi({
      description: 'A snapshot of a Property resource in change history.',
    }),
  })
  .openapi({
    description:
      'A snapshot of a resource as before or after the result of a change in change history.',
    required: [],
  })
  .openapi('GoogleAnalyticsAdminV1betaChangeHistoryChangeChangeHistoryResource')

const GoogleAnalyticsAdminV1betaChangeHistoryChangeSchema = z
  .object({
    action: z
      .enum(['ACTION_TYPE_UNSPECIFIED', 'CREATED', 'UPDATED', 'DELETED'])
      .exactOptional()
      .openapi({ description: 'The type of action that changed this resource.' }),
    resource: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Resource name of the resource whose changes are described by this entry.',
      }),
    resourceAfterChange:
      GoogleAnalyticsAdminV1betaChangeHistoryChangeChangeHistoryResourceSchema.exactOptional().openapi(
        {
          description:
            'Resource contents from after the change was made. If this resource was deleted in this change, this field will be missing.',
        },
      ),
    resourceBeforeChange:
      GoogleAnalyticsAdminV1betaChangeHistoryChangeChangeHistoryResourceSchema.exactOptional().openapi(
        {
          description:
            'Resource contents from before the change was made. If this resource was created in this change, this field will be missing.',
        },
      ),
  })
  .openapi({
    description: 'A description of a change to a single Google Analytics resource.',
    required: [],
  })
  .openapi('GoogleAnalyticsAdminV1betaChangeHistoryChange')

const GoogleAnalyticsAdminV1betaChangeHistoryEventSchema = z
  .object({
    actorType: z
      .enum(['ACTOR_TYPE_UNSPECIFIED', 'USER', 'SYSTEM', 'SUPPORT'])
      .exactOptional()
      .openapi({ description: 'The type of actor that made this change.' }),
    changeTime: z.string().exactOptional().openapi({ description: 'Time when change was made.' }),
    changes: z
      .array(GoogleAnalyticsAdminV1betaChangeHistoryChangeSchema)
      .exactOptional()
      .openapi({
        description:
          'A list of changes made in this change history event that fit the filters specified in SearchChangeHistoryEventsRequest.',
      }),
    changesFiltered: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If true, then the list of changes returned was filtered, and does not represent all changes that occurred in this event.',
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'ID of this change history event. This ID is unique across Google Analytics.',
      }),
    userActorEmail: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Email address of the Google account that made the change. This will be a valid email address if the actor field is set to USER, and empty otherwise. Google accounts that have been deleted will cause an error.',
      }),
  })
  .openapi({
    description:
      'A set of changes within a Google Analytics account or its child properties that resulted from the same cause. Common causes would be updates made in the Google Analytics UI, changes from customer support, or automatic Google Analytics system changes.',
    required: [],
  })
  .openapi('GoogleAnalyticsAdminV1betaChangeHistoryEvent')

const GoogleAnalyticsAdminV1betaCustomDimensionSchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Description for this custom dimension. Max length of 150 characters.',
      }),
    disallowAdsPersonalization: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Optional. If set to true, sets this dimension as NPA and excludes it from ads personalization. This is currently only supported by user-scoped custom dimensions.',
      }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Display name for this custom dimension as shown in the Analytics UI. Max length of 82 characters, alphanumeric plus space and underscore starting with a letter. Legacy system-generated display names may contain square brackets, but updates to this field will never permit square brackets.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Resource name for this CustomDimension resource. Format: properties/{property}/customDimensions/{customDimension}',
        readOnly: true,
      }),
    parameterName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Immutable. Tagging parameter name for this custom dimension. If this is a user-scoped dimension, then this is the user property name. If this is an event-scoped dimension, then this is the event parameter name. If this is an item-scoped dimension, then this is the parameter name found in the eCommerce items array. May only contain alphanumeric and underscore characters, starting with a letter. Max length of 24 characters for user-scoped dimensions, 40 characters for event-scoped dimensions.',
      }),
    scope: z
      .enum(['DIMENSION_SCOPE_UNSPECIFIED', 'EVENT', 'USER', 'ITEM'])
      .exactOptional()
      .openapi({ description: 'Required. Immutable. The scope of this dimension.' }),
  })
  .openapi({ description: 'A definition for a CustomDimension.', required: [] })
  .openapi('GoogleAnalyticsAdminV1betaCustomDimension')

const GoogleAnalyticsAdminV1betaCustomMetricSchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Description for this custom dimension. Max length of 150 characters.',
      }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Display name for this custom metric as shown in the Analytics UI. Max length of 82 characters, alphanumeric plus space and underscore starting with a letter. Legacy system-generated display names may contain square brackets, but updates to this field will never permit square brackets.',
      }),
    measurementUnit: z
      .enum([
        'MEASUREMENT_UNIT_UNSPECIFIED',
        'STANDARD',
        'CURRENCY',
        'FEET',
        'METERS',
        'KILOMETERS',
        'MILES',
        'MILLISECONDS',
        'SECONDS',
        'MINUTES',
        'HOURS',
      ])
      .exactOptional()
      .openapi({ description: "Required. The type for the custom metric's value." }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Resource name for this CustomMetric resource. Format: properties/{property}/customMetrics/{customMetric}',
        readOnly: true,
      }),
    parameterName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Immutable. Tagging name for this custom metric. If this is an event-scoped metric, then this is the event parameter name. May only contain alphanumeric and underscore charactes, starting with a letter. Max length of 40 characters for event-scoped metrics.',
      }),
    restrictedMetricType: z
      .array(z.enum(['RESTRICTED_METRIC_TYPE_UNSPECIFIED', 'COST_DATA', 'REVENUE_DATA']))
      .exactOptional()
      .openapi({
        description:
          'Optional. Types of restricted data that this metric may contain. Required for metrics with CURRENCY measurement unit. Must be empty for metrics with a non-CURRENCY measurement unit.',
      }),
    scope: z
      .enum(['METRIC_SCOPE_UNSPECIFIED', 'EVENT'])
      .exactOptional()
      .openapi({ description: 'Required. Immutable. The scope of this custom metric.' }),
  })
  .openapi({ description: 'A definition for a custom metric.', required: [] })
  .openapi('GoogleAnalyticsAdminV1betaCustomMetric')

const GoogleAnalyticsAdminV1betaDataSharingSettingsSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Resource name. Format: accounts/{account}/dataSharingSettings Example: "accounts/1000/dataSharingSettings"',
        readOnly: true,
      }),
    sharingWithGoogleAnySalesEnabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Allows any of Google sales to access the data in order to suggest configuration changes to improve results.',
      }),
    sharingWithGoogleAssignedSalesEnabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Allows Google sales teams that are assigned to the customer to access the data in order to suggest configuration changes to improve results. Sales team restrictions still apply when enabled.',
      }),
    sharingWithGoogleProductsEnabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Allows Google to use the data to improve other Google products or services.',
      }),
    sharingWithGoogleSupportEnabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Allows Google support to access the data in order to help troubleshoot issues.',
      }),
    sharingWithOthersEnabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Allows Google to share the data anonymously in aggregate form with others.',
      }),
  })
  .openapi({
    description:
      'A resource message representing data sharing settings of a Google Analytics account.',
    required: [],
  })
  .openapi('GoogleAnalyticsAdminV1betaDataSharingSettings')

const GoogleAnalyticsAdminV1betaListAccountSummariesResponseSchema = z
  .object({
    accountSummaries: z
      .array(GoogleAnalyticsAdminV1betaAccountSummarySchema)
      .exactOptional()
      .openapi({ description: 'Account summaries of all accounts the caller has access to.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.',
      }),
  })
  .openapi({ description: 'Response message for ListAccountSummaries RPC.', required: [] })
  .openapi('GoogleAnalyticsAdminV1betaListAccountSummariesResponse')

const GoogleAnalyticsAdminV1betaListAccountsResponseSchema = z
  .object({
    accounts: z
      .array(GoogleAnalyticsAdminV1betaAccountSchema)
      .exactOptional()
      .openapi({ description: 'Results that were accessible to the caller.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.',
      }),
  })
  .openapi({ description: 'Request message for ListAccounts RPC.', required: [] })
  .openapi('GoogleAnalyticsAdminV1betaListAccountsResponse')

const GoogleAnalyticsAdminV1betaListConversionEventsResponseSchema = z
  .object({
    conversionEvents: z
      .array(GoogleAnalyticsAdminV1betaConversionEventSchema)
      .exactOptional()
      .openapi({ description: 'The requested conversion events' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.',
      }),
  })
  .openapi({ description: 'Response message for ListConversionEvents RPC.', required: [] })
  .openapi('GoogleAnalyticsAdminV1betaListConversionEventsResponse')

const GoogleAnalyticsAdminV1betaListCustomDimensionsResponseSchema = z
  .object({
    customDimensions: z
      .array(GoogleAnalyticsAdminV1betaCustomDimensionSchema)
      .exactOptional()
      .openapi({ description: 'List of CustomDimensions.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.',
      }),
  })
  .openapi({ description: 'Response message for ListCustomDimensions RPC.', required: [] })
  .openapi('GoogleAnalyticsAdminV1betaListCustomDimensionsResponse')

const GoogleAnalyticsAdminV1betaListCustomMetricsResponseSchema = z
  .object({
    customMetrics: z
      .array(GoogleAnalyticsAdminV1betaCustomMetricSchema)
      .exactOptional()
      .openapi({ description: 'List of CustomMetrics.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.',
      }),
  })
  .openapi({ description: 'Response message for ListCustomMetrics RPC.', required: [] })
  .openapi('GoogleAnalyticsAdminV1betaListCustomMetricsResponse')

const GoogleAnalyticsAdminV1betaListDataStreamsResponseSchema = z
  .object({
    dataStreams: z
      .array(GoogleAnalyticsAdminV1betaDataStreamSchema)
      .exactOptional()
      .openapi({ description: 'List of DataStreams.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.',
      }),
  })
  .openapi({ description: 'Response message for ListDataStreams RPC.', required: [] })
  .openapi('GoogleAnalyticsAdminV1betaListDataStreamsResponse')

const GoogleAnalyticsAdminV1betaListFirebaseLinksResponseSchema = z
  .object({
    firebaseLinks: z
      .array(GoogleAnalyticsAdminV1betaFirebaseLinkSchema)
      .exactOptional()
      .openapi({ description: 'List of FirebaseLinks. This will have at most one value.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. Currently, Google Analytics supports only one FirebaseLink per property, so this will never be populated.',
      }),
  })
  .openapi({ description: 'Response message for ListFirebaseLinks RPC', required: [] })
  .openapi('GoogleAnalyticsAdminV1betaListFirebaseLinksResponse')

const GoogleAnalyticsAdminV1betaListGoogleAdsLinksResponseSchema = z
  .object({
    googleAdsLinks: z
      .array(GoogleAnalyticsAdminV1betaGoogleAdsLinkSchema)
      .exactOptional()
      .openapi({ description: 'List of GoogleAdsLinks.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.',
      }),
  })
  .openapi({ description: 'Response message for ListGoogleAdsLinks RPC.', required: [] })
  .openapi('GoogleAnalyticsAdminV1betaListGoogleAdsLinksResponse')

const GoogleAnalyticsAdminV1betaListMeasurementProtocolSecretsResponseSchema = z
  .object({
    measurementProtocolSecrets: z
      .array(GoogleAnalyticsAdminV1betaMeasurementProtocolSecretSchema)
      .exactOptional()
      .openapi({
        description: 'A list of secrets for the parent stream specified in the request.',
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.',
      }),
  })
  .openapi({ description: 'Response message for ListMeasurementProtocolSecret RPC', required: [] })
  .openapi('GoogleAnalyticsAdminV1betaListMeasurementProtocolSecretsResponse')

const GoogleAnalyticsAdminV1betaListPropertiesResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.',
      }),
    properties: z
      .array(GoogleAnalyticsAdminV1betaPropertySchema)
      .exactOptional()
      .openapi({
        description: 'Results that matched the filter criteria and were accessible to the caller.',
      }),
  })
  .openapi({ description: 'Response message for ListProperties RPC.', required: [] })
  .openapi('GoogleAnalyticsAdminV1betaListPropertiesResponse')

const GoogleAnalyticsAdminV1betaProvisionAccountTicketRequestSchema = z
  .object({
    account: GoogleAnalyticsAdminV1betaAccountSchema.exactOptional().openapi({
      description: 'The account to create.',
    }),
    redirectUri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Redirect URI where the user will be sent after accepting Terms of Service. Must be configured in Cloud Console as a Redirect URI.',
      }),
  })
  .openapi({ description: 'Request message for ProvisionAccountTicket RPC.', required: [] })
  .openapi('GoogleAnalyticsAdminV1betaProvisionAccountTicketRequest')

const GoogleAnalyticsAdminV1betaProvisionAccountTicketResponseSchema = z
  .object({
    accountTicketId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The param to be passed in the ToS link.' }),
  })
  .openapi({ description: 'Response message for ProvisionAccountTicket RPC.', required: [] })
  .openapi('GoogleAnalyticsAdminV1betaProvisionAccountTicketResponse')

const GoogleAnalyticsAdminV1betaRunAccessReportRequestSchema = z
  .object({
    dateRanges: z
      .array(GoogleAnalyticsAdminV1betaAccessDateRangeSchema)
      .exactOptional()
      .openapi({
        description:
          'Date ranges of access records to read. If multiple date ranges are requested, each response row will contain a zero based date range index. If two date ranges overlap, the access records for the overlapping days is included in the response rows for both date ranges. Requests are allowed up to 2 date ranges.',
      }),
    dimensionFilter: GoogleAnalyticsAdminV1betaAccessFilterExpressionSchema.exactOptional().openapi(
      {
        description:
          'Dimension filters let you restrict report response to specific dimension values which match the filter. For example, filtering on access records of a single user. To learn more, see [Fundamentals of Dimension Filters](https://developers.google.com/analytics/devguides/reporting/data/v1/basics#dimension_filters) for examples. Metrics cannot be used in this filter.',
      },
    ),
    dimensions: z
      .array(GoogleAnalyticsAdminV1betaAccessDimensionSchema)
      .exactOptional()
      .openapi({
        description:
          'The dimensions requested and displayed in the response. Requests are allowed up to 9 dimensions.',
      }),
    limit: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The number of rows to return. If unspecified, 10,000 rows are returned. The API returns a maximum of 100,000 rows per request, no matter how many you ask for. `limit` must be positive. The API may return fewer rows than the requested `limit`, if there aren't as many remaining rows as the `limit`. For instance, there are fewer than 300 possible values for the dimension `country`, so when reporting on only `country`, you can't get more than 300 rows, even if you set `limit` to a higher value. To learn more about this pagination parameter, see [Pagination](https://developers.google.com/analytics/devguides/reporting/data/v1/basics#pagination).",
      }),
    metricFilter: GoogleAnalyticsAdminV1betaAccessFilterExpressionSchema.exactOptional().openapi({
      description:
        "Metric filters allow you to restrict report response to specific metric values which match the filter. Metric filters are applied after aggregating the report's rows, similar to SQL having-clause. Dimensions cannot be used in this filter.",
    }),
    metrics: z
      .array(GoogleAnalyticsAdminV1betaAccessMetricSchema)
      .exactOptional()
      .openapi({
        description:
          'The metrics requested and displayed in the response. Requests are allowed up to 10 metrics.',
      }),
    offset: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The row count of the start row. The first row is counted as row 0. If offset is unspecified, it is treated as 0. If offset is zero, then this method will return the first page of results with `limit` entries. To learn more about this pagination parameter, see [Pagination](https://developers.google.com/analytics/devguides/reporting/data/v1/basics#pagination).',
      }),
    orderBys: z
      .array(GoogleAnalyticsAdminV1betaAccessOrderBySchema)
      .exactOptional()
      .openapi({ description: 'Specifies how rows are ordered in the response.' }),
    returnEntityQuota: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Toggles whether to return the current state of this Analytics Property's quota. Quota is returned in [AccessQuota](#AccessQuota). For account-level requests, this field must be false.",
      }),
    timeZone: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'This request\'s time zone if specified. If unspecified, the property\'s time zone is used. The request\'s time zone is used to interpret the start & end dates of the report. Formatted as strings from the IANA Time Zone database (https://www.iana.org/time-zones); for example "America/New_York" or "Asia/Tokyo".',
      }),
  })
  .openapi({ description: 'The request for a Data Access Record Report.', required: [] })
  .openapi('GoogleAnalyticsAdminV1betaRunAccessReportRequest')

const GoogleAnalyticsAdminV1betaRunAccessReportResponseSchema = z
  .object({
    dimensionHeaders: z
      .array(GoogleAnalyticsAdminV1betaAccessDimensionHeaderSchema)
      .exactOptional()
      .openapi({
        description:
          'The header for a column in the report that corresponds to a specific dimension. The number of DimensionHeaders and ordering of DimensionHeaders matches the dimensions present in rows.',
      }),
    metricHeaders: z
      .array(GoogleAnalyticsAdminV1betaAccessMetricHeaderSchema)
      .exactOptional()
      .openapi({
        description:
          'The header for a column in the report that corresponds to a specific metric. The number of MetricHeaders and ordering of MetricHeaders matches the metrics present in rows.',
      }),
    quota: GoogleAnalyticsAdminV1betaAccessQuotaSchema.exactOptional().openapi({
      description:
        "The quota state for this Analytics property including this request. This field doesn't work with account-level requests.",
    }),
    rowCount: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The total number of rows in the query result. `rowCount` is independent of the number of rows returned in the response, the `limit` request parameter, and the `offset` request parameter. For example if a query returns 175 rows and includes `limit` of 50 in the API request, the response will contain `rowCount` of 175 but only 50 rows. To learn more about this pagination parameter, see [Pagination](https://developers.google.com/analytics/devguides/reporting/data/v1/basics#pagination).',
      }),
    rows: z
      .array(GoogleAnalyticsAdminV1betaAccessRowSchema)
      .exactOptional()
      .openapi({
        description: 'Rows of dimension value combinations and metric values in the report.',
      }),
  })
  .openapi({ description: 'The customized Data Access Record Report response.', required: [] })
  .openapi('GoogleAnalyticsAdminV1betaRunAccessReportResponse')

const GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsRequestSchema = z
  .object({
    action: z
      .array(z.enum(['ACTION_TYPE_UNSPECIFIED', 'CREATED', 'UPDATED', 'DELETED']))
      .exactOptional()
      .openapi({
        description:
          'Optional. If set, only return changes that match one or more of these types of actions.',
      }),
    actorEmail: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Optional. If set, only return changes if they are made by a user in this list.',
      }),
    earliestChangeTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Optional. If set, only return changes made after this time (inclusive).',
      }),
    latestChangeTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Optional. If set, only return changes made before this time (inclusive).',
      }),
    pageSize: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Optional. The maximum number of ChangeHistoryEvent items to return. The service may return fewer than this value, even if there are additional pages. If unspecified, at most 50 items will be returned. The maximum value is 200 (higher values will be coerced to the maximum).',
      }),
    pageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. A page token, received from a previous `SearchChangeHistoryEvents` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `SearchChangeHistoryEvents` must match the call that provided the page token.',
      }),
    property: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Resource name for a child property. If set, only return changes made to this property or its child resources.',
      }),
    resourceType: z
      .array(
        z.enum([
          'CHANGE_HISTORY_RESOURCE_TYPE_UNSPECIFIED',
          'ACCOUNT',
          'PROPERTY',
          'FIREBASE_LINK',
          'GOOGLE_ADS_LINK',
          'GOOGLE_SIGNALS_SETTINGS',
          'CONVERSION_EVENT',
          'MEASUREMENT_PROTOCOL_SECRET',
          'DATA_RETENTION_SETTINGS',
          'DISPLAY_VIDEO_360_ADVERTISER_LINK',
          'DISPLAY_VIDEO_360_ADVERTISER_LINK_PROPOSAL',
          'DATA_STREAM',
          'ATTRIBUTION_SETTINGS',
        ]),
      )
      .exactOptional()
      .openapi({
        description:
          'Optional. If set, only return changes if they are for a resource that matches at least one of these types.',
      }),
  })
  .openapi({ description: 'Request message for SearchChangeHistoryEvents RPC.', required: [] })
  .openapi('GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsRequest')

const GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsResponseSchema = z
  .object({
    changeHistoryEvents: z
      .array(GoogleAnalyticsAdminV1betaChangeHistoryEventSchema)
      .exactOptional()
      .openapi({ description: 'Results that were accessible to the caller.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.',
      }),
  })
  .openapi({ description: 'Response message for SearchAccounts RPC.', required: [] })
  .openapi('GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsResponse')

const GoogleProtobufEmptySchema = z
  .object({})
  .openapi({
    description:
      'A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); }',
  })
  .openapi('GoogleProtobufEmpty')

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
        'https://www.googleapis.com/auth/analytics.edit':
          'Edit Google Analytics management entities',
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
        'https://www.googleapis.com/auth/analytics.edit':
          'Edit Google Analytics management entities',
        'https://www.googleapis.com/auth/analytics.readonly':
          'See and download your Google Analytics data',
      },
      tokenUrl: 'https://accounts.google.com/o/oauth2/token',
    },
  },
  type: 'oauth2',
}

export const getV1betaAccountSummariesRoute = createRoute({
  method: 'get',
  path: '/v1beta/accountSummaries',
  tags: ['accountSummaries'],
  description: 'Returns summaries of all accounts accessible by the caller.',
  operationId: 'analyticsadmin.accountSummaries.list',
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
              'The maximum number of AccountSummary resources to return. The service may return fewer than this value, even if there are additional pages. If unspecified, at most 50 resources will be returned. The maximum value is 200; (higher values will be coerced to the maximum)',
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
              'A page token, received from a previous `ListAccountSummaries` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListAccountSummaries` must match the call that provided the page token.',
            in: 'query',
            name: 'pageToken',
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
        'application/json': {
          schema: GoogleAnalyticsAdminV1betaListAccountSummariesResponseSchema,
        },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/analytics.edit'],
      Oauth2c: ['https://www.googleapis.com/auth/analytics.edit'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/analytics.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/analytics.readonly'],
    },
  ],
})

export const getV1betaAccountsRoute = createRoute({
  method: 'get',
  path: '/v1beta/accounts',
  tags: ['accounts'],
  description:
    'Returns all accounts accessible by the caller. Note that these accounts might not currently have GA4 properties. Soft-deleted (ie: "trashed") accounts are excluded by default. Returns an empty list if no relevant accounts are found.',
  operationId: 'analyticsadmin.accounts.list',
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
              'The maximum number of resources to return. The service may return fewer than this value, even if there are additional pages. If unspecified, at most 50 resources will be returned. The maximum value is 200; (higher values will be coerced to the maximum)',
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
              'A page token, received from a previous `ListAccounts` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListAccounts` must match the call that provided the page token.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      showDeleted: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Whether to include soft-deleted (ie: "trashed") Accounts in the results. Accounts can be inspected to determine whether they are deleted or not.',
            in: 'query',
            name: 'showDeleted',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': { schema: GoogleAnalyticsAdminV1betaListAccountsResponseSchema },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/analytics.edit'],
      Oauth2c: ['https://www.googleapis.com/auth/analytics.edit'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/analytics.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/analytics.readonly'],
    },
  ],
})

export const postV1betaAccountsProvisionAccountTicketRoute = createRoute({
  method: 'post',
  path: '/v1beta/accounts:provisionAccountTicket',
  tags: ['accounts'],
  description: 'Requests a ticket for creating an account.',
  operationId: 'analyticsadmin.accounts.provisionAccountTicket',
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
    body: {
      content: {
        'application/json': {
          schema: GoogleAnalyticsAdminV1betaProvisionAccountTicketRequestSchema,
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': {
          schema: GoogleAnalyticsAdminV1betaProvisionAccountTicketResponseSchema,
        },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/analytics.edit'],
      Oauth2c: ['https://www.googleapis.com/auth/analytics.edit'],
    },
  ],
})

export const getV1betaPropertiesRoute = createRoute({
  method: 'get',
  path: '/v1beta/properties',
  tags: ['properties'],
  description:
    'Returns child Properties under the specified parent Account. Only "GA4" properties will be returned. Properties will be excluded if the caller does not have access. Soft-deleted (ie: "trashed") properties are excluded by default. Returns an empty list if no relevant properties are found.',
  operationId: 'analyticsadmin.properties.list',
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
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Required. An expression for filtering the results of the request. Fields eligible for filtering are: `parent:`(The resource name of the parent account/property) or `ancestor:`(The resource name of the parent account) or `firebase_project:`(The id or number of the linked firebase project). Some examples of filters: ``` | Filter | Description | |-----------------------------|-------------------------------------------| | parent:accounts/123 | The account with account id: 123. | | parent:properties/123 | The property with property id: 123. | | ancestor:accounts/123 | The account with account id: 123. | | firebase_project:project-id | The firebase project with id: project-id. | | firebase_project:123 | The firebase project with number: 123. | ```',
            in: 'query',
            name: 'filter',
            schema: { type: 'string' },
            required: false,
          },
        }),
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
              'The maximum number of resources to return. The service may return fewer than this value, even if there are additional pages. If unspecified, at most 50 resources will be returned. The maximum value is 200; (higher values will be coerced to the maximum)',
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
              'A page token, received from a previous `ListProperties` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListProperties` must match the call that provided the page token.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      showDeleted: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Whether to include soft-deleted (ie: "trashed") Properties in the results. Properties can be inspected to determine whether they are deleted or not.',
            in: 'query',
            name: 'showDeleted',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': { schema: GoogleAnalyticsAdminV1betaListPropertiesResponseSchema },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/analytics.edit'],
      Oauth2c: ['https://www.googleapis.com/auth/analytics.edit'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/analytics.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/analytics.readonly'],
    },
  ],
})

export const postV1betaPropertiesRoute = createRoute({
  method: 'post',
  path: '/v1beta/properties',
  tags: ['properties'],
  description: 'Creates an "GA4" property with the specified location and attributes.',
  operationId: 'analyticsadmin.properties.create',
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
    body: { content: { 'application/json': { schema: GoogleAnalyticsAdminV1betaPropertySchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleAnalyticsAdminV1betaPropertySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/analytics.edit'],
      Oauth2c: ['https://www.googleapis.com/auth/analytics.edit'],
    },
  ],
})

export const postV1betaAccountSearchChangeHistoryEventsRoute = createRoute({
  method: 'post',
  path: '/v1beta/{account}:searchChangeHistoryEvents',
  tags: ['accounts'],
  description:
    'Searches through all changes to an account or its children given the specified set of filters.',
  operationId: 'analyticsadmin.accounts.searchChangeHistoryEvents',
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
      account: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The account resource for which to return change history resources.',
            in: 'path',
            name: 'account',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsRequestSchema,
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': {
          schema: GoogleAnalyticsAdminV1betaSearchChangeHistoryEventsResponseSchema,
        },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/analytics.edit'],
      Oauth2c: ['https://www.googleapis.com/auth/analytics.edit'],
    },
  ],
})

export const postV1betaEntityRunAccessReportRoute = createRoute({
  method: 'post',
  path: '/v1beta/{entity}:runAccessReport',
  tags: ['properties'],
  description:
    "Returns a customized report of data access records. The report provides records of each time a user reads Google Analytics reporting data. Access records are retained for up to 2 years. Data Access Reports can be requested for a property. The property must be in Google Analytics 360. This method is only available to Administrators. These data access records include GA4 UI Reporting, GA4 UI Explorations, GA4 Data API, and other products like Firebase & Admob that can retrieve data from Google Analytics through a linkage. These records don't include property configuration changes like adding a stream or changing a property's time zone. For configuration change history, see [searchChangeHistoryEvents](https://developers.google.com/analytics/devguides/config/admin/v1/rest/v1alpha/accounts/searchChangeHistoryEvents).",
  operationId: 'analyticsadmin.properties.runAccessReport',
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
      entity: z
        .string()
        .openapi({
          param: {
            description:
              'The Data Access Report supports requesting at the property level or account level. If requested at the account level, Data Access Reports include all access for all properties under that account. To request at the property level, entity should be for example \'properties/123\' if "123" is your GA4 property ID. To request at the account level, entity should be for example \'accounts/1234\' if "1234" is your GA4 Account ID.',
            in: 'path',
            name: 'entity',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: GoogleAnalyticsAdminV1betaRunAccessReportRequestSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': { schema: GoogleAnalyticsAdminV1betaRunAccessReportResponseSchema },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/analytics.edit'],
      Oauth2c: ['https://www.googleapis.com/auth/analytics.edit'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/analytics.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/analytics.readonly'],
    },
  ],
})

export const getV1betaNameRoute = createRoute({
  method: 'get',
  path: '/v1beta/{name}',
  tags: ['properties'],
  description: 'Lookup for a single "GA4" MeasurementProtocolSecret.',
  operationId: 'analyticsadmin.properties.dataStreams.measurementProtocolSecrets.get',
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
              'Required. The name of the measurement protocol secret to lookup. Format: properties/{property}/dataStreams/{dataStream}/measurementProtocolSecrets/{measurementProtocolSecret}',
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
      content: {
        'application/json': { schema: GoogleAnalyticsAdminV1betaMeasurementProtocolSecretSchema },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/analytics.edit'],
      Oauth2c: ['https://www.googleapis.com/auth/analytics.edit'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/analytics.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/analytics.readonly'],
    },
  ],
})

export const deleteV1betaNameRoute = createRoute({
  method: 'delete',
  path: '/v1beta/{name}',
  tags: ['properties'],
  description: 'Deletes a GoogleAdsLink on a property',
  operationId: 'analyticsadmin.properties.googleAdsLinks.delete',
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
            description: 'Required. Example format: properties/1234/googleAdsLinks/5678',
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
      content: { 'application/json': { schema: GoogleProtobufEmptySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/analytics.edit'],
      Oauth2c: ['https://www.googleapis.com/auth/analytics.edit'],
    },
  ],
})

export const patchV1betaNameRoute = createRoute({
  method: 'patch',
  path: '/v1beta/{name}',
  tags: ['properties'],
  description: 'Updates a GoogleAdsLink on a property',
  operationId: 'analyticsadmin.properties.googleAdsLinks.patch',
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
      updateMask: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Required. The list of fields to be updated. Field names must be in snake case (e.g., "field_to_update"). Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields.',
            in: 'query',
            name: 'updateMask',
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
              'Output only. Format: properties/{propertyId}/googleAdsLinks/{googleAdsLinkId} Note: googleAdsLinkId is not the Google Ads customer ID.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GoogleAnalyticsAdminV1betaGoogleAdsLinkSchema } },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleAnalyticsAdminV1betaGoogleAdsLinkSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/analytics.edit'],
      Oauth2c: ['https://www.googleapis.com/auth/analytics.edit'],
    },
  ],
})

export const postV1betaNameArchiveRoute = createRoute({
  method: 'post',
  path: '/v1beta/{name}:archive',
  tags: ['properties'],
  description: 'Archives a CustomMetric on a property.',
  operationId: 'analyticsadmin.properties.customMetrics.archive',
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
              'Required. The name of the CustomMetric to archive. Example format: properties/1234/customMetrics/5678',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: GoogleAnalyticsAdminV1betaArchiveCustomMetricRequestSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleProtobufEmptySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/analytics.edit'],
      Oauth2c: ['https://www.googleapis.com/auth/analytics.edit'],
    },
  ],
})

export const getV1betaParentConversionEventsRoute = createRoute({
  method: 'get',
  path: '/v1beta/{parent}/conversionEvents',
  tags: ['properties'],
  description:
    'Returns a list of conversion events in the specified parent property. Returns an empty list if no conversion events are found.',
  operationId: 'analyticsadmin.properties.conversionEvents.list',
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
              'The maximum number of resources to return. If unspecified, at most 50 resources will be returned. The maximum value is 200; (higher values will be coerced to the maximum)',
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
              'A page token, received from a previous `ListConversionEvents` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListConversionEvents` must match the call that provided the page token.',
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
              "Required. The resource name of the parent property. Example: 'properties/123'",
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
      content: {
        'application/json': {
          schema: GoogleAnalyticsAdminV1betaListConversionEventsResponseSchema,
        },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/analytics.edit'],
      Oauth2c: ['https://www.googleapis.com/auth/analytics.edit'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/analytics.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/analytics.readonly'],
    },
  ],
})

export const postV1betaParentConversionEventsRoute = createRoute({
  method: 'post',
  path: '/v1beta/{parent}/conversionEvents',
  tags: ['properties'],
  description: 'Creates a conversion event with the specified attributes.',
  operationId: 'analyticsadmin.properties.conversionEvents.create',
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
              'Required. The resource name of the parent property where this conversion event will be created. Format: properties/123',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GoogleAnalyticsAdminV1betaConversionEventSchema } },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleAnalyticsAdminV1betaConversionEventSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/analytics.edit'],
      Oauth2c: ['https://www.googleapis.com/auth/analytics.edit'],
    },
  ],
})

export const getV1betaParentCustomDimensionsRoute = createRoute({
  method: 'get',
  path: '/v1beta/{parent}/customDimensions',
  tags: ['properties'],
  description: 'Lists CustomDimensions on a property.',
  operationId: 'analyticsadmin.properties.customDimensions.list',
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
              'The maximum number of resources to return. If unspecified, at most 50 resources will be returned. The maximum value is 200 (higher values will be coerced to the maximum).',
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
              'A page token, received from a previous `ListCustomDimensions` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListCustomDimensions` must match the call that provided the page token.',
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
            description: 'Required. Example format: properties/1234',
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
      content: {
        'application/json': {
          schema: GoogleAnalyticsAdminV1betaListCustomDimensionsResponseSchema,
        },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/analytics.edit'],
      Oauth2c: ['https://www.googleapis.com/auth/analytics.edit'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/analytics.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/analytics.readonly'],
    },
  ],
})

export const postV1betaParentCustomDimensionsRoute = createRoute({
  method: 'post',
  path: '/v1beta/{parent}/customDimensions',
  tags: ['properties'],
  description: 'Creates a CustomDimension.',
  operationId: 'analyticsadmin.properties.customDimensions.create',
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
            description: 'Required. Example format: properties/1234',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GoogleAnalyticsAdminV1betaCustomDimensionSchema } },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleAnalyticsAdminV1betaCustomDimensionSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/analytics.edit'],
      Oauth2c: ['https://www.googleapis.com/auth/analytics.edit'],
    },
  ],
})

export const getV1betaParentCustomMetricsRoute = createRoute({
  method: 'get',
  path: '/v1beta/{parent}/customMetrics',
  tags: ['properties'],
  description: 'Lists CustomMetrics on a property.',
  operationId: 'analyticsadmin.properties.customMetrics.list',
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
              'The maximum number of resources to return. If unspecified, at most 50 resources will be returned. The maximum value is 200 (higher values will be coerced to the maximum).',
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
              'A page token, received from a previous `ListCustomMetrics` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListCustomMetrics` must match the call that provided the page token.',
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
            description: 'Required. Example format: properties/1234',
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
      content: {
        'application/json': { schema: GoogleAnalyticsAdminV1betaListCustomMetricsResponseSchema },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/analytics.edit'],
      Oauth2c: ['https://www.googleapis.com/auth/analytics.edit'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/analytics.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/analytics.readonly'],
    },
  ],
})

export const postV1betaParentCustomMetricsRoute = createRoute({
  method: 'post',
  path: '/v1beta/{parent}/customMetrics',
  tags: ['properties'],
  description: 'Creates a CustomMetric.',
  operationId: 'analyticsadmin.properties.customMetrics.create',
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
            description: 'Required. Example format: properties/1234',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GoogleAnalyticsAdminV1betaCustomMetricSchema } },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleAnalyticsAdminV1betaCustomMetricSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/analytics.edit'],
      Oauth2c: ['https://www.googleapis.com/auth/analytics.edit'],
    },
  ],
})

export const getV1betaParentDataStreamsRoute = createRoute({
  method: 'get',
  path: '/v1beta/{parent}/dataStreams',
  tags: ['properties'],
  description: 'Lists DataStreams on a property.',
  operationId: 'analyticsadmin.properties.dataStreams.list',
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
              'The maximum number of resources to return. If unspecified, at most 50 resources will be returned. The maximum value is 200 (higher values will be coerced to the maximum).',
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
              'A page token, received from a previous `ListDataStreams` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListDataStreams` must match the call that provided the page token.',
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
            description: 'Required. Example format: properties/1234',
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
      content: {
        'application/json': { schema: GoogleAnalyticsAdminV1betaListDataStreamsResponseSchema },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/analytics.edit'],
      Oauth2c: ['https://www.googleapis.com/auth/analytics.edit'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/analytics.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/analytics.readonly'],
    },
  ],
})

export const postV1betaParentDataStreamsRoute = createRoute({
  method: 'post',
  path: '/v1beta/{parent}/dataStreams',
  tags: ['properties'],
  description: 'Creates a DataStream.',
  operationId: 'analyticsadmin.properties.dataStreams.create',
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
            description: 'Required. Example format: properties/1234',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GoogleAnalyticsAdminV1betaDataStreamSchema } },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleAnalyticsAdminV1betaDataStreamSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/analytics.edit'],
      Oauth2c: ['https://www.googleapis.com/auth/analytics.edit'],
    },
  ],
})

export const getV1betaParentFirebaseLinksRoute = createRoute({
  method: 'get',
  path: '/v1beta/{parent}/firebaseLinks',
  tags: ['properties'],
  description: 'Lists FirebaseLinks on a property. Properties can have at most one FirebaseLink.',
  operationId: 'analyticsadmin.properties.firebaseLinks.list',
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
              'The maximum number of resources to return. The service may return fewer than this value, even if there are additional pages. If unspecified, at most 50 resources will be returned. The maximum value is 200; (higher values will be coerced to the maximum)',
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
              'A page token, received from a previous `ListFirebaseLinks` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListFirebaseLinks` must match the call that provided the page token.',
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
            description: 'Required. Format: properties/{property_id} Example: properties/1234',
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
      content: {
        'application/json': { schema: GoogleAnalyticsAdminV1betaListFirebaseLinksResponseSchema },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/analytics.edit'],
      Oauth2c: ['https://www.googleapis.com/auth/analytics.edit'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/analytics.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/analytics.readonly'],
    },
  ],
})

export const postV1betaParentFirebaseLinksRoute = createRoute({
  method: 'post',
  path: '/v1beta/{parent}/firebaseLinks',
  tags: ['properties'],
  description: 'Creates a FirebaseLink. Properties can have at most one FirebaseLink.',
  operationId: 'analyticsadmin.properties.firebaseLinks.create',
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
            description: 'Required. Format: properties/{property_id} Example: properties/1234',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GoogleAnalyticsAdminV1betaFirebaseLinkSchema } },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleAnalyticsAdminV1betaFirebaseLinkSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/analytics.edit'],
      Oauth2c: ['https://www.googleapis.com/auth/analytics.edit'],
    },
  ],
})

export const getV1betaParentGoogleAdsLinksRoute = createRoute({
  method: 'get',
  path: '/v1beta/{parent}/googleAdsLinks',
  tags: ['properties'],
  description: 'Lists GoogleAdsLinks on a property.',
  operationId: 'analyticsadmin.properties.googleAdsLinks.list',
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
              'The maximum number of resources to return. If unspecified, at most 50 resources will be returned. The maximum value is 200 (higher values will be coerced to the maximum).',
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
              'A page token, received from a previous `ListGoogleAdsLinks` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListGoogleAdsLinks` must match the call that provided the page token.',
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
            description: 'Required. Example format: properties/1234',
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
      content: {
        'application/json': { schema: GoogleAnalyticsAdminV1betaListGoogleAdsLinksResponseSchema },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/analytics.edit'],
      Oauth2c: ['https://www.googleapis.com/auth/analytics.edit'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/analytics.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/analytics.readonly'],
    },
  ],
})

export const postV1betaParentGoogleAdsLinksRoute = createRoute({
  method: 'post',
  path: '/v1beta/{parent}/googleAdsLinks',
  tags: ['properties'],
  description: 'Creates a GoogleAdsLink.',
  operationId: 'analyticsadmin.properties.googleAdsLinks.create',
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
            description: 'Required. Example format: properties/1234',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GoogleAnalyticsAdminV1betaGoogleAdsLinkSchema } },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleAnalyticsAdminV1betaGoogleAdsLinkSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/analytics.edit'],
      Oauth2c: ['https://www.googleapis.com/auth/analytics.edit'],
    },
  ],
})

export const getV1betaParentMeasurementProtocolSecretsRoute = createRoute({
  method: 'get',
  path: '/v1beta/{parent}/measurementProtocolSecrets',
  tags: ['properties'],
  description: 'Returns child MeasurementProtocolSecrets under the specified parent Property.',
  operationId: 'analyticsadmin.properties.dataStreams.measurementProtocolSecrets.list',
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
              'The maximum number of resources to return. If unspecified, at most 10 resources will be returned. The maximum value is 10. Higher values will be coerced to the maximum.',
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
              'A page token, received from a previous `ListMeasurementProtocolSecrets` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListMeasurementProtocolSecrets` must match the call that provided the page token.',
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
              'Required. The resource name of the parent stream. Format: properties/{property}/dataStreams/{dataStream}/measurementProtocolSecrets',
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
      content: {
        'application/json': {
          schema: GoogleAnalyticsAdminV1betaListMeasurementProtocolSecretsResponseSchema,
        },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/analytics.edit'],
      Oauth2c: ['https://www.googleapis.com/auth/analytics.edit'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/analytics.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/analytics.readonly'],
    },
  ],
})

export const postV1betaParentMeasurementProtocolSecretsRoute = createRoute({
  method: 'post',
  path: '/v1beta/{parent}/measurementProtocolSecrets',
  tags: ['properties'],
  description: 'Creates a measurement protocol secret.',
  operationId: 'analyticsadmin.properties.dataStreams.measurementProtocolSecrets.create',
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
              'Required. The parent resource where this secret will be created. Format: properties/{property}/dataStreams/{dataStream}',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: GoogleAnalyticsAdminV1betaMeasurementProtocolSecretSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': { schema: GoogleAnalyticsAdminV1betaMeasurementProtocolSecretSchema },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/analytics.edit'],
      Oauth2c: ['https://www.googleapis.com/auth/analytics.edit'],
    },
  ],
})

export const postV1betaPropertyAcknowledgeUserDataCollectionRoute = createRoute({
  method: 'post',
  path: '/v1beta/{property}:acknowledgeUserDataCollection',
  tags: ['properties'],
  description:
    'Acknowledges the terms of user data collection for the specified property. This acknowledgement must be completed (either in the Google Analytics UI or through this API) before MeasurementProtocolSecret resources may be created.',
  operationId: 'analyticsadmin.properties.acknowledgeUserDataCollection',
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
            description: 'Required. The property for which to acknowledge user data collection.',
            in: 'path',
            name: 'property',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: GoogleAnalyticsAdminV1betaAcknowledgeUserDataCollectionRequestSchema,
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': {
          schema: GoogleAnalyticsAdminV1betaAcknowledgeUserDataCollectionResponseSchema,
        },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/analytics.edit'],
      Oauth2c: ['https://www.googleapis.com/auth/analytics.edit'],
    },
  ],
})
