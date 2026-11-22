type OauthGrantType = 'authorization_code' | 'refresh_token'
type ErrorResponse = {
  status: number
  title: string
  detail: string
  field?: string | undefined
  _links: { documentation: { href: string; type: string } }
}
type OauthTokenTypeHint = 'access_token' | 'refresh_token'
type ListCount = number
type Mode = 'live' | 'test'
type CreatedAt = string
type BalanceTransferDestinationType = 'bank-account'
type Url = { href: string; type: string }
type ListEntityBalance = {
  resource: string
  id: {}
  mode: Mode
  createdAt: CreatedAt
  currency: {}
  description: string
  status: {}
  transferFrequency?: {} | undefined
  transferThreshold?: { currency: string; value: string } | undefined
  transferReference?: (string | null) | undefined
  transferDestination?:
    | ({
        type?: BalanceTransferDestinationType | undefined
        bankAccount?: string | undefined
        beneficiaryName?: string | undefined
      } | null)
    | undefined
  availableAmount: { currency: string; value: string }
  pendingAmount: { currency: string; value: string }
  _links: { self?: Url | undefined }
}
type UrlNullable = { href?: string | undefined; type?: string | undefined } | null
type ListLinks = { self: Url; previous: UrlNullable; next: UrlNullable; documentation: Url }
type BalanceToken = string
type EntityBalance = {
  resource: string
  id: {}
  mode: Mode
  createdAt: CreatedAt
  currency: {}
  description: string
  status: {}
  transferFrequency?: {} | undefined
  transferThreshold?: { currency: string; value: string } | undefined
  transferReference?: (string | null) | undefined
  transferDestination?:
    | ({
        type?: BalanceTransferDestinationType | undefined
        bankAccount?: string | undefined
        beneficiaryName?: string | undefined
      } | null)
    | undefined
  availableAmount: { currency: string; value: string }
  pendingAmount: { currency: string; value: string }
  _links: { self?: Url | undefined; documentation?: Url | undefined }
}
type BalanceReportGrouping = 'status-balances' | 'transaction-categories'
type Amount = { currency: string; value: string }
type PaymentMethod =
  | null
  | 'alma'
  | 'bacs'
  | 'applepay'
  | 'bancomatpay'
  | 'bancontact'
  | 'banktransfer'
  | 'belfius'
  | 'billie'
  | 'billink'
  | 'bizum'
  | 'bitcoin'
  | 'blik'
  | 'creditcard'
  | 'directdebit'
  | 'eps'
  | 'giftcard'
  | 'giropay'
  | 'googlepay'
  | 'ideal'
  | 'in3'
  | 'inghomepay'
  | 'kbc'
  | 'klarnapaylater'
  | 'klarnapaynow'
  | 'klarnasliceit'
  | 'klarna'
  | 'mbway'
  | 'mobilepay'
  | 'multibanco'
  | 'mybank'
  | 'paybybank'
  | 'paypal'
  | 'paysafecard'
  | 'przelewy24'
  | 'riverty'
  | 'satispay'
  | 'podiumcadeaukaart'
  | 'pointofsale'
  | 'sofort'
  | 'swish'
  | 'trustly'
  | 'twint'
  | 'vipps'
  | 'voucher'
  | 'wero'
type BalanceCardIssuer = 'amex' | 'maestro' | 'carte-bancaire' | 'other'
type BalanceCardAudience = 'corporate' | 'other'
type BalanceCardRegion = 'intra-eea' | 'intra-eu' | 'domestic' | 'other'
type BalanceFeeType =
  | 'payment-fee'
  | 'direct-debit-failure-fee'
  | 'unauthorized-direct-debit-fee'
  | 'bank-charged-direct-debit-failure-fee'
  | 'partner-commission'
  | 'application-fee'
  | 'capture-fee'
  | 'refund-fee'
  | 'chargeback-fee'
  | 'payment-notification-fee'
  | 'transfer-notification-fee'
  | 'payout-fee'
  | 'fee-discount'
  | 'fee-reimbursement'
  | 'platform-volume-fee'
  | 'platform-connected-organizations-fee'
  | 'balance-charge-fee'
  | '3ds-authentication-attempt-fee'
  | 'terminal-monthly-fee'
  | 'acceptance-risk-fee'
  | 'top-up-fee'
  | 'payment-gateway-fee'
  | 'mastercard-specialty-merchant-program-processing-fee'
  | 'mastercard-specialty-merchant-program-registration-fee'
  | 'visa-integrity-risk-program-processing-fee'
  | 'visa-integrity-risk-program-registration-fee'
  | 'minimum-invoice-amount-fee'
type BalancePrepaymentPartType =
  | 'fee'
  | 'fee-reimbursement'
  | 'fee-discount'
  | 'fee-vat'
  | 'fee-rounding-compensation'
type BalanceTransactionType =
  | 'api-payment-rolling-reserve-release'
  | 'application-fee'
  | 'balance-charge-fee'
  | 'balance-correction'
  | 'balance-reserve'
  | 'balance-reserve-return'
  | 'balance-topup'
  | 'bank-charged-failure-fee'
  | 'canceled-transfer'
  | 'capture'
  | 'cash-collateral-issuance'
  | 'cash-collateral-release'
  | 'chargeback'
  | 'chargeback-compensation'
  | 'chargeback-reversal'
  | 'failed-payment'
  | 'failed-payment-fee'
  | 'failed-platform-split-payment'
  | 'failed-split-payment-compensation'
  | 'fee-prepayment'
  | 'held-rolling-reserve'
  | 'incoming-transfer'
  | 'invoice-compensation'
  | 'invoice-rounding-compensation'
  | 'loan'
  | 'movement'
  | 'outgoing-custom-amount-transfer'
  | 'outgoing-transfer'
  | 'payment'
  | 'payment-fee'
  | 'pending-rolling-reserve'
  | 'platform-payment-chargeback'
  | 'platform-payment-refund'
  | 'post-payment-split-payment'
  | 'refund'
  | 'refund-compensation'
  | 'released-rolling-reserve'
  | 'repayment'
  | 'returned-platform-payment-refund'
  | 'returned-refund'
  | 'returned-refund-compensation'
  | 'returned-transfer'
  | 'reversed-chargeback-compensation'
  | 'reversed-platform-payment-chargeback'
  | 'rolling-reserve-hold'
  | 'rolling-reserve-release'
  | 'split-payment'
  | 'split-transaction'
  | 'to-be-released-rolling-reserve'
  | 'topup'
type SubTotals = {
  count?: number | undefined
  method?: PaymentMethod | undefined
  cardIssuer?: BalanceCardIssuer | undefined
  cardAudience?: BalanceCardAudience | undefined
  cardRegion?: BalanceCardRegion | undefined
  feeType?: BalanceFeeType | undefined
  prepaymentPartType?: BalancePrepaymentPartType | undefined
  transactionType?: BalanceTransactionType | undefined
}
type SubTotals_2 = {
  'sub-totals'?: (SubTotals[] | null) | undefined
  count?: number | undefined
  method?: PaymentMethod | undefined
  cardIssuer?: BalanceCardIssuer | undefined
  cardAudience?: BalanceCardAudience | undefined
  cardRegion?: BalanceCardRegion | undefined
  feeType?: BalanceFeeType | undefined
  prepaymentPartType?: BalancePrepaymentPartType | undefined
  transactionType?: BalanceTransactionType | undefined
}
type SubGroup = { amount?: Amount | undefined; subtotals?: (SubTotals_2[] | null) | undefined }
type EntityBalanceReport = {
  resource: string
  balanceId: BalanceToken
  timeZone: string
  from: string
  until: string
  grouping: BalanceReportGrouping
  totals: {
    pendingBalance?:
      | ({
          open?: SubGroup | undefined
          close?: SubGroup | undefined
          pending?: SubGroup | undefined
          movedToAvailable?: SubGroup | undefined
        } | null)
      | undefined
    availableBalance?:
      | ({
          open?: SubGroup | undefined
          movedFromPending?: SubGroup | undefined
          immediatelyAvailable?: SubGroup | undefined
          close?: SubGroup | undefined
        } | null)
      | undefined
    open?: { pending?: SubGroup | undefined; available?: SubGroup | undefined } | undefined
    close?: { pending?: SubGroup | undefined; available?: SubGroup | undefined } | undefined
    payments?:
      | {
          pending?: SubGroup | undefined
          movedToAvailable?: SubGroup | undefined
          immediatelyAvailable?: SubGroup | undefined
        }
      | undefined
    refunds?:
      | {
          pending?: SubGroup | undefined
          movedToAvailable?: SubGroup | undefined
          immediatelyAvailable?: SubGroup | undefined
        }
      | undefined
    chargebacks?:
      | {
          pending?: SubGroup | undefined
          movedToAvailable?: SubGroup | undefined
          immediatelyAvailable?: SubGroup | undefined
        }
      | undefined
    capital?:
      | {
          pending?: SubGroup | undefined
          movedToAvailable?: SubGroup | undefined
          immediatelyAvailable?: SubGroup | undefined
        }
      | undefined
    transfers?:
      | {
          pending?: SubGroup | undefined
          movedToAvailable?: SubGroup | undefined
          immediatelyAvailable?: SubGroup | undefined
        }
      | undefined
    'fee-prepayments'?:
      | {
          pending?: SubGroup | undefined
          movedToAvailable?: SubGroup | undefined
          immediatelyAvailable?: SubGroup | undefined
        }
      | undefined
    corrections?:
      | {
          pending?: SubGroup | undefined
          movedToAvailable?: SubGroup | undefined
          immediatelyAvailable?: SubGroup | undefined
        }
      | undefined
    topups?:
      | {
          pending?: SubGroup | undefined
          movedToAvailable?: SubGroup | undefined
          immediatelyAvailable?: SubGroup | undefined
        }
      | undefined
  }
  _links: { self?: Url | undefined; documentation?: Url | undefined }
}
type AmountNullable = { currency: string; value: string } | null
type PaymentToken = string
type CaptureToken = string
type RefundToken = string
type ChargebackToken = string
type TransferToken = string
type SettlementToken = string
type InvoiceToken = string
type OrganizationToken = string
type EntityBalanceTransaction = {
  resource: string
  id: {}
  type: BalanceTransactionType
  resultAmount: Amount
  initialAmount: Amount
  deductions?: AmountNullable | undefined
  deductionDetails?:
    | ({
        fees?: AmountNullable | undefined
        commissions?: AmountNullable | undefined
        repayments?: AmountNullable | undefined
        reservations?: AmountNullable | undefined
      } | null)
    | undefined
  context?:
    | ({
        paymentId?: PaymentToken | undefined
        paymentDescription?: string | undefined
        captureId?: CaptureToken | undefined
        captureDescription?: string | undefined
        refundId?: RefundToken | undefined
        refundDescription?: string | undefined
        chargebackId?: ChargebackToken | undefined
        chargebackDescription?: string | undefined
        transferId?: TransferToken | undefined
        settlementId?: SettlementToken | undefined
        invoiceId?: InvoiceToken | undefined
        payingOwner?: OrganizationToken | undefined
        paymentOwner?: OrganizationToken | undefined
        organizationId?: OrganizationToken | undefined
        feeType?: string | undefined
        feeId?: string | undefined
      } | null)
    | undefined
  createdAt: CreatedAt
}
type ReportType = 'transaction-margin'
type CreateReportRequest = { reportType: ReportType; fromDate: string; untilDate: string }
type ReportToken = string
type ReportTypeResponse = 'transaction-margin'
type ReportStatusReasonCode = 'generation-failed' | 'validation-failed' | 'empty-report'
type ReportStatusReason = { code: ReportStatusReasonCode; message: string }
type EntityReport = {
  resource: string
  id: {}
  reportType: ReportTypeResponse
  fromDate?: string | undefined
  untilDate?: string | undefined
  status: {}
  statusReason?: ReportStatusReason | undefined
  createdAt: CreatedAt
  completedAt?: string | undefined
  failedAt?: string | undefined
  downloadExpiresAt?: string | undefined
  _links: { self: Url; download?: { href: string; type: string } | undefined; documentation: Url }
}
type Currencies =
  | 'EUR'
  | 'GBP'
  | 'CHF'
  | 'DKK'
  | 'NOK'
  | 'PLN'
  | 'SEK'
  | 'USD'
  | 'CZK'
  | 'HUF'
  | 'AUD'
  | 'CAD'
  | 'RON'
type SettlementMethod =
  | null
  | 'alma'
  | 'applicationfee'
  | 'authorizationreversal'
  | 'bacs'
  | 'bancomatpay'
  | 'bancontact'
  | 'banktransfer'
  | 'belfius'
  | 'billie'
  | 'billink'
  | 'bitcoin'
  | 'bizum'
  | 'blik'
  | 'capture'
  | 'chargeback'
  | 'creditcard'
  | 'directdebit'
  | 'eps'
  | 'giftcard'
  | 'giropay'
  | 'ideal'
  | 'in3'
  | 'inghomepay'
  | 'kbc'
  | 'kickback'
  | 'klarna'
  | 'klarnapaylater'
  | 'klarnapaynow'
  | 'klarnasliceit'
  | 'mbway'
  | 'mobilepay'
  | 'multibanco'
  | 'mybank'
  | 'paybybank'
  | 'paypal'
  | 'paysafecard'
  | 'podiumcadeaukaart'
  | 'pointofsale'
  | 'przelewy24'
  | 'refund'
  | 'riverty'
  | 'rollingreserve'
  | 'satispay'
  | 'shiftedfee'
  | 'sofort'
  | 'swish'
  | 'trustly'
  | 'twint'
  | 'vipps'
  | 'voucher'
  | 'wero'
type SettlementId = {}
type SettlementLinks = {
  self: Url
  payments?: Url | undefined
  captures?: Url | undefined
  refunds?: Url | undefined
  chargebacks?: Url | undefined
  invoice?: UrlNullable | undefined
  documentation?: Url | undefined
}
type EntitySettlement = {
  resource: string
  id: SettlementId
  createdAt?: CreatedAt | undefined
  reference?: (string | null) | undefined
  settledAt?: (string | null) | undefined
  status: {}
  amount: { currency: string; value: string }
  balanceId: {}
  invoiceId?: {} | undefined
  periods?:
    | {
        [x: string]: {
          [x: string]: {
            costs?:
              | {
                  description: string
                  method: SettlementMethod
                  count: number
                  rate: { fixed: AmountNullable; percentage: string | null }
                  amountNet: Amount
                  amountVat: AmountNullable
                  amountGross: Amount
                }[]
              | undefined
            revenue?:
              | {
                  description: string
                  method: SettlementMethod
                  count: number
                  amountNet: Amount
                  amountVat: AmountNullable
                  amountGross: Amount
                }[]
              | undefined
            invoiceId?: InvoiceToken | undefined
            invoiceReference?: (string | null) | undefined
          }
        }
      }
    | undefined
  _links: SettlementLinks
}
type OpenSettlementId = 'open'
type SettlementConvenienceLinks = { self: Url; documentation?: Url | undefined }
type NextSettlementId = 'next'
type Sorting = 'asc' | 'desc'
type ProfileToken = string
type PaymentLineTypeResponse =
  | 'physical'
  | 'digital'
  | 'shipping_fee'
  | 'discount'
  | 'store_credit'
  | 'gift_card'
  | 'surcharge'
  | 'tip'
type LineCategoriesResponse = 'eco' | 'gift' | 'meal' | 'sport_culture' | 'additional' | 'consume'
type RecurringLineItem = {
  description?: string | undefined
  interval: string
  amount?: Amount | undefined
  times?: number | undefined
  startDate?: (string | null) | undefined
}
type PaymentAddress = {
  title?: string | undefined
  givenName?: string | undefined
  familyName?: string | undefined
  organizationName?: string | undefined
  streetAndNumber?: string | undefined
  streetAdditional?: string | undefined
  postalCode?: string | undefined
  email?: string | undefined
  phone?: string | undefined
  city?: string | undefined
  region?: string | undefined
  country?: string | undefined
}
type LocaleResponse =
  | 'ca_ES'
  | 'cs_CZ'
  | 'da_DK'
  | 'de_AT'
  | 'de_CH'
  | 'de_DE'
  | 'de_LU'
  | 'el_GR'
  | 'en_BE'
  | 'en_GB'
  | 'en_NL'
  | 'en_US'
  | 'es_ES'
  | 'fi_FI'
  | 'fr_BE'
  | 'fr_FR'
  | 'fr_LU'
  | 'hu_HU'
  | 'is_IS'
  | 'it_IT'
  | 'lt_LT'
  | 'lv_LV'
  | 'nb_NO'
  | 'nl_BE'
  | 'nl_NL'
  | 'pl_PL'
  | 'pt_PT'
  | 'sk_SK'
  | 'sl_SI'
  | 'sv_SE'
  | 'tr_TR'
  | null
type Metadata =
  | string
  | number
  | { [x: string]: unknown }
  | string[]
  | ({ [x: string]: unknown } | null)
type CaptureModeResponse = 'automatic' | 'manual'
type RouteDestinationTypeResponse = 'organization'
type EntityPaymentRouteResponse = {
  resource: string
  id: {}
  mode: Mode
  amount: Amount
  destination: { type: RouteDestinationTypeResponse; organizationId: OrganizationToken }
  createdAt: string
  releaseDate?: (string | null) | undefined
  _links: { self: Url; payment: Url }
}
type SequenceTypeResponse = 'oneoff' | 'first' | 'recurring'
type CustomerToken = string
type StatusReason = { code: {}; message: string } | null
type PaymentDetailsCardAuditionResponse = 'consumer' | 'business'
type PaymentDetailsCardLabelResponse =
  | 'American Express'
  | 'Carta Si'
  | 'Carte Bleue'
  | 'Cartes Bancaires'
  | 'Dankort'
  | 'Diners Club'
  | 'Discover'
  | 'JCB'
  | 'Laser'
  | 'Maestro'
  | 'Mastercard'
  | 'Unionpay'
  | 'Visa'
  | 'Vpay'
  | null
type PaymentDetailsCardFundingResponse = 'debit' | 'credit' | 'prepaid' | 'deferred-debit'
type PaymentDetailsCardSecurityResponse = 'normal' | '3dsecure'
type PaymentDetailsFeeRegionResponse =
  | 'american-express'
  | 'amex-intra-eea'
  | 'carte-bancaire'
  | 'cartes-bancaires-business'
  | 'cartes-bancaires-consumer'
  | 'domestic'
  | 'inter'
  | 'intra-eu'
  | 'intra-eu-corporate'
  | 'intra_eea'
  | 'maestro'
  | 'mastercard-credit-business-domestic'
  | 'mastercard-credit-consumer-domestic'
  | 'mastercard-credit-consumer-intra-eea'
  | 'mastercard-debit-business-domestic'
  | 'mastercard-debit-business-intra-eea'
  | 'mastercard-debit-consumer-domestic'
  | 'mastercard-debit-consumer-inter'
  | 'mastercard-debit-consumer-intra-eea'
  | 'other'
  | 'visa-credit-business-domestic'
  | 'visa-credit-consumer-domestic'
  | 'visa-credit-consumer-inter'
  | 'visa-credit-consumer-intra-eea'
  | 'visa-debit-business-domestic'
  | 'visa-debit-business-intra-eea'
  | 'visa-debit-consumer-domestic'
  | 'visa-debit-consumer-inter'
  | 'visa-debit-consumer-intra-eea'
type PaymentDetailsFailureReasonResponse =
  | 'authentication_abandoned'
  | 'authentication_failed'
  | 'authentication_required'
  | 'authentication_unavailable_acs'
  | 'card_declined'
  | 'card_expired'
  | 'inactive_card'
  | 'insufficient_funds'
  | 'invalid_cvv'
  | 'invalid_card_holder_name'
  | 'invalid_card_number'
  | 'invalid_card_type'
  | 'possible_fraud'
  | 'refused_by_issuer'
  | 'unknown_reason'
type PaymentDetailsWalletResponse = 'applepay' | 'googlepay'
type PaymentDetailsSellerProtectionResponse =
  | 'ELIGIBLE'
  | 'PARTIALLY_ELIGIBLE'
  | 'NOT_ELIGIBLE'
  | 'Eligible'
  | 'Ineligible'
  | 'Partially Eligible - INR Only'
  | 'Partially Eligible - Unauth Only'
  | 'Partially Eligible'
  | 'None'
  | 'Active'
  | 'Fraud Control - Unauth Premium Eligible'
type PaymentDetails = {
  consumerName?: (string | null) | undefined
  consumerAccount?: (string | null) | undefined
  consumerBic?: (string | null) | undefined
  shippingAddress?: ({ [x: string]: unknown } | null) | undefined
  cardNumber?: (string | null) | undefined
  bankName?: string | undefined
  bankAccount?: string | undefined
  bankBic?: string | undefined
  transferReference?: (string | null) | undefined
  bizumReference?: (string | null) | undefined
  cardFingerprint?: (string | null) | undefined
  cardHolder?: (string | null) | undefined
  cardAudience?: PaymentDetailsCardAuditionResponse | undefined
  cardLabel?: PaymentDetailsCardLabelResponse | undefined
  cardCountryCode?: (string | null) | undefined
  cardExpiryDate?: (string | null) | undefined
  cardFunding?: PaymentDetailsCardFundingResponse | undefined
  cardSecurity?: PaymentDetailsCardSecurityResponse | undefined
  feeRegion?: PaymentDetailsFeeRegionResponse | undefined
  cardMaskedNumber?: (string | null) | undefined
  card3dsEci?: (string | null) | undefined
  cardBin?: (string | null) | undefined
  cardIssuer?: (string | null) | undefined
  failureReason?: PaymentDetailsFailureReasonResponse | undefined
  failureMessage?: (string | null) | undefined
  wallet?: PaymentDetailsWalletResponse | undefined
  multibancoReference?: (string | null) | undefined
  multibancoEntity?: (string | null) | undefined
  paypalReference?: (string | null) | undefined
  paypalPayerId?: (string | null) | undefined
  sellerProtection?: PaymentDetailsSellerProtectionResponse | undefined
  paypalFee?: AmountNullable | undefined
  customerReference?: string | undefined
  terminalId?: string | undefined
  maskedNumber?: (string | null) | undefined
  creditorIdentifier?: (string | null) | undefined
  dueDate?: (string | null) | undefined
  signatureDate?: (string | null) | undefined
  bankReasonCode?: (string | null) | undefined
  bankReason?: (string | null) | undefined
  endToEndIdentifier?: (string | null) | undefined
  mandateReference?: (string | null) | undefined
  batchReference?: (string | null) | undefined
  fileReference?: (string | null) | undefined
  qrCode?:
    | { height?: number | undefined; width?: number | undefined; src?: string | undefined }
    | undefined
  voucherNumber?: string | undefined
  giftcards?: { [x: string]: unknown }[] | undefined
  issuer?: string | undefined
  vouchers?: { [x: string]: unknown }[] | undefined
  remainderAmount?: Amount | undefined
  remainderMethod?: string | undefined
  remainderDetails?: { [x: string]: unknown } | undefined
} | null
type TestmodeCreate = boolean | null
type MethodResponse =
  | null
  | 'alma'
  | 'applepay'
  | 'bacs'
  | 'bancomatpay'
  | 'bancontact'
  | 'banktransfer'
  | 'belfius'
  | 'billie'
  | 'billink'
  | 'bizum'
  | 'blik'
  | 'creditcard'
  | 'directdebit'
  | 'eps'
  | 'giftcard'
  | 'ideal'
  | 'in3'
  | 'kbc'
  | 'klarna'
  | 'mbway'
  | 'mobilepay'
  | 'multibanco'
  | 'mybank'
  | 'paybybank'
  | 'paypal'
  | 'paysafecard'
  | 'pointofsale'
  | 'przelewy24'
  | 'riverty'
  | 'satispay'
  | 'swish'
  | 'trustly'
  | 'twint'
  | 'vipps'
  | 'voucher'
  | 'wero'
  | 'klarnapaylater'
  | 'klarnapaynow'
  | 'klarnasliceit'
  | 'payconiq'
