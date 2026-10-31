import { createRoute, z } from '@hono/zod-openapi'

const HotelListSchema = z
  .object({
    partnerHotelIds: z.array(z.string()).exactOptional().openapi({ description: 'Hotel IDs.' }),
  })
  .openapi({
    description:
      'The properties in the Hotel Center account that can be managed with the Google Ads account.',
    required: [],
  })
  .openapi('HotelList')

const AccountLinkTargetSchema = z
  .object({
    allHotels: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'True if all properties under the Hotel Center account are made available to the account link. The default is `false`.',
      }),
    hotelList: HotelListSchema.exactOptional().openapi({
      description: 'List of properties that is made available to the account link.',
    }),
  })
  .openapi({
    description:
      'Defines whether all properties or a subset of properties in the Hotel Center account can be managed with the linked Google Ads account. If a subset, the specific properties are specified.',
    required: [],
  })
  .openapi('AccountLinkTarget')

const AccountLinkSchema = z
  .object({
    accountLinkTarget: AccountLinkTargetSchema.exactOptional().openapi({
      description:
        'Required for CREATE requests. The properties in the Hotel Center account that can be managed using the linked Google Ads account.',
    }),
    googleAdsCustomerName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required for CREATE requests. The value representing the Google Ads customer ID in the format `customers/{google_ads_customer_id}`. For example: `customers/0123456789`. Note that the `googleAdsCustomerName` field is not returned in responses to GET requests.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The resource name for the account link in the format `accounts/{account_id}/accountLinks/{account_link_id}`.',
      }),
    status: z
      .enum([
        'ACCOUNT_LINK_STATUS_UNSPECIFIED',
        'ACCOUNT_LINK_STATUS_UNKNOWN',
        'REQUESTED_FROM_HOTEL_CENTER',
        'REQUESTED_FROM_GOOGLE_ADS',
        'APPROVED',
      ])
      .exactOptional()
      .openapi({ description: 'The current status of the account link.' }),
  })
  .openapi({
    description:
      'An account link. Represents the link between a Google Ads customer and a Hotel Ads (Hotel Center) account. An account link defines the set of hotels under the Hotel Center account that is linked to the Google Ads customer.',
    required: [],
  })
  .openapi('AccountLink')

const LocalizedTextSchema = z
  .object({
    languageCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The text\'s BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier.',
      }),
    text: z
      .string()
      .exactOptional()
      .openapi({
        description: "Localized string in the language corresponding to `language_code' below.",
      }),
  })
  .openapi({ description: 'Localized variant of a text in a particular language.', required: [] })
  .openapi('LocalizedText')

const DisplayNameDisapprovalReasonSchema = z
  .object({
    disapprovalReason: z
      .enum([
        'DISAPPROVAL_REASON_UNSPECIFIED',
        'PUNCTUATION',
        'MARKETING_LANGUAGE',
        'LANDING_PAGE_NOT_MATCHED',
      ])
      .exactOptional()
      .openapi({ description: 'Disapproval reason.' }),
    languageCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'Language of the disapproved display name.' }),
  })
  .openapi({
    description: 'Disapproval reason of the display name in a specific language.',
    required: [],
  })
  .openapi('DisplayNameDisapprovalReason')

const BrandSchema = z
  .object({
    activeDisplayNames: z
      .array(LocalizedTextSchema)
      .exactOptional()
      .openapi({
        description:
          "Output only. The brand's active display names in all provided languages, only present if the display name is approved for all provided languages.",
        readOnly: true,
      }),
    activeIcon: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Output only. The brand's active [accounts.icon](/hotels/hotel-prices/api-reference/rest/v3/accounts.icons#resource:-iconresource). The value refers to the icons's resource name in the format `accounts/{account_id}/icons/{icon_id}`. An active icon is one that has been approved.",
        readOnly: true,
      }),
    activeIconUri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. URL of the active icon, only present when the icon has been approved.',
        readOnly: true,
      }),
    displayNameDisapprovalReason: z
      .array(DisplayNameDisapprovalReasonSchema)
      .exactOptional()
      .openapi({
        description:
          "Output only. Display name's disapproval reason. Only applies to display names with the review state 'REJECTED'.",
        readOnly: true,
      }),
    displayNameState: z
      .enum(['REVIEW_STATE_UNSPECIFIED', 'REVIEW_STATE_NEW', 'APPROVED', 'REJECTED'])
      .exactOptional()
      .openapi({
        description:
          "Output only. The brand's display names review state, which applies to all display name language entries. If there are both submitted and active display names, this refers to the submitted display names.",
        readOnly: true,
      }),
    displayNames: z
      .array(LocalizedTextSchema)
      .exactOptional()
      .openapi({
        description:
          "Input only. The name Google displays for the brand's properties. Setting the display names is only necessary if you want to override the landing page display name or account-level display name for the brand. Google reviews the display names for appropriate content. When there are multiple languages, Google will only show the display names once Google approves all the languages.",
      }),
    icon: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Input only. The brand's [accounts.icon](/hotels/hotel-prices/api-reference/rest/v3/accounts.icons#resource:-iconresource) identifying the brand's icon. The value refers to the icons's resource name in the format `accounts/{account_id}/icons/{icon_id}`.",
      }),
    iconDisapprovalReasons: z
      .array(
        z.enum([
          'IMAGE_DISAPPROVAL_REASON_UNSPECIFIED',
          'NOT_LIKE_SITE',
          'OFFENSIVE',
          'LOW_QUALITY',
          'ANIMATED',
          'BAD_BACKGROUND',
          'TEXT_TOO_SMALL',
        ]),
      )
      .exactOptional()
      .openapi({
        description:
          "Output only. The icon's disapproval reason(s). Only applies to submitted icons with `REJECTED` state.",
        readOnly: true,
      }),
    iconState: z
      .enum(['REVIEW_STATE_UNSPECIFIED', 'REVIEW_STATE_NEW', 'APPROVED', 'REJECTED'])
      .exactOptional()
      .openapi({
        description:
          "Output only. The brand's icon's review state. If there are both submitted and active icons, this refers to the submitted icon.",
        readOnly: true,
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Output only. The resource name for the brand in the format `accounts/{account_id}/brands/{brand_id}`. The `brand_id` corresponds to the partner's brand identifier used for landing page matching and the property-level brand identifier. A default brand is applied to properties that do not have a brand. The `brand_id` of the default brand is `NO_BRAND_ID`. It can be fetched and updated like any configured brand.",
        readOnly: true,
      }),
    propertyCount: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The number of properties with the corresponding brand ID.',
        readOnly: true,
      }),
    submittedDisplayNames: z
      .array(LocalizedTextSchema)
      .exactOptional()
      .openapi({
        description:
          "Output only. The brand's submitted display names in all provided languages, only present if the display name is new or rejected for any language.",
        readOnly: true,
      }),
    submittedIcon: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Output only. The brand's submitted [accounts.icon](/hotels/hotel-prices/api-reference/rest/v3/accounts.icons#resource:-iconresource). The value refers to the icons's resource name in the format `accounts/{account_id}/icons/{icon_id}`. A submitted icon is one that is new or rejected.",
        readOnly: true,
      }),
  })
  .openapi({
    description:
      'Brand-level icon and display name configuration. Once approved, the icon and display name appear in the search results for properties that the partner has assigned to this brand.',
    required: [],
  })
  .openapi('Brand')

const ReconciliationReportValidationIssueSchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Text description of the issue, typically including what was seen and why it was invalid.',
      }),
    fieldName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Name of the invalid field. If no field name is given, this issue applies to the whole line (or file).',
      }),
    lineNum: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The line number on which the issue was detected. If this field is 0, the issue applies to the whole file.',
      }),
  })
  .openapi({
    description: 'Represents an issue encountered when validating a reconciliation report.',
    required: [],
  })
  .openapi('ReconciliationReportValidationIssue')

const ReconciliationReportSchema = z
  .object({
    contents: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The contents of the commission report. Report contents must conform to the requirements specified in [Reconciliation reports] (//support.google.com/hotelprices/answer/7019060#creating).',
      }),
    fileName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. Desired filename of the reconciliation report.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Resource name in the format `accounts/{account_id}/reconciliationReports/{datetime}~{filename}`. The value for `{datetime}` must be from 0001-01-01T00:00:00 to 9999-12-31T23:59:59 inclusive.',
      }),
  })
  .openapi({
    description:
      'Reconciliation report (Hotel Ads only). Covers the Reconciliation Reports functionality in pre-v3.0 API versions. Lets you see the status, validate, and upload your Commissions reconciliation reports. This only applies if you are in the Google Hotel Ads Commissions Program (GHACP). For more information about working with reconciliation reports in Hotel Center, refer to [Reconciliation reports](//support.google.com/hotelprices/answer/7019060#sending).',
    required: [],
  })
  .openapi('ReconciliationReport')

const CreateReconciliationReportResponseSchema = z
  .object({
    issues: z
      .array(ReconciliationReportValidationIssueSchema)
      .exactOptional()
      .openapi({ description: 'Issues that were encountered when validating the file.' }),
    reconciliationReport: ReconciliationReportSchema.exactOptional().openapi({
      description:
        'Resource name of the new reconciliation report. The format is `accounts/{account_id}`.',
    }),
    successfulRecordCount: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The number of commission records that were successfully saved.' }),
  })
  .openapi({
    description: 'Response message for ReconciliationReportService.CreateReconciliationReport.',
    required: [],
  })
  .openapi('CreateReconciliationReportResponse')

