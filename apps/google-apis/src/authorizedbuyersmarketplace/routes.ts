import { createRoute, z } from '@hono/zod-openapi'

const FirstPartyMobileApplicationTargetingSchema = z
  .object({
    excludedAppIds: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'A list of application IDs to be excluded.' }),
    targetedAppIds: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'A list of application IDs to be included.' }),
  })
  .openapi({
    description:
      'Represents a list of targeted and excluded mobile application IDs that publishers own. Android App ID, for example, com.google.android.apps.maps, can be found in Google Play Store URL. iOS App ID (which is a number) can be found at the end of iTunes store URL. First party mobile applications is either included or excluded.',
    required: [],
  })
  .openapi('FirstPartyMobileApplicationTargeting')

type MobileApplicationTargetingType = {
  firstPartyTargeting?: z.infer<typeof FirstPartyMobileApplicationTargetingSchema>
}

const AcceptProposalRequestSchema = z
  .object({
    proposalRevision: z
      .string()
      .exactOptional()
      .openapi({ description: 'The last known client revision number of the proposal.' }),
  })
  .openapi({
    description:
      'Request to accept a proposal. Accepting a proposal implies acceptance of the publisher terms_and_conditions, if any.',
    required: [],
  })
  .openapi('AcceptProposalRequest')

const ActivateClientRequestSchema = z
  .object({})
  .openapi({ description: 'Request message for activating a client.' })
  .openapi('ActivateClientRequest')

const ActivateClientUserRequestSchema = z
  .object({})
  .openapi({ description: 'Request message for activating a client user.' })
  .openapi('ActivateClientUserRequest')

const AdSizeSchema = z
  .object({
    height: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The height of the ad slot in pixels. This field will be present only when size type is `PIXEL`.',
      }),
    type: z
      .enum(['TYPE_UNSPECIFIED', 'PIXEL', 'INTERSTITIAL', 'NATIVE', 'FLUID'])
      .exactOptional()
      .openapi({ description: 'The type of the ad slot size.' }),
    width: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The width of the ad slot in pixels. This field will be present only when size type is `PIXEL`.',
      }),
  })
  .openapi({ description: 'Represents size of a single ad slot, or a creative.', required: [] })
  .openapi('AdSize')

const AddCreativeRequestSchema = z
  .object({
    creative: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Name of the creative to add to the finalized deal, in the format `buyers/{buyerAccountId}/creatives/{creativeId}`. See creative.name.',
      }),
  })
  .openapi({
    description:
      'Request message for adding creative to be used in the bidding process for the finalized deal.',
    required: [],
  })
  .openapi('AddCreativeRequest')

const NoteSchema = z
  .object({
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. When this note was created.', readOnly: true }),
    creatorRole: z
      .enum(['BUYER_SELLER_ROLE_UNSPECIFIED', 'BUYER', 'SELLER'])
      .exactOptional()
      .openapi({ description: 'Output only. The role who created the note.', readOnly: true }),
    note: z
      .string()
      .exactOptional()
      .openapi({ description: 'The text of the note. Maximum length is 1024 characters.' }),
  })
  .openapi({
    description:
      'A text note attached to the proposal to facilitate the communication between buyers and sellers.',
    required: [],
  })
  .openapi('Note')

const AddNoteRequestSchema = z
  .object({ note: NoteSchema.exactOptional().openapi({ description: 'The note to add.' }) })
  .openapi({ description: 'Request to add a note.', required: [] })
  .openapi('AddNoteRequest')

const AuctionPackageSchema = z
  .object({
    createTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Time the auction package was created.',
        readOnly: true,
      }),
    creator: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The buyer that created this auction package. Format: `buyers/{buyerAccountId}`',
        readOnly: true,
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. A description of the auction package.',
        readOnly: true,
      }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The display_name assigned to the auction package.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Immutable. The unique identifier for the auction package. Format: `buyers/{accountId}/auctionPackages/{auctionPackageId}` The auction_package_id part of name is sent in the BidRequest to all RTB bidders and is returned as deal_id by the bidder in the BidResponse.',
      }),
    subscribedClients: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Output only. The list of clients of the current buyer that are subscribed to the AuctionPackage. Format: `buyers/{buyerAccountId}/clients/{clientAccountId}`',
        readOnly: true,
      }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Time the auction package was last updated. This value is only increased when this auction package is updated but never when a buyer subscribed.',
        readOnly: true,
      }),
  })
  .openapi({
    description:
      "Defines a segment of inventory that buyer wants to buy. It's created by buyer and could be shared with multiple buyers.",
    required: [],
  })
  .openapi('AuctionPackage')

const CreativeRequirementsSchema = z
  .object({
    creativeFormat: z
      .enum(['CREATIVE_FORMAT_UNSPECIFIED', 'DISPLAY', 'VIDEO'])
      .exactOptional()
      .openapi({
        description:
          'Output only. The format of the creative, only applicable for programmatic guaranteed and preferred deals.',
        readOnly: true,
      }),
    creativePreApprovalPolicy: z
      .enum([
        'CREATIVE_PRE_APPROVAL_POLICY_UNSPECIFIED',
        'SELLER_PRE_APPROVAL_REQUIRED',
        'SELLER_PRE_APPROVAL_NOT_REQUIRED',
      ])
      .exactOptional()
      .openapi({
        description: 'Output only. Specifies the creative pre-approval policy.',
        readOnly: true,
      }),
    creativeSafeFrameCompatibility: z
      .enum(['CREATIVE_SAFE_FRAME_COMPATIBILITY_UNSPECIFIED', 'COMPATIBLE', 'INCOMPATIBLE'])
      .exactOptional()
      .openapi({
        description: 'Output only. Specifies whether the creative is safeFrame compatible.',
        readOnly: true,
      }),
    maxAdDurationMs: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The max duration of the video creative in milliseconds. only applicable for deals with video creatives.',
        readOnly: true,
      }),
    programmaticCreativeSource: z
      .enum(['PROGRAMMATIC_CREATIVE_SOURCE_UNSPECIFIED', 'ADVERTISER', 'PUBLISHER'])
      .exactOptional()
      .openapi({
        description:
          'Output only. Specifies the creative source for programmatic deals. PUBLISHER means creative is provided by seller and ADVERTISER means creative is provided by the buyer.',
        readOnly: true,
      }),
    skippableAdType: z
      .enum([
        'SKIPPABLE_AD_TYPE_UNSPECIFIED',
        'SKIPPABLE',
        'INSTREAM_SELECT',
        'NOT_SKIPPABLE',
        'ANY',
      ])
      .exactOptional()
      .openapi({
        description:
          'Output only. Skippable video ads allow viewers to skip ads after 5 seconds. Only applicable for deals with video creatives.',
        readOnly: true,
      }),
  })
  .openapi({ description: 'Message captures data about the creatives in the deal.', required: [] })
  .openapi('CreativeRequirements')

const FrequencyCapSchema = z
  .object({
    maxImpressions: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The maximum number of impressions that can be served to a user within the specified time period.',
      }),
    timeUnitType: z
      .enum([
        'TIME_UNIT_TYPE_UNSPECIFIED',
        'MINUTE',
        'HOUR',
        'DAY',
        'WEEK',
        'MONTH',
        'LIFETIME',
        'POD',
        'STREAM',
      ])
      .exactOptional()
      .openapi({
        description:
          'The time unit. Along with num_time_units defines the amount of time over which impressions per user are counted and capped.',
      }),
    timeUnitsCount: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The amount of time, in the units specified by time_unit_type. Defines the amount of time over which impressions per user are counted and capped.',
      }),
  })
  .openapi({
    description: 'Message contains details about publisher-set frequency caps of the delivery.',
    required: [],
  })
  .openapi('FrequencyCap')

const DeliveryControlSchema = z
  .object({
    companionDeliveryType: z
      .enum([
        'COMPANION_DELIVERY_TYPE_UNSPECIFIED',
        'DELIVERY_OPTIONAL',
        'DELIVERY_AT_LEAST_ONE',
        'DELIVERY_ALL',
      ])
      .exactOptional()
      .openapi({
        description: 'Output only. Specifies roadblocking in a main companion lineitem.',
        readOnly: true,
      }),
    creativeRotationType: z
      .enum([
        'CREATIVE_ROTATION_TYPE_UNSPECIFIED',
        'ROTATION_EVEN',
        'ROTATION_OPTIMIZED',
        'ROTATION_MANUAL',
        'ROTATION_SEQUENTIAL',
      ])
      .exactOptional()
      .openapi({
        description:
          'Output only. Specifies strategy to use for selecting a creative when multiple creatives of the same size are available.',
        readOnly: true,
      }),
    deliveryRateType: z
      .enum(['DELIVERY_RATE_TYPE_UNSPECIFIED', 'EVENLY', 'FRONT_LOADED', 'AS_FAST_AS_POSSIBLE'])
      .exactOptional()
      .openapi({
        description: 'Output only. Specifies how the impression delivery will be paced.',
        readOnly: true,
      }),
    frequencyCap: z
      .array(FrequencyCapSchema)
      .exactOptional()
      .openapi({
        description:
          'Output only. Specifies any frequency caps. Cannot be filtered within ListDealsRequest.',
        readOnly: true,
      }),
    roadblockingType: z
      .enum([
        'ROADBLOCKING_TYPE_UNSPECIFIED',
        'ONLY_ONE',
        'ONE_OR_MORE',
        'AS_MANY_AS_POSSIBLE',
        'ALL_ROADBLOCK',
        'CREATIVE_SET',
      ])
      .exactOptional()
      .openapi({
        description: 'Output only. Specifies the roadblocking type in display creatives.',
        readOnly: true,
      }),
  })
  .openapi({
    description: 'Message contains details about how the deal will be paced.',
    required: [],
  })
  .openapi('DeliveryControl')

