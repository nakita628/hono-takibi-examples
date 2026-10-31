import { createRoute, z } from '@hono/zod-openapi'

const AccountSchema = z
  .object({
    applyPretargetingToNonGuaranteedDeals: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'When this is false, bid requests that include a deal ID for a private auction or preferred deal are always sent to your bidder. When true, all active pretargeting configs will be applied to private auctions and preferred deals. Programmatic Guaranteed deals (when enabled) are always sent to your bidder.',
      }),
    bidderLocation: z
      .array(
        z
          .object({
            bidProtocol: z
              .string()
              .exactOptional()
              .openapi({
                description:
                  'The protocol that the bidder endpoint is using. OpenRTB protocols with prefix PROTOCOL_OPENRTB_PROTOBUF use proto buffer, otherwise use JSON.  Allowed values:  \n- PROTOCOL_ADX \n- PROTOCOL_OPENRTB_2_2 \n- PROTOCOL_OPENRTB_2_3 \n- PROTOCOL_OPENRTB_2_4 \n- PROTOCOL_OPENRTB_2_5 \n- PROTOCOL_OPENRTB_PROTOBUF_2_3 \n- PROTOCOL_OPENRTB_PROTOBUF_2_4 \n- PROTOCOL_OPENRTB_PROTOBUF_2_5',
              }),
            maximumQps: z
              .int32()
              .exactOptional()
              .openapi({
                description: 'The maximum queries per second the Ad Exchange will send.',
              }),
            region: z
              .string()
              .exactOptional()
              .openapi({
                description:
                  'The geographical region the Ad Exchange should send requests from. Only used by some quota systems, but always setting the value is recommended. Allowed values:  \n- ASIA \n- EUROPE \n- US_EAST \n- US_WEST',
              }),
            url: z
              .string()
              .exactOptional()
              .openapi({ description: 'The URL to which the Ad Exchange will send bid requests.' }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({ description: 'Your bidder locations that have distinct URLs.' }),
    cookieMatchingNid: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The nid parameter value used in cookie match requests. Please contact your technical account manager if you need to change this.',
      }),
    cookieMatchingUrl: z
      .string()
      .exactOptional()
      .openapi({ description: 'The base URL used in cookie match requests.' }),
    id: z.int32().exactOptional().openapi({ description: 'Account id.' }),
    kind: z
      .string()
      .default('adexchangebuyer#account')
      .exactOptional()
      .openapi({ description: 'Resource type.' }),
    maximumActiveCreatives: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The maximum number of active creatives that an account can have, where a creative is active if it was inserted or bid with in the last 30 days. Please contact your technical account manager if you need to change this.',
      }),
    maximumTotalQps: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The sum of all bidderLocation.maximumQps values cannot exceed this. Please contact your technical account manager if you need to change this.',
      }),
    numberActiveCreatives: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The number of creatives that this account inserted or bid with in the last 30 days.',
      }),
  })
  .openapi({ description: 'Configuration data for an Ad Exchange buyer account.', required: [] })
  .openapi('Account')

const AccountsListSchema = z
  .object({
    items: z.array(AccountSchema).exactOptional().openapi({ description: 'A list of accounts.' }),
    kind: z
      .string()
      .default('adexchangebuyer#accountsList')
      .exactOptional()
      .openapi({ description: 'Resource type.' }),
  })
  .openapi({
    description:
      'An account feed lists Ad Exchange buyer accounts that the user has access to. Each entry in the feed corresponds to a single buyer account.',
    required: [],
  })
  .openapi('AccountsList')

const PrivateDataSchema = z
  .object({ referenceId: z.string().exactOptional(), referencePayload: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('PrivateData')

const DealServingMetadataDealPauseStatusSchema = z
  .object({
    buyerPauseReason: z.string().exactOptional(),
    firstPausedBy: z
      .string()
      .exactOptional()
      .openapi({
        description: 'If the deal is paused, records which party paused the deal first.',
      }),
    hasBuyerPaused: z.boolean().exactOptional(),
    hasSellerPaused: z.boolean().exactOptional(),
    sellerPauseReason: z.string().exactOptional(),
  })
  .openapi({
    description:
      'Tracks which parties (if any) have paused a deal. The deal is considered paused if has_buyer_paused || has_seller_paused. Each of the has_buyer_paused or the has_seller_paused bits can be set independently.',
    required: [],
  })
  .openapi('DealServingMetadataDealPauseStatus')

const DealServingMetadataSchema = z
  .object({
    alcoholAdsAllowed: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'True if alcohol ads are allowed for this deal (read-only). This field is only populated when querying for finalized orders using the method GetFinalizedOrderDeals',
      }),
    dealPauseStatus: DealServingMetadataDealPauseStatusSchema.exactOptional().openapi({
      description:
        'Tracks which parties (if any) have paused a deal. (readonly, except via PauseResumeOrderDeals action)',
    }),
  })
  .openapi({ required: [] })
  .openapi('DealServingMetadata')

const DeliveryControlFrequencyCapSchema = z
  .object({
    maxImpressions: z.int32().exactOptional(),
    numTimeUnits: z.int32().exactOptional(),
    timeUnitType: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DeliveryControlFrequencyCap')

const DeliveryControlSchema = z
  .object({
    creativeBlockingLevel: z.string().exactOptional(),
    deliveryRateType: z.string().exactOptional(),
    frequencyCaps: z.array(DeliveryControlFrequencyCapSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DeliveryControl')

const ContactInformationSchema = z
  .object({
    email: z.string().exactOptional().openapi({ description: 'Email address of the contact.' }),
    name: z.string().exactOptional().openapi({ description: 'The name of the contact.' }),
  })
  .openapi({ required: [] })
  .openapi('ContactInformation')

const TargetingValueSizeSchema = z
  .object({
    height: z.int32().exactOptional().openapi({ description: 'The height of the creative.' }),
    width: z.int32().exactOptional().openapi({ description: 'The width of the creative.' }),
  })
  .openapi({ required: [] })
  .openapi('TargetingValueSize')

const TargetingValueCreativeSizeSchema = z
  .object({
    allowedFormats: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'The formats allowed by the publisher.' }),
    companionSizes: z
      .array(TargetingValueSizeSchema)
      .exactOptional()
      .openapi({ description: 'For video size type, the list of companion sizes.' }),
    creativeSizeType: z
      .string()
      .exactOptional()
      .openapi({ description: 'The Creative size type.' }),
    nativeTemplate: z
      .string()
      .exactOptional()
      .openapi({ description: 'The native template for native ad.' }),
    size: TargetingValueSizeSchema.exactOptional().openapi({
      description: 'For regular or video creative size type, specifies the size of the creative.',
    }),
    skippableAdType: z
      .string()
      .exactOptional()
      .openapi({ description: 'The skippable ad type for video size.' }),
  })
  .openapi({ description: 'Next Id: 7', required: [] })
  .openapi('TargetingValueCreativeSize')

const TargetingValueDayPartTargetingDayPartSchema = z
  .object({
    dayOfWeek: z.string().exactOptional(),
    endHour: z.int32().exactOptional(),
    endMinute: z.int32().exactOptional(),
    startHour: z.int32().exactOptional(),
    startMinute: z.int32().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TargetingValueDayPartTargetingDayPart')

const TargetingValueDayPartTargetingSchema = z
  .object({
    dayParts: z.array(TargetingValueDayPartTargetingDayPartSchema).exactOptional(),
    timeZoneType: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TargetingValueDayPartTargeting')

const TargetingValueDemogAgeCriteriaSchema = z
  .object({ demogAgeCriteriaIds: z.array(z.string()).exactOptional() })
  .openapi({ required: [] })
  .openapi('TargetingValueDemogAgeCriteria')

const TargetingValueDemogGenderCriteriaSchema = z
  .object({ demogGenderCriteriaIds: z.array(z.string()).exactOptional() })
  .openapi({ required: [] })
  .openapi('TargetingValueDemogGenderCriteria')

const TargetingValueRequestPlatformTargetingSchema = z
  .object({ requestPlatforms: z.array(z.string()).exactOptional() })
  .openapi({ required: [] })
  .openapi('TargetingValueRequestPlatformTargeting')

const TargetingValueSchema = z
  .object({
    creativeSizeValue: TargetingValueCreativeSizeSchema.exactOptional().openapi({
      description: 'The creative size value to exclude/include.',
    }),
    dayPartTargetingValue: TargetingValueDayPartTargetingSchema.exactOptional().openapi({
      description:
        'The daypart targeting to include / exclude. Filled in when the key is GOOG_DAYPART_TARGETING.',
    }),
    demogAgeCriteriaValue: TargetingValueDemogAgeCriteriaSchema.exactOptional(),
    demogGenderCriteriaValue: TargetingValueDemogGenderCriteriaSchema.exactOptional(),
    longValue: z
      .string()
      .exactOptional()
      .openapi({ description: 'The long value to exclude/include.' }),
    requestPlatformTargetingValue: TargetingValueRequestPlatformTargetingSchema.exactOptional(),
    stringValue: z
      .string()
      .exactOptional()
      .openapi({ description: 'The string value to exclude/include.' }),
  })
  .openapi({ required: [] })
  .openapi('TargetingValue')

const SharedTargetingSchema = z
  .object({
    exclusions: z
      .array(TargetingValueSchema)
      .exactOptional()
      .openapi({
        description: "The list of values to exclude from targeting. Each value is AND'd together.",
      }),
    inclusions: z
      .array(TargetingValueSchema)
      .exactOptional()
      .openapi({
        description:
          "The list of value to include as part of the targeting. Each value is OR'd together.",
      }),
    key: z
      .string()
      .exactOptional()
      .openapi({ description: 'The key representing the shared targeting criterion.' }),
  })
  .openapi({ required: [] })
  .openapi('SharedTargeting')

const PriceSchema = z
  .object({
    amountMicros: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The price value in micros.' }),
    currencyCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'The currency code for the price.' }),
    expectedCpmMicros: z
      .float64()
      .exactOptional()
      .openapi({ description: 'In case of CPD deals, the expected CPM in micros.' }),
    pricingType: z
      .string()
      .exactOptional()
      .openapi({ description: 'The pricing type for the deal/product.' }),
  })
  .openapi({ required: [] })
  .openapi('Price')

const DealTermsGuaranteedFixedPriceTermsBillingInfoSchema = z
  .object({
    currencyConversionTimeMs: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The timestamp (in ms since epoch) when the original reservation price for the deal was first converted to DFP currency. This is used to convert the contracted price into buyer's currency without discrepancy.",
      }),
    dfpLineItemId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The DFP line item id associated with this deal. For features like CPD, buyers can retrieve the DFP line item for billing reconciliation.',
      }),
    originalContractedQuantity: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The original contracted quantity (# impressions) for this deal. To ensure delivery, sometimes the publisher will book the deal with a impression buffer, such that guaranteed_looks is greater than the contracted quantity. However clients are billed using the original contracted quantity.',
      }),
    price: PriceSchema.exactOptional().openapi({
      description:
        'The original reservation price for the deal, if the currency code is different from the one used in negotiation.',
    }),
  })
  .openapi({ required: [] })
  .openapi('DealTermsGuaranteedFixedPriceTermsBillingInfo')

const BuyerSchema = z
  .object({
    accountId: z.string().exactOptional().openapi({ description: 'Adx account id of the buyer.' }),
  })
  .openapi({ required: [] })
  .openapi('Buyer')

const PricePerBuyerSchema = z
  .object({
    auctionTier: z
      .string()
      .exactOptional()
      .openapi({ description: 'Optional access type for this buyer.' }),
    billedBuyer: BuyerSchema.exactOptional().openapi({
      description: 'Reference to the buyer that will get billed.',
    }),
    buyer: BuyerSchema.exactOptional().openapi({
      description:
        "The buyer who will pay this price. If unset, all buyers can pay this price (if the advertisers match, and there's no more specific rule matching the buyer).",
    }),
    price: PriceSchema.exactOptional().openapi({ description: 'The specified price' }),
  })
  .openapi({
    description:
      'Used to specify pricing rules for buyers. Each PricePerBuyer in a product can become [0,1] deals. To check if there is a PricePerBuyer for a particular buyer we look for the most specific matching rule - we first look for a rule matching the buyer and otherwise look for a matching rule where no buyer is set.',
    required: [],
  })
  .openapi('PricePerBuyer')