type SettlementMode = 'live'
type SettlementPaymentStatus = 'paid'
type ListSettlementPaymentResponse = {
  resource?: string | undefined
  id?: {} | undefined
  mode?: SettlementMode | undefined
  description?: string | undefined
  amount?: Amount | undefined
  amountRefunded?: { currency: string; value: string } | undefined
  amountRemaining?: { currency: string; value: string } | undefined
  amountCaptured?: { currency: string; value: string } | undefined
  amountChargedBack?: { currency: string; value: string } | undefined
  redirectUrl?: (string | null) | undefined
  cancelUrl?: (string | null) | undefined
  webhookUrl?: (string | null) | undefined
  lines?:
    | (
        | {
            type?: PaymentLineTypeResponse | undefined
            description: string
            quantity: number
            quantityUnit?: string | undefined
            unitPrice: Amount
            discountAmount?: Amount | undefined
            totalAmount: Amount
            vatRate?: string | undefined
            vatAmount?: Amount | undefined
            sku?: string | undefined
            categories?: LineCategoriesResponse[] | undefined
            imageUrl?: string | undefined
            productUrl?: string | undefined
            recurring?: RecurringLineItem | undefined
          }[]
        | null
      )
    | undefined
  billingAddress?:
    | {
        title?: string | undefined
        givenName?: string | undefined
        familyName?: string | undefined
        organizationName?: { [x: string]: unknown } | undefined
        streetAndNumber?: string | undefined
        streetAdditional?: string | undefined
        postalCode?: string | undefined
        email?: string | undefined
        phone?: string | undefined
        city?: string | undefined
        region?: string | undefined
        country?: string | undefined
      }
    | undefined
  shippingAddress?: PaymentAddress | undefined
  locale?: LocaleResponse | undefined
  countryCode?: (string | null) | undefined
  method?: MethodResponse | undefined
  issuer?: (string | null) | undefined
  restrictPaymentMethodsToCountry?: (string | null) | undefined
  metadata?: Metadata | undefined
  captureMode?: CaptureModeResponse | undefined
  captureDelay?: (string | null) | undefined
  captureBefore?: (string | null) | undefined
  applicationFee?: ({ amount: Amount; description: string } | null) | undefined
  routing?: (EntityPaymentRouteResponse[] | null) | undefined
  sequenceType?: SequenceTypeResponse | undefined
  subscriptionId?: {} | undefined
  mandateId?: {} | undefined
  customerId?: CustomerToken | undefined
  profileId?: ProfileToken | undefined
  settlementId?: {} | undefined
  orderId?: {} | undefined
  status?: SettlementPaymentStatus | undefined
  statusReason?: StatusReason | undefined
  isCancelable?: (boolean | null) | undefined
  details?: PaymentDetails | undefined
  createdAt?: CreatedAt | undefined
  authorizedAt?: (string | null) | undefined
  paidAt?: (string | null) | undefined
  canceledAt?: (string | null) | undefined
  expiresAt?: (string | null) | undefined
  expiredAt?: (string | null) | undefined
  failedAt?: (string | null) | undefined
  dueDate?: (string | null) | undefined
  storeCredentials?: boolean | undefined
  testmode?: TestmodeCreate | undefined
  _links?:
    | {
        self: Url
        checkout?: Url | undefined
        mobileAppCheckout?: Url | undefined
        changePaymentState?: UrlNullable | undefined
        dashboard: Url
        refunds?: Url | undefined
        chargebacks?: Url | undefined
        captures?: Url | undefined
        settlement?: Url | undefined
        customer?: Url | undefined
        mandate?: Url | undefined
        subscription?: Url | undefined
        order?: Url | undefined
        terminal?: Url | undefined
        status?: Url | undefined
        payOnline?: Url | undefined
      }
    | undefined
  settlementAmount?: { currency: string; value: string } | undefined
}
type SettlementCaptureStatus = 'succeeded'
type ListSettlementCaptureResponse = {
  resource?: string | undefined
  id?: {} | undefined
  mode?: SettlementMode | undefined
  description?: string | undefined
  amount?: AmountNullable | undefined
  status?: SettlementCaptureStatus | undefined
  metadata?: Metadata | undefined
  paymentId?: {} | undefined
  shipmentId?: {} | undefined
  settlementId?: {} | undefined
  createdAt?: CreatedAt | undefined
  testmode?: TestmodeCreate | undefined
  _links?:
    | {
        self: Url
        payment: Url
        settlement?: UrlNullable | undefined
        shipment?: UrlNullable | undefined
      }
    | undefined
  settlementAmount?: { currency: string; value: string } | undefined
}
type RefundExternalReferenceTypeResponse = 'acquirer-reference'
type SettlementRefundStatus = 'refunded' | 'failed'
type ListSettlementRefundResponse = {
  resource?: string | undefined
  id?: {} | undefined
  mode?: SettlementMode | undefined
  description?: (string | null) | undefined
  amount?: Amount | undefined
  metadata?: Metadata | undefined
  paymentId?: {} | undefined
  settlementId?: {} | undefined
  status?: SettlementRefundStatus | undefined
  createdAt?: CreatedAt | undefined
  externalReference?:
    | { type?: RefundExternalReferenceTypeResponse | undefined; id?: string | undefined }
    | undefined
  reverseRouting?: (boolean | null) | undefined
  routingReversals?:
    | (
        | {
            amount?: Amount | undefined
            source?:
              | { type?: {} | undefined; organizationId?: OrganizationToken | undefined }
              | undefined
          }[]
        | null
      )
    | undefined
  testmode?: TestmodeCreate | undefined
  _links?: { self: Url; payment: Url; settlement?: UrlNullable | undefined } | undefined
  settlementAmount?: { currency: string; value: string } | undefined
}
type ListSettlementChargebackResponse = {
  resource: string
  id: {}
  amount: Amount
  reason?: ({ code: string; description: string } | null) | undefined
  paymentId: {}
  settlementId?: {} | undefined
  createdAt: CreatedAt
  reversedAt?: (string | null) | undefined
  _links: { self: Url; payment: Url; settlement?: UrlNullable | undefined }
  mode?: SettlementMode | undefined
  settlementAmount?: { currency: string; value: string } | undefined
}
type ListEntityInvoice = {
  resource: string
  id: {}
  reference: string
  vatNumber: string | null
  status: {}
  netAmount: { currency: string; value: string }
  vatAmount: { currency: string; value: string }
  grossAmount: { currency: string; value: string }
  lines: {
    period: string
    description: string
    count: number
    vatPercentage: number
    amount: Amount
  }[]
  issuedAt: string
  paidAt?: (string | null) | undefined
  dueAt?: (string | null) | undefined
  _links: { self?: Url | undefined; pdf?: Url | undefined }
}
type EntityInvoice = {
  resource: string
  id: {}
  reference: string
  vatNumber: string | null
  status: {}
  netAmount: { currency: string; value: string }
  vatAmount: { currency: string; value: string }
  grossAmount: { currency: string; value: string }
  lines: {
    period: string
    description: string
    count: number
    vatPercentage: number
    amount: Amount
  }[]
  issuedAt: string
  paidAt?: (string | null) | undefined
  dueAt?: (string | null) | undefined
  _links: { self?: Url | undefined; pdf?: Url | undefined; documentation?: Url | undefined }
}
type ListEntityPermission = {
  resource: string
  id: {}
  description: string
  granted: boolean
  _links: { self: Url }
}
type PermissionToken = string
type EntityPermission = {
  resource: string
  id: {}
  description: string
  granted: boolean
  _links: { self: Url; documentation: Url }
}
type Address = { streetAndNumber: string; postalCode: string; city: string; country: string }
type OrganizationVatRegulation = 'dutch' | 'british' | 'shifted'
type EntityOrganization = {
  resource: string
  id: {}
  name: string
  email: string
  locale: {}
  address?: Address | undefined
  registrationNumber?: (string | null) | undefined
  vatNumber?: (string | null) | undefined
  vatRegulation?: OrganizationVatRegulation | undefined
  _links: { self?: Url | undefined; dashboard?: Url | undefined; documentation?: Url | undefined }
}
type ProfileReviewStatus = 'pending' | 'rejected'
type ProfileRequest = {
  resource?: string | undefined
  id?: string | undefined
  mode?: Mode | undefined
  name?: string | undefined
  website?: string | undefined
  email?: string | undefined
  phone?: string | undefined
  description?: string | undefined
  countriesOfActivity?: string[] | undefined
  businessCategory?: (string | null) | undefined
  status?: {} | undefined
  review?: { status?: ProfileReviewStatus | undefined } | undefined
  createdAt?: CreatedAt | undefined
  _links?:
    | {
        self?: Url | undefined
        dashboard?: Url | undefined
        chargebacks?: Url | undefined
        methods?: Url | undefined
        payments?: Url | undefined
        refunds?: Url | undefined
        checkoutPreviewUrl?: Url | undefined
        documentation?: Url | undefined
      }
    | undefined
}
type ProfileReviewStatusResponse = 'pending' | 'rejected'
type BusinessCategory = string | null
type ProfileResponse = {
  resource?: string | undefined
  id?: string | undefined
  mode?: Mode | undefined
  name?: string | undefined
  website?: string | undefined
  email?: string | undefined
  phone?: string | undefined
  description?: string | undefined
  countriesOfActivity?: string[] | undefined
  businessCategory: BusinessCategory
  status?: {} | undefined
  review?: { status?: ProfileReviewStatusResponse | undefined } | undefined
  createdAt?: CreatedAt | undefined
  _links?:
    | {
        self?: Url | undefined
        dashboard?: Url | undefined
        chargebacks?: Url | undefined
        methods?: Url | undefined
        payments?: Url | undefined
        refunds?: Url | undefined
        checkoutPreviewUrl?: Url | undefined
        documentation?: Url | undefined
      }
    | undefined
}
type ListProfileResponse = {
  resource?: string | undefined
  id?: string | undefined
  mode?: Mode | undefined
  name?: string | undefined
  website?: string | undefined
  email?: string | undefined
  phone?: string | undefined
  description?: string | undefined
  countriesOfActivity?: string[] | undefined
  businessCategory: BusinessCategory
  status?: {} | undefined
  review?: { status?: ProfileReviewStatusResponse | undefined } | undefined
  createdAt?: CreatedAt | undefined
  _links?:
    | {
        self?: Url | undefined
        dashboard?: Url | undefined
        chargebacks?: Url | undefined
        methods?: Url | undefined
        payments?: Url | undefined
        refunds?: Url | undefined
        checkoutPreviewUrl?: Url | undefined
      }
    | undefined
}
type EntityOnboardingStatus = {
  resource: string
  name: string
  status: {}
  canReceivePayments: boolean
  canReceiveSettlements: boolean
  signedUpAt: string
  _links: {
    self?: Url | undefined
    dashboard?: Url | undefined
    organization?: Url | undefined
    documentation?: Url | undefined
  }
}
type OnboardingVatRegulation = 'dutch' | 'british' | 'shifted'
type CapabilityStatus = 'unrequested' | 'enabled' | 'disabled' | 'pending'
type CapabilityStatusReason = 'requirement-past-due' | 'onboarding-information-needed' | null
type CapabilityRequirementStatus = 'currently-due' | 'past-due' | 'requested'
type EntityCapabilityRequirement = {
  id: string
  status: CapabilityRequirementStatus
  dueDate: string | null
  _links: { dashboard?: Url | undefined }
}
type EntityCapability = {
  resource: string
  name: string
  status: CapabilityStatus
  statusReason: CapabilityStatusReason
  requirements: EntityCapabilityRequirement[]
}
type ClientLinkRequest = {
  resource?: string | undefined
  id?: string | undefined
  owner?:
    | { email: string; givenName: string; familyName: string; locale?: LocaleResponse | undefined }
    | undefined
  name?: string | undefined
  address?:
    | {
        streetAndNumber?: (string | null) | undefined
        postalCode?: (string | null) | undefined
        city?: (string | null) | undefined
        country: string
      }
    | undefined
  registrationNumber?: (string | null) | undefined
  vatNumber?: (string | null) | undefined
  legalEntity?: string | undefined
  registrationOffice?: string | undefined
  incorporationDate?: (string | null) | undefined
  _links?:
    | { self?: Url | undefined; clientLink?: Url | undefined; documentation?: Url | undefined }
    | undefined
}
type ClientLinkResponse = {
  resource?: string | undefined
  id?: string | undefined
  owner?:
    | { email: string; givenName: string; familyName: string; locale?: LocaleResponse | undefined }
    | undefined
  name?: string | undefined
  address?:
    | {
        streetAndNumber?: (string | null) | undefined
        postalCode?: (string | null) | undefined
        city?: (string | null) | undefined
        country: string
      }
    | undefined
  registrationNumber?: (string | null) | undefined
  vatNumber?: (string | null) | undefined
  legalEntity?: string | undefined
  registrationOffice?: string | undefined
  incorporationDate?: (string | null) | undefined
  _links?:
    | { self?: Url | undefined; clientLink?: Url | undefined; documentation?: Url | undefined }
    | undefined
}
type WebhookEventTypes =
  | 'payment.paid'
  | 'payment.authorized'
  | 'payment.failed'
  | 'payment.canceled'
  | 'payment.expired'
  | 'payment.pending'
  | 'refund.queued'
  | 'refund.pending'
  | 'refund.processing'
  | 'refund.refunded'
  | 'refund.failed'
  | 'refund.canceled'
  | 'chargeback.received'
  | 'chargeback.reversed'
  | 'capture.succeeded'
  | 'capture.failed'
  | 'payment-link.paid'
  | 'balance-transaction.created'
  | 'payout.initiated'
  | 'payout.processing-at-bank'
  | 'payout.completed'
  | 'payout.canceled'
  | 'payout.failed'
  | 'sales-invoice.created'
  | 'sales-invoice.issued'
  | 'sales-invoice.canceled'
  | 'sales-invoice.paid'
  | 'sales-invoice.e-invoice-failed'
  | 'sales-invoice.e-invoice-issued'
  | 'business-account-transfer.requested'
  | 'business-account-transfer.initiated'
  | 'business-account-transfer.pending-review'
  | 'business-account-transfer.processed'
  | 'business-account-transfer.failed'
  | 'business-account-transfer.blocked'
  | 'business-account-transfer.returned'
  | 'business-account-draft-transfer.created'
  | 'business-account-draft-transfer.approved'
  | 'business-account-draft-transfer.declined'
  | 'business-account.created'
  | 'unmatched-credit-transfer.received'
  | 'unmatched-credit-transfer.matched'
  | 'unmatched-credit-transfer.returned'
  | 'unmatched-credit-transfer.expired'
  | 'unmatched-credit-transfer.match.completed'
  | 'unmatched-credit-transfer.match.failed'
  | 'unmatched-credit-transfer.return.completed'
  | 'unmatched-credit-transfer.return.failed'
  | 'report.completed'
  | 'report.failed'
  | '*'
type OauthTestmodeCreate = boolean
type WebhookEventTypesResponse =
  | 'payment.paid'
  | 'payment.authorized'
  | 'payment.failed'
  | 'payment.canceled'
  | 'payment.expired'
  | 'payment.pending'
  | 'refund.queued'
  | 'refund.pending'
  | 'refund.processing'
  | 'refund.refunded'
  | 'refund.failed'
  | 'refund.canceled'
  | 'chargeback.received'
  | 'chargeback.reversed'
  | 'capture.succeeded'
  | 'capture.failed'
  | 'payment-link.paid'
  | 'balance-transaction.created'
  | 'payout.initiated'
  | 'payout.processing-at-bank'
  | 'payout.completed'
  | 'payout.canceled'
  | 'payout.failed'
  | 'sales-invoice.created'
  | 'sales-invoice.issued'
  | 'sales-invoice.canceled'
  | 'sales-invoice.paid'
  | 'sales-invoice.e-invoice-failed'
  | 'sales-invoice.e-invoice-issued'
  | 'business-account-transfer.requested'
  | 'business-account-transfer.initiated'
  | 'business-account-transfer.pending-review'
  | 'business-account-transfer.processed'
  | 'business-account-transfer.failed'
  | 'business-account-transfer.blocked'
  | 'business-account-transfer.returned'
  | 'business-account-draft-transfer.created'
  | 'business-account-draft-transfer.approved'
  | 'business-account-draft-transfer.declined'
  | 'business-account.created'
  | 'unmatched-credit-transfer.received'
  | 'unmatched-credit-transfer.matched'
  | 'unmatched-credit-transfer.returned'
  | 'unmatched-credit-transfer.expired'
  | 'unmatched-credit-transfer.match.completed'
  | 'unmatched-credit-transfer.match.failed'
  | 'unmatched-credit-transfer.return.completed'
  | 'unmatched-credit-transfer.return.failed'
  | 'report.completed'
  | 'report.failed'
  | '*'
type WebhookStatus = 'enabled' | 'blocked' | 'disabled' | 'deleted'
type CreateWebhook = {
  resource: string
  id: string
  url: string
  profileId: string | null
  createdAt: string
  name: string
  eventTypes: WebhookEventTypesResponse[]
  status: WebhookStatus
  mode: Mode
  webhookSecret: string
  _links: { self: Url; documentation: Url }
}
type ListEntityWebhook = {
  resource: string
  id: string
  url: string
  profileId: string | null
  createdAt: string
  name: string
  eventTypes: WebhookEventTypesResponse[]
  status: WebhookStatus
  mode: Mode
  _links: { self: Url }
}
type WebhookToken = string
type TestmodePatch = boolean
type EntityWebhook = {
  resource: string
  id: string
  url: string
  profileId: string | null
  createdAt: string
  name: string
  eventTypes: WebhookEventTypesResponse[]
  status: WebhookStatus
  mode: Mode
  _links: { self: Url; documentation: Url }
}
type OauthTestmode = boolean
type WebhookEventToken = string
type PaymentResponse = {
  resource?: string | undefined
  id?: {} | undefined
  mode?: Mode | undefined
  description?: string | undefined
  amount?: Amount | undefined
  amountRefunded?: { currency: string; value: string } | undefined
  amountRemaining?: { currency: string; value: string } | undefined
  amountCaptured?: { currency: string; value: string } | undefined
  amountChargedBack?: { currency: string; value: string } | undefined
  redirectUrl?: (string | null) | undefined
  cancelUrl?: (string | null) | undefined
  webhookUrl?: (string | null) | undefined
  lines?:
    | (
        | {
            type?: PaymentLineTypeResponse | undefined
            description: string
            quantity: number
            quantityUnit?: string | undefined
            unitPrice: Amount
            discountAmount?: Amount | undefined
            totalAmount: Amount
            vatRate?: string | undefined
            vatAmount?: Amount | undefined
            sku?: string | undefined
            categories?: LineCategoriesResponse[] | undefined
            imageUrl?: string | undefined
            productUrl?: string | undefined
            recurring?: RecurringLineItem | undefined
          }[]
        | null
      )
    | undefined
  billingAddress?:
    | {
        title?: string | undefined
        givenName?: string | undefined
        familyName?: string | undefined
        organizationName?: { [x: string]: unknown } | undefined
        streetAndNumber?: string | undefined
        streetAdditional?: string | undefined
        postalCode?: string | undefined
        email?: string | undefined
        phone?: string | undefined
        city?: string | undefined
        region?: string | undefined
        country?: string | undefined
      }
    | undefined
  shippingAddress?: PaymentAddress | undefined
  locale?: LocaleResponse | undefined
  countryCode?: (string | null) | undefined
  method?: MethodResponse | undefined
  issuer?: (string | null) | undefined
  restrictPaymentMethodsToCountry?: (string | null) | undefined
  metadata?: Metadata | undefined
  captureMode?: CaptureModeResponse | undefined
  captureDelay?: (string | null) | undefined
  captureBefore?: (string | null) | undefined
  applicationFee?: ({ amount: Amount; description: string } | null) | undefined
  routing?: (EntityPaymentRouteResponse[] | null) | undefined
  sequenceType?: SequenceTypeResponse | undefined
  subscriptionId?: {} | undefined
  mandateId?: {} | undefined
  customerId?: CustomerToken | undefined
  profileId?: ProfileToken | undefined
  settlementId?: {} | undefined
  orderId?: {} | undefined
  status?: {} | undefined
  statusReason?: StatusReason | undefined
  isCancelable?: (boolean | null) | undefined
  details?: PaymentDetails | undefined
  createdAt?: CreatedAt | undefined
  authorizedAt?: (string | null) | undefined
  paidAt?: (string | null) | undefined
  canceledAt?: (string | null) | undefined
  expiresAt?: (string | null) | undefined
  expiredAt?: (string | null) | undefined
  failedAt?: (string | null) | undefined
  dueDate?: (string | null) | undefined
  storeCredentials?: boolean | undefined
  testmode?: TestmodeCreate | undefined
  _links?:
    | {
        self: Url
        checkout?: Url | undefined
        mobileAppCheckout?: Url | undefined
        changePaymentState?: UrlNullable | undefined
        dashboard: Url
        refunds?: Url | undefined
        chargebacks?: Url | undefined
        captures?: Url | undefined
        settlement?: Url | undefined
        customer?: Url | undefined
        mandate?: Url | undefined
        subscription?: Url | undefined
        order?: Url | undefined
        terminal?: Url | undefined
        documentation?: Url | undefined
        status?: Url | undefined
        payOnline?: Url | undefined
      }
    | undefined
}
type RefundResponse = {
  resource?: string | undefined
  id?: {} | undefined
  mode?: Mode | undefined
  description?: (string | null) | undefined
  amount?: Amount | undefined
  metadata?: Metadata | undefined
  paymentId?: {} | undefined
  settlementId?: {} | undefined
  status?: {} | undefined
  createdAt?: CreatedAt | undefined
  externalReference?:
    | { type?: RefundExternalReferenceTypeResponse | undefined; id?: string | undefined }
    | undefined
  reverseRouting?: (boolean | null) | undefined
  routingReversals?:
    | (
        | {
            amount?: Amount | undefined
            source?:
              | { type?: {} | undefined; organizationId?: OrganizationToken | undefined }
              | undefined
          }[]
        | null
      )
    | undefined
  testmode?: TestmodeCreate | undefined
  _links?:
    | { self: Url; payment: Url; settlement?: UrlNullable | undefined; documentation: Url }
    | undefined
}
type EntityChargeback = {
  resource: string
  id: {}
  amount: Amount
  reason?: ({ code: string; description: string } | null) | undefined
  paymentId: {}
  settlementId?: {} | undefined
  createdAt: CreatedAt
  reversedAt?: (string | null) | undefined
  _links: { self: Url; payment: Url; settlement?: UrlNullable | undefined; documentation: Url }
}
type CaptureResponse = {
  resource?: string | undefined
  id?: {} | undefined
  mode?: Mode | undefined
  description?: string | undefined
  amount?: AmountNullable | undefined
  status?: {} | undefined
  metadata?: Metadata | undefined
  paymentId?: {} | undefined
  shipmentId?: {} | undefined
  settlementId?: {} | undefined
  createdAt?: CreatedAt | undefined
  testmode?: TestmodeCreate | undefined
  _links?:
    | {
        self: Url
        payment: Url
        settlement?: UrlNullable | undefined
        shipment?: UrlNullable | undefined
        documentation: Url
      }
    | undefined
}
type PaymentLineItemResponse = {
  type?: PaymentLineTypeResponse | undefined
  description: string
  quantity: number
  quantityUnit?: string | undefined
  unitPrice: Amount
  discountAmount?: Amount | undefined
  totalAmount: Amount
  vatRate?: string | undefined
  vatAmount?: Amount | undefined
  sku?: string | undefined
  categories?: LineCategoriesResponse[] | undefined
  imageUrl?: string | undefined
  productUrl?: string | undefined
}
type PaymentLinkMethodResponse =
  | 'applepay'
  | 'bacs'
  | 'bancomatpay'
  | 'bancontact'
  | 'banktransfer'
  | 'belfius'
  | 'billie'
  | 'blik'
  | 'creditcard'
  | 'eps'
  | 'giftcard'
  | 'googlepay'
  | 'ideal'
  | 'in3'
  | 'kbc'
  | 'klarna'
  | 'mbway'
  | 'multibanco'
  | 'mybank'
  | 'paybybank'
  | 'paypal'
  | 'paysafecard'
  | 'pointofsale'
  | 'przelewy24'
  | 'riverty'
  | 'satispay'
  | 'swish'
  | 'trustly'
  | 'twint'
  | 'voucher'
  | 'wero'
