import { createRoute, z } from '@hono/zod-openapi'

const PathQueryOptionsFilterSchema = z
  .object({
    filter: z
      .enum([
        'FILTER_UNKNOWN',
        'FILTER_DATE',
        'FILTER_DAY_OF_WEEK',
        'FILTER_WEEK',
        'FILTER_MONTH',
        'FILTER_YEAR',
        'FILTER_TIME_OF_DAY',
        'FILTER_CONVERSION_DELAY',
        'FILTER_CREATIVE_ID',
        'FILTER_CREATIVE_SIZE',
        'FILTER_CREATIVE_TYPE',
        'FILTER_EXCHANGE_ID',
        'FILTER_AD_POSITION',
        'FILTER_PUBLIC_INVENTORY',
        'FILTER_INVENTORY_SOURCE',
        'FILTER_CITY',
        'FILTER_REGION',
        'FILTER_DMA',
        'FILTER_COUNTRY',
        'FILTER_SITE_ID',
        'FILTER_CHANNEL_ID',
        'FILTER_PARTNER',
        'FILTER_ADVERTISER',
        'FILTER_INSERTION_ORDER',
        'FILTER_LINE_ITEM',
        'FILTER_PARTNER_CURRENCY',
        'FILTER_ADVERTISER_CURRENCY',
        'FILTER_ADVERTISER_TIMEZONE',
        'FILTER_LINE_ITEM_TYPE',
        'FILTER_USER_LIST',
        'FILTER_USER_LIST_FIRST_PARTY',
        'FILTER_USER_LIST_THIRD_PARTY',
        'FILTER_TARGETED_USER_LIST',
        'FILTER_DATA_PROVIDER',
        'FILTER_ORDER_ID',
        'FILTER_VIDEO_PLAYER_SIZE',
        'FILTER_VIDEO_DURATION_SECONDS',
        'FILTER_KEYWORD',
        'FILTER_PAGE_CATEGORY',
        'FILTER_CAMPAIGN_DAILY_FREQUENCY',
        'FILTER_LINE_ITEM_DAILY_FREQUENCY',
        'FILTER_LINE_ITEM_LIFETIME_FREQUENCY',
        'FILTER_OS',
        'FILTER_BROWSER',
        'FILTER_CARRIER',
        'FILTER_SITE_LANGUAGE',
        'FILTER_INVENTORY_FORMAT',
        'FILTER_ZIP_CODE',
        'FILTER_VIDEO_RATING_TIER',
        'FILTER_VIDEO_FORMAT_SUPPORT',
        'FILTER_VIDEO_SKIPPABLE_SUPPORT',
        'FILTER_VIDEO_CREATIVE_DURATION',
        'FILTER_PAGE_LAYOUT',
        'FILTER_VIDEO_AD_POSITION_IN_STREAM',
        'FILTER_AGE',
        'FILTER_GENDER',
        'FILTER_QUARTER',
        'FILTER_TRUEVIEW_CONVERSION_TYPE',
        'FILTER_MOBILE_GEO',
        'FILTER_MRAID_SUPPORT',
        'FILTER_ACTIVE_VIEW_EXPECTED_VIEWABILITY',
        'FILTER_VIDEO_CREATIVE_DURATION_SKIPPABLE',
        'FILTER_NIELSEN_COUNTRY_CODE',
        'FILTER_NIELSEN_DEVICE_ID',
        'FILTER_NIELSEN_GENDER',
        'FILTER_NIELSEN_AGE',
        'FILTER_INVENTORY_SOURCE_TYPE',
        'FILTER_CREATIVE_WIDTH',
        'FILTER_CREATIVE_HEIGHT',
        'FILTER_DFP_ORDER_ID',
        'FILTER_TRUEVIEW_AGE',
        'FILTER_TRUEVIEW_GENDER',
        'FILTER_TRUEVIEW_PARENTAL_STATUS',
        'FILTER_TRUEVIEW_REMARKETING_LIST',
        'FILTER_TRUEVIEW_INTEREST',
        'FILTER_TRUEVIEW_AD_GROUP_ID',
        'FILTER_TRUEVIEW_AD_GROUP_AD_ID',
        'FILTER_TRUEVIEW_IAR_LANGUAGE',
        'FILTER_TRUEVIEW_IAR_GENDER',
        'FILTER_TRUEVIEW_IAR_AGE',
        'FILTER_TRUEVIEW_IAR_CATEGORY',
        'FILTER_TRUEVIEW_IAR_COUNTRY',
        'FILTER_TRUEVIEW_IAR_CITY',
        'FILTER_TRUEVIEW_IAR_REGION',
        'FILTER_TRUEVIEW_IAR_ZIPCODE',
        'FILTER_TRUEVIEW_IAR_REMARKETING_LIST',
        'FILTER_TRUEVIEW_IAR_INTEREST',
        'FILTER_TRUEVIEW_IAR_PARENTAL_STATUS',
        'FILTER_TRUEVIEW_IAR_TIME_OF_DAY',
        'FILTER_TRUEVIEW_CUSTOM_AFFINITY',
        'FILTER_TRUEVIEW_CATEGORY',
        'FILTER_TRUEVIEW_KEYWORD',
        'FILTER_TRUEVIEW_PLACEMENT',
        'FILTER_TRUEVIEW_URL',
        'FILTER_TRUEVIEW_COUNTRY',
        'FILTER_TRUEVIEW_REGION',
        'FILTER_TRUEVIEW_CITY',
        'FILTER_TRUEVIEW_DMA',
        'FILTER_TRUEVIEW_ZIPCODE',
        'FILTER_NOT_SUPPORTED',
        'FILTER_MEDIA_PLAN',
        'FILTER_TRUEVIEW_IAR_YOUTUBE_CHANNEL',
        'FILTER_TRUEVIEW_IAR_YOUTUBE_VIDEO',
        'FILTER_SKIPPABLE_SUPPORT',
        'FILTER_COMPANION_CREATIVE_ID',
        'FILTER_BUDGET_SEGMENT_DESCRIPTION',
        'FILTER_FLOODLIGHT_ACTIVITY_ID',
        'FILTER_DEVICE_MODEL',
        'FILTER_DEVICE_MAKE',
        'FILTER_DEVICE_TYPE',
        'FILTER_CREATIVE_ATTRIBUTE',
        'FILTER_INVENTORY_COMMITMENT_TYPE',
        'FILTER_INVENTORY_RATE_TYPE',
        'FILTER_INVENTORY_DELIVERY_METHOD',
        'FILTER_INVENTORY_SOURCE_EXTERNAL_ID',
        'FILTER_AUTHORIZED_SELLER_STATE',
        'FILTER_VIDEO_DURATION_SECONDS_RANGE',
        'FILTER_PARTNER_NAME',
        'FILTER_PARTNER_STATUS',
        'FILTER_ADVERTISER_NAME',
        'FILTER_ADVERTISER_INTEGRATION_CODE',
        'FILTER_ADVERTISER_INTEGRATION_STATUS',
        'FILTER_CARRIER_NAME',
        'FILTER_CHANNEL_NAME',
        'FILTER_CITY_NAME',
        'FILTER_COMPANION_CREATIVE_NAME',
        'FILTER_USER_LIST_FIRST_PARTY_NAME',
        'FILTER_USER_LIST_THIRD_PARTY_NAME',
        'FILTER_NIELSEN_RESTATEMENT_DATE',
        'FILTER_NIELSEN_DATE_RANGE',
        'FILTER_INSERTION_ORDER_NAME',
        'FILTER_REGION_NAME',
        'FILTER_DMA_NAME',
        'FILTER_TRUEVIEW_IAR_REGION_NAME',
        'FILTER_TRUEVIEW_DMA_NAME',
        'FILTER_TRUEVIEW_REGION_NAME',
        'FILTER_ACTIVE_VIEW_CUSTOM_METRIC_ID',
        'FILTER_ACTIVE_VIEW_CUSTOM_METRIC_NAME',
        'FILTER_AD_TYPE',
        'FILTER_ALGORITHM',
        'FILTER_ALGORITHM_ID',
        'FILTER_AMP_PAGE_REQUEST',
        'FILTER_ANONYMOUS_INVENTORY_MODELING',
        'FILTER_APP_URL',
        'FILTER_APP_URL_EXCLUDED',
        'FILTER_ATTRIBUTED_USERLIST',
        'FILTER_ATTRIBUTED_USERLIST_COST',
        'FILTER_ATTRIBUTED_USERLIST_TYPE',
        'FILTER_ATTRIBUTION_MODEL',
        'FILTER_AUDIENCE_LIST',
        'FILTER_AUDIENCE_LIST_COST',
        'FILTER_AUDIENCE_LIST_TYPE',
        'FILTER_AUDIENCE_NAME',
        'FILTER_AUDIENCE_TYPE',
        'FILTER_BILLABLE_OUTCOME',
        'FILTER_BRAND_LIFT_TYPE',
        'FILTER_CHANNEL_TYPE',
        'FILTER_CM_PLACEMENT_ID',
        'FILTER_CONVERSION_SOURCE',
        'FILTER_CONVERSION_SOURCE_ID',
        'FILTER_COUNTRY_ID',
        'FILTER_CREATIVE',
        'FILTER_CREATIVE_ASSET',
        'FILTER_CREATIVE_INTEGRATION_CODE',
        'FILTER_CREATIVE_RENDERED_IN_AMP',
        'FILTER_CREATIVE_SOURCE',
        'FILTER_CREATIVE_STATUS',
        'FILTER_DATA_PROVIDER_NAME',
        'FILTER_DETAILED_DEMOGRAPHICS',
        'FILTER_DETAILED_DEMOGRAPHICS_ID',
        'FILTER_DEVICE',
        'FILTER_GAM_INSERTION_ORDER',
        'FILTER_GAM_LINE_ITEM',
        'FILTER_GAM_LINE_ITEM_ID',
        'FILTER_DIGITAL_CONTENT_LABEL',
        'FILTER_DOMAIN',
        'FILTER_ELIGIBLE_COOKIES_ON_FIRST_PARTY_AUDIENCE_LIST',
        'FILTER_ELIGIBLE_COOKIES_ON_THIRD_PARTY_AUDIENCE_LIST_AND_INTEREST',
        'FILTER_EXCHANGE',
        'FILTER_EXCHANGE_CODE',
        'FILTER_EXTENSION',
        'FILTER_EXTENSION_STATUS',
        'FILTER_EXTENSION_TYPE',
        'FILTER_FIRST_PARTY_AUDIENCE_LIST_COST',
        'FILTER_FIRST_PARTY_AUDIENCE_LIST_TYPE',
        'FILTER_FLOODLIGHT_ACTIVITY',
        'FILTER_FORMAT',
        'FILTER_GMAIL_AGE',
        'FILTER_GMAIL_CITY',
        'FILTER_GMAIL_COUNTRY',
        'FILTER_GMAIL_COUNTRY_NAME',
        'FILTER_GMAIL_DEVICE_TYPE',
        'FILTER_GMAIL_DEVICE_TYPE_NAME',
        'FILTER_GMAIL_GENDER',
        'FILTER_GMAIL_REGION',
        'FILTER_GMAIL_REMARKETING_LIST',
        'FILTER_HOUSEHOLD_INCOME',
        'FILTER_IMPRESSION_COUNTING_METHOD',
        'FILTER_YOUTUBE_PROGRAMMATIC_GUARANTEED_INSERTION_ORDER',
        'FILTER_INSERTION_ORDER_INTEGRATION_CODE',
        'FILTER_INSERTION_ORDER_STATUS',
        'FILTER_INTEREST',
        'FILTER_INVENTORY_SOURCE_GROUP',
        'FILTER_INVENTORY_SOURCE_GROUP_ID',
        'FILTER_INVENTORY_SOURCE_ID',
        'FILTER_INVENTORY_SOURCE_NAME',
        'FILTER_LIFE_EVENT',
        'FILTER_LIFE_EVENTS',
        'FILTER_LINE_ITEM_INTEGRATION_CODE',
        'FILTER_LINE_ITEM_NAME',
        'FILTER_LINE_ITEM_STATUS',
        'FILTER_MATCH_RATIO',
        'FILTER_MEASUREMENT_SOURCE',
        'FILTER_MEDIA_PLAN_NAME',
        'FILTER_PARENTAL_STATUS',
        'FILTER_PLACEMENT_ALL_YOUTUBE_CHANNELS',
        'FILTER_PLATFORM',
        'FILTER_PLAYBACK_METHOD',
        'FILTER_POSITION_IN_CONTENT',
        'FILTER_PUBLISHER_PROPERTY',
        'FILTER_PUBLISHER_PROPERTY_ID',
        'FILTER_PUBLISHER_PROPERTY_SECTION',
        'FILTER_PUBLISHER_PROPERTY_SECTION_ID',
        'FILTER_REFUND_REASON',
        'FILTER_REMARKETING_LIST',
        'FILTER_REWARDED',
        'FILTER_SENSITIVE_CATEGORY',
        'FILTER_SERVED_PIXEL_DENSITY',
        'FILTER_TARGETED_DATA_PROVIDERS',
        'FILTER_THIRD_PARTY_AUDIENCE_LIST_COST',
        'FILTER_THIRD_PARTY_AUDIENCE_LIST_TYPE',
        'FILTER_TRUEVIEW_AD',
        'FILTER_TRUEVIEW_AD_GROUP',
        'FILTER_TRUEVIEW_DETAILED_DEMOGRAPHICS',
        'FILTER_TRUEVIEW_DETAILED_DEMOGRAPHICS_ID',
        'FILTER_TRUEVIEW_HOUSEHOLD_INCOME',
        'FILTER_TRUEVIEW_IAR_COUNTRY_NAME',
        'FILTER_TRUEVIEW_REMARKETING_LIST_NAME',
        'FILTER_VARIANT_ID',
        'FILTER_VARIANT_NAME',
        'FILTER_VARIANT_VERSION',
        'FILTER_VERIFICATION_VIDEO_PLAYER_SIZE',
        'FILTER_VERIFICATION_VIDEO_POSITION',
        'FILTER_VIDEO_COMPANION_CREATIVE_SIZE',
        'FILTER_VIDEO_CONTINUOUS_PLAY',
        'FILTER_VIDEO_DURATION',
        'FILTER_YOUTUBE_ADAPTED_AUDIENCE_LIST',
        'FILTER_YOUTUBE_AD_VIDEO',
        'FILTER_YOUTUBE_AD_VIDEO_ID',
        'FILTER_YOUTUBE_CHANNEL',
        'FILTER_YOUTUBE_PROGRAMMATIC_GUARANTEED_ADVERTISER',
        'FILTER_YOUTUBE_PROGRAMMATIC_GUARANTEED_PARTNER',
        'FILTER_YOUTUBE_VIDEO',
        'FILTER_ZIP_POSTAL_CODE',
        'FILTER_PLACEMENT_NAME_ALL_YOUTUBE_CHANNELS',
        'FILTER_TRUEVIEW_PLACEMENT_ID',
        'FILTER_PATH_PATTERN_ID',
        'FILTER_PATH_EVENT_INDEX',
        'FILTER_EVENT_TYPE',
        'FILTER_CHANNEL_GROUPING',
        'FILTER_OM_SDK_AVAILABLE',
        'FILTER_DATA_SOURCE',
        'FILTER_CM360_PLACEMENT_ID',
        'FILTER_TRUEVIEW_CLICK_TYPE_NAME',
        'FILTER_TRUEVIEW_AD_TYPE_NAME',
        'FILTER_VIDEO_CONTENT_DURATION',
        'FILTER_MATCHED_GENRE_TARGET',
        'FILTER_VIDEO_CONTENT_LIVE_STREAM',
        'FILTER_BUDGET_SEGMENT_TYPE',
        'FILTER_BUDGET_SEGMENT_BUDGET',
        'FILTER_BUDGET_SEGMENT_START_DATE',
        'FILTER_BUDGET_SEGMENT_END_DATE',
        'FILTER_BUDGET_SEGMENT_PACING_PERCENTAGE',
        'FILTER_LINE_ITEM_BUDGET',
        'FILTER_LINE_ITEM_START_DATE',
        'FILTER_LINE_ITEM_END_DATE',
        'FILTER_INSERTION_ORDER_GOAL_TYPE',
        'FILTER_LINE_ITEM_PACING_PERCENTAGE',
        'FILTER_INSERTION_ORDER_GOAL_VALUE',
        'FILTER_OMID_CAPABLE',
        'FILTER_VENDOR_MEASUREMENT_MODE',
        'FILTER_IMPRESSION_LOSS_REJECTION_REASON',
        'FILTER_VERIFICATION_VIDEO_PLAYER_SIZE_START',
        'FILTER_VERIFICATION_VIDEO_PLAYER_SIZE_FIRST_QUARTILE',
        'FILTER_VERIFICATION_VIDEO_PLAYER_SIZE_MID_POINT',
        'FILTER_VERIFICATION_VIDEO_PLAYER_SIZE_THIRD_QUARTILE',
        'FILTER_VERIFICATION_VIDEO_PLAYER_SIZE_COMPLETE',
        'FILTER_VERIFICATION_VIDEO_RESIZED',
        'FILTER_VERIFICATION_AUDIBILITY_START',
        'FILTER_VERIFICATION_AUDIBILITY_COMPLETE',
        'FILTER_MEDIA_TYPE',
        'FILTER_AUDIO_FEED_TYPE_NAME',
        'FILTER_TRUEVIEW_TARGETING_EXPANSION',
        'FILTER_PUBLISHER_TRAFFIC_SOURCE',
      ])
      .exactOptional()
      .openapi({ description: 'Dimension the filter is applied to.' }),
    match: z
      .enum(['UNKNOWN', 'EXACT', 'PARTIAL', 'BEGINS_WITH', 'WILDCARD_EXPRESSION'])
      .exactOptional()
      .openapi({ description: 'Indicates how the filter should be matched to the value.' }),
    values: z.array(z.string()).exactOptional().openapi({ description: 'Value to filter on.' }),
  })
  .openapi({ description: 'Dimension Filter on path events.', required: [] })
  .openapi('PathQueryOptionsFilter')

