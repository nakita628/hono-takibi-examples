import { createRoute, z } from '@hono/zod-openapi'

const AdSourceSchema = z
  .object({
    adSourceId: z.string().exactOptional().openapi({ description: 'ID of this ad source.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Resource name of this ad source. Format is: accounts/{publisher_id}/adSources/{ad_source_id}',
      }),
    title: z.string().exactOptional().openapi({ description: 'Display name of this ad source.' }),
  })
  .openapi({ description: 'Definition of a mediation ad source.', required: [] })
  .openapi('AdSource')

const AdUnitSchema = z
  .object({
    adFormat: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'AdFormat of the ad unit. Possible values are as follows: "APP_OPEN" - App Open ad format. "BANNER" - Banner ad format. "BANNER_INTERSTITIAL" - Legacy format that can be used as either banner or interstitial. This format can no longer be created but can be targeted by mediation groups. "INTERSTITIAL" - A full screen ad. Supported ad types are "RICH_MEDIA" and "VIDEO". "NATIVE" - Native ad format. "REWARDED" - An ad that, once viewed, gets a callback verifying the view so that a reward can be given to the user. Supported ad types are "RICH_MEDIA" (interactive) and video where video can not be excluded. "REWARDED_INTERSTITIAL" - Rewarded Interstitial ad format. Only supports video ad type. See https://support.google.com/admob/answer/9884467.',
      }),
    adTypes: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Ad media type supported by this ad unit. Possible values as follows: "RICH_MEDIA" - Text, image, and other non-video media. "VIDEO" - Video media.',
      }),
    adUnitId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The externally visible ID of the ad unit which can be used to integrate with the AdMob SDK. This is a read only property. Example: ca-app-pub-9876543210987654/0123456789',
      }),
    appId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The externally visible ID of the app this ad unit is associated with. Example: ca-app-pub-9876543210987654~0123456789',
      }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The display name of the ad unit as shown in the AdMob UI, which is provided by the user. The maximum length allowed is 80 characters.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Resource name for this ad unit. Format is accounts/{publisher_id}/adUnits/{ad_unit_id_fragment} Example: accounts/pub-9876543210987654/adUnits/0123456789',
      }),
  })
  .openapi({ description: 'Describes an AdMob ad unit.', required: [] })
  .openapi('AdUnit')

const AppLinkedAppInfoSchema = z
  .object({
    appStoreId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The app store ID of the app; present if and only if the app is linked to an app store. If the app is added to the Google Play store, it will be the application ID of the app. For example: "com.example.myapp". See https://developer.android.com/studio/build/application-id. If the app is added to the Apple App Store, it will be app store ID. For example "105169111". Note that setting the app store id is considered an irreversible action. Once an app is linked, it cannot be unlinked.',
      }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Display name of the app as it appears in the app store. This is an output-only field, and may be empty if the app cannot be found in the store.',
        readOnly: true,
      }),
  })
  .openapi({
    description: 'Information from the app store if the app is linked to an app store.',
    required: [],
  })
  .openapi('AppLinkedAppInfo')

const AppManualAppInfoSchema = z
  .object({
    displayName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The display name of the app as shown in the AdMob UI, which is provided by the user. The maximum length allowed is 80 characters.',
      }),
  })
  .openapi({
    description:
      'Information provided for manual apps which are not linked to an application store (Example: Google Play, App Store).',
    required: [],
  })
  .openapi('AppManualAppInfo')

const AppSchema = z
  .object({
    appApprovalState: z
      .enum(['APP_APPROVAL_STATE_UNSPECIFIED', 'ACTION_REQUIRED', 'IN_REVIEW', 'APPROVED'])
      .exactOptional()
      .openapi({ description: 'Output only. The approval state for the app.', readOnly: true }),
    appId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The externally visible ID of the app which can be used to integrate with the AdMob SDK. This is a read only property. Example: ca-app-pub-9876543210987654~0123456789',
      }),
    linkedAppInfo: AppLinkedAppInfoSchema.exactOptional().openapi({
      description:
        'Immutable. The information for an app that is linked to an app store. This field is present if and only if the app is linked to an app store.',
    }),
    manualAppInfo: AppManualAppInfoSchema.exactOptional().openapi({
      description:
        'The information for an app that is not linked to any app store. After an app is linked, this information is still retrivable. If no name is provided for the app upon creation, a placeholder name will be used.',
    }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Resource name for this app. Format is accounts/{publisher_id}/apps/{app_id_fragment} Example: accounts/pub-9876543210987654/apps/0123456789',
      }),
    platform: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Describes the platform of the app. Limited to "IOS" and "ANDROID".',
      }),
  })
  .openapi({
    description: 'Describes an AdMob app for a specific platform (For example: Android or iOS).',
    required: [],
  })
  .openapi('App')