const MoneySchema = z
  .object({
    currencyCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'The three-letter currency code defined in ISO 4217.' }),
    nanos: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Number of nano (10^-9) units of the amount. The value must be between -999,999,999 and +999,999,999 inclusive. If `units` is positive, `nanos` must be positive or zero. If `units` is zero, `nanos` can be positive, zero, or negative. If `units` is negative, `nanos` must be negative or zero. For example $-1.75 is represented as `units`=-1 and `nanos`=-750,000,000.',
      }),
    units: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The whole units of the amount. For example if `currencyCode` is `"USD"`, then 1 unit is one US dollar.',
      }),
  })
  .openapi({ description: 'Represents an amount of money with its currency type.', required: [] })
  .openapi('Money')

const PriceSchema = z
  .object({
    amount: MoneySchema.exactOptional().openapi({
      description: 'The actual price with currency specified.',
    }),
    type: z
      .enum(['TYPE_UNSPECIFIED', 'CPM', 'CPD'])
      .exactOptional()
      .openapi({ description: 'The pricing type for the deal.' }),
  })
  .openapi({ description: 'Represents a price and a pricing type for a deal.', required: [] })
  .openapi('Price')

const PreferredDealTermsSchema = z
  .object({
    fixedPrice: PriceSchema.exactOptional().openapi({ description: 'Fixed price for the deal.' }),
  })
  .openapi({ description: 'Pricing terms for Preferred Deals.', required: [] })
  .openapi('PreferredDealTerms')

const PrivateAuctionTermsSchema = z
  .object({
    floorPrice: PriceSchema.exactOptional().openapi({
      description: 'The minimum price buyer has to bid to compete in the private auction.',
    }),
    openAuctionAllowed: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Output only. True if open auction buyers are allowed to compete with invited buyers in this private auction.',
        readOnly: true,
      }),
  })
  .openapi({ description: 'Pricing terms for Private Auctions.', required: [] })
  .openapi('PrivateAuctionTerms')

const ProgrammaticGuaranteedTermsSchema = z
  .object({
    fixedPrice: PriceSchema.exactOptional().openapi({ description: 'Fixed price for the deal.' }),
    guaranteedLooks: z
      .string()
      .exactOptional()
      .openapi({ description: 'Count of guaranteed looks.' }),
    impressionCap: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The lifetime impression cap for CPM Sponsorship deals. Deal will stop serving when cap is reached.',
      }),
    minimumDailyLooks: z
      .string()
      .exactOptional()
      .openapi({ description: 'Daily minimum looks for CPD deal types.' }),
    percentShareOfVoice: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "For sponsorship deals, this is the percentage of the seller's eligible impressions that the deal will serve until the cap is reached. Valid value is within range 0~100.",
      }),
    reservationType: z
      .enum(['RESERVATION_TYPE_UNSPECIFIED', 'STANDARD', 'SPONSORSHIP'])
      .exactOptional()
      .openapi({
        description:
          'The reservation type for a Programmatic Guaranteed deal. This indicates whether the number of impressions is fixed, or a percent of available impressions. If not specified, the default reservation type is STANDARD.',
      }),
  })
  .openapi({ description: 'Pricing terms for Programmatic Guaranteed Deals.', required: [] })
  .openapi('ProgrammaticGuaranteedTerms')

const TimeZoneSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'IANA Time Zone Database time zone, e.g. "America/New_York".' }),
    version: z
      .string()
      .exactOptional()
      .openapi({ description: 'Optional. IANA Time Zone Database version number, e.g. "2019a".' }),
  })
  .openapi({
    description:
      'Represents a time zone from the [IANA Time Zone Database](https://www.iana.org/time-zones).',
    required: [],
  })
  .openapi('TimeZone')

const TimeOfDaySchema = z
  .object({
    hours: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Hours of day in 24 hour format. Should be from 0 to 23. An API may choose to allow the value "24:00:00" for scenarios like business closing time.',
      }),
    minutes: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Minutes of hour of day. Must be from 0 to 59.' }),
    nanos: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.',
      }),
    seconds: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Seconds of minutes of the time. Must normally be from 0 to 59. An API may allow the value 60 if it allows leap-seconds.',
      }),
  })
  .openapi({
    description:
      'Represents a time of day. The date and time zone are either not significant or are specified elsewhere. An API may choose to allow leap seconds. Related types are google.type.Date and `google.protobuf.Timestamp`.',
    required: [],
  })
  .openapi('TimeOfDay')

const DayPartSchema = z
  .object({
    dayOfWeek: z
      .enum([
        'DAY_OF_WEEK_UNSPECIFIED',
        'MONDAY',
        'TUESDAY',
        'WEDNESDAY',
        'THURSDAY',
        'FRIDAY',
        'SATURDAY',
        'SUNDAY',
      ])
      .exactOptional()
      .openapi({ description: 'Day of week for the period.' }),
    endTime: TimeOfDaySchema.exactOptional().openapi({
      description:
        'Hours in 24 hour time between 0 and 24, inclusive. Note: 24 is logically equivalent to 0, but is supported since in some cases there may need to be differentiation made between midnight on one day and midnight on the next day. Accepted values for minutes are [0, 15, 30, 45]. 0 is the only acceptable minute value for hour 24. Seconds and nanos are ignored.',
    }),
    startTime: TimeOfDaySchema.exactOptional().openapi({
      description:
        'Hours in 24 hour time between 0 and 24, inclusive. Note: 24 is logically equivalent to 0, but is supported since in some cases there may need to be differentiation made between midnight on one day and midnight on the next day. Accepted values for minutes are [0, 15, 30, 45]. 0 is the only acceptable minute value for hour 24. Seconds and nanos are ignored.',
    }),
  })
  .openapi({
    description: 'Defines targeting for a period of time on a specific week day.',
    required: [],
  })
  .openapi('DayPart')

const DayPartTargetingSchema = z
  .object({
    dayParts: z
      .array(DayPartSchema)
      .exactOptional()
      .openapi({ description: 'The targeted weekdays and times' }),
    timeZoneType: z
      .enum(['TIME_ZONE_TYPE_UNSPECIFIED', 'SELLER', 'USER'])
      .exactOptional()
      .openapi({ description: 'The time zone type of the day parts' }),
  })
  .openapi({ description: 'Represents Daypart targeting.', required: [] })
  .openapi('DayPartTargeting')

const CriteriaTargetingSchema = z
  .object({
    excludedCriteriaIds: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'A list of numeric IDs to be excluded.' }),
    targetedCriteriaIds: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'A list of numeric IDs to be included.' }),
  })
  .openapi({
    description:
      'Generic targeting used for targeting dimensions that contains a list of included and excluded numeric IDs. This cannot be filtered using list filter syntax.',
    required: [],
  })
  .openapi('CriteriaTargeting')

const InventorySizeTargetingSchema = z
  .object({
    excludedInventorySizes: z
      .array(AdSizeSchema)
      .exactOptional()
      .openapi({ description: 'A list of inventory sizes to be excluded.' }),
    targetedInventorySizes: z
      .array(AdSizeSchema)
      .exactOptional()
      .openapi({ description: 'A list of inventory sizes to be included.' }),
  })
  .openapi({
    description: 'Represents the size of an ad unit that can be targeted on a bid request.',
    required: [],
  })
  .openapi('InventorySizeTargeting')

const InventoryTypeTargetingSchema = z
  .object({
    inventoryTypes: z
      .array(z.enum(['INVENTORY_TYPE_UNSPECIFIED', 'BROWSER', 'MOBILE_APP', 'VIDEO_PLAYER']))
      .exactOptional()
      .openapi({ description: 'The list of targeted inventory types for the bid request.' }),
  })
  .openapi({
    description: 'Targeting of the inventory types a bid request can originate from.',
    required: [],
  })
  .openapi('InventoryTypeTargeting')

const MobileApplicationTargetingSchema: z.ZodType<MobileApplicationTargetingType> = z
  .lazy(() =>
    z
      .object({
        firstPartyTargeting: FirstPartyMobileApplicationTargetingSchema.exactOptional().openapi({
          description:
            'Publisher owned apps to be targeted or excluded by the publisher to display the ads in.',
        }),
      })
      .openapi({ description: 'Mobile application targeting settings.', required: [] }),
  )
  .openapi('MobileApplicationTargeting')

const UriTargetingSchema = z
  .object({
    excludedUris: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'A list of URLs to be excluded.' }),
    targetedUris: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'A list of URLs to be included.' }),
  })
  .openapi({
    description:
      "Represents a list of targeted and excluded URLs (for example, google.com). For Private Auction Deals, URLs are either included or excluded. For Programmatic Guaranteed and Preferred Deals, this doesn't apply.",
    required: [],
  })
  .openapi('UriTargeting')

const PlacementTargetingSchema = z
  .object({
    mobileApplicationTargeting: MobileApplicationTargetingSchema.exactOptional().openapi({
      description:
        "Mobile application targeting information in a deal. This doesn't apply to Auction Packages.",
    }),
    uriTargeting: UriTargetingSchema.exactOptional().openapi({
      description: 'URLs to be included/excluded.',
    }),
  })
  .openapi({
    description:
      "Represents targeting about where the ads can appear, for example, certain sites or mobile applications. Different placement targeting types will be logically OR'ed.",
    required: [],
  })
  .openapi('PlacementTargeting')