type PaymentLinkMethodsResponse = PaymentLinkMethodResponse[] | null
type PaymentLinkSequenceTypeResponse = 'oneoff' | 'first'
type PaymentLinkResponse = {
  resource?: string | undefined
  id?: {} | undefined
  mode?: Mode | undefined
  description?: string | undefined
  amount?: AmountNullable | undefined
  minimumAmount?: AmountNullable | undefined
  archived?: boolean | undefined
  redirectUrl?: (string | null) | undefined
  webhookUrl?: (string | null) | undefined
  lines?: (PaymentLineItemResponse[] | null) | undefined
  billingAddress?: PaymentAddress | undefined
  shippingAddress?: PaymentAddress | undefined
  profileId?: (string | null) | undefined
  reusable?: (boolean | null) | undefined
  createdAt?: CreatedAt | undefined
  paidAt?: (string | null) | undefined
  expiresAt?: (string | null) | undefined
  allowedMethods?: PaymentLinkMethodsResponse | undefined
  applicationFee?: { amount: Amount; description: string } | undefined
  sequenceType?: PaymentLinkSequenceTypeResponse | undefined
  customerId?: (string | null) | undefined
  testmode?: TestmodeCreate | undefined
  _links?: { self: Url; paymentLink: Url } | undefined
}
type PayoutStatus =
  | 'requested'
  | 'initiated'
  | 'processing-at-bank'
  | 'completed'
  | 'failed'
  | 'canceled'
type PayoutStatusReasonCode =
  | 'requested'
  | 'initiated'
  | 'processing_at_bank'
  | 'completed'
  | 'canceled'
  | 'failed'
  | 'insufficient_funds'
  | 'returned'
  | 'invalid_request'
  | 'organization_inactive'
  | 'payouts_blocked'
  | 'bank_processing_failed'
  | 'balance_not_found'
  | 'expired'
type PayoutStatusReason = { code: PayoutStatusReasonCode; message: string }
type EntityPayoutResponse = {
  resource: string
  id: string
  balanceId: string
  amount?: AmountNullable | undefined
  description?: (string | null) | undefined
  status: PayoutStatus
  statusReason: PayoutStatusReason
  createdAt: CreatedAt
  initiatedAt?: (string | null) | undefined
  completedAt?: (string | null) | undefined
  canceledAt?: (string | null) | undefined
  mode: Mode
  testmode?: TestmodeCreate | undefined
  _links?: { self: Url; documentation: Url } | undefined
}
type SalesInvoiceEInvoiceStatus = 'issuing' | 'issued' | 'failed'
type SalesInvoiceVatSchemeResponse = 'standard' | 'one-stop-shop'
type SalesInvoiceVatModeResponse = 'exclusive' | 'inclusive'
type SalesInvoicePaymentTermResponse =
  | '7 days'
  | '14 days'
  | '30 days'
  | '45 days'
  | '60 days'
  | '90 days'
  | '120 days'
type SalesInvoiceEmailDetails = { subject: string; body: string } | null
type SalesInvoiceRecipientTypeResponse = 'consumer' | 'business'
type SalesInvoiceRecipientResponse = {
  type: SalesInvoiceRecipientTypeResponse
  title?: (string | null) | undefined
  givenName?: (string | null) | undefined
  familyName?: (string | null) | undefined
  organizationName?: (string | null) | undefined
  organizationNumber?: (string | null) | undefined
  vatNumber?: (string | null) | undefined
  email: string
  phone?: (string | null) | undefined
  streetAndNumber: string
  streetAdditional?: (string | null) | undefined
  postalCode: string
  city: string
  region?: (string | null) | undefined
  country: string
  locale: {}
} | null
type SalesInvoiceDiscountTypeResponse = 'amount' | 'percentage'
type SalesInvoiceDiscountResponse = { type: SalesInvoiceDiscountTypeResponse; value: string } | null
type SalesInvoiceLineItemResponse = {
  description: string
  quantity: number
  vatRate: string
  unitPrice: Amount
  discount?: SalesInvoiceDiscountResponse | undefined
}
type SalesInvoiceStatusResponse =
  | 'draft'
  | 'issuing'
  | 'issued'
  | 'pending-payment'
  | 'paid'
  | 'overdue'
  | 'payment-reversed'
  | 'cancelled'
  | 'expired'
  | 'failed'
type SalesInvoicePaymentDetailsSourceResponse = 'manual' | 'payment-link' | 'payment'
type SalesInvoicePaymentDetailsResponse = {
  source: SalesInvoicePaymentDetailsSourceResponse
  sourceReference?: (string | null) | undefined
}
type SalesInvoiceResponse = {
  resource?: string | undefined
  id?: {} | undefined
  mode?: Mode | undefined
  testmode?: TestmodeCreate | undefined
  invoiceNumber?: (string | null) | undefined
  profileId?: (string | null) | undefined
  status?: SalesInvoiceStatusResponse | undefined
  eInvoiceStatus?: SalesInvoiceEInvoiceStatus | undefined
  vatScheme?: SalesInvoiceVatSchemeResponse | undefined
  vatMode?: SalesInvoiceVatModeResponse | undefined
  memo?: (string | null) | undefined
  metadata?: ({ [x: string]: unknown } | null) | undefined
  paymentTerm?: SalesInvoicePaymentTermResponse | undefined
  paymentDetails?: SalesInvoicePaymentDetailsResponse[] | undefined
  emailDetails?: SalesInvoiceEmailDetails | undefined
  customerId?: string | undefined
  mandateId?: string | undefined
  recipientIdentifier?: string | undefined
  recipient?: SalesInvoiceRecipientResponse | undefined
  lines?: (SalesInvoiceLineItemResponse[] | null) | undefined
  discount?: SalesInvoiceDiscountResponse | undefined
  isEInvoice?: boolean | undefined
  amountDue?: { currency: string; value: string } | undefined
  subtotalAmount?: { currency: string; value: string } | undefined
  totalAmount?: { currency: string; value: string } | undefined
  totalVatAmount?: { currency: string; value: string } | undefined
  discountedSubtotalAmount?: { currency: string; value: string } | undefined
  createdAt?: CreatedAt | undefined
  issuedAt?: (string | null) | undefined
  paidAt?: (string | null) | undefined
  dueAt?: (string | null) | undefined
  _links?:
    | {
        self?: Url | undefined
        invoicePayment?: Url | undefined
        pdfLink?: Url | undefined
        documentation?: Url | undefined
        next?: Url | undefined
        previous?: Url | undefined
      }
    | undefined
}
type TransferParty = { fullName: string; account: { iban: string } }
type TransferSchemeTypeResponse = 'sepa-credit-inst' | 'sepa-credit'
type TransferSchemeResponse = { type: TransferSchemeTypeResponse }
type CreditDebitIndicator = 'credit' | 'debit'
type TransferStatus =
  | 'requested'
  | 'initiated'
  | 'pending-review'
  | 'processed'
  | 'failed'
  | 'blocked'
  | 'returned'
type StatusReasonCodeResponse = 'insufficient-funds' | 'rejected' | 'error'
type StatusReason_2 = {
  code?: StatusReasonCodeResponse | undefined
  message?: string | undefined
} | null
type StatusHistoryEntryResponse = {
  status: TransferStatus
  createdAt: CreatedAt
  statusReason?: StatusReason_2 | undefined
}
type TransferResponse = {
  resource?: string | undefined
  id?: {} | undefined
  mode?: Mode | undefined
  debtorIban?: string | undefined
  debtor?: { fullName: string; account: { iban: string } } | undefined
  creditor?: TransferParty | undefined
  amount?: Amount | undefined
  description?: (string | null) | undefined
  businessAccountTransactionId?: {} | undefined
  transferScheme?: TransferSchemeResponse | undefined
  creditDebitIndicator?: CreditDebitIndicator | undefined
  status?: TransferStatus | undefined
  statusHistory?: StatusHistoryEntryResponse[] | undefined
  createdAt?: CreatedAt | undefined
  statusReason?: StatusReason_2 | undefined
  metadata?: Metadata | undefined
  testmode?: TestmodeCreate | undefined
}
type DraftTransferParty = { fullName: string; account: { iban: string } }
type DraftTransferStatusReasonCodeResponse =
  | 'deleted-by-creator'
  | 'declined-by-initiator'
  | 'account-closed'
type DraftTransferStatusReason = {
  code: DraftTransferStatusReasonCodeResponse
  message: string
} | null
type DraftTransferResponse = {
  resource?: string | undefined
  id?: {} | undefined
  mode?: Mode | undefined
  debtorIban?: string | undefined
  debtor?: { fullName: string; account: { iban: string } } | undefined
  creditor?: DraftTransferParty | undefined
  amount?: Amount | undefined
  description?: (string | null) | undefined
  scheduledExecutionDate?: (string | null) | undefined
  status?: {} | undefined
  statusReason?: DraftTransferStatusReason | undefined
  createdAt?: CreatedAt | undefined
  approvedAt?: (string | null) | undefined
  declinedAt?: (string | null) | undefined
  deletedAt?: (string | null) | undefined
  testmode?: TestmodeCreate | undefined
  _links?: { self: { href?: string | undefined; type?: string | undefined } } | undefined
}
type AccountDetails = {
  accountHolderName: string
  name?: string | undefined
  currency: string
  iban: string
  bic?: string | undefined
}
type Balance = { total: Amount }
type AccountStatus = 'active' | 'blocked' | 'closed'
type BusinessAccountResponse = {
  resource?: string | undefined
  id?: {} | undefined
  accountDetails?: AccountDetails | undefined
  balance?: Balance | undefined
  status?: AccountStatus | undefined
  mode?: Mode | undefined
  createdAt?: CreatedAt | undefined
  _links?: { self: Url; documentation: Url } | undefined
}
type EntityWebhookEvent = {
  resource: string
  id: string
  type: {}
  entityId: string
  createdAt: string
  _embedded?:
    | ({
        entity?:
          | PaymentResponse
          | RefundResponse
          | EntityChargeback
          | CaptureResponse
          | PaymentLinkResponse
          | EntityPayoutResponse
          | SalesInvoiceResponse
          | TransferResponse
          | DraftTransferResponse
          | BusinessAccountResponse
          | undefined
      } | null)
    | undefined
  _links: { self: Url; documentation: Url; entity?: Url | undefined }
}
type BalanceTransferPartyType = 'organization'
type EntityBalanceTransferParty = {
  type: BalanceTransferPartyType
  id: OrganizationToken
  description: string
}
type BalanceTransferStatus = 'created' | 'failed' | 'succeeded'
type BalanceTransferStatusReason =
  | 'request_created'
  | 'success'
  | 'source_not_allowed'
  | 'destination_not_allowed'
  | 'insufficient_funds'
  | 'invalid_source_balance'
  | 'invalid_destination_balance'
  | 'transfer_request_expired'
  | 'transfer_limit_reached'
type BalanceTransferCategory =
  | 'invoice_collection'
  | 'purchase'
  | 'chargeback'
  | 'refund'
  | 'service_penalty'
  | 'discount_compensation'
  | 'manual_correction'
  | 'other_fee'
type EntityBalanceTransfer = {
  resource: string
  id: {}
  amount: Amount
  source: EntityBalanceTransferParty
  destination: EntityBalanceTransferParty
  description: string
  status: BalanceTransferStatus
  statusReason: { code: BalanceTransferStatusReason; message: string }
  category?: BalanceTransferCategory | undefined
  metadata?: { [x: string]: unknown } | undefined
  createdAt: CreatedAt
  executedAt?: (string | null) | undefined
  testmode?: OauthTestmodeCreate | undefined
  mode: Mode
}
type BalanceTransferPartyTypeResponse = 'organization'
type EntityBalanceTransferPartyResponse = {
  type: BalanceTransferPartyTypeResponse
  id: OrganizationToken
  description: string
}
type BalanceTransferStatusReasonResponse =
  | 'request_created'
  | 'success'
  | 'source_not_allowed'
  | 'destination_not_allowed'
  | 'insufficient_funds'
  | 'invalid_source_balance'
  | 'invalid_destination_balance'
  | 'transfer_request_expired'
  | 'transfer_limit_reached'
type BalanceTransferCategoryResponse =
  | 'invoice_collection'
  | 'purchase'
  | 'chargeback'
  | 'refund'
  | 'service_penalty'
  | 'discount_compensation'
  | 'manual_correction'
  | 'other_fee'
type EntityBalanceTransferResponse = {
  resource: string
  id: {}
  amount: Amount
  source: EntityBalanceTransferPartyResponse
  destination: EntityBalanceTransferPartyResponse
  description: string
  status: BalanceTransferStatus
  statusReason: { code: BalanceTransferStatusReasonResponse; message: string }
  category?: BalanceTransferCategoryResponse | undefined
  metadata?: { [x: string]: unknown } | undefined
  createdAt: CreatedAt
  executedAt?: (string | null) | undefined
  testmode?: OauthTestmodeCreate | undefined
  mode: Mode
}
type ConnectBalanceTransferToken = string
type PaymentLineType =
  | 'physical'
  | 'digital'
  | 'shipping_fee'
  | 'discount'
  | 'store_credit'
  | 'gift_card'
  | 'surcharge'
  | 'tip'
type LineCategories = 'eco' | 'gift' | 'meal' | 'sport_culture' | 'additional' | 'consume'
type Locale =
  | 'ca_ES'
  | 'cs_CZ'
  | 'da_DK'
  | 'de_AT'
  | 'de_CH'
  | 'de_DE'
  | 'de_LU'
  | 'el_GR'
  | 'en_BE'
  | 'en_GB'
  | 'en_NL'
  | 'en_US'
  | 'es_ES'
  | 'fi_FI'
  | 'fr_BE'
  | 'fr_FR'
  | 'fr_LU'
  | 'hu_HU'
  | 'is_IS'
  | 'it_IT'
  | 'lt_LT'
  | 'lv_LV'
  | 'nb_NO'
  | 'nl_BE'
  | 'nl_NL'
  | 'pl_PL'
  | 'pt_PT'
  | 'sk_SK'
  | 'sl_SI'
  | 'sv_SE'
  | 'tr_TR'
  | null
type CaptureMode = 'automatic' | 'manual'
type RouteDestinationType = 'organization'
type EntityPaymentRoute = {
  resource: string
  id: {}
  mode: Mode
  amount: Amount
  destination: { type: RouteDestinationType; organizationId: OrganizationToken }
  createdAt: string
  releaseDate?: (string | null) | undefined
  _links: { self: Url; payment: Url }
}
type SequenceType = 'oneoff' | 'first' | 'recurring'
type Method =
  | null
  | 'alma'
  | 'applepay'
  | 'bacs'
  | 'bancomatpay'
  | 'bancontact'
  | 'banktransfer'
  | 'belfius'
  | 'billie'
  | 'billink'
  | 'bizum'
  | 'blik'
  | 'creditcard'
  | 'directdebit'
  | 'eps'
  | 'giftcard'
  | 'ideal'
  | 'in3'
  | 'kbc'
  | 'klarna'
  | 'mbway'
  | 'mobilepay'
  | 'multibanco'
  | 'mybank'
  | 'paybybank'
  | 'paypal'
  | 'paysafecard'
  | 'pointofsale'
  | 'przelewy24'
  | 'riverty'
  | 'satispay'
  | 'swish'
  | 'trustly'
  | 'twint'
  | 'vipps'
  | 'voucher'
  | 'wero'
type PaymentRequest = {
  resource?: string | undefined
  id?: {} | undefined
  mode?: Mode | undefined
  description?: string | undefined
  amount?: Amount | undefined
  amountRefunded?: { currency: string; value: string } | undefined
  amountRemaining?: { currency: string; value: string } | undefined
  amountCaptured?: { currency: string; value: string } | undefined
  amountChargedBack?: { currency: string; value: string } | undefined
  redirectUrl?: (string | null) | undefined
  cancelUrl?: (string | null) | undefined
  webhookUrl?: (string | null) | undefined
  lines?:
    | (
        | {
            type?: PaymentLineType | undefined
            description: string
            quantity: number
            quantityUnit?: string | undefined
            unitPrice: Amount
            discountAmount?: Amount | undefined
            totalAmount: Amount
            vatRate?: string | undefined
            vatAmount?: Amount | undefined
            sku?: string | undefined
            categories?: LineCategories[] | undefined
            imageUrl?: string | undefined
            productUrl?: string | undefined
            recurring?: RecurringLineItem | undefined
          }[]
        | null
      )
    | undefined
  billingAddress?:
    | {
        title?: string | undefined
        givenName?: string | undefined
        familyName?: string | undefined
        organizationName?: { [x: string]: unknown } | undefined
        streetAndNumber?: string | undefined
        streetAdditional?: string | undefined
        postalCode?: string | undefined
        email?: string | undefined
        phone?: string | undefined
        city?: string | undefined
        region?: string | undefined
        country?: string | undefined
      }
    | undefined
  shippingAddress?: PaymentAddress | undefined
  locale?: Locale | undefined
  countryCode?: (string | null) | undefined
  method?: Method | Method[] | undefined
  issuer?: (string | null) | undefined
  restrictPaymentMethodsToCountry?: (string | null) | undefined
  metadata?: Metadata | undefined
  captureMode?: CaptureMode | undefined
  captureDelay?: (string | null) | undefined
  captureBefore?: (string | null) | undefined
  applicationFee?: ({ amount: Amount; description: string } | null) | undefined
  routing?: (EntityPaymentRoute[] | null) | undefined
  sequenceType?: SequenceType | undefined
  subscriptionId?: {} | undefined
  mandateId?: {} | undefined
  customerId?: CustomerToken | undefined
  profileId?: ProfileToken | undefined
  settlementId?: {} | undefined
  orderId?: {} | undefined
  status?: {} | undefined
  statusReason?: StatusReason | undefined
  isCancelable?: (boolean | null) | undefined
  details?: PaymentDetails | undefined
  createdAt?: CreatedAt | undefined
  authorizedAt?: (string | null) | undefined
  paidAt?: (string | null) | undefined
  canceledAt?: (string | null) | undefined
  expiresAt?: (string | null) | undefined
  expiredAt?: (string | null) | undefined
  failedAt?: (string | null) | undefined
  dueDate?: (string | null) | undefined
  storeCredentials?: boolean | undefined
  testmode?: TestmodeCreate | undefined
  _links?:
    | {
        self: Url
        checkout?: Url | undefined
        mobileAppCheckout?: Url | undefined
        changePaymentState?: UrlNullable | undefined
        dashboard: Url
        refunds?: Url | undefined
        chargebacks?: Url | undefined
        captures?: Url | undefined
        settlement?: Url | undefined
        customer?: Url | undefined
        mandate?: Url | undefined
        subscription?: Url | undefined
        order?: Url | undefined
        terminal?: Url | undefined
        documentation?: Url | undefined
        status?: Url | undefined
        payOnline?: Url | undefined
      }
    | undefined
  applePayPaymentToken?: string | undefined
  company?:
    | {
        registrationNumber?: string | undefined
        vatNumber?: string | undefined
        entityType?: string | undefined
      }
    | undefined
  cardToken?: string | undefined
  googlePayPaymentToken?: string | undefined
  voucherNumber?: string | undefined
  voucherPin?: string | undefined
  consumerDateOfBirth?: string | undefined
  extraMerchantData?: { [x: string]: unknown } | undefined
  sessionId?: string | undefined
  digitalGoods?: boolean | undefined
  customerReference?: string | undefined
  terminalId?: string | undefined
}
type ListPaymentResponse = {
  resource?: string | undefined
  id?: {} | undefined
  mode?: Mode | undefined
  description?: string | undefined
  amount?: Amount | undefined
  amountRefunded?: { currency: string; value: string } | undefined
  amountRemaining?: { currency: string; value: string } | undefined
  amountCaptured?: { currency: string; value: string } | undefined
  amountChargedBack?: { currency: string; value: string } | undefined
  redirectUrl?: (string | null) | undefined
  cancelUrl?: (string | null) | undefined
  webhookUrl?: (string | null) | undefined
  lines?:
    | (
        | {
            type?: PaymentLineTypeResponse | undefined
            description: string
            quantity: number
            quantityUnit?: string | undefined
            unitPrice: Amount
            discountAmount?: Amount | undefined
            totalAmount: Amount
            vatRate?: string | undefined
            vatAmount?: Amount | undefined
            sku?: string | undefined
            categories?: LineCategoriesResponse[] | undefined
            imageUrl?: string | undefined
            productUrl?: string | undefined
            recurring?: RecurringLineItem | undefined
          }[]
        | null
      )
    | undefined
  billingAddress?:
    | {
        title?: string | undefined
        givenName?: string | undefined
        familyName?: string | undefined
        organizationName?: { [x: string]: unknown } | undefined
        streetAndNumber?: string | undefined
        streetAdditional?: string | undefined
        postalCode?: string | undefined
        email?: string | undefined
        phone?: string | undefined
        city?: string | undefined
        region?: string | undefined
        country?: string | undefined
      }
    | undefined
  shippingAddress?: PaymentAddress | undefined
  locale?: LocaleResponse | undefined
  countryCode?: (string | null) | undefined
  method?: MethodResponse | undefined
  issuer?: (string | null) | undefined
  restrictPaymentMethodsToCountry?: (string | null) | undefined
  metadata?: Metadata | undefined
  captureMode?: CaptureModeResponse | undefined
  captureDelay?: (string | null) | undefined
  captureBefore?: (string | null) | undefined
  applicationFee?: ({ amount: Amount; description: string } | null) | undefined
  routing?: (EntityPaymentRouteResponse[] | null) | undefined
  sequenceType?: SequenceTypeResponse | undefined
  subscriptionId?: {} | undefined
  mandateId?: {} | undefined
  customerId?: CustomerToken | undefined
  profileId?: ProfileToken | undefined
  settlementId?: {} | undefined
  orderId?: {} | undefined
  status?: {} | undefined
  statusReason?: StatusReason | undefined
  isCancelable?: (boolean | null) | undefined
  details?: PaymentDetails | undefined
  createdAt?: CreatedAt | undefined
  authorizedAt?: (string | null) | undefined
  paidAt?: (string | null) | undefined
  canceledAt?: (string | null) | undefined
  expiresAt?: (string | null) | undefined
  expiredAt?: (string | null) | undefined
  failedAt?: (string | null) | undefined
  dueDate?: (string | null) | undefined
  storeCredentials?: boolean | undefined
  testmode?: TestmodeCreate | undefined
  _links?:
    | {
        self: Url
        checkout?: Url | undefined
        mobileAppCheckout?: Url | undefined
        changePaymentState?: UrlNullable | undefined
        dashboard: Url
        refunds?: Url | undefined
        chargebacks?: Url | undefined
        captures?: Url | undefined
        settlement?: Url | undefined
        customer?: Url | undefined
        mandate?: Url | undefined
        subscription?: Url | undefined
        order?: Url | undefined
        terminal?: Url | undefined
        status?: Url | undefined
        payOnline?: Url | undefined
      }
    | undefined
}
type Description = string
type RedirectUrl = string | null
type CancelUrl = string | null
type WebhookUrl = string | null
type MethodRequest = Method | Method[]
type Locale_2 = Locale
type DueDate = string | null
type RestrictPaymentMethodsToCountry = string | null
type Issuer = string | null
type BillingAddress = {
  title?: string | undefined
  givenName?: string | undefined
  familyName?: string | undefined
  organizationName?: { [x: string]: unknown } | undefined
  streetAndNumber?: string | undefined
  streetAdditional?: string | undefined
  postalCode?: string | undefined
  email?: string | undefined
  phone?: string | undefined
  city?: string | undefined
  region?: string | undefined
  country?: string | undefined
}
type ShippingAddress = PaymentAddress
type ProfileId = ProfileToken
type UnmatchedCreditTransferStatus = 'received' | 'matched' | 'returned' | 'expired'
type ListEntityUnmatchedCreditTransfer = {
  resource: string
  id: {}
  profileId: {}
  amount: Amount
  source: { format: string; accountHolderName: string; iban: string; bic: string }
  remittanceInformation: {
    unstructured?: string | undefined
    references?:
      | { creditorReference?: (string | null) | undefined; endToEndId?: string | undefined }
      | undefined
  }
  status: UnmatchedCreditTransferStatus
  createdAt: CreatedAt
  expiresAt: string
  paymentIds?: PaymentToken[] | undefined
  _links: { self?: { href?: string | undefined; type?: string | undefined } | undefined }
}
type UnmatchedCreditTransferToken = string
type EntityUnmatchedCreditTransfer = {
  resource: string
  id: {}
  profileId: {}
  amount: Amount
  source: { format: string; accountHolderName: string; iban: string; bic: string }
  remittanceInformation: {
    unstructured?: string | undefined
    references?:
      | { creditorReference?: (string | null) | undefined; endToEndId?: string | undefined }
      | undefined
  }
  status: UnmatchedCreditTransferStatus
  createdAt: CreatedAt
  expiresAt: string
  paymentIds?: PaymentToken[] | undefined
  _links: {
    self?: { href?: string | undefined; type?: string | undefined } | undefined
    documentation?: { href?: string | undefined; type?: string | undefined } | undefined
  }
}
type UnmatchedCreditTransferMatchRequest = { paymentIds: PaymentToken[] }
type UnmatchedCreditTransferActionResponse = {
  resource?: string | undefined
  id?: {} | undefined
  unmatchedCreditTransferId?: {} | undefined
  action?: {} | undefined
  status?: {} | undefined
  createdAt?: CreatedAt | undefined
  details?: { paymentIds?: PaymentToken[] | undefined } | undefined
  _links?:
    | {
        self?: { href?: string | undefined; type?: string | undefined } | undefined
        documentation?: { href?: string | undefined; type?: string | undefined } | undefined
      }
    | undefined
}
type SessionLineItem = {
  type?: PaymentLineTypeResponse | undefined
  description: string
  quantity: number
  quantityUnit?: string | undefined
  unitPrice: Amount
  discountAmount?: Amount | undefined
  totalAmount: Amount
  vatRate?: string | undefined
  vatAmount?: Amount | undefined
  sku?: string | undefined
  imageUrl?: string | undefined
  productUrl?: string | undefined
}
type SessionRequiredCustomerDetails = 'email' | 'billing-address' | 'shipping-address'
type SessionSequenceType = 'oneoff' | 'first'
type SessionRequest = {
  resource?: string | undefined
  id?: {} | undefined
  mode?: Mode | undefined
  clientAccessToken?: string | undefined
  status?: {} | undefined
  amount?: Amount | undefined
  description?: string | undefined
  lines?: SessionLineItem[] | undefined
  redirectUrl?: string | undefined
  requiredCustomerDetails?: SessionRequiredCustomerDetails[] | undefined
  billingAddress?: PaymentAddress | undefined
  shippingAddress?: PaymentAddress | undefined
  shipping?: { [x: string]: unknown } | { [x: string]: unknown } | undefined
  customerId?: CustomerToken | undefined
  sequenceType?: SessionSequenceType | undefined
  metadata?: { [x: string]: unknown } | undefined
  payment?: { webhookUrl?: string | undefined } | undefined
  profileId?: ProfileToken | undefined
  testmode?: TestmodeCreate | undefined
  createdAt?: CreatedAt | undefined
  expiredAt?: (string | null) | undefined
  completedAt?: (string | null) | undefined
  _links?: { self: Url } | undefined
}
type SessionLineItemResponse = {
  type?: PaymentLineTypeResponse | undefined
  description: string
  quantity: number
  quantityUnit?: string | undefined
  unitPrice: Amount
  discountAmount?: Amount | undefined
  totalAmount: Amount
  vatRate?: string | undefined
  vatAmount?: Amount | undefined
  sku?: string | undefined
  imageUrl?: string | undefined
  productUrl?: string | undefined
}
type SessionRequiredCustomerDetailsResponse = 'email' | 'billing-address' | 'shipping-address'
type SessionSequenceTypeResponse = 'oneoff' | 'first'
type SessionResponse = {
  resource?: string | undefined
  id?: {} | undefined
  mode?: Mode | undefined
  clientAccessToken?: string | undefined
  status?: {} | undefined
  amount?: Amount | undefined
  description?: string | undefined
  lines?: SessionLineItemResponse[] | undefined
  redirectUrl?: string | undefined
  requiredCustomerDetails?: SessionRequiredCustomerDetailsResponse[] | undefined
  billingAddress?: PaymentAddress | undefined
  shippingAddress?: PaymentAddress | undefined
  shipping?: { [x: string]: unknown } | { [x: string]: unknown } | undefined
  customerId?: CustomerToken | undefined
  sequenceType?: SessionSequenceTypeResponse | undefined
  metadata?: { [x: string]: unknown } | undefined
  payment?: { webhookUrl?: string | undefined } | undefined
  profileId?: ProfileToken | undefined
  testmode?: TestmodeCreate | undefined
  createdAt?: CreatedAt | undefined
  expiredAt?: (string | null) | undefined
  completedAt?: (string | null) | undefined
  _links?: { self: Url } | undefined
}
type SessionToken = string
type MethodResourceParameter = 'payments' | 'orders'
type MethodIncludeWalletsParameter = 'applepay' | 'googlepay'
type MethodStatus =
  | 'activated'
  | 'pending-boarding'
  | 'pending-review'
  | 'pending-external'
  | 'rejected'
  | null