const DealTermsGuaranteedFixedPriceTermsSchema = z
  .object({
    billingInfo: DealTermsGuaranteedFixedPriceTermsBillingInfoSchema.exactOptional().openapi({
      description:
        'External billing info for this Deal. This field is relevant when external billing info such as price has a different currency code than DFP/AdX.',
    }),
    fixedPrices: z
      .array(PricePerBuyerSchema)
      .exactOptional()
      .openapi({ description: 'Fixed price for the specified buyer.' }),
    guaranteedImpressions: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Guaranteed impressions as a percentage. This is the percentage of guaranteed looks that the buyer is guaranteeing to buy.',
      }),
    guaranteedLooks: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Count of guaranteed looks. Required for deal, optional for product. For CPD deals, buyer changes to guaranteed_looks will be ignored.',
      }),
    minimumDailyLooks: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Count of minimum daily looks for a CPD deal. For CPD deals, buyer should negotiate on this field instead of guaranteed_looks.',
      }),
  })
  .openapi({ required: [] })
  .openapi('DealTermsGuaranteedFixedPriceTerms')

const DealTermsNonGuaranteedAuctionTermsSchema = z
  .object({
    autoOptimizePrivateAuction: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'True if open auction buyers are allowed to compete with invited buyers in this private auction (buyer-readonly).',
      }),
    reservePricePerBuyers: z
      .array(PricePerBuyerSchema)
      .exactOptional()
      .openapi({ description: 'Reserve price for the specified buyer.' }),
  })
  .openapi({ required: [] })
  .openapi('DealTermsNonGuaranteedAuctionTerms')

const DealTermsNonGuaranteedFixedPriceTermsSchema = z
  .object({
    fixedPrices: z
      .array(PricePerBuyerSchema)
      .exactOptional()
      .openapi({ description: 'Fixed price for the specified buyer.' }),
  })
  .openapi({ required: [] })
  .openapi('DealTermsNonGuaranteedFixedPriceTerms')

const DealTermsRubiconNonGuaranteedTermsSchema = z
  .object({
    priorityPrice: PriceSchema.exactOptional().openapi({
      description: 'Optional price for Rubicon priority access in the auction.',
    }),
    standardPrice: PriceSchema.exactOptional().openapi({
      description: 'Optional price for Rubicon standard access in the auction.',
    }),
  })
  .openapi({ required: [] })
  .openapi('DealTermsRubiconNonGuaranteedTerms')

const DealTermsSchema = z
  .object({
    brandingType: z
      .string()
      .exactOptional()
      .openapi({ description: 'Visibility of the URL in bid requests.' }),
    crossListedExternalDealIdType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Indicates that this ExternalDealId exists under at least two different AdxInventoryDeals. Currently, the only case that the same ExternalDealId will exist is programmatic cross sell case.',
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'Description for the proposed terms of the deal.' }),
    estimatedGrossSpend: PriceSchema.exactOptional().openapi({
      description:
        'Non-binding estimate of the estimated gross spend for this deal Can be set by buyer or seller.',
    }),
    estimatedImpressionsPerDay: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Non-binding estimate of the impressions served per day Can be set by buyer or seller.',
      }),
    guaranteedFixedPriceTerms: DealTermsGuaranteedFixedPriceTermsSchema.exactOptional().openapi({
      description: 'The terms for guaranteed fixed price deals.',
    }),
    nonGuaranteedAuctionTerms: DealTermsNonGuaranteedAuctionTermsSchema.exactOptional().openapi({
      description: 'The terms for non-guaranteed auction deals.',
    }),
    nonGuaranteedFixedPriceTerms:
      DealTermsNonGuaranteedFixedPriceTermsSchema.exactOptional().openapi({
        description: 'The terms for non-guaranteed fixed price deals.',
      }),
    rubiconNonGuaranteedTerms: DealTermsRubiconNonGuaranteedTermsSchema.exactOptional().openapi({
      description: 'The terms for rubicon non-guaranteed deals.',
    }),
    sellerTimeZone: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'For deals with Cost Per Day billing, defines the timezone used to mark the boundaries of a day (buyer-readonly)',
      }),
  })
  .openapi({ required: [] })
  .openapi('DealTerms')

const MarketplaceDealSchema = z
  .object({
    buyerPrivateData: PrivateDataSchema.exactOptional().openapi({
      description: 'Buyer private data (hidden from seller).',
    }),
    creationTimeMs: z
      .string()
      .exactOptional()
      .openapi({ description: 'The time (ms since epoch) of the deal creation. (readonly)' }),
    creativePreApprovalPolicy: z
      .string()
      .exactOptional()
      .openapi({ description: 'Specifies the creative pre-approval policy (buyer-readonly)' }),
    creativeSafeFrameCompatibility: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Specifies whether the creative is safeFrame compatible (buyer-readonly)',
      }),
    dealId: z
      .string()
      .exactOptional()
      .openapi({ description: 'A unique deal-id for the deal (readonly).' }),
    dealServingMetadata: DealServingMetadataSchema.exactOptional().openapi({
      description:
        'Metadata about the serving status of this deal (readonly, writes via custom actions)',
    }),
    deliveryControl: DeliveryControlSchema.exactOptional().openapi({
      description:
        'The set of fields around delivery control that are interesting for a buyer to see but are non-negotiable. These are set by the publisher. This message is assigned an id of 100 since some day we would want to model this as a protobuf extension.',
    }),
    externalDealId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The external deal id assigned to this deal once the deal is finalized. This is the deal-id that shows up in serving/reporting etc. (readonly)',
      }),
    flightEndTimeMs: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Proposed flight end time of the deal (ms since epoch) This will generally be stored in a granularity of a second. (updatable)',
      }),
    flightStartTimeMs: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Proposed flight start time of the deal (ms since epoch) This will generally be stored in a granularity of a second. (updatable)',
      }),
    inventoryDescription: z
      .string()
      .exactOptional()
      .openapi({ description: 'Description for the deal terms. (buyer-readonly)' }),
    isRfpTemplate: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates whether the current deal is a RFP template. RFP template is created by buyer and not based on seller created products.',
      }),
    isSetupComplete: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'True, if the buyside inventory setup is complete for this deal. (readonly, except via OrderSetupCompleted action)',
      }),
    kind: z
      .string()
      .default('adexchangebuyer#marketplaceDeal')
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "adexchangebuyer#marketplaceDeal".',
      }),
    lastUpdateTimeMs: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The time (ms since epoch) when the deal was last updated. (readonly)',
      }),
    makegoodRequestedReason: z.string().exactOptional(),
    name: z.string().exactOptional().openapi({ description: 'The name of the deal. (updatable)' }),
    productId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The product-id from which this deal was created. (readonly, except on create)',
      }),
    productRevisionNumber: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The revision number of the product that the deal was created from (readonly, except on create)',
      }),
    programmaticCreativeSource: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Specifies the creative source for programmatic deals, PUBLISHER means creative is provided by seller and ADVERTISR means creative is provided by buyer. (buyer-readonly)',
      }),
    proposalId: z.string().exactOptional(),
    sellerContacts: z
      .array(ContactInformationSchema)
      .exactOptional()
      .openapi({
        description: 'Optional Seller contact information for the deal (buyer-readonly)',
      }),
    sharedTargetings: z
      .array(SharedTargetingSchema)
      .exactOptional()
      .openapi({
        description:
          "The shared targeting visible to buyers and sellers. Each shared targeting entity is AND'd together. (updatable)",
      }),
    syndicationProduct: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The syndication product associated with the deal. (readonly, except on create)',
      }),
    terms: DealTermsSchema.exactOptional().openapi({
      description: 'The negotiable terms of the deal. (updatable)',
    }),
    webPropertyCode: z.string().exactOptional(),
  })
  .openapi({
    description:
      'A proposal can contain multiple deals. A deal contains the terms and targeting information that is used for serving.',
    required: [],
  })
  .openapi('MarketplaceDeal')

const AddOrderDealsRequestSchema = z
  .object({
    deals: z
      .array(MarketplaceDealSchema)
      .exactOptional()
      .openapi({ description: 'The list of deals to add' }),
    proposalRevisionNumber: z
      .string()
      .exactOptional()
      .openapi({ description: 'The last known proposal revision number.' }),
    updateAction: z
      .string()
      .exactOptional()
      .openapi({ description: 'Indicates an optional action to take on the proposal' }),
  })
  .openapi({ required: [] })
  .openapi('AddOrderDealsRequest')

const AddOrderDealsResponseSchema = z
  .object({
    deals: z
      .array(MarketplaceDealSchema)
      .exactOptional()
      .openapi({
        description: 'List of deals added (in the same proposal as passed in the request)',
      }),
    proposalRevisionNumber: z
      .string()
      .exactOptional()
      .openapi({ description: 'The updated revision number for the proposal.' }),
  })
  .openapi({ required: [] })
  .openapi('AddOrderDealsResponse')

const MarketplaceNoteSchema = z
  .object({
    creatorRole: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The role of the person (buyer/seller) creating the note. (readonly)',
      }),
    dealId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Notes can optionally be associated with a deal. (readonly, except on create)',
      }),
    kind: z
      .string()
      .default('adexchangebuyer#marketplaceNote')
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "adexchangebuyer#marketplaceNote".',
      }),
    note: z
      .string()
      .exactOptional()
      .openapi({ description: 'The actual note to attach. (readonly, except on create)' }),
    noteId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique id for the note. (readonly)' }),
    proposalId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The proposalId that a note is attached to. (readonly)' }),
    proposalRevisionNumber: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If the note is associated with a proposal revision number, then store that here. (readonly, except on create)',
      }),
    timestampMs: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The timestamp (ms since epoch) that this note was created. (readonly)',
      }),
  })
  .openapi({
    description:
      'A proposal is associated with a bunch of notes which may optionally be associated with a deal and/or revision number.',
    required: [],
  })
  .openapi('MarketplaceNote')

const AddOrderNotesRequestSchema = z
  .object({
    notes: z
      .array(MarketplaceNoteSchema)
      .exactOptional()
      .openapi({ description: 'The list of notes to add.' }),
  })
  .openapi({ required: [] })
  .openapi('AddOrderNotesRequest')

const AddOrderNotesResponseSchema = z
  .object({ notes: z.array(MarketplaceNoteSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('AddOrderNotesResponse')

const BillingInfoSchema = z
  .object({
    accountId: z.int32().exactOptional().openapi({ description: 'Account id.' }),
    accountName: z.string().exactOptional().openapi({ description: 'Account name.' }),
    billingId: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'A list of adgroup IDs associated with this particular account. These IDs may show up as part of a realtime bidding BidRequest, which indicates a bid request for this account.',
      }),
    kind: z
      .string()
      .default('adexchangebuyer#billingInfo')
      .exactOptional()
      .openapi({ description: 'Resource type.' }),
  })
  .openapi({ description: 'The configuration data for an Ad Exchange billing info.', required: [] })
  .openapi('BillingInfo')

const BillingInfoListSchema = z
  .object({
    items: z
      .array(BillingInfoSchema)
      .exactOptional()
      .openapi({ description: 'A list of billing info relevant for your account.' }),
    kind: z
      .string()
      .default('adexchangebuyer#billingInfoList')
      .exactOptional()
      .openapi({ description: 'Resource type.' }),
  })
  .openapi({
    description:
      'A billing info feed lists Billing Info the Ad Exchange buyer account has access to. Each entry in the feed corresponds to a single billing info.',
    required: [],
  })
  .openapi('BillingInfoList')

const BudgetSchema = z
  .object({
    accountId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The id of the account. This is required for get and update requests.',
      }),
    billingId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The billing id to determine which adgroup to provide budget information for. This is required for get and update requests.',
      }),
    budgetAmount: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The daily budget amount in unit amount of the account currency to apply for the billingId provided. This is required for update requests.',
      }),
    currencyCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'The currency code for the buyer. This cannot be altered here.' }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique id that describes this item.' }),
    kind: z
      .string()
      .default('adexchangebuyer#budget')
      .exactOptional()
      .openapi({ description: 'The kind of the resource, i.e. "adexchangebuyer#budget".' }),
  })
  .openapi({
    description: 'The configuration data for Ad Exchange RTB - Budget API.',
    required: [],
  })
  .openapi('Budget')

const SellerSchema = z
  .object({
    accountId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The unique id for the seller. The seller fills in this field. The seller account id is then available to buyer in the product.',
      }),
    subAccountId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Optional sub-account id for the seller.' }),
  })
  .openapi({ required: [] })
  .openapi('Seller')