const OperatingSystemTargetingSchema = z
  .object({
    operatingSystemCriteria: CriteriaTargetingSchema.exactOptional().openapi({
      description: 'IDs of operating systems to be included/excluded.',
    }),
    operatingSystemVersionCriteria: CriteriaTargetingSchema.exactOptional().openapi({
      description: 'IDs of operating system versions to be included/excluded.',
    }),
  })
  .openapi({ description: 'Represents targeting information for operating systems.', required: [] })
  .openapi('OperatingSystemTargeting')

const TechnologyTargetingSchema = z
  .object({
    deviceCapabilityTargeting: CriteriaTargetingSchema.exactOptional().openapi({
      description: 'IDs of device capabilities to be included/excluded.',
    }),
    deviceCategoryTargeting: CriteriaTargetingSchema.exactOptional().openapi({
      description: 'IDs of device categories to be included/excluded.',
    }),
    operatingSystemTargeting: OperatingSystemTargetingSchema.exactOptional().openapi({
      description: 'Operating system related targeting information.',
    }),
  })
  .openapi({ description: 'Represents targeting about various types of technology.', required: [] })
  .openapi('TechnologyTargeting')

const VideoTargetingSchema = z
  .object({
    excludedPositionTypes: z
      .array(z.enum(['POSITION_TYPE_UNSPECIFIED', 'PREROLL', 'MIDROLL', 'POSTROLL']))
      .exactOptional()
      .openapi({
        description:
          'A list of video positions to be excluded. When this field is populated, the targeted_position_types field must be empty.',
      }),
    targetedPositionTypes: z
      .array(z.enum(['POSITION_TYPE_UNSPECIFIED', 'PREROLL', 'MIDROLL', 'POSTROLL']))
      .exactOptional()
      .openapi({
        description:
          'A list of video positions to be included. When this field is populated, the excluded_position_types field must be empty.',
      }),
  })
  .openapi({ description: 'Represents targeting information about video.', required: [] })
  .openapi('VideoTargeting')

const MarketplaceTargetingSchema = z
  .object({
    daypartTargeting: DayPartTargetingSchema.exactOptional().openapi({
      description: 'Daypart targeting information.',
    }),
    geoTargeting: CriteriaTargetingSchema.exactOptional().openapi({
      description: 'Output only. Geo criteria IDs to be included/excluded.',
      readOnly: true,
    }),
    inventorySizeTargeting: InventorySizeTargetingSchema.exactOptional().openapi({
      description: 'Output only. Inventory sizes to be included/excluded.',
      readOnly: true,
    }),
    inventoryTypeTargeting: InventoryTypeTargetingSchema.exactOptional().openapi({
      description: 'Output only. Inventory type targeting information.',
      readOnly: true,
    }),
    placementTargeting: PlacementTargetingSchema.exactOptional().openapi({
      description:
        'Output only. Placement targeting information, for example, URL, mobile applications.',
      readOnly: true,
    }),
    technologyTargeting: TechnologyTargetingSchema.exactOptional().openapi({
      description:
        'Output only. Technology targeting information, for example, operating system, device category.',
      readOnly: true,
    }),
    userListTargeting: CriteriaTargetingSchema.exactOptional().openapi({
      description:
        'Buyer user list targeting information. User lists can be uploaded using https://developers.google.com/authorized-buyers/rtb/bulk-uploader.',
    }),
    videoTargeting: VideoTargetingSchema.exactOptional().openapi({
      description: 'Output only. Video targeting information.',
      readOnly: true,
    }),
  })
  .openapi({
    description:
      'Targeting represents different criteria that can be used to target inventory. For example, they can choose to target inventory only if the user is in the US. Multiple types of targeting are always applied as a logical AND, unless noted otherwise.',
    required: [],
  })
  .openapi('MarketplaceTargeting')

const DealSchema = z
  .object({
    billedBuyer: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. When the client field is populated, this field refers to the buyer who creates and manages the client buyer and gets billed on behalf of the client buyer; when the buyer field is populated, this field is the same value as buyer. Format : `buyers/{buyerAccountId}`',
        readOnly: true,
      }),
    buyer: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Refers to a buyer in The Realtime-bidding API. Format: `buyers/{buyerAccountId}`',
        readOnly: true,
      }),
    client: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Refers to a Client. Format: `buyers/{buyerAccountId}/clients/{clientAccountid}`',
        readOnly: true,
      }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The time of the deal creation.', readOnly: true }),
    creativeRequirements: CreativeRequirementsSchema.exactOptional().openapi({
      description: 'Output only. Metadata about the creatives of this deal.',
      readOnly: true,
    }),
    dealType: z
      .enum([
        'DEAL_TYPE_UNSPECIFIED',
        'PREFERRED_DEAL',
        'PRIVATE_AUCTION',
        'PROGRAMMATIC_GUARANTEED',
      ])
      .exactOptional()
      .openapi({ description: 'Output only. Type of deal.', readOnly: true }),
    deliveryControl: DeliveryControlSchema.exactOptional().openapi({
      description: 'Output only. Specifies the pacing set by the publisher.',
      readOnly: true,
    }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Free text description for the deal terms.',
        readOnly: true,
      }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The name of the deal. Maximum length of 255 unicode characters is allowed. Control characters are not allowed. Buyers cannot update this field. Note: Not to be confused with name, which is a unique identifier of the deal.',
        readOnly: true,
      }),
    estimatedGrossSpend: MoneySchema.exactOptional().openapi({
      description:
        'Specified by buyers in request for proposal (RFP) to notify publisher the total estimated spend for the proposal. Publishers will receive this information and send back proposed deals accordingly.',
    }),
    flightEndTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Proposed flight end time of the deal. This will generally be stored in a granularity of a second. A value is not necessary for Private Auction deals.',
      }),
    flightStartTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Proposed flight start time of the deal. This will generally be stored in the granularity of one second since deal serving starts at seconds boundary. Any time specified with more granularity (for example, in milliseconds) will be truncated towards the start of time in seconds.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Immutable. The unique identifier of the deal. Auto-generated by the server when a deal is created. Format: buyers/{accountId}/proposals/{proposalId}/deals/{dealId}',
      }),
    preferredDealTerms: PreferredDealTermsSchema.exactOptional().openapi({
      description: 'The terms for preferred deals.',
    }),
    privateAuctionTerms: PrivateAuctionTermsSchema.exactOptional().openapi({
      description: 'The terms for private auction deals.',
    }),
    programmaticGuaranteedTerms: ProgrammaticGuaranteedTermsSchema.exactOptional().openapi({
      description: 'The terms for programmatic guaranteed deals.',
    }),
    proposalRevision: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The revision number for the proposal and is the same value as proposal.proposal_revision. Each update to deal causes the proposal revision number to auto-increment. The buyer keeps track of the last revision number they know of and pass it in when making an update. If the head revision number on the server has since incremented, then an ABORTED error is returned during the update operation to let the buyer know that a subsequent update was made.',
        readOnly: true,
      }),
    publisherProfile: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Immutable. Reference to the seller on the deal. Format: `buyers/{buyerAccountId}/publisherProfiles/{publisherProfileId}`',
      }),
    sellerTimeZone: TimeZoneSchema.exactOptional().openapi({
      description:
        'Output only. Time zone of the seller used to mark the boundaries of a day for daypart targeting and CPD billing.',
      readOnly: true,
    }),
    targeting: MarketplaceTargetingSchema.exactOptional().openapi({
      description:
        'Specifies the subset of inventory targeted by the deal. Can be updated by the buyer before the deal is finalized.',
    }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The time when the deal was last updated.',
        readOnly: true,
      }),
  })
  .openapi({
    description:
      'A deal represents a segment of inventory for displaying ads that contains the terms and targeting information that is used for serving as well as the deal stats and status. Note: A proposal may contain multiple deals.',
    required: [],
  })
  .openapi('Deal')

const UpdateDealRequestSchema = z
  .object({
    deal: DealSchema.exactOptional().openapi({
      description:
        "Required. The deal to update. The deal's `name` field is used to identify the deal to be updated. Note: proposal_revision will have to be provided within the resource or else an error will be thrown. Format: buyers/{accountId}/proposals/{proposalId}/deals/{dealId}",
    }),
    updateMask: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'List of fields to be updated. If empty or unspecified, the service will update all fields populated in the update request excluding the output only fields and primitive fields with default value. Note that explicit field mask is required in order to reset a primitive field back to its default value, for example, false for boolean fields, 0 for integer fields. A special field mask consisting of a single path "*" can be used to indicate full replacement(the equivalent of PUT method), updatable fields unset or unspecified in the input will be cleared or set to default value. Output only fields will be ignored regardless of the value of updateMask.',
      }),
  })
  .openapi({
    description: 'Request message for updating the deal at the given revision number.',
    required: [],
  })
  .openapi('UpdateDealRequest')

const BatchUpdateDealsRequestSchema = z
  .object({
    requests: z
      .array(UpdateDealRequestSchema)
      .exactOptional()
      .openapi({ description: 'Required. List of request messages to update deals.' }),
  })
  .openapi({ description: 'Request message for batch updating deals.', required: [] })
  .openapi('BatchUpdateDealsRequest')

const BatchUpdateDealsResponseSchema = z
  .object({ deals: z.array(DealSchema).exactOptional().openapi({ description: 'Deals updated.' }) })
  .openapi({ description: 'Response message for batch updating deals.', required: [] })
  .openapi('BatchUpdateDealsResponse')

