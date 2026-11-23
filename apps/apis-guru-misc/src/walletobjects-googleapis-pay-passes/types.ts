type Pagination = {
  kind?: string | undefined
  nextPageToken?: string | undefined
  resultsPerPage?: number | undefined
}
type CallbackOptions = { updateRequestUrl?: string | undefined; url?: string | undefined }
type FieldReference = {
  dateFormat?:
    | 'DATE_FORMAT_UNSPECIFIED'
    | 'DATE_TIME'
    | 'dateTime'
    | 'DATE_ONLY'
    | 'dateOnly'
    | 'TIME_ONLY'
    | 'timeOnly'
    | 'DATE_TIME_YEAR'
    | 'dateTimeYear'
    | 'DATE_YEAR'
    | 'dateYear'
    | 'YEAR_MONTH'
    | 'YEAR_MONTH_DAY'
    | undefined
  fieldPath?: string | undefined
}
type FieldSelector = { fields?: FieldReference[] | undefined }
type BarcodeSectionDetail = { fieldSelector?: FieldSelector | undefined }
type CardBarcodeSectionDetails = {
  firstBottomDetail?: BarcodeSectionDetail | undefined
  firstTopDetail?: BarcodeSectionDetail | undefined
  secondTopDetail?: BarcodeSectionDetail | undefined
}
type TemplateItem = {
  firstValue?: FieldSelector | undefined
  predefinedItem?:
    | 'PREDEFINED_ITEM_UNSPECIFIED'
    | 'FREQUENT_FLYER_PROGRAM_NAME_AND_NUMBER'
    | 'frequentFlyerProgramNameAndNumber'
    | 'FLIGHT_NUMBER_AND_OPERATING_FLIGHT_NUMBER'
    | 'flightNumberAndOperatingFlightNumber'
    | undefined
  secondValue?: FieldSelector | undefined
}
type CardRowOneItem = { item?: TemplateItem | undefined }
type CardRowThreeItems = {
  endItem?: TemplateItem | undefined
  middleItem?: TemplateItem | undefined
  startItem?: TemplateItem | undefined
}
type CardRowTwoItems = { endItem?: TemplateItem | undefined; startItem?: TemplateItem | undefined }
type CardRowTemplateInfo = {
  oneItem?: CardRowOneItem | undefined
  threeItems?: CardRowThreeItems | undefined
  twoItems?: CardRowTwoItems | undefined
}
type CardTemplateOverride = { cardRowTemplateInfos?: CardRowTemplateInfo[] | undefined }
type DetailsItemInfo = { item?: TemplateItem | undefined }
type DetailsTemplateOverride = { detailsItemInfos?: DetailsItemInfo[] | undefined }
type FirstRowOption = {
  fieldOption?: FieldSelector | undefined
  transitOption?:
    | 'TRANSIT_OPTION_UNSPECIFIED'
    | 'ORIGIN_AND_DESTINATION_NAMES'
    | 'originAndDestinationNames'
    | 'ORIGIN_AND_DESTINATION_CODES'
    | 'originAndDestinationCodes'
    | 'ORIGIN_NAME'
    | 'originName'
    | undefined
}
type ListTemplateOverride = {
  firstRowOption?: FirstRowOption | undefined
  secondRowOption?: FieldSelector | undefined
  thirdRowOption?: FieldSelector | undefined
}
type ClassTemplateInfo = {
  cardBarcodeSectionDetails?: CardBarcodeSectionDetails | undefined
  cardTemplateOverride?: CardTemplateOverride | undefined
  detailsTemplateOverride?: DetailsTemplateOverride | undefined
  listTemplateOverride?: ListTemplateOverride | undefined
}
type TranslatedString = {
  kind?: string | undefined
  language?: string | undefined
  value?: string | undefined
}
type LocalizedString = {
  defaultValue?: TranslatedString | undefined
  kind?: string | undefined
  translatedValues?: TranslatedString[] | undefined
}
type EventDateTime = {
  customDoorsOpenLabel?: LocalizedString | undefined
  doorsOpen?: string | undefined
  doorsOpenLabel?:
    | 'DOORS_OPEN_LABEL_UNSPECIFIED'
    | 'DOORS_OPEN'
    | 'doorsOpen'
    | 'GATES_OPEN'
    | 'gatesOpen'
    | undefined
  end?: string | undefined
  kind?: string | undefined
  start?: string | undefined
}
type ImageUri = {
  description?: string | undefined
  localizedDescription?: LocalizedString | undefined
  uri?: string | undefined
}
type Image = {
  contentDescription?: LocalizedString | undefined
  kind?: string | undefined
  sourceUri?: ImageUri | undefined
}
type Uri = {
  description?: string | undefined
  id?: string | undefined
  kind?: string | undefined
  localizedDescription?: LocalizedString | undefined
  uri?: string | undefined
}
type ImageModuleData = { id?: string | undefined; mainImage?: Image | undefined }
type LabelValue = {
  label?: string | undefined
  localizedLabel?: LocalizedString | undefined
  localizedValue?: LocalizedString | undefined
  value?: string | undefined
}
type LabelValueRow = { columns?: LabelValue[] | undefined }
type InfoModuleData = {
  labelValueRows?: LabelValueRow[] | undefined
  showLastUpdateTime?: boolean | undefined
}
type LinksModuleData = { uris?: Uri[] | undefined }
type LatLongPoint = {
  kind?: string | undefined
  latitude?: number | undefined
  longitude?: number | undefined
}
type DateTime = { date?: string | undefined }
type TimeInterval = {
  end?: DateTime | undefined
  kind?: string | undefined
  start?: DateTime | undefined
}
type Message = {
  body?: string | undefined
  displayInterval?: TimeInterval | undefined
  header?: string | undefined
  id?: string | undefined
  kind?: string | undefined
  localizedBody?: LocalizedString | undefined
  localizedHeader?: LocalizedString | undefined
  messageType?:
    | 'MESSAGE_TYPE_UNSPECIFIED'
    | 'TEXT'
    | 'text'
    | 'EXPIRATION_NOTIFICATION'
    | 'expirationNotification'
    | undefined
}
type Review = { comments?: string | undefined }
type SecurityAnimation = {
  animationType?: 'ANIMATION_UNSPECIFIED' | 'FOIL_SHIMMER' | 'foilShimmer' | undefined
}
type TextModuleData = {
  body?: string | undefined
  header?: string | undefined
  id?: string | undefined
  localizedBody?: LocalizedString | undefined
  localizedHeader?: LocalizedString | undefined
}
type EventVenue = {
  address?: LocalizedString | undefined
  kind?: string | undefined
  name?: LocalizedString | undefined
}
type EventTicketClass = {
  allowMultipleUsersPerObject?: boolean | undefined
  callbackOptions?: CallbackOptions | undefined
  classTemplateInfo?: ClassTemplateInfo | undefined
  confirmationCodeLabel?:
    | 'CONFIRMATION_CODE_LABEL_UNSPECIFIED'
    | 'CONFIRMATION_CODE'
    | 'confirmationCode'
    | 'CONFIRMATION_NUMBER'
    | 'confirmationNumber'
    | 'ORDER_NUMBER'
    | 'orderNumber'
    | 'RESERVATION_NUMBER'
    | 'reservationNumber'
    | undefined
  countryCode?: string | undefined
  customConfirmationCodeLabel?: LocalizedString | undefined
  customGateLabel?: LocalizedString | undefined
  customRowLabel?: LocalizedString | undefined
  customSeatLabel?: LocalizedString | undefined
  customSectionLabel?: LocalizedString | undefined
  dateTime?: EventDateTime | undefined
  enableSmartTap?: boolean | undefined
  eventId?: string | undefined
  eventName?: LocalizedString | undefined
  finePrint?: LocalizedString | undefined
  gateLabel?:
    | 'GATE_LABEL_UNSPECIFIED'
    | 'GATE'
    | 'gate'
    | 'DOOR'
    | 'door'
    | 'ENTRANCE'
    | 'entrance'
    | undefined
  heroImage?: Image | undefined
  hexBackgroundColor?: string | undefined
  homepageUri?: Uri | undefined
  id?: string | undefined
  imageModulesData?: ImageModuleData[] | undefined
  infoModuleData?: InfoModuleData | undefined
  issuerName?: string | undefined
  kind?: string | undefined
  linksModuleData?: LinksModuleData | undefined
  localizedIssuerName?: LocalizedString | undefined
  locations?: LatLongPoint[] | undefined
  logo?: Image | undefined
  messages?: Message[] | undefined
  multipleDevicesAndHoldersAllowedStatus?:
    | 'STATUS_UNSPECIFIED'
    | 'MULTIPLE_HOLDERS'
    | 'multipleHolders'
    | 'ONE_USER_ALL_DEVICES'
    | 'oneUserAllDevices'
    | 'ONE_USER_ONE_DEVICE'
    | 'oneUserOneDevice'
    | undefined
  redemptionIssuers?: string[] | undefined
  review?: Review | undefined
  reviewStatus?:
    | 'REVIEW_STATUS_UNSPECIFIED'
    | 'UNDER_REVIEW'
    | 'underReview'
    | 'APPROVED'
    | 'approved'
    | 'REJECTED'
    | 'rejected'
    | 'DRAFT'
    | 'draft'
    | undefined
  rowLabel?: 'ROW_LABEL_UNSPECIFIED' | 'ROW' | 'row' | undefined
  seatLabel?: 'SEAT_LABEL_UNSPECIFIED' | 'SEAT' | 'seat' | undefined
  sectionLabel?:
    | 'SECTION_LABEL_UNSPECIFIED'
    | 'SECTION'
    | 'section'
    | 'THEATER'
    | 'theater'
    | undefined
  securityAnimation?: SecurityAnimation | undefined
  textModulesData?: TextModuleData[] | undefined
  venue?: EventVenue | undefined
  version?: string | undefined
  viewUnlockRequirement?:
    | 'VIEW_UNLOCK_REQUIREMENT_UNSPECIFIED'
    | 'UNLOCK_NOT_REQUIRED'
    | 'UNLOCK_REQUIRED_TO_VIEW'
    | undefined
  wordMark?: Image | undefined
}
type EventTicketClassListResponse = {
  pagination?: Pagination | undefined
  resources?: EventTicketClass[] | undefined
}
type AddMessageRequest = { message?: Message | undefined }
type EventTicketClassAddMessageResponse = { resource?: EventTicketClass | undefined }
type AppLinkDataAppLinkInfoAppTarget = { targetUri?: Uri | undefined }
type AppLinkDataAppLinkInfo = {
  appLogoImage?: Image | undefined
  appTarget?: AppLinkDataAppLinkInfoAppTarget | undefined
  description?: LocalizedString | undefined
  title?: LocalizedString | undefined
}
type AppLinkData = {
  androidAppLinkInfo?: AppLinkDataAppLinkInfo | undefined
  iosAppLinkInfo?: AppLinkDataAppLinkInfo | undefined
  webAppLinkInfo?: AppLinkDataAppLinkInfo | undefined
}
type Barcode = {
  alternateText?: string | undefined
  kind?: string | undefined
  renderEncoding?: 'RENDER_ENCODING_UNSPECIFIED' | 'UTF_8' | undefined
  showCodeText?: LocalizedString | undefined
  type?:
    | 'BARCODE_TYPE_UNSPECIFIED'
    | 'AZTEC'
    | 'aztec'
    | 'CODE_39'
    | 'code39'
    | 'CODE_128'
    | 'code128'
    | 'CODABAR'
    | 'codabar'
    | 'DATA_MATRIX'
    | 'dataMatrix'
    | 'EAN_8'
    | 'ean8'
    | 'EAN_13'
    | 'ean13'
    | 'EAN13'
    | 'ITF_14'
    | 'itf14'
    | 'PDF_417'
    | 'pdf417'
    | 'PDF417'
    | 'QR_CODE'
    | 'qrCode'
    | 'qrcode'
    | 'UPC_A'
    | 'upcA'
    | 'TEXT_ONLY'
    | 'textOnly'
    | undefined
  value?: string | undefined
}
type Money = {
  currencyCode?: string | undefined
  kind?: string | undefined
  micros?: string | undefined
}
type GroupingInfo = { groupingId?: string | undefined; sortIndex?: number | undefined }
type PassConstraints = {
  screenshotEligibility?:
    | 'SCREENSHOT_ELIGIBILITY_UNSPECIFIED'
    | 'ELIGIBLE'
    | 'INELIGIBLE'
    | undefined
}
type EventReservationInfo = { confirmationCode?: string | undefined; kind?: string | undefined }
type RotatingBarcodeTotpDetailsTotpParameters = {
  key?: string | undefined
  valueLength?: number | undefined
}
type RotatingBarcodeTotpDetails = {
  algorithm?: 'TOTP_ALGORITHM_UNSPECIFIED' | 'TOTP_SHA1' | undefined
  parameters?: RotatingBarcodeTotpDetailsTotpParameters[] | undefined
  periodMillis?: string | undefined
}
type RotatingBarcode = {
  alternateText?: string | undefined
  renderEncoding?: 'RENDER_ENCODING_UNSPECIFIED' | 'UTF_8' | undefined
  showCodeText?: LocalizedString | undefined
  totpDetails?: RotatingBarcodeTotpDetails | undefined
  type?:
    | 'BARCODE_TYPE_UNSPECIFIED'
    | 'AZTEC'
    | 'aztec'
    | 'CODE_39'
    | 'code39'
    | 'CODE_128'
    | 'code128'
    | 'CODABAR'
    | 'codabar'
    | 'DATA_MATRIX'
    | 'dataMatrix'
    | 'EAN_8'
    | 'ean8'
    | 'EAN_13'
    | 'ean13'
    | 'EAN13'
    | 'ITF_14'
    | 'itf14'
    | 'PDF_417'
    | 'pdf417'
    | 'PDF417'
    | 'QR_CODE'
    | 'qrCode'
    | 'qrcode'
    | 'UPC_A'
    | 'upcA'
    | 'TEXT_ONLY'
    | 'textOnly'
    | undefined
  valuePattern?: string | undefined
}
type EventSeat = {
  gate?: LocalizedString | undefined
  kind?: string | undefined
  row?: LocalizedString | undefined
  seat?: LocalizedString | undefined
  section?: LocalizedString | undefined
}
type EventTicketObject = {
  appLinkData?: AppLinkData | undefined
  barcode?: Barcode | undefined
  classId?: string | undefined
  classReference?: EventTicketClass | undefined
  disableExpirationNotification?: boolean | undefined
  faceValue?: Money | undefined
  groupingInfo?: GroupingInfo | undefined
  hasLinkedDevice?: boolean | undefined
  hasUsers?: boolean | undefined
  heroImage?: Image | undefined
  hexBackgroundColor?: string | undefined
  id?: string | undefined
  imageModulesData?: ImageModuleData[] | undefined
  infoModuleData?: InfoModuleData | undefined
  kind?: string | undefined
  linkedOfferIds?: string[] | undefined
  linksModuleData?: LinksModuleData | undefined
  locations?: LatLongPoint[] | undefined
  messages?: Message[] | undefined
  passConstraints?: PassConstraints | undefined
  reservationInfo?: EventReservationInfo | undefined
  rotatingBarcode?: RotatingBarcode | undefined
  seatInfo?: EventSeat | undefined
  smartTapRedemptionValue?: string | undefined
  state?:
    | 'STATE_UNSPECIFIED'
    | 'ACTIVE'
    | 'active'
    | 'COMPLETED'
    | 'completed'
    | 'EXPIRED'
    | 'expired'
    | 'INACTIVE'
    | 'inactive'
    | undefined
  textModulesData?: TextModuleData[] | undefined
  ticketHolderName?: string | undefined
  ticketNumber?: string | undefined
  ticketType?: LocalizedString | undefined
  validTimeInterval?: TimeInterval | undefined
  version?: string | undefined
}
type EventTicketObjectListResponse = {
  pagination?: Pagination | undefined
  resources?: EventTicketObject[] | undefined
}
type EventTicketObjectAddMessageResponse = { resource?: EventTicketObject | undefined }
type ModifyLinkedOfferObjects = {
  addLinkedOfferObjectIds?: string[] | undefined
  removeLinkedOfferObjectIds?: string[] | undefined
}
type ModifyLinkedOfferObjectsRequest = {
  linkedOfferObjectIds?: ModifyLinkedOfferObjects | undefined
}
type BoardingAndSeatingPolicy = {
  boardingPolicy?:
    | 'BOARDING_POLICY_UNSPECIFIED'
    | 'ZONE_BASED'
    | 'zoneBased'
    | 'GROUP_BASED'
    | 'groupBased'
    | 'BOARDING_POLICY_OTHER'
    | 'boardingPolicyOther'
    | undefined
  kind?: string | undefined
  seatClassPolicy?:
    | 'SEAT_CLASS_POLICY_UNSPECIFIED'
    | 'CABIN_BASED'
    | 'cabinBased'
    | 'CLASS_BASED'
    | 'classBased'
    | 'TIER_BASED'
    | 'tierBased'
    | 'SEAT_CLASS_POLICY_OTHER'
    | 'seatClassPolicyOther'
    | undefined
}
type AirportInfo = {
  airportIataCode?: string | undefined
  airportNameOverride?: LocalizedString | undefined
  gate?: string | undefined
  kind?: string | undefined
  terminal?: string | undefined
}
type FlightCarrier = {
  airlineAllianceLogo?: Image | undefined
  airlineLogo?: Image | undefined
  airlineName?: LocalizedString | undefined
  carrierIataCode?: string | undefined
  carrierIcaoCode?: string | undefined
  kind?: string | undefined
}
type FlightHeader = {
  carrier?: FlightCarrier | undefined
  flightNumber?: string | undefined
  flightNumberDisplayOverride?: string | undefined
  kind?: string | undefined
  operatingCarrier?: FlightCarrier | undefined
  operatingFlightNumber?: string | undefined
}
type FlightClass = {
  allowMultipleUsersPerObject?: boolean | undefined
  boardingAndSeatingPolicy?: BoardingAndSeatingPolicy | undefined
  callbackOptions?: CallbackOptions | undefined
  classTemplateInfo?: ClassTemplateInfo | undefined
  countryCode?: string | undefined
  destination?: AirportInfo | undefined
  enableSmartTap?: boolean | undefined
  flightHeader?: FlightHeader | undefined
  flightStatus?:
    | 'FLIGHT_STATUS_UNSPECIFIED'
    | 'SCHEDULED'
    | 'scheduled'
    | 'ACTIVE'
    | 'active'
    | 'LANDED'
    | 'landed'
    | 'CANCELLED'
    | 'cancelled'
    | 'REDIRECTED'
    | 'redirected'
    | 'DIVERTED'
    | 'diverted'
    | undefined
  heroImage?: Image | undefined
  hexBackgroundColor?: string | undefined
  homepageUri?: Uri | undefined
  id?: string | undefined
  imageModulesData?: ImageModuleData[] | undefined
  infoModuleData?: InfoModuleData | undefined
  issuerName?: string | undefined
  kind?: string | undefined
  languageOverride?: string | undefined
  linksModuleData?: LinksModuleData | undefined
  localBoardingDateTime?: string | undefined
  localEstimatedOrActualArrivalDateTime?: string | undefined
  localEstimatedOrActualDepartureDateTime?: string | undefined
  localGateClosingDateTime?: string | undefined
  localScheduledArrivalDateTime?: string | undefined
  localScheduledDepartureDateTime?: string | undefined
  localizedIssuerName?: LocalizedString | undefined
  locations?: LatLongPoint[] | undefined
  messages?: Message[] | undefined
  multipleDevicesAndHoldersAllowedStatus?:
    | 'STATUS_UNSPECIFIED'
    | 'MULTIPLE_HOLDERS'
    | 'multipleHolders'
    | 'ONE_USER_ALL_DEVICES'
    | 'oneUserAllDevices'
    | 'ONE_USER_ONE_DEVICE'
    | 'oneUserOneDevice'
    | undefined
  origin?: AirportInfo | undefined
  redemptionIssuers?: string[] | undefined
  review?: Review | undefined
  reviewStatus?:
    | 'REVIEW_STATUS_UNSPECIFIED'
    | 'UNDER_REVIEW'
    | 'underReview'
    | 'APPROVED'
    | 'approved'
    | 'REJECTED'
    | 'rejected'
    | 'DRAFT'
    | 'draft'
    | undefined
  securityAnimation?: SecurityAnimation | undefined
  textModulesData?: TextModuleData[] | undefined
  version?: string | undefined
  viewUnlockRequirement?:
    | 'VIEW_UNLOCK_REQUIREMENT_UNSPECIFIED'
    | 'UNLOCK_NOT_REQUIRED'
    | 'UNLOCK_REQUIRED_TO_VIEW'
    | undefined
  wordMark?: Image | undefined
}
type FlightClassListResponse = {
  pagination?: Pagination | undefined
  resources?: FlightClass[] | undefined
}
type FlightClassAddMessageResponse = { resource?: FlightClass | undefined }
type BoardingAndSeatingInfo = {
  boardingDoor?: 'BOARDING_DOOR_UNSPECIFIED' | 'FRONT' | 'front' | 'BACK' | 'back' | undefined
  boardingGroup?: string | undefined
  boardingPosition?: string | undefined
  boardingPrivilegeImage?: Image | undefined
  kind?: string | undefined
  seatAssignment?: LocalizedString | undefined
  seatClass?: string | undefined
  seatNumber?: string | undefined
  sequenceNumber?: string | undefined
}
type FrequentFlyerInfo = {
  frequentFlyerNumber?: string | undefined
  frequentFlyerProgramName?: LocalizedString | undefined
  kind?: string | undefined
}
type ReservationInfo = {
  confirmationCode?: string | undefined
  eticketNumber?: string | undefined
  frequentFlyerInfo?: FrequentFlyerInfo | undefined
  kind?: string | undefined
}
type FlightObject = {
  appLinkData?: AppLinkData | undefined
  barcode?: Barcode | undefined
  boardingAndSeatingInfo?: BoardingAndSeatingInfo | undefined
  classId?: string | undefined
  classReference?: FlightClass | undefined
  disableExpirationNotification?: boolean | undefined
  groupingInfo?: GroupingInfo | undefined
  hasLinkedDevice?: boolean | undefined
  hasUsers?: boolean | undefined
  heroImage?: Image | undefined
  hexBackgroundColor?: string | undefined
  id?: string | undefined
  imageModulesData?: ImageModuleData[] | undefined
  infoModuleData?: InfoModuleData | undefined
  kind?: string | undefined
  linksModuleData?: LinksModuleData | undefined
  locations?: LatLongPoint[] | undefined
  messages?: Message[] | undefined
  passConstraints?: PassConstraints | undefined
  passengerName?: string | undefined
  reservationInfo?: ReservationInfo | undefined
  rotatingBarcode?: RotatingBarcode | undefined
  securityProgramLogo?: Image | undefined
  smartTapRedemptionValue?: string | undefined
  state?:
    | 'STATE_UNSPECIFIED'
    | 'ACTIVE'
    | 'active'
    | 'COMPLETED'
    | 'completed'
    | 'EXPIRED'
    | 'expired'
    | 'INACTIVE'
    | 'inactive'
    | undefined
  textModulesData?: TextModuleData[] | undefined
  validTimeInterval?: TimeInterval | undefined
  version?: string | undefined
}
type FlightObjectListResponse = {
  pagination?: Pagination | undefined
  resources?: FlightObject[] | undefined
}
type FlightObjectAddMessageResponse = { resource?: FlightObject | undefined }
type GenericClass = {
  callbackOptions?: CallbackOptions | undefined
  classTemplateInfo?: ClassTemplateInfo | undefined
  enableSmartTap?: boolean | undefined
  id?: string | undefined
  imageModulesData?: ImageModuleData[] | undefined
  linksModuleData?: LinksModuleData | undefined
  multipleDevicesAndHoldersAllowedStatus?:
    | 'STATUS_UNSPECIFIED'
    | 'MULTIPLE_HOLDERS'
    | 'multipleHolders'
    | 'ONE_USER_ALL_DEVICES'
    | 'oneUserAllDevices'
    | 'ONE_USER_ONE_DEVICE'
    | 'oneUserOneDevice'
    | undefined
  redemptionIssuers?: string[] | undefined
  securityAnimation?: SecurityAnimation | undefined
  textModulesData?: TextModuleData[] | undefined
  viewUnlockRequirement?:
    | 'VIEW_UNLOCK_REQUIREMENT_UNSPECIFIED'
    | 'UNLOCK_NOT_REQUIRED'
    | 'UNLOCK_REQUIRED_TO_VIEW'
    | undefined
}
type GenericClassListResponse = {
  pagination?: Pagination | undefined
  resources?: GenericClass[] | undefined
}
type ExpiryNotification = { enableNotification?: boolean | undefined }
type UpcomingNotification = { enableNotification?: boolean | undefined }
type Notifications = {
  expiryNotification?: ExpiryNotification | undefined
  upcomingNotification?: UpcomingNotification | undefined
}
type GenericObject = {
  appLinkData?: AppLinkData | undefined
  barcode?: Barcode | undefined
  cardTitle?: LocalizedString | undefined
  classId?: string | undefined
  genericType?: 'GENERIC_TYPE_UNSPECIFIED' | undefined
  groupingInfo?: GroupingInfo | undefined
  hasUsers?: boolean | undefined
  header?: LocalizedString | undefined
  heroImage?: Image | undefined
  hexBackgroundColor?: string | undefined
  id?: string | undefined
  imageModulesData?: ImageModuleData[] | undefined
  linksModuleData?: LinksModuleData | undefined
  logo?: Image | undefined
  notifications?: Notifications | undefined
  passConstraints?: PassConstraints | undefined
  rotatingBarcode?: RotatingBarcode | undefined
  smartTapRedemptionValue?: string | undefined
  state?:
    | 'STATE_UNSPECIFIED'
    | 'ACTIVE'
    | 'active'
    | 'COMPLETED'
    | 'completed'
    | 'EXPIRED'
    | 'expired'
    | 'INACTIVE'
    | 'inactive'
    | undefined
  subheader?: LocalizedString | undefined
  textModulesData?: TextModuleData[] | undefined
  validTimeInterval?: TimeInterval | undefined
}
type GenericObjectListResponse = {
  pagination?: Pagination | undefined
  resources?: GenericObject[] | undefined
}
type GiftCardClass = {
  allowBarcodeRedemption?: boolean | undefined
  allowMultipleUsersPerObject?: boolean | undefined
  callbackOptions?: CallbackOptions | undefined
  cardNumberLabel?: string | undefined
  classTemplateInfo?: ClassTemplateInfo | undefined
  countryCode?: string | undefined
  enableSmartTap?: boolean | undefined
  eventNumberLabel?: string | undefined
  heroImage?: Image | undefined
  hexBackgroundColor?: string | undefined
  homepageUri?: Uri | undefined
  id?: string | undefined
  imageModulesData?: ImageModuleData[] | undefined
  infoModuleData?: InfoModuleData | undefined
  issuerName?: string | undefined
  kind?: string | undefined
  linksModuleData?: LinksModuleData | undefined
  localizedCardNumberLabel?: LocalizedString | undefined
  localizedEventNumberLabel?: LocalizedString | undefined
  localizedIssuerName?: LocalizedString | undefined
  localizedMerchantName?: LocalizedString | undefined
  localizedPinLabel?: LocalizedString | undefined
  locations?: LatLongPoint[] | undefined
  merchantName?: string | undefined
  messages?: Message[] | undefined
  multipleDevicesAndHoldersAllowedStatus?:
    | 'STATUS_UNSPECIFIED'
    | 'MULTIPLE_HOLDERS'
    | 'multipleHolders'
    | 'ONE_USER_ALL_DEVICES'
    | 'oneUserAllDevices'
    | 'ONE_USER_ONE_DEVICE'
    | 'oneUserOneDevice'
    | undefined
  pinLabel?: string | undefined
  programLogo?: Image | undefined
  redemptionIssuers?: string[] | undefined
  review?: Review | undefined
  reviewStatus?:
    | 'REVIEW_STATUS_UNSPECIFIED'
    | 'UNDER_REVIEW'
    | 'underReview'
    | 'APPROVED'
    | 'approved'
    | 'REJECTED'
    | 'rejected'
    | 'DRAFT'
    | 'draft'
    | undefined
  securityAnimation?: SecurityAnimation | undefined
  textModulesData?: TextModuleData[] | undefined
  version?: string | undefined
  viewUnlockRequirement?:
    | 'VIEW_UNLOCK_REQUIREMENT_UNSPECIFIED'
    | 'UNLOCK_NOT_REQUIRED'
    | 'UNLOCK_REQUIRED_TO_VIEW'
    | undefined
  wordMark?: Image | undefined
}
type GiftCardClassListResponse = {
  pagination?: Pagination | undefined
  resources?: GiftCardClass[] | undefined
}
type GiftCardClassAddMessageResponse = { resource?: GiftCardClass | undefined }
type GiftCardObject = {
  appLinkData?: AppLinkData | undefined
  balance?: Money | undefined
  balanceUpdateTime?: DateTime | undefined
  barcode?: Barcode | undefined
  cardNumber?: string | undefined
  classId?: string | undefined
  classReference?: GiftCardClass | undefined
  disableExpirationNotification?: boolean | undefined
  eventNumber?: string | undefined
  groupingInfo?: GroupingInfo | undefined
  hasLinkedDevice?: boolean | undefined
  hasUsers?: boolean | undefined
  heroImage?: Image | undefined
  id?: string | undefined
  imageModulesData?: ImageModuleData[] | undefined
  infoModuleData?: InfoModuleData | undefined
  kind?: string | undefined
  linksModuleData?: LinksModuleData | undefined
  locations?: LatLongPoint[] | undefined
  messages?: Message[] | undefined
  passConstraints?: PassConstraints | undefined
  pin?: string | undefined
  rotatingBarcode?: RotatingBarcode | undefined
  smartTapRedemptionValue?: string | undefined
  state?:
    | 'STATE_UNSPECIFIED'
    | 'ACTIVE'
    | 'active'
    | 'COMPLETED'
    | 'completed'
    | 'EXPIRED'
    | 'expired'
    | 'INACTIVE'
    | 'inactive'
    | undefined
  textModulesData?: TextModuleData[] | undefined
  validTimeInterval?: TimeInterval | undefined
  version?: string | undefined
}
type GiftCardObjectListResponse = {
  pagination?: Pagination | undefined
  resources?: GiftCardObject[] | undefined
}
type GiftCardObjectAddMessageResponse = { resource?: GiftCardObject | undefined }
type IssuerContactInfo = {
  alertsEmails?: string[] | undefined
  email?: string | undefined
  name?: string | undefined
  phone?: string | undefined
}
type AuthenticationKey = { id?: number | undefined; publicKeyPem?: string | undefined }
type SmartTapMerchantData = {
  authenticationKeys?: AuthenticationKey[] | undefined
  smartTapMerchantId?: string | undefined
}
type Issuer = {
  contactInfo?: IssuerContactInfo | undefined
  homepageUrl?: string | undefined
  issuerId?: string | undefined
  name?: string | undefined
  smartTapMerchantData?: SmartTapMerchantData | undefined
}
type IssuerListResponse = { resources?: Issuer[] | undefined }
type JwtResource = { jwt?: string | undefined }
type DiscoverableProgramMerchantSigninInfo = { signinWebsite?: Uri | undefined }
type DiscoverableProgramMerchantSignupInfo = {
  signupSharedDatas?:
    | (
        | 'SHARED_DATA_TYPE_UNSPECIFIED'
        | 'FIRST_NAME'
        | 'LAST_NAME'
        | 'STREET_ADDRESS'
        | 'ADDRESS_LINE_1'
        | 'ADDRESS_LINE_2'
        | 'ADDRESS_LINE_3'
        | 'CITY'
        | 'STATE'
        | 'ZIPCODE'
        | 'COUNTRY'
        | 'EMAIL'
        | 'PHONE'
      )[]
    | undefined
  signupWebsite?: Uri | undefined
}
type DiscoverableProgram = {
  merchantSigninInfo?: DiscoverableProgramMerchantSigninInfo | undefined
  merchantSignupInfo?: DiscoverableProgramMerchantSignupInfo | undefined
  state?:
    | 'STATE_UNSPECIFIED'
    | 'TRUSTED_TESTERS'
    | 'trustedTesters'
    | 'LIVE'
    | 'live'
    | 'DISABLED'
    | 'disabled'
    | undefined
}
type LoyaltyClass = {
  accountIdLabel?: string | undefined
  accountNameLabel?: string | undefined
  allowMultipleUsersPerObject?: boolean | undefined
  callbackOptions?: CallbackOptions | undefined
  classTemplateInfo?: ClassTemplateInfo | undefined
  countryCode?: string | undefined
  discoverableProgram?: DiscoverableProgram | undefined
  enableSmartTap?: boolean | undefined
  heroImage?: Image | undefined
  hexBackgroundColor?: string | undefined
  homepageUri?: Uri | undefined
  id?: string | undefined
  imageModulesData?: ImageModuleData[] | undefined
  infoModuleData?: InfoModuleData | undefined
  issuerName?: string | undefined
  kind?: string | undefined
  linksModuleData?: LinksModuleData | undefined
  localizedAccountIdLabel?: LocalizedString | undefined
  localizedAccountNameLabel?: LocalizedString | undefined
  localizedIssuerName?: LocalizedString | undefined
  localizedProgramName?: LocalizedString | undefined
  localizedRewardsTier?: LocalizedString | undefined
  localizedRewardsTierLabel?: LocalizedString | undefined
  localizedSecondaryRewardsTier?: LocalizedString | undefined
  localizedSecondaryRewardsTierLabel?: LocalizedString | undefined
  locations?: LatLongPoint[] | undefined
  messages?: Message[] | undefined
  multipleDevicesAndHoldersAllowedStatus?:
    | 'STATUS_UNSPECIFIED'
    | 'MULTIPLE_HOLDERS'
    | 'multipleHolders'
    | 'ONE_USER_ALL_DEVICES'
    | 'oneUserAllDevices'
    | 'ONE_USER_ONE_DEVICE'
    | 'oneUserOneDevice'
    | undefined
  programLogo?: Image | undefined
  programName?: string | undefined
  redemptionIssuers?: string[] | undefined
  review?: Review | undefined
  reviewStatus?:
    | 'REVIEW_STATUS_UNSPECIFIED'
    | 'UNDER_REVIEW'
    | 'underReview'
    | 'APPROVED'
    | 'approved'
    | 'REJECTED'
    | 'rejected'
    | 'DRAFT'
    | 'draft'
    | undefined
  rewardsTier?: string | undefined
  rewardsTierLabel?: string | undefined
  secondaryRewardsTier?: string | undefined
  secondaryRewardsTierLabel?: string | undefined
  securityAnimation?: SecurityAnimation | undefined
  textModulesData?: TextModuleData[] | undefined
  version?: string | undefined
  viewUnlockRequirement?:
    | 'VIEW_UNLOCK_REQUIREMENT_UNSPECIFIED'
    | 'UNLOCK_NOT_REQUIRED'
    | 'UNLOCK_REQUIRED_TO_VIEW'
    | undefined
  wordMark?: Image | undefined
}
type LoyaltyPointsBalance = {
  double?: number | undefined
  int?: number | undefined
  money?: Money | undefined
  string?: string | undefined
}
type LoyaltyPoints = {
  balance?: LoyaltyPointsBalance | undefined
  label?: string | undefined
  localizedLabel?: LocalizedString | undefined
}
type LoyaltyObject = {
  accountId?: string | undefined
  accountName?: string | undefined
  appLinkData?: AppLinkData | undefined
  barcode?: Barcode | undefined
  classId?: string | undefined
  classReference?: LoyaltyClass | undefined
  disableExpirationNotification?: boolean | undefined
  groupingInfo?: GroupingInfo | undefined
  hasLinkedDevice?: boolean | undefined
  hasUsers?: boolean | undefined
  heroImage?: Image | undefined
  id?: string | undefined
  imageModulesData?: ImageModuleData[] | undefined
  infoModuleData?: InfoModuleData | undefined
  kind?: string | undefined
  linkedOfferIds?: string[] | undefined
  linksModuleData?: LinksModuleData | undefined
  locations?: LatLongPoint[] | undefined
  loyaltyPoints?: LoyaltyPoints | undefined
  messages?: Message[] | undefined
  passConstraints?: PassConstraints | undefined
  rotatingBarcode?: RotatingBarcode | undefined
  secondaryLoyaltyPoints?: LoyaltyPoints | undefined
  smartTapRedemptionValue?: string | undefined
  state?:
    | 'STATE_UNSPECIFIED'
    | 'ACTIVE'
    | 'active'
    | 'COMPLETED'
    | 'completed'
    | 'EXPIRED'
    | 'expired'
    | 'INACTIVE'
    | 'inactive'
    | undefined
  textModulesData?: TextModuleData[] | undefined
  validTimeInterval?: TimeInterval | undefined
  version?: string | undefined
}
type OfferClass = {
  allowMultipleUsersPerObject?: boolean | undefined
  callbackOptions?: CallbackOptions | undefined
  classTemplateInfo?: ClassTemplateInfo | undefined
  countryCode?: string | undefined
  details?: string | undefined
  enableSmartTap?: boolean | undefined
  finePrint?: string | undefined
  helpUri?: Uri | undefined
  heroImage?: Image | undefined
  hexBackgroundColor?: string | undefined
  homepageUri?: Uri | undefined
  id?: string | undefined
  imageModulesData?: ImageModuleData[] | undefined
  infoModuleData?: InfoModuleData | undefined
  issuerName?: string | undefined
  kind?: string | undefined
  linksModuleData?: LinksModuleData | undefined
  localizedDetails?: LocalizedString | undefined
  localizedFinePrint?: LocalizedString | undefined
  localizedIssuerName?: LocalizedString | undefined
  localizedProvider?: LocalizedString | undefined
  localizedShortTitle?: LocalizedString | undefined
  localizedTitle?: LocalizedString | undefined
  locations?: LatLongPoint[] | undefined
  messages?: Message[] | undefined
  multipleDevicesAndHoldersAllowedStatus?:
    | 'STATUS_UNSPECIFIED'
    | 'MULTIPLE_HOLDERS'
    | 'multipleHolders'
    | 'ONE_USER_ALL_DEVICES'
    | 'oneUserAllDevices'
    | 'ONE_USER_ONE_DEVICE'
    | 'oneUserOneDevice'
    | undefined
  provider?: string | undefined
  redemptionChannel?:
    | 'REDEMPTION_CHANNEL_UNSPECIFIED'
    | 'INSTORE'
    | 'instore'
    | 'ONLINE'
    | 'online'
    | 'BOTH'
    | 'both'
    | 'TEMPORARY_PRICE_REDUCTION'
    | 'temporaryPriceReduction'
    | undefined
  redemptionIssuers?: string[] | undefined
  review?: Review | undefined
  reviewStatus?:
    | 'REVIEW_STATUS_UNSPECIFIED'
    | 'UNDER_REVIEW'
    | 'underReview'
    | 'APPROVED'
    | 'approved'
    | 'REJECTED'
    | 'rejected'
    | 'DRAFT'
    | 'draft'
    | undefined
  securityAnimation?: SecurityAnimation | undefined
  shortTitle?: string | undefined
  textModulesData?: TextModuleData[] | undefined
  title?: string | undefined
  titleImage?: Image | undefined
  version?: string | undefined
  viewUnlockRequirement?:
    | 'VIEW_UNLOCK_REQUIREMENT_UNSPECIFIED'
    | 'UNLOCK_NOT_REQUIRED'
    | 'UNLOCK_REQUIRED_TO_VIEW'
    | undefined
  wordMark?: Image | undefined
}
type OfferObject = {
  appLinkData?: AppLinkData | undefined
  barcode?: Barcode | undefined
  classId?: string | undefined
  classReference?: OfferClass | undefined
  disableExpirationNotification?: boolean | undefined
  groupingInfo?: GroupingInfo | undefined
  hasLinkedDevice?: boolean | undefined
  hasUsers?: boolean | undefined
  heroImage?: Image | undefined
  id?: string | undefined
  imageModulesData?: ImageModuleData[] | undefined
  infoModuleData?: InfoModuleData | undefined
  kind?: string | undefined
  linksModuleData?: LinksModuleData | undefined
  locations?: LatLongPoint[] | undefined
  messages?: Message[] | undefined
  passConstraints?: PassConstraints | undefined
  rotatingBarcode?: RotatingBarcode | undefined
  smartTapRedemptionValue?: string | undefined
  state?:
    | 'STATE_UNSPECIFIED'
    | 'ACTIVE'
    | 'active'
    | 'COMPLETED'
    | 'completed'
    | 'EXPIRED'
    | 'expired'
    | 'INACTIVE'
    | 'inactive'
    | undefined
  textModulesData?: TextModuleData[] | undefined
  validTimeInterval?: TimeInterval | undefined
  version?: string | undefined
}
type ActivationOptions = {
  activationUrl?: string | undefined
  allowReactivation?: boolean | undefined
}
type TransitClass = {
  activationOptions?: ActivationOptions | undefined
  allowMultipleUsersPerObject?: boolean | undefined
  callbackOptions?: CallbackOptions | undefined
  classTemplateInfo?: ClassTemplateInfo | undefined
  countryCode?: string | undefined
  customCarriageLabel?: LocalizedString | undefined
  customCoachLabel?: LocalizedString | undefined
  customConcessionCategoryLabel?: LocalizedString | undefined
  customConfirmationCodeLabel?: LocalizedString | undefined
  customDiscountMessageLabel?: LocalizedString | undefined
  customFareClassLabel?: LocalizedString | undefined
  customFareNameLabel?: LocalizedString | undefined
  customOtherRestrictionsLabel?: LocalizedString | undefined
  customPlatformLabel?: LocalizedString | undefined
  customPurchaseFaceValueLabel?: LocalizedString | undefined
  customPurchasePriceLabel?: LocalizedString | undefined
  customPurchaseReceiptNumberLabel?: LocalizedString | undefined
  customRouteRestrictionsDetailsLabel?: LocalizedString | undefined
  customRouteRestrictionsLabel?: LocalizedString | undefined
  customSeatLabel?: LocalizedString | undefined
  customTicketNumberLabel?: LocalizedString | undefined
  customTimeRestrictionsLabel?: LocalizedString | undefined
  customTransitTerminusNameLabel?: LocalizedString | undefined
  customZoneLabel?: LocalizedString | undefined
  enableSingleLegItinerary?: boolean | undefined
  enableSmartTap?: boolean | undefined
  heroImage?: Image | undefined
  hexBackgroundColor?: string | undefined
  homepageUri?: Uri | undefined
  id?: string | undefined
  imageModulesData?: ImageModuleData[] | undefined
  infoModuleData?: InfoModuleData | undefined
  issuerName?: string | undefined
  languageOverride?: string | undefined
  linksModuleData?: LinksModuleData | undefined
  localizedIssuerName?: LocalizedString | undefined
  locations?: LatLongPoint[] | undefined
  logo?: Image | undefined
  messages?: Message[] | undefined
  multipleDevicesAndHoldersAllowedStatus?:
    | 'STATUS_UNSPECIFIED'
    | 'MULTIPLE_HOLDERS'
    | 'multipleHolders'
    | 'ONE_USER_ALL_DEVICES'
    | 'oneUserAllDevices'
    | 'ONE_USER_ONE_DEVICE'
    | 'oneUserOneDevice'
    | undefined
  redemptionIssuers?: string[] | undefined
  review?: Review | undefined
  reviewStatus?:
    | 'REVIEW_STATUS_UNSPECIFIED'
    | 'UNDER_REVIEW'
    | 'underReview'
    | 'APPROVED'
    | 'approved'
    | 'REJECTED'
    | 'rejected'
    | 'DRAFT'
    | 'draft'
    | undefined
  securityAnimation?: SecurityAnimation | undefined
  textModulesData?: TextModuleData[] | undefined
  transitOperatorName?: LocalizedString | undefined
  transitType?:
    | 'TRANSIT_TYPE_UNSPECIFIED'
    | 'BUS'
    | 'bus'
    | 'RAIL'
    | 'rail'
    | 'TRAM'
    | 'tram'
    | 'FERRY'
    | 'ferry'
    | 'OTHER'
    | 'other'
    | undefined
  version?: string | undefined
  viewUnlockRequirement?:
    | 'VIEW_UNLOCK_REQUIREMENT_UNSPECIFIED'
    | 'UNLOCK_NOT_REQUIRED'
    | 'UNLOCK_REQUIRED_TO_VIEW'
    | undefined
  watermark?: Image | undefined
  wordMark?: Image | undefined
}
type ActivationStatus = {
  state?:
    | 'UNKNOWN_STATE'
    | 'NOT_ACTIVATED'
    | 'not_activated'
    | 'ACTIVATED'
    | 'activated'
    | undefined
}
type DeviceContext = { deviceToken?: string | undefined }
type TicketCost = {
  discountMessage?: LocalizedString | undefined
  faceValue?: Money | undefined
  purchasePrice?: Money | undefined
}
type PurchaseDetails = {
  accountId?: string | undefined
  confirmationCode?: string | undefined
  purchaseDateTime?: string | undefined
  purchaseReceiptNumber?: string | undefined
  ticketCost?: TicketCost | undefined
}
type TicketSeat = {
  coach?: string | undefined
  customFareClass?: LocalizedString | undefined
  fareClass?:
    | 'FARE_CLASS_UNSPECIFIED'
    | 'ECONOMY'
    | 'economy'
    | 'FIRST'
    | 'first'
    | 'BUSINESS'
    | 'business'
    | undefined
  seat?: string | undefined
  seatAssignment?: LocalizedString | undefined
}
type TicketLeg = {
  arrivalDateTime?: string | undefined
  carriage?: string | undefined
  departureDateTime?: string | undefined
  destinationName?: LocalizedString | undefined
  destinationStationCode?: string | undefined
  fareName?: LocalizedString | undefined
  originName?: LocalizedString | undefined
  originStationCode?: string | undefined
  platform?: string | undefined
  ticketSeat?: TicketSeat | undefined
  ticketSeats?: TicketSeat[] | undefined
  transitOperatorName?: LocalizedString | undefined
  transitTerminusName?: LocalizedString | undefined
  zone?: string | undefined
}
type TicketRestrictions = {
  otherRestrictions?: LocalizedString | undefined
  routeRestrictions?: LocalizedString | undefined
  routeRestrictionsDetails?: LocalizedString | undefined
  timeRestrictions?: LocalizedString | undefined
}
type TransitObject = {
  activationStatus?: ActivationStatus | undefined
  appLinkData?: AppLinkData | undefined
  barcode?: Barcode | undefined
  classId?: string | undefined
  classReference?: TransitClass | undefined
  concessionCategory?:
    | 'CONCESSION_CATEGORY_UNSPECIFIED'
    | 'ADULT'
    | 'adult'
    | 'CHILD'
    | 'child'
    | 'SENIOR'
    | 'senior'
    | undefined
  customConcessionCategory?: LocalizedString | undefined
  customTicketStatus?: LocalizedString | undefined
  deviceContext?: DeviceContext | undefined
  disableExpirationNotification?: boolean | undefined
  groupingInfo?: GroupingInfo | undefined
  hasLinkedDevice?: boolean | undefined
  hasUsers?: boolean | undefined
  heroImage?: Image | undefined
  hexBackgroundColor?: string | undefined
  id?: string | undefined
  imageModulesData?: ImageModuleData[] | undefined
  infoModuleData?: InfoModuleData | undefined
  linksModuleData?: LinksModuleData | undefined
  locations?: LatLongPoint[] | undefined
  messages?: Message[] | undefined
  passConstraints?: PassConstraints | undefined
  passengerNames?: string | undefined
  passengerType?:
    | 'PASSENGER_TYPE_UNSPECIFIED'
    | 'SINGLE_PASSENGER'
    | 'singlePassenger'
    | 'MULTIPLE_PASSENGERS'
    | 'multiplePassengers'
    | undefined
  purchaseDetails?: PurchaseDetails | undefined
  rotatingBarcode?: RotatingBarcode | undefined
  smartTapRedemptionValue?: string | undefined
  state?:
    | 'STATE_UNSPECIFIED'
    | 'ACTIVE'
    | 'active'
    | 'COMPLETED'
    | 'completed'
    | 'EXPIRED'
    | 'expired'
    | 'INACTIVE'
    | 'inactive'
    | undefined
  textModulesData?: TextModuleData[] | undefined
  ticketLeg?: TicketLeg | undefined
  ticketLegs?: TicketLeg[] | undefined
  ticketNumber?: string | undefined
  ticketRestrictions?: TicketRestrictions | undefined
  ticketStatus?:
    | 'TICKET_STATUS_UNSPECIFIED'
    | 'USED'
    | 'used'
    | 'REFUNDED'
    | 'refunded'
    | 'EXCHANGED'
    | 'exchanged'
    | undefined
  tripId?: string | undefined
  tripType?: 'TRIP_TYPE_UNSPECIFIED' | 'ROUND_TRIP' | 'roundTrip' | 'ONE_WAY' | 'oneWay' | undefined
  validTimeInterval?: TimeInterval | undefined
  version?: string | undefined
}
type Resources = {
  eventTicketClasses?: EventTicketClass[] | undefined
  eventTicketObjects?: EventTicketObject[] | undefined
  flightClasses?: FlightClass[] | undefined
  flightObjects?: FlightObject[] | undefined
  giftCardClasses?: GiftCardClass[] | undefined
  giftCardObjects?: GiftCardObject[] | undefined
  loyaltyClasses?: LoyaltyClass[] | undefined
  loyaltyObjects?: LoyaltyObject[] | undefined
  offerClasses?: OfferClass[] | undefined
  offerObjects?: OfferObject[] | undefined
  transitClasses?: TransitClass[] | undefined
  transitObjects?: TransitObject[] | undefined
}
type JwtInsertResponse = { resources?: Resources | undefined; saveUri?: string | undefined }
type LoyaltyClassListResponse = {
  pagination?: Pagination | undefined
  resources?: LoyaltyClass[] | undefined
}
type LoyaltyClassAddMessageResponse = { resource?: LoyaltyClass | undefined }
type LoyaltyObjectListResponse = {
  pagination?: Pagination | undefined
  resources?: LoyaltyObject[] | undefined
}
type LoyaltyObjectAddMessageResponse = { resource?: LoyaltyObject | undefined }
type OfferClassListResponse = {
  pagination?: Pagination | undefined
  resources?: OfferClass[] | undefined
}
type OfferClassAddMessageResponse = { resource?: OfferClass | undefined }
type OfferObjectListResponse = {
  pagination?: Pagination | undefined
  resources?: OfferObject[] | undefined
}
type OfferObjectAddMessageResponse = { resource?: OfferObject | undefined }
type Permission = {
  emailAddress?: string | undefined
  role?:
    | 'ROLE_UNSPECIFIED'
    | 'OWNER'
    | 'owner'
    | 'READER'
    | 'reader'
    | 'WRITER'
    | 'writer'
    | undefined
}
type Permissions = { issuerId?: string | undefined; permissions?: Permission[] | undefined }
type PrivateText = { body?: LocalizedString | undefined; header?: LocalizedString | undefined }
type PrivateUri = { description?: LocalizedString | undefined; uri?: string | undefined }
type UploadPrivateDataRequest = {
  issuerId?: string | undefined
  text?: PrivateText | undefined
  uri?: PrivateUri | undefined
}
type UploadPrivateDataResponse = { privateContentId?: string | undefined }
type Blobstore2Info = {
  blobGeneration?: string | undefined
  blobId?: string | undefined
  downloadReadHandle?: string | undefined
  readToken?: string | undefined
  uploadMetadataContainer?: string | undefined
}
type ObjectId = {
  bucketName?: string | undefined
  generation?: string | undefined
  objectName?: string | undefined
}
type CompositeMedia = {
  blobRef?: string | undefined
  blobstore2Info?: Blobstore2Info | undefined
  cosmoBinaryReference?: string | undefined
  crc32cHash?: number | undefined
  inline?: string | undefined
  length?: string | undefined
  md5Hash?: string | undefined
  objectId?: ObjectId | undefined
  path?: string | undefined
  referenceType?:
    | 'PATH'
    | 'BLOB_REF'
    | 'INLINE'
    | 'BIGSTORE_REF'
    | 'COSMO_BINARY_REFERENCE'
    | undefined
  sha1Hash?: string | undefined
}
type ContentTypeInfo = {
  bestGuess?: string | undefined
  fromBytes?: string | undefined
  fromFileName?: string | undefined
  fromHeader?: string | undefined
  fromUrlPath?: string | undefined
}
type DiffChecksumsResponse = {
  checksumsLocation?: CompositeMedia | undefined
  chunkSizeBytes?: string | undefined
  objectLocation?: CompositeMedia | undefined
  objectSizeBytes?: string | undefined
  objectVersion?: string | undefined
}
type DiffDownloadResponse = { objectLocation?: CompositeMedia | undefined }
type DiffUploadRequest = {
  checksumsInfo?: CompositeMedia | undefined
  objectInfo?: CompositeMedia | undefined
  objectVersion?: string | undefined
}
type DiffUploadResponse = {
  objectVersion?: string | undefined
  originalObject?: CompositeMedia | undefined
}
type DiffVersionResponse = {
  objectSizeBytes?: string | undefined
  objectVersion?: string | undefined
}
type DownloadParameters = {
  allowGzipCompression?: boolean | undefined
  ignoreRange?: boolean | undefined
}
type Media = {
  algorithm?: string | undefined
  bigstoreObjectRef?: string | undefined
  blobRef?: string | undefined
  blobstore2Info?: Blobstore2Info | undefined
  compositeMedia?: CompositeMedia[] | undefined
  contentType?: string | undefined
  contentTypeInfo?: ContentTypeInfo | undefined
  cosmoBinaryReference?: string | undefined
  crc32cHash?: number | undefined
  diffChecksumsResponse?: DiffChecksumsResponse | undefined
  diffDownloadResponse?: DiffDownloadResponse | undefined
  diffUploadRequest?: DiffUploadRequest | undefined
  diffUploadResponse?: DiffUploadResponse | undefined
  diffVersionResponse?: DiffVersionResponse | undefined
  downloadParameters?: DownloadParameters | undefined
  filename?: string | undefined
  hash?: string | undefined
  hashVerified?: boolean | undefined
  inline?: string | undefined
  isPotentialRetry?: boolean | undefined
  length?: string | undefined
  md5Hash?: string | undefined
  mediaId?: string | undefined
  objectId?: ObjectId | undefined
  path?: string | undefined
  referenceType?:
    | 'PATH'
    | 'BLOB_REF'
    | 'INLINE'
    | 'GET_MEDIA'
    | 'COMPOSITE_MEDIA'
    | 'BIGSTORE_REF'
    | 'DIFF_VERSION_RESPONSE'
    | 'DIFF_CHECKSUMS_RESPONSE'
    | 'DIFF_DOWNLOAD_RESPONSE'
    | 'DIFF_UPLOAD_REQUEST'
    | 'DIFF_UPLOAD_RESPONSE'
    | 'COSMO_BINARY_REFERENCE'
    | 'ARBITRARY_BYTES'
    | undefined
  sha1Hash?: string | undefined
  sha256Hash?: string | undefined
  timestamp?: string | undefined
  token?: string | undefined
}
type MediaRequestInfo = {
  currentBytes?: string | undefined
  customData?: string | undefined
  diffObjectVersion?: string | undefined
  finalStatus?: number | undefined
  notificationType?: 'START' | 'PROGRESS' | 'END' | 'RESPONSE_SENT' | 'ERROR' | undefined
  requestId?: string | undefined
  totalBytes?: string | undefined
  totalBytesIsEstimated?: boolean | undefined
}
type UploadPrivateImageRequest = {
  blob?: Media | undefined
  mediaRequestInfo?: MediaRequestInfo | undefined
}
type UploadPrivateImageResponse = { privateContentId?: string | undefined }
type SignUpInfo = { classId?: string | undefined }
type IssuerToUserInfo = {
  action?: 'ACTION_UNSPECIFIED' | 'S2AP' | 's2ap' | 'SIGN_UP' | 'signUp' | undefined
  signUpInfo?: SignUpInfo | undefined
  url?: string | undefined
  value?: string | undefined
}
type SmartTap = {
  id?: string | undefined
  infos?: IssuerToUserInfo[] | undefined
  kind?: string | undefined
  merchantId?: string | undefined
}
type TransitClassListResponse = {
  pagination?: Pagination | undefined
  resources?: TransitClass[] | undefined
}
type TransitClassAddMessageResponse = { resource?: TransitClass | undefined }
type TransitObjectListResponse = {
  pagination?: Pagination | undefined
  resources?: TransitObject[] | undefined
}
type TransitObjectAddMessageResponse = { resource?: TransitObject | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/walletobjects/v1/eventTicketClass': {
      $get: {
        input: {
          query: {
            issuerId?: string | undefined
            maxResults?: number | undefined
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
        output: EventTicketClassListResponse
        outputFormat: 'json'
        status: 200
      }
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
        } & { json: EventTicketClass }
        output: EventTicketClass
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/walletobjects/v1/eventTicketClass/:resourceId': {
      $get: {
        input: { param: { resourceId: string } } & {
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
        output: EventTicketClass
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { resourceId: string } } & {
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
        } & { json: EventTicketClass }
        output: EventTicketClass
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { resourceId: string } } & {
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
        } & { json: EventTicketClass }
        output: EventTicketClass
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/walletobjects/v1/eventTicketClass/:resourceId/addMessage': {
      $post: {
        input: { param: { resourceId: string } } & {
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
        } & { json: AddMessageRequest }
        output: EventTicketClassAddMessageResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/walletobjects/v1/eventTicketObject': {
      $get: {
        input: {
          query: {
            classId?: string | undefined
            maxResults?: number | undefined
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
        output: EventTicketObjectListResponse
        outputFormat: 'json'
        status: 200
      }
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
        } & { json: EventTicketObject }
        output: EventTicketObject
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/walletobjects/v1/eventTicketObject/:resourceId': {
      $get: {
        input: { param: { resourceId: string } } & {
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
        output: EventTicketObject
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { resourceId: string } } & {
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
        } & { json: EventTicketObject }
        output: EventTicketObject
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { resourceId: string } } & {
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
        } & { json: EventTicketObject }
        output: EventTicketObject
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/walletobjects/v1/eventTicketObject/:resourceId/addMessage': {
      $post: {
        input: { param: { resourceId: string } } & {
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
        } & { json: AddMessageRequest }
        output: EventTicketObjectAddMessageResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/walletobjects/v1/eventTicketObject/:resourceId/modifyLinkedOfferObjects': {
      $post: {
        input: { param: { resourceId: string } } & {
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
        } & { json: ModifyLinkedOfferObjectsRequest }
        output: EventTicketObject
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/walletobjects/v1/flightClass': {
      $get: {
        input: {
          query: {
            issuerId?: string | undefined
            maxResults?: number | undefined
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
        output: FlightClassListResponse
        outputFormat: 'json'
        status: 200
      }
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
        } & { json: FlightClass }
        output: FlightClass
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/walletobjects/v1/flightClass/:resourceId': {
      $get: {
        input: { param: { resourceId: string } } & {
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
        output: FlightClass
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { resourceId: string } } & {
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
        } & { json: FlightClass }
        output: FlightClass
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { resourceId: string } } & {
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
        } & { json: FlightClass }
        output: FlightClass
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/walletobjects/v1/flightClass/:resourceId/addMessage': {
      $post: {
        input: { param: { resourceId: string } } & {
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
        } & { json: AddMessageRequest }
        output: FlightClassAddMessageResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/walletobjects/v1/flightObject': {
      $get: {
        input: {
          query: {
            classId?: string | undefined
            maxResults?: number | undefined
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
        output: FlightObjectListResponse
        outputFormat: 'json'
        status: 200
      }
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
        } & { json: FlightObject }
        output: FlightObject
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/walletobjects/v1/flightObject/:resourceId': {
      $get: {
        input: { param: { resourceId: string } } & {
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
        output: FlightObject
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { resourceId: string } } & {
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
        } & { json: FlightObject }
        output: FlightObject
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { resourceId: string } } & {
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
        } & { json: FlightObject }
        output: FlightObject
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/walletobjects/v1/flightObject/:resourceId/addMessage': {
      $post: {
        input: { param: { resourceId: string } } & {
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
        } & { json: AddMessageRequest }
        output: FlightObjectAddMessageResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/walletobjects/v1/genericClass': {
      $get: {
        input: {
          query: {
            issuerId?: string | undefined
            maxResults?: number | undefined
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
        output: GenericClassListResponse
        outputFormat: 'json'
        status: 200
      }
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
        } & { json: GenericClass }
        output: GenericClass
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/walletobjects/v1/genericClass/:resourceId': {
      $get: {
        input: { param: { resourceId: string } } & {
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
        output: GenericClass
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { resourceId: string } } & {
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
        } & { json: GenericClass }
        output: GenericClass
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { resourceId: string } } & {
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
        } & { json: GenericClass }
        output: GenericClass
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/walletobjects/v1/genericObject': {
      $get: {
        input: {
          query: {
            classId?: string | undefined
            maxResults?: number | undefined
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
        output: GenericObjectListResponse
        outputFormat: 'json'
        status: 200
      }
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
        } & { json: GenericObject }
        output: GenericObject
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/walletobjects/v1/genericObject/:resourceId': {
      $get: {
        input: { param: { resourceId: string } } & {
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
        output: GenericObject
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { resourceId: string } } & {
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
        } & { json: GenericObject }
        output: GenericObject
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { resourceId: string } } & {
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
        } & { json: GenericObject }
        output: GenericObject
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/walletobjects/v1/giftCardClass': {
      $get: {
        input: {
          query: {
            issuerId?: string | undefined
            maxResults?: number | undefined
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
        output: GiftCardClassListResponse
        outputFormat: 'json'
        status: 200
      }
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
        } & { json: GiftCardClass }
        output: GiftCardClass
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/walletobjects/v1/giftCardClass/:resourceId': {
      $get: {
        input: { param: { resourceId: string } } & {
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
        output: GiftCardClass
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { resourceId: string } } & {
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
        } & { json: GiftCardClass }
        output: GiftCardClass
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { resourceId: string } } & {
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
        } & { json: GiftCardClass }
        output: GiftCardClass
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/walletobjects/v1/giftCardClass/:resourceId/addMessage': {
      $post: {
        input: { param: { resourceId: string } } & {
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
        } & { json: AddMessageRequest }
        output: GiftCardClassAddMessageResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/walletobjects/v1/giftCardObject': {
      $get: {
        input: {
          query: {
            classId?: string | undefined
            maxResults?: number | undefined
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
        output: GiftCardObjectListResponse
        outputFormat: 'json'
        status: 200
      }
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
        } & { json: GiftCardObject }
        output: GiftCardObject
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/walletobjects/v1/giftCardObject/:resourceId': {
      $get: {
        input: { param: { resourceId: string } } & {
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
        output: GiftCardObject
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { resourceId: string } } & {
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
        } & { json: GiftCardObject }
        output: GiftCardObject
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { resourceId: string } } & {
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
        } & { json: GiftCardObject }
        output: GiftCardObject
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/walletobjects/v1/giftCardObject/:resourceId/addMessage': {
      $post: {
        input: { param: { resourceId: string } } & {
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
        } & { json: AddMessageRequest }
        output: GiftCardObjectAddMessageResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/walletobjects/v1/issuer': {
      $get: {
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
        }
        output: IssuerListResponse
        outputFormat: 'json'
        status: 200
      }
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
        } & { json: Issuer }
        output: Issuer
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/walletobjects/v1/issuer/:resourceId': {
      $get: {
        input: { param: { resourceId: string } } & {
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
        output: Issuer
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { resourceId: string } } & {
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
        } & { json: Issuer }
        output: Issuer
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { resourceId: string } } & {
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
        } & { json: Issuer }
        output: Issuer
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/walletobjects/v1/jwt': {
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
        } & { json: JwtResource }
        output: JwtInsertResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/walletobjects/v1/loyaltyClass': {
      $get: {
        input: {
          query: {
            issuerId?: string | undefined
            maxResults?: number | undefined
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
        output: LoyaltyClassListResponse
        outputFormat: 'json'
        status: 200
      }
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
        } & { json: LoyaltyClass }
        output: LoyaltyClass
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/walletobjects/v1/loyaltyClass/:resourceId': {
      $get: {
        input: { param: { resourceId: string } } & {
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
        output: LoyaltyClass
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { resourceId: string } } & {
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
        } & { json: LoyaltyClass }
        output: LoyaltyClass
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { resourceId: string } } & {
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
        } & { json: LoyaltyClass }
        output: LoyaltyClass
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/walletobjects/v1/loyaltyClass/:resourceId/addMessage': {
      $post: {
        input: { param: { resourceId: string } } & {
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
        } & { json: AddMessageRequest }
        output: LoyaltyClassAddMessageResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/walletobjects/v1/loyaltyObject': {
      $get: {
        input: {
          query: {
            classId?: string | undefined
            maxResults?: number | undefined
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
        output: LoyaltyObjectListResponse
        outputFormat: 'json'
        status: 200
      }
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
        } & { json: LoyaltyObject }
        output: LoyaltyObject
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/walletobjects/v1/loyaltyObject/:resourceId': {
      $get: {
        input: { param: { resourceId: string } } & {
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
        output: LoyaltyObject
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { resourceId: string } } & {
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
        } & { json: LoyaltyObject }
        output: LoyaltyObject
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { resourceId: string } } & {
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
        } & { json: LoyaltyObject }
        output: LoyaltyObject
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/walletobjects/v1/loyaltyObject/:resourceId/addMessage': {
      $post: {
        input: { param: { resourceId: string } } & {
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
        } & { json: AddMessageRequest }
        output: LoyaltyObjectAddMessageResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/walletobjects/v1/loyaltyObject/:resourceId/modifyLinkedOfferObjects': {
      $post: {
        input: { param: { resourceId: string } } & {
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
        } & { json: ModifyLinkedOfferObjectsRequest }
        output: LoyaltyObject
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/walletobjects/v1/offerClass': {
      $get: {
        input: {
          query: {
            issuerId?: string | undefined
            maxResults?: number | undefined
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
        output: OfferClassListResponse
        outputFormat: 'json'
        status: 200
      }
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
        } & { json: OfferClass }
        output: OfferClass
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/walletobjects/v1/offerClass/:resourceId': {
      $get: {
        input: { param: { resourceId: string } } & {
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
        output: OfferClass
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { resourceId: string } } & {
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
        } & { json: OfferClass }
        output: OfferClass
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { resourceId: string } } & {
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
        } & { json: OfferClass }
        output: OfferClass
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/walletobjects/v1/offerClass/:resourceId/addMessage': {
      $post: {
        input: { param: { resourceId: string } } & {
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
        } & { json: AddMessageRequest }
        output: OfferClassAddMessageResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/walletobjects/v1/offerObject': {
      $get: {
        input: {
          query: {
            classId?: string | undefined
            maxResults?: number | undefined
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
        output: OfferObjectListResponse
        outputFormat: 'json'
        status: 200
      }
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
        } & { json: OfferObject }
        output: OfferObject
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/walletobjects/v1/offerObject/:resourceId': {
      $get: {
        input: { param: { resourceId: string } } & {
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
        output: OfferObject
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { resourceId: string } } & {
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
        } & { json: OfferObject }
        output: OfferObject
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { resourceId: string } } & {
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
        } & { json: OfferObject }
        output: OfferObject
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/walletobjects/v1/offerObject/:resourceId/addMessage': {
      $post: {
        input: { param: { resourceId: string } } & {
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
        } & { json: AddMessageRequest }
        output: OfferObjectAddMessageResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/walletobjects/v1/permissions/:resourceId': {
      $get: {
        input: { param: { resourceId: string } } & {
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
        output: Permissions
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { resourceId: string } } & {
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
        } & { json: Permissions }
        output: Permissions
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/walletobjects/v1/privateContent/uploadPrivateData': {
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
        } & { json: UploadPrivateDataRequest }
        output: UploadPrivateDataResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/walletobjects/v1/privateContent/:issuerId/uploadPrivateImage': {
      $post: {
        input: { param: { issuerId: string } } & {
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
        } & { json: UploadPrivateImageRequest }
        output: UploadPrivateImageResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/walletobjects/v1/smartTap': {
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
        } & { json: SmartTap }
        output: SmartTap
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/walletobjects/v1/transitClass': {
      $get: {
        input: {
          query: {
            issuerId?: string | undefined
            maxResults?: number | undefined
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
        output: TransitClassListResponse
        outputFormat: 'json'
        status: 200
      }
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
        } & { json: TransitClass }
        output: TransitClass
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/walletobjects/v1/transitClass/:resourceId': {
      $get: {
        input: { param: { resourceId: string } } & {
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
        output: TransitClass
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { resourceId: string } } & {
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
        } & { json: TransitClass }
        output: TransitClass
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { resourceId: string } } & {
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
        } & { json: TransitClass }
        output: TransitClass
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/walletobjects/v1/transitClass/:resourceId/addMessage': {
      $post: {
        input: { param: { resourceId: string } } & {
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
        } & { json: AddMessageRequest }
        output: TransitClassAddMessageResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/walletobjects/v1/transitObject': {
      $get: {
        input: {
          query: {
            classId?: string | undefined
            maxResults?: number | undefined
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
        output: TransitObjectListResponse
        outputFormat: 'json'
        status: 200
      }
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
        } & { json: TransitObject }
        output: TransitObject
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/walletobjects/v1/transitObject/:resourceId': {
      $get: {
        input: { param: { resourceId: string } } & {
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
        output: TransitObject
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { resourceId: string } } & {
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
        } & { json: TransitObject }
        output: TransitObject
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { resourceId: string } } & {
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
        } & { json: TransitObject }
        output: TransitObject
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/walletobjects/v1/transitObject/:resourceId/addMessage': {
      $post: {
        input: { param: { resourceId: string } } & {
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
        } & { json: AddMessageRequest }
        output: TransitObjectAddMessageResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
