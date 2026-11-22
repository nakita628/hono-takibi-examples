type OrderAmountV2 = bigint
type Currency = string
type SettlementCurrency = string
type OrderDescription = string
type FullName = string
type Phone = string
type Email = string
type DateOfBirth = string
type CustomerV2 = {
  id?: string | undefined
  full_name?: FullName | undefined
  phone?: Phone | undefined
  email?: Email | undefined
  date_of_birth?: DateOfBirth | undefined
}
type EnforceChallengeV2 = 'automatic' | 'forced'
type Quantity = { value: number; unit?: string | undefined }
type Discount = { name: string; amount: bigint }
type Tax = { name: string; amount: bigint }
type ImageUrl = string
type LineItem = {
  name: string
  type: 'physical' | 'service'
  quantity: Quantity
  unit_price_amount: bigint
  total_amount: bigint
  external_id?: string | undefined
  discounts?: Discount[] | undefined
  taxes?: Tax[] | undefined
  image_urls?: ImageUrl[] | undefined
  description?: string | undefined
  url?: string | undefined
}
type LineItems = LineItem[]
type AddressV3 = {
  street_line_1: string
  street_line_2?: string | undefined
  region?: string | undefined
  city: string
  country_code: string
  postcode: string
}
type Contact = { name?: string | undefined; email?: string | undefined; phone?: string | undefined }
type Shipment = {
  shipping_company_name: string
  tracking_number: string
  estimated_delivery_date?: string | undefined
  tracking_url?: string | undefined
}
type Shipments = Shipment[]
type Shipping = {
  address?: AddressV3 | undefined
  contact?: Contact | undefined
  shipments?: Shipments | undefined
}
type CaptureModeV2 = 'automatic' | 'manual'
type AuthorisationType = 'final' | 'pre_authorisation'
type CancelAuthorisedAfter = string
type ExpirePendingAfter = string
type LocationId = string
type Metadata = { [x: string]: string }
type IndustryDataType = 'airline' | 'car_rental' | 'crypto' | 'event' | 'lodging' | 'marketplace'
type BookingId = string
type Refundability = 'refundable' | 'non_refundable' | 'partially_refundable'
type Passenger = { first_name: string; last_name: string }
type Passengers = Passenger[]
type JourneyLeg = {
  sequence: number
  departure_airport_code: string
  arrival_airport_code: string
  flight_number?: string | undefined
  fare_base_code?: string | undefined
  travel_date: string
  airline_name: string
  airline_code: string
  pnr?: string | undefined
}
type JourneyLegs = JourneyLeg[]
type AirlineData = {
  type: IndustryDataType
  booking_id: BookingId
  fulfillment_date?: string | undefined
  tickets_purchase?: boolean | undefined
  ticket_type?: 'fixed' | 'flexible' | undefined
  crs_code?: string | undefined
  ticket_change_indicator?: 'new' | 'modification' | undefined
  refundability?: Refundability | undefined
  passengers?: Passengers | undefined
  journey_legs?: JourneyLegs | undefined
  booking_url?: string | undefined
}
type CryptoTransaction = {
  id: string
  status: 'pending' | 'failed' | 'cancelled' | 'completed'
  recipient_wallet_id?: string | undefined
  recipient_user_id?: string | undefined
}
type CryptoTransactions = {
  type: IndustryDataType
  transactions: CryptoTransaction[]
  subseller_mcc?: string | undefined
  subseller_url?: string | undefined
}
type AddressV4 = {
  street_line_1: string
  street_line_2?: string | undefined
  region?: string | undefined
  city: string
  country_code: string
  country_subdivision_code?: string | undefined
  postcode: string
}
type Subseller = { id: string; name: string; website: string; phone: string; address: AddressV4 }
type Marketplace = { type: IndustryDataType; subseller: Subseller }
type SupplierPaymentDate = string
type Ticket = {
  id: string
  transferable?: boolean | undefined
  refundability?: Refundability | undefined
}
type Event = {
  start_date?: string | undefined
  end_date?: string | undefined
  supplier?: string | undefined
  supplier_payment_date?: SupplierPaymentDate | undefined
  name?: string | undefined
  location?:
    | {
        street_line_1: string
        street_line_2?: string | undefined
        region?: string | undefined
        city: string
        country_code: string
        postcode: string
      }
    | undefined
  category?:
    | 'concert'
    | 'conference'
    | 'convention'
    | 'exhibition'
    | 'festival'
    | 'party'
    | 'performance'
    | 'other'
    | undefined
  market?: 'primary' | 'secondary' | undefined
  tickets?: Ticket[] | undefined
}
type Events = { type: IndustryDataType; booking_id: BookingId; events?: Event[] | undefined }
type Guest = { first_name: string; last_name: string }
type Guests = Guest[]
type Lodging = {
  type: IndustryDataType
  booking_id: BookingId
  check_in_date?: string | undefined
  check_out_date?: string | undefined
  supplier_payment_date?: SupplierPaymentDate | undefined
  category?: 'bed_and_breakfast' | 'hostel' | 'hotel' | 'short_term_rental' | 'other' | undefined
  booking_type?: 'fixed' | 'flexible' | undefined
  refundability?: Refundability | undefined
  location?:
    | {
        street_line_1: string
        street_line_2?: string | undefined
        region?: string | undefined
        city: string
        country_code: string
        postcode: string
      }
    | undefined
  guests?: Guests | undefined
}
type IndustryData = AirlineData | CryptoTransactions | Marketplace | Events | Lodging
type MerchantOrderUrl = string
type MerchantOrderExternalReference = string
type MerchantOrderData = {
  url?: MerchantOrderUrl | undefined
  reference?: MerchantOrderExternalReference | undefined
}
type UpcomingPayment = { date: string; payment_method_id: string }
type RedirectUrl = string
type StatementDescriptorSuffix = string
type OrderCreationV4 = {
  amount: OrderAmountV2
  currency: Currency
  settlement_currency?: SettlementCurrency | undefined
  description?: OrderDescription | undefined
  customer?: CustomerV2 | undefined
  enforce_challenge?: EnforceChallengeV2 | undefined
  line_items?: LineItems | undefined
  shipping?: Shipping | undefined
  capture_mode?: CaptureModeV2 | undefined
  authorisation_type?: AuthorisationType | undefined
  cancel_authorised_after?: CancelAuthorisedAfter | undefined
  expire_pending_after?: ExpirePendingAfter | undefined
  location_id?: LocationId | undefined
  metadata?: Metadata | undefined
  industry_data?: IndustryData | undefined
  merchant_order_data?: MerchantOrderData | undefined
  upcoming_payment_data?: UpcomingPayment | undefined
  redirect_url?: RedirectUrl | undefined
  statement_descriptor_suffix?: StatementDescriptorSuffix | undefined
}
type OrderId = string
type OrderToken = string
type OrderTypeV2 =
  | 'payment'
  | 'payment_request'
  | 'refund'
  | 'chargeback'
  | 'chargeback_reversal'
  | 'credit_reimbursement'
type OrderState = 'pending' | 'processing' | 'authorised' | 'completed' | 'cancelled' | 'failed'
type OutstandingAmount = bigint
type RefundedAmount = bigint
type PaymentId = string
type PaymentStateV2 =
  | 'pending'
  | 'authentication_challenge'
  | 'authentication_verified'
  | 'authorisation_started'
  | 'authorisation_passed'
  | 'authorised'
  | 'capture_started'
  | 'captured'
  | 'refund_validated'
  | 'refund_started'
  | 'cancellation_started'
  | 'declining'
  | 'completing'
  | 'cancelling'
  | 'failing'
  | 'completed'
  | 'declined'
  | 'soft_declined'
  | 'cancelled'
  | 'failed'
type DeclineReasonV2 =
  | '3ds_challenge_abandoned'
  | '3ds_challenge_failed'
  | '3ds_challenge_failed_manually'
  | 'authentication_required'
  | 'card_not_enrolled_to_three_ds'
  | 'cardholder_name_missing'
  | 'currency_not_supported'
  | 'customer_challenge_abandoned'
  | 'customer_challenge_failed'
  | 'customer_date_of_birth_mismatch'
  | 'customer_name_mismatch'
  | 'customer_verification_failed'
  | 'customer_wallet_limits_exceeded'
  | 'do_not_honour'
  | 'expired_card'
  | 'high_risk'
  | 'insufficient_funds'
  | 'insufficient_refundable_amount'
  | 'invalid_account'
  | 'invalid_address'
  | 'invalid_amount'
  | 'invalid_card'
  | 'invalid_country'
  | 'invalid_cvv'
  | 'invalid_email'
  | 'invalid_expiry'
  | 'invalid_merchant'
  | 'invalid_phone'
  | 'invalid_pin'
  | 'invalid_transaction'
  | 'issuer_decline'
  | 'issuer_not_available'
  | 'law_violation'
  | 'lost_card'
  | 'new_card_not_unblocked'
  | 'no_common_supported_three_ds_version'
  | 'no_such_issuer'
  | 'payment_attempt_blocked'
  | 'pick_up_card'
  | 'pin_required'
  | 'pin_try_exceeded'
  | 'rejected_by_customer'
  | 'restricted_card'
  | 'security_violation'
  | 'stolen_card'
  | 'suspected_fraud'
  | 'technical_error'
  | 'transaction_not_allowed'
  | 'transaction_not_allowed_for_cardholder'
  | 'unknown'
  | 'unknown_card'
  | 'withdrawal_frequency_exceeded'
  | 'withdrawal_limit_exceeded'
type BankMessage = string
type PaymentCreated = string
type PaymentUpdated = string
type PaymentToken = string
type PaymentAmount = bigint
type PaymentAuthorisedAmount = bigint
type PaymentSettledAmount = bigint
type PaymentSettledCurrency = string
type SavedPaymentMethodId = string
type PaymentMethodType =
  | 'apple_pay'
  | 'card'
  | 'google_pay'
  | 'revolut_pay_card'
  | 'revolut_pay_account'
  | 'sepa_direct_debit'
type PaymentMethodCommercial = boolean
type CardChecksV2 = {
  three_ds?:
    | {
        eci?: string | undefined
        state?: 'verified' | 'failed' | 'challenge' | 'declined' | undefined
        version?: number | undefined
      }
    | undefined
  cvv_verification?: 'match' | 'not_match' | 'incorrect' | 'not_processed' | undefined
  address?: 'match' | 'not_match' | 'n_a' | 'invalid' | undefined
  postcode?: 'match' | 'not_match' | 'n_a' | 'invalid' | undefined
  cardholder?: 'match' | 'not_match' | 'n_a' | 'invalid' | undefined
}
type AuthorisationCode = string
type Arn = string
type CaptureDeadline = string
type TerminalHardwareId = string
type Fingerprint = string
type NetworkTransactionId = string
type ApplePay = {
  id?: SavedPaymentMethodId | undefined
  type: PaymentMethodType
  card_brand?: 'visa' | 'mastercard' | 'american_express' | undefined
  funding?: 'credit' | 'debit' | 'prepaid' | undefined
  commercial?: PaymentMethodCommercial | undefined
  card_country_code?: string | undefined
  card_bin?: string | undefined
  card_last_four?: string | undefined
  card_expiry?: string | undefined
  cardholder_name?: string | undefined
  checks?: CardChecksV2 | undefined
  authorisation_code?: AuthorisationCode | undefined
  arn?: Arn | undefined
  capture_deadline?: CaptureDeadline | undefined
  terminal_hardware_id?: TerminalHardwareId | undefined
  fingerprint?: Fingerprint | undefined
  network_transaction_id?: NetworkTransactionId | undefined
}
type Card = {
  id?: SavedPaymentMethodId | undefined
  type: PaymentMethodType
  card_brand?: 'visa' | 'mastercard' | 'american_express' | undefined
  funding?: 'credit' | 'debit' | 'prepaid' | undefined
  commercial?: PaymentMethodCommercial | undefined
  card_country_code?: string | undefined
  card_bin?: string | undefined
  card_last_four?: string | undefined
  card_expiry?: string | undefined
  cardholder_name?: string | undefined
  checks?: CardChecksV2 | undefined
  authorisation_code?: AuthorisationCode | undefined
  arn?: Arn | undefined
  capture_deadline?: CaptureDeadline | undefined
  terminal_hardware_id?: TerminalHardwareId | undefined
  fingerprint?: Fingerprint | undefined
  network_transaction_id?: NetworkTransactionId | undefined
}
type GooglePay = {
  id?: SavedPaymentMethodId | undefined
  type: PaymentMethodType
  card_brand?: 'visa' | 'mastercard' | 'american_express' | undefined
  funding?: 'credit' | 'debit' | 'prepaid' | undefined
  commercial?: PaymentMethodCommercial | undefined
  card_country_code?: string | undefined
  card_bin?: string | undefined
  card_last_four?: string | undefined
  card_expiry?: string | undefined
  cardholder_name?: string | undefined
  checks?: CardChecksV2 | undefined
  authorisation_code?: AuthorisationCode | undefined
  arn?: Arn | undefined
  capture_deadline?: CaptureDeadline | undefined
  terminal_hardware_id?: TerminalHardwareId | undefined
  fingerprint?: Fingerprint | undefined
  network_transaction_id?: NetworkTransactionId | undefined
}
type RevolutPayCard = {
  id?: SavedPaymentMethodId | undefined
  type: PaymentMethodType
  card_brand?: 'visa' | 'mastercard' | 'american_express' | undefined
  funding?: 'credit' | 'debit' | 'prepaid' | undefined
  commercial?: PaymentMethodCommercial | undefined
  card_country_code?: string | undefined
  card_bin?: string | undefined
  card_last_four?: string | undefined
  card_expiry?: string | undefined
  cardholder_name?: string | undefined
  checks?: CardChecksV2 | undefined
  authorisation_code?: AuthorisationCode | undefined
  arn?: Arn | undefined
  capture_deadline?: CaptureDeadline | undefined
  terminal_hardware_id?: TerminalHardwareId | undefined
  fingerprint?: Fingerprint | undefined
  network_transaction_id?: NetworkTransactionId | undefined
}
type RevolutPayAccount = {
  id?: SavedPaymentMethodId | undefined
  type: PaymentMethodType
  commercial?: PaymentMethodCommercial | undefined
  fingerprint?: Fingerprint | undefined
}
type SepaDirectDebitDebtorIbanLastFour = string
type SepaDirectDebitDebtorName = string
type SepaDirectDebitMandateReference = string
type SepaDirectDebit = {
  id?: SavedPaymentMethodId | undefined
  type: PaymentMethodType
  debtor_iban_last_four?: SepaDirectDebitDebtorIbanLastFour | undefined
  debtor_name?: SepaDirectDebitDebtorName | undefined
  mandate_reference?: SepaDirectDebitMandateReference | undefined
}
type PaymentMethodV2 =
  | ApplePay
  | Card
  | GooglePay
  | RevolutPayCard
  | RevolutPayAccount
  | SepaDirectDebit