const CancelNegotiationRequestSchema = z
  .object({})
  .openapi({ description: 'Request to cancel an ongoing negotiation.' })
  .openapi('CancelNegotiationRequest')

const ClientSchema = z
  .object({
    displayName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Display name shown to publishers. Must be unique for clients without partnerClientId specified. Maximum length of 255 characters is allowed.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The resource name of the client. Format: `buyers/{accountId}/clients/{clientAccountId}`',
        readOnly: true,
      }),
    partnerClientId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Arbitrary unique identifier provided by the buyer. This field can be used to associate a client with an identifier in the namespace of the buyer, lookup clients by that identifier and verify whether an Authorized Buyers account of the client already exists. If present, must be unique across all the clients.',
      }),
    role: z
      .enum([
        'CLIENT_ROLE_UNSPECIFIED',
        'CLIENT_DEAL_VIEWER',
        'CLIENT_DEAL_NEGOTIATOR',
        'CLIENT_DEAL_APPROVER',
      ])
      .exactOptional()
      .openapi({
        description:
          'Required. The role assigned to the client. Each role implies a set of permissions granted to the client.',
      }),
    sellerVisible: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the client will be visible to sellers.' }),
    state: z
      .enum(['STATE_UNSPECIFIED', 'ACTIVE', 'INACTIVE'])
      .exactOptional()
      .openapi({ description: 'Output only. The state of the client.', readOnly: true }),
  })
  .openapi({
    description:
      "A client represents an agency, a brand, or an advertiser customer of the buyer. Based on the client's role, its client users will have varying levels of restricted access to the Marketplace and certain other sections of the Authorized Buyers UI.",
    required: [],
  })
  .openapi('Client')

const ClientUserSchema = z
  .object({
    email: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Required. The client user's email address that has to be unique across all users for the same client.",
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The resource name of the client user. Format: `buyers/{accountId}/clients/{clientAccountId}/users/{userId}`',
        readOnly: true,
      }),
    state: z
      .enum(['STATE_UNSPECIFIED', 'INVITED', 'ACTIVE', 'INACTIVE'])
      .exactOptional()
      .openapi({ description: 'Output only. The state of the client user.', readOnly: true }),
  })
  .openapi({
    description:
      'A user of a client who has restricted access to the Marketplace and certain other sections of the Authorized Buyers UI based on the role granted to the associated client.',
    required: [],
  })
  .openapi('ClientUser')

const ContactSchema = z
  .object({
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The display_name of the contact.' }),
    email: z.string().exactOptional().openapi({ description: 'Email address for the contact.' }),
  })
  .openapi({
    description: 'Contains information on how a buyer or seller can be reached.',
    required: [],
  })
  .openapi('Contact')

const DeactivateClientRequestSchema = z
  .object({})
  .openapi({ description: 'Request message for disabling a client.' })
  .openapi('DeactivateClientRequest')

const DeactivateClientUserRequestSchema = z
  .object({})
  .openapi({ description: 'Request message for deactivating a client user.' })
  .openapi('DeactivateClientUserRequest')

const DealPausingInfoSchema = z
  .object({
    pauseReason: z
      .string()
      .exactOptional()
      .openapi({ description: 'The reason for the pausing of the deal; empty for active deals.' }),
    pauseRole: z
      .enum(['BUYER_SELLER_ROLE_UNSPECIFIED', 'BUYER', 'SELLER'])
      .exactOptional()
      .openapi({
        description: 'The party that first paused the deal; unspecified for active deals.',
      }),
    pausingConsented: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Whether pausing is consented between buyer and seller for the deal.',
      }),
  })
  .openapi({ description: 'Information related to deal pausing.', required: [] })
  .openapi('DealPausingInfo')

const EmptySchema = z
  .object({})
  .openapi({
    description:
      'A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); }',
  })
  .openapi('Empty')

const RtbMetricsSchema = z
  .object({
    adImpressions7Days: z
      .string()
      .exactOptional()
      .openapi({ description: 'Ad impressions in last 7 days.' }),
    bidRate7Days: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Bid rate in last 7 days, calculated by (bids / bid requests).' }),
    bidRequests7Days: z
      .string()
      .exactOptional()
      .openapi({ description: 'Bid requests in last 7 days.' }),
    bids7Days: z.string().exactOptional().openapi({ description: 'Bids in last 7 days.' }),
    filteredBidRate7Days: z
      .float64()
      .exactOptional()
      .openapi({
        description: 'Filtered bid rate in last 7 days, calculated by (filtered bids / bids).',
      }),
    mustBidRateCurrentMonth: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Must bid rate for current month.' }),
  })
  .openapi({
    description:
      'Real-time bidding metrics. For what each metric means refer to [Report metrics](https://support.google.com/adxbuyer/answer/6115195#report-metrics)',
    required: [],
  })
  .openapi('RtbMetrics')

const FinalizedDealSchema = z
  .object({
    deal: DealSchema.exactOptional().openapi({
      description:
        'A copy of the Deal made upon finalization. During renegotiation, this will reflect the last finalized deal before renegotiation was initiated.',
    }),
    dealPausingInfo: DealPausingInfoSchema.exactOptional().openapi({
      description: 'Information related to deal pausing for the deal.',
    }),
    dealServingStatus: z
      .enum([
        'DEAL_SERVING_STATUS_UNSPECIFIED',
        'ACTIVE',
        'ENDED',
        'PAUSED_BY_BUYER',
        'PAUSED_BY_SELLER',
      ])
      .exactOptional()
      .openapi({ description: 'Serving status of the deal.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The resource name of the finalized deal. Format: `buyers/{accountId}/finalizeddeals/{finalizedDealId}`',
      }),
    readyToServe: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the Programmatic Guaranteed deal is ready for serving.' }),
    rtbMetrics: RtbMetricsSchema.exactOptional().openapi({
      description: 'Real-time bidding metrics for this deal.',
    }),
  })
  .openapi({
    description:
      "A finalized deal is a snapshot of the deal when both buyer and seller accept the deal. The buyer or seller can update the deal after it's been finalized and renegotiate on the deal targeting, terms and other fields, while at the same time the finalized snapshot of the deal can still be retrieved using this API. The finalized deal contains a copy of the deal as it existed when most recently finalized, as well as fields related to deal serving such as pause/resume status, RTB metrics, and more.",
    required: [],
  })
  .openapi('FinalizedDeal')

const ListAuctionPackagesResponseSchema = z
  .object({
    auctionPackages: z
      .array(AuctionPackageSchema)
      .exactOptional()
      .openapi({ description: 'The list of auction packages.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Continuation token for fetching the next page of results. Pass this value in the ListAuctionPackagesRequest.pageToken field in the subsequent call to the `ListAuctionPackages` method to retrieve the next page of results.',
      }),
  })
  .openapi({ description: 'Response message for listing auction packages.', required: [] })
  .openapi('ListAuctionPackagesResponse')

const ListClientUsersResponseSchema = z
  .object({
    clientUsers: z
      .array(ClientUserSchema)
      .exactOptional()
      .openapi({ description: 'The returned list of client users.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token to retrieve the next page of results. Pass this value in the ListClientUsersRequest.pageToken field in the subsequent call to the list method to retrieve the next page of results.',
      }),
  })
  .openapi({ description: 'Response message for the list method.', required: [] })
  .openapi('ListClientUsersResponse')

const ListClientsResponseSchema = z
  .object({
    clients: z
      .array(ClientSchema)
      .exactOptional()
      .openapi({ description: 'The returned list of clients.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token to retrieve the next page of results. Pass this value in the ListClientsRequest.pageToken field in the subsequent call to the list method to retrieve the next page of results.',
      }),
  })
  .openapi({ description: 'Response message for the list method.', required: [] })
  .openapi('ListClientsResponse')

