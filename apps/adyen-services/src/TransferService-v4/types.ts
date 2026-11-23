type Amount = { currency: string; value: bigint }
type CapitalBalance = { currency: string; fee: bigint; principal: bigint; total: bigint }
type GrantCounterparty = {
  accountHolderId?: string | undefined
  balanceAccountId?: string | undefined
  transferInstrumentId?: string | undefined
}
type Fee = { amount: Amount }
type RepaymentTerm = { estimatedDays: number; maximumDays?: number | undefined }
type ThresholdRepayment = { amount: Amount }
type Repayment = {
  basisPoints: number
  term?: RepaymentTerm | undefined
  threshold?: ThresholdRepayment | undefined
}
type CapitalGrant = {
  amount?: Amount | undefined
  balances: CapitalBalance
  counterparty?: GrantCounterparty | undefined
  fee?: Fee | undefined
  grantAccountId: string
  grantOfferId: string
  id: string
  repayment?: Repayment | undefined
  status: 'Pending' | 'Active' | 'Repaid' | 'Failed' | 'WrittenOff' | 'Revoked'
}
type CapitalGrants = { grants: CapitalGrant[] }
type InvalidField = { message: string; name: string; value: string }
type JSONObject = { [x: string]: unknown }
type RestServiceError = {
  detail: string
  errorCode: string
  instance?: string | undefined
  invalidFields?: InvalidField[] | undefined
  requestId?: string | undefined
  response?: JSONObject | undefined
  status: number
  title: string
  type: string
}
type GrantInfoCounterparty = {
  balanceAccountId?: string | undefined
  transferInstrumentId?: string | undefined
}
type CapitalGrantInfo = {
  counterparty?: GrantInfoCounterparty | undefined
  grantAccountId: string
  grantOfferId: string
}
type Link = { href?: string | undefined }
type Links = { next?: Link | undefined; prev?: Link | undefined }
type ResourceReference = {
  description?: string | undefined
  id?: string | undefined
  reference?: string | undefined
}
type PaymentInstrument = {
  description?: string | undefined
  id?: string | undefined
  reference?: string | undefined
  tokenType?: string | undefined
}
type BankCategoryData = {
  priority?: 'crossBorder' | 'fast' | 'instant' | 'internal' | 'regular' | 'wire' | undefined
  type?: 'bank' | undefined
}
type InternalCategoryData = {
  modificationMerchantReference?: string | undefined
  modificationPspReference?: string | undefined
  type?: 'internal' | undefined
}
type RelayedAuthorisationData = {
  metadata?: { [x: string]: string } | undefined
  reference?: string | undefined
}
type ThreeDSecure = { acsTransactionId?: string | undefined }
type TransferNotificationValidationFact = { result?: string | undefined; type?: string | undefined }
type IssuedCard = {
  authorisationType?: string | undefined
  networkVariant?: 'maestro_us' | 'mastercard' | 'visa' | undefined
  panEntryMode?:
    | 'chip'
    | 'cof'
    | 'contactless'
    | 'ecommerce'
    | 'magstripe'
    | 'manual'
    | 'token'
    | undefined
  processingType?:
    | 'atmWithdraw'
    | 'balanceInquiry'
    | 'ecommerce'
    | 'moto'
    | 'pos'
    | 'purchaseWithCashback'
    | 'recurring'
    | 'token'
    | undefined
  relayedAuthorisationData?: RelayedAuthorisationData | undefined
  schemeTraceId?: string | undefined
  schemeUniqueTransactionId?: string | undefined
  threeDSecure?: ThreeDSecure | undefined
  type?: 'issuedCard' | undefined
  validationFacts?: TransferNotificationValidationFact[] | undefined
}
type PlatformPayment = {
  modificationMerchantReference?: string | undefined
  modificationPspReference?: string | undefined
  paymentMerchantReference?: string | undefined
  platformPaymentType?:
    | 'AcquiringFees'
    | 'AdyenCommission'
    | 'AdyenFees'
    | 'AdyenMarkup'
    | 'BalanceAccount'
    | 'ChargebackRemainder'
    | 'Commission'
    | 'DCCMarkup'
    | 'DCCPlatformCommission'
    | 'Default'
    | 'Interchange'
    | 'PaymentFee'
    | 'Remainder'
    | 'SchemeFee'
    | 'Surcharge'
    | 'Tip'
    | 'TopUp'
    | 'VAT'
    | undefined
  pspPaymentReference?: string | undefined
  type?: 'platformPayment' | undefined
}
type TransferView = {
  categoryData?: BankCategoryData | InternalCategoryData | IssuedCard | PlatformPayment | undefined
  id?: string | undefined
  reference: string
}
type Transaction = {
  accountHolder: ResourceReference
  amount: Amount
  balanceAccount: ResourceReference
  balancePlatform: string
  bookingDate: string
  creationDate?: string | undefined
  description?: string | undefined
  id: string
  paymentInstrument?: PaymentInstrument | undefined
  referenceForBeneficiary?: string | undefined
  status: 'booked' | 'pending'
  transfer?: TransferView | undefined
  valueDate: string
}
type TransactionSearchResponse = { _links?: Links | undefined; data?: Transaction[] | undefined }
type BalanceMutation = {
  balance?: bigint | undefined
  currency?: string | undefined
  received?: bigint | undefined
  reserved?: bigint | undefined
}
type Address = {
  city?: string | undefined
  country: string
  line1?: string | undefined
  line2?: string | undefined
  postalCode?: string | undefined
  stateOrProvince?: string | undefined
}
type PartyIdentification = {
  address?: Address | undefined
  dateOfBirth?: string | undefined
  email?: string | undefined
  firstName?: string | undefined
  fullName?: string | undefined
  lastName?: string | undefined
  reference?: string | undefined
  type?: 'individual' | 'organization' | 'unknown' | undefined
  url?: string | undefined
}
type AULocalAccountIdentification = { accountNumber: string; bsbCode: string; type: 'auLocal' }
type BRLocalAccountIdentification = {
  accountNumber: string
  bankCode: string
  branchNumber: string
  ispb?: string | undefined
  type: 'brLocal'
}
type CALocalAccountIdentification = {
  accountNumber: string
  accountType?: 'checking' | 'savings' | undefined
  institutionNumber: string
  transitNumber: string
  type: 'caLocal'
}
type CZLocalAccountIdentification = { accountNumber: string; bankCode: string; type: 'czLocal' }
type DKLocalAccountIdentification = { accountNumber: string; bankCode: string; type: 'dkLocal' }
type HKLocalAccountIdentification = { accountNumber: string; clearingCode: string; type: 'hkLocal' }
type HULocalAccountIdentification = { accountNumber: string; type: 'huLocal' }
type IbanAccountIdentification = { bic?: string | undefined; iban: string; type: 'iban' }
type NOLocalAccountIdentification = { accountNumber: string; type: 'noLocal' }
type NZLocalAccountIdentification = { accountNumber: string; type: 'nzLocal' }
type AdditionalBankIdentification = {
  code?: string | undefined
  type?: 'auBsbCode' | 'caRoutingNumber' | 'gbSortCode' | 'usRoutingNumber' | undefined
}
type NumberAndBicAccountIdentification = {
  accountNumber: string
  additionalBankIdentification?: AdditionalBankIdentification | undefined
  bic: string
  type: 'numberAndBic'
}
type PLLocalAccountIdentification = { accountNumber: string; type: 'plLocal' }
type SELocalAccountIdentification = {
  accountNumber: string
  clearingNumber: string
  type: 'seLocal'
}
type SGLocalAccountIdentification = {
  accountNumber: string
  bic: string
  type?: 'sgLocal' | undefined
}
type UKLocalAccountIdentification = { accountNumber: string; sortCode: string; type: 'ukLocal' }
type USLocalAccountIdentification = {
  accountNumber: string
  accountType?: 'checking' | 'savings' | undefined
  routingNumber: string
  type: 'usLocal'
}
type BankAccountV3 = {
  accountHolder: PartyIdentification
  accountIdentification:
    | AULocalAccountIdentification
    | BRLocalAccountIdentification
    | CALocalAccountIdentification
    | CZLocalAccountIdentification
    | DKLocalAccountIdentification
    | HKLocalAccountIdentification
    | HULocalAccountIdentification
    | IbanAccountIdentification
    | NOLocalAccountIdentification
    | NZLocalAccountIdentification
    | NumberAndBicAccountIdentification
    | PLLocalAccountIdentification
    | SELocalAccountIdentification
    | SGLocalAccountIdentification
    | UKLocalAccountIdentification
    | USLocalAccountIdentification
  storedPaymentMethodId?: string | undefined
}
type CardIdentification = {
  expiryMonth?: string | undefined
  expiryYear?: string | undefined
  issueNumber?: string | undefined
  number?: string | undefined
  startMonth?: string | undefined
  startYear?: string | undefined
  storedPaymentMethodId?: string | undefined
}
type Card = { cardHolder: PartyIdentification; cardIdentification: CardIdentification }
type TransferNotificationMerchantData = {
  acquirerId?: string | undefined
  city?: string | undefined
  country?: string | undefined
  countryCode?: string | undefined
  mcc?: string | undefined
  merchantId?: string | undefined
  name?: string | undefined
  postalCode?: string | undefined
}
type TransferNotificationCounterParty = {
  balanceAccountId?: string | undefined
  bankAccount?: BankAccountV3 | undefined
  card?: Card | undefined
  merchant?: TransferNotificationMerchantData | undefined
  transferInstrumentId?: string | undefined
}
type DirectDebitInformation = {
  dateOfSignature?: string | undefined
  dueDate?: string | undefined
  mandateId?: string | undefined
  sequenceType?: string | undefined
}
type AmountAdjustment = {
  amount?: Amount | undefined
  amountAdjustmentType?: 'atmMarkup' | 'authHoldReserve' | 'exchange' | 'forexMarkup' | undefined
  basepoints?: number | undefined
}
type InterchangeData = {
  interchangeAmount?: Amount | undefined
  interchangeRateIndicator?: string | undefined
  type: 'interchangeData'
}
type IssuingTransactionData = {
  captureCycleId?: string | undefined
  type: 'issuingTransactionData'
}
type Leg = {
  arrivalAirportCode?: string | undefined
  basicFareCode?: string | undefined
  carrierCode?: string | undefined
  departureAirportCode?: string | undefined
  departureDate?: string | undefined
  flightNumber?: string | undefined
}
type Airline = { legs?: Leg[] | undefined; ticketNumber?: string | undefined }
type Lodging = { checkInDate?: string | undefined; numberOfNights?: number | undefined }
type MerchantPurchaseData = {
  airline?: Airline | undefined
  lodging?: Lodging[] | undefined
  type: 'merchantPurchaseData'
}
type ExternalReason = {
  code?: string | undefined
  description?: string | undefined
  namespace?: string | undefined
}
type Modification = {
  direction?: string | undefined
  id?: string | undefined
  reference?: string | undefined
  status?:
    | 'approvalPending'
    | 'atmWithdrawal'
    | 'atmWithdrawalReversalPending'
    | 'atmWithdrawalReversed'
    | 'authAdjustmentAuthorised'
    | 'authAdjustmentError'
    | 'authAdjustmentRefused'
    | 'authorised'
    | 'bankTransfer'
    | 'bankTransferPending'
    | 'booked'
    | 'bookingPending'
    | 'cancelled'
    | 'capturePending'
    | 'captureReversalPending'
    | 'captureReversed'
    | 'captured'
    | 'capturedExternally'
    | 'chargeback'
    | 'chargebackExternally'
    | 'chargebackPending'
    | 'chargebackReversalPending'
    | 'chargebackReversed'
    | 'credited'
    | 'depositCorrection'
    | 'depositCorrectionPending'
    | 'dispute'
    | 'disputeClosed'
    | 'disputeExpired'
    | 'disputeNeedsReview'
    | 'error'
    | 'expired'
    | 'failed'
    | 'fee'
    | 'feePending'
    | 'interchangeAdjusted'
    | 'internalTransfer'
    | 'internalTransferPending'
    | 'invoiceDeduction'
    | 'invoiceDeductionPending'
    | 'manualCorrectionPending'
    | 'manuallyCorrected'
    | 'matchedStatement'
    | 'matchedStatementPending'
    | 'merchantPayin'
    | 'merchantPayinPending'
    | 'merchantPayinReversed'
    | 'merchantPayinReversedPending'
    | 'miscCost'
    | 'miscCostPending'
    | 'paymentCost'
    | 'paymentCostPending'
    | 'pending'
    | 'pendingApproval'
    | 'pendingExecution'
    | 'received'
    | 'refundPending'
    | 'refundReversalPending'
    | 'refundReversed'
    | 'refunded'
    | 'refundedExternally'
    | 'refused'
    | 'rejected'
    | 'reserveAdjustment'
    | 'reserveAdjustmentPending'
    | 'returned'
    | 'reversalReceived'
    | 'reversed'
    | 'secondChargeback'
    | 'secondChargebackPending'
    | 'undefined'
    | undefined
  type?: string | undefined
}
type UKFpsTracingData = { fpid: string; type: 'ukFps' }
type USAchTracingData = { traceNumber: string; type: 'usAch' }
type ConfirmationTrackingData = { status: 'credited' | 'accepted'; type: 'confirmation' }
type EstimationTrackingData = { estimatedArrivalTime: string; type: 'estimation' }
type InternalReviewTrackingData = {
  reason?: 'refusedForRegulatoryReasons' | undefined
  status: 'pending' | 'failed'
  type: 'internalReview'
}
type TransferEvent = {
  amount?: Amount | undefined
  amountAdjustments?: AmountAdjustment[] | undefined
  arn?: string | undefined
  bookingDate?: string | undefined
  estimatedArrivalTime?: string | undefined
  eventsData?: (InterchangeData | IssuingTransactionData | MerchantPurchaseData)[] | undefined
  externalReason?: ExternalReason | undefined
  id?: string | undefined
  modification?: Modification | undefined
  mutations?: BalanceMutation[] | undefined
  originalAmount?: Amount | undefined
  reason?:
    | 'accountHierarchyNotActive'
    | 'amountLimitExceeded'
    | 'approvalExpired'
    | 'approved'
    | 'avsDeclined'
    | 'balanceAccountTemporarilyBlockedByTransactionRule'
    | 'blockCard'
    | 'callReferral'
    | 'cancelled'
    | 'captureCard'
    | 'cardExpired'
    | 'cardholderAuthenticationRequired'
    | 'cashbackAmountExceedsLimit'
    | 'cavvDeclined'
    | 'contactlessFallback'
    | 'contactlessLimitReached'
    | 'counterpartyAccountBlocked'
    | 'counterpartyAccountClosed'
    | 'counterpartyAccountNotFound'
    | 'counterpartyAddressRequired'
    | 'counterpartyBankTimedOut'
    | 'counterpartyBankUnavailable'
    | 'cryptographicFailure'
    | 'cvcDeclined'
    | 'declined'
    | 'declinedByBapValidation'
    | 'declinedByTransactionRule'
    | 'declinedNonGeneric'
    | 'directDebitNotSupported'
    | 'doNotHonor'
    | 'domesticDebitTransactionNotAllowed'
    | 'duplicateTransmissionDetected'
    | 'error'
    | 'formatError'
    | 'fraud'
    | 'fraudCancelled'
    | 'honorWithId'
    | 'internalTimeout'
    | 'invalidAccount'
    | 'invalidAmount'
    | 'invalidAuthorizationLifeCycle'
    | 'invalidCard'
    | 'invalidExpiryDate'
    | 'invalidFromAccount'
    | 'invalidIssuer'
    | 'invalidMerchant'
    | 'invalidPin'
    | 'invalidToAccount'
    | 'invalidTransaction'
    | 'issuerSuspectedFraud'
    | 'lostCard'
    | 'mobilePinRequired'
    | 'noCheckingAccount'
    | 'noSavingsAccount'
    | 'not3dAuthenticated'
    | 'notEnoughBalance'
    | 'notSubmitted'
    | 'notSupported'
    | 'partiallyApproved'
    | 'pending'
    | 'pendingApproval'
    | 'pendingExecution'
    | 'pinNotChanged'
    | 'pinRequired'
    | 'pinTriesExceeded'
    | 'pinValidationNotPossible'
    | 'purchaseAmountOnlyNoCashBack'
    | 'refusedByCounterpartyBank'
    | 'refusedByCustomer'
    | 'restrictedCard'
    | 'revocationOfAuth'
    | 'routeNotFound'
    | 'scaAuthenticationRequired'
    | 'scaFailed'
    | 'schemeAdvice'
    | 'securityViolation'
    | 'shopperCancelled'
    | 'stolenCard'
    | 'threedsDynamicLinkingMismatch'
    | 'transactionNotPermitted'
    | 'transferInstrumentDoesNotExist'
    | 'unableToRouteTransaction'
    | 'unknown'
    | 'withdrawalAmountExceeded'
    | 'withdrawalCountExceeded'
    | undefined
  status?:
    | 'approvalPending'
    | 'atmWithdrawal'
    | 'atmWithdrawalReversalPending'
    | 'atmWithdrawalReversed'
    | 'authAdjustmentAuthorised'
    | 'authAdjustmentError'
    | 'authAdjustmentRefused'
    | 'authorised'
    | 'bankTransfer'
    | 'bankTransferPending'
    | 'booked'
    | 'bookingPending'
    | 'cancelled'
    | 'capturePending'
    | 'captureReversalPending'
    | 'captureReversed'
    | 'captured'
    | 'capturedExternally'
    | 'chargeback'
    | 'chargebackExternally'
    | 'chargebackPending'
    | 'chargebackReversalPending'
    | 'chargebackReversed'
    | 'credited'
    | 'depositCorrection'
    | 'depositCorrectionPending'
    | 'dispute'
    | 'disputeClosed'
    | 'disputeExpired'
    | 'disputeNeedsReview'
    | 'error'
    | 'expired'
    | 'failed'
    | 'fee'
    | 'feePending'
    | 'interchangeAdjusted'
    | 'internalTransfer'
    | 'internalTransferPending'
    | 'invoiceDeduction'
    | 'invoiceDeductionPending'
    | 'manualCorrectionPending'
    | 'manuallyCorrected'
    | 'matchedStatement'
    | 'matchedStatementPending'
    | 'merchantPayin'
    | 'merchantPayinPending'
    | 'merchantPayinReversed'
    | 'merchantPayinReversedPending'
    | 'miscCost'
    | 'miscCostPending'
    | 'paymentCost'
    | 'paymentCostPending'
    | 'pending'
    | 'pendingApproval'
    | 'pendingExecution'
    | 'received'
    | 'refundPending'
    | 'refundReversalPending'
    | 'refundReversed'
    | 'refunded'
    | 'refundedExternally'
    | 'refused'
    | 'rejected'
    | 'reserveAdjustment'
    | 'reserveAdjustmentPending'
    | 'returned'
    | 'reversalReceived'
    | 'reversed'
    | 'secondChargeback'
    | 'secondChargebackPending'
    | 'undefined'
    | undefined
  tracingData?: UKFpsTracingData | USAchTracingData | undefined
  trackingData?:
    | ConfirmationTrackingData
    | EstimationTrackingData
    | InternalReviewTrackingData
    | undefined
  transactionId?: string | undefined
  type?: 'accounting' | 'tracing' | 'tracking' | undefined
  updateDate?: string | undefined
  valueDate?: string | undefined
}
type ExecutionDate = { date?: string | undefined; timezone?: string | undefined }
type NetworkReason = {
  code?: string | undefined
  description?: string | undefined
  namespace?:
    | 'iso8583ResponseCode'
    | 'ukFpsRejectionCode'
    | 'ukFpsReturnReasonCode'
    | 'usAchCorrectionReasonCode'
    | 'usAchReturnReasonCode'
    | undefined
}
type TransferReview = {
  numberOfApprovalsRequired?: number | undefined
  scaOnApproval?: 'completed' | 'notApplicable' | 'required' | undefined
}
type TransactionRuleReference = {
  description?: string | undefined
  id?: string | undefined
  outcomeType?: string | undefined
  reference?: string | undefined
  score?: number | undefined
}
type TransactionRuleSource = { id?: string | undefined; type?: string | undefined }
type TransactionEventViolation = {
  reason?: string | undefined
  transactionRule?: TransactionRuleReference | undefined
  transactionRuleSource?: TransactionRuleSource | undefined
}
type TransactionRulesResult = {
  advice?: string | undefined
  allHardBlockRulesPassed?: boolean | undefined
  score?: number | undefined
  triggeredTransactionRules?: TransactionEventViolation[] | undefined
}
type FundingInstrument = {
  cardIdentification?: CardIdentification | undefined
  networkPaymentReference?: string | undefined
  reference?: string | undefined
  sourceOfFunds?: 'DEBIT' | 'DEPOSIT_ACCOUNT' | undefined
}
type UltimatePartyIdentification = {
  address?: Address | undefined
  dateOfBirth?: string | undefined
  email?: string | undefined
  firstName?: string | undefined
  fullName?: string | undefined
  fundingInstrument?: FundingInstrument | undefined
  lastName?: string | undefined
  reference?: string | undefined
  type?: 'individual' | 'organization' | 'unknown' | undefined
  url?: string | undefined
}
type TransferData = {
  accountHolder?: ResourceReference | undefined
  amount: Amount
  balanceAccount?: ResourceReference | undefined
  balancePlatform?: string | undefined
  balances?: BalanceMutation[] | undefined
  category:
    | 'bank'
    | 'card'
    | 'grants'
    | 'interest'
    | 'internal'
    | 'issuedCard'
    | 'platformPayment'
    | 'topUp'
  categoryData?: BankCategoryData | InternalCategoryData | IssuedCard | PlatformPayment | undefined
  counterparty?: TransferNotificationCounterParty | undefined
  createdAt?: string | undefined
  creationDate?: string | undefined
  description?: string | undefined
  directDebitInformation?: DirectDebitInformation | undefined
  direction?: 'incoming' | 'outgoing' | undefined
  eventId?: string | undefined
  events?: TransferEvent[] | undefined
  executionDate?: ExecutionDate | undefined
  externalReason?: ExternalReason | undefined
  id?: string | undefined
  networkReason?: NetworkReason | undefined
  paymentInstrument?: PaymentInstrument | undefined
  reason?:
    | 'accountHierarchyNotActive'
    | 'amountLimitExceeded'
    | 'approvalExpired'
    | 'approved'
    | 'avsDeclined'
    | 'balanceAccountTemporarilyBlockedByTransactionRule'
    | 'blockCard'
    | 'callReferral'
    | 'cancelled'
    | 'captureCard'
    | 'cardExpired'
    | 'cardholderAuthenticationRequired'
    | 'cashbackAmountExceedsLimit'
    | 'cavvDeclined'
    | 'contactlessFallback'
    | 'contactlessLimitReached'
    | 'counterpartyAccountBlocked'
    | 'counterpartyAccountClosed'
    | 'counterpartyAccountNotFound'
    | 'counterpartyAddressRequired'
    | 'counterpartyBankTimedOut'
    | 'counterpartyBankUnavailable'
    | 'cryptographicFailure'
    | 'cvcDeclined'
    | 'declined'
    | 'declinedByBapValidation'
    | 'declinedByTransactionRule'
    | 'declinedNonGeneric'
    | 'directDebitNotSupported'
    | 'doNotHonor'
    | 'domesticDebitTransactionNotAllowed'
    | 'duplicateTransmissionDetected'
    | 'error'
    | 'formatError'
    | 'fraud'
    | 'fraudCancelled'
    | 'honorWithId'
    | 'internalTimeout'
    | 'invalidAccount'
    | 'invalidAmount'
    | 'invalidAuthorizationLifeCycle'
    | 'invalidCard'
    | 'invalidExpiryDate'
    | 'invalidFromAccount'
    | 'invalidIssuer'
    | 'invalidMerchant'
    | 'invalidPin'
    | 'invalidToAccount'
    | 'invalidTransaction'
    | 'issuerSuspectedFraud'
    | 'lostCard'
    | 'mobilePinRequired'
    | 'noCheckingAccount'
    | 'noSavingsAccount'
    | 'not3dAuthenticated'
    | 'notEnoughBalance'
    | 'notSubmitted'
    | 'notSupported'
    | 'partiallyApproved'
    | 'pending'
    | 'pendingApproval'
    | 'pendingExecution'
    | 'pinNotChanged'
    | 'pinRequired'
    | 'pinTriesExceeded'
    | 'pinValidationNotPossible'
    | 'purchaseAmountOnlyNoCashBack'
    | 'refusedByCounterpartyBank'
    | 'refusedByCustomer'
    | 'restrictedCard'
    | 'revocationOfAuth'
    | 'routeNotFound'
    | 'scaAuthenticationRequired'
    | 'scaFailed'
    | 'schemeAdvice'
    | 'securityViolation'
    | 'shopperCancelled'
    | 'stolenCard'
    | 'threedsDynamicLinkingMismatch'
    | 'transactionNotPermitted'
    | 'transferInstrumentDoesNotExist'
    | 'unableToRouteTransaction'
    | 'unknown'
    | 'withdrawalAmountExceeded'
    | 'withdrawalCountExceeded'
    | undefined
  reference?: string | undefined
  referenceForBeneficiary?: string | undefined
  review?: TransferReview | undefined
  sequenceNumber?: number | undefined
  status:
    | 'approvalPending'
    | 'atmWithdrawal'
    | 'atmWithdrawalReversalPending'
    | 'atmWithdrawalReversed'
    | 'authAdjustmentAuthorised'
    | 'authAdjustmentError'
    | 'authAdjustmentRefused'
    | 'authorised'
    | 'bankTransfer'
    | 'bankTransferPending'
    | 'booked'
    | 'bookingPending'
    | 'cancelled'
    | 'capturePending'
    | 'captureReversalPending'
    | 'captureReversed'
    | 'captured'
    | 'capturedExternally'
    | 'chargeback'
    | 'chargebackExternally'
    | 'chargebackPending'
    | 'chargebackReversalPending'
    | 'chargebackReversed'
    | 'credited'
    | 'depositCorrection'
    | 'depositCorrectionPending'
    | 'dispute'
    | 'disputeClosed'
    | 'disputeExpired'
    | 'disputeNeedsReview'
    | 'error'
    | 'expired'
    | 'failed'
    | 'fee'
    | 'feePending'
    | 'interchangeAdjusted'
    | 'internalTransfer'
    | 'internalTransferPending'
    | 'invoiceDeduction'
    | 'invoiceDeductionPending'
    | 'manualCorrectionPending'
    | 'manuallyCorrected'
    | 'matchedStatement'
    | 'matchedStatementPending'
    | 'merchantPayin'
    | 'merchantPayinPending'
    | 'merchantPayinReversed'
    | 'merchantPayinReversedPending'
    | 'miscCost'
    | 'miscCostPending'
    | 'paymentCost'
    | 'paymentCostPending'
    | 'pending'
    | 'pendingApproval'
    | 'pendingExecution'
    | 'received'
    | 'refundPending'
    | 'refundReversalPending'
    | 'refundReversed'
    | 'refunded'
    | 'refundedExternally'
    | 'refused'
    | 'rejected'
    | 'reserveAdjustment'
    | 'reserveAdjustmentPending'
    | 'returned'
    | 'reversalReceived'
    | 'reversed'
    | 'secondChargeback'
    | 'secondChargebackPending'
    | 'undefined'
  tracing?: UKFpsTracingData | USAchTracingData | undefined
  tracking?:
    | ConfirmationTrackingData
    | EstimationTrackingData
    | InternalReviewTrackingData
    | undefined
  transactionRulesResult?: TransactionRulesResult | undefined
  type?:
    | 'payment'
    | 'capture'
    | 'captureReversal'
    | 'refund'
    | 'refundReversal'
    | 'chargeback'
    | 'chargebackCorrection'
    | 'chargebackReversal'
    | 'chargebackReversalCorrection'
    | 'secondChargeback'
    | 'secondChargebackCorrection'
    | 'atmWithdrawal'
    | 'atmWithdrawalReversal'
    | 'internalTransfer'
    | 'internalDirectDebit'
    | 'manualCorrection'
    | 'invoiceDeduction'
    | 'depositCorrection'
    | 'reserveAdjustment'
    | 'bankTransfer'
    | 'bankDirectDebit'
    | 'cardTransfer'
    | 'miscCost'
    | 'paymentCost'
    | 'fee'
    | 'leftover'
    | 'grant'
    | 'capitalFundsCollection'
    | 'cashOutInstruction'
    | 'cashoutFee'
    | 'cashoutRepayment'
    | 'cashoutFunding'
    | 'repayment'
    | 'installment'
    | 'installmentReversal'
    | 'balanceAdjustment'
    | 'balanceRollover'
    | 'balanceMigration'
    | 'interestPayout'
    | 'fxSell'
    | 'fxBuy'
    | undefined
  ultimateParty?: UltimatePartyIdentification | undefined
  updatedAt?: string | undefined
}
type FindTransfersResponse = { _links?: Links | undefined; data?: TransferData[] | undefined }
type RoutingDetails = {
  detail?: string | undefined
  errorCode?: string | undefined
  priority?: 'crossBorder' | 'fast' | 'instant' | 'internal' | 'regular' | 'wire' | undefined
  title?: string | undefined
}
type TransferServiceRestServiceError = {
  detail: string
  errorCode: string
  instance?: string | undefined
  invalidFields?: InvalidField[] | undefined
  requestId?: string | undefined
  response?: JSONObject | undefined
  routingDetails?: RoutingDetails[] | undefined
  status: number
  title: string
  type: string
}
type CounterpartyInfoV3 = {
  balanceAccountId?: string | undefined
  bankAccount?: BankAccountV3 | undefined
  card?: Card | undefined
  transferInstrumentId?: string | undefined
}
type TransferRequestReview = {
  numberOfApprovalsRequired?: number | undefined
  scaOnApproval?: boolean | undefined
}
type TransferInfo = {
  amount: Amount
  balanceAccountId?: string | undefined
  category: 'bank' | 'card' | 'internal' | 'issuedCard' | 'platformPayment' | 'topUp'
  counterparty: CounterpartyInfoV3
  description?: string | undefined
  executionDate?: ExecutionDate | undefined
  paymentInstrumentId?: string | undefined
  priorities?: ('crossBorder' | 'fast' | 'instant' | 'internal' | 'regular' | 'wire')[] | undefined
  priority?: 'crossBorder' | 'fast' | 'instant' | 'internal' | 'regular' | 'wire' | undefined
  reference?: string | undefined
  referenceForBeneficiary?: string | undefined
  review?: TransferRequestReview | undefined
  type?: 'bankTransfer' | 'internalTransfer' | 'internalDirectDebit' | undefined
  ultimateParty?: UltimatePartyIdentification | undefined
}
type NameLocation = {
  city?: string | undefined
  country?: string | undefined
  countryOfOrigin?: string | undefined
  name?: string | undefined
  rawData?: string | undefined
  state?: string | undefined
}
type MerchantData = {
  acquirerId?: string | undefined
  mcc?: string | undefined
  merchantId?: string | undefined
  nameLocation?: NameLocation | undefined
  postalCode?: string | undefined
}
type CounterpartyV3 = {
  balanceAccountId?: string | undefined
  bankAccount?: BankAccountV3 | undefined
  card?: Card | undefined
  merchant?: MerchantData | undefined
  transferInstrumentId?: string | undefined
}
type Transfer = {
  accountHolder?: ResourceReference | undefined
  amount: Amount
  balanceAccount?: ResourceReference | undefined
  category:
    | 'bank'
    | 'card'
    | 'grants'
    | 'interest'
    | 'internal'
    | 'issuedCard'
    | 'platformPayment'
    | 'topUp'
  categoryData?: BankCategoryData | InternalCategoryData | IssuedCard | PlatformPayment | undefined
  counterparty: CounterpartyV3
  createdAt?: string | undefined
  creationDate?: string | undefined
  description?: string | undefined
  directDebitInformation?: DirectDebitInformation | undefined
  direction?: 'incoming' | 'outgoing' | undefined
  executionDate?: ExecutionDate | undefined
  id?: string | undefined
  paymentInstrument?: PaymentInstrument | undefined
  reason?:
    | 'accountHierarchyNotActive'
    | 'amountLimitExceeded'
    | 'approvalExpired'
    | 'approved'
    | 'avsDeclined'
    | 'balanceAccountTemporarilyBlockedByTransactionRule'
    | 'blockCard'
    | 'callReferral'
    | 'cancelled'
    | 'captureCard'
    | 'cardExpired'
    | 'cardholderAuthenticationRequired'
    | 'cashbackAmountExceedsLimit'
    | 'cavvDeclined'
    | 'contactlessFallback'
    | 'contactlessLimitReached'
    | 'counterpartyAccountBlocked'
    | 'counterpartyAccountClosed'
    | 'counterpartyAccountNotFound'
    | 'counterpartyAddressRequired'
    | 'counterpartyBankTimedOut'
    | 'counterpartyBankUnavailable'
    | 'cryptographicFailure'
    | 'cvcDeclined'
    | 'declined'
    | 'declinedByBapValidation'
    | 'declinedByTransactionRule'
    | 'declinedNonGeneric'
    | 'directDebitNotSupported'
    | 'doNotHonor'
    | 'domesticDebitTransactionNotAllowed'
    | 'duplicateTransmissionDetected'
    | 'error'
    | 'formatError'
    | 'fraud'
    | 'fraudCancelled'
    | 'honorWithId'
    | 'internalTimeout'
    | 'invalidAccount'
    | 'invalidAmount'
    | 'invalidAuthorizationLifeCycle'
    | 'invalidCard'
    | 'invalidExpiryDate'
    | 'invalidFromAccount'
    | 'invalidIssuer'
    | 'invalidMerchant'
    | 'invalidPin'
    | 'invalidToAccount'
    | 'invalidTransaction'
    | 'issuerSuspectedFraud'
    | 'lostCard'
    | 'mobilePinRequired'
    | 'noCheckingAccount'
    | 'noSavingsAccount'
    | 'not3dAuthenticated'
    | 'notEnoughBalance'
    | 'notSubmitted'
    | 'notSupported'
    | 'partiallyApproved'
    | 'pending'
    | 'pendingApproval'
    | 'pendingExecution'
    | 'pinNotChanged'
    | 'pinRequired'
    | 'pinTriesExceeded'
    | 'pinValidationNotPossible'
    | 'purchaseAmountOnlyNoCashBack'
    | 'refusedByCounterpartyBank'
    | 'refusedByCustomer'
    | 'restrictedCard'
    | 'revocationOfAuth'
    | 'routeNotFound'
    | 'scaAuthenticationRequired'
    | 'scaFailed'
    | 'schemeAdvice'
    | 'securityViolation'
    | 'shopperCancelled'
    | 'stolenCard'
    | 'threedsDynamicLinkingMismatch'
    | 'transactionNotPermitted'
    | 'transferInstrumentDoesNotExist'
    | 'unableToRouteTransaction'
    | 'unknown'
    | 'withdrawalAmountExceeded'
    | 'withdrawalCountExceeded'
    | undefined
  reference?: string | undefined
  referenceForBeneficiary?: string | undefined
  review?: TransferReview | undefined
  status:
    | 'approvalPending'
    | 'atmWithdrawal'
    | 'atmWithdrawalReversalPending'
    | 'atmWithdrawalReversed'
    | 'authAdjustmentAuthorised'
    | 'authAdjustmentError'
    | 'authAdjustmentRefused'
    | 'authorised'
    | 'bankTransfer'
    | 'bankTransferPending'
    | 'booked'
    | 'bookingPending'
    | 'cancelled'
    | 'capturePending'
    | 'captureReversalPending'
    | 'captureReversed'
    | 'captured'
    | 'capturedExternally'
    | 'chargeback'
    | 'chargebackExternally'
    | 'chargebackPending'
    | 'chargebackReversalPending'
    | 'chargebackReversed'
    | 'credited'
    | 'depositCorrection'
    | 'depositCorrectionPending'
    | 'dispute'
    | 'disputeClosed'
    | 'disputeExpired'
    | 'disputeNeedsReview'
    | 'error'
    | 'expired'
    | 'failed'
    | 'fee'
    | 'feePending'
    | 'interchangeAdjusted'
    | 'internalTransfer'
    | 'internalTransferPending'
    | 'invoiceDeduction'
    | 'invoiceDeductionPending'
    | 'manualCorrectionPending'
    | 'manuallyCorrected'
    | 'matchedStatement'
    | 'matchedStatementPending'
    | 'merchantPayin'
    | 'merchantPayinPending'
    | 'merchantPayinReversed'
    | 'merchantPayinReversedPending'
    | 'miscCost'
    | 'miscCostPending'
    | 'paymentCost'
    | 'paymentCostPending'
    | 'pending'
    | 'pendingApproval'
    | 'pendingExecution'
    | 'received'
    | 'refundPending'
    | 'refundReversalPending'
    | 'refundReversed'
    | 'refunded'
    | 'refundedExternally'
    | 'refused'
    | 'rejected'
    | 'reserveAdjustment'
    | 'reserveAdjustmentPending'
    | 'returned'
    | 'reversalReceived'
    | 'reversed'
    | 'secondChargeback'
    | 'secondChargebackPending'
    | 'undefined'
  type?:
    | 'payment'
    | 'capture'
    | 'captureReversal'
    | 'refund'
    | 'refundReversal'
    | 'chargeback'
    | 'chargebackCorrection'
    | 'chargebackReversal'
    | 'chargebackReversalCorrection'
    | 'secondChargeback'
    | 'secondChargebackCorrection'
    | 'atmWithdrawal'
    | 'atmWithdrawalReversal'
    | 'internalTransfer'
    | 'internalDirectDebit'
    | 'manualCorrection'
    | 'invoiceDeduction'
    | 'depositCorrection'
    | 'reserveAdjustment'
    | 'bankTransfer'
    | 'bankDirectDebit'
    | 'cardTransfer'
    | 'miscCost'
    | 'paymentCost'
    | 'fee'
    | 'leftover'
    | 'grant'
    | 'capitalFundsCollection'
    | 'cashOutInstruction'
    | 'cashoutFee'
    | 'cashoutRepayment'
    | 'cashoutFunding'
    | 'repayment'
    | 'installment'
    | 'installmentReversal'
    | 'balanceAdjustment'
    | 'balanceRollover'
    | 'balanceMigration'
    | 'interestPayout'
    | 'fxSell'
    | 'fxBuy'
    | undefined
  ultimateParty?: UltimatePartyIdentification | undefined
}
type ServiceError = {
  errorCode?: string | undefined
  errorType?: string | undefined
  message?: string | undefined
  pspReference?: string | undefined
  status?: number | undefined
}
type ApproveTransfersRequest = { transferIds?: string[] | undefined }
type CancelTransfersRequest = { transferIds?: string[] | undefined }
type ReturnTransferRequest = { amount: Amount; reference?: string | undefined }
type ReturnTransferResponse = {
  id?: string | undefined
  reference?: string | undefined
  status?: 'Authorised' | 'Declined' | undefined
  transferId?: string | undefined
}
type CashOutInfoCounterparty = { transferInstrumentId?: string | undefined }
type CashOutInfo = {
  amount: Amount
  counterparty?: CashOutInfoCounterparty | undefined
  description?: string | undefined
  fee?: Fee | undefined
  id?: string | undefined
  instructingBalanceAccountId: string
  referenceForBeneficiary?: string | undefined
  transferInstrumentId?: string | undefined
}
type CashOutTransfer = { amount: Amount; id: string; type: 'cashoutRepayment' | 'cashoutFee' }
type CashOut = {
  amount: Amount
  counterparty?: CashOutInfoCounterparty | undefined
  description?: string | undefined
  fee?: Fee | undefined
  id: string
  instructingBalanceAccountId: string
  referenceForBeneficiary?: string | undefined
  transferInstrumentId?: string | undefined
  transfers: CashOutTransfer[]
}
type DefaultErrorResponseEntity = {
  detail?: string | undefined
  errorCode?: string | undefined
  instance?: string | undefined
  invalidFields?: InvalidField[] | undefined
  requestId?: string | undefined
  status?: number | undefined
  title?: string | undefined
  type?: string | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/grants': {
      $get:
        | {
            input: { query: { counterpartyAccountHolderId?: string | undefined } }
            output: CapitalGrants
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { counterpartyAccountHolderId?: string | undefined } }
            output: RestServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { counterpartyAccountHolderId?: string | undefined } }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { counterpartyAccountHolderId?: string | undefined } }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { counterpartyAccountHolderId?: string | undefined } }
            output: RestServiceError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { counterpartyAccountHolderId?: string | undefined } }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { counterpartyAccountHolderId?: string | undefined } }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: CapitalGrantInfo
            }
            output: CapitalGrant
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: CapitalGrantInfo
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: CapitalGrantInfo
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: CapitalGrantInfo
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: CapitalGrantInfo
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: CapitalGrantInfo
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: CapitalGrantInfo
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/grants/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: CapitalGrant
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/transactions': {
      $get:
        | {
            input: {
              query: {
                balancePlatform?: string | undefined
                paymentInstrumentId?: string | undefined
                accountHolderId?: string | undefined
                balanceAccountId?: string | undefined
                cursor?: string | undefined
                createdSince: string
                createdUntil: string
                sortOrder?: 'asc' | 'desc' | undefined
                limit?: number | undefined
              }
            }
            output: TransactionSearchResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                balancePlatform?: string | undefined
                paymentInstrumentId?: string | undefined
                accountHolderId?: string | undefined
                balanceAccountId?: string | undefined
                cursor?: string | undefined
                createdSince: string
                createdUntil: string
                sortOrder?: 'asc' | 'desc' | undefined
                limit?: number | undefined
              }
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                balancePlatform?: string | undefined
                paymentInstrumentId?: string | undefined
                accountHolderId?: string | undefined
                balanceAccountId?: string | undefined
                cursor?: string | undefined
                createdSince: string
                createdUntil: string
                sortOrder?: 'asc' | 'desc' | undefined
                limit?: number | undefined
              }
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                balancePlatform?: string | undefined
                paymentInstrumentId?: string | undefined
                accountHolderId?: string | undefined
                balanceAccountId?: string | undefined
                cursor?: string | undefined
                createdSince: string
                createdUntil: string
                sortOrder?: 'asc' | 'desc' | undefined
                limit?: number | undefined
              }
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              query: {
                balancePlatform?: string | undefined
                paymentInstrumentId?: string | undefined
                accountHolderId?: string | undefined
                balanceAccountId?: string | undefined
                cursor?: string | undefined
                createdSince: string
                createdUntil: string
                sortOrder?: 'asc' | 'desc' | undefined
                limit?: number | undefined
              }
            }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/transactions/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: Transaction
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } }
            output: RestServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/transfers': {
      $get:
        | {
            input: {
              query: {
                balancePlatform?: string | undefined
                accountHolderId?: string | undefined
                balanceAccountId?: string | undefined
                paymentInstrumentId?: string | undefined
                reference?: string | undefined
                category?:
                  | 'bank'
                  | 'card'
                  | 'grants'
                  | 'interest'
                  | 'internal'
                  | 'issuedCard'
                  | 'migration'
                  | 'platformPayment'
                  | 'topUp'
                  | 'upgrade'
                  | undefined
                createdSince: string
                createdUntil: string
                sortOrder?: 'asc' | 'desc' | undefined
                cursor?: string | undefined
                limit?: number | undefined
              }
            }
            output: FindTransfersResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                balancePlatform?: string | undefined
                accountHolderId?: string | undefined
                balanceAccountId?: string | undefined
                paymentInstrumentId?: string | undefined
                reference?: string | undefined
                category?:
                  | 'bank'
                  | 'card'
                  | 'grants'
                  | 'interest'
                  | 'internal'
                  | 'issuedCard'
                  | 'migration'
                  | 'platformPayment'
                  | 'topUp'
                  | 'upgrade'
                  | undefined
                createdSince: string
                createdUntil: string
                sortOrder?: 'asc' | 'desc' | undefined
                cursor?: string | undefined
                limit?: number | undefined
              }
            }
            output: TransferServiceRestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                balancePlatform?: string | undefined
                accountHolderId?: string | undefined
                balanceAccountId?: string | undefined
                paymentInstrumentId?: string | undefined
                reference?: string | undefined
                category?:
                  | 'bank'
                  | 'card'
                  | 'grants'
                  | 'interest'
                  | 'internal'
                  | 'issuedCard'
                  | 'migration'
                  | 'platformPayment'
                  | 'topUp'
                  | 'upgrade'
                  | undefined
                createdSince: string
                createdUntil: string
                sortOrder?: 'asc' | 'desc' | undefined
                cursor?: string | undefined
                limit?: number | undefined
              }
            }
            output: TransferServiceRestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                balancePlatform?: string | undefined
                accountHolderId?: string | undefined
                balanceAccountId?: string | undefined
                paymentInstrumentId?: string | undefined
                reference?: string | undefined
                category?:
                  | 'bank'
                  | 'card'
                  | 'grants'
                  | 'interest'
                  | 'internal'
                  | 'issuedCard'
                  | 'migration'
                  | 'platformPayment'
                  | 'topUp'
                  | 'upgrade'
                  | undefined
                createdSince: string
                createdUntil: string
                sortOrder?: 'asc' | 'desc' | undefined
                cursor?: string | undefined
                limit?: number | undefined
              }
            }
            output: TransferServiceRestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              query: {
                balancePlatform?: string | undefined
                accountHolderId?: string | undefined
                balanceAccountId?: string | undefined
                paymentInstrumentId?: string | undefined
                reference?: string | undefined
                category?:
                  | 'bank'
                  | 'card'
                  | 'grants'
                  | 'interest'
                  | 'internal'
                  | 'issuedCard'
                  | 'migration'
                  | 'platformPayment'
                  | 'topUp'
                  | 'upgrade'
                  | undefined
                createdSince: string
                createdUntil: string
                sortOrder?: 'asc' | 'desc' | undefined
                cursor?: string | undefined
                limit?: number | undefined
              }
            }
            output: TransferServiceRestServiceError
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: {
              header: {
                'Idempotency-Key'?: string | undefined
                'WWW-Authenticate'?: string | undefined
              }
            } & { json: TransferInfo }
            output: Transfer
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'Idempotency-Key'?: string | undefined
                'WWW-Authenticate'?: string | undefined
              }
            } & { json: TransferInfo }
            output: Transfer
            outputFormat: 'json'
            status: 202
          }
        | {
            input: {
              header: {
                'Idempotency-Key'?: string | undefined
                'WWW-Authenticate'?: string | undefined
              }
            } & { json: TransferInfo }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              header: {
                'Idempotency-Key'?: string | undefined
                'WWW-Authenticate'?: string | undefined
              }
            } & { json: TransferInfo }
            output: TransferServiceRestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              header: {
                'Idempotency-Key'?: string | undefined
                'WWW-Authenticate'?: string | undefined
              }
            } & { json: TransferInfo }
            output: TransferServiceRestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              header: {
                'Idempotency-Key'?: string | undefined
                'WWW-Authenticate'?: string | undefined
              }
            } & { json: TransferInfo }
            output: TransferServiceRestServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/transfers/approve': {
      $post:
        | {
            input: {
              header: {
                'Idempotency-Key'?: string | undefined
                'WWW-Authenticate'?: string | undefined
              }
            } & { json: ApproveTransfersRequest }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              header: {
                'Idempotency-Key'?: string | undefined
                'WWW-Authenticate'?: string | undefined
              }
            } & { json: ApproveTransfersRequest }
            output: ServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              header: {
                'Idempotency-Key'?: string | undefined
                'WWW-Authenticate'?: string | undefined
              }
            } & { json: ApproveTransfersRequest }
            output: TransferServiceRestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              header: {
                'Idempotency-Key'?: string | undefined
                'WWW-Authenticate'?: string | undefined
              }
            } & { json: ApproveTransfersRequest }
            output: TransferServiceRestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              header: {
                'Idempotency-Key'?: string | undefined
                'WWW-Authenticate'?: string | undefined
              }
            } & { json: ApproveTransfersRequest }
            output: TransferServiceRestServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/transfers/cancel': {
      $post:
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: CancelTransfersRequest
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: CancelTransfersRequest
            }
            output: TransferServiceRestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: CancelTransfersRequest
            }
            output: TransferServiceRestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: CancelTransfersRequest
            }
            output: TransferServiceRestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: CancelTransfersRequest
            }
            output: TransferServiceRestServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/transfers/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: TransferData
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: TransferServiceRestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: TransferServiceRestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: TransferServiceRestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } }
            output: TransferServiceRestServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/transfers/:transferId/returns': {
      $post:
        | {
            input: { param: { transferId: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            } & { json: ReturnTransferRequest }
            output: ReturnTransferResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { transferId: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            } & { json: ReturnTransferRequest }
            output: TransferServiceRestServiceError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { transferId: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            } & { json: ReturnTransferRequest }
            output: TransferServiceRestServiceError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { transferId: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            } & { json: ReturnTransferRequest }
            output: TransferServiceRestServiceError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { transferId: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            } & { json: ReturnTransferRequest }
            output: TransferServiceRestServiceError
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/cashouts': {
      $post:
        | { input: { json: CashOutInfo }; output: CashOut; outputFormat: 'json'; status: 200 }
        | {
            input: { json: CashOutInfo }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CashOutInfo }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: CashOutInfo }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: CashOutInfo }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: CashOutInfo }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: CashOutInfo }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { json: CashOutInfo }
            output: DefaultErrorResponseEntity
            outputFormat: 'json'
            status: 500
          }
    }
  },
  '/'
>
export default routes
