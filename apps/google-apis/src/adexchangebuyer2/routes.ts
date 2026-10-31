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
      'Represents a list of targeted and excluded mobile application IDs that publishers own. Mobile application IDs are from App Store and Google Play Store. Android App ID, for example, com.google.android.apps.maps, can be found in Google Play Store URL. iOS App ID (which is a number) can be found at the end of iTunes store URL. First party mobile applications is either included or excluded.',
    required: [],
  })
  .openapi('FirstPartyMobileApplicationTargeting')

type MobileApplicationTargetingType = {
  firstPartyTargeting?: z.infer<typeof FirstPartyMobileApplicationTargetingSchema>
}

const DateSchema = z
  .object({
    day: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          "Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.",
      }),
    month: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.',
      }),
    year: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.',
      }),
  })
  .openapi({
    description:
      'Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp',
    required: [],
  })
  .openapi('Date')

const AbsoluteDateRangeSchema = z
  .object({
    endDate: DateSchema.exactOptional().openapi({
      description:
        'The end date of the range (inclusive). Must be within the 30 days leading up to current date, and must be equal to or after start_date.',
    }),
    startDate: DateSchema.exactOptional().openapi({
      description:
        'The start date of the range (inclusive). Must be within the 30 days leading up to current date, and must be equal to or before end_date.',
    }),
  })
  .openapi({
    description:
      'An absolute date range, specified by its start date and end date. The supported range of dates begins 30 days before today and ends today. Validity checked upon filter set creation. If a filter set with an absolute date range is run at a later date more than 30 days after start_date, it will fail.',
    required: [],
  })
  .openapi('AbsoluteDateRange')

const AcceptProposalRequestSchema = z
  .object({
    proposalRevision: z
      .string()
      .exactOptional()
      .openapi({ description: 'The last known client revision number of the proposal.' }),
  })
  .openapi({ description: 'Request to accept a proposal.', required: [] })
  .openapi('AcceptProposalRequest')

const AdSizeSchema = z
  .object({
    height: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The height of the ad slot in pixels. This field will be present only when size type is `PIXEL`.',
      }),
    sizeType: z
      .enum(['SIZE_TYPE_UNSPECIFIED', 'PIXEL', 'INTERSTITIAL', 'NATIVE', 'FLUID'])
      .exactOptional()
      .openapi({ description: 'The size type of the ad slot.' }),
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

const AdTechnologyProvidersSchema = z
  .object({
    detectedProviderIds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The detected ad technology provider IDs for this creative. See https://storage.googleapis.com/adx-rtb-dictionaries/providers.csv for mapping of provider ID to provided name, a privacy policy URL, and a list of domains which can be attributed to the provider. If the creative contains provider IDs that are outside of those listed in the `BidRequest.adslot.consented_providers_settings.consented_providers` field on the (Google bid protocol)[https://developers.google.com/authorized-buyers/rtb/downloads/realtime-bidding-proto] and the `BidRequest.user.ext.consented_providers_settings.consented_providers` field on the (OpenRTB protocol)[https://developers.google.com/authorized-buyers/rtb/downloads/openrtb-adx-proto], and a bid is submitted with that creative for an impression that will serve to an EEA user, the bid will be filtered before the auction.',
      }),
    hasUnidentifiedProvider: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether the creative contains an unidentified ad technology provider. If true for a given creative, any bid submitted with that creative for an impression that will serve to an EEA user will be filtered before the auction.',
      }),
  })
  .openapi({ description: 'Detected ad technology provider information.', required: [] })
  .openapi('AdTechnologyProviders')

const CreativeDealAssociationSchema = z
  .object({
    accountId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The account the creative belongs to.' }),
    creativeId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the creative associated with the deal.' }),
    dealsId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The externalDealId for the deal associated with the creative.' }),
  })
  .openapi({ description: 'The association between a creative and a deal.', required: [] })
  .openapi('CreativeDealAssociation')

const AddDealAssociationRequestSchema = z
  .object({
    association: CreativeDealAssociationSchema.exactOptional().openapi({
      description: 'The association between a creative and a deal that should be added.',
    }),
  })
  .openapi({ description: 'A request for associating a deal and a creative.', required: [] })
  .openapi('AddDealAssociationRequest')

const NoteSchema = z
  .object({
    createTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The timestamp for when this note was created.',
        readOnly: true,
      }),
    creatorRole: z
      .enum(['BUYER_SELLER_ROLE_UNSPECIFIED', 'BUYER', 'SELLER'])
      .exactOptional()
      .openapi({
        description: 'Output only. The role of the person (buyer/seller) creating the note.',
        readOnly: true,
      }),
    note: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The actual note to attach. (max-length: 1024 unicode code units) Note: This field may be set only when creating the resource. Modifying this field while updating the resource will result in an error.',
      }),
    noteId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The unique ID for the note.', readOnly: true }),
    proposalRevision: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The revision number of the proposal when the note is created.',
        readOnly: true,
      }),
  })
  .openapi({ description: 'A proposal may be associated to several notes.', required: [] })
  .openapi('Note')

const AddNoteRequestSchema = z
  .object({
    note: NoteSchema.exactOptional().openapi({ description: 'Details of the note to add.' }),
  })
  .openapi({ description: 'Request message for adding a note to a given proposal.', required: [] })
  .openapi('AddNoteRequest')

const AppContextSchema = z
  .object({
    appTypes: z
      .array(z.enum(['NATIVE', 'WEB']))
      .exactOptional()
      .openapi({ description: 'The app types this restriction applies to.' }),
  })
  .openapi({
    description: 'Output only. The app type the restriction applies to for mobile device.',
    required: [],
  })
  .openapi('AppContext')

const AuctionContextSchema = z
  .object({
    auctionTypes: z
      .array(z.enum(['OPEN_AUCTION', 'DIRECT_DEALS']))
      .exactOptional()
      .openapi({ description: 'The auction types this restriction applies to.' }),
  })
  .openapi({
    description: 'Output only. The auction type the restriction applies to.',
    required: [],
  })
  .openapi('AuctionContext')

const MetricValueSchema = z
  .object({
    value: z.string().exactOptional().openapi({ description: 'The expected value of the metric.' }),
    variance: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The variance (for example, square of the standard deviation) of the metric value. If value is exact, variance is 0. Can be used to calculate margin of error as a percentage of value, using the following formula, where Z is the standard constant that depends on the preferred size of the confidence interval (for example, for 90% confidence interval, use Z = 1.645): marginOfError = 100 * Z * sqrt(variance) / value',
      }),
  })
  .openapi({
    description:
      'A metric value, with an expected value and a variance; represents a count that may be either exact or estimated (for example, when sampled).',
    required: [],
  })
  .openapi('MetricValue')

const TimeIntervalSchema = z
  .object({
    endTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The timestamp marking the end of the range (exclusive) for which data is included.',
      }),
    startTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The timestamp marking the start of the range (inclusive) for which data is included.',
      }),
  })
  .openapi({ description: 'An interval of time, with an absolute start and end.', required: [] })
  .openapi('TimeInterval')

const RowDimensionsSchema = z
  .object({
    publisherIdentifier: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The publisher identifier for this row, if a breakdown by [BreakdownDimension.PUBLISHER_IDENTIFIER](https://developers.google.com/authorized-buyers/apis/reference/rest/v2beta1/bidders.accounts.filterSets#FilterSet.BreakdownDimension) was requested.',
      }),
    timeInterval: TimeIntervalSchema.exactOptional().openapi({
      description: 'The time interval that this row represents.',
    }),
  })
  .openapi({
    description:
      'A response may include multiple rows, breaking down along various dimensions. Encapsulates the values of all dimensions for a given row.',
    required: [],
  })
  .openapi('RowDimensions')

const BidMetricsRowSchema = z
  .object({
    bids: MetricValueSchema.exactOptional().openapi({
      description: 'The number of bids that Ad Exchange received from the buyer.',
    }),
    bidsInAuction: MetricValueSchema.exactOptional().openapi({
      description: 'The number of bids that were permitted to compete in the auction.',
    }),
    billedImpressions: MetricValueSchema.exactOptional().openapi({
      description:
        'The number of bids for which the buyer was billed. Also called valid impressions as invalid impressions are not billed.',
    }),
    impressionsWon: MetricValueSchema.exactOptional().openapi({
      description: 'The number of bids that won the auction.',
    }),
    measurableImpressions: MetricValueSchema.exactOptional().openapi({
      description:
        'The number of bids for which the corresponding impression was measurable for viewability (as defined by Active View).',
    }),
    reachedQueries: MetricValueSchema.exactOptional().openapi({
      description:
        'The number of bids that won the auction and also won the mediation waterfall (if any).',
    }),
    rowDimensions: RowDimensionsSchema.exactOptional().openapi({
      description: 'The values of all dimensions associated with metric values in this row.',
    }),
    viewableImpressions: MetricValueSchema.exactOptional().openapi({
      description:
        'The number of bids for which the corresponding impression was viewable (as defined by Active View).',
    }),
  })
  .openapi({
    description:
      'The set of metrics that are measured in numbers of bids, representing how many bids with the specified dimension values were considered eligible at each stage of the bidding funnel;',
    required: [],
  })
  .openapi('BidMetricsRow')

const BidResponseWithoutBidsStatusRowSchema = z
  .object({
    impressionCount: MetricValueSchema.exactOptional().openapi({
      description:
        'The number of impressions for which there was a bid response with the specified status.',
    }),
    rowDimensions: RowDimensionsSchema.exactOptional().openapi({
      description: 'The values of all dimensions associated with metric values in this row.',
    }),
    status: z
      .enum([
        'STATUS_UNSPECIFIED',
        'RESPONSES_WITHOUT_BIDS',
        'RESPONSES_WITHOUT_BIDS_FOR_ACCOUNT',
        'RESPONSES_WITHOUT_BIDS_FOR_DEAL',
      ])
      .exactOptional()
      .openapi({
        description:
          'The status specifying why the bid responses were considered to have no applicable bids.',
      }),
  })
  .openapi({
    description:
      'The number of impressions with the specified dimension values that were considered to have no applicable bids, as described by the specified status.',
    required: [],
  })
  .openapi('BidResponseWithoutBidsStatusRow')

const BuyerSchema = z
  .object({
    accountId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Authorized Buyers account ID of the buyer.' }),
  })
  .openapi({
    description:
      'Represents a buyer of inventory. Each buyer is identified by a unique Authorized Buyers account ID.',
    required: [],
  })
  .openapi('Buyer')

const CalloutStatusRowSchema = z
  .object({
    calloutStatusId: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The ID of the callout status. See [callout-status-codes](https://developers.google.com/authorized-buyers/rtb/downloads/callout-status-codes).',
      }),
    impressionCount: MetricValueSchema.exactOptional().openapi({
      description:
        'The number of impressions for which there was a bid request or bid response with the specified callout status.',
    }),
    rowDimensions: RowDimensionsSchema.exactOptional().openapi({
      description: 'The values of all dimensions associated with metric values in this row.',
    }),
  })
  .openapi({
    description:
      'The number of impressions with the specified dimension values where the corresponding bid request or bid response was not successful, as described by the specified callout status.',
    required: [],
  })
  .openapi('CalloutStatusRow')

const CancelNegotiationRequestSchema = z
  .object({})
  .openapi({ description: 'Request to cancel an ongoing negotiation.' })
  .openapi('CancelNegotiationRequest')

const ClientSchema = z
  .object({
    clientAccountId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The globally-unique numerical ID of the client. The value of this field is ignored in create and update operations.',
      }),
    clientName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Name used to represent this client to publishers. You may have multiple clients that map to the same entity, but for each client the combination of `clientName` and entity must be unique. You can specify this field as empty. Maximum length of 255 characters is allowed.',
      }),
    entityId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Numerical identifier of the client entity. The entity can be an advertiser, a brand, or an agency. This identifier is unique among all the entities with the same type. The value of this field is ignored if the entity type is not provided. A list of all known advertisers with their identifiers is available in the [advertisers.txt](https://storage.googleapis.com/adx-rtb-dictionaries/advertisers.txt) file. A list of all known brands with their identifiers is available in the [brands.txt](https://storage.googleapis.com/adx-rtb-dictionaries/brands.txt) file. A list of all known agencies with their identifiers is available in the [agencies.txt](https://storage.googleapis.com/adx-rtb-dictionaries/agencies.txt) file.',
      }),
    entityName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the entity. This field is automatically fetched based on the type and ID. The value of this field is ignored in create and update operations.',
      }),
    entityType: z
      .enum([
        'ENTITY_TYPE_UNSPECIFIED',
        'ADVERTISER',
        'BRAND',
        'AGENCY',
        'ENTITY_TYPE_UNCLASSIFIED',
      ])
      .exactOptional()
      .openapi({
        description:
          'An optional field for specifying the type of the client entity: `ADVERTISER`, `BRAND`, or `AGENCY`.',
      }),
    partnerClientId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional arbitrary unique identifier of this client buyer from the standpoint of its Ad Exchange sponsor buyer. This field can be used to associate a client buyer with the identifier in the namespace of its sponsor buyer, lookup client buyers by that identifier and verify whether an Ad Exchange counterpart of a given client buyer already exists. If present, must be unique among all the client buyers for its Ad Exchange sponsor buyer.',
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
          'The role which is assigned to the client buyer. Each role implies a set of permissions granted to the client. Must be one of `CLIENT_DEAL_VIEWER`, `CLIENT_DEAL_NEGOTIATOR` or `CLIENT_DEAL_APPROVER`.',
      }),
    status: z
      .enum(['CLIENT_STATUS_UNSPECIFIED', 'DISABLED', 'ACTIVE'])
      .exactOptional()
      .openapi({ description: 'The status of the client buyer.' }),
    visibleToSeller: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the client buyer will be visible to sellers.' }),
  })
  .openapi({
    description:
      'A client resource represents a client buyer—an agency, a brand, or an advertiser customer of the sponsor buyer. Users associated with the client buyer have restricted access to the Marketplace and certain other sections of the Authorized Buyers UI based on the role granted to the client buyer. All fields are required unless otherwise specified.',
    required: [],
  })
  .openapi('Client')

const ClientUserSchema = z
  .object({
    clientAccountId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Numerical account ID of the client buyer with which the user is associated; the buyer must be a client of the current sponsor buyer. The value of this field is ignored in an update operation.',
      }),
    email: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "User's email address. The value of this field is ignored in an update operation.",
      }),
    status: z
      .enum(['USER_STATUS_UNSPECIFIED', 'PENDING', 'ACTIVE', 'DISABLED'])
      .exactOptional()
      .openapi({ description: 'The status of the client user.' }),
    userId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The unique numerical ID of the client user that has accepted an invitation. The value of this field is ignored in an update operation.',
      }),
  })
  .openapi({
    description:
      'A client user is created under a client buyer and has restricted access to the Marketplace and certain other sections of the Authorized Buyers UI based on the role granted to the associated client buyer. The only way a new client user can be created is through accepting an email invitation (see the accounts.clients.invitations.create method). All fields are required unless otherwise specified.',
    required: [],
  })
  .openapi('ClientUser')

const ClientUserInvitationSchema = z
  .object({
    clientAccountId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Numerical account ID of the client buyer that the invited user is associated with. The value of this field is ignored in create operations.',
      }),
    email: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The email address to which the invitation is sent. Email addresses should be unique among all client users under each sponsor buyer.',
      }),
    invitationId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The unique numerical ID of the invitation that is sent to the user. The value of this field is ignored in create operations.',
      }),
  })
  .openapi({
    description:
      'An invitation for a new client user to get access to the Authorized Buyers UI. All fields are required unless otherwise specified.',
    required: [],
  })
  .openapi('ClientUserInvitation')

const CompleteSetupRequestSchema = z
  .object({})
  .openapi({
    description: "Request message for indicating that the proposal's setup step is complete.",
  })
  .openapi('CompleteSetupRequest')

const ContactInformationSchema = z
  .object({
    email: z.string().exactOptional().openapi({ description: 'Email address for the contact.' }),
    name: z.string().exactOptional().openapi({ description: 'The name of the contact.' }),
  })
  .openapi({
    description: 'Contains information on how a buyer or seller can be reached.',
    required: [],
  })
  .openapi('ContactInformation')

const LocationContextSchema = z
  .object({
    geoCriteriaIds: z
      .array(z.int32())
      .exactOptional()
      .openapi({
        description:
          'IDs representing the geo location for this context. Refer to the [geo-table.csv](https://storage.googleapis.com/adx-rtb-dictionaries/geo-table.csv) file for different geo criteria IDs.',
      }),
  })
  .openapi({
    description: 'Output only. The Geo criteria the restriction applies to.',
    required: [],
  })
  .openapi('LocationContext')

const PlatformContextSchema = z
  .object({
    platforms: z
      .array(z.enum(['DESKTOP', 'ANDROID', 'IOS']))
      .exactOptional()
      .openapi({ description: 'The platforms this restriction applies to.' }),
  })
  .openapi({
    description: 'Output only. The type of platform the restriction applies to.',
    required: [],
  })
  .openapi('PlatformContext')

const SecurityContextSchema = z
  .object({
    securities: z
      .array(z.enum(['INSECURE', 'SSL']))
      .exactOptional()
      .openapi({ description: 'The security types in this context.' }),
  })
  .openapi({ description: 'Output only. A security context.', required: [] })
  .openapi('SecurityContext')