const DateSchema = z
  .object({
    day: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          "Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.",
      }),
    month: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.',
      }),
    year: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.',
      }),
  })
  .openapi({
    description:
      'Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp',
    required: [],
  })
  .openapi('Date')

const DateRangeSchema = z
  .object({
    endDate: DateSchema.exactOptional().openapi({
      description:
        'End date of the date range, inclusive. Must be greater than or equal to the start date.',
    }),
    startDate: DateSchema.exactOptional().openapi({
      description:
        'Start date of the date range, inclusive. Must be less than or equal to the end date.',
    }),
  })
  .openapi({
    description: 'Specification of a single date range. Both dates are inclusive.',
    required: [],
  })
  .openapi('DateRange')

const StringListSchema = z
  .object({
    values: z.array(z.string()).exactOptional().openapi({ description: 'The string values.' }),
  })
  .openapi({ description: 'List of string values.', required: [] })
  .openapi('StringList')

const MediationReportSpecDimensionFilterSchema = z
  .object({
    dimension: z
      .enum([
        'DIMENSION_UNSPECIFIED',
        'DATE',
        'MONTH',
        'WEEK',
        'AD_SOURCE',
        'AD_SOURCE_INSTANCE',
        'AD_UNIT',
        'APP',
        'MEDIATION_GROUP',
        'COUNTRY',
        'FORMAT',
        'PLATFORM',
        'MOBILE_OS_VERSION',
        'GMA_SDK_VERSION',
        'APP_VERSION_NAME',
        'SERVING_RESTRICTION',
      ])
      .exactOptional()
      .openapi({ description: 'Applies the filter criterion to the specified dimension.' }),
    matchesAny: StringListSchema.exactOptional().openapi({
      description:
        'Matches a row if its value for the specified dimension is in one of the values specified in this condition.',
    }),
  })
  .openapi({
    description: 'Describes which report rows to match based on their dimension values.',
    required: [],
  })
  .openapi('MediationReportSpecDimensionFilter')

const LocalizationSettingsSchema = z
  .object({
    currencyCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Currency code of the earning related metrics, which is the 3-letter code defined in ISO 4217. The daily average rate is used for the currency conversion. Defaults to the account currency code if unspecified.',
      }),
    languageCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Language used for any localized text, such as some dimension value display labels. The language tag defined in the IETF BCP47. Defaults to 'en-US' if unspecified.",
      }),
  })
  .openapi({
    description:
      'Localization settings for reports, such as currency and language. It affects how metrics are calculated.',
    required: [],
  })
  .openapi('LocalizationSettings')

const MediationReportSpecSortConditionSchema = z
  .object({
    dimension: z
      .enum([
        'DIMENSION_UNSPECIFIED',
        'DATE',
        'MONTH',
        'WEEK',
        'AD_SOURCE',
        'AD_SOURCE_INSTANCE',
        'AD_UNIT',
        'APP',
        'MEDIATION_GROUP',
        'COUNTRY',
        'FORMAT',
        'PLATFORM',
        'MOBILE_OS_VERSION',
        'GMA_SDK_VERSION',
        'APP_VERSION_NAME',
        'SERVING_RESTRICTION',
      ])
      .exactOptional()
      .openapi({ description: 'Sort by the specified dimension.' }),
    metric: z
      .enum([
        'METRIC_UNSPECIFIED',
        'AD_REQUESTS',
        'CLICKS',
        'ESTIMATED_EARNINGS',
        'IMPRESSIONS',
        'IMPRESSION_CTR',
        'MATCHED_REQUESTS',
        'MATCH_RATE',
        'OBSERVED_ECPM',
      ])
      .exactOptional()
      .openapi({ description: 'Sort by the specified metric.' }),
    order: z
      .enum(['SORT_ORDER_UNSPECIFIED', 'ASCENDING', 'DESCENDING'])
      .exactOptional()
      .openapi({ description: 'Sorting order of the dimension or metric.' }),
  })
  .openapi({
    description: 'Sorting direction to be applied on a dimension or a metric.',
    required: [],
  })
  .openapi('MediationReportSpecSortCondition')

