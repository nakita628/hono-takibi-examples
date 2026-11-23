type PostalAddress = {
  addressLines?: string[] | undefined
  administrativeArea?: string | undefined
  languageCode?: string | undefined
  locality?: string | undefined
  organization?: string | undefined
  postalCode?: string | undefined
  recipients?: string[] | undefined
  regionCode?: string | undefined
  revision?: number | undefined
  sortingCode?: string | undefined
  sublocality?: string | undefined
}
type OrganizationInfo = {
  phoneNumber?: string | undefined
  postalAddress?: PostalAddress | undefined
  registeredDomain?: string | undefined
}
type AccountState = {
  status?:
    | 'ACCOUNT_STATUS_UNSPECIFIED'
    | 'VERIFIED'
    | 'UNVERIFIED'
    | 'VERIFICATION_REQUESTED'
    | undefined
}
type Account = {
  accountName?: string | undefined
  accountNumber?: string | undefined
  name?: string | undefined
  organizationInfo?: OrganizationInfo | undefined
  permissionLevel?: 'PERMISSION_LEVEL_UNSPECIFIED' | 'OWNER_LEVEL' | 'MEMBER_LEVEL' | undefined
  role?:
    | 'ACCOUNT_ROLE_UNSPECIFIED'
    | 'OWNER'
    | 'CO_OWNER'
    | 'MANAGER'
    | 'COMMUNITY_MANAGER'
    | undefined
  state?: AccountState | undefined
  type?:
    | 'ACCOUNT_TYPE_UNSPECIFIED'
    | 'PERSONAL'
    | 'LOCATION_GROUP'
    | 'USER_GROUP'
    | 'ORGANIZATION'
    | undefined
}
type ListAccountsResponse = { accounts?: Account[] | undefined; nextPageToken?: string | undefined }
type AttributeValueMetadata = {
  displayName?: string | undefined
  value?: { [x: string]: unknown } | undefined
}
type AttributeMetadata = {
  attributeId?: string | undefined
  displayName?: string | undefined
  groupDisplayName?: string | undefined
  isDeprecated?: boolean | undefined
  isRepeatable?: boolean | undefined
  valueMetadata?: AttributeValueMetadata[] | undefined
  valueType?:
    | 'ATTRIBUTE_VALUE_TYPE_UNSPECIFIED'
    | 'BOOL'
    | 'ENUM'
    | 'URL'
    | 'REPEATED_ENUM'
    | undefined
}
type ListAttributeMetadataResponse = {
  attributes?: AttributeMetadata[] | undefined
  nextPageToken?: string | undefined
}
type MoreHoursType = {
  displayName?: string | undefined
  hoursTypeId?: string | undefined
  localizedDisplayName?: string | undefined
}
type ServiceType = { displayName?: string | undefined; serviceTypeId?: string | undefined }
type Category = {
  categoryId?: string | undefined
  displayName?: string | undefined
  moreHoursTypes?: MoreHoursType[] | undefined
  serviceTypes?: ServiceType[] | undefined
}
type ListBusinessCategoriesResponse = {
  categories?: Category[] | undefined
  nextPageToken?: string | undefined
  totalCategoryCount?: number | undefined
}
type BatchGetBusinessCategoriesResponse = { categories?: Category[] | undefined }
type ChainName = { displayName?: string | undefined; languageCode?: string | undefined }
type ChainUrl = { url?: string | undefined }
type Chain = {
  chainNames?: ChainName[] | undefined
  locationCount?: number | undefined
  name?: string | undefined
  websites?: ChainUrl[] | undefined
}
type SearchChainsResponse = { chains?: Chain[] | undefined }
type AdWordsLocationExtensions = { adPhone?: string | undefined }
type RepeatedEnumAttributeValue = {
  setValues?: string[] | undefined
  unsetValues?: string[] | undefined
}
type UrlAttributeValue = { url?: string | undefined }
type Attribute = {
  attributeId?: string | undefined
  repeatedEnumValue?: RepeatedEnumAttributeValue | undefined
  urlValues?: UrlAttributeValue[] | undefined
  valueType?:
    | 'ATTRIBUTE_VALUE_TYPE_UNSPECIFIED'
    | 'BOOL'
    | 'ENUM'
    | 'URL'
    | 'REPEATED_ENUM'
    | undefined
  values?: { [x: string]: unknown }[] | undefined
}
type LatLng = { latitude?: number | undefined; longitude?: number | undefined }
type LocationKey = {
  explicitNoPlaceId?: boolean | undefined
  placeId?: string | undefined
  plusPageId?: string | undefined
  requestId?: string | undefined
}
type LocationState = {
  canDelete?: boolean | undefined
  canHaveFoodMenus?: boolean | undefined
  canModifyServiceList?: boolean | undefined
  canOperateHealthData?: boolean | undefined
  canOperateLodgingData?: boolean | undefined
  canUpdate?: boolean | undefined
  hasPendingEdits?: boolean | undefined
  hasPendingVerification?: boolean | undefined
  isDisabled?: boolean | undefined
  isDisconnected?: boolean | undefined
  isDuplicate?: boolean | undefined
  isGoogleUpdated?: boolean | undefined
  isLocalPostApiDisabled?: boolean | undefined
  isPendingReview?: boolean | undefined
  isPublished?: boolean | undefined
  isSuspended?: boolean | undefined
  isVerified?: boolean | undefined
  needsReverification?: boolean | undefined
}
type Duplicate = {
  access?: 'ACCESS_UNSPECIFIED' | 'ACCESS_UNKNOWN' | 'ALLOWED' | 'INSUFFICIENT' | undefined
  locationName?: string | undefined
  placeId?: string | undefined
}
type Metadata = {
  duplicate?: Duplicate | undefined
  mapsUrl?: string | undefined
  newReviewUrl?: string | undefined
}
type TimePeriod = {
  closeDay?:
    | 'DAY_OF_WEEK_UNSPECIFIED'
    | 'MONDAY'
    | 'TUESDAY'
    | 'WEDNESDAY'
    | 'THURSDAY'
    | 'FRIDAY'
    | 'SATURDAY'
    | 'SUNDAY'
    | undefined
  closeTime?: string | undefined
  openDay?:
    | 'DAY_OF_WEEK_UNSPECIFIED'
    | 'MONDAY'
    | 'TUESDAY'
    | 'WEDNESDAY'
    | 'THURSDAY'
    | 'FRIDAY'
    | 'SATURDAY'
    | 'SUNDAY'
    | undefined
  openTime?: string | undefined
}
type MoreHours = { hoursTypeId?: string | undefined; periods?: TimePeriod[] | undefined }
type Date = { day?: number | undefined; month?: number | undefined; year?: number | undefined }
type OpenInfo = {
  canReopen?: boolean | undefined
  openingDate?: Date | undefined
  status?:
    | 'OPEN_FOR_BUSINESS_UNSPECIFIED'
    | 'OPEN'
    | 'CLOSED_PERMANENTLY'
    | 'CLOSED_TEMPORARILY'
    | undefined
}
type Label = {
  description?: string | undefined
  displayName?: string | undefined
  languageCode?: string | undefined
}
type Money = {
  currencyCode?: string | undefined
  nanos?: number | undefined
  units?: string | undefined
}
type Item = { itemId?: string | undefined; labels?: Label[] | undefined; price?: Money | undefined }
type Section = {
  items?: Item[] | undefined
  labels?: Label[] | undefined
  sectionId?: string | undefined
  sectionType?: 'SECTION_TYPE_UNSPECIFIED' | 'FOOD' | 'SERVICES' | undefined
}
type PriceList = {
  labels?: Label[] | undefined
  priceListId?: string | undefined
  sections?: Section[] | undefined
  sourceUrl?: string | undefined
}
type Profile = { description?: string | undefined }
type BusinessHours = { periods?: TimePeriod[] | undefined }
type RelationshipData = { parentChain?: string | undefined }
type PlaceInfo = { name?: string | undefined; placeId?: string | undefined }
type Places = { placeInfos?: PlaceInfo[] | undefined }
type PointRadius = { latlng?: LatLng | undefined; radiusKm?: number | undefined }
type ServiceAreaBusiness = {
  businessType?:
    | 'BUSINESS_TYPE_UNSPECIFIED'
    | 'CUSTOMER_LOCATION_ONLY'
    | 'CUSTOMER_AND_BUSINESS_LOCATION'
    | undefined
  places?: Places | undefined
  radius?: PointRadius | undefined
}
type SpecialHourPeriod = {
  closeTime?: string | undefined
  endDate?: Date | undefined
  isClosed?: boolean | undefined
  openTime?: string | undefined
  startDate?: Date | undefined
}
type SpecialHours = { specialHourPeriods?: SpecialHourPeriod[] | undefined }
type Location = {
  adWordsLocationExtensions?: AdWordsLocationExtensions | undefined
  additionalCategories?: Category[] | undefined
  additionalPhones?: string[] | undefined
  address?: PostalAddress | undefined
  attributes?: Attribute[] | undefined
  labels?: string[] | undefined
  languageCode?: string | undefined
  latlng?: LatLng | undefined
  locationKey?: LocationKey | undefined
  locationName?: string | undefined
  locationState?: LocationState | undefined
  metadata?: Metadata | undefined
  moreHours?: MoreHours[] | undefined
  name?: string | undefined
  openInfo?: OpenInfo | undefined
  priceLists?: PriceList[] | undefined
  primaryCategory?: Category | undefined
  primaryPhone?: string | undefined
  profile?: Profile | undefined
  regularHours?: BusinessHours | undefined
  relationshipData?: RelationshipData | undefined
  serviceArea?: ServiceAreaBusiness | undefined
  specialHours?: SpecialHours | undefined
  storeCode?: string | undefined
  websiteUrl?: string | undefined
}
type SearchGoogleLocationsRequest = {
  location?: Location | undefined
  query?: string | undefined
  resultCount?: number | undefined
}
type GoogleLocation = {
  location?: Location | undefined
  name?: string | undefined
  requestAdminRightsUrl?: string | undefined
}
type SearchGoogleLocationsResponse = { googleLocations?: GoogleLocation[] | undefined }
type Empty = { [x: string]: unknown }
type Author = {
  displayName?: string | undefined
  profilePhotoUrl?: string | undefined
  type?: 'AUTHOR_TYPE_UNSPECIFIED' | 'REGULAR_USER' | 'LOCAL_GUIDE' | 'MERCHANT' | undefined
}
type Answer = {
  author?: Author | undefined
  createTime?: string | undefined
  name?: string | undefined
  text?: string | undefined
  updateTime?: string | undefined
  upvoteCount?: number | undefined
}
type Question = {
  author?: Author | undefined
  createTime?: string | undefined
  name?: string | undefined
  text?: string | undefined
  topAnswers?: Answer[] | undefined
  totalAnswerCount?: number | undefined
  updateTime?: string | undefined
  upvoteCount?: number | undefined
}
type Notifications = {
  name?: string | undefined
  notificationTypes?:
    | (
        | 'NOTIFICATION_TYPE_UNSPECIFIED'
        | 'GOOGLE_UPDATE'
        | 'NEW_REVIEW'
        | 'UPDATED_REVIEW'
        | 'NEW_CUSTOMER_MEDIA'
        | 'NEW_QUESTION'
        | 'UPDATED_QUESTION'
        | 'NEW_ANSWER'
        | 'UPDATED_ANSWER'
        | 'UPDATED_LOCATION_STATE'
      )[]
    | undefined
  topicName?: string | undefined
}
type MetricRequest = {
  metric?:
    | 'METRIC_UNSPECIFIED'
    | 'ALL'
    | 'QUERIES_DIRECT'
    | 'QUERIES_INDIRECT'
    | 'QUERIES_CHAIN'
    | 'VIEWS_MAPS'
    | 'VIEWS_SEARCH'
    | 'ACTIONS_WEBSITE'
    | 'ACTIONS_PHONE'
    | 'ACTIONS_DRIVING_DIRECTIONS'
    | 'PHOTOS_VIEWS_MERCHANT'
    | 'PHOTOS_VIEWS_CUSTOMERS'
    | 'PHOTOS_COUNT_MERCHANT'
    | 'PHOTOS_COUNT_CUSTOMERS'
    | 'LOCAL_POST_VIEWS_SEARCH'
    | 'LOCAL_POST_ACTIONS_CALL_TO_ACTION'
    | undefined
  options?:
    | (
        | 'METRIC_OPTION_UNSPECIFIED'
        | 'AGGREGATED_TOTAL'
        | 'AGGREGATED_DAILY'
        | 'BREAKDOWN_DAY_OF_WEEK'
        | 'BREAKDOWN_HOUR_OF_DAY'
      )[]
    | undefined
}
type TimeRange = { endTime?: string | undefined; startTime?: string | undefined }
type BasicMetricsRequest = {
  metricRequests?: MetricRequest[] | undefined
  timeRange?: TimeRange | undefined
}
type ReportLocalPostInsightsRequest = {
  basicRequest?: BasicMetricsRequest | undefined
  localPostNames?: string[] | undefined
}
type TimeOfDay = {
  hours?: number | undefined
  minutes?: number | undefined
  nanos?: number | undefined
  seconds?: number | undefined
}
type TimeDimension = {
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
  timeOfDay?: TimeOfDay | undefined
  timeRange?: TimeRange | undefined
}
type DimensionalMetricValue = {
  metricOption?:
    | 'METRIC_OPTION_UNSPECIFIED'
    | 'AGGREGATED_TOTAL'
    | 'AGGREGATED_DAILY'
    | 'BREAKDOWN_DAY_OF_WEEK'
    | 'BREAKDOWN_HOUR_OF_DAY'
    | undefined
  timeDimension?: TimeDimension | undefined
  value?: string | undefined
}
type MetricValue = {
  dimensionalValues?: DimensionalMetricValue[] | undefined
  metric?:
    | 'METRIC_UNSPECIFIED'
    | 'ALL'
    | 'QUERIES_DIRECT'
    | 'QUERIES_INDIRECT'
    | 'QUERIES_CHAIN'
    | 'VIEWS_MAPS'
    | 'VIEWS_SEARCH'
    | 'ACTIONS_WEBSITE'
    | 'ACTIONS_PHONE'
    | 'ACTIONS_DRIVING_DIRECTIONS'
    | 'PHOTOS_VIEWS_MERCHANT'
    | 'PHOTOS_VIEWS_CUSTOMERS'
    | 'PHOTOS_COUNT_MERCHANT'
    | 'PHOTOS_COUNT_CUSTOMERS'
    | 'LOCAL_POST_VIEWS_SEARCH'
    | 'LOCAL_POST_ACTIONS_CALL_TO_ACTION'
    | undefined
  totalValue?: DimensionalMetricValue | undefined
}
type LocalPostMetrics = {
  localPostName?: string | undefined
  metricValues?: MetricValue[] | undefined
}
type ReportLocalPostInsightsResponse = {
  localPostMetrics?: LocalPostMetrics[] | undefined
  name?: string | undefined
  timeZone?: string | undefined
}
type BatchGetLocationsRequest = { locationNames?: string[] | undefined }
type BatchGetLocationsResponse = { locations?: Location[] | undefined }
type BatchGetReviewsRequest = {
  ignoreRatingOnlyReviews?: boolean | undefined
  locationNames?: string[] | undefined
  orderBy?: string | undefined
  pageSize?: number | undefined
  pageToken?: string | undefined
}
type ReviewReply = { comment?: string | undefined; updateTime?: string | undefined }
type Reviewer = {
  displayName?: string | undefined
  isAnonymous?: boolean | undefined
  profilePhotoUrl?: string | undefined
}
type Review = {
  comment?: string | undefined
  createTime?: string | undefined
  name?: string | undefined
  reviewId?: string | undefined
  reviewReply?: ReviewReply | undefined
  reviewer?: Reviewer | undefined
  starRating?: 'STAR_RATING_UNSPECIFIED' | 'ONE' | 'TWO' | 'THREE' | 'FOUR' | 'FIVE' | undefined
  updateTime?: string | undefined
}
type LocationReview = { name?: string | undefined; review?: Review | undefined }
type BatchGetReviewsResponse = {
  locationReviews?: LocationReview[] | undefined
  nextPageToken?: string | undefined
}
type DrivingDirectionMetricsRequest = {
  languageCode?: string | undefined
  numDays?: 'SEVEN' | 'THIRTY' | 'NINETY' | undefined
}
type ReportLocationInsightsRequest = {
  basicRequest?: BasicMetricsRequest | undefined
  drivingDirectionsRequest?: DrivingDirectionMetricsRequest | undefined
  locationNames?: string[] | undefined
}
type RegionCount = {
  count?: string | undefined
  label?: string | undefined
  latlng?: LatLng | undefined
}
type TopDirectionSources = {
  dayCount?: number | undefined
  regionCounts?: RegionCount[] | undefined
}
type LocationDrivingDirectionMetrics = {
  locationName?: string | undefined
  timeZone?: string | undefined
  topDirectionSources?: TopDirectionSources[] | undefined
}
type LocationMetrics = {
  locationName?: string | undefined
  metricValues?: MetricValue[] | undefined
  timeZone?: string | undefined
}
type ReportLocationInsightsResponse = {
  locationDrivingDirectionMetrics?: LocationDrivingDirectionMetrics[] | undefined
  locationMetrics?: LocationMetrics[] | undefined
}
type AcceptInvitationRequest = { [x: string]: unknown }
type AssociateLocationRequest = { placeId?: string | undefined }
type ClearLocationAssociationRequest = { [x: string]: unknown }
type CompleteVerificationRequest = { pin?: string | undefined }
type Verification = {
  createTime?: string | undefined
  method?:
    | 'VERIFICATION_METHOD_UNSPECIFIED'
    | 'ADDRESS'
    | 'EMAIL'
    | 'PHONE_CALL'
    | 'SMS'
    | 'AUTO'
    | undefined
  name?: string | undefined
  state?: 'VERIFICATION_STATE_UNSPECIFIED' | 'PENDING' | 'COMPLETED' | 'FAILED' | undefined
}
type CompleteVerificationResponse = { verification?: Verification | undefined }
type DeclineInvitationRequest = { [x: string]: unknown }
type ServiceBusinessContext = { address?: PostalAddress | undefined }
type FetchVerificationOptionsRequest = {
  context?: ServiceBusinessContext | undefined
  languageCode?: string | undefined
}
type AddressVerificationData = {
  address?: PostalAddress | undefined
  businessName?: string | undefined
}
type EmailVerificationData = {
  domainName?: string | undefined
  isUserNameEditable?: boolean | undefined
  userName?: string | undefined
}
type PhoneVerificationData = { phoneNumber?: string | undefined }
type VerificationOption = {
  addressData?: AddressVerificationData | undefined
  emailData?: EmailVerificationData | undefined
  phoneData?: PhoneVerificationData | undefined
  verificationMethod?:
    | 'VERIFICATION_METHOD_UNSPECIFIED'
    | 'ADDRESS'
    | 'EMAIL'
    | 'PHONE_CALL'
    | 'SMS'
    | 'AUTO'
    | undefined
}
type FetchVerificationOptionsResponse = { options?: VerificationOption[] | undefined }
type FindMatchingLocationsRequest = {
  languageCode?: string | undefined
  maxCacheDuration?: string | undefined
  numResults?: number | undefined
}
type MatchedLocation = { isExactMatch?: boolean | undefined; location?: Location | undefined }
type FindMatchingLocationsResponse = {
  matchTime?: string | undefined
  matchedLocations?: MatchedLocation[] | undefined
}
type GenerateAccountNumberRequest = { [x: string]: unknown }
type Accessibility = {
  mobilityAccessible?: boolean | undefined
  mobilityAccessibleElevator?: boolean | undefined
  mobilityAccessibleElevatorException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  mobilityAccessibleException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  mobilityAccessibleParking?: boolean | undefined
  mobilityAccessibleParkingException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  mobilityAccessiblePool?: boolean | undefined
  mobilityAccessiblePoolException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
}
type Activities = {
  beachAccess?: boolean | undefined
  beachAccessException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  beachFront?: boolean | undefined
  beachFrontException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  bicycleRental?: boolean | undefined
  bicycleRentalException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  boutiqueStores?: boolean | undefined
  boutiqueStoresException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  casino?: boolean | undefined
  casinoException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  freeBicycleRental?: boolean | undefined
  freeBicycleRentalException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  freeWatercraftRental?: boolean | undefined
  freeWatercraftRentalException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  gameRoom?: boolean | undefined
  gameRoomException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  golf?: boolean | undefined
  golfException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  horsebackRiding?: boolean | undefined
  horsebackRidingException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  nightclub?: boolean | undefined
  nightclubException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  privateBeach?: boolean | undefined
  privateBeachException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  scuba?: boolean | undefined
  scubaException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  snorkeling?: boolean | undefined
  snorkelingException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  tennis?: boolean | undefined
  tennisException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  waterSkiing?: boolean | undefined
  waterSkiingException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  watercraftRental?: boolean | undefined
  watercraftRentalException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
}
type LivingAreaAccessibility = {
  adaCompliantUnit?: boolean | undefined
  adaCompliantUnitException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  hearingAccessibleDoorbell?: boolean | undefined
  hearingAccessibleDoorbellException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  hearingAccessibleFireAlarm?: boolean | undefined
  hearingAccessibleFireAlarmException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  hearingAccessibleUnit?: boolean | undefined
  hearingAccessibleUnitException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  mobilityAccessibleBathtub?: boolean | undefined
  mobilityAccessibleBathtubException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  mobilityAccessibleShower?: boolean | undefined
  mobilityAccessibleShowerException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  mobilityAccessibleToilet?: boolean | undefined
  mobilityAccessibleToiletException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  mobilityAccessibleUnit?: boolean | undefined
  mobilityAccessibleUnitException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
}
type LivingAreaEating = {
  coffeeMaker?: boolean | undefined
  coffeeMakerException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  cookware?: boolean | undefined
  cookwareException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  dishwasher?: boolean | undefined
  dishwasherException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  indoorGrill?: boolean | undefined
  indoorGrillException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  kettle?: boolean | undefined
  kettleException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  kitchenAvailable?: boolean | undefined
  kitchenAvailableException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  microwave?: boolean | undefined
  microwaveException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  minibar?: boolean | undefined
  minibarException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  outdoorGrill?: boolean | undefined
  outdoorGrillException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  oven?: boolean | undefined
  ovenException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  refrigerator?: boolean | undefined
  refrigeratorException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  sink?: boolean | undefined
  sinkException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  snackbar?: boolean | undefined
  snackbarException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  stove?: boolean | undefined
  stoveException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  teaStation?: boolean | undefined
  teaStationException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  toaster?: boolean | undefined
  toasterException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
}
type LivingAreaFeatures = {
  airConditioning?: boolean | undefined
  airConditioningException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  bathtub?: boolean | undefined
  bathtubException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  bidet?: boolean | undefined
  bidetException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  dryer?: boolean | undefined
  dryerException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  electronicRoomKey?: boolean | undefined
  electronicRoomKeyException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  fireplace?: boolean | undefined
  fireplaceException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  hairdryer?: boolean | undefined
  hairdryerException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  heating?: boolean | undefined
  heatingException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  inunitSafe?: boolean | undefined
  inunitSafeException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  inunitWifiAvailable?: boolean | undefined
  inunitWifiAvailableException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  ironingEquipment?: boolean | undefined
  ironingEquipmentException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  payPerViewMovies?: boolean | undefined
  payPerViewMoviesException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  privateBathroom?: boolean | undefined
  privateBathroomException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  shower?: boolean | undefined
  showerException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  toilet?: boolean | undefined
  toiletException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  tv?: boolean | undefined
  tvCasting?: boolean | undefined
  tvCastingException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  tvException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  tvStreaming?: boolean | undefined
  tvStreamingException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  universalPowerAdapters?: boolean | undefined
  universalPowerAdaptersException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  washer?: boolean | undefined
  washerException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
}
type LivingAreaLayout = {
  balcony?: boolean | undefined
  balconyException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  livingAreaSqMeters?: number | undefined
  livingAreaSqMetersException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  loft?: boolean | undefined
  loftException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  nonSmoking?: boolean | undefined
  nonSmokingException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  patio?: boolean | undefined
  patioException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  stairs?: boolean | undefined
  stairsException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
}
type LivingAreaSleeping = {
  bedsCount?: number | undefined
  bedsCountException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  bunkBedsCount?: number | undefined
  bunkBedsCountException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  cribsCount?: number | undefined
  cribsCountException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  doubleBedsCount?: number | undefined
  doubleBedsCountException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  featherPillows?: boolean | undefined
  featherPillowsException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  hypoallergenicBedding?: boolean | undefined
  hypoallergenicBeddingException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  kingBedsCount?: number | undefined
  kingBedsCountException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  memoryFoamPillows?: boolean | undefined
  memoryFoamPillowsException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  otherBedsCount?: number | undefined
  otherBedsCountException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  queenBedsCount?: number | undefined
  queenBedsCountException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  rollAwayBedsCount?: number | undefined
  rollAwayBedsCountException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  singleOrTwinBedsCount?: number | undefined
  singleOrTwinBedsCountException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  sofaBedsCount?: number | undefined
  sofaBedsCountException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  syntheticPillows?: boolean | undefined
  syntheticPillowsException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
}
type LivingArea = {
  accessibility?: LivingAreaAccessibility | undefined
  eating?: LivingAreaEating | undefined
  features?: LivingAreaFeatures | undefined
  layout?: LivingAreaLayout | undefined
  sleeping?: LivingAreaSleeping | undefined
}
type ViewsFromUnit = {
  beachView?: boolean | undefined
  beachViewException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  cityView?: boolean | undefined
  cityViewException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  gardenView?: boolean | undefined
  gardenViewException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  lakeView?: boolean | undefined
  lakeViewException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  landmarkView?: boolean | undefined
  landmarkViewException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  oceanView?: boolean | undefined
  oceanViewException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  poolView?: boolean | undefined
  poolViewException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  valleyView?: boolean | undefined
  valleyViewException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
}
type GuestUnitFeatures = {
  bungalowOrVilla?: boolean | undefined
  bungalowOrVillaException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  connectingUnitAvailable?: boolean | undefined
  connectingUnitAvailableException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  executiveFloor?: boolean | undefined
  executiveFloorException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  maxAdultOccupantsCount?: number | undefined
  maxAdultOccupantsCountException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  maxChildOccupantsCount?: number | undefined
  maxChildOccupantsCountException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  maxOccupantsCount?: number | undefined
  maxOccupantsCountException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  privateHome?: boolean | undefined
  privateHomeException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  suite?: boolean | undefined
  suiteException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  tier?: 'UNIT_TIER_UNSPECIFIED' | 'STANDARD_UNIT' | 'DELUXE_UNIT' | undefined
  tierException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  totalLivingAreas?: LivingArea | undefined
  views?: ViewsFromUnit | undefined
}
type Business = {
  businessCenter?: boolean | undefined
  businessCenterException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  meetingRooms?: boolean | undefined
  meetingRoomsCount?: number | undefined
  meetingRoomsCountException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  meetingRoomsException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
}
type Connectivity = {
  freeWifi?: boolean | undefined
  freeWifiException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  publicAreaWifiAvailable?: boolean | undefined
  publicAreaWifiAvailableException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  publicInternetTerminal?: boolean | undefined
  publicInternetTerminalException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  wifiAvailable?: boolean | undefined
  wifiAvailableException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
}
type Families = {
  babysitting?: boolean | undefined
  babysittingException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  kidsActivities?: boolean | undefined
  kidsActivitiesException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  kidsClub?: boolean | undefined
  kidsClubException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
}
type FoodAndDrink = {
  bar?: boolean | undefined
  barException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  breakfastAvailable?: boolean | undefined
  breakfastAvailableException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  breakfastBuffet?: boolean | undefined
  breakfastBuffetException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  buffet?: boolean | undefined
  buffetException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  dinnerBuffet?: boolean | undefined
  dinnerBuffetException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  freeBreakfast?: boolean | undefined
  freeBreakfastException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  restaurant?: boolean | undefined
  restaurantException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  restaurantsCount?: number | undefined
  restaurantsCountException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  roomService?: boolean | undefined
  roomServiceException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  tableService?: boolean | undefined
  tableServiceException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  twentyFourHourRoomService?: boolean | undefined
  twentyFourHourRoomServiceException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  vendingMachine?: boolean | undefined
  vendingMachineException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
}
type GuestUnitType = {
  codes?: string[] | undefined
  features?: GuestUnitFeatures | undefined
  label?: string | undefined
}
type EnhancedCleaning = {
  commercialGradeDisinfectantCleaning?: boolean | undefined
  commercialGradeDisinfectantCleaningException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  commonAreasEnhancedCleaning?: boolean | undefined
  commonAreasEnhancedCleaningException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  employeesTrainedCleaningProcedures?: boolean | undefined
  employeesTrainedCleaningProceduresException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  employeesTrainedThoroughHandWashing?: boolean | undefined
  employeesTrainedThoroughHandWashingException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  employeesWearProtectiveEquipment?: boolean | undefined
  employeesWearProtectiveEquipmentException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  guestRoomsEnhancedCleaning?: boolean | undefined
  guestRoomsEnhancedCleaningException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
}
type IncreasedFoodSafety = {
  diningAreasAdditionalSanitation?: boolean | undefined
  diningAreasAdditionalSanitationException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  disposableFlatware?: boolean | undefined
  disposableFlatwareException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  foodPreparationAndServingAdditionalSafety?: boolean | undefined
  foodPreparationAndServingAdditionalSafetyException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  individualPackagedMeals?: boolean | undefined
  individualPackagedMealsException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  singleUseFoodMenus?: boolean | undefined
  singleUseFoodMenusException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
}
type MinimizedContact = {
  contactlessCheckinCheckout?: boolean | undefined
  contactlessCheckinCheckoutException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  digitalGuestRoomKeys?: boolean | undefined
  digitalGuestRoomKeysException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  housekeepingScheduledRequestOnly?: boolean | undefined
  housekeepingScheduledRequestOnlyException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  noHighTouchItemsCommonAreas?: boolean | undefined
  noHighTouchItemsCommonAreasException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  noHighTouchItemsGuestRooms?: boolean | undefined
  noHighTouchItemsGuestRoomsException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  plasticKeycardsDisinfected?: boolean | undefined
  plasticKeycardsDisinfectedException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  roomBookingsBuffer?: boolean | undefined
  roomBookingsBufferException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
}
type PersonalProtection = {
  commonAreasOfferSanitizingItems?: boolean | undefined
  commonAreasOfferSanitizingItemsException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  faceMaskRequired?: boolean | undefined
  faceMaskRequiredException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  guestRoomHygieneKitsAvailable?: boolean | undefined
  guestRoomHygieneKitsAvailableException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  protectiveEquipmentAvailable?: boolean | undefined
  protectiveEquipmentAvailableException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
}
type PhysicalDistancing = {
  commonAreasPhysicalDistancingArranged?: boolean | undefined
  commonAreasPhysicalDistancingArrangedException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  physicalDistancingRequired?: boolean | undefined
  physicalDistancingRequiredException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  safetyDividers?: boolean | undefined
  safetyDividersException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  sharedAreasLimitedOccupancy?: boolean | undefined
  sharedAreasLimitedOccupancyException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  wellnessAreasHavePrivateSpaces?: boolean | undefined
  wellnessAreasHavePrivateSpacesException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
}
type HealthAndSafety = {
  enhancedCleaning?: EnhancedCleaning | undefined
  increasedFoodSafety?: IncreasedFoodSafety | undefined
  minimizedContact?: MinimizedContact | undefined
  personalProtection?: PersonalProtection | undefined
  physicalDistancing?: PhysicalDistancing | undefined
}
type Housekeeping = {
  dailyHousekeeping?: boolean | undefined
  dailyHousekeepingException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  housekeepingAvailable?: boolean | undefined
  housekeepingAvailableException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  turndownService?: boolean | undefined
  turndownServiceException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
}
type LodgingMetadata = { updateTime?: string | undefined }
type Parking = {
  electricCarChargingStations?: boolean | undefined
  electricCarChargingStationsException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  freeParking?: boolean | undefined
  freeParkingException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  freeSelfParking?: boolean | undefined
  freeSelfParkingException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  freeValetParking?: boolean | undefined
  freeValetParkingException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  parkingAvailable?: boolean | undefined
  parkingAvailableException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  selfParkingAvailable?: boolean | undefined
  selfParkingAvailableException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  valetParkingAvailable?: boolean | undefined
  valetParkingAvailableException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
}
type Pets = {
  catsAllowed?: boolean | undefined
  catsAllowedException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  dogsAllowed?: boolean | undefined
  dogsAllowedException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  petsAllowed?: boolean | undefined
  petsAllowedException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  petsAllowedFree?: boolean | undefined
  petsAllowedFreeException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
}
type PaymentOptions = {
  cash?: boolean | undefined
  cashException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  cheque?: boolean | undefined
  chequeException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  creditCard?: boolean | undefined
  creditCardException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  debitCard?: boolean | undefined
  debitCardException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  mobileNfc?: boolean | undefined
  mobileNfcException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
}
type Policies = {
  allInclusiveAvailable?: boolean | undefined
  allInclusiveAvailableException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  allInclusiveOnly?: boolean | undefined
  allInclusiveOnlyException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  checkinTime?: TimeOfDay | undefined
  checkinTimeException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  checkoutTime?: TimeOfDay | undefined
  checkoutTimeException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  kidsStayFree?: boolean | undefined
  kidsStayFreeException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  maxChildAge?: number | undefined
  maxChildAgeException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  maxKidsStayFreeCount?: number | undefined
  maxKidsStayFreeCountException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  paymentOptions?: PaymentOptions | undefined
  smokeFreeProperty?: boolean | undefined
  smokeFreePropertyException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
}
type Pools = {
  adultPool?: boolean | undefined
  adultPoolException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  hotTub?: boolean | undefined
  hotTubException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  indoorPool?: boolean | undefined
  indoorPoolException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  indoorPoolsCount?: number | undefined
  indoorPoolsCountException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  lazyRiver?: boolean | undefined
  lazyRiverException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  lifeguard?: boolean | undefined
  lifeguardException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  outdoorPool?: boolean | undefined
  outdoorPoolException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  outdoorPoolsCount?: number | undefined
  outdoorPoolsCountException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  pool?: boolean | undefined
  poolException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  poolsCount?: number | undefined
  poolsCountException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  wadingPool?: boolean | undefined
  wadingPoolException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  waterPark?: boolean | undefined
  waterParkException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  waterslide?: boolean | undefined
  waterslideException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  wavePool?: boolean | undefined
  wavePoolException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
}
type Property = {
  builtYear?: number | undefined
  builtYearException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  floorsCount?: number | undefined
  floorsCountException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  lastRenovatedYear?: number | undefined
  lastRenovatedYearException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  roomsCount?: number | undefined
  roomsCountException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
}
type LanguagesSpoken = {
  arabicSpoken?: boolean | undefined
  arabicSpokenException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  cantoneseSpoken?: boolean | undefined
  cantoneseSpokenException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  dutchSpoken?: boolean | undefined
  dutchSpokenException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  englishSpoken?: boolean | undefined
  englishSpokenException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  filipinoSpoken?: boolean | undefined
  filipinoSpokenException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  frenchSpoken?: boolean | undefined
  frenchSpokenException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  germanSpoken?: boolean | undefined
  germanSpokenException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  hindiSpoken?: boolean | undefined
  hindiSpokenException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  indonesianSpoken?: boolean | undefined
  indonesianSpokenException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  italianSpoken?: boolean | undefined
  italianSpokenException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  japaneseSpoken?: boolean | undefined
  japaneseSpokenException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  koreanSpoken?: boolean | undefined
  koreanSpokenException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  mandarinSpoken?: boolean | undefined
  mandarinSpokenException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  portugueseSpoken?: boolean | undefined
  portugueseSpokenException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  russianSpoken?: boolean | undefined
  russianSpokenException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  spanishSpoken?: boolean | undefined
  spanishSpokenException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  vietnameseSpoken?: boolean | undefined
  vietnameseSpokenException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
}
type Services = {
  baggageStorage?: boolean | undefined
  baggageStorageException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  concierge?: boolean | undefined
  conciergeException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  convenienceStore?: boolean | undefined
  convenienceStoreException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  currencyExchange?: boolean | undefined
  currencyExchangeException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  elevator?: boolean | undefined
  elevatorException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  frontDesk?: boolean | undefined
  frontDeskException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  fullServiceLaundry?: boolean | undefined
  fullServiceLaundryException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  giftShop?: boolean | undefined
  giftShopException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  languagesSpoken?: LanguagesSpoken | undefined
  selfServiceLaundry?: boolean | undefined
  selfServiceLaundryException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  socialHour?: boolean | undefined
  socialHourException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  twentyFourHourFrontDesk?: boolean | undefined
  twentyFourHourFrontDeskException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  wakeUpCalls?: boolean | undefined
  wakeUpCallsException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
}
type Transportation = {
  airportShuttle?: boolean | undefined
  airportShuttleException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  carRentalOnProperty?: boolean | undefined
  carRentalOnPropertyException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  freeAirportShuttle?: boolean | undefined
  freeAirportShuttleException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  freePrivateCarService?: boolean | undefined
  freePrivateCarServiceException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  localShuttle?: boolean | undefined
  localShuttleException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  privateCarService?: boolean | undefined
  privateCarServiceException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  transfer?: boolean | undefined
  transferException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
}
type Wellness = {
  doctorOnCall?: boolean | undefined
  doctorOnCallException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  ellipticalMachine?: boolean | undefined
  ellipticalMachineException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  fitnessCenter?: boolean | undefined
  fitnessCenterException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  freeFitnessCenter?: boolean | undefined
  freeFitnessCenterException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  freeWeights?: boolean | undefined
  freeWeightsException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  massage?: boolean | undefined
  massageException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  salon?: boolean | undefined
  salonException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  sauna?: boolean | undefined
  saunaException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  spa?: boolean | undefined
  spaException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  treadmill?: boolean | undefined
  treadmillException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
  weightMachine?: boolean | undefined
  weightMachineException?:
    | 'EXCEPTION_UNSPECIFIED'
    | 'UNDER_CONSTRUCTION'
    | 'DEPENDENT_ON_SEASON'
    | 'DEPENDENT_ON_DAY_OF_WEEK'
    | undefined
}
type Lodging = {
  accessibility?: Accessibility | undefined
  activities?: Activities | undefined
  allUnits?: GuestUnitFeatures | undefined
  business?: Business | undefined
  commonLivingArea?: LivingArea | undefined
  connectivity?: Connectivity | undefined
  families?: Families | undefined
  foodAndDrink?: FoodAndDrink | undefined
  guestUnits?: GuestUnitType[] | undefined
  healthAndSafety?: HealthAndSafety | undefined
  housekeeping?: Housekeeping | undefined
  metadata?: LodgingMetadata | undefined
  name?: string | undefined
  parking?: Parking | undefined
  pets?: Pets | undefined
  policies?: Policies | undefined
  pools?: Pools | undefined
  property?: Property | undefined
  services?: Services | undefined
  someUnits?: GuestUnitFeatures | undefined
  transportation?: Transportation | undefined
  wellness?: Wellness | undefined
}
type GetGoogleUpdatedLodgingResponse = {
  diffMask?: string | undefined
  lodging?: Lodging | undefined
}
type GoogleUpdatedLocation = { diffMask?: string | undefined; location?: Location | undefined }
type ListRecommendedGoogleLocationsResponse = {
  googleLocations?: GoogleLocation[] | undefined
  nextPageToken?: string | undefined
  totalSize?: number | undefined
}
type ReportGoogleLocationRequest = {
  locationGroupName?: string | undefined
  reportReasonBadLocation?:
    | 'BAD_LOCATION_REASON_UNSPECIFIED'
    | 'NOT_A_LOCATION'
    | 'PERMANENTLY_CLOSED'
    | 'DOES_NOT_EXIST'
    | 'SPAM'
    | 'NOT_A_BUSINESS'
    | 'MOVED'
    | 'DUPLICATE'
    | undefined
  reportReasonBadRecommendation?:
    | 'BAD_RECOMMENDATION_REASON_UNSPECIFIED'
    | 'NOT_A_STORE_FRONT'
    | 'NOT_PART_OF_SUGGESTED_CHAIN'
    | 'IRRELEVANT'
    | undefined
  reportReasonElaboration?: string | undefined
  reportReasonLanguageCode?: string | undefined
}
type TransferLocationRequest = { toAccount?: string | undefined }
type AddressInput = { mailerContactName?: string | undefined }
type EmailInput = { emailAddress?: string | undefined }
type PhoneInput = { phoneNumber?: string | undefined }
type VerifyLocationRequest = {
  addressInput?: AddressInput | undefined
  context?: ServiceBusinessContext | undefined
  emailInput?: EmailInput | undefined
  languageCode?: string | undefined
  method?:
    | 'VERIFICATION_METHOD_UNSPECIFIED'
    | 'ADDRESS'
    | 'EMAIL'
    | 'PHONE_CALL'
    | 'SMS'
    | 'AUTO'
    | undefined
  phoneInput?: PhoneInput | undefined
}
type VerifyLocationResponse = { verification?: Verification | undefined }
type Admin = {
  adminName?: string | undefined
  name?: string | undefined
  pendingInvitation?: boolean | undefined
  role?:
    | 'ADMIN_ROLE_UNSPECIFIED'
    | 'OWNER'
    | 'CO_OWNER'
    | 'MANAGER'
    | 'COMMUNITY_MANAGER'
    | undefined
}
type ListLocationAdminsResponse = { admins?: Admin[] | undefined }
type ListAnswersResponse = {
  answers?: Answer[] | undefined
  nextPageToken?: string | undefined
  totalSize?: number | undefined
}
type UpsertAnswerRequest = { answer?: Answer | undefined }
type InsuranceNetwork = {
  networkId?: string | undefined
  networkNames?: { [x: string]: string } | undefined
  payerNames?: { [x: string]: string } | undefined
  state?:
    | 'NETWORK_STATE_UNSPECIFIED'
    | 'ACCEPTED'
    | 'PENDING_ADD'
    | 'PENDING_DELETE'
    | 'NOT_ACCEPTED'
    | undefined
}
type ListInsuranceNetworksResponse = {
  networks?: InsuranceNetwork[] | undefined
  nextPageToken?: string | undefined
}
type TargetLocation = { locationAddress?: string | undefined; locationName?: string | undefined }
type Invitation = {
  name?: string | undefined
  role?:
    | 'ADMIN_ROLE_UNSPECIFIED'
    | 'OWNER'
    | 'CO_OWNER'
    | 'MANAGER'
    | 'COMMUNITY_MANAGER'
    | undefined
  targetAccount?: Account | undefined
  targetLocation?: TargetLocation | undefined
}
type ListInvitationsResponse = { invitations?: Invitation[] | undefined }
type CallToAction = {
  actionType?:
    | 'ACTION_TYPE_UNSPECIFIED'
    | 'BOOK'
    | 'ORDER'
    | 'SHOP'
    | 'LEARN_MORE'
    | 'SIGN_UP'
    | 'GET_OFFER'
    | 'CALL'
    | undefined
  url?: string | undefined
}
type TimeInterval = {
  endDate?: Date | undefined
  endTime?: TimeOfDay | undefined
  startDate?: Date | undefined
  startTime?: TimeOfDay | undefined
}
type LocalPostEvent = { schedule?: TimeInterval | undefined; title?: string | undefined }
type Attribution = {
  profileName?: string | undefined
  profilePhotoUrl?: string | undefined
  profileUrl?: string | undefined
  takedownUrl?: string | undefined
}
type MediaItemDataRef = { resourceName?: string | undefined }
type Dimensions = { heightPixels?: number | undefined; widthPixels?: number | undefined }
type MediaInsights = { viewCount?: string | undefined }
type LocationAssociation = {
  category?:
    | 'CATEGORY_UNSPECIFIED'
    | 'COVER'
    | 'PROFILE'
    | 'LOGO'
    | 'EXTERIOR'
    | 'INTERIOR'
    | 'PRODUCT'
    | 'AT_WORK'
    | 'FOOD_AND_DRINK'
    | 'MENU'
    | 'COMMON_AREA'
    | 'ROOMS'
    | 'TEAMS'
    | 'ADDITIONAL'
    | undefined
  priceListItemId?: string | undefined
}
type MediaItem = {
  attribution?: Attribution | undefined
  createTime?: string | undefined
  dataRef?: MediaItemDataRef | undefined
  description?: string | undefined
  dimensions?: Dimensions | undefined
  googleUrl?: string | undefined
  insights?: MediaInsights | undefined
  locationAssociation?: LocationAssociation | undefined
  mediaFormat?: 'MEDIA_FORMAT_UNSPECIFIED' | 'PHOTO' | 'VIDEO' | undefined
  name?: string | undefined
  sourceUrl?: string | undefined
  thumbnailUrl?: string | undefined
}
type LocalPostOffer = {
  couponCode?: string | undefined
  redeemOnlineUrl?: string | undefined
  termsConditions?: string | undefined
}
type LocalPost = {
  alertType?: 'ALERT_TYPE_UNSPECIFIED' | 'COVID_19' | undefined
  callToAction?: CallToAction | undefined
  createTime?: string | undefined
  event?: LocalPostEvent | undefined
  languageCode?: string | undefined
  media?: MediaItem[] | undefined
  name?: string | undefined
  offer?: LocalPostOffer | undefined
  searchUrl?: string | undefined
  state?: 'LOCAL_POST_STATE_UNSPECIFIED' | 'REJECTED' | 'LIVE' | 'PROCESSING' | undefined
  summary?: string | undefined
  topicType?:
    | 'LOCAL_POST_TOPIC_TYPE_UNSPECIFIED'
    | 'STANDARD'
    | 'EVENT'
    | 'OFFER'
    | 'ALERT'
    | undefined
  updateTime?: string | undefined
}
type ListLocalPostsResponse = {
  localPosts?: LocalPost[] | undefined
  nextPageToken?: string | undefined
}
type ListLocationsResponse = {
  locations?: Location[] | undefined
  nextPageToken?: string | undefined
  totalSize?: number | undefined
}
type ListMediaItemsResponse = {
  mediaItems?: MediaItem[] | undefined
  nextPageToken?: string | undefined
  totalMediaItemCount?: number | undefined
}
type ListCustomerMediaItemsResponse = {
  mediaItems?: MediaItem[] | undefined
  nextPageToken?: string | undefined
  totalMediaItemCount?: number | undefined
}
type StartUploadMediaItemDataRequest = { [x: string]: unknown }
type ListQuestionsResponse = {
  nextPageToken?: string | undefined
  questions?: Question[] | undefined
  totalSize?: number | undefined
}
type ListReviewsResponse = {
  averageRating?: number | undefined
  nextPageToken?: string | undefined
  reviews?: Review[] | undefined
  totalReviewCount?: number | undefined
}
type ListVerificationsResponse = {
  nextPageToken?: string | undefined
  verifications?: Verification[] | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v4/accounts': {
      $get: {
        input: {
          query: {
            filter?: string | undefined
            name?: string | undefined
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
        output: ListAccountsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: {
          query: {
            primaryOwner?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
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
    '/v4/attributes': {
      $get: {
        input: {
          query: {
            categoryId?: string | undefined
            country?: string | undefined
            languageCode?: string | undefined
            name?: string | undefined
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
        output: ListAttributeMetadataResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v4/categories': {
      $get: {
        input: {
          query: {
            languageCode?: string | undefined
            pageSize?: number | undefined
            pageToken?: string | undefined
            regionCode?: string | undefined
            searchTerm?: string | undefined
            view?: 'CATEGORY_VIEW_UNSPECIFIED' | 'BASIC' | 'FULL' | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
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
        output: ListBusinessCategoriesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v4/categories:batchGet': {
      $get: {
        input: {
          query: {
            categoryIds?: string[] | undefined
            languageCode?: string | undefined
            regionCode?: string | undefined
            view?: 'CATEGORY_VIEW_UNSPECIFIED' | 'BASIC' | 'FULL' | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
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
        output: BatchGetBusinessCategoriesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v4/chains:search': {
      $get: {
        input: {
          query: {
            chainDisplayName?: string | undefined
            resultCount?: number | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
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
        output: SearchChainsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v4/googleLocations:search': {
      $post: {
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
        } & { json: SearchGoogleLocationsRequest }
        output: SearchGoogleLocationsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v4/:name': {
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
        output: Chain
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
        } & { json: Question }
        output: Question
        outputFormat: 'json'
        status: 200
      }
      $put: {
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
        } & { json: Notifications }
        output: Notifications
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v4/:name/localPosts:reportInsights': {
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
        } & { json: ReportLocalPostInsightsRequest }
        output: ReportLocalPostInsightsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v4/:name/locations:batchGet': {
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
        } & { json: BatchGetLocationsRequest }
        output: BatchGetLocationsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v4/:name/locations:batchGetReviews': {
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
        } & { json: BatchGetReviewsRequest }
        output: BatchGetReviewsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v4/:name/locations:reportInsights': {
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
        } & { json: ReportLocationInsightsRequest }
        output: ReportLocationInsightsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v4/:name/reply': {
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
      $put: {
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
        } & { json: ReviewReply }
        output: ReviewReply
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v4/:name:accept': {
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
        } & { json: AcceptInvitationRequest }
        output: Empty
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v4/:name:associate': {
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
        } & { json: AssociateLocationRequest }
        output: Empty
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v4/:name:clearAssociation': {
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
        } & { json: ClearLocationAssociationRequest }
        output: Empty
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v4/:name:complete': {
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
        } & { json: CompleteVerificationRequest }
        output: CompleteVerificationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v4/:name:decline': {
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
        } & { json: DeclineInvitationRequest }
        output: Empty
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v4/:name:fetchVerificationOptions': {
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
        } & { json: FetchVerificationOptionsRequest }
        output: FetchVerificationOptionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v4/:name:findMatches': {
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
        } & { json: FindMatchingLocationsRequest }
        output: FindMatchingLocationsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v4/:name:generateAccountNumber': {
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
        } & { json: GenerateAccountNumberRequest }
        output: Account
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v4/:name:getGoogleUpdated': {
      $get: {
        input: { param: { name: string } } & {
          query: {
            readMask?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
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
        output: GetGoogleUpdatedLodgingResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v4/:name:googleUpdated': {
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
        output: GoogleUpdatedLocation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v4/:name:recommendGoogleLocations': {
      $get: {
        input: { param: { name: string } } & {
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
        output: ListRecommendedGoogleLocationsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v4/:name:report': {
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
        } & { json: ReportGoogleLocationRequest }
        output: Empty
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v4/:name:transfer': {
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
        } & { json: TransferLocationRequest }
        output: Location
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v4/:name:verify': {
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
        } & { json: VerifyLocationRequest }
        output: VerifyLocationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v4/:parent/admins': {
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
        output: ListLocationAdminsResponse
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
        } & { json: Admin }
        output: Admin
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v4/:parent/answers': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
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
        output: ListAnswersResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v4/:parent/answers:delete': {
      $delete: {
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
        output: Empty
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v4/:parent/answers:upsert': {
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
        } & { json: UpsertAnswerRequest }
        output: Answer
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v4/:parent/insuranceNetworks': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            languageCode?: string | undefined
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
        output: ListInsuranceNetworksResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v4/:parent/invitations': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            targetType?: 'ALL' | 'ACCOUNTS_ONLY' | 'LOCATIONS_ONLY' | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
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
        output: ListInvitationsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v4/:parent/localPosts': {
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
        output: ListLocalPostsResponse
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
        } & { json: LocalPost }
        output: LocalPost
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v4/:parent/locations': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            filter?: string | undefined
            languageCode?: string | undefined
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
        output: ListLocationsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            requestId?: string | undefined
            validateOnly?: boolean | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: Location }
        output: Location
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v4/:parent/media': {
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
        output: ListMediaItemsResponse
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
        } & { json: MediaItem }
        output: MediaItem
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v4/:parent/media/customers': {
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
        output: ListCustomerMediaItemsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v4/:parent/media:startUpload': {
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
        } & { json: StartUploadMediaItemDataRequest }
        output: MediaItemDataRef
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v4/:parent/questions': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            answersPerQuestion?: number | undefined
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
        output: ListQuestionsResponse
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
        } & { json: Question }
        output: Question
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v4/:parent/reviews': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
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
        output: ListReviewsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v4/:parent/verifications': {
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
        output: ListVerificationsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