const ServingContextSchema = z
  .object({
    all: z
      .literal('SIMPLE_CONTEXT')
      .exactOptional()
      .openapi({ description: 'Matches all contexts.' }),
    appType: AppContextSchema.exactOptional().openapi({
      description: 'Matches impressions for a particular app type.',
    }),
    auctionType: AuctionContextSchema.exactOptional().openapi({
      description: 'Matches impressions for a particular auction type.',
    }),
    location: LocationContextSchema.exactOptional().openapi({
      description: 'Matches impressions coming from users *or* publishers in a specific location.',
    }),
    platform: PlatformContextSchema.exactOptional().openapi({
      description: 'Matches impressions coming from a particular platform.',
    }),
    securityType: SecurityContextSchema.exactOptional().openapi({
      description: 'Matches impressions for a particular security type.',
    }),
  })
  .openapi({ description: 'The serving context for this restriction.', required: [] })
  .openapi('ServingContext')

const CorrectionSchema = z
  .object({
    contexts: z
      .array(ServingContextSchema)
      .exactOptional()
      .openapi({ description: 'The contexts for the correction.' }),
    details: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Additional details about what was corrected.' }),
    type: z
      .enum([
        'CORRECTION_TYPE_UNSPECIFIED',
        'VENDOR_IDS_ADDED',
        'SSL_ATTRIBUTE_REMOVED',
        'FLASH_FREE_ATTRIBUTE_REMOVED',
        'FLASH_FREE_ATTRIBUTE_ADDED',
        'REQUIRED_ATTRIBUTE_ADDED',
        'REQUIRED_VENDOR_ADDED',
        'SSL_ATTRIBUTE_ADDED',
        'IN_BANNER_VIDEO_ATTRIBUTE_ADDED',
        'MRAID_ATTRIBUTE_ADDED',
        'FLASH_ATTRIBUTE_REMOVED',
        'VIDEO_IN_SNIPPET_ATTRIBUTE_ADDED',
      ])
      .exactOptional()
      .openapi({ description: 'The type of correction that was applied to the creative.' }),
  })
  .openapi({
    description: 'Output only. Shows any corrections that were applied to this creative.',
    required: [],
  })
  .openapi('Correction')

const HtmlContentSchema = z
  .object({
    height: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The height of the HTML snippet in pixels.' }),
    snippet: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The HTML snippet that displays the ad when inserted in the web page.',
      }),
    width: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The width of the HTML snippet in pixels.' }),
  })
  .openapi({ description: 'HTML content for a creative.', required: [] })
  .openapi('HtmlContent')

const ImageSchema = z
  .object({
    height: z.int32().exactOptional().openapi({ description: 'Image height in pixels.' }),
    url: z.string().exactOptional().openapi({ description: 'The URL of the image.' }),
    width: z.int32().exactOptional().openapi({ description: 'Image width in pixels.' }),
  })
  .openapi({
    description:
      'An image resource. You may provide a larger image than was requested, so long as the aspect ratio is preserved.',
    required: [],
  })
  .openapi('Image')

const NativeContentSchema = z
  .object({
    advertiserName: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The name of the advertiser or sponsor, to be displayed in the ad creative.',
      }),
    appIcon: ImageSchema.exactOptional().openapi({
      description: 'The app icon, for app download ads.',
    }),
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
    image: ImageSchema.exactOptional().openapi({ description: 'A large image.' }),
    logo: ImageSchema.exactOptional().openapi({
      description: "A smaller image, for the advertiser's logo.",
    }),
    priceDisplayText: z
      .string()
      .exactOptional()
      .openapi({ description: 'The price of the promoted app including currency info.' }),
    starRating: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The app rating in the app store. Must be in the range [0-5].' }),
    storeUrl: z
      .string()
      .exactOptional()
      .openapi({ description: 'The URL to the app store to purchase/download the promoted app.' }),
    videoUrl: z
      .string()
      .exactOptional()
      .openapi({ description: 'The URL to fetch a native video ad.' }),
  })
  .openapi({ description: 'Native content for a creative.', required: [] })
  .openapi('NativeContent')

const DisapprovalSchema = z
  .object({
    details: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Additional details about the reason for disapproval.' }),
    reason: z
      .enum([
        'LENGTH_OF_IMAGE_ANIMATION',
        'BROKEN_URL',
        'MEDIA_NOT_FUNCTIONAL',
        'INVALID_FOURTH_PARTY_CALL',
        'INCORRECT_REMARKETING_DECLARATION',
        'LANDING_PAGE_ERROR',
        'AD_SIZE_DOES_NOT_MATCH_AD_SLOT',
        'NO_BORDER',
        'FOURTH_PARTY_BROWSER_COOKIES',
        'LSO_OBJECTS',
        'BLANK_CREATIVE',
        'DESTINATION_URLS_UNDECLARED',
        'PROBLEM_WITH_CLICK_MACRO',
        'INCORRECT_AD_TECHNOLOGY_DECLARATION',
        'INCORRECT_DESTINATION_URL_DECLARATION',
        'EXPANDABLE_INCORRECT_DIRECTION',
        'EXPANDABLE_DIRECTION_NOT_SUPPORTED',
        'EXPANDABLE_INVALID_VENDOR',
        'EXPANDABLE_FUNCTIONALITY',
        'VIDEO_INVALID_VENDOR',
        'VIDEO_UNSUPPORTED_LENGTH',
        'VIDEO_UNSUPPORTED_FORMAT',
        'VIDEO_FUNCTIONALITY',
        'LANDING_PAGE_DISABLED',
        'MALWARE_SUSPECTED',
        'ADULT_IMAGE_OR_VIDEO',
        'INACCURATE_AD_TEXT',
        'COUNTERFEIT_DESIGNER_GOODS',
        'POP_UP',
        'INVALID_RTB_PROTOCOL_USAGE',
        'RAW_IP_ADDRESS_IN_SNIPPET',
        'UNACCEPTABLE_CONTENT_SOFTWARE',
        'UNAUTHORIZED_COOKIE_ON_GOOGLE_DOMAIN',
        'UNDECLARED_FLASH_OBJECTS',
        'INVALID_SSL_DECLARATION',
        'DIRECT_DOWNLOAD_IN_AD',
        'MAXIMUM_DOWNLOAD_SIZE_EXCEEDED',
        'DESTINATION_URL_SITE_NOT_CRAWLABLE',
        'BAD_URL_LEGAL_DISAPPROVAL',
        'PHARMA_GAMBLING_ALCOHOL_NOT_ALLOWED',
        'DYNAMIC_DNS_AT_DESTINATION_URL',
        'POOR_IMAGE_OR_VIDEO_QUALITY',
        'UNACCEPTABLE_IMAGE_CONTENT',
        'INCORRECT_IMAGE_LAYOUT',
        'IRRELEVANT_IMAGE_OR_VIDEO',
        'DESTINATION_SITE_DOES_NOT_ALLOW_GOING_BACK',
        'MISLEADING_CLAIMS_IN_AD',
        'RESTRICTED_PRODUCTS',
        'UNACCEPTABLE_CONTENT',
        'AUTOMATED_AD_CLICKING',
        'INVALID_URL_PROTOCOL',
        'UNDECLARED_RESTRICTED_CONTENT',
        'INVALID_REMARKETING_LIST_USAGE',
        'DESTINATION_SITE_NOT_CRAWLABLE_ROBOTS_TXT',
        'CLICK_TO_DOWNLOAD_NOT_AN_APP',
        'INACCURATE_REVIEW_EXTENSION',
        'SEXUALLY_EXPLICIT_CONTENT',
        'GAINING_AN_UNFAIR_ADVANTAGE',
        'GAMING_THE_GOOGLE_NETWORK',
        'DANGEROUS_PRODUCTS_KNIVES',
        'DANGEROUS_PRODUCTS_EXPLOSIVES',
        'DANGEROUS_PRODUCTS_GUNS',
        'DANGEROUS_PRODUCTS_DRUGS',
        'DANGEROUS_PRODUCTS_TOBACCO',
        'DANGEROUS_PRODUCTS_WEAPONS',
        'UNCLEAR_OR_IRRELEVANT_AD',
        'PROFESSIONAL_STANDARDS',
        'DYSFUNCTIONAL_PROMOTION',
        'INVALID_INTEREST_BASED_AD',
        'MISUSE_OF_PERSONAL_INFORMATION',
        'OMISSION_OF_RELEVANT_INFORMATION',
        'UNAVAILABLE_PROMOTIONS',
        'MISLEADING_PROMOTIONS',
        'INAPPROPRIATE_CONTENT',
        'SENSITIVE_EVENTS',
        'SHOCKING_CONTENT',
        'ENABLING_DISHONEST_BEHAVIOR',
        'TECHNICAL_REQUIREMENTS',
        'RESTRICTED_POLITICAL_CONTENT',
        'UNSUPPORTED_CONTENT',
        'INVALID_BIDDING_METHOD',
        'VIDEO_TOO_LONG',
        'VIOLATES_JAPANESE_PHARMACY_LAW',
        'UNACCREDITED_PET_PHARMACY',
        'ABORTION',
        'CONTRACEPTIVES',
        'NEED_CERTIFICATES_TO_ADVERTISE_IN_CHINA',
        'KCDSP_REGISTRATION',
        'NOT_FAMILY_SAFE',
        'CLINICAL_TRIAL_RECRUITMENT',
        'MAXIMUM_NUMBER_OF_HTTP_CALLS_EXCEEDED',
        'MAXIMUM_NUMBER_OF_COOKIES_EXCEEDED',
        'PERSONAL_LOANS',
        'UNSUPPORTED_FLASH_CONTENT',
        'MISUSE_BY_OMID_SCRIPT',
        'NON_WHITELISTED_OMID_VENDOR',
        'DESTINATION_EXPERIENCE',
        'UNSUPPORTED_LANGUAGE',
        'NON_SSL_COMPLIANT',
        'TEMPORARY_PAUSE',
        'BAIL_BONDS',
        'EXPERIMENTAL_MEDICAL_TREATMENT',
      ])
      .exactOptional()
      .openapi({ description: 'The categorized reason for disapproval.' }),
  })
  .openapi({ description: 'Output only. The reason and details for a disapproval.', required: [] })
  .openapi('Disapproval')

const ServingRestrictionSchema = z
  .object({
    contexts: z
      .array(ServingContextSchema)
      .exactOptional()
      .openapi({ description: 'The contexts for the restriction.' }),
    disapproval: DisapprovalSchema.exactOptional().openapi({
      description:
        'Disapproval bound to this restriction. Only present if status=DISAPPROVED. Can be used to filter the response of the creatives.list method.',
    }),
    disapprovalReasons: z
      .array(DisapprovalSchema)
      .exactOptional()
      .openapi({
        description:
          'Any disapprovals bound to this restriction. Only present if status=DISAPPROVED. Can be used to filter the response of the creatives.list method. Deprecated; use disapproval field instead.',
      }),
    status: z
      .enum(['STATUS_UNSPECIFIED', 'DISAPPROVAL', 'PENDING_REVIEW'])
      .exactOptional()
      .openapi({
        description:
          'The status of the creative in this context (for example, it has been explicitly disapproved or is pending review).',
      }),
  })
  .openapi({
    description:
      'Output only. A representation of the status of an ad in a specific context. A context here relates to where something ultimately serves (for example, a user or publisher geo, a platform, an HTTPS versus HTTP request, or the type of auction).',
    required: [],
  })
  .openapi('ServingRestriction')

const VideoContentSchema = z
  .object({
    videoUrl: z.string().exactOptional().openapi({ description: 'The URL to fetch a video ad.' }),
    videoVastXml: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The contents of a VAST document for a video ad. This document should conform to the VAST 2.0 or 3.0 standard.',
      }),
  })
  .openapi({ description: 'Video content for a creative.', required: [] })
  .openapi('VideoContent')

const CreativeSchema = z
  .object({
    accountId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The account that this creative belongs to. Can be used to filter the response of the creatives.list method.',
      }),
    adChoicesDestinationUrl: z
      .string()
      .exactOptional()
      .openapi({ description: 'The link to AdChoices destination page.' }),
    adTechnologyProviders: AdTechnologyProvidersSchema.exactOptional().openapi({
      description: 'Output only. The detected ad technology providers.',
    }),
    advertiserName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the company being advertised in the creative.' }),
    agencyId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The agency ID for this creative.' }),
    apiUpdateTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The last update timestamp of the creative through the API.',
      }),
    attributes: z
      .array(
        z.enum([
          'ATTRIBUTE_UNSPECIFIED',
          'IMAGE_RICH_MEDIA',
          'ADOBE_FLASH_FLV',
          'IS_TAGGED',
          'IS_COOKIE_TARGETED',
          'IS_USER_INTEREST_TARGETED',
          'EXPANDING_DIRECTION_NONE',
          'EXPANDING_DIRECTION_UP',
          'EXPANDING_DIRECTION_DOWN',
          'EXPANDING_DIRECTION_LEFT',
          'EXPANDING_DIRECTION_RIGHT',
          'EXPANDING_DIRECTION_UP_LEFT',
          'EXPANDING_DIRECTION_UP_RIGHT',
          'EXPANDING_DIRECTION_DOWN_LEFT',
          'EXPANDING_DIRECTION_DOWN_RIGHT',
          'CREATIVE_TYPE_HTML',
          'CREATIVE_TYPE_VAST_VIDEO',
          'EXPANDING_DIRECTION_UP_OR_DOWN',
          'EXPANDING_DIRECTION_LEFT_OR_RIGHT',
          'EXPANDING_DIRECTION_ANY_DIAGONAL',
          'EXPANDING_ACTION_ROLLOVER_TO_EXPAND',
          'INSTREAM_VAST_VIDEO_TYPE_VPAID_FLASH',
          'RICH_MEDIA_CAPABILITY_TYPE_MRAID',
          'RICH_MEDIA_CAPABILITY_TYPE_FLASH',
          'RICH_MEDIA_CAPABILITY_TYPE_HTML5',
          'SKIPPABLE_INSTREAM_VIDEO',
          'RICH_MEDIA_CAPABILITY_TYPE_SSL',
          'RICH_MEDIA_CAPABILITY_TYPE_NON_SSL',
          'RICH_MEDIA_CAPABILITY_TYPE_INTERSTITIAL',
          'NON_SKIPPABLE_INSTREAM_VIDEO',
          'NATIVE_ELIGIBILITY_ELIGIBLE',
          'NON_VPAID',
          'NATIVE_ELIGIBILITY_NOT_ELIGIBLE',
          'ANY_INTERSTITIAL',
          'NON_INTERSTITIAL',
          'IN_BANNER_VIDEO',
          'RENDERING_SIZELESS_ADX',
          'OMSDK_1_0',
        ]),
      )
      .exactOptional()
      .openapi({
        description:
          'All attributes for the ads that may be shown from this creative. Can be used to filter the response of the creatives.list method.',
      }),
    clickThroughUrls: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'The set of destination URLs for the creative.' }),
    corrections: z
      .array(CorrectionSchema)
      .exactOptional()
      .openapi({
        description: 'Output only. Shows any corrections that were applied to this creative.',
      }),
    creativeId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The buyer-defined creative ID of this creative. Can be used to filter the response of the creatives.list method.',
      }),
    dealsStatus: z
      .enum([
        'STATUS_UNSPECIFIED',
        'NOT_CHECKED',
        'CONDITIONALLY_APPROVED',
        'APPROVED',
        'DISAPPROVED',
        'PENDING_REVIEW',
        'STATUS_TYPE_UNSPECIFIED',
      ])
      .exactOptional()
      .openapi({
        description:
          "Output only. The top-level deals status of this creative. If disapproved, an entry for 'auctionType=DIRECT_DEALS' (or 'ALL') in serving_restrictions will also exist. Note that this may be nuanced with other contextual restrictions, in which case, it may be preferable to read from serving_restrictions directly. Can be used to filter the response of the creatives.list method.",
      }),
    declaredClickThroughUrls: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'The set of declared destination URLs for the creative.' }),
    detectedAdvertiserIds: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Output only. Detected advertiser IDs, if any.' }),
    detectedDomains: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Output only. The detected domains for this creative.' }),
    detectedLanguages: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Output only. The detected languages for this creative. The order is arbitrary. The codes are 2 or 5 characters and are documented at https://developers.google.com/adwords/api/docs/appendix/languagecodes.',
      }),
    detectedProductCategories: z
      .array(z.int32())
      .exactOptional()
      .openapi({
        description:
          'Output only. Detected product categories, if any. See the ad-product-categories.txt file in the technical documentation for a list of IDs.',
      }),
    detectedSensitiveCategories: z
      .array(z.int32())
      .exactOptional()
      .openapi({
        description:
          'Output only. Detected sensitive categories, if any. See the ad-sensitive-categories.txt file in the technical documentation for a list of IDs. You should use these IDs along with the excluded-sensitive-category field in the bid request to filter your bids.',
      }),
    html: HtmlContentSchema.exactOptional().openapi({ description: 'An HTML creative.' }),
    impressionTrackingUrls: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'The set of URLs to be called to record an impression.' }),
    native: NativeContentSchema.exactOptional().openapi({ description: 'A native creative.' }),
    openAuctionStatus: z
      .enum([
        'STATUS_UNSPECIFIED',
        'NOT_CHECKED',
        'CONDITIONALLY_APPROVED',
        'APPROVED',
        'DISAPPROVED',
        'PENDING_REVIEW',
        'STATUS_TYPE_UNSPECIFIED',
      ])
      .exactOptional()
      .openapi({
        description:
          "Output only. The top-level open auction status of this creative. If disapproved, an entry for 'auctionType = OPEN_AUCTION' (or 'ALL') in serving_restrictions will also exist. Note that this may be nuanced with other contextual restrictions, in which case, it may be preferable to read from serving_restrictions directly. Can be used to filter the response of the creatives.list method.",
      }),
    restrictedCategories: z
      .array(z.enum(['NO_RESTRICTED_CATEGORIES', 'ALCOHOL']))
      .exactOptional()
      .openapi({
        description: 'All restricted categories for the ads that may be shown from this creative.',
      }),
    servingRestrictions: z
      .array(ServingRestrictionSchema)
      .exactOptional()
      .openapi({
        description:
          'Output only. The granular status of this ad in specific contexts. A context here relates to where something ultimately serves (for example, a physical location, a platform, an HTTPS versus HTTP request, or the type of auction).',
      }),
    vendorIds: z
      .array(z.int32())
      .exactOptional()
      .openapi({
        description:
          'All vendor IDs for the ads that may be shown from this creative. See https://storage.googleapis.com/adx-rtb-dictionaries/vendors.txt for possible values.',
      }),
    version: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Output only. The version of this creative.' }),
    video: VideoContentSchema.exactOptional().openapi({ description: 'A video creative.' }),
  })
  .openapi({ description: 'A creative and its classification data.', required: [] })
  .openapi('Creative')

