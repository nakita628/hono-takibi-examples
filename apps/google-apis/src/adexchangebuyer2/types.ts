type Client = {
  clientAccountId?: string | undefined
  clientName?: string | undefined
  entityId?: string | undefined
  entityName?: string | undefined
  entityType?:
    | 'ENTITY_TYPE_UNSPECIFIED'
    | 'ADVERTISER'
    | 'BRAND'
    | 'AGENCY'
    | 'ENTITY_TYPE_UNCLASSIFIED'
    | undefined
  partnerClientId?: string | undefined
  role?:
    | 'CLIENT_ROLE_UNSPECIFIED'
    | 'CLIENT_DEAL_VIEWER'
    | 'CLIENT_DEAL_NEGOTIATOR'
    | 'CLIENT_DEAL_APPROVER'
    | undefined
  status?: 'CLIENT_STATUS_UNSPECIFIED' | 'DISABLED' | 'ACTIVE' | undefined
  visibleToSeller?: boolean | undefined
}
type ListClientsResponse = { clients?: Client[] | undefined; nextPageToken?: string | undefined }
type ClientUserInvitation = {
  clientAccountId?: string | undefined
  email?: string | undefined
  invitationId?: string | undefined
}
type ListClientUserInvitationsResponse = {
  invitations?: ClientUserInvitation[] | undefined
  nextPageToken?: string | undefined
}
type ClientUser = {
  clientAccountId?: string | undefined
  email?: string | undefined
  status?: 'USER_STATUS_UNSPECIFIED' | 'PENDING' | 'ACTIVE' | 'DISABLED' | undefined
  userId?: string | undefined
}
type ListClientUsersResponse = {
  nextPageToken?: string | undefined
  users?: ClientUser[] | undefined
}
type AdTechnologyProviders = {
  detectedProviderIds?: string[] | undefined
  hasUnidentifiedProvider?: boolean | undefined
}
type AppContext = { appTypes?: ('NATIVE' | 'WEB')[] | undefined }
type AuctionContext = { auctionTypes?: ('OPEN_AUCTION' | 'DIRECT_DEALS')[] | undefined }
type LocationContext = { geoCriteriaIds?: number[] | undefined }
type PlatformContext = { platforms?: ('DESKTOP' | 'ANDROID' | 'IOS')[] | undefined }
type SecurityContext = { securities?: ('INSECURE' | 'SSL')[] | undefined }
type ServingContext = {
  all?: 'SIMPLE_CONTEXT' | undefined
  appType?: AppContext | undefined
  auctionType?: AuctionContext | undefined
  location?: LocationContext | undefined
  platform?: PlatformContext | undefined
  securityType?: SecurityContext | undefined
}
type Correction = {
  contexts?: ServingContext[] | undefined
  details?: string[] | undefined
  type?:
    | 'CORRECTION_TYPE_UNSPECIFIED'
    | 'VENDOR_IDS_ADDED'
    | 'SSL_ATTRIBUTE_REMOVED'
    | 'FLASH_FREE_ATTRIBUTE_REMOVED'
    | 'FLASH_FREE_ATTRIBUTE_ADDED'
    | 'REQUIRED_ATTRIBUTE_ADDED'
    | 'REQUIRED_VENDOR_ADDED'
    | 'SSL_ATTRIBUTE_ADDED'
    | 'IN_BANNER_VIDEO_ATTRIBUTE_ADDED'
    | 'MRAID_ATTRIBUTE_ADDED'
    | 'FLASH_ATTRIBUTE_REMOVED'
    | 'VIDEO_IN_SNIPPET_ATTRIBUTE_ADDED'
    | undefined
}
type HtmlContent = {
  height?: number | undefined
  snippet?: string | undefined
  width?: number | undefined
}
type Image = { height?: number | undefined; url?: string | undefined; width?: number | undefined }
type NativeContent = {
  advertiserName?: string | undefined
  appIcon?: Image | undefined
  body?: string | undefined
  callToAction?: string | undefined
  clickLinkUrl?: string | undefined
  clickTrackingUrl?: string | undefined
  headline?: string | undefined
  image?: Image | undefined
  logo?: Image | undefined
  priceDisplayText?: string | undefined
  starRating?: number | undefined
  storeUrl?: string | undefined
  videoUrl?: string | undefined
}
type Disapproval = {
  details?: string[] | undefined
  reason?:
    | 'LENGTH_OF_IMAGE_ANIMATION'
    | 'BROKEN_URL'
    | 'MEDIA_NOT_FUNCTIONAL'
    | 'INVALID_FOURTH_PARTY_CALL'
    | 'INCORRECT_REMARKETING_DECLARATION'
    | 'LANDING_PAGE_ERROR'
    | 'AD_SIZE_DOES_NOT_MATCH_AD_SLOT'
    | 'NO_BORDER'
    | 'FOURTH_PARTY_BROWSER_COOKIES'
    | 'LSO_OBJECTS'
    | 'BLANK_CREATIVE'
    | 'DESTINATION_URLS_UNDECLARED'
    | 'PROBLEM_WITH_CLICK_MACRO'
    | 'INCORRECT_AD_TECHNOLOGY_DECLARATION'
    | 'INCORRECT_DESTINATION_URL_DECLARATION'
    | 'EXPANDABLE_INCORRECT_DIRECTION'
    | 'EXPANDABLE_DIRECTION_NOT_SUPPORTED'
    | 'EXPANDABLE_INVALID_VENDOR'
    | 'EXPANDABLE_FUNCTIONALITY'
    | 'VIDEO_INVALID_VENDOR'
    | 'VIDEO_UNSUPPORTED_LENGTH'
    | 'VIDEO_UNSUPPORTED_FORMAT'
    | 'VIDEO_FUNCTIONALITY'
    | 'LANDING_PAGE_DISABLED'
    | 'MALWARE_SUSPECTED'
    | 'ADULT_IMAGE_OR_VIDEO'
    | 'INACCURATE_AD_TEXT'
    | 'COUNTERFEIT_DESIGNER_GOODS'
    | 'POP_UP'
    | 'INVALID_RTB_PROTOCOL_USAGE'
    | 'RAW_IP_ADDRESS_IN_SNIPPET'
    | 'UNACCEPTABLE_CONTENT_SOFTWARE'
    | 'UNAUTHORIZED_COOKIE_ON_GOOGLE_DOMAIN'
    | 'UNDECLARED_FLASH_OBJECTS'
    | 'INVALID_SSL_DECLARATION'
    | 'DIRECT_DOWNLOAD_IN_AD'
    | 'MAXIMUM_DOWNLOAD_SIZE_EXCEEDED'
    | 'DESTINATION_URL_SITE_NOT_CRAWLABLE'
    | 'BAD_URL_LEGAL_DISAPPROVAL'
    | 'PHARMA_GAMBLING_ALCOHOL_NOT_ALLOWED'
    | 'DYNAMIC_DNS_AT_DESTINATION_URL'
    | 'POOR_IMAGE_OR_VIDEO_QUALITY'
    | 'UNACCEPTABLE_IMAGE_CONTENT'
    | 'INCORRECT_IMAGE_LAYOUT'
    | 'IRRELEVANT_IMAGE_OR_VIDEO'
    | 'DESTINATION_SITE_DOES_NOT_ALLOW_GOING_BACK'
    | 'MISLEADING_CLAIMS_IN_AD'
    | 'RESTRICTED_PRODUCTS'
    | 'UNACCEPTABLE_CONTENT'
    | 'AUTOMATED_AD_CLICKING'
    | 'INVALID_URL_PROTOCOL'
    | 'UNDECLARED_RESTRICTED_CONTENT'
    | 'INVALID_REMARKETING_LIST_USAGE'
    | 'DESTINATION_SITE_NOT_CRAWLABLE_ROBOTS_TXT'
    | 'CLICK_TO_DOWNLOAD_NOT_AN_APP'
    | 'INACCURATE_REVIEW_EXTENSION'
    | 'SEXUALLY_EXPLICIT_CONTENT'
    | 'GAINING_AN_UNFAIR_ADVANTAGE'
    | 'GAMING_THE_GOOGLE_NETWORK'
    | 'DANGEROUS_PRODUCTS_KNIVES'
    | 'DANGEROUS_PRODUCTS_EXPLOSIVES'
    | 'DANGEROUS_PRODUCTS_GUNS'
    | 'DANGEROUS_PRODUCTS_DRUGS'
    | 'DANGEROUS_PRODUCTS_TOBACCO'
    | 'DANGEROUS_PRODUCTS_WEAPONS'
    | 'UNCLEAR_OR_IRRELEVANT_AD'
    | 'PROFESSIONAL_STANDARDS'
    | 'DYSFUNCTIONAL_PROMOTION'
    | 'INVALID_INTEREST_BASED_AD'
    | 'MISUSE_OF_PERSONAL_INFORMATION'
    | 'OMISSION_OF_RELEVANT_INFORMATION'
    | 'UNAVAILABLE_PROMOTIONS'
    | 'MISLEADING_PROMOTIONS'
    | 'INAPPROPRIATE_CONTENT'
    | 'SENSITIVE_EVENTS'
    | 'SHOCKING_CONTENT'
    | 'ENABLING_DISHONEST_BEHAVIOR'
    | 'TECHNICAL_REQUIREMENTS'
    | 'RESTRICTED_POLITICAL_CONTENT'
    | 'UNSUPPORTED_CONTENT'
    | 'INVALID_BIDDING_METHOD'
    | 'VIDEO_TOO_LONG'
    | 'VIOLATES_JAPANESE_PHARMACY_LAW'
    | 'UNACCREDITED_PET_PHARMACY'
    | 'ABORTION'
    | 'CONTRACEPTIVES'
    | 'NEED_CERTIFICATES_TO_ADVERTISE_IN_CHINA'
    | 'KCDSP_REGISTRATION'
    | 'NOT_FAMILY_SAFE'
    | 'CLINICAL_TRIAL_RECRUITMENT'
    | 'MAXIMUM_NUMBER_OF_HTTP_CALLS_EXCEEDED'
    | 'MAXIMUM_NUMBER_OF_COOKIES_EXCEEDED'
    | 'PERSONAL_LOANS'
    | 'UNSUPPORTED_FLASH_CONTENT'
    | 'MISUSE_BY_OMID_SCRIPT'
    | 'NON_WHITELISTED_OMID_VENDOR'
    | 'DESTINATION_EXPERIENCE'
    | 'UNSUPPORTED_LANGUAGE'
    | 'NON_SSL_COMPLIANT'
    | 'TEMPORARY_PAUSE'
    | 'BAIL_BONDS'
    | 'EXPERIMENTAL_MEDICAL_TREATMENT'
    | undefined
}
type ServingRestriction = {
  contexts?: ServingContext[] | undefined
  disapproval?: Disapproval | undefined
  disapprovalReasons?: Disapproval[] | undefined
  status?: 'STATUS_UNSPECIFIED' | 'DISAPPROVAL' | 'PENDING_REVIEW' | undefined
}
type VideoContent = { videoUrl?: string | undefined; videoVastXml?: string | undefined }
type Creative = {
  accountId?: string | undefined
  adChoicesDestinationUrl?: string | undefined
  adTechnologyProviders?: AdTechnologyProviders | undefined
  advertiserName?: string | undefined
  agencyId?: string | undefined
  apiUpdateTime?: string | undefined
  attributes?:
    | (
        | 'ATTRIBUTE_UNSPECIFIED'
        | 'IMAGE_RICH_MEDIA'
        | 'ADOBE_FLASH_FLV'
        | 'IS_TAGGED'
        | 'IS_COOKIE_TARGETED'
        | 'IS_USER_INTEREST_TARGETED'
        | 'EXPANDING_DIRECTION_NONE'
        | 'EXPANDING_DIRECTION_UP'
        | 'EXPANDING_DIRECTION_DOWN'
        | 'EXPANDING_DIRECTION_LEFT'
        | 'EXPANDING_DIRECTION_RIGHT'
        | 'EXPANDING_DIRECTION_UP_LEFT'
        | 'EXPANDING_DIRECTION_UP_RIGHT'
        | 'EXPANDING_DIRECTION_DOWN_LEFT'
        | 'EXPANDING_DIRECTION_DOWN_RIGHT'
        | 'CREATIVE_TYPE_HTML'
        | 'CREATIVE_TYPE_VAST_VIDEO'
        | 'EXPANDING_DIRECTION_UP_OR_DOWN'
        | 'EXPANDING_DIRECTION_LEFT_OR_RIGHT'
        | 'EXPANDING_DIRECTION_ANY_DIAGONAL'
        | 'EXPANDING_ACTION_ROLLOVER_TO_EXPAND'
        | 'INSTREAM_VAST_VIDEO_TYPE_VPAID_FLASH'
        | 'RICH_MEDIA_CAPABILITY_TYPE_MRAID'
        | 'RICH_MEDIA_CAPABILITY_TYPE_FLASH'
        | 'RICH_MEDIA_CAPABILITY_TYPE_HTML5'
        | 'SKIPPABLE_INSTREAM_VIDEO'
        | 'RICH_MEDIA_CAPABILITY_TYPE_SSL'
        | 'RICH_MEDIA_CAPABILITY_TYPE_NON_SSL'
        | 'RICH_MEDIA_CAPABILITY_TYPE_INTERSTITIAL'
        | 'NON_SKIPPABLE_INSTREAM_VIDEO'
        | 'NATIVE_ELIGIBILITY_ELIGIBLE'
        | 'NON_VPAID'
        | 'NATIVE_ELIGIBILITY_NOT_ELIGIBLE'
        | 'ANY_INTERSTITIAL'
        | 'NON_INTERSTITIAL'
        | 'IN_BANNER_VIDEO'
        | 'RENDERING_SIZELESS_ADX'
        | 'OMSDK_1_0'
      )[]
    | undefined
  clickThroughUrls?: string[] | undefined
  corrections?: Correction[] | undefined
  creativeId?: string | undefined
  dealsStatus?:
    | 'STATUS_UNSPECIFIED'
    | 'NOT_CHECKED'
    | 'CONDITIONALLY_APPROVED'
    | 'APPROVED'
    | 'DISAPPROVED'
    | 'PENDING_REVIEW'
    | 'STATUS_TYPE_UNSPECIFIED'
    | undefined
  declaredClickThroughUrls?: string[] | undefined
  detectedAdvertiserIds?: string[] | undefined
  detectedDomains?: string[] | undefined
  detectedLanguages?: string[] | undefined
  detectedProductCategories?: number[] | undefined
  detectedSensitiveCategories?: number[] | undefined
  html?: HtmlContent | undefined
  impressionTrackingUrls?: string[] | undefined
  native?: NativeContent | undefined
  openAuctionStatus?:
    | 'STATUS_UNSPECIFIED'
    | 'NOT_CHECKED'
    | 'CONDITIONALLY_APPROVED'
    | 'APPROVED'
    | 'DISAPPROVED'
    | 'PENDING_REVIEW'
    | 'STATUS_TYPE_UNSPECIFIED'
    | undefined
  restrictedCategories?: ('NO_RESTRICTED_CATEGORIES' | 'ALCOHOL')[] | undefined
  servingRestrictions?: ServingRestriction[] | undefined
  vendorIds?: number[] | undefined
  version?: number | undefined
  video?: VideoContent | undefined
}
type ListCreativesResponse = {
  creatives?: Creative[] | undefined
  nextPageToken?: string | undefined
}
type CreativeDealAssociation = {
  accountId?: string | undefined
  creativeId?: string | undefined
  dealsId?: string | undefined
}
type ListDealAssociationsResponse = {
  associations?: CreativeDealAssociation[] | undefined
  nextPageToken?: string | undefined
}
type AddDealAssociationRequest = { association?: CreativeDealAssociation | undefined }
type Empty = { [x: string]: unknown }
type RemoveDealAssociationRequest = { association?: CreativeDealAssociation | undefined }
type StopWatchingCreativeRequest = { [x: string]: unknown }
type WatchCreativeRequest = { topic?: string | undefined }
type Buyer = { accountId?: string | undefined }
type ContactInformation = { email?: string | undefined; name?: string | undefined }
type PrivateData = { referenceId?: string | undefined }
type AdSize = {
  height?: string | undefined
  sizeType?: 'SIZE_TYPE_UNSPECIFIED' | 'PIXEL' | 'INTERSTITIAL' | 'NATIVE' | 'FLUID' | undefined
  width?: string | undefined
}
type CreativeSpecification = {
  creativeCompanionSizes?: AdSize[] | undefined
  creativeSize?: AdSize | undefined
}
type CreativeRestrictions = {
  creativeFormat?: 'CREATIVE_FORMAT_UNSPECIFIED' | 'DISPLAY' | 'VIDEO' | undefined
  creativeSpecifications?: CreativeSpecification[] | undefined
  skippableAdType?:
    | 'SKIPPABLE_AD_TYPE_UNSPECIFIED'
    | 'SKIPPABLE'
    | 'INSTREAM_SELECT'
    | 'NOT_SKIPPABLE'
    | undefined
}
type DealPauseStatus = {
  buyerPauseReason?: string | undefined
  firstPausedBy?: 'BUYER_SELLER_ROLE_UNSPECIFIED' | 'BUYER' | 'SELLER' | undefined
  hasBuyerPaused?: boolean | undefined
  hasSellerPaused?: boolean | undefined
  sellerPauseReason?: string | undefined
}
type DealServingMetadata = { dealPauseStatus?: DealPauseStatus | undefined }
type Money = {
  currencyCode?: string | undefined
  nanos?: number | undefined
  units?: string | undefined
}
type Price = {
  amount?: Money | undefined
  pricingType?: 'PRICING_TYPE_UNSPECIFIED' | 'COST_PER_MILLE' | 'COST_PER_DAY' | undefined
}
type PricePerBuyer = {
  advertiserIds?: string[] | undefined
  buyer?: Buyer | undefined
  price?: Price | undefined
}
type GuaranteedFixedPriceTerms = {
  fixedPrices?: PricePerBuyer[] | undefined
  guaranteedImpressions?: string | undefined
  guaranteedLooks?: string | undefined
  impressionCap?: string | undefined
  minimumDailyLooks?: string | undefined
  percentShareOfVoice?: string | undefined
  reservationType?: 'RESERVATION_TYPE_UNSPECIFIED' | 'STANDARD' | 'SPONSORSHIP' | undefined
}
type NonGuaranteedAuctionTerms = {
  autoOptimizePrivateAuction?: boolean | undefined
  reservePricesPerBuyer?: PricePerBuyer[] | undefined
}
type NonGuaranteedFixedPriceTerms = { fixedPrices?: PricePerBuyer[] | undefined }
type DealTerms = {
  brandingType?: 'BRANDING_TYPE_UNSPECIFIED' | 'BRANDED' | 'SEMI_TRANSPARENT' | undefined
  description?: string | undefined
  estimatedGrossSpend?: Price | undefined
  estimatedImpressionsPerDay?: string | undefined
  guaranteedFixedPriceTerms?: GuaranteedFixedPriceTerms | undefined
  nonGuaranteedAuctionTerms?: NonGuaranteedAuctionTerms | undefined
  nonGuaranteedFixedPriceTerms?: NonGuaranteedFixedPriceTerms | undefined
  sellerTimeZone?: string | undefined
}
type FrequencyCap = {
  maxImpressions?: number | undefined
  numTimeUnits?: number | undefined
  timeUnitType?:
    | 'TIME_UNIT_TYPE_UNSPECIFIED'
    | 'MINUTE'
    | 'HOUR'
    | 'DAY'
    | 'WEEK'
    | 'MONTH'
    | 'LIFETIME'
    | 'POD'
    | 'STREAM'
    | undefined
}
type DeliveryControl = {
  creativeBlockingLevel?:
    | 'CREATIVE_BLOCKING_LEVEL_UNSPECIFIED'
    | 'PUBLISHER_BLOCKING_RULES'
    | 'ADX_POLICY_BLOCKING_ONLY'
    | undefined
  deliveryRateType?:
    | 'DELIVERY_RATE_TYPE_UNSPECIFIED'
    | 'EVENLY'
    | 'FRONT_LOADED'
    | 'AS_FAST_AS_POSSIBLE'
    | undefined
  frequencyCaps?: FrequencyCap[] | undefined
}
type CriteriaTargeting = {
  excludedCriteriaIds?: string[] | undefined
  targetedCriteriaIds?: string[] | undefined
}
type InventorySizeTargeting = {
  excludedInventorySizes?: AdSize[] | undefined
  targetedInventorySizes?: AdSize[] | undefined
}
type FirstPartyMobileApplicationTargeting = {
  excludedAppIds?: string[] | undefined
  targetedAppIds?: string[] | undefined
}
type MobileApplicationTargeting = {
  firstPartyTargeting?: FirstPartyMobileApplicationTargeting | undefined
}
type UrlTargeting = { excludedUrls?: string[] | undefined; targetedUrls?: string[] | undefined }
type PlacementTargeting = {
  mobileApplicationTargeting?: MobileApplicationTargeting | undefined
  urlTargeting?: UrlTargeting | undefined
}
type OperatingSystemTargeting = {
  operatingSystemCriteria?: CriteriaTargeting | undefined
  operatingSystemVersionCriteria?: CriteriaTargeting | undefined
}
type TechnologyTargeting = {
  deviceCapabilityTargeting?: CriteriaTargeting | undefined
  deviceCategoryTargeting?: CriteriaTargeting | undefined
  operatingSystemTargeting?: OperatingSystemTargeting | undefined
}
type VideoTargeting = {
  excludedPositionTypes?:
    | ('POSITION_TYPE_UNSPECIFIED' | 'PREROLL' | 'MIDROLL' | 'POSTROLL')[]
    | undefined
  targetedPositionTypes?:
    | ('POSITION_TYPE_UNSPECIFIED' | 'PREROLL' | 'MIDROLL' | 'POSTROLL')[]
    | undefined
}
type MarketplaceTargeting = {
  geoTargeting?: CriteriaTargeting | undefined
  inventorySizeTargeting?: InventorySizeTargeting | undefined
  placementTargeting?: PlacementTargeting | undefined
  technologyTargeting?: TechnologyTargeting | undefined
  videoTargeting?: VideoTargeting | undefined
}
type Size = { height?: number | undefined; width?: number | undefined }
type CreativeSize = {
  allowedFormats?: ('UNKNOWN' | 'AUDIO')[] | undefined
  companionSizes?: Size[] | undefined
  creativeSizeType?:
    | 'CREATIVE_SIZE_TYPE_UNSPECIFIED'
    | 'REGULAR'
    | 'INTERSTITIAL'
    | 'VIDEO'
    | 'NATIVE'
    | undefined
  nativeTemplate?:
    | 'UNKNOWN_NATIVE_TEMPLATE'
    | 'NATIVE_CONTENT_AD'
    | 'NATIVE_APP_INSTALL_AD'
    | 'NATIVE_VIDEO_CONTENT_AD'
    | 'NATIVE_VIDEO_APP_INSTALL_AD'
    | undefined
  size?: Size | undefined
  skippableAdType?:
    | 'SKIPPABLE_AD_TYPE_UNSPECIFIED'
    | 'GENERIC'
    | 'INSTREAM_SELECT'
    | 'NOT_SKIPPABLE'
    | undefined
}
type TimeOfDay = {
  hours?: number | undefined
  minutes?: number | undefined
  nanos?: number | undefined
  seconds?: number | undefined
}
type DayPart = {
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
  endTime?: TimeOfDay | undefined
  startTime?: TimeOfDay | undefined
}
type DayPartTargeting = {
  dayParts?: DayPart[] | undefined
  timeZoneType?: 'TIME_ZONE_SOURCE_UNSPECIFIED' | 'PUBLISHER' | 'USER' | undefined
}
type TargetingValue = {
  creativeSizeValue?: CreativeSize | undefined
  dayPartTargetingValue?: DayPartTargeting | undefined
  longValue?: string | undefined
  stringValue?: string | undefined
}
type TargetingCriteria = {
  exclusions?: TargetingValue[] | undefined
  inclusions?: TargetingValue[] | undefined
  key?: string | undefined
}
type Deal = {
  availableEndTime?: string | undefined
  availableStartTime?: string | undefined
  buyerPrivateData?: PrivateData | undefined
  createProductId?: string | undefined
  createProductRevision?: string | undefined
  createTime?: string | undefined
  creativePreApprovalPolicy?:
    | 'CREATIVE_PRE_APPROVAL_POLICY_UNSPECIFIED'
    | 'SELLER_PRE_APPROVAL_REQUIRED'
    | 'SELLER_PRE_APPROVAL_NOT_REQUIRED'
    | undefined
  creativeRestrictions?: CreativeRestrictions | undefined
  creativeSafeFrameCompatibility?:
    | 'CREATIVE_SAFE_FRAME_COMPATIBILITY_UNSPECIFIED'
    | 'COMPATIBLE'
    | 'INCOMPATIBLE'
    | undefined
  dealId?: string | undefined
  dealServingMetadata?: DealServingMetadata | undefined
  dealTerms?: DealTerms | undefined
  deliveryControl?: DeliveryControl | undefined
  description?: string | undefined
  displayName?: string | undefined
  externalDealId?: string | undefined
  isSetupComplete?: boolean | undefined
  programmaticCreativeSource?:
    | 'PROGRAMMATIC_CREATIVE_SOURCE_UNSPECIFIED'
    | 'ADVERTISER'
    | 'PUBLISHER'
    | undefined
  proposalId?: string | undefined
  sellerContacts?: ContactInformation[] | undefined
  syndicationProduct?:
    | 'SYNDICATION_PRODUCT_UNSPECIFIED'
    | 'CONTENT'
    | 'MOBILE'
    | 'VIDEO'
    | 'GAMES'
    | undefined
  targeting?: MarketplaceTargeting | undefined
  targetingCriterion?: TargetingCriteria[] | undefined
  updateTime?: string | undefined
  webPropertyCode?: string | undefined
}
type Note = {
  createTime?: string | undefined
  creatorRole?: 'BUYER_SELLER_ROLE_UNSPECIFIED' | 'BUYER' | 'SELLER' | undefined
  note?: string | undefined
  noteId?: string | undefined
  proposalRevision?: string | undefined
}
type Seller = { accountId?: string | undefined; subAccountId?: string | undefined }
type Proposal = {
  billedBuyer?: Buyer | undefined
  buyer?: Buyer | undefined
  buyerContacts?: ContactInformation[] | undefined
  buyerPrivateData?: PrivateData | undefined
  deals?: Deal[] | undefined
  displayName?: string | undefined
  isRenegotiating?: boolean | undefined
  isSetupComplete?: boolean | undefined
  lastUpdaterOrCommentorRole?: 'BUYER_SELLER_ROLE_UNSPECIFIED' | 'BUYER' | 'SELLER' | undefined
  notes?: Note[] | undefined
  originatorRole?: 'BUYER_SELLER_ROLE_UNSPECIFIED' | 'BUYER' | 'SELLER' | undefined
  privateAuctionId?: string | undefined
  proposalId?: string | undefined
  proposalRevision?: string | undefined
  proposalState?:
    | 'PROPOSAL_STATE_UNSPECIFIED'
    | 'PROPOSED'
    | 'BUYER_ACCEPTED'
    | 'SELLER_ACCEPTED'
    | 'CANCELED'
    | 'FINALIZED'
    | undefined
  seller?: Seller | undefined
  sellerContacts?: ContactInformation[] | undefined
  termsAndConditions?: string | undefined
  updateTime?: string | undefined
}
type ListProposalsResponse = {
  nextPageToken?: string | undefined
  proposals?: Proposal[] | undefined
}
type PauseProposalDealsRequest = {
  externalDealIds?: string[] | undefined
  reason?: string | undefined
}
type ResumeProposalDealsRequest = { externalDealIds?: string[] | undefined }
type Product = {
  availableEndTime?: string | undefined
  availableStartTime?: string | undefined
  createTime?: string | undefined
  creatorContacts?: ContactInformation[] | undefined
  displayName?: string | undefined
  hasCreatorSignedOff?: boolean | undefined
  productId?: string | undefined
  productRevision?: string | undefined
  publisherProfileId?: string | undefined
  seller?: Seller | undefined
  syndicationProduct?:
    | 'SYNDICATION_PRODUCT_UNSPECIFIED'
    | 'CONTENT'
    | 'MOBILE'
    | 'VIDEO'
    | 'GAMES'
    | undefined
  targetingCriterion?: TargetingCriteria[] | undefined
  terms?: DealTerms | undefined
  updateTime?: string | undefined
  webPropertyCode?: string | undefined
}
type ListProductsResponse = { nextPageToken?: string | undefined; products?: Product[] | undefined }
type AcceptProposalRequest = { proposalRevision?: string | undefined }
type AddNoteRequest = { note?: Note | undefined }
type CancelNegotiationRequest = { [x: string]: unknown }
type CompleteSetupRequest = { [x: string]: unknown }
type PauseProposalRequest = { reason?: string | undefined }
type ResumeProposalRequest = { [x: string]: unknown }
type PublisherProfileMobileApplication = {
  appStore?:
    | 'APP_STORE_TYPE_UNSPECIFIED'
    | 'APPLE_ITUNES'
    | 'GOOGLE_PLAY'
    | 'ROKU'
    | 'AMAZON_FIRETV'
    | 'PLAYSTATION'
    | 'XBOX'
    | 'SAMSUNG_TV'
    | 'AMAZON'
    | 'OPPO'
    | 'SAMSUNG'
    | 'VIVO'
    | 'XIAOMI'
    | undefined
  externalAppId?: string | undefined
  name?: string | undefined
}
type PublisherProfile = {
  audienceDescription?: string | undefined
  buyerPitchStatement?: string | undefined
  directDealsContact?: string | undefined
  displayName?: string | undefined
  domains?: string[] | undefined
  googlePlusUrl?: string | undefined
  isParent?: boolean | undefined
  logoUrl?: string | undefined
  mediaKitUrl?: string | undefined
  mobileApps?: PublisherProfileMobileApplication[] | undefined
  overview?: string | undefined
  programmaticDealsContact?: string | undefined
  publisherProfileId?: string | undefined
  rateCardInfoUrl?: string | undefined
  samplePageUrl?: string | undefined
  seller?: Seller | undefined
  topHeadlines?: string[] | undefined
}
type ListPublisherProfilesResponse = {
  nextPageToken?: string | undefined
  publisherProfiles?: PublisherProfile[] | undefined
}
type MetricValue = { value?: string | undefined; variance?: string | undefined }
type TimeInterval = { endTime?: string | undefined; startTime?: string | undefined }
type RowDimensions = {
  publisherIdentifier?: string | undefined
  timeInterval?: TimeInterval | undefined
}
type BidMetricsRow = {
  bids?: MetricValue | undefined
  bidsInAuction?: MetricValue | undefined
  billedImpressions?: MetricValue | undefined
  impressionsWon?: MetricValue | undefined
  measurableImpressions?: MetricValue | undefined
  reachedQueries?: MetricValue | undefined
  rowDimensions?: RowDimensions | undefined
  viewableImpressions?: MetricValue | undefined
}
type ListBidMetricsResponse = {
  bidMetricsRows?: BidMetricsRow[] | undefined
  nextPageToken?: string | undefined
}
type CalloutStatusRow = {
  calloutStatusId?: number | undefined
  impressionCount?: MetricValue | undefined
  rowDimensions?: RowDimensions | undefined
}
type ListBidResponseErrorsResponse = {
  calloutStatusRows?: CalloutStatusRow[] | undefined
  nextPageToken?: string | undefined
}
type BidResponseWithoutBidsStatusRow = {
  impressionCount?: MetricValue | undefined
  rowDimensions?: RowDimensions | undefined
  status?:
    | 'STATUS_UNSPECIFIED'
    | 'RESPONSES_WITHOUT_BIDS'
    | 'RESPONSES_WITHOUT_BIDS_FOR_ACCOUNT'
    | 'RESPONSES_WITHOUT_BIDS_FOR_DEAL'
    | undefined
}
type ListBidResponsesWithoutBidsResponse = {
  bidResponseWithoutBidsStatusRows?: BidResponseWithoutBidsStatusRow[] | undefined
  nextPageToken?: string | undefined
}
type ListFilteredBidRequestsResponse = {
  calloutStatusRows?: CalloutStatusRow[] | undefined
  nextPageToken?: string | undefined
}
type CreativeStatusRow = {
  bidCount?: MetricValue | undefined
  creativeStatusId?: number | undefined
  rowDimensions?: RowDimensions | undefined
}
type ListFilteredBidsResponse = {
  creativeStatusRows?: CreativeStatusRow[] | undefined
  nextPageToken?: string | undefined
}
type FilteredBidCreativeRow = {
  bidCount?: MetricValue | undefined
  creativeId?: string | undefined
  rowDimensions?: RowDimensions | undefined
}
type ListCreativeStatusBreakdownByCreativeResponse = {
  filteredBidCreativeRows?: FilteredBidCreativeRow[] | undefined
  nextPageToken?: string | undefined
}
type FilteredBidDetailRow = {
  bidCount?: MetricValue | undefined
  detail?: string | undefined
  detailId?: number | undefined
  rowDimensions?: RowDimensions | undefined
}
type ListCreativeStatusBreakdownByDetailResponse = {
  detailType?:
    | 'DETAIL_TYPE_UNSPECIFIED'
    | 'CREATIVE_ATTRIBUTE'
    | 'VENDOR'
    | 'SENSITIVE_CATEGORY'
    | 'PRODUCT_CATEGORY'
    | 'DISAPPROVAL_REASON'
    | 'POLICY_TOPIC'
    | 'ATP_VENDOR'
    | 'VENDOR_DOMAIN'
    | 'GVL_ID'
    | undefined
  filteredBidDetailRows?: FilteredBidDetailRow[] | undefined
  nextPageToken?: string | undefined
}
type ImpressionMetricsRow = {
  availableImpressions?: MetricValue | undefined
  bidRequests?: MetricValue | undefined
  inventoryMatches?: MetricValue | undefined
  responsesWithBids?: MetricValue | undefined
  rowDimensions?: RowDimensions | undefined
  successfulResponses?: MetricValue | undefined
}
type ListImpressionMetricsResponse = {
  impressionMetricsRows?: ImpressionMetricsRow[] | undefined
  nextPageToken?: string | undefined
}
type ListLosingBidsResponse = {
  creativeStatusRows?: CreativeStatusRow[] | undefined
  nextPageToken?: string | undefined
}
type NonBillableWinningBidStatusRow = {
  bidCount?: MetricValue | undefined
  rowDimensions?: RowDimensions | undefined
  status?:
    | 'STATUS_UNSPECIFIED'
    | 'AD_NOT_RENDERED'
    | 'INVALID_IMPRESSION'
    | 'FATAL_VAST_ERROR'
    | 'LOST_IN_MEDIATION'
    | undefined
}
type ListNonBillableWinningBidsResponse = {
  nextPageToken?: string | undefined
  nonBillableWinningBidStatusRows?: NonBillableWinningBidStatusRow[] | undefined
}
type Date = { day?: number | undefined; month?: number | undefined; year?: number | undefined }
type AbsoluteDateRange = { endDate?: Date | undefined; startDate?: Date | undefined }
type RealtimeTimeRange = { startTimestamp?: string | undefined }
type RelativeDateRange = { durationDays?: number | undefined; offsetDays?: number | undefined }
type FilterSet = {
  absoluteDateRange?: AbsoluteDateRange | undefined
  breakdownDimensions?: ('BREAKDOWN_DIMENSION_UNSPECIFIED' | 'PUBLISHER_IDENTIFIER')[] | undefined
  creativeId?: string | undefined
  dealId?: string | undefined
  environment?: 'ENVIRONMENT_UNSPECIFIED' | 'WEB' | 'APP' | undefined
  format?:
    | 'FORMAT_UNSPECIFIED'
    | 'NATIVE_DISPLAY'
    | 'NATIVE_VIDEO'
    | 'NON_NATIVE_DISPLAY'
    | 'NON_NATIVE_VIDEO'
    | undefined
  formats?:
    | (
        | 'FORMAT_UNSPECIFIED'
        | 'NATIVE_DISPLAY'
        | 'NATIVE_VIDEO'
        | 'NON_NATIVE_DISPLAY'
        | 'NON_NATIVE_VIDEO'
      )[]
    | undefined
  name?: string | undefined
  platforms?: ('PLATFORM_UNSPECIFIED' | 'DESKTOP' | 'TABLET' | 'MOBILE')[] | undefined
  publisherIdentifiers?: string[] | undefined
  realtimeTimeRange?: RealtimeTimeRange | undefined
  relativeDateRange?: RelativeDateRange | undefined
  sellerNetworkIds?: number[] | undefined
  timeSeriesGranularity?: 'TIME_SERIES_GRANULARITY_UNSPECIFIED' | 'HOURLY' | 'DAILY' | undefined
}
type ListFilterSetsResponse = {
  filterSets?: FilterSet[] | undefined
  nextPageToken?: string | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v2beta1/accounts/:accountId/clients': {
      $get: {
        input: { param: { accountId: string } } & {
          query: {
            pageSize?: number | undefined
            pageToken?: string | undefined
            partnerClientId?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: ListClientsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { accountId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: Client }
        output: Client
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2beta1/accounts/:accountId/clients/:clientAccountId': {
      $get: {
        input: { param: { accountId: string; clientAccountId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: Client
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { accountId: string; clientAccountId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: Client }
        output: Client
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2beta1/accounts/:accountId/clients/:clientAccountId/invitations': {
      $get: {
        input: { param: { accountId: string; clientAccountId: string } } & {
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
        output: ListClientUserInvitationsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { accountId: string; clientAccountId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: ClientUserInvitation }
        output: ClientUserInvitation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2beta1/accounts/:accountId/clients/:clientAccountId/invitations/:invitationId': {
      $get: {
        input: { param: { accountId: string; clientAccountId: string; invitationId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: ClientUserInvitation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2beta1/accounts/:accountId/clients/:clientAccountId/users': {
      $get: {
        input: { param: { accountId: string; clientAccountId: string } } & {
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
        output: ListClientUsersResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2beta1/accounts/:accountId/clients/:clientAccountId/users/:userId': {
      $get: {
        input: { param: { accountId: string; clientAccountId: string; userId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: ClientUser
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { accountId: string; clientAccountId: string; userId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: ClientUser }
        output: ClientUser
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2beta1/accounts/:accountId/creatives': {
      $get: {
        input: { param: { accountId: string } } & {
          query: {
            pageSize?: number | undefined
            pageToken?: string | undefined
            query?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
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
        input: { param: { accountId: string } } & {
          query: {
            duplicateIdMode?: 'NO_DUPLICATES' | 'FORCE_ENABLE_DUPLICATE_IDS' | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
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
    '/v2beta1/accounts/:accountId/creatives/:creativeId': {
      $get: {
        input: { param: { accountId: string; creativeId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
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
      $put: {
        input: { param: { accountId: string; creativeId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
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
    '/v2beta1/accounts/:accountId/creatives/:creativeId/dealAssociations': {
      $get: {
        input: { param: { accountId: string; creativeId: string } } & {
          query: {
            pageSize?: number | undefined
            pageToken?: string | undefined
            query?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: ListDealAssociationsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2beta1/accounts/:accountId/creatives/:creativeId/dealAssociations:add': {
      $post: {
        input: { param: { accountId: string; creativeId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: AddDealAssociationRequest }
        output: Empty
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2beta1/accounts/:accountId/creatives/:creativeId/dealAssociations:remove': {
      $post: {
        input: { param: { accountId: string; creativeId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: RemoveDealAssociationRequest }
        output: Empty
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2beta1/accounts/:accountId/creatives/:creativeId:stopWatching': {
      $post: {
        input: { param: { accountId: string; creativeId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: StopWatchingCreativeRequest }
        output: Empty
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2beta1/accounts/:accountId/creatives/:creativeId:watch': {
      $post: {
        input: { param: { accountId: string; creativeId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: WatchCreativeRequest }
        output: Empty
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2beta1/accounts/:accountId/finalizedProposals': {
      $get: {
        input: { param: { accountId: string } } & {
          query: {
            filter?: string | undefined
            filterSyntax?: 'FILTER_SYNTAX_UNSPECIFIED' | 'PQL' | 'LIST_FILTER' | undefined
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
        output: ListProposalsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2beta1/accounts/:accountId/finalizedProposals/:proposalId:pause': {
      $post: {
        input: { param: { accountId: string; proposalId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: PauseProposalDealsRequest }
        output: Proposal
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2beta1/accounts/:accountId/finalizedProposals/:proposalId:resume': {
      $post: {
        input: { param: { accountId: string; proposalId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: ResumeProposalDealsRequest }
        output: Proposal
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2beta1/accounts/:accountId/products': {
      $get: {
        input: { param: { accountId: string } } & {
          query: {
            filter?: string | undefined
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
        output: ListProductsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2beta1/accounts/:accountId/products/:productId': {
      $get: {
        input: { param: { accountId: string; productId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: Product
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2beta1/accounts/:accountId/proposals': {
      $get: {
        input: { param: { accountId: string } } & {
          query: {
            filter?: string | undefined
            filterSyntax?: 'FILTER_SYNTAX_UNSPECIFIED' | 'PQL' | 'LIST_FILTER' | undefined
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
        output: ListProposalsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { accountId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: Proposal }
        output: Proposal
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2beta1/accounts/:accountId/proposals/:proposalId': {
      $get: {
        input: { param: { accountId: string; proposalId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: Proposal
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { accountId: string; proposalId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: Proposal }
        output: Proposal
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2beta1/accounts/:accountId/proposals/:proposalId:accept': {
      $post: {
        input: { param: { accountId: string; proposalId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: AcceptProposalRequest }
        output: Proposal
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2beta1/accounts/:accountId/proposals/:proposalId:addNote': {
      $post: {
        input: { param: { accountId: string; proposalId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: AddNoteRequest }
        output: Note
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2beta1/accounts/:accountId/proposals/:proposalId:cancelNegotiation': {
      $post: {
        input: { param: { accountId: string; proposalId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: CancelNegotiationRequest }
        output: Proposal
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2beta1/accounts/:accountId/proposals/:proposalId:completeSetup': {
      $post: {
        input: { param: { accountId: string; proposalId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: CompleteSetupRequest }
        output: Proposal
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2beta1/accounts/:accountId/proposals/:proposalId:pause': {
      $post: {
        input: { param: { accountId: string; proposalId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: PauseProposalRequest }
        output: Proposal
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2beta1/accounts/:accountId/proposals/:proposalId:resume': {
      $post: {
        input: { param: { accountId: string; proposalId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: ResumeProposalRequest }
        output: Proposal
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2beta1/accounts/:accountId/publisherProfiles': {
      $get: {
        input: { param: { accountId: string } } & {
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
        output: ListPublisherProfilesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2beta1/accounts/:accountId/publisherProfiles/:publisherProfileId': {
      $get: {
        input: { param: { accountId: string; publisherProfileId: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: PublisherProfile
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2beta1/:filterSetName/bidMetrics': {
      $get: {
        input: { param: { filterSetName: string } } & {
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
        output: ListBidMetricsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2beta1/:filterSetName/bidResponseErrors': {
      $get: {
        input: { param: { filterSetName: string } } & {
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
        output: ListBidResponseErrorsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2beta1/:filterSetName/bidResponsesWithoutBids': {
      $get: {
        input: { param: { filterSetName: string } } & {
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
        output: ListBidResponsesWithoutBidsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2beta1/:filterSetName/filteredBidRequests': {
      $get: {
        input: { param: { filterSetName: string } } & {
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
        output: ListFilteredBidRequestsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2beta1/:filterSetName/filteredBids': {
      $get: {
        input: { param: { filterSetName: string } } & {
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
        output: ListFilteredBidsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2beta1/:filterSetName/filteredBids/:creativeStatusId/creatives': {
      $get: {
        input: { param: { filterSetName: string; creativeStatusId: number } } & {
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
        output: ListCreativeStatusBreakdownByCreativeResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2beta1/:filterSetName/filteredBids/:creativeStatusId/details': {
      $get: {
        input: { param: { filterSetName: string; creativeStatusId: number } } & {
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
        output: ListCreativeStatusBreakdownByDetailResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2beta1/:filterSetName/impressionMetrics': {
      $get: {
        input: { param: { filterSetName: string } } & {
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
        output: ListImpressionMetricsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2beta1/:filterSetName/losingBids': {
      $get: {
        input: { param: { filterSetName: string } } & {
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
        output: ListLosingBidsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2beta1/:filterSetName/nonBillableWinningBids': {
      $get: {
        input: { param: { filterSetName: string } } & {
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
        output: ListNonBillableWinningBidsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2beta1/:name': {
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
        output: Empty
        outputFormat: 'json'
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
        output: FilterSet
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2beta1/:ownerName/filterSets': {
      $get: {
        input: { param: { ownerName: string } } & {
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
        output: ListFilterSetsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { ownerName: string } } & {
          query: {
            isTransient?: boolean | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: FilterSet }
        output: FilterSet
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