const MediationReportSpecSchema = z
  .object({
    dateRange: DateRangeSchema.exactOptional().openapi({
      description: 'The date range for which the report is generated.',
    }),
    dimensionFilters: z
      .array(MediationReportSpecDimensionFilterSchema)
      .exactOptional()
      .openapi({
        description: 'Describes which report rows to match based on their dimension values.',
      }),
    dimensions: z
      .array(
        z.enum([
          'DIMENSION_UNSPECIFIED',
          'DATE',
          'MONTH',
          'WEEK',
          'AD_SOURCE',
          'AD_SOURCE_INSTANCE',
          'AD_UNIT',
          'APP',
          'MEDIATION_GROUP',
          'COUNTRY',
          'FORMAT',
          'PLATFORM',
          'MOBILE_OS_VERSION',
          'GMA_SDK_VERSION',
          'APP_VERSION_NAME',
          'SERVING_RESTRICTION',
        ]),
      )
      .exactOptional()
      .openapi({
        description:
          'List of dimensions of the report. The value combination of these dimensions determines the row of the report. If no dimensions are specified, the report returns a single row of requested metrics for the entire account.',
      }),
    localizationSettings: LocalizationSettingsSchema.exactOptional().openapi({
      description: 'Localization settings of the report.',
    }),
    maxReportRows: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Maximum number of report data rows to return. If the value is not set, the API returns as many rows as possible, up to 100000. Acceptable values are 1-100000, inclusive. Values larger than 100000 return an error.',
      }),
    metrics: z
      .array(
        z.enum([
          'METRIC_UNSPECIFIED',
          'AD_REQUESTS',
          'CLICKS',
          'ESTIMATED_EARNINGS',
          'IMPRESSIONS',
          'IMPRESSION_CTR',
          'MATCHED_REQUESTS',
          'MATCH_RATE',
          'OBSERVED_ECPM',
        ]),
      )
      .exactOptional()
      .openapi({
        description: 'List of metrics of the report. A report must specify at least one metric.',
      }),
    sortConditions: z
      .array(MediationReportSpecSortConditionSchema)
      .exactOptional()
      .openapi({
        description:
          'Describes the sorting of report rows. The order of the condition in the list defines its precedence; the earlier the condition, the higher its precedence. If no sort conditions are specified, the row ordering is undefined.',
      }),
    timeZone: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A report time zone. Accepts an IANA TZ name values, such as "America/Los_Angeles." If no time zone is defined, the account default takes effect. Check default value by the get account action. **Warning:** The "America/Los_Angeles" is the only supported value at the moment.',
      }),
  })
  .openapi({
    description:
      'The specification for generating an AdMob Mediation report. For example, the specification to get observed ECPM sliced by ad source and app for the \'US\' and \'CN\' countries can look like the following example: { "date_range": { "start_date": {"year": 2021, "month": 9, "day": 1}, "end_date": {"year": 2021, "month": 9, "day": 30} }, "dimensions": ["AD_SOURCE", "APP", "COUNTRY"], "metrics": ["OBSERVED_ECPM"], "dimension_filters": [ { "dimension": "COUNTRY", "matches_any": {"values": [{"value": "US", "value": "CN"}]} } ], "sort_conditions": [ {"dimension":"APP", order: "ASCENDING"} ], "localization_settings": { "currency_code": "USD", "language_code": "en-US" } } For a better understanding, you can treat the preceding specification like the following pseudo SQL: SELECT AD_SOURCE, APP, COUNTRY, OBSERVED_ECPM FROM MEDIATION_REPORT WHERE DATE >= \'2021-09-01\' AND DATE <= \'2021-09-30\' AND COUNTRY IN (\'US\', \'CN\') GROUP BY AD_SOURCE, APP, COUNTRY ORDER BY APP ASC;',
    required: [],
  })
  .openapi('MediationReportSpec')