const EventFilterSchema = z
  .object({
    dimensionFilter: PathQueryOptionsFilterSchema.exactOptional().openapi({
      description: 'Filter on a dimension.',
    }),
  })
  .openapi({
    description:
      'Defines the type of filter to be applied to the path, a DV360 event dimension filter.',
    required: [],
  })
  .openapi('EventFilter')

const DisjunctiveMatchStatementSchema = z
  .object({
    eventFilters: z
      .array(EventFilterSchema)
      .exactOptional()
      .openapi({
        description:
          'Filters. There is a limit of 100 filters that can be set per disjunctive match statement.',
      }),
  })
  .openapi({
    description: "DisjunctiveMatchStatement that OR's all contained filters.",
    required: [],
  })
  .openapi('DisjunctiveMatchStatement')

const RuleSchema = z
  .object({
    disjunctiveMatchStatements: z.array(DisjunctiveMatchStatementSchema).exactOptional(),
    name: z.string().exactOptional().openapi({ description: 'Rule name.' }),
  })
  .openapi({
    description:
      'A Rule defines a name, and a boolean expression in [conjunctive normal form](http: //mathworld.wolfram.com/ConjunctiveNormalForm.html){.external} that can be // applied to a path event to determine if that name should be applied.',
    required: [],
  })
  .openapi('Rule')

const ChannelGroupingSchema = z
  .object({
    fallbackName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name to apply to an event that does not match any of the rules in the channel grouping.',
      }),
    name: z.string().exactOptional().openapi({ description: 'Channel Grouping name.' }),
    rules: z
      .array(RuleSchema)
      .exactOptional()
      .openapi({
        description:
          'Rules within Channel Grouping. There is a limit of 100 rules that can be set per channel grouping.',
      }),
  })
  .openapi({
    description:
      'A channel grouping defines a set of rules that can be used to categorize events in a path report.',
    required: [],
  })
  .openapi('ChannelGrouping')

const PathFilterSchema = z
  .object({
    eventFilters: z
      .array(EventFilterSchema)
      .exactOptional()
      .openapi({ description: 'Filter on an event to be applied to some part of the path.' }),
    pathMatchPosition: z
      .enum(['ANY', 'FIRST', 'LAST'])
      .exactOptional()
      .openapi({
        description:
          'Indicates the position of the path the filter should match to (first, last, or any event in path).',
      }),
  })
  .openapi({
    description:
      "Path filters specify which paths to include in a report. A path is the result of combining DV360 events based on User ID to create a workflow of users' actions. When a path filter is set, the resulting report will only include paths that match the specified event at the specified position. All other paths will be excluded.",
    required: [],
  })
  .openapi('PathFilter')

const PathQueryOptionsSchema = z
  .object({
    channelGrouping: ChannelGroupingSchema.exactOptional().openapi({
      description: 'Custom Channel Groupings.',
    }),
    pathFilters: z
      .array(PathFilterSchema)
      .exactOptional()
      .openapi({
        description:
          'Path Filters. There is a limit of 100 path filters that can be set per report.',
      }),
  })
  .openapi({ description: 'Path Query Options for Report Options.', required: [] })
  .openapi('PathQueryOptions')

type OptionsType = {
  includeOnlyTargetedUserLists?: boolean
  pathQueryOptions?: z.infer<typeof PathQueryOptionsSchema>
}