const MarketplaceDealPartySchema = z
  .object({
    buyer: BuyerSchema.exactOptional().openapi({
      description:
        'The buyer/seller associated with the deal. One of buyer/seller is specified for a deal-party.',
    }),
    seller: SellerSchema.exactOptional().openapi({
      description:
        'The buyer/seller associated with the deal. One of buyer/seller is specified for a deal party.',
    }),
  })
  .openapi({ required: [] })
  .openapi('MarketplaceDealParty')

const MarketplaceLabelSchema = z
  .object({
    accountId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The accountId of the party that created the label.' }),
    createTimeMs: z
      .string()
      .exactOptional()
      .openapi({ description: 'The creation time (in ms since epoch) for the label.' }),
    deprecatedMarketplaceDealParty: MarketplaceDealPartySchema.exactOptional().openapi({
      description: 'Information about the party that created the label.',
    }),
    label: z.string().exactOptional().openapi({ description: 'The label to use.' }),
  })
  .openapi({ required: [] })
  .openapi('MarketplaceLabel')

const ProposalSchema = z
  .object({
    billedBuyer: BuyerSchema.exactOptional().openapi({
      description: 'Reference to the buyer that will get billed for this proposal. (readonly)',
    }),
    buyer: BuyerSchema.exactOptional().openapi({
      description: 'Reference to the buyer on the proposal. (readonly, except on create)',
    }),
    buyerContacts: z
      .array(ContactInformationSchema)
      .exactOptional()
      .openapi({ description: 'Optional contact information of the buyer. (seller-readonly)' }),
    buyerPrivateData: PrivateDataSchema.exactOptional().openapi({
      description: 'Private data for buyer. (hidden from seller).',
    }),
    dbmAdvertiserIds: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'IDs of DBM advertisers permission to this proposal.' }),
    hasBuyerSignedOff: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'When an proposal is in an accepted state, indicates whether the buyer has signed off. Once both sides have signed off on a deal, the proposal can be finalized by the seller. (seller-readonly)',
      }),
    hasSellerSignedOff: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'When an proposal is in an accepted state, indicates whether the buyer has signed off Once both sides have signed off on a deal, the proposal can be finalized by the seller. (buyer-readonly)',
      }),
    inventorySource: z
      .string()
      .exactOptional()
      .openapi({
        description: 'What exchange will provide this inventory (readonly, except on create).',
      }),
    isRenegotiating: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'True if the proposal is being renegotiated (readonly).' }),
    isSetupComplete: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'True, if the buyside inventory setup is complete for this proposal. (readonly, except via OrderSetupCompleted action) Deprecated in favor of deal level setup complete flag.',
      }),
    kind: z
      .string()
      .default('adexchangebuyer#proposal')
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "adexchangebuyer#proposal".',
      }),
    labels: z
      .array(MarketplaceLabelSchema)
      .exactOptional()
      .openapi({ description: 'List of labels associated with the proposal. (readonly)' }),
    lastUpdaterOrCommentorRole: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The role of the last user that either updated the proposal or left a comment. (readonly)',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name for the proposal (updatable)' }),
    negotiationId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Optional negotiation id if this proposal is a preferred deal proposal.',
      }),
    originatorRole: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Indicates whether the buyer/seller created the proposal.(readonly)',
      }),
    privateAuctionId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Optional private auction id if this proposal is a private auction proposal.',
      }),
    proposalId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique id of the proposal. (readonly).' }),
    proposalState: z
      .string()
      .exactOptional()
      .openapi({ description: 'The current state of the proposal. (readonly)' }),
    revisionNumber: z
      .string()
      .exactOptional()
      .openapi({ description: 'The revision number for the proposal (readonly).' }),
    revisionTimeMs: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The time (ms since epoch) when the proposal was last revised (readonly).',
      }),
    seller: SellerSchema.exactOptional().openapi({
      description: 'Reference to the seller on the proposal. (readonly, except on create)',
    }),
    sellerContacts: z
      .array(ContactInformationSchema)
      .exactOptional()
      .openapi({ description: 'Optional contact information of the seller (buyer-readonly).' }),
  })
  .openapi({
    description:
      'Represents a proposal in the marketplace. A proposal is the unit of negotiation between a seller and a buyer and contains deals which are served. Each field in a proposal can have one of the following setting:\n\n(readonly) - It is an error to try and set this field. (buyer-readonly) - Only the seller can set this field. (seller-readonly) - Only the buyer can set this field. (updatable) - The field is updatable at all times by either buyer or the seller.',
    required: [],
  })
  .openapi('Proposal')

const CreateOrdersRequestSchema = z
  .object({
    proposals: z
      .array(ProposalSchema)
      .exactOptional()
      .openapi({ description: 'The list of proposals to create.' }),
    webPropertyCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'Web property id of the seller creating these orders' }),
  })
  .openapi({ required: [] })
  .openapi('CreateOrdersRequest')

const CreateOrdersResponseSchema = z
  .object({
    proposals: z
      .array(ProposalSchema)
      .exactOptional()
      .openapi({ description: 'The list of proposals successfully created.' }),
  })
  .openapi({ required: [] })
  .openapi('CreateOrdersResponse')

const CreativeSchema = z
  .object({
    HTMLSnippet: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The HTML snippet that displays the ad when inserted in the web page. If set, videoURL, videoVastXML, and nativeAd should not be set.',
      }),
    accountId: z.int32().exactOptional().openapi({ description: 'Account id.' }),
    adChoicesDestinationUrl: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The link to the Ad Preferences page. This is only supported for native ads.',
      }),
    adTechnologyProviders: z
      .object({
        detectedProviderIds: z
          .array(z.string())
          .exactOptional()
          .openapi({
            description:
              'The detected ad technology provider IDs for this creative. See https://storage.googleapis.com/adx-rtb-dictionaries/providers.csv for mapping of provider ID to provided name, a privacy policy URL, and a list of domains which can be attributed to the provider. If this creative contains provider IDs that are outside of those listed in the `BidRequest.adslot.consented_providers_settings.consented_providers` field on the  Authorized Buyers Real-Time Bidding protocol or the `BidRequest.user.ext.consented_providers_settings.consented_providers` field on the OpenRTB protocol, a bid submitted for a European Economic Area (EEA) user with this creative is not compliant with the GDPR policies as mentioned in the "Third-party Ad Technology Vendors" section of Authorized Buyers Program Guidelines.',
          }),
        hasUnidentifiedProvider: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              'Whether the creative contains an unidentified ad technology provider. If true, a bid submitted for a European Economic Area (EEA) user with this creative is not compliant with the GDPR policies as mentioned in the "Third-party Ad Technology Vendors" section of Authorized Buyers Program Guidelines.',
          }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    advertiserId: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Detected advertiser id, if any. Read-only. This field should not be set in requests.',
      }),
    advertiserName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the company being advertised in the creative. A list of advertisers is provided in the advertisers.txt file.',
      }),
    agencyId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The agency id for this creative.' }),
    apiUploadTimestamp: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The last upload timestamp of this creative if it was uploaded via API. Read-only. The value of this field is generated, and will be ignored for uploads. (formatted RFC 3339 timestamp).',
      }),
    attribute: z
      .array(z.int32())
      .exactOptional()
      .openapi({
        description:
          'List of buyer selectable attributes for the ads that may be shown from this snippet. Each attribute is represented by an integer as defined in  buyer-declarable-creative-attributes.txt.',
      }),
    buyerCreativeId: z
      .string()
      .exactOptional()
      .openapi({ description: 'A buyer-specific id identifying the creative in this ad.' }),
    clickThroughUrl: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'The set of destination urls for the snippet.' }),
    corrections: z
      .array(
        z
          .object({
            contexts: z
              .array(
                z
                  .object({
                    auctionType: z
                      .array(z.string())
                      .exactOptional()
                      .openapi({
                        description:
                          'Only set when contextType=AUCTION_TYPE. Represents the auction types this correction applies to.',
                      }),
                    contextType: z
                      .string()
                      .exactOptional()
                      .openapi({
                        description:
                          'The type of context (e.g., location, platform, auction type, SSL-ness).',
                      }),
                    geoCriteriaId: z
                      .array(z.int32())
                      .exactOptional()
                      .openapi({
                        description:
                          'Only set when contextType=LOCATION. Represents the geo criterias this correction applies to.',
                      }),
                    platform: z
                      .array(z.string())
                      .exactOptional()
                      .openapi({
                        description:
                          'Only set when contextType=PLATFORM. Represents the platforms this correction applies to.',
                      }),
                  })
                  .openapi({ required: [] }),
              )
              .exactOptional()
              .openapi({
                description: 'All known serving contexts containing serving status information.',
              }),
            details: z
              .array(z.string())
              .exactOptional()
              .openapi({ description: 'Additional details about the correction.' }),
            reason: z
              .string()
              .exactOptional()
              .openapi({ description: 'The type of correction that was applied to the creative.' }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({
        description:
          'Shows any corrections that were applied to this creative. Read-only. This field should not be set in requests.',
      }),
    creativeStatusIdentityType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Creative status identity type that the creative item applies to. Ad Exchange real-time bidding is migrating to the sizeless creative verification. Originally, Ad Exchange assigned creative verification status to a unique combination of a buyer creative ID and creative dimensions. Post-migration, a single verification status will be assigned at the buyer creative ID level. This field allows to distinguish whether a given creative status applies to a unique combination of a buyer creative ID and creative dimensions, or to a buyer creative ID as a whole.',
      }),
    dealsStatus: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Top-level deals status. Read-only. This field should not be set in requests. If disapproved, an entry for auctionType=DIRECT_DEALS (or ALL) in servingRestrictions will also exist. Note that this may be nuanced with other contextual restrictions, in which case it may be preferable to read from servingRestrictions directly.',
      }),
    detectedDomains: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Detected domains for this creative. Read-only. This field should not be set in requests.',
      }),
    filteringReasons: z
      .object({
        date: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'The date in ISO 8601 format for the data. The data is collected from 00:00:00 to 23:59:59 in PST.',
          }),
        reasons: z
          .array(
            z
              .object({
                filteringCount: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description:
                      'The number of times the creative was filtered for the status. The count is aggregated across all publishers on the exchange.',
                  }),
                filteringStatus: z
                  .int32()
                  .exactOptional()
                  .openapi({
                    description:
                      'The filtering status code as defined in  creative-status-codes.txt.',
                  }),
              })
              .openapi({ required: [] }),
          )
          .exactOptional()
          .openapi({ description: 'The filtering reasons.' }),
      })
      .exactOptional()
      .openapi({
        description:
          'The filtering reasons for the creative. Read-only. This field should not be set in requests.',
        required: [],
      }),
    height: z.int32().exactOptional().openapi({ description: 'Ad height.' }),
    impressionTrackingUrl: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'The set of urls to be called to record an impression.' }),
    kind: z
      .string()
      .default('adexchangebuyer#creative')
      .exactOptional()
      .openapi({ description: 'Resource type.' }),
    languages: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Detected languages for this creative. Read-only. This field should not be set in requests.',
      }),
    nativeAd: z
      .object({
        advertiser: z.string().exactOptional(),
        appIcon: z
          .object({
            height: z.int32().exactOptional(),
            url: z.string().exactOptional(),
            width: z.int32().exactOptional(),
          })
          .exactOptional()
          .openapi({ description: 'The app icon, for app download ads.', required: [] }),
        body: z.string().exactOptional().openapi({ description: 'A long description of the ad.' }),
        callToAction: z
          .string()
          .exactOptional()
          .openapi({ description: 'A label for the button that the user is supposed to click.' }),
        clickLinkUrl: z
          .string()
          .exactOptional()
          .openapi({
            description: 'The URL that the browser/SDK will load when the user clicks the ad.',
          }),
        clickTrackingUrl: z
          .string()
          .exactOptional()
          .openapi({ description: 'The URL to use for click tracking.' }),
        headline: z.string().exactOptional().openapi({ description: 'A short title for the ad.' }),
        image: z
          .object({
            height: z.int32().exactOptional(),
            url: z.string().exactOptional(),
            width: z.int32().exactOptional(),
          })
          .exactOptional()
          .openapi({ description: 'A large image.', required: [] }),
        impressionTrackingUrl: z
          .array(z.string())
          .exactOptional()
          .openapi({ description: 'The URLs are called when the impression is rendered.' }),
        logo: z
          .object({
            height: z.int32().exactOptional(),
            url: z.string().exactOptional(),
            width: z.int32().exactOptional(),
          })
          .exactOptional()
          .openapi({ description: 'A smaller image, for the advertiser logo.', required: [] }),
        price: z
          .string()
          .exactOptional()
          .openapi({ description: 'The price of the promoted app including the currency info.' }),
        starRating: z
          .float64()
          .exactOptional()
          .openapi({ description: 'The app rating in the app store. Must be in the range [0-5].' }),
        videoURL: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'The URL of the XML VAST for a native ad. Note this is a separate field from resource.video_url.',
          }),
      })
      .exactOptional()
      .openapi({
        description:
          'If nativeAd is set, HTMLSnippet, videoVastXML, and the videoURL outside of nativeAd should not be set. (The videoURL inside nativeAd can be set.)',
        required: [],
      }),
    openAuctionStatus: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Top-level open auction status. Read-only. This field should not be set in requests. If disapproved, an entry for auctionType=OPEN_AUCTION (or ALL) in servingRestrictions will also exist. Note that this may be nuanced with other contextual restrictions, in which case it may be preferable to read from ServingRestrictions directly.',
      }),
    productCategories: z
      .array(z.int32())
      .exactOptional()
      .openapi({
        description:
          'Detected product categories, if any. Each category is represented by an integer as defined in  ad-product-categories.txt. Read-only. This field should not be set in requests.',
      }),
    restrictedCategories: z
      .array(z.int32())
      .exactOptional()
      .openapi({
        description:
          'All restricted categories for the ads that may be shown from this snippet. Each category is represented by an integer as defined in the  ad-restricted-categories.txt.',
      }),
    sensitiveCategories: z
      .array(z.int32())
      .exactOptional()
      .openapi({
        description:
          'Detected sensitive categories, if any. Each category is represented by an integer as defined in  ad-sensitive-categories.txt. Read-only. This field should not be set in requests.',
      }),
    servingRestrictions: z
      .array(
        z
          .object({
            contexts: z
              .array(
                z
                  .object({
                    auctionType: z
                      .array(z.string())
                      .exactOptional()
                      .openapi({
                        description:
                          'Only set when contextType=AUCTION_TYPE. Represents the auction types this restriction applies to.',
                      }),
                    contextType: z
                      .string()
                      .exactOptional()
                      .openapi({
                        description:
                          'The type of context (e.g., location, platform, auction type, SSL-ness).',
                      }),
                    geoCriteriaId: z
                      .array(z.int32())
                      .exactOptional()
                      .openapi({
                        description:
                          'Only set when contextType=LOCATION. Represents the geo criterias this restriction applies to. Impressions are considered to match a context if either the user location or publisher location matches a given geoCriteriaId.',
                      }),
                    platform: z
                      .array(z.string())
                      .exactOptional()
                      .openapi({
                        description:
                          'Only set when contextType=PLATFORM. Represents the platforms this restriction applies to.',
                      }),
                  })
                  .openapi({ required: [] }),
              )
              .exactOptional()
              .openapi({ description: 'All known contexts/restrictions.' }),
            disapprovalReasons: z
              .array(
                z
                  .object({
                    details: z
                      .array(z.string())
                      .exactOptional()
                      .openapi({
                        description: 'Additional details about the reason for disapproval.',
                      }),
                    reason: z
                      .string()
                      .exactOptional()
                      .openapi({ description: 'The categorized reason for disapproval.' }),
                  })
                  .openapi({ required: [] }),
              )
              .exactOptional()
              .openapi({
                description:
                  'The reasons for disapproval within this restriction, if any. Note that not all disapproval reasons may be categorized, so it is possible for the creative to have a status of DISAPPROVED or CONDITIONALLY_APPROVED with an empty list for disapproval_reasons. In this case, please reach out to your TAM to help debug the issue.',
              }),
            reason: z
              .string()
              .exactOptional()
              .openapi({
                description:
                  'Why the creative is ineligible to serve in this context (e.g., it has been explicitly disapproved or is pending review).',
              }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({
        description:
          'The granular status of this ad in specific contexts. A context here relates to where something ultimately serves (for example, a physical location, a platform, an HTTPS vs HTTP request, or the type of auction). Read-only. This field should not be set in requests. See the examples in the Creatives guide for more details.',
      }),
    vendorType: z
      .array(z.int32())
      .exactOptional()
      .openapi({
        description:
          'List of vendor types for the ads that may be shown from this snippet. Each vendor type is represented by an integer as defined in vendors.txt.',
      }),
    version: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The version for this creative. Read-only. This field should not be set in requests.',
      }),
    videoURL: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The URL to fetch a video ad. If set, HTMLSnippet, videoVastXML, and nativeAd should not be set. Note, this is different from resource.native_ad.video_url above.',
      }),
    videoVastXML: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The contents of a VAST document for a video ad. This document should conform to the VAST 2.0 or 3.0 standard. If set, HTMLSnippet, videoURL, and nativeAd and should not be set.',
      }),
    width: z.int32().exactOptional().openapi({ description: 'Ad width.' }),
  })
  .openapi({ description: 'A creative and its classification data.', required: [] })
  .openapi('Creative')

