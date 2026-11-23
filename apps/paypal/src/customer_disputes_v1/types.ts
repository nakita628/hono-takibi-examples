type DateTime = string
type DisputeReason =
  | 'MERCHANDISE_OR_SERVICE_NOT_RECEIVED'
  | 'MERCHANDISE_OR_SERVICE_NOT_AS_DESCRIBED'
  | 'UNAUTHORISED'
  | 'CREDIT_NOT_PROCESSED'
  | 'DUPLICATE_TRANSACTION'
  | 'INCORRECT_AMOUNT'
  | 'PAYMENT_BY_OTHER_MEANS'
  | 'CANCELED_RECURRING_BILLING'
  | 'PROBLEM_WITH_REMITTANCE'
  | 'OTHER'
type Status =
  | 'OPEN'
  | 'WAITING_FOR_BUYER_RESPONSE'
  | 'WAITING_FOR_SELLER_RESPONSE'
  | 'UNDER_REVIEW'
  | 'RESOLVED'
  | 'OTHER'
type DisputeState =
  | 'OPEN_INQUIRIES'
  | 'REQUIRED_ACTION'
  | 'REQUIRED_OTHER_PARTY_ACTION'
  | 'UNDER_PAYPAL_REVIEW'
  | 'APPEALABLE'
  | 'RESOLVED'
type CurrencyCode = string
type Money = { currency_code: CurrencyCode; value: string }
type CryptocurrencySymbol = 'BTC' | 'ETH' | 'BCH' | 'LTC' | 'PYUSD' | 'LINK' | 'SOL' | 'MATIC'
type CryptocurrencyQuantity = string
type CryptocurrencySubunitsQuantity = string
type CryptocurrencyDecimals = number
type Cryptocurrency = {
  asset_symbol: CryptocurrencySymbol
  quantity: CryptocurrencyQuantity
  quantity_in_subunits?: CryptocurrencySubunitsQuantity | undefined
  decimals?: CryptocurrencyDecimals | undefined
}
type DisputeLifecycleStage = 'INQUIRY' | 'CHARGEBACK' | 'PRE_ARBITRATION' | 'ARBITRATION'
type DisputeChannel = 'INTERNAL' | 'EXTERNAL' | 'ALERT'
type LinkDescription = {
  href: string
  rel: string
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'HEAD' | 'CONNECT' | 'OPTIONS' | 'PATCH' | undefined
}
type DefinitionsLinkDescriptionList = LinkDescription[]
type DisputeInfo = {
  dispute_id?: string | undefined
  create_time?: DateTime | undefined
  update_time?: DateTime | undefined
  reason?: DisputeReason | undefined
  status?: Status | undefined
  dispute_state?: DisputeState | undefined
  dispute_amount?: Money | undefined
  dispute_asset?: Cryptocurrency | undefined
  dispute_life_cycle_stage?: DisputeLifecycleStage | undefined
  dispute_channel?: DisputeChannel | undefined
  buyer_response_due_date?: DateTime | undefined
  seller_response_due_date?: DateTime | undefined
  links?: DefinitionsLinkDescriptionList | undefined
}
type DisputeInfoList = DisputeInfo[]
type DisputeSearch = {
  items?: DisputeInfoList | undefined
  links?: DefinitionsLinkDescriptionList | undefined
}
type ErrorDetails_2 = {
  field?: string | undefined
  value?: string | undefined
  location?: string | undefined
  issue: string
  description?: string | undefined
}
type ErrorDetailsList = ErrorDetails_2[]
type LinkDescriptionList = LinkDescription[]
type Error = {
  name: string
  message: string
  debug_id: string
  information_link?: string | undefined
  details?: ErrorDetailsList | undefined
  links?: LinkDescriptionList | undefined
}
type Buyer = { name?: string | undefined }
type EmailAddress = string
type Seller = {
  email?: EmailAddress | undefined
  merchant_id?: string | undefined
  name?: string | undefined
}
type ItemType = 'PRODUCT' | 'SERVICE' | 'BOOKING' | 'DIGITAL_DOWNLOAD'
type ItemProductDetails = { [x: string]: unknown }
type ItemServiceDetails = { [x: string]: unknown }
type ItemBookingDetails = { [x: string]: unknown }
type ItemDigitalDownloadDetails = { [x: string]: unknown }
type ItemCancellationDetails = { [x: string]: unknown }
type ItemAgreedRefundDetails = { [x: string]: unknown }
type ItemInfo = {
  item_id?: string | undefined
  item_name?: string | undefined
  item_description?: string | undefined
  item_quantity?: string | undefined
  partner_transaction_id?: string | undefined
  reason?: DisputeReason | undefined
  dispute_amount?: Money | undefined
  notes?: string | undefined
  item_type?: ItemType | undefined
  product_details?: ItemProductDetails | undefined
  service_details?: ItemServiceDetails | undefined
  booking_details?: ItemBookingDetails | undefined
  digital_download_details?: ItemDigitalDownloadDetails | undefined
  cancellation_details?: ItemCancellationDetails | undefined
  agreed_refund_details?: ItemAgreedRefundDetails | undefined
}
type ItemInfoList = ItemInfo[]
type PaymentProcessor = { [x: string]: unknown }
type TransactionInfo = {
  buyer_transaction_id?: string | undefined
  seller_transaction_id?: string | undefined
  reference_id?: string | undefined
  create_time?: DateTime | undefined
  transaction_status?:
    | 'COMPLETED'
    | 'UNCLAIMED'
    | 'DENIED'
    | 'FAILED'
    | 'HELD'
    | 'PENDING'
    | 'PARTIALLY_REFUNDED'
    | 'REFUNDED'
    | 'REVERSED'
    | 'CANCELLED'
    | undefined
  gross_amount?: Money | undefined
  gross_asset?: Cryptocurrency | undefined
  invoice_number?: string | undefined
  custom?: string | undefined
  buyer?: Buyer | undefined
  seller?: Seller | undefined
  items?: ItemInfoList | undefined
  payment_processor?: PaymentProcessor | undefined
}
type TransactionInfoList = TransactionInfo[]
type FeePolicy = { [x: string]: unknown }
type AdjudicationReason =
  | 'AMOUNT_DIFFERENCE_EXPECTED_DUE_TO_FEES'
  | 'BILLING_AGREEMENT_CHANGE_DISCLOSED'
  | 'BILLING_AGREEMENT_CHANGE_NOT_DISCLOSED'
  | 'BILLING_AGREEMENT_DATE_CHANGE_DISCLOSED'
  | 'BILLING_AGREEMENT_DATE_CHANGE_NOT_DISCLOSED'
  | 'BUYER_ATTEMPTED_RETURN'
  | 'BUYER_BILLED_ONLY_ONCE'
  | 'BUYER_CANCELLED_CASE'
  | 'BUYER_CANCELLED_SERVICE'
  | 'BUYER_FAILED_TO_DESCRIBE_ISSUE'
  | 'BUYER_HAS_POSSESSION_OF_THE_MERCHANDISE_OR_SERVICE'
  | 'BUYER_MADE_NO_ATTEMPT_TO_RESOLVE_WITH_SELLER'
  | 'BUYER_NOT_IN_POSSESSION_OF_ITEM_TO_RETURN'
  | 'BUYER_PROVIDED_CREDIT_RECEIPT'
  | 'BUYER_RECEIVED_DUPLICATE_REFUND'
  | 'CANCELLED_PER_TERMS_OF_BILLING_AGREEMENT'
  | 'CARD_NOT_STOLEN'
  | 'CARD_NOT_STOLEN_BEFORE_AUTH'
  | 'CUSTOMER_RECOGNIZES_TRANSACTION'
  | 'DECISION_BASED_ON_AVAILABLE_INFORMATION'
  | 'DELIVERY_AFTER_EXPECTED_DELIVERY_DATE'
  | 'DELIVERY_DUE_WITHIN_EXPECTED_DELIVERY_DATE'
  | 'DELIVERY_OR_SERVICE_REFUSED'
  | 'DOCUMENTATION_MATCHES_AMOUNT_CHARGED'
  | 'DOCUMENTATION_MATCHES_AMOUNT_IN_PAYPAL_ACCOUNT'
  | 'DUPLICATE_ADD_FUNDS'
  | 'EFFORTLESS_SELLER_PROTECTION'
  | 'IN_PERSON_DELIVERY'
  | 'INELIGIBLE_BUYER_PROTECTION_POLICY'
  | 'INELIGIBLE_SELLER_PROTECTION_POLICY'
  | 'INQUIRY_OFFER_ITEM_REPLACED'
  | 'INQUIRY_OFFER_PARTIAL_REFUND'
  | 'INQUIRY_OFFER_REFUND_WITH_ITEM_RETURN'
  | 'INQUIRY_OFFER_REFUND_WITH_REPLACEMENT'
  | 'INVALID_APPEAL_REASON'
  | 'INVALID_CHARGEBACK_SELLER_FAVOUR'
  | 'INVALID_DELIVERY_PROOF'
  | 'INVALID_DELIVERY_PROOF_SIGNATURE'
  | 'INVALID_DOCUMENTATION'
  | 'INVALID_PROOF_OF_SHIPMENT'
  | 'INVALID_REFUND_PROOF'
  | 'INVALID_RETURN_DELIVERY_NO_SIGNATURE_PROOF'
  | 'INVALID_RETURN_DELIVERY_PROOF'
  | 'INVALID_TRACKING'
  | 'ITEM_ALTERED_REPAIRED'
  | 'ITEM_NOT_AS_ADVERTISED'
  | 'ITEM_NOT_AS_DESCRIBED'
  | 'ITEM_NOT_DAMAGED'
  | 'ITEM_NOT_DELIVERED'
  | 'ITEM_NOT_RETURNED_TO_SELLER'
  | 'ITEM_NOT_SHIPPED'
  | 'ITEM_OF_DIFFERENT_QUALITY_OR_QUANTITY'
  | 'ITEM_OUT_OF_STOCK_AND_NOT_DELIVERED'
  | 'ITEM_RETURNED_TO_SELLER'
  | 'ITEM_SERVICE_MISREPRESENTED'
  | 'ITEM_SERVICE_NOT_MISREPRESENTED'
  | 'ITEM_SERVICE_RECEIVED_BY_BUYER'
  | 'ITEM_SOLD_AS_DESCRIBED'
  | 'ITEM_VALUE_UNAFFECTED'
  | 'MULTIPLE_APPEALS_WITH_SAME_REASON'
  | 'NO_DOCUMENTATION_FROM_BUYER'
  | 'NO_DOCUMENTATION_SUPPORTING_DUE_OF_CREDIT'
  | 'NO_PROOF_OF_DELIVERY'
  | 'NO_PROOF_OF_DELIVERY_INTANGIBLE'
  | 'NO_PROTECTION_FOR_DIGITAL_GOODS_SERVICE'
  | 'NO_RESPONSE_FROM_BUYER'
  | 'NO_RESPONSE_FROM_BUYER_FOR_ADDITIONAL_INFO_REQUEST'
  | 'NO_SELLER_RESPONSE'
  | 'NO_SELLER_RESPONSE_FOR_ADDITIONAL_INFO_REQUEST'
  | 'NO_VALID_SHIPMENT_PROOF'
  | 'NOT_A_BILLING_ERROR'
  | 'NOT_AN_UNAUTHORIZED_TRANSACTION'
  | 'NOT_DUPLICATE_FUNDS_ADDED_ONCE'
  | 'NOT_DUPLICATE_FUNDS_WITHDRAWN_ONCE'
  | 'NOT_SHIPPED_TO_CORRECT_ADDRESS'
  | 'PARTIAL_REFUND_ISSUED_FOR_MISSING_ITEMS'
  | 'PARTIAL_REFUND_OFFER_ACCEPTED'
  | 'PAYMENT_REVERSED_ALREADY'
  | 'POS_SUBMITTED_INSTEAD_OF_POD'
  | 'PREAUTH_INSTALLMENT_DUE'
  | 'PROOF_OF_BILLING_AFTER_CANCELLATION_ACCEPTED'
  | 'PROOF_OF_DUPLICATE_DENIED_OR_INSUFFICIENT'
  | 'PROOF_OF_INCORRECT_TRANSACTION_AMOUNT_ACCEPTED'
  | 'PROOF_OF_PAID_BY_OTHER_MEANS_NOT_SUBMITTED'
  | 'PROOF_OF_TRACKING_NOT_SUBMITTED'
  | 'PROTECTED_BY_PAYPAL'
  | 'REPRESENTED_BY_PAYPAL'
  | 'SELLER_ACCEPTED_MULTIPLE_PAYMENTS'
  | 'SELLER_AGREED_REFUND_WITHOUT_RETURN'
  | 'SELLER_AGREED_TO_ISSUE_CREDIT'
  | 'SELLER_ISSUED_CREDIT_TO_BUYER'
  | 'SELLER_ISSUED_REFUND'
  | 'SELLER_NOT_REACHABLE'
  | 'SELLER_RECEIVED_PAYMENT_TWICE_OR_FOR_REPLACEMENT'
  | 'SELLER_REFUSED_REFUND'
  | 'SELLER_REFUSED_RETURN'
  | 'SELLER_SURCHARGED_BUYER'
  | 'SERVICE_NOT_COMPLETED_AS_AGREED'
  | 'SHIPPING_COMPANY_WONT_SHIP'
  | 'TRACKING_PROOF_NOT_ENOUGH'
  | 'TRANSACTION_AUTHORIZED_BY_CARDHOLDER'
  | 'TRANSACTION_CANCELLED_AFTER_AUTHORIZATION_DATE'
  | 'TRANSACTION_CANCELLED_BEFORE_SHIPMENT_SERVICE_DATE'
  | 'TRANSACTION_MATCHES_BUYER_SPENDING_PATTERN'
  | 'TRANSACTION_PROCESSED_CORRECTLY'
  | 'TRUSTED_BUYER_PAYOUT'
  | 'UNUSED_SHIPPING_LABEL'
  | 'VALID_PROOF_OF_DELIVERY'
  | 'VALID_PROOF_OF_DELIVERY_WITH_SIGNATURE'
  | 'VALID_PROOF_OF_REFUND'
  | 'VALID_PROOF_SUPPORTING_CLAIM'
  | 'VALID_RETURN_DELIVERY_PROOF'
  | 'VALID_RETURN_DELIVERY_PROOF_WITH_SIGNATURE'
  | 'VALID_SHIPMENT_PROOF'
  | 'VALUE_AFFECTED_SIGNIFICANTLY'
  | 'PROTECTION_POLICY_APPLIES'
  | 'SNAD_DELAYED_FILING'
  | 'FUNDS_TRANSFERRED_TO_INCORRECT_RECIPIENT'