const CreativeSpecificationSchema = z
  .object({
    creativeCompanionSizes: z
      .array(AdSizeSchema)
      .exactOptional()
      .openapi({
        description: 'Companion sizes may be filled in only when this is a video creative.',
      }),
    creativeSize: AdSizeSchema.exactOptional().openapi({
      description: 'The size of the creative.',
    }),
  })
  .openapi({
    description:
      'Represents information for a creative that is associated with a Programmatic Guaranteed/Preferred Deal in Ad Manager.',
    required: [],
  })
  .openapi('CreativeSpecification')

const CreativeRestrictionsSchema = z
  .object({
    creativeFormat: z
      .enum(['CREATIVE_FORMAT_UNSPECIFIED', 'DISPLAY', 'VIDEO'])
      .exactOptional()
      .openapi({
        description: 'The format of the environment that the creatives will be displayed in.',
      }),
    creativeSpecifications: z.array(CreativeSpecificationSchema).exactOptional(),
    skippableAdType: z
      .enum(['SKIPPABLE_AD_TYPE_UNSPECIFIED', 'SKIPPABLE', 'INSTREAM_SELECT', 'NOT_SKIPPABLE'])
      .exactOptional()
      .openapi({ description: 'Skippable video ads allow viewers to skip ads after 5 seconds.' }),
  })
  .openapi({
    description:
      "Represents creative restrictions associated to Programmatic Guaranteed/ Preferred Deal in Ad Manager. This doesn't apply to Private Auction and AdX Preferred Deals.",
    required: [],
  })
  .openapi('CreativeRestrictions')

const SizeSchema = z
  .object({
    height: z.int32().exactOptional().openapi({ description: 'The height of the creative.' }),
    width: z.int32().exactOptional().openapi({ description: 'The width of the creative' }),
  })
  .openapi({
    description:
      'Message depicting the size of the creative. The units of width and height depend on the type of the targeting.',
    required: [],
  })
  .openapi('Size')

const CreativeSizeSchema = z
  .object({
    allowedFormats: z
      .array(z.enum(['UNKNOWN', 'AUDIO']))
      .exactOptional()
      .openapi({
        description:
          'What formats are allowed by the publisher. If this repeated field is empty then all formats are allowed. For example, if this field contains AllowedFormatType.AUDIO then the publisher only allows an audio ad (without any video).',
      }),
    companionSizes: z
      .array(SizeSchema)
      .exactOptional()
      .openapi({
        description:
          'For video creatives specifies the sizes of companion ads (if present). Companion sizes may be filled in only when creative_size_type = VIDEO',
      }),
    creativeSizeType: z
      .enum(['CREATIVE_SIZE_TYPE_UNSPECIFIED', 'REGULAR', 'INTERSTITIAL', 'VIDEO', 'NATIVE'])
      .exactOptional()
      .openapi({ description: 'The creative size type.' }),
    nativeTemplate: z
      .enum([
        'UNKNOWN_NATIVE_TEMPLATE',
        'NATIVE_CONTENT_AD',
        'NATIVE_APP_INSTALL_AD',
        'NATIVE_VIDEO_CONTENT_AD',
        'NATIVE_VIDEO_APP_INSTALL_AD',
      ])
      .exactOptional()
      .openapi({
        description:
          'Output only. The native template for this creative. It will have a value only if creative_size_type = CreativeSizeType.NATIVE.',
      }),
    size: SizeSchema.exactOptional().openapi({
      description: 'For regular or video creative size type, specifies the size of the creative',
    }),
    skippableAdType: z
      .enum(['SKIPPABLE_AD_TYPE_UNSPECIFIED', 'GENERIC', 'INSTREAM_SELECT', 'NOT_SKIPPABLE'])
      .exactOptional()
      .openapi({
        description:
          'The type of skippable ad for this creative. It will have a value only if creative_size_type = CreativeSizeType.VIDEO.',
      }),
  })
  .openapi({ description: 'Specifies the size of the creative.', required: [] })
  .openapi('CreativeSize')

const CreativeStatusRowSchema = z
  .object({
    bidCount: MetricValueSchema.exactOptional().openapi({
      description: 'The number of bids with the specified status.',
    }),
    creativeStatusId: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The ID of the creative status. See [creative-status-codes](https://developers.google.com/authorized-buyers/rtb/downloads/creative-status-codes).',
      }),
    rowDimensions: RowDimensionsSchema.exactOptional().openapi({
      description: 'The values of all dimensions associated with metric values in this row.',
    }),
  })
  .openapi({
    description:
      'The number of bids with the specified dimension values that did not win the auction (either were filtered pre-auction or lost the auction), as described by the specified creative status.',
    required: [],
  })
  .openapi('CreativeStatusRow')

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
      'Generic targeting used for targeting dimensions that contains a list of included and excluded numeric IDs.',
    required: [],
  })
  .openapi('CriteriaTargeting')

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
      .openapi({
        description: 'The day of the week to target. If unspecified, applicable to all days.',
      }),
    endTime: TimeOfDaySchema.exactOptional().openapi({
      description:
        'The ending time of the day for the ad to show (minute level granularity). The end time is exclusive. This field is not available for filtering in PQL queries.',
    }),
    startTime: TimeOfDaySchema.exactOptional().openapi({
      description:
        'The starting time of day for the ad to show (minute level granularity). The start time is inclusive. This field is not available for filtering in PQL queries.',
    }),
  })
  .openapi({
    description:
      'Daypart targeting message that specifies if the ad can be shown only during certain parts of a day/week.',
    required: [],
  })
  .openapi('DayPart')

const DayPartTargetingSchema = z
  .object({
    dayParts: z
      .array(DayPartSchema)
      .exactOptional()
      .openapi({ description: 'A list of day part targeting criterion.' }),
    timeZoneType: z
      .enum(['TIME_ZONE_SOURCE_UNSPECIFIED', 'PUBLISHER', 'USER'])
      .exactOptional()
      .openapi({ description: 'The timezone to use for interpreting the day part targeting.' }),
  })
  .openapi({ description: 'Specifies the day part targeting criteria.', required: [] })
  .openapi('DayPartTargeting')

const PrivateDataSchema = z
  .object({
    referenceId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A buyer or seller specified reference ID. This can be queried in the list operations (max-length: 1024 unicode code units).',
      }),
  })
  .openapi({
    description: 'Buyers are allowed to store certain types of private data in a proposal/deal.',
    required: [],
  })
  .openapi('PrivateData')

const DealPauseStatusSchema = z
  .object({
    buyerPauseReason: z
      .string()
      .exactOptional()
      .openapi({ description: "The buyer's reason for pausing, if the buyer paused the deal." }),
    firstPausedBy: z
      .enum(['BUYER_SELLER_ROLE_UNSPECIFIED', 'BUYER', 'SELLER'])
      .exactOptional()
      .openapi({ description: 'The role of the person who first paused this deal.' }),
    hasBuyerPaused: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'True, if the buyer has paused the deal unilaterally.' }),
    hasSellerPaused: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'True, if the seller has paused the deal unilaterally.' }),
    sellerPauseReason: z
      .string()
      .exactOptional()
      .openapi({ description: "The seller's reason for pausing, if the seller paused the deal." }),
  })
  .openapi({
    description:
      'Tracks which parties (if any) have paused a deal. The deal is considered paused if either hasBuyerPaused or hasSellPaused is true.',
    required: [],
  })
  .openapi('DealPauseStatus')

const DealServingMetadataSchema = z
  .object({
    dealPauseStatus: DealPauseStatusSchema.exactOptional().openapi({
      description: 'Output only. Tracks which parties (if any) have paused a deal.',
      readOnly: true,
    }),
  })
  .openapi({
    description: 'Message captures metadata about the serving status of a deal.',
    required: [],
  })
  .openapi('DealServingMetadata')

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
    pricingType: z
      .enum(['PRICING_TYPE_UNSPECIFIED', 'COST_PER_MILLE', 'COST_PER_DAY'])
      .exactOptional()
      .openapi({ description: 'The pricing type for the deal/product. (default: CPM)' }),
  })
  .openapi({
    description: 'Represents a price and a pricing type for a product / deal.',
    required: [],
  })
  .openapi('Price')

const PricePerBuyerSchema = z
  .object({
    advertiserIds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The list of advertisers for this price when associated with this buyer. If empty, all advertisers with this buyer pay this price.',
      }),
    buyer: BuyerSchema.exactOptional().openapi({
      description:
        "The buyer who will pay this price. If unset, all buyers can pay this price (if the advertisers match, and there's no more specific rule matching the buyer).",
    }),
    price: PriceSchema.exactOptional().openapi({ description: 'The specified price.' }),
  })
  .openapi({
    description:
      'Used to specify pricing rules for buyers/advertisers. Each PricePerBuyer in a product can become 0 or 1 deals. To check if there is a PricePerBuyer for a particular buyer or buyer/advertiser pair, we look for the most specific matching rule - we first look for a rule matching the buyer and advertiser, next a rule with the buyer but an empty advertiser list, and otherwise look for a matching rule where no buyer is set.',
    required: [],
  })
  .openapi('PricePerBuyer')

const GuaranteedFixedPriceTermsSchema = z
  .object({
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
        description: 'Count of guaranteed looks. Required for deal, optional for product.',
      }),
    impressionCap: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The lifetime impression cap for CPM sponsorship deals. The deal will stop serving when the cap is reached.',
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
          "For sponsorship deals, this is the percentage of the seller's eligible impressions that the deal will serve until the cap is reached.",
      }),
    reservationType: z
      .enum(['RESERVATION_TYPE_UNSPECIFIED', 'STANDARD', 'SPONSORSHIP'])
      .exactOptional()
      .openapi({
        description:
          'The reservation type for a Programmatic Guaranteed deal. This indicates whether the number of impressions is fixed, or a percent of available impressions. If not specified, the default reservation type is STANDARD.',
      }),
  })
  .openapi({ description: 'Terms for Programmatic Guaranteed Deals.', required: [] })
  .openapi('GuaranteedFixedPriceTerms')

const NonGuaranteedAuctionTermsSchema = z
  .object({
    autoOptimizePrivateAuction: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'True if open auction buyers are allowed to compete with invited buyers in this private auction.',
      }),
    reservePricesPerBuyer: z
      .array(PricePerBuyerSchema)
      .exactOptional()
      .openapi({ description: 'Reserve price for the specified buyer.' }),
  })
  .openapi({
    description:
      'Terms for Private Auctions. Note that Private Auctions can be created only by the seller, but they can be returned in a get or list request.',
    required: [],
  })
  .openapi('NonGuaranteedAuctionTerms')

const NonGuaranteedFixedPriceTermsSchema = z
  .object({
    fixedPrices: z
      .array(PricePerBuyerSchema)
      .exactOptional()
      .openapi({ description: 'Fixed price for the specified buyer.' }),
  })
  .openapi({ description: 'Terms for Preferred Deals.', required: [] })
  .openapi('NonGuaranteedFixedPriceTerms')

const DealTermsSchema = z
  .object({
    brandingType: z
      .enum(['BRANDING_TYPE_UNSPECIFIED', 'BRANDED', 'SEMI_TRANSPARENT'])
      .exactOptional()
      .openapi({ description: 'Visibility of the URL in bid requests. (default: BRANDED)' }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'Publisher provided description for the terms.' }),
    estimatedGrossSpend: PriceSchema.exactOptional().openapi({
      description:
        'Non-binding estimate of the estimated gross spend for this deal. Can be set by buyer or seller.',
    }),
    estimatedImpressionsPerDay: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Non-binding estimate of the impressions served per day. Can be set by buyer or seller.',
      }),
    guaranteedFixedPriceTerms: GuaranteedFixedPriceTermsSchema.exactOptional().openapi({
      description: 'The terms for guaranteed fixed price deals.',
    }),
    nonGuaranteedAuctionTerms: NonGuaranteedAuctionTermsSchema.exactOptional().openapi({
      description: 'The terms for non-guaranteed auction deals.',
    }),
    nonGuaranteedFixedPriceTerms: NonGuaranteedFixedPriceTermsSchema.exactOptional().openapi({
      description: 'The terms for non-guaranteed fixed price deals.',
    }),
    sellerTimeZone: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The time zone name. For deals with Cost Per Day billing, defines the time zone used to mark the boundaries of a day. It should be an IANA TZ name, such as "America/Los_Angeles". For more information, see https://en.wikipedia.org/wiki/List_of_tz_database_time_zones.',
      }),
  })
  .openapi({
    description:
      'The deal terms specify the details of a Product/deal. They specify things like price per buyer, the type of pricing model (for example, fixed price, auction) and expected impressions from the publisher.',
    required: [],
  })
  .openapi('DealTerms')

const FrequencyCapSchema = z
  .object({
    maxImpressions: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The maximum number of impressions that can be served to a user within the specified time period.',
      }),
    numTimeUnits: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The amount of time, in the units specified by time_unit_type. Defines the amount of time over which impressions per user are counted and capped.',
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
  })
  .openapi({ description: 'Frequency cap.', required: [] })
  .openapi('FrequencyCap')

const DeliveryControlSchema = z
  .object({
    creativeBlockingLevel: z
      .enum([
        'CREATIVE_BLOCKING_LEVEL_UNSPECIFIED',
        'PUBLISHER_BLOCKING_RULES',
        'ADX_POLICY_BLOCKING_ONLY',
      ])
      .exactOptional()
      .openapi({
        description: 'Output only. Specified the creative blocking levels to be applied.',
        readOnly: true,
      }),
    deliveryRateType: z
      .enum(['DELIVERY_RATE_TYPE_UNSPECIFIED', 'EVENLY', 'FRONT_LOADED', 'AS_FAST_AS_POSSIBLE'])
      .exactOptional()
      .openapi({
        description: 'Output only. Specifies how the impression delivery will be paced.',
        readOnly: true,
      }),
    frequencyCaps: z
      .array(FrequencyCapSchema)
      .exactOptional()
      .openapi({ description: 'Output only. Specifies any frequency caps.', readOnly: true }),
  })
  .openapi({
    description: 'Message contains details about how the deals will be paced.',
    required: [],
  })
  .openapi('DeliveryControl')

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
    description:
      'Represents the size of an ad unit that can be targeted on an ad request. It only applies to Private Auction, AdX Preferred Deals and Auction Packages. This targeting does not apply to Programmatic Guaranteed and Preferred Deals in Ad Manager.',
    required: [],
  })
  .openapi('InventorySizeTargeting')

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

const UrlTargetingSchema = z
  .object({
    excludedUrls: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'A list of URLs to be excluded.' }),
    targetedUrls: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'A list of URLs to be included.' }),
  })
  .openapi({
    description:
      "Represents a list of targeted and excluded URLs (for example, google.com). For Private Auction and AdX Preferred Deals, URLs are either included or excluded. For Programmatic Guaranteed and Preferred Deals, this doesn't apply.",
    required: [],
  })
  .openapi('UrlTargeting')

const PlacementTargetingSchema = z
  .object({
    mobileApplicationTargeting: MobileApplicationTargetingSchema.exactOptional().openapi({
      description:
        "Mobile application targeting information in a deal. This doesn't apply to Auction Packages.",
    }),
    urlTargeting: UrlTargetingSchema.exactOptional().openapi({
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
          'A list of video positions to be excluded. Position types can either be included or excluded (XOR).',
      }),
    targetedPositionTypes: z
      .array(z.enum(['POSITION_TYPE_UNSPECIFIED', 'PREROLL', 'MIDROLL', 'POSTROLL']))
      .exactOptional()
      .openapi({
        description:
          'A list of video positions to be included. When the included list is present, the excluded list must be empty. When the excluded list is present, the included list must be empty.',
      }),
  })
  .openapi({ description: 'Represents targeting information about video.', required: [] })
  .openapi('VideoTargeting')

const MarketplaceTargetingSchema = z
  .object({
    geoTargeting: CriteriaTargetingSchema.exactOptional().openapi({
      description: 'Geo criteria IDs to be included/excluded.',
    }),
    inventorySizeTargeting: InventorySizeTargetingSchema.exactOptional().openapi({
      description: 'Inventory sizes to be included/excluded.',
    }),
    placementTargeting: PlacementTargetingSchema.exactOptional().openapi({
      description: 'Placement targeting information, for example, URL, mobile applications.',
    }),
    technologyTargeting: TechnologyTargetingSchema.exactOptional().openapi({
      description:
        'Technology targeting information, for example, operating system, device category.',
    }),
    videoTargeting: VideoTargetingSchema.exactOptional().openapi({
      description: 'Video targeting information.',
    }),
  })
  .openapi({
    description:
      'Targeting represents different criteria that can be used by advertisers to target ad inventory. For example, they can choose to target ad requests only if the user is in the US. Multiple types of targeting are always applied as a logical AND, unless noted otherwise.',
    required: [],
  })
  .openapi('MarketplaceTargeting')