const DataIssueDetailSchema = z
  .object({
    dataIssueSeverity: z
      .enum(['DATA_ISSUE_SEVERITY_UNSPECIFIED', 'ERROR', 'WARNING', 'INFO'])
      .exactOptional()
      .openapi({ description: 'The severity of the data issue.' }),
    dataIssueType: z
      .enum([
        'FEED_DATA_ISSUE_UNSPECIFIED',
        'FEED_DATA_ISSUE_UNKNOWN',
        'NO_DATA_ISSUE',
        'DUPLICATE_ADDRESS',
        'MISSING_PHYSICAL_STREET_ADDRESS',
        'MISSING_STREET_NAME',
        'MISSING_STREET_NUMBER',
        'MISSING_ADDRESS',
        'MISSING_COUNTRY',
        'INVALID_POSTAL_CODE',
        'INVALID_POSTAL_CODE_SUFFIX',
        'UNEXPECTED_POSTAL_CODE_SUFFIX',
        'UNEXPECTED_POSTAL_CODE',
        'INVALID_AMENITIES',
        'INVALID_EMAIL_ADDRESS',
        'DUPLICATE_LATLONG',
        'LATLONG_INCONSISTENT_WITH_ADDRESS',
        'MISSING_LATLONG',
        'COULD_NOT_GEOCODE',
        'MISSING_HOTEL_NAME',
        'HOTEL_NAME_EMPTY',
        'INVALID_HOTEL_NAME',
        'HOTEL_NAME_TOO_LONG',
        'PARSE_ERROR_IN_XML',
        'UNEXPECTED_ATTRIBUTE_IN_XML',
        'DUPLICATE_PHONE_NUMBER',
        'MISSING_PHONE_NUMBER',
        'MISSING_VOICE_PHONE_NUMBER',
        'INVALID_PHONE_NUMBER_FORMAT',
        'INVALID_PHONE_NUMBER',
        'INVALID_PHONE_NUMBER_COUNTRY_CODE',
        'PHONE_NUMBER_TOO_LONG',
        'PHONE_NUMBER_TOO_SHORT',
        'INVALID_WEBSITE_URL',
        'ADWORDS_ATTRIBUTE_TOO_LONG',
        'BRAND_NOT_ALLOWED',
        'FLAGGED_DUE_TO_SUSPICIOUS_METADATA',
        'NOT_ENOUGH_IMAGES_PROVIDED',
        'IMAGE_PROCESSING_IN_PROGRESS',
        'CANNOT_FETCH_IMAGES',
        'INCOMPATIBLE_IMAGE_SIZE_OR_LOW_QUALITY',
        'MISSING_LANG_IN_RAW_LISTING',
        'IS_HOTEL',
        'MISSING_REQ_ATTR',
        'MISSING_NAME',
        'MISSING_LANG_IN_NAME',
        'VR_NAME_TOO_LONG',
        'TEST_PROPERTY',
        'NON_VR_ACCOMMODATION_TYPE_BASED_ON_LISTING_NAME',
        'BRAND_NAME_TOO_LONG',
        'MISSING_BRAND_NAME',
        'INVALID_REVIEW_RATING',
        'INVALID_CHECKIN_FORMAT',
        'INVALID_CHECKOUT_FORMAT',
      ])
      .exactOptional()
      .openapi({ description: 'The type of the data issue.' }),
    isSelfResolving: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether or not the issue is self-resolving. If true, the issue is expected to resolve itself. If false or not set, action is needed to resolve the issue. Refer to documentation on the data issue’s type for further information.',
      }),
  })
  .openapi({ description: 'Details on a data issue in the listing.', required: [] })
  .openapi('DataIssueDetail')

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

const EmptySchema = z
  .object({})
  .openapi({
    description:
      'A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); }',
  })
  .openapi('Empty')

const FreeBookingLinksResultSchema = z
  .object({
    clickCount: z
      .string()
      .exactOptional()
      .openapi({ description: 'The total number of clicks that were recorded for this result.' }),
    date: DateSchema.exactOptional().openapi({
      description:
        'A date within the requested date range. Only present if `date` is specified in `aggregateBy` in the request.',
    }),
    deviceType: z
      .enum(['DEVICE_UNSPECIFIED', 'DEVICE_UNKNOWN', 'DESKTOP', 'MOBILE', 'TABLET'])
      .exactOptional()
      .openapi({
        description:
          'The user’s device type. Only present if `deviceType` is specified in `aggregateBy` in the request.',
      }),
    partnerHotelDisplayName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Partner's hotel name. Only present if `partnerHotelDisplayName` is specified in `aggregateBy` in the request.",
      }),
    partnerHotelId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Partner's hotel ID. Only present if `partnerHotelId` is specified in `aggregateBy` in the request.",
      }),
    userRegionCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'ISO 3116 region code of the country/region of the user. Only present if `userRegionCode` is specified in `aggregateBy` in the request',
      }),
  })
  .openapi({
    description:
      '**DEPRECATED:** Use `PropertyPerformanceResult` with `PropertyPerformanceReportService` instead. Represents a result from querying for free booking link stats for an account.',
    required: [],
  })
  .openapi('FreeBookingLinksResult')

const HotelPricePerItinerarySchema = z
  .object({
    checkinDate: DateSchema.exactOptional().openapi({ description: 'Check-in date.' }),
    currencyCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'Currency for `price`, `taxes`, and `fees`.' }),
    fees: z.float32().exactOptional().openapi({ description: 'Fees for this itinerary.' }),
    lengthOfStayDays: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Number of nights for the itinerary.' }),
    price: z.float32().exactOptional().openapi({ description: 'Hotel price for this itinerary.' }),
    taxes: z.float32().exactOptional().openapi({ description: 'Taxes for this itinerary.' }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Update timestamp for this hotel price.' }),
  })
  .openapi({ description: 'Hotel price for a given itinerary.', required: [] })
  .openapi('HotelPricePerItinerary')

const HotelViewSchema = z
  .object({
    dataIssueDetail: z
      .array(DataIssueDetailSchema)
      .exactOptional()
      .openapi({
        description:
          'The type and severity of each data quality issue in the feed. If your feed contains data issues, update the feed and resubmit it. For more information, refer to this article.',
      }),
    dataIssues: z
      .array(
        z.enum([
          'FEED_DATA_ISSUE_UNSPECIFIED',
          'FEED_DATA_ISSUE_UNKNOWN',
          'NO_DATA_ISSUE',
          'DUPLICATE_ADDRESS',
          'MISSING_PHYSICAL_STREET_ADDRESS',
          'MISSING_STREET_NAME',
          'MISSING_STREET_NUMBER',
          'MISSING_ADDRESS',
          'MISSING_COUNTRY',
          'INVALID_POSTAL_CODE',
          'INVALID_POSTAL_CODE_SUFFIX',
          'UNEXPECTED_POSTAL_CODE_SUFFIX',
          'UNEXPECTED_POSTAL_CODE',
          'INVALID_AMENITIES',
          'INVALID_EMAIL_ADDRESS',
          'DUPLICATE_LATLONG',
          'LATLONG_INCONSISTENT_WITH_ADDRESS',
          'MISSING_LATLONG',
          'COULD_NOT_GEOCODE',
          'MISSING_HOTEL_NAME',
          'HOTEL_NAME_EMPTY',
          'INVALID_HOTEL_NAME',
          'HOTEL_NAME_TOO_LONG',
          'PARSE_ERROR_IN_XML',
          'UNEXPECTED_ATTRIBUTE_IN_XML',
          'DUPLICATE_PHONE_NUMBER',
          'MISSING_PHONE_NUMBER',
          'MISSING_VOICE_PHONE_NUMBER',
          'INVALID_PHONE_NUMBER_FORMAT',
          'INVALID_PHONE_NUMBER',
          'INVALID_PHONE_NUMBER_COUNTRY_CODE',
          'PHONE_NUMBER_TOO_LONG',
          'PHONE_NUMBER_TOO_SHORT',
          'INVALID_WEBSITE_URL',
          'ADWORDS_ATTRIBUTE_TOO_LONG',
          'BRAND_NOT_ALLOWED',
          'FLAGGED_DUE_TO_SUSPICIOUS_METADATA',
          'NOT_ENOUGH_IMAGES_PROVIDED',
          'IMAGE_PROCESSING_IN_PROGRESS',
          'CANNOT_FETCH_IMAGES',
          'INCOMPATIBLE_IMAGE_SIZE_OR_LOW_QUALITY',
          'MISSING_LANG_IN_RAW_LISTING',
          'IS_HOTEL',
          'MISSING_REQ_ATTR',
          'MISSING_NAME',
          'MISSING_LANG_IN_NAME',
          'VR_NAME_TOO_LONG',
          'TEST_PROPERTY',
          'NON_VR_ACCOMMODATION_TYPE_BASED_ON_LISTING_NAME',
          'BRAND_NAME_TOO_LONG',
          'MISSING_BRAND_NAME',
          'INVALID_REVIEW_RATING',
          'INVALID_CHECKIN_FORMAT',
          'INVALID_CHECKOUT_FORMAT',
        ]),
      )
      .exactOptional()
      .openapi({
        description:
          'DEPRECATED. Indicates that the hotel has data quality issues. The value of this field indicates the type of error. This has been replaced with the data_issue_detail field. If your feed contains data issues, update the feed and resubmit it. For more information, refer to this article.',
      }),
    googleClusterId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The Google Maps identifier for the hotel.' }),
    googleHotelDisplayName: z
      .string()
      .exactOptional()
      .openapi({ description: "Google's hotel name." }),
    googleHotelId: z
      .string()
      .exactOptional()
      .openapi({ description: "Google's canonical ID for the hotel." }),
    liveOnGoogle: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Optional. Whether the hotel appears in Google's hotel booking links. Declaration & behavior to get detection of presence/absence in JSON conversion.",
      }),
    matchStatus: z
      .enum([
        'MATCH_STATUS_UNSPECIFIED',
        'MATCH_STATUS_UNKNOWN',
        'NOT_MATCHED',
        'MATCHED',
        'MAP_OVERLAP',
      ])
      .exactOptional()
      .openapi({ description: 'Current matching status of the hotel.' }),
    overclusteredPartnerHotelIds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Other hotels with which the hotel is overclustered. If your feed contains overclustered hotels, update the feed and resubmit it. To do this, you can use the manual match tool.',
      }),
    partnerHotelDisplayName: z
      .string()
      .exactOptional()
      .openapi({ description: "Partner's hotel name." }),
    partnerHotelId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The unique ID of the hotel that the partner provides in their Hotel List Feed.',
      }),
    primaryOverclusteredPartnerHotelId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The primary hotel in the overclustered set.' }),
    propertyDetails: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. A URL to the property on Google. Only available for properties that are listed.',
      }),
  })
  .openapi({ description: 'A hotel view.', required: [] })
  .openapi('HotelView')