type ListEntityMethod = {
  resource: string
  id: {}
  description: string
  minimumAmount: { currency: string; value: string }
  maximumAmount: { currency: string; value: string }
  image: { size1x: string; size2x: string; svg: string }
  status: MethodStatus
  issuers?:
    | {
        resource: string
        id: string
        name: string
        image: {
          size1x?: string | undefined
          size2x?: string | undefined
          svg?: string | undefined
        }
      }[]
    | undefined
  _links: { self: Url }
}
type ListEntityMethodAll = {
  resource: string
  id: {}
  description: string
  minimumAmount: { currency: string; value: string }
  maximumAmount: { currency: string; value: string }
  image: { size1x: string; size2x: string; svg: string }
  status: MethodStatus
  issuers?:
    | {
        resource: string
        id: string
        name: string
        image: {
          size1x?: string | undefined
          size2x?: string | undefined
          svg?: string | undefined
        }
      }[]
    | undefined
  _links: { self: Url }
  pricing?:
    | {
        description: string
        fixed: Amount
        variable: string
        feeRegion?: (string | null) | undefined
      }[]
    | undefined
}
type MethodId =
  | 'alma'
  | 'applepay'
  | 'bacs'
  | 'bancomatpay'
  | 'bancontact'
  | 'banktransfer'
  | 'belfius'
  | 'billie'
  | 'billink'
  | 'bizum'
  | 'blik'
  | 'creditcard'
  | 'directdebit'
  | 'eps'
  | 'giftcard'
  | 'googlepay'
  | 'ideal'
  | 'in3'
  | 'kbc'
  | 'klarna'
  | 'mbway'
  | 'mobilepay'
  | 'multibanco'
  | 'mybank'
  | 'paybybank'
  | 'paypal'
  | 'paysafecard'
  | 'pointofsale'
  | 'przelewy24'
  | 'riverty'
  | 'satispay'
  | 'swish'
  | 'trustly'
  | 'twint'
  | 'vipps'
  | 'voucher'
  | 'wero'
type EntityMethodGet = {
  resource: string
  id: {}
  description: string
  minimumAmount: { currency: string; value: string }
  maximumAmount: { currency: string; value: string }
  image: { size1x: string; size2x: string; svg: string }
  status: MethodStatus
  issuers?:
    | {
        resource: string
        id: string
        name: string
        image: {
          size1x?: string | undefined
          size2x?: string | undefined
          svg?: string | undefined
        }
      }[]
    | undefined
  _links: { self: Url; documentation?: Url | undefined }
}
type MethodIdWithIssuer = 'voucher' | 'giftcard'
type Giftcard = {
  resource: string
  id: string
  description: string
  status: {}
  _links: { self?: Url | undefined; documentation?: Url | undefined }
}
type Voucher = {
  resource: string
  id: string
  name: string
  image: { size1x?: string | undefined; size2x?: string | undefined; svg?: string | undefined }
  status: {}
  contractor: {
    id?: string | undefined
    name?: string | undefined
    contractId?: string | undefined
  }
  _links: { self?: Url | undefined; documentation?: Url | undefined }
}
type RefundExternalReferenceType = 'acquirer-reference'
type RefundRequest = {
  resource?: string | undefined
  id?: {} | undefined
  mode?: Mode | undefined
  description?: (string | null) | undefined
  amount?: Amount | undefined
  metadata?: Metadata | undefined
  paymentId?: {} | undefined
  settlementId?: {} | undefined
  status?: {} | undefined
  createdAt?: CreatedAt | undefined
  externalReference?:
    | { type?: RefundExternalReferenceType | undefined; id?: string | undefined }
    | undefined
  reverseRouting?: (boolean | null) | undefined
  routingReversals?:
    | (
        | {
            amount?: Amount | undefined
            source?:
              | { type?: {} | undefined; organizationId?: OrganizationToken | undefined }
              | undefined
          }[]
        | null
      )
    | undefined
  testmode?: TestmodeCreate | undefined
  _links?:
    | { self: Url; payment: Url; settlement?: UrlNullable | undefined; documentation: Url }
    | undefined
}
type ListRefundResponse = {
  resource?: string | undefined
  id?: {} | undefined
  mode?: Mode | undefined
  description?: (string | null) | undefined
  amount?: Amount | undefined
  metadata?: Metadata | undefined
  paymentId?: {} | undefined
  settlementId?: {} | undefined
  status?: {} | undefined
  createdAt?: CreatedAt | undefined
  externalReference?:
    | { type?: RefundExternalReferenceTypeResponse | undefined; id?: string | undefined }
    | undefined
  reverseRouting?: (boolean | null) | undefined
  routingReversals?:
    | (
        | {
            amount?: Amount | undefined
            source?:
              | { type?: {} | undefined; organizationId?: OrganizationToken | undefined }
              | undefined
          }[]
        | null
      )
    | undefined
  testmode?: TestmodeCreate | undefined
  _links?: { self: Url; payment: Url; settlement?: UrlNullable | undefined } | undefined
}
type ListEntityChargeback = {
  resource: string
  id: {}
  amount: Amount
  reason?: ({ code: string; description: string } | null) | undefined
  paymentId: {}
  settlementId?: {} | undefined
  createdAt: CreatedAt
  reversedAt?: (string | null) | undefined
  _links: { self: Url; payment: Url; settlement?: UrlNullable | undefined }
}
type EntityCapture = {
  resource?: string | undefined
  id?: {} | undefined
  mode?: Mode | undefined
  description?: string | undefined
  amount?: AmountNullable | undefined
  status?: {} | undefined
  metadata?: Metadata | undefined
  paymentId?: {} | undefined
  shipmentId?: {} | undefined
  settlementId?: {} | undefined
  createdAt?: CreatedAt | undefined
  testmode?: TestmodeCreate | undefined
  _links?:
    | {
        self: Url
        payment: Url
        settlement?: UrlNullable | undefined
        shipment?: UrlNullable | undefined
        documentation: Url
      }
    | undefined
}
type ListCaptureResponse = {
  resource?: string | undefined
  id?: {} | undefined
  mode?: Mode | undefined
  description?: string | undefined
  amount?: AmountNullable | undefined
  status?: {} | undefined
  metadata?: Metadata | undefined
  paymentId?: {} | undefined
  shipmentId?: {} | undefined
  settlementId?: {} | undefined
  createdAt?: CreatedAt | undefined
  testmode?: TestmodeCreate | undefined
  _links?:
    | {
        self: Url
        payment: Url
        settlement?: UrlNullable | undefined
        shipment?: UrlNullable | undefined
      }
    | undefined
}
type EntitySession_2 = { [x: string]: unknown }
type PaymentLineItem = {
  type?: PaymentLineType | undefined
  description: string
  quantity: number
  quantityUnit?: string | undefined
  unitPrice: Amount
  discountAmount?: Amount | undefined
  totalAmount: Amount
  vatRate?: string | undefined
  vatAmount?: Amount | undefined
  sku?: string | undefined
  categories?: LineCategories[] | undefined
  imageUrl?: string | undefined
  productUrl?: string | undefined
}
type PaymentLinkMethod =
  | 'applepay'
  | 'bacs'
  | 'bancomatpay'
  | 'bancontact'
  | 'banktransfer'
  | 'belfius'
  | 'billie'
  | 'blik'
  | 'creditcard'
  | 'eps'
  | 'giftcard'
  | 'googlepay'
  | 'ideal'
  | 'in3'
  | 'kbc'
  | 'klarna'
  | 'mbway'
  | 'multibanco'
  | 'mybank'
  | 'paybybank'
  | 'paypal'
  | 'paysafecard'
  | 'pointofsale'
  | 'przelewy24'
  | 'riverty'
  | 'satispay'
  | 'swish'
  | 'trustly'
  | 'twint'
  | 'voucher'
  | 'wero'
type PaymentLinkMethods = PaymentLinkMethod[] | null
type PaymentLinkSequenceType = 'oneoff' | 'first'
type PaymentLinkToken = string
type Testmode = boolean | null
type TerminalToken = string
type TerminalBrand = 'PAX' | 'Tap' | null
type TerminalModel = 'A35' | 'A77' | 'A920' | 'A920Pro' | 'IM30' | 'Tap' | null
type ListEntityTerminal = {
  resource: string
  id: {}
  mode: Mode
  description: string
  status: {}
  brand: TerminalBrand
  model: TerminalModel
  serialNumber: string | null
  currency: string
  profileId: ProfileToken
  createdAt: CreatedAt
  updatedAt: string
  _links: { self: Url }
}
type EntityTerminal = {
  resource: string
  id: {}
  mode: Mode
  description: string
  status: {}
  brand: TerminalBrand
  model: TerminalModel
  serialNumber: string | null
  currency: string
  profileId: ProfileToken
  createdAt: CreatedAt
  updatedAt: string
  _links: { self: Url; documentation: Url }
}
type EntityPairingCode = {
  resource: string
  id: {}
  mode: Mode
  code: string
  profileId: string
  status: {}
  details?:
    | ({
        qrCode?:
          | ({
              height?: number | undefined
              width?: number | undefined
              src?: string | undefined
            } | null)
          | undefined
      } | null)
    | undefined
  expiresAt: string
  revokedAt?: (string | null) | undefined
  createdAt: CreatedAt
  _links: { self: Url; profile: Url; documentation: Url }
}
type TerminalPairingCodeToken = string
type RouteCreateRequest = {
  amount: Amount
  destination: { type: RouteDestinationType; organizationId: OrganizationToken }
  description?: string | undefined
}
type RouteCreateResponse = {
  resource?: string | undefined
  id?: {} | undefined
  paymentId?: {} | undefined
  amount?: Amount | undefined
  description?: string | undefined
  destination?:
    | { type: RouteDestinationTypeResponse; organizationId: OrganizationToken }
    | undefined
  testmode?: TestmodeCreate | undefined
  createdAt?: CreatedAt | undefined
  _links?: { self: Url; documentation: Url; payment: Url } | undefined
}
type ListRouteGetResponse = {
  resource?: string | undefined
  id?: {} | undefined
  paymentId?: {} | undefined
  amount?: Amount | undefined
  description?: string | undefined
  destination?:
    | { type: RouteDestinationTypeResponse; organizationId: OrganizationToken }
    | undefined
  testmode?: TestmodeCreate | undefined
  createdAt?: CreatedAt | undefined
  _links?: { self: Url; payment: Url } | undefined
}
type ConnectRouteToken = string
type RouteGetResponse = {
  resource?: string | undefined
  id?: {} | undefined
  paymentId?: {} | undefined
  amount?: Amount | undefined
  description?: string | undefined
  destination?:
    | { type: RouteDestinationTypeResponse; organizationId: OrganizationToken }
    | undefined
  testmode?: TestmodeCreate | undefined
  createdAt?: CreatedAt | undefined
  _links?: { self: Url; documentation: Url; payment: Url } | undefined
}
type EntityCustomer = {
  resource?: string | undefined
  id?: {} | undefined
  mode?: Mode | undefined
  name?: (string | null) | undefined
  email?: (string | null) | undefined
  locale?: LocaleResponse | undefined
  metadata?: Metadata | undefined
  createdAt?: CreatedAt | undefined
  testmode?: TestmodeCreate | undefined
  _links?:
    | {
        self: Url
        dashboard: Url
        payments?: UrlNullable | undefined
        mandates?: UrlNullable | undefined
        subscriptions?: UrlNullable | undefined
        documentation: Url
      }
    | undefined
}
type CustomerResponse = {
  resource?: string | undefined
  id?: {} | undefined
  mode?: Mode | undefined
  name?: (string | null) | undefined
  email?: (string | null) | undefined
  locale?: LocaleResponse | undefined
  metadata?: Metadata | undefined
  createdAt?: CreatedAt | undefined
  testmode?: TestmodeCreate | undefined
  _links?:
    | {
        self: Url
        dashboard: Url
        payments?: UrlNullable | undefined
        mandates?: UrlNullable | undefined
        subscriptions?: UrlNullable | undefined
        documentation: Url
      }
    | undefined
}
type ListCustomerResponse = {
  resource?: string | undefined
  id?: {} | undefined
  mode?: Mode | undefined
  name?: (string | null) | undefined
  email?: (string | null) | undefined
  locale?: LocaleResponse | undefined
  metadata?: Metadata | undefined
  createdAt?: CreatedAt | undefined
  testmode?: TestmodeCreate | undefined
  _links?:
    | {
        self: Url
        dashboard: Url
        payments?: UrlNullable | undefined
        mandates?: UrlNullable | undefined
        subscriptions?: UrlNullable | undefined
      }
    | undefined
}
type MandateMethod = 'creditcard' | 'directdebit' | 'paypal'
type MandateDetailsCardLabel =
  | 'American Express'
  | 'Carta Si'
  | 'Carte Bleue'
  | 'Cartes Bancaires'
  | 'Dankort'
  | 'Diners Club'
  | 'Discover'
  | 'JCB'
  | 'Laser'
  | 'Maestro'
  | 'Mastercard'
  | 'Unionpay'
  | 'Visa'
  | null
type MandateRequest = {
  resource?: string | undefined
  id?: {} | undefined
  mode?: Mode | undefined
  method?: MandateMethod | undefined
  consumerName?: string | undefined
  consumerAccount?: (string | null) | undefined
  consumerBic?: (string | null) | undefined
  consumerEmail?: (string | null) | undefined
  details?:
    | {
        consumerName?: (string | null) | undefined
        consumerAccount?: (string | null) | undefined
        consumerBic?: (string | null) | undefined
        cardHolder?: (string | null) | undefined
        cardNumber?: (string | null) | undefined
        cardExpiryDate?: (string | null) | undefined
        cardLabel?: MandateDetailsCardLabel | undefined
        cardFingerprint?: (string | null) | undefined
      }
    | undefined
  signatureDate?: (string | null) | undefined
  mandateReference?: (string | null) | undefined
  paypalBillingAgreementId?: (string | null) | undefined
  payPalVaultId?: (string | null) | undefined
  scopes?: ({}[] | null) | undefined
  status?: {} | undefined
  customerId?: {} | undefined
  createdAt?: CreatedAt | undefined
  testmode?: TestmodeCreate | undefined
  _links?: { self: Url; customer: Url; documentation: Url } | undefined
}
type MandateMethodResponse = 'creditcard' | 'directdebit' | 'paypal'
type MandateDetailsCardLabelResponse =
  | 'American Express'
  | 'Carta Si'
  | 'Carte Bleue'
  | 'Cartes Bancaires'
  | 'Dankort'
  | 'Diners Club'
  | 'Discover'
  | 'JCB'
  | 'Laser'
  | 'Maestro'
  | 'Mastercard'
  | 'Unionpay'
  | 'Visa'
  | null
type MandateResponse = {
  resource?: string | undefined
  id?: {} | undefined
  mode?: Mode | undefined
  method?: MandateMethodResponse | undefined
  consumerName?: string | undefined
  consumerAccount?: (string | null) | undefined
  consumerBic?: (string | null) | undefined
  consumerEmail?: (string | null) | undefined
  details?:
    | {
        consumerName?: (string | null) | undefined
        consumerAccount?: (string | null) | undefined
        consumerBic?: (string | null) | undefined
        cardHolder?: (string | null) | undefined
        cardNumber?: (string | null) | undefined
        cardExpiryDate?: (string | null) | undefined
        cardLabel?: MandateDetailsCardLabelResponse | undefined
        cardFingerprint?: (string | null) | undefined
      }
    | undefined
  signatureDate?: (string | null) | undefined
  mandateReference?: (string | null) | undefined
  paypalBillingAgreementId?: (string | null) | undefined
  payPalVaultId?: (string | null) | undefined
  scopes?: ({}[] | null) | undefined
  status?: {} | undefined
  customerId?: {} | undefined
  createdAt?: CreatedAt | undefined
  testmode?: TestmodeCreate | undefined
  _links?: { self: Url; customer: Url; documentation: Url } | undefined
}
type MandateToken = string
type MandateScopes = 'customer-present' | 'customer-not-present'
type ListMandateResponse = {
  resource?: string | undefined
  id?: {} | undefined
  mode?: Mode | undefined
  method?: MandateMethodResponse | undefined
  consumerName?: string | undefined
  consumerAccount?: (string | null) | undefined
  consumerBic?: (string | null) | undefined
  consumerEmail?: (string | null) | undefined
  details?:
    | {
        consumerName?: (string | null) | undefined
        consumerAccount?: (string | null) | undefined
        consumerBic?: (string | null) | undefined
        cardHolder?: (string | null) | undefined
        cardNumber?: (string | null) | undefined
        cardExpiryDate?: (string | null) | undefined
        cardLabel?: MandateDetailsCardLabelResponse | undefined
        cardFingerprint?: (string | null) | undefined
      }
    | undefined
  signatureDate?: (string | null) | undefined
  mandateReference?: (string | null) | undefined
  paypalBillingAgreementId?: (string | null) | undefined
  payPalVaultId?: (string | null) | undefined
  scopes?: ({}[] | null) | undefined
  status?: {} | undefined
  customerId?: {} | undefined
  createdAt?: CreatedAt | undefined
  testmode?: TestmodeCreate | undefined
  _links?: { self: Url; customer: Url } | undefined
}
type SubscriptionMethod = 'creditcard' | 'directdebit' | 'paypal' | null
type SubscriptionRequest = {
  resource?: string | undefined
  id?: {} | undefined
  mode?: Mode | undefined
  status?: {} | undefined
  amount?: Amount | undefined
  times?: (number | null) | undefined
  timesRemaining?: (number | null) | undefined
  interval?: string | undefined
  startDate?: string | undefined
  nextPaymentDate?: (string | null) | undefined
  description?: string | undefined
  method?: SubscriptionMethod | undefined
  applicationFee?: { amount: Amount; description: string } | undefined
  metadata?: Metadata | undefined
  webhookUrl?: (string | null) | undefined
  customerId?: {} | undefined
  mandateId?: MandateToken | undefined
  createdAt?: CreatedAt | undefined
  canceledAt?: (string | null) | undefined
  profileId?: {} | undefined
  testmode?: TestmodeCreate | undefined
  _links?:
    | {
        self: Url
        customer: Url
        mandate?: UrlNullable | undefined
        profile: Url
        payments?: UrlNullable | undefined
        documentation: Url
      }
    | undefined
}
type SubscriptionMethodResponse = 'creditcard' | 'directdebit' | 'paypal' | null
type SubscriptionResponse = {
  resource: string
  id: {}
  mode: Mode
  status: {}
  amount: Amount
  times?: (number | null) | undefined
  timesRemaining?: (number | null) | undefined
  interval: string
  startDate: string
  nextPaymentDate?: (string | null) | undefined
  description?: string | undefined
  method?: SubscriptionMethodResponse | undefined
  applicationFee?: { amount: Amount; description: string } | undefined
  metadata?: Metadata | undefined
  webhookUrl?: (string | null) | undefined
  customerId: {}
  mandateId?: MandateToken | undefined
  createdAt: CreatedAt
  canceledAt?: (string | null) | undefined
  profileId?: {} | undefined
  testmode?: TestmodeCreate | undefined
  _links: {
    self: Url
    customer: Url
    mandate?: UrlNullable | undefined
    profile: Url
    payments?: UrlNullable | undefined
    documentation: Url
  }
}
type SubscriptionToken = string
type ListSubscriptionResponse = {
  resource: string
  id: {}
  mode: Mode
  status: {}
  amount: Amount
  times?: (number | null) | undefined
  timesRemaining?: (number | null) | undefined
  interval: string
  startDate: string
  nextPaymentDate?: (string | null) | undefined
  description?: string | undefined
  method?: SubscriptionMethodResponse | undefined
  applicationFee?: { amount: Amount; description: string } | undefined
  metadata?: Metadata | undefined
  webhookUrl?: (string | null) | undefined
  customerId: {}
  mandateId?: MandateToken | undefined
  createdAt: CreatedAt
  canceledAt?: (string | null) | undefined
  profileId?: {} | undefined
  testmode?: TestmodeCreate | undefined
  _links: {
    self: Url
    customer: Url
    mandate?: UrlNullable | undefined
    profile: Url
    payments?: UrlNullable | undefined
  }
}
type SalesInvoiceVatScheme = 'standard' | 'one-stop-shop'
type SalesInvoiceVatMode = 'exclusive' | 'inclusive'
type SalesInvoicePaymentTerm =
  | '7 days'
  | '14 days'
  | '30 days'
  | '45 days'
  | '60 days'
  | '90 days'
  | '120 days'