type AuthenticationChallengeType = 'three_ds' | 'three_ds_fingerprint'
type ThreeDs = { type: AuthenticationChallengeType; acs_url: string }
type ThreeDsFingerprint = {
  type: AuthenticationChallengeType
  fingerprint_url: string
  fingerprint_data: string
}
type AuthenticationChallenge = ThreeDs | ThreeDsFingerprint
type AddressV2 = {
  street_line_1?: string | undefined
  street_line_2?: string | undefined
  region?: string | undefined
  city?: string | undefined
  country_code: string
  postcode: string
}
type PaymentRiskLevel = 'low' | 'high'
type Fee = {
  type?: 'fx' | 'acquiring' | undefined
  amount?: bigint | undefined
  currency?: string | undefined
}
type Fees = Fee[]
type Payer = { email?: Email | undefined; phone?: Phone | undefined }
type PaymentV2 = {
  id: PaymentId
  state: PaymentStateV2
  decline_reason?: DeclineReasonV2 | undefined
  bank_message?: BankMessage | undefined
  created_at: PaymentCreated
  updated_at: PaymentUpdated
  token?: PaymentToken | undefined
  amount: PaymentAmount
  authorised_amount?: PaymentAuthorisedAmount | undefined
  currency?: Currency | undefined
  settled_amount?: PaymentSettledAmount | undefined
  settled_currency?: PaymentSettledCurrency | undefined
  payment_method?: PaymentMethodV2 | undefined
  authentication_challenge?: AuthenticationChallenge | undefined
  billing_address?: AddressV2 | undefined
  risk_level?: PaymentRiskLevel | undefined
  fees?: Fees | undefined
  payer?: Payer | undefined
}
type IncrementReference = string
type IncrementalAuthorisation = {
  new_amount?: bigint | undefined
  old_amount?: bigint | undefined
  state?: 'pending' | 'processing' | 'authorised' | 'declined' | 'failed' | undefined
  reference?: IncrementReference | undefined
  line_items?: LineItem[] | undefined
  reason?: string | undefined
}
type IncrementalAuthorisations = IncrementalAuthorisation[]
type CheckoutUrl = string
type RelatedOrderId = string
type SubscriptionId = string
type SubscriptionActiveCycleId = string
type SubscriptionSettledCycleId = string
type SubscriptionOrderBillingReason = 'cycle_billing' | 'final_settlement' | 'setup_intent'
type SubscriptionData = {
  subscription_id: SubscriptionId
  active_cycle_id?: SubscriptionActiveCycleId | undefined
  settled_cycle_id?: SubscriptionSettledCycleId | undefined
  billing_reason: SubscriptionOrderBillingReason
}
type OrderV4 = {
  id?: OrderId | undefined
  token?: OrderToken | undefined
  type?: OrderTypeV2 | undefined
  state?: OrderState | undefined
  created_at?: string | undefined
  updated_at?: string | undefined
  description?: OrderDescription | undefined
  capture_mode?: CaptureModeV2 | undefined
  authorisation_type?: AuthorisationType | undefined
  cancel_authorised_after?: CancelAuthorisedAfter | undefined
  amount?: OrderAmountV2 | undefined
  outstanding_amount?: OutstandingAmount | undefined
  refunded_amount?: RefundedAmount | undefined
  currency?: Currency | undefined
  settlement_currency?: SettlementCurrency | undefined
  customer?: CustomerV2 | undefined
  payments?: PaymentV2[] | undefined
  incremental_authorisations?: IncrementalAuthorisations | undefined
  location_id?: LocationId | undefined
  metadata?: Metadata | undefined
  industry_data?: IndustryData | undefined
  merchant_order_data?: MerchantOrderData | undefined
  upcoming_payment_data?: UpcomingPayment | undefined
  checkout_url?: CheckoutUrl | undefined
  redirect_url?: RedirectUrl | undefined
  shipping?: Shipping | undefined
  enforce_challenge?: EnforceChallengeV2 | undefined
  line_items?: LineItems | undefined
  statement_descriptor_suffix?: StatementDescriptorSuffix | undefined
  related_order_id?: RelatedOrderId | undefined
  subscription_data?: SubscriptionData | undefined
}
type ErrorV2 = {
  code: string | number
  message?: string | undefined
  timestamp: number
  errorId?: string | undefined
}
type CustomerId = string
type OrderCustomerV2 = {
  id: CustomerId
  email?: Email | undefined
  phone?: Phone | undefined
  full_name?: FullName | undefined
  date_of_birth?: DateOfBirth | undefined
}
type OrderSimplifiedV2 = {
  id: OrderId
  token?: OrderToken | undefined
  type: OrderTypeV2
  state: OrderState
  created_at: string
  updated_at: string
  amount: OrderAmountV2
  currency: Currency
  outstanding_amount: OutstandingAmount
  capture_mode: CaptureModeV2
  enforce_challenge: EnforceChallengeV2
  authorisation_type?: AuthorisationType | undefined
  description?: OrderDescription | undefined
  metadata?: Metadata | undefined
  related_order_id?: RelatedOrderId | undefined
  subscription_data?: SubscriptionData | undefined
  customer?: OrderCustomerV2 | undefined
  line_items?: LineItems | undefined
  merchant_order_data?: MerchantOrderData | undefined
  location_id?: LocationId | undefined
  redirect_url?: RedirectUrl | undefined
  cancel_authorised_after?: CancelAuthorisedAfter | undefined
  statement_descriptor_suffix?: StatementDescriptorSuffix | undefined
}
type OrdersV2 = { orders: OrderSimplifiedV2[] }
type OrderUpdateV4 = {
  amount?: OrderAmountV2 | undefined
  currency?: Currency | undefined
  settlement_currency?: SettlementCurrency | undefined
  description?: OrderDescription | undefined
  customer?: CustomerV2 | undefined
  shipping?: Shipping | undefined
  enforce_challenge?: EnforceChallengeV2 | undefined
  line_items?: LineItems | undefined
  capture_mode?: CaptureModeV2 | undefined
  cancel_authorised_after?: CancelAuthorisedAfter | undefined
  metadata?: Metadata | undefined
  industry_data?: IndustryData | undefined
  merchant_order_data?: MerchantOrderData | undefined
  upcoming_payment_data?: UpcomingPayment | undefined
  redirect_url?: RedirectUrl | undefined
  statement_descriptor_suffix?: StatementDescriptorSuffix | undefined
}
type IncrementAmount = bigint
type IncrementalAuthorisationRequest = {
  amount: IncrementAmount
  reference?: IncrementReference | undefined
  line_items?: LineItems | undefined
}
type OrderCaptureAmount = bigint
type OrderCaptureV2 = {
  amount?: OrderCaptureAmount | undefined
  line_items?: LineItems | undefined
}
type RefundAmount = bigint
type RefundCurrency = string
type OrderRefundV2 = {
  amount: RefundAmount
  currency: RefundCurrency
  merchant_order_data?: { reference?: MerchantOrderExternalReference | undefined } | undefined
  metadata?: Metadata | undefined
  description?: string | undefined
}
type BrowserEnvironment = {
  type: 'browser'
  time_zone_utc_offset: number
  color_depth: number
  screen_width: number
  screen_height: number
  java_enabled: boolean
  challenge_window_width?: number | undefined
  browser_url?: string | undefined
}
type Environment = BrowserEnvironment
type SavedPaymentMethod = {
  saved_payment_method: {
    type: 'card' | 'revolut_pay'
    id: string
    initiator: 'customer' | 'merchant'
    environment: Environment
  }
}
type RevolutPayAccountLegacy = {
  type: 'card' | 'revolut_pay'
  subtype: 'revolut_account' | 'card'
  id?: SavedPaymentMethodId | undefined
}
type RevolutPayCardLegacy = {
  type: 'card' | 'revolut_pay'
  subtype: 'revolut_account' | 'card'
  id?: SavedPaymentMethodId | undefined
  brand?: string | undefined
  last_four?: string | undefined
}
type RevolutPay = RevolutPayAccountLegacy | RevolutPayCardLegacy
type CardForPaymentDetails = {
  type: 'card' | 'revolut_pay'
  brand?: string | undefined
  last_four?: string | undefined
  id?: SavedPaymentMethodId | undefined
}
type PaymentRetrieval = {
  id: PaymentId
  order_id: OrderId
  payment_method: RevolutPay | CardForPaymentDetails | SepaDirectDebit
  token?: PaymentToken | undefined
  amount?: PaymentAmount | undefined
  currency?: Currency | undefined
  state?: PaymentStateV2 | undefined
  decline_reason?: DeclineReasonV2 | undefined
  authentication_challenge?: AuthenticationChallenge | undefined
}
type CustomerCreationV2 = {
  full_name?: FullName | undefined
  email: Email
  phone?: Phone | undefined
  date_of_birth?: DateOfBirth | undefined
}
type CustomerCreated = {
  id: CustomerId
  full_name?: FullName | undefined
  email: Email
  phone?: Phone | undefined
  created_at: string
  updated_at: string
}
type NextPageToken = string
type CustomerSimplified = {
  id: CustomerId
  full_name?: FullName | undefined
  email: Email
  phone?: Phone | undefined
  created_at: string
  updated_at: string
}
type Customers = { next_page_token?: NextPageToken | undefined; customers: CustomerSimplified[] }
type PaymentMethodId = string
type PaymentMethodTypeV2 = 'card' | 'revolut_pay' | 'sepa_direct_debit'
type SavedFor = 'customer' | 'merchant'
type PaymentMethodCreatedAt = string
type CardBin = string
type CardLastFour = string
type CardExpiryMonth = number
type CardExpiryYear = number
type CardholderName = string
type CardBrandV2 = 'visa' | 'mastercard' | 'american_express'
type CardFundingV2 = 'debit' | 'credit' | 'prepaid'
type CardIssuer = string
type CardIssuerCountry = string
type BillingAddress = {
  street_line_1?: string | undefined
  street_line_2?: string | undefined
  region?: string | undefined
  city?: string | undefined
  country_code: string
  postcode: string
}
type CardV2 = {
  id: PaymentMethodId
  type: PaymentMethodTypeV2
  saved_for?: SavedFor | undefined
  created_at: PaymentMethodCreatedAt
  bin?: CardBin | undefined
  last_four?: CardLastFour | undefined
  expiry_month?: CardExpiryMonth | undefined
  expiry_year?: CardExpiryYear | undefined
  cardholder_name?: CardholderName | undefined
  brand?: CardBrandV2 | undefined
  funding?: CardFundingV2 | undefined
  issuer?: CardIssuer | undefined
  issuer_country?: CardIssuerCountry | undefined
  billing_address?: BillingAddress | undefined
  terminal_hardware_id?: TerminalHardwareId | undefined
}
type RevolutPayV2 = {
  id: PaymentMethodId
  type: PaymentMethodTypeV2
  saved_for?: SavedFor | undefined
  created_at: PaymentMethodCreatedAt
}
type SepaDirectDebitV2 = {
  id: PaymentMethodId
  type: PaymentMethodTypeV2
  saved_for?: SavedFor | undefined
  debtor_iban_last_four?: SepaDirectDebitDebtorIbanLastFour | undefined
  debtor_name?: SepaDirectDebitDebtorName | undefined
  mandate_reference?: SepaDirectDebitMandateReference | undefined
  billing_address?: BillingAddress | undefined
  created_at: PaymentMethodCreatedAt
}
type PaymentMethodV4 = CardV2 | RevolutPayV2 | SepaDirectDebitV2
type CustomerV3 = {
  id: CustomerId
  full_name?: FullName | undefined
  email: Email
  phone?: Phone | undefined
  created_at: string
  updated_at: string
  payment_methods: PaymentMethodV4[]
}
type CustomerUpdateV2 = {
  full_name?: FullName | undefined
  email?: Email | undefined
  phone?: Phone | undefined
  date_of_birth?: DateOfBirth | undefined
}
type CustomerPaymentMethodsV2 = { payment_methods: PaymentMethodV4[] }
type PaymentMethodUpdate = { saved_for?: 'customer' | undefined }
type DisputePaymentId = string
type DisputePaymentOrderId = string
type DisputePaymentCreatedAt = string
type DisputePaymentArn = string
type DisputePaymentAmount = bigint
type DisputePaymentMethodType =
  | 'apple_pay'
  | 'apple_tap_to_pay'
  | 'card'
  | 'google_pay'
  | 'revolut_pay_account'
  | 'revolut_pay_card'
  | 'sepa_direct_debit'
