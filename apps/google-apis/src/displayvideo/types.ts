type GoogleBytestreamMedia = { resourceName?: string | undefined }
type CmHybridConfig = {
  cmAccountId?: string | undefined
  cmFloodlightConfigId?: string | undefined
  cmFloodlightLinkingAuthorized?: boolean | undefined
  cmSyncableSiteIds?: string[] | undefined
  dv360ToCmCostReportingEnabled?: boolean | undefined
  dv360ToCmDataSharingEnabled?: boolean | undefined
}
type ThirdPartyOnlyConfig = { pixelOrderIdReportingEnabled?: boolean | undefined }
type AdvertiserAdServerConfig = {
  cmHybridConfig?: CmHybridConfig | undefined
  thirdPartyOnlyConfig?: ThirdPartyOnlyConfig | undefined
}
type AdvertiserBillingConfig = { billingProfileId?: string | undefined }
type AdvertiserCreativeConfig = {
  dynamicCreativeEnabled?: boolean | undefined
  iasClientId?: string | undefined
  obaComplianceDisabled?: boolean | undefined
  videoCreativeDataSharingAuthorized?: boolean | undefined
}
type SdfConfig = {
  adminEmail?: string | undefined
  version?:
    | 'SDF_VERSION_UNSPECIFIED'
    | 'SDF_VERSION_3_1'
    | 'SDF_VERSION_4'
    | 'SDF_VERSION_4_1'
    | 'SDF_VERSION_4_2'
    | 'SDF_VERSION_5'
    | 'SDF_VERSION_5_1'
    | 'SDF_VERSION_5_2'
    | 'SDF_VERSION_5_3'
    | 'SDF_VERSION_5_4'
    | 'SDF_VERSION_5_5'
    | undefined
}
type AdvertiserSdfConfig = {
  overridePartnerSdfConfig?: boolean | undefined
  sdfConfig?: SdfConfig | undefined
}
type AdvertiserDataAccessConfig = { sdfConfig?: AdvertiserSdfConfig | undefined }
type AdvertiserGeneralConfig = {
  currencyCode?: string | undefined
  domainUrl?: string | undefined
  timeZone?: string | undefined
}
type IntegrationDetails = { details?: string | undefined; integrationCode?: string | undefined }
type AdvertiserTargetingConfig = { exemptTvFromViewabilityTargeting?: boolean | undefined }
type Advertiser = {
  adServerConfig?: AdvertiserAdServerConfig | undefined
  advertiserId?: string | undefined
  billingConfig?: AdvertiserBillingConfig | undefined
  creativeConfig?: AdvertiserCreativeConfig | undefined
  dataAccessConfig?: AdvertiserDataAccessConfig | undefined
  displayName?: string | undefined
  entityStatus?:
    | 'ENTITY_STATUS_UNSPECIFIED'
    | 'ENTITY_STATUS_ACTIVE'
    | 'ENTITY_STATUS_ARCHIVED'
    | 'ENTITY_STATUS_DRAFT'
    | 'ENTITY_STATUS_PAUSED'
    | 'ENTITY_STATUS_SCHEDULED_FOR_DELETION'
    | undefined
  generalConfig?: AdvertiserGeneralConfig | undefined
  integrationDetails?: IntegrationDetails | undefined
  name?: string | undefined
  partnerId?: string | undefined
  prismaEnabled?: boolean | undefined
  servingConfig?: AdvertiserTargetingConfig | undefined
  updateTime?: string | undefined
}
type ListAdvertisersResponse = {
  advertisers?: Advertiser[] | undefined
  nextPageToken?: string | undefined
}
type Empty = { [x: string]: unknown }
type CreateAssetRequest = { filename?: string | undefined }
type Asset = { content?: string | undefined; mediaId?: string | undefined }
type CreateAssetResponse = { asset?: Asset | undefined }
type Date = { day?: number | undefined; month?: number | undefined; year?: number | undefined }
type DateRange = { endDate?: Date | undefined; startDate?: Date | undefined }
type PrismaCpeCode = {
  prismaClientCode?: string | undefined
  prismaEstimateCode?: string | undefined
  prismaProductCode?: string | undefined
}
type PrismaConfig = {
  prismaCpeCode?: PrismaCpeCode | undefined
  prismaType?:
    | 'PRISMA_TYPE_UNSPECIFIED'
    | 'PRISMA_TYPE_DISPLAY'
    | 'PRISMA_TYPE_SEARCH'
    | 'PRISMA_TYPE_VIDEO'
    | 'PRISMA_TYPE_AUDIO'
    | 'PRISMA_TYPE_SOCIAL'
    | 'PRISMA_TYPE_FEE'
    | undefined
  supplier?: string | undefined
}
type CampaignBudget = {
  budgetAmountMicros?: string | undefined
  budgetId?: string | undefined
  budgetUnit?:
    | 'BUDGET_UNIT_UNSPECIFIED'
    | 'BUDGET_UNIT_CURRENCY'
    | 'BUDGET_UNIT_IMPRESSIONS'
    | undefined
  dateRange?: DateRange | undefined
  displayName?: string | undefined
  externalBudgetId?: string | undefined
  externalBudgetSource?:
    | 'EXTERNAL_BUDGET_SOURCE_UNSPECIFIED'
    | 'EXTERNAL_BUDGET_SOURCE_NONE'
    | 'EXTERNAL_BUDGET_SOURCE_MEDIA_OCEAN'
    | undefined
  invoiceGroupingId?: string | undefined
  prismaConfig?: PrismaConfig | undefined
}
type CampaignFlight = {
  plannedDates?: DateRange | undefined
  plannedSpendAmountMicros?: string | undefined
}
type PerformanceGoal = {
  performanceGoalAmountMicros?: string | undefined
  performanceGoalPercentageMicros?: string | undefined
  performanceGoalString?: string | undefined
  performanceGoalType?:
    | 'PERFORMANCE_GOAL_TYPE_UNSPECIFIED'
    | 'PERFORMANCE_GOAL_TYPE_CPM'
    | 'PERFORMANCE_GOAL_TYPE_CPC'
    | 'PERFORMANCE_GOAL_TYPE_CPA'
    | 'PERFORMANCE_GOAL_TYPE_CTR'
    | 'PERFORMANCE_GOAL_TYPE_VIEWABILITY'
    | 'PERFORMANCE_GOAL_TYPE_CPIAVC'
    | 'PERFORMANCE_GOAL_TYPE_CPE'
    | 'PERFORMANCE_GOAL_TYPE_CLICK_CVR'
    | 'PERFORMANCE_GOAL_TYPE_IMPRESSION_CVR'
    | 'PERFORMANCE_GOAL_TYPE_VCPM'
    | 'PERFORMANCE_GOAL_TYPE_VTR'
    | 'PERFORMANCE_GOAL_TYPE_AUDIO_COMPLETION_RATE'
    | 'PERFORMANCE_GOAL_TYPE_VIDEO_COMPLETION_RATE'
    | 'PERFORMANCE_GOAL_TYPE_OTHER'
    | undefined
}
type CampaignGoal = {
  campaignGoalType?:
    | 'CAMPAIGN_GOAL_TYPE_UNSPECIFIED'
    | 'CAMPAIGN_GOAL_TYPE_APP_INSTALL'
    | 'CAMPAIGN_GOAL_TYPE_BRAND_AWARENESS'
    | 'CAMPAIGN_GOAL_TYPE_OFFLINE_ACTION'
    | 'CAMPAIGN_GOAL_TYPE_ONLINE_ACTION'
    | undefined
  performanceGoal?: PerformanceGoal | undefined
}
type FrequencyCap = {
  maxImpressions?: number | undefined
  maxViews?: number | undefined
  timeUnit?:
    | 'TIME_UNIT_UNSPECIFIED'
    | 'TIME_UNIT_LIFETIME'
    | 'TIME_UNIT_MONTHS'
    | 'TIME_UNIT_WEEKS'
    | 'TIME_UNIT_DAYS'
    | 'TIME_UNIT_HOURS'
    | 'TIME_UNIT_MINUTES'
    | undefined
  timeUnitCount?: number | undefined
  unlimited?: boolean | undefined
}
type Campaign = {
  advertiserId?: string | undefined
  campaignBudgets?: CampaignBudget[] | undefined
  campaignFlight?: CampaignFlight | undefined
  campaignGoal?: CampaignGoal | undefined
  campaignId?: string | undefined
  displayName?: string | undefined
  entityStatus?:
    | 'ENTITY_STATUS_UNSPECIFIED'
    | 'ENTITY_STATUS_ACTIVE'
    | 'ENTITY_STATUS_ARCHIVED'
    | 'ENTITY_STATUS_DRAFT'
    | 'ENTITY_STATUS_PAUSED'
    | 'ENTITY_STATUS_SCHEDULED_FOR_DELETION'
    | undefined
  frequencyCap?: FrequencyCap | undefined
  name?: string | undefined
  updateTime?: string | undefined
}
type ListCampaignsResponse = {
  campaigns?: Campaign[] | undefined
  nextPageToken?: string | undefined
}
type AgeRangeAssignedTargetingOptionDetails = {
  ageRange?:
    | 'AGE_RANGE_UNSPECIFIED'
    | 'AGE_RANGE_18_24'
    | 'AGE_RANGE_25_34'
    | 'AGE_RANGE_35_44'
    | 'AGE_RANGE_45_54'
    | 'AGE_RANGE_55_64'
    | 'AGE_RANGE_65_PLUS'
    | 'AGE_RANGE_UNKNOWN'
    | 'AGE_RANGE_18_20'
    | 'AGE_RANGE_21_24'
    | 'AGE_RANGE_25_29'
    | 'AGE_RANGE_30_34'
    | 'AGE_RANGE_35_39'
    | 'AGE_RANGE_40_44'
    | 'AGE_RANGE_45_49'
    | 'AGE_RANGE_50_54'
    | 'AGE_RANGE_55_59'
    | 'AGE_RANGE_60_64'
    | undefined
}
type AppCategoryAssignedTargetingOptionDetails = {
  displayName?: string | undefined
  negative?: boolean | undefined
  targetingOptionId?: string | undefined
}
type AppAssignedTargetingOptionDetails = {
  appId?: string | undefined
  appPlatform?:
    | 'APP_PLATFORM_UNSPECIFIED'
    | 'APP_PLATFORM_IOS'
    | 'APP_PLATFORM_ANDROID'
    | 'APP_PLATFORM_ROKU'
    | 'APP_PLATFORM_AMAZON_FIRETV'
    | 'APP_PLATFORM_PLAYSTATION'
    | 'APP_PLATFORM_APPLE_TV'
    | 'APP_PLATFORM_XBOX'
    | 'APP_PLATFORM_SAMSUNG_TV'
    | 'APP_PLATFORM_ANDROID_TV'
    | 'APP_PLATFORM_GENERIC_CTV'
    | undefined
  displayName?: string | undefined
  negative?: boolean | undefined
}
type FirstAndThirdPartyAudienceTargetingSetting = {
  firstAndThirdPartyAudienceId?: string | undefined
  recency?:
    | 'RECENCY_NO_LIMIT'
    | 'RECENCY_1_MINUTE'
    | 'RECENCY_5_MINUTES'
    | 'RECENCY_10_MINUTES'
    | 'RECENCY_15_MINUTES'
    | 'RECENCY_30_MINUTES'
    | 'RECENCY_1_HOUR'
    | 'RECENCY_2_HOURS'
    | 'RECENCY_3_HOURS'
    | 'RECENCY_6_HOURS'
    | 'RECENCY_12_HOURS'
    | 'RECENCY_1_DAY'
    | 'RECENCY_2_DAYS'
    | 'RECENCY_3_DAYS'
    | 'RECENCY_5_DAYS'
    | 'RECENCY_7_DAYS'
    | 'RECENCY_10_DAYS'
    | 'RECENCY_14_DAYS'
    | 'RECENCY_15_DAYS'
    | 'RECENCY_21_DAYS'
    | 'RECENCY_28_DAYS'
    | 'RECENCY_30_DAYS'
    | 'RECENCY_40_DAYS'
    | 'RECENCY_45_DAYS'
    | 'RECENCY_60_DAYS'
    | 'RECENCY_90_DAYS'
    | 'RECENCY_120_DAYS'
    | 'RECENCY_180_DAYS'
    | 'RECENCY_270_DAYS'
    | 'RECENCY_365_DAYS'
    | undefined
}
type FirstAndThirdPartyAudienceGroup = {
  settings?: FirstAndThirdPartyAudienceTargetingSetting[] | undefined
}
type GoogleAudienceTargetingSetting = { googleAudienceId?: string | undefined }
type GoogleAudienceGroup = { settings?: GoogleAudienceTargetingSetting[] | undefined }
type CombinedAudienceTargetingSetting = { combinedAudienceId?: string | undefined }
type CombinedAudienceGroup = { settings?: CombinedAudienceTargetingSetting[] | undefined }
type CustomListTargetingSetting = { customListId?: string | undefined }
type CustomListGroup = { settings?: CustomListTargetingSetting[] | undefined }
type AudienceGroupAssignedTargetingOptionDetails = {
  excludedFirstAndThirdPartyAudienceGroup?: FirstAndThirdPartyAudienceGroup | undefined
  excludedGoogleAudienceGroup?: GoogleAudienceGroup | undefined
  includedCombinedAudienceGroup?: CombinedAudienceGroup | undefined
  includedCustomListGroup?: CustomListGroup | undefined
  includedFirstAndThirdPartyAudienceGroups?: FirstAndThirdPartyAudienceGroup[] | undefined
  includedGoogleAudienceGroup?: GoogleAudienceGroup | undefined
}
type AudioContentTypeAssignedTargetingOptionDetails = {
  audioContentType?:
    | 'AUDIO_CONTENT_TYPE_UNSPECIFIED'
    | 'AUDIO_CONTENT_TYPE_UNKNOWN'
    | 'AUDIO_CONTENT_TYPE_MUSIC'
    | 'AUDIO_CONTENT_TYPE_BROADCAST'
    | 'AUDIO_CONTENT_TYPE_PODCAST'
    | undefined
}
type AuthorizedSellerStatusAssignedTargetingOptionDetails = {
  authorizedSellerStatus?:
    | 'AUTHORIZED_SELLER_STATUS_UNSPECIFIED'
    | 'AUTHORIZED_SELLER_STATUS_AUTHORIZED_DIRECT_SELLERS_ONLY'
    | 'AUTHORIZED_SELLER_STATUS_AUTHORIZED_AND_NON_PARTICIPATING_PUBLISHERS'
    | undefined
  targetingOptionId?: string | undefined
}
type BrowserAssignedTargetingOptionDetails = {
  displayName?: string | undefined
  negative?: boolean | undefined
  targetingOptionId?: string | undefined
}
type BusinessChainAssignedTargetingOptionDetails = {
  displayName?: string | undefined
  proximityRadiusAmount?: number | undefined
  proximityRadiusUnit?:
    | 'DISTANCE_UNIT_UNSPECIFIED'
    | 'DISTANCE_UNIT_MILES'
    | 'DISTANCE_UNIT_KILOMETERS'
    | undefined
  targetingOptionId?: string | undefined
}
type CarrierAndIspAssignedTargetingOptionDetails = {
  displayName?: string | undefined
  negative?: boolean | undefined
  targetingOptionId?: string | undefined
}
type CategoryAssignedTargetingOptionDetails = {
  displayName?: string | undefined
  negative?: boolean | undefined
  targetingOptionId?: string | undefined
}
type ChannelAssignedTargetingOptionDetails = {
  channelId?: string | undefined
  negative?: boolean | undefined
}
type ContentDurationAssignedTargetingOptionDetails = {
  contentDuration?:
    | 'CONTENT_DURATION_UNSPECIFIED'
    | 'CONTENT_DURATION_UNKNOWN'
    | 'CONTENT_DURATION_0_TO_1_MIN'
    | 'CONTENT_DURATION_1_TO_5_MIN'
    | 'CONTENT_DURATION_5_TO_15_MIN'
    | 'CONTENT_DURATION_15_TO_30_MIN'
    | 'CONTENT_DURATION_30_TO_60_MIN'
    | 'CONTENT_DURATION_OVER_60_MIN'
    | undefined
  targetingOptionId?: string | undefined
}
type ContentGenreAssignedTargetingOptionDetails = {
  displayName?: string | undefined
  negative?: boolean | undefined
  targetingOptionId?: string | undefined
}
type ContentInstreamPositionAssignedTargetingOptionDetails = {
  adType?: 'AD_TYPE_UNSPECIFIED' | 'AD_TYPE_DISPLAY' | 'AD_TYPE_VIDEO' | 'AD_TYPE_AUDIO' | undefined
  contentInstreamPosition?:
    | 'CONTENT_INSTREAM_POSITION_UNSPECIFIED'
    | 'CONTENT_INSTREAM_POSITION_PRE_ROLL'
    | 'CONTENT_INSTREAM_POSITION_MID_ROLL'
    | 'CONTENT_INSTREAM_POSITION_POST_ROLL'
    | 'CONTENT_INSTREAM_POSITION_UNKNOWN'
    | undefined
}
type ContentOutstreamPositionAssignedTargetingOptionDetails = {
  adType?: 'AD_TYPE_UNSPECIFIED' | 'AD_TYPE_DISPLAY' | 'AD_TYPE_VIDEO' | 'AD_TYPE_AUDIO' | undefined
  contentOutstreamPosition?:
    | 'CONTENT_OUTSTREAM_POSITION_UNSPECIFIED'
    | 'CONTENT_OUTSTREAM_POSITION_UNKNOWN'
    | 'CONTENT_OUTSTREAM_POSITION_IN_ARTICLE'
    | 'CONTENT_OUTSTREAM_POSITION_IN_BANNER'
    | 'CONTENT_OUTSTREAM_POSITION_IN_FEED'
    | 'CONTENT_OUTSTREAM_POSITION_INTERSTITIAL'
    | undefined
}
type ContentStreamTypeAssignedTargetingOptionDetails = {
  contentStreamType?:
    | 'CONTENT_STREAM_TYPE_UNSPECIFIED'
    | 'CONTENT_LIVE_STREAM'
    | 'CONTENT_ON_DEMAND'
    | undefined
  targetingOptionId?: string | undefined
}
type DayAndTimeAssignedTargetingOptionDetails = {
  dayOfWeek?:
    | 'DAY_OF_WEEK_UNSPECIFIED'
    | 'MONDAY'
    | 'TUESDAY'
    | 'WEDNESDAY'
    | 'THURSDAY'
    | 'FRIDAY'
    | 'SATURDAY'
    | 'SUNDAY'
    | undefined
  endHour?: number | undefined
  startHour?: number | undefined
  timeZoneResolution?:
    | 'TIME_ZONE_RESOLUTION_UNSPECIFIED'
    | 'TIME_ZONE_RESOLUTION_END_USER'
    | 'TIME_ZONE_RESOLUTION_ADVERTISER'
    | undefined
}
type DeviceMakeModelAssignedTargetingOptionDetails = {
  displayName?: string | undefined
  negative?: boolean | undefined
  targetingOptionId?: string | undefined
}
type DeviceTypeAssignedTargetingOptionDetails = {
  deviceType?:
    | 'DEVICE_TYPE_UNSPECIFIED'
    | 'DEVICE_TYPE_COMPUTER'
    | 'DEVICE_TYPE_CONNECTED_TV'
    | 'DEVICE_TYPE_SMART_PHONE'
    | 'DEVICE_TYPE_TABLET'
    | undefined
  youtubeAndPartnersBidMultiplier?: number | undefined
}
type DigitalContentLabelAssignedTargetingOptionDetails = {
  excludedContentRatingTier?:
    | 'CONTENT_RATING_TIER_UNSPECIFIED'
    | 'CONTENT_RATING_TIER_UNRATED'
    | 'CONTENT_RATING_TIER_GENERAL'
    | 'CONTENT_RATING_TIER_PARENTAL_GUIDANCE'
    | 'CONTENT_RATING_TIER_TEENS'
    | 'CONTENT_RATING_TIER_MATURE'
    | 'CONTENT_RATING_TIER_FAMILIES'
    | undefined
}
type EnvironmentAssignedTargetingOptionDetails = {
  environment?:
    | 'ENVIRONMENT_UNSPECIFIED'
    | 'ENVIRONMENT_WEB_OPTIMIZED'
    | 'ENVIRONMENT_WEB_NOT_OPTIMIZED'
    | 'ENVIRONMENT_APP'
    | undefined
}
type ExchangeAssignedTargetingOptionDetails = {
  exchange?:
    | 'EXCHANGE_UNSPECIFIED'
    | 'EXCHANGE_GOOGLE_AD_MANAGER'
    | 'EXCHANGE_APPNEXUS'
    | 'EXCHANGE_BRIGHTROLL'
    | 'EXCHANGE_ADFORM'
    | 'EXCHANGE_ADMETA'
    | 'EXCHANGE_ADMIXER'
    | 'EXCHANGE_ADSMOGO'
    | 'EXCHANGE_ADSWIZZ'
    | 'EXCHANGE_BIDSWITCH'
    | 'EXCHANGE_BRIGHTROLL_DISPLAY'
    | 'EXCHANGE_CADREON'
    | 'EXCHANGE_DAILYMOTION'
    | 'EXCHANGE_FIVE'
    | 'EXCHANGE_FLUCT'
    | 'EXCHANGE_FREEWHEEL'
    | 'EXCHANGE_GENIEE'
    | 'EXCHANGE_GUMGUM'
    | 'EXCHANGE_IMOBILE'
    | 'EXCHANGE_IBILLBOARD'
    | 'EXCHANGE_IMPROVE_DIGITAL'
    | 'EXCHANGE_INDEX'
    | 'EXCHANGE_KARGO'
    | 'EXCHANGE_MICROAD'
    | 'EXCHANGE_MOPUB'
    | 'EXCHANGE_NEND'
    | 'EXCHANGE_ONE_BY_AOL_DISPLAY'
    | 'EXCHANGE_ONE_BY_AOL_MOBILE'
    | 'EXCHANGE_ONE_BY_AOL_VIDEO'
    | 'EXCHANGE_OOYALA'
    | 'EXCHANGE_OPENX'
    | 'EXCHANGE_PERMODO'
    | 'EXCHANGE_PLATFORMONE'
    | 'EXCHANGE_PLATFORMID'
    | 'EXCHANGE_PUBMATIC'
    | 'EXCHANGE_PULSEPOINT'
    | 'EXCHANGE_REVENUEMAX'
    | 'EXCHANGE_RUBICON'
    | 'EXCHANGE_SMARTCLIP'
    | 'EXCHANGE_SMARTRTB'
    | 'EXCHANGE_SMARTSTREAMTV'
    | 'EXCHANGE_SOVRN'
    | 'EXCHANGE_SPOTXCHANGE'
    | 'EXCHANGE_STROER'
    | 'EXCHANGE_TEADSTV'
    | 'EXCHANGE_TELARIA'
    | 'EXCHANGE_TVN'
    | 'EXCHANGE_UNITED'
    | 'EXCHANGE_YIELDLAB'
    | 'EXCHANGE_YIELDMO'
    | 'EXCHANGE_UNRULYX'
    | 'EXCHANGE_OPEN8'
    | 'EXCHANGE_TRITON'
    | 'EXCHANGE_TRIPLELIFT'
    | 'EXCHANGE_TABOOLA'
    | 'EXCHANGE_INMOBI'
    | 'EXCHANGE_SMAATO'
    | 'EXCHANGE_AJA'
    | 'EXCHANGE_SUPERSHIP'
    | 'EXCHANGE_NEXSTAR_DIGITAL'
    | 'EXCHANGE_WAZE'
    | 'EXCHANGE_SOUNDCAST'
    | 'EXCHANGE_SHARETHROUGH'
    | 'EXCHANGE_FYBER'
    | 'EXCHANGE_RED_FOR_PUBLISHERS'
    | 'EXCHANGE_MEDIANET'
    | 'EXCHANGE_TAPJOY'
    | 'EXCHANGE_VISTAR'
    | 'EXCHANGE_DAX'
    | 'EXCHANGE_JCD'
    | 'EXCHANGE_PLACE_EXCHANGE'
    | 'EXCHANGE_APPLOVIN'
    | 'EXCHANGE_CONNATIX'
    | 'EXCHANGE_RESET_DIGITAL'
    | 'EXCHANGE_HIVESTACK'
    | undefined
}
type GenderAssignedTargetingOptionDetails = {
  gender?: 'GENDER_UNSPECIFIED' | 'GENDER_MALE' | 'GENDER_FEMALE' | 'GENDER_UNKNOWN' | undefined
}
type GeoRegionAssignedTargetingOptionDetails = {
  displayName?: string | undefined
  geoRegionType?:
    | 'GEO_REGION_TYPE_UNKNOWN'
    | 'GEO_REGION_TYPE_OTHER'
    | 'GEO_REGION_TYPE_COUNTRY'
    | 'GEO_REGION_TYPE_REGION'
    | 'GEO_REGION_TYPE_TERRITORY'
    | 'GEO_REGION_TYPE_PROVINCE'
    | 'GEO_REGION_TYPE_STATE'
    | 'GEO_REGION_TYPE_PREFECTURE'
    | 'GEO_REGION_TYPE_GOVERNORATE'
    | 'GEO_REGION_TYPE_CANTON'
    | 'GEO_REGION_TYPE_UNION_TERRITORY'
    | 'GEO_REGION_TYPE_AUTONOMOUS_COMMUNITY'
    | 'GEO_REGION_TYPE_DMA_REGION'
    | 'GEO_REGION_TYPE_METRO'
    | 'GEO_REGION_TYPE_CONGRESSIONAL_DISTRICT'
    | 'GEO_REGION_TYPE_COUNTY'
    | 'GEO_REGION_TYPE_MUNICIPALITY'
    | 'GEO_REGION_TYPE_CITY'
    | 'GEO_REGION_TYPE_POSTAL_CODE'
    | 'GEO_REGION_TYPE_DEPARTMENT'
    | 'GEO_REGION_TYPE_AIRPORT'
    | 'GEO_REGION_TYPE_TV_REGION'
    | 'GEO_REGION_TYPE_OKRUG'
    | 'GEO_REGION_TYPE_BOROUGH'
    | 'GEO_REGION_TYPE_CITY_REGION'
    | 'GEO_REGION_TYPE_ARRONDISSEMENT'
    | 'GEO_REGION_TYPE_NEIGHBORHOOD'
    | 'GEO_REGION_TYPE_UNIVERSITY'
    | 'GEO_REGION_TYPE_DISTRICT'
    | undefined
  negative?: boolean | undefined
  targetingOptionId?: string | undefined
}
type HouseholdIncomeAssignedTargetingOptionDetails = {
  householdIncome?:
    | 'HOUSEHOLD_INCOME_UNSPECIFIED'
    | 'HOUSEHOLD_INCOME_UNKNOWN'
    | 'HOUSEHOLD_INCOME_LOWER_50_PERCENT'
    | 'HOUSEHOLD_INCOME_TOP_41_TO_50_PERCENT'
    | 'HOUSEHOLD_INCOME_TOP_31_TO_40_PERCENT'
    | 'HOUSEHOLD_INCOME_TOP_21_TO_30_PERCENT'
    | 'HOUSEHOLD_INCOME_TOP_11_TO_20_PERCENT'
    | 'HOUSEHOLD_INCOME_TOP_10_PERCENT'
    | undefined
}
type InventorySourceAssignedTargetingOptionDetails = { inventorySourceId?: string | undefined }
type InventorySourceGroupAssignedTargetingOptionDetails = {
  inventorySourceGroupId?: string | undefined
}
type KeywordAssignedTargetingOptionDetails = {
  keyword?: string | undefined
  negative?: boolean | undefined
}
type LanguageAssignedTargetingOptionDetails = {
  displayName?: string | undefined
  negative?: boolean | undefined
  targetingOptionId?: string | undefined
}
type NativeContentPositionAssignedTargetingOptionDetails = {
  contentPosition?:
    | 'NATIVE_CONTENT_POSITION_UNSPECIFIED'
    | 'NATIVE_CONTENT_POSITION_UNKNOWN'
    | 'NATIVE_CONTENT_POSITION_IN_ARTICLE'
    | 'NATIVE_CONTENT_POSITION_IN_FEED'
    | 'NATIVE_CONTENT_POSITION_PERIPHERAL'
    | 'NATIVE_CONTENT_POSITION_RECOMMENDATION'
    | undefined
}
type NegativeKeywordListAssignedTargetingOptionDetails = {
  negativeKeywordListId?: string | undefined
}
type OmidAssignedTargetingOptionDetails = {
  omid?: 'OMID_UNSPECIFIED' | 'OMID_FOR_MOBILE_DISPLAY_ADS' | undefined
}
type OnScreenPositionAssignedTargetingOptionDetails = {
  adType?: 'AD_TYPE_UNSPECIFIED' | 'AD_TYPE_DISPLAY' | 'AD_TYPE_VIDEO' | 'AD_TYPE_AUDIO' | undefined
  onScreenPosition?:
    | 'ON_SCREEN_POSITION_UNSPECIFIED'
    | 'ON_SCREEN_POSITION_UNKNOWN'
    | 'ON_SCREEN_POSITION_ABOVE_THE_FOLD'
    | 'ON_SCREEN_POSITION_BELOW_THE_FOLD'
    | undefined
  targetingOptionId?: string | undefined
}
type OperatingSystemAssignedTargetingOptionDetails = {
  displayName?: string | undefined
  negative?: boolean | undefined
  targetingOptionId?: string | undefined
}
type ParentalStatusAssignedTargetingOptionDetails = {
  parentalStatus?:
    | 'PARENTAL_STATUS_UNSPECIFIED'
    | 'PARENTAL_STATUS_PARENT'
    | 'PARENTAL_STATUS_NOT_A_PARENT'
    | 'PARENTAL_STATUS_UNKNOWN'
    | undefined
}
type PoiAssignedTargetingOptionDetails = {
  displayName?: string | undefined
  latitude?: number | undefined
  longitude?: number | undefined
  proximityRadiusAmount?: number | undefined
  proximityRadiusUnit?:
    | 'DISTANCE_UNIT_UNSPECIFIED'
    | 'DISTANCE_UNIT_MILES'
    | 'DISTANCE_UNIT_KILOMETERS'
    | undefined
  targetingOptionId?: string | undefined
}
type ProximityLocationListAssignedTargetingOptionDetails = {
  proximityLocationListId?: string | undefined
  proximityRadius?: number | undefined
  proximityRadiusUnit?:
    | 'PROXIMITY_RADIUS_UNIT_UNSPECIFIED'
    | 'PROXIMITY_RADIUS_UNIT_MILES'
    | 'PROXIMITY_RADIUS_UNIT_KILOMETERS'
    | undefined
}
type RegionalLocationListAssignedTargetingOptionDetails = {
  negative?: boolean | undefined
  regionalLocationListId?: string | undefined
}
type SensitiveCategoryAssignedTargetingOptionDetails = {
  excludedSensitiveCategory?:
    | 'SENSITIVE_CATEGORY_UNSPECIFIED'
    | 'SENSITIVE_CATEGORY_ADULT'
    | 'SENSITIVE_CATEGORY_DEROGATORY'
    | 'SENSITIVE_CATEGORY_DOWNLOADS_SHARING'
    | 'SENSITIVE_CATEGORY_WEAPONS'
    | 'SENSITIVE_CATEGORY_GAMBLING'
    | 'SENSITIVE_CATEGORY_VIOLENCE'
    | 'SENSITIVE_CATEGORY_SUGGESTIVE'
    | 'SENSITIVE_CATEGORY_PROFANITY'
    | 'SENSITIVE_CATEGORY_ALCOHOL'
    | 'SENSITIVE_CATEGORY_DRUGS'
    | 'SENSITIVE_CATEGORY_TOBACCO'
    | 'SENSITIVE_CATEGORY_POLITICS'
    | 'SENSITIVE_CATEGORY_RELIGION'
    | 'SENSITIVE_CATEGORY_TRAGEDY'
    | 'SENSITIVE_CATEGORY_TRANSPORTATION_ACCIDENTS'
    | 'SENSITIVE_CATEGORY_SENSITIVE_SOCIAL_ISSUES'
    | 'SENSITIVE_CATEGORY_SHOCKING'
    | 'SENSITIVE_CATEGORY_EMBEDDED_VIDEO'
    | 'SENSITIVE_CATEGORY_LIVE_STREAMING_VIDEO'
    | undefined
}
type SessionPositionAssignedTargetingOptionDetails = {
  sessionPosition?: 'SESSION_POSITION_UNSPECIFIED' | 'SESSION_POSITION_FIRST_IMPRESSION' | undefined
}
type SubExchangeAssignedTargetingOptionDetails = { targetingOptionId?: string | undefined }
type Adloox = {
  excludedAdlooxCategories?:
    | (
        | 'ADLOOX_UNSPECIFIED'
        | 'ADULT_CONTENT_HARD'
        | 'ADULT_CONTENT_SOFT'
        | 'ILLEGAL_CONTENT'
        | 'BORDERLINE_CONTENT'
        | 'DISCRIMINATORY_CONTENT'
        | 'VIOLENT_CONTENT_WEAPONS'
        | 'LOW_VIEWABILITY_DOMAINS'
        | 'FRAUD'
      )[]
    | undefined
}
type DoubleVerifyAppStarRating = {
  avoidInsufficientStarRating?: boolean | undefined
  avoidedStarRating?:
    | 'APP_STAR_RATE_UNSPECIFIED'
    | 'APP_STAR_RATE_1_POINT_5_LESS'
    | 'APP_STAR_RATE_2_LESS'
    | 'APP_STAR_RATE_2_POINT_5_LESS'
    | 'APP_STAR_RATE_3_LESS'
    | 'APP_STAR_RATE_3_POINT_5_LESS'
    | 'APP_STAR_RATE_4_LESS'
    | 'APP_STAR_RATE_4_POINT_5_LESS'
    | undefined
}
type DoubleVerifyBrandSafetyCategories = {
  avoidUnknownBrandSafetyCategory?: boolean | undefined
  avoidedHighSeverityCategories?:
    | (
        | 'HIGHER_SEVERITY_UNSPECIFIED'
        | 'ADULT_CONTENT_PORNOGRAPHY'
        | 'COPYRIGHT_INFRINGEMENT'
        | 'SUBSTANCE_ABUSE'
        | 'GRAPHIC_VIOLENCE_WEAPONS'
        | 'HATE_PROFANITY'
        | 'CRIMINAL_SKILLS'
        | 'NUISANCE_INCENTIVIZED_MALWARE_CLUTTER'
      )[]
    | undefined
  avoidedMediumSeverityCategories?:
    | (
        | 'MEDIUM_SEVERITY_UNSPECIFIED'
        | 'AD_SERVERS'
        | 'ADULT_CONTENT_SWIMSUIT'
        | 'ALTERNATIVE_LIFESTYLES'
        | 'CELEBRITY_GOSSIP'
        | 'GAMBLING'
        | 'OCCULT'
        | 'SEX_EDUCATION'
        | 'DISASTER_AVIATION'
        | 'DISASTER_MAN_MADE'
        | 'DISASTER_NATURAL'
        | 'DISASTER_TERRORIST_EVENTS'
        | 'DISASTER_VEHICLE'
        | 'ALCOHOL'
        | 'SMOKING'
        | 'NEGATIVE_NEWS_FINANCIAL'
        | 'NON_ENGLISH'
        | 'PARKING_PAGE'
        | 'UNMODERATED_UGC'
        | 'INFLAMMATORY_POLITICS_AND_NEWS'
        | 'NEGATIVE_NEWS_PHARMACEUTICAL'
      )[]
    | undefined
}
type DoubleVerifyDisplayViewability = {
  iab?:
    | 'IAB_VIEWED_RATE_UNSPECIFIED'
    | 'IAB_VIEWED_RATE_80_PERCENT_HIGHER'
    | 'IAB_VIEWED_RATE_75_PERCENT_HIGHER'
    | 'IAB_VIEWED_RATE_70_PERCENT_HIGHER'
    | 'IAB_VIEWED_RATE_65_PERCENT_HIGHER'
    | 'IAB_VIEWED_RATE_60_PERCENT_HIGHER'
    | 'IAB_VIEWED_RATE_55_PERCENT_HIGHER'
    | 'IAB_VIEWED_RATE_50_PERCENT_HIGHER'
    | 'IAB_VIEWED_RATE_40_PERCENT_HIGHER'
    | 'IAB_VIEWED_RATE_30_PERCENT_HIGHER'
    | undefined
  viewableDuring?:
    | 'AVERAGE_VIEW_DURATION_UNSPECIFIED'
    | 'AVERAGE_VIEW_DURATION_5_SEC'
    | 'AVERAGE_VIEW_DURATION_10_SEC'
    | 'AVERAGE_VIEW_DURATION_15_SEC'
    | undefined
}
type DoubleVerifyFraudInvalidTraffic = {
  avoidInsufficientOption?: boolean | undefined
  avoidedFraudOption?:
    | 'FRAUD_UNSPECIFIED'
    | 'AD_IMPRESSION_FRAUD_100'
    | 'AD_IMPRESSION_FRAUD_50'
    | 'AD_IMPRESSION_FRAUD_25'
    | 'AD_IMPRESSION_FRAUD_10'
    | 'AD_IMPRESSION_FRAUD_8'
    | 'AD_IMPRESSION_FRAUD_6'
    | 'AD_IMPRESSION_FRAUD_4'
    | 'AD_IMPRESSION_FRAUD_2'
    | undefined
}
type DoubleVerifyVideoViewability = {
  playerImpressionRate?:
    | 'PLAYER_SIZE_400X300_UNSPECIFIED'
    | 'PLAYER_SIZE_400X300_95'
    | 'PLAYER_SIZE_400X300_70'
    | 'PLAYER_SIZE_400X300_25'
    | 'PLAYER_SIZE_400X300_5'
    | undefined
  videoIab?:
    | 'VIDEO_IAB_UNSPECIFIED'
    | 'IAB_VIEWABILITY_80_PERCENT_HIGHER'
    | 'IAB_VIEWABILITY_75_PERCENT_HIGHER'
    | 'IAB_VIEWABILITY_70_PERCENT_HIGHER'
    | 'IAB_VIEWABILITY_65_PERCENT_HIHGER'
    | 'IAB_VIEWABILITY_60_PERCENT_HIGHER'
    | 'IAB_VIEWABILITY_55_PERCENT_HIHGER'
    | 'IAB_VIEWABILITY_50_PERCENT_HIGHER'
    | 'IAB_VIEWABILITY_40_PERCENT_HIHGER'
    | 'IAB_VIEWABILITY_30_PERCENT_HIHGER'
    | undefined
  videoViewableRate?:
    | 'VIDEO_VIEWABLE_RATE_UNSPECIFIED'
    | 'VIEWED_PERFORMANCE_40_PERCENT_HIGHER'
    | 'VIEWED_PERFORMANCE_35_PERCENT_HIGHER'
    | 'VIEWED_PERFORMANCE_30_PERCENT_HIGHER'
    | 'VIEWED_PERFORMANCE_25_PERCENT_HIGHER'
    | 'VIEWED_PERFORMANCE_20_PERCENT_HIGHER'
    | 'VIEWED_PERFORMANCE_10_PERCENT_HIGHER'
    | undefined
}
type DoubleVerify = {
  appStarRating?: DoubleVerifyAppStarRating | undefined
  avoidedAgeRatings?:
    | (
        | 'AGE_RATING_UNSPECIFIED'
        | 'APP_AGE_RATE_UNKNOWN'
        | 'APP_AGE_RATE_4_PLUS'
        | 'APP_AGE_RATE_9_PLUS'
        | 'APP_AGE_RATE_12_PLUS'
        | 'APP_AGE_RATE_17_PLUS'
        | 'APP_AGE_RATE_18_PLUS'
      )[]
    | undefined
  brandSafetyCategories?: DoubleVerifyBrandSafetyCategories | undefined
  customSegmentId?: string | undefined
  displayViewability?: DoubleVerifyDisplayViewability | undefined
  fraudInvalidTraffic?: DoubleVerifyFraudInvalidTraffic | undefined
  videoViewability?: DoubleVerifyVideoViewability | undefined
}
type IntegralAdScience = {
  customSegmentId?: string[] | undefined
  displayViewability?:
    | 'PERFORMANCE_VIEWABILITY_UNSPECIFIED'
    | 'PERFORMANCE_VIEWABILITY_40'
    | 'PERFORMANCE_VIEWABILITY_50'
    | 'PERFORMANCE_VIEWABILITY_60'
    | 'PERFORMANCE_VIEWABILITY_70'
    | undefined
  excludeUnrateable?: boolean | undefined
  excludedAdFraudRisk?:
    | 'SUSPICIOUS_ACTIVITY_UNSPECIFIED'
    | 'SUSPICIOUS_ACTIVITY_HR'
    | 'SUSPICIOUS_ACTIVITY_HMR'
    | undefined
  excludedAdultRisk?: 'ADULT_UNSPECIFIED' | 'ADULT_HR' | 'ADULT_HMR' | undefined
  excludedAlcoholRisk?: 'ALCOHOL_UNSPECIFIED' | 'ALCOHOL_HR' | 'ALCOHOL_HMR' | undefined
  excludedDrugsRisk?: 'DRUGS_UNSPECIFIED' | 'DRUGS_HR' | 'DRUGS_HMR' | undefined
  excludedGamblingRisk?: 'GAMBLING_UNSPECIFIED' | 'GAMBLING_HR' | 'GAMBLING_HMR' | undefined
  excludedHateSpeechRisk?:
    | 'HATE_SPEECH_UNSPECIFIED'
    | 'HATE_SPEECH_HR'
    | 'HATE_SPEECH_HMR'
    | undefined
  excludedIllegalDownloadsRisk?:
    | 'ILLEGAL_DOWNLOADS_UNSPECIFIED'
    | 'ILLEGAL_DOWNLOADS_HR'
    | 'ILLEGAL_DOWNLOADS_HMR'
    | undefined
  excludedOffensiveLanguageRisk?:
    | 'OFFENSIVE_LANGUAGE_UNSPECIFIED'
    | 'OFFENSIVE_LANGUAGE_HR'
    | 'OFFENSIVE_LANGUAGE_HMR'
    | undefined
  excludedViolenceRisk?: 'VIOLENCE_UNSPECIFIED' | 'VIOLENCE_HR' | 'VIOLENCE_HMR' | undefined
  traqScoreOption?:
    | 'TRAQ_UNSPECIFIED'
    | 'TRAQ_250'
    | 'TRAQ_500'
    | 'TRAQ_600'
    | 'TRAQ_700'
    | 'TRAQ_750'
    | 'TRAQ_875'
    | 'TRAQ_1000'
    | undefined
  videoViewability?:
    | 'VIDEO_VIEWABILITY_UNSPECIFIED'
    | 'VIDEO_VIEWABILITY_40'
    | 'VIDEO_VIEWABILITY_50'
    | 'VIDEO_VIEWABILITY_60'
    | 'VIDEO_VIEWABILITY_70'
    | undefined
}
type ThirdPartyVerifierAssignedTargetingOptionDetails = {
  adloox?: Adloox | undefined
  doubleVerify?: DoubleVerify | undefined
  integralAdScience?: IntegralAdScience | undefined
}
type UrlAssignedTargetingOptionDetails = {
  negative?: boolean | undefined
  url?: string | undefined
}
type UserRewardedContentAssignedTargetingOptionDetails = {
  targetingOptionId?: string | undefined
  userRewardedContent?:
    | 'USER_REWARDED_CONTENT_UNSPECIFIED'
    | 'USER_REWARDED_CONTENT_USER_REWARDED'
    | 'USER_REWARDED_CONTENT_NOT_USER_REWARDED'
    | undefined
}
type VideoPlayerSizeAssignedTargetingOptionDetails = {
  videoPlayerSize?:
    | 'VIDEO_PLAYER_SIZE_UNSPECIFIED'
    | 'VIDEO_PLAYER_SIZE_SMALL'
    | 'VIDEO_PLAYER_SIZE_LARGE'
    | 'VIDEO_PLAYER_SIZE_HD'
    | 'VIDEO_PLAYER_SIZE_UNKNOWN'
    | undefined
}
type ViewabilityAssignedTargetingOptionDetails = {
  viewability?:
    | 'VIEWABILITY_UNSPECIFIED'
    | 'VIEWABILITY_10_PERCENT_OR_MORE'
    | 'VIEWABILITY_20_PERCENT_OR_MORE'
    | 'VIEWABILITY_30_PERCENT_OR_MORE'
    | 'VIEWABILITY_40_PERCENT_OR_MORE'
    | 'VIEWABILITY_50_PERCENT_OR_MORE'
    | 'VIEWABILITY_60_PERCENT_OR_MORE'
    | 'VIEWABILITY_70_PERCENT_OR_MORE'
    | 'VIEWABILITY_80_PERCENT_OR_MORE'
    | 'VIEWABILITY_90_PERCENT_OR_MORE'
    | undefined
}
type YoutubeChannelAssignedTargetingOptionDetails = {
  channelId?: string | undefined
  negative?: boolean | undefined
}
type YoutubeVideoAssignedTargetingOptionDetails = {
  negative?: boolean | undefined
  videoId?: string | undefined
}
type AssignedTargetingOption = {
  ageRangeDetails?: AgeRangeAssignedTargetingOptionDetails | undefined
  appCategoryDetails?: AppCategoryAssignedTargetingOptionDetails | undefined
  appDetails?: AppAssignedTargetingOptionDetails | undefined
  assignedTargetingOptionId?: string | undefined
  assignedTargetingOptionIdAlias?: string | undefined
  audienceGroupDetails?: AudienceGroupAssignedTargetingOptionDetails | undefined
  audioContentTypeDetails?: AudioContentTypeAssignedTargetingOptionDetails | undefined
  authorizedSellerStatusDetails?: AuthorizedSellerStatusAssignedTargetingOptionDetails | undefined
  browserDetails?: BrowserAssignedTargetingOptionDetails | undefined
  businessChainDetails?: BusinessChainAssignedTargetingOptionDetails | undefined
  carrierAndIspDetails?: CarrierAndIspAssignedTargetingOptionDetails | undefined
  categoryDetails?: CategoryAssignedTargetingOptionDetails | undefined
  channelDetails?: ChannelAssignedTargetingOptionDetails | undefined
  contentDurationDetails?: ContentDurationAssignedTargetingOptionDetails | undefined
  contentGenreDetails?: ContentGenreAssignedTargetingOptionDetails | undefined
  contentInstreamPositionDetails?: ContentInstreamPositionAssignedTargetingOptionDetails | undefined
  contentOutstreamPositionDetails?:
    | ContentOutstreamPositionAssignedTargetingOptionDetails
    | undefined
  contentStreamTypeDetails?: ContentStreamTypeAssignedTargetingOptionDetails | undefined
  dayAndTimeDetails?: DayAndTimeAssignedTargetingOptionDetails | undefined
  deviceMakeModelDetails?: DeviceMakeModelAssignedTargetingOptionDetails | undefined
  deviceTypeDetails?: DeviceTypeAssignedTargetingOptionDetails | undefined
  digitalContentLabelExclusionDetails?:
    | DigitalContentLabelAssignedTargetingOptionDetails
    | undefined
  environmentDetails?: EnvironmentAssignedTargetingOptionDetails | undefined
  exchangeDetails?: ExchangeAssignedTargetingOptionDetails | undefined
  genderDetails?: GenderAssignedTargetingOptionDetails | undefined
  geoRegionDetails?: GeoRegionAssignedTargetingOptionDetails | undefined
  householdIncomeDetails?: HouseholdIncomeAssignedTargetingOptionDetails | undefined
  inheritance?:
    | 'INHERITANCE_UNSPECIFIED'
    | 'NOT_INHERITED'
    | 'INHERITED_FROM_PARTNER'
    | 'INHERITED_FROM_ADVERTISER'
    | undefined
  inventorySourceDetails?: InventorySourceAssignedTargetingOptionDetails | undefined
  inventorySourceGroupDetails?: InventorySourceGroupAssignedTargetingOptionDetails | undefined
  keywordDetails?: KeywordAssignedTargetingOptionDetails | undefined
  languageDetails?: LanguageAssignedTargetingOptionDetails | undefined
  name?: string | undefined
  nativeContentPositionDetails?: NativeContentPositionAssignedTargetingOptionDetails | undefined
  negativeKeywordListDetails?: NegativeKeywordListAssignedTargetingOptionDetails | undefined
  omidDetails?: OmidAssignedTargetingOptionDetails | undefined
  onScreenPositionDetails?: OnScreenPositionAssignedTargetingOptionDetails | undefined
  operatingSystemDetails?: OperatingSystemAssignedTargetingOptionDetails | undefined
  parentalStatusDetails?: ParentalStatusAssignedTargetingOptionDetails | undefined
  poiDetails?: PoiAssignedTargetingOptionDetails | undefined
  proximityLocationListDetails?: ProximityLocationListAssignedTargetingOptionDetails | undefined
  regionalLocationListDetails?: RegionalLocationListAssignedTargetingOptionDetails | undefined
  sensitiveCategoryExclusionDetails?: SensitiveCategoryAssignedTargetingOptionDetails | undefined
  sessionPositionDetails?: SessionPositionAssignedTargetingOptionDetails | undefined
  subExchangeDetails?: SubExchangeAssignedTargetingOptionDetails | undefined
  targetingType?:
    | 'TARGETING_TYPE_UNSPECIFIED'
    | 'TARGETING_TYPE_CHANNEL'
    | 'TARGETING_TYPE_APP_CATEGORY'
    | 'TARGETING_TYPE_APP'
    | 'TARGETING_TYPE_URL'
    | 'TARGETING_TYPE_DAY_AND_TIME'
    | 'TARGETING_TYPE_AGE_RANGE'
    | 'TARGETING_TYPE_REGIONAL_LOCATION_LIST'
    | 'TARGETING_TYPE_PROXIMITY_LOCATION_LIST'
    | 'TARGETING_TYPE_GENDER'
    | 'TARGETING_TYPE_VIDEO_PLAYER_SIZE'
    | 'TARGETING_TYPE_USER_REWARDED_CONTENT'
    | 'TARGETING_TYPE_PARENTAL_STATUS'
    | 'TARGETING_TYPE_CONTENT_INSTREAM_POSITION'
    | 'TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION'
    | 'TARGETING_TYPE_DEVICE_TYPE'
    | 'TARGETING_TYPE_AUDIENCE_GROUP'
    | 'TARGETING_TYPE_BROWSER'
    | 'TARGETING_TYPE_HOUSEHOLD_INCOME'
    | 'TARGETING_TYPE_ON_SCREEN_POSITION'
    | 'TARGETING_TYPE_THIRD_PARTY_VERIFIER'
    | 'TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION'
    | 'TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION'
    | 'TARGETING_TYPE_ENVIRONMENT'
    | 'TARGETING_TYPE_CARRIER_AND_ISP'
    | 'TARGETING_TYPE_OPERATING_SYSTEM'
    | 'TARGETING_TYPE_DEVICE_MAKE_MODEL'
    | 'TARGETING_TYPE_KEYWORD'
    | 'TARGETING_TYPE_NEGATIVE_KEYWORD_LIST'
    | 'TARGETING_TYPE_VIEWABILITY'
    | 'TARGETING_TYPE_CATEGORY'
    | 'TARGETING_TYPE_INVENTORY_SOURCE'
    | 'TARGETING_TYPE_LANGUAGE'
    | 'TARGETING_TYPE_AUTHORIZED_SELLER_STATUS'
    | 'TARGETING_TYPE_GEO_REGION'
    | 'TARGETING_TYPE_INVENTORY_SOURCE_GROUP'
    | 'TARGETING_TYPE_EXCHANGE'
    | 'TARGETING_TYPE_SUB_EXCHANGE'
    | 'TARGETING_TYPE_POI'
    | 'TARGETING_TYPE_BUSINESS_CHAIN'
    | 'TARGETING_TYPE_CONTENT_DURATION'
    | 'TARGETING_TYPE_CONTENT_STREAM_TYPE'
    | 'TARGETING_TYPE_NATIVE_CONTENT_POSITION'
    | 'TARGETING_TYPE_OMID'
    | 'TARGETING_TYPE_AUDIO_CONTENT_TYPE'
    | 'TARGETING_TYPE_CONTENT_GENRE'
    | 'TARGETING_TYPE_YOUTUBE_VIDEO'
    | 'TARGETING_TYPE_YOUTUBE_CHANNEL'
    | 'TARGETING_TYPE_SESSION_POSITION'
    | undefined
  thirdPartyVerifierDetails?: ThirdPartyVerifierAssignedTargetingOptionDetails | undefined
  urlDetails?: UrlAssignedTargetingOptionDetails | undefined
  userRewardedContentDetails?: UserRewardedContentAssignedTargetingOptionDetails | undefined
  videoPlayerSizeDetails?: VideoPlayerSizeAssignedTargetingOptionDetails | undefined
  viewabilityDetails?: ViewabilityAssignedTargetingOptionDetails | undefined
  youtubeChannelDetails?: YoutubeChannelAssignedTargetingOptionDetails | undefined
  youtubeVideoDetails?: YoutubeVideoAssignedTargetingOptionDetails | undefined
}
type ListCampaignAssignedTargetingOptionsResponse = {
  assignedTargetingOptions?: AssignedTargetingOption[] | undefined
  nextPageToken?: string | undefined
}
type BulkListCampaignAssignedTargetingOptionsResponse = {
  assignedTargetingOptions?: AssignedTargetingOption[] | undefined
  nextPageToken?: string | undefined
}
type Channel = {
  advertiserId?: string | undefined
  channelId?: string | undefined
  displayName?: string | undefined
  name?: string | undefined
  negativelyTargetedLineItemCount?: string | undefined
  partnerId?: string | undefined
  positivelyTargetedLineItemCount?: string | undefined
}
type ListChannelsResponse = { channels?: Channel[] | undefined; nextPageToken?: string | undefined }
type Site = { name?: string | undefined; urlOrAppId?: string | undefined }
type ListSitesResponse = { nextPageToken?: string | undefined; sites?: Site[] | undefined }
type BulkEditSitesRequest = {
  advertiserId?: string | undefined
  createdSites?: Site[] | undefined
  deletedSites?: string[] | undefined
  partnerId?: string | undefined
}
type BulkEditSitesResponse = { sites?: Site[] | undefined }
type ReplaceSitesRequest = {
  advertiserId?: string | undefined
  newSites?: Site[] | undefined
  partnerId?: string | undefined
}
type ReplaceSitesResponse = { sites?: Site[] | undefined }
type Dimensions = { heightPixels?: number | undefined; widthPixels?: number | undefined }
type AssetAssociation = {
  asset?: Asset | undefined
  role?:
    | 'ASSET_ROLE_UNSPECIFIED'
    | 'ASSET_ROLE_MAIN'
    | 'ASSET_ROLE_BACKUP'
    | 'ASSET_ROLE_POLITE_LOAD'
    | 'ASSET_ROLE_HEADLINE'
    | 'ASSET_ROLE_LONG_HEADLINE'
    | 'ASSET_ROLE_BODY'
    | 'ASSET_ROLE_LONG_BODY'
    | 'ASSET_ROLE_CAPTION_URL'
    | 'ASSET_ROLE_CALL_TO_ACTION'
    | 'ASSET_ROLE_ADVERTISER_NAME'
    | 'ASSET_ROLE_PRICE'
    | 'ASSET_ROLE_ANDROID_APP_ID'
    | 'ASSET_ROLE_IOS_APP_ID'
    | 'ASSET_ROLE_RATING'
    | 'ASSET_ROLE_ICON'
    | 'ASSET_ROLE_COVER_IMAGE'
    | undefined
}
type CmTrackingAd = {
  cmAdId?: string | undefined
  cmCreativeId?: string | undefined
  cmPlacementId?: string | undefined
}
type CounterEvent = { name?: string | undefined; reportingName?: string | undefined }
type ExitEvent = {
  name?: string | undefined
  reportingName?: string | undefined
  type?:
    | 'EXIT_EVENT_TYPE_UNSPECIFIED'
    | 'EXIT_EVENT_TYPE_DEFAULT'
    | 'EXIT_EVENT_TYPE_BACKUP'
    | undefined
  url?: string | undefined
}
type ObaIcon = {
  clickTrackingUrl?: string | undefined
  dimensions?: Dimensions | undefined
  landingPageUrl?: string | undefined
  position?:
    | 'OBA_ICON_POSITION_UNSPECIFIED'
    | 'OBA_ICON_POSITION_UPPER_RIGHT'
    | 'OBA_ICON_POSITION_UPPER_LEFT'
    | 'OBA_ICON_POSITION_LOWER_RIGHT'
    | 'OBA_ICON_POSITION_LOWER_LEFT'
    | undefined
  program?: string | undefined
  resourceMimeType?: string | undefined
  resourceUrl?: string | undefined
  viewTrackingUrl?: string | undefined
}
type AudioVideoOffset = { percentage?: string | undefined; seconds?: string | undefined }
type ExchangeReviewStatus = {
  exchange?:
    | 'EXCHANGE_UNSPECIFIED'
    | 'EXCHANGE_GOOGLE_AD_MANAGER'
    | 'EXCHANGE_APPNEXUS'
    | 'EXCHANGE_BRIGHTROLL'
    | 'EXCHANGE_ADFORM'
    | 'EXCHANGE_ADMETA'
    | 'EXCHANGE_ADMIXER'
    | 'EXCHANGE_ADSMOGO'
    | 'EXCHANGE_ADSWIZZ'
    | 'EXCHANGE_BIDSWITCH'
    | 'EXCHANGE_BRIGHTROLL_DISPLAY'
    | 'EXCHANGE_CADREON'
    | 'EXCHANGE_DAILYMOTION'
    | 'EXCHANGE_FIVE'
    | 'EXCHANGE_FLUCT'
    | 'EXCHANGE_FREEWHEEL'
    | 'EXCHANGE_GENIEE'
    | 'EXCHANGE_GUMGUM'
    | 'EXCHANGE_IMOBILE'
    | 'EXCHANGE_IBILLBOARD'
    | 'EXCHANGE_IMPROVE_DIGITAL'
    | 'EXCHANGE_INDEX'
    | 'EXCHANGE_KARGO'
    | 'EXCHANGE_MICROAD'
    | 'EXCHANGE_MOPUB'
    | 'EXCHANGE_NEND'
    | 'EXCHANGE_ONE_BY_AOL_DISPLAY'
    | 'EXCHANGE_ONE_BY_AOL_MOBILE'
    | 'EXCHANGE_ONE_BY_AOL_VIDEO'
    | 'EXCHANGE_OOYALA'
    | 'EXCHANGE_OPENX'
    | 'EXCHANGE_PERMODO'
    | 'EXCHANGE_PLATFORMONE'
    | 'EXCHANGE_PLATFORMID'
    | 'EXCHANGE_PUBMATIC'
    | 'EXCHANGE_PULSEPOINT'
    | 'EXCHANGE_REVENUEMAX'
    | 'EXCHANGE_RUBICON'
    | 'EXCHANGE_SMARTCLIP'
    | 'EXCHANGE_SMARTRTB'
    | 'EXCHANGE_SMARTSTREAMTV'
    | 'EXCHANGE_SOVRN'
    | 'EXCHANGE_SPOTXCHANGE'
    | 'EXCHANGE_STROER'
    | 'EXCHANGE_TEADSTV'
    | 'EXCHANGE_TELARIA'
    | 'EXCHANGE_TVN'
    | 'EXCHANGE_UNITED'
    | 'EXCHANGE_YIELDLAB'
    | 'EXCHANGE_YIELDMO'
    | 'EXCHANGE_UNRULYX'
    | 'EXCHANGE_OPEN8'
    | 'EXCHANGE_TRITON'
    | 'EXCHANGE_TRIPLELIFT'
    | 'EXCHANGE_TABOOLA'
    | 'EXCHANGE_INMOBI'
    | 'EXCHANGE_SMAATO'
    | 'EXCHANGE_AJA'
    | 'EXCHANGE_SUPERSHIP'
    | 'EXCHANGE_NEXSTAR_DIGITAL'
    | 'EXCHANGE_WAZE'
    | 'EXCHANGE_SOUNDCAST'
    | 'EXCHANGE_SHARETHROUGH'
    | 'EXCHANGE_FYBER'
    | 'EXCHANGE_RED_FOR_PUBLISHERS'
    | 'EXCHANGE_MEDIANET'
    | 'EXCHANGE_TAPJOY'
    | 'EXCHANGE_VISTAR'
    | 'EXCHANGE_DAX'
    | 'EXCHANGE_JCD'
    | 'EXCHANGE_PLACE_EXCHANGE'
    | 'EXCHANGE_APPLOVIN'
    | 'EXCHANGE_CONNATIX'
    | 'EXCHANGE_RESET_DIGITAL'
    | 'EXCHANGE_HIVESTACK'
    | undefined
  status?:
    | 'REVIEW_STATUS_UNSPECIFIED'
    | 'REVIEW_STATUS_APPROVED'
    | 'REVIEW_STATUS_REJECTED'
    | 'REVIEW_STATUS_PENDING'
    | undefined
}
type PublisherReviewStatus = {
  publisherName?: string | undefined
  status?:
    | 'REVIEW_STATUS_UNSPECIFIED'
    | 'REVIEW_STATUS_APPROVED'
    | 'REVIEW_STATUS_REJECTED'
    | 'REVIEW_STATUS_PENDING'
    | undefined
}
type ReviewStatusInfo = {
  approvalStatus?:
    | 'APPROVAL_STATUS_UNSPECIFIED'
    | 'APPROVAL_STATUS_PENDING_NOT_SERVABLE'
    | 'APPROVAL_STATUS_PENDING_SERVABLE'
    | 'APPROVAL_STATUS_APPROVED_SERVABLE'
    | 'APPROVAL_STATUS_REJECTED_NOT_SERVABLE'
    | undefined
  contentAndPolicyReviewStatus?:
    | 'REVIEW_STATUS_UNSPECIFIED'
    | 'REVIEW_STATUS_APPROVED'
    | 'REVIEW_STATUS_REJECTED'
    | 'REVIEW_STATUS_PENDING'
    | undefined
  creativeAndLandingPageReviewStatus?:
    | 'REVIEW_STATUS_UNSPECIFIED'
    | 'REVIEW_STATUS_APPROVED'
    | 'REVIEW_STATUS_REJECTED'
    | 'REVIEW_STATUS_PENDING'
    | undefined
  exchangeReviewStatuses?: ExchangeReviewStatus[] | undefined
  publisherReviewStatuses?: PublisherReviewStatus[] | undefined
}
type ThirdPartyUrl = {
  type?:
    | 'THIRD_PARTY_URL_TYPE_UNSPECIFIED'
    | 'THIRD_PARTY_URL_TYPE_IMPRESSION'
    | 'THIRD_PARTY_URL_TYPE_CLICK_TRACKING'
    | 'THIRD_PARTY_URL_TYPE_AUDIO_VIDEO_START'
    | 'THIRD_PARTY_URL_TYPE_AUDIO_VIDEO_FIRST_QUARTILE'
    | 'THIRD_PARTY_URL_TYPE_AUDIO_VIDEO_MIDPOINT'
    | 'THIRD_PARTY_URL_TYPE_AUDIO_VIDEO_THIRD_QUARTILE'
    | 'THIRD_PARTY_URL_TYPE_AUDIO_VIDEO_COMPLETE'
    | 'THIRD_PARTY_URL_TYPE_AUDIO_VIDEO_MUTE'
    | 'THIRD_PARTY_URL_TYPE_AUDIO_VIDEO_PAUSE'
    | 'THIRD_PARTY_URL_TYPE_AUDIO_VIDEO_REWIND'
    | 'THIRD_PARTY_URL_TYPE_AUDIO_VIDEO_FULLSCREEN'
    | 'THIRD_PARTY_URL_TYPE_AUDIO_VIDEO_STOP'
    | 'THIRD_PARTY_URL_TYPE_AUDIO_VIDEO_CUSTOM'
    | 'THIRD_PARTY_URL_TYPE_AUDIO_VIDEO_SKIP'
    | 'THIRD_PARTY_URL_TYPE_AUDIO_VIDEO_PROGRESS'
    | undefined
  url?: string | undefined
}
type TimerEvent = { name?: string | undefined; reportingName?: string | undefined }
type Transcode = {
  audioBitRateKbps?: string | undefined
  audioSampleRateHz?: string | undefined
  bitRateKbps?: string | undefined
  dimensions?: Dimensions | undefined
  fileSizeBytes?: string | undefined
  frameRate?: number | undefined
  mimeType?: string | undefined
  name?: string | undefined
  transcoded?: boolean | undefined
}
type UniversalAdId = {
  id?: string | undefined
  registry?:
    | 'UNIVERSAL_AD_REGISTRY_UNSPECIFIED'
    | 'UNIVERSAL_AD_REGISTRY_OTHER'
    | 'UNIVERSAL_AD_REGISTRY_AD_ID'
    | 'UNIVERSAL_AD_REGISTRY_CLEARCAST'
    | 'UNIVERSAL_AD_REGISTRY_DV360'
    | 'UNIVERSAL_AD_REGISTRY_CM'
    | undefined
}
type Creative = {
  additionalDimensions?: Dimensions[] | undefined
  advertiserId?: string | undefined
  appendedTag?: string | undefined
  assets?: AssetAssociation[] | undefined
  cmPlacementId?: string | undefined
  cmTrackingAd?: CmTrackingAd | undefined
  companionCreativeIds?: string[] | undefined
  counterEvents?: CounterEvent[] | undefined
  createTime?: string | undefined
  creativeAttributes?:
    | (
        | 'CREATIVE_ATTRIBUTE_UNSPECIFIED'
        | 'CREATIVE_ATTRIBUTE_VAST'
        | 'CREATIVE_ATTRIBUTE_VPAID_LINEAR'
        | 'CREATIVE_ATTRIBUTE_VPAID_NON_LINEAR'
      )[]
    | undefined
  creativeId?: string | undefined
  creativeType?:
    | 'CREATIVE_TYPE_UNSPECIFIED'
    | 'CREATIVE_TYPE_STANDARD'
    | 'CREATIVE_TYPE_EXPANDABLE'
    | 'CREATIVE_TYPE_VIDEO'
    | 'CREATIVE_TYPE_NATIVE'
    | 'CREATIVE_TYPE_TEMPLATED_APP_INSTALL'
    | 'CREATIVE_TYPE_NATIVE_SITE_SQUARE'
    | 'CREATIVE_TYPE_TEMPLATED_APP_INSTALL_INTERSTITIAL'
    | 'CREATIVE_TYPE_LIGHTBOX'
    | 'CREATIVE_TYPE_NATIVE_APP_INSTALL'
    | 'CREATIVE_TYPE_NATIVE_APP_INSTALL_SQUARE'
    | 'CREATIVE_TYPE_AUDIO'
    | 'CREATIVE_TYPE_PUBLISHER_HOSTED'
    | 'CREATIVE_TYPE_NATIVE_VIDEO'
    | 'CREATIVE_TYPE_TEMPLATED_APP_INSTALL_VIDEO'
    | undefined
  dimensions?: Dimensions | undefined
  displayName?: string | undefined
  dynamic?: boolean | undefined
  entityStatus?:
    | 'ENTITY_STATUS_UNSPECIFIED'
    | 'ENTITY_STATUS_ACTIVE'
    | 'ENTITY_STATUS_ARCHIVED'
    | 'ENTITY_STATUS_DRAFT'
    | 'ENTITY_STATUS_PAUSED'
    | 'ENTITY_STATUS_SCHEDULED_FOR_DELETION'
    | undefined
  exitEvents?: ExitEvent[] | undefined
  expandOnHover?: boolean | undefined
  expandingDirection?:
    | 'EXPANDING_DIRECTION_UNSPECIFIED'
    | 'EXPANDING_DIRECTION_NONE'
    | 'EXPANDING_DIRECTION_UP'
    | 'EXPANDING_DIRECTION_DOWN'
    | 'EXPANDING_DIRECTION_LEFT'
    | 'EXPANDING_DIRECTION_RIGHT'
    | 'EXPANDING_DIRECTION_UP_AND_LEFT'
    | 'EXPANDING_DIRECTION_UP_AND_RIGHT'
    | 'EXPANDING_DIRECTION_DOWN_AND_LEFT'
    | 'EXPANDING_DIRECTION_DOWN_AND_RIGHT'
    | 'EXPANDING_DIRECTION_UP_OR_DOWN'
    | 'EXPANDING_DIRECTION_LEFT_OR_RIGHT'
    | 'EXPANDING_DIRECTION_ANY_DIAGONAL'
    | undefined
  hostingSource?:
    | 'HOSTING_SOURCE_UNSPECIFIED'
    | 'HOSTING_SOURCE_CM'
    | 'HOSTING_SOURCE_THIRD_PARTY'
    | 'HOSTING_SOURCE_HOSTED'
    | 'HOSTING_SOURCE_RICH_MEDIA'
    | undefined
  html5Video?: boolean | undefined
  iasCampaignMonitoring?: boolean | undefined
  integrationCode?: string | undefined
  jsTrackerUrl?: string | undefined
  lineItemIds?: string[] | undefined
  mediaDuration?: string | undefined
  mp3Audio?: boolean | undefined
  name?: string | undefined
  notes?: string | undefined
  obaIcon?: ObaIcon | undefined
  oggAudio?: boolean | undefined
  progressOffset?: AudioVideoOffset | undefined
  requireHtml5?: boolean | undefined
  requireMraid?: boolean | undefined
  requirePingForAttribution?: boolean | undefined
  reviewStatus?: ReviewStatusInfo | undefined
  skipOffset?: AudioVideoOffset | undefined
  skippable?: boolean | undefined
  thirdPartyTag?: string | undefined
  thirdPartyUrls?: ThirdPartyUrl[] | undefined
  timerEvents?: TimerEvent[] | undefined
  trackerUrls?: string[] | undefined
  transcodes?: Transcode[] | undefined
  universalAdId?: UniversalAdId | undefined
  updateTime?: string | undefined
  vastTagUrl?: string | undefined
  vpaid?: boolean | undefined
}
type ListCreativesResponse = {
  creatives?: Creative[] | undefined
  nextPageToken?: string | undefined
}
type FixedBidStrategy = { bidAmountMicros?: string | undefined }
type MaximizeSpendBidStrategy = {
  customBiddingAlgorithmId?: string | undefined
  maxAverageCpmBidAmountMicros?: string | undefined
  performanceGoalType?:
    | 'BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_UNSPECIFIED'
    | 'BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_CPA'
    | 'BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_CPC'
    | 'BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_VIEWABLE_CPM'
    | 'BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_CUSTOM_ALGO'
    | 'BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_CIVA'
    | 'BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_IVO_TEN'
    | 'BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_AV_VIEWED'
    | undefined
  raiseBidForDeals?: boolean | undefined
}
type PerformanceGoalBidStrategy = {
  customBiddingAlgorithmId?: string | undefined
  maxAverageCpmBidAmountMicros?: string | undefined
  performanceGoalAmountMicros?: string | undefined
  performanceGoalType?:
    | 'BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_UNSPECIFIED'
    | 'BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_CPA'
    | 'BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_CPC'
    | 'BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_VIEWABLE_CPM'
    | 'BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_CUSTOM_ALGO'
    | 'BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_CIVA'
    | 'BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_IVO_TEN'
    | 'BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_AV_VIEWED'
    | undefined
}
type BiddingStrategy = {
  fixedBid?: FixedBidStrategy | undefined
  maximizeSpendAutoBid?: MaximizeSpendBidStrategy | undefined
  performanceGoalAutoBid?: PerformanceGoalBidStrategy | undefined
}
type InsertionOrderBudgetSegment = {
  budgetAmountMicros?: string | undefined
  campaignBudgetId?: string | undefined
  dateRange?: DateRange | undefined
  description?: string | undefined
}
type InsertionOrderBudget = {
  automationType?:
    | 'INSERTION_ORDER_AUTOMATION_TYPE_UNSPECIFIED'
    | 'INSERTION_ORDER_AUTOMATION_TYPE_BUDGET'
    | 'INSERTION_ORDER_AUTOMATION_TYPE_NONE'
    | 'INSERTION_ORDER_AUTOMATION_TYPE_BID_BUDGET'
    | undefined
  budgetSegments?: InsertionOrderBudgetSegment[] | undefined
  budgetUnit?:
    | 'BUDGET_UNIT_UNSPECIFIED'
    | 'BUDGET_UNIT_CURRENCY'
    | 'BUDGET_UNIT_IMPRESSIONS'
    | undefined
}
type Pacing = {
  dailyMaxImpressions?: string | undefined
  dailyMaxMicros?: string | undefined
  pacingPeriod?:
    | 'PACING_PERIOD_UNSPECIFIED'
    | 'PACING_PERIOD_DAILY'
    | 'PACING_PERIOD_FLIGHT'
    | undefined
  pacingType?:
    | 'PACING_TYPE_UNSPECIFIED'
    | 'PACING_TYPE_AHEAD'
    | 'PACING_TYPE_ASAP'
    | 'PACING_TYPE_EVEN'
    | undefined
}
type PartnerCost = {
  costType?:
    | 'PARTNER_COST_TYPE_UNSPECIFIED'
    | 'PARTNER_COST_TYPE_ADLOOX'
    | 'PARTNER_COST_TYPE_ADLOOX_PREBID'
    | 'PARTNER_COST_TYPE_ADSAFE'
    | 'PARTNER_COST_TYPE_ADXPOSE'
    | 'PARTNER_COST_TYPE_AGGREGATE_KNOWLEDGE'
    | 'PARTNER_COST_TYPE_AGENCY_TRADING_DESK'
    | 'PARTNER_COST_TYPE_DV360_FEE'
    | 'PARTNER_COST_TYPE_COMSCORE_VCE'
    | 'PARTNER_COST_TYPE_DATA_MANAGEMENT_PLATFORM'
    | 'PARTNER_COST_TYPE_DEFAULT'
    | 'PARTNER_COST_TYPE_DOUBLE_VERIFY'
    | 'PARTNER_COST_TYPE_DOUBLE_VERIFY_PREBID'
    | 'PARTNER_COST_TYPE_EVIDON'
    | 'PARTNER_COST_TYPE_INTEGRAL_AD_SCIENCE_VIDEO'
    | 'PARTNER_COST_TYPE_INTEGRAL_AD_SCIENCE_PREBID'
    | 'PARTNER_COST_TYPE_MEDIA_COST_DATA'
    | 'PARTNER_COST_TYPE_MOAT_VIDEO'
    | 'PARTNER_COST_TYPE_NIELSEN_DAR'
    | 'PARTNER_COST_TYPE_SHOP_LOCAL'
    | 'PARTNER_COST_TYPE_TERACENT'
    | 'PARTNER_COST_TYPE_THIRD_PARTY_AD_SERVER'
    | 'PARTNER_COST_TYPE_TRUST_METRICS'
    | 'PARTNER_COST_TYPE_VIZU'
    | 'PARTNER_COST_TYPE_ADLINGO_FEE'
    | 'PARTNER_COST_TYPE_CUSTOM_FEE_1'
    | 'PARTNER_COST_TYPE_CUSTOM_FEE_2'
    | 'PARTNER_COST_TYPE_CUSTOM_FEE_3'
    | 'PARTNER_COST_TYPE_CUSTOM_FEE_4'
    | 'PARTNER_COST_TYPE_CUSTOM_FEE_5'
    | undefined
  feeAmount?: string | undefined
  feePercentageMillis?: string | undefined
  feeType?:
    | 'PARTNER_COST_FEE_TYPE_UNSPECIFIED'
    | 'PARTNER_COST_FEE_TYPE_CPM_FEE'
    | 'PARTNER_COST_FEE_TYPE_MEDIA_FEE'
    | undefined
  invoiceType?:
    | 'PARTNER_COST_INVOICE_TYPE_UNSPECIFIED'
    | 'PARTNER_COST_INVOICE_TYPE_DV360'
    | 'PARTNER_COST_INVOICE_TYPE_PARTNER'
    | undefined
}
type InsertionOrder = {
  advertiserId?: string | undefined
  bidStrategy?: BiddingStrategy | undefined
  billableOutcome?:
    | 'BILLABLE_OUTCOME_UNSPECIFIED'
    | 'BILLABLE_OUTCOME_PAY_PER_IMPRESSION'
    | 'BILLABLE_OUTCOME_PAY_PER_CLICK'
    | 'BILLABLE_OUTCOME_PAY_PER_VIEWABLE_IMPRESSION'
    | undefined
  budget?: InsertionOrderBudget | undefined
  campaignId?: string | undefined
  displayName?: string | undefined
  entityStatus?:
    | 'ENTITY_STATUS_UNSPECIFIED'
    | 'ENTITY_STATUS_ACTIVE'
    | 'ENTITY_STATUS_ARCHIVED'
    | 'ENTITY_STATUS_DRAFT'
    | 'ENTITY_STATUS_PAUSED'
    | 'ENTITY_STATUS_SCHEDULED_FOR_DELETION'
    | undefined
  frequencyCap?: FrequencyCap | undefined
  insertionOrderId?: string | undefined
  insertionOrderType?: 'INSERTION_ORDER_TYPE_UNSPECIFIED' | 'RTB' | 'OVER_THE_TOP' | undefined
  integrationDetails?: IntegrationDetails | undefined
  name?: string | undefined
  pacing?: Pacing | undefined
  partnerCosts?: PartnerCost[] | undefined
  performanceGoal?: PerformanceGoal | undefined
  reservationType?:
    | 'RESERVATION_TYPE_UNSPECIFIED'
    | 'RESERVATION_TYPE_NOT_GUARANTEED'
    | 'RESERVATION_TYPE_PROGRAMMATIC_GUARANTEED'
    | 'RESERVATION_TYPE_TAG_GUARANTEED'
    | 'RESERVATION_TYPE_PETRA_VIRAL'
    | 'RESERVATION_TYPE_INSTANT_RESERVE'
    | undefined
  updateTime?: string | undefined
}
type ListInsertionOrdersResponse = {
  insertionOrders?: InsertionOrder[] | undefined
  nextPageToken?: string | undefined
}
type ListInsertionOrderAssignedTargetingOptionsResponse = {
  assignedTargetingOptions?: AssignedTargetingOption[] | undefined
  nextPageToken?: string | undefined
}
type BulkListInsertionOrderAssignedTargetingOptionsResponse = {
  assignedTargetingOptions?: AssignedTargetingOption[] | undefined
  nextPageToken?: string | undefined
}
type BudgetSummary = {
  externalBudgetId?: string | undefined
  preTaxAmountMicros?: string | undefined
  prismaCpeCode?: PrismaCpeCode | undefined
  taxAmountMicros?: string | undefined
  totalAmountMicros?: string | undefined
}
type Invoice = {
  budgetInvoiceGroupingId?: string | undefined
  budgetSummaries?: BudgetSummary[] | undefined
  correctedInvoiceId?: string | undefined
  currencyCode?: string | undefined
  displayName?: string | undefined
  dueDate?: Date | undefined
  invoiceId?: string | undefined
  invoiceType?:
    | 'INVOICE_TYPE_UNSPECIFIED'
    | 'INVOICE_TYPE_CREDIT'
    | 'INVOICE_TYPE_INVOICE'
    | undefined
  issueDate?: Date | undefined
  name?: string | undefined
  nonBudgetMicros?: string | undefined
  paymentsAccountId?: string | undefined
  paymentsProfileId?: string | undefined
  pdfUrl?: string | undefined
  purchaseOrderNumber?: string | undefined
  replacedInvoiceIds?: string[] | undefined
  serviceDateRange?: DateRange | undefined
  subtotalAmountMicros?: string | undefined
  totalAmountMicros?: string | undefined
  totalTaxAmountMicros?: string | undefined
}
type ListInvoicesResponse = { invoices?: Invoice[] | undefined; nextPageToken?: string | undefined }
type LookupInvoiceCurrencyResponse = { currencyCode?: string | undefined }
type LineItemBudget = {
  budgetAllocationType?:
    | 'LINE_ITEM_BUDGET_ALLOCATION_TYPE_UNSPECIFIED'
    | 'LINE_ITEM_BUDGET_ALLOCATION_TYPE_AUTOMATIC'
    | 'LINE_ITEM_BUDGET_ALLOCATION_TYPE_FIXED'
    | 'LINE_ITEM_BUDGET_ALLOCATION_TYPE_UNLIMITED'
    | undefined
  budgetUnit?:
    | 'BUDGET_UNIT_UNSPECIFIED'
    | 'BUDGET_UNIT_CURRENCY'
    | 'BUDGET_UNIT_IMPRESSIONS'
    | undefined
  maxAmount?: string | undefined
}
type TrackingFloodlightActivityConfig = {
  floodlightActivityId?: string | undefined
  postClickLookbackWindowDays?: number | undefined
  postViewLookbackWindowDays?: number | undefined
}
type ConversionCountingConfig = {
  floodlightActivityConfigs?: TrackingFloodlightActivityConfig[] | undefined
  postViewCountPercentageMillis?: string | undefined
}
type LineItemFlight = {
  dateRange?: DateRange | undefined
  flightDateType?:
    | 'LINE_ITEM_FLIGHT_DATE_TYPE_UNSPECIFIED'
    | 'LINE_ITEM_FLIGHT_DATE_TYPE_INHERITED'
    | 'LINE_ITEM_FLIGHT_DATE_TYPE_CUSTOM'
    | undefined
}
type MobileApp = {
  appId?: string | undefined
  displayName?: string | undefined
  platform?: 'PLATFORM_UNSPECIFIED' | 'IOS' | 'ANDROID' | undefined
  publisher?: string | undefined
}
type PartnerRevenueModel = {
  markupAmount?: string | undefined
  markupType?:
    | 'PARTNER_REVENUE_MODEL_MARKUP_TYPE_UNSPECIFIED'
    | 'PARTNER_REVENUE_MODEL_MARKUP_TYPE_CPM'
    | 'PARTNER_REVENUE_MODEL_MARKUP_TYPE_MEDIA_COST_MARKUP'
    | 'PARTNER_REVENUE_MODEL_MARKUP_TYPE_TOTAL_MEDIA_COST_MARKUP'
    | undefined
}
type TargetingExpansionConfig = {
  excludeFirstPartyAudience?: boolean | undefined
  targetingExpansionLevel?:
    | 'TARGETING_EXPANSION_LEVEL_UNSPECIFIED'
    | 'NO_EXPANSION'
    | 'LEAST_EXPANSION'
    | 'SOME_EXPANSION'
    | 'BALANCED_EXPANSION'
    | 'MORE_EXPANSION'
    | 'MOST_EXPANSION'
    | undefined
}
type YoutubeAndPartnersBiddingStrategy = {
  adGroupEffectiveTargetCpaSource?:
    | 'BIDDING_SOURCE_UNSPECIFIED'
    | 'BIDDING_SOURCE_LINE_ITEM'
    | 'BIDDING_SOURCE_AD_GROUP'
    | undefined
  adGroupEffectiveTargetCpaValue?: string | undefined
  type?:
    | 'YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_UNSPECIFIED'
    | 'YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_MANUAL_CPV'
    | 'YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_MANUAL_CPM'
    | 'YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_TARGET_CPA'
    | 'YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_TARGET_CPM'
    | 'YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_MAXIMIZE_LIFT'
    | 'YOUTUBE_AND_PARTNERS_BIDDING_STRATEGY_TYPE_MAXIMIZE_CONVERSIONS'
    | undefined
  value?: string | undefined
}
type YoutubeAndPartnersInventorySourceConfig = {
  includeYoutubeSearch?: boolean | undefined
  includeYoutubeVideoPartners?: boolean | undefined
  includeYoutubeVideos?: boolean | undefined
}
type TargetFrequency = {
  targetCount?: string | undefined
  timeUnit?:
    | 'TIME_UNIT_UNSPECIFIED'
    | 'TIME_UNIT_LIFETIME'
    | 'TIME_UNIT_MONTHS'
    | 'TIME_UNIT_WEEKS'
    | 'TIME_UNIT_DAYS'
    | 'TIME_UNIT_HOURS'
    | 'TIME_UNIT_MINUTES'
    | undefined
  timeUnitCount?: number | undefined
}
type ThirdPartyVendorConfig = {
  placementId?: string | undefined
  vendor?:
    | 'THIRD_PARTY_VENDOR_UNSPECIFIED'
    | 'THIRD_PARTY_VENDOR_MOAT'
    | 'THIRD_PARTY_VENDOR_DOUBLE_VERIFY'
    | 'THIRD_PARTY_VENDOR_INTEGRAL_AD_SCIENCE'
    | 'THIRD_PARTY_VENDOR_COMSCORE'
    | 'THIRD_PARTY_VENDOR_TELEMETRY'
    | 'THIRD_PARTY_VENDOR_MEETRICS'
    | 'THIRD_PARTY_VENDOR_ZEFR'
    | 'THIRD_PARTY_VENDOR_NIELSEN'
    | 'THIRD_PARTY_VENDOR_KANTAR'
    | 'THIRD_PARTY_VENDOR_DYNATA'
    | undefined
}
type YoutubeAndPartnersThirdPartyMeasurementSettings = {
  brandLiftVendorConfigs?: ThirdPartyVendorConfig[] | undefined
  brandSafetyVendorConfigs?: ThirdPartyVendorConfig[] | undefined
  reachVendorConfigs?: ThirdPartyVendorConfig[] | undefined
  viewabilityVendorConfigs?: ThirdPartyVendorConfig[] | undefined
}
type VideoAdSequenceStep = {
  adGroupId?: string | undefined
  interactionType?:
    | 'INTERACTION_TYPE_UNSPECIFIED'
    | 'INTERACTION_TYPE_PAID_VIEW'
    | 'INTERACTION_TYPE_SKIP'
    | 'INTERACTION_TYPE_IMPRESSION'
    | 'INTERACTION_TYPE_ENGAGED_IMPRESSION'
    | undefined
  previousStepId?: string | undefined
  stepId?: string | undefined
}
type VideoAdSequenceSettings = {
  minimumDuration?:
    | 'VIDEO_AD_SEQUENCE_MINIMUM_DURATION_UNSPECIFIED'
    | 'VIDEO_AD_SEQUENCE_MINIMUM_DURATION_WEEK'
    | 'VIDEO_AD_SEQUENCE_MINIMUM_DURATION_MONTH'
    | undefined
  steps?: VideoAdSequenceStep[] | undefined
}
type YoutubeAndPartnersSettings = {
  biddingStrategy?: YoutubeAndPartnersBiddingStrategy | undefined
  contentCategory?:
    | 'YOUTUBE_AND_PARTNERS_CONTENT_CATEGORY_UNSPECIFIED'
    | 'YOUTUBE_AND_PARTNERS_CONTENT_CATEGORY_STANDARD'
    | 'YOUTUBE_AND_PARTNERS_CONTENT_CATEGORY_EXPANDED'
    | 'YOUTUBE_AND_PARTNERS_CONTENT_CATEGORY_LIMITED'
    | undefined
  inventorySourceSettings?: YoutubeAndPartnersInventorySourceConfig | undefined
  leadFormId?: string | undefined
  linkedMerchantId?: string | undefined
  relatedVideoIds?: string[] | undefined
  targetFrequency?: TargetFrequency | undefined
  thirdPartyMeasurementSettings?: YoutubeAndPartnersThirdPartyMeasurementSettings | undefined
  videoAdSequenceSettings?: VideoAdSequenceSettings | undefined
  viewFrequencyCap?: FrequencyCap | undefined
}
type LineItem = {
  advertiserId?: string | undefined
  bidStrategy?: BiddingStrategy | undefined
  budget?: LineItemBudget | undefined
  campaignId?: string | undefined
  conversionCounting?: ConversionCountingConfig | undefined
  creativeIds?: string[] | undefined
  displayName?: string | undefined
  entityStatus?:
    | 'ENTITY_STATUS_UNSPECIFIED'
    | 'ENTITY_STATUS_ACTIVE'
    | 'ENTITY_STATUS_ARCHIVED'
    | 'ENTITY_STATUS_DRAFT'
    | 'ENTITY_STATUS_PAUSED'
    | 'ENTITY_STATUS_SCHEDULED_FOR_DELETION'
    | undefined
  excludeNewExchanges?: boolean | undefined
  flight?: LineItemFlight | undefined
  frequencyCap?: FrequencyCap | undefined
  insertionOrderId?: string | undefined
  integrationDetails?: IntegrationDetails | undefined
  lineItemId?: string | undefined
  lineItemType?:
    | 'LINE_ITEM_TYPE_UNSPECIFIED'
    | 'LINE_ITEM_TYPE_DISPLAY_DEFAULT'
    | 'LINE_ITEM_TYPE_DISPLAY_MOBILE_APP_INSTALL'
    | 'LINE_ITEM_TYPE_VIDEO_DEFAULT'
    | 'LINE_ITEM_TYPE_VIDEO_MOBILE_APP_INSTALL'
    | 'LINE_ITEM_TYPE_DISPLAY_MOBILE_APP_INVENTORY'
    | 'LINE_ITEM_TYPE_VIDEO_MOBILE_APP_INVENTORY'
    | 'LINE_ITEM_TYPE_AUDIO_DEFAULT'
    | 'LINE_ITEM_TYPE_VIDEO_OVER_THE_TOP'
    | 'LINE_ITEM_TYPE_YOUTUBE_AND_PARTNERS_ACTION'
    | 'LINE_ITEM_TYPE_YOUTUBE_AND_PARTNERS_NON_SKIPPABLE'
    | 'LINE_ITEM_TYPE_YOUTUBE_AND_PARTNERS_VIDEO_SEQUENCE'
    | 'LINE_ITEM_TYPE_YOUTUBE_AND_PARTNERS_AUDIO'
    | 'LINE_ITEM_TYPE_YOUTUBE_AND_PARTNERS_REACH'
    | 'LINE_ITEM_TYPE_YOUTUBE_AND_PARTNERS_SIMPLE'
    | 'LINE_ITEM_TYPE_YOUTUBE_AND_PARTNERS_NON_SKIPPABLE_OVER_THE_TOP'
    | 'LINE_ITEM_TYPE_YOUTUBE_AND_PARTNERS_REACH_OVER_THE_TOP'
    | 'LINE_ITEM_TYPE_YOUTUBE_AND_PARTNERS_SIMPLE_OVER_THE_TOP'
    | 'LINE_ITEM_TYPE_YOUTUBE_AND_PARTNERS_TARGET_FREQUENCY'
    | undefined
  mobileApp?: MobileApp | undefined
  name?: string | undefined
  pacing?: Pacing | undefined
  partnerCosts?: PartnerCost[] | undefined
  partnerRevenueModel?: PartnerRevenueModel | undefined
  reservationType?:
    | 'RESERVATION_TYPE_UNSPECIFIED'
    | 'RESERVATION_TYPE_NOT_GUARANTEED'
    | 'RESERVATION_TYPE_PROGRAMMATIC_GUARANTEED'
    | 'RESERVATION_TYPE_TAG_GUARANTEED'
    | 'RESERVATION_TYPE_PETRA_VIRAL'
    | 'RESERVATION_TYPE_INSTANT_RESERVE'
    | undefined
  targetingExpansion?: TargetingExpansionConfig | undefined
  updateTime?: string | undefined
  warningMessages?:
    | (
        | 'LINE_ITEM_WARNING_MESSAGE_UNSPECIFIED'
        | 'INVALID_FLIGHT_DATES'
        | 'EXPIRED'
        | 'PENDING_FLIGHT'
        | 'ALL_PARTNER_ENABLED_EXCHANGES_NEGATIVELY_TARGETED'
        | 'INVALID_INVENTORY_SOURCE'
        | 'APP_INVENTORY_INVALID_SITE_TARGETING'
        | 'APP_INVENTORY_INVALID_AUDIENCE_LISTS'
        | 'NO_VALID_CREATIVE'
        | 'PARENT_INSERTION_ORDER_PAUSED'
        | 'PARENT_INSERTION_ORDER_EXPIRED'
        | 'DEPRECATED_FIRST_PARTY_AUDIENCE_EXCLUSION'
      )[]
    | undefined
  youtubeAndPartnersSettings?: YoutubeAndPartnersSettings | undefined
}
type ListLineItemsResponse = {
  lineItems?: LineItem[] | undefined
  nextPageToken?: string | undefined
}
type ListLineItemAssignedTargetingOptionsResponse = {
  assignedTargetingOptions?: AssignedTargetingOption[] | undefined
  nextPageToken?: string | undefined
}
type DuplicateLineItemRequest = { targetDisplayName?: string | undefined }
type DuplicateLineItemResponse = { duplicateLineItemId?: string | undefined }
type CreateAssignedTargetingOptionsRequest = {
  assignedTargetingOptions?: AssignedTargetingOption[] | undefined
  targetingType?:
    | 'TARGETING_TYPE_UNSPECIFIED'
    | 'TARGETING_TYPE_CHANNEL'
    | 'TARGETING_TYPE_APP_CATEGORY'
    | 'TARGETING_TYPE_APP'
    | 'TARGETING_TYPE_URL'
    | 'TARGETING_TYPE_DAY_AND_TIME'
    | 'TARGETING_TYPE_AGE_RANGE'
    | 'TARGETING_TYPE_REGIONAL_LOCATION_LIST'
    | 'TARGETING_TYPE_PROXIMITY_LOCATION_LIST'
    | 'TARGETING_TYPE_GENDER'
    | 'TARGETING_TYPE_VIDEO_PLAYER_SIZE'
    | 'TARGETING_TYPE_USER_REWARDED_CONTENT'
    | 'TARGETING_TYPE_PARENTAL_STATUS'
    | 'TARGETING_TYPE_CONTENT_INSTREAM_POSITION'
    | 'TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION'
    | 'TARGETING_TYPE_DEVICE_TYPE'
    | 'TARGETING_TYPE_AUDIENCE_GROUP'
    | 'TARGETING_TYPE_BROWSER'
    | 'TARGETING_TYPE_HOUSEHOLD_INCOME'
    | 'TARGETING_TYPE_ON_SCREEN_POSITION'
    | 'TARGETING_TYPE_THIRD_PARTY_VERIFIER'
    | 'TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION'
    | 'TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION'
    | 'TARGETING_TYPE_ENVIRONMENT'
    | 'TARGETING_TYPE_CARRIER_AND_ISP'
    | 'TARGETING_TYPE_OPERATING_SYSTEM'
    | 'TARGETING_TYPE_DEVICE_MAKE_MODEL'
    | 'TARGETING_TYPE_KEYWORD'
    | 'TARGETING_TYPE_NEGATIVE_KEYWORD_LIST'
    | 'TARGETING_TYPE_VIEWABILITY'
    | 'TARGETING_TYPE_CATEGORY'
    | 'TARGETING_TYPE_INVENTORY_SOURCE'
    | 'TARGETING_TYPE_LANGUAGE'
    | 'TARGETING_TYPE_AUTHORIZED_SELLER_STATUS'
    | 'TARGETING_TYPE_GEO_REGION'
    | 'TARGETING_TYPE_INVENTORY_SOURCE_GROUP'
    | 'TARGETING_TYPE_EXCHANGE'
    | 'TARGETING_TYPE_SUB_EXCHANGE'
    | 'TARGETING_TYPE_POI'
    | 'TARGETING_TYPE_BUSINESS_CHAIN'
    | 'TARGETING_TYPE_CONTENT_DURATION'
    | 'TARGETING_TYPE_CONTENT_STREAM_TYPE'
    | 'TARGETING_TYPE_NATIVE_CONTENT_POSITION'
    | 'TARGETING_TYPE_OMID'
    | 'TARGETING_TYPE_AUDIO_CONTENT_TYPE'
    | 'TARGETING_TYPE_CONTENT_GENRE'
    | 'TARGETING_TYPE_YOUTUBE_VIDEO'
    | 'TARGETING_TYPE_YOUTUBE_CHANNEL'
    | 'TARGETING_TYPE_SESSION_POSITION'
    | undefined
}
type DeleteAssignedTargetingOptionsRequest = {
  assignedTargetingOptionIds?: string[] | undefined
  targetingType?:
    | 'TARGETING_TYPE_UNSPECIFIED'
    | 'TARGETING_TYPE_CHANNEL'
    | 'TARGETING_TYPE_APP_CATEGORY'
    | 'TARGETING_TYPE_APP'
    | 'TARGETING_TYPE_URL'
    | 'TARGETING_TYPE_DAY_AND_TIME'
    | 'TARGETING_TYPE_AGE_RANGE'
    | 'TARGETING_TYPE_REGIONAL_LOCATION_LIST'
    | 'TARGETING_TYPE_PROXIMITY_LOCATION_LIST'
    | 'TARGETING_TYPE_GENDER'
    | 'TARGETING_TYPE_VIDEO_PLAYER_SIZE'
    | 'TARGETING_TYPE_USER_REWARDED_CONTENT'
    | 'TARGETING_TYPE_PARENTAL_STATUS'
    | 'TARGETING_TYPE_CONTENT_INSTREAM_POSITION'
    | 'TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION'
    | 'TARGETING_TYPE_DEVICE_TYPE'
    | 'TARGETING_TYPE_AUDIENCE_GROUP'
    | 'TARGETING_TYPE_BROWSER'
    | 'TARGETING_TYPE_HOUSEHOLD_INCOME'
    | 'TARGETING_TYPE_ON_SCREEN_POSITION'
    | 'TARGETING_TYPE_THIRD_PARTY_VERIFIER'
    | 'TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION'
    | 'TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION'
    | 'TARGETING_TYPE_ENVIRONMENT'
    | 'TARGETING_TYPE_CARRIER_AND_ISP'
    | 'TARGETING_TYPE_OPERATING_SYSTEM'
    | 'TARGETING_TYPE_DEVICE_MAKE_MODEL'
    | 'TARGETING_TYPE_KEYWORD'
    | 'TARGETING_TYPE_NEGATIVE_KEYWORD_LIST'
    | 'TARGETING_TYPE_VIEWABILITY'
    | 'TARGETING_TYPE_CATEGORY'
    | 'TARGETING_TYPE_INVENTORY_SOURCE'
    | 'TARGETING_TYPE_LANGUAGE'
    | 'TARGETING_TYPE_AUTHORIZED_SELLER_STATUS'
    | 'TARGETING_TYPE_GEO_REGION'
    | 'TARGETING_TYPE_INVENTORY_SOURCE_GROUP'
    | 'TARGETING_TYPE_EXCHANGE'
    | 'TARGETING_TYPE_SUB_EXCHANGE'
    | 'TARGETING_TYPE_POI'
    | 'TARGETING_TYPE_BUSINESS_CHAIN'
    | 'TARGETING_TYPE_CONTENT_DURATION'
    | 'TARGETING_TYPE_CONTENT_STREAM_TYPE'
    | 'TARGETING_TYPE_NATIVE_CONTENT_POSITION'
    | 'TARGETING_TYPE_OMID'
    | 'TARGETING_TYPE_AUDIO_CONTENT_TYPE'
    | 'TARGETING_TYPE_CONTENT_GENRE'
    | 'TARGETING_TYPE_YOUTUBE_VIDEO'
    | 'TARGETING_TYPE_YOUTUBE_CHANNEL'
    | 'TARGETING_TYPE_SESSION_POSITION'
    | undefined
}
type BulkEditAssignedTargetingOptionsRequest = {
  createRequests?: CreateAssignedTargetingOptionsRequest[] | undefined
  deleteRequests?: DeleteAssignedTargetingOptionsRequest[] | undefined
  lineItemIds?: string[] | undefined
}
type Status = {
  code?: number | undefined
  details?: { [x: string]: { [x: string]: unknown } }[] | undefined
  message?: string | undefined
}
type BulkEditAssignedTargetingOptionsResponse = {
  errors?: Status[] | undefined
  failedLineItemIds?: string[] | undefined
  updatedLineItemIds?: string[] | undefined
}
type LineItemAssignedTargetingOption = {
  assignedTargetingOption?: AssignedTargetingOption | undefined
  lineItemId?: string | undefined
}
type BulkListAssignedTargetingOptionsResponse = {
  lineItemAssignedTargetingOptions?: LineItemAssignedTargetingOption[] | undefined
  nextPageToken?: string | undefined
}
type BulkUpdateLineItemsRequest = {
  lineItemIds?: string[] | undefined
  targetLineItem?: LineItem | undefined
  updateMask?: string | undefined
}
type BulkUpdateLineItemsResponse = {
  errors?: Status[] | undefined
  failedLineItemIds?: string[] | undefined
  skippedLineItemIds?: string[] | undefined
  updatedLineItemIds?: string[] | undefined
}
type GenerateDefaultLineItemRequest = {
  displayName?: string | undefined
  insertionOrderId?: string | undefined
  lineItemType?:
    | 'LINE_ITEM_TYPE_UNSPECIFIED'
    | 'LINE_ITEM_TYPE_DISPLAY_DEFAULT'
    | 'LINE_ITEM_TYPE_DISPLAY_MOBILE_APP_INSTALL'
    | 'LINE_ITEM_TYPE_VIDEO_DEFAULT'
    | 'LINE_ITEM_TYPE_VIDEO_MOBILE_APP_INSTALL'
    | 'LINE_ITEM_TYPE_DISPLAY_MOBILE_APP_INVENTORY'
    | 'LINE_ITEM_TYPE_VIDEO_MOBILE_APP_INVENTORY'
    | 'LINE_ITEM_TYPE_AUDIO_DEFAULT'
    | 'LINE_ITEM_TYPE_VIDEO_OVER_THE_TOP'
    | 'LINE_ITEM_TYPE_YOUTUBE_AND_PARTNERS_ACTION'
    | 'LINE_ITEM_TYPE_YOUTUBE_AND_PARTNERS_NON_SKIPPABLE'
    | 'LINE_ITEM_TYPE_YOUTUBE_AND_PARTNERS_VIDEO_SEQUENCE'
    | 'LINE_ITEM_TYPE_YOUTUBE_AND_PARTNERS_AUDIO'
    | 'LINE_ITEM_TYPE_YOUTUBE_AND_PARTNERS_REACH'
    | 'LINE_ITEM_TYPE_YOUTUBE_AND_PARTNERS_SIMPLE'
    | 'LINE_ITEM_TYPE_YOUTUBE_AND_PARTNERS_NON_SKIPPABLE_OVER_THE_TOP'
    | 'LINE_ITEM_TYPE_YOUTUBE_AND_PARTNERS_REACH_OVER_THE_TOP'
    | 'LINE_ITEM_TYPE_YOUTUBE_AND_PARTNERS_SIMPLE_OVER_THE_TOP'
    | 'LINE_ITEM_TYPE_YOUTUBE_AND_PARTNERS_TARGET_FREQUENCY'
    | undefined
  mobileApp?: MobileApp | undefined
}
type LocationList = {
  advertiserId?: string | undefined
  displayName?: string | undefined
  locationListId?: string | undefined
  locationType?:
    | 'TARGETING_LOCATION_TYPE_UNSPECIFIED'
    | 'TARGETING_LOCATION_TYPE_PROXIMITY'
    | 'TARGETING_LOCATION_TYPE_REGIONAL'
    | undefined
  name?: string | undefined
}
type ListLocationListsResponse = {
  locationLists?: LocationList[] | undefined
  nextPageToken?: string | undefined
}
type AssignedLocation = {
  assignedLocationId?: string | undefined
  name?: string | undefined
  targetingOptionId?: string | undefined
}
type ListAssignedLocationsResponse = {
  assignedLocations?: AssignedLocation[] | undefined
  nextPageToken?: string | undefined
}
type BulkEditAssignedLocationsRequest = {
  createdAssignedLocations?: AssignedLocation[] | undefined
  deletedAssignedLocations?: string[] | undefined
}
type BulkEditAssignedLocationsResponse = { assignedLocations?: AssignedLocation[] | undefined }
type ManualTrigger = {
  activationDurationMinutes?: string | undefined
  advertiserId?: string | undefined
  displayName?: string | undefined
  latestActivationTime?: string | undefined
  name?: string | undefined
  state?: 'STATE_UNSPECIFIED' | 'INACTIVE' | 'ACTIVE' | undefined
  triggerId?: string | undefined
}
type ListManualTriggersResponse = {
  manualTriggers?: ManualTrigger[] | undefined
  nextPageToken?: string | undefined
}
type ActivateManualTriggerRequest = { [x: string]: unknown }
type DeactivateManualTriggerRequest = { [x: string]: unknown }
type NegativeKeywordList = {
  advertiserId?: string | undefined
  displayName?: string | undefined
  name?: string | undefined
  negativeKeywordListId?: string | undefined
  targetedLineItemCount?: string | undefined
}
type ListNegativeKeywordListsResponse = {
  negativeKeywordLists?: NegativeKeywordList[] | undefined
  nextPageToken?: string | undefined
}
type NegativeKeyword = { keywordValue?: string | undefined; name?: string | undefined }
type ListNegativeKeywordsResponse = {
  negativeKeywords?: NegativeKeyword[] | undefined
  nextPageToken?: string | undefined
}
type BulkEditNegativeKeywordsRequest = {
  createdNegativeKeywords?: NegativeKeyword[] | undefined
  deletedNegativeKeywords?: string[] | undefined
}
type BulkEditNegativeKeywordsResponse = { negativeKeywords?: NegativeKeyword[] | undefined }
type ReplaceNegativeKeywordsRequest = { newNegativeKeywords?: NegativeKeyword[] | undefined }
type ReplaceNegativeKeywordsResponse = { negativeKeywords?: NegativeKeyword[] | undefined }
type ListAdvertiserAssignedTargetingOptionsResponse = {
  assignedTargetingOptions?: AssignedTargetingOption[] | undefined
  nextPageToken?: string | undefined
}
type AdUrl = {
  type?:
    | 'AD_URL_TYPE_UNSPECIFIED'
    | 'AD_URL_TYPE_BEACON_IMPRESSION'
    | 'AD_URL_TYPE_BEACON_EXPANDABLE_DCM_IMPRESSION'
    | 'AD_URL_TYPE_BEACON_CLICK'
    | 'AD_URL_TYPE_BEACON_SKIP'
    | undefined
  url?: string | undefined
}
type YoutubeVideoDetails = {
  id?: string | undefined
  unavailableReason?:
    | 'VIDEO_UNAVAILABLE_REASON_UNSPECIFIED'
    | 'VIDEO_UNAVAILABLE_REASON_PRIVATE'
    | 'VIDEO_UNAVAILABLE_REASON_DELETED'
    | undefined
}
type AudioAd = {
  displayUrl?: string | undefined
  finalUrl?: string | undefined
  trackingUrl?: string | undefined
  video?: YoutubeVideoDetails | undefined
}
type ImageAsset = {
  fileSize?: string | undefined
  fullSize?: Dimensions | undefined
  mimeType?: string | undefined
}
type CommonInStreamAttribute = {
  actionButtonLabel?: string | undefined
  actionHeadline?: string | undefined
  companionBanner?: ImageAsset | undefined
  displayUrl?: string | undefined
  finalUrl?: string | undefined
  trackingUrl?: string | undefined
  video?: YoutubeVideoDetails | undefined
}
type BumperAd = { commonInStreamAttribute?: CommonInStreamAttribute | undefined }
type DisplayVideoSourceAd = { creativeId?: string | undefined }
type InStreamAd = {
  commonInStreamAttribute?: CommonInStreamAttribute | undefined
  customParameters?: { [x: string]: string } | undefined
}
type MastheadAd = {
  autoplayVideoDuration?: string | undefined
  autoplayVideoStartMillisecond?: string | undefined
  callToActionButtonLabel?: string | undefined
  callToActionFinalUrl?: string | undefined
  callToActionTrackingUrl?: string | undefined
  companionYoutubeVideos?: YoutubeVideoDetails[] | undefined
  description?: string | undefined
  headline?: string | undefined
  showChannelArt?: boolean | undefined
  video?: YoutubeVideoDetails | undefined
  videoAspectRatio?:
    | 'VIDEO_ASPECT_RATIO_UNSPECIFIED'
    | 'VIDEO_ASPECT_RATIO_WIDESCREEN'
    | 'VIDEO_ASPECT_RATIO_FIXED_16_9'
    | undefined
}
type NonSkippableAd = {
  commonInStreamAttribute?: CommonInStreamAttribute | undefined
  customParameters?: { [x: string]: string } | undefined
}
type VideoDiscoveryAd = {
  description1?: string | undefined
  description2?: string | undefined
  headline?: string | undefined
  thumbnail?:
    | 'THUMBNAIL_UNSPECIFIED'
    | 'THUMBNAIL_DEFAULT'
    | 'THUMBNAIL_1'
    | 'THUMBNAIL_2'
    | 'THUMBNAIL_3'
    | undefined
  video?: YoutubeVideoDetails | undefined
}
type VideoPerformanceAd = {
  actionButtonLabels?: string[] | undefined
  companionBanners?: ImageAsset[] | undefined
  customParameters?: { [x: string]: string } | undefined
  descriptions?: string[] | undefined
  displayUrlBreadcrumb1?: string | undefined
  displayUrlBreadcrumb2?: string | undefined
  domain?: string | undefined
  finalUrl?: string | undefined
  headlines?: string[] | undefined
  longHeadlines?: string[] | undefined
  trackingUrl?: string | undefined
  videos?: YoutubeVideoDetails[] | undefined
}
type YoutubeAdGroupAd = {
  adGroupAdId?: string | undefined
  adGroupId?: string | undefined
  adUrls?: AdUrl[] | undefined
  advertiserId?: string | undefined
  audioAd?: AudioAd | undefined
  bumperAd?: BumperAd | undefined
  displayName?: string | undefined
  displayVideoSourceAd?: DisplayVideoSourceAd | undefined
  entityStatus?:
    | 'ENTITY_STATUS_UNSPECIFIED'
    | 'ENTITY_STATUS_ACTIVE'
    | 'ENTITY_STATUS_ARCHIVED'
    | 'ENTITY_STATUS_DRAFT'
    | 'ENTITY_STATUS_PAUSED'
    | 'ENTITY_STATUS_SCHEDULED_FOR_DELETION'
    | undefined
  inStreamAd?: InStreamAd | undefined
  mastheadAd?: MastheadAd | undefined
  name?: string | undefined
  nonSkippableAd?: NonSkippableAd | undefined
  videoDiscoverAd?: VideoDiscoveryAd | undefined
  videoPerformanceAd?: VideoPerformanceAd | undefined
}
type ListYoutubeAdGroupAdsResponse = {
  nextPageToken?: string | undefined
  youtubeAdGroupAds?: YoutubeAdGroupAd[] | undefined
}
type CustomLabel = {
  key?:
    | 'CUSTOM_LABEL_KEY_UNSPECIFIED'
    | 'CUSTOM_LABEL_KEY_0'
    | 'CUSTOM_LABEL_KEY_1'
    | 'CUSTOM_LABEL_KEY_2'
    | 'CUSTOM_LABEL_KEY_3'
    | 'CUSTOM_LABEL_KEY_4'
    | undefined
  value?: string | undefined
}
type ProductMatchDimension = {
  customLabel?: CustomLabel | undefined
  productOfferId?: string | undefined
}
type ProductFeedData = {
  isFeedDisabled?: boolean | undefined
  productMatchDimensions?: ProductMatchDimension[] | undefined
  productMatchType?:
    | 'PRODUCT_MATCH_TYPE_UNSPECIFIED'
    | 'PRODUCT_MATCH_TYPE_ALL_PRODUCTS'
    | 'PRODUCT_MATCH_TYPE_SPECIFIC_PRODUCTS'
    | 'PRODUCT_MATCH_TYPE_CUSTOM_LABEL'
    | undefined
}
type YoutubeAdGroup = {
  adGroupFormat?:
    | 'YOUTUBE_AND_PARTNERS_AD_GROUP_FORMAT_UNSPECIFIED'
    | 'YOUTUBE_AND_PARTNERS_AD_GROUP_FORMAT_IN_STREAM'
    | 'YOUTUBE_AND_PARTNERS_AD_GROUP_FORMAT_VIDEO_DISCOVERY'
    | 'YOUTUBE_AND_PARTNERS_AD_GROUP_FORMAT_BUMPER'
    | 'YOUTUBE_AND_PARTNERS_AD_GROUP_FORMAT_NON_SKIPPABLE_IN_STREAM'
    | 'YOUTUBE_AND_PARTNERS_AD_GROUP_FORMAT_AUDIO'
    | 'YOUTUBE_AND_PARTNERS_AD_GROUP_FORMAT_ACTION'
    | 'YOUTUBE_AND_PARTNERS_AD_GROUP_FORMAT_REACH'
    | 'YOUTUBE_AND_PARTNERS_AD_GROUP_FORMAT_MASTHEAD'
    | undefined
  adGroupId?: string | undefined
  advertiserId?: string | undefined
  biddingStrategy?: YoutubeAndPartnersBiddingStrategy | undefined
  displayName?: string | undefined
  entityStatus?:
    | 'ENTITY_STATUS_UNSPECIFIED'
    | 'ENTITY_STATUS_ACTIVE'
    | 'ENTITY_STATUS_ARCHIVED'
    | 'ENTITY_STATUS_DRAFT'
    | 'ENTITY_STATUS_PAUSED'
    | 'ENTITY_STATUS_SCHEDULED_FOR_DELETION'
    | undefined
  lineItemId?: string | undefined
  name?: string | undefined
  productFeedData?: ProductFeedData | undefined
  targetingExpansion?: TargetingExpansionConfig | undefined
  youtubeAdIds?: string[] | undefined
}
type ListYoutubeAdGroupsResponse = {
  nextPageToken?: string | undefined
  youtubeAdGroups?: YoutubeAdGroup[] | undefined
}
type ListYoutubeAdGroupAssignedTargetingOptionsResponse = {
  assignedTargetingOptions?: AssignedTargetingOption[] | undefined
  nextPageToken?: string | undefined
}
type YoutubeAdGroupAssignedTargetingOption = {
  assignedTargetingOption?: AssignedTargetingOption | undefined
  youtubeAdGroupId?: string | undefined
}
type BulkListAdGroupAssignedTargetingOptionsResponse = {
  nextPageToken?: string | undefined
  youtubeAdGroupAssignedTargetingOptions?: YoutubeAdGroupAssignedTargetingOption[] | undefined
}
type AuditAdvertiserResponse = {
  adGroupCriteriaCount?: string | undefined
  campaignCriteriaCount?: string | undefined
  channelsCount?: string | undefined
  negativeKeywordListsCount?: string | undefined
  negativelyTargetedChannelsCount?: string | undefined
  usedCampaignsCount?: string | undefined
  usedInsertionOrdersCount?: string | undefined
  usedLineItemsCount?: string | undefined
}
type BulkEditAdvertiserAssignedTargetingOptionsRequest = {
  createRequests?: CreateAssignedTargetingOptionsRequest[] | undefined
  deleteRequests?: DeleteAssignedTargetingOptionsRequest[] | undefined
}
type BulkEditAdvertiserAssignedTargetingOptionsResponse = {
  createdAssignedTargetingOptions?: AssignedTargetingOption[] | undefined
}
type BulkListAdvertiserAssignedTargetingOptionsResponse = {
  assignedTargetingOptions?: AssignedTargetingOption[] | undefined
  nextPageToken?: string | undefined
}
type CombinedAudience = {
  combinedAudienceId?: string | undefined
  displayName?: string | undefined
  name?: string | undefined
}
type ListCombinedAudiencesResponse = {
  combinedAudiences?: CombinedAudience[] | undefined
  nextPageToken?: string | undefined
}
type CustomBiddingModelDetails = {
  advertiserId?: string | undefined
  readinessState?:
    | 'READINESS_STATE_UNSPECIFIED'
    | 'READINESS_STATE_ACTIVE'
    | 'READINESS_STATE_INSUFFICIENT_DATA'
    | 'READINESS_STATE_TRAINING'
    | 'READINESS_STATE_NO_VALID_SCRIPT'
    | undefined
  suspensionState?:
    | 'SUSPENSION_STATE_UNSPECIFIED'
    | 'SUSPENSION_STATE_ENABLED'
    | 'SUSPENSION_STATE_DORMANT'
    | 'SUSPENSION_STATE_SUSPENDED'
    | undefined
}
type CustomBiddingAlgorithm = {
  advertiserId?: string | undefined
  customBiddingAlgorithmId?: string | undefined
  customBiddingAlgorithmType?:
    | 'CUSTOM_BIDDING_ALGORITHM_TYPE_UNSPECIFIED'
    | 'SCRIPT_BASED'
    | 'ADS_DATA_HUB_BASED'
    | 'GOAL_BUILDER_BASED'
    | undefined
  displayName?: string | undefined
  entityStatus?:
    | 'ENTITY_STATUS_UNSPECIFIED'
    | 'ENTITY_STATUS_ACTIVE'
    | 'ENTITY_STATUS_ARCHIVED'
    | 'ENTITY_STATUS_DRAFT'
    | 'ENTITY_STATUS_PAUSED'
    | 'ENTITY_STATUS_SCHEDULED_FOR_DELETION'
    | undefined
  modelDetails?: CustomBiddingModelDetails[] | undefined
  name?: string | undefined
  partnerId?: string | undefined
  sharedAdvertiserIds?: string[] | undefined
}
type ListCustomBiddingAlgorithmsResponse = {
  customBiddingAlgorithms?: CustomBiddingAlgorithm[] | undefined
  nextPageToken?: string | undefined
}
type ScriptError = {
  column?: string | undefined
  errorCode?:
    | 'ERROR_CODE_UNSPECIFIED'
    | 'SYNTAX_ERROR'
    | 'DEPRECATED_SYNTAX'
    | 'INTERNAL_ERROR'
    | undefined
  errorMessage?: string | undefined
  line?: string | undefined
}
type CustomBiddingScriptRef = { resourceName?: string | undefined }
type CustomBiddingScript = {
  active?: boolean | undefined
  createTime?: string | undefined
  customBiddingAlgorithmId?: string | undefined
  customBiddingScriptId?: string | undefined
  errors?: ScriptError[] | undefined
  name?: string | undefined
  script?: CustomBiddingScriptRef | undefined
  state?: 'STATE_UNSPECIFIED' | 'ACCEPTED' | 'REJECTED' | 'PENDING' | undefined
}
type ListCustomBiddingScriptsResponse = {
  customBiddingScripts?: CustomBiddingScript[] | undefined
  nextPageToken?: string | undefined
}
type CustomList = {
  customListId?: string | undefined
  displayName?: string | undefined
  name?: string | undefined
}
type ListCustomListsResponse = {
  customLists?: CustomList[] | undefined
  nextPageToken?: string | undefined
}
type ContactInfo = {
  countryCode?: string | undefined
  hashedEmails?: string[] | undefined
  hashedFirstName?: string | undefined
  hashedLastName?: string | undefined
  hashedPhoneNumbers?: string[] | undefined
  zipCodes?: string[] | undefined
}
type ContactInfoList = { contactInfos?: ContactInfo[] | undefined }
type MobileDeviceIdList = { mobileDeviceIds?: string[] | undefined }
type FirstAndThirdPartyAudience = {
  activeDisplayAudienceSize?: string | undefined
  appId?: string | undefined
  audienceSource?:
    | 'AUDIENCE_SOURCE_UNSPECIFIED'
    | 'DISPLAY_VIDEO_360'
    | 'CAMPAIGN_MANAGER'
    | 'AD_MANAGER'
    | 'SEARCH_ADS_360'
    | 'YOUTUBE'
    | 'ADS_DATA_HUB'
    | undefined
  audienceType?:
    | 'AUDIENCE_TYPE_UNSPECIFIED'
    | 'CUSTOMER_MATCH_CONTACT_INFO'
    | 'CUSTOMER_MATCH_DEVICE_ID'
    | 'CUSTOMER_MATCH_USER_ID'
    | 'ACTIVITY_BASED'
    | 'FREQUENCY_CAP'
    | 'TAG_BASED'
    | 'YOUTUBE_USERS'
    | 'LICENSED'
    | undefined
  contactInfoList?: ContactInfoList | undefined
  description?: string | undefined
  displayAudienceSize?: string | undefined
  displayDesktopAudienceSize?: string | undefined
  displayMobileAppAudienceSize?: string | undefined
  displayMobileWebAudienceSize?: string | undefined
  displayName?: string | undefined
  firstAndThirdPartyAudienceId?: string | undefined
  firstAndThirdPartyAudienceType?:
    | 'FIRST_AND_THIRD_PARTY_AUDIENCE_TYPE_UNSPECIFIED'
    | 'FIRST_AND_THIRD_PARTY_AUDIENCE_TYPE_FIRST_PARTY'
    | 'FIRST_AND_THIRD_PARTY_AUDIENCE_TYPE_THIRD_PARTY'
    | undefined
  gmailAudienceSize?: string | undefined
  membershipDurationDays?: string | undefined
  mobileDeviceIdList?: MobileDeviceIdList | undefined
  name?: string | undefined
  youtubeAudienceSize?: string | undefined
}
type ListFirstAndThirdPartyAudiencesResponse = {
  firstAndThirdPartyAudiences?: FirstAndThirdPartyAudience[] | undefined
  nextPageToken?: string | undefined
}
type EditCustomerMatchMembersRequest = {
  addedContactInfoList?: ContactInfoList | undefined
  addedMobileDeviceIdList?: MobileDeviceIdList | undefined
  advertiserId?: string | undefined
}
type EditCustomerMatchMembersResponse = { firstAndThirdPartyAudienceId?: string | undefined }
type ActiveViewVideoViewabilityMetricConfig = {
  displayName?: string | undefined
  minimumDuration?:
    | 'VIDEO_DURATION_UNSPECIFIED'
    | 'VIDEO_DURATION_SECONDS_NONE'
    | 'VIDEO_DURATION_SECONDS_0'
    | 'VIDEO_DURATION_SECONDS_1'
    | 'VIDEO_DURATION_SECONDS_2'
    | 'VIDEO_DURATION_SECONDS_3'
    | 'VIDEO_DURATION_SECONDS_4'
    | 'VIDEO_DURATION_SECONDS_5'
    | 'VIDEO_DURATION_SECONDS_6'
    | 'VIDEO_DURATION_SECONDS_7'
    | 'VIDEO_DURATION_SECONDS_8'
    | 'VIDEO_DURATION_SECONDS_9'
    | 'VIDEO_DURATION_SECONDS_10'
    | 'VIDEO_DURATION_SECONDS_11'
    | 'VIDEO_DURATION_SECONDS_12'
    | 'VIDEO_DURATION_SECONDS_13'
    | 'VIDEO_DURATION_SECONDS_14'
    | 'VIDEO_DURATION_SECONDS_15'
    | 'VIDEO_DURATION_SECONDS_30'
    | 'VIDEO_DURATION_SECONDS_45'
    | 'VIDEO_DURATION_SECONDS_60'
    | undefined
  minimumQuartile?:
    | 'VIDEO_DURATION_QUARTILE_UNSPECIFIED'
    | 'VIDEO_DURATION_QUARTILE_NONE'
    | 'VIDEO_DURATION_QUARTILE_FIRST'
    | 'VIDEO_DURATION_QUARTILE_SECOND'
    | 'VIDEO_DURATION_QUARTILE_THIRD'
    | 'VIDEO_DURATION_QUARTILE_FOURTH'
    | undefined
  minimumViewability?:
    | 'VIEWABILITY_PERCENT_UNSPECIFIED'
    | 'VIEWABILITY_PERCENT_0'
    | 'VIEWABILITY_PERCENT_25'
    | 'VIEWABILITY_PERCENT_50'
    | 'VIEWABILITY_PERCENT_75'
    | 'VIEWABILITY_PERCENT_100'
    | undefined
  minimumVolume?:
    | 'VIDEO_VOLUME_PERCENT_UNSPECIFIED'
    | 'VIDEO_VOLUME_PERCENT_0'
    | 'VIDEO_VOLUME_PERCENT_10'
    | undefined
}
type LookbackWindow = { clickDays?: number | undefined; impressionDays?: number | undefined }
type FloodlightGroup = {
  activeViewConfig?: ActiveViewVideoViewabilityMetricConfig | undefined
  customVariables?: { [x: string]: { [x: string]: unknown } } | undefined
  displayName?: string | undefined
  floodlightGroupId?: string | undefined
  lookbackWindow?: LookbackWindow | undefined
  name?: string | undefined
  webTagType?:
    | 'WEB_TAG_TYPE_UNSPECIFIED'
    | 'WEB_TAG_TYPE_NONE'
    | 'WEB_TAG_TYPE_IMAGE'
    | 'WEB_TAG_TYPE_DYNAMIC'
    | undefined
}
type GoogleAudience = {
  displayName?: string | undefined
  googleAudienceId?: string | undefined
  googleAudienceType?:
    | 'GOOGLE_AUDIENCE_TYPE_UNSPECIFIED'
    | 'GOOGLE_AUDIENCE_TYPE_AFFINITY'
    | 'GOOGLE_AUDIENCE_TYPE_IN_MARKET'
    | 'GOOGLE_AUDIENCE_TYPE_INSTALLED_APPS'
    | 'GOOGLE_AUDIENCE_TYPE_NEW_MOBILE_DEVICES'
    | 'GOOGLE_AUDIENCE_TYPE_LIFE_EVENT'
    | 'GOOGLE_AUDIENCE_TYPE_EXTENDED_DEMOGRAPHIC'
    | undefined
  name?: string | undefined
}
type ListGoogleAudiencesResponse = {
  googleAudiences?: GoogleAudience[] | undefined
  nextPageToken?: string | undefined
}
type GuaranteedOrderStatus = {
  configStatus?: 'GUARANTEED_ORDER_CONFIG_STATUS_UNSPECIFIED' | 'PENDING' | 'COMPLETED' | undefined
  entityPauseReason?: string | undefined
  entityStatus?:
    | 'ENTITY_STATUS_UNSPECIFIED'
    | 'ENTITY_STATUS_ACTIVE'
    | 'ENTITY_STATUS_ARCHIVED'
    | 'ENTITY_STATUS_DRAFT'
    | 'ENTITY_STATUS_PAUSED'
    | 'ENTITY_STATUS_SCHEDULED_FOR_DELETION'
    | undefined
}
type GuaranteedOrder = {
  defaultAdvertiserId?: string | undefined
  defaultCampaignId?: string | undefined
  displayName?: string | undefined
  exchange?:
    | 'EXCHANGE_UNSPECIFIED'
    | 'EXCHANGE_GOOGLE_AD_MANAGER'
    | 'EXCHANGE_APPNEXUS'
    | 'EXCHANGE_BRIGHTROLL'
    | 'EXCHANGE_ADFORM'
    | 'EXCHANGE_ADMETA'
    | 'EXCHANGE_ADMIXER'
    | 'EXCHANGE_ADSMOGO'
    | 'EXCHANGE_ADSWIZZ'
    | 'EXCHANGE_BIDSWITCH'
    | 'EXCHANGE_BRIGHTROLL_DISPLAY'
    | 'EXCHANGE_CADREON'
    | 'EXCHANGE_DAILYMOTION'
    | 'EXCHANGE_FIVE'
    | 'EXCHANGE_FLUCT'
    | 'EXCHANGE_FREEWHEEL'
    | 'EXCHANGE_GENIEE'
    | 'EXCHANGE_GUMGUM'
    | 'EXCHANGE_IMOBILE'
    | 'EXCHANGE_IBILLBOARD'
    | 'EXCHANGE_IMPROVE_DIGITAL'
    | 'EXCHANGE_INDEX'
    | 'EXCHANGE_KARGO'
    | 'EXCHANGE_MICROAD'
    | 'EXCHANGE_MOPUB'
    | 'EXCHANGE_NEND'
    | 'EXCHANGE_ONE_BY_AOL_DISPLAY'
    | 'EXCHANGE_ONE_BY_AOL_MOBILE'
    | 'EXCHANGE_ONE_BY_AOL_VIDEO'
    | 'EXCHANGE_OOYALA'
    | 'EXCHANGE_OPENX'
    | 'EXCHANGE_PERMODO'
    | 'EXCHANGE_PLATFORMONE'
    | 'EXCHANGE_PLATFORMID'
    | 'EXCHANGE_PUBMATIC'
    | 'EXCHANGE_PULSEPOINT'
    | 'EXCHANGE_REVENUEMAX'
    | 'EXCHANGE_RUBICON'
    | 'EXCHANGE_SMARTCLIP'
    | 'EXCHANGE_SMARTRTB'
    | 'EXCHANGE_SMARTSTREAMTV'
    | 'EXCHANGE_SOVRN'
    | 'EXCHANGE_SPOTXCHANGE'
    | 'EXCHANGE_STROER'
    | 'EXCHANGE_TEADSTV'
    | 'EXCHANGE_TELARIA'
    | 'EXCHANGE_TVN'
    | 'EXCHANGE_UNITED'
    | 'EXCHANGE_YIELDLAB'
    | 'EXCHANGE_YIELDMO'
    | 'EXCHANGE_UNRULYX'
    | 'EXCHANGE_OPEN8'
    | 'EXCHANGE_TRITON'
    | 'EXCHANGE_TRIPLELIFT'
    | 'EXCHANGE_TABOOLA'
    | 'EXCHANGE_INMOBI'
    | 'EXCHANGE_SMAATO'
    | 'EXCHANGE_AJA'
    | 'EXCHANGE_SUPERSHIP'
    | 'EXCHANGE_NEXSTAR_DIGITAL'
    | 'EXCHANGE_WAZE'
    | 'EXCHANGE_SOUNDCAST'
    | 'EXCHANGE_SHARETHROUGH'
    | 'EXCHANGE_FYBER'
    | 'EXCHANGE_RED_FOR_PUBLISHERS'
    | 'EXCHANGE_MEDIANET'
    | 'EXCHANGE_TAPJOY'
    | 'EXCHANGE_VISTAR'
    | 'EXCHANGE_DAX'
    | 'EXCHANGE_JCD'
    | 'EXCHANGE_PLACE_EXCHANGE'
    | 'EXCHANGE_APPLOVIN'
    | 'EXCHANGE_CONNATIX'
    | 'EXCHANGE_RESET_DIGITAL'
    | 'EXCHANGE_HIVESTACK'
    | undefined
  guaranteedOrderId?: string | undefined
  legacyGuaranteedOrderId?: string | undefined
  name?: string | undefined
  publisherName?: string | undefined
  readAccessInherited?: boolean | undefined
  readAdvertiserIds?: string[] | undefined
  readWriteAdvertiserId?: string | undefined
  readWritePartnerId?: string | undefined
  status?: GuaranteedOrderStatus | undefined
  updateTime?: string | undefined
}
type ListGuaranteedOrdersResponse = {
  guaranteedOrders?: GuaranteedOrder[] | undefined
  nextPageToken?: string | undefined
}
type EditGuaranteedOrderReadAccessorsRequest = {
  addedAdvertisers?: string[] | undefined
  partnerId?: string | undefined
  readAccessInherited?: boolean | undefined
  removedAdvertisers?: string[] | undefined
}
type EditGuaranteedOrderReadAccessorsResponse = {
  readAccessInherited?: boolean | undefined
  readAdvertiserIds?: string[] | undefined
}
type InventorySourceGroup = {
  displayName?: string | undefined
  inventorySourceGroupId?: string | undefined
  name?: string | undefined
}
type ListInventorySourceGroupsResponse = {
  inventorySourceGroups?: InventorySourceGroup[] | undefined
  nextPageToken?: string | undefined
}
type AssignedInventorySource = {
  assignedInventorySourceId?: string | undefined
  inventorySourceId?: string | undefined
  name?: string | undefined
}
type ListAssignedInventorySourcesResponse = {
  assignedInventorySources?: AssignedInventorySource[] | undefined
  nextPageToken?: string | undefined
}
type BulkEditAssignedInventorySourcesRequest = {
  advertiserId?: string | undefined
  createdAssignedInventorySources?: AssignedInventorySource[] | undefined
  deletedAssignedInventorySources?: string[] | undefined
  partnerId?: string | undefined
}
type BulkEditAssignedInventorySourcesResponse = {
  assignedInventorySources?: AssignedInventorySource[] | undefined
}
type InventorySourceDisplayCreativeConfig = { creativeSize?: Dimensions | undefined }
type InventorySourceVideoCreativeConfig = { duration?: string | undefined }
type CreativeConfig = {
  creativeType?:
    | 'CREATIVE_TYPE_UNSPECIFIED'
    | 'CREATIVE_TYPE_STANDARD'
    | 'CREATIVE_TYPE_EXPANDABLE'
    | 'CREATIVE_TYPE_VIDEO'
    | 'CREATIVE_TYPE_NATIVE'
    | 'CREATIVE_TYPE_TEMPLATED_APP_INSTALL'
    | 'CREATIVE_TYPE_NATIVE_SITE_SQUARE'
    | 'CREATIVE_TYPE_TEMPLATED_APP_INSTALL_INTERSTITIAL'
    | 'CREATIVE_TYPE_LIGHTBOX'
    | 'CREATIVE_TYPE_NATIVE_APP_INSTALL'
    | 'CREATIVE_TYPE_NATIVE_APP_INSTALL_SQUARE'
    | 'CREATIVE_TYPE_AUDIO'
    | 'CREATIVE_TYPE_PUBLISHER_HOSTED'
    | 'CREATIVE_TYPE_NATIVE_VIDEO'
    | 'CREATIVE_TYPE_TEMPLATED_APP_INSTALL_VIDEO'
    | undefined
  displayCreativeConfig?: InventorySourceDisplayCreativeConfig | undefined
  videoCreativeConfig?: InventorySourceVideoCreativeConfig | undefined
}
type Money = {
  currencyCode?: string | undefined
  nanos?: number | undefined
  units?: string | undefined
}
type RateDetails = {
  inventorySourceRateType?:
    | 'INVENTORY_SOURCE_RATE_TYPE_UNSPECIFIED'
    | 'INVENTORY_SOURCE_RATE_TYPE_CPM_FIXED'
    | 'INVENTORY_SOURCE_RATE_TYPE_CPM_FLOOR'
    | 'INVENTORY_SOURCE_RATE_TYPE_CPD'
    | 'INVENTORY_SOURCE_RATE_TYPE_FLAT'
    | undefined
  minimumSpend?: Money | undefined
  rate?: Money | undefined
  unitsPurchased?: string | undefined
}
type InventorySourceAccessorsAdvertiserAccessors = { advertiserIds?: string[] | undefined }
type InventorySourceAccessorsPartnerAccessor = { partnerId?: string | undefined }
type InventorySourceAccessors = {
  advertisers?: InventorySourceAccessorsAdvertiserAccessors | undefined
  partner?: InventorySourceAccessorsPartnerAccessor | undefined
}
type InventorySourceStatus = {
  configStatus?:
    | 'INVENTORY_SOURCE_CONFIG_STATUS_UNSPECIFIED'
    | 'INVENTORY_SOURCE_CONFIG_STATUS_PENDING'
    | 'INVENTORY_SOURCE_CONFIG_STATUS_COMPLETED'
    | undefined
  entityPauseReason?: string | undefined
  entityStatus?:
    | 'ENTITY_STATUS_UNSPECIFIED'
    | 'ENTITY_STATUS_ACTIVE'
    | 'ENTITY_STATUS_ARCHIVED'
    | 'ENTITY_STATUS_DRAFT'
    | 'ENTITY_STATUS_PAUSED'
    | 'ENTITY_STATUS_SCHEDULED_FOR_DELETION'
    | undefined
  sellerPauseReason?: string | undefined
  sellerStatus?:
    | 'ENTITY_STATUS_UNSPECIFIED'
    | 'ENTITY_STATUS_ACTIVE'
    | 'ENTITY_STATUS_ARCHIVED'
    | 'ENTITY_STATUS_DRAFT'
    | 'ENTITY_STATUS_PAUSED'
    | 'ENTITY_STATUS_SCHEDULED_FOR_DELETION'
    | undefined
}
type TimeRange = { endTime?: string | undefined; startTime?: string | undefined }
type InventorySource = {
  commitment?:
    | 'INVENTORY_SOURCE_COMMITMENT_UNSPECIFIED'
    | 'INVENTORY_SOURCE_COMMITMENT_GUARANTEED'
    | 'INVENTORY_SOURCE_COMMITMENT_NON_GUARANTEED'
    | undefined
  creativeConfigs?: CreativeConfig[] | undefined
  dealId?: string | undefined
  deliveryMethod?:
    | 'INVENTORY_SOURCE_DELIVERY_METHOD_UNSPECIFIED'
    | 'INVENTORY_SOURCE_DELIVERY_METHOD_PROGRAMMATIC'
    | 'INVENTORY_SOURCE_DELIVERY_METHOD_TAG'
    | undefined
  displayName?: string | undefined
  exchange?:
    | 'EXCHANGE_UNSPECIFIED'
    | 'EXCHANGE_GOOGLE_AD_MANAGER'
    | 'EXCHANGE_APPNEXUS'
    | 'EXCHANGE_BRIGHTROLL'
    | 'EXCHANGE_ADFORM'
    | 'EXCHANGE_ADMETA'
    | 'EXCHANGE_ADMIXER'
    | 'EXCHANGE_ADSMOGO'
    | 'EXCHANGE_ADSWIZZ'
    | 'EXCHANGE_BIDSWITCH'
    | 'EXCHANGE_BRIGHTROLL_DISPLAY'
    | 'EXCHANGE_CADREON'
    | 'EXCHANGE_DAILYMOTION'
    | 'EXCHANGE_FIVE'
    | 'EXCHANGE_FLUCT'
    | 'EXCHANGE_FREEWHEEL'
    | 'EXCHANGE_GENIEE'
    | 'EXCHANGE_GUMGUM'
    | 'EXCHANGE_IMOBILE'
    | 'EXCHANGE_IBILLBOARD'
    | 'EXCHANGE_IMPROVE_DIGITAL'
    | 'EXCHANGE_INDEX'
    | 'EXCHANGE_KARGO'
    | 'EXCHANGE_MICROAD'
    | 'EXCHANGE_MOPUB'
    | 'EXCHANGE_NEND'
    | 'EXCHANGE_ONE_BY_AOL_DISPLAY'
    | 'EXCHANGE_ONE_BY_AOL_MOBILE'
    | 'EXCHANGE_ONE_BY_AOL_VIDEO'
    | 'EXCHANGE_OOYALA'
    | 'EXCHANGE_OPENX'
    | 'EXCHANGE_PERMODO'
    | 'EXCHANGE_PLATFORMONE'
    | 'EXCHANGE_PLATFORMID'
    | 'EXCHANGE_PUBMATIC'
    | 'EXCHANGE_PULSEPOINT'
    | 'EXCHANGE_REVENUEMAX'
    | 'EXCHANGE_RUBICON'
    | 'EXCHANGE_SMARTCLIP'
    | 'EXCHANGE_SMARTRTB'
    | 'EXCHANGE_SMARTSTREAMTV'
    | 'EXCHANGE_SOVRN'
    | 'EXCHANGE_SPOTXCHANGE'
    | 'EXCHANGE_STROER'
    | 'EXCHANGE_TEADSTV'
    | 'EXCHANGE_TELARIA'
    | 'EXCHANGE_TVN'
    | 'EXCHANGE_UNITED'
    | 'EXCHANGE_YIELDLAB'
    | 'EXCHANGE_YIELDMO'
    | 'EXCHANGE_UNRULYX'
    | 'EXCHANGE_OPEN8'
    | 'EXCHANGE_TRITON'
    | 'EXCHANGE_TRIPLELIFT'
    | 'EXCHANGE_TABOOLA'
    | 'EXCHANGE_INMOBI'
    | 'EXCHANGE_SMAATO'
    | 'EXCHANGE_AJA'
    | 'EXCHANGE_SUPERSHIP'
    | 'EXCHANGE_NEXSTAR_DIGITAL'
    | 'EXCHANGE_WAZE'
    | 'EXCHANGE_SOUNDCAST'
    | 'EXCHANGE_SHARETHROUGH'
    | 'EXCHANGE_FYBER'
    | 'EXCHANGE_RED_FOR_PUBLISHERS'
    | 'EXCHANGE_MEDIANET'
    | 'EXCHANGE_TAPJOY'
    | 'EXCHANGE_VISTAR'
    | 'EXCHANGE_DAX'
    | 'EXCHANGE_JCD'
    | 'EXCHANGE_PLACE_EXCHANGE'
    | 'EXCHANGE_APPLOVIN'
    | 'EXCHANGE_CONNATIX'
    | 'EXCHANGE_RESET_DIGITAL'
    | 'EXCHANGE_HIVESTACK'
    | undefined
  guaranteedOrderId?: string | undefined
  inventorySourceId?: string | undefined
  inventorySourceProductType?:
    | 'INVENTORY_SOURCE_PRODUCT_TYPE_UNSPECIFIED'
    | 'PREFERRED_DEAL'
    | 'PRIVATE_AUCTION'
    | 'PROGRAMMATIC_GUARANTEED'
    | 'TAG_GUARANTEED'
    | 'YOUTUBE_RESERVE'
    | 'INSTANT_RESERVE'
    | 'GUARANTEED_PACKAGE'
    | 'PROGRAMMATIC_TV'
    | 'AUCTION_PACKAGE'
    | undefined
  inventorySourceType?:
    | 'INVENTORY_SOURCE_TYPE_UNSPECIFIED'
    | 'INVENTORY_SOURCE_TYPE_PRIVATE'
    | 'INVENTORY_SOURCE_TYPE_AUCTION_PACKAGE'
    | undefined
  name?: string | undefined
  publisherName?: string | undefined
  rateDetails?: RateDetails | undefined
  readAdvertiserIds?: string[] | undefined
  readPartnerIds?: string[] | undefined
  readWriteAccessors?: InventorySourceAccessors | undefined
  status?: InventorySourceStatus | undefined
  subSitePropertyId?: string | undefined
  timeRange?: TimeRange | undefined
  updateTime?: string | undefined
}
type ListInventorySourcesResponse = {
  inventorySources?: InventorySource[] | undefined
  nextPageToken?: string | undefined
}
type EditInventorySourceReadWriteAccessorsRequestAdvertisersUpdate = {
  addedAdvertisers?: string[] | undefined
  removedAdvertisers?: string[] | undefined
}
type EditInventorySourceReadWriteAccessorsRequest = {
  advertisersUpdate?: EditInventorySourceReadWriteAccessorsRequestAdvertisersUpdate | undefined
  assignPartner?: boolean | undefined
  partnerId?: string | undefined
}
type MeasurementConfig = {
  dv360ToCmCostReportingEnabled?: boolean | undefined
  dv360ToCmDataSharingEnabled?: boolean | undefined
}
type PartnerAdServerConfig = { measurementConfig?: MeasurementConfig | undefined }
type PartnerDataAccessConfig = { sdfConfig?: SdfConfig | undefined }
type ExchangeConfigEnabledExchange = {
  exchange?:
    | 'EXCHANGE_UNSPECIFIED'
    | 'EXCHANGE_GOOGLE_AD_MANAGER'
    | 'EXCHANGE_APPNEXUS'
    | 'EXCHANGE_BRIGHTROLL'
    | 'EXCHANGE_ADFORM'
    | 'EXCHANGE_ADMETA'
    | 'EXCHANGE_ADMIXER'
    | 'EXCHANGE_ADSMOGO'
    | 'EXCHANGE_ADSWIZZ'
    | 'EXCHANGE_BIDSWITCH'
    | 'EXCHANGE_BRIGHTROLL_DISPLAY'
    | 'EXCHANGE_CADREON'
    | 'EXCHANGE_DAILYMOTION'
    | 'EXCHANGE_FIVE'
    | 'EXCHANGE_FLUCT'
    | 'EXCHANGE_FREEWHEEL'
    | 'EXCHANGE_GENIEE'
    | 'EXCHANGE_GUMGUM'
    | 'EXCHANGE_IMOBILE'
    | 'EXCHANGE_IBILLBOARD'
    | 'EXCHANGE_IMPROVE_DIGITAL'
    | 'EXCHANGE_INDEX'
    | 'EXCHANGE_KARGO'
    | 'EXCHANGE_MICROAD'
    | 'EXCHANGE_MOPUB'
    | 'EXCHANGE_NEND'
    | 'EXCHANGE_ONE_BY_AOL_DISPLAY'
    | 'EXCHANGE_ONE_BY_AOL_MOBILE'
    | 'EXCHANGE_ONE_BY_AOL_VIDEO'
    | 'EXCHANGE_OOYALA'
    | 'EXCHANGE_OPENX'
    | 'EXCHANGE_PERMODO'
    | 'EXCHANGE_PLATFORMONE'
    | 'EXCHANGE_PLATFORMID'
    | 'EXCHANGE_PUBMATIC'
    | 'EXCHANGE_PULSEPOINT'
    | 'EXCHANGE_REVENUEMAX'
    | 'EXCHANGE_RUBICON'
    | 'EXCHANGE_SMARTCLIP'
    | 'EXCHANGE_SMARTRTB'
    | 'EXCHANGE_SMARTSTREAMTV'
    | 'EXCHANGE_SOVRN'
    | 'EXCHANGE_SPOTXCHANGE'
    | 'EXCHANGE_STROER'
    | 'EXCHANGE_TEADSTV'
    | 'EXCHANGE_TELARIA'
    | 'EXCHANGE_TVN'
    | 'EXCHANGE_UNITED'
    | 'EXCHANGE_YIELDLAB'
    | 'EXCHANGE_YIELDMO'
    | 'EXCHANGE_UNRULYX'
    | 'EXCHANGE_OPEN8'
    | 'EXCHANGE_TRITON'
    | 'EXCHANGE_TRIPLELIFT'
    | 'EXCHANGE_TABOOLA'
    | 'EXCHANGE_INMOBI'
    | 'EXCHANGE_SMAATO'
    | 'EXCHANGE_AJA'
    | 'EXCHANGE_SUPERSHIP'
    | 'EXCHANGE_NEXSTAR_DIGITAL'
    | 'EXCHANGE_WAZE'
    | 'EXCHANGE_SOUNDCAST'
    | 'EXCHANGE_SHARETHROUGH'
    | 'EXCHANGE_FYBER'
    | 'EXCHANGE_RED_FOR_PUBLISHERS'
    | 'EXCHANGE_MEDIANET'
    | 'EXCHANGE_TAPJOY'
    | 'EXCHANGE_VISTAR'
    | 'EXCHANGE_DAX'
    | 'EXCHANGE_JCD'
    | 'EXCHANGE_PLACE_EXCHANGE'
    | 'EXCHANGE_APPLOVIN'
    | 'EXCHANGE_CONNATIX'
    | 'EXCHANGE_RESET_DIGITAL'
    | 'EXCHANGE_HIVESTACK'
    | undefined
  googleAdManagerAgencyId?: string | undefined
  googleAdManagerBuyerNetworkId?: string | undefined
  seatId?: string | undefined
}
type ExchangeConfig = { enabledExchanges?: ExchangeConfigEnabledExchange[] | undefined }
type PartnerGeneralConfig = { currencyCode?: string | undefined; timeZone?: string | undefined }
type Partner = {
  adServerConfig?: PartnerAdServerConfig | undefined
  dataAccessConfig?: PartnerDataAccessConfig | undefined
  displayName?: string | undefined
  entityStatus?:
    | 'ENTITY_STATUS_UNSPECIFIED'
    | 'ENTITY_STATUS_ACTIVE'
    | 'ENTITY_STATUS_ARCHIVED'
    | 'ENTITY_STATUS_DRAFT'
    | 'ENTITY_STATUS_PAUSED'
    | 'ENTITY_STATUS_SCHEDULED_FOR_DELETION'
    | undefined
  exchangeConfig?: ExchangeConfig | undefined
  generalConfig?: PartnerGeneralConfig | undefined
  name?: string | undefined
  partnerId?: string | undefined
  updateTime?: string | undefined
}
type ListPartnersResponse = { nextPageToken?: string | undefined; partners?: Partner[] | undefined }
type ListPartnerAssignedTargetingOptionsResponse = {
  assignedTargetingOptions?: AssignedTargetingOption[] | undefined
  nextPageToken?: string | undefined
}
type BulkEditPartnerAssignedTargetingOptionsRequest = {
  createRequests?: CreateAssignedTargetingOptionsRequest[] | undefined
  deleteRequests?: DeleteAssignedTargetingOptionsRequest[] | undefined
}
type BulkEditPartnerAssignedTargetingOptionsResponse = {
  createdAssignedTargetingOptions?: AssignedTargetingOption[] | undefined
}
type IdFilter = {
  adGroupAdIds?: string[] | undefined
  adGroupIds?: string[] | undefined
  campaignIds?: string[] | undefined
  insertionOrderIds?: string[] | undefined
  lineItemIds?: string[] | undefined
  mediaProductIds?: string[] | undefined
}
type InventorySourceFilter = { inventorySourceIds?: string[] | undefined }
type ParentEntityFilter = {
  fileType?:
    | (
        | 'FILE_TYPE_UNSPECIFIED'
        | 'FILE_TYPE_CAMPAIGN'
        | 'FILE_TYPE_MEDIA_PRODUCT'
        | 'FILE_TYPE_INSERTION_ORDER'
        | 'FILE_TYPE_LINE_ITEM'
        | 'FILE_TYPE_AD_GROUP'
        | 'FILE_TYPE_AD'
      )[]
    | undefined
  filterIds?: string[] | undefined
  filterType?:
    | 'FILTER_TYPE_UNSPECIFIED'
    | 'FILTER_TYPE_NONE'
    | 'FILTER_TYPE_ADVERTISER_ID'
    | 'FILTER_TYPE_CAMPAIGN_ID'
    | 'FILTER_TYPE_MEDIA_PRODUCT_ID'
    | 'FILTER_TYPE_INSERTION_ORDER_ID'
    | 'FILTER_TYPE_LINE_ITEM_ID'
    | undefined
}
type CreateSdfDownloadTaskRequest = {
  advertiserId?: string | undefined
  idFilter?: IdFilter | undefined
  inventorySourceFilter?: InventorySourceFilter | undefined
  parentEntityFilter?: ParentEntityFilter | undefined
  partnerId?: string | undefined
  version?:
    | 'SDF_VERSION_UNSPECIFIED'
    | 'SDF_VERSION_3_1'
    | 'SDF_VERSION_4'
    | 'SDF_VERSION_4_1'
    | 'SDF_VERSION_4_2'
    | 'SDF_VERSION_5'
    | 'SDF_VERSION_5_1'
    | 'SDF_VERSION_5_2'
    | 'SDF_VERSION_5_3'
    | 'SDF_VERSION_5_4'
    | 'SDF_VERSION_5_5'
    | undefined
}
type Operation = {
  done?: boolean | undefined
  error?: Status | undefined
  metadata?: { [x: string]: { [x: string]: unknown } } | undefined
  name?: string | undefined
  response?: { [x: string]: { [x: string]: unknown } } | undefined
}
type AgeRangeTargetingOptionDetails = {
  ageRange?:
    | 'AGE_RANGE_UNSPECIFIED'
    | 'AGE_RANGE_18_24'
    | 'AGE_RANGE_25_34'
    | 'AGE_RANGE_35_44'
    | 'AGE_RANGE_45_54'
    | 'AGE_RANGE_55_64'
    | 'AGE_RANGE_65_PLUS'
    | 'AGE_RANGE_UNKNOWN'
    | 'AGE_RANGE_18_20'
    | 'AGE_RANGE_21_24'
    | 'AGE_RANGE_25_29'
    | 'AGE_RANGE_30_34'
    | 'AGE_RANGE_35_39'
    | 'AGE_RANGE_40_44'
    | 'AGE_RANGE_45_49'
    | 'AGE_RANGE_50_54'
    | 'AGE_RANGE_55_59'
    | 'AGE_RANGE_60_64'
    | undefined
}
type AppCategoryTargetingOptionDetails = { displayName?: string | undefined }
type AudioContentTypeTargetingOptionDetails = {
  audioContentType?:
    | 'AUDIO_CONTENT_TYPE_UNSPECIFIED'
    | 'AUDIO_CONTENT_TYPE_UNKNOWN'
    | 'AUDIO_CONTENT_TYPE_MUSIC'
    | 'AUDIO_CONTENT_TYPE_BROADCAST'
    | 'AUDIO_CONTENT_TYPE_PODCAST'
    | undefined
}
type AuthorizedSellerStatusTargetingOptionDetails = {
  authorizedSellerStatus?:
    | 'AUTHORIZED_SELLER_STATUS_UNSPECIFIED'
    | 'AUTHORIZED_SELLER_STATUS_AUTHORIZED_DIRECT_SELLERS_ONLY'
    | 'AUTHORIZED_SELLER_STATUS_AUTHORIZED_AND_NON_PARTICIPATING_PUBLISHERS'
    | undefined
}
type BrowserTargetingOptionDetails = { displayName?: string | undefined }
type BusinessChainTargetingOptionDetails = {
  businessChain?: string | undefined
  geoRegion?: string | undefined
  geoRegionType?:
    | 'GEO_REGION_TYPE_UNKNOWN'
    | 'GEO_REGION_TYPE_OTHER'
    | 'GEO_REGION_TYPE_COUNTRY'
    | 'GEO_REGION_TYPE_REGION'
    | 'GEO_REGION_TYPE_TERRITORY'
    | 'GEO_REGION_TYPE_PROVINCE'
    | 'GEO_REGION_TYPE_STATE'
    | 'GEO_REGION_TYPE_PREFECTURE'
    | 'GEO_REGION_TYPE_GOVERNORATE'
    | 'GEO_REGION_TYPE_CANTON'
    | 'GEO_REGION_TYPE_UNION_TERRITORY'
    | 'GEO_REGION_TYPE_AUTONOMOUS_COMMUNITY'
    | 'GEO_REGION_TYPE_DMA_REGION'
    | 'GEO_REGION_TYPE_METRO'
    | 'GEO_REGION_TYPE_CONGRESSIONAL_DISTRICT'
    | 'GEO_REGION_TYPE_COUNTY'
    | 'GEO_REGION_TYPE_MUNICIPALITY'
    | 'GEO_REGION_TYPE_CITY'
    | 'GEO_REGION_TYPE_POSTAL_CODE'
    | 'GEO_REGION_TYPE_DEPARTMENT'
    | 'GEO_REGION_TYPE_AIRPORT'
    | 'GEO_REGION_TYPE_TV_REGION'
    | 'GEO_REGION_TYPE_OKRUG'
    | 'GEO_REGION_TYPE_BOROUGH'
    | 'GEO_REGION_TYPE_CITY_REGION'
    | 'GEO_REGION_TYPE_ARRONDISSEMENT'
    | 'GEO_REGION_TYPE_NEIGHBORHOOD'
    | 'GEO_REGION_TYPE_UNIVERSITY'
    | 'GEO_REGION_TYPE_DISTRICT'
    | undefined
}
type CarrierAndIspTargetingOptionDetails = {
  displayName?: string | undefined
  type?:
    | 'CARRIER_AND_ISP_TYPE_UNSPECIFIED'
    | 'CARRIER_AND_ISP_TYPE_ISP'
    | 'CARRIER_AND_ISP_TYPE_CARRIER'
    | undefined
}
type CategoryTargetingOptionDetails = { displayName?: string | undefined }
type ContentDurationTargetingOptionDetails = {
  contentDuration?:
    | 'CONTENT_DURATION_UNSPECIFIED'
    | 'CONTENT_DURATION_UNKNOWN'
    | 'CONTENT_DURATION_0_TO_1_MIN'
    | 'CONTENT_DURATION_1_TO_5_MIN'
    | 'CONTENT_DURATION_5_TO_15_MIN'
    | 'CONTENT_DURATION_15_TO_30_MIN'
    | 'CONTENT_DURATION_30_TO_60_MIN'
    | 'CONTENT_DURATION_OVER_60_MIN'
    | undefined
}
type ContentGenreTargetingOptionDetails = { displayName?: string | undefined }
type ContentInstreamPositionTargetingOptionDetails = {
  contentInstreamPosition?:
    | 'CONTENT_INSTREAM_POSITION_UNSPECIFIED'
    | 'CONTENT_INSTREAM_POSITION_PRE_ROLL'
    | 'CONTENT_INSTREAM_POSITION_MID_ROLL'
    | 'CONTENT_INSTREAM_POSITION_POST_ROLL'
    | 'CONTENT_INSTREAM_POSITION_UNKNOWN'
    | undefined
}
type ContentOutstreamPositionTargetingOptionDetails = {
  contentOutstreamPosition?:
    | 'CONTENT_OUTSTREAM_POSITION_UNSPECIFIED'
    | 'CONTENT_OUTSTREAM_POSITION_UNKNOWN'
    | 'CONTENT_OUTSTREAM_POSITION_IN_ARTICLE'
    | 'CONTENT_OUTSTREAM_POSITION_IN_BANNER'
    | 'CONTENT_OUTSTREAM_POSITION_IN_FEED'
    | 'CONTENT_OUTSTREAM_POSITION_INTERSTITIAL'
    | undefined
}
type ContentStreamTypeTargetingOptionDetails = {
  contentStreamType?:
    | 'CONTENT_STREAM_TYPE_UNSPECIFIED'
    | 'CONTENT_LIVE_STREAM'
    | 'CONTENT_ON_DEMAND'
    | undefined
}
type DeviceMakeModelTargetingOptionDetails = { displayName?: string | undefined }
type DeviceTypeTargetingOptionDetails = {
  deviceType?:
    | 'DEVICE_TYPE_UNSPECIFIED'
    | 'DEVICE_TYPE_COMPUTER'
    | 'DEVICE_TYPE_CONNECTED_TV'
    | 'DEVICE_TYPE_SMART_PHONE'
    | 'DEVICE_TYPE_TABLET'
    | undefined
}
type DigitalContentLabelTargetingOptionDetails = {
  contentRatingTier?:
    | 'CONTENT_RATING_TIER_UNSPECIFIED'
    | 'CONTENT_RATING_TIER_UNRATED'
    | 'CONTENT_RATING_TIER_GENERAL'
    | 'CONTENT_RATING_TIER_PARENTAL_GUIDANCE'
    | 'CONTENT_RATING_TIER_TEENS'
    | 'CONTENT_RATING_TIER_MATURE'
    | 'CONTENT_RATING_TIER_FAMILIES'
    | undefined
}
type EnvironmentTargetingOptionDetails = {
  environment?:
    | 'ENVIRONMENT_UNSPECIFIED'
    | 'ENVIRONMENT_WEB_OPTIMIZED'
    | 'ENVIRONMENT_WEB_NOT_OPTIMIZED'
    | 'ENVIRONMENT_APP'
    | undefined
}
type ExchangeTargetingOptionDetails = {
  exchange?:
    | 'EXCHANGE_UNSPECIFIED'
    | 'EXCHANGE_GOOGLE_AD_MANAGER'
    | 'EXCHANGE_APPNEXUS'
    | 'EXCHANGE_BRIGHTROLL'
    | 'EXCHANGE_ADFORM'
    | 'EXCHANGE_ADMETA'
    | 'EXCHANGE_ADMIXER'
    | 'EXCHANGE_ADSMOGO'
    | 'EXCHANGE_ADSWIZZ'
    | 'EXCHANGE_BIDSWITCH'
    | 'EXCHANGE_BRIGHTROLL_DISPLAY'
    | 'EXCHANGE_CADREON'
    | 'EXCHANGE_DAILYMOTION'
    | 'EXCHANGE_FIVE'
    | 'EXCHANGE_FLUCT'
    | 'EXCHANGE_FREEWHEEL'
    | 'EXCHANGE_GENIEE'
    | 'EXCHANGE_GUMGUM'
    | 'EXCHANGE_IMOBILE'
    | 'EXCHANGE_IBILLBOARD'
    | 'EXCHANGE_IMPROVE_DIGITAL'
    | 'EXCHANGE_INDEX'
    | 'EXCHANGE_KARGO'
    | 'EXCHANGE_MICROAD'
    | 'EXCHANGE_MOPUB'
    | 'EXCHANGE_NEND'
    | 'EXCHANGE_ONE_BY_AOL_DISPLAY'
    | 'EXCHANGE_ONE_BY_AOL_MOBILE'
    | 'EXCHANGE_ONE_BY_AOL_VIDEO'
    | 'EXCHANGE_OOYALA'
    | 'EXCHANGE_OPENX'
    | 'EXCHANGE_PERMODO'
    | 'EXCHANGE_PLATFORMONE'
    | 'EXCHANGE_PLATFORMID'
    | 'EXCHANGE_PUBMATIC'
    | 'EXCHANGE_PULSEPOINT'
    | 'EXCHANGE_REVENUEMAX'
    | 'EXCHANGE_RUBICON'
    | 'EXCHANGE_SMARTCLIP'
    | 'EXCHANGE_SMARTRTB'
    | 'EXCHANGE_SMARTSTREAMTV'
    | 'EXCHANGE_SOVRN'
    | 'EXCHANGE_SPOTXCHANGE'
    | 'EXCHANGE_STROER'
    | 'EXCHANGE_TEADSTV'
    | 'EXCHANGE_TELARIA'
    | 'EXCHANGE_TVN'
    | 'EXCHANGE_UNITED'
    | 'EXCHANGE_YIELDLAB'
    | 'EXCHANGE_YIELDMO'
    | 'EXCHANGE_UNRULYX'
    | 'EXCHANGE_OPEN8'
    | 'EXCHANGE_TRITON'
    | 'EXCHANGE_TRIPLELIFT'
    | 'EXCHANGE_TABOOLA'
    | 'EXCHANGE_INMOBI'
    | 'EXCHANGE_SMAATO'
    | 'EXCHANGE_AJA'
    | 'EXCHANGE_SUPERSHIP'
    | 'EXCHANGE_NEXSTAR_DIGITAL'
    | 'EXCHANGE_WAZE'
    | 'EXCHANGE_SOUNDCAST'
    | 'EXCHANGE_SHARETHROUGH'
    | 'EXCHANGE_FYBER'
    | 'EXCHANGE_RED_FOR_PUBLISHERS'
    | 'EXCHANGE_MEDIANET'
    | 'EXCHANGE_TAPJOY'
    | 'EXCHANGE_VISTAR'
    | 'EXCHANGE_DAX'
    | 'EXCHANGE_JCD'
    | 'EXCHANGE_PLACE_EXCHANGE'
    | 'EXCHANGE_APPLOVIN'
    | 'EXCHANGE_CONNATIX'
    | 'EXCHANGE_RESET_DIGITAL'
    | 'EXCHANGE_HIVESTACK'
    | undefined
}
type GenderTargetingOptionDetails = {
  gender?: 'GENDER_UNSPECIFIED' | 'GENDER_MALE' | 'GENDER_FEMALE' | 'GENDER_UNKNOWN' | undefined
}
type GeoRegionTargetingOptionDetails = {
  displayName?: string | undefined
  geoRegionType?:
    | 'GEO_REGION_TYPE_UNKNOWN'
    | 'GEO_REGION_TYPE_OTHER'
    | 'GEO_REGION_TYPE_COUNTRY'
    | 'GEO_REGION_TYPE_REGION'
    | 'GEO_REGION_TYPE_TERRITORY'
    | 'GEO_REGION_TYPE_PROVINCE'
    | 'GEO_REGION_TYPE_STATE'
    | 'GEO_REGION_TYPE_PREFECTURE'
    | 'GEO_REGION_TYPE_GOVERNORATE'
    | 'GEO_REGION_TYPE_CANTON'
    | 'GEO_REGION_TYPE_UNION_TERRITORY'
    | 'GEO_REGION_TYPE_AUTONOMOUS_COMMUNITY'
    | 'GEO_REGION_TYPE_DMA_REGION'
    | 'GEO_REGION_TYPE_METRO'
    | 'GEO_REGION_TYPE_CONGRESSIONAL_DISTRICT'
    | 'GEO_REGION_TYPE_COUNTY'
    | 'GEO_REGION_TYPE_MUNICIPALITY'
    | 'GEO_REGION_TYPE_CITY'
    | 'GEO_REGION_TYPE_POSTAL_CODE'
    | 'GEO_REGION_TYPE_DEPARTMENT'
    | 'GEO_REGION_TYPE_AIRPORT'
    | 'GEO_REGION_TYPE_TV_REGION'
    | 'GEO_REGION_TYPE_OKRUG'
    | 'GEO_REGION_TYPE_BOROUGH'
    | 'GEO_REGION_TYPE_CITY_REGION'
    | 'GEO_REGION_TYPE_ARRONDISSEMENT'
    | 'GEO_REGION_TYPE_NEIGHBORHOOD'
    | 'GEO_REGION_TYPE_UNIVERSITY'
    | 'GEO_REGION_TYPE_DISTRICT'
    | undefined
}
type HouseholdIncomeTargetingOptionDetails = {
  householdIncome?:
    | 'HOUSEHOLD_INCOME_UNSPECIFIED'
    | 'HOUSEHOLD_INCOME_UNKNOWN'
    | 'HOUSEHOLD_INCOME_LOWER_50_PERCENT'
    | 'HOUSEHOLD_INCOME_TOP_41_TO_50_PERCENT'
    | 'HOUSEHOLD_INCOME_TOP_31_TO_40_PERCENT'
    | 'HOUSEHOLD_INCOME_TOP_21_TO_30_PERCENT'
    | 'HOUSEHOLD_INCOME_TOP_11_TO_20_PERCENT'
    | 'HOUSEHOLD_INCOME_TOP_10_PERCENT'
    | undefined
}
type LanguageTargetingOptionDetails = { displayName?: string | undefined }
type NativeContentPositionTargetingOptionDetails = {
  contentPosition?:
    | 'NATIVE_CONTENT_POSITION_UNSPECIFIED'
    | 'NATIVE_CONTENT_POSITION_UNKNOWN'
    | 'NATIVE_CONTENT_POSITION_IN_ARTICLE'
    | 'NATIVE_CONTENT_POSITION_IN_FEED'
    | 'NATIVE_CONTENT_POSITION_PERIPHERAL'
    | 'NATIVE_CONTENT_POSITION_RECOMMENDATION'
    | undefined
}
type OmidTargetingOptionDetails = {
  omid?: 'OMID_UNSPECIFIED' | 'OMID_FOR_MOBILE_DISPLAY_ADS' | undefined
}
type OnScreenPositionTargetingOptionDetails = {
  onScreenPosition?:
    | 'ON_SCREEN_POSITION_UNSPECIFIED'
    | 'ON_SCREEN_POSITION_UNKNOWN'
    | 'ON_SCREEN_POSITION_ABOVE_THE_FOLD'
    | 'ON_SCREEN_POSITION_BELOW_THE_FOLD'
    | undefined
}
type OperatingSystemTargetingOptionDetails = { displayName?: string | undefined }
type ParentalStatusTargetingOptionDetails = {
  parentalStatus?:
    | 'PARENTAL_STATUS_UNSPECIFIED'
    | 'PARENTAL_STATUS_PARENT'
    | 'PARENTAL_STATUS_NOT_A_PARENT'
    | 'PARENTAL_STATUS_UNKNOWN'
    | undefined
}
type PoiTargetingOptionDetails = {
  displayName?: string | undefined
  latitude?: number | undefined
  longitude?: number | undefined
}
type SensitiveCategoryTargetingOptionDetails = {
  sensitiveCategory?:
    | 'SENSITIVE_CATEGORY_UNSPECIFIED'
    | 'SENSITIVE_CATEGORY_ADULT'
    | 'SENSITIVE_CATEGORY_DEROGATORY'
    | 'SENSITIVE_CATEGORY_DOWNLOADS_SHARING'
    | 'SENSITIVE_CATEGORY_WEAPONS'
    | 'SENSITIVE_CATEGORY_GAMBLING'
    | 'SENSITIVE_CATEGORY_VIOLENCE'
    | 'SENSITIVE_CATEGORY_SUGGESTIVE'
    | 'SENSITIVE_CATEGORY_PROFANITY'
    | 'SENSITIVE_CATEGORY_ALCOHOL'
    | 'SENSITIVE_CATEGORY_DRUGS'
    | 'SENSITIVE_CATEGORY_TOBACCO'
    | 'SENSITIVE_CATEGORY_POLITICS'
    | 'SENSITIVE_CATEGORY_RELIGION'
    | 'SENSITIVE_CATEGORY_TRAGEDY'
    | 'SENSITIVE_CATEGORY_TRANSPORTATION_ACCIDENTS'
    | 'SENSITIVE_CATEGORY_SENSITIVE_SOCIAL_ISSUES'
    | 'SENSITIVE_CATEGORY_SHOCKING'
    | 'SENSITIVE_CATEGORY_EMBEDDED_VIDEO'
    | 'SENSITIVE_CATEGORY_LIVE_STREAMING_VIDEO'
    | undefined
}
type SubExchangeTargetingOptionDetails = { displayName?: string | undefined }
type UserRewardedContentTargetingOptionDetails = {
  userRewardedContent?:
    | 'USER_REWARDED_CONTENT_UNSPECIFIED'
    | 'USER_REWARDED_CONTENT_USER_REWARDED'
    | 'USER_REWARDED_CONTENT_NOT_USER_REWARDED'
    | undefined
}
type VideoPlayerSizeTargetingOptionDetails = {
  videoPlayerSize?:
    | 'VIDEO_PLAYER_SIZE_UNSPECIFIED'
    | 'VIDEO_PLAYER_SIZE_SMALL'
    | 'VIDEO_PLAYER_SIZE_LARGE'
    | 'VIDEO_PLAYER_SIZE_HD'
    | 'VIDEO_PLAYER_SIZE_UNKNOWN'
    | undefined
}
type ViewabilityTargetingOptionDetails = {
  viewability?:
    | 'VIEWABILITY_UNSPECIFIED'
    | 'VIEWABILITY_10_PERCENT_OR_MORE'
    | 'VIEWABILITY_20_PERCENT_OR_MORE'
    | 'VIEWABILITY_30_PERCENT_OR_MORE'
    | 'VIEWABILITY_40_PERCENT_OR_MORE'
    | 'VIEWABILITY_50_PERCENT_OR_MORE'
    | 'VIEWABILITY_60_PERCENT_OR_MORE'
    | 'VIEWABILITY_70_PERCENT_OR_MORE'
    | 'VIEWABILITY_80_PERCENT_OR_MORE'
    | 'VIEWABILITY_90_PERCENT_OR_MORE'
    | undefined
}
type TargetingOption = {
  ageRangeDetails?: AgeRangeTargetingOptionDetails | undefined
  appCategoryDetails?: AppCategoryTargetingOptionDetails | undefined
  audioContentTypeDetails?: AudioContentTypeTargetingOptionDetails | undefined
  authorizedSellerStatusDetails?: AuthorizedSellerStatusTargetingOptionDetails | undefined
  browserDetails?: BrowserTargetingOptionDetails | undefined
  businessChainDetails?: BusinessChainTargetingOptionDetails | undefined
  carrierAndIspDetails?: CarrierAndIspTargetingOptionDetails | undefined
  categoryDetails?: CategoryTargetingOptionDetails | undefined
  contentDurationDetails?: ContentDurationTargetingOptionDetails | undefined
  contentGenreDetails?: ContentGenreTargetingOptionDetails | undefined
  contentInstreamPositionDetails?: ContentInstreamPositionTargetingOptionDetails | undefined
  contentOutstreamPositionDetails?: ContentOutstreamPositionTargetingOptionDetails | undefined
  contentStreamTypeDetails?: ContentStreamTypeTargetingOptionDetails | undefined
  deviceMakeModelDetails?: DeviceMakeModelTargetingOptionDetails | undefined
  deviceTypeDetails?: DeviceTypeTargetingOptionDetails | undefined
  digitalContentLabelDetails?: DigitalContentLabelTargetingOptionDetails | undefined
  environmentDetails?: EnvironmentTargetingOptionDetails | undefined
  exchangeDetails?: ExchangeTargetingOptionDetails | undefined
  genderDetails?: GenderTargetingOptionDetails | undefined
  geoRegionDetails?: GeoRegionTargetingOptionDetails | undefined
  householdIncomeDetails?: HouseholdIncomeTargetingOptionDetails | undefined
  languageDetails?: LanguageTargetingOptionDetails | undefined
  name?: string | undefined
  nativeContentPositionDetails?: NativeContentPositionTargetingOptionDetails | undefined
  omidDetails?: OmidTargetingOptionDetails | undefined
  onScreenPositionDetails?: OnScreenPositionTargetingOptionDetails | undefined
  operatingSystemDetails?: OperatingSystemTargetingOptionDetails | undefined
  parentalStatusDetails?: ParentalStatusTargetingOptionDetails | undefined
  poiDetails?: PoiTargetingOptionDetails | undefined
  sensitiveCategoryDetails?: SensitiveCategoryTargetingOptionDetails | undefined
  subExchangeDetails?: SubExchangeTargetingOptionDetails | undefined
  targetingOptionId?: string | undefined
  targetingType?:
    | 'TARGETING_TYPE_UNSPECIFIED'
    | 'TARGETING_TYPE_CHANNEL'
    | 'TARGETING_TYPE_APP_CATEGORY'
    | 'TARGETING_TYPE_APP'
    | 'TARGETING_TYPE_URL'
    | 'TARGETING_TYPE_DAY_AND_TIME'
    | 'TARGETING_TYPE_AGE_RANGE'
    | 'TARGETING_TYPE_REGIONAL_LOCATION_LIST'
    | 'TARGETING_TYPE_PROXIMITY_LOCATION_LIST'
    | 'TARGETING_TYPE_GENDER'
    | 'TARGETING_TYPE_VIDEO_PLAYER_SIZE'
    | 'TARGETING_TYPE_USER_REWARDED_CONTENT'
    | 'TARGETING_TYPE_PARENTAL_STATUS'
    | 'TARGETING_TYPE_CONTENT_INSTREAM_POSITION'
    | 'TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION'
    | 'TARGETING_TYPE_DEVICE_TYPE'
    | 'TARGETING_TYPE_AUDIENCE_GROUP'
    | 'TARGETING_TYPE_BROWSER'
    | 'TARGETING_TYPE_HOUSEHOLD_INCOME'
    | 'TARGETING_TYPE_ON_SCREEN_POSITION'
    | 'TARGETING_TYPE_THIRD_PARTY_VERIFIER'
    | 'TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION'
    | 'TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION'
    | 'TARGETING_TYPE_ENVIRONMENT'
    | 'TARGETING_TYPE_CARRIER_AND_ISP'
    | 'TARGETING_TYPE_OPERATING_SYSTEM'
    | 'TARGETING_TYPE_DEVICE_MAKE_MODEL'
    | 'TARGETING_TYPE_KEYWORD'
    | 'TARGETING_TYPE_NEGATIVE_KEYWORD_LIST'
    | 'TARGETING_TYPE_VIEWABILITY'
    | 'TARGETING_TYPE_CATEGORY'
    | 'TARGETING_TYPE_INVENTORY_SOURCE'
    | 'TARGETING_TYPE_LANGUAGE'
    | 'TARGETING_TYPE_AUTHORIZED_SELLER_STATUS'
    | 'TARGETING_TYPE_GEO_REGION'
    | 'TARGETING_TYPE_INVENTORY_SOURCE_GROUP'
    | 'TARGETING_TYPE_EXCHANGE'
    | 'TARGETING_TYPE_SUB_EXCHANGE'
    | 'TARGETING_TYPE_POI'
    | 'TARGETING_TYPE_BUSINESS_CHAIN'
    | 'TARGETING_TYPE_CONTENT_DURATION'
    | 'TARGETING_TYPE_CONTENT_STREAM_TYPE'
    | 'TARGETING_TYPE_NATIVE_CONTENT_POSITION'
    | 'TARGETING_TYPE_OMID'
    | 'TARGETING_TYPE_AUDIO_CONTENT_TYPE'
    | 'TARGETING_TYPE_CONTENT_GENRE'
    | 'TARGETING_TYPE_YOUTUBE_VIDEO'
    | 'TARGETING_TYPE_YOUTUBE_CHANNEL'
    | 'TARGETING_TYPE_SESSION_POSITION'
    | undefined
  userRewardedContentDetails?: UserRewardedContentTargetingOptionDetails | undefined
  videoPlayerSizeDetails?: VideoPlayerSizeTargetingOptionDetails | undefined
  viewabilityDetails?: ViewabilityTargetingOptionDetails | undefined
}
type ListTargetingOptionsResponse = {
  nextPageToken?: string | undefined
  targetingOptions?: TargetingOption[] | undefined
}
type BusinessChainSearchTerms = {
  businessChainQuery?: string | undefined
  regionQuery?: string | undefined
}
type GeoRegionSearchTerms = { geoRegionQuery?: string | undefined }
type PoiSearchTerms = { poiQuery?: string | undefined }
type SearchTargetingOptionsRequest = {
  advertiserId?: string | undefined
  businessChainSearchTerms?: BusinessChainSearchTerms | undefined
  geoRegionSearchTerms?: GeoRegionSearchTerms | undefined
  pageSize?: number | undefined
  pageToken?: string | undefined
  poiSearchTerms?: PoiSearchTerms | undefined
}
type SearchTargetingOptionsResponse = {
  nextPageToken?: string | undefined
  targetingOptions?: TargetingOption[] | undefined
}
type AssignedUserRole = {
  advertiserId?: string | undefined
  assignedUserRoleId?: string | undefined
  partnerId?: string | undefined
  userRole?:
    | 'USER_ROLE_UNSPECIFIED'
    | 'ADMIN'
    | 'ADMIN_PARTNER_CLIENT'
    | 'STANDARD'
    | 'STANDARD_PLANNER'
    | 'STANDARD_PLANNER_LIMITED'
    | 'STANDARD_PARTNER_CLIENT'
    | 'READ_ONLY'
    | 'REPORTING_ONLY'
    | 'LIMITED_REPORTING_ONLY'
    | 'CREATIVE'
    | 'CREATIVE_ADMIN'
    | undefined
}
type User = {
  assignedUserRoles?: AssignedUserRole[] | undefined
  displayName?: string | undefined
  email?: string | undefined
  name?: string | undefined
  userId?: string | undefined
}
type ListUsersResponse = { nextPageToken?: string | undefined; users?: User[] | undefined }
type BulkEditAssignedUserRolesRequest = {
  createdAssignedUserRoles?: AssignedUserRole[] | undefined
  deletedAssignedUserRoles?: string[] | undefined
}
type BulkEditAssignedUserRolesResponse = {
  createdAssignedUserRoles?: AssignedUserRole[] | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/download/:resourceName': {
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
        output: GoogleBytestreamMedia
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/media/:resourceName': {
      $post: {
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
        } & { json: GoogleBytestreamMedia }
        output: GoogleBytestreamMedia
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/advertisers': {
      $get: {
        input: {
          query: {
            filter?: string | undefined
            orderBy?: string | undefined
            pageSize?: number | undefined
            pageToken?: string | undefined
            partnerId?: string | undefined
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
        output: ListAdvertisersResponse
        outputFormat: 'json'
        status: 200
      }
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
        } & { json: Advertiser }
        output: Advertiser
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/advertisers/:advertiserId': {
      $delete: {
        input: { param: { advertiserId: string } } & {
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
        output: Empty
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { advertiserId: string } } & {
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
        output: Advertiser
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { advertiserId: string } } & {
          query: {
            updateMask?: string | undefined
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
        } & { json: Advertiser }
        output: Advertiser
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/advertisers/:advertiserId/assets': {
      $post: {
        input: { param: { advertiserId: string } } & {
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
        } & { json: CreateAssetRequest }
        output: CreateAssetResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/advertisers/:advertiserId/campaigns': {
      $get: {
        input: { param: { advertiserId: string } } & {
          query: {
            filter?: string | undefined
            orderBy?: string | undefined
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
        output: ListCampaignsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { advertiserId: string } } & {
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
        } & { json: Campaign }
        output: Campaign
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/advertisers/:advertiserId/campaigns/:campaignId': {
      $delete: {
        input: { param: { advertiserId: string; campaignId: string } } & {
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
        output: Empty
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { advertiserId: string; campaignId: string } } & {
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
        output: Campaign
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { advertiserId: string; campaignId: string } } & {
          query: {
            updateMask?: string | undefined
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
        } & { json: Campaign }
        output: Campaign
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/advertisers/:advertiserId/campaigns/:campaignId/targetingTypes/:targetingType/assignedTargetingOptions': {
      $get: {
        input: {
          param: {
            advertiserId: string
            campaignId: string
            targetingType:
              | 'TARGETING_TYPE_UNSPECIFIED'
              | 'TARGETING_TYPE_CHANNEL'
              | 'TARGETING_TYPE_APP_CATEGORY'
              | 'TARGETING_TYPE_APP'
              | 'TARGETING_TYPE_URL'
              | 'TARGETING_TYPE_DAY_AND_TIME'
              | 'TARGETING_TYPE_AGE_RANGE'
              | 'TARGETING_TYPE_REGIONAL_LOCATION_LIST'
              | 'TARGETING_TYPE_PROXIMITY_LOCATION_LIST'
              | 'TARGETING_TYPE_GENDER'
              | 'TARGETING_TYPE_VIDEO_PLAYER_SIZE'
              | 'TARGETING_TYPE_USER_REWARDED_CONTENT'
              | 'TARGETING_TYPE_PARENTAL_STATUS'
              | 'TARGETING_TYPE_CONTENT_INSTREAM_POSITION'
              | 'TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION'
              | 'TARGETING_TYPE_DEVICE_TYPE'
              | 'TARGETING_TYPE_AUDIENCE_GROUP'
              | 'TARGETING_TYPE_BROWSER'
              | 'TARGETING_TYPE_HOUSEHOLD_INCOME'
              | 'TARGETING_TYPE_ON_SCREEN_POSITION'
              | 'TARGETING_TYPE_THIRD_PARTY_VERIFIER'
              | 'TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION'
              | 'TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION'
              | 'TARGETING_TYPE_ENVIRONMENT'
              | 'TARGETING_TYPE_CARRIER_AND_ISP'
              | 'TARGETING_TYPE_OPERATING_SYSTEM'
              | 'TARGETING_TYPE_DEVICE_MAKE_MODEL'
              | 'TARGETING_TYPE_KEYWORD'
              | 'TARGETING_TYPE_NEGATIVE_KEYWORD_LIST'
              | 'TARGETING_TYPE_VIEWABILITY'
              | 'TARGETING_TYPE_CATEGORY'
              | 'TARGETING_TYPE_INVENTORY_SOURCE'
              | 'TARGETING_TYPE_LANGUAGE'
              | 'TARGETING_TYPE_AUTHORIZED_SELLER_STATUS'
              | 'TARGETING_TYPE_GEO_REGION'
              | 'TARGETING_TYPE_INVENTORY_SOURCE_GROUP'
              | 'TARGETING_TYPE_EXCHANGE'
              | 'TARGETING_TYPE_SUB_EXCHANGE'
              | 'TARGETING_TYPE_POI'
              | 'TARGETING_TYPE_BUSINESS_CHAIN'
              | 'TARGETING_TYPE_CONTENT_DURATION'
              | 'TARGETING_TYPE_CONTENT_STREAM_TYPE'
              | 'TARGETING_TYPE_NATIVE_CONTENT_POSITION'
              | 'TARGETING_TYPE_OMID'
              | 'TARGETING_TYPE_AUDIO_CONTENT_TYPE'
              | 'TARGETING_TYPE_CONTENT_GENRE'
              | 'TARGETING_TYPE_YOUTUBE_VIDEO'
              | 'TARGETING_TYPE_YOUTUBE_CHANNEL'
              | 'TARGETING_TYPE_SESSION_POSITION'
          }
        } & {
          query: {
            filter?: string | undefined
            orderBy?: string | undefined
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
        output: ListCampaignAssignedTargetingOptionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/advertisers/:advertiserId/campaigns/:campaignId/targetingTypes/:targetingType/assignedTargetingOptions/:assignedTargetingOptionId': {
      $get: {
        input: {
          param: {
            advertiserId: string
            campaignId: string
            targetingType:
              | 'TARGETING_TYPE_UNSPECIFIED'
              | 'TARGETING_TYPE_CHANNEL'
              | 'TARGETING_TYPE_APP_CATEGORY'
              | 'TARGETING_TYPE_APP'
              | 'TARGETING_TYPE_URL'
              | 'TARGETING_TYPE_DAY_AND_TIME'
              | 'TARGETING_TYPE_AGE_RANGE'
              | 'TARGETING_TYPE_REGIONAL_LOCATION_LIST'
              | 'TARGETING_TYPE_PROXIMITY_LOCATION_LIST'
              | 'TARGETING_TYPE_GENDER'
              | 'TARGETING_TYPE_VIDEO_PLAYER_SIZE'
              | 'TARGETING_TYPE_USER_REWARDED_CONTENT'
              | 'TARGETING_TYPE_PARENTAL_STATUS'
              | 'TARGETING_TYPE_CONTENT_INSTREAM_POSITION'
              | 'TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION'
              | 'TARGETING_TYPE_DEVICE_TYPE'
              | 'TARGETING_TYPE_AUDIENCE_GROUP'
              | 'TARGETING_TYPE_BROWSER'
              | 'TARGETING_TYPE_HOUSEHOLD_INCOME'
              | 'TARGETING_TYPE_ON_SCREEN_POSITION'
              | 'TARGETING_TYPE_THIRD_PARTY_VERIFIER'
              | 'TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION'
              | 'TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION'
              | 'TARGETING_TYPE_ENVIRONMENT'
              | 'TARGETING_TYPE_CARRIER_AND_ISP'
              | 'TARGETING_TYPE_OPERATING_SYSTEM'
              | 'TARGETING_TYPE_DEVICE_MAKE_MODEL'
              | 'TARGETING_TYPE_KEYWORD'
              | 'TARGETING_TYPE_NEGATIVE_KEYWORD_LIST'
              | 'TARGETING_TYPE_VIEWABILITY'
              | 'TARGETING_TYPE_CATEGORY'
              | 'TARGETING_TYPE_INVENTORY_SOURCE'
              | 'TARGETING_TYPE_LANGUAGE'
              | 'TARGETING_TYPE_AUTHORIZED_SELLER_STATUS'
              | 'TARGETING_TYPE_GEO_REGION'
              | 'TARGETING_TYPE_INVENTORY_SOURCE_GROUP'
              | 'TARGETING_TYPE_EXCHANGE'
              | 'TARGETING_TYPE_SUB_EXCHANGE'
              | 'TARGETING_TYPE_POI'
              | 'TARGETING_TYPE_BUSINESS_CHAIN'
              | 'TARGETING_TYPE_CONTENT_DURATION'
              | 'TARGETING_TYPE_CONTENT_STREAM_TYPE'
              | 'TARGETING_TYPE_NATIVE_CONTENT_POSITION'
              | 'TARGETING_TYPE_OMID'
              | 'TARGETING_TYPE_AUDIO_CONTENT_TYPE'
              | 'TARGETING_TYPE_CONTENT_GENRE'
              | 'TARGETING_TYPE_YOUTUBE_VIDEO'
              | 'TARGETING_TYPE_YOUTUBE_CHANNEL'
              | 'TARGETING_TYPE_SESSION_POSITION'
            assignedTargetingOptionId: string
          }
        } & {
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
        output: AssignedTargetingOption
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/advertisers/:advertiserId/campaigns/:campaignId:listAssignedTargetingOptions': {
      $get: {
        input: { param: { advertiserId: string; campaignId: string } } & {
          query: {
            filter?: string | undefined
            orderBy?: string | undefined
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
        output: BulkListCampaignAssignedTargetingOptionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/advertisers/:advertiserId/channels': {
      $get: {
        input: { param: { advertiserId: string } } & {
          query: {
            filter?: string | undefined
            orderBy?: string | undefined
            pageSize?: number | undefined
            pageToken?: string | undefined
            partnerId?: string | undefined
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
        output: ListChannelsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { advertiserId: string } } & {
          query: {
            partnerId?: string | undefined
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
        } & { json: Channel }
        output: Channel
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/advertisers/:advertiserId/channels/:channelId': {
      $patch: {
        input: { param: { advertiserId: string; channelId: string } } & {
          query: {
            partnerId?: string | undefined
            updateMask?: string | undefined
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
        } & { json: Channel }
        output: Channel
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/advertisers/:advertiserId/channels/:channelId/sites': {
      $get: {
        input: { param: { advertiserId: string; channelId: string } } & {
          query: {
            filter?: string | undefined
            orderBy?: string | undefined
            pageSize?: number | undefined
            pageToken?: string | undefined
            partnerId?: string | undefined
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
        output: ListSitesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/advertisers/:advertiserId/channels/:channelId/sites/:urlOrAppId': {
      $delete: {
        input: { param: { advertiserId: string; channelId: string; urlOrAppId: string } } & {
          query: {
            partnerId?: string | undefined
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
        output: Empty
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/advertisers/:advertiserId/channels/:channelId/sites:bulkEdit': {
      $post: {
        input: { param: { advertiserId: string; channelId: string } } & {
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
        } & { json: BulkEditSitesRequest }
        output: BulkEditSitesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/advertisers/:advertiserId/channels/:channelId/sites:replace': {
      $post: {
        input: { param: { advertiserId: string; channelId: string } } & {
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
        } & { json: ReplaceSitesRequest }
        output: ReplaceSitesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/advertisers/:advertiserId/creatives': {
      $get: {
        input: { param: { advertiserId: string } } & {
          query: {
            filter?: string | undefined
            orderBy?: string | undefined
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
        output: ListCreativesResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { advertiserId: string } } & {
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
        } & { json: Creative }
        output: Creative
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/advertisers/:advertiserId/creatives/:creativeId': {
      $delete: {
        input: { param: { advertiserId: string; creativeId: string } } & {
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
        output: Empty
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { advertiserId: string; creativeId: string } } & {
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
        output: Creative
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { advertiserId: string; creativeId: string } } & {
          query: {
            updateMask?: string | undefined
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
        } & { json: Creative }
        output: Creative
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/advertisers/:advertiserId/insertionOrders': {
      $get: {
        input: { param: { advertiserId: string } } & {
          query: {
            filter?: string | undefined
            orderBy?: string | undefined
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
        output: ListInsertionOrdersResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { advertiserId: string } } & {
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
        } & { json: InsertionOrder }
        output: InsertionOrder
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/advertisers/:advertiserId/insertionOrders/:insertionOrderId': {
      $delete: {
        input: { param: { advertiserId: string; insertionOrderId: string } } & {
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
        output: Empty
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { advertiserId: string; insertionOrderId: string } } & {
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
        output: InsertionOrder
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { advertiserId: string; insertionOrderId: string } } & {
          query: {
            updateMask?: string | undefined
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
        } & { json: InsertionOrder }
        output: InsertionOrder
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/advertisers/:advertiserId/insertionOrders/:insertionOrderId/targetingTypes/:targetingType/assignedTargetingOptions': {
      $get: {
        input: {
          param: {
            advertiserId: string
            insertionOrderId: string
            targetingType:
              | 'TARGETING_TYPE_UNSPECIFIED'
              | 'TARGETING_TYPE_CHANNEL'
              | 'TARGETING_TYPE_APP_CATEGORY'
              | 'TARGETING_TYPE_APP'
              | 'TARGETING_TYPE_URL'
              | 'TARGETING_TYPE_DAY_AND_TIME'
              | 'TARGETING_TYPE_AGE_RANGE'
              | 'TARGETING_TYPE_REGIONAL_LOCATION_LIST'
              | 'TARGETING_TYPE_PROXIMITY_LOCATION_LIST'
              | 'TARGETING_TYPE_GENDER'
              | 'TARGETING_TYPE_VIDEO_PLAYER_SIZE'
              | 'TARGETING_TYPE_USER_REWARDED_CONTENT'
              | 'TARGETING_TYPE_PARENTAL_STATUS'
              | 'TARGETING_TYPE_CONTENT_INSTREAM_POSITION'
              | 'TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION'
              | 'TARGETING_TYPE_DEVICE_TYPE'
              | 'TARGETING_TYPE_AUDIENCE_GROUP'
              | 'TARGETING_TYPE_BROWSER'
              | 'TARGETING_TYPE_HOUSEHOLD_INCOME'
              | 'TARGETING_TYPE_ON_SCREEN_POSITION'
              | 'TARGETING_TYPE_THIRD_PARTY_VERIFIER'
              | 'TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION'
              | 'TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION'
              | 'TARGETING_TYPE_ENVIRONMENT'
              | 'TARGETING_TYPE_CARRIER_AND_ISP'
              | 'TARGETING_TYPE_OPERATING_SYSTEM'
              | 'TARGETING_TYPE_DEVICE_MAKE_MODEL'
              | 'TARGETING_TYPE_KEYWORD'
              | 'TARGETING_TYPE_NEGATIVE_KEYWORD_LIST'
              | 'TARGETING_TYPE_VIEWABILITY'
              | 'TARGETING_TYPE_CATEGORY'
              | 'TARGETING_TYPE_INVENTORY_SOURCE'
              | 'TARGETING_TYPE_LANGUAGE'
              | 'TARGETING_TYPE_AUTHORIZED_SELLER_STATUS'
              | 'TARGETING_TYPE_GEO_REGION'
              | 'TARGETING_TYPE_INVENTORY_SOURCE_GROUP'
              | 'TARGETING_TYPE_EXCHANGE'
              | 'TARGETING_TYPE_SUB_EXCHANGE'
              | 'TARGETING_TYPE_POI'
              | 'TARGETING_TYPE_BUSINESS_CHAIN'
              | 'TARGETING_TYPE_CONTENT_DURATION'
              | 'TARGETING_TYPE_CONTENT_STREAM_TYPE'
              | 'TARGETING_TYPE_NATIVE_CONTENT_POSITION'
              | 'TARGETING_TYPE_OMID'
              | 'TARGETING_TYPE_AUDIO_CONTENT_TYPE'
              | 'TARGETING_TYPE_CONTENT_GENRE'
              | 'TARGETING_TYPE_YOUTUBE_VIDEO'
              | 'TARGETING_TYPE_YOUTUBE_CHANNEL'
              | 'TARGETING_TYPE_SESSION_POSITION'
          }
        } & {
          query: {
            filter?: string | undefined
            orderBy?: string | undefined
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
        output: ListInsertionOrderAssignedTargetingOptionsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: {
          param: {
            advertiserId: string
            insertionOrderId: string
            targetingType:
              | 'TARGETING_TYPE_UNSPECIFIED'
              | 'TARGETING_TYPE_CHANNEL'
              | 'TARGETING_TYPE_APP_CATEGORY'
              | 'TARGETING_TYPE_APP'
              | 'TARGETING_TYPE_URL'
              | 'TARGETING_TYPE_DAY_AND_TIME'
              | 'TARGETING_TYPE_AGE_RANGE'
              | 'TARGETING_TYPE_REGIONAL_LOCATION_LIST'
              | 'TARGETING_TYPE_PROXIMITY_LOCATION_LIST'
              | 'TARGETING_TYPE_GENDER'
              | 'TARGETING_TYPE_VIDEO_PLAYER_SIZE'
              | 'TARGETING_TYPE_USER_REWARDED_CONTENT'
              | 'TARGETING_TYPE_PARENTAL_STATUS'
              | 'TARGETING_TYPE_CONTENT_INSTREAM_POSITION'
              | 'TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION'
              | 'TARGETING_TYPE_DEVICE_TYPE'
              | 'TARGETING_TYPE_AUDIENCE_GROUP'
              | 'TARGETING_TYPE_BROWSER'
              | 'TARGETING_TYPE_HOUSEHOLD_INCOME'
              | 'TARGETING_TYPE_ON_SCREEN_POSITION'
              | 'TARGETING_TYPE_THIRD_PARTY_VERIFIER'
              | 'TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION'
              | 'TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION'
              | 'TARGETING_TYPE_ENVIRONMENT'
              | 'TARGETING_TYPE_CARRIER_AND_ISP'
              | 'TARGETING_TYPE_OPERATING_SYSTEM'
              | 'TARGETING_TYPE_DEVICE_MAKE_MODEL'
              | 'TARGETING_TYPE_KEYWORD'
              | 'TARGETING_TYPE_NEGATIVE_KEYWORD_LIST'
              | 'TARGETING_TYPE_VIEWABILITY'
              | 'TARGETING_TYPE_CATEGORY'
              | 'TARGETING_TYPE_INVENTORY_SOURCE'
              | 'TARGETING_TYPE_LANGUAGE'
              | 'TARGETING_TYPE_AUTHORIZED_SELLER_STATUS'
              | 'TARGETING_TYPE_GEO_REGION'
              | 'TARGETING_TYPE_INVENTORY_SOURCE_GROUP'
              | 'TARGETING_TYPE_EXCHANGE'
              | 'TARGETING_TYPE_SUB_EXCHANGE'
              | 'TARGETING_TYPE_POI'
              | 'TARGETING_TYPE_BUSINESS_CHAIN'
              | 'TARGETING_TYPE_CONTENT_DURATION'
              | 'TARGETING_TYPE_CONTENT_STREAM_TYPE'
              | 'TARGETING_TYPE_NATIVE_CONTENT_POSITION'
              | 'TARGETING_TYPE_OMID'
              | 'TARGETING_TYPE_AUDIO_CONTENT_TYPE'
              | 'TARGETING_TYPE_CONTENT_GENRE'
              | 'TARGETING_TYPE_YOUTUBE_VIDEO'
              | 'TARGETING_TYPE_YOUTUBE_CHANNEL'
              | 'TARGETING_TYPE_SESSION_POSITION'
          }
        } & {
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
        } & { json: AssignedTargetingOption }
        output: AssignedTargetingOption
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/advertisers/:advertiserId/insertionOrders/:insertionOrderId/targetingTypes/:targetingType/assignedTargetingOptions/:assignedTargetingOptionId': {
      $delete: {
        input: {
          param: {
            advertiserId: string
            insertionOrderId: string
            targetingType:
              | 'TARGETING_TYPE_UNSPECIFIED'
              | 'TARGETING_TYPE_CHANNEL'
              | 'TARGETING_TYPE_APP_CATEGORY'
              | 'TARGETING_TYPE_APP'
              | 'TARGETING_TYPE_URL'
              | 'TARGETING_TYPE_DAY_AND_TIME'
              | 'TARGETING_TYPE_AGE_RANGE'
              | 'TARGETING_TYPE_REGIONAL_LOCATION_LIST'
              | 'TARGETING_TYPE_PROXIMITY_LOCATION_LIST'
              | 'TARGETING_TYPE_GENDER'
              | 'TARGETING_TYPE_VIDEO_PLAYER_SIZE'
              | 'TARGETING_TYPE_USER_REWARDED_CONTENT'
              | 'TARGETING_TYPE_PARENTAL_STATUS'
              | 'TARGETING_TYPE_CONTENT_INSTREAM_POSITION'
              | 'TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION'
              | 'TARGETING_TYPE_DEVICE_TYPE'
              | 'TARGETING_TYPE_AUDIENCE_GROUP'
              | 'TARGETING_TYPE_BROWSER'
              | 'TARGETING_TYPE_HOUSEHOLD_INCOME'
              | 'TARGETING_TYPE_ON_SCREEN_POSITION'
              | 'TARGETING_TYPE_THIRD_PARTY_VERIFIER'
              | 'TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION'
              | 'TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION'
              | 'TARGETING_TYPE_ENVIRONMENT'
              | 'TARGETING_TYPE_CARRIER_AND_ISP'
              | 'TARGETING_TYPE_OPERATING_SYSTEM'
              | 'TARGETING_TYPE_DEVICE_MAKE_MODEL'
              | 'TARGETING_TYPE_KEYWORD'
              | 'TARGETING_TYPE_NEGATIVE_KEYWORD_LIST'
              | 'TARGETING_TYPE_VIEWABILITY'
              | 'TARGETING_TYPE_CATEGORY'
              | 'TARGETING_TYPE_INVENTORY_SOURCE'
              | 'TARGETING_TYPE_LANGUAGE'
              | 'TARGETING_TYPE_AUTHORIZED_SELLER_STATUS'
              | 'TARGETING_TYPE_GEO_REGION'
              | 'TARGETING_TYPE_INVENTORY_SOURCE_GROUP'
              | 'TARGETING_TYPE_EXCHANGE'
              | 'TARGETING_TYPE_SUB_EXCHANGE'
              | 'TARGETING_TYPE_POI'
              | 'TARGETING_TYPE_BUSINESS_CHAIN'
              | 'TARGETING_TYPE_CONTENT_DURATION'
              | 'TARGETING_TYPE_CONTENT_STREAM_TYPE'
              | 'TARGETING_TYPE_NATIVE_CONTENT_POSITION'
              | 'TARGETING_TYPE_OMID'
              | 'TARGETING_TYPE_AUDIO_CONTENT_TYPE'
              | 'TARGETING_TYPE_CONTENT_GENRE'
              | 'TARGETING_TYPE_YOUTUBE_VIDEO'
              | 'TARGETING_TYPE_YOUTUBE_CHANNEL'
              | 'TARGETING_TYPE_SESSION_POSITION'
            assignedTargetingOptionId: string
          }
        } & {
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
        output: Empty
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: {
          param: {
            advertiserId: string
            insertionOrderId: string
            targetingType:
              | 'TARGETING_TYPE_UNSPECIFIED'
              | 'TARGETING_TYPE_CHANNEL'
              | 'TARGETING_TYPE_APP_CATEGORY'
              | 'TARGETING_TYPE_APP'
              | 'TARGETING_TYPE_URL'
              | 'TARGETING_TYPE_DAY_AND_TIME'
              | 'TARGETING_TYPE_AGE_RANGE'
              | 'TARGETING_TYPE_REGIONAL_LOCATION_LIST'
              | 'TARGETING_TYPE_PROXIMITY_LOCATION_LIST'
              | 'TARGETING_TYPE_GENDER'
              | 'TARGETING_TYPE_VIDEO_PLAYER_SIZE'
              | 'TARGETING_TYPE_USER_REWARDED_CONTENT'
              | 'TARGETING_TYPE_PARENTAL_STATUS'
              | 'TARGETING_TYPE_CONTENT_INSTREAM_POSITION'
              | 'TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION'
              | 'TARGETING_TYPE_DEVICE_TYPE'
              | 'TARGETING_TYPE_AUDIENCE_GROUP'
              | 'TARGETING_TYPE_BROWSER'
              | 'TARGETING_TYPE_HOUSEHOLD_INCOME'
              | 'TARGETING_TYPE_ON_SCREEN_POSITION'
              | 'TARGETING_TYPE_THIRD_PARTY_VERIFIER'
              | 'TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION'
              | 'TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION'
              | 'TARGETING_TYPE_ENVIRONMENT'
              | 'TARGETING_TYPE_CARRIER_AND_ISP'
              | 'TARGETING_TYPE_OPERATING_SYSTEM'
              | 'TARGETING_TYPE_DEVICE_MAKE_MODEL'
              | 'TARGETING_TYPE_KEYWORD'
              | 'TARGETING_TYPE_NEGATIVE_KEYWORD_LIST'
              | 'TARGETING_TYPE_VIEWABILITY'
              | 'TARGETING_TYPE_CATEGORY'
              | 'TARGETING_TYPE_INVENTORY_SOURCE'
              | 'TARGETING_TYPE_LANGUAGE'
              | 'TARGETING_TYPE_AUTHORIZED_SELLER_STATUS'
              | 'TARGETING_TYPE_GEO_REGION'
              | 'TARGETING_TYPE_INVENTORY_SOURCE_GROUP'
              | 'TARGETING_TYPE_EXCHANGE'
              | 'TARGETING_TYPE_SUB_EXCHANGE'
              | 'TARGETING_TYPE_POI'
              | 'TARGETING_TYPE_BUSINESS_CHAIN'
              | 'TARGETING_TYPE_CONTENT_DURATION'
              | 'TARGETING_TYPE_CONTENT_STREAM_TYPE'
              | 'TARGETING_TYPE_NATIVE_CONTENT_POSITION'
              | 'TARGETING_TYPE_OMID'
              | 'TARGETING_TYPE_AUDIO_CONTENT_TYPE'
              | 'TARGETING_TYPE_CONTENT_GENRE'
              | 'TARGETING_TYPE_YOUTUBE_VIDEO'
              | 'TARGETING_TYPE_YOUTUBE_CHANNEL'
              | 'TARGETING_TYPE_SESSION_POSITION'
            assignedTargetingOptionId: string
          }
        } & {
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
        output: AssignedTargetingOption
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/advertisers/:advertiserId/insertionOrders/:insertionOrderId:listAssignedTargetingOptions': {
      $get: {
        input: { param: { advertiserId: string; insertionOrderId: string } } & {
          query: {
            filter?: string | undefined
            orderBy?: string | undefined
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
        output: BulkListInsertionOrderAssignedTargetingOptionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/advertisers/:advertiserId/invoices': {
      $get: {
        input: { param: { advertiserId: string } } & {
          query: {
            issueMonth?: string | undefined
            loiSapinInvoiceType?:
              | 'LOI_SAPIN_INVOICE_TYPE_UNSPECIFIED'
              | 'LOI_SAPIN_INVOICE_TYPE_MEDIA'
              | 'LOI_SAPIN_INVOICE_TYPE_PLATFORM'
              | undefined
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
        output: ListInvoicesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/advertisers/:advertiserId/invoices:lookupInvoiceCurrency': {
      $get: {
        input: { param: { advertiserId: string } } & {
          query: {
            invoiceMonth?: string | undefined
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
        output: LookupInvoiceCurrencyResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/advertisers/:advertiserId/lineItems': {
      $get: {
        input: { param: { advertiserId: string } } & {
          query: {
            filter?: string | undefined
            orderBy?: string | undefined
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
        output: ListLineItemsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { advertiserId: string } } & {
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
        } & { json: LineItem }
        output: LineItem
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/advertisers/:advertiserId/lineItems/:lineItemId': {
      $delete: {
        input: { param: { advertiserId: string; lineItemId: string } } & {
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
        output: Empty
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { advertiserId: string; lineItemId: string } } & {
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
        output: LineItem
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { advertiserId: string; lineItemId: string } } & {
          query: {
            updateMask?: string | undefined
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
        } & { json: LineItem }
        output: LineItem
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/advertisers/:advertiserId/lineItems/:lineItemId/targetingTypes/:targetingType/assignedTargetingOptions': {
      $get: {
        input: {
          param: {
            advertiserId: string
            lineItemId: string
            targetingType:
              | 'TARGETING_TYPE_UNSPECIFIED'
              | 'TARGETING_TYPE_CHANNEL'
              | 'TARGETING_TYPE_APP_CATEGORY'
              | 'TARGETING_TYPE_APP'
              | 'TARGETING_TYPE_URL'
              | 'TARGETING_TYPE_DAY_AND_TIME'
              | 'TARGETING_TYPE_AGE_RANGE'
              | 'TARGETING_TYPE_REGIONAL_LOCATION_LIST'
              | 'TARGETING_TYPE_PROXIMITY_LOCATION_LIST'
              | 'TARGETING_TYPE_GENDER'
              | 'TARGETING_TYPE_VIDEO_PLAYER_SIZE'
              | 'TARGETING_TYPE_USER_REWARDED_CONTENT'
              | 'TARGETING_TYPE_PARENTAL_STATUS'
              | 'TARGETING_TYPE_CONTENT_INSTREAM_POSITION'
              | 'TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION'
              | 'TARGETING_TYPE_DEVICE_TYPE'
              | 'TARGETING_TYPE_AUDIENCE_GROUP'
              | 'TARGETING_TYPE_BROWSER'
              | 'TARGETING_TYPE_HOUSEHOLD_INCOME'
              | 'TARGETING_TYPE_ON_SCREEN_POSITION'
              | 'TARGETING_TYPE_THIRD_PARTY_VERIFIER'
              | 'TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION'
              | 'TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION'
              | 'TARGETING_TYPE_ENVIRONMENT'
              | 'TARGETING_TYPE_CARRIER_AND_ISP'
              | 'TARGETING_TYPE_OPERATING_SYSTEM'
              | 'TARGETING_TYPE_DEVICE_MAKE_MODEL'
              | 'TARGETING_TYPE_KEYWORD'
              | 'TARGETING_TYPE_NEGATIVE_KEYWORD_LIST'
              | 'TARGETING_TYPE_VIEWABILITY'
              | 'TARGETING_TYPE_CATEGORY'
              | 'TARGETING_TYPE_INVENTORY_SOURCE'
              | 'TARGETING_TYPE_LANGUAGE'
              | 'TARGETING_TYPE_AUTHORIZED_SELLER_STATUS'
              | 'TARGETING_TYPE_GEO_REGION'
              | 'TARGETING_TYPE_INVENTORY_SOURCE_GROUP'
              | 'TARGETING_TYPE_EXCHANGE'
              | 'TARGETING_TYPE_SUB_EXCHANGE'
              | 'TARGETING_TYPE_POI'
              | 'TARGETING_TYPE_BUSINESS_CHAIN'
              | 'TARGETING_TYPE_CONTENT_DURATION'
              | 'TARGETING_TYPE_CONTENT_STREAM_TYPE'
              | 'TARGETING_TYPE_NATIVE_CONTENT_POSITION'
              | 'TARGETING_TYPE_OMID'
              | 'TARGETING_TYPE_AUDIO_CONTENT_TYPE'
              | 'TARGETING_TYPE_CONTENT_GENRE'
              | 'TARGETING_TYPE_YOUTUBE_VIDEO'
              | 'TARGETING_TYPE_YOUTUBE_CHANNEL'
              | 'TARGETING_TYPE_SESSION_POSITION'
          }
        } & {
          query: {
            filter?: string | undefined
            orderBy?: string | undefined
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
        output: ListLineItemAssignedTargetingOptionsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: {
          param: {
            advertiserId: string
            lineItemId: string
            targetingType:
              | 'TARGETING_TYPE_UNSPECIFIED'
              | 'TARGETING_TYPE_CHANNEL'
              | 'TARGETING_TYPE_APP_CATEGORY'
              | 'TARGETING_TYPE_APP'
              | 'TARGETING_TYPE_URL'
              | 'TARGETING_TYPE_DAY_AND_TIME'
              | 'TARGETING_TYPE_AGE_RANGE'
              | 'TARGETING_TYPE_REGIONAL_LOCATION_LIST'
              | 'TARGETING_TYPE_PROXIMITY_LOCATION_LIST'
              | 'TARGETING_TYPE_GENDER'
              | 'TARGETING_TYPE_VIDEO_PLAYER_SIZE'
              | 'TARGETING_TYPE_USER_REWARDED_CONTENT'
              | 'TARGETING_TYPE_PARENTAL_STATUS'
              | 'TARGETING_TYPE_CONTENT_INSTREAM_POSITION'
              | 'TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION'
              | 'TARGETING_TYPE_DEVICE_TYPE'
              | 'TARGETING_TYPE_AUDIENCE_GROUP'
              | 'TARGETING_TYPE_BROWSER'
              | 'TARGETING_TYPE_HOUSEHOLD_INCOME'
              | 'TARGETING_TYPE_ON_SCREEN_POSITION'
              | 'TARGETING_TYPE_THIRD_PARTY_VERIFIER'
              | 'TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION'
              | 'TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION'
              | 'TARGETING_TYPE_ENVIRONMENT'
              | 'TARGETING_TYPE_CARRIER_AND_ISP'
              | 'TARGETING_TYPE_OPERATING_SYSTEM'
              | 'TARGETING_TYPE_DEVICE_MAKE_MODEL'
              | 'TARGETING_TYPE_KEYWORD'
              | 'TARGETING_TYPE_NEGATIVE_KEYWORD_LIST'
              | 'TARGETING_TYPE_VIEWABILITY'
              | 'TARGETING_TYPE_CATEGORY'
              | 'TARGETING_TYPE_INVENTORY_SOURCE'
              | 'TARGETING_TYPE_LANGUAGE'
              | 'TARGETING_TYPE_AUTHORIZED_SELLER_STATUS'
              | 'TARGETING_TYPE_GEO_REGION'
              | 'TARGETING_TYPE_INVENTORY_SOURCE_GROUP'
              | 'TARGETING_TYPE_EXCHANGE'
              | 'TARGETING_TYPE_SUB_EXCHANGE'
              | 'TARGETING_TYPE_POI'
              | 'TARGETING_TYPE_BUSINESS_CHAIN'
              | 'TARGETING_TYPE_CONTENT_DURATION'
              | 'TARGETING_TYPE_CONTENT_STREAM_TYPE'
              | 'TARGETING_TYPE_NATIVE_CONTENT_POSITION'
              | 'TARGETING_TYPE_OMID'
              | 'TARGETING_TYPE_AUDIO_CONTENT_TYPE'
              | 'TARGETING_TYPE_CONTENT_GENRE'
              | 'TARGETING_TYPE_YOUTUBE_VIDEO'
              | 'TARGETING_TYPE_YOUTUBE_CHANNEL'
              | 'TARGETING_TYPE_SESSION_POSITION'
          }
        } & {
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
        } & { json: AssignedTargetingOption }
        output: AssignedTargetingOption
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/advertisers/:advertiserId/lineItems/:lineItemId/targetingTypes/:targetingType/assignedTargetingOptions/:assignedTargetingOptionId': {
      $delete: {
        input: {
          param: {
            advertiserId: string
            lineItemId: string
            targetingType:
              | 'TARGETING_TYPE_UNSPECIFIED'
              | 'TARGETING_TYPE_CHANNEL'
              | 'TARGETING_TYPE_APP_CATEGORY'
              | 'TARGETING_TYPE_APP'
              | 'TARGETING_TYPE_URL'
              | 'TARGETING_TYPE_DAY_AND_TIME'
              | 'TARGETING_TYPE_AGE_RANGE'
              | 'TARGETING_TYPE_REGIONAL_LOCATION_LIST'
              | 'TARGETING_TYPE_PROXIMITY_LOCATION_LIST'
              | 'TARGETING_TYPE_GENDER'
              | 'TARGETING_TYPE_VIDEO_PLAYER_SIZE'
              | 'TARGETING_TYPE_USER_REWARDED_CONTENT'
              | 'TARGETING_TYPE_PARENTAL_STATUS'
              | 'TARGETING_TYPE_CONTENT_INSTREAM_POSITION'
              | 'TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION'
              | 'TARGETING_TYPE_DEVICE_TYPE'
              | 'TARGETING_TYPE_AUDIENCE_GROUP'
              | 'TARGETING_TYPE_BROWSER'
              | 'TARGETING_TYPE_HOUSEHOLD_INCOME'
              | 'TARGETING_TYPE_ON_SCREEN_POSITION'
              | 'TARGETING_TYPE_THIRD_PARTY_VERIFIER'
              | 'TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION'
              | 'TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION'
              | 'TARGETING_TYPE_ENVIRONMENT'
              | 'TARGETING_TYPE_CARRIER_AND_ISP'
              | 'TARGETING_TYPE_OPERATING_SYSTEM'
              | 'TARGETING_TYPE_DEVICE_MAKE_MODEL'
              | 'TARGETING_TYPE_KEYWORD'
              | 'TARGETING_TYPE_NEGATIVE_KEYWORD_LIST'
              | 'TARGETING_TYPE_VIEWABILITY'
              | 'TARGETING_TYPE_CATEGORY'
              | 'TARGETING_TYPE_INVENTORY_SOURCE'
              | 'TARGETING_TYPE_LANGUAGE'
              | 'TARGETING_TYPE_AUTHORIZED_SELLER_STATUS'
              | 'TARGETING_TYPE_GEO_REGION'
              | 'TARGETING_TYPE_INVENTORY_SOURCE_GROUP'
              | 'TARGETING_TYPE_EXCHANGE'
              | 'TARGETING_TYPE_SUB_EXCHANGE'
              | 'TARGETING_TYPE_POI'
              | 'TARGETING_TYPE_BUSINESS_CHAIN'
              | 'TARGETING_TYPE_CONTENT_DURATION'
              | 'TARGETING_TYPE_CONTENT_STREAM_TYPE'
              | 'TARGETING_TYPE_NATIVE_CONTENT_POSITION'
              | 'TARGETING_TYPE_OMID'
              | 'TARGETING_TYPE_AUDIO_CONTENT_TYPE'
              | 'TARGETING_TYPE_CONTENT_GENRE'
              | 'TARGETING_TYPE_YOUTUBE_VIDEO'
              | 'TARGETING_TYPE_YOUTUBE_CHANNEL'
              | 'TARGETING_TYPE_SESSION_POSITION'
            assignedTargetingOptionId: string
          }
        } & {
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
        output: Empty
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: {
          param: {
            advertiserId: string
            lineItemId: string
            targetingType:
              | 'TARGETING_TYPE_UNSPECIFIED'
              | 'TARGETING_TYPE_CHANNEL'
              | 'TARGETING_TYPE_APP_CATEGORY'
              | 'TARGETING_TYPE_APP'
              | 'TARGETING_TYPE_URL'
              | 'TARGETING_TYPE_DAY_AND_TIME'
              | 'TARGETING_TYPE_AGE_RANGE'
              | 'TARGETING_TYPE_REGIONAL_LOCATION_LIST'
              | 'TARGETING_TYPE_PROXIMITY_LOCATION_LIST'
              | 'TARGETING_TYPE_GENDER'
              | 'TARGETING_TYPE_VIDEO_PLAYER_SIZE'
              | 'TARGETING_TYPE_USER_REWARDED_CONTENT'
              | 'TARGETING_TYPE_PARENTAL_STATUS'
              | 'TARGETING_TYPE_CONTENT_INSTREAM_POSITION'
              | 'TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION'
              | 'TARGETING_TYPE_DEVICE_TYPE'
              | 'TARGETING_TYPE_AUDIENCE_GROUP'
              | 'TARGETING_TYPE_BROWSER'
              | 'TARGETING_TYPE_HOUSEHOLD_INCOME'
              | 'TARGETING_TYPE_ON_SCREEN_POSITION'
              | 'TARGETING_TYPE_THIRD_PARTY_VERIFIER'
              | 'TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION'
              | 'TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION'
              | 'TARGETING_TYPE_ENVIRONMENT'
              | 'TARGETING_TYPE_CARRIER_AND_ISP'
              | 'TARGETING_TYPE_OPERATING_SYSTEM'
              | 'TARGETING_TYPE_DEVICE_MAKE_MODEL'
              | 'TARGETING_TYPE_KEYWORD'
              | 'TARGETING_TYPE_NEGATIVE_KEYWORD_LIST'
              | 'TARGETING_TYPE_VIEWABILITY'
              | 'TARGETING_TYPE_CATEGORY'
              | 'TARGETING_TYPE_INVENTORY_SOURCE'
              | 'TARGETING_TYPE_LANGUAGE'
              | 'TARGETING_TYPE_AUTHORIZED_SELLER_STATUS'
              | 'TARGETING_TYPE_GEO_REGION'
              | 'TARGETING_TYPE_INVENTORY_SOURCE_GROUP'
              | 'TARGETING_TYPE_EXCHANGE'
              | 'TARGETING_TYPE_SUB_EXCHANGE'
              | 'TARGETING_TYPE_POI'
              | 'TARGETING_TYPE_BUSINESS_CHAIN'
              | 'TARGETING_TYPE_CONTENT_DURATION'
              | 'TARGETING_TYPE_CONTENT_STREAM_TYPE'
              | 'TARGETING_TYPE_NATIVE_CONTENT_POSITION'
              | 'TARGETING_TYPE_OMID'
              | 'TARGETING_TYPE_AUDIO_CONTENT_TYPE'
              | 'TARGETING_TYPE_CONTENT_GENRE'
              | 'TARGETING_TYPE_YOUTUBE_VIDEO'
              | 'TARGETING_TYPE_YOUTUBE_CHANNEL'
              | 'TARGETING_TYPE_SESSION_POSITION'
            assignedTargetingOptionId: string
          }
        } & {
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
        output: AssignedTargetingOption
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/advertisers/:advertiserId/lineItems/:lineItemId:duplicate': {
      $post: {
        input: { param: { advertiserId: string; lineItemId: string } } & {
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
        } & { json: DuplicateLineItemRequest }
        output: DuplicateLineItemResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/advertisers/:advertiserId/lineItems:bulkEditAssignedTargetingOptions': {
      $post: {
        input: { param: { advertiserId: string } } & {
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
        } & { json: BulkEditAssignedTargetingOptionsRequest }
        output: BulkEditAssignedTargetingOptionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/advertisers/:advertiserId/lineItems:bulkListAssignedTargetingOptions': {
      $get: {
        input: { param: { advertiserId: string } } & {
          query: {
            filter?: string | undefined
            lineItemIds?: string[] | undefined
            orderBy?: string | undefined
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
        output: BulkListAssignedTargetingOptionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/advertisers/:advertiserId/lineItems:bulkUpdate': {
      $post: {
        input: { param: { advertiserId: string } } & {
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
        } & { json: BulkUpdateLineItemsRequest }
        output: BulkUpdateLineItemsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/advertisers/:advertiserId/lineItems:generateDefault': {
      $post: {
        input: { param: { advertiserId: string } } & {
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
        } & { json: GenerateDefaultLineItemRequest }
        output: LineItem
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/advertisers/:advertiserId/locationLists': {
      $get: {
        input: { param: { advertiserId: string } } & {
          query: {
            filter?: string | undefined
            orderBy?: string | undefined
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
        output: ListLocationListsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { advertiserId: string } } & {
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
        } & { json: LocationList }
        output: LocationList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/advertisers/:advertiserId/locationLists/:locationListId': {
      $patch: {
        input: { param: { advertiserId: string; locationListId: string } } & {
          query: {
            updateMask?: string | undefined
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
        } & { json: LocationList }
        output: LocationList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/advertisers/:advertiserId/locationLists/:locationListId/assignedLocations': {
      $get: {
        input: { param: { advertiserId: string; locationListId: string } } & {
          query: {
            filter?: string | undefined
            orderBy?: string | undefined
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
        output: ListAssignedLocationsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { advertiserId: string; locationListId: string } } & {
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
        } & { json: AssignedLocation }
        output: AssignedLocation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/advertisers/:advertiserId/locationLists/:locationListId/assignedLocations/:assignedLocationId': {
      $delete: {
        input: {
          param: { advertiserId: string; locationListId: string; assignedLocationId: string }
        } & {
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
        output: Empty
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/advertisers/:advertiserId/locationLists/:locationListId/assignedLocations:bulkEdit': {
      $post: {
        input: { param: { advertiserId: string; locationListId: string } } & {
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
        } & { json: BulkEditAssignedLocationsRequest }
        output: BulkEditAssignedLocationsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/advertisers/:advertiserId/manualTriggers': {
      $get: {
        input: { param: { advertiserId: string } } & {
          query: {
            filter?: string | undefined
            orderBy?: string | undefined
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
        output: ListManualTriggersResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { advertiserId: string } } & {
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
        } & { json: ManualTrigger }
        output: ManualTrigger
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/advertisers/:advertiserId/manualTriggers/:triggerId': {
      $get: {
        input: { param: { advertiserId: string; triggerId: string } } & {
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
        output: ManualTrigger
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { advertiserId: string; triggerId: string } } & {
          query: {
            updateMask?: string | undefined
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
        } & { json: ManualTrigger }
        output: ManualTrigger
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/advertisers/:advertiserId/manualTriggers/:triggerId:activate': {
      $post: {
        input: { param: { advertiserId: string; triggerId: string } } & {
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
        } & { json: ActivateManualTriggerRequest }
        output: ManualTrigger
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/advertisers/:advertiserId/manualTriggers/:triggerId:deactivate': {
      $post: {
        input: { param: { advertiserId: string; triggerId: string } } & {
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
        } & { json: DeactivateManualTriggerRequest }
        output: ManualTrigger
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/advertisers/:advertiserId/negativeKeywordLists': {
      $get: {
        input: { param: { advertiserId: string } } & {
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
        output: ListNegativeKeywordListsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { advertiserId: string } } & {
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
        } & { json: NegativeKeywordList }
        output: NegativeKeywordList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/advertisers/:advertiserId/negativeKeywordLists/:negativeKeywordListId': {
      $patch: {
        input: { param: { advertiserId: string; negativeKeywordListId: string } } & {
          query: {
            updateMask?: string | undefined
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
        } & { json: NegativeKeywordList }
        output: NegativeKeywordList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/advertisers/:advertiserId/negativeKeywordLists/:negativeKeywordListId/negativeKeywords': {
      $get: {
        input: { param: { advertiserId: string; negativeKeywordListId: string } } & {
          query: {
            filter?: string | undefined
            orderBy?: string | undefined
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
        output: ListNegativeKeywordsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/advertisers/:advertiserId/negativeKeywordLists/:negativeKeywordListId/negativeKeywords/:keywordValue': {
      $delete: {
        input: {
          param: { advertiserId: string; negativeKeywordListId: string; keywordValue: string }
        } & {
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
        output: Empty
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/advertisers/:advertiserId/negativeKeywordLists/:negativeKeywordListId/negativeKeywords:bulkEdit': {
      $post: {
        input: { param: { advertiserId: string; negativeKeywordListId: string } } & {
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
        } & { json: BulkEditNegativeKeywordsRequest }
        output: BulkEditNegativeKeywordsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/advertisers/:advertiserId/negativeKeywordLists/:negativeKeywordListId/negativeKeywords:replace': {
      $post: {
        input: { param: { advertiserId: string; negativeKeywordListId: string } } & {
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
        } & { json: ReplaceNegativeKeywordsRequest }
        output: ReplaceNegativeKeywordsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/advertisers/:advertiserId/targetingTypes/:targetingType/assignedTargetingOptions': {
      $get: {
        input: {
          param: {
            advertiserId: string
            targetingType:
              | 'TARGETING_TYPE_UNSPECIFIED'
              | 'TARGETING_TYPE_CHANNEL'
              | 'TARGETING_TYPE_APP_CATEGORY'
              | 'TARGETING_TYPE_APP'
              | 'TARGETING_TYPE_URL'
              | 'TARGETING_TYPE_DAY_AND_TIME'
              | 'TARGETING_TYPE_AGE_RANGE'
              | 'TARGETING_TYPE_REGIONAL_LOCATION_LIST'
              | 'TARGETING_TYPE_PROXIMITY_LOCATION_LIST'
              | 'TARGETING_TYPE_GENDER'
              | 'TARGETING_TYPE_VIDEO_PLAYER_SIZE'
              | 'TARGETING_TYPE_USER_REWARDED_CONTENT'
              | 'TARGETING_TYPE_PARENTAL_STATUS'
              | 'TARGETING_TYPE_CONTENT_INSTREAM_POSITION'
              | 'TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION'
              | 'TARGETING_TYPE_DEVICE_TYPE'
              | 'TARGETING_TYPE_AUDIENCE_GROUP'
              | 'TARGETING_TYPE_BROWSER'
              | 'TARGETING_TYPE_HOUSEHOLD_INCOME'
              | 'TARGETING_TYPE_ON_SCREEN_POSITION'
              | 'TARGETING_TYPE_THIRD_PARTY_VERIFIER'
              | 'TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION'
              | 'TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION'
              | 'TARGETING_TYPE_ENVIRONMENT'
              | 'TARGETING_TYPE_CARRIER_AND_ISP'
              | 'TARGETING_TYPE_OPERATING_SYSTEM'
              | 'TARGETING_TYPE_DEVICE_MAKE_MODEL'
              | 'TARGETING_TYPE_KEYWORD'
              | 'TARGETING_TYPE_NEGATIVE_KEYWORD_LIST'
              | 'TARGETING_TYPE_VIEWABILITY'
              | 'TARGETING_TYPE_CATEGORY'
              | 'TARGETING_TYPE_INVENTORY_SOURCE'
              | 'TARGETING_TYPE_LANGUAGE'
              | 'TARGETING_TYPE_AUTHORIZED_SELLER_STATUS'
              | 'TARGETING_TYPE_GEO_REGION'
              | 'TARGETING_TYPE_INVENTORY_SOURCE_GROUP'
              | 'TARGETING_TYPE_EXCHANGE'
              | 'TARGETING_TYPE_SUB_EXCHANGE'
              | 'TARGETING_TYPE_POI'
              | 'TARGETING_TYPE_BUSINESS_CHAIN'
              | 'TARGETING_TYPE_CONTENT_DURATION'
              | 'TARGETING_TYPE_CONTENT_STREAM_TYPE'
              | 'TARGETING_TYPE_NATIVE_CONTENT_POSITION'
              | 'TARGETING_TYPE_OMID'
              | 'TARGETING_TYPE_AUDIO_CONTENT_TYPE'
              | 'TARGETING_TYPE_CONTENT_GENRE'
              | 'TARGETING_TYPE_YOUTUBE_VIDEO'
              | 'TARGETING_TYPE_YOUTUBE_CHANNEL'
              | 'TARGETING_TYPE_SESSION_POSITION'
          }
        } & {
          query: {
            filter?: string | undefined
            orderBy?: string | undefined
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
        output: ListAdvertiserAssignedTargetingOptionsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: {
          param: {
            advertiserId: string
            targetingType:
              | 'TARGETING_TYPE_UNSPECIFIED'
              | 'TARGETING_TYPE_CHANNEL'
              | 'TARGETING_TYPE_APP_CATEGORY'
              | 'TARGETING_TYPE_APP'
              | 'TARGETING_TYPE_URL'
              | 'TARGETING_TYPE_DAY_AND_TIME'
              | 'TARGETING_TYPE_AGE_RANGE'
              | 'TARGETING_TYPE_REGIONAL_LOCATION_LIST'
              | 'TARGETING_TYPE_PROXIMITY_LOCATION_LIST'
              | 'TARGETING_TYPE_GENDER'
              | 'TARGETING_TYPE_VIDEO_PLAYER_SIZE'
              | 'TARGETING_TYPE_USER_REWARDED_CONTENT'
              | 'TARGETING_TYPE_PARENTAL_STATUS'
              | 'TARGETING_TYPE_CONTENT_INSTREAM_POSITION'
              | 'TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION'
              | 'TARGETING_TYPE_DEVICE_TYPE'
              | 'TARGETING_TYPE_AUDIENCE_GROUP'
              | 'TARGETING_TYPE_BROWSER'
              | 'TARGETING_TYPE_HOUSEHOLD_INCOME'
              | 'TARGETING_TYPE_ON_SCREEN_POSITION'
              | 'TARGETING_TYPE_THIRD_PARTY_VERIFIER'
              | 'TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION'
              | 'TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION'
              | 'TARGETING_TYPE_ENVIRONMENT'
              | 'TARGETING_TYPE_CARRIER_AND_ISP'
              | 'TARGETING_TYPE_OPERATING_SYSTEM'
              | 'TARGETING_TYPE_DEVICE_MAKE_MODEL'
              | 'TARGETING_TYPE_KEYWORD'
              | 'TARGETING_TYPE_NEGATIVE_KEYWORD_LIST'
              | 'TARGETING_TYPE_VIEWABILITY'
              | 'TARGETING_TYPE_CATEGORY'
              | 'TARGETING_TYPE_INVENTORY_SOURCE'
              | 'TARGETING_TYPE_LANGUAGE'
              | 'TARGETING_TYPE_AUTHORIZED_SELLER_STATUS'
              | 'TARGETING_TYPE_GEO_REGION'
              | 'TARGETING_TYPE_INVENTORY_SOURCE_GROUP'
              | 'TARGETING_TYPE_EXCHANGE'
              | 'TARGETING_TYPE_SUB_EXCHANGE'
              | 'TARGETING_TYPE_POI'
              | 'TARGETING_TYPE_BUSINESS_CHAIN'
              | 'TARGETING_TYPE_CONTENT_DURATION'
              | 'TARGETING_TYPE_CONTENT_STREAM_TYPE'
              | 'TARGETING_TYPE_NATIVE_CONTENT_POSITION'
              | 'TARGETING_TYPE_OMID'
              | 'TARGETING_TYPE_AUDIO_CONTENT_TYPE'
              | 'TARGETING_TYPE_CONTENT_GENRE'
              | 'TARGETING_TYPE_YOUTUBE_VIDEO'
              | 'TARGETING_TYPE_YOUTUBE_CHANNEL'
              | 'TARGETING_TYPE_SESSION_POSITION'
          }
        } & {
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
        } & { json: AssignedTargetingOption }
        output: AssignedTargetingOption
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/advertisers/:advertiserId/targetingTypes/:targetingType/assignedTargetingOptions/:assignedTargetingOptionId': {
      $delete: {
        input: {
          param: {
            advertiserId: string
            targetingType:
              | 'TARGETING_TYPE_UNSPECIFIED'
              | 'TARGETING_TYPE_CHANNEL'
              | 'TARGETING_TYPE_APP_CATEGORY'
              | 'TARGETING_TYPE_APP'
              | 'TARGETING_TYPE_URL'
              | 'TARGETING_TYPE_DAY_AND_TIME'
              | 'TARGETING_TYPE_AGE_RANGE'
              | 'TARGETING_TYPE_REGIONAL_LOCATION_LIST'
              | 'TARGETING_TYPE_PROXIMITY_LOCATION_LIST'
              | 'TARGETING_TYPE_GENDER'
              | 'TARGETING_TYPE_VIDEO_PLAYER_SIZE'
              | 'TARGETING_TYPE_USER_REWARDED_CONTENT'
              | 'TARGETING_TYPE_PARENTAL_STATUS'
              | 'TARGETING_TYPE_CONTENT_INSTREAM_POSITION'
              | 'TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION'
              | 'TARGETING_TYPE_DEVICE_TYPE'
              | 'TARGETING_TYPE_AUDIENCE_GROUP'
              | 'TARGETING_TYPE_BROWSER'
              | 'TARGETING_TYPE_HOUSEHOLD_INCOME'
              | 'TARGETING_TYPE_ON_SCREEN_POSITION'
              | 'TARGETING_TYPE_THIRD_PARTY_VERIFIER'
              | 'TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION'
              | 'TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION'
              | 'TARGETING_TYPE_ENVIRONMENT'
              | 'TARGETING_TYPE_CARRIER_AND_ISP'
              | 'TARGETING_TYPE_OPERATING_SYSTEM'
              | 'TARGETING_TYPE_DEVICE_MAKE_MODEL'
              | 'TARGETING_TYPE_KEYWORD'
              | 'TARGETING_TYPE_NEGATIVE_KEYWORD_LIST'
              | 'TARGETING_TYPE_VIEWABILITY'
              | 'TARGETING_TYPE_CATEGORY'
              | 'TARGETING_TYPE_INVENTORY_SOURCE'
              | 'TARGETING_TYPE_LANGUAGE'
              | 'TARGETING_TYPE_AUTHORIZED_SELLER_STATUS'
              | 'TARGETING_TYPE_GEO_REGION'
              | 'TARGETING_TYPE_INVENTORY_SOURCE_GROUP'
              | 'TARGETING_TYPE_EXCHANGE'
              | 'TARGETING_TYPE_SUB_EXCHANGE'
              | 'TARGETING_TYPE_POI'
              | 'TARGETING_TYPE_BUSINESS_CHAIN'
              | 'TARGETING_TYPE_CONTENT_DURATION'
              | 'TARGETING_TYPE_CONTENT_STREAM_TYPE'
              | 'TARGETING_TYPE_NATIVE_CONTENT_POSITION'
              | 'TARGETING_TYPE_OMID'
              | 'TARGETING_TYPE_AUDIO_CONTENT_TYPE'
              | 'TARGETING_TYPE_CONTENT_GENRE'
              | 'TARGETING_TYPE_YOUTUBE_VIDEO'
              | 'TARGETING_TYPE_YOUTUBE_CHANNEL'
              | 'TARGETING_TYPE_SESSION_POSITION'
            assignedTargetingOptionId: string
          }
        } & {
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
        output: Empty
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: {
          param: {
            advertiserId: string
            targetingType:
              | 'TARGETING_TYPE_UNSPECIFIED'
              | 'TARGETING_TYPE_CHANNEL'
              | 'TARGETING_TYPE_APP_CATEGORY'
              | 'TARGETING_TYPE_APP'
              | 'TARGETING_TYPE_URL'
              | 'TARGETING_TYPE_DAY_AND_TIME'
              | 'TARGETING_TYPE_AGE_RANGE'
              | 'TARGETING_TYPE_REGIONAL_LOCATION_LIST'
              | 'TARGETING_TYPE_PROXIMITY_LOCATION_LIST'
              | 'TARGETING_TYPE_GENDER'
              | 'TARGETING_TYPE_VIDEO_PLAYER_SIZE'
              | 'TARGETING_TYPE_USER_REWARDED_CONTENT'
              | 'TARGETING_TYPE_PARENTAL_STATUS'
              | 'TARGETING_TYPE_CONTENT_INSTREAM_POSITION'
              | 'TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION'
              | 'TARGETING_TYPE_DEVICE_TYPE'
              | 'TARGETING_TYPE_AUDIENCE_GROUP'
              | 'TARGETING_TYPE_BROWSER'
              | 'TARGETING_TYPE_HOUSEHOLD_INCOME'
              | 'TARGETING_TYPE_ON_SCREEN_POSITION'
              | 'TARGETING_TYPE_THIRD_PARTY_VERIFIER'
              | 'TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION'
              | 'TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION'
              | 'TARGETING_TYPE_ENVIRONMENT'
              | 'TARGETING_TYPE_CARRIER_AND_ISP'
              | 'TARGETING_TYPE_OPERATING_SYSTEM'
              | 'TARGETING_TYPE_DEVICE_MAKE_MODEL'
              | 'TARGETING_TYPE_KEYWORD'
              | 'TARGETING_TYPE_NEGATIVE_KEYWORD_LIST'
              | 'TARGETING_TYPE_VIEWABILITY'
              | 'TARGETING_TYPE_CATEGORY'
              | 'TARGETING_TYPE_INVENTORY_SOURCE'
              | 'TARGETING_TYPE_LANGUAGE'
              | 'TARGETING_TYPE_AUTHORIZED_SELLER_STATUS'
              | 'TARGETING_TYPE_GEO_REGION'
              | 'TARGETING_TYPE_INVENTORY_SOURCE_GROUP'
              | 'TARGETING_TYPE_EXCHANGE'
              | 'TARGETING_TYPE_SUB_EXCHANGE'
              | 'TARGETING_TYPE_POI'
              | 'TARGETING_TYPE_BUSINESS_CHAIN'
              | 'TARGETING_TYPE_CONTENT_DURATION'
              | 'TARGETING_TYPE_CONTENT_STREAM_TYPE'
              | 'TARGETING_TYPE_NATIVE_CONTENT_POSITION'
              | 'TARGETING_TYPE_OMID'
              | 'TARGETING_TYPE_AUDIO_CONTENT_TYPE'
              | 'TARGETING_TYPE_CONTENT_GENRE'
              | 'TARGETING_TYPE_YOUTUBE_VIDEO'
              | 'TARGETING_TYPE_YOUTUBE_CHANNEL'
              | 'TARGETING_TYPE_SESSION_POSITION'
            assignedTargetingOptionId: string
          }
        } & {
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
        output: AssignedTargetingOption
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/advertisers/:advertiserId/youtubeAdGroupAds': {
      $get: {
        input: { param: { advertiserId: string } } & {
          query: {
            filter?: string | undefined
            orderBy?: string | undefined
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
        output: ListYoutubeAdGroupAdsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/advertisers/:advertiserId/youtubeAdGroupAds/:youtubeAdGroupAdId': {
      $get: {
        input: { param: { advertiserId: string; youtubeAdGroupAdId: string } } & {
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
        output: YoutubeAdGroupAd
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/advertisers/:advertiserId/youtubeAdGroups': {
      $get: {
        input: { param: { advertiserId: string } } & {
          query: {
            filter?: string | undefined
            orderBy?: string | undefined
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
        output: ListYoutubeAdGroupsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/advertisers/:advertiserId/youtubeAdGroups/:youtubeAdGroupId': {
      $get: {
        input: { param: { advertiserId: string; youtubeAdGroupId: string } } & {
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
        output: YoutubeAdGroup
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/advertisers/:advertiserId/youtubeAdGroups/:youtubeAdGroupId/targetingTypes/:targetingType/assignedTargetingOptions': {
      $get: {
        input: {
          param: {
            advertiserId: string
            youtubeAdGroupId: string
            targetingType:
              | 'TARGETING_TYPE_UNSPECIFIED'
              | 'TARGETING_TYPE_CHANNEL'
              | 'TARGETING_TYPE_APP_CATEGORY'
              | 'TARGETING_TYPE_APP'
              | 'TARGETING_TYPE_URL'
              | 'TARGETING_TYPE_DAY_AND_TIME'
              | 'TARGETING_TYPE_AGE_RANGE'
              | 'TARGETING_TYPE_REGIONAL_LOCATION_LIST'
              | 'TARGETING_TYPE_PROXIMITY_LOCATION_LIST'
              | 'TARGETING_TYPE_GENDER'
              | 'TARGETING_TYPE_VIDEO_PLAYER_SIZE'
              | 'TARGETING_TYPE_USER_REWARDED_CONTENT'
              | 'TARGETING_TYPE_PARENTAL_STATUS'
              | 'TARGETING_TYPE_CONTENT_INSTREAM_POSITION'
              | 'TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION'
              | 'TARGETING_TYPE_DEVICE_TYPE'
              | 'TARGETING_TYPE_AUDIENCE_GROUP'
              | 'TARGETING_TYPE_BROWSER'
              | 'TARGETING_TYPE_HOUSEHOLD_INCOME'
              | 'TARGETING_TYPE_ON_SCREEN_POSITION'
              | 'TARGETING_TYPE_THIRD_PARTY_VERIFIER'
              | 'TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION'
              | 'TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION'
              | 'TARGETING_TYPE_ENVIRONMENT'
              | 'TARGETING_TYPE_CARRIER_AND_ISP'
              | 'TARGETING_TYPE_OPERATING_SYSTEM'
              | 'TARGETING_TYPE_DEVICE_MAKE_MODEL'
              | 'TARGETING_TYPE_KEYWORD'
              | 'TARGETING_TYPE_NEGATIVE_KEYWORD_LIST'
              | 'TARGETING_TYPE_VIEWABILITY'
              | 'TARGETING_TYPE_CATEGORY'
              | 'TARGETING_TYPE_INVENTORY_SOURCE'
              | 'TARGETING_TYPE_LANGUAGE'
              | 'TARGETING_TYPE_AUTHORIZED_SELLER_STATUS'
              | 'TARGETING_TYPE_GEO_REGION'
              | 'TARGETING_TYPE_INVENTORY_SOURCE_GROUP'
              | 'TARGETING_TYPE_EXCHANGE'
              | 'TARGETING_TYPE_SUB_EXCHANGE'
              | 'TARGETING_TYPE_POI'
              | 'TARGETING_TYPE_BUSINESS_CHAIN'
              | 'TARGETING_TYPE_CONTENT_DURATION'
              | 'TARGETING_TYPE_CONTENT_STREAM_TYPE'
              | 'TARGETING_TYPE_NATIVE_CONTENT_POSITION'
              | 'TARGETING_TYPE_OMID'
              | 'TARGETING_TYPE_AUDIO_CONTENT_TYPE'
              | 'TARGETING_TYPE_CONTENT_GENRE'
              | 'TARGETING_TYPE_YOUTUBE_VIDEO'
              | 'TARGETING_TYPE_YOUTUBE_CHANNEL'
              | 'TARGETING_TYPE_SESSION_POSITION'
          }
        } & {
          query: {
            filter?: string | undefined
            orderBy?: string | undefined
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
        output: ListYoutubeAdGroupAssignedTargetingOptionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/advertisers/:advertiserId/youtubeAdGroups/:youtubeAdGroupId/targetingTypes/:targetingType/assignedTargetingOptions/:assignedTargetingOptionId': {
      $get: {
        input: {
          param: {
            advertiserId: string
            youtubeAdGroupId: string
            targetingType:
              | 'TARGETING_TYPE_UNSPECIFIED'
              | 'TARGETING_TYPE_CHANNEL'
              | 'TARGETING_TYPE_APP_CATEGORY'
              | 'TARGETING_TYPE_APP'
              | 'TARGETING_TYPE_URL'
              | 'TARGETING_TYPE_DAY_AND_TIME'
              | 'TARGETING_TYPE_AGE_RANGE'
              | 'TARGETING_TYPE_REGIONAL_LOCATION_LIST'
              | 'TARGETING_TYPE_PROXIMITY_LOCATION_LIST'
              | 'TARGETING_TYPE_GENDER'
              | 'TARGETING_TYPE_VIDEO_PLAYER_SIZE'
              | 'TARGETING_TYPE_USER_REWARDED_CONTENT'
              | 'TARGETING_TYPE_PARENTAL_STATUS'
              | 'TARGETING_TYPE_CONTENT_INSTREAM_POSITION'
              | 'TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION'
              | 'TARGETING_TYPE_DEVICE_TYPE'
              | 'TARGETING_TYPE_AUDIENCE_GROUP'
              | 'TARGETING_TYPE_BROWSER'
              | 'TARGETING_TYPE_HOUSEHOLD_INCOME'
              | 'TARGETING_TYPE_ON_SCREEN_POSITION'
              | 'TARGETING_TYPE_THIRD_PARTY_VERIFIER'
              | 'TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION'
              | 'TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION'
              | 'TARGETING_TYPE_ENVIRONMENT'
              | 'TARGETING_TYPE_CARRIER_AND_ISP'
              | 'TARGETING_TYPE_OPERATING_SYSTEM'
              | 'TARGETING_TYPE_DEVICE_MAKE_MODEL'
              | 'TARGETING_TYPE_KEYWORD'
              | 'TARGETING_TYPE_NEGATIVE_KEYWORD_LIST'
              | 'TARGETING_TYPE_VIEWABILITY'
              | 'TARGETING_TYPE_CATEGORY'
              | 'TARGETING_TYPE_INVENTORY_SOURCE'
              | 'TARGETING_TYPE_LANGUAGE'
              | 'TARGETING_TYPE_AUTHORIZED_SELLER_STATUS'
              | 'TARGETING_TYPE_GEO_REGION'
              | 'TARGETING_TYPE_INVENTORY_SOURCE_GROUP'
              | 'TARGETING_TYPE_EXCHANGE'
              | 'TARGETING_TYPE_SUB_EXCHANGE'
              | 'TARGETING_TYPE_POI'
              | 'TARGETING_TYPE_BUSINESS_CHAIN'
              | 'TARGETING_TYPE_CONTENT_DURATION'
              | 'TARGETING_TYPE_CONTENT_STREAM_TYPE'
              | 'TARGETING_TYPE_NATIVE_CONTENT_POSITION'
              | 'TARGETING_TYPE_OMID'
              | 'TARGETING_TYPE_AUDIO_CONTENT_TYPE'
              | 'TARGETING_TYPE_CONTENT_GENRE'
              | 'TARGETING_TYPE_YOUTUBE_VIDEO'
              | 'TARGETING_TYPE_YOUTUBE_CHANNEL'
              | 'TARGETING_TYPE_SESSION_POSITION'
            assignedTargetingOptionId: string
          }
        } & {
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
        output: AssignedTargetingOption
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/advertisers/:advertiserId/youtubeAdGroups:bulkListAdGroupAssignedTargetingOptions': {
      $get: {
        input: { param: { advertiserId: string } } & {
          query: {
            filter?: string | undefined
            orderBy?: string | undefined
            pageSize?: number | undefined
            pageToken?: string | undefined
            youtubeAdGroupIds?: string[] | undefined
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
        output: BulkListAdGroupAssignedTargetingOptionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/advertisers/:advertiserId:audit': {
      $get: {
        input: { param: { advertiserId: string } } & {
          query: {
            readMask?: string | undefined
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
        output: AuditAdvertiserResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/advertisers/:advertiserId:editAssignedTargetingOptions': {
      $post: {
        input: { param: { advertiserId: string } } & {
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
        } & { json: BulkEditAdvertiserAssignedTargetingOptionsRequest }
        output: BulkEditAdvertiserAssignedTargetingOptionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/advertisers/:advertiserId:listAssignedTargetingOptions': {
      $get: {
        input: { param: { advertiserId: string } } & {
          query: {
            filter?: string | undefined
            orderBy?: string | undefined
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
        output: BulkListAdvertiserAssignedTargetingOptionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/combinedAudiences': {
      $get: {
        input: {
          query: {
            advertiserId?: string | undefined
            filter?: string | undefined
            orderBy?: string | undefined
            pageSize?: number | undefined
            pageToken?: string | undefined
            partnerId?: string | undefined
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
        output: ListCombinedAudiencesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/combinedAudiences/:combinedAudienceId': {
      $get: {
        input: { param: { combinedAudienceId: string } } & {
          query: {
            advertiserId?: string | undefined
            partnerId?: string | undefined
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
        output: CombinedAudience
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/customBiddingAlgorithms': {
      $get: {
        input: {
          query: {
            advertiserId?: string | undefined
            filter?: string | undefined
            orderBy?: string | undefined
            pageSize?: number | undefined
            pageToken?: string | undefined
            partnerId?: string | undefined
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
        output: ListCustomBiddingAlgorithmsResponse
        outputFormat: 'json'
        status: 200
      }
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
        } & { json: CustomBiddingAlgorithm }
        output: CustomBiddingAlgorithm
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/customBiddingAlgorithms/:customBiddingAlgorithmId': {
      $get: {
        input: { param: { customBiddingAlgorithmId: string } } & {
          query: {
            advertiserId?: string | undefined
            partnerId?: string | undefined
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
        output: CustomBiddingAlgorithm
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { customBiddingAlgorithmId: string } } & {
          query: {
            updateMask?: string | undefined
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
        } & { json: CustomBiddingAlgorithm }
        output: CustomBiddingAlgorithm
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/customBiddingAlgorithms/:customBiddingAlgorithmId/scripts': {
      $get: {
        input: { param: { customBiddingAlgorithmId: string } } & {
          query: {
            advertiserId?: string | undefined
            orderBy?: string | undefined
            pageSize?: number | undefined
            pageToken?: string | undefined
            partnerId?: string | undefined
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
        output: ListCustomBiddingScriptsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { customBiddingAlgorithmId: string } } & {
          query: {
            advertiserId?: string | undefined
            partnerId?: string | undefined
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
        } & { json: CustomBiddingScript }
        output: CustomBiddingScript
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/customBiddingAlgorithms/:customBiddingAlgorithmId/scripts/:customBiddingScriptId': {
      $get: {
        input: { param: { customBiddingAlgorithmId: string; customBiddingScriptId: string } } & {
          query: {
            advertiserId?: string | undefined
            partnerId?: string | undefined
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
        output: CustomBiddingScript
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/customBiddingAlgorithms/:customBiddingAlgorithmId:uploadScript': {
      $get: {
        input: { param: { customBiddingAlgorithmId: string } } & {
          query: {
            advertiserId?: string | undefined
            partnerId?: string | undefined
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
        output: CustomBiddingScriptRef
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/customLists': {
      $get: {
        input: {
          query: {
            advertiserId?: string | undefined
            filter?: string | undefined
            orderBy?: string | undefined
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
        output: ListCustomListsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/customLists/:customListId': {
      $get: {
        input: { param: { customListId: string } } & {
          query: {
            advertiserId?: string | undefined
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
        output: CustomList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/firstAndThirdPartyAudiences': {
      $get: {
        input: {
          query: {
            advertiserId?: string | undefined
            filter?: string | undefined
            orderBy?: string | undefined
            pageSize?: number | undefined
            pageToken?: string | undefined
            partnerId?: string | undefined
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
        output: ListFirstAndThirdPartyAudiencesResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: {
          query: {
            advertiserId?: string | undefined
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
        } & { json: FirstAndThirdPartyAudience }
        output: FirstAndThirdPartyAudience
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/firstAndThirdPartyAudiences/:firstAndThirdPartyAudienceId': {
      $get: {
        input: { param: { firstAndThirdPartyAudienceId: string } } & {
          query: {
            advertiserId?: string | undefined
            partnerId?: string | undefined
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
        output: FirstAndThirdPartyAudience
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { firstAndThirdPartyAudienceId: string } } & {
          query: {
            advertiserId?: string | undefined
            updateMask?: string | undefined
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
        } & { json: FirstAndThirdPartyAudience }
        output: FirstAndThirdPartyAudience
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/firstAndThirdPartyAudiences/:firstAndThirdPartyAudienceId:editCustomerMatchMembers': {
      $post: {
        input: { param: { firstAndThirdPartyAudienceId: string } } & {
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
        } & { json: EditCustomerMatchMembersRequest }
        output: EditCustomerMatchMembersResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/floodlightGroups/:floodlightGroupId': {
      $get: {
        input: { param: { floodlightGroupId: string } } & {
          query: {
            partnerId?: string | undefined
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
        output: FloodlightGroup
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/googleAudiences': {
      $get: {
        input: {
          query: {
            advertiserId?: string | undefined
            filter?: string | undefined
            orderBy?: string | undefined
            pageSize?: number | undefined
            pageToken?: string | undefined
            partnerId?: string | undefined
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
        output: ListGoogleAudiencesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/googleAudiences/:googleAudienceId': {
      $get: {
        input: { param: { googleAudienceId: string } } & {
          query: {
            advertiserId?: string | undefined
            partnerId?: string | undefined
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
        output: GoogleAudience
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/guaranteedOrders': {
      $get: {
        input: {
          query: {
            advertiserId?: string | undefined
            filter?: string | undefined
            orderBy?: string | undefined
            pageSize?: number | undefined
            pageToken?: string | undefined
            partnerId?: string | undefined
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
        output: ListGuaranteedOrdersResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: {
          query: {
            advertiserId?: string | undefined
            partnerId?: string | undefined
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
        } & { json: GuaranteedOrder }
        output: GuaranteedOrder
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/guaranteedOrders/:guaranteedOrderId': {
      $get: {
        input: { param: { guaranteedOrderId: string } } & {
          query: {
            advertiserId?: string | undefined
            partnerId?: string | undefined
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
        output: GuaranteedOrder
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { guaranteedOrderId: string } } & {
          query: {
            advertiserId?: string | undefined
            partnerId?: string | undefined
            updateMask?: string | undefined
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
        } & { json: GuaranteedOrder }
        output: GuaranteedOrder
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/guaranteedOrders/:guaranteedOrderId:editGuaranteedOrderReadAccessors': {
      $post: {
        input: { param: { guaranteedOrderId: string } } & {
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
        } & { json: EditGuaranteedOrderReadAccessorsRequest }
        output: EditGuaranteedOrderReadAccessorsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/inventorySourceGroups': {
      $get: {
        input: {
          query: {
            advertiserId?: string | undefined
            filter?: string | undefined
            orderBy?: string | undefined
            pageSize?: number | undefined
            pageToken?: string | undefined
            partnerId?: string | undefined
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
        output: ListInventorySourceGroupsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: {
          query: {
            advertiserId?: string | undefined
            partnerId?: string | undefined
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
        } & { json: InventorySourceGroup }
        output: InventorySourceGroup
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/inventorySourceGroups/:inventorySourceGroupId': {
      $delete: {
        input: { param: { inventorySourceGroupId: string } } & {
          query: {
            advertiserId?: string | undefined
            partnerId?: string | undefined
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
        output: Empty
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { inventorySourceGroupId: string } } & {
          query: {
            advertiserId?: string | undefined
            partnerId?: string | undefined
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
        output: InventorySourceGroup
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/inventorySourceGroups/:inventorySourceGroupId/assignedInventorySources': {
      $get: {
        input: { param: { inventorySourceGroupId: string } } & {
          query: {
            advertiserId?: string | undefined
            filter?: string | undefined
            orderBy?: string | undefined
            pageSize?: number | undefined
            pageToken?: string | undefined
            partnerId?: string | undefined
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
        output: ListAssignedInventorySourcesResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { inventorySourceGroupId: string } } & {
          query: {
            advertiserId?: string | undefined
            partnerId?: string | undefined
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
        } & { json: AssignedInventorySource }
        output: AssignedInventorySource
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/inventorySourceGroups/:inventorySourceGroupId/assignedInventorySources/:assignedInventorySourceId': {
      $delete: {
        input: { param: { inventorySourceGroupId: string; assignedInventorySourceId: string } } & {
          query: {
            advertiserId?: string | undefined
            partnerId?: string | undefined
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
        output: Empty
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/inventorySourceGroups/:inventorySourceGroupId/assignedInventorySources:bulkEdit': {
      $post: {
        input: { param: { inventorySourceGroupId: string } } & {
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
        } & { json: BulkEditAssignedInventorySourcesRequest }
        output: BulkEditAssignedInventorySourcesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/inventorySources': {
      $get: {
        input: {
          query: {
            advertiserId?: string | undefined
            filter?: string | undefined
            orderBy?: string | undefined
            pageSize?: number | undefined
            pageToken?: string | undefined
            partnerId?: string | undefined
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
        output: ListInventorySourcesResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: {
          query: {
            advertiserId?: string | undefined
            partnerId?: string | undefined
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
        } & { json: InventorySource }
        output: InventorySource
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/inventorySources/:inventorySourceId': {
      $get: {
        input: { param: { inventorySourceId: string } } & {
          query: {
            partnerId?: string | undefined
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
        output: InventorySource
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { inventorySourceId: string } } & {
          query: {
            advertiserId?: string | undefined
            partnerId?: string | undefined
            updateMask?: string | undefined
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
        } & { json: InventorySource }
        output: InventorySource
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/inventorySources/:inventorySourceId:editInventorySourceReadWriteAccessors': {
      $post: {
        input: { param: { inventorySourceId: string } } & {
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
        } & { json: EditInventorySourceReadWriteAccessorsRequest }
        output: InventorySourceAccessors
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/partners': {
      $get: {
        input: {
          query: {
            filter?: string | undefined
            orderBy?: string | undefined
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
        output: ListPartnersResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/partners/:partnerId': {
      $get: {
        input: { param: { partnerId: string } } & {
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
        output: Partner
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/partners/:partnerId/channels': {
      $get: {
        input: { param: { partnerId: string } } & {
          query: {
            advertiserId?: string | undefined
            filter?: string | undefined
            orderBy?: string | undefined
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
        output: ListChannelsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { partnerId: string } } & {
          query: {
            advertiserId?: string | undefined
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
        } & { json: Channel }
        output: Channel
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/partners/:partnerId/channels/:channelId': {
      $patch: {
        input: { param: { partnerId: string; channelId: string } } & {
          query: {
            advertiserId?: string | undefined
            updateMask?: string | undefined
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
        } & { json: Channel }
        output: Channel
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/partners/:partnerId/channels/:channelId/sites': {
      $get: {
        input: { param: { partnerId: string; channelId: string } } & {
          query: {
            advertiserId?: string | undefined
            filter?: string | undefined
            orderBy?: string | undefined
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
        output: ListSitesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/partners/:partnerId/channels/:channelId/sites/:urlOrAppId': {
      $delete: {
        input: { param: { partnerId: string; channelId: string; urlOrAppId: string } } & {
          query: {
            advertiserId?: string | undefined
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
        output: Empty
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/partners/:partnerId/channels/:channelId/sites:bulkEdit': {
      $post: {
        input: { param: { partnerId: string; channelId: string } } & {
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
        } & { json: BulkEditSitesRequest }
        output: BulkEditSitesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/partners/:partnerId/channels/:channelId/sites:replace': {
      $post: {
        input: { param: { partnerId: string; channelId: string } } & {
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
        } & { json: ReplaceSitesRequest }
        output: ReplaceSitesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/partners/:partnerId/targetingTypes/:targetingType/assignedTargetingOptions': {
      $get: {
        input: {
          param: {
            partnerId: string
            targetingType:
              | 'TARGETING_TYPE_UNSPECIFIED'
              | 'TARGETING_TYPE_CHANNEL'
              | 'TARGETING_TYPE_APP_CATEGORY'
              | 'TARGETING_TYPE_APP'
              | 'TARGETING_TYPE_URL'
              | 'TARGETING_TYPE_DAY_AND_TIME'
              | 'TARGETING_TYPE_AGE_RANGE'
              | 'TARGETING_TYPE_REGIONAL_LOCATION_LIST'
              | 'TARGETING_TYPE_PROXIMITY_LOCATION_LIST'
              | 'TARGETING_TYPE_GENDER'
              | 'TARGETING_TYPE_VIDEO_PLAYER_SIZE'
              | 'TARGETING_TYPE_USER_REWARDED_CONTENT'
              | 'TARGETING_TYPE_PARENTAL_STATUS'
              | 'TARGETING_TYPE_CONTENT_INSTREAM_POSITION'
              | 'TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION'
              | 'TARGETING_TYPE_DEVICE_TYPE'
              | 'TARGETING_TYPE_AUDIENCE_GROUP'
              | 'TARGETING_TYPE_BROWSER'
              | 'TARGETING_TYPE_HOUSEHOLD_INCOME'
              | 'TARGETING_TYPE_ON_SCREEN_POSITION'
              | 'TARGETING_TYPE_THIRD_PARTY_VERIFIER'
              | 'TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION'
              | 'TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION'
              | 'TARGETING_TYPE_ENVIRONMENT'
              | 'TARGETING_TYPE_CARRIER_AND_ISP'
              | 'TARGETING_TYPE_OPERATING_SYSTEM'
              | 'TARGETING_TYPE_DEVICE_MAKE_MODEL'
              | 'TARGETING_TYPE_KEYWORD'
              | 'TARGETING_TYPE_NEGATIVE_KEYWORD_LIST'
              | 'TARGETING_TYPE_VIEWABILITY'
              | 'TARGETING_TYPE_CATEGORY'
              | 'TARGETING_TYPE_INVENTORY_SOURCE'
              | 'TARGETING_TYPE_LANGUAGE'
              | 'TARGETING_TYPE_AUTHORIZED_SELLER_STATUS'
              | 'TARGETING_TYPE_GEO_REGION'
              | 'TARGETING_TYPE_INVENTORY_SOURCE_GROUP'
              | 'TARGETING_TYPE_EXCHANGE'
              | 'TARGETING_TYPE_SUB_EXCHANGE'
              | 'TARGETING_TYPE_POI'
              | 'TARGETING_TYPE_BUSINESS_CHAIN'
              | 'TARGETING_TYPE_CONTENT_DURATION'
              | 'TARGETING_TYPE_CONTENT_STREAM_TYPE'
              | 'TARGETING_TYPE_NATIVE_CONTENT_POSITION'
              | 'TARGETING_TYPE_OMID'
              | 'TARGETING_TYPE_AUDIO_CONTENT_TYPE'
              | 'TARGETING_TYPE_CONTENT_GENRE'
              | 'TARGETING_TYPE_YOUTUBE_VIDEO'
              | 'TARGETING_TYPE_YOUTUBE_CHANNEL'
              | 'TARGETING_TYPE_SESSION_POSITION'
          }
        } & {
          query: {
            filter?: string | undefined
            orderBy?: string | undefined
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
        output: ListPartnerAssignedTargetingOptionsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: {
          param: {
            partnerId: string
            targetingType:
              | 'TARGETING_TYPE_UNSPECIFIED'
              | 'TARGETING_TYPE_CHANNEL'
              | 'TARGETING_TYPE_APP_CATEGORY'
              | 'TARGETING_TYPE_APP'
              | 'TARGETING_TYPE_URL'
              | 'TARGETING_TYPE_DAY_AND_TIME'
              | 'TARGETING_TYPE_AGE_RANGE'
              | 'TARGETING_TYPE_REGIONAL_LOCATION_LIST'
              | 'TARGETING_TYPE_PROXIMITY_LOCATION_LIST'
              | 'TARGETING_TYPE_GENDER'
              | 'TARGETING_TYPE_VIDEO_PLAYER_SIZE'
              | 'TARGETING_TYPE_USER_REWARDED_CONTENT'
              | 'TARGETING_TYPE_PARENTAL_STATUS'
              | 'TARGETING_TYPE_CONTENT_INSTREAM_POSITION'
              | 'TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION'
              | 'TARGETING_TYPE_DEVICE_TYPE'
              | 'TARGETING_TYPE_AUDIENCE_GROUP'
              | 'TARGETING_TYPE_BROWSER'
              | 'TARGETING_TYPE_HOUSEHOLD_INCOME'
              | 'TARGETING_TYPE_ON_SCREEN_POSITION'
              | 'TARGETING_TYPE_THIRD_PARTY_VERIFIER'
              | 'TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION'
              | 'TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION'
              | 'TARGETING_TYPE_ENVIRONMENT'
              | 'TARGETING_TYPE_CARRIER_AND_ISP'
              | 'TARGETING_TYPE_OPERATING_SYSTEM'
              | 'TARGETING_TYPE_DEVICE_MAKE_MODEL'
              | 'TARGETING_TYPE_KEYWORD'
              | 'TARGETING_TYPE_NEGATIVE_KEYWORD_LIST'
              | 'TARGETING_TYPE_VIEWABILITY'
              | 'TARGETING_TYPE_CATEGORY'
              | 'TARGETING_TYPE_INVENTORY_SOURCE'
              | 'TARGETING_TYPE_LANGUAGE'
              | 'TARGETING_TYPE_AUTHORIZED_SELLER_STATUS'
              | 'TARGETING_TYPE_GEO_REGION'
              | 'TARGETING_TYPE_INVENTORY_SOURCE_GROUP'
              | 'TARGETING_TYPE_EXCHANGE'
              | 'TARGETING_TYPE_SUB_EXCHANGE'
              | 'TARGETING_TYPE_POI'
              | 'TARGETING_TYPE_BUSINESS_CHAIN'
              | 'TARGETING_TYPE_CONTENT_DURATION'
              | 'TARGETING_TYPE_CONTENT_STREAM_TYPE'
              | 'TARGETING_TYPE_NATIVE_CONTENT_POSITION'
              | 'TARGETING_TYPE_OMID'
              | 'TARGETING_TYPE_AUDIO_CONTENT_TYPE'
              | 'TARGETING_TYPE_CONTENT_GENRE'
              | 'TARGETING_TYPE_YOUTUBE_VIDEO'
              | 'TARGETING_TYPE_YOUTUBE_CHANNEL'
              | 'TARGETING_TYPE_SESSION_POSITION'
          }
        } & {
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
        } & { json: AssignedTargetingOption }
        output: AssignedTargetingOption
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/partners/:partnerId/targetingTypes/:targetingType/assignedTargetingOptions/:assignedTargetingOptionId': {
      $delete: {
        input: {
          param: {
            partnerId: string
            targetingType:
              | 'TARGETING_TYPE_UNSPECIFIED'
              | 'TARGETING_TYPE_CHANNEL'
              | 'TARGETING_TYPE_APP_CATEGORY'
              | 'TARGETING_TYPE_APP'
              | 'TARGETING_TYPE_URL'
              | 'TARGETING_TYPE_DAY_AND_TIME'
              | 'TARGETING_TYPE_AGE_RANGE'
              | 'TARGETING_TYPE_REGIONAL_LOCATION_LIST'
              | 'TARGETING_TYPE_PROXIMITY_LOCATION_LIST'
              | 'TARGETING_TYPE_GENDER'
              | 'TARGETING_TYPE_VIDEO_PLAYER_SIZE'
              | 'TARGETING_TYPE_USER_REWARDED_CONTENT'
              | 'TARGETING_TYPE_PARENTAL_STATUS'
              | 'TARGETING_TYPE_CONTENT_INSTREAM_POSITION'
              | 'TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION'
              | 'TARGETING_TYPE_DEVICE_TYPE'
              | 'TARGETING_TYPE_AUDIENCE_GROUP'
              | 'TARGETING_TYPE_BROWSER'
              | 'TARGETING_TYPE_HOUSEHOLD_INCOME'
              | 'TARGETING_TYPE_ON_SCREEN_POSITION'
              | 'TARGETING_TYPE_THIRD_PARTY_VERIFIER'
              | 'TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION'
              | 'TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION'
              | 'TARGETING_TYPE_ENVIRONMENT'
              | 'TARGETING_TYPE_CARRIER_AND_ISP'
              | 'TARGETING_TYPE_OPERATING_SYSTEM'
              | 'TARGETING_TYPE_DEVICE_MAKE_MODEL'
              | 'TARGETING_TYPE_KEYWORD'
              | 'TARGETING_TYPE_NEGATIVE_KEYWORD_LIST'
              | 'TARGETING_TYPE_VIEWABILITY'
              | 'TARGETING_TYPE_CATEGORY'
              | 'TARGETING_TYPE_INVENTORY_SOURCE'
              | 'TARGETING_TYPE_LANGUAGE'
              | 'TARGETING_TYPE_AUTHORIZED_SELLER_STATUS'
              | 'TARGETING_TYPE_GEO_REGION'
              | 'TARGETING_TYPE_INVENTORY_SOURCE_GROUP'
              | 'TARGETING_TYPE_EXCHANGE'
              | 'TARGETING_TYPE_SUB_EXCHANGE'
              | 'TARGETING_TYPE_POI'
              | 'TARGETING_TYPE_BUSINESS_CHAIN'
              | 'TARGETING_TYPE_CONTENT_DURATION'
              | 'TARGETING_TYPE_CONTENT_STREAM_TYPE'
              | 'TARGETING_TYPE_NATIVE_CONTENT_POSITION'
              | 'TARGETING_TYPE_OMID'
              | 'TARGETING_TYPE_AUDIO_CONTENT_TYPE'
              | 'TARGETING_TYPE_CONTENT_GENRE'
              | 'TARGETING_TYPE_YOUTUBE_VIDEO'
              | 'TARGETING_TYPE_YOUTUBE_CHANNEL'
              | 'TARGETING_TYPE_SESSION_POSITION'
            assignedTargetingOptionId: string
          }
        } & {
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
        output: Empty
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: {
          param: {
            partnerId: string
            targetingType:
              | 'TARGETING_TYPE_UNSPECIFIED'
              | 'TARGETING_TYPE_CHANNEL'
              | 'TARGETING_TYPE_APP_CATEGORY'
              | 'TARGETING_TYPE_APP'
              | 'TARGETING_TYPE_URL'
              | 'TARGETING_TYPE_DAY_AND_TIME'
              | 'TARGETING_TYPE_AGE_RANGE'
              | 'TARGETING_TYPE_REGIONAL_LOCATION_LIST'
              | 'TARGETING_TYPE_PROXIMITY_LOCATION_LIST'
              | 'TARGETING_TYPE_GENDER'
              | 'TARGETING_TYPE_VIDEO_PLAYER_SIZE'
              | 'TARGETING_TYPE_USER_REWARDED_CONTENT'
              | 'TARGETING_TYPE_PARENTAL_STATUS'
              | 'TARGETING_TYPE_CONTENT_INSTREAM_POSITION'
              | 'TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION'
              | 'TARGETING_TYPE_DEVICE_TYPE'
              | 'TARGETING_TYPE_AUDIENCE_GROUP'
              | 'TARGETING_TYPE_BROWSER'
              | 'TARGETING_TYPE_HOUSEHOLD_INCOME'
              | 'TARGETING_TYPE_ON_SCREEN_POSITION'
              | 'TARGETING_TYPE_THIRD_PARTY_VERIFIER'
              | 'TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION'
              | 'TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION'
              | 'TARGETING_TYPE_ENVIRONMENT'
              | 'TARGETING_TYPE_CARRIER_AND_ISP'
              | 'TARGETING_TYPE_OPERATING_SYSTEM'
              | 'TARGETING_TYPE_DEVICE_MAKE_MODEL'
              | 'TARGETING_TYPE_KEYWORD'
              | 'TARGETING_TYPE_NEGATIVE_KEYWORD_LIST'
              | 'TARGETING_TYPE_VIEWABILITY'
              | 'TARGETING_TYPE_CATEGORY'
              | 'TARGETING_TYPE_INVENTORY_SOURCE'
              | 'TARGETING_TYPE_LANGUAGE'
              | 'TARGETING_TYPE_AUTHORIZED_SELLER_STATUS'
              | 'TARGETING_TYPE_GEO_REGION'
              | 'TARGETING_TYPE_INVENTORY_SOURCE_GROUP'
              | 'TARGETING_TYPE_EXCHANGE'
              | 'TARGETING_TYPE_SUB_EXCHANGE'
              | 'TARGETING_TYPE_POI'
              | 'TARGETING_TYPE_BUSINESS_CHAIN'
              | 'TARGETING_TYPE_CONTENT_DURATION'
              | 'TARGETING_TYPE_CONTENT_STREAM_TYPE'
              | 'TARGETING_TYPE_NATIVE_CONTENT_POSITION'
              | 'TARGETING_TYPE_OMID'
              | 'TARGETING_TYPE_AUDIO_CONTENT_TYPE'
              | 'TARGETING_TYPE_CONTENT_GENRE'
              | 'TARGETING_TYPE_YOUTUBE_VIDEO'
              | 'TARGETING_TYPE_YOUTUBE_CHANNEL'
              | 'TARGETING_TYPE_SESSION_POSITION'
            assignedTargetingOptionId: string
          }
        } & {
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
        output: AssignedTargetingOption
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/partners/:partnerId:editAssignedTargetingOptions': {
      $post: {
        input: { param: { partnerId: string } } & {
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
        } & { json: BulkEditPartnerAssignedTargetingOptionsRequest }
        output: BulkEditPartnerAssignedTargetingOptionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/sdfdownloadtasks': {
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
        } & { json: CreateSdfDownloadTaskRequest }
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/targetingTypes/:targetingType/targetingOptions': {
      $get: {
        input: {
          param: {
            targetingType:
              | 'TARGETING_TYPE_UNSPECIFIED'
              | 'TARGETING_TYPE_CHANNEL'
              | 'TARGETING_TYPE_APP_CATEGORY'
              | 'TARGETING_TYPE_APP'
              | 'TARGETING_TYPE_URL'
              | 'TARGETING_TYPE_DAY_AND_TIME'
              | 'TARGETING_TYPE_AGE_RANGE'
              | 'TARGETING_TYPE_REGIONAL_LOCATION_LIST'
              | 'TARGETING_TYPE_PROXIMITY_LOCATION_LIST'
              | 'TARGETING_TYPE_GENDER'
              | 'TARGETING_TYPE_VIDEO_PLAYER_SIZE'
              | 'TARGETING_TYPE_USER_REWARDED_CONTENT'
              | 'TARGETING_TYPE_PARENTAL_STATUS'
              | 'TARGETING_TYPE_CONTENT_INSTREAM_POSITION'
              | 'TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION'
              | 'TARGETING_TYPE_DEVICE_TYPE'
              | 'TARGETING_TYPE_AUDIENCE_GROUP'
              | 'TARGETING_TYPE_BROWSER'
              | 'TARGETING_TYPE_HOUSEHOLD_INCOME'
              | 'TARGETING_TYPE_ON_SCREEN_POSITION'
              | 'TARGETING_TYPE_THIRD_PARTY_VERIFIER'
              | 'TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION'
              | 'TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION'
              | 'TARGETING_TYPE_ENVIRONMENT'
              | 'TARGETING_TYPE_CARRIER_AND_ISP'
              | 'TARGETING_TYPE_OPERATING_SYSTEM'
              | 'TARGETING_TYPE_DEVICE_MAKE_MODEL'
              | 'TARGETING_TYPE_KEYWORD'
              | 'TARGETING_TYPE_NEGATIVE_KEYWORD_LIST'
              | 'TARGETING_TYPE_VIEWABILITY'
              | 'TARGETING_TYPE_CATEGORY'
              | 'TARGETING_TYPE_INVENTORY_SOURCE'
              | 'TARGETING_TYPE_LANGUAGE'
              | 'TARGETING_TYPE_AUTHORIZED_SELLER_STATUS'
              | 'TARGETING_TYPE_GEO_REGION'
              | 'TARGETING_TYPE_INVENTORY_SOURCE_GROUP'
              | 'TARGETING_TYPE_EXCHANGE'
              | 'TARGETING_TYPE_SUB_EXCHANGE'
              | 'TARGETING_TYPE_POI'
              | 'TARGETING_TYPE_BUSINESS_CHAIN'
              | 'TARGETING_TYPE_CONTENT_DURATION'
              | 'TARGETING_TYPE_CONTENT_STREAM_TYPE'
              | 'TARGETING_TYPE_NATIVE_CONTENT_POSITION'
              | 'TARGETING_TYPE_OMID'
              | 'TARGETING_TYPE_AUDIO_CONTENT_TYPE'
              | 'TARGETING_TYPE_CONTENT_GENRE'
              | 'TARGETING_TYPE_YOUTUBE_VIDEO'
              | 'TARGETING_TYPE_YOUTUBE_CHANNEL'
              | 'TARGETING_TYPE_SESSION_POSITION'
          }
        } & {
          query: {
            advertiserId?: string | undefined
            filter?: string | undefined
            orderBy?: string | undefined
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
        output: ListTargetingOptionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/targetingTypes/:targetingType/targetingOptions/:targetingOptionId': {
      $get: {
        input: {
          param: {
            targetingType:
              | 'TARGETING_TYPE_UNSPECIFIED'
              | 'TARGETING_TYPE_CHANNEL'
              | 'TARGETING_TYPE_APP_CATEGORY'
              | 'TARGETING_TYPE_APP'
              | 'TARGETING_TYPE_URL'
              | 'TARGETING_TYPE_DAY_AND_TIME'
              | 'TARGETING_TYPE_AGE_RANGE'
              | 'TARGETING_TYPE_REGIONAL_LOCATION_LIST'
              | 'TARGETING_TYPE_PROXIMITY_LOCATION_LIST'
              | 'TARGETING_TYPE_GENDER'
              | 'TARGETING_TYPE_VIDEO_PLAYER_SIZE'
              | 'TARGETING_TYPE_USER_REWARDED_CONTENT'
              | 'TARGETING_TYPE_PARENTAL_STATUS'
              | 'TARGETING_TYPE_CONTENT_INSTREAM_POSITION'
              | 'TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION'
              | 'TARGETING_TYPE_DEVICE_TYPE'
              | 'TARGETING_TYPE_AUDIENCE_GROUP'
              | 'TARGETING_TYPE_BROWSER'
              | 'TARGETING_TYPE_HOUSEHOLD_INCOME'
              | 'TARGETING_TYPE_ON_SCREEN_POSITION'
              | 'TARGETING_TYPE_THIRD_PARTY_VERIFIER'
              | 'TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION'
              | 'TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION'
              | 'TARGETING_TYPE_ENVIRONMENT'
              | 'TARGETING_TYPE_CARRIER_AND_ISP'
              | 'TARGETING_TYPE_OPERATING_SYSTEM'
              | 'TARGETING_TYPE_DEVICE_MAKE_MODEL'
              | 'TARGETING_TYPE_KEYWORD'
              | 'TARGETING_TYPE_NEGATIVE_KEYWORD_LIST'
              | 'TARGETING_TYPE_VIEWABILITY'
              | 'TARGETING_TYPE_CATEGORY'
              | 'TARGETING_TYPE_INVENTORY_SOURCE'
              | 'TARGETING_TYPE_LANGUAGE'
              | 'TARGETING_TYPE_AUTHORIZED_SELLER_STATUS'
              | 'TARGETING_TYPE_GEO_REGION'
              | 'TARGETING_TYPE_INVENTORY_SOURCE_GROUP'
              | 'TARGETING_TYPE_EXCHANGE'
              | 'TARGETING_TYPE_SUB_EXCHANGE'
              | 'TARGETING_TYPE_POI'
              | 'TARGETING_TYPE_BUSINESS_CHAIN'
              | 'TARGETING_TYPE_CONTENT_DURATION'
              | 'TARGETING_TYPE_CONTENT_STREAM_TYPE'
              | 'TARGETING_TYPE_NATIVE_CONTENT_POSITION'
              | 'TARGETING_TYPE_OMID'
              | 'TARGETING_TYPE_AUDIO_CONTENT_TYPE'
              | 'TARGETING_TYPE_CONTENT_GENRE'
              | 'TARGETING_TYPE_YOUTUBE_VIDEO'
              | 'TARGETING_TYPE_YOUTUBE_CHANNEL'
              | 'TARGETING_TYPE_SESSION_POSITION'
            targetingOptionId: string
          }
        } & {
          query: {
            advertiserId?: string | undefined
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
        output: TargetingOption
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/targetingTypes/:targetingType/targetingOptions:search': {
      $post: {
        input: {
          param: {
            targetingType:
              | 'TARGETING_TYPE_UNSPECIFIED'
              | 'TARGETING_TYPE_CHANNEL'
              | 'TARGETING_TYPE_APP_CATEGORY'
              | 'TARGETING_TYPE_APP'
              | 'TARGETING_TYPE_URL'
              | 'TARGETING_TYPE_DAY_AND_TIME'
              | 'TARGETING_TYPE_AGE_RANGE'
              | 'TARGETING_TYPE_REGIONAL_LOCATION_LIST'
              | 'TARGETING_TYPE_PROXIMITY_LOCATION_LIST'
              | 'TARGETING_TYPE_GENDER'
              | 'TARGETING_TYPE_VIDEO_PLAYER_SIZE'
              | 'TARGETING_TYPE_USER_REWARDED_CONTENT'
              | 'TARGETING_TYPE_PARENTAL_STATUS'
              | 'TARGETING_TYPE_CONTENT_INSTREAM_POSITION'
              | 'TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION'
              | 'TARGETING_TYPE_DEVICE_TYPE'
              | 'TARGETING_TYPE_AUDIENCE_GROUP'
              | 'TARGETING_TYPE_BROWSER'
              | 'TARGETING_TYPE_HOUSEHOLD_INCOME'
              | 'TARGETING_TYPE_ON_SCREEN_POSITION'
              | 'TARGETING_TYPE_THIRD_PARTY_VERIFIER'
              | 'TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION'
              | 'TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION'
              | 'TARGETING_TYPE_ENVIRONMENT'
              | 'TARGETING_TYPE_CARRIER_AND_ISP'
              | 'TARGETING_TYPE_OPERATING_SYSTEM'
              | 'TARGETING_TYPE_DEVICE_MAKE_MODEL'
              | 'TARGETING_TYPE_KEYWORD'
              | 'TARGETING_TYPE_NEGATIVE_KEYWORD_LIST'
              | 'TARGETING_TYPE_VIEWABILITY'
              | 'TARGETING_TYPE_CATEGORY'
              | 'TARGETING_TYPE_INVENTORY_SOURCE'
              | 'TARGETING_TYPE_LANGUAGE'
              | 'TARGETING_TYPE_AUTHORIZED_SELLER_STATUS'
              | 'TARGETING_TYPE_GEO_REGION'
              | 'TARGETING_TYPE_INVENTORY_SOURCE_GROUP'
              | 'TARGETING_TYPE_EXCHANGE'
              | 'TARGETING_TYPE_SUB_EXCHANGE'
              | 'TARGETING_TYPE_POI'
              | 'TARGETING_TYPE_BUSINESS_CHAIN'
              | 'TARGETING_TYPE_CONTENT_DURATION'
              | 'TARGETING_TYPE_CONTENT_STREAM_TYPE'
              | 'TARGETING_TYPE_NATIVE_CONTENT_POSITION'
              | 'TARGETING_TYPE_OMID'
              | 'TARGETING_TYPE_AUDIO_CONTENT_TYPE'
              | 'TARGETING_TYPE_CONTENT_GENRE'
              | 'TARGETING_TYPE_YOUTUBE_VIDEO'
              | 'TARGETING_TYPE_YOUTUBE_CHANNEL'
              | 'TARGETING_TYPE_SESSION_POSITION'
          }
        } & {
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
        } & { json: SearchTargetingOptionsRequest }
        output: SearchTargetingOptionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/users': {
      $get: {
        input: {
          query: {
            filter?: string | undefined
            orderBy?: string | undefined
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
        output: ListUsersResponse
        outputFormat: 'json'
        status: 200
      }
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
        } & { json: User }
        output: User
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/users/:userId': {
      $delete: {
        input: { param: { userId: string } } & {
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
        output: Empty
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { userId: string } } & {
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
        output: User
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { userId: string } } & {
          query: {
            updateMask?: string | undefined
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
        } & { json: User }
        output: User
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/users/:userId:bulkEditAssignedUserRoles': {
      $post: {
        input: { param: { userId: string } } & {
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
        } & { json: BulkEditAssignedUserRolesRequest }
        output: BulkEditAssignedUserRolesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/:name': {
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
        output: Operation
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