const TargetingValueSchema = z
  .object({
    creativeSizeValue: CreativeSizeSchema.exactOptional().openapi({
      description:
        'The creative size value to include/exclude. Filled in when key = GOOG_CREATIVE_SIZE',
    }),
    dayPartTargetingValue: DayPartTargetingSchema.exactOptional().openapi({
      description:
        'The daypart targeting to include / exclude. Filled in when the key is GOOG_DAYPART_TARGETING. The definition of this targeting is derived from the structure used by Ad Manager.',
    }),
    longValue: z
      .string()
      .exactOptional()
      .openapi({ description: 'The long value to include/exclude.' }),
    stringValue: z
      .string()
      .exactOptional()
      .openapi({ description: 'The string value to include/exclude.' }),
  })
  .openapi({
    description: 'A polymorphic targeting value used as part of Shared Targeting.',
    required: [],
  })
  .openapi('TargetingValue')

const TargetingCriteriaSchema = z
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
      .openapi({
        description:
          'The key representing the shared targeting criterion. Targeting criteria defined by Google ad servers will begin with GOOG_. Third parties may define their own keys. A list of permissible keys along with the acceptable values will be provided as part of the external documentation.',
      }),
  })
  .openapi({
    description:
      'Advertisers can target different attributes of an ad slot. For example, they can choose to show ads only if the user is in the U.S. Such targeting criteria can be specified as part of Shared Targeting.',
    required: [],
  })
  .openapi('TargetingCriteria')

const DealSchema = z
  .object({
    availableEndTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Proposed flight end time of the deal. This will generally be stored in a granularity of a second. A value is not required for Private Auction deals or Preferred Deals.',
      }),
    availableStartTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Proposed flight start time of the deal. This will generally be stored in the granularity of one second since deal serving starts at seconds boundary. Any time specified with more granularity (for example, in milliseconds) will be truncated towards the start of time in seconds.',
      }),
    buyerPrivateData: PrivateDataSchema.exactOptional().openapi({
      description: 'Buyer private data (hidden from seller).',
    }),
    createProductId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The product ID from which this deal was created. Note: This field may be set only when creating the resource. Modifying this field while updating the resource will result in an error.',
      }),
    createProductRevision: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Revision number of the product that the deal was created from. If present on create, and the server `product_revision` has advanced since the passed-in `create_product_revision`, an `ABORTED` error will be returned. Note: This field may be set only when creating the resource. Modifying this field while updating the resource will result in an error.',
      }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The time of the deal creation.', readOnly: true }),
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
    creativeRestrictions: CreativeRestrictionsSchema.exactOptional().openapi({
      description:
        'Output only. Restricitions about the creatives associated with the deal (for example, size) This is available for Programmatic Guaranteed/Preferred Deals in Ad Manager.',
      readOnly: true,
    }),
    creativeSafeFrameCompatibility: z
      .enum(['CREATIVE_SAFE_FRAME_COMPATIBILITY_UNSPECIFIED', 'COMPATIBLE', 'INCOMPATIBLE'])
      .exactOptional()
      .openapi({
        description: 'Output only. Specifies whether the creative is safeFrame compatible.',
        readOnly: true,
      }),
    dealId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. A unique deal ID for the deal (server-assigned).',
        readOnly: true,
      }),
    dealServingMetadata: DealServingMetadataSchema.exactOptional().openapi({
      description: 'Output only. Metadata about the serving status of this deal.',
      readOnly: true,
    }),
    dealTerms: DealTermsSchema.exactOptional().openapi({
      description: 'The negotiable terms of the deal.',
    }),
    deliveryControl: DeliveryControlSchema.exactOptional().openapi({
      description:
        'The set of fields around delivery control that are interesting for a buyer to see but are non-negotiable. These are set by the publisher.',
    }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'Description for the deal terms.' }),
    displayName: z.string().exactOptional().openapi({ description: 'The name of the deal.' }),
    externalDealId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The external deal ID assigned to this deal once the deal is finalized. This is the deal ID that shows up in serving/reporting etc.',
        readOnly: true,
      }),
    isSetupComplete: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Output only. True, if the buyside inventory setup is complete for this deal.',
        readOnly: true,
      }),
    programmaticCreativeSource: z
      .enum(['PROGRAMMATIC_CREATIVE_SOURCE_UNSPECIFIED', 'ADVERTISER', 'PUBLISHER'])
      .exactOptional()
      .openapi({
        description:
          'Output only. Specifies the creative source for programmatic deals. PUBLISHER means creative is provided by seller and ADVERTISER means creative is provided by buyer.',
        readOnly: true,
      }),
    proposalId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. ID of the proposal that this deal is part of.',
        readOnly: true,
      }),
    sellerContacts: z
      .array(ContactInformationSchema)
      .exactOptional()
      .openapi({
        description: 'Output only. Seller contact information for the deal.',
        readOnly: true,
      }),
    syndicationProduct: z
      .enum(['SYNDICATION_PRODUCT_UNSPECIFIED', 'CONTENT', 'MOBILE', 'VIDEO', 'GAMES'])
      .exactOptional()
      .openapi({
        description:
          'The syndication product associated with the deal. Note: This field may be set only when creating the resource. Modifying this field while updating the resource will result in an error.',
      }),
    targeting: MarketplaceTargetingSchema.exactOptional().openapi({
      description: 'Output only. Specifies the subset of inventory targeted by the deal.',
      readOnly: true,
    }),
    targetingCriterion: z
      .array(TargetingCriteriaSchema)
      .exactOptional()
      .openapi({
        description:
          "The shared targeting visible to buyers and sellers. Each shared targeting entity is AND'd together.",
      }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The time when the deal was last updated.',
        readOnly: true,
      }),
    webPropertyCode: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The web property code for the seller copied over from the product.',
      }),
  })
  .openapi({
    description:
      'A deal represents a segment of inventory for displaying ads on. A proposal can contain multiple deals. A deal contains the terms and targeting information that is used for serving.',
    required: [],
  })
  .openapi('Deal')

const EmptySchema = z
  .object({})
  .openapi({
    description:
      'A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); }',
  })
  .openapi('Empty')

const RealtimeTimeRangeSchema = z
  .object({
    startTimestamp: z
      .string()
      .exactOptional()
      .openapi({ description: 'The start timestamp of the real-time RTB metrics aggregation.' }),
  })
  .openapi({
    description:
      'An open-ended realtime time range specified by the start timestamp. For filter sets that specify a realtime time range RTB metrics continue to be aggregated throughout the lifetime of the filter set.',
    required: [],
  })
  .openapi('RealtimeTimeRange')

const RelativeDateRangeSchema = z
  .object({
    durationDays: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The number of days in the requested date range, for example, for a range spanning today: 1. For a range spanning the last 7 days: 7.',
      }),
    offsetDays: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The end date of the filter set, specified as the number of days before today, for example, for a range where the last date is today: 0.',
      }),
  })
  .openapi({
    description:
      'A relative date range, specified by an offset and a duration. The supported range of dates begins 30 days before today and ends today, for example, the limits for these values are: offset_days >= 0 duration_days >= 1 offset_days + duration_days <= 30',
    required: [],
  })
  .openapi('RelativeDateRange')

const FilterSetSchema = z
  .object({
    absoluteDateRange: AbsoluteDateRangeSchema.exactOptional().openapi({
      description:
        'An absolute date range, defined by a start date and an end date. Interpreted relative to Pacific time zone.',
    }),
    breakdownDimensions: z
      .array(z.enum(['BREAKDOWN_DIMENSION_UNSPECIFIED', 'PUBLISHER_IDENTIFIER']))
      .exactOptional()
      .openapi({
        description:
          'The set of dimensions along which to break down the response; may be empty. If multiple dimensions are requested, the breakdown is along the Cartesian product of the requested dimensions.',
      }),
    creativeId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The ID of the creative on which to filter; optional. This field may be set only for a filter set that accesses account-level troubleshooting data, for example, one whose name matches the `bidders/*/accounts/*/filterSets/*` pattern.',
      }),
    dealId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The ID of the deal on which to filter; optional. This field may be set only for a filter set that accesses account-level troubleshooting data, for example, one whose name matches the `bidders/*/accounts/*/filterSets/*` pattern.',
      }),
    environment: z
      .enum(['ENVIRONMENT_UNSPECIFIED', 'WEB', 'APP'])
      .exactOptional()
      .openapi({ description: 'The environment on which to filter; optional.' }),
    format: z
      .enum([
        'FORMAT_UNSPECIFIED',
        'NATIVE_DISPLAY',
        'NATIVE_VIDEO',
        'NON_NATIVE_DISPLAY',
        'NON_NATIVE_VIDEO',
      ])
      .exactOptional()
      .openapi({ description: 'Creative format bidded on or allowed to bid on, can be empty.' }),
    formats: z
      .array(
        z.enum([
          'FORMAT_UNSPECIFIED',
          'NATIVE_DISPLAY',
          'NATIVE_VIDEO',
          'NON_NATIVE_DISPLAY',
          'NON_NATIVE_VIDEO',
        ]),
      )
      .exactOptional()
      .openapi({
        description:
          'Creative formats bidded on or allowed to bid on, can be empty. Although this field is a list, it can only be populated with a single item. A HTTP 400 bad request error will be returned in the response if you specify multiple items.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A user-defined name of the filter set. Filter set names must be unique globally and match one of the patterns: - `bidders/*/filterSets/*` (for accessing bidder-level troubleshooting data) - `bidders/*/accounts/*/filterSets/*` (for accessing account-level troubleshooting data) This field is required in create operations.',
      }),
    platforms: z
      .array(z.enum(['PLATFORM_UNSPECIFIED', 'DESKTOP', 'TABLET', 'MOBILE']))
      .exactOptional()
      .openapi({
        description:
          'The list of platforms on which to filter; may be empty. The filters represented by multiple platforms are ORed together (for example, if non-empty, results must match any one of the platforms).',
      }),
    publisherIdentifiers: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'For Open Bidding partners only. The list of publisher identifiers on which to filter; may be empty. The filters represented by multiple publisher identifiers are ORed together.',
      }),
    realtimeTimeRange: RealtimeTimeRangeSchema.exactOptional().openapi({
      description: 'An open-ended realtime time range, defined by the aggregation start timestamp.',
    }),
    relativeDateRange: RelativeDateRangeSchema.exactOptional().openapi({
      description:
        'A relative date range, defined by an offset from today and a duration. Interpreted relative to Pacific time zone.',
    }),
    sellerNetworkIds: z
      .array(z.int32())
      .exactOptional()
      .openapi({
        description:
          'For Authorized Buyers only. The list of IDs of the seller (publisher) networks on which to filter; may be empty. The filters represented by multiple seller network IDs are ORed together (for example, if non-empty, results must match any one of the publisher networks). See [seller-network-ids](https://developers.google.com/authorized-buyers/rtb/downloads/seller-network-ids) file for the set of existing seller network IDs.',
      }),
    timeSeriesGranularity: z
      .enum(['TIME_SERIES_GRANULARITY_UNSPECIFIED', 'HOURLY', 'DAILY'])
      .exactOptional()
      .openapi({
        description:
          'The granularity of time intervals if a time series breakdown is preferred; optional.',
      }),
  })
  .openapi({
    description:
      'A set of filters that is applied to a request for data. Within a filter set, an AND operation is performed across the filters represented by each field. An OR operation is performed across the filters represented by the multiple values of a repeated field, for example, "format=VIDEO AND deal_id=12 AND (seller_network_id=34 OR seller_network_id=56)".',
    required: [],
  })
  .openapi('FilterSet')

const FilteredBidCreativeRowSchema = z
  .object({
    bidCount: MetricValueSchema.exactOptional().openapi({
      description: 'The number of bids with the specified creative.',
    }),
    creativeId: z.string().exactOptional().openapi({ description: 'The ID of the creative.' }),
    rowDimensions: RowDimensionsSchema.exactOptional().openapi({
      description: 'The values of all dimensions associated with metric values in this row.',
    }),
  })
  .openapi({
    description:
      'The number of filtered bids with the specified dimension values that have the specified creative.',
    required: [],
  })
  .openapi('FilteredBidCreativeRow')

const FilteredBidDetailRowSchema = z
  .object({
    bidCount: MetricValueSchema.exactOptional().openapi({
      description: 'The number of bids with the specified detail.',
    }),
    detail: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The ID of the detail, can be numeric or text. The associated value can be looked up in the dictionary file corresponding to the DetailType in the response message.',
      }),
    detailId: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Note: this field will be deprecated, use "detail" field instead. When "detail" field represents an integer value, this field is populated as the same integer value "detail" field represents, otherwise this field will be 0. The ID of the detail. The associated value can be looked up in the dictionary file corresponding to the DetailType in the response message.',
      }),
    rowDimensions: RowDimensionsSchema.exactOptional().openapi({
      description: 'The values of all dimensions associated with metric values in this row.',
    }),
  })
  .openapi({
    description:
      'The number of filtered bids with the specified dimension values, among those filtered due to the requested filtering reason (for example, creative status), that have the specified detail.',
    required: [],
  })
  .openapi('FilteredBidDetailRow')

const ImpressionMetricsRowSchema = z
  .object({
    availableImpressions: MetricValueSchema.exactOptional().openapi({
      description:
        'The number of impressions available to the buyer on Ad Exchange. In some cases this value may be unavailable.',
    }),
    bidRequests: MetricValueSchema.exactOptional().openapi({
      description: 'The number of impressions for which Ad Exchange sent the buyer a bid request.',
    }),
    inventoryMatches: MetricValueSchema.exactOptional().openapi({
      description: "The number of impressions that match the buyer's inventory pretargeting.",
    }),
    responsesWithBids: MetricValueSchema.exactOptional().openapi({
      description:
        'The number of impressions for which Ad Exchange received a response from the buyer that contained at least one applicable bid.',
    }),
    rowDimensions: RowDimensionsSchema.exactOptional().openapi({
      description: 'The values of all dimensions associated with metric values in this row.',
    }),
    successfulResponses: MetricValueSchema.exactOptional().openapi({
      description:
        'The number of impressions for which the buyer successfully sent a response to Ad Exchange.',
    }),
  })
  .openapi({
    description:
      'The set of metrics that are measured in numbers of impressions, representing how many impressions with the specified dimension values were considered eligible at each stage of the bidding funnel.',
    required: [],
  })
  .openapi('ImpressionMetricsRow')

const ListBidMetricsResponseSchema = z
  .object({
    bidMetricsRows: z
      .array(BidMetricsRowSchema)
      .exactOptional()
      .openapi({ description: 'List of rows, each containing a set of bid metrics.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token to retrieve the next page of results. Pass this value in the ListBidMetricsRequest.pageToken field in the subsequent call to the bidMetrics.list method to retrieve the next page of results.',
      }),
  })
  .openapi({
    description: 'Response message for listing the metrics that are measured in number of bids.',
    required: [],
  })
  .openapi('ListBidMetricsResponse')

const ListBidResponseErrorsResponseSchema = z
  .object({
    calloutStatusRows: z
      .array(CalloutStatusRowSchema)
      .exactOptional()
      .openapi({
        description: 'List of rows, with counts of bid responses aggregated by callout status.',
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token to retrieve the next page of results. Pass this value in the ListBidResponseErrorsRequest.pageToken field in the subsequent call to the bidResponseErrors.list method to retrieve the next page of results.',
      }),
  })
  .openapi({
    description:
      'Response message for listing all reasons that bid responses resulted in an error.',
    required: [],
  })
  .openapi('ListBidResponseErrorsResponse')

const ListBidResponsesWithoutBidsResponseSchema = z
  .object({
    bidResponseWithoutBidsStatusRows: z
      .array(BidResponseWithoutBidsStatusRowSchema)
      .exactOptional()
      .openapi({
        description:
          'List of rows, with counts of bid responses without bids aggregated by status.',
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token to retrieve the next page of results. Pass this value in the ListBidResponsesWithoutBidsRequest.pageToken field in the subsequent call to the bidResponsesWithoutBids.list method to retrieve the next page of results.',
      }),
  })
  .openapi({
    description:
      'Response message for listing all reasons that bid responses were considered to have no applicable bids.',
    required: [],
  })
  .openapi('ListBidResponsesWithoutBidsResponse')

const ListClientUserInvitationsResponseSchema = z
  .object({
    invitations: z
      .array(ClientUserInvitationSchema)
      .exactOptional()
      .openapi({ description: 'The returned list of client users.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token to retrieve the next page of results. Pass this value in the ListClientUserInvitationsRequest.pageToken field in the subsequent call to the clients.invitations.list method to retrieve the next page of results.',
      }),
  })
  .openapi({ required: [] })
  .openapi('ListClientUserInvitationsResponse')

const ListClientUsersResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token to retrieve the next page of results. Pass this value in the ListClientUsersRequest.pageToken field in the subsequent call to the clients.invitations.list method to retrieve the next page of results.',
      }),
    users: z
      .array(ClientUserSchema)
      .exactOptional()
      .openapi({ description: 'The returned list of client users.' }),
  })
  .openapi({ required: [] })
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
          'A token to retrieve the next page of results. Pass this value in the ListClientsRequest.pageToken field in the subsequent call to the accounts.clients.list method to retrieve the next page of results.',
      }),
  })
  .openapi({ required: [] })
  .openapi('ListClientsResponse')