type DisputePaymentMethodApplePay = {
  type: DisputePaymentMethodType
  card_brand?: CardBrandV2 | undefined
  card_last_four?: CardLastFour | undefined
}
type DisputePaymentMethodAppleTapToPay = { type: DisputePaymentMethodType }
type DisputePaymentMethodCard = {
  type: DisputePaymentMethodType
  card_brand?: CardBrandV2 | undefined
  card_last_four?: CardLastFour | undefined
}
type DisputePaymentMethodGooglePay = {
  type: DisputePaymentMethodType
  card_brand?: CardBrandV2 | undefined
  card_last_four?: CardLastFour | undefined
}
type DisputePaymentMethodRevolutPayAccount = { type: DisputePaymentMethodType }
type DisputePaymentMethodRevolutPayCard = {
  type: DisputePaymentMethodType
  card_brand?: CardBrandV2 | undefined
  card_last_four?: CardLastFour | undefined
}
type DisputePaymentMethodSepaDirectDebit = {
  type: DisputePaymentMethodType
  debtor_iban_last_four?: SepaDirectDebitDebtorIbanLastFour | undefined
  debtor_name?: SepaDirectDebitDebtorName | undefined
  mandate_reference?: SepaDirectDebitMandateReference | undefined
}
type DisputePaymentMethod =
  | DisputePaymentMethodApplePay
  | DisputePaymentMethodAppleTapToPay
  | DisputePaymentMethodCard
  | DisputePaymentMethodGooglePay
  | DisputePaymentMethodRevolutPayAccount
  | DisputePaymentMethodRevolutPayCard
  | DisputePaymentMethodSepaDirectDebit
type DisputePayment = {
  id?: DisputePaymentId | undefined
  order_id?: DisputePaymentOrderId | undefined
  created_at?: DisputePaymentCreatedAt | undefined
  arn?: DisputePaymentArn | undefined
  amount?: DisputePaymentAmount | undefined
  currency?: Currency | undefined
  payment_method?: DisputePaymentMethod | undefined
}
type Dispute = {
  id?: string | undefined
  state?: 'needs_response' | 'under_review' | 'won' | 'lost' | undefined
  substate?:
    | 'arbitration'
    | 'lost_accepted'
    | 'lost_arbitration'
    | 'lost_expired'
    | 'lost_pre_arbitration'
    | 'lost_representment'
    | 'new'
    | 'pre_arbitration'
    | 'representment'
    | 'won_arbitration'
    | 'won_pre_arbitration'
    | 'won_representment'
    | 'won_reversal'
    | undefined
  created_at?: string | undefined
  updated_at?: string | undefined
  response_due_date?: string | undefined
  reason_code?: string | undefined
  reason_description?: string | undefined
  amount?: bigint | undefined
  currency?: Currency | undefined
  payment?: DisputePayment | undefined
}
type Disputes = Dispute[]
type DisputeEvidenceCreation = { file: File }
type DisputeEvidence = { id: string }
type DisputeChallengeReason =
  | 'product_already_delivered'
  | 'refund_already_issued'
  | 'disagree_with_customers_claim'
type DisputeChallengeComment = string
type DisputeChallengeEvidences = string[]
type DisputeChallenge = {
  reason: DisputeChallengeReason
  comment?: DisputeChallengeComment | undefined
  evidences: DisputeChallengeEvidences
}
type PaymentRetrievalV2 = {
  order_id?: string | undefined
  id: PaymentId
  state: PaymentStateV2
  decline_reason?: DeclineReasonV2 | undefined
  bank_message?: BankMessage | undefined
  created_at: PaymentCreated
  updated_at: PaymentUpdated
  token?: PaymentToken | undefined
  amount: PaymentAmount
  authorised_amount?: PaymentAuthorisedAmount | undefined
  currency?: Currency | undefined
  settled_amount?: PaymentSettledAmount | undefined
  settled_currency?: PaymentSettledCurrency | undefined
  payment_method?: PaymentMethodV2 | undefined
  authentication_challenge?: AuthenticationChallenge | undefined
  billing_address?: AddressV2 | undefined
  risk_level?: PaymentRiskLevel | undefined
  fees?: Fees | undefined
  payer?: Payer | undefined
}
type SubscriptionPlanName = string
type SubscriptionPlanTrialDuration = string
type SubscriptionPlanOrdinal = number
type CycleDuration = string
type CycleCount = number | null
type SubscriptionAmount = bigint
type SubscriptionItemName = string
type SubscriptionItemType = 'flat' | 'usage'
type SubscriptionItemPackageSize = number
type SubscriptionItemUnit = string
type SubscriptionItemQuantity = number
type SubscriptionItemFlatCreation = {
  name: SubscriptionItemName
  type: SubscriptionItemType
  package_size?: SubscriptionItemPackageSize | undefined
  unit: SubscriptionItemUnit
  quantity: SubscriptionItemQuantity
  amount: bigint
  currency: Currency
}
type SubscriptionItemTier = {
  upper_quantity_threshold?: (number | null) | undefined
  amount: bigint
}
type SubscriptionItemCode = string
type UsageAggregationMethod = 'sum' | 'latest' | 'max'
type SubscriptionItemUsageCreation = {
  name: SubscriptionItemName
  type: SubscriptionItemType
  package_size?: SubscriptionItemPackageSize | undefined
  unit: SubscriptionItemUnit
  amount?: bigint | undefined
  currency: Currency
  tiers?: SubscriptionItemTier[] | undefined
  code: SubscriptionItemCode
  usage_aggregation_method: UsageAggregationMethod
}
type SubscriptionItemCreation = SubscriptionItemFlatCreation | SubscriptionItemUsageCreation
type SubscriptionItemsCreation = SubscriptionItemCreation[]
type SubscriptionPlanPhaseCreation = {
  ordinal: SubscriptionPlanOrdinal
  cycle_duration: CycleDuration
  cycle_count?: CycleCount | undefined
  amount: SubscriptionAmount
  currency: Currency
  subscription_items?: SubscriptionItemsCreation | undefined
}
type SubscriptionPlanVariationCreation = { phases: SubscriptionPlanPhaseCreation[] }
type SubscriptionPlanCreation = {
  name: SubscriptionPlanName
  trial_duration?: SubscriptionPlanTrialDuration | undefined
  variations: SubscriptionPlanVariationCreation[]
}
type SubscriptionPlanId = string
type SubscriptionPlanState = 'active' | 'deactivated'
type SubscriptionPlanCreated = string
type SubscriptionPlanUpdated = string
type SubscriptionPlanVariationId = string
type SubscriptionPlanPhaseId = string
type SubscriptionItemId = string
type SubscriptionItemFlat = {
  id: SubscriptionItemId
  name: SubscriptionItemName
  type: SubscriptionItemType
  package_size?: SubscriptionItemPackageSize | undefined
  unit: SubscriptionItemUnit
  quantity: SubscriptionItemQuantity
  amount: bigint
  currency: Currency
}
type SubscriptionItemUsage = {
  id: SubscriptionItemId
  name: SubscriptionItemName
  type: SubscriptionItemType
  package_size?: SubscriptionItemPackageSize | undefined
  unit: SubscriptionItemUnit
  amount?: bigint | undefined
  currency: Currency
  tiers?: SubscriptionItemTier[] | undefined
  code: SubscriptionItemCode
  usage_aggregation_method: UsageAggregationMethod
}
type SubscriptionItem = SubscriptionItemFlat | SubscriptionItemUsage
type SubscriptionItems = SubscriptionItem[]
type SubscriptionPlanPhase = {
  id: SubscriptionPlanPhaseId
  ordinal: SubscriptionPlanOrdinal
  cycle_duration: CycleDuration
  cycle_count?: CycleCount | undefined
  amount?: SubscriptionAmount | undefined
  currency?: Currency | undefined
  subscription_items?: SubscriptionItems | undefined
}
type SubscriptionPlanVariation = {
  id: SubscriptionPlanVariationId
  phases: SubscriptionPlanPhase[]
}
type SubscriptionPlan = {
  id: SubscriptionPlanId
  name: SubscriptionPlanName
  trial_duration?: SubscriptionPlanTrialDuration | undefined
  state: SubscriptionPlanState
  created_at: SubscriptionPlanCreated
  updated_at: SubscriptionPlanUpdated
  variations: SubscriptionPlanVariation[]
}
type SubscriptionPlans = {
  next_page_token?: (string | null) | undefined
  subscription_plans: SubscriptionPlan[]
}
type SubscriptionExternalReference = string
type SetupOrderRedirectURL = string
type SubscriptionTrialDuration = string
type SubscriptionCreation = {
  plan_variation_id: SubscriptionPlanVariationId
  customer_id: CustomerId
  external_reference?: SubscriptionExternalReference | undefined
  setup_order_redirect_url?: SetupOrderRedirectURL | undefined
  trial_duration?: SubscriptionTrialDuration | undefined
}
type SubscriptionState = 'pending' | 'active' | 'overdue' | 'paused' | 'cancelled' | 'finished'
type SubscriptionPaymentMethodType = 'automatic' | 'manual'
type SubscriptionCreated = string
type SubscriptionUpdated = string
type SubscriptionStartDate = string | null
type SubscriptionCycleId = string
type SubscriptionTrialEndDate = string | null
type SetupOrderId = string
type SubscriptionScheduledActionType = 'cancel' | 'change_plan_variation'
type SubscriptionChangePlanReason = 'customer_request' | 'merchant_request'
type SubscriptionScheduledActionCancel = {
  type: SubscriptionScheduledActionType
  reason: SubscriptionChangePlanReason
}
type SubscriptionScheduledActionChangePlan = {
  type: SubscriptionScheduledActionType
  reason: SubscriptionChangePlanReason
  plan_variation_id: SubscriptionPlanVariationId
  plan_variation_phase_id?: SubscriptionPlanPhaseId | undefined
}
type SubscriptionScheduledAction =
  | SubscriptionScheduledActionCancel
  | SubscriptionScheduledActionChangePlan