const GenerateMediationReportRequestSchema = z
  .object({
    reportSpec: MediationReportSpecSchema.exactOptional().openapi({
      description: 'Network report specification.',
    }),
  })
  .openapi({ description: 'Request to generate an AdMob mediation report.', required: [] })
  .openapi('GenerateMediationReportRequest')

const ReportWarningSchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'Describes the details of the warning message, in English.' }),
    type: z
      .enum([
        'TYPE_UNSPECIFIED',
        'DATA_BEFORE_ACCOUNT_TIMEZONE_CHANGE',
        'DATA_DELAYED',
        'OTHER',
        'REPORT_CURRENCY_NOT_ACCOUNT_CURRENCY',
      ])
      .exactOptional()
      .openapi({ description: 'Type of the warning.' }),
  })
  .openapi({ description: 'Warnings associated with generation of the report.', required: [] })
  .openapi('ReportWarning')

const ReportFooterSchema = z
  .object({
    matchingRowCount: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Total number of rows that matched the request. Warning: This count does NOT always match the number of rows in the response. Do not make that assumption when processing the response.',
      }),
    warnings: z
      .array(ReportWarningSchema)
      .exactOptional()
      .openapi({ description: 'Warnings associated with generation of the report.' }),
  })
  .openapi({
    description:
      'Groups data available after report generation, for example, warnings and row counts. Always sent as the last message in the stream response.',
    required: [],
  })
  .openapi('ReportFooter')

const ReportHeaderSchema = z
  .object({
    dateRange: DateRangeSchema.exactOptional().openapi({
      description:
        'The date range for which the report is generated. This is identical to the range specified in the report request.',
    }),
    localizationSettings: LocalizationSettingsSchema.exactOptional().openapi({
      description:
        'Localization settings of the report. This is identical to the settings in the report request.',
    }),
    reportingTimeZone: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The report time zone. The value is a time-zone ID as specified by the CLDR project, for example, "America/Los_Angeles".',
      }),
  })
  .openapi({
    description:
      'Groups data helps to treat the generated report. Always sent as a first message in the stream response.',
    required: [],
  })
  .openapi('ReportHeader')

const ReportRowDimensionValueSchema = z
  .object({
    displayLabel: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The localized string representation of the value. If unspecified, the display label should be derived from the value.',
      }),
    value: z
      .string()
      .exactOptional()
      .openapi({
        description: "Dimension value in the format specified in the report's spec Dimension enum.",
      }),
  })
  .openapi({ description: 'Representation of a dimension value.', required: [] })
  .openapi('ReportRowDimensionValue')

const ReportRowMetricValueSchema = z
  .object({
    doubleValue: z
      .float64()
      .exactOptional()
      .openapi({
        description: 'Double precision (approximate) decimal values. Rates are from 0 to 1.',
      }),
    integerValue: z.string().exactOptional().openapi({ description: 'Metric integer value.' }),
    microsValue: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Amount in micros. One million is equivalent to one unit. Currency value is in the unit (USD, EUR or other) specified by the request. For example, $6.50 whould be represented as 6500000 micros.',
      }),
  })
  .openapi({ description: 'Representation of a metric value.', required: [] })
  .openapi('ReportRowMetricValue')

const ReportRowSchema = z
  .object({
    dimensionValues: z
      .record(z.string(), ReportRowDimensionValueSchema)
      .exactOptional()
      .openapi({
        description: 'Map of dimension values in a row, with keys as enum name of the dimensions.',
      }),
    metricValues: z
      .record(z.string(), ReportRowMetricValueSchema)
      .exactOptional()
      .openapi({
        description:
          'Map of metric values in a row, with keys as enum name of the metrics. If a metric being requested has no value returned, the map will not include it.',
      }),
  })
  .openapi({ description: 'A row of the returning report.', required: [] })
  .openapi('ReportRow')

