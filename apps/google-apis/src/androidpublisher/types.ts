type InternalAppSharingArtifact = {
  certificateFingerprint?: string | undefined
  downloadUrl?: string | undefined
  sha256?: string | undefined
}
type DeviceRam = { maxBytes?: string | undefined; minBytes?: string | undefined }
type DeviceId = { buildBrand?: string | undefined; buildDevice?: string | undefined }
type SystemFeature = { name?: string | undefined }
type DeviceSelector = {
  deviceRam?: DeviceRam | undefined
  excludedDeviceIds?: DeviceId[] | undefined
  forbiddenSystemFeatures?: SystemFeature[] | undefined
  includedDeviceIds?: DeviceId[] | undefined
  requiredSystemFeatures?: SystemFeature[] | undefined
}
type DeviceGroup = { deviceSelectors?: DeviceSelector[] | undefined; name?: string | undefined }
type DeviceTier = { deviceGroupNames?: string[] | undefined; level?: number | undefined }
type DeviceTierSet = { deviceTiers?: DeviceTier[] | undefined }
type UserCountrySet = { countryCodes?: string[] | undefined; name?: string | undefined }
type DeviceTierConfig = {
  deviceGroups?: DeviceGroup[] | undefined
  deviceTierConfigId?: string | undefined
  deviceTierSet?: DeviceTierSet | undefined
  userCountrySets?: UserCountrySet[] | undefined
}
type ListDeviceTierConfigsResponse = {
  deviceTierConfigs?: DeviceTierConfig[] | undefined
  nextPageToken?: string | undefined
}
type AppEdit = { expiryTimeSeconds?: string | undefined; id?: string | undefined }
type ApkBinary = { sha1?: string | undefined; sha256?: string | undefined }
type Apk = { binary?: ApkBinary | undefined; versionCode?: number | undefined }
type ApksListResponse = { apks?: Apk[] | undefined; kind?: string | undefined }
type UsesPermission = { maxSdkVersion?: number | undefined; name?: string | undefined }
type ExternallyHostedApk = {
  applicationLabel?: string | undefined
  certificateBase64s?: string[] | undefined
  externallyHostedUrl?: string | undefined
  fileSha1Base64?: string | undefined
  fileSha256Base64?: string | undefined
  fileSize?: string | undefined
  iconBase64?: string | undefined
  maximumSdk?: number | undefined
  minimumSdk?: number | undefined
  nativeCodes?: string[] | undefined
  packageName?: string | undefined
  usesFeatures?: string[] | undefined
  usesPermissions?: UsesPermission[] | undefined
  versionCode?: number | undefined
  versionName?: string | undefined
}
type ApksAddExternallyHostedRequest = { externallyHostedApk?: ExternallyHostedApk | undefined }
type ApksAddExternallyHostedResponse = { externallyHostedApk?: ExternallyHostedApk | undefined }
type DeobfuscationFile = {
  symbolType?: 'deobfuscationFileTypeUnspecified' | 'proguard' | 'nativeCode' | undefined
}
type DeobfuscationFilesUploadResponse = { deobfuscationFile?: DeobfuscationFile | undefined }
type ExpansionFile = { fileSize?: string | undefined; referencesVersion?: number | undefined }
type ExpansionFilesUploadResponse = { expansionFile?: ExpansionFile | undefined }
type Bundle = {
  sha1?: string | undefined
  sha256?: string | undefined
  versionCode?: number | undefined
}
type BundlesListResponse = { bundles?: Bundle[] | undefined; kind?: string | undefined }
type TrackTargetedCountry = { countryCode?: string | undefined }
type TrackCountryAvailability = {
  countries?: TrackTargetedCountry[] | undefined
  restOfWorld?: boolean | undefined
  syncWithProduction?: boolean | undefined
}
type AppDetails = {
  contactEmail?: string | undefined
  contactPhone?: string | undefined
  contactWebsite?: string | undefined
  defaultLanguage?: string | undefined
}
type Listing = {
  fullDescription?: string | undefined
  language?: string | undefined
  shortDescription?: string | undefined
  title?: string | undefined
  video?: string | undefined
}
type ListingsListResponse = { kind?: string | undefined; listings?: Listing[] | undefined }
type Image = {
  id?: string | undefined
  sha1?: string | undefined
  sha256?: string | undefined
  url?: string | undefined
}
type ImagesDeleteAllResponse = { deleted?: Image[] | undefined }
type ImagesListResponse = { images?: Image[] | undefined }
type ImagesUploadResponse = { image?: Image | undefined }
type Testers = { googleGroups?: string[] | undefined }
type CountryTargeting = {
  countries?: string[] | undefined
  includeRestOfWorld?: boolean | undefined
}
type LocalizedText = { language?: string | undefined; text?: string | undefined }
type TrackRelease = {
  countryTargeting?: CountryTargeting | undefined
  inAppUpdatePriority?: number | undefined
  name?: string | undefined
  releaseNotes?: LocalizedText[] | undefined
  status?: 'statusUnspecified' | 'draft' | 'inProgress' | 'halted' | 'completed' | undefined
  userFraction?: number | undefined
  versionCodes?: string[] | undefined
}
type Track = { releases?: TrackRelease[] | undefined; track?: string | undefined }
type TracksListResponse = { kind?: string | undefined; tracks?: Track[] | undefined }
type GeneratedAssetPackSlice = {
  downloadId?: string | undefined
  moduleName?: string | undefined
  sliceId?: string | undefined
  version?: string | undefined
}
type GeneratedSplitApk = {
  downloadId?: string | undefined
  moduleName?: string | undefined
  splitId?: string | undefined
  variantId?: number | undefined
}
type GeneratedStandaloneApk = { downloadId?: string | undefined; variantId?: number | undefined }
type GeneratedUniversalApk = { downloadId?: string | undefined }
type GeneratedApksPerSigningKey = {
  certificateSha256Hash?: string | undefined
  generatedAssetPackSlices?: GeneratedAssetPackSlice[] | undefined
  generatedSplitApks?: GeneratedSplitApk[] | undefined
  generatedStandaloneApks?: GeneratedStandaloneApk[] | undefined
  generatedUniversalApk?: GeneratedUniversalApk | undefined
}
type GeneratedApksListResponse = { generatedApks?: GeneratedApksPerSigningKey[] | undefined }
type Price = { currency?: string | undefined; priceMicros?: string | undefined }
type InAppProductListing = {
  benefits?: string[] | undefined
  description?: string | undefined
  title?: string | undefined
}
type RegionalTaxRateInfo = {
  eligibleForStreamingServiceTaxRate?: boolean | undefined
  streamingTaxType?:
    | 'STREAMING_TAX_TYPE_UNSPECIFIED'
    | 'STREAMING_TAX_TYPE_TELCO_VIDEO_RENTAL'
    | 'STREAMING_TAX_TYPE_TELCO_VIDEO_SALES'
    | 'STREAMING_TAX_TYPE_TELCO_VIDEO_MULTI_CHANNEL'
    | 'STREAMING_TAX_TYPE_TELCO_AUDIO_RENTAL'
    | 'STREAMING_TAX_TYPE_TELCO_AUDIO_SALES'
    | 'STREAMING_TAX_TYPE_TELCO_AUDIO_MULTI_CHANNEL'
    | undefined
  taxTier?:
    | 'TAX_TIER_UNSPECIFIED'
    | 'TAX_TIER_BOOKS_1'
    | 'TAX_TIER_NEWS_1'
    | 'TAX_TIER_NEWS_2'
    | 'TAX_TIER_MUSIC_OR_AUDIO_1'
    | 'TAX_TIER_LIVE_OR_BROADCAST_1'
    | undefined
}
type ManagedProductTaxAndComplianceSettings = {
  eeaWithdrawalRightType?:
    | 'WITHDRAWAL_RIGHT_TYPE_UNSPECIFIED'
    | 'WITHDRAWAL_RIGHT_DIGITAL_CONTENT'
    | 'WITHDRAWAL_RIGHT_SERVICE'
    | undefined
  taxRateInfoByRegionCode?: { [x: string]: RegionalTaxRateInfo } | undefined
}
type SubscriptionTaxAndComplianceSettings = {
  eeaWithdrawalRightType?:
    | 'WITHDRAWAL_RIGHT_TYPE_UNSPECIFIED'
    | 'WITHDRAWAL_RIGHT_DIGITAL_CONTENT'
    | 'WITHDRAWAL_RIGHT_SERVICE'
    | undefined
  taxRateInfoByRegionCode?: { [x: string]: RegionalTaxRateInfo } | undefined
}
type InAppProduct = {
  defaultLanguage?: string | undefined
  defaultPrice?: Price | undefined
  gracePeriod?: string | undefined
  listings?: { [x: string]: InAppProductListing } | undefined
  managedProductTaxesAndComplianceSettings?: ManagedProductTaxAndComplianceSettings | undefined
  packageName?: string | undefined
  prices?: { [x: string]: Price } | undefined
  purchaseType?: 'purchaseTypeUnspecified' | 'managedUser' | 'subscription' | undefined
  sku?: string | undefined
  status?: 'statusUnspecified' | 'active' | 'inactive' | undefined
  subscriptionPeriod?: string | undefined
  subscriptionTaxesAndComplianceSettings?: SubscriptionTaxAndComplianceSettings | undefined
  trialPeriod?: string | undefined
}
type PageInfo = {
  resultPerPage?: number | undefined
  startIndex?: number | undefined
  totalResults?: number | undefined
}
type TokenPagination = {
  nextPageToken?: string | undefined
  previousPageToken?: string | undefined
}
type InappproductsListResponse = {
  inappproduct?: InAppProduct[] | undefined
  kind?: string | undefined
  pageInfo?: PageInfo | undefined
  tokenPagination?: TokenPagination | undefined
}
type Money = {
  currencyCode?: string | undefined
  nanos?: number | undefined
  units?: string | undefined
}
type ConvertRegionPricesRequest = { price?: Money | undefined }
type ConvertedOtherRegionsPrice = { eurPrice?: Money | undefined; usdPrice?: Money | undefined }
type ConvertedRegionPrice = {
  price?: Money | undefined
  regionCode?: string | undefined
  taxAmount?: Money | undefined
}
type ConvertRegionPricesResponse = {
  convertedOtherRegionsPrice?: ConvertedOtherRegionsPrice | undefined
  convertedRegionPrices?: { [x: string]: ConvertedRegionPrice } | undefined
}
type ProductPurchase = {
  acknowledgementState?: number | undefined
  consumptionState?: number | undefined
  developerPayload?: string | undefined
  kind?: string | undefined
  obfuscatedExternalAccountId?: string | undefined
  obfuscatedExternalProfileId?: string | undefined
  orderId?: string | undefined
  productId?: string | undefined
  purchaseState?: number | undefined
  purchaseTimeMillis?: string | undefined
  purchaseToken?: string | undefined
  purchaseType?: number | undefined
  quantity?: number | undefined
  regionCode?: string | undefined
}
type ProductPurchasesAcknowledgeRequest = { developerPayload?: string | undefined }
type SubscriptionCancelSurveyResult = {
  cancelSurveyReason?: number | undefined
  userInputCancelReason?: string | undefined
}
type IntroductoryPriceInfo = {
  introductoryPriceAmountMicros?: string | undefined
  introductoryPriceCurrencyCode?: string | undefined
  introductoryPriceCycles?: number | undefined
  introductoryPricePeriod?: string | undefined
}
type SubscriptionPriceChange = { newPrice?: Price | undefined; state?: number | undefined }
type SubscriptionPurchase = {
  acknowledgementState?: number | undefined
  autoRenewing?: boolean | undefined
  autoResumeTimeMillis?: string | undefined
  cancelReason?: number | undefined
  cancelSurveyResult?: SubscriptionCancelSurveyResult | undefined
  countryCode?: string | undefined
  developerPayload?: string | undefined
  emailAddress?: string | undefined
  expiryTimeMillis?: string | undefined
  externalAccountId?: string | undefined
  familyName?: string | undefined
  givenName?: string | undefined
  introductoryPriceInfo?: IntroductoryPriceInfo | undefined
  kind?: string | undefined
  linkedPurchaseToken?: string | undefined
  obfuscatedExternalAccountId?: string | undefined
  obfuscatedExternalProfileId?: string | undefined
  orderId?: string | undefined
  paymentState?: number | undefined
  priceAmountMicros?: string | undefined
  priceChange?: SubscriptionPriceChange | undefined
  priceCurrencyCode?: string | undefined
  profileId?: string | undefined
  profileName?: string | undefined
  promotionCode?: string | undefined
  promotionType?: number | undefined
  purchaseType?: number | undefined
  startTimeMillis?: string | undefined
  userCancellationTimeMillis?: string | undefined
}
type SubscriptionPurchasesAcknowledgeRequest = { developerPayload?: string | undefined }
type SubscriptionDeferralInfo = {
  desiredExpiryTimeMillis?: string | undefined
  expectedExpiryTimeMillis?: string | undefined
}
type SubscriptionPurchasesDeferRequest = { deferralInfo?: SubscriptionDeferralInfo | undefined }
type SubscriptionPurchasesDeferResponse = { newExpiryTimeMillis?: string | undefined }
type DeveloperInitiatedCancellation = { [x: string]: unknown }
type ReplacementCancellation = { [x: string]: unknown }
type SystemInitiatedCancellation = { [x: string]: unknown }
type CancelSurveyResult = {
  reason?:
    | 'CANCEL_SURVEY_REASON_UNSPECIFIED'
    | 'CANCEL_SURVEY_REASON_NOT_ENOUGH_USAGE'
    | 'CANCEL_SURVEY_REASON_TECHNICAL_ISSUES'
    | 'CANCEL_SURVEY_REASON_COST_RELATED'
    | 'CANCEL_SURVEY_REASON_FOUND_BETTER_APP'
    | 'CANCEL_SURVEY_REASON_OTHERS'
    | undefined
  reasonUserInput?: string | undefined
}
type UserInitiatedCancellation = {
  cancelSurveyResult?: CancelSurveyResult | undefined
  cancelTime?: string | undefined
}
type CanceledStateContext = {
  developerInitiatedCancellation?: DeveloperInitiatedCancellation | undefined
  replacementCancellation?: ReplacementCancellation | undefined
  systemInitiatedCancellation?: SystemInitiatedCancellation | undefined
  userInitiatedCancellation?: UserInitiatedCancellation | undefined
}
type ExternalAccountIdentifiers = {
  externalAccountId?: string | undefined
  obfuscatedExternalAccountId?: string | undefined
  obfuscatedExternalProfileId?: string | undefined
}
type SubscriptionItemPriceChangeDetails = {
  expectedNewPriceChargeTime?: string | undefined
  newPrice?: Money | undefined
  priceChangeMode?:
    | 'PRICE_CHANGE_MODE_UNSPECIFIED'
    | 'PRICE_DECREASE'
    | 'PRICE_INCREASE'
    | undefined
  priceChangeState?:
    | 'PRICE_CHANGE_STATE_UNSPECIFIED'
    | 'OUTSTANDING'
    | 'CONFIRMED'
    | 'APPLIED'
    | undefined
}
type AutoRenewingPlan = {
  autoRenewEnabled?: boolean | undefined
  priceChangeDetails?: SubscriptionItemPriceChangeDetails | undefined
}
type OfferDetails = {
  basePlanId?: string | undefined
  offerId?: string | undefined
  offerTags?: string[] | undefined
}
type PrepaidPlan = { allowExtendAfterTime?: string | undefined }
type SubscriptionPurchaseLineItem = {
  autoRenewingPlan?: AutoRenewingPlan | undefined
  expiryTime?: string | undefined
  offerDetails?: OfferDetails | undefined
  prepaidPlan?: PrepaidPlan | undefined
  productId?: string | undefined
}
type PausedStateContext = { autoResumeTime?: string | undefined }
type SubscribeWithGoogleInfo = {
  emailAddress?: string | undefined
  familyName?: string | undefined
  givenName?: string | undefined
  profileId?: string | undefined
  profileName?: string | undefined
}
type TestPurchase = { [x: string]: unknown }
type SubscriptionPurchaseV2 = {
  acknowledgementState?:
    | 'ACKNOWLEDGEMENT_STATE_UNSPECIFIED'
    | 'ACKNOWLEDGEMENT_STATE_PENDING'
    | 'ACKNOWLEDGEMENT_STATE_ACKNOWLEDGED'
    | undefined
  canceledStateContext?: CanceledStateContext | undefined
  externalAccountIdentifiers?: ExternalAccountIdentifiers | undefined
  kind?: string | undefined
  latestOrderId?: string | undefined
  lineItems?: SubscriptionPurchaseLineItem[] | undefined
  linkedPurchaseToken?: string | undefined
  pausedStateContext?: PausedStateContext | undefined
  regionCode?: string | undefined
  startTime?: string | undefined
  subscribeWithGoogleInfo?: SubscribeWithGoogleInfo | undefined
  subscriptionState?:
    | 'SUBSCRIPTION_STATE_UNSPECIFIED'
    | 'SUBSCRIPTION_STATE_PENDING'
    | 'SUBSCRIPTION_STATE_ACTIVE'
    | 'SUBSCRIPTION_STATE_PAUSED'
    | 'SUBSCRIPTION_STATE_IN_GRACE_PERIOD'
    | 'SUBSCRIPTION_STATE_ON_HOLD'
    | 'SUBSCRIPTION_STATE_CANCELED'
    | 'SUBSCRIPTION_STATE_EXPIRED'
    | undefined
  testPurchase?: TestPurchase | undefined
}
type VoidedPurchase = {
  kind?: string | undefined
  orderId?: string | undefined
  purchaseTimeMillis?: string | undefined
  purchaseToken?: string | undefined
  voidedReason?: number | undefined
  voidedSource?: number | undefined
  voidedTimeMillis?: string | undefined
}
type VoidedPurchasesListResponse = {
  pageInfo?: PageInfo | undefined
  tokenPagination?: TokenPagination | undefined
  voidedPurchases?: VoidedPurchase[] | undefined
}
type Timestamp = { nanos?: number | undefined; seconds?: string | undefined }
type DeveloperComment = { lastModified?: Timestamp | undefined; text?: string | undefined }
type DeviceMetadata = {
  cpuMake?: string | undefined
  cpuModel?: string | undefined
  deviceClass?: string | undefined
  glEsVersion?: number | undefined
  manufacturer?: string | undefined
  nativePlatform?: string | undefined
  productName?: string | undefined
  ramMb?: number | undefined
  screenDensityDpi?: number | undefined
  screenHeightPx?: number | undefined
  screenWidthPx?: number | undefined
}
type UserComment = {
  androidOsVersion?: number | undefined
  appVersionCode?: number | undefined
  appVersionName?: string | undefined
  device?: string | undefined
  deviceMetadata?: DeviceMetadata | undefined
  lastModified?: Timestamp | undefined
  originalText?: string | undefined
  reviewerLanguage?: string | undefined
  starRating?: number | undefined
  text?: string | undefined
  thumbsDownCount?: number | undefined
  thumbsUpCount?: number | undefined
}
type Comment = {
  developerComment?: DeveloperComment | undefined
  userComment?: UserComment | undefined
}
type Review = {
  authorName?: string | undefined
  comments?: Comment[] | undefined
  reviewId?: string | undefined
}
type ReviewsListResponse = {
  pageInfo?: PageInfo | undefined
  reviews?: Review[] | undefined
  tokenPagination?: TokenPagination | undefined
}
type ReviewsReplyRequest = { replyText?: string | undefined }
type ReviewReplyResult = { lastEdited?: Timestamp | undefined; replyText?: string | undefined }
type ReviewsReplyResponse = { result?: ReviewReplyResult | undefined }
type AutoRenewingBasePlanType = {
  billingPeriodDuration?: string | undefined
  gracePeriodDuration?: string | undefined
  legacyCompatible?: boolean | undefined
  legacyCompatibleSubscriptionOfferId?: string | undefined
  prorationMode?:
    | 'SUBSCRIPTION_PRORATION_MODE_UNSPECIFIED'
    | 'SUBSCRIPTION_PRORATION_MODE_CHARGE_ON_NEXT_BILLING_DATE'
    | 'SUBSCRIPTION_PRORATION_MODE_CHARGE_FULL_PRICE_IMMEDIATELY'
    | undefined
  resubscribeState?:
    | 'RESUBSCRIBE_STATE_UNSPECIFIED'
    | 'RESUBSCRIBE_STATE_ACTIVE'
    | 'RESUBSCRIBE_STATE_INACTIVE'
    | undefined
}
type OfferTag = { tag?: string | undefined }
type OtherRegionsBasePlanConfig = {
  eurPrice?: Money | undefined
  newSubscriberAvailability?: boolean | undefined
  usdPrice?: Money | undefined
}
type PrepaidBasePlanType = {
  billingPeriodDuration?: string | undefined
  timeExtension?:
    | 'TIME_EXTENSION_UNSPECIFIED'
    | 'TIME_EXTENSION_ACTIVE'
    | 'TIME_EXTENSION_INACTIVE'
    | undefined
}
type RegionalBasePlanConfig = {
  newSubscriberAvailability?: boolean | undefined
  price?: Money | undefined
  regionCode?: string | undefined
}
type BasePlan = {
  autoRenewingBasePlanType?: AutoRenewingBasePlanType | undefined
  basePlanId?: string | undefined
  offerTags?: OfferTag[] | undefined
  otherRegionsConfig?: OtherRegionsBasePlanConfig | undefined
  prepaidBasePlanType?: PrepaidBasePlanType | undefined
  regionalConfigs?: RegionalBasePlanConfig[] | undefined
  state?: 'STATE_UNSPECIFIED' | 'DRAFT' | 'ACTIVE' | 'INACTIVE' | undefined
}
type SubscriptionListing = {
  benefits?: string[] | undefined
  description?: string | undefined
  languageCode?: string | undefined
  title?: string | undefined
}
type Subscription = {
  archived?: boolean | undefined
  basePlans?: BasePlan[] | undefined
  listings?: SubscriptionListing[] | undefined
  packageName?: string | undefined
  productId?: string | undefined
  taxAndComplianceSettings?: SubscriptionTaxAndComplianceSettings | undefined
}
type ListSubscriptionsResponse = {
  nextPageToken?: string | undefined
  subscriptions?: Subscription[] | undefined
}
type OtherRegionsSubscriptionOfferConfig = {
  otherRegionsNewSubscriberAvailability?: boolean | undefined
}
type OtherRegionsSubscriptionOfferPhasePrices = {
  eurPrice?: Money | undefined
  usdPrice?: Money | undefined
}
type OtherRegionsSubscriptionOfferPhaseConfig = {
  absoluteDiscounts?: OtherRegionsSubscriptionOfferPhasePrices | undefined
  otherRegionsPrices?: OtherRegionsSubscriptionOfferPhasePrices | undefined
  relativeDiscount?: number | undefined
}
type RegionalSubscriptionOfferPhaseConfig = {
  absoluteDiscount?: Money | undefined
  price?: Money | undefined
  regionCode?: string | undefined
  relativeDiscount?: number | undefined
}
type SubscriptionOfferPhase = {
  duration?: string | undefined
  otherRegionsConfig?: OtherRegionsSubscriptionOfferPhaseConfig | undefined
  recurrenceCount?: number | undefined
  regionalConfigs?: RegionalSubscriptionOfferPhaseConfig[] | undefined
}
type RegionalSubscriptionOfferConfig = {
  newSubscriberAvailability?: boolean | undefined
  regionCode?: string | undefined
}
type TargetingRuleScope = { specificSubscriptionInApp?: string | undefined }
type AcquisitionTargetingRule = { scope?: TargetingRuleScope | undefined }
type UpgradeTargetingRule = {
  billingPeriodDuration?: string | undefined
  oncePerUser?: boolean | undefined
  scope?: TargetingRuleScope | undefined
}
type SubscriptionOfferTargeting = {
  acquisitionRule?: AcquisitionTargetingRule | undefined
  upgradeRule?: UpgradeTargetingRule | undefined
}
type SubscriptionOffer = {
  basePlanId?: string | undefined
  offerId?: string | undefined
  offerTags?: OfferTag[] | undefined
  otherRegionsConfig?: OtherRegionsSubscriptionOfferConfig | undefined
  packageName?: string | undefined
  phases?: SubscriptionOfferPhase[] | undefined
  productId?: string | undefined
  regionalConfigs?: RegionalSubscriptionOfferConfig[] | undefined
  state?: 'STATE_UNSPECIFIED' | 'DRAFT' | 'ACTIVE' | 'INACTIVE' | undefined
  targeting?: SubscriptionOfferTargeting | undefined
}
type ListSubscriptionOffersResponse = {
  nextPageToken?: string | undefined
  subscriptionOffers?: SubscriptionOffer[] | undefined
}
type ActivateSubscriptionOfferRequest = { [x: string]: unknown }
type DeactivateSubscriptionOfferRequest = { [x: string]: unknown }
type ActivateBasePlanRequest = { [x: string]: unknown }
type DeactivateBasePlanRequest = { [x: string]: unknown }
type RegionalPriceMigrationConfig = {
  oldestAllowedPriceVersionTime?: string | undefined
  regionCode?: string | undefined
}
type RegionsVersion = { version?: string | undefined }
type MigrateBasePlanPricesRequest = {
  regionalPriceMigrations?: RegionalPriceMigrationConfig[] | undefined
  regionsVersion?: RegionsVersion | undefined
}
type MigrateBasePlanPricesResponse = { [x: string]: unknown }
type ArchiveSubscriptionRequest = { [x: string]: unknown }
type DeviceSpec = {
  screenDensity?: number | undefined
  supportedAbis?: string[] | undefined
  supportedLocales?: string[] | undefined
}
type Variant = { deviceSpec?: DeviceSpec | undefined; variantId?: number | undefined }
type SystemApksListResponse = { variants?: Variant[] | undefined }
type OneTimeExternalTransaction = { externalTransactionToken?: string | undefined }
type ExternalSubscription = {
  subscriptionType?: 'SUBSCRIPTION_TYPE_UNSPECIFIED' | 'RECURRING' | 'PREPAID' | undefined
}
type RecurringExternalTransaction = {
  externalSubscription?: ExternalSubscription | undefined
  externalTransactionToken?: string | undefined
  initialExternalTransactionId?: string | undefined
}
type ExternalTransactionTestPurchase = { [x: string]: unknown }
type ExternalTransactionAddress = { regionCode?: string | undefined }
type ExternalTransaction = {
  createTime?: string | undefined
  currentPreTaxAmount?: Price | undefined
  currentTaxAmount?: Price | undefined
  externalTransactionId?: string | undefined
  oneTimeTransaction?: OneTimeExternalTransaction | undefined
  originalPreTaxAmount?: Price | undefined
  originalTaxAmount?: Price | undefined
  packageName?: string | undefined
  recurringTransaction?: RecurringExternalTransaction | undefined
  testPurchase?: ExternalTransactionTestPurchase | undefined
  transactionState?:
    | 'TRANSACTION_STATE_UNSPECIFIED'
    | 'TRANSACTION_REPORTED'
    | 'TRANSACTION_CANCELED'
    | undefined
  transactionTime?: string | undefined
  userTaxAddress?: ExternalTransactionAddress | undefined
}
type Grant = {
  appLevelPermissions?:
    | (
        | 'APP_LEVEL_PERMISSION_UNSPECIFIED'
        | 'CAN_ACCESS_APP'
        | 'CAN_VIEW_FINANCIAL_DATA'
        | 'CAN_MANAGE_PERMISSIONS'
        | 'CAN_REPLY_TO_REVIEWS'
        | 'CAN_MANAGE_PUBLIC_APKS'
        | 'CAN_MANAGE_TRACK_APKS'
        | 'CAN_MANAGE_TRACK_USERS'
        | 'CAN_MANAGE_PUBLIC_LISTING'
        | 'CAN_MANAGE_DRAFT_APPS'
        | 'CAN_MANAGE_ORDERS'
        | 'CAN_MANAGE_APP_CONTENT'
      )[]
    | undefined
  name?: string | undefined
  packageName?: string | undefined
}
type User = {
  accessState?:
    | 'ACCESS_STATE_UNSPECIFIED'
    | 'INVITED'
    | 'INVITATION_EXPIRED'
    | 'ACCESS_GRANTED'
    | 'ACCESS_EXPIRED'
    | undefined
  developerAccountPermissions?:
    | (
        | 'DEVELOPER_LEVEL_PERMISSION_UNSPECIFIED'
        | 'CAN_SEE_ALL_APPS'
        | 'CAN_VIEW_FINANCIAL_DATA_GLOBAL'
        | 'CAN_MANAGE_PERMISSIONS_GLOBAL'
        | 'CAN_EDIT_GAMES_GLOBAL'
        | 'CAN_PUBLISH_GAMES_GLOBAL'
        | 'CAN_REPLY_TO_REVIEWS_GLOBAL'
        | 'CAN_MANAGE_PUBLIC_APKS_GLOBAL'
        | 'CAN_MANAGE_TRACK_APKS_GLOBAL'
        | 'CAN_MANAGE_TRACK_USERS_GLOBAL'
        | 'CAN_MANAGE_PUBLIC_LISTING_GLOBAL'
        | 'CAN_MANAGE_DRAFT_APPS_GLOBAL'
        | 'CAN_CREATE_MANAGED_PLAY_APPS_GLOBAL'
        | 'CAN_CHANGE_MANAGED_PLAY_SETTING_GLOBAL'
        | 'CAN_MANAGE_ORDERS_GLOBAL'
        | 'CAN_MANAGE_APP_CONTENT_GLOBAL'
      )[]
    | undefined
  email?: string | undefined
  expirationTime?: string | undefined
  grants?: Grant[] | undefined
  name?: string | undefined
  partial?: boolean | undefined
}
type FullRefund = { [x: string]: unknown }
type PartialRefund = { refundId?: string | undefined; refundPreTaxAmount?: Price | undefined }
type RefundExternalTransactionRequest = {
  fullRefund?: FullRefund | undefined
  partialRefund?: PartialRefund | undefined
  refundTime?: string | undefined
}
type ListUsersResponse = { nextPageToken?: string | undefined; users?: User[] | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/androidpublisher/v3/applications/internalappsharing/:packageName/artifacts/apk': {
      $post: {
        input: { param: { packageName: string } } & {
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
        output: InternalAppSharingArtifact
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/androidpublisher/v3/applications/internalappsharing/:packageName/artifacts/bundle': {
      $post: {
        input: { param: { packageName: string } } & {
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
        output: InternalAppSharingArtifact
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/androidpublisher/v3/applications/:packageName/deviceTierConfigs': {
      $get: {
        input: { param: { packageName: string } } & {
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
        output: ListDeviceTierConfigsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { packageName: string } } & {
          query: {
            allowUnknownDevices?: boolean | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: DeviceTierConfig }
        output: DeviceTierConfig
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/androidpublisher/v3/applications/:packageName/deviceTierConfigs/:deviceTierConfigId': {
      $get: {
        input: { param: { packageName: string; deviceTierConfigId: string } } & {
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
        output: DeviceTierConfig
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/androidpublisher/v3/applications/:packageName/edits': {
      $post: {
        input: { param: { packageName: string } } & {
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
        } & { json: AppEdit }
        output: AppEdit
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/androidpublisher/v3/applications/:packageName/edits/:editId': {
      $delete: {
        input: { param: { packageName: string; editId: string } } & {
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
        input: { param: { packageName: string; editId: string } } & {
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
        output: AppEdit
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/androidpublisher/v3/applications/:packageName/edits/:editId/apks': {
      $get: {
        input: { param: { packageName: string; editId: string } } & {
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
        output: ApksListResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { packageName: string; editId: string } } & {
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
        output: Apk
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/androidpublisher/v3/applications/:packageName/edits/:editId/apks/externallyHosted': {
      $post: {
        input: { param: { packageName: string; editId: string } } & {
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
        } & { json: ApksAddExternallyHostedRequest }
        output: ApksAddExternallyHostedResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/androidpublisher/v3/applications/:packageName/edits/:editId/apks/:apkVersionCode/deobfuscationFiles/:deobfuscationFileType': {
      $post: {
        input: {
          param: {
            packageName: string
            editId: string
            apkVersionCode: number
            deobfuscationFileType: 'deobfuscationFileTypeUnspecified' | 'proguard' | 'nativeCode'
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
        output: DeobfuscationFilesUploadResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/androidpublisher/v3/applications/:packageName/edits/:editId/apks/:apkVersionCode/expansionFiles/:expansionFileType': {
      $get: {
        input: {
          param: {
            packageName: string
            editId: string
            apkVersionCode: number
            expansionFileType: 'expansionFileTypeUnspecified' | 'main' | 'patch'
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
        output: ExpansionFile
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: {
          param: {
            packageName: string
            editId: string
            apkVersionCode: number
            expansionFileType: 'expansionFileTypeUnspecified' | 'main' | 'patch'
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
        } & { json: ExpansionFile }
        output: ExpansionFile
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: {
          param: {
            packageName: string
            editId: string
            apkVersionCode: number
            expansionFileType: 'expansionFileTypeUnspecified' | 'main' | 'patch'
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
        output: ExpansionFilesUploadResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: {
          param: {
            packageName: string
            editId: string
            apkVersionCode: number
            expansionFileType: 'expansionFileTypeUnspecified' | 'main' | 'patch'
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
        } & { json: ExpansionFile }
        output: ExpansionFile
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/androidpublisher/v3/applications/:packageName/edits/:editId/bundles': {
      $get: {
        input: { param: { packageName: string; editId: string } } & {
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
        output: BundlesListResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { packageName: string; editId: string } } & {
          query: {
            ackBundleInstallationWarning?: boolean | undefined
            deviceTierConfigId?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
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
        output: Bundle
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/androidpublisher/v3/applications/:packageName/edits/:editId/countryAvailability/:track': {
      $get: {
        input: { param: { packageName: string; editId: string; track: string } } & {
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
        output: TrackCountryAvailability
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/androidpublisher/v3/applications/:packageName/edits/:editId/details': {
      $get: {
        input: { param: { packageName: string; editId: string } } & {
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
        output: AppDetails
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { packageName: string; editId: string } } & {
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
        } & { json: AppDetails }
        output: AppDetails
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { packageName: string; editId: string } } & {
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
        } & { json: AppDetails }
        output: AppDetails
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/androidpublisher/v3/applications/:packageName/edits/:editId/listings': {
      $delete: {
        input: { param: { packageName: string; editId: string } } & {
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
        input: { param: { packageName: string; editId: string } } & {
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
        output: ListingsListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/androidpublisher/v3/applications/:packageName/edits/:editId/listings/:language': {
      $delete: {
        input: { param: { packageName: string; editId: string; language: string } } & {
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
        input: { param: { packageName: string; editId: string; language: string } } & {
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
        output: Listing
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { packageName: string; editId: string; language: string } } & {
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
        } & { json: Listing }
        output: Listing
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { packageName: string; editId: string; language: string } } & {
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
        } & { json: Listing }
        output: Listing
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/androidpublisher/v3/applications/:packageName/edits/:editId/listings/:language/:imageType': {
      $delete: {
        input: {
          param: {
            packageName: string
            editId: string
            language: string
            imageType:
              | 'appImageTypeUnspecified'
              | 'phoneScreenshots'
              | 'sevenInchScreenshots'
              | 'tenInchScreenshots'
              | 'tvScreenshots'
              | 'wearScreenshots'
              | 'icon'
              | 'featureGraphic'
              | 'tvBanner'
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
        output: ImagesDeleteAllResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: {
          param: {
            packageName: string
            editId: string
            language: string
            imageType:
              | 'appImageTypeUnspecified'
              | 'phoneScreenshots'
              | 'sevenInchScreenshots'
              | 'tenInchScreenshots'
              | 'tvScreenshots'
              | 'wearScreenshots'
              | 'icon'
              | 'featureGraphic'
              | 'tvBanner'
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
        output: ImagesListResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: {
          param: {
            packageName: string
            editId: string
            language: string
            imageType:
              | 'appImageTypeUnspecified'
              | 'phoneScreenshots'
              | 'sevenInchScreenshots'
              | 'tenInchScreenshots'
              | 'tvScreenshots'
              | 'wearScreenshots'
              | 'icon'
              | 'featureGraphic'
              | 'tvBanner'
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
        output: ImagesUploadResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/androidpublisher/v3/applications/:packageName/edits/:editId/listings/:language/:imageType/:imageId': {
      $delete: {
        input: {
          param: {
            packageName: string
            editId: string
            language: string
            imageType:
              | 'appImageTypeUnspecified'
              | 'phoneScreenshots'
              | 'sevenInchScreenshots'
              | 'tenInchScreenshots'
              | 'tvScreenshots'
              | 'wearScreenshots'
              | 'icon'
              | 'featureGraphic'
              | 'tvBanner'
            imageId: string
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
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/androidpublisher/v3/applications/:packageName/edits/:editId/testers/:track': {
      $get: {
        input: { param: { packageName: string; editId: string; track: string } } & {
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
        output: Testers
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { packageName: string; editId: string; track: string } } & {
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
        } & { json: Testers }
        output: Testers
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { packageName: string; editId: string; track: string } } & {
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
        } & { json: Testers }
        output: Testers
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/androidpublisher/v3/applications/:packageName/edits/:editId/tracks': {
      $get: {
        input: { param: { packageName: string; editId: string } } & {
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
        output: TracksListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/androidpublisher/v3/applications/:packageName/edits/:editId/tracks/:track': {
      $get: {
        input: { param: { packageName: string; editId: string; track: string } } & {
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
        output: Track
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { packageName: string; editId: string; track: string } } & {
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
        } & { json: Track }
        output: Track
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { packageName: string; editId: string; track: string } } & {
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
        } & { json: Track }
        output: Track
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/androidpublisher/v3/applications/:packageName/edits/:editId:commit': {
      $post: {
        input: { param: { packageName: string; editId: string } } & {
          query: {
            changesNotSentForReview?: boolean | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
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
        output: AppEdit
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/androidpublisher/v3/applications/:packageName/edits/:editId:validate': {
      $post: {
        input: { param: { packageName: string; editId: string } } & {
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
        output: AppEdit
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/androidpublisher/v3/applications/:packageName/generatedApks/:versionCode': {
      $get: {
        input: { param: { packageName: string; versionCode: number } } & {
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
        output: GeneratedApksListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/androidpublisher/v3/applications/:packageName/generatedApks/:versionCode/downloads/:downloadId:download': {
      $get: {
        input: { param: { packageName: string; versionCode: number; downloadId: string } } & {
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
    }
  } & {
    '/androidpublisher/v3/applications/:packageName/inappproducts': {
      $get: {
        input: { param: { packageName: string } } & {
          query: {
            maxResults?: number | undefined
            startIndex?: number | undefined
            token?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
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
        output: InappproductsListResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { packageName: string } } & {
          query: {
            autoConvertMissingPrices?: boolean | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: InAppProduct }
        output: InAppProduct
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/androidpublisher/v3/applications/:packageName/inappproducts/:sku': {
      $delete: {
        input: { param: { packageName: string; sku: string } } & {
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
        input: { param: { packageName: string; sku: string } } & {
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
        output: InAppProduct
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { packageName: string; sku: string } } & {
          query: {
            autoConvertMissingPrices?: boolean | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: InAppProduct }
        output: InAppProduct
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { packageName: string; sku: string } } & {
          query: {
            allowMissing?: boolean | undefined
            autoConvertMissingPrices?: boolean | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: InAppProduct }
        output: InAppProduct
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/androidpublisher/v3/applications/:packageName/orders/:orderId:refund': {
      $post: {
        input: { param: { packageName: string; orderId: string } } & {
          query: {
            revoke?: boolean | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
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
    '/androidpublisher/v3/applications/:packageName/pricing:convertRegionPrices': {
      $post: {
        input: { param: { packageName: string } } & {
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
        } & { json: ConvertRegionPricesRequest }
        output: ConvertRegionPricesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/androidpublisher/v3/applications/:packageName/purchases/products/:productId/tokens/:token': {
      $get: {
        input: { param: { packageName: string; productId: string; token: string } } & {
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
        output: ProductPurchase
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/androidpublisher/v3/applications/:packageName/purchases/products/:productId/tokens/:token:acknowledge': {
      $post: {
        input: { param: { packageName: string; productId: string; token: string } } & {
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
        } & { json: ProductPurchasesAcknowledgeRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/androidpublisher/v3/applications/:packageName/purchases/products/:productId/tokens/:token:consume': {
      $post: {
        input: { param: { packageName: string; productId: string; token: string } } & {
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
    }
  } & {
    '/androidpublisher/v3/applications/:packageName/purchases/subscriptions/:subscriptionId/tokens/:token': {
      $get: {
        input: { param: { packageName: string; subscriptionId: string; token: string } } & {
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
        output: SubscriptionPurchase
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/androidpublisher/v3/applications/:packageName/purchases/subscriptions/:subscriptionId/tokens/:token:acknowledge': {
      $post: {
        input: { param: { packageName: string; subscriptionId: string; token: string } } & {
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
        } & { json: SubscriptionPurchasesAcknowledgeRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/androidpublisher/v3/applications/:packageName/purchases/subscriptions/:subscriptionId/tokens/:token:cancel': {
      $post: {
        input: { param: { packageName: string; subscriptionId: string; token: string } } & {
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
    }
  } & {
    '/androidpublisher/v3/applications/:packageName/purchases/subscriptions/:subscriptionId/tokens/:token:defer': {
      $post: {
        input: { param: { packageName: string; subscriptionId: string; token: string } } & {
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
        } & { json: SubscriptionPurchasesDeferRequest }
        output: SubscriptionPurchasesDeferResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/androidpublisher/v3/applications/:packageName/purchases/subscriptions/:subscriptionId/tokens/:token:refund': {
      $post: {
        input: { param: { packageName: string; subscriptionId: string; token: string } } & {
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
    }
  } & {
    '/androidpublisher/v3/applications/:packageName/purchases/subscriptions/:subscriptionId/tokens/:token:revoke': {
      $post: {
        input: { param: { packageName: string; subscriptionId: string; token: string } } & {
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
    }
  } & {
    '/androidpublisher/v3/applications/:packageName/purchases/subscriptionsv2/tokens/:token': {
      $get: {
        input: { param: { packageName: string; token: string } } & {
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
        output: SubscriptionPurchaseV2
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/androidpublisher/v3/applications/:packageName/purchases/voidedpurchases': {
      $get: {
        input: { param: { packageName: string } } & {
          query: {
            endTime?: string | undefined
            maxResults?: number | undefined
            startIndex?: number | undefined
            startTime?: string | undefined
            token?: string | undefined
            type?: number | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
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
        output: VoidedPurchasesListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/androidpublisher/v3/applications/:packageName/reviews': {
      $get: {
        input: { param: { packageName: string } } & {
          query: {
            maxResults?: number | undefined
            startIndex?: number | undefined
            token?: string | undefined
            translationLanguage?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
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
        output: ReviewsListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/androidpublisher/v3/applications/:packageName/reviews/:reviewId': {
      $get: {
        input: { param: { packageName: string; reviewId: string } } & {
          query: {
            translationLanguage?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
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
        output: Review
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/androidpublisher/v3/applications/:packageName/reviews/:reviewId:reply': {
      $post: {
        input: { param: { packageName: string; reviewId: string } } & {
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
        } & { json: ReviewsReplyRequest }
        output: ReviewsReplyResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/androidpublisher/v3/applications/:packageName/subscriptions': {
      $get: {
        input: { param: { packageName: string } } & {
          query: {
            pageSize?: number | undefined
            pageToken?: string | undefined
            showArchived?: boolean | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
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
        output: ListSubscriptionsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { packageName: string } } & {
          query: {
            productId?: string | undefined
            'regionsVersion.version'?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: Subscription }
        output: Subscription
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/androidpublisher/v3/applications/:packageName/subscriptions/:productId': {
      $delete: {
        input: { param: { packageName: string; productId: string } } & {
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
        input: { param: { packageName: string; productId: string } } & {
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
        output: Subscription
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { packageName: string; productId: string } } & {
          query: {
            'regionsVersion.version'?: string | undefined
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
        } & { json: Subscription }
        output: Subscription
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/androidpublisher/v3/applications/:packageName/subscriptions/:productId/basePlans/:basePlanId': {
      $delete: {
        input: { param: { packageName: string; productId: string; basePlanId: string } } & {
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
    }
  } & {
    '/androidpublisher/v3/applications/:packageName/subscriptions/:productId/basePlans/:basePlanId/offers': {
      $get: {
        input: { param: { packageName: string; productId: string; basePlanId: string } } & {
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
        output: ListSubscriptionOffersResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { packageName: string; productId: string; basePlanId: string } } & {
          query: {
            offerId?: string | undefined
            'regionsVersion.version'?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: SubscriptionOffer }
        output: SubscriptionOffer
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/androidpublisher/v3/applications/:packageName/subscriptions/:productId/basePlans/:basePlanId/offers/:offerId': {
      $delete: {
        input: {
          param: { packageName: string; productId: string; basePlanId: string; offerId: string }
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
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: {
          param: { packageName: string; productId: string; basePlanId: string; offerId: string }
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
        output: SubscriptionOffer
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: {
          param: { packageName: string; productId: string; basePlanId: string; offerId: string }
        } & {
          query: {
            'regionsVersion.version'?: string | undefined
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
        } & { json: SubscriptionOffer }
        output: SubscriptionOffer
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/androidpublisher/v3/applications/:packageName/subscriptions/:productId/basePlans/:basePlanId/offers/:offerId:activate': {
      $post: {
        input: {
          param: { packageName: string; productId: string; basePlanId: string; offerId: string }
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
        } & { json: ActivateSubscriptionOfferRequest }
        output: SubscriptionOffer
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/androidpublisher/v3/applications/:packageName/subscriptions/:productId/basePlans/:basePlanId/offers/:offerId:deactivate': {
      $post: {
        input: {
          param: { packageName: string; productId: string; basePlanId: string; offerId: string }
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
        } & { json: DeactivateSubscriptionOfferRequest }
        output: SubscriptionOffer
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/androidpublisher/v3/applications/:packageName/subscriptions/:productId/basePlans/:basePlanId:activate': {
      $post: {
        input: { param: { packageName: string; productId: string; basePlanId: string } } & {
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
        } & { json: ActivateBasePlanRequest }
        output: Subscription
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/androidpublisher/v3/applications/:packageName/subscriptions/:productId/basePlans/:basePlanId:deactivate': {
      $post: {
        input: { param: { packageName: string; productId: string; basePlanId: string } } & {
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
        } & { json: DeactivateBasePlanRequest }
        output: Subscription
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/androidpublisher/v3/applications/:packageName/subscriptions/:productId/basePlans/:basePlanId:migratePrices': {
      $post: {
        input: { param: { packageName: string; productId: string; basePlanId: string } } & {
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
        } & { json: MigrateBasePlanPricesRequest }
        output: MigrateBasePlanPricesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/androidpublisher/v3/applications/:packageName/subscriptions/:productId:archive': {
      $post: {
        input: { param: { packageName: string; productId: string } } & {
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
        } & { json: ArchiveSubscriptionRequest }
        output: Subscription
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/androidpublisher/v3/applications/:packageName/systemApks/:versionCode/variants': {
      $get: {
        input: { param: { packageName: string; versionCode: string } } & {
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
        output: SystemApksListResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { packageName: string; versionCode: string } } & {
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
        } & { json: Variant }
        output: Variant
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/androidpublisher/v3/applications/:packageName/systemApks/:versionCode/variants/:variantId': {
      $get: {
        input: { param: { packageName: string; versionCode: string; variantId: number } } & {
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
        output: Variant
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/androidpublisher/v3/applications/:packageName/systemApks/:versionCode/variants/:variantId:download': {
      $get: {
        input: { param: { packageName: string; versionCode: string; variantId: number } } & {
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
    }
  } & {
    '/androidpublisher/v3/:name': {
      $delete: {
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
        output: {}
        outputFormat: string
        status: 200
      }
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
        output: ExternalTransaction
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { name: string } } & {
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
    '/androidpublisher/v3/:name:refund': {
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
        } & { json: RefundExternalTransactionRequest }
        output: ExternalTransaction
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/androidpublisher/v3/:parent/externalTransactions': {
      $post: {
        input: { param: { parent: string } } & {
          query: {
            externalTransactionId?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: ExternalTransaction }
        output: ExternalTransaction
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/androidpublisher/v3/:parent/grants': {
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
        } & { json: Grant }
        output: Grant
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/androidpublisher/v3/:parent/users': {
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
        output: ListUsersResponse
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
        } & { json: User }
        output: User
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
