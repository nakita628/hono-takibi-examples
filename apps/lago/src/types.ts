type Currency =
  | 'AED'
  | 'AFN'
  | 'ALL'
  | 'AMD'
  | 'ANG'
  | 'AOA'
  | 'ARS'
  | 'AUD'
  | 'AWG'
  | 'AZN'
  | 'BAM'
  | 'BBD'
  | 'BDT'
  | 'BGN'
  | 'BIF'
  | 'BMD'
  | 'BND'
  | 'BOB'
  | 'BRL'
  | 'BSD'
  | 'BWP'
  | 'BYN'
  | 'BZD'
  | 'CAD'
  | 'CDF'
  | 'CHF'
  | 'CLF'
  | 'CLP'
  | 'CNY'
  | 'COP'
  | 'CRC'
  | 'CVE'
  | 'CZK'
  | 'DJF'
  | 'DKK'
  | 'DOP'
  | 'DZD'
  | 'EGP'
  | 'ETB'
  | 'EUR'
  | 'FJD'
  | 'FKP'
  | 'GBP'
  | 'GEL'
  | 'GHS'
  | 'GIP'
  | 'GMD'
  | 'GNF'
  | 'GTQ'
  | 'GYD'
  | 'HKD'
  | 'HNL'
  | 'HRK'
  | 'HTG'
  | 'HUF'
  | 'IDR'
  | 'ILS'
  | 'INR'
  | 'ISK'
  | 'JMD'
  | 'JPY'
  | 'KES'
  | 'KGS'
  | 'KHR'
  | 'KMF'
  | 'KRW'
  | 'KYD'
  | 'KZT'
  | 'LAK'
  | 'LBP'
  | 'LKR'
  | 'LRD'
  | 'LSL'
  | 'MAD'
  | 'MDL'
  | 'MGA'
  | 'MKD'
  | 'MMK'
  | 'MNT'
  | 'MOP'
  | 'MRO'
  | 'MUR'
  | 'MVR'
  | 'MWK'
  | 'MXN'
  | 'MYR'
  | 'MZN'
  | 'NAD'
  | 'NGN'
  | 'NIO'
  | 'NOK'
  | 'NPR'
  | 'NZD'
  | 'PAB'
  | 'PEN'
  | 'PGK'
  | 'PHP'
  | 'PKR'
  | 'PLN'
  | 'PYG'
  | 'QAR'
  | 'RON'
  | 'RSD'
  | 'RUB'
  | 'RWF'
  | 'SAR'
  | 'SBD'
  | 'SCR'
  | 'SEK'
  | 'SGD'
  | 'SHP'
  | 'SLL'
  | 'SOS'
  | 'SRD'
  | 'STD'
  | 'SYP'
  | 'SZL'
  | 'THB'
  | 'TJS'
  | 'TND'
  | 'TOP'
  | 'TRY'
  | 'TTD'
  | 'TWD'
  | 'TZS'
  | 'UAH'
  | 'UGX'
  | 'USD'
  | 'UYU'
  | 'UZS'
  | 'VND'
  | 'VUV'
  | 'WST'
  | 'XAF'
  | 'XCD'
  | 'XOF'
  | 'XPF'
  | 'YER'
  | 'ZAR'
  | 'ZMW'
type PaymentTermObject = {
  term_type:
    | 'due_on_receipt'
    | 'net'
    | 'end_of_month'
    | 'net_end_of_month'
    | 'days_end_of_month'
    | 'day_of_month'
  days?: number | undefined
  day_of_month?: number | undefined
  month_offset?: number | undefined
}
type CountryOrNull =
  | null
  | 'AD'
  | 'AE'
  | 'AF'
  | 'AG'
  | 'AI'
  | 'AL'
  | 'AM'
  | 'AO'
  | 'AQ'
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
  | 'BY'
  | 'BZ'
  | 'CA'
  | 'CC'
  | 'CD'
  | 'CF'
  | 'CG'
  | 'CH'
  | 'CI'
  | 'CK'
  | 'CL'
  | 'CM'
  | 'CN'
  | 'CO'
  | 'CR'
  | 'CU'
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
  | 'HT'
  | 'HU'
  | 'ID'
  | 'IE'
  | 'IL'
  | 'IM'
  | 'IN'
  | 'IO'
  | 'IQ'
  | 'IR'
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
  | 'KP'
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
  | 'LY'
  | 'MA'
  | 'MC'
  | 'MD'
  | 'ME'
  | 'MF'
  | 'MG'
  | 'MH'
  | 'MK'
  | 'ML'
  | 'MM'
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
  | 'NI'
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
  | 'RU'
  | 'RW'
  | 'SA'
  | 'SB'
  | 'SC'
  | 'SD'
  | 'SE'
  | 'SG'
  | 'SH'
  | 'SI'
  | 'SJ'
  | 'SK'
  | 'SL'
  | 'SM'
  | 'SN'
  | 'SO'
  | 'SR'
  | 'SS'
  | 'ST'
  | 'SV'
  | 'SX'
  | 'SY'
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
  | 'VE'
  | 'VG'
  | 'VI'
  | 'VN'
  | 'VU'
  | 'WF'
  | 'WS'
  | 'YE'
  | 'YT'
  | 'ZA'
  | 'ZM'
  | 'ZW'
type Timezone =
  | 'UTC'
  | 'Africa/Algiers'
  | 'Africa/Cairo'
  | 'Africa/Casablanca'
  | 'Africa/Harare'
  | 'Africa/Johannesburg'
  | 'Africa/Monrovia'
  | 'Africa/Nairobi'
  | 'America/Argentina/Buenos_Aires'
  | 'America/Bogota'
  | 'America/Caracas'
  | 'America/Chicago'
  | 'America/Chihuahua'
  | 'America/Denver'
  | 'America/Guatemala'
  | 'America/Guyana'
  | 'America/Halifax'
  | 'America/Indiana/Indianapolis'
  | 'America/Juneau'
  | 'America/La_Paz'
  | 'America/Lima'
  | 'America/Los_Angeles'
  | 'America/Mazatlan'
  | 'America/Mexico_City'
  | 'America/Monterrey'
  | 'America/Montevideo'
  | 'America/New_York'
  | 'America/Nuuk'
  | 'America/Phoenix'
  | 'America/Puerto_Rico'
  | 'America/Regina'
  | 'America/Santiago'
  | 'America/Sao_Paulo'
  | 'America/St_Johns'
  | 'America/Tijuana'
  | 'Asia/Almaty'
  | 'Asia/Baghdad'
  | 'Asia/Baku'
  | 'Asia/Bangkok'
  | 'Asia/Chongqing'
  | 'Asia/Colombo'
  | 'Asia/Dhaka'
  | 'Asia/Hong_Kong'
  | 'Asia/Irkutsk'
  | 'Asia/Jakarta'
  | 'Asia/Jerusalem'
  | 'Asia/Kabul'
  | 'Asia/Kamchatka'
  | 'Asia/Karachi'
  | 'Asia/Kathmandu'
  | 'Asia/Kolkata'
  | 'Asia/Krasnoyarsk'
  | 'Asia/Kuala_Lumpur'
  | 'Asia/Kuwait'
  | 'Asia/Magadan'
  | 'Asia/Muscat'
  | 'Asia/Novosibirsk'
  | 'Asia/Riyadh'
  | 'Asia/Seoul'
  | 'Asia/Shanghai'
  | 'Asia/Singapore'
  | 'Asia/Srednekolymsk'
  | 'Asia/Taipei'
  | 'Asia/Tashkent'
  | 'Asia/Tbilisi'
  | 'Asia/Tehran'
  | 'Asia/Tokyo'
  | 'Asia/Ulaanbaatar'
  | 'Asia/Urumqi'
  | 'Asia/Vladivostok'
  | 'Asia/Yakutsk'
  | 'Asia/Yangon'
  | 'Asia/Yekaterinburg'
  | 'Asia/Yerevan'
  | 'Atlantic/Azores'
  | 'Atlantic/Cape_Verde'
  | 'Atlantic/South_Georgia'
  | 'Australia/Adelaide'
  | 'Australia/Brisbane'
  | 'Australia/Darwin'
  | 'Australia/Hobart'
  | 'Australia/Melbourne'
  | 'Australia/Perth'
  | 'Australia/Sydney'
  | 'Europe/Amsterdam'
  | 'Europe/Athens'
  | 'Europe/Belgrade'
  | 'Europe/Berlin'
  | 'Europe/Bratislava'
  | 'Europe/Brussels'
  | 'Europe/Bucharest'
  | 'Europe/Budapest'
  | 'Europe/Copenhagen'
  | 'Europe/Dublin'
  | 'Europe/Helsinki'
  | 'Europe/Istanbul'
  | 'Europe/Kaliningrad'
  | 'Europe/Kyiv'
  | 'Europe/Lisbon'
  | 'Europe/Ljubljana'
  | 'Europe/London'
  | 'Europe/Madrid'
  | 'Europe/Minsk'
  | 'Europe/Moscow'
  | 'Europe/Paris'
  | 'Europe/Prague'
  | 'Europe/Riga'
  | 'Europe/Rome'
  | 'Europe/Samara'
  | 'Europe/Sarajevo'
  | 'Europe/Skopje'
  | 'Europe/Sofia'
  | 'Europe/Stockholm'
  | 'Europe/Tallinn'
  | 'Europe/Vienna'
  | 'Europe/Vilnius'
  | 'Europe/Volgograd'
  | 'Europe/Warsaw'
  | 'Europe/Zagreb'
  | 'Europe/Zurich'
  | 'GMT+12'
  | 'Pacific/Apia'
  | 'Pacific/Auckland'
  | 'Pacific/Chatham'
  | 'Pacific/Fakaofo'
  | 'Pacific/Fiji'
  | 'Pacific/Guadalcanal'
  | 'Pacific/Guam'
  | 'Pacific/Honolulu'
  | 'Pacific/Majuro'
  | 'Pacific/Midway'
  | 'Pacific/Noumea'
  | 'Pacific/Pago_Pago'
  | 'Pacific/Port_Moresby'
  | 'Pacific/Tongatapu'
type BillingEntityObject = {
  lago_id: string
  code: string
  name: string
  default_currency: Currency
  document_locale: string
  document_numbering: 'per_customer' | 'per_billing_entity'
  document_number_prefix: string | null
  finalize_zero_amount_invoice: boolean
  invoice_footer: string | null
  invoice_grace_period: number
  subscription_invoice_issuing_date_anchor: 'current_period_end' | 'next_period_start'
  subscription_invoice_issuing_date_adjustment: 'align_with_finalization_date' | 'keep_anchor'
  is_default: boolean
  payment_term: PaymentTermObject | ({ [x: string]: unknown } | null)
  net_payment_term: number | null
  address_line1: string | null
  address_line2: string | null
  phone: string | null
  city: string | null
  state: string | null
  country: CountryOrNull
  zipcode: string | null
  email: string | null
  legal_name: string | null
  legal_number: string | null
  tax_identification_number: string | null
  timezone: Timezone
  email_settings: ('invoice.finalized' | 'credit_note.created' | 'payment_receipt.created')[]
  eu_tax_management: boolean | null
  einvoicing: boolean
  logo_url: string | null
  created_at: string
  updated_at: string
}
type ApiErrorUnauthorized = { status: number; error: string }
type ApiErrorForbidden = { status: number; error: string; code: string }
type BillingEntityCreateInput = {
  billing_entity: {
    code: string
    name: string
    default_currency?: Currency | undefined
    document_numbering?: 'per_customer' | 'per_billing_entity' | undefined
    document_number_prefix?: (string | null) | undefined
    finalize_zero_amount_invoice?: boolean | undefined
    billing_configuration?:
      | {
          invoice_footer?: string | undefined
          document_locale?: string | undefined
          invoice_grace_period?: number | undefined
          subscription_invoice_issuing_date_anchor?:
            | 'current_period_end'
            | 'next_period_start'
            | undefined
          subscription_invoice_issuing_date_adjustment?:
            | 'align_with_finalization_date'
            | 'keep_anchor'
            | undefined
        }
      | undefined
    payment_term?: PaymentTermObject | ({ [x: string]: unknown } | null) | undefined
    net_payment_term?: number | undefined
    address_line1?: (string | null) | undefined
    address_line2?: (string | null) | undefined
    phone?: (string | null) | undefined
    city?: (string | null) | undefined
    state?: (string | null) | undefined
    country?: CountryOrNull | undefined
    zipcode?: (string | null) | undefined
    email?: (string | null) | undefined
    legal_name?: (string | null) | undefined
    legal_number?: (string | null) | undefined
    tax_identification_number?: (string | null) | undefined
    timezone?: Timezone | undefined
    email_settings?:
      | ('invoice.finalized' | 'credit_note.created' | 'payment_receipt.created')[]
      | undefined
    eu_tax_management?: boolean | undefined
    einvoicing?: boolean | undefined
    logo?: (string | null) | undefined
  }
}
type ApiErrorBadRequest = { status: number; error: string }
type ApiErrorUnprocessableEntity = {
  status: number
  error: string
  code: string
  error_details: { [x: string]: unknown }
}
type TaxObject = {
  lago_id: string
  name: string
  code: string
  description: string | null
  rate: number
  applied_to_organization: boolean
  applied_to_billing_entities_codes?: string[] | undefined
  created_at: string
}
type InvoiceCustomSectionObject = {
  lago_id: string
  name: string
  code: string
  description?: string | undefined
  details?: string | undefined
  display_name?: string | undefined
  applied_to_organization?: boolean | undefined
  organization_id?: string | undefined
  created_at?: string | undefined
}
type BillingEntityObjectExtended = {
  lago_id: string
  code: string
  name: string
  default_currency: Currency
  document_locale: string
  document_numbering: 'per_customer' | 'per_billing_entity'
  document_number_prefix: string | null
  finalize_zero_amount_invoice: boolean
  invoice_footer: string | null
  invoice_grace_period: number
  subscription_invoice_issuing_date_anchor: 'current_period_end' | 'next_period_start'
  subscription_invoice_issuing_date_adjustment: 'align_with_finalization_date' | 'keep_anchor'
  is_default: boolean
  payment_term: PaymentTermObject | ({ [x: string]: unknown } | null)
  net_payment_term: number | null
  address_line1: string | null
  address_line2: string | null
  phone: string | null
  city: string | null
  state: string | null
  country: CountryOrNull
  zipcode: string | null
  email: string | null
  legal_name: string | null
  legal_number: string | null
  tax_identification_number: string | null
  timezone: Timezone
  email_settings: ('invoice.finalized' | 'credit_note.created' | 'payment_receipt.created')[]
  eu_tax_management: boolean | null
  einvoicing: boolean
  logo_url: string | null
  created_at: string
  updated_at: string
  taxes?: TaxObject[] | undefined
  selected_invoice_custom_sections?: InvoiceCustomSectionObject[] | undefined
}
type ApiErrorNotFound = { status: number; error: string; code: string }
type TaxCodes = string[]
type BillingEntityUpdateInput = {
  billing_entity: {
    name?: string | undefined
    default_currency?: Currency | undefined
    document_numbering?: 'per_customer' | 'per_billing_entity' | undefined
    document_number_prefix?: string | undefined
    finalize_zero_amount_invoice?: boolean | undefined
    billing_configuration?:
      | {
          invoice_footer?: string | undefined
          document_locale?: string | undefined
          invoice_grace_period?: number | undefined
          subscription_invoice_issuing_date_anchor?:
            | 'current_period_end'
            | 'next_period_start'
            | undefined
          subscription_invoice_issuing_date_adjustment?:
            | 'align_with_finalization_date'
            | 'keep_anchor'
            | undefined
        }
      | undefined
    payment_term?: PaymentTermObject | ({ [x: string]: unknown } | null) | undefined
    net_payment_term?: number | undefined
    address_line1?: (string | null) | undefined
    address_line2?: (string | null) | undefined
    phone?: (string | null) | undefined
    city?: (string | null) | undefined
    state?: (string | null) | undefined
    country?: CountryOrNull | undefined
    zipcode?: (string | null) | undefined
    email?: (string | null) | undefined
    legal_name?: (string | null) | undefined
    legal_number?: (string | null) | undefined
    tax_identification_number?: (string | null) | undefined
    timezone?: Timezone | undefined
    tax_codes?: TaxCodes | undefined
    email_settings?:
      | ('invoice.finalized' | 'credit_note.created' | 'payment_receipt.created')[]
      | undefined
    eu_tax_management?: boolean | undefined
    einvoicing?: boolean | undefined
    logo?: (string | null) | undefined
    invoice_custom_section_codes?: string[] | undefined
  }
}
type ActivityLogObject = {
  activity_id: string
  user_email: string | null
  activity_type: string
  activity_source: 'api' | 'front' | 'system'
  activity_object: { [x: string]: unknown }
  activity_object_changes: { [x: string]: unknown }
  external_customer_id: string | null
  external_subscription_id: string | null
  resource_id: string
  resource_type: string
  logged_at: string
  created_at: string
}
type PaginationMeta = {
  current_page: number
  next_page?: (number | null) | undefined
  prev_page?: (number | null) | undefined
  total_pages: number
  total_count: number
}
type ActivityLogsPaginated = { activity_logs: ActivityLogObject[]; meta: PaginationMeta }
type ActivityLog = { activity_log: ActivityLogObject }
type AddOnBaseInput = {
  name?: string | undefined
  invoice_display_name?: (string | null) | undefined
  code?: string | undefined
  amount_cents?: number | undefined
  amount_currency?: Currency | undefined
  description?: (string | null) | undefined
  tax_codes?: TaxCodes | undefined
}
type AddOnCreateInput = { add_on: AddOnBaseInput }
type AddOnObject = {
  lago_id: string
  name: string
  invoice_display_name: string | null
  code: string
  amount_cents: number
  amount_currency: Currency
  description: string | null
  created_at: string
  taxes: TaxObject[]
}
type AddOn = { add_on: AddOnObject }
type AddOnsPaginated = { add_ons: AddOnObject[]; meta: PaginationMeta }
type AddOnUpdateInput = { add_on: AddOnBaseInput }
type ApiLogObject = {
  api_version: string
  client: string
  http_method: 'post' | 'put' | 'patch' | 'delete'
  http_status: number
  logged_at: string
  request_body: { [x: string]: unknown }
  request_origin: string
  request_path: string
  created_at: string
  request_id: string
  request_response: { [x: string]: unknown }
}
type ApiLogsPaginated = { api_logs: ApiLogObject[]; meta: PaginationMeta }
type ApiLog = { api_log: ApiLogObject }
type GrossRevenueObject = {
  month: string
  amount_cents: number
  currency: Currency
  invoices_count: number
  billing_entity_id: string
}
type GrossRevenues = { gross_revenues: GrossRevenueObject[] }
type InvoiceCollectionObject = {
  month: string
  payment_status: 'pending' | 'succeeded' | 'failed' | null
  invoices_count: number
  amount_cents: number
  currency: Currency | ({ [x: string]: unknown } | null)
}
type InvoiceCollections = { invoice_collections: InvoiceCollectionObject[] }
type InvoicedUsageObject = { month: string; code: string; amount_cents: number; currency: Currency }
type InvoicedUsages = { invoiced_usages: InvoicedUsageObject[] }
type MrrObject = {
  month: string
  amount_cents: number | null
  currency: Currency | ({ [x: string]: unknown } | null)
}
type Mrrs = { mrrs: MrrObject[] }
type OverdueBalanceObject = {
  month: string
  amount_cents: number
  currency: Currency
  lago_invoice_ids: string[]
  billing_entity_id: string
}
type OverdueBalances = { overdue_balances: OverdueBalanceObject[] }
type UsageObject = {
  organization_id: string
  start_of_period_dt: string
  end_of_period_dt: string
  amount_currency: Currency
  amount_cents: number
  billable_metric_code: string
  units: number
  is_billable_metric_deleted: boolean
}
type Usages = { usages: UsageObject[] }
type CurrencyOrNull =
  | null
  | 'AED'
  | 'AFN'
  | 'ALL'
  | 'AMD'
  | 'ANG'
  | 'AOA'
  | 'ARS'
  | 'AUD'
  | 'AWG'
  | 'AZN'
  | 'BAM'
  | 'BBD'
  | 'BDT'
  | 'BGN'
  | 'BIF'
  | 'BMD'
  | 'BND'
  | 'BOB'
  | 'BRL'
  | 'BSD'
  | 'BWP'
  | 'BYN'
  | 'BZD'
  | 'CAD'
  | 'CDF'
  | 'CHF'
  | 'CLF'
  | 'CLP'
  | 'CNY'
  | 'COP'
  | 'CRC'
  | 'CVE'
  | 'CZK'
  | 'DJF'
  | 'DKK'
  | 'DOP'
  | 'DZD'
  | 'EGP'
  | 'ETB'
  | 'EUR'
  | 'FJD'
  | 'FKP'
  | 'GBP'
  | 'GEL'
  | 'GIP'
  | 'GMD'
  | 'GNF'
  | 'GTQ'
  | 'GYD'
  | 'HKD'
  | 'HNL'
  | 'HRK'
  | 'HTG'
  | 'HUF'
  | 'IDR'
  | 'ILS'
  | 'INR'
  | 'ISK'
  | 'JMD'
  | 'JPY'
  | 'KES'
  | 'KGS'
  | 'KHR'
  | 'KMF'
  | 'KRW'
  | 'KYD'
  | 'KZT'
  | 'LAK'
  | 'LBP'
  | 'LKR'
  | 'LRD'
  | 'LSL'
  | 'MAD'
  | 'MDL'
  | 'MGA'
  | 'MKD'
  | 'MMK'
  | 'MNT'
  | 'MOP'
  | 'MRO'
  | 'MUR'
  | 'MVR'
  | 'MWK'
  | 'MXN'
  | 'MYR'
  | 'MZN'
  | 'NAD'
  | 'NGN'
  | 'NIO'
  | 'NOK'
  | 'NPR'
  | 'NZD'
  | 'PAB'
  | 'PEN'
  | 'PGK'
  | 'PHP'
  | 'PKR'
  | 'PLN'
  | 'PYG'
  | 'QAR'
  | 'RON'
  | 'RSD'
  | 'RUB'
  | 'RWF'
  | 'SAR'
  | 'SBD'
  | 'SCR'
  | 'SEK'
  | 'SGD'
  | 'SHP'
  | 'SLL'
  | 'SOS'
  | 'SRD'
  | 'STD'
  | 'SYP'
  | 'SZL'
  | 'THB'
  | 'TJS'
  | 'TND'
  | 'TOP'
  | 'TRY'
  | 'TTD'
  | 'TWD'
  | 'TZS'
  | 'UAH'
  | 'UGX'
  | 'USD'
  | 'UYU'
  | 'UZS'
  | 'VND'
  | 'VUV'
  | 'WST'
  | 'XAF'
  | 'XCD'
  | 'XOF'
  | 'XPF'
  | 'YER'
  | 'ZAR'
  | 'ZMW'
type AppliedCouponInput = {
  applied_coupon: {
    external_customer_id: string
    coupon_code: string
    frequency?: 'once' | 'recurring' | 'forever' | null | undefined
    frequency_duration?: (number | null) | undefined
    amount_cents?: (number | null) | undefined
    amount_currency?: CurrencyOrNull | undefined
    percentage_rate?: (string | number | null) | undefined
  }
}
type AppliedCouponObject = {
  lago_id: string
  lago_coupon_id: string
  coupon_code: string
  coupon_name: string
  coupon_description?: (string | null) | undefined
  coupon_status: 'active' | 'terminated'
  coupon_deleted_at?: (string | null) | undefined
  lago_customer_id: string
  external_customer_id: string
  status: 'active' | 'terminated'
  amount_cents?: (number | null) | undefined
  amount_cents_remaining?: (number | null) | undefined
  amount_currency?: CurrencyOrNull | undefined
  percentage_rate?: (string | null) | undefined
  frequency: 'once' | 'recurring' | 'forever'
  frequency_duration?: (number | null) | undefined
  frequency_duration_remaining?: (number | null) | undefined
  expiration_at?: (string | null) | undefined
  created_at: string
  terminated_at?: (string | null) | undefined
}
type AppliedCoupon = { applied_coupon: AppliedCouponObject }
type ApiErrorNotAllowed = { status: number; error: string; code: string }
type CreditObject = {
  lago_id: string
  amount_cents: number
  amount_currency: Currency
  before_taxes: boolean
  item: {
    lago_item_id: string
    type: 'coupon' | 'credit_note' | 'invoice'
    code: string
    name: string
    description?: (string | null) | undefined
  }
  invoice: { lago_id: string; payment_status: 'pending' | 'succeeded' | 'failed' }
}
type AppliedCouponObjectExtended = {
  lago_id: string
  lago_coupon_id: string
  coupon_code: string
  coupon_name: string
  coupon_description?: (string | null) | undefined
  coupon_status: 'active' | 'terminated'
  coupon_deleted_at?: (string | null) | undefined
  lago_customer_id: string
  external_customer_id: string
  status: 'active' | 'terminated'
  amount_cents?: (number | null) | undefined
  amount_cents_remaining?: (number | null) | undefined
  amount_currency?: CurrencyOrNull | undefined
  percentage_rate?: (string | null) | undefined
  frequency: 'once' | 'recurring' | 'forever'
  frequency_duration?: (number | null) | undefined
  frequency_duration_remaining?: (number | null) | undefined
  expiration_at?: (string | null) | undefined
  created_at: string
  terminated_at?: (string | null) | undefined
  credits: CreditObject[]
}
type AppliedCouponsPaginated = {
  applied_coupons: AppliedCouponObjectExtended[]
  meta: PaginationMeta
}
type BillableMetricFilterInput = { key: string; values: string[] }
type BillableMetricBaseInput = {
  name?: string | undefined
  code?: string | undefined
  description?: (string | null) | undefined
  recurring?: boolean | undefined
  expression?: (string | null) | undefined
  rounding_function?: 'ceil' | 'floor' | 'round' | null | undefined
  rounding_precision?: (number | null) | undefined
  field_name?: (string | null) | undefined
  aggregation_type?:
    | 'count_agg'
    | 'sum_agg'
    | 'max_agg'
    | 'unique_count_agg'
    | 'weighted_sum_agg'
    | 'latest_agg'
    | undefined
  weighted_interval?: 'seconds' | null | undefined
  filters?: BillableMetricFilterInput[] | undefined
}
type BillableMetricCreateInput = { billable_metric: BillableMetricBaseInput }
type BillableMetricFilterObject = { key: string; values: string[] }
type BillableMetricObject = {
  lago_id: string
  name: string
  code: string
  description: string | null
  recurring: boolean
  rounding_function: 'ceil' | 'floor' | 'round' | null
  rounding_precision: number | null
  created_at: string
  expression: string | null
  field_name: string | null
  aggregation_type:
    | 'count_agg'
    | 'sum_agg'
    | 'max_agg'
    | 'unique_count_agg'
    | 'weighted_sum_agg'
    | 'latest_agg'
  weighted_interval: 'seconds' | null
  filters: BillableMetricFilterObject[]
}
type BillableMetric = { billable_metric: BillableMetricObject }
type BillableMetricsPaginated = { billable_metrics: BillableMetricObject[]; meta: PaginationMeta }
type BillableMetricEvaluateExpressionInput = {
  expression: string
  event: {
    code?: string | undefined
    timestamp?: number | string | undefined
    properties?: { [x: string]: string | number | number } | undefined
  }
}
type BillableMetricEvaluateExpressionResult = { expression_result: { value: string } }
type BillableMetricUpdateInput = { billable_metric: BillableMetricBaseInput }
type FeatureCreateInput = {
  feature: {
    name?: (string | null) | undefined
    description?: (string | null) | undefined
    privileges?:
      | {
          code: string
          name?: (string | null) | undefined
          value_type?: 'integer' | 'boolean' | 'string' | 'select' | undefined
          config?: { select_options?: string[] | undefined } | undefined
        }[]
      | undefined
    code: string
  }
}
type FeaturePrivilegeObject = {
  code: string
  name: string | null
  value_type: 'integer' | 'boolean' | 'string' | 'select'
  config: { select_options?: string[] | undefined }
}
type FeatureObject = {
  code: string
  name: string | null
  description: string | null
  privileges: FeaturePrivilegeObject[]
  created_at: string
}
type Feature = { feature: FeatureObject }
type FeaturesPaginated = { features: FeatureObject[]; meta: PaginationMeta }
type FeatureBaseInput = {
  name?: (string | null) | undefined
  description?: (string | null) | undefined
  privileges?:
    | {
        code: string
        name?: (string | null) | undefined
        value_type?: 'integer' | 'boolean' | 'string' | 'select' | undefined
        config?: { select_options?: string[] | undefined } | undefined
      }[]
    | undefined
}
type FeatureUpdateInput = { feature: FeatureBaseInput }
type CouponBaseInput = {
  name?: string | undefined
  code?: string | undefined
  description?: (string | null) | undefined
  coupon_type?: 'fixed_amount' | 'percentage' | undefined
  amount_cents?: (number | null) | undefined
  amount_currency?: CurrencyOrNull | undefined
  reusable?: boolean | undefined
  percentage_rate?: (string | number | null) | undefined
  frequency?: 'once' | 'recurring' | 'forever' | undefined
  frequency_duration?: (number | null) | undefined
  expiration?: 'no_expiration' | 'time_limit' | undefined
  expiration_at?: (string | null) | undefined
  applies_to?:
    | ({
        plan_codes?: (string[] | null) | undefined
        billable_metric_codes?: (string[] | null) | undefined
      } | null)
    | undefined
}
type CouponCreateInput = { coupon: CouponBaseInput }
type CouponObject = {
  lago_id: string
  name: string
  code: string
  description?: (string | null) | undefined
  coupon_type: 'fixed_amount' | 'percentage'
  amount_cents?: (number | null) | undefined
  amount_currency?: CurrencyOrNull | undefined
  reusable: boolean
  limited_plans: boolean
  plan_codes?: string[] | undefined
  limited_billable_metrics: boolean
  billable_metric_codes?: string[] | undefined
  percentage_rate?: (string | null) | undefined
  frequency: 'once' | 'recurring' | 'forever'
  frequency_duration?: (number | null) | undefined
  expiration: 'no_expiration' | 'time_limit'
  expiration_at?: (string | null) | undefined
  created_at: string
  terminated_at?: (string | null) | undefined
}
type Coupon = { coupon: CouponObject }
type CouponsPaginated = { coupons: CouponObject[]; meta: PaginationMeta }
type CouponUpdateInput = { coupon: CouponBaseInput }
type MetadataInput = { [x: string]: string | null }
type CreditNoteCreateInput = {
  credit_note: {
    invoice_id: string
    reason?:
      | 'duplicated_charge'
      | 'product_unsatisfactory'
      | 'order_change'
      | 'order_cancellation'
      | 'fraudulent_charge'
      | 'other'
      | null
      | undefined
    description?: string | undefined
    credit_amount_cents?: (number | null) | undefined
    refund_amount_cents?: (number | null) | undefined
    offset_amount_cents?: (number | null) | undefined
    items: { fee_id: string; amount_cents: number }[]
    metadata?: MetadataInput | undefined
  }
}
type FeeAmountDetails = {
  plan_amount_cents?: number | undefined
  graduated_ranges?:
    | {
        units: string
        from_value: number
        to_value: number | null
        flat_unit_amount: string
        per_unit_amount: string
        per_unit_total_amount: string
        total_with_flat_amount: string
      }[]
    | undefined
  graduated_percentage_ranges?:
    | {
        units: string
        from_value: number
        to_value: number | null
        flat_unit_amount: string
        rate: string
        per_unit_total_amount: string
        total_with_flat_amount: string
      }[]
    | undefined
  free_units?: string | undefined
  paid_units?: string | undefined
  per_package_size?: number | undefined
  per_package_unit_amount?: string | undefined
  per_unit_total_amount?: string | undefined
  units?: string | undefined
  free_events?: number | undefined
  rate?: string | undefined
  paid_events?: number | undefined
  fixed_fee_unit_amount?: string | undefined
  fixed_fee_total_amount?: string | undefined
  min_max_adjustment_total_amount?: string | undefined
  per_unit_amount?: string | undefined
  flat_unit_amount?: string | undefined
}
type FeeAppliedTaxObject = {
  lago_id: string
  lago_tax_id: string | null
  tax_name: string
  tax_code: string
  tax_rate: number
  tax_description: string | null
  amount_cents: number
  amount_currency: Currency
  created_at: string
}
type PricingUnitDetailsObject = {
  lago_pricing_unit_id: string
  pricing_unit_code: string
  short_name: string
  amount_cents: number
  precise_amount_cents: string
  unit_amount_cents: number
  precise_unit_amount: string
  conversion_rate: string
}
type PresentationBreakdownsObject = {
  presentation_by?: { [x: string]: string } | undefined
  units?: string | undefined
}[]
type FeeObject = {
  lago_id?: (string | null) | undefined
  lago_charge_id?: (string | null) | undefined
  lago_charge_filter_id?: (string | null) | undefined
  lago_fixed_charge_id?: (string | null) | undefined
  lago_invoice_id?: (string | null) | undefined
  lago_true_up_fee_id?: (string | null) | undefined
  lago_true_up_parent_fee_id?: (string | null) | undefined
  lago_original_fee_id?: (string | null) | undefined
  lago_subscription_id?: (string | null) | undefined
  lago_customer_id?: (string | null) | undefined
  external_customer_id?: (string | null) | undefined
  external_subscription_id?: (string | null) | undefined
  amount_cents: number
  precise_amount?: string | undefined
  precise_total_amount?: string | undefined
  amount_currency: Currency
  taxes_amount_cents: number
  taxes_precise_amount?: string | undefined
  taxes_rate: number
  units: string
  precise_unit_amount: string
  total_aggregated_units: string | null
  total_amount_cents: number
  total_amount_currency: Currency
  events_count?: (number | null) | undefined
  pay_in_advance: boolean
  invoiceable: boolean
  from_date?: (string | null) | undefined
  to_date?: (string | null) | undefined
  payment_status: 'pending' | 'succeeded' | 'failed' | 'refunded'
  created_at?: (string | null) | undefined
  succeeded_at?: (string | null) | undefined
  failed_at?: (string | null) | undefined
  refunded_at?: (string | null) | undefined
  event_transaction_id?: (string | null) | undefined
  description?: (string | null) | undefined
  precise_coupons_amount_cents?: string | undefined
  sub_total_excluding_taxes_amount_cents: number
  sub_total_excluding_taxes_precise_amount_cents: string
  amount_details?: FeeAmountDetails | undefined
  self_billed?: boolean | undefined
  item: {
    type: 'charge' | 'fixed_charge' | 'add_on' | 'subscription' | 'credit' | 'commitment'
    code: string
    name: string
    description: string | null
    invoice_display_name: string
    filter_invoice_display_name: string | null
    filters: { [x: string]: string[] } | null
    lago_item_id: string
    item_type: 'AddOn' | 'BillableMetric' | 'Subscription' | 'WalletTransaction'
    grouped_by: { [x: string]: string }
  }
  applied_taxes?: FeeAppliedTaxObject[] | undefined
  pricing_unit_details?: PricingUnitDetailsObject | undefined
  presentation_breakdowns?: PresentationBreakdownsObject | undefined
}
type CreditNoteItemObject = {
  lago_id: string
  amount_cents: number
  precise_amount_cents: string
  amount_currency: Currency
  fee: FeeObject
}
type CreditNoteAppliedTaxObject = {
  lago_id: string
  lago_tax_id: string | null
  tax_name: string
  tax_code: string
  tax_rate: number
  tax_description: string | null
  amount_cents: number
  amount_currency: Currency
  created_at: string
}
type TimezoneOrNull =
  | null
  | 'UTC'
  | 'Africa/Algiers'
  | 'Africa/Cairo'
  | 'Africa/Casablanca'
  | 'Africa/Harare'
  | 'Africa/Johannesburg'
  | 'Africa/Monrovia'
  | 'Africa/Nairobi'
  | 'America/Argentina/Buenos_Aires'
  | 'America/Bogota'
  | 'America/Caracas'
  | 'America/Chicago'
  | 'America/Chihuahua'
  | 'America/Denver'
  | 'America/Godthab'
  | 'America/Guatemala'
  | 'America/Guyana'
  | 'America/Halifax'
  | 'America/Indiana/Indianapolis'
  | 'America/Juneau'
  | 'America/La_Paz'
  | 'America/Lima'
  | 'America/Los_Angeles'
  | 'America/Mazatlan'
  | 'America/Mexico_City'
  | 'America/Monterrey'
  | 'America/Montevideo'
  | 'America/New_York'
  | 'America/Phoenix'
  | 'America/Puerto_Rico'
  | 'America/Regina'
  | 'America/Santiago'
  | 'America/Sao_Paulo'
  | 'America/St_Johns'
  | 'America/Tijuana'
  | 'Asia/Almaty'
  | 'Asia/Baghdad'
  | 'Asia/Baku'
  | 'Asia/Bangkok'
  | 'Asia/Chongqing'
  | 'Asia/Colombo'
  | 'Asia/Dhaka'
  | 'Asia/Hong_Kong'
  | 'Asia/Irkutsk'
  | 'Asia/Jakarta'
  | 'Asia/Jerusalem'
  | 'Asia/Kabul'
  | 'Asia/Kamchatka'
  | 'Asia/Karachi'
  | 'Asia/Kathmandu'
  | 'Asia/Kolkata'
  | 'Asia/Krasnoyarsk'
  | 'Asia/Kuala_Lumpur'
  | 'Asia/Kuwait'
  | 'Asia/Magadan'
  | 'Asia/Muscat'
  | 'Asia/Novosibirsk'
  | 'Asia/Rangoon'
  | 'Asia/Riyadh'
  | 'Asia/Seoul'
  | 'Asia/Shanghai'
  | 'Asia/Singapore'
  | 'Asia/Srednekolymsk'
  | 'Asia/Taipei'
  | 'Asia/Tashkent'
  | 'Asia/Tbilisi'
  | 'Asia/Tehran'
  | 'Asia/Tokyo'
  | 'Asia/Ulaanbaatar'
  | 'Asia/Urumqi'
  | 'Asia/Vladivostok'
  | 'Asia/Yakutsk'
  | 'Asia/Yekaterinburg'
  | 'Asia/Yerevan'
  | 'Atlantic/Azores'
  | 'Atlantic/Cape_Verde'
  | 'Atlantic/South_Georgia'
  | 'Australia/Adelaide'
  | 'Australia/Brisbane'
  | 'Australia/Darwin'
  | 'Australia/Hobart'
  | 'Australia/Melbourne'
  | 'Australia/Perth'
  | 'Australia/Sydney'
  | 'Europe/Amsterdam'
  | 'Europe/Athens'
  | 'Europe/Belgrade'
  | 'Europe/Berlin'
  | 'Europe/Bratislava'
  | 'Europe/Brussels'
  | 'Europe/Bucharest'
  | 'Europe/Budapest'
  | 'Europe/Copenhagen'
  | 'Europe/Dublin'
  | 'Europe/Helsinki'
  | 'Europe/Istanbul'
  | 'Europe/Kaliningrad'
  | 'Europe/Kiev'
  | 'Europe/Lisbon'
  | 'Europe/Ljubljana'
  | 'Europe/London'
  | 'Europe/Madrid'
  | 'Europe/Minsk'
  | 'Europe/Moscow'
  | 'Europe/Paris'
  | 'Europe/Prague'
  | 'Europe/Riga'
  | 'Europe/Rome'
  | 'Europe/Samara'
  | 'Europe/Sarajevo'
  | 'Europe/Skopje'
  | 'Europe/Sofia'
  | 'Europe/Stockholm'
  | 'Europe/Tallinn'
  | 'Europe/Vienna'
  | 'Europe/Vilnius'
  | 'Europe/Volgograd'
  | 'Europe/Warsaw'
  | 'Europe/Zagreb'
  | 'Europe/Zurich'
  | 'GMT+12'
  | 'Pacific/Apia'
  | 'Pacific/Auckland'
  | 'Pacific/Chatham'
  | 'Pacific/Fakaofo'
  | 'Pacific/Fiji'
  | 'Pacific/Guadalcanal'
  | 'Pacific/Guam'
  | 'Pacific/Honolulu'
  | 'Pacific/Majuro'
  | 'Pacific/Midway'
  | 'Pacific/Noumea'
  | 'Pacific/Pago_Pago'
  | 'Pacific/Port_Moresby'
  | 'Pacific/Tongatapu'
