type Email = string
type AccountDetails = {
  id: {}
  legacy_id: string | ({ [x: string]: unknown } | null)
  legal_name: string | ({ [x: string]: unknown } | null)
  display_name: string | ({ [x: string]: unknown } | null)
  website: string | ({ [x: string]: unknown } | null)
  email: Email | ({ [x: string]: unknown } | null)
}
type Meta = { request_id: string }
type ErrorItem = { field: string; message: string }
type ErrorResponse = {
  error: {
    type: {}
    code: string
    detail: string
    documentation_url: string
    errors?: ErrorItem[] | undefined
  }
  meta: Meta
}
type AccountDetailsUpdate = { email?: {} | undefined }
type CustomerId = string
type StatusQuery = 'active' | 'archived'
type AddressDescription = string
type AddressFirstLine = string
type AddressSecondLine = string
type AddressCity = string
type AddressPostalCode = string
type AddressRegion = string
type CustomData = { [x: string]: unknown }
type ExternalId = string
type ImportMeta = {
  external_id?: ExternalId | ({ [x: string]: unknown } | null) | undefined
  imported_from: string
}
type Address = {
  id: {}
  customer_id: {}
  description: AddressDescription | ({ [x: string]: unknown } | null)
  first_line: AddressFirstLine | ({ [x: string]: unknown } | null)
  second_line: AddressSecondLine | ({ [x: string]: unknown } | null)
  city: AddressCity | ({ [x: string]: unknown } | null)
  postal_code: AddressPostalCode | ({ [x: string]: unknown } | null)
  region: AddressRegion | ({ [x: string]: unknown } | null)
  country_code: {}
  custom_data: CustomData | ({ [x: string]: unknown } | null)
  status: {}
  created_at: {}
  updated_at: {}
  import_meta: ImportMeta | ({ [x: string]: unknown } | null)
}
type Pagination = {
  per_page: number
  next: string
  has_more: boolean
  estimated_total?: number | undefined
}
type PaginatedMeta = { request_id: string; pagination: Pagination }
type AddressCreate = {
  id?: {} | undefined
  description?: string | ({ [x: string]: unknown } | null) | undefined
  first_line?: string | ({ [x: string]: unknown } | null) | undefined
  second_line?: string | ({ [x: string]: unknown } | null) | undefined
  city?: string | ({ [x: string]: unknown } | null) | undefined
  postal_code?: string | ({ [x: string]: unknown } | null) | undefined
  region?: string | ({ [x: string]: unknown } | null) | undefined
  country_code: {}
  custom_data?: CustomData | ({ [x: string]: unknown } | null) | undefined
  import_meta?: ImportMeta | ({ [x: string]: unknown } | null) | undefined
}
type Status = 'active' | 'archived'
type AddressUpdate = {
  description?: string | ({ [x: string]: unknown } | null) | undefined
  first_line?: string | ({ [x: string]: unknown } | null) | undefined
  second_line?: string | ({ [x: string]: unknown } | null) | undefined
  city?: string | ({ [x: string]: unknown } | null) | undefined
  postal_code?: string | ({ [x: string]: unknown } | null) | undefined
  region?: string | ({ [x: string]: unknown } | null) | undefined
  country_code?: {} | undefined
  custom_data?: CustomData | ({ [x: string]: unknown } | null) | undefined
  status?: Status | undefined
}
type AdjustmentActionQuery =
  | 'credit'
  | 'refund'
  | 'chargeback'
  | 'chargeback_reverse'
  | 'chargeback_warning'
  | 'chargeback_warning_reverse'
  | 'credit_reverse'
type AdjustmentStatusQuery = 'pending_approval' | 'approved' | 'rejected' | 'reversed'
type AdjustmentAction =
  | 'credit'
  | 'refund'
  | 'chargeback'
  | 'chargeback_reverse'
  | 'chargeback_warning'
  | 'chargeback_warning_reverse'
  | 'credit_reverse'
type SubscriptionId = string
type TransactionItemProration = { rate: string; billing_period: { starts_at: {}; ends_at: {} } }
type AdjustmentPayoutTotalsChargebackFeeOriginal = { amount: string; currency_code: {} }
type AdjustmentPayoutTotals = {
  subtotal: string
  tax: string
  total: string
  fee: string
  retained_fee: string
  chargeback_fee?:
    | {
        amount: string
        original: AdjustmentPayoutTotalsChargebackFeeOriginal | ({ [x: string]: unknown } | null)
      }
    | undefined
  earnings: string
  currency_code: {}
}
type AdjustmentTaxRatesUsed = {
  tax_rate: string
  totals: { subtotal: string; tax: string; total: string }
}
type Adjustment = {
  id: {}
  action: AdjustmentAction
  type: {}
  transaction_id: {}
  subscription_id: SubscriptionId | ({ [x: string]: unknown } | null)
  customer_id: {}
  reason: string
  credit_applied_to_balance?: boolean | ({ [x: string]: unknown } | null) | undefined
  currency_code: {}
  status: {}
  items: {
    id: {}
    item_id: {}
    type: {}
    amount: string | ({ [x: string]: unknown } | null)
    proration: TransactionItemProration | ({ [x: string]: unknown } | null)
    totals: { subtotal: string; tax: string; total: string }
  }[]
  totals: {
    subtotal: string
    tax: string
    total: string
    fee: string
    retained_fee?: string | undefined
    earnings: string
    currency_code: {}
  }
  payout_totals: AdjustmentPayoutTotals | ({ [x: string]: unknown } | null)
  tax_rates_used: AdjustmentTaxRatesUsed[]
  created_at: {}
  updated_at: {}
}
type AdjustmentItemCreate = {
  item_id: {}
  type: {}
  amount?: string | ({ [x: string]: unknown } | null) | undefined
}
type AdjustmentCreate = {
  action: AdjustmentAction
  type?: {} | undefined
  tax_mode?: {} | undefined
  transaction_id: {}
  reason: string
  items?: AdjustmentItemCreate[] | ({ [x: string]: unknown } | null) | undefined
}
type Disposition = 'attachment' | 'inline'
type AdjustmentCreditNotePdf = { url: string }
type BalanceCurrencyCode = 'AUD' | 'CAD' | 'EUR' | 'GBP' | 'USD'
type BalanceCurrency = { primary: {}; preferred: {}; enabled: BalanceCurrencyCode[] }
type BalanceCurrencyUpdate = { preferred?: {} | undefined }
type BusinessContactsItem = { name: {}; email: {} }
type Business = {
  id: {}
  customer_id: {}
  name: {}
  company_number: string | ({ [x: string]: unknown } | null)
  tax_identifier: string | ({ [x: string]: unknown } | null)
  status: {}
  contacts: BusinessContactsItem[]
  created_at: {}
  updated_at: {}
  custom_data: CustomData | ({ [x: string]: unknown } | null)
  import_meta: ImportMeta | ({ [x: string]: unknown } | null)
}
type ContactsCreate = { name?: {} | undefined; email: {} }
type BusinessCreate = {
  id?: {} | undefined
  name: {}
  company_number?: string | ({ [x: string]: unknown } | null) | undefined
  tax_identifier?: string | ({ [x: string]: unknown } | null) | undefined
  contacts?: ContactsCreate[] | ({ [x: string]: unknown } | null) | undefined
  custom_data?: CustomData | ({ [x: string]: unknown } | null) | undefined
  import_meta?: ImportMeta | ({ [x: string]: unknown } | null) | undefined
}
type BusinessUpdate = {
  name?: {} | undefined
  company_number?: string | ({ [x: string]: unknown } | null) | undefined
  tax_identifier?: string | ({ [x: string]: unknown } | null) | undefined
  status?: Status | undefined
  contacts?: ContactsCreate[] | ({ [x: string]: unknown } | null) | undefined
  custom_data?: CustomData | ({ [x: string]: unknown } | null) | undefined
}
type CheckoutDomainApprovalStatusQuery =
  | 'pending_review'
  | 'approved'
  | 'rejected'
  | 'in_review'
  | 'action_required'
type CheckoutDomainHost = string
type CheckoutDomainPaymentMethodVerificationStatus = 'verified' | 'unverified'
type CheckoutDomainApplePayVerification = { status: CheckoutDomainPaymentMethodVerificationStatus }
type CheckoutDomain = {
  id: {}
  domain: CheckoutDomainHost
  status: {}
  payment_method_verification: { apple_pay: CheckoutDomainApplePayVerification }
  created_at: {}
  updated_at: {}
}
type CheckoutDomainPaymentMethod = 'apple_pay'
type CheckoutDomainVerifyPaymentMethod = { payment_method: CheckoutDomainPaymentMethod }
type CheckoutFeatures = {
  discounts_enabled: boolean
  audience_opt_in: {}
  saved_payment_methods_enabled: boolean
}
type CheckoutFeaturesUpdate = {
  discounts_enabled?: boolean | undefined
  audience_opt_in?: {} | undefined
  saved_payment_methods_enabled?: boolean | undefined
}
type CheckoutPaymentMethodSettings = {
  payment_methods: {
    alipay: { enabled: boolean; available: boolean }
    apple_pay: { enabled: boolean; available: boolean }
    bancontact: { enabled: boolean; available: boolean }
    blik: { enabled: boolean; available: boolean }
    card: { enabled: boolean; available: boolean }
    google_pay: { enabled: boolean; available: boolean }
    ideal: { enabled: boolean; available: boolean }
    kakao_pay: { enabled: boolean; available: boolean }
    mb_way: { enabled: boolean; available: boolean }
    naver_pay: { enabled: boolean; available: boolean }
    payco: { enabled: boolean; available: boolean }
    paypal: { enabled: boolean; available: boolean }
    pix: { enabled: boolean; available: boolean }
    samsung_pay: { enabled: boolean; available: boolean }
    south_korea_local_card: { enabled: boolean; available: boolean }
    upi: { enabled: boolean; available: boolean }
    wechat_pay: { enabled: boolean; available: boolean }
  }
}
type CheckoutPaymentMethodSettingsUpdate = {
  payment_methods: {
    alipay?: { enabled: boolean } | undefined
    apple_pay?: { enabled: boolean } | undefined
    bancontact?: { enabled: boolean } | undefined
    blik?: { enabled: boolean } | undefined
    card?: { enabled: boolean } | undefined
    google_pay?: { enabled: boolean } | undefined
    ideal?: { enabled: boolean } | undefined
    kakao_pay?: { enabled: boolean } | undefined
    mb_way?: { enabled: boolean } | undefined
    naver_pay?: { enabled: boolean } | undefined
    payco?: { enabled: boolean } | undefined
    paypal?: { enabled: boolean } | undefined
    pix?: { enabled: boolean } | undefined
    samsung_pay?: { enabled: boolean } | undefined
    south_korea_local_card?: { enabled: boolean } | undefined
    upi?: { enabled: boolean } | undefined
    wechat_pay?: { enabled: boolean } | undefined
  }
}
type CheckoutRecoveryDiscount = { type: {}; amount: string }
type CheckoutRecovery = {
  enabled: boolean
  discount: CheckoutRecoveryDiscount | ({ [x: string]: unknown } | null)
}
type CheckoutRecoveryDiscountUpdate = { type: {}; amount: string }
type CheckoutRecoveryUpdate = {
  enabled?: boolean | undefined
  discount?: CheckoutRecoveryDiscountUpdate | ({ [x: string]: unknown } | null) | undefined
}
type CheckoutStylesOverlay = { primary_checkout_color: string | ({ [x: string]: unknown } | null) }
type CheckoutStylesOverlayUpdate = {
  primary_checkout_color?: string | ({ [x: string]: unknown } | null) | undefined
}
type CheckoutUrl = { default_url: string | ({ [x: string]: unknown } | null) }
type CheckoutUrlUpdate = { default_url?: string | ({ [x: string]: unknown } | null) | undefined }
type ClientTokensStatusQuery = 'active' | 'revoked'
type ClientTokenName = string
type ClientTokenDescription = string
type Timestamp = string
type ClientToken = {
  id: {}
  token: {}
  name: ClientTokenName
  description: ClientTokenDescription | ({ [x: string]: unknown } | null)
  status: {}
  revoked_at: Timestamp | ({ [x: string]: unknown } | null)
  created_at: {}
  updated_at: {}
}
type ClientTokenCreate = {
  name: ClientTokenName
  description?: ClientTokenDescription | ({ [x: string]: unknown } | null) | undefined
}
type ClientTokenUpdate = { status: {} }
type CountryDefinition = {
  iso: {}
  iso3: {}
  name: string
  printable_name: string
  uses_postal_code: boolean
  transaction_currency: {}
  payout_currency: {}
  allow_sales: boolean
  has_regions: boolean
  tax_mode: {}
}
type CountryCodeSupported =
  | 'AD'
  | 'AE'
  | 'AG'
  | 'AI'
  | 'AL'
  | 'AM'
  | 'AO'
  | 'AR'
  | 'AS'
  | 'AT'
  | 'AU'
  | 'AW'
  | 'AX'
  | 'AZ'
  | 'BA'
  | 'BB'
  | 'BD'
  | 'BE'
  | 'BF'
  | 'BG'
  | 'BH'
  | 'BI'
  | 'BJ'
  | 'BL'
  | 'BM'
  | 'BN'
  | 'BO'
  | 'BQ'
  | 'BR'
  | 'BS'
  | 'BT'
  | 'BV'
  | 'BW'
  | 'BZ'
  | 'CA'
  | 'CC'
  | 'CG'
  | 'CH'
  | 'CI'
  | 'CK'
  | 'CL'
  | 'CM'
  | 'CN'
  | 'CO'
  | 'CR'
  | 'CV'
  | 'CW'
  | 'CX'
  | 'CY'
  | 'CZ'
  | 'DE'
  | 'DJ'
  | 'DK'
  | 'DM'
  | 'DO'
  | 'DZ'
  | 'EC'
  | 'EE'
  | 'EG'
  | 'EH'
  | 'ER'
  | 'ES'
  | 'ET'
  | 'FI'
  | 'FJ'
  | 'FK'
  | 'FM'
  | 'FO'
  | 'FR'
  | 'GA'
  | 'GB'
  | 'GD'
  | 'GE'
  | 'GF'
  | 'GG'
  | 'GH'
  | 'GI'
  | 'GL'
  | 'GM'
  | 'GN'
  | 'GP'
  | 'GQ'
  | 'GR'
  | 'GS'
  | 'GT'
  | 'GU'
  | 'GW'
  | 'GY'
  | 'HK'
  | 'HM'
  | 'HN'
  | 'HR'
  | 'HU'
  | 'ID'
  | 'IE'
  | 'IL'
  | 'IM'
  | 'IN'
  | 'IO'
  | 'IQ'
  | 'IS'
  | 'IT'
  | 'JE'
  | 'JM'
  | 'JO'
  | 'JP'
  | 'KE'
  | 'KG'
  | 'KH'
  | 'KI'
  | 'KM'
  | 'KN'
  | 'KR'
  | 'KW'
  | 'KY'
  | 'KZ'
  | 'LA'
  | 'LB'
  | 'LC'
  | 'LI'
  | 'LK'
  | 'LR'
  | 'LS'
  | 'LT'
  | 'LU'
  | 'LV'
  | 'MA'
  | 'MC'
  | 'MD'
  | 'ME'
  | 'MF'
  | 'MG'
  | 'MH'
  | 'MK'
  | 'MN'
  | 'MO'
  | 'MP'
  | 'MQ'
  | 'MR'
  | 'MS'
  | 'MT'
  | 'MU'
  | 'MV'
  | 'MW'
  | 'MX'
  | 'MY'
  | 'MZ'
  | 'NA'
  | 'NC'
  | 'NE'
  | 'NF'
  | 'NG'
  | 'NL'
  | 'NO'
  | 'NP'
  | 'NR'
  | 'NU'
  | 'NZ'
  | 'OM'
  | 'PA'
  | 'PE'
  | 'PF'
  | 'PG'
  | 'PH'
  | 'PK'
  | 'PL'
  | 'PM'
  | 'PN'
  | 'PR'
  | 'PS'
  | 'PT'
  | 'PW'
  | 'PY'
  | 'QA'
  | 'RE'
  | 'RO'
  | 'RS'
  | 'RW'
  | 'SA'
  | 'SB'
  | 'SC'
  | 'SE'
  | 'SG'
  | 'SH'
  | 'SI'
  | 'SJ'
  | 'SK'
  | 'SL'
  | 'SM'
  | 'SN'
  | 'SR'
  | 'ST'
  | 'SV'
  | 'SX'
  | 'SZ'
  | 'TC'
  | 'TD'
  | 'TF'
  | 'TG'
  | 'TH'
  | 'TJ'
  | 'TK'
  | 'TL'
  | 'TM'
  | 'TN'
  | 'TO'
  | 'TR'
  | 'TT'
  | 'TV'
  | 'TW'
  | 'TZ'
  | 'UA'
  | 'UG'
  | 'UM'
  | 'US'
  | 'UY'
  | 'UZ'
  | 'VA'
  | 'VC'
  | 'VG'
  | 'VI'
  | 'VN'
  | 'VU'
  | 'WF'
  | 'WS'
  | 'XK'
  | 'YT'
  | 'ZA'
  | 'ZM'
type CurrencyDefinition = {
  code: {}
  name: string
  decimal_places: number
  can_be_balance: boolean
  applicable_countries: CountryCodeSupported[]
  minimum_payment_amount: string
}
type CurrencyConversion = { enabled: boolean }
type CurrencyConversions = { [x: string]: CurrencyConversion }
type CurrencyConversionUpdate = { enabled: boolean }
type CurrencyConversionsUpdate = { [x: string]: CurrencyConversionUpdate }
type Name = string
type Customer = {
  id: {}
  name: Name | ({ [x: string]: unknown } | null)
  email: {}
  marketing_consent: boolean
  status: {}
  custom_data: CustomData | ({ [x: string]: unknown } | null)
  locale: string
  created_at: {}
  updated_at: {}
  import_meta: ImportMeta | ({ [x: string]: unknown } | null)
}
type CustomerCreate = {
  id?: {} | undefined
  name?: Name | ({ [x: string]: unknown } | null) | undefined
  email: {}
  marketing_consent?: boolean | undefined
  custom_data?: CustomData | ({ [x: string]: unknown } | null) | undefined
  locale?: string | undefined
  import_meta?: ImportMeta | ({ [x: string]: unknown } | null) | undefined
}
type CustomerIncludes = {
  id: {}
  name: Name | ({ [x: string]: unknown } | null)
  email: {}
  marketing_consent: boolean
  status: {}
  custom_data: CustomData | ({ [x: string]: unknown } | null)
  locale: string
  created_at: {}
  updated_at: {}
  import_meta: ImportMeta | ({ [x: string]: unknown } | null)
}
type CustomerUpdate = {
  name?: Name | ({ [x: string]: unknown } | null) | undefined
  email?: {} | undefined
  marketing_consent?: boolean | undefined
  status?: Status | undefined
  custom_data?: CustomData | ({ [x: string]: unknown } | null) | undefined
  locale?: string | undefined
  import_meta?: ImportMeta | ({ [x: string]: unknown } | null) | undefined
}
type CreditBalance = {
  customer_id: {}
  currency_code: {}
  balance: { available: string; reserved: string; used: string }
}
type CustomerAuthToken = string
type CustomerAuthenticationToken = { customer_auth_token: CustomerAuthToken; expires_at: {} }
type CustomerPortalSessionCreate = { subscription_ids?: SubscriptionId[] | undefined }
type CustomerPortalSessionUrlsSubscriptionsItem = {
  id: {}
  cancel_subscription: string
  update_subscription_payment_method: string
  view_subscription: string
}
type CustomerPortalSession = {
  id: {}
  customer_id: {}
  urls: {
    general: { overview: string }
    subscriptions?: CustomerPortalSessionUrlsSubscriptionsItem[] | undefined
  }
  created_at: {}
}
type DiscountGroup = {
  id: {}
  name: string
  status: Status
  created_at: {}
  updated_at: {}
  import_meta: ImportMeta | ({ [x: string]: unknown } | null)
}
type DiscountGroupCreate = { name: string }
type DiscountGroupUpdate = { status?: Status | undefined; name?: string | undefined }
type DiscountIncludeEnum = 'discount_group'
type DiscountStatusQueryEnum = 'active' | 'archived'
type DiscountModeQueryEnum = 'standard' | 'custom'
type DiscountCode = string
type DiscountType = 'flat' | 'flat_per_seat' | 'percentage'
type CurrencyCode =
  | 'USD'
  | 'EUR'
  | 'GBP'
  | 'JPY'
  | 'AUD'
  | 'CAD'
  | 'CHF'
  | 'HKD'
  | 'SGD'
  | 'SEK'
  | 'ARS'
  | 'BRL'
  | 'CLP'
  | 'CNY'
  | 'COP'
  | 'CZK'
  | 'DKK'
  | 'HUF'
  | 'ILS'
  | 'INR'
  | 'KRW'
  | 'MXN'
  | 'NOK'
  | 'NZD'
  | 'PEN'
  | 'PLN'
  | 'RUB'
  | 'THB'
  | 'TRY'
  | 'TWD'
  | 'UAH'
  | 'VND'
  | 'ZAR'