const CreativeDealIdsSchema = z
  .object({
    dealStatuses: z
      .array(
        z
          .object({
            arcStatus: z.string().exactOptional().openapi({ description: 'ARC approval status.' }),
            dealId: z.string().exactOptional().openapi({ description: 'External deal ID.' }),
            webPropertyId: z.int32().exactOptional().openapi({ description: 'Publisher ID.' }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({ description: 'A list of external deal ids and ARC approval status.' }),
    kind: z
      .string()
      .default('adexchangebuyer#creativeDealIds')
      .exactOptional()
      .openapi({ description: 'Resource type.' }),
  })
  .openapi({ description: 'The external deal ids associated with a creative.', required: [] })
  .openapi('CreativeDealIds')

const CreativesListSchema = z
  .object({
    items: z.array(CreativeSchema).exactOptional().openapi({ description: 'A list of creatives.' }),
    kind: z
      .string()
      .default('adexchangebuyer#creativesList')
      .exactOptional()
      .openapi({ description: 'Resource type.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Continuation token used to page through creatives. To retrieve the next page of results, set the next request\'s "pageToken" value to this.',
      }),
  })
  .openapi({
    description:
      'The creatives feed lists the active creatives for the Ad Exchange buyer accounts that the user has access to. Each entry in the feed corresponds to a single creative.',
    required: [],
  })
  .openapi('CreativesList')

const DeleteOrderDealsRequestSchema = z
  .object({
    dealIds: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'List of deals to delete for a given proposal' }),
    proposalRevisionNumber: z
      .string()
      .exactOptional()
      .openapi({ description: 'The last known proposal revision number.' }),
    updateAction: z
      .string()
      .exactOptional()
      .openapi({ description: 'Indicates an optional action to take on the proposal' }),
  })
  .openapi({ required: [] })
  .openapi('DeleteOrderDealsRequest')

const DeleteOrderDealsResponseSchema = z
  .object({
    deals: z
      .array(MarketplaceDealSchema)
      .exactOptional()
      .openapi({
        description: 'List of deals deleted (in the same proposal as passed in the request)',
      }),
    proposalRevisionNumber: z
      .string()
      .exactOptional()
      .openapi({ description: 'The updated revision number for the proposal.' }),
  })
  .openapi({ required: [] })
  .openapi('DeleteOrderDealsResponse')

const DimensionDimensionValueSchema = z
  .object({
    id: z.int32().exactOptional().openapi({ description: 'Id of the dimension.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Name of the dimension mainly for debugging purposes, except for the case of CREATIVE_SIZE. For CREATIVE_SIZE, strings are used instead of ids.',
      }),
    percentage: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          "Percent of total impressions for a dimension type. e.g. {dimension_type: 'GENDER', [{dimension_value: {id: 1, name: 'MALE', percentage: 60}}]} Gender MALE is 60% of all impressions which have gender.",
      }),
  })
  .openapi({ description: 'Value of the dimension.', required: [] })
  .openapi('DimensionDimensionValue')

const DimensionSchema = z
  .object({
    dimensionType: z.string().exactOptional(),
    dimensionValues: z.array(DimensionDimensionValueSchema).exactOptional(),
  })
  .openapi({
    description:
      "This message carries publisher provided breakdown. E.g. {dimension_type: 'COUNTRY', [{dimension_value: {id: 1, name: 'US'}}, {dimension_value: {id: 2, name: 'UK'}}]}",
    required: [],
  })
  .openapi('Dimension')

const EditAllOrderDealsRequestSchema = z
  .object({
    deals: z
      .array(MarketplaceDealSchema)
      .exactOptional()
      .openapi({
        description:
          'List of deals to edit. Service may perform 3 different operations based on comparison of deals in this list vs deals already persisted in database: 1. Add new deal to proposal If a deal in this list does not exist in the proposal, the service will create a new deal and add it to the proposal. Validation will follow AddOrderDealsRequest. 2. Update existing deal in the proposal If a deal in this list already exist in the proposal, the service will update that existing deal to this new deal in the request. Validation will follow UpdateOrderDealsRequest. 3. Delete deals from the proposal (just need the id) If a existing deal in the proposal is not present in this list, the service will delete that deal from the proposal. Validation will follow DeleteOrderDealsRequest.',
      }),
    proposal: ProposalSchema.exactOptional().openapi({
      description:
        'If specified, also updates the proposal in the batch transaction. This is useful when the proposal and the deals need to be updated in one transaction.',
    }),
    proposalRevisionNumber: z
      .string()
      .exactOptional()
      .openapi({ description: 'The last known revision number for the proposal.' }),
    updateAction: z
      .string()
      .exactOptional()
      .openapi({ description: 'Indicates an optional action to take on the proposal' }),
  })
  .openapi({ required: [] })
  .openapi('EditAllOrderDealsRequest')

const EditAllOrderDealsResponseSchema = z
  .object({
    deals: z
      .array(MarketplaceDealSchema)
      .exactOptional()
      .openapi({ description: 'List of all deals in the proposal after edit.' }),
    orderRevisionNumber: z
      .string()
      .exactOptional()
      .openapi({ description: 'The latest revision number after the update has been applied.' }),
  })
  .openapi({ required: [] })
  .openapi('EditAllOrderDealsResponse')

const PublisherProvidedForecastSchema = z
  .object({
    dimensions: z
      .array(DimensionSchema)
      .exactOptional()
      .openapi({ description: 'Publisher provided dimensions. E.g. geo, sizes etc...' }),
    weeklyImpressions: z
      .string()
      .exactOptional()
      .openapi({ description: 'Publisher provided weekly impressions.' }),
    weeklyUniques: z
      .string()
      .exactOptional()
      .openapi({ description: 'Publisher provided weekly uniques.' }),
  })
  .openapi({
    description: 'This message carries publisher provided forecasting information.',
    required: [],
  })
  .openapi('PublisherProvidedForecast')