type CustomerBillingConfiguration = {
  invoice_grace_period?: (number | null) | undefined
  subscription_invoice_issuing_date_anchor?:
    | 'current_period_end'
    | 'next_period_start'
    | null
    | undefined
  subscription_invoice_issuing_date_adjustment?:
    | 'align_with_finalization_date'
    | 'keep_anchor'
    | null
    | undefined
  payment_provider?:
    | 'stripe'
    | 'adyen'
    | 'cashfree'
    | 'flutterwave'
    | 'gocardless'
    | 'moneyhash'
    | null
    | undefined
  payment_provider_code?: (string | null) | undefined
  provider_customer_id?: string | undefined
  sync?: boolean | undefined
  sync_with_provider?: boolean | undefined
  document_locale?: (string | null) | undefined
  provider_payment_methods?: (string[] | null) | undefined
}
type Address = {
  address_line1?: (string | null) | undefined
  address_line2?: (string | null) | undefined
  city?: (string | null) | undefined
  country?: CountryOrNull | undefined
  state?: (string | null) | undefined
  zipcode?: (string | null) | undefined
}
type CustomerMetadata = {
  lago_id: string
  key: string
  value: string
  display_in_invoice: boolean
  created_at: string
}
type IntegrationCustomer = {
  lago_id: string
  type: 'netsuite' | 'anrok' | 'avalara' | 'xero' | 'hubspot' | 'salesforce'
  integration_code: string
  code: string | null
  is_default: boolean
  category: 'payment' | 'tax' | 'accounting' | 'crm' | null
  external_customer_id: string | null
  sync_with_provider?: (boolean | null) | undefined
  subsidiary_id?: string | undefined
  targeted_object?: (string | null) | undefined
  email?: (string | null) | undefined
}
type CustomerObject = {
  lago_id: string
  sequential_id: number
  slug: string
  external_id: string
  billing_entity_code: string
  address_line1: string | null
  address_line2: string | null
  applicable_timezone: Timezone
  city: string | null
  country: CountryOrNull
  currency: CurrencyOrNull
  email: string | null
  legal_name: string | null
  legal_number: string | null
  logo_url: string | null
  name: string | null
  firstname: string | null
  lastname: string | null
  account_type: 'customer' | 'partner'
  customer_type: 'company' | 'individual' | null
  phone: string | null
  state: string | null
  tax_identification_number: string | null
  timezone: TimezoneOrNull
  url: string | null
  zipcode: string | null
  payment_term: PaymentTermObject | ({ [x: string]: unknown } | null)
  net_payment_term: number | null
  external_salesforce_id: string | null
  created_at: string
  updated_at: string
  finalize_zero_amount_invoice: 'inherit' | 'skip' | 'finalize'
  skip_invoice_custom_sections: boolean
  billing_configuration: CustomerBillingConfiguration
  shipping_address: Address
  metadata: CustomerMetadata[]
  integration_customers?: IntegrationCustomer[] | undefined
}
type MetadataObject = { [x: string]: string | null } | null
type CreditNoteErrorDetailsObject = {
  lago_id: string
  error_code: 'not_provided' | 'tax_error' | 'tax_voiding_error' | 'invoice_generation_error'
  details: { [x: string]: unknown }
}
type CreditNoteExtendedObject = {
  lago_id: string
  billing_entity_code: string
  sequential_id: number
  number: string
  lago_invoice_id: string
  invoice_number: string
  purchase_order_number: string | null
  issuing_date: string
  credit_status: 'available' | 'consumed' | 'voided' | null
  refund_status: 'pending' | 'succeeded' | 'failed' | null
  reason:
    | 'duplicated_charge'
    | 'product_unsatisfactory'
    | 'order_change'
    | 'order_cancellation'
    | 'fraudulent_charge'
    | 'other'
  description: string | null
  currency: Currency
  total_amount_cents: number
  precise_total_amount_cents: string
  taxes_amount_cents: number
  precise_taxes_amount_cents: string
  taxes_rate: number
  sub_total_excluding_taxes_amount_cents: number
  balance_amount_cents: number
  credit_amount_cents: number
  refund_amount_cents: number
  offset_amount_cents: number
  coupons_adjustment_amount_cents: number
  created_at: string
  updated_at: string
  file_url: string | null
  xml_url: string | null
  items?: CreditNoteItemObject[] | undefined
  applied_taxes?: CreditNoteAppliedTaxObject[] | undefined
  self_billed: boolean
  customer?: CustomerObject | undefined
  metadata?: MetadataObject | undefined
  error_details?: CreditNoteErrorDetailsObject[] | undefined
}
type CreditNoteExtended = { credit_note: CreditNoteExtendedObject }
type CreditNoteObject = {
  lago_id: string
  billing_entity_code: string
  sequential_id: number
  number: string
  lago_invoice_id: string
  invoice_number: string
  purchase_order_number: string | null
  issuing_date: string
  credit_status: 'available' | 'consumed' | 'voided' | null
  refund_status: 'pending' | 'succeeded' | 'failed' | null
  reason:
    | 'duplicated_charge'
    | 'product_unsatisfactory'
    | 'order_change'
    | 'order_cancellation'
    | 'fraudulent_charge'
    | 'other'
  description: string | null
  currency: Currency
  total_amount_cents: number
  precise_total_amount_cents: string
  taxes_amount_cents: number
  precise_taxes_amount_cents: string
  taxes_rate: number
  sub_total_excluding_taxes_amount_cents: number
  balance_amount_cents: number
  credit_amount_cents: number
  refund_amount_cents: number
  offset_amount_cents: number
  coupons_adjustment_amount_cents: number
  created_at: string
  updated_at: string
  file_url: string | null
  xml_url: string | null
  items?: CreditNoteItemObject[] | undefined
  applied_taxes?: CreditNoteAppliedTaxObject[] | undefined
  self_billed: boolean
  customer?: CustomerObject | undefined
  metadata?: MetadataObject | undefined
  error_details?: CreditNoteErrorDetailsObject[] | undefined
}
type CreditNotesPaginated = { credit_notes: CreditNoteObject[]; meta: PaginationMeta }
type CreditNoteUpdateInput = {
  credit_note: {
    refund_status?: 'pending' | 'succeeded' | 'failed' | undefined
    metadata?: MetadataInput | undefined
  }
}
type CreditNote = { credit_note: CreditNoteObject }
type CreditNoteEstimateInput = {
  credit_note: { invoice_id: string; items: { fee_id: string; amount_cents: number }[] }
}
type CreditNoteEstimated = {
  estimated_credit_note: {
    lago_invoice_id: string
    invoice_number: string
    currency: Currency
    taxes_amount_cents: number
    precise_taxes_amount_cents: string
    taxes_rate: number
    sub_total_excluding_taxes_amount_cents: number
    max_creditable_amount_cents: number
    max_refundable_amount_cents: number
    max_offsettable_amount_cents: number
    coupons_adjustment_amount_cents: number
    precise_coupons_adjustment_amount_cents: string
    items: { amount_cents: number; lago_fee_id: string | null }[]
    applied_taxes?:
      | {
          lago_tax_id?: string | undefined
          tax_name?: string | undefined
          tax_code?: string | undefined
          tax_rate?: number | undefined
          tax_description?: string | undefined
          base_amount_cents?: number | undefined
          amount_cents?: number | undefined
          amount_currency?: Currency | undefined
        }[]
      | undefined
  }
}
type CreditNoteMetadataResponse = { metadata: MetadataObject }
type CustomerCreateInput = {
  customer: {
    external_id: string
    billing_entity_code?: (string | null) | undefined
    address_line1?: (string | null) | undefined
    address_line2?: (string | null) | undefined
    city?: (string | null) | undefined
    country?: CountryOrNull | undefined
    currency?: CurrencyOrNull | undefined
    email?: (string | null) | undefined
    legal_name?: (string | null) | undefined
    legal_number?: (string | null) | undefined
    logo_url?: (string | null) | undefined
    name?: (string | null) | undefined
    firstname?: (string | null) | undefined
    lastname?: (string | null) | undefined
    account_type?: 'customer' | 'partner' | undefined
    customer_type?: 'company' | 'individual' | null | undefined
    phone?: (string | null) | undefined
    state?: (string | null) | undefined
    tax_codes?: TaxCodes | undefined
    tax_identification_number?: (string | null) | undefined
    timezone?: TimezoneOrNull | undefined
    url?: (string | null) | undefined
    zipcode?: (string | null) | undefined
    payment_term?: PaymentTermObject | ({ [x: string]: unknown } | null) | undefined
    net_payment_term?: (number | null) | undefined
    external_salesforce_id?: (string | null) | undefined
    finalize_zero_amount_invoice?: 'inherit' | 'skip' | 'finalize' | undefined
    billing_configuration?: CustomerBillingConfiguration | undefined
    shipping_address?:
      | {
          address_line1?: { [x: string]: unknown } | undefined
          address_line2?: { [x: string]: unknown } | undefined
          city?: { [x: string]: unknown } | undefined
          country?: CountryOrNull | undefined
          state?: { [x: string]: unknown } | undefined
          zipcode?: { [x: string]: unknown } | undefined
        }
      | undefined
    integration_customers?:
      | {
          id?: string | undefined
          integration_type?:
            | 'netsuite'
            | 'anrok'
            | 'avalara'
            | 'xero'
            | 'hubspot'
            | 'salesforce'
            | undefined
          integration_code?: string | undefined
          code?: string | undefined
          external_customer_id?: string | undefined
          sync_with_provider?: boolean | undefined
          subsidiary_id?: string | undefined
          targeted_object?: (string | null) | undefined
        }[]
      | undefined
    metadata?:
      | {
          id?: string | undefined
          key: string
          value: string
          display_in_invoice?: boolean | undefined
        }[]
      | undefined
    skip_invoice_custom_sections?: boolean | undefined
    invoice_custom_section_codes?: string[] | undefined
  }
}
type ErrorDetailObject = {
  lago_id: string | null
  error_code: string
  details: { [x: string]: string }
}
type CustomerObjectExtended = {
  lago_id: string
  sequential_id: number
  slug: string
  external_id: string
  billing_entity_code: string
  address_line1: string | null
  address_line2: string | null
  applicable_timezone: Timezone
  city: string | null
  country: CountryOrNull
  currency: CurrencyOrNull
  email: string | null
  legal_name: string | null
  legal_number: string | null
  logo_url: string | null
  name: string | null
  firstname: string | null
  lastname: string | null
  account_type: 'customer' | 'partner'
  customer_type: 'company' | 'individual' | null
  phone: string | null
  state: string | null
  tax_identification_number: string | null
  timezone: TimezoneOrNull
  url: string | null
  zipcode: string | null
  payment_term: PaymentTermObject | ({ [x: string]: unknown } | null)
  net_payment_term: number | null
  external_salesforce_id: string | null
  created_at: string
  updated_at: string
  finalize_zero_amount_invoice: 'inherit' | 'skip' | 'finalize'
  skip_invoice_custom_sections: boolean
  billing_configuration: CustomerBillingConfiguration
  shipping_address: Address
  metadata: CustomerMetadata[]
  integration_customers?: IntegrationCustomer[] | undefined
  taxes?: TaxObject[] | undefined
  applicable_invoice_custom_sections?: InvoiceCustomSectionObject[] | undefined
  error_details?: ErrorDetailObject[] | undefined
}
type Customer = { customer: CustomerObjectExtended }
type Country =
  | 'AD'
  | 'AE'
  | 'AF'
  | 'AG'
  | 'AI'
  | 'AL'
  | 'AM'
  | 'AO'
  | 'AQ'
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
  | 'BY'
  | 'BZ'
  | 'CA'
  | 'CC'
  | 'CD'
  | 'CF'
  | 'CG'
  | 'CH'
  | 'CI'
  | 'CK'
  | 'CL'
  | 'CM'
  | 'CN'
  | 'CO'
  | 'CR'
  | 'CU'
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
  | 'HT'
  | 'HU'
  | 'ID'
  | 'IE'
  | 'IL'
  | 'IM'
  | 'IN'
  | 'IO'
  | 'IQ'
  | 'IR'
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
  | 'KP'
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
  | 'LY'
  | 'MA'
  | 'MC'
  | 'MD'
  | 'ME'
  | 'MF'
  | 'MG'
  | 'MH'
  | 'MK'
  | 'ML'
  | 'MM'
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
  | 'NI'
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
  | 'RU'
  | 'RW'
  | 'SA'
  | 'SB'
  | 'SC'
  | 'SD'
  | 'SE'
  | 'SG'
  | 'SH'
  | 'SI'
  | 'SJ'
  | 'SK'
  | 'SL'
  | 'SM'
  | 'SN'
  | 'SO'
  | 'SR'
  | 'SS'
  | 'ST'
  | 'SV'
  | 'SX'
  | 'SY'
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
  | 'VE'
  | 'VG'
  | 'VI'
  | 'VN'
  | 'VU'
  | 'WF'
  | 'WS'
  | 'YE'
  | 'YT'
  | 'ZA'
  | 'ZM'
  | 'ZW'
type CustomersPaginated = { customers: CustomerObjectExtended[]; meta: PaginationMeta }
type InvoiceMetadataObject = {
  lago_id?: string | undefined
  key?: string | undefined
  value?: string | undefined
  created_at?: string | undefined
}
type InvoiceAppliedTaxObject = {
  lago_id: string
  lago_tax_id: string | null
  tax_name: string
  tax_code: string
  tax_rate: number
  tax_description: string | null
  amount_cents: number
  amount_currency: Currency
  created_at: string
}
type InvoiceAppliedInvoiceCustomSectionObject = {
  lago_id: string
  lago_invoice_id: string
  code: string
  details: string
  display_name: string
  created_at: string
}
type UsageThresholdObject = {
  lago_id: string
  threshold_display_name: string | null
  amount_cents: number
  recurring: boolean
  created_at: string
  updated_at: string
}
type AppliedUsageThresholdObject = {
  lifetime_usage_amount_cents: number
  created_at: string
  usage_threshold: UsageThresholdObject
}
type InvoiceObject = {
  lago_id: string
  billing_entity_code: string
  sequential_id: number | null
  number: string
  purchase_order_number: string | null
  issuing_date: string
  payment_dispute_lost_at: string | null
  payment_due_date: string | null
  payment_overdue: boolean
  payment_term: PaymentTermObject | ({ [x: string]: unknown } | null)
  net_payment_term: number | null
  invoice_type:
    | 'subscription'
    | 'add_on'
    | 'credit'
    | 'one_off'
    | 'advance_charges'
    | 'progressive_billing'
  status: 'draft' | 'finalized' | 'voided' | 'failed' | 'pending' | 'deleted'
  payment_status: 'pending' | 'succeeded' | 'failed'
  currency: Currency
  fees_amount_cents: number
  coupons_amount_cents: number
  credit_notes_amount_cents: number
  sub_total_excluding_taxes_amount_cents: number
  taxes_amount_cents: number
  sub_total_including_taxes_amount_cents: number
  prepaid_credit_amount_cents: number
  prepaid_granted_credit_amount_cents: number | null
  prepaid_purchased_credit_amount_cents: number | null
  progressive_billing_credit_amount_cents: number
  total_amount_cents: number
  total_paid_amount_cents: number
  total_offsetted_credit_note_amount_cents: number
  total_due_amount_cents: number
  version_number: number
  self_billed: boolean
  file_url: string | null
  xml_url: string | null
  web_url: string | null
  created_at: string
  updated_at: string
  voided_at: string | null
  customer?: CustomerObject | undefined
  metadata?: InvoiceMetadataObject[] | undefined
  applied_taxes?: InvoiceAppliedTaxObject[] | undefined
  applied_invoice_custom_sections?: InvoiceAppliedInvoiceCustomSectionObject[] | undefined
  applied_usage_thresholds?: AppliedUsageThresholdObject[] | undefined
}
type InvoicesPaginated = { invoices: InvoiceObject[]; meta: PaginationMeta }
type PaymentMethodObject = {
  lago_id: string
  is_default: boolean
  payment_provider_code: string | null
  payment_provider_name: string | null
  payment_provider_type:
    | null
    | 'adyen'
    | 'cashfree'
    | 'gocardless'
    | 'stripe'
    | 'flutterwave'
    | 'moneyhash'
  provider_method_id: string
  created_at: string
}
type PaymentObject = {
  lago_id: string
  lago_customer_id: string
  external_customer_id: string
  invoice_ids: string[]
  invoice_numbers: string[]
  lago_payable_id: string
  payable_type: 'Invoice' | 'PaymentRequest'
  amount_cents: number
  amount_currency: Currency
  status: string
  payment_status: null | 'succeeded' | 'failed' | 'pending' | 'processing'
  type: 'manual' | 'provider'
  reference: string | null
  payment_provider_code: string | null
  payment_provider_type:
    | null
    | 'adyen'
    | 'cashfree'
    | 'gocardless'
    | 'stripe'
    | 'flutterwave'
    | 'moneyhash'
  external_payment_id: string | null
  provider_payment_id: string | null
  provider_customer_id: string | null
  next_action: { [x: string]: unknown }
  created_at: string
  payment_method?: PaymentMethodObject | undefined
}
type PaymentsPaginated = { payments: PaymentObject[]; meta: PaginationMeta }
type CustomerBaseObject = {
  lago_id: string
  sequential_id: number
  slug: string
  external_id: string
  billing_entity_code: string
  address_line1: string | null
  address_line2: string | null
  applicable_timezone: Timezone
  city: string | null
  country: CountryOrNull
  currency: CurrencyOrNull
  email: string | null
  legal_name: string | null
  legal_number: string | null
  logo_url: string | null
  name: string | null
  firstname: string | null
  lastname: string | null
  account_type: 'customer' | 'partner'
  customer_type: 'company' | 'individual' | null
  phone: string | null
  state: string | null
  tax_identification_number: string | null
  timezone: TimezoneOrNull
  url: string | null
  zipcode: string | null
  payment_term: PaymentTermObject | ({ [x: string]: unknown } | null)
  net_payment_term: number | null
  external_salesforce_id: string | null
  created_at: string
  updated_at: string
  finalize_zero_amount_invoice: 'inherit' | 'skip' | 'finalize'
  skip_invoice_custom_sections: boolean
  billing_configuration: CustomerBillingConfiguration
  shipping_address: Address
  metadata: CustomerMetadata[]
}
type InvoiceBaseObject = {
  lago_id: string
  billing_entity_code: string
  sequential_id: number | null
  number: string
  purchase_order_number: string | null
  issuing_date: string
  payment_dispute_lost_at: string | null
  payment_due_date: string | null
  payment_overdue: boolean
  payment_term: PaymentTermObject | ({ [x: string]: unknown } | null)
  net_payment_term: number | null
  invoice_type:
    | 'subscription'
    | 'add_on'
    | 'credit'
    | 'one_off'
    | 'advance_charges'
    | 'progressive_billing'
  status: 'draft' | 'finalized' | 'voided' | 'failed' | 'pending' | 'deleted'
  payment_status: 'pending' | 'succeeded' | 'failed'
  currency: Currency
  fees_amount_cents: number
  coupons_amount_cents: number
  credit_notes_amount_cents: number
  sub_total_excluding_taxes_amount_cents: number
  taxes_amount_cents: number
  sub_total_including_taxes_amount_cents: number
  prepaid_credit_amount_cents: number
  prepaid_granted_credit_amount_cents: number | null
  prepaid_purchased_credit_amount_cents: number | null
  progressive_billing_credit_amount_cents: number
  total_amount_cents: number
  total_paid_amount_cents: number
  total_offsetted_credit_note_amount_cents: number
  total_due_amount_cents: number
  version_number: number
  self_billed: boolean
  file_url: string | null
  xml_url: string | null
  web_url: string | null
  created_at: string
  updated_at: string
  voided_at: string | null
}
type PaymentRequestObject = {
  lago_id: string
  email: string | null
  amount_cents: number
  amount_currency: Currency
  payment_status: 'pending' | 'succeeded' | 'failed'
  created_at: string
  customer: CustomerBaseObject
  invoices: InvoiceBaseObject[]
}
type PaymentRequestsPaginated = { payment_requests: PaymentRequestObject[]; meta: PaginationMeta }
type AppliedInvoiceCustomSectionObject = {
  lago_id: string
  created_at: string
  invoice_custom_section_id?: string | undefined
  invoice_custom_section: InvoiceCustomSectionObject
}
type PaymentMethodReference = {
  payment_method_type?: 'provider' | 'manual' | undefined
  payment_method_id?: string | undefined
}
type SubscriptionActivationRuleObject = {
  lago_id: string
  type: 'payment'
  timeout_hours: number
  status:
    | 'inactive'
    | 'pending'
    | 'satisfied'
    | 'declined'
    | 'failed'
    | 'expired'
    | 'not_applicable'
  expires_at: string | null
  created_at: string
  updated_at: string
}
type SubscriptionObject = {
  lago_id: string
  external_id: string
  lago_customer_id: string
  external_customer_id: string
  billing_entity_code?: string | undefined
  billing_time: 'calendar' | 'anniversary'
  name: string | null
  plan_code: string
  plan_amount_cents: number
  plan_amount_currency: Currency
  status: 'active' | 'canceled' | 'incomplete' | 'pending' | 'terminated'
  created_at: string
  canceled_at: string | null
  started_at: string | null
  ending_at: string | null
  subscription_at: string
  terminated_at: string | null
  previous_plan_code: string | null
  next_plan_code: string | null
  downgrade_plan_date: string | null
  trial_ended_at: string | null
  current_billing_period_started_at: string | null
  current_billing_period_ending_at: string | null
  on_termination_credit_note: 'credit' | 'refund' | 'offset' | 'skip'
  on_termination_invoice: 'generate' | 'skip'
  applied_invoice_custom_sections?: AppliedInvoiceCustomSectionObject[] | undefined
  payment_method: PaymentMethodReference
  consolidate_invoice: boolean
  progressive_billing_disabled: boolean
  cancellation_reason: 'payment_failed' | 'timeout' | 'manual'
  activated_at: string | null
  activation_rules: SubscriptionActivationRuleObject[]
  purchase_order_number: string | null
  payment_term: PaymentTermObject | ({ [x: string]: unknown } | null)
}
type SubscriptionsPaginated = { subscriptions: SubscriptionObject[]; meta: PaginationMeta }
type WalletFeeTypeEnum = 'charge' | 'subscription' | 'commitment' | 'fixed_charge' | 'credit'
type InvoiceCustomSectionInput = {
  skip_invoice_custom_sections?: boolean | undefined
  invoice_custom_section_codes?: string[] | undefined
}
type WalletCreateInput = {
  wallet: {
    name?: (string | null) | undefined
    code?: (string | null) | undefined
    priority?: number | undefined
    rate_amount: string
    currency?: Currency | undefined
    paid_credits?: (string | null) | undefined
    granted_credits?: (string | null) | undefined
    external_customer_id: string
    billing_entity_code?: string | undefined
    expiration_at?: (string | null) | undefined
    invoice_requires_successful_payment?: boolean | undefined
    transaction_metadata?:
      | ({ key?: string | undefined; value?: string | undefined }[] | null)
      | undefined
    transaction_name?: (string | null) | undefined
    transaction_priority?: number | undefined
    purchase_order_number?: (string | null) | undefined
    payment_term?: PaymentTermObject | ({ [x: string]: unknown } | null) | undefined
    applies_to?:
      | ({
          fee_types?: (WalletFeeTypeEnum[] | null) | undefined
          billable_metric_codes?: (string[] | null) | undefined
        } | null)
      | undefined
    paid_top_up_min_amount_cents?: (number | null) | undefined
    paid_top_up_max_amount_cents?: (number | null) | undefined
    ignore_paid_top_up_limits_on_creation?: (boolean | null) | undefined
    invoice_custom_section?: InvoiceCustomSectionInput | undefined
    recurring_transaction_rules?:
      | (
          | {
              paid_credits?: (string | null) | undefined
              granted_credits?: (string | null) | undefined
              grants_target_top_up?: (boolean | null) | undefined
              method?: 'fixed' | 'target' | undefined
              trigger: 'interval' | 'threshold'
              interval?: 'weekly' | 'monthly' | 'quarterly' | 'semiannual' | 'yearly' | undefined
              started_at?: (string | null) | undefined
              expiration_at?: (string | null) | undefined
              threshold_credits?: string | undefined
              target_ongoing_balance?: string | undefined
              invoice_requires_successful_payment?: boolean | undefined
              transaction_metadata?:
                | { key?: string | undefined; value?: string | undefined }[]
                | undefined
              transaction_name?: (string | null) | undefined
              purchase_order_number?: (string | null) | undefined
              ignore_paid_top_up_limits?: boolean | undefined
              invoice_custom_section?: InvoiceCustomSectionInput | undefined
              payment_method?: PaymentMethodReference | undefined
            }[]
          | null
        )
      | undefined
    payment_method?: PaymentMethodReference | undefined
    metadata?: MetadataInput | undefined
  }
}
type WalletRecurringTransactionRule = {
  lago_id: string
  trigger: 'interval' | 'threshold'
  method: 'fixed' | 'target'
  interval: 'weekly' | 'monthly' | 'quarterly' | 'semiannual' | 'yearly' | null
  status: 'active' | 'terminated'
  threshold_credits: string
  paid_credits: string
  granted_credits: string
  grants_target_top_up: boolean | null
  started_at: string | null
  target_ongoing_balance: string | null
  created_at: string
  expiration_at: string | null
  invoice_requires_successful_payment: boolean
  transaction_metadata: { key?: string | undefined; value?: string | undefined }[]
  transaction_name: string | null
  ignore_paid_top_up_limits: boolean
  applied_invoice_custom_sections: AppliedInvoiceCustomSectionObject[]
  payment_method: PaymentMethodReference
  purchase_order_number: string | null
}
type WalletObject = {
  lago_id: string
  lago_customer_id: string
  external_customer_id: string
  billing_entity_code: string
  status: 'active' | 'terminated'
  currency: Currency
  name: string | null
  code: string | null
  priority: number
  rate_amount: string
  credits_balance: string
  balance_cents: number
  consumed_credits: string
  created_at: string
  expiration_at: string | null
  last_balance_sync_at: string | null
  last_consumed_credit_at: string | null
  terminated_at: string | null
  invoice_requires_successful_payment: boolean
  applies_to?:
    | { fee_types?: WalletFeeTypeEnum[] | undefined; billable_metric_codes?: string[] | undefined }
    | undefined
  recurring_transaction_rules?: WalletRecurringTransactionRule[] | undefined
  ongoing_balance_cents: number
  ongoing_usage_balance_cents: number
  credits_ongoing_balance: string
  credits_ongoing_usage_balance: string
  paid_top_up_min_amount_cents: number | null
  paid_top_up_max_amount_cents: number | null
  applied_invoice_custom_sections?: AppliedInvoiceCustomSectionObject[] | undefined
  payment_method: PaymentMethodReference
  purchase_order_number: string | null
  payment_term: PaymentTermObject | ({ [x: string]: unknown } | null)
  metadata?: MetadataObject | undefined
}
type Wallet = { wallet: WalletObject }
type WalletsPaginated = { wallets: WalletObject[]; meta: PaginationMeta }
type WalletUpdateInput = {
  wallet: {
    name?: (string | null) | undefined
    code?: (string | null) | undefined
    priority?: number | undefined
    expiration_at?: (string | null) | undefined
    invoice_requires_successful_payment?: boolean | undefined
    paid_top_up_min_amount_cents?: (number | null) | undefined
    paid_top_up_max_amount_cents?: (number | null) | undefined
    billing_entity_code?: string | undefined
    purchase_order_number?: (string | null) | undefined
    payment_term?: PaymentTermObject | ({ [x: string]: unknown } | null) | undefined
    invoice_custom_section?: InvoiceCustomSectionInput | undefined
    recurring_transaction_rules?:
      | {
          lago_id?: string | undefined
          trigger: 'interval' | 'threshold'
          method?: 'fixed' | 'target' | undefined
          interval?: 'weekly' | 'monthly' | 'quarterly' | 'semiannual' | 'yearly' | undefined
          threshold_credits?: string | undefined
          paid_credits?: (string | null) | undefined
          granted_credits?: (string | null) | undefined
          grants_target_top_up?: (boolean | null) | undefined
          started_at?: (string | null) | undefined
          expiration_at?: (string | null) | undefined
          target_ongoing_balance?: string | undefined
          invoice_requires_successful_payment?: boolean | undefined
          transaction_metadata?:
            | { key?: string | undefined; value?: string | undefined }[]
            | undefined
          transaction_name?: (string | null) | undefined
          purchase_order_number?: (string | null) | undefined
          ignore_paid_top_up_limits?: boolean | undefined
          invoice_custom_section?: InvoiceCustomSectionInput | undefined
          payment_method?: PaymentMethodReference | undefined
        }[]
      | undefined
    payment_method?: PaymentMethodReference | undefined
    applies_to?:
      | ({
          fee_types?: (WalletFeeTypeEnum[] | null) | undefined
          billable_metric_codes?: (string[] | null) | undefined
        } | null)
      | undefined
    metadata?: MetadataInput | undefined
  }
}
type WalletMetadataResponse = { metadata: MetadataObject }
type AlertThresholdObject = {
  code?: (string | null) | undefined
  notify_on?: ('triggered' | 'resolved')[] | undefined
  recurring?: boolean | undefined
  value: string
}
type WalletAlertObject = {
  lago_id: string
  lago_organization_id: string
  external_subscription_id: { [x: string]: unknown } | null
  lago_wallet_id: string
  wallet_code: string
  billable_metric: { [x: string]: unknown } | null
  alert_type:
    | 'wallet_balance_amount'
    | 'wallet_credits_balance'
    | 'wallet_ongoing_balance_amount'
    | 'wallet_credits_ongoing_balance'
  code: string
  name: string | null
  direction: 'increasing' | 'decreasing'
  previous_value: string
  last_processed_at: string | null
  thresholds: AlertThresholdObject[]
  created_at: string
}
type WalletAlerts = { alerts: WalletAlertObject[]; meta?: PaginationMeta | undefined }
type AlertThresholdInput = {
  code?: (string | null) | undefined
  notify_on?: ('triggered' | 'resolved')[] | undefined
  recurring?: boolean | undefined
  value: number | string
}
type WalletAlertCreateInput = {
  alert: {
    code: string
    name?: (string | null) | undefined
    thresholds?: AlertThresholdInput[] | undefined
    alert_type:
      | 'wallet_balance_amount'
      | 'wallet_credits_balance'
      | 'wallet_ongoing_balance_amount'
      | 'wallet_credits_ongoing_balance'
  }
}
type WalletAlertBatchCreateInput = {
  alerts: {
    code: string
    name?: (string | null) | undefined
    thresholds?: AlertThresholdInput[] | undefined
    alert_type:
      | 'wallet_balance_amount'
      | 'wallet_credits_balance'
      | 'wallet_ongoing_balance_amount'
      | 'wallet_credits_ongoing_balance'
  }[]
}
type WalletAlert = { alert: WalletAlertObject }
type WalletAlertUpdateInput = {
  alert: {
    code?: string | undefined
    name?: (string | null) | undefined
    thresholds?: AlertThresholdInput[] | undefined
  }
}
type UsagePricingUnitDetailsObject = {
  amount_cents: number
  short_name: string
  conversion_rate: string
} | null
type ChargeModelEnum =
  | 'dynamic'
  | 'graduated'
  | 'graduated_percentage'
  | 'package'
  | 'percentage'
  | 'standard'
  | 'volume'