type DiscountRestrictTo = string
type DiscountGroupId = string
type DiscountIncludes = {
  id: {}
  status: {}
  description: string
  enabled_for_checkout: boolean
  code: DiscountCode | ({ [x: string]: unknown } | null)
  type: DiscountType
  mode: {}
  amount: string
  currency_code: CurrencyCode | ({ [x: string]: unknown } | null)
  recur: boolean
  maximum_recurring_intervals: number | ({ [x: string]: unknown } | null)
  usage_limit: number | ({ [x: string]: unknown } | null)
  restrict_to: DiscountRestrictTo[] | ({ [x: string]: unknown } | null)
  expires_at: Timestamp | ({ [x: string]: unknown } | null)
  custom_data: CustomData | ({ [x: string]: unknown } | null)
  times_used: number
  discount_group_id: DiscountGroupId | ({ [x: string]: unknown } | null)
  created_at: {}
  updated_at: {}
  import_meta: ImportMeta | ({ [x: string]: unknown } | null)
  discount_group?:
    | {
        id: {}
        name: string
        status: Status
        created_at: {}
        updated_at: {}
        import_meta: ImportMeta | ({ [x: string]: unknown } | null)
      }
    | undefined
}
type DiscountCreate = {
  id?: {} | undefined
  status?: {} | undefined
  description: string
  enabled_for_checkout?: boolean | undefined
  code?: DiscountCode | ({ [x: string]: unknown } | null) | undefined
  type: {}
  mode?: {} | undefined
  amount: string
  currency_code?: CurrencyCode | ({ [x: string]: unknown } | null) | undefined
  recur?: boolean | undefined
  maximum_recurring_intervals?: number | ({ [x: string]: unknown } | null) | undefined
  usage_limit?: number | ({ [x: string]: unknown } | null) | undefined
  restrict_to?: DiscountRestrictTo[] | ({ [x: string]: unknown } | null) | undefined
  expires_at?: Timestamp | ({ [x: string]: unknown } | null) | undefined
  custom_data?: CustomData | ({ [x: string]: unknown } | null) | undefined
  times_used?: number | undefined
  created_at?: {} | undefined
  updated_at?: {} | undefined
  discount_group_id?: DiscountGroupId | ({ [x: string]: unknown } | null) | undefined
  import_meta?: ImportMeta | ({ [x: string]: unknown } | null) | undefined
}
type Discount = {
  id: {}
  status: {}
  description: string
  enabled_for_checkout: boolean
  code: DiscountCode | ({ [x: string]: unknown } | null)
  type: DiscountType
  mode: {}
  amount: string
  currency_code: CurrencyCode | ({ [x: string]: unknown } | null)
  recur: boolean
  maximum_recurring_intervals: number | ({ [x: string]: unknown } | null)
  usage_limit: number | ({ [x: string]: unknown } | null)
  restrict_to: DiscountRestrictTo[] | ({ [x: string]: unknown } | null)
  expires_at: Timestamp | ({ [x: string]: unknown } | null)
  custom_data: CustomData | ({ [x: string]: unknown } | null)
  times_used: number
  discount_group_id: DiscountGroupId | ({ [x: string]: unknown } | null)
  created_at: {}
  updated_at: {}
  import_meta: ImportMeta | ({ [x: string]: unknown } | null)
}
type DiscountStatus = 'active' | 'archived'
type DiscountUpdate = {
  id?: {} | undefined
  status?: DiscountStatus | undefined
  description?: string | undefined
  enabled_for_checkout?: boolean | undefined
  code?: DiscountCode | ({ [x: string]: unknown } | null) | undefined
  type?: {} | undefined
  mode?: {} | undefined
  amount?: string | undefined
  currency_code?: CurrencyCode | ({ [x: string]: unknown } | null) | undefined
  recur?: boolean | undefined
  maximum_recurring_intervals?: number | ({ [x: string]: unknown } | null) | undefined
  usage_limit?: number | ({ [x: string]: unknown } | null) | undefined
  restrict_to?: DiscountRestrictTo[] | ({ [x: string]: unknown } | null) | undefined
  expires_at?: Timestamp | ({ [x: string]: unknown } | null) | undefined
  custom_data?: CustomData | ({ [x: string]: unknown } | null) | undefined
  times_used?: number | undefined
  created_at?: {} | undefined
  updated_at?: {} | undefined
  discount_group_id?: DiscountGroupId | ({ [x: string]: unknown } | null) | undefined
  import_meta?: ImportMeta | ({ [x: string]: unknown } | null) | undefined
}
type EventType = { name: {}; description: string; group: string; available_versions: number[] }
type EventTypeName =
  | 'address.created'
  | 'address.imported'
  | 'address.updated'
  | 'adjustment.created'
  | 'adjustment.updated'
  | 'api_key.created'
  | 'api_key.expired'
  | 'api_key.expiring'
  | 'api_key.revoked'
  | 'api_key.updated'
  | 'api_key_exposure.created'
  | 'business.created'
  | 'business.imported'
  | 'business.updated'
  | 'client_token.created'
  | 'client_token.revoked'
  | 'client_token.updated'
  | 'customer.created'
  | 'customer.imported'
  | 'customer.updated'
  | 'discount.created'
  | 'discount.imported'
  | 'discount.updated'
  | 'discount_group.created'
  | 'discount_group.updated'
  | 'payment_method.saved'
  | 'payment_method.deleted'
  | 'payout.created'
  | 'payout.paid'
  | 'price.created'
  | 'price.imported'
  | 'price.updated'
  | 'product.created'
  | 'product.imported'
  | 'product.updated'
  | 'report.created'
  | 'report.updated'
  | 'subscription.activated'
  | 'subscription.canceled'
  | 'subscription.created'
  | 'subscription.imported'
  | 'subscription.past_due'
  | 'subscription.paused'
  | 'subscription.resumed'
  | 'subscription.trialing'
  | 'subscription.updated'
  | 'transaction.billed'
  | 'transaction.canceled'
  | 'transaction.completed'
  | 'transaction.created'
  | 'transaction.paid'
  | 'transaction.past_due'
  | 'transaction.payment_failed'
  | 'transaction.ready'
  | 'transaction.revised'
  | 'transaction.updated'
type Event = { event_id: {}; event_type: {}; occurred_at: {}; data: {} }
type IpAddressResponseData = { ipv4_cidrs: string[] }
type IpAddressResponse = { data: IpAddressResponseData; meta: Meta }
type MetricEntity =
  | 'transactions.completed'
  | 'adjustments.refunds'
  | 'adjustments.chargebacks'
  | 'checkouts'
  | 'subscriptions'
type MetricsBucketInterval = 'day' | 'week' | 'month'
type MetricsFilterOperator = 'in'
type MetricEntityDimension = {
  name: string
  type: {}
  filter_ops: MetricsFilterOperator[]
  multi_valued?: boolean | undefined
}
type MetricsAggregation = 'count' | 'count_distinct' | 'sum'
type MetricEntityMeasure = {
  name: string
  type: {}
  aggs: MetricsAggregation[] | ({ [x: string]: unknown } | null)
}
type MetricEntityDefinition = {
  entity: {}
  time_dimension: { intervals: MetricsBucketInterval[]; max_lookback_days: number }
  dimensions: MetricEntityDimension[]
  measures: MetricEntityMeasure[]
}
type MetricsExploreCursor = string
type MetricsExploreMeasure = {
  field: string
  agg?: MetricsAggregation | ({ [x: string]: unknown } | null) | undefined
}
type MetricsExploreFilter = { field: string; op: {}; value: string[] }
type MetricsExploreOrderBy = { field: string; dir: {} }
type MetricsExploreRequest = {
  entity: {}
  from: string
  to: string
  measures: MetricsExploreMeasure[]
  interval?: {} | undefined
  dimensions?: string[] | undefined
  filters?: MetricsExploreFilter[] | undefined
  order_by?: MetricsExploreOrderBy[] | undefined
  per_page?: number | undefined
}
type MetricsExploreFieldDimension = { name: string; type: {} }
type MetricsExploreFieldMeasure = {
  name: string
  type: {}
  field?: string | undefined
  agg?: {} | undefined
}
type MetricsExploreDataPoint = { timestamp: string; measures: { [x: string]: unknown } }
type MetricsExploreSeries = {
  dimensions: { [x: string]: unknown }
  timeseries: MetricsExploreDataPoint[]
}
type MetricsExploreData = {
  entity: {}
  interval: {}
  currency_code?: {} | undefined
  starts_at: {}
  ends_at: {}
  updated_at: {}
  fields: { dimensions: MetricsExploreFieldDimension[]; measures: MetricsExploreFieldMeasure[] }
  series: MetricsExploreSeries[]
}
type MetricsExplorePagination = {
  per_page: number
  next: string
  has_more: boolean
  estimated_total: number
}
type MetricsExplorePaginatedMeta = { request_id: string; pagination: MetricsExplorePagination }
type MetricsExploreResponse = { data: MetricsExploreData; meta: MetricsExplorePaginatedMeta }
type MetricsTimeseriesMonthlyRecurringRevenueDatapoint = { timestamp: {}; amount: string }
type MetricsTimeseriesMonthlyRecurringRevenue = {
  currency_code: {}
  timeseries: MetricsTimeseriesMonthlyRecurringRevenueDatapoint[]
  starts_at: {}
  ends_at: {}
  interval: {}
  updated_at: {}
}
type MetricsTimeseriesActiveSubscribersDatapoint = { timestamp: {}; count: number }
type MetricsTimeseriesActiveSubscribers = {
  timeseries: MetricsTimeseriesActiveSubscribersDatapoint[]
  starts_at: {}
  ends_at: {}
  interval: {}
  updated_at: {}
}
type MetricsTimeseriesMonthlyRecurringRevenueChange = {
  currency_code: {}
  timeseries: MetricsTimeseriesMonthlyRecurringRevenueDatapoint[]
  starts_at: {}
  ends_at: {}
  interval: {}
  updated_at: {}
}
type MetricsTimeseriesRevenueDatapoint = { timestamp: {}; amount: string; count: number }
type MetricsTimeseriesRevenue = {
  currency_code: {}
  timeseries: MetricsTimeseriesRevenueDatapoint[]
  starts_at: {}
  ends_at: {}
  interval: {}
  updated_at: {}
}
type MetricsTimeseriesRefundsDatapoint = { timestamp: {}; amount: string }
type MetricsTimeseriesRefunds = {
  currency_code: {}
  timeseries: MetricsTimeseriesRefundsDatapoint[]
  starts_at: {}
  ends_at: {}
  interval: {}
  updated_at: {}
}
type MetricsTimeseriesChargebacksDatapoint = { timestamp: {}; count: number }
type MetricsTimeseriesChargebacks = {
  timeseries: MetricsTimeseriesChargebacksDatapoint[]
  starts_at: {}
  ends_at: {}
  interval: {}
  updated_at: {}
}
type MetricsTimeseriesCheckoutConversionDatapoint = {
  timestamp: {}
  count: number
  completed_count: number
  rate: string
}
type MetricsTimeseriesCheckoutConversion = {
  timeseries: MetricsTimeseriesCheckoutConversionDatapoint[]
  starts_at: {}
  ends_at: {}
  interval: {}
  updated_at: {}
}
type NotificationSettingTrafficSource = 'platform' | 'simulation' | 'all'
type NotificationSetting = {
  id: {}
  description: string
  type: {}
  destination: string
  active: boolean
  api_version: number
  include_sensitive_fields: boolean
  subscribed_events: EventType[]
  endpoint_secret_key: string
  traffic_source: {}
}
type NotificationSettingCreate = {
  id?: {} | undefined
  description: string
  type: {}
  destination: string
  active?: boolean | undefined
  api_version?: number | undefined
  include_sensitive_fields?: boolean | undefined
  subscribed_events: EventTypeName[]
  endpoint_secret_key?: string | undefined
  traffic_source?: {} | undefined
}
type NotificationSettingUpdate = {
  description?: string | undefined
  destination?: string | undefined
  active?: boolean | undefined
  api_version?: number | undefined
  include_sensitive_fields?: boolean | undefined
  subscribed_events?: EventTypeName[] | undefined
  traffic_source?: {} | undefined
}
type NotificationStatusQueryEnum = 'delivered' | 'failed' | 'needs_retry' | 'not_attempted'
type NotificationId = string
type Notification = {
  id: {}
  type: {}
  status: {}
  payload: {
    event_id: {}
    event_type: {}
    occurred_at: {}
    data: {}
    notification_id?: NotificationId | undefined
  }
  occurred_at: {}
  delivered_at: Timestamp | ({ [x: string]: unknown } | null)
  replayed_at: Timestamp | ({ [x: string]: unknown } | null)
  origin: {}
  last_attempt_at: Timestamp | ({ [x: string]: unknown } | null)
  retry_at: Timestamp | ({ [x: string]: unknown } | null)
  times_attempted: number
  notification_setting_id: {}
}
type NotificationLog = {
  id: {}
  response_code: number
  response_content_type: string | ({ [x: string]: unknown } | null)
  response_body: string
  attempted_at: {}
}
type NotificationReplay = { notification_id: NotificationId }
type CardType =
  | 'american_express'
  | 'diners_club'
  | 'discover'
  | 'jcb'
  | 'mada'
  | 'maestro'
  | 'mastercard'
  | 'union_pay'
  | 'unknown'
  | 'visa'
type CardLast4 = string
type CardExpiryMonth = number
type CardExpiryYear = number
type CardCardholderName = string
type Card = {
  type: CardType
  last4: CardLast4
  expiry_month: CardExpiryMonth
  expiry_year: CardExpiryYear
  cardholder_name: CardCardholderName
}
type Paypal = { email: string; reference: string }
type KoreaLocalUnderlyingDetails = { type: {} }
type UnderlyingDetails = {
  korea_local: KoreaLocalUnderlyingDetails | ({ [x: string]: unknown } | null)
}
type SouthKoreaLocalCardType =
  | 'bc'
  | 'citi'
  | 'hana'
  | 'hyundai'
  | 'jeju'
  | 'jeonbuk'
  | 'kakaobank'
  | 'kbank'
  | 'kdbbank'
  | 'kookmin'
  | 'kwangju'
  | 'lotte'
  | 'mg'
  | 'nh'
  | 'post'
  | 'samsung'
  | 'savingsbank'
  | 'shinhan'
  | 'shinhyup'
  | 'suhyup'
  | 'tossbank'
  | 'unknown'
  | 'woori'
type SouthKoreaLocalCard = {
  type?: SouthKoreaLocalCardType | undefined
  last4?: CardLast4 | undefined
}
type CustomerPaymentMethod = {
  id: {}
  customer_id: {}
  address_id: {}
  type: {}
  card: Card | ({ [x: string]: unknown } | null)
  paypal: Paypal | ({ [x: string]: unknown } | null)
  underlying_details?: UnderlyingDetails | ({ [x: string]: unknown } | null) | undefined
  south_korea_local_card: SouthKoreaLocalCard | ({ [x: string]: unknown } | null)
  origin: {}
  saved_at: {}
  updated_at: {}
}
type PriceListIncludeEnum = 'product'
type DurationInterval = 'day' | 'week' | 'month' | 'year'
type CatalogTypeQueryEnum = 'custom' | 'standard'
type PriceName = string
type Duration = { interval: {}; frequency: number }
type MoneyOptionalCurrency = { amount: string; currency_code?: CurrencyCode | undefined }
type CountryCodeNonSupported =
  | 'AF'
  | 'AQ'
  | 'AN'
  | 'BY'
  | 'CD'
  | 'CF'
  | 'CU'
  | 'CS'
  | 'HT'
  | 'IR'
  | 'KP'
  | 'LY'
  | 'ML'
  | 'MM'
  | 'NI'
  | 'RU'
  | 'SO'
  | 'SS'
  | 'SD'
  | 'SY'
  | 'VE'
  | 'YE'
  | 'ZW'
type CountryCode = CountryCodeSupported | CountryCodeNonSupported
type PriceTrialUnitPriceOverride = {
  country_codes: CountryCode[]
  unit_price: { amount: string; currency_code?: CurrencyCode | undefined }
}
type PriceTrialDuration = {
  interval: {}
  frequency: number
  requires_payment_method: {}
  unit_price?: MoneyOptionalCurrency | ({ [x: string]: unknown } | null) | undefined
  unit_price_overrides?: PriceTrialUnitPriceOverride[] | undefined
}
type UnitPriceOverride = {
  country_codes: CountryCode[]
  unit_price: { amount: string; currency_code: CurrencyCode }
}
type ProductName = string
type TaxCategory =
  | 'digital-goods'
  | 'ebooks'
  | 'implementation-services'
  | 'professional-services'
  | 'saas'
  | 'software-programming-services'
  | 'standard'
  | 'training-services'
  | 'website-hosting'