const ProductSchema = z
  .object({
    billedBuyer: BuyerSchema.exactOptional().openapi({
      description:
        'The billed buyer corresponding to the buyer that created the offer. (readonly, except on create)',
    }),
    buyer: BuyerSchema.exactOptional().openapi({
      description:
        'The buyer that created the offer if this is a buyer initiated offer (readonly, except on create)',
    }),
    creationTimeMs: z
      .string()
      .exactOptional()
      .openapi({ description: 'Creation time in ms. since epoch (readonly)' }),
    creatorContacts: z
      .array(ContactInformationSchema)
      .exactOptional()
      .openapi({
        description:
          'Optional contact information for the creator of this product. (buyer-readonly)',
      }),
    creatorRole: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The role that created the offer. Set to BUYER for buyer initiated offers.',
      }),
    deliveryControl: DeliveryControlSchema.exactOptional().openapi({
      description:
        'The set of fields around delivery control that are interesting for a buyer to see but are non-negotiable. These are set by the publisher. This message is assigned an id of 100 since some day we would want to model this as a protobuf extension.',
    }),
    flightEndTimeMs: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The proposed end time for the deal (ms since epoch) (buyer-readonly)',
      }),
    flightStartTimeMs: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Inventory availability dates. (times are in ms since epoch) The granularity is generally in the order of seconds. (buyer-readonly)',
      }),
    hasCreatorSignedOff: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If the creator has already signed off on the product, then the buyer can finalize the deal by accepting the product as is. When copying to a proposal, if any of the terms are changed, then auto_finalize is automatically set to false.',
      }),
    inventorySource: z
      .string()
      .exactOptional()
      .openapi({
        description: 'What exchange will provide this inventory (readonly, except on create).',
      }),
    kind: z
      .string()
      .default('adexchangebuyer#product')
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "adexchangebuyer#product".',
      }),
    labels: z
      .array(MarketplaceLabelSchema)
      .exactOptional()
      .openapi({
        description: 'Optional List of labels for the product (optional, buyer-readonly).',
      }),
    lastUpdateTimeMs: z
      .string()
      .exactOptional()
      .openapi({ description: 'Time of last update in ms. since epoch (readonly)' }),
    legacyOfferId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Optional legacy offer id if this offer is a preferred deal offer.',
      }),
    marketplacePublisherProfileId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Marketplace publisher profile Id. This Id differs from the regular publisher_profile_id in that 1. This is a new id, the old Id will be deprecated in 2017. 2. This id uniquely identifies a publisher profile by itself.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name for this product as set by the seller. (buyer-readonly)' }),
    privateAuctionId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Optional private auction id if this offer is a private auction offer.',
      }),
    productId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique id for the product (readonly)' }),
    publisherProfileId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Id of the publisher profile for a given seller. A (seller.account_id, publisher_profile_id) pair uniquely identifies a publisher profile. Buyers can call the PublisherProfiles::List endpoint to get a list of publisher profiles for a given seller.',
      }),
    publisherProvidedForecast: PublisherProvidedForecastSchema.exactOptional().openapi({
      description: 'Publisher self-provided forecast information.',
    }),
    revisionNumber: z
      .string()
      .exactOptional()
      .openapi({ description: 'The revision number of the product. (readonly)' }),
    seller: SellerSchema.exactOptional().openapi({
      description:
        'Information about the seller that created this product (readonly, except on create)',
    }),
    sharedTargetings: z
      .array(SharedTargetingSchema)
      .exactOptional()
      .openapi({
        description:
          'Targeting that is shared between the buyer and the seller. Each targeting criteria has a specified key and for each key there is a list of inclusion value or exclusion values. (buyer-readonly)',
      }),
    state: z
      .string()
      .exactOptional()
      .openapi({ description: 'The state of the product. (buyer-readonly)' }),
    syndicationProduct: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The syndication product associated with the deal. (readonly, except on create)',
      }),
    terms: DealTermsSchema.exactOptional().openapi({
      description: 'The negotiable terms of the deal (buyer-readonly)',
    }),
    webPropertyCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The web property code for the seller. This field is meant to be copied over as is when creating deals.',
      }),
  })
  .openapi({
    description:
      'A product is segment of inventory that a seller wishes to sell. It is associated with certain terms and targeting information which helps buyer know more about the inventory. Each field in a product can have one of the following setting:\n\n(readonly) - It is an error to try and set this field. (buyer-readonly) - Only the seller can set this field. (seller-readonly) - Only the buyer can set this field. (updatable) - The field is updatable at all times by either buyer or the seller.',
    required: [],
  })
  .openapi('Product')

const GetOffersResponseSchema = z
  .object({
    products: z
      .array(ProductSchema)
      .exactOptional()
      .openapi({ description: 'The returned list of products.' }),
  })
  .openapi({ required: [] })
  .openapi('GetOffersResponse')

const GetOrderDealsResponseSchema = z
  .object({
    deals: z
      .array(MarketplaceDealSchema)
      .exactOptional()
      .openapi({ description: 'List of deals for the proposal' }),
  })
  .openapi({ required: [] })
  .openapi('GetOrderDealsResponse')

const GetOrderNotesResponseSchema = z
  .object({
    notes: z
      .array(MarketplaceNoteSchema)
      .exactOptional()
      .openapi({
        description:
          'The list of matching notes. The notes for a proposal are ordered from oldest to newest. If the notes span multiple proposals, they will be grouped by proposal, with the notes for the most recently modified proposal appearing first.',
      }),
  })
  .openapi({ required: [] })
  .openapi('GetOrderNotesResponse')

const GetOrdersResponseSchema = z
  .object({
    proposals: z
      .array(ProposalSchema)
      .exactOptional()
      .openapi({ description: 'The list of matching proposals.' }),
  })
  .openapi({ required: [] })
  .openapi('GetOrdersResponse')

const MobileApplicationSchema = z
  .object({ appStore: z.string().exactOptional(), externalAppId: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('MobileApplication')

const PublisherProfileApiProtoSchema = z
  .object({
    audience: z
      .string()
      .exactOptional()
      .openapi({ description: 'Publisher provided info on its audience.' }),
    buyerPitchStatement: z
      .string()
      .exactOptional()
      .openapi({ description: 'A pitch statement for the buyer' }),
    directContact: z
      .string()
      .exactOptional()
      .openapi({ description: 'Direct contact for the publisher profile.' }),
    exchange: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Exchange where this publisher profile is from. E.g. AdX, Rubicon etc...',
      }),
    forecastInventory: z.string().exactOptional(),
    googlePlusLink: z
      .string()
      .exactOptional()
      .openapi({ description: "Link to publisher's Google+ page." }),
    isParent: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'True, if this is the parent profile, which represents all domains owned by the publisher.',
      }),
    isPublished: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'True, if this profile is published. Deprecated for state.' }),
    kind: z
      .string()
      .default('adexchangebuyer#publisherProfileApiProto')
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "adexchangebuyer#publisherProfileApiProto".',
      }),
    logoUrl: z
      .string()
      .exactOptional()
      .openapi({ description: 'The url to the logo for the publisher.' }),
    mediaKitLink: z
      .string()
      .exactOptional()
      .openapi({ description: 'The url for additional marketing and sales materials.' }),
    name: z.string().exactOptional(),
    overview: z.string().exactOptional().openapi({ description: 'Publisher provided overview.' }),
    profileId: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The pair of (seller.account_id, profile_id) uniquely identifies a publisher profile for a given publisher.',
      }),
    programmaticContact: z
      .string()
      .exactOptional()
      .openapi({ description: 'Programmatic contact for the publisher profile.' }),
    publisherAppIds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The list of app IDs represented in this publisher profile. Empty if this is a parent profile. Deprecated in favor of publisher_app.',
      }),
    publisherApps: z
      .array(MobileApplicationSchema)
      .exactOptional()
      .openapi({
        description:
          'The list of apps represented in this publisher profile. Empty if this is a parent profile.',
      }),
    publisherDomains: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The list of domains represented in this publisher profile. Empty if this is a parent profile.',
      }),
    publisherProfileId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Unique Id for publisher profile.' }),
    publisherProvidedForecast: PublisherProvidedForecastSchema.exactOptional().openapi({
      description: 'Publisher provided forecasting information.',
    }),
    rateCardInfoLink: z
      .string()
      .exactOptional()
      .openapi({ description: 'Link to publisher rate card' }),
    samplePageLink: z
      .string()
      .exactOptional()
      .openapi({ description: 'Link for a sample content page.' }),
    seller: SellerSchema.exactOptional().openapi({
      description: 'Seller of the publisher profile.',
    }),
    state: z.string().exactOptional().openapi({ description: 'State of the publisher profile.' }),
    topHeadlines: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Publisher provided key metrics and rankings.' }),
  })
  .openapi({ required: [] })
  .openapi('PublisherProfileApiProto')

const GetPublisherProfilesByAccountIdResponseSchema = z
  .object({
    profiles: z
      .array(PublisherProfileApiProtoSchema)
      .exactOptional()
      .openapi({ description: 'Profiles for the requested publisher' }),
  })
  .openapi({ required: [] })
  .openapi('GetPublisherProfilesByAccountIdResponse')

const PerformanceReportSchema = z
  .object({
    bidRate: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The number of bid responses with an ad.' }),
    bidRequestRate: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The number of bid requests sent to your bidder.' }),
    calloutStatusRate: z
      .array(z.any())
      .exactOptional()
      .openapi({
        description:
          'Rate of various prefiltering statuses per match. Please refer to the callout-status-codes.txt file for different statuses.',
      }),
    cookieMatcherStatusRate: z
      .array(z.any())
      .exactOptional()
      .openapi({ description: 'Average QPS for cookie matcher operations.' }),
    creativeStatusRate: z
      .array(z.any())
      .exactOptional()
      .openapi({
        description:
          'Rate of ads with a given status. Please refer to the creative-status-codes.txt file for different statuses.',
      }),
    filteredBidRate: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'The number of bid responses that were filtered due to a policy violation or other errors.',
      }),
    hostedMatchStatusRate: z
      .array(z.any())
      .exactOptional()
      .openapi({ description: 'Average QPS for hosted match operations.' }),
    inventoryMatchRate: z
      .float64()
      .exactOptional()
      .openapi({
        description: 'The number of potential queries based on your pretargeting settings.',
      }),
    kind: z
      .string()
      .default('adexchangebuyer#performanceReport')
      .exactOptional()
      .openapi({ description: 'Resource type.' }),
    latency50thPercentile: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'The 50th percentile round trip latency(ms) as perceived from Google servers for the duration period covered by the report.',
      }),
    latency85thPercentile: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'The 85th percentile round trip latency(ms) as perceived from Google servers for the duration period covered by the report.',
      }),
    latency95thPercentile: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'The 95th percentile round trip latency(ms) as perceived from Google servers for the duration period covered by the report.',
      }),
    noQuotaInRegion: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Rate of various quota account statuses per quota check.' }),
    outOfQuota: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Rate of various quota account statuses per quota check.' }),
    pixelMatchRequests: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Average QPS for pixel match requests from clients.' }),
    pixelMatchResponses: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Average QPS for pixel match responses from clients.' }),
    quotaConfiguredLimit: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The configured quota limits for this account.' }),
    quotaThrottledLimit: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The throttled quota limits for this account.' }),
    region: z
      .string()
      .exactOptional()
      .openapi({ description: 'The trading location of this data.' }),
    successfulRequestRate: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'The number of properly formed bid responses received by our servers within the deadline.',
      }),
    timestamp: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The unix timestamp of the starting time of this performance data.',
      }),
    unsuccessfulRequestRate: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'The number of bid responses that were unsuccessful due to timeouts, incorrect formatting, etc.',
      }),
  })
  .openapi({
    description: 'The configuration data for an Ad Exchange performance report list.',
    required: [],
  })
  .openapi('PerformanceReport')

const PerformanceReportListSchema = z
  .object({
    kind: z
      .string()
      .default('adexchangebuyer#performanceReportList')
      .exactOptional()
      .openapi({ description: 'Resource type.' }),
    performanceReport: z
      .array(PerformanceReportSchema)
      .exactOptional()
      .openapi({ description: 'A list of performance reports relevant for the account.' }),
  })
  .openapi({
    description: 'The configuration data for an Ad Exchange performance report list.',
    required: [],
  })
  .openapi('PerformanceReportList')