const IconSchema = z
  .object({
    disapprovalReasons: z
      .array(
        z.enum([
          'IMAGE_DISAPPROVAL_REASON_UNSPECIFIED',
          'NOT_LIKE_SITE',
          'OFFENSIVE',
          'LOW_QUALITY',
          'ANIMATED',
          'BAD_BACKGROUND',
          'TEXT_TOO_SMALL',
        ]),
      )
      .exactOptional()
      .openapi({
        description:
          "Output only. The icon's disapproval reason(s). Only applies to icons with `REJECTED` state.",
        readOnly: true,
      }),
    iconUri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Output only. The approved icon's Google-hosted URI. Only applies to icons with `APPROVED` state.",
        readOnly: true,
      }),
    imageData: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Input only. The icon contents, which must be in PNG format, or convertible to PNG.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Output only. The resource name for the icon in the format `accounts/{account_id}/icons/{icon_id}`. Google generates the `icon_id` during the `create` operation. Use the `icon_id` to associate the icon with a brand using the [accounts.brands](/hotels/hotel-prices/api-reference/rest/v3/accounts.brands#resource:-brand) API.',
        readOnly: true,
      }),
    reference: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Optional. Value for tracking the icon. It could be the primary key to your icon in your system, or the icon's filename. Google does not use this value.",
      }),
    state: z
      .enum(['STATE_UNSPECIFIED', 'NEW', 'APPROVED', 'REJECTED'])
      .exactOptional()
      .openapi({ description: "Output only. The icon's current state.", readOnly: true }),
  })
  .openapi({ description: "Information about a partner's icon.", required: [] })
  .openapi('Icon')

const ImageSchema = z
  .object({
    galleryUri: z
      .array(LocalizedTextSchema)
      .exactOptional()
      .openapi({ description: 'URL that is deeplink to the image in a gallery (or a webpage).' }),
    title: z
      .array(LocalizedTextSchema)
      .exactOptional()
      .openapi({ description: 'Title of the image.' }),
    uri: z
      .string()
      .exactOptional()
      .openapi({ description: 'URL that points to the binary image content directly.' }),
  })
  .openapi({
    description:
      'A single image in a VR Listing. Title and gallery URL are stored per locale. NEXT ID: 4',
    required: [],
  })
  .openapi('Image')

const KeySchema = z
  .object({
    advanceBookingWindow: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The number of days in advance the user wants to book the itinerary. If `advanceBookingWindow` is not a value of the `aggregateBy` parameter in the request call, then the `advanceBookingWindow` field is not returned in the `Key`.',
      }),
    checkinDate: DateSchema.exactOptional().openapi({
      description:
        'The check-in date of the itinerary. If `checkinDate` is not a value of the `aggregateBy` parameter in the request call, then the `checkinDate` field is not returned in the `Key`.',
    }),
    date: DateSchema.exactOptional().openapi({
      description:
        'The date for which you are requesting metrics. If `date` is not a value of the `aggregateBy` parameter in the request call, then the `date` field is not returned in the `Key`.',
    }),
    deviceType: z
      .enum(['DEVICE_UNSPECIFIED', 'DEVICE_UNKNOWN', 'DESKTOP', 'MOBILE', 'TABLET'])
      .exactOptional()
      .openapi({
        description:
          'The user’s device type. If `deviceType` is not a value of the `aggregateBy` parameter in the request call, then the `deviceType` field is not returned in the `Key`.',
      }),
    hotelRegionCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'CLDR region code of the country/region of the hotel. If `hotelRegionCode` is not a value of the `aggregateBy` parameter in the request call, then the `hotelRegionCode` field is not returned in the `Key`.',
      }),
    lengthOfStayDays: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The number of nights for the itinerary. If `lengthOfStayDays` is not a value of the `aggregateBy` parameter in the request call, then the `lengthOfStayDays` field is not returned in the `Key`.',
      }),
    occupancy: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The total occupancy of the itinerary. If `occupancy` is not a value of the `aggregateBy` parameter in the request call, then the `occupancy` field is not returned in the `Key`.',
      }),
    partnerHotelId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Partner's hotel ID. If `partnerHotelId` is not a value of the `aggregateBy` parameter in the request call, then the `partnerHotelId` field is not returned in the `Key`.",
      }),
    userRegionCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'ISO 3116 region code of the country/region of the user. If `userRegionCode` is not a value of the `aggregateBy` parameter in the request call, then the `userRegionCode` field is not returned in the `Key`.',
      }),
  })
  .openapi({ description: 'Key of a result.', required: [] })
  .openapi('Key')

const LatLngSchema = z
  .object({
    latitude: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The latitude in degrees. It must be in the range [-90.0, +90.0].' }),
    longitude: z
      .float64()
      .exactOptional()
      .openapi({
        description: 'The longitude in degrees. It must be in the range [-180.0, +180.0].',
      }),
  })
  .openapi({
    description:
      'An object that represents a latitude/longitude pair. This is expressed as a pair of doubles to represent degrees latitude and degrees longitude. Unless specified otherwise, this object must conform to the WGS84 standard. Values must be within normalized ranges.',
    required: [],
  })
  .openapi('LatLng')

const ListAccountLinksResponseSchema = z
  .object({
    accountLinks: z
      .array(AccountLinkSchema)
      .exactOptional()
      .openapi({
        description:
          'A list of all account links associated with the Hotel Center account being queried.',
      }),
  })
  .openapi({
    description: 'Response message for AccountLinkService.ListAccountLinks.',
    required: [],
  })
  .openapi('ListAccountLinksResponse')

const ListBrandsResponseSchema = z
  .object({
    brands: z
      .array(BrandSchema)
      .exactOptional()
      .openapi({
        description: 'A list of all brands associated with the Hotel Center account being queried.',
      }),
  })
  .openapi({ description: 'Response message for BrandService.ListBrands.', required: [] })
  .openapi('ListBrandsResponse')

const ListHotelViewsResponseSchema = z
  .object({
    hotelViews: z
      .array(HotelViewSchema)
      .exactOptional()
      .openapi({ description: 'The list of rows that match the query.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'Pagination token used to retrieve the next page of results.' }),
  })
  .openapi({ description: 'Response message for HotelViewService.ListHotelViews.', required: [] })
  .openapi('ListHotelViewsResponse')

const ListIconsResponseSchema = z
  .object({
    icons: z
      .array(IconSchema)
      .exactOptional()
      .openapi({ description: 'A list of all icons associated with the queried partner account.' }),
  })
  .openapi({ description: 'Response message for IconService.ListIcons.', required: [] })
  .openapi('ListIconsResponse')

const PriceRecordSchema = z
  .object({
    basePrice: z.float32().exactOptional().openapi({ description: 'Base price.' }),
    currencyCode: z.string().exactOptional().openapi({ description: 'ISO 4217 currency code.' }),
    taxesAndFees: z.float32().exactOptional().openapi({ description: 'Taxes and fees.' }),
    time: z.string().exactOptional().openapi({ description: 'Timestamp of this price record.' }),
  })
  .openapi({ description: 'A price record.', required: [] })
  .openapi('PriceRecord')

const PriceAccuracyRowSchema = z
  .object({
    adultOccupancy: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'The number of adults in the occupancy details of the validation query.',
      }),
    affectsScore: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'True if this row affects the placement of a price. This field has been renamed to “Affects placement” in Hotel Center.',
      }),
    cachedPriceRecord: PriceRecordSchema.exactOptional().openapi({
      description: 'Price as advertised.',
    }),
    checkinDate: DateSchema.exactOptional().openapi({ description: 'Check-in date.' }),
    childOccupancy: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'The number of children in the occupancy details of the validation query.',
      }),
    correctionTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Time at which an incorrect price is updated to a correct price.' }),
    deviceType: z
      .enum(['DEVICE_UNSPECIFIED', 'DEVICE_UNKNOWN', 'DESKTOP', 'MOBILE', 'TABLET'])
      .exactOptional()
      .openapi({ description: "The user's device type." }),
    fetchedPriceRecord: PriceRecordSchema.exactOptional().openapi({
      description: 'Price as read from the partner website.',
    }),
    finalDomain: z
      .string()
      .exactOptional()
      .openapi({ description: 'The domain of the final page from which prices are read.' }),
    hotel: z.string().exactOptional().openapi({ description: 'Partner-defined hotel ID.' }),
    hotelCountryCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'The country of the hotel (based on address).' }),
    lengthOfStayDays: z.int32().exactOptional().openapi({ description: 'Length of stay.' }),
    mismatchReason: z
      .enum([
        'MISMATCH_REASON_UNSPECIFIED',
        'MISMATCH_REASON_UNKNOWN',
        'TAX_MISMATCH',
        'ROOM_UNAVAILABLE',
        'SITE_ERROR',
        'PRICE_FEED_DELAYED',
        'DISCOUNT_MISSING',
        'INCORRECT_DISCOUNT_VALUE',
        'WRONG_ITINERARY',
      ])
      .exactOptional()
      .openapi({ description: "The reason why the fetched price didn't match the cached price." }),
    rateRuleId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The rate rule of the advertised price for non-public rates.' }),
    signalSource: z
      .enum(['SIGNAL_SOURCE_UNSPECIFIED', 'SIGNAL_SOURCE_UNKNOWN', 'FETCHED', 'PIXEL'])
      .exactOptional()
      .openapi({ description: 'Source of the price accuracy signal.' }),
    url: z
      .string()
      .exactOptional()
      .openapi({ description: 'Initial URL visited on the partner website.' }),
    userRegionCode: z.string().exactOptional().openapi({ description: "The user's region." }),
  })
  .openapi({ description: 'A price accuracy row.', required: [] })
  .openapi('PriceAccuracyRow')

const PriceAccuracyViewSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Resource name should be in the format `accounts/{account_id}/priceAccuracyViews/{report_date}`.',
      }),
    results: z
      .array(PriceAccuracyRowSchema)
      .exactOptional()
      .openapi({ description: 'The list of rows that match the query.' }),
  })
  .openapi({
    description:
      'A price accuracy view. Covers the price accuracy reports functionality in pre-v3.0 API versions. For more information, refer to [Price Accuracy report](https://support.google.com/hotelprices/answer/6318506).',
    required: [],
  })
  .openapi('PriceAccuracyView')