type ImageUrl = string
type EmptyString = string
type PriceIncludes = {
  id: {}
  product_id: {}
  description: string
  type: {}
  name: PriceName | ({ [x: string]: unknown } | null)
  billing_cycle: Duration | ({ [x: string]: unknown } | null)
  trial_period: PriceTrialDuration | ({ [x: string]: unknown } | null)
  tax_mode: {}
  unit_price: { amount: string; currency_code: CurrencyCode }
  unit_price_overrides: UnitPriceOverride[]
  quantity: { minimum: number; maximum: number }
  status: {}
  custom_data: CustomData | ({ [x: string]: unknown } | null)
  import_meta: ImportMeta | ({ [x: string]: unknown } | null)
  created_at: {}
  updated_at: {}
  product?:
    | {
        id: {}
        name: ProductName
        description: string | ({ [x: string]: unknown } | null)
        type: {}
        tax_category: TaxCategory
        image_url: ImageUrl | ({ [x: string]: unknown } | null) | EmptyString
        custom_data: CustomData | ({ [x: string]: unknown } | null)
        status: {}
        import_meta: ImportMeta | ({ [x: string]: unknown } | null)
        created_at: {}
        updated_at: {}
      }
    | undefined
}
type PriceTrialDurationCreate = {
  interval: {}
  frequency: number
  requires_payment_method?: {} | undefined
  unit_price?: MoneyOptionalCurrency | ({ [x: string]: unknown } | null) | undefined
  unit_price_overrides?: PriceTrialUnitPriceOverride[] | undefined
}
type PriceCreate = {
  id?: {} | undefined
  description: string
  type?: {} | undefined
  name?: PriceName | ({ [x: string]: unknown } | null) | undefined
  product_id: {}
  billing_cycle?: Duration | ({ [x: string]: unknown } | null) | undefined
  trial_period?: PriceTrialDurationCreate | ({ [x: string]: unknown } | null) | undefined
  tax_mode?: {} | undefined
  unit_price: { amount: string; currency_code: CurrencyCode }
  unit_price_overrides?: UnitPriceOverride[] | undefined
  quantity?: { minimum: number; maximum: number } | undefined
  custom_data?: CustomData | ({ [x: string]: unknown } | null) | undefined
  import_meta?: ImportMeta | ({ [x: string]: unknown } | null) | undefined
}
type Price = {
  id: {}
  product_id: {}
  description: string
  type: {}
  name: PriceName | ({ [x: string]: unknown } | null)
  billing_cycle: Duration | ({ [x: string]: unknown } | null)
  trial_period: PriceTrialDuration | ({ [x: string]: unknown } | null)
  tax_mode: {}
  unit_price: { amount: string; currency_code: CurrencyCode }
  unit_price_overrides: UnitPriceOverride[]
  quantity: { minimum: number; maximum: number }
  status: {}
  custom_data: CustomData | ({ [x: string]: unknown } | null)
  import_meta: ImportMeta | ({ [x: string]: unknown } | null)
  created_at: {}
  updated_at: {}
}
type PriceIncludeEnum = 'product'
type PriceWithProductCollectionIncludes = {
  id: {}
  product_id: {}
  description: string
  type: {}
  name: PriceName | ({ [x: string]: unknown } | null)
  billing_cycle: Duration | ({ [x: string]: unknown } | null)
  trial_period: PriceTrialDuration | ({ [x: string]: unknown } | null)
  tax_mode: {}
  unit_price: { amount: string; currency_code: CurrencyCode }
  unit_price_overrides: UnitPriceOverride[]
  quantity: { minimum: number; maximum: number }
  status: {}
  custom_data: CustomData | ({ [x: string]: unknown } | null)
  import_meta: ImportMeta | ({ [x: string]: unknown } | null)
  created_at: {}
  updated_at: {}
  product?:
    | {
        id: {}
        name: ProductName
        description: string | ({ [x: string]: unknown } | null)
        type: {}
        tax_category: TaxCategory
        image_url: ImageUrl | ({ [x: string]: unknown } | null) | EmptyString
        custom_data: CustomData | ({ [x: string]: unknown } | null)
        status: {}
        import_meta: ImportMeta | ({ [x: string]: unknown } | null)
        created_at: {}
        updated_at: {}
      }
    | undefined
}
type PriceTrialDurationUpdate = {
  interval?: {} | undefined
  frequency?: number | undefined
  requires_payment_method?: {} | undefined
  unit_price?: MoneyOptionalCurrency | ({ [x: string]: unknown } | null) | undefined
  unit_price_overrides?: PriceTrialUnitPriceOverride[] | undefined
}
type PriceUpdate = {
  description?: string | undefined
  type?: {} | undefined
  name?: PriceName | ({ [x: string]: unknown } | null) | undefined
  billing_cycle?: Duration | ({ [x: string]: unknown } | null) | undefined
  trial_period?: PriceTrialDurationUpdate | ({ [x: string]: unknown } | null) | undefined
  tax_mode?: {} | undefined
  unit_price?: { amount: string; currency_code: CurrencyCode } | undefined
  unit_price_overrides?: UnitPriceOverride[] | undefined
  quantity?: { minimum: number; maximum: number } | undefined
  status?: Status | undefined
  custom_data?: CustomData | ({ [x: string]: unknown } | null) | undefined
}
type AddressId = string
type BusinessId = string
type DiscountId = string
type AddressPreviewCreate = {
  postal_code?: string | ({ [x: string]: unknown } | null) | undefined
  country_code: {}
}
type TransactionPricingPreviewItem = { price_id?: {} | undefined; quantity: number }
type TransactionPricingPreviewRequest = {
  customer_id?: CustomerId | ({ [x: string]: unknown } | null) | undefined
  address_id?: AddressId | ({ [x: string]: unknown } | null) | undefined
  business_id?: BusinessId | ({ [x: string]: unknown } | null) | undefined
  currency_code?: CurrencyCode | ({ [x: string]: unknown } | null) | undefined
  discount_id?: DiscountId | ({ [x: string]: unknown } | null) | undefined
  address?: AddressPreviewCreate | ({ [x: string]: unknown } | null) | undefined
  customer_ip_address?: string | ({ [x: string]: unknown } | null) | undefined
  items: TransactionPricingPreviewItem[]
}
type AddressPreview = { postal_code: string | ({ [x: string]: unknown } | null); country_code: {} }
type Totals = { subtotal: string; discount: string; tax: string; total: string }
type TransactionPricingPreviewLineItemDiscount = {
  discount: {
    id: {}
    status: {}
    description: string
    enabled_for_checkout: boolean
    code: DiscountCode | ({ [x: string]: unknown } | null)
    type: DiscountType
    mode: {}
    amount: string
    currency_code: CurrencyCode | ({ [x: string]: unknown } | null)
    recur: boolean
    maximum_recurring_intervals: number | ({ [x: string]: unknown } | null)
    usage_limit: number | ({ [x: string]: unknown } | null)
    restrict_to: DiscountRestrictTo[] | ({ [x: string]: unknown } | null)
    expires_at: Timestamp | ({ [x: string]: unknown } | null)
    custom_data: CustomData | ({ [x: string]: unknown } | null)
    times_used: number
    discount_group_id: DiscountGroupId | ({ [x: string]: unknown } | null)
    created_at: {}
    updated_at: {}
    import_meta: ImportMeta | ({ [x: string]: unknown } | null)
  }
  total: string
  formatted_total: string
}
type TransactionPricingPreviewLineItem = {
  price: {
    id: {}
    product_id: {}
    description: string
    type: {}
    name: PriceName | ({ [x: string]: unknown } | null)
    billing_cycle: Duration | ({ [x: string]: unknown } | null)
    trial_period: PriceTrialDuration | ({ [x: string]: unknown } | null)
    tax_mode: {}
    unit_price: { amount: string; currency_code: CurrencyCode }
    unit_price_overrides: UnitPriceOverride[]
    quantity: { minimum: number; maximum: number }
    status: {}
    custom_data: CustomData | ({ [x: string]: unknown } | null)
    import_meta: ImportMeta | ({ [x: string]: unknown } | null)
    created_at: {}
    updated_at: {}
  }
  quantity: number
  tax_rate: string
  unit_totals: { subtotal: string; discount: string; tax: string; total: string }
  formatted_unit_totals: { subtotal: string; discount: string; tax: string; total: string }
  totals: Totals
  formatted_totals: { subtotal: string; discount: string; tax: string; total: string }
  product: {
    id: {}
    name: ProductName
    description: string | ({ [x: string]: unknown } | null)
    type: {}
    tax_category: TaxCategory
    image_url: ImageUrl | ({ [x: string]: unknown } | null) | EmptyString
    custom_data: CustomData | ({ [x: string]: unknown } | null)
    status: {}
    import_meta: ImportMeta | ({ [x: string]: unknown } | null)
    created_at: {}
    updated_at: {}
  }
  discounts: TransactionPricingPreviewLineItemDiscount[]
}
type PaymentMethodType =
  | 'alipay'
  | 'apple_pay'
  | 'bancontact'
  | 'blik'
  | 'card'
  | 'google_pay'
  | 'ideal'
  | 'kakao_pay'
  | 'korea_local'
  | 'naver_pay'
  | 'payco'
  | 'samsung_pay'
  | 'south_korea_local_card'
  | 'mb_way'
  | 'paypal'
  | 'pix'
  | 'upi'
  | 'wechat_pay'
type TransactionPricingPreviewResponse = {
  customer_id: CustomerId | ({ [x: string]: unknown } | null)
  address_id: AddressId | ({ [x: string]: unknown } | null)
  business_id: BusinessId | ({ [x: string]: unknown } | null)
  currency_code: CurrencyCode | ({ [x: string]: unknown } | null)
  discount_id: DiscountId | ({ [x: string]: unknown } | null)
  address: AddressPreview | ({ [x: string]: unknown } | null)
  customer_ip_address: string | ({ [x: string]: unknown } | null)
  details: { line_items: TransactionPricingPreviewLineItem[] }
  available_payment_methods: PaymentMethodType[]
}
type ProductIncludeEnum = 'prices'
type TaxCategoryQueryEnum =
  | 'digital-goods'
  | 'ebooks'
  | 'implementation-services'
  | 'professional-services'
  | 'saas'
  | 'software-programming-services'
  | 'standard'
  | 'training-services'
  | 'website-hosting'
type ProductIncludes = {
  id: {}
  name: ProductName
  description: string | ({ [x: string]: unknown } | null)
  type: {}
  tax_category: TaxCategory
  image_url: ImageUrl | ({ [x: string]: unknown } | null) | EmptyString
  custom_data: CustomData | ({ [x: string]: unknown } | null)
  status: {}
  import_meta: ImportMeta | ({ [x: string]: unknown } | null)
  created_at: {}
  updated_at: {}
  prices?: Price[] | undefined
}
type ProductCreate = {
  id?: {} | undefined
  name: string
  description?: string | ({ [x: string]: unknown } | null) | undefined
  type?: {} | undefined
  tax_category: TaxCategory
  image_url?: ImageUrl | ({ [x: string]: unknown } | null) | EmptyString | undefined
  custom_data?: CustomData | ({ [x: string]: unknown } | null) | undefined
  import_meta?: ImportMeta | ({ [x: string]: unknown } | null) | undefined
}
type Product = {
  id: {}
  name: ProductName
  description: string | ({ [x: string]: unknown } | null)
  type: {}
  tax_category: TaxCategory
  image_url: ImageUrl | ({ [x: string]: unknown } | null) | EmptyString
  custom_data: CustomData | ({ [x: string]: unknown } | null)
  status: {}
  import_meta: ImportMeta | ({ [x: string]: unknown } | null)
  created_at: {}
  updated_at: {}
}
type ProductUpdate = {
  name?: string | undefined
  description?: string | ({ [x: string]: unknown } | null) | undefined
  type?: {} | undefined
  tax_category?: TaxCategory | undefined
  image_url?: ImageUrl | ({ [x: string]: unknown } | null) | EmptyString | undefined
  custom_data?: CustomData | ({ [x: string]: unknown } | null) | undefined
  status?: Status | undefined
}
type ReportStatusQueryEnum = 'pending' | 'ready' | 'failed' | 'expired'
type Operator = 'lt' | 'gte'
type AdjustmentStatus = 'pending_approval' | 'approved' | 'rejected' | 'reversed'
type ReportFilterAdjustments = {
  name: {}
  operator: Operator | ({ [x: string]: unknown } | null)
  value: AdjustmentStatus[] | AdjustmentAction[] | Timestamp | string | string[] | string
}
type ReportAdjustmentsModel = {
  id: {}
  status: {}
  rows: number | ({ [x: string]: unknown } | null)
  expires_at: Timestamp | ({ [x: string]: unknown } | null)
  updated_at: {}
  created_at: {}
  type: {}
  filters: ReportFilterAdjustments[]
}
type ReportFilterTransactions = {
  name: {}
  operator: Operator | ({ [x: string]: unknown } | null)
  value: string[] | string
}
type ReportTransactionsModel = {
  id: {}
  status: {}
  rows: number | ({ [x: string]: unknown } | null)
  expires_at: Timestamp | ({ [x: string]: unknown } | null)
  updated_at: {}
  created_at: {}
  type: {}
  filters: ReportFilterTransactions[]
}
type ReportFilterProductsPrices = {
  name: {}
  operator: Operator | ({ [x: string]: unknown } | null)
  value: string[] | string
}
type ReportProductsPricesModel = {
  id: {}
  status: {}
  rows: number | ({ [x: string]: unknown } | null)
  expires_at: Timestamp | ({ [x: string]: unknown } | null)
  updated_at: {}
  created_at: {}
  type: {}
  filters: ReportFilterProductsPrices[]
}
type ReportFilterDiscounts = {
  name: {}
  operator: Operator | ({ [x: string]: unknown } | null)
  value: string[] | string
}
type ReportDiscountsModel = {
  id: {}
  status: {}
  rows: number | ({ [x: string]: unknown } | null)
  expires_at: Timestamp | ({ [x: string]: unknown } | null)
  updated_at: {}
  created_at: {}
  type: {}
  filters: ReportFilterDiscounts[]
}
type ReportFilterBalance = {
  name: {}
  operator: Operator | ({ [x: string]: unknown } | null)
  value: string[] | string
}
type ReportBalanceModel = {
  id: {}
  status: {}
  rows: number | ({ [x: string]: unknown } | null)
  expires_at: Timestamp | ({ [x: string]: unknown } | null)
  updated_at: {}
  created_at: {}
  type: {}
  filters: ReportFilterBalance[]
}
type BalanceMovementType =
  | 'rebate'
  | 'swift_fee'
  | 'sale'
  | 'refund'
  | 'chargeback_warning'
  | 'chargeback_warning_reverse'
  | 'chargeback'
  | 'chargeback_reverse'
  | 'credit'
type ReportFilterReconciliation = {
  name: {}
  operator: Operator | ({ [x: string]: unknown } | null)
  value: string[] | string | BalanceMovementType[]
}
type ReportPayoutReconciliationModel = {
  id: {}
  status: {}
  rows: number | ({ [x: string]: unknown } | null)
  expires_at: Timestamp | ({ [x: string]: unknown } | null)
  updated_at: {}
  created_at: {}
  type: {}
  filters: ReportFilterReconciliation[]
}
type ReportFilterCheckouts = {
  name: {}
  operator: Operator | ({ [x: string]: unknown } | null)
  value: string[] | string
}
type ReportCheckoutsModel = {
  id: {}
  status: {}
  rows: number | ({ [x: string]: unknown } | null)
  expires_at: Timestamp | ({ [x: string]: unknown } | null)
  updated_at: {}
  created_at: {}
  type: {}
  filters: ReportFilterCheckouts[]
}
type SubscriptionStatusFilter = 'active' | 'canceled' | 'past_due' | 'paused' | 'trialing'
type SubscriptionScheduledChangeActionFilter = 'cancel' | 'pause' | 'resume' | 'none'
type ReportFilterSubscriptions = {
  name: {}
  operator: Operator | ({ [x: string]: unknown } | null)
  value: string[] | string | SubscriptionStatusFilter[] | SubscriptionScheduledChangeActionFilter[]
}
type ReportSubscriptionsModel = {
  id: {}
  status: {}
  rows: number | ({ [x: string]: unknown } | null)
  expires_at: Timestamp | ({ [x: string]: unknown } | null)
  updated_at: {}
  created_at: {}
  type: {}
  filters: ReportFilterSubscriptions[]
}
type Report =
  | ReportAdjustmentsModel
  | ReportTransactionsModel
  | ReportProductsPricesModel
  | ReportDiscountsModel
  | ReportBalanceModel
  | ReportPayoutReconciliationModel
  | ReportCheckoutsModel
  | ReportSubscriptionsModel
type ReportFilterAdjustmentsCreate = {
  name?: {} | undefined
  operator?: Operator | ({ [x: string]: unknown } | null) | undefined
  value?:
    | AdjustmentStatus[]
    | AdjustmentAction[]
    | Timestamp
    | string
    | string[]
    | string
    | undefined
}
type ReportAdjustmentsCreateModel = {
  type: {}
  filters?: ReportFilterAdjustmentsCreate[] | undefined
}
type ReportFilterTransactionsCreate = {
  name?: {} | undefined
  operator?: Operator | ({ [x: string]: unknown } | null) | undefined
  value?: string[] | string | undefined
}
type ReportTransactionsCreateModel = {
  type: {}
  filters?: ReportFilterTransactionsCreate[] | undefined
}
type ReportFilterProductsPricesCreate = {
  name?: {} | undefined
  operator?: Operator | ({ [x: string]: unknown } | null) | undefined
  value?: string[] | string | undefined
}
type ReportProductsPricesCreateModel = {
  type: {}
  filters?: ReportFilterProductsPricesCreate[] | undefined
}
type ReportFilterDiscountsCreate = {
  name?: {} | undefined
  operator?: Operator | ({ [x: string]: unknown } | null) | undefined
  value?: string[] | string | undefined
}
type ReportDiscountsCreateModel = { type: {}; filters?: ReportFilterDiscountsCreate[] | undefined }
type ReportFilterBalanceCreate = {
  name?: {} | undefined
  operator?: Operator | ({ [x: string]: unknown } | null) | undefined
  value?: string[] | string | undefined
}
type ReportBalanceCreateModel = { type: {}; filters?: ReportFilterBalanceCreate[] | undefined }
type ReportFilterReconciliationCreate = {
  name?: {} | undefined
  operator?: Operator | ({ [x: string]: unknown } | null) | undefined
  value?: string[] | string | BalanceMovementType[] | undefined
}
type ReportPayoutReconciliationCreateModel = {
  type: {}
  filters?: ReportFilterReconciliationCreate[] | undefined
}
type ReportFilterCheckoutsCreate = {
  name?: {} | undefined
  operator?: Operator | ({ [x: string]: unknown } | null) | undefined
  value?: string[] | string | undefined
}
type ReportCheckoutsCreateModel = { type: {}; filters?: ReportFilterCheckoutsCreate[] | undefined }
type ReportFilterSubscriptionsCreate = {
  name?: {} | undefined
  operator?: Operator | ({ [x: string]: unknown } | null) | undefined
  value?:
    | string[]
    | string
    | SubscriptionStatusFilter[]
    | SubscriptionScheduledChangeActionFilter[]
    | undefined
}
type ReportSubscriptionsCreateModel = {
  type: {}
  filters?: ReportFilterSubscriptionsCreate[] | undefined
}
type ReportCreate =
  | ReportAdjustmentsCreateModel
  | ReportTransactionsCreateModel
  | ReportProductsPricesCreateModel
  | ReportDiscountsCreateModel
  | ReportBalanceCreateModel
  | ReportPayoutReconciliationCreateModel
  | ReportCheckoutsCreateModel
  | ReportSubscriptionsCreateModel