const FilterPairSchema = z
  .object({
    type: z
      .enum([
        'FILTER_UNKNOWN',
        'FILTER_DATE',
        'FILTER_DAY_OF_WEEK',
        'FILTER_WEEK',
        'FILTER_MONTH',
        'FILTER_YEAR',
        'FILTER_TIME_OF_DAY',
        'FILTER_CONVERSION_DELAY',
        'FILTER_CREATIVE_ID',
        'FILTER_CREATIVE_SIZE',
        'FILTER_CREATIVE_TYPE',
        'FILTER_EXCHANGE_ID',
        'FILTER_AD_POSITION',
        'FILTER_PUBLIC_INVENTORY',
        'FILTER_INVENTORY_SOURCE',
        'FILTER_CITY',
        'FILTER_REGION',
        'FILTER_DMA',
        'FILTER_COUNTRY',
        'FILTER_SITE_ID',
        'FILTER_CHANNEL_ID',
        'FILTER_PARTNER',
        'FILTER_ADVERTISER',
        'FILTER_INSERTION_ORDER',
        'FILTER_LINE_ITEM',
        'FILTER_PARTNER_CURRENCY',
        'FILTER_ADVERTISER_CURRENCY',
        'FILTER_ADVERTISER_TIMEZONE',
        'FILTER_LINE_ITEM_TYPE',
        'FILTER_USER_LIST',
        'FILTER_USER_LIST_FIRST_PARTY',
        'FILTER_USER_LIST_THIRD_PARTY',
        'FILTER_TARGETED_USER_LIST',
        'FILTER_DATA_PROVIDER',
        'FILTER_ORDER_ID',
        'FILTER_VIDEO_PLAYER_SIZE',
        'FILTER_VIDEO_DURATION_SECONDS',
        'FILTER_KEYWORD',
        'FILTER_PAGE_CATEGORY',
        'FILTER_CAMPAIGN_DAILY_FREQUENCY',
        'FILTER_LINE_ITEM_DAILY_FREQUENCY',
        'FILTER_LINE_ITEM_LIFETIME_FREQUENCY',
        'FILTER_OS',
        'FILTER_BROWSER',
        'FILTER_CARRIER',
        'FILTER_SITE_LANGUAGE',
        'FILTER_INVENTORY_FORMAT',
        'FILTER_ZIP_CODE',
        'FILTER_VIDEO_RATING_TIER',
        'FILTER_VIDEO_FORMAT_SUPPORT',
        'FILTER_VIDEO_SKIPPABLE_SUPPORT',
        'FILTER_VIDEO_CREATIVE_DURATION',
        'FILTER_PAGE_LAYOUT',
        'FILTER_VIDEO_AD_POSITION_IN_STREAM',
        'FILTER_AGE',
        'FILTER_GENDER',
        'FILTER_QUARTER',
        'FILTER_TRUEVIEW_CONVERSION_TYPE',
        'FILTER_MOBILE_GEO',
        'FILTER_MRAID_SUPPORT',
        'FILTER_ACTIVE_VIEW_EXPECTED_VIEWABILITY',
        'FILTER_VIDEO_CREATIVE_DURATION_SKIPPABLE',
        'FILTER_NIELSEN_COUNTRY_CODE',
        'FILTER_NIELSEN_DEVICE_ID',
        'FILTER_NIELSEN_GENDER',
        'FILTER_NIELSEN_AGE',
        'FILTER_INVENTORY_SOURCE_TYPE',
        'FILTER_CREATIVE_WIDTH',
        'FILTER_CREATIVE_HEIGHT',
        'FILTER_DFP_ORDER_ID',
        'FILTER_TRUEVIEW_AGE',
        'FILTER_TRUEVIEW_GENDER',
        'FILTER_TRUEVIEW_PARENTAL_STATUS',
        'FILTER_TRUEVIEW_REMARKETING_LIST',
        'FILTER_TRUEVIEW_INTEREST',
        'FILTER_TRUEVIEW_AD_GROUP_ID',
        'FILTER_TRUEVIEW_AD_GROUP_AD_ID',
        'FILTER_TRUEVIEW_IAR_LANGUAGE',
        'FILTER_TRUEVIEW_IAR_GENDER',
        'FILTER_TRUEVIEW_IAR_AGE',
        'FILTER_TRUEVIEW_IAR_CATEGORY',
        'FILTER_TRUEVIEW_IAR_COUNTRY',
        'FILTER_TRUEVIEW_IAR_CITY',
        'FILTER_TRUEVIEW_IAR_REGION',
        'FILTER_TRUEVIEW_IAR_ZIPCODE',
        'FILTER_TRUEVIEW_IAR_REMARKETING_LIST',
        'FILTER_TRUEVIEW_IAR_INTEREST',
        'FILTER_TRUEVIEW_IAR_PARENTAL_STATUS',
        'FILTER_TRUEVIEW_IAR_TIME_OF_DAY',
        'FILTER_TRUEVIEW_CUSTOM_AFFINITY',
        'FILTER_TRUEVIEW_CATEGORY',
        'FILTER_TRUEVIEW_KEYWORD',
        'FILTER_TRUEVIEW_PLACEMENT',
        'FILTER_TRUEVIEW_URL',
        'FILTER_TRUEVIEW_COUNTRY',
        'FILTER_TRUEVIEW_REGION',
        'FILTER_TRUEVIEW_CITY',
        'FILTER_TRUEVIEW_DMA',
        'FILTER_TRUEVIEW_ZIPCODE',
        'FILTER_NOT_SUPPORTED',
        'FILTER_MEDIA_PLAN',
        'FILTER_TRUEVIEW_IAR_YOUTUBE_CHANNEL',
        'FILTER_TRUEVIEW_IAR_YOUTUBE_VIDEO',
        'FILTER_SKIPPABLE_SUPPORT',
        'FILTER_COMPANION_CREATIVE_ID',
        'FILTER_BUDGET_SEGMENT_DESCRIPTION',
        'FILTER_FLOODLIGHT_ACTIVITY_ID',
        'FILTER_DEVICE_MODEL',
        'FILTER_DEVICE_MAKE',
        'FILTER_DEVICE_TYPE',
        'FILTER_CREATIVE_ATTRIBUTE',
        'FILTER_INVENTORY_COMMITMENT_TYPE',
        'FILTER_INVENTORY_RATE_TYPE',
        'FILTER_INVENTORY_DELIVERY_METHOD',
        'FILTER_INVENTORY_SOURCE_EXTERNAL_ID',
        'FILTER_AUTHORIZED_SELLER_STATE',
        'FILTER_VIDEO_DURATION_SECONDS_RANGE',
        'FILTER_PARTNER_NAME',
        'FILTER_PARTNER_STATUS',
        'FILTER_ADVERTISER_NAME',
        'FILTER_ADVERTISER_INTEGRATION_CODE',
        'FILTER_ADVERTISER_INTEGRATION_STATUS',
        'FILTER_CARRIER_NAME',
        'FILTER_CHANNEL_NAME',
        'FILTER_CITY_NAME',
        'FILTER_COMPANION_CREATIVE_NAME',
        'FILTER_USER_LIST_FIRST_PARTY_NAME',
        'FILTER_USER_LIST_THIRD_PARTY_NAME',
        'FILTER_NIELSEN_RESTATEMENT_DATE',
        'FILTER_NIELSEN_DATE_RANGE',
        'FILTER_INSERTION_ORDER_NAME',
        'FILTER_REGION_NAME',
        'FILTER_DMA_NAME',
        'FILTER_TRUEVIEW_IAR_REGION_NAME',
        'FILTER_TRUEVIEW_DMA_NAME',
        'FILTER_TRUEVIEW_REGION_NAME',
        'FILTER_ACTIVE_VIEW_CUSTOM_METRIC_ID',
        'FILTER_ACTIVE_VIEW_CUSTOM_METRIC_NAME',
        'FILTER_AD_TYPE',
        'FILTER_ALGORITHM',
        'FILTER_ALGORITHM_ID',
        'FILTER_AMP_PAGE_REQUEST',
        'FILTER_ANONYMOUS_INVENTORY_MODELING',
        'FILTER_APP_URL',
        'FILTER_APP_URL_EXCLUDED',
        'FILTER_ATTRIBUTED_USERLIST',
        'FILTER_ATTRIBUTED_USERLIST_COST',
        'FILTER_ATTRIBUTED_USERLIST_TYPE',
        'FILTER_ATTRIBUTION_MODEL',
        'FILTER_AUDIENCE_LIST',
        'FILTER_AUDIENCE_LIST_COST',
        'FILTER_AUDIENCE_LIST_TYPE',
        'FILTER_AUDIENCE_NAME',
        'FILTER_AUDIENCE_TYPE',
        'FILTER_BILLABLE_OUTCOME',
        'FILTER_BRAND_LIFT_TYPE',
        'FILTER_CHANNEL_TYPE',
        'FILTER_CM_PLACEMENT_ID',
        'FILTER_CONVERSION_SOURCE',
        'FILTER_CONVERSION_SOURCE_ID',
        'FILTER_COUNTRY_ID',
        'FILTER_CREATIVE',
        'FILTER_CREATIVE_ASSET',
        'FILTER_CREATIVE_INTEGRATION_CODE',
        'FILTER_CREATIVE_RENDERED_IN_AMP',
        'FILTER_CREATIVE_SOURCE',
        'FILTER_CREATIVE_STATUS',
        'FILTER_DATA_PROVIDER_NAME',
        'FILTER_DETAILED_DEMOGRAPHICS',
        'FILTER_DETAILED_DEMOGRAPHICS_ID',
        'FILTER_DEVICE',
        'FILTER_GAM_INSERTION_ORDER',
        'FILTER_GAM_LINE_ITEM',
        'FILTER_GAM_LINE_ITEM_ID',
        'FILTER_DIGITAL_CONTENT_LABEL',
        'FILTER_DOMAIN',
        'FILTER_ELIGIBLE_COOKIES_ON_FIRST_PARTY_AUDIENCE_LIST',
        'FILTER_ELIGIBLE_COOKIES_ON_THIRD_PARTY_AUDIENCE_LIST_AND_INTEREST',
        'FILTER_EXCHANGE',
        'FILTER_EXCHANGE_CODE',
        'FILTER_EXTENSION',
        'FILTER_EXTENSION_STATUS',
        'FILTER_EXTENSION_TYPE',
        'FILTER_FIRST_PARTY_AUDIENCE_LIST_COST',
        'FILTER_FIRST_PARTY_AUDIENCE_LIST_TYPE',
        'FILTER_FLOODLIGHT_ACTIVITY',
        'FILTER_FORMAT',
        'FILTER_GMAIL_AGE',
        'FILTER_GMAIL_CITY',
        'FILTER_GMAIL_COUNTRY',
        'FILTER_GMAIL_COUNTRY_NAME',
        'FILTER_GMAIL_DEVICE_TYPE',
        'FILTER_GMAIL_DEVICE_TYPE_NAME',
        'FILTER_GMAIL_GENDER',
        'FILTER_GMAIL_REGION',
        'FILTER_GMAIL_REMARKETING_LIST',
        'FILTER_HOUSEHOLD_INCOME',
        'FILTER_IMPRESSION_COUNTING_METHOD',
        'FILTER_YOUTUBE_PROGRAMMATIC_GUARANTEED_INSERTION_ORDER',
        'FILTER_INSERTION_ORDER_INTEGRATION_CODE',
        'FILTER_INSERTION_ORDER_STATUS',
        'FILTER_INTEREST',
        'FILTER_INVENTORY_SOURCE_GROUP',
        'FILTER_INVENTORY_SOURCE_GROUP_ID',
        'FILTER_INVENTORY_SOURCE_ID',
        'FILTER_INVENTORY_SOURCE_NAME',
        'FILTER_LIFE_EVENT',
        'FILTER_LIFE_EVENTS',
        'FILTER_LINE_ITEM_INTEGRATION_CODE',
        'FILTER_LINE_ITEM_NAME',
        'FILTER_LINE_ITEM_STATUS',
        'FILTER_MATCH_RATIO',
        'FILTER_MEASUREMENT_SOURCE',
        'FILTER_MEDIA_PLAN_NAME',
        'FILTER_PARENTAL_STATUS',
        'FILTER_PLACEMENT_ALL_YOUTUBE_CHANNELS',
        'FILTER_PLATFORM',
        'FILTER_PLAYBACK_METHOD',
        'FILTER_POSITION_IN_CONTENT',
        'FILTER_PUBLISHER_PROPERTY',
        'FILTER_PUBLISHER_PROPERTY_ID',
        'FILTER_PUBLISHER_PROPERTY_SECTION',
        'FILTER_PUBLISHER_PROPERTY_SECTION_ID',
        'FILTER_REFUND_REASON',
        'FILTER_REMARKETING_LIST',
        'FILTER_REWARDED',
        'FILTER_SENSITIVE_CATEGORY',
        'FILTER_SERVED_PIXEL_DENSITY',
        'FILTER_TARGETED_DATA_PROVIDERS',
        'FILTER_THIRD_PARTY_AUDIENCE_LIST_COST',
        'FILTER_THIRD_PARTY_AUDIENCE_LIST_TYPE',
        'FILTER_TRUEVIEW_AD',
        'FILTER_TRUEVIEW_AD_GROUP',
        'FILTER_TRUEVIEW_DETAILED_DEMOGRAPHICS',
        'FILTER_TRUEVIEW_DETAILED_DEMOGRAPHICS_ID',
        'FILTER_TRUEVIEW_HOUSEHOLD_INCOME',
        'FILTER_TRUEVIEW_IAR_COUNTRY_NAME',
        'FILTER_TRUEVIEW_REMARKETING_LIST_NAME',
        'FILTER_VARIANT_ID',
        'FILTER_VARIANT_NAME',
        'FILTER_VARIANT_VERSION',
        'FILTER_VERIFICATION_VIDEO_PLAYER_SIZE',
        'FILTER_VERIFICATION_VIDEO_POSITION',
        'FILTER_VIDEO_COMPANION_CREATIVE_SIZE',
        'FILTER_VIDEO_CONTINUOUS_PLAY',
        'FILTER_VIDEO_DURATION',
        'FILTER_YOUTUBE_ADAPTED_AUDIENCE_LIST',
        'FILTER_YOUTUBE_AD_VIDEO',
        'FILTER_YOUTUBE_AD_VIDEO_ID',
        'FILTER_YOUTUBE_CHANNEL',
        'FILTER_YOUTUBE_PROGRAMMATIC_GUARANTEED_ADVERTISER',
        'FILTER_YOUTUBE_PROGRAMMATIC_GUARANTEED_PARTNER',
        'FILTER_YOUTUBE_VIDEO',
        'FILTER_ZIP_POSTAL_CODE',
        'FILTER_PLACEMENT_NAME_ALL_YOUTUBE_CHANNELS',
        'FILTER_TRUEVIEW_PLACEMENT_ID',
        'FILTER_PATH_PATTERN_ID',
        'FILTER_PATH_EVENT_INDEX',
        'FILTER_EVENT_TYPE',
        'FILTER_CHANNEL_GROUPING',
        'FILTER_OM_SDK_AVAILABLE',
        'FILTER_DATA_SOURCE',
        'FILTER_CM360_PLACEMENT_ID',
        'FILTER_TRUEVIEW_CLICK_TYPE_NAME',
        'FILTER_TRUEVIEW_AD_TYPE_NAME',
        'FILTER_VIDEO_CONTENT_DURATION',
        'FILTER_MATCHED_GENRE_TARGET',
        'FILTER_VIDEO_CONTENT_LIVE_STREAM',
        'FILTER_BUDGET_SEGMENT_TYPE',
        'FILTER_BUDGET_SEGMENT_BUDGET',
        'FILTER_BUDGET_SEGMENT_START_DATE',
        'FILTER_BUDGET_SEGMENT_END_DATE',
        'FILTER_BUDGET_SEGMENT_PACING_PERCENTAGE',
        'FILTER_LINE_ITEM_BUDGET',
        'FILTER_LINE_ITEM_START_DATE',
        'FILTER_LINE_ITEM_END_DATE',
        'FILTER_INSERTION_ORDER_GOAL_TYPE',
        'FILTER_LINE_ITEM_PACING_PERCENTAGE',
        'FILTER_INSERTION_ORDER_GOAL_VALUE',
        'FILTER_OMID_CAPABLE',
        'FILTER_VENDOR_MEASUREMENT_MODE',
        'FILTER_IMPRESSION_LOSS_REJECTION_REASON',
        'FILTER_VERIFICATION_VIDEO_PLAYER_SIZE_START',
        'FILTER_VERIFICATION_VIDEO_PLAYER_SIZE_FIRST_QUARTILE',
        'FILTER_VERIFICATION_VIDEO_PLAYER_SIZE_MID_POINT',
        'FILTER_VERIFICATION_VIDEO_PLAYER_SIZE_THIRD_QUARTILE',
        'FILTER_VERIFICATION_VIDEO_PLAYER_SIZE_COMPLETE',
        'FILTER_VERIFICATION_VIDEO_RESIZED',
        'FILTER_VERIFICATION_AUDIBILITY_START',
        'FILTER_VERIFICATION_AUDIBILITY_COMPLETE',
        'FILTER_MEDIA_TYPE',
        'FILTER_AUDIO_FEED_TYPE_NAME',
        'FILTER_TRUEVIEW_TARGETING_EXPANSION',
        'FILTER_PUBLISHER_TRAFFIC_SOURCE',
      ])
      .exactOptional()
      .openapi({ description: 'Filter type.' }),
    value: z.string().exactOptional().openapi({ description: 'Filter value.' }),
  })
  .openapi({ description: 'Filter used to match traffic data in your report.', required: [] })
  .openapi('FilterPair')

const QueryMetadataSchema = z
  .object({
    dataRange: z
      .enum([
        'CUSTOM_DATES',
        'CURRENT_DAY',
        'PREVIOUS_DAY',
        'WEEK_TO_DATE',
        'MONTH_TO_DATE',
        'QUARTER_TO_DATE',
        'YEAR_TO_DATE',
        'PREVIOUS_WEEK',
        'PREVIOUS_HALF_MONTH',
        'PREVIOUS_MONTH',
        'PREVIOUS_QUARTER',
        'PREVIOUS_YEAR',
        'LAST_7_DAYS',
        'LAST_30_DAYS',
        'LAST_90_DAYS',
        'LAST_365_DAYS',
        'ALL_TIME',
        'LAST_14_DAYS',
        'TYPE_NOT_SUPPORTED',
        'LAST_60_DAYS',
      ])
      .exactOptional()
      .openapi({ description: 'Range of report data.' }),
    format: z
      .enum(['CSV', 'EXCEL_CSV', 'XLSX'])
      .exactOptional()
      .openapi({ description: 'Format of the generated report.' }),
    googleCloudStoragePathForLatestReport: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The path to the location in Google Cloud Storage where the latest report is stored.',
      }),
    googleDrivePathForLatestReport: z
      .string()
      .exactOptional()
      .openapi({ description: 'The path in Google Drive for the latest report.' }),
    latestReportRunTimeMs: z
      .string()
      .exactOptional()
      .openapi({ description: 'The time when the latest report started to run.' }),
    locale: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Locale of the generated reports. Valid values are cs CZECH de GERMAN en ENGLISH es SPANISH fr FRENCH it ITALIAN ja JAPANESE ko KOREAN pl POLISH pt-BR BRAZILIAN_PORTUGUESE ru RUSSIAN tr TURKISH uk UKRAINIAN zh-CN CHINA_CHINESE zh-TW TAIWAN_CHINESE An locale string not in the list above will generate reports in English.',
      }),
    reportCount: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Number of reports that have been generated for the query.' }),
    running: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the latest report is currently running.' }),
    sendNotification: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether to send an email notification when a report is ready. Default to false.',
      }),
    shareEmailAddress: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'List of email addresses which are sent email notifications when the report is finished. Separate from sendNotification.',
      }),
    title: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Query title. It is used to name the reports generated from this query.',
      }),
  })
  .openapi({ description: 'Query metadata.', required: [] })
  .openapi('QueryMetadata')