type SalesInvoiceRecipientType = 'consumer' | 'business'
type SalesInvoiceRecipient = {
  type: SalesInvoiceRecipientType
  title?: (string | null) | undefined
  givenName?: (string | null) | undefined
  familyName?: (string | null) | undefined
  organizationName?: (string | null) | undefined
  organizationNumber?: (string | null) | undefined
  vatNumber?: (string | null) | undefined
  email: string
  phone?: (string | null) | undefined
  streetAndNumber: string
  streetAdditional?: (string | null) | undefined
  postalCode: string
  city: string
  region?: (string | null) | undefined
  country: string
  locale: {}
} | null
type SalesInvoiceDiscountType = 'amount' | 'percentage'
type SalesInvoiceDiscount = { type: SalesInvoiceDiscountType; value: string } | null
type SalesInvoiceLineItem = {
  description: string
  quantity: number
  vatRate: string
  unitPrice: Amount
  discount?: SalesInvoiceDiscount | undefined
}
type SalesInvoiceStatus = 'draft' | 'issued' | 'paid'
type SalesInvoicePaymentDetailsSource = 'manual' | 'payment-link' | 'payment'
type SalesInvoicePaymentDetails = {
  source: SalesInvoicePaymentDetailsSource
  sourceReference?: (string | null) | undefined
}
type SalesInvoiceRequest = {
  resource?: string | undefined
  id?: {} | undefined
  mode?: Mode | undefined
  testmode?: TestmodeCreate | undefined
  invoiceNumber?: (string | null) | undefined
  profileId?: (string | null) | undefined
  status?: SalesInvoiceStatus | undefined
  eInvoiceStatus?: SalesInvoiceEInvoiceStatus | undefined
  vatScheme?: SalesInvoiceVatScheme | undefined
  vatMode?: SalesInvoiceVatMode | undefined
  memo?: (string | null) | undefined
  metadata?: ({ [x: string]: unknown } | null) | undefined
  paymentTerm?: SalesInvoicePaymentTerm | undefined
  paymentDetails?: SalesInvoicePaymentDetails | undefined
  emailDetails?: SalesInvoiceEmailDetails | undefined
  customerId?: string | undefined
  mandateId?: string | undefined
  recipientIdentifier?: string | undefined
  recipient?: SalesInvoiceRecipient | undefined
  lines?: (SalesInvoiceLineItem[] | null) | undefined
  discount?: SalesInvoiceDiscount | undefined
  isEInvoice?: boolean | undefined
  amountDue?: { currency: string; value: string } | undefined
  subtotalAmount?: { currency: string; value: string } | undefined
  totalAmount?: { currency: string; value: string } | undefined
  totalVatAmount?: { currency: string; value: string } | undefined
  discountedSubtotalAmount?: { currency: string; value: string } | undefined
  createdAt?: CreatedAt | undefined
  issuedAt?: (string | null) | undefined
  paidAt?: (string | null) | undefined
  dueAt?: (string | null) | undefined
  _links?:
    | {
        self?: Url | undefined
        invoicePayment?: Url | undefined
        pdfLink?: Url | undefined
        documentation?: Url | undefined
        next?: Url | undefined
        previous?: Url | undefined
      }
    | undefined
}
type ListSalesInvoiceResponse = {
  resource?: string | undefined
  id?: {} | undefined
  mode?: Mode | undefined
  testmode?: TestmodeCreate | undefined
  invoiceNumber?: (string | null) | undefined
  profileId?: (string | null) | undefined
  status?: SalesInvoiceStatusResponse | undefined
  eInvoiceStatus?: SalesInvoiceEInvoiceStatus | undefined
  vatScheme?: SalesInvoiceVatSchemeResponse | undefined
  vatMode?: SalesInvoiceVatModeResponse | undefined
  memo?: (string | null) | undefined
  metadata?: ({ [x: string]: unknown } | null) | undefined
  paymentTerm?: SalesInvoicePaymentTermResponse | undefined
  paymentDetails?: SalesInvoicePaymentDetailsResponse[] | undefined
  emailDetails?: SalesInvoiceEmailDetails | undefined
  customerId?: string | undefined
  mandateId?: string | undefined
  recipientIdentifier?: string | undefined
  recipient?: SalesInvoiceRecipientResponse | undefined
  lines?: (SalesInvoiceLineItemResponse[] | null) | undefined
  discount?: SalesInvoiceDiscountResponse | undefined
  isEInvoice?: boolean | undefined
  amountDue?: { currency: string; value: string } | undefined
  subtotalAmount?: { currency: string; value: string } | undefined
  totalAmount?: { currency: string; value: string } | undefined
  totalVatAmount?: { currency: string; value: string } | undefined
  discountedSubtotalAmount?: { currency: string; value: string } | undefined
  createdAt?: CreatedAt | undefined
  issuedAt?: (string | null) | undefined
  paidAt?: (string | null) | undefined
  dueAt?: (string | null) | undefined
  _links?:
    | {
        self?: Url | undefined
        invoicePayment?: Url | undefined
        pdfLink?: Url | undefined
        next?: Url | undefined
        previous?: Url | undefined
      }
    | undefined
}
type SalesInvoiceToken = string
type SalesInvoiceStatusUpdate = 'draft' | 'issued' | 'paid' | 'cancelled' | 'payment-reversed'
type DeleteValuesSalesInvoice = { testmode?: Testmode | undefined }
type AccountCurrency = 'EUR'
type BusinessAccountToken = string
type ListBusinessAccountResponse = {
  resource?: string | undefined
  id?: {} | undefined
  accountDetails?: AccountDetails | undefined
  balance?: Balance | undefined
  status?: AccountStatus | undefined
  mode?: Mode | undefined
  createdAt?: CreatedAt | undefined
  _links?: { self: Url; documentation: Url } | undefined
}
type BusinessAccountTransactionToken = string
type TransactionType =
  | 'card-payment'
  | 'bank-transfer'
  | 'psp-transfer'
  | 'internal-transfer'
  | 'ideal-payment'
  | 'fee'
  | 'correction'
  | 'direct-debit'
  | 'direct-debit-refund'
  | 'rewards-payout'