const ListPriceAccuracyViewsResponseSchema = z
  .object({
    priceAccuracyViews: z
      .array(PriceAccuracyViewSchema)
      .exactOptional()
      .openapi({ description: 'The list of rows that match the query.' }),
  })
  .openapi({
    description: 'Response message for PriceAccuracyViewService.ListPriceAccuracyViews.',
    required: [],
  })
  .openapi('ListPriceAccuracyViewsResponse')

const PriceCoverageBucketSchema = z
  .object({
    advanceBookingWindowRange: z
      .enum([
        'ADVANCE_BOOKING_WINDOW_RANGE_UNSPECIFIED',
        'ADVANCE_BOOKING_WINDOW_RANGE_UNKNOWN',
        'DAYS_0_TO_30',
        'DAYS_31_TO_60',
        'DAYS_61_TO_90',
        'DAYS_91_TO_120',
        'DAYS_121_TO_150',
        'DAYS_151_TO_180',
        'DAYS_181_TO_210',
        'DAYS_211_TO_240',
        'DAYS_241_TO_270',
        'DAYS_271_TO_300',
        'DAYS_301_TO_330',
      ])
      .exactOptional()
      .openapi({ description: 'Advance booking window range.' }),
    availablePriceCount: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Number of prices for this advance booking window bucket and length of stay bucket.',
      }),
    lengthOfStayRange: z
      .enum([
        'LENGTH_OF_STAY_RANGE_UNSPECIFIED',
        'LENGTH_OF_STAY_RANGE_UNKNOWN',
        'LENGTH_OF_STAY_1_TO_7',
        'LENGTH_OF_STAY_8_TO_14',
        'LENGTH_OF_STAY_15_TO_30',
      ])
      .exactOptional()
      .openapi({ description: 'Length of stay range.' }),
    priceCoveragePercent: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'The percent of itineraries for which you have coverage for this advance booking window bucket and length of stay bucket.',
      }),
  })
  .openapi({
    description: 'Coverage stats for one combination of advance booking window and length of stay.',
    required: [],
  })
  .openapi('PriceCoverageBucket')

const PriceCoverageViewSchema = z
  .object({
    calculationDate: DateSchema.exactOptional().openapi({
      description: 'The date on which the calculations were made.',
    }),
    matchedPropertyCount: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'The total number of properties that have prices for the given itineraries.',
      }),
    priceCoverageBinaryPercent: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'The ratio between the number of hotels which have at least one price for the calculation period and `matched_property_count`.',
      }),
    priceCoverageBuckets: z
      .array(PriceCoverageBucketSchema)
      .exactOptional()
      .openapi({
        description:
          'Price coverage stats for combinations of advance booking window and length of stay ranges.',
      }),
    priceCoveragePercent: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'The overall price coverage for an account. This value is the ratio between the number of hotel prices for the calculation booking window and length of stay range divided by the number of all possible prices, which is `matched_property_count` times 330 (for advance book window) times 30 (for length of stay).',
      }),
  })
  .openapi({
    description:
      'A price coverage view. Covers the `price_coverage_stats` Scorecard functionality in pre-v3.0 API versions. For more information, refer to Price Coverage for Push and Hint partners.',
    required: [],
  })
  .openapi('PriceCoverageView')

const ListPriceCoverageViewsResponseSchema = z
  .object({
    priceCoverageViews: z
      .array(PriceCoverageViewSchema)
      .exactOptional()
      .openapi({ description: 'Hotel price coverage stats.' }),
  })
  .openapi({
    description: 'Response message for PriceCoverageViewService.ListPriceCoverageViews.',
    required: [],
  })
  .openapi('ListPriceCoverageViewsResponse')

const ListReconciliationReportsResponseSchema = z
  .object({
    reconciliationReports: z
      .array(ReconciliationReportSchema)
      .exactOptional()
      .openapi({
        description:
          'The list of names of reconciliation reports. Note that the `contents` and `fileName` fields of each `ReconciliationReport` object are not returned by this call.',
      }),
  })
  .openapi({
    description: 'Response message for ReconciliationReportService.ListReconciliationReports.',
    required: [],
  })
  .openapi('ListReconciliationReportsResponse')

const NoPriceCountDetailsSchema = z
  .object({
    livePricingConfigIssueCount: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The total number of missed participation due to live pricing not being triggered for any of the following reasons: * You didn't have live pricing configured for these searches. * You restricted Google from accessing the hotel itinerary in question.",
      }),
    livePricingNotAvailableCount: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The total number of missed participation due to live pricing being unavailable. Live pricing will not be triggered for certain default itineraries or UIs. In this scenario, partners will need a cached price to participate.',
      }),
    livePricingNotTriggeredCount: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The total number of missed participation due to live pricing not being triggered for any of the following reasons: * You didn't set a bid. * You didn't have a valid landing page. * There weren't enough prices in the cache.",
      }),
    livePricingOtherReasonCount: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The number of missed participations due to other issues with live pricing.',
      }),
    livePricingTechnicalIssueCount: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The total number of missed participation due to technical issues with live pricing for any of the following reasons: * You didn’t respond quickly enough and exceeded the response deadline (around 4000 milliseconds). * You returned an error. * Your response was malformed.',
      }),
  })
  .openapi({
    description:
      'The reasons that contributed to the no price count and the total count for each reason.',
    required: [],
  })
  .openapi('NoPriceCountDetails')

const PriceMissingCountDetailsSchema = z
  .object({
    bandwidthDepletedCount: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'No price was cached for this itinerary, and there was no live query quota remaining.',
      }),
    cacheRateMissingCount: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'No price exists in the cache for this itinerary. A live query was not done due to page constraints.',
      }),
    itineraryBlockedCount: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The itinerary was outside of your basic parameters, so no price was pulled for the itinerary from either live query or cache fill.',
      }),
    livePricingErrorCount: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'No price was cached for this itinerary. A live query did not time out, but your system returned an error.',
      }),
    livePricingNotSetupCount: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'No price was cached for this itinerary, and live query was not configured for this account.',
      }),
    livePricingTimeoutCount: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'No price was cached for this itinerary, and a live query sent to your system timed out.',
      }),
  })
  .openapi({
    description:
      'The reasons that contributed to the price missing count and the total count for each reason.',
    required: [],
  })
  .openapi('PriceMissingCountDetails')

const PriceProblemCountDetailsSchema = z
  .object({
    hotelSuspendedCount: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The hotel was suspended. This may be due to persistent problems in areas such as incorrect taxes and fees.',
      }),
    priceUnusuallyHighCount: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The price given for this itinerary seemed oddly high compared to regional trends.',
      }),
    priceUnusuallyLowCount: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The price given for this itinerary seemed oddly low compared to regional trends.',
      }),
    taxesAndFeesMissingCount: z
      .string()
      .exactOptional()
      .openapi({ description: 'Taxes and fees were missing from pricing.' }),
  })
  .openapi({
    description:
      'The reasons that contributed to the price problem count and the total count for each reason.',
    required: [],
  })
  .openapi('PriceProblemCountDetails')

const PriceUnavailableCountDetailsSchema = z
  .object({
    participationNotLikelyCount: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'No price was cached for this itinerary, and no live query was done because your server usually tells us the hotel is unavailable or sold out.',
      }),
    priceUnavailableCount: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Hotel did not participate because it wasn't available for the itinerary dates.",
      }),
  })
  .openapi({
    description:
      'The reasons that contributed to the price unavailable count and the total count for each reason.',
    required: [],
  })
  .openapi('PriceUnavailableCountDetails')

const MissedParticipationCountDetailsSchema = z
  .object({
    hotelSuspendedCount: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The total number of missed participations due to one or more of your hotels being suspended due to price accuracy violations.',
      }),
    noAvailabilityCount: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The total number of missed participation due to the hotel/itinerary combination being unavailable, or the traveler was ineligible for the rates. To participate in these auctions, you may need to provide more pricing information.',
      }),
    noLandingPageCount: z
      .string()
      .exactOptional()
      .openapi({ description: 'No landing page matched the user.' }),
    noPriceCount: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The total number of missed participations due to a price not being offered for the requested itinerary.',
      }),
    noPriceCountDetails: NoPriceCountDetailsSchema.exactOptional().openapi({
      description:
        'The reasons that contributed to the no price count (for example, live pricing not available) and the total count for each reason.',
    }),
    noTaxBreakdownCount: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The total number of missed participation due to one or more of your hotels not specifying taxes and fees separately.',
      }),
    otherReasonCount: z
      .string()
      .exactOptional()
      .openapi({ description: 'Hotel did not participate for an unknown reason.' }),
    priceMissingCount: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The total number of missed participations due to either a price not being present in Google's cache or failing to successfully respond to live pricing. Comprised of the following: * Bandwidth depleted * Cache rate missing * Itinerary blocked * Live pricing not set up * Live pricing timeout * Live pricing error",
      }),
    priceMissingCountDetails: PriceMissingCountDetailsSchema.exactOptional().openapi({
      description: 'The reasons that contributed to the price missing count.',
    }),
    priceProblemCount: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The total number of missed participation due to an issue with the accuracy of the price provided for the itinerary. Comprised of the following: * Hotel suspended * Price unusually high * Price unusually low * Taxes and feeds missing',
      }),
    priceProblemCountDetails: PriceProblemCountDetailsSchema.exactOptional().openapi({
      description: 'The reasons that contributed to the price problem count.',
    }),
    priceUnavailableCount: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The total number of missed participation due to price listed as unavailable (-1) for the requested itinerary. Comprised of the following: * Price unavailable * Participation not likely * Other',
      }),
    priceUnavailableCountDetails: PriceUnavailableCountDetailsSchema.exactOptional().openapi({
      description: 'The reasons that contributed to the price unavailable count.',
    }),
  })
  .openapi({ description: 'Missed participation count broken down by reason.', required: [] })
  .openapi('MissedParticipationCountDetails')

