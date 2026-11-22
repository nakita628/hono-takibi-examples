type PassThroughQuery = { example_downstream_property?: string | undefined }
type BalanceSheetFilter = { end_date?: string | undefined; start_date?: string | undefined }
type Id = string
type CreatedAt = string
type CreatedBy = string | null
type UpdatedAt = string | null
type UpdatedBy = string | null
type BalanceSheet = {
  assets: {
    current_assets: {
      accounts: { id?: Id | undefined; name?: string | undefined; value?: number | undefined }[]
      total: number
    }
    fixed_assets: {
      accounts: { id?: Id | undefined; name?: string | undefined; value?: number | undefined }[]
      total: number
    }
    total: number
  }
  created_at?: CreatedAt | undefined
  created_by?: CreatedBy | undefined
  end_date?: string | undefined
  equity: {
    items: { id?: Id | undefined; name?: string | undefined; value?: number | undefined }[]
    total: number
  }
  id?: Id | undefined
  liabilities: {
    accounts: { id?: Id | undefined; name?: string | undefined; value?: number | undefined }[]
    total: number
  }
  report_name: string
  start_date: string
  updated_at?: UpdatedAt | undefined
  updated_by?: UpdatedBy | undefined
}
type GetBalanceSheetResponse = {
  data: BalanceSheet
  operation: string
  resource: string
  service: string
  status: string
  status_code: number
}
type BadRequestResponse = {
  detail?: string | { [x: string]: unknown } | undefined
  error?: string | undefined
  message?: string | undefined
  ref?: string | undefined
  status_code?: number | undefined
  type_name?: string | undefined
}
type UnauthorizedResponse = {
  detail?: string | undefined
  error?: string | undefined
  message?: string | undefined
  ref?: string | undefined
  status_code?: number | undefined
  type_name?: string | undefined
}
type PaymentRequiredResponse = {
  detail?: string | undefined
  error?: string | undefined
  message?: string | undefined
  ref?: string | undefined
  status_code?: number | undefined
  type_name?: string | undefined
}
type NotFoundResponse = {
  detail?: string | { [x: string]: unknown } | undefined
  error?: string | undefined
  message?: string | undefined
  ref?: string | undefined
  status_code?: number | undefined
  type_name?: string | undefined
}
type UnprocessableResponse = {
  detail?: string | undefined
  error?: string | undefined
  message?: string | undefined
  ref?: string | undefined
  status_code?: number | undefined
  type_name?: string | undefined
}
type UnexpectedErrorResponse = {
  detail?: string | { [x: string]: unknown } | undefined
  error?: string | undefined
  message?: string | undefined
  ref?: string | undefined
  status_code?: number | undefined
  type_name?: string | undefined
}
type SortDirection = 'asc' | 'desc'
type BillsSort = { by?: 'updated_at' | undefined; direction?: SortDirection | undefined }
type Currency =
  | 'UNKNOWN_CURRENCY'
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
  | 'BHD'
  | 'BIF'
  | 'BMD'
  | 'BND'
  | 'BOB'
  | 'BOV'
  | 'BRL'
  | 'BSD'
  | 'BTN'
  | 'BWP'
  | 'BYR'
  | 'BZD'
  | 'CAD'
  | 'CDF'
  | 'CHE'
  | 'CHF'
  | 'CHW'
  | 'CLF'
  | 'CLP'
  | 'CNY'
  | 'COP'
  | 'COU'
  | 'CRC'
  | 'CUC'
  | 'CUP'
  | 'CVE'
  | 'CZK'
  | 'DJF'
  | 'DKK'
  | 'DOP'
  | 'DZD'
  | 'EGP'
  | 'ERN'
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
  | 'IQD'
  | 'IRR'
  | 'ISK'
  | 'JMD'
  | 'JOD'
  | 'JPY'
  | 'KES'
  | 'KGS'
  | 'KHR'
  | 'KMF'
  | 'KPW'
  | 'KRW'
  | 'KWD'
  | 'KYD'
  | 'KZT'
  | 'LAK'
  | 'LBP'
  | 'LKR'
  | 'LRD'
  | 'LSL'
  | 'LTL'
  | 'LVL'
  | 'LYD'
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
  | 'MXV'
  | 'MYR'
  | 'MZN'
  | 'NAD'
  | 'NGN'
  | 'NIO'
  | 'NOK'
  | 'NPR'
  | 'NZD'
  | 'OMR'
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
  | 'SDG'
  | 'SEK'
  | 'SGD'
  | 'SHP'
  | 'SLL'
  | 'SOS'
  | 'SRD'
  | 'SSP'
  | 'STD'
  | 'SVC'
  | 'SYP'
  | 'SZL'
  | 'THB'
  | 'TJS'
  | 'TMT'
  | 'TND'
  | 'TOP'
  | 'TRC'
  | 'TRY'
  | 'TTD'
  | 'TWD'
  | 'TZS'
  | 'UAH'
  | 'UGX'
  | 'USD'
  | 'USN'
  | 'USS'
  | 'UYI'
  | 'UYU'
  | 'UZS'
  | 'VEF'
  | 'VND'
  | 'VUV'
  | 'WST'
  | 'XAF'
  | 'XAG'
  | 'XAU'
  | 'XBA'
  | 'XBB'
  | 'XBC'
  | 'XBD'
  | 'XCD'
  | 'XDR'
  | 'XOF'
  | 'XPD'
  | 'XPF'
  | 'XPT'
  | 'XTS'
  | 'XXX'
  | 'YER'
  | 'ZAR'
  | 'ZMK'
  | 'ZMW'
  | 'BTC'
  | 'ETH'