const OptionsSchema: z.ZodType<OptionsType> = z
  .lazy(() =>
    z
      .object({
        includeOnlyTargetedUserLists: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'Set to true and filter your report by `FILTER_INSERTION_ORDER` or `FILTER_LINE_ITEM` to include data for audience lists specifically targeted by those items.',
          }),
        pathQueryOptions: PathQueryOptionsSchema.exactOptional().openapi({
          description: 'Options that contain Path Filters and Custom Channel Groupings.',
        }),
      })
      .openapi({ description: 'Additional query options.', required: [] }),
  )
  .openapi('Options')

const ParametersSchema = z
  .object({
    filters: z
      .array(FilterPairSchema)
      .exactOptional()
      .openapi({ description: 'Filters used to match traffic data in your report.' }),
    groupBys: z
      .array(
        z.enum([
          'FILTER_UNKNOWN',
          'FILTER_DATE',
          'FILTER_DAY_OF_WEEK',
          'FILTER_WEEK',
          'FILTER_MONTH',
          'FILTER_YEAR',
          'FILTER_TIME_OF_DAY',
          'FILTER_CONVERSION_DELAY',
          'FILTER_CREATIVE_ID',
          'FILTER_CREATIVE_SIZE',
          'FILTER_CREATIVE_TYPE',
          'FILTER_EXCHANGE_ID',
          'FILTER_AD_POSITION',
          'FILTER_PUBLIC_INVENTORY',
          'FILTER_INVENTORY_SOURCE',
          'FILTER_CITY',
          'FILTER_REGION',
          'FILTER_DMA',
          'FILTER_COUNTRY',
          'FILTER_SITE_ID',
          'FILTER_CHANNEL_ID',
          'FILTER_PARTNER',
          'FILTER_ADVERTISER',
          'FILTER_INSERTION_ORDER',
          'FILTER_LINE_ITEM',
          'FILTER_PARTNER_CURRENCY',
          'FILTER_ADVERTISER_CURRENCY',
          'FILTER_ADVERTISER_TIMEZONE',
          'FILTER_LINE_ITEM_TYPE',
          'FILTER_USER_LIST',
          'FILTER_USER_LIST_FIRST_PARTY',
          'FILTER_USER_LIST_THIRD_PARTY',
          'FILTER_TARGETED_USER_LIST',
          'FILTER_DATA_PROVIDER',
          'FILTER_ORDER_ID',
          'FILTER_VIDEO_PLAYER_SIZE',
          'FILTER_VIDEO_DURATION_SECONDS',
          'FILTER_KEYWORD',
          'FILTER_PAGE_CATEGORY',
          'FILTER_CAMPAIGN_DAILY_FREQUENCY',
          'FILTER_LINE_ITEM_DAILY_FREQUENCY',
          'FILTER_LINE_ITEM_LIFETIME_FREQUENCY',
          'FILTER_OS',
          'FILTER_BROWSER',
          'FILTER_CARRIER',
          'FILTER_SITE_LANGUAGE',
          'FILTER_INVENTORY_FORMAT',
          'FILTER_ZIP_CODE',
          'FILTER_VIDEO_RATING_TIER',
          'FILTER_VIDEO_FORMAT_SUPPORT',
          'FILTER_VIDEO_SKIPPABLE_SUPPORT',
          'FILTER_VIDEO_CREATIVE_DURATION',
          'FILTER_PAGE_LAYOUT',
          'FILTER_VIDEO_AD_POSITION_IN_STREAM',
          'FILTER_AGE',
          'FILTER_GENDER',
          'FILTER_QUARTER',
          'FILTER_TRUEVIEW_CONVERSION_TYPE',
          'FILTER_MOBILE_GEO',
          'FILTER_MRAID_SUPPORT',
          'FILTER_ACTIVE_VIEW_EXPECTED_VIEWABILITY',
          'FILTER_VIDEO_CREATIVE_DURATION_SKIPPABLE',
          'FILTER_NIELSEN_COUNTRY_CODE',
          'FILTER_NIELSEN_DEVICE_ID',
          'FILTER_NIELSEN_GENDER',
          'FILTER_NIELSEN_AGE',
          'FILTER_INVENTORY_SOURCE_TYPE',
          'FILTER_CREATIVE_WIDTH',
          'FILTER_CREATIVE_HEIGHT',
          'FILTER_DFP_ORDER_ID',
          'FILTER_TRUEVIEW_AGE',
          'FILTER_TRUEVIEW_GENDER',
          'FILTER_TRUEVIEW_PARENTAL_STATUS',
          'FILTER_TRUEVIEW_REMARKETING_LIST',
          'FILTER_TRUEVIEW_INTEREST',
          'FILTER_TRUEVIEW_AD_GROUP_ID',
          'FILTER_TRUEVIEW_AD_GROUP_AD_ID',
          'FILTER_TRUEVIEW_IAR_LANGUAGE',
          'FILTER_TRUEVIEW_IAR_GENDER',
          'FILTER_TRUEVIEW_IAR_AGE',
          'FILTER_TRUEVIEW_IAR_CATEGORY',
          'FILTER_TRUEVIEW_IAR_COUNTRY',
          'FILTER_TRUEVIEW_IAR_CITY',
          'FILTER_TRUEVIEW_IAR_REGION',
          'FILTER_TRUEVIEW_IAR_ZIPCODE',
          'FILTER_TRUEVIEW_IAR_REMARKETING_LIST',
          'FILTER_TRUEVIEW_IAR_INTEREST',
          'FILTER_TRUEVIEW_IAR_PARENTAL_STATUS',
          'FILTER_TRUEVIEW_IAR_TIME_OF_DAY',
          'FILTER_TRUEVIEW_CUSTOM_AFFINITY',
          'FILTER_TRUEVIEW_CATEGORY',
          'FILTER_TRUEVIEW_KEYWORD',
          'FILTER_TRUEVIEW_PLACEMENT',
          'FILTER_TRUEVIEW_URL',
          'FILTER_TRUEVIEW_COUNTRY',
          'FILTER_TRUEVIEW_REGION',
          'FILTER_TRUEVIEW_CITY',
          'FILTER_TRUEVIEW_DMA',
          'FILTER_TRUEVIEW_ZIPCODE',
          'FILTER_NOT_SUPPORTED',
          'FILTER_MEDIA_PLAN',
          'FILTER_TRUEVIEW_IAR_YOUTUBE_CHANNEL',
          'FILTER_TRUEVIEW_IAR_YOUTUBE_VIDEO',
          'FILTER_SKIPPABLE_SUPPORT',
          'FILTER_COMPANION_CREATIVE_ID',
          'FILTER_BUDGET_SEGMENT_DESCRIPTION',
          'FILTER_FLOODLIGHT_ACTIVITY_ID',
          'FILTER_DEVICE_MODEL',
          'FILTER_DEVICE_MAKE',
          'FILTER_DEVICE_TYPE',
          'FILTER_CREATIVE_ATTRIBUTE',
          'FILTER_INVENTORY_COMMITMENT_TYPE',
          'FILTER_INVENTORY_RATE_TYPE',
          'FILTER_INVENTORY_DELIVERY_METHOD',
          'FILTER_INVENTORY_SOURCE_EXTERNAL_ID',
          'FILTER_AUTHORIZED_SELLER_STATE',
          'FILTER_VIDEO_DURATION_SECONDS_RANGE',
          'FILTER_PARTNER_NAME',
          'FILTER_PARTNER_STATUS',
          'FILTER_ADVERTISER_NAME',
          'FILTER_ADVERTISER_INTEGRATION_CODE',
          'FILTER_ADVERTISER_INTEGRATION_STATUS',
          'FILTER_CARRIER_NAME',
          'FILTER_CHANNEL_NAME',
          'FILTER_CITY_NAME',
          'FILTER_COMPANION_CREATIVE_NAME',
          'FILTER_USER_LIST_FIRST_PARTY_NAME',
          'FILTER_USER_LIST_THIRD_PARTY_NAME',
          'FILTER_NIELSEN_RESTATEMENT_DATE',
          'FILTER_NIELSEN_DATE_RANGE',
          'FILTER_INSERTION_ORDER_NAME',
          'FILTER_REGION_NAME',
          'FILTER_DMA_NAME',
          'FILTER_TRUEVIEW_IAR_REGION_NAME',
          'FILTER_TRUEVIEW_DMA_NAME',
          'FILTER_TRUEVIEW_REGION_NAME',
          'FILTER_ACTIVE_VIEW_CUSTOM_METRIC_ID',
          'FILTER_ACTIVE_VIEW_CUSTOM_METRIC_NAME',
          'FILTER_AD_TYPE',
          'FILTER_ALGORITHM',
          'FILTER_ALGORITHM_ID',
          'FILTER_AMP_PAGE_REQUEST',
          'FILTER_ANONYMOUS_INVENTORY_MODELING',
          'FILTER_APP_URL',
          'FILTER_APP_URL_EXCLUDED',
          'FILTER_ATTRIBUTED_USERLIST',
          'FILTER_ATTRIBUTED_USERLIST_COST',
          'FILTER_ATTRIBUTED_USERLIST_TYPE',
          'FILTER_ATTRIBUTION_MODEL',
          'FILTER_AUDIENCE_LIST',
          'FILTER_AUDIENCE_LIST_COST',
          'FILTER_AUDIENCE_LIST_TYPE',
          'FILTER_AUDIENCE_NAME',
          'FILTER_AUDIENCE_TYPE',
          'FILTER_BILLABLE_OUTCOME',
          'FILTER_BRAND_LIFT_TYPE',
          'FILTER_CHANNEL_TYPE',
          'FILTER_CM_PLACEMENT_ID',
          'FILTER_CONVERSION_SOURCE',
          'FILTER_CONVERSION_SOURCE_ID',
          'FILTER_COUNTRY_ID',
          'FILTER_CREATIVE',
          'FILTER_CREATIVE_ASSET',
          'FILTER_CREATIVE_INTEGRATION_CODE',
          'FILTER_CREATIVE_RENDERED_IN_AMP',
          'FILTER_CREATIVE_SOURCE',
          'FILTER_CREATIVE_STATUS',
          'FILTER_DATA_PROVIDER_NAME',
          'FILTER_DETAILED_DEMOGRAPHICS',
          'FILTER_DETAILED_DEMOGRAPHICS_ID',
          'FILTER_DEVICE',
          'FILTER_GAM_INSERTION_ORDER',
          'FILTER_GAM_LINE_ITEM',
          'FILTER_GAM_LINE_ITEM_ID',
          'FILTER_DIGITAL_CONTENT_LABEL',
          'FILTER_DOMAIN',
          'FILTER_ELIGIBLE_COOKIES_ON_FIRST_PARTY_AUDIENCE_LIST',
          'FILTER_ELIGIBLE_COOKIES_ON_THIRD_PARTY_AUDIENCE_LIST_AND_INTEREST',
          'FILTER_EXCHANGE',
          'FILTER_EXCHANGE_CODE',
          'FILTER_EXTENSION',
          'FILTER_EXTENSION_STATUS',
          'FILTER_EXTENSION_TYPE',
          'FILTER_FIRST_PARTY_AUDIENCE_LIST_COST',
          'FILTER_FIRST_PARTY_AUDIENCE_LIST_TYPE',
          'FILTER_FLOODLIGHT_ACTIVITY',
          'FILTER_FORMAT',
          'FILTER_GMAIL_AGE',
          'FILTER_GMAIL_CITY',
          'FILTER_GMAIL_COUNTRY',
          'FILTER_GMAIL_COUNTRY_NAME',
          'FILTER_GMAIL_DEVICE_TYPE',
          'FILTER_GMAIL_DEVICE_TYPE_NAME',
          'FILTER_GMAIL_GENDER',
          'FILTER_GMAIL_REGION',
          'FILTER_GMAIL_REMARKETING_LIST',
          'FILTER_HOUSEHOLD_INCOME',
          'FILTER_IMPRESSION_COUNTING_METHOD',
          'FILTER_YOUTUBE_PROGRAMMATIC_GUARANTEED_INSERTION_ORDER',
          'FILTER_INSERTION_ORDER_INTEGRATION_CODE',
          'FILTER_INSERTION_ORDER_STATUS',
          'FILTER_INTEREST',
          'FILTER_INVENTORY_SOURCE_GROUP',
          'FILTER_INVENTORY_SOURCE_GROUP_ID',
          'FILTER_INVENTORY_SOURCE_ID',
          'FILTER_INVENTORY_SOURCE_NAME',
          'FILTER_LIFE_EVENT',
          'FILTER_LIFE_EVENTS',
          'FILTER_LINE_ITEM_INTEGRATION_CODE',
          'FILTER_LINE_ITEM_NAME',
          'FILTER_LINE_ITEM_STATUS',
          'FILTER_MATCH_RATIO',
          'FILTER_MEASUREMENT_SOURCE',
          'FILTER_MEDIA_PLAN_NAME',
          'FILTER_PARENTAL_STATUS',
          'FILTER_PLACEMENT_ALL_YOUTUBE_CHANNELS',
          'FILTER_PLATFORM',
          'FILTER_PLAYBACK_METHOD',
          'FILTER_POSITION_IN_CONTENT',
          'FILTER_PUBLISHER_PROPERTY',
          'FILTER_PUBLISHER_PROPERTY_ID',
          'FILTER_PUBLISHER_PROPERTY_SECTION',
          'FILTER_PUBLISHER_PROPERTY_SECTION_ID',
          'FILTER_REFUND_REASON',
          'FILTER_REMARKETING_LIST',
          'FILTER_REWARDED',
          'FILTER_SENSITIVE_CATEGORY',
          'FILTER_SERVED_PIXEL_DENSITY',
          'FILTER_TARGETED_DATA_PROVIDERS',
          'FILTER_THIRD_PARTY_AUDIENCE_LIST_COST',
          'FILTER_THIRD_PARTY_AUDIENCE_LIST_TYPE',
          'FILTER_TRUEVIEW_AD',
          'FILTER_TRUEVIEW_AD_GROUP',
          'FILTER_TRUEVIEW_DETAILED_DEMOGRAPHICS',
          'FILTER_TRUEVIEW_DETAILED_DEMOGRAPHICS_ID',
          'FILTER_TRUEVIEW_HOUSEHOLD_INCOME',
          'FILTER_TRUEVIEW_IAR_COUNTRY_NAME',
          'FILTER_TRUEVIEW_REMARKETING_LIST_NAME',
          'FILTER_VARIANT_ID',
          'FILTER_VARIANT_NAME',
          'FILTER_VARIANT_VERSION',
          'FILTER_VERIFICATION_VIDEO_PLAYER_SIZE',
          'FILTER_VERIFICATION_VIDEO_POSITION',
          'FILTER_VIDEO_COMPANION_CREATIVE_SIZE',
          'FILTER_VIDEO_CONTINUOUS_PLAY',
          'FILTER_VIDEO_DURATION',
          'FILTER_YOUTUBE_ADAPTED_AUDIENCE_LIST',
          'FILTER_YOUTUBE_AD_VIDEO',
          'FILTER_YOUTUBE_AD_VIDEO_ID',
          'FILTER_YOUTUBE_CHANNEL',
          'FILTER_YOUTUBE_PROGRAMMATIC_GUARANTEED_ADVERTISER',
          'FILTER_YOUTUBE_PROGRAMMATIC_GUARANTEED_PARTNER',
          'FILTER_YOUTUBE_VIDEO',
          'FILTER_ZIP_POSTAL_CODE',
          'FILTER_PLACEMENT_NAME_ALL_YOUTUBE_CHANNELS',
          'FILTER_TRUEVIEW_PLACEMENT_ID',
          'FILTER_PATH_PATTERN_ID',
          'FILTER_PATH_EVENT_INDEX',
          'FILTER_EVENT_TYPE',
          'FILTER_CHANNEL_GROUPING',
          'FILTER_OM_SDK_AVAILABLE',
          'FILTER_DATA_SOURCE',
          'FILTER_CM360_PLACEMENT_ID',
          'FILTER_TRUEVIEW_CLICK_TYPE_NAME',
          'FILTER_TRUEVIEW_AD_TYPE_NAME',
          'FILTER_VIDEO_CONTENT_DURATION',
          'FILTER_MATCHED_GENRE_TARGET',
          'FILTER_VIDEO_CONTENT_LIVE_STREAM',
          'FILTER_BUDGET_SEGMENT_TYPE',
          'FILTER_BUDGET_SEGMENT_BUDGET',
          'FILTER_BUDGET_SEGMENT_START_DATE',
          'FILTER_BUDGET_SEGMENT_END_DATE',
          'FILTER_BUDGET_SEGMENT_PACING_PERCENTAGE',
          'FILTER_LINE_ITEM_BUDGET',
          'FILTER_LINE_ITEM_START_DATE',
          'FILTER_LINE_ITEM_END_DATE',
          'FILTER_INSERTION_ORDER_GOAL_TYPE',
          'FILTER_LINE_ITEM_PACING_PERCENTAGE',
          'FILTER_INSERTION_ORDER_GOAL_VALUE',
          'FILTER_OMID_CAPABLE',
          'FILTER_VENDOR_MEASUREMENT_MODE',
          'FILTER_IMPRESSION_LOSS_REJECTION_REASON',
          'FILTER_VERIFICATION_VIDEO_PLAYER_SIZE_START',
          'FILTER_VERIFICATION_VIDEO_PLAYER_SIZE_FIRST_QUARTILE',
          'FILTER_VERIFICATION_VIDEO_PLAYER_SIZE_MID_POINT',
          'FILTER_VERIFICATION_VIDEO_PLAYER_SIZE_THIRD_QUARTILE',
          'FILTER_VERIFICATION_VIDEO_PLAYER_SIZE_COMPLETE',
          'FILTER_VERIFICATION_VIDEO_RESIZED',
          'FILTER_VERIFICATION_AUDIBILITY_START',
          'FILTER_VERIFICATION_AUDIBILITY_COMPLETE',
          'FILTER_MEDIA_TYPE',
          'FILTER_AUDIO_FEED_TYPE_NAME',
          'FILTER_TRUEVIEW_TARGETING_EXPANSION',
          'FILTER_PUBLISHER_TRAFFIC_SOURCE',
        ]),
      )
      .exactOptional()
      .openapi({ description: 'Data is grouped by the filters listed in this field.' }),
    includeInviteData: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Deprecated. This field is no longer in use.' }),
    metrics: z
      .array(
        z.enum([
          'METRIC_UNKNOWN',
          'METRIC_IMPRESSIONS',
          'METRIC_CLICKS',
          'METRIC_LAST_IMPRESSIONS',
          'METRIC_LAST_CLICKS',
          'METRIC_TOTAL_CONVERSIONS',
          'METRIC_MEDIA_COST_ADVERTISER',
          'METRIC_MEDIA_COST_USD',
          'METRIC_MEDIA_COST_PARTNER',
          'METRIC_DATA_COST_ADVERTISER',
          'METRIC_DATA_COST_USD',
          'METRIC_DATA_COST_PARTNER',
          'METRIC_CPM_FEE1_ADVERTISER',
          'METRIC_CPM_FEE1_USD',
          'METRIC_CPM_FEE1_PARTNER',
          'METRIC_CPM_FEE2_ADVERTISER',
          'METRIC_CPM_FEE2_USD',
          'METRIC_CPM_FEE2_PARTNER',
          'METRIC_MEDIA_FEE1_ADVERTISER',
          'METRIC_MEDIA_FEE1_USD',
          'METRIC_MEDIA_FEE1_PARTNER',
          'METRIC_MEDIA_FEE2_ADVERTISER',
          'METRIC_MEDIA_FEE2_USD',
          'METRIC_MEDIA_FEE2_PARTNER',
          'METRIC_REVENUE_ADVERTISER',
          'METRIC_REVENUE_USD',
          'METRIC_REVENUE_PARTNER',
          'METRIC_PROFIT_ADVERTISER',
          'METRIC_PROFIT_USD',
          'METRIC_PROFIT_PARTNER',
          'METRIC_PROFIT_MARGIN',
          'METRIC_TOTAL_MEDIA_COST_USD',
          'METRIC_TOTAL_MEDIA_COST_PARTNER',
          'METRIC_TOTAL_MEDIA_COST_ADVERTISER',
          'METRIC_BILLABLE_COST_USD',
          'METRIC_BILLABLE_COST_PARTNER',
          'METRIC_BILLABLE_COST_ADVERTISER',
          'METRIC_PLATFORM_FEE_USD',
          'METRIC_PLATFORM_FEE_PARTNER',
          'METRIC_PLATFORM_FEE_ADVERTISER',
          'METRIC_VIDEO_COMPLETION_RATE',
          'METRIC_PROFIT_ECPM_ADVERTISER',
          'METRIC_PROFIT_ECPM_USD',
          'METRIC_PROFIT_ECPM_PARTNER',
          'METRIC_REVENUE_ECPM_ADVERTISER',
          'METRIC_REVENUE_ECPM_USD',
          'METRIC_REVENUE_ECPM_PARTNER',
          'METRIC_REVENUE_ECPC_ADVERTISER',
          'METRIC_REVENUE_ECPC_USD',
          'METRIC_REVENUE_ECPC_PARTNER',
          'METRIC_REVENUE_ECPA_ADVERTISER',
          'METRIC_REVENUE_ECPA_USD',
          'METRIC_REVENUE_ECPA_PARTNER',
          'METRIC_REVENUE_ECPAPV_ADVERTISER',
          'METRIC_REVENUE_ECPAPV_USD',
          'METRIC_REVENUE_ECPAPV_PARTNER',
          'METRIC_REVENUE_ECPAPC_ADVERTISER',
          'METRIC_REVENUE_ECPAPC_USD',
          'METRIC_REVENUE_ECPAPC_PARTNER',
          'METRIC_MEDIA_COST_ECPM_ADVERTISER',
          'METRIC_MEDIA_COST_ECPM_USD',
          'METRIC_MEDIA_COST_ECPM_PARTNER',
          'METRIC_MEDIA_COST_ECPC_ADVERTISER',
          'METRIC_MEDIA_COST_ECPC_USD',
          'METRIC_MEDIA_COST_ECPC_PARTNER',
          'METRIC_MEDIA_COST_ECPA_ADVERTISER',
          'METRIC_MEDIA_COST_ECPA_USD',
          'METRIC_MEDIA_COST_ECPA_PARTNER',
          'METRIC_MEDIA_COST_ECPAPV_ADVERTISER',
          'METRIC_MEDIA_COST_ECPAPV_USD',
          'METRIC_MEDIA_COST_ECPAPV_PARTNER',
          'METRIC_MEDIA_COST_ECPAPC_ADVERTISER',
          'METRIC_MEDIA_COST_ECPAPC_USD',
          'METRIC_MEDIA_COST_ECPAPC_PARTNER',
          'METRIC_TOTAL_MEDIA_COST_ECPM_ADVERTISER',
          'METRIC_TOTAL_MEDIA_COST_ECPM_USD',
          'METRIC_TOTAL_MEDIA_COST_ECPM_PARTNER',
          'METRIC_TOTAL_MEDIA_COST_ECPC_ADVERTISER',
          'METRIC_TOTAL_MEDIA_COST_ECPC_USD',
          'METRIC_TOTAL_MEDIA_COST_ECPC_PARTNER',
          'METRIC_TOTAL_MEDIA_COST_ECPA_ADVERTISER',
          'METRIC_TOTAL_MEDIA_COST_ECPA_USD',
          'METRIC_TOTAL_MEDIA_COST_ECPA_PARTNER',
          'METRIC_TOTAL_MEDIA_COST_ECPAPV_ADVERTISER',
          'METRIC_TOTAL_MEDIA_COST_ECPAPV_USD',
          'METRIC_TOTAL_MEDIA_COST_ECPAPV_PARTNER',
          'METRIC_TOTAL_MEDIA_COST_ECPAPC_ADVERTISER',
          'METRIC_TOTAL_MEDIA_COST_ECPAPC_USD',
          'METRIC_TOTAL_MEDIA_COST_ECPAPC_PARTNER',
          'METRIC_RICH_MEDIA_VIDEO_PLAYS',
          'METRIC_RICH_MEDIA_VIDEO_COMPLETIONS',
          'METRIC_RICH_MEDIA_VIDEO_PAUSES',
          'METRIC_RICH_MEDIA_VIDEO_MUTES',
          'METRIC_RICH_MEDIA_VIDEO_MIDPOINTS',
          'METRIC_RICH_MEDIA_VIDEO_FULL_SCREENS',
          'METRIC_RICH_MEDIA_VIDEO_FIRST_QUARTILE_COMPLETES',
          'METRIC_RICH_MEDIA_VIDEO_THIRD_QUARTILE_COMPLETES',
          'METRIC_CLICK_TO_POST_CLICK_CONVERSION_RATE',
          'METRIC_IMPRESSIONS_TO_CONVERSION_RATE',
          'METRIC_CONVERSIONS_PER_MILLE',
          'METRIC_CTR',
          'METRIC_BID_REQUESTS',
          'METRIC_UNIQUE_VISITORS_COOKIES',
          'METRIC_REVENUE_ECPCV_ADVERTISER',
          'METRIC_REVENUE_ECPCV_USD',
          'METRIC_REVENUE_ECPCV_PARTNER',
          'METRIC_MEDIA_COST_ECPCV_ADVERTISER',
          'METRIC_MEDIA_COST_ECPCV_USD',
          'METRIC_MEDIA_COST_ECPCV_PARTNER',
          'METRIC_TOTAL_MEDIA_COST_ECPCV_ADVERTISER',
          'METRIC_TOTAL_MEDIA_COST_ECPCV_USD',
          'METRIC_TOTAL_MEDIA_COST_ECPCV_PARTNER',
          'METRIC_RICH_MEDIA_VIDEO_SKIPS',
          'METRIC_FEE2_ADVERTISER',
          'METRIC_FEE2_USD',
          'METRIC_FEE2_PARTNER',
          'METRIC_FEE3_ADVERTISER',
          'METRIC_FEE3_USD',
          'METRIC_FEE3_PARTNER',
          'METRIC_FEE4_ADVERTISER',
          'METRIC_FEE4_USD',
          'METRIC_FEE4_PARTNER',
          'METRIC_FEE5_ADVERTISER',
          'METRIC_FEE5_USD',
          'METRIC_FEE5_PARTNER',
          'METRIC_FEE6_ADVERTISER',
          'METRIC_FEE6_USD',
          'METRIC_FEE6_PARTNER',
          'METRIC_FEE7_ADVERTISER',
          'METRIC_FEE7_USD',
          'METRIC_FEE7_PARTNER',
          'METRIC_FEE8_ADVERTISER',
          'METRIC_FEE8_USD',
          'METRIC_FEE8_PARTNER',
          'METRIC_FEE9_ADVERTISER',
          'METRIC_FEE9_USD',
          'METRIC_FEE9_PARTNER',
          'METRIC_FEE10_ADVERTISER',
          'METRIC_FEE10_USD',
          'METRIC_FEE10_PARTNER',
          'METRIC_FEE11_ADVERTISER',
          'METRIC_FEE11_USD',
          'METRIC_FEE11_PARTNER',
          'METRIC_FEE12_ADVERTISER',
          'METRIC_FEE12_USD',
          'METRIC_FEE12_PARTNER',
          'METRIC_FEE13_ADVERTISER',
          'METRIC_FEE13_USD',
          'METRIC_FEE13_PARTNER',
          'METRIC_FEE14_ADVERTISER',
          'METRIC_FEE14_USD',
          'METRIC_FEE14_PARTNER',
          'METRIC_FEE15_ADVERTISER',
          'METRIC_FEE15_USD',
          'METRIC_FEE15_PARTNER',
          'METRIC_CPM_FEE3_ADVERTISER',
          'METRIC_CPM_FEE3_USD',
          'METRIC_CPM_FEE3_PARTNER',
          'METRIC_CPM_FEE4_ADVERTISER',
          'METRIC_CPM_FEE4_USD',
          'METRIC_CPM_FEE4_PARTNER',
          'METRIC_CPM_FEE5_ADVERTISER',
          'METRIC_CPM_FEE5_USD',
          'METRIC_CPM_FEE5_PARTNER',
          'METRIC_MEDIA_FEE3_ADVERTISER',
          'METRIC_MEDIA_FEE3_USD',
          'METRIC_MEDIA_FEE3_PARTNER',
          'METRIC_MEDIA_FEE4_ADVERTISER',
          'METRIC_MEDIA_FEE4_USD',
          'METRIC_MEDIA_FEE4_PARTNER',
          'METRIC_MEDIA_FEE5_ADVERTISER',
          'METRIC_MEDIA_FEE5_USD',
          'METRIC_MEDIA_FEE5_PARTNER',
          'METRIC_VIDEO_COMPANION_IMPRESSIONS',
          'METRIC_VIDEO_COMPANION_CLICKS',
          'METRIC_FEE16_ADVERTISER',
          'METRIC_FEE16_USD',
          'METRIC_FEE16_PARTNER',
          'METRIC_FEE17_ADVERTISER',
          'METRIC_FEE17_USD',
          'METRIC_FEE17_PARTNER',
          'METRIC_FEE18_ADVERTISER',
          'METRIC_FEE18_USD',
          'METRIC_FEE18_PARTNER',
          'METRIC_TRUEVIEW_VIEWS',
          'METRIC_TRUEVIEW_UNIQUE_VIEWERS',
          'METRIC_TRUEVIEW_EARNED_VIEWS',
          'METRIC_TRUEVIEW_EARNED_SUBSCRIBERS',
          'METRIC_TRUEVIEW_EARNED_PLAYLIST_ADDITIONS',
          'METRIC_TRUEVIEW_EARNED_LIKES',
          'METRIC_TRUEVIEW_EARNED_SHARES',
          'METRIC_TRUEVIEW_IMPRESSION_SHARE',
          'METRIC_TRUEVIEW_LOST_IS_BUDGET',
          'METRIC_TRUEVIEW_LOST_IS_RANK',
          'METRIC_TRUEVIEW_VIEW_THROUGH_CONVERSION',
          'METRIC_TRUEVIEW_CONVERSION_MANY_PER_VIEW',
          'METRIC_TRUEVIEW_VIEW_RATE',
          'METRIC_TRUEVIEW_CONVERSION_RATE_ONE_PER_VIEW',
          'METRIC_TRUEVIEW_CPV_ADVERTISER',
          'METRIC_TRUEVIEW_CPV_USD',
          'METRIC_TRUEVIEW_CPV_PARTNER',
          'METRIC_FEE19_ADVERTISER',
          'METRIC_FEE19_USD',
          'METRIC_FEE19_PARTNER',
          'METRIC_TEA_TRUEVIEW_IMPRESSIONS',
          'METRIC_TEA_TRUEVIEW_UNIQUE_COOKIES',
          'METRIC_FEE20_ADVERTISER',
          'METRIC_FEE20_USD',
          'METRIC_FEE20_PARTNER',
          'METRIC_FEE21_ADVERTISER',
          'METRIC_FEE21_USD',
          'METRIC_FEE21_PARTNER',
          'METRIC_FEE22_ADVERTISER',
          'METRIC_FEE22_USD',
          'METRIC_FEE22_PARTNER',
          'METRIC_TRUEVIEW_TOTAL_CONVERSION_VALUES_ADVERTISER',
          'METRIC_TRUEVIEW_TOTAL_CONVERSION_VALUES_USD',
          'METRIC_TRUEVIEW_TOTAL_CONVERSION_VALUES_PARTNER',
          'METRIC_TRUEVIEW_CONVERSION_COST_MANY_PER_VIEW_ADVERTISER',
          'METRIC_TRUEVIEW_CONVERSION_COST_MANY_PER_VIEW_USD',
          'METRIC_TRUEVIEW_CONVERSION_COST_MANY_PER_VIEW_PARTNER',
          'METRIC_PROFIT_VIEWABLE_ECPM_ADVERTISER',
          'METRIC_PROFIT_VIEWABLE_ECPM_USD',
          'METRIC_PROFIT_VIEWABLE_ECPM_PARTNER',
          'METRIC_REVENUE_VIEWABLE_ECPM_ADVERTISER',
          'METRIC_REVENUE_VIEWABLE_ECPM_USD',
          'METRIC_REVENUE_VIEWABLE_ECPM_PARTNER',
          'METRIC_MEDIA_COST_VIEWABLE_ECPM_ADVERTISER',
          'METRIC_MEDIA_COST_VIEWABLE_ECPM_USD',
          'METRIC_MEDIA_COST_VIEWABLE_ECPM_PARTNER',
          'METRIC_TOTAL_MEDIA_COST_VIEWABLE_ECPM_ADVERTISER',
          'METRIC_TOTAL_MEDIA_COST_VIEWABLE_ECPM_USD',
          'METRIC_TOTAL_MEDIA_COST_VIEWABLE_ECPM_PARTNER',
          'METRIC_TRUEVIEW_ENGAGEMENTS',
          'METRIC_TRUEVIEW_ENGAGEMENT_RATE',
          'METRIC_TRUEVIEW_AVERAGE_CPE_ADVERTISER',
          'METRIC_TRUEVIEW_AVERAGE_CPE_USD',
          'METRIC_TRUEVIEW_AVERAGE_CPE_PARTNER',
          'METRIC_ACTIVE_VIEW_VIEWABLE_IMPRESSIONS',
          'METRIC_ACTIVE_VIEW_ELIGIBLE_IMPRESSIONS',
          'METRIC_ACTIVE_VIEW_MEASURABLE_IMPRESSIONS',
          'METRIC_ACTIVE_VIEW_PCT_MEASURABLE_IMPRESSIONS',
          'METRIC_ACTIVE_VIEW_PCT_VIEWABLE_IMPRESSIONS',
          'METRIC_ACTIVE_VIEW_AVERAGE_VIEWABLE_TIME',
          'METRIC_ACTIVE_VIEW_UNMEASURABLE_IMPRESSIONS',
          'METRIC_ACTIVE_VIEW_UNVIEWABLE_IMPRESSIONS',
          'METRIC_ACTIVE_VIEW_DISTRIBUTION_UNMEASURABLE',
          'METRIC_ACTIVE_VIEW_DISTRIBUTION_UNVIEWABLE',
          'METRIC_ACTIVE_VIEW_DISTRIBUTION_VIEWABLE',
          'METRIC_ACTIVE_VIEW_PERCENT_VIEWABLE_FOR_TIME_THRESHOLD',
          'METRIC_ACTIVE_VIEW_VIEWABLE_FOR_TIME_THRESHOLD',
          'METRIC_ACTIVE_VIEW_PERCENT_VISIBLE_AT_START',
          'METRIC_ACTIVE_VIEW_PERCENT_VISIBLE_FIRST_QUAR',
          'METRIC_ACTIVE_VIEW_PERCENT_VISIBLE_SECOND_QUAR',
          'METRIC_ACTIVE_VIEW_PERCENT_VISIBLE_THIRD_QUAR',
          'METRIC_ACTIVE_VIEW_PERCENT_VISIBLE_ON_COMPLETE',
          'METRIC_ACTIVE_VIEW_PERCENT_AUDIBLE_VISIBLE_AT_START',
          'METRIC_ACTIVE_VIEW_PERCENT_AUDIBLE_VISIBLE_FIRST_QUAR',
          'METRIC_ACTIVE_VIEW_PERCENT_AUDIBLE_VISIBLE_SECOND_QUAR',
          'METRIC_ACTIVE_VIEW_PERCENT_AUDIBLE_VISIBLE_THIRD_QUAR',
          'METRIC_ACTIVE_VIEW_PERCENT_AUDIBLE_VISIBLE_ON_COMPLETE',
          'METRIC_ACTIVE_VIEW_AUDIBLE_VISIBLE_ON_COMPLETE_IMPRESSIONS',
          'METRIC_VIEWABLE_BID_REQUESTS',
          'METRIC_COOKIE_REACH_IMPRESSION_REACH',
          'METRIC_COOKIE_REACH_AVERAGE_IMPRESSION_FREQUENCY',
          'METRIC_DBM_ENGAGEMENT_RATE',
          'METRIC_RICH_MEDIA_SCROLLS',
          'METRIC_CM_POST_VIEW_REVENUE',
          'METRIC_CM_POST_CLICK_REVENUE',
          'METRIC_FLOODLIGHT_IMPRESSIONS',
          'METRIC_BILLABLE_IMPRESSIONS',
          'METRIC_NIELSEN_AVERAGE_FREQUENCY',
          'METRIC_NIELSEN_IMPRESSIONS',
          'METRIC_NIELSEN_UNIQUE_AUDIENCE',
          'METRIC_NIELSEN_GRP',
          'METRIC_NIELSEN_IMPRESSION_INDEX',
          'METRIC_NIELSEN_IMPRESSIONS_SHARE',
          'METRIC_NIELSEN_POPULATION',
          'METRIC_NIELSEN_POPULATION_REACH',
          'METRIC_NIELSEN_POPULATION_SHARE',
          'METRIC_NIELSEN_REACH_INDEX',
          'METRIC_NIELSEN_REACH_SHARE',
          'METRIC_ACTIVE_VIEW_AUDIBLE_FULLY_ON_SCREEN_HALF_OF_DURATION_IMPRESSIONS',
          'METRIC_ACTIVE_VIEW_AUDIBLE_FULLY_ON_SCREEN_HALF_OF_DURATION_MEASURABLE_IMPRESSIONS',
          'METRIC_ACTIVE_VIEW_AUDIBLE_FULLY_ON_SCREEN_HALF_OF_DURATION_RATE',
          'METRIC_ACTIVE_VIEW_AUDIBLE_FULLY_ON_SCREEN_HALF_OF_DURATION_TRUEVIEW_IMPRESSIONS',
          'METRIC_ACTIVE_VIEW_AUDIBLE_FULLY_ON_SCREEN_HALF_OF_DURATION_TRUEVIEW_MEASURABLE_IMPRESSIONS',
          'METRIC_ACTIVE_VIEW_AUDIBLE_FULLY_ON_SCREEN_HALF_OF_DURATION_TRUEVIEW_RATE',
          'METRIC_ACTIVE_VIEW_CUSTOM_METRIC_MEASURABLE_IMPRESSIONS',
          'METRIC_ACTIVE_VIEW_CUSTOM_METRIC_VIEWABLE_IMPRESSIONS',
          'METRIC_ACTIVE_VIEW_CUSTOM_METRIC_VIEWABLE_RATE',
          'METRIC_ACTIVE_VIEW_PERCENT_AUDIBLE_IMPRESSIONS',
          'METRIC_ACTIVE_VIEW_PERCENT_FULLY_ON_SCREEN_2_SEC',
          'METRIC_ACTIVE_VIEW_PERCENT_FULL_SCREEN',
          'METRIC_ACTIVE_VIEW_PERCENT_IN_BACKGROUND',
          'METRIC_ACTIVE_VIEW_PERCENT_OF_AD_PLAYED',
          'METRIC_ACTIVE_VIEW_PERCENT_OF_COMPLETED_IMPRESSIONS_AUDIBLE_AND_VISIBLE',
          'METRIC_ACTIVE_VIEW_PERCENT_OF_COMPLETED_IMPRESSIONS_VISIBLE',
          'METRIC_ACTIVE_VIEW_PERCENT_OF_FIRST_QUARTILE_IMPRESSIONS_AUDIBLE_AND_VISIBLE',
          'METRIC_ACTIVE_VIEW_PERCENT_OF_FIRST_QUARTILE_IMPRESSIONS_VISIBLE',
          'METRIC_ACTIVE_VIEW_PERCENT_OF_MIDPOINT_IMPRESSIONS_AUDIBLE_AND_VISIBLE',
          'METRIC_ACTIVE_VIEW_PERCENT_OF_MIDPOINT_IMPRESSIONS_VISIBLE',
          'METRIC_ACTIVE_VIEW_PERCENT_OF_THIRD_QUARTILE_IMPRESSIONS_AUDIBLE_AND_VISIBLE',
          'METRIC_ACTIVE_VIEW_PERCENT_OF_THIRD_QUARTILE_IMPRESSIONS_VISIBLE',
          'METRIC_ACTIVE_VIEW_PERCENT_PLAY_TIME_AUDIBLE',
          'METRIC_ACTIVE_VIEW_PERCENT_PLAY_TIME_AUDIBLE_AND_VISIBLE',
          'METRIC_ACTIVE_VIEW_PERCENT_PLAY_TIME_VISIBLE',
          'METRIC_ADAPTED_AUDIENCE_FREQUENCY',
          'METRIC_ADLINGO_FEE_ADVERTISER_CURRENCY',
          'METRIC_AUDIO_CLIENT_COST_ECPCL_ADVERTISER_CURRENCY',
          'METRIC_AUDIO_MEDIA_COST_ECPCL_ADVERTISER_CURRENCY',
          'METRIC_AUDIO_MUTES_AUDIO',
          'METRIC_AUDIO_REVENUE_ECPCL_ADVERTISER_CURRENCY',
          'METRIC_AUDIO_UNMUTES_AUDIO',
          'METRIC_AUDIO_UNMUTES_VIDEO',
          'METRIC_AVERAGE_DISPLAY_TIME',
          'METRIC_AVERAGE_IMPRESSION_FREQUENCY_PER_USER',
          'METRIC_AVERAGE_INTERACTION_TIME',
          'METRIC_AVERAGE_WATCH_TIME_PER_IMPRESSION',
          'METRIC_BEGIN_TO_RENDER_ELIGIBLE_IMPRESSIONS',
          'METRIC_BEGIN_TO_RENDER_IMPRESSIONS',
          'METRIC_BENCHMARK_FREQUENCY',
          'METRIC_BRAND_LIFT_ABSOLUTE_BRAND_LIFT',
          'METRIC_BRAND_LIFT_ALL_SURVEY_RESPONSES',
          'METRIC_BRAND_LIFT_BASELINE_POSITIVE_RESPONSE_RATE',
          'METRIC_BRAND_LIFT_BASELINE_SURVEY_RESPONSES',
          'METRIC_BRAND_LIFT_COST_PER_LIFTED_USER',
          'METRIC_BRAND_LIFT_EXPOSED_SURVEY_RESPONSES',
          'METRIC_BRAND_LIFT_HEADROOM_BRAND_LIFT',
          'METRIC_BRAND_LIFT_RELATIVE_BRAND_LIFT',
          'METRIC_BRAND_LIFT_USERS',
          'METRIC_CARD_CLICKS',
          'METRIC_CLIENT_COST_ADVERTISER_CURRENCY',
          'METRIC_CLIENT_COST_ECPA_ADVERTISER_CURRENCY',
          'METRIC_CLIENT_COST_ECPA_PC_ADVERTISER_CURRENCY',
          'METRIC_CLIENT_COST_ECPA_PV_ADVERTISER_CURRENCY',
          'METRIC_CLIENT_COST_ECPC_ADVERTISER_CURRENCY',
          'METRIC_CLIENT_COST_ECPM_ADVERTISER_CURRENCY',
          'METRIC_CLIENT_COST_VIEWABLE_ECPM_ADVERTISER_CURRENCY',
          'METRIC_CM_POST_CLICK_REVENUE_CROSS_ENVIRONMENT',
          'METRIC_CM_POST_VIEW_REVENUE_CROSS_ENVIRONMENT',
          'METRIC_COMPANION_CLICKS_AUDIO',
          'METRIC_COMPANION_IMPRESSIONS_AUDIO',
          'METRIC_COMPLETE_LISTENS_AUDIO',
          'METRIC_COMPLETION_RATE_AUDIO',
          'METRIC_COUNTERS',
          'METRIC_CUSTOM_FEE_1_ADVERTISER_CURRENCY',
          'METRIC_CUSTOM_FEE_2_ADVERTISER_CURRENCY',
          'METRIC_CUSTOM_FEE_3_ADVERTISER_CURRENCY',
          'METRIC_CUSTOM_FEE_4_ADVERTISER_CURRENCY',
          'METRIC_CUSTOM_FEE_5_ADVERTISER_CURRENCY',
          'METRIC_CUSTOM_VALUE_PER_1000_IMPRESSIONS',
          'METRIC_ENGAGEMENTS',
          'METRIC_ESTIMATED_CPM_FOR_IMPRESSIONS_WITH_CUSTOM_VALUE_ADVERTISER_CURRENCY',
          'METRIC_ESTIMATED_TOTAL_COST_FOR_IMPRESSIONS_WITH_CUSTOM_VALUE_ADVERTISER_CURRENCY',
          'METRIC_EXITS',
          'METRIC_EXPANSIONS',
          'METRIC_FIRST_QUARTILE_AUDIO',
          'METRIC_GENERAL_INVALID_TRAFFIC_GIVT_IMPRESSIONS',
          'METRIC_GENERAL_INVALID_TRAFFIC_GIVT_TRACKED_ADS',
          'METRIC_GIVT_ACTIVE_VIEW_ELIGIBLE_IMPRESSIONS',
          'METRIC_GIVT_ACTIVE_VIEW_MEASURABLE_IMPRESSIONS',
          'METRIC_GIVT_ACTIVE_VIEW_VIEWABLE_IMPRESSIONS',
          'METRIC_GIVT_BEGIN_TO_RENDER_IMPRESSIONS',
          'METRIC_GIVT_CLICKS',
          'METRIC_GMAIL_CONVERSIONS',
          'METRIC_GMAIL_POST_CLICK_CONVERSIONS',
          'METRIC_GMAIL_POST_VIEW_CONVERSIONS',
          'METRIC_GMAIL_POTENTIAL_VIEWS',
          'METRIC_IMPRESSIONS_WITH_CUSTOM_VALUE',
          'METRIC_IMPRESSIONS_WITH_POSITIVE_CUSTOM_VALUE',
          'METRIC_IMPRESSION_CUSTOM_VALUE_COST',
          'METRIC_INTERACTIVE_IMPRESSIONS',
          'METRIC_INVALID_ACTIVE_VIEW_ELIGIBLE_IMPRESSIONS',
          'METRIC_INVALID_ACTIVE_VIEW_MEASURABLE_IMPRESSIONS',
          'METRIC_INVALID_ACTIVE_VIEW_VIEWABLE_IMPRESSIONS',
          'METRIC_INVALID_BEGIN_TO_RENDER_IMPRESSIONS',
          'METRIC_INVALID_CLICKS',
          'METRIC_INVALID_IMPRESSIONS',
          'METRIC_INVALID_TRACKED_ADS',
          'METRIC_MIDPOINT_AUDIO',
          'METRIC_ORIGINAL_AUDIENCE_FREQUENCY',
          'METRIC_PAUSES_AUDIO',
          'METRIC_PERCENT_IMPRESSIONS_WITH_POSITIVE_CUSTOM_VALUE',
          'METRIC_PLATFORM_FEE_RATE',
          'METRIC_POST_CLICK_CONVERSIONS_CROSS_ENVIRONMENT',
          'METRIC_POST_VIEW_CONVERSIONS_CROSS_ENVIRONMENT',
          'METRIC_POTENTIAL_IMPRESSIONS',
          'METRIC_POTENTIAL_VIEWS',
          'METRIC_PREMIUM_FEE_ADVERTISER_CURRENCY',
          'METRIC_PROGRAMMATIC_GUARANTEED_IMPRESSIONS_PASSED_DUE_TO_FREQUENCY',
          'METRIC_PROGRAMMATIC_GUARANTEED_SAVINGS_RE_INVESTED_DUE_TO_FREQUENCY_ADVERTISER_CURRENCY',
          'METRIC_REFUND_BILLABLE_COST_ADVERTISER_CURRENCY',
          'METRIC_REFUND_MEDIA_COST_ADVERTISER_CURRENCY',
          'METRIC_REFUND_PLATFORM_FEE_ADVERTISER_CURRENCY',
          'METRIC_RICH_MEDIA_ENGAGEMENTS',
          'METRIC_STARTS_AUDIO',
          'METRIC_STOPS_AUDIO',
          'METRIC_STORE_VISIT_CONVERSIONS',
          'METRIC_THIRD_QUARTILE_AUDIO',
          'METRIC_TIMERS',
          'METRIC_TOTAL_AUDIO_MEDIA_COST_ECPCL_ADVERTISER_CURRENCY',
          'METRIC_TOTAL_CONVERSIONS_CROSS_ENVIRONMENT',
          'METRIC_TOTAL_DISPLAY_TIME',
          'METRIC_TOTAL_IMPRESSION_CUSTOM_VALUE',
          'METRIC_TOTAL_INTERACTION_TIME',
          'METRIC_TOTAL_USERS',
          'METRIC_TRACKED_ADS',
          'METRIC_TRUEVIEW_GENERAL_INVALID_TRAFFIC_GIVT_VIEWS',
          'METRIC_TRUEVIEW_INVALID_VIEWS',
          'METRIC_UNIQUE_COOKIES_WITH_IMPRESSIONS',
          'METRIC_UNIQUE_REACH_AVERAGE_IMPRESSION_FREQUENCY',
          'METRIC_UNIQUE_REACH_CLICK_REACH',
          'METRIC_UNIQUE_REACH_IMPRESSION_REACH',
          'METRIC_UNIQUE_REACH_TOTAL_REACH',
          'METRIC_VERIFIABLE_IMPRESSIONS',
          'METRIC_VIDEO_CLIENT_COST_ECPCV_ADVERTISER_CURRENCY',
          'METRIC_WATCH_TIME',
          'METRIC_LAST_TOUCH_TOTAL_CONVERSIONS',
          'METRIC_LAST_TOUCH_CLICK_THROUGH_CONVERSIONS',
          'METRIC_LAST_TOUCH_VIEW_THROUGH_CONVERSIONS',
          'METRIC_TOTAL_PATHS',
          'METRIC_TOTAL_EXPOSURES',
          'METRIC_PATH_CONVERSION_RATE',
          'METRIC_CONVERTING_PATHS',
          'METRIC_ACTIVITY_REVENUE',
          'METRIC_PERCENT_INVALID_IMPRESSIONS_PREBID',
          'METRIC_GRP_CORRECTED_IMPRESSIONS',
          'METRIC_DEMO_CORRECTED_CLICKS',
          'METRIC_VIRTUAL_PEOPLE_IMPRESSION_REACH_BY_DEMO',
          'METRIC_VIRTUAL_PEOPLE_CLICK_REACH_BY_DEMO',
          'METRIC_VIRTUAL_PEOPLE_AVERAGE_IMPRESSION_FREQUENCY_BY_DEMO',
          'METRIC_DEMO_COMPOSITION_IMPRESSION',
          'METRIC_VIRTUAL_PEOPLE_IMPRESSION_REACH_SHARE_PERCENT',
          'METRIC_DEMO_POPULATION',
          'METRIC_VIRTUAL_PEOPLE_IMPRESSION_REACH_PERCENT',
          'METRIC_TARGET_RATING_POINTS',
          'METRIC_PROVISIONAL_IMPRESSIONS',
          'METRIC_VENDOR_BLOCKED_ADS',
          'METRIC_GRP_CORRECTED_VIEWABLE_IMPRESSIONS',
          'METRIC_GRP_CORRECTED_VIEWABLE_IMPRESSIONS_SHARE_PERCENT',
          'METRIC_VIEWABLE_GROSS_RATING_POINTS',
          'METRIC_VIRTUAL_PEOPLE_AVERAGE_VIEWABLE_IMPRESSION_FREQUENCY_BY_DEMO',
          'METRIC_VIRTUAL_PEOPLE_VIEWABLE_IMPRESSION_REACH_BY_DEMO',
          'METRIC_VIRTUAL_PEOPLE_VIEWABLE_IMPRESSION_REACH_PERCENT',
          'METRIC_VIRTUAL_PEOPLE_VIEWABLE_IMPRESSION_REACH_SHARE_PERCENT',
          'METRIC_ENGAGEMENT_RATE',
          'METRIC_CM360_POST_VIEW_REVENUE',
          'METRIC_CM360_POST_CLICK_REVENUE',
          'METRIC_CM360_POST_CLICK_REVENUE_CROSS_ENVIRONMENT',
          'METRIC_CM360_POST_VIEW_REVENUE_CROSS_ENVIRONMENT',
          'METRIC_PERCENTAGE_FROM_CURRENT_IO_GOAL',
          'METRIC_DUPLICATE_FLOODLIGHT_IMPRESSIONS',
          'METRIC_COOKIE_CONSENTED_FLOODLIGHT_IMPRESSIONS',
          'METRIC_COOKIE_UNCONSENTED_FLOODLIGHT_IMPRESSIONS',
          'METRIC_TRACKING_UNCONSENTED_CLICKS',
          'METRIC_IMPRESSION_LOSS_TARGETED_IMPRESSIONS',
          'METRIC_LINEITEM_BID_RESPONSE_COUNT',
          'METRIC_WIN_LOSS_RATE',
          'METRIC_WIN_LOSS_DEAL_AVAILABLE_REQUESTS',
          'METRIC_WIN_LOSS_LINEITEM_AVAILABLE_REQUESTS',
          'METRIC_WIN_LOSS_DEAL_TARGETED_IMPRESSIONS',
          'METRIC_WIN_LOSS_LINEITEM_TARGETED_IMPRESSIONS',
          'METRIC_VERIFICATION_VIDEO_PLAYER_SIZE_MEASURABLE_IMPRESSIONS',
          'METRIC_TRUEVIEW_ALL_AD_SEQUENCE_IMPRESSIONS',
          'METRIC_IMPRESSIONS_COVIEWED',
          'METRIC_UNIQUE_REACH_IMPRESSION_REACH_COVIEWED',
          'METRIC_UNIQUE_REACH_TOTAL_REACH_COVIEWED',
          'METRIC_UNIQUE_REACH_AVERAGE_IMPRESSION_FREQUENCY_COVIEWED',
          'METRIC_GRP_CORRECTED_IMPRESSIONS_COVIEWED',
          'METRIC_VIRTUAL_PEOPLE_IMPRESSION_REACH_BY_DEMO_COVIEWED',
          'METRIC_VIRTUAL_PEOPLE_AVERAGE_IMPRESSION_FREQUENCY_BY_DEMO_COVIEWED',
          'METRIC_TARGET_RATING_POINTS_COVIEWED',
          'METRIC_DEMO_COMPOSITION_IMPRESSION_COVIEWED',
          'METRIC_VIRTUAL_PEOPLE_IMPRESSION_REACH_SHARE_PERCENT_COVIEWED',
          'METRIC_VIRTUAL_PEOPLE_IMPRESSION_REACH_PERCENT_COVIEWED',
        ]),
      )
      .exactOptional()
      .openapi({ description: 'Metrics to include as columns in your report.' }),
    options: OptionsSchema.exactOptional().openapi({ description: 'Additional query options.' }),
    type: z
      .enum([
        'TYPE_GENERAL',
        'TYPE_AUDIENCE_PERFORMANCE',
        'TYPE_INVENTORY_AVAILABILITY',
        'TYPE_KEYWORD',
        'TYPE_PIXEL_LOAD',
        'TYPE_AUDIENCE_COMPOSITION',
        'TYPE_CROSS_PARTNER',
        'TYPE_PAGE_CATEGORY',
        'TYPE_THIRD_PARTY_DATA_PROVIDER',
        'TYPE_CROSS_PARTNER_THIRD_PARTY_DATA_PROVIDER',
        'TYPE_CLIENT_SAFE',
        'TYPE_ORDER_ID',
        'TYPE_FEE',
        'TYPE_CROSS_FEE',
        'TYPE_ACTIVE_GRP',
        'TYPE_YOUTUBE_VERTICAL',
        'TYPE_COMSCORE_VCE',
        'TYPE_TRUEVIEW',
        'TYPE_NIELSEN_AUDIENCE_PROFILE',
        'TYPE_NIELSEN_DAILY_REACH_BUILD',
        'TYPE_NIELSEN_SITE',
        'TYPE_REACH_AND_FREQUENCY',
        'TYPE_ESTIMATED_CONVERSION',
        'TYPE_VERIFICATION',
        'TYPE_TRUEVIEW_IAR',
        'TYPE_NIELSEN_ONLINE_GLOBAL_MARKET',
        'TYPE_PETRA_NIELSEN_AUDIENCE_PROFILE',
        'TYPE_PETRA_NIELSEN_DAILY_REACH_BUILD',
        'TYPE_PETRA_NIELSEN_ONLINE_GLOBAL_MARKET',
        'TYPE_NOT_SUPPORTED',
        'TYPE_REACH_AUDIENCE',
        'TYPE_LINEAR_TV_SEARCH_LIFT',
        'TYPE_PATH',
        'TYPE_PATH_ATTRIBUTION',
      ])
      .exactOptional()
      .openapi({ description: 'Report type.' }),
  })
  .openapi({ description: 'Parameters of a query or report.', required: [] })
  .openapi('Parameters')