const RatingSchema = z
  .object({
    ratingScale: z.int32().exactOptional().openapi({ description: 'Maximum rating possible.' }),
    score: z.float32().exactOptional().openapi({ description: 'The rating score. (e.g. 8.5)' }),
    type: z
      .enum(['TYPE_UNSPECIFIED', 'OVERALL'])
      .exactOptional()
      .openapi({ description: 'The type of the rating.' }),
  })
  .openapi({ description: 'A rating within a vacation rentals Listing. NEXT ID: 4', required: [] })
  .openapi('Rating')

const ReviewSchema = z
  .object({
    author: z.string().exactOptional().openapi({ description: 'The author of the review.' }),
    body: z.string().exactOptional().openapi({ description: 'The body of the review.' }),
    languageCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'Language of the review, such as "en", "de", etc.' }),
    link: z.string().exactOptional().openapi({ description: 'The url of the review.' }),
    rating: z
      .array(RatingSchema)
      .exactOptional()
      .openapi({
        description:
          'Any ratings associated with this review. This is repeated because reviews can include ratings on different aspects of a listing, e.g. location, cleanliness, etc.',
      }),
    reviewTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Unix timestamp (in seconds) of the review, in UTC+0.' }),
    title: z
      .string()
      .exactOptional()
      .openapi({ description: 'The title of the review, for example: Great three bedrooms.' }),
    type: z
      .enum(['UNKNOWN', 'EDITORIAL', 'USER'])
      .exactOptional()
      .openapi({ description: 'The type of the review.' }),
    visitTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Unix timestamp (in seconds) of when the stay was, in UTC+0.' }),
  })
  .openapi({ description: 'A single review in a VR Listing. NEXT ID: 10', required: [] })
  .openapi('Review')

const ParsedListingSchema = z
  .object({
    brand: z
      .string()
      .exactOptional()
      .openapi({
        description: 'If not empty, it indicates that this listing belongs to a brand of the feed.',
      }),
    category: z
      .array(LocalizedTextSchema)
      .exactOptional()
      .openapi({
        description: 'The partner provided category (accommodation type) of the property.',
      }),
    dataIssueDetail: z
      .array(DataIssueDetailSchema)
      .exactOptional()
      .openapi({ description: 'Data issues about this listing' }),
    description: z
      .array(LocalizedTextSchema)
      .exactOptional()
      .openapi({ description: 'Description of the property.' }),
    image: z
      .array(ImageSchema)
      .exactOptional()
      .openapi({ description: 'Images associated with this listing, localized.' }),
    imprecisionRadiusMeters: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Represents the accuracy of the location. The listing can be anywhere within the defined circular area.',
      }),
    isServed: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the listing can be served based on non image data alone.' }),
    listingName: z
      .array(LocalizedTextSchema)
      .exactOptional()
      .openapi({ description: 'List of localized names.' }),
    location: LatLngSchema.exactOptional().openapi({
      description: 'Location of listing in lat/lng (degrees).',
    }),
    partnerListId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The list id on partner lec feed, provided by partner.' }),
    regionCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'The country code where the listing is located.' }),
    review: z
      .array(ReviewSchema)
      .exactOptional()
      .openapi({
        description:
          'Reviews associated with this listing. Each review proto has a single language attached to it.',
      }),
    unitAttributes: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({ description: 'VR List attribute.' }),
  })
  .openapi({ description: 'A parsed listing', required: [] })
  .openapi('ParsedListing')

const ParticipationResultSchema = z
  .object({
    key: KeySchema.exactOptional().openapi({ description: 'Key of the result.' }),
    missedParticipationCount: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The total number of opportunities **not** eligible for the Google Ads auction process. Comprised of the following: * Landing page missing * Price missing * Price problem * Price unavailable * Other',
      }),
    missedParticipationCountDetails: MissedParticipationCountDetailsSchema.exactOptional().openapi({
      description:
        'The reasons that contributed to the missed participation count (for example, no availability) and a total count for each reason.',
    }),
    opportunityCount: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'For a specific hotel, the total number of opportunities that were available. Opportunities are the total number of instances when a hotel ad could have been displayed to a user.',
      }),
    participationCount: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The total number of opportunities for which you were eligible to enter in the Google Ads auction process.',
      }),
    participationPercent: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'The percentage rate of participation where the number of successfully participated opportunities is divided by the total number of opportunities. For example, if a property was eligible to enter the Google Ads auction 90 times out of 100 opportunities, the participation rate is 90%.',
      }),
    partnerHotelDisplayName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Partner's hotel display name. This field is only populated when the result is aggregated by `partnerHotelId`.",
      }),
  })
  .openapi({
    description: 'Represents a result from querying for participation stats for an account.',
    required: [],
  })
  .openapi('ParticipationResult')

const PriceViewSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Resource name in the format `accounts/{account_id}/priceViews/{partner_hotel_id}`.',
      }),
    perItineraryPrices: z
      .array(HotelPricePerItinerarySchema)
      .exactOptional()
      .openapi({ description: 'Price for each itinerary.' }),
  })
  .openapi({
    description: 'A price view. Covers the Prices functionality in pre-v3.0 API versions.',
    required: [],
  })
  .openapi('PriceView')

const PropertyPerformanceResultSchema = z
  .object({
    adsClickCount: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The total number of ad clicks that were recorded for this result.',
      }),
    adsClickthroughRate: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Equal to `ads_click_count` divided by `ads_impression_count`.' }),
    adsImpressionCount: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The total number of ad impressions that were recorded for this result.',
      }),
    advanceBookingWindow: z
      .enum([
        'ADVANCE_BOOKING_WINDOW_UNSPECIFIED',
        'ADVANCE_BOOKING_WINDOW_SAME_DAY',
        'ADVANCE_BOOKING_WINDOW_NEXT_DAY',
        'ADVANCE_BOOKING_WINDOW_DAYS_2_TO_7',
        'ADVANCE_BOOKING_WINDOW_DAYS_8_TO_14',
        'ADVANCE_BOOKING_WINDOW_DAYS_15_TO_30',
        'ADVANCE_BOOKING_WINDOW_DAYS_31_TO_60',
        'ADVANCE_BOOKING_WINDOW_DAYS_61_TO_90',
        'ADVANCE_BOOKING_WINDOW_DAYS_91_TO_120',
        'ADVANCE_BOOKING_WINDOW_DAYS_121_TO_150',
        'ADVANCE_BOOKING_WINDOW_DAYS_151_TO_180',
        'ADVANCE_BOOKING_WINDOW_DAYS_OVER_180',
      ])
      .exactOptional()
      .openapi({
        description:
          "Difference in days between query date and check-in date in property's local timezone. Only present if `advanceBookingWindow` is specified in `aggregateBy` in the request.",
      }),
    brand: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Partner-specified brand for the property. Only present if `brand` is specified in `aggregateBy` in the request.',
      }),
    clickCount: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The total number of free booking link clicks that were recorded for this result.',
      }),
    clickthroughRate: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Equal to `click_count` divided by `impression_count`.' }),
    date: DateSchema.exactOptional().openapi({
      description:
        'A date within the requested date range. Only present if `date` is specified in `aggregateBy` in the request.',
    }),
    deviceType: z
      .enum(['DEVICE_UNSPECIFIED', 'DEVICE_UNKNOWN', 'DESKTOP', 'MOBILE', 'TABLET'])
      .exactOptional()
      .openapi({
        description:
          'The user’s device type. Only present if `deviceType` is specified in `aggregateBy` in the request.',
      }),
    highIntentUsers: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether the user’s query indicated a strong interest in booking. Only present if `highIntentUsers` is specified in `aggregateBy` in the request.',
      }),
    impressionCount: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The total number of free booking link impressions that were recorded for this result. This value is rounded to preserve user privacy.',
      }),
    lengthOfStay: z
      .enum([
        'LENGTH_OF_STAY_UNSPECIFIED',
        'LENGTH_OF_STAY_NIGHTS_1',
        'LENGTH_OF_STAY_NIGHTS_2',
        'LENGTH_OF_STAY_NIGHTS_3',
        'LENGTH_OF_STAY_NIGHTS_4_TO_7',
        'LENGTH_OF_STAY_NIGHTS_8_TO_14',
        'LENGTH_OF_STAY_NIGHTS_15_TO_21',
        'LENGTH_OF_STAY_NIGHTS_22_TO_30',
        'LENGTH_OF_STAY_NIGHTS_OVER_30',
      ])
      .exactOptional()
      .openapi({
        description:
          'Number of nights between check-in and check-out dates specified by user. Only present if `lengthOfStay` is specified in `aggregateBy` in the request.',
      }),
    occupancy: z
      .enum([
        'OCCUPANCY_UNSPECIFIED',
        'OCCUPANCY_1',
        'OCCUPANCY_2',
        'OCCUPANCY_3',
        'OCCUPANCY_4',
        'OCCUPANCY_OVER_4',
      ])
      .exactOptional()
      .openapi({
        description:
          'Requested number of people staying at the property. Only present if `partnerPropertyId` is specified in `aggregateBy` in the request.',
      }),
    partnerPropertyDisplayName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Partner's property name. Only present if `partnerPropertyDisplayName` is specified in `aggregateBy` in the request.",
      }),
    partnerPropertyId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Partner's property ID. Only present if `partnerPropertyId` is specified in `aggregateBy` in the request.",
      }),
    propertyRegionCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'ISO 3116 region code of the country/region of the property. Only present if `propertyRegionCode` is specified in `aggregateBy` in the request',
      }),
    userRegionCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'ISO 3116 region code of the country/region of the user. Only present if `userRegionCode` is specified in `aggregateBy` in the request',
      }),
  })
  .openapi({
    description:
      'Represents a result from querying for the property performance report for an account.',
    required: [],
  })
  .openapi('PropertyPerformanceResult')

const QueryFreeBookingLinksReportResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Pagination token used to retrieve the next page of results. If this field is omitted, there are no subsequent pages.',
      }),
    results: z
      .array(FreeBookingLinksResultSchema)
      .exactOptional()
      .openapi({ description: 'The list of results that match the query.' }),
  })
  .openapi({
    description:
      '**DEPRECATED:** Use `QueryPropertyPerformanceReportResponse` with `PropertyPerformanceReportService` instead. Response message for FreeBookingLinksReportService.QueryFreeBookingLinksReport.',
    required: [],
  })
  .openapi('QueryFreeBookingLinksReportResponse')

const QueryParticipationReportResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'Pagination token used to retrieve the next page of results.' }),
    results: z
      .array(ParticipationResultSchema)
      .exactOptional()
      .openapi({ description: 'The list of results that matches the query.' }),
  })
  .openapi({
    description: 'Response message for ParticipationReportService.QueryParticipationReport.',
    required: [],
  })
  .openapi('QueryParticipationReportResponse')

const QueryPropertyPerformanceReportResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Pagination token used to retrieve the next page of results. If this field is omitted, there are no subsequent pages.',
      }),
    results: z
      .array(PropertyPerformanceResultSchema)
      .exactOptional()
      .openapi({ description: 'The list of results that match the query.' }),
  })
  .openapi({
    description:
      'Response message for PropertyPerformanceReportService.QueryPropertyPerformanceReport.',
    required: [],
  })
  .openapi('QueryPropertyPerformanceReportResponse')

const SetLiveOnGoogleRequestSchema = z
  .object({
    liveOnGoogle: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Required. Whether the property will show on Google. When true, Google will show the properties if their integration is complete and the property is available. When false, Google will never show the properties.',
      }),
    partnerHotelIds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'Required. Identifies the properties to update with the liveOnGoogle setting.',
      }),
  })
  .openapi({ description: 'Request message for HotelService.SetLiveOnGoogle.', required: [] })
  .openapi('SetLiveOnGoogleRequest')

const SetLiveOnGoogleResponseSchema = z
  .object({
    failedHotelIds: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Identifies properties that Google could not update.' }),
    updatedHotelIds: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Identifies the updated properties.' }),
  })
  .openapi({ description: 'Response message for HotelService.SetLiveOnGoogle.', required: [] })
  .openapi('SetLiveOnGoogleResponse')

const SummarizeHotelViewsResponseSchema = z
  .object({
    lastFeedSubmissionTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Timestamp of the last hotel feed submission.' }),
    lastManifestUpdateTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Timestamp of the last hotel manifest update.' }),
    liveOnGooglePropertyCount: z
      .string()
      .exactOptional()
      .openapi({ description: 'The number of properties that are Live on Google.' }),
    matchedPropertyCount: z
      .string()
      .exactOptional()
      .openapi({ description: "The number of properties that match Google's manifest." }),
    overclusteredPropertyCount: z
      .string()
      .exactOptional()
      .openapi({ description: 'The number of hotels that are considered overclustered.' }),
    overclusteredPropertyWithErrorsCount: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The number of overclustered properties that have data-related errors.',
      }),
    unmatchedPropertyCount: z
      .string()
      .exactOptional()
      .openapi({ description: 'The number of properties that are considered unmatched.' }),
    unmatchedPropertyWithErrorsCount: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The number of unmatched properties that have data-related errors.',
      }),
  })
  .openapi({
    description: 'Response message for HotelViewService.SummarizeHotelViews.',
    required: [],
  })
  .openapi('SummarizeHotelViewsResponse')

const SummarizePriceAccuracyResponseSchema = z
  .object({
    currentBookOnGoogleScore: z
      .enum([
        'PRICE_ACCURACY_STATE_UNSPECIFIED',
        'PRICE_ACCURACY_STATE_UNKNOWN',
        'EXCELLENT',
        'GOOD',
        'POOR',
        'AT_RISK',
        'FAILED',
      ])
      .exactOptional()
      .openapi({ description: 'The current Book on Google price accuracy score.' }),
    currentOverallScore: z
      .enum([
        'PRICE_ACCURACY_STATE_UNSPECIFIED',
        'PRICE_ACCURACY_STATE_UNKNOWN',
        'EXCELLENT',
        'GOOD',
        'POOR',
        'AT_RISK',
        'FAILED',
      ])
      .exactOptional()
      .openapi({
        description:
          'The current price accuracy score combining both website and Book on Google scores.',
      }),
    currentScore: z
      .enum([
        'PRICE_ACCURACY_STATE_UNSPECIFIED',
        'PRICE_ACCURACY_STATE_UNKNOWN',
        'EXCELLENT',
        'GOOD',
        'POOR',
        'AT_RISK',
        'FAILED',
      ])
      .exactOptional()
      .openapi({
        description:
          "The current price accuracy score. Contains the same value as `current_website_score`. For clarity, use either `current_website_score` or 'current_overall_score` depending upon which is needed.",
      }),
    currentWebsiteScore: z
      .enum([
        'PRICE_ACCURACY_STATE_UNSPECIFIED',
        'PRICE_ACCURACY_STATE_UNKNOWN',
        'EXCELLENT',
        'GOOD',
        'POOR',
        'AT_RISK',
        'FAILED',
      ])
      .exactOptional()
      .openapi({ description: 'The current website price accuracy score.' }),
    predictedBookOnGoogleScore: z
      .enum([
        'PRICE_ACCURACY_STATE_UNSPECIFIED',
        'PRICE_ACCURACY_STATE_UNKNOWN',
        'EXCELLENT',
        'GOOD',
        'POOR',
        'AT_RISK',
        'FAILED',
      ])
      .exactOptional()
      .openapi({ description: 'The predicted Book on Google price accuracy score.' }),
    predictedOverallScore: z
      .enum([
        'PRICE_ACCURACY_STATE_UNSPECIFIED',
        'PRICE_ACCURACY_STATE_UNKNOWN',
        'EXCELLENT',
        'GOOD',
        'POOR',
        'AT_RISK',
        'FAILED',
      ])
      .exactOptional()
      .openapi({
        description:
          'The predicted price accuracy score combining both website and Book on Google scores.',
      }),
    predictedScore: z
      .enum([
        'PRICE_ACCURACY_STATE_UNSPECIFIED',
        'PRICE_ACCURACY_STATE_UNKNOWN',
        'EXCELLENT',
        'GOOD',
        'POOR',
        'AT_RISK',
        'FAILED',
      ])
      .exactOptional()
      .openapi({
        description:
          "The predicted price accuracy score. Contains the same value as `predicted_website_score`. For clarity, use either `predicted_website_score` or 'predicted_overall_score` depending upon which is needed.",
      }),
    predictedWebsiteScore: z
      .enum([
        'PRICE_ACCURACY_STATE_UNSPECIFIED',
        'PRICE_ACCURACY_STATE_UNKNOWN',
        'EXCELLENT',
        'GOOD',
        'POOR',
        'AT_RISK',
        'FAILED',
      ])
      .exactOptional()
      .openapi({ description: 'The predicted website price accuracy score.' }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The update timestamp for the current score.' }),
  })
  .openapi({
    description: 'Response message for PriceAccuracyViewService.SummarizePriceAccuracy.',
    required: [],
  })
  .openapi('SummarizePriceAccuracyResponse')

const ValidateReconciliationReportResponseSchema = z
  .object({
    issues: z
      .array(ReconciliationReportValidationIssueSchema)
      .exactOptional()
      .openapi({ description: 'Issues that were encountered when validating the file.' }),
    successfulRecordCount: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'The number of commission records that were successfully validated.',
      }),
  })
  .openapi({
    description: 'Response message for ReconciliationReportService.ValidateReconciliationReport.',
    required: [],
  })
  .openapi('ValidateReconciliationReportResponse')

const VerifyListingsRequestSchema = z
  .object({
    xmlListing: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A listing that follows the XML format specified in https://developers.google.com/hotels/hotel-prices/xml-reference/hotel-list-feed.',
      }),
  })
  .openapi({
    description: 'Request message for VRPartnerListingVerificationService.VerifyPartnerListings.',
    required: [],
  })
  .openapi('VerifyListingsRequest')

const VerifyListingsResponseSchema = z
  .object({
    parsedListing: ParsedListingSchema.exactOptional().openapi({
      description: 'The parsed listing output.',
    }),
  })
  .openapi({
    description: 'Response message for VRPartnerListingVerificationService.VerifyPartnerListings.',
    required: [],
  })
  .openapi('VerifyListingsResponse')

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

export const postV3AccountHotelsSetLiveOnGoogleRoute = createRoute({
  method: 'post',
  path: '/v3/{account}/hotels:setLiveOnGoogle',
  tags: ['accounts'],
  description:
    'Collection-level custom method to update the Live on Google status for multiple properties. Each call can turn on or off multiple hotels. To turn some hotels on and turn some hotels off, you will have to make multiple calls.',
  operationId: 'travelpartner.accounts.hotels.setLiveOnGoogle',
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
      account: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The resource name of the account. The format is accounts/{account_id}.',
            in: 'path',
            name: 'account',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: SetLiveOnGoogleRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: SetLiveOnGoogleResponseSchema } },
    },
  },
})

export const getV3NameRoute = createRoute({
  method: 'get',
  path: '/v3/{name}',
  tags: ['accounts'],
  description: 'Returns a reconciliation report.',
  operationId: 'travelpartner.accounts.reconciliationReports.get',
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
      includeMatchedPrices: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Set to true if matched prices are to be added into the report.',
            in: 'query',
            name: 'includeMatchedPrices',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      includeNonScoring: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Set to true if non-account impacting rows are to be added into the report.',
            in: 'query',
            name: 'includeNonScoring',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      includePixels: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Set to true if pixel signals are to be added into the report.',
            in: 'query',
            name: 'includePixels',
            schema: { type: 'boolean' },
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
              'The resource name of the reconciliation report to fetch. The format is `accounts/{account_id}/reconciliationReports/{datetime}~{filename}`.',
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
      content: { 'application/json': { schema: ReconciliationReportSchema } },
    },
  },
})

export const deleteV3NameRoute = createRoute({
  method: 'delete',
  path: '/v3/{name}',
  tags: ['accounts'],
  description: 'Deletes an account link.',
  operationId: 'travelpartner.accounts.accountLinks.delete',
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
              'Required. The resource name of the account link being deleted. The format is `accounts/{account_id}/accountLinks/{account_link_id}`.',
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
})