const PretargetingConfigSchema = z
  .object({
    billingId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The id for billing purposes, provided for reference. Leave this field blank for insert requests; the id will be generated automatically.',
      }),
    configId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The config id; generated automatically. Leave this field blank for insert requests.',
      }),
    configName: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The name of the config. Must be unique. Required for all requests.',
      }),
    creativeType: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'List must contain exactly one of PRETARGETING_CREATIVE_TYPE_HTML or PRETARGETING_CREATIVE_TYPE_VIDEO.',
      }),
    dimensions: z
      .array(
        z
          .object({
            height: z.string().exactOptional().openapi({ description: 'Height in pixels.' }),
            width: z.string().exactOptional().openapi({ description: 'Width in pixels.' }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({
        description:
          'Requests which allow one of these (width, height) pairs will match. All pairs must be supported ad dimensions.',
      }),
    excludedContentLabels: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Requests with any of these content labels will not match. Values are from content-labels.txt in the downloadable files section.',
      }),
    excludedGeoCriteriaIds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'Requests containing any of these geo criteria ids will not match.',
      }),
    excludedPlacements: z
      .array(
        z
          .object({
            token: z
              .string()
              .exactOptional()
              .openapi({
                description:
                  'The value of the placement. Interpretation depends on the placement type, e.g. URL for a site placement, channel name for a channel placement, app id for a mobile app placement.',
              }),
            type: z.string().exactOptional().openapi({ description: 'The type of the placement.' }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({ description: 'Requests containing any of these placements will not match.' }),
    excludedUserLists: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Requests containing any of these users list ids will not match.' }),
    excludedVerticals: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Requests containing any of these vertical ids will not match. Values are from the publisher-verticals.txt file in the downloadable files section.',
      }),
    geoCriteriaIds: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Requests containing any of these geo criteria ids will match.' }),
    isActive: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this config is active. Required for all requests.' }),
    kind: z
      .string()
      .default('adexchangebuyer#pretargetingConfig')
      .exactOptional()
      .openapi({
        description: 'The kind of the resource, i.e. "adexchangebuyer#pretargetingConfig".',
      }),
    languages: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Request containing any of these language codes will match.' }),
    maximumQps: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The maximum QPS allocated to this pretargeting configuration, used for pretargeting-level QPS limits. By default, this is not set, which indicates that there is no QPS limit at the configuration level (a global or account-level limit may still be imposed).',
      }),
    minimumViewabilityDecile: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Requests where the predicted viewability is below the specified decile will not match. E.g. if the buyer sets this value to 5, requests from slots where the predicted viewability is below 50% will not match. If the predicted viewability is unknown this field will be ignored.',
      }),
    mobileCarriers: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Requests containing any of these mobile carrier ids will match. Values are from mobile-carriers.csv in the downloadable files section.',
      }),
    mobileDevices: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Requests containing any of these mobile device ids will match. Values are from mobile-devices.csv in the downloadable files section.',
      }),
    mobileOperatingSystemVersions: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Requests containing any of these mobile operating system version ids will match. Values are from mobile-os.csv in the downloadable files section.',
      }),
    placements: z
      .array(
        z
          .object({
            token: z
              .string()
              .exactOptional()
              .openapi({
                description:
                  'The value of the placement. Interpretation depends on the placement type, e.g. URL for a site placement, channel name for a channel placement, app id for a mobile app placement.',
              }),
            type: z.string().exactOptional().openapi({ description: 'The type of the placement.' }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({ description: 'Requests containing any of these placements will match.' }),
    platforms: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Requests matching any of these platforms will match. Possible values are PRETARGETING_PLATFORM_MOBILE, PRETARGETING_PLATFORM_DESKTOP, and PRETARGETING_PLATFORM_TABLET.',
      }),
    supportedCreativeAttributes: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Creative attributes should be declared here if all creatives corresponding to this pretargeting configuration have that creative attribute. Values are from pretargetable-creative-attributes.txt in the downloadable files section.',
      }),
    userIdentifierDataRequired: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          "Requests containing the specified type of user data will match. Possible values are HOSTED_MATCH_DATA, which means the request is cookie-targetable and has a match in the buyer's hosted match table, and COOKIE_OR_IDFA, which means the request has either a targetable cookie or an iOS IDFA.",
      }),
    userLists: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Requests containing any of these user list ids will match.' }),
    vendorTypes: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Requests that allow any of these vendor ids will match. Values are from vendors.txt in the downloadable files section.',
      }),
    verticals: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Requests containing any of these vertical ids will match.' }),
    videoPlayerSizes: z
      .array(
        z
          .object({
            aspectRatio: z
              .string()
              .exactOptional()
              .openapi({
                description:
                  'The type of aspect ratio. Leave this field blank to match all aspect ratios.',
              }),
            minHeight: z
              .string()
              .exactOptional()
              .openapi({
                description:
                  'The minimum player height in pixels. Leave this field blank to match any player height.',
              }),
            minWidth: z
              .string()
              .exactOptional()
              .openapi({
                description:
                  'The minimum player width in pixels. Leave this field blank to match any player width.',
              }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({
        description: 'Video requests satisfying any of these player size constraints will match.',
      }),
  })
  .openapi({ required: [] })
  .openapi('PretargetingConfig')

const PretargetingConfigListSchema = z
  .object({
    items: z
      .array(PretargetingConfigSchema)
      .exactOptional()
      .openapi({ description: 'A list of pretargeting configs' }),
    kind: z
      .string()
      .default('adexchangebuyer#pretargetingConfigList')
      .exactOptional()
      .openapi({ description: 'Resource type.' }),
  })
  .openapi({ required: [] })
  .openapi('PretargetingConfigList')

const UpdatePrivateAuctionProposalRequestSchema = z
  .object({
    externalDealId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The externalDealId of the deal to be updated.' }),
    note: MarketplaceNoteSchema.exactOptional().openapi({
      description: 'Optional note to be added.',
    }),
    proposalRevisionNumber: z
      .string()
      .exactOptional()
      .openapi({ description: 'The current revision number of the proposal to be updated.' }),
    updateAction: z
      .string()
      .exactOptional()
      .openapi({ description: 'The proposed action on the private auction proposal.' }),
  })
  .openapi({ required: [] })
  .openapi('UpdatePrivateAuctionProposalRequest')

const AltParamsSchema = z
  .literal('json')
  .exactOptional()
  .openapi({
    param: {
      description: 'Data format for the response.',
      in: 'query',
      name: 'alt',
      schema: { enum: ['json'], type: 'string' },
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
        'An opaque string that represents a user for quota purposes. Must not exceed 40 characters.',
      in: 'query',
      name: 'quotaUser',
      schema: { type: 'string' },
      required: false,
    },
  })

const UserIpParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Deprecated. Please use quotaUser instead.',
      in: 'query',
      name: 'userIp',
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
        'https://www.googleapis.com/auth/adexchange.buyer':
          'Manage your Ad Exchange buyer account configuration',
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
        'https://www.googleapis.com/auth/adexchange.buyer':
          'Manage your Ad Exchange buyer account configuration',
      },
      tokenUrl: 'https://accounts.google.com/o/oauth2/token',
    },
  },
  type: 'oauth2',
}

export const getAccountsRoute = createRoute({
  method: 'get',
  path: '/accounts',
  tags: ['accounts'],
  description: "Retrieves the authenticated user's list of accounts.",
  operationId: 'adexchangebuyer.accounts.list',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      userIp: UserIpParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: AccountsListSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/adexchange.buyer'],
      Oauth2c: ['https://www.googleapis.com/auth/adexchange.buyer'],
    },
  ],
})

export const getAccountsIdRoute = createRoute({
  method: 'get',
  path: '/accounts/{id}',
  tags: ['accounts'],
  description: 'Gets one account by ID.',
  operationId: 'adexchangebuyer.accounts.get',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      userIp: UserIpParamsSchema,
    }),
    params: z.object({
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
            description: 'The account id',
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
      content: { 'application/json': { schema: AccountSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/adexchange.buyer'],
      Oauth2c: ['https://www.googleapis.com/auth/adexchange.buyer'],
    },
  ],
})

export const putAccountsIdRoute = createRoute({
  method: 'put',
  path: '/accounts/{id}',
  tags: ['accounts'],
  description: 'Updates an existing account.',
  operationId: 'adexchangebuyer.accounts.update',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      userIp: UserIpParamsSchema,
      confirmUnsafeAccountChange: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Confirmation for erasing bidder and cookie matching urls.',
            in: 'query',
            name: 'confirmUnsafeAccountChange',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
    params: z.object({
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
            description: 'The account id',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'integer' },
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
      Oauth2: ['https://www.googleapis.com/auth/adexchange.buyer'],
      Oauth2c: ['https://www.googleapis.com/auth/adexchange.buyer'],
    },
  ],
})

export const patchAccountsIdRoute = createRoute({
  method: 'patch',
  path: '/accounts/{id}',
  tags: ['accounts'],
  description: 'Updates an existing account. This method supports patch semantics.',
  operationId: 'adexchangebuyer.accounts.patch',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      userIp: UserIpParamsSchema,
      confirmUnsafeAccountChange: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Confirmation for erasing bidder and cookie matching urls.',
            in: 'query',
            name: 'confirmUnsafeAccountChange',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
    params: z.object({
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
            description: 'The account id',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'integer' },
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
      Oauth2: ['https://www.googleapis.com/auth/adexchange.buyer'],
      Oauth2c: ['https://www.googleapis.com/auth/adexchange.buyer'],
    },
  ],
})

export const getBillinginfoRoute = createRoute({
  method: 'get',
  path: '/billinginfo',
  tags: ['billingInfo'],
  description:
    'Retrieves a list of billing information for all accounts of the authenticated user.',
  operationId: 'adexchangebuyer.billingInfo.list',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      userIp: UserIpParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: BillingInfoListSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/adexchange.buyer'],
      Oauth2c: ['https://www.googleapis.com/auth/adexchange.buyer'],
    },
  ],
})

export const getBillinginfoAccountIdRoute = createRoute({
  method: 'get',
  path: '/billinginfo/{accountId}',
  tags: ['billingInfo'],
  description: 'Returns the billing information for one account specified by account ID.',
  operationId: 'adexchangebuyer.billingInfo.get',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      userIp: UserIpParamsSchema,
    }),
    params: z.object({
      accountId: z
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
            description: 'The account id.',
            in: 'path',
            name: 'accountId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: BillingInfoSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/adexchange.buyer'],
      Oauth2c: ['https://www.googleapis.com/auth/adexchange.buyer'],
    },
  ],
})