const GenerateMediationReportResponseSchema = z
  .object({
    footer: ReportFooterSchema.exactOptional().openapi({
      description:
        'Additional information about the generated report, such as warnings about the data.',
    }),
    header: ReportHeaderSchema.exactOptional().openapi({
      description:
        'Report generation settings that describes the report contents, such as the report date range and localization settings.',
    }),
    row: ReportRowSchema.exactOptional().openapi({ description: 'Actual report data.' }),
  })
  .openapi({
    description:
      'The streaming response for the AdMob mediation report where the first response contains the report header, then a stream of row responses, and finally a footer as the last response message. For example: [{ "header": { "date_range": { "start_date": {"year": 2018, "month": 9, "day": 1}, "end_date": {"year": 2018, "month": 9, "day": 1} }, "localization_settings": { "currency_code": "USD", "language_code": "en-US" } } }, { "row": { "dimension_values": { "DATE": {"value": "20180918"}, "APP": { "value": "ca-app-pub-8123415297019784~1001342552", "display_label": "My app name!" } }, "metric_values": { "ESTIMATED_EARNINGS": {"decimal_value": "1324746"} } } }, { "footer": {"matching_row_count": 1} }]',
    required: [],
  })
  .openapi('GenerateMediationReportResponse')

const NetworkReportSpecDimensionFilterSchema = z
  .object({
    dimension: z
      .enum([
        'DIMENSION_UNSPECIFIED',
        'DATE',
        'MONTH',
        'WEEK',
        'AD_UNIT',
        'APP',
        'AD_TYPE',
        'COUNTRY',
        'FORMAT',
        'PLATFORM',
        'MOBILE_OS_VERSION',
        'GMA_SDK_VERSION',
        'APP_VERSION_NAME',
        'SERVING_RESTRICTION',
      ])
      .exactOptional()
      .openapi({ description: 'Applies the filter criterion to the specified dimension.' }),
    matchesAny: StringListSchema.exactOptional().openapi({
      description:
        'Matches a row if its value for the specified dimension is in one of the values specified in this condition.',
    }),
  })
  .openapi({
    description: 'Describes which report rows to match based on their dimension values.',
    required: [],
  })
  .openapi('NetworkReportSpecDimensionFilter')

const NetworkReportSpecSortConditionSchema = z
  .object({
    dimension: z
      .enum([
        'DIMENSION_UNSPECIFIED',
        'DATE',
        'MONTH',
        'WEEK',
        'AD_UNIT',
        'APP',
        'AD_TYPE',
        'COUNTRY',
        'FORMAT',
        'PLATFORM',
        'MOBILE_OS_VERSION',
        'GMA_SDK_VERSION',
        'APP_VERSION_NAME',
        'SERVING_RESTRICTION',
      ])
      .exactOptional()
      .openapi({ description: 'Sort by the specified dimension.' }),
    metric: z
      .enum([
        'METRIC_UNSPECIFIED',
        'AD_REQUESTS',
        'CLICKS',
        'ESTIMATED_EARNINGS',
        'IMPRESSIONS',
        'IMPRESSION_CTR',
        'IMPRESSION_RPM',
        'MATCHED_REQUESTS',
        'MATCH_RATE',
        'SHOW_RATE',
      ])
      .exactOptional()
      .openapi({ description: 'Sort by the specified metric.' }),
    order: z
      .enum(['SORT_ORDER_UNSPECIFIED', 'ASCENDING', 'DESCENDING'])
      .exactOptional()
      .openapi({ description: 'Sorting order of the dimension or metric.' }),
  })
  .openapi({
    description: 'Sorting direction to be applied on a dimension or a metric.',
    required: [],
  })
  .openapi('NetworkReportSpecSortCondition')