const ListDealsResponseSchema = z
  .object({
    deals: z.array(DealSchema).exactOptional().openapi({ description: 'The list of deals.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'Token to fetch the next page of results.' }),
  })
  .openapi({ description: 'Response message for listing deals in a proposal.', required: [] })
  .openapi('ListDealsResponse')

const ListFinalizedDealsResponseSchema = z
  .object({
    finalizedDeals: z
      .array(FinalizedDealSchema)
      .exactOptional()
      .openapi({ description: 'The list of finalized deals.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'Token to fetch the next page of results.' }),
  })
  .openapi({ description: 'Response message for listing finalized deals.', required: [] })
  .openapi('ListFinalizedDealsResponse')

const PrivateDataSchema = z
  .object({
    referenceId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A buyer specified reference ID. This can be queried in the list operations (max-length: 1024 unicode code units).',
      }),
  })
  .openapi({
    description: 'Buyers are allowed to store certain types of private data in a proposal or deal.',
    required: [],
  })
  .openapi('PrivateData')

const ProposalSchema = z
  .object({
    billedBuyer: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. When the client field is populated, this field refers to the buyer who creates and manages the client buyer and gets billed on behalf of the client buyer; when the buyer field is populated, this field is the same value as buyer. Format : `buyers/{buyerAccountId}`',
        readOnly: true,
      }),
    buyer: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Refers to a buyer in The Realtime-bidding API. Format: `buyers/{buyerAccountId}`',
        readOnly: true,
      }),
    buyerContacts: z
      .array(ContactSchema)
      .exactOptional()
      .openapi({ description: 'Contact information for the buyer.' }),
    buyerPrivateData: PrivateDataSchema.exactOptional().openapi({
      description: 'Buyer private data (hidden from seller).',
    }),
    client: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Refers to a Client. Format: `buyers/{buyerAccountId}/clients/{clientAccountid}`',
        readOnly: true,
      }),
    dealType: z
      .enum([
        'DEAL_TYPE_UNSPECIFIED',
        'PREFERRED_DEAL',
        'PRIVATE_AUCTION',
        'PROGRAMMATIC_GUARANTEED',
      ])
      .exactOptional()
      .openapi({ description: 'Output only. Type of deal the proposal contains.', readOnly: true }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The descriptive name for the proposal. Maximum length of 255 unicode characters is allowed. Control characters are not allowed. Buyers cannot update this field. Note: Not to be confused with name, which is a unique identifier of the proposal.',
        readOnly: true,
      }),
    isRenegotiating: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Output only. True if the proposal was previously finalized and is now being renegotiated.',
        readOnly: true,
      }),
    lastUpdaterOrCommentorRole: z
      .enum(['BUYER_SELLER_ROLE_UNSPECIFIED', 'BUYER', 'SELLER'])
      .exactOptional()
      .openapi({
        description:
          'Output only. The role of the last user that either updated the proposal or left a comment.',
        readOnly: true,
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Immutable. The name of the proposal serving as a unique identifier. Format: buyers/{accountId}/proposals/{proposalId}',
      }),
    notes: z
      .array(NoteSchema)
      .exactOptional()
      .openapi({
        description: 'A list of notes from the buyer and the seller attached to this proposal.',
      }),
    originatorRole: z
      .enum(['BUYER_SELLER_ROLE_UNSPECIFIED', 'BUYER', 'SELLER'])
      .exactOptional()
      .openapi({
        description: 'Output only. Indicates whether the buyer/seller created the proposal.',
        readOnly: true,
      }),
    pausingConsented: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether pausing is allowed for the proposal. This is a negotiable term between buyers and publishers.',
      }),
    proposalRevision: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The revision number for the proposal. Each update to the proposal or deal causes the proposal revision number to auto-increment. The buyer keeps track of the last revision number they know of and pass it in when making an update. If the head revision number on the server has since incremented, then an ABORTED error is returned during the update operation to let the buyer know that a subsequent update was made.',
        readOnly: true,
      }),
    publisherProfile: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Immutable. Reference to the seller on the proposal. Format: `buyers/{buyerAccountId}/publisherProfiles/{publisherProfileId}` Note: This field may be set only when creating the resource. Modifying this field while updating the resource will result in an error.',
      }),
    sellerContacts: z
      .array(ContactSchema)
      .exactOptional()
      .openapi({ description: 'Output only. Contact information for the seller.', readOnly: true }),
    state: z
      .enum([
        'STATE_UNSPECIFIED',
        'BUYER_REVIEW_REQUESTED',
        'SELLER_REVIEW_REQUESTED',
        'BUYER_ACCEPTANCE_REQUESTED',
        'FINALIZED',
        'TERMINATED',
      ])
      .exactOptional()
      .openapi({
        description: 'Output only. Indicates the state of the proposal.',
        readOnly: true,
      }),
    termsAndConditions: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The terms and conditions associated with this proposal. Accepting a proposal implies acceptance of this field. This is created by the seller, the buyer can only view it.',
        readOnly: true,
      }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The time when the proposal was last revised.',
        readOnly: true,
      }),
  })
  .openapi({
    description:
      'Represents a proposal in the Marketplace. A proposal is the unit of negotiation between a seller and a buyer.',
    required: [],
  })
  .openapi('Proposal')

const ListProposalsResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'Continuation token for fetching the next page of results.' }),
    proposals: z
      .array(ProposalSchema)
      .exactOptional()
      .openapi({ description: 'The list of proposals.' }),
  })
  .openapi({ description: 'Response message for listing proposals.', required: [] })
  .openapi('ListProposalsResponse')

const PublisherProfileMobileApplicationSchema = z
  .object({
    appStore: z
      .enum([
        'APP_STORE_TYPE_UNSPECIFIED',
        'APPLE_ITUNES',
        'GOOGLE_PLAY',
        'ROKU',
        'AMAZON_FIRE_TV',
        'PLAYSTATION',
        'XBOX',
        'SAMSUNG_TV',
        'AMAZON',
        'OPPO',
        'SAMSUNG',
        'VIVO',
        'XIAOMI',
      ])
      .exactOptional()
      .openapi({
        description:
          'The app store the app belongs to. Can be used to filter the response of the publisherProfiles.list method.',
      }),
    externalAppId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The external ID for the app from its app store. Can be used to filter the response of the publisherProfiles.list method.',
      }),
    name: z.string().exactOptional().openapi({ description: 'The name of the app.' }),
  })
  .openapi({
    description: 'A mobile application that contains a external app ID, name, and app store.',
    required: [],
  })
  .openapi('PublisherProfileMobileApplication')

const PublisherProfileSchema = z
  .object({
    audienceDescription: z
      .string()
      .exactOptional()
      .openapi({ description: "Description on the publisher's audience." }),
    directDealsContact: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Contact information for direct reservation deals. This is free text entered by the publisher and may include information like names, phone numbers and email addresses.',
      }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Display name of the publisher profile. Can be used to filter the response of the publisherProfiles.list method.',
      }),
    domains: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The list of domains represented in this publisher profile. Empty if this is a parent profile. These are top private domains, meaning that these will not contain a string like "photos.google.co.uk/123", but will instead contain "google.co.uk". Can be used to filter the response of the publisherProfiles.list method.',
      }),
    isParent: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates if this profile is the parent profile of the seller. A parent profile represents all the inventory from the seller, as opposed to child profile that is created to brand a portion of inventory. One seller has only one parent publisher profile, and can have multiple child profiles. See https://support.google.com/admanager/answer/6035806 for details. Can be used to filter the response of the publisherProfiles.list method by setting the filter to "is_parent: true".',
      }),
    logoUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A Google public URL to the logo for this publisher profile. The logo is stored as a PNG, JPG, or GIF image.',
      }),
    mediaKitUrl: z
      .string()
      .exactOptional()
      .openapi({ description: 'URL to additional marketing and sales materials.' }),
    mobileApps: z
      .array(PublisherProfileMobileApplicationSchema)
      .exactOptional()
      .openapi({
        description:
          'The list of apps represented in this publisher profile. Empty if this is a parent profile.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Name of the publisher profile. Format: `buyers/{buyer}/publisherProfiles/{publisher_profile}`',
      }),
    overview: z.string().exactOptional().openapi({ description: 'Overview of the publisher.' }),
    pitchStatement: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Statement explaining what's unique about publisher's business, and why buyers should partner with the publisher.",
      }),
    programmaticDealsContact: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Contact information for programmatic deals. This is free text entered by the publisher and may include information like names, phone numbers and email addresses.',
      }),
    publisherCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "A unique identifying code for the seller. This value is the same for all of the seller's parent and child publisher profiles. Can be used to filter the response of the publisherProfiles.list method.",
      }),
    samplePageUrl: z
      .string()
      .exactOptional()
      .openapi({ description: 'URL to a sample content page.' }),
    topHeadlines: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Up to three key metrics and rankings. For example, "#1 Mobile News Site for 20 Straight Months".',
      }),
  })
  .openapi({
    description:
      'The values in the publisher profile are supplied by the publisher. All fields are not filterable unless stated otherwise.',
    required: [],
  })
  .openapi('PublisherProfile')

const ListPublisherProfilesResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'Token to fetch the next page of results.' }),
    publisherProfiles: z
      .array(PublisherProfileSchema)
      .exactOptional()
      .openapi({ description: 'The list of matching publisher profiles.' }),
  })
  .openapi({ description: 'Response message for profiles visible to the buyer.', required: [] })
  .openapi('ListPublisherProfilesResponse')

const PauseFinalizedDealRequestSchema = z
  .object({
    reason: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The reason to pause the finalized deal, will be displayed to the seller. Maximum length is 1000 characters.',
      }),
  })
  .openapi({ description: 'Request message for pausing a finalized deal.', required: [] })
  .openapi('PauseFinalizedDealRequest')

const ResumeFinalizedDealRequestSchema = z
  .object({})
  .openapi({ description: 'Request message for resuming a finalized deal.' })
  .openapi('ResumeFinalizedDealRequest')

const SendRfpRequestSchema = z
  .object({
    buyerContacts: z
      .array(ContactSchema)
      .exactOptional()
      .openapi({ description: 'Contact information for the buyer.' }),
    client: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If the current buyer is sending the RFP on behalf of its client, use this field to specify the name of the client in the format: `buyers/{accountId}/clients/{clientAccountid}`.',
      }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Required. The display name of the proposal being created by this RFP.',
      }),
    estimatedGrossSpend: MoneySchema.exactOptional().openapi({
      description:
        'Specified by buyers in request for proposal (RFP) to notify publisher the total estimated spend for the proposal. Publishers will receive this information and send back proposed deals accordingly.',
    }),
    flightEndTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Proposed flight end time of the RFP. A timestamp in RFC3339 UTC "Zulu" format. Note that the specified value will be truncated to a granularity of one second.',
      }),
    flightStartTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Proposed flight start time of the RFP. A timestamp in RFC3339 UTC "Zulu" format. Note that the specified value will be truncated to a granularity of one second.',
      }),
    geoTargeting: CriteriaTargetingSchema.exactOptional().openapi({
      description: 'Geo criteria IDs to be targeted. Refer to Geo tables.',
    }),
    inventorySizeTargeting: InventorySizeTargetingSchema.exactOptional().openapi({
      description: 'Inventory sizes to be targeted.',
    }),
    note: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A message that is sent to the publisher. Maximum length is 1024 characters.',
      }),
    preferredDealTerms: PreferredDealTermsSchema.exactOptional().openapi({
      description: 'The terms for preferred deals.',
    }),
    programmaticGuaranteedTerms: ProgrammaticGuaranteedTermsSchema.exactOptional().openapi({
      description: 'The terms for programmatic guaranteed deals.',
    }),
    publisherProfile: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The profile of the publisher who will receive this RFP in the format: `buyers/{accountId}/publisherProfiles/{publisherProfileId}`.',
      }),
  })
  .openapi({
    description:
      'Request to send an RFP. All fields in this request are proposed to publisher and subject to changes by publisher during later negotiation.',
    required: [],
  })
  .openapi('SendRfpRequest')