type GetReportCsvData = { url: string }
type GetReportCsvResponse = { meta: Meta; data: GetReportCsvData }
type RootAuthType = 'api_key' | 'oauth' | 'client_token' | 'session'
type RootCallerAccount = { id: string; name: string }
type RootContext = {
  api: { name: string; version: string; environment: {}; documentation_url: string }
  caller: {
    auth_type: RootAuthType | ({ [x: string]: unknown } | null)
    account: RootCallerAccount | ({ [x: string]: unknown } | null)
    permissions: string[]
  }
}
type StatementDescriptorName = string
type StatementDescriptorSettings = {
  name: StatementDescriptorName
  preview: { default: string; paypal: string }
}
type StatementDescriptorSettingsUpdate = { name?: StatementDescriptorName | undefined }
type SimulationType = {
  name: string
  label: string
  description: string
  group: string
  type: {}
  events: EventTypeName[]
}
type SimulationId = string
type SimulationPayload = { [x: string]: unknown }
type CreatedAt = string
type UpdatedAt = string
type SimulationStandardEventsModel = {
  id: SimulationId
  status: {}
  notification_setting_id: {}
  name: string
  type: {}
  payload: SimulationPayload | ({ [x: string]: unknown } | null)
  config: { [x: string]: unknown } | null
  last_run_at: Timestamp | ({ [x: string]: unknown } | null)
  created_at: CreatedAt
  updated_at: UpdatedAt
}
type SimulationConfigSubscriptionCancellation = {
  entities: { subscription_id: SubscriptionId | ({ [x: string]: unknown } | null) }
  options: { effective_from: {}; has_past_due_transaction: boolean }
}
type PaymentMethodId = string
type TransactionId = string
type SubscriptionItemWithPriceId = { quantity: number; price_id: {} }
type SimulationConfigSubscriptionCreation = {
  entities: {
    customer_id: CustomerId | ({ [x: string]: unknown } | null)
    address_id: AddressId | ({ [x: string]: unknown } | null)
    business_id: BusinessId | ({ [x: string]: unknown } | null)
    payment_method_id: PaymentMethodId | ({ [x: string]: unknown } | null)
    discount_id: DiscountId | ({ [x: string]: unknown } | null)
    transaction_id: TransactionId | ({ [x: string]: unknown } | null)
    items: SubscriptionItemWithPriceId[] | ({ [x: string]: unknown } | null)
  }
  options: { customer_simulated_as: {}; business_simulated_as: {}; discount_simulated_as: {} }
}
type SimulationConfigSubscriptionPause = {
  entities: { subscription_id: SubscriptionId | ({ [x: string]: unknown } | null) }
  options: { effective_from: {}; has_past_due_transaction: boolean }
}
type SimulationConfigOptionsPaymentDunningExhaustedAction =
  | 'subscription_paused'
  | 'subscription_canceled'
type SimulationConfigSubscriptionRenewal = {
  entities: { subscription_id: SubscriptionId | ({ [x: string]: unknown } | null) }
  options: {
    payment_outcome: {}
    dunning_exhausted_action:
      | SimulationConfigOptionsPaymentDunningExhaustedAction
      | ({ [x: string]: unknown } | null)
  }
}
type SimulationConfigSubscriptionResume = {
  entities: { subscription_id: SubscriptionId | ({ [x: string]: unknown } | null) }
  options: {
    payment_outcome: {}
    dunning_exhausted_action:
      | SimulationConfigOptionsPaymentDunningExhaustedAction
      | ({ [x: string]: unknown } | null)
  }
}
type SimulationScenarioConfig = {
  subscription_cancellation:
    | SimulationConfigSubscriptionCancellation
    | ({ [x: string]: unknown } | null)
  subscription_creation: SimulationConfigSubscriptionCreation | ({ [x: string]: unknown } | null)
  subscription_pause: SimulationConfigSubscriptionPause | ({ [x: string]: unknown } | null)
  subscription_renewal: SimulationConfigSubscriptionRenewal | ({ [x: string]: unknown } | null)
  subscription_resume: SimulationConfigSubscriptionResume | ({ [x: string]: unknown } | null)
}
type SimulationScenarioEventsModel = {
  id: SimulationId
  status: {}
  notification_setting_id: {}
  name: string
  type: {}
  payload: { [x: string]: unknown } | null
  config: SimulationScenarioConfig | ({ [x: string]: unknown } | null)
  last_run_at: Timestamp | ({ [x: string]: unknown } | null)
  created_at: CreatedAt
  updated_at: UpdatedAt
}
type Simulation = SimulationStandardEventsModel | SimulationScenarioEventsModel
type SimulationStandardEventsCreate = {
  notification_setting_id: {}
  name: string
  type: {}
  payload?: SimulationPayload | ({ [x: string]: unknown } | null) | undefined
}
type SimulationScenarioEventsCreate = {
  notification_setting_id: {}
  name: string
  type: {}
  config?: {} | undefined
}
type SimulationCreate = SimulationStandardEventsCreate | SimulationScenarioEventsCreate
type SimulationStandardEventsUpdate = {
  notification_setting_id?: {} | undefined
  name?: string | undefined
  status?: Status | undefined
  type?: {} | undefined
  payload?: SimulationPayload | ({ [x: string]: unknown } | null) | undefined
}
type SimulationScenarioEventsUpdate = {
  notification_setting_id?: {} | undefined
  name?: string | undefined
  status?: Status | undefined
  type?: {} | undefined
  config?: {} | undefined
}
type SimulationUpdate = SimulationStandardEventsUpdate | SimulationScenarioEventsUpdate
type SimulationsRunIncludeEnum = 'events'
type SimulationRunStatus = 'pending' | 'completed' | 'canceled'
type SimulationEventRequest = { body: string }
type SimulationEventResponse = { body: string; status_code: number }
type SimulationEvent = {
  id: {}
  status: {}
  event_type: {}
  payload: {}
  request: SimulationEventRequest | ({ [x: string]: unknown } | null)
  response: SimulationEventResponse | ({ [x: string]: unknown } | null)
  created_at: {}
  updated_at: {}
}
type SimulationRunSingleEventIncludesModel = {
  id: {}
  status: SimulationRunStatus
  created_at: {}
  updated_at: {}
  type: {}
  events?: SimulationEvent[] | undefined
}
type SimulationRunScenarioIncludesModel = {
  id: {}
  status: SimulationRunStatus
  created_at: {}
  updated_at: {}
  type: {}
  events?: SimulationEvent[] | undefined
}
type SimulationRunIncludes =
  | SimulationRunSingleEventIncludesModel
  | SimulationRunScenarioIncludesModel
type SimulationRunSingleEventModel = {
  id: {}
  status: SimulationRunStatus
  created_at: {}
  updated_at: {}
  type: {}
}
type SimulationRunScenarioModel = {
  id: {}
  status: SimulationRunStatus
  created_at: {}
  updated_at: {}
  type: {}
}
type SimulationRun = SimulationRunSingleEventModel | SimulationRunScenarioModel
type SubscriptionHistoryActionQuery =
  | 'subscription_activated'
  | 'subscription_address_updated'
  | 'subscription_billing_cycle_updated'
  | 'subscription_billing_date_updated'
  | 'subscription_billing_details_updated'
  | 'subscription_business_added'
  | 'subscription_business_removed'
  | 'subscription_business_updated'
  | 'subscription_canceled'
  | 'subscription_collection_mode_updated'
  | 'subscription_consent_requirement_granted'
  | 'subscription_created'
  | 'subscription_currency_updated'
  | 'subscription_custom_data_updated'
  | 'subscription_customer_updated'
  | 'subscription_discount_added'
  | 'subscription_discount_expired'
  | 'subscription_discount_removed'
  | 'subscription_item_added'
  | 'subscription_item_quantity_updated'
  | 'subscription_item_removed'
  | 'subscription_one_off_charge_applied'
  | 'subscription_past_due'
  | 'subscription_paused'
  | 'subscription_payment_attempted'
  | 'subscription_payment_method_added'
  | 'subscription_payment_method_removed'
  | 'subscription_payment_method_updated'
  | 'subscription_renewed'
  | 'subscription_resumed'
  | 'subscription_scheduled_change_added'
  | 'subscription_scheduled_change_removed'
  | 'subscription_scheduled_change_updated'
type SubscriptionHistorySourceQuery =
  | 'system'
  | 'api'
  | 'dashboard'
  | 'customer_portal'
  | 'support_bot'
  | 'retain'
  | 'checkout'
  | 'external_provider'
  | 'paddle_classic'
  | 'unknown'
type SubscriptionHistoryActorTypeQuery =
  | 'customer'
  | 'user'
  | 'api_key'
  | 'paddle_staff'
  | 'publisher'
  | 'system'
type SubscriptionHistoryReasonQuery =
  | 'cardless_trial_ended'
  | 'import_issue'
  | 'missing_consent'
  | 'seller_request'
  | 'customer_request'
  | 'chargeback'
  | 'eu_withdrawal'
type SubscriptionHistory = {
  id: {}
  group_id: {}
  subscription_id: {}
  occurred_at: {}
  source: {}
  actor: { type: {}; id: string | ({ [x: string]: unknown } | null) }
  reason: {}
  detail: {}
}
type CollectionModeQuery = 'automatic' | 'manual'
type ScheduledChangeActionQuery = 'cancel' | 'pause' | 'resume' | 'none'
type SubscriptionStatusQuery = 'active' | 'canceled' | 'past_due' | 'paused' | 'trialing'
type SubscriptionDiscountType = 'recurring' | 'one-off'
type SubscriptionDiscount = {
  id: DiscountId
  starts_at: Timestamp | ({ [x: string]: unknown } | null)
  ends_at: Timestamp | ({ [x: string]: unknown } | null)
  type: SubscriptionDiscountType
}
type BillingDetails = {
  enable_checkout: boolean
  purchase_order_number: string
  additional_information: string | ({ [x: string]: unknown } | null)
  payment_terms: { interval: {}; frequency: number }
}
type TimePeriod = { starts_at: {}; ends_at: {} }
type SubscriptionScheduledChange = {
  action: {}
  effective_at: {}
  resume_at: Timestamp | ({ [x: string]: unknown } | null)
}
type ItemSubscription = {
  status: {}
  quantity: number
  recurring: boolean
  created_at: {}
  updated_at: {}
  previously_billed_at: Timestamp | ({ [x: string]: unknown } | null)
  next_billed_at: Timestamp | ({ [x: string]: unknown } | null)
  trial_dates: TimePeriod | ({ [x: string]: unknown } | null)
  price: {
    id: {}
    product_id: {}
    description: string
    type: {}
    name: PriceName | ({ [x: string]: unknown } | null)
    billing_cycle: Duration | ({ [x: string]: unknown } | null)
    trial_period: PriceTrialDuration | ({ [x: string]: unknown } | null)
    tax_mode: {}
    unit_price: { amount: string; currency_code: CurrencyCode }
    unit_price_overrides: UnitPriceOverride[]
    quantity: { minimum: number; maximum: number }
    status: {}
    custom_data: CustomData | ({ [x: string]: unknown } | null)
    import_meta: ImportMeta | ({ [x: string]: unknown } | null)
    created_at: {}
    updated_at: {}
  }
  product: {
    id: {}
    name: ProductName
    description: string | ({ [x: string]: unknown } | null)
    type: {}
    tax_category: TaxCategory
    image_url: ImageUrl | ({ [x: string]: unknown } | null) | EmptyString
    custom_data: CustomData | ({ [x: string]: unknown } | null)
    status: {}
    import_meta: ImportMeta | ({ [x: string]: unknown } | null)
    created_at: {}
    updated_at: {}
  }
}
type ImportMetaSubscription = {
  external_id?: ExternalId | ({ [x: string]: unknown } | null) | undefined
  imported_from: string
}
type SubscriptionConsentRequirementId = string
type SubscriptionConsentRequirement = {
  id: SubscriptionConsentRequirementId
  requirement: {}
  status: {}
  created_at: {}
  consent_period: TimePeriod | ({ [x: string]: unknown } | null)
  granted_at: Timestamp | ({ [x: string]: unknown } | null)
  voided_at: Timestamp | ({ [x: string]: unknown } | null)
}
type Subscription = {
  id: {}
  status: {}
  customer_id: {}
  address_id: {}
  business_id: BusinessId | ({ [x: string]: unknown } | null)
  currency_code: {}
  created_at: {}
  updated_at: {}
  started_at: Timestamp | ({ [x: string]: unknown } | null)
  first_billed_at: Timestamp | ({ [x: string]: unknown } | null)
  next_billed_at: Timestamp | ({ [x: string]: unknown } | null)
  paused_at: Timestamp | ({ [x: string]: unknown } | null)
  canceled_at: Timestamp | ({ [x: string]: unknown } | null)
  discount: SubscriptionDiscount | ({ [x: string]: unknown } | null)
  collection_mode: {}
  billing_details: BillingDetails | ({ [x: string]: unknown } | null)
  current_billing_period: TimePeriod | ({ [x: string]: unknown } | null)
  billing_cycle: { interval: {}; frequency: number }
  scheduled_change: SubscriptionScheduledChange | ({ [x: string]: unknown } | null)
  management_urls: {
    update_payment_method: string | ({ [x: string]: unknown } | null)
    cancel: string
    view_subscription: string
  }
  items: ItemSubscription[]
  custom_data: CustomData | ({ [x: string]: unknown } | null)
  import_meta: ImportMetaSubscription | ({ [x: string]: unknown } | null)
  consent_requirements: SubscriptionConsentRequirement[]
}
type SubscriptionIncludeEnum = 'next_transaction' | 'recurring_transaction_details'
type TransactionPreviewDetailsTaxRatesUsedItem = {
  tax_rate: string
  totals: { subtotal: string; discount: string; tax: string; total: string }
}
type PriceId = string
type ProductId = string
type TransactionPreviewLineItem = {
  price_id: PriceId | ({ [x: string]: unknown } | null)
  quantity: number
  tax_rate: string
  unit_totals: { subtotal: string; discount: string; tax: string; total: string }
  totals: { subtotal: string; discount: string; tax: string; total: string }
  product: {
    id: ProductId | ({ [x: string]: unknown } | null)
    name: ProductName
    description: string | ({ [x: string]: unknown } | null)
    type: {}
    tax_category: TaxCategory
    image_url: ImageUrl | ({ [x: string]: unknown } | null) | EmptyString
    custom_data: CustomData | ({ [x: string]: unknown } | null)
    status: {}
    import_meta: ImportMeta | ({ [x: string]: unknown } | null)
    created_at: {}
    updated_at: {}
  }
  proration: TransactionItemProration | ({ [x: string]: unknown } | null)
}
type TransactionPreviewDetails = {
  tax_rates_used: TransactionPreviewDetailsTaxRatesUsedItem[]
  totals: {
    subtotal: string
    discount: string
    tax: string
    total: string
    credit: string
    credit_to_balance: string
    balance: string
    grand_total: string
    grand_total_tax: string
    fee: string | ({ [x: string]: unknown } | null)
    earnings: string | ({ [x: string]: unknown } | null)
    currency_code: {}
  }
  line_items: TransactionPreviewLineItem[]
}
type AdjustmentItem = {
  item_id: {}
  type: {}
  amount: string | ({ [x: string]: unknown } | null)
  proration: TransactionItemProration | ({ [x: string]: unknown } | null)
  totals: { subtotal: string; tax: string; total: string }
}
type AdjustmentPreview = {
  transaction_id: {}
  items: AdjustmentItem[]
  totals: {
    subtotal: string
    tax: string
    total: string
    fee: string
    retained_fee?: string | undefined
    earnings: string
    currency_code: {}
  }
}
type SubscriptionNextTransaction = {
  billing_period: { starts_at: {}; ends_at: {} }
  details: TransactionPreviewDetails
  adjustments: AdjustmentPreview[]
}
type SubscriptionIncludes = {
  id: {}
  status: {}
  customer_id: {}
  address_id: {}
  business_id: BusinessId | ({ [x: string]: unknown } | null)
  currency_code: {}
  created_at: {}
  updated_at: {}
  started_at: Timestamp | ({ [x: string]: unknown } | null)
  first_billed_at: Timestamp | ({ [x: string]: unknown } | null)
  next_billed_at: Timestamp | ({ [x: string]: unknown } | null)
  paused_at: Timestamp | ({ [x: string]: unknown } | null)
  canceled_at: Timestamp | ({ [x: string]: unknown } | null)
  discount: SubscriptionDiscount | ({ [x: string]: unknown } | null)
  collection_mode: {}
  billing_details: BillingDetails | ({ [x: string]: unknown } | null)
  current_billing_period: TimePeriod | ({ [x: string]: unknown } | null)
  billing_cycle: { interval: {}; frequency: number }
  scheduled_change: SubscriptionScheduledChange | ({ [x: string]: unknown } | null)
  management_urls: {
    update_payment_method: string | ({ [x: string]: unknown } | null)
    cancel: string
    view_subscription: string
  }
  items: ItemSubscription[]
  custom_data: CustomData | ({ [x: string]: unknown } | null)
  import_meta: ImportMetaSubscription | ({ [x: string]: unknown } | null)
  consent_requirements: SubscriptionConsentRequirement[]
  next_transaction?: SubscriptionNextTransaction | ({ [x: string]: unknown } | null) | undefined
  recurring_transaction_details?:
    | {
        tax_rates_used: TransactionPreviewDetailsTaxRatesUsedItem[]
        totals: {
          subtotal: string
          discount: string
          tax: string
          total: string
          credit: string
          credit_to_balance: string
          balance: string
          grand_total: string
          grand_total_tax: string
          fee: string | ({ [x: string]: unknown } | null)
          earnings: string | ({ [x: string]: unknown } | null)
          currency_code: {}
        }
        line_items: TransactionPreviewLineItem[]
      }
    | undefined
}
type SubscriptionUpdateDiscount = { id: DiscountId; effective_from: {} }
type BillingDetailsUpdate = {
  enable_checkout?: boolean | undefined
  purchase_order_number?: string | undefined
  additional_information?: string | ({ [x: string]: unknown } | null) | undefined
  payment_terms?: { interval: {}; frequency: number } | undefined
}
type SubscriptionUpdateItem = { price_id: {}; quantity?: number | undefined }
type SubscriptionItemCreateWithPrice = {
  quantity: number
  price: {
    description: string
    name?: string | ({ [x: string]: unknown } | null) | undefined
    billing_cycle?: Duration | ({ [x: string]: unknown } | null) | undefined
    trial_period?: PriceTrialDurationCreate | ({ [x: string]: unknown } | null) | undefined
    tax_mode?: {} | undefined
    unit_price: { amount: string; currency_code: CurrencyCode }
    unit_price_overrides?: UnitPriceOverride[] | undefined
    quantity?: { minimum: number; maximum: number } | undefined
    custom_data?: CustomData | ({ [x: string]: unknown } | null) | undefined
    product_id: {}
  }
}
type SubscriptionItemCreateWithPriceAndProduct = {
  quantity: number
  price: {
    description: string
    name?: string | ({ [x: string]: unknown } | null) | undefined
    billing_cycle?: Duration | ({ [x: string]: unknown } | null) | undefined
    trial_period?: PriceTrialDurationCreate | ({ [x: string]: unknown } | null) | undefined
    tax_mode?: {} | undefined
    unit_price: { amount: string; currency_code: CurrencyCode }
    unit_price_overrides?: UnitPriceOverride[] | undefined
    quantity?: { minimum: number; maximum: number } | undefined
    custom_data?: CustomData | ({ [x: string]: unknown } | null) | undefined
    product: {
      name: string
      description?: string | ({ [x: string]: unknown } | null) | undefined
      tax_category: TaxCategory
      image_url?: ImageUrl | ({ [x: string]: unknown } | null) | EmptyString | undefined
      custom_data?: CustomData | ({ [x: string]: unknown } | null) | undefined
    }
  }
}
type SubscriptionUpdateItems =
  | SubscriptionUpdateItem
  | SubscriptionItemCreateWithPrice
  | SubscriptionItemCreateWithPriceAndProduct
