type GoogleAdsSearchads360V0ResourcesCustomColumn = {
  description?: string | undefined
  id?: string | undefined
  name?: string | undefined
  queryable?: boolean | undefined
  referencedSystemColumns?: string[] | undefined
  referencesAttributes?: boolean | undefined
  referencesMetrics?: boolean | undefined
  resourceName?: string | undefined
  valueType?: 'UNSPECIFIED' | 'UNKNOWN' | 'STRING' | 'INT64' | 'DOUBLE' | 'BOOLEAN' | undefined
}
type GoogleAdsSearchads360V0ServicesListCustomColumnsResponse = {
  customColumns?: GoogleAdsSearchads360V0ResourcesCustomColumn[] | undefined
}
type GoogleAdsSearchads360V0ServicesSearchSearchAds360Request = {
  pageSize?: number | undefined
  pageToken?: string | undefined
  query?: string | undefined
  returnTotalResultsCount?: boolean | undefined
  summaryRowSetting?:
    | 'UNSPECIFIED'
    | 'UNKNOWN'
    | 'NO_SUMMARY_ROW'
    | 'SUMMARY_ROW_WITH_RESULTS'
    | 'SUMMARY_ROW_ONLY'
    | undefined
  validateOnly?: boolean | undefined
}
type GoogleAdsSearchads360V0ServicesCustomColumnHeader = {
  id?: string | undefined
  name?: string | undefined
  referencesMetrics?: boolean | undefined
}
type GoogleAdsSearchads360V0CommonTargetRestriction = {
  bidOnly?: boolean | undefined
  targetingDimension?:
    | 'UNSPECIFIED'
    | 'UNKNOWN'
    | 'KEYWORD'
    | 'AUDIENCE'
    | 'TOPIC'
    | 'GENDER'
    | 'AGE_RANGE'
    | 'PLACEMENT'
    | 'PARENTAL_STATUS'
    | 'INCOME_RANGE'
    | undefined
}
type GoogleAdsSearchads360V0CommonTargetingSetting = {
  targetRestrictions?: GoogleAdsSearchads360V0CommonTargetRestriction[] | undefined
}
type GoogleAdsSearchads360V0ResourcesAdGroup = {
  adRotationMode?: 'UNSPECIFIED' | 'UNKNOWN' | 'OPTIMIZE' | 'ROTATE_FOREVER' | undefined
  cpcBidMicros?: string | undefined
  creationTime?: string | undefined
  endDate?: string | undefined
  engineId?: string | undefined
  engineStatus?:
    | 'UNSPECIFIED'
    | 'UNKNOWN'
    | 'AD_GROUP_ELIGIBLE'
    | 'AD_GROUP_EXPIRED'
    | 'AD_GROUP_REMOVED'
    | 'AD_GROUP_DRAFT'
    | 'AD_GROUP_PAUSED'
    | 'AD_GROUP_SERVING'
    | 'AD_GROUP_SUBMITTED'
    | 'CAMPAIGN_PAUSED'
    | 'ACCOUNT_PAUSED'
    | undefined
  id?: string | undefined
  labels?: string[] | undefined
  languageCode?: string | undefined
  lastModifiedTime?: string | undefined
  name?: string | undefined
  resourceName?: string | undefined
  startDate?: string | undefined
  status?: 'UNSPECIFIED' | 'UNKNOWN' | 'ENABLED' | 'PAUSED' | 'REMOVED' | undefined
  targetingSetting?: GoogleAdsSearchads360V0CommonTargetingSetting | undefined
  type?:
    | 'UNSPECIFIED'
    | 'UNKNOWN'
    | 'SEARCH_STANDARD'
    | 'DISPLAY_STANDARD'
    | 'SHOPPING_PRODUCT_ADS'
    | 'SHOPPING_SHOWCASE_ADS'
    | 'HOTEL_ADS'
    | 'SHOPPING_SMART_ADS'
    | 'VIDEO_BUMPER'
    | 'VIDEO_TRUE_VIEW_IN_STREAM'
    | 'VIDEO_TRUE_VIEW_IN_DISPLAY'
    | 'VIDEO_NON_SKIPPABLE_IN_STREAM'
    | 'VIDEO_OUTSTREAM'
    | 'SEARCH_DYNAMIC_ADS'
    | 'SHOPPING_COMPARISON_LISTING_ADS'
    | 'PROMOTED_HOTEL_ADS'
    | 'VIDEO_RESPONSIVE'
    | 'VIDEO_EFFICIENT_REACH'
    | 'SMART_CAMPAIGN_ADS'
    | 'TRAVEL_ADS'
    | undefined
}
type GoogleAdsSearchads360V0ResourcesAd = {
  displayUrl?: string | undefined
  finalUrls?: string[] | undefined
  id?: string | undefined
  name?: string | undefined
  resourceName?: string | undefined
  type?:
    | 'UNSPECIFIED'
    | 'UNKNOWN'
    | 'TEXT_AD'
    | 'EXPANDED_TEXT_AD'
    | 'CALL_ONLY_AD'
    | 'EXPANDED_DYNAMIC_SEARCH_AD'
    | 'HOTEL_AD'
    | 'SHOPPING_SMART_AD'
    | 'SHOPPING_PRODUCT_AD'
    | 'VIDEO_AD'
    | 'GMAIL_AD'
    | 'IMAGE_AD'
    | 'RESPONSIVE_SEARCH_AD'
    | 'LEGACY_RESPONSIVE_DISPLAY_AD'
    | 'APP_AD'
    | 'LEGACY_APP_INSTALL_AD'
    | 'RESPONSIVE_DISPLAY_AD'
    | 'LOCAL_AD'
    | 'HTML5_UPLOAD_AD'
    | 'DYNAMIC_HTML5_AD'
    | 'APP_ENGAGEMENT_AD'
    | 'SHOPPING_COMPARISON_LISTING_AD'
    | 'VIDEO_BUMPER_AD'
    | 'VIDEO_NON_SKIPPABLE_IN_STREAM_AD'
    | 'VIDEO_OUTSTREAM_AD'
    | 'VIDEO_TRUEVIEW_DISCOVERY_AD'
    | 'VIDEO_TRUEVIEW_IN_STREAM_AD'
    | 'VIDEO_RESPONSIVE_AD'
    | 'SMART_CAMPAIGN_AD'
    | 'APP_PRE_REGISTRATION_AD'
    | 'DISCOVERY_MULTI_ASSET_AD'
    | 'DISCOVERY_CAROUSEL_AD'
    | 'TRAVEL_AD'
    | undefined
}
type GoogleAdsSearchads360V0ResourcesAdGroupAd = {
  ad?: GoogleAdsSearchads360V0ResourcesAd | undefined
  creationTime?: string | undefined
  engineId?: string | undefined
  engineStatus?:
    | 'UNSPECIFIED'
    | 'UNKNOWN'
    | 'AD_GROUP_AD_ELIGIBLE'
    | 'AD_GROUP_AD_INAPPROPRIATE_FOR_CAMPAIGN'
    | 'AD_GROUP_AD_MOBILE_URL_UNDER_REVIEW'
    | 'AD_GROUP_AD_PARTIALLY_INVALID'
    | 'AD_GROUP_AD_TO_BE_ACTIVATED'
    | 'AD_GROUP_AD_NOT_REVIEWED'
    | 'AD_GROUP_AD_ON_HOLD'
    | 'AD_GROUP_AD_PAUSED'
    | 'AD_GROUP_AD_REMOVED'
    | 'AD_GROUP_AD_PENDING_REVIEW'
    | 'AD_GROUP_AD_UNDER_REVIEW'
    | 'AD_GROUP_AD_APPROVED'
    | 'AD_GROUP_AD_DISAPPROVED'
    | 'AD_GROUP_AD_SERVING'
    | 'AD_GROUP_AD_ACCOUNT_PAUSED'
    | 'AD_GROUP_AD_CAMPAIGN_PAUSED'
    | 'AD_GROUP_AD_AD_GROUP_PAUSED'
    | undefined
  labels?: string[] | undefined
  lastModifiedTime?: string | undefined
  resourceName?: string | undefined
  status?: 'UNSPECIFIED' | 'UNKNOWN' | 'ENABLED' | 'PAUSED' | 'REMOVED' | undefined
}
type GoogleAdsSearchads360V0ResourcesAdGroupAdLabel = {
  adGroupAd?: string | undefined
  label?: string | undefined
  resourceName?: string | undefined
}
type GoogleAdsSearchads360V0ResourcesAdGroupAudienceView = { resourceName?: string | undefined }
type GoogleAdsSearchads360V0CommonDeviceInfo = {
  type?:
    | 'UNSPECIFIED'
    | 'UNKNOWN'
    | 'MOBILE'
    | 'TABLET'
    | 'DESKTOP'
    | 'CONNECTED_TV'
    | 'OTHER'
    | undefined
}
type GoogleAdsSearchads360V0ResourcesAdGroupBidModifier = {
  bidModifier?: number | undefined
  device?: GoogleAdsSearchads360V0CommonDeviceInfo | undefined
  resourceName?: string | undefined
}
type GoogleAdsSearchads360V0CommonAgeRangeInfo = {
  type?:
    | 'UNSPECIFIED'
    | 'UNKNOWN'
    | 'AGE_RANGE_18_24'
    | 'AGE_RANGE_25_34'
    | 'AGE_RANGE_35_44'
    | 'AGE_RANGE_45_54'
    | 'AGE_RANGE_55_64'
    | 'AGE_RANGE_65_UP'
    | 'AGE_RANGE_UNDETERMINED'
    | undefined
}
type GoogleAdsSearchads360V0CommonGenderInfo = {
  type?: 'UNSPECIFIED' | 'UNKNOWN' | 'MALE' | 'FEMALE' | 'UNDETERMINED' | undefined
}
type GoogleAdsSearchads360V0CommonKeywordInfo = {
  matchType?: 'UNSPECIFIED' | 'UNKNOWN' | 'EXACT' | 'PHRASE' | 'BROAD' | undefined
  text?: string | undefined
}
type GoogleAdsSearchads360V0CommonListingGroupInfo = {
  type?: 'UNSPECIFIED' | 'UNKNOWN' | 'SUBDIVISION' | 'UNIT' | undefined
}
type GoogleAdsSearchads360V0CommonLocationInfo = { geoTargetConstant?: string | undefined }
type GoogleAdsSearchads360V0ResourcesAdGroupCriterionQualityInfo = {
  qualityScore?: number | undefined
}
type GoogleAdsSearchads360V0CommonUserListInfo = { userList?: string | undefined }
type GoogleAdsSearchads360V0CommonWebpageConditionInfo = {
  argument?: string | undefined
  operand?:
    | 'UNSPECIFIED'
    | 'UNKNOWN'
    | 'URL'
    | 'CATEGORY'
    | 'PAGE_TITLE'
    | 'PAGE_CONTENT'
    | 'CUSTOM_LABEL'
    | undefined
  operator?: 'UNSPECIFIED' | 'UNKNOWN' | 'EQUALS' | 'CONTAINS' | undefined
}
type GoogleAdsSearchads360V0CommonWebpageInfo = {
  conditions?: GoogleAdsSearchads360V0CommonWebpageConditionInfo[] | undefined
  coveragePercentage?: number | undefined
  criterionName?: string | undefined
}
type GoogleAdsSearchads360V0ResourcesAdGroupCriterion = {
  adGroup?: string | undefined
  ageRange?: GoogleAdsSearchads360V0CommonAgeRangeInfo | undefined
  bidModifier?: number | undefined
  cpcBidMicros?: string | undefined
  creationTime?: string | undefined
  criterionId?: string | undefined
  effectiveCpcBidMicros?: string | undefined
  engineId?: string | undefined
  engineStatus?:
    | 'UNSPECIFIED'
    | 'UNKNOWN'
    | 'AD_GROUP_CRITERION_ELIGIBLE'
    | 'AD_GROUP_CRITERION_INAPPROPRIATE_FOR_CAMPAIGN'
    | 'AD_GROUP_CRITERION_INVALID_MOBILE_SEARCH'
    | 'AD_GROUP_CRITERION_INVALID_PC_SEARCH'
    | 'AD_GROUP_CRITERION_INVALID_SEARCH'
    | 'AD_GROUP_CRITERION_LOW_SEARCH_VOLUME'
    | 'AD_GROUP_CRITERION_MOBILE_URL_UNDER_REVIEW'
    | 'AD_GROUP_CRITERION_PARTIALLY_INVALID'
    | 'AD_GROUP_CRITERION_TO_BE_ACTIVATED'
    | 'AD_GROUP_CRITERION_UNDER_REVIEW'
    | 'AD_GROUP_CRITERION_NOT_REVIEWED'
    | 'AD_GROUP_CRITERION_ON_HOLD'
    | 'AD_GROUP_CRITERION_PENDING_REVIEW'
    | 'AD_GROUP_CRITERION_PAUSED'
    | 'AD_GROUP_CRITERION_REMOVED'
    | 'AD_GROUP_CRITERION_APPROVED'
    | 'AD_GROUP_CRITERION_DISAPPROVED'
    | 'AD_GROUP_CRITERION_SERVING'
    | 'AD_GROUP_CRITERION_ACCOUNT_PAUSED'
    | undefined
  finalUrlSuffix?: string | undefined
  finalUrls?: string[] | undefined
  gender?: GoogleAdsSearchads360V0CommonGenderInfo | undefined
  keyword?: GoogleAdsSearchads360V0CommonKeywordInfo | undefined
  labels?: string[] | undefined
  lastModifiedTime?: string | undefined
  listingGroup?: GoogleAdsSearchads360V0CommonListingGroupInfo | undefined
  location?: GoogleAdsSearchads360V0CommonLocationInfo | undefined
  negative?: boolean | undefined
  qualityInfo?: GoogleAdsSearchads360V0ResourcesAdGroupCriterionQualityInfo | undefined
  resourceName?: string | undefined
  status?: 'UNSPECIFIED' | 'UNKNOWN' | 'ENABLED' | 'PAUSED' | 'REMOVED' | undefined
  trackingUrlTemplate?: string | undefined
  type?:
    | 'UNSPECIFIED'
    | 'UNKNOWN'
    | 'KEYWORD'
    | 'PLACEMENT'
    | 'MOBILE_APP_CATEGORY'
    | 'MOBILE_APPLICATION'
    | 'DEVICE'
    | 'LOCATION'
    | 'LISTING_GROUP'
    | 'AD_SCHEDULE'
    | 'AGE_RANGE'
    | 'GENDER'
    | 'INCOME_RANGE'
    | 'PARENTAL_STATUS'
    | 'YOUTUBE_VIDEO'
    | 'YOUTUBE_CHANNEL'
    | 'USER_LIST'
    | 'PROXIMITY'
    | 'TOPIC'
    | 'LISTING_SCOPE'
    | 'LANGUAGE'
    | 'IP_BLOCK'
    | 'CONTENT_LABEL'
    | 'CARRIER'
    | 'USER_INTEREST'
    | 'WEBPAGE'
    | 'OPERATING_SYSTEM_VERSION'
    | 'APP_PAYMENT_MODEL'
    | 'MOBILE_DEVICE'
    | 'CUSTOM_AFFINITY'
    | 'CUSTOM_INTENT'
    | 'LOCATION_GROUP'
    | 'CUSTOM_AUDIENCE'
    | 'COMBINED_AUDIENCE'
    | 'KEYWORD_THEME'
    | 'AUDIENCE'
    | 'LOCAL_SERVICE_ID'
    | undefined
  userList?: GoogleAdsSearchads360V0CommonUserListInfo | undefined
  webpage?: GoogleAdsSearchads360V0CommonWebpageInfo | undefined
}
type GoogleAdsSearchads360V0ResourcesAdGroupCriterionLabel = {
  adGroupCriterion?: string | undefined
  label?: string | undefined
  resourceName?: string | undefined
}
type GoogleAdsSearchads360V0ResourcesAdGroupLabel = {
  adGroup?: string | undefined
  label?: string | undefined
  resourceName?: string | undefined
}
type GoogleAdsSearchads360V0ResourcesAgeRangeView = { resourceName?: string | undefined }
type GoogleAdsSearchads360V0CommonEnhancedCpc = { [x: string]: unknown }
type GoogleAdsSearchads360V0CommonMaximizeConversionValue = {
  cpcBidCeilingMicros?: string | undefined
  cpcBidFloorMicros?: string | undefined
  targetRoas?: number | undefined
}
type GoogleAdsSearchads360V0CommonMaximizeConversions = {
  cpcBidCeilingMicros?: string | undefined
  cpcBidFloorMicros?: string | undefined
  targetCpaMicros?: string | undefined
}
type GoogleAdsSearchads360V0CommonTargetCpa = {
  cpcBidCeilingMicros?: string | undefined
  cpcBidFloorMicros?: string | undefined
  targetCpaMicros?: string | undefined
}
type GoogleAdsSearchads360V0CommonTargetImpressionShare = {
  cpcBidCeilingMicros?: string | undefined
  location?:
    | 'UNSPECIFIED'
    | 'UNKNOWN'
    | 'ANYWHERE_ON_PAGE'
    | 'TOP_OF_PAGE'
    | 'ABSOLUTE_TOP_OF_PAGE'
    | undefined
  locationFractionMicros?: string | undefined
}
type GoogleAdsSearchads360V0CommonTargetOutrankShare = { cpcBidCeilingMicros?: string | undefined }
type GoogleAdsSearchads360V0CommonTargetRoas = {
  cpcBidCeilingMicros?: string | undefined
  cpcBidFloorMicros?: string | undefined
  targetRoas?: number | undefined
}
type GoogleAdsSearchads360V0CommonTargetSpend = {
  cpcBidCeilingMicros?: string | undefined
  targetSpendMicros?: string | undefined
}
type GoogleAdsSearchads360V0ResourcesBiddingStrategy = {
  campaignCount?: string | undefined
  currencyCode?: string | undefined
  effectiveCurrencyCode?: string | undefined
  enhancedCpc?: GoogleAdsSearchads360V0CommonEnhancedCpc | undefined
  id?: string | undefined
  maximizeConversionValue?: GoogleAdsSearchads360V0CommonMaximizeConversionValue | undefined
  maximizeConversions?: GoogleAdsSearchads360V0CommonMaximizeConversions | undefined
  name?: string | undefined
  nonRemovedCampaignCount?: string | undefined
  resourceName?: string | undefined
  status?: 'UNSPECIFIED' | 'UNKNOWN' | 'ENABLED' | 'REMOVED' | undefined
  targetCpa?: GoogleAdsSearchads360V0CommonTargetCpa | undefined
  targetImpressionShare?: GoogleAdsSearchads360V0CommonTargetImpressionShare | undefined
  targetOutrankShare?: GoogleAdsSearchads360V0CommonTargetOutrankShare | undefined
  targetRoas?: GoogleAdsSearchads360V0CommonTargetRoas | undefined
  targetSpend?: GoogleAdsSearchads360V0CommonTargetSpend | undefined
  type?:
    | 'UNSPECIFIED'
    | 'UNKNOWN'
    | 'COMMISSION'
    | 'ENHANCED_CPC'
    | 'INVALID'
    | 'MANUAL_CPA'
    | 'MANUAL_CPC'
    | 'MANUAL_CPM'
    | 'MANUAL_CPV'
    | 'MAXIMIZE_CONVERSIONS'
    | 'MAXIMIZE_CONVERSION_VALUE'
    | 'PAGE_ONE_PROMOTED'
    | 'PERCENT_CPC'
    | 'TARGET_CPA'
    | 'TARGET_CPM'
    | 'TARGET_IMPRESSION_SHARE'
    | 'TARGET_OUTRANK_SHARE'
    | 'TARGET_ROAS'
    | 'TARGET_SPEND'
    | undefined
}
type GoogleAdsSearchads360V0ResourcesCampaignDynamicSearchAdsSetting = {
  domainName?: string | undefined
  languageCode?: string | undefined
  useSuppliedUrlsOnly?: boolean | undefined
}
type GoogleAdsSearchads360V0CommonFrequencyCapEntry = { [x: string]: unknown }
type GoogleAdsSearchads360V0ResourcesCampaignGeoTargetTypeSetting = {
  negativeGeoTargetType?:
    | 'UNSPECIFIED'
    | 'UNKNOWN'
    | 'PRESENCE_OR_INTEREST'
    | 'PRESENCE'
    | undefined
  positiveGeoTargetType?:
    | 'UNSPECIFIED'
    | 'UNKNOWN'
    | 'PRESENCE_OR_INTEREST'
    | 'SEARCH_INTEREST'
    | 'PRESENCE'
    | undefined
}
type GoogleAdsSearchads360V0CommonManualCpa = { [x: string]: unknown }
type GoogleAdsSearchads360V0CommonManualCpc = { enhancedCpcEnabled?: boolean | undefined }
type GoogleAdsSearchads360V0CommonManualCpm = { [x: string]: unknown }
type GoogleAdsSearchads360V0ResourcesCampaignNetworkSettings = {
  targetContentNetwork?: boolean | undefined
  targetGoogleSearch?: boolean | undefined
  targetPartnerSearchNetwork?: boolean | undefined
  targetSearchNetwork?: boolean | undefined
}
type GoogleAdsSearchads360V0ResourcesCampaignOptimizationGoalSetting = {
  optimizationGoalTypes?:
    | ('UNSPECIFIED' | 'UNKNOWN' | 'CALL_CLICKS' | 'DRIVING_DIRECTIONS' | 'APP_PRE_REGISTRATION')[]
    | undefined
}
type GoogleAdsSearchads360V0CommonPercentCpc = {
  cpcBidCeilingMicros?: string | undefined
  enhancedCpcEnabled?: boolean | undefined
}
type GoogleAdsSearchads360V0CommonRealTimeBiddingSetting = { optIn?: boolean | undefined }
type GoogleAdsSearchads360V0ResourcesCampaignSelectiveOptimization = {
  conversionActions?: string[] | undefined
}
type GoogleAdsSearchads360V0ResourcesCampaignShoppingSetting = {
  campaignPriority?: number | undefined
  enableLocal?: boolean | undefined
  feedLabel?: string | undefined
  merchantId?: string | undefined
  salesCountry?: string | undefined
  useVehicleInventory?: boolean | undefined
}
type GoogleAdsSearchads360V0CommonTargetCpm = { [x: string]: unknown }
type GoogleAdsSearchads360V0ResourcesCampaignTrackingSetting = { trackingUrl?: string | undefined }
type GoogleAdsSearchads360V0CommonCustomParameter = {
  key?: string | undefined
  value?: string | undefined
}
type GoogleAdsSearchads360V0ResourcesCampaign = {
  adServingOptimizationStatus?:
    | 'UNSPECIFIED'
    | 'UNKNOWN'
    | 'OPTIMIZE'
    | 'CONVERSION_OPTIMIZE'
    | 'ROTATE'
    | 'ROTATE_INDEFINITELY'
    | 'UNAVAILABLE'
    | undefined
  advertisingChannelSubType?:
    | 'UNSPECIFIED'
    | 'UNKNOWN'
    | 'SEARCH_MOBILE_APP'
    | 'DISPLAY_MOBILE_APP'
    | 'SEARCH_EXPRESS'
    | 'DISPLAY_EXPRESS'
    | 'SHOPPING_SMART_ADS'
    | 'DISPLAY_GMAIL_AD'
    | 'DISPLAY_SMART_CAMPAIGN'
    | 'VIDEO_OUTSTREAM'
    | 'VIDEO_ACTION'
    | 'VIDEO_NON_SKIPPABLE'
    | 'APP_CAMPAIGN'
    | 'APP_CAMPAIGN_FOR_ENGAGEMENT'
    | 'LOCAL_CAMPAIGN'
    | 'SHOPPING_COMPARISON_LISTING_ADS'
    | 'SMART_CAMPAIGN'
    | 'VIDEO_SEQUENCE'
    | 'APP_CAMPAIGN_FOR_PRE_REGISTRATION'
    | 'VIDEO_REACH_TARGET_FREQUENCY'
    | 'TRAVEL_ACTIVITIES'
    | undefined
  advertisingChannelType?:
    | 'UNSPECIFIED'
    | 'UNKNOWN'
    | 'SEARCH'
    | 'DISPLAY'
    | 'SHOPPING'
    | 'HOTEL'
    | 'VIDEO'
    | 'MULTI_CHANNEL'
    | 'LOCAL'
    | 'SMART'
    | 'PERFORMANCE_MAX'
    | 'LOCAL_SERVICES'
    | 'DISCOVERY'
    | 'TRAVEL'
    | undefined
  biddingStrategy?: string | undefined
  biddingStrategySystemStatus?:
    | 'UNSPECIFIED'
    | 'UNKNOWN'
    | 'ENABLED'
    | 'LEARNING_NEW'
    | 'LEARNING_SETTING_CHANGE'
    | 'LEARNING_BUDGET_CHANGE'
    | 'LEARNING_COMPOSITION_CHANGE'
    | 'LEARNING_CONVERSION_TYPE_CHANGE'
    | 'LEARNING_CONVERSION_SETTING_CHANGE'
    | 'LIMITED_BY_CPC_BID_CEILING'
    | 'LIMITED_BY_CPC_BID_FLOOR'
    | 'LIMITED_BY_DATA'
    | 'LIMITED_BY_BUDGET'
    | 'LIMITED_BY_LOW_PRIORITY_SPEND'
    | 'LIMITED_BY_LOW_QUALITY'
    | 'LIMITED_BY_INVENTORY'
    | 'MISCONFIGURED_ZERO_ELIGIBILITY'
    | 'MISCONFIGURED_CONVERSION_TYPES'
    | 'MISCONFIGURED_CONVERSION_SETTINGS'
    | 'MISCONFIGURED_SHARED_BUDGET'
    | 'MISCONFIGURED_STRATEGY_TYPE'
    | 'PAUSED'
    | 'UNAVAILABLE'
    | 'MULTIPLE_LEARNING'
    | 'MULTIPLE_LIMITED'
    | 'MULTIPLE_MISCONFIGURED'
    | 'MULTIPLE'
    | undefined
  biddingStrategyType?:
    | 'UNSPECIFIED'
    | 'UNKNOWN'
    | 'COMMISSION'
    | 'ENHANCED_CPC'
    | 'INVALID'
    | 'MANUAL_CPA'
    | 'MANUAL_CPC'
    | 'MANUAL_CPM'
    | 'MANUAL_CPV'
    | 'MAXIMIZE_CONVERSIONS'
    | 'MAXIMIZE_CONVERSION_VALUE'
    | 'PAGE_ONE_PROMOTED'
    | 'PERCENT_CPC'
    | 'TARGET_CPA'
    | 'TARGET_CPM'
    | 'TARGET_IMPRESSION_SHARE'
    | 'TARGET_OUTRANK_SHARE'
    | 'TARGET_ROAS'
    | 'TARGET_SPEND'
    | undefined
  campaignBudget?: string | undefined
  createTime?: string | undefined
  creationTime?: string | undefined
  dynamicSearchAdsSetting?:
    | GoogleAdsSearchads360V0ResourcesCampaignDynamicSearchAdsSetting
    | undefined
  endDate?: string | undefined
  engineId?: string | undefined
  excludedParentAssetFieldTypes?:
    | (
        | 'UNSPECIFIED'
        | 'UNKNOWN'
        | 'HEADLINE'
        | 'DESCRIPTION'
        | 'MANDATORY_AD_TEXT'
        | 'MARKETING_IMAGE'
        | 'MEDIA_BUNDLE'
        | 'YOUTUBE_VIDEO'
        | 'BOOK_ON_GOOGLE'
        | 'LEAD_FORM'
        | 'PROMOTION'
        | 'CALLOUT'
        | 'STRUCTURED_SNIPPET'
        | 'SITELINK'
        | 'MOBILE_APP'
        | 'HOTEL_CALLOUT'
        | 'CALL'
        | 'PRICE'
        | 'LONG_HEADLINE'
        | 'BUSINESS_NAME'
        | 'SQUARE_MARKETING_IMAGE'
        | 'PORTRAIT_MARKETING_IMAGE'
        | 'LOGO'
        | 'LANDSCAPE_LOGO'
        | 'VIDEO'
        | 'CALL_TO_ACTION_SELECTION'
        | 'AD_IMAGE'
        | 'BUSINESS_LOGO'
        | 'HOTEL_PROPERTY'
      )[]
    | undefined
  finalUrlSuffix?: string | undefined
  frequencyCaps?: GoogleAdsSearchads360V0CommonFrequencyCapEntry[] | undefined
  geoTargetTypeSetting?: GoogleAdsSearchads360V0ResourcesCampaignGeoTargetTypeSetting | undefined
  id?: string | undefined
  labels?: string[] | undefined
  lastModifiedTime?: string | undefined
  manualCpa?: GoogleAdsSearchads360V0CommonManualCpa | undefined
  manualCpc?: GoogleAdsSearchads360V0CommonManualCpc | undefined
  manualCpm?: GoogleAdsSearchads360V0CommonManualCpm | undefined
  maximizeConversionValue?: GoogleAdsSearchads360V0CommonMaximizeConversionValue | undefined
  maximizeConversions?: GoogleAdsSearchads360V0CommonMaximizeConversions | undefined
  name?: string | undefined
  networkSettings?: GoogleAdsSearchads360V0ResourcesCampaignNetworkSettings | undefined
  optimizationGoalSetting?:
    | GoogleAdsSearchads360V0ResourcesCampaignOptimizationGoalSetting
    | undefined
  percentCpc?: GoogleAdsSearchads360V0CommonPercentCpc | undefined
  realTimeBiddingSetting?: GoogleAdsSearchads360V0CommonRealTimeBiddingSetting | undefined
  resourceName?: string | undefined
  selectiveOptimization?: GoogleAdsSearchads360V0ResourcesCampaignSelectiveOptimization | undefined
  servingStatus?:
    | 'UNSPECIFIED'
    | 'UNKNOWN'
    | 'SERVING'
    | 'NONE'
    | 'ENDED'
    | 'PENDING'
    | 'SUSPENDED'
    | undefined
  shoppingSetting?: GoogleAdsSearchads360V0ResourcesCampaignShoppingSetting | undefined
  startDate?: string | undefined
  status?: 'UNSPECIFIED' | 'UNKNOWN' | 'ENABLED' | 'PAUSED' | 'REMOVED' | undefined
  targetCpa?: GoogleAdsSearchads360V0CommonTargetCpa | undefined
  targetCpm?: GoogleAdsSearchads360V0CommonTargetCpm | undefined
  targetImpressionShare?: GoogleAdsSearchads360V0CommonTargetImpressionShare | undefined
  targetRoas?: GoogleAdsSearchads360V0CommonTargetRoas | undefined
  targetSpend?: GoogleAdsSearchads360V0CommonTargetSpend | undefined
  trackingSetting?: GoogleAdsSearchads360V0ResourcesCampaignTrackingSetting | undefined
  trackingUrlTemplate?: string | undefined
  urlCustomParameters?: GoogleAdsSearchads360V0CommonCustomParameter[] | undefined
  urlExpansionOptOut?: boolean | undefined
}
type GoogleAdsSearchads360V0ResourcesCampaignAudienceView = { resourceName?: string | undefined }
type GoogleAdsSearchads360V0ResourcesCampaignBudget = {
  amountMicros?: string | undefined
  deliveryMethod?: 'UNSPECIFIED' | 'UNKNOWN' | 'STANDARD' | 'ACCELERATED' | undefined
  period?: 'UNSPECIFIED' | 'UNKNOWN' | 'DAILY' | 'FIXED_DAILY' | 'CUSTOM_PERIOD' | undefined
  resourceName?: string | undefined
}
type GoogleAdsSearchads360V0CommonLanguageInfo = { languageConstant?: string | undefined }
type GoogleAdsSearchads360V0CommonLocationGroupInfo = {
  feedItemSets?: string[] | undefined
  geoTargetConstants?: string[] | undefined
  radius?: string | undefined
  radiusUnits?: 'UNSPECIFIED' | 'UNKNOWN' | 'METERS' | 'MILES' | 'MILLI_MILES' | undefined
}
type GoogleAdsSearchads360V0ResourcesCampaignCriterion = {
  ageRange?: GoogleAdsSearchads360V0CommonAgeRangeInfo | undefined
  bidModifier?: number | undefined
  criterionId?: string | undefined
  device?: GoogleAdsSearchads360V0CommonDeviceInfo | undefined
  displayName?: string | undefined
  gender?: GoogleAdsSearchads360V0CommonGenderInfo | undefined
  keyword?: GoogleAdsSearchads360V0CommonKeywordInfo | undefined
  language?: GoogleAdsSearchads360V0CommonLanguageInfo | undefined
  lastModifiedTime?: string | undefined
  location?: GoogleAdsSearchads360V0CommonLocationInfo | undefined
  locationGroup?: GoogleAdsSearchads360V0CommonLocationGroupInfo | undefined
  negative?: boolean | undefined
  resourceName?: string | undefined
  status?: 'UNSPECIFIED' | 'UNKNOWN' | 'ENABLED' | 'PAUSED' | 'REMOVED' | undefined
  type?:
    | 'UNSPECIFIED'
    | 'UNKNOWN'
    | 'KEYWORD'
    | 'PLACEMENT'
    | 'MOBILE_APP_CATEGORY'
    | 'MOBILE_APPLICATION'
    | 'DEVICE'
    | 'LOCATION'
    | 'LISTING_GROUP'
    | 'AD_SCHEDULE'
    | 'AGE_RANGE'
    | 'GENDER'
    | 'INCOME_RANGE'
    | 'PARENTAL_STATUS'
    | 'YOUTUBE_VIDEO'
    | 'YOUTUBE_CHANNEL'
    | 'USER_LIST'
    | 'PROXIMITY'
    | 'TOPIC'
    | 'LISTING_SCOPE'
    | 'LANGUAGE'
    | 'IP_BLOCK'
    | 'CONTENT_LABEL'
    | 'CARRIER'
    | 'USER_INTEREST'
    | 'WEBPAGE'
    | 'OPERATING_SYSTEM_VERSION'
    | 'APP_PAYMENT_MODEL'
    | 'MOBILE_DEVICE'
    | 'CUSTOM_AFFINITY'
    | 'CUSTOM_INTENT'
    | 'LOCATION_GROUP'
    | 'CUSTOM_AUDIENCE'
    | 'COMBINED_AUDIENCE'
    | 'KEYWORD_THEME'
    | 'AUDIENCE'
    | 'LOCAL_SERVICE_ID'
    | undefined
  userList?: GoogleAdsSearchads360V0CommonUserListInfo | undefined
  webpage?: GoogleAdsSearchads360V0CommonWebpageInfo | undefined
}
type GoogleAdsSearchads360V0ResourcesCampaignLabel = {
  campaign?: string | undefined
  label?: string | undefined
  resourceName?: string | undefined
}
type GoogleAdsSearchads360V0ResourcesConversionActionAttributionModelSettings = {
  attributionModel?:
    | 'UNSPECIFIED'
    | 'UNKNOWN'
    | 'EXTERNAL'
    | 'GOOGLE_ADS_LAST_CLICK'
    | 'GOOGLE_SEARCH_ATTRIBUTION_FIRST_CLICK'
    | 'GOOGLE_SEARCH_ATTRIBUTION_LINEAR'
    | 'GOOGLE_SEARCH_ATTRIBUTION_TIME_DECAY'
    | 'GOOGLE_SEARCH_ATTRIBUTION_POSITION_BASED'
    | 'GOOGLE_SEARCH_ATTRIBUTION_DATA_DRIVEN'
    | undefined
  dataDrivenModelStatus?:
    | 'UNSPECIFIED'
    | 'UNKNOWN'
    | 'AVAILABLE'
    | 'STALE'
    | 'EXPIRED'
    | 'NEVER_GENERATED'
    | undefined
}
type GoogleAdsSearchads360V0ResourcesConversionActionFloodlightSettings = {
  activityGroupTag?: string | undefined
  activityId?: string | undefined
  activityTag?: string | undefined
}
type GoogleAdsSearchads360V0ResourcesConversionActionValueSettings = {
  alwaysUseDefaultValue?: boolean | undefined
  defaultCurrencyCode?: string | undefined
  defaultValue?: number | undefined
}
type GoogleAdsSearchads360V0ResourcesConversionAction = {
  appId?: string | undefined
  attributionModelSettings?:
    | GoogleAdsSearchads360V0ResourcesConversionActionAttributionModelSettings
    | undefined
  category?:
    | 'UNSPECIFIED'
    | 'UNKNOWN'
    | 'DEFAULT'
    | 'PAGE_VIEW'
    | 'PURCHASE'
    | 'SIGNUP'
    | 'LEAD'
    | 'DOWNLOAD'
    | 'ADD_TO_CART'
    | 'BEGIN_CHECKOUT'
    | 'SUBSCRIBE_PAID'
    | 'PHONE_CALL_LEAD'
    | 'IMPORTED_LEAD'
    | 'SUBMIT_LEAD_FORM'
    | 'BOOK_APPOINTMENT'
    | 'REQUEST_QUOTE'
    | 'GET_DIRECTIONS'
    | 'OUTBOUND_CLICK'
    | 'CONTACT'
    | 'ENGAGEMENT'
    | 'STORE_VISIT'
    | 'STORE_SALE'
    | 'QUALIFIED_LEAD'
    | 'CONVERTED_LEAD'
    | undefined
  clickThroughLookbackWindowDays?: string | undefined
  creationTime?: string | undefined
  floodlightSettings?:
    | GoogleAdsSearchads360V0ResourcesConversionActionFloodlightSettings
    | undefined
  id?: string | undefined
  includeInClientAccountConversionsMetric?: boolean | undefined
  includeInConversionsMetric?: boolean | undefined
  name?: string | undefined
  ownerCustomer?: string | undefined
  primaryForGoal?: boolean | undefined
  resourceName?: string | undefined
  status?: 'UNSPECIFIED' | 'UNKNOWN' | 'ENABLED' | 'REMOVED' | 'HIDDEN' | undefined
  type?:
    | 'UNSPECIFIED'
    | 'UNKNOWN'
    | 'AD_CALL'
    | 'CLICK_TO_CALL'
    | 'GOOGLE_PLAY_DOWNLOAD'
    | 'GOOGLE_PLAY_IN_APP_PURCHASE'
    | 'UPLOAD_CALLS'
    | 'UPLOAD_CLICKS'
    | 'WEBPAGE'
    | 'WEBSITE_CALL'
    | 'STORE_SALES_DIRECT_UPLOAD'
    | 'STORE_SALES'
    | 'FIREBASE_ANDROID_FIRST_OPEN'
    | 'FIREBASE_ANDROID_IN_APP_PURCHASE'
    | 'FIREBASE_ANDROID_CUSTOM'
    | 'FIREBASE_IOS_FIRST_OPEN'
    | 'FIREBASE_IOS_IN_APP_PURCHASE'
    | 'FIREBASE_IOS_CUSTOM'
    | 'THIRD_PARTY_APP_ANALYTICS_ANDROID_FIRST_OPEN'
    | 'THIRD_PARTY_APP_ANALYTICS_ANDROID_IN_APP_PURCHASE'
    | 'THIRD_PARTY_APP_ANALYTICS_ANDROID_CUSTOM'
    | 'THIRD_PARTY_APP_ANALYTICS_IOS_FIRST_OPEN'
    | 'THIRD_PARTY_APP_ANALYTICS_IOS_IN_APP_PURCHASE'
    | 'THIRD_PARTY_APP_ANALYTICS_IOS_CUSTOM'
    | 'ANDROID_APP_PRE_REGISTRATION'
    | 'ANDROID_INSTALLS_ALL_OTHER_APPS'
    | 'FLOODLIGHT_ACTION'
    | 'FLOODLIGHT_TRANSACTION'
    | 'GOOGLE_HOSTED'
    | 'LEAD_FORM_SUBMIT'
    | 'SALESFORCE'
    | 'SEARCH_ADS_360'
    | 'SMART_CAMPAIGN_AD_CLICKS_TO_CALL'
    | 'SMART_CAMPAIGN_MAP_CLICKS_TO_CALL'
    | 'SMART_CAMPAIGN_MAP_DIRECTIONS'
    | 'SMART_CAMPAIGN_TRACKED_CALLS'
    | 'STORE_VISITS'
    | 'WEBPAGE_CODELESS'
    | undefined
  valueSettings?: GoogleAdsSearchads360V0ResourcesConversionActionValueSettings | undefined
}
type GoogleAdsSearchads360V0CommonValue = {
  booleanValue?: boolean | undefined
  doubleValue?: number | undefined
  floatValue?: number | undefined
  int64Value?: string | undefined
  stringValue?: string | undefined
}
type GoogleAdsSearchads360V0ResourcesConversionTrackingSetting = {
  acceptedCustomerDataTerms?: boolean | undefined
  conversionTrackingId?: string | undefined
  conversionTrackingStatus?:
    | 'UNSPECIFIED'
    | 'UNKNOWN'
    | 'NOT_CONVERSION_TRACKED'
    | 'CONVERSION_TRACKING_MANAGED_BY_SELF'
    | 'CONVERSION_TRACKING_MANAGED_BY_THIS_MANAGER'
    | 'CONVERSION_TRACKING_MANAGED_BY_ANOTHER_MANAGER'
    | undefined
  crossAccountConversionTrackingId?: string | undefined
  enhancedConversionsForLeadsEnabled?: boolean | undefined
  googleAdsConversionCustomer?: string | undefined
  googleAdsCrossAccountConversionTrackingId?: string | undefined
}
type GoogleAdsSearchads360V0ResourcesDoubleClickCampaignManagerSetting = {
  advertiserId?: string | undefined
  networkId?: string | undefined
  timeZone?: string | undefined
}
type GoogleAdsSearchads360V0ResourcesCustomer = {
  accountStatus?:
    | 'UNSPECIFIED'
    | 'UNKNOWN'
    | 'ENABLED'
    | 'PAUSED'
    | 'SUSPENDED'
    | 'REMOVED'
    | 'DRAFT'
    | undefined
  accountType?:
    | 'UNSPECIFIED'
    | 'UNKNOWN'
    | 'BAIDU'
    | 'ENGINE_TRACK'
    | 'FACEBOOK'
    | 'FACEBOOK_GATEWAY'
    | 'GOOGLE_ADS'
    | 'MICROSOFT'
    | 'SEARCH_ADS_360'
    | 'YAHOO_JAPAN'
    | undefined
  autoTaggingEnabled?: boolean | undefined
  conversionTrackingSetting?: GoogleAdsSearchads360V0ResourcesConversionTrackingSetting | undefined
  creationTime?: string | undefined
  currencyCode?: string | undefined
  descriptiveName?: string | undefined
  doubleClickCampaignManagerSetting?:
    | GoogleAdsSearchads360V0ResourcesDoubleClickCampaignManagerSetting
    | undefined
  engineId?: string | undefined
  finalUrlSuffix?: string | undefined
  id?: string | undefined
  lastModifiedTime?: string | undefined
  manager?: boolean | undefined
  resourceName?: string | undefined
  status?: 'UNSPECIFIED' | 'UNKNOWN' | 'ENABLED' | 'CANCELED' | 'SUSPENDED' | 'CLOSED' | undefined
  timeZone?: string | undefined
  trackingUrlTemplate?: string | undefined
}
type GoogleAdsSearchads360V0ResourcesCustomerClient = {
  appliedLabels?: string[] | undefined
  clientCustomer?: string | undefined
  currencyCode?: string | undefined
  descriptiveName?: string | undefined
  hidden?: boolean | undefined
  id?: string | undefined
  level?: string | undefined
  manager?: boolean | undefined
  resourceName?: string | undefined
  status?: 'UNSPECIFIED' | 'UNKNOWN' | 'ENABLED' | 'CANCELED' | 'SUSPENDED' | 'CLOSED' | undefined
  testAccount?: boolean | undefined
  timeZone?: string | undefined
}
type GoogleAdsSearchads360V0ResourcesCustomerManagerLink = {
  managerCustomer?: string | undefined
  managerLinkId?: string | undefined
  resourceName?: string | undefined
  status?:
    | 'UNSPECIFIED'
    | 'UNKNOWN'
    | 'ACTIVE'
    | 'INACTIVE'
    | 'PENDING'
    | 'REFUSED'
    | 'CANCELED'
    | undefined
}
type GoogleAdsSearchads360V0ResourcesDynamicSearchAdsSearchTermView = {
  landingPage?: string | undefined
  resourceName?: string | undefined
}
type GoogleAdsSearchads360V0ResourcesGenderView = { resourceName?: string | undefined }
type GoogleAdsSearchads360V0ResourcesKeywordView = { resourceName?: string | undefined }
type GoogleAdsSearchads360V0CommonTextLabel = {
  backgroundColor?: string | undefined
  description?: string | undefined
}
type GoogleAdsSearchads360V0ResourcesLabel = {
  id?: string | undefined
  name?: string | undefined
  resourceName?: string | undefined
  status?: 'UNSPECIFIED' | 'UNKNOWN' | 'ENABLED' | 'REMOVED' | undefined
  textLabel?: GoogleAdsSearchads360V0CommonTextLabel | undefined
}
type GoogleAdsSearchads360V0ResourcesLocationView = { resourceName?: string | undefined }
type GoogleAdsSearchads360V0CommonMetrics = {
  absoluteTopImpressionPercentage?: number | undefined
  allConversions?: number | undefined
  allConversionsByConversionDate?: number | undefined
  allConversionsFromClickToCall?: number | undefined
  allConversionsFromDirections?: number | undefined
  allConversionsFromInteractionsRate?: number | undefined
  allConversionsFromInteractionsValuePerInteraction?: number | undefined
  allConversionsFromMenu?: number | undefined
  allConversionsFromOrder?: number | undefined
  allConversionsFromOtherEngagement?: number | undefined
  allConversionsFromStoreVisit?: number | undefined
  allConversionsFromStoreWebsite?: number | undefined
  allConversionsValue?: number | undefined
  allConversionsValueByConversionDate?: number | undefined
  allConversionsValuePerCost?: number | undefined
  averageCost?: number | undefined
  averageCpc?: number | undefined
  averageCpm?: number | undefined
  clicks?: string | undefined
  clientAccountConversions?: number | undefined
  clientAccountConversionsValue?: number | undefined
  clientAccountViewThroughConversions?: string | undefined
  contentBudgetLostImpressionShare?: number | undefined
  contentImpressionShare?: number | undefined
  contentRankLostImpressionShare?: number | undefined
  conversions?: number | undefined
  conversionsByConversionDate?: number | undefined
  conversionsFromInteractionsRate?: number | undefined
  conversionsFromInteractionsValuePerInteraction?: number | undefined
  conversionsValue?: number | undefined
  conversionsValueByConversionDate?: number | undefined
  conversionsValuePerCost?: number | undefined
  costMicros?: string | undefined
  costPerAllConversions?: number | undefined
  costPerConversion?: number | undefined
  costPerCurrentModelAttributedConversion?: number | undefined
  crossDeviceConversions?: number | undefined
  crossDeviceConversionsValue?: number | undefined
  ctr?: number | undefined
  historicalCreativeQualityScore?:
    | 'UNSPECIFIED'
    | 'UNKNOWN'
    | 'BELOW_AVERAGE'
    | 'AVERAGE'
    | 'ABOVE_AVERAGE'
    | undefined
  historicalLandingPageQualityScore?:
    | 'UNSPECIFIED'
    | 'UNKNOWN'
    | 'BELOW_AVERAGE'
    | 'AVERAGE'
    | 'ABOVE_AVERAGE'
    | undefined
  historicalQualityScore?: string | undefined
  historicalSearchPredictedCtr?:
    | 'UNSPECIFIED'
    | 'UNKNOWN'
    | 'BELOW_AVERAGE'
    | 'AVERAGE'
    | 'ABOVE_AVERAGE'
    | undefined
  impressions?: string | undefined
  interactionEventTypes?:
    | ('UNSPECIFIED' | 'UNKNOWN' | 'CLICK' | 'ENGAGEMENT' | 'VIDEO_VIEW' | 'NONE')[]
    | undefined
  interactionRate?: number | undefined
  interactions?: string | undefined
  invalidClickRate?: number | undefined
  invalidClicks?: string | undefined
  mobileFriendlyClicksPercentage?: number | undefined
  searchAbsoluteTopImpressionShare?: number | undefined
  searchBudgetLostAbsoluteTopImpressionShare?: number | undefined
  searchBudgetLostImpressionShare?: number | undefined
  searchBudgetLostTopImpressionShare?: number | undefined
  searchClickShare?: number | undefined
  searchExactMatchImpressionShare?: number | undefined
  searchImpressionShare?: number | undefined
  searchRankLostAbsoluteTopImpressionShare?: number | undefined
  searchRankLostImpressionShare?: number | undefined
  searchRankLostTopImpressionShare?: number | undefined
  searchTopImpressionShare?: number | undefined
  topImpressionPercentage?: number | undefined
  valuePerAllConversions?: number | undefined
  valuePerAllConversionsByConversionDate?: number | undefined
  valuePerConversion?: number | undefined
  valuePerConversionsByConversionDate?: number | undefined
  visits?: number | undefined
}
type GoogleAdsSearchads360V0ResourcesProductGroupView = { resourceName?: string | undefined }
type GoogleAdsSearchads360V0CommonSegments = {
  conversionAction?: string | undefined
  conversionActionCategory?:
    | 'UNSPECIFIED'
    | 'UNKNOWN'
    | 'DEFAULT'
    | 'PAGE_VIEW'
    | 'PURCHASE'
    | 'SIGNUP'
    | 'LEAD'
    | 'DOWNLOAD'
    | 'ADD_TO_CART'
    | 'BEGIN_CHECKOUT'
    | 'SUBSCRIBE_PAID'
    | 'PHONE_CALL_LEAD'
    | 'IMPORTED_LEAD'
    | 'SUBMIT_LEAD_FORM'
    | 'BOOK_APPOINTMENT'
    | 'REQUEST_QUOTE'
    | 'GET_DIRECTIONS'
    | 'OUTBOUND_CLICK'
    | 'CONTACT'
    | 'ENGAGEMENT'
    | 'STORE_VISIT'
    | 'STORE_SALE'
    | 'QUALIFIED_LEAD'
    | 'CONVERTED_LEAD'
    | undefined
  conversionActionName?: string | undefined
  date?: string | undefined
  dayOfWeek?:
    | 'UNSPECIFIED'
    | 'UNKNOWN'
    | 'MONDAY'
    | 'TUESDAY'
    | 'WEDNESDAY'
    | 'THURSDAY'
    | 'FRIDAY'
    | 'SATURDAY'
    | 'SUNDAY'
    | undefined
  device?:
    | 'UNSPECIFIED'
    | 'UNKNOWN'
    | 'MOBILE'
    | 'TABLET'
    | 'DESKTOP'
    | 'CONNECTED_TV'
    | 'OTHER'
    | undefined
  month?: string | undefined
  quarter?: string | undefined
  week?: string | undefined
  year?: number | undefined
}
type GoogleAdsSearchads360V0ResourcesUserList = {
  id?: string | undefined
  name?: string | undefined
  resourceName?: string | undefined
  type?:
    | 'UNSPECIFIED'
    | 'UNKNOWN'
    | 'REMARKETING'
    | 'LOGICAL'
    | 'EXTERNAL_REMARKETING'
    | 'RULE_BASED'
    | 'SIMILAR'
    | 'CRM_BASED'
    | undefined
}
type GoogleAdsSearchads360V0ResourcesWebpageView = { resourceName?: string | undefined }
type GoogleAdsSearchads360V0ServicesSearchAds360Row = {
  adGroup?: GoogleAdsSearchads360V0ResourcesAdGroup | undefined
  adGroupAd?: GoogleAdsSearchads360V0ResourcesAdGroupAd | undefined
  adGroupAdLabel?: GoogleAdsSearchads360V0ResourcesAdGroupAdLabel | undefined
  adGroupAudienceView?: GoogleAdsSearchads360V0ResourcesAdGroupAudienceView | undefined
  adGroupBidModifier?: GoogleAdsSearchads360V0ResourcesAdGroupBidModifier | undefined
  adGroupCriterion?: GoogleAdsSearchads360V0ResourcesAdGroupCriterion | undefined
  adGroupCriterionLabel?: GoogleAdsSearchads360V0ResourcesAdGroupCriterionLabel | undefined
  adGroupLabel?: GoogleAdsSearchads360V0ResourcesAdGroupLabel | undefined
  ageRangeView?: GoogleAdsSearchads360V0ResourcesAgeRangeView | undefined
  biddingStrategy?: GoogleAdsSearchads360V0ResourcesBiddingStrategy | undefined
  campaign?: GoogleAdsSearchads360V0ResourcesCampaign | undefined
  campaignAudienceView?: GoogleAdsSearchads360V0ResourcesCampaignAudienceView | undefined
  campaignBudget?: GoogleAdsSearchads360V0ResourcesCampaignBudget | undefined
  campaignCriterion?: GoogleAdsSearchads360V0ResourcesCampaignCriterion | undefined
  campaignLabel?: GoogleAdsSearchads360V0ResourcesCampaignLabel | undefined
  conversionAction?: GoogleAdsSearchads360V0ResourcesConversionAction | undefined
  customColumns?: GoogleAdsSearchads360V0CommonValue[] | undefined
  customer?: GoogleAdsSearchads360V0ResourcesCustomer | undefined
  customerClient?: GoogleAdsSearchads360V0ResourcesCustomerClient | undefined
  customerManagerLink?: GoogleAdsSearchads360V0ResourcesCustomerManagerLink | undefined
  dynamicSearchAdsSearchTermView?:
    | GoogleAdsSearchads360V0ResourcesDynamicSearchAdsSearchTermView
    | undefined
  genderView?: GoogleAdsSearchads360V0ResourcesGenderView | undefined
  keywordView?: GoogleAdsSearchads360V0ResourcesKeywordView | undefined
  label?: GoogleAdsSearchads360V0ResourcesLabel | undefined
  locationView?: GoogleAdsSearchads360V0ResourcesLocationView | undefined
  metrics?: GoogleAdsSearchads360V0CommonMetrics | undefined
  productGroupView?: GoogleAdsSearchads360V0ResourcesProductGroupView | undefined
  segments?: GoogleAdsSearchads360V0CommonSegments | undefined
  userList?: GoogleAdsSearchads360V0ResourcesUserList | undefined
  webpageView?: GoogleAdsSearchads360V0ResourcesWebpageView | undefined
}
type GoogleAdsSearchads360V0ServicesSearchSearchAds360Response = {
  customColumnHeaders?: GoogleAdsSearchads360V0ServicesCustomColumnHeader[] | undefined
  fieldMask?: string | undefined
  nextPageToken?: string | undefined
  results?: GoogleAdsSearchads360V0ServicesSearchAds360Row[] | undefined
  summaryRow?: GoogleAdsSearchads360V0ServicesSearchAds360Row | undefined
  totalResultsCount?: string | undefined
}
type GoogleAdsSearchads360V0ServicesSearchSearchAds360StreamRequest = {
  batchSize?: number | undefined
  query?: string | undefined
  summaryRowSetting?:
    | 'UNSPECIFIED'
    | 'UNKNOWN'
    | 'NO_SUMMARY_ROW'
    | 'SUMMARY_ROW_WITH_RESULTS'
    | 'SUMMARY_ROW_ONLY'
    | undefined
}
type GoogleAdsSearchads360V0ServicesSearchSearchAds360StreamResponse = {
  customColumnHeaders?: GoogleAdsSearchads360V0ServicesCustomColumnHeader[] | undefined
  fieldMask?: string | undefined
  requestId?: string | undefined
  results?: GoogleAdsSearchads360V0ServicesSearchAds360Row[] | undefined
  summaryRow?: GoogleAdsSearchads360V0ServicesSearchAds360Row | undefined
}
type GoogleAdsSearchads360V0ServicesSearchSearchAds360FieldsRequest = {
  pageSize?: number | undefined
  pageToken?: string | undefined
  query?: string | undefined
}
type GoogleAdsSearchads360V0ResourcesSearchAds360Field = {
  attributeResources?: string[] | undefined
  category?: 'UNSPECIFIED' | 'UNKNOWN' | 'RESOURCE' | 'ATTRIBUTE' | 'SEGMENT' | 'METRIC' | undefined
  dataType?:
    | 'UNSPECIFIED'
    | 'UNKNOWN'
    | 'BOOLEAN'
    | 'DATE'
    | 'DOUBLE'
    | 'ENUM'
    | 'FLOAT'
    | 'INT32'
    | 'INT64'
    | 'MESSAGE'
    | 'RESOURCE_NAME'
    | 'STRING'
    | 'UINT64'
    | undefined
  enumValues?: string[] | undefined
  filterable?: boolean | undefined
  isRepeated?: boolean | undefined
  metrics?: string[] | undefined
  name?: string | undefined
  resourceName?: string | undefined
  segments?: string[] | undefined
  selectable?: boolean | undefined
  selectableWith?: string[] | undefined
  sortable?: boolean | undefined
  typeUrl?: string | undefined
}
type GoogleAdsSearchads360V0ServicesSearchSearchAds360FieldsResponse = {
  nextPageToken?: string | undefined
  results?: GoogleAdsSearchads360V0ResourcesSearchAds360Field[] | undefined
  totalResultsCount?: string | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v0/customers/:customerId/customColumns': {
      $get: {
        input: { param: { customerId: string } } & {
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
        output: GoogleAdsSearchads360V0ServicesListCustomColumnsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v0/customers/:customerId/searchAds360:search': {
      $post: {
        input: { param: { customerId: string } } & {
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
        } & { json: GoogleAdsSearchads360V0ServicesSearchSearchAds360Request }
        output: GoogleAdsSearchads360V0ServicesSearchSearchAds360Response
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v0/customers/:customerId/searchAds360:searchStream': {
      $post: {
        input: { param: { customerId: string } } & {
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
        } & { json: GoogleAdsSearchads360V0ServicesSearchSearchAds360StreamRequest }
        output: GoogleAdsSearchads360V0ServicesSearchSearchAds360StreamResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v0/searchAds360Fields:search': {
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
        } & { json: GoogleAdsSearchads360V0ServicesSearchSearchAds360FieldsRequest }
        output: GoogleAdsSearchads360V0ServicesSearchSearchAds360FieldsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v0/:resourceName': {
      $get: {
        input: { param: { resourceName: string } } & {
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
        output: GoogleAdsSearchads360V0ResourcesSearchAds360Field
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