type Subscription = {
  id: SubscriptionId
  external_reference?: SubscriptionExternalReference | undefined
  state: SubscriptionState
  customer_id: CustomerId
  plan_id: SubscriptionPlanId
  plan_variation_id: SubscriptionPlanVariationId
  payment_method_type: SubscriptionPaymentMethodType
  payment_method_id?: PaymentMethodId | undefined
  created_at: SubscriptionCreated
  updated_at: SubscriptionUpdated
  start_date?: SubscriptionStartDate | undefined
  current_cycle_id: SubscriptionCycleId
  trial_duration?: SubscriptionTrialDuration | undefined
  trial_end_date?: SubscriptionTrialEndDate | undefined
  setup_order_id?: SetupOrderId | undefined
  scheduled_action?: SubscriptionScheduledAction | undefined
}
type Subscriptions = { next_page_token?: NextPageToken | undefined; subscriptions: Subscription[] }
type SubscriptionUpdate = { external_reference?: SubscriptionExternalReference | undefined }
type SubscriptionChangePlan = {
  plan_variation_id: SubscriptionPlanVariationId
  plan_variation_phase_id?: SubscriptionPlanPhaseId | undefined
  scheduled: 'at_cycle_end'
  reason?: SubscriptionChangePlanReason | undefined
}
type SubscriptionUpdateRenewalDate = { renewal_date: string }
type CycleNumber = number
type PreviousCycleId = string | null
type SubscriptionCycleState = 'pending' | 'active' | 'finished'
type SubscriptionCycleStartDate = string
type SubscriptionCycleEndDate = string
type SubscriptionCycleUsageCutoffDate = string
type SubscriptionCyclePostBillingOrderId = string
type SubscriptionCycleTrial = boolean
type SubscriptionCycle = {
  id: SubscriptionCycleId
  subscription_id: SubscriptionId
  plan_variation_id: SubscriptionPlanVariationId
  plan_variation_phase_id?: SubscriptionPlanPhaseId | undefined
  number: CycleNumber
  previous_cycle_id?: PreviousCycleId | undefined
  state: SubscriptionCycleState
  start_date?: SubscriptionCycleStartDate | undefined
  end_date?: SubscriptionCycleEndDate | undefined
  usage_cutoff_date?: SubscriptionCycleUsageCutoffDate | undefined
  order_id?: OrderId | undefined
  post_billing_order_id?: SubscriptionCyclePostBillingOrderId | undefined
  trial?: SubscriptionCycleTrial | undefined
}
type SubscriptionCycles = {
  next_page_token?: (string | null) | undefined
  cycles: SubscriptionCycle[]
}
type SubscriptionUsageDate = string
type SubscriptionUsageQuantity = number
type SubscriptionUsageMetadata = { [x: string]: string | number | boolean }
type SubscriptionUsageCreation = {
  subscription_id: SubscriptionId
  subscription_item_code: SubscriptionItemCode
  usage_date: SubscriptionUsageDate
  quantity: SubscriptionUsageQuantity
  metadata?: SubscriptionUsageMetadata | undefined
}
type SubscriptionUsageId = string
type SubscriptionUsageCreatedDate = string
type SubscriptionUsageUpdatedDate = string
type SubscriptionUsage = {
  id: SubscriptionUsageId
  subscription_id: SubscriptionId
  subscription_cycle_id: SubscriptionCycleId
  subscription_item_code: SubscriptionItemCode
  usage_date: SubscriptionUsageDate
  quantity: SubscriptionUsageQuantity
  metadata?: SubscriptionUsageMetadata | undefined
  created_at: SubscriptionUsageCreatedDate
  updated_at: SubscriptionUsageUpdatedDate
}
type SubscriptionUsages = {
  next_page_token?: NextPageToken | undefined
  subscription_usages?: SubscriptionUsage[] | undefined
}
type SubscriptionUsageUpdate = {
  quantity?: SubscriptionUsageQuantity | undefined
  metadata?: SubscriptionUsageMetadata | undefined
}
type PayoutState = 'processing' | 'completed' | 'failed'
type PayoutId = string
type PayoutDestinationType = 'current_pocket' | 'external_beneficiary'
type PayoutAmount = bigint
type Payout = {
  id: PayoutId
  state: PayoutState
  created_at: string
  destination_type: PayoutDestinationType
  amount?: PayoutAmount | undefined
  currency?: Currency | undefined
}
type ReportRunFrom = string
type ReportRunTo = string
type ReportRunEntityTypes = ('payment' | 'refund' | 'dispute')[]
type ReportRunEntityStates = ('completed' | 'processing' | 'cancelled' | 'reverted')[]
type ReportRunCurrency = string
type ReportRunLocationId = string
type ReportRunFilter = {
  from: ReportRunFrom
  to: ReportRunTo
  entity_types?: ReportRunEntityTypes | undefined
  entity_states?: ReportRunEntityStates | undefined
  currency?: ReportRunCurrency | undefined
  location_id?: ReportRunLocationId | undefined
}
type ReportRunFormat = 'csv'
type ReportRunType =
  | 'settlement_report'
  | 'custom_report'
  | 'payments_report'
  | 'payout_statement_report'
  | 'icpp_fee_breakdown_report'