type CustomerChargeFiltersUsageObject = {
  units: string
  total_aggregated_units: string
  amount_cents: number
  events_count: number
  invoice_display_name?: (string | null) | undefined
  pricing_unit_details?: UsagePricingUnitDetailsObject | undefined
  values: { [x: string]: string[] } | null
  presentation_breakdowns?: PresentationBreakdownsObject | undefined
}[]
type CustomerChargeGroupedUsageObject = {
  amount_cents: number
  events_count: number
  units: string
  total_aggregated_units: string
  pricing_unit_details?: UsagePricingUnitDetailsObject | undefined
  grouped_by: { [x: string]: string }
  filters?: CustomerChargeFiltersUsageObject | undefined
  presentation_breakdowns?: PresentationBreakdownsObject | undefined
}[]
type CustomerChargeUsageObject = {
  units: string
  total_aggregated_units: string
  events_count: number
  amount_cents: number
  amount_currency: Currency
  pricing_unit_details?: UsagePricingUnitDetailsObject | undefined
  charge: {
    lago_id: string
    code: string
    charge_model: ChargeModelEnum
    invoice_display_name?: (string | null) | undefined
  }
  billable_metric: {
    lago_id: string
    name: string
    code: string
    aggregation_type:
      | 'count_agg'
      | 'sum_agg'
      | 'max_agg'
      | 'unique_count_agg'
      | 'weighted_sum_agg'
      | 'latest_agg'
  }
  filters?: CustomerChargeFiltersUsageObject | undefined
  grouped_usage?: CustomerChargeGroupedUsageObject | undefined
  presentation_breakdowns?: PresentationBreakdownsObject | undefined
}
type CustomerUsageObject = {
  from_datetime: string
  to_datetime: string
  issuing_date: string
  lago_invoice_id: string | null
  currency: Currency
  amount_cents: number
  taxes_amount_cents: number
  total_amount_cents: number
  charges_usage: CustomerChargeUsageObject[]
}
type CustomerUsage = { customer_usage: CustomerUsageObject }
type ProjectedUsagePricingUnitDetailsObject = {
  amount_cents: number
  projected_amount_cents: number
  short_name: string
  conversion_rate: string
} | null
type CustomerProjectedChargeFiltersUsageObject = {
  units: string
  projected_units: string
  amount_cents: number
  projected_amount_cents: number
  events_count: number
  invoice_display_name?: (string | null) | undefined
  pricing_unit_details?: ProjectedUsagePricingUnitDetailsObject | undefined
  values: { [x: string]: string[] } | null
  presentation_breakdowns?: PresentationBreakdownsObject | undefined
  projected_presentation_breakdowns?: PresentationBreakdownsObject | undefined
}[]
type CustomerProjectedChargeGroupedUsageObject = {
  amount_cents: number
  projected_amount_cents: number
  events_count: number
  units: string
  projected_units: string
  pricing_unit_details?: ProjectedUsagePricingUnitDetailsObject | undefined
  grouped_by: { [x: string]: string }
  filters?: CustomerProjectedChargeFiltersUsageObject | undefined
  presentation_breakdowns?: PresentationBreakdownsObject | undefined
  projected_presentation_breakdowns?: PresentationBreakdownsObject | undefined
}[]
type CustomerProjectedChargeUsageObject = {
  units: string
  projected_units: string
  events_count: number
  amount_cents: number
  projected_amount_cents: number
  amount_currency: Currency
  pricing_unit_details?: ProjectedUsagePricingUnitDetailsObject | undefined
  charge: {
    lago_id: string
    charge_model: ChargeModelEnum
    invoice_display_name?: (string | null) | undefined
  }
  billable_metric: {
    lago_id: string
    name: string
    code: string
    aggregation_type:
      | 'count_agg'
      | 'sum_agg'
      | 'max_agg'
      | 'unique_count_agg'
      | 'weighted_sum_agg'
      | 'latest_agg'
  }
  filters?: CustomerProjectedChargeFiltersUsageObject | undefined
  grouped_usage: CustomerProjectedChargeGroupedUsageObject
  presentation_breakdowns?: PresentationBreakdownsObject | undefined
  projected_presentation_breakdowns?: PresentationBreakdownsObject | undefined
}
type CustomerProjectedUsageObject = {
  from_datetime: string
  to_datetime: string
  issuing_date: string
  lago_invoice_id: string | null
  currency: Currency
  amount_cents: number
  projected_amount_cents: number
  taxes_amount_cents: number
  total_amount_cents: number
  charges_usage: CustomerProjectedChargeUsageObject[]
}
type CustomerProjectedUsage = { customer_projected_usage: CustomerProjectedUsageObject }
type CustomerPastUsage = { usage_periods: CustomerUsageObject[]; meta: PaginationMeta }
type AttributedUsageChargeUsageObject = {
  lago_charge_id: string
  charge_code: string
  billable_metric_code: string
  lago_charge_filter_id: string | null
  charge_filter_values: { [x: string]: string[] } | null
  charge_filter_invoice_display_name: string | null
  units: string
  amount_cents: number | null
  precise_amount_cents: string | null
  events_count: number
}
type AttributedUsageRowObject = {
  value: string
  rank: number
  amount_cents: number | null
  precise_amount_cents: string | null
  events_count: number
  split_charge_units: string | null
  charges_usage: AttributedUsageChargeUsageObject[]
}
type AttributedUsageObject = {
  lago_subscription_id: string
  external_subscription_id: string
  group_by: string
  basis: 'units' | 'amount'
  from_datetime: string
  to_datetime: string
  currency: Currency
  split_filters_count: number | null
  rows: AttributedUsageRowObject[]
  unattributed: {
    amount_cents: number | null
    precise_amount_cents: string | null
    events_count: number
    split_charge_units: string | null
    charges_usage: AttributedUsageChargeUsageObject[]
  }
  totals: {
    amount_cents: number | null
    precise_amount_cents: string | null
    events_count: number
    split_charge_units: string | null
    charges_usage: AttributedUsageChargeUsageObject[]
  }
}
type AttributedUsage = { attributed_usage: AttributedUsageObject; meta: PaginationMeta }
type ApiErrorAttributedUsageQueryLimit = {
  status: number
  error: string
  code: 'too_many_groups' | 'query_timeout' | 'memory_limit_exceeded'
}
type CustomerCheckoutUrl = {
  lago_customer_id: string
  external_customer_id: string
  payment_provider: string
  payment_provider_code?: string | undefined
  checkout_url?: string | undefined
}
type PaymentMethodsPaginated = { payment_methods: PaymentMethodObject[]; meta: PaginationMeta }
type PaymentMethod = { payment_method: PaymentMethodObject }
type EventInputObject = {
  transaction_id: string
  external_subscription_id: string
  code: string
  timestamp?: number | string | undefined
  precise_total_amount_cents?: (string | null) | undefined
  properties?:
    | ({
        operation_type?: 'add' | 'remove' | undefined
        target_wallet_code?: (string | null) | undefined
      } | null)
    | undefined
}
type EventInput = { event: EventInputObject }
type EventCreated = {
  event: {
    lago_id: string | null
    transaction_id: string
    lago_customer_id: { [x: string]: unknown } | null
    code: string
    timestamp: string
    precise_total_amount_cents: string | null
    properties: { operation_type?: 'add' | 'remove' | undefined }
    lago_subscription_id: { [x: string]: unknown } | null
    external_subscription_id: string
    created_at: string | null
  }
}
type EventObject = {
  lago_id: string | null
  transaction_id: string
  lago_customer_id: string | null
  code: string
  timestamp: string
  precise_total_amount_cents: string | null
  properties: { operation_type?: 'add' | 'remove' | undefined }
  lago_subscription_id: string | null
  external_subscription_id: string
  created_at: string | null
}
type EventsPaginated = { events: EventObject[]; meta: PaginationMeta }
type EventBatchInput = { events: EventInputObject[] }
type EventsCreated = {
  events: {
    lago_id: string | null
    transaction_id: string
    lago_customer_id: { [x: string]: unknown } | null
    code: string
    timestamp: string
    precise_total_amount_cents: string | null
    properties: { operation_type?: 'add' | 'remove' | undefined }
    lago_subscription_id: { [x: string]: unknown } | null
    external_subscription_id: string
    created_at: string | null
  }[]
}
type EventEstimateFeesInput = {
  event: {
    code: string
    external_subscription_id: string
    precise_total_amount_cents?: (string | null) | undefined
    properties?: { target_wallet_code?: (string | null) | undefined } | undefined
  }
}
type Fees = { fees: FeeObject[] }
type EventEstimateInstantFeesInputObject = {
  code: string
  external_subscription_id: string
  properties?: { [x: string]: unknown } | undefined
  transaction_id?: (string | null) | undefined
}
type EventEstimateInstantFeesInput = { event: EventEstimateInstantFeesInputObject }
type FeeEstimateObject = {
  lago_id?: ({ [x: string]: unknown } | null) | undefined
  lago_charge_id?: string | undefined
  lago_charge_filter_id?: (string | null) | undefined
  lago_invoice_id?: ({ [x: string]: unknown } | null) | undefined
  lago_true_up_fee_id?: ({ [x: string]: unknown } | null) | undefined
  lago_true_up_parent_fee_id?: ({ [x: string]: unknown } | null) | undefined
  lago_subscription_id?: string | undefined
  lago_customer_id?: string | undefined
  external_customer_id?: string | undefined
  external_subscription_id?: string | undefined
  amount_cents: string
  precise_amount?: string | undefined
  precise_total_amount?: string | undefined
  amount_currency: Currency
  taxes_amount_cents: number
  taxes_precise_amount?: number | undefined
  taxes_rate: number
  units: string
  description?: ({ [x: string]: unknown } | null) | undefined
  precise_unit_amount: string
  precise_coupons_amount_cents?: string | undefined
  total_amount_cents: string
  total_amount_currency: Currency
  events_count?: number | undefined
  pay_in_advance: boolean
  invoiceable: boolean
  payment_status: 'pending'
  created_at?: ({ [x: string]: unknown } | null) | undefined
  succeeded_at?: ({ [x: string]: unknown } | null) | undefined
  failed_at?: ({ [x: string]: unknown } | null) | undefined
  refunded_at?: ({ [x: string]: unknown } | null) | undefined
  event_transaction_id?: string | undefined
  amount_details?: ({ [x: string]: unknown } | null) | undefined
  item: {
    type: 'charge'
    code: string
    name: string
    description?: (string | null) | undefined
    invoice_display_name?: string | undefined
    filter_invoice_display_name?: (string | null) | undefined
    filters?: ({ [x: string]: string[] } | null) | undefined
    lago_item_id: string
    item_type: 'BillableMetric'
    grouped_by?: { [x: string]: string } | undefined
  }
}
type FeesEstimate = { fees: FeeEstimateObject[] }
type EventBatchEstimateInstantFeesInput = { events: EventEstimateInstantFeesInputObject[] }
type Event = { event: EventObject }
type FeesPaginated = { fees: FeeObject[]; meta: PaginationMeta }
type Fee = { fee: FeeObject }
type FeeUpdateInput = { fee: { payment_status: 'pending' | 'succeeded' | 'failed' | 'refunded' } }
type InvoiceOneOffCreateInput = {
  invoice: {
    external_customer_id: string
    billing_entity_code?: string | undefined
    currency?: Currency | undefined
    skip_psp?: (boolean | null) | undefined
    purchase_order_number?: (string | null) | undefined
    payment_term?: PaymentTermObject | ({ [x: string]: unknown } | null) | undefined
    fees: {
      add_on_code: string
      invoice_display_name?: string | undefined
      unit_amount_cents?: (number | null) | undefined
      units?: (string | number | null) | undefined
      description?: (string | null) | undefined
      from_datetime?: string | undefined
      to_datetime?: string | undefined
      tax_codes?: TaxCodes | undefined
    }[]
    invoice_custom_section?: InvoiceCustomSectionInput | undefined
    payment_method?: PaymentMethodReference | undefined
  }
}
type BillingPeriodObject = {
  lago_subscription_id: string
  external_subscription_id: string
  lago_plan_id: string
  subscription_from_datetime: string
  subscription_to_datetime: string
  charges_from_datetime: string
  charges_to_datetime: string
  fixed_charges_from_datetime?: (string | null) | undefined
  fixed_charges_to_datetime?: (string | null) | undefined
  invoicing_reason:
    | 'subscription_starting'
    | 'subscription_periodic'
    | 'subscription_terminating'
    | 'in_advance_charge'
    | 'in_advance_charge_periodic'
    | 'progressive_billing'
}
type InvoiceObjectExtended = {
  lago_id: string
  billing_entity_code: string
  sequential_id: number | null
  number: string
  purchase_order_number: string | null
  issuing_date: string
  payment_dispute_lost_at: string | null
  payment_due_date: string | null
  payment_overdue: boolean
  payment_term: PaymentTermObject | ({ [x: string]: unknown } | null)
  net_payment_term: number | null
  invoice_type:
    | 'subscription'
    | 'add_on'
    | 'credit'
    | 'one_off'
    | 'advance_charges'
    | 'progressive_billing'
  status: 'draft' | 'finalized' | 'voided' | 'failed' | 'pending' | 'deleted'
  payment_status: 'pending' | 'succeeded' | 'failed'
  currency: Currency
  fees_amount_cents: number
  coupons_amount_cents: number
  credit_notes_amount_cents: number
  sub_total_excluding_taxes_amount_cents: number
  taxes_amount_cents: number
  sub_total_including_taxes_amount_cents: number
  prepaid_credit_amount_cents: number
  prepaid_granted_credit_amount_cents: number | null
  prepaid_purchased_credit_amount_cents: number | null
  progressive_billing_credit_amount_cents: number
  total_amount_cents: number
  total_paid_amount_cents: number
  total_offsetted_credit_note_amount_cents: number
  total_due_amount_cents: number
  version_number: number
  self_billed: boolean
  file_url: string | null
  xml_url: string | null
  web_url: string | null
  created_at: string
  updated_at: string
  voided_at: string | null
  customer?: CustomerObject | undefined
  metadata?: InvoiceMetadataObject[] | undefined
  applied_taxes?: InvoiceAppliedTaxObject[] | undefined
  applied_invoice_custom_sections?: InvoiceAppliedInvoiceCustomSectionObject[] | undefined
  applied_usage_thresholds?: AppliedUsageThresholdObject[] | undefined
  billing_periods?: BillingPeriodObject[] | undefined
  credits?: CreditObject[] | undefined
  fees?: FeeObject[] | undefined
  subscriptions?: SubscriptionObject[] | undefined
  error_details?: ErrorDetailObject[] | undefined
}
type Invoice = { invoice: InvoiceObjectExtended }
type InvoiceUpdateInput = {
  invoice: {
    payment_status?: 'pending' | 'succeeded' | 'failed' | undefined
    metadata?:
      | { id?: string | undefined; key?: string | undefined; value?: string | undefined }[]
      | undefined
  }
}
type InvoicePaymentUrl = {
  invoice_payment_details?:
    | {
        lago_customer_id?: string | undefined
        lago_invoice_id?: string | undefined
        external_customer_id?: string | undefined
        payment_provider?: string | undefined
        payment_url?: string | undefined
      }
    | undefined
}
type InvoicePreviewInput = {
  customer: {
    address_line1?: string | undefined
    address_line2?: (string | null) | undefined
    city?: string | undefined
    country?: Country | undefined
    external_id?: string | undefined
    integration_customers?:
      | {
          integration_type: 'anrok' | 'avalara' | 'xero' | 'hubspot' | 'salesforce'
          integration_code: string
        }[]
      | undefined
    name?: string | undefined
    currency?: Currency | undefined
    shipping_address?: Address | undefined
    state?: string | undefined
    zipcode?: string | undefined
    tax_identification_number?: string | undefined
    timezone?: Timezone | undefined
  }
  plan_code?: string | undefined
  subscription_at?: string | undefined
  billing_time?: 'calendar' | 'anniversary' | undefined
  coupons?:
    | {
        name?: string | undefined
        code: string
        coupon_type?: 'fixed_amount' | 'percentage' | undefined
        amount_cents?: (number | null) | undefined
        amount_currency?: CurrencyOrNull | undefined
        percentage_rate?: (string | null) | undefined
        frequency?: 'once' | 'recurring' | 'forever' | undefined
        frequency_duration?: (number | null) | undefined
      }[]
    | undefined
  subscriptions?:
    | { external_ids: string[]; plan_code?: string | undefined; terminated_at?: string | undefined }
    | undefined
  billing_entity_code?: string | undefined
  payment_term?: PaymentTermObject | ({ [x: string]: unknown } | null) | undefined
}
type InvoiceVoidInput = {
  generate_credit_note?: boolean | undefined
  refund_amount?: number | undefined
  credit_amount?: number | undefined
}
type OrderFormStatusEnum = 'generated' | 'signed' | 'expired' | 'voided'
type OrderFormVoidReasonEnum = null | 'manual' | 'expired' | 'invalid'
type OrderFormObject = {
  lago_id: string
  number: string
  status: OrderFormStatusEnum
  void_reason: OrderFormVoidReasonEnum
  expires_at: string | null
  signed_at: string | null
  voided_at: string | null
  signed_document_url: string | null
  lago_organization_id: string
  lago_customer_id: string
  lago_quote_id: string
  lago_quote_version_id: string
  created_at: string
  updated_at: string
}
type OrderFormsPaginated = { order_forms: OrderFormObject[]; meta: PaginationMeta }
type OrderForm = { order_form: OrderFormObject }
type OrderExecutionModeEnum = 'execute_in_lago' | 'order_only'
type OrderFormMarkAsSignedInput = {
  order_form?:
    | {
        signed_document?: string | undefined
        execution_mode?: OrderExecutionModeEnum | undefined
        execute_at?: string | undefined
      }
    | undefined
}
type OrderStatusEnum = 'created' | 'executed' | 'failed'
type QuoteOrderTypeEnum = 'subscription_creation' | 'subscription_amendment' | 'one_off'
type OrderExecutionModeEnumOrNull = null | 'execute_in_lago' | 'order_only'
type OrderExecutionRecordObject = {
  executed_at: string | null
  execution_mode: OrderExecutionModeEnumOrNull
  invoice_id: string | null
  subscription_ids: string[]
  terminated_subscription_ids: string[]
  applied_coupon_ids: string[]
  wallet_ids: string[]
  errors: string[]
}
type QuoteBillingItemAddOnObject = {
  id: string
  localId: string
  type: 'add_on'
  payload: {
    code?: string | undefined
    units?: number | undefined
    unitAmountCents?: number | undefined
    totalAmountCents?: number | undefined
    fromDatetime?: (string | null) | undefined
    toDatetime?: (string | null) | undefined
  }
  overrides?:
    | {
        description?: string | undefined
        units?: number | undefined
        unitAmountCents?: number | undefined
        totalAmountCents?: number | undefined
        invoiceDisplayName?: string | undefined
        fromDatetime?: (string | null) | undefined
        toDatetime?: (string | null) | undefined
      }
    | undefined
}
type QuoteBillingItemPlanObject = {
  id: string
  localId?: (string | null) | undefined
  type: 'plan'
  payload: {
    code?: string | undefined
    subscriptionExternalId?: (string | null) | undefined
    subscriptionName?: (string | null) | undefined
    billingTime?: null | 'calendar' | 'anniversary' | undefined
    startDate?: (string | null) | undefined
    endDate?: (string | null) | undefined
    paymentMethodId?: (string | null) | undefined
    charges?:
      | (
          | {
              id?: string | undefined
              billableMetric?: { code?: string | undefined } | undefined
              chargeModel?:
                | null
                | 'standard'
                | 'graduated'
                | 'graduated_percentage'
                | 'package'
                | 'percentage'
                | 'volume'
                | 'custom'
                | 'dynamic'
                | undefined
            }[]
          | null
        )
      | undefined
    fixedCharges?:
      | (
          | {
              id?: string | undefined
              addOn?: { code?: string | undefined } | undefined
              chargeModel?: null | 'standard' | 'graduated' | 'volume' | undefined
            }[]
          | null
        )
      | undefined
  }
  overrides?:
    | ({
        amountCents?: (number | null) | undefined
        amountCurrency?: CurrencyOrNull | undefined
        invoiceDisplayName?: (string | null) | undefined
        name?: (string | null) | undefined
        description?: (string | null) | undefined
        trialPeriod?: (number | null) | undefined
        minimumCommitment?:
          | ({
              amountCents?: (number | null) | undefined
              invoiceDisplayName?: (string | null) | undefined
            } | null)
          | undefined
        usageThresholds?:
          | (
              | {
                  amountCents: number
                  recurring?: (boolean | null) | undefined
                  thresholdDisplayName?: (string | null) | undefined
                }[]
              | null
            )
          | undefined
        charges?:
          | (
              | {
                  billableMetricCode: string
                  chargeModel?:
                    | null
                    | 'standard'
                    | 'graduated'
                    | 'graduated_percentage'
                    | 'package'
                    | 'percentage'
                    | 'volume'
                    | 'custom'
                    | 'dynamic'
                    | undefined
                  properties?: ({ [x: string]: unknown } | null) | undefined
                  minAmountCents?: (number | null) | undefined
                  invoiceDisplayName?: (string | null) | undefined
                }[]
              | null
            )
          | undefined
        fixedCharges?:
          | (
              | {
                  addOnCode: string
                  units?: (string | null) | undefined
                  properties?: ({ [x: string]: unknown } | null) | undefined
                  invoiceDisplayName?: (string | null) | undefined
                }[]
              | null
            )
          | undefined
      } | null)
    | undefined
}
type QuoteBillingItemCouponObject = {
  id: string
  localId: string
  type: 'coupon'
  payload: {
    code?: string | undefined
    type?: 'fixed_amount' | 'percentage' | undefined
    amountCents?: (number | null) | undefined
    currency?: CurrencyOrNull | undefined
    percentageRate?: (number | null) | undefined
    frequency?: null | 'once' | 'recurring' | 'forever' | undefined
    frequencyDuration?: (number | null) | undefined
  }
  overrides?:
    | ({
        amountCents?: (number | null) | undefined
        amountCurrency?: CurrencyOrNull | undefined
        percentageRate?: (number | null) | undefined
        frequency?: null | 'once' | 'recurring' | 'forever' | undefined
        frequencyDuration?: (number | null) | undefined
      } | null)
    | undefined
}
type QuoteBillingItemWalletCreditObject = {
  localId: string
  type: 'wallet_credit'
  payload: {
    paidCredits?: (string | null) | undefined
    grantedCredits?: (string | null) | undefined
    rateAmount?: (string | null) | undefined
    currency?: CurrencyOrNull | undefined
    expirationAt?: (string | null) | undefined
    appliesTo?:
      | ({
          feeTypes?:
            | (
                | (
                    | 'charge'
                    | 'add_on'
                    | 'subscription'
                    | 'credit'
                    | 'commitment'
                    | 'fixed_charge'
                    | 'product'
                  )[]
                | null
              )
            | undefined
          billableMetricCodes?: (string[] | null) | undefined
        } | null)
      | undefined
    recurringTransactionRules?:
      | (
          | {
              trigger?: null | 'interval' | 'threshold' | undefined
              interval?:
                | null
                | 'weekly'
                | 'monthly'
                | 'quarterly'
                | 'semiannual'
                | 'yearly'
                | undefined
              thresholdCredits?: (string | null) | undefined
              method?: null | 'fixed' | 'target' | undefined
              targetOngoingBalance?: (string | null) | undefined
              grantsTargetTopUp?: (boolean | null) | undefined
              paidCredits?: (string | null) | undefined
              grantedCredits?: (string | null) | undefined
              startedAt?: (string | null) | undefined
              expirationAt?: (string | null) | undefined
              transactionName?: (string | null) | undefined
              invoiceRequiresSuccessfulPayment?: (boolean | null) | undefined
            }[]
          | null
        )
      | undefined
  }
}
type QuoteBillingItems = {
  addOns?: QuoteBillingItemAddOnObject[] | undefined
  plans?: QuoteBillingItemPlanObject[] | undefined
  coupons?: QuoteBillingItemCouponObject[] | undefined
  walletCredits?: QuoteBillingItemWalletCreditObject[] | undefined
} | null
type OrderObjectExtended = {
  lago_id: string
  number: string
  status: OrderStatusEnum
  order_type: QuoteOrderTypeEnum
  execution_mode: OrderExecutionModeEnumOrNull
  currency: CurrencyOrNull
  executed_at: string | null
  execution_record: OrderExecutionRecordObject
  lago_organization_id: string
  lago_customer_id: string
  lago_order_form_id: string
  created_at: string
  updated_at: string
  billing_snapshot: QuoteBillingItems
}
type OrdersPaginated = { orders: OrderObjectExtended[]; meta: PaginationMeta }
type Order = { order: OrderObjectExtended }
type OrderExecuteInput = {
  order?: { execution_mode?: OrderExecutionModeEnum | undefined } | undefined
}
type OrganizationBillingConfiguration = {
  invoice_footer?: (string | null) | undefined
  invoice_grace_period?: number | undefined
  document_locale?: string | undefined
}
type OrganizationObject = {
  lago_id: string
  name: string
  slug: string
  created_at: string
  webhook_url: string
  webhook_urls: string[]
  country: CountryOrNull
  default_currency: Currency
  address_line1: string | null
  address_line2: string | null
  state: string | null
  zipcode: string | null
  email: string | null
  city: string | null
  legal_name: string | null
  legal_number: string | null
  document_numbering: 'per_customer' | 'per_organization'
  document_number_prefix: string
  payment_term: PaymentTermObject | ({ [x: string]: unknown } | null)
  net_payment_term: number | null
  tax_identification_number: string | null
  timezone: Timezone
  email_settings: ('invoice.finalized' | 'credit_note.created' | 'payment_receipt.created')[]
  customer_portal_locked_fields: (
    | 'customer_type'
    | 'document_locale'
    | 'email'
    | 'firstname'
    | 'lastname'
    | 'legal_name'
    | 'name'
    | 'tax_identification_number'
    | 'address_line1'
    | 'address_line2'
    | 'city'
    | 'country'
    | 'state'
    | 'zipcode'
    | 'shipping_address'
  )[]
  billing_configuration: OrganizationBillingConfiguration
  taxes?: TaxObject[] | undefined
  finalize_zero_amount_invoice: boolean
  document_url_expiration_days: number
  events_store: 'clickhouse' | 'postgres'
}
type Organization = { organization: OrganizationObject }
type OrganizationUpdateInput = {
  organization: {
    webhook_url?: string | undefined
    country?: CountryOrNull | undefined
    default_currency?: Currency | undefined
    address_line1?: (string | null) | undefined
    address_line2?: (string | null) | undefined
    state?: (string | null) | undefined
    zipcode?: (string | null) | undefined
    email?: (string | null) | undefined
    city?: (string | null) | undefined
    legal_name?: (string | null) | undefined
    legal_number?: (string | null) | undefined
    document_numbering?: 'per_customer' | 'per_organization' | undefined
    document_number_prefix?: string | undefined
    net_payment_term?: number | undefined
    tax_identification_number?: (string | null) | undefined
    timezone?: Timezone | undefined
    email_settings?:
      | ('invoice.finalized' | 'credit_note.created' | 'payment_receipt.created')[]
      | undefined
    customer_portal_locked_fields?:
      | (
          | 'customer_type'
          | 'document_locale'
          | 'email'
          | 'firstname'
          | 'lastname'
          | 'legal_name'
          | 'name'
          | 'tax_identification_number'
          | 'address_line1'
          | 'address_line2'
          | 'city'
          | 'country'
          | 'state'
          | 'zipcode'
          | 'shipping_address'
        )[]
      | undefined
    billing_configuration?: OrganizationBillingConfiguration | undefined
    finalize_zero_amount_invoice?: boolean | undefined
    document_url_expiration_days?: number | undefined
    slug?: string | undefined
  }
}
type PaymentReceiptObject = {
  lago_id: string
  created_at: string
  number: string
  file_url: string | null
  xml_url: string | null
  payment: PaymentObject
}
type PaymentReceiptsPaginated = { payment_receipts: PaymentReceiptObject[]; meta: PaginationMeta }
type PaymentReceipt = { payment_receipt: PaymentReceiptObject }
type PaymentRequestCreateInput = {
  payment_request: {
    external_customer_id: string
    email?: string | undefined
    lago_invoice_ids: string[]
    payment_method?: PaymentMethodReference | undefined
  }
}
type PaymentRequest = { payment_request: PaymentRequestObject }
type PaymentCreateInput = {
  payment: {
    invoice_id: string
    amount_cents: number
    reference: string
    paid_at?: string | undefined
  }
}
type Payment = { payment: PaymentObject }
type MinimumCommitmentInput = {
  amount_cents: number
  invoice_display_name?: string | undefined
  tax_codes?: TaxCodes | undefined
} | null
type ChargeObjectProperties = {
  grouped_by?: string[] | undefined
  pricing_group_keys?: string[] | undefined
  graduated_ranges?:
    | {
        from_value: number
        to_value: number | null
        flat_amount: string
        per_unit_amount: string
      }[]
    | undefined
  graduated_percentage_ranges?:
    | { from_value: number; to_value: number | null; rate: string; flat_amount: string }[]
    | undefined
  amount?: string | undefined
  free_units?: number | undefined
  package_size?: number | undefined
  rate?: string | undefined
  fixed_amount?: string | undefined
  free_units_per_events?: (number | null) | undefined
  free_units_per_total_aggregation?: (string | null) | undefined
  per_transaction_max_amount?: (string | null) | undefined
  per_transaction_min_amount?: (string | null) | undefined
  volume_ranges?:
    | {
        from_value: number
        to_value: number | null
        flat_amount: string
        per_unit_amount: string
      }[]
    | undefined
  presentation_group_keys?:
    | {
        value?: string | undefined
        options?: { display_in_invoice?: boolean | undefined } | undefined
      }[]
    | undefined
}
type ChargeProperties = {
  grouped_by?: string[] | undefined
  pricing_group_keys?: string[] | undefined
  graduated_ranges?:
    | {
        from_value: number
        to_value: number | null
        flat_amount: string
        per_unit_amount: string
      }[]
    | undefined
  graduated_percentage_ranges?:
    | { from_value: number; to_value: number | null; rate: string; flat_amount: string }[]
    | undefined
  amount?: string | undefined
  free_units?: number | undefined
  package_size?: number | undefined
  rate?: string | undefined
  fixed_amount?: string | undefined
  free_units_per_events?: (number | null) | undefined
  free_units_per_total_aggregation?: (string | null) | undefined
  per_transaction_max_amount?: (string | null) | undefined
  per_transaction_min_amount?: (string | null) | undefined
  volume_ranges?:
    | {
        from_value: number
        to_value: number | null
        flat_amount: string
        per_unit_amount: string
      }[]
    | undefined
}
type ChargeFilterInput = {
  invoice_display_name?: (string | null) | undefined
  properties?: ChargeProperties | undefined
  values: { [x: string]: string[] }
}
type FixedChargeProperties = {
  amount?: string | undefined
  graduated_ranges?:
    | {
        from_value: number
        to_value: number | null
        flat_amount: string
        per_unit_amount: string
      }[]
    | undefined
  volume_ranges?:
    | {
        from_value: number
        to_value: number | null
        flat_amount: string
        per_unit_amount: string
      }[]
    | undefined
}
type UsageThresholdInput = {
  threshold_display_name?: (string | null) | undefined
  amount_cents: number
  recurring?: boolean | undefined
}
type PlanCreateInput = {
  plan: {
    name: string
    invoice_display_name?: (string | null) | undefined
    code: string
    interval: 'weekly' | 'monthly' | 'quarterly' | 'semiannual' | 'yearly'
    description?: (string | null) | undefined
    amount_cents: number
    amount_currency: Currency
    trial_period?: (number | null) | undefined
    pay_in_advance: boolean
    bill_charges_monthly?: (boolean | null) | undefined
    bill_fixed_charges_monthly?: (boolean | null) | undefined
    tax_codes?: TaxCodes | undefined
    minimum_commitment?: MinimumCommitmentInput | undefined
    charges?:
      | {
          billable_metric_id: string
          code?: string | undefined
          charge_model: ChargeModelEnum
          pay_in_advance?: boolean | undefined
          invoiceable?: boolean | undefined
          regroup_paid_fees?: null | 'invoice' | undefined
          invoice_display_name?: string | undefined
          prorated?: boolean | undefined
          min_amount_cents?: number | undefined
          properties?: ChargeObjectProperties | undefined
          filters?: ChargeFilterInput[] | undefined
          tax_codes?: TaxCodes | undefined
          applied_pricing_unit?:
            | { code?: string | undefined; conversion_rate?: string | undefined }
            | undefined
          accepts_target_wallet?: (boolean | null) | undefined
        }[]
      | undefined
    fixed_charges?:
      | {
          add_on_id: string
          code?: string | undefined
          invoice_display_name?: string | undefined
          units?: number | undefined
          charge_model: 'standard' | 'graduated' | 'volume'
          pay_in_advance?: boolean | undefined
          prorated?: boolean | undefined
          properties?: FixedChargeProperties | undefined
          tax_codes?: TaxCodes | undefined
          apply_units_immediately?: boolean | undefined
        }[]
      | undefined
    usage_thresholds?: UsageThresholdInput[] | undefined
    metadata?: MetadataInput | undefined
  }
}
type MinimumCommitmentObject = {
  lago_id: string
  plan_code?: string | undefined
  amount_cents: number
  invoice_display_name?: (string | null) | undefined
  interval?: 'weekly' | 'monthly' | 'quarterly' | 'semiannual' | 'yearly' | undefined
  created_at: string
  updated_at?: string | undefined
  taxes?: TaxObject[] | undefined
} | null
type ChargeFilterObject = {
  lago_id: string
  charge_code: string
  invoice_display_name: string | null
  properties: ChargeProperties
  values: { [x: string]: string[] }
}
type ChargeObject = {
  lago_id: string
  lago_billable_metric_id: string
  code?: string | undefined
  billable_metric_code: string
  invoice_display_name?: (string | null) | undefined
  created_at: string
  charge_model: ChargeModelEnum
  pay_in_advance: boolean
  invoiceable: boolean
  regroup_paid_fees: null | 'invoice'
  prorated: boolean
  min_amount_cents: number
  properties: ChargeObjectProperties
  filters: ChargeFilterObject[]
  taxes?: TaxObject[] | undefined
  applied_pricing_unit?: ({ code: string; conversion_rate: string } | null) | undefined
  accepts_target_wallet?: boolean | undefined
  lago_parent_id?: (string | null) | undefined
}
type FixedChargeObject = {
  lago_id: string
  lago_add_on_id: string
  invoice_display_name: string | null
  add_on_code: string
  created_at: string
  code: string
  charge_model: 'standard' | 'graduated' | 'volume'
  pay_in_advance: boolean
  prorated: boolean
  properties: FixedChargeProperties
  units: string
  lago_parent_id?: (string | null) | undefined
  taxes?: TaxObject[] | undefined
}
type ApplicableUsageThreshold = {
  threshold_display_name: string | null
  amount_cents: number
  recurring: boolean
}
type PlanEntitlementPrivilegeObject = {
  code: string
  name: string | null
  value_type: 'integer' | 'boolean' | 'string' | 'select'
  config: { select_options?: string[] | undefined }
  value: number | boolean | string
}
type PlanEntitlementObject = {
  code: string
  name: string | null
  description: string | null
  privileges: PlanEntitlementPrivilegeObject[]
}
type PlanEntitlement = { entitlement: PlanEntitlementObject }
type PlanObject = {
  lago_id: string
  name: string
  invoice_display_name?: (string | null) | undefined
  created_at: string
  code: string
  interval: 'weekly' | 'monthly' | 'quarterly' | 'semiannual' | 'yearly'
  description?: (string | null) | undefined
  amount_cents: number
  amount_currency: Currency
  trial_period?: (number | null) | undefined
  pay_in_advance?: boolean | undefined
  bill_charges_monthly?: (boolean | null) | undefined
  bill_fixed_charges_monthly?: (boolean | null) | undefined
  parent_id?: (string | null) | undefined
  pending_deletion?: boolean | undefined
  minimum_commitment?: MinimumCommitmentObject | undefined
  charges?: ChargeObject[] | undefined
  fixed_charges?: FixedChargeObject[] | undefined
  taxes?: TaxObject[] | undefined
  usage_thresholds?: UsageThresholdObject[] | undefined
  applicable_usage_thresholds?: ApplicableUsageThreshold[] | undefined
  entitlements?: PlanEntitlement[] | undefined
  metadata?: MetadataObject | undefined
}
type Plan = { plan: PlanObject }
type PlansPaginated = { plans: PlanObject[]; meta: PaginationMeta }
type PlanUpdateInput = {
  plan: {
    name?: string | undefined
    invoice_display_name?: (string | null) | undefined
    code?: string | undefined
    interval?: 'weekly' | 'monthly' | 'quarterly' | 'semiannual' | 'yearly' | undefined
    description?: (string | null) | undefined
    amount_cents?: number | undefined
    amount_currency?: Currency | undefined
    trial_period?: (number | null) | undefined
    pay_in_advance?: boolean | undefined
    bill_charges_monthly?: (boolean | null) | undefined
    bill_fixed_charges_monthly?: (boolean | null) | undefined
    tax_codes?: TaxCodes | undefined
    minimum_commitment?: MinimumCommitmentInput | undefined
    charges?:
      | {
          id?: string | undefined
          billable_metric_id?: string | undefined
          code?: string | undefined
          charge_model?: ChargeModelEnum | undefined
          pay_in_advance?: boolean | undefined
          invoiceable?: boolean | undefined
          regroup_paid_fees?: null | 'invoice' | undefined
          invoice_display_name?: string | undefined
          prorated?: boolean | undefined
          min_amount_cents?: number | undefined
          properties?: ChargeObjectProperties | undefined
          filters?: ChargeFilterInput[] | undefined
          tax_codes?: TaxCodes | undefined
          applied_pricing_unit?:
            | { code?: string | undefined; conversion_rate?: string | undefined }
            | undefined
          accepts_target_wallet?: (boolean | null) | undefined
        }[]
      | undefined
    fixed_charges?:
      | {
          id?: string | undefined
          add_on_id?: string | undefined
          code?: string | undefined
          invoice_display_name?: string | undefined
          units?: number | undefined
          charge_model?: 'standard' | 'graduated' | 'volume' | undefined
          pay_in_advance?: boolean | undefined
          prorated?: boolean | undefined
          properties?: FixedChargeProperties | undefined
          tax_codes?: TaxCodes | undefined
          apply_units_immediately?: boolean | undefined
        }[]
      | undefined
    usage_thresholds?: UsageThresholdInput[] | undefined
    cascade_updates?: boolean | undefined
    metadata?: MetadataInput | undefined
  }
}
type EntitlementUpdateInput = {
  entitlements?: { [x: string]: { [x: string]: number | boolean | string } } | undefined
}
type PlanEntitlements = { entitlements: PlanEntitlementObject[] }
type PlanMetadataResponse = { metadata: MetadataObject }
type ChargeCreateInput = {
  charge: {
    invoice_display_name?: string | undefined
    min_amount_cents?: number | undefined
    properties?: ChargeObjectProperties | undefined
    filters?: ChargeFilterInput[] | undefined
    tax_codes?: TaxCodes | undefined
    applied_pricing_unit?:
      | { code?: string | undefined; conversion_rate?: string | undefined }
      | undefined
    billable_metric_id?: string | undefined
    code?: string | undefined
    charge_model?: ChargeModelEnum | undefined
    pay_in_advance?: boolean | undefined
    invoiceable?: boolean | undefined
    regroup_paid_fees?: null | 'invoice' | undefined
    prorated?: boolean | undefined
    accepts_target_wallet?: (boolean | null) | undefined
    cascade_updates?: boolean | undefined
  }
}
type Charge = { charge: ChargeObject }
type ChargesPaginated = { charges: ChargeObject[]; meta: PaginationMeta }
type ChargeUpdateInput = {
  charge: {
    invoice_display_name?: string | undefined
    min_amount_cents?: number | undefined
    properties?: ChargeObjectProperties | undefined
    filters?: ChargeFilterInput[] | undefined
    tax_codes?: TaxCodes | undefined
    applied_pricing_unit?:
      | { code?: string | undefined; conversion_rate?: string | undefined }
      | undefined
    billable_metric_id?: string | undefined
    code?: string | undefined
    charge_model?: ChargeModelEnum | undefined
    pay_in_advance?: boolean | undefined
    invoiceable?: boolean | undefined
    regroup_paid_fees?: null | 'invoice' | undefined
    prorated?: boolean | undefined
    accepts_target_wallet?: (boolean | null) | undefined
    cascade_updates?: boolean | undefined
  }
}
type ChargeDeleteInput = { charge?: { cascade_updates?: boolean | undefined } | undefined }
type ChargeFilterCreateInput = {
  filter: {
    cascade_updates?: boolean | undefined
    invoice_display_name?: (string | null) | undefined
    properties?: ChargeProperties | undefined
    values: { [x: string]: string[] }
  }
}
type ChargeFilterFullObject = {
  lago_id: string
  charge_code: string
  invoice_display_name: string | null
  properties: ChargeProperties
  values: { [x: string]: string[] }
}
type ChargeFilterResponse = { filter: ChargeFilterFullObject }
type ChargeFiltersPaginated = { filters: ChargeFilterFullObject[]; meta: PaginationMeta }
type ChargeFilterUpdateInput = {
  filter: {
    cascade_updates?: boolean | undefined
    invoice_display_name?: (string | null) | undefined
    properties?: ChargeProperties | undefined
    values?: { [x: string]: string[] } | undefined
  }
}
type ChargeFilterDeleteInput = { filter?: { cascade_updates?: boolean | undefined } | undefined }
type FixedChargeModelEnum = 'standard' | 'graduated' | 'volume'
type FixedChargeCreateInput = {
  fixed_charge: {
    invoice_display_name?: (string | null) | undefined
    units?: string | undefined
    apply_units_immediately?: boolean | undefined
    properties?: ChargeProperties | undefined
    tax_codes?: TaxCodes | undefined
    add_on_id?: string | undefined
    add_on_code?: string | undefined
    code?: string | undefined
    charge_model?: FixedChargeModelEnum | undefined
    pay_in_advance?: boolean | undefined
    prorated?: boolean | undefined
    cascade_updates?: boolean | undefined
  }
}
type FixedCharge = { fixed_charge: FixedChargeObject }
type FixedChargesPaginated = { fixed_charges: FixedChargeObject[]; meta: PaginationMeta }
type FixedChargeUpdateInput = {
  fixed_charge: {
    invoice_display_name?: (string | null) | undefined
    units?: string | undefined
    apply_units_immediately?: boolean | undefined
    properties?: ChargeProperties | undefined
    tax_codes?: TaxCodes | undefined
    add_on_id?: string | undefined
    add_on_code?: string | undefined
    code?: string | undefined
    charge_model?: FixedChargeModelEnum | undefined
    pay_in_advance?: boolean | undefined
    prorated?: boolean | undefined
    cascade_updates?: boolean | undefined
  }
}
type FixedChargeDeleteInput = {
  fixed_charge?: { cascade_updates?: boolean | undefined } | undefined
}
type QuoteVersionStatusEnum = 'draft' | 'approved' | 'voided'
type QuoteVersionVoidReasonEnum =
  | null
  | 'manual'
  | 'superseded'
  | 'cascade_of_expired'
  | 'cascade_of_voided'