const ListCreativeStatusBreakdownByCreativeResponseSchema = z
  .object({
    filteredBidCreativeRows: z
      .array(FilteredBidCreativeRowSchema)
      .exactOptional()
      .openapi({
        description:
          'List of rows, with counts of bids with a given creative status aggregated by creative.',
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token to retrieve the next page of results. Pass this value in the ListCreativeStatusBreakdownByCreativeRequest.pageToken field in the subsequent call to the filteredBids.creatives.list method to retrieve the next page of results.',
      }),
  })
  .openapi({
    description:
      'Response message for listing all creatives associated with a given filtered bid reason.',
    required: [],
  })
  .openapi('ListCreativeStatusBreakdownByCreativeResponse')

const ListCreativeStatusBreakdownByDetailResponseSchema = z
  .object({
    detailType: z
      .enum([
        'DETAIL_TYPE_UNSPECIFIED',
        'CREATIVE_ATTRIBUTE',
        'VENDOR',
        'SENSITIVE_CATEGORY',
        'PRODUCT_CATEGORY',
        'DISAPPROVAL_REASON',
        'POLICY_TOPIC',
        'ATP_VENDOR',
        'VENDOR_DOMAIN',
        'GVL_ID',
      ])
      .exactOptional()
      .openapi({ description: 'The type of detail that the detail IDs represent.' }),
    filteredBidDetailRows: z
      .array(FilteredBidDetailRowSchema)
      .exactOptional()
      .openapi({
        description:
          'List of rows, with counts of bids with a given creative status aggregated by detail.',
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token to retrieve the next page of results. Pass this value in the ListCreativeStatusBreakdownByDetailRequest.pageToken field in the subsequent call to the filteredBids.details.list method to retrieve the next page of results.',
      }),
  })
  .openapi({
    description:
      'Response message for listing all details associated with a given filtered bid reason.',
    required: [],
  })
  .openapi('ListCreativeStatusBreakdownByDetailResponse')

const ListCreativesResponseSchema = z
  .object({
    creatives: z
      .array(CreativeSchema)
      .exactOptional()
      .openapi({ description: 'The list of creatives.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token to retrieve the next page of results. Pass this value in the ListCreativesRequest.page_token field in the subsequent call to `ListCreatives` method to retrieve the next page of results.',
      }),
  })
  .openapi({ description: 'A response for listing creatives.', required: [] })
  .openapi('ListCreativesResponse')

const ListDealAssociationsResponseSchema = z
  .object({
    associations: z
      .array(CreativeDealAssociationSchema)
      .exactOptional()
      .openapi({ description: 'The list of associations.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "A token to retrieve the next page of results. Pass this value in the ListDealAssociationsRequest.page_token field in the subsequent call to 'ListDealAssociation' method to retrieve the next page of results.",
      }),
  })
  .openapi({ description: 'A response for listing creative and deal associations', required: [] })
  .openapi('ListDealAssociationsResponse')

const ListFilterSetsResponseSchema = z
  .object({
    filterSets: z
      .array(FilterSetSchema)
      .exactOptional()
      .openapi({ description: 'The filter sets belonging to the buyer.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token to retrieve the next page of results. Pass this value in the ListFilterSetsRequest.pageToken field in the subsequent call to the accounts.filterSets.list method to retrieve the next page of results.',
      }),
  })
  .openapi({ description: 'Response message for listing filter sets.', required: [] })
  .openapi('ListFilterSetsResponse')

const ListFilteredBidRequestsResponseSchema = z
  .object({
    calloutStatusRows: z
      .array(CalloutStatusRowSchema)
      .exactOptional()
      .openapi({
        description:
          'List of rows, with counts of filtered bid requests aggregated by callout status.',
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token to retrieve the next page of results. Pass this value in the ListFilteredBidRequestsRequest.pageToken field in the subsequent call to the filteredBidRequests.list method to retrieve the next page of results.',
      }),
  })
  .openapi({
    description:
      'Response message for listing all reasons that bid requests were filtered and not sent to the buyer.',
    required: [],
  })
  .openapi('ListFilteredBidRequestsResponse')

const ListFilteredBidsResponseSchema = z
  .object({
    creativeStatusRows: z
      .array(CreativeStatusRowSchema)
      .exactOptional()
      .openapi({
        description:
          'List of rows, with counts of filtered bids aggregated by filtering reason (for example, creative status).',
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token to retrieve the next page of results. Pass this value in the ListFilteredBidsRequest.pageToken field in the subsequent call to the filteredBids.list method to retrieve the next page of results.',
      }),
  })
  .openapi({
    description:
      'Response message for listing all reasons that bids were filtered from the auction.',
    required: [],
  })
  .openapi('ListFilteredBidsResponse')

const ListImpressionMetricsResponseSchema = z
  .object({
    impressionMetricsRows: z
      .array(ImpressionMetricsRowSchema)
      .exactOptional()
      .openapi({ description: 'List of rows, each containing a set of impression metrics.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token to retrieve the next page of results. Pass this value in the ListImpressionMetricsRequest.pageToken field in the subsequent call to the impressionMetrics.list method to retrieve the next page of results.',
      }),
  })
  .openapi({
    description:
      'Response message for listing the metrics that are measured in number of impressions.',
    required: [],
  })
  .openapi('ListImpressionMetricsResponse')

const ListLosingBidsResponseSchema = z
  .object({
    creativeStatusRows: z
      .array(CreativeStatusRowSchema)
      .exactOptional()
      .openapi({
        description:
          'List of rows, with counts of losing bids aggregated by loss reason (for example, creative status).',
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token to retrieve the next page of results. Pass this value in the ListLosingBidsRequest.pageToken field in the subsequent call to the losingBids.list method to retrieve the next page of results.',
      }),
  })
  .openapi({
    description: 'Response message for listing all reasons that bids lost in the auction.',
    required: [],
  })
  .openapi('ListLosingBidsResponse')

const NonBillableWinningBidStatusRowSchema = z
  .object({
    bidCount: MetricValueSchema.exactOptional().openapi({
      description: 'The number of bids with the specified status.',
    }),
    rowDimensions: RowDimensionsSchema.exactOptional().openapi({
      description: 'The values of all dimensions associated with metric values in this row.',
    }),
    status: z
      .enum([
        'STATUS_UNSPECIFIED',
        'AD_NOT_RENDERED',
        'INVALID_IMPRESSION',
        'FATAL_VAST_ERROR',
        'LOST_IN_MEDIATION',
      ])
      .exactOptional()
      .openapi({ description: 'The status specifying why the winning bids were not billed.' }),
  })
  .openapi({
    description:
      'The number of winning bids with the specified dimension values for which the buyer was not billed, as described by the specified status.',
    required: [],
  })
  .openapi('NonBillableWinningBidStatusRow')

const ListNonBillableWinningBidsResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token to retrieve the next page of results. Pass this value in the ListNonBillableWinningBidsRequest.pageToken field in the subsequent call to the nonBillableWinningBids.list method to retrieve the next page of results.',
      }),
    nonBillableWinningBidStatusRows: z
      .array(NonBillableWinningBidStatusRowSchema)
      .exactOptional()
      .openapi({
        description: 'List of rows, with counts of bids not billed aggregated by reason.',
      }),
  })
  .openapi({
    description:
      'Response message for listing all reasons for which a buyer was not billed for a winning bid.',
    required: [],
  })
  .openapi('ListNonBillableWinningBidsResponse')

const SellerSchema = z
  .object({
    accountId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The unique ID for the seller. The seller fills in this field. The seller account ID is then available to buyer in the product.',
      }),
    subAccountId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Ad manager network code for the seller.',
        readOnly: true,
      }),
  })
  .openapi({
    description:
      'Represents a seller of inventory. Each seller is identified by a unique Ad Manager account ID.',
    required: [],
  })
  .openapi('Seller')

const ProductSchema = z
  .object({
    availableEndTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The proposed end time for the deal. The field will be truncated to the order of seconds during serving.',
      }),
    availableStartTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Inventory availability dates. The start time will be truncated to seconds during serving. Thus, a field specified as 3:23:34.456 (HH:mm:ss.SSS) will be truncated to 3:23:34 when serving.',
      }),
    createTime: z.string().exactOptional().openapi({ description: 'Creation time.' }),
    creatorContacts: z
      .array(ContactInformationSchema)
      .exactOptional()
      .openapi({ description: 'Optional contact information for the creator of this product.' }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The display name for this product as set by the seller.' }),
    hasCreatorSignedOff: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If the creator has already signed off on the product, then the buyer can finalize the deal by accepting the product as is. When copying to a proposal, if any of the terms are changed, then auto_finalize is automatically set to false.',
      }),
    productId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique ID for the product.' }),
    productRevision: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The revision number of the product (auto-assigned by Marketplace).',
      }),
    publisherProfileId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'An ID which can be used by the Publisher Profile API to get more information about the seller that created this product.',
      }),
    seller: SellerSchema.exactOptional().openapi({
      description: 'Information about the seller that created this product.',
    }),
    syndicationProduct: z
      .enum(['SYNDICATION_PRODUCT_UNSPECIFIED', 'CONTENT', 'MOBILE', 'VIDEO', 'GAMES'])
      .exactOptional()
      .openapi({ description: 'The syndication product associated with the deal.' }),
    targetingCriterion: z
      .array(TargetingCriteriaSchema)
      .exactOptional()
      .openapi({
        description:
          'Targeting that is shared between the buyer and the seller. Each targeting criterion has a specified key and for each key there is a list of inclusion value or exclusion values.',
      }),
    terms: DealTermsSchema.exactOptional().openapi({
      description: 'The negotiable terms of the deal.',
    }),
    updateTime: z.string().exactOptional().openapi({ description: 'Time of last update.' }),
    webPropertyCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The web-property code for the seller. This needs to be copied as is when adding a new deal to a proposal.',
      }),
  })
  .openapi({
    description:
      'A product is a segment of inventory that a seller wants to sell. It is associated with certain terms and targeting information which helps the buyer know more about the inventory.',
    required: [],
  })
  .openapi('Product')

const ListProductsResponseSchema = z
  .object({
    nextPageToken: z.string().exactOptional().openapi({ description: 'List pagination support.' }),
    products: z
      .array(ProductSchema)
      .exactOptional()
      .openapi({ description: 'The list of matching products at their head revision number.' }),
  })
  .openapi({
    description: 'Response message for listing products visible to the buyer.',
    required: [],
  })
  .openapi('ListProductsResponse')

const ProposalSchema = z
  .object({
    billedBuyer: BuyerSchema.exactOptional().openapi({
      description: 'Output only. Reference to the buyer that will get billed for this proposal.',
      readOnly: true,
    }),
    buyer: BuyerSchema.exactOptional().openapi({
      description:
        'Reference to the buyer on the proposal. Note: This field may be set only when creating the resource. Modifying this field while updating the resource will result in an error.',
    }),
    buyerContacts: z
      .array(ContactInformationSchema)
      .exactOptional()
      .openapi({ description: 'Contact information for the buyer.' }),
    buyerPrivateData: PrivateDataSchema.exactOptional().openapi({
      description: 'Private data for buyer. (hidden from seller).',
    }),
    deals: z
      .array(DealSchema)
      .exactOptional()
      .openapi({
        description:
          'The deals associated with this proposal. For Private Auction proposals (whose deals have NonGuaranteedAuctionTerms), there will only be one deal.',
      }),
    displayName: z.string().exactOptional().openapi({ description: 'The name for the proposal.' }),
    isRenegotiating: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Output only. True if the proposal is being renegotiated.',
        readOnly: true,
      }),
    isSetupComplete: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Output only. True, if the buyside inventory setup is complete for this proposal.',
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
    notes: z
      .array(NoteSchema)
      .exactOptional()
      .openapi({
        description: 'Output only. The notes associated with this proposal.',
        readOnly: true,
      }),
    originatorRole: z
      .enum(['BUYER_SELLER_ROLE_UNSPECIFIED', 'BUYER', 'SELLER'])
      .exactOptional()
      .openapi({
        description: 'Output only. Indicates whether the buyer/seller created the proposal.',
        readOnly: true,
      }),
    privateAuctionId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Private auction ID if this proposal is a private auction proposal.',
        readOnly: true,
      }),
    proposalId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The unique ID of the proposal.', readOnly: true }),
    proposalRevision: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The revision number for the proposal. Each update to the proposal or the deal causes the proposal revision number to auto-increment. The buyer keeps track of the last revision number they know of and pass it in when making an update. If the head revision number on the server has since incremented, then an ABORTED error is returned during the update operation to let the buyer know that a subsequent update was made.',
        readOnly: true,
      }),
    proposalState: z
      .enum([
        'PROPOSAL_STATE_UNSPECIFIED',
        'PROPOSED',
        'BUYER_ACCEPTED',
        'SELLER_ACCEPTED',
        'CANCELED',
        'FINALIZED',
      ])
      .exactOptional()
      .openapi({ description: 'Output only. The current state of the proposal.', readOnly: true }),
    seller: SellerSchema.exactOptional().openapi({
      description:
        'Reference to the seller on the proposal. Note: This field may be set only when creating the resource. Modifying this field while updating the resource will result in an error.',
    }),
    sellerContacts: z
      .array(ContactInformationSchema)
      .exactOptional()
      .openapi({ description: 'Output only. Contact information for the seller.', readOnly: true }),
    termsAndConditions: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The terms and conditions set by the publisher for this proposal.',
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
      "Represents a proposal in the Marketplace. A proposal is the unit of negotiation between a seller and a buyer and contains deals which are served. Note: You can't update, create, or otherwise modify Private Auction deals through the API. Fields are updatable unless noted otherwise.",
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
        'AMAZON_FIRETV',
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
      .openapi({ description: 'The app store the app belongs to.' }),
    externalAppId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The external ID for the app from its app store.' }),
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
    buyerPitchStatement: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Statement explaining what's unique about publisher's business, and why buyers should partner with the publisher.",
      }),
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
      .openapi({ description: 'Name of the publisher profile.' }),
    domains: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The list of domains represented in this publisher profile. Empty if this is a parent profile. These are top private domains, meaning that these will not contain a string like "photos.google.co.uk/123", but will instead contain "google.co.uk".',
      }),
    googlePlusUrl: z
      .string()
      .exactOptional()
      .openapi({ description: "URL to publisher's Google+ page." }),
    isParent: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates if this profile is the parent profile of the seller. A parent profile represents all the inventory from the seller, as opposed to child profile that is created to brand a portion of inventory. One seller should have only one parent publisher profile, and can have multiple child profiles. Publisher profiles for the same seller will have same value of field google.ads.adexchange.buyer.v2beta1.PublisherProfile.seller. See https://support.google.com/admanager/answer/6035806 for details.',
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
    overview: z.string().exactOptional().openapi({ description: 'Overview of the publisher.' }),
    programmaticDealsContact: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Contact information for programmatic deals. This is free text entered by the publisher and may include information like names, phone numbers and email addresses.',
      }),
    publisherProfileId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Unique ID for publisher profile.' }),
    rateCardInfoUrl: z
      .string()
      .exactOptional()
      .openapi({ description: 'URL to a publisher rate card.' }),
    samplePageUrl: z
      .string()
      .exactOptional()
      .openapi({ description: 'URL to a sample content page.' }),
    seller: SellerSchema.exactOptional().openapi({
      description: 'Seller of the publisher profile.',
    }),
    topHeadlines: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Up to three key metrics and rankings. Max 100 characters each. For example "#1 Mobile News Site for 20 Straight Months".',
      }),
  })
  .openapi({
    description:
      'Represents a publisher profile (https://support.google.com/admanager/answer/6035806) in Marketplace. All fields are read only. All string fields are free-form text entered by the publisher unless noted otherwise.',
    required: [],
  })
  .openapi('PublisherProfile')

const ListPublisherProfilesResponseSchema = z
  .object({
    nextPageToken: z.string().exactOptional().openapi({ description: 'List pagination support' }),
    publisherProfiles: z
      .array(PublisherProfileSchema)
      .exactOptional()
      .openapi({ description: 'The list of matching publisher profiles.' }),
  })
  .openapi({ description: 'Response message for profiles visible to the buyer.', required: [] })
  .openapi('ListPublisherProfilesResponse')

const PauseProposalDealsRequestSchema = z
  .object({
    externalDealIds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          "The external_deal_id's of the deals to be paused. If empty, all the deals in the proposal will be paused.",
      }),
    reason: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The reason why the deals are being paused. This human readable message will be displayed in the seller's UI. (Max length: 1000 unicode code units.)",
      }),
  })
  .openapi({ description: 'Request message to pause serving for finalized deals.', required: [] })
  .openapi('PauseProposalDealsRequest')

const PauseProposalRequestSchema = z
  .object({
    reason: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The reason why the proposal is being paused. This human readable message will be displayed in the seller's UI. (Max length: 1000 unicode code units.)",
      }),
  })
  .openapi({
    description: 'Request message to pause serving for an already-finalized proposal.',
    required: [],
  })
  .openapi('PauseProposalRequest')

const RemoveDealAssociationRequestSchema = z
  .object({
    association: CreativeDealAssociationSchema.exactOptional().openapi({
      description: 'The association between a creative and a deal that should be removed.',
    }),
  })
  .openapi({
    description: 'A request for removing the association between a deal and a creative.',
    required: [],
  })
  .openapi('RemoveDealAssociationRequest')

