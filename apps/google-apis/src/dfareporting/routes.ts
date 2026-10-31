import { createRoute, z } from '@hono/zod-openapi'

const DimensionSchema = z
  .object({
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The kind of resource this is, in this case dfareporting#dimension.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The dimension name, e.g. dfa:advertiser' }),
  })
  .openapi({ description: 'Represents a dimension.', required: [] })
  .openapi('Dimension')

const MetricSchema = z
  .object({
    kind: z
      .string()
      .exactOptional()
      .openapi({ description: 'The kind of resource this is, in this case dfareporting#metric.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The metric name, e.g. dfa:impressions' }),
  })
  .openapi({ description: 'Represents a metric.', required: [] })
  .openapi('Metric')

const CrossDimensionReachReportCompatibleFieldsSchema = z
  .object({
    breakdown: z
      .array(DimensionSchema)
      .exactOptional()
      .openapi({
        description:
          'Dimensions which are compatible to be selected in the "breakdown" section of the report.',
      }),
    dimensionFilters: z
      .array(DimensionSchema)
      .exactOptional()
      .openapi({
        description:
          'Dimensions which are compatible to be selected in the "dimensionFilters" section of the report.',
      }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The kind of resource this is, in this case dfareporting#crossDimensionReachReportCompatibleFields.',
      }),
    metrics: z
      .array(MetricSchema)
      .exactOptional()
      .openapi({
        description:
          'Metrics which are compatible to be selected in the "metricNames" section of the report.',
      }),
    overlapMetrics: z
      .array(MetricSchema)
      .exactOptional()
      .openapi({
        description:
          'Metrics which are compatible to be selected in the "overlapMetricNames" section of the report.',
      }),
  })
  .openapi({
    description:
      'Represents fields that are compatible to be selected for a report of type "CROSS_DIMENSION_REACH".',
    required: [],
  })
  .openapi('CrossDimensionReachReportCompatibleFields')

const FloodlightReportCompatibleFieldsSchema = z
  .object({
    dimensionFilters: z
      .array(DimensionSchema)
      .exactOptional()
      .openapi({
        description:
          'Dimensions which are compatible to be selected in the "dimensionFilters" section of the report.',
      }),
    dimensions: z
      .array(DimensionSchema)
      .exactOptional()
      .openapi({
        description:
          'Dimensions which are compatible to be selected in the "dimensions" section of the report.',
      }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The kind of resource this is, in this case dfareporting#floodlightReportCompatibleFields.',
      }),
    metrics: z
      .array(MetricSchema)
      .exactOptional()
      .openapi({
        description:
          'Metrics which are compatible to be selected in the "metricNames" section of the report.',
      }),
  })
  .openapi({
    description:
      'Represents fields that are compatible to be selected for a report of type "FlOODLIGHT".',
    required: [],
  })
  .openapi('FloodlightReportCompatibleFields')

const PathReportCompatibleFieldsSchema = z
  .object({
    channelGroupings: z
      .array(DimensionSchema)
      .exactOptional()
      .openapi({
        description:
          'Dimensions which are compatible to be selected in the "channelGroupings" section of the report.',
      }),
    dimensions: z
      .array(DimensionSchema)
      .exactOptional()
      .openapi({
        description:
          'Dimensions which are compatible to be selected in the "dimensions" section of the report.',
      }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The kind of resource this is, in this case dfareporting#pathReportCompatibleFields.',
      }),
    metrics: z
      .array(MetricSchema)
      .exactOptional()
      .openapi({
        description:
          'Metrics which are compatible to be selected in the "metricNames" section of the report.',
      }),
    pathFilters: z
      .array(DimensionSchema)
      .exactOptional()
      .openapi({
        description:
          'Dimensions which are compatible to be selected in the "pathFilters" section of the report.',
      }),
  })
  .openapi({
    description:
      'Represents fields that are compatible to be selected for a report of type "PATH".',
    required: [],
  })
  .openapi('PathReportCompatibleFields')

const PathToConversionReportCompatibleFieldsSchema = z
  .object({
    conversionDimensions: z
      .array(DimensionSchema)
      .exactOptional()
      .openapi({
        description:
          'Conversion dimensions which are compatible to be selected in the "conversionDimensions" section of the report.',
      }),
    customFloodlightVariables: z
      .array(DimensionSchema)
      .exactOptional()
      .openapi({
        description:
          'Custom floodlight variables which are compatible to be selected in the "customFloodlightVariables" section of the report.',
      }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The kind of resource this is, in this case dfareporting#pathToConversionReportCompatibleFields.',
      }),
    metrics: z
      .array(MetricSchema)
      .exactOptional()
      .openapi({
        description:
          'Metrics which are compatible to be selected in the "metricNames" section of the report.',
      }),
    perInteractionDimensions: z
      .array(DimensionSchema)
      .exactOptional()
      .openapi({
        description:
          'Per-interaction dimensions which are compatible to be selected in the "perInteractionDimensions" section of the report.',
      }),
  })
  .openapi({
    description:
      'Represents fields that are compatible to be selected for a report of type "PATH_TO_CONVERSION".',
    required: [],
  })
  .openapi('PathToConversionReportCompatibleFields')

const ReachReportCompatibleFieldsSchema = z
  .object({
    dimensionFilters: z
      .array(DimensionSchema)
      .exactOptional()
      .openapi({
        description:
          'Dimensions which are compatible to be selected in the "dimensionFilters" section of the report.',
      }),
    dimensions: z
      .array(DimensionSchema)
      .exactOptional()
      .openapi({
        description:
          'Dimensions which are compatible to be selected in the "dimensions" section of the report.',
      }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The kind of resource this is, in this case dfareporting#reachReportCompatibleFields.',
      }),
    metrics: z
      .array(MetricSchema)
      .exactOptional()
      .openapi({
        description:
          'Metrics which are compatible to be selected in the "metricNames" section of the report.',
      }),
    pivotedActivityMetrics: z
      .array(MetricSchema)
      .exactOptional()
      .openapi({
        description:
          'Metrics which are compatible to be selected as activity metrics to pivot on in the "activities" section of the report.',
      }),
    reachByFrequencyMetrics: z
      .array(MetricSchema)
      .exactOptional()
      .openapi({
        description:
          'Metrics which are compatible to be selected in the "reachByFrequencyMetricNames" section of the report.',
      }),
  })
  .openapi({
    description:
      'Represents fields that are compatible to be selected for a report of type "REACH".',
    required: [],
  })
  .openapi('ReachReportCompatibleFields')

const ReportCompatibleFieldsSchema = z
  .object({
    dimensionFilters: z
      .array(DimensionSchema)
      .exactOptional()
      .openapi({
        description:
          'Dimensions which are compatible to be selected in the "dimensionFilters" section of the report.',
      }),
    dimensions: z
      .array(DimensionSchema)
      .exactOptional()
      .openapi({
        description:
          'Dimensions which are compatible to be selected in the "dimensions" section of the report.',
      }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The kind of resource this is, in this case dfareporting#reportCompatibleFields.',
      }),
    metrics: z
      .array(MetricSchema)
      .exactOptional()
      .openapi({
        description:
          'Metrics which are compatible to be selected in the "metricNames" section of the report.',
      }),
    pivotedActivityMetrics: z
      .array(MetricSchema)
      .exactOptional()
      .openapi({
        description:
          'Metrics which are compatible to be selected as activity metrics to pivot on in the "activities" section of the report.',
      }),
  })
  .openapi({
    description:
      'Represents fields that are compatible to be selected for a report of type "STANDARD".',
    required: [],
  })
  .openapi('ReportCompatibleFields')

type CompatibleFieldsType = {
  crossDimensionReachReportCompatibleFields?: z.infer<
    typeof CrossDimensionReachReportCompatibleFieldsSchema
  >
  floodlightReportCompatibleFields?: z.infer<typeof FloodlightReportCompatibleFieldsSchema>
  kind?: string
  pathAttributionReportCompatibleFields?: z.infer<typeof PathReportCompatibleFieldsSchema>
  pathReportCompatibleFields?: z.infer<typeof PathReportCompatibleFieldsSchema>
  pathToConversionReportCompatibleFields?: z.infer<
    typeof PathToConversionReportCompatibleFieldsSchema
  >
  reachReportCompatibleFields?: z.infer<typeof ReachReportCompatibleFieldsSchema>
  reportCompatibleFields?: z.infer<typeof ReportCompatibleFieldsSchema>
}

const LookbackConfigurationSchema = z
  .object({
    clickDuration: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Lookback window, in days, from the last time a given user clicked on one of your ads. If you enter 0, clicks will not be considered as triggering events for floodlight tracking. If you leave this field blank, the default value for your account will be used. Acceptable values are 0 to 90, inclusive.',
      }),
    postImpressionActivitiesDuration: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Lookback window, in days, from the last time a given user viewed one of your ads. If you enter 0, impressions will not be considered as triggering events for floodlight tracking. If you leave this field blank, the default value for your account will be used. Acceptable values are 0 to 90, inclusive.',
      }),
  })
  .openapi({ description: 'Lookback configuration settings.', required: [] })
  .openapi('LookbackConfiguration')

const ReportsConfigurationSchema = z
  .object({
    exposureToConversionEnabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether the exposure to conversion report is enabled. This report shows detailed pathway information on up to 10 of the most recent ad exposures seen by a user before converting.',
      }),
    lookbackConfiguration: LookbackConfigurationSchema.exactOptional().openapi({
      description: 'Default lookback windows for new advertisers in this account.',
    }),
    reportGenerationTimeZoneId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Report generation time zone ID of this account. This is a required field that can only be changed by a superuser. Acceptable values are: - "1" for "America/New_York" - "2" for "Europe/London" - "3" for "Europe/Paris" - "4" for "Africa/Johannesburg" - "5" for "Asia/Jerusalem" - "6" for "Asia/Shanghai" - "7" for "Asia/Hong_Kong" - "8" for "Asia/Tokyo" - "9" for "Australia/Sydney" - "10" for "Asia/Dubai" - "11" for "America/Los_Angeles" - "12" for "Pacific/Auckland" - "13" for "America/Sao_Paulo" - "16" for "America/Asuncion" - "17" for "America/Chicago" - "18" for "America/Denver" - "19" for "America/St_Johns" - "20" for "Asia/Dhaka" - "21" for "Asia/Jakarta" - "22" for "Asia/Kabul" - "23" for "Asia/Karachi" - "24" for "Asia/Calcutta" - "25" for "Asia/Pyongyang" - "26" for "Asia/Rangoon" - "27" for "Atlantic/Cape_Verde" - "28" for "Atlantic/South_Georgia" - "29" for "Australia/Adelaide" - "30" for "Australia/Lord_Howe" - "31" for "Europe/Moscow" - "32" for "Pacific/Kiritimati" - "35" for "Pacific/Norfolk" - "36" for "Pacific/Tongatapu" ',
      }),
  })
  .openapi({ description: 'Reporting Configuration', required: [] })
  .openapi('ReportsConfiguration')

const AccountSchema = z
  .object({
    accountPermissionIds: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Account permissions assigned to this account.' }),
    accountProfile: z
      .enum(['ACCOUNT_PROFILE_BASIC', 'ACCOUNT_PROFILE_STANDARD'])
      .exactOptional()
      .openapi({
        description: 'Profile for this account. This is a read-only field that can be left blank.',
      }),
    active: z.boolean().exactOptional().openapi({ description: 'Whether this account is active.' }),
    activeAdsLimitTier: z
      .enum([
        'ACTIVE_ADS_TIER_40K',
        'ACTIVE_ADS_TIER_75K',
        'ACTIVE_ADS_TIER_100K',
        'ACTIVE_ADS_TIER_200K',
        'ACTIVE_ADS_TIER_300K',
        'ACTIVE_ADS_TIER_500K',
        'ACTIVE_ADS_TIER_750K',
        'ACTIVE_ADS_TIER_1M',
      ])
      .exactOptional()
      .openapi({ description: 'Maximum number of active ads allowed for this account.' }),
    activeViewOptOut: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether to serve creatives with Active View tags. If disabled, viewability data will not be available for any impressions.',
      }),
    availablePermissionIds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'User role permissions available to the user roles of this account.',
      }),
    countryId: z
      .string()
      .exactOptional()
      .openapi({ description: 'ID of the country associated with this account.' }),
    currencyId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'ID of currency associated with this account. This is a required field. Acceptable values are: - "1" for USD - "2" for GBP - "3" for ESP - "4" for SEK - "5" for CAD - "6" for JPY - "7" for DEM - "8" for AUD - "9" for FRF - "10" for ITL - "11" for DKK - "12" for NOK - "13" for FIM - "14" for ZAR - "15" for IEP - "16" for NLG - "17" for EUR - "18" for KRW - "19" for TWD - "20" for SGD - "21" for CNY - "22" for HKD - "23" for NZD - "24" for MYR - "25" for BRL - "26" for PTE - "28" for CLP - "29" for TRY - "30" for ARS - "31" for PEN - "32" for ILS - "33" for CHF - "34" for VEF - "35" for COP - "36" for GTQ - "37" for PLN - "39" for INR - "40" for THB - "41" for IDR - "42" for CZK - "43" for RON - "44" for HUF - "45" for RUB - "46" for AED - "47" for BGN - "48" for HRK - "49" for MXN - "50" for NGN - "51" for EGP ',
      }),
    defaultCreativeSizeId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Default placement dimensions for this account.' }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'Description of this account.' }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'ID of this account. This is a read-only, auto-generated field.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "dfareporting#account".',
      }),
    locale: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Locale of this account. Acceptable values are: - "cs" (Czech) - "de" (German) - "en" (English) - "en-GB" (English United Kingdom) - "es" (Spanish) - "fr" (French) - "it" (Italian) - "ja" (Japanese) - "ko" (Korean) - "pl" (Polish) - "pt-BR" (Portuguese Brazil) - "ru" (Russian) - "sv" (Swedish) - "tr" (Turkish) - "zh-CN" (Chinese Simplified) - "zh-TW" (Chinese Traditional) ',
      }),
    maximumImageSize: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Maximum image size allowed for this account, in kilobytes. Value must be greater than or equal to 1.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Name of this account. This is a required field, and must be less than 128 characters long and be globally unique.',
      }),
    nielsenOcrEnabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether campaigns created in this account will be enabled for Nielsen OCR reach ratings by default.',
      }),
    reportsConfiguration: ReportsConfigurationSchema.exactOptional().openapi({
      description: 'Reporting configuration of this account.',
    }),
    shareReportsWithTwitter: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Share Path to Conversion reports with Twitter.' }),
    teaserSizeLimit: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'File size limit in kilobytes of Rich Media teaser creatives. Acceptable values are 1 to 10240, inclusive.',
      }),
  })
  .openapi({ description: 'Contains properties of a Campaign Manager account.', required: [] })
  .openapi('Account')

const AccountActiveAdSummarySchema = z
  .object({
    accountId: z.string().exactOptional().openapi({ description: 'ID of the account.' }),
    activeAds: z
      .string()
      .exactOptional()
      .openapi({ description: 'Ads that have been activated for the account' }),
    activeAdsLimitTier: z
      .enum([
        'ACTIVE_ADS_TIER_40K',
        'ACTIVE_ADS_TIER_75K',
        'ACTIVE_ADS_TIER_100K',
        'ACTIVE_ADS_TIER_200K',
        'ACTIVE_ADS_TIER_300K',
        'ACTIVE_ADS_TIER_500K',
        'ACTIVE_ADS_TIER_750K',
        'ACTIVE_ADS_TIER_1M',
      ])
      .exactOptional()
      .openapi({ description: 'Maximum number of active ads allowed for the account.' }),
    availableAds: z
      .string()
      .exactOptional()
      .openapi({ description: 'Ads that can be activated for the account.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "dfareporting#accountActiveAdSummary".',
      }),
  })
  .openapi({ description: 'Gets a summary of active ads in an account.', required: [] })
  .openapi('AccountActiveAdSummary')

const AccountPermissionSchema = z
  .object({
    accountProfiles: z
      .array(z.enum(['ACCOUNT_PROFILE_BASIC', 'ACCOUNT_PROFILE_STANDARD']))
      .exactOptional()
      .openapi({
        description:
          'Account profiles associated with this account permission. Possible values are: - "ACCOUNT_PROFILE_BASIC" - "ACCOUNT_PROFILE_STANDARD" ',
      }),
    id: z.string().exactOptional().openapi({ description: 'ID of this account permission.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "dfareporting#accountPermission".',
      }),
    level: z
      .enum(['USER', 'ADMINISTRATOR'])
      .exactOptional()
      .openapi({ description: 'Administrative level required to enable this account permission.' }),
    name: z.string().exactOptional().openapi({ description: 'Name of this account permission.' }),
    permissionGroupId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Permission group of this account permission.' }),
  })
  .openapi({
    description:
      'AccountPermissions contains information about a particular account permission. Some features of Campaign Manager require an account permission to be present in the account.',
    required: [],
  })
  .openapi('AccountPermission')

const AccountPermissionGroupSchema = z
  .object({
    id: z.string().exactOptional().openapi({ description: 'ID of this account permission group.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "dfareporting#accountPermissionGroup".',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of this account permission group.' }),
  })
  .openapi({
    description:
      'AccountPermissionGroups contains a mapping of permission group IDs to names. A permission group is a grouping of account permissions.',
    required: [],
  })
  .openapi('AccountPermissionGroup')

const AccountPermissionGroupsListResponseSchema = z
  .object({
    accountPermissionGroups: z
      .array(AccountPermissionGroupSchema)
      .exactOptional()
      .openapi({ description: 'Account permission group collection.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "dfareporting#accountPermissionGroupsListResponse".',
      }),
  })
  .openapi({ description: 'Account Permission Group List Response', required: [] })
  .openapi('AccountPermissionGroupsListResponse')

const AccountPermissionsListResponseSchema = z
  .object({
    accountPermissions: z
      .array(AccountPermissionSchema)
      .exactOptional()
      .openapi({ description: 'Account permission collection.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "dfareporting#accountPermissionsListResponse".',
      }),
  })
  .openapi({ description: 'Account Permission List Response', required: [] })
  .openapi('AccountPermissionsListResponse')

const ObjectFilterSchema = z
  .object({
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "dfareporting#objectFilter".',
      }),
    objectIds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Applicable when status is ASSIGNED. The user has access to objects with these object IDs.',
      }),
    status: z
      .enum(['NONE', 'ASSIGNED', 'ALL'])
      .exactOptional()
      .openapi({
        description:
          'Status of the filter. NONE means the user has access to none of the objects. ALL means the user has access to all objects. ASSIGNED means the user has access to the objects with IDs in the objectIds list.',
      }),
  })
  .openapi({ description: 'Object Filter.', required: [] })
  .openapi('ObjectFilter')

const AccountUserProfileSchema = z
  .object({
    accountId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Account ID of the user profile. This is a read-only field that can be left blank.',
      }),
    active: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether this user profile is active. This defaults to false, and must be set true on insert for the user profile to be usable.',
      }),
    advertiserFilter: ObjectFilterSchema.exactOptional().openapi({
      description: 'Filter that describes which advertisers are visible to the user profile.',
    }),
    campaignFilter: ObjectFilterSchema.exactOptional().openapi({
      description: 'Filter that describes which campaigns are visible to the user profile.',
    }),
    comments: z
      .string()
      .exactOptional()
      .openapi({ description: 'Comments for this user profile.' }),
    email: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Email of the user profile. The email addresss must be linked to a Google Account. This field is required on insertion and is read-only after insertion.',
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'ID of the user profile. This is a read-only, auto-generated field.',
      }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "dfareporting#accountUserProfile".',
      }),
    locale: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Locale of the user profile. This is a required field. Acceptable values are: - "cs" (Czech) - "de" (German) - "en" (English) - "en-GB" (English United Kingdom) - "es" (Spanish) - "fr" (French) - "it" (Italian) - "ja" (Japanese) - "ko" (Korean) - "pl" (Polish) - "pt-BR" (Portuguese Brazil) - "ru" (Russian) - "sv" (Swedish) - "tr" (Turkish) - "zh-CN" (Chinese Simplified) - "zh-TW" (Chinese Traditional) ',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Name of the user profile. This is a required field. Must be less than 64 characters long, must be globally unique, and cannot contain whitespace or any of the following characters: "&;<>"#%,".',
      }),
    siteFilter: ObjectFilterSchema.exactOptional().openapi({
      description: 'Filter that describes which sites are visible to the user profile.',
    }),
    subaccountId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Subaccount ID of the user profile. This is a read-only field that can be left blank.',
      }),
    traffickerType: z
      .enum(['INTERNAL_NON_TRAFFICKER', 'INTERNAL_TRAFFICKER', 'EXTERNAL_TRAFFICKER'])
      .exactOptional()
      .openapi({ description: 'Trafficker type of this user profile. This is a read-only field.' }),
    userAccessType: z
      .enum(['NORMAL_USER', 'SUPER_USER', 'INTERNAL_ADMINISTRATOR', 'READ_ONLY_SUPER_USER'])
      .exactOptional()
      .openapi({
        description:
          'User type of the user profile. This is a read-only field that can be left blank.',
      }),
    userRoleFilter: ObjectFilterSchema.exactOptional().openapi({
      description: 'Filter that describes which user roles are visible to the user profile.',
    }),
    userRoleId: z
      .string()
      .exactOptional()
      .openapi({ description: 'User role ID of the user profile. This is a required field.' }),
  })
  .openapi({
    description:
      'AccountUserProfiles contains properties of a Campaign Manager user profile. This resource is specifically for managing user profiles, whereas UserProfiles is for accessing the API.',
    required: [],
  })
  .openapi('AccountUserProfile')

const AccountUserProfilesListResponseSchema = z
  .object({
    accountUserProfiles: z
      .array(AccountUserProfileSchema)
      .exactOptional()
      .openapi({ description: 'Account user profile collection.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "dfareporting#accountUserProfilesListResponse".',
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'Pagination token to be used for the next list operation.' }),
  })
  .openapi({ description: 'Account User Profile List Response', required: [] })
  .openapi('AccountUserProfilesListResponse')

const AccountsListResponseSchema = z
  .object({
    accounts: z
      .array(AccountSchema)
      .exactOptional()
      .openapi({ description: 'Account collection.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "dfareporting#accountsListResponse".',
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'Pagination token to be used for the next list operation.' }),
  })
  .openapi({ description: 'Account List Response', required: [] })
  .openapi('AccountsListResponse')

const DimensionValueSchema = z
  .object({
    dimensionName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the dimension.' }),
    etag: z
      .string()
      .exactOptional()
      .openapi({ description: 'The eTag of this response for caching purposes.' }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID associated with the value if available.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The kind of resource this is, in this case dfareporting#dimensionValue.',
      }),
    matchType: z
      .enum(['EXACT', 'BEGINS_WITH', 'CONTAINS', 'WILDCARD_EXPRESSION'])
      .exactOptional()
      .openapi({
        description:
          "Determines how the 'value' field is matched when filtering. If not specified, defaults to EXACT. If set to WILDCARD_EXPRESSION, '*' is allowed as a placeholder for variable length character sequences, and it can be escaped with a backslash. Note, only paid search dimensions ('dfa:paidSearch*') allow a matchType other than EXACT.",
      }),
    value: z.string().exactOptional().openapi({ description: 'The value of the dimension.' }),
  })
  .openapi({ description: 'Represents a DimensionValue resource.', required: [] })
  .openapi('DimensionValue')

const ActivitiesSchema = z
  .object({
    filters: z
      .array(DimensionValueSchema)
      .exactOptional()
      .openapi({
        description:
          'List of activity filters. The dimension values need to be all either of type "dfa:activity" or "dfa:activityGroup".',
      }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The kind of resource this is, in this case dfareporting#activities.',
      }),
    metricNames: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'List of names of floodlight activity metrics.' }),
  })
  .openapi({ description: 'Represents an activity group.', required: [] })
  .openapi('Activities')

const ClickThroughUrlSchema = z
  .object({
    computedClickThroughUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Read-only convenience field representing the actual URL that will be used for this click-through. The URL is computed as follows: - If defaultLandingPage is enabled then the campaign's default landing page URL is assigned to this field. - If defaultLandingPage is not enabled and a landingPageId is specified then that landing page's URL is assigned to this field. - If neither of the above cases apply, then the customClickThroughUrl is assigned to this field. ",
      }),
    customClickThroughUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Custom click-through URL. Applicable if the defaultLandingPage field is set to false and the landingPageId field is left unset.',
      }),
    defaultLandingPage: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the campaign default landing page is used.' }),
    landingPageId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'ID of the landing page for the click-through URL. Applicable if the defaultLandingPage field is set to false.',
      }),
  })
  .openapi({ description: 'Click-through URL', required: [] })
  .openapi('ClickThroughUrl')

const ClickThroughUrlSuffixPropertiesSchema = z
  .object({
    clickThroughUrlSuffix: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Click-through URL suffix to apply to all ads in this entity's scope. Must be less than 128 characters long.",
      }),
    overrideInheritedSuffix: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether this entity should override the inherited click-through URL suffix with its own defined value.',
      }),
  })
  .openapi({ description: 'Click Through URL Suffix settings.', required: [] })
  .openapi('ClickThroughUrlSuffixProperties')

const LastModifiedInfoSchema = z
  .object({
    time: z
      .string()
      .exactOptional()
      .openapi({ description: 'Timestamp of the last change in milliseconds since epoch.' }),
  })
  .openapi({ description: 'Modification timestamp.', required: [] })
  .openapi('LastModifiedInfo')

const CreativeGroupAssignmentSchema = z
  .object({
    creativeGroupId: z
      .string()
      .exactOptional()
      .openapi({ description: 'ID of the creative group to be assigned.' }),
    creativeGroupNumber: z
      .enum(['CREATIVE_GROUP_ONE', 'CREATIVE_GROUP_TWO'])
      .exactOptional()
      .openapi({ description: 'Creative group number of the creative group assignment.' }),
  })
  .openapi({ description: 'Creative Group Assignment.', required: [] })
  .openapi('CreativeGroupAssignment')

const CompanionClickThroughOverrideSchema = z
  .object({
    clickThroughUrl: ClickThroughUrlSchema.exactOptional().openapi({
      description: 'Click-through URL of this companion click-through override.',
    }),
    creativeId: z
      .string()
      .exactOptional()
      .openapi({ description: 'ID of the creative for this companion click-through override.' }),
  })
  .openapi({ description: 'Companion Click-through override.', required: [] })
  .openapi('CompanionClickThroughOverride')

const RichMediaExitOverrideSchema = z
  .object({
    clickThroughUrl: ClickThroughUrlSchema.exactOptional().openapi({
      description:
        'Click-through URL of this rich media exit override. Applicable if the enabled field is set to true.',
    }),
    enabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether to use the clickThroughUrl. If false, the creative-level exit will be used.',
      }),
    exitId: z
      .string()
      .exactOptional()
      .openapi({ description: 'ID for the override to refer to a specific exit in the creative.' }),
  })
  .openapi({ description: 'Rich Media Exit Override.', required: [] })
  .openapi('RichMediaExitOverride')

const CreativeAssignmentSchema = z
  .object({
    active: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Whether this creative assignment is active. When true, the creative will be included in the ad's rotation.",
      }),
    applyEventTags: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether applicable event tags should fire when this creative assignment is rendered. If this value is unset when the ad is inserted or updated, it will default to true for all creative types EXCEPT for INTERNAL_REDIRECT, INTERSTITIAL_INTERNAL_REDIRECT, and INSTREAM_VIDEO.',
      }),
    clickThroughUrl: ClickThroughUrlSchema.exactOptional().openapi({
      description: 'Click-through URL of the creative assignment.',
    }),
    companionCreativeOverrides: z
      .array(CompanionClickThroughOverrideSchema)
      .exactOptional()
      .openapi({
        description:
          'Companion creative overrides for this creative assignment. Applicable to video ads.',
      }),
    creativeGroupAssignments: z
      .array(CreativeGroupAssignmentSchema)
      .exactOptional()
      .openapi({
        description:
          'Creative group assignments for this creative assignment. Only one assignment per creative group number is allowed for a maximum of two assignments.',
      }),
    creativeId: z
      .string()
      .exactOptional()
      .openapi({ description: 'ID of the creative to be assigned. This is a required field.' }),
    creativeIdDimensionValue: DimensionValueSchema.exactOptional().openapi({
      description:
        'Dimension value for the ID of the creative. This is a read-only, auto-generated field.',
    }),
    endTime: z.iso.datetime({ offset: true }).exactOptional(),
    richMediaExitOverrides: z
      .array(RichMediaExitOverrideSchema)
      .exactOptional()
      .openapi({
        description:
          'Rich media exit overrides for this creative assignment. Applicable when the creative type is any of the following: - DISPLAY - RICH_MEDIA_INPAGE - RICH_MEDIA_INPAGE_FLOATING - RICH_MEDIA_IM_EXPAND - RICH_MEDIA_EXPANDING - RICH_MEDIA_INTERSTITIAL_FLOAT - RICH_MEDIA_MOBILE_IN_APP - RICH_MEDIA_MULTI_FLOATING - RICH_MEDIA_PEEL_DOWN - VPAID_LINEAR - VPAID_NON_LINEAR ',
      }),
    sequence: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Sequence number of the creative assignment, applicable when the rotation type is CREATIVE_ROTATION_TYPE_SEQUENTIAL. Acceptable values are 1 to 65535, inclusive.',
      }),
    sslCompliant: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether the creative to be assigned is SSL-compliant. This is a read-only field that is auto-generated when the ad is inserted or updated.',
      }),
    startTime: z.iso.datetime({ offset: true }).exactOptional(),
    weight: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Weight of the creative assignment, applicable when the rotation type is CREATIVE_ROTATION_TYPE_RANDOM. Value must be greater than or equal to 1.',
      }),
  })
  .openapi({ description: 'Creative Assignment.', required: [] })
  .openapi('CreativeAssignment')

const CreativeRotationSchema = z
  .object({
    creativeAssignments: z
      .array(CreativeAssignmentSchema)
      .exactOptional()
      .openapi({ description: 'Creative assignments in this creative rotation.' }),
    creativeOptimizationConfigurationId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Creative optimization configuration that is used by this ad. It should refer to one of the existing optimization configurations in the ad's campaign. If it is unset or set to 0, then the campaign's default optimization configuration will be used for this ad.",
      }),
    type: z
      .enum(['CREATIVE_ROTATION_TYPE_SEQUENTIAL', 'CREATIVE_ROTATION_TYPE_RANDOM'])
      .exactOptional()
      .openapi({
        description:
          'Type of creative rotation. Can be used to specify whether to use sequential or random rotation.',
      }),
    weightCalculationStrategy: z
      .enum([
        'WEIGHT_STRATEGY_EQUAL',
        'WEIGHT_STRATEGY_CUSTOM',
        'WEIGHT_STRATEGY_HIGHEST_CTR',
        'WEIGHT_STRATEGY_OPTIMIZED',
      ])
      .exactOptional()
      .openapi({
        description: 'Strategy for calculating weights. Used with CREATIVE_ROTATION_TYPE_RANDOM.',
      }),
  })
  .openapi({ description: 'Creative Rotation.', required: [] })
  .openapi('CreativeRotation')

const DayPartTargetingSchema = z
  .object({
    daysOfWeek: z
      .array(z.enum(['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY']))
      .exactOptional()
      .openapi({
        description:
          'Days of the week when the ad will serve. Acceptable values are: - "SUNDAY" - "MONDAY" - "TUESDAY" - "WEDNESDAY" - "THURSDAY" - "FRIDAY" - "SATURDAY" ',
      }),
    hoursOfDay: z
      .array(z.int32())
      .exactOptional()
      .openapi({
        description:
          'Hours of the day when the ad will serve, where 0 is midnight to 1 AM and 23 is 11 PM to midnight. Can be specified with days of week, in which case the ad would serve during these hours on the specified days. For example if Monday, Wednesday, Friday are the days of week specified and 9-10am, 3-5pm (hours 9, 15, and 16) is specified, the ad would serve Monday, Wednesdays, and Fridays at 9-10am and 3-5pm. Acceptable values are 0 to 23, inclusive.',
      }),
    userLocalTime: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Whether or not to use the user's local time. If false, the America/New York time zone applies.",
      }),
  })
  .openapi({ description: 'Day Part Targeting.', required: [] })
  .openapi('DayPartTargeting')

const DefaultClickThroughEventTagPropertiesSchema = z
  .object({
    defaultClickThroughEventTagId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "ID of the click-through event tag to apply to all ads in this entity's scope.",
      }),
    overrideInheritedEventTag: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether this entity should override the inherited default click-through event tag with its own defined value.',
      }),
  })
  .openapi({
    description:
      "Properties of inheriting and overriding the default click-through event tag. A campaign may override the event tag defined at the advertiser level, and an ad may also override the campaign's setting further.",
    required: [],
  })
  .openapi('DefaultClickThroughEventTagProperties')

const FrequencyCapSchema = z
  .object({
    duration: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Duration of time, in seconds, for this frequency cap. The maximum duration is 90 days. Acceptable values are 1 to 7776000, inclusive.',
      }),
    impressions: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Number of times an individual user can be served the ad within the specified duration. Acceptable values are 1 to 15, inclusive.',
      }),
  })
  .openapi({ description: 'Frequency Cap.', required: [] })
  .openapi('FrequencyCap')

const DeliveryScheduleSchema = z
  .object({
    frequencyCap: FrequencyCapSchema.exactOptional().openapi({
      description:
        'Limit on the number of times an individual user can be served the ad within a specified period of time.',
    }),
    hardCutoff: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether or not hard cutoff is enabled. If true, the ad will not serve after the end date and time. Otherwise the ad will continue to be served until it has reached its delivery goals.',
      }),
    impressionRatio: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Impression ratio for this ad. This ratio determines how often each ad is served relative to the others. For example, if ad A has an impression ratio of 1 and ad B has an impression ratio of 3, then Campaign Manager will serve ad B three times as often as ad A. Acceptable values are 1 to 10, inclusive.',
      }),
    priority: z
      .enum([
        'AD_PRIORITY_01',
        'AD_PRIORITY_02',
        'AD_PRIORITY_03',
        'AD_PRIORITY_04',
        'AD_PRIORITY_05',
        'AD_PRIORITY_06',
        'AD_PRIORITY_07',
        'AD_PRIORITY_08',
        'AD_PRIORITY_09',
        'AD_PRIORITY_10',
        'AD_PRIORITY_11',
        'AD_PRIORITY_12',
        'AD_PRIORITY_13',
        'AD_PRIORITY_14',
        'AD_PRIORITY_15',
        'AD_PRIORITY_16',
      ])
      .exactOptional()
      .openapi({
        description:
          'Serving priority of an ad, with respect to other ads. The lower the priority number, the greater the priority with which it is served.',
      }),
  })
  .openapi({ description: 'Delivery Schedule.', required: [] })
  .openapi('DeliverySchedule')

const EventTagOverrideSchema = z
  .object({
    enabled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this override is enabled.' }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'ID of this event tag override. This is a read-only, auto-generated field.',
      }),
  })
  .openapi({ description: 'Event tag override information.', required: [] })
  .openapi('EventTagOverride')

const CitySchema = z
  .object({
    countryCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'Country code of the country to which this city belongs.' }),
    countryDartId: z
      .string()
      .exactOptional()
      .openapi({ description: 'DART ID of the country to which this city belongs.' }),
    dartId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'DART ID of this city. This is the ID used for targeting and generating reports.',
      }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "dfareporting#city".',
      }),
    metroCode: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Metro region code of the metro region (DMA) to which this city belongs.',
      }),
    metroDmaId: z
      .string()
      .exactOptional()
      .openapi({ description: 'ID of the metro region (DMA) to which this city belongs.' }),
    name: z.string().exactOptional().openapi({ description: 'Name of this city.' }),
    regionCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'Region code of the region to which this city belongs.' }),
    regionDartId: z
      .string()
      .exactOptional()
      .openapi({ description: 'DART ID of the region to which this city belongs.' }),
  })
  .openapi({
    description: 'Contains information about a city that can be targeted by ads.',
    required: [],
  })
  .openapi('City')

const CountrySchema = z
  .object({
    countryCode: z.string().exactOptional().openapi({ description: 'Country code.' }),
    dartId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'DART ID of this country. This is the ID used for targeting and generating reports.',
      }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "dfareporting#country".',
      }),
    name: z.string().exactOptional().openapi({ description: 'Name of this country.' }),
    sslEnabled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether ad serving supports secure servers in this country.' }),
  })
  .openapi({
    description: 'Contains information about a country that can be targeted by ads.',
    required: [],
  })
  .openapi('Country')

const MetroSchema = z
  .object({
    countryCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'Country code of the country to which this metro region belongs.' }),
    countryDartId: z
      .string()
      .exactOptional()
      .openapi({ description: 'DART ID of the country to which this metro region belongs.' }),
    dartId: z.string().exactOptional().openapi({ description: 'DART ID of this metro region.' }),
    dmaId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'DMA ID of this metro region. This is the ID used for targeting and generating reports, and is equivalent to metro_code.',
      }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "dfareporting#metro".',
      }),
    metroCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'Metro code of this metro region. This is equivalent to dma_id.' }),
    name: z.string().exactOptional().openapi({ description: 'Name of this metro region.' }),
  })
  .openapi({
    description: 'Contains information about a metro region that can be targeted by ads.',
    required: [],
  })
  .openapi('Metro')

const PostalCodeSchema = z
  .object({
    code: z
      .string()
      .exactOptional()
      .openapi({ description: 'Postal code. This is equivalent to the id field.' }),
    countryCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'Country code of the country to which this postal code belongs.' }),
    countryDartId: z
      .string()
      .exactOptional()
      .openapi({ description: 'DART ID of the country to which this postal code belongs.' }),
    id: z.string().exactOptional().openapi({ description: 'ID of this postal code.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "dfareporting#postalCode".',
      }),
  })
  .openapi({
    description: 'Contains information about a postal code that can be targeted by ads.',
    required: [],
  })
  .openapi('PostalCode')

const RegionSchema = z
  .object({
    countryCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'Country code of the country to which this region belongs.' }),
    countryDartId: z
      .string()
      .exactOptional()
      .openapi({ description: 'DART ID of the country to which this region belongs.' }),
    dartId: z.string().exactOptional().openapi({ description: 'DART ID of this region.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "dfareporting#region".',
      }),
    name: z.string().exactOptional().openapi({ description: 'Name of this region.' }),
    regionCode: z.string().exactOptional().openapi({ description: 'Region code.' }),
  })
  .openapi({
    description: 'Contains information about a region that can be targeted by ads.',
    required: [],
  })
  .openapi('Region')

const GeoTargetingSchema = z
  .object({
    cities: z
      .array(CitySchema)
      .exactOptional()
      .openapi({
        description:
          'Cities to be targeted. For each city only dartId is required. The other fields are populated automatically when the ad is inserted or updated. If targeting a city, do not target or exclude the country of the city, and do not target the metro or region of the city.',
      }),
    countries: z
      .array(CountrySchema)
      .exactOptional()
      .openapi({
        description:
          'Countries to be targeted or excluded from targeting, depending on the setting of the excludeCountries field. For each country only dartId is required. The other fields are populated automatically when the ad is inserted or updated. If targeting or excluding a country, do not target regions, cities, metros, or postal codes in the same country.',
      }),
    excludeCountries: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether or not to exclude the countries in the countries field from targeting. If false, the countries field refers to countries which will be targeted by the ad.',
      }),
    metros: z
      .array(MetroSchema)
      .exactOptional()
      .openapi({
        description:
          'Metros to be targeted. For each metro only dmaId is required. The other fields are populated automatically when the ad is inserted or updated. If targeting a metro, do not target or exclude the country of the metro.',
      }),
    postalCodes: z
      .array(PostalCodeSchema)
      .exactOptional()
      .openapi({
        description:
          'Postal codes to be targeted. For each postal code only id is required. The other fields are populated automatically when the ad is inserted or updated. If targeting a postal code, do not target or exclude the country of the postal code.',
      }),
    regions: z
      .array(RegionSchema)
      .exactOptional()
      .openapi({
        description:
          'Regions to be targeted. For each region only dartId is required. The other fields are populated automatically when the ad is inserted or updated. If targeting a region, do not target or exclude the country of the region.',
      }),
  })
  .openapi({ description: 'Geographical Targeting.', required: [] })
  .openapi('GeoTargeting')

const KeyValueTargetingExpressionSchema = z
  .object({
    expression: z
      .string()
      .exactOptional()
      .openapi({ description: 'Keyword expression being targeted by the ad.' }),
  })
  .openapi({ description: 'Key Value Targeting Expression.', required: [] })
  .openapi('KeyValueTargetingExpression')

const LanguageSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Language ID of this language. This is the ID used for targeting and generating reports.',
      }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "dfareporting#language".',
      }),
    languageCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Format of language code is an ISO 639 two-letter language code optionally followed by an underscore followed by an ISO 3166 code. Examples are "en" for English or "zh_CN" for Simplified Chinese.',
      }),
    name: z.string().exactOptional().openapi({ description: 'Name of this language.' }),
  })
  .openapi({
    description: 'Contains information about a language that can be targeted by ads.',
    required: [],
  })
  .openapi('Language')

const LanguageTargetingSchema = z
  .object({
    languages: z
      .array(LanguageSchema)
      .exactOptional()
      .openapi({
        description:
          'Languages that this ad targets. For each language only languageId is required. The other fields are populated automatically when the ad is inserted or updated.',
      }),
  })
  .openapi({ description: 'Language Targeting.', required: [] })
  .openapi('LanguageTargeting')

const PlacementAssignmentSchema = z
  .object({
    active: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Whether this placement assignment is active. When true, the placement will be included in the ad's rotation.",
      }),
    placementId: z
      .string()
      .exactOptional()
      .openapi({ description: 'ID of the placement to be assigned. This is a required field.' }),
    placementIdDimensionValue: DimensionValueSchema.exactOptional().openapi({
      description:
        'Dimension value for the ID of the placement. This is a read-only, auto-generated field.',
    }),
    sslRequired: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether the placement to be assigned requires SSL. This is a read-only field that is auto-generated when the ad is inserted or updated.',
      }),
  })
  .openapi({ description: 'Placement Assignment.', required: [] })
  .openapi('PlacementAssignment')

const ListTargetingExpressionSchema = z
  .object({
    expression: z
      .string()
      .exactOptional()
      .openapi({ description: 'Expression describing which lists are being targeted by the ad.' }),
  })
  .openapi({ description: 'Remarketing List Targeting Expression.', required: [] })
  .openapi('ListTargetingExpression')

const SizeSchema = z
  .object({
    height: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'Height of this size. Acceptable values are 0 to 32767, inclusive.',
      }),
    iab: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'IAB standard size. This is a read-only, auto-generated field.' }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'ID of this size. This is a read-only, auto-generated field.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "dfareporting#size".',
      }),
    width: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Width of this size. Acceptable values are 0 to 32767, inclusive.' }),
  })
  .openapi({
    description: 'Represents the dimensions of ads, placements, creatives, or creative assets.',
    required: [],
  })
  .openapi('Size')

const BrowserSchema = z
  .object({
    browserVersionId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'ID referring to this grouping of browser and version numbers. This is the ID used for targeting.',
      }),
    dartId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'DART ID of this browser. This is the ID used when generating reports.',
      }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "dfareporting#browser".',
      }),
    majorVersion: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Major version number (leftmost number) of this browser. For example, for Chrome 5.0.376.86 beta, this field should be set to 5. An asterisk (*) may be used to target any version number, and a question mark (?) may be used to target cases where the version number cannot be identified. For example, Chrome *.* targets any version of Chrome: 1.2, 2.5, 3.5, and so on. Chrome 3.* targets Chrome 3.1, 3.5, but not 4.0. Firefox ?.? targets cases where the ad server knows the browser is Firefox but can't tell which version it is.",
      }),
    minorVersion: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Minor version number (number after first dot on left) of this browser. For example, for Chrome 5.0.375.86 beta, this field should be set to 0. An asterisk (*) may be used to target any version number, and a question mark (?) may be used to target cases where the version number cannot be identified. For example, Chrome *.* targets any version of Chrome: 1.2, 2.5, 3.5, and so on. Chrome 3.* targets Chrome 3.1, 3.5, but not 4.0. Firefox ?.? targets cases where the ad server knows the browser is Firefox but can't tell which version it is.",
      }),
    name: z.string().exactOptional().openapi({ description: 'Name of this browser.' }),
  })
  .openapi({
    description: 'Contains information about a browser that can be targeted by ads.',
    required: [],
  })
  .openapi('Browser')

const ConnectionTypeSchema = z
  .object({
    id: z.string().exactOptional().openapi({ description: 'ID of this connection type.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "dfareporting#connectionType".',
      }),
    name: z.string().exactOptional().openapi({ description: 'Name of this connection type.' }),
  })
  .openapi({
    description:
      'Contains information about an internet connection type that can be targeted by ads. Clients can use the connection type to target mobile vs. broadband users.',
    required: [],
  })
  .openapi('ConnectionType')

const MobileCarrierSchema = z
  .object({
    countryCode: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Country code of the country to which this mobile carrier belongs.',
      }),
    countryDartId: z
      .string()
      .exactOptional()
      .openapi({ description: 'DART ID of the country to which this mobile carrier belongs.' }),
    id: z.string().exactOptional().openapi({ description: 'ID of this mobile carrier.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "dfareporting#mobileCarrier".',
      }),
    name: z.string().exactOptional().openapi({ description: 'Name of this mobile carrier.' }),
  })
  .openapi({
    description: 'Contains information about a mobile carrier that can be targeted by ads.',
    required: [],
  })
  .openapi('MobileCarrier')

const OperatingSystemSchema = z
  .object({
    dartId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'DART ID of this operating system. This is the ID used for targeting.',
      }),
    desktop: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this operating system is for desktop.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "dfareporting#operatingSystem".',
      }),
    mobile: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this operating system is for mobile.' }),
    name: z.string().exactOptional().openapi({ description: 'Name of this operating system.' }),
  })
  .openapi({
    description: 'Contains information about an operating system that can be targeted by ads.',
    required: [],
  })
  .openapi('OperatingSystem')

const OperatingSystemVersionSchema = z
  .object({
    id: z.string().exactOptional().openapi({ description: 'ID of this operating system version.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "dfareporting#operatingSystemVersion".',
      }),
    majorVersion: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Major version (leftmost number) of this operating system version.',
      }),
    minorVersion: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Minor version (number after the first dot) of this operating system version.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of this operating system version.' }),
    operatingSystem: OperatingSystemSchema.exactOptional().openapi({
      description: 'Operating system of this operating system version.',
    }),
  })
  .openapi({
    description:
      'Contains information about a particular version of an operating system that can be targeted by ads.',
    required: [],
  })
  .openapi('OperatingSystemVersion')

const PlatformTypeSchema = z
  .object({
    id: z.string().exactOptional().openapi({ description: 'ID of this platform type.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "dfareporting#platformType".',
      }),
    name: z.string().exactOptional().openapi({ description: 'Name of this platform type.' }),
  })
  .openapi({
    description: 'Contains information about a platform type that can be targeted by ads.',
    required: [],
  })
  .openapi('PlatformType')

const TechnologyTargetingSchema = z
  .object({
    browsers: z
      .array(BrowserSchema)
      .exactOptional()
      .openapi({
        description:
          'Browsers that this ad targets. For each browser either set browserVersionId or dartId along with the version numbers. If both are specified, only browserVersionId will be used. The other fields are populated automatically when the ad is inserted or updated.',
      }),
    connectionTypes: z
      .array(ConnectionTypeSchema)
      .exactOptional()
      .openapi({
        description:
          'Connection types that this ad targets. For each connection type only id is required. The other fields are populated automatically when the ad is inserted or updated.',
      }),
    mobileCarriers: z
      .array(MobileCarrierSchema)
      .exactOptional()
      .openapi({
        description:
          'Mobile carriers that this ad targets. For each mobile carrier only id is required, and the other fields are populated automatically when the ad is inserted or updated. If targeting a mobile carrier, do not set targeting for any zip codes.',
      }),
    operatingSystemVersions: z
      .array(OperatingSystemVersionSchema)
      .exactOptional()
      .openapi({
        description:
          'Operating system versions that this ad targets. To target all versions, use operatingSystems. For each operating system version, only id is required. The other fields are populated automatically when the ad is inserted or updated. If targeting an operating system version, do not set targeting for the corresponding operating system in operatingSystems.',
      }),
    operatingSystems: z
      .array(OperatingSystemSchema)
      .exactOptional()
      .openapi({
        description:
          'Operating systems that this ad targets. To target specific versions, use operatingSystemVersions. For each operating system only dartId is required. The other fields are populated automatically when the ad is inserted or updated. If targeting an operating system, do not set targeting for operating system versions for the same operating system.',
      }),
    platformTypes: z
      .array(PlatformTypeSchema)
      .exactOptional()
      .openapi({
        description:
          'Platform types that this ad targets. For example, desktop, mobile, or tablet. For each platform type, only id is required, and the other fields are populated automatically when the ad is inserted or updated.',
      }),
  })
  .openapi({ description: 'Technology Targeting.', required: [] })
  .openapi('TechnologyTargeting')

const AdSchema = z
  .object({
    accountId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Account ID of this ad. This is a read-only field that can be left blank.',
      }),
    active: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this ad is active. When true, archived must be false.' }),
    advertiserId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Advertiser ID of this ad. This is a required field on insertion.' }),
    advertiserIdDimensionValue: DimensionValueSchema.exactOptional().openapi({
      description:
        'Dimension value for the ID of the advertiser. This is a read-only, auto-generated field.',
    }),
    archived: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this ad is archived. When true, active must be false.' }),
    audienceSegmentId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Audience segment ID that is being targeted for this ad. Applicable when type is AD_SERVING_STANDARD_AD.',
      }),
    campaignId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Campaign ID of this ad. This is a required field on insertion.' }),
    campaignIdDimensionValue: DimensionValueSchema.exactOptional().openapi({
      description:
        'Dimension value for the ID of the campaign. This is a read-only, auto-generated field.',
    }),
    clickThroughUrl: ClickThroughUrlSchema.exactOptional().openapi({
      description:
        'Click-through URL for this ad. This is a required field on insertion. Applicable when type is AD_SERVING_CLICK_TRACKER.',
    }),
    clickThroughUrlSuffixProperties: ClickThroughUrlSuffixPropertiesSchema.exactOptional().openapi({
      description:
        'Click-through URL suffix properties for this ad. Applies to the URL in the ad or (if overriding ad properties) the URL in the creative.',
    }),
    comments: z.string().exactOptional().openapi({ description: 'Comments for this ad.' }),
    compatibility: z
      .enum([
        'DISPLAY',
        'DISPLAY_INTERSTITIAL',
        'APP',
        'APP_INTERSTITIAL',
        'IN_STREAM_VIDEO',
        'IN_STREAM_AUDIO',
      ])
      .exactOptional()
      .openapi({
        description:
          'Compatibility of this ad. Applicable when type is AD_SERVING_DEFAULT_AD. DISPLAY and DISPLAY_INTERSTITIAL refer to either rendering on desktop or on mobile devices or in mobile apps for regular or interstitial ads, respectively. APP and APP_INTERSTITIAL are only used for existing default ads. New mobile placements must be assigned DISPLAY or DISPLAY_INTERSTITIAL and default ads created for those placements will be limited to those compatibility types. IN_STREAM_VIDEO refers to rendering in-stream video ads developed with the VAST standard.',
      }),
    createInfo: LastModifiedInfoSchema.exactOptional().openapi({
      description: 'Information about the creation of this ad. This is a read-only field.',
    }),
    creativeGroupAssignments: z
      .array(CreativeGroupAssignmentSchema)
      .exactOptional()
      .openapi({
        description:
          'Creative group assignments for this ad. Applicable when type is AD_SERVING_CLICK_TRACKER. Only one assignment per creative group number is allowed for a maximum of two assignments.',
      }),
    creativeRotation: CreativeRotationSchema.exactOptional().openapi({
      description:
        'Creative rotation for this ad. Applicable when type is AD_SERVING_DEFAULT_AD, AD_SERVING_STANDARD_AD, or AD_SERVING_TRACKING. When type is AD_SERVING_DEFAULT_AD, this field should have exactly one creativeAssignment .',
    }),
    dayPartTargeting: DayPartTargetingSchema.exactOptional().openapi({
      description:
        'Time and day targeting information for this ad. This field must be left blank if the ad is using a targeting template. Applicable when type is AD_SERVING_STANDARD_AD.',
    }),
    defaultClickThroughEventTagProperties:
      DefaultClickThroughEventTagPropertiesSchema.exactOptional().openapi({
        description: 'Default click-through event tag properties for this ad.',
      }),
    deliverySchedule: DeliveryScheduleSchema.exactOptional().openapi({
      description:
        'Delivery schedule information for this ad. Applicable when type is AD_SERVING_STANDARD_AD or AD_SERVING_TRACKING. This field along with subfields priority and impressionRatio are required on insertion when type is AD_SERVING_STANDARD_AD.',
    }),
    dynamicClickTracker: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether this ad is a dynamic click tracker. Applicable when type is AD_SERVING_CLICK_TRACKER. This is a required field on insert, and is read-only after insert.',
      }),
    endTime: z.iso.datetime({ offset: true }).exactOptional(),
    eventTagOverrides: z
      .array(EventTagOverrideSchema)
      .exactOptional()
      .openapi({ description: 'Event tag overrides for this ad.' }),
    geoTargeting: GeoTargetingSchema.exactOptional().openapi({
      description:
        'Geographical targeting information for this ad. This field must be left blank if the ad is using a targeting template. Applicable when type is AD_SERVING_STANDARD_AD.',
    }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'ID of this ad. This is a read-only, auto-generated field.' }),
    idDimensionValue: DimensionValueSchema.exactOptional().openapi({
      description:
        'Dimension value for the ID of this ad. This is a read-only, auto-generated field.',
    }),
    keyValueTargetingExpression: KeyValueTargetingExpressionSchema.exactOptional().openapi({
      description:
        'Key-value targeting information for this ad. This field must be left blank if the ad is using a targeting template. Applicable when type is AD_SERVING_STANDARD_AD.',
    }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "dfareporting#ad".',
      }),
    languageTargeting: LanguageTargetingSchema.exactOptional().openapi({
      description:
        'Language targeting information for this ad. This field must be left blank if the ad is using a targeting template. Applicable when type is AD_SERVING_STANDARD_AD.',
    }),
    lastModifiedInfo: LastModifiedInfoSchema.exactOptional().openapi({
      description:
        'Information about the most recent modification of this ad. This is a read-only field.',
    }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Name of this ad. This is a required field and must be less than 256 characters long.',
      }),
    placementAssignments: z
      .array(PlacementAssignmentSchema)
      .exactOptional()
      .openapi({ description: 'Placement assignments for this ad.' }),
    remarketingListExpression: ListTargetingExpressionSchema.exactOptional().openapi({
      description:
        'Remarketing list targeting expression for this ad. This field must be left blank if the ad is using a targeting template. Applicable when type is AD_SERVING_STANDARD_AD.',
    }),
    size: SizeSchema.exactOptional().openapi({
      description: 'Size of this ad. Applicable when type is AD_SERVING_DEFAULT_AD.',
    }),
    sslCompliant: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether this ad is ssl compliant. This is a read-only field that is auto-generated when the ad is inserted or updated.',
      }),
    sslRequired: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether this ad requires ssl. This is a read-only field that is auto-generated when the ad is inserted or updated.',
      }),
    startTime: z.iso.datetime({ offset: true }).exactOptional(),
    subaccountId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Subaccount ID of this ad. This is a read-only field that can be left blank.',
      }),
    targetingTemplateId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Targeting template ID, used to apply preconfigured targeting information to this ad. This cannot be set while any of dayPartTargeting, geoTargeting, keyValueTargetingExpression, languageTargeting, remarketingListExpression, or technologyTargeting are set. Applicable when type is AD_SERVING_STANDARD_AD.',
      }),
    technologyTargeting: TechnologyTargetingSchema.exactOptional().openapi({
      description:
        'Technology platform targeting information for this ad. This field must be left blank if the ad is using a targeting template. Applicable when type is AD_SERVING_STANDARD_AD.',
    }),
    type: z
      .enum([
        'AD_SERVING_STANDARD_AD',
        'AD_SERVING_DEFAULT_AD',
        'AD_SERVING_CLICK_TRACKER',
        'AD_SERVING_TRACKING',
        'AD_SERVING_BRAND_SAFE_AD',
      ])
      .exactOptional()
      .openapi({
        description:
          'Type of ad. This is a required field on insertion. Note that default ads ( AD_SERVING_DEFAULT_AD) cannot be created directly (see Creative resource).',
      }),
  })
  .openapi({ description: 'Contains properties of a Campaign Manager ad.', required: [] })
  .openapi('Ad')

const AdBlockingConfigurationSchema = z
  .object({
    clickThroughUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Click-through URL used by brand-neutral ads. This is a required field when overrideClickThroughUrl is set to true.',
      }),
    creativeBundleId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'ID of a creative bundle to use for this campaign. If set, brand-neutral ads will select creatives from this bundle. Otherwise, a default transparent pixel will be used.',
      }),
    enabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether this campaign has enabled ad blocking. When true, ad blocking is enabled for placements in the campaign, but this may be overridden by site and placement settings. When false, ad blocking is disabled for all placements under the campaign, regardless of site and placement settings.',
      }),
    overrideClickThroughUrl: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Whether the brand-neutral ad's click-through URL comes from the campaign's creative bundle or the override URL. Must be set to true if ad blocking is enabled and no creative bundle is configured.",
      }),
  })
  .openapi({ description: 'Campaign ad blocking settings.', required: [] })
  .openapi('AdBlockingConfiguration')

const AdSlotSchema = z
  .object({
    comment: z.string().exactOptional().openapi({ description: 'Comment for this ad slot.' }),
    compatibility: z
      .enum([
        'DISPLAY',
        'DISPLAY_INTERSTITIAL',
        'APP',
        'APP_INTERSTITIAL',
        'IN_STREAM_VIDEO',
        'IN_STREAM_AUDIO',
      ])
      .exactOptional()
      .openapi({
        description:
          'Ad slot compatibility. DISPLAY and DISPLAY_INTERSTITIAL refer to rendering either on desktop, mobile devices or in mobile apps for regular or interstitial ads respectively. APP and APP_INTERSTITIAL are for rendering in mobile apps. IN_STREAM_VIDEO refers to rendering in in-stream video ads developed with the VAST standard.',
      }),
    height: z.string().exactOptional().openapi({ description: 'Height of this ad slot.' }),
    linkedPlacementId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'ID of the placement from an external platform that is linked to this ad slot.',
      }),
    name: z.string().exactOptional().openapi({ description: 'Name of this ad slot.' }),
    paymentSourceType: z
      .enum([
        'PLANNING_PAYMENT_SOURCE_TYPE_AGENCY_PAID',
        'PLANNING_PAYMENT_SOURCE_TYPE_PUBLISHER_PAID',
      ])
      .exactOptional()
      .openapi({ description: 'Payment source type of this ad slot.' }),
    primary: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Primary ad slot of a roadblock inventory item.' }),
    width: z.string().exactOptional().openapi({ description: 'Width of this ad slot.' }),
  })
  .openapi({ description: 'Ad Slot', required: [] })
  .openapi('AdSlot')

const AdsListResponseSchema = z
  .object({
    ads: z.array(AdSchema).exactOptional().openapi({ description: 'Ad collection.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "dfareporting#adsListResponse".',
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'Pagination token to be used for the next list operation.' }),
  })
  .openapi({ description: 'Ad List Response', required: [] })
  .openapi('AdsListResponse')

const AdvertiserSchema = z
  .object({
    accountId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Account ID of this advertiser.This is a read-only field that can be left blank.',
      }),
    advertiserGroupId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'ID of the advertiser group this advertiser belongs to. You can group advertisers for reporting purposes, allowing you to see aggregated information for all advertisers in each group.',
      }),
    clickThroughUrlSuffix: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Suffix added to click-through URL of ad creative associations under this advertiser. Must be less than 129 characters long.',
      }),
    defaultClickThroughEventTagId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "ID of the click-through event tag to apply by default to the landing pages of this advertiser's campaigns.",
      }),
    defaultEmail: z
      .string()
      .exactOptional()
      .openapi({ description: 'Default email address used in sender field for tag emails.' }),
    floodlightConfigurationId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Floodlight configuration ID of this advertiser. The floodlight configuration ID will be created automatically, so on insert this field should be left blank. This field can be set to another advertiser's floodlight configuration ID in order to share that advertiser's floodlight configuration with this advertiser, so long as: - This advertiser's original floodlight configuration is not already associated with floodlight activities or floodlight activity groups. - This advertiser's original floodlight configuration is not already shared with another advertiser. ",
      }),
    floodlightConfigurationIdDimensionValue: DimensionValueSchema.exactOptional().openapi({
      description:
        'Dimension value for the ID of the floodlight configuration. This is a read-only, auto-generated field.',
    }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'ID of this advertiser. This is a read-only, auto-generated field.',
      }),
    idDimensionValue: DimensionValueSchema.exactOptional().openapi({
      description:
        'Dimension value for the ID of this advertiser. This is a read-only, auto-generated field.',
    }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "dfareporting#advertiser".',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Name of this advertiser. This is a required field and must be less than 256 characters long and unique among advertisers of the same account.',
      }),
    originalFloodlightConfigurationId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Original floodlight configuration before any sharing occurred. Set the floodlightConfigurationId of this advertiser to originalFloodlightConfigurationId to unshare the advertiser's current floodlight configuration. You cannot unshare an advertiser's floodlight configuration if the shared configuration has activities associated with any campaign or placement.",
      }),
    status: z
      .enum(['APPROVED', 'ON_HOLD'])
      .exactOptional()
      .openapi({ description: 'Status of this advertiser.' }),
    subaccountId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Subaccount ID of this advertiser.This is a read-only field that can be left blank.',
      }),
    suspended: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Suspension status of this advertiser.' }),
  })
  .openapi({ description: 'Contains properties of a Campaign Manager advertiser.', required: [] })
  .openapi('Advertiser')

const AdvertiserGroupSchema = z
  .object({
    accountId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Account ID of this advertiser group. This is a read-only field that can be left blank.',
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'ID of this advertiser group. This is a read-only, auto-generated field.',
      }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "dfareporting#advertiserGroup".',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Name of this advertiser group. This is a required field and must be less than 256 characters long and unique among advertiser groups of the same account.',
      }),
  })
  .openapi({
    description:
      'Groups advertisers together so that reports can be generated for the entire group at once.',
    required: [],
  })
  .openapi('AdvertiserGroup')

const AdvertiserGroupsListResponseSchema = z
  .object({
    advertiserGroups: z
      .array(AdvertiserGroupSchema)
      .exactOptional()
      .openapi({ description: 'Advertiser group collection.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "dfareporting#advertiserGroupsListResponse".',
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'Pagination token to be used for the next list operation.' }),
  })
  .openapi({ description: 'Advertiser Group List Response', required: [] })
  .openapi('AdvertiserGroupsListResponse')

const MobileAppSchema = z
  .object({
    directory: z
      .enum([
        'UNKNOWN',
        'APPLE_APP_STORE',
        'GOOGLE_PLAY_STORE',
        'ROKU_APP_STORE',
        'AMAZON_FIRETV_APP_STORE',
        'PLAYSTATION_APP_STORE',
        'APPLE_TV_APP_STORE',
        'XBOX_APP_STORE',
        'SAMSUNG_TV_APP_STORE',
        'ANDROID_TV_APP_STORE',
        'GENERIC_CTV_APP_STORE',
      ])
      .exactOptional()
      .openapi({ description: 'Mobile app directory.' }),
    id: z.string().exactOptional().openapi({ description: 'ID of this mobile app.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "dfareporting#mobileApp".',
      }),
    publisherName: z.string().exactOptional().openapi({ description: 'Publisher name.' }),
    title: z.string().exactOptional().openapi({ description: 'Title of this mobile app.' }),
  })
  .openapi({
    description: 'Contains information about a mobile app. Used as a landing page deep link.',
    required: [],
  })
  .openapi('MobileApp')

const DeepLinkSchema = z
  .object({
    appUrl: z
      .string()
      .exactOptional()
      .openapi({ description: 'The URL of the mobile app being linked to.' }),
    fallbackUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The fallback URL. This URL will be served to users who do not have the mobile app installed.',
      }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "dfareporting#deepLink".',
      }),
    mobileApp: MobileAppSchema.exactOptional().openapi({
      description: 'The mobile app targeted by this deep link.',
    }),
    remarketingListIds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Ads served to users on these remarketing lists will use this deep link. Applicable when mobileApp.directory is APPLE_APP_STORE.',
      }),
  })
  .openapi({ description: 'Contains information about a landing page deep link.', required: [] })
  .openapi('DeepLink')

const LandingPageSchema = z
  .object({
    advertiserId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Advertiser ID of this landing page. This is a required field.' }),
    archived: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this landing page has been archived.' }),
    deepLinks: z
      .array(DeepLinkSchema)
      .exactOptional()
      .openapi({ description: 'Links that will direct the user to a mobile app, if installed.' }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'ID of this landing page. This is a read-only, auto-generated field.',
      }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "dfareporting#landingPage".',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Name of this landing page. This is a required field. It must be less than 256 characters long.',
      }),
    url: z
      .string()
      .exactOptional()
      .openapi({ description: 'URL of this landing page. This is a required field.' }),
  })
  .openapi({
    description:
      "Contains information about where a user's browser is taken after the user clicks an ad.",
    required: [],
  })
  .openapi('LandingPage')

const AdvertiserLandingPagesListResponseSchema = z
  .object({
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "dfareporting#advertiserLandingPagesListResponse".',
      }),
    landingPages: z
      .array(LandingPageSchema)
      .exactOptional()
      .openapi({ description: 'Landing page collection' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'Pagination token to be used for the next list operation.' }),
  })
  .openapi({ description: 'Landing Page List Response', required: [] })
  .openapi('AdvertiserLandingPagesListResponse')

const AdvertisersListResponseSchema = z
  .object({
    advertisers: z
      .array(AdvertiserSchema)
      .exactOptional()
      .openapi({ description: 'Advertiser collection.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "dfareporting#advertisersListResponse".',
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'Pagination token to be used for the next list operation.' }),
  })
  .openapi({ description: 'Advertiser List Response', required: [] })
  .openapi('AdvertisersListResponse')

const AudienceSegmentSchema = z
  .object({
    allocation: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Weight allocated to this segment. The weight assigned will be understood in proportion to the weights assigned to other segments in the same segment group. Acceptable values are 1 to 1000, inclusive.',
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'ID of this audience segment. This is a read-only, auto-generated field.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Name of this audience segment. This is a required field and must be less than 65 characters long.',
      }),
  })
  .openapi({ description: 'Audience Segment.', required: [] })
  .openapi('AudienceSegment')

const AudienceSegmentGroupSchema = z
  .object({
    audienceSegments: z
      .array(AudienceSegmentSchema)
      .exactOptional()
      .openapi({
        description:
          'Audience segments assigned to this group. The number of segments must be between 2 and 100.',
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'ID of this audience segment group. This is a read-only, auto-generated field.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Name of this audience segment group. This is a required field and must be less than 65 characters long.',
      }),
  })
  .openapi({ description: 'Audience Segment Group.', required: [] })
  .openapi('AudienceSegmentGroup')

const BrowsersListResponseSchema = z
  .object({
    browsers: z
      .array(BrowserSchema)
      .exactOptional()
      .openapi({ description: 'Browser collection.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "dfareporting#browsersListResponse".',
      }),
  })
  .openapi({ description: 'Browser List Response', required: [] })
  .openapi('BrowsersListResponse')

const OptimizationActivitySchema = z
  .object({
    floodlightActivityId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Floodlight activity ID of this optimization activity. This is a required field.',
      }),
    floodlightActivityIdDimensionValue: DimensionValueSchema.exactOptional().openapi({
      description:
        'Dimension value for the ID of the floodlight activity. This is a read-only, auto-generated field.',
    }),
    weight: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Weight associated with this optimization. The weight assigned will be understood in proportion to the weights assigned to the other optimization activities. Value must be greater than or equal to 1.',
      }),
  })
  .openapi({ description: 'Creative optimization activity.', required: [] })
  .openapi('OptimizationActivity')

const CreativeOptimizationConfigurationSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'ID of this creative optimization config. This field is auto-generated when the campaign is inserted or updated. It can be null for existing campaigns.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Name of this creative optimization config. This is a required field and must be less than 129 characters long.',
      }),
    optimizationActivitys: z
      .array(OptimizationActivitySchema)
      .exactOptional()
      .openapi({
        description: 'List of optimization activities associated with this configuration.',
      }),
    optimizationModel: z
      .enum([
        'CLICK',
        'POST_CLICK',
        'POST_IMPRESSION',
        'POST_CLICK_AND_IMPRESSION',
        'VIDEO_COMPLETION',
      ])
      .exactOptional()
      .openapi({ description: 'Optimization model for this configuration.' }),
  })
  .openapi({ description: 'Creative optimization settings.', required: [] })
  .openapi('CreativeOptimizationConfiguration')

const CampaignSchema = z
  .object({
    accountId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Account ID of this campaign. This is a read-only field that can be left blank.',
      }),
    adBlockingConfiguration: AdBlockingConfigurationSchema.exactOptional().openapi({
      description: 'Ad blocking settings for this campaign.',
    }),
    additionalCreativeOptimizationConfigurations: z
      .array(CreativeOptimizationConfigurationSchema)
      .exactOptional()
      .openapi({
        description: 'Additional creative optimization configurations for the campaign.',
      }),
    advertiserGroupId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Advertiser group ID of the associated advertiser.' }),
    advertiserId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Advertiser ID of this campaign. This is a required field.' }),
    advertiserIdDimensionValue: DimensionValueSchema.exactOptional().openapi({
      description:
        'Dimension value for the advertiser ID of this campaign. This is a read-only, auto-generated field.',
    }),
    archived: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this campaign has been archived.' }),
    audienceSegmentGroups: z
      .array(AudienceSegmentGroupSchema)
      .exactOptional()
      .openapi({
        description:
          'Audience segment groups assigned to this campaign. Cannot have more than 300 segment groups.',
      }),
    billingInvoiceCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Billing invoice code included in the Campaign Manager client billing invoices associated with the campaign.',
      }),
    clickThroughUrlSuffixProperties: ClickThroughUrlSuffixPropertiesSchema.exactOptional().openapi({
      description: 'Click-through URL suffix override properties for this campaign.',
    }),
    comment: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Arbitrary comments about this campaign. Must be less than 256 characters long.',
      }),
    createInfo: LastModifiedInfoSchema.exactOptional().openapi({
      description: 'Information about the creation of this campaign. This is a read-only field.',
    }),
    creativeGroupIds: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'List of creative group IDs that are assigned to the campaign.' }),
    creativeOptimizationConfiguration:
      CreativeOptimizationConfigurationSchema.exactOptional().openapi({
        description: 'Creative optimization configuration for the campaign.',
      }),
    defaultClickThroughEventTagProperties:
      DefaultClickThroughEventTagPropertiesSchema.exactOptional().openapi({
        description: 'Click-through event tag ID override properties for this campaign.',
      }),
    defaultLandingPageId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The default landing page ID for this campaign.' }),
    endDate: z.iso.date().exactOptional(),
    eventTagOverrides: z
      .array(EventTagOverrideSchema)
      .exactOptional()
      .openapi({
        description: 'Overrides that can be used to activate or deactivate advertiser event tags.',
      }),
    externalId: z
      .string()
      .exactOptional()
      .openapi({ description: 'External ID for this campaign.' }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'ID of this campaign. This is a read-only auto-generated field.' }),
    idDimensionValue: DimensionValueSchema.exactOptional().openapi({
      description:
        'Dimension value for the ID of this campaign. This is a read-only, auto-generated field.',
    }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "dfareporting#campaign".',
      }),
    lastModifiedInfo: LastModifiedInfoSchema.exactOptional().openapi({
      description:
        'Information about the most recent modification of this campaign. This is a read-only field.',
    }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Name of this campaign. This is a required field and must be less than 512 characters long and unique among campaigns of the same advertiser.',
      }),
    nielsenOcrEnabled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether Nielsen reports are enabled for this campaign.' }),
    startDate: z.iso.date().exactOptional(),
    subaccountId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Subaccount ID of this campaign. This is a read-only field that can be left blank.',
      }),
    traffickerEmails: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Campaign trafficker contact emails.' }),
  })
  .openapi({ description: 'Contains properties of a Campaign Manager campaign.', required: [] })
  .openapi('Campaign')

const CampaignCreativeAssociationSchema = z
  .object({
    creativeId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'ID of the creative associated with the campaign. This is a required field.',
      }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "dfareporting#campaignCreativeAssociation".',
      }),
  })
  .openapi({
    description: 'Identifies a creative which has been associated with a given campaign.',
    required: [],
  })
  .openapi('CampaignCreativeAssociation')

const CampaignCreativeAssociationsListResponseSchema = z
  .object({
    campaignCreativeAssociations: z
      .array(CampaignCreativeAssociationSchema)
      .exactOptional()
      .openapi({ description: 'Campaign creative association collection' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "dfareporting#campaignCreativeAssociationsListResponse".',
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'Pagination token to be used for the next list operation.' }),
  })
  .openapi({ description: 'Campaign Creative Association List Response', required: [] })
  .openapi('CampaignCreativeAssociationsListResponse')

const CampaignManagerIdsSchema = z
  .object({
    adId: z.string().exactOptional().openapi({ description: 'Ad ID for Campaign Manager.' }),
    campaignId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Campaign ID for Campaign Manager.' }),
    creativeId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Creative ID for Campaign Manager.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "dfareporting#campaignManagerIds".',
      }),
    placementId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Placement ID for Campaign Manager.' }),
    siteId: z.string().exactOptional().openapi({ description: 'Site ID for Campaign Manager.' }),
  })
  .openapi({ description: 'Campaign Manager IDs related to the custom event.', required: [] })
  .openapi('CampaignManagerIds')

const CampaignsListResponseSchema = z
  .object({
    campaigns: z
      .array(CampaignSchema)
      .exactOptional()
      .openapi({ description: 'Campaign collection.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "dfareporting#campaignsListResponse".',
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'Pagination token to be used for the next list operation.' }),
  })
  .openapi({ description: 'Campaign List Response', required: [] })
  .openapi('CampaignsListResponse')

const ChangeLogSchema = z
  .object({
    accountId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Account ID of the modified object.' }),
    action: z.string().exactOptional().openapi({ description: 'Action which caused the change.' }),
    changeTime: z.iso.datetime({ offset: true }).exactOptional(),
    fieldName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Field name of the object which changed.' }),
    id: z.string().exactOptional().openapi({ description: 'ID of this change log.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "dfareporting#changeLog".',
      }),
    newValue: z.string().exactOptional().openapi({ description: 'New value of the object field.' }),
    objectId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'ID of the object of this change log. The object could be a campaign, placement, ad, or other type.',
      }),
    objectType: z
      .string()
      .exactOptional()
      .openapi({ description: 'Object type of the change log.' }),
    oldValue: z.string().exactOptional().openapi({ description: 'Old value of the object field.' }),
    subaccountId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Subaccount ID of the modified object.' }),
    transactionId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Transaction ID of this change log. When a single API call results in many changes, each change will have a separate ID in the change log but will share the same transactionId.',
      }),
    userProfileId: z
      .string()
      .exactOptional()
      .openapi({ description: 'ID of the user who modified the object.' }),
    userProfileName: z
      .string()
      .exactOptional()
      .openapi({ description: 'User profile name of the user who modified the object.' }),
  })
  .openapi({ description: 'Describes a change that a user has made to a resource.', required: [] })
  .openapi('ChangeLog')

const ChangeLogsListResponseSchema = z
  .object({
    changeLogs: z
      .array(ChangeLogSchema)
      .exactOptional()
      .openapi({ description: 'Change log collection.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "dfareporting#changeLogsListResponse".',
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'Pagination token to be used for the next list operation.' }),
  })
  .openapi({ description: 'Change Log List Response', required: [] })
  .openapi('ChangeLogsListResponse')

const PathReportDimensionValueSchema = z
  .object({
    dimensionName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the dimension.' }),
    ids: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: "The possible ID's associated with the value if available." }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The kind of resource this is, in this case dfareporting#pathReportDimensionValue.',
      }),
    matchType: z
      .enum(['EXACT', 'BEGINS_WITH', 'CONTAINS', 'WILDCARD_EXPRESSION'])
      .exactOptional()
      .openapi({
        description:
          "Determines how the 'value' field is matched when filtering. If not specified, defaults to EXACT. If set to WILDCARD_EXPRESSION, '*' is allowed as a placeholder for variable length character sequences, and it can be escaped with a backslash. Note, only paid search dimensions ('dfa:paidSearch*') allow a matchType other than EXACT.",
      }),
    values: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'The possible values of the dimension.' }),
  })
  .openapi({ description: 'Represents a PathReportDimensionValue resource.', required: [] })
  .openapi('PathReportDimensionValue')

const EventFilterSchema = z
  .object({
    dimensionFilter: PathReportDimensionValueSchema.exactOptional().openapi({
      description: 'The dimension filter contained within this EventFilter.',
    }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The kind of resource this is, in this case dfareporting#eventFilter.',
      }),
  })
  .openapi({ description: 'Represents a DfaReporting event filter.', required: [] })
  .openapi('EventFilter')

const DisjunctiveMatchStatementSchema = z
  .object({
    eventFilters: z
      .array(EventFilterSchema)
      .exactOptional()
      .openapi({
        description: 'The event filters contained within this disjunctive match statement.',
      }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The kind of resource this is, in this case dfareporting#disjunctiveMatchStatement.',
      }),
  })
  .openapi({
    description:
      'Represents a Disjunctive Match Statement resource, which is a conjunction (and) of disjunctive (or) boolean statements.',
    required: [],
  })
  .openapi('DisjunctiveMatchStatement')

const ChannelGroupingRuleSchema = z
  .object({
    disjunctiveMatchStatements: z
      .array(DisjunctiveMatchStatementSchema)
      .exactOptional()
      .openapi({ description: 'The disjunctive match statements contained within this rule.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The kind of resource this is, in this case dfareporting#channelGroupingRule.',
      }),
    name: z.string().exactOptional().openapi({ description: 'Rule name.' }),
  })
  .openapi({ description: 'Represents a DfaReporting channel grouping rule.', required: [] })
  .openapi('ChannelGroupingRule')

const ChannelGroupingSchema = z
  .object({
    fallbackName: z
      .string()
      .exactOptional()
      .openapi({ description: 'ChannelGrouping fallback name.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The kind of resource this is, in this case dfareporting#channelGrouping.',
      }),
    name: z.string().exactOptional().openapi({ description: 'ChannelGrouping name.' }),
    rules: z
      .array(ChannelGroupingRuleSchema)
      .exactOptional()
      .openapi({ description: 'The rules contained within this channel grouping.' }),
  })
  .openapi({ description: 'Represents a DfaReporting channel grouping.', required: [] })
  .openapi('ChannelGrouping')

const CitiesListResponseSchema = z
  .object({
    cities: z.array(CitySchema).exactOptional().openapi({ description: 'City collection.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "dfareporting#citiesListResponse".',
      }),
  })
  .openapi({ description: 'City List Response', required: [] })
  .openapi('CitiesListResponse')

const CreativeClickThroughUrlSchema = z
  .object({
    computedClickThroughUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Read-only convenience field representing the actual URL that will be used for this click-through. The URL is computed as follows: - If landingPageId is specified then that landing page's URL is assigned to this field. - Otherwise, the customClickThroughUrl is assigned to this field. ",
      }),
    customClickThroughUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Custom click-through URL. Applicable if the landingPageId field is left unset.',
      }),
    landingPageId: z
      .string()
      .exactOptional()
      .openapi({ description: 'ID of the landing page for the click-through URL.' }),
  })
  .openapi({ description: 'Click-through URL', required: [] })
  .openapi('CreativeClickThroughUrl')

const ClickTagSchema = z
  .object({
    clickThroughUrl: CreativeClickThroughUrlSchema.exactOptional().openapi({
      description:
        'Parameter value for the specified click tag. This field contains a click-through url.',
    }),
    eventName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Advertiser event name associated with the click tag. This field is used by DISPLAY_IMAGE_GALLERY and HTML5_BANNER creatives. Applicable to DISPLAY when the primary asset type is not HTML_IMAGE.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Parameter name for the specified click tag. For DISPLAY_IMAGE_GALLERY creative assets, this field must match the value of the creative asset's creativeAssetId.name field.",
      }),
  })
  .openapi({ description: 'Creative Click Tag.', required: [] })
  .openapi('ClickTag')

const CompanionSettingSchema = z
  .object({
    companionsDisabled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether companions are disabled for this placement.' }),
    enabledSizes: z
      .array(SizeSchema)
      .exactOptional()
      .openapi({
        description:
          'Allowlist of companion sizes to be served to this placement. Set this list to null or empty to serve all companion sizes.',
      }),
    imageOnly: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether to serve only static images as companions.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "dfareporting#companionSetting".',
      }),
  })
  .openapi({ description: 'Companion Settings', required: [] })
  .openapi('CompanionSetting')

const CompatibleFieldsSchema: z.ZodType<CompatibleFieldsType> = z
  .lazy(() =>
    z
      .object({
        crossDimensionReachReportCompatibleFields:
          CrossDimensionReachReportCompatibleFieldsSchema.exactOptional().openapi({
            description:
              'Contains items that are compatible to be selected for a report of type "CROSS_DIMENSION_REACH".',
          }),
        floodlightReportCompatibleFields:
          FloodlightReportCompatibleFieldsSchema.exactOptional().openapi({
            description:
              'Contains items that are compatible to be selected for a report of type "FLOODLIGHT".',
          }),
        kind: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'The kind of resource this is, in this case dfareporting#compatibleFields.',
          }),
        pathAttributionReportCompatibleFields:
          PathReportCompatibleFieldsSchema.exactOptional().openapi({
            description:
              'Contains items that are compatible to be selected for a report of type "PATH_ATTRIBUTION".',
          }),
        pathReportCompatibleFields: PathReportCompatibleFieldsSchema.exactOptional().openapi({
          description:
            'Contains items that are compatible to be selected for a report of type "PATH".',
        }),
        pathToConversionReportCompatibleFields:
          PathToConversionReportCompatibleFieldsSchema.exactOptional().openapi({
            description:
              'Contains items that are compatible to be selected for a report of type "PATH_TO_CONVERSION".',
          }),
        reachReportCompatibleFields: ReachReportCompatibleFieldsSchema.exactOptional().openapi({
          description:
            'Contains items that are compatible to be selected for a report of type "REACH".',
        }),
        reportCompatibleFields: ReportCompatibleFieldsSchema.exactOptional().openapi({
          description:
            'Contains items that are compatible to be selected for a report of type "STANDARD".',
        }),
      })
      .openapi({
        description: 'Represents a response to the queryCompatibleFields method.',
        required: [],
      }),
  )
  .openapi('CompatibleFields')

const ConnectionTypesListResponseSchema = z
  .object({
    connectionTypes: z
      .array(ConnectionTypeSchema)
      .exactOptional()
      .openapi({ description: 'Collection of connection types such as broadband and mobile.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "dfareporting#connectionTypesListResponse".',
      }),
  })
  .openapi({ description: 'Connection Type List Response', required: [] })
  .openapi('ConnectionTypesListResponse')

const ContentCategorySchema = z
  .object({
    accountId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Account ID of this content category. This is a read-only field that can be left blank.',
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'ID of this content category. This is a read-only, auto-generated field.',
      }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "dfareporting#contentCategory".',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Name of this content category. This is a required field and must be less than 256 characters long and unique among content categories of the same account.',
      }),
  })
  .openapi({
    description: 'Organizes placements according to the contents of their associated webpages.',
    required: [],
  })
  .openapi('ContentCategory')

const ContentCategoriesListResponseSchema = z
  .object({
    contentCategories: z
      .array(ContentCategorySchema)
      .exactOptional()
      .openapi({ description: 'Content category collection.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "dfareporting#contentCategoriesListResponse".',
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'Pagination token to be used for the next list operation.' }),
  })
  .openapi({ description: 'Content Category List Response', required: [] })
  .openapi('ContentCategoriesListResponse')

const CustomFloodlightVariableSchema = z
  .object({
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "dfareporting#customFloodlightVariable".',
      }),
    type: z
      .enum([
        'U1',
        'U2',
        'U3',
        'U4',
        'U5',
        'U6',
        'U7',
        'U8',
        'U9',
        'U10',
        'U11',
        'U12',
        'U13',
        'U14',
        'U15',
        'U16',
        'U17',
        'U18',
        'U19',
        'U20',
        'U21',
        'U22',
        'U23',
        'U24',
        'U25',
        'U26',
        'U27',
        'U28',
        'U29',
        'U30',
        'U31',
        'U32',
        'U33',
        'U34',
        'U35',
        'U36',
        'U37',
        'U38',
        'U39',
        'U40',
        'U41',
        'U42',
        'U43',
        'U44',
        'U45',
        'U46',
        'U47',
        'U48',
        'U49',
        'U50',
        'U51',
        'U52',
        'U53',
        'U54',
        'U55',
        'U56',
        'U57',
        'U58',
        'U59',
        'U60',
        'U61',
        'U62',
        'U63',
        'U64',
        'U65',
        'U66',
        'U67',
        'U68',
        'U69',
        'U70',
        'U71',
        'U72',
        'U73',
        'U74',
        'U75',
        'U76',
        'U77',
        'U78',
        'U79',
        'U80',
        'U81',
        'U82',
        'U83',
        'U84',
        'U85',
        'U86',
        'U87',
        'U88',
        'U89',
        'U90',
        'U91',
        'U92',
        'U93',
        'U94',
        'U95',
        'U96',
        'U97',
        'U98',
        'U99',
        'U100',
      ])
      .exactOptional()
      .openapi({
        description:
          'The type of custom floodlight variable to supply a value for. These map to the "u[1-20]=" in the tags.',
      }),
    value: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The value of the custom floodlight variable. The length of string must not exceed 100 characters.',
      }),
  })
  .openapi({
    description:
      'A custom floodlight variable. This field may only be used when calling batchinsert; it is not supported by batchupdate.',
    required: [],
  })
  .openapi('CustomFloodlightVariable')

const ConversionSchema = z
  .object({
    childDirectedTreatment: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether this particular request may come from a user under the age of 13, under COPPA compliance.',
      }),
    customVariables: z
      .array(CustomFloodlightVariableSchema)
      .exactOptional()
      .openapi({
        description:
          'Custom floodlight variables. This field may only be used when calling batchinsert; it is not supported by batchupdate.',
      }),
    dclid: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The display click ID. This field is mutually exclusive with encryptedUserId, encryptedUserIdCandidates[], matchId, mobileDeviceId and gclid. This or encryptedUserId or encryptedUserIdCandidates[] or matchId or mobileDeviceId or gclid is a required field.',
      }),
    encryptedUserId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The alphanumeric encrypted user ID. When set, encryptionInfo should also be specified. This field is mutually exclusive with encryptedUserIdCandidates[], matchId, mobileDeviceId, gclid and dclid. This or encryptedUserIdCandidates[] or matchId or mobileDeviceId or gclid or dclid is a required field.',
      }),
    encryptedUserIdCandidates: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'A list of the alphanumeric encrypted user IDs. Any user ID with exposure prior to the conversion timestamp will be used in the inserted conversion. If no such user ID is found then the conversion will be rejected with INVALID_ARGUMENT error. When set, encryptionInfo should also be specified. This field may only be used when calling batchinsert; it is not supported by batchupdate. This field is mutually exclusive with encryptedUserId, matchId, mobileDeviceId, gclid and dclid. This or encryptedUserId or matchId or mobileDeviceId or gclid or dclid is a required field.',
      }),
    floodlightActivityId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Floodlight Activity ID of this conversion. This is a required field.',
      }),
    floodlightConfigurationId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Floodlight Configuration ID of this conversion. This is a required field.',
      }),
    gclid: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The Google click ID. This field is mutually exclusive with encryptedUserId, encryptedUserIdCandidates[], matchId, mobileDeviceId and dclid. This or encryptedUserId or encryptedUserIdCandidates[] or matchId or mobileDeviceId or dclid is a required field.',
      }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "dfareporting#conversion".',
      }),
    limitAdTracking: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether Limit Ad Tracking is enabled. When set to true, the conversion will be used for reporting but not targeting. This will prevent remarketing.',
      }),
    matchId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The match ID field. A match ID is your own first-party identifier that has been synced with Google using the match ID feature in Floodlight. This field is mutually exclusive with encryptedUserId, encryptedUserIdCandidates[],mobileDeviceId, gclid and dclid. This or encryptedUserId or encryptedUserIdCandidates[] or mobileDeviceId or gclid or dclid is a required field.',
      }),
    mobileDeviceId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The mobile device ID. This field is mutually exclusive with encryptedUserId, encryptedUserIdCandidates[], matchId, gclid and dclid. This or encryptedUserId or encryptedUserIdCandidates[] or matchId or gclid or dclid is a required field.',
      }),
    nonPersonalizedAd: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the conversion was for a non personalized ad.' }),
    ordinal: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The ordinal of the conversion. Use this field to control how conversions of the same user and day are de-duplicated. This is a required field.',
      }),
    quantity: z
      .string()
      .exactOptional()
      .openapi({ description: 'The quantity of the conversion.' }),
    timestampMicros: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The timestamp of conversion, in Unix epoch micros. This is a required field.',
      }),
    treatmentForUnderage: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Whether this particular request may come from a user under the age of 16 (may differ by country), under compliance with the European Union's General Data Protection Regulation (GDPR).",
      }),
    value: z.float64().exactOptional().openapi({ description: 'The value of the conversion.' }),
  })
  .openapi({
    description:
      'A Conversion represents when a user successfully performs a desired action after seeing an ad.',
    required: [],
  })
  .openapi('Conversion')

const ConversionErrorSchema = z
  .object({
    code: z
      .enum(['INVALID_ARGUMENT', 'INTERNAL', 'PERMISSION_DENIED', 'NOT_FOUND'])
      .exactOptional()
      .openapi({ description: 'The error code.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "dfareporting#conversionError".',
      }),
    message: z.string().exactOptional().openapi({ description: 'A description of the error.' }),
  })
  .openapi({
    description: 'The error code and description for a conversion that failed to insert or update.',
    required: [],
  })
  .openapi('ConversionError')

const ConversionStatusSchema = z
  .object({
    conversion: ConversionSchema.exactOptional().openapi({
      description: 'The original conversion that was inserted or updated.',
    }),
    errors: z
      .array(ConversionErrorSchema)
      .exactOptional()
      .openapi({ description: 'A list of errors related to this conversion.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "dfareporting#conversionStatus".',
      }),
  })
  .openapi({
    description:
      'The original conversion that was inserted or updated and whether there were any errors.',
    required: [],
  })
  .openapi('ConversionStatus')

const EncryptionInfoSchema = z
  .object({
    encryptionEntityId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The encryption entity ID. This should match the encryption configuration for ad serving or Data Transfer.',
      }),
    encryptionEntityType: z
      .enum([
        'ENCRYPTION_ENTITY_TYPE_UNKNOWN',
        'DCM_ACCOUNT',
        'DCM_ADVERTISER',
        'DBM_PARTNER',
        'DBM_ADVERTISER',
        'ADWORDS_CUSTOMER',
        'DFP_NETWORK_CODE',
      ])
      .exactOptional()
      .openapi({
        description:
          'The encryption entity type. This should match the encryption configuration for ad serving or Data Transfer.',
      }),
    encryptionSource: z
      .enum(['ENCRYPTION_SCOPE_UNKNOWN', 'AD_SERVING', 'DATA_TRANSFER'])
      .exactOptional()
      .openapi({
        description:
          'Describes whether the encrypted cookie was received from ad serving (the %m macro) or from Data Transfer.',
      }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "dfareporting#encryptionInfo".',
      }),
  })
  .openapi({ description: 'A description of how user IDs are encrypted.', required: [] })
  .openapi('EncryptionInfo')

const ConversionsBatchInsertRequestSchema = z
  .object({
    conversions: z
      .array(ConversionSchema)
      .exactOptional()
      .openapi({ description: 'The set of conversions to insert.' }),
    encryptionInfo: EncryptionInfoSchema.exactOptional().openapi({
      description:
        'Describes how encryptedUserId or encryptedUserIdCandidates[] is encrypted. This is a required field if encryptedUserId or encryptedUserIdCandidates[] is used.',
    }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "dfareporting#conversionsBatchInsertRequest".',
      }),
  })
  .openapi({ description: 'Insert Conversions Request.', required: [] })
  .openapi('ConversionsBatchInsertRequest')

const ConversionsBatchInsertResponseSchema = z
  .object({
    hasFailures: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates that some or all conversions failed to insert.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "dfareporting#conversionsBatchInsertResponse".',
      }),
    status: z
      .array(ConversionStatusSchema)
      .exactOptional()
      .openapi({
        description:
          'The insert status of each conversion. Statuses are returned in the same order that conversions are inserted.',
      }),
  })
  .openapi({ description: 'Insert Conversions Response.', required: [] })
  .openapi('ConversionsBatchInsertResponse')

const ConversionsBatchUpdateRequestSchema = z
  .object({
    conversions: z
      .array(ConversionSchema)
      .exactOptional()
      .openapi({ description: 'The set of conversions to update.' }),
    encryptionInfo: EncryptionInfoSchema.exactOptional().openapi({
      description:
        'Describes how encryptedUserId is encrypted. This is a required field if encryptedUserId is used.',
    }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "dfareporting#conversionsBatchUpdateRequest".',
      }),
  })
  .openapi({ description: 'Update Conversions Request.', required: [] })
  .openapi('ConversionsBatchUpdateRequest')

const ConversionsBatchUpdateResponseSchema = z
  .object({
    hasFailures: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates that some or all conversions failed to update.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "dfareporting#conversionsBatchUpdateResponse".',
      }),
    status: z
      .array(ConversionStatusSchema)
      .exactOptional()
      .openapi({
        description:
          'The update status of each conversion. Statuses are returned in the same order that conversions are updated.',
      }),
  })
  .openapi({ description: 'Update Conversions Response.', required: [] })
  .openapi('ConversionsBatchUpdateResponse')

const CountriesListResponseSchema = z
  .object({
    countries: z
      .array(CountrySchema)
      .exactOptional()
      .openapi({ description: 'Country collection.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "dfareporting#countriesListResponse".',
      }),
  })
  .openapi({ description: 'Country List Response', required: [] })
  .openapi('CountriesListResponse')

const TargetWindowSchema = z
  .object({
    customHtml: z.string().exactOptional().openapi({ description: 'User-entered value.' }),
    targetWindowOption: z
      .enum(['NEW_WINDOW', 'CURRENT_WINDOW', 'CUSTOM'])
      .exactOptional()
      .openapi({
        description:
          'Type of browser window for which the backup image of the flash creative can be displayed.',
      }),
  })
  .openapi({ description: 'Target Window.', required: [] })
  .openapi('TargetWindow')

const OffsetPositionSchema = z
  .object({
    left: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Offset distance from left side of an asset or a window.' }),
    top: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Offset distance from top side of an asset or a window.' }),
  })
  .openapi({ description: 'Offset Position.', required: [] })
  .openapi('OffsetPosition')

const PopupWindowPropertiesSchema = z
  .object({
    dimension: SizeSchema.exactOptional().openapi({
      description:
        'Popup dimension for a creative. This is a read-only field. Applicable to the following creative types: all RICH_MEDIA and all VPAID',
    }),
    offset: OffsetPositionSchema.exactOptional().openapi({
      description:
        'Upper-left corner coordinates of the popup window. Applicable if positionType is COORDINATES.',
    }),
    positionType: z
      .enum(['CENTER', 'COORDINATES'])
      .exactOptional()
      .openapi({ description: 'Popup window position either centered or at specific coordinate.' }),
    showAddressBar: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether to display the browser address bar.' }),
    showMenuBar: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether to display the browser menu bar.' }),
    showScrollBar: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether to display the browser scroll bar.' }),
    showStatusBar: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether to display the browser status bar.' }),
    showToolBar: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether to display the browser tool bar.' }),
    title: z.string().exactOptional().openapi({ description: 'Title of popup window.' }),
  })
  .openapi({ description: 'Popup Window Properties.', required: [] })
  .openapi('PopupWindowProperties')

const CreativeCustomEventSchema = z
  .object({
    advertiserCustomEventId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Unique ID of this event used by Reporting and Data Transfer. This is a read-only field.',
      }),
    advertiserCustomEventName: z
      .string()
      .exactOptional()
      .openapi({ description: 'User-entered name for the event.' }),
    advertiserCustomEventType: z
      .enum(['ADVERTISER_EVENT_TIMER', 'ADVERTISER_EVENT_EXIT', 'ADVERTISER_EVENT_COUNTER'])
      .exactOptional()
      .openapi({ description: 'Type of the event. This is a read-only field.' }),
    artworkLabel: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Artwork label column, used to link events in Campaign Manager back to events in Studio. This is a required field and should not be modified after insertion.',
      }),
    artworkType: z
      .enum([
        'ARTWORK_TYPE_FLASH',
        'ARTWORK_TYPE_HTML5',
        'ARTWORK_TYPE_MIXED',
        'ARTWORK_TYPE_IMAGE',
      ])
      .exactOptional()
      .openapi({ description: 'Artwork type used by the creative.This is a read-only field.' }),
    exitClickThroughUrl: CreativeClickThroughUrlSchema.exactOptional().openapi({
      description: 'Exit click-through URL for the event. This field is used only for exit events.',
    }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'ID of this event. This is a required field and should not be modified after insertion.',
      }),
    popupWindowProperties: PopupWindowPropertiesSchema.exactOptional().openapi({
      description:
        'Properties for rich media popup windows. This field is used only for exit events.',
    }),
    targetType: z
      .enum(['TARGET_BLANK', 'TARGET_TOP', 'TARGET_SELF', 'TARGET_PARENT', 'TARGET_POPUP'])
      .exactOptional()
      .openapi({ description: 'Target type used by the event.' }),
    videoReportingId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Video reporting ID, used to differentiate multiple videos in a single creative. This is a read-only field.',
      }),
  })
  .openapi({ description: 'Creative Custom Event.', required: [] })
  .openapi('CreativeCustomEvent')

const RuleSchema = z
  .object({
    assetId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A creativeAssets[].id. This should refer to one of the parent assets in this creative. This is a required field.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'A user-friendly name for this rule. This is a required field.' }),
    targetingTemplateId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A targeting template ID. The targeting from the targeting template will be used to determine whether this asset should be served. This is a required field.',
      }),
  })
  .openapi({
    description:
      'A rule associates an asset with a targeting template for asset-level targeting. Applicable to INSTREAM_VIDEO creatives.',
    required: [],
  })
  .openapi('Rule')

const CreativeAssetSelectionSchema = z
  .object({
    defaultAssetId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A creativeAssets[].id. This should refer to one of the parent assets in this creative, and will be served if none of the rules match. This is a required field.',
      }),
    rules: z
      .array(RuleSchema)
      .exactOptional()
      .openapi({
        description:
          'Rules determine which asset will be served to a viewer. Rules will be evaluated in the order in which they are stored in this list. This list must contain at least one rule. Applicable to INSTREAM_VIDEO creatives.',
      }),
  })
  .openapi({
    description:
      'Encapsulates the list of rules for asset selection and a default asset in case none of the rules match. Applicable to INSTREAM_VIDEO creatives.',
    required: [],
  })
  .openapi('CreativeAssetSelection')

const CreativeAssetIdSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Name of the creative asset. This is a required field while inserting an asset. After insertion, this assetIdentifier is used to identify the uploaded asset. Characters in the name must be alphanumeric or one of the following: ".-_ ". Spaces are allowed.',
      }),
    type: z
      .enum(['IMAGE', 'FLASH', 'VIDEO', 'HTML', 'HTML_IMAGE', 'AUDIO'])
      .exactOptional()
      .openapi({
        description:
          'Type of asset to upload. This is a required field. FLASH and IMAGE are no longer supported for new uploads. All image assets should use HTML_IMAGE.',
      }),
  })
  .openapi({ description: 'Creative Asset ID.', required: [] })
  .openapi('CreativeAssetId')

const CreativeAssetSchema = z
  .object({
    actionScript3: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether ActionScript3 is enabled for the flash asset. This is a read-only field. Applicable to the following creative type: FLASH_INPAGE. Applicable to DISPLAY when the primary asset type is not HTML_IMAGE.',
      }),
    active: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether the video or audio asset is active. This is a read-only field for VPAID_NON_LINEAR_VIDEO assets. Applicable to the following creative types: INSTREAM_AUDIO, INSTREAM_VIDEO and all VPAID.',
      }),
    additionalSizes: z
      .array(SizeSchema)
      .exactOptional()
      .openapi({
        description:
          'Additional sizes associated with this creative asset. HTML5 asset generated by compatible software such as GWD will be able to support more sizes this creative asset can render.',
      }),
    alignment: z
      .enum(['ALIGNMENT_TOP', 'ALIGNMENT_RIGHT', 'ALIGNMENT_BOTTOM', 'ALIGNMENT_LEFT'])
      .exactOptional()
      .openapi({
        description:
          'Possible alignments for an asset. This is a read-only field. Applicable to the following creative types: RICH_MEDIA_DISPLAY_MULTI_FLOATING_INTERSTITIAL .',
      }),
    artworkType: z
      .enum([
        'ARTWORK_TYPE_FLASH',
        'ARTWORK_TYPE_HTML5',
        'ARTWORK_TYPE_MIXED',
        'ARTWORK_TYPE_IMAGE',
      ])
      .exactOptional()
      .openapi({
        description:
          'Artwork type of rich media creative. This is a read-only field. Applicable to the following creative types: all RICH_MEDIA.',
      }),
    assetIdentifier: CreativeAssetIdSchema.exactOptional().openapi({
      description:
        'Identifier of this asset. This is the same identifier returned during creative asset insert operation. This is a required field. Applicable to all but the following creative types: all REDIRECT and TRACKING_TEXT.',
    }),
    audioBitRate: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Audio stream bit rate in kbps. This is a read-only field. Applicable to the following creative types: INSTREAM_AUDIO, INSTREAM_VIDEO and all VPAID.',
      }),
    audioSampleRate: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Audio sample bit rate in hertz. This is a read-only field. Applicable to the following creative types: INSTREAM_AUDIO, INSTREAM_VIDEO and all VPAID.',
      }),
    backupImageExit: CreativeCustomEventSchema.exactOptional().openapi({
      description:
        'Exit event configured for the backup image. Applicable to the following creative types: all RICH_MEDIA.',
    }),
    bitRate: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Detected bit-rate for audio or video asset. This is a read-only field. Applicable to the following creative types: INSTREAM_AUDIO, INSTREAM_VIDEO and all VPAID.',
      }),
    childAssetType: z
      .enum([
        'CHILD_ASSET_TYPE_FLASH',
        'CHILD_ASSET_TYPE_VIDEO',
        'CHILD_ASSET_TYPE_IMAGE',
        'CHILD_ASSET_TYPE_DATA',
      ])
      .exactOptional()
      .openapi({
        description:
          'Rich media child asset type. This is a read-only field. Applicable to the following creative types: all VPAID.',
      }),
    collapsedSize: SizeSchema.exactOptional().openapi({
      description:
        'Size of an asset when collapsed. This is a read-only field. Applicable to the following creative types: all RICH_MEDIA and all VPAID. Additionally, applicable to assets whose displayType is ASSET_DISPLAY_TYPE_EXPANDING or ASSET_DISPLAY_TYPE_PEEL_DOWN.',
    }),
    companionCreativeIds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'List of companion creatives assigned to an in-stream video creative asset. Acceptable values include IDs of existing flash and image creatives. Applicable to INSTREAM_VIDEO creative type with dynamicAssetSelection set to true.',
      }),
    customStartTimeValue: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Custom start time in seconds for making the asset visible. Applicable to the following creative types: all RICH_MEDIA. Value must be greater than or equal to 0.',
      }),
    detectedFeatures: z
      .array(
        z.enum([
          'CSS_FONT_FACE',
          'CSS_BACKGROUND_SIZE',
          'CSS_BORDER_IMAGE',
          'CSS_BORDER_RADIUS',
          'CSS_BOX_SHADOW',
          'CSS_FLEX_BOX',
          'CSS_HSLA',
          'CSS_MULTIPLE_BGS',
          'CSS_OPACITY',
          'CSS_RGBA',
          'CSS_TEXT_SHADOW',
          'CSS_ANIMATIONS',
          'CSS_COLUMNS',
          'CSS_GENERATED_CONTENT',
          'CSS_GRADIENTS',
          'CSS_REFLECTIONS',
          'CSS_TRANSFORMS',
          'CSS_TRANSFORMS3D',
          'CSS_TRANSITIONS',
          'APPLICATION_CACHE',
          'CANVAS',
          'CANVAS_TEXT',
          'DRAG_AND_DROP',
          'HASH_CHANGE',
          'HISTORY',
          'AUDIO',
          'VIDEO',
          'INDEXED_DB',
          'INPUT_ATTR_AUTOCOMPLETE',
          'INPUT_ATTR_AUTOFOCUS',
          'INPUT_ATTR_LIST',
          'INPUT_ATTR_PLACEHOLDER',
          'INPUT_ATTR_MAX',
          'INPUT_ATTR_MIN',
          'INPUT_ATTR_MULTIPLE',
          'INPUT_ATTR_PATTERN',
          'INPUT_ATTR_REQUIRED',
          'INPUT_ATTR_STEP',
          'INPUT_TYPE_SEARCH',
          'INPUT_TYPE_TEL',
          'INPUT_TYPE_URL',
          'INPUT_TYPE_EMAIL',
          'INPUT_TYPE_DATETIME',
          'INPUT_TYPE_DATE',
          'INPUT_TYPE_MONTH',
          'INPUT_TYPE_WEEK',
          'INPUT_TYPE_TIME',
          'INPUT_TYPE_DATETIME_LOCAL',
          'INPUT_TYPE_NUMBER',
          'INPUT_TYPE_RANGE',
          'INPUT_TYPE_COLOR',
          'LOCAL_STORAGE',
          'POST_MESSAGE',
          'SESSION_STORAGE',
          'WEB_SOCKETS',
          'WEB_SQL_DATABASE',
          'WEB_WORKERS',
          'GEO_LOCATION',
          'INLINE_SVG',
          'SMIL',
          'SVG_HREF',
          'SVG_CLIP_PATHS',
          'TOUCH',
          'WEBGL',
          'SVG_FILTERS',
          'SVG_FE_IMAGE',
        ]),
      )
      .exactOptional()
      .openapi({
        description:
          'List of feature dependencies for the creative asset that are detected by Campaign Manager. Feature dependencies are features that a browser must be able to support in order to render your HTML5 creative correctly. This is a read-only, auto-generated field. Applicable to the following creative types: HTML5_BANNER. Applicable to DISPLAY when the primary asset type is not HTML_IMAGE.',
      }),
    displayType: z
      .enum([
        'ASSET_DISPLAY_TYPE_INPAGE',
        'ASSET_DISPLAY_TYPE_FLOATING',
        'ASSET_DISPLAY_TYPE_OVERLAY',
        'ASSET_DISPLAY_TYPE_EXPANDING',
        'ASSET_DISPLAY_TYPE_FLASH_IN_FLASH',
        'ASSET_DISPLAY_TYPE_FLASH_IN_FLASH_EXPANDING',
        'ASSET_DISPLAY_TYPE_PEEL_DOWN',
        'ASSET_DISPLAY_TYPE_VPAID_LINEAR',
        'ASSET_DISPLAY_TYPE_VPAID_NON_LINEAR',
        'ASSET_DISPLAY_TYPE_BACKDROP',
      ])
      .exactOptional()
      .openapi({
        description:
          'Type of rich media asset. This is a read-only field. Applicable to the following creative types: all RICH_MEDIA.',
      }),
    duration: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Duration in seconds for which an asset will be displayed. Applicable to the following creative types: INSTREAM_AUDIO, INSTREAM_VIDEO and VPAID_LINEAR_VIDEO. Value must be greater than or equal to 1.',
      }),
    durationType: z
      .enum(['ASSET_DURATION_TYPE_AUTO', 'ASSET_DURATION_TYPE_NONE', 'ASSET_DURATION_TYPE_CUSTOM'])
      .exactOptional()
      .openapi({
        description:
          'Duration type for which an asset will be displayed. Applicable to the following creative types: all RICH_MEDIA.',
      }),
    expandedDimension: SizeSchema.exactOptional().openapi({
      description:
        'Detected expanded dimension for video asset. This is a read-only field. Applicable to the following creative types: INSTREAM_VIDEO and all VPAID.',
    }),
    fileSize: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'File size associated with this creative asset. This is a read-only field. Applicable to all but the following creative types: all REDIRECT and TRACKING_TEXT.',
      }),
    flashVersion: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Flash version of the asset. This is a read-only field. Applicable to the following creative types: FLASH_INPAGE, all RICH_MEDIA, and all VPAID. Applicable to DISPLAY when the primary asset type is not HTML_IMAGE.',
      }),
    frameRate: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'Video frame rate for video asset in frames per second. This is a read-only field. Applicable to the following creative types: INSTREAM_VIDEO and all VPAID.',
      }),
    hideFlashObjects: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether to hide Flash objects flag for an asset. Applicable to the following creative types: all RICH_MEDIA.',
      }),
    hideSelectionBoxes: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether to hide selection boxes flag for an asset. Applicable to the following creative types: all RICH_MEDIA.',
      }),
    horizontallyLocked: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether the asset is horizontally locked. This is a read-only field. Applicable to the following creative types: all RICH_MEDIA.',
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Numeric ID of this creative asset. This is a required field and should not be modified. Applicable to all but the following creative types: all REDIRECT and TRACKING_TEXT.',
      }),
    idDimensionValue: DimensionValueSchema.exactOptional().openapi({
      description:
        'Dimension value for the ID of the asset. This is a read-only, auto-generated field.',
    }),
    mediaDuration: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'Detected duration for audio or video asset. This is a read-only field. Applicable to the following creative types: INSTREAM_AUDIO, INSTREAM_VIDEO and all VPAID.',
      }),
    mimeType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Detected MIME type for audio or video asset. This is a read-only field. Applicable to the following creative types: INSTREAM_AUDIO, INSTREAM_VIDEO and all VPAID.',
      }),
    offset: OffsetPositionSchema.exactOptional().openapi({
      description:
        'Offset position for an asset in collapsed mode. This is a read-only field. Applicable to the following creative types: all RICH_MEDIA and all VPAID. Additionally, only applicable to assets whose displayType is ASSET_DISPLAY_TYPE_EXPANDING or ASSET_DISPLAY_TYPE_PEEL_DOWN.',
    }),
    orientation: z
      .enum(['LANDSCAPE', 'PORTRAIT', 'SQUARE'])
      .exactOptional()
      .openapi({
        description: 'Orientation of video asset. This is a read-only, auto-generated field.',
      }),
    originalBackup: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether the backup asset is original or changed by the user in Campaign Manager. Applicable to the following creative types: all RICH_MEDIA.',
      }),
    politeLoad: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this asset is used as a polite load asset.' }),
    position: OffsetPositionSchema.exactOptional().openapi({
      description:
        'Offset position for an asset. Applicable to the following creative types: all RICH_MEDIA.',
    }),
    positionLeftUnit: z
      .enum(['OFFSET_UNIT_PIXEL', 'OFFSET_UNIT_PERCENT', 'OFFSET_UNIT_PIXEL_FROM_CENTER'])
      .exactOptional()
      .openapi({
        description:
          'Offset left unit for an asset. This is a read-only field. Applicable to the following creative types: all RICH_MEDIA.',
      }),
    positionTopUnit: z
      .enum(['OFFSET_UNIT_PIXEL', 'OFFSET_UNIT_PERCENT', 'OFFSET_UNIT_PIXEL_FROM_CENTER'])
      .exactOptional()
      .openapi({
        description:
          'Offset top unit for an asset. This is a read-only field if the asset displayType is ASSET_DISPLAY_TYPE_OVERLAY. Applicable to the following creative types: all RICH_MEDIA.',
      }),
    progressiveServingUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Progressive URL for video asset. This is a read-only field. Applicable to the following creative types: INSTREAM_VIDEO and all VPAID.',
      }),
    pushdown: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether the asset pushes down other content. Applicable to the following creative types: all RICH_MEDIA. Additionally, only applicable when the asset offsets are 0, the collapsedSize.width matches size.width, and the collapsedSize.height is less than size.height.',
      }),
    pushdownDuration: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'Pushdown duration in seconds for an asset. Applicable to the following creative types: all RICH_MEDIA.Additionally, only applicable when the asset pushdown field is true, the offsets are 0, the collapsedSize.width matches size.width, and the collapsedSize.height is less than size.height. Acceptable values are 0 to 9.99, inclusive.',
      }),
    role: z
      .enum([
        'PRIMARY',
        'BACKUP_IMAGE',
        'ADDITIONAL_IMAGE',
        'ADDITIONAL_FLASH',
        'PARENT_VIDEO',
        'TRANSCODED_VIDEO',
        'OTHER',
        'ALTERNATE_VIDEO',
        'PARENT_AUDIO',
        'TRANSCODED_AUDIO',
      ])
      .exactOptional()
      .openapi({
        description:
          'Role of the asset in relation to creative. Applicable to all but the following creative types: all REDIRECT and TRACKING_TEXT. This is a required field. PRIMARY applies to DISPLAY, FLASH_INPAGE, HTML5_BANNER, IMAGE, DISPLAY_IMAGE_GALLERY, all RICH_MEDIA (which may contain multiple primary assets), and all VPAID creatives. BACKUP_IMAGE applies to FLASH_INPAGE, HTML5_BANNER, all RICH_MEDIA, and all VPAID creatives. Applicable to DISPLAY when the primary asset type is not HTML_IMAGE. ADDITIONAL_IMAGE and ADDITIONAL_FLASH apply to FLASH_INPAGE creatives. OTHER refers to assets from sources other than Campaign Manager, such as Studio uploaded assets, applicable to all RICH_MEDIA and all VPAID creatives. PARENT_VIDEO refers to videos uploaded by the user in Campaign Manager and is applicable to INSTREAM_VIDEO and VPAID_LINEAR_VIDEO creatives. TRANSCODED_VIDEO refers to videos transcoded by Campaign Manager from PARENT_VIDEO assets and is applicable to INSTREAM_VIDEO and VPAID_LINEAR_VIDEO creatives. ALTERNATE_VIDEO refers to the Campaign Manager representation of child asset videos from Studio, and is applicable to VPAID_LINEAR_VIDEO creatives. These cannot be added or removed within Campaign Manager. For VPAID_LINEAR_VIDEO creatives, PARENT_VIDEO, TRANSCODED_VIDEO and ALTERNATE_VIDEO assets that are marked active serve as backup in case the VPAID creative cannot be served. Only PARENT_VIDEO assets can be added or removed for an INSTREAM_VIDEO or VPAID_LINEAR_VIDEO creative. PARENT_AUDIO refers to audios uploaded by the user in Campaign Manager and is applicable to INSTREAM_AUDIO creatives. TRANSCODED_AUDIO refers to audios transcoded by Campaign Manager from PARENT_AUDIO assets and is applicable to INSTREAM_AUDIO creatives. ',
      }),
    size: SizeSchema.exactOptional().openapi({
      description:
        'Size associated with this creative asset. This is a required field when applicable; however for IMAGE and FLASH_INPAGE, creatives if left blank, this field will be automatically set using the actual size of the associated image asset. Applicable to the following creative types: DISPLAY_IMAGE_GALLERY, FLASH_INPAGE, HTML5_BANNER, IMAGE, and all RICH_MEDIA. Applicable to DISPLAY when the primary asset type is not HTML_IMAGE.',
    }),
    sslCompliant: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether the asset is SSL-compliant. This is a read-only field. Applicable to all but the following creative types: all REDIRECT and TRACKING_TEXT.',
      }),
    startTimeType: z
      .enum(['ASSET_START_TIME_TYPE_NONE', 'ASSET_START_TIME_TYPE_CUSTOM'])
      .exactOptional()
      .openapi({
        description:
          'Initial wait time type before making the asset visible. Applicable to the following creative types: all RICH_MEDIA.',
      }),
    streamingServingUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Streaming URL for video asset. This is a read-only field. Applicable to the following creative types: INSTREAM_VIDEO and all VPAID.',
      }),
    transparency: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether the asset is transparent. Applicable to the following creative types: all RICH_MEDIA. Additionally, only applicable to HTML5 assets.',
      }),
    verticallyLocked: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether the asset is vertically locked. This is a read-only field. Applicable to the following creative types: all RICH_MEDIA.',
      }),
    windowMode: z
      .enum(['OPAQUE', 'WINDOW', 'TRANSPARENT'])
      .exactOptional()
      .openapi({
        description:
          'Window mode options for flash assets. Applicable to the following creative types: FLASH_INPAGE, RICH_MEDIA_DISPLAY_EXPANDING, RICH_MEDIA_IM_EXPAND, RICH_MEDIA_DISPLAY_BANNER, and RICH_MEDIA_INPAGE_FLOATING.',
      }),
    zIndex: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'zIndex value of an asset. Applicable to the following creative types: all RICH_MEDIA.Additionally, only applicable to assets whose displayType is NOT one of the following types: ASSET_DISPLAY_TYPE_INPAGE or ASSET_DISPLAY_TYPE_OVERLAY. Acceptable values are -999999999 to 999999999, inclusive.',
      }),
    zipFilename: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'File name of zip file. This is a read-only field. Applicable to the following creative types: HTML5_BANNER.',
      }),
    zipFilesize: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Size of zip file. This is a read-only field. Applicable to the following creative types: HTML5_BANNER.',
      }),
  })
  .openapi({ description: 'Creative Asset.', required: [] })
  .openapi('CreativeAsset')

const CreativeFieldAssignmentSchema = z
  .object({
    creativeFieldId: z
      .string()
      .exactOptional()
      .openapi({ description: 'ID of the creative field.' }),
    creativeFieldValueId: z
      .string()
      .exactOptional()
      .openapi({ description: 'ID of the creative field value.' }),
  })
  .openapi({ description: 'Creative Field Assignment.', required: [] })
  .openapi('CreativeFieldAssignment')

const FsCommandSchema = z
  .object({
    left: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Distance from the left of the browser.Applicable when positionOption is DISTANCE_FROM_TOP_LEFT_CORNER.',
      }),
    positionOption: z
      .enum(['CENTERED', 'DISTANCE_FROM_TOP_LEFT_CORNER'])
      .exactOptional()
      .openapi({ description: 'Position in the browser where the window will open.' }),
    top: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Distance from the top of the browser. Applicable when positionOption is DISTANCE_FROM_TOP_LEFT_CORNER.',
      }),
    windowHeight: z.int32().exactOptional().openapi({ description: 'Height of the window.' }),
    windowWidth: z.int32().exactOptional().openapi({ description: 'Width of the window.' }),
  })
  .openapi({ description: 'FsCommand.', required: [] })
  .openapi('FsCommand')

const ObaIconSchema = z
  .object({
    iconClickThroughUrl: z
      .string()
      .exactOptional()
      .openapi({ description: 'URL to redirect to when an OBA icon is clicked.' }),
    iconClickTrackingUrl: z
      .string()
      .exactOptional()
      .openapi({ description: 'URL to track click when an OBA icon is clicked.' }),
    iconViewTrackingUrl: z
      .string()
      .exactOptional()
      .openapi({ description: 'URL to track view when an OBA icon is clicked.' }),
    program: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies the industry initiative that the icon supports. For example, AdChoices.',
      }),
    resourceUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'OBA icon resource URL. Campaign Manager only supports image and JavaScript icons. Learn more',
      }),
    size: SizeSchema.exactOptional().openapi({ description: 'OBA icon size.' }),
    xPosition: z
      .string()
      .exactOptional()
      .openapi({
        description: 'OBA icon x coordinate position. Accepted values are left or right.',
      }),
    yPosition: z
      .string()
      .exactOptional()
      .openapi({
        description: 'OBA icon y coordinate position. Accepted values are top or bottom.',
      }),
  })
  .openapi({ description: 'Online Behavioral Advertiser icon.', required: [] })
  .openapi('ObaIcon')

const VideoOffsetSchema = z
  .object({
    offsetPercentage: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Duration, as a percentage of video duration. Do not set when offsetSeconds is set. Acceptable values are 0 to 100, inclusive.',
      }),
    offsetSeconds: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Duration, in seconds. Do not set when offsetPercentage is set. Acceptable values are 0 to 86399, inclusive.',
      }),
  })
  .openapi({ description: 'Video Offset', required: [] })
  .openapi('VideoOffset')

const ThirdPartyTrackingUrlSchema = z
  .object({
    thirdPartyUrlType: z
      .enum([
        'IMPRESSION',
        'CLICK_TRACKING',
        'VIDEO_START',
        'VIDEO_FIRST_QUARTILE',
        'VIDEO_MIDPOINT',
        'VIDEO_THIRD_QUARTILE',
        'VIDEO_COMPLETE',
        'VIDEO_MUTE',
        'VIDEO_PAUSE',
        'VIDEO_REWIND',
        'VIDEO_FULLSCREEN',
        'VIDEO_STOP',
        'VIDEO_CUSTOM',
        'SURVEY',
        'RICH_MEDIA_IMPRESSION',
        'RICH_MEDIA_RM_IMPRESSION',
        'RICH_MEDIA_BACKUP_IMPRESSION',
        'VIDEO_SKIP',
        'VIDEO_PROGRESS',
      ])
      .exactOptional()
      .openapi({
        description: 'Third-party URL type for in-stream video and in-stream audio creatives.',
      }),
    url: z
      .string()
      .exactOptional()
      .openapi({ description: 'URL for the specified third-party URL type.' }),
  })
  .openapi({ description: 'Third-party Tracking URL.', required: [] })
  .openapi('ThirdPartyTrackingUrl')

const UniversalAdIdSchema = z
  .object({
    registry: z
      .enum(['OTHER', 'AD_ID_OFFICIAL', 'CLEARCAST', 'DCM'])
      .exactOptional()
      .openapi({ description: 'Registry used for the Ad ID value.' }),
    value: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'ID value for this creative. Only alphanumeric characters and the following symbols are valid: "_/\\-". Maximum length is 64 characters. Read only when registry is DCM.',
      }),
  })
  .openapi({
    description:
      'A Universal Ad ID as per the VAST 4.0 spec. Applicable to the following creative types: INSTREAM_AUDIO, INSTREAM_VIDEO and VPAID.',
    required: [],
  })
  .openapi('UniversalAdId')

const CreativeSchema = z
  .object({
    accountId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Account ID of this creative. This field, if left unset, will be auto-generated for both insert and update operations. Applicable to all creative types.',
      }),
    active: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Whether the creative is active. Applicable to all creative types.',
      }),
    adParameters: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Ad parameters user for VPAID creative. This is a read-only field. Applicable to the following creative types: all VPAID.',
      }),
    adTagKeys: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Keywords for a Rich Media creative. Keywords let you customize the creative settings of a Rich Media ad running on your site without having to contact the advertiser. You can use keywords to dynamically change the look or functionality of a creative. Applicable to the following creative types: all RICH_MEDIA, and all VPAID.',
      }),
    additionalSizes: z
      .array(SizeSchema)
      .exactOptional()
      .openapi({
        description:
          'Additional sizes associated with a responsive creative. When inserting or updating a creative either the size ID field or size width and height fields can be used. Applicable to DISPLAY creatives when the primary asset type is HTML_IMAGE.',
      }),
    advertiserId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Advertiser ID of this creative. This is a required field. Applicable to all creative types.',
      }),
    allowScriptAccess: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether script access is allowed for this creative. This is a read-only and deprecated field which will automatically be set to true on update. Applicable to the following creative types: FLASH_INPAGE.',
      }),
    archived: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Whether the creative is archived. Applicable to all creative types.',
      }),
    artworkType: z
      .enum([
        'ARTWORK_TYPE_FLASH',
        'ARTWORK_TYPE_HTML5',
        'ARTWORK_TYPE_MIXED',
        'ARTWORK_TYPE_IMAGE',
      ])
      .exactOptional()
      .openapi({
        description:
          'Type of artwork used for the creative. This is a read-only field. Applicable to the following creative types: all RICH_MEDIA, and all VPAID.',
      }),
    authoringSource: z
      .enum([
        'CREATIVE_AUTHORING_SOURCE_DCM',
        'CREATIVE_AUTHORING_SOURCE_DBM',
        'CREATIVE_AUTHORING_SOURCE_STUDIO',
        'CREATIVE_AUTHORING_SOURCE_GWD',
        'CREATIVE_AUTHORING_SOURCE_ACS',
      ])
      .exactOptional()
      .openapi({
        description:
          'Source application where creative was authored. Presently, only DBM authored creatives will have this field set. Applicable to all creative types.',
      }),
    authoringTool: z
      .enum(['NINJA', 'SWIFFY'])
      .exactOptional()
      .openapi({
        description:
          'Authoring tool for HTML5 banner creatives. This is a read-only field. Applicable to the following creative types: HTML5_BANNER.',
      }),
    autoAdvanceImages: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether images are automatically advanced for image gallery creatives. Applicable to the following creative types: DISPLAY_IMAGE_GALLERY.',
      }),
    backgroundColor: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The 6-character HTML color code, beginning with #, for the background of the window area where the Flash file is displayed. Default is white. Applicable to the following creative types: FLASH_INPAGE.',
      }),
    backupImageClickThroughUrl: CreativeClickThroughUrlSchema.exactOptional().openapi({
      description:
        'Click-through URL for backup image. Applicable to ENHANCED_BANNER when the primary asset type is not HTML_IMAGE.',
    }),
    backupImageFeatures: z
      .array(
        z.enum([
          'CSS_FONT_FACE',
          'CSS_BACKGROUND_SIZE',
          'CSS_BORDER_IMAGE',
          'CSS_BORDER_RADIUS',
          'CSS_BOX_SHADOW',
          'CSS_FLEX_BOX',
          'CSS_HSLA',
          'CSS_MULTIPLE_BGS',
          'CSS_OPACITY',
          'CSS_RGBA',
          'CSS_TEXT_SHADOW',
          'CSS_ANIMATIONS',
          'CSS_COLUMNS',
          'CSS_GENERATED_CONTENT',
          'CSS_GRADIENTS',
          'CSS_REFLECTIONS',
          'CSS_TRANSFORMS',
          'CSS_TRANSFORMS3D',
          'CSS_TRANSITIONS',
          'APPLICATION_CACHE',
          'CANVAS',
          'CANVAS_TEXT',
          'DRAG_AND_DROP',
          'HASH_CHANGE',
          'HISTORY',
          'AUDIO',
          'VIDEO',
          'INDEXED_DB',
          'INPUT_ATTR_AUTOCOMPLETE',
          'INPUT_ATTR_AUTOFOCUS',
          'INPUT_ATTR_LIST',
          'INPUT_ATTR_PLACEHOLDER',
          'INPUT_ATTR_MAX',
          'INPUT_ATTR_MIN',
          'INPUT_ATTR_MULTIPLE',
          'INPUT_ATTR_PATTERN',
          'INPUT_ATTR_REQUIRED',
          'INPUT_ATTR_STEP',
          'INPUT_TYPE_SEARCH',
          'INPUT_TYPE_TEL',
          'INPUT_TYPE_URL',
          'INPUT_TYPE_EMAIL',
          'INPUT_TYPE_DATETIME',
          'INPUT_TYPE_DATE',
          'INPUT_TYPE_MONTH',
          'INPUT_TYPE_WEEK',
          'INPUT_TYPE_TIME',
          'INPUT_TYPE_DATETIME_LOCAL',
          'INPUT_TYPE_NUMBER',
          'INPUT_TYPE_RANGE',
          'INPUT_TYPE_COLOR',
          'LOCAL_STORAGE',
          'POST_MESSAGE',
          'SESSION_STORAGE',
          'WEB_SOCKETS',
          'WEB_SQL_DATABASE',
          'WEB_WORKERS',
          'GEO_LOCATION',
          'INLINE_SVG',
          'SMIL',
          'SVG_HREF',
          'SVG_CLIP_PATHS',
          'TOUCH',
          'WEBGL',
          'SVG_FILTERS',
          'SVG_FE_IMAGE',
        ]),
      )
      .exactOptional()
      .openapi({
        description:
          "List of feature dependencies that will cause a backup image to be served if the browser that serves the ad does not support them. Feature dependencies are features that a browser must be able to support in order to render your HTML5 creative asset correctly. This field is initially auto-generated to contain all features detected by Campaign Manager for all the assets of this creative and can then be modified by the client. To reset this field, copy over all the creativeAssets' detected features. Applicable to the following creative types: HTML5_BANNER. Applicable to DISPLAY when the primary asset type is not HTML_IMAGE.",
      }),
    backupImageReportingLabel: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Reporting label used for HTML5 banner backup image. Applicable to the following creative types: DISPLAY when the primary asset type is not HTML_IMAGE.',
      }),
    backupImageTargetWindow: TargetWindowSchema.exactOptional().openapi({
      description:
        'Target window for backup image. Applicable to the following creative types: FLASH_INPAGE and HTML5_BANNER. Applicable to DISPLAY when the primary asset type is not HTML_IMAGE.',
    }),
    clickTags: z
      .array(ClickTagSchema)
      .exactOptional()
      .openapi({
        description:
          'Click tags of the creative. For DISPLAY, FLASH_INPAGE, and HTML5_BANNER creatives, this is a subset of detected click tags for the assets associated with this creative. After creating a flash asset, detected click tags will be returned in the creativeAssetMetadata. When inserting the creative, populate the creative clickTags field using the creativeAssetMetadata.clickTags field. For DISPLAY_IMAGE_GALLERY creatives, there should be exactly one entry in this list for each image creative asset. A click tag is matched with a corresponding creative asset by matching the clickTag.name field with the creativeAsset.assetIdentifier.name field. Applicable to the following creative types: DISPLAY_IMAGE_GALLERY, FLASH_INPAGE, HTML5_BANNER. Applicable to DISPLAY when the primary asset type is not HTML_IMAGE.',
      }),
    commercialId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Industry standard ID assigned to creative for reach and frequency. Applicable to INSTREAM_VIDEO_REDIRECT creatives.',
      }),
    companionCreatives: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'List of companion creatives assigned to an in-Stream video creative. Acceptable values include IDs of existing flash and image creatives. Applicable to the following creative types: all VPAID, all INSTREAM_AUDIO and all INSTREAM_VIDEO with dynamicAssetSelection set to false.',
      }),
    compatibility: z
      .array(
        z.enum([
          'DISPLAY',
          'DISPLAY_INTERSTITIAL',
          'APP',
          'APP_INTERSTITIAL',
          'IN_STREAM_VIDEO',
          'IN_STREAM_AUDIO',
        ]),
      )
      .exactOptional()
      .openapi({
        description:
          'Compatibilities associated with this creative. This is a read-only field. DISPLAY and DISPLAY_INTERSTITIAL refer to rendering either on desktop or on mobile devices or in mobile apps for regular or interstitial ads, respectively. APP and APP_INTERSTITIAL are for rendering in mobile apps. Only pre-existing creatives may have these compatibilities since new creatives will either be assigned DISPLAY or DISPLAY_INTERSTITIAL instead. IN_STREAM_VIDEO refers to rendering in in-stream video ads developed with the VAST standard. IN_STREAM_AUDIO refers to rendering in in-stream audio ads developed with the VAST standard. Applicable to all creative types. Acceptable values are: - "APP" - "APP_INTERSTITIAL" - "IN_STREAM_VIDEO" - "IN_STREAM_AUDIO" - "DISPLAY" - "DISPLAY_INTERSTITIAL" ',
      }),
    convertFlashToHtml5: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Whether Flash assets associated with the creative need to be automatically converted to HTML5. This flag is enabled by default and users can choose to disable it if they don't want the system to generate and use HTML5 asset for this creative. Applicable to the following creative type: FLASH_INPAGE. Applicable to DISPLAY when the primary asset type is not HTML_IMAGE.",
      }),
    counterCustomEvents: z
      .array(CreativeCustomEventSchema)
      .exactOptional()
      .openapi({
        description:
          'List of counter events configured for the creative. For DISPLAY_IMAGE_GALLERY creatives, these are read-only and auto-generated from clickTags. Applicable to the following creative types: DISPLAY_IMAGE_GALLERY, all RICH_MEDIA, and all VPAID.',
      }),
    creativeAssetSelection: CreativeAssetSelectionSchema.exactOptional().openapi({
      description: 'Required if dynamicAssetSelection is true.',
    }),
    creativeAssets: z
      .array(CreativeAssetSchema)
      .exactOptional()
      .openapi({
        description:
          'Assets associated with a creative. Applicable to all but the following creative types: INTERNAL_REDIRECT, INTERSTITIAL_INTERNAL_REDIRECT, and REDIRECT',
      }),
    creativeFieldAssignments: z
      .array(CreativeFieldAssignmentSchema)
      .exactOptional()
      .openapi({
        description:
          'Creative field assignments for this creative. Applicable to all creative types.',
      }),
    customKeyValues: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Custom key-values for a Rich Media creative. Key-values let you customize the creative settings of a Rich Media ad running on your site without having to contact the advertiser. You can use key-values to dynamically change the look or functionality of a creative. Applicable to the following creative types: all RICH_MEDIA, and all VPAID.',
      }),
    dynamicAssetSelection: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Set this to true to enable the use of rules to target individual assets in this creative. When set to true creativeAssetSelection must be set. This also controls asset-level companions. When this is true, companion creatives should be assigned to creative assets. Learn more. Applicable to INSTREAM_VIDEO creatives.',
      }),
    exitCustomEvents: z
      .array(CreativeCustomEventSchema)
      .exactOptional()
      .openapi({
        description:
          'List of exit events configured for the creative. For DISPLAY and DISPLAY_IMAGE_GALLERY creatives, these are read-only and auto-generated from clickTags, For DISPLAY, an event is also created from the backupImageReportingLabel. Applicable to the following creative types: DISPLAY_IMAGE_GALLERY, all RICH_MEDIA, and all VPAID. Applicable to DISPLAY when the primary asset type is not HTML_IMAGE.',
      }),
    fsCommand: FsCommandSchema.exactOptional().openapi({
      description:
        'OpenWindow FSCommand of this creative. This lets the SWF file communicate with either Flash Player or the program hosting Flash Player, such as a web browser. This is only triggered if allowScriptAccess field is true. Applicable to the following creative types: FLASH_INPAGE.',
    }),
    htmlCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'HTML code for the creative. This is a required field when applicable. This field is ignored if htmlCodeLocked is true. Applicable to the following creative types: all CUSTOM, FLASH_INPAGE, and HTML5_BANNER, and all RICH_MEDIA.',
      }),
    htmlCodeLocked: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether HTML code is generated by Campaign Manager or manually entered. Set to true to ignore changes to htmlCode. Applicable to the following creative types: FLASH_INPAGE and HTML5_BANNER.',
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'ID of this creative. This is a read-only, auto-generated field. Applicable to all creative types.',
      }),
    idDimensionValue: DimensionValueSchema.exactOptional().openapi({
      description:
        'Dimension value for the ID of this creative. This is a read-only field. Applicable to all creative types.',
    }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "dfareporting#creative".',
      }),
    lastModifiedInfo: LastModifiedInfoSchema.exactOptional().openapi({
      description:
        'Creative last modification information. This is a read-only field. Applicable to all creative types.',
    }),
    latestTraffickedCreativeId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Latest Studio trafficked creative ID associated with rich media and VPAID creatives. This is a read-only field. Applicable to the following creative types: all RICH_MEDIA, and all VPAID.',
      }),
    mediaDescription: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Description of the audio or video ad. Applicable to the following creative types: all INSTREAM_VIDEO, INSTREAM_AUDIO, and all VPAID.',
      }),
    mediaDuration: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'Creative audio or video duration in seconds. This is a read-only field. Applicable to the following creative types: INSTREAM_VIDEO, INSTREAM_AUDIO, all RICH_MEDIA, and all VPAID.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Name of the creative. This is a required field and must be less than 256 characters long. Applicable to all creative types.',
      }),
    obaIcon: ObaIconSchema.exactOptional().openapi({
      description:
        'Online behavioral advertising icon to be added to the creative. Applicable to the following creative types: all INSTREAM_VIDEO.',
    }),
    overrideCss: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Override CSS value for rich media creatives. Applicable to the following creative types: all RICH_MEDIA.',
      }),
    progressOffset: VideoOffsetSchema.exactOptional().openapi({
      description:
        'Amount of time to play the video before counting a view. Applicable to the following creative types: all INSTREAM_VIDEO.',
    }),
    redirectUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'URL of hosted image or hosted video or another ad tag. For INSTREAM_VIDEO_REDIRECT creatives this is the in-stream video redirect URL. The standard for a VAST (Video Ad Serving Template) ad response allows for a redirect link to another VAST 2.0 or 3.0 call. This is a required field when applicable. Applicable to the following creative types: DISPLAY_REDIRECT, INTERNAL_REDIRECT, INTERSTITIAL_INTERNAL_REDIRECT, and INSTREAM_VIDEO_REDIRECT',
      }),
    renderingId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'ID of current rendering version. This is a read-only field. Applicable to all creative types.',
      }),
    renderingIdDimensionValue: DimensionValueSchema.exactOptional().openapi({
      description:
        'Dimension value for the rendering ID of this creative. This is a read-only field. Applicable to all creative types.',
    }),
    requiredFlashPluginVersion: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The minimum required Flash plugin version for this creative. For example, 11.2.202.235. This is a read-only field. Applicable to the following creative types: all RICH_MEDIA, and all VPAID.',
      }),
    requiredFlashVersion: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The internal Flash version for this creative as calculated by Studio. This is a read-only field. Applicable to the following creative types: FLASH_INPAGE all RICH_MEDIA, and all VPAID. Applicable to DISPLAY when the primary asset type is not HTML_IMAGE.',
      }),
    size: SizeSchema.exactOptional().openapi({
      description:
        'Size associated with this creative. When inserting or updating a creative either the size ID field or size width and height fields can be used. This is a required field when applicable; however for IMAGE, FLASH_INPAGE creatives, and for DISPLAY creatives with a primary asset of type HTML_IMAGE, if left blank, this field will be automatically set using the actual size of the associated image assets. Applicable to the following creative types: DISPLAY, DISPLAY_IMAGE_GALLERY, FLASH_INPAGE, HTML5_BANNER, IMAGE, and all RICH_MEDIA.',
    }),
    skipOffset: VideoOffsetSchema.exactOptional().openapi({
      description:
        'Amount of time to play the video before the skip button appears. Applicable to the following creative types: all INSTREAM_VIDEO.',
    }),
    skippable: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether the user can choose to skip the creative. Applicable to the following creative types: all INSTREAM_VIDEO and all VPAID.',
      }),
    sslCompliant: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether the creative is SSL-compliant. This is a read-only field. Applicable to all creative types.',
      }),
    sslOverride: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Whether creative should be treated as SSL compliant even if the system scan shows it's not. Applicable to all creative types.",
      }),
    studioAdvertiserId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Studio advertiser ID associated with rich media and VPAID creatives. This is a read-only field. Applicable to the following creative types: all RICH_MEDIA, and all VPAID.',
      }),
    studioCreativeId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Studio creative ID associated with rich media and VPAID creatives. This is a read-only field. Applicable to the following creative types: all RICH_MEDIA, and all VPAID.',
      }),
    studioTraffickedCreativeId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Studio trafficked creative ID associated with rich media and VPAID creatives. This is a read-only field. Applicable to the following creative types: all RICH_MEDIA, and all VPAID.',
      }),
    subaccountId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Subaccount ID of this creative. This field, if left unset, will be auto-generated for both insert and update operations. Applicable to all creative types.',
      }),
    thirdPartyBackupImageImpressionsUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Third-party URL used to record backup image impressions. Applicable to the following creative types: all RICH_MEDIA.',
      }),
    thirdPartyRichMediaImpressionsUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Third-party URL used to record rich media impressions. Applicable to the following creative types: all RICH_MEDIA.',
      }),
    thirdPartyUrls: z
      .array(ThirdPartyTrackingUrlSchema)
      .exactOptional()
      .openapi({
        description:
          'Third-party URLs for tracking in-stream creative events. Applicable to the following creative types: all INSTREAM_VIDEO, all INSTREAM_AUDIO, and all VPAID.',
      }),
    timerCustomEvents: z
      .array(CreativeCustomEventSchema)
      .exactOptional()
      .openapi({
        description:
          'List of timer events configured for the creative. For DISPLAY_IMAGE_GALLERY creatives, these are read-only and auto-generated from clickTags. Applicable to the following creative types: DISPLAY_IMAGE_GALLERY, all RICH_MEDIA, and all VPAID. Applicable to DISPLAY when the primary asset is not HTML_IMAGE.',
      }),
    totalFileSize: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Combined size of all creative assets. This is a read-only field. Applicable to the following creative types: all RICH_MEDIA, and all VPAID.',
      }),
    type: z
      .enum([
        'IMAGE',
        'DISPLAY_REDIRECT',
        'CUSTOM_DISPLAY',
        'INTERNAL_REDIRECT',
        'CUSTOM_DISPLAY_INTERSTITIAL',
        'INTERSTITIAL_INTERNAL_REDIRECT',
        'TRACKING_TEXT',
        'RICH_MEDIA_DISPLAY_BANNER',
        'RICH_MEDIA_INPAGE_FLOATING',
        'RICH_MEDIA_IM_EXPAND',
        'RICH_MEDIA_DISPLAY_EXPANDING',
        'RICH_MEDIA_DISPLAY_INTERSTITIAL',
        'RICH_MEDIA_DISPLAY_MULTI_FLOATING_INTERSTITIAL',
        'RICH_MEDIA_MOBILE_IN_APP',
        'FLASH_INPAGE',
        'INSTREAM_VIDEO',
        'VPAID_LINEAR_VIDEO',
        'VPAID_NON_LINEAR_VIDEO',
        'INSTREAM_VIDEO_REDIRECT',
        'RICH_MEDIA_PEEL_DOWN',
        'HTML5_BANNER',
        'DISPLAY',
        'DISPLAY_IMAGE_GALLERY',
        'BRAND_SAFE_DEFAULT_INSTREAM_VIDEO',
        'INSTREAM_AUDIO',
      ])
      .exactOptional()
      .openapi({
        description:
          'Type of this creative. This is a required field. Applicable to all creative types. *Note:* FLASH_INPAGE, HTML5_BANNER, and IMAGE are only used for existing creatives. New creatives should use DISPLAY as a replacement for these types.',
      }),
    universalAdId: UniversalAdIdSchema.exactOptional().openapi({
      description:
        'A Universal Ad ID as per the VAST 4.0 spec. Applicable to the following creative types: INSTREAM_AUDIO and INSTREAM_VIDEO and VPAID.',
    }),
    version: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The version number helps you keep track of multiple versions of your creative in your reports. The version number will always be auto-generated during insert operations to start at 1. For tracking creatives the version cannot be incremented and will always remain at 1. For all other creative types the version can be incremented only by 1 during update operations. In addition, the version will be automatically incremented by 1 when undergoing Rich Media creative merging. Applicable to all creative types.',
      }),
  })
  .openapi({ description: 'Contains properties of a Creative.', required: [] })
  .openapi('Creative')

const CreativeAssetMetadataSchema = z
  .object({
    assetIdentifier: CreativeAssetIdSchema.exactOptional().openapi({
      description: 'ID of the creative asset. This is a required field.',
    }),
    clickTags: z
      .array(ClickTagSchema)
      .exactOptional()
      .openapi({
        description:
          'List of detected click tags for assets. This is a read-only, auto-generated field. This field is empty for a rich media asset.',
      }),
    counterCustomEvents: z
      .array(CreativeCustomEventSchema)
      .exactOptional()
      .openapi({
        description:
          'List of counter events configured for the asset. This is a read-only, auto-generated field and only applicable to a rich media asset.',
      }),
    detectedFeatures: z
      .array(
        z.enum([
          'CSS_FONT_FACE',
          'CSS_BACKGROUND_SIZE',
          'CSS_BORDER_IMAGE',
          'CSS_BORDER_RADIUS',
          'CSS_BOX_SHADOW',
          'CSS_FLEX_BOX',
          'CSS_HSLA',
          'CSS_MULTIPLE_BGS',
          'CSS_OPACITY',
          'CSS_RGBA',
          'CSS_TEXT_SHADOW',
          'CSS_ANIMATIONS',
          'CSS_COLUMNS',
          'CSS_GENERATED_CONTENT',
          'CSS_GRADIENTS',
          'CSS_REFLECTIONS',
          'CSS_TRANSFORMS',
          'CSS_TRANSFORMS3D',
          'CSS_TRANSITIONS',
          'APPLICATION_CACHE',
          'CANVAS',
          'CANVAS_TEXT',
          'DRAG_AND_DROP',
          'HASH_CHANGE',
          'HISTORY',
          'AUDIO',
          'VIDEO',
          'INDEXED_DB',
          'INPUT_ATTR_AUTOCOMPLETE',
          'INPUT_ATTR_AUTOFOCUS',
          'INPUT_ATTR_LIST',
          'INPUT_ATTR_PLACEHOLDER',
          'INPUT_ATTR_MAX',
          'INPUT_ATTR_MIN',
          'INPUT_ATTR_MULTIPLE',
          'INPUT_ATTR_PATTERN',
          'INPUT_ATTR_REQUIRED',
          'INPUT_ATTR_STEP',
          'INPUT_TYPE_SEARCH',
          'INPUT_TYPE_TEL',
          'INPUT_TYPE_URL',
          'INPUT_TYPE_EMAIL',
          'INPUT_TYPE_DATETIME',
          'INPUT_TYPE_DATE',
          'INPUT_TYPE_MONTH',
          'INPUT_TYPE_WEEK',
          'INPUT_TYPE_TIME',
          'INPUT_TYPE_DATETIME_LOCAL',
          'INPUT_TYPE_NUMBER',
          'INPUT_TYPE_RANGE',
          'INPUT_TYPE_COLOR',
          'LOCAL_STORAGE',
          'POST_MESSAGE',
          'SESSION_STORAGE',
          'WEB_SOCKETS',
          'WEB_SQL_DATABASE',
          'WEB_WORKERS',
          'GEO_LOCATION',
          'INLINE_SVG',
          'SMIL',
          'SVG_HREF',
          'SVG_CLIP_PATHS',
          'TOUCH',
          'WEBGL',
          'SVG_FILTERS',
          'SVG_FE_IMAGE',
        ]),
      )
      .exactOptional()
      .openapi({
        description:
          'List of feature dependencies for the creative asset that are detected by Campaign Manager. Feature dependencies are features that a browser must be able to support in order to render your HTML5 creative correctly. This is a read-only, auto-generated field.',
      }),
    exitCustomEvents: z
      .array(CreativeCustomEventSchema)
      .exactOptional()
      .openapi({
        description:
          'List of exit events configured for the asset. This is a read-only, auto-generated field and only applicable to a rich media asset.',
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Numeric ID of the asset. This is a read-only, auto-generated field.',
      }),
    idDimensionValue: DimensionValueSchema.exactOptional().openapi({
      description:
        'Dimension value for the numeric ID of the asset. This is a read-only, auto-generated field.',
    }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "dfareporting#creativeAssetMetadata".',
      }),
    richMedia: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'True if the uploaded asset is a rich media asset. This is a read-only, auto-generated field.',
      }),
    timerCustomEvents: z
      .array(CreativeCustomEventSchema)
      .exactOptional()
      .openapi({
        description:
          'List of timer events configured for the asset. This is a read-only, auto-generated field and only applicable to a rich media asset.',
      }),
    warnedValidationRules: z
      .array(
        z.enum([
          'CLICK_TAG_NON_TOP_LEVEL',
          'CLICK_TAG_MISSING',
          'CLICK_TAG_MORE_THAN_ONE',
          'CLICK_TAG_INVALID',
          'ORPHANED_ASSET',
          'PRIMARY_HTML_MISSING',
          'EXTERNAL_FILE_REFERENCED',
          'MRAID_REFERENCED',
          'ADMOB_REFERENCED',
          'FILE_TYPE_INVALID',
          'ZIP_INVALID',
          'LINKED_FILE_NOT_FOUND',
          'MAX_FLASH_VERSION_11',
          'NOT_SSL_COMPLIANT',
          'FILE_DETAIL_EMPTY',
          'ASSET_INVALID',
          'GWD_PROPERTIES_INVALID',
          'ENABLER_UNSUPPORTED_METHOD_DCM',
          'ASSET_FORMAT_UNSUPPORTED_DCM',
          'COMPONENT_UNSUPPORTED_DCM',
          'HTML5_FEATURE_UNSUPPORTED',
          'CLICK_TAG_IN_GWD',
          'CLICK_TAG_HARD_CODED',
          'SVG_INVALID',
          'CLICK_TAG_IN_RICH_MEDIA',
          'MISSING_ENABLER_REFERENCE',
        ]),
      )
      .exactOptional()
      .openapi({
        description:
          'Rules validated during code generation that generated a warning. This is a read-only, auto-generated field. Possible values are: - "ADMOB_REFERENCED" - "ASSET_FORMAT_UNSUPPORTED_DCM" - "ASSET_INVALID" - "CLICK_TAG_HARD_CODED" - "CLICK_TAG_INVALID" - "CLICK_TAG_IN_GWD" - "CLICK_TAG_MISSING" - "CLICK_TAG_MORE_THAN_ONE" - "CLICK_TAG_NON_TOP_LEVEL" - "COMPONENT_UNSUPPORTED_DCM" - "ENABLER_UNSUPPORTED_METHOD_DCM" - "EXTERNAL_FILE_REFERENCED" - "FILE_DETAIL_EMPTY" - "FILE_TYPE_INVALID" - "GWD_PROPERTIES_INVALID" - "HTML5_FEATURE_UNSUPPORTED" - "LINKED_FILE_NOT_FOUND" - "MAX_FLASH_VERSION_11" - "MRAID_REFERENCED" - "NOT_SSL_COMPLIANT" - "ORPHANED_ASSET" - "PRIMARY_HTML_MISSING" - "SVG_INVALID" - "ZIP_INVALID" ',
      }),
  })
  .openapi({
    description:
      'CreativeAssets contains properties of a creative asset file which will be uploaded or has already been uploaded. Refer to the creative sample code for how to upload assets and insert a creative.',
    required: [],
  })
  .openapi('CreativeAssetMetadata')

const CreativeFieldSchema = z
  .object({
    accountId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Account ID of this creative field. This is a read-only field that can be left blank.',
      }),
    advertiserId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Advertiser ID of this creative field. This is a required field on insertion.',
      }),
    advertiserIdDimensionValue: DimensionValueSchema.exactOptional().openapi({
      description:
        'Dimension value for the ID of the advertiser. This is a read-only, auto-generated field.',
    }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'ID of this creative field. This is a read-only, auto-generated field.',
      }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "dfareporting#creativeField".',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Name of this creative field. This is a required field and must be less than 256 characters long and unique among creative fields of the same advertiser.',
      }),
    subaccountId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Subaccount ID of this creative field. This is a read-only field that can be left blank.',
      }),
  })
  .openapi({ description: 'Contains properties of a creative field.', required: [] })
  .openapi('CreativeField')

const CreativeFieldValueSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'ID of this creative field value. This is a read-only, auto-generated field.',
      }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "dfareporting#creativeFieldValue".',
      }),
    value: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Value of this creative field value. It needs to be less than 256 characters in length and unique per creative field.',
      }),
  })
  .openapi({ description: 'Contains properties of a creative field value.', required: [] })
  .openapi('CreativeFieldValue')

const CreativeFieldValuesListResponseSchema = z
  .object({
    creativeFieldValues: z
      .array(CreativeFieldValueSchema)
      .exactOptional()
      .openapi({ description: 'Creative field value collection.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "dfareporting#creativeFieldValuesListResponse".',
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'Pagination token to be used for the next list operation.' }),
  })
  .openapi({ description: 'Creative Field Value List Response', required: [] })
  .openapi('CreativeFieldValuesListResponse')

const CreativeFieldsListResponseSchema = z
  .object({
    creativeFields: z
      .array(CreativeFieldSchema)
      .exactOptional()
      .openapi({ description: 'Creative field collection.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "dfareporting#creativeFieldsListResponse".',
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'Pagination token to be used for the next list operation.' }),
  })
  .openapi({ description: 'Creative Field List Response', required: [] })
  .openapi('CreativeFieldsListResponse')

const CreativeGroupSchema = z
  .object({
    accountId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Account ID of this creative group. This is a read-only field that can be left blank.',
      }),
    advertiserId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Advertiser ID of this creative group. This is a required field on insertion.',
      }),
    advertiserIdDimensionValue: DimensionValueSchema.exactOptional().openapi({
      description:
        'Dimension value for the ID of the advertiser. This is a read-only, auto-generated field.',
    }),
    groupNumber: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Subgroup of the creative group. Assign your creative groups to a subgroup in order to filter or manage them more easily. This field is required on insertion and is read-only after insertion. Acceptable values are 1 to 2, inclusive.',
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'ID of this creative group. This is a read-only, auto-generated field.',
      }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "dfareporting#creativeGroup".',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Name of this creative group. This is a required field and must be less than 256 characters long and unique among creative groups of the same advertiser.',
      }),
    subaccountId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Subaccount ID of this creative group. This is a read-only field that can be left blank.',
      }),
  })
  .openapi({ description: 'Contains properties of a creative group.', required: [] })
  .openapi('CreativeGroup')

const CreativeGroupsListResponseSchema = z
  .object({
    creativeGroups: z
      .array(CreativeGroupSchema)
      .exactOptional()
      .openapi({ description: 'Creative group collection.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "dfareporting#creativeGroupsListResponse".',
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'Pagination token to be used for the next list operation.' }),
  })
  .openapi({ description: 'Creative Group List Response', required: [] })
  .openapi('CreativeGroupsListResponse')

const CreativesListResponseSchema = z
  .object({
    creatives: z
      .array(CreativeSchema)
      .exactOptional()
      .openapi({ description: 'Creative collection.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "dfareporting#creativesListResponse".',
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'Pagination token to be used for the next list operation.' }),
  })
  .openapi({ description: 'Creative List Response', required: [] })
  .openapi('CreativesListResponse')

const CustomEventClickAnnotationSchema = z
  .object({
    gclid: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The Google click ID. Use this field to annotate the click associated with the gclid.',
      }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "dfareporting#customEventClickAnnotation".',
      }),
  })
  .openapi({ description: 'Annotate a click event.', required: [] })
  .openapi('CustomEventClickAnnotation')

const CustomEventImpressionAnnotationSchema = z
  .object({
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "dfareporting#customEventImpressionAnnotation".',
      }),
    pathImpressionId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The path impression ID. Use this field to annotate the impression associated with the pathImpressionId.',
      }),
  })
  .openapi({ description: 'Annotate an impression.', required: [] })
  .openapi('CustomEventImpressionAnnotation')

const CustomVariableSchema = z
  .object({
    index: z.string().exactOptional().openapi({ description: 'The index of the custom variable.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "dfareporting#customVariable".',
      }),
    value: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The value of the custom variable. The length of string must not exceed 50 characters.',
      }),
  })
  .openapi({ description: 'Custom variable.', required: [] })
  .openapi('CustomVariable')

const DV3IdsSchema = z
  .object({
    dvCampaignId: z.string().exactOptional().openapi({ description: 'Campaign ID for DV360.' }),
    dvCreativeId: z.string().exactOptional().openapi({ description: 'Creative ID for DV360.' }),
    dvInsertionOrderId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Insertion Order ID for DV360.' }),
    dvLineItemId: z.string().exactOptional().openapi({ description: 'Line Item ID for DV360.' }),
    dvSiteId: z.string().exactOptional().openapi({ description: 'Site ID for DV360.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "dfareporting#dV3Ids".',
      }),
  })
  .openapi({ description: 'DV360 IDs related to the custom event.', required: [] })
  .openapi('DV3Ids')

const CustomEventInsertSchema = z
  .object({
    cmDimensions: CampaignManagerIdsSchema.exactOptional().openapi({
      description: 'Campaign Manager dimensions associated with the event.',
    }),
    dv3Dimensions: DV3IdsSchema.exactOptional().openapi({
      description: 'DV360 dimensions associated with the event.',
    }),
    insertEventType: z
      .enum(['UNKNOWN', 'IMPRESSION', 'CLICK'])
      .exactOptional()
      .openapi({ description: 'The type of event to insert.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "dfareporting#customEventInsert".',
      }),
    matchId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The match ID field. A match ID is your own first-party identifier that has been synced with Google using the match ID feature in Floodlight. This field is mutually exclusive with mobileDeviceId, and at least one of the two fields is required.',
      }),
    mobileDeviceId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The mobile device ID. This field is mutually exclusive with matchId, and at least one of the two fields is required.',
      }),
  })
  .openapi({ description: 'Custom event to be inserted.', required: [] })
  .openapi('CustomEventInsert')

const CustomEventSchema = z
  .object({
    annotateClickEvent: CustomEventClickAnnotationSchema.exactOptional().openapi({
      description:
        'Annotate a click event. This field is mutually exclusive with insertEvent and annotateImpressionEvent. This or insertEvent and annotateImpressionEvent is a required field.',
    }),
    annotateImpressionEvent: CustomEventImpressionAnnotationSchema.exactOptional().openapi({
      description:
        'Annotate an impression. This field is mutually exclusive with insertEvent and annotateClickEvent. This or insertEvent and annotateClickEvent is a required field.',
    }),
    customVariables: z
      .array(CustomVariableSchema)
      .exactOptional()
      .openapi({ description: 'Custom variables associated with the event.' }),
    eventType: z
      .enum(['UNKNOWN', 'INSERT', 'ANNOTATE'])
      .exactOptional()
      .openapi({
        description:
          'The type of event. If INSERT, the fields in insertEvent need to be populated. If ANNOTATE, the fields in either annotateClickEvent or annotateImpressionEvent need to be populated.',
      }),
    floodlightConfigurationId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Floodlight configuration ID of the advertiser the event is linked to. This is a required field.',
      }),
    insertEvent: CustomEventInsertSchema.exactOptional().openapi({
      description:
        'Insert custom event. This field is mutually exclusive with annotateClickEvent and annotateImpressionEvent. This or annotateClickEvent and annotateImpressionEvent is a required field.',
    }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "dfareporting#customEvent".',
      }),
    ordinal: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ordinal of this custom event. This is a required field.' }),
    timestampMicros: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The timestamp of this custom event, in Unix epoch micros. This is a required field.',
      }),
  })
  .openapi({
    description:
      'Experimental feature (no support provided) A custom event represents a third party impression, a third party click, an annotation on a first party impression, or an annotation on a first party click.',
    required: [],
  })
  .openapi('CustomEvent')

const CustomEventErrorSchema = z
  .object({
    code: z
      .enum(['UNKNOWN', 'INVALID_ARGUMENT', 'INTERNAL', 'PERMISSION_DENIED', 'NOT_FOUND'])
      .exactOptional()
      .openapi({ description: 'The error code.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "dfareporting#customEventError".',
      }),
    message: z.string().exactOptional().openapi({ description: 'A description of the error.' }),
  })
  .openapi({
    description: 'The error code and description for a custom event that failed to insert.',
    required: [],
  })
  .openapi('CustomEventError')

const CustomEventStatusSchema = z
  .object({
    customEvent: CustomEventSchema.exactOptional().openapi({
      description: 'The original custom event that was inserted.',
    }),
    errors: z
      .array(CustomEventErrorSchema)
      .exactOptional()
      .openapi({ description: 'A list of errors related to this custom event.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "dfareporting#customEventStatus".',
      }),
  })
  .openapi({
    description: 'The original custom event that was inserted and whether there were any errors.',
    required: [],
  })
  .openapi('CustomEventStatus')

const CustomEventsBatchInsertRequestSchema = z
  .object({
    customEvents: z
      .array(CustomEventSchema)
      .exactOptional()
      .openapi({ description: 'The set of custom events to insert.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "dfareporting#customEventsBatchInsertRequest".',
      }),
  })
  .openapi({ description: 'Insert Custom Events Request.', required: [] })
  .openapi('CustomEventsBatchInsertRequest')

const CustomEventsBatchInsertResponseSchema = z
  .object({
    hasFailures: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates that some or all custom events failed to insert.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "dfareporting#customEventsBatchInsertResponse".',
      }),
    status: z
      .array(CustomEventStatusSchema)
      .exactOptional()
      .openapi({
        description:
          'The insert status of each custom event. Statuses are returned in the same order that conversions are inserted.',
      }),
  })
  .openapi({ description: 'Insert Custom Events Response.', required: [] })
  .openapi('CustomEventsBatchInsertResponse')

const CustomRichMediaEventsSchema = z
  .object({
    filteredEventIds: z
      .array(DimensionValueSchema)
      .exactOptional()
      .openapi({
        description:
          'List of custom rich media event IDs. Dimension values must be all of type dfa:richMediaEventTypeIdAndName.',
      }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The kind of resource this is, in this case dfareporting#customRichMediaEvents.',
      }),
  })
  .openapi({ description: 'Represents a Custom Rich Media Events group.', required: [] })
  .openapi('CustomRichMediaEvents')

const CustomViewabilityMetricConfigurationSchema = z
  .object({
    audible: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the video must be audible to count an impression.' }),
    timeMillis: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The time in milliseconds the video must play for the Custom Viewability Metric to count an impression. If both this and timePercent are specified, the earlier of the two will be used.',
      }),
    timePercent: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The percentage of video that must play for the Custom Viewability Metric to count an impression. If both this and timeMillis are specified, the earlier of the two will be used.',
      }),
    viewabilityPercent: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The percentage of video that must be on screen for the Custom Viewability Metric to count an impression.',
      }),
  })
  .openapi({
    description:
      'The attributes, like playtime and percent onscreen, that define the Custom Viewability Metric.',
    required: [],
  })
  .openapi('CustomViewabilityMetricConfiguration')

const CustomViewabilityMetricSchema = z
  .object({
    configuration: CustomViewabilityMetricConfigurationSchema.exactOptional().openapi({
      description: 'Configuration of the custom viewability metric.',
    }),
    id: z.string().exactOptional().openapi({ description: 'ID of the custom viewability metric.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of the custom viewability metric.' }),
  })
  .openapi({ description: 'Custom Viewability Metric', required: [] })
  .openapi('CustomViewabilityMetric')

const DateRangeSchema = z
  .object({
    endDate: z.iso.date().exactOptional(),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The kind of resource this is, in this case dfareporting#dateRange.',
      }),
    relativeDateRange: z
      .enum([
        'TODAY',
        'YESTERDAY',
        'WEEK_TO_DATE',
        'MONTH_TO_DATE',
        'QUARTER_TO_DATE',
        'YEAR_TO_DATE',
        'PREVIOUS_WEEK',
        'PREVIOUS_MONTH',
        'PREVIOUS_QUARTER',
        'PREVIOUS_YEAR',
        'LAST_7_DAYS',
        'LAST_30_DAYS',
        'LAST_90_DAYS',
        'LAST_365_DAYS',
        'LAST_24_MONTHS',
        'LAST_14_DAYS',
        'LAST_60_DAYS',
      ])
      .exactOptional()
      .openapi({ description: 'The date range relative to the date of when the report is run.' }),
    startDate: z.iso.date().exactOptional(),
  })
  .openapi({ description: 'Represents a date range.', required: [] })
  .openapi('DateRange')

const DfpSettingsSchema = z
  .object({
    dfpNetworkCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'Ad Manager network code for this directory site.' }),
    dfpNetworkName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Ad Manager network name for this directory site.' }),
    programmaticPlacementAccepted: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this directory site accepts programmatic placements.' }),
    pubPaidPlacementAccepted: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this directory site accepts publisher-paid tags.' }),
    publisherPortalOnly: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Whether this directory site is available only via Publisher Portal.',
      }),
  })
  .openapi({ description: 'Google Ad Manager Settings', required: [] })
  .openapi('DfpSettings')

const DimensionFilterSchema = z
  .object({
    dimensionName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the dimension to filter.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The kind of resource this is, in this case dfareporting#dimensionFilter.',
      }),
    value: z
      .string()
      .exactOptional()
      .openapi({ description: 'The value of the dimension to filter.' }),
  })
  .openapi({ description: 'Represents a dimension filter.', required: [] })
  .openapi('DimensionFilter')

const DimensionValueListSchema = z
  .object({
    etag: z
      .string()
      .exactOptional()
      .openapi({ description: 'The eTag of this response for caching purposes.' }),
    items: z
      .array(DimensionValueSchema)
      .exactOptional()
      .openapi({ description: 'The dimension values returned in this response.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The kind of list this is, in this case dfareporting#dimensionValueList.',
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Continuation token used to page through dimension values. To retrieve the next page of results, set the next request\'s "pageToken" to the value of this field. The page token is only valid for a limited amount of time and should not be persisted.',
      }),
  })
  .openapi({ description: 'Represents the list of DimensionValue resources.', required: [] })
  .openapi('DimensionValueList')

const DimensionValueRequestSchema = z
  .object({
    dimensionName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the dimension for which values should be requested.' }),
    endDate: z.iso.date().exactOptional(),
    filters: z
      .array(DimensionFilterSchema)
      .exactOptional()
      .openapi({
        description: 'The list of filters by which to filter values. The filters are ANDed.',
      }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The kind of request this is, in this case dfareporting#dimensionValueRequest .',
      }),
    startDate: z.iso.date().exactOptional(),
  })
  .openapi({ description: 'Represents a DimensionValuesRequest.', required: [] })
  .openapi('DimensionValueRequest')

const DirectorySiteSettingsSchema = z
  .object({
    activeViewOptOut: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this directory site has disabled active view creatives.' }),
    dfpSettings: DfpSettingsSchema.exactOptional().openapi({
      description: 'Directory site Ad Manager settings.',
    }),
    instreamVideoPlacementAccepted: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this site accepts in-stream video ads.' }),
    interstitialPlacementAccepted: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this site accepts interstitial ads.' }),
  })
  .openapi({ description: 'Directory Site Settings', required: [] })
  .openapi('DirectorySiteSettings')

const DirectorySiteSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'ID of this directory site. This is a read-only, auto-generated field.',
      }),
    idDimensionValue: DimensionValueSchema.exactOptional().openapi({
      description:
        'Dimension value for the ID of this directory site. This is a read-only, auto-generated field.',
    }),
    inpageTagFormats: z
      .array(
        z.enum([
          'STANDARD',
          'IFRAME_JAVASCRIPT_INPAGE',
          'INTERNAL_REDIRECT_INPAGE',
          'JAVASCRIPT_INPAGE',
        ]),
      )
      .exactOptional()
      .openapi({
        description:
          'Tag types for regular placements. Acceptable values are: - "STANDARD" - "IFRAME_JAVASCRIPT_INPAGE" - "INTERNAL_REDIRECT_INPAGE" - "JAVASCRIPT_INPAGE" ',
      }),
    interstitialTagFormats: z
      .array(
        z.enum([
          'IFRAME_JAVASCRIPT_INTERSTITIAL',
          'INTERNAL_REDIRECT_INTERSTITIAL',
          'JAVASCRIPT_INTERSTITIAL',
        ]),
      )
      .exactOptional()
      .openapi({
        description:
          'Tag types for interstitial placements. Acceptable values are: - "IFRAME_JAVASCRIPT_INTERSTITIAL" - "INTERNAL_REDIRECT_INTERSTITIAL" - "JAVASCRIPT_INTERSTITIAL" ',
      }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "dfareporting#directorySite".',
      }),
    name: z.string().exactOptional().openapi({ description: 'Name of this directory site.' }),
    settings: DirectorySiteSettingsSchema.exactOptional().openapi({
      description: 'Directory site settings.',
    }),
    url: z.string().exactOptional().openapi({ description: 'URL of this directory site.' }),
  })
  .openapi({
    description:
      'DirectorySites contains properties of a website from the Site Directory. Sites need to be added to an account via the Sites resource before they can be assigned to a placement.',
    required: [],
  })
  .openapi('DirectorySite')

const DirectorySitesListResponseSchema = z
  .object({
    directorySites: z
      .array(DirectorySiteSchema)
      .exactOptional()
      .openapi({ description: 'Directory site collection.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "dfareporting#directorySitesListResponse".',
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'Pagination token to be used for the next list operation.' }),
  })
  .openapi({ description: 'Directory Site List Response', required: [] })
  .openapi('DirectorySitesListResponse')

const DynamicTargetingKeySchema = z
  .object({
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "dfareporting#dynamicTargetingKey".',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Name of this dynamic targeting key. This is a required field. Must be less than 256 characters long and cannot contain commas. All characters are converted to lowercase.',
      }),
    objectId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'ID of the object of this dynamic targeting key. This is a required field.',
      }),
    objectType: z
      .enum(['OBJECT_ADVERTISER', 'OBJECT_AD', 'OBJECT_CREATIVE', 'OBJECT_PLACEMENT'])
      .exactOptional()
      .openapi({
        description: 'Type of the object of this dynamic targeting key. This is a required field.',
      }),
  })
  .openapi({
    description:
      'Contains properties of a dynamic targeting key. Dynamic targeting keys are unique, user-friendly labels, created at the advertiser level in DCM, that can be assigned to ads, creatives, and placements and used for targeting with Studio dynamic creatives. Use these labels instead of numeric Campaign Manager IDs (such as placement IDs) to save time and avoid errors in your dynamic feeds.',
    required: [],
  })
  .openapi('DynamicTargetingKey')

const DynamicTargetingKeysListResponseSchema = z
  .object({
    dynamicTargetingKeys: z
      .array(DynamicTargetingKeySchema)
      .exactOptional()
      .openapi({ description: 'Dynamic targeting key collection.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "dfareporting#dynamicTargetingKeysListResponse".',
      }),
  })
  .openapi({ description: 'Dynamic Targeting Key List Response', required: [] })
  .openapi('DynamicTargetingKeysListResponse')

const EventTagSchema = z
  .object({
    accountId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Account ID of this event tag. This is a read-only field that can be left blank.',
      }),
    advertiserId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Advertiser ID of this event tag. This field or the campaignId field is required on insertion.',
      }),
    advertiserIdDimensionValue: DimensionValueSchema.exactOptional().openapi({
      description:
        'Dimension value for the ID of the advertiser. This is a read-only, auto-generated field.',
    }),
    campaignId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Campaign ID of this event tag. This field or the advertiserId field is required on insertion.',
      }),
    campaignIdDimensionValue: DimensionValueSchema.exactOptional().openapi({
      description:
        'Dimension value for the ID of the campaign. This is a read-only, auto-generated field.',
    }),
    enabledByDefault: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Whether this event tag should be automatically enabled for all of the advertiser's campaigns and ads.",
      }),
    excludeFromAdxRequests: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether to remove this event tag from ads that are trafficked through Display & Video 360 to Ad Exchange. This may be useful if the event tag uses a pixel that is unapproved for Ad Exchange bids on one or more networks, such as the Google Display Network.',
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'ID of this event tag. This is a read-only, auto-generated field.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "dfareporting#eventTag".',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Name of this event tag. This is a required field and must be less than 256 characters long.',
      }),
    siteFilterType: z
      .enum(['WHITELIST', 'BLACKLIST'])
      .exactOptional()
      .openapi({
        description:
          'Site filter type for this event tag. If no type is specified then the event tag will be applied to all sites.',
      }),
    siteIds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Filter list of site IDs associated with this event tag. The siteFilterType determines whether this is a allowlist or blocklist filter.',
      }),
    sslCompliant: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Whether this tag is SSL-compliant or not. This is a read-only field.',
      }),
    status: z
      .enum(['ENABLED', 'DISABLED'])
      .exactOptional()
      .openapi({
        description:
          'Status of this event tag. Must be ENABLED for this event tag to fire. This is a required field.',
      }),
    subaccountId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Subaccount ID of this event tag. This is a read-only field that can be left blank.',
      }),
    type: z
      .enum([
        'IMPRESSION_IMAGE_EVENT_TAG',
        'IMPRESSION_JAVASCRIPT_EVENT_TAG',
        'CLICK_THROUGH_EVENT_TAG',
      ])
      .exactOptional()
      .openapi({
        description:
          'Event tag type. Can be used to specify whether to use a third-party pixel, a third-party JavaScript URL, or a third-party click-through URL for either impression or click tracking. This is a required field.',
      }),
    url: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Payload URL for this event tag. The URL on a click-through event tag should have a landing page URL appended to the end of it. This field is required on insertion.',
      }),
    urlEscapeLevels: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Number of times the landing page URL should be URL-escaped before being appended to the click-through event tag URL. Only applies to click-through event tags as specified by the event tag type.',
      }),
  })
  .openapi({ description: 'Contains properties of an event tag.', required: [] })
  .openapi('EventTag')

const EventTagsListResponseSchema = z
  .object({
    eventTags: z
      .array(EventTagSchema)
      .exactOptional()
      .openapi({ description: 'Event tag collection.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "dfareporting#eventTagsListResponse".',
      }),
  })
  .openapi({ description: 'Event Tag List Response', required: [] })
  .openapi('EventTagsListResponse')

const FileSchema = z
  .object({
    dateRange: DateRangeSchema.exactOptional().openapi({
      description:
        'The date range for which the file has report data. The date range will always be the absolute date range for which the report is run.',
    }),
    etag: z.string().exactOptional().openapi({ description: 'Etag of this resource.' }),
    fileName: z.string().exactOptional().openapi({ description: 'The filename of the file.' }),
    format: z
      .enum(['CSV', 'EXCEL'])
      .exactOptional()
      .openapi({
        description: 'The output format of the report. Only available once the file is available.',
      }),
    id: z.string().exactOptional().openapi({ description: 'The unique ID of this report file.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "dfareporting#file".',
      }),
    lastModifiedTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The timestamp in milliseconds since epoch when this file was last modified.',
      }),
    reportId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the report this file was generated from.' }),
    status: z
      .enum(['PROCESSING', 'REPORT_AVAILABLE', 'FAILED', 'CANCELLED'])
      .exactOptional()
      .openapi({ description: 'The status of the report file.' }),
    urls: z
      .object({
        apiUrl: z
          .string()
          .exactOptional()
          .openapi({ description: 'The URL for downloading the report data through the API.' }),
        browserUrl: z
          .string()
          .exactOptional()
          .openapi({ description: 'The URL for downloading the report data through a browser.' }),
      })
      .exactOptional()
      .openapi({
        description: 'The URLs where the completed report file can be downloaded.',
        required: [],
      }),
  })
  .openapi({
    description:
      'Represents a File resource. A file contains the metadata for a report run. It shows the status of the run and holds the URLs to the generated report data if the run is finished and the status is "REPORT_AVAILABLE".',
    required: [],
  })
  .openapi('File')

const FileListSchema = z
  .object({
    etag: z.string().exactOptional().openapi({ description: 'Etag of this resource.' }),
    items: z
      .array(FileSchema)
      .exactOptional()
      .openapi({ description: 'The files returned in this response.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "dfareporting#fileList".',
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Continuation token used to page through files. To retrieve the next page of results, set the next request\'s "pageToken" to the value of this field. The page token is only valid for a limited amount of time and should not be persisted.',
      }),
  })
  .openapi({ description: 'List of files for a report.', required: [] })
  .openapi('FileList')

const FlightSchema = z
  .object({
    endDate: z.iso.date().exactOptional(),
    rateOrCost: z.string().exactOptional().openapi({ description: 'Rate or cost of this flight.' }),
    startDate: z.iso.date().exactOptional(),
    units: z.string().exactOptional().openapi({ description: 'Units of this flight.' }),
  })
  .openapi({ description: 'Flight', required: [] })
  .openapi('Flight')

const FloodlightActivitiesGenerateTagResponseSchema = z
  .object({
    floodlightActivityTag: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Generated tag for this Floodlight activity. For global site tags, this is the event snippet.',
      }),
    globalSiteTagGlobalSnippet: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The global snippet section of a global site tag. The global site tag sets new cookies on your domain, which will store a unique identifier for a user or the ad click that brought the user to your site. Learn more.',
      }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "dfareporting#floodlightActivitiesGenerateTagResponse".',
      }),
  })
  .openapi({ description: 'Floodlight Activity GenerateTag Response', required: [] })
  .openapi('FloodlightActivitiesGenerateTagResponse')

const FloodlightActivityDynamicTagSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'ID of this dynamic tag. This is a read-only, auto-generated field.',
      }),
    name: z.string().exactOptional().openapi({ description: 'Name of this tag.' }),
    tag: z.string().exactOptional().openapi({ description: 'Tag code.' }),
  })
  .openapi({ description: 'Dynamic Tag', required: [] })
  .openapi('FloodlightActivityDynamicTag')

const FloodlightActivityPublisherDynamicTagSchema = z
  .object({
    clickThrough: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this tag is applicable only for click-throughs.' }),
    directorySiteId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Directory site ID of this dynamic tag. This is a write-only field that can be used as an alternative to the siteId field. When this resource is retrieved, only the siteId field will be populated.',
      }),
    dynamicTag: FloodlightActivityDynamicTagSchema.exactOptional().openapi({
      description: 'Dynamic floodlight tag.',
    }),
    siteId: z.string().exactOptional().openapi({ description: 'Site ID of this dynamic tag.' }),
    siteIdDimensionValue: DimensionValueSchema.exactOptional().openapi({
      description:
        'Dimension value for the ID of the site. This is a read-only, auto-generated field.',
    }),
    viewThrough: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this tag is applicable only for view-throughs.' }),
  })
  .openapi({ description: 'Publisher Dynamic Tag', required: [] })
  .openapi('FloodlightActivityPublisherDynamicTag')

const FloodlightActivitySchema = z
  .object({
    accountId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Account ID of this floodlight activity. This is a read-only field that can be left blank.',
      }),
    advertiserId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Advertiser ID of this floodlight activity. If this field is left blank, the value will be copied over either from the activity group's advertiser or the existing activity's advertiser.",
      }),
    advertiserIdDimensionValue: DimensionValueSchema.exactOptional().openapi({
      description:
        'Dimension value for the ID of the advertiser. This is a read-only, auto-generated field.',
    }),
    attributionEnabled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the activity is enabled for attribution.' }),
    cacheBustingType: z
      .enum(['JAVASCRIPT', 'ACTIVE_SERVER_PAGE', 'JSP', 'PHP', 'COLD_FUSION'])
      .exactOptional()
      .openapi({
        description:
          'Code type used for cache busting in the generated tag. Applicable only when floodlightActivityGroupType is COUNTER and countingMethod is STANDARD_COUNTING or UNIQUE_COUNTING.',
      }),
    countingMethod: z
      .enum([
        'STANDARD_COUNTING',
        'UNIQUE_COUNTING',
        'SESSION_COUNTING',
        'TRANSACTIONS_COUNTING',
        'ITEMS_SOLD_COUNTING',
      ])
      .exactOptional()
      .openapi({
        description:
          'Counting method for conversions for this floodlight activity. This is a required field.',
      }),
    defaultTags: z
      .array(FloodlightActivityDynamicTagSchema)
      .exactOptional()
      .openapi({ description: 'Dynamic floodlight tags.' }),
    expectedUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'URL where this tag will be deployed. If specified, must be less than 256 characters long.',
      }),
    floodlightActivityGroupId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Floodlight activity group ID of this floodlight activity. This is a required field.',
      }),
    floodlightActivityGroupName: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Name of the associated floodlight activity group. This is a read-only field.',
      }),
    floodlightActivityGroupTagString: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Tag string of the associated floodlight activity group. This is a read-only field.',
      }),
    floodlightActivityGroupType: z
      .enum(['COUNTER', 'SALE'])
      .exactOptional()
      .openapi({
        description: 'Type of the associated floodlight activity group. This is a read-only field.',
      }),
    floodlightConfigurationId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Floodlight configuration ID of this floodlight activity. If this field is left blank, the value will be copied over either from the activity group's floodlight configuration or from the existing activity's floodlight configuration.",
      }),
    floodlightConfigurationIdDimensionValue: DimensionValueSchema.exactOptional().openapi({
      description:
        'Dimension value for the ID of the floodlight configuration. This is a read-only, auto-generated field.',
    }),
    floodlightTagType: z
      .enum(['IFRAME', 'IMAGE', 'GLOBAL_SITE_TAG'])
      .exactOptional()
      .openapi({
        description:
          'The type of Floodlight tag this activity will generate. This is a required field.',
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'ID of this floodlight activity. This is a read-only, auto-generated field.',
      }),
    idDimensionValue: DimensionValueSchema.exactOptional().openapi({
      description:
        'Dimension value for the ID of this floodlight activity. This is a read-only, auto-generated field.',
    }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "dfareporting#floodlightActivity".',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Name of this floodlight activity. This is a required field. Must be less than 129 characters long and cannot contain quotes.',
      }),
    notes: z
      .string()
      .exactOptional()
      .openapi({ description: 'General notes or implementation instructions for the tag.' }),
    publisherTags: z
      .array(FloodlightActivityPublisherDynamicTagSchema)
      .exactOptional()
      .openapi({ description: 'Publisher dynamic floodlight tags.' }),
    secure: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this tag should use SSL.' }),
    sslCompliant: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether the floodlight activity is SSL-compliant. This is a read-only field, its value detected by the system from the floodlight tags.',
      }),
    sslRequired: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this floodlight activity must be SSL-compliant.' }),
    status: z
      .enum(['ACTIVE', 'ARCHIVED_AND_DISABLED', 'ARCHIVED', 'DISABLED_POLICY'])
      .exactOptional()
      .openapi({
        description:
          'The status of the activity. This can only be set to ACTIVE or ARCHIVED_AND_DISABLED. The ARCHIVED status is no longer supported and cannot be set for Floodlight activities. The DISABLED_POLICY status indicates that a Floodlight activity is violating Google policy. Contact your account manager for more information.',
      }),
    subaccountId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Subaccount ID of this floodlight activity. This is a read-only field that can be left blank.',
      }),
    tagFormat: z
      .enum(['HTML', 'XHTML'])
      .exactOptional()
      .openapi({
        description:
          'Tag format type for the floodlight activity. If left blank, the tag format will default to HTML.',
      }),
    tagString: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Value of the cat= parameter in the floodlight tag, which the ad servers use to identify the activity. This is optional: if empty, a new tag string will be generated for you. This string must be 1 to 8 characters long, with valid characters being a-z0-9[ _ ]. This tag string must also be unique among activities of the same activity group. This field is read-only after insertion.',
      }),
    userDefinedVariableTypes: z
      .array(
        z.enum([
          'U1',
          'U2',
          'U3',
          'U4',
          'U5',
          'U6',
          'U7',
          'U8',
          'U9',
          'U10',
          'U11',
          'U12',
          'U13',
          'U14',
          'U15',
          'U16',
          'U17',
          'U18',
          'U19',
          'U20',
          'U21',
          'U22',
          'U23',
          'U24',
          'U25',
          'U26',
          'U27',
          'U28',
          'U29',
          'U30',
          'U31',
          'U32',
          'U33',
          'U34',
          'U35',
          'U36',
          'U37',
          'U38',
          'U39',
          'U40',
          'U41',
          'U42',
          'U43',
          'U44',
          'U45',
          'U46',
          'U47',
          'U48',
          'U49',
          'U50',
          'U51',
          'U52',
          'U53',
          'U54',
          'U55',
          'U56',
          'U57',
          'U58',
          'U59',
          'U60',
          'U61',
          'U62',
          'U63',
          'U64',
          'U65',
          'U66',
          'U67',
          'U68',
          'U69',
          'U70',
          'U71',
          'U72',
          'U73',
          'U74',
          'U75',
          'U76',
          'U77',
          'U78',
          'U79',
          'U80',
          'U81',
          'U82',
          'U83',
          'U84',
          'U85',
          'U86',
          'U87',
          'U88',
          'U89',
          'U90',
          'U91',
          'U92',
          'U93',
          'U94',
          'U95',
          'U96',
          'U97',
          'U98',
          'U99',
          'U100',
        ]),
      )
      .exactOptional()
      .openapi({
        description:
          'List of the user-defined variables used by this conversion tag. These map to the "u[1-100]=" in the tags. Each of these can have a user defined type. Acceptable values are U1 to U100, inclusive. ',
      }),
  })
  .openapi({ description: 'Contains properties of a Floodlight activity.', required: [] })
  .openapi('FloodlightActivity')

const FloodlightActivitiesListResponseSchema = z
  .object({
    floodlightActivities: z
      .array(FloodlightActivitySchema)
      .exactOptional()
      .openapi({ description: 'Floodlight activity collection.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "dfareporting#floodlightActivitiesListResponse".',
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'Pagination token to be used for the next list operation.' }),
  })
  .openapi({ description: 'Floodlight Activity List Response', required: [] })
  .openapi('FloodlightActivitiesListResponse')

const FloodlightActivityGroupSchema = z
  .object({
    accountId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Account ID of this floodlight activity group. This is a read-only field that can be left blank.',
      }),
    advertiserId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Advertiser ID of this floodlight activity group. If this field is left blank, the value will be copied over either from the floodlight configuration's advertiser or from the existing activity group's advertiser.",
      }),
    advertiserIdDimensionValue: DimensionValueSchema.exactOptional().openapi({
      description:
        'Dimension value for the ID of the advertiser. This is a read-only, auto-generated field.',
    }),
    floodlightConfigurationId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Floodlight configuration ID of this floodlight activity group. This is a required field.',
      }),
    floodlightConfigurationIdDimensionValue: DimensionValueSchema.exactOptional().openapi({
      description:
        'Dimension value for the ID of the floodlight configuration. This is a read-only, auto-generated field.',
    }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'ID of this floodlight activity group. This is a read-only, auto-generated field.',
      }),
    idDimensionValue: DimensionValueSchema.exactOptional().openapi({
      description:
        'Dimension value for the ID of this floodlight activity group. This is a read-only, auto-generated field.',
    }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "dfareporting#floodlightActivityGroup".',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Name of this floodlight activity group. This is a required field. Must be less than 65 characters long and cannot contain quotes.',
      }),
    subaccountId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Subaccount ID of this floodlight activity group. This is a read-only field that can be left blank.',
      }),
    tagString: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Value of the type= parameter in the floodlight tag, which the ad servers use to identify the activity group that the activity belongs to. This is optional: if empty, a new tag string will be generated for you. This string must be 1 to 8 characters long, with valid characters being a-z0-9[ _ ]. This tag string must also be unique among activity groups of the same floodlight configuration. This field is read-only after insertion.',
      }),
    type: z
      .enum(['COUNTER', 'SALE'])
      .exactOptional()
      .openapi({
        description:
          'Type of the floodlight activity group. This is a required field that is read-only after insertion.',
      }),
  })
  .openapi({ description: 'Contains properties of a Floodlight activity group.', required: [] })
  .openapi('FloodlightActivityGroup')

const FloodlightActivityGroupsListResponseSchema = z
  .object({
    floodlightActivityGroups: z
      .array(FloodlightActivityGroupSchema)
      .exactOptional()
      .openapi({ description: 'Floodlight activity group collection.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "dfareporting#floodlightActivityGroupsListResponse".',
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'Pagination token to be used for the next list operation.' }),
  })
  .openapi({ description: 'Floodlight Activity Group List Response', required: [] })
  .openapi('FloodlightActivityGroupsListResponse')

const OmnitureSettingsSchema = z
  .object({
    omnitureCostDataEnabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether placement cost data will be sent to Omniture. This property can be enabled only if omnitureIntegrationEnabled is true.',
      }),
    omnitureIntegrationEnabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether Omniture integration is enabled. This property can be enabled only when the "Advanced Ad Serving" account setting is enabled.',
      }),
  })
  .openapi({ description: 'Omniture Integration Settings.', required: [] })
  .openapi('OmnitureSettings')

const TagSettingsSchema = z
  .object({
    dynamicTagEnabled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether dynamic floodlight tags are enabled.' }),
    imageTagEnabled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether image tags are enabled.' }),
  })
  .openapi({ description: 'Dynamic and Image Tag Settings.', required: [] })
  .openapi('TagSettings')

const ThirdPartyAuthenticationTokenSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of the third-party authentication token.' }),
    value: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Value of the third-party authentication token. This is a read-only, auto-generated field.',
      }),
  })
  .openapi({ description: 'Third Party Authentication Token', required: [] })
  .openapi('ThirdPartyAuthenticationToken')

const UserDefinedVariableConfigurationSchema = z
  .object({
    dataType: z
      .enum(['STRING', 'NUMBER'])
      .exactOptional()
      .openapi({ description: 'Data type for the variable. This is a required field.' }),
    reportName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'User-friendly name for the variable which will appear in reports. This is a required field, must be less than 64 characters long, and cannot contain the following characters: ""<>".',
      }),
    variableType: z
      .enum([
        'U1',
        'U2',
        'U3',
        'U4',
        'U5',
        'U6',
        'U7',
        'U8',
        'U9',
        'U10',
        'U11',
        'U12',
        'U13',
        'U14',
        'U15',
        'U16',
        'U17',
        'U18',
        'U19',
        'U20',
        'U21',
        'U22',
        'U23',
        'U24',
        'U25',
        'U26',
        'U27',
        'U28',
        'U29',
        'U30',
        'U31',
        'U32',
        'U33',
        'U34',
        'U35',
        'U36',
        'U37',
        'U38',
        'U39',
        'U40',
        'U41',
        'U42',
        'U43',
        'U44',
        'U45',
        'U46',
        'U47',
        'U48',
        'U49',
        'U50',
        'U51',
        'U52',
        'U53',
        'U54',
        'U55',
        'U56',
        'U57',
        'U58',
        'U59',
        'U60',
        'U61',
        'U62',
        'U63',
        'U64',
        'U65',
        'U66',
        'U67',
        'U68',
        'U69',
        'U70',
        'U71',
        'U72',
        'U73',
        'U74',
        'U75',
        'U76',
        'U77',
        'U78',
        'U79',
        'U80',
        'U81',
        'U82',
        'U83',
        'U84',
        'U85',
        'U86',
        'U87',
        'U88',
        'U89',
        'U90',
        'U91',
        'U92',
        'U93',
        'U94',
        'U95',
        'U96',
        'U97',
        'U98',
        'U99',
        'U100',
      ])
      .exactOptional()
      .openapi({ description: 'Variable name in the tag. This is a required field.' }),
  })
  .openapi({ description: 'User Defined Variable configuration.', required: [] })
  .openapi('UserDefinedVariableConfiguration')

const FloodlightConfigurationSchema = z
  .object({
    accountId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Account ID of this floodlight configuration. This is a read-only field that can be left blank.',
      }),
    advertiserId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Advertiser ID of the parent advertiser of this floodlight configuration.',
      }),
    advertiserIdDimensionValue: DimensionValueSchema.exactOptional().openapi({
      description:
        'Dimension value for the ID of the advertiser. This is a read-only, auto-generated field.',
    }),
    analyticsDataSharingEnabled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether advertiser data is shared with Google Analytics.' }),
    customViewabilityMetric: CustomViewabilityMetricSchema.exactOptional().openapi({
      description: 'Custom Viewability metric for the floodlight configuration.',
    }),
    exposureToConversionEnabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether the exposure-to-conversion report is enabled. This report shows detailed pathway information on up to 10 of the most recent ad exposures seen by a user before converting.',
      }),
    firstDayOfWeek: z
      .enum(['MONDAY', 'SUNDAY'])
      .exactOptional()
      .openapi({
        description:
          'Day that will be counted as the first day of the week in reports. This is a required field.',
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'ID of this floodlight configuration. This is a read-only, auto-generated field.',
      }),
    idDimensionValue: DimensionValueSchema.exactOptional().openapi({
      description:
        'Dimension value for the ID of this floodlight configuration. This is a read-only, auto-generated field.',
    }),
    inAppAttributionTrackingEnabled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether in-app attribution tracking is enabled.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "dfareporting#floodlightConfiguration".',
      }),
    lookbackConfiguration: LookbackConfigurationSchema.exactOptional().openapi({
      description: 'Lookback window settings for this floodlight configuration.',
    }),
    naturalSearchConversionAttributionOption: z
      .enum([
        'EXCLUDE_NATURAL_SEARCH_CONVERSION_ATTRIBUTION',
        'INCLUDE_NATURAL_SEARCH_CONVERSION_ATTRIBUTION',
        'INCLUDE_NATURAL_SEARCH_TIERED_CONVERSION_ATTRIBUTION',
      ])
      .exactOptional()
      .openapi({ description: 'Types of attribution options for natural search conversions.' }),
    omnitureSettings: OmnitureSettingsSchema.exactOptional().openapi({
      description: 'Settings for Campaign Manager Omniture integration.',
    }),
    subaccountId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Subaccount ID of this floodlight configuration. This is a read-only field that can be left blank.',
      }),
    tagSettings: TagSettingsSchema.exactOptional().openapi({
      description: 'Configuration settings for dynamic and image floodlight tags.',
    }),
    thirdPartyAuthenticationTokens: z
      .array(ThirdPartyAuthenticationTokenSchema)
      .exactOptional()
      .openapi({
        description: 'List of third-party authentication tokens enabled for this configuration.',
      }),
    userDefinedVariableConfigurations: z
      .array(UserDefinedVariableConfigurationSchema)
      .exactOptional()
      .openapi({ description: 'List of user defined variables enabled for this configuration.' }),
  })
  .openapi({ description: 'Contains properties of a Floodlight configuration.', required: [] })
  .openapi('FloodlightConfiguration')

const FloodlightConfigurationsListResponseSchema = z
  .object({
    floodlightConfigurations: z
      .array(FloodlightConfigurationSchema)
      .exactOptional()
      .openapi({ description: 'Floodlight configuration collection.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "dfareporting#floodlightConfigurationsListResponse".',
      }),
  })
  .openapi({ description: 'Floodlight Configuration List Response', required: [] })
  .openapi('FloodlightConfigurationsListResponse')

const PricingSchema = z
  .object({
    capCostType: z
      .enum([
        'PLANNING_PLACEMENT_CAP_COST_TYPE_NONE',
        'PLANNING_PLACEMENT_CAP_COST_TYPE_MONTHLY',
        'PLANNING_PLACEMENT_CAP_COST_TYPE_CUMULATIVE',
      ])
      .exactOptional()
      .openapi({ description: 'Cap cost type of this inventory item.' }),
    endDate: z.iso.date().exactOptional(),
    flights: z
      .array(FlightSchema)
      .exactOptional()
      .openapi({
        description:
          'Flights of this inventory item. A flight (a.k.a. pricing period) represents the inventory item pricing information for a specific period of time.',
      }),
    groupType: z
      .enum(['PLANNING_PLACEMENT_GROUP_TYPE_PACKAGE', 'PLANNING_PLACEMENT_GROUP_TYPE_ROADBLOCK'])
      .exactOptional()
      .openapi({
        description:
          'Group type of this inventory item if it represents a placement group. Is null otherwise. There are two type of placement groups: PLANNING_PLACEMENT_GROUP_TYPE_PACKAGE is a simple group of inventory items that acts as a single pricing point for a group of tags. PLANNING_PLACEMENT_GROUP_TYPE_ROADBLOCK is a group of inventory items that not only acts as a single pricing point, but also assumes that all the tags in it will be served at the same time. A roadblock requires one of its assigned inventory items to be marked as primary.',
      }),
    pricingType: z
      .enum([
        'PLANNING_PLACEMENT_PRICING_TYPE_IMPRESSIONS',
        'PLANNING_PLACEMENT_PRICING_TYPE_CPM',
        'PLANNING_PLACEMENT_PRICING_TYPE_CLICKS',
        'PLANNING_PLACEMENT_PRICING_TYPE_CPC',
        'PLANNING_PLACEMENT_PRICING_TYPE_CPA',
        'PLANNING_PLACEMENT_PRICING_TYPE_FLAT_RATE_IMPRESSIONS',
        'PLANNING_PLACEMENT_PRICING_TYPE_FLAT_RATE_CLICKS',
        'PLANNING_PLACEMENT_PRICING_TYPE_CPM_ACTIVEVIEW',
      ])
      .exactOptional()
      .openapi({ description: 'Pricing type of this inventory item.' }),
    startDate: z.iso.date().exactOptional(),
  })
  .openapi({ description: 'Pricing Information', required: [] })
  .openapi('Pricing')

const InventoryItemSchema = z
  .object({
    accountId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Account ID of this inventory item.' }),
    adSlots: z
      .array(AdSlotSchema)
      .exactOptional()
      .openapi({
        description:
          'Ad slots of this inventory item. If this inventory item represents a standalone placement, there will be exactly one ad slot. If this inventory item represents a placement group, there will be more than one ad slot, each representing one child placement in that placement group.',
      }),
    advertiserId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Advertiser ID of this inventory item.' }),
    contentCategoryId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Content category ID of this inventory item.' }),
    estimatedClickThroughRate: z
      .string()
      .exactOptional()
      .openapi({ description: 'Estimated click-through rate of this inventory item.' }),
    estimatedConversionRate: z
      .string()
      .exactOptional()
      .openapi({ description: 'Estimated conversion rate of this inventory item.' }),
    id: z.string().exactOptional().openapi({ description: 'ID of this inventory item.' }),
    inPlan: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this inventory item is in plan.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "dfareporting#inventoryItem".',
      }),
    lastModifiedInfo: LastModifiedInfoSchema.exactOptional().openapi({
      description: 'Information about the most recent modification of this inventory item.',
    }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Name of this inventory item. For standalone inventory items, this is the same name as that of its only ad slot. For group inventory items, this can differ from the name of any of its ad slots.',
      }),
    negotiationChannelId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Negotiation channel ID of this inventory item.' }),
    orderId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Order ID of this inventory item.' }),
    placementStrategyId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Placement strategy ID of this inventory item.' }),
    pricing: PricingSchema.exactOptional().openapi({
      description: 'Pricing of this inventory item.',
    }),
    projectId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Project ID of this inventory item.' }),
    rfpId: z.string().exactOptional().openapi({ description: 'RFP ID of this inventory item.' }),
    siteId: z
      .string()
      .exactOptional()
      .openapi({ description: 'ID of the site this inventory item is associated with.' }),
    subaccountId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Subaccount ID of this inventory item.' }),
    type: z
      .enum(['PLANNING_PLACEMENT_TYPE_REGULAR', 'PLANNING_PLACEMENT_TYPE_CREDIT'])
      .exactOptional()
      .openapi({ description: 'Type of inventory item.' }),
  })
  .openapi({ description: 'Represents a buy from the Planning inventory store.', required: [] })
  .openapi('InventoryItem')

const InventoryItemsListResponseSchema = z
  .object({
    inventoryItems: z
      .array(InventoryItemSchema)
      .exactOptional()
      .openapi({ description: 'Inventory item collection' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "dfareporting#inventoryItemsListResponse".',
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'Pagination token to be used for the next list operation.' }),
  })
  .openapi({ description: 'Inventory item List Response', required: [] })
  .openapi('InventoryItemsListResponse')

const LanguagesListResponseSchema = z
  .object({
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "dfareporting#languagesListResponse".',
      }),
    languages: z
      .array(LanguageSchema)
      .exactOptional()
      .openapi({ description: 'Language collection.' }),
  })
  .openapi({ description: 'Language List Response', required: [] })
  .openapi('LanguagesListResponse')

const ListPopulationTermSchema = z
  .object({
    contains: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Will be true if the term should check if the user is in the list and false if the term should check if the user is not in the list. This field is only relevant when type is set to LIST_MEMBERSHIP_TERM. False by default.',
      }),
    negation: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether to negate the comparison result of this term during rule evaluation. This field is only relevant when type is left unset or set to CUSTOM_VARIABLE_TERM or REFERRER_TERM.',
      }),
    operator: z
      .enum([
        'NUM_EQUALS',
        'NUM_LESS_THAN',
        'NUM_LESS_THAN_EQUAL',
        'NUM_GREATER_THAN',
        'NUM_GREATER_THAN_EQUAL',
        'STRING_EQUALS',
        'STRING_CONTAINS',
      ])
      .exactOptional()
      .openapi({
        description:
          'Comparison operator of this term. This field is only relevant when type is left unset or set to CUSTOM_VARIABLE_TERM or REFERRER_TERM.',
      }),
    remarketingListId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'ID of the list in question. This field is only relevant when type is set to LIST_MEMBERSHIP_TERM.',
      }),
    type: z
      .enum(['CUSTOM_VARIABLE_TERM', 'LIST_MEMBERSHIP_TERM', 'REFERRER_TERM'])
      .exactOptional()
      .openapi({
        description:
          'List population term type determines the applicable fields in this object. If left unset or set to CUSTOM_VARIABLE_TERM, then variableName, variableFriendlyName, operator, value, and negation are applicable. If set to LIST_MEMBERSHIP_TERM then remarketingListId and contains are applicable. If set to REFERRER_TERM then operator, value, and negation are applicable.',
      }),
    value: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Literal to compare the variable to. This field is only relevant when type is left unset or set to CUSTOM_VARIABLE_TERM or REFERRER_TERM.',
      }),
    variableFriendlyName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Friendly name of this term's variable. This is a read-only, auto-generated field. This field is only relevant when type is left unset or set to CUSTOM_VARIABLE_TERM.",
      }),
    variableName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Name of the variable (U1, U2, etc.) being compared in this term. This field is only relevant when type is set to null, CUSTOM_VARIABLE_TERM or REFERRER_TERM.',
      }),
  })
  .openapi({ description: 'Remarketing List Population Rule Term.', required: [] })
  .openapi('ListPopulationTerm')

const ListPopulationClauseSchema = z
  .object({
    terms: z
      .array(ListPopulationTermSchema)
      .exactOptional()
      .openapi({
        description:
          'Terms of this list population clause. Each clause is made up of list population terms representing constraints and are joined by ORs.',
      }),
  })
  .openapi({
    description:
      'A group clause made up of list population terms representing constraints joined by ORs.',
    required: [],
  })
  .openapi('ListPopulationClause')

const ListPopulationRuleSchema = z
  .object({
    floodlightActivityId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Floodlight activity ID associated with this rule. This field can be left blank.',
      }),
    floodlightActivityName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Name of floodlight activity associated with this rule. This is a read-only, auto-generated field.',
      }),
    listPopulationClauses: z
      .array(ListPopulationClauseSchema)
      .exactOptional()
      .openapi({
        description:
          'Clauses that make up this list population rule. Clauses are joined by ANDs, and the clauses themselves are made up of list population terms which are joined by ORs.',
      }),
  })
  .openapi({ description: 'Remarketing List Population Rule.', required: [] })
  .openapi('ListPopulationRule')

const MetrosListResponseSchema = z
  .object({
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "dfareporting#metrosListResponse".',
      }),
    metros: z.array(MetroSchema).exactOptional().openapi({ description: 'Metro collection.' }),
  })
  .openapi({ description: 'Metro List Response', required: [] })
  .openapi('MetrosListResponse')

const MobileAppsListResponseSchema = z
  .object({
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "dfareporting#mobileAppsListResponse".',
      }),
    mobileApps: z
      .array(MobileAppSchema)
      .exactOptional()
      .openapi({ description: 'Mobile apps collection.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'Pagination token to be used for the next list operation.' }),
  })
  .openapi({ description: 'Mobile app List Response', required: [] })
  .openapi('MobileAppsListResponse')

const MobileCarriersListResponseSchema = z
  .object({
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "dfareporting#mobileCarriersListResponse".',
      }),
    mobileCarriers: z
      .array(MobileCarrierSchema)
      .exactOptional()
      .openapi({ description: 'Mobile carrier collection.' }),
  })
  .openapi({ description: 'Mobile Carrier List Response', required: [] })
  .openapi('MobileCarriersListResponse')

const OperatingSystemVersionsListResponseSchema = z
  .object({
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "dfareporting#operatingSystemVersionsListResponse".',
      }),
    operatingSystemVersions: z
      .array(OperatingSystemVersionSchema)
      .exactOptional()
      .openapi({ description: 'Operating system version collection.' }),
  })
  .openapi({ description: 'Operating System Version List Response', required: [] })
  .openapi('OperatingSystemVersionsListResponse')

const OperatingSystemsListResponseSchema = z
  .object({
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "dfareporting#operatingSystemsListResponse".',
      }),
    operatingSystems: z
      .array(OperatingSystemSchema)
      .exactOptional()
      .openapi({ description: 'Operating system collection.' }),
  })
  .openapi({ description: 'Operating System List Response', required: [] })
  .openapi('OperatingSystemsListResponse')

const OrderContactSchema = z
  .object({
    contactInfo: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Free-form information about this contact. It could be any information related to this contact in addition to type, title, name, and signature user profile ID.',
      }),
    contactName: z.string().exactOptional().openapi({ description: 'Name of this contact.' }),
    contactTitle: z.string().exactOptional().openapi({ description: 'Title of this contact.' }),
    contactType: z
      .enum([
        'PLANNING_ORDER_CONTACT_BUYER_CONTACT',
        'PLANNING_ORDER_CONTACT_BUYER_BILLING_CONTACT',
        'PLANNING_ORDER_CONTACT_SELLER_CONTACT',
      ])
      .exactOptional()
      .openapi({ description: 'Type of this contact.' }),
    signatureUserProfileId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'ID of the user profile containing the signature that will be embedded into order documents.',
      }),
  })
  .openapi({ description: 'Contact of an order.', required: [] })
  .openapi('OrderContact')

const OrderSchema = z
  .object({
    accountId: z.string().exactOptional().openapi({ description: 'Account ID of this order.' }),
    advertiserId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Advertiser ID of this order.' }),
    approverUserProfileIds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'IDs for users that have to approve documents created for this order.',
      }),
    buyerInvoiceId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Buyer invoice ID associated with this order.' }),
    buyerOrganizationName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of the buyer organization.' }),
    comments: z.string().exactOptional().openapi({ description: 'Comments in this order.' }),
    contacts: z
      .array(OrderContactSchema)
      .exactOptional()
      .openapi({ description: 'Contacts for this order.' }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'ID of this order. This is a read-only, auto-generated field.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "dfareporting#order".',
      }),
    lastModifiedInfo: LastModifiedInfoSchema.exactOptional().openapi({
      description: 'Information about the most recent modification of this order.',
    }),
    name: z.string().exactOptional().openapi({ description: 'Name of this order.' }),
    notes: z.string().exactOptional().openapi({ description: 'Notes of this order.' }),
    planningTermId: z
      .string()
      .exactOptional()
      .openapi({ description: 'ID of the terms and conditions template used in this order.' }),
    projectId: z.string().exactOptional().openapi({ description: 'Project ID of this order.' }),
    sellerOrderId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Seller order ID associated with this order.' }),
    sellerOrganizationName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of the seller organization.' }),
    siteId: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Site IDs this order is associated with.' }),
    siteNames: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Free-form site names this order is associated with.' }),
    subaccountId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Subaccount ID of this order.' }),
    termsAndConditions: z
      .string()
      .exactOptional()
      .openapi({ description: 'Terms and conditions of this order.' }),
  })
  .openapi({ description: 'Describes properties of a Planning order.', required: [] })
  .openapi('Order')

const OrderDocumentSchema = z
  .object({
    accountId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Account ID of this order document.' }),
    advertiserId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Advertiser ID of this order document.' }),
    amendedOrderDocumentId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The amended order document ID of this order document. An order document can be created by optionally amending another order document so that the change history can be preserved.',
      }),
    approvedByUserProfileIds: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'IDs of users who have approved this order document.' }),
    cancelled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this order document is cancelled.' }),
    createdInfo: LastModifiedInfoSchema.exactOptional().openapi({
      description: 'Information about the creation of this order document.',
    }),
    effectiveDate: z.iso.date().exactOptional(),
    id: z.string().exactOptional().openapi({ description: 'ID of this order document.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "dfareporting#orderDocument".',
      }),
    lastSentRecipients: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'List of email addresses that received the last sent document.' }),
    lastSentTime: z.iso.datetime({ offset: true }).exactOptional(),
    orderId: z
      .string()
      .exactOptional()
      .openapi({ description: 'ID of the order from which this order document is created.' }),
    projectId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Project ID of this order document.' }),
    signed: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this order document has been signed.' }),
    subaccountId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Subaccount ID of this order document.' }),
    title: z.string().exactOptional().openapi({ description: 'Title of this order document.' }),
    type: z
      .enum(['PLANNING_ORDER_TYPE_INSERTION_ORDER', 'PLANNING_ORDER_TYPE_CHANGE_ORDER'])
      .exactOptional()
      .openapi({ description: 'Type of this order document' }),
  })
  .openapi({ description: 'Contains properties of a Planning order document.', required: [] })
  .openapi('OrderDocument')

const OrderDocumentsListResponseSchema = z
  .object({
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "dfareporting#orderDocumentsListResponse".',
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'Pagination token to be used for the next list operation.' }),
    orderDocuments: z
      .array(OrderDocumentSchema)
      .exactOptional()
      .openapi({ description: 'Order document collection' }),
  })
  .openapi({ description: 'Order document List Response', required: [] })
  .openapi('OrderDocumentsListResponse')

const OrdersListResponseSchema = z
  .object({
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "dfareporting#ordersListResponse".',
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'Pagination token to be used for the next list operation.' }),
    orders: z.array(OrderSchema).exactOptional().openapi({ description: 'Order collection.' }),
  })
  .openapi({ description: 'Order List Response', required: [] })
  .openapi('OrdersListResponse')

const PathFilterSchema = z
  .object({
    eventFilters: z
      .array(EventFilterSchema)
      .exactOptional()
      .openapi({ description: 'Event filters in path report.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The kind of resource this is, in this case dfareporting#pathFilter.',
      }),
    pathMatchPosition: z
      .enum(['PATH_MATCH_POSITION_UNSPECIFIED', 'ANY', 'FIRST', 'LAST'])
      .exactOptional()
      .openapi({
        description:
          "Determines how the 'value' field is matched when filtering. If not specified, defaults to EXACT. If set to WILDCARD_EXPRESSION, '*' is allowed as a placeholder for variable length character sequences, and it can be escaped with a backslash. Note, only paid search dimensions ('dfa:paidSearch*') allow a matchType other than EXACT.",
      }),
  })
  .openapi({ description: 'Represents a DfaReporting path filter.', required: [] })
  .openapi('PathFilter')

const PricingSchedulePricingPeriodSchema = z
  .object({
    endDate: z.iso.date().exactOptional(),
    pricingComment: z
      .string()
      .exactOptional()
      .openapi({ description: 'Comments for this pricing period.' }),
    rateOrCostNanos: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Rate or cost of this pricing period in nanos (i.e., multipled by 1000000000). Acceptable values are 0 to 1000000000000000000, inclusive.',
      }),
    startDate: z.iso.date().exactOptional(),
    units: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Units of this pricing period. Acceptable values are 0 to 10000000000, inclusive.',
      }),
  })
  .openapi({ description: 'Pricing Period', required: [] })
  .openapi('PricingSchedulePricingPeriod')

const PricingScheduleSchema = z
  .object({
    capCostOption: z
      .enum(['CAP_COST_NONE', 'CAP_COST_MONTHLY', 'CAP_COST_CUMULATIVE'])
      .exactOptional()
      .openapi({ description: 'Placement cap cost option.' }),
    endDate: z.iso.date().exactOptional(),
    flighted: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether this placement is flighted. If true, pricing periods will be computed automatically.',
      }),
    floodlightActivityId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Floodlight activity ID associated with this placement. This field should be set when placement pricing type is set to PRICING_TYPE_CPA.',
      }),
    pricingPeriods: z
      .array(PricingSchedulePricingPeriodSchema)
      .exactOptional()
      .openapi({ description: 'Pricing periods for this placement.' }),
    pricingType: z
      .enum([
        'PRICING_TYPE_CPM',
        'PRICING_TYPE_CPC',
        'PRICING_TYPE_CPA',
        'PRICING_TYPE_FLAT_RATE_IMPRESSIONS',
        'PRICING_TYPE_FLAT_RATE_CLICKS',
        'PRICING_TYPE_CPM_ACTIVEVIEW',
      ])
      .exactOptional()
      .openapi({ description: 'Placement pricing type. This field is required on insertion.' }),
    startDate: z.iso.date().exactOptional(),
    testingStartDate: z.iso.date().exactOptional(),
  })
  .openapi({ description: 'Pricing Schedule', required: [] })
  .openapi('PricingSchedule')

const TagSettingSchema = z
  .object({
    additionalKeyValues: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Additional key-values to be included in tags. Each key-value pair must be of the form key=value, and pairs must be separated by a semicolon (;). Keys and values must not contain commas. For example, id=2;color=red is a valid value for this field.',
      }),
    includeClickThroughUrls: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether static landing page URLs should be included in the tags. This setting applies only to placements.',
      }),
    includeClickTracking: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether click-tracking string should be included in the tags.' }),
    keywordOption: z
      .enum([
        'PLACEHOLDER_WITH_LIST_OF_KEYWORDS',
        'IGNORE',
        'GENERATE_SEPARATE_TAG_FOR_EACH_KEYWORD',
      ])
      .exactOptional()
      .openapi({
        description:
          'Option specifying how keywords are embedded in ad tags. This setting can be used to specify whether keyword placeholders are inserted in placement tags for this site. Publishers can then add keywords to those placeholders.',
      }),
  })
  .openapi({ description: 'Tag Settings', required: [] })
  .openapi('TagSetting')

const SkippableSettingSchema = z
  .object({
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "dfareporting#skippableSetting".',
      }),
    progressOffset: VideoOffsetSchema.exactOptional().openapi({
      description:
        'Amount of time to play videos served to this placement before counting a view. Applicable when skippable is true.',
    }),
    skipOffset: VideoOffsetSchema.exactOptional().openapi({
      description:
        'Amount of time to play videos served to this placement before the skip button should appear. Applicable when skippable is true.',
    }),
    skippable: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the user can skip creatives served to this placement.' }),
  })
  .openapi({ description: 'Skippable Settings', required: [] })
  .openapi('SkippableSetting')

const TranscodeSettingSchema = z
  .object({
    enabledVideoFormats: z
      .array(z.int32())
      .exactOptional()
      .openapi({
        description:
          'Allowlist of video formats to be served to this placement. Set this list to null or empty to serve all video formats.',
      }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "dfareporting#transcodeSetting".',
      }),
  })
  .openapi({ description: 'Transcode Settings', required: [] })
  .openapi('TranscodeSetting')

const VideoSettingsSchema = z
  .object({
    companionSettings: CompanionSettingSchema.exactOptional().openapi({
      description:
        'Settings for the companion creatives of video creatives served to this placement.',
    }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "dfareporting#videoSettings".',
      }),
    obaEnabled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether OBA icons are enabled for this placement.' }),
    obaSettings: ObaIconSchema.exactOptional().openapi({
      description:
        'Settings for the OBA icon of video creatives served to this placement. If this object is provided, the creative-level OBA settings will be overridden.',
    }),
    orientation: z
      .enum(['ANY', 'LANDSCAPE', 'PORTRAIT'])
      .exactOptional()
      .openapi({
        description:
          'Orientation of a video placement. If this value is set, placement will return assets matching the specified orientation.',
      }),
    skippableSettings: SkippableSettingSchema.exactOptional().openapi({
      description:
        'Settings for the skippability of video creatives served to this placement. If this object is provided, the creative-level skippable settings will be overridden.',
    }),
    transcodeSettings: TranscodeSettingSchema.exactOptional().openapi({
      description:
        'Settings for the transcodes of video creatives served to this placement. If this object is provided, the creative-level transcode settings will be overridden.',
    }),
  })
  .openapi({ description: 'Video Settings', required: [] })
  .openapi('VideoSettings')

const PlacementSchema = z
  .object({
    accountId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Account ID of this placement. This field can be left blank.' }),
    adBlockingOptOut: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether this placement opts out of ad blocking. When true, ad blocking is disabled for this placement. When false, the campaign and site settings take effect.',
      }),
    additionalSizes: z
      .array(SizeSchema)
      .exactOptional()
      .openapi({
        description:
          'Additional sizes associated with this placement. When inserting or updating a placement, only the size ID field is used.',
      }),
    advertiserId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Advertiser ID of this placement. This field can be left blank.' }),
    advertiserIdDimensionValue: DimensionValueSchema.exactOptional().openapi({
      description:
        'Dimension value for the ID of the advertiser. This is a read-only, auto-generated field.',
    }),
    archived: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this placement is archived.' }),
    campaignId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Campaign ID of this placement. This field is a required field on insertion.',
      }),
    campaignIdDimensionValue: DimensionValueSchema.exactOptional().openapi({
      description:
        'Dimension value for the ID of the campaign. This is a read-only, auto-generated field.',
    }),
    comment: z.string().exactOptional().openapi({ description: 'Comments for this placement.' }),
    compatibility: z
      .enum([
        'DISPLAY',
        'DISPLAY_INTERSTITIAL',
        'APP',
        'APP_INTERSTITIAL',
        'IN_STREAM_VIDEO',
        'IN_STREAM_AUDIO',
      ])
      .exactOptional()
      .openapi({
        description:
          'Placement compatibility. DISPLAY and DISPLAY_INTERSTITIAL refer to rendering on desktop, on mobile devices or in mobile apps for regular or interstitial ads respectively. APP and APP_INTERSTITIAL are no longer allowed for new placement insertions. Instead, use DISPLAY or DISPLAY_INTERSTITIAL. IN_STREAM_VIDEO refers to rendering in in-stream video ads developed with the VAST standard. This field is required on insertion.',
      }),
    contentCategoryId: z
      .string()
      .exactOptional()
      .openapi({ description: 'ID of the content category assigned to this placement.' }),
    createInfo: LastModifiedInfoSchema.exactOptional().openapi({
      description: 'Information about the creation of this placement. This is a read-only field.',
    }),
    directorySiteId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Directory site ID of this placement. On insert, you must set either this field or the siteId field to specify the site associated with this placement. This is a required field that is read-only after insertion.',
      }),
    directorySiteIdDimensionValue: DimensionValueSchema.exactOptional().openapi({
      description:
        'Dimension value for the ID of the directory site. This is a read-only, auto-generated field.',
    }),
    externalId: z
      .string()
      .exactOptional()
      .openapi({ description: 'External ID for this placement.' }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'ID of this placement. This is a read-only, auto-generated field.' }),
    idDimensionValue: DimensionValueSchema.exactOptional().openapi({
      description:
        'Dimension value for the ID of this placement. This is a read-only, auto-generated field.',
    }),
    keyName: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Key name of this placement. This is a read-only, auto-generated field.',
      }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "dfareporting#placement".',
      }),
    lastModifiedInfo: LastModifiedInfoSchema.exactOptional().openapi({
      description:
        'Information about the most recent modification of this placement. This is a read-only field.',
    }),
    lookbackConfiguration: LookbackConfigurationSchema.exactOptional().openapi({
      description: 'Lookback window settings for this placement.',
    }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Name of this placement.This is a required field and must be less than or equal to 512 characters long.',
      }),
    paymentApproved: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether payment was approved for this placement. This is a read-only field relevant only to publisher-paid placements.',
      }),
    paymentSource: z
      .enum(['PLACEMENT_AGENCY_PAID', 'PLACEMENT_PUBLISHER_PAID'])
      .exactOptional()
      .openapi({
        description:
          'Payment source for this placement. This is a required field that is read-only after insertion.',
      }),
    placementGroupId: z
      .string()
      .exactOptional()
      .openapi({ description: "ID of this placement's group, if applicable." }),
    placementGroupIdDimensionValue: DimensionValueSchema.exactOptional().openapi({
      description:
        'Dimension value for the ID of the placement group. This is a read-only, auto-generated field.',
    }),
    placementStrategyId: z
      .string()
      .exactOptional()
      .openapi({ description: 'ID of the placement strategy assigned to this placement.' }),
    pricingSchedule: PricingScheduleSchema.exactOptional().openapi({
      description:
        'Pricing schedule of this placement. This field is required on insertion, specifically subfields startDate, endDate and pricingType.',
    }),
    primary: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Whether this placement is the primary placement of a roadblock (placement group). You cannot change this field from true to false. Setting this field to true will automatically set the primary field on the original primary placement of the roadblock to false, and it will automatically set the roadblock's primaryPlacementId field to the ID of this placement.",
      }),
    publisherUpdateInfo: LastModifiedInfoSchema.exactOptional().openapi({
      description: 'Information about the last publisher update. This is a read-only field.',
    }),
    siteId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Site ID associated with this placement. On insert, you must set either this field or the directorySiteId field to specify the site associated with this placement. This is a required field that is read-only after insertion.',
      }),
    siteIdDimensionValue: DimensionValueSchema.exactOptional().openapi({
      description:
        'Dimension value for the ID of the site. This is a read-only, auto-generated field.',
    }),
    size: SizeSchema.exactOptional().openapi({
      description:
        'Size associated with this placement. When inserting or updating a placement, only the size ID field is used. This field is required on insertion.',
    }),
    sslRequired: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Whether creatives assigned to this placement must be SSL-compliant.',
      }),
    status: z
      .enum([
        'PENDING_REVIEW',
        'PAYMENT_ACCEPTED',
        'PAYMENT_REJECTED',
        'ACKNOWLEDGE_REJECTION',
        'ACKNOWLEDGE_ACCEPTANCE',
        'DRAFT',
      ])
      .exactOptional()
      .openapi({ description: 'Third-party placement status.' }),
    subaccountId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Subaccount ID of this placement. This field can be left blank.' }),
    tagFormats: z
      .array(
        z.enum([
          'PLACEMENT_TAG_STANDARD',
          'PLACEMENT_TAG_IFRAME_JAVASCRIPT',
          'PLACEMENT_TAG_IFRAME_ILAYER',
          'PLACEMENT_TAG_INTERNAL_REDIRECT',
          'PLACEMENT_TAG_JAVASCRIPT',
          'PLACEMENT_TAG_INTERSTITIAL_IFRAME_JAVASCRIPT',
          'PLACEMENT_TAG_INTERSTITIAL_INTERNAL_REDIRECT',
          'PLACEMENT_TAG_INTERSTITIAL_JAVASCRIPT',
          'PLACEMENT_TAG_CLICK_COMMANDS',
          'PLACEMENT_TAG_INSTREAM_VIDEO_PREFETCH',
          'PLACEMENT_TAG_TRACKING',
          'PLACEMENT_TAG_TRACKING_IFRAME',
          'PLACEMENT_TAG_TRACKING_JAVASCRIPT',
          'PLACEMENT_TAG_INSTREAM_VIDEO_PREFETCH_VAST_3',
          'PLACEMENT_TAG_IFRAME_JAVASCRIPT_LEGACY',
          'PLACEMENT_TAG_JAVASCRIPT_LEGACY',
          'PLACEMENT_TAG_INTERSTITIAL_IFRAME_JAVASCRIPT_LEGACY',
          'PLACEMENT_TAG_INTERSTITIAL_JAVASCRIPT_LEGACY',
          'PLACEMENT_TAG_INSTREAM_VIDEO_PREFETCH_VAST_4',
          'PLACEMENT_TAG_TRACKING_THIRD_PARTY_MEASUREMENT',
        ]),
      )
      .exactOptional()
      .openapi({
        description:
          'Tag formats to generate for this placement. This field is required on insertion. Acceptable values are: - "PLACEMENT_TAG_STANDARD" - "PLACEMENT_TAG_IFRAME_JAVASCRIPT" - "PLACEMENT_TAG_IFRAME_ILAYER" - "PLACEMENT_TAG_INTERNAL_REDIRECT" - "PLACEMENT_TAG_JAVASCRIPT" - "PLACEMENT_TAG_INTERSTITIAL_IFRAME_JAVASCRIPT" - "PLACEMENT_TAG_INTERSTITIAL_INTERNAL_REDIRECT" - "PLACEMENT_TAG_INTERSTITIAL_JAVASCRIPT" - "PLACEMENT_TAG_CLICK_COMMANDS" - "PLACEMENT_TAG_INSTREAM_VIDEO_PREFETCH" - "PLACEMENT_TAG_INSTREAM_VIDEO_PREFETCH_VAST_3" - "PLACEMENT_TAG_INSTREAM_VIDEO_PREFETCH_VAST_4" - "PLACEMENT_TAG_TRACKING" - "PLACEMENT_TAG_TRACKING_IFRAME" - "PLACEMENT_TAG_TRACKING_JAVASCRIPT" ',
      }),
    tagSetting: TagSettingSchema.exactOptional().openapi({
      description: 'Tag settings for this placement.',
    }),
    videoActiveViewOptOut: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether Verification and ActiveView are disabled for in-stream video creatives for this placement. The same setting videoActiveViewOptOut exists on the site level -- the opt out occurs if either of these settings are true. These settings are distinct from DirectorySites.settings.activeViewOptOut or Sites.siteSettings.activeViewOptOut which only apply to display ads. However, Accounts.activeViewOptOut opts out both video traffic, as well as display ads, from Verification and ActiveView.',
      }),
    videoSettings: VideoSettingsSchema.exactOptional().openapi({
      description:
        'A collection of settings which affect video creatives served through this placement. Applicable to placements with IN_STREAM_VIDEO compatibility.',
    }),
    vpaidAdapterChoice: z
      .enum(['DEFAULT', 'FLASH', 'HTML5', 'BOTH'])
      .exactOptional()
      .openapi({
        description:
          'VPAID adapter setting for this placement. Controls which VPAID format the measurement adapter will use for in-stream video creatives assigned to this placement. *Note:* Flash is no longer supported. This field now defaults to HTML5 when the following values are provided: FLASH, BOTH.',
      }),
  })
  .openapi({ description: 'Contains properties of a placement.', required: [] })
  .openapi('Placement')

const PlacementGroupSchema = z
  .object({
    accountId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Account ID of this placement group. This is a read-only field that can be left blank.',
      }),
    advertiserId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Advertiser ID of this placement group. This is a required field on insertion.',
      }),
    advertiserIdDimensionValue: DimensionValueSchema.exactOptional().openapi({
      description:
        'Dimension value for the ID of the advertiser. This is a read-only, auto-generated field.',
    }),
    archived: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this placement group is archived.' }),
    campaignId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Campaign ID of this placement group. This field is required on insertion.',
      }),
    campaignIdDimensionValue: DimensionValueSchema.exactOptional().openapi({
      description:
        'Dimension value for the ID of the campaign. This is a read-only, auto-generated field.',
    }),
    childPlacementIds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'IDs of placements which are assigned to this placement group. This is a read-only, auto-generated field.',
      }),
    comment: z
      .string()
      .exactOptional()
      .openapi({ description: 'Comments for this placement group.' }),
    contentCategoryId: z
      .string()
      .exactOptional()
      .openapi({ description: 'ID of the content category assigned to this placement group.' }),
    createInfo: LastModifiedInfoSchema.exactOptional().openapi({
      description:
        'Information about the creation of this placement group. This is a read-only field.',
    }),
    directorySiteId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Directory site ID associated with this placement group. On insert, you must set either this field or the site_id field to specify the site associated with this placement group. This is a required field that is read-only after insertion.',
      }),
    directorySiteIdDimensionValue: DimensionValueSchema.exactOptional().openapi({
      description:
        'Dimension value for the ID of the directory site. This is a read-only, auto-generated field.',
    }),
    externalId: z
      .string()
      .exactOptional()
      .openapi({ description: 'External ID for this placement.' }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'ID of this placement group. This is a read-only, auto-generated field.',
      }),
    idDimensionValue: DimensionValueSchema.exactOptional().openapi({
      description:
        'Dimension value for the ID of this placement group. This is a read-only, auto-generated field.',
    }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "dfareporting#placementGroup".',
      }),
    lastModifiedInfo: LastModifiedInfoSchema.exactOptional().openapi({
      description:
        'Information about the most recent modification of this placement group. This is a read-only field.',
    }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Name of this placement group. This is a required field and must be less than 256 characters long.',
      }),
    placementGroupType: z
      .enum(['PLACEMENT_PACKAGE', 'PLACEMENT_ROADBLOCK'])
      .exactOptional()
      .openapi({
        description:
          'Type of this placement group. A package is a simple group of placements that acts as a single pricing point for a group of tags. A roadblock is a group of placements that not only acts as a single pricing point, but also assumes that all the tags in it will be served at the same time. A roadblock requires one of its assigned placements to be marked as primary for reporting. This field is required on insertion.',
      }),
    placementStrategyId: z
      .string()
      .exactOptional()
      .openapi({ description: 'ID of the placement strategy assigned to this placement group.' }),
    pricingSchedule: PricingScheduleSchema.exactOptional().openapi({
      description: 'Pricing schedule of this placement group. This field is required on insertion.',
    }),
    primaryPlacementId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'ID of the primary placement, used to calculate the media cost of a roadblock (placement group). Modifying this field will automatically modify the primary field on all affected roadblock child placements.',
      }),
    primaryPlacementIdDimensionValue: DimensionValueSchema.exactOptional().openapi({
      description:
        'Dimension value for the ID of the primary placement. This is a read-only, auto-generated field.',
    }),
    siteId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Site ID associated with this placement group. On insert, you must set either this field or the directorySiteId field to specify the site associated with this placement group. This is a required field that is read-only after insertion.',
      }),
    siteIdDimensionValue: DimensionValueSchema.exactOptional().openapi({
      description:
        'Dimension value for the ID of the site. This is a read-only, auto-generated field.',
    }),
    subaccountId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Subaccount ID of this placement group. This is a read-only field that can be left blank.',
      }),
  })
  .openapi({ description: 'Contains properties of a package or roadblock.', required: [] })
  .openapi('PlacementGroup')

const PlacementGroupsListResponseSchema = z
  .object({
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "dfareporting#placementGroupsListResponse".',
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'Pagination token to be used for the next list operation.' }),
    placementGroups: z
      .array(PlacementGroupSchema)
      .exactOptional()
      .openapi({ description: 'Placement group collection.' }),
  })
  .openapi({ description: 'Placement Group List Response', required: [] })
  .openapi('PlacementGroupsListResponse')

const PlacementStrategySchema = z
  .object({
    accountId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Account ID of this placement strategy.This is a read-only field that can be left blank.',
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'ID of this placement strategy. This is a read-only, auto-generated field.',
      }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "dfareporting#placementStrategy".',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Name of this placement strategy. This is a required field. It must be less than 256 characters long and unique among placement strategies of the same account.',
      }),
  })
  .openapi({ description: 'Contains properties of a placement strategy.', required: [] })
  .openapi('PlacementStrategy')

const PlacementStrategiesListResponseSchema = z
  .object({
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "dfareporting#placementStrategiesListResponse".',
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'Pagination token to be used for the next list operation.' }),
    placementStrategies: z
      .array(PlacementStrategySchema)
      .exactOptional()
      .openapi({ description: 'Placement strategy collection.' }),
  })
  .openapi({ description: 'Placement Strategy List Response', required: [] })
  .openapi('PlacementStrategiesListResponse')

const TagDataSchema = z
  .object({
    adId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Ad associated with this placement tag. Applicable only when format is PLACEMENT_TAG_TRACKING.',
      }),
    clickTag: z.string().exactOptional().openapi({ description: 'Tag string to record a click.' }),
    creativeId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Creative associated with this placement tag. Applicable only when format is PLACEMENT_TAG_TRACKING.',
      }),
    format: z
      .enum([
        'PLACEMENT_TAG_STANDARD',
        'PLACEMENT_TAG_IFRAME_JAVASCRIPT',
        'PLACEMENT_TAG_IFRAME_ILAYER',
        'PLACEMENT_TAG_INTERNAL_REDIRECT',
        'PLACEMENT_TAG_JAVASCRIPT',
        'PLACEMENT_TAG_INTERSTITIAL_IFRAME_JAVASCRIPT',
        'PLACEMENT_TAG_INTERSTITIAL_INTERNAL_REDIRECT',
        'PLACEMENT_TAG_INTERSTITIAL_JAVASCRIPT',
        'PLACEMENT_TAG_CLICK_COMMANDS',
        'PLACEMENT_TAG_INSTREAM_VIDEO_PREFETCH',
        'PLACEMENT_TAG_TRACKING',
        'PLACEMENT_TAG_TRACKING_IFRAME',
        'PLACEMENT_TAG_TRACKING_JAVASCRIPT',
        'PLACEMENT_TAG_INSTREAM_VIDEO_PREFETCH_VAST_3',
        'PLACEMENT_TAG_IFRAME_JAVASCRIPT_LEGACY',
        'PLACEMENT_TAG_JAVASCRIPT_LEGACY',
        'PLACEMENT_TAG_INTERSTITIAL_IFRAME_JAVASCRIPT_LEGACY',
        'PLACEMENT_TAG_INTERSTITIAL_JAVASCRIPT_LEGACY',
        'PLACEMENT_TAG_INSTREAM_VIDEO_PREFETCH_VAST_4',
        'PLACEMENT_TAG_TRACKING_THIRD_PARTY_MEASUREMENT',
      ])
      .exactOptional()
      .openapi({ description: 'TagData tag format of this tag.' }),
    impressionTag: z
      .string()
      .exactOptional()
      .openapi({ description: 'Tag string for serving an ad.' }),
  })
  .openapi({ description: 'Placement Tag Data', required: [] })
  .openapi('TagData')

const PlacementTagSchema = z
  .object({
    placementId: z.string().exactOptional().openapi({ description: 'Placement ID' }),
    tagDatas: z
      .array(TagDataSchema)
      .exactOptional()
      .openapi({ description: 'Tags generated for this placement.' }),
  })
  .openapi({ description: 'Placement Tag', required: [] })
  .openapi('PlacementTag')

const PlacementsGenerateTagsResponseSchema = z
  .object({
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "dfareporting#placementsGenerateTagsResponse".',
      }),
    placementTags: z
      .array(PlacementTagSchema)
      .exactOptional()
      .openapi({ description: 'Set of generated tags for the specified placements.' }),
  })
  .openapi({ description: 'Placement GenerateTags Response', required: [] })
  .openapi('PlacementsGenerateTagsResponse')

const PlacementsListResponseSchema = z
  .object({
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "dfareporting#placementsListResponse".',
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'Pagination token to be used for the next list operation.' }),
    placements: z
      .array(PlacementSchema)
      .exactOptional()
      .openapi({ description: 'Placement collection.' }),
  })
  .openapi({ description: 'Placement List Response', required: [] })
  .openapi('PlacementsListResponse')

const PlatformTypesListResponseSchema = z
  .object({
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "dfareporting#platformTypesListResponse".',
      }),
    platformTypes: z
      .array(PlatformTypeSchema)
      .exactOptional()
      .openapi({ description: 'Platform type collection.' }),
  })
  .openapi({ description: 'Platform Type List Response', required: [] })
  .openapi('PlatformTypesListResponse')

const PostalCodesListResponseSchema = z
  .object({
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "dfareporting#postalCodesListResponse".',
      }),
    postalCodes: z
      .array(PostalCodeSchema)
      .exactOptional()
      .openapi({ description: 'Postal code collection.' }),
  })
  .openapi({ description: 'Postal Code List Response', required: [] })
  .openapi('PostalCodesListResponse')

const ProjectSchema = z
  .object({
    accountId: z.string().exactOptional().openapi({ description: 'Account ID of this project.' }),
    advertiserId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Advertiser ID of this project.' }),
    audienceAgeGroup: z
      .enum([
        'PLANNING_AUDIENCE_AGE_18_24',
        'PLANNING_AUDIENCE_AGE_25_34',
        'PLANNING_AUDIENCE_AGE_35_44',
        'PLANNING_AUDIENCE_AGE_45_54',
        'PLANNING_AUDIENCE_AGE_55_64',
        'PLANNING_AUDIENCE_AGE_65_OR_MORE',
        'PLANNING_AUDIENCE_AGE_UNKNOWN',
      ])
      .exactOptional()
      .openapi({ description: 'Audience age group of this project.' }),
    audienceGender: z
      .enum(['PLANNING_AUDIENCE_GENDER_MALE', 'PLANNING_AUDIENCE_GENDER_FEMALE'])
      .exactOptional()
      .openapi({ description: 'Audience gender of this project.' }),
    budget: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Budget of this project in the currency specified by the current account. The value stored in this field represents only the non-fractional amount. For example, for USD, the smallest value that can be represented by this field is 1 US dollar.',
      }),
    clientBillingCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'Client billing code of this project.' }),
    clientName: z.string().exactOptional().openapi({ description: 'Name of the project client.' }),
    endDate: z.iso.date().exactOptional(),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'ID of this project. This is a read-only, auto-generated field.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "dfareporting#project".',
      }),
    lastModifiedInfo: LastModifiedInfoSchema.exactOptional().openapi({
      description: 'Information about the most recent modification of this project.',
    }),
    name: z.string().exactOptional().openapi({ description: 'Name of this project.' }),
    overview: z.string().exactOptional().openapi({ description: 'Overview of this project.' }),
    startDate: z.iso.date().exactOptional(),
    subaccountId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Subaccount ID of this project.' }),
    targetClicks: z
      .string()
      .exactOptional()
      .openapi({ description: 'Number of clicks that the advertiser is targeting.' }),
    targetConversions: z
      .string()
      .exactOptional()
      .openapi({ description: 'Number of conversions that the advertiser is targeting.' }),
    targetCpaNanos: z
      .string()
      .exactOptional()
      .openapi({ description: 'CPA that the advertiser is targeting.' }),
    targetCpcNanos: z
      .string()
      .exactOptional()
      .openapi({ description: 'CPC that the advertiser is targeting.' }),
    targetCpmActiveViewNanos: z
      .string()
      .exactOptional()
      .openapi({ description: 'vCPM from Active View that the advertiser is targeting.' }),
    targetCpmNanos: z
      .string()
      .exactOptional()
      .openapi({ description: 'CPM that the advertiser is targeting.' }),
    targetImpressions: z
      .string()
      .exactOptional()
      .openapi({ description: 'Number of impressions that the advertiser is targeting.' }),
  })
  .openapi({ description: 'Contains properties of a Planning project.', required: [] })
  .openapi('Project')

const ProjectsListResponseSchema = z
  .object({
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "dfareporting#projectsListResponse".',
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'Pagination token to be used for the next list operation.' }),
    projects: z
      .array(ProjectSchema)
      .exactOptional()
      .openapi({ description: 'Project collection.' }),
  })
  .openapi({ description: 'Project List Response', required: [] })
  .openapi('ProjectsListResponse')

const RecipientSchema = z
  .object({
    deliveryType: z
      .enum(['LINK', 'ATTACHMENT'])
      .exactOptional()
      .openapi({ description: 'The delivery type for the recipient.' }),
    email: z
      .string()
      .exactOptional()
      .openapi({ description: 'The email address of the recipient.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The kind of resource this is, in this case dfareporting#recipient.',
      }),
  })
  .openapi({ description: 'Represents a recipient.', required: [] })
  .openapi('Recipient')

const RegionsListResponseSchema = z
  .object({
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "dfareporting#regionsListResponse".',
      }),
    regions: z.array(RegionSchema).exactOptional().openapi({ description: 'Region collection.' }),
  })
  .openapi({ description: 'Region List Response', required: [] })
  .openapi('RegionsListResponse')

const RemarketingListSchema = z
  .object({
    accountId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Account ID of this remarketing list. This is a read-only, auto-generated field that is only returned in GET requests.',
      }),
    active: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this remarketing list is active.' }),
    advertiserId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Dimension value for the advertiser ID that owns this remarketing list. This is a required field.',
      }),
    advertiserIdDimensionValue: DimensionValueSchema.exactOptional().openapi({
      description:
        'Dimension value for the ID of the advertiser. This is a read-only, auto-generated field.',
    }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'Remarketing list description.' }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Remarketing list ID. This is a read-only, auto-generated field.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "dfareporting#remarketingList".',
      }),
    lifeSpan: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Number of days that a user should remain in the remarketing list without an impression. Acceptable values are 1 to 540, inclusive.',
      }),
    listPopulationRule: ListPopulationRuleSchema.exactOptional().openapi({
      description: 'Rule used to populate the remarketing list with users.',
    }),
    listSize: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Number of users currently in the list. This is a read-only field.',
      }),
    listSource: z
      .enum([
        'REMARKETING_LIST_SOURCE_OTHER',
        'REMARKETING_LIST_SOURCE_ADX',
        'REMARKETING_LIST_SOURCE_DFP',
        'REMARKETING_LIST_SOURCE_XFP',
        'REMARKETING_LIST_SOURCE_DFA',
        'REMARKETING_LIST_SOURCE_GA',
        'REMARKETING_LIST_SOURCE_YOUTUBE',
        'REMARKETING_LIST_SOURCE_DBM',
        'REMARKETING_LIST_SOURCE_GPLUS',
        'REMARKETING_LIST_SOURCE_DMP',
        'REMARKETING_LIST_SOURCE_PLAY_STORE',
      ])
      .exactOptional()
      .openapi({ description: 'Product from which this remarketing list was originated.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Name of the remarketing list. This is a required field. Must be no greater than 128 characters long.',
      }),
    subaccountId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Subaccount ID of this remarketing list. This is a read-only, auto-generated field that is only returned in GET requests.',
      }),
  })
  .openapi({
    description:
      'Contains properties of a remarketing list. Remarketing enables you to create lists of users who have performed specific actions on a site, then target ads to members of those lists. This resource can be used to manage remarketing lists that are owned by your advertisers. To see all remarketing lists that are visible to your advertisers, including those that are shared to your advertiser or account, use the TargetableRemarketingLists resource.',
    required: [],
  })
  .openapi('RemarketingList')

const RemarketingListShareSchema = z
  .object({
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "dfareporting#remarketingListShare".',
      }),
    remarketingListId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Remarketing list ID. This is a read-only, auto-generated field.' }),
    sharedAccountIds: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Accounts that the remarketing list is shared with.' }),
    sharedAdvertiserIds: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Advertisers that the remarketing list is shared with.' }),
  })
  .openapi({
    description:
      "Contains properties of a remarketing list's sharing information. Sharing allows other accounts or advertisers to target to your remarketing lists. This resource can be used to manage remarketing list sharing to other accounts and advertisers.",
    required: [],
  })
  .openapi('RemarketingListShare')

const RemarketingListsListResponseSchema = z
  .object({
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "dfareporting#remarketingListsListResponse".',
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'Pagination token to be used for the next list operation.' }),
    remarketingLists: z
      .array(RemarketingListSchema)
      .exactOptional()
      .openapi({ description: 'Remarketing list collection.' }),
  })
  .openapi({ description: 'Remarketing list response', required: [] })
  .openapi('RemarketingListsListResponse')

const SortedDimensionSchema = z
  .object({
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The kind of resource this is, in this case dfareporting#sortedDimension.',
      }),
    name: z.string().exactOptional().openapi({ description: 'The name of the dimension.' }),
    sortOrder: z
      .enum(['ASCENDING', 'DESCENDING'])
      .exactOptional()
      .openapi({ description: 'An optional sort order for the dimension column.' }),
  })
  .openapi({ description: 'Represents a sorted dimension.', required: [] })
  .openapi('SortedDimension')

const ReportSchema = z
  .object({
    accountId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The account ID to which this report belongs.' }),
    criteria: z
      .object({
        activities: ActivitiesSchema.exactOptional().openapi({ description: 'Activity group.' }),
        customRichMediaEvents: CustomRichMediaEventsSchema.exactOptional().openapi({
          description: 'Custom Rich Media Events group.',
        }),
        dateRange: DateRangeSchema.exactOptional().openapi({
          description: 'The date range for which this report should be run.',
        }),
        dimensionFilters: z
          .array(DimensionValueSchema)
          .exactOptional()
          .openapi({
            description:
              'The list of filters on which dimensions are filtered. Filters for different dimensions are ANDed, filters for the same dimension are grouped together and ORed.',
          }),
        dimensions: z
          .array(SortedDimensionSchema)
          .exactOptional()
          .openapi({ description: 'The list of standard dimensions the report should include.' }),
        metricNames: z
          .array(z.string())
          .exactOptional()
          .openapi({ description: 'The list of names of metrics the report should include.' }),
      })
      .exactOptional()
      .openapi({
        description: 'The report criteria for a report of type "STANDARD".',
        required: [],
      }),
    crossDimensionReachCriteria: z
      .object({
        breakdown: z
          .array(SortedDimensionSchema)
          .exactOptional()
          .openapi({ description: 'The list of dimensions the report should include.' }),
        dateRange: DateRangeSchema.exactOptional().openapi({
          description: 'The date range this report should be run for.',
        }),
        dimension: z
          .enum(['ADVERTISER', 'CAMPAIGN', 'SITE_BY_ADVERTISER', 'SITE_BY_CAMPAIGN'])
          .exactOptional()
          .openapi({ description: 'The dimension option.' }),
        dimensionFilters: z
          .array(DimensionValueSchema)
          .exactOptional()
          .openapi({ description: 'The list of filters on which dimensions are filtered.' }),
        metricNames: z
          .array(z.string())
          .exactOptional()
          .openapi({ description: 'The list of names of metrics the report should include.' }),
        overlapMetricNames: z
          .array(z.string())
          .exactOptional()
          .openapi({
            description: 'The list of names of overlap metrics the report should include.',
          }),
        pivoted: z
          .boolean()
          .exactOptional()
          .openapi({ description: 'Whether the report is pivoted or not. Defaults to true.' }),
      })
      .exactOptional()
      .openapi({
        description: 'The report criteria for a report of type "CROSS_DIMENSION_REACH".',
        required: [],
      }),
    delivery: z
      .object({
        emailOwner: z
          .boolean()
          .exactOptional()
          .openapi({ description: 'Whether the report should be emailed to the report owner.' }),
        emailOwnerDeliveryType: z
          .enum(['LINK', 'ATTACHMENT'])
          .exactOptional()
          .openapi({ description: 'The type of delivery for the owner to receive, if enabled.' }),
        message: z
          .string()
          .exactOptional()
          .openapi({ description: 'The message to be sent with each email.' }),
        recipients: z
          .array(RecipientSchema)
          .exactOptional()
          .openapi({ description: 'The list of recipients to which to email the report.' }),
      })
      .exactOptional()
      .openapi({ description: "The report's email delivery settings.", required: [] }),
    etag: z
      .string()
      .exactOptional()
      .openapi({ description: 'The eTag of this response for caching purposes.' }),
    fileName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The filename used when generating report files for this report.' }),
    floodlightCriteria: z
      .object({
        customRichMediaEvents: z
          .array(DimensionValueSchema)
          .exactOptional()
          .openapi({ description: 'The list of custom rich media events to include.' }),
        dateRange: DateRangeSchema.exactOptional().openapi({
          description: 'The date range this report should be run for.',
        }),
        dimensionFilters: z
          .array(DimensionValueSchema)
          .exactOptional()
          .openapi({
            description:
              'The list of filters on which dimensions are filtered. Filters for different dimensions are ANDed, filters for the same dimension are grouped together and ORed.',
          }),
        dimensions: z
          .array(SortedDimensionSchema)
          .exactOptional()
          .openapi({ description: 'The list of dimensions the report should include.' }),
        floodlightConfigId: DimensionValueSchema.exactOptional().openapi({
          description:
            "The floodlight ID for which to show data in this report. All advertisers associated with that ID will automatically be added. The dimension of the value needs to be 'dfa:floodlightConfigId'.",
        }),
        metricNames: z
          .array(z.string())
          .exactOptional()
          .openapi({ description: 'The list of names of metrics the report should include.' }),
        reportProperties: z
          .object({
            includeAttributedIPConversions: z
              .boolean()
              .exactOptional()
              .openapi({
                description:
                  'Include conversions that have no cookie, but do have an exposure path.',
              }),
            includeUnattributedCookieConversions: z
              .boolean()
              .exactOptional()
              .openapi({
                description:
                  'Include conversions of users with a DoubleClick cookie but without an exposure. That means the user did not click or see an ad from the advertiser within the Floodlight group, or that the interaction happened outside the lookback window.',
              }),
            includeUnattributedIPConversions: z
              .boolean()
              .exactOptional()
              .openapi({
                description:
                  'Include conversions that have no associated cookies and no exposures. It’s therefore impossible to know how the user was exposed to your ads during the lookback window prior to a conversion.',
              }),
          })
          .exactOptional()
          .openapi({ description: 'The properties of the report.', required: [] }),
      })
      .exactOptional()
      .openapi({
        description: 'The report criteria for a report of type "FLOODLIGHT".',
        required: [],
      }),
    format: z
      .enum(['CSV', 'EXCEL'])
      .exactOptional()
      .openapi({
        description:
          'The output format of the report. If not specified, default format is "CSV". Note that the actual format in the completed report file might differ if for instance the report\'s size exceeds the format\'s capabilities. "CSV" will then be the fallback format.',
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique ID identifying this report resource.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({ description: 'The kind of resource this is, in this case dfareporting#report.' }),
    lastModifiedTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The timestamp (in milliseconds since epoch) of when this report was last modified.',
      }),
    name: z.string().exactOptional().openapi({ description: 'The name of the report.' }),
    ownerProfileId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The user profile id of the owner of this report.' }),
    pathAttributionCriteria: z
      .object({
        activityFilters: z
          .array(DimensionValueSchema)
          .exactOptional()
          .openapi({ description: "The list of 'dfa:activity' values to filter on." }),
        customChannelGrouping: ChannelGroupingSchema.exactOptional().openapi({
          description: 'Channel Grouping.',
        }),
        dateRange: DateRangeSchema.exactOptional().openapi({
          description: 'The date range this report should be run for.',
        }),
        dimensions: z
          .array(SortedDimensionSchema)
          .exactOptional()
          .openapi({ description: 'The list of dimensions the report should include.' }),
        floodlightConfigId: DimensionValueSchema.exactOptional().openapi({
          description:
            "The floodlight ID for which to show data in this report. All advertisers associated with that ID will automatically be added. The dimension of the value needs to be 'dfa:floodlightConfigId'.",
        }),
        metricNames: z
          .array(z.string())
          .exactOptional()
          .openapi({ description: 'The list of names of metrics the report should include.' }),
        pathFilters: z
          .array(PathFilterSchema)
          .exactOptional()
          .openapi({ description: 'Path Filters.' }),
      })
      .exactOptional()
      .openapi({
        description: 'The report criteria for a report of type "PATH_ATTRIBUTION".',
        required: [],
      }),
    pathCriteria: z
      .object({
        activityFilters: z
          .array(DimensionValueSchema)
          .exactOptional()
          .openapi({ description: "The list of 'dfa:activity' values to filter on." }),
        customChannelGrouping: ChannelGroupingSchema.exactOptional().openapi({
          description: 'Channel Grouping.',
        }),
        dateRange: DateRangeSchema.exactOptional().openapi({
          description: 'The date range this report should be run for.',
        }),
        dimensions: z
          .array(SortedDimensionSchema)
          .exactOptional()
          .openapi({ description: 'The list of dimensions the report should include.' }),
        floodlightConfigId: DimensionValueSchema.exactOptional().openapi({
          description:
            "The floodlight ID for which to show data in this report. All advertisers associated with that ID will automatically be added. The dimension of the value needs to be 'dfa:floodlightConfigId'.",
        }),
        metricNames: z
          .array(z.string())
          .exactOptional()
          .openapi({ description: 'The list of names of metrics the report should include.' }),
        pathFilters: z
          .array(PathFilterSchema)
          .exactOptional()
          .openapi({ description: 'Path Filters.' }),
      })
      .exactOptional()
      .openapi({ description: 'The report criteria for a report of type "PATH".', required: [] }),
    pathToConversionCriteria: z
      .object({
        activityFilters: z
          .array(DimensionValueSchema)
          .exactOptional()
          .openapi({ description: "The list of 'dfa:activity' values to filter on." }),
        conversionDimensions: z
          .array(SortedDimensionSchema)
          .exactOptional()
          .openapi({ description: 'The list of conversion dimensions the report should include.' }),
        customFloodlightVariables: z
          .array(SortedDimensionSchema)
          .exactOptional()
          .openapi({
            description: 'The list of custom floodlight variables the report should include.',
          }),
        customRichMediaEvents: z
          .array(DimensionValueSchema)
          .exactOptional()
          .openapi({ description: 'The list of custom rich media events to include.' }),
        dateRange: DateRangeSchema.exactOptional().openapi({
          description: 'The date range this report should be run for.',
        }),
        floodlightConfigId: DimensionValueSchema.exactOptional().openapi({
          description:
            "The floodlight ID for which to show data in this report. All advertisers associated with that ID will automatically be added. The dimension of the value needs to be 'dfa:floodlightConfigId'.",
        }),
        metricNames: z
          .array(z.string())
          .exactOptional()
          .openapi({ description: 'The list of names of metrics the report should include.' }),
        perInteractionDimensions: z
          .array(SortedDimensionSchema)
          .exactOptional()
          .openapi({
            description: 'The list of per interaction dimensions the report should include.',
          }),
        reportProperties: z
          .object({
            clicksLookbackWindow: z
              .int32()
              .exactOptional()
              .openapi({
                description:
                  'CM360 checks to see if a click interaction occurred within the specified period of time before a conversion. By default the value is pulled from Floodlight or you can manually enter a custom value. Valid values: 1-90.',
              }),
            impressionsLookbackWindow: z
              .int32()
              .exactOptional()
              .openapi({
                description:
                  'CM360 checks to see if an impression interaction occurred within the specified period of time before a conversion. By default the value is pulled from Floodlight or you can manually enter a custom value. Valid values: 1-90.',
              }),
            includeAttributedIPConversions: z
              .boolean()
              .exactOptional()
              .openapi({ description: 'Deprecated: has no effect.' }),
            includeUnattributedCookieConversions: z
              .boolean()
              .exactOptional()
              .openapi({
                description:
                  'Include conversions of users with a DoubleClick cookie but without an exposure. That means the user did not click or see an ad from the advertiser within the Floodlight group, or that the interaction happened outside the lookback window.',
              }),
            includeUnattributedIPConversions: z
              .boolean()
              .exactOptional()
              .openapi({
                description:
                  'Include conversions that have no associated cookies and no exposures. It’s therefore impossible to know how the user was exposed to your ads during the lookback window prior to a conversion.',
              }),
            maximumClickInteractions: z
              .int32()
              .exactOptional()
              .openapi({
                description:
                  'The maximum number of click interactions to include in the report. Advertisers currently paying for E2C reports get up to 200 (100 clicks, 100 impressions). If another advertiser in your network is paying for E2C, you can have up to 5 total exposures per report.',
              }),
            maximumImpressionInteractions: z
              .int32()
              .exactOptional()
              .openapi({
                description:
                  'The maximum number of click interactions to include in the report. Advertisers currently paying for E2C reports get up to 200 (100 clicks, 100 impressions). If another advertiser in your network is paying for E2C, you can have up to 5 total exposures per report.',
              }),
            maximumInteractionGap: z
              .int32()
              .exactOptional()
              .openapi({
                description:
                  'The maximum amount of time that can take place between interactions (clicks or impressions) by the same user. Valid values: 1-90.',
              }),
            pivotOnInteractionPath: z
              .boolean()
              .exactOptional()
              .openapi({ description: 'Enable pivoting on interaction path.' }),
          })
          .exactOptional()
          .openapi({ description: 'The properties of the report.', required: [] }),
      })
      .exactOptional()
      .openapi({
        description: 'The report criteria for a report of type "PATH_TO_CONVERSION".',
        required: [],
      }),
    reachCriteria: z
      .object({
        activities: ActivitiesSchema.exactOptional().openapi({ description: 'Activity group.' }),
        customRichMediaEvents: CustomRichMediaEventsSchema.exactOptional().openapi({
          description: 'Custom Rich Media Events group.',
        }),
        dateRange: DateRangeSchema.exactOptional().openapi({
          description: 'The date range this report should be run for.',
        }),
        dimensionFilters: z
          .array(DimensionValueSchema)
          .exactOptional()
          .openapi({
            description:
              'The list of filters on which dimensions are filtered. Filters for different dimensions are ANDed, filters for the same dimension are grouped together and ORed.',
          }),
        dimensions: z
          .array(SortedDimensionSchema)
          .exactOptional()
          .openapi({ description: 'The list of dimensions the report should include.' }),
        enableAllDimensionCombinations: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'Whether to enable all reach dimension combinations in the report. Defaults to false. If enabled, the date range of the report should be within the last 42 days.',
          }),
        metricNames: z
          .array(z.string())
          .exactOptional()
          .openapi({ description: 'The list of names of metrics the report should include.' }),
        reachByFrequencyMetricNames: z
          .array(z.string())
          .exactOptional()
          .openapi({
            description:
              'The list of names of Reach By Frequency metrics the report should include.',
          }),
      })
      .exactOptional()
      .openapi({ description: 'The report criteria for a report of type "REACH".', required: [] }),
    schedule: z
      .object({
        active: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'Whether the schedule is active or not. Must be set to either true or false.',
          }),
        every: z
          .int32()
          .exactOptional()
          .openapi({
            description:
              'Defines every how many days, weeks or months the report should be run. Needs to be set when "repeats" is either "DAILY", "WEEKLY" or "MONTHLY".',
          }),
        expirationDate: z.iso.date().exactOptional(),
        repeats: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'The interval for which the report is repeated. Note: - "DAILY" also requires field "every" to be set. - "WEEKLY" also requires fields "every" and "repeatsOnWeekDays" to be set. - "MONTHLY" also requires fields "every" and "runsOnDayOfMonth" to be set. ',
          }),
        repeatsOnWeekDays: z
          .array(
            z.enum(['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY']),
          )
          .exactOptional()
          .openapi({
            description: 'List of week days "WEEKLY" on which scheduled reports should run.',
          }),
        runsOnDayOfMonth: z
          .enum(['DAY_OF_MONTH', 'WEEK_OF_MONTH'])
          .exactOptional()
          .openapi({
            description:
              'Enum to define for "MONTHLY" scheduled reports whether reports should be repeated on the same day of the month as "startDate" or the same day of the week of the month. Example: If \'startDate\' is Monday, April 2nd 2012 (2012-04-02), "DAY_OF_MONTH" would run subsequent reports on the 2nd of every Month, and "WEEK_OF_MONTH" would run subsequent reports on the first Monday of the month.',
          }),
        startDate: z.iso.date().exactOptional(),
      })
      .exactOptional()
      .openapi({
        description:
          "The report's schedule. Can only be set if the report's 'dateRange' is a relative date range and the relative date range is not \"TODAY\".",
        required: [],
      }),
    subAccountId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The subaccount ID to which this report belongs if applicable.' }),
    type: z
      .enum([
        'STANDARD',
        'REACH',
        'PATH_TO_CONVERSION',
        'CROSS_DIMENSION_REACH',
        'FLOODLIGHT',
        'PATH',
        'PATH_ATTRIBUTION',
      ])
      .exactOptional()
      .openapi({ description: 'The type of the report.' }),
  })
  .openapi({ description: 'Represents a Report resource.', required: [] })
  .openapi('Report')

const ReportListSchema = z
  .object({
    etag: z
      .string()
      .exactOptional()
      .openapi({ description: 'The eTag of this response for caching purposes.' }),
    items: z
      .array(ReportSchema)
      .exactOptional()
      .openapi({ description: 'The reports returned in this response.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({ description: 'The kind of list this is, in this case dfareporting#reportList.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Continuation token used to page through reports. To retrieve the next page of results, set the next request\'s "pageToken" to the value of this field. The page token is only valid for a limited amount of time and should not be persisted.',
      }),
  })
  .openapi({ description: 'Represents the list of reports.', required: [] })
  .openapi('ReportList')

const SiteContactSchema = z
  .object({
    address: z.string().exactOptional().openapi({ description: 'Address of this site contact.' }),
    contactType: z
      .enum(['SALES_PERSON', 'TRAFFICKER'])
      .exactOptional()
      .openapi({ description: 'Site contact type.' }),
    email: z
      .string()
      .exactOptional()
      .openapi({ description: 'Email address of this site contact. This is a required field.' }),
    firstName: z
      .string()
      .exactOptional()
      .openapi({ description: 'First name of this site contact.' }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'ID of this site contact. This is a read-only, auto-generated field.',
      }),
    lastName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Last name of this site contact.' }),
    phone: z
      .string()
      .exactOptional()
      .openapi({ description: 'Primary phone number of this site contact.' }),
    title: z
      .string()
      .exactOptional()
      .openapi({ description: 'Title or designation of this site contact.' }),
  })
  .openapi({ description: 'Site Contact', required: [] })
  .openapi('SiteContact')

const SiteSettingsSchema = z
  .object({
    activeViewOptOut: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether active view creatives are disabled for this site.' }),
    adBlockingOptOut: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether this site opts out of ad blocking. When true, ad blocking is disabled for all placements under the site, regardless of the individual placement settings. When false, the campaign and placement settings take effect.',
      }),
    disableNewCookie: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether new cookies are disabled for this site.' }),
    tagSetting: TagSettingSchema.exactOptional().openapi({
      description: 'Configuration settings for dynamic and image floodlight tags.',
    }),
    videoActiveViewOptOutTemplate: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether Verification and ActiveView for in-stream video creatives are disabled by default for new placements created under this site. This value will be used to populate the placement.videoActiveViewOptOut field, when no value is specified for the new placement.',
      }),
    vpaidAdapterChoiceTemplate: z
      .enum(['DEFAULT', 'FLASH', 'HTML5', 'BOTH'])
      .exactOptional()
      .openapi({
        description:
          "Default VPAID adapter setting for new placements created under this site. This value will be used to populate the placements.vpaidAdapterChoice field, when no value is specified for the new placement. Controls which VPAID format the measurement adapter will use for in-stream video creatives assigned to the placement. The publisher's specifications will typically determine this setting. For VPAID creatives, the adapter format will match the VPAID format (HTML5 VPAID creatives use the HTML5 adapter). *Note:* Flash is no longer supported. This field now defaults to HTML5 when the following values are provided: FLASH, BOTH.",
      }),
  })
  .openapi({ description: 'Site Settings', required: [] })
  .openapi('SiteSettings')

const SiteCompanionSettingSchema = z
  .object({
    companionsDisabled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether companions are disabled for this site template.' }),
    enabledSizes: z
      .array(SizeSchema)
      .exactOptional()
      .openapi({
        description:
          'Allowlist of companion sizes to be served via this site template. Set this list to null or empty to serve all companion sizes.',
      }),
    imageOnly: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether to serve only static images as companions.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "dfareporting#siteCompanionSetting".',
      }),
  })
  .openapi({ description: 'Companion Settings', required: [] })
  .openapi('SiteCompanionSetting')

const SiteSkippableSettingSchema = z
  .object({
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "dfareporting#siteSkippableSetting".',
      }),
    progressOffset: VideoOffsetSchema.exactOptional().openapi({
      description:
        'Amount of time to play videos served to this site template before counting a view. Applicable when skippable is true.',
    }),
    skipOffset: VideoOffsetSchema.exactOptional().openapi({
      description:
        'Amount of time to play videos served to this site before the skip button should appear. Applicable when skippable is true.',
    }),
    skippable: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether the user can skip creatives served to this site. This will act as default for new placements created under this site.',
      }),
  })
  .openapi({ description: 'Skippable Settings', required: [] })
  .openapi('SiteSkippableSetting')

const SiteTranscodeSettingSchema = z
  .object({
    enabledVideoFormats: z
      .array(z.int32())
      .exactOptional()
      .openapi({
        description:
          'Allowlist of video formats to be served to this site template. Set this list to null or empty to serve all video formats.',
      }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "dfareporting#siteTranscodeSetting".',
      }),
  })
  .openapi({ description: 'Transcode Settings', required: [] })
  .openapi('SiteTranscodeSetting')

const SiteVideoSettingsSchema = z
  .object({
    companionSettings: SiteCompanionSettingSchema.exactOptional().openapi({
      description: 'Settings for the companion creatives of video creatives served to this site.',
    }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "dfareporting#siteVideoSettings".',
      }),
    obaEnabled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether OBA icons are enabled for this placement.' }),
    obaSettings: ObaIconSchema.exactOptional().openapi({
      description:
        'Settings for the OBA icon of video creatives served to this site. This will act as default for new placements created under this site.',
    }),
    orientation: z
      .enum(['ANY', 'LANDSCAPE', 'PORTRAIT'])
      .exactOptional()
      .openapi({
        description:
          'Orientation of a site template used for video. This will act as default for new placements created under this site.',
      }),
    skippableSettings: SiteSkippableSettingSchema.exactOptional().openapi({
      description:
        'Settings for the skippability of video creatives served to this site. This will act as default for new placements created under this site.',
    }),
    transcodeSettings: SiteTranscodeSettingSchema.exactOptional().openapi({
      description:
        'Settings for the transcodes of video creatives served to this site. This will act as default for new placements created under this site.',
    }),
  })
  .openapi({ description: 'Video Settings', required: [] })
  .openapi('SiteVideoSettings')

const SiteSchema = z
  .object({
    accountId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Account ID of this site. This is a read-only field that can be left blank.',
      }),
    approved: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this site is approved.' }),
    directorySiteId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Directory site associated with this site. This is a required field that is read-only after insertion.',
      }),
    directorySiteIdDimensionValue: DimensionValueSchema.exactOptional().openapi({
      description:
        'Dimension value for the ID of the directory site. This is a read-only, auto-generated field.',
    }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'ID of this site. This is a read-only, auto-generated field.' }),
    idDimensionValue: DimensionValueSchema.exactOptional().openapi({
      description:
        'Dimension value for the ID of this site. This is a read-only, auto-generated field.',
    }),
    keyName: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Key name of this site. This is a read-only, auto-generated field.',
      }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "dfareporting#site".',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Name of this site.This is a required field. Must be less than 128 characters long. If this site is under a subaccount, the name must be unique among sites of the same subaccount. Otherwise, this site is a top-level site, and the name must be unique among top-level sites of the same account.',
      }),
    siteContacts: z
      .array(SiteContactSchema)
      .exactOptional()
      .openapi({ description: 'Site contacts.' }),
    siteSettings: SiteSettingsSchema.exactOptional().openapi({
      description: 'Site-wide settings.',
    }),
    subaccountId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Subaccount ID of this site. This is a read-only field that can be left blank.',
      }),
    videoSettings: SiteVideoSettingsSchema.exactOptional().openapi({
      description:
        'Default video settings for new placements created under this site. This value will be used to populate the placements.videoSettings field, when no value is specified for the new placement.',
    }),
  })
  .openapi({ description: 'Contains properties of a site.', required: [] })
  .openapi('Site')

const SitesListResponseSchema = z
  .object({
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "dfareporting#sitesListResponse".',
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'Pagination token to be used for the next list operation.' }),
    sites: z.array(SiteSchema).exactOptional().openapi({ description: 'Site collection.' }),
  })
  .openapi({ description: 'Site List Response', required: [] })
  .openapi('SitesListResponse')

const SizesListResponseSchema = z
  .object({
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "dfareporting#sizesListResponse".',
      }),
    sizes: z.array(SizeSchema).exactOptional().openapi({ description: 'Size collection.' }),
  })
  .openapi({ description: 'Size List Response', required: [] })
  .openapi('SizesListResponse')

const SubaccountSchema = z
  .object({
    accountId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'ID of the account that contains this subaccount. This is a read-only field that can be left blank.',
      }),
    availablePermissionIds: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'IDs of the available user role permissions for this subaccount.' }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'ID of this subaccount. This is a read-only, auto-generated field.',
      }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "dfareporting#subaccount".',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Name of this subaccount. This is a required field. Must be less than 128 characters long and be unique among subaccounts of the same account.',
      }),
  })
  .openapi({ description: 'Contains properties of a Campaign Manager subaccount.', required: [] })
  .openapi('Subaccount')

const SubaccountsListResponseSchema = z
  .object({
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "dfareporting#subaccountsListResponse".',
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'Pagination token to be used for the next list operation.' }),
    subaccounts: z
      .array(SubaccountSchema)
      .exactOptional()
      .openapi({ description: 'Subaccount collection.' }),
  })
  .openapi({ description: 'Subaccount List Response', required: [] })
  .openapi('SubaccountsListResponse')

const TargetableRemarketingListSchema = z
  .object({
    accountId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Account ID of this remarketing list. This is a read-only, auto-generated field that is only returned in GET requests.',
      }),
    active: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this targetable remarketing list is active.' }),
    advertiserId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Dimension value for the advertiser ID that owns this targetable remarketing list.',
      }),
    advertiserIdDimensionValue: DimensionValueSchema.exactOptional().openapi({
      description: 'Dimension value for the ID of the advertiser.',
    }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'Targetable remarketing list description.' }),
    id: z.string().exactOptional().openapi({ description: 'Targetable remarketing list ID.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "dfareporting#targetableRemarketingList".',
      }),
    lifeSpan: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Number of days that a user should remain in the targetable remarketing list without an impression.',
      }),
    listSize: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Number of users currently in the list. This is a read-only field.',
      }),
    listSource: z
      .enum([
        'REMARKETING_LIST_SOURCE_OTHER',
        'REMARKETING_LIST_SOURCE_ADX',
        'REMARKETING_LIST_SOURCE_DFP',
        'REMARKETING_LIST_SOURCE_XFP',
        'REMARKETING_LIST_SOURCE_DFA',
        'REMARKETING_LIST_SOURCE_GA',
        'REMARKETING_LIST_SOURCE_YOUTUBE',
        'REMARKETING_LIST_SOURCE_DBM',
        'REMARKETING_LIST_SOURCE_GPLUS',
        'REMARKETING_LIST_SOURCE_DMP',
        'REMARKETING_LIST_SOURCE_PLAY_STORE',
      ])
      .exactOptional()
      .openapi({
        description: 'Product from which this targetable remarketing list was originated.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Name of the targetable remarketing list. Is no greater than 128 characters long.',
      }),
    subaccountId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Subaccount ID of this remarketing list. This is a read-only, auto-generated field that is only returned in GET requests.',
      }),
  })
  .openapi({
    description:
      'Contains properties of a targetable remarketing list. Remarketing enables you to create lists of users who have performed specific actions on a site, then target ads to members of those lists. This resource is a read-only view of a remarketing list to be used to faciliate targeting ads to specific lists. Remarketing lists that are owned by your advertisers and those that are shared to your advertisers or account are accessible via this resource. To manage remarketing lists that are owned by your advertisers, use the RemarketingLists resource.',
    required: [],
  })
  .openapi('TargetableRemarketingList')

const TargetableRemarketingListsListResponseSchema = z
  .object({
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "dfareporting#targetableRemarketingListsListResponse".',
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'Pagination token to be used for the next list operation.' }),
    targetableRemarketingLists: z
      .array(TargetableRemarketingListSchema)
      .exactOptional()
      .openapi({ description: 'Targetable remarketing list collection.' }),
  })
  .openapi({ description: 'Targetable remarketing list response', required: [] })
  .openapi('TargetableRemarketingListsListResponse')

const TargetingTemplateSchema = z
  .object({
    accountId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Account ID of this targeting template. This field, if left unset, will be auto-generated on insert and is read-only after insert.',
      }),
    advertiserId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Advertiser ID of this targeting template. This is a required field on insert and is read-only after insert.',
      }),
    advertiserIdDimensionValue: DimensionValueSchema.exactOptional().openapi({
      description:
        'Dimension value for the ID of the advertiser. This is a read-only, auto-generated field.',
    }),
    dayPartTargeting: DayPartTargetingSchema.exactOptional().openapi({
      description: 'Time and day targeting criteria.',
    }),
    geoTargeting: GeoTargetingSchema.exactOptional().openapi({
      description: 'Geographical targeting criteria.',
    }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'ID of this targeting template. This is a read-only, auto-generated field.',
      }),
    keyValueTargetingExpression: KeyValueTargetingExpressionSchema.exactOptional().openapi({
      description: 'Key-value targeting criteria.',
    }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "dfareporting#targetingTemplate".',
      }),
    languageTargeting: LanguageTargetingSchema.exactOptional().openapi({
      description: 'Language targeting criteria.',
    }),
    listTargetingExpression: ListTargetingExpressionSchema.exactOptional().openapi({
      description: 'Remarketing list targeting criteria.',
    }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Name of this targeting template. This field is required. It must be less than 256 characters long and unique within an advertiser.',
      }),
    subaccountId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Subaccount ID of this targeting template. This field, if left unset, will be auto-generated on insert and is read-only after insert.',
      }),
    technologyTargeting: TechnologyTargetingSchema.exactOptional().openapi({
      description: 'Technology platform targeting criteria.',
    }),
  })
  .openapi({
    description:
      'Contains properties of a targeting template. A targeting template encapsulates targeting information which can be reused across multiple ads.',
    required: [],
  })
  .openapi('TargetingTemplate')

const TargetingTemplatesListResponseSchema = z
  .object({
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "dfareporting#targetingTemplatesListResponse".',
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'Pagination token to be used for the next list operation.' }),
    targetingTemplates: z
      .array(TargetingTemplateSchema)
      .exactOptional()
      .openapi({ description: 'Targeting template collection.' }),
  })
  .openapi({ description: 'Targeting Template List Response', required: [] })
  .openapi('TargetingTemplatesListResponse')

const UserProfileSchema = z
  .object({
    accountId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The account ID to which this profile belongs.' }),
    accountName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The account name this profile belongs to.' }),
    etag: z.string().exactOptional().openapi({ description: 'Etag of this resource.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "dfareporting#userProfile".',
      }),
    profileId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique ID of the user profile.' }),
    subAccountId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The sub account ID this profile belongs to if applicable.' }),
    subAccountName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The sub account name this profile belongs to if applicable.' }),
    userName: z.string().exactOptional().openapi({ description: 'The user name.' }),
  })
  .openapi({
    description:
      'A UserProfile resource lets you list all DFA user profiles that are associated with a Google user account. The profile_id needs to be specified in other API requests. ',
    required: [],
  })
  .openapi('UserProfile')

const UserProfileListSchema = z
  .object({
    etag: z.string().exactOptional().openapi({ description: 'Etag of this resource.' }),
    items: z
      .array(UserProfileSchema)
      .exactOptional()
      .openapi({ description: 'The user profiles returned in this response.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "dfareporting#userProfileList".',
      }),
  })
  .openapi({ description: 'Represents the list of user profiles.', required: [] })
  .openapi('UserProfileList')

const UserRolePermissionSchema = z
  .object({
    availability: z
      .enum([
        'NOT_AVAILABLE_BY_DEFAULT',
        'ACCOUNT_BY_DEFAULT',
        'SUBACCOUNT_AND_ACCOUNT_BY_DEFAULT',
        'ACCOUNT_ALWAYS',
        'SUBACCOUNT_AND_ACCOUNT_ALWAYS',
        'USER_PROFILE_ONLY',
      ])
      .exactOptional()
      .openapi({ description: 'Levels of availability for a user role permission.' }),
    id: z.string().exactOptional().openapi({ description: 'ID of this user role permission.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "dfareporting#userRolePermission".',
      }),
    name: z.string().exactOptional().openapi({ description: 'Name of this user role permission.' }),
    permissionGroupId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'ID of the permission group that this user role permission belongs to.',
      }),
  })
  .openapi({ description: 'Contains properties of a user role permission.', required: [] })
  .openapi('UserRolePermission')

const UserRoleSchema = z
  .object({
    accountId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Account ID of this user role. This is a read-only field that can be left blank.',
      }),
    defaultUserRole: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether this is a default user role. Default user roles are created by the system for the account/subaccount and cannot be modified or deleted. Each default user role comes with a basic set of preassigned permissions.',
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'ID of this user role. This is a read-only, auto-generated field.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "dfareporting#userRole".',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Name of this user role. This is a required field. Must be less than 256 characters long. If this user role is under a subaccount, the name must be unique among sites of the same subaccount. Otherwise, this user role is a top-level user role, and the name must be unique among top-level user roles of the same account.',
      }),
    parentUserRoleId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'ID of the user role that this user role is based on or copied from. This is a required field.',
      }),
    permissions: z
      .array(UserRolePermissionSchema)
      .exactOptional()
      .openapi({ description: 'List of permissions associated with this user role.' }),
    subaccountId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Subaccount ID of this user role. This is a read-only field that can be left blank.',
      }),
  })
  .openapi({
    description: 'Contains properties of auser role, which is used to manage user access.',
    required: [],
  })
  .openapi('UserRole')

const UserRolePermissionGroupSchema = z
  .object({
    id: z.string().exactOptional().openapi({ description: 'ID of this user role permission.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "dfareporting#userRolePermissionGroup".',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of this user role permission group.' }),
  })
  .openapi({ description: 'Represents a grouping of related user role permissions.', required: [] })
  .openapi('UserRolePermissionGroup')

const UserRolePermissionGroupsListResponseSchema = z
  .object({
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "dfareporting#userRolePermissionGroupsListResponse".',
      }),
    userRolePermissionGroups: z
      .array(UserRolePermissionGroupSchema)
      .exactOptional()
      .openapi({ description: 'User role permission group collection.' }),
  })
  .openapi({ description: 'User Role Permission Group List Response', required: [] })
  .openapi('UserRolePermissionGroupsListResponse')

const UserRolePermissionsListResponseSchema = z
  .object({
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "dfareporting#userRolePermissionsListResponse".',
      }),
    userRolePermissions: z
      .array(UserRolePermissionSchema)
      .exactOptional()
      .openapi({ description: 'User role permission collection.' }),
  })
  .openapi({ description: 'User Role Permission List Response', required: [] })
  .openapi('UserRolePermissionsListResponse')

const UserRolesListResponseSchema = z
  .object({
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "dfareporting#userRolesListResponse".',
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'Pagination token to be used for the next list operation.' }),
    userRoles: z
      .array(UserRoleSchema)
      .exactOptional()
      .openapi({ description: 'User role collection.' }),
  })
  .openapi({ description: 'User Role List Response', required: [] })
  .openapi('UserRolesListResponse')

const VideoFormatSchema = z
  .object({
    fileType: z
      .enum(['FLV', 'THREEGPP', 'MP4', 'WEBM', 'M3U8'])
      .exactOptional()
      .openapi({ description: 'File type of the video format.' }),
    id: z.int32().exactOptional().openapi({ description: 'ID of the video format.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "dfareporting#videoFormat".',
      }),
    resolution: SizeSchema.exactOptional().openapi({
      description: 'The resolution of this video format.',
    }),
    targetBitRate: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The target bit rate of this video format.' }),
  })
  .openapi({ description: 'Contains information about supported video formats.', required: [] })
  .openapi('VideoFormat')

const VideoFormatsListResponseSchema = z
  .object({
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "dfareporting#videoFormatsListResponse".',
      }),
    videoFormats: z
      .array(VideoFormatSchema)
      .exactOptional()
      .openapi({ description: 'Video format collection.' }),
  })
  .openapi({ description: 'Video Format List Response', required: [] })
  .openapi('VideoFormatsListResponse')

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
        'https://www.googleapis.com/auth/ddmconversions':
          'Manage DoubleClick Digital Marketing conversions',
        'https://www.googleapis.com/auth/dfareporting':
          'View and manage DoubleClick for Advertisers reports',
        'https://www.googleapis.com/auth/dfatrafficking':
          "View and manage your DoubleClick Campaign Manager's (DCM) display ad campaigns",
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
        'https://www.googleapis.com/auth/ddmconversions':
          'Manage DoubleClick Digital Marketing conversions',
        'https://www.googleapis.com/auth/dfareporting':
          'View and manage DoubleClick for Advertisers reports',
        'https://www.googleapis.com/auth/dfatrafficking':
          "View and manage your DoubleClick Campaign Manager's (DCM) display ad campaigns",
      },
      tokenUrl: 'https://accounts.google.com/o/oauth2/token',
    },
  },
  type: 'oauth2',
}

export const getReportsReportIdFilesFileIdRoute = createRoute({
  method: 'get',
  path: '/reports/{reportId}/files/{fileId}',
  tags: ['files'],
  description:
    'Retrieves a report file by its report ID and file ID. This method supports media download.',
  operationId: 'dfareporting.files.get',
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
      reportId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the report.',
            in: 'path',
            name: 'reportId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      fileId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the report file.',
            in: 'path',
            name: 'fileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: FileSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfareporting'],
      Oauth2c: ['https://www.googleapis.com/auth/dfareporting'],
    },
  ],
})

export const getUserprofilesRoute = createRoute({
  method: 'get',
  path: '/userprofiles',
  tags: ['userProfiles'],
  description: 'Retrieves list of user profiles for a user.',
  operationId: 'dfareporting.userProfiles.list',
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
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: UserProfileListSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/ddmconversions'],
      Oauth2c: ['https://www.googleapis.com/auth/ddmconversions'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/dfareporting'],
      Oauth2c: ['https://www.googleapis.com/auth/dfareporting'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})

export const getUserprofilesProfileIdRoute = createRoute({
  method: 'get',
  path: '/userprofiles/{profileId}',
  tags: ['userProfiles'],
  description: 'Gets one user profile by ID.',
  operationId: 'dfareporting.userProfiles.get',
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
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'The user profile ID.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: UserProfileSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/ddmconversions'],
      Oauth2c: ['https://www.googleapis.com/auth/ddmconversions'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/dfareporting'],
      Oauth2c: ['https://www.googleapis.com/auth/dfareporting'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})

export const getUserprofilesProfileIdAccountActiveAdSummariesSummaryAccountIdRoute = createRoute({
  method: 'get',
  path: '/userprofiles/{profileId}/accountActiveAdSummaries/{summaryAccountId}',
  tags: ['accountActiveAdSummaries'],
  description: "Gets the account's active ad summary by account ID.",
  operationId: 'dfareporting.accountActiveAdSummaries.get',
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
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      summaryAccountId: z
        .string()
        .openapi({
          param: {
            description: 'Account ID.',
            in: 'path',
            name: 'summaryAccountId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: AccountActiveAdSummarySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})

export const getUserprofilesProfileIdAccountPermissionGroupsRoute = createRoute({
  method: 'get',
  path: '/userprofiles/{profileId}/accountPermissionGroups',
  tags: ['accountPermissionGroups'],
  description: 'Retrieves the list of account permission groups.',
  operationId: 'dfareporting.accountPermissionGroups.list',
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
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: AccountPermissionGroupsListResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})

export const getUserprofilesProfileIdAccountPermissionGroupsIdRoute = createRoute({
  method: 'get',
  path: '/userprofiles/{profileId}/accountPermissionGroups/{id}',
  tags: ['accountPermissionGroups'],
  description: 'Gets one account permission group by ID.',
  operationId: 'dfareporting.accountPermissionGroups.get',
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
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'Account permission group ID.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: AccountPermissionGroupSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})

export const getUserprofilesProfileIdAccountPermissionsRoute = createRoute({
  method: 'get',
  path: '/userprofiles/{profileId}/accountPermissions',
  tags: ['accountPermissions'],
  description: 'Retrieves the list of account permissions.',
  operationId: 'dfareporting.accountPermissions.list',
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
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: AccountPermissionsListResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})

export const getUserprofilesProfileIdAccountPermissionsIdRoute = createRoute({
  method: 'get',
  path: '/userprofiles/{profileId}/accountPermissions/{id}',
  tags: ['accountPermissions'],
  description: 'Gets one account permission by ID.',
  operationId: 'dfareporting.accountPermissions.get',
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
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'Account permission ID.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: AccountPermissionSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})

export const getUserprofilesProfileIdAccountUserProfilesRoute = createRoute({
  method: 'get',
  path: '/userprofiles/{profileId}/accountUserProfiles',
  tags: ['accountUserProfiles'],
  description:
    'Retrieves a list of account user profiles, possibly filtered. This method supports paging.',
  operationId: 'dfareporting.accountUserProfiles.list',
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
      active: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Select only active user profiles.',
            in: 'query',
            name: 'active',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      ids: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Select only user profiles with these IDs.',
            explode: true,
            in: 'query',
            name: 'ids',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(1000),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Maximum number of results to return.',
            in: 'query',
            name: 'maxResults',
            schema: { maximum: 1000, minimum: 0, type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Value of the nextPageToken from the previous result page.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      searchString: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Allows searching for objects by name, ID or email. Wildcards (*) are allowed. For example, "user profile*2015" will return objects with names like "user profile June 2015", "user profile April 2015", or simply "user profile 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "user profile" will match objects with name "my user profile", "user profile 2015", or simply "user profile".',
            in: 'query',
            name: 'searchString',
            schema: { type: 'string' },
            required: false,
          },
        }),
      sortField: z
        .enum(['ID', 'NAME'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Field by which to sort the list.',
            in: 'query',
            name: 'sortField',
            schema: { enum: ['ID', 'NAME'], type: 'string' },
            required: false,
          },
        }),
      sortOrder: z
        .enum(['ASCENDING', 'DESCENDING'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Order of sorted results.',
            in: 'query',
            name: 'sortOrder',
            schema: { enum: ['ASCENDING', 'DESCENDING'], type: 'string' },
            required: false,
          },
        }),
      subaccountId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Select only user profiles with the specified subaccount ID.',
            in: 'query',
            name: 'subaccountId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      userRoleId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Select only user profiles with the specified user role ID.',
            in: 'query',
            name: 'userRoleId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: AccountUserProfilesListResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})

export const putUserprofilesProfileIdAccountUserProfilesRoute = createRoute({
  method: 'put',
  path: '/userprofiles/{profileId}/accountUserProfiles',
  tags: ['accountUserProfiles'],
  description: 'Updates an existing account user profile.',
  operationId: 'dfareporting.accountUserProfiles.update',
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
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: AccountUserProfileSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: AccountUserProfileSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})

export const postUserprofilesProfileIdAccountUserProfilesRoute = createRoute({
  method: 'post',
  path: '/userprofiles/{profileId}/accountUserProfiles',
  tags: ['accountUserProfiles'],
  description: 'Inserts a new account user profile.',
  operationId: 'dfareporting.accountUserProfiles.insert',
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
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: AccountUserProfileSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: AccountUserProfileSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})

export const patchUserprofilesProfileIdAccountUserProfilesRoute = createRoute({
  method: 'patch',
  path: '/userprofiles/{profileId}/accountUserProfiles',
  tags: ['accountUserProfiles'],
  description: 'Updates an existing account user profile. This method supports patch semantics.',
  operationId: 'dfareporting.accountUserProfiles.patch',
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
      id: z
        .string()
        .openapi({
          param: {
            description: 'AccountUserProfile ID.',
            in: 'query',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: AccountUserProfileSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: AccountUserProfileSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})

export const getUserprofilesProfileIdAccountUserProfilesIdRoute = createRoute({
  method: 'get',
  path: '/userprofiles/{profileId}/accountUserProfiles/{id}',
  tags: ['accountUserProfiles'],
  description: 'Gets one account user profile by ID.',
  operationId: 'dfareporting.accountUserProfiles.get',
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
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: AccountUserProfileSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})

export const getUserprofilesProfileIdAccountsRoute = createRoute({
  method: 'get',
  path: '/userprofiles/{profileId}/accounts',
  tags: ['accounts'],
  description: 'Retrieves the list of accounts, possibly filtered. This method supports paging.',
  operationId: 'dfareporting.accounts.list',
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
      active: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Select only active accounts. Don't set this field to select both active and non-active accounts.",
            in: 'query',
            name: 'active',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      ids: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Select only accounts with these IDs.',
            explode: true,
            in: 'query',
            name: 'ids',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(1000),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Maximum number of results to return.',
            in: 'query',
            name: 'maxResults',
            schema: { maximum: 1000, minimum: 0, type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Value of the nextPageToken from the previous result page.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      searchString: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "account*2015" will return objects with names like "account June 2015", "account April 2015", or simply "account 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "account" will match objects with name "my account", "account 2015", or simply "account".',
            in: 'query',
            name: 'searchString',
            schema: { type: 'string' },
            required: false,
          },
        }),
      sortField: z
        .enum(['ID', 'NAME'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Field by which to sort the list.',
            in: 'query',
            name: 'sortField',
            schema: { enum: ['ID', 'NAME'], type: 'string' },
            required: false,
          },
        }),
      sortOrder: z
        .enum(['ASCENDING', 'DESCENDING'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Order of sorted results.',
            in: 'query',
            name: 'sortOrder',
            schema: { enum: ['ASCENDING', 'DESCENDING'], type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: AccountsListResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})

export const putUserprofilesProfileIdAccountsRoute = createRoute({
  method: 'put',
  path: '/userprofiles/{profileId}/accounts',
  tags: ['accounts'],
  description: 'Updates an existing account.',
  operationId: 'dfareporting.accounts.update',
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
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: AccountSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: AccountSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})

export const patchUserprofilesProfileIdAccountsRoute = createRoute({
  method: 'patch',
  path: '/userprofiles/{profileId}/accounts',
  tags: ['accounts'],
  description: 'Updates an existing account. This method supports patch semantics.',
  operationId: 'dfareporting.accounts.patch',
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
      id: z
        .string()
        .openapi({
          param: {
            description: 'Account ID.',
            in: 'query',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: AccountSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: AccountSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})

export const getUserprofilesProfileIdAccountsIdRoute = createRoute({
  method: 'get',
  path: '/userprofiles/{profileId}/accounts/{id}',
  tags: ['accounts'],
  description: 'Gets one account by ID.',
  operationId: 'dfareporting.accounts.get',
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
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'Account ID.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: AccountSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})

export const getUserprofilesProfileIdAdsRoute = createRoute({
  method: 'get',
  path: '/userprofiles/{profileId}/ads',
  tags: ['ads'],
  description: 'Retrieves a list of ads, possibly filtered. This method supports paging.',
  operationId: 'dfareporting.ads.list',
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
      active: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Select only active ads.',
            in: 'query',
            name: 'active',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      advertiserId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Select only ads with this advertiser ID.',
            in: 'query',
            name: 'advertiserId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      archived: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Select only archived ads.',
            in: 'query',
            name: 'archived',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      audienceSegmentIds: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Select only ads with these audience segment IDs.',
            explode: true,
            in: 'query',
            name: 'audienceSegmentIds',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
      campaignIds: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Select only ads with these campaign IDs.',
            explode: true,
            in: 'query',
            name: 'campaignIds',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
      compatibility: z
        .enum([
          'DISPLAY',
          'DISPLAY_INTERSTITIAL',
          'APP',
          'APP_INTERSTITIAL',
          'IN_STREAM_VIDEO',
          'IN_STREAM_AUDIO',
        ])
        .exactOptional()
        .openapi({
          param: {
            description:
              'Select default ads with the specified compatibility. Applicable when type is AD_SERVING_DEFAULT_AD. DISPLAY and DISPLAY_INTERSTITIAL refer to rendering either on desktop or on mobile devices for regular or interstitial ads, respectively. APP and APP_INTERSTITIAL are for rendering in mobile apps. IN_STREAM_VIDEO refers to rendering an in-stream video ads developed with the VAST standard.',
            in: 'query',
            name: 'compatibility',
            schema: {
              enum: [
                'DISPLAY',
                'DISPLAY_INTERSTITIAL',
                'APP',
                'APP_INTERSTITIAL',
                'IN_STREAM_VIDEO',
                'IN_STREAM_AUDIO',
              ],
              type: 'string',
            },
            required: false,
          },
        }),
      creativeIds: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Select only ads with these creative IDs assigned.',
            explode: true,
            in: 'query',
            name: 'creativeIds',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
      creativeOptimizationConfigurationIds: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Select only ads with these creative optimization configuration IDs.',
            explode: true,
            in: 'query',
            name: 'creativeOptimizationConfigurationIds',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
      dynamicClickTracker: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Select only dynamic click trackers. Applicable when type is AD_SERVING_CLICK_TRACKER. If true, select dynamic click trackers. If false, select static click trackers. Leave unset to select both.',
            in: 'query',
            name: 'dynamicClickTracker',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      ids: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Select only ads with these IDs.',
            explode: true,
            in: 'query',
            name: 'ids',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
      landingPageIds: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Select only ads with these landing page IDs.',
            explode: true,
            in: 'query',
            name: 'landingPageIds',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(1000),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Maximum number of results to return.',
            in: 'query',
            name: 'maxResults',
            schema: { maximum: 1000, minimum: 0, type: 'integer' },
            required: false,
          },
        }),
      overriddenEventTagId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Select only ads with this event tag override ID.',
            in: 'query',
            name: 'overriddenEventTagId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Value of the nextPageToken from the previous result page.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      placementIds: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Select only ads with these placement IDs assigned.',
            explode: true,
            in: 'query',
            name: 'placementIds',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
      remarketingListIds: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Select only ads whose list targeting expression use these remarketing list IDs.',
            explode: true,
            in: 'query',
            name: 'remarketingListIds',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
      searchString: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "ad*2015" will return objects with names like "ad June 2015", "ad April 2015", or simply "ad 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "ad" will match objects with name "my ad", "ad 2015", or simply "ad".',
            in: 'query',
            name: 'searchString',
            schema: { type: 'string' },
            required: false,
          },
        }),
      sizeIds: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Select only ads with these size IDs.',
            explode: true,
            in: 'query',
            name: 'sizeIds',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
      sortField: z
        .enum(['ID', 'NAME'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Field by which to sort the list.',
            in: 'query',
            name: 'sortField',
            schema: { enum: ['ID', 'NAME'], type: 'string' },
            required: false,
          },
        }),
      sortOrder: z
        .enum(['ASCENDING', 'DESCENDING'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Order of sorted results.',
            in: 'query',
            name: 'sortOrder',
            schema: { enum: ['ASCENDING', 'DESCENDING'], type: 'string' },
            required: false,
          },
        }),
      sslCompliant: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Select only ads that are SSL-compliant.',
            in: 'query',
            name: 'sslCompliant',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      sslRequired: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Select only ads that require SSL.',
            in: 'query',
            name: 'sslRequired',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      type: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z.enum([
              'AD_SERVING_STANDARD_AD',
              'AD_SERVING_DEFAULT_AD',
              'AD_SERVING_CLICK_TRACKER',
              'AD_SERVING_TRACKING',
              'AD_SERVING_BRAND_SAFE_AD',
            ]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Select only ads with these types.',
            explode: true,
            in: 'query',
            name: 'type',
            schema: {
              items: {
                enum: [
                  'AD_SERVING_STANDARD_AD',
                  'AD_SERVING_DEFAULT_AD',
                  'AD_SERVING_CLICK_TRACKER',
                  'AD_SERVING_TRACKING',
                  'AD_SERVING_BRAND_SAFE_AD',
                ],
                type: 'string',
              },
              type: 'array',
            },
            style: 'form',
            required: false,
          },
        }),
    }),
    params: z.object({
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: AdsListResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})

export const putUserprofilesProfileIdAdsRoute = createRoute({
  method: 'put',
  path: '/userprofiles/{profileId}/ads',
  tags: ['ads'],
  description: 'Updates an existing ad.',
  operationId: 'dfareporting.ads.update',
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
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: AdSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: AdSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})

export const postUserprofilesProfileIdAdsRoute = createRoute({
  method: 'post',
  path: '/userprofiles/{profileId}/ads',
  tags: ['ads'],
  description: 'Inserts a new ad.',
  operationId: 'dfareporting.ads.insert',
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
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: AdSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: AdSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})

export const patchUserprofilesProfileIdAdsRoute = createRoute({
  method: 'patch',
  path: '/userprofiles/{profileId}/ads',
  tags: ['ads'],
  description: 'Updates an existing ad. This method supports patch semantics.',
  operationId: 'dfareporting.ads.patch',
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
      id: z
        .string()
        .openapi({
          param: {
            description: 'Ad ID.',
            in: 'query',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: AdSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: AdSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})

export const getUserprofilesProfileIdAdsIdRoute = createRoute({
  method: 'get',
  path: '/userprofiles/{profileId}/ads/{id}',
  tags: ['ads'],
  description: 'Gets one ad by ID.',
  operationId: 'dfareporting.ads.get',
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
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'Ad ID.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: AdSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})

export const getUserprofilesProfileIdAdvertiserGroupsRoute = createRoute({
  method: 'get',
  path: '/userprofiles/{profileId}/advertiserGroups',
  tags: ['advertiserGroups'],
  description:
    'Retrieves a list of advertiser groups, possibly filtered. This method supports paging.',
  operationId: 'dfareporting.advertiserGroups.list',
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
      ids: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Select only advertiser groups with these IDs.',
            explode: true,
            in: 'query',
            name: 'ids',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(1000),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Maximum number of results to return.',
            in: 'query',
            name: 'maxResults',
            schema: { maximum: 1000, minimum: 0, type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Value of the nextPageToken from the previous result page.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      searchString: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "advertiser*2015" will return objects with names like "advertiser group June 2015", "advertiser group April 2015", or simply "advertiser group 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "advertisergroup" will match objects with name "my advertisergroup", "advertisergroup 2015", or simply "advertisergroup".',
            in: 'query',
            name: 'searchString',
            schema: { type: 'string' },
            required: false,
          },
        }),
      sortField: z
        .enum(['ID', 'NAME'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Field by which to sort the list.',
            in: 'query',
            name: 'sortField',
            schema: { enum: ['ID', 'NAME'], type: 'string' },
            required: false,
          },
        }),
      sortOrder: z
        .enum(['ASCENDING', 'DESCENDING'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Order of sorted results.',
            in: 'query',
            name: 'sortOrder',
            schema: { enum: ['ASCENDING', 'DESCENDING'], type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: AdvertiserGroupsListResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})

export const putUserprofilesProfileIdAdvertiserGroupsRoute = createRoute({
  method: 'put',
  path: '/userprofiles/{profileId}/advertiserGroups',
  tags: ['advertiserGroups'],
  description: 'Updates an existing advertiser group.',
  operationId: 'dfareporting.advertiserGroups.update',
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
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: AdvertiserGroupSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: AdvertiserGroupSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})

export const postUserprofilesProfileIdAdvertiserGroupsRoute = createRoute({
  method: 'post',
  path: '/userprofiles/{profileId}/advertiserGroups',
  tags: ['advertiserGroups'],
  description: 'Inserts a new advertiser group.',
  operationId: 'dfareporting.advertiserGroups.insert',
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
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: AdvertiserGroupSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: AdvertiserGroupSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})

export const patchUserprofilesProfileIdAdvertiserGroupsRoute = createRoute({
  method: 'patch',
  path: '/userprofiles/{profileId}/advertiserGroups',
  tags: ['advertiserGroups'],
  description: 'Updates an existing advertiser group. This method supports patch semantics.',
  operationId: 'dfareporting.advertiserGroups.patch',
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
      id: z
        .string()
        .openapi({
          param: {
            description: 'AdvertiserGroup ID.',
            in: 'query',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: AdvertiserGroupSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: AdvertiserGroupSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})

export const getUserprofilesProfileIdAdvertiserGroupsIdRoute = createRoute({
  method: 'get',
  path: '/userprofiles/{profileId}/advertiserGroups/{id}',
  tags: ['advertiserGroups'],
  description: 'Gets one advertiser group by ID.',
  operationId: 'dfareporting.advertiserGroups.get',
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
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'Advertiser group ID.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: AdvertiserGroupSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})

export const deleteUserprofilesProfileIdAdvertiserGroupsIdRoute = createRoute({
  method: 'delete',
  path: '/userprofiles/{profileId}/advertiserGroups/{id}',
  tags: ['advertiserGroups'],
  description: 'Deletes an existing advertiser group.',
  operationId: 'dfareporting.advertiserGroups.delete',
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
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'Advertiser group ID.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Successful response' } },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})

export const getUserprofilesProfileIdAdvertiserLandingPagesRoute = createRoute({
  method: 'get',
  path: '/userprofiles/{profileId}/advertiserLandingPages',
  tags: ['advertiserLandingPages'],
  description: 'Retrieves a list of landing pages.',
  operationId: 'dfareporting.advertiserLandingPages.list',
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
      advertiserIds: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Select only landing pages that belong to these advertisers.',
            explode: true,
            in: 'query',
            name: 'advertiserIds',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
      archived: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Select only archived landing pages. Don't set this field to select both archived and non-archived landing pages.",
            in: 'query',
            name: 'archived',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      campaignIds: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Select only landing pages that are associated with these campaigns.',
            explode: true,
            in: 'query',
            name: 'campaignIds',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
      ids: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Select only landing pages with these IDs.',
            explode: true,
            in: 'query',
            name: 'ids',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(1000),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Maximum number of results to return.',
            in: 'query',
            name: 'maxResults',
            schema: { maximum: 1000, minimum: 0, type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Value of the nextPageToken from the previous result page.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      searchString: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Allows searching for landing pages by name or ID. Wildcards (*) are allowed. For example, "landingpage*2017" will return landing pages with names like "landingpage July 2017", "landingpage March 2017", or simply "landingpage 2017". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "landingpage" will match campaigns with name "my landingpage", "landingpage 2015", or simply "landingpage".',
            in: 'query',
            name: 'searchString',
            schema: { type: 'string' },
            required: false,
          },
        }),
      sortField: z
        .enum(['ID', 'NAME'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Field by which to sort the list.',
            in: 'query',
            name: 'sortField',
            schema: { enum: ['ID', 'NAME'], type: 'string' },
            required: false,
          },
        }),
      sortOrder: z
        .enum(['ASCENDING', 'DESCENDING'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Order of sorted results.',
            in: 'query',
            name: 'sortOrder',
            schema: { enum: ['ASCENDING', 'DESCENDING'], type: 'string' },
            required: false,
          },
        }),
      subaccountId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Select only landing pages that belong to this subaccount.',
            in: 'query',
            name: 'subaccountId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: AdvertiserLandingPagesListResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})

export const putUserprofilesProfileIdAdvertiserLandingPagesRoute = createRoute({
  method: 'put',
  path: '/userprofiles/{profileId}/advertiserLandingPages',
  tags: ['advertiserLandingPages'],
  description: 'Updates an existing landing page.',
  operationId: 'dfareporting.advertiserLandingPages.update',
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
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: LandingPageSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: LandingPageSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})

export const postUserprofilesProfileIdAdvertiserLandingPagesRoute = createRoute({
  method: 'post',
  path: '/userprofiles/{profileId}/advertiserLandingPages',
  tags: ['advertiserLandingPages'],
  description: 'Inserts a new landing page.',
  operationId: 'dfareporting.advertiserLandingPages.insert',
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
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: LandingPageSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: LandingPageSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})

export const patchUserprofilesProfileIdAdvertiserLandingPagesRoute = createRoute({
  method: 'patch',
  path: '/userprofiles/{profileId}/advertiserLandingPages',
  tags: ['advertiserLandingPages'],
  description: 'Updates an existing advertiser landing page. This method supports patch semantics.',
  operationId: 'dfareporting.advertiserLandingPages.patch',
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
      id: z
        .string()
        .openapi({
          param: {
            description: 'LandingPage ID.',
            in: 'query',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: LandingPageSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: LandingPageSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})

export const getUserprofilesProfileIdAdvertiserLandingPagesIdRoute = createRoute({
  method: 'get',
  path: '/userprofiles/{profileId}/advertiserLandingPages/{id}',
  tags: ['advertiserLandingPages'],
  description: 'Gets one landing page by ID.',
  operationId: 'dfareporting.advertiserLandingPages.get',
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
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'Landing page ID.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: LandingPageSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})

export const getUserprofilesProfileIdAdvertisersRoute = createRoute({
  method: 'get',
  path: '/userprofiles/{profileId}/advertisers',
  tags: ['advertisers'],
  description: 'Retrieves a list of advertisers, possibly filtered. This method supports paging.',
  operationId: 'dfareporting.advertisers.list',
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
      advertiserGroupIds: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Select only advertisers with these advertiser group IDs.',
            explode: true,
            in: 'query',
            name: 'advertiserGroupIds',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
      floodlightConfigurationIds: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Select only advertisers with these floodlight configuration IDs.',
            explode: true,
            in: 'query',
            name: 'floodlightConfigurationIds',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
      ids: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Select only advertisers with these IDs.',
            explode: true,
            in: 'query',
            name: 'ids',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
      includeAdvertisersWithoutGroupsOnly: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Select only advertisers which do not belong to any advertiser group.',
            in: 'query',
            name: 'includeAdvertisersWithoutGroupsOnly',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(1000),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Maximum number of results to return.',
            in: 'query',
            name: 'maxResults',
            schema: { maximum: 1000, minimum: 0, type: 'integer' },
            required: false,
          },
        }),
      onlyParent: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Select only advertisers which use another advertiser's floodlight configuration.",
            in: 'query',
            name: 'onlyParent',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Value of the nextPageToken from the previous result page.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      searchString: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "advertiser*2015" will return objects with names like "advertiser June 2015", "advertiser April 2015", or simply "advertiser 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "advertiser" will match objects with name "my advertiser", "advertiser 2015", or simply "advertiser" .',
            in: 'query',
            name: 'searchString',
            schema: { type: 'string' },
            required: false,
          },
        }),
      sortField: z
        .enum(['ID', 'NAME'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Field by which to sort the list.',
            in: 'query',
            name: 'sortField',
            schema: { enum: ['ID', 'NAME'], type: 'string' },
            required: false,
          },
        }),
      sortOrder: z
        .enum(['ASCENDING', 'DESCENDING'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Order of sorted results.',
            in: 'query',
            name: 'sortOrder',
            schema: { enum: ['ASCENDING', 'DESCENDING'], type: 'string' },
            required: false,
          },
        }),
      status: z
        .enum(['APPROVED', 'ON_HOLD'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Select only advertisers with the specified status.',
            in: 'query',
            name: 'status',
            schema: { enum: ['APPROVED', 'ON_HOLD'], type: 'string' },
            required: false,
          },
        }),
      subaccountId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Select only advertisers with these subaccount IDs.',
            in: 'query',
            name: 'subaccountId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: AdvertisersListResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})

export const putUserprofilesProfileIdAdvertisersRoute = createRoute({
  method: 'put',
  path: '/userprofiles/{profileId}/advertisers',
  tags: ['advertisers'],
  description: 'Updates an existing advertiser.',
  operationId: 'dfareporting.advertisers.update',
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
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: AdvertiserSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: AdvertiserSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})

export const postUserprofilesProfileIdAdvertisersRoute = createRoute({
  method: 'post',
  path: '/userprofiles/{profileId}/advertisers',
  tags: ['advertisers'],
  description: 'Inserts a new advertiser.',
  operationId: 'dfareporting.advertisers.insert',
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
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: AdvertiserSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: AdvertiserSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})

export const patchUserprofilesProfileIdAdvertisersRoute = createRoute({
  method: 'patch',
  path: '/userprofiles/{profileId}/advertisers',
  tags: ['advertisers'],
  description: 'Updates an existing advertiser. This method supports patch semantics.',
  operationId: 'dfareporting.advertisers.patch',
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
      id: z
        .string()
        .openapi({
          param: {
            description: 'Advertiser ID.',
            in: 'query',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: AdvertiserSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: AdvertiserSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})

export const getUserprofilesProfileIdAdvertisersIdRoute = createRoute({
  method: 'get',
  path: '/userprofiles/{profileId}/advertisers/{id}',
  tags: ['advertisers'],
  description: 'Gets one advertiser by ID.',
  operationId: 'dfareporting.advertisers.get',
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
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'Advertiser ID.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: AdvertiserSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})

export const getUserprofilesProfileIdBrowsersRoute = createRoute({
  method: 'get',
  path: '/userprofiles/{profileId}/browsers',
  tags: ['browsers'],
  description: 'Retrieves a list of browsers.',
  operationId: 'dfareporting.browsers.list',
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
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: BrowsersListResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})

export const getUserprofilesProfileIdCampaignsRoute = createRoute({
  method: 'get',
  path: '/userprofiles/{profileId}/campaigns',
  tags: ['campaigns'],
  description: 'Retrieves a list of campaigns, possibly filtered. This method supports paging.',
  operationId: 'dfareporting.campaigns.list',
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
      advertiserGroupIds: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Select only campaigns whose advertisers belong to these advertiser groups.',
            explode: true,
            in: 'query',
            name: 'advertiserGroupIds',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
      advertiserIds: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Select only campaigns that belong to these advertisers.',
            explode: true,
            in: 'query',
            name: 'advertiserIds',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
      archived: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Select only archived campaigns. Don't set this field to select both archived and non-archived campaigns.",
            in: 'query',
            name: 'archived',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      atLeastOneOptimizationActivity: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Select only campaigns that have at least one optimization activity.',
            in: 'query',
            name: 'atLeastOneOptimizationActivity',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      excludedIds: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Exclude campaigns with these IDs.',
            explode: true,
            in: 'query',
            name: 'excludedIds',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
      ids: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Select only campaigns with these IDs.',
            explode: true,
            in: 'query',
            name: 'ids',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(1000),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Maximum number of results to return.',
            in: 'query',
            name: 'maxResults',
            schema: { maximum: 1000, minimum: 0, type: 'integer' },
            required: false,
          },
        }),
      overriddenEventTagId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Select only campaigns that have overridden this event tag ID.',
            in: 'query',
            name: 'overriddenEventTagId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Value of the nextPageToken from the previous result page.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      searchString: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Allows searching for campaigns by name or ID. Wildcards (*) are allowed. For example, "campaign*2015" will return campaigns with names like "campaign June 2015", "campaign April 2015", or simply "campaign 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "campaign" will match campaigns with name "my campaign", "campaign 2015", or simply "campaign".',
            in: 'query',
            name: 'searchString',
            schema: { type: 'string' },
            required: false,
          },
        }),
      sortField: z
        .enum(['ID', 'NAME'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Field by which to sort the list.',
            in: 'query',
            name: 'sortField',
            schema: { enum: ['ID', 'NAME'], type: 'string' },
            required: false,
          },
        }),
      sortOrder: z
        .enum(['ASCENDING', 'DESCENDING'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Order of sorted results.',
            in: 'query',
            name: 'sortOrder',
            schema: { enum: ['ASCENDING', 'DESCENDING'], type: 'string' },
            required: false,
          },
        }),
      subaccountId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Select only campaigns that belong to this subaccount.',
            in: 'query',
            name: 'subaccountId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: CampaignsListResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})

export const putUserprofilesProfileIdCampaignsRoute = createRoute({
  method: 'put',
  path: '/userprofiles/{profileId}/campaigns',
  tags: ['campaigns'],
  description: 'Updates an existing campaign.',
  operationId: 'dfareporting.campaigns.update',
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
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CampaignSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: CampaignSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})

export const postUserprofilesProfileIdCampaignsRoute = createRoute({
  method: 'post',
  path: '/userprofiles/{profileId}/campaigns',
  tags: ['campaigns'],
  description: 'Inserts a new campaign.',
  operationId: 'dfareporting.campaigns.insert',
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
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CampaignSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: CampaignSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})

export const patchUserprofilesProfileIdCampaignsRoute = createRoute({
  method: 'patch',
  path: '/userprofiles/{profileId}/campaigns',
  tags: ['campaigns'],
  description: 'Updates an existing campaign. This method supports patch semantics.',
  operationId: 'dfareporting.campaigns.patch',
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
      id: z
        .string()
        .openapi({
          param: {
            description: 'Campaign ID.',
            in: 'query',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CampaignSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: CampaignSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})

export const getUserprofilesProfileIdCampaignsCampaignIdCampaignCreativeAssociationsRoute =
  createRoute({
    method: 'get',
    path: '/userprofiles/{profileId}/campaigns/{campaignId}/campaignCreativeAssociations',
    tags: ['campaignCreativeAssociations'],
    description:
      'Retrieves the list of creative IDs associated with the specified campaign. This method supports paging.',
    operationId: 'dfareporting.campaignCreativeAssociations.list',
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
        maxResults: z
          .preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.int().min(0).max(1000),
          )
          .exactOptional()
          .openapi({
            param: {
              description: 'Maximum number of results to return.',
              in: 'query',
              name: 'maxResults',
              schema: { maximum: 1000, minimum: 0, type: 'integer' },
              required: false,
            },
          }),
        pageToken: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              description: 'Value of the nextPageToken from the previous result page.',
              in: 'query',
              name: 'pageToken',
              schema: { type: 'string' },
              required: false,
            },
          }),
        sortOrder: z
          .enum(['ASCENDING', 'DESCENDING'])
          .exactOptional()
          .openapi({
            param: {
              description: 'Order of sorted results.',
              in: 'query',
              name: 'sortOrder',
              schema: { enum: ['ASCENDING', 'DESCENDING'], type: 'string' },
              required: false,
            },
          }),
      }),
      params: z.object({
        profileId: z
          .string()
          .openapi({
            param: {
              description: 'User profile ID associated with this request.',
              in: 'path',
              name: 'profileId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        campaignId: z
          .string()
          .openapi({
            param: {
              description: 'Campaign ID in this association.',
              in: 'path',
              name: 'campaignId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: CampaignCreativeAssociationsListResponseSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
        Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
      },
    ],
  })

export const postUserprofilesProfileIdCampaignsCampaignIdCampaignCreativeAssociationsRoute =
  createRoute({
    method: 'post',
    path: '/userprofiles/{profileId}/campaigns/{campaignId}/campaignCreativeAssociations',
    tags: ['campaignCreativeAssociations'],
    description:
      'Associates a creative with the specified campaign. This method creates a default ad with dimensions matching the creative in the campaign if such a default ad does not exist already.',
    operationId: 'dfareporting.campaignCreativeAssociations.insert',
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
        profileId: z
          .string()
          .openapi({
            param: {
              description: 'User profile ID associated with this request.',
              in: 'path',
              name: 'profileId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        campaignId: z
          .string()
          .openapi({
            param: {
              description: 'Campaign ID in this association.',
              in: 'path',
              name: 'campaignId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: { content: { 'application/json': { schema: CampaignCreativeAssociationSchema } } },
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: CampaignCreativeAssociationSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
        Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
      },
    ],
  })

export const getUserprofilesProfileIdCampaignsIdRoute = createRoute({
  method: 'get',
  path: '/userprofiles/{profileId}/campaigns/{id}',
  tags: ['campaigns'],
  description: 'Gets one campaign by ID.',
  operationId: 'dfareporting.campaigns.get',
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
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'Campaign ID.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: CampaignSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})

export const getUserprofilesProfileIdChangeLogsRoute = createRoute({
  method: 'get',
  path: '/userprofiles/{profileId}/changeLogs',
  tags: ['changeLogs'],
  description: 'Retrieves a list of change logs. This method supports paging.',
  operationId: 'dfareporting.changeLogs.list',
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
      action: z
        .enum([
          'ACTION_CREATE',
          'ACTION_UPDATE',
          'ACTION_DELETE',
          'ACTION_ENABLE',
          'ACTION_DISABLE',
          'ACTION_ADD',
          'ACTION_REMOVE',
          'ACTION_MARK_AS_DEFAULT',
          'ACTION_ASSOCIATE',
          'ACTION_ASSIGN',
          'ACTION_UNASSIGN',
          'ACTION_SEND',
          'ACTION_LINK',
          'ACTION_UNLINK',
          'ACTION_PUSH',
          'ACTION_EMAIL_TAGS',
          'ACTION_SHARE',
        ])
        .exactOptional()
        .openapi({
          param: {
            description: 'Select only change logs with the specified action.',
            in: 'query',
            name: 'action',
            schema: {
              enum: [
                'ACTION_CREATE',
                'ACTION_UPDATE',
                'ACTION_DELETE',
                'ACTION_ENABLE',
                'ACTION_DISABLE',
                'ACTION_ADD',
                'ACTION_REMOVE',
                'ACTION_MARK_AS_DEFAULT',
                'ACTION_ASSOCIATE',
                'ACTION_ASSIGN',
                'ACTION_UNASSIGN',
                'ACTION_SEND',
                'ACTION_LINK',
                'ACTION_UNLINK',
                'ACTION_PUSH',
                'ACTION_EMAIL_TAGS',
                'ACTION_SHARE',
              ],
              type: 'string',
            },
            required: false,
          },
        }),
      ids: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Select only change logs with these IDs.',
            explode: true,
            in: 'query',
            name: 'ids',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
      maxChangeTime: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Select only change logs whose change time is before the specified maxChangeTime.The time should be formatted as an RFC3339 date/time string. For example, for 10:54 PM on July 18th, 2015, in the America/New York time zone, the format is "2015-07-18T22:54:00-04:00". In other words, the year, month, day, the letter T, the hour (24-hour clock system), minute, second, and then the time zone offset.',
            in: 'query',
            name: 'maxChangeTime',
            schema: { type: 'string' },
            required: false,
          },
        }),
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(1000),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Maximum number of results to return.',
            in: 'query',
            name: 'maxResults',
            schema: { maximum: 1000, minimum: 0, type: 'integer' },
            required: false,
          },
        }),
      minChangeTime: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Select only change logs whose change time is after the specified minChangeTime.The time should be formatted as an RFC3339 date/time string. For example, for 10:54 PM on July 18th, 2015, in the America/New York time zone, the format is "2015-07-18T22:54:00-04:00". In other words, the year, month, day, the letter T, the hour (24-hour clock system), minute, second, and then the time zone offset.',
            in: 'query',
            name: 'minChangeTime',
            schema: { type: 'string' },
            required: false,
          },
        }),
      objectIds: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Select only change logs with these object IDs.',
            explode: true,
            in: 'query',
            name: 'objectIds',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
      objectType: z
        .enum([
          'OBJECT_ADVERTISER',
          'OBJECT_FLOODLIGHT_CONFIGURATION',
          'OBJECT_AD',
          'OBJECT_FLOODLIGHT_ACTVITY',
          'OBJECT_CAMPAIGN',
          'OBJECT_FLOODLIGHT_ACTIVITY_GROUP',
          'OBJECT_CREATIVE',
          'OBJECT_PLACEMENT',
          'OBJECT_DFA_SITE',
          'OBJECT_USER_ROLE',
          'OBJECT_USER_PROFILE',
          'OBJECT_ADVERTISER_GROUP',
          'OBJECT_ACCOUNT',
          'OBJECT_SUBACCOUNT',
          'OBJECT_RICHMEDIA_CREATIVE',
          'OBJECT_INSTREAM_CREATIVE',
          'OBJECT_MEDIA_ORDER',
          'OBJECT_CONTENT_CATEGORY',
          'OBJECT_PLACEMENT_STRATEGY',
          'OBJECT_SD_SITE',
          'OBJECT_SIZE',
          'OBJECT_CREATIVE_GROUP',
          'OBJECT_CREATIVE_ASSET',
          'OBJECT_USER_PROFILE_FILTER',
          'OBJECT_LANDING_PAGE',
          'OBJECT_CREATIVE_FIELD',
          'OBJECT_REMARKETING_LIST',
          'OBJECT_PROVIDED_LIST_CLIENT',
          'OBJECT_EVENT_TAG',
          'OBJECT_CREATIVE_BUNDLE',
          'OBJECT_BILLING_ACCOUNT_GROUP',
          'OBJECT_BILLING_FEATURE',
          'OBJECT_RATE_CARD',
          'OBJECT_ACCOUNT_BILLING_FEATURE',
          'OBJECT_BILLING_MINIMUM_FEE',
          'OBJECT_BILLING_PROFILE',
          'OBJECT_PLAYSTORE_LINK',
          'OBJECT_TARGETING_TEMPLATE',
          'OBJECT_SEARCH_LIFT_STUDY',
          'OBJECT_FLOODLIGHT_DV360_LINK',
          'OBJECT_ADVERTISER_CUSTOMER_LINK',
        ])
        .exactOptional()
        .openapi({
          param: {
            description: 'Select only change logs with the specified object type.',
            in: 'query',
            name: 'objectType',
            schema: {
              enum: [
                'OBJECT_ADVERTISER',
                'OBJECT_FLOODLIGHT_CONFIGURATION',
                'OBJECT_AD',
                'OBJECT_FLOODLIGHT_ACTVITY',
                'OBJECT_CAMPAIGN',
                'OBJECT_FLOODLIGHT_ACTIVITY_GROUP',
                'OBJECT_CREATIVE',
                'OBJECT_PLACEMENT',
                'OBJECT_DFA_SITE',
                'OBJECT_USER_ROLE',
                'OBJECT_USER_PROFILE',
                'OBJECT_ADVERTISER_GROUP',
                'OBJECT_ACCOUNT',
                'OBJECT_SUBACCOUNT',
                'OBJECT_RICHMEDIA_CREATIVE',
                'OBJECT_INSTREAM_CREATIVE',
                'OBJECT_MEDIA_ORDER',
                'OBJECT_CONTENT_CATEGORY',
                'OBJECT_PLACEMENT_STRATEGY',
                'OBJECT_SD_SITE',
                'OBJECT_SIZE',
                'OBJECT_CREATIVE_GROUP',
                'OBJECT_CREATIVE_ASSET',
                'OBJECT_USER_PROFILE_FILTER',
                'OBJECT_LANDING_PAGE',
                'OBJECT_CREATIVE_FIELD',
                'OBJECT_REMARKETING_LIST',
                'OBJECT_PROVIDED_LIST_CLIENT',
                'OBJECT_EVENT_TAG',
                'OBJECT_CREATIVE_BUNDLE',
                'OBJECT_BILLING_ACCOUNT_GROUP',
                'OBJECT_BILLING_FEATURE',
                'OBJECT_RATE_CARD',
                'OBJECT_ACCOUNT_BILLING_FEATURE',
                'OBJECT_BILLING_MINIMUM_FEE',
                'OBJECT_BILLING_PROFILE',
                'OBJECT_PLAYSTORE_LINK',
                'OBJECT_TARGETING_TEMPLATE',
                'OBJECT_SEARCH_LIFT_STUDY',
                'OBJECT_FLOODLIGHT_DV360_LINK',
                'OBJECT_ADVERTISER_CUSTOMER_LINK',
              ],
              type: 'string',
            },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Value of the nextPageToken from the previous result page.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      searchString: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Select only change logs whose object ID, user name, old or new values match the search string.',
            in: 'query',
            name: 'searchString',
            schema: { type: 'string' },
            required: false,
          },
        }),
      userProfileIds: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Select only change logs with these user profile IDs.',
            explode: true,
            in: 'query',
            name: 'userProfileIds',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
    }),
    params: z.object({
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ChangeLogsListResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})

export const getUserprofilesProfileIdChangeLogsIdRoute = createRoute({
  method: 'get',
  path: '/userprofiles/{profileId}/changeLogs/{id}',
  tags: ['changeLogs'],
  description: 'Gets one change log by ID.',
  operationId: 'dfareporting.changeLogs.get',
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
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'Change log ID.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ChangeLogSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})

export const getUserprofilesProfileIdCitiesRoute = createRoute({
  method: 'get',
  path: '/userprofiles/{profileId}/cities',
  tags: ['cities'],
  description: 'Retrieves a list of cities, possibly filtered.',
  operationId: 'dfareporting.cities.list',
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
      countryDartIds: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Select only cities from these countries.',
            explode: true,
            in: 'query',
            name: 'countryDartIds',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
      dartIds: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Select only cities with these DART IDs.',
            explode: true,
            in: 'query',
            name: 'dartIds',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
      namePrefix: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Select only cities with names starting with this prefix.',
            in: 'query',
            name: 'namePrefix',
            schema: { type: 'string' },
            required: false,
          },
        }),
      regionDartIds: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Select only cities from these regions.',
            explode: true,
            in: 'query',
            name: 'regionDartIds',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
    }),
    params: z.object({
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: CitiesListResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})

export const getUserprofilesProfileIdConnectionTypesRoute = createRoute({
  method: 'get',
  path: '/userprofiles/{profileId}/connectionTypes',
  tags: ['connectionTypes'],
  description: 'Retrieves a list of connection types.',
  operationId: 'dfareporting.connectionTypes.list',
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
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ConnectionTypesListResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})

export const getUserprofilesProfileIdConnectionTypesIdRoute = createRoute({
  method: 'get',
  path: '/userprofiles/{profileId}/connectionTypes/{id}',
  tags: ['connectionTypes'],
  description: 'Gets one connection type by ID.',
  operationId: 'dfareporting.connectionTypes.get',
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
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'Connection type ID.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ConnectionTypeSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})

export const getUserprofilesProfileIdContentCategoriesRoute = createRoute({
  method: 'get',
  path: '/userprofiles/{profileId}/contentCategories',
  tags: ['contentCategories'],
  description:
    'Retrieves a list of content categories, possibly filtered. This method supports paging.',
  operationId: 'dfareporting.contentCategories.list',
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
      ids: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Select only content categories with these IDs.',
            explode: true,
            in: 'query',
            name: 'ids',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(1000),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Maximum number of results to return.',
            in: 'query',
            name: 'maxResults',
            schema: { maximum: 1000, minimum: 0, type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Value of the nextPageToken from the previous result page.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      searchString: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "contentcategory*2015" will return objects with names like "contentcategory June 2015", "contentcategory April 2015", or simply "contentcategory 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "contentcategory" will match objects with name "my contentcategory", "contentcategory 2015", or simply "contentcategory".',
            in: 'query',
            name: 'searchString',
            schema: { type: 'string' },
            required: false,
          },
        }),
      sortField: z
        .enum(['ID', 'NAME'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Field by which to sort the list.',
            in: 'query',
            name: 'sortField',
            schema: { enum: ['ID', 'NAME'], type: 'string' },
            required: false,
          },
        }),
      sortOrder: z
        .enum(['ASCENDING', 'DESCENDING'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Order of sorted results.',
            in: 'query',
            name: 'sortOrder',
            schema: { enum: ['ASCENDING', 'DESCENDING'], type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ContentCategoriesListResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})

export const putUserprofilesProfileIdContentCategoriesRoute = createRoute({
  method: 'put',
  path: '/userprofiles/{profileId}/contentCategories',
  tags: ['contentCategories'],
  description: 'Updates an existing content category.',
  operationId: 'dfareporting.contentCategories.update',
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
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ContentCategorySchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ContentCategorySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})

export const postUserprofilesProfileIdContentCategoriesRoute = createRoute({
  method: 'post',
  path: '/userprofiles/{profileId}/contentCategories',
  tags: ['contentCategories'],
  description: 'Inserts a new content category.',
  operationId: 'dfareporting.contentCategories.insert',
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
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ContentCategorySchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ContentCategorySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})

export const patchUserprofilesProfileIdContentCategoriesRoute = createRoute({
  method: 'patch',
  path: '/userprofiles/{profileId}/contentCategories',
  tags: ['contentCategories'],
  description: 'Updates an existing content category. This method supports patch semantics.',
  operationId: 'dfareporting.contentCategories.patch',
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
      id: z
        .string()
        .openapi({
          param: {
            description: 'ContentCategory ID.',
            in: 'query',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ContentCategorySchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ContentCategorySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})

export const getUserprofilesProfileIdContentCategoriesIdRoute = createRoute({
  method: 'get',
  path: '/userprofiles/{profileId}/contentCategories/{id}',
  tags: ['contentCategories'],
  description: 'Gets one content category by ID.',
  operationId: 'dfareporting.contentCategories.get',
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
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'Content category ID.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ContentCategorySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})

export const deleteUserprofilesProfileIdContentCategoriesIdRoute = createRoute({
  method: 'delete',
  path: '/userprofiles/{profileId}/contentCategories/{id}',
  tags: ['contentCategories'],
  description: 'Deletes an existing content category.',
  operationId: 'dfareporting.contentCategories.delete',
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
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'Content category ID.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Successful response' } },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})

export const postUserprofilesProfileIdConversionsBatchinsertRoute = createRoute({
  method: 'post',
  path: '/userprofiles/{profileId}/conversions/batchinsert',
  tags: ['conversions'],
  description: 'Inserts conversions.',
  operationId: 'dfareporting.conversions.batchinsert',
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
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ConversionsBatchInsertRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ConversionsBatchInsertResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/ddmconversions'],
      Oauth2c: ['https://www.googleapis.com/auth/ddmconversions'],
    },
  ],
})

export const postUserprofilesProfileIdConversionsBatchupdateRoute = createRoute({
  method: 'post',
  path: '/userprofiles/{profileId}/conversions/batchupdate',
  tags: ['conversions'],
  description: 'Updates existing conversions.',
  operationId: 'dfareporting.conversions.batchupdate',
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
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ConversionsBatchUpdateRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ConversionsBatchUpdateResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/ddmconversions'],
      Oauth2c: ['https://www.googleapis.com/auth/ddmconversions'],
    },
  ],
})

export const getUserprofilesProfileIdCountriesRoute = createRoute({
  method: 'get',
  path: '/userprofiles/{profileId}/countries',
  tags: ['countries'],
  description: 'Retrieves a list of countries.',
  operationId: 'dfareporting.countries.list',
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
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: CountriesListResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})

export const getUserprofilesProfileIdCountriesDartIdRoute = createRoute({
  method: 'get',
  path: '/userprofiles/{profileId}/countries/{dartId}',
  tags: ['countries'],
  description: 'Gets one country by ID.',
  operationId: 'dfareporting.countries.get',
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
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      dartId: z
        .string()
        .openapi({
          param: {
            description: 'Country DART ID.',
            in: 'path',
            name: 'dartId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: CountrySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})

export const postUserprofilesProfileIdCreativeAssetsAdvertiserIdCreativeAssetsRoute = createRoute({
  method: 'post',
  path: '/userprofiles/{profileId}/creativeAssets/{advertiserId}/creativeAssets',
  tags: ['creativeAssets'],
  description: 'Inserts a new creative asset.',
  operationId: 'dfareporting.creativeAssets.insert',
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
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      advertiserId: z
        .string()
        .openapi({
          param: {
            description: 'Advertiser ID of this creative. This is a required field.',
            in: 'path',
            name: 'advertiserId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/octet-stream': { schema: CreativeAssetMetadataSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: CreativeAssetMetadataSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})

export const getUserprofilesProfileIdCreativeFieldsRoute = createRoute({
  method: 'get',
  path: '/userprofiles/{profileId}/creativeFields',
  tags: ['creativeFields'],
  description:
    'Retrieves a list of creative fields, possibly filtered. This method supports paging.',
  operationId: 'dfareporting.creativeFields.list',
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
      advertiserIds: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Select only creative fields that belong to these advertisers.',
            explode: true,
            in: 'query',
            name: 'advertiserIds',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
      ids: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Select only creative fields with these IDs.',
            explode: true,
            in: 'query',
            name: 'ids',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(1000),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Maximum number of results to return.',
            in: 'query',
            name: 'maxResults',
            schema: { maximum: 1000, minimum: 0, type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Value of the nextPageToken from the previous result page.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      searchString: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Allows searching for creative fields by name or ID. Wildcards (*) are allowed. For example, "creativefield*2015" will return creative fields with names like "creativefield June 2015", "creativefield April 2015", or simply "creativefield 2015". Most of the searches also add wild-cards implicitly at the start and the end of the search string. For example, a search string of "creativefield" will match creative fields with the name "my creativefield", "creativefield 2015", or simply "creativefield".',
            in: 'query',
            name: 'searchString',
            schema: { type: 'string' },
            required: false,
          },
        }),
      sortField: z
        .enum(['ID', 'NAME'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Field by which to sort the list.',
            in: 'query',
            name: 'sortField',
            schema: { enum: ['ID', 'NAME'], type: 'string' },
            required: false,
          },
        }),
      sortOrder: z
        .enum(['ASCENDING', 'DESCENDING'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Order of sorted results.',
            in: 'query',
            name: 'sortOrder',
            schema: { enum: ['ASCENDING', 'DESCENDING'], type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: CreativeFieldsListResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})

export const putUserprofilesProfileIdCreativeFieldsRoute = createRoute({
  method: 'put',
  path: '/userprofiles/{profileId}/creativeFields',
  tags: ['creativeFields'],
  description: 'Updates an existing creative field.',
  operationId: 'dfareporting.creativeFields.update',
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
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CreativeFieldSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: CreativeFieldSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})

export const postUserprofilesProfileIdCreativeFieldsRoute = createRoute({
  method: 'post',
  path: '/userprofiles/{profileId}/creativeFields',
  tags: ['creativeFields'],
  description: 'Inserts a new creative field.',
  operationId: 'dfareporting.creativeFields.insert',
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
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CreativeFieldSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: CreativeFieldSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})

export const patchUserprofilesProfileIdCreativeFieldsRoute = createRoute({
  method: 'patch',
  path: '/userprofiles/{profileId}/creativeFields',
  tags: ['creativeFields'],
  description: 'Updates an existing creative field. This method supports patch semantics.',
  operationId: 'dfareporting.creativeFields.patch',
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
      id: z
        .string()
        .openapi({
          param: {
            description: 'CreativeField ID.',
            in: 'query',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CreativeFieldSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: CreativeFieldSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})

export const getUserprofilesProfileIdCreativeFieldsCreativeFieldIdCreativeFieldValuesRoute =
  createRoute({
    method: 'get',
    path: '/userprofiles/{profileId}/creativeFields/{creativeFieldId}/creativeFieldValues',
    tags: ['creativeFieldValues'],
    description:
      'Retrieves a list of creative field values, possibly filtered. This method supports paging.',
    operationId: 'dfareporting.creativeFieldValues.list',
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
        ids: z
          .preprocess(
            (val) => (val === undefined || Array.isArray(val) ? val : [val]),
            z.array(z.string()),
          )
          .exactOptional()
          .openapi({
            param: {
              description: 'Select only creative field values with these IDs.',
              explode: true,
              in: 'query',
              name: 'ids',
              schema: { items: { type: 'string' }, type: 'array' },
              style: 'form',
              required: false,
            },
          }),
        maxResults: z
          .preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.int().min(0).max(1000),
          )
          .exactOptional()
          .openapi({
            param: {
              description: 'Maximum number of results to return.',
              in: 'query',
              name: 'maxResults',
              schema: { maximum: 1000, minimum: 0, type: 'integer' },
              required: false,
            },
          }),
        pageToken: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              description: 'Value of the nextPageToken from the previous result page.',
              in: 'query',
              name: 'pageToken',
              schema: { type: 'string' },
              required: false,
            },
          }),
        searchString: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              description:
                'Allows searching for creative field values by their values. Wildcards (e.g. *) are not allowed.',
              in: 'query',
              name: 'searchString',
              schema: { type: 'string' },
              required: false,
            },
          }),
        sortField: z
          .enum(['ID', 'VALUE'])
          .exactOptional()
          .openapi({
            param: {
              description: 'Field by which to sort the list.',
              in: 'query',
              name: 'sortField',
              schema: { enum: ['ID', 'VALUE'], type: 'string' },
              required: false,
            },
          }),
        sortOrder: z
          .enum(['ASCENDING', 'DESCENDING'])
          .exactOptional()
          .openapi({
            param: {
              description: 'Order of sorted results.',
              in: 'query',
              name: 'sortOrder',
              schema: { enum: ['ASCENDING', 'DESCENDING'], type: 'string' },
              required: false,
            },
          }),
      }),
      params: z.object({
        profileId: z
          .string()
          .openapi({
            param: {
              description: 'User profile ID associated with this request.',
              in: 'path',
              name: 'profileId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        creativeFieldId: z
          .string()
          .openapi({
            param: {
              description: 'Creative field ID for this creative field value.',
              in: 'path',
              name: 'creativeFieldId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: CreativeFieldValuesListResponseSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
        Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
      },
    ],
  })

export const putUserprofilesProfileIdCreativeFieldsCreativeFieldIdCreativeFieldValuesRoute =
  createRoute({
    method: 'put',
    path: '/userprofiles/{profileId}/creativeFields/{creativeFieldId}/creativeFieldValues',
    tags: ['creativeFieldValues'],
    description: 'Updates an existing creative field value.',
    operationId: 'dfareporting.creativeFieldValues.update',
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
        profileId: z
          .string()
          .openapi({
            param: {
              description: 'User profile ID associated with this request.',
              in: 'path',
              name: 'profileId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        creativeFieldId: z
          .string()
          .openapi({
            param: {
              description: 'Creative field ID for this creative field value.',
              in: 'path',
              name: 'creativeFieldId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: { content: { 'application/json': { schema: CreativeFieldValueSchema } } },
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: CreativeFieldValueSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
        Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
      },
    ],
  })

export const postUserprofilesProfileIdCreativeFieldsCreativeFieldIdCreativeFieldValuesRoute =
  createRoute({
    method: 'post',
    path: '/userprofiles/{profileId}/creativeFields/{creativeFieldId}/creativeFieldValues',
    tags: ['creativeFieldValues'],
    description: 'Inserts a new creative field value.',
    operationId: 'dfareporting.creativeFieldValues.insert',
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
        profileId: z
          .string()
          .openapi({
            param: {
              description: 'User profile ID associated with this request.',
              in: 'path',
              name: 'profileId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        creativeFieldId: z
          .string()
          .openapi({
            param: {
              description: 'Creative field ID for this creative field value.',
              in: 'path',
              name: 'creativeFieldId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: { content: { 'application/json': { schema: CreativeFieldValueSchema } } },
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: CreativeFieldValueSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
        Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
      },
    ],
  })

export const patchUserprofilesProfileIdCreativeFieldsCreativeFieldIdCreativeFieldValuesRoute =
  createRoute({
    method: 'patch',
    path: '/userprofiles/{profileId}/creativeFields/{creativeFieldId}/creativeFieldValues',
    tags: ['creativeFieldValues'],
    description: 'Updates an existing creative field value. This method supports patch semantics.',
    operationId: 'dfareporting.creativeFieldValues.patch',
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
        id: z
          .string()
          .openapi({
            param: {
              description: 'CreativeFieldValue ID.',
              in: 'query',
              name: 'id',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      params: z.object({
        profileId: z
          .string()
          .openapi({
            param: {
              description: 'User profile ID associated with this request.',
              in: 'path',
              name: 'profileId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        creativeFieldId: z
          .string()
          .openapi({
            param: {
              description: 'CreativeField ID.',
              in: 'path',
              name: 'creativeFieldId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: { content: { 'application/json': { schema: CreativeFieldValueSchema } } },
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: CreativeFieldValueSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
        Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
      },
    ],
  })

export const getUserprofilesProfileIdCreativeFieldsCreativeFieldIdCreativeFieldValuesIdRoute =
  createRoute({
    method: 'get',
    path: '/userprofiles/{profileId}/creativeFields/{creativeFieldId}/creativeFieldValues/{id}',
    tags: ['creativeFieldValues'],
    description: 'Gets one creative field value by ID.',
    operationId: 'dfareporting.creativeFieldValues.get',
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
        profileId: z
          .string()
          .openapi({
            param: {
              description: 'User profile ID associated with this request.',
              in: 'path',
              name: 'profileId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        creativeFieldId: z
          .string()
          .openapi({
            param: {
              description: 'Creative field ID for this creative field value.',
              in: 'path',
              name: 'creativeFieldId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        id: z
          .string()
          .openapi({
            param: {
              description: 'Creative Field Value ID',
              in: 'path',
              name: 'id',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: CreativeFieldValueSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
        Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
      },
    ],
  })

export const deleteUserprofilesProfileIdCreativeFieldsCreativeFieldIdCreativeFieldValuesIdRoute =
  createRoute({
    method: 'delete',
    path: '/userprofiles/{profileId}/creativeFields/{creativeFieldId}/creativeFieldValues/{id}',
    tags: ['creativeFieldValues'],
    description: 'Deletes an existing creative field value.',
    operationId: 'dfareporting.creativeFieldValues.delete',
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
        profileId: z
          .string()
          .openapi({
            param: {
              description: 'User profile ID associated with this request.',
              in: 'path',
              name: 'profileId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        creativeFieldId: z
          .string()
          .openapi({
            param: {
              description: 'Creative field ID for this creative field value.',
              in: 'path',
              name: 'creativeFieldId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        id: z
          .string()
          .openapi({
            param: {
              description: 'Creative Field Value ID',
              in: 'path',
              name: 'id',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: { 200: { description: 'Successful response' } },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
        Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
      },
    ],
  })

export const getUserprofilesProfileIdCreativeFieldsIdRoute = createRoute({
  method: 'get',
  path: '/userprofiles/{profileId}/creativeFields/{id}',
  tags: ['creativeFields'],
  description: 'Gets one creative field by ID.',
  operationId: 'dfareporting.creativeFields.get',
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
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'Creative Field ID',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: CreativeFieldSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})

export const deleteUserprofilesProfileIdCreativeFieldsIdRoute = createRoute({
  method: 'delete',
  path: '/userprofiles/{profileId}/creativeFields/{id}',
  tags: ['creativeFields'],
  description: 'Deletes an existing creative field.',
  operationId: 'dfareporting.creativeFields.delete',
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
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'Creative Field ID',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Successful response' } },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})

export const getUserprofilesProfileIdCreativeGroupsRoute = createRoute({
  method: 'get',
  path: '/userprofiles/{profileId}/creativeGroups',
  tags: ['creativeGroups'],
  description:
    'Retrieves a list of creative groups, possibly filtered. This method supports paging.',
  operationId: 'dfareporting.creativeGroups.list',
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
      advertiserIds: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Select only creative groups that belong to these advertisers.',
            explode: true,
            in: 'query',
            name: 'advertiserIds',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
      groupNumber: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(2),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Select only creative groups that belong to this subgroup.',
            in: 'query',
            name: 'groupNumber',
            schema: { maximum: 2, minimum: 1, type: 'integer' },
            required: false,
          },
        }),
      ids: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Select only creative groups with these IDs.',
            explode: true,
            in: 'query',
            name: 'ids',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(1000),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Maximum number of results to return.',
            in: 'query',
            name: 'maxResults',
            schema: { maximum: 1000, minimum: 0, type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Value of the nextPageToken from the previous result page.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      searchString: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Allows searching for creative groups by name or ID. Wildcards (*) are allowed. For example, "creativegroup*2015" will return creative groups with names like "creativegroup June 2015", "creativegroup April 2015", or simply "creativegroup 2015". Most of the searches also add wild-cards implicitly at the start and the end of the search string. For example, a search string of "creativegroup" will match creative groups with the name "my creativegroup", "creativegroup 2015", or simply "creativegroup".',
            in: 'query',
            name: 'searchString',
            schema: { type: 'string' },
            required: false,
          },
        }),
      sortField: z
        .enum(['ID', 'NAME'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Field by which to sort the list.',
            in: 'query',
            name: 'sortField',
            schema: { enum: ['ID', 'NAME'], type: 'string' },
            required: false,
          },
        }),
      sortOrder: z
        .enum(['ASCENDING', 'DESCENDING'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Order of sorted results.',
            in: 'query',
            name: 'sortOrder',
            schema: { enum: ['ASCENDING', 'DESCENDING'], type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: CreativeGroupsListResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})

export const putUserprofilesProfileIdCreativeGroupsRoute = createRoute({
  method: 'put',
  path: '/userprofiles/{profileId}/creativeGroups',
  tags: ['creativeGroups'],
  description: 'Updates an existing creative group.',
  operationId: 'dfareporting.creativeGroups.update',
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
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CreativeGroupSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: CreativeGroupSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})

export const postUserprofilesProfileIdCreativeGroupsRoute = createRoute({
  method: 'post',
  path: '/userprofiles/{profileId}/creativeGroups',
  tags: ['creativeGroups'],
  description: 'Inserts a new creative group.',
  operationId: 'dfareporting.creativeGroups.insert',
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
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CreativeGroupSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: CreativeGroupSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})

export const patchUserprofilesProfileIdCreativeGroupsRoute = createRoute({
  method: 'patch',
  path: '/userprofiles/{profileId}/creativeGroups',
  tags: ['creativeGroups'],
  description: 'Updates an existing creative group. This method supports patch semantics.',
  operationId: 'dfareporting.creativeGroups.patch',
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
      id: z
        .string()
        .openapi({
          param: {
            description: 'CreativeGroup ID.',
            in: 'query',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CreativeGroupSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: CreativeGroupSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})

export const getUserprofilesProfileIdCreativeGroupsIdRoute = createRoute({
  method: 'get',
  path: '/userprofiles/{profileId}/creativeGroups/{id}',
  tags: ['creativeGroups'],
  description: 'Gets one creative group by ID.',
  operationId: 'dfareporting.creativeGroups.get',
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
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'Creative group ID.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: CreativeGroupSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})

export const getUserprofilesProfileIdCreativesRoute = createRoute({
  method: 'get',
  path: '/userprofiles/{profileId}/creatives',
  tags: ['creatives'],
  description: 'Retrieves a list of creatives, possibly filtered. This method supports paging.',
  operationId: 'dfareporting.creatives.list',
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
      active: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Select only active creatives. Leave blank to select active and inactive creatives.',
            in: 'query',
            name: 'active',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      advertiserId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Select only creatives with this advertiser ID.',
            in: 'query',
            name: 'advertiserId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      archived: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Select only archived creatives. Leave blank to select archived and unarchived creatives.',
            in: 'query',
            name: 'archived',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      campaignId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Select only creatives with this campaign ID.',
            in: 'query',
            name: 'campaignId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      companionCreativeIds: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Select only in-stream video creatives with these companion IDs.',
            explode: true,
            in: 'query',
            name: 'companionCreativeIds',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
      creativeFieldIds: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Select only creatives with these creative field IDs.',
            explode: true,
            in: 'query',
            name: 'creativeFieldIds',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
      ids: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Select only creatives with these IDs.',
            explode: true,
            in: 'query',
            name: 'ids',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(1000),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Maximum number of results to return.',
            in: 'query',
            name: 'maxResults',
            schema: { maximum: 1000, minimum: 0, type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Value of the nextPageToken from the previous result page.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      renderingIds: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Select only creatives with these rendering IDs.',
            explode: true,
            in: 'query',
            name: 'renderingIds',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
      searchString: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "creative*2015" will return objects with names like "creative June 2015", "creative April 2015", or simply "creative 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "creative" will match objects with name "my creative", "creative 2015", or simply "creative".',
            in: 'query',
            name: 'searchString',
            schema: { type: 'string' },
            required: false,
          },
        }),
      sizeIds: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Select only creatives with these size IDs.',
            explode: true,
            in: 'query',
            name: 'sizeIds',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
      sortField: z
        .enum(['ID', 'NAME'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Field by which to sort the list.',
            in: 'query',
            name: 'sortField',
            schema: { enum: ['ID', 'NAME'], type: 'string' },
            required: false,
          },
        }),
      sortOrder: z
        .enum(['ASCENDING', 'DESCENDING'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Order of sorted results.',
            in: 'query',
            name: 'sortOrder',
            schema: { enum: ['ASCENDING', 'DESCENDING'], type: 'string' },
            required: false,
          },
        }),
      studioCreativeId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Select only creatives corresponding to this Studio creative ID.',
            in: 'query',
            name: 'studioCreativeId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      types: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z.enum([
              'IMAGE',
              'DISPLAY_REDIRECT',
              'CUSTOM_DISPLAY',
              'INTERNAL_REDIRECT',
              'CUSTOM_DISPLAY_INTERSTITIAL',
              'INTERSTITIAL_INTERNAL_REDIRECT',
              'TRACKING_TEXT',
              'RICH_MEDIA_DISPLAY_BANNER',
              'RICH_MEDIA_INPAGE_FLOATING',
              'RICH_MEDIA_IM_EXPAND',
              'RICH_MEDIA_DISPLAY_EXPANDING',
              'RICH_MEDIA_DISPLAY_INTERSTITIAL',
              'RICH_MEDIA_DISPLAY_MULTI_FLOATING_INTERSTITIAL',
              'RICH_MEDIA_MOBILE_IN_APP',
              'FLASH_INPAGE',
              'INSTREAM_VIDEO',
              'VPAID_LINEAR_VIDEO',
              'VPAID_NON_LINEAR_VIDEO',
              'INSTREAM_VIDEO_REDIRECT',
              'RICH_MEDIA_PEEL_DOWN',
              'HTML5_BANNER',
              'DISPLAY',
              'DISPLAY_IMAGE_GALLERY',
              'BRAND_SAFE_DEFAULT_INSTREAM_VIDEO',
              'INSTREAM_AUDIO',
            ]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Select only creatives with these creative types.',
            explode: true,
            in: 'query',
            name: 'types',
            schema: {
              items: {
                enum: [
                  'IMAGE',
                  'DISPLAY_REDIRECT',
                  'CUSTOM_DISPLAY',
                  'INTERNAL_REDIRECT',
                  'CUSTOM_DISPLAY_INTERSTITIAL',
                  'INTERSTITIAL_INTERNAL_REDIRECT',
                  'TRACKING_TEXT',
                  'RICH_MEDIA_DISPLAY_BANNER',
                  'RICH_MEDIA_INPAGE_FLOATING',
                  'RICH_MEDIA_IM_EXPAND',
                  'RICH_MEDIA_DISPLAY_EXPANDING',
                  'RICH_MEDIA_DISPLAY_INTERSTITIAL',
                  'RICH_MEDIA_DISPLAY_MULTI_FLOATING_INTERSTITIAL',
                  'RICH_MEDIA_MOBILE_IN_APP',
                  'FLASH_INPAGE',
                  'INSTREAM_VIDEO',
                  'VPAID_LINEAR_VIDEO',
                  'VPAID_NON_LINEAR_VIDEO',
                  'INSTREAM_VIDEO_REDIRECT',
                  'RICH_MEDIA_PEEL_DOWN',
                  'HTML5_BANNER',
                  'DISPLAY',
                  'DISPLAY_IMAGE_GALLERY',
                  'BRAND_SAFE_DEFAULT_INSTREAM_VIDEO',
                  'INSTREAM_AUDIO',
                ],
                type: 'string',
              },
              type: 'array',
            },
            style: 'form',
            required: false,
          },
        }),
    }),
    params: z.object({
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: CreativesListResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})

export const putUserprofilesProfileIdCreativesRoute = createRoute({
  method: 'put',
  path: '/userprofiles/{profileId}/creatives',
  tags: ['creatives'],
  description: 'Updates an existing creative.',
  operationId: 'dfareporting.creatives.update',
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
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CreativeSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: CreativeSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})

export const postUserprofilesProfileIdCreativesRoute = createRoute({
  method: 'post',
  path: '/userprofiles/{profileId}/creatives',
  tags: ['creatives'],
  description: 'Inserts a new creative.',
  operationId: 'dfareporting.creatives.insert',
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
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CreativeSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: CreativeSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})

export const patchUserprofilesProfileIdCreativesRoute = createRoute({
  method: 'patch',
  path: '/userprofiles/{profileId}/creatives',
  tags: ['creatives'],
  description: 'Updates an existing creative. This method supports patch semantics.',
  operationId: 'dfareporting.creatives.patch',
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
      id: z
        .string()
        .openapi({
          param: {
            description: 'Creative ID.',
            in: 'query',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CreativeSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: CreativeSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})

export const getUserprofilesProfileIdCreativesIdRoute = createRoute({
  method: 'get',
  path: '/userprofiles/{profileId}/creatives/{id}',
  tags: ['creatives'],
  description: 'Gets one creative by ID.',
  operationId: 'dfareporting.creatives.get',
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
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'Creative ID.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: CreativeSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})

export const postUserprofilesProfileIdCustomEventsBatchinsertRoute = createRoute({
  method: 'post',
  path: '/userprofiles/{profileId}/customEvents/batchinsert',
  tags: ['customEvents'],
  description: 'Inserts custom events.',
  operationId: 'dfareporting.customEvents.batchinsert',
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
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CustomEventsBatchInsertRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: CustomEventsBatchInsertResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/ddmconversions'],
      Oauth2c: ['https://www.googleapis.com/auth/ddmconversions'],
    },
  ],
})

export const postUserprofilesProfileIdDimensionvaluesQueryRoute = createRoute({
  method: 'post',
  path: '/userprofiles/{profileId}/dimensionvalues/query',
  tags: ['dimensionValues'],
  description: 'Retrieves list of report dimension values for a list of filters.',
  operationId: 'dfareporting.dimensionValues.query',
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
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Maximum number of results to return.',
            in: 'query',
            name: 'maxResults',
            schema: { maximum: 100, minimum: 0, type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The value of the nextToken from the previous result page.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'The Campaign Manager 360 user profile ID.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DimensionValueRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: DimensionValueListSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfareporting'],
      Oauth2c: ['https://www.googleapis.com/auth/dfareporting'],
    },
  ],
})

export const getUserprofilesProfileIdDirectorySitesRoute = createRoute({
  method: 'get',
  path: '/userprofiles/{profileId}/directorySites',
  tags: ['directorySites'],
  description:
    'Retrieves a list of directory sites, possibly filtered. This method supports paging.',
  operationId: 'dfareporting.directorySites.list',
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
      acceptsInStreamVideoPlacements: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'This search filter is no longer supported and will have no effect on the results returned.',
            in: 'query',
            name: 'acceptsInStreamVideoPlacements',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      acceptsInterstitialPlacements: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'This search filter is no longer supported and will have no effect on the results returned.',
            in: 'query',
            name: 'acceptsInterstitialPlacements',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      acceptsPublisherPaidPlacements: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Select only directory sites that accept publisher paid placements. This field can be left blank.',
            in: 'query',
            name: 'acceptsPublisherPaidPlacements',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      active: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Select only active directory sites. Leave blank to retrieve both active and inactive directory sites.',
            in: 'query',
            name: 'active',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      dfpNetworkCode: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Select only directory sites with this Ad Manager network code.',
            in: 'query',
            name: 'dfpNetworkCode',
            schema: { type: 'string' },
            required: false,
          },
        }),
      ids: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Select only directory sites with these IDs.',
            explode: true,
            in: 'query',
            name: 'ids',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(1000),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Maximum number of results to return.',
            in: 'query',
            name: 'maxResults',
            schema: { maximum: 1000, minimum: 0, type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Value of the nextPageToken from the previous result page.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      searchString: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Allows searching for objects by name, ID or URL. Wildcards (*) are allowed. For example, "directory site*2015" will return objects with names like "directory site June 2015", "directory site April 2015", or simply "directory site 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "directory site" will match objects with name "my directory site", "directory site 2015" or simply, "directory site".',
            in: 'query',
            name: 'searchString',
            schema: { type: 'string' },
            required: false,
          },
        }),
      sortField: z
        .enum(['ID', 'NAME'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Field by which to sort the list.',
            in: 'query',
            name: 'sortField',
            schema: { enum: ['ID', 'NAME'], type: 'string' },
            required: false,
          },
        }),
      sortOrder: z
        .enum(['ASCENDING', 'DESCENDING'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Order of sorted results.',
            in: 'query',
            name: 'sortOrder',
            schema: { enum: ['ASCENDING', 'DESCENDING'], type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: DirectorySitesListResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})

export const postUserprofilesProfileIdDirectorySitesRoute = createRoute({
  method: 'post',
  path: '/userprofiles/{profileId}/directorySites',
  tags: ['directorySites'],
  description: 'Inserts a new directory site.',
  operationId: 'dfareporting.directorySites.insert',
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
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DirectorySiteSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: DirectorySiteSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})

export const getUserprofilesProfileIdDirectorySitesIdRoute = createRoute({
  method: 'get',
  path: '/userprofiles/{profileId}/directorySites/{id}',
  tags: ['directorySites'],
  description: 'Gets one directory site by ID.',
  operationId: 'dfareporting.directorySites.get',
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
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'Directory site ID.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: DirectorySiteSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})

export const getUserprofilesProfileIdDynamicTargetingKeysRoute = createRoute({
  method: 'get',
  path: '/userprofiles/{profileId}/dynamicTargetingKeys',
  tags: ['dynamicTargetingKeys'],
  description: 'Retrieves a list of dynamic targeting keys.',
  operationId: 'dfareporting.dynamicTargetingKeys.list',
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
      advertiserId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Select only dynamic targeting keys whose object has this advertiser ID.',
            in: 'query',
            name: 'advertiserId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      names: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Select only dynamic targeting keys exactly matching these names.',
            explode: true,
            in: 'query',
            name: 'names',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
      objectId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Select only dynamic targeting keys with this object ID.',
            in: 'query',
            name: 'objectId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      objectType: z
        .enum(['OBJECT_ADVERTISER', 'OBJECT_AD', 'OBJECT_CREATIVE', 'OBJECT_PLACEMENT'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Select only dynamic targeting keys with this object type.',
            in: 'query',
            name: 'objectType',
            schema: {
              enum: ['OBJECT_ADVERTISER', 'OBJECT_AD', 'OBJECT_CREATIVE', 'OBJECT_PLACEMENT'],
              type: 'string',
            },
            required: false,
          },
        }),
    }),
    params: z.object({
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: DynamicTargetingKeysListResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})

export const postUserprofilesProfileIdDynamicTargetingKeysRoute = createRoute({
  method: 'post',
  path: '/userprofiles/{profileId}/dynamicTargetingKeys',
  tags: ['dynamicTargetingKeys'],
  description:
    "Inserts a new dynamic targeting key. Keys must be created at the advertiser level before being assigned to the advertiser's ads, creatives, or placements. There is a maximum of 1000 keys per advertiser, out of which a maximum of 20 keys can be assigned per ad, creative, or placement.",
  operationId: 'dfareporting.dynamicTargetingKeys.insert',
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
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DynamicTargetingKeySchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: DynamicTargetingKeySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})

export const deleteUserprofilesProfileIdDynamicTargetingKeysObjectIdRoute = createRoute({
  method: 'delete',
  path: '/userprofiles/{profileId}/dynamicTargetingKeys/{objectId}',
  tags: ['dynamicTargetingKeys'],
  description: 'Deletes an existing dynamic targeting key.',
  operationId: 'dfareporting.dynamicTargetingKeys.delete',
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
      name: z
        .string()
        .openapi({
          param: {
            description:
              'Name of this dynamic targeting key. This is a required field. Must be less than 256 characters long and cannot contain commas. All characters are converted to lowercase.',
            in: 'query',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
      objectType: z
        .enum(['OBJECT_ADVERTISER', 'OBJECT_AD', 'OBJECT_CREATIVE', 'OBJECT_PLACEMENT'])
        .openapi({
          param: {
            description:
              'Type of the object of this dynamic targeting key. This is a required field.',
            in: 'query',
            name: 'objectType',
            required: true,
            schema: {
              enum: ['OBJECT_ADVERTISER', 'OBJECT_AD', 'OBJECT_CREATIVE', 'OBJECT_PLACEMENT'],
              type: 'string',
            },
          },
        }),
    }),
    params: z.object({
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      objectId: z
        .string()
        .openapi({
          param: {
            description:
              'ID of the object of this dynamic targeting key. This is a required field.',
            in: 'path',
            name: 'objectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Successful response' } },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})

export const getUserprofilesProfileIdEventTagsRoute = createRoute({
  method: 'get',
  path: '/userprofiles/{profileId}/eventTags',
  tags: ['eventTags'],
  description: 'Retrieves a list of event tags, possibly filtered.',
  operationId: 'dfareporting.eventTags.list',
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
      adId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Select only event tags that belong to this ad.',
            in: 'query',
            name: 'adId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      advertiserId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Select only event tags that belong to this advertiser.',
            in: 'query',
            name: 'advertiserId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      campaignId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Select only event tags that belong to this campaign.',
            in: 'query',
            name: 'campaignId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      definitionsOnly: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Examine only the specified campaign or advertiser's event tags for matching selector criteria. When set to false, the parent advertiser and parent campaign of the specified ad or campaign is examined as well. In addition, when set to false, the status field is examined as well, along with the enabledByDefault field. This parameter can not be set to true when adId is specified as ads do not define their own even tags.",
            in: 'query',
            name: 'definitionsOnly',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      enabled: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Select only enabled event tags. What is considered enabled or disabled depends on the definitionsOnly parameter. When definitionsOnly is set to true, only the specified advertiser or campaign's event tags' enabledByDefault field is examined. When definitionsOnly is set to false, the specified ad or specified campaign's parent advertiser's or parent campaign's event tags' enabledByDefault and status fields are examined as well.",
            in: 'query',
            name: 'enabled',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      eventTagTypes: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z.enum([
              'IMPRESSION_IMAGE_EVENT_TAG',
              'IMPRESSION_JAVASCRIPT_EVENT_TAG',
              'CLICK_THROUGH_EVENT_TAG',
            ]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Select only event tags with the specified event tag types. Event tag types can be used to specify whether to use a third-party pixel, a third-party JavaScript URL, or a third-party click-through URL for either impression or click tracking.',
            explode: true,
            in: 'query',
            name: 'eventTagTypes',
            schema: {
              items: {
                enum: [
                  'IMPRESSION_IMAGE_EVENT_TAG',
                  'IMPRESSION_JAVASCRIPT_EVENT_TAG',
                  'CLICK_THROUGH_EVENT_TAG',
                ],
                type: 'string',
              },
              type: 'array',
            },
            style: 'form',
            required: false,
          },
        }),
      ids: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Select only event tags with these IDs.',
            explode: true,
            in: 'query',
            name: 'ids',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
      searchString: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "eventtag*2015" will return objects with names like "eventtag June 2015", "eventtag April 2015", or simply "eventtag 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "eventtag" will match objects with name "my eventtag", "eventtag 2015", or simply "eventtag".',
            in: 'query',
            name: 'searchString',
            schema: { type: 'string' },
            required: false,
          },
        }),
      sortField: z
        .enum(['ID', 'NAME'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Field by which to sort the list.',
            in: 'query',
            name: 'sortField',
            schema: { enum: ['ID', 'NAME'], type: 'string' },
            required: false,
          },
        }),
      sortOrder: z
        .enum(['ASCENDING', 'DESCENDING'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Order of sorted results.',
            in: 'query',
            name: 'sortOrder',
            schema: { enum: ['ASCENDING', 'DESCENDING'], type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: EventTagsListResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})

export const putUserprofilesProfileIdEventTagsRoute = createRoute({
  method: 'put',
  path: '/userprofiles/{profileId}/eventTags',
  tags: ['eventTags'],
  description: 'Updates an existing event tag.',
  operationId: 'dfareporting.eventTags.update',
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
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: EventTagSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: EventTagSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})

export const postUserprofilesProfileIdEventTagsRoute = createRoute({
  method: 'post',
  path: '/userprofiles/{profileId}/eventTags',
  tags: ['eventTags'],
  description: 'Inserts a new event tag.',
  operationId: 'dfareporting.eventTags.insert',
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
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: EventTagSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: EventTagSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})

export const patchUserprofilesProfileIdEventTagsRoute = createRoute({
  method: 'patch',
  path: '/userprofiles/{profileId}/eventTags',
  tags: ['eventTags'],
  description: 'Updates an existing event tag. This method supports patch semantics.',
  operationId: 'dfareporting.eventTags.patch',
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
      id: z
        .string()
        .openapi({
          param: {
            description: 'EventTag ID.',
            in: 'query',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: EventTagSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: EventTagSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})

export const getUserprofilesProfileIdEventTagsIdRoute = createRoute({
  method: 'get',
  path: '/userprofiles/{profileId}/eventTags/{id}',
  tags: ['eventTags'],
  description: 'Gets one event tag by ID.',
  operationId: 'dfareporting.eventTags.get',
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
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'Event tag ID.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: EventTagSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})

export const deleteUserprofilesProfileIdEventTagsIdRoute = createRoute({
  method: 'delete',
  path: '/userprofiles/{profileId}/eventTags/{id}',
  tags: ['eventTags'],
  description: 'Deletes an existing event tag.',
  operationId: 'dfareporting.eventTags.delete',
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
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'Event tag ID.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Successful response' } },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})

export const getUserprofilesProfileIdFilesRoute = createRoute({
  method: 'get',
  path: '/userprofiles/{profileId}/files',
  tags: ['files'],
  description: 'Lists files for a user profile.',
  operationId: 'dfareporting.files.list',
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
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(10),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Maximum number of results to return.',
            in: 'query',
            name: 'maxResults',
            schema: { maximum: 10, minimum: 0, type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The value of the nextToken from the previous result page.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      scope: z
        .enum(['ALL', 'MINE', 'SHARED_WITH_ME'])
        .exactOptional()
        .openapi({
          param: {
            description: 'The scope that defines which results are returned.',
            in: 'query',
            name: 'scope',
            schema: { enum: ['ALL', 'MINE', 'SHARED_WITH_ME'], type: 'string' },
            required: false,
          },
        }),
      sortField: z
        .enum(['ID', 'LAST_MODIFIED_TIME'])
        .exactOptional()
        .openapi({
          param: {
            description: 'The field by which to sort the list.',
            in: 'query',
            name: 'sortField',
            schema: { enum: ['ID', 'LAST_MODIFIED_TIME'], type: 'string' },
            required: false,
          },
        }),
      sortOrder: z
        .enum(['ASCENDING', 'DESCENDING'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Order of sorted results.',
            in: 'query',
            name: 'sortOrder',
            schema: { enum: ['ASCENDING', 'DESCENDING'], type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'The Campaign Manager 360 user profile ID.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: FileListSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfareporting'],
      Oauth2c: ['https://www.googleapis.com/auth/dfareporting'],
    },
  ],
})

export const getUserprofilesProfileIdFloodlightActivitiesRoute = createRoute({
  method: 'get',
  path: '/userprofiles/{profileId}/floodlightActivities',
  tags: ['floodlightActivities'],
  description:
    'Retrieves a list of floodlight activities, possibly filtered. This method supports paging.',
  operationId: 'dfareporting.floodlightActivities.list',
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
      advertiserId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Select only floodlight activities for the specified advertiser ID. Must specify either ids, advertiserId, or floodlightConfigurationId for a non-empty result.',
            in: 'query',
            name: 'advertiserId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      floodlightActivityGroupIds: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Select only floodlight activities with the specified floodlight activity group IDs.',
            explode: true,
            in: 'query',
            name: 'floodlightActivityGroupIds',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
      floodlightActivityGroupName: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Select only floodlight activities with the specified floodlight activity group name.',
            in: 'query',
            name: 'floodlightActivityGroupName',
            schema: { type: 'string' },
            required: false,
          },
        }),
      floodlightActivityGroupTagString: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Select only floodlight activities with the specified floodlight activity group tag string.',
            in: 'query',
            name: 'floodlightActivityGroupTagString',
            schema: { type: 'string' },
            required: false,
          },
        }),
      floodlightActivityGroupType: z
        .enum(['COUNTER', 'SALE'])
        .exactOptional()
        .openapi({
          param: {
            description:
              'Select only floodlight activities with the specified floodlight activity group type.',
            in: 'query',
            name: 'floodlightActivityGroupType',
            schema: { enum: ['COUNTER', 'SALE'], type: 'string' },
            required: false,
          },
        }),
      floodlightConfigurationId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Select only floodlight activities for the specified floodlight configuration ID. Must specify either ids, advertiserId, or floodlightConfigurationId for a non-empty result.',
            in: 'query',
            name: 'floodlightConfigurationId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      ids: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Select only floodlight activities with the specified IDs. Must specify either ids, advertiserId, or floodlightConfigurationId for a non-empty result.',
            explode: true,
            in: 'query',
            name: 'ids',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(1000),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Maximum number of results to return.',
            in: 'query',
            name: 'maxResults',
            schema: { maximum: 1000, minimum: 0, type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Value of the nextPageToken from the previous result page.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      searchString: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "floodlightactivity*2015" will return objects with names like "floodlightactivity June 2015", "floodlightactivity April 2015", or simply "floodlightactivity 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "floodlightactivity" will match objects with name "my floodlightactivity activity", "floodlightactivity 2015", or simply "floodlightactivity".',
            in: 'query',
            name: 'searchString',
            schema: { type: 'string' },
            required: false,
          },
        }),
      sortField: z
        .enum(['ID', 'NAME'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Field by which to sort the list.',
            in: 'query',
            name: 'sortField',
            schema: { enum: ['ID', 'NAME'], type: 'string' },
            required: false,
          },
        }),
      sortOrder: z
        .enum(['ASCENDING', 'DESCENDING'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Order of sorted results.',
            in: 'query',
            name: 'sortOrder',
            schema: { enum: ['ASCENDING', 'DESCENDING'], type: 'string' },
            required: false,
          },
        }),
      tagString: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Select only floodlight activities with the specified tag string.',
            in: 'query',
            name: 'tagString',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: FloodlightActivitiesListResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})

export const putUserprofilesProfileIdFloodlightActivitiesRoute = createRoute({
  method: 'put',
  path: '/userprofiles/{profileId}/floodlightActivities',
  tags: ['floodlightActivities'],
  description: 'Updates an existing floodlight activity.',
  operationId: 'dfareporting.floodlightActivities.update',
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
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: FloodlightActivitySchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: FloodlightActivitySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})

export const postUserprofilesProfileIdFloodlightActivitiesRoute = createRoute({
  method: 'post',
  path: '/userprofiles/{profileId}/floodlightActivities',
  tags: ['floodlightActivities'],
  description: 'Inserts a new floodlight activity.',
  operationId: 'dfareporting.floodlightActivities.insert',
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
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: FloodlightActivitySchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: FloodlightActivitySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})

export const patchUserprofilesProfileIdFloodlightActivitiesRoute = createRoute({
  method: 'patch',
  path: '/userprofiles/{profileId}/floodlightActivities',
  tags: ['floodlightActivities'],
  description: 'Updates an existing floodlight activity. This method supports patch semantics.',
  operationId: 'dfareporting.floodlightActivities.patch',
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
      id: z
        .string()
        .openapi({
          param: {
            description: 'FloodlightActivity ID.',
            in: 'query',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: FloodlightActivitySchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: FloodlightActivitySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})

export const postUserprofilesProfileIdFloodlightActivitiesGeneratetagRoute = createRoute({
  method: 'post',
  path: '/userprofiles/{profileId}/floodlightActivities/generatetag',
  tags: ['floodlightActivities'],
  description: 'Generates a tag for a floodlight activity.',
  operationId: 'dfareporting.floodlightActivities.generatetag',
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
      floodlightActivityId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Floodlight activity ID for which we want to generate a tag.',
            in: 'query',
            name: 'floodlightActivityId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: FloodlightActivitiesGenerateTagResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})

export const getUserprofilesProfileIdFloodlightActivitiesIdRoute = createRoute({
  method: 'get',
  path: '/userprofiles/{profileId}/floodlightActivities/{id}',
  tags: ['floodlightActivities'],
  description: 'Gets one floodlight activity by ID.',
  operationId: 'dfareporting.floodlightActivities.get',
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
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'Floodlight activity ID.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: FloodlightActivitySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})

export const deleteUserprofilesProfileIdFloodlightActivitiesIdRoute = createRoute({
  method: 'delete',
  path: '/userprofiles/{profileId}/floodlightActivities/{id}',
  tags: ['floodlightActivities'],
  description: 'Deletes an existing floodlight activity.',
  operationId: 'dfareporting.floodlightActivities.delete',
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
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'Floodlight activity ID.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Successful response' } },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})

export const getUserprofilesProfileIdFloodlightActivityGroupsRoute = createRoute({
  method: 'get',
  path: '/userprofiles/{profileId}/floodlightActivityGroups',
  tags: ['floodlightActivityGroups'],
  description:
    'Retrieves a list of floodlight activity groups, possibly filtered. This method supports paging.',
  operationId: 'dfareporting.floodlightActivityGroups.list',
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
      advertiserId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Select only floodlight activity groups with the specified advertiser ID. Must specify either advertiserId or floodlightConfigurationId for a non-empty result.',
            in: 'query',
            name: 'advertiserId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      floodlightConfigurationId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Select only floodlight activity groups with the specified floodlight configuration ID. Must specify either advertiserId, or floodlightConfigurationId for a non-empty result.',
            in: 'query',
            name: 'floodlightConfigurationId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      ids: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Select only floodlight activity groups with the specified IDs. Must specify either advertiserId or floodlightConfigurationId for a non-empty result.',
            explode: true,
            in: 'query',
            name: 'ids',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(1000),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Maximum number of results to return.',
            in: 'query',
            name: 'maxResults',
            schema: { maximum: 1000, minimum: 0, type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Value of the nextPageToken from the previous result page.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      searchString: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "floodlightactivitygroup*2015" will return objects with names like "floodlightactivitygroup June 2015", "floodlightactivitygroup April 2015", or simply "floodlightactivitygroup 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "floodlightactivitygroup" will match objects with name "my floodlightactivitygroup activity", "floodlightactivitygroup 2015", or simply "floodlightactivitygroup".',
            in: 'query',
            name: 'searchString',
            schema: { type: 'string' },
            required: false,
          },
        }),
      sortField: z
        .enum(['ID', 'NAME'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Field by which to sort the list.',
            in: 'query',
            name: 'sortField',
            schema: { enum: ['ID', 'NAME'], type: 'string' },
            required: false,
          },
        }),
      sortOrder: z
        .enum(['ASCENDING', 'DESCENDING'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Order of sorted results.',
            in: 'query',
            name: 'sortOrder',
            schema: { enum: ['ASCENDING', 'DESCENDING'], type: 'string' },
            required: false,
          },
        }),
      type: z
        .enum(['COUNTER', 'SALE'])
        .exactOptional()
        .openapi({
          param: {
            description:
              'Select only floodlight activity groups with the specified floodlight activity group type.',
            in: 'query',
            name: 'type',
            schema: { enum: ['COUNTER', 'SALE'], type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: FloodlightActivityGroupsListResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})

export const putUserprofilesProfileIdFloodlightActivityGroupsRoute = createRoute({
  method: 'put',
  path: '/userprofiles/{profileId}/floodlightActivityGroups',
  tags: ['floodlightActivityGroups'],
  description: 'Updates an existing floodlight activity group.',
  operationId: 'dfareporting.floodlightActivityGroups.update',
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
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: FloodlightActivityGroupSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: FloodlightActivityGroupSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})

export const postUserprofilesProfileIdFloodlightActivityGroupsRoute = createRoute({
  method: 'post',
  path: '/userprofiles/{profileId}/floodlightActivityGroups',
  tags: ['floodlightActivityGroups'],
  description: 'Inserts a new floodlight activity group.',
  operationId: 'dfareporting.floodlightActivityGroups.insert',
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
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: FloodlightActivityGroupSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: FloodlightActivityGroupSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})

export const patchUserprofilesProfileIdFloodlightActivityGroupsRoute = createRoute({
  method: 'patch',
  path: '/userprofiles/{profileId}/floodlightActivityGroups',
  tags: ['floodlightActivityGroups'],
  description:
    'Updates an existing floodlight activity group. This method supports patch semantics.',
  operationId: 'dfareporting.floodlightActivityGroups.patch',
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
      id: z
        .string()
        .openapi({
          param: {
            description: 'FloodlightActivityGroup ID.',
            in: 'query',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: FloodlightActivityGroupSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: FloodlightActivityGroupSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})

export const getUserprofilesProfileIdFloodlightActivityGroupsIdRoute = createRoute({
  method: 'get',
  path: '/userprofiles/{profileId}/floodlightActivityGroups/{id}',
  tags: ['floodlightActivityGroups'],
  description: 'Gets one floodlight activity group by ID.',
  operationId: 'dfareporting.floodlightActivityGroups.get',
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
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'Floodlight activity Group ID.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: FloodlightActivityGroupSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})

export const getUserprofilesProfileIdFloodlightConfigurationsRoute = createRoute({
  method: 'get',
  path: '/userprofiles/{profileId}/floodlightConfigurations',
  tags: ['floodlightConfigurations'],
  description: 'Retrieves a list of floodlight configurations, possibly filtered.',
  operationId: 'dfareporting.floodlightConfigurations.list',
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
      ids: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set of IDs of floodlight configurations to retrieve. Required field; otherwise an empty list will be returned.',
            explode: true,
            in: 'query',
            name: 'ids',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
    }),
    params: z.object({
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: FloodlightConfigurationsListResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})

export const putUserprofilesProfileIdFloodlightConfigurationsRoute = createRoute({
  method: 'put',
  path: '/userprofiles/{profileId}/floodlightConfigurations',
  tags: ['floodlightConfigurations'],
  description: 'Updates an existing floodlight configuration.',
  operationId: 'dfareporting.floodlightConfigurations.update',
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
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: FloodlightConfigurationSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: FloodlightConfigurationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})

export const patchUserprofilesProfileIdFloodlightConfigurationsRoute = createRoute({
  method: 'patch',
  path: '/userprofiles/{profileId}/floodlightConfigurations',
  tags: ['floodlightConfigurations'],
  description:
    'Updates an existing floodlight configuration. This method supports patch semantics.',
  operationId: 'dfareporting.floodlightConfigurations.patch',
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
      id: z
        .string()
        .openapi({
          param: {
            description: 'FloodlightConfiguration ID.',
            in: 'query',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: FloodlightConfigurationSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: FloodlightConfigurationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})

export const getUserprofilesProfileIdFloodlightConfigurationsIdRoute = createRoute({
  method: 'get',
  path: '/userprofiles/{profileId}/floodlightConfigurations/{id}',
  tags: ['floodlightConfigurations'],
  description: 'Gets one floodlight configuration by ID.',
  operationId: 'dfareporting.floodlightConfigurations.get',
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
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'Floodlight configuration ID.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: FloodlightConfigurationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})

export const getUserprofilesProfileIdLanguagesRoute = createRoute({
  method: 'get',
  path: '/userprofiles/{profileId}/languages',
  tags: ['languages'],
  description: 'Retrieves a list of languages.',
  operationId: 'dfareporting.languages.list',
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
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: LanguagesListResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})

export const getUserprofilesProfileIdMetrosRoute = createRoute({
  method: 'get',
  path: '/userprofiles/{profileId}/metros',
  tags: ['metros'],
  description: 'Retrieves a list of metros.',
  operationId: 'dfareporting.metros.list',
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
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: MetrosListResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})

export const getUserprofilesProfileIdMobileAppsRoute = createRoute({
  method: 'get',
  path: '/userprofiles/{profileId}/mobileApps',
  tags: ['mobileApps'],
  description: 'Retrieves list of available mobile apps.',
  operationId: 'dfareporting.mobileApps.list',
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
      directories: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z.enum([
              'UNKNOWN',
              'APPLE_APP_STORE',
              'GOOGLE_PLAY_STORE',
              'ROKU_APP_STORE',
              'AMAZON_FIRETV_APP_STORE',
              'PLAYSTATION_APP_STORE',
              'APPLE_TV_APP_STORE',
              'XBOX_APP_STORE',
              'SAMSUNG_TV_APP_STORE',
              'ANDROID_TV_APP_STORE',
              'GENERIC_CTV_APP_STORE',
            ]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Select only apps from these directories.',
            explode: true,
            in: 'query',
            name: 'directories',
            schema: {
              items: {
                enum: [
                  'UNKNOWN',
                  'APPLE_APP_STORE',
                  'GOOGLE_PLAY_STORE',
                  'ROKU_APP_STORE',
                  'AMAZON_FIRETV_APP_STORE',
                  'PLAYSTATION_APP_STORE',
                  'APPLE_TV_APP_STORE',
                  'XBOX_APP_STORE',
                  'SAMSUNG_TV_APP_STORE',
                  'ANDROID_TV_APP_STORE',
                  'GENERIC_CTV_APP_STORE',
                ],
                type: 'string',
              },
              type: 'array',
            },
            style: 'form',
            required: false,
          },
        }),
      ids: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Select only apps with these IDs.',
            explode: true,
            in: 'query',
            name: 'ids',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(1000),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Maximum number of results to return.',
            in: 'query',
            name: 'maxResults',
            schema: { maximum: 1000, minimum: 0, type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Value of the nextPageToken from the previous result page.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      searchString: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "app*2015" will return objects with names like "app Jan 2018", "app Jan 2018", or simply "app 2018". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "app" will match objects with name "my app", "app 2018", or simply "app".',
            in: 'query',
            name: 'searchString',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: MobileAppsListResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})

export const getUserprofilesProfileIdMobileAppsIdRoute = createRoute({
  method: 'get',
  path: '/userprofiles/{profileId}/mobileApps/{id}',
  tags: ['mobileApps'],
  description: 'Gets one mobile app by ID.',
  operationId: 'dfareporting.mobileApps.get',
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
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'Mobile app ID.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: MobileAppSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})

export const getUserprofilesProfileIdMobileCarriersRoute = createRoute({
  method: 'get',
  path: '/userprofiles/{profileId}/mobileCarriers',
  tags: ['mobileCarriers'],
  description: 'Retrieves a list of mobile carriers.',
  operationId: 'dfareporting.mobileCarriers.list',
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
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: MobileCarriersListResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})

export const getUserprofilesProfileIdMobileCarriersIdRoute = createRoute({
  method: 'get',
  path: '/userprofiles/{profileId}/mobileCarriers/{id}',
  tags: ['mobileCarriers'],
  description: 'Gets one mobile carrier by ID.',
  operationId: 'dfareporting.mobileCarriers.get',
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
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'Mobile carrier ID.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: MobileCarrierSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})

export const getUserprofilesProfileIdOperatingSystemVersionsRoute = createRoute({
  method: 'get',
  path: '/userprofiles/{profileId}/operatingSystemVersions',
  tags: ['operatingSystemVersions'],
  description: 'Retrieves a list of operating system versions.',
  operationId: 'dfareporting.operatingSystemVersions.list',
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
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OperatingSystemVersionsListResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})

export const getUserprofilesProfileIdOperatingSystemVersionsIdRoute = createRoute({
  method: 'get',
  path: '/userprofiles/{profileId}/operatingSystemVersions/{id}',
  tags: ['operatingSystemVersions'],
  description: 'Gets one operating system version by ID.',
  operationId: 'dfareporting.operatingSystemVersions.get',
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
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'Operating system version ID.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OperatingSystemVersionSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})

export const getUserprofilesProfileIdOperatingSystemsRoute = createRoute({
  method: 'get',
  path: '/userprofiles/{profileId}/operatingSystems',
  tags: ['operatingSystems'],
  description: 'Retrieves a list of operating systems.',
  operationId: 'dfareporting.operatingSystems.list',
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
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OperatingSystemsListResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})

export const getUserprofilesProfileIdOperatingSystemsDartIdRoute = createRoute({
  method: 'get',
  path: '/userprofiles/{profileId}/operatingSystems/{dartId}',
  tags: ['operatingSystems'],
  description: 'Gets one operating system by DART ID.',
  operationId: 'dfareporting.operatingSystems.get',
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
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      dartId: z
        .string()
        .openapi({
          param: {
            description: 'Operating system DART ID.',
            in: 'path',
            name: 'dartId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OperatingSystemSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})

export const getUserprofilesProfileIdPlacementGroupsRoute = createRoute({
  method: 'get',
  path: '/userprofiles/{profileId}/placementGroups',
  tags: ['placementGroups'],
  description:
    'Retrieves a list of placement groups, possibly filtered. This method supports paging.',
  operationId: 'dfareporting.placementGroups.list',
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
      advertiserIds: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Select only placement groups that belong to these advertisers.',
            explode: true,
            in: 'query',
            name: 'advertiserIds',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
      archived: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Select only archived placements. Don't set this field to select both archived and non-archived placements.",
            in: 'query',
            name: 'archived',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      campaignIds: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Select only placement groups that belong to these campaigns.',
            explode: true,
            in: 'query',
            name: 'campaignIds',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
      contentCategoryIds: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Select only placement groups that are associated with these content categories.',
            explode: true,
            in: 'query',
            name: 'contentCategoryIds',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
      directorySiteIds: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Select only placement groups that are associated with these directory sites.',
            explode: true,
            in: 'query',
            name: 'directorySiteIds',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
      ids: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Select only placement groups with these IDs.',
            explode: true,
            in: 'query',
            name: 'ids',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
      maxEndDate: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Select only placements or placement groups whose end date is on or before the specified maxEndDate. The date should be formatted as "yyyy-MM-dd".',
            in: 'query',
            name: 'maxEndDate',
            schema: { type: 'string' },
            required: false,
          },
        }),
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(800),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Maximum number of results to return.',
            in: 'query',
            name: 'maxResults',
            schema: { maximum: 800, minimum: 0, type: 'integer' },
            required: false,
          },
        }),
      maxStartDate: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Select only placements or placement groups whose start date is on or before the specified maxStartDate. The date should be formatted as "yyyy-MM-dd".',
            in: 'query',
            name: 'maxStartDate',
            schema: { type: 'string' },
            required: false,
          },
        }),
      minEndDate: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Select only placements or placement groups whose end date is on or after the specified minEndDate. The date should be formatted as "yyyy-MM-dd".',
            in: 'query',
            name: 'minEndDate',
            schema: { type: 'string' },
            required: false,
          },
        }),
      minStartDate: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Select only placements or placement groups whose start date is on or after the specified minStartDate. The date should be formatted as "yyyy-MM-dd".',
            in: 'query',
            name: 'minStartDate',
            schema: { type: 'string' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Value of the nextPageToken from the previous result page.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      placementGroupType: z
        .enum(['PLACEMENT_PACKAGE', 'PLACEMENT_ROADBLOCK'])
        .exactOptional()
        .openapi({
          param: {
            description:
              'Select only placement groups belonging with this group type. A package is a simple group of placements that acts as a single pricing point for a group of tags. A roadblock is a group of placements that not only acts as a single pricing point but also assumes that all the tags in it will be served at the same time. A roadblock requires one of its assigned placements to be marked as primary for reporting.',
            in: 'query',
            name: 'placementGroupType',
            schema: { enum: ['PLACEMENT_PACKAGE', 'PLACEMENT_ROADBLOCK'], type: 'string' },
            required: false,
          },
        }),
      placementStrategyIds: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Select only placement groups that are associated with these placement strategies.',
            explode: true,
            in: 'query',
            name: 'placementStrategyIds',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
      pricingTypes: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z.enum([
              'PRICING_TYPE_CPM',
              'PRICING_TYPE_CPC',
              'PRICING_TYPE_CPA',
              'PRICING_TYPE_FLAT_RATE_IMPRESSIONS',
              'PRICING_TYPE_FLAT_RATE_CLICKS',
              'PRICING_TYPE_CPM_ACTIVEVIEW',
            ]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Select only placement groups with these pricing types.',
            explode: true,
            in: 'query',
            name: 'pricingTypes',
            schema: {
              items: {
                enum: [
                  'PRICING_TYPE_CPM',
                  'PRICING_TYPE_CPC',
                  'PRICING_TYPE_CPA',
                  'PRICING_TYPE_FLAT_RATE_IMPRESSIONS',
                  'PRICING_TYPE_FLAT_RATE_CLICKS',
                  'PRICING_TYPE_CPM_ACTIVEVIEW',
                ],
                type: 'string',
              },
              type: 'array',
            },
            style: 'form',
            required: false,
          },
        }),
      searchString: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Allows searching for placement groups by name or ID. Wildcards (*) are allowed. For example, "placement*2015" will return placement groups with names like "placement group June 2015", "placement group May 2015", or simply "placements 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "placementgroup" will match placement groups with name "my placementgroup", "placementgroup 2015", or simply "placementgroup".',
            in: 'query',
            name: 'searchString',
            schema: { type: 'string' },
            required: false,
          },
        }),
      siteIds: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Select only placement groups that are associated with these sites.',
            explode: true,
            in: 'query',
            name: 'siteIds',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
      sortField: z
        .enum(['ID', 'NAME'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Field by which to sort the list.',
            in: 'query',
            name: 'sortField',
            schema: { enum: ['ID', 'NAME'], type: 'string' },
            required: false,
          },
        }),
      sortOrder: z
        .enum(['ASCENDING', 'DESCENDING'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Order of sorted results.',
            in: 'query',
            name: 'sortOrder',
            schema: { enum: ['ASCENDING', 'DESCENDING'], type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: PlacementGroupsListResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})

export const putUserprofilesProfileIdPlacementGroupsRoute = createRoute({
  method: 'put',
  path: '/userprofiles/{profileId}/placementGroups',
  tags: ['placementGroups'],
  description: 'Updates an existing placement group.',
  operationId: 'dfareporting.placementGroups.update',
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
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: PlacementGroupSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: PlacementGroupSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})

export const postUserprofilesProfileIdPlacementGroupsRoute = createRoute({
  method: 'post',
  path: '/userprofiles/{profileId}/placementGroups',
  tags: ['placementGroups'],
  description: 'Inserts a new placement group.',
  operationId: 'dfareporting.placementGroups.insert',
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
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: PlacementGroupSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: PlacementGroupSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})

export const patchUserprofilesProfileIdPlacementGroupsRoute = createRoute({
  method: 'patch',
  path: '/userprofiles/{profileId}/placementGroups',
  tags: ['placementGroups'],
  description: 'Updates an existing placement group. This method supports patch semantics.',
  operationId: 'dfareporting.placementGroups.patch',
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
      id: z
        .string()
        .openapi({
          param: {
            description: 'PlacementGroup ID.',
            in: 'query',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: PlacementGroupSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: PlacementGroupSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})

export const getUserprofilesProfileIdPlacementGroupsIdRoute = createRoute({
  method: 'get',
  path: '/userprofiles/{profileId}/placementGroups/{id}',
  tags: ['placementGroups'],
  description: 'Gets one placement group by ID.',
  operationId: 'dfareporting.placementGroups.get',
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
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'Placement group ID.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: PlacementGroupSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})

export const getUserprofilesProfileIdPlacementStrategiesRoute = createRoute({
  method: 'get',
  path: '/userprofiles/{profileId}/placementStrategies',
  tags: ['placementStrategies'],
  description:
    'Retrieves a list of placement strategies, possibly filtered. This method supports paging.',
  operationId: 'dfareporting.placementStrategies.list',
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
      ids: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Select only placement strategies with these IDs.',
            explode: true,
            in: 'query',
            name: 'ids',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(1000),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Maximum number of results to return.',
            in: 'query',
            name: 'maxResults',
            schema: { maximum: 1000, minimum: 0, type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Value of the nextPageToken from the previous result page.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      searchString: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "placementstrategy*2015" will return objects with names like "placementstrategy June 2015", "placementstrategy April 2015", or simply "placementstrategy 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "placementstrategy" will match objects with name "my placementstrategy", "placementstrategy 2015", or simply "placementstrategy".',
            in: 'query',
            name: 'searchString',
            schema: { type: 'string' },
            required: false,
          },
        }),
      sortField: z
        .enum(['ID', 'NAME'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Field by which to sort the list.',
            in: 'query',
            name: 'sortField',
            schema: { enum: ['ID', 'NAME'], type: 'string' },
            required: false,
          },
        }),
      sortOrder: z
        .enum(['ASCENDING', 'DESCENDING'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Order of sorted results.',
            in: 'query',
            name: 'sortOrder',
            schema: { enum: ['ASCENDING', 'DESCENDING'], type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: PlacementStrategiesListResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})

export const putUserprofilesProfileIdPlacementStrategiesRoute = createRoute({
  method: 'put',
  path: '/userprofiles/{profileId}/placementStrategies',
  tags: ['placementStrategies'],
  description: 'Updates an existing placement strategy.',
  operationId: 'dfareporting.placementStrategies.update',
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
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: PlacementStrategySchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: PlacementStrategySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})

export const postUserprofilesProfileIdPlacementStrategiesRoute = createRoute({
  method: 'post',
  path: '/userprofiles/{profileId}/placementStrategies',
  tags: ['placementStrategies'],
  description: 'Inserts a new placement strategy.',
  operationId: 'dfareporting.placementStrategies.insert',
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
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: PlacementStrategySchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: PlacementStrategySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})

export const patchUserprofilesProfileIdPlacementStrategiesRoute = createRoute({
  method: 'patch',
  path: '/userprofiles/{profileId}/placementStrategies',
  tags: ['placementStrategies'],
  description: 'Updates an existing placement strategy. This method supports patch semantics.',
  operationId: 'dfareporting.placementStrategies.patch',
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
      id: z
        .string()
        .openapi({
          param: {
            description: 'PlacementStrategy ID.',
            in: 'query',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: PlacementStrategySchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: PlacementStrategySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})

export const getUserprofilesProfileIdPlacementStrategiesIdRoute = createRoute({
  method: 'get',
  path: '/userprofiles/{profileId}/placementStrategies/{id}',
  tags: ['placementStrategies'],
  description: 'Gets one placement strategy by ID.',
  operationId: 'dfareporting.placementStrategies.get',
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
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'Placement strategy ID.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: PlacementStrategySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})

export const deleteUserprofilesProfileIdPlacementStrategiesIdRoute = createRoute({
  method: 'delete',
  path: '/userprofiles/{profileId}/placementStrategies/{id}',
  tags: ['placementStrategies'],
  description: 'Deletes an existing placement strategy.',
  operationId: 'dfareporting.placementStrategies.delete',
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
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'Placement strategy ID.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Successful response' } },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})

export const getUserprofilesProfileIdPlacementsRoute = createRoute({
  method: 'get',
  path: '/userprofiles/{profileId}/placements',
  tags: ['placements'],
  description: 'Retrieves a list of placements, possibly filtered. This method supports paging.',
  operationId: 'dfareporting.placements.list',
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
      advertiserIds: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Select only placements that belong to these advertisers.',
            explode: true,
            in: 'query',
            name: 'advertiserIds',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
      archived: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Select only archived placements. Don't set this field to select both archived and non-archived placements.",
            in: 'query',
            name: 'archived',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      campaignIds: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Select only placements that belong to these campaigns.',
            explode: true,
            in: 'query',
            name: 'campaignIds',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
      compatibilities: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z.enum([
              'DISPLAY',
              'DISPLAY_INTERSTITIAL',
              'APP',
              'APP_INTERSTITIAL',
              'IN_STREAM_VIDEO',
              'IN_STREAM_AUDIO',
            ]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Select only placements that are associated with these compatibilities. DISPLAY and DISPLAY_INTERSTITIAL refer to rendering either on desktop or on mobile devices for regular or interstitial ads respectively. APP and APP_INTERSTITIAL are for rendering in mobile apps. IN_STREAM_VIDEO refers to rendering in in-stream video ads developed with the VAST standard.',
            explode: true,
            in: 'query',
            name: 'compatibilities',
            schema: {
              items: {
                enum: [
                  'DISPLAY',
                  'DISPLAY_INTERSTITIAL',
                  'APP',
                  'APP_INTERSTITIAL',
                  'IN_STREAM_VIDEO',
                  'IN_STREAM_AUDIO',
                ],
                type: 'string',
              },
              type: 'array',
            },
            style: 'form',
            required: false,
          },
        }),
      contentCategoryIds: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Select only placements that are associated with these content categories.',
            explode: true,
            in: 'query',
            name: 'contentCategoryIds',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
      directorySiteIds: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Select only placements that are associated with these directory sites.',
            explode: true,
            in: 'query',
            name: 'directorySiteIds',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
      groupIds: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Select only placements that belong to these placement groups.',
            explode: true,
            in: 'query',
            name: 'groupIds',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
      ids: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Select only placements with these IDs.',
            explode: true,
            in: 'query',
            name: 'ids',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
      maxEndDate: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Select only placements or placement groups whose end date is on or before the specified maxEndDate. The date should be formatted as "yyyy-MM-dd".',
            in: 'query',
            name: 'maxEndDate',
            schema: { type: 'string' },
            required: false,
          },
        }),
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(1000),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Maximum number of results to return.',
            in: 'query',
            name: 'maxResults',
            schema: { maximum: 1000, minimum: 0, type: 'integer' },
            required: false,
          },
        }),
      maxStartDate: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Select only placements or placement groups whose start date is on or before the specified maxStartDate. The date should be formatted as "yyyy-MM-dd".',
            in: 'query',
            name: 'maxStartDate',
            schema: { type: 'string' },
            required: false,
          },
        }),
      minEndDate: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Select only placements or placement groups whose end date is on or after the specified minEndDate. The date should be formatted as "yyyy-MM-dd".',
            in: 'query',
            name: 'minEndDate',
            schema: { type: 'string' },
            required: false,
          },
        }),
      minStartDate: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Select only placements or placement groups whose start date is on or after the specified minStartDate. The date should be formatted as "yyyy-MM-dd".',
            in: 'query',
            name: 'minStartDate',
            schema: { type: 'string' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Value of the nextPageToken from the previous result page.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      paymentSource: z
        .enum(['PLACEMENT_AGENCY_PAID', 'PLACEMENT_PUBLISHER_PAID'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Select only placements with this payment source.',
            in: 'query',
            name: 'paymentSource',
            schema: { enum: ['PLACEMENT_AGENCY_PAID', 'PLACEMENT_PUBLISHER_PAID'], type: 'string' },
            required: false,
          },
        }),
      placementStrategyIds: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Select only placements that are associated with these placement strategies.',
            explode: true,
            in: 'query',
            name: 'placementStrategyIds',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
      pricingTypes: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z.enum([
              'PRICING_TYPE_CPM',
              'PRICING_TYPE_CPC',
              'PRICING_TYPE_CPA',
              'PRICING_TYPE_FLAT_RATE_IMPRESSIONS',
              'PRICING_TYPE_FLAT_RATE_CLICKS',
              'PRICING_TYPE_CPM_ACTIVEVIEW',
            ]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Select only placements with these pricing types.',
            explode: true,
            in: 'query',
            name: 'pricingTypes',
            schema: {
              items: {
                enum: [
                  'PRICING_TYPE_CPM',
                  'PRICING_TYPE_CPC',
                  'PRICING_TYPE_CPA',
                  'PRICING_TYPE_FLAT_RATE_IMPRESSIONS',
                  'PRICING_TYPE_FLAT_RATE_CLICKS',
                  'PRICING_TYPE_CPM_ACTIVEVIEW',
                ],
                type: 'string',
              },
              type: 'array',
            },
            style: 'form',
            required: false,
          },
        }),
      searchString: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Allows searching for placements by name or ID. Wildcards (*) are allowed. For example, "placement*2015" will return placements with names like "placement June 2015", "placement May 2015", or simply "placements 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "placement" will match placements with name "my placement", "placement 2015", or simply "placement" .',
            in: 'query',
            name: 'searchString',
            schema: { type: 'string' },
            required: false,
          },
        }),
      siteIds: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Select only placements that are associated with these sites.',
            explode: true,
            in: 'query',
            name: 'siteIds',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
      sizeIds: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Select only placements that are associated with these sizes.',
            explode: true,
            in: 'query',
            name: 'sizeIds',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
      sortField: z
        .enum(['ID', 'NAME'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Field by which to sort the list.',
            in: 'query',
            name: 'sortField',
            schema: { enum: ['ID', 'NAME'], type: 'string' },
            required: false,
          },
        }),
      sortOrder: z
        .enum(['ASCENDING', 'DESCENDING'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Order of sorted results.',
            in: 'query',
            name: 'sortOrder',
            schema: { enum: ['ASCENDING', 'DESCENDING'], type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: PlacementsListResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})

export const putUserprofilesProfileIdPlacementsRoute = createRoute({
  method: 'put',
  path: '/userprofiles/{profileId}/placements',
  tags: ['placements'],
  description: 'Updates an existing placement.',
  operationId: 'dfareporting.placements.update',
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
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: PlacementSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: PlacementSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})

export const postUserprofilesProfileIdPlacementsRoute = createRoute({
  method: 'post',
  path: '/userprofiles/{profileId}/placements',
  tags: ['placements'],
  description: 'Inserts a new placement.',
  operationId: 'dfareporting.placements.insert',
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
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: PlacementSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: PlacementSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})

export const patchUserprofilesProfileIdPlacementsRoute = createRoute({
  method: 'patch',
  path: '/userprofiles/{profileId}/placements',
  tags: ['placements'],
  description: 'Updates an existing placement. This method supports patch semantics.',
  operationId: 'dfareporting.placements.patch',
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
      id: z
        .string()
        .openapi({
          param: {
            description: 'Placement ID.',
            in: 'query',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: PlacementSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: PlacementSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})

export const postUserprofilesProfileIdPlacementsGeneratetagsRoute = createRoute({
  method: 'post',
  path: '/userprofiles/{profileId}/placements/generatetags',
  tags: ['placements'],
  description: 'Generates tags for a placement.',
  operationId: 'dfareporting.placements.generatetags',
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
      campaignId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Generate placements belonging to this campaign. This is a required field.',
            in: 'query',
            name: 'campaignId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      placementIds: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Generate tags for these placements.',
            explode: true,
            in: 'query',
            name: 'placementIds',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
      tagFormats: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z.enum([
              'PLACEMENT_TAG_STANDARD',
              'PLACEMENT_TAG_IFRAME_JAVASCRIPT',
              'PLACEMENT_TAG_IFRAME_ILAYER',
              'PLACEMENT_TAG_INTERNAL_REDIRECT',
              'PLACEMENT_TAG_JAVASCRIPT',
              'PLACEMENT_TAG_INTERSTITIAL_IFRAME_JAVASCRIPT',
              'PLACEMENT_TAG_INTERSTITIAL_INTERNAL_REDIRECT',
              'PLACEMENT_TAG_INTERSTITIAL_JAVASCRIPT',
              'PLACEMENT_TAG_CLICK_COMMANDS',
              'PLACEMENT_TAG_INSTREAM_VIDEO_PREFETCH',
              'PLACEMENT_TAG_TRACKING',
              'PLACEMENT_TAG_TRACKING_IFRAME',
              'PLACEMENT_TAG_TRACKING_JAVASCRIPT',
              'PLACEMENT_TAG_INSTREAM_VIDEO_PREFETCH_VAST_3',
              'PLACEMENT_TAG_IFRAME_JAVASCRIPT_LEGACY',
              'PLACEMENT_TAG_JAVASCRIPT_LEGACY',
              'PLACEMENT_TAG_INTERSTITIAL_IFRAME_JAVASCRIPT_LEGACY',
              'PLACEMENT_TAG_INTERSTITIAL_JAVASCRIPT_LEGACY',
              'PLACEMENT_TAG_INSTREAM_VIDEO_PREFETCH_VAST_4',
              'PLACEMENT_TAG_TRACKING_THIRD_PARTY_MEASUREMENT',
            ]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Tag formats to generate for these placements. *Note:* PLACEMENT_TAG_STANDARD can only be generated for 1x1 placements.',
            explode: true,
            in: 'query',
            name: 'tagFormats',
            schema: {
              items: {
                enum: [
                  'PLACEMENT_TAG_STANDARD',
                  'PLACEMENT_TAG_IFRAME_JAVASCRIPT',
                  'PLACEMENT_TAG_IFRAME_ILAYER',
                  'PLACEMENT_TAG_INTERNAL_REDIRECT',
                  'PLACEMENT_TAG_JAVASCRIPT',
                  'PLACEMENT_TAG_INTERSTITIAL_IFRAME_JAVASCRIPT',
                  'PLACEMENT_TAG_INTERSTITIAL_INTERNAL_REDIRECT',
                  'PLACEMENT_TAG_INTERSTITIAL_JAVASCRIPT',
                  'PLACEMENT_TAG_CLICK_COMMANDS',
                  'PLACEMENT_TAG_INSTREAM_VIDEO_PREFETCH',
                  'PLACEMENT_TAG_TRACKING',
                  'PLACEMENT_TAG_TRACKING_IFRAME',
                  'PLACEMENT_TAG_TRACKING_JAVASCRIPT',
                  'PLACEMENT_TAG_INSTREAM_VIDEO_PREFETCH_VAST_3',
                  'PLACEMENT_TAG_IFRAME_JAVASCRIPT_LEGACY',
                  'PLACEMENT_TAG_JAVASCRIPT_LEGACY',
                  'PLACEMENT_TAG_INTERSTITIAL_IFRAME_JAVASCRIPT_LEGACY',
                  'PLACEMENT_TAG_INTERSTITIAL_JAVASCRIPT_LEGACY',
                  'PLACEMENT_TAG_INSTREAM_VIDEO_PREFETCH_VAST_4',
                  'PLACEMENT_TAG_TRACKING_THIRD_PARTY_MEASUREMENT',
                ],
                type: 'string',
              },
              type: 'array',
            },
            style: 'form',
            required: false,
          },
        }),
    }),
    params: z.object({
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: PlacementsGenerateTagsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})

export const getUserprofilesProfileIdPlacementsIdRoute = createRoute({
  method: 'get',
  path: '/userprofiles/{profileId}/placements/{id}',
  tags: ['placements'],
  description: 'Gets one placement by ID.',
  operationId: 'dfareporting.placements.get',
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
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'Placement ID.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: PlacementSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})

export const getUserprofilesProfileIdPlatformTypesRoute = createRoute({
  method: 'get',
  path: '/userprofiles/{profileId}/platformTypes',
  tags: ['platformTypes'],
  description: 'Retrieves a list of platform types.',
  operationId: 'dfareporting.platformTypes.list',
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
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: PlatformTypesListResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})

export const getUserprofilesProfileIdPlatformTypesIdRoute = createRoute({
  method: 'get',
  path: '/userprofiles/{profileId}/platformTypes/{id}',
  tags: ['platformTypes'],
  description: 'Gets one platform type by ID.',
  operationId: 'dfareporting.platformTypes.get',
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
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'Platform type ID.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: PlatformTypeSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})

export const getUserprofilesProfileIdPostalCodesRoute = createRoute({
  method: 'get',
  path: '/userprofiles/{profileId}/postalCodes',
  tags: ['postalCodes'],
  description: 'Retrieves a list of postal codes.',
  operationId: 'dfareporting.postalCodes.list',
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
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: PostalCodesListResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})

export const getUserprofilesProfileIdPostalCodesCodeRoute = createRoute({
  method: 'get',
  path: '/userprofiles/{profileId}/postalCodes/{code}',
  tags: ['postalCodes'],
  description: 'Gets one postal code by ID.',
  operationId: 'dfareporting.postalCodes.get',
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
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      code: z
        .string()
        .openapi({
          param: {
            description: 'Postal code ID.',
            in: 'path',
            name: 'code',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: PostalCodeSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})

export const getUserprofilesProfileIdProjectsRoute = createRoute({
  method: 'get',
  path: '/userprofiles/{profileId}/projects',
  tags: ['projects'],
  description: 'Retrieves a list of projects, possibly filtered. This method supports paging .',
  operationId: 'dfareporting.projects.list',
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
      advertiserIds: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Select only projects with these advertiser IDs.',
            explode: true,
            in: 'query',
            name: 'advertiserIds',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
      ids: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Select only projects with these IDs.',
            explode: true,
            in: 'query',
            name: 'ids',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(1000),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Maximum number of results to return.',
            in: 'query',
            name: 'maxResults',
            schema: { maximum: 1000, minimum: 0, type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Value of the nextPageToken from the previous result page.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      searchString: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Allows searching for projects by name or ID. Wildcards (*) are allowed. For example, "project*2015" will return projects with names like "project June 2015", "project April 2015", or simply "project 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "project" will match projects with name "my project", "project 2015", or simply "project".',
            in: 'query',
            name: 'searchString',
            schema: { type: 'string' },
            required: false,
          },
        }),
      sortField: z
        .enum(['ID', 'NAME'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Field by which to sort the list.',
            in: 'query',
            name: 'sortField',
            schema: { enum: ['ID', 'NAME'], type: 'string' },
            required: false,
          },
        }),
      sortOrder: z
        .enum(['ASCENDING', 'DESCENDING'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Order of sorted results.',
            in: 'query',
            name: 'sortOrder',
            schema: { enum: ['ASCENDING', 'DESCENDING'], type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ProjectsListResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})

export const getUserprofilesProfileIdProjectsIdRoute = createRoute({
  method: 'get',
  path: '/userprofiles/{profileId}/projects/{id}',
  tags: ['projects'],
  description: 'Gets one project by ID.',
  operationId: 'dfareporting.projects.get',
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
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'Project ID.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ProjectSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})

export const getUserprofilesProfileIdProjectsProjectIdInventoryItemsRoute = createRoute({
  method: 'get',
  path: '/userprofiles/{profileId}/projects/{projectId}/inventoryItems',
  tags: ['inventoryItems'],
  description:
    'Retrieves a list of inventory items, possibly filtered. This method supports paging.',
  operationId: 'dfareporting.inventoryItems.list',
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
      ids: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Select only inventory items with these IDs.',
            explode: true,
            in: 'query',
            name: 'ids',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
      inPlan: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Select only inventory items that are in plan.',
            in: 'query',
            name: 'inPlan',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(1000),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Maximum number of results to return.',
            in: 'query',
            name: 'maxResults',
            schema: { maximum: 1000, minimum: 0, type: 'integer' },
            required: false,
          },
        }),
      orderId: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Select only inventory items that belong to specified orders.',
            explode: true,
            in: 'query',
            name: 'orderId',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Value of the nextPageToken from the previous result page.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      siteId: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Select only inventory items that are associated with these sites.',
            explode: true,
            in: 'query',
            name: 'siteId',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
      sortField: z
        .enum(['ID', 'NAME'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Field by which to sort the list.',
            in: 'query',
            name: 'sortField',
            schema: { enum: ['ID', 'NAME'], type: 'string' },
            required: false,
          },
        }),
      sortOrder: z
        .enum(['ASCENDING', 'DESCENDING'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Order of sorted results.',
            in: 'query',
            name: 'sortOrder',
            schema: { enum: ['ASCENDING', 'DESCENDING'], type: 'string' },
            required: false,
          },
        }),
      type: z
        .enum(['PLANNING_PLACEMENT_TYPE_REGULAR', 'PLANNING_PLACEMENT_TYPE_CREDIT'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Select only inventory items with this type.',
            in: 'query',
            name: 'type',
            schema: {
              enum: ['PLANNING_PLACEMENT_TYPE_REGULAR', 'PLANNING_PLACEMENT_TYPE_CREDIT'],
              type: 'string',
            },
            required: false,
          },
        }),
    }),
    params: z.object({
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      projectId: z
        .string()
        .openapi({
          param: {
            description: 'Project ID for order documents.',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: InventoryItemsListResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})

export const getUserprofilesProfileIdProjectsProjectIdInventoryItemsIdRoute = createRoute({
  method: 'get',
  path: '/userprofiles/{profileId}/projects/{projectId}/inventoryItems/{id}',
  tags: ['inventoryItems'],
  description: 'Gets one inventory item by ID.',
  operationId: 'dfareporting.inventoryItems.get',
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
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      projectId: z
        .string()
        .openapi({
          param: {
            description: 'Project ID for order documents.',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'Inventory item ID.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: InventoryItemSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})

export const getUserprofilesProfileIdProjectsProjectIdOrderDocumentsRoute = createRoute({
  method: 'get',
  path: '/userprofiles/{profileId}/projects/{projectId}/orderDocuments',
  tags: ['orderDocuments'],
  description:
    'Retrieves a list of order documents, possibly filtered. This method supports paging.',
  operationId: 'dfareporting.orderDocuments.list',
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
      approved: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Select only order documents that have been approved by at least one user.',
            in: 'query',
            name: 'approved',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      ids: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Select only order documents with these IDs.',
            explode: true,
            in: 'query',
            name: 'ids',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(1000),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Maximum number of results to return.',
            in: 'query',
            name: 'maxResults',
            schema: { maximum: 1000, minimum: 0, type: 'integer' },
            required: false,
          },
        }),
      orderId: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Select only order documents for specified orders.',
            explode: true,
            in: 'query',
            name: 'orderId',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Value of the nextPageToken from the previous result page.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      searchString: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Allows searching for order documents by name or ID. Wildcards (*) are allowed. For example, "orderdocument*2015" will return order documents with names like "orderdocument June 2015", "orderdocument April 2015", or simply "orderdocument 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "orderdocument" will match order documents with name "my orderdocument", "orderdocument 2015", or simply "orderdocument".',
            in: 'query',
            name: 'searchString',
            schema: { type: 'string' },
            required: false,
          },
        }),
      siteId: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Select only order documents that are associated with these sites.',
            explode: true,
            in: 'query',
            name: 'siteId',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
      sortField: z
        .enum(['ID', 'NAME'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Field by which to sort the list.',
            in: 'query',
            name: 'sortField',
            schema: { enum: ['ID', 'NAME'], type: 'string' },
            required: false,
          },
        }),
      sortOrder: z
        .enum(['ASCENDING', 'DESCENDING'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Order of sorted results.',
            in: 'query',
            name: 'sortOrder',
            schema: { enum: ['ASCENDING', 'DESCENDING'], type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      projectId: z
        .string()
        .openapi({
          param: {
            description: 'Project ID for order documents.',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OrderDocumentsListResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})

export const getUserprofilesProfileIdProjectsProjectIdOrderDocumentsIdRoute = createRoute({
  method: 'get',
  path: '/userprofiles/{profileId}/projects/{projectId}/orderDocuments/{id}',
  tags: ['orderDocuments'],
  description: 'Gets one order document by ID.',
  operationId: 'dfareporting.orderDocuments.get',
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
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      projectId: z
        .string()
        .openapi({
          param: {
            description: 'Project ID for order documents.',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'Order document ID.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OrderDocumentSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})

export const getUserprofilesProfileIdProjectsProjectIdOrdersRoute = createRoute({
  method: 'get',
  path: '/userprofiles/{profileId}/projects/{projectId}/orders',
  tags: ['orders'],
  description: 'Retrieves a list of orders, possibly filtered. This method supports paging.',
  operationId: 'dfareporting.orders.list',
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
      ids: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Select only orders with these IDs.',
            explode: true,
            in: 'query',
            name: 'ids',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(1000),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Maximum number of results to return.',
            in: 'query',
            name: 'maxResults',
            schema: { maximum: 1000, minimum: 0, type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Value of the nextPageToken from the previous result page.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      searchString: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Allows searching for orders by name or ID. Wildcards (*) are allowed. For example, "order*2015" will return orders with names like "order June 2015", "order April 2015", or simply "order 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "order" will match orders with name "my order", "order 2015", or simply "order".',
            in: 'query',
            name: 'searchString',
            schema: { type: 'string' },
            required: false,
          },
        }),
      siteId: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Select only orders that are associated with these site IDs.',
            explode: true,
            in: 'query',
            name: 'siteId',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
      sortField: z
        .enum(['ID', 'NAME'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Field by which to sort the list.',
            in: 'query',
            name: 'sortField',
            schema: { enum: ['ID', 'NAME'], type: 'string' },
            required: false,
          },
        }),
      sortOrder: z
        .enum(['ASCENDING', 'DESCENDING'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Order of sorted results.',
            in: 'query',
            name: 'sortOrder',
            schema: { enum: ['ASCENDING', 'DESCENDING'], type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      projectId: z
        .string()
        .openapi({
          param: {
            description: 'Project ID for orders.',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OrdersListResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})

export const getUserprofilesProfileIdProjectsProjectIdOrdersIdRoute = createRoute({
  method: 'get',
  path: '/userprofiles/{profileId}/projects/{projectId}/orders/{id}',
  tags: ['orders'],
  description: 'Gets one order by ID.',
  operationId: 'dfareporting.orders.get',
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
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      projectId: z
        .string()
        .openapi({
          param: {
            description: 'Project ID for orders.',
            in: 'path',
            name: 'projectId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'Order ID.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OrderSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})

export const getUserprofilesProfileIdRegionsRoute = createRoute({
  method: 'get',
  path: '/userprofiles/{profileId}/regions',
  tags: ['regions'],
  description: 'Retrieves a list of regions.',
  operationId: 'dfareporting.regions.list',
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
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: RegionsListResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})

export const putUserprofilesProfileIdRemarketingListSharesRoute = createRoute({
  method: 'put',
  path: '/userprofiles/{profileId}/remarketingListShares',
  tags: ['remarketingListShares'],
  description: 'Updates an existing remarketing list share.',
  operationId: 'dfareporting.remarketingListShares.update',
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
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: RemarketingListShareSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: RemarketingListShareSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})

export const patchUserprofilesProfileIdRemarketingListSharesRoute = createRoute({
  method: 'patch',
  path: '/userprofiles/{profileId}/remarketingListShares',
  tags: ['remarketingListShares'],
  description: 'Updates an existing remarketing list share. This method supports patch semantics.',
  operationId: 'dfareporting.remarketingListShares.patch',
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
      id: z
        .string()
        .openapi({
          param: {
            description: 'RemarketingList ID.',
            in: 'query',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: RemarketingListShareSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: RemarketingListShareSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})

export const getUserprofilesProfileIdRemarketingListSharesRemarketingListIdRoute = createRoute({
  method: 'get',
  path: '/userprofiles/{profileId}/remarketingListShares/{remarketingListId}',
  tags: ['remarketingListShares'],
  description: 'Gets one remarketing list share by remarketing list ID.',
  operationId: 'dfareporting.remarketingListShares.get',
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
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      remarketingListId: z
        .string()
        .openapi({
          param: {
            description: 'Remarketing list ID.',
            in: 'path',
            name: 'remarketingListId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: RemarketingListShareSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})

export const getUserprofilesProfileIdRemarketingListsRoute = createRoute({
  method: 'get',
  path: '/userprofiles/{profileId}/remarketingLists',
  tags: ['remarketingLists'],
  description:
    'Retrieves a list of remarketing lists, possibly filtered. This method supports paging.',
  operationId: 'dfareporting.remarketingLists.list',
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
      advertiserId: z
        .string()
        .openapi({
          param: {
            description: 'Select only remarketing lists owned by this advertiser.',
            in: 'query',
            name: 'advertiserId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      active: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Select only active or only inactive remarketing lists.',
            in: 'query',
            name: 'active',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      floodlightActivityId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Select only remarketing lists that have this floodlight activity ID.',
            in: 'query',
            name: 'floodlightActivityId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(1000),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Maximum number of results to return.',
            in: 'query',
            name: 'maxResults',
            schema: { maximum: 1000, minimum: 0, type: 'integer' },
            required: false,
          },
        }),
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "remarketing list*2015" will return objects with names like "remarketing list June 2015", "remarketing list April 2015", or simply "remarketing list 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "remarketing list" will match objects with name "my remarketing list", "remarketing list 2015", or simply "remarketing list".',
            in: 'query',
            name: 'name',
            schema: { type: 'string' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Value of the nextPageToken from the previous result page.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      sortField: z
        .enum(['ID', 'NAME'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Field by which to sort the list.',
            in: 'query',
            name: 'sortField',
            schema: { enum: ['ID', 'NAME'], type: 'string' },
            required: false,
          },
        }),
      sortOrder: z
        .enum(['ASCENDING', 'DESCENDING'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Order of sorted results.',
            in: 'query',
            name: 'sortOrder',
            schema: { enum: ['ASCENDING', 'DESCENDING'], type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: RemarketingListsListResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})

export const putUserprofilesProfileIdRemarketingListsRoute = createRoute({
  method: 'put',
  path: '/userprofiles/{profileId}/remarketingLists',
  tags: ['remarketingLists'],
  description: 'Updates an existing remarketing list.',
  operationId: 'dfareporting.remarketingLists.update',
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
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: RemarketingListSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: RemarketingListSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})

export const postUserprofilesProfileIdRemarketingListsRoute = createRoute({
  method: 'post',
  path: '/userprofiles/{profileId}/remarketingLists',
  tags: ['remarketingLists'],
  description: 'Inserts a new remarketing list.',
  operationId: 'dfareporting.remarketingLists.insert',
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
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: RemarketingListSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: RemarketingListSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})

export const patchUserprofilesProfileIdRemarketingListsRoute = createRoute({
  method: 'patch',
  path: '/userprofiles/{profileId}/remarketingLists',
  tags: ['remarketingLists'],
  description: 'Updates an existing remarketing list. This method supports patch semantics.',
  operationId: 'dfareporting.remarketingLists.patch',
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
      id: z
        .string()
        .openapi({
          param: {
            description: 'RemarketingList ID.',
            in: 'query',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: RemarketingListSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: RemarketingListSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})

export const getUserprofilesProfileIdRemarketingListsIdRoute = createRoute({
  method: 'get',
  path: '/userprofiles/{profileId}/remarketingLists/{id}',
  tags: ['remarketingLists'],
  description: 'Gets one remarketing list by ID.',
  operationId: 'dfareporting.remarketingLists.get',
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
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'Remarketing list ID.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: RemarketingListSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})

export const getUserprofilesProfileIdReportsRoute = createRoute({
  method: 'get',
  path: '/userprofiles/{profileId}/reports',
  tags: ['reports'],
  description: 'Retrieves list of reports.',
  operationId: 'dfareporting.reports.list',
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
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(10),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Maximum number of results to return.',
            in: 'query',
            name: 'maxResults',
            schema: { maximum: 10, minimum: 0, type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The value of the nextToken from the previous result page.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      scope: z
        .enum(['ALL', 'MINE'])
        .exactOptional()
        .openapi({
          param: {
            description: 'The scope that defines which results are returned.',
            in: 'query',
            name: 'scope',
            schema: { enum: ['ALL', 'MINE'], type: 'string' },
            required: false,
          },
        }),
      sortField: z
        .enum(['ID', 'LAST_MODIFIED_TIME', 'NAME'])
        .exactOptional()
        .openapi({
          param: {
            description: 'The field by which to sort the list.',
            in: 'query',
            name: 'sortField',
            schema: { enum: ['ID', 'LAST_MODIFIED_TIME', 'NAME'], type: 'string' },
            required: false,
          },
        }),
      sortOrder: z
        .enum(['ASCENDING', 'DESCENDING'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Order of sorted results.',
            in: 'query',
            name: 'sortOrder',
            schema: { enum: ['ASCENDING', 'DESCENDING'], type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'The Campaign Manager 360 user profile ID.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ReportListSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfareporting'],
      Oauth2c: ['https://www.googleapis.com/auth/dfareporting'],
    },
  ],
})

export const postUserprofilesProfileIdReportsRoute = createRoute({
  method: 'post',
  path: '/userprofiles/{profileId}/reports',
  tags: ['reports'],
  description: 'Creates a report.',
  operationId: 'dfareporting.reports.insert',
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
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'The Campaign Manager 360 user profile ID.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ReportSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ReportSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfareporting'],
      Oauth2c: ['https://www.googleapis.com/auth/dfareporting'],
    },
  ],
})

export const postUserprofilesProfileIdReportsCompatiblefieldsQueryRoute = createRoute({
  method: 'post',
  path: '/userprofiles/{profileId}/reports/compatiblefields/query',
  tags: ['reports'],
  description:
    'Returns the fields that are compatible to be selected in the respective sections of a report criteria, given the fields already selected in the input report and user permissions.',
  operationId: 'dfareporting.reports.compatibleFields.query',
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
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'The Campaign Manager 360 user profile ID.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ReportSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: CompatibleFieldsSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfareporting'],
      Oauth2c: ['https://www.googleapis.com/auth/dfareporting'],
    },
  ],
})

export const getUserprofilesProfileIdReportsReportIdRoute = createRoute({
  method: 'get',
  path: '/userprofiles/{profileId}/reports/{reportId}',
  tags: ['reports'],
  description: 'Retrieves a report by its ID.',
  operationId: 'dfareporting.reports.get',
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
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'The Campaign Manager 360 user profile ID.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      reportId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the report.',
            in: 'path',
            name: 'reportId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ReportSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfareporting'],
      Oauth2c: ['https://www.googleapis.com/auth/dfareporting'],
    },
  ],
})

export const putUserprofilesProfileIdReportsReportIdRoute = createRoute({
  method: 'put',
  path: '/userprofiles/{profileId}/reports/{reportId}',
  tags: ['reports'],
  description: 'Updates a report.',
  operationId: 'dfareporting.reports.update',
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
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'The Campaign Manager 360 user profile ID.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      reportId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the report.',
            in: 'path',
            name: 'reportId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ReportSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ReportSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfareporting'],
      Oauth2c: ['https://www.googleapis.com/auth/dfareporting'],
    },
  ],
})

export const deleteUserprofilesProfileIdReportsReportIdRoute = createRoute({
  method: 'delete',
  path: '/userprofiles/{profileId}/reports/{reportId}',
  tags: ['reports'],
  description: 'Deletes a report by its ID.',
  operationId: 'dfareporting.reports.delete',
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
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'The Campaign Manager 360 user profile ID.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      reportId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the report.',
            in: 'path',
            name: 'reportId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Successful response' } },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfareporting'],
      Oauth2c: ['https://www.googleapis.com/auth/dfareporting'],
    },
  ],
})

export const patchUserprofilesProfileIdReportsReportIdRoute = createRoute({
  method: 'patch',
  path: '/userprofiles/{profileId}/reports/{reportId}',
  tags: ['reports'],
  description: 'Updates an existing report. This method supports patch semantics.',
  operationId: 'dfareporting.reports.patch',
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
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'The DFA user profile ID.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      reportId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the report.',
            in: 'path',
            name: 'reportId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ReportSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ReportSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfareporting'],
      Oauth2c: ['https://www.googleapis.com/auth/dfareporting'],
    },
  ],
})

export const getUserprofilesProfileIdReportsReportIdFilesRoute = createRoute({
  method: 'get',
  path: '/userprofiles/{profileId}/reports/{reportId}/files',
  tags: ['reports'],
  description: 'Lists files for a report.',
  operationId: 'dfareporting.reports.files.list',
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
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(10),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Maximum number of results to return.',
            in: 'query',
            name: 'maxResults',
            schema: { maximum: 10, minimum: 0, type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The value of the nextToken from the previous result page.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      sortField: z
        .enum(['ID', 'LAST_MODIFIED_TIME'])
        .exactOptional()
        .openapi({
          param: {
            description: 'The field by which to sort the list.',
            in: 'query',
            name: 'sortField',
            schema: { enum: ['ID', 'LAST_MODIFIED_TIME'], type: 'string' },
            required: false,
          },
        }),
      sortOrder: z
        .enum(['ASCENDING', 'DESCENDING'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Order of sorted results.',
            in: 'query',
            name: 'sortOrder',
            schema: { enum: ['ASCENDING', 'DESCENDING'], type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'The Campaign Manager 360 user profile ID.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      reportId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the parent report.',
            in: 'path',
            name: 'reportId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: FileListSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfareporting'],
      Oauth2c: ['https://www.googleapis.com/auth/dfareporting'],
    },
  ],
})

export const getUserprofilesProfileIdReportsReportIdFilesFileIdRoute = createRoute({
  method: 'get',
  path: '/userprofiles/{profileId}/reports/{reportId}/files/{fileId}',
  tags: ['reports'],
  description:
    'Retrieves a report file by its report ID and file ID. This method supports media download.',
  operationId: 'dfareporting.reports.files.get',
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
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'The Campaign Manager 360 user profile ID.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      reportId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the report.',
            in: 'path',
            name: 'reportId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      fileId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the report file.',
            in: 'path',
            name: 'fileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: FileSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfareporting'],
      Oauth2c: ['https://www.googleapis.com/auth/dfareporting'],
    },
  ],
})

export const postUserprofilesProfileIdReportsReportIdRunRoute = createRoute({
  method: 'post',
  path: '/userprofiles/{profileId}/reports/{reportId}/run',
  tags: ['reports'],
  description: 'Runs a report.',
  operationId: 'dfareporting.reports.run',
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
      synchronous: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'If set and true, tries to run the report synchronously.',
            in: 'query',
            name: 'synchronous',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
    params: z.object({
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'The Campaign Manager 360 user profile ID.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      reportId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the report.',
            in: 'path',
            name: 'reportId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: FileSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfareporting'],
      Oauth2c: ['https://www.googleapis.com/auth/dfareporting'],
    },
  ],
})

export const getUserprofilesProfileIdSitesRoute = createRoute({
  method: 'get',
  path: '/userprofiles/{profileId}/sites',
  tags: ['sites'],
  description: 'Retrieves a list of sites, possibly filtered. This method supports paging.',
  operationId: 'dfareporting.sites.list',
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
      acceptsInStreamVideoPlacements: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'This search filter is no longer supported and will have no effect on the results returned.',
            in: 'query',
            name: 'acceptsInStreamVideoPlacements',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      acceptsInterstitialPlacements: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'This search filter is no longer supported and will have no effect on the results returned.',
            in: 'query',
            name: 'acceptsInterstitialPlacements',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      acceptsPublisherPaidPlacements: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Select only sites that accept publisher paid placements.',
            in: 'query',
            name: 'acceptsPublisherPaidPlacements',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      adWordsSite: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Select only AdWords sites.',
            in: 'query',
            name: 'adWordsSite',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      approved: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Select only approved sites.',
            in: 'query',
            name: 'approved',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      campaignIds: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Select only sites with these campaign IDs.',
            explode: true,
            in: 'query',
            name: 'campaignIds',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
      directorySiteIds: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Select only sites with these directory site IDs.',
            explode: true,
            in: 'query',
            name: 'directorySiteIds',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
      ids: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Select only sites with these IDs.',
            explode: true,
            in: 'query',
            name: 'ids',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(1000),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Maximum number of results to return.',
            in: 'query',
            name: 'maxResults',
            schema: { maximum: 1000, minimum: 0, type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Value of the nextPageToken from the previous result page.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      searchString: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Allows searching for objects by name, ID or keyName. Wildcards (*) are allowed. For example, "site*2015" will return objects with names like "site June 2015", "site April 2015", or simply "site 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "site" will match objects with name "my site", "site 2015", or simply "site".',
            in: 'query',
            name: 'searchString',
            schema: { type: 'string' },
            required: false,
          },
        }),
      sortField: z
        .enum(['ID', 'NAME'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Field by which to sort the list.',
            in: 'query',
            name: 'sortField',
            schema: { enum: ['ID', 'NAME'], type: 'string' },
            required: false,
          },
        }),
      sortOrder: z
        .enum(['ASCENDING', 'DESCENDING'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Order of sorted results.',
            in: 'query',
            name: 'sortOrder',
            schema: { enum: ['ASCENDING', 'DESCENDING'], type: 'string' },
            required: false,
          },
        }),
      subaccountId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Select only sites with this subaccount ID.',
            in: 'query',
            name: 'subaccountId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      unmappedSite: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Select only sites that have not been mapped to a directory site.',
            in: 'query',
            name: 'unmappedSite',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
    params: z.object({
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: SitesListResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})

export const putUserprofilesProfileIdSitesRoute = createRoute({
  method: 'put',
  path: '/userprofiles/{profileId}/sites',
  tags: ['sites'],
  description: 'Updates an existing site.',
  operationId: 'dfareporting.sites.update',
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
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: SiteSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: SiteSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})

export const postUserprofilesProfileIdSitesRoute = createRoute({
  method: 'post',
  path: '/userprofiles/{profileId}/sites',
  tags: ['sites'],
  description: 'Inserts a new site.',
  operationId: 'dfareporting.sites.insert',
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
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: SiteSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: SiteSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})

export const patchUserprofilesProfileIdSitesRoute = createRoute({
  method: 'patch',
  path: '/userprofiles/{profileId}/sites',
  tags: ['sites'],
  description: 'Updates an existing site. This method supports patch semantics.',
  operationId: 'dfareporting.sites.patch',
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
      id: z
        .string()
        .openapi({
          param: {
            description: 'Site ID.',
            in: 'query',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: SiteSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: SiteSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})

export const getUserprofilesProfileIdSitesIdRoute = createRoute({
  method: 'get',
  path: '/userprofiles/{profileId}/sites/{id}',
  tags: ['sites'],
  description: 'Gets one site by ID.',
  operationId: 'dfareporting.sites.get',
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
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'Site ID.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: SiteSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})

export const getUserprofilesProfileIdSizesRoute = createRoute({
  method: 'get',
  path: '/userprofiles/{profileId}/sizes',
  tags: ['sizes'],
  description:
    'Retrieves a list of sizes, possibly filtered. Retrieved sizes are globally unique and may include values not currently in use by your account. Due to this, the list of sizes returned by this method may differ from the list seen in the Trafficking UI.',
  operationId: 'dfareporting.sizes.list',
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
      height: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(32767),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Select only sizes with this height.',
            in: 'query',
            name: 'height',
            schema: { maximum: 32767, minimum: 0, type: 'integer' },
            required: false,
          },
        }),
      iabStandard: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Select only IAB standard sizes.',
            in: 'query',
            name: 'iabStandard',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      ids: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Select only sizes with these IDs.',
            explode: true,
            in: 'query',
            name: 'ids',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
      width: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(32767),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Select only sizes with this width.',
            in: 'query',
            name: 'width',
            schema: { maximum: 32767, minimum: 0, type: 'integer' },
            required: false,
          },
        }),
    }),
    params: z.object({
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: SizesListResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})

export const postUserprofilesProfileIdSizesRoute = createRoute({
  method: 'post',
  path: '/userprofiles/{profileId}/sizes',
  tags: ['sizes'],
  description: 'Inserts a new size.',
  operationId: 'dfareporting.sizes.insert',
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
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: SizeSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: SizeSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})

export const getUserprofilesProfileIdSizesIdRoute = createRoute({
  method: 'get',
  path: '/userprofiles/{profileId}/sizes/{id}',
  tags: ['sizes'],
  description: 'Gets one size by ID.',
  operationId: 'dfareporting.sizes.get',
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
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'Size ID.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: SizeSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})

export const getUserprofilesProfileIdSubaccountsRoute = createRoute({
  method: 'get',
  path: '/userprofiles/{profileId}/subaccounts',
  tags: ['subaccounts'],
  description: 'Gets a list of subaccounts, possibly filtered. This method supports paging.',
  operationId: 'dfareporting.subaccounts.list',
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
      ids: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Select only subaccounts with these IDs.',
            explode: true,
            in: 'query',
            name: 'ids',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(1000),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Maximum number of results to return.',
            in: 'query',
            name: 'maxResults',
            schema: { maximum: 1000, minimum: 0, type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Value of the nextPageToken from the previous result page.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      searchString: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "subaccount*2015" will return objects with names like "subaccount June 2015", "subaccount April 2015", or simply "subaccount 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "subaccount" will match objects with name "my subaccount", "subaccount 2015", or simply "subaccount" .',
            in: 'query',
            name: 'searchString',
            schema: { type: 'string' },
            required: false,
          },
        }),
      sortField: z
        .enum(['ID', 'NAME'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Field by which to sort the list.',
            in: 'query',
            name: 'sortField',
            schema: { enum: ['ID', 'NAME'], type: 'string' },
            required: false,
          },
        }),
      sortOrder: z
        .enum(['ASCENDING', 'DESCENDING'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Order of sorted results.',
            in: 'query',
            name: 'sortOrder',
            schema: { enum: ['ASCENDING', 'DESCENDING'], type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: SubaccountsListResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})

export const putUserprofilesProfileIdSubaccountsRoute = createRoute({
  method: 'put',
  path: '/userprofiles/{profileId}/subaccounts',
  tags: ['subaccounts'],
  description: 'Updates an existing subaccount.',
  operationId: 'dfareporting.subaccounts.update',
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
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: SubaccountSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: SubaccountSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})

export const postUserprofilesProfileIdSubaccountsRoute = createRoute({
  method: 'post',
  path: '/userprofiles/{profileId}/subaccounts',
  tags: ['subaccounts'],
  description: 'Inserts a new subaccount.',
  operationId: 'dfareporting.subaccounts.insert',
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
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: SubaccountSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: SubaccountSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})

export const patchUserprofilesProfileIdSubaccountsRoute = createRoute({
  method: 'patch',
  path: '/userprofiles/{profileId}/subaccounts',
  tags: ['subaccounts'],
  description: 'Updates an existing subaccount. This method supports patch semantics.',
  operationId: 'dfareporting.subaccounts.patch',
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
      id: z
        .string()
        .openapi({
          param: {
            description: 'Subaccount ID.',
            in: 'query',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: SubaccountSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: SubaccountSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})

export const getUserprofilesProfileIdSubaccountsIdRoute = createRoute({
  method: 'get',
  path: '/userprofiles/{profileId}/subaccounts/{id}',
  tags: ['subaccounts'],
  description: 'Gets one subaccount by ID.',
  operationId: 'dfareporting.subaccounts.get',
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
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'Subaccount ID.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: SubaccountSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})

export const getUserprofilesProfileIdTargetableRemarketingListsRoute = createRoute({
  method: 'get',
  path: '/userprofiles/{profileId}/targetableRemarketingLists',
  tags: ['targetableRemarketingLists'],
  description:
    'Retrieves a list of targetable remarketing lists, possibly filtered. This method supports paging.',
  operationId: 'dfareporting.targetableRemarketingLists.list',
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
      advertiserId: z
        .string()
        .openapi({
          param: {
            description:
              'Select only targetable remarketing lists targetable by these advertisers.',
            in: 'query',
            name: 'advertiserId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      active: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Select only active or only inactive targetable remarketing lists.',
            in: 'query',
            name: 'active',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(1000),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Maximum number of results to return.',
            in: 'query',
            name: 'maxResults',
            schema: { maximum: 1000, minimum: 0, type: 'integer' },
            required: false,
          },
        }),
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "remarketing list*2015" will return objects with names like "remarketing list June 2015", "remarketing list April 2015", or simply "remarketing list 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "remarketing list" will match objects with name "my remarketing list", "remarketing list 2015", or simply "remarketing list".',
            in: 'query',
            name: 'name',
            schema: { type: 'string' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Value of the nextPageToken from the previous result page.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      sortField: z
        .enum(['ID', 'NAME'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Field by which to sort the list.',
            in: 'query',
            name: 'sortField',
            schema: { enum: ['ID', 'NAME'], type: 'string' },
            required: false,
          },
        }),
      sortOrder: z
        .enum(['ASCENDING', 'DESCENDING'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Order of sorted results.',
            in: 'query',
            name: 'sortOrder',
            schema: { enum: ['ASCENDING', 'DESCENDING'], type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: TargetableRemarketingListsListResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})

export const getUserprofilesProfileIdTargetableRemarketingListsIdRoute = createRoute({
  method: 'get',
  path: '/userprofiles/{profileId}/targetableRemarketingLists/{id}',
  tags: ['targetableRemarketingLists'],
  description: 'Gets one remarketing list by ID.',
  operationId: 'dfareporting.targetableRemarketingLists.get',
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
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'Remarketing list ID.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: TargetableRemarketingListSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})

export const getUserprofilesProfileIdTargetingTemplatesRoute = createRoute({
  method: 'get',
  path: '/userprofiles/{profileId}/targetingTemplates',
  tags: ['targetingTemplates'],
  description:
    'Retrieves a list of targeting templates, optionally filtered. This method supports paging.',
  operationId: 'dfareporting.targetingTemplates.list',
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
      advertiserId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Select only targeting templates with this advertiser ID.',
            in: 'query',
            name: 'advertiserId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      ids: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Select only targeting templates with these IDs.',
            explode: true,
            in: 'query',
            name: 'ids',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(1000),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Maximum number of results to return.',
            in: 'query',
            name: 'maxResults',
            schema: { maximum: 1000, minimum: 0, type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Value of the nextPageToken from the previous result page.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      searchString: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "template*2015" will return objects with names like "template June 2015", "template April 2015", or simply "template 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "template" will match objects with name "my template", "template 2015", or simply "template".',
            in: 'query',
            name: 'searchString',
            schema: { type: 'string' },
            required: false,
          },
        }),
      sortField: z
        .enum(['ID', 'NAME'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Field by which to sort the list.',
            in: 'query',
            name: 'sortField',
            schema: { enum: ['ID', 'NAME'], type: 'string' },
            required: false,
          },
        }),
      sortOrder: z
        .enum(['ASCENDING', 'DESCENDING'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Order of sorted results.',
            in: 'query',
            name: 'sortOrder',
            schema: { enum: ['ASCENDING', 'DESCENDING'], type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: TargetingTemplatesListResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})

export const putUserprofilesProfileIdTargetingTemplatesRoute = createRoute({
  method: 'put',
  path: '/userprofiles/{profileId}/targetingTemplates',
  tags: ['targetingTemplates'],
  description: 'Updates an existing targeting template.',
  operationId: 'dfareporting.targetingTemplates.update',
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
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: TargetingTemplateSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: TargetingTemplateSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})

export const postUserprofilesProfileIdTargetingTemplatesRoute = createRoute({
  method: 'post',
  path: '/userprofiles/{profileId}/targetingTemplates',
  tags: ['targetingTemplates'],
  description: 'Inserts a new targeting template.',
  operationId: 'dfareporting.targetingTemplates.insert',
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
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: TargetingTemplateSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: TargetingTemplateSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})

export const patchUserprofilesProfileIdTargetingTemplatesRoute = createRoute({
  method: 'patch',
  path: '/userprofiles/{profileId}/targetingTemplates',
  tags: ['targetingTemplates'],
  description: 'Updates an existing targeting template. This method supports patch semantics.',
  operationId: 'dfareporting.targetingTemplates.patch',
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
      id: z
        .string()
        .openapi({
          param: {
            description: 'TargetingTemplate ID.',
            in: 'query',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: TargetingTemplateSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: TargetingTemplateSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})

export const getUserprofilesProfileIdTargetingTemplatesIdRoute = createRoute({
  method: 'get',
  path: '/userprofiles/{profileId}/targetingTemplates/{id}',
  tags: ['targetingTemplates'],
  description: 'Gets one targeting template by ID.',
  operationId: 'dfareporting.targetingTemplates.get',
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
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'Targeting template ID.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: TargetingTemplateSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})

export const getUserprofilesProfileIdUserRolePermissionGroupsRoute = createRoute({
  method: 'get',
  path: '/userprofiles/{profileId}/userRolePermissionGroups',
  tags: ['userRolePermissionGroups'],
  description: 'Gets a list of all supported user role permission groups.',
  operationId: 'dfareporting.userRolePermissionGroups.list',
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
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: UserRolePermissionGroupsListResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})

export const getUserprofilesProfileIdUserRolePermissionGroupsIdRoute = createRoute({
  method: 'get',
  path: '/userprofiles/{profileId}/userRolePermissionGroups/{id}',
  tags: ['userRolePermissionGroups'],
  description: 'Gets one user role permission group by ID.',
  operationId: 'dfareporting.userRolePermissionGroups.get',
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
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'User role permission group ID.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: UserRolePermissionGroupSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})

export const getUserprofilesProfileIdUserRolePermissionsRoute = createRoute({
  method: 'get',
  path: '/userprofiles/{profileId}/userRolePermissions',
  tags: ['userRolePermissions'],
  description: 'Gets a list of user role permissions, possibly filtered.',
  operationId: 'dfareporting.userRolePermissions.list',
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
      ids: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Select only user role permissions with these IDs.',
            explode: true,
            in: 'query',
            name: 'ids',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
    }),
    params: z.object({
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: UserRolePermissionsListResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})

export const getUserprofilesProfileIdUserRolePermissionsIdRoute = createRoute({
  method: 'get',
  path: '/userprofiles/{profileId}/userRolePermissions/{id}',
  tags: ['userRolePermissions'],
  description: 'Gets one user role permission by ID.',
  operationId: 'dfareporting.userRolePermissions.get',
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
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'User role permission ID.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: UserRolePermissionSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})

export const getUserprofilesProfileIdUserRolesRoute = createRoute({
  method: 'get',
  path: '/userprofiles/{profileId}/userRoles',
  tags: ['userRoles'],
  description: 'Retrieves a list of user roles, possibly filtered. This method supports paging.',
  operationId: 'dfareporting.userRoles.list',
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
      accountUserRoleOnly: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Select only account level user roles not associated with any specific subaccount.',
            in: 'query',
            name: 'accountUserRoleOnly',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      ids: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Select only user roles with the specified IDs.',
            explode: true,
            in: 'query',
            name: 'ids',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(1000),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Maximum number of results to return.',
            in: 'query',
            name: 'maxResults',
            schema: { maximum: 1000, minimum: 0, type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Value of the nextPageToken from the previous result page.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      searchString: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Allows searching for objects by name or ID. Wildcards (*) are allowed. For example, "userrole*2015" will return objects with names like "userrole June 2015", "userrole April 2015", or simply "userrole 2015". Most of the searches also add wildcards implicitly at the start and the end of the search string. For example, a search string of "userrole" will match objects with name "my userrole", "userrole 2015", or simply "userrole".',
            in: 'query',
            name: 'searchString',
            schema: { type: 'string' },
            required: false,
          },
        }),
      sortField: z
        .enum(['ID', 'NAME'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Field by which to sort the list.',
            in: 'query',
            name: 'sortField',
            schema: { enum: ['ID', 'NAME'], type: 'string' },
            required: false,
          },
        }),
      sortOrder: z
        .enum(['ASCENDING', 'DESCENDING'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Order of sorted results.',
            in: 'query',
            name: 'sortOrder',
            schema: { enum: ['ASCENDING', 'DESCENDING'], type: 'string' },
            required: false,
          },
        }),
      subaccountId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Select only user roles that belong to this subaccount.',
            in: 'query',
            name: 'subaccountId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: UserRolesListResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})

export const putUserprofilesProfileIdUserRolesRoute = createRoute({
  method: 'put',
  path: '/userprofiles/{profileId}/userRoles',
  tags: ['userRoles'],
  description: 'Updates an existing user role.',
  operationId: 'dfareporting.userRoles.update',
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
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: UserRoleSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: UserRoleSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})

export const postUserprofilesProfileIdUserRolesRoute = createRoute({
  method: 'post',
  path: '/userprofiles/{profileId}/userRoles',
  tags: ['userRoles'],
  description: 'Inserts a new user role.',
  operationId: 'dfareporting.userRoles.insert',
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
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: UserRoleSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: UserRoleSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})

export const patchUserprofilesProfileIdUserRolesRoute = createRoute({
  method: 'patch',
  path: '/userprofiles/{profileId}/userRoles',
  tags: ['userRoles'],
  description: 'Updates an existing user role. This method supports patch semantics.',
  operationId: 'dfareporting.userRoles.patch',
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
      id: z
        .string()
        .openapi({
          param: {
            description: 'UserRole ID.',
            in: 'query',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: UserRoleSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: UserRoleSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})

export const getUserprofilesProfileIdUserRolesIdRoute = createRoute({
  method: 'get',
  path: '/userprofiles/{profileId}/userRoles/{id}',
  tags: ['userRoles'],
  description: 'Gets one user role by ID.',
  operationId: 'dfareporting.userRoles.get',
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
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'User role ID.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: UserRoleSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})

export const deleteUserprofilesProfileIdUserRolesIdRoute = createRoute({
  method: 'delete',
  path: '/userprofiles/{profileId}/userRoles/{id}',
  tags: ['userRoles'],
  description: 'Deletes an existing user role.',
  operationId: 'dfareporting.userRoles.delete',
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
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'User role ID.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Successful response' } },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})

export const getUserprofilesProfileIdVideoFormatsRoute = createRoute({
  method: 'get',
  path: '/userprofiles/{profileId}/videoFormats',
  tags: ['videoFormats'],
  description: 'Lists available video formats.',
  operationId: 'dfareporting.videoFormats.list',
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
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: VideoFormatsListResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})

export const getUserprofilesProfileIdVideoFormatsIdRoute = createRoute({
  method: 'get',
  path: '/userprofiles/{profileId}/videoFormats/{id}',
  tags: ['videoFormats'],
  description: 'Gets one video format by ID.',
  operationId: 'dfareporting.videoFormats.get',
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
      profileId: z
        .string()
        .openapi({
          param: {
            description: 'User profile ID associated with this request.',
            in: 'path',
            name: 'profileId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      id: z
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
            description: 'Video format ID.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: VideoFormatSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/dfatrafficking'],
      Oauth2c: ['https://www.googleapis.com/auth/dfatrafficking'],
    },
  ],
})