const SetReadyToServeRequestSchema = z
  .object({})
  .openapi({ description: 'Request message for setting ready to serve for a finalized deal.' })
  .openapi('SetReadyToServeRequest')

const SubscribeAuctionPackageRequestSchema = z
  .object({})
  .openapi({ description: 'Request message for SubscribeAuctionPackage.' })
  .openapi('SubscribeAuctionPackageRequest')

const SubscribeClientsRequestSchema = z
  .object({
    clients: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Optional. A list of client buyers to subscribe to the auction package, with client buyer in the format `buyers/{accountId}/clients/{clientAccountId}`. The current buyer will be subscribed to the auction package regardless of the list contents if not already.',
      }),
  })
  .openapi({ description: 'Request message for SubscribeAuctionPackageClients.', required: [] })
  .openapi('SubscribeClientsRequest')

const UnsubscribeAuctionPackageRequestSchema = z
  .object({})
  .openapi({ description: 'Request message for UnsubscribeAuctionPackage.' })
  .openapi('UnsubscribeAuctionPackageRequest')

const UnsubscribeClientsRequestSchema = z
  .object({
    clients: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Optional. A list of client buyers to unsubscribe from the auction package, with client buyer in the format `buyers/{accountId}/clients/{clientAccountId}`.',
      }),
  })
  .openapi({ description: 'Request message for UnsubscribeAuctionPackage.', required: [] })
  .openapi('UnsubscribeClientsRequest')

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
        'https://www.googleapis.com/auth/authorized-buyers-marketplace':
          'See, create, edit, and delete your Authorized Buyers Marketplace entities.',
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
        'https://www.googleapis.com/auth/authorized-buyers-marketplace':
          'See, create, edit, and delete your Authorized Buyers Marketplace entities.',
      },
      tokenUrl: 'https://accounts.google.com/o/oauth2/token',
    },
  },
  type: 'oauth2',
}

export const postV1AuctionPackageSubscribeClientsRoute = createRoute({
  method: 'post',
  path: '/v1/{auctionPackage}:subscribeClients',
  tags: ['buyers'],
  description:
    'Subscribe the specified clients of the buyer to the auction package. If a client in the list does not belong to the buyer, an error response will be returned, and all of the following clients in the list will not be subscribed. Subscribing an already subscribed client will have no effect.',
  operationId: 'authorizedbuyersmarketplace.buyers.auctionPackages.subscribeClients',
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
      auctionPackage: z
        .string()
        .openapi({
          param: {
            description:
              'Required. Name of the auction package. Format: `buyers/{accountId}/auctionPackages/{auctionPackageId}`',
            in: 'path',
            name: 'auctionPackage',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: SubscribeClientsRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: AuctionPackageSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/authorized-buyers-marketplace'],
      Oauth2c: ['https://www.googleapis.com/auth/authorized-buyers-marketplace'],
    },
  ],
})

export const postV1AuctionPackageUnsubscribeClientsRoute = createRoute({
  method: 'post',
  path: '/v1/{auctionPackage}:unsubscribeClients',
  tags: ['buyers'],
  description:
    'Unsubscribe from the auction package for the specified clients of the buyer. Unsubscribing a client that is not subscribed will have no effect.',
  operationId: 'authorizedbuyersmarketplace.buyers.auctionPackages.unsubscribeClients',
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
      auctionPackage: z
        .string()
        .openapi({
          param: {
            description:
              'Required. Name of the auction package. Format: `buyers/{accountId}/auctionPackages/{auctionPackageId}`',
            in: 'path',
            name: 'auctionPackage',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: UnsubscribeClientsRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: AuctionPackageSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/authorized-buyers-marketplace'],
      Oauth2c: ['https://www.googleapis.com/auth/authorized-buyers-marketplace'],
    },
  ],
})

export const postV1BuyerProposalsSendRfpRoute = createRoute({
  method: 'post',
  path: '/v1/{buyer}/proposals:sendRfp',
  tags: ['buyers'],
  description:
    'Sends a request for proposal (RFP) to a publisher to initiate the negotiation regarding certain inventory. In the RFP, buyers can specify the deal type, deal terms, start and end dates, targeting, and a message to the publisher. Once the RFP is sent, a proposal in `SELLER_REVIEW_REQUESTED` state will be created and returned in the response. The publisher may review your request and respond with detailed deals in the proposal.',
  operationId: 'authorizedbuyersmarketplace.buyers.proposals.sendRfp',
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
      buyer: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The current buyer who is sending the RFP in the format: `buyers/{accountId}`.',
            in: 'path',
            name: 'buyer',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: SendRfpRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ProposalSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/authorized-buyers-marketplace'],
      Oauth2c: ['https://www.googleapis.com/auth/authorized-buyers-marketplace'],
    },
  ],
})

export const postV1DealAddCreativeRoute = createRoute({
  method: 'post',
  path: '/v1/{deal}:addCreative',
  tags: ['buyers'],
  description:
    "Add creative to be used in the bidding process for a finalized deal. For programmatic guaranteed deals, it's recommended that you associate at least one approved creative with the deal before calling SetReadyToServe, to help reduce the number of bid responses filtered because they don't contain approved creatives. Creatives successfully added to a deal can be found in the Realtime-bidding Creatives API creative.deal_ids. This method only applies to programmatic guaranteed deals. Maximum number of 1000 creatives can be added to a finalized deal.",
  operationId: 'authorizedbuyersmarketplace.buyers.finalizedDeals.addCreative',
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
      deal: z
        .string()
        .openapi({
          param: {
            description:
              'Required. Name of the finalized deal in the format of: `buyers/{accountId}/finalizedDeals/{dealId}`',
            in: 'path',
            name: 'deal',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: AddCreativeRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: FinalizedDealSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/authorized-buyers-marketplace'],
      Oauth2c: ['https://www.googleapis.com/auth/authorized-buyers-marketplace'],
    },
  ],
})

export const postV1DealSetReadyToServeRoute = createRoute({
  method: 'post',
  path: '/v1/{deal}:setReadyToServe',
  tags: ['buyers'],
  description:
    "Sets the given finalized deal as ready to serve. By default, deals are set as ready to serve as soon as they're finalized. If you want to opt out of the default behavior, and manually indicate that deals are ready to serve, ask your Technical Account Manager to add you to the allowlist. If you choose to use this method, finalized deals belonging to the bidder and its child seats don't start serving until after you call `setReadyToServe`, and after the deals become active. For example, you can use this method to delay receiving bid requests until your creative is ready. This method only applies to programmatic guaranteed deals.",
  operationId: 'authorizedbuyersmarketplace.buyers.finalizedDeals.setReadyToServe',
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
      deal: z
        .string()
        .openapi({
          param: {
            description: 'Required. Format: `buyers/{accountId}/finalizedDeals/{dealId}`',
            in: 'path',
            name: 'deal',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: SetReadyToServeRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: FinalizedDealSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/authorized-buyers-marketplace'],
      Oauth2c: ['https://www.googleapis.com/auth/authorized-buyers-marketplace'],
    },
  ],
})

export const getV1NameRoute = createRoute({
  method: 'get',
  path: '/v1/{name}',
  tags: ['buyers'],
  description: 'Gets the requested publisher profile by name.',
  operationId: 'authorizedbuyersmarketplace.buyers.publisherProfiles.get',
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
              'Required. Name of the publisher profile. Format: `buyers/{buyerId}/publisherProfiles/{publisherProfileId}`',
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
      content: { 'application/json': { schema: PublisherProfileSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/authorized-buyers-marketplace'],
      Oauth2c: ['https://www.googleapis.com/auth/authorized-buyers-marketplace'],
    },
  ],
})

export const deleteV1NameRoute = createRoute({
  method: 'delete',
  path: '/v1/{name}',
  tags: ['buyers'],
  description:
    "Deletes an existing client user. The client user will lose access to the Authorized Buyers UI. Note that if a client user is deleted, the user's access to the UI can't be restored unless a new client user is created and activated.",
  operationId: 'authorizedbuyersmarketplace.buyers.clients.users.delete',
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
              'Required. Format: `buyers/{buyerAccountId}/clients/{clientAccountId}/clientUsers/{userId}`',
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
      content: { 'application/json': { schema: EmptySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/authorized-buyers-marketplace'],
      Oauth2c: ['https://www.googleapis.com/auth/authorized-buyers-marketplace'],
    },
  ],
})

export const patchV1NameRoute = createRoute({
  method: 'patch',
  path: '/v1/{name}',
  tags: ['buyers'],
  description:
    'Updates the given deal at the buyer known revision number. If the server revision has advanced since the passed-in proposal.proposal_revision an ABORTED error message will be returned. The revision number is incremented by the server whenever the proposal or its constituent deals are updated. Note: The revision number is kept at a proposal level. The buyer of the API is expected to keep track of the revision number after the last update operation and send it in as part of the next update request. This way, if there are further changes on the server (for example, seller making new updates), then the server can detect conflicts and reject the proposed changes.',
  operationId: 'authorizedbuyersmarketplace.buyers.proposals.deals.patch',
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
      updateMask: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'List of fields to be updated. If empty or unspecified, the service will update all fields populated in the update request excluding the output only fields and primitive fields with default value. Note that explicit field mask is required in order to reset a primitive field back to its default value, for example, false for boolean fields, 0 for integer fields. A special field mask consisting of a single path "*" can be used to indicate full replacement(the equivalent of PUT method), updatable fields unset or unspecified in the input will be cleared or set to default value. Output only fields will be ignored regardless of the value of updateMask.',
            in: 'query',
            name: 'updateMask',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description:
              'Immutable. The unique identifier of the deal. Auto-generated by the server when a deal is created. Format: buyers/{accountId}/proposals/{proposalId}/deals/{dealId}',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DealSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: DealSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/authorized-buyers-marketplace'],
      Oauth2c: ['https://www.googleapis.com/auth/authorized-buyers-marketplace'],
    },
  ],
})

