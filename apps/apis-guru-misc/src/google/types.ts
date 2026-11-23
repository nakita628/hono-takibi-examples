type SetLiveOnGoogleRequest = {
  liveOnGoogle?: boolean | undefined
  partnerHotelIds?: string[] | undefined
}
type SetLiveOnGoogleResponse = {
  failedHotelIds?: string[] | undefined
  updatedHotelIds?: string[] | undefined
}
type Empty = { [x: string]: unknown }
type ReconciliationReport = {
  contents?: string | undefined
  fileName?: string | undefined
  name?: string | undefined
}
type LocalizedText = { languageCode?: string | undefined; text?: string | undefined }
type DisplayNameDisapprovalReason = {
  disapprovalReason?:
    | 'DISAPPROVAL_REASON_UNSPECIFIED'
    | 'PUNCTUATION'
    | 'MARKETING_LANGUAGE'
    | 'LANDING_PAGE_NOT_MATCHED'
    | undefined
  languageCode?: string | undefined
}
type Brand = {
  activeDisplayNames?: LocalizedText[] | undefined
  activeIcon?: string | undefined
  activeIconUri?: string | undefined
  displayNameDisapprovalReason?: DisplayNameDisapprovalReason[] | undefined
  displayNameState?:
    | 'REVIEW_STATE_UNSPECIFIED'
    | 'REVIEW_STATE_NEW'
    | 'APPROVED'
    | 'REJECTED'
    | undefined
  displayNames?: LocalizedText[] | undefined
  icon?: string | undefined
  iconDisapprovalReasons?:
    | (
        | 'IMAGE_DISAPPROVAL_REASON_UNSPECIFIED'
        | 'NOT_LIKE_SITE'
        | 'OFFENSIVE'
        | 'LOW_QUALITY'
        | 'ANIMATED'
        | 'BAD_BACKGROUND'
        | 'TEXT_TOO_SMALL'
      )[]
    | undefined
  iconState?: 'REVIEW_STATE_UNSPECIFIED' | 'REVIEW_STATE_NEW' | 'APPROVED' | 'REJECTED' | undefined
  name?: string | undefined
  propertyCount?: string | undefined
  submittedDisplayNames?: LocalizedText[] | undefined
  submittedIcon?: string | undefined
}
type Date = { day?: number | undefined; month?: number | undefined; year?: number | undefined }
type FreeBookingLinksResult = {
  clickCount?: string | undefined
  date?: Date | undefined
  deviceType?: 'DEVICE_UNSPECIFIED' | 'DEVICE_UNKNOWN' | 'DESKTOP' | 'MOBILE' | 'TABLET' | undefined
  partnerHotelDisplayName?: string | undefined
  partnerHotelId?: string | undefined
  userRegionCode?: string | undefined
}
type QueryFreeBookingLinksReportResponse = {
  nextPageToken?: string | undefined
  results?: FreeBookingLinksResult[] | undefined
}
type Key = {
  advanceBookingWindow?: number | undefined
  checkinDate?: Date | undefined
  date?: Date | undefined
  deviceType?: 'DEVICE_UNSPECIFIED' | 'DEVICE_UNKNOWN' | 'DESKTOP' | 'MOBILE' | 'TABLET' | undefined
  hotelRegionCode?: string | undefined
  lengthOfStayDays?: number | undefined
  occupancy?: number | undefined
  partnerHotelId?: string | undefined
  userRegionCode?: string | undefined
}
type NoPriceCountDetails = {
  livePricingConfigIssueCount?: string | undefined
  livePricingNotAvailableCount?: string | undefined
  livePricingNotTriggeredCount?: string | undefined
  livePricingOtherReasonCount?: string | undefined
  livePricingTechnicalIssueCount?: string | undefined
}
type PriceMissingCountDetails = {
  bandwidthDepletedCount?: string | undefined
  cacheRateMissingCount?: string | undefined
  itineraryBlockedCount?: string | undefined
  livePricingErrorCount?: string | undefined
  livePricingNotSetupCount?: string | undefined
  livePricingTimeoutCount?: string | undefined
}
type PriceProblemCountDetails = {
  hotelSuspendedCount?: string | undefined
  priceUnusuallyHighCount?: string | undefined
  priceUnusuallyLowCount?: string | undefined
  taxesAndFeesMissingCount?: string | undefined
}
type PriceUnavailableCountDetails = {
  participationNotLikelyCount?: string | undefined
  priceUnavailableCount?: string | undefined
}
type MissedParticipationCountDetails = {
  hotelSuspendedCount?: string | undefined
  noAvailabilityCount?: string | undefined
  noLandingPageCount?: string | undefined
  noPriceCount?: string | undefined
  noPriceCountDetails?: NoPriceCountDetails | undefined
  noTaxBreakdownCount?: string | undefined
  otherReasonCount?: string | undefined
  priceMissingCount?: string | undefined
  priceMissingCountDetails?: PriceMissingCountDetails | undefined
  priceProblemCount?: string | undefined
  priceProblemCountDetails?: PriceProblemCountDetails | undefined
  priceUnavailableCount?: string | undefined
  priceUnavailableCountDetails?: PriceUnavailableCountDetails | undefined
}
type ParticipationResult = {
  key?: Key | undefined
  missedParticipationCount?: string | undefined
  missedParticipationCountDetails?: MissedParticipationCountDetails | undefined
  opportunityCount?: string | undefined
  participationCount?: string | undefined
  participationPercent?: number | undefined
  partnerHotelDisplayName?: string | undefined
}
type QueryParticipationReportResponse = {
  nextPageToken?: string | undefined
  results?: ParticipationResult[] | undefined
}
type PropertyPerformanceResult = {
  adsClickCount?: string | undefined
  adsClickthroughRate?: number | undefined
  adsImpressionCount?: string | undefined
  advanceBookingWindow?:
    | 'ADVANCE_BOOKING_WINDOW_UNSPECIFIED'
    | 'ADVANCE_BOOKING_WINDOW_SAME_DAY'
    | 'ADVANCE_BOOKING_WINDOW_NEXT_DAY'
    | 'ADVANCE_BOOKING_WINDOW_DAYS_2_TO_7'
    | 'ADVANCE_BOOKING_WINDOW_DAYS_8_TO_14'
    | 'ADVANCE_BOOKING_WINDOW_DAYS_15_TO_30'
    | 'ADVANCE_BOOKING_WINDOW_DAYS_31_TO_60'
    | 'ADVANCE_BOOKING_WINDOW_DAYS_61_TO_90'
    | 'ADVANCE_BOOKING_WINDOW_DAYS_91_TO_120'
    | 'ADVANCE_BOOKING_WINDOW_DAYS_121_TO_150'
    | 'ADVANCE_BOOKING_WINDOW_DAYS_151_TO_180'
    | 'ADVANCE_BOOKING_WINDOW_DAYS_OVER_180'
    | undefined
  brand?: string | undefined
  clickCount?: string | undefined
  clickthroughRate?: number | undefined
  date?: Date | undefined
  deviceType?: 'DEVICE_UNSPECIFIED' | 'DEVICE_UNKNOWN' | 'DESKTOP' | 'MOBILE' | 'TABLET' | undefined
  highIntentUsers?: boolean | undefined
  impressionCount?: string | undefined
  lengthOfStay?:
    | 'LENGTH_OF_STAY_UNSPECIFIED'
    | 'LENGTH_OF_STAY_NIGHTS_1'
    | 'LENGTH_OF_STAY_NIGHTS_2'
    | 'LENGTH_OF_STAY_NIGHTS_3'
    | 'LENGTH_OF_STAY_NIGHTS_4_TO_7'
    | 'LENGTH_OF_STAY_NIGHTS_8_TO_14'
    | 'LENGTH_OF_STAY_NIGHTS_15_TO_21'
    | 'LENGTH_OF_STAY_NIGHTS_22_TO_30'
    | 'LENGTH_OF_STAY_NIGHTS_OVER_30'
    | undefined
  occupancy?:
    | 'OCCUPANCY_UNSPECIFIED'
    | 'OCCUPANCY_1'
    | 'OCCUPANCY_2'
    | 'OCCUPANCY_3'
    | 'OCCUPANCY_4'
    | 'OCCUPANCY_OVER_4'
    | undefined
  partnerPropertyDisplayName?: string | undefined
  partnerPropertyId?: string | undefined
  propertyRegionCode?: string | undefined
  userRegionCode?: string | undefined
}
type QueryPropertyPerformanceReportResponse = {
  nextPageToken?: string | undefined
  results?: PropertyPerformanceResult[] | undefined
}
type HotelList = { partnerHotelIds?: string[] | undefined }
type AccountLinkTarget = { allHotels?: boolean | undefined; hotelList?: HotelList | undefined }
type AccountLink = {
  accountLinkTarget?: AccountLinkTarget | undefined
  googleAdsCustomerName?: string | undefined
  name?: string | undefined
  status?:
    | 'ACCOUNT_LINK_STATUS_UNSPECIFIED'
    | 'ACCOUNT_LINK_STATUS_UNKNOWN'
    | 'REQUESTED_FROM_HOTEL_CENTER'
    | 'REQUESTED_FROM_GOOGLE_ADS'
    | 'APPROVED'
    | undefined
}
type ListAccountLinksResponse = { accountLinks?: AccountLink[] | undefined }
type ListBrandsResponse = { brands?: Brand[] | undefined }
type DataIssueDetail = {
  dataIssueSeverity?: 'DATA_ISSUE_SEVERITY_UNSPECIFIED' | 'ERROR' | 'WARNING' | 'INFO' | undefined
  dataIssueType?:
    | 'FEED_DATA_ISSUE_UNSPECIFIED'
    | 'FEED_DATA_ISSUE_UNKNOWN'
    | 'NO_DATA_ISSUE'
    | 'DUPLICATE_ADDRESS'
    | 'MISSING_PHYSICAL_STREET_ADDRESS'
    | 'MISSING_STREET_NAME'
    | 'MISSING_STREET_NUMBER'
    | 'MISSING_ADDRESS'
    | 'MISSING_COUNTRY'
    | 'INVALID_POSTAL_CODE'
    | 'INVALID_POSTAL_CODE_SUFFIX'
    | 'UNEXPECTED_POSTAL_CODE_SUFFIX'
    | 'UNEXPECTED_POSTAL_CODE'
    | 'INVALID_AMENITIES'
    | 'INVALID_EMAIL_ADDRESS'
    | 'DUPLICATE_LATLONG'
    | 'LATLONG_INCONSISTENT_WITH_ADDRESS'
    | 'MISSING_LATLONG'
    | 'COULD_NOT_GEOCODE'
    | 'MISSING_HOTEL_NAME'
    | 'HOTEL_NAME_EMPTY'
    | 'INVALID_HOTEL_NAME'
    | 'HOTEL_NAME_TOO_LONG'
    | 'PARSE_ERROR_IN_XML'
    | 'UNEXPECTED_ATTRIBUTE_IN_XML'
    | 'DUPLICATE_PHONE_NUMBER'
    | 'MISSING_PHONE_NUMBER'
    | 'MISSING_VOICE_PHONE_NUMBER'
    | 'INVALID_PHONE_NUMBER_FORMAT'
    | 'INVALID_PHONE_NUMBER'
    | 'INVALID_PHONE_NUMBER_COUNTRY_CODE'
    | 'PHONE_NUMBER_TOO_LONG'
    | 'PHONE_NUMBER_TOO_SHORT'
    | 'INVALID_WEBSITE_URL'
    | 'ADWORDS_ATTRIBUTE_TOO_LONG'
    | 'BRAND_NOT_ALLOWED'
    | 'FLAGGED_DUE_TO_SUSPICIOUS_METADATA'
    | 'NOT_ENOUGH_IMAGES_PROVIDED'
    | 'IMAGE_PROCESSING_IN_PROGRESS'
    | 'CANNOT_FETCH_IMAGES'
    | 'INCOMPATIBLE_IMAGE_SIZE_OR_LOW_QUALITY'
    | 'MISSING_LANG_IN_RAW_LISTING'
    | 'IS_HOTEL'
    | 'MISSING_REQ_ATTR'
    | 'MISSING_NAME'
    | 'MISSING_LANG_IN_NAME'
    | 'VR_NAME_TOO_LONG'
    | 'TEST_PROPERTY'
    | 'NON_VR_ACCOMMODATION_TYPE_BASED_ON_LISTING_NAME'
    | 'BRAND_NAME_TOO_LONG'
    | 'MISSING_BRAND_NAME'
    | 'INVALID_REVIEW_RATING'
    | 'INVALID_CHECKIN_FORMAT'
    | 'INVALID_CHECKOUT_FORMAT'
    | undefined
  isSelfResolving?: boolean | undefined
}
type HotelView = {
  dataIssueDetail?: DataIssueDetail[] | undefined
  dataIssues?:
    | (
        | 'FEED_DATA_ISSUE_UNSPECIFIED'
        | 'FEED_DATA_ISSUE_UNKNOWN'
        | 'NO_DATA_ISSUE'
        | 'DUPLICATE_ADDRESS'
        | 'MISSING_PHYSICAL_STREET_ADDRESS'
        | 'MISSING_STREET_NAME'
        | 'MISSING_STREET_NUMBER'
        | 'MISSING_ADDRESS'
        | 'MISSING_COUNTRY'
        | 'INVALID_POSTAL_CODE'
        | 'INVALID_POSTAL_CODE_SUFFIX'
        | 'UNEXPECTED_POSTAL_CODE_SUFFIX'
        | 'UNEXPECTED_POSTAL_CODE'
        | 'INVALID_AMENITIES'
        | 'INVALID_EMAIL_ADDRESS'
        | 'DUPLICATE_LATLONG'
        | 'LATLONG_INCONSISTENT_WITH_ADDRESS'
        | 'MISSING_LATLONG'
        | 'COULD_NOT_GEOCODE'
        | 'MISSING_HOTEL_NAME'
        | 'HOTEL_NAME_EMPTY'
        | 'INVALID_HOTEL_NAME'
        | 'HOTEL_NAME_TOO_LONG'
        | 'PARSE_ERROR_IN_XML'
        | 'UNEXPECTED_ATTRIBUTE_IN_XML'
        | 'DUPLICATE_PHONE_NUMBER'
        | 'MISSING_PHONE_NUMBER'
        | 'MISSING_VOICE_PHONE_NUMBER'
        | 'INVALID_PHONE_NUMBER_FORMAT'
        | 'INVALID_PHONE_NUMBER'
        | 'INVALID_PHONE_NUMBER_COUNTRY_CODE'
        | 'PHONE_NUMBER_TOO_LONG'
        | 'PHONE_NUMBER_TOO_SHORT'
        | 'INVALID_WEBSITE_URL'
        | 'ADWORDS_ATTRIBUTE_TOO_LONG'
        | 'BRAND_NOT_ALLOWED'
        | 'FLAGGED_DUE_TO_SUSPICIOUS_METADATA'
        | 'NOT_ENOUGH_IMAGES_PROVIDED'
        | 'IMAGE_PROCESSING_IN_PROGRESS'
        | 'CANNOT_FETCH_IMAGES'
        | 'INCOMPATIBLE_IMAGE_SIZE_OR_LOW_QUALITY'
        | 'MISSING_LANG_IN_RAW_LISTING'
        | 'IS_HOTEL'
        | 'MISSING_REQ_ATTR'
        | 'MISSING_NAME'
        | 'MISSING_LANG_IN_NAME'
        | 'VR_NAME_TOO_LONG'
        | 'TEST_PROPERTY'
        | 'NON_VR_ACCOMMODATION_TYPE_BASED_ON_LISTING_NAME'
        | 'BRAND_NAME_TOO_LONG'
        | 'MISSING_BRAND_NAME'
        | 'INVALID_REVIEW_RATING'
        | 'INVALID_CHECKIN_FORMAT'
        | 'INVALID_CHECKOUT_FORMAT'
      )[]
    | undefined
  googleClusterId?: string | undefined
  googleHotelDisplayName?: string | undefined
  googleHotelId?: string | undefined
  liveOnGoogle?: boolean | undefined
  matchStatus?:
    | 'MATCH_STATUS_UNSPECIFIED'
    | 'MATCH_STATUS_UNKNOWN'
    | 'NOT_MATCHED'
    | 'MATCHED'
    | 'MAP_OVERLAP'
    | undefined
  overclusteredPartnerHotelIds?: string[] | undefined
  partnerHotelDisplayName?: string | undefined
  partnerHotelId?: string | undefined
  primaryOverclusteredPartnerHotelId?: string | undefined
  propertyDetails?: string | undefined
}
type ListHotelViewsResponse = {
  hotelViews?: HotelView[] | undefined
  nextPageToken?: string | undefined
}
type SummarizeHotelViewsResponse = {
  lastFeedSubmissionTime?: string | undefined
  lastManifestUpdateTime?: string | undefined
  liveOnGooglePropertyCount?: string | undefined
  matchedPropertyCount?: string | undefined
  overclusteredPropertyCount?: string | undefined
  overclusteredPropertyWithErrorsCount?: string | undefined
  unmatchedPropertyCount?: string | undefined
  unmatchedPropertyWithErrorsCount?: string | undefined
}
type Icon = {
  disapprovalReasons?:
    | (
        | 'IMAGE_DISAPPROVAL_REASON_UNSPECIFIED'
        | 'NOT_LIKE_SITE'
        | 'OFFENSIVE'
        | 'LOW_QUALITY'
        | 'ANIMATED'
        | 'BAD_BACKGROUND'
        | 'TEXT_TOO_SMALL'
      )[]
    | undefined
  iconUri?: string | undefined
  imageData?: string | undefined
  name?: string | undefined
  reference?: string | undefined
  state?: 'STATE_UNSPECIFIED' | 'NEW' | 'APPROVED' | 'REJECTED' | undefined
}
type ListIconsResponse = { icons?: Icon[] | undefined }
type VerifyListingsRequest = { xmlListing?: string | undefined }
type Image = {
  galleryUri?: LocalizedText[] | undefined
  title?: LocalizedText[] | undefined
  uri?: string | undefined
}
type LatLng = { latitude?: number | undefined; longitude?: number | undefined }
type Rating = {
  ratingScale?: number | undefined
  score?: number | undefined
  type?: 'TYPE_UNSPECIFIED' | 'OVERALL' | undefined
}
type Review = {
  author?: string | undefined
  body?: string | undefined
  languageCode?: string | undefined
  link?: string | undefined
  rating?: Rating[] | undefined
  reviewTime?: string | undefined
  title?: string | undefined
  type?: 'UNKNOWN' | 'EDITORIAL' | 'USER' | undefined
  visitTime?: string | undefined
}
type ParsedListing = {
  brand?: string | undefined
  category?: LocalizedText[] | undefined
  dataIssueDetail?: DataIssueDetail[] | undefined
  description?: LocalizedText[] | undefined
  image?: Image[] | undefined
  imprecisionRadiusMeters?: number | undefined
  isServed?: boolean | undefined
  listingName?: LocalizedText[] | undefined
  location?: LatLng | undefined
  partnerListId?: string | undefined
  regionCode?: string | undefined
  review?: Review[] | undefined
  unitAttributes?: { [x: string]: string } | undefined
}
type VerifyListingsResponse = { parsedListing?: ParsedListing | undefined }
type PriceRecord = {
  basePrice?: number | undefined
  currencyCode?: string | undefined
  taxesAndFees?: number | undefined
  time?: string | undefined
}
type PriceAccuracyRow = {
  adultOccupancy?: number | undefined
  affectsScore?: boolean | undefined
  cachedPriceRecord?: PriceRecord | undefined
  checkinDate?: Date | undefined
  childOccupancy?: number | undefined
  correctionTime?: string | undefined
  deviceType?: 'DEVICE_UNSPECIFIED' | 'DEVICE_UNKNOWN' | 'DESKTOP' | 'MOBILE' | 'TABLET' | undefined
  fetchedPriceRecord?: PriceRecord | undefined
  finalDomain?: string | undefined
  hotel?: string | undefined
  hotelCountryCode?: string | undefined
  lengthOfStayDays?: number | undefined
  mismatchReason?:
    | 'MISMATCH_REASON_UNSPECIFIED'
    | 'MISMATCH_REASON_UNKNOWN'
    | 'TAX_MISMATCH'
    | 'ROOM_UNAVAILABLE'
    | 'SITE_ERROR'
    | 'PRICE_FEED_DELAYED'
    | 'DISCOUNT_MISSING'
    | 'INCORRECT_DISCOUNT_VALUE'
    | 'WRONG_ITINERARY'
    | undefined
  rateRuleId?: string | undefined
  signalSource?:
    | 'SIGNAL_SOURCE_UNSPECIFIED'
    | 'SIGNAL_SOURCE_UNKNOWN'
    | 'FETCHED'
    | 'PIXEL'
    | undefined
  url?: string | undefined
  userRegionCode?: string | undefined
}
type PriceAccuracyView = { name?: string | undefined; results?: PriceAccuracyRow[] | undefined }
type ListPriceAccuracyViewsResponse = { priceAccuracyViews?: PriceAccuracyView[] | undefined }
type SummarizePriceAccuracyResponse = {
  currentBookOnGoogleScore?:
    | 'PRICE_ACCURACY_STATE_UNSPECIFIED'
    | 'PRICE_ACCURACY_STATE_UNKNOWN'
    | 'EXCELLENT'
    | 'GOOD'
    | 'POOR'
    | 'AT_RISK'
    | 'FAILED'
    | undefined
  currentOverallScore?:
    | 'PRICE_ACCURACY_STATE_UNSPECIFIED'
    | 'PRICE_ACCURACY_STATE_UNKNOWN'
    | 'EXCELLENT'
    | 'GOOD'
    | 'POOR'
    | 'AT_RISK'
    | 'FAILED'
    | undefined
  currentScore?:
    | 'PRICE_ACCURACY_STATE_UNSPECIFIED'
    | 'PRICE_ACCURACY_STATE_UNKNOWN'
    | 'EXCELLENT'
    | 'GOOD'
    | 'POOR'
    | 'AT_RISK'
    | 'FAILED'
    | undefined
  currentWebsiteScore?:
    | 'PRICE_ACCURACY_STATE_UNSPECIFIED'
    | 'PRICE_ACCURACY_STATE_UNKNOWN'
    | 'EXCELLENT'
    | 'GOOD'
    | 'POOR'
    | 'AT_RISK'
    | 'FAILED'
    | undefined
  predictedBookOnGoogleScore?:
    | 'PRICE_ACCURACY_STATE_UNSPECIFIED'
    | 'PRICE_ACCURACY_STATE_UNKNOWN'
    | 'EXCELLENT'
    | 'GOOD'
    | 'POOR'
    | 'AT_RISK'
    | 'FAILED'
    | undefined
  predictedOverallScore?:
    | 'PRICE_ACCURACY_STATE_UNSPECIFIED'
    | 'PRICE_ACCURACY_STATE_UNKNOWN'
    | 'EXCELLENT'
    | 'GOOD'
    | 'POOR'
    | 'AT_RISK'
    | 'FAILED'
    | undefined
  predictedScore?:
    | 'PRICE_ACCURACY_STATE_UNSPECIFIED'
    | 'PRICE_ACCURACY_STATE_UNKNOWN'
    | 'EXCELLENT'
    | 'GOOD'
    | 'POOR'
    | 'AT_RISK'
    | 'FAILED'
    | undefined
  predictedWebsiteScore?:
    | 'PRICE_ACCURACY_STATE_UNSPECIFIED'
    | 'PRICE_ACCURACY_STATE_UNKNOWN'
    | 'EXCELLENT'
    | 'GOOD'
    | 'POOR'
    | 'AT_RISK'
    | 'FAILED'
    | undefined
  updateTime?: string | undefined
}
type PriceCoverageBucket = {
  advanceBookingWindowRange?:
    | 'ADVANCE_BOOKING_WINDOW_RANGE_UNSPECIFIED'
    | 'ADVANCE_BOOKING_WINDOW_RANGE_UNKNOWN'
    | 'DAYS_0_TO_30'
    | 'DAYS_31_TO_60'
    | 'DAYS_61_TO_90'
    | 'DAYS_91_TO_120'
    | 'DAYS_121_TO_150'
    | 'DAYS_151_TO_180'
    | 'DAYS_181_TO_210'
    | 'DAYS_211_TO_240'
    | 'DAYS_241_TO_270'
    | 'DAYS_271_TO_300'
    | 'DAYS_301_TO_330'
    | undefined
  availablePriceCount?: string | undefined
  lengthOfStayRange?:
    | 'LENGTH_OF_STAY_RANGE_UNSPECIFIED'
    | 'LENGTH_OF_STAY_RANGE_UNKNOWN'
    | 'LENGTH_OF_STAY_1_TO_7'
    | 'LENGTH_OF_STAY_8_TO_14'
    | 'LENGTH_OF_STAY_15_TO_30'
    | undefined
  priceCoveragePercent?: number | undefined
}
type PriceCoverageView = {
  calculationDate?: Date | undefined
  matchedPropertyCount?: number | undefined
  priceCoverageBinaryPercent?: number | undefined
  priceCoverageBuckets?: PriceCoverageBucket[] | undefined
  priceCoveragePercent?: number | undefined
}
type ListPriceCoverageViewsResponse = { priceCoverageViews?: PriceCoverageView[] | undefined }
type ListReconciliationReportsResponse = {
  reconciliationReports?: ReconciliationReport[] | undefined
}
type ReconciliationReportValidationIssue = {
  description?: string | undefined
  fieldName?: string | undefined
  lineNum?: number | undefined
}
type CreateReconciliationReportResponse = {
  issues?: ReconciliationReportValidationIssue[] | undefined
  reconciliationReport?: ReconciliationReport | undefined
  successfulRecordCount?: number | undefined
}
type ValidateReconciliationReportResponse = {
  issues?: ReconciliationReportValidationIssue[] | undefined
  successfulRecordCount?: number | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v3/:account/hotels:setLiveOnGoogle': {
      $post: {
        input: { param: { account: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: SetLiveOnGoogleRequest }
        output: SetLiveOnGoogleResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v3/:name': {
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
            includeMatchedPrices?: boolean | undefined
            includeNonScoring?: boolean | undefined
            includePixels?: boolean | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: ReconciliationReport
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { name: string } } & {
          query: {
            allowMissing?: boolean | undefined
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
        } & { json: Brand }
        output: Brand
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v3/:name/freeBookingLinksReportViews:query': {
      $get: {
        input: { param: { name: string } } & {
          query: {
            aggregateBy?: string | undefined
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
        output: QueryFreeBookingLinksReportResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v3/:name/participationReportViews:query': {
      $get: {
        input: { param: { name: string } } & {
          query: {
            aggregateBy?: string | undefined
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
        output: QueryParticipationReportResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v3/:name/propertyPerformanceReportViews:query': {
      $get: {
        input: { param: { name: string } } & {
          query: {
            aggregateBy?: string | undefined
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
        output: QueryPropertyPerformanceReportResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v3/:parent/accountLinks': {
      $get: {
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
        }
        output: ListAccountLinksResponse
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
        } & { json: AccountLink }
        output: AccountLink
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v3/:parent/brands': {
      $get: {
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
        }
        output: ListBrandsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            brandId?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: Brand }
        output: Brand
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v3/:parent/hotelViews': {
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
        output: ListHotelViewsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v3/:parent/hotelViews:summarize': {
      $get: {
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
        }
        output: SummarizeHotelViewsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v3/:parent/icons': {
      $get: {
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
        }
        output: ListIconsResponse
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
        } & { json: Icon }
        output: Icon
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v3/:parent/listings:verify': {
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
        } & { json: VerifyListingsRequest }
        output: VerifyListingsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v3/:parent/priceAccuracyViews': {
      $get: {
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
        }
        output: ListPriceAccuracyViewsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v3/:parent/priceAccuracyViews:summarize': {
      $get: {
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
        }
        output: SummarizePriceAccuracyResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v3/:parent/priceCoverageViews': {
      $get: {
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
        }
        output: ListPriceCoverageViewsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v3/:parent/priceCoverageViews:latest': {
      $get: {
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
        }
        output: PriceCoverageView
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v3/:parent/reconciliationReports': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            endDate?: string | undefined
            startDate?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: ListReconciliationReportsResponse
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
        } & { json: ReconciliationReport }
        output: CreateReconciliationReportResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v3/:parent/reconciliationReports:validate': {
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
        } & { json: ReconciliationReport }
        output: ValidateReconciliationReportResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