type QuoteVersionObject = {
  lago_id: string
  lago_quote_id: string
  lago_organization_id: string
  version: number
  status: QuoteVersionStatusEnum
  currency: CurrencyOrNull
  billing_entity_code: string | null
  void_reason: QuoteVersionVoidReasonEnum
  approved_at: string | null
  voided_at: string | null
  created_at: string
  updated_at: string
}
type QuoteObject = {
  lago_id: string
  number: string
  order_type: QuoteOrderTypeEnum
  lago_customer_id: string
  lago_subscription_id: string | null
  lago_organization_id: string
  created_at: string
  updated_at: string
  current_version: QuoteVersionObject | ({ [x: string]: unknown } | null)
}
type QuotesPaginated = { quotes: QuoteObject[]; meta: PaginationMeta }
type QuoteOwnerObject = { lago_id: string; email: string | null }
type QuoteObjectExtended = {
  lago_id: string
  number: string
  order_type: QuoteOrderTypeEnum
  lago_customer_id: string
  lago_subscription_id: string | null
  lago_organization_id: string
  created_at: string
  updated_at: string
  current_version: QuoteVersionObject | ({ [x: string]: unknown } | null)
  owners: QuoteOwnerObject[]
}
type Quote = { quote: QuoteObjectExtended }
type QuoteVersionsPaginated = { quote_versions: QuoteVersionObject[]; meta: PaginationMeta }
type QuoteVersionObjectExtended = {
  lago_id: string
  lago_quote_id: string
  lago_organization_id: string
  version: number
  status: QuoteVersionStatusEnum
  currency: CurrencyOrNull
  billing_entity_code: string | null
  void_reason: QuoteVersionVoidReasonEnum
  approved_at: string | null
  voided_at: string | null
  created_at: string
  updated_at: string
  content: string | null
  billing_items: QuoteBillingItems
}
type QuoteVersion = { quote_version: QuoteVersionObjectExtended }
type QuoteVersionApproveInput = { expires_at?: string | undefined }
type PlanOverridesObject = {
  amount_cents?: number | undefined
  amount_currency?: Currency | undefined
  description?: string | undefined
  invoice_display_name?: string | undefined
  name?: string | undefined
  tax_codes?: TaxCodes | undefined
  trial_period?: number | undefined
  minimum_commitment?: MinimumCommitmentInput | undefined
  charges?:
    | {
        id?: string | undefined
        billable_metric_id?: string | undefined
        code?: string | undefined
        charge_model?: ChargeModelEnum | undefined
        invoice_display_name?: string | undefined
        min_amount_cents?: number | undefined
        properties?: ChargeObjectProperties | undefined
        filters?: ChargeFilterInput[] | undefined
        tax_codes?: TaxCodes | undefined
        applied_pricing_unit?:
          | { code?: string | undefined; conversion_rate?: string | undefined }
          | undefined
      }[]
    | undefined
  fixed_charges?:
    | {
        id: string
        invoice_display_name?: string | undefined
        units?: number | undefined
        apply_units_immediately?: boolean | undefined
        properties?: FixedChargeProperties | undefined
        tax_codes?: TaxCodes | undefined
      }[]
    | undefined
  usage_thresholds?: UsageThresholdInput[] | undefined
}
type SubscriptionActivationRuleInput = { type: 'payment'; timeout_hours?: number | undefined }
type SubscriptionCreateInput = {
  authorization?: { amount_cents: number; amount_currency: string } | undefined
  subscription: {
    billing_entity_code?: string | undefined
    external_customer_id: string
    plan_code: string
    name?: string | undefined
    external_id: string
    billing_time?: 'calendar' | 'anniversary' | undefined
    ending_at?: string | undefined
    subscription_at?: string | undefined
    plan_overrides?: PlanOverridesObject | undefined
    invoice_custom_section?: InvoiceCustomSectionInput | undefined
    payment_method?: PaymentMethodReference | undefined
    consolidate_invoice?: boolean | undefined
    purchase_order_number?: (string | null) | undefined
    payment_term?: PaymentTermObject | ({ [x: string]: unknown } | null) | undefined
    progressive_billing_disabled?: boolean | undefined
    usage_thresholds?: UsageThresholdInput[] | undefined
    activation_rules?: SubscriptionActivationRuleInput[] | undefined
  }
}
type SubscriptionEntitlementPrivilegeObject = {
  code: string
  name: string | null
  value_type: 'integer' | 'boolean' | 'string' | 'select'
  config: { select_options?: string[] | undefined }
  value: number | boolean | string
  plan_value: number | boolean | string | ({ [x: string]: unknown } | null)
  override_value: number | boolean | string | ({ [x: string]: unknown } | null)
}
type SubscriptionEntitlementObject = {
  code: string
  name: string | null
  description: string | null
  privileges: SubscriptionEntitlementPrivilegeObject[]
  overrides: { [x: string]: unknown }
}
type SubscriptionObjectExtended = {
  lago_id: string
  external_id: string
  lago_customer_id: string
  external_customer_id: string
  billing_entity_code?: string | undefined
  billing_time: 'calendar' | 'anniversary'
  name: string | null
  plan_code: string
  plan_amount_cents: number
  plan_amount_currency: Currency
  status: 'active' | 'canceled' | 'incomplete' | 'pending' | 'terminated'
  created_at: string
  canceled_at: string | null
  started_at: string | null
  ending_at: string | null
  subscription_at: string
  terminated_at: string | null
  previous_plan_code: string | null
  next_plan_code: string | null
  downgrade_plan_date: string | null
  trial_ended_at: string | null
  current_billing_period_started_at: string | null
  current_billing_period_ending_at: string | null
  on_termination_credit_note: 'credit' | 'refund' | 'offset' | 'skip'
  on_termination_invoice: 'generate' | 'skip'
  applied_invoice_custom_sections?: AppliedInvoiceCustomSectionObject[] | undefined
  payment_method: PaymentMethodReference
  consolidate_invoice: boolean
  progressive_billing_disabled: boolean
  cancellation_reason: 'payment_failed' | 'timeout' | 'manual'
  activated_at: string | null
  activation_rules: SubscriptionActivationRuleObject[]
  purchase_order_number: string | null
  payment_term: PaymentTermObject | ({ [x: string]: unknown } | null)
  plan?: PlanObject | undefined
  applicable_usage_thresholds?: ApplicableUsageThreshold[] | undefined
  entitlements?: SubscriptionEntitlementObject[] | undefined
}
type SubscriptionExtended = {
  subscription: SubscriptionObjectExtended
  authorization?:
    | { id: string; object: string; amount: number; amount_capturable: number; status: string }
    | undefined
}
type SubscriptionUpdateInput = {
  status?: 'active' | 'pending' | undefined
  subscription: {
    name?: (string | null) | undefined
    ending_at?: (string | null) | undefined
    subscription_at?: string | undefined
    plan_overrides?: PlanOverridesObject | undefined
    invoice_custom_section?: InvoiceCustomSectionInput | undefined
    payment_method?: PaymentMethodReference | undefined
    consolidate_invoice?: boolean | undefined
    billing_entity_code?: string | undefined
    on_termination_credit_note?: 'credit' | 'refund' | 'offset' | 'skip' | undefined
    on_termination_invoice?: 'generate' | 'skip' | undefined
    purchase_order_number?: (string | null) | undefined
    payment_term?: PaymentTermObject | ({ [x: string]: unknown } | null) | undefined
    progressive_billing_disabled?: boolean | undefined
    usage_thresholds?: UsageThresholdInput[] | undefined
    activation_rules?: SubscriptionActivationRuleInput[] | undefined
  }
}
type LifetimeUsageThresholdObject = {
  amount_cents: number
  completion_ratio: number
  reached_at: string | null
}
type LifetimeUsageObject = {
  lago_id: string
  lago_subscription_id: string
  external_subscription_id: string
  external_historical_usage_amount_cents: number
  invoiced_usage_amount_cents: number
  current_usage_amount_cents: number
  from_datetime: string | null
  to_datetime: string
  usage_thresholds?: LifetimeUsageThresholdObject[] | undefined
}
type LifetimeUsage = { lifetime_usage: LifetimeUsageObject }
type LifetimeUsageInput = { lifetime_usage: { external_historical_usage_amount_cents: number } }
type AlertObject = {
  lago_id: string
  lago_organization_id: string
  external_subscription_id: string
  lago_wallet_id: { [x: string]: unknown } | null
  wallet_code: { [x: string]: unknown } | null
  billable_metric: BillableMetricObject | ({ [x: string]: unknown } | null)
  alert_type:
    | 'current_usage_amount'
    | 'billable_metric_current_usage_amount'
    | 'billable_metric_current_usage_units'
    | 'lifetime_usage_amount'
    | 'billable_metric_lifetime_usage_units'
  code: string
  name: string | null
  direction: 'increasing' | 'decreasing'
  previous_value: string
  last_processed_at: string | null
  thresholds: AlertThresholdObject[]
  created_at: string
}
type Alerts = { alerts: AlertObject[]; meta?: PaginationMeta | undefined }
type AlertCreateInput = {
  alert: {
    code: string
    name?: (string | null) | undefined
    thresholds?: AlertThresholdInput[] | undefined
    alert_type:
      | 'current_usage_amount'
      | 'billable_metric_current_usage_amount'
      | 'billable_metric_current_usage_units'
      | 'lifetime_usage_amount'
      | 'billable_metric_lifetime_usage_units'
    billable_metric_code?: (string | null) | undefined
  }
}
type AlertBatchCreateInput = {
  alerts: {
    code: string
    name?: (string | null) | undefined
    thresholds?: AlertThresholdInput[] | undefined
    alert_type:
      | 'current_usage_amount'
      | 'billable_metric_current_usage_amount'
      | 'billable_metric_current_usage_units'
      | 'lifetime_usage_amount'
      | 'billable_metric_lifetime_usage_units'
    billable_metric_code?: (string | null) | undefined
  }[]
}
type Alert = { alert: AlertObject }
type AlertUpdateInput = {
  alert: {
    code?: string | undefined
    name?: (string | null) | undefined
    thresholds?: AlertThresholdInput[] | undefined
    billable_metric_code?: (string | null) | undefined
  }
}
type SubscriptionEntitlements = { entitlements: SubscriptionEntitlementObject[] }
type ChargeOverridableInput = {
  invoice_display_name?: string | undefined
  min_amount_cents?: number | undefined
  properties?: ChargeObjectProperties | undefined
  filters?: ChargeFilterInput[] | undefined
  tax_codes?: TaxCodes | undefined
  applied_pricing_unit?:
    | { code?: string | undefined; conversion_rate?: string | undefined }
    | undefined
}
type SubscriptionChargeOverride = { charge: ChargeOverridableInput }
type FixedChargeOverridableInput = {
  invoice_display_name?: (string | null) | undefined
  units?: string | undefined
  apply_units_immediately?: boolean | undefined
  properties?: ChargeProperties | undefined
  tax_codes?: TaxCodes | undefined
}
type SubscriptionFixedChargeOverride = { fixed_charge: FixedChargeOverridableInput }
type TaxBaseInput = {
  name?: string | undefined
  code?: string | undefined
  rate?: string | number | undefined
  description?: (string | null) | undefined
  applied_to_organization?: boolean | undefined
}
type TaxCreateInput = { tax: TaxBaseInput }
type Tax = { tax: TaxObject }
type TaxesPaginated = { taxes: TaxObject[]; meta: PaginationMeta }
type TaxUpdateInput = { tax: TaxBaseInput }
type UsageAttributionTypeBaseInput = {
  code?: string | undefined
  name?: (string | null) | undefined
  description?: (string | null) | undefined
  attribution_keys?: string[] | undefined
  role?: {} | undefined
  parent_code?: (string | null) | undefined
}
type UsageAttributionTypeCreateInput = { usage_attribution_type: UsageAttributionTypeBaseInput }
type UsageAttributionTypeRoleEnum = 'hierarchical' | 'flat'
type UsageAttributionTypeObject = {
  lago_id: string
  lago_organization_id: string
  code: string
  name: string | null
  description: string | null
  attribution_keys: string[]
  role: UsageAttributionTypeRoleEnum
  lago_parent_id: string | null
  parent_code: string | null
  created_at: string
  updated_at: string
}
type UsageAttributionType = { usage_attribution_type: UsageAttributionTypeObject }
type UsageAttributionTypesPaginated = {
  usage_attribution_types: UsageAttributionTypeObject[]
  meta: PaginationMeta
}
type UsageAttributionTypeUpdateInput = { usage_attribution_type: UsageAttributionTypeBaseInput }
type WalletTransactionCreateInput = {
  wallet_transaction: {
    wallet_id: string
    name?: (string | null) | undefined
    paid_credits?: (string | null) | undefined
    granted_credits?: (string | null) | undefined
    voided_credits?: (string | null) | undefined
    voided_transaction_id?: (string | null) | undefined
    priority?: number | undefined
    invoice_requires_successful_payment?: boolean | undefined
    ignore_paid_top_up_limits?: boolean | undefined
    purchase_order_number?: (string | null) | undefined
    invoice_custom_section?: InvoiceCustomSectionInput | undefined
    payment_method?: PaymentMethodReference | undefined
    metadata?: ({ key?: string | undefined; value?: string | undefined }[] | null) | undefined
  }
}
type WalletTransactionObject = {
  lago_id: string
  lago_wallet_id: string
  billing_entity_code: string
  lago_invoice_id: string | null
  lago_credit_note_id: string | null
  lago_voided_invoice_id: string | null
  status: 'pending' | 'settled' | 'failed'
  source: 'manual' | 'interval' | 'threshold'
  transaction_status: 'purchased' | 'granted' | 'voided' | 'invoiced'
  transaction_type: 'inbound' | 'outbound'
  amount: string
  credit_amount: string
  invoice_requires_successful_payment: boolean
  metadata: { key?: string | undefined; value?: string | undefined }[]
  remaining_amount_cents: number | null
  remaining_credit_amount: string | null
  priority: number
  settled_at: string | null
  failed_at: string | null
  created_at: string
  name: string | null
  applied_invoice_custom_sections?: AppliedInvoiceCustomSectionObject[] | undefined
  payment_method: PaymentMethodReference
  purchase_order_number: string | null
}
type WalletTransactions = { wallet_transactions: WalletTransactionObject[] }
type WalletTransaction = { wallet_transaction: WalletTransactionObject }
type WalletTransactionPaymentUrl = {
  wallet_transaction_payment_details: {
    lago_customer_id: string
    lago_wallet_transaction_id: string
    external_customer_id: string
    payment_provider: string
    payment_url: string
  }
}
type WalletTransactionConsumptionObject = {
  lago_id: string
  amount_cents: number
  credit_amount: string
  created_at: string
  wallet_transaction: WalletTransactionObject
}
type WalletTransactionConsumptionsPaginated = {
  wallet_transaction_consumptions: WalletTransactionConsumptionObject[]
  meta: PaginationMeta
}
type WalletTransactionFundingObject = {
  lago_id: string
  amount_cents: number
  credit_amount: string
  created_at: string
  wallet_transaction: WalletTransactionObject
}
type WalletTransactionFundingsPaginated = {
  wallet_transaction_fundings: WalletTransactionFundingObject[]
  meta: PaginationMeta
}
type WalletTransactionsPaginated = {
  wallet_transactions: WalletTransactionObject[]
  meta: PaginationMeta
}
type WebhookPublicKeyObject = { public_key: string }
type WebhookPublicKey = { webhook: WebhookPublicKeyObject }
type WebhookEndpointCreateInput = {
  webhook_endpoint: {
    webhook_url: string
    signature_algo?: 'jwt' | 'hmac' | 'standard_webhooks' | null | undefined
    name?: (string | null) | undefined
    event_types?: (string[] | null) | undefined
  }
}
type WebhookEndpointSigningKeyObject = { lago_id: string; secret_key: string; created_at: string }
type WebhookEndpointObject = {
  lago_id: string
  lago_organization_id: string
  webhook_url: string
  signature_algo: 'jwt' | 'hmac' | 'standard_webhooks'
  name: string | null
  event_types: string[] | null
  created_at: string
  signing_keys?: WebhookEndpointSigningKeyObject[] | undefined
}
type WebhookEndpoint = { webhook_endpoint: WebhookEndpointObject }
type WebhookEndpointsPaginated = {
  webhook_endpoints: WebhookEndpointObject[]
  meta: PaginationMeta
}
type WebhookEndpointUpdateInput = {
  webhook_endpoint: {
    webhook_url?: string | undefined
    signature_algo?: 'jwt' | 'hmac' | 'standard_webhooks' | undefined
    name?: (string | null) | undefined
    event_types?: (string[] | null) | undefined
  }
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/billing_entities': {
      $get:
        | {
            input: {}
            output: { billing_entities: BillingEntityObject[] }
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: ApiErrorUnauthorized; outputFormat: 'json'; status: 401 }
        | { input: {}; output: ApiErrorForbidden; outputFormat: 'json'; status: 403 }
      $post:
        | {
            input: { json: BillingEntityCreateInput }
            output: { billing_entity: BillingEntityObject }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: BillingEntityCreateInput }
            output: ApiErrorBadRequest
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: BillingEntityCreateInput }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: BillingEntityCreateInput }
            output: ApiErrorForbidden
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: BillingEntityCreateInput }
            output: ApiErrorUnprocessableEntity
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/billing_entities/:code': {
      $get:
        | {
            input: { param: { code: string } }
            output: { billing_entity: BillingEntityObjectExtended }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { code: string } }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { code: string } }
            output: ApiErrorForbidden
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { code: string } }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { code: string } } & { json: BillingEntityUpdateInput }
            output: { billing_entity: BillingEntityObjectExtended }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { code: string } } & { json: BillingEntityUpdateInput }
            output: ApiErrorBadRequest
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { code: string } } & { json: BillingEntityUpdateInput }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { code: string } } & { json: BillingEntityUpdateInput }
            output: ApiErrorForbidden
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { code: string } } & { json: BillingEntityUpdateInput }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { code: string } } & { json: BillingEntityUpdateInput }
            output: ApiErrorUnprocessableEntity
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/activity_logs': {
      $get:
        | {
            input: {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                from_date?: string | undefined
                to_date?: string | undefined
                'activity_types[]'?: string[] | undefined
                'activity_sources[]'?: ('api' | 'front' | 'system')[] | undefined
                'user_emails[]'?: string[] | undefined
                external_customer_id?: string | undefined
                external_subscription_id?: string | undefined
                'resource_ids[]'?: string[] | undefined
                'resource_types[]'?: string[] | undefined
              }
            }
            output: ActivityLogsPaginated
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                from_date?: string | undefined
                to_date?: string | undefined
                'activity_types[]'?: string[] | undefined
                'activity_sources[]'?: ('api' | 'front' | 'system')[] | undefined
                'user_emails[]'?: string[] | undefined
                external_customer_id?: string | undefined
                external_subscription_id?: string | undefined
                'resource_ids[]'?: string[] | undefined
                'resource_types[]'?: string[] | undefined
              }
            }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                from_date?: string | undefined
                to_date?: string | undefined
                'activity_types[]'?: string[] | undefined
                'activity_sources[]'?: ('api' | 'front' | 'system')[] | undefined
                'user_emails[]'?: string[] | undefined
                external_customer_id?: string | undefined
                external_subscription_id?: string | undefined
                'resource_ids[]'?: string[] | undefined
                'resource_types[]'?: string[] | undefined
              }
            }
            output: ApiErrorForbidden
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/activity_logs/:activity_id': {
      $get:
        | {
            input: { param: { activity_id: string } }
            output: ActivityLog
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { activity_id: string } }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { activity_id: string } }
            output: ApiErrorForbidden
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { activity_id: string } }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/add_ons': {
      $post:
        | { input: { json: AddOnCreateInput }; output: AddOn; outputFormat: 'json'; status: 200 }
        | {
            input: { json: AddOnCreateInput }
            output: ApiErrorBadRequest
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: AddOnCreateInput }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: AddOnCreateInput }
            output: ApiErrorForbidden
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: AddOnCreateInput }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: AddOnCreateInput }
            output: ApiErrorUnprocessableEntity
            outputFormat: 'json'
            status: 422
          }
      $get:
        | {
            input: { query: { page?: number | undefined; per_page?: number | undefined } }
            output: AddOnsPaginated
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { page?: number | undefined; per_page?: number | undefined } }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { page?: number | undefined; per_page?: number | undefined } }
            output: ApiErrorForbidden
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/add_ons/:code': {
      $put:
        | {
            input: { param: { code: string } } & { json: AddOnUpdateInput }
            output: AddOn
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { code: string } } & { json: AddOnUpdateInput }
            output: ApiErrorBadRequest
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { code: string } } & { json: AddOnUpdateInput }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { code: string } } & { json: AddOnUpdateInput }
            output: ApiErrorForbidden
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { code: string } } & { json: AddOnUpdateInput }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { code: string } } & { json: AddOnUpdateInput }
            output: ApiErrorUnprocessableEntity
            outputFormat: 'json'
            status: 422
          }
      $get:
        | { input: { param: { code: string } }; output: AddOn; outputFormat: 'json'; status: 200 }
        | {
            input: { param: { code: string } }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { code: string } }
            output: ApiErrorForbidden
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { code: string } }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
      $delete:
        | { input: { param: { code: string } }; output: AddOn; outputFormat: 'json'; status: 200 }
        | {
            input: { param: { code: string } }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { code: string } }
            output: ApiErrorForbidden
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { code: string } }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api_logs': {
      $get:
        | {
            input: {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                from_date?: string | undefined
                to_date?: string | undefined
                'http_methods[]'?: ('post' | 'put' | 'patch' | 'delete')[] | undefined
                'http_statuses[]'?: ('succeeded' | 'failed' | number)[] | undefined
                api_version?: string | undefined
                'request_paths[]'?: string[] | undefined
                'clients[]'?: string[] | undefined
              }
            }
            output: ApiLogsPaginated
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                from_date?: string | undefined
                to_date?: string | undefined
                'http_methods[]'?: ('post' | 'put' | 'patch' | 'delete')[] | undefined
                'http_statuses[]'?: ('succeeded' | 'failed' | number)[] | undefined
                api_version?: string | undefined
                'request_paths[]'?: string[] | undefined
                'clients[]'?: string[] | undefined
              }
            }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                from_date?: string | undefined
                to_date?: string | undefined
                'http_methods[]'?: ('post' | 'put' | 'patch' | 'delete')[] | undefined
                'http_statuses[]'?: ('succeeded' | 'failed' | number)[] | undefined
                api_version?: string | undefined
                'request_paths[]'?: string[] | undefined
                'clients[]'?: string[] | undefined
              }
            }
            output: ApiErrorForbidden
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/api_logs/:request_id': {
      $get:
        | {
            input: { param: { request_id: string } }
            output: ApiLog
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { request_id: string } }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { request_id: string } }
            output: ApiErrorForbidden
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { request_id: string } }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/analytics/gross_revenue': {
      $get:
        | {
            input: {
              query: {
                currency?: {} | undefined
                external_customer_id?: string | undefined
                billing_entity_code?: string | undefined
                months?: number | undefined
              }
            }
            output: GrossRevenues
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                currency?: {} | undefined
                external_customer_id?: string | undefined
                billing_entity_code?: string | undefined
                months?: number | undefined
              }
            }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                currency?: {} | undefined
                external_customer_id?: string | undefined
                billing_entity_code?: string | undefined
                months?: number | undefined
              }
            }
            output: ApiErrorForbidden
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/analytics/invoice_collection': {
      $get:
        | {
            input: {
              query: {
                currency?: {} | undefined
                billing_entity_code?: string | undefined
                months?: number | undefined
              }
            }
            output: InvoiceCollections
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                currency?: {} | undefined
                billing_entity_code?: string | undefined
                months?: number | undefined
              }
            }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                currency?: {} | undefined
                billing_entity_code?: string | undefined
                months?: number | undefined
              }
            }
            output: ApiErrorForbidden
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/analytics/invoiced_usage': {
      $get:
        | {
            input: {
              query: {
                currency?: {} | undefined
                billing_entity_code?: string | undefined
                months?: number | undefined
              }
            }
            output: InvoicedUsages
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                currency?: {} | undefined
                billing_entity_code?: string | undefined
                months?: number | undefined
              }
            }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                currency?: {} | undefined
                billing_entity_code?: string | undefined
                months?: number | undefined
              }
            }
            output: ApiErrorForbidden
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/analytics/mrr': {
      $get:
        | {
            input: {
              query: {
                currency?: {} | undefined
                billing_entity_code?: string | undefined
                months?: number | undefined
              }
            }
            output: Mrrs
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                currency?: {} | undefined
                billing_entity_code?: string | undefined
                months?: number | undefined
              }
            }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                currency?: {} | undefined
                billing_entity_code?: string | undefined
                months?: number | undefined
              }
            }
            output: ApiErrorForbidden
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/analytics/overdue_balance': {
      $get:
        | {
            input: {
              query: {
                currency?: {} | undefined
                external_customer_id?: string | undefined
                billing_entity_code?: string | undefined
                months?: number | undefined
              }
            }
            output: OverdueBalances
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                currency?: {} | undefined
                external_customer_id?: string | undefined
                billing_entity_code?: string | undefined
                months?: number | undefined
              }
            }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                currency?: {} | undefined
                external_customer_id?: string | undefined
                billing_entity_code?: string | undefined
                months?: number | undefined
              }
            }
            output: ApiErrorForbidden
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/analytics/usage': {
      $get:
        | {
            input: {
              query: {
                time_granularity?: 'daily' | 'weekly' | 'monthly' | undefined
                currency?: {} | undefined
                from_date?: string | undefined
                to_date?: string | undefined
                customer_type?: 'individual' | 'company' | undefined
                external_customer_id?: string | undefined
                customer_country?: {} | undefined
                external_subscription_id?: string | undefined
                is_billable_metric_recurring?: boolean | undefined
                plan_code?: string | undefined
                billable_metric_code?: string | undefined
              }
            }
            output: Usages
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                time_granularity?: 'daily' | 'weekly' | 'monthly' | undefined
                currency?: {} | undefined
                from_date?: string | undefined
                to_date?: string | undefined
                customer_type?: 'individual' | 'company' | undefined
                external_customer_id?: string | undefined
                customer_country?: {} | undefined
                external_subscription_id?: string | undefined
                is_billable_metric_recurring?: boolean | undefined
                plan_code?: string | undefined
                billable_metric_code?: string | undefined
              }
            }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                time_granularity?: 'daily' | 'weekly' | 'monthly' | undefined
                currency?: {} | undefined
                from_date?: string | undefined
                to_date?: string | undefined
                customer_type?: 'individual' | 'company' | undefined
                external_customer_id?: string | undefined
                customer_country?: {} | undefined
                external_subscription_id?: string | undefined
                is_billable_metric_recurring?: boolean | undefined
                plan_code?: string | undefined
                billable_metric_code?: string | undefined
              }
            }
            output: ApiErrorForbidden
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/applied_coupons': {
      $post:
        | {
            input: { json: AppliedCouponInput }
            output: AppliedCoupon
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: AppliedCouponInput }
            output: ApiErrorBadRequest
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: AppliedCouponInput }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: AppliedCouponInput }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: AppliedCouponInput }
            output: ApiErrorNotAllowed
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { json: AppliedCouponInput }
            output: ApiErrorUnprocessableEntity
            outputFormat: 'json'
            status: 422
          }
      $get:
        | {
            input: {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                status?: 'active' | 'terminated' | undefined
                external_customer_id?: string | undefined
                'coupon_code[]'?: string[] | undefined
              }
            }
            output: AppliedCouponsPaginated
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                status?: 'active' | 'terminated' | undefined
                external_customer_id?: string | undefined
                'coupon_code[]'?: string[] | undefined
              }
            }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/billable_metrics': {
      $post:
        | {
            input: { json: BillableMetricCreateInput }
            output: BillableMetric
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: BillableMetricCreateInput }
            output: ApiErrorBadRequest
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: BillableMetricCreateInput }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: BillableMetricCreateInput }
            output: ApiErrorForbidden
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: BillableMetricCreateInput }
            output: ApiErrorUnprocessableEntity
            outputFormat: 'json'
            status: 422
          }
      $get:
        | {
            input: { query: { page?: number | undefined; per_page?: number | undefined } }
            output: BillableMetricsPaginated
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { page?: number | undefined; per_page?: number | undefined } }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { page?: number | undefined; per_page?: number | undefined } }
            output: ApiErrorForbidden
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/billable_metrics/evaluate_expression': {
      $post:
        | {
            input: { json: BillableMetricEvaluateExpressionInput }
            output: BillableMetricEvaluateExpressionResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: BillableMetricEvaluateExpressionInput }
            output: ApiErrorBadRequest
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: BillableMetricEvaluateExpressionInput }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: BillableMetricEvaluateExpressionInput }
            output: ApiErrorForbidden
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: BillableMetricEvaluateExpressionInput }
            output: ApiErrorUnprocessableEntity
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/billable_metrics/:code': {
      $put:
        | {
            input: { param: { code: string } } & { json: BillableMetricUpdateInput }
            output: BillableMetric
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { code: string } } & { json: BillableMetricUpdateInput }
            output: ApiErrorBadRequest
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { code: string } } & { json: BillableMetricUpdateInput }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { code: string } } & { json: BillableMetricUpdateInput }
            output: ApiErrorForbidden
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { code: string } } & { json: BillableMetricUpdateInput }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { code: string } } & { json: BillableMetricUpdateInput }
            output: ApiErrorUnprocessableEntity
            outputFormat: 'json'
            status: 422
          }
      $delete:
        | {
            input: { param: { code: string } }
            output: BillableMetric
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { code: string } }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { code: string } }
            output: ApiErrorForbidden
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { code: string } }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { code: string } }
            output: BillableMetric
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { code: string } }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { code: string } }
            output: ApiErrorForbidden
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { code: string } }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/features': {
      $post:
        | {
            input: { json: FeatureCreateInput }
            output: Feature
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: FeatureCreateInput }
            output: ApiErrorBadRequest
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: FeatureCreateInput }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: FeatureCreateInput }
            output: ApiErrorForbidden
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: FeatureCreateInput }
            output: ApiErrorUnprocessableEntity
            outputFormat: 'json'
            status: 422
          }
      $get:
        | {
            input: {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                search_term?: string | undefined
              }
            }
            output: FeaturesPaginated
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                search_term?: string | undefined
              }
            }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                search_term?: string | undefined
              }
            }
            output: ApiErrorForbidden
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/features/:code': {
      $put:
        | {
            input: { param: { code: string } } & { json: FeatureUpdateInput }
            output: Feature
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { code: string } } & { json: FeatureUpdateInput }
            output: ApiErrorBadRequest
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { code: string } } & { json: FeatureUpdateInput }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { code: string } } & { json: FeatureUpdateInput }
            output: ApiErrorForbidden
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { code: string } } & { json: FeatureUpdateInput }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { code: string } } & { json: FeatureUpdateInput }
            output: ApiErrorUnprocessableEntity
            outputFormat: 'json'
            status: 422
          }
      $delete:
        | { input: { param: { code: string } }; output: Feature; outputFormat: 'json'; status: 200 }
        | {
            input: { param: { code: string } }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { code: string } }
            output: ApiErrorForbidden
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { code: string } }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
      $get:
        | { input: { param: { code: string } }; output: Feature; outputFormat: 'json'; status: 200 }
        | {
            input: { param: { code: string } }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { code: string } }
            output: ApiErrorForbidden
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { code: string } }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/features/:code/privileges/:privilege_code': {
      $delete:
        | {
            input: { param: { code: string; privilege_code: string } }
            output: Feature
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { code: string; privilege_code: string } }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { code: string; privilege_code: string } }
            output: ApiErrorForbidden
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { code: string; privilege_code: string } }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/coupons': {
      $post:
        | { input: { json: CouponCreateInput }; output: Coupon; outputFormat: 'json'; status: 200 }
        | {
            input: { json: CouponCreateInput }
            output: ApiErrorBadRequest
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CouponCreateInput }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: CouponCreateInput }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: CouponCreateInput }
            output: ApiErrorNotAllowed
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { json: CouponCreateInput }
            output: ApiErrorUnprocessableEntity
            outputFormat: 'json'
            status: 422
          }
      $get:
        | {
            input: { query: { page?: number | undefined; per_page?: number | undefined } }
            output: CouponsPaginated
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { page?: number | undefined; per_page?: number | undefined } }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/coupons/:code': {
      $put:
        | {
            input: { param: { code: string } } & { json: CouponUpdateInput }
            output: Coupon
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { code: string } } & { json: CouponUpdateInput }
            output: ApiErrorBadRequest
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { code: string } } & { json: CouponUpdateInput }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { code: string } } & { json: CouponUpdateInput }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { code: string } } & { json: CouponUpdateInput }
            output: ApiErrorNotAllowed
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { code: string } } & { json: CouponUpdateInput }
            output: ApiErrorUnprocessableEntity
            outputFormat: 'json'
            status: 422
          }
      $get:
        | { input: { param: { code: string } }; output: Coupon; outputFormat: 'json'; status: 200 }
        | {
            input: { param: { code: string } }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { code: string } }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
      $delete:
        | { input: { param: { code: string } }; output: Coupon; outputFormat: 'json'; status: 200 }
        | {
            input: { param: { code: string } }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { code: string } }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/credit_notes': {
      $post:
        | {
            input: { json: CreditNoteCreateInput }
            output: CreditNoteExtended
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreditNoteCreateInput }
            output: ApiErrorBadRequest
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreditNoteCreateInput }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: CreditNoteCreateInput }
            output: ApiErrorForbidden
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: CreditNoteCreateInput }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: CreditNoteCreateInput }
            output: ApiErrorNotAllowed
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { json: CreditNoteCreateInput }
            output: ApiErrorUnprocessableEntity
            outputFormat: 'json'
            status: 422
          }
      $get:
        | {
            input: {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                external_customer_id?: string | undefined
                issuing_date_from?: string | undefined
                issuing_date_to?: string | undefined
                search_term?: string | undefined
                currency?: string | undefined
                reason?:
                  | 'product_unsatisfactory'
                  | 'order_change'
                  | 'order_cancellation'
                  | 'fraudulent_charge'
                  | 'duplicated_charge'
                  | 'other'
                  | undefined
                credit_status?: 'available' | 'consumed' | 'voided' | undefined
                refund_status?: 'pending' | 'succeeded' | 'failed' | undefined
                invoice_number?: string | undefined
                purchase_order_number?: string | undefined
                amount_from?: number | undefined
                amount_to?: number | undefined
                'types[]'?: ('credit' | 'refund' | 'offset')[] | undefined
                self_billed?: boolean | undefined
                'billing_entity_codes[]'?: string[] | undefined
              }
            }
            output: CreditNotesPaginated
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                external_customer_id?: string | undefined
                issuing_date_from?: string | undefined
                issuing_date_to?: string | undefined
                search_term?: string | undefined
                currency?: string | undefined
                reason?:
                  | 'product_unsatisfactory'
                  | 'order_change'
                  | 'order_cancellation'
                  | 'fraudulent_charge'
                  | 'duplicated_charge'
                  | 'other'
                  | undefined
                credit_status?: 'available' | 'consumed' | 'voided' | undefined
                refund_status?: 'pending' | 'succeeded' | 'failed' | undefined
                invoice_number?: string | undefined
                purchase_order_number?: string | undefined
                amount_from?: number | undefined
                amount_to?: number | undefined
                'types[]'?: ('credit' | 'refund' | 'offset')[] | undefined
                self_billed?: boolean | undefined
                'billing_entity_codes[]'?: string[] | undefined
              }
            }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                external_customer_id?: string | undefined
                issuing_date_from?: string | undefined
                issuing_date_to?: string | undefined
                search_term?: string | undefined
                currency?: string | undefined
                reason?:
                  | 'product_unsatisfactory'
                  | 'order_change'
                  | 'order_cancellation'
                  | 'fraudulent_charge'
                  | 'duplicated_charge'
                  | 'other'
                  | undefined
                credit_status?: 'available' | 'consumed' | 'voided' | undefined
                refund_status?: 'pending' | 'succeeded' | 'failed' | undefined
                invoice_number?: string | undefined
                purchase_order_number?: string | undefined
                amount_from?: number | undefined
                amount_to?: number | undefined
                'types[]'?: ('credit' | 'refund' | 'offset')[] | undefined
                self_billed?: boolean | undefined
                'billing_entity_codes[]'?: string[] | undefined
              }
            }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/credit_notes/:lago_id': {
      $put:
        | {
            input: { param: { lago_id: string } } & { json: CreditNoteUpdateInput }
            output: CreditNoteExtended
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { lago_id: string } } & { json: CreditNoteUpdateInput }
            output: ApiErrorBadRequest
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { lago_id: string } } & { json: CreditNoteUpdateInput }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { lago_id: string } } & { json: CreditNoteUpdateInput }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { lago_id: string } } & { json: CreditNoteUpdateInput }
            output: ApiErrorUnprocessableEntity
            outputFormat: 'json'
            status: 422
          }
      $get:
        | {
            input: { param: { lago_id: string } }
            output: CreditNoteExtended
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { lago_id: string } }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { lago_id: string } }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/credit_notes/:lago_id/download': {
      $post:
        | {
            input: { param: { lago_id: string } }
            output: CreditNote
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { lago_id: string } }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { lago_id: string } }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/credit_notes/:lago_id/download_xml': {
      $post:
        | {
            input: { param: { lago_id: string } }
            output: CreditNote
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { lago_id: string } }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { lago_id: string } }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/credit_notes/estimate': {
      $post:
        | {
            input: { json: CreditNoteEstimateInput }
            output: CreditNoteEstimated
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreditNoteEstimateInput }
            output: ApiErrorBadRequest
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreditNoteEstimateInput }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: CreditNoteEstimateInput }
            output: ApiErrorForbidden
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: CreditNoteEstimateInput }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: CreditNoteEstimateInput }
            output: ApiErrorNotAllowed
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { json: CreditNoteEstimateInput }
            output: ApiErrorUnprocessableEntity
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/credit_notes/:lago_id/void': {
      $put:
        | {
            input: { param: { lago_id: string } }
            output: CreditNoteExtended
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { lago_id: string } }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { lago_id: string } }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { lago_id: string } }
            output: ApiErrorNotAllowed
            outputFormat: 'json'
            status: 405
          }
    }
  } & {
    '/credit_notes/:lago_id/metadata': {
      $post:
        | {
            input: { param: { lago_id: string } } & { json: CreditNoteMetadataResponse }
            output: CreditNoteMetadataResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { lago_id: string } } & { json: CreditNoteMetadataResponse }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { lago_id: string } } & { json: CreditNoteMetadataResponse }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { lago_id: string } } & { json: CreditNoteMetadataResponse }
            output: ApiErrorUnprocessableEntity
            outputFormat: 'json'
            status: 422
          }
      $patch:
        | {
            input: { param: { lago_id: string } } & { json: CreditNoteMetadataResponse }
            output: CreditNoteMetadataResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { lago_id: string } } & { json: CreditNoteMetadataResponse }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { lago_id: string } } & { json: CreditNoteMetadataResponse }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { lago_id: string } } & { json: CreditNoteMetadataResponse }
            output: ApiErrorUnprocessableEntity
            outputFormat: 'json'
            status: 422
          }
      $delete:
        | {
            input: { param: { lago_id: string } }
            output: CreditNoteMetadataResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { lago_id: string } }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { lago_id: string } }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/credit_notes/:lago_id/metadata/:key': {
      $delete:
        | {
            input: { param: { lago_id: string; key: string } }
            output: CreditNoteMetadataResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { lago_id: string; key: string } }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { lago_id: string; key: string } }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/customers': {
      $post:
        | {
            input: { json: CustomerCreateInput }
            output: Customer
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CustomerCreateInput }
            output: ApiErrorBadRequest
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CustomerCreateInput }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: CustomerCreateInput }
            output: ApiErrorForbidden
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: CustomerCreateInput }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: CustomerCreateInput }
            output: ApiErrorUnprocessableEntity
            outputFormat: 'json'
            status: 422
          }
      $get:
        | {
            input: {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                external_id?: string | undefined
                'account_type[]'?: ('customer' | 'partner')[] | undefined
                'billing_entity_codes[]'?: string[] | undefined
                search_term?: string | undefined
                'countries[]'?: Country[] | undefined
                'states[]'?: string[] | undefined
                'zipcodes[]'?: string[] | undefined
                'currencies[]'?: Currency[] | undefined
                has_tax_identification_number?: boolean | undefined
                'metadata[key]'?: string | undefined
                customer_type?: 'company' | 'individual' | undefined
                has_customer_type?: boolean | undefined
              }
            }
            output: CustomersPaginated
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                external_id?: string | undefined
                'account_type[]'?: ('customer' | 'partner')[] | undefined
                'billing_entity_codes[]'?: string[] | undefined
                search_term?: string | undefined
                'countries[]'?: Country[] | undefined
                'states[]'?: string[] | undefined
                'zipcodes[]'?: string[] | undefined
                'currencies[]'?: Currency[] | undefined
                has_tax_identification_number?: boolean | undefined
                'metadata[key]'?: string | undefined
                customer_type?: 'company' | 'individual' | undefined
                has_customer_type?: boolean | undefined
              }
            }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                external_id?: string | undefined
                'account_type[]'?: ('customer' | 'partner')[] | undefined
                'billing_entity_codes[]'?: string[] | undefined
                search_term?: string | undefined
                'countries[]'?: Country[] | undefined
                'states[]'?: string[] | undefined
                'zipcodes[]'?: string[] | undefined
                'currencies[]'?: Currency[] | undefined
                has_tax_identification_number?: boolean | undefined
                'metadata[key]'?: string | undefined
                customer_type?: 'company' | 'individual' | undefined
                has_customer_type?: boolean | undefined
              }
            }
            output: ApiErrorForbidden
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                external_id?: string | undefined
                'account_type[]'?: ('customer' | 'partner')[] | undefined
                'billing_entity_codes[]'?: string[] | undefined
                search_term?: string | undefined
                'countries[]'?: Country[] | undefined
                'states[]'?: string[] | undefined
                'zipcodes[]'?: string[] | undefined
                'currencies[]'?: Currency[] | undefined
                has_tax_identification_number?: boolean | undefined
                'metadata[key]'?: string | undefined
                customer_type?: 'company' | 'individual' | undefined
                has_customer_type?: boolean | undefined
              }
            }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/customers/:external_customer_id': {
      $get:
        | {
            input: { param: { external_customer_id: string } }
            output: Customer
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { external_customer_id: string } }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { external_customer_id: string } }
            output: ApiErrorForbidden
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { external_customer_id: string } }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
      $delete:
        | {
            input: { param: { external_customer_id: string } }
            output: Customer
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { external_customer_id: string } }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { external_customer_id: string } }
            output: ApiErrorForbidden
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { external_customer_id: string } }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/customers/:external_customer_id/applied_coupons': {
      $get:
        | {
            input: { param: { external_customer_id: string } } & {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                status?: 'active' | 'terminated' | undefined
                'coupon_code[]'?: string[] | undefined
              }
            }
            output: AppliedCouponsPaginated
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { external_customer_id: string } } & {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                status?: 'active' | 'terminated' | undefined
                'coupon_code[]'?: string[] | undefined
              }
            }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { external_customer_id: string } } & {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                status?: 'active' | 'terminated' | undefined
                'coupon_code[]'?: string[] | undefined
              }
            }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/customers/:external_customer_id/applied_coupons/:applied_coupon_id': {
      $delete:
        | {
            input: { param: { external_customer_id: string; applied_coupon_id: string } }
            output: AppliedCoupon
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { external_customer_id: string; applied_coupon_id: string } }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { external_customer_id: string; applied_coupon_id: string } }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/customers/:external_customer_id/credit_notes': {
      $get:
        | {
            input: { param: { external_customer_id: string } } & {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                issuing_date_from?: string | undefined
                issuing_date_to?: string | undefined
                search_term?: string | undefined
                currency?: string | undefined
                reason?:
                  | 'product_unsatisfactory'
                  | 'order_change'
                  | 'order_cancellation'
                  | 'fraudulent_charge'
                  | 'duplicated_charge'
                  | 'other'
                  | undefined
                credit_status?: 'available' | 'consumed' | 'voided' | undefined
                refund_status?: 'pending' | 'succeeded' | 'failed' | undefined
                invoice_number?: string | undefined
                purchase_order_number?: string | undefined
                amount_from?: number | undefined
                amount_to?: number | undefined
                'types[]'?: ('credit' | 'refund' | 'offset')[] | undefined
                self_billed?: boolean | undefined
                'billing_entity_codes[]'?: string[] | undefined
              }
            }
            output: CreditNotesPaginated
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { external_customer_id: string } } & {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                issuing_date_from?: string | undefined
                issuing_date_to?: string | undefined
                search_term?: string | undefined
                currency?: string | undefined
                reason?:
                  | 'product_unsatisfactory'
                  | 'order_change'
                  | 'order_cancellation'
                  | 'fraudulent_charge'
                  | 'duplicated_charge'
                  | 'other'
                  | undefined
                credit_status?: 'available' | 'consumed' | 'voided' | undefined
                refund_status?: 'pending' | 'succeeded' | 'failed' | undefined
                invoice_number?: string | undefined
                purchase_order_number?: string | undefined
                amount_from?: number | undefined
                amount_to?: number | undefined
                'types[]'?: ('credit' | 'refund' | 'offset')[] | undefined
                self_billed?: boolean | undefined
                'billing_entity_codes[]'?: string[] | undefined
              }
            }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { external_customer_id: string } } & {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                issuing_date_from?: string | undefined
                issuing_date_to?: string | undefined
                search_term?: string | undefined
                currency?: string | undefined
                reason?:
                  | 'product_unsatisfactory'
                  | 'order_change'
                  | 'order_cancellation'
                  | 'fraudulent_charge'
                  | 'duplicated_charge'
                  | 'other'
                  | undefined
                credit_status?: 'available' | 'consumed' | 'voided' | undefined
                refund_status?: 'pending' | 'succeeded' | 'failed' | undefined
                invoice_number?: string | undefined
                purchase_order_number?: string | undefined
                amount_from?: number | undefined
                amount_to?: number | undefined
                'types[]'?: ('credit' | 'refund' | 'offset')[] | undefined
                self_billed?: boolean | undefined
                'billing_entity_codes[]'?: string[] | undefined
              }
            }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/customers/:external_customer_id/invoices': {
      $get:
        | {
            input: { param: { external_customer_id: string } } & {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                amount_from?: number | undefined
                amount_to?: number | undefined
                issuing_date_from?: string | undefined
                issuing_date_to?: string | undefined
                status?: 'draft' | 'finalized' | 'failed' | 'pending' | 'voided' | undefined
                'statuses[]'?:
                  | ('draft' | 'finalized' | 'failed' | 'pending' | 'voided')[]
                  | undefined
                payment_status?: 'pending' | 'failed' | 'succeeded' | undefined
                'payment_statuses[]'?: ('pending' | 'failed' | 'succeeded')[] | undefined
                payment_overdue?: boolean | undefined
                search_term?: string | undefined
                payment_dispute_lost?: boolean | undefined
                invoice_type?:
                  | 'subscription'
                  | 'add_on'
                  | 'credit'
                  | 'one_off'
                  | 'advance_charges'
                  | 'progressive_billing'
                  | undefined
                self_billed?: boolean | undefined
                currency?: string | undefined
                partially_paid?: boolean | undefined
                'settlements[]'?: ('payment' | 'credit_note')[] | undefined
                'billing_entity_codes[]'?: string[] | undefined
                'metadata[key]'?: string | undefined
                purchase_order_number?: string | undefined
              }
            }
            output: InvoicesPaginated
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { external_customer_id: string } } & {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                amount_from?: number | undefined
                amount_to?: number | undefined
                issuing_date_from?: string | undefined
                issuing_date_to?: string | undefined
                status?: 'draft' | 'finalized' | 'failed' | 'pending' | 'voided' | undefined
                'statuses[]'?:
                  | ('draft' | 'finalized' | 'failed' | 'pending' | 'voided')[]
                  | undefined
                payment_status?: 'pending' | 'failed' | 'succeeded' | undefined
                'payment_statuses[]'?: ('pending' | 'failed' | 'succeeded')[] | undefined
                payment_overdue?: boolean | undefined
                search_term?: string | undefined
                payment_dispute_lost?: boolean | undefined
                invoice_type?:
                  | 'subscription'
                  | 'add_on'
                  | 'credit'
                  | 'one_off'
                  | 'advance_charges'
                  | 'progressive_billing'
                  | undefined
                self_billed?: boolean | undefined
                currency?: string | undefined
                partially_paid?: boolean | undefined
                'settlements[]'?: ('payment' | 'credit_note')[] | undefined
                'billing_entity_codes[]'?: string[] | undefined
                'metadata[key]'?: string | undefined
                purchase_order_number?: string | undefined
              }
            }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { external_customer_id: string } } & {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                amount_from?: number | undefined
                amount_to?: number | undefined
                issuing_date_from?: string | undefined
                issuing_date_to?: string | undefined
                status?: 'draft' | 'finalized' | 'failed' | 'pending' | 'voided' | undefined
                'statuses[]'?:
                  | ('draft' | 'finalized' | 'failed' | 'pending' | 'voided')[]
                  | undefined
                payment_status?: 'pending' | 'failed' | 'succeeded' | undefined
                'payment_statuses[]'?: ('pending' | 'failed' | 'succeeded')[] | undefined
                payment_overdue?: boolean | undefined
                search_term?: string | undefined
                payment_dispute_lost?: boolean | undefined
                invoice_type?:
                  | 'subscription'
                  | 'add_on'
                  | 'credit'
                  | 'one_off'
                  | 'advance_charges'
                  | 'progressive_billing'
                  | undefined
                self_billed?: boolean | undefined
                currency?: string | undefined
                partially_paid?: boolean | undefined
                'settlements[]'?: ('payment' | 'credit_note')[] | undefined
                'billing_entity_codes[]'?: string[] | undefined
                'metadata[key]'?: string | undefined
                purchase_order_number?: string | undefined
              }
            }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { external_customer_id: string } } & {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                amount_from?: number | undefined
                amount_to?: number | undefined
                issuing_date_from?: string | undefined
                issuing_date_to?: string | undefined
                status?: 'draft' | 'finalized' | 'failed' | 'pending' | 'voided' | undefined
                'statuses[]'?:
                  | ('draft' | 'finalized' | 'failed' | 'pending' | 'voided')[]
                  | undefined
                payment_status?: 'pending' | 'failed' | 'succeeded' | undefined
                'payment_statuses[]'?: ('pending' | 'failed' | 'succeeded')[] | undefined
                payment_overdue?: boolean | undefined
                search_term?: string | undefined
                payment_dispute_lost?: boolean | undefined
                invoice_type?:
                  | 'subscription'
                  | 'add_on'
                  | 'credit'
                  | 'one_off'
                  | 'advance_charges'
                  | 'progressive_billing'
                  | undefined
                self_billed?: boolean | undefined
                currency?: string | undefined
                partially_paid?: boolean | undefined
                'settlements[]'?: ('payment' | 'credit_note')[] | undefined
                'billing_entity_codes[]'?: string[] | undefined
                'metadata[key]'?: string | undefined
                purchase_order_number?: string | undefined
              }
            }
            output: ApiErrorUnprocessableEntity
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/customers/:external_customer_id/payments': {
      $get:
        | {
            input: { param: { external_customer_id: string } } & {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                invoice_id?: string | undefined
              }
            }
            output: PaymentsPaginated
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { external_customer_id: string } } & {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                invoice_id?: string | undefined
              }
            }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { external_customer_id: string } } & {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                invoice_id?: string | undefined
              }
            }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { external_customer_id: string } } & {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                invoice_id?: string | undefined
              }
            }
            output: ApiErrorUnprocessableEntity
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/customers/:external_customer_id/payment_requests': {
      $get:
        | {
            input: { param: { external_customer_id: string } } & {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                currency?: string | undefined
                payment_status?: 'pending' | 'failed' | 'succeeded' | undefined
                'billing_entity_codes[]'?: string[] | undefined
              }
            }
            output: PaymentRequestsPaginated
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { external_customer_id: string } } & {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                currency?: string | undefined
                payment_status?: 'pending' | 'failed' | 'succeeded' | undefined
                'billing_entity_codes[]'?: string[] | undefined
              }
            }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { external_customer_id: string } } & {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                currency?: string | undefined
                payment_status?: 'pending' | 'failed' | 'succeeded' | undefined
                'billing_entity_codes[]'?: string[] | undefined
              }
            }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/customers/:external_customer_id/portal_url': {
      $get:
        | {
            input: { param: { external_customer_id: string } }
            output: { customer: { portal_url: string } }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { external_customer_id: string } }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { external_customer_id: string } }
            output: ApiErrorForbidden
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { external_customer_id: string } }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/customers/:external_customer_id/subscriptions': {
      $get:
        | {
            input: { param: { external_customer_id: string } } & {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                currency?: string | undefined
                external_id?: string | undefined
                plan_code?: string | undefined
                overridden?: boolean | undefined
                'status[]'?:
                  | ('pending' | 'canceled' | 'terminated' | 'active' | 'incomplete')[]
                  | undefined
                'billing_entity_codes[]'?: string[] | undefined
              }
            }
            output: SubscriptionsPaginated
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { external_customer_id: string } } & {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                currency?: string | undefined
                external_id?: string | undefined
                plan_code?: string | undefined
                overridden?: boolean | undefined
                'status[]'?:
                  | ('pending' | 'canceled' | 'terminated' | 'active' | 'incomplete')[]
                  | undefined
                'billing_entity_codes[]'?: string[] | undefined
              }
            }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { external_customer_id: string } } & {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                currency?: string | undefined
                external_id?: string | undefined
                plan_code?: string | undefined
                overridden?: boolean | undefined
                'status[]'?:
                  | ('pending' | 'canceled' | 'terminated' | 'active' | 'incomplete')[]
                  | undefined
                'billing_entity_codes[]'?: string[] | undefined
              }
            }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/customers/:external_customer_id/wallets': {
      $post:
        | {
            input: { param: { external_customer_id: string } } & { json: WalletCreateInput }
            output: Wallet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { external_customer_id: string } } & { json: WalletCreateInput }
            output: ApiErrorBadRequest
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { external_customer_id: string } } & { json: WalletCreateInput }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { external_customer_id: string } } & { json: WalletCreateInput }
            output: ApiErrorForbidden
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { external_customer_id: string } } & { json: WalletCreateInput }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { external_customer_id: string } } & { json: WalletCreateInput }
            output: ApiErrorUnprocessableEntity
            outputFormat: 'json'
            status: 422
          }
      $get:
        | {
            input: { param: { external_customer_id: string } } & {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                currency?: string | undefined
                'billing_entity_codes[]'?: string[] | undefined
              }
            }
            output: WalletsPaginated
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { external_customer_id: string } } & {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                currency?: string | undefined
                'billing_entity_codes[]'?: string[] | undefined
              }
            }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { external_customer_id: string } } & {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                currency?: string | undefined
                'billing_entity_codes[]'?: string[] | undefined
              }
            }
            output: ApiErrorForbidden
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { external_customer_id: string } } & {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                currency?: string | undefined
                'billing_entity_codes[]'?: string[] | undefined
              }
            }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/customers/:external_customer_id/wallets/:code': {
      $put:
        | {
            input: { param: { external_customer_id: string; code: string } } & {
              json: WalletUpdateInput
            }
            output: Wallet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { external_customer_id: string; code: string } } & {
              json: WalletUpdateInput
            }
            output: ApiErrorBadRequest
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { external_customer_id: string; code: string } } & {
              json: WalletUpdateInput
            }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { external_customer_id: string; code: string } } & {
              json: WalletUpdateInput
            }
            output: ApiErrorForbidden
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { external_customer_id: string; code: string } } & {
              json: WalletUpdateInput
            }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { external_customer_id: string; code: string } } & {
              json: WalletUpdateInput
            }
            output: ApiErrorUnprocessableEntity
            outputFormat: 'json'
            status: 422
          }
      $get:
        | {
            input: { param: { external_customer_id: string; code: string } }
            output: Wallet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { external_customer_id: string; code: string } }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { external_customer_id: string; code: string } }
            output: ApiErrorForbidden
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { external_customer_id: string; code: string } }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
      $delete:
        | {
            input: { param: { external_customer_id: string; code: string } }
            output: Wallet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { external_customer_id: string; code: string } }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { external_customer_id: string; code: string } }
            output: ApiErrorForbidden
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { external_customer_id: string; code: string } }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { external_customer_id: string; code: string } }
            output: ApiErrorUnprocessableEntity
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/customers/:external_customer_id/wallets/:wallet_code/metadata': {
      $post:
        | {
            input: { param: { external_customer_id: string; wallet_code: string } } & {
              json: WalletMetadataResponse
            }
            output: WalletMetadataResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { external_customer_id: string; wallet_code: string } } & {
              json: WalletMetadataResponse
            }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { external_customer_id: string; wallet_code: string } } & {
              json: WalletMetadataResponse
            }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { external_customer_id: string; wallet_code: string } } & {
              json: WalletMetadataResponse
            }
            output: ApiErrorUnprocessableEntity
            outputFormat: 'json'
            status: 422
          }
      $patch:
        | {
            input: { param: { external_customer_id: string; wallet_code: string } } & {
              json: WalletMetadataResponse
            }
            output: WalletMetadataResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { external_customer_id: string; wallet_code: string } } & {
              json: WalletMetadataResponse
            }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { external_customer_id: string; wallet_code: string } } & {
              json: WalletMetadataResponse
            }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { external_customer_id: string; wallet_code: string } } & {
              json: WalletMetadataResponse
            }
            output: ApiErrorUnprocessableEntity
            outputFormat: 'json'
            status: 422
          }
      $delete:
        | {
            input: { param: { external_customer_id: string; wallet_code: string } }
            output: WalletMetadataResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { external_customer_id: string; wallet_code: string } }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { external_customer_id: string; wallet_code: string } }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/customers/:external_customer_id/wallets/:wallet_code/metadata/:key': {
      $delete:
        | {
            input: { param: { key: string; external_customer_id: string; wallet_code: string } }
            output: WalletMetadataResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { key: string; external_customer_id: string; wallet_code: string } }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { key: string; external_customer_id: string; wallet_code: string } }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/customers/:external_customer_id/wallets/:wallet_code/alerts': {
      $get:
        | {
            input: { param: { external_customer_id: string; wallet_code: string } } & {
              query: { page?: number | undefined; per_page?: number | undefined }
            }
            output: WalletAlerts
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { external_customer_id: string; wallet_code: string } } & {
              query: { page?: number | undefined; per_page?: number | undefined }
            }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { external_customer_id: string; wallet_code: string } } & {
              query: { page?: number | undefined; per_page?: number | undefined }
            }
            output: ApiErrorForbidden
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { external_customer_id: string; wallet_code: string } } & {
              query: { page?: number | undefined; per_page?: number | undefined }
            }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { external_customer_id: string; wallet_code: string } } & {
              json: WalletAlertCreateInput | WalletAlertBatchCreateInput
            }
            output: WalletAlert | WalletAlerts
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { external_customer_id: string; wallet_code: string } } & {
              json: WalletAlertCreateInput | WalletAlertBatchCreateInput
            }
            output: ApiErrorBadRequest
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { external_customer_id: string; wallet_code: string } } & {
              json: WalletAlertCreateInput | WalletAlertBatchCreateInput
            }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { external_customer_id: string; wallet_code: string } } & {
              json: WalletAlertCreateInput | WalletAlertBatchCreateInput
            }
            output: ApiErrorForbidden
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { external_customer_id: string; wallet_code: string } } & {
              json: WalletAlertCreateInput | WalletAlertBatchCreateInput
            }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { external_customer_id: string; wallet_code: string } } & {
              json: WalletAlertCreateInput | WalletAlertBatchCreateInput
            }
            output: ApiErrorUnprocessableEntity
            outputFormat: 'json'
            status: 422
          }
      $delete:
        | {
            input: { param: { external_customer_id: string; wallet_code: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { external_customer_id: string; wallet_code: string } }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { external_customer_id: string; wallet_code: string } }
            output: ApiErrorForbidden
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { external_customer_id: string; wallet_code: string } }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/customers/:external_customer_id/wallets/:wallet_code/alerts/:code': {
      $get:
        | {
            input: { param: { external_customer_id: string; wallet_code: string; code: string } }
            output: WalletAlert
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { external_customer_id: string; wallet_code: string; code: string } }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { external_customer_id: string; wallet_code: string; code: string } }
            output: ApiErrorForbidden
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { external_customer_id: string; wallet_code: string; code: string } }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: {
              param: { external_customer_id: string; wallet_code: string; code: string }
            } & { json: WalletAlertUpdateInput }
            output: WalletAlert
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { external_customer_id: string; wallet_code: string; code: string }
            } & { json: WalletAlertUpdateInput }
            output: ApiErrorBadRequest
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: { external_customer_id: string; wallet_code: string; code: string }
            } & { json: WalletAlertUpdateInput }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: { external_customer_id: string; wallet_code: string; code: string }
            } & { json: WalletAlertUpdateInput }
            output: ApiErrorForbidden
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              param: { external_customer_id: string; wallet_code: string; code: string }
            } & { json: WalletAlertUpdateInput }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: { external_customer_id: string; wallet_code: string; code: string }
            } & { json: WalletAlertUpdateInput }
            output: ApiErrorUnprocessableEntity
            outputFormat: 'json'
            status: 422
          }
      $delete:
        | {
            input: { param: { external_customer_id: string; wallet_code: string; code: string } }
            output: WalletAlert
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { external_customer_id: string; wallet_code: string; code: string } }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { external_customer_id: string; wallet_code: string; code: string } }
            output: ApiErrorForbidden
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { external_customer_id: string; wallet_code: string; code: string } }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/customers/:external_customer_id/current_usage': {
      $get:
        | {
            input: { param: { external_customer_id: string } } & {
              query: {
                external_subscription_id: string
                apply_taxes?: boolean | undefined
                charge_id?: string | undefined
                charge_code?: string | undefined
                billable_metric_code?: string | undefined
                group?: { [x: string]: string } | undefined
                filter_by_charge_id?: string | undefined
                filter_by_charge_code?: string | undefined
                filter_by_group?: { [x: string]: string } | undefined
                full_usage?: boolean | undefined
                filter_by_presentation?: string | undefined
              }
            }
            output: CustomerUsage
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { external_customer_id: string } } & {
              query: {
                external_subscription_id: string
                apply_taxes?: boolean | undefined
                charge_id?: string | undefined
                charge_code?: string | undefined
                billable_metric_code?: string | undefined
                group?: { [x: string]: string } | undefined
                filter_by_charge_id?: string | undefined
                filter_by_charge_code?: string | undefined
                filter_by_group?: { [x: string]: string } | undefined
                full_usage?: boolean | undefined
                filter_by_presentation?: string | undefined
              }
            }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { external_customer_id: string } } & {
              query: {
                external_subscription_id: string
                apply_taxes?: boolean | undefined
                charge_id?: string | undefined
                charge_code?: string | undefined
                billable_metric_code?: string | undefined
                group?: { [x: string]: string } | undefined
                filter_by_charge_id?: string | undefined
                filter_by_charge_code?: string | undefined
                filter_by_group?: { [x: string]: string } | undefined
                full_usage?: boolean | undefined
                filter_by_presentation?: string | undefined
              }
            }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { external_customer_id: string } } & {
              query: {
                external_subscription_id: string
                apply_taxes?: boolean | undefined
                charge_id?: string | undefined
                charge_code?: string | undefined
                billable_metric_code?: string | undefined
                group?: { [x: string]: string } | undefined
                filter_by_charge_id?: string | undefined
                filter_by_charge_code?: string | undefined
                filter_by_group?: { [x: string]: string } | undefined
                full_usage?: boolean | undefined
                filter_by_presentation?: string | undefined
              }
            }
            output: ApiErrorNotAllowed
            outputFormat: 'json'
            status: 405
          }
    }
  } & {
    '/customers/:external_customer_id/projected_usage': {
      $get:
        | {
            input: { param: { external_customer_id: string } } & {
              query: {
                external_subscription_id: string
                apply_taxes?: boolean | undefined
                charge_id?: string | undefined
                charge_code?: string | undefined
                billable_metric_code?: string | undefined
                group?: { [x: string]: string } | undefined
                filter_by_presentation?: string | undefined
              }
            }
            output: CustomerProjectedUsage
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { external_customer_id: string } } & {
              query: {
                external_subscription_id: string
                apply_taxes?: boolean | undefined
                charge_id?: string | undefined
                charge_code?: string | undefined
                billable_metric_code?: string | undefined
                group?: { [x: string]: string } | undefined
                filter_by_presentation?: string | undefined
              }
            }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { external_customer_id: string } } & {
              query: {
                external_subscription_id: string
                apply_taxes?: boolean | undefined
                charge_id?: string | undefined
                charge_code?: string | undefined
                billable_metric_code?: string | undefined
                group?: { [x: string]: string } | undefined
                filter_by_presentation?: string | undefined
              }
            }
            output: ApiErrorForbidden
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { external_customer_id: string } } & {
              query: {
                external_subscription_id: string
                apply_taxes?: boolean | undefined
                charge_id?: string | undefined
                charge_code?: string | undefined
                billable_metric_code?: string | undefined
                group?: { [x: string]: string } | undefined
                filter_by_presentation?: string | undefined
              }
            }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { external_customer_id: string } } & {
              query: {
                external_subscription_id: string
                apply_taxes?: boolean | undefined
                charge_id?: string | undefined
                charge_code?: string | undefined
                billable_metric_code?: string | undefined
                group?: { [x: string]: string } | undefined
                filter_by_presentation?: string | undefined
              }
            }
            output: ApiErrorNotAllowed
            outputFormat: 'json'
            status: 405
          }
    }
  } & {
    '/customers/:external_customer_id/past_usage': {
      $get:
        | {
            input: { param: { external_customer_id: string } } & {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                external_subscription_id: string
                billable_metric_code?: string | undefined
                periods_count?: number | undefined
              }
            }
            output: CustomerPastUsage
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { external_customer_id: string } } & {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                external_subscription_id: string
                billable_metric_code?: string | undefined
                periods_count?: number | undefined
              }
            }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { external_customer_id: string } } & {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                external_subscription_id: string
                billable_metric_code?: string | undefined
                periods_count?: number | undefined
              }
            }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { external_customer_id: string } } & {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                external_subscription_id: string
                billable_metric_code?: string | undefined
                periods_count?: number | undefined
              }
            }
            output: ApiErrorUnprocessableEntity
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/customers/:external_customer_id/attributed_usage': {
      $get:
        | {
            input: { param: { external_customer_id: string } } & {
              query: {
                external_subscription_id: string
                group_by: string
                filters?: { [x: string]: string | string[] } | undefined
                from_datetime?: string | undefined
                to_datetime?: string | undefined
                'charge_codes[]'?: string[] | undefined
                split_charge_code?: string | undefined
                split_filters_offset?: number | undefined
                search_term?: string | undefined
                basis?: 'units' | 'amount' | undefined
                page?: number | undefined
                per_page?: number | undefined
              }
            }
            output: AttributedUsage
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { external_customer_id: string } } & {
              query: {
                external_subscription_id: string
                group_by: string
                filters?: { [x: string]: string | string[] } | undefined
                from_datetime?: string | undefined
                to_datetime?: string | undefined
                'charge_codes[]'?: string[] | undefined
                split_charge_code?: string | undefined
                split_filters_offset?: number | undefined
                search_term?: string | undefined
                basis?: 'units' | 'amount' | undefined
                page?: number | undefined
                per_page?: number | undefined
              }
            }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { external_customer_id: string } } & {
              query: {
                external_subscription_id: string
                group_by: string
                filters?: { [x: string]: string | string[] } | undefined
                from_datetime?: string | undefined
                to_datetime?: string | undefined
                'charge_codes[]'?: string[] | undefined
                split_charge_code?: string | undefined
                split_filters_offset?: number | undefined
                search_term?: string | undefined
                basis?: 'units' | 'amount' | undefined
                page?: number | undefined
                per_page?: number | undefined
              }
            }
            output: ApiErrorForbidden
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { external_customer_id: string } } & {
              query: {
                external_subscription_id: string
                group_by: string
                filters?: { [x: string]: string | string[] } | undefined
                from_datetime?: string | undefined
                to_datetime?: string | undefined
                'charge_codes[]'?: string[] | undefined
                split_charge_code?: string | undefined
                split_filters_offset?: number | undefined
                search_term?: string | undefined
                basis?: 'units' | 'amount' | undefined
                page?: number | undefined
                per_page?: number | undefined
              }
            }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { external_customer_id: string } } & {
              query: {
                external_subscription_id: string
                group_by: string
                filters?: { [x: string]: string | string[] } | undefined
                from_datetime?: string | undefined
                to_datetime?: string | undefined
                'charge_codes[]'?: string[] | undefined
                split_charge_code?: string | undefined
                split_filters_offset?: number | undefined
                search_term?: string | undefined
                basis?: 'units' | 'amount' | undefined
                page?: number | undefined
                per_page?: number | undefined
              }
            }
            output: ApiErrorUnprocessableEntity | ApiErrorAttributedUsageQueryLimit
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/customers/:external_customer_id/checkout_url': {
      $post:
        | {
            input: { param: { external_customer_id: string } }
            output: { customer: CustomerCheckoutUrl }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { external_customer_id: string } }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { external_customer_id: string } }
            output: ApiErrorForbidden
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { external_customer_id: string } }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { external_customer_id: string } }
            output: ApiErrorUnprocessableEntity
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/customers/:external_customer_id/payment_methods': {
      $get:
        | {
            input: { param: { external_customer_id: string } } & {
              query: { page?: number | undefined; per_page?: number | undefined }
            }
            output: PaymentMethodsPaginated
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { external_customer_id: string } } & {
              query: { page?: number | undefined; per_page?: number | undefined }
            }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { external_customer_id: string } } & {
              query: { page?: number | undefined; per_page?: number | undefined }
            }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/customers/:external_customer_id/payment_methods/:lago_id/set_as_default': {
      $put:
        | {
            input: { param: { lago_id: string; external_customer_id: string } }
            output: PaymentMethod
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { lago_id: string; external_customer_id: string } }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { lago_id: string; external_customer_id: string } }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { lago_id: string; external_customer_id: string } }
            output: ApiErrorUnprocessableEntity
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/customers/:external_customer_id/payment_methods/:lago_id': {
      $delete:
        | {
            input: { param: { lago_id: string; external_customer_id: string } }
            output: PaymentMethod
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { lago_id: string; external_customer_id: string } }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { lago_id: string; external_customer_id: string } }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/events': {
      $post:
        | { input: { json: EventInput }; output: EventCreated; outputFormat: 'json'; status: 200 }
        | {
            input: { json: EventInput }
            output: ApiErrorBadRequest
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: EventInput }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: EventInput }
            output: ApiErrorForbidden
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: EventInput }
            output: ApiErrorUnprocessableEntity
            outputFormat: 'json'
            status: 422
          }
      $get:
        | {
            input: {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                external_subscription_id?: string | undefined
                code?: string | undefined
                timestamp_from_started_at?: boolean | undefined
                timestamp_from?: string | undefined
                timestamp_to?: string | undefined
              }
            }
            output: EventsPaginated
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                external_subscription_id?: string | undefined
                code?: string | undefined
                timestamp_from_started_at?: boolean | undefined
                timestamp_from?: string | undefined
                timestamp_to?: string | undefined
              }
            }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                external_subscription_id?: string | undefined
                code?: string | undefined
                timestamp_from_started_at?: boolean | undefined
                timestamp_from?: string | undefined
                timestamp_to?: string | undefined
              }
            }
            output: ApiErrorForbidden
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                external_subscription_id?: string | undefined
                code?: string | undefined
                timestamp_from_started_at?: boolean | undefined
                timestamp_from?: string | undefined
                timestamp_to?: string | undefined
              }
            }
            output: ApiErrorUnprocessableEntity
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/events/batch': {
      $post:
        | {
            input: { json: EventBatchInput }
            output: EventsCreated
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: EventBatchInput }
            output: ApiErrorBadRequest
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: EventBatchInput }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: EventBatchInput }
            output: ApiErrorForbidden
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: EventBatchInput }
            output: ApiErrorUnprocessableEntity
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/events/estimate_fees': {
      $post:
        | {
            input: { json: EventEstimateFeesInput }
            output: Fees
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: EventEstimateFeesInput }
            output: ApiErrorBadRequest
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: EventEstimateFeesInput }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: EventEstimateFeesInput }
            output: ApiErrorForbidden
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: EventEstimateFeesInput }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: EventEstimateFeesInput }
            output: ApiErrorUnprocessableEntity
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/events/estimate_instant_fees': {
      $post:
        | {
            input: { json: EventEstimateInstantFeesInput }
            output: FeesEstimate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: EventEstimateInstantFeesInput }
            output: ApiErrorBadRequest
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: EventEstimateInstantFeesInput }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: EventEstimateInstantFeesInput }
            output: ApiErrorForbidden
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: EventEstimateInstantFeesInput }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: EventEstimateInstantFeesInput }
            output: ApiErrorUnprocessableEntity
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/events/batch_estimate_instant_fees': {
      $post:
        | {
            input: { json: EventBatchEstimateInstantFeesInput }
            output: FeesEstimate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: EventBatchEstimateInstantFeesInput }
            output: ApiErrorBadRequest
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: EventBatchEstimateInstantFeesInput }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: EventBatchEstimateInstantFeesInput }
            output: ApiErrorForbidden
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: EventBatchEstimateInstantFeesInput }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: EventBatchEstimateInstantFeesInput }
            output: ApiErrorUnprocessableEntity
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/events/:transaction_id': {
      $get:
        | {
            input: { param: { transaction_id: string } }
            output: Event
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { transaction_id: string } }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { transaction_id: string } }
            output: ApiErrorForbidden
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { transaction_id: string } }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/fees': {
      $get:
        | {
            input: {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                external_customer_id?: string | undefined
                external_subscription_id?: string | undefined
                event_transaction_id?: string | undefined
                currency?: {} | undefined
                fee_type?:
                  | 'charge'
                  | 'fixed_charge'
                  | 'add_on'
                  | 'subscription'
                  | 'credit'
                  | 'commitment'
                  | undefined
                billable_metric_code?: string | undefined
                payment_status?: 'pending' | 'succeeded' | 'failed' | 'refunded' | undefined
                created_at_from?: string | undefined
                created_at_to?: string | undefined
                succeeded_at_from?: string | undefined
                succeeded_at_to?: string | undefined
                failed_at_from?: string | undefined
                failed_at_to?: string | undefined
                refunded_at_from?: string | undefined
                refunded_at_to?: string | undefined
              }
            }
            output: FeesPaginated
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                external_customer_id?: string | undefined
                external_subscription_id?: string | undefined
                event_transaction_id?: string | undefined
                currency?: {} | undefined
                fee_type?:
                  | 'charge'
                  | 'fixed_charge'
                  | 'add_on'
                  | 'subscription'
                  | 'credit'
                  | 'commitment'
                  | undefined
                billable_metric_code?: string | undefined
                payment_status?: 'pending' | 'succeeded' | 'failed' | 'refunded' | undefined
                created_at_from?: string | undefined
                created_at_to?: string | undefined
                succeeded_at_from?: string | undefined
                succeeded_at_to?: string | undefined
                failed_at_from?: string | undefined
                failed_at_to?: string | undefined
                refunded_at_from?: string | undefined
                refunded_at_to?: string | undefined
              }
            }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                external_customer_id?: string | undefined
                external_subscription_id?: string | undefined
                event_transaction_id?: string | undefined
                currency?: {} | undefined
                fee_type?:
                  | 'charge'
                  | 'fixed_charge'
                  | 'add_on'
                  | 'subscription'
                  | 'credit'
                  | 'commitment'
                  | undefined
                billable_metric_code?: string | undefined
                payment_status?: 'pending' | 'succeeded' | 'failed' | 'refunded' | undefined
                created_at_from?: string | undefined
                created_at_to?: string | undefined
                succeeded_at_from?: string | undefined
                succeeded_at_to?: string | undefined
                failed_at_from?: string | undefined
                failed_at_to?: string | undefined
                refunded_at_from?: string | undefined
                refunded_at_to?: string | undefined
              }
            }
            output: ApiErrorUnprocessableEntity
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/fees/:lago_id': {
      $get:
        | { input: { param: { lago_id: string } }; output: Fee; outputFormat: 'json'; status: 200 }
        | {
            input: { param: { lago_id: string } }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { lago_id: string } }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { lago_id: string } } & { json: FeeUpdateInput }
            output: Fee
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { lago_id: string } } & { json: FeeUpdateInput }
            output: ApiErrorBadRequest
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { lago_id: string } } & { json: FeeUpdateInput }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { lago_id: string } } & { json: FeeUpdateInput }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { lago_id: string } } & { json: FeeUpdateInput }
            output: ApiErrorNotAllowed
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { lago_id: string } } & { json: FeeUpdateInput }
            output: ApiErrorUnprocessableEntity
            outputFormat: 'json'
            status: 422
          }
      $delete:
        | { input: { param: { lago_id: string } }; output: Fee; outputFormat: 'json'; status: 200 }
        | {
            input: { param: { lago_id: string } }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { lago_id: string } }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { lago_id: string } }
            output: ApiErrorNotAllowed
            outputFormat: 'json'
            status: 405
          }
    }
  } & {
    '/invoices': {
      $post:
        | {
            input: { json: InvoiceOneOffCreateInput }
            output: Invoice
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: InvoiceOneOffCreateInput }
            output: ApiErrorBadRequest
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: InvoiceOneOffCreateInput }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: InvoiceOneOffCreateInput }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: InvoiceOneOffCreateInput }
            output: ApiErrorUnprocessableEntity
            outputFormat: 'json'
            status: 422
          }
      $get:
        | {
            input: {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                external_customer_id?: string | undefined
                amount_from?: number | undefined
                amount_to?: number | undefined
                issuing_date_from?: string | undefined
                issuing_date_to?: string | undefined
                status?: 'draft' | 'finalized' | 'failed' | 'pending' | 'voided' | undefined
                'statuses[]'?:
                  | ('draft' | 'finalized' | 'failed' | 'pending' | 'voided')[]
                  | undefined
                payment_status?: 'pending' | 'failed' | 'succeeded' | undefined
                'payment_statuses[]'?: ('pending' | 'failed' | 'succeeded')[] | undefined
                payment_overdue?: boolean | undefined
                search_term?: string | undefined
                currency?: string | undefined
                payment_dispute_lost?: boolean | undefined
                partially_paid?: boolean | undefined
                'settlements[]'?: ('payment' | 'credit_note')[] | undefined
                invoice_type?:
                  | 'subscription'
                  | 'add_on'
                  | 'credit'
                  | 'one_off'
                  | 'advance_charges'
                  | 'progressive_billing'
                  | undefined
                self_billed?: boolean | undefined
                'billing_entity_codes[]'?: string[] | undefined
                'metadata[key]'?: string | undefined
                purchase_order_number?: string | undefined
              }
            }
            output: InvoicesPaginated
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                external_customer_id?: string | undefined
                amount_from?: number | undefined
                amount_to?: number | undefined
                issuing_date_from?: string | undefined
                issuing_date_to?: string | undefined
                status?: 'draft' | 'finalized' | 'failed' | 'pending' | 'voided' | undefined
                'statuses[]'?:
                  | ('draft' | 'finalized' | 'failed' | 'pending' | 'voided')[]
                  | undefined
                payment_status?: 'pending' | 'failed' | 'succeeded' | undefined
                'payment_statuses[]'?: ('pending' | 'failed' | 'succeeded')[] | undefined
                payment_overdue?: boolean | undefined
                search_term?: string | undefined
                currency?: string | undefined
                payment_dispute_lost?: boolean | undefined
                partially_paid?: boolean | undefined
                'settlements[]'?: ('payment' | 'credit_note')[] | undefined
                invoice_type?:
                  | 'subscription'
                  | 'add_on'
                  | 'credit'
                  | 'one_off'
                  | 'advance_charges'
                  | 'progressive_billing'
                  | undefined
                self_billed?: boolean | undefined
                'billing_entity_codes[]'?: string[] | undefined
                'metadata[key]'?: string | undefined
                purchase_order_number?: string | undefined
              }
            }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                external_customer_id?: string | undefined
                amount_from?: number | undefined
                amount_to?: number | undefined
                issuing_date_from?: string | undefined
                issuing_date_to?: string | undefined
                status?: 'draft' | 'finalized' | 'failed' | 'pending' | 'voided' | undefined
                'statuses[]'?:
                  | ('draft' | 'finalized' | 'failed' | 'pending' | 'voided')[]
                  | undefined
                payment_status?: 'pending' | 'failed' | 'succeeded' | undefined
                'payment_statuses[]'?: ('pending' | 'failed' | 'succeeded')[] | undefined
                payment_overdue?: boolean | undefined
                search_term?: string | undefined
                currency?: string | undefined
                payment_dispute_lost?: boolean | undefined
                partially_paid?: boolean | undefined
                'settlements[]'?: ('payment' | 'credit_note')[] | undefined
                invoice_type?:
                  | 'subscription'
                  | 'add_on'
                  | 'credit'
                  | 'one_off'
                  | 'advance_charges'
                  | 'progressive_billing'
                  | undefined
                self_billed?: boolean | undefined
                'billing_entity_codes[]'?: string[] | undefined
                'metadata[key]'?: string | undefined
                purchase_order_number?: string | undefined
              }
            }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                external_customer_id?: string | undefined
                amount_from?: number | undefined
                amount_to?: number | undefined
                issuing_date_from?: string | undefined
                issuing_date_to?: string | undefined
                status?: 'draft' | 'finalized' | 'failed' | 'pending' | 'voided' | undefined
                'statuses[]'?:
                  | ('draft' | 'finalized' | 'failed' | 'pending' | 'voided')[]
                  | undefined
                payment_status?: 'pending' | 'failed' | 'succeeded' | undefined
                'payment_statuses[]'?: ('pending' | 'failed' | 'succeeded')[] | undefined
                payment_overdue?: boolean | undefined
                search_term?: string | undefined
                currency?: string | undefined
                payment_dispute_lost?: boolean | undefined
                partially_paid?: boolean | undefined
                'settlements[]'?: ('payment' | 'credit_note')[] | undefined
                invoice_type?:
                  | 'subscription'
                  | 'add_on'
                  | 'credit'
                  | 'one_off'
                  | 'advance_charges'
                  | 'progressive_billing'
                  | undefined
                self_billed?: boolean | undefined
                'billing_entity_codes[]'?: string[] | undefined
                'metadata[key]'?: string | undefined
                purchase_order_number?: string | undefined
              }
            }
            output: ApiErrorUnprocessableEntity
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/invoices/:lago_id': {
      $put:
        | {
            input: { param: { lago_id: string } } & { json: InvoiceUpdateInput }
            output: Invoice
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { lago_id: string } } & { json: InvoiceUpdateInput }
            output: ApiErrorBadRequest
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { lago_id: string } } & { json: InvoiceUpdateInput }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { lago_id: string } } & { json: InvoiceUpdateInput }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { lago_id: string } } & { json: InvoiceUpdateInput }
            output: ApiErrorNotAllowed
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { lago_id: string } } & { json: InvoiceUpdateInput }
            output: ApiErrorUnprocessableEntity
            outputFormat: 'json'
            status: 422
          }
      $get:
        | {
            input: { param: { lago_id: string } }
            output: Invoice
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { lago_id: string } }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { lago_id: string } }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
      $delete:
        | {
            input: { param: { lago_id: string } }
            output: Invoice
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { lago_id: string } }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { lago_id: string } }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { lago_id: string } }
            output: ApiErrorNotAllowed
            outputFormat: 'json'
            status: 405
          }
    }
  } & {
    '/invoices/:lago_id/download': {
      $post:
        | {
            input: { param: { lago_id: string } }
            output: Invoice
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { lago_id: string } }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { lago_id: string } }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/invoices/:lago_id/download_xml': {
      $post:
        | {
            input: { param: { lago_id: string } }
            output: Invoice
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { lago_id: string } }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { lago_id: string } }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/invoices/:lago_id/finalize': {
      $put:
        | {
            input: { param: { lago_id: string } }
            output: Invoice
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { lago_id: string } }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { lago_id: string } }
            output: ApiErrorForbidden
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { lago_id: string } }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/invoices/:lago_id/lose_dispute': {
      $post:
        | {
            input: { param: { lago_id: string } }
            output: Invoice
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { lago_id: string } }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { lago_id: string } }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { lago_id: string } }
            output: ApiErrorNotAllowed
            outputFormat: 'json'
            status: 405
          }
    }
  } & {
    '/invoices/:lago_id/refresh': {
      $put:
        | {
            input: { param: { lago_id: string } }
            output: Invoice
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { lago_id: string } }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { lago_id: string } }
            output: ApiErrorForbidden
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { lago_id: string } }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/invoices/:lago_id/retry': {
      $post:
        | {
            input: { param: { lago_id: string } }
            output: Invoice
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { lago_id: string } }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { lago_id: string } }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { lago_id: string } }
            output: ApiErrorNotAllowed
            outputFormat: 'json'
            status: 405
          }
    }
  } & {
    '/invoices/:lago_id/payment_url': {
      $post:
        | {
            input: { param: { lago_id: string } }
            output: InvoicePaymentUrl
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { lago_id: string } }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { lago_id: string } }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { lago_id: string } }
            output: ApiErrorUnprocessableEntity
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/invoices/preview': {
      $post:
        | {
            input: { json: InvoicePreviewInput }
            output: Invoice
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: InvoicePreviewInput }
            output: ApiErrorBadRequest
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: InvoicePreviewInput }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: InvoicePreviewInput }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: InvoicePreviewInput }
            output: ApiErrorUnprocessableEntity
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/invoices/:lago_id/retry_payment': {
      $post:
        | {
            input: { param: { lago_id: string } } & {
              json: { payment_method?: PaymentMethodReference | undefined }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { lago_id: string } } & {
              json: { payment_method?: PaymentMethodReference | undefined }
            }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { lago_id: string } } & {
              json: { payment_method?: PaymentMethodReference | undefined }
            }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { lago_id: string } } & {
              json: { payment_method?: PaymentMethodReference | undefined }
            }
            output: ApiErrorNotAllowed
            outputFormat: 'json'
            status: 405
          }
    }
  } & {
    '/invoices/:lago_id/void': {
      $post:
        | {
            input: { param: { lago_id: string } } & { json: InvoiceVoidInput }
            output: Invoice
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { lago_id: string } } & { json: InvoiceVoidInput }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { lago_id: string } } & { json: InvoiceVoidInput }
            output: ApiErrorForbidden
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { lago_id: string } } & { json: InvoiceVoidInput }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { lago_id: string } } & { json: InvoiceVoidInput }
            output: ApiErrorNotAllowed
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { lago_id: string } } & { json: InvoiceVoidInput }
            output: ApiErrorUnprocessableEntity
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/order_forms': {
      $get:
        | {
            input: {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                'status[]'?: ('generated' | 'signed' | 'expired' | 'voided')[] | undefined
                'customer_id[]'?: string[] | undefined
                'number[]'?: string[] | undefined
                'quote_number[]'?: string[] | undefined
                'owner_id[]'?: string[] | undefined
                search_term?: string | undefined
                created_at_from?: string | undefined
                created_at_to?: string | undefined
                expires_at_from?: string | undefined
                expires_at_to?: string | undefined
              }
            }
            output: OrderFormsPaginated
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                'status[]'?: ('generated' | 'signed' | 'expired' | 'voided')[] | undefined
                'customer_id[]'?: string[] | undefined
                'number[]'?: string[] | undefined
                'quote_number[]'?: string[] | undefined
                'owner_id[]'?: string[] | undefined
                search_term?: string | undefined
                created_at_from?: string | undefined
                created_at_to?: string | undefined
                expires_at_from?: string | undefined
                expires_at_to?: string | undefined
              }
            }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                'status[]'?: ('generated' | 'signed' | 'expired' | 'voided')[] | undefined
                'customer_id[]'?: string[] | undefined
                'number[]'?: string[] | undefined
                'quote_number[]'?: string[] | undefined
                'owner_id[]'?: string[] | undefined
                search_term?: string | undefined
                created_at_from?: string | undefined
                created_at_to?: string | undefined
                expires_at_from?: string | undefined
                expires_at_to?: string | undefined
              }
            }
            output: ApiErrorForbidden
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                'status[]'?: ('generated' | 'signed' | 'expired' | 'voided')[] | undefined
                'customer_id[]'?: string[] | undefined
                'number[]'?: string[] | undefined
                'quote_number[]'?: string[] | undefined
                'owner_id[]'?: string[] | undefined
                search_term?: string | undefined
                created_at_from?: string | undefined
                created_at_to?: string | undefined
                expires_at_from?: string | undefined
                expires_at_to?: string | undefined
              }
            }
            output: ApiErrorUnprocessableEntity
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/order_forms/:lago_id': {
      $get:
        | {
            input: { param: { lago_id: string } }
            output: OrderForm
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { lago_id: string } }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { lago_id: string } }
            output: ApiErrorForbidden
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { lago_id: string } }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/order_forms/:lago_id/mark_as_signed': {
      $post:
        | {
            input: { param: { lago_id: string } } & { json: OrderFormMarkAsSignedInput }
            output: OrderForm
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { lago_id: string } } & { json: OrderFormMarkAsSignedInput }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { lago_id: string } } & { json: OrderFormMarkAsSignedInput }
            output: ApiErrorForbidden
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { lago_id: string } } & { json: OrderFormMarkAsSignedInput }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { lago_id: string } } & { json: OrderFormMarkAsSignedInput }
            output: ApiErrorUnprocessableEntity
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/order_forms/:lago_id/void': {
      $post:
        | {
            input: { param: { lago_id: string } }
            output: OrderForm
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { lago_id: string } }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { lago_id: string } }
            output: ApiErrorForbidden
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { lago_id: string } }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { lago_id: string } }
            output: ApiErrorUnprocessableEntity
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/orders': {
      $get:
        | {
            input: {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                'status[]'?: ('created' | 'executed' | 'failed')[] | undefined
                'order_type[]'?:
                  | ('subscription_creation' | 'subscription_amendment' | 'one_off')[]
                  | undefined
                'execution_mode[]'?: ('execute_in_lago' | 'order_only')[] | undefined
                'customer_id[]'?: string[] | undefined
                'number[]'?: string[] | undefined
                'order_form_number[]'?: string[] | undefined
                'quote_number[]'?: string[] | undefined
                'owner_id[]'?: string[] | undefined
                search_term?: string | undefined
                executed_at_from?: string | undefined
                executed_at_to?: string | undefined
              }
            }
            output: OrdersPaginated
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                'status[]'?: ('created' | 'executed' | 'failed')[] | undefined
                'order_type[]'?:
                  | ('subscription_creation' | 'subscription_amendment' | 'one_off')[]
                  | undefined
                'execution_mode[]'?: ('execute_in_lago' | 'order_only')[] | undefined
                'customer_id[]'?: string[] | undefined
                'number[]'?: string[] | undefined
                'order_form_number[]'?: string[] | undefined
                'quote_number[]'?: string[] | undefined
                'owner_id[]'?: string[] | undefined
                search_term?: string | undefined
                executed_at_from?: string | undefined
                executed_at_to?: string | undefined
              }
            }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                'status[]'?: ('created' | 'executed' | 'failed')[] | undefined
                'order_type[]'?:
                  | ('subscription_creation' | 'subscription_amendment' | 'one_off')[]
                  | undefined
                'execution_mode[]'?: ('execute_in_lago' | 'order_only')[] | undefined
                'customer_id[]'?: string[] | undefined
                'number[]'?: string[] | undefined
                'order_form_number[]'?: string[] | undefined
                'quote_number[]'?: string[] | undefined
                'owner_id[]'?: string[] | undefined
                search_term?: string | undefined
                executed_at_from?: string | undefined
                executed_at_to?: string | undefined
              }
            }
            output: ApiErrorForbidden
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                'status[]'?: ('created' | 'executed' | 'failed')[] | undefined
                'order_type[]'?:
                  | ('subscription_creation' | 'subscription_amendment' | 'one_off')[]
                  | undefined
                'execution_mode[]'?: ('execute_in_lago' | 'order_only')[] | undefined
                'customer_id[]'?: string[] | undefined
                'number[]'?: string[] | undefined
                'order_form_number[]'?: string[] | undefined
                'quote_number[]'?: string[] | undefined
                'owner_id[]'?: string[] | undefined
                search_term?: string | undefined
                executed_at_from?: string | undefined
                executed_at_to?: string | undefined
              }
            }
            output: ApiErrorUnprocessableEntity
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/orders/:lago_id': {
      $get:
        | {
            input: { param: { lago_id: string } }
            output: Order
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { lago_id: string } }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { lago_id: string } }
            output: ApiErrorForbidden
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { lago_id: string } }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/orders/:lago_id/execute': {
      $post:
        | {
            input: { param: { lago_id: string } } & { json: OrderExecuteInput }
            output: Order
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { lago_id: string } } & { json: OrderExecuteInput }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { lago_id: string } } & { json: OrderExecuteInput }
            output: ApiErrorForbidden
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { lago_id: string } } & { json: OrderExecuteInput }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { lago_id: string } } & { json: OrderExecuteInput }
            output: ApiErrorUnprocessableEntity
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/organizations': {
      $get:
        | { input: {}; output: Organization; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ApiErrorUnauthorized; outputFormat: 'json'; status: 401 }
      $put:
        | {
            input: { json: OrganizationUpdateInput }
            output: Organization
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: OrganizationUpdateInput }
            output: ApiErrorBadRequest
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: OrganizationUpdateInput }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: OrganizationUpdateInput }
            output: ApiErrorUnprocessableEntity
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/payment_receipts': {
      $get:
        | {
            input: {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                invoice_id?: string | undefined
              }
            }
            output: PaymentReceiptsPaginated
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                invoice_id?: string | undefined
              }
            }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                invoice_id?: string | undefined
              }
            }
            output: ApiErrorForbidden
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                invoice_id?: string | undefined
              }
            }
            output: ApiErrorUnprocessableEntity
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/payment_receipts/:lago_id': {
      $get:
        | {
            input: { param: { lago_id: string } }
            output: PaymentReceipt
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { lago_id: string } }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { lago_id: string } }
            output: ApiErrorForbidden
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { lago_id: string } }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/payment_requests': {
      $post:
        | {
            input: { json: PaymentRequestCreateInput }
            output: PaymentRequest
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: PaymentRequestCreateInput }
            output: ApiErrorBadRequest
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: PaymentRequestCreateInput }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: PaymentRequestCreateInput }
            output: ApiErrorForbidden
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: PaymentRequestCreateInput }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: PaymentRequestCreateInput }
            output: ApiErrorNotAllowed
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { json: PaymentRequestCreateInput }
            output: ApiErrorUnprocessableEntity
            outputFormat: 'json'
            status: 422
          }
      $get:
        | {
            input: {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                currency?: string | undefined
                external_customer_id?: string | undefined
                payment_status?: 'pending' | 'failed' | 'succeeded' | undefined
                'billing_entity_codes[]'?: string[] | undefined
              }
            }
            output: PaymentRequestsPaginated
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                currency?: string | undefined
                external_customer_id?: string | undefined
                payment_status?: 'pending' | 'failed' | 'succeeded' | undefined
                'billing_entity_codes[]'?: string[] | undefined
              }
            }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                currency?: string | undefined
                external_customer_id?: string | undefined
                payment_status?: 'pending' | 'failed' | 'succeeded' | undefined
                'billing_entity_codes[]'?: string[] | undefined
              }
            }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/payment_requests/:lago_id': {
      $get:
        | {
            input: { param: { lago_id: string } }
            output: PaymentRequest
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { lago_id: string } }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { lago_id: string } }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/payments': {
      $post:
        | {
            input: { json: PaymentCreateInput }
            output: Payment
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: PaymentCreateInput }
            output: ApiErrorBadRequest
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: PaymentCreateInput }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: PaymentCreateInput }
            output: ApiErrorForbidden
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: PaymentCreateInput }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: PaymentCreateInput }
            output: ApiErrorUnprocessableEntity
            outputFormat: 'json'
            status: 422
          }
      $get:
        | {
            input: {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                external_customer_id?: string | undefined
                invoice_id?: string | undefined
              }
            }
            output: PaymentsPaginated
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                external_customer_id?: string | undefined
                invoice_id?: string | undefined
              }
            }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                external_customer_id?: string | undefined
                invoice_id?: string | undefined
              }
            }
            output: ApiErrorUnprocessableEntity
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/payments/:lago_id': {
      $get:
        | {
            input: { param: { lago_id: string } }
            output: Payment
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { lago_id: string } }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { lago_id: string } }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/plans': {
      $post:
        | { input: { json: PlanCreateInput }; output: Plan; outputFormat: 'json'; status: 200 }
        | {
            input: { json: PlanCreateInput }
            output: ApiErrorBadRequest
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: PlanCreateInput }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: PlanCreateInput }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: PlanCreateInput }
            output: ApiErrorUnprocessableEntity
            outputFormat: 'json'
            status: 422
          }
      $get:
        | {
            input: { query: { page?: number | undefined; per_page?: number | undefined } }
            output: PlansPaginated
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { page?: number | undefined; per_page?: number | undefined } }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/plans/:code': {
      $put:
        | {
            input: { param: { code: string } } & { json: PlanUpdateInput }
            output: Plan
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { code: string } } & { json: PlanUpdateInput }
            output: ApiErrorBadRequest
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { code: string } } & { json: PlanUpdateInput }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { code: string } } & { json: PlanUpdateInput }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { code: string } } & { json: PlanUpdateInput }
            output: ApiErrorUnprocessableEntity
            outputFormat: 'json'
            status: 422
          }
      $get:
        | { input: { param: { code: string } }; output: Plan; outputFormat: 'json'; status: 200 }
        | {
            input: { param: { code: string } }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { code: string } }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
      $delete:
        | { input: { param: { code: string } }; output: Plan; outputFormat: 'json'; status: 200 }
        | {
            input: { param: { code: string } }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { code: string } }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/plans/:code/entitlements': {
      $post:
        | {
            input: { param: { code: string } } & { json: EntitlementUpdateInput }
            output: PlanEntitlements
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { code: string } } & { json: EntitlementUpdateInput }
            output: ApiErrorBadRequest
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { code: string } } & { json: EntitlementUpdateInput }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { code: string } } & { json: EntitlementUpdateInput }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { code: string } } & { json: EntitlementUpdateInput }
            output: ApiErrorUnprocessableEntity
            outputFormat: 'json'
            status: 422
          }
      $get:
        | {
            input: { param: { code: string } }
            output: PlanEntitlements
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { code: string } }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { code: string } }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: { param: { code: string } } & { json: EntitlementUpdateInput }
            output: PlanEntitlements
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { code: string } } & { json: EntitlementUpdateInput }
            output: ApiErrorBadRequest
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { code: string } } & { json: EntitlementUpdateInput }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { code: string } } & { json: EntitlementUpdateInput }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { code: string } } & { json: EntitlementUpdateInput }
            output: ApiErrorUnprocessableEntity
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/plans/:code/entitlements/:feature_code': {
      $get:
        | {
            input: { param: { code: string; feature_code: string } }
            output: PlanEntitlement
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { code: string; feature_code: string } }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { code: string; feature_code: string } }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
      $delete:
        | {
            input: { param: { code: string; feature_code: string } }
            output: PlanEntitlement
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { code: string; feature_code: string } }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { code: string; feature_code: string } }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/plans/:code/entitlements/:feature_code/privileges/:privilege_code': {
      $delete:
        | {
            input: { param: { code: string; feature_code: string; privilege_code: string } }
            output: PlanEntitlement
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { code: string; feature_code: string; privilege_code: string } }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { code: string; feature_code: string; privilege_code: string } }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/plans/:code/metadata': {
      $post:
        | {
            input: { param: { code: string } } & { json: PlanMetadataResponse }
            output: PlanMetadataResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { code: string } } & { json: PlanMetadataResponse }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { code: string } } & { json: PlanMetadataResponse }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { code: string } } & { json: PlanMetadataResponse }
            output: ApiErrorUnprocessableEntity
            outputFormat: 'json'
            status: 422
          }
      $patch:
        | {
            input: { param: { code: string } } & { json: PlanMetadataResponse }
            output: PlanMetadataResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { code: string } } & { json: PlanMetadataResponse }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { code: string } } & { json: PlanMetadataResponse }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { code: string } } & { json: PlanMetadataResponse }
            output: ApiErrorUnprocessableEntity
            outputFormat: 'json'
            status: 422
          }
      $delete:
        | {
            input: { param: { code: string } }
            output: PlanMetadataResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { code: string } }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { code: string } }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/plans/:code/metadata/:key': {
      $delete:
        | {
            input: { param: { code: string; key: string } }
            output: PlanMetadataResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { code: string; key: string } }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { code: string; key: string } }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/plans/:code/charges': {
      $post:
        | {
            input: { param: { code: string } } & { json: ChargeCreateInput }
            output: Charge
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { code: string } } & { json: ChargeCreateInput }
            output: ApiErrorBadRequest
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { code: string } } & { json: ChargeCreateInput }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { code: string } } & { json: ChargeCreateInput }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { code: string } } & { json: ChargeCreateInput }
            output: ApiErrorUnprocessableEntity
            outputFormat: 'json'
            status: 422
          }
      $get:
        | {
            input: { param: { code: string } } & {
              query: { page?: number | undefined; per_page?: number | undefined }
            }
            output: ChargesPaginated
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { code: string } } & {
              query: { page?: number | undefined; per_page?: number | undefined }
            }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { code: string } } & {
              query: { page?: number | undefined; per_page?: number | undefined }
            }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/plans/:code/charges/:charge_code': {
      $get:
        | {
            input: { param: { code: string; charge_code: string } }
            output: Charge
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { code: string; charge_code: string } }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { code: string; charge_code: string } }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { code: string; charge_code: string } } & { json: ChargeUpdateInput }
            output: Charge
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { code: string; charge_code: string } } & { json: ChargeUpdateInput }
            output: ApiErrorBadRequest
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { code: string; charge_code: string } } & { json: ChargeUpdateInput }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { code: string; charge_code: string } } & { json: ChargeUpdateInput }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { code: string; charge_code: string } } & { json: ChargeUpdateInput }
            output: ApiErrorUnprocessableEntity
            outputFormat: 'json'
            status: 422
          }
      $delete:
        | {
            input: { param: { code: string; charge_code: string } } & { json: ChargeDeleteInput }
            output: Charge
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { code: string; charge_code: string } } & { json: ChargeDeleteInput }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { code: string; charge_code: string } } & { json: ChargeDeleteInput }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/plans/:code/charges/:charge_code/filters': {
      $post:
        | {
            input: { param: { code: string; charge_code: string } } & {
              json: ChargeFilterCreateInput
            }
            output: ChargeFilterResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { code: string; charge_code: string } } & {
              json: ChargeFilterCreateInput
            }
            output: ApiErrorBadRequest
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { code: string; charge_code: string } } & {
              json: ChargeFilterCreateInput
            }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { code: string; charge_code: string } } & {
              json: ChargeFilterCreateInput
            }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { code: string; charge_code: string } } & {
              json: ChargeFilterCreateInput
            }
            output: ApiErrorUnprocessableEntity
            outputFormat: 'json'
            status: 422
          }
      $get:
        | {
            input: { param: { code: string; charge_code: string } } & {
              query: { page?: number | undefined; per_page?: number | undefined }
            }
            output: ChargeFiltersPaginated
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { code: string; charge_code: string } } & {
              query: { page?: number | undefined; per_page?: number | undefined }
            }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { code: string; charge_code: string } } & {
              query: { page?: number | undefined; per_page?: number | undefined }
            }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/plans/:code/charges/:charge_code/filters/:filter_id': {
      $get:
        | {
            input: { param: { code: string; charge_code: string; filter_id: string } }
            output: ChargeFilterResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { code: string; charge_code: string; filter_id: string } }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { code: string; charge_code: string; filter_id: string } }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { code: string; charge_code: string; filter_id: string } } & {
              json: ChargeFilterUpdateInput
            }
            output: ChargeFilterResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { code: string; charge_code: string; filter_id: string } } & {
              json: ChargeFilterUpdateInput
            }
            output: ApiErrorBadRequest
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { code: string; charge_code: string; filter_id: string } } & {
              json: ChargeFilterUpdateInput
            }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { code: string; charge_code: string; filter_id: string } } & {
              json: ChargeFilterUpdateInput
            }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { code: string; charge_code: string; filter_id: string } } & {
              json: ChargeFilterUpdateInput
            }
            output: ApiErrorUnprocessableEntity
            outputFormat: 'json'
            status: 422
          }
      $delete:
        | {
            input: { param: { code: string; charge_code: string; filter_id: string } } & {
              json: ChargeFilterDeleteInput
            }
            output: ChargeFilterResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { code: string; charge_code: string; filter_id: string } } & {
              json: ChargeFilterDeleteInput
            }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { code: string; charge_code: string; filter_id: string } } & {
              json: ChargeFilterDeleteInput
            }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/plans/:code/fixed_charges': {
      $post:
        | {
            input: { param: { code: string } } & { json: FixedChargeCreateInput }
            output: FixedCharge
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { code: string } } & { json: FixedChargeCreateInput }
            output: ApiErrorBadRequest
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { code: string } } & { json: FixedChargeCreateInput }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { code: string } } & { json: FixedChargeCreateInput }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { code: string } } & { json: FixedChargeCreateInput }
            output: ApiErrorUnprocessableEntity
            outputFormat: 'json'
            status: 422
          }
      $get:
        | {
            input: { param: { code: string } } & {
              query: { page?: number | undefined; per_page?: number | undefined }
            }
            output: FixedChargesPaginated
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { code: string } } & {
              query: { page?: number | undefined; per_page?: number | undefined }
            }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { code: string } } & {
              query: { page?: number | undefined; per_page?: number | undefined }
            }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/plans/:code/fixed_charges/:fixed_charge_code': {
      $get:
        | {
            input: { param: { code: string; fixed_charge_code: string } }
            output: FixedCharge
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { code: string; fixed_charge_code: string } }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { code: string; fixed_charge_code: string } }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { code: string; fixed_charge_code: string } } & {
              json: FixedChargeUpdateInput
            }
            output: FixedCharge
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { code: string; fixed_charge_code: string } } & {
              json: FixedChargeUpdateInput
            }
            output: ApiErrorBadRequest
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { code: string; fixed_charge_code: string } } & {
              json: FixedChargeUpdateInput
            }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { code: string; fixed_charge_code: string } } & {
              json: FixedChargeUpdateInput
            }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { code: string; fixed_charge_code: string } } & {
              json: FixedChargeUpdateInput
            }
            output: ApiErrorUnprocessableEntity
            outputFormat: 'json'
            status: 422
          }
      $delete:
        | {
            input: { param: { code: string; fixed_charge_code: string } } & {
              json: FixedChargeDeleteInput
            }
            output: FixedCharge
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { code: string; fixed_charge_code: string } } & {
              json: FixedChargeDeleteInput
            }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { code: string; fixed_charge_code: string } } & {
              json: FixedChargeDeleteInput
            }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/quotes': {
      $get:
        | {
            input: {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                'status[]'?: ('draft' | 'approved' | 'voided')[] | undefined
                'order_type[]'?:
                  | ('subscription_creation' | 'subscription_amendment' | 'one_off')[]
                  | undefined
                'number[]'?: string[] | undefined
                'owner_id[]'?: string[] | undefined
                'external_customer_id[]'?: string[] | undefined
                from_date?: string | undefined
                to_date?: string | undefined
              }
            }
            output: QuotesPaginated
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                'status[]'?: ('draft' | 'approved' | 'voided')[] | undefined
                'order_type[]'?:
                  | ('subscription_creation' | 'subscription_amendment' | 'one_off')[]
                  | undefined
                'number[]'?: string[] | undefined
                'owner_id[]'?: string[] | undefined
                'external_customer_id[]'?: string[] | undefined
                from_date?: string | undefined
                to_date?: string | undefined
              }
            }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                'status[]'?: ('draft' | 'approved' | 'voided')[] | undefined
                'order_type[]'?:
                  | ('subscription_creation' | 'subscription_amendment' | 'one_off')[]
                  | undefined
                'number[]'?: string[] | undefined
                'owner_id[]'?: string[] | undefined
                'external_customer_id[]'?: string[] | undefined
                from_date?: string | undefined
                to_date?: string | undefined
              }
            }
            output: ApiErrorForbidden
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                'status[]'?: ('draft' | 'approved' | 'voided')[] | undefined
                'order_type[]'?:
                  | ('subscription_creation' | 'subscription_amendment' | 'one_off')[]
                  | undefined
                'number[]'?: string[] | undefined
                'owner_id[]'?: string[] | undefined
                'external_customer_id[]'?: string[] | undefined
                from_date?: string | undefined
                to_date?: string | undefined
              }
            }
            output: ApiErrorUnprocessableEntity
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/quotes/:lago_id': {
      $get:
        | {
            input: { param: { lago_id: string } }
            output: Quote
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { lago_id: string } }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { lago_id: string } }
            output: ApiErrorForbidden
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { lago_id: string } }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/quotes/:lago_id/versions': {
      $get:
        | {
            input: { param: { lago_id: string } } & {
              query: { page?: number | undefined; per_page?: number | undefined }
            }
            output: QuoteVersionsPaginated
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { lago_id: string } } & {
              query: { page?: number | undefined; per_page?: number | undefined }
            }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { lago_id: string } } & {
              query: { page?: number | undefined; per_page?: number | undefined }
            }
            output: ApiErrorForbidden
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { lago_id: string } } & {
              query: { page?: number | undefined; per_page?: number | undefined }
            }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/quote_versions/:lago_id': {
      $get:
        | {
            input: { param: { lago_id: string } }
            output: QuoteVersion
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { lago_id: string } }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { lago_id: string } }
            output: ApiErrorForbidden
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { lago_id: string } }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/quote_versions/:lago_id/approve': {
      $post:
        | {
            input: { param: { lago_id: string } } & { json: QuoteVersionApproveInput }
            output: QuoteVersion
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { lago_id: string } } & { json: QuoteVersionApproveInput }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { lago_id: string } } & { json: QuoteVersionApproveInput }
            output: ApiErrorForbidden
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { lago_id: string } } & { json: QuoteVersionApproveInput }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { lago_id: string } } & { json: QuoteVersionApproveInput }
            output: ApiErrorUnprocessableEntity
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/quote_versions/:lago_id/void': {
      $post:
        | {
            input: { param: { lago_id: string } }
            output: QuoteVersion
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { lago_id: string } }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { lago_id: string } }
            output: ApiErrorForbidden
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { lago_id: string } }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { lago_id: string } }
            output: ApiErrorUnprocessableEntity
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/quote_versions/:lago_id/clone': {
      $post:
        | {
            input: { param: { lago_id: string } }
            output: QuoteVersion
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { lago_id: string } }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { lago_id: string } }
            output: ApiErrorForbidden
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { lago_id: string } }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { lago_id: string } }
            output: ApiErrorUnprocessableEntity
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/subscriptions': {
      $post:
        | {
            input: { json: SubscriptionCreateInput }
            output: SubscriptionExtended
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: SubscriptionCreateInput }
            output: ApiErrorBadRequest
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: SubscriptionCreateInput }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: SubscriptionCreateInput }
            output: ApiErrorForbidden
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: SubscriptionCreateInput }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: SubscriptionCreateInput }
            output: ApiErrorUnprocessableEntity
            outputFormat: 'json'
            status: 422
          }
      $get:
        | {
            input: {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                currency?: string | undefined
                external_customer_id?: string | undefined
                external_id?: string | undefined
                plan_code?: string | undefined
                overridden?: boolean | undefined
                'status[]'?:
                  | ('active' | 'canceled' | 'incomplete' | 'pending' | 'terminated')[]
                  | undefined
                'billing_entity_codes[]'?: string[] | undefined
              }
            }
            output: SubscriptionsPaginated
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                currency?: string | undefined
                external_customer_id?: string | undefined
                external_id?: string | undefined
                plan_code?: string | undefined
                overridden?: boolean | undefined
                'status[]'?:
                  | ('active' | 'canceled' | 'incomplete' | 'pending' | 'terminated')[]
                  | undefined
                'billing_entity_codes[]'?: string[] | undefined
              }
            }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                currency?: string | undefined
                external_customer_id?: string | undefined
                external_id?: string | undefined
                plan_code?: string | undefined
                overridden?: boolean | undefined
                'status[]'?:
                  | ('active' | 'canceled' | 'incomplete' | 'pending' | 'terminated')[]
                  | undefined
                'billing_entity_codes[]'?: string[] | undefined
              }
            }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/subscriptions/:external_id': {
      $get:
        | {
            input: { param: { external_id: string } } & {
              query: {
                status?: 'active' | 'terminated' | 'pending' | 'canceled' | 'incomplete' | undefined
              }
            }
            output: SubscriptionExtended
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { external_id: string } } & {
              query: {
                status?: 'active' | 'terminated' | 'pending' | 'canceled' | 'incomplete' | undefined
              }
            }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { external_id: string } } & {
              query: {
                status?: 'active' | 'terminated' | 'pending' | 'canceled' | 'incomplete' | undefined
              }
            }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { external_id: string } } & {
              query: { status?: 'active' | 'pending' | undefined }
            } & { json: SubscriptionUpdateInput }
            output: SubscriptionExtended
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { external_id: string } } & {
              query: { status?: 'active' | 'pending' | undefined }
            } & { json: SubscriptionUpdateInput }
            output: ApiErrorBadRequest
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { external_id: string } } & {
              query: { status?: 'active' | 'pending' | undefined }
            } & { json: SubscriptionUpdateInput }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { external_id: string } } & {
              query: { status?: 'active' | 'pending' | undefined }
            } & { json: SubscriptionUpdateInput }
            output: ApiErrorForbidden
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { external_id: string } } & {
              query: { status?: 'active' | 'pending' | undefined }
            } & { json: SubscriptionUpdateInput }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { external_id: string } } & {
              query: { status?: 'active' | 'pending' | undefined }
            } & { json: SubscriptionUpdateInput }
            output: ApiErrorNotAllowed
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { external_id: string } } & {
              query: { status?: 'active' | 'pending' | undefined }
            } & { json: SubscriptionUpdateInput }
            output: ApiErrorUnprocessableEntity
            outputFormat: 'json'
            status: 422
          }
      $delete:
        | {
            input: { param: { external_id: string } } & {
              query: {
                status?: string | undefined
                on_termination_credit_note?: 'credit' | 'refund' | 'offset' | 'skip' | undefined
                on_termination_invoice?: 'generate' | 'skip' | undefined
              }
            }
            output: SubscriptionExtended
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { external_id: string } } & {
              query: {
                status?: string | undefined
                on_termination_credit_note?: 'credit' | 'refund' | 'offset' | 'skip' | undefined
                on_termination_invoice?: 'generate' | 'skip' | undefined
              }
            }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { external_id: string } } & {
              query: {
                status?: string | undefined
                on_termination_credit_note?: 'credit' | 'refund' | 'offset' | 'skip' | undefined
                on_termination_invoice?: 'generate' | 'skip' | undefined
              }
            }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { external_id: string } } & {
              query: {
                status?: string | undefined
                on_termination_credit_note?: 'credit' | 'refund' | 'offset' | 'skip' | undefined
                on_termination_invoice?: 'generate' | 'skip' | undefined
              }
            }
            output: ApiErrorNotAllowed
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { external_id: string } } & {
              query: {
                status?: string | undefined
                on_termination_credit_note?: 'credit' | 'refund' | 'offset' | 'skip' | undefined
                on_termination_invoice?: 'generate' | 'skip' | undefined
              }
            }
            output: ApiErrorUnprocessableEntity
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/subscriptions/:external_id/lifetime_usage': {
      $get:
        | {
            input: { param: { external_id: string } }
            output: LifetimeUsage
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { external_id: string } }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { external_id: string } }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { external_id: string } } & { json: LifetimeUsageInput }
            output: LifetimeUsage
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { external_id: string } } & { json: LifetimeUsageInput }
            output: ApiErrorBadRequest
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { external_id: string } } & { json: LifetimeUsageInput }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { external_id: string } } & { json: LifetimeUsageInput }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { external_id: string } } & { json: LifetimeUsageInput }
            output: ApiErrorUnprocessableEntity
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/subscriptions/:external_id/alerts': {
      $get:
        | {
            input: { param: { external_id: string } } & {
              query: {
                subscription_status?:
                  | 'pending'
                  | 'active'
                  | 'terminated'
                  | 'canceled'
                  | 'incomplete'
                  | undefined
                page?: number | undefined
                per_page?: number | undefined
              }
            }
            output: Alerts
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { external_id: string } } & {
              query: {
                subscription_status?:
                  | 'pending'
                  | 'active'
                  | 'terminated'
                  | 'canceled'
                  | 'incomplete'
                  | undefined
                page?: number | undefined
                per_page?: number | undefined
              }
            }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { external_id: string } } & {
              query: {
                subscription_status?:
                  | 'pending'
                  | 'active'
                  | 'terminated'
                  | 'canceled'
                  | 'incomplete'
                  | undefined
                page?: number | undefined
                per_page?: number | undefined
              }
            }
            output: ApiErrorForbidden
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { external_id: string } } & {
              query: {
                subscription_status?:
                  | 'pending'
                  | 'active'
                  | 'terminated'
                  | 'canceled'
                  | 'incomplete'
                  | undefined
                page?: number | undefined
                per_page?: number | undefined
              }
            }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { external_id: string } } & {
              query: {
                subscription_status?:
                  | 'pending'
                  | 'active'
                  | 'terminated'
                  | 'canceled'
                  | 'incomplete'
                  | undefined
              }
            } & { json: AlertCreateInput | AlertBatchCreateInput }
            output: Alert | Alerts
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { external_id: string } } & {
              query: {
                subscription_status?:
                  | 'pending'
                  | 'active'
                  | 'terminated'
                  | 'canceled'
                  | 'incomplete'
                  | undefined
              }
            } & { json: AlertCreateInput | AlertBatchCreateInput }
            output: ApiErrorBadRequest
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { external_id: string } } & {
              query: {
                subscription_status?:
                  | 'pending'
                  | 'active'
                  | 'terminated'
                  | 'canceled'
                  | 'incomplete'
                  | undefined
              }
            } & { json: AlertCreateInput | AlertBatchCreateInput }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { external_id: string } } & {
              query: {
                subscription_status?:
                  | 'pending'
                  | 'active'
                  | 'terminated'
                  | 'canceled'
                  | 'incomplete'
                  | undefined
              }
            } & { json: AlertCreateInput | AlertBatchCreateInput }
            output: ApiErrorForbidden
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { external_id: string } } & {
              query: {
                subscription_status?:
                  | 'pending'
                  | 'active'
                  | 'terminated'
                  | 'canceled'
                  | 'incomplete'
                  | undefined
              }
            } & { json: AlertCreateInput | AlertBatchCreateInput }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { external_id: string } } & {
              query: {
                subscription_status?:
                  | 'pending'
                  | 'active'
                  | 'terminated'
                  | 'canceled'
                  | 'incomplete'
                  | undefined
              }
            } & { json: AlertCreateInput | AlertBatchCreateInput }
            output: ApiErrorUnprocessableEntity
            outputFormat: 'json'
            status: 422
          }
      $delete:
        | {
            input: { param: { external_id: string } } & {
              query: {
                subscription_status?:
                  | 'pending'
                  | 'active'
                  | 'terminated'
                  | 'canceled'
                  | 'incomplete'
                  | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { external_id: string } } & {
              query: {
                subscription_status?:
                  | 'pending'
                  | 'active'
                  | 'terminated'
                  | 'canceled'
                  | 'incomplete'
                  | undefined
              }
            }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { external_id: string } } & {
              query: {
                subscription_status?:
                  | 'pending'
                  | 'active'
                  | 'terminated'
                  | 'canceled'
                  | 'incomplete'
                  | undefined
              }
            }
            output: ApiErrorForbidden
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { external_id: string } } & {
              query: {
                subscription_status?:
                  | 'pending'
                  | 'active'
                  | 'terminated'
                  | 'canceled'
                  | 'incomplete'
                  | undefined
              }
            }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/subscriptions/:external_id/alerts/:code': {
      $get:
        | {
            input: { param: { external_id: string; code: string } } & {
              query: {
                subscription_status?:
                  | 'pending'
                  | 'active'
                  | 'terminated'
                  | 'canceled'
                  | 'incomplete'
                  | undefined
              }
            }
            output: Alert
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { external_id: string; code: string } } & {
              query: {
                subscription_status?:
                  | 'pending'
                  | 'active'
                  | 'terminated'
                  | 'canceled'
                  | 'incomplete'
                  | undefined
              }
            }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { external_id: string; code: string } } & {
              query: {
                subscription_status?:
                  | 'pending'
                  | 'active'
                  | 'terminated'
                  | 'canceled'
                  | 'incomplete'
                  | undefined
              }
            }
            output: ApiErrorForbidden
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { external_id: string; code: string } } & {
              query: {
                subscription_status?:
                  | 'pending'
                  | 'active'
                  | 'terminated'
                  | 'canceled'
                  | 'incomplete'
                  | undefined
              }
            }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { external_id: string; code: string } } & {
              query: {
                subscription_status?:
                  | 'pending'
                  | 'active'
                  | 'terminated'
                  | 'canceled'
                  | 'incomplete'
                  | undefined
              }
            } & { json: AlertUpdateInput }
            output: Alert
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { external_id: string; code: string } } & {
              query: {
                subscription_status?:
                  | 'pending'
                  | 'active'
                  | 'terminated'
                  | 'canceled'
                  | 'incomplete'
                  | undefined
              }
            } & { json: AlertUpdateInput }
            output: ApiErrorBadRequest
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { external_id: string; code: string } } & {
              query: {
                subscription_status?:
                  | 'pending'
                  | 'active'
                  | 'terminated'
                  | 'canceled'
                  | 'incomplete'
                  | undefined
              }
            } & { json: AlertUpdateInput }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { external_id: string; code: string } } & {
              query: {
                subscription_status?:
                  | 'pending'
                  | 'active'
                  | 'terminated'
                  | 'canceled'
                  | 'incomplete'
                  | undefined
              }
            } & { json: AlertUpdateInput }
            output: ApiErrorForbidden
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { external_id: string; code: string } } & {
              query: {
                subscription_status?:
                  | 'pending'
                  | 'active'
                  | 'terminated'
                  | 'canceled'
                  | 'incomplete'
                  | undefined
              }
            } & { json: AlertUpdateInput }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { external_id: string; code: string } } & {
              query: {
                subscription_status?:
                  | 'pending'
                  | 'active'
                  | 'terminated'
                  | 'canceled'
                  | 'incomplete'
                  | undefined
              }
            } & { json: AlertUpdateInput }
            output: ApiErrorUnprocessableEntity
            outputFormat: 'json'
            status: 422
          }
      $delete:
        | {
            input: { param: { external_id: string; code: string } } & {
              query: {
                subscription_status?:
                  | 'pending'
                  | 'active'
                  | 'terminated'
                  | 'canceled'
                  | 'incomplete'
                  | undefined
              }
            }
            output: Alert
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { external_id: string; code: string } } & {
              query: {
                subscription_status?:
                  | 'pending'
                  | 'active'
                  | 'terminated'
                  | 'canceled'
                  | 'incomplete'
                  | undefined
              }
            }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { external_id: string; code: string } } & {
              query: {
                subscription_status?:
                  | 'pending'
                  | 'active'
                  | 'terminated'
                  | 'canceled'
                  | 'incomplete'
                  | undefined
              }
            }
            output: ApiErrorForbidden
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { external_id: string; code: string } } & {
              query: {
                subscription_status?:
                  | 'pending'
                  | 'active'
                  | 'terminated'
                  | 'canceled'
                  | 'incomplete'
                  | undefined
              }
            }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/subscriptions/:external_id/entitlements': {
      $get:
        | {
            input: { param: { external_id: string } } & {
              query: {
                subscription_status?:
                  | 'pending'
                  | 'active'
                  | 'terminated'
                  | 'canceled'
                  | 'incomplete'
                  | undefined
              }
            }
            output: SubscriptionEntitlements
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { external_id: string } } & {
              query: {
                subscription_status?:
                  | 'pending'
                  | 'active'
                  | 'terminated'
                  | 'canceled'
                  | 'incomplete'
                  | undefined
              }
            }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { external_id: string } } & {
              query: {
                subscription_status?:
                  | 'pending'
                  | 'active'
                  | 'terminated'
                  | 'canceled'
                  | 'incomplete'
                  | undefined
              }
            }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: { param: { external_id: string } } & {
              query: {
                subscription_status?:
                  | 'pending'
                  | 'active'
                  | 'terminated'
                  | 'canceled'
                  | 'incomplete'
                  | undefined
              }
            } & { json: EntitlementUpdateInput }
            output: SubscriptionEntitlements
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { external_id: string } } & {
              query: {
                subscription_status?:
                  | 'pending'
                  | 'active'
                  | 'terminated'
                  | 'canceled'
                  | 'incomplete'
                  | undefined
              }
            } & { json: EntitlementUpdateInput }
            output: ApiErrorBadRequest
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { external_id: string } } & {
              query: {
                subscription_status?:
                  | 'pending'
                  | 'active'
                  | 'terminated'
                  | 'canceled'
                  | 'incomplete'
                  | undefined
              }
            } & { json: EntitlementUpdateInput }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { external_id: string } } & {
              query: {
                subscription_status?:
                  | 'pending'
                  | 'active'
                  | 'terminated'
                  | 'canceled'
                  | 'incomplete'
                  | undefined
              }
            } & { json: EntitlementUpdateInput }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { external_id: string } } & {
              query: {
                subscription_status?:
                  | 'pending'
                  | 'active'
                  | 'terminated'
                  | 'canceled'
                  | 'incomplete'
                  | undefined
              }
            } & { json: EntitlementUpdateInput }
            output: ApiErrorUnprocessableEntity
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/subscriptions/:external_id/entitlements/:feature_code': {
      $delete:
        | {
            input: { param: { external_id: string; feature_code: string } } & {
              query: {
                subscription_status?:
                  | 'pending'
                  | 'active'
                  | 'terminated'
                  | 'canceled'
                  | 'incomplete'
                  | undefined
              }
            }
            output: SubscriptionEntitlements
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { external_id: string; feature_code: string } } & {
              query: {
                subscription_status?:
                  | 'pending'
                  | 'active'
                  | 'terminated'
                  | 'canceled'
                  | 'incomplete'
                  | undefined
              }
            }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { external_id: string; feature_code: string } } & {
              query: {
                subscription_status?:
                  | 'pending'
                  | 'active'
                  | 'terminated'
                  | 'canceled'
                  | 'incomplete'
                  | undefined
              }
            }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/subscriptions/:external_id/entitlements/:feature_code/privileges/:privilege_code': {
      $delete:
        | {
            input: {
              param: { external_id: string; feature_code: string; privilege_code: string }
            } & {
              query: {
                subscription_status?:
                  | 'pending'
                  | 'active'
                  | 'terminated'
                  | 'canceled'
                  | 'incomplete'
                  | undefined
              }
            }
            output: SubscriptionEntitlements
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: { external_id: string; feature_code: string; privilege_code: string }
            } & {
              query: {
                subscription_status?:
                  | 'pending'
                  | 'active'
                  | 'terminated'
                  | 'canceled'
                  | 'incomplete'
                  | undefined
              }
            }
            output: ApiErrorBadRequest
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: { external_id: string; feature_code: string; privilege_code: string }
            } & {
              query: {
                subscription_status?:
                  | 'pending'
                  | 'active'
                  | 'terminated'
                  | 'canceled'
                  | 'incomplete'
                  | undefined
              }
            }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: { external_id: string; feature_code: string; privilege_code: string }
            } & {
              query: {
                subscription_status?:
                  | 'pending'
                  | 'active'
                  | 'terminated'
                  | 'canceled'
                  | 'incomplete'
                  | undefined
              }
            }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/subscriptions/:external_id/fixed_charges': {
      $get:
        | {
            input: { param: { external_id: string } } & {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                subscription_status?:
                  | 'pending'
                  | 'active'
                  | 'terminated'
                  | 'canceled'
                  | 'incomplete'
                  | undefined
              }
            }
            output: FixedChargesPaginated
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { external_id: string } } & {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                subscription_status?:
                  | 'pending'
                  | 'active'
                  | 'terminated'
                  | 'canceled'
                  | 'incomplete'
                  | undefined
              }
            }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { external_id: string } } & {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                subscription_status?:
                  | 'pending'
                  | 'active'
                  | 'terminated'
                  | 'canceled'
                  | 'incomplete'
                  | undefined
              }
            }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/subscriptions/:external_id/charges': {
      $get:
        | {
            input: { param: { external_id: string } } & {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                subscription_status?:
                  | 'pending'
                  | 'active'
                  | 'terminated'
                  | 'canceled'
                  | 'incomplete'
                  | undefined
              }
            }
            output: ChargesPaginated
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { external_id: string } } & {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                subscription_status?:
                  | 'pending'
                  | 'active'
                  | 'terminated'
                  | 'canceled'
                  | 'incomplete'
                  | undefined
              }
            }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { external_id: string } } & {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                subscription_status?:
                  | 'pending'
                  | 'active'
                  | 'terminated'
                  | 'canceled'
                  | 'incomplete'
                  | undefined
              }
            }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/subscriptions/:external_id/charges/:charge_code': {
      $get:
        | {
            input: { param: { external_id: string; charge_code: string } } & {
              query: {
                subscription_status?:
                  | 'pending'
                  | 'active'
                  | 'terminated'
                  | 'canceled'
                  | 'incomplete'
                  | undefined
              }
            }
            output: Charge
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { external_id: string; charge_code: string } } & {
              query: {
                subscription_status?:
                  | 'pending'
                  | 'active'
                  | 'terminated'
                  | 'canceled'
                  | 'incomplete'
                  | undefined
              }
            }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { external_id: string; charge_code: string } } & {
              query: {
                subscription_status?:
                  | 'pending'
                  | 'active'
                  | 'terminated'
                  | 'canceled'
                  | 'incomplete'
                  | undefined
              }
            }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { external_id: string; charge_code: string } } & {
              query: {
                subscription_status?:
                  | 'pending'
                  | 'active'
                  | 'terminated'
                  | 'canceled'
                  | 'incomplete'
                  | undefined
              }
            } & { json: SubscriptionChargeOverride }
            output: Charge
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { external_id: string; charge_code: string } } & {
              query: {
                subscription_status?:
                  | 'pending'
                  | 'active'
                  | 'terminated'
                  | 'canceled'
                  | 'incomplete'
                  | undefined
              }
            } & { json: SubscriptionChargeOverride }
            output: ApiErrorBadRequest
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { external_id: string; charge_code: string } } & {
              query: {
                subscription_status?:
                  | 'pending'
                  | 'active'
                  | 'terminated'
                  | 'canceled'
                  | 'incomplete'
                  | undefined
              }
            } & { json: SubscriptionChargeOverride }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { external_id: string; charge_code: string } } & {
              query: {
                subscription_status?:
                  | 'pending'
                  | 'active'
                  | 'terminated'
                  | 'canceled'
                  | 'incomplete'
                  | undefined
              }
            } & { json: SubscriptionChargeOverride }
            output: ApiErrorForbidden
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { external_id: string; charge_code: string } } & {
              query: {
                subscription_status?:
                  | 'pending'
                  | 'active'
                  | 'terminated'
                  | 'canceled'
                  | 'incomplete'
                  | undefined
              }
            } & { json: SubscriptionChargeOverride }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { external_id: string; charge_code: string } } & {
              query: {
                subscription_status?:
                  | 'pending'
                  | 'active'
                  | 'terminated'
                  | 'canceled'
                  | 'incomplete'
                  | undefined
              }
            } & { json: SubscriptionChargeOverride }
            output: ApiErrorUnprocessableEntity
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/subscriptions/:external_id/charges/:charge_code/filters': {
      $post:
        | {
            input: { param: { external_id: string; charge_code: string } } & {
              query: {
                subscription_status?:
                  | 'pending'
                  | 'active'
                  | 'terminated'
                  | 'canceled'
                  | 'incomplete'
                  | undefined
              }
            } & { json: ChargeFilterCreateInput }
            output: ChargeFilterResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { external_id: string; charge_code: string } } & {
              query: {
                subscription_status?:
                  | 'pending'
                  | 'active'
                  | 'terminated'
                  | 'canceled'
                  | 'incomplete'
                  | undefined
              }
            } & { json: ChargeFilterCreateInput }
            output: ApiErrorBadRequest
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { external_id: string; charge_code: string } } & {
              query: {
                subscription_status?:
                  | 'pending'
                  | 'active'
                  | 'terminated'
                  | 'canceled'
                  | 'incomplete'
                  | undefined
              }
            } & { json: ChargeFilterCreateInput }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { external_id: string; charge_code: string } } & {
              query: {
                subscription_status?:
                  | 'pending'
                  | 'active'
                  | 'terminated'
                  | 'canceled'
                  | 'incomplete'
                  | undefined
              }
            } & { json: ChargeFilterCreateInput }
            output: ApiErrorForbidden
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { external_id: string; charge_code: string } } & {
              query: {
                subscription_status?:
                  | 'pending'
                  | 'active'
                  | 'terminated'
                  | 'canceled'
                  | 'incomplete'
                  | undefined
              }
            } & { json: ChargeFilterCreateInput }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { external_id: string; charge_code: string } } & {
              query: {
                subscription_status?:
                  | 'pending'
                  | 'active'
                  | 'terminated'
                  | 'canceled'
                  | 'incomplete'
                  | undefined
              }
            } & { json: ChargeFilterCreateInput }
            output: ApiErrorUnprocessableEntity
            outputFormat: 'json'
            status: 422
          }
      $get:
        | {
            input: { param: { external_id: string; charge_code: string } } & {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                subscription_status?:
                  | 'pending'
                  | 'active'
                  | 'terminated'
                  | 'canceled'
                  | 'incomplete'
                  | undefined
              }
            }
            output: ChargeFiltersPaginated
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { external_id: string; charge_code: string } } & {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                subscription_status?:
                  | 'pending'
                  | 'active'
                  | 'terminated'
                  | 'canceled'
                  | 'incomplete'
                  | undefined
              }
            }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { external_id: string; charge_code: string } } & {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                subscription_status?:
                  | 'pending'
                  | 'active'
                  | 'terminated'
                  | 'canceled'
                  | 'incomplete'
                  | undefined
              }
            }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/subscriptions/:external_id/charges/:charge_code/filters/:filter_id': {
      $get:
        | {
            input: { param: { external_id: string; charge_code: string; filter_id: string } } & {
              query: {
                subscription_status?:
                  | 'pending'
                  | 'active'
                  | 'terminated'
                  | 'canceled'
                  | 'incomplete'
                  | undefined
              }
            }
            output: ChargeFilterResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { external_id: string; charge_code: string; filter_id: string } } & {
              query: {
                subscription_status?:
                  | 'pending'
                  | 'active'
                  | 'terminated'
                  | 'canceled'
                  | 'incomplete'
                  | undefined
              }
            }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { external_id: string; charge_code: string; filter_id: string } } & {
              query: {
                subscription_status?:
                  | 'pending'
                  | 'active'
                  | 'terminated'
                  | 'canceled'
                  | 'incomplete'
                  | undefined
              }
            }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { external_id: string; charge_code: string; filter_id: string } } & {
              query: {
                subscription_status?:
                  | 'pending'
                  | 'active'
                  | 'terminated'
                  | 'canceled'
                  | 'incomplete'
                  | undefined
              }
            } & { json: ChargeFilterUpdateInput }
            output: ChargeFilterResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { external_id: string; charge_code: string; filter_id: string } } & {
              query: {
                subscription_status?:
                  | 'pending'
                  | 'active'
                  | 'terminated'
                  | 'canceled'
                  | 'incomplete'
                  | undefined
              }
            } & { json: ChargeFilterUpdateInput }
            output: ApiErrorBadRequest
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { external_id: string; charge_code: string; filter_id: string } } & {
              query: {
                subscription_status?:
                  | 'pending'
                  | 'active'
                  | 'terminated'
                  | 'canceled'
                  | 'incomplete'
                  | undefined
              }
            } & { json: ChargeFilterUpdateInput }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { external_id: string; charge_code: string; filter_id: string } } & {
              query: {
                subscription_status?:
                  | 'pending'
                  | 'active'
                  | 'terminated'
                  | 'canceled'
                  | 'incomplete'
                  | undefined
              }
            } & { json: ChargeFilterUpdateInput }
            output: ApiErrorForbidden
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { external_id: string; charge_code: string; filter_id: string } } & {
              query: {
                subscription_status?:
                  | 'pending'
                  | 'active'
                  | 'terminated'
                  | 'canceled'
                  | 'incomplete'
                  | undefined
              }
            } & { json: ChargeFilterUpdateInput }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { external_id: string; charge_code: string; filter_id: string } } & {
              query: {
                subscription_status?:
                  | 'pending'
                  | 'active'
                  | 'terminated'
                  | 'canceled'
                  | 'incomplete'
                  | undefined
              }
            } & { json: ChargeFilterUpdateInput }
            output: ApiErrorUnprocessableEntity
            outputFormat: 'json'
            status: 422
          }
      $delete:
        | {
            input: { param: { external_id: string; charge_code: string; filter_id: string } } & {
              query: {
                subscription_status?:
                  | 'pending'
                  | 'active'
                  | 'terminated'
                  | 'canceled'
                  | 'incomplete'
                  | undefined
              }
            }
            output: ChargeFilterResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { external_id: string; charge_code: string; filter_id: string } } & {
              query: {
                subscription_status?:
                  | 'pending'
                  | 'active'
                  | 'terminated'
                  | 'canceled'
                  | 'incomplete'
                  | undefined
              }
            }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { external_id: string; charge_code: string; filter_id: string } } & {
              query: {
                subscription_status?:
                  | 'pending'
                  | 'active'
                  | 'terminated'
                  | 'canceled'
                  | 'incomplete'
                  | undefined
              }
            }
            output: ApiErrorForbidden
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { external_id: string; charge_code: string; filter_id: string } } & {
              query: {
                subscription_status?:
                  | 'pending'
                  | 'active'
                  | 'terminated'
                  | 'canceled'
                  | 'incomplete'
                  | undefined
              }
            }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/subscriptions/:external_id/fixed_charges/:fixed_charge_code': {
      $get:
        | {
            input: { param: { external_id: string; fixed_charge_code: string } } & {
              query: {
                subscription_status?:
                  | 'pending'
                  | 'active'
                  | 'terminated'
                  | 'canceled'
                  | 'incomplete'
                  | undefined
              }
            }
            output: FixedCharge
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { external_id: string; fixed_charge_code: string } } & {
              query: {
                subscription_status?:
                  | 'pending'
                  | 'active'
                  | 'terminated'
                  | 'canceled'
                  | 'incomplete'
                  | undefined
              }
            }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { external_id: string; fixed_charge_code: string } } & {
              query: {
                subscription_status?:
                  | 'pending'
                  | 'active'
                  | 'terminated'
                  | 'canceled'
                  | 'incomplete'
                  | undefined
              }
            }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { external_id: string; fixed_charge_code: string } } & {
              query: {
                subscription_status?:
                  | 'pending'
                  | 'active'
                  | 'terminated'
                  | 'canceled'
                  | 'incomplete'
                  | undefined
              }
            } & { json: SubscriptionFixedChargeOverride }
            output: FixedCharge
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { external_id: string; fixed_charge_code: string } } & {
              query: {
                subscription_status?:
                  | 'pending'
                  | 'active'
                  | 'terminated'
                  | 'canceled'
                  | 'incomplete'
                  | undefined
              }
            } & { json: SubscriptionFixedChargeOverride }
            output: ApiErrorBadRequest
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { external_id: string; fixed_charge_code: string } } & {
              query: {
                subscription_status?:
                  | 'pending'
                  | 'active'
                  | 'terminated'
                  | 'canceled'
                  | 'incomplete'
                  | undefined
              }
            } & { json: SubscriptionFixedChargeOverride }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { external_id: string; fixed_charge_code: string } } & {
              query: {
                subscription_status?:
                  | 'pending'
                  | 'active'
                  | 'terminated'
                  | 'canceled'
                  | 'incomplete'
                  | undefined
              }
            } & { json: SubscriptionFixedChargeOverride }
            output: ApiErrorForbidden
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { external_id: string; fixed_charge_code: string } } & {
              query: {
                subscription_status?:
                  | 'pending'
                  | 'active'
                  | 'terminated'
                  | 'canceled'
                  | 'incomplete'
                  | undefined
              }
            } & { json: SubscriptionFixedChargeOverride }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { external_id: string; fixed_charge_code: string } } & {
              query: {
                subscription_status?:
                  | 'pending'
                  | 'active'
                  | 'terminated'
                  | 'canceled'
                  | 'incomplete'
                  | undefined
              }
            } & { json: SubscriptionFixedChargeOverride }
            output: ApiErrorUnprocessableEntity
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/taxes': {
      $post:
        | { input: { json: TaxCreateInput }; output: Tax; outputFormat: 'json'; status: 200 }
        | {
            input: { json: TaxCreateInput }
            output: ApiErrorBadRequest
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: TaxCreateInput }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: TaxCreateInput }
            output: ApiErrorUnprocessableEntity
            outputFormat: 'json'
            status: 422
          }
      $get:
        | {
            input: { query: { page?: number | undefined; per_page?: number | undefined } }
            output: TaxesPaginated
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { page?: number | undefined; per_page?: number | undefined } }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/taxes/:code': {
      $put:
        | {
            input: { param: { code: string } } & { json: TaxUpdateInput }
            output: Tax
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { code: string } } & { json: TaxUpdateInput }
            output: ApiErrorBadRequest
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { code: string } } & { json: TaxUpdateInput }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { code: string } } & { json: TaxUpdateInput }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { code: string } } & { json: TaxUpdateInput }
            output: ApiErrorUnprocessableEntity
            outputFormat: 'json'
            status: 422
          }
      $get:
        | { input: { param: { code: string } }; output: Tax; outputFormat: 'json'; status: 200 }
        | {
            input: { param: { code: string } }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { code: string } }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
      $delete:
        | { input: { param: { code: string } }; output: Tax; outputFormat: 'json'; status: 200 }
        | {
            input: { param: { code: string } }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { code: string } }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/usage_attribution_types': {
      $post:
        | {
            input: { json: UsageAttributionTypeCreateInput }
            output: UsageAttributionType
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: UsageAttributionTypeCreateInput }
            output: ApiErrorBadRequest
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: UsageAttributionTypeCreateInput }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: UsageAttributionTypeCreateInput }
            output: ApiErrorForbidden
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: UsageAttributionTypeCreateInput }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: UsageAttributionTypeCreateInput }
            output: ApiErrorUnprocessableEntity
            outputFormat: 'json'
            status: 422
          }
      $get:
        | {
            input: {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                role?: UsageAttributionTypeRoleEnum | undefined
                search_term?: string | undefined
              }
            }
            output: UsageAttributionTypesPaginated
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                role?: UsageAttributionTypeRoleEnum | undefined
                search_term?: string | undefined
              }
            }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                role?: UsageAttributionTypeRoleEnum | undefined
                search_term?: string | undefined
              }
            }
            output: ApiErrorForbidden
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                role?: UsageAttributionTypeRoleEnum | undefined
                search_term?: string | undefined
              }
            }
            output: ApiErrorUnprocessableEntity
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/usage_attribution_types/:code': {
      $put:
        | {
            input: { param: { code: string } } & { json: UsageAttributionTypeUpdateInput }
            output: UsageAttributionType
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { code: string } } & { json: UsageAttributionTypeUpdateInput }
            output: ApiErrorBadRequest
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { code: string } } & { json: UsageAttributionTypeUpdateInput }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { code: string } } & { json: UsageAttributionTypeUpdateInput }
            output: ApiErrorForbidden
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { code: string } } & { json: UsageAttributionTypeUpdateInput }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { code: string } } & { json: UsageAttributionTypeUpdateInput }
            output: ApiErrorUnprocessableEntity
            outputFormat: 'json'
            status: 422
          }
      $get:
        | {
            input: { param: { code: string } }
            output: UsageAttributionType
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { code: string } }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { code: string } }
            output: ApiErrorForbidden
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { code: string } }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
      $delete:
        | {
            input: { param: { code: string } }
            output: UsageAttributionType
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { code: string } }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { code: string } }
            output: ApiErrorForbidden
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { code: string } }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/wallets': {
      $post:
        | { input: { json: WalletCreateInput }; output: Wallet; outputFormat: 'json'; status: 200 }
        | {
            input: { json: WalletCreateInput }
            output: ApiErrorBadRequest
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: WalletCreateInput }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: WalletCreateInput }
            output: ApiErrorForbidden
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: WalletCreateInput }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { json: WalletCreateInput }
            output: ApiErrorUnprocessableEntity
            outputFormat: 'json'
            status: 422
          }
      $get:
        | {
            input: {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                currency?: string | undefined
                external_customer_id?: string | undefined
                'billing_entity_codes[]'?: string[] | undefined
              }
            }
            output: WalletsPaginated
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                currency?: string | undefined
                external_customer_id?: string | undefined
                'billing_entity_codes[]'?: string[] | undefined
              }
            }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                currency?: string | undefined
                external_customer_id?: string | undefined
                'billing_entity_codes[]'?: string[] | undefined
              }
            }
            output: ApiErrorForbidden
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                currency?: string | undefined
                external_customer_id?: string | undefined
                'billing_entity_codes[]'?: string[] | undefined
              }
            }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/wallets/:lago_id': {
      $put:
        | {
            input: { param: { lago_id: string } } & { json: WalletUpdateInput }
            output: Wallet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { lago_id: string } } & { json: WalletUpdateInput }
            output: ApiErrorBadRequest
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { lago_id: string } } & { json: WalletUpdateInput }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { lago_id: string } } & { json: WalletUpdateInput }
            output: ApiErrorForbidden
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { lago_id: string } } & { json: WalletUpdateInput }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { lago_id: string } } & { json: WalletUpdateInput }
            output: ApiErrorUnprocessableEntity
            outputFormat: 'json'
            status: 422
          }
      $get:
        | {
            input: { param: { lago_id: string } }
            output: Wallet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { lago_id: string } }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { lago_id: string } }
            output: ApiErrorForbidden
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { lago_id: string } }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
      $delete:
        | {
            input: { param: { lago_id: string } }
            output: Wallet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { lago_id: string } }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { lago_id: string } }
            output: ApiErrorForbidden
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { lago_id: string } }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { lago_id: string } }
            output: ApiErrorUnprocessableEntity
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/wallets/:lago_id/metadata': {
      $post:
        | {
            input: { param: { lago_id: string } } & { json: WalletMetadataResponse }
            output: WalletMetadataResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { lago_id: string } } & { json: WalletMetadataResponse }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { lago_id: string } } & { json: WalletMetadataResponse }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { lago_id: string } } & { json: WalletMetadataResponse }
            output: ApiErrorUnprocessableEntity
            outputFormat: 'json'
            status: 422
          }
      $patch:
        | {
            input: { param: { lago_id: string } } & { json: WalletMetadataResponse }
            output: WalletMetadataResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { lago_id: string } } & { json: WalletMetadataResponse }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { lago_id: string } } & { json: WalletMetadataResponse }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { lago_id: string } } & { json: WalletMetadataResponse }
            output: ApiErrorUnprocessableEntity
            outputFormat: 'json'
            status: 422
          }
      $delete:
        | {
            input: { param: { lago_id: string } }
            output: WalletMetadataResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { lago_id: string } }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { lago_id: string } }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/wallets/:lago_id/metadata/:key': {
      $delete:
        | {
            input: { param: { lago_id: string; key: string } }
            output: WalletMetadataResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { lago_id: string; key: string } }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { lago_id: string; key: string } }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/wallet_transactions': {
      $post:
        | {
            input: { json: WalletTransactionCreateInput }
            output: WalletTransactions
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: WalletTransactionCreateInput }
            output: ApiErrorBadRequest
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: WalletTransactionCreateInput }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: WalletTransactionCreateInput }
            output: ApiErrorForbidden
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: WalletTransactionCreateInput }
            output: ApiErrorUnprocessableEntity
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/wallet_transactions/:lago_id': {
      $get:
        | {
            input: { param: { lago_id: string } }
            output: WalletTransaction
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { lago_id: string } }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { lago_id: string } }
            output: ApiErrorForbidden
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { lago_id: string } }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/wallet_transactions/:lago_id/payment_url': {
      $post:
        | {
            input: { param: { lago_id: string } }
            output: WalletTransactionPaymentUrl
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { lago_id: string } }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { lago_id: string } }
            output: ApiErrorForbidden
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { lago_id: string } }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { lago_id: string } }
            output: ApiErrorUnprocessableEntity
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/wallet_transactions/:lago_id/consumptions': {
      $get:
        | {
            input: { param: { lago_id: string } } & {
              query: { page?: number | undefined; per_page?: number | undefined }
            }
            output: WalletTransactionConsumptionsPaginated
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { lago_id: string } } & {
              query: { page?: number | undefined; per_page?: number | undefined }
            }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { lago_id: string } } & {
              query: { page?: number | undefined; per_page?: number | undefined }
            }
            output: ApiErrorForbidden
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { lago_id: string } } & {
              query: { page?: number | undefined; per_page?: number | undefined }
            }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { lago_id: string } } & {
              query: { page?: number | undefined; per_page?: number | undefined }
            }
            output: ApiErrorUnprocessableEntity
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/wallet_transactions/:lago_id/fundings': {
      $get:
        | {
            input: { param: { lago_id: string } } & {
              query: { page?: number | undefined; per_page?: number | undefined }
            }
            output: WalletTransactionFundingsPaginated
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { lago_id: string } } & {
              query: { page?: number | undefined; per_page?: number | undefined }
            }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { lago_id: string } } & {
              query: { page?: number | undefined; per_page?: number | undefined }
            }
            output: ApiErrorForbidden
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { lago_id: string } } & {
              query: { page?: number | undefined; per_page?: number | undefined }
            }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { lago_id: string } } & {
              query: { page?: number | undefined; per_page?: number | undefined }
            }
            output: ApiErrorUnprocessableEntity
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/wallets/:lago_id/wallet_transactions': {
      $get:
        | {
            input: { param: { lago_id: string } } & {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                status?: string | undefined
                transaction_status?: string | undefined
                transaction_type?: string | undefined
                'metadata[key]'?: string | undefined
              }
            }
            output: WalletTransactionsPaginated
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { lago_id: string } } & {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                status?: string | undefined
                transaction_status?: string | undefined
                transaction_type?: string | undefined
                'metadata[key]'?: string | undefined
              }
            }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { lago_id: string } } & {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                status?: string | undefined
                transaction_status?: string | undefined
                transaction_type?: string | undefined
                'metadata[key]'?: string | undefined
              }
            }
            output: ApiErrorForbidden
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { lago_id: string } } & {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                status?: string | undefined
                transaction_status?: string | undefined
                transaction_type?: string | undefined
                'metadata[key]'?: string | undefined
              }
            }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/webhooks/public_key': {
      $get:
        | { input: {}; output: string; outputFormat: 'text'; status: 200 }
        | { input: {}; output: ApiErrorUnauthorized; outputFormat: 'json'; status: 401 }
    }
  } & {
    '/webhooks/json_public_key': {
      $get:
        | { input: {}; output: WebhookPublicKey; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ApiErrorUnauthorized; outputFormat: 'json'; status: 401 }
    }
  } & {
    '/webhook_endpoints': {
      $post:
        | {
            input: { json: WebhookEndpointCreateInput }
            output: WebhookEndpoint
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: WebhookEndpointCreateInput }
            output: ApiErrorBadRequest
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: WebhookEndpointCreateInput }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: WebhookEndpointCreateInput }
            output: ApiErrorForbidden
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: WebhookEndpointCreateInput }
            output: ApiErrorUnprocessableEntity
            outputFormat: 'json'
            status: 422
          }
      $get:
        | {
            input: { query: { page?: number | undefined; per_page?: number | undefined } }
            output: WebhookEndpointsPaginated
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { page?: number | undefined; per_page?: number | undefined } }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { page?: number | undefined; per_page?: number | undefined } }
            output: ApiErrorForbidden
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/webhook_endpoints/:lago_id': {
      $put:
        | {
            input: { param: { lago_id: string } } & { json: WebhookEndpointUpdateInput }
            output: WebhookEndpoint
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { lago_id: string } } & { json: WebhookEndpointUpdateInput }
            output: ApiErrorBadRequest
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { lago_id: string } } & { json: WebhookEndpointUpdateInput }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { lago_id: string } } & { json: WebhookEndpointUpdateInput }
            output: ApiErrorForbidden
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { lago_id: string } } & { json: WebhookEndpointUpdateInput }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { lago_id: string } } & { json: WebhookEndpointUpdateInput }
            output: ApiErrorUnprocessableEntity
            outputFormat: 'json'
            status: 422
          }
      $get:
        | {
            input: { param: { lago_id: string } }
            output: WebhookEndpoint
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { lago_id: string } }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { lago_id: string } }
            output: ApiErrorForbidden
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { lago_id: string } }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
      $delete:
        | {
            input: { param: { lago_id: string } }
            output: WebhookEndpoint
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { lago_id: string } }
            output: ApiErrorUnauthorized
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { lago_id: string } }
            output: ApiErrorForbidden
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { lago_id: string } }
            output: ApiErrorNotFound
            outputFormat: 'json'
            status: 404
          }
    }
  },
  '/'
>
export default routes