const QueryScheduleSchema = z
  .object({
    endTimeMs: z
      .string()
      .exactOptional()
      .openapi({ description: 'Datetime to periodically run the query until.' }),
    frequency: z
      .enum(['ONE_TIME', 'DAILY', 'WEEKLY', 'SEMI_MONTHLY', 'MONTHLY', 'QUARTERLY', 'YEARLY'])
      .exactOptional()
      .openapi({ description: 'How often the query is run.' }),
    nextRunMinuteOfDay: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Time of day at which a new report will be generated, represented as minutes past midnight. Range is 0 to 1439. Only applies to scheduled reports.',
      }),
    nextRunTimezoneCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Canonical timezone code for report generation time. Defaults to America/New_York.',
      }),
    startTimeMs: z
      .string()
      .exactOptional()
      .openapi({
        description: 'When to start running the query. Not applicable to `ONE_TIME` frequency.',
      }),
  })
  .openapi({ description: 'Information on how frequently and when to run a query.', required: [] })
  .openapi('QuerySchedule')

const QuerySchema = z
  .object({
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "doubleclickbidmanager#query".',
      }),
    metadata: QueryMetadataSchema.exactOptional().openapi({ description: 'Query metadata.' }),
    params: ParametersSchema.exactOptional().openapi({ description: 'Query parameters.' }),
    queryId: z.string().exactOptional().openapi({ description: 'Query ID.' }),
    reportDataEndTimeMs: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The ending time for the data that is shown in the report. Note, reportDataEndTimeMs is required if metadata.dataRange is CUSTOM_DATES and ignored otherwise.',
      }),
    reportDataStartTimeMs: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The starting time for the data that is shown in the report. Note, reportDataStartTimeMs is required if metadata.dataRange is CUSTOM_DATES and ignored otherwise.',
      }),
    schedule: QueryScheduleSchema.exactOptional().openapi({
      description: 'Information on how often and when to run a query.',
    }),
    timezoneCode: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Canonical timezone code for report data time. Defaults to America/New_York.',
      }),
  })
  .openapi({ description: 'Represents a query.', required: [] })
  .openapi('Query')

