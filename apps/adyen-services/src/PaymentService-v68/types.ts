type Amount = { currency: string; value: bigint }
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
type PlatformChargebackLogic = {
  behavior?:
    | 'deductAccordingToSplitRatio'
    | 'deductFromLiableAccount'
    | 'deductFromOneBalanceAccount'
    | undefined
  costAllocationAccount?: string | undefined
  targetAccount?: string | undefined
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
type AdjustAuthorisationRequest = {
  additionalData?: { [x: string]: string } | undefined
  merchantAccount: string
  modificationAmount: Amount
  mpiData?: ThreeDSecureData | undefined
  originalMerchantReference?: string | undefined
  originalReference: string
  platformChargebackLogic?: PlatformChargebackLogic | undefined
  reference?: string | undefined
  splits?: Split[] | undefined
  tenderReference?: string | undefined
  uniqueTerminalId?: string | undefined
}
type ModificationResult = {
  additionalData?: { [x: string]: string } | undefined
  pspReference: string
  response:
    | '[capture-received]'
    | '[cancel-received]'
    | '[refund-received]'
    | '[cancelOrRefund-received]'
    | '[adjustAuthorisation-received]'
    | '[donation-received]'
    | '[technical-cancel-received]'
    | '[voidPendingRefund-received]'
    | 'Authorised'
    | 'Refused'
    | 'Error'
}
type ServiceError = {
  additionalData?: { [x: string]: string } | undefined
  errorCode?: string | undefined
  errorType?: string | undefined
  message?: string | undefined
  pspReference?: string | undefined
  status?: number | undefined
}
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
type BankAccount = {
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
type Address = {
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
type Card = {
  cvc?: string | undefined
  expiryMonth?: string | undefined
  expiryYear?: string | undefined
  holderName?: string | undefined
  issueNumber?: string | undefined
  number?: string | undefined
  startMonth?: string | undefined
  startYear?: string | undefined
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
type Name = { firstName: string; lastName: string }
type SubMerchant = {
  city?: string | undefined
  country?: string | undefined
  mcc?: string | undefined
  name?: string | undefined
  taxId?: string | undefined
}
type FundDestination = {
  IBAN?: string | undefined
  additionalData?: { [x: string]: string } | undefined
  billingAddress?: Address | undefined
  card?: Card | undefined
  selectedRecurringDetailReference?: string | undefined
  shopperEmail?: string | undefined
  shopperName?: Name | undefined
  shopperReference?: string | undefined
  subMerchant?: SubMerchant | undefined
  telephoneNumber?: string | undefined
  walletPurpose?: string | undefined
}
type FundSource = {
  additionalData?: { [x: string]: string } | undefined
  billingAddress?: Address | undefined
  card?: Card | undefined
  shopperEmail?: string | undefined
  shopperName?: Name | undefined
  telephoneNumber?: string | undefined
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
type SecureRemoteCommerceCheckoutData = {
  checkoutPayload?: string | undefined
  correlationId?: string | undefined
  cvc?: string | undefined
  digitalCardId?: string | undefined
  scheme?: 'mc' | 'visa' | undefined
  tokenReference?: string | undefined
}
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
type PaymentRequest = {
  accountInfo?: AccountInfo | undefined
  additionalAmount?: Amount | undefined
  additionalData?: { [x: string]: string } | undefined
  amount: Amount
  applicationInfo?: ApplicationInfo | undefined
  bankAccount?: BankAccount | undefined
  billingAddress?: Address | undefined
  browserInfo?: BrowserInfo | undefined
  captureDelayHours?: number | undefined
  card?: Card | undefined
  dateOfBirth?: string | undefined
  dccQuote?: ForexQuote | undefined
  deliveryAddress?: Address | undefined
  deliveryDate?: string | undefined
  deviceFingerprint?: string | undefined
  entityType?: 'NaturalPerson' | 'CompanyName' | undefined
  fraudOffset?: number | undefined
  fundDestination?: FundDestination | undefined
  fundSource?: FundSource | undefined
  fundingSource?: 'credit' | 'debit' | 'prepaid' | undefined
  installments?: Installments | undefined
  localizedShopperStatement?: { [x: string]: string } | undefined
  mandate?: Mandate | undefined
  mcc?: string | undefined
  merchantAccount: string
  merchantOrderReference?: string | undefined
  merchantRiskIndicator?: MerchantRiskIndicator | undefined
  metadata?: { [x: string]: string } | undefined
  mpiData?: ThreeDSecureData | undefined
  nationality?: string | undefined
  orderReference?: string | undefined
  platformChargebackLogic?: PlatformChargebackLogic | undefined
  recurring?: Recurring | undefined
  recurringProcessingModel?: 'CardOnFile' | 'Subscription' | 'UnscheduledCardOnFile' | undefined
  reference: string
  secureRemoteCommerceCheckoutData?: SecureRemoteCommerceCheckoutData | undefined
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
  storeClickToPayProfile?: boolean | undefined
  telephoneNumber?: string | undefined
  threeDS2RequestData?: ThreeDS2RequestData | undefined
  threeDSAuthenticationOnly?: boolean | undefined
  totalsGroup?: string | undefined
  trustedShopper?: boolean | undefined
}
type FraudCheckResult = { accountScore: number; checkId: number; name: string }
type FraudCheckResultWrapper = { FraudCheckResult?: FraudCheckResult | undefined }
type FraudResult = { accountScore: number; results?: FraudCheckResultWrapper[] | undefined }
type PaymentResult = {
  additionalData?: { [x: string]: string } | undefined
  authCode?: string | undefined
  dccAmount?: Amount | undefined
  dccSignature?: string | undefined
  fraudResult?: FraudResult | undefined
  issuerUrl?: string | undefined
  md?: string | undefined
  paRequest?: string | undefined
  pspReference?: string | undefined
  refusalReason?: string | undefined
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
}
type PaymentRequest3d = {
  accountInfo?: AccountInfo | undefined
  additionalAmount?: Amount | undefined
  additionalData?: { [x: string]: string } | undefined
  amount?: Amount | undefined
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
  md: string
  merchantAccount: string
  merchantOrderReference?: string | undefined
  merchantRiskIndicator?: MerchantRiskIndicator | undefined
  metadata?: { [x: string]: string } | undefined
  orderReference?: string | undefined
  paResponse: string
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
type PaymentRequest3ds2 = {
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
  recurring?: Recurring | undefined
  recurringProcessingModel?: 'CardOnFile' | 'Subscription' | 'UnscheduledCardOnFile' | undefined
  reference: string
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
  threeDS2Result?: ThreeDS2Result | undefined
  threeDS2Token?: string | undefined
  threeDSAuthenticationOnly?: boolean | undefined
  totalsGroup?: string | undefined
  trustedShopper?: boolean | undefined
}
type CancelRequest = {
  additionalData?: { [x: string]: string } | undefined
  merchantAccount: string
  mpiData?: ThreeDSecureData | undefined
  originalMerchantReference?: string | undefined
  originalReference: string
  platformChargebackLogic?: PlatformChargebackLogic | undefined
  reference?: string | undefined
  splits?: Split[] | undefined
  tenderReference?: string | undefined
  uniqueTerminalId?: string | undefined
}
type CancelOrRefundRequest = {
  additionalData?: { [x: string]: string } | undefined
  merchantAccount: string
  mpiData?: ThreeDSecureData | undefined
  originalMerchantReference?: string | undefined
  originalReference: string
  platformChargebackLogic?: PlatformChargebackLogic | undefined
  reference?: string | undefined
  tenderReference?: string | undefined
  uniqueTerminalId?: string | undefined
}
type CaptureRequest = {
  additionalData?: { [x: string]: string } | undefined
  merchantAccount: string
  modificationAmount: Amount
  mpiData?: ThreeDSecureData | undefined
  originalMerchantReference?: string | undefined
  originalReference: string
  platformChargebackLogic?: PlatformChargebackLogic | undefined
  reference?: string | undefined
  splits?: Split[] | undefined
  tenderReference?: string | undefined
  uniqueTerminalId?: string | undefined
}
type DonationRequest = {
  donationAccount: string
  merchantAccount: string
  modificationAmount: Amount
  originalReference?: string | undefined
  platformChargebackLogic?: PlatformChargebackLogic | undefined
  reference?: string | undefined
}
type AuthenticationResultRequest = { merchantAccount: string; pspReference: string }
type ThreeDS1Result = {
  cavv?: string | undefined
  cavvAlgorithm?: string | undefined
  eci?: string | undefined
  threeDAuthenticatedResponse?: string | undefined
  threeDOfferedResponse?: string | undefined
  xid?: string | undefined
}
type AuthenticationResultResponse = {
  threeDS1Result?: ThreeDS1Result | undefined
  threeDS2Result?: ThreeDS2Result | undefined
}
type RefundRequest = {
  additionalData?: { [x: string]: string } | undefined
  merchantAccount: string
  modificationAmount: Amount
  mpiData?: ThreeDSecureData | undefined
  originalMerchantReference?: string | undefined
  originalReference: string
  platformChargebackLogic?: PlatformChargebackLogic | undefined
  reference?: string | undefined
  splits?: Split[] | undefined
  tenderReference?: string | undefined
  uniqueTerminalId?: string | undefined
}
type ThreeDS2ResultRequest = { merchantAccount: string; pspReference: string }
type ThreeDS2ResultResponse = { threeDS2Result?: ThreeDS2Result | undefined }
type TechnicalCancelRequest = {
  additionalData?: { [x: string]: string } | undefined
  merchantAccount: string
  modificationAmount?: Amount | undefined
  mpiData?: ThreeDSecureData | undefined
  originalMerchantReference: string
  platformChargebackLogic?: PlatformChargebackLogic | undefined
  reference?: string | undefined
  splits?: Split[] | undefined
  tenderReference?: string | undefined
  uniqueTerminalId?: string | undefined
}
type VoidPendingRefundRequest = {
  additionalData?: { [x: string]: string } | undefined
  merchantAccount: string
  modificationAmount?: Amount | undefined
  mpiData?: ThreeDSecureData | undefined
  originalMerchantReference?: string | undefined
  originalReference?: string | undefined
  platformChargebackLogic?: PlatformChargebackLogic | undefined
  reference?: string | undefined
  splits?: Split[] | undefined
  tenderReference?: string | undefined
  uniqueTerminalId?: string | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/adjustAuthorisation': {
      $post:
        | {
            input: { json: AdjustAuthorisationRequest }
            output: ModificationResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: AdjustAuthorisationRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: AdjustAuthorisationRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: AdjustAuthorisationRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: AdjustAuthorisationRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: AdjustAuthorisationRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/authorise': {
      $post:
        | {
            input: { json: PaymentRequest }
            output: PaymentResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: PaymentRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: PaymentRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: PaymentRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: PaymentRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: PaymentRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/authorise3d': {
      $post:
        | {
            input: { json: PaymentRequest3d }
            output: PaymentResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: PaymentRequest3d }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: PaymentRequest3d }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: PaymentRequest3d }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: PaymentRequest3d }
            output: ServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: PaymentRequest3d }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/authorise3ds2': {
      $post:
        | {
            input: { json: PaymentRequest3ds2 }
            output: PaymentResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: PaymentRequest3ds2 }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: PaymentRequest3ds2 }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: PaymentRequest3ds2 }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: PaymentRequest3ds2 }
            output: ServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: PaymentRequest3ds2 }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/cancel': {
      $post:
        | {
            input: { json: CancelRequest }
            output: ModificationResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CancelRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CancelRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: CancelRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: CancelRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: CancelRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/cancelOrRefund': {
      $post:
        | {
            input: { json: CancelOrRefundRequest }
            output: ModificationResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CancelOrRefundRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CancelOrRefundRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: CancelOrRefundRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: CancelOrRefundRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: CancelOrRefundRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/capture': {
      $post:
        | {
            input: { json: CaptureRequest }
            output: ModificationResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CaptureRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CaptureRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: CaptureRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: CaptureRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: CaptureRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/donate': {
      $post:
        | {
            input: { json: DonationRequest }
            output: ModificationResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: DonationRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: DonationRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: DonationRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: DonationRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: DonationRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/getAuthenticationResult': {
      $post:
        | {
            input: { json: AuthenticationResultRequest }
            output: AuthenticationResultResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: AuthenticationResultRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: AuthenticationResultRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: AuthenticationResultRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: AuthenticationResultRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: AuthenticationResultRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/refund': {
      $post:
        | {
            input: { json: RefundRequest }
            output: ModificationResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: RefundRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: RefundRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: RefundRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: RefundRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: RefundRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/retrieve3ds2Result': {
      $post:
        | {
            input: { json: ThreeDS2ResultRequest }
            output: ThreeDS2ResultResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ThreeDS2ResultRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: ThreeDS2ResultRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: ThreeDS2ResultRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: ThreeDS2ResultRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: ThreeDS2ResultRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/technicalCancel': {
      $post:
        | {
            input: { json: TechnicalCancelRequest }
            output: ModificationResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: TechnicalCancelRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: TechnicalCancelRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: TechnicalCancelRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: TechnicalCancelRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: TechnicalCancelRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/voidPendingRefund': {
      $post:
        | {
            input: { json: VoidPendingRefundRequest }
            output: ModificationResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: VoidPendingRefundRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: VoidPendingRefundRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: VoidPendingRefundRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: VoidPendingRefundRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: VoidPendingRefundRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  },
  '/'
>
export default routes
