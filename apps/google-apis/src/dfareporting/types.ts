type DateRange = {
  endDate?: string | undefined
  kind?: string | undefined
  relativeDateRange?:
    | 'TODAY'
    | 'YESTERDAY'
    | 'WEEK_TO_DATE'
    | 'MONTH_TO_DATE'
    | 'QUARTER_TO_DATE'
    | 'YEAR_TO_DATE'
    | 'PREVIOUS_WEEK'
    | 'PREVIOUS_MONTH'
    | 'PREVIOUS_QUARTER'
    | 'PREVIOUS_YEAR'
    | 'LAST_7_DAYS'
    | 'LAST_30_DAYS'
    | 'LAST_90_DAYS'
    | 'LAST_365_DAYS'
    | 'LAST_24_MONTHS'
    | 'LAST_14_DAYS'
    | 'LAST_60_DAYS'
    | undefined
  startDate?: string | undefined
}
type File2 = {
  dateRange?: DateRange | undefined
  etag?: string | undefined
  fileName?: string | undefined
  format?: 'CSV' | 'EXCEL' | undefined
  id?: string | undefined
  kind?: string | undefined
  lastModifiedTime?: string | undefined
  reportId?: string | undefined
  status?: 'PROCESSING' | 'REPORT_AVAILABLE' | 'FAILED' | 'CANCELLED' | undefined
  urls?: { apiUrl?: string | undefined; browserUrl?: string | undefined } | undefined
}
type UserProfile = {
  accountId?: string | undefined
  accountName?: string | undefined
  etag?: string | undefined
  kind?: string | undefined
  profileId?: string | undefined
  subAccountId?: string | undefined
  subAccountName?: string | undefined
  userName?: string | undefined
}
type UserProfileList = {
  etag?: string | undefined
  items?: UserProfile[] | undefined
  kind?: string | undefined
}
type AccountActiveAdSummary = {
  accountId?: string | undefined
  activeAds?: string | undefined
  activeAdsLimitTier?:
    | 'ACTIVE_ADS_TIER_40K'
    | 'ACTIVE_ADS_TIER_75K'
    | 'ACTIVE_ADS_TIER_100K'
    | 'ACTIVE_ADS_TIER_200K'
    | 'ACTIVE_ADS_TIER_300K'
    | 'ACTIVE_ADS_TIER_500K'
    | 'ACTIVE_ADS_TIER_750K'
    | 'ACTIVE_ADS_TIER_1M'
    | undefined
  availableAds?: string | undefined
  kind?: string | undefined
}
type AccountPermissionGroup = {
  id?: string | undefined
  kind?: string | undefined
  name?: string | undefined
}
type AccountPermissionGroupsListResponse = {
  accountPermissionGroups?: AccountPermissionGroup[] | undefined
  kind?: string | undefined
}
type AccountPermission = {
  accountProfiles?: ('ACCOUNT_PROFILE_BASIC' | 'ACCOUNT_PROFILE_STANDARD')[] | undefined
  id?: string | undefined
  kind?: string | undefined
  level?: 'USER' | 'ADMINISTRATOR' | undefined
  name?: string | undefined
  permissionGroupId?: string | undefined
}
type AccountPermissionsListResponse = {
  accountPermissions?: AccountPermission[] | undefined
  kind?: string | undefined
}
type ObjectFilter = {
  kind?: string | undefined
  objectIds?: string[] | undefined
  status?: 'NONE' | 'ASSIGNED' | 'ALL' | undefined
}
type AccountUserProfile = {
  accountId?: string | undefined
  active?: boolean | undefined
  advertiserFilter?: ObjectFilter | undefined
  campaignFilter?: ObjectFilter | undefined
  comments?: string | undefined
  email?: string | undefined
  id?: string | undefined
  kind?: string | undefined
  locale?: string | undefined
  name?: string | undefined
  siteFilter?: ObjectFilter | undefined
  subaccountId?: string | undefined
  traffickerType?:
    | 'INTERNAL_NON_TRAFFICKER'
    | 'INTERNAL_TRAFFICKER'
    | 'EXTERNAL_TRAFFICKER'
    | undefined
  userAccessType?:
    | 'NORMAL_USER'
    | 'SUPER_USER'
    | 'INTERNAL_ADMINISTRATOR'
    | 'READ_ONLY_SUPER_USER'
    | undefined
  userRoleFilter?: ObjectFilter | undefined
  userRoleId?: string | undefined
}
type AccountUserProfilesListResponse = {
  accountUserProfiles?: AccountUserProfile[] | undefined
  kind?: string | undefined
  nextPageToken?: string | undefined
}
type LookbackConfiguration = {
  clickDuration?: number | undefined
  postImpressionActivitiesDuration?: number | undefined
}
type ReportsConfiguration = {
  exposureToConversionEnabled?: boolean | undefined
  lookbackConfiguration?: LookbackConfiguration | undefined
  reportGenerationTimeZoneId?: string | undefined
}
type Account = {
  accountPermissionIds?: string[] | undefined
  accountProfile?: 'ACCOUNT_PROFILE_BASIC' | 'ACCOUNT_PROFILE_STANDARD' | undefined
  active?: boolean | undefined
  activeAdsLimitTier?:
    | 'ACTIVE_ADS_TIER_40K'
    | 'ACTIVE_ADS_TIER_75K'
    | 'ACTIVE_ADS_TIER_100K'
    | 'ACTIVE_ADS_TIER_200K'
    | 'ACTIVE_ADS_TIER_300K'
    | 'ACTIVE_ADS_TIER_500K'
    | 'ACTIVE_ADS_TIER_750K'
    | 'ACTIVE_ADS_TIER_1M'
    | undefined
  activeViewOptOut?: boolean | undefined
  availablePermissionIds?: string[] | undefined
  countryId?: string | undefined
  currencyId?: string | undefined
  defaultCreativeSizeId?: string | undefined
  description?: string | undefined
  id?: string | undefined
  kind?: string | undefined
  locale?: string | undefined
  maximumImageSize?: string | undefined
  name?: string | undefined
  nielsenOcrEnabled?: boolean | undefined
  reportsConfiguration?: ReportsConfiguration | undefined
  shareReportsWithTwitter?: boolean | undefined
  teaserSizeLimit?: string | undefined
}
type AccountsListResponse = {
  accounts?: Account[] | undefined
  kind?: string | undefined
  nextPageToken?: string | undefined
}
type DimensionValue = {
  dimensionName?: string | undefined
  etag?: string | undefined
  id?: string | undefined
  kind?: string | undefined
  matchType?: 'EXACT' | 'BEGINS_WITH' | 'CONTAINS' | 'WILDCARD_EXPRESSION' | undefined
  value?: string | undefined
}
type ClickThroughUrl = {
  computedClickThroughUrl?: string | undefined
  customClickThroughUrl?: string | undefined
  defaultLandingPage?: boolean | undefined
  landingPageId?: string | undefined
}
type ClickThroughUrlSuffixProperties = {
  clickThroughUrlSuffix?: string | undefined
  overrideInheritedSuffix?: boolean | undefined
}
type LastModifiedInfo = { time?: string | undefined }
type CreativeGroupAssignment = {
  creativeGroupId?: string | undefined
  creativeGroupNumber?: 'CREATIVE_GROUP_ONE' | 'CREATIVE_GROUP_TWO' | undefined
}
type CompanionClickThroughOverride = {
  clickThroughUrl?: ClickThroughUrl | undefined
  creativeId?: string | undefined
}
type RichMediaExitOverride = {
  clickThroughUrl?: ClickThroughUrl | undefined
  enabled?: boolean | undefined
  exitId?: string | undefined
}
type CreativeAssignment = {
  active?: boolean | undefined
  applyEventTags?: boolean | undefined
  clickThroughUrl?: ClickThroughUrl | undefined
  companionCreativeOverrides?: CompanionClickThroughOverride[] | undefined
  creativeGroupAssignments?: CreativeGroupAssignment[] | undefined
  creativeId?: string | undefined
  creativeIdDimensionValue?: DimensionValue | undefined
  endTime?: string | undefined
  richMediaExitOverrides?: RichMediaExitOverride[] | undefined
  sequence?: number | undefined
  sslCompliant?: boolean | undefined
  startTime?: string | undefined
  weight?: number | undefined
}
type CreativeRotation = {
  creativeAssignments?: CreativeAssignment[] | undefined
  creativeOptimizationConfigurationId?: string | undefined
  type?: 'CREATIVE_ROTATION_TYPE_SEQUENTIAL' | 'CREATIVE_ROTATION_TYPE_RANDOM' | undefined
  weightCalculationStrategy?:
    | 'WEIGHT_STRATEGY_EQUAL'
    | 'WEIGHT_STRATEGY_CUSTOM'
    | 'WEIGHT_STRATEGY_HIGHEST_CTR'
    | 'WEIGHT_STRATEGY_OPTIMIZED'
    | undefined
}
type DayPartTargeting = {
  daysOfWeek?:
    | ('MONDAY' | 'TUESDAY' | 'WEDNESDAY' | 'THURSDAY' | 'FRIDAY' | 'SATURDAY' | 'SUNDAY')[]
    | undefined
  hoursOfDay?: number[] | undefined
  userLocalTime?: boolean | undefined
}
type DefaultClickThroughEventTagProperties = {
  defaultClickThroughEventTagId?: string | undefined
  overrideInheritedEventTag?: boolean | undefined
}
type FrequencyCap = { duration?: string | undefined; impressions?: string | undefined }
type DeliverySchedule = {
  frequencyCap?: FrequencyCap | undefined
  hardCutoff?: boolean | undefined
  impressionRatio?: string | undefined
  priority?:
    | 'AD_PRIORITY_01'
    | 'AD_PRIORITY_02'
    | 'AD_PRIORITY_03'
    | 'AD_PRIORITY_04'
    | 'AD_PRIORITY_05'
    | 'AD_PRIORITY_06'
    | 'AD_PRIORITY_07'
    | 'AD_PRIORITY_08'
    | 'AD_PRIORITY_09'
    | 'AD_PRIORITY_10'
    | 'AD_PRIORITY_11'
    | 'AD_PRIORITY_12'
    | 'AD_PRIORITY_13'
    | 'AD_PRIORITY_14'
    | 'AD_PRIORITY_15'
    | 'AD_PRIORITY_16'
    | undefined
}
type EventTagOverride = { enabled?: boolean | undefined; id?: string | undefined }
type City = {
  countryCode?: string | undefined
  countryDartId?: string | undefined
  dartId?: string | undefined
  kind?: string | undefined
  metroCode?: string | undefined
  metroDmaId?: string | undefined
  name?: string | undefined
  regionCode?: string | undefined
  regionDartId?: string | undefined
}
type Country = {
  countryCode?: string | undefined
  dartId?: string | undefined
  kind?: string | undefined
  name?: string | undefined
  sslEnabled?: boolean | undefined
}
type Metro = {
  countryCode?: string | undefined
  countryDartId?: string | undefined
  dartId?: string | undefined
  dmaId?: string | undefined
  kind?: string | undefined
  metroCode?: string | undefined
  name?: string | undefined
}
type PostalCode = {
  code?: string | undefined
  countryCode?: string | undefined
  countryDartId?: string | undefined
  id?: string | undefined
  kind?: string | undefined
}
type Region = {
  countryCode?: string | undefined
  countryDartId?: string | undefined
  dartId?: string | undefined
  kind?: string | undefined
  name?: string | undefined
  regionCode?: string | undefined
}
type GeoTargeting = {
  cities?: City[] | undefined
  countries?: Country[] | undefined
  excludeCountries?: boolean | undefined
  metros?: Metro[] | undefined
  postalCodes?: PostalCode[] | undefined
  regions?: Region[] | undefined
}
type KeyValueTargetingExpression = { expression?: string | undefined }
type Language = {
  id?: string | undefined
  kind?: string | undefined
  languageCode?: string | undefined
  name?: string | undefined
}
type LanguageTargeting = { languages?: Language[] | undefined }
type PlacementAssignment = {
  active?: boolean | undefined
  placementId?: string | undefined
  placementIdDimensionValue?: DimensionValue | undefined
  sslRequired?: boolean | undefined
}
type ListTargetingExpression = { expression?: string | undefined }
type Size = {
  height?: number | undefined
  iab?: boolean | undefined
  id?: string | undefined
  kind?: string | undefined
  width?: number | undefined
}
type Browser = {
  browserVersionId?: string | undefined
  dartId?: string | undefined
  kind?: string | undefined
  majorVersion?: string | undefined
  minorVersion?: string | undefined
  name?: string | undefined
}
type ConnectionType = {
  id?: string | undefined
  kind?: string | undefined
  name?: string | undefined
}
type MobileCarrier = {
  countryCode?: string | undefined
  countryDartId?: string | undefined
  id?: string | undefined
  kind?: string | undefined
  name?: string | undefined
}
type OperatingSystem = {
  dartId?: string | undefined
  desktop?: boolean | undefined
  kind?: string | undefined
  mobile?: boolean | undefined
  name?: string | undefined
}
type OperatingSystemVersion = {
  id?: string | undefined
  kind?: string | undefined
  majorVersion?: string | undefined
  minorVersion?: string | undefined
  name?: string | undefined
  operatingSystem?: OperatingSystem | undefined
}
type PlatformType = {
  id?: string | undefined
  kind?: string | undefined
  name?: string | undefined
}
type TechnologyTargeting = {
  browsers?: Browser[] | undefined
  connectionTypes?: ConnectionType[] | undefined
  mobileCarriers?: MobileCarrier[] | undefined
  operatingSystemVersions?: OperatingSystemVersion[] | undefined
  operatingSystems?: OperatingSystem[] | undefined
  platformTypes?: PlatformType[] | undefined
}
type Ad = {
  accountId?: string | undefined
  active?: boolean | undefined
  advertiserId?: string | undefined
  advertiserIdDimensionValue?: DimensionValue | undefined
  archived?: boolean | undefined
  audienceSegmentId?: string | undefined
  campaignId?: string | undefined
  campaignIdDimensionValue?: DimensionValue | undefined
  clickThroughUrl?: ClickThroughUrl | undefined
  clickThroughUrlSuffixProperties?: ClickThroughUrlSuffixProperties | undefined
  comments?: string | undefined
  compatibility?:
    | 'DISPLAY'
    | 'DISPLAY_INTERSTITIAL'
    | 'APP'
    | 'APP_INTERSTITIAL'
    | 'IN_STREAM_VIDEO'
    | 'IN_STREAM_AUDIO'
    | undefined
  createInfo?: LastModifiedInfo | undefined
  creativeGroupAssignments?: CreativeGroupAssignment[] | undefined
  creativeRotation?: CreativeRotation | undefined
  dayPartTargeting?: DayPartTargeting | undefined
  defaultClickThroughEventTagProperties?: DefaultClickThroughEventTagProperties | undefined
  deliverySchedule?: DeliverySchedule | undefined
  dynamicClickTracker?: boolean | undefined
  endTime?: string | undefined
  eventTagOverrides?: EventTagOverride[] | undefined
  geoTargeting?: GeoTargeting | undefined
  id?: string | undefined
  idDimensionValue?: DimensionValue | undefined
  keyValueTargetingExpression?: KeyValueTargetingExpression | undefined
  kind?: string | undefined
  languageTargeting?: LanguageTargeting | undefined
  lastModifiedInfo?: LastModifiedInfo | undefined
  name?: string | undefined
  placementAssignments?: PlacementAssignment[] | undefined
  remarketingListExpression?: ListTargetingExpression | undefined
  size?: Size | undefined
  sslCompliant?: boolean | undefined
  sslRequired?: boolean | undefined
  startTime?: string | undefined
  subaccountId?: string | undefined
  targetingTemplateId?: string | undefined
  technologyTargeting?: TechnologyTargeting | undefined
  type?:
    | 'AD_SERVING_STANDARD_AD'
    | 'AD_SERVING_DEFAULT_AD'
    | 'AD_SERVING_CLICK_TRACKER'
    | 'AD_SERVING_TRACKING'
    | 'AD_SERVING_BRAND_SAFE_AD'
    | undefined
}
type AdsListResponse = {
  ads?: Ad[] | undefined
  kind?: string | undefined
  nextPageToken?: string | undefined
}
type AdvertiserGroup = {
  accountId?: string | undefined
  id?: string | undefined
  kind?: string | undefined
  name?: string | undefined
}
type AdvertiserGroupsListResponse = {
  advertiserGroups?: AdvertiserGroup[] | undefined
  kind?: string | undefined
  nextPageToken?: string | undefined
}
type MobileApp = {
  directory?:
    | 'UNKNOWN'
    | 'APPLE_APP_STORE'
    | 'GOOGLE_PLAY_STORE'
    | 'ROKU_APP_STORE'
    | 'AMAZON_FIRETV_APP_STORE'
    | 'PLAYSTATION_APP_STORE'
    | 'APPLE_TV_APP_STORE'
    | 'XBOX_APP_STORE'
    | 'SAMSUNG_TV_APP_STORE'
    | 'ANDROID_TV_APP_STORE'
    | 'GENERIC_CTV_APP_STORE'
    | undefined
  id?: string | undefined
  kind?: string | undefined
  publisherName?: string | undefined
  title?: string | undefined
}
type DeepLink = {
  appUrl?: string | undefined
  fallbackUrl?: string | undefined
  kind?: string | undefined
  mobileApp?: MobileApp | undefined
  remarketingListIds?: string[] | undefined
}
type LandingPage = {
  advertiserId?: string | undefined
  archived?: boolean | undefined
  deepLinks?: DeepLink[] | undefined
  id?: string | undefined
  kind?: string | undefined
  name?: string | undefined
  url?: string | undefined
}
type AdvertiserLandingPagesListResponse = {
  kind?: string | undefined
  landingPages?: LandingPage[] | undefined
  nextPageToken?: string | undefined
}
type Advertiser = {
  accountId?: string | undefined
  advertiserGroupId?: string | undefined
  clickThroughUrlSuffix?: string | undefined
  defaultClickThroughEventTagId?: string | undefined
  defaultEmail?: string | undefined
  floodlightConfigurationId?: string | undefined
  floodlightConfigurationIdDimensionValue?: DimensionValue | undefined
  id?: string | undefined
  idDimensionValue?: DimensionValue | undefined
  kind?: string | undefined
  name?: string | undefined
  originalFloodlightConfigurationId?: string | undefined
  status?: 'APPROVED' | 'ON_HOLD' | undefined
  subaccountId?: string | undefined
  suspended?: boolean | undefined
}
type AdvertisersListResponse = {
  advertisers?: Advertiser[] | undefined
  kind?: string | undefined
  nextPageToken?: string | undefined
}
type BrowsersListResponse = { browsers?: Browser[] | undefined; kind?: string | undefined }
type AdBlockingConfiguration = {
  clickThroughUrl?: string | undefined
  creativeBundleId?: string | undefined
  enabled?: boolean | undefined
  overrideClickThroughUrl?: boolean | undefined
}
type OptimizationActivity = {
  floodlightActivityId?: string | undefined
  floodlightActivityIdDimensionValue?: DimensionValue | undefined
  weight?: number | undefined
}
type CreativeOptimizationConfiguration = {
  id?: string | undefined
  name?: string | undefined
  optimizationActivitys?: OptimizationActivity[] | undefined
  optimizationModel?:
    | 'CLICK'
    | 'POST_CLICK'
    | 'POST_IMPRESSION'
    | 'POST_CLICK_AND_IMPRESSION'
    | 'VIDEO_COMPLETION'
    | undefined
}
type AudienceSegment = {
  allocation?: number | undefined
  id?: string | undefined
  name?: string | undefined
}
type AudienceSegmentGroup = {
  audienceSegments?: AudienceSegment[] | undefined
  id?: string | undefined
  name?: string | undefined
}
type Campaign = {
  accountId?: string | undefined
  adBlockingConfiguration?: AdBlockingConfiguration | undefined
  additionalCreativeOptimizationConfigurations?: CreativeOptimizationConfiguration[] | undefined
  advertiserGroupId?: string | undefined
  advertiserId?: string | undefined
  advertiserIdDimensionValue?: DimensionValue | undefined
  archived?: boolean | undefined
  audienceSegmentGroups?: AudienceSegmentGroup[] | undefined
  billingInvoiceCode?: string | undefined
  clickThroughUrlSuffixProperties?: ClickThroughUrlSuffixProperties | undefined
  comment?: string | undefined
  createInfo?: LastModifiedInfo | undefined
  creativeGroupIds?: string[] | undefined
  creativeOptimizationConfiguration?: CreativeOptimizationConfiguration | undefined
  defaultClickThroughEventTagProperties?: DefaultClickThroughEventTagProperties | undefined
  defaultLandingPageId?: string | undefined
  endDate?: string | undefined
  eventTagOverrides?: EventTagOverride[] | undefined
  externalId?: string | undefined
  id?: string | undefined
  idDimensionValue?: DimensionValue | undefined
  kind?: string | undefined
  lastModifiedInfo?: LastModifiedInfo | undefined
  name?: string | undefined
  nielsenOcrEnabled?: boolean | undefined
  startDate?: string | undefined
  subaccountId?: string | undefined
  traffickerEmails?: string[] | undefined
}
type CampaignsListResponse = {
  campaigns?: Campaign[] | undefined
  kind?: string | undefined
  nextPageToken?: string | undefined
}
type CampaignCreativeAssociation = { creativeId?: string | undefined; kind?: string | undefined }
type CampaignCreativeAssociationsListResponse = {
  campaignCreativeAssociations?: CampaignCreativeAssociation[] | undefined
  kind?: string | undefined
  nextPageToken?: string | undefined
}
type ChangeLog = {
  accountId?: string | undefined
  action?: string | undefined
  changeTime?: string | undefined
  fieldName?: string | undefined
  id?: string | undefined
  kind?: string | undefined
  newValue?: string | undefined
  objectId?: string | undefined
  objectType?: string | undefined
  oldValue?: string | undefined
  subaccountId?: string | undefined
  transactionId?: string | undefined
  userProfileId?: string | undefined
  userProfileName?: string | undefined
}
type ChangeLogsListResponse = {
  changeLogs?: ChangeLog[] | undefined
  kind?: string | undefined
  nextPageToken?: string | undefined
}
type CitiesListResponse = { cities?: City[] | undefined; kind?: string | undefined }
type ConnectionTypesListResponse = {
  connectionTypes?: ConnectionType[] | undefined
  kind?: string | undefined
}
type ContentCategory = {
  accountId?: string | undefined
  id?: string | undefined
  kind?: string | undefined
  name?: string | undefined
}
type ContentCategoriesListResponse = {
  contentCategories?: ContentCategory[] | undefined
  kind?: string | undefined
  nextPageToken?: string | undefined
}
type CustomFloodlightVariable = {
  kind?: string | undefined
  type?:
    | 'U1'
    | 'U2'
    | 'U3'
    | 'U4'
    | 'U5'
    | 'U6'
    | 'U7'
    | 'U8'
    | 'U9'
    | 'U10'
    | 'U11'
    | 'U12'
    | 'U13'
    | 'U14'
    | 'U15'
    | 'U16'
    | 'U17'
    | 'U18'
    | 'U19'
    | 'U20'
    | 'U21'
    | 'U22'
    | 'U23'
    | 'U24'
    | 'U25'
    | 'U26'
    | 'U27'
    | 'U28'
    | 'U29'
    | 'U30'
    | 'U31'
    | 'U32'
    | 'U33'
    | 'U34'
    | 'U35'
    | 'U36'
    | 'U37'
    | 'U38'
    | 'U39'
    | 'U40'
    | 'U41'
    | 'U42'
    | 'U43'
    | 'U44'
    | 'U45'
    | 'U46'
    | 'U47'
    | 'U48'
    | 'U49'
    | 'U50'
    | 'U51'
    | 'U52'
    | 'U53'
    | 'U54'
    | 'U55'
    | 'U56'
    | 'U57'
    | 'U58'
    | 'U59'
    | 'U60'
    | 'U61'
    | 'U62'
    | 'U63'
    | 'U64'
    | 'U65'
    | 'U66'
    | 'U67'
    | 'U68'
    | 'U69'
    | 'U70'
    | 'U71'
    | 'U72'
    | 'U73'
    | 'U74'
    | 'U75'
    | 'U76'
    | 'U77'
    | 'U78'
    | 'U79'
    | 'U80'
    | 'U81'
    | 'U82'
    | 'U83'
    | 'U84'
    | 'U85'
    | 'U86'
    | 'U87'
    | 'U88'
    | 'U89'
    | 'U90'
    | 'U91'
    | 'U92'
    | 'U93'
    | 'U94'
    | 'U95'
    | 'U96'
    | 'U97'
    | 'U98'
    | 'U99'
    | 'U100'
    | undefined
  value?: string | undefined
}
type Conversion = {
  childDirectedTreatment?: boolean | undefined
  customVariables?: CustomFloodlightVariable[] | undefined
  dclid?: string | undefined
  encryptedUserId?: string | undefined
  encryptedUserIdCandidates?: string[] | undefined
  floodlightActivityId?: string | undefined
  floodlightConfigurationId?: string | undefined
  gclid?: string | undefined
  kind?: string | undefined
  limitAdTracking?: boolean | undefined
  matchId?: string | undefined
  mobileDeviceId?: string | undefined
  nonPersonalizedAd?: boolean | undefined
  ordinal?: string | undefined
  quantity?: string | undefined
  timestampMicros?: string | undefined
  treatmentForUnderage?: boolean | undefined
  value?: number | undefined
}
type EncryptionInfo = {
  encryptionEntityId?: string | undefined
  encryptionEntityType?:
    | 'ENCRYPTION_ENTITY_TYPE_UNKNOWN'
    | 'DCM_ACCOUNT'
    | 'DCM_ADVERTISER'
    | 'DBM_PARTNER'
    | 'DBM_ADVERTISER'
    | 'ADWORDS_CUSTOMER'
    | 'DFP_NETWORK_CODE'
    | undefined
  encryptionSource?: 'ENCRYPTION_SCOPE_UNKNOWN' | 'AD_SERVING' | 'DATA_TRANSFER' | undefined
  kind?: string | undefined
}
type ConversionsBatchInsertRequest = {
  conversions?: Conversion[] | undefined
  encryptionInfo?: EncryptionInfo | undefined
  kind?: string | undefined
}
type ConversionError = {
  code?: 'INVALID_ARGUMENT' | 'INTERNAL' | 'PERMISSION_DENIED' | 'NOT_FOUND' | undefined
  kind?: string | undefined
  message?: string | undefined
}
type ConversionStatus = {
  conversion?: Conversion | undefined
  errors?: ConversionError[] | undefined
  kind?: string | undefined
}
type ConversionsBatchInsertResponse = {
  hasFailures?: boolean | undefined
  kind?: string | undefined
  status?: ConversionStatus[] | undefined
}
type ConversionsBatchUpdateRequest = {
  conversions?: Conversion[] | undefined
  encryptionInfo?: EncryptionInfo | undefined
  kind?: string | undefined
}
type ConversionsBatchUpdateResponse = {
  hasFailures?: boolean | undefined
  kind?: string | undefined
  status?: ConversionStatus[] | undefined
}
type CountriesListResponse = { countries?: Country[] | undefined; kind?: string | undefined }
type CreativeAssetId = {
  name?: string | undefined
  type?: 'IMAGE' | 'FLASH' | 'VIDEO' | 'HTML' | 'HTML_IMAGE' | 'AUDIO' | undefined
}
type CreativeClickThroughUrl = {
  computedClickThroughUrl?: string | undefined
  customClickThroughUrl?: string | undefined
  landingPageId?: string | undefined
}
type ClickTag = {
  clickThroughUrl?: CreativeClickThroughUrl | undefined
  eventName?: string | undefined
  name?: string | undefined
}
type OffsetPosition = { left?: number | undefined; top?: number | undefined }
type PopupWindowProperties = {
  dimension?: Size | undefined
  offset?: OffsetPosition | undefined
  positionType?: 'CENTER' | 'COORDINATES' | undefined
  showAddressBar?: boolean | undefined
  showMenuBar?: boolean | undefined
  showScrollBar?: boolean | undefined
  showStatusBar?: boolean | undefined
  showToolBar?: boolean | undefined
  title?: string | undefined
}
type CreativeCustomEvent = {
  advertiserCustomEventId?: string | undefined
  advertiserCustomEventName?: string | undefined
  advertiserCustomEventType?:
    | 'ADVERTISER_EVENT_TIMER'
    | 'ADVERTISER_EVENT_EXIT'
    | 'ADVERTISER_EVENT_COUNTER'
    | undefined
  artworkLabel?: string | undefined
  artworkType?:
    | 'ARTWORK_TYPE_FLASH'
    | 'ARTWORK_TYPE_HTML5'
    | 'ARTWORK_TYPE_MIXED'
    | 'ARTWORK_TYPE_IMAGE'
    | undefined
  exitClickThroughUrl?: CreativeClickThroughUrl | undefined
  id?: string | undefined
  popupWindowProperties?: PopupWindowProperties | undefined
  targetType?:
    | 'TARGET_BLANK'
    | 'TARGET_TOP'
    | 'TARGET_SELF'
    | 'TARGET_PARENT'
    | 'TARGET_POPUP'
    | undefined
  videoReportingId?: string | undefined
}
type CreativeAssetMetadata = {
  assetIdentifier?: CreativeAssetId | undefined
  clickTags?: ClickTag[] | undefined
  counterCustomEvents?: CreativeCustomEvent[] | undefined
  detectedFeatures?:
    | (
        | 'CSS_FONT_FACE'
        | 'CSS_BACKGROUND_SIZE'
        | 'CSS_BORDER_IMAGE'
        | 'CSS_BORDER_RADIUS'
        | 'CSS_BOX_SHADOW'
        | 'CSS_FLEX_BOX'
        | 'CSS_HSLA'
        | 'CSS_MULTIPLE_BGS'
        | 'CSS_OPACITY'
        | 'CSS_RGBA'
        | 'CSS_TEXT_SHADOW'
        | 'CSS_ANIMATIONS'
        | 'CSS_COLUMNS'
        | 'CSS_GENERATED_CONTENT'
        | 'CSS_GRADIENTS'
        | 'CSS_REFLECTIONS'
        | 'CSS_TRANSFORMS'
        | 'CSS_TRANSFORMS3D'
        | 'CSS_TRANSITIONS'
        | 'APPLICATION_CACHE'
        | 'CANVAS'
        | 'CANVAS_TEXT'
        | 'DRAG_AND_DROP'
        | 'HASH_CHANGE'
        | 'HISTORY'
        | 'AUDIO'
        | 'VIDEO'
        | 'INDEXED_DB'
        | 'INPUT_ATTR_AUTOCOMPLETE'
        | 'INPUT_ATTR_AUTOFOCUS'
        | 'INPUT_ATTR_LIST'
        | 'INPUT_ATTR_PLACEHOLDER'
        | 'INPUT_ATTR_MAX'
        | 'INPUT_ATTR_MIN'
        | 'INPUT_ATTR_MULTIPLE'
        | 'INPUT_ATTR_PATTERN'
        | 'INPUT_ATTR_REQUIRED'
        | 'INPUT_ATTR_STEP'
        | 'INPUT_TYPE_SEARCH'
        | 'INPUT_TYPE_TEL'
        | 'INPUT_TYPE_URL'
        | 'INPUT_TYPE_EMAIL'
        | 'INPUT_TYPE_DATETIME'
        | 'INPUT_TYPE_DATE'
        | 'INPUT_TYPE_MONTH'
        | 'INPUT_TYPE_WEEK'
        | 'INPUT_TYPE_TIME'
        | 'INPUT_TYPE_DATETIME_LOCAL'
        | 'INPUT_TYPE_NUMBER'
        | 'INPUT_TYPE_RANGE'
        | 'INPUT_TYPE_COLOR'
        | 'LOCAL_STORAGE'
        | 'POST_MESSAGE'
        | 'SESSION_STORAGE'
        | 'WEB_SOCKETS'
        | 'WEB_SQL_DATABASE'
        | 'WEB_WORKERS'
        | 'GEO_LOCATION'
        | 'INLINE_SVG'
        | 'SMIL'
        | 'SVG_HREF'
        | 'SVG_CLIP_PATHS'
        | 'TOUCH'
        | 'WEBGL'
        | 'SVG_FILTERS'
        | 'SVG_FE_IMAGE'
      )[]
    | undefined
  exitCustomEvents?: CreativeCustomEvent[] | undefined
  id?: string | undefined
  idDimensionValue?: DimensionValue | undefined
  kind?: string | undefined
  richMedia?: boolean | undefined
  timerCustomEvents?: CreativeCustomEvent[] | undefined
  warnedValidationRules?:
    | (
        | 'CLICK_TAG_NON_TOP_LEVEL'
        | 'CLICK_TAG_MISSING'
        | 'CLICK_TAG_MORE_THAN_ONE'
        | 'CLICK_TAG_INVALID'
        | 'ORPHANED_ASSET'
        | 'PRIMARY_HTML_MISSING'
        | 'EXTERNAL_FILE_REFERENCED'
        | 'MRAID_REFERENCED'
        | 'ADMOB_REFERENCED'
        | 'FILE_TYPE_INVALID'
        | 'ZIP_INVALID'
        | 'LINKED_FILE_NOT_FOUND'
        | 'MAX_FLASH_VERSION_11'
        | 'NOT_SSL_COMPLIANT'
        | 'FILE_DETAIL_EMPTY'
        | 'ASSET_INVALID'
        | 'GWD_PROPERTIES_INVALID'
        | 'ENABLER_UNSUPPORTED_METHOD_DCM'
        | 'ASSET_FORMAT_UNSUPPORTED_DCM'
        | 'COMPONENT_UNSUPPORTED_DCM'
        | 'HTML5_FEATURE_UNSUPPORTED'
        | 'CLICK_TAG_IN_GWD'
        | 'CLICK_TAG_HARD_CODED'
        | 'SVG_INVALID'
        | 'CLICK_TAG_IN_RICH_MEDIA'
        | 'MISSING_ENABLER_REFERENCE'
      )[]
    | undefined
}
type CreativeField = {
  accountId?: string | undefined
  advertiserId?: string | undefined
  advertiserIdDimensionValue?: DimensionValue | undefined
  id?: string | undefined
  kind?: string | undefined
  name?: string | undefined
  subaccountId?: string | undefined
}
type CreativeFieldsListResponse = {
  creativeFields?: CreativeField[] | undefined
  kind?: string | undefined
  nextPageToken?: string | undefined
}
type CreativeFieldValue = {
  id?: string | undefined
  kind?: string | undefined
  value?: string | undefined
}
type CreativeFieldValuesListResponse = {
  creativeFieldValues?: CreativeFieldValue[] | undefined
  kind?: string | undefined
  nextPageToken?: string | undefined
}
type CreativeGroup = {
  accountId?: string | undefined
  advertiserId?: string | undefined
  advertiserIdDimensionValue?: DimensionValue | undefined
  groupNumber?: number | undefined
  id?: string | undefined
  kind?: string | undefined
  name?: string | undefined
  subaccountId?: string | undefined
}
type CreativeGroupsListResponse = {
  creativeGroups?: CreativeGroup[] | undefined
  kind?: string | undefined
  nextPageToken?: string | undefined
}
type TargetWindow = {
  customHtml?: string | undefined
  targetWindowOption?: 'NEW_WINDOW' | 'CURRENT_WINDOW' | 'CUSTOM' | undefined
}
type Rule = {
  assetId?: string | undefined
  name?: string | undefined
  targetingTemplateId?: string | undefined
}
type CreativeAssetSelection = { defaultAssetId?: string | undefined; rules?: Rule[] | undefined }
type CreativeAsset = {
  actionScript3?: boolean | undefined
  active?: boolean | undefined
  additionalSizes?: Size[] | undefined
  alignment?:
    | 'ALIGNMENT_TOP'
    | 'ALIGNMENT_RIGHT'
    | 'ALIGNMENT_BOTTOM'
    | 'ALIGNMENT_LEFT'
    | undefined
  artworkType?:
    | 'ARTWORK_TYPE_FLASH'
    | 'ARTWORK_TYPE_HTML5'
    | 'ARTWORK_TYPE_MIXED'
    | 'ARTWORK_TYPE_IMAGE'
    | undefined
  assetIdentifier?: CreativeAssetId | undefined
  audioBitRate?: number | undefined
  audioSampleRate?: number | undefined
  backupImageExit?: CreativeCustomEvent | undefined
  bitRate?: number | undefined
  childAssetType?:
    | 'CHILD_ASSET_TYPE_FLASH'
    | 'CHILD_ASSET_TYPE_VIDEO'
    | 'CHILD_ASSET_TYPE_IMAGE'
    | 'CHILD_ASSET_TYPE_DATA'
    | undefined
  collapsedSize?: Size | undefined
  companionCreativeIds?: string[] | undefined
  customStartTimeValue?: number | undefined
  detectedFeatures?:
    | (
        | 'CSS_FONT_FACE'
        | 'CSS_BACKGROUND_SIZE'
        | 'CSS_BORDER_IMAGE'
        | 'CSS_BORDER_RADIUS'
        | 'CSS_BOX_SHADOW'
        | 'CSS_FLEX_BOX'
        | 'CSS_HSLA'
        | 'CSS_MULTIPLE_BGS'
        | 'CSS_OPACITY'
        | 'CSS_RGBA'
        | 'CSS_TEXT_SHADOW'
        | 'CSS_ANIMATIONS'
        | 'CSS_COLUMNS'
        | 'CSS_GENERATED_CONTENT'
        | 'CSS_GRADIENTS'
        | 'CSS_REFLECTIONS'
        | 'CSS_TRANSFORMS'
        | 'CSS_TRANSFORMS3D'
        | 'CSS_TRANSITIONS'
        | 'APPLICATION_CACHE'
        | 'CANVAS'
        | 'CANVAS_TEXT'
        | 'DRAG_AND_DROP'
        | 'HASH_CHANGE'
        | 'HISTORY'
        | 'AUDIO'
        | 'VIDEO'
        | 'INDEXED_DB'
        | 'INPUT_ATTR_AUTOCOMPLETE'
        | 'INPUT_ATTR_AUTOFOCUS'
        | 'INPUT_ATTR_LIST'
        | 'INPUT_ATTR_PLACEHOLDER'
        | 'INPUT_ATTR_MAX'
        | 'INPUT_ATTR_MIN'
        | 'INPUT_ATTR_MULTIPLE'
        | 'INPUT_ATTR_PATTERN'
        | 'INPUT_ATTR_REQUIRED'
        | 'INPUT_ATTR_STEP'
        | 'INPUT_TYPE_SEARCH'
        | 'INPUT_TYPE_TEL'
        | 'INPUT_TYPE_URL'
        | 'INPUT_TYPE_EMAIL'
        | 'INPUT_TYPE_DATETIME'
        | 'INPUT_TYPE_DATE'
        | 'INPUT_TYPE_MONTH'
        | 'INPUT_TYPE_WEEK'
        | 'INPUT_TYPE_TIME'
        | 'INPUT_TYPE_DATETIME_LOCAL'
        | 'INPUT_TYPE_NUMBER'
        | 'INPUT_TYPE_RANGE'
        | 'INPUT_TYPE_COLOR'
        | 'LOCAL_STORAGE'
        | 'POST_MESSAGE'
        | 'SESSION_STORAGE'
        | 'WEB_SOCKETS'
        | 'WEB_SQL_DATABASE'
        | 'WEB_WORKERS'
        | 'GEO_LOCATION'
        | 'INLINE_SVG'
        | 'SMIL'
        | 'SVG_HREF'
        | 'SVG_CLIP_PATHS'
        | 'TOUCH'
        | 'WEBGL'
        | 'SVG_FILTERS'
        | 'SVG_FE_IMAGE'
      )[]
    | undefined
  displayType?:
    | 'ASSET_DISPLAY_TYPE_INPAGE'
    | 'ASSET_DISPLAY_TYPE_FLOATING'
    | 'ASSET_DISPLAY_TYPE_OVERLAY'
    | 'ASSET_DISPLAY_TYPE_EXPANDING'
    | 'ASSET_DISPLAY_TYPE_FLASH_IN_FLASH'
    | 'ASSET_DISPLAY_TYPE_FLASH_IN_FLASH_EXPANDING'
    | 'ASSET_DISPLAY_TYPE_PEEL_DOWN'
    | 'ASSET_DISPLAY_TYPE_VPAID_LINEAR'
    | 'ASSET_DISPLAY_TYPE_VPAID_NON_LINEAR'
    | 'ASSET_DISPLAY_TYPE_BACKDROP'
    | undefined
  duration?: number | undefined
  durationType?:
    | 'ASSET_DURATION_TYPE_AUTO'
    | 'ASSET_DURATION_TYPE_NONE'
    | 'ASSET_DURATION_TYPE_CUSTOM'
    | undefined
  expandedDimension?: Size | undefined
  fileSize?: string | undefined
  flashVersion?: number | undefined
  frameRate?: number | undefined
  hideFlashObjects?: boolean | undefined
  hideSelectionBoxes?: boolean | undefined
  horizontallyLocked?: boolean | undefined
  id?: string | undefined
  idDimensionValue?: DimensionValue | undefined
  mediaDuration?: number | undefined
  mimeType?: string | undefined
  offset?: OffsetPosition | undefined
  orientation?: 'LANDSCAPE' | 'PORTRAIT' | 'SQUARE' | undefined
  originalBackup?: boolean | undefined
  politeLoad?: boolean | undefined
  position?: OffsetPosition | undefined
  positionLeftUnit?:
    | 'OFFSET_UNIT_PIXEL'
    | 'OFFSET_UNIT_PERCENT'
    | 'OFFSET_UNIT_PIXEL_FROM_CENTER'
    | undefined
  positionTopUnit?:
    | 'OFFSET_UNIT_PIXEL'
    | 'OFFSET_UNIT_PERCENT'
    | 'OFFSET_UNIT_PIXEL_FROM_CENTER'
    | undefined
  progressiveServingUrl?: string | undefined
  pushdown?: boolean | undefined
  pushdownDuration?: number | undefined
  role?:
    | 'PRIMARY'
    | 'BACKUP_IMAGE'
    | 'ADDITIONAL_IMAGE'
    | 'ADDITIONAL_FLASH'
    | 'PARENT_VIDEO'
    | 'TRANSCODED_VIDEO'
    | 'OTHER'
    | 'ALTERNATE_VIDEO'
    | 'PARENT_AUDIO'
    | 'TRANSCODED_AUDIO'
    | undefined
  size?: Size | undefined
  sslCompliant?: boolean | undefined
  startTimeType?: 'ASSET_START_TIME_TYPE_NONE' | 'ASSET_START_TIME_TYPE_CUSTOM' | undefined
  streamingServingUrl?: string | undefined
  transparency?: boolean | undefined
  verticallyLocked?: boolean | undefined
  windowMode?: 'OPAQUE' | 'WINDOW' | 'TRANSPARENT' | undefined
  zIndex?: number | undefined
  zipFilename?: string | undefined
  zipFilesize?: string | undefined
}
type CreativeFieldAssignment = {
  creativeFieldId?: string | undefined
  creativeFieldValueId?: string | undefined
}
type FsCommand = {
  left?: number | undefined
  positionOption?: 'CENTERED' | 'DISTANCE_FROM_TOP_LEFT_CORNER' | undefined
  top?: number | undefined
  windowHeight?: number | undefined
  windowWidth?: number | undefined
}
type ObaIcon = {
  iconClickThroughUrl?: string | undefined
  iconClickTrackingUrl?: string | undefined
  iconViewTrackingUrl?: string | undefined
  program?: string | undefined
  resourceUrl?: string | undefined
  size?: Size | undefined
  xPosition?: string | undefined
  yPosition?: string | undefined
}
type VideoOffset = { offsetPercentage?: number | undefined; offsetSeconds?: number | undefined }
type ThirdPartyTrackingUrl = {
  thirdPartyUrlType?:
    | 'IMPRESSION'
    | 'CLICK_TRACKING'
    | 'VIDEO_START'
    | 'VIDEO_FIRST_QUARTILE'
    | 'VIDEO_MIDPOINT'
    | 'VIDEO_THIRD_QUARTILE'
    | 'VIDEO_COMPLETE'
    | 'VIDEO_MUTE'
    | 'VIDEO_PAUSE'
    | 'VIDEO_REWIND'
    | 'VIDEO_FULLSCREEN'
    | 'VIDEO_STOP'
    | 'VIDEO_CUSTOM'
    | 'SURVEY'
    | 'RICH_MEDIA_IMPRESSION'
    | 'RICH_MEDIA_RM_IMPRESSION'
    | 'RICH_MEDIA_BACKUP_IMPRESSION'
    | 'VIDEO_SKIP'
    | 'VIDEO_PROGRESS'
    | undefined
  url?: string | undefined
}
type UniversalAdId = {
  registry?: 'OTHER' | 'AD_ID_OFFICIAL' | 'CLEARCAST' | 'DCM' | undefined
  value?: string | undefined
}
type Creative = {
  accountId?: string | undefined
  active?: boolean | undefined
  adParameters?: string | undefined
  adTagKeys?: string[] | undefined
  additionalSizes?: Size[] | undefined
  advertiserId?: string | undefined
  allowScriptAccess?: boolean | undefined
  archived?: boolean | undefined
  artworkType?:
    | 'ARTWORK_TYPE_FLASH'
    | 'ARTWORK_TYPE_HTML5'
    | 'ARTWORK_TYPE_MIXED'
    | 'ARTWORK_TYPE_IMAGE'
    | undefined
  authoringSource?:
    | 'CREATIVE_AUTHORING_SOURCE_DCM'
    | 'CREATIVE_AUTHORING_SOURCE_DBM'
    | 'CREATIVE_AUTHORING_SOURCE_STUDIO'
    | 'CREATIVE_AUTHORING_SOURCE_GWD'
    | 'CREATIVE_AUTHORING_SOURCE_ACS'
    | undefined
  authoringTool?: 'NINJA' | 'SWIFFY' | undefined
  autoAdvanceImages?: boolean | undefined
  backgroundColor?: string | undefined
  backupImageClickThroughUrl?: CreativeClickThroughUrl | undefined
  backupImageFeatures?:
    | (
        | 'CSS_FONT_FACE'
        | 'CSS_BACKGROUND_SIZE'
        | 'CSS_BORDER_IMAGE'
        | 'CSS_BORDER_RADIUS'
        | 'CSS_BOX_SHADOW'
        | 'CSS_FLEX_BOX'
        | 'CSS_HSLA'
        | 'CSS_MULTIPLE_BGS'
        | 'CSS_OPACITY'
        | 'CSS_RGBA'
        | 'CSS_TEXT_SHADOW'
        | 'CSS_ANIMATIONS'
        | 'CSS_COLUMNS'
        | 'CSS_GENERATED_CONTENT'
        | 'CSS_GRADIENTS'
        | 'CSS_REFLECTIONS'
        | 'CSS_TRANSFORMS'
        | 'CSS_TRANSFORMS3D'
        | 'CSS_TRANSITIONS'
        | 'APPLICATION_CACHE'
        | 'CANVAS'
        | 'CANVAS_TEXT'
        | 'DRAG_AND_DROP'
        | 'HASH_CHANGE'
        | 'HISTORY'
        | 'AUDIO'
        | 'VIDEO'
        | 'INDEXED_DB'
        | 'INPUT_ATTR_AUTOCOMPLETE'
        | 'INPUT_ATTR_AUTOFOCUS'
        | 'INPUT_ATTR_LIST'
        | 'INPUT_ATTR_PLACEHOLDER'
        | 'INPUT_ATTR_MAX'
        | 'INPUT_ATTR_MIN'
        | 'INPUT_ATTR_MULTIPLE'
        | 'INPUT_ATTR_PATTERN'
        | 'INPUT_ATTR_REQUIRED'
        | 'INPUT_ATTR_STEP'
        | 'INPUT_TYPE_SEARCH'
        | 'INPUT_TYPE_TEL'
        | 'INPUT_TYPE_URL'
        | 'INPUT_TYPE_EMAIL'
        | 'INPUT_TYPE_DATETIME'
        | 'INPUT_TYPE_DATE'
        | 'INPUT_TYPE_MONTH'
        | 'INPUT_TYPE_WEEK'
        | 'INPUT_TYPE_TIME'
        | 'INPUT_TYPE_DATETIME_LOCAL'
        | 'INPUT_TYPE_NUMBER'
        | 'INPUT_TYPE_RANGE'
        | 'INPUT_TYPE_COLOR'
        | 'LOCAL_STORAGE'
        | 'POST_MESSAGE'
        | 'SESSION_STORAGE'
        | 'WEB_SOCKETS'
        | 'WEB_SQL_DATABASE'
        | 'WEB_WORKERS'
        | 'GEO_LOCATION'
        | 'INLINE_SVG'
        | 'SMIL'
        | 'SVG_HREF'
        | 'SVG_CLIP_PATHS'
        | 'TOUCH'
        | 'WEBGL'
        | 'SVG_FILTERS'
        | 'SVG_FE_IMAGE'
      )[]
    | undefined
  backupImageReportingLabel?: string | undefined
  backupImageTargetWindow?: TargetWindow | undefined
  clickTags?: ClickTag[] | undefined
  commercialId?: string | undefined
  companionCreatives?: string[] | undefined
  compatibility?:
    | (
        | 'DISPLAY'
        | 'DISPLAY_INTERSTITIAL'
        | 'APP'
        | 'APP_INTERSTITIAL'
        | 'IN_STREAM_VIDEO'
        | 'IN_STREAM_AUDIO'
      )[]
    | undefined
  convertFlashToHtml5?: boolean | undefined
  counterCustomEvents?: CreativeCustomEvent[] | undefined
  creativeAssetSelection?: CreativeAssetSelection | undefined
  creativeAssets?: CreativeAsset[] | undefined
  creativeFieldAssignments?: CreativeFieldAssignment[] | undefined
  customKeyValues?: string[] | undefined
  dynamicAssetSelection?: boolean | undefined
  exitCustomEvents?: CreativeCustomEvent[] | undefined
  fsCommand?: FsCommand | undefined
  htmlCode?: string | undefined
  htmlCodeLocked?: boolean | undefined
  id?: string | undefined
  idDimensionValue?: DimensionValue | undefined
  kind?: string | undefined
  lastModifiedInfo?: LastModifiedInfo | undefined
  latestTraffickedCreativeId?: string | undefined
  mediaDescription?: string | undefined
  mediaDuration?: number | undefined
  name?: string | undefined
  obaIcon?: ObaIcon | undefined
  overrideCss?: string | undefined
  progressOffset?: VideoOffset | undefined
  redirectUrl?: string | undefined
  renderingId?: string | undefined
  renderingIdDimensionValue?: DimensionValue | undefined
  requiredFlashPluginVersion?: string | undefined
  requiredFlashVersion?: number | undefined
  size?: Size | undefined
  skipOffset?: VideoOffset | undefined
  skippable?: boolean | undefined
  sslCompliant?: boolean | undefined
  sslOverride?: boolean | undefined
  studioAdvertiserId?: string | undefined
  studioCreativeId?: string | undefined
  studioTraffickedCreativeId?: string | undefined
  subaccountId?: string | undefined
  thirdPartyBackupImageImpressionsUrl?: string | undefined
  thirdPartyRichMediaImpressionsUrl?: string | undefined
  thirdPartyUrls?: ThirdPartyTrackingUrl[] | undefined
  timerCustomEvents?: CreativeCustomEvent[] | undefined
  totalFileSize?: string | undefined
  type?:
    | 'IMAGE'
    | 'DISPLAY_REDIRECT'
    | 'CUSTOM_DISPLAY'
    | 'INTERNAL_REDIRECT'
    | 'CUSTOM_DISPLAY_INTERSTITIAL'
    | 'INTERSTITIAL_INTERNAL_REDIRECT'
    | 'TRACKING_TEXT'
    | 'RICH_MEDIA_DISPLAY_BANNER'
    | 'RICH_MEDIA_INPAGE_FLOATING'
    | 'RICH_MEDIA_IM_EXPAND'
    | 'RICH_MEDIA_DISPLAY_EXPANDING'
    | 'RICH_MEDIA_DISPLAY_INTERSTITIAL'
    | 'RICH_MEDIA_DISPLAY_MULTI_FLOATING_INTERSTITIAL'
    | 'RICH_MEDIA_MOBILE_IN_APP'
    | 'FLASH_INPAGE'
    | 'INSTREAM_VIDEO'
    | 'VPAID_LINEAR_VIDEO'
    | 'VPAID_NON_LINEAR_VIDEO'
    | 'INSTREAM_VIDEO_REDIRECT'
    | 'RICH_MEDIA_PEEL_DOWN'
    | 'HTML5_BANNER'
    | 'DISPLAY'
    | 'DISPLAY_IMAGE_GALLERY'
    | 'BRAND_SAFE_DEFAULT_INSTREAM_VIDEO'
    | 'INSTREAM_AUDIO'
    | undefined
  universalAdId?: UniversalAdId | undefined
  version?: number | undefined
}
type CreativesListResponse = {
  creatives?: Creative[] | undefined
  kind?: string | undefined
  nextPageToken?: string | undefined
}
type CustomEventClickAnnotation = { gclid?: string | undefined; kind?: string | undefined }
type CustomEventImpressionAnnotation = {
  kind?: string | undefined
  pathImpressionId?: string | undefined
}
type CustomVariable = {
  index?: string | undefined
  kind?: string | undefined
  value?: string | undefined
}
type CampaignManagerIds = {
  adId?: string | undefined
  campaignId?: string | undefined
  creativeId?: string | undefined
  kind?: string | undefined
  placementId?: string | undefined
  siteId?: string | undefined
}
type DV3Ids = {
  dvCampaignId?: string | undefined
  dvCreativeId?: string | undefined
  dvInsertionOrderId?: string | undefined
  dvLineItemId?: string | undefined
  dvSiteId?: string | undefined
  kind?: string | undefined
}
type CustomEventInsert = {
  cmDimensions?: CampaignManagerIds | undefined
  dv3Dimensions?: DV3Ids | undefined
  insertEventType?: 'UNKNOWN' | 'IMPRESSION' | 'CLICK' | undefined
  kind?: string | undefined
  matchId?: string | undefined
  mobileDeviceId?: string | undefined
}
type CustomEvent = {
  annotateClickEvent?: CustomEventClickAnnotation | undefined
  annotateImpressionEvent?: CustomEventImpressionAnnotation | undefined
  customVariables?: CustomVariable[] | undefined
  eventType?: 'UNKNOWN' | 'INSERT' | 'ANNOTATE' | undefined
  floodlightConfigurationId?: string | undefined
  insertEvent?: CustomEventInsert | undefined
  kind?: string | undefined
  ordinal?: string | undefined
  timestampMicros?: string | undefined
}
type CustomEventsBatchInsertRequest = {
  customEvents?: CustomEvent[] | undefined
  kind?: string | undefined
}
type CustomEventError = {
  code?: 'UNKNOWN' | 'INVALID_ARGUMENT' | 'INTERNAL' | 'PERMISSION_DENIED' | 'NOT_FOUND' | undefined
  kind?: string | undefined
  message?: string | undefined
}
type CustomEventStatus = {
  customEvent?: CustomEvent | undefined
  errors?: CustomEventError[] | undefined
  kind?: string | undefined
}
type CustomEventsBatchInsertResponse = {
  hasFailures?: boolean | undefined
  kind?: string | undefined
  status?: CustomEventStatus[] | undefined
}
type DimensionFilter = {
  dimensionName?: string | undefined
  kind?: string | undefined
  value?: string | undefined
}
type DimensionValueRequest = {
  dimensionName?: string | undefined
  endDate?: string | undefined
  filters?: DimensionFilter[] | undefined
  kind?: string | undefined
  startDate?: string | undefined
}
type DimensionValueList = {
  etag?: string | undefined
  items?: DimensionValue[] | undefined
  kind?: string | undefined
  nextPageToken?: string | undefined
}
type DfpSettings = {
  dfpNetworkCode?: string | undefined
  dfpNetworkName?: string | undefined
  programmaticPlacementAccepted?: boolean | undefined
  pubPaidPlacementAccepted?: boolean | undefined
  publisherPortalOnly?: boolean | undefined
}
type DirectorySiteSettings = {
  activeViewOptOut?: boolean | undefined
  dfpSettings?: DfpSettings | undefined
  instreamVideoPlacementAccepted?: boolean | undefined
  interstitialPlacementAccepted?: boolean | undefined
}
type DirectorySite = {
  id?: string | undefined
  idDimensionValue?: DimensionValue | undefined
  inpageTagFormats?:
    | ('STANDARD' | 'IFRAME_JAVASCRIPT_INPAGE' | 'INTERNAL_REDIRECT_INPAGE' | 'JAVASCRIPT_INPAGE')[]
    | undefined
  interstitialTagFormats?:
    | (
        | 'IFRAME_JAVASCRIPT_INTERSTITIAL'
        | 'INTERNAL_REDIRECT_INTERSTITIAL'
        | 'JAVASCRIPT_INTERSTITIAL'
      )[]
    | undefined
  kind?: string | undefined
  name?: string | undefined
  settings?: DirectorySiteSettings | undefined
  url?: string | undefined
}
type DirectorySitesListResponse = {
  directorySites?: DirectorySite[] | undefined
  kind?: string | undefined
  nextPageToken?: string | undefined
}
type DynamicTargetingKey = {
  kind?: string | undefined
  name?: string | undefined
  objectId?: string | undefined
  objectType?:
    | 'OBJECT_ADVERTISER'
    | 'OBJECT_AD'
    | 'OBJECT_CREATIVE'
    | 'OBJECT_PLACEMENT'
    | undefined
}
type DynamicTargetingKeysListResponse = {
  dynamicTargetingKeys?: DynamicTargetingKey[] | undefined
  kind?: string | undefined
}
type EventTag = {
  accountId?: string | undefined
  advertiserId?: string | undefined
  advertiserIdDimensionValue?: DimensionValue | undefined
  campaignId?: string | undefined
  campaignIdDimensionValue?: DimensionValue | undefined
  enabledByDefault?: boolean | undefined
  excludeFromAdxRequests?: boolean | undefined
  id?: string | undefined
  kind?: string | undefined
  name?: string | undefined
  siteFilterType?: 'WHITELIST' | 'BLACKLIST' | undefined
  siteIds?: string[] | undefined
  sslCompliant?: boolean | undefined
  status?: 'ENABLED' | 'DISABLED' | undefined
  subaccountId?: string | undefined
  type?:
    | 'IMPRESSION_IMAGE_EVENT_TAG'
    | 'IMPRESSION_JAVASCRIPT_EVENT_TAG'
    | 'CLICK_THROUGH_EVENT_TAG'
    | undefined
  url?: string | undefined
  urlEscapeLevels?: number | undefined
}
type EventTagsListResponse = { eventTags?: EventTag[] | undefined; kind?: string | undefined }
type FileList = {
  etag?: string | undefined
  items?: File2[] | undefined
  kind?: string | undefined
  nextPageToken?: string | undefined
}
type FloodlightActivityDynamicTag = {
  id?: string | undefined
  name?: string | undefined
  tag?: string | undefined
}
type FloodlightActivityPublisherDynamicTag = {
  clickThrough?: boolean | undefined
  directorySiteId?: string | undefined
  dynamicTag?: FloodlightActivityDynamicTag | undefined
  siteId?: string | undefined
  siteIdDimensionValue?: DimensionValue | undefined
  viewThrough?: boolean | undefined
}
type FloodlightActivity = {
  accountId?: string | undefined
  advertiserId?: string | undefined
  advertiserIdDimensionValue?: DimensionValue | undefined
  attributionEnabled?: boolean | undefined
  cacheBustingType?: 'JAVASCRIPT' | 'ACTIVE_SERVER_PAGE' | 'JSP' | 'PHP' | 'COLD_FUSION' | undefined
  countingMethod?:
    | 'STANDARD_COUNTING'
    | 'UNIQUE_COUNTING'
    | 'SESSION_COUNTING'
    | 'TRANSACTIONS_COUNTING'
    | 'ITEMS_SOLD_COUNTING'
    | undefined
  defaultTags?: FloodlightActivityDynamicTag[] | undefined
  expectedUrl?: string | undefined
  floodlightActivityGroupId?: string | undefined
  floodlightActivityGroupName?: string | undefined
  floodlightActivityGroupTagString?: string | undefined
  floodlightActivityGroupType?: 'COUNTER' | 'SALE' | undefined
  floodlightConfigurationId?: string | undefined
  floodlightConfigurationIdDimensionValue?: DimensionValue | undefined
  floodlightTagType?: 'IFRAME' | 'IMAGE' | 'GLOBAL_SITE_TAG' | undefined
  id?: string | undefined
  idDimensionValue?: DimensionValue | undefined
  kind?: string | undefined
  name?: string | undefined
  notes?: string | undefined
  publisherTags?: FloodlightActivityPublisherDynamicTag[] | undefined
  secure?: boolean | undefined
  sslCompliant?: boolean | undefined
  sslRequired?: boolean | undefined
  status?: 'ACTIVE' | 'ARCHIVED_AND_DISABLED' | 'ARCHIVED' | 'DISABLED_POLICY' | undefined
  subaccountId?: string | undefined
  tagFormat?: 'HTML' | 'XHTML' | undefined
  tagString?: string | undefined
  userDefinedVariableTypes?:
    | (
        | 'U1'
        | 'U2'
        | 'U3'
        | 'U4'
        | 'U5'
        | 'U6'
        | 'U7'
        | 'U8'
        | 'U9'
        | 'U10'
        | 'U11'
        | 'U12'
        | 'U13'
        | 'U14'
        | 'U15'
        | 'U16'
        | 'U17'
        | 'U18'
        | 'U19'
        | 'U20'
        | 'U21'
        | 'U22'
        | 'U23'
        | 'U24'
        | 'U25'
        | 'U26'
        | 'U27'
        | 'U28'
        | 'U29'
        | 'U30'
        | 'U31'
        | 'U32'
        | 'U33'
        | 'U34'
        | 'U35'
        | 'U36'
        | 'U37'
        | 'U38'
        | 'U39'
        | 'U40'
        | 'U41'
        | 'U42'
        | 'U43'
        | 'U44'
        | 'U45'
        | 'U46'
        | 'U47'
        | 'U48'
        | 'U49'
        | 'U50'
        | 'U51'
        | 'U52'
        | 'U53'
        | 'U54'
        | 'U55'
        | 'U56'
        | 'U57'
        | 'U58'
        | 'U59'
        | 'U60'
        | 'U61'
        | 'U62'
        | 'U63'
        | 'U64'
        | 'U65'
        | 'U66'
        | 'U67'
        | 'U68'
        | 'U69'
        | 'U70'
        | 'U71'
        | 'U72'
        | 'U73'
        | 'U74'
        | 'U75'
        | 'U76'
        | 'U77'
        | 'U78'
        | 'U79'
        | 'U80'
        | 'U81'
        | 'U82'
        | 'U83'
        | 'U84'
        | 'U85'
        | 'U86'
        | 'U87'
        | 'U88'
        | 'U89'
        | 'U90'
        | 'U91'
        | 'U92'
        | 'U93'
        | 'U94'
        | 'U95'
        | 'U96'
        | 'U97'
        | 'U98'
        | 'U99'
        | 'U100'
      )[]
    | undefined
}
type FloodlightActivitiesListResponse = {
  floodlightActivities?: FloodlightActivity[] | undefined
  kind?: string | undefined
  nextPageToken?: string | undefined
}
type FloodlightActivitiesGenerateTagResponse = {
  floodlightActivityTag?: string | undefined
  globalSiteTagGlobalSnippet?: string | undefined
  kind?: string | undefined
}
type FloodlightActivityGroup = {
  accountId?: string | undefined
  advertiserId?: string | undefined
  advertiserIdDimensionValue?: DimensionValue | undefined
  floodlightConfigurationId?: string | undefined
  floodlightConfigurationIdDimensionValue?: DimensionValue | undefined
  id?: string | undefined
  idDimensionValue?: DimensionValue | undefined
  kind?: string | undefined
  name?: string | undefined
  subaccountId?: string | undefined
  tagString?: string | undefined
  type?: 'COUNTER' | 'SALE' | undefined
}
type FloodlightActivityGroupsListResponse = {
  floodlightActivityGroups?: FloodlightActivityGroup[] | undefined
  kind?: string | undefined
  nextPageToken?: string | undefined
}
type CustomViewabilityMetricConfiguration = {
  audible?: boolean | undefined
  timeMillis?: number | undefined
  timePercent?: number | undefined
  viewabilityPercent?: number | undefined
}
type CustomViewabilityMetric = {
  configuration?: CustomViewabilityMetricConfiguration | undefined
  id?: string | undefined
  name?: string | undefined
}
type OmnitureSettings = {
  omnitureCostDataEnabled?: boolean | undefined
  omnitureIntegrationEnabled?: boolean | undefined
}
type TagSettings = {
  dynamicTagEnabled?: boolean | undefined
  imageTagEnabled?: boolean | undefined
}
type ThirdPartyAuthenticationToken = { name?: string | undefined; value?: string | undefined }
type UserDefinedVariableConfiguration = {
  dataType?: 'STRING' | 'NUMBER' | undefined
  reportName?: string | undefined
  variableType?:
    | 'U1'
    | 'U2'
    | 'U3'
    | 'U4'
    | 'U5'
    | 'U6'
    | 'U7'
    | 'U8'
    | 'U9'
    | 'U10'
    | 'U11'
    | 'U12'
    | 'U13'
    | 'U14'
    | 'U15'
    | 'U16'
    | 'U17'
    | 'U18'
    | 'U19'
    | 'U20'
    | 'U21'
    | 'U22'
    | 'U23'
    | 'U24'
    | 'U25'
    | 'U26'
    | 'U27'
    | 'U28'
    | 'U29'
    | 'U30'
    | 'U31'
    | 'U32'
    | 'U33'
    | 'U34'
    | 'U35'
    | 'U36'
    | 'U37'
    | 'U38'
    | 'U39'
    | 'U40'
    | 'U41'
    | 'U42'
    | 'U43'
    | 'U44'
    | 'U45'
    | 'U46'
    | 'U47'
    | 'U48'
    | 'U49'
    | 'U50'
    | 'U51'
    | 'U52'
    | 'U53'
    | 'U54'
    | 'U55'
    | 'U56'
    | 'U57'
    | 'U58'
    | 'U59'
    | 'U60'
    | 'U61'
    | 'U62'
    | 'U63'
    | 'U64'
    | 'U65'
    | 'U66'
    | 'U67'
    | 'U68'
    | 'U69'
    | 'U70'
    | 'U71'
    | 'U72'
    | 'U73'
    | 'U74'
    | 'U75'
    | 'U76'
    | 'U77'
    | 'U78'
    | 'U79'
    | 'U80'
    | 'U81'
    | 'U82'
    | 'U83'
    | 'U84'
    | 'U85'
    | 'U86'
    | 'U87'
    | 'U88'
    | 'U89'
    | 'U90'
    | 'U91'
    | 'U92'
    | 'U93'
    | 'U94'
    | 'U95'
    | 'U96'
    | 'U97'
    | 'U98'
    | 'U99'
    | 'U100'
    | undefined
}
type FloodlightConfiguration = {
  accountId?: string | undefined
  advertiserId?: string | undefined
  advertiserIdDimensionValue?: DimensionValue | undefined
  analyticsDataSharingEnabled?: boolean | undefined
  customViewabilityMetric?: CustomViewabilityMetric | undefined
  exposureToConversionEnabled?: boolean | undefined
  firstDayOfWeek?: 'MONDAY' | 'SUNDAY' | undefined
  id?: string | undefined
  idDimensionValue?: DimensionValue | undefined
  inAppAttributionTrackingEnabled?: boolean | undefined
  kind?: string | undefined
  lookbackConfiguration?: LookbackConfiguration | undefined
  naturalSearchConversionAttributionOption?:
    | 'EXCLUDE_NATURAL_SEARCH_CONVERSION_ATTRIBUTION'
    | 'INCLUDE_NATURAL_SEARCH_CONVERSION_ATTRIBUTION'
    | 'INCLUDE_NATURAL_SEARCH_TIERED_CONVERSION_ATTRIBUTION'
    | undefined
  omnitureSettings?: OmnitureSettings | undefined
  subaccountId?: string | undefined
  tagSettings?: TagSettings | undefined
  thirdPartyAuthenticationTokens?: ThirdPartyAuthenticationToken[] | undefined
  userDefinedVariableConfigurations?: UserDefinedVariableConfiguration[] | undefined
}
type FloodlightConfigurationsListResponse = {
  floodlightConfigurations?: FloodlightConfiguration[] | undefined
  kind?: string | undefined
}
type LanguagesListResponse = { kind?: string | undefined; languages?: Language[] | undefined }
type MetrosListResponse = { kind?: string | undefined; metros?: Metro[] | undefined }
type MobileAppsListResponse = {
  kind?: string | undefined
  mobileApps?: MobileApp[] | undefined
  nextPageToken?: string | undefined
}
type MobileCarriersListResponse = {
  kind?: string | undefined
  mobileCarriers?: MobileCarrier[] | undefined
}
type OperatingSystemVersionsListResponse = {
  kind?: string | undefined
  operatingSystemVersions?: OperatingSystemVersion[] | undefined
}
type OperatingSystemsListResponse = {
  kind?: string | undefined
  operatingSystems?: OperatingSystem[] | undefined
}
type PricingSchedulePricingPeriod = {
  endDate?: string | undefined
  pricingComment?: string | undefined
  rateOrCostNanos?: string | undefined
  startDate?: string | undefined
  units?: string | undefined
}
type PricingSchedule = {
  capCostOption?: 'CAP_COST_NONE' | 'CAP_COST_MONTHLY' | 'CAP_COST_CUMULATIVE' | undefined
  endDate?: string | undefined
  flighted?: boolean | undefined
  floodlightActivityId?: string | undefined
  pricingPeriods?: PricingSchedulePricingPeriod[] | undefined
  pricingType?:
    | 'PRICING_TYPE_CPM'
    | 'PRICING_TYPE_CPC'
    | 'PRICING_TYPE_CPA'
    | 'PRICING_TYPE_FLAT_RATE_IMPRESSIONS'
    | 'PRICING_TYPE_FLAT_RATE_CLICKS'
    | 'PRICING_TYPE_CPM_ACTIVEVIEW'
    | undefined
  startDate?: string | undefined
  testingStartDate?: string | undefined
}
type PlacementGroup = {
  accountId?: string | undefined
  advertiserId?: string | undefined
  advertiserIdDimensionValue?: DimensionValue | undefined
  archived?: boolean | undefined
  campaignId?: string | undefined
  campaignIdDimensionValue?: DimensionValue | undefined
  childPlacementIds?: string[] | undefined
  comment?: string | undefined
  contentCategoryId?: string | undefined
  createInfo?: LastModifiedInfo | undefined
  directorySiteId?: string | undefined
  directorySiteIdDimensionValue?: DimensionValue | undefined
  externalId?: string | undefined
  id?: string | undefined
  idDimensionValue?: DimensionValue | undefined
  kind?: string | undefined
  lastModifiedInfo?: LastModifiedInfo | undefined
  name?: string | undefined
  placementGroupType?: 'PLACEMENT_PACKAGE' | 'PLACEMENT_ROADBLOCK' | undefined
  placementStrategyId?: string | undefined
  pricingSchedule?: PricingSchedule | undefined
  primaryPlacementId?: string | undefined
  primaryPlacementIdDimensionValue?: DimensionValue | undefined
  siteId?: string | undefined
  siteIdDimensionValue?: DimensionValue | undefined
  subaccountId?: string | undefined
}
type PlacementGroupsListResponse = {
  kind?: string | undefined
  nextPageToken?: string | undefined
  placementGroups?: PlacementGroup[] | undefined
}
type PlacementStrategy = {
  accountId?: string | undefined
  id?: string | undefined
  kind?: string | undefined
  name?: string | undefined
}
type PlacementStrategiesListResponse = {
  kind?: string | undefined
  nextPageToken?: string | undefined
  placementStrategies?: PlacementStrategy[] | undefined
}
type TagSetting = {
  additionalKeyValues?: string | undefined
  includeClickThroughUrls?: boolean | undefined
  includeClickTracking?: boolean | undefined
  keywordOption?:
    | 'PLACEHOLDER_WITH_LIST_OF_KEYWORDS'
    | 'IGNORE'
    | 'GENERATE_SEPARATE_TAG_FOR_EACH_KEYWORD'
    | undefined
}
type CompanionSetting = {
  companionsDisabled?: boolean | undefined
  enabledSizes?: Size[] | undefined
  imageOnly?: boolean | undefined
  kind?: string | undefined
}
type SkippableSetting = {
  kind?: string | undefined
  progressOffset?: VideoOffset | undefined
  skipOffset?: VideoOffset | undefined
  skippable?: boolean | undefined
}
type TranscodeSetting = { enabledVideoFormats?: number[] | undefined; kind?: string | undefined }
type VideoSettings = {
  companionSettings?: CompanionSetting | undefined
  kind?: string | undefined
  obaEnabled?: boolean | undefined
  obaSettings?: ObaIcon | undefined
  orientation?: 'ANY' | 'LANDSCAPE' | 'PORTRAIT' | undefined
  skippableSettings?: SkippableSetting | undefined
  transcodeSettings?: TranscodeSetting | undefined
}
type Placement = {
  accountId?: string | undefined
  adBlockingOptOut?: boolean | undefined
  additionalSizes?: Size[] | undefined
  advertiserId?: string | undefined
  advertiserIdDimensionValue?: DimensionValue | undefined
  archived?: boolean | undefined
  campaignId?: string | undefined
  campaignIdDimensionValue?: DimensionValue | undefined
  comment?: string | undefined
  compatibility?:
    | 'DISPLAY'
    | 'DISPLAY_INTERSTITIAL'
    | 'APP'
    | 'APP_INTERSTITIAL'
    | 'IN_STREAM_VIDEO'
    | 'IN_STREAM_AUDIO'
    | undefined
  contentCategoryId?: string | undefined
  createInfo?: LastModifiedInfo | undefined
  directorySiteId?: string | undefined
  directorySiteIdDimensionValue?: DimensionValue | undefined
  externalId?: string | undefined
  id?: string | undefined
  idDimensionValue?: DimensionValue | undefined
  keyName?: string | undefined
  kind?: string | undefined
  lastModifiedInfo?: LastModifiedInfo | undefined
  lookbackConfiguration?: LookbackConfiguration | undefined
  name?: string | undefined
  paymentApproved?: boolean | undefined
  paymentSource?: 'PLACEMENT_AGENCY_PAID' | 'PLACEMENT_PUBLISHER_PAID' | undefined
  placementGroupId?: string | undefined
  placementGroupIdDimensionValue?: DimensionValue | undefined
  placementStrategyId?: string | undefined
  pricingSchedule?: PricingSchedule | undefined
  primary?: boolean | undefined
  publisherUpdateInfo?: LastModifiedInfo | undefined
  siteId?: string | undefined
  siteIdDimensionValue?: DimensionValue | undefined
  size?: Size | undefined
  sslRequired?: boolean | undefined
  status?:
    | 'PENDING_REVIEW'
    | 'PAYMENT_ACCEPTED'
    | 'PAYMENT_REJECTED'
    | 'ACKNOWLEDGE_REJECTION'
    | 'ACKNOWLEDGE_ACCEPTANCE'
    | 'DRAFT'
    | undefined
  subaccountId?: string | undefined
  tagFormats?:
    | (
        | 'PLACEMENT_TAG_STANDARD'
        | 'PLACEMENT_TAG_IFRAME_JAVASCRIPT'
        | 'PLACEMENT_TAG_IFRAME_ILAYER'
        | 'PLACEMENT_TAG_INTERNAL_REDIRECT'
        | 'PLACEMENT_TAG_JAVASCRIPT'
        | 'PLACEMENT_TAG_INTERSTITIAL_IFRAME_JAVASCRIPT'
        | 'PLACEMENT_TAG_INTERSTITIAL_INTERNAL_REDIRECT'
        | 'PLACEMENT_TAG_INTERSTITIAL_JAVASCRIPT'
        | 'PLACEMENT_TAG_CLICK_COMMANDS'
        | 'PLACEMENT_TAG_INSTREAM_VIDEO_PREFETCH'
        | 'PLACEMENT_TAG_TRACKING'
        | 'PLACEMENT_TAG_TRACKING_IFRAME'
        | 'PLACEMENT_TAG_TRACKING_JAVASCRIPT'
        | 'PLACEMENT_TAG_INSTREAM_VIDEO_PREFETCH_VAST_3'
        | 'PLACEMENT_TAG_IFRAME_JAVASCRIPT_LEGACY'
        | 'PLACEMENT_TAG_JAVASCRIPT_LEGACY'
        | 'PLACEMENT_TAG_INTERSTITIAL_IFRAME_JAVASCRIPT_LEGACY'
        | 'PLACEMENT_TAG_INTERSTITIAL_JAVASCRIPT_LEGACY'
        | 'PLACEMENT_TAG_INSTREAM_VIDEO_PREFETCH_VAST_4'
        | 'PLACEMENT_TAG_TRACKING_THIRD_PARTY_MEASUREMENT'
      )[]
    | undefined
  tagSetting?: TagSetting | undefined
  videoActiveViewOptOut?: boolean | undefined
  videoSettings?: VideoSettings | undefined
  vpaidAdapterChoice?: 'DEFAULT' | 'FLASH' | 'HTML5' | 'BOTH' | undefined
}
type PlacementsListResponse = {
  kind?: string | undefined
  nextPageToken?: string | undefined
  placements?: Placement[] | undefined
}
type TagData = {
  adId?: string | undefined
  clickTag?: string | undefined
  creativeId?: string | undefined
  format?:
    | 'PLACEMENT_TAG_STANDARD'
    | 'PLACEMENT_TAG_IFRAME_JAVASCRIPT'
    | 'PLACEMENT_TAG_IFRAME_ILAYER'
    | 'PLACEMENT_TAG_INTERNAL_REDIRECT'
    | 'PLACEMENT_TAG_JAVASCRIPT'
    | 'PLACEMENT_TAG_INTERSTITIAL_IFRAME_JAVASCRIPT'
    | 'PLACEMENT_TAG_INTERSTITIAL_INTERNAL_REDIRECT'
    | 'PLACEMENT_TAG_INTERSTITIAL_JAVASCRIPT'
    | 'PLACEMENT_TAG_CLICK_COMMANDS'
    | 'PLACEMENT_TAG_INSTREAM_VIDEO_PREFETCH'
    | 'PLACEMENT_TAG_TRACKING'
    | 'PLACEMENT_TAG_TRACKING_IFRAME'
    | 'PLACEMENT_TAG_TRACKING_JAVASCRIPT'
    | 'PLACEMENT_TAG_INSTREAM_VIDEO_PREFETCH_VAST_3'
    | 'PLACEMENT_TAG_IFRAME_JAVASCRIPT_LEGACY'
    | 'PLACEMENT_TAG_JAVASCRIPT_LEGACY'
    | 'PLACEMENT_TAG_INTERSTITIAL_IFRAME_JAVASCRIPT_LEGACY'
    | 'PLACEMENT_TAG_INTERSTITIAL_JAVASCRIPT_LEGACY'
    | 'PLACEMENT_TAG_INSTREAM_VIDEO_PREFETCH_VAST_4'
    | 'PLACEMENT_TAG_TRACKING_THIRD_PARTY_MEASUREMENT'
    | undefined
  impressionTag?: string | undefined
}
type PlacementTag = { placementId?: string | undefined; tagDatas?: TagData[] | undefined }
type PlacementsGenerateTagsResponse = {
  kind?: string | undefined
  placementTags?: PlacementTag[] | undefined
}
type PlatformTypesListResponse = {
  kind?: string | undefined
  platformTypes?: PlatformType[] | undefined
}
type PostalCodesListResponse = { kind?: string | undefined; postalCodes?: PostalCode[] | undefined }
type Project = {
  accountId?: string | undefined
  advertiserId?: string | undefined
  audienceAgeGroup?:
    | 'PLANNING_AUDIENCE_AGE_18_24'
    | 'PLANNING_AUDIENCE_AGE_25_34'
    | 'PLANNING_AUDIENCE_AGE_35_44'
    | 'PLANNING_AUDIENCE_AGE_45_54'
    | 'PLANNING_AUDIENCE_AGE_55_64'
    | 'PLANNING_AUDIENCE_AGE_65_OR_MORE'
    | 'PLANNING_AUDIENCE_AGE_UNKNOWN'
    | undefined
  audienceGender?: 'PLANNING_AUDIENCE_GENDER_MALE' | 'PLANNING_AUDIENCE_GENDER_FEMALE' | undefined
  budget?: string | undefined
  clientBillingCode?: string | undefined
  clientName?: string | undefined
  endDate?: string | undefined
  id?: string | undefined
  kind?: string | undefined
  lastModifiedInfo?: LastModifiedInfo | undefined
  name?: string | undefined
  overview?: string | undefined
  startDate?: string | undefined
  subaccountId?: string | undefined
  targetClicks?: string | undefined
  targetConversions?: string | undefined
  targetCpaNanos?: string | undefined
  targetCpcNanos?: string | undefined
  targetCpmActiveViewNanos?: string | undefined
  targetCpmNanos?: string | undefined
  targetImpressions?: string | undefined
}
type ProjectsListResponse = {
  kind?: string | undefined
  nextPageToken?: string | undefined
  projects?: Project[] | undefined
}
type AdSlot = {
  comment?: string | undefined
  compatibility?:
    | 'DISPLAY'
    | 'DISPLAY_INTERSTITIAL'
    | 'APP'
    | 'APP_INTERSTITIAL'
    | 'IN_STREAM_VIDEO'
    | 'IN_STREAM_AUDIO'
    | undefined
  height?: string | undefined
  linkedPlacementId?: string | undefined
  name?: string | undefined
  paymentSourceType?:
    | 'PLANNING_PAYMENT_SOURCE_TYPE_AGENCY_PAID'
    | 'PLANNING_PAYMENT_SOURCE_TYPE_PUBLISHER_PAID'
    | undefined
  primary?: boolean | undefined
  width?: string | undefined
}
type Flight = {
  endDate?: string | undefined
  rateOrCost?: string | undefined
  startDate?: string | undefined
  units?: string | undefined
}
type Pricing = {
  capCostType?:
    | 'PLANNING_PLACEMENT_CAP_COST_TYPE_NONE'
    | 'PLANNING_PLACEMENT_CAP_COST_TYPE_MONTHLY'
    | 'PLANNING_PLACEMENT_CAP_COST_TYPE_CUMULATIVE'
    | undefined
  endDate?: string | undefined
  flights?: Flight[] | undefined
  groupType?:
    | 'PLANNING_PLACEMENT_GROUP_TYPE_PACKAGE'
    | 'PLANNING_PLACEMENT_GROUP_TYPE_ROADBLOCK'
    | undefined
  pricingType?:
    | 'PLANNING_PLACEMENT_PRICING_TYPE_IMPRESSIONS'
    | 'PLANNING_PLACEMENT_PRICING_TYPE_CPM'
    | 'PLANNING_PLACEMENT_PRICING_TYPE_CLICKS'
    | 'PLANNING_PLACEMENT_PRICING_TYPE_CPC'
    | 'PLANNING_PLACEMENT_PRICING_TYPE_CPA'
    | 'PLANNING_PLACEMENT_PRICING_TYPE_FLAT_RATE_IMPRESSIONS'
    | 'PLANNING_PLACEMENT_PRICING_TYPE_FLAT_RATE_CLICKS'
    | 'PLANNING_PLACEMENT_PRICING_TYPE_CPM_ACTIVEVIEW'
    | undefined
  startDate?: string | undefined
}
type InventoryItem = {
  accountId?: string | undefined
  adSlots?: AdSlot[] | undefined
  advertiserId?: string | undefined
  contentCategoryId?: string | undefined
  estimatedClickThroughRate?: string | undefined
  estimatedConversionRate?: string | undefined
  id?: string | undefined
  inPlan?: boolean | undefined
  kind?: string | undefined
  lastModifiedInfo?: LastModifiedInfo | undefined
  name?: string | undefined
  negotiationChannelId?: string | undefined
  orderId?: string | undefined
  placementStrategyId?: string | undefined
  pricing?: Pricing | undefined
  projectId?: string | undefined
  rfpId?: string | undefined
  siteId?: string | undefined
  subaccountId?: string | undefined
  type?: 'PLANNING_PLACEMENT_TYPE_REGULAR' | 'PLANNING_PLACEMENT_TYPE_CREDIT' | undefined
}
type InventoryItemsListResponse = {
  inventoryItems?: InventoryItem[] | undefined
  kind?: string | undefined
  nextPageToken?: string | undefined
}
type OrderDocument = {
  accountId?: string | undefined
  advertiserId?: string | undefined
  amendedOrderDocumentId?: string | undefined
  approvedByUserProfileIds?: string[] | undefined
  cancelled?: boolean | undefined
  createdInfo?: LastModifiedInfo | undefined
  effectiveDate?: string | undefined
  id?: string | undefined
  kind?: string | undefined
  lastSentRecipients?: string[] | undefined
  lastSentTime?: string | undefined
  orderId?: string | undefined
  projectId?: string | undefined
  signed?: boolean | undefined
  subaccountId?: string | undefined
  title?: string | undefined
  type?: 'PLANNING_ORDER_TYPE_INSERTION_ORDER' | 'PLANNING_ORDER_TYPE_CHANGE_ORDER' | undefined
}
type OrderDocumentsListResponse = {
  kind?: string | undefined
  nextPageToken?: string | undefined
  orderDocuments?: OrderDocument[] | undefined
}
type OrderContact = {
  contactInfo?: string | undefined
  contactName?: string | undefined
  contactTitle?: string | undefined
  contactType?:
    | 'PLANNING_ORDER_CONTACT_BUYER_CONTACT'
    | 'PLANNING_ORDER_CONTACT_BUYER_BILLING_CONTACT'
    | 'PLANNING_ORDER_CONTACT_SELLER_CONTACT'
    | undefined
  signatureUserProfileId?: string | undefined
}
type Order = {
  accountId?: string | undefined
  advertiserId?: string | undefined
  approverUserProfileIds?: string[] | undefined
  buyerInvoiceId?: string | undefined
  buyerOrganizationName?: string | undefined
  comments?: string | undefined
  contacts?: OrderContact[] | undefined
  id?: string | undefined
  kind?: string | undefined
  lastModifiedInfo?: LastModifiedInfo | undefined
  name?: string | undefined
  notes?: string | undefined
  planningTermId?: string | undefined
  projectId?: string | undefined
  sellerOrderId?: string | undefined
  sellerOrganizationName?: string | undefined
  siteId?: string[] | undefined
  siteNames?: string[] | undefined
  subaccountId?: string | undefined
  termsAndConditions?: string | undefined
}
type OrdersListResponse = {
  kind?: string | undefined
  nextPageToken?: string | undefined
  orders?: Order[] | undefined
}
type RegionsListResponse = { kind?: string | undefined; regions?: Region[] | undefined }
type RemarketingListShare = {
  kind?: string | undefined
  remarketingListId?: string | undefined
  sharedAccountIds?: string[] | undefined
  sharedAdvertiserIds?: string[] | undefined
}
type ListPopulationTerm = {
  contains?: boolean | undefined
  negation?: boolean | undefined
  operator?:
    | 'NUM_EQUALS'
    | 'NUM_LESS_THAN'
    | 'NUM_LESS_THAN_EQUAL'
    | 'NUM_GREATER_THAN'
    | 'NUM_GREATER_THAN_EQUAL'
    | 'STRING_EQUALS'
    | 'STRING_CONTAINS'
    | undefined
  remarketingListId?: string | undefined
  type?: 'CUSTOM_VARIABLE_TERM' | 'LIST_MEMBERSHIP_TERM' | 'REFERRER_TERM' | undefined
  value?: string | undefined
  variableFriendlyName?: string | undefined
  variableName?: string | undefined
}
type ListPopulationClause = { terms?: ListPopulationTerm[] | undefined }
type ListPopulationRule = {
  floodlightActivityId?: string | undefined
  floodlightActivityName?: string | undefined
  listPopulationClauses?: ListPopulationClause[] | undefined
}
type RemarketingList = {
  accountId?: string | undefined
  active?: boolean | undefined
  advertiserId?: string | undefined
  advertiserIdDimensionValue?: DimensionValue | undefined
  description?: string | undefined
  id?: string | undefined
  kind?: string | undefined
  lifeSpan?: string | undefined
  listPopulationRule?: ListPopulationRule | undefined
  listSize?: string | undefined
  listSource?:
    | 'REMARKETING_LIST_SOURCE_OTHER'
    | 'REMARKETING_LIST_SOURCE_ADX'
    | 'REMARKETING_LIST_SOURCE_DFP'
    | 'REMARKETING_LIST_SOURCE_XFP'
    | 'REMARKETING_LIST_SOURCE_DFA'
    | 'REMARKETING_LIST_SOURCE_GA'
    | 'REMARKETING_LIST_SOURCE_YOUTUBE'
    | 'REMARKETING_LIST_SOURCE_DBM'
    | 'REMARKETING_LIST_SOURCE_GPLUS'
    | 'REMARKETING_LIST_SOURCE_DMP'
    | 'REMARKETING_LIST_SOURCE_PLAY_STORE'
    | undefined
  name?: string | undefined
  subaccountId?: string | undefined
}
type RemarketingListsListResponse = {
  kind?: string | undefined
  nextPageToken?: string | undefined
  remarketingLists?: RemarketingList[] | undefined
}
type Activities = {
  filters?: DimensionValue[] | undefined
  kind?: string | undefined
  metricNames?: string[] | undefined
}
type CustomRichMediaEvents = {
  filteredEventIds?: DimensionValue[] | undefined
  kind?: string | undefined
}
type SortedDimension = {
  kind?: string | undefined
  name?: string | undefined
  sortOrder?: 'ASCENDING' | 'DESCENDING' | undefined
}
type Recipient = {
  deliveryType?: 'LINK' | 'ATTACHMENT' | undefined
  email?: string | undefined
  kind?: string | undefined
}
type PathReportDimensionValue = {
  dimensionName?: string | undefined
  ids?: string[] | undefined
  kind?: string | undefined
  matchType?: 'EXACT' | 'BEGINS_WITH' | 'CONTAINS' | 'WILDCARD_EXPRESSION' | undefined
  values?: string[] | undefined
}
type EventFilter = {
  dimensionFilter?: PathReportDimensionValue | undefined
  kind?: string | undefined
}
type DisjunctiveMatchStatement = {
  eventFilters?: EventFilter[] | undefined
  kind?: string | undefined
}
type ChannelGroupingRule = {
  disjunctiveMatchStatements?: DisjunctiveMatchStatement[] | undefined
  kind?: string | undefined
  name?: string | undefined
}
type ChannelGrouping = {
  fallbackName?: string | undefined
  kind?: string | undefined
  name?: string | undefined
  rules?: ChannelGroupingRule[] | undefined
}
type PathFilter = {
  eventFilters?: EventFilter[] | undefined
  kind?: string | undefined
  pathMatchPosition?: 'PATH_MATCH_POSITION_UNSPECIFIED' | 'ANY' | 'FIRST' | 'LAST' | undefined
}
type Report = {
  accountId?: string | undefined
  criteria?:
    | {
        activities?: Activities | undefined
        customRichMediaEvents?: CustomRichMediaEvents | undefined
        dateRange?: DateRange | undefined
        dimensionFilters?: DimensionValue[] | undefined
        dimensions?: SortedDimension[] | undefined
        metricNames?: string[] | undefined
      }
    | undefined
  crossDimensionReachCriteria?:
    | {
        breakdown?: SortedDimension[] | undefined
        dateRange?: DateRange | undefined
        dimension?:
          | 'ADVERTISER'
          | 'CAMPAIGN'
          | 'SITE_BY_ADVERTISER'
          | 'SITE_BY_CAMPAIGN'
          | undefined
        dimensionFilters?: DimensionValue[] | undefined
        metricNames?: string[] | undefined
        overlapMetricNames?: string[] | undefined
        pivoted?: boolean | undefined
      }
    | undefined
  delivery?:
    | {
        emailOwner?: boolean | undefined
        emailOwnerDeliveryType?: 'LINK' | 'ATTACHMENT' | undefined
        message?: string | undefined
        recipients?: Recipient[] | undefined
      }
    | undefined
  etag?: string | undefined
  fileName?: string | undefined
  floodlightCriteria?:
    | {
        customRichMediaEvents?: DimensionValue[] | undefined
        dateRange?: DateRange | undefined
        dimensionFilters?: DimensionValue[] | undefined
        dimensions?: SortedDimension[] | undefined
        floodlightConfigId?: DimensionValue | undefined
        metricNames?: string[] | undefined
        reportProperties?:
          | {
              includeAttributedIPConversions?: boolean | undefined
              includeUnattributedCookieConversions?: boolean | undefined
              includeUnattributedIPConversions?: boolean | undefined
            }
          | undefined
      }
    | undefined
  format?: 'CSV' | 'EXCEL' | undefined
  id?: string | undefined
  kind?: string | undefined
  lastModifiedTime?: string | undefined
  name?: string | undefined
  ownerProfileId?: string | undefined
  pathAttributionCriteria?:
    | {
        activityFilters?: DimensionValue[] | undefined
        customChannelGrouping?: ChannelGrouping | undefined
        dateRange?: DateRange | undefined
        dimensions?: SortedDimension[] | undefined
        floodlightConfigId?: DimensionValue | undefined
        metricNames?: string[] | undefined
        pathFilters?: PathFilter[] | undefined
      }
    | undefined
  pathCriteria?:
    | {
        activityFilters?: DimensionValue[] | undefined
        customChannelGrouping?: ChannelGrouping | undefined
        dateRange?: DateRange | undefined
        dimensions?: SortedDimension[] | undefined
        floodlightConfigId?: DimensionValue | undefined
        metricNames?: string[] | undefined
        pathFilters?: PathFilter[] | undefined
      }
    | undefined
  pathToConversionCriteria?:
    | {
        activityFilters?: DimensionValue[] | undefined
        conversionDimensions?: SortedDimension[] | undefined
        customFloodlightVariables?: SortedDimension[] | undefined
        customRichMediaEvents?: DimensionValue[] | undefined
        dateRange?: DateRange | undefined
        floodlightConfigId?: DimensionValue | undefined
        metricNames?: string[] | undefined
        perInteractionDimensions?: SortedDimension[] | undefined
        reportProperties?:
          | {
              clicksLookbackWindow?: number | undefined
              impressionsLookbackWindow?: number | undefined
              includeAttributedIPConversions?: boolean | undefined
              includeUnattributedCookieConversions?: boolean | undefined
              includeUnattributedIPConversions?: boolean | undefined
              maximumClickInteractions?: number | undefined
              maximumImpressionInteractions?: number | undefined
              maximumInteractionGap?: number | undefined
              pivotOnInteractionPath?: boolean | undefined
            }
          | undefined
      }
    | undefined
  reachCriteria?:
    | {
        activities?: Activities | undefined
        customRichMediaEvents?: CustomRichMediaEvents | undefined
        dateRange?: DateRange | undefined
        dimensionFilters?: DimensionValue[] | undefined
        dimensions?: SortedDimension[] | undefined
        enableAllDimensionCombinations?: boolean | undefined
        metricNames?: string[] | undefined
        reachByFrequencyMetricNames?: string[] | undefined
      }
    | undefined
  schedule?:
    | {
        active?: boolean | undefined
        every?: number | undefined
        expirationDate?: string | undefined
        repeats?: string | undefined
        repeatsOnWeekDays?:
          | ('SUNDAY' | 'MONDAY' | 'TUESDAY' | 'WEDNESDAY' | 'THURSDAY' | 'FRIDAY' | 'SATURDAY')[]
          | undefined
        runsOnDayOfMonth?: 'DAY_OF_MONTH' | 'WEEK_OF_MONTH' | undefined
        startDate?: string | undefined
      }
    | undefined
  subAccountId?: string | undefined
  type?:
    | 'STANDARD'
    | 'REACH'
    | 'PATH_TO_CONVERSION'
    | 'CROSS_DIMENSION_REACH'
    | 'FLOODLIGHT'
    | 'PATH'
    | 'PATH_ATTRIBUTION'
    | undefined
}
type ReportList = {
  etag?: string | undefined
  items?: Report[] | undefined
  kind?: string | undefined
  nextPageToken?: string | undefined
}
type Dimension = { kind?: string | undefined; name?: string | undefined }
type Metric = { kind?: string | undefined; name?: string | undefined }
type CrossDimensionReachReportCompatibleFields = {
  breakdown?: Dimension[] | undefined
  dimensionFilters?: Dimension[] | undefined
  kind?: string | undefined
  metrics?: Metric[] | undefined
  overlapMetrics?: Metric[] | undefined
}
type FloodlightReportCompatibleFields = {
  dimensionFilters?: Dimension[] | undefined
  dimensions?: Dimension[] | undefined
  kind?: string | undefined
  metrics?: Metric[] | undefined
}
type PathReportCompatibleFields = {
  channelGroupings?: Dimension[] | undefined
  dimensions?: Dimension[] | undefined
  kind?: string | undefined
  metrics?: Metric[] | undefined
  pathFilters?: Dimension[] | undefined
}
type PathToConversionReportCompatibleFields = {
  conversionDimensions?: Dimension[] | undefined
  customFloodlightVariables?: Dimension[] | undefined
  kind?: string | undefined
  metrics?: Metric[] | undefined
  perInteractionDimensions?: Dimension[] | undefined
}
type ReachReportCompatibleFields = {
  dimensionFilters?: Dimension[] | undefined
  dimensions?: Dimension[] | undefined
  kind?: string | undefined
  metrics?: Metric[] | undefined
  pivotedActivityMetrics?: Metric[] | undefined
  reachByFrequencyMetrics?: Metric[] | undefined
}
type ReportCompatibleFields = {
  dimensionFilters?: Dimension[] | undefined
  dimensions?: Dimension[] | undefined
  kind?: string | undefined
  metrics?: Metric[] | undefined
  pivotedActivityMetrics?: Metric[] | undefined
}
type CompatibleFields = {
  crossDimensionReachReportCompatibleFields?: CrossDimensionReachReportCompatibleFields | undefined
  floodlightReportCompatibleFields?: FloodlightReportCompatibleFields | undefined
  kind?: string | undefined
  pathAttributionReportCompatibleFields?: PathReportCompatibleFields | undefined
  pathReportCompatibleFields?: PathReportCompatibleFields | undefined
  pathToConversionReportCompatibleFields?: PathToConversionReportCompatibleFields | undefined
  reachReportCompatibleFields?: ReachReportCompatibleFields | undefined
  reportCompatibleFields?: ReportCompatibleFields | undefined
}
type SiteContact = {
  address?: string | undefined
  contactType?: 'SALES_PERSON' | 'TRAFFICKER' | undefined
  email?: string | undefined
  firstName?: string | undefined
  id?: string | undefined
  lastName?: string | undefined
  phone?: string | undefined
  title?: string | undefined
}
type SiteSettings = {
  activeViewOptOut?: boolean | undefined
  adBlockingOptOut?: boolean | undefined
  disableNewCookie?: boolean | undefined
  tagSetting?: TagSetting | undefined
  videoActiveViewOptOutTemplate?: boolean | undefined
  vpaidAdapterChoiceTemplate?: 'DEFAULT' | 'FLASH' | 'HTML5' | 'BOTH' | undefined
}
type SiteCompanionSetting = {
  companionsDisabled?: boolean | undefined
  enabledSizes?: Size[] | undefined
  imageOnly?: boolean | undefined
  kind?: string | undefined
}
type SiteSkippableSetting = {
  kind?: string | undefined
  progressOffset?: VideoOffset | undefined
  skipOffset?: VideoOffset | undefined
  skippable?: boolean | undefined
}
type SiteTranscodeSetting = {
  enabledVideoFormats?: number[] | undefined
  kind?: string | undefined
}
type SiteVideoSettings = {
  companionSettings?: SiteCompanionSetting | undefined
  kind?: string | undefined
  obaEnabled?: boolean | undefined
  obaSettings?: ObaIcon | undefined
  orientation?: 'ANY' | 'LANDSCAPE' | 'PORTRAIT' | undefined
  skippableSettings?: SiteSkippableSetting | undefined
  transcodeSettings?: SiteTranscodeSetting | undefined
}
type Site = {
  accountId?: string | undefined
  approved?: boolean | undefined
  directorySiteId?: string | undefined
  directorySiteIdDimensionValue?: DimensionValue | undefined
  id?: string | undefined
  idDimensionValue?: DimensionValue | undefined
  keyName?: string | undefined
  kind?: string | undefined
  name?: string | undefined
  siteContacts?: SiteContact[] | undefined
  siteSettings?: SiteSettings | undefined
  subaccountId?: string | undefined
  videoSettings?: SiteVideoSettings | undefined
}
type SitesListResponse = {
  kind?: string | undefined
  nextPageToken?: string | undefined
  sites?: Site[] | undefined
}
type SizesListResponse = { kind?: string | undefined; sizes?: Size[] | undefined }
type Subaccount = {
  accountId?: string | undefined
  availablePermissionIds?: string[] | undefined
  id?: string | undefined
  kind?: string | undefined
  name?: string | undefined
}
type SubaccountsListResponse = {
  kind?: string | undefined
  nextPageToken?: string | undefined
  subaccounts?: Subaccount[] | undefined
}
type TargetableRemarketingList = {
  accountId?: string | undefined
  active?: boolean | undefined
  advertiserId?: string | undefined
  advertiserIdDimensionValue?: DimensionValue | undefined
  description?: string | undefined
  id?: string | undefined
  kind?: string | undefined
  lifeSpan?: string | undefined
  listSize?: string | undefined
  listSource?:
    | 'REMARKETING_LIST_SOURCE_OTHER'
    | 'REMARKETING_LIST_SOURCE_ADX'
    | 'REMARKETING_LIST_SOURCE_DFP'
    | 'REMARKETING_LIST_SOURCE_XFP'
    | 'REMARKETING_LIST_SOURCE_DFA'
    | 'REMARKETING_LIST_SOURCE_GA'
    | 'REMARKETING_LIST_SOURCE_YOUTUBE'
    | 'REMARKETING_LIST_SOURCE_DBM'
    | 'REMARKETING_LIST_SOURCE_GPLUS'
    | 'REMARKETING_LIST_SOURCE_DMP'
    | 'REMARKETING_LIST_SOURCE_PLAY_STORE'
    | undefined
  name?: string | undefined
  subaccountId?: string | undefined
}
type TargetableRemarketingListsListResponse = {
  kind?: string | undefined
  nextPageToken?: string | undefined
  targetableRemarketingLists?: TargetableRemarketingList[] | undefined
}
type TargetingTemplate = {
  accountId?: string | undefined
  advertiserId?: string | undefined
  advertiserIdDimensionValue?: DimensionValue | undefined
  dayPartTargeting?: DayPartTargeting | undefined
  geoTargeting?: GeoTargeting | undefined
  id?: string | undefined
  keyValueTargetingExpression?: KeyValueTargetingExpression | undefined
  kind?: string | undefined
  languageTargeting?: LanguageTargeting | undefined
  listTargetingExpression?: ListTargetingExpression | undefined
  name?: string | undefined
  subaccountId?: string | undefined
  technologyTargeting?: TechnologyTargeting | undefined
}
type TargetingTemplatesListResponse = {
  kind?: string | undefined
  nextPageToken?: string | undefined
  targetingTemplates?: TargetingTemplate[] | undefined
}
type UserRolePermissionGroup = {
  id?: string | undefined
  kind?: string | undefined
  name?: string | undefined
}
type UserRolePermissionGroupsListResponse = {
  kind?: string | undefined
  userRolePermissionGroups?: UserRolePermissionGroup[] | undefined
}
type UserRolePermission = {
  availability?:
    | 'NOT_AVAILABLE_BY_DEFAULT'
    | 'ACCOUNT_BY_DEFAULT'
    | 'SUBACCOUNT_AND_ACCOUNT_BY_DEFAULT'
    | 'ACCOUNT_ALWAYS'
    | 'SUBACCOUNT_AND_ACCOUNT_ALWAYS'
    | 'USER_PROFILE_ONLY'
    | undefined
  id?: string | undefined
  kind?: string | undefined
  name?: string | undefined
  permissionGroupId?: string | undefined
}
type UserRolePermissionsListResponse = {
  kind?: string | undefined
  userRolePermissions?: UserRolePermission[] | undefined
}
type UserRole = {
  accountId?: string | undefined
  defaultUserRole?: boolean | undefined
  id?: string | undefined
  kind?: string | undefined
  name?: string | undefined
  parentUserRoleId?: string | undefined
  permissions?: UserRolePermission[] | undefined
  subaccountId?: string | undefined
}
type UserRolesListResponse = {
  kind?: string | undefined
  nextPageToken?: string | undefined
  userRoles?: UserRole[] | undefined
}
type VideoFormat = {
  fileType?: 'FLV' | 'THREEGPP' | 'MP4' | 'WEBM' | 'M3U8' | undefined
  id?: number | undefined
  kind?: string | undefined
  resolution?: Size | undefined
  targetBitRate?: number | undefined
}
type VideoFormatsListResponse = {
  kind?: string | undefined
  videoFormats?: VideoFormat[] | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/reports/:reportId/files/:fileId': {
      $get: {
        input: { param: { reportId: string; fileId: string } } & {
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
        output: File2
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/userprofiles': {
      $get: {
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
        }
        output: UserProfileList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/userprofiles/:profileId': {
      $get: {
        input: { param: { profileId: string } } & {
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
        output: UserProfile
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/userprofiles/:profileId/accountActiveAdSummaries/:summaryAccountId': {
      $get: {
        input: { param: { profileId: string; summaryAccountId: string } } & {
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
        output: AccountActiveAdSummary
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/userprofiles/:profileId/accountPermissionGroups': {
      $get: {
        input: { param: { profileId: string } } & {
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
        output: AccountPermissionGroupsListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/userprofiles/:profileId/accountPermissionGroups/:id': {
      $get: {
        input: { param: { profileId: string; id: string } } & {
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
        output: AccountPermissionGroup
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/userprofiles/:profileId/accountPermissions': {
      $get: {
        input: { param: { profileId: string } } & {
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
        output: AccountPermissionsListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/userprofiles/:profileId/accountPermissions/:id': {
      $get: {
        input: { param: { profileId: string; id: string } } & {
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
        output: AccountPermission
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/userprofiles/:profileId/accountUserProfiles': {
      $get: {
        input: { param: { profileId: string } } & {
          query: {
            active?: boolean | undefined
            ids?: string[] | undefined
            maxResults?: number | undefined
            pageToken?: string | undefined
            searchString?: string | undefined
            sortField?: 'ID' | 'NAME' | undefined
            sortOrder?: 'ASCENDING' | 'DESCENDING' | undefined
            subaccountId?: string | undefined
            userRoleId?: string | undefined
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
        output: AccountUserProfilesListResponse
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { profileId: string } } & {
          query: {
            id: string
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
        } & { json: AccountUserProfile }
        output: AccountUserProfile
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { profileId: string } } & {
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
        } & { json: AccountUserProfile }
        output: AccountUserProfile
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { profileId: string } } & {
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
        } & { json: AccountUserProfile }
        output: AccountUserProfile
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/userprofiles/:profileId/accountUserProfiles/:id': {
      $get: {
        input: { param: { profileId: string; id: string } } & {
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
        output: AccountUserProfile
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/userprofiles/:profileId/accounts': {
      $get: {
        input: { param: { profileId: string } } & {
          query: {
            active?: boolean | undefined
            ids?: string[] | undefined
            maxResults?: number | undefined
            pageToken?: string | undefined
            searchString?: string | undefined
            sortField?: 'ID' | 'NAME' | undefined
            sortOrder?: 'ASCENDING' | 'DESCENDING' | undefined
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
        output: AccountsListResponse
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { profileId: string } } & {
          query: {
            id: string
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
        } & { json: Account }
        output: Account
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { profileId: string } } & {
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
        } & { json: Account }
        output: Account
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/userprofiles/:profileId/accounts/:id': {
      $get: {
        input: { param: { profileId: string; id: string } } & {
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
        output: Account
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/userprofiles/:profileId/ads': {
      $get: {
        input: { param: { profileId: string } } & {
          query: {
            active?: boolean | undefined
            advertiserId?: string | undefined
            archived?: boolean | undefined
            audienceSegmentIds?: string[] | undefined
            campaignIds?: string[] | undefined
            compatibility?:
              | 'DISPLAY'
              | 'DISPLAY_INTERSTITIAL'
              | 'APP'
              | 'APP_INTERSTITIAL'
              | 'IN_STREAM_VIDEO'
              | 'IN_STREAM_AUDIO'
              | undefined
            creativeIds?: string[] | undefined
            creativeOptimizationConfigurationIds?: string[] | undefined
            dynamicClickTracker?: boolean | undefined
            ids?: string[] | undefined
            landingPageIds?: string[] | undefined
            maxResults?: number | undefined
            overriddenEventTagId?: string | undefined
            pageToken?: string | undefined
            placementIds?: string[] | undefined
            remarketingListIds?: string[] | undefined
            searchString?: string | undefined
            sizeIds?: string[] | undefined
            sortField?: 'ID' | 'NAME' | undefined
            sortOrder?: 'ASCENDING' | 'DESCENDING' | undefined
            sslCompliant?: boolean | undefined
            sslRequired?: boolean | undefined
            type?:
              | (
                  | 'AD_SERVING_STANDARD_AD'
                  | 'AD_SERVING_DEFAULT_AD'
                  | 'AD_SERVING_CLICK_TRACKER'
                  | 'AD_SERVING_TRACKING'
                  | 'AD_SERVING_BRAND_SAFE_AD'
                )[]
              | undefined
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
        output: AdsListResponse
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { profileId: string } } & {
          query: {
            id: string
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
        } & { json: Ad }
        output: Ad
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { profileId: string } } & {
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
        } & { json: Ad }
        output: Ad
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { profileId: string } } & {
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
        } & { json: Ad }
        output: Ad
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/userprofiles/:profileId/ads/:id': {
      $get: {
        input: { param: { profileId: string; id: string } } & {
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
        output: Ad
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/userprofiles/:profileId/advertiserGroups': {
      $get: {
        input: { param: { profileId: string } } & {
          query: {
            ids?: string[] | undefined
            maxResults?: number | undefined
            pageToken?: string | undefined
            searchString?: string | undefined
            sortField?: 'ID' | 'NAME' | undefined
            sortOrder?: 'ASCENDING' | 'DESCENDING' | undefined
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
        output: AdvertiserGroupsListResponse
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { profileId: string } } & {
          query: {
            id: string
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
        } & { json: AdvertiserGroup }
        output: AdvertiserGroup
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { profileId: string } } & {
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
        } & { json: AdvertiserGroup }
        output: AdvertiserGroup
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { profileId: string } } & {
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
        } & { json: AdvertiserGroup }
        output: AdvertiserGroup
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/userprofiles/:profileId/advertiserGroups/:id': {
      $delete: {
        input: { param: { profileId: string; id: string } } & {
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
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { profileId: string; id: string } } & {
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
        output: AdvertiserGroup
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/userprofiles/:profileId/advertiserLandingPages': {
      $get: {
        input: { param: { profileId: string } } & {
          query: {
            advertiserIds?: string[] | undefined
            archived?: boolean | undefined
            campaignIds?: string[] | undefined
            ids?: string[] | undefined
            maxResults?: number | undefined
            pageToken?: string | undefined
            searchString?: string | undefined
            sortField?: 'ID' | 'NAME' | undefined
            sortOrder?: 'ASCENDING' | 'DESCENDING' | undefined
            subaccountId?: string | undefined
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
        output: AdvertiserLandingPagesListResponse
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { profileId: string } } & {
          query: {
            id: string
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
        } & { json: LandingPage }
        output: LandingPage
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { profileId: string } } & {
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
        } & { json: LandingPage }
        output: LandingPage
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { profileId: string } } & {
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
        } & { json: LandingPage }
        output: LandingPage
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/userprofiles/:profileId/advertiserLandingPages/:id': {
      $get: {
        input: { param: { profileId: string; id: string } } & {
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
        output: LandingPage
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/userprofiles/:profileId/advertisers': {
      $get: {
        input: { param: { profileId: string } } & {
          query: {
            advertiserGroupIds?: string[] | undefined
            floodlightConfigurationIds?: string[] | undefined
            ids?: string[] | undefined
            includeAdvertisersWithoutGroupsOnly?: boolean | undefined
            maxResults?: number | undefined
            onlyParent?: boolean | undefined
            pageToken?: string | undefined
            searchString?: string | undefined
            sortField?: 'ID' | 'NAME' | undefined
            sortOrder?: 'ASCENDING' | 'DESCENDING' | undefined
            status?: 'APPROVED' | 'ON_HOLD' | undefined
            subaccountId?: string | undefined
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
        output: AdvertisersListResponse
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { profileId: string } } & {
          query: {
            id: string
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
      $post: {
        input: { param: { profileId: string } } & {
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
      $put: {
        input: { param: { profileId: string } } & {
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
    '/userprofiles/:profileId/advertisers/:id': {
      $get: {
        input: { param: { profileId: string; id: string } } & {
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
    }
  } & {
    '/userprofiles/:profileId/browsers': {
      $get: {
        input: { param: { profileId: string } } & {
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
        output: BrowsersListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/userprofiles/:profileId/campaigns': {
      $get: {
        input: { param: { profileId: string } } & {
          query: {
            advertiserGroupIds?: string[] | undefined
            advertiserIds?: string[] | undefined
            archived?: boolean | undefined
            atLeastOneOptimizationActivity?: boolean | undefined
            excludedIds?: string[] | undefined
            ids?: string[] | undefined
            maxResults?: number | undefined
            overriddenEventTagId?: string | undefined
            pageToken?: string | undefined
            searchString?: string | undefined
            sortField?: 'ID' | 'NAME' | undefined
            sortOrder?: 'ASCENDING' | 'DESCENDING' | undefined
            subaccountId?: string | undefined
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
        output: CampaignsListResponse
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { profileId: string } } & {
          query: {
            id: string
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
      $post: {
        input: { param: { profileId: string } } & {
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
      $put: {
        input: { param: { profileId: string } } & {
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
    '/userprofiles/:profileId/campaigns/:campaignId/campaignCreativeAssociations': {
      $get: {
        input: { param: { profileId: string; campaignId: string } } & {
          query: {
            maxResults?: number | undefined
            pageToken?: string | undefined
            sortOrder?: 'ASCENDING' | 'DESCENDING' | undefined
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
        output: CampaignCreativeAssociationsListResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { profileId: string; campaignId: string } } & {
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
        } & { json: CampaignCreativeAssociation }
        output: CampaignCreativeAssociation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/userprofiles/:profileId/campaigns/:id': {
      $get: {
        input: { param: { profileId: string; id: string } } & {
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
    }
  } & {
    '/userprofiles/:profileId/changeLogs': {
      $get: {
        input: { param: { profileId: string } } & {
          query: {
            action?:
              | 'ACTION_CREATE'
              | 'ACTION_UPDATE'
              | 'ACTION_DELETE'
              | 'ACTION_ENABLE'
              | 'ACTION_DISABLE'
              | 'ACTION_ADD'
              | 'ACTION_REMOVE'
              | 'ACTION_MARK_AS_DEFAULT'
              | 'ACTION_ASSOCIATE'
              | 'ACTION_ASSIGN'
              | 'ACTION_UNASSIGN'
              | 'ACTION_SEND'
              | 'ACTION_LINK'
              | 'ACTION_UNLINK'
              | 'ACTION_PUSH'
              | 'ACTION_EMAIL_TAGS'
              | 'ACTION_SHARE'
              | undefined
            ids?: string[] | undefined
            maxChangeTime?: string | undefined
            maxResults?: number | undefined
            minChangeTime?: string | undefined
            objectIds?: string[] | undefined
            objectType?:
              | 'OBJECT_ADVERTISER'
              | 'OBJECT_FLOODLIGHT_CONFIGURATION'
              | 'OBJECT_AD'
              | 'OBJECT_FLOODLIGHT_ACTVITY'
              | 'OBJECT_CAMPAIGN'
              | 'OBJECT_FLOODLIGHT_ACTIVITY_GROUP'
              | 'OBJECT_CREATIVE'
              | 'OBJECT_PLACEMENT'
              | 'OBJECT_DFA_SITE'
              | 'OBJECT_USER_ROLE'
              | 'OBJECT_USER_PROFILE'
              | 'OBJECT_ADVERTISER_GROUP'
              | 'OBJECT_ACCOUNT'
              | 'OBJECT_SUBACCOUNT'
              | 'OBJECT_RICHMEDIA_CREATIVE'
              | 'OBJECT_INSTREAM_CREATIVE'
              | 'OBJECT_MEDIA_ORDER'
              | 'OBJECT_CONTENT_CATEGORY'
              | 'OBJECT_PLACEMENT_STRATEGY'
              | 'OBJECT_SD_SITE'
              | 'OBJECT_SIZE'
              | 'OBJECT_CREATIVE_GROUP'
              | 'OBJECT_CREATIVE_ASSET'
              | 'OBJECT_USER_PROFILE_FILTER'
              | 'OBJECT_LANDING_PAGE'
              | 'OBJECT_CREATIVE_FIELD'
              | 'OBJECT_REMARKETING_LIST'
              | 'OBJECT_PROVIDED_LIST_CLIENT'
              | 'OBJECT_EVENT_TAG'
              | 'OBJECT_CREATIVE_BUNDLE'
              | 'OBJECT_BILLING_ACCOUNT_GROUP'
              | 'OBJECT_BILLING_FEATURE'
              | 'OBJECT_RATE_CARD'
              | 'OBJECT_ACCOUNT_BILLING_FEATURE'
              | 'OBJECT_BILLING_MINIMUM_FEE'
              | 'OBJECT_BILLING_PROFILE'
              | 'OBJECT_PLAYSTORE_LINK'
              | 'OBJECT_TARGETING_TEMPLATE'
              | 'OBJECT_SEARCH_LIFT_STUDY'
              | 'OBJECT_FLOODLIGHT_DV360_LINK'
              | 'OBJECT_ADVERTISER_CUSTOMER_LINK'
              | undefined
            pageToken?: string | undefined
            searchString?: string | undefined
            userProfileIds?: string[] | undefined
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
        output: ChangeLogsListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/userprofiles/:profileId/changeLogs/:id': {
      $get: {
        input: { param: { profileId: string; id: string } } & {
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
        output: ChangeLog
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/userprofiles/:profileId/cities': {
      $get: {
        input: { param: { profileId: string } } & {
          query: {
            countryDartIds?: string[] | undefined
            dartIds?: string[] | undefined
            namePrefix?: string | undefined
            regionDartIds?: string[] | undefined
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
        output: CitiesListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/userprofiles/:profileId/connectionTypes': {
      $get: {
        input: { param: { profileId: string } } & {
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
        output: ConnectionTypesListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/userprofiles/:profileId/connectionTypes/:id': {
      $get: {
        input: { param: { profileId: string; id: string } } & {
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
        output: ConnectionType
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/userprofiles/:profileId/contentCategories': {
      $get: {
        input: { param: { profileId: string } } & {
          query: {
            ids?: string[] | undefined
            maxResults?: number | undefined
            pageToken?: string | undefined
            searchString?: string | undefined
            sortField?: 'ID' | 'NAME' | undefined
            sortOrder?: 'ASCENDING' | 'DESCENDING' | undefined
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
        output: ContentCategoriesListResponse
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { profileId: string } } & {
          query: {
            id: string
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
        } & { json: ContentCategory }
        output: ContentCategory
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { profileId: string } } & {
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
        } & { json: ContentCategory }
        output: ContentCategory
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { profileId: string } } & {
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
        } & { json: ContentCategory }
        output: ContentCategory
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/userprofiles/:profileId/contentCategories/:id': {
      $delete: {
        input: { param: { profileId: string; id: string } } & {
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
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { profileId: string; id: string } } & {
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
        output: ContentCategory
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/userprofiles/:profileId/conversions/batchinsert': {
      $post: {
        input: { param: { profileId: string } } & {
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
        } & { json: ConversionsBatchInsertRequest }
        output: ConversionsBatchInsertResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/userprofiles/:profileId/conversions/batchupdate': {
      $post: {
        input: { param: { profileId: string } } & {
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
        } & { json: ConversionsBatchUpdateRequest }
        output: ConversionsBatchUpdateResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/userprofiles/:profileId/countries': {
      $get: {
        input: { param: { profileId: string } } & {
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
        output: CountriesListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/userprofiles/:profileId/countries/:dartId': {
      $get: {
        input: { param: { profileId: string; dartId: string } } & {
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
        output: Country
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/userprofiles/:profileId/creativeAssets/:advertiserId/creativeAssets': {
      $post: {
        input: { param: { profileId: string; advertiserId: string } } & {
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
        } & { json: CreativeAssetMetadata }
        output: CreativeAssetMetadata
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/userprofiles/:profileId/creativeFields': {
      $get: {
        input: { param: { profileId: string } } & {
          query: {
            advertiserIds?: string[] | undefined
            ids?: string[] | undefined
            maxResults?: number | undefined
            pageToken?: string | undefined
            searchString?: string | undefined
            sortField?: 'ID' | 'NAME' | undefined
            sortOrder?: 'ASCENDING' | 'DESCENDING' | undefined
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
        output: CreativeFieldsListResponse
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { profileId: string } } & {
          query: {
            id: string
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
        } & { json: CreativeField }
        output: CreativeField
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { profileId: string } } & {
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
        } & { json: CreativeField }
        output: CreativeField
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { profileId: string } } & {
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
        } & { json: CreativeField }
        output: CreativeField
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/userprofiles/:profileId/creativeFields/:creativeFieldId/creativeFieldValues': {
      $get: {
        input: { param: { profileId: string; creativeFieldId: string } } & {
          query: {
            ids?: string[] | undefined
            maxResults?: number | undefined
            pageToken?: string | undefined
            searchString?: string | undefined
            sortField?: 'ID' | 'VALUE' | undefined
            sortOrder?: 'ASCENDING' | 'DESCENDING' | undefined
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
        output: CreativeFieldValuesListResponse
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { profileId: string; creativeFieldId: string } } & {
          query: {
            id: string
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
        } & { json: CreativeFieldValue }
        output: CreativeFieldValue
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { profileId: string; creativeFieldId: string } } & {
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
        } & { json: CreativeFieldValue }
        output: CreativeFieldValue
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { profileId: string; creativeFieldId: string } } & {
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
        } & { json: CreativeFieldValue }
        output: CreativeFieldValue
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/userprofiles/:profileId/creativeFields/:creativeFieldId/creativeFieldValues/:id': {
      $delete: {
        input: { param: { profileId: string; creativeFieldId: string; id: string } } & {
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
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { profileId: string; creativeFieldId: string; id: string } } & {
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
        output: CreativeFieldValue
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/userprofiles/:profileId/creativeFields/:id': {
      $delete: {
        input: { param: { profileId: string; id: string } } & {
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
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { profileId: string; id: string } } & {
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
        output: CreativeField
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/userprofiles/:profileId/creativeGroups': {
      $get: {
        input: { param: { profileId: string } } & {
          query: {
            advertiserIds?: string[] | undefined
            groupNumber?: number | undefined
            ids?: string[] | undefined
            maxResults?: number | undefined
            pageToken?: string | undefined
            searchString?: string | undefined
            sortField?: 'ID' | 'NAME' | undefined
            sortOrder?: 'ASCENDING' | 'DESCENDING' | undefined
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
        output: CreativeGroupsListResponse
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { profileId: string } } & {
          query: {
            id: string
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
        } & { json: CreativeGroup }
        output: CreativeGroup
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { profileId: string } } & {
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
        } & { json: CreativeGroup }
        output: CreativeGroup
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { profileId: string } } & {
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
        } & { json: CreativeGroup }
        output: CreativeGroup
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/userprofiles/:profileId/creativeGroups/:id': {
      $get: {
        input: { param: { profileId: string; id: string } } & {
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
        output: CreativeGroup
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/userprofiles/:profileId/creatives': {
      $get: {
        input: { param: { profileId: string } } & {
          query: {
            active?: boolean | undefined
            advertiserId?: string | undefined
            archived?: boolean | undefined
            campaignId?: string | undefined
            companionCreativeIds?: string[] | undefined
            creativeFieldIds?: string[] | undefined
            ids?: string[] | undefined
            maxResults?: number | undefined
            pageToken?: string | undefined
            renderingIds?: string[] | undefined
            searchString?: string | undefined
            sizeIds?: string[] | undefined
            sortField?: 'ID' | 'NAME' | undefined
            sortOrder?: 'ASCENDING' | 'DESCENDING' | undefined
            studioCreativeId?: string | undefined
            types?:
              | (
                  | 'IMAGE'
                  | 'DISPLAY_REDIRECT'
                  | 'CUSTOM_DISPLAY'
                  | 'INTERNAL_REDIRECT'
                  | 'CUSTOM_DISPLAY_INTERSTITIAL'
                  | 'INTERSTITIAL_INTERNAL_REDIRECT'
                  | 'TRACKING_TEXT'
                  | 'RICH_MEDIA_DISPLAY_BANNER'
                  | 'RICH_MEDIA_INPAGE_FLOATING'
                  | 'RICH_MEDIA_IM_EXPAND'
                  | 'RICH_MEDIA_DISPLAY_EXPANDING'
                  | 'RICH_MEDIA_DISPLAY_INTERSTITIAL'
                  | 'RICH_MEDIA_DISPLAY_MULTI_FLOATING_INTERSTITIAL'
                  | 'RICH_MEDIA_MOBILE_IN_APP'
                  | 'FLASH_INPAGE'
                  | 'INSTREAM_VIDEO'
                  | 'VPAID_LINEAR_VIDEO'
                  | 'VPAID_NON_LINEAR_VIDEO'
                  | 'INSTREAM_VIDEO_REDIRECT'
                  | 'RICH_MEDIA_PEEL_DOWN'
                  | 'HTML5_BANNER'
                  | 'DISPLAY'
                  | 'DISPLAY_IMAGE_GALLERY'
                  | 'BRAND_SAFE_DEFAULT_INSTREAM_VIDEO'
                  | 'INSTREAM_AUDIO'
                )[]
              | undefined
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
        output: CreativesListResponse
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { profileId: string } } & {
          query: {
            id: string
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
      $post: {
        input: { param: { profileId: string } } & {
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
      $put: {
        input: { param: { profileId: string } } & {
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
    '/userprofiles/:profileId/creatives/:id': {
      $get: {
        input: { param: { profileId: string; id: string } } & {
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
    }
  } & {
    '/userprofiles/:profileId/customEvents/batchinsert': {
      $post: {
        input: { param: { profileId: string } } & {
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
        } & { json: CustomEventsBatchInsertRequest }
        output: CustomEventsBatchInsertResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/userprofiles/:profileId/dimensionvalues/query': {
      $post: {
        input: { param: { profileId: string } } & {
          query: {
            maxResults?: number | undefined
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
        } & { json: DimensionValueRequest }
        output: DimensionValueList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/userprofiles/:profileId/directorySites': {
      $get: {
        input: { param: { profileId: string } } & {
          query: {
            acceptsInStreamVideoPlacements?: boolean | undefined
            acceptsInterstitialPlacements?: boolean | undefined
            acceptsPublisherPaidPlacements?: boolean | undefined
            active?: boolean | undefined
            dfpNetworkCode?: string | undefined
            ids?: string[] | undefined
            maxResults?: number | undefined
            pageToken?: string | undefined
            searchString?: string | undefined
            sortField?: 'ID' | 'NAME' | undefined
            sortOrder?: 'ASCENDING' | 'DESCENDING' | undefined
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
        output: DirectorySitesListResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { profileId: string } } & {
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
        } & { json: DirectorySite }
        output: DirectorySite
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/userprofiles/:profileId/directorySites/:id': {
      $get: {
        input: { param: { profileId: string; id: string } } & {
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
        output: DirectorySite
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/userprofiles/:profileId/dynamicTargetingKeys': {
      $get: {
        input: { param: { profileId: string } } & {
          query: {
            advertiserId?: string | undefined
            names?: string[] | undefined
            objectId?: string | undefined
            objectType?:
              | 'OBJECT_ADVERTISER'
              | 'OBJECT_AD'
              | 'OBJECT_CREATIVE'
              | 'OBJECT_PLACEMENT'
              | undefined
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
        output: DynamicTargetingKeysListResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { profileId: string } } & {
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
        } & { json: DynamicTargetingKey }
        output: DynamicTargetingKey
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/userprofiles/:profileId/dynamicTargetingKeys/:objectId': {
      $delete: {
        input: { param: { profileId: string; objectId: string } } & {
          query: {
            name: string
            objectType: 'OBJECT_ADVERTISER' | 'OBJECT_AD' | 'OBJECT_CREATIVE' | 'OBJECT_PLACEMENT'
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
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/userprofiles/:profileId/eventTags': {
      $get: {
        input: { param: { profileId: string } } & {
          query: {
            adId?: string | undefined
            advertiserId?: string | undefined
            campaignId?: string | undefined
            definitionsOnly?: boolean | undefined
            enabled?: boolean | undefined
            eventTagTypes?:
              | (
                  | 'IMPRESSION_IMAGE_EVENT_TAG'
                  | 'IMPRESSION_JAVASCRIPT_EVENT_TAG'
                  | 'CLICK_THROUGH_EVENT_TAG'
                )[]
              | undefined
            ids?: string[] | undefined
            searchString?: string | undefined
            sortField?: 'ID' | 'NAME' | undefined
            sortOrder?: 'ASCENDING' | 'DESCENDING' | undefined
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
        output: EventTagsListResponse
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { profileId: string } } & {
          query: {
            id: string
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
        } & { json: EventTag }
        output: EventTag
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { profileId: string } } & {
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
        } & { json: EventTag }
        output: EventTag
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { profileId: string } } & {
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
        } & { json: EventTag }
        output: EventTag
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/userprofiles/:profileId/eventTags/:id': {
      $delete: {
        input: { param: { profileId: string; id: string } } & {
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
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { profileId: string; id: string } } & {
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
        output: EventTag
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/userprofiles/:profileId/files': {
      $get: {
        input: { param: { profileId: string } } & {
          query: {
            maxResults?: number | undefined
            pageToken?: string | undefined
            scope?: 'ALL' | 'MINE' | 'SHARED_WITH_ME' | undefined
            sortField?: 'ID' | 'LAST_MODIFIED_TIME' | undefined
            sortOrder?: 'ASCENDING' | 'DESCENDING' | undefined
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
        output: FileList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/userprofiles/:profileId/floodlightActivities': {
      $get: {
        input: { param: { profileId: string } } & {
          query: {
            advertiserId?: string | undefined
            floodlightActivityGroupIds?: string[] | undefined
            floodlightActivityGroupName?: string | undefined
            floodlightActivityGroupTagString?: string | undefined
            floodlightActivityGroupType?: 'COUNTER' | 'SALE' | undefined
            floodlightConfigurationId?: string | undefined
            ids?: string[] | undefined
            maxResults?: number | undefined
            pageToken?: string | undefined
            searchString?: string | undefined
            sortField?: 'ID' | 'NAME' | undefined
            sortOrder?: 'ASCENDING' | 'DESCENDING' | undefined
            tagString?: string | undefined
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
        output: FloodlightActivitiesListResponse
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { profileId: string } } & {
          query: {
            id: string
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
        } & { json: FloodlightActivity }
        output: FloodlightActivity
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { profileId: string } } & {
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
        } & { json: FloodlightActivity }
        output: FloodlightActivity
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { profileId: string } } & {
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
        } & { json: FloodlightActivity }
        output: FloodlightActivity
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/userprofiles/:profileId/floodlightActivities/generatetag': {
      $post: {
        input: { param: { profileId: string } } & {
          query: {
            floodlightActivityId?: string | undefined
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
        output: FloodlightActivitiesGenerateTagResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/userprofiles/:profileId/floodlightActivities/:id': {
      $delete: {
        input: { param: { profileId: string; id: string } } & {
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
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { profileId: string; id: string } } & {
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
        output: FloodlightActivity
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/userprofiles/:profileId/floodlightActivityGroups': {
      $get: {
        input: { param: { profileId: string } } & {
          query: {
            advertiserId?: string | undefined
            floodlightConfigurationId?: string | undefined
            ids?: string[] | undefined
            maxResults?: number | undefined
            pageToken?: string | undefined
            searchString?: string | undefined
            sortField?: 'ID' | 'NAME' | undefined
            sortOrder?: 'ASCENDING' | 'DESCENDING' | undefined
            type?: 'COUNTER' | 'SALE' | undefined
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
        output: FloodlightActivityGroupsListResponse
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { profileId: string } } & {
          query: {
            id: string
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
        } & { json: FloodlightActivityGroup }
        output: FloodlightActivityGroup
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { profileId: string } } & {
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
        } & { json: FloodlightActivityGroup }
        output: FloodlightActivityGroup
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { profileId: string } } & {
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
        } & { json: FloodlightActivityGroup }
        output: FloodlightActivityGroup
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/userprofiles/:profileId/floodlightActivityGroups/:id': {
      $get: {
        input: { param: { profileId: string; id: string } } & {
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
        output: FloodlightActivityGroup
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/userprofiles/:profileId/floodlightConfigurations': {
      $get: {
        input: { param: { profileId: string } } & {
          query: {
            ids?: string[] | undefined
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
        output: FloodlightConfigurationsListResponse
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { profileId: string } } & {
          query: {
            id: string
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
        } & { json: FloodlightConfiguration }
        output: FloodlightConfiguration
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { profileId: string } } & {
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
        } & { json: FloodlightConfiguration }
        output: FloodlightConfiguration
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/userprofiles/:profileId/floodlightConfigurations/:id': {
      $get: {
        input: { param: { profileId: string; id: string } } & {
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
        output: FloodlightConfiguration
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/userprofiles/:profileId/languages': {
      $get: {
        input: { param: { profileId: string } } & {
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
        output: LanguagesListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/userprofiles/:profileId/metros': {
      $get: {
        input: { param: { profileId: string } } & {
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
        output: MetrosListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/userprofiles/:profileId/mobileApps': {
      $get: {
        input: { param: { profileId: string } } & {
          query: {
            directories?:
              | (
                  | 'UNKNOWN'
                  | 'APPLE_APP_STORE'
                  | 'GOOGLE_PLAY_STORE'
                  | 'ROKU_APP_STORE'
                  | 'AMAZON_FIRETV_APP_STORE'
                  | 'PLAYSTATION_APP_STORE'
                  | 'APPLE_TV_APP_STORE'
                  | 'XBOX_APP_STORE'
                  | 'SAMSUNG_TV_APP_STORE'
                  | 'ANDROID_TV_APP_STORE'
                  | 'GENERIC_CTV_APP_STORE'
                )[]
              | undefined
            ids?: string[] | undefined
            maxResults?: number | undefined
            pageToken?: string | undefined
            searchString?: string | undefined
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
        output: MobileAppsListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/userprofiles/:profileId/mobileApps/:id': {
      $get: {
        input: { param: { profileId: string; id: string } } & {
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
        output: MobileApp
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/userprofiles/:profileId/mobileCarriers': {
      $get: {
        input: { param: { profileId: string } } & {
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
        output: MobileCarriersListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/userprofiles/:profileId/mobileCarriers/:id': {
      $get: {
        input: { param: { profileId: string; id: string } } & {
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
        output: MobileCarrier
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/userprofiles/:profileId/operatingSystemVersions': {
      $get: {
        input: { param: { profileId: string } } & {
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
        output: OperatingSystemVersionsListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/userprofiles/:profileId/operatingSystemVersions/:id': {
      $get: {
        input: { param: { profileId: string; id: string } } & {
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
        output: OperatingSystemVersion
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/userprofiles/:profileId/operatingSystems': {
      $get: {
        input: { param: { profileId: string } } & {
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
        output: OperatingSystemsListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/userprofiles/:profileId/operatingSystems/:dartId': {
      $get: {
        input: { param: { profileId: string; dartId: string } } & {
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
        output: OperatingSystem
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/userprofiles/:profileId/placementGroups': {
      $get: {
        input: { param: { profileId: string } } & {
          query: {
            advertiserIds?: string[] | undefined
            archived?: boolean | undefined
            campaignIds?: string[] | undefined
            contentCategoryIds?: string[] | undefined
            directorySiteIds?: string[] | undefined
            ids?: string[] | undefined
            maxEndDate?: string | undefined
            maxResults?: number | undefined
            maxStartDate?: string | undefined
            minEndDate?: string | undefined
            minStartDate?: string | undefined
            pageToken?: string | undefined
            placementGroupType?: 'PLACEMENT_PACKAGE' | 'PLACEMENT_ROADBLOCK' | undefined
            placementStrategyIds?: string[] | undefined
            pricingTypes?:
              | (
                  | 'PRICING_TYPE_CPM'
                  | 'PRICING_TYPE_CPC'
                  | 'PRICING_TYPE_CPA'
                  | 'PRICING_TYPE_FLAT_RATE_IMPRESSIONS'
                  | 'PRICING_TYPE_FLAT_RATE_CLICKS'
                  | 'PRICING_TYPE_CPM_ACTIVEVIEW'
                )[]
              | undefined
            searchString?: string | undefined
            siteIds?: string[] | undefined
            sortField?: 'ID' | 'NAME' | undefined
            sortOrder?: 'ASCENDING' | 'DESCENDING' | undefined
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
        output: PlacementGroupsListResponse
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { profileId: string } } & {
          query: {
            id: string
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
        } & { json: PlacementGroup }
        output: PlacementGroup
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { profileId: string } } & {
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
        } & { json: PlacementGroup }
        output: PlacementGroup
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { profileId: string } } & {
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
        } & { json: PlacementGroup }
        output: PlacementGroup
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/userprofiles/:profileId/placementGroups/:id': {
      $get: {
        input: { param: { profileId: string; id: string } } & {
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
        output: PlacementGroup
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/userprofiles/:profileId/placementStrategies': {
      $get: {
        input: { param: { profileId: string } } & {
          query: {
            ids?: string[] | undefined
            maxResults?: number | undefined
            pageToken?: string | undefined
            searchString?: string | undefined
            sortField?: 'ID' | 'NAME' | undefined
            sortOrder?: 'ASCENDING' | 'DESCENDING' | undefined
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
        output: PlacementStrategiesListResponse
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { profileId: string } } & {
          query: {
            id: string
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
        } & { json: PlacementStrategy }
        output: PlacementStrategy
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { profileId: string } } & {
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
        } & { json: PlacementStrategy }
        output: PlacementStrategy
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { profileId: string } } & {
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
        } & { json: PlacementStrategy }
        output: PlacementStrategy
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/userprofiles/:profileId/placementStrategies/:id': {
      $delete: {
        input: { param: { profileId: string; id: string } } & {
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
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { profileId: string; id: string } } & {
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
        output: PlacementStrategy
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/userprofiles/:profileId/placements': {
      $get: {
        input: { param: { profileId: string } } & {
          query: {
            advertiserIds?: string[] | undefined
            archived?: boolean | undefined
            campaignIds?: string[] | undefined
            compatibilities?:
              | (
                  | 'DISPLAY'
                  | 'DISPLAY_INTERSTITIAL'
                  | 'APP'
                  | 'APP_INTERSTITIAL'
                  | 'IN_STREAM_VIDEO'
                  | 'IN_STREAM_AUDIO'
                )[]
              | undefined
            contentCategoryIds?: string[] | undefined
            directorySiteIds?: string[] | undefined
            groupIds?: string[] | undefined
            ids?: string[] | undefined
            maxEndDate?: string | undefined
            maxResults?: number | undefined
            maxStartDate?: string | undefined
            minEndDate?: string | undefined
            minStartDate?: string | undefined
            pageToken?: string | undefined
            paymentSource?: 'PLACEMENT_AGENCY_PAID' | 'PLACEMENT_PUBLISHER_PAID' | undefined
            placementStrategyIds?: string[] | undefined
            pricingTypes?:
              | (
                  | 'PRICING_TYPE_CPM'
                  | 'PRICING_TYPE_CPC'
                  | 'PRICING_TYPE_CPA'
                  | 'PRICING_TYPE_FLAT_RATE_IMPRESSIONS'
                  | 'PRICING_TYPE_FLAT_RATE_CLICKS'
                  | 'PRICING_TYPE_CPM_ACTIVEVIEW'
                )[]
              | undefined
            searchString?: string | undefined
            siteIds?: string[] | undefined
            sizeIds?: string[] | undefined
            sortField?: 'ID' | 'NAME' | undefined
            sortOrder?: 'ASCENDING' | 'DESCENDING' | undefined
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
        output: PlacementsListResponse
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { profileId: string } } & {
          query: {
            id: string
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
        } & { json: Placement }
        output: Placement
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { profileId: string } } & {
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
        } & { json: Placement }
        output: Placement
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { profileId: string } } & {
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
        } & { json: Placement }
        output: Placement
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/userprofiles/:profileId/placements/generatetags': {
      $post: {
        input: { param: { profileId: string } } & {
          query: {
            campaignId?: string | undefined
            placementIds?: string[] | undefined
            tagFormats?:
              | (
                  | 'PLACEMENT_TAG_STANDARD'
                  | 'PLACEMENT_TAG_IFRAME_JAVASCRIPT'
                  | 'PLACEMENT_TAG_IFRAME_ILAYER'
                  | 'PLACEMENT_TAG_INTERNAL_REDIRECT'
                  | 'PLACEMENT_TAG_JAVASCRIPT'
                  | 'PLACEMENT_TAG_INTERSTITIAL_IFRAME_JAVASCRIPT'
                  | 'PLACEMENT_TAG_INTERSTITIAL_INTERNAL_REDIRECT'
                  | 'PLACEMENT_TAG_INTERSTITIAL_JAVASCRIPT'
                  | 'PLACEMENT_TAG_CLICK_COMMANDS'
                  | 'PLACEMENT_TAG_INSTREAM_VIDEO_PREFETCH'
                  | 'PLACEMENT_TAG_TRACKING'
                  | 'PLACEMENT_TAG_TRACKING_IFRAME'
                  | 'PLACEMENT_TAG_TRACKING_JAVASCRIPT'
                  | 'PLACEMENT_TAG_INSTREAM_VIDEO_PREFETCH_VAST_3'
                  | 'PLACEMENT_TAG_IFRAME_JAVASCRIPT_LEGACY'
                  | 'PLACEMENT_TAG_JAVASCRIPT_LEGACY'
                  | 'PLACEMENT_TAG_INTERSTITIAL_IFRAME_JAVASCRIPT_LEGACY'
                  | 'PLACEMENT_TAG_INTERSTITIAL_JAVASCRIPT_LEGACY'
                  | 'PLACEMENT_TAG_INSTREAM_VIDEO_PREFETCH_VAST_4'
                  | 'PLACEMENT_TAG_TRACKING_THIRD_PARTY_MEASUREMENT'
                )[]
              | undefined
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
        output: PlacementsGenerateTagsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/userprofiles/:profileId/placements/:id': {
      $get: {
        input: { param: { profileId: string; id: string } } & {
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
        output: Placement
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/userprofiles/:profileId/platformTypes': {
      $get: {
        input: { param: { profileId: string } } & {
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
        output: PlatformTypesListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/userprofiles/:profileId/platformTypes/:id': {
      $get: {
        input: { param: { profileId: string; id: string } } & {
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
        output: PlatformType
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/userprofiles/:profileId/postalCodes': {
      $get: {
        input: { param: { profileId: string } } & {
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
        output: PostalCodesListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/userprofiles/:profileId/postalCodes/:code': {
      $get: {
        input: { param: { profileId: string; code: string } } & {
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
        output: PostalCode
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/userprofiles/:profileId/projects': {
      $get: {
        input: { param: { profileId: string } } & {
          query: {
            advertiserIds?: string[] | undefined
            ids?: string[] | undefined
            maxResults?: number | undefined
            pageToken?: string | undefined
            searchString?: string | undefined
            sortField?: 'ID' | 'NAME' | undefined
            sortOrder?: 'ASCENDING' | 'DESCENDING' | undefined
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
        output: ProjectsListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/userprofiles/:profileId/projects/:id': {
      $get: {
        input: { param: { profileId: string; id: string } } & {
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
        output: Project
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/userprofiles/:profileId/projects/:projectId/inventoryItems': {
      $get: {
        input: { param: { profileId: string; projectId: string } } & {
          query: {
            ids?: string[] | undefined
            inPlan?: boolean | undefined
            maxResults?: number | undefined
            orderId?: string[] | undefined
            pageToken?: string | undefined
            siteId?: string[] | undefined
            sortField?: 'ID' | 'NAME' | undefined
            sortOrder?: 'ASCENDING' | 'DESCENDING' | undefined
            type?: 'PLANNING_PLACEMENT_TYPE_REGULAR' | 'PLANNING_PLACEMENT_TYPE_CREDIT' | undefined
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
        output: InventoryItemsListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/userprofiles/:profileId/projects/:projectId/inventoryItems/:id': {
      $get: {
        input: { param: { profileId: string; projectId: string; id: string } } & {
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
        output: InventoryItem
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/userprofiles/:profileId/projects/:projectId/orderDocuments': {
      $get: {
        input: { param: { profileId: string; projectId: string } } & {
          query: {
            approved?: boolean | undefined
            ids?: string[] | undefined
            maxResults?: number | undefined
            orderId?: string[] | undefined
            pageToken?: string | undefined
            searchString?: string | undefined
            siteId?: string[] | undefined
            sortField?: 'ID' | 'NAME' | undefined
            sortOrder?: 'ASCENDING' | 'DESCENDING' | undefined
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
        output: OrderDocumentsListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/userprofiles/:profileId/projects/:projectId/orderDocuments/:id': {
      $get: {
        input: { param: { profileId: string; projectId: string; id: string } } & {
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
        output: OrderDocument
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/userprofiles/:profileId/projects/:projectId/orders': {
      $get: {
        input: { param: { profileId: string; projectId: string } } & {
          query: {
            ids?: string[] | undefined
            maxResults?: number | undefined
            pageToken?: string | undefined
            searchString?: string | undefined
            siteId?: string[] | undefined
            sortField?: 'ID' | 'NAME' | undefined
            sortOrder?: 'ASCENDING' | 'DESCENDING' | undefined
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
        output: OrdersListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/userprofiles/:profileId/projects/:projectId/orders/:id': {
      $get: {
        input: { param: { profileId: string; projectId: string; id: string } } & {
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
        output: Order
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/userprofiles/:profileId/regions': {
      $get: {
        input: { param: { profileId: string } } & {
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
        output: RegionsListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/userprofiles/:profileId/remarketingListShares': {
      $patch: {
        input: { param: { profileId: string } } & {
          query: {
            id: string
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
        } & { json: RemarketingListShare }
        output: RemarketingListShare
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { profileId: string } } & {
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
        } & { json: RemarketingListShare }
        output: RemarketingListShare
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/userprofiles/:profileId/remarketingListShares/:remarketingListId': {
      $get: {
        input: { param: { profileId: string; remarketingListId: string } } & {
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
        output: RemarketingListShare
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/userprofiles/:profileId/remarketingLists': {
      $get: {
        input: { param: { profileId: string } } & {
          query: {
            advertiserId: string
            active?: boolean | undefined
            floodlightActivityId?: string | undefined
            maxResults?: number | undefined
            name?: string | undefined
            pageToken?: string | undefined
            sortField?: 'ID' | 'NAME' | undefined
            sortOrder?: 'ASCENDING' | 'DESCENDING' | undefined
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
        output: RemarketingListsListResponse
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { profileId: string } } & {
          query: {
            id: string
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
        } & { json: RemarketingList }
        output: RemarketingList
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { profileId: string } } & {
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
        } & { json: RemarketingList }
        output: RemarketingList
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { profileId: string } } & {
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
        } & { json: RemarketingList }
        output: RemarketingList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/userprofiles/:profileId/remarketingLists/:id': {
      $get: {
        input: { param: { profileId: string; id: string } } & {
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
        output: RemarketingList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/userprofiles/:profileId/reports': {
      $get: {
        input: { param: { profileId: string } } & {
          query: {
            maxResults?: number | undefined
            pageToken?: string | undefined
            scope?: 'ALL' | 'MINE' | undefined
            sortField?: 'ID' | 'LAST_MODIFIED_TIME' | 'NAME' | undefined
            sortOrder?: 'ASCENDING' | 'DESCENDING' | undefined
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
        output: ReportList
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { profileId: string } } & {
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
        } & { json: Report }
        output: Report
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/userprofiles/:profileId/reports/compatiblefields/query': {
      $post: {
        input: { param: { profileId: string } } & {
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
        } & { json: Report }
        output: CompatibleFields
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/userprofiles/:profileId/reports/:reportId': {
      $delete: {
        input: { param: { profileId: string; reportId: string } } & {
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
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { profileId: string; reportId: string } } & {
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
        output: Report
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { profileId: string; reportId: string } } & {
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
        } & { json: Report }
        output: Report
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { profileId: string; reportId: string } } & {
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
        } & { json: Report }
        output: Report
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/userprofiles/:profileId/reports/:reportId/files': {
      $get: {
        input: { param: { profileId: string; reportId: string } } & {
          query: {
            maxResults?: number | undefined
            pageToken?: string | undefined
            sortField?: 'ID' | 'LAST_MODIFIED_TIME' | undefined
            sortOrder?: 'ASCENDING' | 'DESCENDING' | undefined
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
        output: FileList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/userprofiles/:profileId/reports/:reportId/files/:fileId': {
      $get: {
        input: { param: { profileId: string; reportId: string; fileId: string } } & {
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
        output: File2
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/userprofiles/:profileId/reports/:reportId/run': {
      $post: {
        input: { param: { profileId: string; reportId: string } } & {
          query: {
            synchronous?: boolean | undefined
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
        output: File2
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/userprofiles/:profileId/sites': {
      $get: {
        input: { param: { profileId: string } } & {
          query: {
            acceptsInStreamVideoPlacements?: boolean | undefined
            acceptsInterstitialPlacements?: boolean | undefined
            acceptsPublisherPaidPlacements?: boolean | undefined
            adWordsSite?: boolean | undefined
            approved?: boolean | undefined
            campaignIds?: string[] | undefined
            directorySiteIds?: string[] | undefined
            ids?: string[] | undefined
            maxResults?: number | undefined
            pageToken?: string | undefined
            searchString?: string | undefined
            sortField?: 'ID' | 'NAME' | undefined
            sortOrder?: 'ASCENDING' | 'DESCENDING' | undefined
            subaccountId?: string | undefined
            unmappedSite?: boolean | undefined
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
        output: SitesListResponse
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { profileId: string } } & {
          query: {
            id: string
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
        } & { json: Site }
        output: Site
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { profileId: string } } & {
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
        } & { json: Site }
        output: Site
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { profileId: string } } & {
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
        } & { json: Site }
        output: Site
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/userprofiles/:profileId/sites/:id': {
      $get: {
        input: { param: { profileId: string; id: string } } & {
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
        output: Site
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/userprofiles/:profileId/sizes': {
      $get: {
        input: { param: { profileId: string } } & {
          query: {
            height?: number | undefined
            iabStandard?: boolean | undefined
            ids?: string[] | undefined
            width?: number | undefined
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
        output: SizesListResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { profileId: string } } & {
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
        } & { json: Size }
        output: Size
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/userprofiles/:profileId/sizes/:id': {
      $get: {
        input: { param: { profileId: string; id: string } } & {
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
        output: Size
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/userprofiles/:profileId/subaccounts': {
      $get: {
        input: { param: { profileId: string } } & {
          query: {
            ids?: string[] | undefined
            maxResults?: number | undefined
            pageToken?: string | undefined
            searchString?: string | undefined
            sortField?: 'ID' | 'NAME' | undefined
            sortOrder?: 'ASCENDING' | 'DESCENDING' | undefined
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
        output: SubaccountsListResponse
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { profileId: string } } & {
          query: {
            id: string
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
        } & { json: Subaccount }
        output: Subaccount
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { profileId: string } } & {
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
        } & { json: Subaccount }
        output: Subaccount
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { profileId: string } } & {
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
        } & { json: Subaccount }
        output: Subaccount
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/userprofiles/:profileId/subaccounts/:id': {
      $get: {
        input: { param: { profileId: string; id: string } } & {
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
        output: Subaccount
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/userprofiles/:profileId/targetableRemarketingLists': {
      $get: {
        input: { param: { profileId: string } } & {
          query: {
            advertiserId: string
            active?: boolean | undefined
            maxResults?: number | undefined
            name?: string | undefined
            pageToken?: string | undefined
            sortField?: 'ID' | 'NAME' | undefined
            sortOrder?: 'ASCENDING' | 'DESCENDING' | undefined
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
        output: TargetableRemarketingListsListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/userprofiles/:profileId/targetableRemarketingLists/:id': {
      $get: {
        input: { param: { profileId: string; id: string } } & {
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
        output: TargetableRemarketingList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/userprofiles/:profileId/targetingTemplates': {
      $get: {
        input: { param: { profileId: string } } & {
          query: {
            advertiserId?: string | undefined
            ids?: string[] | undefined
            maxResults?: number | undefined
            pageToken?: string | undefined
            searchString?: string | undefined
            sortField?: 'ID' | 'NAME' | undefined
            sortOrder?: 'ASCENDING' | 'DESCENDING' | undefined
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
        output: TargetingTemplatesListResponse
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { profileId: string } } & {
          query: {
            id: string
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
        } & { json: TargetingTemplate }
        output: TargetingTemplate
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { profileId: string } } & {
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
        } & { json: TargetingTemplate }
        output: TargetingTemplate
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { profileId: string } } & {
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
        } & { json: TargetingTemplate }
        output: TargetingTemplate
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/userprofiles/:profileId/targetingTemplates/:id': {
      $get: {
        input: { param: { profileId: string; id: string } } & {
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
        output: TargetingTemplate
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/userprofiles/:profileId/userRolePermissionGroups': {
      $get: {
        input: { param: { profileId: string } } & {
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
        output: UserRolePermissionGroupsListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/userprofiles/:profileId/userRolePermissionGroups/:id': {
      $get: {
        input: { param: { profileId: string; id: string } } & {
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
        output: UserRolePermissionGroup
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/userprofiles/:profileId/userRolePermissions': {
      $get: {
        input: { param: { profileId: string } } & {
          query: {
            ids?: string[] | undefined
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
        output: UserRolePermissionsListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/userprofiles/:profileId/userRolePermissions/:id': {
      $get: {
        input: { param: { profileId: string; id: string } } & {
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
        output: UserRolePermission
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/userprofiles/:profileId/userRoles': {
      $get: {
        input: { param: { profileId: string } } & {
          query: {
            accountUserRoleOnly?: boolean | undefined
            ids?: string[] | undefined
            maxResults?: number | undefined
            pageToken?: string | undefined
            searchString?: string | undefined
            sortField?: 'ID' | 'NAME' | undefined
            sortOrder?: 'ASCENDING' | 'DESCENDING' | undefined
            subaccountId?: string | undefined
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
        output: UserRolesListResponse
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { profileId: string } } & {
          query: {
            id: string
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
        } & { json: UserRole }
        output: UserRole
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { profileId: string } } & {
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
        } & { json: UserRole }
        output: UserRole
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { profileId: string } } & {
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
        } & { json: UserRole }
        output: UserRole
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/userprofiles/:profileId/userRoles/:id': {
      $delete: {
        input: { param: { profileId: string; id: string } } & {
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
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { profileId: string; id: string } } & {
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
        output: UserRole
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/userprofiles/:profileId/videoFormats': {
      $get: {
        input: { param: { profileId: string } } & {
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
        output: VideoFormatsListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/userprofiles/:profileId/videoFormats/:id': {
      $get: {
        input: { param: { profileId: string; id: number } } & {
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
        output: VideoFormat
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