type SubscriptionUpdateProrationBillingMode =
  | 'prorated_immediately'
  | 'prorated_next_billing_period'
  | 'full_immediately'
  | 'full_next_billing_period'
  | 'do_not_bill'
type SubscriptionUpdate = {
  customer_id?: {} | undefined
  address_id?: {} | undefined
  business_id?: BusinessId | ({ [x: string]: unknown } | null) | undefined
  currency_code?: {} | undefined
  next_billed_at?: {} | undefined
  discount?: SubscriptionUpdateDiscount | ({ [x: string]: unknown } | null) | undefined
  collection_mode?: {} | undefined
  billing_details?: BillingDetailsUpdate | ({ [x: string]: unknown } | null) | undefined
  scheduled_change?: ({ [x: string]: unknown } | null) | undefined
  items?: SubscriptionUpdateItems[] | undefined
  custom_data?: CustomData | ({ [x: string]: unknown } | null) | undefined
  proration_billing_mode?: SubscriptionUpdateProrationBillingMode | undefined
  on_payment_failure?: {} | undefined
}
type EffectiveFrom = 'next_billing_period' | 'immediately'
type SubscriptionCancel = {
  effective_from?: EffectiveFrom | ({ [x: string]: unknown } | null) | undefined
}
type SubscriptionPause = {
  effective_from?: EffectiveFrom | ({ [x: string]: unknown } | null) | undefined
  resume_at?: Timestamp | ({ [x: string]: unknown } | null) | undefined
  on_resume?: {} | undefined
}
type SubscriptionResumeOnDate = { effective_from: {}; on_resume?: {} | undefined }
type EffectiveFromImmediately = 'immediately'
type SubscriptionResumeImmediately = {
  effective_from: EffectiveFromImmediately | ({ [x: string]: unknown } | null)
  on_resume?: {} | undefined
}
type EmptyObject = {}
type SubscriptionResume =
  | SubscriptionResumeOnDate
  | SubscriptionResumeImmediately
  | ({ [x: string]: unknown } | null)
  | EmptyObject
type TransactionStatus =
  | 'draft'
  | 'ready'
  | 'billed'
  | 'paid'
  | 'completed'
  | 'canceled'
  | 'past_due'
type DocumentNumber = string
type TransactionItem = {
  price: {
    id: {}
    product_id: {}
    description: string
    type: {}
    name: PriceName | ({ [x: string]: unknown } | null)
    billing_cycle: Duration | ({ [x: string]: unknown } | null)
    trial_period: PriceTrialDuration | ({ [x: string]: unknown } | null)
    tax_mode: {}
    unit_price: { amount: string; currency_code: CurrencyCode }
    unit_price_overrides: UnitPriceOverride[]
    quantity: { minimum: number; maximum: number }
    status: {}
    custom_data: CustomData | ({ [x: string]: unknown } | null)
    import_meta: ImportMeta | ({ [x: string]: unknown } | null)
    created_at: {}
    updated_at: {}
  }
  quantity: number
  proration: TransactionItemProration | ({ [x: string]: unknown } | null)
}
type TransactionDetailsTaxRatesUsedItem = {
  tax_rate: string
  totals: { subtotal: string; discount: string; tax: string; total: string }
}
type TransactionTotals = {
  subtotal: string
  discount: string
  tax: string
  total: string
  credit: string
  credit_to_balance: string
  balance: string
  grand_total: string
  grand_total_tax: string
  fee: string | ({ [x: string]: unknown } | null)
  earnings: string | ({ [x: string]: unknown } | null)
  currency_code: {}
}
type TransactionTotalsAdjusted = {
  subtotal: string
  tax: string
  total: string
  grand_total: string
  grand_total_tax: string
  fee: string | ({ [x: string]: unknown } | null)
  retained_fee: string
  earnings: string | ({ [x: string]: unknown } | null)
  currency_code: {}
}
type TransactionPayoutTotals = {
  subtotal: string
  discount: string
  tax: string
  total: string
  credit: string
  credit_to_balance: string
  balance: string
  grand_total: string
  grand_total_tax: string
  fee: string
  earnings: string
  currency_code: {}
  exchange_rate: {}
  fee_rate: string
}
type TransactionPayoutTotalsAdjustedChargebackFeeOriginal = { amount: string; currency_code: {} }
type CurrencyExchangeRate = string
type TransactionPayoutTotalsAdjusted = {
  subtotal: string
  tax: string
  total: string
  fee: string
  retained_fee: string
  chargeback_fee: {
    amount: string
    original:
      | TransactionPayoutTotalsAdjustedChargebackFeeOriginal
      | ({ [x: string]: unknown } | null)
  }
  earnings: string
  currency_code: {}
  exchange_rate: CurrencyExchangeRate
}
type TransactionDetailsLineItem = {
  price_id: {}
  quantity: number
  proration: TransactionItemProration | ({ [x: string]: unknown } | null)
  tax_rate: string
  unit_totals: { subtotal: string; discount: string; tax: string; total: string }
  totals: { subtotal: string; discount: string; tax: string; total: string }
  product: {
    id: {}
    name: ProductName
    description: string | ({ [x: string]: unknown } | null)
    type: {}
    tax_category: TaxCategory
    image_url: ImageUrl | ({ [x: string]: unknown } | null) | EmptyString
    custom_data: CustomData | ({ [x: string]: unknown } | null)
    status: {}
    import_meta: ImportMeta | ({ [x: string]: unknown } | null)
    created_at: {}
    updated_at: {}
  }
  id: {}
}
type PaymentAttemptStatus =
  | 'authorized'
  | 'authorized_flagged'
  | 'canceled'
  | 'captured'
  | 'error'
  | 'action_required'
  | 'pending_no_action_required'
  | 'created'
  | 'unknown'
  | 'dropped'
type ErrorCode =
  | 'already_canceled'
  | 'already_refunded'
  | 'authentication_failed'
  | 'blocked_by_policy'
  | 'blocked_card'
  | 'canceled'
  | 'declined'
  | 'declined_not_retryable'
  | 'expired_card'
  | 'fraud'
  | 'invalid_amount'
  | 'invalid_payment_details'
  | 'issuer_unavailable'
  | 'not_enough_balance'
  | 'preferred_network_not_supported'
  | 'prepaid_card_not_supported'
  | 'psp_error'
  | 'redacted_payment_method'
  | 'system_error'
  | 'transaction_not_permitted'
  | 'unknown'
type TransactionPaymentMethodType =
  | 'alipay'
  | 'apple_pay'
  | 'bancontact'
  | 'blik'
  | 'card'
  | 'google_pay'
  | 'ideal'
  | 'kakao_pay'
  | 'korea_local'
  | 'south_korea_local_card'
  | 'mb_way'
  | 'naver_pay'
  | 'offline'
  | 'payco'
  | 'paypal'
  | 'pix'
  | 'samsung_pay'
  | 'unknown'
  | 'upi'
  | 'wechat_pay'
  | 'wire_transfer'
type TransactionPaypal = { email: string; reference: string | ({ [x: string]: unknown } | null) }
type MethodDetails = {
  type: TransactionPaymentMethodType
  underlying_details: UnderlyingDetails | ({ [x: string]: unknown } | null)
  south_korea_local_card: SouthKoreaLocalCard | ({ [x: string]: unknown } | null)
  card: Card | ({ [x: string]: unknown } | null)
  paypal: TransactionPaypal | ({ [x: string]: unknown } | null)
}
type TransactionPaymentAttempt = {
  payment_attempt_id: string
  stored_payment_method_id: string
  payment_method_id: PaymentMethodId | ({ [x: string]: unknown } | null)
  amount: string
  status: PaymentAttemptStatus
  error_code: ErrorCode | ({ [x: string]: unknown } | null)
  method_details: MethodDetails
  created_at: CreatedAt
  captured_at: Timestamp | ({ [x: string]: unknown } | null)
}
type TransactionCheckout = { url: string | ({ [x: string]: unknown } | null) }
type SubscriptionTransactionIncludes = {
  id: {}
  status: TransactionStatus
  customer_id: CustomerId | ({ [x: string]: unknown } | null)
  address_id: AddressId | ({ [x: string]: unknown } | null)
  business_id: BusinessId | ({ [x: string]: unknown } | null)
  custom_data: CustomData | ({ [x: string]: unknown } | null)
  currency_code: {}
  origin: {}
  subscription_id: SubscriptionId | ({ [x: string]: unknown } | null)
  invoice_id: string | ({ [x: string]: unknown } | null)
  invoice_number: DocumentNumber | ({ [x: string]: unknown } | null)
  collection_mode: {}
  discount_id: DiscountId | ({ [x: string]: unknown } | null)
  billing_details: BillingDetails | ({ [x: string]: unknown } | null)
  billing_period: TimePeriod | ({ [x: string]: unknown } | null)
  items: TransactionItem[]
  details: {
    tax_rates_used: TransactionDetailsTaxRatesUsedItem[]
    totals: TransactionTotals
    adjusted_totals: TransactionTotalsAdjusted
    payout_totals: TransactionPayoutTotals | ({ [x: string]: unknown } | null)
    adjusted_payout_totals: TransactionPayoutTotalsAdjusted | ({ [x: string]: unknown } | null)
    line_items: TransactionDetailsLineItem[]
  }
  payments: TransactionPaymentAttempt[]
  checkout: TransactionCheckout | ({ [x: string]: unknown } | null)
  created_at: {}
  updated_at: {}
  billed_at: Timestamp | ({ [x: string]: unknown } | null)
  revised_at: Timestamp | ({ [x: string]: unknown } | null)
  customer?:
    | {
        id: {}
        name: Name | ({ [x: string]: unknown } | null)
        email: {}
        marketing_consent: boolean
        status: {}
        custom_data: CustomData | ({ [x: string]: unknown } | null)
        locale: string
        created_at: {}
        updated_at: {}
        import_meta: ImportMeta | ({ [x: string]: unknown } | null)
      }
    | undefined
  address?:
    | {
        id: {}
        customer_id: {}
        description: AddressDescription | ({ [x: string]: unknown } | null)
        first_line: AddressFirstLine | ({ [x: string]: unknown } | null)
        second_line: AddressSecondLine | ({ [x: string]: unknown } | null)
        city: AddressCity | ({ [x: string]: unknown } | null)
        postal_code: AddressPostalCode | ({ [x: string]: unknown } | null)
        region: AddressRegion | ({ [x: string]: unknown } | null)
        country_code: {}
        custom_data: CustomData | ({ [x: string]: unknown } | null)
        status: {}
        created_at: {}
        updated_at: {}
        import_meta: ImportMeta | ({ [x: string]: unknown } | null)
      }
    | undefined
  business?:
    | {
        id: {}
        customer_id: {}
        name: {}
        company_number: string | ({ [x: string]: unknown } | null)
        tax_identifier: string | ({ [x: string]: unknown } | null)
        status: {}
        contacts: BusinessContactsItem[]
        created_at: {}
        updated_at: {}
        custom_data: CustomData | ({ [x: string]: unknown } | null)
        import_meta: ImportMeta | ({ [x: string]: unknown } | null)
      }
    | undefined
  discount?:
    | {
        id: {}
        status: {}
        description: string
        enabled_for_checkout: boolean
        code: DiscountCode | ({ [x: string]: unknown } | null)
        type: DiscountType
        mode: {}
        amount: string
        currency_code: CurrencyCode | ({ [x: string]: unknown } | null)
        recur: boolean
        maximum_recurring_intervals: number | ({ [x: string]: unknown } | null)
        usage_limit: number | ({ [x: string]: unknown } | null)
        restrict_to: DiscountRestrictTo[] | ({ [x: string]: unknown } | null)
        expires_at: Timestamp | ({ [x: string]: unknown } | null)
        custom_data: CustomData | ({ [x: string]: unknown } | null)
        times_used: number
        discount_group_id: DiscountGroupId | ({ [x: string]: unknown } | null)
        created_at: {}
        updated_at: {}
        import_meta: ImportMeta | ({ [x: string]: unknown } | null)
      }
    | undefined
  adjustments: Adjustment[]
  adjustments_totals?:
    | {
        subtotal: string
        tax: string
        total: string
        fee: string
        retained_fee: string
        earnings: string
        breakdown: { credit: string; refund: string; chargeback: string }
        currency_code: {}
      }
    | undefined
  available_payment_methods: PaymentMethodType[]
}
type UpdateSummary = {
  credit: { amount: string; currency_code: CurrencyCode }
  charge: { amount: string; currency_code: CurrencyCode }
  result: { action: {}; amount: string; currency_code: {} }
}
type SubscriptionPreview = {
  status: {}
  customer_id: {}
  address_id: {}
  business_id: BusinessId | ({ [x: string]: unknown } | null)
  currency_code: {}
  created_at: {}
  updated_at: {}
  started_at: Timestamp | ({ [x: string]: unknown } | null)
  first_billed_at: Timestamp | ({ [x: string]: unknown } | null)
  next_billed_at: Timestamp | ({ [x: string]: unknown } | null)
  paused_at: Timestamp | ({ [x: string]: unknown } | null)
  canceled_at: Timestamp | ({ [x: string]: unknown } | null)
  discount: SubscriptionDiscount | ({ [x: string]: unknown } | null)
  collection_mode: {}
  billing_details: BillingDetails | ({ [x: string]: unknown } | null)
  current_billing_period: TimePeriod | ({ [x: string]: unknown } | null)
  billing_cycle: { interval: {}; frequency: number }
  scheduled_change: SubscriptionScheduledChange | ({ [x: string]: unknown } | null)
  management_urls: {
    update_payment_method: string | ({ [x: string]: unknown } | null)
    cancel: string
    view_subscription: string
  }
  items: ItemSubscription[]
  custom_data: CustomData | ({ [x: string]: unknown } | null)
  immediate_transaction: SubscriptionNextTransaction | ({ [x: string]: unknown } | null)
  next_transaction: SubscriptionNextTransaction | ({ [x: string]: unknown } | null)
  recurring_transaction_details: {
    tax_rates_used: TransactionPreviewDetailsTaxRatesUsedItem[]
    totals: {
      subtotal: string
      discount: string
      tax: string
      total: string
      credit: string
      credit_to_balance: string
      balance: string
      grand_total: string
      grand_total_tax: string
      fee: string | ({ [x: string]: unknown } | null)
      earnings: string | ({ [x: string]: unknown } | null)
      currency_code: {}
    }
    line_items: TransactionPreviewLineItem[]
  }
  update_summary: UpdateSummary | ({ [x: string]: unknown } | null)
  import_meta: ImportMetaSubscription | ({ [x: string]: unknown } | null)
  consent_requirements: SubscriptionConsentRequirement[]
}
type SubscriptionItemCreateWithPriceIdModel = { quantity: number; price_id: {} }
type SubscriptionChargeCreateWithPriceModel = {
  quantity: number
  price: {
    product_id: {}
    description: string
    name?: string | ({ [x: string]: unknown } | null) | undefined
    tax_mode?: {} | undefined
    unit_price: { amount: string; currency_code: CurrencyCode }
    unit_price_overrides?: UnitPriceOverride[] | undefined
    quantity?: { minimum: number; maximum: number } | undefined
    custom_data?: CustomData | ({ [x: string]: unknown } | null) | undefined
  }
}
type SubscriptionChargeCreateWithPriceAndProductModel = {
  quantity: number
  price: {
    description: string
    name?: string | ({ [x: string]: unknown } | null) | undefined
    tax_mode?: {} | undefined
    unit_price: { amount: string; currency_code: CurrencyCode }
    unit_price_overrides?: UnitPriceOverride[] | undefined
    quantity?: { minimum: number; maximum: number } | undefined
    custom_data?: CustomData | ({ [x: string]: unknown } | null) | undefined
    product: {
      name: string
      description?: string | ({ [x: string]: unknown } | null) | undefined
      tax_category: TaxCategory
      image_url?: ImageUrl | ({ [x: string]: unknown } | null) | EmptyString | undefined
      custom_data?: CustomData | ({ [x: string]: unknown } | null) | undefined
    }
  }
}
type SubscriptionChargeItems =
  | SubscriptionItemCreateWithPriceIdModel
  | SubscriptionChargeCreateWithPriceModel
  | SubscriptionChargeCreateWithPriceAndProductModel
type SubscriptionCharge = {
  effective_from: {}
  items: SubscriptionChargeItems[]
  on_payment_failure?: {} | undefined
}
type TaxSettings = { default_tax_mode: {} }
type TaxSettingsUpdate = { default_tax_mode?: {} | undefined }
type TransactionIncludeQuery =
  | 'address'
  | 'adjustments'
  | 'adjustments_totals'
  | 'available_payment_methods'
  | 'business'
  | 'customer'
  | 'discount'
type CollectionMode = 'automatic' | 'manual'
type TransactionOriginQuery =
  | 'api'
  | 'subscription_charge'
  | 'subscription_payment_method_change'
  | 'subscription_recurring'
  | 'subscription_update'
  | 'subscription_import'
  | 'web'
type TransactionStatusQuery =
  | 'draft'
  | 'ready'
  | 'billed'
  | 'paid'
  | 'completed'
  | 'canceled'
  | 'past_due'
