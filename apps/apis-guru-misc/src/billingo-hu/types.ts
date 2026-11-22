type Currency =
  | 'AUD'
  | 'BGN'
  | 'BRL'
  | 'CAD'
  | 'CHF'
  | 'CNY'
  | 'CZK'
  | 'DKK'
  | 'EUR'
  | 'GBP'
  | 'HKD'
  | 'HRK'
  | 'HUF'
  | 'IDR'
  | 'ILS'
  | 'INR'
  | 'ISK'
  | 'JPY'
  | 'KRW'
  | 'LTL'
  | 'LVL'
  | 'MXN'
  | 'MYR'
  | 'NOK'
  | 'NZD'
  | 'PHP'
  | 'PLN'
  | 'RON'
  | 'RSD'
  | 'RUB'
  | 'SEK'
  | 'SGD'
  | 'THB'
  | 'TRY'
  | 'UAH'
  | 'USD'
  | 'ZAR'
type BankAccount = {
  account_number: string
  account_number_iban?: string | undefined
  currency: Currency
  id?: number | undefined
  name: string
  need_qr?: boolean | undefined
  swift?: string | undefined
}
type BankAccountList = {
  current_page?: number | undefined
  data?: BankAccount[] | undefined
  last_page?: number | undefined
  next_page_url?: string | undefined
  per_page?: number | undefined
  prev_page_url?: string | undefined
  total?: number | undefined
}
type ClientError = { message?: string | undefined }
type ClientErrorResponse = { error?: ClientError | undefined }
type ValidationError = { field?: string | undefined; message?: string | undefined }
type ValidationErrorResponse = {
  errors?: ValidationError[] | undefined
  message?: string | undefined
}
type ServerError = { message?: string | undefined; trace_id?: string | undefined }
type ServerErrorResponse = { error?: ServerError | undefined }
type ConversationRate = {
  conversation_rate?: number | undefined
  from_currency?: Currency | undefined
  to_currency?: Currency | undefined
}
type DocumentBlock = {
  custom_field1?: string | undefined
  custom_field2?: string | undefined
  id?: number | undefined
  name?: string | undefined
  prefix?: string | undefined
}
type DocumentBlockList = {
  current_page?: number | undefined
  data?: DocumentBlock[] | undefined
  last_page?: number | undefined
  next_page_url?: string | undefined
  per_page?: number | undefined
  prev_page_url?: string | undefined
  total?: number | undefined
}
type PaymentMethod =
  | 'aruhitel'
  | 'bankcard'
  | 'barion'
  | 'barter'
  | 'cash'
  | 'cash_on_delivery'
  | 'coupon'
  | 'elore_utalas'
  | 'ep_kartya'
  | 'kompenzacio'
  | 'levonas'
  | 'online_bankcard'
  | 'payoneer'
  | 'paypal'
  | 'paypal_utolag'
  | 'payu'
  | 'pick_pack_pont'
  | 'postai_csekk'
  | 'postautalvany'
  | 'skrill'
  | 'szep_card'
  | 'transferwise'
  | 'upwork'
  | 'utalvany'
  | 'valto'
  | 'wire_transfer'
type PaymentStatus = 'expired' | 'none' | 'outstanding' | 'paid' | 'partially_paid'
type Vat =
  | '0%'
  | '1%'
  | '10%'
  | '11%'
  | '12%'
  | '13%'
  | '14%'
  | '15%'
  | '16%'
  | '17%'
  | '18%'
  | '19%'
  | '2%'
  | '20%'
  | '21%'
  | '22%'
  | '23%'
  | '24%'
  | '25%'
  | '26%'
  | '27%'
  | '3%'
  | '4%'
  | '5%'
  | '6%'
  | '7%'
  | '8%'
  | '9%'
  | 'AAM'
  | 'AM'
  | 'EU'
  | 'EUK'
  | 'F.AFA'
  | 'FAD'
  | 'K.AFA'
  | 'MAA'
  | 'TAM'
  | 'ÁKK'
  | 'ÁTHK'