const NetworkReportSpecSchema = z
  .object({
    dateRange: DateRangeSchema.exactOptional().openapi({
      description: 'The date range for which the report is generated.',
    }),
    dimensionFilters: z
      .array(NetworkReportSpecDimensionFilterSchema)
      .exactOptional()
      .openapi({
        description: 'Describes which report rows to match based on their dimension values.',
      }),
    dimensions: z
      .array(
        z.enum([
          'DIMENSION_UNSPECIFIED',
          'DATE',
          'MONTH',
          'WEEK',
          'AD_UNIT',
          'APP',
          'AD_TYPE',
          'COUNTRY',
          'FORMAT',
          'PLATFORM',
          'MOBILE_OS_VERSION',
          'GMA_SDK_VERSION',
          'APP_VERSION_NAME',
          'SERVING_RESTRICTION',
        ]),
      )
      .exactOptional()
      .openapi({
        description:
          'List of dimensions of the report. The value combination of these dimensions determines the row of the report. If no dimensions are specified, the report returns a single row of requested metrics for the entire account.',
      }),
    localizationSettings: LocalizationSettingsSchema.exactOptional().openapi({
      description: 'Localization settings of the report.',
    }),
    maxReportRows: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Maximum number of report data rows to return. If the value is not set, the API returns as many rows as possible, up to 100000. Acceptable values are 1-100000, inclusive. Values larger than 100000 return an error.',
      }),
    metrics: z
      .array(
        z.enum([
          'METRIC_UNSPECIFIED',
          'AD_REQUESTS',
          'CLICKS',
          'ESTIMATED_EARNINGS',
          'IMPRESSIONS',
          'IMPRESSION_CTR',
          'IMPRESSION_RPM',
          'MATCHED_REQUESTS',
          'MATCH_RATE',
          'SHOW_RATE',
        ]),
      )
      .exactOptional()
      .openapi({
        description: 'List of metrics of the report. A report must specify at least one metric.',
      }),
    sortConditions: z
      .array(NetworkReportSpecSortConditionSchema)
      .exactOptional()
      .openapi({
        description:
          'Describes the sorting of report rows. The order of the condition in the list defines its precedence; the earlier the condition, the higher its precedence. If no sort conditions are specified, the row ordering is undefined.',
      }),
    timeZone: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A report time zone. Accepts an IANA TZ name values, such as "America/Los_Angeles." If no time zone is defined, the account default takes effect. Check default value by the get account action. **Warning:** The "America/Los_Angeles" is the only supported value at the moment.',
      }),
  })
  .openapi({
    description:
      "The specification for generating an AdMob Network report. For example, the specification to get clicks and estimated earnings for only the 'US' and 'CN' countries can look like the following example: { 'date_range': { 'start_date': {'year': 2021, 'month': 9, 'day': 1}, 'end_date': {'year': 2021, 'month': 9, 'day': 30} }, 'dimensions': ['DATE', 'APP', 'COUNTRY'], 'metrics': ['CLICKS', 'ESTIMATED_EARNINGS'], 'dimension_filters': [ { 'dimension': 'COUNTRY', 'matches_any': {'values': [{'value': 'US', 'value': 'CN'}]} } ], 'sort_conditions': [ {'dimension':'APP', order: 'ASCENDING'}, {'metric':'CLICKS', order: 'DESCENDING'} ], 'localization_settings': { 'currency_code': 'USD', 'language_code': 'en-US' } } For a better understanding, you can treat the preceding specification like the following pseudo SQL: SELECT DATE, APP, COUNTRY, CLICKS, ESTIMATED_EARNINGS FROM NETWORK_REPORT WHERE DATE >= '2021-09-01' AND DATE <= '2021-09-30' AND COUNTRY IN ('US', 'CN') GROUP BY DATE, APP, COUNTRY ORDER BY APP ASC, CLICKS DESC;",
    required: [],
  })
  .openapi('NetworkReportSpec')

const GenerateNetworkReportRequestSchema = z
  .object({
    reportSpec: NetworkReportSpecSchema.exactOptional().openapi({
      description: 'Network report specification.',
    }),
  })
  .openapi({ description: 'Request to generate an AdMob Network report.', required: [] })
  .openapi('GenerateNetworkReportRequest')

const GenerateNetworkReportResponseSchema = z
  .object({
    footer: ReportFooterSchema.exactOptional().openapi({
      description:
        'Additional information about the generated report, such as warnings about the data.',
    }),
    header: ReportHeaderSchema.exactOptional().openapi({
      description:
        'Report generation settings that describes the report contents, such as the report date range and localization settings.',
    }),
    row: ReportRowSchema.exactOptional().openapi({ description: 'Actual report data.' }),
  })
  .openapi({
    description:
      'The streaming response for the AdMob Network report where the first response contains the report header, then a stream of row responses, and finally a footer as the last response message. For example: [{ "header": { "dateRange": { "startDate": {"year": 2018, "month": 9, "day": 1}, "endDate": {"year": 2018, "month": 9, "day": 1} }, "localizationSettings": { "currencyCode": "USD", "languageCode": "en-US" } } }, { "row": { "dimensionValues": { "DATE": {"value": "20180918"}, "APP": { "value": "ca-app-pub-8123415297019784~1001342552", displayLabel: "My app name!" } }, "metricValues": { "ESTIMATED_EARNINGS": {"microsValue": 6500000} } } }, { "footer": {"matchingRowCount": 1} }]',
    required: [],
  })
  .openapi('GenerateNetworkReportResponse')