type DisputeOutcome = {
  outcome_code?:
    | 'RESOLVED_BUYER_FAVOUR'
    | 'RESOLVED_SELLER_FAVOUR'
    | 'RESOLVED_WITH_PAYOUT'
    | 'CANCELED_BY_BUYER'
    | 'ACCEPTED'
    | 'DENIED'
    | 'NONE'
    | undefined
  outcome_reason?: AdjudicationReason | undefined
  amount_refunded?: Money | undefined
  asset_refunded?: Cryptocurrency | undefined
}
type AdjudicationType =
  | 'DENY_BUYER'
  | 'PAYOUT_TO_BUYER'
  | 'PAYOUT_TO_SELLER'
  | 'RECOVER_FROM_SELLER'
type Adjudication = {
  type: AdjudicationType
  adjudication_time: DateTime
  reason?: AdjudicationReason | undefined
  dispute_life_cycle_stage?: DisputeLifecycleStage | undefined
}
type AdjudicationList = Adjudication[]
type MoneyMovementReason =
  | 'DISPUTE_SETTLEMENT_FEE'
  | 'DISPUTE_SETTLEMENT'
  | 'DISPUTE_FEE'
  | 'CHARGEBACK_FEE'
type MoneyMovement = {
  affected_party?: 'SELLER' | 'BUYER' | 'PAYMENT_PROCESSOR' | undefined
  amount?: Money | undefined
  asset?: Cryptocurrency | undefined
  initiated_time?: DateTime | undefined
  type?: 'DEBIT' | 'CREDIT' | undefined
  reason?: MoneyMovementReason | undefined
}
type MoneyMovementList = MoneyMovement[]
type FundMovementReason =
  | 'REVERSED_TRANSACTION_FEE'
  | 'DISPUTE_SETTLEMENT'
  | 'DISPUTE_FEE'
  | 'CHARGEBACK_FEE'
type FundMovement = {
  party?: 'SELLER' | 'BUYER' | 'PAYMENT_PROCESSOR' | undefined
  amount?: Money | undefined
  asset?: Cryptocurrency | undefined
  initiated_time?: DateTime | undefined
  type?: 'DEBIT' | 'CREDIT' | undefined
  reason?: FundMovementReason | undefined
}
type FundMovementList = FundMovement[]
type Document = { name?: string | undefined; url?: string | undefined }
type DocumentList = Document[]
type Message = {
  posted_by?: 'BUYER' | 'SELLER' | 'ARBITER' | undefined
  time_posted?: DateTime | undefined
  content?: string | undefined
  documents?: DocumentList | undefined
}
type MessageList = Message[]
type MerchantContactedOutcome = 'NO_RESPONSE' | 'FIXED' | 'NOT_FIXED'
type MerchantContactedMode = 'WEBSITE' | 'PHONE' | 'EMAIL' | 'WRITTEN' | 'IN_PERSON'
type DuplicateTransaction = {
  received_duplicate?: boolean | undefined
  original_transaction?: TransactionInfo | undefined
}
type IncorrectTransactionAmount = {
  correct_transaction_amount?: Money | undefined
  correct_transaction_asset?: Cryptocurrency | undefined
  correct_transaction_time?: DateTime | undefined
}
type PaymentByOtherMeans = {
  charge_different_from_original?: boolean | undefined
  received_duplicate?: boolean | undefined
  payment_method?:
    | 'CASH'
    | 'CREDIT_CARD'
    | 'CHECK'
    | 'PAYPAL'
    | 'DEBIT_CARD'
    | 'GIFT_CARD'
    | 'BANK_TRANSFER'
    | undefined
  payment_instrument_suffix?: string | undefined
}
type CancellationDetails = {
  cancellation_date?: DateTime | undefined
  cancellation_number?: string | undefined
  cancelled?: boolean | undefined
  cancellation_mode?:
    | 'CANCELLED_PAYPAL_BILLING_AGREEMENT'
    | 'WEBSITE'
    | 'PHONE'
    | 'EMAIL'
    | 'WRITTEN'
    | 'IN_PERSON'
    | undefined
}
type SubReasons = 'DAMAGED' | 'DIFFERENT' | 'MISSING_PARTS' | 'OTHER'
type SubReasonsList = SubReasons[]
type ReturnDetails = {
  return_time?: DateTime | undefined
  mode?: 'SHIPPED' | 'IN_PERSON' | undefined
  receipt?: boolean | undefined
  return_confirmation_number?: string | undefined
  returned?: boolean | undefined
}
type ProductDetails = {
  description?: string | undefined
  product_received?: 'YES' | 'NO' | 'RETURNED' | undefined
  product_received_time?: DateTime | undefined
  expected_delivery_date?: DateTime | undefined
  sub_reasons?: SubReasonsList | undefined
  purchase_url?: string | undefined
  return_details?: ReturnDetails | undefined
}
type DefinitionsSubReasons = 'DAMAGED' | 'DIFFERENT' | 'INCOMPLETE' | 'OTHER'
type DefinitionsSubReasonsList = DefinitionsSubReasons[]
type ServiceDetails = {
  description?: string | undefined
  service_started?: 'YES' | 'NO' | 'CANCELLED' | undefined
  note?: string | undefined
  sub_reasons?: DefinitionsSubReasonsList | undefined
  purchase_url?: string | undefined
}
type AgreedRefundDetails = {
  merchant_agreed_refund?: boolean | undefined
  merchant_agreed_refund_time?: DateTime | undefined
}
type CreditNotProcessed = {
  issue_type?: 'PRODUCT' | 'SERVICE' | undefined
  expected_refund?: Money | undefined
  cancellation_details?: CancellationDetails | undefined
  product_details?: ProductDetails | undefined
  service_details?: ServiceDetails | undefined
  agreed_refund_details?: AgreedRefundDetails | undefined
}
type CanceledRecurringBilling = {
  expected_refund?: Money | undefined
  cancellation_details?: CancellationDetails | undefined
}
type BillingDisputesProperties = {
  duplicate_transaction?: DuplicateTransaction | undefined
  incorrect_transaction_amount?: IncorrectTransactionAmount | undefined
  payment_by_other_means?: PaymentByOtherMeans | undefined
  credit_not_processed?: CreditNotProcessed | undefined
  canceled_recurring_billing?: CanceledRecurringBilling | undefined
}
type CountryCode = string
type AddressDetails = {
  street_number?: string | undefined
  street_name?: string | undefined
  street_type?: string | undefined
  delivery_service?: string | undefined
  building_name?: string | undefined
  sub_building?: string | undefined
}
type AddressPortable = {
  address_line_1?: string | undefined
  address_line_2?: string | undefined
  address_line_3?: string | undefined
  admin_area_4?: string | undefined
  admin_area_3?: string | undefined
  admin_area_2?: string | undefined
  admin_area_1?: string | undefined
  postal_code?: string | undefined
  country_code: CountryCode
  address_details?: AddressDetails | undefined
}
type MerchandizeDisputeProperties = {
  issue_type?: 'PRODUCT' | 'SERVICE' | undefined
  product_details?: ProductDetails | undefined
  service_details?: ServiceDetails | undefined
  cancellation_details?: CancellationDetails | undefined
  return_shipping_address?: AddressPortable | undefined
}
type DisputeSource =
  | 'EMAIL'
  | 'WEB'
  | 'CHAT'
  | 'IVR'
  | 'PHONE'
  | 'MOBILE_APP'
  | 'MOBILE_WEB'
  | 'API'