const ListQueriesResponseSchema = z
  .object({
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "doubleclickbidmanager#listQueriesResponse".',
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: "Next page's pagination token if one exists." }),
    queries: z.array(QuerySchema).exactOptional().openapi({ description: 'Retrieved queries.' }),
  })
  .openapi({ description: 'List queries response.', required: [] })
  .openapi('ListQueriesResponse')

const ReportKeySchema = z
  .object({
    queryId: z.string().exactOptional().openapi({ description: 'Query ID.' }),
    reportId: z.string().exactOptional().openapi({ description: 'Report ID.' }),
  })
  .openapi({ description: 'Key used to identify a report.', required: [] })
  .openapi('ReportKey')

const ReportFailureSchema = z
  .object({
    errorCode: z
      .enum([
        'AUTHENTICATION_ERROR',
        'UNAUTHORIZED_API_ACCESS',
        'SERVER_ERROR',
        'VALIDATION_ERROR',
        'REPORTING_FATAL_ERROR',
        'REPORTING_TRANSIENT_ERROR',
        'REPORTING_IMCOMPATIBLE_METRICS',
        'REPORTING_ILLEGAL_FILENAME',
        'REPORTING_QUERY_NOT_FOUND',
        'REPORTING_BUCKET_NOT_FOUND',
        'REPORTING_CREATE_BUCKET_FAILED',
        'REPORTING_DELETE_BUCKET_FAILED',
        'REPORTING_UPDATE_BUCKET_PERMISSION_FAILED',
        'REPORTING_WRITE_BUCKET_OBJECT_FAILED',
        'DEPRECATED_REPORTING_INVALID_QUERY',
        'REPORTING_INVALID_QUERY_TOO_MANY_UNFILTERED_LARGE_GROUP_BYS',
        'REPORTING_INVALID_QUERY_TITLE_MISSING',
        'REPORTING_INVALID_QUERY_MISSING_PARTNER_AND_ADVERTISER_FILTERS',
      ])
      .exactOptional()
      .openapi({ description: 'Error code that shows why the report was not created.' }),
  })
  .openapi({ description: 'An explanation of a report failure.', required: [] })
  .openapi('ReportFailure')

