type SubscribeClientsRequest = { clients?: string[] | undefined }
type AuctionPackage = {
  createTime?: string | undefined
  creator?: string | undefined
  description?: string | undefined
  displayName?: string | undefined
  name?: string | undefined
  subscribedClients?: string[] | undefined
  updateTime?: string | undefined
}
type UnsubscribeClientsRequest = { clients?: string[] | undefined }
type Contact = { displayName?: string | undefined; email?: string | undefined }
type Money = {
  currencyCode?: string | undefined
  nanos?: number | undefined
  units?: string | undefined
}
type CriteriaTargeting = {
  excludedCriteriaIds?: string[] | undefined
  targetedCriteriaIds?: string[] | undefined
}
type AdSize = {
  height?: string | undefined
  type?: 'TYPE_UNSPECIFIED' | 'PIXEL' | 'INTERSTITIAL' | 'NATIVE' | 'FLUID' | undefined
  width?: string | undefined
}
type InventorySizeTargeting = {
  excludedInventorySizes?: AdSize[] | undefined
  targetedInventorySizes?: AdSize[] | undefined
}
type Price = { amount?: Money | undefined; type?: 'TYPE_UNSPECIFIED' | 'CPM' | 'CPD' | undefined }
type PreferredDealTerms = { fixedPrice?: Price | undefined }
type ProgrammaticGuaranteedTerms = {
  fixedPrice?: Price | undefined
  guaranteedLooks?: string | undefined
  impressionCap?: string | undefined
  minimumDailyLooks?: string | undefined
  percentShareOfVoice?: string | undefined
  reservationType?: 'RESERVATION_TYPE_UNSPECIFIED' | 'STANDARD' | 'SPONSORSHIP' | undefined
}
type SendRfpRequest = {
  buyerContacts?: Contact[] | undefined
  client?: string | undefined
  displayName?: string | undefined
  estimatedGrossSpend?: Money | undefined
  flightEndTime?: string | undefined
  flightStartTime?: string | undefined
  geoTargeting?: CriteriaTargeting | undefined
  inventorySizeTargeting?: InventorySizeTargeting | undefined
  note?: string | undefined
  preferredDealTerms?: PreferredDealTerms | undefined
  programmaticGuaranteedTerms?: ProgrammaticGuaranteedTerms | undefined
  publisherProfile?: string | undefined
}
type PrivateData = { referenceId?: string | undefined }
type Note = {
  createTime?: string | undefined
  creatorRole?: 'BUYER_SELLER_ROLE_UNSPECIFIED' | 'BUYER' | 'SELLER' | undefined
  note?: string | undefined
}
type Proposal = {
  billedBuyer?: string | undefined
  buyer?: string | undefined
  buyerContacts?: Contact[] | undefined
  buyerPrivateData?: PrivateData | undefined
  client?: string | undefined
  dealType?:
    | 'DEAL_TYPE_UNSPECIFIED'
    | 'PREFERRED_DEAL'
    | 'PRIVATE_AUCTION'
    | 'PROGRAMMATIC_GUARANTEED'
    | undefined
  displayName?: string | undefined
  isRenegotiating?: boolean | undefined
  lastUpdaterOrCommentorRole?: 'BUYER_SELLER_ROLE_UNSPECIFIED' | 'BUYER' | 'SELLER' | undefined
  name?: string | undefined
  notes?: Note[] | undefined
  originatorRole?: 'BUYER_SELLER_ROLE_UNSPECIFIED' | 'BUYER' | 'SELLER' | undefined
  pausingConsented?: boolean | undefined
  proposalRevision?: string | undefined
  publisherProfile?: string | undefined
  sellerContacts?: Contact[] | undefined
  state?:
    | 'STATE_UNSPECIFIED'
    | 'BUYER_REVIEW_REQUESTED'
    | 'SELLER_REVIEW_REQUESTED'
    | 'BUYER_ACCEPTANCE_REQUESTED'
    | 'FINALIZED'
    | 'TERMINATED'
    | undefined
  termsAndConditions?: string | undefined
  updateTime?: string | undefined
}
type AddCreativeRequest = { creative?: string | undefined }
type CreativeRequirements = {
  creativeFormat?: 'CREATIVE_FORMAT_UNSPECIFIED' | 'DISPLAY' | 'VIDEO' | undefined
  creativePreApprovalPolicy?:
    | 'CREATIVE_PRE_APPROVAL_POLICY_UNSPECIFIED'
    | 'SELLER_PRE_APPROVAL_REQUIRED'
    | 'SELLER_PRE_APPROVAL_NOT_REQUIRED'
    | undefined
  creativeSafeFrameCompatibility?:
    | 'CREATIVE_SAFE_FRAME_COMPATIBILITY_UNSPECIFIED'
    | 'COMPATIBLE'
    | 'INCOMPATIBLE'
    | undefined
  maxAdDurationMs?: string | undefined
  programmaticCreativeSource?:
    | 'PROGRAMMATIC_CREATIVE_SOURCE_UNSPECIFIED'
    | 'ADVERTISER'
    | 'PUBLISHER'
    | undefined
  skippableAdType?:
    | 'SKIPPABLE_AD_TYPE_UNSPECIFIED'
    | 'SKIPPABLE'
    | 'INSTREAM_SELECT'
    | 'NOT_SKIPPABLE'
    | 'ANY'
    | undefined
}
type FrequencyCap = {
  maxImpressions?: number | undefined
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
  timeUnitsCount?: number | undefined
}
type DeliveryControl = {
  companionDeliveryType?:
    | 'COMPANION_DELIVERY_TYPE_UNSPECIFIED'
    | 'DELIVERY_OPTIONAL'
    | 'DELIVERY_AT_LEAST_ONE'
    | 'DELIVERY_ALL'
    | undefined
  creativeRotationType?:
    | 'CREATIVE_ROTATION_TYPE_UNSPECIFIED'
    | 'ROTATION_EVEN'
    | 'ROTATION_OPTIMIZED'
    | 'ROTATION_MANUAL'
    | 'ROTATION_SEQUENTIAL'
    | undefined
  deliveryRateType?:
    | 'DELIVERY_RATE_TYPE_UNSPECIFIED'
    | 'EVENLY'
    | 'FRONT_LOADED'
    | 'AS_FAST_AS_POSSIBLE'
    | undefined
  frequencyCap?: FrequencyCap[] | undefined
  roadblockingType?:
    | 'ROADBLOCKING_TYPE_UNSPECIFIED'
    | 'ONLY_ONE'
    | 'ONE_OR_MORE'
    | 'AS_MANY_AS_POSSIBLE'
    | 'ALL_ROADBLOCK'
    | 'CREATIVE_SET'
    | undefined
}
type PrivateAuctionTerms = {
  floorPrice?: Price | undefined
  openAuctionAllowed?: boolean | undefined
}
type TimeZone = { id?: string | undefined; version?: string | undefined }
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
  timeZoneType?: 'TIME_ZONE_TYPE_UNSPECIFIED' | 'SELLER' | 'USER' | undefined
}
type InventoryTypeTargeting = {
  inventoryTypes?:
    | ('INVENTORY_TYPE_UNSPECIFIED' | 'BROWSER' | 'MOBILE_APP' | 'VIDEO_PLAYER')[]
    | undefined
}
type FirstPartyMobileApplicationTargeting = {
  excludedAppIds?: string[] | undefined
  targetedAppIds?: string[] | undefined
}
type MobileApplicationTargeting = {
  firstPartyTargeting?: FirstPartyMobileApplicationTargeting | undefined
}
type UriTargeting = { excludedUris?: string[] | undefined; targetedUris?: string[] | undefined }
type PlacementTargeting = {
  mobileApplicationTargeting?: MobileApplicationTargeting | undefined
  uriTargeting?: UriTargeting | undefined
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
  daypartTargeting?: DayPartTargeting | undefined
  geoTargeting?: CriteriaTargeting | undefined
  inventorySizeTargeting?: InventorySizeTargeting | undefined
  inventoryTypeTargeting?: InventoryTypeTargeting | undefined
  placementTargeting?: PlacementTargeting | undefined
  technologyTargeting?: TechnologyTargeting | undefined
  userListTargeting?: CriteriaTargeting | undefined
  videoTargeting?: VideoTargeting | undefined
}
type Deal = {
  billedBuyer?: string | undefined
  buyer?: string | undefined
  client?: string | undefined
  createTime?: string | undefined
  creativeRequirements?: CreativeRequirements | undefined
  dealType?:
    | 'DEAL_TYPE_UNSPECIFIED'
    | 'PREFERRED_DEAL'
    | 'PRIVATE_AUCTION'
    | 'PROGRAMMATIC_GUARANTEED'
    | undefined
  deliveryControl?: DeliveryControl | undefined
  description?: string | undefined
  displayName?: string | undefined
  estimatedGrossSpend?: Money | undefined
  flightEndTime?: string | undefined
  flightStartTime?: string | undefined
  name?: string | undefined
  preferredDealTerms?: PreferredDealTerms | undefined
  privateAuctionTerms?: PrivateAuctionTerms | undefined
  programmaticGuaranteedTerms?: ProgrammaticGuaranteedTerms | undefined
  proposalRevision?: string | undefined
  publisherProfile?: string | undefined
  sellerTimeZone?: TimeZone | undefined
  targeting?: MarketplaceTargeting | undefined
  updateTime?: string | undefined
}
type DealPausingInfo = {
  pauseReason?: string | undefined
  pauseRole?: 'BUYER_SELLER_ROLE_UNSPECIFIED' | 'BUYER' | 'SELLER' | undefined
  pausingConsented?: boolean | undefined
}
type RtbMetrics = {
  adImpressions7Days?: string | undefined
  bidRate7Days?: number | undefined
  bidRequests7Days?: string | undefined
  bids7Days?: string | undefined
  filteredBidRate7Days?: number | undefined
  mustBidRateCurrentMonth?: number | undefined
}
type FinalizedDeal = {
  deal?: Deal | undefined
  dealPausingInfo?: DealPausingInfo | undefined
  dealServingStatus?:
    | 'DEAL_SERVING_STATUS_UNSPECIFIED'
    | 'ACTIVE'
    | 'ENDED'
    | 'PAUSED_BY_BUYER'
    | 'PAUSED_BY_SELLER'
    | undefined
  name?: string | undefined
  readyToServe?: boolean | undefined
  rtbMetrics?: RtbMetrics | undefined
}
type SetReadyToServeRequest = { [x: string]: unknown }
type Empty = { [x: string]: unknown }
type PublisherProfileMobileApplication = {
  appStore?:
    | 'APP_STORE_TYPE_UNSPECIFIED'
    | 'APPLE_ITUNES'
    | 'GOOGLE_PLAY'
    | 'ROKU'
    | 'AMAZON_FIRE_TV'
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
  directDealsContact?: string | undefined
  displayName?: string | undefined
  domains?: string[] | undefined
  isParent?: boolean | undefined
  logoUrl?: string | undefined
  mediaKitUrl?: string | undefined
  mobileApps?: PublisherProfileMobileApplication[] | undefined
  name?: string | undefined
  overview?: string | undefined
  pitchStatement?: string | undefined
  programmaticDealsContact?: string | undefined
  publisherCode?: string | undefined
  samplePageUrl?: string | undefined
  topHeadlines?: string[] | undefined
}
type AcceptProposalRequest = { proposalRevision?: string | undefined }
type ActivateClientUserRequest = { [x: string]: unknown }
type ClientUser = {
  email?: string | undefined
  name?: string | undefined
  state?: 'STATE_UNSPECIFIED' | 'INVITED' | 'ACTIVE' | 'INACTIVE' | undefined
}
type DeactivateClientUserRequest = { [x: string]: unknown }
type PauseFinalizedDealRequest = { reason?: string | undefined }
type ResumeFinalizedDealRequest = { [x: string]: unknown }
type SubscribeAuctionPackageRequest = { [x: string]: unknown }
type UnsubscribeAuctionPackageRequest = { [x: string]: unknown }
type ListAuctionPackagesResponse = {
  auctionPackages?: AuctionPackage[] | undefined
  nextPageToken?: string | undefined
}
type Client = {
  displayName?: string | undefined
  name?: string | undefined
  partnerClientId?: string | undefined
  role?:
    | 'CLIENT_ROLE_UNSPECIFIED'
    | 'CLIENT_DEAL_VIEWER'
    | 'CLIENT_DEAL_NEGOTIATOR'
    | 'CLIENT_DEAL_APPROVER'
    | undefined
  sellerVisible?: boolean | undefined
  state?: 'STATE_UNSPECIFIED' | 'ACTIVE' | 'INACTIVE' | undefined
}
type ListClientsResponse = { clients?: Client[] | undefined; nextPageToken?: string | undefined }
type ListDealsResponse = { deals?: Deal[] | undefined; nextPageToken?: string | undefined }
type UpdateDealRequest = { deal?: Deal | undefined; updateMask?: string | undefined }
type BatchUpdateDealsRequest = { requests?: UpdateDealRequest[] | undefined }
type BatchUpdateDealsResponse = { deals?: Deal[] | undefined }
type ListFinalizedDealsResponse = {
  finalizedDeals?: FinalizedDeal[] | undefined
  nextPageToken?: string | undefined
}
type ListProposalsResponse = {
  nextPageToken?: string | undefined
  proposals?: Proposal[] | undefined
}
type ListPublisherProfilesResponse = {
  nextPageToken?: string | undefined
  publisherProfiles?: PublisherProfile[] | undefined
}
type ListClientUsersResponse = {
  clientUsers?: ClientUser[] | undefined
  nextPageToken?: string | undefined
}
type AddNoteRequest = { note?: Note | undefined }
type CancelNegotiationRequest = { [x: string]: unknown }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1/:auctionPackage:subscribeClients': {
      $post: {
        input: { param: { auctionPackage: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: SubscribeClientsRequest }
        output: AuctionPackage
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:auctionPackage:unsubscribeClients': {
      $post: {
        input: { param: { auctionPackage: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: UnsubscribeClientsRequest }
        output: AuctionPackage
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:buyer/proposals:sendRfp': {
      $post: {
        input: { param: { buyer: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: SendRfpRequest }
        output: Proposal
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:deal:addCreative': {
      $post: {
        input: { param: { deal: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: AddCreativeRequest }
        output: FinalizedDeal
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:deal:setReadyToServe': {
      $post: {
        input: { param: { deal: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: SetReadyToServeRequest }
        output: FinalizedDeal
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:name': {
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
        output: PublisherProfile
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
        } & { json: Deal }
        output: Deal
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:name:accept': {
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
        } & { json: AcceptProposalRequest }
        output: Proposal
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:name:activate': {
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
        } & { json: ActivateClientUserRequest }
        output: ClientUser
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:name:deactivate': {
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
        } & { json: DeactivateClientUserRequest }
        output: ClientUser
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:name:pause': {
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
        } & { json: PauseFinalizedDealRequest }
        output: FinalizedDeal
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:name:resume': {
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
        } & { json: ResumeFinalizedDealRequest }
        output: FinalizedDeal
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:name:subscribe': {
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
        } & { json: SubscribeAuctionPackageRequest }
        output: AuctionPackage
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:name:unsubscribe': {
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
        } & { json: UnsubscribeAuctionPackageRequest }
        output: AuctionPackage
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/auctionPackages': {
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
        output: ListAuctionPackagesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/clients': {
      $get: {
        input: { param: { parent: string } } & {
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
        output: ListClientsResponse
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
        } & { json: Client }
        output: Client
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/deals': {
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
        output: ListDealsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/deals:batchUpdate': {
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
        } & { json: BatchUpdateDealsRequest }
        output: BatchUpdateDealsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/finalizedDeals': {
      $get: {
        input: { param: { parent: string } } & {
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
        output: ListFinalizedDealsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/proposals': {
      $get: {
        input: { param: { parent: string } } & {
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
        output: ListProposalsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/publisherProfiles': {
      $get: {
        input: { param: { parent: string } } & {
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
        output: ListPublisherProfilesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/users': {
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
        output: ListClientUsersResponse
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
        } & { json: ClientUser }
        output: ClientUser
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:proposal:addNote': {
      $post: {
        input: { param: { proposal: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
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
        output: Proposal
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:proposal:cancelNegotiation': {
      $post: {
        input: { param: { proposal: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
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
  },
  '/'
>
export default routes