type Extensions = {
  merchant_contacted?: boolean | undefined
  merchant_contacted_outcome?: MerchantContactedOutcome | undefined
  merchant_contacted_time?: DateTime | undefined
  merchant_contacted_mode?: MerchantContactedMode | undefined
  buyer_contacted_time?: DateTime | undefined
  buyer_contacted_channel?: string | undefined
  billing_dispute_properties?: BillingDisputesProperties | undefined
  merchandize_dispute_properties?: MerchandizeDisputeProperties | undefined
  reported_source?: DisputeSource | undefined
}
type TrackingInfo = {
  carrier_name:
    | 'UPS'
    | 'USPS'
    | 'FEDEX'
    | 'AIRBORNE_EXPRESS'
    | 'DHL'
    | 'AIRSURE'
    | 'ROYAL_MAIL'
    | 'PARCELFORCE'
    | 'SWIFTAIR'
    | 'OTHER'
    | 'UK_PARCELFORCE'
    | 'UK_ROYALMAIL_SPECIAL'
    | 'UK_ROYALMAIL_RECORDED'
    | 'UK_ROYALMAIL_INT_SIGNED'
    | 'UK_ROYALMAIL_AIRSURE'
    | 'UK_UPS'
    | 'UK_FEDEX'
    | 'UK_AIRBORNE_EXPRESS'
    | 'UK_DHL'
    | 'UK_OTHER'
    | 'UK_CANNOT_PROV_TRACK'
    | 'UK_CANNOT_PROVIDE_TRACKING'
    | 'CA_CANADA_POST'
    | 'CA_PUROLATOR'
    | 'CA_CANPAR'
    | 'CA_LOOMIS'
    | 'CA_TNT'
    | 'TNT'
    | 'CA_OTHER'
    | 'CA_CANNOT_PROV_TRACK'
    | 'DE_DP_DHL_WITHIN_EUROPE'
    | 'DE_DP_DHL_T_AND_T_EXPRESS'
    | 'DE_DHL_DP_INTL_SHIPMENTS'
    | 'CA_CANNOT_PROVIDE_TRACKING'
    | 'DE_GLS'
    | 'DE_DPD_DELISTACK'
    | 'DE_HERMES'
    | 'DE_UPS'
    | 'DE_FEDEX'
    | 'DE_TNT'
    | 'DE_OTHER'
    | 'FR_CHRONOPOST'
    | 'FR_COLIPOSTE'
    | 'FR_DHL'
    | 'FR_UPS'
    | 'FR_FEDEX'
    | 'FR_TNT'
    | 'FR_GLS'
    | 'FR_OTHER'
    | 'IT_POSTE_ITALIA'
    | 'IT_DHL'
    | 'IT_UPS'
    | 'IT_FEDEX'
    | 'IT_TNT'
    | 'IT_GLS'
    | 'IT_OTHER'
    | 'AU_AUSTRALIA_POST_EP_PLAT'
    | 'AU_AUSTRALIA_POST_EPARCEL'
    | 'AU_AUSTRALIA_POST_EMS'
    | 'AU_DHL'
    | 'AU_STAR_TRACK_EXPRESS'
    | 'AU_UPS'
    | 'AU_FEDEX'
    | 'AU_TNT'
    | 'AU_TOLL_IPEC'
    | 'AU_OTHER'
    | 'FR_SUIVI'
    | 'IT_EBOOST_SDA'
    | 'ES_CORREOS_DE_ESPANA'
    | 'ES_DHL'
    | 'ES_UPS'
    | 'ES_FEDEX'
    | 'ES_TNT'
    | 'ES_OTHER'
    | 'AT_AUSTRIAN_POST_EMS'
    | 'AT_AUSTRIAN_POST_PPRIME'
    | 'BE_CHRONOPOST'
    | 'BE_TAXIPOST'
    | 'CH_SWISS_POST_EXPRES'
    | 'CH_SWISS_POST_PRIORITY'
    | 'CN_CHINA_POST'
    | 'HK_HONGKONG_POST'
    | 'IE_AN_POST_SDS_EMS'
    | 'IE_AN_POST_SDS_PRIORITY'
    | 'IE_AN_POST_REGISTERED'
    | 'IE_AN_POST_SWIFTPOST'
    | 'IN_INDIAPOST'
    | 'JP_JAPANPOST'
    | 'KR_KOREA_POST'
    | 'NL_TPG'
    | 'SG_SINGPOST'
    | 'TW_CHUNGHWA_POST'
    | 'CN_CHINA_POST_EMS'
    | 'CN_FEDEX'
    | 'CN_TNT'
    | 'CN_UPS'
    | 'CN_OTHER'
    | 'NL_TNT'
    | 'NL_DHL'
    | 'NL_UPS'
    | 'NL_FEDEX'
    | 'NL_KIALA'
    | 'BE_KIALA'
    | 'PL_POCZTA_POLSKA'
    | 'PL_POCZTEX'
    | 'PL_GLS'
    | 'PL_MASTERLINK'
    | 'PL_TNT'
    | 'PL_DHL'
    | 'PL_UPS'
    | 'PL_FEDEX'
    | 'JP_SAGAWA_KYUU_BIN'
    | 'JP_NITTSU_PELICAN_BIN'
    | 'JP_KURO_NEKO_YAMATO_UNYUU'
    | 'JP_TNT'
    | 'JP_DHL'
    | 'JP_UPS'
    | 'JP_FEDEX'
    | 'NL_PICKUP'
    | 'NL_INTANGIBLE'
    | 'NL_ABC_MAIL'
    | 'HK_FOUR_PX_EXPRESS'
    | 'HK_FLYT_EXPRESS'
    | 'US_ASCENDIA'
    | 'US_ENSENDA'
    | 'US_GLOBEGISTICS'
    | 'US_ONTRAC'
    | 'RRDONNELLEY'
    | 'ASENDIA_UK'
    | 'UK_COLLECTPLUS'
    | 'UK_DPD'
    | 'UK_HERMESWORLD'
    | 'UK_INTERLINK_EXPRESS'
    | 'UK_TNT'
    | 'UK_UK_MAIL'
    | 'UK_YODEL'
    | 'BUYLOGIC'
    | 'CN_EMS'
    | 'CHINA_POST'
    | 'CNEXPS'
    | 'CPACKET'
    | 'CUCKOOEXPRESS'
    | 'CN_EC'
    | 'CN_EMPS'
    | 'DE_ASENDIA'
    | 'UK_DELTEC'
    | 'DE_DEUTSCHE'
    | 'DE_DPD'
    | 'RABEN_GROUP'
    | 'GLOBAL_TNT'
    | 'ADSONE'
    | 'AU_AU_POST'
    | 'BONDSCOURIERS'
    | 'COURIERS_PLEASE'
    | 'DTDC_AU'
    | 'AU_FASTWAY'
    | 'HUNTER_EXPRESS'
    | 'SENDLE'
    | 'AUS_TOLL'
    | 'TOLL'
    | 'UBI_LOGISTICS'
    | 'OMNIPARCEL'
    | 'QUANTIUM'
    | 'CN_SF_EXPRESS'
    | 'SEKOLOGISTICS'
    | 'HK_TAQBIN'
    | 'GB_APC'
    | 'CA_CANPAR_COURIER'
    | 'GLOBAL_ESTES'
    | 'CA_GREYHOUND'
    | 'PUROLATOR'
    | 'US_RL'
    | 'IT_BRT'
    | 'DMM_NETWORK'
    | 'IT_FERCAM'
    | 'HERMES_IT'
    | 'IT_POSTE_ITALIANE'
    | 'IT_SDA'
    | 'IT_SGT'
    | 'GLOBAL_SKYNET'
    | 'FR_BERT'
    | 'FR_COLIS'
    | 'FR_GEODIS'
    | 'FR_LAPOSTE'
    | 'FR_TELIWAY'
    | 'DPD_POLAND'
    | 'INPOST_PACZKOMATY'
    | 'POL_POCZTA'
    | 'POL_SIODEMKA'
    | 'ESP_CORREOS'
    | 'ES_CORREOS'
    | 'ESP_NACEX'
    | 'ESP_ASM'
    | 'ESP_REDUR'
    | 'CBL_LOGISTICA'
    | 'EKART'
    | 'IND_DELHIVERY'
    | 'IND_BLUEDART'
    | 'IND_DTDC'
    | 'IND_PROFESSIONAL_COURIERS'
    | 'IND_REDEXPRESS'
    | 'IND_XPRESSBEES'
    | 'IND_DOTZOT'
    | 'THA_KERRY'
    | 'SENDIT'
    | 'ACOMMERCE'
    | 'NINJAVAN_THAI'
    | 'NIM_EXPRESS'
    | 'THA_THAILAND_POST'
    | 'THA_DYNAMIC_LOGISTICS'
    | 'ALPHAFAST'
    | 'FASTRAK_TH'
    | 'EPARCEL_KR'
    | 'CJ_KOREA_THAI'
    | 'RINCOS'
    | 'KOR_KOREA_POST'
    | 'KOR_CJ'
    | 'KOR_ECARGO'
    | 'SREKOREA'
    | 'ROCKETPARCEL'
    | 'BG_BULGARIAN_POST'
    | 'JPN_JAPAN_POST'
    | 'JPN_YAMATO'
    | 'JPN_SAGAWA'
    | 'TUR_PTT'
    | 'AUT_AUSTRIAN_POST'
    | 'AU_AUSTRIAN_POST'
    | 'RUSSIAN_POST'
    | 'BEL_DHL'
    | 'FR_MONDIAL'
    | 'EU_BPOST'
    | 'LANDMARK_GLOBAL'
    | 'IDN_POS'
    | 'IDN_POS_INT'
    | 'IDN_JNE'
    | 'IDN_PANDU'
    | 'RPX'
    | 'IDN_TIKI'
    | 'IDN_LION_PARCEL'
    | 'NINJAVAN_ID'
    | 'IDN_WAHANA'
    | 'IDN_FIRST_LOGISTICS'
    | 'UK_AN_POST'
    | 'DPD'
    | 'UK_FASTWAY'
    | 'UK_NIGHTLINE'
    | 'WISELOADS'
    | 'GR_ELTA'
    | 'GRC_ACS'
    | 'GR_GENIKI'
    | 'NINJAVAN_PHILIPPINES'
    | 'PHL_XEND_EXPRESS'
    | 'PHL_LBC'
    | 'PHL_JAMEXPRESS'
    | 'PHL_AIRSPEED'
    | 'PHL_RAF'
    | 'DIRECTLOG'
    | 'BRA_CORREIOS'
    | 'NLD_DHL'
    | 'NLD_POSTNL'
    | 'NLD_GLS'
    | 'NLD_TRANSMISSION'
    | 'CORREOS_DE_MEXICO'
    | 'MEX_ESTAFETA'
    | 'MEX_SENDA'
    | 'MEX_REDPACK'
    | 'MEX_AEROFLASH'
    | 'NATIONWIDE_MY'
    | 'MYS_MYS_POST'
    | 'MYS_TAQBIN'
    | 'MYS_SKYNET'
    | 'MYS_CITYLINK'
    | 'MYS_AIRPAK'
    | 'NINJAVAN_MY'
    | 'KANGAROO_MY'
    | 'VNM_VIETNAM_POST'
    | 'VNPOST_EMS'
    | 'PRT_INT_SEUR'
    | 'PRT_CTT'
    | 'PRT_CHRONOPOST'
    | 'PRT_SEUR'
    | 'ADICIONAL'
    | 'LTU_LIETUVOS'
    | 'DPEX'
    | 'LWE_HK'
    | 'SG_SG_POST'
    | 'SG_TAQBIN'
    | 'SG_NINJAVAN'
    | 'SG_ZALORA'
    | 'JET_SHIP'
    | 'SG_PARCELPOST'
    | 'CHE_SWISS_POST'
    | 'ASENDIA_HK'
    | 'HUN_MAGYAR'
    | 'POSTNORD_LOGISTICS'
    | 'SWE_DIRECTLINK'
    | 'SWE_POSTNORD'
    | 'SWE_DB'
    | 'CZE_CESKA'
    | 'NZ_NZ_POST'
    | 'NZ_COURIER_POST'
    | 'FASTWAY_NZ'
    | 'TW_TAIWAN_POST'
    | 'SPREADEL'
    | 'ARE_EMIRATES_POST'
    | 'AXL'
    | 'CYP_CYPRUS_POST'
    | 'HRV_HRVATSKA'
    | 'NOR_POSTEN'
    | 'RAM'
    | 'THECOURIERGUY'
    | 'ZA_FASTWAY'
    | 'DPE_EXPRESS'
    | 'POSTI'
    | 'MATKAHUOLTO'
    | 'GLOBAL_DHL'
    | 'ARG_CORREO'
    | 'ARG_OCA'
    | 'POST_SERBIA'
    | 'BH_POSTA'
    | 'CORREOS_CHILE'
    | 'APR_72'
    | 'CORREOS_DE_COSTA_RICA'
    | 'POSTUR_IS'
    | 'SPEEDEXCOURIER'
    | 'ROU_POSTA'
    | 'UKR_NOVA'
    | 'UKR_POSHTA'
    | 'NGA_NIPOST'
    | 'NG_COURIERPLUS'
    | 'ESHOPWORLD'
    | 'WEBINTERPRET'
    | 'HERMES'
    | 'ABC_MAIL'
    | 'ARAMEX'
    | 'YANWEN'
    | 'INTERNATIONAL_BRIDGE'
    | 'SFC_LOGISTICS'
    | 'BQC_EXPRESS'
    | 'ONE_WORLD'
    | 'IT_REGISTER_MAIL'
    | 'WINIT'
    | 'CONTINENTAL'
    | 'EFS'
    | 'PANTOS'
    | 'RELAIS_COLIS'
    | 'US_DHL_EXPRESS'
    | 'US_DHL_PARCEL'
    | 'US_DHL_ECOMMERCE'
    | 'US_DHL_GLOBALFORWARDING'
    | 'UK_DHL_EXPRESS'
    | 'UK_DHL_PARCEL'
    | 'UK_DHL_GLOBALFORWARDING'
    | 'CN_DHL_EXPRESS'
    | 'CN_DHL_ECOMMERCE'
    | 'CN_DHL_GLOBALFORWARDING'
    | 'DE_DHL_EXPRESS'
    | 'DE_DHL_PARCEL'
    | 'DE_DHL_PACKET'
    | 'DE_DHL_ECOMMERCE'
    | 'DE_DHL_GLOBALFORWARDING'
    | 'DE_DHL_DEUTSCHEPOST'
    | 'AU_DHL_EXPRESS'
    | 'AU_DHL_ECOMMERCE'
    | 'AU_DHL_GLOBALFORWARDING'
    | 'HK_DHL_EXPRESS'
    | 'HK_DHL_ECOMMERCE'
    | 'HK_DHL_GLOBALFORWARDING'
    | 'CA_DHL_EXPRESS'
    | 'CA_DHL_ECOMMERCE'
    | 'CA_DHL_GLOBALFORWARDING'
    | 'IT_DHL_EXPRESS'
    | 'IT_DHL_ECOMMERCE'
    | 'IT_DHL_GLOBALFORWARDING'
    | 'FR_DHL_EXPRESS'
    | 'FR_DHL_PARCEL'
    | 'FR_DHL_GLOBALFORWARDING'
    | 'PL_DHL_EXPRESS'
    | 'PL_DHL_PARCEL'
    | 'PL_DHL_GLOBALFORWARDING'
    | 'ABC_PACKAGE'
    | 'AN_POST'
    | 'APC_OVERNIGHT'
    | 'ASM_ES'
    | 'AUPOST_CN'
    | 'ACOMMMERCE'
    | 'ADICIONAL_PT'
    | 'AIR_21'
    | 'AIRBORNE_EXPRESS_UK'
    | 'AIRPAK_MY'
    | 'AIRSPEED'
    | 'ASENDIA_DE'
    | 'ASENDIA_US'
    | 'AUSTRALIA_POST'
    | 'TOLL_AU'
    | 'AUSTRIAN_POST_EXPRESS'
    | 'AUSTRIAN_POST'
    | 'B_TWO_C_EUROPE'
    | 'BERT'
    | 'BPOST'
    | 'BRT_IT'
    | 'BLUEDART'
    | 'BONDS_COURIERS'
    | 'BPOST_INT'
    | 'BULGARIAN_POST'
    | 'CJ_LOGISTICS'
    | 'CJ_INT_MY'
    | 'CJ_MY'
    | 'CJ_TH'
    | 'CANADA_POST'
    | 'CANPAR'
    | 'CESKA_CZ'
    | 'CHRONOPOST_FR'
    | 'CHRONOPOST_PT'
    | 'CHUNGHWA_POST'
    | 'CITYLINK_MY'
    | 'COLIPOSTE'
    | 'COLIS'
    | 'COLLECTPLUS'
    | 'CORREOS_AG'
    | 'CORREOS_BR'
    | 'CORREOS_CL'
    | 'CORREOS_CR'
    | 'CORREOS_MX'
    | 'CORREOS_ES'
    | 'CORREOS_EXPRESS'
    | 'COURIERPLUS'
    | 'COURIER_POST'
    | 'CYPRUS_POST_CYP'
    | 'DBSCHENKER_SE'
    | 'DHL_ES'
    | 'DHL_ACTIVE_TRACING'
    | 'DHL_AU'
    | 'DHL_BENELUX'
    | 'DHL_DEUTSCHE_POST'
    | 'DHL_FR'
    | 'DHL_GLOBAL_ECOMMERCE'
    | 'DHL_HK'
    | 'DHL_IT'
    | 'DHL_JP'
    | 'DHL_NL'
    | 'DHL_PACKET'
    | 'DHL_PARCEL_NL'
    | 'DHL_PARCEL_ES'
    | 'DHL_PL'
    | 'DHL_SG'
    | 'DHL_UK'
    | 'DHL_GLOBAL_MAIL_ASIA'
    | 'DHL_GLOBAL_MAIL'
    | 'DHL_AT'
    | 'DPD_DELISTRACK'
    | 'DPD_FR'
    | 'DPD_DE'
    | 'DPD_HK'
    | 'DPD_IR'
    | 'DPD_LOCAL_REF'
    | 'DPD_LOCAL'
    | 'DPD_PL'
    | 'DPD_RO'
    | 'DPD_RU'
    | 'DPD_UK'
    | 'DTDC_EXPRESS'
    | 'DTDC_IN'
    | 'DAWN_WING'
    | 'DELHIVERY_IN'
    | 'DELTEC_DE'
    | 'DELTEC_UK'
    | 'DEUTSCHE_DE'
    | 'DIRECTLINK_SE'
    | 'DIRECTLOG_BR'
    | 'DOTZOT'
    | 'EC_CN'
    | 'ELTA_GR'
    | 'EMPS_CN'
    | 'EMS_CN'
    | 'ECARGO'
    | 'EMIRATES_POST'
    | 'ENSENDA'
    | 'ESTAFETA'
    | 'ESTES'
    | 'FERCAM_IT'
    | 'FLYT_EXPRESS'
    | 'FASTRACK'
    | 'FASTWAY_US'
    | 'FASTWAY_ZA'
    | 'FASTWAY_UK'
    | 'FASTWAY_AU'
    | 'FIRST_LOGISITCS'
    | 'FOUR_PX_EXPRESS'
    | 'GEODIS'
    | 'GLS_CZ'
    | 'GLS_FR'
    | 'GLS_DE'
    | 'GLS_IT'
    | 'GLS_NL'
    | 'GLS_ES'
    | 'GLS'
    | 'ACS_GR'
    | 'GENIKI_GR'
    | 'GLOBEGISTICS'
    | 'GREYHOUND'
    | 'HERMES_DE'
    | 'HERMESWORLD_UK'
    | 'HK_POST'
    | 'HRVATSKA_HR'
    | 'HUAHAN_EXPRESS'
    | 'IMX'
    | 'ITIS'
    | 'INDIA_POST'
    | 'INTERLINK'
    | 'INT_SEUR'
    | 'INT_SUER'
    | 'ISRAEL_POST'
    | 'JNE_IDN'
    | 'JAMEXPRESS_PH'
    | 'JAPAN_POST'
    | 'JP_POST'
    | 'JETSHIP_MY'
    | 'JETSHIP_SG'
    | 'KERRY_EXPRESS_VN'
    | 'KERRY_EXPRESS_HK'
    | 'KERRY_EXPRESS_TH'
    | 'KIALA'
    | 'KOREA_POST'
    | 'CJ_KR'
    | 'LAPOSTE'
    | 'LBC_PH'
    | 'LIETUVOS_LT'
    | 'LION_PARCEL'
    | 'LOGISTICSWORLDWIDE_HK'
    | 'LOGISTICSWORLDWIDE_KR'
    | 'LOGISTICSWORLDWIDE_MY'
    | 'LOOMIS'
    | 'MONDIAL'
    | 'MAGYAR_HU'
    | 'MALAYSIA_POST'
    | 'MASTERLINK'
    | 'AEROFLASH'
    | 'REDPACK'
    | 'SENDA_MX'
    | 'MONDIAL_BE'
    | 'MYHERMES'
    | 'NACEX_ES'
    | 'NATIONWIDE'
    | 'NZ_POST'
    | 'NIPOST_NG'
    | 'NIGHTLINE_UK'
    | 'NINJAVAN_PH'
    | 'NINJAVAN_SG'
    | 'NOVA_POSHTA_INT'
    | 'NOVA_POSHTA'
    | 'OCA_AR'
    | 'ONTRAC'
    | 'PTT_POST'
    | 'PANDU'
    | 'PARCELPOST_SG'
    | 'POCZTA_POLSKA'
    | 'POCZTEX'
    | 'CTT_PT'
    | 'SEUR_PT'
    | 'POS_ID'
    | 'POS_INT'
    | 'POSTNL_INT_3_S'
    | 'POSTNL'
    | 'POSTNL_INT'
    | 'POSTNORD_LOGISTICS_DK'
    | 'POSTNORD_LOGISTICS_SE'
    | 'POSTNORD_LOGISTICS_GLOBAL'
    | 'POSTA_RO'
    | 'POSTE_ITALIANE'
    | 'POSTEN_NORGE'
    | 'PROFESSIONAL_COURIERS'
    | 'RAF_PH'
    | 'RL_US'
    | 'RPD_2_MAN'
    | 'RPX_ID'
    | 'REDEXPRESS'
    | 'REDUR_ES'
    | 'REGISTER_MAIL_IT'
    | 'RELAIS_COLIS_FR'
    | 'ROCKET_PARCEL'
    | 'SDA_IT'
    | 'SF_EXPRESS'
    | 'SFC_EXPRESS'
    | 'SGT_IT'
    | 'SRE_KOREA'
    | 'SAGAWA'
    | 'SAGAWA_JP'
    | 'POST_SERBIA_CS'
    | 'SINGPOST'
    | 'SIODEMKA'
    | 'SKYNET_WORLDWIDE'
    | 'SKYNET_MY'
    | 'SKYNET_UAE'
    | 'SKYNET_UK'
    | 'SEUR_ES'
    | 'STARTRACK_EXPRESS'
    | 'STARTRACK'
    | 'SWISS_POST'
    | 'TNT_AU'
    | 'TNT_CN'
    | 'TNT_CLICK_IT'
    | 'TNT_FR'
    | 'TNT_DE'
    | 'TNT_IT'
    | 'TNT_JP'
    | 'TNT_NL'
    | 'TNT_PL'
    | 'TNT_ES'
    | 'TNT_UK'
    | 'TPG'
    | 'TAIWAN_POST_TW'
    | 'TAQBIN_HK'
    | 'TAQBIN_MY'
    | 'TAQBIN_SG'
    | 'TAXIPOST'
    | 'TELIWAY'
    | 'THAILAND_POST'
    | 'THE_COURIER_GUY'
    | 'TIKI_ID'
    | 'TOLL_IPEC'
    | 'TWO_GO'
    | 'TRANSMISSION'
    | 'UK_MAIL'
    | 'UPS_MI'
    | 'VIETNAM_POST'
    | 'WAHANA_ID'
    | 'XEND_EXPRESS_PH'
    | 'XPRESSBEES'
    | 'YAMATO'
    | 'YANWEN_CN'
    | 'YODEL'
    | 'UPS_CANADA'
    | 'UPS_MAIL_INNOVATIONS'
    | 'DE_DELTEC'
    | 'DE_INTERNATIONALSEUR'
    | 'FR_DPD'
    | 'FR_IMX'
    | 'IT_IMX'
    | 'AU_DTDC'
    | 'AU_SENDLE'
    | 'AU_SKYNET'
    | 'ES_GLS'
    | 'ES_INTERNATIONALSEUR'
    | 'ES_IMX'
    | 'CN_HUAHANEXPRESS'
    | 'LOCAL_PICKUP'
    | 'HK_DPEX'
    | 'HK_KERRYEXPRESS'
    | 'HK_LOGISTICSWORLDWIDEEXPRESS'
    | 'HK_RPX'
    | 'HK_SPREADEL'
    | 'IN_SPREADEL'
    | 'TH_CJ'
    | 'KR_LOGISTICSWORLDWIDE'
    | 'AT_DHL'
    | 'BE_IMX'
    | 'MY_LOGISTICSWORLDWIDE'
    | 'MY_JETSHIP'
    | 'SG_DHL'
    | 'SG_SPREADEL'
    | 'POSTAROMANA'
    | 'US_PUROLATOR'
    | 'US_FASTWAY'
    | 'CHRONOPOST'
    | 'CORREOS_DE_ESPANA'
    | 'DEUTSCHE_POST_DHL'
    | 'EBOOST_SDA'
    | 'HONGKONG_POST'
    | 'INTANGIBLE_DIGITAL_SERVICES'
    | 'LA_POSTE'
    | 'LA_POSTE_SUIVI'
    | 'NEKO_YAMATO_UNYUU'
    | 'NITTSU_PELICAN_BIN'
    | 'POSTE_ITALIA'
    | 'SAGAWA_KYUU_BIN'
    | 'STAR_TRACK_EXPRESS'
    | 'US_DTDC'
    | 'US_STARTRACK'
    | 'ISR_ISRAEL_POST'
    | 'BE_MONDIAL'
    | 'B_2_CEUROPE'
    | 'PHL_2_GO'
    | 'PHL_AIR_21'
    | 'PT_SPANISH_SEUR'
    | 'ES_SPANISH_SEUR'
    | 'SG_DPEX'
    | 'CH_IMX'
    | 'DHLG'
    | 'RUSTON'
    | 'MIKROPAKKET'
    | 'XPOST'
    | 'PAN_ASIA'
    | 'PARCELONE'
    | 'SPEEDEE'
    | 'VENIPAK'
    | 'CROSHOT'
    | 'SHREENANDANCOURIER'
    | 'EPST_GLBL'
    | 'NEWGISTICS'
    | 'POST_SLOVENIA'
    | 'JERSEY_POST'
    | 'WMG'
    | 'BOMBINOEXP'
    | 'XQ_EXPRESS'
    | 'FURDECO'
    | 'LEGION_EXPRESS'
    | 'YDH_EXPRESS'
    | 'LHT_EXPRESS'
    | 'SOUTH_AFRICAN_POST_OFFICE'
    | 'GRUPO'
    | 'SPOTON'
    | 'DIMERCO'
    | 'INTERPARCEL_UK'
    | 'ABCUSTOM'
    | 'IND_DELIVREE'
    | 'GLOBAL_ABF'
    | 'CN_BESTEXPRESS'
    | 'DX_SFTP'
    | 'PICKUPP_MYS'
    | 'XPERT_DELIVERY'
    | 'FMX'
    | 'HELLMANN'
    | 'DHL_REFR'
    | 'DHL_HK'
    | 'SHIP_IT_ASIA'
    | 'KERRY_ECOMMERCE'
    | 'GOJEK'
    | 'FRETERAPIDO'
    | 'YODEL_INTNL'
    | 'CFL_LOGISTICS'
    | 'PITNEY_BOWES'
    | 'ZA_SPECIALISED_FREIGHT'
    | 'JANCO'
    | 'XPRESSEN_DK'
    | 'YTO'
    | 'RPD2MAN'
    | 'SEUR_SP_API'
    | 'DELIVERYONTIME'
    | 'WISE_EXPRESS'
    | 'JINSUNG'
    | 'JTEXPRESS_VN'
    | 'CHUKOU1'
    | 'TRANS_KARGO'
    | 'FEDEX_INTL_MLSERV'
    | 'SWISHIP_DE'
    | 'IVOY_WEBHOOK'
    | 'AIRMEE_WEBHOOK'
    | 'VAMOX'
    | 'FIRSTMILE'
    | 'AMS_GRP'
    | 'FASTWAY_IR'
    | 'HH_EXP'
    | 'HRPARCEL'
    | 'MYS_MYPOST_ONLINE'
    | 'GESWL'
    | 'BLUESTAR'
    | 'TIPSA'
    | 'CDEK_TR'
    | 'KGMHUB'
    | 'INTEXPRESS'
    | 'DESCARTES'
    | 'OVERSE_EXP'
    | 'ONECLICK'
    | 'ROADRUNNER_FREIGHT'
    | 'GLS_CROTIA'
    | 'TOURLINE'
    | 'MRW_FTP'
    | 'BH_WORLDWIDE'
    | 'BLUEX'
    | 'DYLT'
    | 'OCS'
    | 'YINGNUO_LOGISTICS'
    | 'SIN_GLBL'
    | 'TUFFNELLS_REFERENCE'
    | 'CJPACKET'
    | 'MILKMAN'
    | 'FIEGE_NL'
    | 'ASIGNA'
    | 'ONEWORLDEXPRESS'
    | 'LTIANEXP'
    | 'KWE_GLOBAL'
    | 'CTC_EXPRESS'
    | 'LAO_POST'
    | 'EU_IMX'
    | 'GLS_SLOV'
    | 'AMAZON'
    | 'MORE_LINK'
    | 'JX'
    | 'MYS_EMS'
    | 'EASY_MAIL'
    | 'ADUIEPYLE'
    | 'GB_PANTHER'
    | 'SG_DETRACK'
    | 'EXPRESSSALE'
    | 'DICOM'
    | 'MATDESPATCH'
    | 'TRUNKRS_WEBHOOK'
    | 'WESTBANK_COURIER'
    | 'MBW'
    | 'KHM_CAMBODIA_POST'
    | 'FEDEX_CROSSBORDER'
    | 'JANIO'
    | 'SINOTRANS'
    | 'BRT_IT_PARCELID'
    | 'A1POST'
    | 'DHL_SUPPLY_CHAIN'
    | 'TAZMANIAN_FREIGHT'
    | 'TOPYOU'
    | 'PALEXPRESS'
    | 'SAIA_FREIGHT'
    | 'CN_WEDO'
    | 'FULFILLME'
    | 'SG_QXPRESS'
    | 'UPS_REFERENCE'
    | 'NHANS_SOLUTIONS'
    | 'CARIBOU'
    | 'LOCUS_WEBHOOK'
    | 'DSV'
    | 'CN_GOFLY'
    | 'COORDINADORA'
    | 'P2P_TRC'
    | 'ANDREANI'
    | 'DIRECTPARCELS'
    | 'DOORA'
    | 'FEDEX_POLAND'
    | 'INTERPARCEL_NZ'
    | 'XDP_UK_REFERENCE'
    | 'ETOMARS'
    | 'CN_JCEX'
    | 'IND_ECOM'
    | 'FAR_INTERNATIONAL'
    | 'ESP_ENVIALIA'
    | 'IDEXPRESS'
    | 'GANGBAO'
    | 'SMSA_EXPRESS'
    | 'NEWAY'
    | 'DEX_I'
    | 'DESIGNERTRANSPORT_WEBHOOK'
    | 'BUDBEE_WEBHOOK'
    | 'GLS_SLOVEN'
    | 'PARCELLED_IN'
    | 'COPA_COURIER'
    | 'GSI_EXPRESS'
    | 'CON_WAY'
    | 'BROUWER_TRANSPORT'
    | 'TOLL_NZ'
    | 'CPEX'
    | 'ECHO'
    | 'FEDEX_FR'
    | 'XDE_WEBHOOK'
    | 'TOLOS'
    | 'BORDEREXPRESS'
    | 'GIAO_HANG'
    | 'MAILPLUS_JPN'
    | 'GEODIS_ESPACE'
    | 'TNT_UK_REFR'
    | 'DOORDASH_WEBHOOK'
    | 'KEC'
    | 'CJ_HK_INTERNATIONAL'
    | 'HELTHJEM'
    | 'ZA_COURIERIT'
    | 'SFB2C'
    | 'FREIGHTQUOTE'
    | 'FR_EXAPAQ'
    | 'LANDMARK_GLOBAL_REFERENCE'
    | 'PARCEL2GO'
    | 'DELNEXT'
    | 'TCK_EXPRESS'
    | 'ENDEAVOUR_DELIVERY'
    | 'NANJINGWOYUAN'
    | 'HEPPNER_FR'
    | 'PICKRR'
    | 'FONSEN'
    | 'APC_OVERNIGHT_CONNUM'
    | 'STAR_TRACK_NEXT_FLIGHT'
    | 'UPS_FREIGHT'
    | 'DAJIN'
    | 'POSTA_PLUS'
    | 'CEVA'
    | 'ORANGE_DS'
    | 'ANSERX'
    | 'JS_EXPRESS'
    | 'PADTF'
    | 'GAC'
    | 'EZSHIP'
    | 'GEIS'
    | 'SYPOST'
    | 'AMAZON_SHIP_MCF'
    | 'SF_EX'
    | 'YUSEN'
    | 'ESP_MRW'
    | 'BRING'
    | 'PAGO'
    | 'AO_COURIER'
    | 'GBA'
    | 'DIAMOND_EUROGISTICS'
    | 'NEWEGGEXPRESS'
    | 'LALAMOVE'
    | 'SPEEDCOURIERS_GR'
    | 'CORPORATECOURIERS_WEBHOOK'
    | 'FORRUN'
    | 'PICKUP'
    | 'BOND'
    | 'ECMS'
    | 'INTELIPOST'
    | 'SK_POSTA'
    | 'FLASHEXPRESS'
    | 'FETCHR_WEBHOOK'
    | 'CN_STO'
    | 'SEKO_SFTP'
    | 'THEDELIVERYGROUP'
    | 'CELLO_SQUARE'
    | 'HOME_DELIVERY_SOLUTIONS'
    | 'DPD_HGRY'
    | 'KERRYTTC_VN'
    | 'TARRIVE'
    | 'JOYING_BOX'
    | 'COLLIVERY'
    | 'TOTAL_EXPRESS'
    | 'ZJS_EXPRESS'
    | 'STARKEN'
    | 'MAINFREIGHT'
    | 'IND_FIRSTFLIGHT'
    | 'BE_BPOST'
    | 'DEMANDSHIP'
    | 'CN_DPEX'
    | 'ACSWORLDWIDE'
    | 'LOGISTERS'
    | 'GOGLOBALPOST'
    | 'AMSTAN'
    | 'OKAYPARCEL'
    | 'I_DIKA'
    | 'ENVIALIA_REFERENCE'
    | 'PAACK_WEBHOOK'
    | 'GRAB_WEBHOOK'
    | 'PARCELPOINT'
    | 'ICUMULUS'
    | 'FDSEXPRESS'
    | 'DAIGLOBALTRACK'
    | 'CNDEXPRESS'
    | 'GLOBAL_IPARCEL'
    | 'AMAZON_FBA_SWISHIP'
    | 'WYNGS'
    | 'YURTICI_KARGO'
    | 'CN_PAYPAL_PACKAGE'
    | 'PARCEL_2_POST'
    | 'ZYLLEM'
    | 'VIA_EXPRESS'
    | 'WIZMO'
    | 'TIGFREIGHT'
    | 'PIL_LOGISTICS'
    | 'ZTO_EXPRESS'
    | 'HEPPNER'
    | 'GENERAL_OVERNIGHT'
    | 'HAPPY2POINT'
    | 'ARCO_SPEDIZIONI'
    | 'CHITCHATS'
    | 'IML'
    | 'SMOOTH'
    | 'INTEL_VALLEY'
    | 'CLE_LOGISTICS'
    | 'FIEGE'
    | 'MX_CARGO'
    | 'ZIINGFINALMILE'
    | 'TCS'
    | 'DAYTON_FREIGHT'
    | 'ROADBULL'
    | 'YODEL_DIR'
    | 'STONE3PL'
    | 'PARCELPAL_WEBHOOK'
    | 'DHL_ECOMERCE_ASA'
    | 'SIMPLYPOST'
    | 'KY_EXPRESS'
    | 'SHENZHEN'
    | 'UC_EXPRE'
    | 'US_LASERSHIP'
    | 'DIDADI'
    | 'DYNALOGIC'
    | 'DBSCHENKER_B2B'
    | 'MXE'
    | 'PFCEXPRESS'
    | 'WHISTL'
    | 'CAE_DELIVERS'
    | 'WEPOST'
    | 'ALLIEDEXPRESS'
    | 'SHIPPIT'
    | 'DDEXPRESS'
    | 'ARAMEX_AU'
    | 'TFM'
    | 'BNEED'
    | 'M_XPRESS'
    | 'HK_TGX'
    | 'LATVIJAS_PASTS'
    | 'HDB_BOX'
    | 'VIAEUROPE'
    | 'CORREO_UY'
    | 'CLEVY_LINKS'
    | 'IBEONE'
    | 'J_NET'
    | 'RCL'
    | '6LS'
    | 'CGS_EXPRESS'
    | 'BLR_BELPOST'
    | 'BIRDSYSTEM'
    | 'DOBROPOST'
    | 'SAP_EXPRESS'
    | 'WEASHIP'
    | 'SONICTL'
    | 'KWT'
    | 'AFLLOG_FTP'
    | 'IND_SAFEEXPRESS'
    | 'TOPHATTEREXPRESS'
    | 'SEINO'
    | 'MGLOBAL'
    | 'SZENDEX'
    | 'AVERITT'
    | 'DBSCHENKER_SV'
    | 'LEADER'
    | 'AO_DEUTSCHLAND'
    | '2EBOX'
    | 'EU_FLEET_SOLUTIONS'
    | 'SG_SPEEDPOST'
    | 'PCFCORP'
    | 'AERONET'
    | 'LINKBRIDGE'
    | 'DE_DEUTSCHE_POST_DHL_WITHIN_EUROPE_TRACKNET'
    | 'PRIMAMULTICIPTA'
    | 'ISR_POST_DOMESTIC'
    | 'COUREX'
    | 'ZAJIL_EXPRESS'
    | 'BESTWAYPARCEL'
    | 'COLLECTCO'
    | 'AEX'
    | 'JTEXPRESS'
    | 'FEDEX_UK'
    | 'USHIP'
    | 'ROUTIFIC_WEBHOOK'
    | 'GLOBAL_EXPRESS'
    | 'BRT_IT_SENDER_REF'
    | 'GLOBAVEND'
    | 'PIXSELL'
    | 'SHIPTOR'
    | 'CDEK'
    | 'VNM_VIETTELPOST'
    | 'PHL_AIR21'
    | 'PALLET_NETWORK'
    | 'CJ_CENTURY'
    | 'UK_XDP'
    | 'GSO'
    | 'VIWO'
    | 'SKYBOX'
    | 'PAPER_EXPRESS'
    | 'KERRYTJ'
    | 'NTLOGISTICS_VN'
    | 'SDH_SCM'
    | 'PALLETWAYS'
    | 'NOX_NACHTEXPRESS'
    | 'ZINC'
    | 'DPE_SOUTH_AFRC'
    | 'LOGISTIKA'
    | 'CELERITAS'
    | 'PRESSIODE'
    | 'SHREE_MARUTI'
    | 'PARCELINKLOGISTICS'
    | 'EFEX'
    | 'LOTTE'
    | 'LONESTAR'
    | 'GB_NORSK'
    | 'APRISAEXPRESS'
    | 'BEL_RS'
    | 'OSM_WORLDWIDE'
    | 'SAILPOST'
    | 'MAILAMERICAS'
    | 'WESTGATE_GL'
    | 'DTD_EXPR'
    | 'ALFATREX'
    | 'THABIT_LOGISTICS'
    | 'PROMEDDELIVERY'
    | 'PAQUETEXPRESS'
    | 'NEWZEALAND_COURIERS'
    | 'LIEFERY'
    | 'JOOM_LOGIS'
    | 'STRECK_TRANSPORT'
    | 'HCT_LOGISTICS'
    | 'ZA_FASTWAY'
    | 'CARRY_FLAP'
    | 'PONY_EXPRESS'
    | 'US_OLD_DOMINION'
    | 'ANICAM_BOX'
    | 'ALWAYS_EXPRESS'
    | 'WANBEXPRESS'
    | 'AUS_STARTRACK'
    | 'GBS_BROKER'
    | 'STALLIONEXPRESS'
    | 'RAIDEREX'
    | 'ALLJOY'
    | 'SHOPFANS'
    | 'KYUNGDONG_PARCEL'
    | 'CHAMPION_LOGISTICS'
    | 'PICKUPP_SGP'
    | 'DEALERSEND'
    | 'MORNING_EXPRESS'
    | 'NACEX'
    | 'THENILE_WEBHOOK'
    | 'JOCOM'
    | 'HOLISOL'
    | 'LBCEXPRESS_FTP'
    | 'CSE'
    | 'TFORCE_FINALMILE'
    | 'KURASI'
    | 'GEMWORLDWIDE'
    | 'SHIP_GATE'
    | 'USF_REDDAWAY'
    | 'SHIPTER'
    | 'NATIONAL_SAMEDAY'
    | 'APG'
    | 'CN_BOXC'
    | 'YUNEXPRESS'
    | 'INTEGRA2_FTP'
    | 'CAINIAO'
    | 'ECOSCOOTING'
    | 'DMS_MATRIX'
    | 'MAINWAY'
    | 'ASENDIA_USA'
    | 'PAPERFLY'
    | 'HOUNDEXPRESS'
    | '3JMSLOGISTICS'
    | 'EP_BOX'
    | 'BOX_BERRY'
    | 'LICCARDI_EXPRESS'
    | 'PLUS_LOG_UK'
    | 'FULFILLA'
    | 'SKY_POSTAL'
    | 'ASE'
    | 'CNWANGTONG'
    | 'PITTOHIO'
    | 'MAIL_PLUS'
    | 'XPO_LOGISTICS'
    | 'WNDIRECT'
    | 'CLOUDWISH_ASIA'
    | 'ZELERIS'
    | 'MARA_XPRESS'
    | 'GIO_EXPRESS'
    | 'OCS_WORLDWIDE'
    | 'DESTINY'
    | 'ARK_LOGISTICS'
    | 'DE_DPD_DELISTRACK'
    | 'COMET_TECH'
    | 'DHL_PARCEL_RU'
    | 'AQUILINE'
    | 'PILOT_FREIGHT'
    | 'TNT_REFR'
    | 'QWINTRY'
    | 'DANSKE_FRAGT'
    | 'SHREE_ANJANI_COURIER'
    | 'CARRIERS'
    | 'AIR_CANADA_GLOBAL'
    | 'PRESIDENT_TRANS'
    | 'STEPFORWARDFS'
    | 'ESHIPPING'
    | 'SHREETIRUPATI'
    | 'HX_EXPRESS'
    | 'INDOPAKET'
    | 'CN_17POST'
    | 'K1_EXPRESS'
    | 'CJ_GLS'
    | 'MYS_GDEX'
    | 'NATIONEX'
    | 'CN_EQUICK'
    | 'ANJUN'
    | 'VIRTRANSPORT'
    | 'FARGOOD'
    | 'SMG_EXPRESS'
    | 'RZYEXPRESS'
    | 'SEFL'
    | 'HIPSHIPPER'
    | 'HDB'
    | 'RPXLOGISTICS'
    | 'MIKROPAKKET_BE'
    | 'KUEHNE'
    | 'IT_NEXIVE'
    | 'PTS'
    | 'ETS_EXPRESS'
    | 'SWISS_POST_FTP'
    | 'COLIS_PRIVE'
    | 'FASTRK_SERV'
    | '4_72'
    | 'US_YRC'
    | 'CN_YUNDA'
    | 'POSTNL_INTL_3S'
    | 'AAA_COOPER'
    | 'ELIAN_POST'
    | 'CUBYN'
    | 'SAU_SAUDI_POST'
    | '360LION'
    | 'ABXEXPRESS_MY'
    | 'NINJAVAN_WB'
    | 'ESP_PACKLINK'
    | 'IND_JAYONEXPRESS'
    | 'GB_ARROW'
    | 'ZES_EXPRESS'
    | 'IND_GOJAVAS'
    | 'ZEPTO_EXPRESS'
    | 'SKYNET_ZA'
    | 'KPOST'
    | 'ZEEK_2_DOOR'
    | 'DHL_FREIGHT'
    | 'BLUECARE'
    | 'BLINKLASTMILE'
    | 'POSTA_UKR'
    | 'LOGISTYX_TRANSGROUP'
    | 'JINDOUYUN'
    | 'CHROBINSON'
    | 'TRACKON'
    | 'CN_POST56'
    | 'GB_TUFFNELLS'
    | 'COURANT_PLUS'
    | 'SCUDEX_EXPRESS'
    | 'SHIPENTEGRA'
    | 'TRUMPCARD'
    | 'CHOIR_EXP'
    | 'ETOTAL'
    | 'COPE'
    | 'SFPLUS_WEBHOOK'
    | 'IND_GATI'
    | 'HERMES_2MANN_HANDLING'
    | 'CN_WISHPOST'
    | 'GLOBALTRANZ'
    | 'HKD'
    | 'UDS'
    | 'BJSHOMEDELIVERY'
    | 'YAKIT'
    | 'LEXSHIP'
    | 'OMNIVA'
    | 'SUTTON'
    | 'COSTMETICSNOW'
    | 'PANTHER_REFERENCE'
    | 'SFCSERVICE'
    | 'PFLOGISTICS'
    | 'LTL'
    | 'LOOMIS_EXPRESS'
    | 'PARKNPARCEL'
    | 'SPRING_GDS'
    | 'GLS_ITALY'
    | 'ECEXPRESS'
    | 'LINE'
    | 'INTERPARCEL_AU'
    | 'GEL_EXPRESS'
    | 'AGILITY'
    | 'XL_EXPRESS'
    | 'ADERONLINE'
    | 'DIRECTCOURIERS'
    | 'PLANZER'
    | 'NOX_NIGHT_TIME_EXPRESS'
    | 'SENDING'
    | 'HUODULL'
  carrier_name_other?: string | undefined
  tracking_url?: string | undefined
  tracking_number: string
}
type TrackingInfoList = TrackingInfo[]
type RefundIds = string
type RefundIdsList = RefundIds[]
type EvidenceInfo = {
  tracking_info?: TrackingInfoList | undefined
  refund_ids?: RefundIdsList | undefined
}
type DefinitionsDocumentList = Document[]
type ActionInfo = {
  action?:
    | 'ACKNOWLEDGE_RETURN_ITEM'
    | 'ACCEPT_CLAIM'
    | 'PROVIDE_EVIDENCE'
    | 'APPEAL'
    | 'CANCEL'
    | 'CHANGE_REASON'
    | 'ESCALATE'
    | undefined
  response_option?: string | undefined
  mandatory?: boolean | undefined
}
type Evidence = {
  evidence_type?:
    | 'PROOF_OF_FULFILLMENT'
    | 'PROOF_OF_REFUND'
    | 'PROOF_OF_DELIVERY_SIGNATURE'
    | 'PROOF_OF_RECEIPT_COPY'
    | 'RETURN_POLICY'
    | 'BILLING_AGREEMENT'
    | 'PROOF_OF_RESHIPMENT'
    | 'ITEM_DESCRIPTION'
    | 'POLICE_REPORT'
    | 'AFFIDAVIT'
    | 'PAID_WITH_OTHER_METHOD'
    | 'COPY_OF_CONTRACT'
    | 'TERMINAL_ATM_RECEIPT'
    | 'PRICE_DIFFERENCE_REASON'
    | 'SOURCE_CONVERSION_RATE'
    | 'BANK_STATEMENT'
    | 'CREDIT_DUE_REASON'
    | 'REQUEST_CREDIT_RECEIPT'
    | 'PROOF_OF_RETURN'
    | 'CREATE'
    | 'CHANGE_REASON'
    | 'PROOF_OF_REFUND_OUTSIDE_PAYPAL'
    | 'RECEIPT_OF_MERCHANDISE'
    | 'CUSTOMS_DOCUMENT'
    | 'CUSTOMS_FEE_RECEIPT'
    | 'INFORMATION_ON_RESOLUTION'
    | 'ADDITIONAL_INFORMATION_OF_ITEM'
    | 'DETAILS_OF_PURCHASE'
    | 'PROOF_OF_SIGNIFICANT_DIFFERENCE'
    | 'PROOF_OF_SOFTWARE_OR_SERVICE_NOT_AS_DESCRIBED'
    | 'PROOF_OF_CONFISCATION'
    | 'PROOF_OF_DAMAGE'
    | 'COPY_OF_LAW_ENFORCEMENT_AGENCY_REPORT'
    | 'ADDITIONAL_PROOF_OF_SHIPMENT'
    | 'PROOF_OF_DENIAL_BY_CARRIER'
    | 'THIRDPARTY_PROOF_FOR_DAMAGE_OR_SIGNIFICANT_DIFFERENCE'
    | 'VALID_SUPPORTING_DOCUMENT'
    | 'LEGIBLE_SUPPORTING_DOCUMENT'
    | 'RETURN_TRACKING_INFORMATION'
    | 'DELIVERY_RECEIPT'
    | 'PROOF_OF_INSTORE_RECEIPT'
    | 'ADDITIONAL_TRACKING_INFORMATION'
    | 'PROOF_OF_SHIPMENT_POSTAGE'
    | 'ONLINE_TRACKING_INFORMATION'
    | 'PROOF_OF_INSTORE_REFUND'
    | 'PROOF_FOR_SOFTWARE_OR_SERVICE_DELIVERED'
    | 'RETURN_ADDRESS_FOR_SHIPPING'
    | 'COPY_OF_THE_EPARCEL_MANIFEST'
    | 'COPY_OF_SHIPPING_MANIFEST'
    | 'APPEAL_AFFIDAVIT'
    | 'RECEIPT_OF_REPLACEMENT'
    | 'COPY_OF_DRIVERS_LICENSE'
    | 'ACCOUNT_CHANGE_INFORMATION'
    | 'DELIVERY_ADDRESS'
    | 'CONFIRMATION_OF_RESOLUTION'
    | 'MERCHANT_RESPONSE'
    | 'PERMISSION_DESCRIPTION'
    | 'STATUS_OF_MERCHANDISE'
    | 'LOST_CARD_DETAILS'
    | 'LAST_VALID_TRANSACTION_DETAILS'
    | 'ADDITIONAL_PROOF_OF_RETURN'
    | 'DECLARATION'
    | 'PROOF_OF_MISSING_ITEMS'
    | 'PROOF_OF_EMPTY_PACKAGE_OR_DIFFERENT_ITEM'
    | 'PROOF_OF_ITEM_NOT_RECEIVED'
    | 'ORDER_DETAILS'
    | 'LISTING_URL'
    | 'SHIPPING_INSURANCE'
    | 'BUYER_RESPONSE'
    | 'PHOTOS_OF_SHIPPED_ITEM'
    | 'OTHER'
    | 'CANCELLATION_DETAILS'
    | 'MERCHANT_CONTACT_DETAILS'
    | 'ITEM_DETAILS'
    | 'CORRECT_RECIPIENT_INFORMATION'
    | 'EXPLANATION_OF_FUNDS_NOT_DELIVERED'
    | undefined
  evidence_info?: EvidenceInfo | undefined
  documents?: DefinitionsDocumentList | undefined
  notes?: string | undefined
  source?:
    | 'REQUESTED_FROM_BUYER'
    | 'REQUESTED_FROM_SELLER'
    | 'SUBMITTED_BY_BUYER'
    | 'SUBMITTED_BY_SELLER'
    | 'SUBMITTED_BY_PARTNER'
    | undefined
  date?: DateTime | undefined
  item_id?: string | undefined
  item_type?: ItemType | undefined
  action_info?: ActionInfo | undefined
  dispute_life_cycle_stage?: DisputeLifecycleStage | undefined
}
type EvidenceList = Evidence[]
type OfferType =
  | 'REFUND'
  | 'REFUND_WITH_RETURN'
  | 'REFUND_WITH_REPLACEMENT'
  | 'REPLACEMENT_WITHOUT_REFUND'