export const postV1NameAcceptRoute = createRoute({
  method: 'post',
  path: '/v1/{name}:accept',
  tags: ['buyers'],
  description:
    'Accepts the proposal at the given revision number. If the revision number in the request is behind the latest from the server, an error message will be returned. This call updates the Proposal.state from `BUYER_ACCEPTANCE_REQUESTED` to `FINALIZED`; it has no side effect if the Proposal.state is already `FINALIZED` and throws exception if the Proposal.state is not either `BUYER_ACCEPTANCE_REQUESTED` or `FINALIZED`. Accepting a proposal means the buyer understands and accepts the Proposal.terms_and_conditions proposed by the seller.',
  operationId: 'authorizedbuyersmarketplace.buyers.proposals.accept',
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
              'Name of the proposal. Format: `buyers/{accountId}/proposals/{proposalId}`',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: AcceptProposalRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ProposalSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/authorized-buyers-marketplace'],
      Oauth2c: ['https://www.googleapis.com/auth/authorized-buyers-marketplace'],
    },
  ],
})

export const postV1NameActivateRoute = createRoute({
  method: 'post',
  path: '/v1/{name}:activate',
  tags: ['buyers'],
  description:
    'Activates an existing client user. The state of the client user will be updated from "INACTIVE" to "ACTIVE". This method has no effect if the client user is already in "ACTIVE" state. An error will be returned if the client user to activate is still in "INVITED" state.',
  operationId: 'authorizedbuyersmarketplace.buyers.clients.users.activate',
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
              'Required. Format: `buyers/{buyerAccountId}/clients/{clientAccountId}/clientUsers/{userId}`',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ActivateClientUserRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ClientUserSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/authorized-buyers-marketplace'],
      Oauth2c: ['https://www.googleapis.com/auth/authorized-buyers-marketplace'],
    },
  ],
})

export const postV1NameDeactivateRoute = createRoute({
  method: 'post',
  path: '/v1/{name}:deactivate',
  tags: ['buyers'],
  description:
    'Deactivates an existing client user. The state of the client user will be updated from "ACTIVE" to "INACTIVE". This method has no effect if the client user is already in "INACTIVE" state. An error will be returned if the client user to deactivate is still in "INVITED" state.',
  operationId: 'authorizedbuyersmarketplace.buyers.clients.users.deactivate',
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
              'Required. Format: `buyers/{buyerAccountId}/clients/{clientAccountId}/clientUsers/{userId}`',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DeactivateClientUserRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ClientUserSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/authorized-buyers-marketplace'],
      Oauth2c: ['https://www.googleapis.com/auth/authorized-buyers-marketplace'],
    },
  ],
})

export const postV1NamePauseRoute = createRoute({
  method: 'post',
  path: '/v1/{name}:pause',
  tags: ['buyers'],
  description:
    'Pauses serving of the given finalized deal. This call only pauses the serving status, and does not affect other fields of the finalized deal. Calling this method for an already paused deal has no effect. This method only applies to programmatic guaranteed deals.',
  operationId: 'authorizedbuyersmarketplace.buyers.finalizedDeals.pause',
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
            description: 'Required. Format: `buyers/{accountId}/finalizedDeals/{dealId}`',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: PauseFinalizedDealRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: FinalizedDealSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/authorized-buyers-marketplace'],
      Oauth2c: ['https://www.googleapis.com/auth/authorized-buyers-marketplace'],
    },
  ],
})

export const postV1NameResumeRoute = createRoute({
  method: 'post',
  path: '/v1/{name}:resume',
  tags: ['buyers'],
  description:
    'Resumes serving of the given finalized deal. Calling this method for an running deal has no effect. If a deal is initially paused by the seller, calling this method will not resume serving of the deal until the seller also resumes the deal. This method only applies to programmatic guaranteed deals.',
  operationId: 'authorizedbuyersmarketplace.buyers.finalizedDeals.resume',
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
            description: 'Required. Format: `buyers/{accountId}/finalizedDeals/{dealId}`',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ResumeFinalizedDealRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: FinalizedDealSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/authorized-buyers-marketplace'],
      Oauth2c: ['https://www.googleapis.com/auth/authorized-buyers-marketplace'],
    },
  ],
})

export const postV1NameSubscribeRoute = createRoute({
  method: 'post',
  path: '/v1/{name}:subscribe',
  tags: ['buyers'],
  description:
    'Subscribe to the auction package for the specified buyer. Once subscribed, the bidder will receive a call out for inventory matching the auction package targeting criteria with the auction package deal ID and the specified buyer.',
  operationId: 'authorizedbuyersmarketplace.buyers.auctionPackages.subscribe',
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
              'Required. Name of the auction package. Format: `buyers/{accountId}/auctionPackages/{auctionPackageId}`',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: SubscribeAuctionPackageRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: AuctionPackageSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/authorized-buyers-marketplace'],
      Oauth2c: ['https://www.googleapis.com/auth/authorized-buyers-marketplace'],
    },
  ],
})

export const postV1NameUnsubscribeRoute = createRoute({
  method: 'post',
  path: '/v1/{name}:unsubscribe',
  tags: ['buyers'],
  description:
    'Unsubscribe from the auction package for the specified buyer. Once unsubscribed, the bidder will no longer receive a call out for the auction package deal ID and the specified buyer.',
  operationId: 'authorizedbuyersmarketplace.buyers.auctionPackages.unsubscribe',
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
              'Required. Name of the auction package. Format: `buyers/{accountId}/auctionPackages/{auctionPackageId}`',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: UnsubscribeAuctionPackageRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: AuctionPackageSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/authorized-buyers-marketplace'],
      Oauth2c: ['https://www.googleapis.com/auth/authorized-buyers-marketplace'],
    },
  ],
})

export const getV1ParentAuctionPackagesRoute = createRoute({
  method: 'get',
  path: '/v1/{parent}/auctionPackages',
  tags: ['buyers'],
  description: 'List the auction packages subscribed by a buyer and its clients.',
  operationId: 'authorizedbuyersmarketplace.buyers.auctionPackages.list',
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
              'Requested page size. The server may return fewer results than requested. Max allowed page size is 500.',
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
            description: 'The page token as returned. ListAuctionPackagesResponse.nextPageToken',
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
              'Required. Name of the parent buyer that can access the auction package. Format: `buyers/{accountId}`',
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
      content: { 'application/json': { schema: ListAuctionPackagesResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/authorized-buyers-marketplace'],
      Oauth2c: ['https://www.googleapis.com/auth/authorized-buyers-marketplace'],
    },
  ],
})

export const getV1ParentClientsRoute = createRoute({
  method: 'get',
  path: '/v1/{parent}/clients',
  tags: ['buyers'],
  description: 'Lists all the clients for the current buyer.',
  operationId: 'authorizedbuyersmarketplace.buyers.clients.list',
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
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Query string using the [Filtering Syntax](https://developers.google.com/authorized-buyers/apis/guides/v2/list-filters) Supported fields for filtering are: * partnerClientId Use this field to filter the clients by the partnerClientId. For example, if the partnerClientId of the client is "1234", the value of this field should be `partnerClientId = "1234"`, in order to get only the client whose partnerClientId is "1234" in the response.',
            in: 'query',
            name: 'filter',
            schema: { type: 'string' },
            required: false,
          },
        }),
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
              'Requested page size. If left blank, a default page size of 500 will be applied.',
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
              'A token identifying a page of results the server should return. Typically, this is the value of ListClientsResponse.nextPageToken returned from the previous call to the list method.',
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
            description: 'Required. The name of the buyer. Format: `buyers/{accountId}`',
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
      content: { 'application/json': { schema: ListClientsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/authorized-buyers-marketplace'],
      Oauth2c: ['https://www.googleapis.com/auth/authorized-buyers-marketplace'],
    },
  ],
})

export const postV1ParentClientsRoute = createRoute({
  method: 'post',
  path: '/v1/{parent}/clients',
  tags: ['buyers'],
  description: 'Creates a new client.',
  operationId: 'authorizedbuyersmarketplace.buyers.clients.create',
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
            description: 'Required. The name of the buyer. Format: `buyers/{accountId}`',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ClientSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ClientSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/authorized-buyers-marketplace'],
      Oauth2c: ['https://www.googleapis.com/auth/authorized-buyers-marketplace'],
    },
  ],
})