export const patchV3NameRoute = createRoute({
  method: 'patch',
  path: '/v3/{name}',
  tags: ['accounts'],
  description: 'Updates a brand.',
  operationId: 'travelpartner.accounts.brands.patch',
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
      allowMissing: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'When true, and the Brand is not found, a new Brand will be created. In this situation, `update_mask` is ignored.',
            in: 'query',
            name: 'allowMissing',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      updateMask: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Required. The field to update. Only the `display_names` and `icon` fields can be updated. Use the syntax shown in the example URI below and provide the new value in the request body. Example request URI and request body: ``` PATCH https://travelpartner.googleapis.com/v3/accounts/123456789/ brands/my-brand?update_mask=brand.display_names ``` ``` { "display_names": [{ "language": "en" "text": "Gilles\' Gites" }] } ``` The information above is sufficient for forming the URI and request body. The sentence below is auto-generated, supplemental information about the `FieldMask` format in general.',
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
              "Output only. The resource name for the brand in the format `accounts/{account_id}/brands/{brand_id}`. The `brand_id` corresponds to the partner's brand identifier used for landing page matching and the property-level brand identifier. A default brand is applied to properties that do not have a brand. The `brand_id` of the default brand is `NO_BRAND_ID`. It can be fetched and updated like any configured brand.",
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: BrandSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: BrandSchema } },
    },
  },
})

export const getV3NameFreeBookingLinksReportViewsQueryRoute = createRoute({
  method: 'get',
  path: '/v3/{name}/freeBookingLinksReportViews:query',
  tags: ['accounts'],
  description:
    '**DEPRECATED:** Use PropertyPerformanceReportService.QueryPropertyPerformanceReport, which also has impression reporting, instead. Provides the ability to query (get, filter, and segment) a free booking links report for a specific account.',
  operationId: 'travelpartner.accounts.freeBookingLinksReportViews.query',
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
      aggregateBy: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Specifies how to segment the metrics returned by the query. For example, if `userRegionCode` is specified, the `freeBookingLinksResult` will provide metrics aggregated by user region. The string value is a comma-separated list of fields. Valid fields are: `date`, `userRegionCode`, `deviceType`, `partnerHotelId`, and `partnerHotelDisplayName`. Only fields specified here are included in the FreeBookingLinksResult.',
            in: 'query',
            name: 'aggregateBy',
            schema: { type: 'string' },
            required: false,
          },
        }),
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "The conditions (fields and expressions) used to filter the free booking link metrics for the account being queried. The syntax requires spaces surrounding the `in` operator. Otherwise, spaces can be omitted. Conditions can be joined using the `and` operator. The `date` field is required. All other fields are optional. The `date` field values are inclusive and must be in YYYY-MM-DD format. The earliest acceptable date is 2021-03-09; earlier date values will be coerced to 2021-03-09. Values for `partnerHotelDisplayName` are matched case-insensitively. Examples of valid conditions are as follows: * `date = '2021-12-03'` * `date between '2021-12-03' and '2021-12-08'` * `deviceType = 'TABLET'` * `deviceType in ('MOBILE', 'TABLET')` * `partnerHotelId = 'AAA'` * `partnerHotelId in ('AAA', 'BBB')` * `partnerHotelDisplayName = 'hotel A'` * `partnerHotelDisplayName in ('Hotel A', 'HOTEL b')` * `userRegionCode = 'US'` * `userRegionCode in ('US', 'CA')`",
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
              'The maximum number of participation results to return. The service may return fewer than this value. If unspecified, at most 10,000 results will be returned. The maximum value is 10,000; values above 10,000 will be coerced to 10,000.',
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
              'A page token, received from a previous QueryParticipationReport request. Provide this to receive the subsequent page. When paginating, all other parameters provided to QueryParticipationReport must match the call that provided the page token.',
            in: 'query',
            name: 'pageToken',
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
              'The resource name of the account being queried. Format: accounts/{account_id}',
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
      content: { 'application/json': { schema: QueryFreeBookingLinksReportResponseSchema } },
    },
  },
})

export const getV3NameParticipationReportViewsQueryRoute = createRoute({
  method: 'get',
  path: '/v3/{name}/participationReportViews:query',
  tags: ['accounts'],
  description:
    'Provides the ability to query (get, filter, and segment) a participation report for a particular account.',
  operationId: 'travelpartner.accounts.participationReportViews.query',
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
      aggregateBy: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Specifies how to segment the metrics returned by the query. For example, if `userRegionCode` is specified as the `aggregate_by` value, the `participationResult` will provide metrics aggregated by user region. The string value is a comma-separated list of fields. Valid fields are: `date`, `userRegionCode`, `deviceType`, `partnerHotelId`, `hotelRegionCode`, `advanceBookingWindow`, `lengthOfStayDays`, `checkinDate`, and `occupancy`. Fields that are not specified are not included in the ParticipationResult. Using an `aggregateBy` specification that produces a large number of rows will cause an error. This is especially true when aggregating by `partnerHotelId` or more than two fields. To reduce the possibiliy of an error, filter by `partnerHotelId` and `date` to only include a select number of hotels and dates. Accounts with a large number of hotels will need to further reduce data with more filtering.',
            in: 'query',
            name: 'aggregateBy',
            schema: { type: 'string' },
            required: false,
          },
        }),
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "The conditions (fields and expressions) used to filter the participation metrics for the account being queried. The syntax requires spaces surrounding the `in` operator. Otherwise, spaces can be omitted. Conditions can be joined using the `and` operator. The `date` field is required. All other fields are optional. Examples of valid conditions are as follows: * `advanceBookingWindow = 2` * `advanceBookingWindow >= 0` * `advanceBookingWindow <= 5` * `advanceBookingWindow between 1 and 5` * `checkinDate = '2020-10-01'` * `checkinDate >= '2020-10-01'` * `checkinDate <= '2020-10-01'` * `checkinDate between '2020-10-01' and '2020-10-05'` * `date = '2020-02-04'` * `date between '2020-02-04' and '2020-02-09'` * `deviceType = 'TABLET'` * `deviceType in ('MOBILE', 'TABLET')` * `hotelRegionCode = 'US'` * `hotelRegionCode in ('US', 'CA')` * `lengthOfStayDays = 2` * `lengthOfStayDays >= 0` * `lengthOfStayDays <= 5` * `lengthOfStayDays between 1 and 5` * `occupancy = 2` * `occupancy >= 0` * `occupancy <= 5` * `occupancy between 1 and 5` * `partnerHotelId = 'AAA'` * `partnerHotelId in ('AAA', 'BBB')` * `userRegionCode = 'US'` * `userRegionCode in ('US', 'CA')`",
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
              'The maximum number of participation results to return. The service may return fewer than this value. If unspecified, at most 10,000 results will be returned. The maximum value is 10,000; values above 10,000 will be coerced to 10,000.',
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
              'A page token, received from a previous QueryParticipationReport request. Provide this to receive the subsequent page. When paginating, all other parameters provided to QueryParticipationReport must match the call that provided the page token.',
            in: 'query',
            name: 'pageToken',
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
              'The resource name of the account being queried. The format is `accounts/{account_id}`.',
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
      content: { 'application/json': { schema: QueryParticipationReportResponseSchema } },
    },
  },
})

export const getV3NamePropertyPerformanceReportViewsQueryRoute = createRoute({
  method: 'get',
  path: '/v3/{name}/propertyPerformanceReportViews:query',
  tags: ['accounts'],
  description:
    'Provides the ability to query (get, filter, and segment) a property performance links report for a specific account.',
  operationId: 'travelpartner.accounts.propertyPerformanceReportViews.query',
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
      aggregateBy: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Specifies how to segment the metrics returned by the query. For example, if `userRegionCode` is specified, the `PropertyPerformanceResult` will provide metrics aggregated by user region. The string value is a comma-separated list of fields. Valid fields are: `advanceBookingWindow`, `brand`, `date`, `deviceType`, `highIntentUsers`, `lengthOfStay`, `propertyRegionCode`, `occupancy`, `partnerPropertyId`, `partnerPropertyDisplayName`, and `userRegionCode`. Only fields specified here are included in the PropertyPerformanceResult.',
            in: 'query',
            name: 'aggregateBy',
            schema: { type: 'string' },
            required: false,
          },
        }),
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "The conditions (fields and expressions) used to filter the property performance metrics for the account being queried. The syntax requires spaces surrounding the `in` operator. Otherwise, spaces can be omitted. Conditions can be joined using the `and` operator. The `date` field is required. All other fields are optional. The `date` field values are inclusive and must be in YYYY-MM-DD format. The earliest acceptable date is 2021-03-09; earlier date values will be coerced to 2021-03-09. Values for `partnerPropertyDisplayName` and `brand` are matched case-insensitively. Examples of valid conditions are as follows: * `advanceBookingWindow = 'ADVANCE_BOOKING_WINDOW_SAME_DAY'` * `advanceBookingWindow in ('ADVANCE_BOOKING_WINDOW_SAME_DAY', 'ADVANCE_BOOKING_WINDOW_DAYS_61_TO_90')` * `brand = 'Brand A'` * `brand in ('Brand A', 'brand B')` * `date = '2021-12-03'` * `date between '2021-12-03' and '2021-12-08'` * `deviceType = 'TABLET'` * `deviceType in ('MOBILE', 'TABLET')` * `highIntentUsers = 'TRUE'` * `highIntentUsers = 'FALSE'` * `lengthOfStay = 'LENGTH_OF_STAY_NIGHTS_2'` * `lengthOfStay in ('LENGTH_OF_STAY_NIGHTS_2', 'LENGTH_OF_STAY_NIGHTS_4_TO_7')` * `propertyRegionCode = 'US'` * `propertyRegionCode in ('US', 'CA')` * `occupancy = 'OCCUPANCY_2'` * `occupancy in ('OCCUPANCY_2', 'OCCUPANCY_OVER_4')` * `partnerPropertyId = 'AAA'` * `partnerPropertyId in ('AAA', 'BBB')` * `partnerPropertyDisplayName = 'hotel A'` * `partnerPropertyDisplayName in ('Hotel A', 'HOTEL b')` * `userRegionCode = 'US'` * `userRegionCode in ('US', 'CA')`",
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
              'The maximum number of participation results to return. The service may return fewer than this value. If unspecified, at most 10,000 results will be returned. The maximum value is 10,000; values above 10,000 will be coerced to 10,000.',
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
              'A page token, received from a previous QueryParticipationReport request. Provide this to receive the subsequent page. When paginating, all other parameters provided to QueryParticipationReport must match the call that provided the page token.',
            in: 'query',
            name: 'pageToken',
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
              'The resource name of the account being queried. Format: accounts/{account_id}',
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
      content: { 'application/json': { schema: QueryPropertyPerformanceReportResponseSchema } },
    },
  },
})