const ListAdSourcesResponseSchema = z
  .object({
    adSources: z.array(AdSourceSchema).exactOptional().openapi({ description: 'The ad sources.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Used to set the `page_token` in the `ListAdSourcesRequest` to retrieve the next page. If this field is omitted, there are no subsequent pages.',
      }),
  })
  .openapi({ description: 'Response for the ListAdSourcesRequest.', required: [] })
  .openapi('ListAdSourcesResponse')

const ListAdUnitsResponseSchema = z
  .object({
    adUnits: z
      .array(AdUnitSchema)
      .exactOptional()
      .openapi({ description: 'The resulting ad units for the requested account.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If not empty, indicates that there may be more ad units for the request; this value should be passed in a new `ListAdUnitsRequest`.',
      }),
  })
  .openapi({ description: 'Response for the ad units list request.', required: [] })
  .openapi('ListAdUnitsResponse')

const ListAppsResponseSchema = z
  .object({
    apps: z
      .array(AppSchema)
      .exactOptional()
      .openapi({ description: 'The resulting apps for the requested account.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If not empty, indicates that there may be more apps for the request; this value should be passed in a new `ListAppsRequest`.',
      }),
  })
  .openapi({ description: 'Response for the apps list request.', required: [] })
  .openapi('ListAppsResponse')

const PublisherAccountSchema = z
  .object({
    currencyCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Currency code of the earning-related metrics, which is the 3-letter code defined in ISO 4217. The daily average rate is used for the currency conversion.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Resource name of this account. Format is accounts/{publisher_id}.',
      }),
    publisherId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The unique ID by which this publisher account can be identified in the API requests (for example, pub-1234567890).',
      }),
    reportingTimeZone: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The time zone that is used in reports that are generated for this account. The value is a time-zone ID as specified by the CLDR project, for example, "America/Los_Angeles".',
      }),
  })
  .openapi({
    description:
      'A publisher account contains information relevant to the use of this API, such as the time zone used for the reports.',
    required: [],
  })
  .openapi('PublisherAccount')

const ListPublisherAccountsResponseSchema = z
  .object({
    account: z
      .array(PublisherAccountSchema)
      .exactOptional()
      .openapi({ description: 'Publisher that the client credentials can access.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If not empty, indicates that there might be more accounts for the request; you must pass this value in a new `ListPublisherAccountsRequest`.',
      }),
  })
  .openapi({ description: 'Response for the publisher account list request.', required: [] })
  .openapi('ListPublisherAccountsResponse')

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
        'https://www.googleapis.com/auth/admob.readonly': 'See your AdMob data',
        'https://www.googleapis.com/auth/admob.report': 'See your AdMob data',
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
        'https://www.googleapis.com/auth/admob.readonly': 'See your AdMob data',
        'https://www.googleapis.com/auth/admob.report': 'See your AdMob data',
      },
      tokenUrl: 'https://accounts.google.com/o/oauth2/token',
    },
  },
  type: 'oauth2',
}

export const getV1betaAccountsRoute = createRoute({
  method: 'get',
  path: '/v1beta/accounts',
  tags: ['accounts'],
  description:
    'Lists the AdMob publisher account that was most recently signed in to from the AdMob UI. For more information, see https://support.google.com/admob/answer/10243672.',
  operationId: 'admob.accounts.list',
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
            description: 'Maximum number of accounts to return.',
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
              'The value returned by the last `ListPublisherAccountsResponse`; indicates that this is a continuation of a prior `ListPublisherAccounts` call, and that the system should return the next page of data.',
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
      content: { 'application/json': { schema: ListPublisherAccountsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/admob.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/admob.readonly'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/admob.report'],
      Oauth2c: ['https://www.googleapis.com/auth/admob.report'],
    },
  ],
})