type OfferHistory = {
  offer_time?: DateTime | undefined
  actor?: 'BUYER' | 'SELLER' | undefined
  event_type?: 'PROPOSED' | 'ACCEPTED' | 'DENIED' | undefined
  offer_type?: OfferType | undefined
  offer_amount?: Money | undefined
  notes?: string | undefined
  dispute_life_cycle_stage?: DisputeLifecycleStage | undefined
}
type OfferHistoryList = OfferHistory[]
type Offer = {
  buyer_requested_amount?: Money | undefined
  seller_offered_amount?: Money | undefined
  offer_type?: OfferType | undefined
  history?: OfferHistoryList | undefined
}
type RefundDetails = { allowed_refund_amount?: Money | undefined }
type CommunicationDetails = {
  email?: EmailAddress | undefined
  note?: string | undefined
  time_posted?: DateTime | undefined
}
type SupportingInfoDefinitionsDocumentList = Document[]
type SupportingInfo = {
  notes?: string | undefined
  documents?: SupportingInfoDefinitionsDocumentList | undefined
  source?: 'SUBMITTED_BY_BUYER' | 'SUBMITTED_BY_SELLER' | 'SUBMITTED_BY_PARTNER' | undefined
  provided_time?: DateTime | undefined
  dispute_life_cycle_stage?: DisputeLifecycleStage | undefined
}
type SupportingInfoList = SupportingInfo[]
type AcknowledgementType =
  | 'ITEM_RECEIVED'
  | 'ITEM_NOT_RECEIVED'
  | 'DAMAGED'
  | 'EMPTY_PACKAGE_OR_DIFFERENT'
  | 'MISSING_ITEMS'