type TransactionIncludes = {
  id: {}
  status: TransactionStatus
  customer_id: CustomerId | ({ [x: string]: unknown } | null)
  address_id: AddressId | ({ [x: string]: unknown } | null)
  business_id: BusinessId | ({ [x: string]: unknown } | null)
  custom_data: CustomData | ({ [x: string]: unknown } | null)
  currency_code: {}
  origin: {}
  subscription_id: SubscriptionId | ({ [x: string]: unknown } | null)
  invoice_id: string | ({ [x: string]: unknown } | null)
  invoice_number: DocumentNumber | ({ [x: string]: unknown } | null)
  collection_mode: {}
  discount_id: DiscountId | ({ [x: string]: unknown } | null)
  billing_details: BillingDetails | ({ [x: string]: unknown } | null)
  billing_period: TimePeriod | ({ [x: string]: unknown } | null)
  items: TransactionItem[]
  details: {
    tax_rates_used: TransactionDetailsTaxRatesUsedItem[]
    totals: TransactionTotals
    adjusted_totals: TransactionTotalsAdjusted
    payout_totals: TransactionPayoutTotals | ({ [x: string]: unknown } | null)
    adjusted_payout_totals: TransactionPayoutTotalsAdjusted | ({ [x: string]: unknown } | null)
    line_items: TransactionDetailsLineItem[]
  }
  payments: TransactionPaymentAttempt[]
  checkout: TransactionCheckout | ({ [x: string]: unknown } | null)
  created_at: {}
  updated_at: {}
  billed_at: Timestamp | ({ [x: string]: unknown } | null)
  revised_at: Timestamp | ({ [x: string]: unknown } | null)
  address?:
    | {
        id: {}
        customer_id: {}
        description: AddressDescription | ({ [x: string]: unknown } | null)
        first_line: AddressFirstLine | ({ [x: string]: unknown } | null)
        second_line: AddressSecondLine | ({ [x: string]: unknown } | null)
        city: AddressCity | ({ [x: string]: unknown } | null)
        postal_code: AddressPostalCode | ({ [x: string]: unknown } | null)
        region: AddressRegion | ({ [x: string]: unknown } | null)
        country_code: {}
        custom_data: CustomData | ({ [x: string]: unknown } | null)
        status: {}
        created_at: {}
        updated_at: {}
        import_meta: ImportMeta | ({ [x: string]: unknown } | null)
      }
    | undefined
  adjustments?: Adjustment[] | undefined
  adjustments_totals?:
    | {
        subtotal: string
        tax: string
        total: string
        fee: string
        retained_fee: string
        earnings: string
        breakdown: { credit: string; refund: string; chargeback: string }
        currency_code: {}
      }
    | undefined
  business?:
    | {
        id: {}
        customer_id: {}
        name: {}
        company_number: string | ({ [x: string]: unknown } | null)
        tax_identifier: string | ({ [x: string]: unknown } | null)
        status: {}
        contacts: BusinessContactsItem[]
        created_at: {}
        updated_at: {}
        custom_data: CustomData | ({ [x: string]: unknown } | null)
        import_meta: ImportMeta | ({ [x: string]: unknown } | null)
      }
    | undefined
  customer?:
    | {
        id: {}
        name: Name | ({ [x: string]: unknown } | null)
        email: {}
        marketing_consent: boolean
        status: {}
        custom_data: CustomData | ({ [x: string]: unknown } | null)
        locale: string
        created_at: {}
        updated_at: {}
        import_meta: ImportMeta | ({ [x: string]: unknown } | null)
      }
    | undefined
  discount?:
    | {
        id: {}
        status: {}
        description: string
        enabled_for_checkout: boolean
        code: DiscountCode | ({ [x: string]: unknown } | null)
        type: DiscountType
        mode: {}
        amount: string
        currency_code: CurrencyCode | ({ [x: string]: unknown } | null)
        recur: boolean
        maximum_recurring_intervals: number | ({ [x: string]: unknown } | null)
        usage_limit: number | ({ [x: string]: unknown } | null)
        restrict_to: DiscountRestrictTo[] | ({ [x: string]: unknown } | null)
        expires_at: Timestamp | ({ [x: string]: unknown } | null)
        custom_data: CustomData | ({ [x: string]: unknown } | null)
        times_used: number
        discount_group_id: DiscountGroupId | ({ [x: string]: unknown } | null)
        created_at: {}
        updated_at: {}
        import_meta: ImportMeta | ({ [x: string]: unknown } | null)
      }
    | undefined
  available_payment_methods?: PaymentMethodType[] | undefined
}
type DiscountCustom = {
  description: string
  type: {}
  amount: string
  recur?: boolean | undefined
  maximum_recurring_intervals?: number | ({ [x: string]: unknown } | null) | undefined
  custom_data?: CustomData | ({ [x: string]: unknown } | null) | undefined
  restrict_to?: string[] | ({ [x: string]: unknown } | null) | undefined
}
type BillingDetailsCreate = {
  enable_checkout?: boolean | undefined
  purchase_order_number?: string | undefined
  additional_information?: string | ({ [x: string]: unknown } | null) | undefined
  payment_terms: { interval: {}; frequency: number }
}
type TransactionItemCreateWithPriceId = {
  quantity: number
  proration?: TransactionItemProration | ({ [x: string]: unknown } | null) | undefined
  price_id: {}
}
type TransactionItemCreateWithPrice = {
  quantity: number
  proration?: TransactionItemProration | ({ [x: string]: unknown } | null) | undefined
  price: {
    description: string
    name?: string | ({ [x: string]: unknown } | null) | undefined
    billing_cycle?: Duration | ({ [x: string]: unknown } | null) | undefined
    trial_period?: PriceTrialDurationCreate | ({ [x: string]: unknown } | null) | undefined
    tax_mode?: {} | undefined
    unit_price: { amount: string; currency_code: CurrencyCode }
    unit_price_overrides?: UnitPriceOverride[] | undefined
    quantity?: { minimum: number; maximum: number } | undefined
    custom_data?: CustomData | ({ [x: string]: unknown } | null) | undefined
    product_id: {}
  }
}
type TransactionItemCreateWithPriceAndProduct = {
  quantity: number
  proration?: TransactionItemProration | ({ [x: string]: unknown } | null) | undefined
  price: {
    description: string
    name?: string | ({ [x: string]: unknown } | null) | undefined
    billing_cycle?: Duration | ({ [x: string]: unknown } | null) | undefined
    trial_period?: PriceTrialDurationCreate | ({ [x: string]: unknown } | null) | undefined
    tax_mode?: {} | undefined
    unit_price: { amount: string; currency_code: CurrencyCode }
    unit_price_overrides?: UnitPriceOverride[] | undefined
    quantity?: { minimum: number; maximum: number } | undefined
    custom_data?: CustomData | ({ [x: string]: unknown } | null) | undefined
    product: {
      name: string
      description?: string | ({ [x: string]: unknown } | null) | undefined
      tax_category: TaxCategory
      image_url?: ImageUrl | ({ [x: string]: unknown } | null) | EmptyString | undefined
      custom_data?: CustomData | ({ [x: string]: unknown } | null) | undefined
    }
  }
}
type TransactionItemCreate =
  | TransactionItemCreateWithPriceId
  | TransactionItemCreateWithPrice
  | TransactionItemCreateWithPriceAndProduct
type TransactionCheckoutCreate = { url?: string | ({ [x: string]: unknown } | null) | undefined }
type TransactionCreate = {
  id?: {} | undefined
  status?: {} | undefined
  customer_id?: CustomerId | ({ [x: string]: unknown } | null) | undefined
  address_id?: AddressId | ({ [x: string]: unknown } | null) | undefined
  business_id?: BusinessId | ({ [x: string]: unknown } | null) | undefined
  custom_data?: CustomData | ({ [x: string]: unknown } | null) | undefined
  currency_code?: CurrencyCode | ({ [x: string]: unknown } | null) | undefined
  origin?: {} | undefined
  subscription_id?: SubscriptionId | ({ [x: string]: unknown } | null) | undefined
  invoice_id?: string | ({ [x: string]: unknown } | null) | undefined
  invoice_number?: string | ({ [x: string]: unknown } | null) | undefined
  collection_mode?: {} | undefined
  discount_id?: DiscountId | ({ [x: string]: unknown } | null) | undefined
  discount?: DiscountCustom | ({ [x: string]: unknown } | null) | undefined
  billing_details?: BillingDetailsCreate | ({ [x: string]: unknown } | null) | undefined
  billing_period?: TimePeriod | ({ [x: string]: unknown } | null) | undefined
  items: TransactionItemCreate[]
  details?:
    | {
        tax_rates_used: TransactionDetailsTaxRatesUsedItem[]
        totals: TransactionTotals
        adjusted_totals: TransactionTotalsAdjusted
        payout_totals: TransactionPayoutTotals | ({ [x: string]: unknown } | null)
        adjusted_payout_totals: TransactionPayoutTotalsAdjusted | ({ [x: string]: unknown } | null)
        line_items: TransactionDetailsLineItem[]
      }
    | undefined
  payments?: TransactionPaymentAttempt[] | undefined
  checkout?: TransactionCheckoutCreate | ({ [x: string]: unknown } | null) | undefined
  created_at?: {} | undefined
  updated_at?: {} | undefined
  billed_at?: Timestamp | ({ [x: string]: unknown } | null) | undefined
}
type PublicTransactionOrigin =
  | 'api'
  | 'subscription_charge'
  | 'subscription_payment_method_change'
  | 'subscription_recurring'
  | 'subscription_update'
  | 'web'
type TransactionItemUpdate =
  | TransactionItemCreateWithPriceId
  | TransactionItemCreateWithPrice
  | TransactionItemCreateWithPriceAndProduct
type UpdateTransaction = {
  id?: {} | undefined
  status?: {} | undefined
  customer_id?: CustomerId | ({ [x: string]: unknown } | null) | undefined
  address_id?: AddressId | ({ [x: string]: unknown } | null) | undefined
  business_id?: BusinessId | ({ [x: string]: unknown } | null) | undefined
  custom_data?: CustomData | ({ [x: string]: unknown } | null) | undefined
  currency_code?: CurrencyCode | ({ [x: string]: unknown } | null) | undefined
  origin?: PublicTransactionOrigin | undefined
  subscription_id?: SubscriptionId | ({ [x: string]: unknown } | null) | undefined
  invoice_id?: string | ({ [x: string]: unknown } | null) | undefined
  invoice_number?: string | ({ [x: string]: unknown } | null) | undefined
  collection_mode?: {} | undefined
  discount_id?: DiscountId | ({ [x: string]: unknown } | null) | undefined
  discount?: DiscountCustom | ({ [x: string]: unknown } | null) | undefined
  billing_details?: BillingDetailsUpdate | ({ [x: string]: unknown } | null) | undefined
  billing_period?: TimePeriod | ({ [x: string]: unknown } | null) | undefined
  items?: TransactionItemUpdate[] | undefined
  details?:
    | {
        tax_rates_used: TransactionDetailsTaxRatesUsedItem[]
        totals: TransactionTotals
        adjusted_totals: TransactionTotalsAdjusted
        payout_totals: TransactionPayoutTotals | ({ [x: string]: unknown } | null)
        adjusted_payout_totals: TransactionPayoutTotalsAdjusted | ({ [x: string]: unknown } | null)
        line_items: TransactionDetailsLineItem[]
      }
    | undefined
  payments?: TransactionPaymentAttempt[] | undefined
  checkout?: TransactionCheckoutCreate | ({ [x: string]: unknown } | null) | undefined
  created_at?: {} | undefined
  updated_at?: {} | undefined
  billed_at?: Timestamp | ({ [x: string]: unknown } | null) | undefined
}
type TransactionPreviewItemWithPriceIdRequest = {
  quantity: number
  include_in_totals?: boolean | undefined
  proration?: TransactionItemProration | ({ [x: string]: unknown } | null) | undefined
  price_id: {}
}
type TransactionPreviewItemWithPriceRequest = {
  quantity: number
  include_in_totals?: boolean | undefined
  proration?: TransactionItemProration | ({ [x: string]: unknown } | null) | undefined
  price: {
    description: string
    name?: string | ({ [x: string]: unknown } | null) | undefined
    billing_cycle?: Duration | ({ [x: string]: unknown } | null) | undefined
    trial_period?: PriceTrialDurationCreate | ({ [x: string]: unknown } | null) | undefined
    tax_mode?: {} | undefined
    unit_price: { amount: string; currency_code: CurrencyCode }
    unit_price_overrides?: UnitPriceOverride[] | undefined
    quantity?: { minimum: number; maximum: number } | undefined
    custom_data?: CustomData | ({ [x: string]: unknown } | null) | undefined
    product_id: {}
  }
}
type TransactionPreviewItemWithPriceAndProductRequest = {
  quantity: number
  include_in_totals?: boolean | undefined
  proration?: TransactionItemProration | ({ [x: string]: unknown } | null) | undefined
  price: {
    description: string
    name?: string | ({ [x: string]: unknown } | null) | undefined
    billing_cycle?: Duration | ({ [x: string]: unknown } | null) | undefined
    trial_period?: PriceTrialDurationCreate | ({ [x: string]: unknown } | null) | undefined
    tax_mode?: {} | undefined
    unit_price: { amount: string; currency_code: CurrencyCode }
    unit_price_overrides?: UnitPriceOverride[] | undefined
    quantity?: { minimum: number; maximum: number } | undefined
    custom_data?: CustomData | ({ [x: string]: unknown } | null) | undefined
    product: {
      name: string
      description?: string | ({ [x: string]: unknown } | null) | undefined
      tax_category: TaxCategory
      image_url?: ImageUrl | ({ [x: string]: unknown } | null) | EmptyString | undefined
      custom_data?: CustomData | ({ [x: string]: unknown } | null) | undefined
    }
  }
}
type TransactionPreviewCreateItems =
  | TransactionPreviewItemWithPriceIdRequest
  | TransactionPreviewItemWithPriceRequest
  | TransactionPreviewItemWithPriceAndProductRequest
type TransactionPreviewCreateWithoutAddress = {
  customer_id?: CustomerId | ({ [x: string]: unknown } | null) | undefined
  currency_code?: CurrencyCode | ({ [x: string]: unknown } | null) | undefined
  discount_id?: DiscountId | ({ [x: string]: unknown } | null) | undefined
  discount?: DiscountCustom | ({ [x: string]: unknown } | null) | undefined
  ignore_trials?: boolean | undefined
  items: TransactionPreviewCreateItems[]
}
type TransactionPreviewCreateAddress = {
  customer_id?: CustomerId | ({ [x: string]: unknown } | null) | undefined
  currency_code?: CurrencyCode | ({ [x: string]: unknown } | null) | undefined
  discount_id?: DiscountId | ({ [x: string]: unknown } | null) | undefined
  discount?: DiscountCustom | ({ [x: string]: unknown } | null) | undefined
  ignore_trials?: boolean | undefined
  items: TransactionPreviewCreateItems[]
  address: {
    postal_code?: string | ({ [x: string]: unknown } | null) | undefined
    country_code: {}
  }
}
type TransactionPreviewCreateIpAddress = {
  customer_id?: CustomerId | ({ [x: string]: unknown } | null) | undefined
  currency_code?: CurrencyCode | ({ [x: string]: unknown } | null) | undefined
  discount_id?: DiscountId | ({ [x: string]: unknown } | null) | undefined
  discount?: DiscountCustom | ({ [x: string]: unknown } | null) | undefined
  ignore_trials?: boolean | undefined
  items: TransactionPreviewCreateItems[]
  customer_ip_address: string
}
type TransactionPreviewCreatePaddleIds = {
  currency_code?: CurrencyCode | ({ [x: string]: unknown } | null) | undefined
  discount_id?: DiscountId | ({ [x: string]: unknown } | null) | undefined
  discount?: DiscountCustom | ({ [x: string]: unknown } | null) | undefined
  ignore_trials?: boolean | undefined
  items: TransactionPreviewCreateItems[]
  customer_id: {}
  address_id: {}
  business_id?: BusinessId | ({ [x: string]: unknown } | null) | undefined
}
type TransactionPreviewCreate =
  | TransactionPreviewCreateWithoutAddress
  | TransactionPreviewCreateAddress
  | TransactionPreviewCreateIpAddress
  | TransactionPreviewCreatePaddleIds