export const getV1betaNameRoute = createRoute({
  method: 'get',
  path: '/v1beta/{name}',
  tags: ['accounts'],
  description: 'Gets information about the specified AdMob publisher account.',
  operationId: 'admob.accounts.get',
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
              'Resource name of the publisher account to retrieve. Example: accounts/pub-9876543210987654',
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
      content: { 'application/json': { schema: PublisherAccountSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/admob.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/admob.readonly'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/admob.report'],
      Oauth2c: ['https://www.googleapis.com/auth/admob.report'],
    },
  ],
})

export const getV1betaParentAdSourcesRoute = createRoute({
  method: 'get',
  path: '/v1beta/{parent}/adSources',
  tags: ['accounts'],
  description: 'List the ad sources.',
  operationId: 'admob.accounts.adSources.list',
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
              'The maximum number of ad sources to return. If unspecified or 0, at most 10,000 ad sources will be returned. The maximum value is 20,000; values above 10,000 will be coerced to 20,000.',
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
              'A page token, received from a previous `ListAdSources` call. Provide this to retrieve the subsequent page.',
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
              'Required. The parent which owns this collection of ad sources. Format: accounts/{publisher_id}',
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
      content: { 'application/json': { schema: ListAdSourcesResponseSchema } },
    },
  },
})

export const getV1betaParentAdUnitsRoute = createRoute({
  method: 'get',
  path: '/v1beta/{parent}/adUnits',
  tags: ['accounts'],
  description: 'List the ad units under the specified AdMob account.',
  operationId: 'admob.accounts.adUnits.list',
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
              'The maximum number of ad units to return. If unspecified or 0, at most 10,000 ad units will be returned. The maximum value is 20,000; values above 20,000 will be coerced to 20,000.',
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
              'The value returned by the last `ListAdUnitsResponse`; indicates that this is a continuation of a prior `ListAdUnits` call, and that the system should return the next page of data.',
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
              'Required. Resource name of the account to list ad units for. Example: accounts/pub-9876543210987654',
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
      content: { 'application/json': { schema: ListAdUnitsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/admob.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/admob.readonly'],
    },
  ],
})

export const getV1betaParentAppsRoute = createRoute({
  method: 'get',
  path: '/v1beta/{parent}/apps',
  tags: ['accounts'],
  description: 'List the apps under the specified AdMob account.',
  operationId: 'admob.accounts.apps.list',
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
              'The maximum number of apps to return. If unspecified or 0, at most 10,000 apps will be returned. The maximum value is 20,000; values above 20,000 will be coerced to 20,000.',
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
              'The value returned by the last `ListAppsResponse`; indicates that this is a continuation of a prior `ListApps` call, and that the system should return the next page of data.',
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
              'Required. Resource name of the account to list apps for. Example: accounts/pub-9876543210987654',
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
      content: { 'application/json': { schema: ListAppsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/admob.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/admob.readonly'],
    },
  ],
})

export const postV1betaParentMediationReportGenerateRoute = createRoute({
  method: 'post',
  path: '/v1beta/{parent}/mediationReport:generate',
  tags: ['accounts'],
  description:
    'Generates an AdMob mediation report based on the provided report specification. Returns result of a server-side streaming RPC. The result is returned in a sequence of responses.',
  operationId: 'admob.accounts.mediationReport.generate',
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
              'Resource name of the account to generate the report for. Example: accounts/pub-9876543210987654',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GenerateMediationReportRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GenerateMediationReportResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/admob.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/admob.readonly'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/admob.report'],
      Oauth2c: ['https://www.googleapis.com/auth/admob.report'],
    },
  ],
})

export const postV1betaParentNetworkReportGenerateRoute = createRoute({
  method: 'post',
  path: '/v1beta/{parent}/networkReport:generate',
  tags: ['accounts'],
  description:
    'Generates an AdMob Network report based on the provided report specification. Returns result of a server-side streaming RPC. The result is returned in a sequence of responses.',
  operationId: 'admob.accounts.networkReport.generate',
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
              'Resource name of the account to generate the report for. Example: accounts/pub-9876543210987654',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GenerateNetworkReportRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GenerateNetworkReportResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/admob.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/admob.readonly'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/admob.report'],
      Oauth2c: ['https://www.googleapis.com/auth/admob.report'],
    },
  ],
})