const ReportStatusSchema = z
  .object({
    failure: ReportFailureSchema.exactOptional().openapi({
      description: 'If the report failed, this records the cause.',
    }),
    finishTimeMs: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The time when this report either completed successfully or failed.',
      }),
    format: z
      .enum(['CSV', 'EXCEL_CSV', 'XLSX'])
      .exactOptional()
      .openapi({ description: 'The file type of the report.' }),
    state: z
      .enum(['RUNNING', 'DONE', 'FAILED'])
      .exactOptional()
      .openapi({ description: 'The state of the report.' }),
  })
  .openapi({ description: 'Report status.', required: [] })
  .openapi('ReportStatus')

const ReportMetadataSchema = z
  .object({
    googleCloudStoragePath: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The path to the location in Google Cloud Storage where the report is stored.',
      }),
    reportDataEndTimeMs: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ending time for the data that is shown in the report.' }),
    reportDataStartTimeMs: z
      .string()
      .exactOptional()
      .openapi({ description: 'The starting time for the data that is shown in the report.' }),
    status: ReportStatusSchema.exactOptional().openapi({ description: 'Report status.' }),
  })
  .openapi({ description: 'Report metadata.', required: [] })
  .openapi('ReportMetadata')

const ReportSchema = z
  .object({
    key: ReportKeySchema.exactOptional().openapi({ description: 'Key used to identify a report.' }),
    metadata: ReportMetadataSchema.exactOptional().openapi({ description: 'Report metadata.' }),
    params: ParametersSchema.exactOptional().openapi({ description: 'Report parameters.' }),
  })
  .openapi({ description: 'Represents a report.', required: [] })
  .openapi('Report')