export const getV1ParentDealsRoute = createRoute({
  method: 'get',
  path: '/v1/{parent}/deals',
  tags: ['buyers'],
  description:
    'Lists all deals in a proposal. To retrieve only the finalized revision deals regardless if a deal is being renegotiated, see the FinalizedDeals resource.',
  operationId: 'authorizedbuyersmarketplace.buyers.proposals.deals.list',
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
              'Requested page size. The server may return fewer results than requested. If requested more than 500, the server will return 500 results per page. If unspecified, the server will pick a default page size of 100.',
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
            description: 'The page token as returned from ListDealsResponse.',
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
              'Required. The name of the proposal containing the deals to retrieve. Format: buyers/{accountId}/proposals/{proposalId}',
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
      content: { 'application/json': { schema: ListDealsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/authorized-buyers-marketplace'],
      Oauth2c: ['https://www.googleapis.com/auth/authorized-buyers-marketplace'],
    },
  ],
})

export const postV1ParentDealsBatchUpdateRoute = createRoute({
  method: 'post',
  path: '/v1/{parent}/deals:batchUpdate',
  tags: ['buyers'],
  description: 'Batch updates multiple deals in the same proposal.',
  operationId: 'authorizedbuyersmarketplace.buyers.proposals.deals.batchUpdate',
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
              'Required. The name of the proposal containing the deals to batch update. Format: buyers/{accountId}/proposals/{proposalId}',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: BatchUpdateDealsRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: BatchUpdateDealsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/authorized-buyers-marketplace'],
      Oauth2c: ['https://www.googleapis.com/auth/authorized-buyers-marketplace'],
    },
  ],
})

export const getV1ParentFinalizedDealsRoute = createRoute({
  method: 'get',
  path: '/v1/{parent}/finalizedDeals',
  tags: ['buyers'],
  description:
    'Lists finalized deals. Use the URL path "/v1/buyers/{accountId}/finalizedDeals" to list finalized deals for the current buyer and its clients. Bidders can use the URL path "/v1/bidders/{accountId}/finalizedDeals" to list finalized deals for the bidder, its buyers and all their clients.',
  operationId: 'authorizedbuyersmarketplace.buyers.finalizedDeals.list',
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
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional query string using the [Cloud API list filtering syntax](https://developers.google.com/authorized-buyers/apis/guides/v2/list-filters) Supported columns for filtering are: * deal.displayName * deal.dealType * deal.createTime * deal.updateTime * deal.flightStartTime * deal.flightEndTime * dealServingStatus',
            in: 'query',
            name: 'filter',
            schema: { type: 'string' },
            required: false,
          },
        }),
      orderBy: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "An optional query string to sort finalized deals using the [Cloud API sorting syntax](https://cloud.google.com/apis/design/design_patterns#sorting_order). If no sort order is specified, results will be returned in an arbitrary order. Supported columns for sorting are: * deal.displayName * deal.createTime * deal.updateTime * deal.flightStartTime * deal.flightEndTime * rtbMetrics.bidRequests7Days * rtbMetrics.bids7Days * rtbMetrics.adImpressions7Days * rtbMetrics.bidRate7Days * rtbMetrics.filteredBidRate7Days * rtbMetrics.mustBidRateCurrentMonth Example: 'deal.displayName, deal.updateTime desc'",
            in: 'query',
            name: 'orderBy',
            schema: { type: 'string' },
            required: false,
          },
        }),
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
              'Requested page size. The server may return fewer results than requested. If requested more than 500, the server will return 500 results per page. If unspecified, the server will pick a default page size of 100.',
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
            description: 'The page token as returned from ListFinalizedDealsResponse.',
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
              'Required. The buyer to list the finalized deals for, in the format: `buyers/{accountId}`. When used to list finalized deals for a bidder, its buyers and clients, in the format `bidders/{accountId}`.',
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
      content: { 'application/json': { schema: ListFinalizedDealsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/authorized-buyers-marketplace'],
      Oauth2c: ['https://www.googleapis.com/auth/authorized-buyers-marketplace'],
    },
  ],
})

export const getV1ParentProposalsRoute = createRoute({
  method: 'get',
  path: '/v1/{parent}/proposals',
  tags: ['buyers'],
  description:
    'Lists proposals. A filter expression (list filter syntax) may be specified to filter the results. This will not list finalized versions of proposals that are being renegotiated; to retrieve these use the finalizedProposals resource.',
  operationId: 'authorizedbuyersmarketplace.buyers.proposals.list',
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
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional query string using the [Cloud API list filtering syntax](https://developers.google.com/authorized-buyers/apis/guides/v2/list-filters) Supported columns for filtering are: * displayName * dealType * updateTime * state',
            in: 'query',
            name: 'filter',
            schema: { type: 'string' },
            required: false,
          },
        }),
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
              'Requested page size. The server may return fewer results than requested. If unspecified, the server will put a size of 500.',
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
            description: 'The page token as returned from ListProposalsResponse.',
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
              'Required. Parent that owns the collection of proposals Format: `buyers/{accountId}`',
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
      content: { 'application/json': { schema: ListProposalsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/authorized-buyers-marketplace'],
      Oauth2c: ['https://www.googleapis.com/auth/authorized-buyers-marketplace'],
    },
  ],
})

export const getV1ParentPublisherProfilesRoute = createRoute({
  method: 'get',
  path: '/v1/{parent}/publisherProfiles',
  tags: ['buyers'],
  description:
    "Lists publisher profiles. The returned publisher profiles aren't in any defined order. The order of the results might change. A new publisher profile can appear in any place in the list of returned results.",
  operationId: 'authorizedbuyersmarketplace.buyers.publisherProfiles.list',
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
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional query string using the [Cloud API list filtering] (https://developers.google.com/authorized-buyers/apis/guides/v2/list-filters) syntax.',
            in: 'query',
            name: 'filter',
            schema: { type: 'string' },
            required: false,
          },
        }),
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
              'Requested page size. The server may return fewer results than requested. If requested more than 500, the server will return 500 results per page. If unspecified, the server will pick a default page size of 100.',
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
              'The page token as returned from a previous ListPublisherProfilesResponse.',
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
              'Required. Parent that owns the collection of publisher profiles Format: `buyers/{buyerId}`',
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
      content: { 'application/json': { schema: ListPublisherProfilesResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/authorized-buyers-marketplace'],
      Oauth2c: ['https://www.googleapis.com/auth/authorized-buyers-marketplace'],
    },
  ],
})

export const getV1ParentUsersRoute = createRoute({
  method: 'get',
  path: '/v1/{parent}/users',
  tags: ['buyers'],
  description: 'Lists all client users for a specified client.',
  operationId: 'authorizedbuyersmarketplace.buyers.clients.users.list',
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
              'Requested page size. If left blank, a default page size of 500 will be applied.',
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
              'A token identifying a page of results the server should return. Typically, this is the value of ListClientUsersResponse.nextPageToken returned from the previous call to the list method.',
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
              'Required. The name of the client. Format: `buyers/{buyerAccountId}/clients/{clientAccountId}`',
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
      content: { 'application/json': { schema: ListClientUsersResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/authorized-buyers-marketplace'],
      Oauth2c: ['https://www.googleapis.com/auth/authorized-buyers-marketplace'],
    },
  ],
})

export const postV1ParentUsersRoute = createRoute({
  method: 'post',
  path: '/v1/{parent}/users',
  tags: ['buyers'],
  description:
    'Creates a new client user in "INVITED" state. An email invitation will be sent to the new user, once accepted the user will become active.',
  operationId: 'authorizedbuyersmarketplace.buyers.clients.users.create',
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
              'Required. The name of the client. Format: `buyers/{accountId}/clients/{clientAccountId}`',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ClientUserSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ClientUserSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/authorized-buyers-marketplace'],
      Oauth2c: ['https://www.googleapis.com/auth/authorized-buyers-marketplace'],
    },
  ],
})

export const postV1ProposalAddNoteRoute = createRoute({
  method: 'post',
  path: '/v1/{proposal}:addNote',
  tags: ['buyers'],
  description: 'Creates a note for this proposal and sends to the seller.',
  operationId: 'authorizedbuyersmarketplace.buyers.proposals.addNote',
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
      proposal: z
        .string()
        .openapi({
          param: {
            description:
              'Name of the proposal. Format: `buyers/{accountId}/proposals/{proposalId}`',
            in: 'path',
            name: 'proposal',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: AddNoteRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ProposalSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/authorized-buyers-marketplace'],
      Oauth2c: ['https://www.googleapis.com/auth/authorized-buyers-marketplace'],
    },
  ],
})

export const postV1ProposalCancelNegotiationRoute = createRoute({
  method: 'post',
  path: '/v1/{proposal}:cancelNegotiation',
  tags: ['buyers'],
  description:
    "Cancels an ongoing negotiation on a proposal. This does not cancel or end serving for the deals if the proposal has been finalized. If the proposal has not been finalized before, calling this method will set the Proposal.state to `TERMINATED` and increment the Proposal.proposal_revision. If the proposal has been finalized before and is under renegotiation now, calling this method will reset the Proposal.state to `FINALIZED` and increment the Proposal.proposal_revision. This method does not support private auction proposals whose Proposal.deal_type is 'PRIVATE_AUCTION'.",
  operationId: 'authorizedbuyersmarketplace.buyers.proposals.cancelNegotiation',
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
      proposal: z
        .string()
        .openapi({
          param: {
            description:
              'Name of the proposal. Format: `buyers/{accountId}/proposals/{proposalId}`',
            in: 'path',
            name: 'proposal',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CancelNegotiationRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ProposalSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/authorized-buyers-marketplace'],
      Oauth2c: ['https://www.googleapis.com/auth/authorized-buyers-marketplace'],
    },
  ],
})