type ReportRunTimezone = string
type ReportRunSettlementOptions = {
  timezone?: ReportRunTimezone | undefined
  columns?:
    | (
        | 'transaction_id'
        | 'order_id'
        | 'original_order_id'
        | 'started_date'
        | 'updated_date'
        | 'completed_date'
        | 'payment_created_date'
        | 'payment_captured_date'
        | 'type'
        | 'state'
        | 'description'
        | 'merchant_order_ext_ref'
        | 'customer_id'
        | 'amount'
        | 'currency'
        | 'settlement_amount'
        | 'settlement_currency'
        | 'payment_method'
        | 'fee_amount'
        | 'fee_currency'
        | 'processing_fee_amount'
        | 'processing_fee_currency'
        | 'browser_url'
        | 'location_id'
      )[]
    | undefined
}
type ReportRunSettlementReport = {
  filter: ReportRunFilter
  format: ReportRunFormat
  type: ReportRunType
  options?: ReportRunSettlementOptions | undefined
}
type ReportRunCustomOptions = {
  timezone?: ReportRunTimezone | undefined
  columns?:
    | (
        | 'transaction_id'
        | 'related_transaction_id'
        | 'transaction_description'
        | 'payout_id'
        | 'dispute_id'
        | 'account_id'
        | 'account_balance'
        | 'order_id'
        | 'original_order_id'
        | 'original_order_ext_ref'
        | 'order_description'
        | 'order_channel'
        | 'order_customer_note'
        | 'order_tip_amount'
        | 'order_created_by'
        | 'payment_initiated_by'
        | 'order_line_items'
        | 'payout_reference'
        | 'invoice_reference'
        | 'started_date'
        | 'created_date'
        | 'updated_date'
        | 'completed_date'
        | 'payment_created_date'
        | 'payment_captured_date'
        | 'type'
        | 'legacy_type'
        | 'state'
        | 'description'
        | 'merchant_order_ext_ref'
        | 'customer_id'
        | 'amount'
        | 'currency'
        | 'settlement_amount'
        | 'settlement_currency'
        | 'exchange_rate'
        | 'refunded_amount'
        | 'statement_descriptor'
        | 'tip_amount'
        | 'terminal_hardware_id'
        | 'customer_name'
        | 'customer_email'
        | 'customer_card_number'
        | 'customer_card_brand'
        | 'customer_card_type'
        | 'customer_card_category'
        | 'payment_method'
        | 'fee_amount'
        | 'fee_currency'
        | 'processing_fee_amount'
        | 'processing_fee_currency'
        | 'fx_fee_amount'
        | 'fx_fee_currency'
        | 'browser_url'
        | 'beneficiary_name'
        | 'beneficiary_account_number'
        | 'location_id'
        | 'location_name'
        | 'surcharge_amount'
        | 'order_surcharge_amount'
        | 'order_custom_field_name'
        | 'order_custom_field_value'
        | 'offline_payment_state'
        | 'order_authorisation_type'
        | 'metadata.*'
      )[]
    | undefined
}
type ReportRunCustomReport = {
  filter: ReportRunFilter
  format: ReportRunFormat
  type: ReportRunType
  options?: ReportRunCustomOptions | undefined
}
type ReportRunPaymentsEntityStates = ('completed' | 'failed' | 'declined' | 'cancelled')[]
type ReportRunPaymentsFilter = {
  from: ReportRunFrom
  to: ReportRunTo
  entity_states?: ReportRunPaymentsEntityStates | undefined
}
type ReportRunPaymentsOptions = {
  timezone?: ReportRunTimezone | undefined
  columns?:
    | (
        | 'payment_id'
        | 'type'
        | 'description'
        | 'original_payment_id'
        | 'order_id'
        | 'state'
        | 'reason'
        | 'amount'
        | 'currency'
        | 'surcharge_amount'
        | 'tip_amount'
        | 'refunded_amount'
        | 'created_date'
        | 'captured_date'
        | 'merchant_order_ext_ref'
        | 'payment_method'
        | 'location_id'
        | 'customer_id'
        | 'customer_card_number'
        | 'customer_card_country'
        | 'customer_card_brand'
        | 'customer_card_type'
        | 'customer_card_category'
        | 'customer_email'
        | 'fee_amount'
        | 'fee_currency'
      )[]
    | undefined
}
type ReportRunPaymentsReport = {
  filter: ReportRunPaymentsFilter
  format: ReportRunFormat
  type: ReportRunType
  options?: ReportRunPaymentsOptions | undefined
}
type ReportRunPayoutFilter = { payout_id: PayoutId }
type ReportRunPayoutOptions = {
  timezone?: ReportRunTimezone | undefined
  columns?:
    | (
        | 'created_date'
        | 'completed_date'
        | 'payout_affected_date'
        | 'affected_payout_amount'
        | 'transaction_id'
        | 'order_id'
        | 'dispute_id'
        | 'merchant_order_reference'
        | 'type'
        | 'related_icpp_charge_id'
        | 'transaction_amount'
        | 'transaction_currency'
        | 'billing_amount'
        | 'billing_currency'
        | 'state'
        | 'original_transaction_id'
        | 'original_transaction_amount'
        | 'original_transaction_currency'
        | 'original_order_id'
        | 'original_order_channel'
        | 'original_merchant_order_reference'
        | 'fee_amount'
        | 'fee_currency'
        | 'settlement_amount'
        | 'settlement_currency'
        | 'location_id'
        | 'location_name'
        | 'submerchant_id'
        | 'payout_transfer_reference'
        | 'payout_total_amount'
        | 'payout_date'
      )[]
    | undefined
}
type ReportRunPayoutReport = {
  filter: ReportRunPayoutFilter
  format: ReportRunFormat
  type: ReportRunType
  options?: ReportRunPayoutOptions | undefined
}
type IcppChargeId = string
type ReportRunIcppFilter = { icpp_charge_id: IcppChargeId }
type ReportRunIcppOptions = {
  timezone?: ReportRunTimezone | undefined
  columns?:
    | (
        | 'id'
        | 'created_at'
        | 'operation'
        | 'amount'
        | 'currency'
        | 'settlement_amount'
        | 'settlement_currency'
        | 'payment_method'
        | 'card_scheme'
        | 'card_funding'
        | 'order_description'
        | 'order_merchant_external_ref'
        | 'original_operation_id'
        | 'acquiring_fee_amount'
        | 'card_interchange_fee_amount'
        | 'card_scheme_fee_amount'
        | 'card_type'
        | 'order_channel'
        | 'card_country'
      )[]
    | undefined
}
type ReportRunIcppReport = {
  filter: ReportRunIcppFilter
  format: ReportRunFormat
  type: ReportRunType
  options?: ReportRunIcppOptions | undefined
}
type ReportRun = {
  report_run_id: string
  status: 'processing' | 'completed' | 'failed' | 'expired'
  file_url?: string | undefined
}
type ReportRunCsvSettlement = {
  transaction_id?: string | undefined
  order_id?: string | undefined
  original_order_id?: string | undefined
  started_date?: string | undefined
  updated_date?: string | undefined
  completed_date?: string | undefined
  payment_created_date?: string | undefined
  payment_captured_date?: string | undefined
  type?: 'SETTLEMENT' | 'REFUND' | 'CHARGEBACK' | 'CHARGEBACK_REVERSAL' | undefined
  state?: string | undefined
  description?: string | undefined
  merchant_order_ext_ref?: string | undefined
  customer_id?: string | undefined
  amount?: number | undefined
  currency?: string | undefined
  settlement_amount?: number | undefined
  settlement_currency?: string | undefined
  payment_method?: string | undefined
  fee_amount?: number | undefined
  fee_currency?: string | undefined
  processing_fee_amount?: number | undefined
  processing_fee_currency?: string | undefined
  browser_url?: string | undefined
  location_id?: string | undefined
}
type ReportRunCsvCustom = {
  transaction_id?: string | undefined
  related_transaction_id?: string | undefined
  transaction_description?: string | undefined
  order_id?: string | undefined
  original_order_id?: string | undefined
  original_order_ext_ref?: string | undefined
  order_description?: string | undefined
  order_channel?: string | undefined
  order_customer_note?: string | undefined
  order_tip_amount?: number | undefined
  order_created_by?: string | undefined
  payment_initiated_by?: string | undefined
  order_line_items?: string | undefined
  payout_id?: string | undefined
  payout_reference?: string | undefined
  invoice_reference?: string | undefined
  dispute_id?: string | undefined
  account_id?: string | undefined
  account_balance?: number | undefined
  started_date?: string | undefined
  created_date?: string | undefined
  updated_date?: string | undefined
  completed_date?: string | undefined
  payment_created_date?: string | undefined
  payment_captured_date?: string | undefined
  type?:
    | 'SETTLEMENT'
    | 'RESERVE'
    | 'REFUND'
    | 'TOPUP'
    | 'TOPUP_RETURN'
    | 'CHARGEBACK'
    | 'CHARGEBACK_REVERSAL'
    | 'CREDIT_REIMBURSEMENT'
    | 'FEE'
    | 'PAYOUT'
    | 'TRANSFER'
    | 'REVOLUT_REFUND'
    | 'REVOLUT_FEE'
    | 'WRITE_OFF'
    | 'CHARGE'
    | undefined
  legacy_type?: string | undefined
  state?: string | undefined
  description?: string | undefined
  merchant_order_ext_ref?: string | undefined
  customer_id?: string | undefined
  amount?: number | undefined
  currency?: string | undefined
  settlement_amount?: number | undefined
  settlement_currency?: string | undefined
  exchange_rate?: number | undefined
  refunded_amount?: number | undefined
  statement_descriptor?: string | undefined
  tip_amount?: number | undefined
  surcharge_amount?: number | undefined
  order_surcharge_amount?: number | undefined
  terminal_hardware_id?: string | undefined
  customer_name?: string | undefined
  customer_email?: string | undefined
  customer_card_number?: string | undefined
  customer_card_brand?: string | undefined
  customer_card_type?: 'DEBIT' | 'CREDIT' | 'PREPAID' | 'DEFERRED_DEBIT' | 'CHARGE' | undefined
  customer_card_category?: 'consumer' | 'commercial' | undefined
  payment_method?: string | undefined
  fee_amount?: number | undefined
  fee_currency?: string | undefined
  processing_fee_amount?: number | undefined
  processing_fee_currency?: string | undefined
  fx_fee_amount?: number | undefined
  fx_fee_currency?: string | undefined
  browser_url?: string | undefined
  beneficiary_name?: string | undefined
  beneficiary_account_number?: string | undefined
  location_id?: string | undefined
  location_name?: string | undefined
  order_custom_field_name?: string | undefined
  order_custom_field_value?: string | undefined
  offline_payment_state?: string | undefined
  order_authorisation_type?: string | undefined
}
type ReportRunCsvPayments = {
  payment_id?: string | undefined
  type?: 'PAYMENT' | 'REFUND' | undefined
  description?: string | undefined
  original_payment_id?: string | undefined
  order_id?: string | undefined
  state?: 'COMPLETED' | 'FAILED' | 'DECLINED' | 'CANCELLED' | 'PROCESSING' | undefined
  reason?: string | undefined
  amount?: number | undefined
  currency?: string | undefined
  surcharge_amount?: number | undefined
  tip_amount?: number | undefined
  refunded_amount?: number | undefined
  created_date?: string | undefined
  captured_date?: string | undefined
  merchant_order_ext_ref?: string | undefined
  payment_method?: string | undefined
  location_id?: string | undefined
  customer_id?: string | undefined
  customer_card_number?: string | undefined
  customer_card_country?: string | undefined
  customer_card_brand?: string | undefined
  customer_card_type?: 'DEBIT' | 'CREDIT' | 'PREPAID' | 'DEFERRED_DEBIT' | 'CHARGE' | undefined
  customer_card_category?: 'consumer' | 'commercial' | undefined
  customer_email?: string | undefined
  fee_amount?: number | undefined
  fee_currency?: string | undefined
}
type ReportRunCsvPayout = {
  created_date?: string | undefined
  completed_date?: string | undefined
  payout_affected_date?: string | undefined
  affected_payout_amount?: boolean | undefined
  transaction_id?: string | undefined
  order_id?: string | undefined
  dispute_id?: string | undefined
  merchant_order_reference?: string | undefined
  type?:
    | 'Settlement'
    | 'Refund'
    | 'External transfer money return'
    | 'Topup'
    | 'Topup Return'
    | 'Customer dispute - withdrawal'
    | 'Customer dispute - won'
    | 'Transfer from linked pocket'
    | 'Automatic negative balance recovery'
    | 'Payout'
    | 'Payout to an external account'
    | 'Transfer from linked pocket with FX'
    | 'Payout with FX'
    | 'Money reserve block'
    | 'Money reserve unblock'
    | 'IC++ post-billing fee'
    | 'Fee refund'
    | 'Unrecognised transaction'
    | 'Irreducible balance hold'
    | undefined
  related_icpp_charge_id?: string | undefined
  transaction_amount?: number | undefined
  transaction_currency?: string | undefined
  billing_amount?: number | undefined
  billing_currency?: string | undefined
  state?: 'COMPLETED' | 'PENDING' | 'REVERTED' | 'DECLINED' | 'FAILED' | undefined
  original_transaction_id?: string | undefined
  original_transaction_amount?: number | undefined
  original_transaction_currency?: string | undefined
  original_order_id?: string | undefined
  original_order_channel?: string | undefined
  original_merchant_order_reference?: string | undefined
  fee_amount?: number | undefined
  fee_currency?: string | undefined
  settlement_amount?: number | undefined
  settlement_currency?: string | undefined
  location_id?: string | undefined
  location_name?: string | undefined
  submerchant_id?: string | undefined
  payout_transfer_reference?: string | undefined
  payout_total_amount?: number | undefined
  payout_date?: string | undefined
}
type ReportRunCsvIcpp = {
  id?: string | undefined
  created_at?: string | undefined
  operation?: 'SALE' | 'REFUND' | 'DISPUTE' | undefined
  amount?: number | undefined
  currency?: string | undefined
  settlement_amount?: number | undefined
  settlement_currency?: string | undefined
  payment_method?: string | undefined
  card_scheme?: string | undefined
  card_funding?: string | undefined
  order_description?: string | undefined
  order_merchant_external_ref?: string | undefined
  original_operation_id?: string | undefined
  acquiring_fee_amount?: number | undefined
  card_interchange_fee_amount?: number | undefined
  card_scheme_fee_amount?: number | undefined
  card_type?: 'COMMERCIAL' | 'CONSUMER' | undefined
  order_channel?: string | undefined
  card_country?: string | undefined
}
type WebhookUrl = string
type WebhookEvents = (
  | 'ORDER_COMPLETED'
  | 'ORDER_AUTHORISED'
  | 'ORDER_CANCELLED'
  | 'ORDER_FAILED'
  | 'ORDER_INCREMENTAL_AUTHORISATION_AUTHORISED'
  | 'ORDER_INCREMENTAL_AUTHORISATION_DECLINED'
  | 'ORDER_INCREMENTAL_AUTHORISATION_FAILED'
  | 'ORDER_PAYMENT_AUTHENTICATION_CHALLENGED'
  | 'ORDER_PAYMENT_AUTHENTICATED'
  | 'ORDER_PAYMENT_AUTHORISATION_STARTED'
  | 'ORDER_PAYMENT_DECLINED'
  | 'ORDER_PAYMENT_FAILED'
  | 'SUBSCRIPTION_INITIATED'
  | 'SUBSCRIPTION_FINISHED'
  | 'SUBSCRIPTION_CANCELLED'
  | 'SUBSCRIPTION_OVERDUE'
  | 'PAYOUT_INITIATED'
  | 'PAYOUT_COMPLETED'
  | 'PAYOUT_FAILED'
  | 'DISPUTE_ACTION_REQUIRED'
  | 'DISPUTE_UNDER_REVIEW'
  | 'DISPUTE_WON'
  | 'DISPUTE_LOST'
  | 'DISBURSEMENT_COMPLETED'
  | 'DISBURSEMENT_DECLINED'
  | 'DISBURSEMENT_REFUND_COMPLETED'
)[]
type WebhookCreation = { url: WebhookUrl; events: WebhookEvents }
type WebhookId = string
type WebhookSigningSecret = string
type WebhookV2 = {
  id: WebhookId
  url: WebhookUrl
  events: WebhookEvents
  signing_secret: WebhookSigningSecret
}
type Webhooks = { webhooks: WebhookV2[] }
type WebhookUpdate = { url?: WebhookUrl | undefined; events?: WebhookEvents | undefined }
type SynchronousWebhookCreation = {
  event_type: 'fast_checkout.validate_address'
  url: string
  location_id?: LocationId | undefined
}
type SynchronousWebhook = {
  id: string
  signing_key: string
  url: string
  event_type: 'fast_checkout.validate_address'
  location_id?: LocationId | undefined
}
type LocationName = string
type LocationType = 'online' | 'physical'
type LocationOnlineDetails = { domain: string }
type LocationCreationOnline = {
  name: LocationName
  type: LocationType
  details: LocationOnlineDetails
}
type GeoLocation = { lat: number; lon: number }
type DayOpeningHours = { from: string; to: string }[]
type OpeningHours = {
  monday?: DayOpeningHours | undefined
  tuesday?: DayOpeningHours | undefined
  wednesday?: DayOpeningHours | undefined
  thursday?: DayOpeningHours | undefined
  friday?: DayOpeningHours | undefined
  saturday?: DayOpeningHours | undefined
  sunday?: DayOpeningHours | undefined
}
type LocationPhysicalDetails = {
  address: AddressV3
  geo_location: GeoLocation
  opening_hours: OpeningHours
}
type LocationCreationPhysical = {
  name: LocationName
  type: LocationType
  details: LocationPhysicalDetails
}
type LocationCreation = LocationCreationOnline | LocationCreationPhysical
type LocationOnline = {
  id: LocationId
  name: LocationName
  type: LocationType
  details: LocationOnlineDetails
}
type LocationPhysical = {
  id: LocationId
  name: LocationName
  type: LocationType
  details: LocationPhysicalDetails
}
type Location = LocationOnline | LocationPhysical
type LocationUpdateOnline = {
  name?: LocationName | undefined
  details?: LocationOnlineDetails | undefined
}
type LocationUpdatePhysical = LocationOnline | LocationPhysical
type LocationUpdate = LocationUpdateOnline | LocationUpdatePhysical
type TerminalOperationMode = 'pos' | 'payment_acceptance'
type TerminalId = string
type TerminalName = string
type TerminalType = 'youtransactor_ucube_touch' | 'newland_n950' | 'newland_n750' | 'newland_r25p'
type TerminalSerialNumber = string
type TerminalBatteryLevel = number
type TerminalOnline = boolean
type TerminalLastOnlineAt = string
type TerminalDeviceId = string
type Terminal = {
  id: TerminalId
  name?: TerminalName | undefined
  type: TerminalType
  serial_number: TerminalSerialNumber
  battery_level?: TerminalBatteryLevel | undefined
  online: TerminalOnline
  last_online_at?: TerminalLastOnlineAt | undefined
  device_id?: TerminalDeviceId | undefined
}
type Terminals = Terminal[]
type TerminalsResponse = { terminals: Terminals }
type PaymentIntentAmount = bigint
type PaymentIntentCreation = { amount: PaymentIntentAmount; terminal_id: TerminalId }
type PaymentIntentId = string
type PaymentIntentState = 'pending' | 'processing' | 'completed' | 'cancelled' | 'failed'
type PaymentIntent = {
  id: PaymentIntentId
  state: PaymentIntentState
  terminal_id: TerminalId
  order_id: OrderId
  payment_id?: PaymentId | undefined
  amount: PaymentIntentAmount
  currency: Currency
  created_at: string
  updated_at: string
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/api/orders': {
      $post:
        | {
            input: {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            } & { json: OrderCreationV4 }
            output: OrderV4
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            } & { json: OrderCreationV4 }
            output: ErrorV2
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            } & { json: OrderCreationV4 }
            output: ErrorV2
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            } & { json: OrderCreationV4 }
            output: ErrorV2
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            } & { json: OrderCreationV4 }
            output: ErrorV2
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            } & { json: OrderCreationV4 }
            output: ErrorV2
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            } & { json: OrderCreationV4 }
            output: ErrorV2
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: {
              query: {
                limit?: number | undefined
                from?: string | undefined
                to?: string | undefined
                customer_id?: string | undefined
                merchant_order_data_reference?: MerchantOrderExternalReference | undefined
                state?: OrderState[] | undefined
                location_id?: string | undefined
              }
            } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            }
            output: OrdersV2
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                from?: string | undefined
                to?: string | undefined
                customer_id?: string | undefined
                merchant_order_data_reference?: MerchantOrderExternalReference | undefined
                state?: OrderState[] | undefined
                location_id?: string | undefined
              }
            } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                from?: string | undefined
                to?: string | undefined
                customer_id?: string | undefined
                merchant_order_data_reference?: MerchantOrderExternalReference | undefined
                state?: OrderState[] | undefined
                location_id?: string | undefined
              }
            } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                from?: string | undefined
                to?: string | undefined
                customer_id?: string | undefined
                merchant_order_data_reference?: MerchantOrderExternalReference | undefined
                state?: OrderState[] | undefined
                location_id?: string | undefined
              }
            } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                from?: string | undefined
                to?: string | undefined
                customer_id?: string | undefined
                merchant_order_data_reference?: MerchantOrderExternalReference | undefined
                state?: OrderState[] | undefined
                location_id?: string | undefined
              }
            } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                from?: string | undefined
                to?: string | undefined
                customer_id?: string | undefined
                merchant_order_data_reference?: MerchantOrderExternalReference | undefined
                state?: OrderState[] | undefined
                location_id?: string | undefined
              }
            } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/orders/:order_id': {
      $get:
        | {
            input: { param: { order_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            }
            output: OrderV4
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { order_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { order_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { order_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { order_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 500
          }
      $patch:
        | {
            input: { param: { order_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            } & { json: OrderUpdateV4 }
            output: OrderV4
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { order_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            } & { json: OrderUpdateV4 }
            output: ErrorV2
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { order_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            } & { json: OrderUpdateV4 }
            output: ErrorV2
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { order_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            } & { json: OrderUpdateV4 }
            output: ErrorV2
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { order_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            } & { json: OrderUpdateV4 }
            output: ErrorV2
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { order_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            } & { json: OrderUpdateV4 }
            output: ErrorV2
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { order_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            } & { json: OrderUpdateV4 }
            output: ErrorV2
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/orders/:order_id/increment-authorisation': {
      $post:
        | {
            input: { param: { order_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            } & { json: IncrementalAuthorisationRequest }
            output: OrderV4
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { order_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            } & { json: IncrementalAuthorisationRequest }
            output: ErrorV2
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { order_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            } & { json: IncrementalAuthorisationRequest }
            output: ErrorV2
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { order_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            } & { json: IncrementalAuthorisationRequest }
            output: ErrorV2
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { order_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            } & { json: IncrementalAuthorisationRequest }
            output: ErrorV2
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { order_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            } & { json: IncrementalAuthorisationRequest }
            output: ErrorV2
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { order_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            } & { json: IncrementalAuthorisationRequest }
            output: ErrorV2
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/orders/:order_id/capture': {
      $post:
        | {
            input: { param: { order_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            } & { json: OrderCaptureV2 }
            output: OrderV4
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { order_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            } & { json: OrderCaptureV2 }
            output: ErrorV2
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { order_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            } & { json: OrderCaptureV2 }
            output: ErrorV2
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { order_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            } & { json: OrderCaptureV2 }
            output: ErrorV2
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { order_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            } & { json: OrderCaptureV2 }
            output: ErrorV2
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { order_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            } & { json: OrderCaptureV2 }
            output: ErrorV2
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { order_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            } & { json: OrderCaptureV2 }
            output: ErrorV2
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/orders/:order_id/cancel': {
      $post:
        | {
            input: { param: { order_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version'?:
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
                  | undefined
              }
            }
            output: OrderV4
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { order_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version'?:
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
                  | undefined
              }
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { order_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version'?:
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
                  | undefined
              }
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { order_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version'?:
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
                  | undefined
              }
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { order_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version'?:
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
                  | undefined
              }
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { order_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version'?:
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
                  | undefined
              }
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { order_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version'?:
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
                  | undefined
              }
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/orders/:order_id/refund': {
      $post:
        | {
            input: { param: { order_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
                'Idempotency-Key'?: string | undefined
              }
            } & { json: OrderRefundV2 }
            output: OrderV4
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { order_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
                'Idempotency-Key'?: string | undefined
              }
            } & { json: OrderRefundV2 }
            output: ErrorV2
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { order_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
                'Idempotency-Key'?: string | undefined
              }
            } & { json: OrderRefundV2 }
            output: ErrorV2
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { order_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
                'Idempotency-Key'?: string | undefined
              }
            } & { json: OrderRefundV2 }
            output: ErrorV2
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { order_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
                'Idempotency-Key'?: string | undefined
              }
            } & { json: OrderRefundV2 }
            output: ErrorV2
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { order_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
                'Idempotency-Key'?: string | undefined
              }
            } & { json: OrderRefundV2 }
            output: ErrorV2
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { order_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
                'Idempotency-Key'?: string | undefined
              }
            } & { json: OrderRefundV2 }
            output: ErrorV2
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { order_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
                'Idempotency-Key'?: string | undefined
              }
            } & { json: OrderRefundV2 }
            output: ErrorV2
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/orders/:order_id/payments': {
      $post:
        | {
            input: { param: { order_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: SavedPaymentMethod }
            output: PaymentRetrieval
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { order_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: SavedPaymentMethod }
            output: { errorId?: string | undefined; timestamp?: number | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { order_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: SavedPaymentMethod }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { order_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: SavedPaymentMethod }
            output: ErrorV2
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { order_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: SavedPaymentMethod }
            output: {
              errorId?: string | undefined
              timestamp?: number | undefined
              code?: number | undefined
            }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { order_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: SavedPaymentMethod }
            output: ErrorV2
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { order_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: SavedPaymentMethod }
            output: ErrorV2
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { order_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: PaymentRetrieval[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { order_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { order_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { order_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { order_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { order_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { order_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/customers': {
      $post:
        | {
            input: {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            } & { json: CustomerCreationV2 }
            output: CustomerCreated
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            } & { json: CustomerCreationV2 }
            output: ErrorV2
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            } & { json: CustomerCreationV2 }
            output: ErrorV2
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            } & { json: CustomerCreationV2 }
            output: ErrorV2
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            } & { json: CustomerCreationV2 }
            output: ErrorV2
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            } & { json: CustomerCreationV2 }
            output: ErrorV2
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: {
              query: {
                limit?: number | undefined
                page_token?: string | undefined
                from?: string | undefined
                to?: string | undefined
              }
            } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            }
            output: Customers
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                page_token?: string | undefined
                from?: string | undefined
                to?: string | undefined
              }
            } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                page_token?: string | undefined
                from?: string | undefined
                to?: string | undefined
              }
            } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                page_token?: string | undefined
                from?: string | undefined
                to?: string | undefined
              }
            } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                page_token?: string | undefined
                from?: string | undefined
                to?: string | undefined
              }
            } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/customers/:customer_id': {
      $get:
        | {
            input: { param: { customer_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            }
            output: CustomerV3
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { customer_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { customer_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { customer_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 500
          }
      $patch:
        | {
            input: { param: { customer_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            } & { json: CustomerUpdateV2 }
            output: CustomerV3
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { customer_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            } & { json: CustomerUpdateV2 }
            output: ErrorV2
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { customer_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            } & { json: CustomerUpdateV2 }
            output: ErrorV2
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { customer_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            } & { json: CustomerUpdateV2 }
            output: ErrorV2
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { customer_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            } & { json: CustomerUpdateV2 }
            output: ErrorV2
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { customer_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            } & { json: CustomerUpdateV2 }
            output: ErrorV2
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { customer_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            } & { json: CustomerUpdateV2 }
            output: ErrorV2
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | {
            input: { param: { customer_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { customer_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { customer_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { customer_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { customer_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { customer_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { customer_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/customers/:customer_id/payment-methods': {
      $get:
        | {
            input: { param: { customer_id: string } } & {
              query: { only_merchant?: boolean | undefined }
            } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            }
            output: CustomerPaymentMethodsV2
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { customer_id: string } } & {
              query: { only_merchant?: boolean | undefined }
            } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { customer_id: string } } & {
              query: { only_merchant?: boolean | undefined }
            } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { customer_id: string } } & {
              query: { only_merchant?: boolean | undefined }
            } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/customers/:customer_id/payment-methods/:payment_method_id': {
      $get:
        | {
            input: { param: { customer_id: string; payment_method_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            }
            output: PaymentMethodV4
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { customer_id: string; payment_method_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { customer_id: string; payment_method_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { customer_id: string; payment_method_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 500
          }
      $patch:
        | {
            input: { param: { customer_id: string; payment_method_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            } & { json: PaymentMethodUpdate }
            output: PaymentMethodV4
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { customer_id: string; payment_method_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            } & { json: PaymentMethodUpdate }
            output: ErrorV2
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { customer_id: string; payment_method_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            } & { json: PaymentMethodUpdate }
            output: ErrorV2
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { customer_id: string; payment_method_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            } & { json: PaymentMethodUpdate }
            output: ErrorV2
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { customer_id: string; payment_method_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            } & { json: PaymentMethodUpdate }
            output: ErrorV2
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { customer_id: string; payment_method_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            } & { json: PaymentMethodUpdate }
            output: ErrorV2
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | {
            input: { param: { customer_id: string; payment_method_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { customer_id: string; payment_method_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { customer_id: string; payment_method_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { customer_id: string; payment_method_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { customer_id: string; payment_method_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { customer_id: string; payment_method_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { customer_id: string; payment_method_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/disputes': {
      $get:
        | {
            input: {
              query: {
                limit?: number | undefined
                from_created_date?: string | undefined
                to_created_date?: string | undefined
                state?: ('needs_response' | 'under_review' | 'won' | 'lost')[] | undefined
                payment_id?: string[] | undefined
              }
            } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            }
            output: Disputes
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                from_created_date?: string | undefined
                to_created_date?: string | undefined
                state?: ('needs_response' | 'under_review' | 'won' | 'lost')[] | undefined
                payment_id?: string[] | undefined
              }
            } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                from_created_date?: string | undefined
                to_created_date?: string | undefined
                state?: ('needs_response' | 'under_review' | 'won' | 'lost')[] | undefined
                payment_id?: string[] | undefined
              }
            } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                from_created_date?: string | undefined
                to_created_date?: string | undefined
                state?: ('needs_response' | 'under_review' | 'won' | 'lost')[] | undefined
                payment_id?: string[] | undefined
              }
            } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/disputes/:dispute_id': {
      $get:
        | {
            input: { param: { dispute_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            }
            output: Dispute
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { dispute_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { dispute_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { dispute_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { dispute_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/disputes/:dispute_id/accept': {
      $post:
        | {
            input: { param: { dispute_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { dispute_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { dispute_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { dispute_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { dispute_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { dispute_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { dispute_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/disputes/:dispute_id/evidences': {
      $post:
        | {
            input: { param: { dispute_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
                'Content-Type': string
              }
            } & { form: DisputeEvidenceCreation }
            output: DisputeEvidence
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { dispute_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
                'Content-Type': string
              }
            } & { form: DisputeEvidenceCreation }
            output: ErrorV2
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { dispute_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
                'Content-Type': string
              }
            } & { form: DisputeEvidenceCreation }
            output: ErrorV2
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { dispute_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
                'Content-Type': string
              }
            } & { form: DisputeEvidenceCreation }
            output: ErrorV2
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { dispute_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
                'Content-Type': string
              }
            } & { form: DisputeEvidenceCreation }
            output: ErrorV2
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { dispute_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
                'Content-Type': string
              }
            } & { form: DisputeEvidenceCreation }
            output: ErrorV2
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { param: { dispute_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
                'Content-Type': string
              }
            } & { form: DisputeEvidenceCreation }
            output: ErrorV2
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { dispute_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
                'Content-Type': string
              }
            } & { form: DisputeEvidenceCreation }
            output: ErrorV2
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { dispute_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
                'Content-Type': string
              }
            } & { form: DisputeEvidenceCreation }
            output: ErrorV2
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/disputes/:dispute_id/challenge': {
      $post:
        | {
            input: { param: { dispute_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            } & { json: DisputeChallenge }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { dispute_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            } & { json: DisputeChallenge }
            output: ErrorV2
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { dispute_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            } & { json: DisputeChallenge }
            output: ErrorV2
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { dispute_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            } & { json: DisputeChallenge }
            output: ErrorV2
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { dispute_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            } & { json: DisputeChallenge }
            output: ErrorV2
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { dispute_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            } & { json: DisputeChallenge }
            output: ErrorV2
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { dispute_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            } & { json: DisputeChallenge }
            output: ErrorV2
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/payments/:payment_id': {
      $get:
        | {
            input: { param: { payment_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version'?:
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
                  | undefined
              }
            }
            output: PaymentRetrievalV2
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { payment_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version'?:
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
                  | undefined
              }
            }
            output: { errorId?: string | undefined; timestamp?: number | undefined }
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { payment_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version'?:
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
                  | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { payment_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version'?:
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
                  | undefined
              }
            }
            output: {
              errorId?: string | undefined
              timestamp?: number | undefined
              code?: number | undefined
            }
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { payment_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version'?:
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
                  | undefined
              }
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/subscription-plans': {
      $post:
        | {
            input: {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            } & { json: SubscriptionPlanCreation }
            output: SubscriptionPlan
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            } & { json: SubscriptionPlanCreation }
            output: ErrorV2
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            } & { json: SubscriptionPlanCreation }
            output: ErrorV2
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            } & { json: SubscriptionPlanCreation }
            output: ErrorV2
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            } & { json: SubscriptionPlanCreation }
            output: ErrorV2
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            } & { json: SubscriptionPlanCreation }
            output: ErrorV2
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            } & { json: SubscriptionPlanCreation }
            output: ErrorV2
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: {
              query: {
                limit?: number | undefined
                from?: string | undefined
                to?: string | undefined
                page_token?: string | undefined
              }
            } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            }
            output: SubscriptionPlans
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                from?: string | undefined
                to?: string | undefined
                page_token?: string | undefined
              }
            } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                from?: string | undefined
                to?: string | undefined
                page_token?: string | undefined
              }
            } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                from?: string | undefined
                to?: string | undefined
                page_token?: string | undefined
              }
            } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                from?: string | undefined
                to?: string | undefined
                page_token?: string | undefined
              }
            } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                from?: string | undefined
                to?: string | undefined
                page_token?: string | undefined
              }
            } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                from?: string | undefined
                to?: string | undefined
                page_token?: string | undefined
              }
            } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/subscription-plans/:subscription_plan_id': {
      $get:
        | {
            input: { param: { subscription_plan_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            }
            output: SubscriptionPlan
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { subscription_plan_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { subscription_plan_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { subscription_plan_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { subscription_plan_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { subscription_plan_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/subscriptions': {
      $post:
        | {
            input: {
              header: {
                'Idempotency-Key'?: string | undefined
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            } & { json: SubscriptionCreation }
            output: Subscription
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              header: {
                'Idempotency-Key'?: string | undefined
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            } & { json: SubscriptionCreation }
            output: ErrorV2
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              header: {
                'Idempotency-Key'?: string | undefined
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            } & { json: SubscriptionCreation }
            output: ErrorV2
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              header: {
                'Idempotency-Key'?: string | undefined
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            } & { json: SubscriptionCreation }
            output: ErrorV2
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              header: {
                'Idempotency-Key'?: string | undefined
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            } & { json: SubscriptionCreation }
            output: ErrorV2
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              header: {
                'Idempotency-Key'?: string | undefined
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            } & { json: SubscriptionCreation }
            output: ErrorV2
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              header: {
                'Idempotency-Key'?: string | undefined
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            } & { json: SubscriptionCreation }
            output: ErrorV2
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: {
              query: {
                limit?: number | undefined
                from?: string | undefined
                to?: string | undefined
                external_reference?: string | undefined
                page_token?: string | undefined
              }
            } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            }
            output: Subscriptions
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                from?: string | undefined
                to?: string | undefined
                external_reference?: string | undefined
                page_token?: string | undefined
              }
            } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                from?: string | undefined
                to?: string | undefined
                external_reference?: string | undefined
                page_token?: string | undefined
              }
            } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                from?: string | undefined
                to?: string | undefined
                external_reference?: string | undefined
                page_token?: string | undefined
              }
            } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                from?: string | undefined
                to?: string | undefined
                external_reference?: string | undefined
                page_token?: string | undefined
              }
            } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                from?: string | undefined
                to?: string | undefined
                external_reference?: string | undefined
                page_token?: string | undefined
              }
            } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                from?: string | undefined
                to?: string | undefined
                external_reference?: string | undefined
                page_token?: string | undefined
              }
            } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/subscriptions/:subscription_id': {
      $get:
        | {
            input: { param: { subscription_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            }
            output: Subscription
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { subscription_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { subscription_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { subscription_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { subscription_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { subscription_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 200
          }
      $patch:
        | {
            input: { param: { subscription_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            } & { json: SubscriptionUpdate }
            output: Subscription
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { subscription_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            } & { json: SubscriptionUpdate }
            output: ErrorV2
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { subscription_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            } & { json: SubscriptionUpdate }
            output: ErrorV2
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { subscription_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            } & { json: SubscriptionUpdate }
            output: ErrorV2
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { subscription_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            } & { json: SubscriptionUpdate }
            output: ErrorV2
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { subscription_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            } & { json: SubscriptionUpdate }
            output: ErrorV2
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { subscription_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            } & { json: SubscriptionUpdate }
            output: ErrorV2
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { subscription_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            } & { json: SubscriptionUpdate }
            output: ErrorV2
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/subscriptions/:subscription_id/cancel': {
      $post:
        | {
            input: { param: { subscription_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { subscription_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { subscription_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { subscription_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { subscription_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { subscription_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { subscription_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { subscription_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/subscriptions/:subscription_id/change-plan': {
      $post:
        | {
            input: { param: { subscription_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            } & { json: SubscriptionChangePlan }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { subscription_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            } & { json: SubscriptionChangePlan }
            output: ErrorV2
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { subscription_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            } & { json: SubscriptionChangePlan }
            output: ErrorV2
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { subscription_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            } & { json: SubscriptionChangePlan }
            output: ErrorV2
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { subscription_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            } & { json: SubscriptionChangePlan }
            output: ErrorV2
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { subscription_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            } & { json: SubscriptionChangePlan }
            output: ErrorV2
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { subscription_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            } & { json: SubscriptionChangePlan }
            output: ErrorV2
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { subscription_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            } & { json: SubscriptionChangePlan }
            output: ErrorV2
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/subscriptions/:subscription_id/change-renewal-date': {
      $post:
        | {
            input: { param: { subscription_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            } & { json: SubscriptionUpdateRenewalDate }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { subscription_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            } & { json: SubscriptionUpdateRenewalDate }
            output: ErrorV2
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { subscription_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            } & { json: SubscriptionUpdateRenewalDate }
            output: ErrorV2
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { subscription_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            } & { json: SubscriptionUpdateRenewalDate }
            output: ErrorV2
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { subscription_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            } & { json: SubscriptionUpdateRenewalDate }
            output: ErrorV2
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { subscription_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            } & { json: SubscriptionUpdateRenewalDate }
            output: ErrorV2
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { subscription_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            } & { json: SubscriptionUpdateRenewalDate }
            output: ErrorV2
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { subscription_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            } & { json: SubscriptionUpdateRenewalDate }
            output: ErrorV2
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/subscriptions/:subscription_id/cycles': {
      $get:
        | {
            input: { param: { subscription_id: string } } & {
              query: {
                limit?: number | undefined
                from?: string | undefined
                to?: string | undefined
                page_token?: string | undefined
              }
            } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            }
            output: SubscriptionCycles
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { subscription_id: string } } & {
              query: {
                limit?: number | undefined
                from?: string | undefined
                to?: string | undefined
                page_token?: string | undefined
              }
            } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { subscription_id: string } } & {
              query: {
                limit?: number | undefined
                from?: string | undefined
                to?: string | undefined
                page_token?: string | undefined
              }
            } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { subscription_id: string } } & {
              query: {
                limit?: number | undefined
                from?: string | undefined
                to?: string | undefined
                page_token?: string | undefined
              }
            } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { subscription_id: string } } & {
              query: {
                limit?: number | undefined
                from?: string | undefined
                to?: string | undefined
                page_token?: string | undefined
              }
            } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { subscription_id: string } } & {
              query: {
                limit?: number | undefined
                from?: string | undefined
                to?: string | undefined
                page_token?: string | undefined
              }
            } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/subscriptions/:subscription_id/cycles/:cycle_id': {
      $get:
        | {
            input: { param: { subscription_id: string; cycle_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            }
            output: SubscriptionCycle
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { subscription_id: string; cycle_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { subscription_id: string; cycle_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { subscription_id: string; cycle_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { subscription_id: string; cycle_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { subscription_id: string; cycle_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/subscription-usages': {
      $post:
        | {
            input: {
              header: {
                'Idempotency-Key': string
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            } & { json: SubscriptionUsageCreation }
            output: SubscriptionUsage
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              header: {
                'Idempotency-Key': string
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            } & { json: SubscriptionUsageCreation }
            output: ErrorV2
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              header: {
                'Idempotency-Key': string
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            } & { json: SubscriptionUsageCreation }
            output: ErrorV2
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              header: {
                'Idempotency-Key': string
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            } & { json: SubscriptionUsageCreation }
            output: ErrorV2
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              header: {
                'Idempotency-Key': string
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            } & { json: SubscriptionUsageCreation }
            output: ErrorV2
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              header: {
                'Idempotency-Key': string
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            } & { json: SubscriptionUsageCreation }
            output: ErrorV2
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              header: {
                'Idempotency-Key': string
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            } & { json: SubscriptionUsageCreation }
            output: ErrorV2
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: {
              query: {
                limit?: number | undefined
                from_usage_date?: string | undefined
                to_usage_date?: string | undefined
                subscription_id?: string | undefined
                subscription_cycle_id?: string | undefined
                page_token?: string | undefined
              }
            } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            }
            output: SubscriptionUsages
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                from_usage_date?: string | undefined
                to_usage_date?: string | undefined
                subscription_id?: string | undefined
                subscription_cycle_id?: string | undefined
                page_token?: string | undefined
              }
            } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                from_usage_date?: string | undefined
                to_usage_date?: string | undefined
                subscription_id?: string | undefined
                subscription_cycle_id?: string | undefined
                page_token?: string | undefined
              }
            } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                from_usage_date?: string | undefined
                to_usage_date?: string | undefined
                subscription_id?: string | undefined
                subscription_cycle_id?: string | undefined
                page_token?: string | undefined
              }
            } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                from_usage_date?: string | undefined
                to_usage_date?: string | undefined
                subscription_id?: string | undefined
                subscription_cycle_id?: string | undefined
                page_token?: string | undefined
              }
            } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                from_usage_date?: string | undefined
                to_usage_date?: string | undefined
                subscription_id?: string | undefined
                subscription_cycle_id?: string | undefined
                page_token?: string | undefined
              }
            } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/subscription-usages/:usage_id': {
      $get:
        | {
            input: { param: { usage_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            }
            output: SubscriptionUsage
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { usage_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { usage_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { usage_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { usage_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { usage_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 200
          }
      $patch:
        | {
            input: { param: { usage_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            } & { json: SubscriptionUsageUpdate }
            output: SubscriptionUsage
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { usage_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            } & { json: SubscriptionUsageUpdate }
            output: ErrorV2
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { usage_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            } & { json: SubscriptionUsageUpdate }
            output: ErrorV2
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { usage_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            } & { json: SubscriptionUsageUpdate }
            output: ErrorV2
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { usage_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            } & { json: SubscriptionUsageUpdate }
            output: ErrorV2
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { usage_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            } & { json: SubscriptionUsageUpdate }
            output: ErrorV2
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { usage_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            } & { json: SubscriptionUsageUpdate }
            output: ErrorV2
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { usage_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            } & { json: SubscriptionUsageUpdate }
            output: ErrorV2
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { usage_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { usage_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { usage_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { usage_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { usage_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { usage_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { usage_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { usage_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/api/payouts': {
      $get:
        | {
            input: {
              query: {
                currency?: string | undefined
                limit?: number | undefined
                from_created_date?: string | undefined
                to_created_date?: string | undefined
                state?: PayoutState[] | undefined
              }
            } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            }
            output: Payout[]
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              query: {
                currency?: string | undefined
                limit?: number | undefined
                from_created_date?: string | undefined
                to_created_date?: string | undefined
                state?: PayoutState[] | undefined
              }
            } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                currency?: string | undefined
                limit?: number | undefined
                from_created_date?: string | undefined
                to_created_date?: string | undefined
                state?: PayoutState[] | undefined
              }
            } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                currency?: string | undefined
                limit?: number | undefined
                from_created_date?: string | undefined
                to_created_date?: string | undefined
                state?: PayoutState[] | undefined
              }
            } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                currency?: string | undefined
                limit?: number | undefined
                from_created_date?: string | undefined
                to_created_date?: string | undefined
                state?: PayoutState[] | undefined
              }
            } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/payouts/:payout_id': {
      $get:
        | {
            input: { param: { payout_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            }
            output: Payout
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { payout_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { payout_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { payout_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { payout_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/report-runs': {
      $post:
        | {
            input: {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & {
              json:
                | ReportRunSettlementReport
                | ReportRunCustomReport
                | ReportRunPaymentsReport
                | ReportRunPayoutReport
                | ReportRunIcppReport
            }
            output: ReportRun
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & {
              json:
                | ReportRunSettlementReport
                | ReportRunCustomReport
                | ReportRunPaymentsReport
                | ReportRunPayoutReport
                | ReportRunIcppReport
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & {
              json:
                | ReportRunSettlementReport
                | ReportRunCustomReport
                | ReportRunPaymentsReport
                | ReportRunPayoutReport
                | ReportRunIcppReport
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & {
              json:
                | ReportRunSettlementReport
                | ReportRunCustomReport
                | ReportRunPaymentsReport
                | ReportRunPayoutReport
                | ReportRunIcppReport
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & {
              json:
                | ReportRunSettlementReport
                | ReportRunCustomReport
                | ReportRunPaymentsReport
                | ReportRunPayoutReport
                | ReportRunIcppReport
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & {
              json:
                | ReportRunSettlementReport
                | ReportRunCustomReport
                | ReportRunPaymentsReport
                | ReportRunPayoutReport
                | ReportRunIcppReport
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & {
              json:
                | ReportRunSettlementReport
                | ReportRunCustomReport
                | ReportRunPaymentsReport
                | ReportRunPayoutReport
                | ReportRunIcppReport
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/report-runs/:report_run_id': {
      $get:
        | {
            input: { param: { report_run_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ReportRun
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { report_run_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { report_run_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { report_run_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { report_run_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/report-runs/:report_run_id/file': {
      $get:
        | {
            input: { param: { report_run_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output:
              | ReportRunCsvSettlement
              | ReportRunCsvCustom
              | ReportRunCsvPayments
              | ReportRunCsvPayout
              | ReportRunCsvIcpp
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { report_run_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { report_run_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { report_run_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { report_run_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/webhooks': {
      $post:
        | {
            input: {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            } & { json: WebhookCreation }
            output: WebhookV2
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            } & { json: WebhookCreation }
            output: ErrorV2
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            } & { json: WebhookCreation }
            output: ErrorV2
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            } & { json: WebhookCreation }
            output: ErrorV2
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            } & { json: WebhookCreation }
            output: ErrorV2
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            } & { json: WebhookCreation }
            output: ErrorV2
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            }
            output: Webhooks
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/webhooks/:webhook_id': {
      $get:
        | {
            input: { param: { webhook_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            }
            output: WebhookV2
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { webhook_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { webhook_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { webhook_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 500
          }
      $patch:
        | {
            input: { param: { webhook_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            } & { json: WebhookUpdate }
            output: WebhookV2
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { webhook_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            } & { json: WebhookUpdate }
            output: ErrorV2
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { webhook_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            } & { json: WebhookUpdate }
            output: ErrorV2
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { webhook_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            } & { json: WebhookUpdate }
            output: ErrorV2
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { webhook_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            } & { json: WebhookUpdate }
            output: ErrorV2
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { webhook_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            } & { json: WebhookUpdate }
            output: ErrorV2
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { webhook_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            } & { json: WebhookUpdate }
            output: ErrorV2
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | {
            input: { param: { webhook_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { webhook_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { webhook_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { webhook_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { webhook_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { webhook_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { webhook_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/webhooks/:webhook_id/rotate-signing-secret': {
      $post:
        | {
            input: { param: { webhook_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            } & { json: { expiration_period?: string | undefined } }
            output: WebhookV2
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { webhook_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            } & { json: { expiration_period?: string | undefined } }
            output: ErrorV2
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { webhook_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            } & { json: { expiration_period?: string | undefined } }
            output: ErrorV2
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { webhook_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            } & { json: { expiration_period?: string | undefined } }
            output: ErrorV2
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { webhook_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            } & { json: { expiration_period?: string | undefined } }
            output: ErrorV2
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { webhook_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            } & { json: { expiration_period?: string | undefined } }
            output: ErrorV2
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { webhook_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version':
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
              }
            } & { json: { expiration_period?: string | undefined } }
            output: ErrorV2
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/apple-pay/domains/register': {
      $post:
        | {
            input: {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: { domain: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: { domain: string } }
            output: ErrorV2
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: { domain: string } }
            output: ErrorV2
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: { domain: string } }
            output: ErrorV2
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: { domain: string } }
            output: ErrorV2
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: { domain: string } }
            output: ErrorV2
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/apple-pay/domains/unregister': {
      $post:
        | {
            input: {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version'?:
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
                  | undefined
              }
            } & { json: { domain: string; reason: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version'?:
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
                  | undefined
              }
            } & { json: { domain: string; reason: string } }
            output: ErrorV2
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version'?:
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
                  | undefined
              }
            } & { json: { domain: string; reason: string } }
            output: ErrorV2
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version'?:
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
                  | undefined
              }
            } & { json: { domain: string; reason: string } }
            output: ErrorV2
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version'?:
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
                  | undefined
              }
            } & { json: { domain: string; reason: string } }
            output: ErrorV2
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version'?:
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
                  | undefined
              }
            } & { json: { domain: string; reason: string } }
            output: ErrorV2
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/synchronous-webhooks': {
      $post:
        | {
            input: {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: SynchronousWebhookCreation }
            output: SynchronousWebhook
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: SynchronousWebhookCreation }
            output: ErrorV2
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: SynchronousWebhookCreation }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: SynchronousWebhookCreation }
            output: ErrorV2
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: SynchronousWebhookCreation }
            output: ErrorV2
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: SynchronousWebhookCreation }
            output: ErrorV2
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: SynchronousWebhook[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/synchronous-webhooks/:synchronous_webhook_id': {
      $delete:
        | {
            input: { param: { synchronous_webhook_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { synchronous_webhook_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { synchronous_webhook_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { synchronous_webhook_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { synchronous_webhook_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { synchronous_webhook_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { synchronous_webhook_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/locations': {
      $post:
        | {
            input: {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: LocationCreation }
            output: Location
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: LocationCreation }
            output: ErrorV2
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: LocationCreation }
            output: ErrorV2
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: LocationCreation }
            output: ErrorV2
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: LocationCreation }
            output: ErrorV2
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: LocationCreation }
            output: ErrorV2
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: LocationCreation }
            output: ErrorV2
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { query: { type?: 'online' | 'physical' | undefined } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: Location[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { type?: 'online' | 'physical' | undefined } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { type?: 'online' | 'physical' | undefined } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { type?: 'online' | 'physical' | undefined } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { type?: 'online' | 'physical' | undefined } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/locations/:location_id': {
      $get:
        | {
            input: { param: { location_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: Location
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { location_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { location_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { location_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 500
          }
      $patch:
        | {
            input: { param: { location_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: LocationUpdate }
            output: Location
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { location_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: LocationUpdate }
            output: ErrorV2
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { location_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: LocationUpdate }
            output: ErrorV2
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { location_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: LocationUpdate }
            output: ErrorV2
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { location_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: LocationUpdate }
            output: ErrorV2
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { location_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: LocationUpdate }
            output: ErrorV2
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { location_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            } & { json: LocationUpdate }
            output: ErrorV2
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | {
            input: { param: { location_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { location_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { location_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { location_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { location_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { location_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { location_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
              }
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/terminals': {
      $get:
        | {
            input: {
              query: {
                operation_mode?: TerminalOperationMode | undefined
                location_id?: string | undefined
              }
            } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version'?:
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
                  | undefined
              }
            }
            output: TerminalsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                operation_mode?: TerminalOperationMode | undefined
                location_id?: string | undefined
              }
            } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version'?:
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
                  | undefined
              }
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                operation_mode?: TerminalOperationMode | undefined
                location_id?: string | undefined
              }
            } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version'?:
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
                  | undefined
              }
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                operation_mode?: TerminalOperationMode | undefined
                location_id?: string | undefined
              }
            } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version'?:
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
                  | undefined
              }
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/orders/:order_id/payment-intents': {
      $post:
        | {
            input: { param: { order_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version'?:
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
                  | undefined
              }
            } & { json: PaymentIntentCreation }
            output: PaymentIntent
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { order_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version'?:
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
                  | undefined
              }
            } & { json: PaymentIntentCreation }
            output: ErrorV2
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { order_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version'?:
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
                  | undefined
              }
            } & { json: PaymentIntentCreation }
            output: ErrorV2
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { order_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version'?:
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
                  | undefined
              }
            } & { json: PaymentIntentCreation }
            output: ErrorV2
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { order_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version'?:
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
                  | undefined
              }
            } & { json: PaymentIntentCreation }
            output: ErrorV2
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { order_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version'?:
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
                  | undefined
              }
            } & { json: PaymentIntentCreation }
            output: ErrorV2
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { order_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version'?:
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
                  | undefined
              }
            } & { json: PaymentIntentCreation }
            output: ErrorV2
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { order_id: string } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version'?:
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
                  | undefined
              }
            } & { json: PaymentIntentCreation }
            output: ErrorV2
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/payment-intents/:payment_intent_id': {
      $get:
        | {
            input: { param: { payment_intent_id: PaymentIntentId } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version'?:
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
                  | undefined
              }
            }
            output: PaymentIntent
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { payment_intent_id: PaymentIntentId } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version'?:
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
                  | undefined
              }
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { payment_intent_id: PaymentIntentId } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version'?:
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
                  | undefined
              }
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { payment_intent_id: PaymentIntentId } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version'?:
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
                  | undefined
              }
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/payment-intents/:payment_intent_id/cancel': {
      $post:
        | {
            input: { param: { payment_intent_id: PaymentIntentId } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version'?:
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
                  | undefined
              }
            }
            output: PaymentIntent
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { payment_intent_id: PaymentIntentId } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version'?:
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
                  | undefined
              }
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { payment_intent_id: PaymentIntentId } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version'?:
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
                  | undefined
              }
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { payment_intent_id: PaymentIntentId } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version'?:
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
                  | undefined
              }
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { payment_intent_id: PaymentIntentId } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version'?:
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
                  | undefined
              }
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { payment_intent_id: PaymentIntentId } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version'?:
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
                  | undefined
              }
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { payment_intent_id: PaymentIntentId } } & {
              header: {
                Authorization: string
                'Revolut-Api-Timestamp'?: string | undefined
                'Revolut-Api-Signature'?: string | undefined
                'Revolut-Api-Version'?:
                  | '2023-09-01'
                  | '2024-05-01'
                  | '2024-09-01'
                  | '2025-10-16'
                  | '2025-12-04'
                  | '2026-03-12'
                  | '2026-04-20'
                  | '2026-08-17'
                  | '2026-09-22'
                  | undefined
              }
            }
            output: ErrorV2
            outputFormat: 'json'
            status: 500
          }
    }
  },
  '/'
>
export default routes