type CurrencyRate = number | null
type DownstreamId = string | null
type LinkedLedgerAccount = {
  code?: (string | null) | undefined
  id?: string | undefined
  name?: (string | null) | undefined
  nominal_code?: (string | null) | undefined
} | null
type LinkedInvoiceItem = {
  code?: (string | null) | undefined
  id?: (string | null) | undefined
  name?: (string | null) | undefined
}
type Quantity = number | null
type RowVersion = string | null
type LinkedTaxRate = {
  code?: (string | null) | undefined
  id?: (string | null) | undefined
  name?: (string | null) | undefined
  rate?: (number | null) | undefined
}
type UnitOfMeasure = string | null
type UnitPrice = number | null
type BillLineItem = {
  code?: (string | null) | undefined
  created_at?: CreatedAt | undefined
  created_by?: CreatedBy | undefined
  department_id?: (string | null) | undefined
  description?: (string | null) | undefined
  discount_percentage?: (number | null) | undefined
  id?: Id | undefined
  item?: LinkedInvoiceItem | undefined
  ledger_account?: LinkedLedgerAccount | undefined
  line_number?: (number | null) | undefined
  location_id?: (string | null) | undefined
  quantity?: Quantity | undefined
  row_id?: string | undefined
  row_version?: RowVersion | undefined
  tax_amount?: (number | null) | undefined
  tax_rate?: LinkedTaxRate | undefined
  total_amount?: (number | null) | undefined
  type?: 'expense_item' | 'expense_account' | undefined
  unit_of_measure?: UnitOfMeasure | undefined
  unit_price?: UnitPrice | undefined
  updated_at?: UpdatedAt | undefined
  updated_by?: UpdatedBy | undefined
}
type Address = {
  city?: (string | null) | undefined
  contact_name?: (string | null) | undefined
  country?: (string | null) | undefined
  county?: (string | null) | undefined
  email?: (string | null) | undefined
  fax?: (string | null) | undefined
  id?: (string | null) | undefined
  latitude?: (string | null) | undefined
  line1?: (string | null) | undefined
  line2?: (string | null) | undefined
  line3?: (string | null) | undefined
  line4?: (string | null) | undefined
  longitude?: (string | null) | undefined
  name?: (string | null) | undefined
  phone_number?: (string | null) | undefined
  postal_code?: (string | null) | undefined
  row_version?: RowVersion | undefined
  salutation?: (string | null) | undefined
  state?: (string | null) | undefined
  street_number?: (string | null) | undefined
  string?: (string | null) | undefined
  type?: 'primary' | 'secondary' | 'home' | 'office' | 'shipping' | 'billing' | 'other' | undefined
  website?: (string | null) | undefined
}
type LinkedSupplier = {
  address?: Address | undefined
  company_name?: (string | null) | undefined
  display_name?: (string | null) | undefined
  id: string
} | null
type TaxInclusive = boolean | null
type Bill = {
  balance?: (number | null) | undefined
  bill_date?: string | undefined
  bill_number?: (string | null) | undefined
  created_at?: CreatedAt | undefined
  created_by?: CreatedBy | undefined
  currency?: Currency | undefined
  currency_rate?: CurrencyRate | undefined
  deposit?: (number | null) | undefined
  downstream_id?: DownstreamId | undefined
  due_date?: string | undefined
  id?: Id | undefined
  ledger_account?: LinkedLedgerAccount | undefined
  line_items?: BillLineItem[] | undefined
  notes?: (string | null) | undefined
  paid_date?: (string | null) | undefined
  po_number?: (string | null) | undefined
  reference?: (string | null) | undefined
  row_version?: RowVersion | undefined
  status?:
    | 'draft'
    | 'submitted'
    | 'authorised'
    | 'partially_paid'
    | 'paid'
    | 'void'
    | 'credit'
    | 'deleted'
    | undefined
  sub_total?: (number | null) | undefined
  supplier?: LinkedSupplier | undefined
  tax_code?: (string | null) | undefined
  tax_inclusive?: TaxInclusive | undefined
  terms?: (string | null) | undefined
  total?: (number | null) | undefined
  total_tax?: (number | null) | undefined
  updated_at?: UpdatedAt | undefined
  updated_by?: UpdatedBy | undefined
}
type Links = {
  current?: string | undefined
  next?: (string | null) | undefined
  previous?: (string | null) | undefined
}
type Meta = {
  cursors?:
    | {
        current?: (string | null) | undefined
        next?: (string | null) | undefined
        previous?: (string | null) | undefined
      }
    | undefined
  items_on_page?: number | undefined
}
type GetBillsResponse = {
  data: Bill[]
  links?: Links | undefined
  meta?: Meta | undefined
  operation: string
  resource: string
  service: string
  status: string
  status_code: number
}
type UnifiedId = { id: string }
type CreateBillResponse = {
  data: UnifiedId
  operation: string
  resource: string
  service: string
  status: string
  status_code: number
}
type DeleteBillResponse = {
  data: UnifiedId
  operation: string
  resource: string
  service: string
  status: string
  status_code: number
}
type GetBillResponse = {
  data: Bill
  operation: string
  resource: string
  service: string
  status: string
  status_code: number
}
type UpdateBillResponse = {
  data: UnifiedId
  operation: string
  resource: string
  service: string
  status: string
  status_code: number
}
type CompanyName = string | null
type Email = {
  email: string
  id?: string | undefined
  type?: 'primary' | 'secondary' | 'work' | 'personal' | 'billing' | 'other' | undefined
}
type Language = string | null
type PhoneNumber = {
  area_code?: (string | null) | undefined
  country_code?: (string | null) | undefined
  extension?: (string | null) | undefined
  id?: (string | null) | undefined
  number: string
  type?:
    | 'primary'
    | 'secondary'
    | 'home'
    | 'work'
    | 'office'
    | 'mobile'
    | 'assistant'
    | 'fax'
    | 'direct-dial-in'
    | 'personal'
    | 'other'
    | undefined
}
type SalesTaxNumber = string | null
type CompanyInfo = {
  addresses?: Address[] | undefined
  automated_sales_tax?: boolean | undefined
  company_name?: CompanyName | undefined
  company_start_date?: string | undefined
  country?: (string | null) | undefined
  created_at?: CreatedAt | undefined
  created_by?: CreatedBy | undefined
  currency?: Currency | undefined
  default_sales_tax?: LinkedTaxRate | undefined
  emails?: Email[] | undefined
  fiscal_year_start_month?:
    | 'January'
    | 'February'
    | 'March'
    | 'April'
    | 'May'
    | 'June'
    | 'July'
    | 'August'
    | 'September'
    | 'October'
    | 'November'
    | 'December'
    | undefined
  id?: Id | undefined
  language?: Language | undefined
  legal_name?: string | undefined
  phone_numbers?: PhoneNumber[] | undefined
  row_version?: RowVersion | undefined
  sales_tax_enabled?: boolean | undefined
  sales_tax_number?: SalesTaxNumber | undefined
  status?: 'active' | 'inactive' | undefined
  updated_at?: UpdatedAt | undefined
  updated_by?: UpdatedBy | undefined
}
type GetCompanyInfoResponse = {
  data: CompanyInfo
  operation: string
  resource: string
  service: string
  status: string
  status_code: number
}
type LinkedCustomer = {
  company_name?: (string | null) | undefined
  display_id?: (string | null) | undefined
  display_name?: (string | null) | undefined
  id: string
  name?: string | undefined
} | null
type InvoiceLineItem = {
  code?: (string | null) | undefined
  created_at?: CreatedAt | undefined
  created_by?: CreatedBy | undefined
  department_id?: (string | null) | undefined
  description?: (string | null) | undefined
  discount_amount?: (number | null) | undefined
  discount_percentage?: (number | null) | undefined
  id?: Id | undefined
  item?: LinkedInvoiceItem | undefined
  ledger_account?: LinkedLedgerAccount | undefined
  line_number?: (number | null) | undefined
  location_id?: (string | null) | undefined
  quantity?: Quantity | undefined
  row_id?: string | undefined
  row_version?: RowVersion | undefined
  tax_amount?: (number | null) | undefined
  tax_rate?: LinkedTaxRate | undefined
  total_amount?: (number | null) | undefined
  type?: 'sales_item' | 'discount' | 'info' | 'sub_total' | undefined
  unit_of_measure?: UnitOfMeasure | undefined
  unit_price?: UnitPrice | undefined
  updated_at?: UpdatedAt | undefined
  updated_by?: UpdatedBy | undefined
}
type CreditNote = {
  account?: LinkedLedgerAccount | undefined
  allocations?:
    | {
        amount?: (number | null) | undefined
        code?: string | undefined
        id?: string | undefined
        type?:
          | 'invoice'
          | 'order'
          | 'expense'
          | 'credit_memo'
          | 'over_payment'
          | 'pre_payment'
          | undefined
      }[]
    | undefined
  balance?: (number | null) | undefined
  created_at?: CreatedAt | undefined
  created_by?: CreatedBy | undefined
  currency?: Currency | undefined
  currency_rate?: CurrencyRate | undefined
  customer?: LinkedCustomer | undefined
  date_issued?: string | undefined
  date_paid?: (string | null) | undefined
  id: string
  line_items?: InvoiceLineItem[] | undefined
  note?: (string | null) | undefined
  number?: (string | null) | undefined
  reference?: (string | null) | undefined
  remaining_credit?: (number | null) | undefined
  row_version?: RowVersion | undefined
  status?: 'draft' | 'authorised' | 'paid' | 'voided' | 'deleted' | undefined
  sub_total?: (number | null) | undefined
  tax_code?: (string | null) | undefined
  tax_inclusive?: TaxInclusive | undefined
  terms?: (string | null) | undefined
  total_amount: number
  total_tax?: (number | null) | undefined
  type?: 'accounts_receivable_credit' | 'accounts_payable_credit' | undefined
  updated_at?: UpdatedAt | undefined
  updated_by?: UpdatedBy | undefined
}
type GetCreditNotesResponse = {
  data: CreditNote[]
  links?: Links | undefined
  meta?: Meta | undefined
  operation: string
  resource: string
  service: string
  status: string
  status_code: number
}
type CreateCreditNoteResponse = {
  data: UnifiedId
  operation: string
  resource: string
  service: string
  status: string
  status_code: number
}
type DeleteCreditNoteResponse = {
  data: UnifiedId
  operation: string
  resource: string
  service: string
  status: string
  status_code: number
}
type GetCreditNoteResponse = {
  data: CreditNote
  operation: string
  resource: string
  service: string
  status: string
  status_code: number
}
type UpdateCreditNoteResponse = {
  data: UnifiedId
  operation: string
  resource: string
  service: string
  status: string
  status_code: number
}
type CustomersFilter = {
  company_name?: string | undefined
  display_name?: string | undefined
  email?: string | undefined
  first_name?: string | undefined
  last_name?: string | undefined
}
type BankAccount = {
  account_name?: (string | null) | undefined
  account_number?: (string | null) | undefined
  account_type?: 'bank_account' | 'credit_card' | 'other' | undefined
  bank_code?: (string | null) | undefined
  bic?: (string | null) | undefined
  branch_identifier?: (string | null) | undefined
  bsb_number?: (string | null) | undefined
  currency?: Currency | undefined
  iban?: (string | null) | undefined
}
type FirstName = string | null
type LastName = string | null
type MiddleName = string | null
type LinkedParentCustomer = { id: string; name?: string | undefined } | null
type Suffix = string | null
type TaxNumber = string | null
type Title = string | null
type Website = {
  id?: (string | null) | undefined
  type?: 'primary' | 'secondary' | 'work' | 'personal' | 'other' | undefined
  url: string
}
type AccountingCustomer = {
  account?: LinkedLedgerAccount | undefined
  addresses?: Address[] | undefined
  bank_accounts?: BankAccount[] | undefined
  company_name?: CompanyName | undefined
  created_at?: CreatedAt | undefined
  created_by?: CreatedBy | undefined
  currency?: Currency | undefined
  display_id?: (string | null) | undefined
  display_name?: (string | null) | undefined
  downstream_id?: DownstreamId | undefined
  emails?: Email[] | undefined
  first_name?: FirstName | undefined
  id: Id
  individual?: (boolean | null) | undefined
  last_name?: LastName | undefined
  middle_name?: MiddleName | undefined
  notes?: (string | null) | undefined
  parent?: LinkedParentCustomer | undefined
  phone_numbers?: PhoneNumber[] | undefined
  project?: (boolean | null) | undefined
  row_version?: RowVersion | undefined
  status?: 'active' | 'inactive' | 'archived' | 'gdpr-erasure-request' | 'unknown' | undefined
  suffix?: Suffix | undefined
  tax_number?: TaxNumber | undefined
  tax_rate?: LinkedTaxRate | undefined
  title?: Title | undefined
  updated_at?: UpdatedAt | undefined
  updated_by?: UpdatedBy | undefined
  websites?: Website[] | undefined
}
type GetCustomersResponse = {
  data: AccountingCustomer[]
  links?: Links | undefined
  meta?: Meta | undefined
  operation: string
  resource: string
  service: string
  status: string
  status_code: number
}
type CreateCustomerResponse = {
  data: UnifiedId
  operation: string
  resource: string
  service: string
  status: string
  status_code: number
}
type DeleteCustomerResponse = {
  data: UnifiedId
  operation: string
  resource: string
  service: string
  status: string
  status_code: number
}
type GetCustomerResponse = {
  data: AccountingCustomer
  operation: string
  resource: string
  service: string
  status: string
  status_code: number
}
type UpdateCustomerResponse = {
  data: UnifiedId
  operation: string
  resource: string
  service: string
  status: string
  status_code: number
}
type InvoiceItemsFilter = { name?: string | undefined }
type Active = boolean | null
type InvoiceItem = {
  active?: Active | undefined
  asset_account?: LinkedLedgerAccount | undefined
  code?: (string | null) | undefined
  created_at?: CreatedAt | undefined
  created_by?: CreatedBy | undefined
  description?: (string | null) | undefined
  expense_account?: LinkedLedgerAccount | undefined
  id?: string | undefined
  income_account?: LinkedLedgerAccount | undefined
  inventory_date?: (string | null) | undefined
  name?: (string | null) | undefined
  purchase_details?:
    | {
        tax_inclusive?: TaxInclusive | undefined
        tax_rate?: LinkedTaxRate | undefined
        unit_of_measure?: UnitOfMeasure | undefined
        unit_price?: UnitPrice | undefined
      }
    | undefined
  purchased?: (boolean | null) | undefined
  quantity?: Quantity | undefined
  row_version?: RowVersion | undefined
  sales_details?:
    | {
        tax_inclusive?: TaxInclusive | undefined
        tax_rate?: LinkedTaxRate | undefined
        unit_of_measure?: UnitOfMeasure | undefined
        unit_price?: UnitPrice | undefined
      }
    | undefined
  sold?: (boolean | null) | undefined
  taxable?: (boolean | null) | undefined
  tracked?: (boolean | null) | undefined
  type?: 'inventory' | 'service' | 'other' | undefined
  unit_price?: UnitPrice | undefined
  updated_at?: UpdatedAt | undefined
  updated_by?: UpdatedBy | undefined
}
type GetInvoiceItemsResponse = {
  data: InvoiceItem[]
  links?: Links | undefined
  meta?: Meta | undefined
  operation: string
  resource: string
  service: string
  status: string
  status_code: number
}
type CreateInvoiceItemResponse = {
  data: UnifiedId
  operation: string
  resource: string
  service: string
  status: string
  status_code: number
}
type DeleteTaxRateResponse = {
  data: UnifiedId
  operation: string
  resource: string
  service: string
  status: string
  status_code: number
}
type GetInvoiceItemResponse = {
  data: InvoiceItem
  operation: string
  resource: string
  service: string
  status: string
  status_code: number
}
type UpdateInvoiceItemsResponse = {
  data: UnifiedId
  operation: string
  resource: string
  service: string
  status: string
  status_code: number
}
type InvoicesSort = { by?: 'updated_at' | undefined; direction?: SortDirection | undefined }
type Invoice = {
  balance?: (number | null) | undefined
  billing_address?: Address | undefined
  created_at?: CreatedAt | undefined
  created_by?: CreatedBy | undefined
  currency?: Currency | undefined
  currency_rate?: CurrencyRate | undefined
  customer?: LinkedCustomer | undefined
  customer_memo?: (string | null) | undefined
  deposit?: (number | null) | undefined
  discount_amount?: (number | null) | undefined
  discount_percentage?: (number | null) | undefined
  downstream_id?: DownstreamId | undefined
  due_date?: (string | null) | undefined
  id?: Id | undefined
  invoice_date?: (string | null) | undefined
  invoice_sent?: boolean | undefined
  line_items?: InvoiceLineItem[] | undefined
  number?: (string | null) | undefined
  po_number?: (string | null) | undefined
  reference?: (string | null) | undefined
  row_version?: RowVersion | undefined
  shipping_address?: Address | undefined
  source_document_url?: (string | null) | undefined
  status?:
    | 'draft'
    | 'submitted'
    | 'authorised'
    | 'partially_paid'
    | 'paid'
    | 'void'
    | 'credit'
    | 'deleted'
    | undefined
  sub_total?: (number | null) | undefined
  tax_code?: (string | null) | undefined
  tax_inclusive?: TaxInclusive | undefined
  template_id?: (string | null) | undefined
  terms?: (string | null) | undefined
  total?: (number | null) | undefined
  total_tax?: (number | null) | undefined
  type?: 'standard' | 'credit' | 'service' | 'product' | 'supplier' | 'other' | undefined
  updated_at?: UpdatedAt | undefined
  updated_by?: UpdatedBy | undefined
}
type GetInvoicesResponse = {
  data: Invoice[]
  links?: Links | undefined
  meta?: Meta | undefined
  operation: string
  resource: string
  service: string
  status: string
  status_code: number
}
type InvoiceResponse = { downstream_id?: DownstreamId | undefined; id?: Id | undefined }
type CreateInvoiceResponse = {
  data: InvoiceResponse
  operation: string
  resource: string
  service: string
  status: string
  status_code: number
}
type DeleteInvoiceResponse = {
  data: InvoiceResponse
  operation: string
  resource: string
  service: string
  status: string
  status_code: number
}
type GetInvoiceResponse = {
  data: Invoice
  operation: string
  resource: string
  service: string
  status: string
  status_code: number
}
type UpdateInvoiceResponse = {
  data: InvoiceResponse
  operation: string
  resource: string
  service: string
  status: string
  status_code: number
}
type LinkedTrackingCategory = { id?: string | undefined; name?: (string | null) | undefined } | null
type JournalEntryLineItem = {
  department_id?: Id | undefined
  description?: (string | null) | undefined
  id?: Id | undefined
  ledger_account: LinkedLedgerAccount
  location_id?: Id | undefined
  tax_amount?: (number | null) | undefined
  tax_rate?: LinkedTaxRate | undefined
  total_amount: number | null
  tracking_category?: LinkedTrackingCategory | undefined
  type: 'debit' | 'credit'
}
type JournalEntry = {
  created_at?: CreatedAt | undefined
  created_by?: CreatedBy | undefined
  currency?: Currency | undefined
  currency_rate?: CurrencyRate | undefined
  id?: Id | undefined
  journal_symbol?: (string | null) | undefined
  line_items?: JournalEntryLineItem[] | undefined
  memo?: (string | null) | undefined
  posted_at?: string | undefined
  row_version?: RowVersion | undefined
  title?: (string | null) | undefined
  updated_at?: UpdatedAt | undefined
  updated_by?: UpdatedBy | undefined
}
type GetJournalEntriesResponse = {
  data: JournalEntry[]
  links?: Links | undefined
  meta?: Meta | undefined
  operation: string
  resource: string
  service: string
  status: string
  status_code: number
}
type CreateJournalEntryResponse = {
  data: UnifiedId
  operation: string
  resource: string
  service: string
  status: string
  status_code: number
}
type DeleteJournalEntryResponse = {
  data: UnifiedId
  operation: string
  resource: string
  service: string
  status: string
  status_code: number
}
type GetJournalEntryResponse = {
  data: JournalEntry
  operation: string
  resource: string
  service: string
  status: string
  status_code: number
}
type UpdateJournalEntryResponse = {
  data: UnifiedId
  operation: string
  resource: string
  service: string
  status: string
  status_code: number
}
type LedgerAccount = {
  active?: (boolean | null) | undefined
  bank_account?: BankAccount | undefined
  categories?: { id?: string | undefined; name?: string | undefined }[] | undefined
  classification?:
    | 'asset'
    | 'equity'
    | 'expense'
    | 'liability'
    | 'revenue'
    | 'income'
    | 'other_income'
    | 'other_expense'
    | 'costs_of_sales'
    | undefined
  code?: (string | null) | undefined
  created_at?: CreatedAt | undefined
  created_by?: CreatedBy | undefined
  currency?: Currency | undefined
  current_balance?: (number | null) | undefined
  description?: (string | null) | undefined
  display_id?: string | undefined
  fully_qualified_name?: (string | null) | undefined
  header?: (boolean | null) | undefined
  id?: Id | undefined
  last_reconciliation_date?: (string | null) | undefined
  level?: (number | null) | undefined
  name?: (string | null) | undefined
  nominal_code?: (string | null) | undefined
  opening_balance?: (number | null) | undefined
  parent_account?:
    | { display_id?: string | undefined; id?: string | undefined; name?: string | undefined }
    | undefined
  row_version?: RowVersion | undefined
  status?: 'active' | 'inactive' | 'archived' | undefined
  sub_account?: (boolean | null) | undefined
  sub_accounts?: { account_sub_name?: string | undefined; id?: string | undefined }[] | undefined
  sub_type?: (string | null) | undefined
  tax_rate?: LinkedTaxRate | undefined
  tax_type?: (string | null) | undefined
  type?:
    | 'accounts_receivable'
    | 'revenue'
    | 'sales'
    | 'other_income'
    | 'bank'
    | 'current_asset'
    | 'fixed_asset'
    | 'non_current_asset'
    | 'other_asset'
    | 'balancesheet'
    | 'equity'
    | 'expense'
    | 'other_expense'
    | 'costs_of_sales'
    | 'accounts_payable'
    | 'credit_card'
    | 'current_liability'
    | 'non_current_liability'
    | 'other_liability'
    | undefined
  updated_at?: UpdatedAt | undefined
  updated_by?: UpdatedBy | undefined
}
type GetLedgerAccountsResponse = {
  data: LedgerAccount[]
  links?: Links | undefined
  meta?: Meta | undefined
  operation: string
  resource: string
  service: string
  status: string
  status_code: number
}
type CreateLedgerAccountResponse = {
  data: UnifiedId
  operation: string
  resource: string
  service: string
  status: string
  status_code: number
}
type DeleteLedgerAccountResponse = {
  data: UnifiedId
  operation: string
  resource: string
  service: string
  status: string
  status_code: number
}
type GetLedgerAccountResponse = {
  data: LedgerAccount
  operation: string
  resource: string
  service: string
  status: string
  status_code: number
}
type UpdateLedgerAccountResponse = {
  data: UnifiedId
  operation: string
  resource: string
  service: string
  status: string
  status_code: number
}
type Payment = {
  account?: LinkedLedgerAccount | undefined
  accounts_receivable_account_id?: (string | null) | undefined
  accounts_receivable_account_type?: (string | null) | undefined
  allocations?:
    | {
        amount?: (number | null) | undefined
        code?: string | undefined
        id?: string | undefined
        type?:
          | 'invoice'
          | 'order'
          | 'expense'
          | 'credit_memo'
          | 'over_payment'
          | 'pre_payment'
          | undefined
      }[]
    | undefined
  created_at?: CreatedAt | undefined
  created_by?: CreatedBy | undefined
  currency?: Currency | undefined
  currency_rate?: CurrencyRate | undefined
  customer?: LinkedCustomer | undefined
  display_id?: (string | null) | undefined
  downstream_id?: DownstreamId | undefined
  id: string
  note?: (string | null) | undefined
  payment_method?: (string | null) | undefined
  payment_method_id?: (string | null) | undefined
  payment_method_reference?: (string | null) | undefined
  reconciled?: boolean | undefined
  reference?: (string | null) | undefined
  row_version?: RowVersion | undefined
  status?: 'authorised' | 'paid' | 'voided' | 'deleted' | undefined
  supplier?: LinkedSupplier | undefined
  total_amount: number
  transaction_date: string
  type?:
    | 'accounts_receivable'
    | 'accounts_payable'
    | 'accounts_receivable_credit'
    | 'accounts_payable_credit'
    | 'accounts_receivable_overpayment'
    | 'accounts_payable_overpayment'
    | 'accounts_receivable_prepayment'
    | 'accounts_payable_prepayment'
    | undefined
  updated_at?: UpdatedAt | undefined
  updated_by?: UpdatedBy | undefined
}
type GetPaymentsResponse = {
  data: Payment[]
  links?: Links | undefined
  meta?: Meta | undefined
  operation: string
  resource: string
  service: string
  status: string
  status_code: number
}
type CreatePaymentResponse = {
  data: UnifiedId
  operation: string
  resource: string
  service: string
  status: string
  status_code: number
}
type DeletePaymentResponse = {
  data: UnifiedId
  operation: string
  resource: string
  service: string
  status: string
  status_code: number
}
type GetPaymentResponse = {
  data: Payment
  operation: string
  resource: string
  service: string
  status: string
  status_code: number
}
type UpdatePaymentResponse = {
  data: UnifiedId
  operation: string
  resource: string
  service: string
  status: string
  status_code: number
}
type ProfitAndLossFilter = {
  customer_id?: string | undefined
  end_date?: string | undefined
  start_date?: string | undefined
}
type ProfitAndLossSection = {
  id?: (string | null) | undefined
  records?: ProfitAndLossRecords | undefined
  title?: (string | null) | undefined
  total?: (number | null) | undefined
  type: string
}
type ProfitAndLossRecord = {
  id?: (string | null) | undefined
  title?: (string | null) | undefined
  type: string
  value?: (number | null) | undefined
}
type ProfitAndLossRecords = (ProfitAndLossSection | ProfitAndLossRecord)[] | null
type ProfitAndLoss = {
  currency: string
  customer_id?: string | undefined
  end_date?: string | undefined
  expenses: { records: ProfitAndLossRecords; total: number | null }
  gross_profit?: ({ records: ProfitAndLossRecords; total: number | null } | null) | undefined
  id?: Id | undefined
  income: { records: ProfitAndLossRecords; total: number | null }
  net_income?: ({ records: ProfitAndLossRecords; total: number | null } | null) | undefined
  net_operating_income?:
    | ({ records: ProfitAndLossRecords; total: number | null } | null)
    | undefined
  report_name: string
  start_date?: string | undefined
}
type GetProfitAndLossResponse = {
  data: ProfitAndLoss
  operation: string
  resource: string
  service: string
  status: string
  status_code: number
}
type SuppliersFilter = { company_name?: string | undefined; email?: string | undefined }
type Supplier = {
  account?: LinkedLedgerAccount | undefined
  addresses?: Address[] | undefined
  bank_accounts?: BankAccount[] | undefined
  company_name?: CompanyName | undefined
  created_at?: CreatedAt | undefined
  created_by?: CreatedBy | undefined
  currency?: Currency | undefined
  display_id?: (string | null) | undefined
  display_name?: (string | null) | undefined
  downstream_id?: DownstreamId | undefined
  emails?: Email[] | undefined
  first_name?: FirstName | undefined
  id: Id
  individual?: (boolean | null) | undefined
  last_name?: LastName | undefined
  middle_name?: MiddleName | undefined
  notes?: (string | null) | undefined
  phone_numbers?: PhoneNumber[] | undefined
  row_version?: RowVersion | undefined
  status?: 'active' | 'inactive' | 'archived' | 'gdpr-erasure-request' | 'unknown' | undefined
  suffix?: Suffix | undefined
  tax_number?: TaxNumber | undefined
  tax_rate?: LinkedTaxRate | undefined
  title?: Title | undefined
  updated_at?: UpdatedAt | undefined
  updated_by?: UpdatedBy | undefined
  websites?: Website[] | undefined
}
type GetSuppliersResponse = {
  data: Supplier[]
  links?: Links | undefined
  meta?: Meta | undefined
  operation: string
  resource: string
  service: string
  status: string
  status_code: number
}
type CreateSupplierResponse = {
  data: UnifiedId
  operation: string
  resource: string
  service: string
  status: string
  status_code: number
}
type DeleteSupplierResponse = {
  data: UnifiedId
  operation: string
  resource: string
  service: string
  status: string
  status_code: number
}
type GetSupplierResponse = {
  data: Supplier
  operation: string
  resource: string
  service: string
  status: string
  status_code: number
}
type UpdateSupplierResponse = {
  data: UnifiedId
  operation: string
  resource: string
  service: string
  status: string
  status_code: number
}
type TaxRatesFilter = {
  assets?: boolean | undefined
  equity?: boolean | undefined
  expenses?: boolean | undefined
  liabilities?: boolean | undefined
  revenue?: boolean | undefined
}
type TaxRate = {
  code?: (string | null) | undefined
  components?:
    | (
        | {
            compound?: (boolean | null) | undefined
            id?: (string | null) | undefined
            name?: string | undefined
            rate?: (number | null) | undefined
          }[]
        | null
      )
    | undefined
  created_at?: CreatedAt | undefined
  created_by?: CreatedBy | undefined
  description?: (string | null) | undefined
  effective_tax_rate?: (number | null) | undefined
  id?: (string | null) | undefined
  name?: string | undefined
  original_tax_rate_id?: (string | null) | undefined
  report_tax_type?: (string | null) | undefined
  row_version?: RowVersion | undefined
  status?: 'active' | 'inactive' | 'archived' | undefined
  tax_payable_account_id?: (string | null) | undefined
  tax_remitted_account_id?: (string | null) | undefined
  total_tax_rate?: (number | null) | undefined
  type?: (string | null) | undefined
  updated_at?: UpdatedAt | undefined
  updated_by?: UpdatedBy | undefined
}
type GetTaxRatesResponse = {
  data: TaxRate[]
  links?: Links | undefined
  meta?: Meta | undefined
  operation: string
  resource: string
  service: string
  status: string
  status_code: number
}
type CreateTaxRateResponse = {
  data: UnifiedId
  operation: string
  resource: string
  service: string
  status: string
  status_code: number
}
type GetTaxRateResponse = {
  data: TaxRate
  operation: string
  resource: string
  service: string
  status: string
  status_code: number
}
type UpdateTaxRateResponse = {
  data: UnifiedId
  operation: string
  resource: string
  service: string
  status: string
  status_code: number
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/accounting/balance-sheet': {
      $get:
        | {
            input: {
              query: {
                pass_through?: PassThroughQuery | undefined
                filter?: BalanceSheetFilter | undefined
                raw?: boolean | undefined
              }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: GetBalanceSheetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                pass_through?: PassThroughQuery | undefined
                filter?: BalanceSheetFilter | undefined
                raw?: boolean | undefined
              }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: BadRequestResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                pass_through?: PassThroughQuery | undefined
                filter?: BalanceSheetFilter | undefined
                raw?: boolean | undefined
              }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: UnauthorizedResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                pass_through?: PassThroughQuery | undefined
                filter?: BalanceSheetFilter | undefined
                raw?: boolean | undefined
              }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: PaymentRequiredResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: {
              query: {
                pass_through?: PassThroughQuery | undefined
                filter?: BalanceSheetFilter | undefined
                raw?: boolean | undefined
              }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: NotFoundResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                pass_through?: PassThroughQuery | undefined
                filter?: BalanceSheetFilter | undefined
                raw?: boolean | undefined
              }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: UnprocessableResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              query: {
                pass_through?: PassThroughQuery | undefined
                filter?: BalanceSheetFilter | undefined
                raw?: boolean | undefined
              }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: UnexpectedErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/accounting/bills': {
      $get:
        | {
            input: {
              query: {
                raw?: boolean | undefined
                cursor?: (string | null) | undefined
                limit?: number | undefined
                sort?: BillsSort | undefined
                pass_through?: PassThroughQuery | undefined
                fields?: (string | null) | undefined
              }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: GetBillsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                raw?: boolean | undefined
                cursor?: (string | null) | undefined
                limit?: number | undefined
                sort?: BillsSort | undefined
                pass_through?: PassThroughQuery | undefined
                fields?: (string | null) | undefined
              }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: BadRequestResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                raw?: boolean | undefined
                cursor?: (string | null) | undefined
                limit?: number | undefined
                sort?: BillsSort | undefined
                pass_through?: PassThroughQuery | undefined
                fields?: (string | null) | undefined
              }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: UnauthorizedResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                raw?: boolean | undefined
                cursor?: (string | null) | undefined
                limit?: number | undefined
                sort?: BillsSort | undefined
                pass_through?: PassThroughQuery | undefined
                fields?: (string | null) | undefined
              }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: PaymentRequiredResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: {
              query: {
                raw?: boolean | undefined
                cursor?: (string | null) | undefined
                limit?: number | undefined
                sort?: BillsSort | undefined
                pass_through?: PassThroughQuery | undefined
                fields?: (string | null) | undefined
              }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: NotFoundResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                raw?: boolean | undefined
                cursor?: (string | null) | undefined
                limit?: number | undefined
                sort?: BillsSort | undefined
                pass_through?: PassThroughQuery | undefined
                fields?: (string | null) | undefined
              }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: UnprocessableResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              query: {
                raw?: boolean | undefined
                cursor?: (string | null) | undefined
                limit?: number | undefined
                sort?: BillsSort | undefined
                pass_through?: PassThroughQuery | undefined
                fields?: (string | null) | undefined
              }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: UnexpectedErrorResponse
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: Bill }
            output: CreateBillResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: Bill }
            output: BadRequestResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: Bill }
            output: UnauthorizedResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: Bill }
            output: PaymentRequiredResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: Bill }
            output: NotFoundResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: Bill }
            output: UnprocessableResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: Bill }
            output: UnexpectedErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/accounting/bills/:id': {
      $delete:
        | {
            input: { param: { id: string } } & { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: DeleteBillResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: BadRequestResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: UnauthorizedResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: PaymentRequiredResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { id: string } } & { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: NotFoundResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: UnprocessableResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: UnexpectedErrorResponse
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { id: string } } & {
              query: { raw?: boolean | undefined; fields?: (string | null) | undefined }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: GetBillResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { raw?: boolean | undefined; fields?: (string | null) | undefined }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: BadRequestResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: { raw?: boolean | undefined; fields?: (string | null) | undefined }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: UnauthorizedResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: { raw?: boolean | undefined; fields?: (string | null) | undefined }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: PaymentRequiredResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { id: string } } & {
              query: { raw?: boolean | undefined; fields?: (string | null) | undefined }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: NotFoundResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              query: { raw?: boolean | undefined; fields?: (string | null) | undefined }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: UnprocessableResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & {
              query: { raw?: boolean | undefined; fields?: (string | null) | undefined }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: UnexpectedErrorResponse
            outputFormat: 'json'
            status: 200
          }
      $patch:
        | {
            input: { param: { id: string } } & { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: Bill }
            output: UpdateBillResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: Bill }
            output: BadRequestResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: Bill }
            output: UnauthorizedResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: Bill }
            output: PaymentRequiredResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { id: string } } & { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: Bill }
            output: NotFoundResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: Bill }
            output: UnprocessableResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: Bill }
            output: UnexpectedErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/accounting/company-info': {
      $get:
        | {
            input: {
              query: { raw?: boolean | undefined; fields?: (string | null) | undefined }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: GetCompanyInfoResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { raw?: boolean | undefined; fields?: (string | null) | undefined }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: BadRequestResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: { raw?: boolean | undefined; fields?: (string | null) | undefined }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: UnauthorizedResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: { raw?: boolean | undefined; fields?: (string | null) | undefined }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: PaymentRequiredResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: {
              query: { raw?: boolean | undefined; fields?: (string | null) | undefined }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: NotFoundResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: { raw?: boolean | undefined; fields?: (string | null) | undefined }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: UnprocessableResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              query: { raw?: boolean | undefined; fields?: (string | null) | undefined }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: UnexpectedErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/accounting/credit-notes': {
      $get:
        | {
            input: {
              query: {
                raw?: boolean | undefined
                cursor?: (string | null) | undefined
                limit?: number | undefined
                pass_through?: PassThroughQuery | undefined
                fields?: (string | null) | undefined
              }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: GetCreditNotesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                raw?: boolean | undefined
                cursor?: (string | null) | undefined
                limit?: number | undefined
                pass_through?: PassThroughQuery | undefined
                fields?: (string | null) | undefined
              }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: BadRequestResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                raw?: boolean | undefined
                cursor?: (string | null) | undefined
                limit?: number | undefined
                pass_through?: PassThroughQuery | undefined
                fields?: (string | null) | undefined
              }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: UnauthorizedResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                raw?: boolean | undefined
                cursor?: (string | null) | undefined
                limit?: number | undefined
                pass_through?: PassThroughQuery | undefined
                fields?: (string | null) | undefined
              }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: PaymentRequiredResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: {
              query: {
                raw?: boolean | undefined
                cursor?: (string | null) | undefined
                limit?: number | undefined
                pass_through?: PassThroughQuery | undefined
                fields?: (string | null) | undefined
              }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: NotFoundResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                raw?: boolean | undefined
                cursor?: (string | null) | undefined
                limit?: number | undefined
                pass_through?: PassThroughQuery | undefined
                fields?: (string | null) | undefined
              }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: UnprocessableResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              query: {
                raw?: boolean | undefined
                cursor?: (string | null) | undefined
                limit?: number | undefined
                pass_through?: PassThroughQuery | undefined
                fields?: (string | null) | undefined
              }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: UnexpectedErrorResponse
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: CreditNote }
            output: CreateCreditNoteResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: CreditNote }
            output: BadRequestResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: CreditNote }
            output: UnauthorizedResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: CreditNote }
            output: PaymentRequiredResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: CreditNote }
            output: NotFoundResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: CreditNote }
            output: UnprocessableResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: CreditNote }
            output: UnexpectedErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/accounting/credit-notes/:id': {
      $delete:
        | {
            input: { param: { id: string } } & { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: DeleteCreditNoteResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: BadRequestResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: UnauthorizedResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: PaymentRequiredResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { id: string } } & { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: NotFoundResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: UnprocessableResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: UnexpectedErrorResponse
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { id: string } } & {
              query: { raw?: boolean | undefined; fields?: (string | null) | undefined }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: GetCreditNoteResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { raw?: boolean | undefined; fields?: (string | null) | undefined }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: BadRequestResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: { raw?: boolean | undefined; fields?: (string | null) | undefined }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: UnauthorizedResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: { raw?: boolean | undefined; fields?: (string | null) | undefined }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: PaymentRequiredResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { id: string } } & {
              query: { raw?: boolean | undefined; fields?: (string | null) | undefined }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: NotFoundResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              query: { raw?: boolean | undefined; fields?: (string | null) | undefined }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: UnprocessableResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & {
              query: { raw?: boolean | undefined; fields?: (string | null) | undefined }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: UnexpectedErrorResponse
            outputFormat: 'json'
            status: 200
          }
      $patch:
        | {
            input: { param: { id: string } } & { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: CreditNote }
            output: UpdateCreditNoteResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: CreditNote }
            output: BadRequestResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: CreditNote }
            output: UnauthorizedResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: CreditNote }
            output: PaymentRequiredResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { id: string } } & { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: CreditNote }
            output: NotFoundResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: CreditNote }
            output: UnprocessableResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: CreditNote }
            output: UnexpectedErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/accounting/customers': {
      $get:
        | {
            input: {
              query: {
                raw?: boolean | undefined
                cursor?: (string | null) | undefined
                limit?: number | undefined
                filter?: CustomersFilter | undefined
                pass_through?: PassThroughQuery | undefined
                fields?: (string | null) | undefined
              }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: GetCustomersResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                raw?: boolean | undefined
                cursor?: (string | null) | undefined
                limit?: number | undefined
                filter?: CustomersFilter | undefined
                pass_through?: PassThroughQuery | undefined
                fields?: (string | null) | undefined
              }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: BadRequestResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                raw?: boolean | undefined
                cursor?: (string | null) | undefined
                limit?: number | undefined
                filter?: CustomersFilter | undefined
                pass_through?: PassThroughQuery | undefined
                fields?: (string | null) | undefined
              }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: UnauthorizedResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                raw?: boolean | undefined
                cursor?: (string | null) | undefined
                limit?: number | undefined
                filter?: CustomersFilter | undefined
                pass_through?: PassThroughQuery | undefined
                fields?: (string | null) | undefined
              }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: PaymentRequiredResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: {
              query: {
                raw?: boolean | undefined
                cursor?: (string | null) | undefined
                limit?: number | undefined
                filter?: CustomersFilter | undefined
                pass_through?: PassThroughQuery | undefined
                fields?: (string | null) | undefined
              }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: NotFoundResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                raw?: boolean | undefined
                cursor?: (string | null) | undefined
                limit?: number | undefined
                filter?: CustomersFilter | undefined
                pass_through?: PassThroughQuery | undefined
                fields?: (string | null) | undefined
              }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: UnprocessableResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              query: {
                raw?: boolean | undefined
                cursor?: (string | null) | undefined
                limit?: number | undefined
                filter?: CustomersFilter | undefined
                pass_through?: PassThroughQuery | undefined
                fields?: (string | null) | undefined
              }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: UnexpectedErrorResponse
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: AccountingCustomer }
            output: CreateCustomerResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: AccountingCustomer }
            output: BadRequestResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: AccountingCustomer }
            output: UnauthorizedResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: AccountingCustomer }
            output: PaymentRequiredResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: AccountingCustomer }
            output: NotFoundResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: AccountingCustomer }
            output: UnprocessableResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: AccountingCustomer }
            output: UnexpectedErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/accounting/customers/:id': {
      $delete:
        | {
            input: { param: { id: string } } & { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: DeleteCustomerResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: BadRequestResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: UnauthorizedResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: PaymentRequiredResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { id: string } } & { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: NotFoundResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: UnprocessableResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: UnexpectedErrorResponse
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { id: string } } & {
              query: { raw?: boolean | undefined; fields?: (string | null) | undefined }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: GetCustomerResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { raw?: boolean | undefined; fields?: (string | null) | undefined }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: BadRequestResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: { raw?: boolean | undefined; fields?: (string | null) | undefined }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: UnauthorizedResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: { raw?: boolean | undefined; fields?: (string | null) | undefined }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: PaymentRequiredResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { id: string } } & {
              query: { raw?: boolean | undefined; fields?: (string | null) | undefined }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: NotFoundResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              query: { raw?: boolean | undefined; fields?: (string | null) | undefined }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: UnprocessableResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & {
              query: { raw?: boolean | undefined; fields?: (string | null) | undefined }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: UnexpectedErrorResponse
            outputFormat: 'json'
            status: 200
          }
      $patch:
        | {
            input: { param: { id: string } } & { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: AccountingCustomer }
            output: UpdateCustomerResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: AccountingCustomer }
            output: BadRequestResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: AccountingCustomer }
            output: UnauthorizedResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: AccountingCustomer }
            output: PaymentRequiredResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { id: string } } & { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: AccountingCustomer }
            output: NotFoundResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: AccountingCustomer }
            output: UnprocessableResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: AccountingCustomer }
            output: UnexpectedErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/accounting/invoice-items': {
      $get:
        | {
            input: {
              query: {
                raw?: boolean | undefined
                cursor?: (string | null) | undefined
                limit?: number | undefined
                filter?: InvoiceItemsFilter | undefined
                pass_through?: PassThroughQuery | undefined
                fields?: (string | null) | undefined
              }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: GetInvoiceItemsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                raw?: boolean | undefined
                cursor?: (string | null) | undefined
                limit?: number | undefined
                filter?: InvoiceItemsFilter | undefined
                pass_through?: PassThroughQuery | undefined
                fields?: (string | null) | undefined
              }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: BadRequestResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                raw?: boolean | undefined
                cursor?: (string | null) | undefined
                limit?: number | undefined
                filter?: InvoiceItemsFilter | undefined
                pass_through?: PassThroughQuery | undefined
                fields?: (string | null) | undefined
              }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: UnauthorizedResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                raw?: boolean | undefined
                cursor?: (string | null) | undefined
                limit?: number | undefined
                filter?: InvoiceItemsFilter | undefined
                pass_through?: PassThroughQuery | undefined
                fields?: (string | null) | undefined
              }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: PaymentRequiredResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: {
              query: {
                raw?: boolean | undefined
                cursor?: (string | null) | undefined
                limit?: number | undefined
                filter?: InvoiceItemsFilter | undefined
                pass_through?: PassThroughQuery | undefined
                fields?: (string | null) | undefined
              }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: NotFoundResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                raw?: boolean | undefined
                cursor?: (string | null) | undefined
                limit?: number | undefined
                filter?: InvoiceItemsFilter | undefined
                pass_through?: PassThroughQuery | undefined
                fields?: (string | null) | undefined
              }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: UnprocessableResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              query: {
                raw?: boolean | undefined
                cursor?: (string | null) | undefined
                limit?: number | undefined
                filter?: InvoiceItemsFilter | undefined
                pass_through?: PassThroughQuery | undefined
                fields?: (string | null) | undefined
              }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: UnexpectedErrorResponse
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: InvoiceItem }
            output: CreateInvoiceItemResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: InvoiceItem }
            output: BadRequestResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: InvoiceItem }
            output: UnauthorizedResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: InvoiceItem }
            output: PaymentRequiredResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: InvoiceItem }
            output: NotFoundResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: InvoiceItem }
            output: UnprocessableResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: InvoiceItem }
            output: UnexpectedErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/accounting/invoice-items/:id': {
      $delete:
        | {
            input: { param: { id: string } } & { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: DeleteTaxRateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: BadRequestResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: UnauthorizedResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: PaymentRequiredResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { id: string } } & { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: NotFoundResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: UnprocessableResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: UnexpectedErrorResponse
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { id: string } } & {
              query: { raw?: boolean | undefined; fields?: (string | null) | undefined }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: GetInvoiceItemResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { raw?: boolean | undefined; fields?: (string | null) | undefined }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: BadRequestResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: { raw?: boolean | undefined; fields?: (string | null) | undefined }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: UnauthorizedResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: { raw?: boolean | undefined; fields?: (string | null) | undefined }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: PaymentRequiredResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { id: string } } & {
              query: { raw?: boolean | undefined; fields?: (string | null) | undefined }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: NotFoundResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              query: { raw?: boolean | undefined; fields?: (string | null) | undefined }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: UnprocessableResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & {
              query: { raw?: boolean | undefined; fields?: (string | null) | undefined }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: UnexpectedErrorResponse
            outputFormat: 'json'
            status: 200
          }
      $patch:
        | {
            input: { param: { id: string } } & { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: InvoiceItem }
            output: UpdateInvoiceItemsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: InvoiceItem }
            output: BadRequestResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: InvoiceItem }
            output: UnauthorizedResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: InvoiceItem }
            output: PaymentRequiredResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { id: string } } & { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: InvoiceItem }
            output: NotFoundResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: InvoiceItem }
            output: UnprocessableResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: InvoiceItem }
            output: UnexpectedErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/accounting/invoices': {
      $get:
        | {
            input: {
              query: {
                raw?: boolean | undefined
                cursor?: (string | null) | undefined
                limit?: number | undefined
                sort?: InvoicesSort | undefined
                pass_through?: PassThroughQuery | undefined
                fields?: (string | null) | undefined
              }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: GetInvoicesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                raw?: boolean | undefined
                cursor?: (string | null) | undefined
                limit?: number | undefined
                sort?: InvoicesSort | undefined
                pass_through?: PassThroughQuery | undefined
                fields?: (string | null) | undefined
              }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: BadRequestResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                raw?: boolean | undefined
                cursor?: (string | null) | undefined
                limit?: number | undefined
                sort?: InvoicesSort | undefined
                pass_through?: PassThroughQuery | undefined
                fields?: (string | null) | undefined
              }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: UnauthorizedResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                raw?: boolean | undefined
                cursor?: (string | null) | undefined
                limit?: number | undefined
                sort?: InvoicesSort | undefined
                pass_through?: PassThroughQuery | undefined
                fields?: (string | null) | undefined
              }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: PaymentRequiredResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: {
              query: {
                raw?: boolean | undefined
                cursor?: (string | null) | undefined
                limit?: number | undefined
                sort?: InvoicesSort | undefined
                pass_through?: PassThroughQuery | undefined
                fields?: (string | null) | undefined
              }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: NotFoundResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                raw?: boolean | undefined
                cursor?: (string | null) | undefined
                limit?: number | undefined
                sort?: InvoicesSort | undefined
                pass_through?: PassThroughQuery | undefined
                fields?: (string | null) | undefined
              }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: UnprocessableResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              query: {
                raw?: boolean | undefined
                cursor?: (string | null) | undefined
                limit?: number | undefined
                sort?: InvoicesSort | undefined
                pass_through?: PassThroughQuery | undefined
                fields?: (string | null) | undefined
              }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: UnexpectedErrorResponse
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: Invoice }
            output: CreateInvoiceResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: Invoice }
            output: BadRequestResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: Invoice }
            output: UnauthorizedResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: Invoice }
            output: PaymentRequiredResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: Invoice }
            output: NotFoundResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: Invoice }
            output: UnprocessableResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: Invoice }
            output: UnexpectedErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/accounting/invoices/:id': {
      $delete:
        | {
            input: { param: { id: string } } & { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: DeleteInvoiceResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: BadRequestResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: UnauthorizedResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: PaymentRequiredResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { id: string } } & { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: NotFoundResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: UnprocessableResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: UnexpectedErrorResponse
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { id: string } } & {
              query: { raw?: boolean | undefined; fields?: (string | null) | undefined }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: GetInvoiceResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { raw?: boolean | undefined; fields?: (string | null) | undefined }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: BadRequestResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: { raw?: boolean | undefined; fields?: (string | null) | undefined }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: UnauthorizedResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: { raw?: boolean | undefined; fields?: (string | null) | undefined }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: PaymentRequiredResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { id: string } } & {
              query: { raw?: boolean | undefined; fields?: (string | null) | undefined }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: NotFoundResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              query: { raw?: boolean | undefined; fields?: (string | null) | undefined }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: UnprocessableResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & {
              query: { raw?: boolean | undefined; fields?: (string | null) | undefined }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: UnexpectedErrorResponse
            outputFormat: 'json'
            status: 200
          }
      $patch:
        | {
            input: { param: { id: string } } & { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: Invoice }
            output: UpdateInvoiceResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: Invoice }
            output: BadRequestResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: Invoice }
            output: UnauthorizedResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: Invoice }
            output: PaymentRequiredResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { id: string } } & { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: Invoice }
            output: NotFoundResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: Invoice }
            output: UnprocessableResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: Invoice }
            output: UnexpectedErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/accounting/journal-entries': {
      $get:
        | {
            input: {
              query: {
                raw?: boolean | undefined
                cursor?: (string | null) | undefined
                limit?: number | undefined
                pass_through?: PassThroughQuery | undefined
                fields?: (string | null) | undefined
              }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: GetJournalEntriesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                raw?: boolean | undefined
                cursor?: (string | null) | undefined
                limit?: number | undefined
                pass_through?: PassThroughQuery | undefined
                fields?: (string | null) | undefined
              }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: BadRequestResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                raw?: boolean | undefined
                cursor?: (string | null) | undefined
                limit?: number | undefined
                pass_through?: PassThroughQuery | undefined
                fields?: (string | null) | undefined
              }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: UnauthorizedResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                raw?: boolean | undefined
                cursor?: (string | null) | undefined
                limit?: number | undefined
                pass_through?: PassThroughQuery | undefined
                fields?: (string | null) | undefined
              }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: PaymentRequiredResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: {
              query: {
                raw?: boolean | undefined
                cursor?: (string | null) | undefined
                limit?: number | undefined
                pass_through?: PassThroughQuery | undefined
                fields?: (string | null) | undefined
              }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: NotFoundResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                raw?: boolean | undefined
                cursor?: (string | null) | undefined
                limit?: number | undefined
                pass_through?: PassThroughQuery | undefined
                fields?: (string | null) | undefined
              }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: UnprocessableResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              query: {
                raw?: boolean | undefined
                cursor?: (string | null) | undefined
                limit?: number | undefined
                pass_through?: PassThroughQuery | undefined
                fields?: (string | null) | undefined
              }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: UnexpectedErrorResponse
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: JournalEntry }
            output: CreateJournalEntryResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: JournalEntry }
            output: BadRequestResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: JournalEntry }
            output: UnauthorizedResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: JournalEntry }
            output: PaymentRequiredResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: JournalEntry }
            output: NotFoundResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: JournalEntry }
            output: UnprocessableResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: JournalEntry }
            output: UnexpectedErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/accounting/journal-entries/:id': {
      $delete:
        | {
            input: { param: { id: string } } & { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: DeleteJournalEntryResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: BadRequestResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: UnauthorizedResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: PaymentRequiredResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { id: string } } & { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: NotFoundResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: UnprocessableResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: UnexpectedErrorResponse
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { id: string } } & {
              query: { raw?: boolean | undefined; fields?: (string | null) | undefined }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: GetJournalEntryResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { raw?: boolean | undefined; fields?: (string | null) | undefined }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: BadRequestResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: { raw?: boolean | undefined; fields?: (string | null) | undefined }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: UnauthorizedResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: { raw?: boolean | undefined; fields?: (string | null) | undefined }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: PaymentRequiredResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { id: string } } & {
              query: { raw?: boolean | undefined; fields?: (string | null) | undefined }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: NotFoundResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              query: { raw?: boolean | undefined; fields?: (string | null) | undefined }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: UnprocessableResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & {
              query: { raw?: boolean | undefined; fields?: (string | null) | undefined }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: UnexpectedErrorResponse
            outputFormat: 'json'
            status: 200
          }
      $patch:
        | {
            input: { param: { id: string } } & { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: JournalEntry }
            output: UpdateJournalEntryResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: JournalEntry }
            output: BadRequestResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: JournalEntry }
            output: UnauthorizedResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: JournalEntry }
            output: PaymentRequiredResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { id: string } } & { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: JournalEntry }
            output: NotFoundResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: JournalEntry }
            output: UnprocessableResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: JournalEntry }
            output: UnexpectedErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/accounting/ledger-accounts': {
      $get:
        | {
            input: {
              query: {
                raw?: boolean | undefined
                cursor?: (string | null) | undefined
                limit?: number | undefined
                pass_through?: PassThroughQuery | undefined
                fields?: (string | null) | undefined
              }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: GetLedgerAccountsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                raw?: boolean | undefined
                cursor?: (string | null) | undefined
                limit?: number | undefined
                pass_through?: PassThroughQuery | undefined
                fields?: (string | null) | undefined
              }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: BadRequestResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                raw?: boolean | undefined
                cursor?: (string | null) | undefined
                limit?: number | undefined
                pass_through?: PassThroughQuery | undefined
                fields?: (string | null) | undefined
              }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: UnauthorizedResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                raw?: boolean | undefined
                cursor?: (string | null) | undefined
                limit?: number | undefined
                pass_through?: PassThroughQuery | undefined
                fields?: (string | null) | undefined
              }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: PaymentRequiredResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: {
              query: {
                raw?: boolean | undefined
                cursor?: (string | null) | undefined
                limit?: number | undefined
                pass_through?: PassThroughQuery | undefined
                fields?: (string | null) | undefined
              }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: NotFoundResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                raw?: boolean | undefined
                cursor?: (string | null) | undefined
                limit?: number | undefined
                pass_through?: PassThroughQuery | undefined
                fields?: (string | null) | undefined
              }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: UnprocessableResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              query: {
                raw?: boolean | undefined
                cursor?: (string | null) | undefined
                limit?: number | undefined
                pass_through?: PassThroughQuery | undefined
                fields?: (string | null) | undefined
              }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: UnexpectedErrorResponse
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: LedgerAccount }
            output: CreateLedgerAccountResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: LedgerAccount }
            output: BadRequestResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: LedgerAccount }
            output: UnauthorizedResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: LedgerAccount }
            output: PaymentRequiredResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: LedgerAccount }
            output: NotFoundResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: LedgerAccount }
            output: UnprocessableResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: LedgerAccount }
            output: UnexpectedErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/accounting/ledger-accounts/:id': {
      $delete:
        | {
            input: { param: { id: string } } & { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: DeleteLedgerAccountResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: BadRequestResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: UnauthorizedResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: PaymentRequiredResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { id: string } } & { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: NotFoundResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: UnprocessableResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: UnexpectedErrorResponse
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { id: string } } & {
              query: { raw?: boolean | undefined; fields?: (string | null) | undefined }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: GetLedgerAccountResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { raw?: boolean | undefined; fields?: (string | null) | undefined }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: BadRequestResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: { raw?: boolean | undefined; fields?: (string | null) | undefined }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: UnauthorizedResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: { raw?: boolean | undefined; fields?: (string | null) | undefined }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: PaymentRequiredResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { id: string } } & {
              query: { raw?: boolean | undefined; fields?: (string | null) | undefined }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: NotFoundResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              query: { raw?: boolean | undefined; fields?: (string | null) | undefined }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: UnprocessableResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & {
              query: { raw?: boolean | undefined; fields?: (string | null) | undefined }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: UnexpectedErrorResponse
            outputFormat: 'json'
            status: 200
          }
      $patch:
        | {
            input: { param: { id: string } } & { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: LedgerAccount }
            output: UpdateLedgerAccountResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: LedgerAccount }
            output: BadRequestResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: LedgerAccount }
            output: UnauthorizedResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: LedgerAccount }
            output: PaymentRequiredResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { id: string } } & { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: LedgerAccount }
            output: NotFoundResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: LedgerAccount }
            output: UnprocessableResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: LedgerAccount }
            output: UnexpectedErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/accounting/payments': {
      $get:
        | {
            input: {
              query: {
                raw?: boolean | undefined
                cursor?: (string | null) | undefined
                limit?: number | undefined
                pass_through?: PassThroughQuery | undefined
                fields?: (string | null) | undefined
              }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: GetPaymentsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                raw?: boolean | undefined
                cursor?: (string | null) | undefined
                limit?: number | undefined
                pass_through?: PassThroughQuery | undefined
                fields?: (string | null) | undefined
              }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: BadRequestResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                raw?: boolean | undefined
                cursor?: (string | null) | undefined
                limit?: number | undefined
                pass_through?: PassThroughQuery | undefined
                fields?: (string | null) | undefined
              }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: UnauthorizedResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                raw?: boolean | undefined
                cursor?: (string | null) | undefined
                limit?: number | undefined
                pass_through?: PassThroughQuery | undefined
                fields?: (string | null) | undefined
              }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: PaymentRequiredResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: {
              query: {
                raw?: boolean | undefined
                cursor?: (string | null) | undefined
                limit?: number | undefined
                pass_through?: PassThroughQuery | undefined
                fields?: (string | null) | undefined
              }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: NotFoundResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                raw?: boolean | undefined
                cursor?: (string | null) | undefined
                limit?: number | undefined
                pass_through?: PassThroughQuery | undefined
                fields?: (string | null) | undefined
              }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: UnprocessableResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              query: {
                raw?: boolean | undefined
                cursor?: (string | null) | undefined
                limit?: number | undefined
                pass_through?: PassThroughQuery | undefined
                fields?: (string | null) | undefined
              }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: UnexpectedErrorResponse
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: Payment }
            output: CreatePaymentResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: Payment }
            output: BadRequestResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: Payment }
            output: UnauthorizedResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: Payment }
            output: PaymentRequiredResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: Payment }
            output: NotFoundResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: Payment }
            output: UnprocessableResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: Payment }
            output: UnexpectedErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/accounting/payments/:id': {
      $delete:
        | {
            input: { param: { id: string } } & { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: DeletePaymentResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: BadRequestResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: UnauthorizedResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: PaymentRequiredResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { id: string } } & { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: NotFoundResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: UnprocessableResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: UnexpectedErrorResponse
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { id: string } } & {
              query: { raw?: boolean | undefined; fields?: (string | null) | undefined }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: GetPaymentResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { raw?: boolean | undefined; fields?: (string | null) | undefined }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: BadRequestResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: { raw?: boolean | undefined; fields?: (string | null) | undefined }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: UnauthorizedResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: { raw?: boolean | undefined; fields?: (string | null) | undefined }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: PaymentRequiredResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { id: string } } & {
              query: { raw?: boolean | undefined; fields?: (string | null) | undefined }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: NotFoundResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              query: { raw?: boolean | undefined; fields?: (string | null) | undefined }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: UnprocessableResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & {
              query: { raw?: boolean | undefined; fields?: (string | null) | undefined }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: UnexpectedErrorResponse
            outputFormat: 'json'
            status: 200
          }
      $patch:
        | {
            input: { param: { id: string } } & { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: Payment }
            output: UpdatePaymentResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: Payment }
            output: BadRequestResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: Payment }
            output: UnauthorizedResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: Payment }
            output: PaymentRequiredResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { id: string } } & { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: Payment }
            output: NotFoundResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: Payment }
            output: UnprocessableResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: Payment }
            output: UnexpectedErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/accounting/profit-and-loss': {
      $get:
        | {
            input: {
              query: {
                raw?: boolean | undefined
                filter?: ProfitAndLossFilter | undefined
                pass_through?: PassThroughQuery | undefined
                fields?: (string | null) | undefined
              }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: GetProfitAndLossResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                raw?: boolean | undefined
                filter?: ProfitAndLossFilter | undefined
                pass_through?: PassThroughQuery | undefined
                fields?: (string | null) | undefined
              }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: BadRequestResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                raw?: boolean | undefined
                filter?: ProfitAndLossFilter | undefined
                pass_through?: PassThroughQuery | undefined
                fields?: (string | null) | undefined
              }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: UnauthorizedResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                raw?: boolean | undefined
                filter?: ProfitAndLossFilter | undefined
                pass_through?: PassThroughQuery | undefined
                fields?: (string | null) | undefined
              }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: PaymentRequiredResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: {
              query: {
                raw?: boolean | undefined
                filter?: ProfitAndLossFilter | undefined
                pass_through?: PassThroughQuery | undefined
                fields?: (string | null) | undefined
              }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: NotFoundResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                raw?: boolean | undefined
                filter?: ProfitAndLossFilter | undefined
                pass_through?: PassThroughQuery | undefined
                fields?: (string | null) | undefined
              }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: UnprocessableResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              query: {
                raw?: boolean | undefined
                filter?: ProfitAndLossFilter | undefined
                pass_through?: PassThroughQuery | undefined
                fields?: (string | null) | undefined
              }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: UnexpectedErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/accounting/suppliers': {
      $get:
        | {
            input: {
              query: {
                raw?: boolean | undefined
                cursor?: (string | null) | undefined
                limit?: number | undefined
                filter?: SuppliersFilter | undefined
                pass_through?: PassThroughQuery | undefined
                fields?: (string | null) | undefined
              }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: GetSuppliersResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                raw?: boolean | undefined
                cursor?: (string | null) | undefined
                limit?: number | undefined
                filter?: SuppliersFilter | undefined
                pass_through?: PassThroughQuery | undefined
                fields?: (string | null) | undefined
              }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: BadRequestResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                raw?: boolean | undefined
                cursor?: (string | null) | undefined
                limit?: number | undefined
                filter?: SuppliersFilter | undefined
                pass_through?: PassThroughQuery | undefined
                fields?: (string | null) | undefined
              }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: UnauthorizedResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                raw?: boolean | undefined
                cursor?: (string | null) | undefined
                limit?: number | undefined
                filter?: SuppliersFilter | undefined
                pass_through?: PassThroughQuery | undefined
                fields?: (string | null) | undefined
              }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: PaymentRequiredResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: {
              query: {
                raw?: boolean | undefined
                cursor?: (string | null) | undefined
                limit?: number | undefined
                filter?: SuppliersFilter | undefined
                pass_through?: PassThroughQuery | undefined
                fields?: (string | null) | undefined
              }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: NotFoundResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                raw?: boolean | undefined
                cursor?: (string | null) | undefined
                limit?: number | undefined
                filter?: SuppliersFilter | undefined
                pass_through?: PassThroughQuery | undefined
                fields?: (string | null) | undefined
              }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: UnprocessableResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              query: {
                raw?: boolean | undefined
                cursor?: (string | null) | undefined
                limit?: number | undefined
                filter?: SuppliersFilter | undefined
                pass_through?: PassThroughQuery | undefined
                fields?: (string | null) | undefined
              }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: UnexpectedErrorResponse
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: Supplier }
            output: CreateSupplierResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: Supplier }
            output: BadRequestResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: Supplier }
            output: UnauthorizedResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: Supplier }
            output: PaymentRequiredResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: Supplier }
            output: NotFoundResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: Supplier }
            output: UnprocessableResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: Supplier }
            output: UnexpectedErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/accounting/suppliers/:id': {
      $delete:
        | {
            input: { param: { id: string } } & { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: DeleteSupplierResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: BadRequestResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: UnauthorizedResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: PaymentRequiredResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { id: string } } & { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: NotFoundResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: UnprocessableResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: UnexpectedErrorResponse
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { id: string } } & {
              query: { raw?: boolean | undefined; fields?: (string | null) | undefined }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: GetSupplierResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { raw?: boolean | undefined; fields?: (string | null) | undefined }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: BadRequestResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: { raw?: boolean | undefined; fields?: (string | null) | undefined }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: UnauthorizedResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: { raw?: boolean | undefined; fields?: (string | null) | undefined }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: PaymentRequiredResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { id: string } } & {
              query: { raw?: boolean | undefined; fields?: (string | null) | undefined }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: NotFoundResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              query: { raw?: boolean | undefined; fields?: (string | null) | undefined }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: UnprocessableResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & {
              query: { raw?: boolean | undefined; fields?: (string | null) | undefined }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: UnexpectedErrorResponse
            outputFormat: 'json'
            status: 200
          }
      $patch:
        | {
            input: { param: { id: string } } & { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: Supplier }
            output: UpdateSupplierResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: Supplier }
            output: BadRequestResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: Supplier }
            output: UnauthorizedResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: Supplier }
            output: PaymentRequiredResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { id: string } } & { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: Supplier }
            output: NotFoundResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: Supplier }
            output: UnprocessableResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: Supplier }
            output: UnexpectedErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/accounting/tax-rates': {
      $get:
        | {
            input: {
              query: {
                raw?: boolean | undefined
                cursor?: (string | null) | undefined
                limit?: number | undefined
                filter?: TaxRatesFilter | undefined
                pass_through?: PassThroughQuery | undefined
                fields?: (string | null) | undefined
              }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: GetTaxRatesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                raw?: boolean | undefined
                cursor?: (string | null) | undefined
                limit?: number | undefined
                filter?: TaxRatesFilter | undefined
                pass_through?: PassThroughQuery | undefined
                fields?: (string | null) | undefined
              }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: BadRequestResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                raw?: boolean | undefined
                cursor?: (string | null) | undefined
                limit?: number | undefined
                filter?: TaxRatesFilter | undefined
                pass_through?: PassThroughQuery | undefined
                fields?: (string | null) | undefined
              }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: UnauthorizedResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                raw?: boolean | undefined
                cursor?: (string | null) | undefined
                limit?: number | undefined
                filter?: TaxRatesFilter | undefined
                pass_through?: PassThroughQuery | undefined
                fields?: (string | null) | undefined
              }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: PaymentRequiredResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: {
              query: {
                raw?: boolean | undefined
                cursor?: (string | null) | undefined
                limit?: number | undefined
                filter?: TaxRatesFilter | undefined
                pass_through?: PassThroughQuery | undefined
                fields?: (string | null) | undefined
              }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: NotFoundResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                raw?: boolean | undefined
                cursor?: (string | null) | undefined
                limit?: number | undefined
                filter?: TaxRatesFilter | undefined
                pass_through?: PassThroughQuery | undefined
                fields?: (string | null) | undefined
              }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: UnprocessableResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              query: {
                raw?: boolean | undefined
                cursor?: (string | null) | undefined
                limit?: number | undefined
                filter?: TaxRatesFilter | undefined
                pass_through?: PassThroughQuery | undefined
                fields?: (string | null) | undefined
              }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: UnexpectedErrorResponse
            outputFormat: 'json'
            status: 200
          }
      $post:
        | {
            input: { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: TaxRate }
            output: CreateTaxRateResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: TaxRate }
            output: BadRequestResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: TaxRate }
            output: UnauthorizedResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: TaxRate }
            output: PaymentRequiredResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: TaxRate }
            output: NotFoundResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: TaxRate }
            output: UnprocessableResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: TaxRate }
            output: UnexpectedErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/accounting/tax-rates/:id': {
      $delete:
        | {
            input: { param: { id: string } } & { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: DeleteTaxRateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: BadRequestResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: UnauthorizedResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: PaymentRequiredResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { id: string } } & { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: NotFoundResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: UnprocessableResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: UnexpectedErrorResponse
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { id: string } } & {
              query: { raw?: boolean | undefined; fields?: (string | null) | undefined }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: GetTaxRateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { raw?: boolean | undefined; fields?: (string | null) | undefined }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: BadRequestResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: { raw?: boolean | undefined; fields?: (string | null) | undefined }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: UnauthorizedResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: { raw?: boolean | undefined; fields?: (string | null) | undefined }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: PaymentRequiredResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { id: string } } & {
              query: { raw?: boolean | undefined; fields?: (string | null) | undefined }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: NotFoundResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              query: { raw?: boolean | undefined; fields?: (string | null) | undefined }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: UnprocessableResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & {
              query: { raw?: boolean | undefined; fields?: (string | null) | undefined }
            } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            }
            output: UnexpectedErrorResponse
            outputFormat: 'json'
            status: 200
          }
      $patch:
        | {
            input: { param: { id: string } } & { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: TaxRate }
            output: UpdateTaxRateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: TaxRate }
            output: BadRequestResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: TaxRate }
            output: UnauthorizedResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: TaxRate }
            output: PaymentRequiredResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { param: { id: string } } & { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: TaxRate }
            output: NotFoundResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: TaxRate }
            output: UnprocessableResponse
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { query: { raw?: boolean | undefined } } & {
              header: {
                'x-apideck-consumer-id': string
                'x-apideck-app-id': string
                'x-apideck-service-id'?: string | undefined
              }
            } & { json: TaxRate }
            output: UnexpectedErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  },
  '/'
>
export default routes