const ResumeProposalDealsRequestSchema = z
  .object({
    externalDealIds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          "The external_deal_id's of the deals to resume. If empty, all the deals in the proposal will be resumed.",
      }),
  })
  .openapi({
    description: 'Request message to resume (unpause) serving for already-finalized deals.',
    required: [],
  })
  .openapi('ResumeProposalDealsRequest')

const ResumeProposalRequestSchema = z
  .object({})
  .openapi({
    description: 'Request message to resume (unpause) serving for an already-finalized proposal.',
  })
  .openapi('ResumeProposalRequest')

const StopWatchingCreativeRequestSchema = z
  .object({})
  .openapi({ description: 'A request for stopping notifications for changes to creative Status.' })
  .openapi('StopWatchingCreativeRequest')

const WatchCreativeRequestSchema = z
  .object({
    topic: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The Pub/Sub topic to publish notifications to. This topic must already exist and must give permission to ad-exchange-buyside-reports@google.com to write to the topic. This should be the full resource name in "projects/{project_id}/topics/{topic_id}" format.',
      }),
  })
  .openapi({ description: 'A request for watching changes to creative Status.', required: [] })
  .openapi('WatchCreativeRequest')

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

export const getV2beta1AccountsAccountIdClientsRoute = createRoute({
  method: 'get',
  path: '/v2beta1/accounts/{accountId}/clients',
  tags: ['accounts'],
  description: 'Lists all the clients for the current sponsor buyer.',
  operationId: 'adexchangebuyer2.accounts.clients.list',
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
              'Requested page size. The server may return fewer clients than requested. If unspecified, the server will pick an appropriate default.',
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
              'A token identifying a page of results the server should return. Typically, this is the value of ListClientsResponse.nextPageToken returned from the previous call to the accounts.clients.list method.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      partnerClientId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional unique identifier (from the standpoint of an Ad Exchange sponsor buyer partner) of the client to return. If specified, at most one client will be returned in the response.',
            in: 'query',
            name: 'partnerClientId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      accountId: z
        .string()
        .openapi({
          param: {
            description:
              'Unique numerical account ID of the sponsor buyer to list the clients for.',
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
      content: { 'application/json': { schema: ListClientsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/adexchange.buyer'],
      Oauth2c: ['https://www.googleapis.com/auth/adexchange.buyer'],
    },
  ],
})

export const postV2beta1AccountsAccountIdClientsRoute = createRoute({
  method: 'post',
  path: '/v2beta1/accounts/{accountId}/clients',
  tags: ['accounts'],
  description: 'Creates a new client buyer.',
  operationId: 'adexchangebuyer2.accounts.clients.create',
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
      accountId: z
        .string()
        .openapi({
          param: {
            description:
              'Unique numerical account ID for the buyer of which the client buyer is a customer; the sponsor buyer to create a client for. (required)',
            in: 'path',
            name: 'accountId',
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
      Oauth2: ['https://www.googleapis.com/auth/adexchange.buyer'],
      Oauth2c: ['https://www.googleapis.com/auth/adexchange.buyer'],
    },
  ],
})

export const getV2beta1AccountsAccountIdClientsClientAccountIdRoute = createRoute({
  method: 'get',
  path: '/v2beta1/accounts/{accountId}/clients/{clientAccountId}',
  tags: ['accounts'],
  description: 'Gets a client buyer with a given client account ID.',
  operationId: 'adexchangebuyer2.accounts.clients.get',
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
      accountId: z
        .string()
        .openapi({
          param: {
            description: "Numerical account ID of the client's sponsor buyer. (required)",
            in: 'path',
            name: 'accountId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      clientAccountId: z
        .string()
        .openapi({
          param: {
            description: 'Numerical account ID of the client buyer to retrieve. (required)',
            in: 'path',
            name: 'clientAccountId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ClientSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/adexchange.buyer'],
      Oauth2c: ['https://www.googleapis.com/auth/adexchange.buyer'],
    },
  ],
})

export const putV2beta1AccountsAccountIdClientsClientAccountIdRoute = createRoute({
  method: 'put',
  path: '/v2beta1/accounts/{accountId}/clients/{clientAccountId}',
  tags: ['accounts'],
  description: 'Updates an existing client buyer.',
  operationId: 'adexchangebuyer2.accounts.clients.update',
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
      accountId: z
        .string()
        .openapi({
          param: {
            description:
              'Unique numerical account ID for the buyer of which the client buyer is a customer; the sponsor buyer to update a client for. (required)',
            in: 'path',
            name: 'accountId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      clientAccountId: z
        .string()
        .openapi({
          param: {
            description: 'Unique numerical account ID of the client to update. (required)',
            in: 'path',
            name: 'clientAccountId',
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
      Oauth2: ['https://www.googleapis.com/auth/adexchange.buyer'],
      Oauth2c: ['https://www.googleapis.com/auth/adexchange.buyer'],
    },
  ],
})

export const getV2beta1AccountsAccountIdClientsClientAccountIdInvitationsRoute = createRoute({
  method: 'get',
  path: '/v2beta1/accounts/{accountId}/clients/{clientAccountId}/invitations',
  tags: ['accounts'],
  description: 'Lists all the client users invitations for a client with a given account ID.',
  operationId: 'adexchangebuyer2.accounts.clients.invitations.list',
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
              'Requested page size. Server may return fewer clients than requested. If unspecified, server will pick an appropriate default.',
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
              'A token identifying a page of results the server should return. Typically, this is the value of ListClientUserInvitationsResponse.nextPageToken returned from the previous call to the clients.invitations.list method.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      accountId: z
        .string()
        .openapi({
          param: {
            description: "Numerical account ID of the client's sponsor buyer. (required)",
            in: 'path',
            name: 'accountId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      clientAccountId: z
        .string()
        .openapi({
          param: {
            description:
              'Numerical account ID of the client buyer to list invitations for. (required) You must either specify a string representation of a numerical account identifier or the `-` character to list all the invitations for all the clients of a given sponsor buyer.',
            in: 'path',
            name: 'clientAccountId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListClientUserInvitationsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/adexchange.buyer'],
      Oauth2c: ['https://www.googleapis.com/auth/adexchange.buyer'],
    },
  ],
})

export const postV2beta1AccountsAccountIdClientsClientAccountIdInvitationsRoute = createRoute({
  method: 'post',
  path: '/v2beta1/accounts/{accountId}/clients/{clientAccountId}/invitations',
  tags: ['accounts'],
  description:
    'Creates and sends out an email invitation to access an Ad Exchange client buyer account.',
  operationId: 'adexchangebuyer2.accounts.clients.invitations.create',
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
      accountId: z
        .string()
        .openapi({
          param: {
            description: "Numerical account ID of the client's sponsor buyer. (required)",
            in: 'path',
            name: 'accountId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      clientAccountId: z
        .string()
        .openapi({
          param: {
            description:
              'Numerical account ID of the client buyer that the user should be associated with. (required)',
            in: 'path',
            name: 'clientAccountId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ClientUserInvitationSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ClientUserInvitationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/adexchange.buyer'],
      Oauth2c: ['https://www.googleapis.com/auth/adexchange.buyer'],
    },
  ],
})

export const getV2beta1AccountsAccountIdClientsClientAccountIdInvitationsInvitationIdRoute =
  createRoute({
    method: 'get',
    path: '/v2beta1/accounts/{accountId}/clients/{clientAccountId}/invitations/{invitationId}',
    tags: ['accounts'],
    description: 'Retrieves an existing client user invitation.',
    operationId: 'adexchangebuyer2.accounts.clients.invitations.get',
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
        accountId: z
          .string()
          .openapi({
            param: {
              description: "Numerical account ID of the client's sponsor buyer. (required)",
              in: 'path',
              name: 'accountId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        clientAccountId: z
          .string()
          .openapi({
            param: {
              description:
                'Numerical account ID of the client buyer that the user invitation to be retrieved is associated with. (required)',
              in: 'path',
              name: 'clientAccountId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        invitationId: z
          .string()
          .openapi({
            param: {
              description: 'Numerical identifier of the user invitation to retrieve. (required)',
              in: 'path',
              name: 'invitationId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: ClientUserInvitationSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/adexchange.buyer'],
        Oauth2c: ['https://www.googleapis.com/auth/adexchange.buyer'],
      },
    ],
  })

export const getV2beta1AccountsAccountIdClientsClientAccountIdUsersRoute = createRoute({
  method: 'get',
  path: '/v2beta1/accounts/{accountId}/clients/{clientAccountId}/users',
  tags: ['accounts'],
  description: 'Lists all the known client users for a specified sponsor buyer account ID.',
  operationId: 'adexchangebuyer2.accounts.clients.users.list',
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
              'Requested page size. The server may return fewer clients than requested. If unspecified, the server will pick an appropriate default.',
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
              'A token identifying a page of results the server should return. Typically, this is the value of ListClientUsersResponse.nextPageToken returned from the previous call to the accounts.clients.users.list method.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      accountId: z
        .string()
        .openapi({
          param: {
            description:
              'Numerical account ID of the sponsor buyer of the client to list users for. (required)',
            in: 'path',
            name: 'accountId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      clientAccountId: z
        .string()
        .openapi({
          param: {
            description:
              'The account ID of the client buyer to list users for. (required) You must specify either a string representation of a numerical account identifier or the `-` character to list all the client users for all the clients of a given sponsor buyer.',
            in: 'path',
            name: 'clientAccountId',
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
      Oauth2: ['https://www.googleapis.com/auth/adexchange.buyer'],
      Oauth2c: ['https://www.googleapis.com/auth/adexchange.buyer'],
    },
  ],
})

export const getV2beta1AccountsAccountIdClientsClientAccountIdUsersUserIdRoute = createRoute({
  method: 'get',
  path: '/v2beta1/accounts/{accountId}/clients/{clientAccountId}/users/{userId}',
  tags: ['accounts'],
  description: 'Retrieves an existing client user.',
  operationId: 'adexchangebuyer2.accounts.clients.users.get',
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
      accountId: z
        .string()
        .openapi({
          param: {
            description: "Numerical account ID of the client's sponsor buyer. (required)",
            in: 'path',
            name: 'accountId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      clientAccountId: z
        .string()
        .openapi({
          param: {
            description:
              'Numerical account ID of the client buyer that the user to be retrieved is associated with. (required)',
            in: 'path',
            name: 'clientAccountId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      userId: z
        .string()
        .openapi({
          param: {
            description: 'Numerical identifier of the user to retrieve. (required)',
            in: 'path',
            name: 'userId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ClientUserSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/adexchange.buyer'],
      Oauth2c: ['https://www.googleapis.com/auth/adexchange.buyer'],
    },
  ],
})

export const putV2beta1AccountsAccountIdClientsClientAccountIdUsersUserIdRoute = createRoute({
  method: 'put',
  path: '/v2beta1/accounts/{accountId}/clients/{clientAccountId}/users/{userId}',
  tags: ['accounts'],
  description: 'Updates an existing client user. Only the user status can be changed on update.',
  operationId: 'adexchangebuyer2.accounts.clients.users.update',
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
      accountId: z
        .string()
        .openapi({
          param: {
            description: "Numerical account ID of the client's sponsor buyer. (required)",
            in: 'path',
            name: 'accountId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      clientAccountId: z
        .string()
        .openapi({
          param: {
            description:
              'Numerical account ID of the client buyer that the user to be retrieved is associated with. (required)',
            in: 'path',
            name: 'clientAccountId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      userId: z
        .string()
        .openapi({
          param: {
            description: 'Numerical identifier of the user to retrieve. (required)',
            in: 'path',
            name: 'userId',
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
      Oauth2: ['https://www.googleapis.com/auth/adexchange.buyer'],
      Oauth2c: ['https://www.googleapis.com/auth/adexchange.buyer'],
    },
  ],
})

export const getV2beta1AccountsAccountIdCreativesRoute = createRoute({
  method: 'get',
  path: '/v2beta1/accounts/{accountId}/creatives',
  tags: ['accounts'],
  description: 'Lists creatives.',
  operationId: 'adexchangebuyer2.accounts.creatives.list',
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
              'Requested page size. The server may return fewer creatives than requested (due to timeout constraint) even if more are available through another call. If unspecified, server will pick an appropriate default. Acceptable values are 1 to 1000, inclusive.',
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
              "A token identifying a page of results the server should return. Typically, this is the value of ListCreativesResponse.next_page_token returned from the previous call to 'ListCreatives' method.",
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      query: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "An optional query string to filter creatives. If no filter is specified, all active creatives will be returned. Supported queries are: - accountId=*account_id_string* - creativeId=*creative_id_string* - dealsStatus: {approved, conditionally_approved, disapproved, not_checked} - openAuctionStatus: {approved, conditionally_approved, disapproved, not_checked} - attribute: {a numeric attribute from the list of attributes} - disapprovalReason: {a reason from DisapprovalReason} Example: 'accountId=12345 AND (dealsStatus:disapproved AND disapprovalReason:unacceptable_content) OR attribute:47'",
            in: 'query',
            name: 'query',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      accountId: z
        .string()
        .openapi({
          param: {
            description:
              'The account to list the creatives from. Specify "-" to list all creatives the current user has access to.',
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
      content: { 'application/json': { schema: ListCreativesResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/adexchange.buyer'],
      Oauth2c: ['https://www.googleapis.com/auth/adexchange.buyer'],
    },
  ],
})

export const postV2beta1AccountsAccountIdCreativesRoute = createRoute({
  method: 'post',
  path: '/v2beta1/accounts/{accountId}/creatives',
  tags: ['accounts'],
  description: 'Creates a creative.',
  operationId: 'adexchangebuyer2.accounts.creatives.create',
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
      duplicateIdMode: z
        .enum(['NO_DUPLICATES', 'FORCE_ENABLE_DUPLICATE_IDS'])
        .exactOptional()
        .openapi({
          param: {
            description:
              'Indicates if multiple creatives can share an ID or not. Default is NO_DUPLICATES (one ID per creative).',
            in: 'query',
            name: 'duplicateIdMode',
            schema: { enum: ['NO_DUPLICATES', 'FORCE_ENABLE_DUPLICATE_IDS'], type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      accountId: z
        .string()
        .openapi({
          param: {
            description:
              'The account that this creative belongs to. Can be used to filter the response of the creatives.list method.',
            in: 'path',
            name: 'accountId',
            required: true,
            schema: { type: 'string' },
          },
        }),
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

export const getV2beta1AccountsAccountIdCreativesCreativeIdRoute = createRoute({
  method: 'get',
  path: '/v2beta1/accounts/{accountId}/creatives/{creativeId}',
  tags: ['accounts'],
  description: 'Gets a creative.',
  operationId: 'adexchangebuyer2.accounts.creatives.get',
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
      accountId: z
        .string()
        .openapi({
          param: {
            description: 'The account the creative belongs to.',
            in: 'path',
            name: 'accountId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      creativeId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the creative to retrieve.',
            in: 'path',
            name: 'creativeId',
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

export const putV2beta1AccountsAccountIdCreativesCreativeIdRoute = createRoute({
  method: 'put',
  path: '/v2beta1/accounts/{accountId}/creatives/{creativeId}',
  tags: ['accounts'],
  description: 'Updates a creative.',
  operationId: 'adexchangebuyer2.accounts.creatives.update',
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
      accountId: z
        .string()
        .openapi({
          param: {
            description:
              'The account that this creative belongs to. Can be used to filter the response of the creatives.list method.',
            in: 'path',
            name: 'accountId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      creativeId: z
        .string()
        .openapi({
          param: {
            description:
              'The buyer-defined creative ID of this creative. Can be used to filter the response of the creatives.list method.',
            in: 'path',
            name: 'creativeId',
            required: true,
            schema: { type: 'string' },
          },
        }),
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

export const getV2beta1AccountsAccountIdCreativesCreativeIdDealAssociationsRoute = createRoute({
  method: 'get',
  path: '/v2beta1/accounts/{accountId}/creatives/{creativeId}/dealAssociations',
  tags: ['accounts'],
  description: 'List all creative-deal associations.',
  operationId: 'adexchangebuyer2.accounts.creatives.dealAssociations.list',
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
              'Requested page size. Server may return fewer associations than requested. If unspecified, server will pick an appropriate default.',
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
              "A token identifying a page of results the server should return. Typically, this is the value of ListDealAssociationsResponse.next_page_token returned from the previous call to 'ListDealAssociations' method.",
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      query: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "An optional query string to filter deal associations. If no filter is specified, all associations will be returned. Supported queries are: - accountId=*account_id_string* - creativeId=*creative_id_string* - dealsId=*deals_id_string* - dealsStatus:{approved, conditionally_approved, disapproved, not_checked} - openAuctionStatus:{approved, conditionally_approved, disapproved, not_checked} Example: 'dealsId=12345 AND dealsStatus:disapproved'",
            in: 'query',
            name: 'query',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      accountId: z
        .string()
        .openapi({
          param: {
            description:
              'The account to list the associations from. Specify "-" to list all creatives the current user has access to.',
            in: 'path',
            name: 'accountId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      creativeId: z
        .string()
        .openapi({
          param: {
            description:
              'The creative ID to list the associations from. Specify "-" to list all creatives under the above account.',
            in: 'path',
            name: 'creativeId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListDealAssociationsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/adexchange.buyer'],
      Oauth2c: ['https://www.googleapis.com/auth/adexchange.buyer'],
    },
  ],
})

export const postV2beta1AccountsAccountIdCreativesCreativeIdDealAssociationsAddRoute = createRoute({
  method: 'post',
  path: '/v2beta1/accounts/{accountId}/creatives/{creativeId}/dealAssociations:add',
  tags: ['accounts'],
  description: 'Associate an existing deal with a creative.',
  operationId: 'adexchangebuyer2.accounts.creatives.dealAssociations.add',
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
      accountId: z
        .string()
        .openapi({
          param: {
            description: 'The account the creative belongs to.',
            in: 'path',
            name: 'accountId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      creativeId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the creative associated with the deal.',
            in: 'path',
            name: 'creativeId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: AddDealAssociationRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: EmptySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/adexchange.buyer'],
      Oauth2c: ['https://www.googleapis.com/auth/adexchange.buyer'],
    },
  ],
})

export const postV2beta1AccountsAccountIdCreativesCreativeIdDealAssociationsRemoveRoute =
  createRoute({
    method: 'post',
    path: '/v2beta1/accounts/{accountId}/creatives/{creativeId}/dealAssociations:remove',
    tags: ['accounts'],
    description: 'Remove the association between a deal and a creative.',
    operationId: 'adexchangebuyer2.accounts.creatives.dealAssociations.remove',
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
        accountId: z
          .string()
          .openapi({
            param: {
              description: 'The account the creative belongs to.',
              in: 'path',
              name: 'accountId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        creativeId: z
          .string()
          .openapi({
            param: {
              description: 'The ID of the creative associated with the deal.',
              in: 'path',
              name: 'creativeId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: { content: { 'application/json': { schema: RemoveDealAssociationRequestSchema } } },
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: EmptySchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/adexchange.buyer'],
        Oauth2c: ['https://www.googleapis.com/auth/adexchange.buyer'],
      },
    ],
  })

export const postV2beta1AccountsAccountIdCreativesCreativeIdStopWatchingRoute = createRoute({
  method: 'post',
  path: '/v2beta1/accounts/{accountId}/creatives/{creativeId}:stopWatching',
  tags: ['accounts'],
  description:
    'Stops watching a creative. Will stop push notifications being sent to the topics when the creative changes status.',
  operationId: 'adexchangebuyer2.accounts.creatives.stopWatching',
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
      accountId: z
        .string()
        .openapi({
          param: {
            description: 'The account of the creative to stop notifications for.',
            in: 'path',
            name: 'accountId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      creativeId: z
        .string()
        .openapi({
          param: {
            description:
              'The creative ID of the creative to stop notifications for. Specify "-" to specify stopping account level notifications.',
            in: 'path',
            name: 'creativeId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: StopWatchingCreativeRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: EmptySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/adexchange.buyer'],
      Oauth2c: ['https://www.googleapis.com/auth/adexchange.buyer'],
    },
  ],
})

export const postV2beta1AccountsAccountIdCreativesCreativeIdWatchRoute = createRoute({
  method: 'post',
  path: '/v2beta1/accounts/{accountId}/creatives/{creativeId}:watch',
  tags: ['accounts'],
  description:
    'Watches a creative. Will result in push notifications being sent to the topic when the creative changes status.',
  operationId: 'adexchangebuyer2.accounts.creatives.watch',
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
      accountId: z
        .string()
        .openapi({
          param: {
            description: 'The account of the creative to watch.',
            in: 'path',
            name: 'accountId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      creativeId: z
        .string()
        .openapi({
          param: {
            description:
              'The creative ID to watch for status changes. Specify "-" to watch all creatives under the above account. If both creative-level and account-level notifications are sent, only a single notification will be sent to the creative-level notification topic.',
            in: 'path',
            name: 'creativeId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: WatchCreativeRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: EmptySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/adexchange.buyer'],
      Oauth2c: ['https://www.googleapis.com/auth/adexchange.buyer'],
    },
  ],
})

export const getV2beta1AccountsAccountIdFinalizedProposalsRoute = createRoute({
  method: 'get',
  path: '/v2beta1/accounts/{accountId}/finalizedProposals',
  tags: ['accounts'],
  description:
    'List finalized proposals, regardless if a proposal is being renegotiated. A filter expression (PQL query) may be specified to filter the results. The notes will not be returned.',
  operationId: 'adexchangebuyer2.accounts.finalizedProposals.list',
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
              'An optional PQL filter query used to query for proposals. Nested repeated fields, such as proposal.deals.targetingCriterion, cannot be filtered.',
            in: 'query',
            name: 'filter',
            schema: { type: 'string' },
            required: false,
          },
        }),
      filterSyntax: z
        .enum(['FILTER_SYNTAX_UNSPECIFIED', 'PQL', 'LIST_FILTER'])
        .exactOptional()
        .openapi({
          param: {
            description:
              'Syntax the filter is written in. Current implementation defaults to PQL but in the future it will be LIST_FILTER.',
            in: 'query',
            name: 'filterSyntax',
            schema: { enum: ['FILTER_SYNTAX_UNSPECIFIED', 'PQL', 'LIST_FILTER'], type: 'string' },
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
              'Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.',
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
      accountId: z
        .string()
        .openapi({
          param: {
            description: 'Account ID of the buyer.',
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
      content: { 'application/json': { schema: ListProposalsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/adexchange.buyer'],
      Oauth2c: ['https://www.googleapis.com/auth/adexchange.buyer'],
    },
  ],
})

export const postV2beta1AccountsAccountIdFinalizedProposalsProposalIdPauseRoute = createRoute({
  method: 'post',
  path: '/v2beta1/accounts/{accountId}/finalizedProposals/{proposalId}:pause',
  tags: ['accounts'],
  description:
    'Update given deals to pause serving. This method will set the `DealServingMetadata.DealPauseStatus.has_buyer_paused` bit to true for all listed deals in the request. Currently, this method only applies to PG and PD deals. For PA deals, call accounts.proposals.pause endpoint. It is a no-op to pause already-paused deals. It is an error to call PauseProposalDeals for deals which are not part of the proposal of proposal_id or which are not finalized or renegotiating.',
  operationId: 'adexchangebuyer2.accounts.finalizedProposals.pause',
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
      accountId: z
        .string()
        .openapi({
          param: {
            description: 'Account ID of the buyer.',
            in: 'path',
            name: 'accountId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      proposalId: z
        .string()
        .openapi({
          param: {
            description: 'The proposal_id of the proposal containing the deals.',
            in: 'path',
            name: 'proposalId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: PauseProposalDealsRequestSchema } } },
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

export const postV2beta1AccountsAccountIdFinalizedProposalsProposalIdResumeRoute = createRoute({
  method: 'post',
  path: '/v2beta1/accounts/{accountId}/finalizedProposals/{proposalId}:resume',
  tags: ['accounts'],
  description:
    'Update given deals to resume serving. This method will set the `DealServingMetadata.DealPauseStatus.has_buyer_paused` bit to false for all listed deals in the request. Currently, this method only applies to PG and PD deals. For PA deals, call accounts.proposals.resume endpoint. It is a no-op to resume running deals or deals paused by the other party. It is an error to call ResumeProposalDeals for deals which are not part of the proposal of proposal_id or which are not finalized or renegotiating.',
  operationId: 'adexchangebuyer2.accounts.finalizedProposals.resume',
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
      accountId: z
        .string()
        .openapi({
          param: {
            description: 'Account ID of the buyer.',
            in: 'path',
            name: 'accountId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      proposalId: z
        .string()
        .openapi({
          param: {
            description: 'The proposal_id of the proposal containing the deals.',
            in: 'path',
            name: 'proposalId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ResumeProposalDealsRequestSchema } } },
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

export const getV2beta1AccountsAccountIdProductsRoute = createRoute({
  method: 'get',
  path: '/v2beta1/accounts/{accountId}/products',
  tags: ['accounts'],
  description:
    'List all products visible to the buyer (optionally filtered by the specified PQL query).',
  operationId: 'adexchangebuyer2.accounts.products.list',
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
              'An optional PQL query used to query for products. See https://developers.google.com/ad-manager/docs/pqlreference for documentation about PQL and examples. Nested repeated fields, such as product.targetingCriterion.inclusions, cannot be filtered.',
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
              'Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.',
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
            description: 'The page token as returned from ListProductsResponse.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      accountId: z
        .string()
        .openapi({
          param: {
            description: 'Account ID of the buyer.',
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
      content: { 'application/json': { schema: ListProductsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/adexchange.buyer'],
      Oauth2c: ['https://www.googleapis.com/auth/adexchange.buyer'],
    },
  ],
})

export const getV2beta1AccountsAccountIdProductsProductIdRoute = createRoute({
  method: 'get',
  path: '/v2beta1/accounts/{accountId}/products/{productId}',
  tags: ['accounts'],
  description: 'Gets the requested product by ID.',
  operationId: 'adexchangebuyer2.accounts.products.get',
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
      accountId: z
        .string()
        .openapi({
          param: {
            description: 'Account ID of the buyer.',
            in: 'path',
            name: 'accountId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      productId: z
        .string()
        .openapi({
          param: {
            description: 'The ID for the product to get the head revision for.',
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

export const getV2beta1AccountsAccountIdProposalsRoute = createRoute({
  method: 'get',
  path: '/v2beta1/accounts/{accountId}/proposals',
  tags: ['accounts'],
  description:
    "List proposals. A filter expression (PQL query) may be specified to filter the results. To retrieve all finalized proposals, regardless if a proposal is being renegotiated, see the FinalizedProposals resource. Note that Bidder/ChildSeat relationships differ from the usual behavior. A Bidder account can only see its child seats' proposals by specifying the ChildSeat's accountId in the request path.",
  operationId: 'adexchangebuyer2.accounts.proposals.list',
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
              'An optional PQL filter query used to query for proposals. Nested repeated fields, such as proposal.deals.targetingCriterion, cannot be filtered.',
            in: 'query',
            name: 'filter',
            schema: { type: 'string' },
            required: false,
          },
        }),
      filterSyntax: z
        .enum(['FILTER_SYNTAX_UNSPECIFIED', 'PQL', 'LIST_FILTER'])
        .exactOptional()
        .openapi({
          param: {
            description:
              'Syntax the filter is written in. Current implementation defaults to PQL but in the future it will be LIST_FILTER.',
            in: 'query',
            name: 'filterSyntax',
            schema: { enum: ['FILTER_SYNTAX_UNSPECIFIED', 'PQL', 'LIST_FILTER'], type: 'string' },
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
              'Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.',
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
      accountId: z
        .string()
        .openapi({
          param: {
            description: 'Account ID of the buyer.',
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
      content: { 'application/json': { schema: ListProposalsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/adexchange.buyer'],
      Oauth2c: ['https://www.googleapis.com/auth/adexchange.buyer'],
    },
  ],
})

export const postV2beta1AccountsAccountIdProposalsRoute = createRoute({
  method: 'post',
  path: '/v2beta1/accounts/{accountId}/proposals',
  tags: ['accounts'],
  description:
    'Create the given proposal. Each created proposal and any deals it contains are assigned a unique ID by the server.',
  operationId: 'adexchangebuyer2.accounts.proposals.create',
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
      accountId: z
        .string()
        .openapi({
          param: {
            description: 'Account ID of the buyer.',
            in: 'path',
            name: 'accountId',
            required: true,
            schema: { type: 'string' },
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

export const getV2beta1AccountsAccountIdProposalsProposalIdRoute = createRoute({
  method: 'get',
  path: '/v2beta1/accounts/{accountId}/proposals/{proposalId}',
  tags: ['accounts'],
  description: 'Gets a proposal given its ID. The proposal is returned at its head revision.',
  operationId: 'adexchangebuyer2.accounts.proposals.get',
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
      accountId: z
        .string()
        .openapi({
          param: {
            description: 'Account ID of the buyer.',
            in: 'path',
            name: 'accountId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      proposalId: z
        .string()
        .openapi({
          param: {
            description: 'The unique ID of the proposal',
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

export const putV2beta1AccountsAccountIdProposalsProposalIdRoute = createRoute({
  method: 'put',
  path: '/v2beta1/accounts/{accountId}/proposals/{proposalId}',
  tags: ['accounts'],
  description:
    'Update the given proposal at the client known revision number. If the server revision has advanced since the passed-in `proposal.proposal_revision`, an `ABORTED` error message will be returned. Only the buyer-modifiable fields of the proposal will be updated. Note that the deals in the proposal will be updated to match the passed-in copy. If a passed-in deal does not have a `deal_id`, the server will assign a new unique ID and create the deal. If passed-in deal has a `deal_id`, it will be updated to match the passed-in copy. Any existing deals not present in the passed-in proposal will be deleted. It is an error to pass in a deal with a `deal_id` not present at head.',
  operationId: 'adexchangebuyer2.accounts.proposals.update',
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
      accountId: z
        .string()
        .openapi({
          param: {
            description: 'Account ID of the buyer.',
            in: 'path',
            name: 'accountId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      proposalId: z
        .string()
        .openapi({
          param: {
            description: 'The unique ID of the proposal.',
            in: 'path',
            name: 'proposalId',
            required: true,
            schema: { type: 'string' },
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

export const postV2beta1AccountsAccountIdProposalsProposalIdAcceptRoute = createRoute({
  method: 'post',
  path: '/v2beta1/accounts/{accountId}/proposals/{proposalId}:accept',
  tags: ['accounts'],
  description:
    "Mark the proposal as accepted at the given revision number. If the number does not match the server's revision number an `ABORTED` error message will be returned. This call updates the proposal_state from `PROPOSED` to `BUYER_ACCEPTED`, or from `SELLER_ACCEPTED` to `FINALIZED`. Upon calling this endpoint, the buyer implicitly agrees to the terms and conditions optionally set within the proposal by the publisher.",
  operationId: 'adexchangebuyer2.accounts.proposals.accept',
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
      accountId: z
        .string()
        .openapi({
          param: {
            description: 'Account ID of the buyer.',
            in: 'path',
            name: 'accountId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      proposalId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the proposal to accept.',
            in: 'path',
            name: 'proposalId',
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
      Oauth2: ['https://www.googleapis.com/auth/adexchange.buyer'],
      Oauth2c: ['https://www.googleapis.com/auth/adexchange.buyer'],
    },
  ],
})

export const postV2beta1AccountsAccountIdProposalsProposalIdAddNoteRoute = createRoute({
  method: 'post',
  path: '/v2beta1/accounts/{accountId}/proposals/{proposalId}:addNote',
  tags: ['accounts'],
  description:
    'Create a new note and attach it to the proposal. The note is assigned a unique ID by the server. The proposal revision number will not increase when associated with a new note.',
  operationId: 'adexchangebuyer2.accounts.proposals.addNote',
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
      accountId: z
        .string()
        .openapi({
          param: {
            description: 'Account ID of the buyer.',
            in: 'path',
            name: 'accountId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      proposalId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the proposal to attach the note to.',
            in: 'path',
            name: 'proposalId',
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
      content: { 'application/json': { schema: NoteSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/adexchange.buyer'],
      Oauth2c: ['https://www.googleapis.com/auth/adexchange.buyer'],
    },
  ],
})

export const postV2beta1AccountsAccountIdProposalsProposalIdCancelNegotiationRoute = createRoute({
  method: 'post',
  path: '/v2beta1/accounts/{accountId}/proposals/{proposalId}:cancelNegotiation',
  tags: ['accounts'],
  description:
    'Cancel an ongoing negotiation on a proposal. This does not cancel or end serving for the deals if the proposal has been finalized, but only cancels a negotiation unilaterally.',
  operationId: 'adexchangebuyer2.accounts.proposals.cancelNegotiation',
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
      accountId: z
        .string()
        .openapi({
          param: {
            description: 'Account ID of the buyer.',
            in: 'path',
            name: 'accountId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      proposalId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the proposal to cancel negotiation for.',
            in: 'path',
            name: 'proposalId',
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
      Oauth2: ['https://www.googleapis.com/auth/adexchange.buyer'],
      Oauth2c: ['https://www.googleapis.com/auth/adexchange.buyer'],
    },
  ],
})

export const postV2beta1AccountsAccountIdProposalsProposalIdCompleteSetupRoute = createRoute({
  method: 'post',
  path: '/v2beta1/accounts/{accountId}/proposals/{proposalId}:completeSetup',
  tags: ['accounts'],
  description:
    'You can opt-in to manually update proposals to indicate that setup is complete. By default, proposal setup is automatically completed after their deals are finalized. Contact your Technical Account Manager to opt in. Buyers can call this method when the proposal has been finalized, and all the required creatives have been uploaded using the Creatives API. This call updates the `is_setup_completed` field on the deals in the proposal, and notifies the seller. The server then advances the revision number of the most recent proposal. To mark an individual deal as ready to serve, call `buyers.finalizedDeals.setReadyToServe` in the Marketplace API.',
  operationId: 'adexchangebuyer2.accounts.proposals.completeSetup',
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
      accountId: z
        .string()
        .openapi({
          param: {
            description: 'Account ID of the buyer.',
            in: 'path',
            name: 'accountId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      proposalId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the proposal to mark as setup completed.',
            in: 'path',
            name: 'proposalId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CompleteSetupRequestSchema } } },
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

export const postV2beta1AccountsAccountIdProposalsProposalIdPauseRoute = createRoute({
  method: 'post',
  path: '/v2beta1/accounts/{accountId}/proposals/{proposalId}:pause',
  tags: ['accounts'],
  description:
    'Update the given proposal to pause serving. This method will set the `DealServingMetadata.DealPauseStatus.has_buyer_paused` bit to true for all deals in the proposal. It is a no-op to pause an already-paused proposal. It is an error to call PauseProposal for a proposal that is not finalized or renegotiating.',
  operationId: 'adexchangebuyer2.accounts.proposals.pause',
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
      accountId: z
        .string()
        .openapi({
          param: {
            description: 'Account ID of the buyer.',
            in: 'path',
            name: 'accountId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      proposalId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the proposal to pause.',
            in: 'path',
            name: 'proposalId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: PauseProposalRequestSchema } } },
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

export const postV2beta1AccountsAccountIdProposalsProposalIdResumeRoute = createRoute({
  method: 'post',
  path: '/v2beta1/accounts/{accountId}/proposals/{proposalId}:resume',
  tags: ['accounts'],
  description:
    'Update the given proposal to resume serving. This method will set the `DealServingMetadata.DealPauseStatus.has_buyer_paused` bit to false for all deals in the proposal. Note that if the `has_seller_paused` bit is also set, serving will not resume until the seller also resumes. It is a no-op to resume an already-running proposal. It is an error to call ResumeProposal for a proposal that is not finalized or renegotiating.',
  operationId: 'adexchangebuyer2.accounts.proposals.resume',
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
      accountId: z
        .string()
        .openapi({
          param: {
            description: 'Account ID of the buyer.',
            in: 'path',
            name: 'accountId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      proposalId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the proposal to resume.',
            in: 'path',
            name: 'proposalId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ResumeProposalRequestSchema } } },
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

export const getV2beta1AccountsAccountIdPublisherProfilesRoute = createRoute({
  method: 'get',
  path: '/v2beta1/accounts/{accountId}/publisherProfiles',
  tags: ['accounts'],
  description: 'List all publisher profiles visible to the buyer',
  operationId: 'adexchangebuyer2.accounts.publisherProfiles.list',
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
            description: 'Specify the number of results to include per page.',
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
            description: 'The page token as return from ListPublisherProfilesResponse.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      accountId: z
        .string()
        .openapi({
          param: {
            description: 'Account ID of the buyer.',
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
      content: { 'application/json': { schema: ListPublisherProfilesResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/adexchange.buyer'],
      Oauth2c: ['https://www.googleapis.com/auth/adexchange.buyer'],
    },
  ],
})

export const getV2beta1AccountsAccountIdPublisherProfilesPublisherProfileIdRoute = createRoute({
  method: 'get',
  path: '/v2beta1/accounts/{accountId}/publisherProfiles/{publisherProfileId}',
  tags: ['accounts'],
  description: 'Gets the requested publisher profile by id.',
  operationId: 'adexchangebuyer2.accounts.publisherProfiles.get',
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
      accountId: z
        .string()
        .openapi({
          param: {
            description: 'Account ID of the buyer.',
            in: 'path',
            name: 'accountId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      publisherProfileId: z
        .string()
        .openapi({
          param: {
            description: 'The id for the publisher profile to get.',
            in: 'path',
            name: 'publisherProfileId',
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
      Oauth2: ['https://www.googleapis.com/auth/adexchange.buyer'],
      Oauth2c: ['https://www.googleapis.com/auth/adexchange.buyer'],
    },
  ],
})

export const getV2beta1FilterSetNameBidMetricsRoute = createRoute({
  method: 'get',
  path: '/v2beta1/{filterSetName}/bidMetrics',
  tags: ['bidders'],
  description: 'Lists all metrics that are measured in terms of number of bids.',
  operationId: 'adexchangebuyer2.bidders.filterSets.bidMetrics.list',
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
              'Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.',
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
              'A token identifying a page of results the server should return. Typically, this is the value of ListBidMetricsResponse.nextPageToken returned from the previous call to the bidMetrics.list method.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      filterSetName: z
        .string()
        .openapi({
          param: {
            description:
              'Name of the filter set that should be applied to the requested metrics. For example: - For a bidder-level filter set for bidder 123: `bidders/123/filterSets/abc` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123/filterSets/abc` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`',
            in: 'path',
            name: 'filterSetName',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListBidMetricsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/adexchange.buyer'],
      Oauth2c: ['https://www.googleapis.com/auth/adexchange.buyer'],
    },
  ],
})

export const getV2beta1FilterSetNameBidResponseErrorsRoute = createRoute({
  method: 'get',
  path: '/v2beta1/{filterSetName}/bidResponseErrors',
  tags: ['bidders'],
  description:
    'List all errors that occurred in bid responses, with the number of bid responses affected for each reason.',
  operationId: 'adexchangebuyer2.bidders.filterSets.bidResponseErrors.list',
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
              'Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.',
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
              'A token identifying a page of results the server should return. Typically, this is the value of ListBidResponseErrorsResponse.nextPageToken returned from the previous call to the bidResponseErrors.list method.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      filterSetName: z
        .string()
        .openapi({
          param: {
            description:
              'Name of the filter set that should be applied to the requested metrics. For example: - For a bidder-level filter set for bidder 123: `bidders/123/filterSets/abc` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123/filterSets/abc` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`',
            in: 'path',
            name: 'filterSetName',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListBidResponseErrorsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/adexchange.buyer'],
      Oauth2c: ['https://www.googleapis.com/auth/adexchange.buyer'],
    },
  ],
})

export const getV2beta1FilterSetNameBidResponsesWithoutBidsRoute = createRoute({
  method: 'get',
  path: '/v2beta1/{filterSetName}/bidResponsesWithoutBids',
  tags: ['bidders'],
  description:
    'List all reasons for which bid responses were considered to have no applicable bids, with the number of bid responses affected for each reason.',
  operationId: 'adexchangebuyer2.bidders.filterSets.bidResponsesWithoutBids.list',
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
              'Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.',
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
              'A token identifying a page of results the server should return. Typically, this is the value of ListBidResponsesWithoutBidsResponse.nextPageToken returned from the previous call to the bidResponsesWithoutBids.list method.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      filterSetName: z
        .string()
        .openapi({
          param: {
            description:
              'Name of the filter set that should be applied to the requested metrics. For example: - For a bidder-level filter set for bidder 123: `bidders/123/filterSets/abc` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123/filterSets/abc` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`',
            in: 'path',
            name: 'filterSetName',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListBidResponsesWithoutBidsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/adexchange.buyer'],
      Oauth2c: ['https://www.googleapis.com/auth/adexchange.buyer'],
    },
  ],
})

export const getV2beta1FilterSetNameFilteredBidRequestsRoute = createRoute({
  method: 'get',
  path: '/v2beta1/{filterSetName}/filteredBidRequests',
  tags: ['bidders'],
  description:
    'List all reasons that caused a bid request not to be sent for an impression, with the number of bid requests not sent for each reason.',
  operationId: 'adexchangebuyer2.bidders.filterSets.filteredBidRequests.list',
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
              'Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.',
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
              'A token identifying a page of results the server should return. Typically, this is the value of ListFilteredBidRequestsResponse.nextPageToken returned from the previous call to the filteredBidRequests.list method.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      filterSetName: z
        .string()
        .openapi({
          param: {
            description:
              'Name of the filter set that should be applied to the requested metrics. For example: - For a bidder-level filter set for bidder 123: `bidders/123/filterSets/abc` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123/filterSets/abc` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`',
            in: 'path',
            name: 'filterSetName',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListFilteredBidRequestsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/adexchange.buyer'],
      Oauth2c: ['https://www.googleapis.com/auth/adexchange.buyer'],
    },
  ],
})

export const getV2beta1FilterSetNameFilteredBidsRoute = createRoute({
  method: 'get',
  path: '/v2beta1/{filterSetName}/filteredBids',
  tags: ['bidders'],
  description:
    'List all reasons for which bids were filtered, with the number of bids filtered for each reason.',
  operationId: 'adexchangebuyer2.bidders.filterSets.filteredBids.list',
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
              'Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.',
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
              'A token identifying a page of results the server should return. Typically, this is the value of ListFilteredBidsResponse.nextPageToken returned from the previous call to the filteredBids.list method.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      filterSetName: z
        .string()
        .openapi({
          param: {
            description:
              'Name of the filter set that should be applied to the requested metrics. For example: - For a bidder-level filter set for bidder 123: `bidders/123/filterSets/abc` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123/filterSets/abc` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`',
            in: 'path',
            name: 'filterSetName',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListFilteredBidsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/adexchange.buyer'],
      Oauth2c: ['https://www.googleapis.com/auth/adexchange.buyer'],
    },
  ],
})

export const getV2beta1FilterSetNameFilteredBidsCreativeStatusIdCreativesRoute = createRoute({
  method: 'get',
  path: '/v2beta1/{filterSetName}/filteredBids/{creativeStatusId}/creatives',
  tags: ['bidders'],
  description:
    'List all creatives associated with a specific reason for which bids were filtered, with the number of bids filtered for each creative.',
  operationId: 'adexchangebuyer2.bidders.filterSets.filteredBids.creatives.list',
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
              'Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.',
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
              'A token identifying a page of results the server should return. Typically, this is the value of ListCreativeStatusBreakdownByCreativeResponse.nextPageToken returned from the previous call to the filteredBids.creatives.list method.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      filterSetName: z
        .string()
        .openapi({
          param: {
            description:
              'Name of the filter set that should be applied to the requested metrics. For example: - For a bidder-level filter set for bidder 123: `bidders/123/filterSets/abc` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123/filterSets/abc` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`',
            in: 'path',
            name: 'filterSetName',
            required: true,
            schema: { type: 'string' },
          },
        }),
      creativeStatusId: z
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
            description:
              'The ID of the creative status for which to retrieve a breakdown by creative. See [creative-status-codes](https://developers.google.com/authorized-buyers/rtb/downloads/creative-status-codes).',
            in: 'path',
            name: 'creativeStatusId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': { schema: ListCreativeStatusBreakdownByCreativeResponseSchema },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/adexchange.buyer'],
      Oauth2c: ['https://www.googleapis.com/auth/adexchange.buyer'],
    },
  ],
})

export const getV2beta1FilterSetNameFilteredBidsCreativeStatusIdDetailsRoute = createRoute({
  method: 'get',
  path: '/v2beta1/{filterSetName}/filteredBids/{creativeStatusId}/details',
  tags: ['bidders'],
  description:
    'List all details associated with a specific reason for which bids were filtered, with the number of bids filtered for each detail.',
  operationId: 'adexchangebuyer2.bidders.filterSets.filteredBids.details.list',
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
              'Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.',
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
              'A token identifying a page of results the server should return. Typically, this is the value of ListCreativeStatusBreakdownByDetailResponse.nextPageToken returned from the previous call to the filteredBids.details.list method.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      filterSetName: z
        .string()
        .openapi({
          param: {
            description:
              'Name of the filter set that should be applied to the requested metrics. For example: - For a bidder-level filter set for bidder 123: `bidders/123/filterSets/abc` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123/filterSets/abc` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`',
            in: 'path',
            name: 'filterSetName',
            required: true,
            schema: { type: 'string' },
          },
        }),
      creativeStatusId: z
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
            description:
              'The ID of the creative status for which to retrieve a breakdown by detail. See [creative-status-codes](https://developers.google.com/authorized-buyers/rtb/downloads/creative-status-codes). Details are only available for statuses 10, 14, 15, 17, 18, 19, 86, and 87.',
            in: 'path',
            name: 'creativeStatusId',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': { schema: ListCreativeStatusBreakdownByDetailResponseSchema },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/adexchange.buyer'],
      Oauth2c: ['https://www.googleapis.com/auth/adexchange.buyer'],
    },
  ],
})

export const getV2beta1FilterSetNameImpressionMetricsRoute = createRoute({
  method: 'get',
  path: '/v2beta1/{filterSetName}/impressionMetrics',
  tags: ['bidders'],
  description: 'Lists all metrics that are measured in terms of number of impressions.',
  operationId: 'adexchangebuyer2.bidders.filterSets.impressionMetrics.list',
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
              'Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.',
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
              'A token identifying a page of results the server should return. Typically, this is the value of ListImpressionMetricsResponse.nextPageToken returned from the previous call to the impressionMetrics.list method.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      filterSetName: z
        .string()
        .openapi({
          param: {
            description:
              'Name of the filter set that should be applied to the requested metrics. For example: - For a bidder-level filter set for bidder 123: `bidders/123/filterSets/abc` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123/filterSets/abc` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`',
            in: 'path',
            name: 'filterSetName',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListImpressionMetricsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/adexchange.buyer'],
      Oauth2c: ['https://www.googleapis.com/auth/adexchange.buyer'],
    },
  ],
})

export const getV2beta1FilterSetNameLosingBidsRoute = createRoute({
  method: 'get',
  path: '/v2beta1/{filterSetName}/losingBids',
  tags: ['bidders'],
  description:
    'List all reasons for which bids lost in the auction, with the number of bids that lost for each reason.',
  operationId: 'adexchangebuyer2.bidders.filterSets.losingBids.list',
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
              'Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.',
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
              'A token identifying a page of results the server should return. Typically, this is the value of ListLosingBidsResponse.nextPageToken returned from the previous call to the losingBids.list method.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      filterSetName: z
        .string()
        .openapi({
          param: {
            description:
              'Name of the filter set that should be applied to the requested metrics. For example: - For a bidder-level filter set for bidder 123: `bidders/123/filterSets/abc` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123/filterSets/abc` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`',
            in: 'path',
            name: 'filterSetName',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListLosingBidsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/adexchange.buyer'],
      Oauth2c: ['https://www.googleapis.com/auth/adexchange.buyer'],
    },
  ],
})

export const getV2beta1FilterSetNameNonBillableWinningBidsRoute = createRoute({
  method: 'get',
  path: '/v2beta1/{filterSetName}/nonBillableWinningBids',
  tags: ['bidders'],
  description:
    'List all reasons for which winning bids were not billable, with the number of bids not billed for each reason.',
  operationId: 'adexchangebuyer2.bidders.filterSets.nonBillableWinningBids.list',
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
              'Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.',
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
              'A token identifying a page of results the server should return. Typically, this is the value of ListNonBillableWinningBidsResponse.nextPageToken returned from the previous call to the nonBillableWinningBids.list method.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      filterSetName: z
        .string()
        .openapi({
          param: {
            description:
              'Name of the filter set that should be applied to the requested metrics. For example: - For a bidder-level filter set for bidder 123: `bidders/123/filterSets/abc` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123/filterSets/abc` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`',
            in: 'path',
            name: 'filterSetName',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListNonBillableWinningBidsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/adexchange.buyer'],
      Oauth2c: ['https://www.googleapis.com/auth/adexchange.buyer'],
    },
  ],
})

export const getV2beta1NameRoute = createRoute({
  method: 'get',
  path: '/v2beta1/{name}',
  tags: ['bidders'],
  description: 'Retrieves the requested filter set for the account with the given account ID.',
  operationId: 'adexchangebuyer2.bidders.filterSets.get',
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
              'Full name of the resource being requested. For example: - For a bidder-level filter set for bidder 123: `bidders/123/filterSets/abc` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123/filterSets/abc` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`',
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
      content: { 'application/json': { schema: FilterSetSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/adexchange.buyer'],
      Oauth2c: ['https://www.googleapis.com/auth/adexchange.buyer'],
    },
  ],
})

export const deleteV2beta1NameRoute = createRoute({
  method: 'delete',
  path: '/v2beta1/{name}',
  tags: ['bidders'],
  description: 'Deletes the requested filter set from the account with the given account ID.',
  operationId: 'adexchangebuyer2.bidders.filterSets.delete',
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
              'Full name of the resource to delete. For example: - For a bidder-level filter set for bidder 123: `bidders/123/filterSets/abc` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123/filterSets/abc` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`',
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
      Oauth2: ['https://www.googleapis.com/auth/adexchange.buyer'],
      Oauth2c: ['https://www.googleapis.com/auth/adexchange.buyer'],
    },
  ],
})

export const getV2beta1OwnerNameFilterSetsRoute = createRoute({
  method: 'get',
  path: '/v2beta1/{ownerName}/filterSets',
  tags: ['bidders'],
  description: 'Lists all filter sets for the account with the given account ID.',
  operationId: 'adexchangebuyer2.bidders.filterSets.list',
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
              'Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.',
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
              'A token identifying a page of results the server should return. Typically, this is the value of ListFilterSetsResponse.nextPageToken returned from the previous call to the accounts.filterSets.list method.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      ownerName: z
        .string()
        .openapi({
          param: {
            description:
              'Name of the owner (bidder or account) of the filter sets to be listed. For example: - For a bidder-level filter set for bidder 123: `bidders/123` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456`',
            in: 'path',
            name: 'ownerName',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListFilterSetsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/adexchange.buyer'],
      Oauth2c: ['https://www.googleapis.com/auth/adexchange.buyer'],
    },
  ],
})

export const postV2beta1OwnerNameFilterSetsRoute = createRoute({
  method: 'post',
  path: '/v2beta1/{ownerName}/filterSets',
  tags: ['bidders'],
  description: 'Creates the specified filter set for the account with the given account ID.',
  operationId: 'adexchangebuyer2.bidders.filterSets.create',
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
      isTransient: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Whether the filter set is transient, or should be persisted indefinitely. By default, filter sets are not transient. If transient, it will be available for at least 1 hour after creation.',
            in: 'query',
            name: 'isTransient',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
    params: z.object({
      ownerName: z
        .string()
        .openapi({
          param: {
            description:
              'Name of the owner (bidder or account) of the filter set to be created. For example: - For a bidder-level filter set for bidder 123: `bidders/123` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456`',
            in: 'path',
            name: 'ownerName',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: FilterSetSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: FilterSetSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/adexchange.buyer'],
      Oauth2c: ['https://www.googleapis.com/auth/adexchange.buyer'],
    },
  ],
})