type Counterparty = { identifier?: string | undefined; name?: string | undefined }
type AfterBalance = { total: Amount }
type TransactionResponse = {
  resource?: string | undefined
  id?: {} | undefined
  businessAccountId?: {} | undefined
  creditDebitIndicator?: CreditDebitIndicator | undefined
  type?: TransactionType | undefined
  amount?: Amount | undefined
  description?: (string | null) | undefined
  counterparty?: Counterparty | undefined
  afterBalance?: AfterBalance | undefined
  processedAt?: (string | null) | undefined
  mode?: Mode | undefined
  createdAt?: CreatedAt | undefined
}
type TransferSchemeType = 'sepa-credit-inst' | 'sepa-credit'
type TransferScheme = { type: TransferSchemeType }
type StatusHistoryEntry = {
  status: TransferStatus
  createdAt: CreatedAt
  statusReason?: StatusReason_2 | undefined
}
type TransferRequest = {
  resource?: string | undefined
  id?: {} | undefined
  mode?: Mode | undefined
  debtorIban?: string | undefined
  debtor?: { fullName: string; account: { iban: string } } | undefined
  creditor?: TransferParty | undefined
  amount?: Amount | undefined
  description?: (string | null) | undefined
  businessAccountTransactionId?: {} | undefined
  transferScheme?: TransferScheme | undefined
  creditDebitIndicator?: CreditDebitIndicator | undefined
  status?: TransferStatus | undefined
  statusHistory?: StatusHistoryEntry[] | undefined
  createdAt?: CreatedAt | undefined
  statusReason?: StatusReason_2 | undefined
  metadata?: Metadata | undefined
  testmode?: TestmodeCreate | undefined
}
type BusinessAccountTransferToken = string
type AccountNumberFormat = 'iban'
type CreditorBankAccount = {
  accountHolderName: string
  format: AccountNumberFormat
  accountNumber: string
}
type VerificationOfPayeeRequest = {
  creditorBankAccount: CreditorBankAccount
  testmode?: TestmodeCreate | undefined
}
type AccountNumberFormatResponse = 'iban'
type CreditorBankAccountResponse = {
  accountHolderName: string
  format: AccountNumberFormatResponse
  accountNumber: string
}
type VerificationResult = 'match' | 'no-match' | 'close-match' | 'not-available'
type VerificationOfPayeeResponse = {
  resource: string
  mode: Mode
  creditorBankAccount: CreditorBankAccountResponse
  verificationResult: { outcome: VerificationResult; accountHolderName?: string | undefined }
  createdAt: CreatedAt
}
type CreateDraftTransferRequest = {
  resource?: string | undefined
  id?: {} | undefined
  mode?: Mode | undefined
  debtorIban?: string | undefined
  debtor?: { fullName: string; account: { iban: string } } | undefined
  creditor?: DraftTransferParty | undefined
  amount?: Amount | undefined
  description?: (string | null) | undefined
  scheduledExecutionDate?: (string | null) | undefined
  status?: {} | undefined
  statusReason?: DraftTransferStatusReason | undefined
  createdAt?: CreatedAt | undefined
  approvedAt?: (string | null) | undefined
  declinedAt?: (string | null) | undefined
  deletedAt?: (string | null) | undefined
  testmode?: TestmodeCreate | undefined
  _links?: { self: { href?: string | undefined; type?: string | undefined } } | undefined
}
type DraftTransferStatus = 'pending-review' | 'approved' | 'declined'
type DraftTransferToken = string
type PayoutRequest = {
  resource: string
  id: string
  balanceId: string
  amount?: AmountNullable | undefined
  description?: (string | null) | undefined
  status: PayoutStatus
  statusReason: PayoutStatusReason
  createdAt: CreatedAt
  initiatedAt?: (string | null) | undefined
  completedAt?: (string | null) | undefined
  canceledAt?: (string | null) | undefined
  mode: Mode
  testmode?: TestmodeCreate | undefined
  _links?: { self: Url; documentation: Url } | undefined
}
type ListEntityPayout = {
  resource: string
  id: string
  balanceId: string
  amount?: AmountNullable | undefined
  description?: (string | null) | undefined
  status: PayoutStatus
  statusReason: PayoutStatusReason
  createdAt: CreatedAt
  initiatedAt?: (string | null) | undefined
  completedAt?: (string | null) | undefined
  canceledAt?: (string | null) | undefined
  mode: Mode
  testmode?: TestmodeCreate | undefined
  _links?: { self: Url } | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/oauth2/tokens': {
      $post:
        | {
            input: {
              header: {
                Authorization: string
                'Content-Type'?: string | undefined
                'idempotency-key'?: string | undefined
              }
            } & {
              json: {
                grant_type: OauthGrantType
                code?: string | undefined
                refresh_token?: string | undefined
                redirect_uri?: string | undefined
              }
            }
            output: {
              access_token?: string | undefined
              refresh_token?: string | undefined
              expires_in?: number | undefined
              token_type?: string | undefined
              scope?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                Authorization: string
                'Content-Type'?: string | undefined
                'idempotency-key'?: string | undefined
              }
            } & {
              json: {
                grant_type: OauthGrantType
                code?: string | undefined
                refresh_token?: string | undefined
                redirect_uri?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
      $delete:
        | {
            input: {
              header: {
                Authorization: string
                'Content-Type'?: string | undefined
                'idempotency-key'?: string | undefined
              }
            } & { json: { token_type_hint: OauthTokenTypeHint; token: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: {
              header: {
                Authorization: string
                'Content-Type'?: string | undefined
                'idempotency-key'?: string | undefined
              }
            } & { json: { token_type_hint: OauthTokenTypeHint; token: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v2/balances': {
      $get:
        | {
            input: {
              query: {
                currency?: (string | null) | undefined
                from?: (string | null) | undefined
                limit?: (number | null) | undefined
                testmode?: boolean | undefined
              }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: {
              count: ListCount
              _embedded: { balances: ListEntityBalance[] }
              _links: ListLinks
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                currency?: (string | null) | undefined
                from?: (string | null) | undefined
                limit?: (number | null) | undefined
                testmode?: boolean | undefined
              }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                currency?: (string | null) | undefined
                from?: (string | null) | undefined
                limit?: (number | null) | undefined
                testmode?: boolean | undefined
              }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                currency?: (string | null) | undefined
                from?: (string | null) | undefined
                limit?: (number | null) | undefined
                testmode?: boolean | undefined
              }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v2/balances/:balanceId': {
      $get:
        | {
            input: { param: { balanceId: BalanceToken } } & {
              query: { testmode?: boolean | undefined }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: EntityBalance
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { balanceId: BalanceToken } } & {
              query: { testmode?: boolean | undefined }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { balanceId: BalanceToken } } & {
              query: { testmode?: boolean | undefined }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v2/balances/primary': {
      $get:
        | {
            input: {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: EntityBalance
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v2/balances/:balanceId/report': {
      $get:
        | {
            input: { param: { balanceId: BalanceToken } } & {
              query: {
                from: string
                until: string
                grouping?: BalanceReportGrouping | undefined
                testmode?: boolean | undefined
              }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: EntityBalanceReport
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { balanceId: BalanceToken } } & {
              query: {
                from: string
                until: string
                grouping?: BalanceReportGrouping | undefined
                testmode?: boolean | undefined
              }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { balanceId: BalanceToken } } & {
              query: {
                from: string
                until: string
                grouping?: BalanceReportGrouping | undefined
                testmode?: boolean | undefined
              }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { balanceId: BalanceToken } } & {
              query: {
                from: string
                until: string
                grouping?: BalanceReportGrouping | undefined
                testmode?: boolean | undefined
              }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v2/balances/:balanceId/transactions': {
      $get:
        | {
            input: { param: { balanceId: BalanceToken } } & {
              query: {
                from?: (string | null) | undefined
                limit?: (number | null) | undefined
                testmode?: boolean | undefined
              }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: {
              count: ListCount
              _embedded: { balance_transactions: EntityBalanceTransaction[] }
              _links: ListLinks
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { balanceId: BalanceToken } } & {
              query: {
                from?: (string | null) | undefined
                limit?: (number | null) | undefined
                testmode?: boolean | undefined
              }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { balanceId: BalanceToken } } & {
              query: {
                from?: (string | null) | undefined
                limit?: (number | null) | undefined
                testmode?: boolean | undefined
              }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { balanceId: BalanceToken } } & {
              query: {
                from?: (string | null) | undefined
                limit?: (number | null) | undefined
                testmode?: boolean | undefined
              }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v2/reports': {
      $post:
        | {
            input: {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            } & { json: CreateReportRequest }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            } & { json: CreateReportRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            } & { json: CreateReportRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            } & { json: CreateReportRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            } & { json: CreateReportRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v2/reports/:reportId': {
      $get:
        | {
            input: { param: { reportId: ReportToken } } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: EntityReport
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { reportId: ReportToken } } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { reportId: ReportToken } } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { reportId: ReportToken } } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { reportId: ReportToken } } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v2/settlements': {
      $get:
        | {
            input: {
              query: {
                from?: (string | null) | undefined
                limit?: (number | null) | undefined
                balanceId?: BalanceToken | undefined
                year?: (string | null) | undefined
                month?: (string | null) | undefined
                currencies?: Currencies | undefined
              }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: {
              count: ListCount
              _embedded: { settlements: EntitySettlement[] }
              _links: ListLinks
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                from?: (string | null) | undefined
                limit?: (number | null) | undefined
                balanceId?: BalanceToken | undefined
                year?: (string | null) | undefined
                month?: (string | null) | undefined
                currencies?: Currencies | undefined
              }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                from?: (string | null) | undefined
                limit?: (number | null) | undefined
                balanceId?: BalanceToken | undefined
                year?: (string | null) | undefined
                month?: (string | null) | undefined
                currencies?: Currencies | undefined
              }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                from?: (string | null) | undefined
                limit?: (number | null) | undefined
                balanceId?: BalanceToken | undefined
                year?: (string | null) | undefined
                month?: (string | null) | undefined
                currencies?: Currencies | undefined
              }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v2/settlements/:settlementId': {
      $get:
        | {
            input: { param: { settlementId: SettlementToken } } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: EntitySettlement
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { settlementId: SettlementToken } } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { settlementId: SettlementToken } } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v2/settlements/open': {
      $get:
        | {
            input: {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: {
              resource: string
              id: OpenSettlementId
              createdAt?: CreatedAt | undefined
              reference?: (string | null) | undefined
              settledAt?: (string | null) | undefined
              status: {}
              amount: { currency: string; value: string }
              balanceId: {}
              invoiceId?: {} | undefined
              periods?:
                | {
                    [x: string]: {
                      [x: string]: {
                        costs?:
                          | {
                              description: string
                              method: SettlementMethod
                              count: number
                              rate: { fixed: AmountNullable; percentage: string | null }
                              amountNet: Amount
                              amountVat: AmountNullable
                              amountGross: Amount
                            }[]
                          | undefined
                        revenue?:
                          | {
                              description: string
                              method: SettlementMethod
                              count: number
                              amountNet: Amount
                              amountVat: AmountNullable
                              amountGross: Amount
                            }[]
                          | undefined
                        invoiceId?: InvoiceToken | undefined
                        invoiceReference?: (string | null) | undefined
                      }
                    }
                  }
                | undefined
              _links: SettlementConvenienceLinks
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v2/settlements/next': {
      $get:
        | {
            input: {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: {
              resource: string
              id: NextSettlementId
              createdAt?: CreatedAt | undefined
              reference?: (string | null) | undefined
              settledAt?: (string | null) | undefined
              status: {}
              amount: { currency: string; value: string }
              balanceId: {}
              invoiceId?: {} | undefined
              periods?:
                | {
                    [x: string]: {
                      [x: string]: {
                        costs?:
                          | {
                              description: string
                              method: SettlementMethod
                              count: number
                              rate: { fixed: AmountNullable; percentage: string | null }
                              amountNet: Amount
                              amountVat: AmountNullable
                              amountGross: Amount
                            }[]
                          | undefined
                        revenue?:
                          | {
                              description: string
                              method: SettlementMethod
                              count: number
                              amountNet: Amount
                              amountVat: AmountNullable
                              amountGross: Amount
                            }[]
                          | undefined
                        invoiceId?: InvoiceToken | undefined
                        invoiceReference?: (string | null) | undefined
                      }
                    }
                  }
                | undefined
              _links: SettlementConvenienceLinks
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v2/settlements/:settlementId/payments': {
      $get:
        | {
            input: { param: { settlementId: SettlementToken } } & {
              query: {
                from?: PaymentToken | undefined
                limit?: (number | null) | undefined
                sort?: Sorting | undefined
                profileId?: ProfileToken | undefined
              }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: {
              count: ListCount
              _embedded: { payments?: ListSettlementPaymentResponse[] | undefined }
              _links: ListLinks
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { settlementId: SettlementToken } } & {
              query: {
                from?: PaymentToken | undefined
                limit?: (number | null) | undefined
                sort?: Sorting | undefined
                profileId?: ProfileToken | undefined
              }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { settlementId: SettlementToken } } & {
              query: {
                from?: PaymentToken | undefined
                limit?: (number | null) | undefined
                sort?: Sorting | undefined
                profileId?: ProfileToken | undefined
              }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v2/settlements/:settlementId/captures': {
      $get:
        | {
            input: { param: { settlementId: SettlementToken } } & {
              query: {
                from?: CaptureToken | undefined
                limit?: (number | null) | undefined
                embed?: (string | null) | undefined
              }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: {
              count: ListCount
              _embedded: { captures: ListSettlementCaptureResponse[] }
              _links: ListLinks
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { settlementId: SettlementToken } } & {
              query: {
                from?: CaptureToken | undefined
                limit?: (number | null) | undefined
                embed?: (string | null) | undefined
              }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { settlementId: SettlementToken } } & {
              query: {
                from?: CaptureToken | undefined
                limit?: (number | null) | undefined
                embed?: (string | null) | undefined
              }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { settlementId: SettlementToken } } & {
              query: {
                from?: CaptureToken | undefined
                limit?: (number | null) | undefined
                embed?: (string | null) | undefined
              }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v2/settlements/:settlementId/refunds': {
      $get:
        | {
            input: { param: { settlementId: SettlementToken } } & {
              query: {
                from?: RefundToken | undefined
                limit?: (number | null) | undefined
                embed?: (string | null) | undefined
              }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: {
              count: ListCount
              _embedded: { refunds: ListSettlementRefundResponse[] }
              _links: ListLinks
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { settlementId: SettlementToken } } & {
              query: {
                from?: RefundToken | undefined
                limit?: (number | null) | undefined
                embed?: (string | null) | undefined
              }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { settlementId: SettlementToken } } & {
              query: {
                from?: RefundToken | undefined
                limit?: (number | null) | undefined
                embed?: (string | null) | undefined
              }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { settlementId: SettlementToken } } & {
              query: {
                from?: RefundToken | undefined
                limit?: (number | null) | undefined
                embed?: (string | null) | undefined
              }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v2/settlements/:settlementId/chargebacks': {
      $get:
        | {
            input: { param: { settlementId: SettlementToken } } & {
              query: {
                from?: ChargebackToken | undefined
                limit?: (number | null) | undefined
                embed?: (string | null) | undefined
                testmode?: boolean | undefined
              }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: {
              count: ListCount
              _embedded: { chargebacks: ListSettlementChargebackResponse[] }
              _links: ListLinks
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { settlementId: SettlementToken } } & {
              query: {
                from?: ChargebackToken | undefined
                limit?: (number | null) | undefined
                embed?: (string | null) | undefined
                testmode?: boolean | undefined
              }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { settlementId: SettlementToken } } & {
              query: {
                from?: ChargebackToken | undefined
                limit?: (number | null) | undefined
                embed?: (string | null) | undefined
                testmode?: boolean | undefined
              }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { settlementId: SettlementToken } } & {
              query: {
                from?: ChargebackToken | undefined
                limit?: (number | null) | undefined
                embed?: (string | null) | undefined
                testmode?: boolean | undefined
              }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v2/invoices': {
      $get:
        | {
            input: {
              query: {
                reference?: (string | null) | undefined
                year?: (string | null) | undefined
                from?: (string | null) | undefined
                limit?: (number | null) | undefined
                sort?: Sorting | undefined
              }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: {
              count: ListCount
              _embedded: { invoices: ListEntityInvoice[] }
              _links: ListLinks
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                reference?: (string | null) | undefined
                year?: (string | null) | undefined
                from?: (string | null) | undefined
                limit?: (number | null) | undefined
                sort?: Sorting | undefined
              }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                reference?: (string | null) | undefined
                year?: (string | null) | undefined
                from?: (string | null) | undefined
                limit?: (number | null) | undefined
                sort?: Sorting | undefined
              }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                reference?: (string | null) | undefined
                year?: (string | null) | undefined
                from?: (string | null) | undefined
                limit?: (number | null) | undefined
                sort?: Sorting | undefined
              }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v2/invoices/:invoiceId': {
      $get:
        | {
            input: { param: { invoiceId: InvoiceToken } } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: EntityInvoice
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { invoiceId: InvoiceToken } } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { invoiceId: InvoiceToken } } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v2/permissions': {
      $get:
        | {
            input: {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: {
              count: ListCount
              _embedded: { permissions: ListEntityPermission[] }
              _links: { self: Url; documentation: Url }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v2/permissions/:permissionId': {
      $get:
        | {
            input: { param: { permissionId: PermissionToken } } & {
              query: { testmode?: boolean | undefined }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: EntityPermission
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { permissionId: PermissionToken } } & {
              query: { testmode?: boolean | undefined }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { permissionId: PermissionToken } } & {
              query: { testmode?: boolean | undefined }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v2/organizations/:organizationId': {
      $get:
        | {
            input: { param: { organizationId: OrganizationToken } } & {
              query: { testmode?: boolean | undefined }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: EntityOrganization
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: OrganizationToken } } & {
              query: { testmode?: boolean | undefined }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { organizationId: OrganizationToken } } & {
              query: { testmode?: boolean | undefined }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v2/organizations/me': {
      $get:
        | {
            input: {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: EntityOrganization
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v2/organizations/me/partner': {
      $get:
        | {
            input: {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: {
              resource: string
              partnerType: 'oauth' | 'signuplink' | 'useragent'
              isCommissionPartner?: boolean | undefined
              userAgentTokens?:
                | {
                    token?: string | undefined
                    startsAt?: string | undefined
                    endsAt?: (string | null) | undefined
                  }[]
                | undefined
              partnerContractSignedAt?: (string | null) | undefined
              partnerContractUpdateAvailable?: boolean | undefined
              partnerContractExpiresAt?: string | undefined
              _links?:
                | {
                    self?: Url | undefined
                    signuplink?: Url | undefined
                    documentation?: Url | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v2/profiles': {
      $post:
        | {
            input: {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            } & { json: ProfileRequest }
            output: ProfileResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            } & { json: ProfileRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            } & { json: ProfileRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            } & { json: ProfileRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
      $get:
        | {
            input: {
              query: { from?: (string | null) | undefined; limit?: (number | null) | undefined }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: {
              count: ListCount
              _embedded: { profiles: ListProfileResponse[] }
              _links: ListLinks
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { from?: (string | null) | undefined; limit?: (number | null) | undefined }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: { from?: (string | null) | undefined; limit?: (number | null) | undefined }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v2/profiles/:profileId': {
      $get:
        | {
            input: { param: { profileId: ProfileToken } } & {
              query: { testmode?: boolean | undefined }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ProfileResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { profileId: ProfileToken } } & {
              query: { testmode?: boolean | undefined }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { profileId: ProfileToken } } & {
              query: { testmode?: boolean | undefined }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 410
          }
        | {
            input: { param: { profileId: ProfileToken } } & {
              query: { testmode?: boolean | undefined }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
      $patch:
        | {
            input: { param: { profileId: ProfileToken } } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            } & {
              json: {
                name?: (string | null) | undefined
                website?: (string | null) | undefined
                email?: (string | null) | undefined
                phone?: (string | null) | undefined
                description?: (string | null) | undefined
                countriesOfActivity?: (string[] | null) | undefined
                businessCategory?: (string | null) | undefined
                mode?: Mode | undefined
              }
            }
            output: ProfileResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { profileId: ProfileToken } } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            } & {
              json: {
                name?: (string | null) | undefined
                website?: (string | null) | undefined
                email?: (string | null) | undefined
                phone?: (string | null) | undefined
                description?: (string | null) | undefined
                countriesOfActivity?: (string[] | null) | undefined
                businessCategory?: (string | null) | undefined
                mode?: Mode | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { profileId: ProfileToken } } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            } & {
              json: {
                name?: (string | null) | undefined
                website?: (string | null) | undefined
                email?: (string | null) | undefined
                phone?: (string | null) | undefined
                description?: (string | null) | undefined
                countriesOfActivity?: (string[] | null) | undefined
                businessCategory?: (string | null) | undefined
                mode?: Mode | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { profileId: ProfileToken } } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            } & {
              json: {
                name?: (string | null) | undefined
                website?: (string | null) | undefined
                email?: (string | null) | undefined
                phone?: (string | null) | undefined
                description?: (string | null) | undefined
                countriesOfActivity?: (string[] | null) | undefined
                businessCategory?: (string | null) | undefined
                mode?: Mode | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 410
          }
        | {
            input: { param: { profileId: ProfileToken } } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            } & {
              json: {
                name?: (string | null) | undefined
                website?: (string | null) | undefined
                email?: (string | null) | undefined
                phone?: (string | null) | undefined
                description?: (string | null) | undefined
                countriesOfActivity?: (string[] | null) | undefined
                businessCategory?: (string | null) | undefined
                mode?: Mode | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { profileId: ProfileToken } } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            } & {
              json: {
                name?: (string | null) | undefined
                website?: (string | null) | undefined
                email?: (string | null) | undefined
                phone?: (string | null) | undefined
                description?: (string | null) | undefined
                countriesOfActivity?: (string[] | null) | undefined
                businessCategory?: (string | null) | undefined
                mode?: Mode | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
      $delete:
        | {
            input: { param: { profileId: ProfileToken } } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { profileId: ProfileToken } } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { profileId: ProfileToken } } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 410
          }
        | {
            input: { param: { profileId: ProfileToken } } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v2/profiles/me': {
      $get:
        | {
            input: {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ProfileResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v2/onboarding/me': {
      $get:
        | {
            input: {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: EntityOnboardingStatus
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
      $post:
        | {
            input: {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            } & {
              json: {
                organization?:
                  | {
                      name?: string | undefined
                      address?: Address | undefined
                      registrationNumber?: string | undefined
                      vatNumber?: (string | null) | undefined
                      vatRegulation?: OnboardingVatRegulation | undefined
                    }
                  | undefined
                profile?:
                  | {
                      name?: string | undefined
                      url?: string | undefined
                      email?: string | undefined
                      phone?: string | undefined
                      description?: (string | null) | undefined
                      businessCategory?: string | undefined
                    }
                  | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            } & {
              json: {
                organization?:
                  | {
                      name?: string | undefined
                      address?: Address | undefined
                      registrationNumber?: string | undefined
                      vatNumber?: (string | null) | undefined
                      vatRegulation?: OnboardingVatRegulation | undefined
                    }
                  | undefined
                profile?:
                  | {
                      name?: string | undefined
                      url?: string | undefined
                      email?: string | undefined
                      phone?: string | undefined
                      description?: (string | null) | undefined
                      businessCategory?: string | undefined
                    }
                  | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v2/capabilities': {
      $get:
        | {
            input: {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: {
              count: number
              _embedded: { capabilities: EntityCapability[] }
              _links: { documentation?: Url | undefined }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v2/clients': {
      $get:
        | {
            input: {
              query: {
                embed?: (string | null) | undefined
                from?: (string | null) | undefined
                limit?: (number | null) | undefined
              }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: {
              count?: ListCount | undefined
              _embedded?:
                | {
                    clients?:
                      | {
                          resource: string
                          id: {}
                          commission?: ({ count?: number | undefined } | null) | undefined
                          organizationCreatedAt?: string | undefined
                          _links: {
                            self: Url
                            organization?: Url | undefined
                            onboarding?: Url | undefined
                          }
                          _embedded?:
                            | {
                                organization?: EntityOrganization | undefined
                                onboarding?: EntityOnboardingStatus | undefined
                                capabilities?: EntityCapability[] | undefined
                              }
                            | undefined
                        }[]
                      | undefined
                  }
                | undefined
              _links?: ListLinks | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                embed?: (string | null) | undefined
                from?: (string | null) | undefined
                limit?: (number | null) | undefined
              }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                embed?: (string | null) | undefined
                from?: (string | null) | undefined
                limit?: (number | null) | undefined
              }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                embed?: (string | null) | undefined
                from?: (string | null) | undefined
                limit?: (number | null) | undefined
              }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v2/clients/:organizationId': {
      $get:
        | {
            input: { param: { organizationId: OrganizationToken } } & {
              query: { embed?: (string | null) | undefined }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: {
              resource: string
              id: {}
              commission?: ({ count?: number | undefined } | null) | undefined
              organizationCreatedAt?: string | undefined
              _links: {
                self: Url
                organization?: Url | undefined
                onboarding?: Url | undefined
                documentation?: Url | undefined
              }
              _embedded?:
                | {
                    organization?: EntityOrganization | undefined
                    onboarding?: EntityOnboardingStatus | undefined
                    capabilities?: EntityCapability[] | undefined
                  }
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { organizationId: OrganizationToken } } & {
              query: { embed?: (string | null) | undefined }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { organizationId: OrganizationToken } } & {
              query: { embed?: (string | null) | undefined }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v2/client-links': {
      $post:
        | {
            input: {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            } & { json: ClientLinkRequest }
            output: ClientLinkResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            } & { json: ClientLinkRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            } & { json: ClientLinkRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            } & { json: ClientLinkRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v2/webhooks': {
      $post:
        | {
            input: {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            } & {
              json: {
                name: string
                url: string
                eventTypes: WebhookEventTypes[] | WebhookEventTypes
                testmode?: OauthTestmodeCreate | undefined
              }
            }
            output: CreateWebhook
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            } & {
              json: {
                name: string
                url: string
                eventTypes: WebhookEventTypes[] | WebhookEventTypes
                testmode?: OauthTestmodeCreate | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            } & {
              json: {
                name: string
                url: string
                eventTypes: WebhookEventTypes[] | WebhookEventTypes
                testmode?: OauthTestmodeCreate | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
      $get:
        | {
            input: {
              query: {
                from?: (string | null) | undefined
                limit?: (number | null) | undefined
                sort?: Sorting | undefined
                eventTypes?: WebhookEventTypes | undefined
                testmode?: boolean | undefined
              }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: {
              count: ListCount
              _embedded: { webhooks: ListEntityWebhook[] }
              _links: ListLinks
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                from?: (string | null) | undefined
                limit?: (number | null) | undefined
                sort?: Sorting | undefined
                eventTypes?: WebhookEventTypes | undefined
                testmode?: boolean | undefined
              }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                from?: (string | null) | undefined
                limit?: (number | null) | undefined
                sort?: Sorting | undefined
                eventTypes?: WebhookEventTypes | undefined
                testmode?: boolean | undefined
              }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v2/webhooks/:webhookId': {
      $patch:
        | {
            input: { param: { webhookId: WebhookToken } } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            } & {
              json: {
                name?: string | undefined
                url?: string | undefined
                eventTypes?: WebhookEventTypes[] | WebhookEventTypes | undefined
                testmode?: TestmodePatch | undefined
              }
            }
            output: EntityWebhook
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { webhookId: WebhookToken } } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            } & {
              json: {
                name?: string | undefined
                url?: string | undefined
                eventTypes?: WebhookEventTypes[] | WebhookEventTypes | undefined
                testmode?: TestmodePatch | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { webhookId: WebhookToken } } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            } & {
              json: {
                name?: string | undefined
                url?: string | undefined
                eventTypes?: WebhookEventTypes[] | WebhookEventTypes | undefined
                testmode?: TestmodePatch | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { webhookId: WebhookToken } } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            } & {
              json: {
                name?: string | undefined
                url?: string | undefined
                eventTypes?: WebhookEventTypes[] | WebhookEventTypes | undefined
                testmode?: TestmodePatch | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
      $get:
        | {
            input: { param: { webhookId: WebhookToken } } & {
              query: { testmode?: boolean | undefined }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: EntityWebhook
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { webhookId: WebhookToken } } & {
              query: { testmode?: boolean | undefined }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { webhookId: WebhookToken } } & {
              query: { testmode?: boolean | undefined }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { webhookId: WebhookToken } } & {
              query: { testmode?: boolean | undefined }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
      $delete:
        | {
            input: { param: { webhookId: WebhookToken } } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            } & { json: { testmode?: OauthTestmode | undefined } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { webhookId: WebhookToken } } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            } & { json: { testmode?: OauthTestmode | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { webhookId: WebhookToken } } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            } & { json: { testmode?: OauthTestmode | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { webhookId: WebhookToken } } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            } & { json: { testmode?: OauthTestmode | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v2/webhooks/:webhookId/ping': {
      $post:
        | {
            input: { param: { webhookId: WebhookToken } } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            } & { json: { testmode?: OauthTestmode | undefined } }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { webhookId: WebhookToken } } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            } & { json: { testmode?: OauthTestmode | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { webhookId: WebhookToken } } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            } & { json: { testmode?: OauthTestmode | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { webhookId: WebhookToken } } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            } & { json: { testmode?: OauthTestmode | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v2/events/:webhookEventId': {
      $get:
        | {
            input: { param: { webhookEventId: WebhookEventToken } } & {
              query: { testmode?: boolean | undefined }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: EntityWebhookEvent
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { webhookEventId: WebhookEventToken } } & {
              query: { testmode?: boolean | undefined }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { webhookEventId: WebhookEventToken } } & {
              query: { testmode?: boolean | undefined }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v2/connect/balance-transfers': {
      $post:
        | {
            input: {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            } & { json: EntityBalanceTransfer }
            output: EntityBalanceTransferResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            } & { json: EntityBalanceTransfer }
            output: ErrorResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            } & { json: EntityBalanceTransfer }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
      $get:
        | {
            input: {
              query: {
                from?: (string | null) | undefined
                limit?: (number | null) | undefined
                sort?: Sorting | undefined
                testmode?: boolean | undefined
              }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: {
              count: ListCount
              _embedded: { connect_balance_transfers: EntityBalanceTransferResponse[] }
              _links: ListLinks
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                from?: (string | null) | undefined
                limit?: (number | null) | undefined
                sort?: Sorting | undefined
                testmode?: boolean | undefined
              }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                from?: (string | null) | undefined
                limit?: (number | null) | undefined
                sort?: Sorting | undefined
                testmode?: boolean | undefined
              }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v2/connect/balance-transfers/:balanceTransferId': {
      $get:
        | {
            input: { param: { balanceTransferId: ConnectBalanceTransferToken } } & {
              query: { testmode?: boolean | undefined }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: EntityBalanceTransferResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { balanceTransferId: ConnectBalanceTransferToken } } & {
              query: { testmode?: boolean | undefined }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { balanceTransferId: ConnectBalanceTransferToken } } & {
              query: { testmode?: boolean | undefined }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v2/payments': {
      $post:
        | {
            input: { query: { include?: (string | null) | undefined } } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            } & { json: PaymentRequest }
            output: PaymentResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { query: { include?: (string | null) | undefined } } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            } & { json: PaymentRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { include?: (string | null) | undefined } } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            } & { json: PaymentRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { query: { include?: (string | null) | undefined } } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            } & { json: PaymentRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 503
          }
      $get:
        | {
            input: {
              query: {
                from?: PaymentToken | undefined
                limit?: (number | null) | undefined
                sort?: Sorting | undefined
                profileId?: ProfileToken | undefined
                testmode?: boolean | undefined
              }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: {
              count: ListCount
              _embedded: { payments?: ListPaymentResponse[] | undefined }
              _links: ListLinks
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                from?: PaymentToken | undefined
                limit?: (number | null) | undefined
                sort?: Sorting | undefined
                profileId?: ProfileToken | undefined
                testmode?: boolean | undefined
              }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                from?: PaymentToken | undefined
                limit?: (number | null) | undefined
                sort?: Sorting | undefined
                profileId?: ProfileToken | undefined
                testmode?: boolean | undefined
              }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v2/payments/:paymentId': {
      $get:
        | {
            input: { param: { paymentId: PaymentToken } } & {
              query: {
                include?: (string | null) | undefined
                embed?: (string | null) | undefined
                testmode?: boolean | undefined
              }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: PaymentResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { paymentId: PaymentToken } } & {
              query: {
                include?: (string | null) | undefined
                embed?: (string | null) | undefined
                testmode?: boolean | undefined
              }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { paymentId: PaymentToken } } & {
              query: {
                include?: (string | null) | undefined
                embed?: (string | null) | undefined
                testmode?: boolean | undefined
              }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
      $patch:
        | {
            input: { param: { paymentId: PaymentToken } } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            } & {
              json: {
                description?: Description | undefined
                redirectUrl?: RedirectUrl | undefined
                cancelUrl?: CancelUrl | undefined
                webhookUrl?: WebhookUrl | undefined
                metadata?: Metadata | undefined
                method?: MethodRequest | undefined
                locale?: Locale_2 | undefined
                dueDate?: DueDate | undefined
                restrictPaymentMethodsToCountry?: RestrictPaymentMethodsToCountry | undefined
                testmode?: TestmodePatch | undefined
                issuer?: Issuer | undefined
                billingAddress?: BillingAddress | undefined
                shippingAddress?: ShippingAddress | undefined
                billingEmail?: string | undefined
              }
            }
            output: PaymentResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { paymentId: PaymentToken } } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            } & {
              json: {
                description?: Description | undefined
                redirectUrl?: RedirectUrl | undefined
                cancelUrl?: CancelUrl | undefined
                webhookUrl?: WebhookUrl | undefined
                metadata?: Metadata | undefined
                method?: MethodRequest | undefined
                locale?: Locale_2 | undefined
                dueDate?: DueDate | undefined
                restrictPaymentMethodsToCountry?: RestrictPaymentMethodsToCountry | undefined
                testmode?: TestmodePatch | undefined
                issuer?: Issuer | undefined
                billingAddress?: BillingAddress | undefined
                shippingAddress?: ShippingAddress | undefined
                billingEmail?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { paymentId: PaymentToken } } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            } & {
              json: {
                description?: Description | undefined
                redirectUrl?: RedirectUrl | undefined
                cancelUrl?: CancelUrl | undefined
                webhookUrl?: WebhookUrl | undefined
                metadata?: Metadata | undefined
                method?: MethodRequest | undefined
                locale?: Locale_2 | undefined
                dueDate?: DueDate | undefined
                restrictPaymentMethodsToCountry?: RestrictPaymentMethodsToCountry | undefined
                testmode?: TestmodePatch | undefined
                issuer?: Issuer | undefined
                billingAddress?: BillingAddress | undefined
                shippingAddress?: ShippingAddress | undefined
                billingEmail?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { paymentId: PaymentToken } } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            } & {
              json: {
                description?: Description | undefined
                redirectUrl?: RedirectUrl | undefined
                cancelUrl?: CancelUrl | undefined
                webhookUrl?: WebhookUrl | undefined
                metadata?: Metadata | undefined
                method?: MethodRequest | undefined
                locale?: Locale_2 | undefined
                dueDate?: DueDate | undefined
                restrictPaymentMethodsToCountry?: RestrictPaymentMethodsToCountry | undefined
                testmode?: TestmodePatch | undefined
                issuer?: Issuer | undefined
                billingAddress?: BillingAddress | undefined
                shippingAddress?: ShippingAddress | undefined
                billingEmail?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
      $delete:
        | {
            input: { param: { paymentId: PaymentToken } } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            } & { json: { testmode?: TestmodeCreate | undefined } }
            output: PaymentResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { paymentId: PaymentToken } } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            } & { json: { testmode?: TestmodeCreate | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { paymentId: PaymentToken } } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            } & { json: { testmode?: TestmodeCreate | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { paymentId: PaymentToken } } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            } & { json: { testmode?: TestmodeCreate | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v2/payments/:paymentId/release-authorization': {
      $post:
        | {
            input: { param: { paymentId: PaymentToken } } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            } & {
              json: { profileId?: ProfileId | undefined; testmode?: TestmodeCreate | undefined }
            }
            output: {}
            outputFormat: string
            status: 202
          }
        | {
            input: { param: { paymentId: PaymentToken } } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            } & {
              json: { profileId?: ProfileId | undefined; testmode?: TestmodeCreate | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { paymentId: PaymentToken } } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            } & {
              json: { profileId?: ProfileId | undefined; testmode?: TestmodeCreate | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { paymentId: PaymentToken } } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            } & {
              json: { profileId?: ProfileId | undefined; testmode?: TestmodeCreate | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v2/unmatched-credit-transfers': {
      $get:
        | {
            input: {
              query: { from?: (string | null) | undefined; limit?: (number | null) | undefined }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: {
              count: ListCount
              _embedded: { 'unmatched-credit-transfers': ListEntityUnmatchedCreditTransfer[] }
              _links: ListLinks
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { from?: (string | null) | undefined; limit?: (number | null) | undefined }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: { from?: (string | null) | undefined; limit?: (number | null) | undefined }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v2/unmatched-credit-transfers/:unmatchedCreditTransferId': {
      $get:
        | {
            input: { param: { unmatchedCreditTransferId: UnmatchedCreditTransferToken } } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: EntityUnmatchedCreditTransfer
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { unmatchedCreditTransferId: UnmatchedCreditTransferToken } } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { unmatchedCreditTransferId: UnmatchedCreditTransferToken } } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v2/unmatched-credit-transfers/:unmatchedCreditTransferId/match': {
      $post:
        | {
            input: { param: { unmatchedCreditTransferId: UnmatchedCreditTransferToken } } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            } & { json: UnmatchedCreditTransferMatchRequest }
            output: UnmatchedCreditTransferActionResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { unmatchedCreditTransferId: UnmatchedCreditTransferToken } } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            } & { json: UnmatchedCreditTransferMatchRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { unmatchedCreditTransferId: UnmatchedCreditTransferToken } } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            } & { json: UnmatchedCreditTransferMatchRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { unmatchedCreditTransferId: UnmatchedCreditTransferToken } } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            } & { json: UnmatchedCreditTransferMatchRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v2/unmatched-credit-transfers/:unmatchedCreditTransferId/return': {
      $post:
        | {
            input: { param: { unmatchedCreditTransferId: UnmatchedCreditTransferToken } } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: UnmatchedCreditTransferActionResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { unmatchedCreditTransferId: UnmatchedCreditTransferToken } } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { unmatchedCreditTransferId: UnmatchedCreditTransferToken } } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v2/sessions': {
      $post:
        | {
            input: {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            } & { json: SessionRequest }
            output: SessionResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            } & { json: SessionRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            } & { json: SessionRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v2/sessions/:sessionId': {
      $get:
        | {
            input: { param: { sessionId: SessionToken } } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: SessionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sessionId: SessionToken } } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v2/methods': {
      $get:
        | {
            input: {
              query: {
                sequenceType?: SequenceType | undefined
                locale?: Locale | undefined
                amount?: Amount | undefined
                resource?: MethodResourceParameter | undefined
                billingCountry?: string | undefined
                includeWallets?: MethodIncludeWalletsParameter | undefined
                orderLineCategories?: LineCategories | undefined
                profileId?: ProfileToken | undefined
                include?: (string | null) | undefined
                testmode?: boolean | undefined
              }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: {
              count: number
              _embedded: { methods: ListEntityMethod[] }
              _links: { self: Url; documentation: Url }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                sequenceType?: SequenceType | undefined
                locale?: Locale | undefined
                amount?: Amount | undefined
                resource?: MethodResourceParameter | undefined
                billingCountry?: string | undefined
                includeWallets?: MethodIncludeWalletsParameter | undefined
                orderLineCategories?: LineCategories | undefined
                profileId?: ProfileToken | undefined
                include?: (string | null) | undefined
                testmode?: boolean | undefined
              }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                sequenceType?: SequenceType | undefined
                locale?: Locale | undefined
                amount?: Amount | undefined
                resource?: MethodResourceParameter | undefined
                billingCountry?: string | undefined
                includeWallets?: MethodIncludeWalletsParameter | undefined
                orderLineCategories?: LineCategories | undefined
                profileId?: ProfileToken | undefined
                include?: (string | null) | undefined
                testmode?: boolean | undefined
              }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v2/methods/all': {
      $get:
        | {
            input: {
              query: {
                locale?: Locale | undefined
                amount?: Amount | undefined
                include?: (string | null) | undefined
                sequenceType?: SequenceType | undefined
                profileId?: ProfileToken | undefined
                testmode?: boolean | undefined
              }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: {
              count: number
              _embedded: { methods: ListEntityMethodAll[] }
              _links: { self: Url; documentation: Url }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                locale?: Locale | undefined
                amount?: Amount | undefined
                include?: (string | null) | undefined
                sequenceType?: SequenceType | undefined
                profileId?: ProfileToken | undefined
                testmode?: boolean | undefined
              }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                locale?: Locale | undefined
                amount?: Amount | undefined
                include?: (string | null) | undefined
                sequenceType?: SequenceType | undefined
                profileId?: ProfileToken | undefined
                testmode?: boolean | undefined
              }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v2/methods/:methodId': {
      $get:
        | {
            input: { param: { methodId: MethodId } } & {
              query: {
                locale?: Locale | undefined
                currency?: string | undefined
                profileId?: ProfileToken | undefined
                include?: (string | null) | undefined
                sequenceType?: SequenceType | undefined
                testmode?: boolean | undefined
              }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: EntityMethodGet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { methodId: MethodId } } & {
              query: {
                locale?: Locale | undefined
                currency?: string | undefined
                profileId?: ProfileToken | undefined
                include?: (string | null) | undefined
                sequenceType?: SequenceType | undefined
                testmode?: boolean | undefined
              }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { methodId: MethodId } } & {
              query: {
                locale?: Locale | undefined
                currency?: string | undefined
                profileId?: ProfileToken | undefined
                include?: (string | null) | undefined
                sequenceType?: SequenceType | undefined
                testmode?: boolean | undefined
              }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { methodId: MethodId } } & {
              query: {
                locale?: Locale | undefined
                currency?: string | undefined
                profileId?: ProfileToken | undefined
                include?: (string | null) | undefined
                sequenceType?: SequenceType | undefined
                testmode?: boolean | undefined
              }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v2/profiles/:profileId/methods/:methodId': {
      $post:
        | {
            input: { param: { profileId: ProfileToken; methodId: MethodId } } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: EntityMethodGet
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { profileId: ProfileToken; methodId: MethodId } } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { profileId: ProfileToken; methodId: MethodId } } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { profileId: ProfileToken; methodId: MethodId } } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
      $delete:
        | {
            input: { param: { profileId: ProfileToken; methodId: MethodId } } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { profileId: ProfileToken; methodId: MethodId } } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { profileId: ProfileToken; methodId: MethodId } } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v2/profiles/:profileId/methods/:methodId/issuers/:issuerId': {
      $post:
        | {
            input: {
              param: { profileId: ProfileToken; methodId: MethodIdWithIssuer; issuerId: string }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            } & { json: { contractId?: (string | null) | undefined } }
            output: Giftcard | Voucher
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              param: { profileId: ProfileToken; methodId: MethodIdWithIssuer; issuerId: string }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            } & { json: { contractId?: (string | null) | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: { profileId: ProfileToken; methodId: MethodIdWithIssuer; issuerId: string }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            } & { json: { contractId?: (string | null) | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              param: { profileId: ProfileToken; methodId: MethodIdWithIssuer; issuerId: string }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            } & { json: { contractId?: (string | null) | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
      $delete:
        | {
            input: {
              param: { profileId: ProfileToken; methodId: MethodIdWithIssuer; issuerId: string }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: {
              param: { profileId: ProfileToken; methodId: MethodIdWithIssuer; issuerId: string }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: { profileId: ProfileToken; methodId: MethodIdWithIssuer; issuerId: string }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              param: { profileId: ProfileToken; methodId: MethodIdWithIssuer; issuerId: string }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v2/payments/:paymentId/refunds': {
      $post:
        | {
            input: { param: { paymentId: PaymentToken } } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            } & { json: RefundRequest }
            output: RefundResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { paymentId: PaymentToken } } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            } & { json: RefundRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { paymentId: PaymentToken } } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            } & { json: RefundRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { paymentId: PaymentToken } } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            } & { json: RefundRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { paymentId: PaymentToken } } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            } & { json: RefundRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
      $get:
        | {
            input: { param: { paymentId: PaymentToken } } & {
              query: {
                from?: RefundToken | undefined
                limit?: (number | null) | undefined
                embed?: (string | null) | undefined
                testmode?: boolean | undefined
              }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: {
              count: ListCount
              _embedded: { refunds: ListRefundResponse[] }
              _links: ListLinks
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { paymentId: PaymentToken } } & {
              query: {
                from?: RefundToken | undefined
                limit?: (number | null) | undefined
                embed?: (string | null) | undefined
                testmode?: boolean | undefined
              }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { paymentId: PaymentToken } } & {
              query: {
                from?: RefundToken | undefined
                limit?: (number | null) | undefined
                embed?: (string | null) | undefined
                testmode?: boolean | undefined
              }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { paymentId: PaymentToken } } & {
              query: {
                from?: RefundToken | undefined
                limit?: (number | null) | undefined
                embed?: (string | null) | undefined
                testmode?: boolean | undefined
              }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v2/payments/:paymentId/refunds/:refundId': {
      $get:
        | {
            input: { param: { paymentId: PaymentToken; refundId: RefundToken } } & {
              query: { embed?: (string | null) | undefined; testmode?: boolean | undefined }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: RefundResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { paymentId: PaymentToken; refundId: RefundToken } } & {
              query: { embed?: (string | null) | undefined; testmode?: boolean | undefined }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { paymentId: PaymentToken; refundId: RefundToken } } & {
              query: { embed?: (string | null) | undefined; testmode?: boolean | undefined }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
      $delete:
        | {
            input: { param: { paymentId: PaymentToken; refundId: RefundToken } } & {
              query: { testmode?: boolean | undefined }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { paymentId: PaymentToken; refundId: RefundToken } } & {
              query: { testmode?: boolean | undefined }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { paymentId: PaymentToken; refundId: RefundToken } } & {
              query: { testmode?: boolean | undefined }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v2/refunds': {
      $get:
        | {
            input: {
              query: {
                from?: RefundToken | undefined
                limit?: (number | null) | undefined
                sort?: Sorting | undefined
                embed?: (string | null) | undefined
                profileId?: ProfileToken | undefined
                testmode?: boolean | undefined
              }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: {
              count: ListCount
              _embedded: { refunds: ListRefundResponse[] }
              _links: ListLinks
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                from?: RefundToken | undefined
                limit?: (number | null) | undefined
                sort?: Sorting | undefined
                embed?: (string | null) | undefined
                profileId?: ProfileToken | undefined
                testmode?: boolean | undefined
              }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                from?: RefundToken | undefined
                limit?: (number | null) | undefined
                sort?: Sorting | undefined
                embed?: (string | null) | undefined
                profileId?: ProfileToken | undefined
                testmode?: boolean | undefined
              }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v2/payments/:paymentId/chargebacks': {
      $get:
        | {
            input: { param: { paymentId: PaymentToken } } & {
              query: {
                from?: ChargebackToken | undefined
                limit?: (number | null) | undefined
                embed?: (string | null) | undefined
                testmode?: boolean | undefined
              }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: {
              count: ListCount
              _embedded: { chargebacks: ListEntityChargeback[] }
              _links: ListLinks
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { paymentId: PaymentToken } } & {
              query: {
                from?: ChargebackToken | undefined
                limit?: (number | null) | undefined
                embed?: (string | null) | undefined
                testmode?: boolean | undefined
              }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { paymentId: PaymentToken } } & {
              query: {
                from?: ChargebackToken | undefined
                limit?: (number | null) | undefined
                embed?: (string | null) | undefined
                testmode?: boolean | undefined
              }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { paymentId: PaymentToken } } & {
              query: {
                from?: ChargebackToken | undefined
                limit?: (number | null) | undefined
                embed?: (string | null) | undefined
                testmode?: boolean | undefined
              }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v2/payments/:paymentId/chargebacks/:chargebackId': {
      $get:
        | {
            input: { param: { paymentId: PaymentToken; chargebackId: ChargebackToken } } & {
              query: { embed?: (string | null) | undefined; testmode?: boolean | undefined }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: EntityChargeback
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { paymentId: PaymentToken; chargebackId: ChargebackToken } } & {
              query: { embed?: (string | null) | undefined; testmode?: boolean | undefined }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { paymentId: PaymentToken; chargebackId: ChargebackToken } } & {
              query: { embed?: (string | null) | undefined; testmode?: boolean | undefined }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v2/chargebacks': {
      $get:
        | {
            input: {
              query: {
                from?: ChargebackToken | undefined
                limit?: (number | null) | undefined
                embed?: (string | null) | undefined
                sort?: Sorting | undefined
                profileId?: ProfileToken | undefined
                testmode?: boolean | undefined
              }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: {
              count: ListCount
              _embedded: { chargebacks: ListEntityChargeback[] }
              _links: ListLinks
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                from?: ChargebackToken | undefined
                limit?: (number | null) | undefined
                embed?: (string | null) | undefined
                sort?: Sorting | undefined
                profileId?: ProfileToken | undefined
                testmode?: boolean | undefined
              }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                from?: ChargebackToken | undefined
                limit?: (number | null) | undefined
                embed?: (string | null) | undefined
                sort?: Sorting | undefined
                profileId?: ProfileToken | undefined
                testmode?: boolean | undefined
              }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                from?: ChargebackToken | undefined
                limit?: (number | null) | undefined
                embed?: (string | null) | undefined
                sort?: Sorting | undefined
                profileId?: ProfileToken | undefined
                testmode?: boolean | undefined
              }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v2/payments/:paymentId/captures': {
      $post:
        | {
            input: { param: { paymentId: PaymentToken } } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            } & { json: EntityCapture }
            output: CaptureResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { paymentId: PaymentToken } } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            } & { json: EntityCapture }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { paymentId: PaymentToken } } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            } & { json: EntityCapture }
            output: ErrorResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { paymentId: PaymentToken } } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            } & { json: EntityCapture }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
      $get:
        | {
            input: { param: { paymentId: PaymentToken } } & {
              query: {
                from?: CaptureToken | undefined
                limit?: (number | null) | undefined
                embed?: (string | null) | undefined
                testmode?: boolean | undefined
              }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: {
              count: ListCount
              _embedded: { captures: ListCaptureResponse[] }
              _links: ListLinks
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { paymentId: PaymentToken } } & {
              query: {
                from?: CaptureToken | undefined
                limit?: (number | null) | undefined
                embed?: (string | null) | undefined
                testmode?: boolean | undefined
              }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { paymentId: PaymentToken } } & {
              query: {
                from?: CaptureToken | undefined
                limit?: (number | null) | undefined
                embed?: (string | null) | undefined
                testmode?: boolean | undefined
              }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { paymentId: PaymentToken } } & {
              query: {
                from?: CaptureToken | undefined
                limit?: (number | null) | undefined
                embed?: (string | null) | undefined
                testmode?: boolean | undefined
              }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v2/payments/:paymentId/captures/:captureId': {
      $get:
        | {
            input: { param: { paymentId: PaymentToken; captureId: CaptureToken } } & {
              query: { embed?: (string | null) | undefined; testmode?: boolean | undefined }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: CaptureResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { paymentId: PaymentToken; captureId: CaptureToken } } & {
              query: { embed?: (string | null) | undefined; testmode?: boolean | undefined }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { paymentId: PaymentToken; captureId: CaptureToken } } & {
              query: { embed?: (string | null) | undefined; testmode?: boolean | undefined }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v2/wallets/applepay/sessions': {
      $post:
        | {
            input: {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            } & {
              json: { validationUrl: string; domain: string; profileId?: ProfileToken | undefined }
            }
            output: EntitySession_2
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            } & {
              json: { validationUrl: string; domain: string; profileId?: ProfileToken | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            } & {
              json: { validationUrl: string; domain: string; profileId?: ProfileToken | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v2/payment-links': {
      $post:
        | {
            input: {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            } & {
              json: {
                resource?: string | undefined
                id?: {} | undefined
                mode?: Mode | undefined
                description: string
                amount?: AmountNullable | undefined
                minimumAmount?: AmountNullable | undefined
                archived?: boolean | undefined
                redirectUrl?: (string | null) | undefined
                webhookUrl?: (string | null) | undefined
                lines?: (PaymentLineItem[] | null) | undefined
                billingAddress?: PaymentAddress | undefined
                shippingAddress?: PaymentAddress | undefined
                profileId?: (string | null) | undefined
                reusable?: (boolean | null) | undefined
                createdAt?: CreatedAt | undefined
                paidAt?: (string | null) | undefined
                expiresAt?: (string | null) | undefined
                allowedMethods?: PaymentLinkMethods | undefined
                applicationFee?: { amount: Amount; description: string } | undefined
                sequenceType?: PaymentLinkSequenceType | undefined
                customerId?: (string | null) | undefined
                testmode?: TestmodeCreate | undefined
                _links?: { self: Url; paymentLink: Url } | undefined
              }
            }
            output: PaymentLinkResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            } & {
              json: {
                resource?: string | undefined
                id?: {} | undefined
                mode?: Mode | undefined
                description: string
                amount?: AmountNullable | undefined
                minimumAmount?: AmountNullable | undefined
                archived?: boolean | undefined
                redirectUrl?: (string | null) | undefined
                webhookUrl?: (string | null) | undefined
                lines?: (PaymentLineItem[] | null) | undefined
                billingAddress?: PaymentAddress | undefined
                shippingAddress?: PaymentAddress | undefined
                profileId?: (string | null) | undefined
                reusable?: (boolean | null) | undefined
                createdAt?: CreatedAt | undefined
                paidAt?: (string | null) | undefined
                expiresAt?: (string | null) | undefined
                allowedMethods?: PaymentLinkMethods | undefined
                applicationFee?: { amount: Amount; description: string } | undefined
                sequenceType?: PaymentLinkSequenceType | undefined
                customerId?: (string | null) | undefined
                testmode?: TestmodeCreate | undefined
                _links?: { self: Url; paymentLink: Url } | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            } & {
              json: {
                resource?: string | undefined
                id?: {} | undefined
                mode?: Mode | undefined
                description: string
                amount?: AmountNullable | undefined
                minimumAmount?: AmountNullable | undefined
                archived?: boolean | undefined
                redirectUrl?: (string | null) | undefined
                webhookUrl?: (string | null) | undefined
                lines?: (PaymentLineItem[] | null) | undefined
                billingAddress?: PaymentAddress | undefined
                shippingAddress?: PaymentAddress | undefined
                profileId?: (string | null) | undefined
                reusable?: (boolean | null) | undefined
                createdAt?: CreatedAt | undefined
                paidAt?: (string | null) | undefined
                expiresAt?: (string | null) | undefined
                allowedMethods?: PaymentLinkMethods | undefined
                applicationFee?: { amount: Amount; description: string } | undefined
                sequenceType?: PaymentLinkSequenceType | undefined
                customerId?: (string | null) | undefined
                testmode?: TestmodeCreate | undefined
                _links?: { self: Url; paymentLink: Url } | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            } & {
              json: {
                resource?: string | undefined
                id?: {} | undefined
                mode?: Mode | undefined
                description: string
                amount?: AmountNullable | undefined
                minimumAmount?: AmountNullable | undefined
                archived?: boolean | undefined
                redirectUrl?: (string | null) | undefined
                webhookUrl?: (string | null) | undefined
                lines?: (PaymentLineItem[] | null) | undefined
                billingAddress?: PaymentAddress | undefined
                shippingAddress?: PaymentAddress | undefined
                profileId?: (string | null) | undefined
                reusable?: (boolean | null) | undefined
                createdAt?: CreatedAt | undefined
                paidAt?: (string | null) | undefined
                expiresAt?: (string | null) | undefined
                allowedMethods?: PaymentLinkMethods | undefined
                applicationFee?: { amount: Amount; description: string } | undefined
                sequenceType?: PaymentLinkSequenceType | undefined
                customerId?: (string | null) | undefined
                testmode?: TestmodeCreate | undefined
                _links?: { self: Url; paymentLink: Url } | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
      $get:
        | {
            input: {
              query: {
                from?: PaymentLinkToken | undefined
                limit?: (number | null) | undefined
                testmode?: boolean | undefined
              }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: {
              count: ListCount
              _embedded: { payment_links?: PaymentLinkResponse[] | undefined }
              _links: ListLinks
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                from?: PaymentLinkToken | undefined
                limit?: (number | null) | undefined
                testmode?: boolean | undefined
              }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                from?: PaymentLinkToken | undefined
                limit?: (number | null) | undefined
                testmode?: boolean | undefined
              }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v2/payment-links/:paymentLinkId': {
      $get:
        | {
            input: { param: { paymentLinkId: PaymentLinkToken } } & {
              query: { testmode?: boolean | undefined }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: PaymentLinkResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { paymentLinkId: PaymentLinkToken } } & {
              query: { testmode?: boolean | undefined }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { paymentLinkId: PaymentLinkToken } } & {
              query: { testmode?: boolean | undefined }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
      $patch:
        | {
            input: { param: { paymentLinkId: PaymentLinkToken } } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            } & {
              json: {
                description?: string | undefined
                minimumAmount?: Amount | undefined
                archived?: boolean | undefined
                allowedMethods?: PaymentLinkMethods | undefined
                lines?: (PaymentLineItem[] | null) | undefined
                billingAddress?: PaymentAddress | undefined
                shippingAddress?: PaymentAddress | undefined
                testmode?: TestmodePatch | undefined
              }
            }
            output: PaymentLinkResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { paymentLinkId: PaymentLinkToken } } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            } & {
              json: {
                description?: string | undefined
                minimumAmount?: Amount | undefined
                archived?: boolean | undefined
                allowedMethods?: PaymentLinkMethods | undefined
                lines?: (PaymentLineItem[] | null) | undefined
                billingAddress?: PaymentAddress | undefined
                shippingAddress?: PaymentAddress | undefined
                testmode?: TestmodePatch | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { paymentLinkId: PaymentLinkToken } } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            } & {
              json: {
                description?: string | undefined
                minimumAmount?: Amount | undefined
                archived?: boolean | undefined
                allowedMethods?: PaymentLinkMethods | undefined
                lines?: (PaymentLineItem[] | null) | undefined
                billingAddress?: PaymentAddress | undefined
                shippingAddress?: PaymentAddress | undefined
                testmode?: TestmodePatch | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { paymentLinkId: PaymentLinkToken } } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            } & {
              json: {
                description?: string | undefined
                minimumAmount?: Amount | undefined
                archived?: boolean | undefined
                allowedMethods?: PaymentLinkMethods | undefined
                lines?: (PaymentLineItem[] | null) | undefined
                billingAddress?: PaymentAddress | undefined
                shippingAddress?: PaymentAddress | undefined
                testmode?: TestmodePatch | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
      $delete:
        | {
            input: { param: { paymentLinkId: PaymentLinkToken } } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            } & { json: { testmode?: Testmode | undefined } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { paymentLinkId: PaymentLinkToken } } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            } & { json: { testmode?: Testmode | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { paymentLinkId: PaymentLinkToken } } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            } & { json: { testmode?: Testmode | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { paymentLinkId: PaymentLinkToken } } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            } & { json: { testmode?: Testmode | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v2/payment-links/:paymentLinkId/payments': {
      $get:
        | {
            input: { param: { paymentLinkId: PaymentLinkToken } } & {
              query: {
                from?: PaymentToken | undefined
                limit?: (number | null) | undefined
                sort?: Sorting | undefined
                testmode?: boolean | undefined
              }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: {
              count: ListCount
              _embedded: { payments?: ListPaymentResponse[] | undefined }
              _links: ListLinks
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { paymentLinkId: PaymentLinkToken } } & {
              query: {
                from?: PaymentToken | undefined
                limit?: (number | null) | undefined
                sort?: Sorting | undefined
                testmode?: boolean | undefined
              }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { paymentLinkId: PaymentLinkToken } } & {
              query: {
                from?: PaymentToken | undefined
                limit?: (number | null) | undefined
                sort?: Sorting | undefined
                testmode?: boolean | undefined
              }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v2/terminals': {
      $get:
        | {
            input: {
              query: {
                from?: TerminalToken | undefined
                limit?: (number | null) | undefined
                sort?: Sorting | undefined
                testmode?: boolean | undefined
              }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: {
              count: ListCount
              _embedded: { terminals?: ListEntityTerminal[] | undefined }
              _links: ListLinks
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                from?: TerminalToken | undefined
                limit?: (number | null) | undefined
                sort?: Sorting | undefined
                testmode?: boolean | undefined
              }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                from?: TerminalToken | undefined
                limit?: (number | null) | undefined
                sort?: Sorting | undefined
                testmode?: boolean | undefined
              }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v2/terminals/:terminalId': {
      $get:
        | {
            input: { param: { terminalId: TerminalToken } } & {
              query: { testmode?: boolean | undefined }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: EntityTerminal
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { terminalId: TerminalToken } } & {
              query: { testmode?: boolean | undefined }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { terminalId: TerminalToken } } & {
              query: { testmode?: boolean | undefined }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v2/terminals/pairing-codes': {
      $post:
        | {
            input: { query: { include?: (string | null) | undefined } } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            } & { json: { profileId: string } }
            output: EntityPairingCode
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { query: { include?: (string | null) | undefined } } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            } & { json: { profileId: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { include?: (string | null) | undefined } } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            } & { json: { profileId: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { include?: (string | null) | undefined } } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            } & { json: { profileId: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
      $get:
        | {
            input: {
              query: {
                from?: (string | null) | undefined
                limit?: (number | null) | undefined
                sort?: Sorting | undefined
                profileId?: string | undefined
              }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: {
              count?: ListCount | undefined
              _embedded?:
                | { 'terminal-pairing-codes'?: { [x: string]: unknown }[] | undefined }
                | undefined
              _links?: ListLinks | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                from?: (string | null) | undefined
                limit?: (number | null) | undefined
                sort?: Sorting | undefined
                profileId?: string | undefined
              }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                from?: (string | null) | undefined
                limit?: (number | null) | undefined
                sort?: Sorting | undefined
                profileId?: string | undefined
              }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v2/terminals/pairing-codes/:pairingCodeId': {
      $get:
        | {
            input: { param: { pairingCodeId: TerminalPairingCodeToken } } & {
              query: { include?: (string | null) | undefined }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: EntityPairingCode
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pairingCodeId: TerminalPairingCodeToken } } & {
              query: { include?: (string | null) | undefined }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pairingCodeId: TerminalPairingCodeToken } } & {
              query: { include?: (string | null) | undefined }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
      $delete:
        | {
            input: { param: { pairingCodeId: TerminalPairingCodeToken } } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: EntityPairingCode
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { pairingCodeId: TerminalPairingCodeToken } } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { pairingCodeId: TerminalPairingCodeToken } } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { pairingCodeId: TerminalPairingCodeToken } } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v2/payments/:paymentId/routes': {
      $post:
        | {
            input: { param: { paymentId: PaymentToken } } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            } & { json: RouteCreateRequest }
            output: RouteCreateResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { paymentId: PaymentToken } } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            } & { json: RouteCreateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { paymentId: PaymentToken } } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            } & { json: RouteCreateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
      $get:
        | {
            input: { param: { paymentId: PaymentToken } } & {
              query: { testmode?: boolean | undefined }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: {
              count: ListCount
              _embedded: { routes: ListRouteGetResponse[] }
              _links: { self?: Url | undefined; documentation?: Url | undefined }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { paymentId: PaymentToken } } & {
              query: { testmode?: boolean | undefined }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { paymentId: PaymentToken } } & {
              query: { testmode?: boolean | undefined }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v2/payments/:paymentId/routes/:routeId': {
      $get:
        | {
            input: { param: { paymentId: PaymentToken; routeId: ConnectRouteToken } } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: RouteGetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { paymentId: PaymentToken; routeId: ConnectRouteToken } } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { paymentId: PaymentToken; routeId: ConnectRouteToken } } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v2/customers': {
      $post:
        | {
            input: {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            } & { json: EntityCustomer }
            output: CustomerResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            } & { json: EntityCustomer }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            } & { json: EntityCustomer }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
      $get:
        | {
            input: {
              query: {
                from?: CustomerToken | undefined
                limit?: (number | null) | undefined
                sort?: Sorting | undefined
                testmode?: boolean | undefined
              }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: {
              count: ListCount
              _embedded: { customers: ListCustomerResponse[] }
              _links: ListLinks
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                from?: CustomerToken | undefined
                limit?: (number | null) | undefined
                sort?: Sorting | undefined
                testmode?: boolean | undefined
              }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                from?: CustomerToken | undefined
                limit?: (number | null) | undefined
                sort?: Sorting | undefined
                testmode?: boolean | undefined
              }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                from?: CustomerToken | undefined
                limit?: (number | null) | undefined
                sort?: Sorting | undefined
                testmode?: boolean | undefined
              }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v2/customers/:customerId': {
      $get:
        | {
            input: { param: { customerId: CustomerToken } } & {
              query: { testmode?: boolean | undefined }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: CustomerResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { customerId: CustomerToken } } & {
              query: { testmode?: boolean | undefined }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { customerId: CustomerToken } } & {
              query: { testmode?: boolean | undefined }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
      $patch:
        | {
            input: { param: { customerId: CustomerToken } } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            } & {
              json: {
                resource?: string | undefined
                id?: {} | undefined
                mode?: Mode | undefined
                name?: (string | null) | undefined
                email?: (string | null) | undefined
                locale?: LocaleResponse | undefined
                metadata?: Metadata | undefined
                createdAt?: CreatedAt | undefined
                testmode?: TestmodePatch | undefined
                _links?:
                  | {
                      self: Url
                      dashboard: Url
                      payments?: UrlNullable | undefined
                      mandates?: UrlNullable | undefined
                      subscriptions?: UrlNullable | undefined
                      documentation: Url
                    }
                  | undefined
              }
            }
            output: CustomerResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { customerId: CustomerToken } } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            } & {
              json: {
                resource?: string | undefined
                id?: {} | undefined
                mode?: Mode | undefined
                name?: (string | null) | undefined
                email?: (string | null) | undefined
                locale?: LocaleResponse | undefined
                metadata?: Metadata | undefined
                createdAt?: CreatedAt | undefined
                testmode?: TestmodePatch | undefined
                _links?:
                  | {
                      self: Url
                      dashboard: Url
                      payments?: UrlNullable | undefined
                      mandates?: UrlNullable | undefined
                      subscriptions?: UrlNullable | undefined
                      documentation: Url
                    }
                  | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { customerId: CustomerToken } } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            } & {
              json: {
                resource?: string | undefined
                id?: {} | undefined
                mode?: Mode | undefined
                name?: (string | null) | undefined
                email?: (string | null) | undefined
                locale?: LocaleResponse | undefined
                metadata?: Metadata | undefined
                createdAt?: CreatedAt | undefined
                testmode?: TestmodePatch | undefined
                _links?:
                  | {
                      self: Url
                      dashboard: Url
                      payments?: UrlNullable | undefined
                      mandates?: UrlNullable | undefined
                      subscriptions?: UrlNullable | undefined
                      documentation: Url
                    }
                  | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
      $delete:
        | {
            input: { param: { customerId: CustomerToken } } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            } & { json: { testmode?: Testmode | undefined } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { customerId: CustomerToken } } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            } & { json: { testmode?: Testmode | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { customerId: CustomerToken } } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            } & { json: { testmode?: Testmode | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v2/customers/:customerId/payments': {
      $post:
        | {
            input: { param: { customerId: CustomerToken } } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            } & { json: PaymentRequest }
            output: PaymentResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { customerId: CustomerToken } } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            } & { json: PaymentRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { customerId: CustomerToken } } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            } & { json: PaymentRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { customerId: CustomerToken } } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            } & { json: PaymentRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 503
          }
      $get:
        | {
            input: { param: { customerId: CustomerToken } } & {
              query: {
                from?: PaymentToken | undefined
                limit?: (number | null) | undefined
                sort?: Sorting | undefined
                profileId?: ProfileToken | undefined
                testmode?: boolean | undefined
              }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: {
              count: ListCount
              _embedded: { payments?: ListPaymentResponse[] | undefined }
              _links: ListLinks
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { customerId: CustomerToken } } & {
              query: {
                from?: PaymentToken | undefined
                limit?: (number | null) | undefined
                sort?: Sorting | undefined
                profileId?: ProfileToken | undefined
                testmode?: boolean | undefined
              }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { customerId: CustomerToken } } & {
              query: {
                from?: PaymentToken | undefined
                limit?: (number | null) | undefined
                sort?: Sorting | undefined
                profileId?: ProfileToken | undefined
                testmode?: boolean | undefined
              }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v2/customers/:customerId/mandates': {
      $post:
        | {
            input: { param: { customerId: CustomerToken } } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            } & { json: MandateRequest }
            output: MandateResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { customerId: CustomerToken } } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            } & { json: MandateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { customerId: CustomerToken } } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            } & { json: MandateRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
      $get:
        | {
            input: { param: { customerId: CustomerToken } } & {
              query: {
                from?: MandateToken | undefined
                limit?: (number | null) | undefined
                sort?: Sorting | undefined
                scopes?: MandateScopes[] | undefined
                testmode?: boolean | undefined
              }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: {
              count: ListCount
              _embedded: { mandates: ListMandateResponse[] }
              _links: ListLinks
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { customerId: CustomerToken } } & {
              query: {
                from?: MandateToken | undefined
                limit?: (number | null) | undefined
                sort?: Sorting | undefined
                scopes?: MandateScopes[] | undefined
                testmode?: boolean | undefined
              }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { customerId: CustomerToken } } & {
              query: {
                from?: MandateToken | undefined
                limit?: (number | null) | undefined
                sort?: Sorting | undefined
                scopes?: MandateScopes[] | undefined
                testmode?: boolean | undefined
              }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { customerId: CustomerToken } } & {
              query: {
                from?: MandateToken | undefined
                limit?: (number | null) | undefined
                sort?: Sorting | undefined
                scopes?: MandateScopes[] | undefined
                testmode?: boolean | undefined
              }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v2/customers/:customerId/mandates/:mandateId': {
      $get:
        | {
            input: { param: { customerId: CustomerToken; mandateId: MandateToken } } & {
              query: { testmode?: boolean | undefined }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: MandateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { customerId: CustomerToken; mandateId: MandateToken } } & {
              query: { testmode?: boolean | undefined }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { customerId: CustomerToken; mandateId: MandateToken } } & {
              query: { testmode?: boolean | undefined }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
      $delete:
        | {
            input: { param: { customerId: CustomerToken; mandateId: MandateToken } } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            } & { json: { testmode?: Testmode | undefined } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { customerId: CustomerToken; mandateId: MandateToken } } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            } & { json: { testmode?: Testmode | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { customerId: CustomerToken; mandateId: MandateToken } } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            } & { json: { testmode?: Testmode | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v2/customers/:customerId/subscriptions': {
      $post:
        | {
            input: { param: { customerId: CustomerToken } } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            } & { json: SubscriptionRequest }
            output: SubscriptionResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { customerId: CustomerToken } } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            } & { json: SubscriptionRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { customerId: CustomerToken } } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            } & { json: SubscriptionRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
      $get:
        | {
            input: { param: { customerId: CustomerToken } } & {
              query: {
                from?: SubscriptionToken | undefined
                limit?: (number | null) | undefined
                sort?: Sorting | undefined
                testmode?: boolean | undefined
              }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: {
              count: ListCount
              _embedded: { subscriptions?: ListSubscriptionResponse[] | undefined }
              _links: ListLinks
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { customerId: CustomerToken } } & {
              query: {
                from?: SubscriptionToken | undefined
                limit?: (number | null) | undefined
                sort?: Sorting | undefined
                testmode?: boolean | undefined
              }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { customerId: CustomerToken } } & {
              query: {
                from?: SubscriptionToken | undefined
                limit?: (number | null) | undefined
                sort?: Sorting | undefined
                testmode?: boolean | undefined
              }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { customerId: CustomerToken } } & {
              query: {
                from?: SubscriptionToken | undefined
                limit?: (number | null) | undefined
                sort?: Sorting | undefined
                testmode?: boolean | undefined
              }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v2/customers/:customerId/subscriptions/:subscriptionId': {
      $get:
        | {
            input: { param: { customerId: CustomerToken; subscriptionId: SubscriptionToken } } & {
              query: { testmode?: boolean | undefined }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: SubscriptionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { customerId: CustomerToken; subscriptionId: SubscriptionToken } } & {
              query: { testmode?: boolean | undefined }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { customerId: CustomerToken; subscriptionId: SubscriptionToken } } & {
              query: { testmode?: boolean | undefined }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
      $patch:
        | {
            input: { param: { customerId: CustomerToken; subscriptionId: SubscriptionToken } } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            } & {
              json: {
                amount?: Amount | undefined
                description?: string | undefined
                interval?: string | undefined
                startDate?: string | undefined
                times?: number | undefined
                metadata?: Metadata | undefined
                webhookUrl?: string | undefined
                mandateId?: MandateToken | undefined
                testmode?: TestmodePatch | undefined
              }
            }
            output: SubscriptionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { customerId: CustomerToken; subscriptionId: SubscriptionToken } } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            } & {
              json: {
                amount?: Amount | undefined
                description?: string | undefined
                interval?: string | undefined
                startDate?: string | undefined
                times?: number | undefined
                metadata?: Metadata | undefined
                webhookUrl?: string | undefined
                mandateId?: MandateToken | undefined
                testmode?: TestmodePatch | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { customerId: CustomerToken; subscriptionId: SubscriptionToken } } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            } & {
              json: {
                amount?: Amount | undefined
                description?: string | undefined
                interval?: string | undefined
                startDate?: string | undefined
                times?: number | undefined
                metadata?: Metadata | undefined
                webhookUrl?: string | undefined
                mandateId?: MandateToken | undefined
                testmode?: TestmodePatch | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
      $delete:
        | {
            input: { param: { customerId: CustomerToken; subscriptionId: SubscriptionToken } } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            } & { json: { testmode?: Testmode | undefined } }
            output: SubscriptionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { customerId: CustomerToken; subscriptionId: SubscriptionToken } } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            } & { json: { testmode?: Testmode | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { customerId: CustomerToken; subscriptionId: SubscriptionToken } } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            } & { json: { testmode?: Testmode | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v2/subscriptions': {
      $get:
        | {
            input: {
              query: {
                from?: (string | null) | undefined
                limit?: (number | null) | undefined
                profileId?: (string | null) | undefined
                testmode?: boolean | undefined
              }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: {
              count: ListCount
              _embedded: { subscriptions?: ListSubscriptionResponse[] | undefined }
              _links: ListLinks
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                from?: (string | null) | undefined
                limit?: (number | null) | undefined
                profileId?: (string | null) | undefined
                testmode?: boolean | undefined
              }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                from?: (string | null) | undefined
                limit?: (number | null) | undefined
                profileId?: (string | null) | undefined
                testmode?: boolean | undefined
              }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                from?: (string | null) | undefined
                limit?: (number | null) | undefined
                profileId?: (string | null) | undefined
                testmode?: boolean | undefined
              }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v2/customers/:customerId/subscriptions/:subscriptionId/payments': {
      $get:
        | {
            input: { param: { customerId: CustomerToken; subscriptionId: SubscriptionToken } } & {
              query: {
                from?: PaymentToken | undefined
                limit?: (number | null) | undefined
                sort?: Sorting | undefined
                profileId?: ProfileToken | undefined
                testmode?: boolean | undefined
              }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: {
              count: ListCount
              _embedded: { payments?: ListPaymentResponse[] | undefined }
              _links: ListLinks
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { customerId: CustomerToken; subscriptionId: SubscriptionToken } } & {
              query: {
                from?: PaymentToken | undefined
                limit?: (number | null) | undefined
                sort?: Sorting | undefined
                profileId?: ProfileToken | undefined
                testmode?: boolean | undefined
              }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { customerId: CustomerToken; subscriptionId: SubscriptionToken } } & {
              query: {
                from?: PaymentToken | undefined
                limit?: (number | null) | undefined
                sort?: Sorting | undefined
                profileId?: ProfileToken | undefined
                testmode?: boolean | undefined
              }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v2/sales-invoices': {
      $post:
        | {
            input: {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            } & { json: SalesInvoiceRequest }
            output: SalesInvoiceResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            } & { json: SalesInvoiceRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            } & { json: SalesInvoiceRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            } & { json: SalesInvoiceRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
      $get:
        | {
            input: {
              query: {
                from?: (string | null) | undefined
                limit?: (number | null) | undefined
                testmode?: boolean | undefined
              }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: {
              count?: ListCount | undefined
              _embedded?: { invoices?: ListSalesInvoiceResponse[] | undefined } | undefined
              _links?: ListLinks | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                from?: (string | null) | undefined
                limit?: (number | null) | undefined
                testmode?: boolean | undefined
              }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                from?: (string | null) | undefined
                limit?: (number | null) | undefined
                testmode?: boolean | undefined
              }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v2/sales-invoices/:salesInvoiceId': {
      $get:
        | {
            input: { param: { salesInvoiceId: SalesInvoiceToken } } & {
              query: { testmode?: boolean | undefined }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: SalesInvoiceResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { salesInvoiceId: SalesInvoiceToken } } & {
              query: { testmode?: boolean | undefined }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { salesInvoiceId: SalesInvoiceToken } } & {
              query: { testmode?: boolean | undefined }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
      $patch:
        | {
            input: { param: { salesInvoiceId: SalesInvoiceToken } } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            } & {
              json: {
                testmode?: TestmodePatch | undefined
                status?: SalesInvoiceStatusUpdate | undefined
                memo?: (string | null) | undefined
                paymentTerm?: SalesInvoicePaymentTerm | undefined
                paymentDetails?: SalesInvoicePaymentDetails | undefined
                emailDetails?: SalesInvoiceEmailDetails | undefined
                recipientIdentifier?: string | undefined
                recipient?: SalesInvoiceRecipient | undefined
                lines?: (SalesInvoiceLineItem[] | null) | undefined
                discount?: SalesInvoiceDiscount | undefined
                isEInvoice?: boolean | undefined
              }
            }
            output: SalesInvoiceResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { salesInvoiceId: SalesInvoiceToken } } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            } & {
              json: {
                testmode?: TestmodePatch | undefined
                status?: SalesInvoiceStatusUpdate | undefined
                memo?: (string | null) | undefined
                paymentTerm?: SalesInvoicePaymentTerm | undefined
                paymentDetails?: SalesInvoicePaymentDetails | undefined
                emailDetails?: SalesInvoiceEmailDetails | undefined
                recipientIdentifier?: string | undefined
                recipient?: SalesInvoiceRecipient | undefined
                lines?: (SalesInvoiceLineItem[] | null) | undefined
                discount?: SalesInvoiceDiscount | undefined
                isEInvoice?: boolean | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { salesInvoiceId: SalesInvoiceToken } } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            } & {
              json: {
                testmode?: TestmodePatch | undefined
                status?: SalesInvoiceStatusUpdate | undefined
                memo?: (string | null) | undefined
                paymentTerm?: SalesInvoicePaymentTerm | undefined
                paymentDetails?: SalesInvoicePaymentDetails | undefined
                emailDetails?: SalesInvoiceEmailDetails | undefined
                recipientIdentifier?: string | undefined
                recipient?: SalesInvoiceRecipient | undefined
                lines?: (SalesInvoiceLineItem[] | null) | undefined
                discount?: SalesInvoiceDiscount | undefined
                isEInvoice?: boolean | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { salesInvoiceId: SalesInvoiceToken } } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            } & {
              json: {
                testmode?: TestmodePatch | undefined
                status?: SalesInvoiceStatusUpdate | undefined
                memo?: (string | null) | undefined
                paymentTerm?: SalesInvoicePaymentTerm | undefined
                paymentDetails?: SalesInvoicePaymentDetails | undefined
                emailDetails?: SalesInvoiceEmailDetails | undefined
                recipientIdentifier?: string | undefined
                recipient?: SalesInvoiceRecipient | undefined
                lines?: (SalesInvoiceLineItem[] | null) | undefined
                discount?: SalesInvoiceDiscount | undefined
                isEInvoice?: boolean | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
      $delete:
        | {
            input: { param: { salesInvoiceId: SalesInvoiceToken } } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            } & { json: DeleteValuesSalesInvoice }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { salesInvoiceId: SalesInvoiceToken } } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            } & { json: DeleteValuesSalesInvoice }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { salesInvoiceId: SalesInvoiceToken } } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            } & { json: DeleteValuesSalesInvoice }
            output: ErrorResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { salesInvoiceId: SalesInvoiceToken } } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            } & { json: DeleteValuesSalesInvoice }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v2/business-accounts/accounts': {
      $post:
        | {
            input: {
              header: {
                'Idempotency-Key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            } & {
              json: {
                name: string
                currency: AccountCurrency
                testmode?: OauthTestmodeCreate | undefined
              }
            }
            output: BusinessAccountResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              header: {
                'Idempotency-Key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            } & {
              json: {
                name: string
                currency: AccountCurrency
                testmode?: OauthTestmodeCreate | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              header: {
                'Idempotency-Key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            } & {
              json: {
                name: string
                currency: AccountCurrency
                testmode?: OauthTestmodeCreate | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
        | {
            input: {
              header: {
                'Idempotency-Key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            } & {
              json: {
                name: string
                currency: AccountCurrency
                testmode?: OauthTestmodeCreate | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              header: {
                'Idempotency-Key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            } & {
              json: {
                name: string
                currency: AccountCurrency
                testmode?: OauthTestmodeCreate | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
      $get:
        | {
            input: {
              query: {
                iban?: string | undefined
                from?: BusinessAccountToken | undefined
                limit?: (number | null) | undefined
                sort?: Sorting | undefined
                testmode?: boolean | undefined
              }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: {
              count: ListCount
              _embedded: { businessAccounts?: ListBusinessAccountResponse[] | undefined }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                iban?: string | undefined
                from?: BusinessAccountToken | undefined
                limit?: (number | null) | undefined
                sort?: Sorting | undefined
                testmode?: boolean | undefined
              }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                iban?: string | undefined
                from?: BusinessAccountToken | undefined
                limit?: (number | null) | undefined
                sort?: Sorting | undefined
                testmode?: boolean | undefined
              }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v2/business-accounts/accounts/:businessAccountId': {
      $get:
        | {
            input: { param: { businessAccountId: BusinessAccountToken } } & {
              query: { testmode?: boolean | undefined }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: BusinessAccountResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { businessAccountId: BusinessAccountToken } } & {
              query: { testmode?: boolean | undefined }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { businessAccountId: BusinessAccountToken } } & {
              query: { testmode?: boolean | undefined }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v2/business-accounts/accounts/:businessAccountId/transactions': {
      $get:
        | {
            input: { param: { businessAccountId: BusinessAccountToken } } & {
              query: {
                creditDebitIndicator?: CreditDebitIndicator | undefined
                processedAfter?: string | undefined
                processedBefore?: string | undefined
                from?: BusinessAccountTransactionToken | undefined
                limit?: (number | null) | undefined
                sort?: Sorting | undefined
                testmode?: boolean | undefined
              }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: {
              count: ListCount
              _embedded: { transactions?: TransactionResponse[] | undefined }
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { businessAccountId: BusinessAccountToken } } & {
              query: {
                creditDebitIndicator?: CreditDebitIndicator | undefined
                processedAfter?: string | undefined
                processedBefore?: string | undefined
                from?: BusinessAccountTransactionToken | undefined
                limit?: (number | null) | undefined
                sort?: Sorting | undefined
                testmode?: boolean | undefined
              }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { businessAccountId: BusinessAccountToken } } & {
              query: {
                creditDebitIndicator?: CreditDebitIndicator | undefined
                processedAfter?: string | undefined
                processedBefore?: string | undefined
                from?: BusinessAccountTransactionToken | undefined
                limit?: (number | null) | undefined
                sort?: Sorting | undefined
                testmode?: boolean | undefined
              }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v2/business-accounts/accounts/:businessAccountId/transactions/:transactionId': {
      $get:
        | {
            input: {
              param: {
                businessAccountId: BusinessAccountToken
                transactionId: BusinessAccountTransactionToken
              }
            } & { query: { testmode?: boolean | undefined } } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: TransactionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                businessAccountId: BusinessAccountToken
                transactionId: BusinessAccountTransactionToken
              }
            } & { query: { testmode?: boolean | undefined } } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: {
                businessAccountId: BusinessAccountToken
                transactionId: BusinessAccountTransactionToken
              }
            } & { query: { testmode?: boolean | undefined } } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v2/business-accounts/transfers': {
      $post:
        | {
            input: {
              header: {
                'X-Client-Signature': string
                'X-Client-Signed-At': string
                'Idempotency-Key': string
              }
            } & { json: TransferRequest }
            output: TransferResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              header: {
                'X-Client-Signature': string
                'X-Client-Signed-At': string
                'Idempotency-Key': string
              }
            } & { json: TransferRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              header: {
                'X-Client-Signature': string
                'X-Client-Signed-At': string
                'Idempotency-Key': string
              }
            } & { json: TransferRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              header: {
                'X-Client-Signature': string
                'X-Client-Signed-At': string
                'Idempotency-Key': string
              }
            } & { json: TransferRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v2/business-accounts/transfers/:businessAccountsTransferId': {
      $get:
        | {
            input: { param: { businessAccountsTransferId: BusinessAccountTransferToken } } & {
              query: { testmode?: boolean | undefined }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: TransferResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { businessAccountsTransferId: BusinessAccountTransferToken } } & {
              query: { testmode?: boolean | undefined }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { businessAccountsTransferId: BusinessAccountTransferToken } } & {
              query: { testmode?: boolean | undefined }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v2/business-accounts/payee-verifications': {
      $post:
        | {
            input: {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            } & { json: VerificationOfPayeeRequest }
            output: VerificationOfPayeeResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            } & { json: VerificationOfPayeeRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            } & { json: VerificationOfPayeeRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            } & { json: VerificationOfPayeeRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/v2/business-accounts/draft-transfers': {
      $post:
        | {
            input: {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            } & { json: CreateDraftTransferRequest }
            output: DraftTransferResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            } & { json: CreateDraftTransferRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            } & { json: CreateDraftTransferRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            } & { json: CreateDraftTransferRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
      $get:
        | {
            input: {
              query: {
                from?: (string | null) | undefined
                limit?: (number | null) | undefined
                status?: DraftTransferStatus | undefined
                testmode?: boolean | undefined
              }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: {
              count: ListCount
              _embedded: { draft_transfers: DraftTransferResponse[] }
              _links: ListLinks
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                from?: (string | null) | undefined
                limit?: (number | null) | undefined
                status?: DraftTransferStatus | undefined
                testmode?: boolean | undefined
              }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                from?: (string | null) | undefined
                limit?: (number | null) | undefined
                status?: DraftTransferStatus | undefined
                testmode?: boolean | undefined
              }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v2/business-accounts/draft-transfers/:draftTransferId': {
      $get:
        | {
            input: { param: { draftTransferId: DraftTransferToken } } & {
              query: { testmode?: boolean | undefined }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: DraftTransferResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { draftTransferId: DraftTransferToken } } & {
              query: { testmode?: boolean | undefined }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { draftTransferId: DraftTransferToken } } & {
              query: { testmode?: boolean | undefined }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
      $delete:
        | {
            input: { param: { draftTransferId: DraftTransferToken } } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            } & { json: { testmode?: Testmode | undefined } }
            output: DraftTransferResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { draftTransferId: DraftTransferToken } } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            } & { json: { testmode?: Testmode | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { draftTransferId: DraftTransferToken } } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            } & { json: { testmode?: Testmode | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { draftTransferId: DraftTransferToken } } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            } & { json: { testmode?: Testmode | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v2/payouts': {
      $post:
        | {
            input: {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            } & { json: PayoutRequest }
            output: EntityPayoutResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            } & { json: PayoutRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            } & { json: PayoutRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
      $get:
        | {
            input: {
              query: {
                balanceId?: (string | null) | undefined
                from?: (string | null) | undefined
                limit?: (number | null) | undefined
                sort?: Sorting | undefined
                testmode?: boolean | undefined
              }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: {
              count: ListCount
              _embedded: { payouts: ListEntityPayout[] }
              _links: ListLinks
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                balanceId?: (string | null) | undefined
                from?: (string | null) | undefined
                limit?: (number | null) | undefined
                sort?: Sorting | undefined
                testmode?: boolean | undefined
              }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                balanceId?: (string | null) | undefined
                from?: (string | null) | undefined
                limit?: (number | null) | undefined
                sort?: Sorting | undefined
                testmode?: boolean | undefined
              }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/v2/payouts/:payoutId': {
      $get:
        | {
            input: { param: { payoutId: string } } & {
              query: { testmode?: boolean | undefined }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: EntityPayoutResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { payoutId: string } } & {
              query: { testmode?: boolean | undefined }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { payoutId: string } } & {
              query: { testmode?: boolean | undefined }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
      $delete:
        | {
            input: { param: { payoutId: string } } & {
              query: { testmode?: boolean | undefined }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: EntityPayoutResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { payoutId: string } } & {
              query: { testmode?: boolean | undefined }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { payoutId: string } } & {
              query: { testmode?: boolean | undefined }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { payoutId: string } } & {
              query: { testmode?: boolean | undefined }
            } & {
              header: {
                'idempotency-key'?: string | undefined
                'X-Client-Signature'?: string | undefined
                'X-Client-Signed-At'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
    }
  },
  '/'
>
export default routes