type DocumentItem = {
  gross_amount?: number | undefined
  name?: string | undefined
  net_amount?: number | undefined
  net_unit_amount?: number | undefined
  product_id?: number | undefined
  quantity?: number | undefined
  vat?: Vat | undefined
  vat_amount?: number | undefined
}
type DocumentLanguage = 'de' | 'en' | 'fr' | 'hr' | 'hu' | 'it' | 'ro' | 'sk'
type DocumentNotificationStatus = 'closed' | 'downloaded' | 'failed' | 'none' | 'opened' | 'readed'
type Country =
  | ''
  | 'AC'
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
  | 'DG'
  | 'DJ'
  | 'DK'
  | 'DM'
  | 'DO'
  | 'DZ'
  | 'EA'
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
  | 'HN'
  | 'HR'
  | 'HT'
  | 'HU'
  | 'IC'
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
  | 'TA'
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
  | 'XA'
  | 'XB'
  | 'XK'
  | 'YE'
  | 'YT'
  | 'ZA'
  | 'ZM'
  | 'ZW'
type Address = { address: string; city: string; country_code: Country; post_code: string }
type DocumentBankAccount = {
  account_number: string
  account_number_iban?: string | undefined
  id?: number | undefined
  name: string
  swift?: string | undefined
}
type DocumentOrganization = {
  address?: Address | undefined
  bank_account?: DocumentBankAccount | undefined
  cash_settled?: boolean | undefined
  eu_tax_number?: string | undefined
  ev_number?: string | undefined
  name?: string | undefined
  small_taxpayer?: boolean | undefined
  tax_number?: string | undefined
}
type Partner = {
  account_number?: string | undefined
  address: Address
  emails?: string[] | undefined
  general_ledger_number?: string | undefined
  iban?: string | undefined
  name: string
  phone?: string | undefined
  swift?: string | undefined
  taxcode?: string | undefined
  id?: number | undefined
}
type OnlinePayment = '' | 'Barion' | 'SimplePay' | 'no'
type Round = 'five' | 'none' | 'one' | 'ten'
type DocumentSettings = {
  mediated_service?: boolean | undefined
  online_payment?: OnlinePayment | undefined
  place_id?: number | undefined
  round?: Round | undefined
  without_financial_fulfillment?: boolean | undefined
}
type DocumentVatRateSummary = {
  vat_name?: string | undefined
  vat_percentage?: number | undefined
  vat_rate_gross_amount?: number | undefined
  vat_rate_net_amount?: number | undefined
  vat_rate_vat_amount?: number | undefined
  vat_rate_vat_amount_local?: number | undefined
}
type DocumentSummary = {
  gross_amount_local?: number | undefined
  net_amount?: number | undefined
  net_amount_local?: number | undefined
  vat_amount?: number | undefined
  vat_amount_local?: number | undefined
  vat_rate_summary?: DocumentVatRateSummary[] | undefined
}
type DocumentType = 'advance' | 'canceled' | 'cancellation' | 'draft' | 'invoice' | 'proforma'
type Document = {
  block_id?: number | undefined
  cancelled?: boolean | undefined
  comment?: string | undefined
  conversion_rate?: number | undefined
  currency?: Currency | undefined
  due_date?: string | undefined
  electronic?: boolean | undefined
  fulfillment_date?: string | undefined
  gross_total?: number | undefined
  id?: number | undefined
  invoice_date?: string | undefined
  invoice_number?: string | undefined
  items?: DocumentItem[] | undefined
  language?: DocumentLanguage | undefined
  notification_status?: DocumentNotificationStatus | undefined
  organization?: DocumentOrganization | undefined
  paid_date?: string | undefined
  partner?: Partner | undefined
  payment_method?: PaymentMethod | undefined
  payment_status?: PaymentStatus | undefined
  settings?: DocumentSettings | undefined
  summary?: DocumentSummary | undefined
  tags?: string[] | undefined
  type?: DocumentType | undefined
}
type DocumentList = {
  current_page?: number | undefined
  data?: Document[] | undefined
  last_page?: number | undefined
  next_page_url?: string | undefined
  per_page?: number | undefined
  prev_page_url?: string | undefined
  total?: number | undefined
}
type DocumentItemData = { product_id: number; quantity: number }
type UnitPriceType = 'gross' | 'net'
type DocumentProductData = {
  comment?: string | undefined
  name: string
  quantity: number
  unit: string
  unit_price: number
  unit_price_type: UnitPriceType
  vat: Vat
}
type DocumentInsertType = 'advance' | 'draft' | 'invoice' | 'proforma'
type DocumentInsert = {
  bank_account_id?: number | undefined
  block_id: number
  comment?: string | undefined
  conversion_rate?: number | undefined
  currency: Currency
  due_date: string
  electronic?: boolean | undefined
  fulfillment_date: string
  items?: (DocumentItemData | DocumentProductData)[] | undefined
  language: DocumentLanguage
  paid?: boolean | undefined
  partner_id: number
  payment_method: PaymentMethod
  settings?: DocumentSettings | undefined
  type: DocumentInsertType
  vendor_id?: string | undefined
}
type OnlineSzamlaStatusMessage = {
  human_readable_message?: string | undefined
  validation_error_code?: string | undefined
  validation_result_code?: string | undefined
}
type OnlineSzamlaStatus = {
  messages?: OnlineSzamlaStatusMessage[] | undefined
  status?: string | undefined
  transaction_id?: string | undefined
}
type PaymentHistory = {
  conversion_rate?: number | undefined
  date: string
  payment_method: PaymentMethod
  price: number
  voucher_number?: string | undefined
}
type DocumentPublicUrl = { public_url?: string | undefined }
type SendDocument = { emails?: string[] | undefined }
type OrganizationData = { tax_code?: string | undefined }
type PartnerList = {
  current_page?: number | undefined
  data?: Partner[] | undefined
  last_page?: number | undefined
  next_page_url?: string | undefined
  per_page?: number | undefined
  prev_page_url?: string | undefined
  total?: number | undefined
}
type PartnerUpsert = {
  account_number?: string | undefined
  address: Address
  emails?: string[] | undefined
  general_ledger_number?: string | undefined
  iban?: string | undefined
  name: string
  phone?: string | undefined
  swift?: string | undefined
  taxcode?: string | undefined
}
type Product = {
  comment?: string | undefined
  currency: Currency
  general_ledger_number?: string | undefined
  general_ledger_taxcode?: string | undefined
  id?: number | undefined
  name: string
  net_unit_price?: number | undefined
  unit: string
  vat: Vat
}
type ProductList = {
  current_page?: number | undefined
  data?: Product[] | undefined
  last_page?: number | undefined
  next_page_url?: string | undefined
  per_page?: number | undefined
  prev_page_url?: string | undefined
  total?: number | undefined
}
type Id = { id?: number | undefined; legacy_id?: number | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/bank-accounts': {
      $get:
        | {
            input: { query: { page?: number | undefined; per_page?: number | undefined } }
            output: BankAccountList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { page?: number | undefined; per_page?: number | undefined } }
            output: ClientErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { page?: number | undefined; per_page?: number | undefined } }
            output: ClientErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { page?: number | undefined; per_page?: number | undefined } }
            output: ValidationErrorResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { page?: number | undefined; per_page?: number | undefined } }
            output: ServerErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $post:
        | { input: { json: BankAccount }; output: BankAccount; outputFormat: 'json'; status: 201 }
        | {
            input: { json: BankAccount }
            output: ClientErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: BankAccount }
            output: ClientErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: BankAccount }
            output: ClientErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: BankAccount }
            output: ValidationErrorResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: BankAccount }
            output: ServerErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/bank-accounts/:id': {
      $delete:
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { id: number } }
            output: ClientErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: number } }
            output: ClientErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: number } }
            output: ClientErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: number } }
            output: ClientErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: number } }
            output: ServerErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { id: number } }
            output: BankAccount
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: ClientErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: number } }
            output: ClientErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: number } }
            output: ClientErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: number } }
            output: ValidationErrorResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: number } }
            output: ServerErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { id: number } } & { json: BankAccount }
            output: BankAccount
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & { json: BankAccount }
            output: ClientErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: number } } & { json: BankAccount }
            output: ClientErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: number } } & { json: BankAccount }
            output: ClientErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: number } } & { json: BankAccount }
            output: ClientErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: number } } & { json: BankAccount }
            output: ValidationErrorResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: number } } & { json: BankAccount }
            output: ServerErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/currencies': {
      $get:
        | {
            input: { query: { from: Currency; to: Currency } }
            output: ConversationRate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { from: Currency; to: Currency } }
            output: ClientErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { from: Currency; to: Currency } }
            output: ClientErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { from: Currency; to: Currency } }
            output: ValidationErrorResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { from: Currency; to: Currency } }
            output: ServerErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/document-blocks': {
      $get:
        | {
            input: { query: { page?: number | undefined; per_page?: number | undefined } }
            output: DocumentBlockList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { page?: number | undefined; per_page?: number | undefined } }
            output: ClientErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { page?: number | undefined; per_page?: number | undefined } }
            output: ClientErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { page?: number | undefined; per_page?: number | undefined } }
            output: ValidationErrorResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { page?: number | undefined; per_page?: number | undefined } }
            output: ServerErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/documents': {
      $get:
        | {
            input: {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                block_id?: number | undefined
                partner_id?: number | undefined
                payment_method?: PaymentMethod | undefined
                payment_status?: PaymentStatus | undefined
                start_date?: string | undefined
                end_date?: string | undefined
                start_number?: number | undefined
                end_number?: number | undefined
                start_year?: number | undefined
                end_year?: number | undefined
              }
            }
            output: DocumentList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                block_id?: number | undefined
                partner_id?: number | undefined
                payment_method?: PaymentMethod | undefined
                payment_status?: PaymentStatus | undefined
                start_date?: string | undefined
                end_date?: string | undefined
                start_number?: number | undefined
                end_number?: number | undefined
                start_year?: number | undefined
                end_year?: number | undefined
              }
            }
            output: ClientErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                block_id?: number | undefined
                partner_id?: number | undefined
                payment_method?: PaymentMethod | undefined
                payment_status?: PaymentStatus | undefined
                start_date?: string | undefined
                end_date?: string | undefined
                start_number?: number | undefined
                end_number?: number | undefined
                start_year?: number | undefined
                end_year?: number | undefined
              }
            }
            output: ClientErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                block_id?: number | undefined
                partner_id?: number | undefined
                payment_method?: PaymentMethod | undefined
                payment_status?: PaymentStatus | undefined
                start_date?: string | undefined
                end_date?: string | undefined
                start_number?: number | undefined
                end_number?: number | undefined
                start_year?: number | undefined
                end_year?: number | undefined
              }
            }
            output: ValidationErrorResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              query: {
                page?: number | undefined
                per_page?: number | undefined
                block_id?: number | undefined
                partner_id?: number | undefined
                payment_method?: PaymentMethod | undefined
                payment_status?: PaymentStatus | undefined
                start_date?: string | undefined
                end_date?: string | undefined
                start_number?: number | undefined
                end_number?: number | undefined
                start_year?: number | undefined
                end_year?: number | undefined
              }
            }
            output: ServerErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $post:
        | { input: { json: DocumentInsert }; output: Document; outputFormat: 'json'; status: 201 }
        | {
            input: { json: DocumentInsert }
            output: ClientErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: DocumentInsert }
            output: ClientErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: DocumentInsert }
            output: ClientErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: DocumentInsert }
            output: ValidationErrorResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: DocumentInsert }
            output: ServerErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/documents/:id': {
      $get:
        | { input: { param: { id: number } }; output: Document; outputFormat: 'json'; status: 200 }
        | {
            input: { param: { id: number } }
            output: ClientErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: number } }
            output: ClientErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: number } }
            output: ClientErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: number } }
            output: ValidationErrorResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: number } }
            output: ServerErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/documents/:id/cancel': {
      $post:
        | { input: { param: { id: number } }; output: Document; outputFormat: 'json'; status: 200 }
        | {
            input: { param: { id: number } }
            output: ClientErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: number } }
            output: ClientErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: number } }
            output: ClientErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: number } }
            output: ClientErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: number } }
            output: ValidationErrorResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: number } }
            output: ServerErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/documents/:id/create-from-proforma': {
      $post:
        | { input: { param: { id: number } }; output: Document; outputFormat: 'json'; status: 201 }
        | {
            input: { param: { id: number } }
            output: ClientErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: number } }
            output: ClientErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: number } }
            output: ClientErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: number } }
            output: ClientErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: number } }
            output: ValidationErrorResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: number } }
            output: ServerErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/documents/:id/download': {
      $get:
        | { input: { param: { id: number } }; output: File; outputFormat: 'text'; status: 200 }
        | {
            input: { param: { id: number } }
            output: ClientError
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { id: number } }
            output: ClientErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: number } }
            output: ClientErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: number } }
            output: ClientErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: number } }
            output: ValidationErrorResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: number } }
            output: ServerErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/documents/:id/online-szamla': {
      $get:
        | {
            input: { param: { id: number } }
            output: OnlineSzamlaStatus
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: ClientErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: number } }
            output: ClientErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: number } }
            output: ClientErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: number } }
            output: ValidationErrorResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: number } }
            output: ServerErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/documents/:id/payments': {
      $delete:
        | {
            input: { param: { id: number } }
            output: PaymentHistory[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: ClientErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: number } }
            output: ClientErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: number } }
            output: ClientErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: number } }
            output: ClientErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: number } }
            output: ServerErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { param: { id: number } }
            output: PaymentHistory[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: ClientErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: number } }
            output: ClientErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: number } }
            output: ClientErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: number } }
            output: ValidationErrorResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: number } }
            output: ServerErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { id: number } } & { json: PaymentHistory[] }
            output: PaymentHistory[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & { json: PaymentHistory[] }
            output: ClientErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: number } } & { json: PaymentHistory[] }
            output: ClientErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: number } } & { json: PaymentHistory[] }
            output: ClientErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: number } } & { json: PaymentHistory[] }
            output: ClientErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: number } } & { json: PaymentHistory[] }
            output: ValidationErrorResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: number } } & { json: PaymentHistory[] }
            output: ServerErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/documents/:id/public-url': {
      $get:
        | {
            input: { param: { id: number } }
            output: DocumentPublicUrl
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } }
            output: ClientErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: number } }
            output: ClientErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: number } }
            output: ClientErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: number } }
            output: ValidationErrorResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: number } }
            output: ServerErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/documents/:id/send': {
      $post:
        | {
            input: { param: { id: number } } & { json: SendDocument }
            output: SendDocument
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & { json: SendDocument }
            output: ClientErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: number } } & { json: SendDocument }
            output: ClientErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: number } } & { json: SendDocument }
            output: ClientErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: number } } & { json: SendDocument }
            output: ClientErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: number } } & { json: SendDocument }
            output: ValidationErrorResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: number } } & { json: SendDocument }
            output: ServerErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/organization': {
      $get:
        | { input: {}; output: OrganizationData; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ClientErrorResponse; outputFormat: 'json'; status: 400 }
        | { input: {}; output: ClientErrorResponse; outputFormat: 'json'; status: 401 }
        | { input: {}; output: ValidationErrorResponse; outputFormat: 'json'; status: 422 }
        | { input: {}; output: ServerErrorResponse; outputFormat: 'json'; status: 500 }
    }
  } & {
    '/partners': {
      $get:
        | {
            input: { query: { page?: number | undefined; per_page?: number | undefined } }
            output: PartnerList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { page?: number | undefined; per_page?: number | undefined } }
            output: ClientErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { page?: number | undefined; per_page?: number | undefined } }
            output: ClientErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { page?: number | undefined; per_page?: number | undefined } }
            output: ValidationErrorResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { page?: number | undefined; per_page?: number | undefined } }
            output: ServerErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $post:
        | { input: { json: PartnerUpsert }; output: Partner; outputFormat: 'json'; status: 201 }
        | {
            input: { json: PartnerUpsert }
            output: ClientErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: PartnerUpsert }
            output: ClientErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: PartnerUpsert }
            output: ClientErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: PartnerUpsert }
            output: ValidationErrorResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: PartnerUpsert }
            output: ServerErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/partners/:id': {
      $delete:
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { id: number } }
            output: ClientErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: number } }
            output: ClientErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: number } }
            output: ClientErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: number } }
            output: ClientErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: number } }
            output: ServerErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $get:
        | { input: { param: { id: number } }; output: Partner; outputFormat: 'json'; status: 200 }
        | {
            input: { param: { id: number } }
            output: ClientErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: number } }
            output: ClientErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: number } }
            output: ClientErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: number } }
            output: ValidationErrorResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: number } }
            output: ServerErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { id: number } } & { json: PartnerUpsert }
            output: Partner
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & { json: PartnerUpsert }
            output: ClientErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: number } } & { json: PartnerUpsert }
            output: ClientErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: number } } & { json: PartnerUpsert }
            output: ClientErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: number } } & { json: PartnerUpsert }
            output: ClientErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: number } } & { json: PartnerUpsert }
            output: ValidationErrorResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: number } } & { json: PartnerUpsert }
            output: ServerErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/products': {
      $get:
        | {
            input: { query: { page?: number | undefined; per_page?: number | undefined } }
            output: ProductList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { page?: number | undefined; per_page?: number | undefined } }
            output: ClientErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { page?: number | undefined; per_page?: number | undefined } }
            output: ClientErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { page?: number | undefined; per_page?: number | undefined } }
            output: ValidationErrorResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { page?: number | undefined; per_page?: number | undefined } }
            output: ServerErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $post:
        | { input: { json: Product }; output: Product; outputFormat: 'json'; status: 201 }
        | {
            input: { json: Product }
            output: ClientErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: Product }
            output: ClientErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: Product }
            output: ClientErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: Product }
            output: ValidationErrorResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: Product }
            output: ServerErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/products/:id': {
      $delete:
        | { input: { param: { id: number } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { id: number } }
            output: ClientErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: number } }
            output: ClientErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: number } }
            output: ClientErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: number } }
            output: ClientErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: number } }
            output: ServerErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $get:
        | { input: { param: { id: number } }; output: Product; outputFormat: 'json'; status: 200 }
        | {
            input: { param: { id: number } }
            output: ClientErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: number } }
            output: ClientErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: number } }
            output: ClientErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: number } }
            output: ValidationErrorResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: number } }
            output: ServerErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { id: number } } & { json: Product }
            output: Product
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: number } } & { json: Product }
            output: ClientErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: number } } & { json: Product }
            output: ClientErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: number } } & { json: Product }
            output: ClientErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: number } } & { json: Product }
            output: ClientErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: number } } & { json: Product }
            output: ValidationErrorResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: number } } & { json: Product }
            output: ServerErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/utils/convert-legacy-id/:id': {
      $get:
        | { input: { param: { id: number } }; output: Id; outputFormat: 'json'; status: 200 }
        | {
            input: { param: { id: number } }
            output: ClientErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: number } }
            output: ClientErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: number } }
            output: ClientErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: number } }
            output: ValidationErrorResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: number } }
            output: ServerErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  },
  '/'
>
export default routes
