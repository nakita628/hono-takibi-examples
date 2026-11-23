type Account = {
  applyPretargetingToNonGuaranteedDeals?: boolean | undefined
  bidderLocation?:
    | {
        bidProtocol?: string | undefined
        maximumQps?: number | undefined
        region?: string | undefined
        url?: string | undefined
      }[]
    | undefined
  cookieMatchingNid?: string | undefined
  cookieMatchingUrl?: string | undefined
  id?: number | undefined
  kind?: string | undefined
  maximumActiveCreatives?: number | undefined
  maximumTotalQps?: number | undefined
  numberActiveCreatives?: number | undefined
}
type AccountsList = { items?: Account[] | undefined; kind?: string | undefined }
type BillingInfo = {
  accountId?: number | undefined
  accountName?: string | undefined
  billingId?: string[] | undefined
  kind?: string | undefined
}
type BillingInfoList = { items?: BillingInfo[] | undefined; kind?: string | undefined }
type Budget = {
  accountId?: string | undefined
  billingId?: string | undefined
  budgetAmount?: string | undefined
  currencyCode?: string | undefined
  id?: string | undefined
  kind?: string | undefined
}
type Creative = {
  HTMLSnippet?: string | undefined
  accountId?: number | undefined
  adChoicesDestinationUrl?: string | undefined
  adTechnologyProviders?:
    | { detectedProviderIds?: string[] | undefined; hasUnidentifiedProvider?: boolean | undefined }
    | undefined
  advertiserId?: string[] | undefined
  advertiserName?: string | undefined
  agencyId?: string | undefined
  apiUploadTimestamp?: string | undefined
  attribute?: number[] | undefined
  buyerCreativeId?: string | undefined
  clickThroughUrl?: string[] | undefined
  corrections?:
    | {
        contexts?:
          | {
              auctionType?: string[] | undefined
              contextType?: string | undefined
              geoCriteriaId?: number[] | undefined
              platform?: string[] | undefined
            }[]
          | undefined
        details?: string[] | undefined
        reason?: string | undefined
      }[]
    | undefined
  creativeStatusIdentityType?: string | undefined
  dealsStatus?: string | undefined
  detectedDomains?: string[] | undefined
  filteringReasons?:
    | {
        date?: string | undefined
        reasons?:
          | { filteringCount?: string | undefined; filteringStatus?: number | undefined }[]
          | undefined
      }
    | undefined
  height?: number | undefined
  impressionTrackingUrl?: string[] | undefined
  kind?: string | undefined
  languages?: string[] | undefined
  nativeAd?:
    | {
        advertiser?: string | undefined
        appIcon?:
          | { height?: number | undefined; url?: string | undefined; width?: number | undefined }
          | undefined
        body?: string | undefined
        callToAction?: string | undefined
        clickLinkUrl?: string | undefined
        clickTrackingUrl?: string | undefined
        headline?: string | undefined
        image?:
          | { height?: number | undefined; url?: string | undefined; width?: number | undefined }
          | undefined
        impressionTrackingUrl?: string[] | undefined
        logo?:
          | { height?: number | undefined; url?: string | undefined; width?: number | undefined }
          | undefined
        price?: string | undefined
        starRating?: number | undefined
        videoURL?: string | undefined
      }
    | undefined
  openAuctionStatus?: string | undefined
  productCategories?: number[] | undefined
  restrictedCategories?: number[] | undefined
  sensitiveCategories?: number[] | undefined
  servingRestrictions?:
    | {
        contexts?:
          | {
              auctionType?: string[] | undefined
              contextType?: string | undefined
              geoCriteriaId?: number[] | undefined
              platform?: string[] | undefined
            }[]
          | undefined
        disapprovalReasons?:
          | { details?: string[] | undefined; reason?: string | undefined }[]
          | undefined
        reason?: string | undefined
      }[]
    | undefined
  vendorType?: number[] | undefined
  version?: number | undefined
  videoURL?: string | undefined
  videoVastXML?: string | undefined
  width?: number | undefined
}
type CreativesList = {
  items?: Creative[] | undefined
  kind?: string | undefined
  nextPageToken?: string | undefined
}
type CreativeDealIds = {
  dealStatuses?:
    | {
        arcStatus?: string | undefined
        dealId?: string | undefined
        webPropertyId?: number | undefined
      }[]
    | undefined
  kind?: string | undefined
}
type PerformanceReport = {
  bidRate?: number | undefined
  bidRequestRate?: number | undefined
  calloutStatusRate?: { [x: string]: unknown }[] | undefined
  cookieMatcherStatusRate?: { [x: string]: unknown }[] | undefined
  creativeStatusRate?: { [x: string]: unknown }[] | undefined
  filteredBidRate?: number | undefined
  hostedMatchStatusRate?: { [x: string]: unknown }[] | undefined
  inventoryMatchRate?: number | undefined
  kind?: string | undefined
  latency50thPercentile?: number | undefined
  latency85thPercentile?: number | undefined
  latency95thPercentile?: number | undefined
  noQuotaInRegion?: number | undefined
  outOfQuota?: number | undefined
  pixelMatchRequests?: number | undefined
  pixelMatchResponses?: number | undefined
  quotaConfiguredLimit?: number | undefined
  quotaThrottledLimit?: number | undefined
  region?: string | undefined
  successfulRequestRate?: number | undefined
  timestamp?: string | undefined
  unsuccessfulRequestRate?: number | undefined
}
type PerformanceReportList = {
  kind?: string | undefined
  performanceReport?: PerformanceReport[] | undefined
}
type PretargetingConfig = {
  billingId?: string | undefined
  configId?: string | undefined
  configName?: string | undefined
  creativeType?: string[] | undefined
  dimensions?: { height?: string | undefined; width?: string | undefined }[] | undefined
  excludedContentLabels?: string[] | undefined
  excludedGeoCriteriaIds?: string[] | undefined
  excludedPlacements?: { token?: string | undefined; type?: string | undefined }[] | undefined
  excludedUserLists?: string[] | undefined
  excludedVerticals?: string[] | undefined
  geoCriteriaIds?: string[] | undefined
  isActive?: boolean | undefined
  kind?: string | undefined
  languages?: string[] | undefined
  maximumQps?: string | undefined
  minimumViewabilityDecile?: number | undefined
  mobileCarriers?: string[] | undefined
  mobileDevices?: string[] | undefined
  mobileOperatingSystemVersions?: string[] | undefined
  placements?: { token?: string | undefined; type?: string | undefined }[] | undefined
  platforms?: string[] | undefined
  supportedCreativeAttributes?: string[] | undefined
  userIdentifierDataRequired?: string[] | undefined
  userLists?: string[] | undefined
  vendorTypes?: string[] | undefined
  verticals?: string[] | undefined
  videoPlayerSizes?:
    | {
        aspectRatio?: string | undefined
        minHeight?: string | undefined
        minWidth?: string | undefined
      }[]
    | undefined
}
type PretargetingConfigList = {
  items?: PretargetingConfig[] | undefined
  kind?: string | undefined
}
type MarketplaceNote = {
  creatorRole?: string | undefined
  dealId?: string | undefined
  kind?: string | undefined
  note?: string | undefined
  noteId?: string | undefined
  proposalId?: string | undefined
  proposalRevisionNumber?: string | undefined
  timestampMs?: string | undefined
}
type UpdatePrivateAuctionProposalRequest = {
  externalDealId?: string | undefined
  note?: MarketplaceNote | undefined
  proposalRevisionNumber?: string | undefined
  updateAction?: string | undefined
}
type Buyer = { accountId?: string | undefined }
type ContactInformation = { email?: string | undefined; name?: string | undefined }
type DeliveryControlFrequencyCap = {
  maxImpressions?: number | undefined
  numTimeUnits?: number | undefined
  timeUnitType?: string | undefined
}
type DeliveryControl = {
  creativeBlockingLevel?: string | undefined
  deliveryRateType?: string | undefined
  frequencyCaps?: DeliveryControlFrequencyCap[] | undefined
}
type Seller = { accountId?: string | undefined; subAccountId?: string | undefined }
type MarketplaceDealParty = { buyer?: Buyer | undefined; seller?: Seller | undefined }
type MarketplaceLabel = {
  accountId?: string | undefined
  createTimeMs?: string | undefined
  deprecatedMarketplaceDealParty?: MarketplaceDealParty | undefined
  label?: string | undefined
}
type DimensionDimensionValue = {
  id?: number | undefined
  name?: string | undefined
  percentage?: number | undefined
}
type Dimension = {
  dimensionType?: string | undefined
  dimensionValues?: DimensionDimensionValue[] | undefined
}
type PublisherProvidedForecast = {
  dimensions?: Dimension[] | undefined
  weeklyImpressions?: string | undefined
  weeklyUniques?: string | undefined
}
type TargetingValueSize = { height?: number | undefined; width?: number | undefined }
type TargetingValueCreativeSize = {
  allowedFormats?: string[] | undefined
  companionSizes?: TargetingValueSize[] | undefined
  creativeSizeType?: string | undefined
  nativeTemplate?: string | undefined
  size?: TargetingValueSize | undefined
  skippableAdType?: string | undefined
}
type TargetingValueDayPartTargetingDayPart = {
  dayOfWeek?: string | undefined
  endHour?: number | undefined
  endMinute?: number | undefined
  startHour?: number | undefined
  startMinute?: number | undefined
}
type TargetingValueDayPartTargeting = {
  dayParts?: TargetingValueDayPartTargetingDayPart[] | undefined
  timeZoneType?: string | undefined
}
type TargetingValueDemogAgeCriteria = { demogAgeCriteriaIds?: string[] | undefined }
type TargetingValueDemogGenderCriteria = { demogGenderCriteriaIds?: string[] | undefined }
type TargetingValueRequestPlatformTargeting = { requestPlatforms?: string[] | undefined }
type TargetingValue = {
  creativeSizeValue?: TargetingValueCreativeSize | undefined
  dayPartTargetingValue?: TargetingValueDayPartTargeting | undefined
  demogAgeCriteriaValue?: TargetingValueDemogAgeCriteria | undefined
  demogGenderCriteriaValue?: TargetingValueDemogGenderCriteria | undefined
  longValue?: string | undefined
  requestPlatformTargetingValue?: TargetingValueRequestPlatformTargeting | undefined
  stringValue?: string | undefined
}
type SharedTargeting = {
  exclusions?: TargetingValue[] | undefined
  inclusions?: TargetingValue[] | undefined
  key?: string | undefined
}
type Price = {
  amountMicros?: number | undefined
  currencyCode?: string | undefined
  expectedCpmMicros?: number | undefined
  pricingType?: string | undefined
}
type DealTermsGuaranteedFixedPriceTermsBillingInfo = {
  currencyConversionTimeMs?: string | undefined
  dfpLineItemId?: string | undefined
  originalContractedQuantity?: string | undefined
  price?: Price | undefined
}
type PricePerBuyer = {
  auctionTier?: string | undefined
  billedBuyer?: Buyer | undefined
  buyer?: Buyer | undefined
  price?: Price | undefined
}
type DealTermsGuaranteedFixedPriceTerms = {
  billingInfo?: DealTermsGuaranteedFixedPriceTermsBillingInfo | undefined
  fixedPrices?: PricePerBuyer[] | undefined
  guaranteedImpressions?: string | undefined
  guaranteedLooks?: string | undefined
  minimumDailyLooks?: string | undefined
}
type DealTermsNonGuaranteedAuctionTerms = {
  autoOptimizePrivateAuction?: boolean | undefined
  reservePricePerBuyers?: PricePerBuyer[] | undefined
}
type DealTermsNonGuaranteedFixedPriceTerms = { fixedPrices?: PricePerBuyer[] | undefined }
type DealTermsRubiconNonGuaranteedTerms = {
  priorityPrice?: Price | undefined
  standardPrice?: Price | undefined
}
type DealTerms = {
  brandingType?: string | undefined
  crossListedExternalDealIdType?: string | undefined
  description?: string | undefined
  estimatedGrossSpend?: Price | undefined
  estimatedImpressionsPerDay?: string | undefined
  guaranteedFixedPriceTerms?: DealTermsGuaranteedFixedPriceTerms | undefined
  nonGuaranteedAuctionTerms?: DealTermsNonGuaranteedAuctionTerms | undefined
  nonGuaranteedFixedPriceTerms?: DealTermsNonGuaranteedFixedPriceTerms | undefined
  rubiconNonGuaranteedTerms?: DealTermsRubiconNonGuaranteedTerms | undefined
  sellerTimeZone?: string | undefined
}
type Product = {
  billedBuyer?: Buyer | undefined
  buyer?: Buyer | undefined
  creationTimeMs?: string | undefined
  creatorContacts?: ContactInformation[] | undefined
  creatorRole?: string | undefined
  deliveryControl?: DeliveryControl | undefined
  flightEndTimeMs?: string | undefined
  flightStartTimeMs?: string | undefined
  hasCreatorSignedOff?: boolean | undefined
  inventorySource?: string | undefined
  kind?: string | undefined
  labels?: MarketplaceLabel[] | undefined
  lastUpdateTimeMs?: string | undefined
  legacyOfferId?: string | undefined
  marketplacePublisherProfileId?: string | undefined
  name?: string | undefined
  privateAuctionId?: string | undefined
  productId?: string | undefined
  publisherProfileId?: string | undefined
  publisherProvidedForecast?: PublisherProvidedForecast | undefined
  revisionNumber?: string | undefined
  seller?: Seller | undefined
  sharedTargetings?: SharedTargeting[] | undefined
  state?: string | undefined
  syndicationProduct?: string | undefined
  terms?: DealTerms | undefined
  webPropertyCode?: string | undefined
}
type GetOffersResponse = { products?: Product[] | undefined }
type PrivateData = { referenceId?: string | undefined; referencePayload?: string | undefined }
type Proposal = {
  billedBuyer?: Buyer | undefined
  buyer?: Buyer | undefined
  buyerContacts?: ContactInformation[] | undefined
  buyerPrivateData?: PrivateData | undefined
  dbmAdvertiserIds?: string[] | undefined
  hasBuyerSignedOff?: boolean | undefined
  hasSellerSignedOff?: boolean | undefined
  inventorySource?: string | undefined
  isRenegotiating?: boolean | undefined
  isSetupComplete?: boolean | undefined
  kind?: string | undefined
  labels?: MarketplaceLabel[] | undefined
  lastUpdaterOrCommentorRole?: string | undefined
  name?: string | undefined
  negotiationId?: string | undefined
  originatorRole?: string | undefined
  privateAuctionId?: string | undefined
  proposalId?: string | undefined
  proposalState?: string | undefined
  revisionNumber?: string | undefined
  revisionTimeMs?: string | undefined
  seller?: Seller | undefined
  sellerContacts?: ContactInformation[] | undefined
}
type CreateOrdersRequest = {
  proposals?: Proposal[] | undefined
  webPropertyCode?: string | undefined
}
type CreateOrdersResponse = { proposals?: Proposal[] | undefined }
type GetOrdersResponse = { proposals?: Proposal[] | undefined }
type DealServingMetadataDealPauseStatus = {
  buyerPauseReason?: string | undefined
  firstPausedBy?: string | undefined
  hasBuyerPaused?: boolean | undefined
  hasSellerPaused?: boolean | undefined
  sellerPauseReason?: string | undefined
}
type DealServingMetadata = {
  alcoholAdsAllowed?: boolean | undefined
  dealPauseStatus?: DealServingMetadataDealPauseStatus | undefined
}
type MarketplaceDeal = {
  buyerPrivateData?: PrivateData | undefined
  creationTimeMs?: string | undefined
  creativePreApprovalPolicy?: string | undefined
  creativeSafeFrameCompatibility?: string | undefined
  dealId?: string | undefined
  dealServingMetadata?: DealServingMetadata | undefined
  deliveryControl?: DeliveryControl | undefined
  externalDealId?: string | undefined
  flightEndTimeMs?: string | undefined
  flightStartTimeMs?: string | undefined
  inventoryDescription?: string | undefined
  isRfpTemplate?: boolean | undefined
  isSetupComplete?: boolean | undefined
  kind?: string | undefined
  lastUpdateTimeMs?: string | undefined
  makegoodRequestedReason?: string | undefined
  name?: string | undefined
  productId?: string | undefined
  productRevisionNumber?: string | undefined
  programmaticCreativeSource?: string | undefined
  proposalId?: string | undefined
  sellerContacts?: ContactInformation[] | undefined
  sharedTargetings?: SharedTargeting[] | undefined
  syndicationProduct?: string | undefined
  terms?: DealTerms | undefined
  webPropertyCode?: string | undefined
}
type GetOrderDealsResponse = { deals?: MarketplaceDeal[] | undefined }
type DeleteOrderDealsRequest = {
  dealIds?: string[] | undefined
  proposalRevisionNumber?: string | undefined
  updateAction?: string | undefined
}
type DeleteOrderDealsResponse = {
  deals?: MarketplaceDeal[] | undefined
  proposalRevisionNumber?: string | undefined
}
type AddOrderDealsRequest = {
  deals?: MarketplaceDeal[] | undefined
  proposalRevisionNumber?: string | undefined
  updateAction?: string | undefined
}
type AddOrderDealsResponse = {
  deals?: MarketplaceDeal[] | undefined
  proposalRevisionNumber?: string | undefined
}
type EditAllOrderDealsRequest = {
  deals?: MarketplaceDeal[] | undefined
  proposal?: Proposal | undefined
  proposalRevisionNumber?: string | undefined
  updateAction?: string | undefined
}
type EditAllOrderDealsResponse = {
  deals?: MarketplaceDeal[] | undefined
  orderRevisionNumber?: string | undefined
}
type GetOrderNotesResponse = { notes?: MarketplaceNote[] | undefined }
type AddOrderNotesRequest = { notes?: MarketplaceNote[] | undefined }
type AddOrderNotesResponse = { notes?: MarketplaceNote[] | undefined }
type MobileApplication = { appStore?: string | undefined; externalAppId?: string | undefined }
type PublisherProfileApiProto = {
  audience?: string | undefined
  buyerPitchStatement?: string | undefined
  directContact?: string | undefined
  exchange?: string | undefined
  forecastInventory?: string | undefined
  googlePlusLink?: string | undefined
  isParent?: boolean | undefined
  isPublished?: boolean | undefined
  kind?: string | undefined
  logoUrl?: string | undefined
  mediaKitLink?: string | undefined
  name?: string | undefined
  overview?: string | undefined
  profileId?: number | undefined
  programmaticContact?: string | undefined
  publisherAppIds?: string[] | undefined
  publisherApps?: MobileApplication[] | undefined
  publisherDomains?: string[] | undefined
  publisherProfileId?: string | undefined
  publisherProvidedForecast?: PublisherProvidedForecast | undefined
  rateCardInfoLink?: string | undefined
  samplePageLink?: string | undefined
  seller?: Seller | undefined
  state?: string | undefined
  topHeadlines?: string[] | undefined
}
type GetPublisherProfilesByAccountIdResponse = { profiles?: PublisherProfileApiProto[] | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/accounts': {
      $get: {
        input: {
          query: {
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        }
        output: AccountsList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/accounts/:id': {
      $get: {
        input: { param: { id: number } } & {
          query: {
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        }
        output: Account
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { id: number } } & {
          query: {
            confirmUnsafeAccountChange?: boolean | undefined
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        } & { json: Account }
        output: Account
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { id: number } } & {
          query: {
            confirmUnsafeAccountChange?: boolean | undefined
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        } & { json: Account }
        output: Account
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/billinginfo': {
      $get: {
        input: {
          query: {
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        }
        output: BillingInfoList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/billinginfo/:accountId': {
      $get: {
        input: { param: { accountId: number } } & {
          query: {
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        }
        output: BillingInfo
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/billinginfo/:accountId/:billingId': {
      $get: {
        input: { param: { accountId: string; billingId: string } } & {
          query: {
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        }
        output: Budget
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { accountId: string; billingId: string } } & {
          query: {
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        } & { json: Budget }
        output: Budget
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { accountId: string; billingId: string } } & {
          query: {
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        } & { json: Budget }
        output: Budget
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/creatives': {
      $get: {
        input: {
          query: {
            accountId?: number[] | undefined
            buyerCreativeId?: string[] | undefined
            dealsStatusFilter?:
              | 'approved'
              | 'conditionally_approved'
              | 'disapproved'
              | 'not_checked'
              | undefined
            maxResults?: number | undefined
            openAuctionStatusFilter?:
              | 'approved'
              | 'conditionally_approved'
              | 'disapproved'
              | 'not_checked'
              | undefined
            pageToken?: string | undefined
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        }
        output: CreativesList
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: {
          query: {
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        } & { json: Creative }
        output: Creative
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/creatives/:accountId/:buyerCreativeId': {
      $get: {
        input: { param: { accountId: number; buyerCreativeId: string } } & {
          query: {
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        }
        output: Creative
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/creatives/:accountId/:buyerCreativeId/addDeal/:dealId': {
      $post: {
        input: { param: { accountId: number; buyerCreativeId: string; dealId: string } } & {
          query: {
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/creatives/:accountId/:buyerCreativeId/listDeals': {
      $get: {
        input: { param: { accountId: number; buyerCreativeId: string } } & {
          query: {
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        }
        output: CreativeDealIds
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/creatives/:accountId/:buyerCreativeId/removeDeal/:dealId': {
      $post: {
        input: { param: { accountId: number; buyerCreativeId: string; dealId: string } } & {
          query: {
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/performancereport': {
      $get: {
        input: {
          query: {
            accountId: string
            endDateTime: string
            startDateTime: string
            maxResults?: number | undefined
            pageToken?: string | undefined
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        }
        output: PerformanceReportList
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/pretargetingconfigs/:accountId': {
      $get: {
        input: { param: { accountId: string } } & {
          query: {
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        }
        output: PretargetingConfigList
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { accountId: string } } & {
          query: {
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        } & { json: PretargetingConfig }
        output: PretargetingConfig
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/pretargetingconfigs/:accountId/:configId': {
      $delete: {
        input: { param: { accountId: string; configId: string } } & {
          query: {
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { accountId: string; configId: string } } & {
          query: {
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        }
        output: PretargetingConfig
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { accountId: string; configId: string } } & {
          query: {
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        } & { json: PretargetingConfig }
        output: PretargetingConfig
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { accountId: string; configId: string } } & {
          query: {
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        } & { json: PretargetingConfig }
        output: PretargetingConfig
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/privateauction/:privateAuctionId/updateproposal': {
      $post: {
        input: { param: { privateAuctionId: string } } & {
          query: {
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        } & { json: UpdatePrivateAuctionProposalRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/products/search': {
      $get: {
        input: {
          query: {
            pqlQuery?: string | undefined
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        }
        output: GetOffersResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/products/:productId': {
      $get: {
        input: { param: { productId: string } } & {
          query: {
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        }
        output: Product
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/proposals/insert': {
      $post: {
        input: {
          query: {
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        } & { json: CreateOrdersRequest }
        output: CreateOrdersResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/proposals/search': {
      $get: {
        input: {
          query: {
            pqlQuery?: string | undefined
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        }
        output: GetOrdersResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/proposals/:proposalId': {
      $get: {
        input: { param: { proposalId: string } } & {
          query: {
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        }
        output: Proposal
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/proposals/:proposalId/deals': {
      $get: {
        input: { param: { proposalId: string } } & {
          query: {
            pqlQuery?: string | undefined
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        }
        output: GetOrderDealsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/proposals/:proposalId/deals/delete': {
      $post: {
        input: { param: { proposalId: string } } & {
          query: {
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        } & { json: DeleteOrderDealsRequest }
        output: DeleteOrderDealsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/proposals/:proposalId/deals/insert': {
      $post: {
        input: { param: { proposalId: string } } & {
          query: {
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        } & { json: AddOrderDealsRequest }
        output: AddOrderDealsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/proposals/:proposalId/deals/update': {
      $post: {
        input: { param: { proposalId: string } } & {
          query: {
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        } & { json: EditAllOrderDealsRequest }
        output: EditAllOrderDealsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/proposals/:proposalId/notes': {
      $get: {
        input: { param: { proposalId: string } } & {
          query: {
            pqlQuery?: string | undefined
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        }
        output: GetOrderNotesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/proposals/:proposalId/notes/insert': {
      $post: {
        input: { param: { proposalId: string } } & {
          query: {
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        } & { json: AddOrderNotesRequest }
        output: AddOrderNotesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/proposals/:proposalId/setupcomplete': {
      $post: {
        input: { param: { proposalId: string } } & {
          query: {
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/proposals/:proposalId/:revisionNumber/:updateAction': {
      $patch: {
        input: {
          param: {
            proposalId: string
            revisionNumber: string
            updateAction:
              | 'accept'
              | 'cancel'
              | 'propose'
              | 'proposeAndAccept'
              | 'unknownAction'
              | 'updateNonTerms'
          }
        } & {
          query: {
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        } & { json: Proposal }
        output: Proposal
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: {
          param: {
            proposalId: string
            revisionNumber: string
            updateAction:
              | 'accept'
              | 'cancel'
              | 'propose'
              | 'proposeAndAccept'
              | 'unknownAction'
              | 'updateNonTerms'
          }
        } & {
          query: {
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        } & { json: Proposal }
        output: Proposal
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/publisher/:accountId/profiles': {
      $get: {
        input: { param: { accountId: number } } & {
          query: {
            alt?: 'json' | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            userIp?: string | undefined
          }
        }
        output: GetPublisherProfilesByAccountIdResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