type TransactionPreviewItem = {
  quantity: number
  include_in_totals: boolean
  proration: TransactionItemProration | ({ [x: string]: unknown } | null)
  price: {
    id: PriceId | ({ [x: string]: unknown } | null)
    product_id: ProductId | ({ [x: string]: unknown } | null)
    description: string
    type: {}
    name: PriceName | ({ [x: string]: unknown } | null)
    billing_cycle: Duration | ({ [x: string]: unknown } | null)
    trial_period: PriceTrialDuration | ({ [x: string]: unknown } | null)
    tax_mode: {}
    unit_price: { amount: string; currency_code: CurrencyCode }
    unit_price_overrides: UnitPriceOverride[]
    quantity: { minimum: number; maximum: number }
    status: {}
    custom_data: CustomData | ({ [x: string]: unknown } | null)
    import_meta: ImportMeta | ({ [x: string]: unknown } | null)
    created_at: {}
    updated_at: {}
  }
}
type TransactionPreview = {
  customer_id: CustomerId | ({ [x: string]: unknown } | null)
  address_id: AddressId | ({ [x: string]: unknown } | null)
  business_id: BusinessId | ({ [x: string]: unknown } | null)
  currency_code: {}
  discount_id: DiscountId | ({ [x: string]: unknown } | null)
  customer_ip_address: string | ({ [x: string]: unknown } | null)
  address: AddressPreview | ({ [x: string]: unknown } | null)
  ignore_trials: boolean
  items: TransactionPreviewItem[]
  details: {
    tax_rates_used: TransactionPreviewDetailsTaxRatesUsedItem[]
    totals: {
      subtotal: string
      discount: string
      tax: string
      total: string
      credit: string
      credit_to_balance: string
      balance: string
      grand_total: string
      grand_total_tax: string
      fee: string | ({ [x: string]: unknown } | null)
      earnings: string | ({ [x: string]: unknown } | null)
      currency_code: {}
    }
    line_items: TransactionPreviewLineItem[]
  }
  available_payment_methods: PaymentMethodType[]
}
type TransactionRevise = {
  customer?: { name?: {} | undefined } | undefined
  business?: { name?: {} | undefined; tax_identifier?: string | undefined } | undefined
  address?:
    | {
        first_line?: string | undefined
        second_line?: string | ({ [x: string]: unknown } | null) | undefined
        city?: string | undefined
        region?: string | undefined
      }
    | undefined
}
type Transaction = {
  id: {}
  status: TransactionStatus
  customer_id: CustomerId | ({ [x: string]: unknown } | null)
  address_id: AddressId | ({ [x: string]: unknown } | null)
  business_id: BusinessId | ({ [x: string]: unknown } | null)
  custom_data: CustomData | ({ [x: string]: unknown } | null)
  currency_code: {}
  origin: {}
  subscription_id: SubscriptionId | ({ [x: string]: unknown } | null)
  invoice_id: string | ({ [x: string]: unknown } | null)
  invoice_number: DocumentNumber | ({ [x: string]: unknown } | null)
  collection_mode: {}
  discount_id: DiscountId | ({ [x: string]: unknown } | null)
  billing_details: BillingDetails | ({ [x: string]: unknown } | null)
  billing_period: TimePeriod | ({ [x: string]: unknown } | null)
  items: TransactionItem[]
  details: {
    tax_rates_used: TransactionDetailsTaxRatesUsedItem[]
    totals: TransactionTotals
    adjusted_totals: TransactionTotalsAdjusted
    payout_totals: TransactionPayoutTotals | ({ [x: string]: unknown } | null)
    adjusted_payout_totals: TransactionPayoutTotalsAdjusted | ({ [x: string]: unknown } | null)
    line_items: TransactionDetailsLineItem[]
  }
  payments: TransactionPaymentAttempt[]
  checkout: TransactionCheckout | ({ [x: string]: unknown } | null)
  created_at: {}
  updated_at: {}
  billed_at: Timestamp | ({ [x: string]: unknown } | null)
  revised_at: Timestamp | ({ [x: string]: unknown } | null)
}
type GetInvoicePdf = { url: string }
type GetInvoicePdfResponse = { meta: Meta; data: GetInvoicePdf }
type VerificationType = 'onboarding' | 'domain'
type VerificationStep = {
  id: {}
  key: {}
  status: {}
  expires_at: Timestamp | ({ [x: string]: unknown } | null)
  created_at: {}
  updated_at: {}
}
type Verification = {
  id: {}
  status: {}
  verification_type: {}
  created_at: {}
  updated_at: {}
  steps: VerificationStep[]
}
type VerificationId = string
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/account': {
      $get:
        | {
            input: {}
            output: { data: AccountDetails; meta: Meta }
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 200 }
      $patch:
        | {
            input: { json: AccountDetailsUpdate }
            output: { data: AccountDetails; meta: Meta }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: AccountDetailsUpdate }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/customers/:customer_id/addresses': {
      $get:
        | {
            input: { param: { customer_id: CustomerId } } & {
              query: {
                id?: string[] | undefined
                after?: string | undefined
                per_page?: number | undefined
                order_by?: string | undefined
                status?: StatusQuery[] | undefined
                search?: string | undefined
              }
            } & { header: { 'Skip-Count'?: string | undefined } }
            output: { data: Address[]; meta: PaginatedMeta }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { customer_id: CustomerId } } & {
              query: {
                id?: string[] | undefined
                after?: string | undefined
                per_page?: number | undefined
                order_by?: string | undefined
                status?: StatusQuery[] | undefined
                search?: string | undefined
              }
            } & { header: { 'Skip-Count'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { customer_id: CustomerId } } & { json: AddressCreate }
            output: { data: Address; meta: Meta }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { customer_id: CustomerId } } & { json: AddressCreate }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/customers/:customer_id/addresses/:address_id': {
      $get:
        | {
            input: { param: { address_id: string; customer_id: CustomerId } }
            output: { data: Address; meta: Meta }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { address_id: string; customer_id: CustomerId } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
      $patch:
        | {
            input: { param: { address_id: string; customer_id: CustomerId } } & {
              json: AddressUpdate
            }
            output: { data: Address; meta: Meta }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { address_id: string; customer_id: CustomerId } } & {
              json: AddressUpdate
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/adjustments': {
      $get:
        | {
            input: {
              query: {
                id?: string[] | undefined
                after?: string | undefined
                action?: AdjustmentActionQuery[] | undefined
                customer_id?: string[] | undefined
                order_by?: string | undefined
                per_page?: number | undefined
                status?: AdjustmentStatusQuery[] | undefined
                subscription_id?: string[] | undefined
                transaction_id?: string[] | undefined
              }
            } & { header: { 'Skip-Count'?: string | undefined } }
            output: { data: Adjustment[]; meta: PaginatedMeta }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                id?: string[] | undefined
                after?: string | undefined
                action?: AdjustmentActionQuery[] | undefined
                customer_id?: string[] | undefined
                order_by?: string | undefined
                per_page?: number | undefined
                status?: AdjustmentStatusQuery[] | undefined
                subscription_id?: string[] | undefined
                transaction_id?: string[] | undefined
              }
            } & { header: { 'Skip-Count'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { json: AdjustmentCreate }
            output: { data: Adjustment; meta: Meta }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: AdjustmentCreate }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/adjustments/:adjustment_id/credit-note': {
      $get:
        | {
            input: { param: { adjustment_id: string } } & {
              query: { disposition?: Disposition | undefined }
            }
            output: { data: AdjustmentCreditNotePdf; meta: Meta }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { adjustment_id: string } } & {
              query: { disposition?: Disposition | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/settings/balance-currency': {
      $get:
        | {
            input: {}
            output: { data: BalanceCurrency; meta: Meta }
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 200 }
      $patch:
        | {
            input: { json: BalanceCurrencyUpdate }
            output: { data: BalanceCurrency; meta: Meta }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: BalanceCurrencyUpdate }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/customers/:customer_id/businesses': {
      $get:
        | {
            input: { param: { customer_id: CustomerId } } & {
              query: {
                id?: string[] | undefined
                after?: string | undefined
                per_page?: number | undefined
                order_by?: string | undefined
                status?: StatusQuery[] | undefined
                search?: string | undefined
              }
            } & { header: { 'Skip-Count'?: string | undefined } }
            output: { data: Business[]; meta: PaginatedMeta }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { customer_id: CustomerId } } & {
              query: {
                id?: string[] | undefined
                after?: string | undefined
                per_page?: number | undefined
                order_by?: string | undefined
                status?: StatusQuery[] | undefined
                search?: string | undefined
              }
            } & { header: { 'Skip-Count'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { customer_id: CustomerId } } & { json: BusinessCreate }
            output: { data: Business; meta: Meta }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { customer_id: CustomerId } } & { json: BusinessCreate }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/customers/:customer_id/businesses/:business_id': {
      $get:
        | {
            input: { param: { business_id: string; customer_id: CustomerId } }
            output: { data: Business; meta: Meta }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { business_id: string; customer_id: CustomerId } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
      $patch:
        | {
            input: { param: { business_id: string; customer_id: CustomerId } } & {
              json: BusinessUpdate
            }
            output: { data: Business; meta: Meta }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { business_id: string; customer_id: CustomerId } } & {
              json: BusinessUpdate
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/checkout-domains': {
      $get:
        | {
            input: {
              query: {
                id?: string[] | undefined
                after?: string | undefined
                per_page?: number | undefined
                domain?: string | undefined
                order_by?: string | undefined
                status?: CheckoutDomainApprovalStatusQuery[] | undefined
              }
            } & { header: { 'Skip-Count'?: string | undefined } }
            output: { data: CheckoutDomain[]; meta: PaginatedMeta }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                id?: string[] | undefined
                after?: string | undefined
                per_page?: number | undefined
                domain?: string | undefined
                order_by?: string | undefined
                status?: CheckoutDomainApprovalStatusQuery[] | undefined
              }
            } & { header: { 'Skip-Count'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/checkout-domains/:domain_id': {
      $get:
        | {
            input: { param: { domain_id: string } }
            output: { data: CheckoutDomain; meta: Meta }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { domain_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | { input: { param: { domain_id: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { domain_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/checkout-domains/:domain_id/verify-payment-method': {
      $post:
        | {
            input: { param: { domain_id: string } } & { json: CheckoutDomainVerifyPaymentMethod }
            output: { data: CheckoutDomain; meta: Meta }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { domain_id: string } } & { json: CheckoutDomainVerifyPaymentMethod }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/settings/checkout-features': {
      $get:
        | {
            input: {}
            output: { data: CheckoutFeatures; meta: Meta }
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 200 }
      $patch:
        | {
            input: { json: CheckoutFeaturesUpdate }
            output: { data: CheckoutFeatures; meta: Meta }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CheckoutFeaturesUpdate }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/settings/checkout-payment-methods': {
      $get:
        | {
            input: {}
            output: { data: CheckoutPaymentMethodSettings; meta: Meta }
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 200 }
      $patch:
        | {
            input: { json: CheckoutPaymentMethodSettingsUpdate }
            output: { data: CheckoutPaymentMethodSettings; meta: Meta }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CheckoutPaymentMethodSettingsUpdate }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/settings/checkout-recovery': {
      $get:
        | {
            input: {}
            output: { data: CheckoutRecovery; meta: Meta }
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 200 }
      $patch:
        | {
            input: { json: CheckoutRecoveryUpdate }
            output: { data: CheckoutRecovery; meta: Meta }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CheckoutRecoveryUpdate }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/settings/checkout-styles-overlay': {
      $get:
        | {
            input: {}
            output: { data: CheckoutStylesOverlay; meta: Meta }
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 200 }
      $patch:
        | {
            input: { json: CheckoutStylesOverlayUpdate }
            output: { data: CheckoutStylesOverlay; meta: Meta }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CheckoutStylesOverlayUpdate }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/settings/checkout-url': {
      $get:
        | {
            input: {}
            output: { data: CheckoutUrl; meta: Meta }
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 200 }
      $patch:
        | {
            input: { json: CheckoutUrlUpdate }
            output: { data: CheckoutUrl; meta: Meta }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CheckoutUrlUpdate }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/client-tokens': {
      $get:
        | {
            input: {
              query: {
                after?: string | undefined
                per_page?: number | undefined
                order_by?: string | undefined
                status?: ClientTokensStatusQuery[] | undefined
              }
            } & { header: { 'Skip-Count'?: string | undefined } }
            output: { data: ClientToken[]; meta: PaginatedMeta }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                after?: string | undefined
                per_page?: number | undefined
                order_by?: string | undefined
                status?: ClientTokensStatusQuery[] | undefined
              }
            } & { header: { 'Skip-Count'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { json: ClientTokenCreate }
            output: { data: ClientToken; meta: Meta }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: ClientTokenCreate }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/client-tokens/:client_token_id': {
      $get:
        | {
            input: { param: { client_token_id: string } }
            output: { data: ClientToken; meta: Meta }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { client_token_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
      $patch:
        | {
            input: { param: { client_token_id: string } } & { json: ClientTokenUpdate }
            output: { data: ClientToken; meta: Meta }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { client_token_id: string } } & { json: ClientTokenUpdate }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/countries': {
      $get:
        | {
            input: {}
            output: { data: CountryDefinition[]; meta: Meta }
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/currencies': {
      $get:
        | {
            input: {}
            output: { data: CurrencyDefinition[]; meta: Meta }
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/settings/currency-conversions': {
      $get:
        | {
            input: {}
            output: { data: CurrencyConversions; meta: Meta }
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 200 }
      $patch:
        | {
            input: { json: CurrencyConversionsUpdate }
            output: { data: CurrencyConversions; meta: Meta }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CurrencyConversionsUpdate }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/customers': {
      $get:
        | {
            input: {
              query: {
                id?: string[] | undefined
                after?: string | undefined
                per_page?: number | undefined
                email?: string[] | undefined
                order_by?: string | undefined
                status?: StatusQuery[] | undefined
                search?: string | undefined
              }
            } & { header: { 'Skip-Count'?: string | undefined } }
            output: { data: Customer[]; meta: PaginatedMeta }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                id?: string[] | undefined
                after?: string | undefined
                per_page?: number | undefined
                email?: string[] | undefined
                order_by?: string | undefined
                status?: StatusQuery[] | undefined
                search?: string | undefined
              }
            } & { header: { 'Skip-Count'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { json: CustomerCreate }
            output: { data: Customer; meta: Meta }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: CustomerCreate }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/customers/:customer_id': {
      $get:
        | {
            input: { param: { customer_id: CustomerId } }
            output: { data: CustomerIncludes; meta: Meta }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { customer_id: CustomerId } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
      $patch:
        | {
            input: { param: { customer_id: CustomerId } } & { json: CustomerUpdate }
            output: { data: Customer; meta: Meta }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { customer_id: CustomerId } } & { json: CustomerUpdate }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/customers/:customer_id/credit-balances': {
      $get:
        | {
            input: { param: { customer_id: CustomerId } } & {
              query: { currency_code?: string[] | undefined }
            }
            output: { data: CreditBalance[]; meta: Meta }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { customer_id: CustomerId } } & {
              query: { currency_code?: string[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/customers/:customer_id/auth-token': {
      $post:
        | {
            input: { param: { customer_id: CustomerId } }
            output: { data: CustomerAuthenticationToken; meta: Meta }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { customer_id: CustomerId } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/customers/:customer_id/portal-sessions': {
      $post:
        | {
            input: { param: { customer_id: CustomerId } } & { json: CustomerPortalSessionCreate }
            output: { data: CustomerPortalSession; meta: Meta }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { customer_id: CustomerId } } & { json: CustomerPortalSessionCreate }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/discount-groups': {
      $get:
        | {
            input: {
              query: {
                id?: string[] | undefined
                after?: string | undefined
                per_page?: number | undefined
                order_by?: string | undefined
              }
            } & { header: { 'Skip-Count'?: string | undefined } }
            output: { data: DiscountGroup[]; meta: PaginatedMeta }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                id?: string[] | undefined
                after?: string | undefined
                per_page?: number | undefined
                order_by?: string | undefined
              }
            } & { header: { 'Skip-Count'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { json: DiscountGroupCreate }
            output: { data: DiscountGroup; meta: Meta }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: DiscountGroupCreate }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/discount-groups/:discount_group_id': {
      $get:
        | {
            input: { param: { discount_group_id: string } }
            output: { data: DiscountGroup; meta: Meta }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { discount_group_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
      $patch:
        | {
            input: { param: { discount_group_id: string } } & { json: DiscountGroupUpdate }
            output: { data: DiscountGroup; meta: Meta }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { discount_group_id: string } } & { json: DiscountGroupUpdate }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/discounts': {
      $get:
        | {
            input: {
              query: {
                id?: string[] | undefined
                after?: string | undefined
                per_page?: number | undefined
                include?: DiscountIncludeEnum[] | undefined
                code?: string[] | undefined
                order_by?: string | undefined
                status?: DiscountStatusQueryEnum[] | undefined
                mode?: DiscountModeQueryEnum | undefined
                discount_group_id?: string[] | undefined
              }
            } & { header: { 'Skip-Count'?: string | undefined } }
            output: { data: DiscountIncludes[]; meta: PaginatedMeta }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                id?: string[] | undefined
                after?: string | undefined
                per_page?: number | undefined
                include?: DiscountIncludeEnum[] | undefined
                code?: string[] | undefined
                order_by?: string | undefined
                status?: DiscountStatusQueryEnum[] | undefined
                mode?: DiscountModeQueryEnum | undefined
                discount_group_id?: string[] | undefined
              }
            } & { header: { 'Skip-Count'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { json: DiscountCreate }
            output: { data: Discount; meta: Meta }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: DiscountCreate }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/discounts/:discount_id': {
      $get:
        | {
            input: { param: { discount_id: string } } & {
              query: { include?: DiscountIncludeEnum[] | undefined }
            }
            output: { data: DiscountIncludes; meta: Meta }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { discount_id: string } } & {
              query: { include?: DiscountIncludeEnum[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
      $patch:
        | {
            input: { param: { discount_id: string } } & { json: DiscountUpdate }
            output: { data: Discount; meta: Meta }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { discount_id: string } } & { json: DiscountUpdate }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/event-types': {
      $get:
        | {
            input: {}
            output: { data: EventType[]; meta: Meta }
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/events': {
      $get:
        | {
            input: {
              query: {
                after?: string | undefined
                per_page?: number | undefined
                order_by?: string | undefined
                event_type?: EventTypeName[] | undefined
                filter?: string | undefined
                to?: string | undefined
                from?: string | undefined
              }
            } & { header: { 'Skip-Count'?: string | undefined } }
            output: { data: Event[]; meta: PaginatedMeta }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                after?: string | undefined
                per_page?: number | undefined
                order_by?: string | undefined
                event_type?: EventTypeName[] | undefined
                filter?: string | undefined
                to?: string | undefined
                from?: string | undefined
              }
            } & { header: { 'Skip-Count'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/ips': {
      $get:
        | { input: {}; output: IpAddressResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/metrics/explore/entities': {
      $get:
        | {
            input: { query: { entity?: MetricEntity | undefined } }
            output: { data: MetricEntityDefinition[]; meta: Meta }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { entity?: MetricEntity | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/metrics/explore': {
      $post:
        | {
            input: { query: { after?: MetricsExploreCursor | undefined } } & {
              json: MetricsExploreRequest
            }
            output: MetricsExploreResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { after?: MetricsExploreCursor | undefined } } & {
              json: MetricsExploreRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/metrics/monthly-recurring-revenue': {
      $get:
        | {
            input: { query: { from: string; to: string } }
            output: { data: MetricsTimeseriesMonthlyRecurringRevenue; meta: Meta }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { from: string; to: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/metrics/active-subscribers': {
      $get:
        | {
            input: { query: { from: string; to: string } }
            output: { data: MetricsTimeseriesActiveSubscribers; meta: Meta }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { from: string; to: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/metrics/monthly-recurring-revenue-change': {
      $get:
        | {
            input: { query: { from: string; to: string } }
            output: { data: MetricsTimeseriesMonthlyRecurringRevenueChange; meta: Meta }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { from: string; to: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/metrics/revenue': {
      $get:
        | {
            input: { query: { from: string; to: string } }
            output: { data: MetricsTimeseriesRevenue; meta: Meta }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { from: string; to: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/metrics/refunds': {
      $get:
        | {
            input: { query: { from: string; to: string } }
            output: { data: MetricsTimeseriesRefunds; meta: Meta }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { from: string; to: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/metrics/chargebacks': {
      $get:
        | {
            input: { query: { from: string; to: string } }
            output: { data: MetricsTimeseriesChargebacks; meta: Meta }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { from: string; to: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/metrics/checkout-conversion': {
      $get:
        | {
            input: { query: { from: string; to: string } }
            output: { data: MetricsTimeseriesCheckoutConversion; meta: Meta }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { from: string; to: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/notification-settings': {
      $get:
        | {
            input: {
              query: {
                after?: string | undefined
                per_page?: number | undefined
                order_by?: string | undefined
                active?: boolean | undefined
                traffic_source?: NotificationSettingTrafficSource | undefined
              }
            } & { header: { 'Skip-Count'?: string | undefined } }
            output: { data: NotificationSetting[]; meta: PaginatedMeta }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                after?: string | undefined
                per_page?: number | undefined
                order_by?: string | undefined
                active?: boolean | undefined
                traffic_source?: NotificationSettingTrafficSource | undefined
              }
            } & { header: { 'Skip-Count'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { json: NotificationSettingCreate }
            output: { data: NotificationSetting; meta: Meta }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: NotificationSettingCreate }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/notification-settings/:notification_setting_id': {
      $get:
        | {
            input: { param: { notification_setting_id: string } }
            output: { data: NotificationSetting; meta: Meta }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { notification_setting_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
      $patch:
        | {
            input: { param: { notification_setting_id: string } } & {
              json: NotificationSettingUpdate
            }
            output: { data: NotificationSetting; meta: Meta }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { notification_setting_id: string } } & {
              json: NotificationSettingUpdate
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { notification_setting_id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { notification_setting_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/notifications': {
      $get:
        | {
            input: {
              query: {
                after?: string | undefined
                per_page?: number | undefined
                notification_setting_id?: string[] | undefined
                order_by?: string | undefined
                search?: string | undefined
                status?: NotificationStatusQueryEnum[] | undefined
                filter?: string | undefined
                to?: string | undefined
                from?: string | undefined
              }
            } & { header: { 'Skip-Count'?: string | undefined } }
            output: { data: Notification[]; meta: PaginatedMeta }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                after?: string | undefined
                per_page?: number | undefined
                notification_setting_id?: string[] | undefined
                order_by?: string | undefined
                search?: string | undefined
                status?: NotificationStatusQueryEnum[] | undefined
                filter?: string | undefined
                to?: string | undefined
                from?: string | undefined
              }
            } & { header: { 'Skip-Count'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/notifications/:notification_id': {
      $get:
        | {
            input: { param: { notification_id: string } }
            output: { data: Notification; meta: Meta }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { notification_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/notifications/:notification_id/logs': {
      $get:
        | {
            input: { param: { notification_id: string } } & {
              query: { after?: string | undefined; per_page?: number | undefined }
            } & { header: { 'Skip-Count'?: string | undefined } }
            output: { data: NotificationLog[]; meta: PaginatedMeta }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { notification_id: string } } & {
              query: { after?: string | undefined; per_page?: number | undefined }
            } & { header: { 'Skip-Count'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/notifications/:notification_id/replay': {
      $post:
        | {
            input: { param: { notification_id: string } }
            output: { data: NotificationReplay; meta: Meta }
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { notification_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/customers/:customer_id/payment-methods': {
      $get:
        | {
            input: { param: { customer_id: CustomerId } } & {
              query: {
                after?: string | undefined
                per_page?: number | undefined
                address_id?: string[] | undefined
                order_by?: string | undefined
                supports_checkout?: boolean | undefined
              }
            } & { header: { 'Skip-Count'?: string | undefined } }
            output: { data: CustomerPaymentMethod[]; meta: PaginatedMeta }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { customer_id: CustomerId } } & {
              query: {
                after?: string | undefined
                per_page?: number | undefined
                address_id?: string[] | undefined
                order_by?: string | undefined
                supports_checkout?: boolean | undefined
              }
            } & { header: { 'Skip-Count'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/customers/:customer_id/payment-methods/:payment_method_id': {
      $get:
        | {
            input: { param: { customer_id: CustomerId; payment_method_id: string } }
            output: { data: CustomerPaymentMethod; meta: Meta }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { customer_id: CustomerId; payment_method_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
      $delete:
        | {
            input: { param: { customer_id: CustomerId; payment_method_id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { customer_id: CustomerId; payment_method_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/prices': {
      $get:
        | {
            input: {
              query: {
                id?: string[] | undefined
                after?: string | undefined
                per_page?: number | undefined
                include?: PriceListIncludeEnum[] | undefined
                order_by?: string | undefined
                product_id?: string[] | undefined
                status?: StatusQuery[] | undefined
                recurring?: boolean | undefined
                'billing_cycle.interval'?: DurationInterval | undefined
                'billing_cycle.frequency'?: number | undefined
                type?: CatalogTypeQueryEnum | undefined
              }
            } & { header: { 'Skip-Count'?: string | undefined } }
            output: { data: PriceIncludes[]; meta: PaginatedMeta }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                id?: string[] | undefined
                after?: string | undefined
                per_page?: number | undefined
                include?: PriceListIncludeEnum[] | undefined
                order_by?: string | undefined
                product_id?: string[] | undefined
                status?: StatusQuery[] | undefined
                recurring?: boolean | undefined
                'billing_cycle.interval'?: DurationInterval | undefined
                'billing_cycle.frequency'?: number | undefined
                type?: CatalogTypeQueryEnum | undefined
              }
            } & { header: { 'Skip-Count'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { json: PriceCreate }
            output: { data: Price; meta: Meta }
            outputFormat: 'json'
            status: 201
          }
        | { input: { json: PriceCreate }; output: ErrorResponse; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/prices/:price_id': {
      $get:
        | {
            input: { param: { price_id: string } } & {
              query: { include?: PriceIncludeEnum[] | undefined }
            }
            output: { data: PriceWithProductCollectionIncludes; meta: Meta }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { price_id: string } } & {
              query: { include?: PriceIncludeEnum[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
      $patch:
        | {
            input: { param: { price_id: string } } & { json: PriceUpdate }
            output: { data: Price; meta: Meta }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { price_id: string } } & { json: PriceUpdate }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/pricing-preview': {
      $post:
        | {
            input: { json: TransactionPricingPreviewRequest }
            output: { data: TransactionPricingPreviewResponse; meta: Meta }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: TransactionPricingPreviewRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/products': {
      $get:
        | {
            input: {
              query: {
                id?: string[] | undefined
                after?: string | undefined
                per_page?: number | undefined
                include?: ProductIncludeEnum[] | undefined
                order_by?: string | undefined
                status?: StatusQuery[] | undefined
                tax_category?: TaxCategoryQueryEnum[] | undefined
                type?: CatalogTypeQueryEnum | undefined
              }
            } & { header: { 'Skip-Count'?: string | undefined } }
            output: { data: ProductIncludes[]; meta: PaginatedMeta }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                id?: string[] | undefined
                after?: string | undefined
                per_page?: number | undefined
                include?: ProductIncludeEnum[] | undefined
                order_by?: string | undefined
                status?: StatusQuery[] | undefined
                tax_category?: TaxCategoryQueryEnum[] | undefined
                type?: CatalogTypeQueryEnum | undefined
              }
            } & { header: { 'Skip-Count'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { json: ProductCreate }
            output: { data: Product; meta: Meta }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: ProductCreate }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/products/:product_id': {
      $get:
        | {
            input: { param: { product_id: string } } & {
              query: { include?: ProductIncludeEnum[] | undefined }
            }
            output: { data: ProductIncludes; meta: Meta }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { product_id: string } } & {
              query: { include?: ProductIncludeEnum[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
      $patch:
        | {
            input: { param: { product_id: string } } & { json: ProductUpdate }
            output: { data: Product; meta: Meta }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { product_id: string } } & { json: ProductUpdate }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/reports': {
      $get:
        | {
            input: {
              query: {
                after?: string | undefined
                per_page?: number | undefined
                order_by?: string | undefined
                status?: ReportStatusQueryEnum[] | undefined
              }
            } & { header: { 'Skip-Count'?: string | undefined } }
            output: { data: Report[]; meta: PaginatedMeta }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                after?: string | undefined
                per_page?: number | undefined
                order_by?: string | undefined
                status?: ReportStatusQueryEnum[] | undefined
              }
            } & { header: { 'Skip-Count'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { json: ReportCreate }
            output: { data: Report; meta: Meta }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: ReportCreate }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/reports/:report_id': {
      $get:
        | {
            input: { param: { report_id: string } }
            output: { data: Report; meta: Meta }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { report_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/reports/:report_id/download-url': {
      $get:
        | {
            input: { param: { report_id: string } }
            output: GetReportCsvResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { report_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/': {
      $get:
        | {
            input: {}
            output: { data: RootContext; meta: Meta }
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/settings/statement-descriptor': {
      $get:
        | {
            input: {}
            output: { data: StatementDescriptorSettings; meta: Meta }
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 200 }
      $patch:
        | {
            input: { json: StatementDescriptorSettingsUpdate }
            output: { data: StatementDescriptorSettings; meta: Meta }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: StatementDescriptorSettingsUpdate }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/simulation-types': {
      $get:
        | {
            input: {}
            output: { data: SimulationType[]; meta: Meta }
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/simulations': {
      $get:
        | {
            input: {
              query: {
                id?: string[] | undefined
                after?: string | undefined
                per_page?: number | undefined
                notification_setting_id?: string[] | undefined
                order_by?: string | undefined
                status?: StatusQuery[] | undefined
              }
            } & { header: { 'Skip-Count'?: string | undefined } }
            output: { data: Simulation[]; meta: PaginatedMeta }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                id?: string[] | undefined
                after?: string | undefined
                per_page?: number | undefined
                notification_setting_id?: string[] | undefined
                order_by?: string | undefined
                status?: StatusQuery[] | undefined
              }
            } & { header: { 'Skip-Count'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { json: SimulationCreate }
            output: { data: Simulation; meta: Meta }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: SimulationCreate }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/simulations/:simulation_id': {
      $get:
        | {
            input: { param: { simulation_id: string } }
            output: { data: Simulation; meta: Meta }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { simulation_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
      $patch:
        | {
            input: { param: { simulation_id: string } } & { json: SimulationUpdate }
            output: { data: Simulation; meta: Meta }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { simulation_id: string } } & { json: SimulationUpdate }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/simulations/:simulation_id/runs': {
      $get:
        | {
            input: { param: { simulation_id: string } } & {
              query: {
                id?: string[] | undefined
                after?: string | undefined
                per_page?: number | undefined
                include?: SimulationsRunIncludeEnum[] | undefined
                order_by?: string | undefined
              }
            } & { header: { 'Skip-Count'?: string | undefined } }
            output: { data: SimulationRunIncludes[]; meta: PaginatedMeta }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { simulation_id: string } } & {
              query: {
                id?: string[] | undefined
                after?: string | undefined
                per_page?: number | undefined
                include?: SimulationsRunIncludeEnum[] | undefined
                order_by?: string | undefined
              }
            } & { header: { 'Skip-Count'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { param: { simulation_id: string } }
            output: { data: SimulationRun; meta: Meta }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { simulation_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/simulations/:simulation_id/runs/:simulation_run_id': {
      $get:
        | {
            input: { param: { simulation_id: string; simulation_run_id: string } } & {
              query: { include?: SimulationsRunIncludeEnum[] | undefined }
            }
            output: { data: SimulationRunIncludes; meta: Meta }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { simulation_id: string; simulation_run_id: string } } & {
              query: { include?: SimulationsRunIncludeEnum[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/simulations/:simulation_id/runs/:simulation_run_id/events': {
      $get:
        | {
            input: { param: { simulation_id: string; simulation_run_id: string } } & {
              query: {
                id?: string[] | undefined
                after?: string | undefined
                per_page?: number | undefined
                order_by?: string | undefined
              }
            } & { header: { 'Skip-Count'?: string | undefined } }
            output: { data: SimulationEvent[]; meta: PaginatedMeta }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { simulation_id: string; simulation_run_id: string } } & {
              query: {
                id?: string[] | undefined
                after?: string | undefined
                per_page?: number | undefined
                order_by?: string | undefined
              }
            } & { header: { 'Skip-Count'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/simulations/:simulation_id/runs/:simulation_run_id/events/:simulation_event_id': {
      $get:
        | {
            input: {
              param: {
                simulation_id: string
                simulation_run_id: string
                simulation_event_id: string
              }
            }
            output: { data: SimulationEvent; meta: Meta }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                simulation_id: string
                simulation_run_id: string
                simulation_event_id: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/simulations/:simulation_id/runs/:simulation_run_id/events/:simulation_event_id/replay': {
      $post:
        | {
            input: {
              param: {
                simulation_id: string
                simulation_run_id: string
                simulation_event_id: string
              }
            }
            output: { data: SimulationEvent; meta: Meta }
            outputFormat: 'json'
            status: 202
          }
        | {
            input: {
              param: {
                simulation_id: string
                simulation_run_id: string
                simulation_event_id: string
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/subscriptions/:subscription_id/history': {
      $get:
        | {
            input: { param: { subscription_id: SubscriptionId } } & {
              query: {
                action?: SubscriptionHistoryActionQuery[] | undefined
                source?: SubscriptionHistorySourceQuery[] | undefined
                actor_type?: SubscriptionHistoryActorTypeQuery[] | undefined
                actor_id?: string[] | undefined
                reason?: SubscriptionHistoryReasonQuery[] | undefined
                occurred_at?: string | undefined
                after?: string | undefined
                per_page?: number | undefined
                order_by?: string | undefined
              }
            } & { header: { 'Skip-Count'?: string | undefined } }
            output: { data: SubscriptionHistory[]; meta: PaginatedMeta }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { subscription_id: SubscriptionId } } & {
              query: {
                action?: SubscriptionHistoryActionQuery[] | undefined
                source?: SubscriptionHistorySourceQuery[] | undefined
                actor_type?: SubscriptionHistoryActorTypeQuery[] | undefined
                actor_id?: string[] | undefined
                reason?: SubscriptionHistoryReasonQuery[] | undefined
                occurred_at?: string | undefined
                after?: string | undefined
                per_page?: number | undefined
                order_by?: string | undefined
              }
            } & { header: { 'Skip-Count'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/subscriptions': {
      $get:
        | {
            input: {
              query: {
                id?: string[] | undefined
                after?: string | undefined
                per_page?: number | undefined
                address_id?: string[] | undefined
                collection_mode?: CollectionModeQuery | undefined
                customer_id?: string[] | undefined
                order_by?: string | undefined
                price_id?: string[] | undefined
                scheduled_change_action?: ScheduledChangeActionQuery[] | undefined
                next_billed_at?: string[] | ({ [x: string]: unknown } | null) | undefined
                status?: SubscriptionStatusQuery[] | undefined
              }
            } & { header: { 'Skip-Count'?: string | undefined } }
            output: { data: Subscription[]; meta: PaginatedMeta }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                id?: string[] | undefined
                after?: string | undefined
                per_page?: number | undefined
                address_id?: string[] | undefined
                collection_mode?: CollectionModeQuery | undefined
                customer_id?: string[] | undefined
                order_by?: string | undefined
                price_id?: string[] | undefined
                scheduled_change_action?: ScheduledChangeActionQuery[] | undefined
                next_billed_at?: string[] | ({ [x: string]: unknown } | null) | undefined
                status?: SubscriptionStatusQuery[] | undefined
              }
            } & { header: { 'Skip-Count'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/subscriptions/:subscription_id': {
      $get:
        | {
            input: { param: { subscription_id: string } } & {
              query: { include?: SubscriptionIncludeEnum[] | undefined }
            }
            output: { data: SubscriptionIncludes; meta: Meta }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { subscription_id: string } } & {
              query: { include?: SubscriptionIncludeEnum[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
      $patch:
        | {
            input: { param: { subscription_id: string } } & { json: SubscriptionUpdate }
            output: { data: Subscription; meta: Meta }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { subscription_id: string } } & { json: SubscriptionUpdate }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/subscriptions/:subscription_id/cancel': {
      $post:
        | {
            input: { param: { subscription_id: string } } & { json: SubscriptionCancel }
            output: { data: Subscription; meta: Meta }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { subscription_id: string } } & { json: SubscriptionCancel }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/subscriptions/:subscription_id/pause': {
      $post:
        | {
            input: { param: { subscription_id: string } } & { json: SubscriptionPause }
            output: { data: Subscription; meta: Meta }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { subscription_id: string } } & { json: SubscriptionPause }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/subscriptions/:subscription_id/resume': {
      $post:
        | {
            input: { param: { subscription_id: string } } & { json: SubscriptionResume }
            output: { data: Subscription; meta: Meta }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { subscription_id: string } } & { json: SubscriptionResume }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/subscriptions/:subscription_id/activate': {
      $post:
        | {
            input: { param: { subscription_id: string } }
            output: { data: Subscription; meta: Meta }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { subscription_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/subscriptions/:subscription_id/update-payment-method-transaction': {
      $get:
        | {
            input: { param: { subscription_id: string } }
            output: { data: SubscriptionTransactionIncludes; meta: Meta }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { subscription_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/subscriptions/:subscription_id/preview': {
      $patch:
        | {
            input: { param: { subscription_id: string } } & { json: SubscriptionUpdate }
            output: { data: SubscriptionPreview; meta: Meta }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { subscription_id: string } } & { json: SubscriptionUpdate }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/subscriptions/:subscription_id/charge': {
      $post:
        | {
            input: { param: { subscription_id: string } } & { json: SubscriptionCharge }
            output: { data: Subscription; meta: Meta }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { subscription_id: string } } & { json: SubscriptionCharge }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/subscriptions/:subscription_id/charge/preview': {
      $post:
        | {
            input: { param: { subscription_id: string } } & { json: SubscriptionCharge }
            output: { data: SubscriptionPreview; meta: Meta }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { subscription_id: string } } & { json: SubscriptionCharge }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/settings/tax': {
      $get:
        | {
            input: {}
            output: { data: TaxSettings; meta: Meta }
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 200 }
      $patch:
        | {
            input: { json: TaxSettingsUpdate }
            output: { data: TaxSettings; meta: Meta }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: TaxSettingsUpdate }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/transactions': {
      $get:
        | {
            input: {
              query: {
                include?: TransactionIncludeQuery[] | undefined
                id?: string[] | undefined
                after?: string | undefined
                billed_at?: string | undefined
                collection_mode?: CollectionMode | undefined
                created_at?: string | undefined
                customer_id?: string[] | undefined
                invoice_number?: string[] | undefined
                origin?: TransactionOriginQuery[] | undefined
                order_by?: string | undefined
                status?: TransactionStatusQuery[] | undefined
                subscription_id?: string[] | ({ [x: string]: unknown } | null) | undefined
                per_page?: number | undefined
                updated_at?: string | undefined
              }
            } & { header: { 'Skip-Count'?: string | undefined } }
            output: { data: TransactionIncludes[]; meta: PaginatedMeta }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                include?: TransactionIncludeQuery[] | undefined
                id?: string[] | undefined
                after?: string | undefined
                billed_at?: string | undefined
                collection_mode?: CollectionMode | undefined
                created_at?: string | undefined
                customer_id?: string[] | undefined
                invoice_number?: string[] | undefined
                origin?: TransactionOriginQuery[] | undefined
                order_by?: string | undefined
                status?: TransactionStatusQuery[] | undefined
                subscription_id?: string[] | ({ [x: string]: unknown } | null) | undefined
                per_page?: number | undefined
                updated_at?: string | undefined
              }
            } & { header: { 'Skip-Count'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { query: { include?: TransactionIncludeQuery[] | undefined } } & {
              json: TransactionCreate
            }
            output: { data: TransactionIncludes; meta: Meta }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { query: { include?: TransactionIncludeQuery[] | undefined } } & {
              json: TransactionCreate
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/transactions/:transaction_id': {
      $get:
        | {
            input: { param: { transaction_id: string } } & {
              query: { include?: TransactionIncludeQuery[] | undefined }
            }
            output: { data: TransactionIncludes; meta: Meta }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { transaction_id: string } } & {
              query: { include?: TransactionIncludeQuery[] | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
      $patch:
        | {
            input: { param: { transaction_id: string } } & {
              query: { include?: TransactionIncludeQuery[] | undefined }
            } & { json: UpdateTransaction }
            output: { data: TransactionIncludes; meta: Meta }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { transaction_id: string } } & {
              query: { include?: TransactionIncludeQuery[] | undefined }
            } & { json: UpdateTransaction }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/transactions/preview': {
      $post:
        | {
            input: { json: TransactionPreviewCreate }
            output: { data: TransactionPreview; meta: Meta }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: TransactionPreviewCreate }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/transactions/:transaction_id/revise': {
      $post:
        | {
            input: { param: { transaction_id: string } } & { json: TransactionRevise }
            output: { data: Transaction; meta: Meta }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { transaction_id: string } } & { json: TransactionRevise }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/transactions/:transaction_id/invoice': {
      $get:
        | {
            input: { param: { transaction_id: string } } & {
              query: { disposition?: Disposition | undefined }
            }
            output: GetInvoicePdfResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { transaction_id: string } } & {
              query: { disposition?: Disposition | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/verifications': {
      $get:
        | {
            input: {
              query: {
                id?: string[] | undefined
                after?: string | undefined
                per_page?: number | undefined
                verification_type?: VerificationType | undefined
                order_by?: string | undefined
              }
            } & { header: { 'Skip-Count'?: string | undefined } }
            output: { data: Verification[]; meta: PaginatedMeta }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                id?: string[] | undefined
                after?: string | undefined
                per_page?: number | undefined
                verification_type?: VerificationType | undefined
                order_by?: string | undefined
              }
            } & { header: { 'Skip-Count'?: string | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/verifications/:verification_id': {
      $get:
        | {
            input: { param: { verification_id: VerificationId } }
            output: { data: Verification; meta: Meta }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { verification_id: VerificationId } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  },
  '/'
>
export default routes