type AcknowledgementTypeList = AcknowledgementType[]
type AcknowledgeReturnItemResponseOptions = {
  acknowledgement_types?: AcknowledgementTypeList | undefined
}
type AcceptClaimType =
  | 'REFUND'
  | 'REFUND_WITH_RETURN'
  | 'PARTIAL_REFUND'
  | 'REFUND_WITH_RETURN_SHIPMENT_LABEL'
type AcceptClaimTypeList = AcceptClaimType[]
type AcceptClaimResponseOptions = { accept_claim_types?: AcceptClaimTypeList | undefined }
type OfferTypeList = OfferType[]
type MakeOfferResponseOptions = { offer_types?: OfferTypeList | undefined }
type AllowedResponseOptions = {
  acknowledge_return_item?: AcknowledgeReturnItemResponseOptions | undefined
  accept_claim?: AcceptClaimResponseOptions | undefined
  make_offer?: MakeOfferResponseOptions | undefined
}
type Dispute = {
  dispute_id?: string | undefined
  create_time?: DateTime | undefined
  update_time?: DateTime | undefined
  disputed_transactions?: TransactionInfoList | undefined
  reason?: DisputeReason | undefined
  status?: Status | undefined
  dispute_amount?: Money | undefined
  dispute_asset?: Cryptocurrency | undefined
  fee_policy?: FeePolicy | undefined
  external_reason_code?: string | undefined
  dispute_outcome?: DisputeOutcome | undefined
  adjudications?: AdjudicationList | undefined
  money_movements?: MoneyMovementList | undefined
  fund_movements?: FundMovementList | undefined
  dispute_life_cycle_stage?: DisputeLifecycleStage | undefined
  dispute_channel?: DisputeChannel | undefined
  messages?: MessageList | undefined
  extensions?: Extensions | undefined
  evidences?: EvidenceList | undefined
  buyer_response_due_date?: DateTime | undefined
  seller_response_due_date?: DateTime | undefined
  offer?: Offer | undefined
  refund_details?: RefundDetails | undefined
  communication_details?: CommunicationDetails | undefined
  supporting_info?: SupportingInfoList | undefined
  allowed_response_options?: AllowedResponseOptions | undefined
  links?: DefinitionsLinkDescriptionList | undefined
}
type Patch = {
  op: 'add' | 'remove' | 'replace' | 'move' | 'copy' | 'test'
  path?: string | undefined
  value?: { [x: string]: unknown } | undefined
  from?: string | undefined
}
type PatchRequest = Patch[]
type SubsequentAction = { links?: DefinitionsLinkDescriptionList | undefined }
type Adjudicate = { adjudication_outcome: 'BUYER_FAVOR' | 'SELLER_FAVOR' }
type RequireEvidence = { action: 'BUYER_EVIDENCE' | 'SELLER_EVIDENCE' }
type BuyerEscalationReason = { [x: string]: unknown }
type Escalate = {
  note?: string | undefined
  buyer_escalation_reason?: BuyerEscalationReason | undefined
}
type EscalateResponse = { links?: DefinitionsLinkDescriptionList | undefined }
type MakeOffer = {
  note: string
  offer_amount?: Money | undefined
  return_shipping_address?: AddressPortable | undefined
  invoice_id?: string | undefined
  offer_type: OfferType
}
type AcceptOffer = { note?: string | undefined }
type DenyOffer = { note: string }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1/customer/disputes': {
      $get:
        | {
            input: {
              query: {
                start_time?: string | undefined
                disputed_transaction_id?: string | undefined
                page_size?: number | undefined
                next_page_token?: string | undefined
                dispute_state?: string | undefined
                update_time_before?: string | undefined
                update_time_after?: string | undefined
              }
            }
            output: DisputeSearch
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                start_time?: string | undefined
                disputed_transaction_id?: string | undefined
                page_size?: number | undefined
                next_page_token?: string | undefined
                dispute_state?: string | undefined
                update_time_before?: string | undefined
                update_time_after?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                start_time?: string | undefined
                disputed_transaction_id?: string | undefined
                page_size?: number | undefined
                next_page_token?: string | undefined
                dispute_state?: string | undefined
                update_time_before?: string | undefined
                update_time_after?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v1/customer/disputes/:id': {
      $get:
        | { input: { param: { id: string } }; output: Dispute; outputFormat: 'json'; status: 200 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 500 }
        | { input: { param: { id: string } }; output: Error; outputFormat: 'json'; status: 200 }
      $patch:
        | {
            input: { param: { id: string } } & { json: PatchRequest } & { form: PatchRequest }
            output: SubsequentAction
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { id: string } } & { json: PatchRequest } & { form: PatchRequest }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: string } } & { json: PatchRequest } & { form: PatchRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: PatchRequest } & { form: PatchRequest }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { json: PatchRequest } & { form: PatchRequest }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { id: string } } & { json: PatchRequest } & { form: PatchRequest }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v1/customer/disputes/:id/provide-evidence': {
      $post:
        | {
            input: { param: { id: string } } & { form: { 'evidence-file'?: File | undefined } }
            output: SubsequentAction
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { form: { 'evidence-file'?: File | undefined } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { form: { 'evidence-file'?: File | undefined } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v1/customer/disputes/:id/appeal': {
      $post:
        | {
            input: { param: { id: string } } & { form: { 'evidence-file'?: File | undefined } }
            output: SubsequentAction
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { form: { 'evidence-file'?: File | undefined } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { form: { 'evidence-file'?: File | undefined } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v1/customer/disputes/:id/accept-claim': {
      $post:
        | {
            input: { param: { id: string } } & {
              form: { 'accept-claim-document'?: File | undefined }
            }
            output: SubsequentAction
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              form: { 'accept-claim-document'?: File | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              form: { 'accept-claim-document'?: File | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v1/customer/disputes/:id/adjudicate': {
      $post:
        | {
            input: { param: { id: string } } & { json: Adjudicate } & { form: Adjudicate }
            output: SubsequentAction
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: Adjudicate } & { form: Adjudicate }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: Adjudicate } & { form: Adjudicate }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { json: Adjudicate } & { form: Adjudicate }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { id: string } } & { json: Adjudicate } & { form: Adjudicate }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v1/customer/disputes/:id/require-evidence': {
      $post:
        | {
            input: { param: { id: string } } & { json: RequireEvidence } & { form: RequireEvidence }
            output: SubsequentAction
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: RequireEvidence } & { form: RequireEvidence }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: RequireEvidence } & { form: RequireEvidence }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { json: RequireEvidence } & { form: RequireEvidence }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { id: string } } & { json: RequireEvidence } & { form: RequireEvidence }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v1/customer/disputes/:id/escalate': {
      $post:
        | {
            input: { param: { id: string } } & { json: Escalate } & { form: Escalate }
            output: EscalateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: Escalate } & { form: Escalate }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: Escalate } & { form: Escalate }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { json: Escalate } & { form: Escalate }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { id: string } } & { json: Escalate } & { form: Escalate }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v1/customer/disputes/:id/send-message': {
      $post:
        | {
            input: { param: { id: string } } & { form: { message_document?: File | undefined } }
            output: SubsequentAction
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { form: { message_document?: File | undefined } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { form: { message_document?: File | undefined } }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { form: { message_document?: File | undefined } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { id: string } } & { form: { message_document?: File | undefined } }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v1/customer/disputes/:id/make-offer': {
      $post:
        | {
            input: { param: { id: string } } & { json: MakeOffer } & { form: MakeOffer }
            output: SubsequentAction
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: MakeOffer } & { form: MakeOffer }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: MakeOffer } & { form: MakeOffer }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { json: MakeOffer } & { form: MakeOffer }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { id: string } } & { json: MakeOffer } & { form: MakeOffer }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v1/customer/disputes/:id/accept-offer': {
      $post:
        | {
            input: { param: { id: string } } & { json: AcceptOffer } & { form: AcceptOffer }
            output: SubsequentAction
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: AcceptOffer } & { form: AcceptOffer }
            output: SubsequentAction
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { id: string } } & { json: AcceptOffer } & { form: AcceptOffer }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: AcceptOffer } & { form: AcceptOffer }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { json: AcceptOffer } & { form: AcceptOffer }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { id: string } } & { json: AcceptOffer } & { form: AcceptOffer }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v1/customer/disputes/:id/deny-offer': {
      $post:
        | {
            input: { param: { id: string } } & { json: DenyOffer } & { form: DenyOffer }
            output: SubsequentAction
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: DenyOffer } & { form: DenyOffer }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: DenyOffer } & { form: DenyOffer }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { json: DenyOffer } & { form: DenyOffer }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { id: string } } & { json: DenyOffer } & { form: DenyOffer }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v1/customer/disputes/:id/acknowledge-return-item': {
      $post:
        | {
            input: { param: { id: string } } & {
              form: { acknowledgement_document?: File | undefined }
            }
            output: SubsequentAction
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              form: { acknowledgement_document?: File | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              form: { acknowledgement_document?: File | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & {
              form: { acknowledgement_document?: File | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { id: string } } & {
              form: { acknowledgement_document?: File | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/v1/customer/disputes/:id/provide-supporting-info': {
      $post:
        | {
            input: { param: { id: string } } & {
              form: { 'supporting document'?: File | undefined }
            }
            output: SubsequentAction
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              form: { 'supporting document'?: File | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              form: { 'supporting document'?: File | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              form: { 'supporting document'?: File | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & {
              form: { 'supporting document'?: File | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { param: { id: string } } & {
              form: { 'supporting document'?: File | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 200
          }
    }
  },
  '/'
>
export default routes