export const getBillinginfoAccountIdBillingIdRoute = createRoute({
  method: 'get',
  path: '/billinginfo/{accountId}/{billingId}',
  tags: ['budget'],
  description:
    'Returns the budget information for the adgroup specified by the accountId and billingId.',
  operationId: 'adexchangebuyer.budget.get',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      userIp: UserIpParamsSchema,
    }),
    params: z.object({
      accountId: z
        .string()
        .openapi({
          param: {
            description: 'The account id to get the budget information for.',
            in: 'path',
            name: 'accountId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      billingId: z
        .string()
        .openapi({
          param: {
            description: 'The billing id to get the budget information for.',
            in: 'path',
            name: 'billingId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: BudgetSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/adexchange.buyer'],
      Oauth2c: ['https://www.googleapis.com/auth/adexchange.buyer'],
    },
  ],
})

export const putBillinginfoAccountIdBillingIdRoute = createRoute({
  method: 'put',
  path: '/billinginfo/{accountId}/{billingId}',
  tags: ['budget'],
  description:
    'Updates the budget amount for the budget of the adgroup specified by the accountId and billingId, with the budget amount in the request.',
  operationId: 'adexchangebuyer.budget.update',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      userIp: UserIpParamsSchema,
    }),
    params: z.object({
      accountId: z
        .string()
        .openapi({
          param: {
            description: 'The account id associated with the budget being updated.',
            in: 'path',
            name: 'accountId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      billingId: z
        .string()
        .openapi({
          param: {
            description: 'The billing id associated with the budget being updated.',
            in: 'path',
            name: 'billingId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: BudgetSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: BudgetSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/adexchange.buyer'],
      Oauth2c: ['https://www.googleapis.com/auth/adexchange.buyer'],
    },
  ],
})

export const patchBillinginfoAccountIdBillingIdRoute = createRoute({
  method: 'patch',
  path: '/billinginfo/{accountId}/{billingId}',
  tags: ['budget'],
  description:
    'Updates the budget amount for the budget of the adgroup specified by the accountId and billingId, with the budget amount in the request. This method supports patch semantics.',
  operationId: 'adexchangebuyer.budget.patch',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      userIp: UserIpParamsSchema,
    }),
    params: z.object({
      accountId: z
        .string()
        .openapi({
          param: {
            description: 'The account id associated with the budget being updated.',
            in: 'path',
            name: 'accountId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      billingId: z
        .string()
        .openapi({
          param: {
            description: 'The billing id associated with the budget being updated.',
            in: 'path',
            name: 'billingId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: BudgetSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: BudgetSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/adexchange.buyer'],
      Oauth2c: ['https://www.googleapis.com/auth/adexchange.buyer'],
    },
  ],
})

export const getCreativesRoute = createRoute({
  method: 'get',
  path: '/creatives',
  tags: ['creatives'],
  description:
    "Retrieves a list of the authenticated user's active creatives. A creative will be available 30-40 minutes after submission.",
  operationId: 'adexchangebuyer.creatives.list',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      userIp: UserIpParamsSchema,
      accountId: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z.preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int(),
            ),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'When specified, only creatives for the given account ids are returned.',
            explode: true,
            in: 'query',
            name: 'accountId',
            schema: { items: { type: 'integer' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
      buyerCreativeId: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'When specified, only creatives for the given buyer creative ids are returned.',
            explode: true,
            in: 'query',
            name: 'buyerCreativeId',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
      dealsStatusFilter: z
        .enum(['approved', 'conditionally_approved', 'disapproved', 'not_checked'])
        .exactOptional()
        .openapi({
          param: {
            description:
              'When specified, only creatives having the given deals status are returned.',
            in: 'query',
            name: 'dealsStatusFilter',
            schema: {
              enum: ['approved', 'conditionally_approved', 'disapproved', 'not_checked'],
              type: 'string',
            },
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
          z.int().min(1).max(1000),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Maximum number of entries returned on one result page. If not set, the default is 100. Optional.',
            in: 'query',
            name: 'maxResults',
            schema: { maximum: 1000, minimum: 1, type: 'integer' },
            required: false,
          },
        }),
      openAuctionStatusFilter: z
        .enum(['approved', 'conditionally_approved', 'disapproved', 'not_checked'])
        .exactOptional()
        .openapi({
          param: {
            description:
              'When specified, only creatives having the given open auction status are returned.',
            in: 'query',
            name: 'openAuctionStatusFilter',
            schema: {
              enum: ['approved', 'conditionally_approved', 'disapproved', 'not_checked'],
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
            description:
              'A continuation token, used to page through ad clients. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response. Optional.',
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
      content: { 'application/json': { schema: CreativesListSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/adexchange.buyer'],
      Oauth2c: ['https://www.googleapis.com/auth/adexchange.buyer'],
    },
  ],
})

export const postCreativesRoute = createRoute({
  method: 'post',
  path: '/creatives',
  tags: ['creatives'],
  description: 'Submit a new creative.',
  operationId: 'adexchangebuyer.creatives.insert',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      userIp: UserIpParamsSchema,
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
      Oauth2: ['https://www.googleapis.com/auth/adexchange.buyer'],
      Oauth2c: ['https://www.googleapis.com/auth/adexchange.buyer'],
    },
  ],
})

export const getCreativesAccountIdBuyerCreativeIdRoute = createRoute({
  method: 'get',
  path: '/creatives/{accountId}/{buyerCreativeId}',
  tags: ['creatives'],
  description:
    'Gets the status for a single creative. A creative will be available 30-40 minutes after submission.',
  operationId: 'adexchangebuyer.creatives.get',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      userIp: UserIpParamsSchema,
    }),
    params: z.object({
      accountId: z
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
            description: 'The id for the account that will serve this creative.',
            in: 'path',
            name: 'accountId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
      buyerCreativeId: z
        .string()
        .openapi({
          param: {
            description: 'The buyer-specific id for this creative.',
            in: 'path',
            name: 'buyerCreativeId',
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
      Oauth2: ['https://www.googleapis.com/auth/adexchange.buyer'],
      Oauth2c: ['https://www.googleapis.com/auth/adexchange.buyer'],
    },
  ],
})

export const postCreativesAccountIdBuyerCreativeIdAddDealDealIdRoute = createRoute({
  method: 'post',
  path: '/creatives/{accountId}/{buyerCreativeId}/addDeal/{dealId}',
  tags: ['creatives'],
  description: 'Add a deal id association for the creative.',
  operationId: 'adexchangebuyer.creatives.addDeal',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      userIp: UserIpParamsSchema,
    }),
    params: z.object({
      accountId: z
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
            description: 'The id for the account that will serve this creative.',
            in: 'path',
            name: 'accountId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
      buyerCreativeId: z
        .string()
        .openapi({
          param: {
            description: 'The buyer-specific id for this creative.',
            in: 'path',
            name: 'buyerCreativeId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      dealId: z
        .string()
        .openapi({
          param: {
            description: 'The id of the deal id to associate with this creative.',
            in: 'path',
            name: 'dealId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Successful response' } },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/adexchange.buyer'],
      Oauth2c: ['https://www.googleapis.com/auth/adexchange.buyer'],
    },
  ],
})

export const getCreativesAccountIdBuyerCreativeIdListDealsRoute = createRoute({
  method: 'get',
  path: '/creatives/{accountId}/{buyerCreativeId}/listDeals',
  tags: ['creatives'],
  description: 'Lists the external deal ids associated with the creative.',
  operationId: 'adexchangebuyer.creatives.listDeals',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      userIp: UserIpParamsSchema,
    }),
    params: z.object({
      accountId: z
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
            description: 'The id for the account that will serve this creative.',
            in: 'path',
            name: 'accountId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
      buyerCreativeId: z
        .string()
        .openapi({
          param: {
            description: 'The buyer-specific id for this creative.',
            in: 'path',
            name: 'buyerCreativeId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: CreativeDealIdsSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/adexchange.buyer'],
      Oauth2c: ['https://www.googleapis.com/auth/adexchange.buyer'],
    },
  ],
})

export const postCreativesAccountIdBuyerCreativeIdRemoveDealDealIdRoute = createRoute({
  method: 'post',
  path: '/creatives/{accountId}/{buyerCreativeId}/removeDeal/{dealId}',
  tags: ['creatives'],
  description: 'Remove a deal id associated with the creative.',
  operationId: 'adexchangebuyer.creatives.removeDeal',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      userIp: UserIpParamsSchema,
    }),
    params: z.object({
      accountId: z
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
            description: 'The id for the account that will serve this creative.',
            in: 'path',
            name: 'accountId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
      buyerCreativeId: z
        .string()
        .openapi({
          param: {
            description: 'The buyer-specific id for this creative.',
            in: 'path',
            name: 'buyerCreativeId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      dealId: z
        .string()
        .openapi({
          param: {
            description: 'The id of the deal id to disassociate with this creative.',
            in: 'path',
            name: 'dealId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Successful response' } },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/adexchange.buyer'],
      Oauth2c: ['https://www.googleapis.com/auth/adexchange.buyer'],
    },
  ],
})

export const getPerformancereportRoute = createRoute({
  method: 'get',
  path: '/performancereport',
  tags: ['performanceReport'],
  description: "Retrieves the authenticated user's list of performance metrics.",
  operationId: 'adexchangebuyer.performanceReport.list',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      userIp: UserIpParamsSchema,
      accountId: z
        .string()
        .openapi({
          param: {
            description: 'The account id to get the reports.',
            in: 'query',
            name: 'accountId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      endDateTime: z
        .string()
        .openapi({
          param: {
            description: 'The end time of the report in ISO 8601 timestamp format using UTC.',
            in: 'query',
            name: 'endDateTime',
            required: true,
            schema: { type: 'string' },
          },
        }),
      startDateTime: z
        .string()
        .openapi({
          param: {
            description: 'The start time of the report in ISO 8601 timestamp format using UTC.',
            in: 'query',
            name: 'startDateTime',
            required: true,
            schema: { type: 'string' },
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
          z.int().min(1).max(1000),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Maximum number of entries returned on one result page. If not set, the default is 100. Optional.',
            in: 'query',
            name: 'maxResults',
            schema: { maximum: 1000, minimum: 1, type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A continuation token, used to page through performance reports. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response. Optional.',
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
      content: { 'application/json': { schema: PerformanceReportListSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/adexchange.buyer'],
      Oauth2c: ['https://www.googleapis.com/auth/adexchange.buyer'],
    },
  ],
})

export const getPretargetingconfigsAccountIdRoute = createRoute({
  method: 'get',
  path: '/pretargetingconfigs/{accountId}',
  tags: ['pretargetingConfig'],
  description: "Retrieves a list of the authenticated user's pretargeting configurations.",
  operationId: 'adexchangebuyer.pretargetingConfig.list',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      userIp: UserIpParamsSchema,
    }),
    params: z.object({
      accountId: z
        .string()
        .openapi({
          param: {
            description: 'The account id to get the pretargeting configs for.',
            in: 'path',
            name: 'accountId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: PretargetingConfigListSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/adexchange.buyer'],
      Oauth2c: ['https://www.googleapis.com/auth/adexchange.buyer'],
    },
  ],
})

export const postPretargetingconfigsAccountIdRoute = createRoute({
  method: 'post',
  path: '/pretargetingconfigs/{accountId}',
  tags: ['pretargetingConfig'],
  description: 'Inserts a new pretargeting configuration.',
  operationId: 'adexchangebuyer.pretargetingConfig.insert',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      userIp: UserIpParamsSchema,
    }),
    params: z.object({
      accountId: z
        .string()
        .openapi({
          param: {
            description: 'The account id to insert the pretargeting config for.',
            in: 'path',
            name: 'accountId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: PretargetingConfigSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: PretargetingConfigSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/adexchange.buyer'],
      Oauth2c: ['https://www.googleapis.com/auth/adexchange.buyer'],
    },
  ],
})

export const getPretargetingconfigsAccountIdConfigIdRoute = createRoute({
  method: 'get',
  path: '/pretargetingconfigs/{accountId}/{configId}',
  tags: ['pretargetingConfig'],
  description: 'Gets a specific pretargeting configuration',
  operationId: 'adexchangebuyer.pretargetingConfig.get',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      userIp: UserIpParamsSchema,
    }),
    params: z.object({
      accountId: z
        .string()
        .openapi({
          param: {
            description: 'The account id to get the pretargeting config for.',
            in: 'path',
            name: 'accountId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      configId: z
        .string()
        .openapi({
          param: {
            description: 'The specific id of the configuration to retrieve.',
            in: 'path',
            name: 'configId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: PretargetingConfigSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/adexchange.buyer'],
      Oauth2c: ['https://www.googleapis.com/auth/adexchange.buyer'],
    },
  ],
})

export const putPretargetingconfigsAccountIdConfigIdRoute = createRoute({
  method: 'put',
  path: '/pretargetingconfigs/{accountId}/{configId}',
  tags: ['pretargetingConfig'],
  description: 'Updates an existing pretargeting config.',
  operationId: 'adexchangebuyer.pretargetingConfig.update',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      userIp: UserIpParamsSchema,
    }),
    params: z.object({
      accountId: z
        .string()
        .openapi({
          param: {
            description: 'The account id to update the pretargeting config for.',
            in: 'path',
            name: 'accountId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      configId: z
        .string()
        .openapi({
          param: {
            description: 'The specific id of the configuration to update.',
            in: 'path',
            name: 'configId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: PretargetingConfigSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: PretargetingConfigSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/adexchange.buyer'],
      Oauth2c: ['https://www.googleapis.com/auth/adexchange.buyer'],
    },
  ],
})

export const deletePretargetingconfigsAccountIdConfigIdRoute = createRoute({
  method: 'delete',
  path: '/pretargetingconfigs/{accountId}/{configId}',
  tags: ['pretargetingConfig'],
  description: 'Deletes an existing pretargeting config.',
  operationId: 'adexchangebuyer.pretargetingConfig.delete',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      userIp: UserIpParamsSchema,
    }),
    params: z.object({
      accountId: z
        .string()
        .openapi({
          param: {
            description: 'The account id to delete the pretargeting config for.',
            in: 'path',
            name: 'accountId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      configId: z
        .string()
        .openapi({
          param: {
            description: 'The specific id of the configuration to delete.',
            in: 'path',
            name: 'configId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Successful response' } },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/adexchange.buyer'],
      Oauth2c: ['https://www.googleapis.com/auth/adexchange.buyer'],
    },
  ],
})

export const patchPretargetingconfigsAccountIdConfigIdRoute = createRoute({
  method: 'patch',
  path: '/pretargetingconfigs/{accountId}/{configId}',
  tags: ['pretargetingConfig'],
  description: 'Updates an existing pretargeting config. This method supports patch semantics.',
  operationId: 'adexchangebuyer.pretargetingConfig.patch',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      userIp: UserIpParamsSchema,
    }),
    params: z.object({
      accountId: z
        .string()
        .openapi({
          param: {
            description: 'The account id to update the pretargeting config for.',
            in: 'path',
            name: 'accountId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      configId: z
        .string()
        .openapi({
          param: {
            description: 'The specific id of the configuration to update.',
            in: 'path',
            name: 'configId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: PretargetingConfigSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: PretargetingConfigSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/adexchange.buyer'],
      Oauth2c: ['https://www.googleapis.com/auth/adexchange.buyer'],
    },
  ],
})

export const postPrivateauctionPrivateAuctionIdUpdateproposalRoute = createRoute({
  method: 'post',
  path: '/privateauction/{privateAuctionId}/updateproposal',
  tags: ['marketplaceprivateauction'],
  description: 'Update a given private auction proposal',
  operationId: 'adexchangebuyer.marketplaceprivateauction.updateproposal',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      userIp: UserIpParamsSchema,
    }),
    params: z.object({
      privateAuctionId: z
        .string()
        .openapi({
          param: {
            description: 'The private auction id to be updated.',
            in: 'path',
            name: 'privateAuctionId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdatePrivateAuctionProposalRequestSchema } },
    },
  },
  responses: { 200: { description: 'Successful response' } },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/adexchange.buyer'],
      Oauth2c: ['https://www.googleapis.com/auth/adexchange.buyer'],
    },
  ],
})

export const getProductsSearchRoute = createRoute({
  method: 'get',
  path: '/products/search',
  tags: ['products'],
  description: 'Gets the requested product.',
  operationId: 'adexchangebuyer.products.search',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      userIp: UserIpParamsSchema,
      pqlQuery: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The pql query used to query for products.',
            in: 'query',
            name: 'pqlQuery',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GetOffersResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/adexchange.buyer'],
      Oauth2c: ['https://www.googleapis.com/auth/adexchange.buyer'],
    },
  ],
})

export const getProductsProductIdRoute = createRoute({
  method: 'get',
  path: '/products/{productId}',
  tags: ['products'],
  description: 'Gets the requested product by id.',
  operationId: 'adexchangebuyer.products.get',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      userIp: UserIpParamsSchema,
    }),
    params: z.object({
      productId: z
        .string()
        .openapi({
          param: {
            description: 'The id for the product to get the head revision for.',
            in: 'path',
            name: 'productId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ProductSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/adexchange.buyer'],
      Oauth2c: ['https://www.googleapis.com/auth/adexchange.buyer'],
    },
  ],
})

export const postProposalsInsertRoute = createRoute({
  method: 'post',
  path: '/proposals/insert',
  tags: ['proposals'],
  description: 'Create the given list of proposals',
  operationId: 'adexchangebuyer.proposals.insert',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      userIp: UserIpParamsSchema,
    }),
    body: { content: { 'application/json': { schema: CreateOrdersRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: CreateOrdersResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/adexchange.buyer'],
      Oauth2c: ['https://www.googleapis.com/auth/adexchange.buyer'],
    },
  ],
})

export const getProposalsSearchRoute = createRoute({
  method: 'get',
  path: '/proposals/search',
  tags: ['proposals'],
  description: 'Search for proposals using pql query',
  operationId: 'adexchangebuyer.proposals.search',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      userIp: UserIpParamsSchema,
      pqlQuery: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Query string to retrieve specific proposals.',
            in: 'query',
            name: 'pqlQuery',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GetOrdersResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/adexchange.buyer'],
      Oauth2c: ['https://www.googleapis.com/auth/adexchange.buyer'],
    },
  ],
})

export const getProposalsProposalIdRoute = createRoute({
  method: 'get',
  path: '/proposals/{proposalId}',
  tags: ['proposals'],
  description: 'Get a proposal given its id',
  operationId: 'adexchangebuyer.proposals.get',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      userIp: UserIpParamsSchema,
    }),
    params: z.object({
      proposalId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the proposal to retrieve.',
            in: 'path',
            name: 'proposalId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ProposalSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/adexchange.buyer'],
      Oauth2c: ['https://www.googleapis.com/auth/adexchange.buyer'],
    },
  ],
})

export const getProposalsProposalIdDealsRoute = createRoute({
  method: 'get',
  path: '/proposals/{proposalId}/deals',
  tags: ['marketplacedeals'],
  description: 'List all the deals for a given proposal',
  operationId: 'adexchangebuyer.marketplacedeals.list',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      userIp: UserIpParamsSchema,
      pqlQuery: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Query string to retrieve specific deals.',
            in: 'query',
            name: 'pqlQuery',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      proposalId: z
        .string()
        .openapi({
          param: {
            description:
              "The proposalId to get deals for. To search across all proposals specify order_id = '-' as part of the URL.",
            in: 'path',
            name: 'proposalId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GetOrderDealsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/adexchange.buyer'],
      Oauth2c: ['https://www.googleapis.com/auth/adexchange.buyer'],
    },
  ],
})

export const postProposalsProposalIdDealsDeleteRoute = createRoute({
  method: 'post',
  path: '/proposals/{proposalId}/deals/delete',
  tags: ['marketplacedeals'],
  description: 'Delete the specified deals from the proposal',
  operationId: 'adexchangebuyer.marketplacedeals.delete',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      userIp: UserIpParamsSchema,
    }),
    params: z.object({
      proposalId: z
        .string()
        .openapi({
          param: {
            description: 'The proposalId to delete deals from.',
            in: 'path',
            name: 'proposalId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DeleteOrderDealsRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: DeleteOrderDealsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/adexchange.buyer'],
      Oauth2c: ['https://www.googleapis.com/auth/adexchange.buyer'],
    },
  ],
})

export const postProposalsProposalIdDealsInsertRoute = createRoute({
  method: 'post',
  path: '/proposals/{proposalId}/deals/insert',
  tags: ['marketplacedeals'],
  description: 'Add new deals for the specified proposal',
  operationId: 'adexchangebuyer.marketplacedeals.insert',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      userIp: UserIpParamsSchema,
    }),
    params: z.object({
      proposalId: z
        .string()
        .openapi({
          param: {
            description: 'proposalId for which deals need to be added.',
            in: 'path',
            name: 'proposalId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: AddOrderDealsRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: AddOrderDealsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/adexchange.buyer'],
      Oauth2c: ['https://www.googleapis.com/auth/adexchange.buyer'],
    },
  ],
})

export const postProposalsProposalIdDealsUpdateRoute = createRoute({
  method: 'post',
  path: '/proposals/{proposalId}/deals/update',
  tags: ['marketplacedeals'],
  description: 'Replaces all the deals in the proposal with the passed in deals',
  operationId: 'adexchangebuyer.marketplacedeals.update',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      userIp: UserIpParamsSchema,
    }),
    params: z.object({
      proposalId: z
        .string()
        .openapi({
          param: {
            description: 'The proposalId to edit deals on.',
            in: 'path',
            name: 'proposalId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: EditAllOrderDealsRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: EditAllOrderDealsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/adexchange.buyer'],
      Oauth2c: ['https://www.googleapis.com/auth/adexchange.buyer'],
    },
  ],
})

export const getProposalsProposalIdNotesRoute = createRoute({
  method: 'get',
  path: '/proposals/{proposalId}/notes',
  tags: ['marketplacenotes'],
  description: 'Get all the notes associated with a proposal',
  operationId: 'adexchangebuyer.marketplacenotes.list',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      userIp: UserIpParamsSchema,
      pqlQuery: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Query string to retrieve specific notes. To search the text contents of notes, please use syntax like "WHERE note.note = "foo" or "WHERE note.note LIKE "%bar%"',
            in: 'query',
            name: 'pqlQuery',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      proposalId: z
        .string()
        .openapi({
          param: {
            description:
              "The proposalId to get notes for. To search across all proposals specify order_id = '-' as part of the URL.",
            in: 'path',
            name: 'proposalId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GetOrderNotesResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/adexchange.buyer'],
      Oauth2c: ['https://www.googleapis.com/auth/adexchange.buyer'],
    },
  ],
})

export const postProposalsProposalIdNotesInsertRoute = createRoute({
  method: 'post',
  path: '/proposals/{proposalId}/notes/insert',
  tags: ['marketplacenotes'],
  description: 'Add notes to the proposal',
  operationId: 'adexchangebuyer.marketplacenotes.insert',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      userIp: UserIpParamsSchema,
    }),
    params: z.object({
      proposalId: z
        .string()
        .openapi({
          param: {
            description: 'The proposalId to add notes for.',
            in: 'path',
            name: 'proposalId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: AddOrderNotesRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: AddOrderNotesResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/adexchange.buyer'],
      Oauth2c: ['https://www.googleapis.com/auth/adexchange.buyer'],
    },
  ],
})

export const postProposalsProposalIdSetupcompleteRoute = createRoute({
  method: 'post',
  path: '/proposals/{proposalId}/setupcomplete',
  tags: ['proposals'],
  description: 'Update the given proposal to indicate that setup has been completed.',
  operationId: 'adexchangebuyer.proposals.setupcomplete',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      userIp: UserIpParamsSchema,
    }),
    params: z.object({
      proposalId: z
        .string()
        .openapi({
          param: {
            description: 'The proposal id for which the setup is complete',
            in: 'path',
            name: 'proposalId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Successful response' } },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/adexchange.buyer'],
      Oauth2c: ['https://www.googleapis.com/auth/adexchange.buyer'],
    },
  ],
})

export const putProposalsProposalIdRevisionNumberUpdateActionRoute = createRoute({
  method: 'put',
  path: '/proposals/{proposalId}/{revisionNumber}/{updateAction}',
  tags: ['proposals'],
  description: 'Update the given proposal',
  operationId: 'adexchangebuyer.proposals.update',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      userIp: UserIpParamsSchema,
    }),
    params: z.object({
      proposalId: z
        .string()
        .openapi({
          param: {
            description: 'The proposal id to update.',
            in: 'path',
            name: 'proposalId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      revisionNumber: z
        .string()
        .openapi({
          param: {
            description:
              'The last known revision number to update. If the head revision in the marketplace database has since changed, an error will be thrown. The caller should then fetch the latest proposal at head revision and retry the update at that revision.',
            in: 'path',
            name: 'revisionNumber',
            required: true,
            schema: { type: 'string' },
          },
        }),
      updateAction: z
        .enum([
          'accept',
          'cancel',
          'propose',
          'proposeAndAccept',
          'unknownAction',
          'updateNonTerms',
        ])
        .openapi({
          param: {
            description:
              'The proposed action to take on the proposal. This field is required and it must be set when updating a proposal.',
            in: 'path',
            name: 'updateAction',
            required: true,
            schema: {
              enum: [
                'accept',
                'cancel',
                'propose',
                'proposeAndAccept',
                'unknownAction',
                'updateNonTerms',
              ],
              type: 'string',
            },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ProposalSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ProposalSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/adexchange.buyer'],
      Oauth2c: ['https://www.googleapis.com/auth/adexchange.buyer'],
    },
  ],
})

export const patchProposalsProposalIdRevisionNumberUpdateActionRoute = createRoute({
  method: 'patch',
  path: '/proposals/{proposalId}/{revisionNumber}/{updateAction}',
  tags: ['proposals'],
  description: 'Update the given proposal. This method supports patch semantics.',
  operationId: 'adexchangebuyer.proposals.patch',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      userIp: UserIpParamsSchema,
    }),
    params: z.object({
      proposalId: z
        .string()
        .openapi({
          param: {
            description: 'The proposal id to update.',
            in: 'path',
            name: 'proposalId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      revisionNumber: z
        .string()
        .openapi({
          param: {
            description:
              'The last known revision number to update. If the head revision in the marketplace database has since changed, an error will be thrown. The caller should then fetch the latest proposal at head revision and retry the update at that revision.',
            in: 'path',
            name: 'revisionNumber',
            required: true,
            schema: { type: 'string' },
          },
        }),
      updateAction: z
        .enum([
          'accept',
          'cancel',
          'propose',
          'proposeAndAccept',
          'unknownAction',
          'updateNonTerms',
        ])
        .openapi({
          param: {
            description:
              'The proposed action to take on the proposal. This field is required and it must be set when updating a proposal.',
            in: 'path',
            name: 'updateAction',
            required: true,
            schema: {
              enum: [
                'accept',
                'cancel',
                'propose',
                'proposeAndAccept',
                'unknownAction',
                'updateNonTerms',
              ],
              type: 'string',
            },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ProposalSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ProposalSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/adexchange.buyer'],
      Oauth2c: ['https://www.googleapis.com/auth/adexchange.buyer'],
    },
  ],
})

export const getPublisherAccountIdProfilesRoute = createRoute({
  method: 'get',
  path: '/publisher/{accountId}/profiles',
  tags: ['pubprofiles'],
  description: 'Gets the requested publisher profile(s) by publisher accountId.',
  operationId: 'adexchangebuyer.pubprofiles.list',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      userIp: UserIpParamsSchema,
    }),
    params: z.object({
      accountId: z
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
            description: 'The accountId of the publisher to get profiles for.',
            in: 'path',
            name: 'accountId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GetPublisherProfilesByAccountIdResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/adexchange.buyer'],
      Oauth2c: ['https://www.googleapis.com/auth/adexchange.buyer'],
    },
  ],
})