const ListReportsResponseSchema = z
  .object({
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "doubleclickbidmanager#listReportsResponse".',
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: "Next page's pagination token if one exists." }),
    reports: z.array(ReportSchema).exactOptional().openapi({ description: 'Retrieved reports.' }),
  })
  .openapi({ description: 'List reports response.', required: [] })
  .openapi('ListReportsResponse')

const RunQueryRequestSchema = z
  .object({
    dataRange: z
      .enum([
        'CUSTOM_DATES',
        'CURRENT_DAY',
        'PREVIOUS_DAY',
        'WEEK_TO_DATE',
        'MONTH_TO_DATE',
        'QUARTER_TO_DATE',
        'YEAR_TO_DATE',
        'PREVIOUS_WEEK',
        'PREVIOUS_HALF_MONTH',
        'PREVIOUS_MONTH',
        'PREVIOUS_QUARTER',
        'PREVIOUS_YEAR',
        'LAST_7_DAYS',
        'LAST_30_DAYS',
        'LAST_90_DAYS',
        'LAST_365_DAYS',
        'ALL_TIME',
        'LAST_14_DAYS',
        'TYPE_NOT_SUPPORTED',
        'LAST_60_DAYS',
      ])
      .exactOptional()
      .openapi({ description: 'Report data range used to generate the report.' }),
    reportDataEndTimeMs: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The ending time for the data that is shown in the report. Note, reportDataEndTimeMs is required if dataRange is CUSTOM_DATES and ignored otherwise.',
      }),
    reportDataStartTimeMs: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The starting time for the data that is shown in the report. Note, reportDataStartTimeMs is required if dataRange is CUSTOM_DATES and ignored otherwise.',
      }),
    timezoneCode: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Canonical timezone code for report data time. Defaults to America/New_York.',
      }),
  })
  .openapi({ description: 'Request to run a stored query to generate a report.', required: [] })
  .openapi('RunQueryRequest')

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
        'https://www.googleapis.com/auth/doubleclickbidmanager':
          'View and manage your reports in DoubleClick Bid Manager',
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
        'https://www.googleapis.com/auth/doubleclickbidmanager':
          'View and manage your reports in DoubleClick Bid Manager',
      },
      tokenUrl: 'https://accounts.google.com/o/oauth2/token',
    },
  },
  type: 'oauth2',
}

export const getQueriesRoute = createRoute({
  method: 'get',
  path: '/queries',
  tags: ['queries'],
  description: 'Retrieves stored queries.',
  operationId: 'doubleclickbidmanager.queries.listqueries',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
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
              'Maximum number of results per page. Must be between 1 and 100. Defaults to 100 if unspecified.',
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
            description: 'Optional pagination token.',
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
      content: { 'application/json': { schema: ListQueriesResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/doubleclickbidmanager'],
      Oauth2c: ['https://www.googleapis.com/auth/doubleclickbidmanager'],
    },
  ],
})

export const getQueriesQueryIdReportsRoute = createRoute({
  method: 'get',
  path: '/queries/{queryId}/reports',
  tags: ['reports'],
  description: 'Retrieves stored reports.',
  operationId: 'doubleclickbidmanager.reports.listreports',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
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
              'Maximum number of results per page. Must be between 1 and 100. Defaults to 100 if unspecified.',
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
            description: 'Optional pagination token.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      queryId: z
        .string()
        .openapi({
          param: {
            description: 'Query ID with which the reports are associated.',
            in: 'path',
            name: 'queryId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListReportsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/doubleclickbidmanager'],
      Oauth2c: ['https://www.googleapis.com/auth/doubleclickbidmanager'],
    },
  ],
})

export const postQueryRoute = createRoute({
  method: 'post',
  path: '/query',
  tags: ['queries'],
  description: 'Creates a query.',
  operationId: 'doubleclickbidmanager.queries.createquery',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      asynchronous: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If true, tries to run the query asynchronously. Only applicable when the frequency is ONE_TIME.',
            in: 'query',
            name: 'asynchronous',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: QuerySchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: QuerySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/doubleclickbidmanager'],
      Oauth2c: ['https://www.googleapis.com/auth/doubleclickbidmanager'],
    },
  ],
})

export const getQueryQueryIdRoute = createRoute({
  method: 'get',
  path: '/query/{queryId}',
  tags: ['queries'],
  description: 'Retrieves a stored query.',
  operationId: 'doubleclickbidmanager.queries.getquery',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
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
      queryId: z
        .string()
        .openapi({
          param: {
            description: 'Query ID to retrieve.',
            in: 'path',
            name: 'queryId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: QuerySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/doubleclickbidmanager'],
      Oauth2c: ['https://www.googleapis.com/auth/doubleclickbidmanager'],
    },
  ],
})

export const postQueryQueryIdRoute = createRoute({
  method: 'post',
  path: '/query/{queryId}',
  tags: ['queries'],
  description: 'Runs a stored query to generate a report.',
  operationId: 'doubleclickbidmanager.queries.runquery',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      asynchronous: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, tries to run the query asynchronously.',
            in: 'query',
            name: 'asynchronous',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
    params: z.object({
      queryId: z
        .string()
        .openapi({
          param: {
            description: 'Query ID to run.',
            in: 'path',
            name: 'queryId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: RunQueryRequestSchema } } },
  },
  responses: { 200: { description: 'Successful response' } },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/doubleclickbidmanager'],
      Oauth2c: ['https://www.googleapis.com/auth/doubleclickbidmanager'],
    },
  ],
})

export const deleteQueryQueryIdRoute = createRoute({
  method: 'delete',
  path: '/query/{queryId}',
  tags: ['queries'],
  description: 'Deletes a stored query as well as the associated stored reports.',
  operationId: 'doubleclickbidmanager.queries.deletequery',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
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
      queryId: z
        .string()
        .openapi({
          param: {
            description: 'Query ID to delete.',
            in: 'path',
            name: 'queryId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Successful response' } },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/doubleclickbidmanager'],
      Oauth2c: ['https://www.googleapis.com/auth/doubleclickbidmanager'],
    },
  ],
})