export const getV3ParentAccountLinksRoute = createRoute({
  method: 'get',
  path: '/v3/{parent}/accountLinks',
  tags: ['accounts'],
  description: 'Returns the account links for a Hotel Center account.',
  operationId: 'travelpartner.accounts.accountLinks.list',
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
              'The resource name of the account being queried. The format is `accounts/{account_id}`.',
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
      content: { 'application/json': { schema: ListAccountLinksResponseSchema } },
    },
  },
})

export const postV3ParentAccountLinksRoute = createRoute({
  method: 'post',
  path: '/v3/{parent}/accountLinks',
  tags: ['accounts'],
  description:
    'Creates a new account link between a Hotel Center account and a Google Ads account.',
  operationId: 'travelpartner.accounts.accountLinks.create',
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
              'The resource name of the Hotel Center account being queried. The format is `accounts/{account_id}`.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: AccountLinkSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: AccountLinkSchema } },
    },
  },
})

export const getV3ParentBrandsRoute = createRoute({
  method: 'get',
  path: '/v3/{parent}/brands',
  tags: ['accounts'],
  description: 'Returns the brands for a partner account.',
  operationId: 'travelpartner.accounts.brands.list',
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
              'Required. The resource name of the account being queried. The format is `accounts/{account_id}`.',
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
      content: { 'application/json': { schema: ListBrandsResponseSchema } },
    },
  },
})

export const postV3ParentBrandsRoute = createRoute({
  method: 'post',
  path: '/v3/{parent}/brands',
  tags: ['accounts'],
  description:
    'Creates a new brand. Because Google detects brands from your existing properties, you only need this operation when you want to configure a brand before you send its properties to Google. Note that it might take a couple of days after your listing feed first provides a brand for the brand to appear.',
  operationId: 'travelpartner.accounts.brands.create',
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
      brandId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Required. The partner-determined brand identifier.',
            in: 'query',
            name: 'brandId',
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
              'Required. The resource name of the Hotel Center account being queried. The format is `accounts/{account_id}`.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: BrandSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: BrandSchema } },
    },
  },
})

export const getV3ParentHotelViewsRoute = createRoute({
  method: 'get',
  path: '/v3/{parent}/hotelViews',
  tags: ['accounts'],
  description: 'Returns the list of hotel views.',
  operationId: 'travelpartner.accounts.hotelViews.list',
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
              "Optional. The conditions (fields and expressions) used to filter HotelViews. The syntax requires spaces surrounding the `in` operator. Otherwise, spaces can be omitted. Conditions cannot be joined. The `hotelId` field can be used to select specific hotels. The `liveOnGoogle` field can select properties that Google shows, or properties that are omitted in google search results. The `matchStatus` field can be used to filter the list of HotelViews returned for the account. Examples of valid conditions and their syntax are as follows: * `hotelId = 'hotel_ABC'` * `hotelId in ('hotel_ABC', 'hotel_XYZ')` * `liveOnGoogle = 'TRUE'` * `liveOnGoogle = 'FALSE'` * `matchStatus = 'NOT_MATCHED'` * `matchStatus in ('NOT_MATCHED', 'MATCHED', 'MAP_OVERLAP')`",
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
            description: 'Number of elements to retrieve in a single page.',
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
            description: 'Token of the page to retrieve.',
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
              'The resource name of the account being queried. The format is `accounts/{account_id}`.',
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
      content: { 'application/json': { schema: ListHotelViewsResponseSchema } },
    },
  },
})

export const getV3ParentHotelViewsSummarizeRoute = createRoute({
  method: 'get',
  path: '/v3/{parent}/hotelViews:summarize',
  tags: ['accounts'],
  description: 'Returns summarized information about hotels.',
  operationId: 'travelpartner.accounts.hotelViews.summarize',
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
              'The resource name of the account being queried. The format is `accounts/{account_id}`.',
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
      content: { 'application/json': { schema: SummarizeHotelViewsResponseSchema } },
    },
  },
})

export const getV3ParentIconsRoute = createRoute({
  method: 'get',
  path: '/v3/{parent}/icons',
  tags: ['accounts'],
  description: 'Returns the `Icon`s for a partner account.',
  operationId: 'travelpartner.accounts.icons.list',
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
              'Required. The resource name of the queried partner account. The format is `accounts/{account_id}`.',
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
      content: { 'application/json': { schema: ListIconsResponseSchema } },
    },
  },
})

export const postV3ParentIconsRoute = createRoute({
  method: 'post',
  path: '/v3/{parent}/icons',
  tags: ['accounts'],
  description:
    "Uploads a new icon and starts its review process. Generates an `icon_id` and includes it in the icon's resource name, which is the format `accounts/{account_id}/icons/{icon_id}` Returns HTTP status 400 and doesn't trigger the review process if the icon has any of these conditions: * Image is not in PNG format, or not convertible to PNG format. * Size less than 72 pixels * Size greater than 1200 pixels * Aspect ratio other than 1:1",
  operationId: 'travelpartner.accounts.icons.create',
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
              'Required. The resource name of the partner account owning the icon. The format is `accounts/{account_id}`.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: IconSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: IconSchema } },
    },
  },
})

export const postV3ParentListingsVerifyRoute = createRoute({
  method: 'post',
  path: '/v3/{parent}/listings:verify',
  tags: ['accounts'],
  description: 'returns verified listings with data issues and serving eligibilities',
  operationId: 'travelpartner.accounts.listings.verify',
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
              'The resource name of the account being queried. The format is `accounts/{account_id}`.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: VerifyListingsRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: VerifyListingsResponseSchema } },
    },
  },
})

export const getV3ParentPriceAccuracyViewsRoute = createRoute({
  method: 'get',
  path: '/v3/{parent}/priceAccuracyViews',
  tags: ['accounts'],
  description: 'Lists the available price accuracy views.',
  operationId: 'travelpartner.accounts.priceAccuracyViews.list',
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
              'The resource name of the account being queried. The format is `accounts/{account_id}`.',
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
      content: { 'application/json': { schema: ListPriceAccuracyViewsResponseSchema } },
    },
  },
})

export const getV3ParentPriceAccuracyViewsSummarizeRoute = createRoute({
  method: 'get',
  path: '/v3/{parent}/priceAccuracyViews:summarize',
  tags: ['accounts'],
  description: 'Returns the price accuracy summary.',
  operationId: 'travelpartner.accounts.priceAccuracyViews.summarize',
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
              'The resource name of the account that is being queried. The format is `accounts/{account_id}`.',
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
      content: { 'application/json': { schema: SummarizePriceAccuracyResponseSchema } },
    },
  },
})

export const getV3ParentPriceCoverageViewsRoute = createRoute({
  method: 'get',
  path: '/v3/{parent}/priceCoverageViews',
  tags: ['accounts'],
  description: 'Returns the entire price coverage history.',
  operationId: 'travelpartner.accounts.priceCoverageViews.list',
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
              'The resource name of the account being queried. The format is `accounts/{account_id}`.',
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
      content: { 'application/json': { schema: ListPriceCoverageViewsResponseSchema } },
    },
  },
})

export const getV3ParentPriceCoverageViewsLatestRoute = createRoute({
  method: 'get',
  path: '/v3/{parent}/priceCoverageViews:latest',
  tags: ['accounts'],
  description: 'Returns the latest price coverage view in full detail.',
  operationId: 'travelpartner.accounts.priceCoverageViews.getLatest',
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
              'The resource name of the account being queried. The format is `accounts/{account_id}`.',
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
      content: { 'application/json': { schema: PriceCoverageViewSchema } },
    },
  },
})

export const getV3ParentReconciliationReportsRoute = createRoute({
  method: 'get',
  path: '/v3/{parent}/reconciliationReports',
  tags: ['accounts'],
  description: 'Returns a list of the names of created reconciliation reports.',
  operationId: 'travelpartner.accounts.reconciliationReports.list',
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
      endDate: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'End of date range to fetch files for. Format is yyyy-mm-dd[THH[:MM[:SS]]]. If empty, reports until the end of time are fetched.',
            in: 'query',
            name: 'endDate',
            schema: { type: 'string' },
            required: false,
          },
        }),
      startDate: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Beginning of date range to fetch files for. Format is yyyy-MM-dd[THH[:mm[:SS]]]. If empty, reports from the beginning of time onwards are fetched.',
            in: 'query',
            name: 'startDate',
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
              'The resource name of the account being queried. The format is `accounts/{account_id}`.',
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
      content: { 'application/json': { schema: ListReconciliationReportsResponseSchema } },
    },
  },
})

export const postV3ParentReconciliationReportsRoute = createRoute({
  method: 'post',
  path: '/v3/{parent}/reconciliationReports',
  tags: ['accounts'],
  description: 'Creates a reconciliation report and uploads it to Google.',
  operationId: 'travelpartner.accounts.reconciliationReports.create',
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
              'The resource name of the account being queried. The format is `accounts/{account_id}`.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ReconciliationReportSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: CreateReconciliationReportResponseSchema } },
    },
  },
})

export const postV3ParentReconciliationReportsValidateRoute = createRoute({
  method: 'post',
  path: '/v3/{parent}/reconciliationReports:validate',
  tags: ['accounts'],
  description: 'Validates a reconciliation report.',
  operationId: 'travelpartner.accounts.reconciliationReports.validate',
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
              'The resource name of the account being queried. The format is `accounts/{account_id}`.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ReconciliationReportSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ValidateReconciliationReportResponseSchema } },
    },
  },
})
