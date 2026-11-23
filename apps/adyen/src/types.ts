type ApplePaySessionRequest = {
  displayName: string
  domainName: string
  merchantIdentifier: string
}
type ApplePaySessionResponse = { data: string }
type CommonField = { name?: string | undefined; version?: string | undefined }
type ExternalPlatform = {
  integrator?: string | undefined
  name?: string | undefined
  version?: string | undefined
}
type MerchantDevice = {
  os?: string | undefined
  osVersion?: string | undefined
  reference?: string | undefined
}
type ShopperInteractionDevice = {
  locale?: string | undefined
  os?: string | undefined
  osVersion?: string | undefined
}
type ApplicationInfo = {
  adyenLibrary?: CommonField | undefined
  adyenPaymentSource?: CommonField | undefined
  externalPlatform?: ExternalPlatform | undefined
  merchantApplication?: CommonField | undefined
  merchantDevice?: MerchantDevice | undefined
  shopperInteractionDevice?: ShopperInteractionDevice | undefined
}
type Agency = { invoiceNumber?: string | undefined; planName?: string | undefined }
type Leg = {
  carrierCode?: string | undefined
  classOfTravel?: string | undefined
  dateOfTravel?: string | undefined
  departureAirportCode?: string | undefined
  departureTax?: bigint | undefined
  destinationAirportCode?: string | undefined
  fareBasisCode?: string | undefined
  flightNumber?: string | undefined
  stopOverCode?: string | undefined
}
type Passenger = {
  dateOfBirth?: string | undefined
  firstName?: string | undefined
  lastName?: string | undefined
  phoneNumber?: string | undefined
  travellerType?: string | undefined
}
type Ticket = {
  issueAddress?: string | undefined
  issueDate?: string | undefined
  number?: string | undefined
}
type TravelAgency = { code?: string | undefined; name?: string | undefined }
type Airline = {
  agency?: Agency | undefined
  boardingFee?: bigint | undefined
  code?: string | undefined
  computerizedReservationSystem?: string | undefined
  customerReferenceNumber?: string | undefined
  designatorCode?: string | undefined
  documentType?: string | undefined
  flightDate?: string | undefined
  legs?: Leg[] | undefined
  passengerName: string
  passengers?: Passenger[] | undefined
  ticket?: Ticket | undefined
  travelAgency?: TravelAgency | undefined
}
type PickupInfo = {
  city?: string | undefined
  countryCode?: string | undefined
  date?: string | undefined
  stateOrProvince?: string | undefined
}
type RentalSurcharges = {
  fuel?: bigint | undefined
  insurance?: bigint | undefined
  oneWayDropOff?: bigint | undefined
}
type ReturnInfo = {
  city?: string | undefined
  countryCode?: string | undefined
  date?: string | undefined
  locationId?: string | undefined
  stateOrProvince?: string | undefined
}
type CarRental = {
  customerServicePhoneNumber?: string | undefined
  noShow?: boolean | undefined
  pickupInfo?: PickupInfo | undefined
  rateType?: 'daily' | 'weekly' | undefined
  rentalAgreementNumber?: string | undefined
  rentalClassId?: string | undefined
  rentalDays?: number | undefined
  rentalRate?: bigint | undefined
  rentalSurcharges?: RentalSurcharges | undefined
  renterName: string
  returnInfo?: ReturnInfo | undefined
  taxExempt?: boolean | undefined
}
type Destination = {
  countryCode?: string | undefined
  postalCode?: string | undefined
  stateOrProvince?: string | undefined
}
type ItemDetailLine = {
  commodityCode?: string | undefined
  description?: string | undefined
  discountAmount?: bigint | undefined
  productCode?: string | undefined
  quantity?: bigint | undefined
  totalAmount?: bigint | undefined
  unitOfMeasure?: string | undefined
  unitPrice?: bigint | undefined
}
type LevelTwoThree = {
  customerReferenceNumber?: string | undefined
  destination?: Destination | undefined
  dutyAmount?: bigint | undefined
  freightAmount?: bigint | undefined
  itemDetailLines?: ItemDetailLine[] | undefined
  orderDate?: string | undefined
  shipFromPostalCode?: string | undefined
  totalTaxAmount?: bigint | undefined
}
type Folio = { cashAdvances?: bigint | undefined; number?: string | undefined }
type Room = { numberOfNights?: number | undefined; rate?: bigint | undefined }
type Lodging = {
  checkInDate?: string | undefined
  checkOutDate?: string | undefined
  customerServicePhoneNumber?: string | undefined
  fireSafetyCompliance?: boolean | undefined
  folio?: Folio | undefined
  foodBeverageCharges?: bigint | undefined
  lodgingChargeType?: 'advanceDeposit' | 'noShow' | 'stay' | undefined
  noShow?: boolean | undefined
  prepaidExpenses?: bigint | undefined
  propertyPhoneNumber?: string | undefined
  renterName?: string | undefined
  rooms?: Room[] | undefined
  totalRoomTax?: bigint | undefined
  totalTax?: bigint | undefined
}
type TemporaryServices = {
  employeeName?: string | undefined
  endDate?: string | undefined
  hourRate?: number | undefined
  hoursWorked?: number | undefined
  jobDescription?: string | undefined
  serviceRequestor?: string | undefined
  startDate?: string | undefined
}
type EnhancedSchemeData = {
  airline?: Airline | undefined
  carRental?: CarRental | undefined
  levelTwoThree?: LevelTwoThree | undefined
  lodging?: Lodging | undefined
  temporaryServices?: TemporaryServices | undefined
}
type StandalonePaymentCancelRequest = {
  applicationInfo?: ApplicationInfo | undefined
  enhancedSchemeData?: EnhancedSchemeData | undefined
  merchantAccount: string
  paymentReference: string
  reference?: string | undefined
}
type StandalonePaymentCancelResponse = {
  merchantAccount: string
  paymentReference: string
  pspReference: string
  reference?: string | undefined
  status: 'received'
}
type ServiceError = {
  additionalData?: { [x: string]: string } | undefined
  errorCode?: string | undefined
  errorType?: string | undefined
  message?: string | undefined
  pspReference?: string | undefined
  status?: number | undefined
}
type CardDetailsRequest = {
  cardNumber?: string | undefined
  countryCode?: string | undefined
  encryptedCardNumber?: string | undefined
  merchantAccount: string
  supportedBrands?: string[] | undefined
}
type CardBrandDetails = { supported?: boolean | undefined; type?: string | undefined }
type CardDetailsResponse = {
  brands?: CardBrandDetails[] | undefined
  fundingSource?: string | undefined
  isCardCommercial?: boolean | undefined
  issuingCountryCode?: string | undefined
}
type DonationCampaignsRequest = {
  currency: string
  label?: string | undefined
  locale?: string | undefined
  merchantAccount: string
  store?: string | undefined
}
type Amounts = { currency: string; values: bigint[] }
type Donation = {
  currency: string
  donationType: string
  maxRoundupAmount?: bigint | undefined
  type: string
  values?: bigint[] | undefined
}
type DonationCampaign = {
  amounts?: Amounts | undefined
  bannerUrl?: string | undefined
  campaignName?: string | undefined
  causeName?: string | undefined
  donation?: Donation | undefined
  id?: string | undefined
  logoUrl?: string | undefined
  nonprofitDescription?: string | undefined
  nonprofitName?: string | undefined
  nonprofitUrl?: string | undefined
  termsAndConditionsUrl?: string | undefined
}
type DonationCampaignsResponse = { donationCampaigns?: DonationCampaign[] | undefined }
type AccountInfo = {
  accountAgeIndicator?:
    | 'notApplicable'
    | 'thisTransaction'
    | 'lessThan30Days'
    | 'from30To60Days'
    | 'moreThan60Days'
    | undefined
  accountChangeDate?: string | undefined
  accountChangeIndicator?:
    | 'thisTransaction'
    | 'lessThan30Days'
    | 'from30To60Days'
    | 'moreThan60Days'
    | undefined
  accountCreationDate?: string | undefined
  accountType?: 'notApplicable' | 'credit' | 'debit' | undefined
  addCardAttemptsDay?: number | undefined
  deliveryAddressUsageDate?: string | undefined
  deliveryAddressUsageIndicator?:
    | 'thisTransaction'
    | 'lessThan30Days'
    | 'from30To60Days'
    | 'moreThan60Days'
    | undefined
  homePhone?: string | undefined
  mobilePhone?: string | undefined
  passwordChangeDate?: string | undefined
  passwordChangeIndicator?:
    | 'notApplicable'
    | 'thisTransaction'
    | 'lessThan30Days'
    | 'from30To60Days'
    | 'moreThan60Days'
    | undefined
  pastTransactionsDay?: number | undefined
  pastTransactionsYear?: number | undefined
  paymentAccountAge?: string | undefined
  paymentAccountIndicator?:
    | 'notApplicable'
    | 'thisTransaction'
    | 'lessThan30Days'
    | 'from30To60Days'
    | 'moreThan60Days'
    | undefined
  purchasesLast6Months?: number | undefined
  suspiciousActivity?: boolean | undefined
  workPhone?: string | undefined
}
type Amount = { currency: string; value: bigint }
type ThreeDSRequestData = {
  challengeWindowSize?: '01' | '02' | '03' | '04' | '05' | undefined
  dataOnly?: 'false' | 'true' | undefined
  nativeThreeDS?: 'preferred' | 'disabled' | undefined
  threeDSVersion?: '2.1.0' | '2.2.0' | undefined
}
type AuthenticationData = {
  attemptAuthentication?: 'always' | 'never' | undefined
  authenticationOnly?: boolean | undefined
  threeDSRequestData?: ThreeDSRequestData | undefined
}
type BillingAddress = {
  city: string
  country: string
  houseNumberOrName: string
  postalCode: string
  stateOrProvince?: string | undefined
  street: string
}
type BrowserInfo = {
  acceptHeader: string
  colorDepth: number
  javaEnabled: boolean
  javaScriptEnabled?: boolean | undefined
  language: string
  screenHeight: number
  screenWidth: number
  timeZoneOffset: number
  userAgent: string
}
type DeliveryAddress = {
  city: string
  country: string
  firstName?: string | undefined
  houseNumberOrName: string
  lastName?: string | undefined
  postalCode: string
  stateOrProvince?: string | undefined
  street: string
}
type LineItem = {
  amountExcludingTax?: bigint | undefined
  amountIncludingTax?: bigint | undefined
  brand?: string | undefined
  color?: string | undefined
  description?: string | undefined
  id?: string | undefined
  imageUrl?: string | undefined
  itemCategory?: string | undefined
  manufacturer?: string | undefined
  marketplaceSellerId?: string | undefined
  productUrl?: string | undefined
  quantity?: bigint | undefined
  receiverEmail?: string | undefined
  riskCategory?: string | undefined
  size?: string | undefined
  sku?: string | undefined
  taxAmount?: bigint | undefined
  taxPercentage?: bigint | undefined
  upc?: string | undefined
}
type MerchantRiskIndicator = {
  addressMatch?: boolean | undefined
  deliveryAddressIndicator?:
    | 'shipToBillingAddress'
    | 'shipToVerifiedAddress'
    | 'shipToNewAddress'
    | 'shipToStore'
    | 'digitalGoods'
    | 'goodsNotShipped'
    | 'other'
    | undefined
  deliveryEmail?: string | undefined
  deliveryEmailAddress?: string | undefined
  deliveryTimeframe?:
    | 'electronicDelivery'
    | 'sameDayShipping'
    | 'overnightShipping'
    | 'twoOrMoreDaysShipping'
    | undefined
  giftCardAmount?: Amount | undefined
  giftCardCount?: number | undefined
  giftCardCurr?: string | undefined
  preOrderDate?: string | undefined
  preOrderPurchase?: boolean | undefined
  preOrderPurchaseInd?: string | undefined
  reorderItems?: boolean | undefined
  reorderItemsInd?: string | undefined
  shipIndicator?: string | undefined
}
type ThreeDSecureData = {
  authenticationResponse?: 'Y' | 'N' | 'U' | 'A' | undefined
  cavv?: string | undefined
  cavvAlgorithm?: string | undefined
  challengeCancel?: '01' | '02' | '03' | '04' | '05' | '06' | '07' | undefined
  directoryResponse?: 'A' | 'C' | 'D' | 'I' | 'N' | 'R' | 'U' | 'Y' | undefined
  dsTransID?: string | undefined
  eci?: string | undefined
  riskScore?: string | undefined
  threeDSVersion?: string | undefined
  tokenAuthenticationVerificationValue?: string | undefined
  transStatusReason?: string | undefined
  xid?: string | undefined
}
type ApplePayDonations = {
  applePayToken: string
  checkoutAttemptId?: string | undefined
  fundingSource?: 'credit' | 'debit' | 'prepaid' | undefined
  recurringDetailReference?: string | undefined
  sdkData?: string | undefined
  storedPaymentMethodId?: string | undefined
  type?: 'applepay' | undefined
}
type CardDonations = {
  billingSequenceNumber?: string | undefined
  brand?: string | undefined
  checkoutAttemptId?: string | undefined
  'cupsecureplus.smscode'?: string | undefined
  cvc?: string | undefined
  encryptedCard?: string | undefined
  encryptedCardNumber?: string | undefined
  encryptedExpiryMonth?: string | undefined
  encryptedExpiryYear?: string | undefined
  encryptedPassword?: string | undefined
  encryptedSecurityCode?: string | undefined
  expiryMonth?: string | undefined
  expiryYear?: string | undefined
  fastlaneData?: string | undefined
  fundingSource?: 'credit' | 'debit' | 'prepaid' | undefined
  holderName?: string | undefined
  networkPaymentReference?: string | undefined
  number?: string | undefined
  recurringDetailReference?: string | undefined
  sdkData?: string | undefined
  shopperNotificationReference?: string | undefined
  srcCorrelationId?: string | undefined
  srcDigitalCardId?: string | undefined
  srcScheme?: string | undefined
  srcTokenReference?: string | undefined
  storedPaymentMethodId?: string | undefined
  threeDS2SdkVersion?: string | undefined
  type?: 'bcmc' | 'scheme' | 'networkToken' | 'giftcard' | 'card' | 'clicktopay' | undefined
}
type GooglePayDonations = {
  checkoutAttemptId?: string | undefined
  fundingSource?: 'credit' | 'debit' | 'prepaid' | undefined
  googlePayCardNetwork?: string | undefined
  googlePayToken: string
  recurringDetailReference?: string | undefined
  sdkData?: string | undefined
  storedPaymentMethodId?: string | undefined
  threeDS2SdkVersion?: string | undefined
  type?: 'googlepay' | undefined
}
type IdealDonations = {
  checkoutAttemptId?: string | undefined
  issuer?: string | undefined
  recurringDetailReference?: string | undefined
  sdkData?: string | undefined
  storedPaymentMethodId?: string | undefined
  type?: 'ideal' | undefined
}
type PayWithGoogleDonations = {
  checkoutAttemptId?: string | undefined
  fundingSource?: 'credit' | 'debit' | 'prepaid' | undefined
  googlePayToken: string
  recurringDetailReference?: string | undefined
  sdkData?: string | undefined
  storedPaymentMethodId?: string | undefined
  threeDS2SdkVersion?: string | undefined
  type?: 'paywithgoogle' | undefined
}
type SepaDirectDebitDonations = {
  checkoutAttemptId?: string | undefined
  recurringDetailReference?: string | undefined
  sdkData?: string | undefined
  storedPaymentMethodId?: string | undefined
  type?: 'sepadirectdebit' | undefined
}
type ShopperName = { firstName: string; lastName: string }
type AcctInfo = {
  chAccAgeInd?: '01' | '02' | '03' | '04' | '05' | undefined
  chAccChange?: string | undefined
  chAccChangeInd?: '01' | '02' | '03' | '04' | undefined
  chAccPwChange?: string | undefined
  chAccPwChangeInd?: '01' | '02' | '03' | '04' | '05' | undefined
  chAccString?: string | undefined
  nbPurchaseAccount?: string | undefined
  paymentAccAge?: string | undefined
  paymentAccInd?: '01' | '02' | '03' | '04' | '05' | undefined
  provisionAttemptsDay?: string | undefined
  shipAddressUsage?: string | undefined
  shipAddressUsageInd?: '01' | '02' | '03' | '04' | undefined
  shipNameIndicator?: '01' | '02' | undefined
  suspiciousAccActivity?: '01' | '02' | undefined
  txnActivityDay?: string | undefined
  txnActivityYear?: string | undefined
}
type DeviceRenderOptions = {
  sdkInterface?: 'native' | 'html' | 'both' | undefined
  sdkUiType?: ('multiSelect' | 'otherHtml' | 'outOfBand' | 'singleSelect' | 'text')[] | undefined
}
type Phone = { cc?: string | undefined; subscriber?: string | undefined }
type SDKEphemPubKey = {
  crv?: string | undefined
  kty?: string | undefined
  x?: string | undefined
  y?: string | undefined
}
type ThreeDSRequestorAuthenticationInfo = {
  threeDSReqAuthData?: string | undefined
  threeDSReqAuthMethod?: '01' | '02' | '03' | '04' | '05' | '06' | undefined
  threeDSReqAuthTimestamp?: string | undefined
}
type ThreeDSRequestorPriorAuthenticationInfo = {
  threeDSReqPriorAuthData?: string | undefined
  threeDSReqPriorAuthMethod?: '01' | '02' | '03' | '04' | undefined
  threeDSReqPriorAuthTimestamp?: string | undefined
  threeDSReqPriorRef?: string | undefined
}
type ThreeDS2RequestFields = {
  acctInfo?: AcctInfo | undefined
  acctType?: '01' | '02' | '03' | undefined
  acquirerBIN?: string | undefined
  acquirerMerchantID?: string | undefined
  addrMatch?: 'Y' | 'N' | undefined
  authenticationOnly?: boolean | undefined
  challengeIndicator?:
    | 'noPreference'
    | 'requestNoChallenge'
    | 'requestChallenge'
    | 'requestChallengeAsMandate'
    | undefined
  deviceRenderOptions?: DeviceRenderOptions | undefined
  homePhone?: Phone | undefined
  mcc?: string | undefined
  merchantName?: string | undefined
  messageVersion?: string | undefined
  mobilePhone?: Phone | undefined
  notificationURL?: string | undefined
  payTokenInd?: boolean | undefined
  paymentAuthenticationUseCase?: string | undefined
  purchaseInstalData?: string | undefined
  recurringExpiry?: string | undefined
  recurringFrequency?: string | undefined
  sdkAppID?: string | undefined
  sdkEphemPubKey?: SDKEphemPubKey | undefined
  sdkMaxTimeout?: number | undefined
  sdkReferenceNumber?: string | undefined
  sdkTransID?: string | undefined
  threeDSCompInd?: string | undefined
  threeDSRequestorAuthenticationInd?: string | undefined
  threeDSRequestorAuthenticationInfo?: ThreeDSRequestorAuthenticationInfo | undefined
  threeDSRequestorChallengeInd?: '01' | '02' | '03' | '04' | '05' | '06' | undefined
  threeDSRequestorID?: string | undefined
  threeDSRequestorName?: string | undefined
  threeDSRequestorPriorAuthenticationInfo?: ThreeDSRequestorPriorAuthenticationInfo | undefined
  threeDSRequestorURL?: string | undefined
  transType?: '01' | '03' | '10' | '11' | '28' | undefined
  transactionType?:
    | 'goodsOrServicePurchase'
    | 'checkAcceptance'
    | 'accountFunding'
    | 'quasiCashTransaction'
    | 'prepaidActivationAndLoad'
    | undefined
  whiteListStatus?: string | undefined
  workPhone?: Phone | undefined
}
type DonationPaymentRequest = {
  accountInfo?: AccountInfo | undefined
  additionalData?: { [x: string]: string } | undefined
  amount: Amount
  applicationInfo?: ApplicationInfo | undefined
  authenticationData?: AuthenticationData | undefined
  billingAddress?: BillingAddress | undefined
  browserInfo?: BrowserInfo | undefined
  channel?: 'iOS' | 'Android' | 'Web' | undefined
  checkoutAttemptId?: string | undefined
  conversionId?: string | undefined
  countryCode?: string | undefined
  dateOfBirth?: string | undefined
  deliverAt?: string | undefined
  deliveryAddress?: DeliveryAddress | undefined
  deviceFingerprint?: string | undefined
  donationAccount?: string | undefined
  donationCampaignId?: string | undefined
  donationOriginalPspReference?: string | undefined
  donationToken?: string | undefined
  lineItems?: LineItem[] | undefined
  merchantAccount: string
  merchantRiskIndicator?: MerchantRiskIndicator | undefined
  metadata?: { [x: string]: string } | undefined
  mpiData?: ThreeDSecureData | undefined
  origin?: string | undefined
  paymentMethod?:
    | ApplePayDonations
    | CardDonations
    | GooglePayDonations
    | IdealDonations
    | PayWithGoogleDonations
    | SepaDirectDebitDonations
    | undefined
  recurringProcessingModel?: 'CardOnFile' | 'Subscription' | 'UnscheduledCardOnFile' | undefined
  redirectFromIssuerMethod?: string | undefined
  redirectToIssuerMethod?: string | undefined
  reference: string
  returnUrl: string
  sessionValidity?: string | undefined
  shopperEmail?: string | undefined
  shopperIP?: string | undefined
  shopperInteraction?: 'Ecommerce' | 'ContAuth' | 'Moto' | 'POS' | undefined
  shopperLocale?: string | undefined
  shopperName?: ShopperName | undefined
  shopperReference?: string | undefined
  socialSecurityNumber?: string | undefined
  store?: string | undefined
  telephoneNumber?: string | undefined
  threeDS2RequestData?: ThreeDS2RequestFields | undefined
  threeDSAuthenticationOnly?: boolean | undefined
}
type CheckoutAwaitAction = {
  paymentData?: string | undefined
  paymentMethodType?: string | undefined
  type: 'await'
  url?: string | undefined
}
type CheckoutBankTransferAction = {
  accountNumber?: string | undefined
  bankCode?: string | undefined
  beneficiary?: string | undefined
  bic?: string | undefined
  branchCode?: string | undefined
  downloadUrl?: string | undefined
  iban?: string | undefined
  paymentMethodType?: string | undefined
  reference?: string | undefined
  routingNumber?: string | undefined
  shopperEmail?: string | undefined
  sortCode?: string | undefined
  totalAmount?: Amount | undefined
  type: 'bankTransfer'
  url?: string | undefined
}
type CheckoutDelegatedAuthenticationAction = {
  authorisationToken?: string | undefined
  paymentData?: string | undefined
  paymentMethodType?: string | undefined
  token?: string | undefined
  type: 'delegatedAuthentication'
  url?: string | undefined
}
type CheckoutNativeRedirectAction = {
  data?: { [x: string]: string } | undefined
  method?: string | undefined
  nativeRedirectData?: string | undefined
  paymentMethodType?: string | undefined
  type: 'nativeRedirect'
  url?: string | undefined
}
type CheckoutQrCodeAction = {
  expiresAt?: string | undefined
  paymentData?: string | undefined
  paymentMethodType?: string | undefined
  qrCodeData?: string | undefined
  type: 'qrCode'
  url?: string | undefined
}
type CheckoutRedirectAction = {
  data?: { [x: string]: string } | undefined
  method?: string | undefined
  paymentMethodType?: string | undefined
  type: 'redirect'
  url?: string | undefined
}
type CheckoutSDKAction = {
  paymentData?: string | undefined
  paymentMethodType?: string | undefined
  sdkData?: { [x: string]: string } | undefined
  type: 'sdk' | 'wechatpaySDK'
  url?: string | undefined
}
type CheckoutThreeDS2Action = {
  authorisationToken?: string | undefined
  paymentData?: string | undefined
  paymentMethodType?: string | undefined
  subtype?: string | undefined
  token?: string | undefined
  type: 'threeDS2'
  url?: string | undefined
}
type CheckoutVoucherAction = {
  alternativeReference?: string | undefined
  collectionInstitutionNumber?: string | undefined
  downloadUrl?: string | undefined
  entity?: string | undefined
  expiresAt?: string | undefined
  initialAmount?: Amount | undefined
  instructionsUrl?: string | undefined
  issuer?: string | undefined
  maskedTelephoneNumber?: string | undefined
  merchantName?: string | undefined
  merchantReference?: string | undefined
  passCreationToken?: string | undefined
  paymentData?: string | undefined
  paymentMethodType?: string | undefined
  reference?: string | undefined
  shopperEmail?: string | undefined
  shopperName?: string | undefined
  surcharge?: Amount | undefined
  totalAmount?: Amount | undefined
  type: 'voucher'
  url?: string | undefined
}
type FraudCheckResult = { accountScore: number; checkId: number; name: string }
type FraudResult = { accountScore: number; results?: FraudCheckResult[] | undefined }
type OpiResponse = { issuerId?: string | undefined; transToken?: string | undefined }
type CheckoutOrderResponse = {
  amount?: Amount | undefined
  expiresAt?: string | undefined
  orderData?: string | undefined
  pspReference: string
  reference?: string | undefined
  remainingAmount?: Amount | undefined
}
type ResponsePaymentMethod = { brand?: string | undefined; type?: string | undefined }
type PaymentValidationsNameResultRawResponse = {
  firstName?: string | undefined
  fullName?: string | undefined
  lastName?: string | undefined
  middleName?: string | undefined
  status?: string | undefined
}
type PaymentValidationsNameResultResponse = {
  firstName?: string | undefined
  fullName?: string | undefined
  lastName?: string | undefined
  middleName?: string | undefined
}
type PaymentValidationsNameResponse = {
  rawResponse?: PaymentValidationsNameResultRawResponse | undefined
  result?: PaymentValidationsNameResultResponse | undefined
  status?: 'notPerformed' | 'notSupported' | 'performed' | undefined
}
type PaymentValidationsResponse = { name?: PaymentValidationsNameResponse | undefined }
type ThreeDS2ResponseData = {
  acsChallengeMandated?: string | undefined
  acsOperatorID?: string | undefined
  acsReferenceNumber?: string | undefined
  acsSignedContent?: string | undefined
  acsTransID?: string | undefined
  acsURL?: string | undefined
  authenticationType?: string | undefined
  cardHolderInfo?: string | undefined
  cavvAlgorithm?: string | undefined
  challengeIndicator?: string | undefined
  dsReferenceNumber?: string | undefined
  dsTransID?: string | undefined
  exemptionIndicator?: string | undefined
  messageVersion?: string | undefined
  riskScore?: string | undefined
  sdkEphemPubKey?: string | undefined
  threeDSServerTransID?: string | undefined
  transStatus?: string | undefined
  transStatusReason?: string | undefined
}
type ThreeDS2Result = {
  authenticationValue?: string | undefined
  cavvAlgorithm?: string | undefined
  challengeCancel?: '01' | '02' | '03' | '04' | '05' | '06' | '07' | undefined
  dsTransID?: string | undefined
  eci?: string | undefined
  exemptionIndicator?:
    | 'lowValue'
    | 'secureCorporate'
    | 'trustedBeneficiary'
    | 'transactionRiskAnalysis'
    | undefined
  messageVersion?: string | undefined
  riskScore?: string | undefined
  threeDSRequestorChallengeInd?: '01' | '02' | '03' | '04' | '05' | '06' | undefined
  threeDSServerTransID?: string | undefined
  timestamp?: string | undefined
  transStatus?: string | undefined
  transStatusReason?: string | undefined
  whiteListStatus?: string | undefined
}
type PaymentResponse = {
  action?:
    | CheckoutAwaitAction
    | CheckoutBankTransferAction
    | CheckoutDelegatedAuthenticationAction
    | CheckoutNativeRedirectAction
    | CheckoutQrCodeAction
    | CheckoutRedirectAction
    | CheckoutSDKAction
    | CheckoutThreeDS2Action
    | CheckoutVoucherAction
    | undefined
  additionalData?: { [x: string]: string } | undefined
  amount?: Amount | undefined
  donationToken?: string | undefined
  fraudResult?: FraudResult | undefined
  merchantReference?: string | undefined
  opi?: OpiResponse | undefined
  order?: CheckoutOrderResponse | undefined
  paymentMethod?: ResponsePaymentMethod | undefined
  paymentValidations?: PaymentValidationsResponse | undefined
  pspReference?: string | undefined
  refusalReason?: string | undefined
  refusalReasonCode?: string | undefined
  resultCode?:
    | 'AuthenticationFinished'
    | 'AuthenticationNotRequired'
    | 'Authorised'
    | 'Cancelled'
    | 'ChallengeShopper'
    | 'Error'
    | 'IdentifyShopper'
    | 'PartiallyAuthorised'
    | 'Pending'
    | 'PresentToShopper'
    | 'Received'
    | 'RedirectShopper'
    | 'Refused'
    | 'Success'
    | undefined
  threeDS2ResponseData?: ThreeDS2ResponseData | undefined
  threeDS2Result?: ThreeDS2Result | undefined
  threeDSPaymentData?: string | undefined
}
type DonationPaymentResponse = {
  amount?: Amount | undefined
  donationAccount?: string | undefined
  id?: string | undefined
  merchantAccount?: string | undefined
  payment?: PaymentResponse | undefined
  reference?: string | undefined
  status?: 'completed' | 'pending' | 'refused' | undefined
}
type CheckoutNetworkTokenOption = {
  includeCryptogram?: boolean | undefined
  useNetworkToken?: boolean | undefined
}
type CheckoutForwardRequestOptions = {
  accountUpdate?: boolean | undefined
  dryRun?: boolean | undefined
  networkToken?: CheckoutNetworkTokenOption | undefined
  networkTxReferencePaths?: string[] | undefined
  tokenize?: boolean | undefined
  transactionLinkIdPaths?: string[] | undefined
}
type CheckoutForwardRequestCard = {
  cvc?: string | undefined
  encryptedCardNumber?: string | undefined
  encryptedExpiryMonth?: string | undefined
  encryptedExpiryYear?: string | undefined
  encryptedSecurityCode?: string | undefined
  expiryMonth?: string | undefined
  expiryYear?: string | undefined
  holderName?: string | undefined
  number?: string | undefined
  type?: 'scheme' | undefined
}
type CheckoutOutgoingForwardRequest = {
  body: string
  credentials?: string | undefined
  headers?: { [x: string]: string } | undefined
  httpMethod: 'post' | 'put' | 'patch'
  urlSuffix?: string | undefined
}
type CheckoutForwardRequest = {
  amount?: Amount | undefined
  baseUrl: string
  merchantAccount: string
  merchantReference?: string | undefined
  options?: CheckoutForwardRequestOptions | undefined
  paymentMethod?: CheckoutForwardRequestCard | undefined
  request: CheckoutOutgoingForwardRequest
  shopperReference?: string | undefined
  storedPaymentMethodId?: string | undefined
}
type CheckoutForwardResponseFromUrl = {
  body?: string | undefined
  headers?: { [x: string]: string } | undefined
  status?: number | undefined
}
type CheckoutForwardResponse = {
  merchantReference?: string | undefined
  pspReference?: string | undefined
  response: CheckoutForwardResponseFromUrl
  storedPaymentMethodId?: string | undefined
}
type CreateOrderRequest = {
  amount: Amount
  expiresAt?: string | undefined
  merchantAccount: string
  reference: string
}
type CreateOrderResponse = {
  additionalData?: { [x: string]: string } | undefined
  amount: Amount
  expiresAt: string
  fraudResult?: FraudResult | undefined
  orderData: string
  pspReference?: string | undefined
  reference?: string | undefined
  refusalReason?: string | undefined
  remainingAmount: Amount
  resultCode: 'Success'
}
type EncryptedOrderData = { orderData: string; pspReference: string }
type CancelOrderRequest = { merchantAccount: string; order: EncryptedOrderData }
type CancelOrderResponse = { pspReference: string; resultCode: 'Received' }
type UtilityRequest = { originDomains: string[] }
type UtilityResponse = { originKeys?: { [x: string]: string } | undefined }
type Address = {
  city: string
  country: string
  houseNumberOrName: string
  postalCode: string
  stateOrProvince?: string | undefined
  street: string
}
type Name = { firstName: string; lastName: string }
type FundOrigin = {
  billingAddress?: Address | undefined
  shopperEmail?: string | undefined
  shopperName?: Name | undefined
  telephoneNumber?: string | undefined
  walletIdentifier?: string | undefined
}
type CardDetails = {
  billingSequenceNumber?: string | undefined
  brand?: string | undefined
  checkoutAttemptId?: string | undefined
  'cupsecureplus.smscode'?: string | undefined
  cvc?: string | undefined
  encryptedCard?: string | undefined
  encryptedCardNumber?: string | undefined
  encryptedExpiryMonth?: string | undefined
  encryptedExpiryYear?: string | undefined
  encryptedPassword?: string | undefined
  encryptedSecurityCode?: string | undefined
  expiryMonth?: string | undefined
  expiryYear?: string | undefined
  fastlaneData?: string | undefined
  fundingSource?: 'credit' | 'debit' | 'prepaid' | undefined
  holderName?: string | undefined
  networkPaymentReference?: string | undefined
  number?: string | undefined
  recurringDetailReference?: string | undefined
  sdkData?: string | undefined
  shopperNotificationReference?: string | undefined
  srcCorrelationId?: string | undefined
  srcDigitalCardId?: string | undefined
  srcScheme?: string | undefined
  srcTokenReference?: string | undefined
  storedPaymentMethodId?: string | undefined
  threeDS2SdkVersion?: string | undefined
  type?: 'bcmc' | 'scheme' | 'networkToken' | 'giftcard' | 'card' | 'clicktopay' | undefined
}
type SubMerchant = {
  city?: string | undefined
  country?: string | undefined
  mcc?: string | undefined
  name?: string | undefined
  taxId?: string | undefined
}
type FundRecipient = {
  IBAN?: string | undefined
  billingAddress?: Address | undefined
  paymentMethod?: CardDetails | undefined
  shopperEmail?: string | undefined
  shopperName?: Name | undefined
  shopperReference?: string | undefined
  storedPaymentMethodId?: string | undefined
  subMerchant?: SubMerchant | undefined
  telephoneNumber?: string | undefined
  walletIdentifier?: string | undefined
  walletOwnerTaxId?: string | undefined
  walletPurpose?:
    | 'identifiedBoleto'
    | 'transferDifferentWallet'
    | 'transferOwnWallet'
    | 'transferSameWallet'
    | 'unidentifiedBoleto'
    | undefined
}
type InstallmentOption = {
  maxValue?: number | undefined
  plans?:
    | (
        | 'bonus'
        | 'buynow_paylater'
        | 'interes_refund_prctg'
        | 'interest_bonus'
        | 'nointeres_refund_prctg'
        | 'nointerest_bonus'
        | 'refund_prctg'
        | 'regular'
        | 'revolving'
        | 'with_interest'
      )[]
    | undefined
  preselectedValue?: number | undefined
  values?: number[] | undefined
}
type PlatformChargebackLogic = {
  behavior?:
    | 'deductFromOneBalanceAccount'
    | 'deductAccordingToSplitRatio'
    | 'deductFromLiableAccount'
    | undefined
  costAllocationAccount?: string | undefined
  targetAccount?: string | undefined
}
type RiskData = {
  clientData?: string | undefined
  customFields?: { [x: string]: string } | undefined
  fraudOffset?: number | undefined
  profileReference?: string | undefined
}
type SplitAmount = { currency?: string | undefined; value: bigint }
type Split = {
  account?: string | undefined
  amount?: SplitAmount | undefined
  description?: string | undefined
  reference?: string | undefined
  type:
    | 'AcquiringFees'
    | 'AdyenCommission'
    | 'AdyenFees'
    | 'AdyenMarkup'
    | 'BalanceAccount'
    | 'Commission'
    | 'Default'
    | 'Interchange'
    | 'MarketPlace'
    | 'PaymentFee'
    | 'Remainder'
    | 'SchemeFee'
    | 'Surcharge'
    | 'Tip'
    | 'TopUp'
    | 'VAT'
}
type CheckoutSessionThreeDS2RequestData = {
  homePhone?: Phone | undefined
  mobilePhone?: Phone | undefined
  threeDSRequestorChallengeInd?: '01' | '02' | '03' | '04' | '05' | '06' | undefined
  workPhone?: Phone | undefined
}
type PaymentLinkRequest = {
  allowedPaymentMethods?: string[] | undefined
  amount: Amount
  applicationInfo?: ApplicationInfo | undefined
  billingAddress?: Address | undefined
  blockedPaymentMethods?: string[] | undefined
  captureDelayHours?: number | undefined
  countryCode?: string | undefined
  dateOfBirth?: string | undefined
  deliverAt?: string | undefined
  deliveryAddress?: Address | undefined
  description?: string | undefined
  expiresAt?: string | undefined
  fundOrigin?: FundOrigin | undefined
  fundRecipient?: FundRecipient | undefined
  installmentOptions?: { [x: string]: InstallmentOption } | undefined
  lineItems?: LineItem[] | undefined
  manualCapture?: boolean | undefined
  mcc?: string | undefined
  merchantAccount: string
  merchantOrderReference?: string | undefined
  metadata?: { [x: string]: string } | undefined
  platformChargebackLogic?: PlatformChargebackLogic | undefined
  recurringProcessingModel?: 'CardOnFile' | 'Subscription' | 'UnscheduledCardOnFile' | undefined
  reference: string
  requiredShopperFields?:
    | ('billingAddress' | 'deliveryAddress' | 'shopperEmail' | 'shopperName' | 'telephoneNumber')[]
    | undefined
  returnUrl?: string | undefined
  reusable?: boolean | undefined
  riskData?: RiskData | undefined
  shopperEmail?: string | undefined
  shopperLocale?: string | undefined
  shopperName?: Name | undefined
  shopperReference?: string | undefined
  shopperStatement?: string | undefined
  showRemovePaymentMethodButton?: boolean | undefined
  socialSecurityNumber?: string | undefined
  splitCardFundingSources?: boolean | undefined
  splits?: Split[] | undefined
  store?: string | undefined
  storePaymentMethodMode?: 'askForConsent' | 'disabled' | 'enabled' | undefined
  telephoneNumber?: string | undefined
  themeId?: string | undefined
  threeDS2RequestData?: CheckoutSessionThreeDS2RequestData | undefined
}
type PaymentLinkResponse = {
  allowedPaymentMethods?: string[] | undefined
  amount: Amount
  applicationInfo?: ApplicationInfo | undefined
  billingAddress?: Address | undefined
  blockedPaymentMethods?: string[] | undefined
  captureDelayHours?: number | undefined
  countryCode?: string | undefined
  dateOfBirth?: string | undefined
  deliverAt?: string | undefined
  deliveryAddress?: Address | undefined
  description?: string | undefined
  expiresAt?: string | undefined
  fundOrigin?: FundOrigin | undefined
  fundRecipient?: FundRecipient | undefined
  id: string
  installmentOptions?: { [x: string]: InstallmentOption } | undefined
  lineItems?: LineItem[] | undefined
  manualCapture?: boolean | undefined
  mcc?: string | undefined
  merchantAccount: string
  merchantOrderReference?: string | undefined
  metadata?: { [x: string]: string } | undefined
  platformChargebackLogic?: PlatformChargebackLogic | undefined
  recurringProcessingModel?: 'CardOnFile' | 'Subscription' | 'UnscheduledCardOnFile' | undefined
  reference: string
  requiredShopperFields?:
    | ('billingAddress' | 'deliveryAddress' | 'shopperEmail' | 'shopperName' | 'telephoneNumber')[]
    | undefined
  returnUrl?: string | undefined
  reusable?: boolean | undefined
  riskData?: RiskData | undefined
  shopperEmail?: string | undefined
  shopperLocale?: string | undefined
  shopperName?: Name | undefined
  shopperReference?: string | undefined
  shopperStatement?: string | undefined
  showRemovePaymentMethodButton?: boolean | undefined
  socialSecurityNumber?: string | undefined
  splitCardFundingSources?: boolean | undefined
  splits?: Split[] | undefined
  status: 'active' | 'completed' | 'expired' | 'paid' | 'paymentPending'
  store?: string | undefined
  storePaymentMethodMode?: 'askForConsent' | 'disabled' | 'enabled' | undefined
  telephoneNumber?: string | undefined
  themeId?: string | undefined
  threeDS2RequestData?: CheckoutSessionThreeDS2RequestData | undefined
  updatedAt?: string | undefined
  url: string
}
type UpdatePaymentLinkRequest = { status: 'expired' }
type PaymentMethodsRequest = {
  additionalData?: { [x: string]: string } | undefined
  allowedPaymentMethods?: string[] | undefined
  amount?: Amount | undefined
  blockedPaymentMethods?: string[] | undefined
  browserInfo?: BrowserInfo | undefined
  channel?: 'iOS' | 'Android' | 'Web' | undefined
  countryCode?: string | undefined
  merchantAccount: string
  order?: EncryptedOrderData | undefined
  shopperConversionId?: string | undefined
  shopperEmail?: string | undefined
  shopperIP?: string | undefined
  shopperLocale?: string | undefined
  shopperReference?: string | undefined
  splitCardFundingSources?: boolean | undefined
  store?: string | undefined
  storeFiltrationMode?: 'exclusive' | 'inclusive' | 'skipFilter' | undefined
  telephoneNumber?: string | undefined
}
type AppIdentifierInfo = { androidPackageId?: string | undefined; iosScheme?: string | undefined }
type PaymentMethodUPIApps = {
  appIdentifierInfo?: AppIdentifierInfo | undefined
  id: string
  name: string
}
type PaymentMethodGroup = {
  name?: string | undefined
  paymentMethodData?: string | undefined
  type?: string | undefined
}
type Item = { id?: string | undefined; name?: string | undefined }
type SubInputDetail = {
  configuration?: { [x: string]: string } | undefined
  items?: Item[] | undefined
  key?: string | undefined
  optional?: boolean | undefined
  type?: string | undefined
  value?: string | undefined
}
type InputDetail = {
  configuration?: { [x: string]: string } | undefined
  details?: SubInputDetail[] | undefined
  inputDetails?: SubInputDetail[] | undefined
  itemSearchUrl?: string | undefined
  items?: Item[] | undefined
  key?: string | undefined
  optional?: boolean | undefined
  type?: string | undefined
  value?: string | undefined
}
type PaymentMethodIssuer = { disabled?: boolean | undefined; id: string; name: string }
type PaymentMethod = {
  apps?: PaymentMethodUPIApps[] | undefined
  brand?: string | undefined
  brands?: string[] | undefined
  configuration?: { [x: string]: string } | undefined
  fundingSource?: 'credit' | 'debit' | 'prepaid' | undefined
  group?: PaymentMethodGroup | undefined
  inputDetails?: InputDetail[] | undefined
  issuers?: PaymentMethodIssuer[] | undefined
  name?: string | undefined
  promoted?: boolean | undefined
  type?: string | undefined
}
type StoredPaymentMethod = {
  bankAccountNumber?: string | undefined
  bankLocationId?: string | undefined
  brand?: string | undefined
  cashtag?: string | undefined
  expiryMonth?: string | undefined
  expiryYear?: string | undefined
  holderName?: string | undefined
  iban?: string | undefined
  id?: string | undefined
  label?: string | undefined
  lastFour?: string | undefined
  name?: string | undefined
  networkTxReference?: string | undefined
  ownerName?: string | undefined
  shopperEmail?: string | undefined
  supportedRecurringProcessingModels?: string[] | undefined
  supportedShopperInteractions?: string[] | undefined
  type?: string | undefined
}
type PaymentMethodsResponse = {
  paymentMethods?: PaymentMethod[] | undefined
  storedPaymentMethods?: StoredPaymentMethod[] | undefined
}
type ForexQuote = {
  account?: string | undefined
  accountType?: string | undefined
  baseAmount?: Amount | undefined
  basePoints: number
  buy?: Amount | undefined
  interbank?: Amount | undefined
  reference?: string | undefined
  sell?: Amount | undefined
  signature?: string | undefined
  source?: string | undefined
  type?: string | undefined
  validTill: string
}
type Installments = {
  extra?: number | undefined
  plan?:
    | 'bonus'
    | 'buynow_paylater'
    | 'interes_refund_prctg'
    | 'interest_bonus'
    | 'nointeres_refund_prctg'
    | 'nointerest_bonus'
    | 'refund_prctg'
    | 'regular'
    | 'revolving'
    | 'with_interest'
    | undefined
  value: number
}
type Recurring = {
  contract?: 'ONECLICK' | 'ONECLICK,RECURRING' | 'RECURRING' | 'PAYOUT' | 'EXTERNAL' | undefined
  recurringDetailName?: string | undefined
  recurringExpiry?: string | undefined
  recurringFrequency?: string | undefined
  tokenService?:
    | 'VISATOKENSERVICE'
    | 'MCTOKENSERVICE'
    | 'AMEXTOKENSERVICE'
    | 'TOKEN_SHARING'
    | undefined
}
type ThreeDS2RequestData = {
  acctInfo?: AcctInfo | undefined
  acctType?: '01' | '02' | '03' | undefined
  acquirerBIN?: string | undefined
  acquirerMerchantID?: string | undefined
  addrMatch?: 'Y' | 'N' | undefined
  authenticationOnly?: boolean | undefined
  challengeIndicator?:
    | 'noPreference'
    | 'requestNoChallenge'
    | 'requestChallenge'
    | 'requestChallengeAsMandate'
    | undefined
  deviceChannel: string
  deviceRenderOptions?: DeviceRenderOptions | undefined
  homePhone?: Phone | undefined
  mcc?: string | undefined
  merchantName?: string | undefined
  messageVersion?: string | undefined
  mobilePhone?: Phone | undefined
  notificationURL?: string | undefined
  payTokenInd?: boolean | undefined
  paymentAuthenticationUseCase?: string | undefined
  purchaseInstalData?: string | undefined
  recurringExpiry?: string | undefined
  recurringFrequency?: string | undefined
  sdkAppID?: string | undefined
  sdkEncData?: string | undefined
  sdkEphemPubKey?: SDKEphemPubKey | undefined
  sdkMaxTimeout?: number | undefined
  sdkReferenceNumber?: string | undefined
  sdkTransID?: string | undefined
  sdkVersion?: string | undefined
  threeDSCompInd?: string | undefined
  threeDSRequestorAuthenticationInd?: string | undefined
  threeDSRequestorAuthenticationInfo?: ThreeDSRequestorAuthenticationInfo | undefined
  threeDSRequestorChallengeInd?: '01' | '02' | '03' | '04' | '05' | '06' | undefined
  threeDSRequestorID?: string | undefined
  threeDSRequestorName?: string | undefined
  threeDSRequestorPriorAuthenticationInfo?: ThreeDSRequestorPriorAuthenticationInfo | undefined
  threeDSRequestorURL?: string | undefined
  transType?: '01' | '03' | '10' | '11' | '28' | undefined
  transactionType?:
    | 'goodsOrServicePurchase'
    | 'checkAcceptance'
    | 'accountFunding'
    | 'quasiCashTransaction'
    | 'prepaidActivationAndLoad'
    | undefined
  whiteListStatus?: string | undefined
  workPhone?: Phone | undefined
}
type BalanceCheckRequest = {
  accountInfo?: AccountInfo | undefined
  additionalAmount?: Amount | undefined
  additionalData?: { [x: string]: string } | undefined
  amount: Amount
  applicationInfo?: ApplicationInfo | undefined
  billingAddress?: Address | undefined
  browserInfo?: BrowserInfo | undefined
  captureDelayHours?: number | undefined
  dateOfBirth?: string | undefined
  dccQuote?: ForexQuote | undefined
  deliveryAddress?: Address | undefined
  deliveryDate?: string | undefined
  deviceFingerprint?: string | undefined
  fraudOffset?: number | undefined
  installments?: Installments | undefined
  localizedShopperStatement?: { [x: string]: string } | undefined
  mcc?: string | undefined
  merchantAccount: string
  merchantOrderReference?: string | undefined
  merchantRiskIndicator?: MerchantRiskIndicator | undefined
  metadata?: { [x: string]: string } | undefined
  orderReference?: string | undefined
  paymentMethod: { [x: string]: string }
  recurring?: Recurring | undefined
  recurringProcessingModel?: 'CardOnFile' | 'Subscription' | 'UnscheduledCardOnFile' | undefined
  reference?: string | undefined
  selectedBrand?: string | undefined
  selectedRecurringDetailReference?: string | undefined
  sessionId?: string | undefined
  shopperEmail?: string | undefined
  shopperIP?: string | undefined
  shopperInteraction?: 'Ecommerce' | 'ContAuth' | 'Moto' | 'POS' | undefined
  shopperLocale?: string | undefined
  shopperName?: Name | undefined
  shopperReference?: string | undefined
  shopperStatement?: string | undefined
  socialSecurityNumber?: string | undefined
  splits?: Split[] | undefined
  store?: string | undefined
  telephoneNumber?: string | undefined
  threeDS2RequestData?: ThreeDS2RequestData | undefined
  threeDSAuthenticationOnly?: boolean | undefined
  totalsGroup?: string | undefined
  trustedShopper?: boolean | undefined
}
type BalanceCheckResponse = {
  additionalData?: { [x: string]: string } | undefined
  balance: Amount
  fraudResult?: FraudResult | undefined
  pspReference?: string | undefined
  refusalReason?: string | undefined
  resultCode: 'Success' | 'NotEnoughBalance' | 'Failed'
  transactionLimit?: Amount | undefined
}
type CheckoutBankAccount = {
  accountType?:
    | 'balance'
    | 'checking'
    | 'deposit'
    | 'general'
    | 'other'
    | 'payment'
    | 'savings'
    | undefined
  bankAccountNumber?: string | undefined
  bankCity?: string | undefined
  bankLocationId?: string | undefined
  bankName?: string | undefined
  bic?: string | undefined
  countryCode?: string | undefined
  iban?: string | undefined
  ownerName?: string | undefined
  taxId?: string | undefined
}
type Company = {
  homepage?: string | undefined
  name?: string | undefined
  registrationNumber?: string | undefined
  registryLocation?: string | undefined
  taxId?: string | undefined
  type?: string | undefined
}
type Mandate = {
  amount: string
  amountRule?: 'max' | 'exact' | undefined
  billingAttemptsRule?: 'on' | 'before' | 'after' | undefined
  billingDay?: string | undefined
  count?: string | undefined
  endsAt: string
  frequency:
    | 'adhoc'
    | 'daily'
    | 'weekly'
    | 'biWeekly'
    | 'monthly'
    | 'quarterly'
    | 'halfYearly'
    | 'yearly'
  remarks?: string | undefined
  startsAt?: string | undefined
}
type OpiRequest = { includeIssuerId?: boolean | undefined; includeTransToken?: boolean | undefined }
type AchDetails = {
  accountHolderType?: 'business' | 'personal' | undefined
  bankAccountNumber?: string | undefined
  bankAccountType?:
    | 'balance'
    | 'checking'
    | 'deposit'
    | 'general'
    | 'other'
    | 'payment'
    | 'savings'
    | undefined
  bankLocationId?: string | undefined
  checkoutAttemptId?: string | undefined
  encryptedBankAccountNumber?: string | undefined
  encryptedBankLocationId?: string | undefined
  ownerName?: string | undefined
  recurringDetailReference?: string | undefined
  sdkData?: string | undefined
  storedPaymentMethodId?: string | undefined
  transferInstrumentId?: string | undefined
  type?: 'ach' | 'ach_plaid' | undefined
}
type AffirmDetails = {
  checkoutAttemptId?: string | undefined
  financingProgram?: string | undefined
  sdkData?: string | undefined
  type?: 'affirm' | undefined
}
type AfterpayDetails = {
  billingAddress?: string | undefined
  checkoutAttemptId?: string | undefined
  deliveryAddress?: string | undefined
  personalDetails?: string | undefined
  recurringDetailReference?: string | undefined
  sdkData?: string | undefined
  storedPaymentMethodId?: string | undefined
  type: 'afterpay_default' | 'afterpaytouch' | 'afterpaytouch_US' | 'afterpay_b2b' | 'clearpay'
}
type AlmaDetails = {
  checkoutAttemptId?: string | undefined
  feeType?: 'merchantPays' | 'shopperPays' | undefined
  sdkData?: string | undefined
  type?: 'alma' | undefined
}
type AmazonPayDetails = {
  amazonPayToken?: string | undefined
  checkoutAttemptId?: string | undefined
  checkoutSessionId?: string | undefined
  sdkData?: string | undefined
  type?: 'amazonpay' | undefined
}
type AncvDetails = {
  beneficiaryId?: string | undefined
  checkoutAttemptId?: string | undefined
  recurringDetailReference?: string | undefined
  sdkData?: string | undefined
  storedPaymentMethodId?: string | undefined
  type?: 'ancv' | undefined
}
type AndroidPayDetails = {
  checkoutAttemptId?: string | undefined
  sdkData?: string | undefined
  type?: 'androidpay' | undefined
}
type ApplePayDetails = {
  applePayToken: string
  checkoutAttemptId?: string | undefined
  fundingSource?: 'credit' | 'debit' | 'prepaid' | undefined
  recurringDetailReference?: string | undefined
  sdkData?: string | undefined
  storedPaymentMethodId?: string | undefined
  type?: 'applepay' | undefined
}
type AuPayDetails = {
  checkoutAttemptId?: string | undefined
  recurringDetailReference?: string | undefined
  sdkData?: string | undefined
  storedPaymentMethodId?: string | undefined
  type?: 'aupay' | undefined
}
type BacsDirectDebitDetails = {
  bankAccountNumber?: string | undefined
  bankLocationId?: string | undefined
  checkoutAttemptId?: string | undefined
  holderName?: string | undefined
  recurringDetailReference?: string | undefined
  sdkData?: string | undefined
  storedPaymentMethodId?: string | undefined
  transferInstrumentId?: string | undefined
  type?: 'directdebit_GB' | undefined
}
type BillDeskDetails = {
  checkoutAttemptId?: string | undefined
  issuer: string
  sdkData?: string | undefined
  type: 'billdesk_online' | 'billdesk_wallet'
}
type BlikDetails = {
  blikCode?: string | undefined
  checkoutAttemptId?: string | undefined
  recurringDetailReference?: string | undefined
  sdkData?: string | undefined
  storedPaymentMethodId?: string | undefined
  type?: 'blik' | undefined
}
type CashAppDetails = {
  cashtag?: string | undefined
  checkoutAttemptId?: string | undefined
  customerId?: string | undefined
  grantId?: string | undefined
  onFileGrantId?: string | undefined
  recurringDetailReference?: string | undefined
  requestId?: string | undefined
  sdkData?: string | undefined
  storedPaymentMethodId?: string | undefined
  subtype?: string | undefined
  type?: 'cashapp' | undefined
}
type CellulantDetails = {
  checkoutAttemptId?: string | undefined
  issuer?: string | undefined
  sdkData?: string | undefined
  type?: 'cellulant' | undefined
}
type DBaraiDetails = {
  checkoutAttemptId?: string | undefined
  recurringDetailReference?: string | undefined
  sdkData?: string | undefined
  storedPaymentMethodId?: string | undefined
  type?: 'dbarai' | undefined
}
type DirectDebitAuDetails = {
  bankAccountNumber?: string | undefined
  bankBranchCode?: string | undefined
  checkoutAttemptId?: string | undefined
  holderName?: string | undefined
  recurringDetailReference?: string | undefined
  sdkData?: string | undefined
  storedPaymentMethodId?: string | undefined
  type?: 'directdebit_AU' | undefined
}
type DokuDetails = {
  checkoutAttemptId?: string | undefined
  firstName: string
  lastName: string
  sdkData?: string | undefined
  shopperEmail: string
  type:
    | 'doku_mandiri_va'
    | 'doku_cimb_va'
    | 'doku_danamon_va'
    | 'doku_bni_va'
    | 'doku_permata_lite_atm'
    | 'doku_bri_va'
    | 'doku_bca_va'
    | 'doku_alfamart'
    | 'doku_indomaret'
    | 'doku_wallet'
    | 'doku_ovo'
}
type DragonpayDetails = {
  checkoutAttemptId?: string | undefined
  issuer: string
  sdkData?: string | undefined
  shopperEmail?: string | undefined
  type:
    | 'dragonpay_ebanking'
    | 'dragonpay_otc_banking'
    | 'dragonpay_otc_non_banking'
    | 'dragonpay_otc_philippines'
}
type EBankingFinlandDetails = {
  checkoutAttemptId?: string | undefined
  issuer?: string | undefined
  sdkData?: string | undefined
  type: 'ebanking_FI'
}
type EcontextVoucherDetails = {
  checkoutAttemptId?: string | undefined
  firstName: string
  lastName: string
  sdkData?: string | undefined
  shopperEmail: string
  telephoneNumber: string
  type:
    | 'econtext_seven_eleven'
    | 'econtext_online'
    | 'econtext'
    | 'econtext_stores'
    | 'econtext_atm'
}
type EftDetails = {
  bankAccountNumber?: string | undefined
  bankCode?: string | undefined
  bankLocationId?: string | undefined
  checkoutAttemptId?: string | undefined
  ownerName?: string | undefined
  recurringDetailReference?: string | undefined
  sdkData?: string | undefined
  storedPaymentMethodId?: string | undefined
  type?: 'eft_directdebit_CA' | undefined
}
type ExternalTokenDetails = {
  checkoutAttemptId?: string | undefined
  expiryMonth?: string | undefined
  expiryYear?: string | undefined
  holderName?: string | undefined
  number?: string | undefined
  storedPaymentMethodId: string
  subtype: 'hilton'
  type: 'externalToken'
}
type FastlaneDetails = {
  checkoutAttemptId?: string | undefined
  fastlaneData: string
  recurringDetailReference?: string | undefined
  sdkData?: string | undefined
  storedPaymentMethodId?: string | undefined
  type: 'fastlane'
}
type GenericIssuerPaymentMethodDetails = {
  checkoutAttemptId?: string | undefined
  issuer: string
  recurringDetailReference?: string | undefined
  sdkData?: string | undefined
  storedPaymentMethodId?: string | undefined
  type: 'onlineBanking_PL' | 'eps' | 'onlineBanking_SK' | 'onlineBanking_CZ' | 'onlinebanking_IN'
}
type GooglePayDetails = {
  checkoutAttemptId?: string | undefined
  fundingSource?: 'credit' | 'debit' | 'prepaid' | undefined
  googlePayCardNetwork?: string | undefined
  googlePayToken: string
  recurringDetailReference?: string | undefined
  sdkData?: string | undefined
  storedPaymentMethodId?: string | undefined
  threeDS2SdkVersion?: string | undefined
  type?: 'googlepay' | undefined
}
type IdealDetails = {
  checkoutAttemptId?: string | undefined
  issuer?: string | undefined
  recurringDetailReference?: string | undefined
  sdkData?: string | undefined
  storedPaymentMethodId?: string | undefined
  type?: 'ideal' | undefined
}
type KlarnaDetails = {
  billingAddress?: string | undefined
  checkoutAttemptId?: string | undefined
  deliveryAddress?: string | undefined
  personalDetails?: string | undefined
  recurringDetailReference?: string | undefined
  sdkData?: string | undefined
  storedPaymentMethodId?: string | undefined
  subtype?: string | undefined
  type:
    | 'klarna'
    | 'klarnapayments'
    | 'klarnapayments_account'
    | 'klarnapayments_b2b'
    | 'klarna_paynow'
    | 'klarna_account'
    | 'klarna_b2b'
}
type KlarnaNetworkDetails = {
  checkoutAttemptId?: string | undefined
  klarnaNetworkData?: string | undefined
  klarnaNetworkPaymentAccountId?: string | undefined
  klarnaNetworkSessionToken?: string | undefined
  recurringDetailReference?: string | undefined
  sdkData?: string | undefined
  storedPaymentMethodId?: string | undefined
  subtype?: 'redirect' | 'sdk' | undefined
  type: 'klarna_network'
}
type MasterpassDetails = {
  checkoutAttemptId?: string | undefined
  fundingSource?: 'credit' | 'debit' | 'prepaid' | undefined
  masterpassTransactionId: string
  sdkData?: string | undefined
  type?: 'masterpass' | undefined
}
type MbwayDetails = {
  checkoutAttemptId?: string | undefined
  sdkData?: string | undefined
  shopperEmail: string
  telephoneNumber: string
  type?: 'mbway' | undefined
}
type MobilePayDetails = {
  checkoutAttemptId?: string | undefined
  sdkData?: string | undefined
  type?: 'mobilepay' | undefined
}
type MolPayDetails = {
  checkoutAttemptId?: string | undefined
  issuer: string
  sdkData?: string | undefined
  type: 'molpay_ebanking_fpx_MY' | 'molpay_ebanking_TH'
}
type OpenInvoiceDetails = {
  billingAddress?: string | undefined
  checkoutAttemptId?: string | undefined
  deliveryAddress?: string | undefined
  personalDetails?: string | undefined
  recurringDetailReference?: string | undefined
  sdkData?: string | undefined
  storedPaymentMethodId?: string | undefined
  type?: 'openinvoice' | 'afterpay_directdebit' | 'atome_pos' | undefined
}
type PayByBankAISDirectDebitDetails = {
  checkoutAttemptId?: string | undefined
  recurringDetailReference?: string | undefined
  sdkData?: string | undefined
  storedPaymentMethodId?: string | undefined
  type: 'paybybank_AIS_DD'
}
type PayByBankCADirectDebitDetails = {
  checkoutAttemptId?: string | undefined
  recurringDetailReference?: string | undefined
  sdkData?: string | undefined
  storedPaymentMethodId?: string | undefined
  type: 'paybybank_ca'
}
type PayByBankDetails = {
  checkoutAttemptId?: string | undefined
  issuer?: string | undefined
  sdkData?: string | undefined
  type: 'paybybank'
}
type PayPalDetails = {
  checkoutAttemptId?: string | undefined
  orderID?: string | undefined
  payeePreferred?: string | undefined
  payerID?: string | undefined
  payerSelected?: string | undefined
  recurringDetailReference?: string | undefined
  sdkData?: string | undefined
  storedPaymentMethodId?: string | undefined
  subtype?: 'express' | 'redirect' | 'sdk' | undefined
  type: 'paypal'
}
type PayPayDetails = {
  checkoutAttemptId?: string | undefined
  recurringDetailReference?: string | undefined
  sdkData?: string | undefined
  storedPaymentMethodId?: string | undefined
  type?: 'paypay' | undefined
}
type PayToDetails = {
  checkoutAttemptId?: string | undefined
  recurringDetailReference?: string | undefined
  sdkData?: string | undefined
  shopperAccountIdentifier?: string | undefined
  storedPaymentMethodId?: string | undefined
  type?: 'payto' | undefined
}
type PayUUpiDetails = {
  checkoutAttemptId?: string | undefined
  recurringDetailReference?: string | undefined
  sdkData?: string | undefined
  shopperNotificationReference?: string | undefined
  storedPaymentMethodId?: string | undefined
  type: 'payu_IN_upi'
  virtualPaymentAddress?: string | undefined
}
type PayWithGoogleDetails = {
  checkoutAttemptId?: string | undefined
  fundingSource?: 'credit' | 'debit' | 'prepaid' | undefined
  googlePayToken: string
  recurringDetailReference?: string | undefined
  sdkData?: string | undefined
  storedPaymentMethodId?: string | undefined
  threeDS2SdkVersion?: string | undefined
  type?: 'paywithgoogle' | undefined
}
type PaymentDetails = {
  checkoutAttemptId?: string | undefined
  sdkData?: string | undefined
  type?:
    | 'alipay'
    | 'multibanco'
    | 'bankTransfer'
    | 'bankTransfer_IBAN'
    | 'paynow'
    | 'affirm_pos'
    | 'iris'
    | 'wero'
    | 'trustly'
    | 'trustlyvector'
    | 'oney'
    | 'facilypay'
    | 'facilypay_3x'
    | 'facilypay_4x'
    | 'facilypay_6x'
    | 'facilypay_10x'
    | 'facilypay_12x'
    | 'unionpay'
    | 'kcp_banktransfer'
    | 'kcp_payco'
    | 'kcp_creditcard'
    | 'wechatpaySDK'
    | 'wechatpayQR'
    | 'wechatpayWeb'
    | 'molpay_boost'
    | 'wallet_IN'
    | 'payu_IN_cashcard'
    | 'payu_IN_nb'
    | 'paytm'
    | 'molpay_ebanking_VN'
    | 'molpay_ebanking_MY'
    | 'molpay_ebanking_direct_MY'
    | 'swish'
    | 'bizum'
    | 'walley'
    | 'walley_b2b'
    | 'paypo'
    | 'satispay'
    | 'scalapay'
    | 'scalapay_3x'
    | 'scalapay_4x'
    | 'molpay_fpx'
    | 'payme'
    | 'payme_pos'
    | 'konbini'
    | 'directEbanking'
    | 'boletobancario'
    | 'cashticket'
    | 'ikano'
    | 'karenmillen'
    | 'oasis'
    | 'warehouse'
    | 'primeiropay_boleto'
    | 'mada'
    | 'benefit'
    | 'knet'
    | 'omannet'
    | 'kcp_naverpay'
    | 'fawry'
    | 'atome'
    | 'naps'
    | 'nordea'
    | 'boletobancario_bradesco'
    | 'boletobancario_itau'
    | 'boletobancario_santander'
    | 'boletobancario_bancodobrasil'
    | 'boletobancario_hsbc'
    | 'molpay_maybank2u'
    | 'molpay_cimb'
    | 'molpay_rhb'
    | 'molpay_amb'
    | 'molpay_hlb'
    | 'molpay_affin_epg'
    | 'molpay_bankislam'
    | 'molpay_publicbank'
    | 'fpx_agrobank'
    | 'touchngo'
    | 'maybank2u_mae'
    | 'duitnow'
    | 'promptpay'
    | 'twint_pos'
    | 'alipay_hk'
    | 'alipay_hk_web'
    | 'alipay_hk_wap'
    | 'alipay_wap'
    | 'balanceplatform'
    | undefined
}
type PixRecurring = {
  billingDate?: string | undefined
  businessDayOnly?: boolean | undefined
  endsAt?: string | undefined
  frequency?: 'weekly' | 'monthly' | 'quarterly' | 'half-yearly' | 'yearly' | undefined
  minAmount?: Amount | undefined
  originalPspReference?: string | undefined
  recurringAmount?: Amount | undefined
  recurringStatement?: string | undefined
  retryPolicy?: boolean | undefined
  startsAt?: string | undefined
}
type PixDetails = {
  checkoutAttemptId?: string | undefined
  pixRecurring?: PixRecurring | undefined
  recurringDetailReference?: string | undefined
  sdkData?: string | undefined
  storedPaymentMethodId?: string | undefined
  type?: 'pix' | undefined
}
type ConfidenceScore = { errors?: string[] | undefined; score?: number | undefined }
type ScreenDimensions = { height?: number | undefined; width?: number | undefined }
type PixPayByBankRiskSignals = {
  confidenceScore?: ConfidenceScore | undefined
  elapsedTimeSinceBoot?: bigint | undefined
  isRootedDevice?: boolean | undefined
  language?: string | undefined
  osVersion?: string | undefined
  screenBrightness?: number | undefined
  screenDimensions?: ScreenDimensions | undefined
  userTimeZoneOffset?: number | undefined
}
type PixPayByBankDetails = {
  checkoutAttemptId?: string | undefined
  deviceId?: string | undefined
  issuer?: string | undefined
  recurringDetailReference?: string | undefined
  riskSignals?: PixPayByBankRiskSignals | undefined
  sdkData?: string | undefined
  storedPaymentMethodId?: string | undefined
  type?: 'paybybank_pix' | undefined
}
type PseDetails = {
  bank: string
  checkoutAttemptId?: string | undefined
  clientType: string
  identification: string
  identificationType: string
  sdkData?: string | undefined
  type?: 'pse_payulatam' | undefined
}
type RakutenPayDetails = {
  checkoutAttemptId?: string | undefined
  recurringDetailReference?: string | undefined
  sdkData?: string | undefined
  storedPaymentMethodId?: string | undefined
  type?: 'rakutenpay' | undefined
}
type RatepayDetails = {
  billingAddress?: string | undefined
  checkoutAttemptId?: string | undefined
  deliveryAddress?: string | undefined
  personalDetails?: string | undefined
  recurringDetailReference?: string | undefined
  sdkData?: string | undefined
  storedPaymentMethodId?: string | undefined
  type: 'ratepay' | 'ratepay_directdebit'
}
type RivertyDetails = {
  billingAddress?: string | undefined
  checkoutAttemptId?: string | undefined
  deliveryAddress?: string | undefined
  deviceFingerprint?: string | undefined
  iban?: string | undefined
  personalDetails?: string | undefined
  recurringDetailReference?: string | undefined
  sdkData?: string | undefined
  storedPaymentMethodId?: string | undefined
  subtype?: string | undefined
  type: 'riverty' | 'riverty_account' | 'riverty_installments' | 'sepadirectdebit_riverty'
}
type SamsungPayDetails = {
  checkoutAttemptId?: string | undefined
  fundingSource?: 'credit' | 'debit' | 'prepaid' | undefined
  recurringDetailReference?: string | undefined
  samsungPayToken: string
  sdkData?: string | undefined
  storedPaymentMethodId?: string | undefined
  type?: 'samsungpay' | undefined
}
type SepaDirectDebitDetails = {
  checkoutAttemptId?: string | undefined
  dueDate?: string | undefined
  iban?: string | undefined
  ownerName?: string | undefined
  recurringDetailReference?: string | undefined
  sdkData?: string | undefined
  storedPaymentMethodId?: string | undefined
  transferInstrumentId?: string | undefined
  type?: 'sepadirectdebit' | 'sepadirectdebit_amazonpay' | undefined
}
type StoredPaymentMethodDetails = {
  checkoutAttemptId?: string | undefined
  recurringDetailReference?: string | undefined
  sdkData?: string | undefined
  storedPaymentMethodId?: string | undefined
  type?:
    | 'alipay_plus'
    | 'alipay_plus_alipay_cn'
    | 'alipay_plus_alipay_hk'
    | 'alipay_plus_dana'
    | 'alipay_plus_gcash'
    | 'alipay_plus_kakaopay'
    | 'alipay_plus_kplus'
    | 'alipay_plus_naverpay'
    | 'alipay_plus_rabbitlinepay'
    | 'alipay_plus_tosspay'
    | 'alipay_plus_touchngo'
    | 'alipay_plus_truemoney'
    | 'bcmc_mobile'
    | 'bcmc_mobile_QR'
    | 'bcmc_mobile_app'
    | 'momo_wallet'
    | 'momo_wallet_app'
    | 'revolutpay'
    | 'paymaya_wallet'
    | 'grabpay_SG'
    | 'grabpay_MY'
    | 'grabpay_TH'
    | 'grabpay_ID'
    | 'grabpay_VN'
    | 'grabpay_PH'
    | 'oxxo'
    | 'gcash'
    | 'dana'
    | 'kakaopay'
    | 'truemoney'
    | 'paysafecard'
    | 'gopay_wallet'
    | undefined
}
type TwintDetails = {
  checkoutAttemptId?: string | undefined
  recurringDetailReference?: string | undefined
  sdkData?: string | undefined
  storedPaymentMethodId?: string | undefined
  subtype?: string | undefined
  type?: 'twint' | undefined
}
type UpiCollectDetails = {
  billingSequenceNumber?: string | undefined
  checkoutAttemptId?: string | undefined
  recurringDetailReference?: string | undefined
  sdkData?: string | undefined
  shopperNotificationReference?: string | undefined
  storedPaymentMethodId?: string | undefined
  type: 'upi_collect'
  virtualPaymentAddress?: string | undefined
}
type UpiIntentDetails = {
  appId?: string | undefined
  billingSequenceNumber?: string | undefined
  checkoutAttemptId?: string | undefined
  recurringDetailReference?: string | undefined
  sdkData?: string | undefined
  shopperNotificationReference?: string | undefined
  storedPaymentMethodId?: string | undefined
  type: 'upi_intent'
}
type UpiQrDetails = {
  billingSequenceNumber?: string | undefined
  checkoutAttemptId?: string | undefined
  recurringDetailReference?: string | undefined
  sdkData?: string | undefined
  shopperNotificationReference?: string | undefined
  storedPaymentMethodId?: string | undefined
  type: 'upi_qr'
}
type VippsDetails = {
  checkoutAttemptId?: string | undefined
  recurringDetailReference?: string | undefined
  sdkData?: string | undefined
  storedPaymentMethodId?: string | undefined
  telephoneNumber: string
  type?: 'vipps' | undefined
}
type VisaCheckoutDetails = {
  checkoutAttemptId?: string | undefined
  fundingSource?: 'credit' | 'debit' | 'prepaid' | undefined
  sdkData?: string | undefined
  type?: 'visacheckout' | undefined
  visaCheckoutCallId: string
}
type WeChatPayDetails = {
  checkoutAttemptId?: string | undefined
  sdkData?: string | undefined
  type?: 'wechatpay' | 'wechatpay_pos' | undefined
}
type WeChatPayMiniProgramDetails = {
  appId?: string | undefined
  checkoutAttemptId?: string | undefined
  openid?: string | undefined
  recurringDetailReference?: string | undefined
  sdkData?: string | undefined
  storedPaymentMethodId?: string | undefined
  type?: 'wechatpayMiniProgram' | undefined
}
type ZipDetails = {
  checkoutAttemptId?: string | undefined
  clickAndCollect?: string | undefined
  recurringDetailReference?: string | undefined
  sdkData?: string | undefined
  storedPaymentMethodId?: string | undefined
  type?: 'zip' | 'zip_pos' | undefined
}
type PaymentValidationsNameRequest = { status: string }
type PaymentValidations = { name?: PaymentValidationsNameRequest | undefined }
type ShopperTaxInfo = { taxCountryCode: string; taxIdentificationNumber: string }
type SubMerchantInfo = {
  address?: BillingAddress | undefined
  amount?: Amount | undefined
  email?: string | undefined
  id?: string | undefined
  mcc?: string | undefined
  name?: string | undefined
  phoneNumber?: string | undefined
  registeredSince?: string | undefined
  taxId?: string | undefined
  url?: string | undefined
}
type Surcharge = { value: bigint }
type ThirdPartyTokenRedundancyInfo = {
  requestParameters?: { [x: string]: string } | undefined
  requestTemplateCode: string
}
type PaymentRequest = {
  accountInfo?: AccountInfo | undefined
  additionalAmount?: Amount | undefined
  additionalData?: { [x: string]: string } | undefined
  amount: Amount
  applicationInfo?: ApplicationInfo | undefined
  authenticationData?: AuthenticationData | undefined
  bankAccount?: CheckoutBankAccount | undefined
  billingAddress?: BillingAddress | undefined
  browserInfo?: BrowserInfo | undefined
  captureDelayHours?: number | undefined
  channel?: 'iOS' | 'Android' | 'Web' | undefined
  checkoutAttemptId?: string | undefined
  company?: Company | undefined
  conversionId?: string | undefined
  countryCode?: string | undefined
  dateOfBirth?: string | undefined
  dccQuote?: ForexQuote | undefined
  deliverAt?: string | undefined
  deliveryAddress?: DeliveryAddress | undefined
  deliveryDate?: string | undefined
  deviceFingerprint?: string | undefined
  enableOneClick?: boolean | undefined
  enablePayOut?: boolean | undefined
  enableRecurring?: boolean | undefined
  enhancedSchemeData?: EnhancedSchemeData | undefined
  entityType?: 'NaturalPerson' | 'CompanyName' | undefined
  fraudOffset?: number | undefined
  fundOrigin?: FundOrigin | undefined
  fundRecipient?: FundRecipient | undefined
  industryUsage?: 'delayedCharge' | 'installment' | 'noShow' | undefined
  installments?: Installments | undefined
  lineItems?: LineItem[] | undefined
  localizedShopperStatement?: { [x: string]: string } | undefined
  mandate?: Mandate | undefined
  mcc?: string | undefined
  merchantAccount: string
  merchantOrderReference?: string | undefined
  merchantRiskIndicator?: MerchantRiskIndicator | undefined
  metadata?: { [x: string]: string } | undefined
  mpiData?: ThreeDSecureData | undefined
  opi?: OpiRequest | undefined
  order?: EncryptedOrderData | undefined
  orderReference?: string | undefined
  origin?: string | undefined
  paymentMethod:
    | AchDetails
    | AffirmDetails
    | AfterpayDetails
    | AlmaDetails
    | AmazonPayDetails
    | AncvDetails
    | AndroidPayDetails
    | ApplePayDetails
    | AuPayDetails
    | BacsDirectDebitDetails
    | BillDeskDetails
    | BlikDetails
    | CardDetails
    | CashAppDetails
    | CellulantDetails
    | DBaraiDetails
    | DirectDebitAuDetails
    | DokuDetails
    | DragonpayDetails
    | EBankingFinlandDetails
    | EcontextVoucherDetails
    | EftDetails
    | ExternalTokenDetails
    | FastlaneDetails
    | GenericIssuerPaymentMethodDetails
    | GooglePayDetails
    | IdealDetails
    | KlarnaDetails
    | KlarnaNetworkDetails
    | MasterpassDetails
    | MbwayDetails
    | MobilePayDetails
    | MolPayDetails
    | OpenInvoiceDetails
    | PayByBankAISDirectDebitDetails
    | PayByBankCADirectDebitDetails
    | PayByBankDetails
    | PayPalDetails
    | PayPayDetails
    | PayToDetails
    | PayUUpiDetails
    | PayWithGoogleDetails
    | PaymentDetails
    | PixDetails
    | PixPayByBankDetails
    | PseDetails
    | RakutenPayDetails
    | RatepayDetails
    | RivertyDetails
    | SamsungPayDetails
    | SepaDirectDebitDetails
    | StoredPaymentMethodDetails
    | TwintDetails
    | UpiCollectDetails
    | UpiIntentDetails
    | UpiQrDetails
    | VippsDetails
    | VisaCheckoutDetails
    | WeChatPayDetails
    | WeChatPayMiniProgramDetails
    | ZipDetails
  paymentValidations?: PaymentValidations | undefined
  platformChargebackLogic?: PlatformChargebackLogic | undefined
  recurringExpiry?: string | undefined
  recurringFrequency?: string | undefined
  recurringProcessingModel?: 'CardOnFile' | 'Subscription' | 'UnscheduledCardOnFile' | undefined
  redirectFromIssuerMethod?: string | undefined
  redirectToIssuerMethod?: string | undefined
  reference: string
  returnUrl: string
  riskData?: RiskData | undefined
  sessionValidity?: string | undefined
  shopperConversionId?: string | undefined
  shopperEmail?: string | undefined
  shopperIP?: string | undefined
  shopperInteraction?: 'Ecommerce' | 'ContAuth' | 'Moto' | 'POS' | undefined
  shopperLocale?: string | undefined
  shopperName?: ShopperName | undefined
  shopperReference?: string | undefined
  shopperStatement?: string | undefined
  shopperTaxInfo?: ShopperTaxInfo | undefined
  socialSecurityNumber?: string | undefined
  splits?: Split[] | undefined
  store?: string | undefined
  storePaymentMethod?: boolean | undefined
  subMerchants?: SubMerchantInfo[] | undefined
  surcharge?: Surcharge | undefined
  telephoneNumber?: string | undefined
  thirdPartyTokenRedundancyInfo?: ThirdPartyTokenRedundancyInfo | undefined
  threeDS2RequestData?: ThreeDS2RequestFields | undefined
  threeDSAuthenticationOnly?: boolean | undefined
  trustedShopper?: boolean | undefined
}
type DetailsRequestAuthenticationData = { authenticationOnly?: boolean | undefined }
type PaymentCompletionDetails = {
  MD?: string | undefined
  PaReq?: string | undefined
  PaRes?: string | undefined
  authorization_token?: string | undefined
  billingToken?: string | undefined
  'cupsecureplus.smscode'?: string | undefined
  facilitatorAccessToken?: string | undefined
  oneTimePasscode?: string | undefined
  orderID?: string | undefined
  payerID?: string | undefined
  payload?: string | undefined
  paymentID?: string | undefined
  paymentStatus?: string | undefined
  redirectResult?: string | undefined
  resultCode?: string | undefined
  returnUrlQueryString?: string | undefined
  threeDSResult?: string | undefined
  'threeds2.challengeResult'?: string | undefined
  'threeds2.fingerprint'?: string | undefined
  vaultToken?: string | undefined
}
type PaymentDetailsRequest = {
  authenticationData?: DetailsRequestAuthenticationData | undefined
  details: PaymentCompletionDetails
  paymentData?: string | undefined
  threeDSAuthenticationOnly?: boolean | undefined
}
type PaymentDetailsResponse = {
  action?: CheckoutThreeDS2Action | undefined
  additionalData?: { [x: string]: string } | undefined
  amount?: Amount | undefined
  donationToken?: string | undefined
  fraudResult?: FraudResult | undefined
  merchantReference?: string | undefined
  opi?: OpiResponse | undefined
  order?: CheckoutOrderResponse | undefined
  paymentMethod?: ResponsePaymentMethod | undefined
  paymentValidations?: PaymentValidationsResponse | undefined
  pspReference?: string | undefined
  refusalReason?: string | undefined
  refusalReasonCode?: string | undefined
  resultCode?:
    | 'AuthenticationFinished'
    | 'AuthenticationNotRequired'
    | 'Authorised'
    | 'Cancelled'
    | 'ChallengeShopper'
    | 'Error'
    | 'IdentifyShopper'
    | 'PartiallyAuthorised'
    | 'Pending'
    | 'PresentToShopper'
    | 'Received'
    | 'RedirectShopper'
    | 'Refused'
    | 'Success'
    | undefined
  shopperLocale?: string | undefined
  threeDS2ResponseData?: ThreeDS2ResponseData | undefined
  threeDS2Result?: ThreeDS2Result | undefined
  threeDSPaymentData?: string | undefined
}
type PaymentAmountUpdateRequest = {
  amount: Amount
  applicationInfo?: ApplicationInfo | undefined
  enhancedSchemeData?: EnhancedSchemeData | undefined
  industryUsage?: 'delayedCharge' | 'installment' | 'noShow' | undefined
  lineItems?: LineItem[] | undefined
  merchantAccount: string
  reference?: string | undefined
  splits?: Split[] | undefined
}
type PaymentAmountUpdateResponse = {
  amount: Amount
  industryUsage?: 'delayedCharge' | 'installment' | 'noShow' | undefined
  lineItems?: LineItem[] | undefined
  merchantAccount: string
  paymentPspReference: string
  pspReference: string
  reference: string
  splits?: Split[] | undefined
  status: 'received'
}
type PaymentCancelRequest = {
  applicationInfo?: ApplicationInfo | undefined
  enhancedSchemeData?: EnhancedSchemeData | undefined
  merchantAccount: string
  reference?: string | undefined
}
type PaymentCancelResponse = {
  merchantAccount: string
  paymentPspReference: string
  pspReference: string
  reference?: string | undefined
  status: 'received'
}
type PaymentCaptureRequest = {
  amount: Amount
  applicationInfo?: ApplicationInfo | undefined
  enhancedSchemeData?: EnhancedSchemeData | undefined
  lineItems?: LineItem[] | undefined
  merchantAccount: string
  platformChargebackLogic?: PlatformChargebackLogic | undefined
  reference?: string | undefined
  splits?: Split[] | undefined
  subMerchants?: SubMerchantInfo[] | undefined
}
type PaymentCaptureResponse = {
  amount: Amount
  lineItems?: LineItem[] | undefined
  merchantAccount: string
  paymentPspReference: string
  platformChargebackLogic?: PlatformChargebackLogic | undefined
  pspReference: string
  reference?: string | undefined
  splits?: Split[] | undefined
  status: 'received'
  subMerchants?: SubMerchantInfo[] | undefined
}
type PaymentRefundRequest = {
  amount: Amount
  applicationInfo?: ApplicationInfo | undefined
  capturePspReference?: string | undefined
  enhancedSchemeData?: EnhancedSchemeData | undefined
  lineItems?: LineItem[] | undefined
  merchantAccount: string
  merchantRefundReason?: 'FRAUD' | 'CUSTOMER REQUEST' | 'RETURN' | 'DUPLICATE' | 'OTHER' | undefined
  reference?: string | undefined
  splits?: Split[] | undefined
  store?: string | undefined
}
type PaymentRefundResponse = {
  amount: Amount
  capturePspReference?: string | undefined
  lineItems?: LineItem[] | undefined
  merchantAccount: string
  merchantRefundReason?: 'FRAUD' | 'CUSTOMER REQUEST' | 'RETURN' | 'DUPLICATE' | 'OTHER' | undefined
  paymentPspReference: string
  pspReference: string
  reference?: string | undefined
  splits?: Split[] | undefined
  status: 'received'
  store?: string | undefined
}
type PaymentReversalRequest = {
  applicationInfo?: ApplicationInfo | undefined
  enhancedSchemeData?: EnhancedSchemeData | undefined
  merchantAccount: string
  reference?: string | undefined
}
type PaymentReversalResponse = {
  merchantAccount: string
  paymentPspReference: string
  pspReference: string
  reference?: string | undefined
  status: 'received'
}
type DeliveryMethod = {
  amount?: Amount | undefined
  description?: string | undefined
  reference?: string | undefined
  selected?: boolean | undefined
  type?: 'Shipping' | undefined
}
type TaxTotal = { amount?: Amount | undefined }
type PaypalUpdateOrderRequest = {
  amount?: Amount | undefined
  deliveryAddress?: DeliveryAddress | undefined
  deliveryMethods?: DeliveryMethod[] | undefined
  discountAmount?: Amount | undefined
  paymentData?: string | undefined
  pspReference?: string | undefined
  sessionId?: string | undefined
  shippingAmount?: Amount | undefined
  taxTotal?: TaxTotal | undefined
}
type PaypalUpdateOrderResponse = { paymentData: string; status: 'error' | 'success' }
type CheckoutSessionInstallmentOption = {
  plans?:
    | (
        | 'bonus'
        | 'buynow_paylater'
        | 'interes_refund_prctg'
        | 'interest_bonus'
        | 'nointeres_refund_prctg'
        | 'nointerest_bonus'
        | 'refund_prctg'
        | 'regular'
        | 'revolving'
        | 'with_interest'
      )[]
    | undefined
  preselectedValue?: number | undefined
  values?: number[] | undefined
}
type CreateCheckoutSessionRequest = {
  accountInfo?: AccountInfo | undefined
  additionalAmount?: Amount | undefined
  additionalData?: { [x: string]: string } | undefined
  allowedPaymentMethods?: string[] | undefined
  amount: Amount
  applicationInfo?: ApplicationInfo | undefined
  authenticationData?: AuthenticationData | undefined
  billingAddress?: BillingAddress | undefined
  blockedPaymentMethods?: string[] | undefined
  captureDelayHours?: number | undefined
  channel?: 'iOS' | 'Android' | 'Web' | undefined
  company?: Company | undefined
  countryCode?: string | undefined
  dateOfBirth?: string | undefined
  deliverAt?: string | undefined
  deliveryAddress?: DeliveryAddress | undefined
  enableOneClick?: boolean | undefined
  enablePayOut?: boolean | undefined
  enableRecurring?: boolean | undefined
  expiresAt?: string | undefined
  fundOrigin?: FundOrigin | undefined
  fundRecipient?: FundRecipient | undefined
  installmentOptions?: { [x: string]: CheckoutSessionInstallmentOption } | undefined
  lineItems?: LineItem[] | undefined
  mandate?: Mandate | undefined
  mcc?: string | undefined
  merchantAccount: string
  merchantOrderReference?: string | undefined
  metadata?: { [x: string]: string } | undefined
  mode?: 'embedded' | 'hosted' | undefined
  mpiData?: ThreeDSecureData | undefined
  platformChargebackLogic?: PlatformChargebackLogic | undefined
  recurringExpiry?: string | undefined
  recurringFrequency?: string | undefined
  recurringProcessingModel?: 'CardOnFile' | 'Subscription' | 'UnscheduledCardOnFile' | undefined
  redirectFromIssuerMethod?: string | undefined
  redirectToIssuerMethod?: string | undefined
  reference: string
  returnUrl: string
  riskData?: RiskData | undefined
  shopperConversionId?: string | undefined
  shopperEmail?: string | undefined
  shopperIP?: string | undefined
  shopperInteraction?: 'Ecommerce' | 'ContAuth' | 'Moto' | 'POS' | undefined
  shopperLocale?: string | undefined
  shopperName?: ShopperName | undefined
  shopperReference?: string | undefined
  shopperStatement?: string | undefined
  showInstallmentAmount?: boolean | undefined
  showRemovePaymentMethodButton?: boolean | undefined
  socialSecurityNumber?: string | undefined
  splitCardFundingSources?: boolean | undefined
  splits?: Split[] | undefined
  store?: string | undefined
  storeFiltrationMode?: 'exclusive' | 'inclusive' | 'skipFilter' | undefined
  storePaymentMethod?: boolean | undefined
  storePaymentMethodMode?: 'askForConsent' | 'disabled' | 'enabled' | undefined
  telephoneNumber?: string | undefined
  themeId?: string | undefined
  thirdPartyTokenRedundancyInfo?: ThirdPartyTokenRedundancyInfo | undefined
  threeDS2RequestData?: CheckoutSessionThreeDS2RequestData | undefined
  threeDSAuthenticationOnly?: boolean | undefined
  trustedShopper?: boolean | undefined
}
type CreateCheckoutSessionResponse = {
  accountInfo?: AccountInfo | undefined
  additionalAmount?: Amount | undefined
  additionalData?: { [x: string]: string } | undefined
  allowedPaymentMethods?: string[] | undefined
  amount: Amount
  applicationInfo?: ApplicationInfo | undefined
  authenticationData?: AuthenticationData | undefined
  billingAddress?: BillingAddress | undefined
  blockedPaymentMethods?: string[] | undefined
  captureDelayHours?: number | undefined
  channel?: 'iOS' | 'Android' | 'Web' | undefined
  company?: Company | undefined
  countryCode?: string | undefined
  dateOfBirth?: string | undefined
  deliverAt?: string | undefined
  deliveryAddress?: DeliveryAddress | undefined
  enableOneClick?: boolean | undefined
  enablePayOut?: boolean | undefined
  enableRecurring?: boolean | undefined
  expiresAt: string
  fundOrigin?: FundOrigin | undefined
  fundRecipient?: FundRecipient | undefined
  id: string
  installmentOptions?: { [x: string]: CheckoutSessionInstallmentOption } | undefined
  lineItems?: LineItem[] | undefined
  mandate?: Mandate | undefined
  mcc?: string | undefined
  merchantAccount: string
  merchantOrderReference?: string | undefined
  metadata?: { [x: string]: string } | undefined
  mode?: 'embedded' | 'hosted' | undefined
  mpiData?: ThreeDSecureData | undefined
  platformChargebackLogic?: PlatformChargebackLogic | undefined
  recurringExpiry?: string | undefined
  recurringFrequency?: string | undefined
  recurringProcessingModel?: 'CardOnFile' | 'Subscription' | 'UnscheduledCardOnFile' | undefined
  redirectFromIssuerMethod?: string | undefined
  redirectToIssuerMethod?: string | undefined
  reference: string
  returnUrl: string
  riskData?: RiskData | undefined
  sessionData?: string | undefined
  shopperEmail?: string | undefined
  shopperIP?: string | undefined
  shopperInteraction?: 'Ecommerce' | 'ContAuth' | 'Moto' | 'POS' | undefined
  shopperLocale?: string | undefined
  shopperName?: ShopperName | undefined
  shopperReference?: string | undefined
  shopperStatement?: string | undefined
  showInstallmentAmount?: boolean | undefined
  showRemovePaymentMethodButton?: boolean | undefined
  socialSecurityNumber?: string | undefined
  splitCardFundingSources?: boolean | undefined
  splits?: Split[] | undefined
  store?: string | undefined
  storeFiltrationMode?: 'exclusive' | 'inclusive' | 'skipFilter' | undefined
  storePaymentMethod?: boolean | undefined
  storePaymentMethodMode?: 'askForConsent' | 'disabled' | 'enabled' | undefined
  telephoneNumber?: string | undefined
  themeId?: string | undefined
  thirdPartyTokenRedundancyInfo?: ThirdPartyTokenRedundancyInfo | undefined
  threeDS2RequestData?: CheckoutSessionThreeDS2RequestData | undefined
  threeDSAuthenticationOnly?: boolean | undefined
  trustedShopper?: boolean | undefined
  url?: string | undefined
}
type Payment = {
  amount?: Amount | undefined
  paymentMethod?: ResponsePaymentMethod | undefined
  pspReference?: string | undefined
  resultCode?: 'Authorised' | 'Received' | 'Pending' | undefined
}
type SessionResultResponse = {
  additionalData?: { [x: string]: string } | undefined
  id?: string | undefined
  payments?: Payment[] | undefined
  reference?: string | undefined
  status?:
    | 'active'
    | 'canceled'
    | 'completed'
    | 'expired'
    | 'paymentPending'
    | 'refused'
    | undefined
}
type TokenMandate = {
  accountIdType?: string | undefined
  amount: string
  amountRule?: 'max' | 'exact' | undefined
  billingAttemptsRule?: 'on' | 'before' | 'after' | undefined
  billingDay?: string | undefined
  count?: string | undefined
  currency: string
  endsAt: string
  frequency:
    | 'adhoc'
    | 'daily'
    | 'weekly'
    | 'biWeekly'
    | 'monthly'
    | 'quarterly'
    | 'halfYearly'
    | 'yearly'
  mandateId: string
  maskedAccountId?: string | undefined
  minAmount?: string | undefined
  previousMandateId?: string | undefined
  providerId: string
  purposeCode?: string | undefined
  recurringAmount?: string | undefined
  recurringStatement?: string | undefined
  remarks?: string | undefined
  retryPolicy?: 'true' | 'false' | undefined
  startsAt?: string | undefined
  status: string
  txVariant: string
}
type StoredPaymentMethodResource = {
  alias?: string | undefined
  aliasType?: string | undefined
  brand?: string | undefined
  cardBin?: string | undefined
  expiryMonth?: string | undefined
  expiryYear?: string | undefined
  externalResponseCode?: string | undefined
  externalTokenReference?: string | undefined
  holderName?: string | undefined
  iban?: string | undefined
  id?: string | undefined
  issuerName?: string | undefined
  lastFour?: string | undefined
  mandate?: TokenMandate | undefined
  name?: string | undefined
  networkTxReference?: string | undefined
  opi?: OpiResponse | undefined
  ownerName?: string | undefined
  shopperEmail?: string | undefined
  shopperReference?: string | undefined
  supportedRecurringProcessingModels?: string[] | undefined
  type?: string | undefined
}
type ListStoredPaymentMethodsResponse = {
  merchantAccount?: string | undefined
  shopperReference?: string | undefined
  storedPaymentMethods?: StoredPaymentMethodResource[] | undefined
}
type PaymentMethodToStore = {
  brand?: string | undefined
  cvc?: string | undefined
  encryptedCard?: string | undefined
  encryptedCardNumber?: string | undefined
  encryptedExpiryMonth?: string | undefined
  encryptedExpiryYear?: string | undefined
  encryptedSecurityCode?: string | undefined
  expiryMonth?: string | undefined
  expiryYear?: string | undefined
  holderName?: string | undefined
  number?: string | undefined
  type?: string | undefined
}
type StoredPaymentMethodRequest = {
  merchantAccount: string
  opi?: OpiRequest | undefined
  paymentMethod: PaymentMethodToStore
  recurringProcessingModel: 'CardOnFile' | 'Subscription' | 'UnscheduledCardOnFile'
  shopperEmail?: string | undefined
  shopperIP?: string | undefined
  shopperReference: string
}
type ShopperIdPaymentMethod = { type: string }
type ValidateShopperIdRequest = {
  merchantAccount: string
  paymentMethod: ShopperIdPaymentMethod
  shopperEmail?: string | undefined
  shopperIP?: string | undefined
  shopperReference?: string | undefined
}
type Result = 'VALID' | 'INVALID' | 'UNKNOWN' | 'NOT_REQUIRED'
type ValidateShopperIdResponse = { reason?: string | undefined; result?: Result | undefined }
type CheckoutErrorResponseEntity = {
  errorCode: string
  errorType: string
  message: string
  pspReference?: string | undefined
  status?: number | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/applePay/sessions': {
      $post: {
        input: { header: { 'Idempotency-Key'?: string | undefined } } & {
          json: ApplePaySessionRequest
        }
        output: ApplePaySessionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/cancels': {
      $post:
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: StandalonePaymentCancelRequest
            }
            output: StandalonePaymentCancelResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: StandalonePaymentCancelRequest
            }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: StandalonePaymentCancelRequest
            }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: StandalonePaymentCancelRequest
            }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: StandalonePaymentCancelRequest
            }
            output: ServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: StandalonePaymentCancelRequest
            }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/cardDetails': {
      $post: {
        input: { header: { 'Idempotency-Key'?: string | undefined } } & { json: CardDetailsRequest }
        output: CardDetailsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/donationCampaigns': {
      $post:
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: DonationCampaignsRequest
            }
            output: DonationCampaignsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: DonationCampaignsRequest
            }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: DonationCampaignsRequest
            }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: DonationCampaignsRequest
            }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: DonationCampaignsRequest
            }
            output: ServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: DonationCampaignsRequest
            }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/donations': {
      $post:
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: DonationPaymentRequest
            }
            output: DonationPaymentResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: DonationPaymentRequest
            }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: DonationPaymentRequest
            }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: DonationPaymentRequest
            }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: DonationPaymentRequest
            }
            output: ServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: DonationPaymentRequest
            }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/forward': {
      $post: {
        input: { header: { 'Idempotency-Key'?: string | undefined } } & {
          json: CheckoutForwardRequest
        }
        output: CheckoutForwardResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/orders': {
      $post:
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: CreateOrderRequest
            }
            output: CreateOrderResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: CreateOrderRequest
            }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: CreateOrderRequest
            }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: CreateOrderRequest
            }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: CreateOrderRequest
            }
            output: ServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: CreateOrderRequest
            }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/orders/cancel': {
      $post:
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: CancelOrderRequest
            }
            output: CancelOrderResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: CancelOrderRequest
            }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: CancelOrderRequest
            }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: CancelOrderRequest
            }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: CancelOrderRequest
            }
            output: ServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: CancelOrderRequest
            }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/originKeys': {
      $post:
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & { json: UtilityRequest }
            output: UtilityResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & { json: UtilityRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & { json: UtilityRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & { json: UtilityRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & { json: UtilityRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & { json: UtilityRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/paymentLinks': {
      $post:
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: PaymentLinkRequest
            }
            output: PaymentLinkResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: PaymentLinkRequest
            }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: PaymentLinkRequest
            }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: PaymentLinkRequest
            }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: PaymentLinkRequest
            }
            output: ServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: PaymentLinkRequest
            }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/paymentLinks/:linkId': {
      $get:
        | {
            input: { param: { linkId: string } }
            output: PaymentLinkResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { linkId: string } }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { linkId: string } }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { linkId: string } }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { linkId: string } }
            output: ServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { linkId: string } }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
      $patch:
        | {
            input: { param: { linkId: string } } & { json: UpdatePaymentLinkRequest }
            output: PaymentLinkResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { linkId: string } } & { json: UpdatePaymentLinkRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { linkId: string } } & { json: UpdatePaymentLinkRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { linkId: string } } & { json: UpdatePaymentLinkRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { linkId: string } } & { json: UpdatePaymentLinkRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { linkId: string } } & { json: UpdatePaymentLinkRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/paymentMethods': {
      $post:
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: PaymentMethodsRequest
            }
            output: PaymentMethodsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: PaymentMethodsRequest
            }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: PaymentMethodsRequest
            }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: PaymentMethodsRequest
            }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: PaymentMethodsRequest
            }
            output: ServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: PaymentMethodsRequest
            }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/paymentMethods/balance': {
      $post:
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: BalanceCheckRequest
            }
            output: BalanceCheckResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: BalanceCheckRequest
            }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: BalanceCheckRequest
            }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: BalanceCheckRequest
            }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: BalanceCheckRequest
            }
            output: ServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: BalanceCheckRequest
            }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/payments': {
      $post:
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & { json: PaymentRequest }
            output: PaymentResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & { json: PaymentRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & { json: PaymentRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & { json: PaymentRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & { json: PaymentRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & { json: PaymentRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/payments/details': {
      $post:
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: PaymentDetailsRequest
            }
            output: PaymentDetailsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: PaymentDetailsRequest
            }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: PaymentDetailsRequest
            }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: PaymentDetailsRequest
            }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: PaymentDetailsRequest
            }
            output: ServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: PaymentDetailsRequest
            }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/payments/:paymentPspReference/amountUpdates': {
      $post:
        | {
            input: { param: { paymentPspReference: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            } & { json: PaymentAmountUpdateRequest }
            output: PaymentAmountUpdateResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { paymentPspReference: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            } & { json: PaymentAmountUpdateRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { paymentPspReference: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            } & { json: PaymentAmountUpdateRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { paymentPspReference: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            } & { json: PaymentAmountUpdateRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { paymentPspReference: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            } & { json: PaymentAmountUpdateRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { paymentPspReference: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            } & { json: PaymentAmountUpdateRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/payments/:paymentPspReference/cancels': {
      $post:
        | {
            input: { param: { paymentPspReference: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            } & { json: PaymentCancelRequest }
            output: PaymentCancelResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { paymentPspReference: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            } & { json: PaymentCancelRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { paymentPspReference: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            } & { json: PaymentCancelRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { paymentPspReference: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            } & { json: PaymentCancelRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { paymentPspReference: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            } & { json: PaymentCancelRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { paymentPspReference: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            } & { json: PaymentCancelRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/payments/:paymentPspReference/captures': {
      $post:
        | {
            input: { param: { paymentPspReference: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            } & { json: PaymentCaptureRequest }
            output: PaymentCaptureResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { paymentPspReference: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            } & { json: PaymentCaptureRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { paymentPspReference: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            } & { json: PaymentCaptureRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { paymentPspReference: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            } & { json: PaymentCaptureRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { paymentPspReference: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            } & { json: PaymentCaptureRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { paymentPspReference: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            } & { json: PaymentCaptureRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/payments/:paymentPspReference/refunds': {
      $post:
        | {
            input: { param: { paymentPspReference: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            } & { json: PaymentRefundRequest }
            output: PaymentRefundResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { paymentPspReference: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            } & { json: PaymentRefundRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { paymentPspReference: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            } & { json: PaymentRefundRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { paymentPspReference: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            } & { json: PaymentRefundRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { paymentPspReference: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            } & { json: PaymentRefundRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { paymentPspReference: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            } & { json: PaymentRefundRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/payments/:paymentPspReference/reversals': {
      $post:
        | {
            input: { param: { paymentPspReference: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            } & { json: PaymentReversalRequest }
            output: PaymentReversalResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { paymentPspReference: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            } & { json: PaymentReversalRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { paymentPspReference: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            } & { json: PaymentReversalRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { paymentPspReference: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            } & { json: PaymentReversalRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { paymentPspReference: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            } & { json: PaymentReversalRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { paymentPspReference: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            } & { json: PaymentReversalRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/paypal/updateOrder': {
      $post:
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: PaypalUpdateOrderRequest
            }
            output: PaypalUpdateOrderResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: PaypalUpdateOrderRequest
            }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: PaypalUpdateOrderRequest
            }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: PaypalUpdateOrderRequest
            }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: PaypalUpdateOrderRequest
            }
            output: ServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: PaypalUpdateOrderRequest
            }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/sessions': {
      $post: {
        input: { header: { 'Idempotency-Key'?: string | undefined } } & {
          json: CreateCheckoutSessionRequest
        }
        output: CreateCheckoutSessionResponse
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/sessions/:sessionId': {
      $get: {
        input: { param: { sessionId: string } } & { query: { sessionResult: string } }
        output: SessionResultResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/storedPaymentMethods': {
      $get: {
        input: {
          query: { shopperReference?: string | undefined; merchantAccount?: string | undefined }
        }
        output: ListStoredPaymentMethodsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { header: { 'Idempotency-Key'?: string | undefined } } & {
          json: StoredPaymentMethodRequest
        }
        output: StoredPaymentMethodResource
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/storedPaymentMethods/:storedPaymentMethodId': {
      $delete: {
        input: { param: { storedPaymentMethodId: string } } & {
          query: { shopperReference: string; merchantAccount: string }
        }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/validateShopperId': {
      $post:
        | {
            input: { json: ValidateShopperIdRequest }
            output: ValidateShopperIdResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ValidateShopperIdRequest }
            output: CheckoutErrorResponseEntity
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: ValidateShopperIdRequest }
            output: CheckoutErrorResponseEntity
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: ValidateShopperIdRequest }
            output: CheckoutErrorResponseEntity
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: ValidateShopperIdRequest }
            output: CheckoutErrorResponseEntity
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: ValidateShopperIdRequest }
            output: CheckoutErrorResponseEntity
            outputFormat: 'json'
            status: 500
          }
    }
  },
  '/'
>
export default routes
