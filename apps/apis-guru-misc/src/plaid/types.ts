type AccessToken = string
type APIClientID = string
type MinLastUpdatedDatetime = string
type AccountsBalanceGetRequestOptions = {
  account_ids?: string[] | undefined
  min_last_updated_datetime?: MinLastUpdatedDatetime | undefined
}
type APISecret = string
type AccountsBalanceGetRequest = {
  access_token: AccessToken
  client_id?: APIClientID | undefined
  options?: AccountsBalanceGetRequestOptions | undefined
  secret?: APISecret | undefined
}
type AccountBalance = {
  available: number | null
  current: number | null
  iso_currency_code: string | null
  last_updated_datetime?: (string | null) | undefined
  limit: number | null
  unofficial_currency_code: string | null
}
type AccountSubtype =
  | '401a'
  | '401k'
  | '403B'
  | '457b'
  | '529'
  | 'brokerage'
  | 'cash isa'
  | 'crypto exchange'
  | 'education savings account'
  | 'ebt'
  | 'fixed annuity'
  | 'gic'
  | 'health reimbursement arrangement'
  | 'hsa'
  | 'isa'
  | 'ira'
  | 'lif'
  | 'life insurance'
  | 'lira'
  | 'lrif'
  | 'lrsp'
  | 'non-custodial wallet'
  | 'non-taxable brokerage account'
  | 'other'
  | 'other insurance'
  | 'other annuity'
  | 'prif'
  | 'rdsp'
  | 'resp'
  | 'rlif'
  | 'rrif'
  | 'pension'
  | 'profit sharing plan'
  | 'retirement'
  | 'roth'
  | 'roth 401k'
  | 'rrsp'
  | 'sep ira'
  | 'simple ira'
  | 'sipp'
  | 'stock plan'
  | 'thrift savings plan'
  | 'tfsa'
  | 'trust'
  | 'ugma'
  | 'utma'
  | 'variable annuity'
  | 'credit card'
  | 'paypal'
  | 'cd'
  | 'checking'
  | 'savings'
  | 'money market'
  | 'prepaid'
  | 'auto'
  | 'business'
  | 'commercial'
  | 'construction'
  | 'consumer'
  | 'home equity'
  | 'loan'
  | 'mortgage'
  | 'overdraft'
  | 'line of credit'
  | 'student'
  | 'cash management'
  | 'keogh'
  | 'mutual fund'
  | 'recurring'
  | 'rewards'
  | 'safe deposit'
  | 'sarsep'
  | 'payroll'
  | null
type AccountType = 'investment' | 'credit' | 'depository' | 'loan' | 'brokerage' | 'other'
type AccountBase = {
  account_id: string
  balances: AccountBalance
  mask: string | null
  name: string
  official_name: string | null
  persistent_account_id?: string | undefined
  subtype: AccountSubtype
  type: AccountType
  verification_status?:
    | 'automatically_verified'
    | 'pending_automatic_verification'
    | 'pending_manual_verification'
    | 'manually_verified'
    | 'verification_expired'
    | 'verification_failed'
    | undefined
}
type Products =
  | 'assets'
  | 'auth'
  | 'balance'
  | 'identity'
  | 'investments'
  | 'liabilities'
  | 'payment_initiation'
  | 'identity_verification'
  | 'transactions'
  | 'credit_details'
  | 'income'
  | 'income_verification'
  | 'deposit_switch'
  | 'standing_orders'
  | 'transfer'
  | 'employment'
  | 'recurring_transactions'
type PlaidErrorType =
  | 'INVALID_REQUEST'
  | 'INVALID_RESULT'
  | 'INVALID_INPUT'
  | 'INSTITUTION_ERROR'
  | 'RATE_LIMIT_EXCEEDED'
  | 'API_ERROR'
  | 'ITEM_ERROR'
  | 'ASSET_REPORT_ERROR'
  | 'RECAPTCHA_ERROR'
  | 'OAUTH_ERROR'
  | 'PAYMENT_ERROR'
  | 'BANK_TRANSFER_ERROR'
  | 'INCOME_VERIFICATION_ERROR'
  | 'MICRODEPOSITS_ERROR'
type PlaidError = {
  causes?: { [x: string]: unknown }[] | undefined
  display_message: string | null
  documentation_url?: string | undefined
  error_code: string
  error_message: string
  error_type: PlaidErrorType
  request_id?: string | undefined
  status?: (number | null) | undefined
  suggested_action?: (string | null) | undefined
} | null
type Item = {
  available_products: Products[]
  billed_products: Products[]
  consent_expiration_time: string | null
  consented_products?: Products[] | undefined
  error: PlaidError
  institution_id?: (string | null) | undefined
  item_id: string
  products?: Products[] | undefined
  update_type: 'background' | 'user_present_required'
  webhook: string | null
}
type RequestID = string
type AccountsGetResponse = { accounts: AccountBase[]; item: Item; request_id: RequestID }
type AccountsGetRequestOptions = { account_ids?: string[] | undefined }
type AccountsGetRequest = {
  access_token: AccessToken
  client_id?: APIClientID | undefined
  options?: AccountsGetRequestOptions | undefined
  secret?: APISecret | undefined
}
type ApplicationID = string
type ApplicationGetRequest = {
  application_id: ApplicationID
  client_id: APIClientID
  secret: APISecret
}
type Application = {
  application_id: ApplicationID
  application_url: string | null
  city: string | null
  company_legal_name: string | null
  country_code: string | null
  display_name: string | null
  join_date: string
  logo_url: string | null
  name: string
  postal_code: string | null
  reason_for_access: string | null
  region: string | null
  use_case: string | null
}
type ApplicationGetResponse = { application: Application; request_id: RequestID }
type AssetReportToken = string
type AssetReportAuditCopyCreateRequest = {
  asset_report_token: AssetReportToken
  auditor_id?: string | undefined
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
}
type AssetReportAuditCopyCreateResponse = { audit_copy_token: string; request_id: RequestID }
type AssetReportAuditCopyGetRequest = {
  audit_copy_token: string
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
}
type AssetReportId = string
type HistoricalBalance = {
  current: number
  date: string
  iso_currency_code: string | null
  unofficial_currency_code: string | null
}
type AddressData = {
  city: string | null
  country: string | null
  postal_code: string | null
  region: string | null
  street: string
}
type Address = { data: AddressData; primary?: boolean | undefined }
type Email = { data: string; primary: boolean; type: 'primary' | 'secondary' | 'other' }
type PhoneNumber = {
  data: string
  primary: boolean
  type: 'home' | 'work' | 'office' | 'mobile' | 'mobile1' | 'other'
}
type Owner = {
  addresses: Address[]
  emails: Email[]
  names: string[]
  phone_numbers: PhoneNumber[]
}
type OwnershipType = null | 'individual' | 'joint' | 'association' | 'trust'
type Location = {
  address: string | null
  city: string | null
  country: string | null
  lat: number | null
  lon: number | null
  postal_code: string | null
  region: string | null
  store_number: string | null
}
type PaymentMeta = {
  by_order_of: string | null
  payee: string | null
  payer: string | null
  payment_method: string | null
  payment_processor: string | null
  ppd_id: string | null
  reason: string | null
  reference_number: string | null
}
type CreditCategory = { detailed: string; primary: string } | null
type AssetReportTransaction = {
  account_id: string
  account_owner?: (string | null) | undefined
  amount: number
  category?: (string[] | null) | undefined
  category_id?: (string | null) | undefined
  check_number?: (string | null) | undefined
  date: string
  iso_currency_code: string | null
  location?: Location | undefined
  logo_url?: (string | null) | undefined
  merchant_name?: (string | null) | undefined
  name?: string | undefined
  original_description?: (string | null) | undefined
  payment_meta?: PaymentMeta | undefined
  pending: boolean
  pending_transaction_id?: (string | null) | undefined
  transaction_id: string
  transaction_type?: 'digital' | 'place' | 'special' | 'unresolved' | undefined
  unofficial_currency_code: string | null
  website?: (string | null) | undefined
  credit_category?: CreditCategory | undefined
  date_transacted?: (string | null) | undefined
}
type AccountAssets = {
  account_id: string
  balances: AccountBalance
  mask: string | null
  name: string
  official_name: string | null
  persistent_account_id?: string | undefined
  subtype: AccountSubtype
  type: AccountType
  verification_status?:
    | 'automatically_verified'
    | 'pending_automatic_verification'
    | 'pending_manual_verification'
    | 'manually_verified'
    | 'verification_expired'
    | 'verification_failed'
    | undefined
  days_available?: number | undefined
  historical_balances?: HistoricalBalance[] | undefined
  owners?: Owner[] | undefined
  ownership_type?: OwnershipType | undefined
  transactions?: AssetReportTransaction[] | undefined
}
type ItemId = string
type AssetReportItem = {
  accounts: AccountAssets[]
  date_last_updated: string
  institution_id: string
  institution_name: string
  item_id: ItemId
}
type AssetReportUser = {
  client_user_id?: (string | null) | undefined
  email?: (string | null) | undefined
  first_name?: (string | null) | undefined
  last_name?: (string | null) | undefined
  middle_name?: (string | null) | undefined
  phone_number?: (string | null) | undefined
  ssn?: (string | null) | undefined
}
type AssetReport = {
  asset_report_id: AssetReportId
  client_report_id: string | null
  date_generated: string
  days_requested: number
  items: AssetReportItem[]
  user: AssetReportUser
}
type Cause = {
  causes?: { [x: string]: unknown }[] | undefined
  display_message: string | null
  documentation_url?: string | undefined
  error_code: string
  error_message: string
  error_type: PlaidErrorType
  request_id?: string | undefined
  status?: (number | null) | undefined
  suggested_action?: (string | null) | undefined
  item_id?: ItemId | undefined
}
type Warning = { cause: Cause; warning_code: 'OWNERS_UNAVAILABLE'; warning_type: string }
type AssetReportGetResponse = { report: AssetReport; request_id: RequestID; warnings: Warning[] }
type AssetReportAuditCopyRemoveRequest = {
  audit_copy_token: string
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
}
type AssetReportAuditCopyRemoveResponse = { removed: boolean; request_id: RequestID }
type AssetReportAddOns = 'investments' | 'fast_assets'
type AssetReportCreateRequestOptions = {
  add_ons?: AssetReportAddOns[] | undefined
  client_report_id?: (string | null) | undefined
  include_fast_report?: (boolean | null) | undefined
  products?: string[] | undefined
  user?: AssetReportUser | undefined
  webhook?: (string | null) | undefined
}
type FreddieReportType = 'VERIFICATION_OF_EMPLOYMENT'
type AssetReportCreateRequest = {
  access_tokens: AccessToken[]
  client_id?: APIClientID | undefined
  days_requested: number
  options?: AssetReportCreateRequestOptions | undefined
  report_type?: FreddieReportType | undefined
  secret?: APISecret | undefined
}
type AssetReportCreateResponse = {
  asset_report_id: AssetReportId
  asset_report_token: AssetReportToken
  request_id: RequestID
}
type AssetReportFilterRequest = {
  account_ids_to_exclude: string[]
  asset_report_token: AssetReportToken
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
}
type AssetReportFilterResponse = {
  asset_report_id: AssetReportId
  asset_report_token: AssetReportToken
  request_id: RequestID
}
type AssetReportGetRequestOptions = { days_to_include?: (number | null) | undefined }
type AssetReportGetRequest = {
  asset_report_token: AssetReportToken
  client_id?: APIClientID | undefined
  fast_report?: boolean | undefined
  include_insights?: boolean | undefined
  options?: AssetReportGetRequestOptions | undefined
  secret?: APISecret | undefined
}
type AssetReportPDFGetRequestOptions = { days_to_include?: (number | null) | undefined }
type AssetReportPDFGetRequest = {
  asset_report_token: AssetReportToken
  client_id?: APIClientID | undefined
  options?: AssetReportPDFGetRequestOptions | undefined
  secret?: APISecret | undefined
}
type AssetReportPDFGetResponse = File
type AssetReportRefreshAssetReportToken = string
type AssetReportRefreshRequestOptions = {
  client_report_id?: (string | null) | undefined
  user?: AssetReportUser | undefined
  webhook?: (string | null) | undefined
}
type AssetReportRefreshRequest = {
  asset_report_token: AssetReportRefreshAssetReportToken
  client_id?: APIClientID | undefined
  days_requested?: (number | null) | undefined
  options?: AssetReportRefreshRequestOptions | undefined
  secret?: APISecret | undefined
}
type AssetReportRefreshResponse = {
  asset_report_id: AssetReportId
  asset_report_token: AssetReportToken
  request_id: RequestID
}
type AssetReportRemoveRequest = {
  asset_report_token: AssetReportToken
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
}
type AssetReportRemoveResponse = { removed: boolean; request_id: RequestID }
type AuthGetRequestOptions = { account_ids?: string[] | undefined }
type AuthGetRequest = {
  access_token: AccessToken
  client_id?: APIClientID | undefined
  options?: AuthGetRequestOptions | undefined
  secret?: APISecret | undefined
}
type NumbersACH = {
  account: string
  account_id: string
  can_transfer_in?: (boolean | null) | undefined
  can_transfer_out?: (boolean | null) | undefined
  routing: string
  wire_routing: string | null
}
type NumbersBACS = { account: string; account_id: string; sort_code: string }
type NumbersEFT = { account: string; account_id: string; branch: string; institution: string }
type NumbersInternational = { account_id: string; bic: string; iban: string }
type AuthGetNumbers = {
  ach: NumbersACH[]
  bacs: NumbersBACS[]
  eft: NumbersEFT[]
  international: NumbersInternational[]
}
type AuthGetResponse = {
  accounts: AccountBase[]
  item: Item
  numbers: AuthGetNumbers
  request_id: RequestID
}
type BankTransferBalanceGetRequest = {
  client_id?: APIClientID | undefined
  origination_account_id?: (string | null) | undefined
  secret?: APISecret | undefined
}
type BankTransferBalance = { available: string; transactable: string }
type BankTransferBalanceGetResponse = {
  balance: BankTransferBalance
  origination_account_id: string | null
  request_id: RequestID
}
type BankTransferID = string
type BankTransferCancelRequest = {
  bank_transfer_id: BankTransferID
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
}
type BankTransferCancelResponse = { request_id: RequestID }
type BankTransferAccessToken = string
type ACHClass = 'ccd' | 'ppd' | 'tel' | 'web'
type BankTransferAmount = string
type BankTransferIdempotencyKey = string
type BankTransferMetadata = { [x: string]: string } | null
type BankTransferNetwork = 'ach' | 'same-day-ach' | 'wire'
type BankTransferType = 'debit' | 'credit'
type BankTransferUser = {
  email_address?: (string | null) | undefined
  legal_name: string
  routing_number?: string | undefined
}
type BankTransferCreateRequest = {
  access_token: BankTransferAccessToken
  account_id: string
  ach_class?: ACHClass | undefined
  amount: BankTransferAmount
  client_id?: APIClientID | undefined
  custom_tag?: (string | null) | undefined
  description: string
  idempotency_key: BankTransferIdempotencyKey
  iso_currency_code: string
  metadata?: BankTransferMetadata | undefined
  network: BankTransferNetwork
  origination_account_id?: (string | null) | undefined
  secret?: APISecret | undefined
  type: BankTransferType
  user: BankTransferUser
}
type BankTransferDirection = 'outbound' | 'inbound' | null
type BankTransferFailure = {
  ach_return_code?: (string | null) | undefined
  description?: string | undefined
} | null
type BankTransferStatus = 'pending' | 'posted' | 'cancelled' | 'failed' | 'reversed'
type BankTransfer = {
  account_id: string
  ach_class: ACHClass
  amount: BankTransferAmount
  cancellable: boolean
  created: string
  custom_tag: string | null
  description: string
  direction: BankTransferDirection
  failure_reason: BankTransferFailure
  id: BankTransferID
  iso_currency_code: string
  metadata: BankTransferMetadata
  network: BankTransferNetwork
  origination_account_id: string
  status: BankTransferStatus
  type: BankTransferType
  user: BankTransferUser
}
type BankTransferCreateResponse = { bank_transfer: BankTransfer; request_id: RequestID }
type BankTransferEventListBankTransferType = 'debit' | 'credit' | null
type BankTransferEventListDirection = 'inbound' | 'outbound' | null
type BankTransferEventType = 'pending' | 'cancelled' | 'failed' | 'posted' | 'reversed'
type BankTransferEventListRequest = {
  account_id?: (string | null) | undefined
  bank_transfer_id?: (string | null) | undefined
  bank_transfer_type?: BankTransferEventListBankTransferType | undefined
  client_id?: APIClientID | undefined
  count?: (number | null) | undefined
  direction?: BankTransferEventListDirection | undefined
  end_date?: (string | null) | undefined
  event_types?: BankTransferEventType[] | undefined
  offset?: (number | null) | undefined
  origination_account_id?: (string | null) | undefined
  secret?: APISecret | undefined
  start_date?: (string | null) | undefined
}
type BankTransferEvent = {
  account_id: string
  bank_transfer_amount: string
  bank_transfer_id: BankTransferID
  bank_transfer_iso_currency_code: string
  bank_transfer_type: BankTransferType
  direction: BankTransferDirection
  event_id: number
  event_type: BankTransferEventType
  failure_reason: BankTransferFailure
  origination_account_id: string | null
  timestamp: string
}
type BankTransferEventListResponse = {
  bank_transfer_events: BankTransferEvent[]
  request_id: RequestID
}
type BankTransferEventSyncRequest = {
  after_id: number
  client_id?: APIClientID | undefined
  count?: (number | null) | undefined
  secret?: APISecret | undefined
}
type BankTransferEventSyncResponse = {
  bank_transfer_events: BankTransferEvent[]
  request_id: RequestID
}
type BankTransferGetRequest = {
  bank_transfer_id: BankTransferID
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
}
type BankTransferGetResponse = { bank_transfer: BankTransfer; request_id: RequestID }
type BankTransferListRequest = {
  client_id?: APIClientID | undefined
  count?: number | undefined
  direction?: BankTransferDirection | undefined
  end_date?: (string | null) | undefined
  offset?: number | undefined
  origination_account_id?: (string | null) | undefined
  secret?: APISecret | undefined
  start_date?: (string | null) | undefined
}
type BankTransferListResponse = { bank_transfers: BankTransfer[]; request_id: RequestID }
type BankTransferMigrateAccountRequest = {
  account_number: string
  account_type: string
  client_id?: APIClientID | undefined
  routing_number: string
  secret?: APISecret | undefined
  wire_routing_number?: string | undefined
}
type BankTransferMigrateAccountResponse = {
  access_token: string
  account_id: string
  request_id: RequestID
}
type BankTransferSweepGetRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  sweep_id: string
}
type BankTransferSweep = {
  amount: string
  created_at: string
  id: string
  iso_currency_code: string
}
type BankTransferSweepGetResponse = { request_id: RequestID; sweep: BankTransferSweep }
type BankTransferSweepListRequest = {
  client_id?: APIClientID | undefined
  count?: (number | null) | undefined
  end_time?: (string | null) | undefined
  origination_account_id?: (string | null) | undefined
  secret?: APISecret | undefined
  start_time?: (string | null) | undefined
}
type BankTransferSweepListResponse = { request_id: RequestID; sweeps: BankTransferSweep[] }
type UserToken = string
type CreditBankEmploymentGetRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  user_token: UserToken
}
type DepositoryAccountSubtype =
  | 'checking'
  | 'savings'
  | 'hsa'
  | 'cd'
  | 'money market'
  | 'paypal'
  | 'prepaid'
  | 'cash management'
  | 'ebt'
  | 'all'
type CreditBankIncomeAccountType = 'depository'
type CreditBankIncomeAccount = {
  account_id: string
  mask: string | null
  name: string
  official_name: string | null
  owners: Owner[]
  subtype: DepositoryAccountSubtype
  type: CreditBankIncomeAccountType
}
type CreditBankEmployer = { name: string }
type CreditBankEmployment = {
  account_id: string
  bank_employment_id: string
  earliest_deposit_date: string
  employer: CreditBankEmployer
  latest_deposit_date: string
}
type CreditBankEmploymentItem = {
  bank_employment_accounts: CreditBankIncomeAccount[]
  bank_employments: CreditBankEmployment[]
  institution_id: string
  institution_name: string
  item_id: string
  last_updated_time: string
}
type CreditBankIncomeErrorType =
  | 'INTERNAL_SERVER_ERROR'
  | 'INSUFFICIENT_CREDENTIALS'
  | 'ITEM_LOCKED'
  | 'USER_SETUP_REQUIRED'
  | 'COUNTRY_NOT_SUPPORTED'
  | 'INSTITUTION_DOWN'
  | 'INSTITUTION_NO_LONGER_SUPPORTED'
  | 'INSTITUTION_NOT_RESPONDING'
  | 'INVALID_CREDENTIALS'
  | 'INVALID_MFA'
  | 'INVALID_SEND_METHOD'
  | 'ITEM_LOGIN_REQUIRED'
  | 'MFA_NOT_SUPPORTED'
  | 'NO_ACCOUNTS'
  | 'ITEM_NOT_SUPPORTED'
  | 'ACCESS_NOT_GRANTED'
type CreditBankIncomeCause = {
  display_message: string
  error_code: string
  error_message: string
  error_type: CreditBankIncomeErrorType
  item_id: string
}
type CreditBankIncomeWarningCode =
  | 'IDENTITY_UNAVAILABLE'
  | 'TRANSACTIONS_UNAVAILABLE'
  | 'ITEM_UNAPPROVED'
  | 'REPORT_DELETED'
  | 'DATA_UNAVAILABLE'
type CreditBankEmploymentWarningType = 'BANK_EMPLOYMENT_WARNING'
type CreditBankEmploymentWarning = {
  cause: CreditBankIncomeCause
  warning_code: CreditBankIncomeWarningCode
  warning_type: CreditBankEmploymentWarningType
}
type CreditBankEmploymentReport = {
  bank_employment_report_id: string
  days_requested: number
  generated_time: string
  items: CreditBankEmploymentItem[]
  warnings: CreditBankEmploymentWarning[]
}
type CreditBankEmploymentGetResponse = {
  bank_employment_reports: CreditBankEmploymentReport[]
  request_id: RequestID
}
type TransactionsRuleField = 'TRANSACTION_ID' | 'NAME'
type TransactionsRuleType = 'EXACT_MATCH' | 'SUBSTRING_MATCH'
type TransactionsRuleDetails = {
  field: TransactionsRuleField
  query: string
  type: TransactionsRuleType
}
type TransactionsRulesCreateRequest = {
  access_token: AccessToken
  client_id?: APIClientID | undefined
  personal_finance_category: string
  rule_details: TransactionsRuleDetails
  secret?: APISecret | undefined
}
type TransactionsCategoryRule = {
  created_at?: string | undefined
  id?: string | undefined
  item_id?: string | undefined
  personal_finance_category?: string | undefined
  rule_details?: TransactionsRuleDetails | undefined
}
type TransactionsRulesCreateResponse = { request_id: RequestID; rule: TransactionsCategoryRule }
type TransactionsRulesListRequest = {
  access_token: AccessToken
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
}
type TransactionsRulesListResponse = { request_id: RequestID; rules: TransactionsCategoryRule[] }
type TransactionsRulesRemoveRequest = {
  access_token: AccessToken
  client_id?: APIClientID | undefined
  rule_id: string
  secret?: APISecret | undefined
}
type TransactionsRulesRemoveResponse = { request_id: RequestID }
type ClientProvidedRawTransaction = {
  amount: number
  description: string
  id: string
  iso_currency_code: string
}
type TransactionsEnhanceGetRequest = {
  account_type: string
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  transactions: ClientProvidedRawTransaction[]
}
type CounterpartyType =
  | 'merchant'
  | 'financial_institution'
  | 'payment_app'
  | 'marketplace'
  | 'payment_terminal'
type Counterparty = {
  entity_id?: (string | null) | undefined
  logo_url: string | null
  name: string
  type: CounterpartyType
  website: string | null
}
type PaymentChannel = 'online' | 'in store' | 'other'
type PersonalFinanceCategory = { detailed: string; primary: string } | null
type Enhancements = {
  category: string[]
  category_id: string | null
  check_number?: (string | null) | undefined
  counterparties?: Counterparty[] | undefined
  location: Location
  logo_url?: (string | null) | undefined
  merchant_name?: (string | null) | undefined
  payment_channel: PaymentChannel
  personal_finance_category?: PersonalFinanceCategory | undefined
  personal_finance_category_icon_url?: string | undefined
  website?: (string | null) | undefined
}
type ClientProvidedEnhancedTransaction = {
  amount: number
  description: string
  enhancements: Enhancements
  id: string
  iso_currency_code: string
}
type TransactionsEnhanceGetResponse = { enhanced_transactions: ClientProvidedEnhancedTransaction[] }
type CategoriesGetRequest = { [x: string]: unknown }
type Category = { category_id: string; group: string; hierarchy: string[] }
type CategoriesGetResponse = { categories: Category[]; request_id: RequestID }
type AssetReportFreddieGetRequest = {
  audit_copy_token: string
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
}
type LoanIdentifierType = 'LenderLoan' | 'UniversalLoan'
type LoanIdentifier = { LoanIdentifier: string | null; LoanIdentifierType: LoanIdentifierType }
type LoanIdentifiers = { LOAN_IDENTIFIER: LoanIdentifier }
type Loan = { LOAN_IDENTIFIERS: LoanIdentifiers }
type Loans = { LOAN: Loan }
type IndividualName = { FirstName: string; LastName: string }
type PartyIndividual = { NAME: IndividualName }
type PartyRoleType = 'Borrower'
type RoleDetail = { PartyRoleType: PartyRoleType }
type Role = { ROLE_DETAIL: RoleDetail }
type Roles = { ROLE: Role }
type TaxpayerIdentifierType = 'IndividualTaxpayerIdentificationNumber' | 'SocialSecurityNumber'
type TaxpayerIdentifier = {
  TaxpayerIdentifierType: TaxpayerIdentifierType
  TaxpayerIdentifierValue: string | null
}
type TaxpayerIdentifiers = { TAXPAYER_IDENTIFIER: TaxpayerIdentifier }
type Party = {
  INDIVIDUAL: PartyIndividual
  ROLES: Roles
  TAXPAYER_IDENTIFIERS: TaxpayerIdentifiers
}
type Parties = { PARTY: Party[] }
type Status = { StatusCode: string | null; StatusDescription: string | null }
type Statuses = { STATUS: Status }
type ReportingInformation = { ReportingInformationIdentifier: string }
type ServiceProductFulfillmentIdentifier = 'VOA' | 'VOETRANSACTIONS'
type ServiceProductFulfillmentDetail = {
  ServiceProductFulfillmentIdentifier: ServiceProductFulfillmentIdentifier
  VendorOrderIdentifier: string | null
}
type ServiceProductFulfillment = {
  SERVICE_PRODUCT_FULFILLMENT_DETAIL: ServiceProductFulfillmentDetail
}
type AssetType = 'CheckingAccount' | 'SavingsAccount' | 'Investment' | 'MoneyMarketFund' | 'Other'
type AssetDetail = {
  AssetAccountIdentifier: string
  AssetAsOfDate: string
  AssetAvailableBalanceAmount: number
  AssetCurrentBalanceAmount: number
  AssetDaysRequestedCount: number
  AssetDescription: string | null
  AssetOwnershipType: string | null
  AssetType: AssetType
  AssetTypeAdditionalDescription: string | null
  AssetUniqueIdentifier: string
}
type AssetHolderName = { FullName: string }
type AssetHolder = { NAME: AssetHolderName }
type AssetOwner = { AssetOwnerText: string | null }
type AssetOwners = { ASSET_OWNER: AssetOwner[] }
type AssetTransactionDescription = { AssetTransactionDescription: string }
type AssetTransactionCategoryType =
  | 'ATMFee'
  | 'Advertising'
  | 'AirTravel'
  | 'AlcoholBars'
  | 'Allowance'
  | 'Amusement'
  | 'Arts'
  | 'AutoTransport'
  | 'AutoInsurance'
  | 'AutoPayment'
  | 'BabySupplies'
  | 'BabysitterDaycare'
  | 'BankFee'
  | 'BillsUtilities'
  | 'Bonus'
  | 'BooksSupplies'
  | 'Business Services'
  | 'Buy'
  | 'CashATM'
  | 'Charity'
  | 'Check'
  | 'ChildSupport'
  | 'Clothing'
  | 'CoffeeShops'
  | 'CreditCardPayment'
  | 'Dentist'
  | 'Doctor'
  | 'Education'
  | 'ElectronicsSoftware'
  | 'Entertainment'
  | 'Eyecare'
  | 'FastFood'
  | 'FederalTax'
  | 'FeesCharges'
  | 'FinanceCharge'
  | 'Financial'
  | 'FinancialAdvisor'
  | 'FoodDining'
  | 'Furnishings'
  | 'GasFuel'
  | 'GiftsDonations'
  | 'Groceries'
  | 'Gym'
  | 'Hair'
  | 'HealthFitness'
  | 'HealthInsurance'
  | 'Hobbies'
  | 'Home'
  | 'HomeImprovement'
  | 'HomeInsurance'
  | 'HomePhone'
  | 'HomeServices'
  | 'HomeSupplies'
  | 'Hotel'
  | 'Income'
  | 'InterestIncome'
  | 'Internet'
  | 'Investments'
  | 'Kids'
  | 'KidsActivities'
  | 'LateFee'
  | 'Laundry'
  | 'LawnGarden'
  | 'Legal'
  | 'LifeInsurance'
  | 'LoanInsurance'
  | 'LoanPayment'
  | 'Loans'
  | 'MobilePhone'
  | 'MortgageRent'
  | 'MoviesDVDs'
  | 'Music'
  | 'NewspapersMagazines'
  | 'OfficeSupplies'
  | 'Parking'
  | 'Paycheck'
  | 'PersonalCare'
  | 'PetFoodSupplies'
  | 'PetGrooming'
  | 'Pets'
  | 'Pharmacy'
  | 'Printing'
  | 'Property Tax'
  | 'Public Transportation'
  | 'Reimbursement'
  | 'RentalCarTaxi'
  | 'Restaurants'
  | 'SalesTax'
  | 'ServiceParts'
  | 'ServiceFee'
  | 'Shipping'
  | 'Shopping'
  | 'SpaMassage'
  | 'SportingGoods'
  | 'Sports'
  | 'StateTax'
  | 'Student Loan'
  | 'Taxes'
  | 'Television'
  | 'Toys'
  | 'Transfer'
  | 'Travel'
  | 'Tuition'
  | 'Uncategorized'
  | 'Utilities'
  | 'Vacation'
  | 'Veterinary'
type AssetTransactionType = 'Credit' | 'Debit'
type AssetTransactionDetail = {
  AssetTransactionAmount: number
  AssetTransactionCategoryType: AssetTransactionCategoryType
  AssetTransactionDate: string
  AssetTransactionPaidByName: string | null
  AssetTransactionPostDate: string
  AssetTransactionType: AssetTransactionType
  AssetTransactionTypeAdditionalDescription: string | null
  AssetTransactionUniqueIdentifier: string
  FinancialInstitutionTransactionIdentifier: string | null
}
type AssetTransaction = {
  ASSET_TRANSACTION_DESCRIPTON: AssetTransactionDescription[]
  ASSET_TRANSACTION_DETAIL: AssetTransactionDetail
}
type AssetTransactions = { ASSET_TRANSACTION: AssetTransaction[] }
type ValidationSource = {
  ValidationSourceName: string | null
  ValidationSourceReferenceIdentifier: string | null
}
type ValidationSources = { VALIDATION_SOURCE: ValidationSource[] }
type Asset = {
  ASSET_DETAIL: AssetDetail
  ASSET_HOLDER: AssetHolder
  ASSET_OWNERS: AssetOwners
  ASSET_TRANSACTIONS: AssetTransactions
  VALIDATION_SOURCES: ValidationSources
}
type Assets = { ASSET: Asset[] }
type VerificationOfAssetResponse = { ASSETS: Assets }
type VerificationOfAsset = {
  REPORTING_INFORMATION: ReportingInformation
  SERVICE_PRODUCT_FULFILLMENT: ServiceProductFulfillment
  VERIFICATION_OF_ASSET_RESPONSE: VerificationOfAssetResponse
}
type Service = { STATUSES: Statuses; VERIFICATION_OF_ASSET: VerificationOfAsset }
type Services = { SERVICE: Service }
type AssetReportFreddie = { LOANS: Loans; PARTIES: Parties; SERVICES: Services }
type AssetReportFreddieGetResponse = {
  DEAL: AssetReportFreddie
  SchemaVersion: number
  request_id: RequestID
}
type CreditAuditCopyTokenCreateRequest = {
  client_id?: APIClientID | undefined
  report_tokens: string[]
  secret?: APISecret | undefined
}
type CreditAuditCopyTokenCreateResponse = { audit_copy_token: string; request_id: RequestID }
type CreditAuditCopyTokenRemoveRequest = {
  audit_copy_token: string
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
}
type CreditAuditCopyTokenRemoveResponse = { removed: boolean; request_id: RequestID }
type CreditAuditCopyTokenUpdateRequest = {
  audit_copy_token: string
  client_id?: APIClientID | undefined
  report_tokens: AssetReportToken[]
  secret?: APISecret | undefined
}
type CreditAuditCopyTokenUpdateResponse = { request_id: RequestID; updated: boolean }
type CreditBankIncomeGetRequestOptions = { count?: number | undefined }
type CreditBankIncomeGetRequest = {
  client_id?: APIClientID | undefined
  options?: CreditBankIncomeGetRequestOptions | undefined
  secret?: APISecret | undefined
  user_token?: UserToken | undefined
}
type CreditIsoCurrencyCode = string | null
type CreditUnofficialCurrencyCode = string | null
type CreditAmountWithCurrency = {
  amount?: number | undefined
  iso_currency_code?: CreditIsoCurrencyCode | undefined
  unofficial_currency_code?: CreditUnofficialCurrencyCode | undefined
}
type CreditBankIncomeTransaction = {
  amount?: number | undefined
  check_number?: (string | null) | undefined
  date?: string | undefined
  iso_currency_code?: CreditIsoCurrencyCode | undefined
  name?: string | undefined
  original_description?: (string | null) | undefined
  pending?: boolean | undefined
  transaction_id?: string | undefined
  unofficial_currency_code?: CreditUnofficialCurrencyCode | undefined
}
type CreditBankIncomeHistoricalSummary = {
  end_date?: string | undefined
  iso_currency_code?: (string | null) | undefined
  start_date?: string | undefined
  total_amount?: number | undefined
  total_amounts?: CreditAmountWithCurrency[] | undefined
  transactions?: CreditBankIncomeTransaction[] | undefined
  unofficial_currency_code?: (string | null) | undefined
}
type CreditBankIncomeSummary = {
  end_date?: string | undefined
  historical_summary?: CreditBankIncomeHistoricalSummary[] | undefined
  income_categories_count?: number | undefined
  income_sources_count?: number | undefined
  income_transactions_count?: number | undefined
  iso_currency_code?: (string | null) | undefined
  start_date?: string | undefined
  total_amount?: number | undefined
  total_amounts?: CreditAmountWithCurrency[] | undefined
  unofficial_currency_code?: (string | null) | undefined
}
type CreditBankIncomeCategory =
  | 'SALARY'
  | 'UNEMPLOYMENT'
  | 'CASH'
  | 'GIG_ECONOMY'
  | 'RENTAL'
  | 'CHILD_SUPPORT'
  | 'MILITARY'
  | 'RETIREMENT'
  | 'LONG_TERM_DISABILITY'
  | 'BANK_INTEREST'
  | 'CASH_DEPOSIT'
  | 'TRANSFER_FROM_APPLICATION'
  | 'TAX_REFUND'
  | 'OTHER'
type CreditBankIncomePayFrequency = 'WEEKLY' | 'BIWEEKLY' | 'SEMI_MONTHLY' | 'MONTHLY' | 'UNKNOWN'
type CreditBankIncomeSource = {
  account_id?: string | undefined
  end_date?: string | undefined
  historical_summary?: CreditBankIncomeHistoricalSummary[] | undefined
  income_category?: CreditBankIncomeCategory | undefined
  income_description?: string | undefined
  income_source_id?: string | undefined
  pay_frequency?: CreditBankIncomePayFrequency | undefined
  start_date?: string | undefined
  total_amount?: number | undefined
  transaction_count?: number | undefined
}
type CreditBankIncomeItem = {
  bank_income_accounts?: CreditBankIncomeAccount[] | undefined
  bank_income_sources?: CreditBankIncomeSource[] | undefined
  institution_id?: string | undefined
  institution_name?: string | undefined
  item_id?: string | undefined
  last_updated_time?: string | undefined
}
type CreditBankIncomeWarningType = 'BANK_INCOME_WARNING'
type CreditBankIncomeWarning = {
  cause?: CreditBankIncomeCause | undefined
  warning_code?: CreditBankIncomeWarningCode | undefined
  warning_type?: CreditBankIncomeWarningType | undefined
}
type CreditBankIncome = {
  bank_income_id?: string | undefined
  bank_income_summary?: CreditBankIncomeSummary | undefined
  days_requested?: number | undefined
  generated_time?: string | undefined
  items?: CreditBankIncomeItem[] | undefined
  warnings?: CreditBankIncomeWarning[] | undefined
}
type CreditBankIncomeGetResponse = {
  bank_income?: CreditBankIncome[] | undefined
  request_id: RequestID
}
type CreditBankIncomePDFGetRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  user_token: UserToken
}
type CreditBankIncomePDFGetResponse = File
type CreditBankIncomeRefreshRequestOptions = {
  days_requested?: number | undefined
  webhook?: string | undefined
}
type CreditBankIncomeRefreshRequest = {
  client_id?: APIClientID | undefined
  options?: CreditBankIncomeRefreshRequestOptions | undefined
  secret?: APISecret | undefined
  user_token: UserToken
}
type CreditBankIncomeRefreshResponse = { request_id: RequestID }
type CreditEmploymentGetRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  user_token: UserToken
}
type CreditEmploymentEmployeeType = string | null
type CreditEmployerVerification = { name: string | null }
type CreditPlatformIds = {
  employee_id: string | null
  payroll_id: string | null
  position_id: string | null
}
type CreditEmploymentVerificationStatus = string | null
type CreditEmploymentVerification = {
  account_id: string | null
  employee_type: CreditEmploymentEmployeeType
  employer: CreditEmployerVerification
  end_date: string | null
  last_paystub_date: string | null
  platform_ids: CreditPlatformIds
  start_date: string | null
  status: CreditEmploymentVerificationStatus
  title: string | null
}
type CreditEmploymentItem = {
  employment_report_token?: string | undefined
  employments: CreditEmploymentVerification[]
  item_id: ItemId
}
type CreditEmploymentGetResponse = { items: CreditEmploymentItem[]; request_id: RequestID }
type CreditFreddieMacReportsGetRequest = {
  audit_copy_token: string
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
}
type CreditFreddieMacLoanIdentifiersVOA_2_4 = { LOAN_IDENTIFIER: LoanIdentifier[] }
type CreditFreddieMacLoanVOA_2_4 = {
  LOAN_IDENTIFIERS: CreditFreddieMacLoanIdentifiersVOA_2_4
  LoanRoleType: string
}
type CreditFreddieMacLoansVOA_2_4 = { LOAN: CreditFreddieMacLoanVOA_2_4 }
type CreditFreddieMacIndividualNameVOA_2_4 = {
  FirstName: string
  LastName: string
  MiddleName: string
}
type CreditFreddieMacPartyIndividualVOA_2_4 = { NAME: CreditFreddieMacIndividualNameVOA_2_4 }
type CreditFreddieMacPartyVOA_2_4 = {
  INDIVIDUAL: CreditFreddieMacPartyIndividualVOA_2_4
  ROLES: Roles
  TAXPAYER_IDENTIFIERS: TaxpayerIdentifiers
}
type CreditFreddieMacPartiesVOA_2_4 = { PARTY: CreditFreddieMacPartyVOA_2_4[] }
type CreditFreddieMacReportingInformationVOA_2_4 = {
  ReportDateTime?: string | undefined
  ReportIdentifierType?: string | undefined
  ReportingInformationIdentifier: string
}
type CreditFreddieMacAssetTransactionVOA_2_4 = {
  ASSET_TRANSACTION_DESCRIPTION: AssetTransactionDescription[]
  ASSET_TRANSACTION_DETAIL: AssetTransactionDetail
}
type CreditFreddieMacAssetTransactionsVOA_2_4 = {
  ASSET_TRANSACTION: CreditFreddieMacAssetTransactionVOA_2_4[]
}
type CreditFreddieMacAssetVOA_2_4 = {
  ASSET_DETAIL: AssetDetail
  ASSET_HOLDER: AssetHolder
  ASSET_OWNERS: AssetOwners
  ASSET_TRANSACTIONS: CreditFreddieMacAssetTransactionsVOA_2_4
  VALIDATION_SOURCES: ValidationSources
}
type CreditFreddieMacAssetsVOA_2_4 = { ASSET: CreditFreddieMacAssetVOA_2_4[] }
type CreditFreddieMacVerificationOfAssetResponseVOA_2_4 = { ASSETS: CreditFreddieMacAssetsVOA_2_4 }
type CreditFreddieMacVerificationOfAssetVOA_2_4 = {
  REPORTING_INFORMATION: CreditFreddieMacReportingInformationVOA_2_4
  SERVICE_PRODUCT_FULFILLMENT: ServiceProductFulfillment
  VERIFICATION_OF_ASSET_RESPONSE: CreditFreddieMacVerificationOfAssetResponseVOA_2_4
}
type CreditFreddieMacServiceVOA_2_4 = {
  STATUSES: Statuses
  VERIFICATION_OF_ASSET: CreditFreddieMacVerificationOfAssetVOA_2_4[]
}
type CreditFreddieMacServicesVOA_2_4 = { SERVICE: CreditFreddieMacServiceVOA_2_4 }
type CreditFreddieMacVerificationOfAssetsDealVOA_2_4 = {
  LOANS: CreditFreddieMacLoansVOA_2_4
  PARTIES: CreditFreddieMacPartiesVOA_2_4
  SERVICES: CreditFreddieMacServicesVOA_2_4
}
type CreditFreddieMacVerificationOfAssetsVOA_2_4 = {
  DEAL: CreditFreddieMacVerificationOfAssetsDealVOA_2_4
  SchemaVersion: number
}
type CreditFreddieMacAssetDetailVOE_2_5 = {
  AssetAccountIdentifier: string
  AssetAsOfDate: string
  AssetDaysRequestedCount: number
  AssetDescription: string | null
  AssetOwnershipType: string | null
  AssetType: AssetType
  AssetTypeAdditionalDescription: string | null
  AssetUniqueIdentifier: string
}
type CreditFreddieMacAssetTransactionDetailVOE_2_5 = {
  AssetTransactionCategoryType: AssetTransactionCategoryType
  AssetTransactionDate: string
  AssetTransactionPaidByName: string | null
  AssetTransactionPaidToName: string | null
  AssetTransactionPostDate: string
  AssetTransactionType: AssetTransactionType
  AssetTransactionTypeAdditionalDescription: string | null
  AssetTransactionUniqueIdentifier: string
  FinancialInstitutionTransactionIdentifier: string | null
}
type CreditFreddieMacAssetTransactionVOE_2_5 = {
  ASSET_TRANSACTION_DESCRIPTION: AssetTransactionDescription[]
  ASSET_TRANSACTION_DETAIL: CreditFreddieMacAssetTransactionDetailVOE_2_5
}
type CreditFreddieMacAssetTransactionsVOE_2_5 = {
  ASSET_TRANSACTION: CreditFreddieMacAssetTransactionVOE_2_5[]
}
type CreditFreddieMacAssetVOE_2_5 = {
  ASSET_DETAIL: CreditFreddieMacAssetDetailVOE_2_5
  ASSET_HOLDER: AssetHolder
  ASSET_OWNERS: AssetOwners
  ASSET_TRANSACTIONS: CreditFreddieMacAssetTransactionsVOE_2_5
}
type CreditFreddieMacAssetsVOE_2_5 = { ASSET: CreditFreddieMacAssetVOE_2_5[] }
type CreditFreddieMacVerificationOfAssetResponseVOE_2_5 = { ASSETS: CreditFreddieMacAssetsVOE_2_5 }
type CreditFreddieMacVerificationOfAssetVOE_2_5 = {
  REPORTING_INFORMATION: CreditFreddieMacReportingInformationVOA_2_4
  SERVICE_PRODUCT_FULFILLMENT: ServiceProductFulfillment
  VERIFICATION_OF_ASSET_RESPONSE: CreditFreddieMacVerificationOfAssetResponseVOE_2_5
}
type CreditFreddieMacServiceVOE_2_5 = {
  STATUSES: Statuses
  VERIFICATION_OF_ASSET: CreditFreddieMacVerificationOfAssetVOE_2_5[]
}
type CreditFreddieMacServicesVOE_2_5 = { SERVICE: CreditFreddieMacServiceVOE_2_5 }
type CreditFreddieVerificationOfEmploymentDealVOE_2_5 = {
  LOANS: CreditFreddieMacLoansVOA_2_4
  PARTIES: CreditFreddieMacPartiesVOA_2_4
  SERVICES: CreditFreddieMacServicesVOE_2_5
}
type CreditFreddieVerificationOfEmploymentVOE_2_5 = {
  DEAL: CreditFreddieVerificationOfEmploymentDealVOE_2_5
  SchemaVersion: number
} | null
type CreditFreddieMacReportsGetResponse = {
  VOA: CreditFreddieMacVerificationOfAssetsVOA_2_4
  VOE?: CreditFreddieVerificationOfEmploymentVOE_2_5 | undefined
  request_id: RequestID
}
type CreditPayrollIncomeGetRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  user_token?: UserToken | undefined
}
type PayrollIncomeRateOfPay = {
  pay_amount?: (number | null) | undefined
  pay_rate?: (string | null) | undefined
}
type PayrollIncomeAccountData = {
  account_id: string | null
  pay_frequency: string | null
  rate_of_pay: PayrollIncomeRateOfPay
} | null
type CreditDocumentType = string | null
type CreditDocumentMetadata = {
  document_type: CreditDocumentType
  download_url: string | null
  name: string
  status: string | null
}
type CreditPayStubAddress = {
  city: string | null
  country: string | null
  postal_code: string | null
  region: string | null
  street: string | null
}
type Credit1099Filer = {
  address?: CreditPayStubAddress | undefined
  name?: (string | null) | undefined
  tin?: (string | null) | undefined
  type?: (string | null) | undefined
}
type Form1099Type = 'FORM_1099_TYPE_UNKNOWN' | 'FORM_1099_TYPE_MISC' | 'FORM_1099_TYPE_K'
type Credit1099Payer = {
  address?: CreditPayStubAddress | undefined
  name?: (string | null) | undefined
  telephone_number?: (string | null) | undefined
  tin?: (string | null) | undefined
}
type Credit1099Recipient = {
  account_number?: (string | null) | undefined
  address?: CreditPayStubAddress | undefined
  facta_filing_requirement?: (string | null) | undefined
  name?: (string | null) | undefined
  second_tin_exists?: (string | null) | undefined
  tin?: (string | null) | undefined
}
type Credit1099 = {
  april_amount?: (number | null) | undefined
  august_amount?: (number | null) | undefined
  card_not_present_transaction?: (number | null) | undefined
  crop_insurance_proceeds?: (number | null) | undefined
  december_amount?: (number | null) | undefined
  document_id: string | null
  document_metadata?: CreditDocumentMetadata | undefined
  excess_golden_parachute_payments?: (number | null) | undefined
  february_amount?: (number | null) | undefined
  federal_income_tax_withheld?: (number | null) | undefined
  filer?: Credit1099Filer | undefined
  fishing_boat_proceeds?: (number | null) | undefined
  form_1099_type?: Form1099Type | undefined
  gross_amount?: (number | null) | undefined
  gross_proceeds_paid_to_an_attorney?: (number | null) | undefined
  january_amount?: (number | null) | undefined
  july_amount?: (number | null) | undefined
  june_amount?: (number | null) | undefined
  march_amount?: (number | null) | undefined
  may_amount?: (number | null) | undefined
  medical_and_healthcare_payments?: (number | null) | undefined
  merchant_category_code?: (string | null) | undefined
  nonemployee_compensation?: (number | null) | undefined
  november_amount?: (number | null) | undefined
  number_of_payment_transactions?: (string | null) | undefined
  october_amount?: (number | null) | undefined
  other_income?: (number | null) | undefined
  payer?: Credit1099Payer | undefined
  payer_made_direct_sales_of_5000_or_more_of_consumer_products_to_buyer?:
    | (string | null)
    | undefined
  payer_state_number?: (string | null) | undefined
  payer_state_number_lower?: (string | null) | undefined
  primary_state?: (string | null) | undefined
  primary_state_id?: (string | null) | undefined
  primary_state_income_tax?: (number | null) | undefined
  pse_name?: (string | null) | undefined
  pse_telephone_number?: (string | null) | undefined
  recipient?: Credit1099Recipient | undefined
  rents?: (number | null) | undefined
  royalties?: (number | null) | undefined
  secondary_state?: (string | null) | undefined
  secondary_state_id?: (string | null) | undefined
  secondary_state_income_tax?: (number | null) | undefined
  section_409a_deferrals?: (number | null) | undefined
  section_409a_income?: (number | null) | undefined
  september_amount?: (number | null) | undefined
  state_income?: (number | null) | undefined
  state_income_lower?: (number | null) | undefined
  state_tax_withheld?: (number | null) | undefined
  state_tax_withheld_lower?: (number | null) | undefined
  substitute_payments_in_lieu_of_dividends_or_interest?: (number | null) | undefined
  tax_year?: (string | null) | undefined
  transactions_reported?: (string | null) | undefined
}
type PayStubDeductionsBreakdown = {
  current_amount: number | null
  description: string | null
  iso_currency_code: string | null
  unofficial_currency_code: string | null
  ytd_amount: number | null
}
type PayStubDeductionsTotal = {
  current_amount: number | null
  iso_currency_code: string | null
  unofficial_currency_code: string | null
  ytd_amount: number | null
}
type CreditPayStubDeductions = {
  breakdown: PayStubDeductionsBreakdown[]
  total: PayStubDeductionsTotal
}
type PayStubEarningsBreakdownCanonicalDescription = string | null
type PayStubEarningsBreakdown = {
  canonical_description: PayStubEarningsBreakdownCanonicalDescription
  current_amount: number | null
  description: string | null
  hours: number | null
  iso_currency_code: string | null
  rate: number | null
  unofficial_currency_code: string | null
  ytd_amount: number | null
}
type PayStubEarningsTotal = {
  current_amount: number | null
  hours: number | null
  iso_currency_code: string | null
  unofficial_currency_code: string | null
  ytd_amount: number | null
}
type CreditPayStubEarnings = { breakdown: PayStubEarningsBreakdown[]; total: PayStubEarningsTotal }
type PayStubTaxpayerID = { id_mask: string | null; id_type: string | null }
type CreditPayStubEmployee = {
  address: CreditPayStubAddress
  marital_status: string | null
  name: string | null
  taxpayer_id: PayStubTaxpayerID
}
type CreditPayStubEmployer = { address: CreditPayStubAddress; name: string | null }
type CreditPayStubNetPay = {
  current_amount: number | null
  description: string | null
  iso_currency_code: string | null
  unofficial_currency_code: string | null
  ytd_amount: number | null
}
type PayStubDistributionBreakdown = {
  account_name: string | null
  bank_name: string | null
  current_amount: number | null
  iso_currency_code: string | null
  mask: string | null
  type: string | null
  unofficial_currency_code: string | null
}
type CreditPayStubPayBasisType = 'SALARY' | 'HOURLY' | 'COMMISSION'
type PayStubPayPeriodDetails = {
  distribution_breakdown: PayStubDistributionBreakdown[]
  end_date: string | null
  gross_earnings: number | null
  iso_currency_code: string | null
  pay_amount: number | null
  pay_basis?: CreditPayStubPayBasisType | undefined
  pay_date: string | null
  pay_frequency: string | null
  start_date: string | null
  unofficial_currency_code: string | null
}
type CreditPayStub = {
  deductions: CreditPayStubDeductions
  document_id: string | null
  document_metadata: CreditDocumentMetadata
  earnings: CreditPayStubEarnings
  employee: CreditPayStubEmployee
  employer: CreditPayStubEmployer
  net_pay: CreditPayStubNetPay
  pay_period_details: PayStubPayPeriodDetails
}
type W2Box12 = { amount?: (string | null) | undefined; code?: (string | null) | undefined }
type W2StateAndLocalWages = {
  employer_state_id_number?: (string | null) | undefined
  local_income_tax?: (string | null) | undefined
  local_wages_tips?: (string | null) | undefined
  locality_name?: (string | null) | undefined
  state?: (string | null) | undefined
  state_income_tax?: (string | null) | undefined
  state_wages_tips?: (string | null) | undefined
}
type CreditW2 = {
  allocated_tips: string | null
  box_12: W2Box12[]
  box_9: string | null
  dependent_care_benefits: string | null
  document_id: string
  document_metadata: CreditDocumentMetadata
  employee: CreditPayStubEmployee
  employer: CreditPayStubEmployer
  employer_id_number: string | null
  federal_income_tax_withheld: string | null
  medicare_tax_withheld: string | null
  medicare_wages_and_tips: string | null
  nonqualified_plans: string | null
  other: string | null
  retirement_plan: string | null
  social_security_tax_withheld: string | null
  social_security_tips: string | null
  social_security_wages: string | null
  state_and_local_wages: W2StateAndLocalWages[]
  statutory_employee: string | null
  tax_year: string | null
  third_party_sick_pay: string | null
  wages_tips_other_comp: string | null
}
type PayrollIncomeObject = {
  account_id: string | null
  form1099s: Credit1099[]
  pay_stubs: CreditPayStub[]
  w2s: CreditW2[]
}
type PayrollItemStatus = { processing_status?: (string | null) | undefined } | null
type PayrollItem = {
  accounts: PayrollIncomeAccountData[]
  institution_id: string
  institution_name: string
  item_id: ItemId
  payroll_income: PayrollIncomeObject[]
  status: PayrollItemStatus
  updated_at: string | null
}
type CreditPayrollIncomeGetResponse = {
  error?: PlaidError | undefined
  items: PayrollItem[]
  request_id: RequestID
}
type IncomeVerificationPrecheckEmployerAddress = {
  city?: string | undefined
  country?: string | undefined
  postal_code?: string | undefined
  region?: string | undefined
  street?: string | undefined
}
type IncomeVerificationPrecheckEmployer = {
  address?: IncomeVerificationPrecheckEmployerAddress | undefined
  name?: (string | null) | undefined
  tax_id?: (string | null) | undefined
  url?: (string | null) | undefined
} | null
type IncomeVerificationPrecheckPayrollInstitution = { name?: (string | null) | undefined } | null
type IncomeVerificationPrecheckMilitaryInfo = {
  branch?: (string | null) | undefined
  is_active_duty?: (boolean | null) | undefined
} | null
type CreditPayrollIncomePrecheckRequest = {
  access_tokens?: AccessToken[] | undefined
  client_id?: APIClientID | undefined
  employer?: IncomeVerificationPrecheckEmployer | undefined
  payroll_institution?: IncomeVerificationPrecheckPayrollInstitution | undefined
  secret?: APISecret | undefined
  us_military_info?: IncomeVerificationPrecheckMilitaryInfo | undefined
  user_token?: UserToken | undefined
}
type IncomeVerificationPrecheckConfidence = 'HIGH' | 'LOW' | 'UNKNOWN'
type CreditPayrollIncomePrecheckResponse = {
  confidence: IncomeVerificationPrecheckConfidence
  request_id: RequestID
}
type CreditPayrollIncomeRefreshRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  user_token?: UserToken | undefined
}
type CreditPayrollIncomeRefreshStatus = string
type CreditPayrollIncomeRefreshResponse = {
  request_id: RequestID
  verification_refresh_status: CreditPayrollIncomeRefreshStatus
}
type CreditRelayCreateRequest = {
  client_id?: APIClientID | undefined
  report_tokens: string[]
  secondary_client_id: string
  secret?: APISecret | undefined
  webhook?: (string | null) | undefined
}
type CreditRelayCreateResponse = { relay_token: string; request_id: RequestID }
type ReportType = 'assets' | 'income'
type CreditRelayGetRequest = {
  client_id?: APIClientID | undefined
  relay_token: string
  report_type: ReportType
  secret?: APISecret | undefined
}
type CreditRelayRefreshRequest = {
  client_id?: APIClientID | undefined
  relay_token: string
  report_type: ReportType
  secret?: APISecret | undefined
  webhook?: (string | null) | undefined
}
type CreditRelayRefreshResponse = {
  asset_report_id?: AssetReportId | undefined
  relay_token: string
  request_id: RequestID
}
type CreditRelayRemoveRequest = {
  client_id?: APIClientID | undefined
  relay_token: string
  secret?: APISecret | undefined
}
type CreditRelayRemoveResponse = { removed: boolean; request_id: RequestID }
type CreditSessionsGetRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  user_token: UserToken
}
type CreditSessionError = {
  display_message?: (string | null) | undefined
  error_code?: string | undefined
  error_message?: string | undefined
  error_type?: string | undefined
}
type CreditSessionBankIncomeStatus = 'APPROVED' | 'NO_DEPOSITS_FOUND' | 'USER_REPORTED_NO_INCOME'
type CreditSessionBankIncomeResult = {
  institution_id?: string | undefined
  item_id?: string | undefined
  status?: CreditSessionBankIncomeStatus | undefined
}
type CreditSessionDocumentIncomeResult = {
  num_paystubs_uploaded: number
  num_w2s_uploaded: number
} | null
type CreditSessionItemAddResult = {
  institution_id?: string | undefined
  item_id?: string | undefined
  public_token?: string | undefined
}
type CreditSessionPayrollIncomeResult = {
  institution_id?: string | undefined
  institution_name?: string | undefined
  num_paystubs_retrieved?: number | undefined
  num_w2s_retrieved?: number | undefined
}
type CreditSessionResults = {
  bank_income_results?: CreditSessionBankIncomeResult[] | undefined
  document_income_results?: CreditSessionDocumentIncomeResult | undefined
  item_add_results?: CreditSessionItemAddResult[] | undefined
  payroll_income_results?: CreditSessionPayrollIncomeResult[] | undefined
}
type CreditSession = {
  errors?: CreditSessionError[] | undefined
  link_session_id?: string | undefined
  results?: CreditSessionResults | undefined
  session_start_time?: string | undefined
}
type CreditSessionsGetResponse = { request_id: RequestID; sessions?: CreditSession[] | undefined }
type DashboardUserID = string
type DashboardUserGetRequest = {
  client_id?: APIClientID | undefined
  dashboard_user_id: DashboardUserID
  secret?: APISecret | undefined
}
type Timestamp = string
type EmailAddress = string
type DashboardUserStatus = 'invited' | 'active' | 'deactivated'
type DashboardUserGetResponse = {
  created_at: Timestamp
  email_address: EmailAddress
  id: DashboardUserID
  request_id: RequestID
  status: DashboardUserStatus
}
type Cursor = string | null
type DashboardUserListRequest = {
  client_id?: APIClientID | undefined
  cursor?: Cursor | undefined
  secret?: APISecret | undefined
}
type DashboardUser = {
  created_at: Timestamp
  email_address: EmailAddress
  id: DashboardUserID
  status: DashboardUserStatus
}
type DashboardUserListResponse = {
  dashboard_users: DashboardUser[]
  next_cursor: Cursor
  request_id: RequestID
}
type DepositSwitchCreateRequestOptions = {
  transaction_item_access_tokens?: AccessToken[] | undefined
  webhook?: (string | null) | undefined
}
type DepositSwitchTargetAccount = {
  account_name: string
  account_number: string
  account_subtype: 'checking' | 'savings'
  routing_number: string
}
type DepositSwitchAddressData = {
  city: string
  country: string
  postal_code: string
  region: string
  street: string
}
type DepositSwitchTargetUser = {
  address?: DepositSwitchAddressData | undefined
  email: string
  family_name: string
  given_name: string
  phone: string
  tax_payer_id?: string | undefined
}
type DepositSwitchAltCreateRequest = {
  client_id?: APIClientID | undefined
  country_code?: 'US' | 'CA' | undefined
  options?: DepositSwitchCreateRequestOptions | undefined
  secret?: APISecret | undefined
  target_account: DepositSwitchTargetAccount
  target_user: DepositSwitchTargetUser
}
type DepositSwitchAltCreateResponse = { deposit_switch_id: string; request_id: RequestID }
type DepositSwitchCreateRequest = {
  client_id?: APIClientID | undefined
  country_code?: 'US' | 'CA' | undefined
  options?: DepositSwitchCreateRequestOptions | undefined
  secret?: APISecret | undefined
  target_access_token: string
  target_account_id: string
}
type DepositSwitchCreateResponse = { deposit_switch_id: string; request_id: RequestID }
type DepositSwitchGetRequest = {
  client_id?: APIClientID | undefined
  deposit_switch_id: string
  secret?: APISecret | undefined
}
type DepositSwitchGetResponse = {
  account_has_multiple_allocations: boolean | null
  amount_allocated: number | null
  date_completed: string | null
  date_created: string
  deposit_switch_id: string
  employer_id?: (string | null) | undefined
  employer_name?: (string | null) | undefined
  institution_id?: (string | null) | undefined
  institution_name?: (string | null) | undefined
  is_allocated_remainder: boolean | null
  percent_allocated: number | null
  request_id: RequestID
  state: 'initialized' | 'processing' | 'completed' | 'error'
  switch_method?: 'instant' | 'mail' | 'pdf' | null | undefined
  target_account_id: string | null
  target_item_id: string | null
}
type DepositSwitchTokenCreateRequest = {
  client_id?: APIClientID | undefined
  deposit_switch_id: string
  secret?: APISecret | undefined
}
type DepositSwitchTokenCreateResponse = {
  deposit_switch_token: string
  deposit_switch_token_expiration_time: string
  request_id: RequestID
}
type EmployersSearchRequest = {
  client_id?: APIClientID | undefined
  products: string[]
  query: string
  secret?: APISecret | undefined
}
type AddressDataNullable = {
  city: string | null
  country: string | null
  postal_code: string | null
  region: string | null
  street: string
}
type Employer = {
  address: AddressDataNullable
  confidence_score: number
  employer_id: string
  name: string
}
type EmployersSearchResponse = { employers: Employer[]; request_id: RequestID }
type EmploymentVerificationGetRequest = {
  access_token: AccessToken
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
}
type EmployerVerification = { name?: (string | null) | undefined }
type PlatformIds = {
  employee_id?: (string | null) | undefined
  payroll_id?: (string | null) | undefined
  position_id?: (string | null) | undefined
}
type EmploymentVerificationStatus = 'EMPLOYMENT_STATUS_ACTIVE' | 'EMPLOYMENT_STATUS_INACTIVE' | null
type EmploymentVerification = {
  employer?: EmployerVerification | undefined
  end_date?: (string | null) | undefined
  platform_ids?: PlatformIds | undefined
  start_date?: (string | null) | undefined
  status?: EmploymentVerificationStatus | undefined
  title?: (string | null) | undefined
}
type EmploymentVerificationGetResponse = {
  employments: EmploymentVerification[]
  request_id: RequestID
}
type FDXNotificationCategory = 'SECURITY' | 'MAINTENANCE' | 'FRAUD' | 'CONSENT' | 'NEW_DATA'
type FDXFiAttribute = { name?: string | undefined; value?: string | undefined }
type FDXNotificationPayloadIdType = 'ACCOUNT' | 'CUSTOMER' | 'PARTY' | 'MAINTENANCE' | 'CONSENT'
type FDXNotificationPayload = {
  customFields?: FDXFiAttribute | undefined
  id?: string | undefined
  idType?: FDXNotificationPayloadIdType | undefined
}
type FDXNotificationPriority = 'HIGH' | 'MEDIUM' | 'LOW'
type FDXPartyRegistry = 'FDX' | 'GLEIF' | 'ICANN' | 'PRIVATE'
type FDXPartyType =
  | 'DATA_ACCESS_PLATFORM'
  | 'DATA_PROVIDER'
  | 'DATA_RECIPIENT'
  | 'INDIVIDUAL'
  | 'MERCHANT'
  | 'VENDOR'
type FDXParty = {
  homeUri?: string | undefined
  logoUri?: string | undefined
  name: string
  registeredEntityId?: string | undefined
  registeredEntityName?: string | undefined
  registry?: FDXPartyRegistry | undefined
  type: FDXPartyType
}
type FDXTimestamp = string
type FDXNotificationSeverity = 'EMERGENCY' | 'ALERT' | 'WARNING' | 'NOTICE' | 'INFO'
type FDXNotificationType =
  | 'CONSENT_REVOKED'
  | 'CONSENT_UPDATED'
  | 'CUSTOM'
  | 'SERVICE'
  | 'BALANCE'
  | 'PLANNED_OUTAGE'
type FDXHateoasLinkAction = 'GET' | 'POST' | 'PATCH' | 'DELETE' | 'PUT'
type FDXContentTypes =
  | 'application/pdf'
  | 'image/gif'
  | 'image/jpeg'
  | 'image/tiff'
  | 'image/png'
  | 'application/json'
type FDXHateoasLink = {
  action?: FDXHateoasLinkAction | undefined
  href: string
  rel?: string | undefined
  types?: FDXContentTypes[] | undefined
}
type FDXNotification = {
  category: FDXNotificationCategory
  notificationId: string
  notificationPayload: FDXNotificationPayload
  priority?: FDXNotificationPriority | undefined
  publisher: FDXParty
  sentOn: FDXTimestamp
  severity?: FDXNotificationSeverity | undefined
  subscriber?: FDXParty | undefined
  type: FDXNotificationType
  url?: FDXHateoasLink | undefined
}
type IdentityGetRequestOptions = { account_ids?: string[] | undefined }
type IdentityGetRequest = {
  access_token: AccessToken
  client_id?: APIClientID | undefined
  options?: IdentityGetRequestOptions | undefined
  secret?: APISecret | undefined
}
type AccountIdentity = {
  account_id: string
  balances: AccountBalance
  mask: string | null
  name: string
  official_name: string | null
  persistent_account_id?: string | undefined
  subtype: AccountSubtype
  type: AccountType
  verification_status?:
    | 'automatically_verified'
    | 'pending_automatic_verification'
    | 'pending_manual_verification'
    | 'manually_verified'
    | 'verification_expired'
    | 'verification_failed'
    | undefined
  owners: Owner[]
}
type IdentityGetResponse = { accounts: AccountIdentity[]; item: Item; request_id: RequestID }
type IdentityMatchRequestOptions = { account_ids?: string[] | undefined }
type IdentityMatchUser = {
  address?: AddressDataNullable | undefined
  email_address?: (string | null) | undefined
  legal_name?: (string | null) | undefined
  phone_number?: (string | null) | undefined
}
type IdentityMatchRequest = {
  access_token: AccessToken
  client_id?: APIClientID | undefined
  options?: IdentityMatchRequestOptions | undefined
  secret?: APISecret | undefined
  user?: IdentityMatchUser | undefined
}
type AddressMatchScore = {
  is_postal_code_match?: (boolean | null) | undefined
  score?: (number | null) | undefined
} | null
type EmailAddressMatchScore = { score?: (number | null) | undefined } | null
type NameMatchScore = {
  is_business_name_detected?: (boolean | null) | undefined
  is_first_name_or_last_name_match?: (boolean | null) | undefined
  is_nickname_match?: (boolean | null) | undefined
  score?: (number | null) | undefined
} | null
type PhoneNumberMatchScore = { score?: (number | null) | undefined } | null
type AccountIdentityMatchScore = {
  account_id: string
  balances: AccountBalance
  mask: string | null
  name: string
  official_name: string | null
  persistent_account_id?: string | undefined
  subtype: AccountSubtype
  type: AccountType
  verification_status?:
    | 'automatically_verified'
    | 'pending_automatic_verification'
    | 'pending_manual_verification'
    | 'manually_verified'
    | 'verification_expired'
    | 'verification_failed'
    | undefined
  address?: AddressMatchScore | undefined
  email_address?: EmailAddressMatchScore | undefined
  legal_name?: NameMatchScore | undefined
  phone_number?: PhoneNumberMatchScore | undefined
}
type IdentityMatchResponse = {
  accounts: AccountIdentityMatchScore[]
  item: Item
  request_id: RequestID
}
type IdentityVerificationConsent = boolean
type IdempotencyFlag = boolean | null
type IdentityVerificationTemplateID = string
type City = string
type GenericCountryCode = string
type PostalCode = string
type Region = string
type Street = string
type Street2 = string | null
type UserAddress = {
  city: City
  country: GenericCountryCode
  postal_code: PostalCode
  region: Region
  street: Street
  street2?: Street2 | undefined
} | null
type ClientUserID = string
type ISO8601Date = string
type IDNumberType =
  | 'ar_dni'
  | 'au_drivers_license'
  | 'au_passport'
  | 'br_cpf'
  | 'ca_sin'
  | 'cl_run'
  | 'cn_resident_card'
  | 'co_nit'
  | 'dk_cpr'
  | 'eg_national_id'
  | 'es_dni'
  | 'es_nie'
  | 'hk_hkid'
  | 'in_pan'
  | 'it_cf'
  | 'jo_civil_id'
  | 'jp_my_number'
  | 'ke_huduma_namba'
  | 'kw_civil_id'
  | 'mx_curp'
  | 'mx_rfc'
  | 'my_nric'
  | 'ng_nin'
  | 'nz_drivers_license'
  | 'om_civil_id'
  | 'ph_psn'
  | 'pl_pesel'
  | 'ro_cnp'
  | 'sa_national_id'
  | 'se_pin'
  | 'sg_nric'
  | 'tr_tc_kimlik'
  | 'us_ssn'
  | 'us_ssn_last_4'
  | 'za_smart_id'
type IDNumberValue = string
type UserIDNumber = { type: IDNumberType; value: IDNumberValue } | null
type FamilyNameField = string
type GivenNameField = string
type UserName = { family_name: FamilyNameField; given_name: GivenNameField } | null
type IdentityVerificationUserPhoneNumber = string | null
type IdentityVerificationRequestUser = {
  address?: UserAddress | undefined
  client_user_id: ClientUserID
  date_of_birth?: ISO8601Date | undefined
  email_address?: EmailAddress | undefined
  id_number?: UserIDNumber | undefined
  name?: UserName | undefined
  phone_number?: IdentityVerificationUserPhoneNumber | undefined
}
type IdentityVerificationCreateRequest = {
  client_id?: APIClientID | undefined
  gave_consent: IdentityVerificationConsent
  is_idempotent?: IdempotencyFlag | undefined
  is_shareable: boolean
  secret?: APISecret | undefined
  template_id: IdentityVerificationTemplateID
  user: IdentityVerificationRequestUser
}
type TimestampNullable = string | null
type DocumentAuthenticityMatchCode = 'match' | 'partial_match' | 'no_match' | 'no_data'
type DocumentDateOfBirthMatchCode = 'match' | 'partial_match' | 'no_match'
type ExpirationDate = 'not_expired' | 'expired' | 'no_data'
type IssuingCountry = 'match' | 'no_match'
type DocumentNameMatchCode = 'match' | 'partial_match' | 'no_match'
type PhysicalDocumentExtractedDataAnalysis = {
  date_of_birth: DocumentDateOfBirthMatchCode
  expiration_date: ExpirationDate
  issuing_country: IssuingCountry
  name: DocumentNameMatchCode
} | null
type ImageQuality = 'high' | 'medium' | 'low'
type DocumentAnalysis = {
  authenticity: DocumentAuthenticityMatchCode
  extracted_data: PhysicalDocumentExtractedDataAnalysis
  image_quality: ImageQuality
}
type PhysicalDocumentCategory =
  | 'drivers_license'
  | 'id_card'
  | 'passport'
  | 'residence_permit_card'
  | 'resident_card'
type ISO8601DateNullable = string | null
type PhysicalDocumentIDNumber = string | null
type RegionNullable = string | null
type PhysicalDocumentExtractedData = {
  category: PhysicalDocumentCategory
  expiration_date: ISO8601DateNullable
  id_number: PhysicalDocumentIDNumber
  issuing_country: GenericCountryCode
  issuing_region: RegionNullable
} | null
type DocumentImageCroppedBack = string | null
type DocumentImageCroppedFront = string | null
type DocumentImageFace = string | null
type DocumentImageBack = string | null
type DocumentImageFront = string | null
type PhysicalDocumentImages = {
  cropped_back: DocumentImageCroppedBack
  cropped_front: DocumentImageCroppedFront
  face: DocumentImageFace
  original_back: DocumentImageBack
  original_front: DocumentImageFront
}
type DocumentStatus = 'success' | 'failed' | 'manually_approved'
type DocumentaryVerificationDocument = {
  analysis: DocumentAnalysis
  attempt: number
  extracted_data: PhysicalDocumentExtractedData
  images: PhysicalDocumentImages
  redacted_at: TimestampNullable
  status: DocumentStatus
}
type DocumentaryVerification = {
  documents: DocumentaryVerificationDocument[]
  status: string
} | null
type IdentityVerificationID = string
type POBoxStatus = 'yes' | 'no' | 'no_data'
type MatchSummaryCode = 'match' | 'partial_match' | 'no_match' | 'no_data' | 'no_input'
type AddressPurposeLabel = 'residential' | 'commercial' | 'no_data'
type KYCCheckAddressSummary = {
  po_box: POBoxStatus
  summary: MatchSummaryCode
  type: AddressPurposeLabel
}
type KYCCheckDateOfBirthSummary = { summary: MatchSummaryCode }
type KYCCheckIDNumberSummary = { summary: MatchSummaryCode }
type KYCCheckNameSummary = { summary: MatchSummaryCode }
type KYCCheckPhoneSummary = { summary: MatchSummaryCode }
type KYCCheckDetails = {
  address: KYCCheckAddressSummary
  date_of_birth: KYCCheckDateOfBirthSummary
  id_number: KYCCheckIDNumberSummary
  name: KYCCheckNameSummary
  phone_number: KYCCheckPhoneSummary
  status: string
} | null
type PreviousIdentityVerificationAttemptID = string | null
type ShareableURL = string | null
type IdentityVerificationStatus =
  | 'active'
  | 'success'
  | 'failed'
  | 'expired'
  | 'canceled'
  | 'pending_review'
type IdentityVerificationStepStatus =
  | 'success'
  | 'active'
  | 'failed'
  | 'waiting_for_prerequisite'
  | 'not_applicable'
  | 'skipped'
  | 'expired'
  | 'canceled'
  | 'pending_review'
  | 'manually_approved'
  | 'manually_rejected'
type IdentityVerificationStepSummary = {
  accept_tos: IdentityVerificationStepStatus
  documentary_verification: IdentityVerificationStepStatus
  kyc_check: IdentityVerificationStepStatus
  risk_check: IdentityVerificationStepStatus
  selfie_check: IdentityVerificationStepStatus
  verify_sms: IdentityVerificationStepStatus
  watchlist_screening: IdentityVerificationStepStatus
}
type IdentityVerificationTemplateVersion = number
type IdentityVerificationTemplateReference = {
  id: IdentityVerificationTemplateID
  version: IdentityVerificationTemplateVersion
}
type CityNullable = string | null
type PostalCodeNullable = string | null
type StreetNullable = string | null
type IdentityVerificationUserAddress = {
  city: CityNullable
  country: GenericCountryCode
  postal_code: PostalCodeNullable
  region: RegionNullable
  street: StreetNullable
  street2: Street2
} | null
type EmailAddressNullable = string | null
type IPAddress = string | null
type IdentityVerificationUserData = {
  address: IdentityVerificationUserAddress
  date_of_birth: ISO8601DateNullable
  email_address: EmailAddressNullable
  id_number: UserIDNumber
  ip_address: IPAddress
  name: UserName
  phone_number?: IdentityVerificationUserPhoneNumber | undefined
}
type WatchlistScreeningIndividualIDNullable = string | null
type IdentityVerificationCreateResponse = {
  client_user_id: ClientUserID
  completed_at: TimestampNullable
  created_at: Timestamp
  documentary_verification: DocumentaryVerification
  id: IdentityVerificationID
  kyc_check: KYCCheckDetails
  previous_attempt_id: PreviousIdentityVerificationAttemptID
  redacted_at: TimestampNullable
  request_id: RequestID
  shareable_url: ShareableURL
  status: IdentityVerificationStatus
  steps: IdentityVerificationStepSummary
  template: IdentityVerificationTemplateReference
  user: IdentityVerificationUserData
  watchlist_screening_id: WatchlistScreeningIndividualIDNullable
}
type IdentityVerificationGetRequest = {
  client_id?: APIClientID | undefined
  identity_verification_id: IdentityVerificationID
  secret?: APISecret | undefined
}
type IdentityVerificationGetResponse = {
  client_user_id: ClientUserID
  completed_at: TimestampNullable
  created_at: Timestamp
  documentary_verification: DocumentaryVerification
  id: IdentityVerificationID
  kyc_check: KYCCheckDetails
  previous_attempt_id: PreviousIdentityVerificationAttemptID
  redacted_at: TimestampNullable
  request_id: RequestID
  shareable_url: ShareableURL
  status: IdentityVerificationStatus
  steps: IdentityVerificationStepSummary
  template: IdentityVerificationTemplateReference
  user: IdentityVerificationUserData
  watchlist_screening_id: WatchlistScreeningIndividualIDNullable
}
type IdentityVerificationListRequest = {
  client_id?: APIClientID | undefined
  client_user_id: ClientUserID
  cursor?: Cursor | undefined
  secret?: APISecret | undefined
  template_id: IdentityVerificationTemplateID
}
type IdentityVerification = {
  client_user_id: ClientUserID
  completed_at: TimestampNullable
  created_at: Timestamp
  documentary_verification: DocumentaryVerification
  id: IdentityVerificationID
  kyc_check: KYCCheckDetails
  previous_attempt_id: PreviousIdentityVerificationAttemptID
  redacted_at: TimestampNullable
  shareable_url: ShareableURL
  status: IdentityVerificationStatus
  steps: IdentityVerificationStepSummary
  template: IdentityVerificationTemplateReference
  user: IdentityVerificationUserData
  watchlist_screening_id: WatchlistScreeningIndividualIDNullable
}
type IdentityVerificationListResponse = {
  identity_verifications: IdentityVerification[]
  next_cursor: Cursor
  request_id: RequestID
}
type IdentityVerificationRetryRequestStepsObject = {
  documentary_verification: boolean
  kyc_check: boolean
  selfie_check: boolean
  verify_sms: boolean
} | null
type Strategy = 'reset' | 'incomplete' | 'infer' | 'custom'
type IdentityVerificationRetryRequest = {
  client_id?: APIClientID | undefined
  client_user_id: ClientUserID
  secret?: APISecret | undefined
  steps?: IdentityVerificationRetryRequestStepsObject | undefined
  strategy: Strategy
  template_id: IdentityVerificationTemplateID
}
type IdentityVerificationRetryResponse = {
  client_user_id: ClientUserID
  completed_at: TimestampNullable
  created_at: Timestamp
  documentary_verification: DocumentaryVerification
  id: IdentityVerificationID
  kyc_check: KYCCheckDetails
  previous_attempt_id: PreviousIdentityVerificationAttemptID
  redacted_at: TimestampNullable
  request_id: RequestID
  shareable_url: ShareableURL
  status: IdentityVerificationStatus
  steps: IdentityVerificationStepSummary
  template: IdentityVerificationTemplateReference
  user: IdentityVerificationUserData
  watchlist_screening_id: WatchlistScreeningIndividualIDNullable
}
type IncomeVerificationCreateRequestOptions = { access_tokens?: AccessToken[] | undefined }
type IncomeVerificationCreateRequest = {
  client_id?: APIClientID | undefined
  options?: IncomeVerificationCreateRequestOptions | undefined
  precheck_id?: string | undefined
  secret?: APISecret | undefined
  webhook: string
}
type IncomeVerificationCreateResponse = { income_verification_id: string; request_id: RequestID }
type AccessTokenNullable = string | null
type IncomeVerificationDocumentsDownloadRequest = {
  access_token?: AccessTokenNullable | undefined
  client_id?: APIClientID | undefined
  document_id?: (string | null) | undefined
  income_verification_id?: (string | null) | undefined
  secret?: APISecret | undefined
}
type IncomeVerificationPaystubsGetRequest = {
  access_token?: AccessTokenNullable | undefined
  client_id?: APIClientID | undefined
  income_verification_id?: (string | null) | undefined
  secret?: APISecret | undefined
}
type DocType =
  | 'UNKNOWN'
  | 'DOCUMENT_TYPE_PAYSTUB'
  | 'DOCUMENT_TYPE_BANK_STATEMENT'
  | 'DOCUMENT_TYPE_US_TAX_W2'
  | 'DOCUMENT_TYPE_US_MILITARY_ERAS'
  | 'DOCUMENT_TYPE_US_MILITARY_LES'
  | 'DOCUMENT_TYPE_US_MILITARY_CLES'
  | 'DOCUMENT_TYPE_GIG'
  | 'DOCUMENT_TYPE_NONE'
  | 'DOCUMENT_TYPE_US_TAX_1099_MISC'
  | 'DOCUMENT_TYPE_US_TAX_1099_K'
  | 'DOCUMENT_TYPE_PLAID_GENERATED_PAYSTUB_PDF'
type DocumentMetadata = {
  doc_id?: string | undefined
  doc_type?: DocType | undefined
  name?: string | undefined
  status?: (string | null) | undefined
}
type DeductionsBreakdown = {
  current_amount?: (number | null) | undefined
  description?: (string | null) | undefined
  iso_currency_code?: (string | null) | undefined
  unofficial_currency_code?: (string | null) | undefined
  ytd_amount?: (number | null) | undefined
}
type TotalCanonicalDescription =
  | 'BONUS'
  | 'COMMISSION'
  | 'OVERTIME'
  | 'PAID TIME OFF'
  | 'REGULAR PAY'
  | 'VACATION'
  | 'EMPLOYEE MEDICARE'
  | 'FICA'
  | 'SOCIAL SECURITY EMPLOYEE TAX'
  | 'MEDICAL'
  | 'VISION'
  | 'DENTAL'
  | 'NET PAY'
  | 'TAXES'
  | 'NOT_FOUND'
  | 'OTHER'
  | null
type Pay = { amount?: (number | null) | undefined; currency?: (string | null) | undefined }
type Total = {
  canonical_description?: TotalCanonicalDescription | undefined
  current_pay?: Pay | undefined
  description?: (string | null) | undefined
  ytd_pay?: Pay | undefined
}
type DeductionsTotal = {
  current_amount?: (number | null) | undefined
  iso_currency_code?: (string | null) | undefined
  unofficial_currency_code?: (string | null) | undefined
  ytd_amount?: (number | null) | undefined
}
type Deductions = {
  breakdown: DeductionsBreakdown[]
  subtotals?: Total[] | undefined
  total: DeductionsTotal
  totals?: Total[] | undefined
}
type EarningsBreakdownCanonicalDescription =
  | 'BONUS'
  | 'COMMISSION'
  | 'OVERTIME'
  | 'PAID TIME OFF'
  | 'REGULAR PAY'
  | 'VACATION'
  | 'BASIC ALLOWANCE HOUSING'
  | 'BASIC ALLOWANCE SUBSISTENCE'
  | 'OTHER'
  | null
type EarningsBreakdown = {
  canonical_description?: EarningsBreakdownCanonicalDescription | undefined
  current_amount?: (number | null) | undefined
  description?: (string | null) | undefined
  hours?: (number | null) | undefined
  iso_currency_code?: (string | null) | undefined
  rate?: (number | null) | undefined
  unofficial_currency_code?: (string | null) | undefined
  ytd_amount?: (number | null) | undefined
}
type EarningsTotal = {
  current_amount?: (number | null) | undefined
  current_pay?: Pay | undefined
  hours?: (number | null) | undefined
  iso_currency_code?: (string | null) | undefined
  unofficial_currency_code?: (string | null) | undefined
  ytd_amount?: (number | null) | undefined
  ytd_pay?: Pay | undefined
}
type Earnings = {
  breakdown?: EarningsBreakdown[] | undefined
  subtotals?: EarningsTotal[] | undefined
  total?: EarningsTotal | undefined
  totals?: EarningsTotal[] | undefined
}
type PaystubAddress = {
  city?: (string | null) | undefined
  country?: (string | null) | undefined
  line1?: (string | null) | undefined
  line2?: (string | null) | undefined
  postal_code?: (string | null) | undefined
  region?: (string | null) | undefined
  state_code?: (string | null) | undefined
  street?: (string | null) | undefined
}
type TaxpayerID = {
  id_mask?: (string | null) | undefined
  id_type?: (string | null) | undefined
  last_4_digits?: (string | null) | undefined
}
type Employee = {
  address: PaystubAddress
  marital_status?: (string | null) | undefined
  name: string | null
  taxpayer_id?: TaxpayerID | undefined
}
type PaystubEmployer = { address?: PaystubAddress | undefined; name: string | null }
type EmploymentDetails = {
  annual_salary?: Pay | undefined
  hire_date?: (string | null) | undefined
}
type IncomeBreakdownType = 'bonus' | 'overtime' | 'regular' | null
type IncomeBreakdown = {
  hours: number | null
  rate: number | null
  total: number | null
  type: IncomeBreakdownType
}
type NetPay = {
  current_amount?: (number | null) | undefined
  description?: (string | null) | undefined
  iso_currency_code?: (string | null) | undefined
  total?: Total | undefined
  unofficial_currency_code?: (string | null) | undefined
  ytd_amount?: (number | null) | undefined
}
type DistributionBreakdown = {
  account_name?: (string | null) | undefined
  bank_name?: (string | null) | undefined
  current_amount?: (number | null) | undefined
  current_pay?: Pay | undefined
  iso_currency_code?: (string | null) | undefined
  mask?: (string | null) | undefined
  type?: (string | null) | undefined
  unofficial_currency_code?: (string | null) | undefined
}
type PayPeriodDetails = {
  check_amount?: (number | null) | undefined
  distribution_breakdown?: DistributionBreakdown[] | undefined
  end_date?: (string | null) | undefined
  gross_earnings?: (number | null) | undefined
  pay_date?: (string | null) | undefined
  pay_day?: (string | null) | undefined
  pay_frequency?:
    | 'PAY_FREQUENCY_UNKNOWN'
    | 'PAY_FREQUENCY_WEEKLY'
    | 'PAY_FREQUENCY_BIWEEKLY'
    | 'PAY_FREQUENCY_SEMIMONTHLY'
    | 'PAY_FREQUENCY_MONTHLY'
    | null
    | undefined
  start_date?: (string | null) | undefined
}
type PaystubPayFrequency = 'MONTHLY' | 'BI-WEEKLY' | 'WEEKLY' | 'SEMI-MONTHLY' | null
type PaystubDetails = {
  pay_date?: (string | null) | undefined
  pay_frequency?: PaystubPayFrequency | undefined
  pay_period_end_date?: (string | null) | undefined
  pay_period_start_date?: (string | null) | undefined
  paystub_provider?: (string | null) | undefined
}
type PaystubYTDDetails = {
  gross_earnings?: (number | null) | undefined
  net_earnings?: (number | null) | undefined
}
type Paystub = {
  deductions: Deductions
  doc_id: string
  earnings: Earnings
  employee: Employee
  employer: PaystubEmployer
  employment_details?: EmploymentDetails | undefined
  income_breakdown?: IncomeBreakdown[] | undefined
  net_pay: NetPay
  pay_period_details: PayPeriodDetails
  paystub_details?: PaystubDetails | undefined
  ytd_earnings?: PaystubYTDDetails | undefined
}
type IncomeVerificationPaystubsGetResponse = {
  document_metadata?: DocumentMetadata[] | undefined
  error?: PlaidError | undefined
  paystubs: Paystub[]
  request_id: RequestID
}
type SignalAddressData = {
  city?: string | undefined
  country?: (string | null) | undefined
  postal_code?: (string | null) | undefined
  region?: (string | null) | undefined
  street?: string | undefined
} | null
type IncomeVerificationPrecheckUser = {
  email_address?: (string | null) | undefined
  first_name?: (string | null) | undefined
  home_address?: SignalAddressData | undefined
  last_name?: (string | null) | undefined
} | null
type IncomeVerificationPrecheckRequest = {
  client_id?: APIClientID | undefined
  employer?: IncomeVerificationPrecheckEmployer | undefined
  payroll_institution?: IncomeVerificationPrecheckPayrollInstitution | undefined
  secret?: APISecret | undefined
  transactions_access_token?: {} | undefined
  transactions_access_tokens?: AccessToken[] | undefined
  us_military_info?: IncomeVerificationPrecheckMilitaryInfo | undefined
  user?: IncomeVerificationPrecheckUser | undefined
}
type IncomeVerificationPrecheckResponse = {
  confidence: IncomeVerificationPrecheckConfidence
  precheck_id: string
  request_id: RequestID
}
type IncomeVerificationTaxformsGetRequest = {
  access_token?: AccessTokenNullable | undefined
  client_id?: APIClientID | undefined
  income_verification_id?: (string | null) | undefined
  secret?: APISecret | undefined
}
type W2 = {
  allocated_tips?: (string | null) | undefined
  box_12?: W2Box12[] | undefined
  box_9?: (string | null) | undefined
  dependent_care_benefits?: (string | null) | undefined
  employee?: Employee | undefined
  employer?: PaystubEmployer | undefined
  employer_id_number?: (string | null) | undefined
  federal_income_tax_withheld?: (string | null) | undefined
  medicare_tax_withheld?: (string | null) | undefined
  medicare_wages_and_tips?: (string | null) | undefined
  nonqualified_plans?: (string | null) | undefined
  other?: (string | null) | undefined
  retirement_plan?: (string | null) | undefined
  social_security_tax_withheld?: (string | null) | undefined
  social_security_tips?: (string | null) | undefined
  social_security_wages?: (string | null) | undefined
  state_and_local_wages?: W2StateAndLocalWages[] | undefined
  statutory_employee?: (string | null) | undefined
  tax_year?: (string | null) | undefined
  third_party_sick_pay?: (string | null) | undefined
  wages_tips_other_comp?: (string | null) | undefined
}
type Taxform = { doc_id?: string | undefined; document_type: string; w2?: W2 | undefined }
type IncomeVerificationTaxformsGetResponse = {
  document_metadata: DocumentMetadata[]
  error?: PlaidError | undefined
  request_id?: RequestID | undefined
  taxforms: Taxform[]
}
type CountryCode =
  | 'US'
  | 'GB'
  | 'ES'
  | 'NL'
  | 'FR'
  | 'IE'
  | 'CA'
  | 'DE'
  | 'IT'
  | 'PL'
  | 'DK'
  | 'NO'
  | 'SE'
  | 'EE'
  | 'LT'
  | 'LV'
type InstitutionsGetRequestOptions = {
  include_auth_metadata?: boolean | undefined
  include_optional_metadata?: boolean | undefined
  include_payment_initiation_metadata?: boolean | undefined
  oauth?: (boolean | null) | undefined
  products?: (Products[] | null) | undefined
  routing_numbers?: (string[] | null) | undefined
}
type InstitutionsGetRequest = {
  client_id?: APIClientID | undefined
  count: number
  country_codes: CountryCode[]
  offset: number
  options?: InstitutionsGetRequestOptions | undefined
  secret?: APISecret | undefined
}
type AuthSupportedMethods = {
  automated_micro_deposits: boolean
  instant_auth: boolean
  instant_match: boolean
} | null
type AuthMetadata = { supported_methods: AuthSupportedMethods } | null
type PaymentInitiationMaximumPaymentAmount = { [x: string]: string }
type PaymentScheduleInterval = 'WEEKLY' | 'MONTHLY'
type PaymentInitiationStandingOrderMetadata = {
  supports_standing_order_end_date: boolean
  supports_standing_order_negative_execution_days: boolean
  valid_standing_order_intervals: PaymentScheduleInterval[]
} | null
type PaymentInitiationMetadata = {
  maximum_payment_amount: PaymentInitiationMaximumPaymentAmount
  standing_order_metadata: PaymentInitiationStandingOrderMetadata
  supports_international_payments: boolean
  supports_refund_details: boolean
  supports_sepa_instant: boolean
} | null
type ProductStatusBreakdown = {
  error_institution: number
  error_plaid: number
  refresh_interval?: 'NORMAL' | 'DELAYED' | 'STOPPED' | undefined
  success: number
}
type ProductStatus = {
  breakdown: ProductStatusBreakdown
  last_status_change: string
  status: 'HEALTHY' | 'DEGRADED' | 'DOWN'
} | null
type IncidentUpdate = {
  description?: string | undefined
  status?: 'INVESTIGATING' | 'IDENTIFIED' | 'SCHEDULED' | 'RESOLVED' | 'UNKNOWN' | undefined
  updated_date?: string | undefined
}
type HealthIncident = {
  end_date?: (string | null) | undefined
  incident_updates: IncidentUpdate[]
  start_date: string
  title: string
}
type InstitutionStatus = {
  auth?: ProductStatus | undefined
  health_incidents?: (HealthIncident[] | null) | undefined
  identity?: ProductStatus | undefined
  investments?: ProductStatus | undefined
  investments_updates?: ProductStatus | undefined
  item_logins?: ProductStatus | undefined
  liabilities?: ProductStatus | undefined
  liabilities_updates?: ProductStatus | undefined
  transactions_updates?: ProductStatus | undefined
} | null
type Institution = {
  auth_metadata?: AuthMetadata | undefined
  country_codes: CountryCode[]
  institution_id: string
  logo?: (string | null) | undefined
  name: string
  oauth: boolean
  payment_initiation_metadata?: PaymentInitiationMetadata | undefined
  primary_color?: (string | null) | undefined
  products: Products[]
  routing_numbers: string[]
  status?: InstitutionStatus | undefined
  url?: (string | null) | undefined
}
type InstitutionsGetResponse = { institutions: Institution[]; request_id: RequestID; total: number }
type InstitutionsGetByIdRequestOptions = {
  include_auth_metadata?: boolean | undefined
  include_optional_metadata?: boolean | undefined
  include_payment_initiation_metadata?: boolean | undefined
  include_status?: boolean | undefined
}
type InstitutionsGetByIdRequest = {
  client_id?: APIClientID | undefined
  country_codes: CountryCode[]
  institution_id: string
  options?: InstitutionsGetByIdRequestOptions | undefined
  secret?: APISecret | undefined
}
type InstitutionsGetByIdResponse = { institution: Institution; request_id: RequestID }
type InstitutionsSearchPaymentInitiationOptions = {
  consent_id?: (string | null) | undefined
  payment_id?: (string | null) | undefined
} | null
type InstitutionsSearchRequestOptions = {
  include_auth_metadata?: (boolean | null) | undefined
  include_optional_metadata?: boolean | undefined
  include_payment_initiation_metadata?: (boolean | null) | undefined
  oauth?: (boolean | null) | undefined
  payment_initiation?: InstitutionsSearchPaymentInitiationOptions | undefined
}
type InstitutionsSearchRequest = {
  client_id?: APIClientID | undefined
  country_codes: CountryCode[]
  options?: InstitutionsSearchRequestOptions | undefined
  products: Products[] | null
  query: string
  secret?: APISecret | undefined
}
type InstitutionsSearchResponse = { institutions: Institution[]; request_id: RequestID }
type InvestmentHoldingsGetRequestOptions = { account_ids?: string[] | undefined }
type InvestmentsHoldingsGetRequest = {
  access_token: AccessToken
  client_id?: APIClientID | undefined
  options?: InvestmentHoldingsGetRequestOptions | undefined
  secret?: APISecret | undefined
}
type Holding = {
  account_id: string
  cost_basis: number | null
  institution_price: number
  institution_price_as_of?: (string | null) | undefined
  institution_price_datetime?: (string | null) | undefined
  institution_value: number
  iso_currency_code: string | null
  quantity: number
  security_id: string
  unofficial_currency_code: string | null
}
type Security = {
  close_price: number | null
  close_price_as_of: string | null
  cusip: string | null
  institution_id: string | null
  institution_security_id: string | null
  is_cash_equivalent: boolean | null
  isin: string | null
  iso_currency_code: string | null
  name: string | null
  proxy_security_id: string | null
  security_id: string
  sedol: string | null
  ticker_symbol: string | null
  type: string | null
  unofficial_currency_code: string | null
  update_datetime?: (string | null) | undefined
}
type InvestmentsHoldingsGetResponse = {
  accounts: AccountBase[]
  holdings: Holding[]
  item: Item
  request_id: RequestID
  securities: Security[]
}
type InvestmentsTransactionsGetRequestOptions = {
  account_ids?: string[] | undefined
  count?: number | undefined
  offset?: number | undefined
}
type InvestmentsTransactionsGetRequest = {
  access_token: AccessToken
  client_id?: APIClientID | undefined
  end_date: string
  options?: InvestmentsTransactionsGetRequestOptions | undefined
  secret?: APISecret | undefined
  start_date: string
}
type InvestmentTransactionSubtype =
  | 'account fee'
  | 'adjustment'
  | 'assignment'
  | 'buy'
  | 'buy to cover'
  | 'contribution'
  | 'deposit'
  | 'distribution'
  | 'dividend'
  | 'dividend reinvestment'
  | 'exercise'
  | 'expire'
  | 'fund fee'
  | 'interest'
  | 'interest receivable'
  | 'interest reinvestment'
  | 'legal fee'
  | 'loan payment'
  | 'long-term capital gain'
  | 'long-term capital gain reinvestment'
  | 'management fee'
  | 'margin expense'
  | 'merger'
  | 'miscellaneous fee'
  | 'non-qualified dividend'
  | 'non-resident tax'
  | 'pending credit'
  | 'pending debit'
  | 'qualified dividend'
  | 'rebalance'
  | 'return of principal'
  | 'request'
  | 'sell'
  | 'sell short'
  | 'send'
  | 'short-term capital gain'
  | 'short-term capital gain reinvestment'
  | 'spin off'
  | 'split'
  | 'stock distribution'
  | 'tax'
  | 'tax withheld'
  | 'trade'
  | 'transfer'
  | 'transfer fee'
  | 'trust fee'
  | 'unqualified gain'
  | 'withdrawal'
type InvestmentTransactionType = 'buy' | 'sell' | 'cancel' | 'cash' | 'fee' | 'transfer'
type InvestmentTransaction = {
  account_id: string
  amount: number
  cancel_transaction_id?: (string | null) | undefined
  date: string
  fees: number | null
  investment_transaction_id: string
  iso_currency_code: string | null
  name: string
  price: number
  quantity: number
  security_id: string | null
  subtype: InvestmentTransactionSubtype
  type: InvestmentTransactionType
  unofficial_currency_code: string | null
}
type InvestmentsTransactionsGetResponse = {
  accounts: AccountBase[]
  investment_transactions: InvestmentTransaction[]
  item: Item
  request_id: RequestID
  securities: Security[]
  total_investment_transactions: number
}
type ItemAccessTokenInvalidateRequest = {
  access_token: AccessToken
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
}
type ItemAccessTokenInvalidateResponse = { new_access_token: AccessToken; request_id: RequestID }
type ItemActivityListRequest = {
  access_token?: AccessToken | undefined
  client_id?: APIClientID | undefined
  count?: number | undefined
  cursor?: string | undefined
  secret?: APISecret | undefined
}
type ActivityType =
  | 'UNKNOWN'
  | 'ITEM_CREATE'
  | 'ITEM_IMPORT'
  | 'ITEM_UPDATE'
  | 'ITEM_UNLINK'
  | 'PORTAL_UNLINK'
  | 'PORTAL_ITEMS_DELETE'
  | 'ITEM_REMOVE'
  | 'INVARIANT_CHECKER_DELETION'
  | 'SCOPES_UPDATE'
type AccountProductAccessNullable = {
  account_data?: (boolean | null) | undefined
  statements?: (boolean | null) | undefined
  tax_documents?: (boolean | null) | undefined
}
type AccountAccess = {
  account_product_access?: AccountProductAccessNullable | undefined
  authorized?: (boolean | null) | undefined
  unique_id: string
}
type ProductAccess = {
  accounts_details_transactions?: (boolean | null) | undefined
  accounts_routing_number?: (boolean | null) | undefined
  accounts_statements?: (boolean | null) | undefined
  accounts_tax_statements?: (boolean | null) | undefined
  auth?: (boolean | null) | undefined
  customers_profiles?: (boolean | null) | undefined
  identity?: (boolean | null) | undefined
  statements?: (boolean | null) | undefined
  transactions?: (boolean | null) | undefined
}
type ScopesNullable = {
  accounts?: AccountAccess[] | undefined
  new_accounts?: (boolean | null) | undefined
  product_access?: ProductAccess | undefined
}
type ActionState = 'UNKNOWN' | 'ATTEMPT' | 'SUCCESS' | 'FAILURE' | 'SKIPPED'
type Activity = {
  activity: ActivityType
  id: string
  initiated_date: string
  initiator: string
  scopes?: ScopesNullable | undefined
  state: ActionState
  target_application_id?: ApplicationID | undefined
}
type ItemActivityListResponse = {
  activities: Activity[]
  cursor?: string | undefined
  request_id?: RequestID | undefined
}
type ItemApplicationListRequest = {
  access_token?: AccessTokenNullable | undefined
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
}
type ConnectedApplication = {
  application_id: ApplicationID
  application_url?: (string | null) | undefined
  created_at: string
  display_name?: (string | null) | undefined
  logo_url?: (string | null) | undefined
  name: string
  reason_for_access?: (string | null) | undefined
  scopes?: ScopesNullable | undefined
}
type ItemApplicationListResponse = {
  applications: ConnectedApplication[]
  request_id?: RequestID | undefined
}
type ScopesContext = 'ENROLLMENT' | 'PORTAL'
type Scopes = {
  accounts?: AccountAccess[] | undefined
  new_accounts?: (boolean | null) | undefined
  product_access?: ProductAccess | undefined
}
type ScopesState = string
type ItemApplicationScopesUpdateRequest = {
  access_token: AccessToken
  application_id: ApplicationID
  client_id?: APIClientID | undefined
  context: ScopesContext
  scopes: Scopes
  secret?: APISecret | undefined
  state?: ScopesState | undefined
}
type ItemApplicationScopesUpdateResponse = { request_id: RequestID }
type ItemGetRequest = {
  access_token: AccessToken
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
}
type ItemStatusInvestments = {
  last_failed_update?: (string | null) | undefined
  last_successful_update?: (string | null) | undefined
} | null
type ItemStatusLastWebhook = {
  code_sent?: (string | null) | undefined
  sent_at?: (string | null) | undefined
} | null
type ItemStatusTransactions = {
  last_failed_update?: (string | null) | undefined
  last_successful_update?: (string | null) | undefined
} | null
type ItemStatusNullable = {
  investments?: ItemStatusInvestments | undefined
  last_webhook?: ItemStatusLastWebhook | undefined
  transactions?: ItemStatusTransactions | undefined
}
type ItemGetResponse = {
  item: Item
  request_id: RequestID
  status?: ItemStatusNullable | undefined
}
type ItemImportRequestOptions = { webhook?: string | undefined }
type ItemImportRequestUserAuth = { auth_token: string; user_id: string }
type ItemImportRequest = {
  client_id?: APIClientID | undefined
  options?: ItemImportRequestOptions | undefined
  products: Products[]
  secret?: APISecret | undefined
  user_auth: ItemImportRequestUserAuth
}
type ItemImportResponse = { access_token: AccessToken; request_id: RequestID }
type ItemPublicTokenCreateRequest = {
  access_token: AccessToken
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
}
type ItemPublicTokenCreateResponse = {
  expiration?: string | undefined
  public_token: string
  request_id: RequestID
}
type ItemPublicTokenExchangeRequest = {
  client_id?: APIClientID | undefined
  public_token: string
  secret?: APISecret | undefined
}
type ItemPublicTokenExchangeResponse = {
  access_token: AccessToken
  item_id: string
  request_id: RequestID
}
type ItemRemoveRequest = {
  access_token: AccessToken
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
}
type ItemRemoveResponse = { request_id: RequestID }
type ItemWebhookUpdateRequest = {
  access_token: AccessToken
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  webhook?: (string | null) | undefined
}
type ItemWebhookUpdateResponse = { item: Item; request_id: RequestID }
type LiabilitiesGetRequestOptions = { account_ids?: string[] | undefined }
type LiabilitiesGetRequest = {
  access_token: AccessToken
  client_id?: APIClientID | undefined
  options?: LiabilitiesGetRequestOptions | undefined
  secret?: APISecret | undefined
}
type APR = {
  apr_percentage: number
  apr_type: 'balance_transfer_apr' | 'cash_apr' | 'purchase_apr' | 'special'
  balance_subject_to_apr: number | null
  interest_charge_amount: number | null
}
type CreditCardLiability = {
  account_id: string | null
  aprs: APR[]
  is_overdue: boolean | null
  last_payment_amount: number | null
  last_payment_date: string | null
  last_statement_balance: number | null
  last_statement_issue_date: string | null
  minimum_payment_amount: number | null
  next_payment_due_date: string | null
}
type MortgageInterestRate = { percentage: number | null; type: string | null }
type MortgagePropertyAddress = {
  city: string | null
  country: string | null
  postal_code: string | null
  region: string | null
  street: string | null
}
type MortgageLiability = {
  account_id: string
  account_number: string
  current_late_fee: number | null
  escrow_balance: number | null
  has_pmi: boolean | null
  has_prepayment_penalty: boolean | null
  interest_rate: MortgageInterestRate
  last_payment_amount: number | null
  last_payment_date: string | null
  loan_term: string | null
  loan_type_description: string | null
  maturity_date: string | null
  next_monthly_payment: number | null
  next_payment_due_date: string | null
  origination_date: string | null
  origination_principal_amount: number | null
  past_due_amount: number | null
  property_address: MortgagePropertyAddress
  ytd_interest_paid: number | null
  ytd_principal_paid: number | null
}
type StudentLoanStatus = {
  end_date: string | null
  type:
    | 'cancelled'
    | 'charged off'
    | 'claim'
    | 'consolidated'
    | 'deferment'
    | 'delinquent'
    | 'discharged'
    | 'extension'
    | 'forbearance'
    | 'in grace'
    | 'in military'
    | 'in school'
    | 'not fully disbursed'
    | 'other'
    | 'paid in full'
    | 'refunded'
    | 'repayment'
    | 'transferred'
}
type PSLFStatus = {
  estimated_eligibility_date: string | null
  payments_made: number | null
  payments_remaining: number | null
}
type StudentRepaymentPlan = {
  description: string | null
  type:
    | 'extended graduated'
    | 'extended standard'
    | 'graduated'
    | 'income-contingent repayment'
    | 'income-based repayment'
    | 'interest-only'
    | 'other'
    | 'pay as you earn'
    | 'revised pay as you earn'
    | 'standard'
    | null
}
type ServicerAddressData = {
  city: string | null
  country: string | null
  postal_code: string | null
  region: string | null
  street: string | null
}
type StudentLoan = {
  account_id: string | null
  account_number: string | null
  disbursement_dates: string[] | null
  expected_payoff_date: string | null
  guarantor: string | null
  interest_rate_percentage: number
  is_overdue: boolean | null
  last_payment_amount: number | null
  last_payment_date: string | null
  last_statement_issue_date: string | null
  loan_name: string | null
  loan_status: StudentLoanStatus
  minimum_payment_amount: number | null
  next_payment_due_date: string | null
  origination_date: string | null
  origination_principal_amount: number | null
  outstanding_interest_amount: number | null
  payment_reference_number: string | null
  pslf_status: PSLFStatus
  repayment_plan: StudentRepaymentPlan
  sequence_number: string | null
  servicer_address: ServicerAddressData
  ytd_interest_paid: number | null
  ytd_principal_paid: number | null
}
type LiabilitiesObject = {
  credit: CreditCardLiability[] | null
  mortgage: MortgageLiability[] | null
  student: StudentLoan[] | null
}
type LiabilitiesGetResponse = {
  accounts: AccountBase[]
  item: Item
  liabilities: LiabilitiesObject
  request_id: RequestID
}
type LinkOAuthCorrelationIdExchangeRequest = {
  client_id?: APIClientID | undefined
  link_correlation_id: string
  secret?: APISecret | undefined
}
type LinkOAuthCorrelationIdExchangeResponse = { link_token: string; request_id: RequestID }
type CreditAccountSubtype = 'credit card' | 'paypal' | 'all'
type CreditAccountSubtypes = CreditAccountSubtype[]
type CreditFilter = { account_subtypes: CreditAccountSubtypes }
type DepositoryAccountSubtypes = DepositoryAccountSubtype[]
type DepositoryFilter = { account_subtypes: DepositoryAccountSubtypes }
type InvestmentAccountSubtype =
  | '529'
  | '401a'
  | '401k'
  | '403B'
  | '457b'
  | 'brokerage'
  | 'cash isa'
  | 'crypto exchange'
  | 'education savings account'
  | 'fixed annuity'
  | 'gic'
  | 'health reimbursement arrangement'
  | 'hsa'
  | 'ira'
  | 'isa'
  | 'keogh'
  | 'lif'
  | 'life insurance'
  | 'lira'
  | 'lrif'
  | 'lrsp'
  | 'mutual fund'
  | 'non-custodial wallet'
  | 'non-taxable brokerage account'
  | 'other'
  | 'other annuity'
  | 'other insurance'
  | 'pension'
  | 'prif'
  | 'profit sharing plan'
  | 'qshr'
  | 'rdsp'
  | 'resp'
  | 'retirement'
  | 'rlif'
  | 'roth'
  | 'roth 401k'
  | 'rrif'
  | 'rrsp'
  | 'sarsep'
  | 'sep ira'
  | 'simple ira'
  | 'sipp'
  | 'stock plan'
  | 'tfsa'
  | 'trust'
  | 'ugma'
  | 'utma'
  | 'variable annuity'
  | 'all'
type InvestmentAccountSubtypes = InvestmentAccountSubtype[]
type InvestmentFilter = { account_subtypes: InvestmentAccountSubtypes }
type LoanAccountSubtype =
  | 'auto'
  | 'business'
  | 'commercial'
  | 'construction'
  | 'consumer'
  | 'home equity'
  | 'loan'
  | 'mortgage'
  | 'line of credit'
  | 'student'
  | 'other'
  | 'all'
type LoanAccountSubtypes = LoanAccountSubtype[]
type LoanFilter = { account_subtypes: LoanAccountSubtypes }
type LinkTokenAccountFilters = {
  credit?: CreditFilter | undefined
  depository?: DepositoryFilter | undefined
  investment?: InvestmentFilter | undefined
  loan?: LoanFilter | undefined
}
type LinkTokenCreateRequestAuth = {
  auth_type_select_enabled?: boolean | undefined
  automated_microdeposits_enabled?: boolean | undefined
  flow_type?: 'FLEXIBLE_AUTH' | undefined
  instant_match_enabled?: boolean | undefined
  same_day_microdeposits_enabled?: boolean | undefined
}
type LinkTokenCreateRequestDepositSwitch = { deposit_switch_id: string }
type LinkTokenCreateRequestEmploymentBankIncome = { days_requested: number }
type EmploymentSourceType = 'bank' | 'payroll'
type LinkTokenCreateRequestEmployment = {
  bank_employment?: LinkTokenCreateRequestEmploymentBankIncome | undefined
  employment_source_types?: EmploymentSourceType[] | undefined
}
type LinkTokenEUConfig = { headless?: boolean | undefined }
type LinkTokenCreateRequestIdentityVerification = {
  consent?: {} | undefined
  gave_consent?: IdentityVerificationConsent | undefined
  template_id: IdentityVerificationTemplateID
}
type LinkTokenCreateRequestIncomeVerificationBankIncome = {
  days_requested: number
  enable_multiple_items?: (boolean | null) | undefined
}
type IncomeVerificationSourceType = 'bank' | 'payroll'
type IncomeVerificationPayrollFlowType = 'payroll_digital_income' | 'payroll_document_income'
type LinkTokenCreateRequestIncomeVerificationPayrollIncome = {
  flow_types?: (IncomeVerificationPayrollFlowType[] | null) | undefined
  is_update_mode?: boolean | undefined
}
type UserStatedIncomeSourceCategory =
  | 'OTHER'
  | 'SALARY'
  | 'UNEMPLOYMENT'
  | 'CASH'
  | 'GIG_ECONOMY'
  | 'RENTAL'
  | 'CHILD_SUPPORT'
  | 'MILITARY'
  | 'RETIREMENT'
  | 'LONG_TERM_DISABILITY'
  | 'BANK_INTEREST'
type UserStatedIncomeSourceFrequency =
  | 'UNKNOWN'
  | 'WEEKLY'
  | 'BIWEEKLY'
  | 'SEMI_MONTHLY'
  | 'MONTHLY'
type UserStatedIncomeSourcePayType = 'UNKNOWN' | 'GROSS' | 'NET'
type LinkTokenCreateRequestUserStatedIncomeSource = {
  category?: UserStatedIncomeSourceCategory | undefined
  employer?: string | undefined
  pay_annual?: number | undefined
  pay_frequency?: UserStatedIncomeSourceFrequency | undefined
  pay_per_cycle?: number | undefined
  pay_type?: UserStatedIncomeSourcePayType | undefined
}
type LinkTokenCreateRequestIncomeVerification = {
  access_tokens?: AccessToken[] | undefined
  asset_report_id?: string | undefined
  bank_income?: LinkTokenCreateRequestIncomeVerificationBankIncome | undefined
  income_source_types?: IncomeVerificationSourceType[] | undefined
  income_verification_id?: string | undefined
  payroll_income?: LinkTokenCreateRequestIncomeVerificationPayrollIncome | undefined
  precheck_id?: string | undefined
  stated_income_sources?: LinkTokenCreateRequestUserStatedIncomeSource[] | undefined
}
type LinkTokenCreateInstitutionData = { routing_number?: string | undefined }
type LinkTokenInvestments = { allow_unverified_crypto_wallets?: boolean | undefined }
type LinkTokenCreateRequestPaymentInitiation = {
  consent_id?: string | undefined
  payment_id?: string | undefined
}
type LinkTokenCreateRequestTransfer = {
  intent_id?: string | undefined
  payment_profile_token?: string | undefined
}
type LinkTokenCreateRequestUpdate = { account_selection_enabled?: boolean | undefined }
type LinkTokenCreateRequestUser = {
  address?: UserAddress | undefined
  client_user_id: string
  date_of_birth?: (string | null) | undefined
  email_address?: string | undefined
  email_address_verified_time?: (string | null) | undefined
  id_number?: UserIDNumber | undefined
  legal_name?: string | undefined
  name?: { family_name: FamilyNameField; given_name: GivenNameField } | undefined
  phone_number?: string | undefined
  phone_number_verified_time?: (string | null) | undefined
  ssn?: string | undefined
}
type LinkTokenCreateRequest = {
  access_token?: string | undefined
  account_filters?: LinkTokenAccountFilters | undefined
  additional_consented_products?: Products[] | undefined
  android_package_name?: string | undefined
  auth?: LinkTokenCreateRequestAuth | undefined
  client_id?: APIClientID | undefined
  client_name: string
  country_codes: CountryCode[]
  deposit_switch?: LinkTokenCreateRequestDepositSwitch | undefined
  employment?: LinkTokenCreateRequestEmployment | undefined
  eu_config?: LinkTokenEUConfig | undefined
  identity_verification?: LinkTokenCreateRequestIdentityVerification | undefined
  income_verification?: LinkTokenCreateRequestIncomeVerification | undefined
  institution_data?: LinkTokenCreateInstitutionData | undefined
  institution_id?: string | undefined
  investments?: LinkTokenInvestments | undefined
  language: string
  link_customization_name?: string | undefined
  payment_initiation?: LinkTokenCreateRequestPaymentInitiation | undefined
  products?: Products[] | undefined
  redirect_uri?: string | undefined
  secret?: APISecret | undefined
  transfer?: LinkTokenCreateRequestTransfer | undefined
  update?: LinkTokenCreateRequestUpdate | undefined
  user: LinkTokenCreateRequestUser
  user_token?: string | undefined
  webhook?: string | undefined
}
type LinkTokenCreateResponse = { expiration: string; link_token: string; request_id: RequestID }
type LinkTokenGetRequest = {
  client_id?: APIClientID | undefined
  link_token: string
  secret?: APISecret | undefined
}
type AccountFiltersResponse = {
  credit?: CreditFilter | undefined
  depository?: DepositoryFilter | undefined
  investment?: InvestmentFilter | undefined
  loan?: LoanFilter | undefined
}
type LinkTokenGetMetadataResponse = {
  account_filters?: AccountFiltersResponse | undefined
  client_name: string | null
  country_codes: CountryCode[]
  initial_products: Products[]
  institution_data?: LinkTokenCreateInstitutionData | undefined
  language: string | null
  redirect_uri: string | null
  webhook: string | null
}
type LinkTokenGetResponse = {
  created_at: string | null
  expiration: string | null
  link_token: string
  metadata: LinkTokenGetMetadataResponse
  request_id: RequestID
}
type LinkDeliveryDeliveryMethod = 'SMS' | 'EMAIL'
type LinkDeliveryCommunicationMethod = {
  address?: string | undefined
  method?: LinkDeliveryDeliveryMethod | undefined
}
type LinkDeliveryCreateRequest = {
  client_id?: APIClientID | undefined
  communication_methods: LinkDeliveryCommunicationMethod[]
  link_token: string
  secret?: APISecret | undefined
}
type LinkDeliveryCreateResponse = {
  link_delivery_session_id: string
  link_delivery_url: string
  request_id: RequestID
}
type LinkDeliveryGetRequest = {
  client_id?: APIClientID | undefined
  link_delivery_session_id: string
  secret?: APISecret | undefined
}
type LinkDeliverySessionStatus = 'CREATED' | 'OPENED' | 'COMPLETED' | 'EXPIRED'
type LinkDeliveryGetResponse = {
  access_tokens?: (AccessToken[] | null) | undefined
  completed_at?: (string | null) | undefined
  created_at: string
  item_ids?: (ItemId[] | null) | undefined
  request_id: RequestID
  status: LinkDeliverySessionStatus
}
type PartnerEndCustomerAddress = {
  city?: string | undefined
  country_code?: string | undefined
  postal_code?: string | undefined
  region?: string | undefined
  street?: string | undefined
}
type PartnerEndCustomerAssetsUnderManagement = { amount: number; iso_currency_code: string }
type PartnerEndCustomerBillingContact = {
  email?: string | undefined
  family_name?: string | undefined
  given_name?: string | undefined
}
type PartnerEndCustomerCustomerSupportInfo = {
  contact_url?: string | undefined
  email?: string | undefined
  link_update_url?: string | undefined
  phone_number?: string | undefined
}
type PartnerEndCustomerTechnicalContact = {
  email?: string | undefined
  family_name?: string | undefined
  given_name?: string | undefined
}
type PartnerCustomerCreateRequest = {
  address: PartnerEndCustomerAddress
  application_name: string
  assets_under_management?: PartnerEndCustomerAssetsUnderManagement | undefined
  billing_contact?: PartnerEndCustomerBillingContact | undefined
  client_id?: APIClientID | undefined
  company_name: string
  create_link_customization?: boolean | undefined
  customer_support_info?: PartnerEndCustomerCustomerSupportInfo | undefined
  is_bank_addendum_completed: boolean
  is_diligence_attested: boolean
  legal_entity_name: string
  logo?: string | undefined
  products: Products[]
  redirect_uris?: string[] | undefined
  secret?: APISecret | undefined
  technical_contact?: PartnerEndCustomerTechnicalContact | undefined
  website: string
}
type PartnerEndCustomerStatus = 'UNDER_REVIEW' | 'PENDING_ENABLEMENT' | 'ACTIVE' | 'DENIED'
type PartnerEndCustomerSecrets = { development?: string | undefined; sandbox?: string | undefined }
type PartnerEndCustomerWithSecrets = {
  client_id?: string | undefined
  company_name?: string | undefined
  status?: PartnerEndCustomerStatus | undefined
  secrets?: PartnerEndCustomerSecrets | undefined
}
type PartnerCustomerCreateResponse = {
  end_customer?: PartnerEndCustomerWithSecrets | undefined
  request_id?: RequestID | undefined
}
type PartnerCustomerEnableRequest = {
  client_id?: APIClientID | undefined
  end_customer_client_id: string
  secret?: APISecret | undefined
}
type PartnerCustomerEnableResponse = {
  production_secret?: string | undefined
  request_id?: RequestID | undefined
}
type PartnerCustomerGetRequest = {
  client_id?: APIClientID | undefined
  end_customer_client_id: string
  secret?: APISecret | undefined
}
type PartnerEndCustomer = {
  client_id?: string | undefined
  company_name?: string | undefined
  status?: PartnerEndCustomerStatus | undefined
}
type PartnerCustomerGetResponse = {
  end_customer?: PartnerEndCustomer | undefined
  request_id?: RequestID | undefined
}
type PartnerCustomerOAuthInstitutionsGetRequest = {
  client_id?: APIClientID | undefined
  end_customer_client_id: string
  secret?: APISecret | undefined
}
type PartnerEndCustomerFlowdownStatus = 'NOT_STARTED' | 'IN_REVIEW' | 'NEGOTIATION' | 'COMPLETE'
type PartnerEndCustomerOAuthInstitutionApplicationStatus =
  | 'NOT_STARTED'
  | 'PROCESSING'
  | 'APPROVED'
  | 'ENABLED'
  | 'ATTENTION_REQUIRED'
type PartnerEndCustomerOAuthInstitutionEnvironments = {
  development?: PartnerEndCustomerOAuthInstitutionApplicationStatus | undefined
  production?: PartnerEndCustomerOAuthInstitutionApplicationStatus | undefined
}
type PartnerEndCustomerOAuthInstitution = {
  classic_disablement_date?: (string | null) | undefined
  environments?: PartnerEndCustomerOAuthInstitutionEnvironments | undefined
  institution_id?: string | undefined
  name?: string | undefined
  production_enablement_date?: (string | null) | undefined
}
type PartnerEndCustomerQuestionnaireStatus = 'NOT_STARTED' | 'RECEIVED' | 'COMPLETE'
type PartnerCustomerOAuthInstitutionsGetResponse = {
  flowdown_status?: PartnerEndCustomerFlowdownStatus | undefined
  institutions?: PartnerEndCustomerOAuthInstitution[] | undefined
  questionnaire_status?: PartnerEndCustomerQuestionnaireStatus | undefined
  request_id?: RequestID | undefined
}
type PartnerCustomerRemoveRequest = {
  client_id?: APIClientID | undefined
  end_customer_client_id: string
  secret?: APISecret | undefined
}
type PartnerCustomerRemoveResponse = { request_id?: RequestID | undefined }
type PaymentAmountCurrency = 'GBP' | 'EUR' | 'PLN' | 'SEK' | 'DKK' | 'NOK'
type PaymentConsentMaxPaymentAmount = { currency: PaymentAmountCurrency; value: number }
type PaymentConsentPeriodicAlignment = 'CALENDAR' | 'CONSENT'
type PaymentConsentPeriodicAmountAmount = { currency: PaymentAmountCurrency; value: number }
type PaymentConsentPeriodicInterval = 'DAY' | 'WEEK' | 'MONTH' | 'YEAR'
type PaymentConsentPeriodicAmount = {
  alignment: PaymentConsentPeriodicAlignment
  amount: PaymentConsentPeriodicAmountAmount
  interval: PaymentConsentPeriodicInterval
}
type PaymentConsentValidDateTime = {
  from?: (string | null) | undefined
  to?: (string | null) | undefined
} | null
type PaymentInitiationConsentConstraints = {
  max_payment_amount: PaymentConsentMaxPaymentAmount
  periodic_amounts: PaymentConsentPeriodicAmount[]
  valid_date_time?: PaymentConsentValidDateTime | undefined
}
type PaymentInitiationOptionalRestrictionBacs = {
  account?: string | undefined
  sort_code?: string | undefined
}
type ExternalPaymentInitiationConsentOptions = {
  bacs?: PaymentInitiationOptionalRestrictionBacs | undefined
  iban?: (string | null) | undefined
  request_refund_details?: (boolean | null) | undefined
} | null
type PaymentInitiationConsentScope = 'ME_TO_ME' | 'EXTERNAL'
type PaymentInitiationConsentCreateRequest = {
  client_id?: APIClientID | undefined
  constraints: PaymentInitiationConsentConstraints
  options?: ExternalPaymentInitiationConsentOptions | undefined
  recipient_id: string
  reference: string
  scopes: PaymentInitiationConsentScope[]
  secret?: APISecret | undefined
}
type PaymentInitiationConsentStatus =
  | 'UNAUTHORISED'
  | 'AUTHORISED'
  | 'REVOKED'
  | 'REJECTED'
  | 'EXPIRED'
type PaymentInitiationConsentCreateResponse = {
  consent_id: string
  request_id: RequestID
  status: PaymentInitiationConsentStatus
}
type PaymentInitiationConsentGetRequest = {
  client_id?: APIClientID | undefined
  consent_id: string
  secret?: APISecret | undefined
}
type PaymentInitiationConsentGetResponse = {
  consent_id: string
  constraints: PaymentInitiationConsentConstraints
  created_at: string
  recipient_id: string
  reference: string
  scopes: PaymentInitiationConsentScope[]
  status: PaymentInitiationConsentStatus
  request_id?: RequestID | undefined
}
type PaymentAmount = { currency: PaymentAmountCurrency; value: number }
type ConsentPaymentIdempotencyKey = string
type PaymentInitiationConsentPaymentExecuteRequest = {
  amount: PaymentAmount
  client_id?: APIClientID | undefined
  consent_id: string
  idempotency_key: ConsentPaymentIdempotencyKey
  secret?: APISecret | undefined
}
type PaymentInitiationPaymentStatus =
  | 'PAYMENT_STATUS_INPUT_NEEDED'
  | 'PAYMENT_STATUS_PROCESSING'
  | 'PAYMENT_STATUS_INITIATED'
  | 'PAYMENT_STATUS_COMPLETED'
  | 'PAYMENT_STATUS_INSUFFICIENT_FUNDS'
  | 'PAYMENT_STATUS_FAILED'
  | 'PAYMENT_STATUS_BLOCKED'
  | 'PAYMENT_STATUS_UNKNOWN'
  | 'PAYMENT_STATUS_EXECUTED'
  | 'PAYMENT_STATUS_SETTLED'
  | 'PAYMENT_STATUS_AUTHORISING'
  | 'PAYMENT_STATUS_CANCELLED'
  | 'PAYMENT_STATUS_ESTABLISHED'
  | 'PAYMENT_STATUS_REJECTED'
type PaymentInitiationConsentPaymentExecuteResponse = {
  payment_id: string
  request_id: RequestID
  status: PaymentInitiationPaymentStatus
}
type PaymentInitiationConsentRevokeRequest = {
  client_id?: APIClientID | undefined
  consent_id: string
  secret?: APISecret | undefined
}
type PaymentInitiationConsentRevokeResponse = { request_id?: RequestID | undefined }
type PaymentScheme =
  | null
  | 'LOCAL_DEFAULT'
  | 'LOCAL_INSTANT'
  | 'SEPA_CREDIT_TRANSFER'
  | 'SEPA_CREDIT_TRANSFER_INSTANT'
type ExternalPaymentOptions = {
  bacs?: PaymentInitiationOptionalRestrictionBacs | undefined
  iban?: (string | null) | undefined
  request_refund_details?: (boolean | null) | undefined
  scheme?: PaymentScheme | undefined
} | null
type ExternalPaymentScheduleRequest = {
  adjusted_start_date?: (string | null) | undefined
  end_date?: (string | null) | undefined
  interval?: PaymentScheduleInterval | undefined
  interval_execution_day?: number | undefined
  start_date?: string | undefined
}
type PaymentInitiationPaymentCreateRequest = {
  amount: PaymentAmount
  client_id?: APIClientID | undefined
  options?: ExternalPaymentOptions | undefined
  recipient_id: string
  reference: string
  schedule?: ExternalPaymentScheduleRequest | undefined
  secret?: APISecret | undefined
}
type PaymentInitiationPaymentCreateStatus = 'PAYMENT_STATUS_INPUT_NEEDED'
type PaymentInitiationPaymentCreateResponse = {
  payment_id: string
  request_id: RequestID
  status: PaymentInitiationPaymentCreateStatus
}
type PaymentInitiationPaymentGetRequest = {
  client_id?: APIClientID | undefined
  payment_id: string
  secret?: APISecret | undefined
}
type PaymentAmountRefunded = { currency: PaymentAmountCurrency; value: number }
type SenderBACSNullable = { account?: string | undefined; sort_code?: string | undefined }
type RecipientBACSNullable = { account?: string | undefined; sort_code?: string | undefined }
type ExternalPaymentRefundDetails = {
  bacs: RecipientBACSNullable
  iban: string | null
  name: string
} | null
type ExternalPaymentScheduleGet = {
  adjusted_start_date?: (string | null) | undefined
  end_date?: (string | null) | undefined
  interval?: PaymentScheduleInterval | undefined
  interval_execution_day?: number | undefined
  start_date?: string | undefined
}
type PaymentInitiationPaymentGetResponse = {
  adjusted_reference?: (string | null) | undefined
  adjusted_scheme?: PaymentScheme | undefined
  amount: PaymentAmount
  amount_refunded?: PaymentAmountRefunded | undefined
  bacs: SenderBACSNullable
  consent_id?: (string | null) | undefined
  iban: string | null
  last_status_update: string
  payment_id: string
  recipient_id: string
  reference: string
  refund_details?: ExternalPaymentRefundDetails | undefined
  refund_ids?: (string[] | null) | undefined
  schedule?: ExternalPaymentScheduleGet | undefined
  scheme?: PaymentScheme | undefined
  status: PaymentInitiationPaymentStatus
  transaction_id?: (string | null) | undefined
  wallet_id?: (string | null) | undefined
  request_id?: RequestID | undefined
}
type PaymentInitiationPaymentListRequest = {
  client_id?: APIClientID | undefined
  consent_id?: (string | null) | undefined
  count?: (number | null) | undefined
  cursor?: (string | null) | undefined
  secret?: APISecret | undefined
}
type PaymentInitiationPayment = {
  adjusted_reference?: (string | null) | undefined
  adjusted_scheme?: PaymentScheme | undefined
  amount: PaymentAmount
  amount_refunded?: PaymentAmountRefunded | undefined
  bacs: SenderBACSNullable
  consent_id?: (string | null) | undefined
  iban: string | null
  last_status_update: string
  payment_id: string
  recipient_id: string
  reference: string
  refund_details?: ExternalPaymentRefundDetails | undefined
  refund_ids?: (string[] | null) | undefined
  schedule?: ExternalPaymentScheduleGet | undefined
  scheme?: PaymentScheme | undefined
  status: PaymentInitiationPaymentStatus
  transaction_id?: (string | null) | undefined
  wallet_id?: (string | null) | undefined
}
type PaymentInitiationPaymentListResponse = {
  next_cursor: string | null
  payments: PaymentInitiationPayment[]
  request_id: RequestID
}
type PaymentAmountToRefund = { currency: PaymentAmountCurrency; value: number }
type WalletTransactionIdempotencyKey = string
type PaymentInitiationPaymentReverseRequest = {
  amount?: PaymentAmountToRefund | undefined
  client_id?: APIClientID | undefined
  idempotency_key: WalletTransactionIdempotencyKey
  payment_id: string
  reference: string
  secret?: APISecret | undefined
}
type WalletTransactionStatus =
  | 'AUTHORISING'
  | 'INITIATED'
  | 'EXECUTED'
  | 'SETTLED'
  | 'BLOCKED'
  | 'FAILED'
type PaymentInitiationPaymentReverseResponse = {
  refund_id: string
  request_id: RequestID
  status: WalletTransactionStatus
}
type PaymentInitiationPaymentTokenCreateRequest = {
  client_id?: APIClientID | undefined
  payment_id: string
  secret?: APISecret | undefined
}
type PaymentInitiationPaymentTokenCreateResponse = {
  payment_token: string
  payment_token_expiration_time: string
  request_id: RequestID
}
type PaymentInitiationAddress = {
  city: string
  country: string
  postal_code: string
  street: string[]
} | null
type PaymentInitiationRecipientCreateRequest = {
  address?: PaymentInitiationAddress | undefined
  bacs?: RecipientBACSNullable | undefined
  client_id?: APIClientID | undefined
  iban?: (string | null) | undefined
  name: string
  secret?: APISecret | undefined
}
type PaymentInitiationRecipientCreateResponse = { recipient_id: string; request_id: RequestID }
type PaymentInitiationRecipientGetRequest = {
  client_id?: APIClientID | undefined
  recipient_id: string
  secret?: APISecret | undefined
}
type PaymentInitiationRecipientGetResponse = {
  address?: PaymentInitiationAddress | undefined
  bacs?: RecipientBACSNullable | undefined
  iban?: (string | null) | undefined
  name: string
  recipient_id: string
  request_id?: RequestID | undefined
}
type PaymentInitiationRecipientListRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
}
type PaymentInitiationRecipient = {
  address?: PaymentInitiationAddress | undefined
  bacs?: RecipientBACSNullable | undefined
  iban?: (string | null) | undefined
  name: string
  recipient_id: string
}
type PaymentInitiationRecipientListResponse = {
  recipients: PaymentInitiationRecipient[]
  request_id: RequestID
}
type PaymentProfileCreateRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
}
type PaymentProfileToken = string
type PaymentProfileCreateResponse = {
  payment_profile_token: PaymentProfileToken
  request_id: RequestID
}
type PaymentProfileGetRequest = {
  client_id?: APIClientID | undefined
  payment_profile_token: PaymentProfileToken
  secret?: APISecret | undefined
}
type PaymentProfileStatus = 'PENDING' | 'READY' | 'REMOVED'
type PaymentProfileGetResponse = {
  created_at: string
  deleted_at: string | null
  request_id: RequestID
  status: PaymentProfileStatus
  updated_at: string
}
type PaymentProfileRemoveRequest = {
  client_id?: APIClientID | undefined
  payment_profile_token: PaymentProfileToken
  secret?: APISecret | undefined
}
type PaymentProfileRemoveResponse = { request_id: RequestID }
type ProcessorApexProcessorTokenCreateRequest = {
  access_token: AccessToken
  account_id: string
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
}
type ProcessorTokenCreateResponse = { processor_token: string; request_id: RequestID }
type ProcessorToken = string
type ProcessorAuthGetRequest = {
  client_id?: APIClientID | undefined
  processor_token: ProcessorToken
  secret?: APISecret | undefined
}
type NumbersACHNullable = {
  account: string
  account_id: string
  can_transfer_in?: (boolean | null) | undefined
  can_transfer_out?: (boolean | null) | undefined
  routing: string
  wire_routing: string | null
}
type NumbersBACSNullable = { account: string; account_id: string; sort_code: string }
type NumbersEFTNullable = {
  account: string
  account_id: string
  branch: string
  institution: string
}
type NumbersInternationalNullable = { account_id: string; bic: string; iban: string }
type ProcessorNumber = {
  ach?: NumbersACHNullable | undefined
  bacs?: NumbersBACSNullable | undefined
  eft?: NumbersEFTNullable | undefined
  international?: NumbersInternationalNullable | undefined
}
type ProcessorAuthGetResponse = {
  account: AccountBase
  numbers: ProcessorNumber
  request_id: RequestID
}
type ProcessorBalanceGetRequestOptions = {
  min_last_updated_datetime?: MinLastUpdatedDatetime | undefined
}
type ProcessorBalanceGetRequest = {
  client_id?: APIClientID | undefined
  options?: ProcessorBalanceGetRequestOptions | undefined
  processor_token: ProcessorToken
  secret?: APISecret | undefined
}
type ProcessorBalanceGetResponse = { account: AccountBase; request_id: RequestID }
type ProcessorBankTransferCreateRequest = {
  ach_class?: ACHClass | undefined
  amount: BankTransferAmount
  client_id?: APIClientID | undefined
  custom_tag?: (string | null) | undefined
  description: string
  idempotency_key: BankTransferIdempotencyKey
  iso_currency_code: string
  metadata?: BankTransferMetadata | undefined
  network: BankTransferNetwork
  origination_account_id?: (string | null) | undefined
  processor_token: ProcessorToken
  secret?: APISecret | undefined
  type: BankTransferType
  user: BankTransferUser
}
type ProcessorBankTransferCreateResponse = { bank_transfer: BankTransfer; request_id: RequestID }
type ProcessorIdentityGetRequest = {
  client_id?: APIClientID | undefined
  processor_token: ProcessorToken
  secret?: APISecret | undefined
}
type ProcessorIdentityGetResponse = { account: AccountIdentity; request_id: RequestID }
type SignalDecisionOutcome =
  | 'APPROVE'
  | 'REVIEW'
  | 'REJECT'
  | 'TAKE_OTHER_RISK_MEASURES'
  | 'NOT_EVALUATED'
type SignalPaymentMethod =
  | 'SAME_DAY_ACH'
  | 'NEXT_DAY_ACH'
  | 'STANDARD_ACH'
  | 'REAL_TIME_PAYMENTS'
  | 'DEBIT_CARD'
  | 'MULTIPLE_PAYMENT_METHODS'
type ProcessorSignalDecisionReportRequest = {
  amount_instantly_available?: (number | null) | undefined
  client_id?: APIClientID | undefined
  client_transaction_id: string
  days_funds_on_hold?: (number | null) | undefined
  decision_outcome?: SignalDecisionOutcome | undefined
  initiated: boolean
  payment_method?: SignalPaymentMethod | undefined
  processor_token: ProcessorToken
  secret?: APISecret | undefined
}
type ProcessorSignalDecisionReportResponse = { request_id: RequestID }
type SignalDevice = {
  ip_address?: (string | null) | undefined
  user_agent?: (string | null) | undefined
}
type SignalPersonName = {
  family_name?: (string | null) | undefined
  given_name?: (string | null) | undefined
  middle_name?: (string | null) | undefined
  prefix?: (string | null) | undefined
  suffix?: (string | null) | undefined
} | null
type SignalUser = {
  address?: SignalAddressData | undefined
  email_address?: (string | null) | undefined
  name?: SignalPersonName | undefined
  phone_number?: (string | null) | undefined
}
type ProcessorSignalEvaluateRequest = {
  amount: number
  client_id?: APIClientID | undefined
  client_transaction_id: string
  client_user_id?: string | undefined
  default_payment_method?: (string | null) | undefined
  device?: SignalDevice | undefined
  is_recurring?: (boolean | null) | undefined
  processor_token: ProcessorToken
  secret?: APISecret | undefined
  user?: SignalUser | undefined
  user_present?: (boolean | null) | undefined
}
type SignalEvaluateCoreAttributes = {
  address_change_count_28d?: (number | null) | undefined
  address_change_count_90d?: (number | null) | undefined
  available_balance?: (number | null) | undefined
  balance_last_updated?: (string | null) | undefined
  credit_transactions_count_10d?: (number | null) | undefined
  credit_transactions_count_30d?: (number | null) | undefined
  credit_transactions_count_60d?: (number | null) | undefined
  credit_transactions_count_90d?: (number | null) | undefined
  current_balance?: (number | null) | undefined
  days_since_first_plaid_connection?: (number | null) | undefined
  days_with_negative_balance_count_90d?: (number | null) | undefined
  debit_transactions_count_10d?: (number | null) | undefined
  debit_transactions_count_30d?: (number | null) | undefined
  debit_transactions_count_60d?: (number | null) | undefined
  debit_transactions_count_90d?: (number | null) | undefined
  email_change_count_28d?: (number | null) | undefined
  email_change_count_90d?: (number | null) | undefined
  failed_plaid_non_oauth_authentication_attempts_count_30d?: (number | null) | undefined
  failed_plaid_non_oauth_authentication_attempts_count_3d?: (number | null) | undefined
  failed_plaid_non_oauth_authentication_attempts_count_7d?: (number | null) | undefined
  is_savings_or_money_market_account?: (boolean | null) | undefined
  nsf_overdraft_transactions_count_30d?: (number | null) | undefined
  nsf_overdraft_transactions_count_60d?: (number | null) | undefined
  nsf_overdraft_transactions_count_7d?: (number | null) | undefined
  nsf_overdraft_transactions_count_90d?: (number | null) | undefined
  p10_eod_balance_30d?: (number | null) | undefined
  p10_eod_balance_31d_to_60d?: (number | null) | undefined
  p10_eod_balance_60d?: (number | null) | undefined
  p10_eod_balance_61d_to_90d?: (number | null) | undefined
  p10_eod_balance_90d?: (number | null) | undefined
  p50_credit_transactions_amount_28d?: (number | null) | undefined
  p50_debit_transactions_amount_28d?: (number | null) | undefined
  p50_eod_balance_30d?: (number | null) | undefined
  p50_eod_balance_31d_to_60d?: (number | null) | undefined
  p50_eod_balance_60d?: (number | null) | undefined
  p50_eod_balance_61d_to_90d?: (number | null) | undefined
  p50_eod_balance_90d?: (number | null) | undefined
  p90_eod_balance_30d?: (number | null) | undefined
  p90_eod_balance_31d_to_60d?: (number | null) | undefined
  p90_eod_balance_60d?: (number | null) | undefined
  p90_eod_balance_61d_to_90d?: (number | null) | undefined
  p90_eod_balance_90d?: (number | null) | undefined
  p95_credit_transactions_amount_28d?: (number | null) | undefined
  p95_debit_transactions_amount_28d?: (number | null) | undefined
  phone_change_count_28d?: (number | null) | undefined
  phone_change_count_90d?: (number | null) | undefined
  plaid_connections_count_30d?: (number | null) | undefined
  plaid_connections_count_7d?: (number | null) | undefined
  plaid_non_oauth_authentication_attempts_count_30d?: (number | null) | undefined
  plaid_non_oauth_authentication_attempts_count_3d?: (number | null) | undefined
  plaid_non_oauth_authentication_attempts_count_7d?: (number | null) | undefined
  total_credit_transactions_amount_10d?: (number | null) | undefined
  total_credit_transactions_amount_30d?: (number | null) | undefined
  total_credit_transactions_amount_60d?: (number | null) | undefined
  total_credit_transactions_amount_90d?: (number | null) | undefined
  total_debit_transactions_amount_10d?: (number | null) | undefined
  total_debit_transactions_amount_30d?: (number | null) | undefined
  total_debit_transactions_amount_60d?: (number | null) | undefined
  total_debit_transactions_amount_90d?: (number | null) | undefined
  total_plaid_connections_count?: (number | null) | undefined
  transactions_last_updated?: (string | null) | undefined
  unauthorized_transactions_count_30d?: (number | null) | undefined
  unauthorized_transactions_count_60d?: (number | null) | undefined
  unauthorized_transactions_count_7d?: (number | null) | undefined
  unauthorized_transactions_count_90d?: (number | null) | undefined
}
type BankInitiatedRiskTier = number
type SignalScore = number
type BankInitiatedReturnRisk = { risk_tier: BankInitiatedRiskTier; score: SignalScore }
type CustomerInitiatedRiskTier = number
type CustomerInitiatedReturnRisk = { risk_tier: CustomerInitiatedRiskTier; score: SignalScore }
type SignalScores = {
  bank_initiated_return_risk?: BankInitiatedReturnRisk | undefined
  customer_initiated_return_risk?: CustomerInitiatedReturnRisk | undefined
}
type ProcessorSignalEvaluateResponse = {
  core_attributes?: SignalEvaluateCoreAttributes | undefined
  request_id: RequestID
  scores: SignalScores
}
type ProcessorSignalReturnReportRequest = {
  client_id?: APIClientID | undefined
  client_transaction_id: string
  processor_token: ProcessorToken
  return_code: string
  returned_at?: (string | null) | undefined
  secret?: APISecret | undefined
}
type ProcessorSignalReturnReportResponse = { request_id: RequestID }
type ProcessorStripeBankAccountTokenCreateRequest = {
  access_token: AccessToken
  account_id: string
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
}
type ProcessorStripeBankAccountTokenCreateResponse = {
  request_id: RequestID
  stripe_bank_account_token: string
}
type ProcessorTokenCreateRequest = {
  access_token: AccessToken
  account_id: string
  client_id?: APIClientID | undefined
  processor:
    | 'dwolla'
    | 'galileo'
    | 'modern_treasury'
    | 'ocrolus'
    | 'prime_trust'
    | 'vesta'
    | 'drivewealth'
    | 'vopay'
    | 'achq'
    | 'check'
    | 'checkbook'
    | 'circle'
    | 'sila_money'
    | 'rize'
    | 'svb_api'
    | 'unit'
    | 'wyre'
    | 'lithic'
    | 'alpaca'
    | 'astra'
    | 'moov'
    | 'treasury_prime'
    | 'marqeta'
    | 'checkout'
    | 'solid'
    | 'highnote'
    | 'apex_clearing'
    | 'gusto'
    | 'adyen'
    | 'atomic'
    | 'i2c'
    | 'wepay'
    | 'riskified'
  secret?: APISecret | undefined
}
type SandboxBankTransferFireWebhookRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  webhook: string
}
type SandboxBankTransferFireWebhookResponse = { request_id: RequestID }
type SandboxBankTransferSimulateRequest = {
  bank_transfer_id: BankTransferID
  client_id?: APIClientID | undefined
  event_type: string
  failure_reason?: BankTransferFailure | undefined
  secret?: APISecret | undefined
}
type SandboxBankTransferSimulateResponse = { request_id: RequestID }
type UserId = string
type SandboxIncomeFireWebhookRequest = {
  client_id?: APIClientID | undefined
  item_id: string
  secret?: APISecret | undefined
  user_id?: UserId | undefined
  verification_status:
    | 'VERIFICATION_STATUS_PROCESSING_COMPLETE'
    | 'VERIFICATION_STATUS_PROCESSING_FAILED'
    | 'VERIFICATION_STATUS_PENDING_APPROVAL'
  webhook: string
}
type SandboxIncomeFireWebhookResponse = { request_id: RequestID }
type WebhookType =
  | 'AUTH'
  | 'HOLDINGS'
  | 'INVESTMENTS_TRANSACTIONS'
  | 'ITEM'
  | 'LIABILITIES'
  | 'TRANSACTIONS'
type SandboxItemFireWebhookRequest = {
  access_token: AccessToken
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  webhook_code:
    | 'DEFAULT_UPDATE'
    | 'NEW_ACCOUNTS_AVAILABLE'
    | 'AUTH_DATA_UPDATE'
    | 'RECURRING_TRANSACTIONS_UPDATE'
    | 'SYNC_UPDATES_AVAILABLE'
  webhook_type?: WebhookType | undefined
}
type SandboxItemFireWebhookResponse = { request_id: RequestID; webhook_fired: boolean }
type SandboxItemResetLoginRequest = {
  access_token: AccessToken
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
}
type SandboxItemResetLoginResponse = { request_id: RequestID; reset_login: boolean }
type SandboxItemSetVerificationStatusRequest = {
  access_token: AccessToken
  account_id: string
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  verification_status: 'automatically_verified' | 'verification_expired'
}
type SandboxItemSetVerificationStatusResponse = { request_id: RequestID }
type SandboxOauthSelectAccountsRequest = { accounts: string[]; oauth_state_id: string }
type SandboxOauthSelectAccountsResponse = { [x: string]: unknown }
type SandboxPaymentProfileResetLoginRequest = {
  client_id?: APIClientID | undefined
  payment_profile_token: PaymentProfileToken
  secret?: APISecret | undefined
}
type SandboxPaymentProfileResetLoginResponse = { request_id: RequestID; reset_login: boolean }
type SandboxOverridePassword = string | null
type SandboxOverrideUsername = string | null
type SandboxProcessorTokenCreateRequestOptions = {
  override_password?: SandboxOverridePassword | undefined
  override_username?: SandboxOverrideUsername | undefined
}
type SandboxProcessorTokenCreateRequest = {
  client_id?: APIClientID | undefined
  institution_id: string
  options?: SandboxProcessorTokenCreateRequestOptions | undefined
  secret?: APISecret | undefined
}
type SandboxProcessorTokenCreateResponse = { processor_token: string; request_id: RequestID }
type SandboxPublicTokenCreateRequestIncomeVerificationBankIncome = {
  days_requested?: number | undefined
}
type SandboxPublicTokenCreateRequestOptionsIncomeVerification = {
  bank_income?: SandboxPublicTokenCreateRequestIncomeVerificationBankIncome | undefined
  income_source_types?: IncomeVerificationSourceType[] | undefined
}
type SandboxPublicTokenCreateRequestOptionsTransactions = {
  end_date?: string | undefined
  start_date?: string | undefined
}
type SandboxPublicTokenCreateRequestOptions = {
  income_verification?: SandboxPublicTokenCreateRequestOptionsIncomeVerification | undefined
  override_password?: SandboxOverridePassword | undefined
  override_username?: SandboxOverrideUsername | undefined
  transactions?: SandboxPublicTokenCreateRequestOptionsTransactions | undefined
  webhook?: string | undefined
}
type SandboxPublicTokenCreateRequest = {
  client_id?: APIClientID | undefined
  initial_products: Products[]
  institution_id: string
  options?: SandboxPublicTokenCreateRequestOptions | undefined
  secret?: APISecret | undefined
  user_token?: UserToken | undefined
}
type SandboxPublicTokenCreateResponse = { public_token: string; request_id: RequestID }
type SandboxTransferFireWebhookRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  webhook: string
}
type SandboxTransferFireWebhookResponse = { request_id: RequestID }
type SandboxTransferRepaymentSimulateRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
}
type SandboxTransferRepaymentSimulateResponse = { request_id: RequestID }
type TransferFailure = {
  ach_return_code?: (string | null) | undefined
  description?: string | undefined
} | null
type TransferID = string
type SandboxTransferSimulateRequest = {
  client_id?: APIClientID | undefined
  event_type: string
  failure_reason?: TransferFailure | undefined
  secret?: APISecret | undefined
  transfer_id: TransferID
}
type SandboxTransferSimulateResponse = { request_id: RequestID }
type SandboxTransferSweepSimulateRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
}
type TransferFundingAccountIDResponse = string
type SimulatedTransferSweep = {
  amount: string
  created: string
  funding_account_id: TransferFundingAccountIDResponse
  id: string
  iso_currency_code: string
  settled: string | null
}
type SandboxTransferSweepSimulateResponse = {
  request_id: RequestID
  sweep?: SimulatedTransferSweep | undefined
}
type VirtualTime = string
type TransferTestClockID = string
type SandboxTransferTestClockAdvanceRequest = {
  client_id?: APIClientID | undefined
  new_virtual_time: VirtualTime
  secret?: APISecret | undefined
  test_clock_id: TransferTestClockID
}
type SandboxTransferTestClockAdvanceResponse = { request_id: RequestID }
type SandboxTransferTestClockCreateRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  virtual_time: VirtualTime
}
type TransferTestClock = { test_clock_id: TransferTestClockID; virtual_time: VirtualTime }
type SandboxTransferTestClockCreateResponse = {
  request_id: RequestID
  test_clock: TransferTestClock
}
type SandboxTransferTestClockGetRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  test_clock_id: TransferTestClockID
}
type SandboxTransferTestClockGetResponse = { request_id: RequestID; test_clock: TransferTestClock }
type SandboxTransferTestClockListRequest = {
  client_id?: APIClientID | undefined
  count?: (number | null) | undefined
  end_virtual_time?: (string | null) | undefined
  offset?: number | undefined
  secret?: APISecret | undefined
  start_virtual_time?: (string | null) | undefined
}
type SandboxTransferTestClockListResponse = {
  request_id: RequestID
  test_clocks: TransferTestClock[]
}
type SignalDecisionReportRequest = {
  amount_instantly_available?: (number | null) | undefined
  client_id?: APIClientID | undefined
  client_transaction_id: string
  days_funds_on_hold?: (number | null) | undefined
  decision_outcome?: SignalDecisionOutcome | undefined
  initiated: boolean
  payment_method?: SignalPaymentMethod | undefined
  secret?: APISecret | undefined
}
type SignalDecisionReportResponse = { request_id: RequestID }
type SignalEvaluateRequest = {
  access_token: AccessToken
  account_id: string
  amount: number
  client_id?: APIClientID | undefined
  client_transaction_id: string
  client_user_id?: string | undefined
  default_payment_method?: (string | null) | undefined
  device?: SignalDevice | undefined
  is_recurring?: (boolean | null) | undefined
  secret?: APISecret | undefined
  user?: SignalUser | undefined
  user_present?: (boolean | null) | undefined
}
type SignalEvaluateResponse = {
  core_attributes?: SignalEvaluateCoreAttributes | undefined
  request_id: RequestID
  scores: SignalScores
}
type SignalPrepareRequest = {
  access_token: AccessToken
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
}
type SignalPrepareResponse = { request_id: RequestID }
type SignalReturnReportRequest = {
  client_id?: APIClientID | undefined
  client_transaction_id: string
  return_code: string
  returned_at?: (string | null) | undefined
  secret?: APISecret | undefined
}
type SignalReturnReportResponse = { request_id: RequestID }
type TransactionsEnrichRequestOptions = { include_legacy_category?: boolean | undefined }
type EnrichTransactionDirection = 'INFLOW' | 'OUTFLOW'
type ClientProvidedTransactionLocation = {
  address?: string | undefined
  city?: string | undefined
  country?: string | undefined
  postal_code?: string | undefined
  region?: string | undefined
}
type ClientProvidedTransaction = {
  amount: number
  date_posted?: string | undefined
  description: string
  direction: EnrichTransactionDirection
  id: string
  iso_currency_code: string
  location?: ClientProvidedTransactionLocation | undefined
  mcc?: string | undefined
}
type TransactionsEnrichGetRequest = {
  account_type: string
  client_id?: APIClientID | undefined
  options?: TransactionsEnrichRequestOptions | undefined
  secret?: APISecret | undefined
  transactions: ClientProvidedTransaction[]
}
type Enrichments = {
  check_number?: (string | null) | undefined
  counterparties: Counterparty[]
  entity_id?: (string | null) | undefined
  legacy_category?: string[] | undefined
  legacy_category_id?: (string | null) | undefined
  location: Location
  logo_url: string | null
  merchant_name: string | null
  payment_channel: PaymentChannel
  personal_finance_category: PersonalFinanceCategory
  personal_finance_category_icon_url: string
  website: string | null
}
type ClientProvidedEnrichedTransaction = {
  amount: number
  description: string
  direction?: EnrichTransactionDirection | undefined
  enrichments: Enrichments
  id: string
  iso_currency_code: string
}
type TransactionsEnrichGetResponse = {
  enriched_transactions: ClientProvidedEnrichedTransaction[]
  request_id?: RequestID | undefined
}
type TransactionsGetRequestOptions = {
  account_ids?: string[] | undefined
  count?: number | undefined
  include_logo_and_counterparty_beta?: boolean | undefined
  include_original_description?: (boolean | null) | undefined
  include_personal_finance_category?: boolean | undefined
  include_personal_finance_category_beta?: boolean | undefined
  offset?: number | undefined
}
type TransactionsGetRequest = {
  access_token: AccessToken
  client_id?: APIClientID | undefined
  end_date: string
  options?: TransactionsGetRequestOptions | undefined
  secret?: APISecret | undefined
  start_date: string
}
type TransactionCounterparty = {
  logo_url: string | null
  name: string
  type: CounterpartyType
  website: string | null
}
type TransactionCode =
  | 'adjustment'
  | 'atm'
  | 'bank charge'
  | 'bill payment'
  | 'cash'
  | 'cashback'
  | 'cheque'
  | 'direct debit'
  | 'interest'
  | 'purchase'
  | 'standing order'
  | 'transfer'
  | null
type Transaction = {
  account_id: string
  account_owner?: (string | null) | undefined
  amount: number
  category?: (string[] | null) | undefined
  category_id?: (string | null) | undefined
  check_number?: (string | null) | undefined
  date: string
  iso_currency_code: string | null
  location?: Location | undefined
  logo_url?: (string | null) | undefined
  merchant_name?: (string | null) | undefined
  name?: string | undefined
  original_description?: (string | null) | undefined
  payment_meta?: PaymentMeta | undefined
  pending: boolean
  pending_transaction_id?: (string | null) | undefined
  transaction_id: string
  transaction_type?: 'digital' | 'place' | 'special' | 'unresolved' | undefined
  unofficial_currency_code: string | null
  website?: (string | null) | undefined
  authorized_date: string | null
  authorized_datetime: string | null
  counterparties?: TransactionCounterparty[] | undefined
  datetime: string | null
  payment_channel: 'online' | 'in store' | 'other'
  personal_finance_category?: PersonalFinanceCategory | undefined
  personal_finance_category_icon_url?: string | undefined
  transaction_code: TransactionCode
}
type TransactionsGetResponse = {
  accounts: AccountBase[]
  item: Item
  request_id: RequestID
  total_transactions: number
  transactions: Transaction[]
}
type TransactionsRecurringGetRequestOptions = {
  include_personal_finance_category?: boolean | undefined
}
type TransactionsRecurringGetRequest = {
  access_token: AccessToken
  account_ids: string[]
  client_id?: APIClientID | undefined
  options?: TransactionsRecurringGetRequestOptions | undefined
  secret?: APISecret | undefined
}
type TransactionStreamAmount = {
  amount?: number | undefined
  iso_currency_code?: (string | null) | undefined
  unofficial_currency_code?: (string | null) | undefined
}
type RecurringTransactionFrequency = 'UNKNOWN' | 'WEEKLY' | 'BIWEEKLY' | 'SEMI_MONTHLY' | 'MONTHLY'
type TransactionStreamStatus = 'UNKNOWN' | 'MATURE' | 'EARLY_DETECTION' | 'TOMBSTONED'
type TransactionStream = {
  account_id: string
  average_amount: TransactionStreamAmount
  category: string[]
  category_id: string
  description: string
  first_date: string
  frequency: RecurringTransactionFrequency
  is_active: boolean
  last_amount: TransactionStreamAmount
  last_date: string
  merchant_name: string | null
  personal_finance_category?: PersonalFinanceCategory | undefined
  status: TransactionStreamStatus
  stream_id: string
  transaction_ids: string[]
}
type TransactionsRecurringGetResponse = {
  inflow_streams: TransactionStream[]
  outflow_streams: TransactionStream[]
  request_id: RequestID
  updated_datetime: string
}
type TransactionsRefreshRequest = {
  access_token: AccessToken
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
}
type TransactionsRefreshResponse = { request_id: RequestID }
type TransactionsSyncRequestOptions = {
  include_logo_and_counterparty_beta?: boolean | undefined
  include_original_description?: (boolean | null) | undefined
  include_personal_finance_category?: boolean | undefined
}
type TransactionsSyncRequest = {
  access_token: AccessToken
  client_id?: APIClientID | undefined
  count?: number | undefined
  cursor?: string | undefined
  options?: TransactionsSyncRequestOptions | undefined
  secret?: APISecret | undefined
}
type RemovedTransaction = { transaction_id?: string | undefined }
type TransactionsSyncResponse = {
  added: Transaction[]
  has_more: boolean
  modified: Transaction[]
  next_cursor: string
  removed: RemovedTransaction[]
  request_id: RequestID
}
type TransferAccessToken = string
type TransferAccountID = string
type TransferAmount = string
type TransferAuthorizationDevice = {
  ip_address?: string | undefined
  user_agent?: string | undefined
}
type TransferFundingAccountIDRequest = string | null
type TransferAuthorizationIdempotencyKey = string | null
type TransferNetwork = 'ach' | 'same-day-ach' | 'rtp'
type TransferPaymentProfileToken = string
type TransferType = 'debit' | 'credit'
type TransferUserAddressInRequest = {
  city?: string | undefined
  country?: string | undefined
  postal_code?: string | undefined
  region?: string | undefined
  street?: string | undefined
}
type TransferAuthorizationUserInRequest = {
  address?: TransferUserAddressInRequest | undefined
  email_address?: string | undefined
  legal_name: string
  phone_number?: string | undefined
}
type TransferAuthorizationCreateRequest = {
  access_token?: TransferAccessToken | undefined
  account_id?: TransferAccountID | undefined
  ach_class?: ACHClass | undefined
  amount: TransferAmount
  beacon_session_id?: (string | null) | undefined
  client_id?: APIClientID | undefined
  device?: TransferAuthorizationDevice | undefined
  funding_account_id?: TransferFundingAccountIDRequest | undefined
  idempotency_key?: TransferAuthorizationIdempotencyKey | undefined
  iso_currency_code?: string | undefined
  network: TransferNetwork
  origination_account_id?: string | undefined
  originator_client_id?: (string | null) | undefined
  payment_profile_token?: TransferPaymentProfileToken | undefined
  secret?: APISecret | undefined
  type: TransferType
  user: TransferAuthorizationUserInRequest
  user_present?: (boolean | null) | undefined
  with_guarantee?: (boolean | null) | undefined
}
type TransferAuthorizationDecision = 'approved' | 'declined'
type TransferAuthorizationDecisionRationaleCode =
  | 'NSF'
  | 'RISK'
  | 'TRANSFER_LIMIT_REACHED'
  | 'MANUALLY_VERIFIED_ITEM'
  | 'ITEM_LOGIN_REQUIRED'
  | 'PAYMENT_PROFILE_LOGIN_REQUIRED'
  | 'ERROR'
  | 'MIGRATED_ACCOUNT_ITEM'
type TransferAuthorizationDecisionRationale = {
  code: TransferAuthorizationDecisionRationaleCode
  description: string
} | null
type TransferAuthorizationGuaranteeDecision = 'GUARANTEED' | 'NOT_GUARANTEED' | null
type TransferAuthorizationGuaranteeDecisionRationaleCode =
  | 'RETURN_BANK'
  | 'RETURN_CUSTOMER'
  | 'GUARANTEE_LIMIT_REACHED'
  | 'RISK_ESTIMATE_UNAVAILABLE'
  | 'REQUIRED_PARAM_MISSING'
type TransferAuthorizationGuaranteeDecisionRationale = {
  code: TransferAuthorizationGuaranteeDecisionRationaleCode
  description: string
} | null
type TransferAuthorizationID = string
type TransferUserAddressInResponse = {
  city: string | null
  country: string | null
  postal_code: string | null
  region: string | null
  street: string | null
} | null
type TransferUserInResponse = {
  address: TransferUserAddressInResponse
  email_address: string | null
  legal_name: string
  phone_number: string | null
}
type TransferAuthorizationProposedTransfer = {
  account_id?: string | undefined
  ach_class?: ACHClass | undefined
  amount: TransferAmount
  funding_account_id: TransferFundingAccountIDResponse
  iso_currency_code: string
  network: string
  origination_account_id: string
  originator_client_id: string | null
  type: TransferType
  user: TransferUserInResponse
}
type TransferAuthorization = {
  created: string
  decision: TransferAuthorizationDecision
  decision_rationale: TransferAuthorizationDecisionRationale
  guarantee_decision: TransferAuthorizationGuaranteeDecision
  guarantee_decision_rationale: TransferAuthorizationGuaranteeDecisionRationale
  id: TransferAuthorizationID
  proposed_transfer: TransferAuthorizationProposedTransfer
}
type TransferAuthorizationCreateResponse = {
  authorization: TransferAuthorization
  request_id: RequestID
}
type TransferCancelRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  transfer_id: TransferID
}
type TransferCancelResponse = { request_id: RequestID }
type TransferCapabilitiesGetRequest = {
  access_token?: TransferAccessToken | undefined
  account_id?: TransferAccountID | undefined
  client_id?: APIClientID | undefined
  payment_profile_token?: PaymentProfileToken | undefined
  secret?: APISecret | undefined
}
type TransferCapabilitiesGetRTP = { credit?: boolean | undefined }
type InstitutionSupportedNetworks = { rtp: TransferCapabilitiesGetRTP }
type TransferCapabilitiesGetResponse = {
  institution_supported_networks: InstitutionSupportedNetworks
  request_id: RequestID
}
type TransferCreateIdempotencyKey = string
type TransferMetadata = { [x: string]: string } | null
type TransferUserInRequestDeprecated = {
  address?: TransferUserAddressInRequest | undefined
  email_address?: string | undefined
  legal_name?: string | undefined
  phone_number?: string | undefined
} | null
type TransferCreateRequest = {
  access_token?: TransferAccessToken | undefined
  account_id?: TransferAccountID | undefined
  ach_class?: {} | undefined
  amount?: TransferAmount | undefined
  authorization_id: string
  client_id?: APIClientID | undefined
  description: string
  idempotency_key?: TransferCreateIdempotencyKey | undefined
  iso_currency_code?: string | undefined
  metadata?: TransferMetadata | undefined
  network?: {} | undefined
  origination_account_id?: (string | null) | undefined
  payment_profile_token?: TransferPaymentProfileToken | undefined
  secret?: APISecret | undefined
  type?: {} | undefined
  user?: TransferUserInRequestDeprecated | undefined
}
type TransferRefundAmount = string
type TransferRefundID = string
type TransferRefundStatus = 'pending' | 'posted' | 'cancelled' | 'failed'
type TransferIDForRefund = string
type TransferRefund = {
  amount: TransferRefundAmount
  created: string
  id: TransferRefundID
  status: TransferRefundStatus
  transfer_id: TransferIDForRefund
}
type TransferStatus = 'pending' | 'posted' | 'settled' | 'cancelled' | 'failed' | 'returned'
type TransferSweepStatus = null | 'unswept' | 'swept' | 'swept_settled' | 'return_swept'
type Transfer = {
  account_id?: string | undefined
  ach_class?: ACHClass | undefined
  amount: TransferAmount
  cancellable: boolean
  created: string
  description: string
  expected_settlement_date: string | null
  failure_reason: TransferFailure
  funding_account_id: TransferFundingAccountIDResponse
  guarantee_decision: TransferAuthorizationGuaranteeDecision
  guarantee_decision_rationale: TransferAuthorizationGuaranteeDecisionRationale
  id: TransferID
  iso_currency_code: string
  metadata: TransferMetadata
  network: TransferNetwork
  origination_account_id: string
  originator_client_id: string | null
  recurring_transfer_id: string | null
  refunds: TransferRefund[]
  standard_return_window: string | null
  status: TransferStatus
  sweep_status?: TransferSweepStatus | undefined
  type: TransferType
  unauthorized_return_window: string | null
  user: TransferUserInResponse
}
type TransferCreateResponse = { request_id: RequestID; transfer: Transfer }
type TransferEventType =
  | 'pending'
  | 'cancelled'
  | 'failed'
  | 'posted'
  | 'settled'
  | 'returned'
  | 'swept'
  | 'swept_settled'
  | 'return_swept'
type TransferEventListTransferType = 'debit' | 'credit' | null
type TransferEventListRequest = {
  account_id?: (string | null) | undefined
  client_id?: APIClientID | undefined
  count?: (number | null) | undefined
  end_date?: (string | null) | undefined
  event_types?: TransferEventType[] | undefined
  funding_account_id?: (string | null) | undefined
  offset?: (number | null) | undefined
  origination_account_id?: (string | null) | undefined
  originator_client_id?: (string | null) | undefined
  secret?: APISecret | undefined
  start_date?: (string | null) | undefined
  sweep_id?: string | undefined
  transfer_id?: (string | null) | undefined
  transfer_type?: TransferEventListTransferType | undefined
}
type TransferSweepAmount = string | null
type TransferSweepID = string | null
type TransferEvent = {
  account_id: string
  event_id: number
  event_type: TransferEventType
  failure_reason: TransferFailure
  funding_account_id: TransferFundingAccountIDResponse
  origination_account_id: string | null
  originator_client_id: string | null
  refund_id: string | null
  sweep_amount: TransferSweepAmount
  sweep_id: TransferSweepID
  timestamp: string
  transfer_amount: TransferAmount
  transfer_id: TransferID
  transfer_type: TransferType
}
type TransferEventListResponse = { request_id: RequestID; transfer_events: TransferEvent[] }
type TransferEventSyncRequest = {
  after_id: number
  client_id?: APIClientID | undefined
  count?: (number | null) | undefined
  secret?: APISecret | undefined
}
type TransferEventSyncResponse = { request_id: RequestID; transfer_events: TransferEvent[] }
type TransferGetRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  transfer_id: TransferID
}
type TransferGetResponse = { request_id: RequestID; transfer: Transfer }
type TransferIntentCreateMode = 'PAYMENT' | 'DISBURSEMENT'
type TransferIntentCreateNetwork = 'ach' | 'same-day-ach'
type TransferUserInRequest = {
  address?: TransferUserAddressInRequest | undefined
  email_address?: string | undefined
  legal_name: string
  phone_number?: string | undefined
}
type TransferIntentCreateRequest = {
  account_id?: (string | null) | undefined
  ach_class?: ACHClass | undefined
  amount: TransferAmount
  client_id?: APIClientID | undefined
  description: string
  funding_account_id?: TransferFundingAccountIDRequest | undefined
  iso_currency_code?: string | undefined
  metadata?: TransferMetadata | undefined
  mode: TransferIntentCreateMode
  network?: TransferIntentCreateNetwork | undefined
  origination_account_id?: (string | null) | undefined
  require_guarantee?: (boolean | null) | undefined
  secret?: APISecret | undefined
  user: TransferUserInRequest
}
type TransferIntentStatus = 'PENDING' | 'SUCCEEDED' | 'FAILED'
type TransferIntentCreate = {
  account_id?: (string | null) | undefined
  ach_class?: ACHClass | undefined
  amount: TransferAmount
  created: string
  description: string
  funding_account_id: TransferFundingAccountIDResponse
  id: string
  iso_currency_code: string
  metadata?: TransferMetadata | undefined
  mode: TransferIntentCreateMode
  network?: TransferIntentCreateNetwork | undefined
  origination_account_id: string
  require_guarantee?: (boolean | null) | undefined
  status: TransferIntentStatus
  user: TransferUserInResponse
}
type TransferIntentCreateResponse = { request_id: RequestID; transfer_intent: TransferIntentCreate }
type TransferIntentGetRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  transfer_intent_id: string
}
type TransferIntentAuthorizationDecision = 'APPROVED' | 'DECLINED'
type TransferIntentGetFailureReason = {
  error_code?: string | undefined
  error_message?: string | undefined
  error_type?: string | undefined
} | null
type TransferIntentGet = {
  account_id?: (string | null) | undefined
  ach_class?: ACHClass | undefined
  amount: TransferAmount
  authorization_decision: TransferIntentAuthorizationDecision
  authorization_decision_rationale: TransferAuthorizationDecisionRationale
  created: string
  description: string
  failure_reason: TransferIntentGetFailureReason
  funding_account_id: TransferFundingAccountIDResponse
  guarantee_decision: TransferAuthorizationGuaranteeDecision
  guarantee_decision_rationale: TransferAuthorizationGuaranteeDecisionRationale
  id: string
  iso_currency_code: string
  metadata?: TransferMetadata | undefined
  mode: TransferIntentCreateMode
  network?: TransferIntentCreateNetwork | undefined
  origination_account_id: string
  require_guarantee?: (boolean | null) | undefined
  status: TransferIntentStatus
  transfer_id: string | null
  user: TransferUserInResponse
}
type TransferIntentGetResponse = { request_id: RequestID; transfer_intent: TransferIntentGet }
type TransferListRequest = {
  client_id?: APIClientID | undefined
  count?: number | undefined
  end_date?: (string | null) | undefined
  funding_account_id?: (string | null) | undefined
  offset?: number | undefined
  origination_account_id?: (string | null) | undefined
  originator_client_id?: (string | null) | undefined
  secret?: APISecret | undefined
  start_date?: (string | null) | undefined
}
type TransferListResponse = { request_id: RequestID; transfers: Transfer[] }
type TransferMigrateAccountRequest = {
  account_number: string
  account_type: string
  client_id?: APIClientID | undefined
  routing_number: string
  secret?: APISecret | undefined
  wire_routing_number?: string | undefined
}
type TransferMigrateAccountResponse = {
  access_token: string
  account_id: string
  request_id: RequestID
}
type TransferOriginatorCreateRequest = {
  client_id?: APIClientID | undefined
  company_name: string
  secret?: APISecret | undefined
}
type TransferOriginatorCreateResponse = {
  company_name: string
  originator_client_id: string
  request_id: RequestID
}
type TransferOriginatorGetRequest = {
  client_id?: APIClientID | undefined
  originator_client_id: string
  secret?: APISecret | undefined
}
type TransferDiligenceStatus = 'under_review' | 'approved' | 'denied'
type DetailedOriginator = {
  client_id: string
  company_name: string
  transfer_diligence_status: TransferDiligenceStatus
}
type TransferOriginatorGetResponse = { originator: DetailedOriginator; request_id: RequestID }
type TransferOriginatorListRequest = {
  client_id?: APIClientID | undefined
  count?: (number | null) | undefined
  offset?: (number | null) | undefined
  secret?: APISecret | undefined
}
type Originator = { client_id: string; transfer_diligence_status: TransferDiligenceStatus }
type TransferOriginatorListResponse = { originators: Originator[]; request_id: RequestID }
type TransferQuestionnaireCreateRequest = {
  client_id?: APIClientID | undefined
  originator_client_id: string
  redirect_uri: string
  secret?: APISecret | undefined
}
type TransferQuestionnaireCreateResponse = { onboarding_url: string; request_id: RequestID }
type RecurringTransferID = string
type TransferRecurringCancelRequest = {
  client_id?: APIClientID | undefined
  recurring_transfer_id: RecurringTransferID
  secret?: APISecret | undefined
}
type TransferRecurringCancelResponse = { request_id: RequestID }
type TransferDevice = { ip_address: string; user_agent: string }
type TransferRecurringIdempotencyKey = string
type TransferScheduleIntervalCount = number
type TransferScheduleIntervalUnit = 'week' | 'month'
type TransferRecurringSchedule = {
  end_date?: (string | null) | undefined
  interval_count: TransferScheduleIntervalCount
  interval_execution_day: number
  interval_unit: TransferScheduleIntervalUnit
  start_date: string
}
type TransferRecurringCreateRequest = {
  access_token: TransferAccessToken
  account_id: TransferAccountID
  ach_class?: ACHClass | undefined
  amount: TransferAmount
  client_id?: APIClientID | undefined
  description: string
  device: TransferDevice
  funding_account_id?: TransferFundingAccountIDRequest | undefined
  idempotency_key: TransferRecurringIdempotencyKey
  iso_currency_code?: string | undefined
  network: TransferNetwork
  schedule: TransferRecurringSchedule
  secret?: APISecret | undefined
  test_clock_id?: (string | null) | undefined
  type: TransferType
  user: TransferUserInRequest
  user_present: boolean | null
}
type TransferRecurringStatus = 'active' | 'cancelled' | 'expired'
type RecurringTransferNullable = {
  account_id: string
  ach_class?: ACHClass | undefined
  amount: TransferAmount
  created: string
  description: string
  funding_account_id: TransferFundingAccountIDResponse
  iso_currency_code: string
  network: TransferNetwork
  next_origination_date: string
  origination_account_id: string
  recurring_transfer_id: RecurringTransferID
  schedule: TransferRecurringSchedule
  status: TransferRecurringStatus
  test_clock_id?: (string | null) | undefined
  transfer_ids: TransferID[]
  type: TransferType
  user: TransferUserInResponse
}
type TransferRecurringCreateResponse = {
  decision: TransferAuthorizationDecision
  decision_rationale?: TransferAuthorizationDecisionRationale | undefined
  recurring_transfer?: RecurringTransferNullable | undefined
  request_id: RequestID
}
type TransferRecurringGetRequest = {
  client_id?: APIClientID | undefined
  recurring_transfer_id: RecurringTransferID
  secret?: APISecret | undefined
}
type RecurringTransfer = {
  account_id: string
  ach_class?: ACHClass | undefined
  amount: TransferAmount
  created: string
  description: string
  funding_account_id: TransferFundingAccountIDResponse
  iso_currency_code: string
  network: TransferNetwork
  next_origination_date: string
  origination_account_id: string
  recurring_transfer_id: RecurringTransferID
  schedule: TransferRecurringSchedule
  status: TransferRecurringStatus
  test_clock_id?: (string | null) | undefined
  transfer_ids: TransferID[]
  type: TransferType
  user: TransferUserInResponse
}
type TransferRecurringGetResponse = { recurring_transfer: RecurringTransfer; request_id: RequestID }
type TransferRecurringListRequest = {
  client_id?: APIClientID | undefined
  count?: number | undefined
  end_time?: (string | null) | undefined
  funding_account_id?: (string | null) | undefined
  offset?: number | undefined
  secret?: APISecret | undefined
  start_time?: (string | null) | undefined
}
type TransferRecurringListResponse = {
  recurring_transfers: RecurringTransfer[]
  request_id: RequestID
}
type TransferRefundCancelRequest = {
  client_id?: APIClientID | undefined
  refund_id: TransferRefundID
  secret?: APISecret | undefined
}
type TransferRefundCancelResponse = { request_id: RequestID }
type TransferRefundIdempotencyKey = string
type TransferRefundCreateRequest = {
  amount: TransferRefundAmount
  client_id?: APIClientID | undefined
  idempotency_key: TransferRefundIdempotencyKey
  secret?: APISecret | undefined
  transfer_id: TransferIDForRefund
}
type TransferRefundCreateResponse = { refund: TransferRefund; request_id: RequestID }
type TransferRefundGetRequest = {
  client_id?: APIClientID | undefined
  refund_id: TransferRefundID
  secret?: APISecret | undefined
}
type TransferRefundGetResponse = { refund: TransferRefund; request_id: RequestID }
type TransferRepaymentListRequest = {
  client_id?: APIClientID | undefined
  count?: (number | null) | undefined
  end_date?: (string | null) | undefined
  offset?: number | undefined
  secret?: APISecret | undefined
  start_date?: (string | null) | undefined
}
type TransferRepayment = {
  amount: string
  created: string
  iso_currency_code: string
  repayment_id: string
}
type TransferRepaymentListResponse = { repayments: TransferRepayment[]; request_id: RequestID }
type TransferRepaymentReturnListRequest = {
  client_id?: APIClientID | undefined
  count?: (number | null) | undefined
  offset?: number | undefined
  repayment_id: string
  secret?: APISecret | undefined
}
type TransferRepaymentReturn = {
  amount: string
  event_id: number
  iso_currency_code: string
  transfer_id: string
}
type TransferRepaymentReturnListResponse = {
  repayment_returns: TransferRepaymentReturn[]
  request_id: RequestID
}
type TransferSweepGetRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  sweep_id: string
}
type TransferSweep = {
  amount: string
  created: string
  funding_account_id: TransferFundingAccountIDResponse
  id: string
  iso_currency_code: string
  settled: string | null
}
type TransferSweepGetResponse = { request_id: RequestID; sweep: TransferSweep }
type TransferSweepListRequest = {
  client_id?: APIClientID | undefined
  count?: (number | null) | undefined
  end_date?: (string | null) | undefined
  funding_account_id?: (string | null) | undefined
  offset?: number | undefined
  originator_client_id?: (string | null) | undefined
  secret?: APISecret | undefined
  start_date?: (string | null) | undefined
}
type TransferSweepListResponse = { request_id: RequestID; sweeps: TransferSweep[] }
type UserCreateRequest = {
  client_id?: APIClientID | undefined
  client_user_id: string
  secret?: APISecret | undefined
}
type UserCreateResponse = { request_id: RequestID; user_id: UserId; user_token: UserToken }
type WalletISOCurrencyCode = 'GBP' | 'EUR'
type WalletCreateRequest = {
  client_id?: APIClientID | undefined
  iso_currency_code: WalletISOCurrencyCode
  secret?: APISecret | undefined
}
type WalletBalance = { current: number; iso_currency_code: string }
type RecipientBACS = { account?: string | undefined; sort_code?: string | undefined } | null
type NumbersIBAN = string
type NumbersInternationalIBAN = { bic: string; iban: NumbersIBAN } | null
type WalletNumbers = {
  bacs?: RecipientBACS | undefined
  international?: NumbersInternationalIBAN | undefined
}
type WalletStatus = 'UNKNOWN' | 'ACTIVE' | 'CLOSED'
type WalletCreateResponse = {
  balance: WalletBalance
  numbers: WalletNumbers
  recipient_id?: string | undefined
  status: WalletStatus
  wallet_id: string
  request_id?: RequestID | undefined
}
type WalletGetRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  wallet_id: string
}
type WalletGetResponse = {
  balance: WalletBalance
  numbers: WalletNumbers
  recipient_id?: string | undefined
  status: WalletStatus
  wallet_id: string
  request_id?: RequestID | undefined
}
type WalletListRequest = {
  client_id?: APIClientID | undefined
  count?: number | undefined
  cursor?: string | undefined
  iso_currency_code?: WalletISOCurrencyCode | undefined
  secret?: APISecret | undefined
}
type Wallet = {
  balance: WalletBalance
  numbers: WalletNumbers
  recipient_id?: string | undefined
  status: WalletStatus
  wallet_id: string
}
type WalletListResponse = {
  next_cursor?: string | undefined
  request_id: RequestID
  wallets: Wallet[]
}
type WalletTransactionAmount = { iso_currency_code: WalletISOCurrencyCode; value: number }
type WalletTransactionCounterpartyBACS = {
  account?: string | undefined
  sort_code?: string | undefined
}
type WalletTransactionCounterpartyInternational = { iban?: NumbersIBAN | undefined } | null
type WalletTransactionCounterpartyNumbers = {
  bacs?: WalletTransactionCounterpartyBACS | undefined
  international?: WalletTransactionCounterpartyInternational | undefined
}
type WalletTransactionCounterparty = { name: string; numbers: WalletTransactionCounterpartyNumbers }
type WalletTransactionExecuteRequest = {
  amount: WalletTransactionAmount
  client_id?: APIClientID | undefined
  counterparty: WalletTransactionCounterparty
  idempotency_key: WalletTransactionIdempotencyKey
  reference: string
  secret?: APISecret | undefined
  wallet_id: string
}
type WalletTransactionExecuteResponse = {
  request_id: RequestID
  status: WalletTransactionStatus
  transaction_id: string
}
type WalletTransactionGetRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  transaction_id: string
}
type WalletTransactionGetResponse = {
  amount: WalletTransactionAmount
  counterparty: WalletTransactionCounterparty
  created_at: string
  last_status_update: string
  payment_id?: (string | null) | undefined
  reference: string
  status: WalletTransactionStatus
  transaction_id: string
  type: 'BANK_TRANSFER' | 'PAYOUT' | 'PIS_PAY_IN' | 'REFUND' | 'FUNDS_SWEEP'
  wallet_id: string
  request_id?: RequestID | undefined
}
type WalletTransactionListRequestOptions = {
  end_time?: string | undefined
  start_time?: string | undefined
} | null
type WalletTransactionListRequest = {
  client_id?: APIClientID | undefined
  count?: number | undefined
  cursor?: string | undefined
  options?: WalletTransactionListRequestOptions | undefined
  secret?: APISecret | undefined
  wallet_id: string
}
type WalletTransaction = {
  amount: WalletTransactionAmount
  counterparty: WalletTransactionCounterparty
  created_at: string
  last_status_update: string
  payment_id?: (string | null) | undefined
  reference: string
  status: WalletTransactionStatus
  transaction_id: string
  type: 'BANK_TRANSFER' | 'PAYOUT' | 'PIS_PAY_IN' | 'REFUND' | 'FUNDS_SWEEP'
  wallet_id: string
}
type WalletTransactionListResponse = {
  next_cursor?: string | undefined
  request_id: RequestID
  transactions: WalletTransaction[]
}
type GenericCountryCodeNullable = string | null
type WatchlistScreeningDocumentValueNullable = string | null
type EntityWatchlistProgramID = string
type EntityWatchlistScreeningName = string
type WatchlistScreeningPhoneNumberNullable = string | null
type URLNullable = string | null
type EntityWatchlistSearchTerms = {
  country?: GenericCountryCodeNullable | undefined
  document_number?: WatchlistScreeningDocumentValueNullable | undefined
  email_address?: EmailAddressNullable | undefined
  entity_watchlist_program_id: EntityWatchlistProgramID
  legal_name: EntityWatchlistScreeningName
  phone_number?: WatchlistScreeningPhoneNumberNullable | undefined
  url?: URLNullable | undefined
}
type WatchlistScreeningEntityCreateRequest = {
  client_id?: APIClientID | undefined
  client_user_id?: ClientUserID | undefined
  search_terms: EntityWatchlistSearchTerms
  secret?: APISecret | undefined
}
type DashboardUserIDNullable = string | null
type Source = 'dashboard' | 'link' | 'api' | 'system'
type WatchlistScreeningAuditTrail = {
  dashboard_user_id: DashboardUserIDNullable
  source: Source
  timestamp: Timestamp
}
type ClientUserIDNullable = string | null
type EntityWatchlistScreeningID = string
type EntityWatchlistScreeningSearchTerms = {
  country: GenericCountryCodeNullable
  document_number: WatchlistScreeningDocumentValueNullable
  email_address: EmailAddressNullable
  entity_watchlist_program_id: EntityWatchlistProgramID
  legal_name: EntityWatchlistScreeningName
  phone_number: WatchlistScreeningPhoneNumberNullable
  url: URLNullable
  version: number
}
type WatchlistScreeningStatus = 'rejected' | 'pending_review' | 'cleared'
type WatchlistScreeningEntityCreateResponse = {
  assignee: DashboardUserIDNullable
  audit_trail: WatchlistScreeningAuditTrail
  client_user_id: ClientUserIDNullable
  id: EntityWatchlistScreeningID
  request_id: RequestID
  search_terms: EntityWatchlistScreeningSearchTerms
  status: WatchlistScreeningStatus
}
type WatchlistScreeningEntityGetRequest = {
  client_id?: APIClientID | undefined
  entity_watchlist_screening_id: EntityWatchlistScreeningID
  secret?: APISecret | undefined
}
type WatchlistScreeningEntityGetResponse = {
  assignee: DashboardUserIDNullable
  audit_trail: WatchlistScreeningAuditTrail
  client_user_id: ClientUserIDNullable
  id: EntityWatchlistScreeningID
  request_id: RequestID
  search_terms: EntityWatchlistScreeningSearchTerms
  status: WatchlistScreeningStatus
}
type WatchlistScreeningEntityHistoryListRequest = {
  client_id?: APIClientID | undefined
  cursor?: Cursor | undefined
  entity_watchlist_screening_id: EntityWatchlistScreeningID
  secret?: APISecret | undefined
}
type EntityWatchlistScreening = {
  assignee: DashboardUserIDNullable
  audit_trail: WatchlistScreeningAuditTrail
  client_user_id: ClientUserIDNullable
  id: EntityWatchlistScreeningID
  search_terms: EntityWatchlistScreeningSearchTerms
  status: WatchlistScreeningStatus
}
type WatchlistScreeningEntityHistoryListResponse = {
  entity_watchlist_screenings: EntityWatchlistScreening[]
  next_cursor: Cursor
  request_id: RequestID
}
type WatchlistScreeningEntityHitListRequest = {
  client_id?: APIClientID | undefined
  cursor?: Cursor | undefined
  entity_watchlist_screening_id: EntityWatchlistScreeningID
  secret?: APISecret | undefined
}
type EntityScreeningHitAnalysis = {
  documents?: MatchSummaryCode | undefined
  email_addresses?: MatchSummaryCode | undefined
  locations?: MatchSummaryCode | undefined
  names?: MatchSummaryCode | undefined
  phone_numbers?: MatchSummaryCode | undefined
  search_terms_version: number
  urls?: MatchSummaryCode | undefined
}
type MatchSummary = { summary: MatchSummaryCode }
type WatchlistScreeningDocumentValue = string
type EntityDocumentType = 'bik' | 'business_number' | 'imo' | 'other' | 'swift' | 'tax_id'
type EntityDocument = { number: WatchlistScreeningDocumentValue; type: EntityDocumentType }
type EntityScreeningHitDocumentsItems = {
  analysis?: MatchSummary | undefined
  data?: EntityDocument | undefined
}
type EntityScreeningHitEmails = { email_address: EmailAddress }
type EntityScreeningHitEmailsItems = {
  analysis?: MatchSummary | undefined
  data?: EntityScreeningHitEmails | undefined
}
type WatchlistScreeningHitLocations = { country: GenericCountryCode; full: string }
type GenericScreeningHitLocationItems = {
  analysis?: MatchSummary | undefined
  data?: WatchlistScreeningHitLocations | undefined
}
type WeakAliasDetermination = 'none' | 'source' | 'plaid'
type EntityScreeningHitNames = {
  full: string
  is_primary: boolean
  weak_alias_determination: WeakAliasDetermination
}
type EntityScreeningHitNamesItems = {
  analysis?: MatchSummary | undefined
  data?: EntityScreeningHitNames | undefined
}
type WatchlistScreeningPhoneNumber = string
type PhoneType = 'phone' | 'fax'
type EntityScreeningHitPhoneNumbers = {
  phone_number: WatchlistScreeningPhoneNumber
  type: PhoneType
}
type EntityScreeningHitsPhoneNumberItems = {
  analysis?: MatchSummary | undefined
  data?: EntityScreeningHitPhoneNumbers | undefined
}
type URL = string
type EntityScreeningHitUrls = { url: URL }
type EntityScreeningHitUrlsItems = {
  analysis?: MatchSummary | undefined
  data?: EntityScreeningHitUrls | undefined
}
type EntityScreeningHitData = {
  documents?: EntityScreeningHitDocumentsItems[] | undefined
  email_addresses?: EntityScreeningHitEmailsItems[] | undefined
  locations?: GenericScreeningHitLocationItems[] | undefined
  names?: EntityScreeningHitNamesItems[] | undefined
  phone_numbers?: EntityScreeningHitsPhoneNumberItems[] | undefined
  urls?: EntityScreeningHitUrlsItems[] | undefined
}
type EntityWatchlistScreeningHitID = string
type EntityWatchlistCode =
  | 'CA_CON'
  | 'EU_CON'
  | 'IZ_SOE'
  | 'IZ_UNC'
  | 'IZ_WBK'
  | 'US_CAP'
  | 'US_FSE'
  | 'US_MBS'
  | 'US_SDN'
  | 'US_SSI'
  | 'US_CMC'
  | 'US_UVL'
  | 'AU_CON'
  | 'UK_HMC'
type InternalUID = string
type WatchlistScreeningHitStatus = 'confirmed' | 'pending_review' | 'dismissed'
type SourceUID = string | null
type EntityWatchlistScreeningHit = {
  analysis?: EntityScreeningHitAnalysis | undefined
  data?: EntityScreeningHitData | undefined
  first_active: Timestamp
  historical_since: TimestampNullable
  id: EntityWatchlistScreeningHitID
  inactive_since: TimestampNullable
  list_code: EntityWatchlistCode
  plaid_uid: InternalUID
  review_status: WatchlistScreeningHitStatus
  source_uid: SourceUID
}
type WatchlistScreeningEntityHitListResponse = {
  entity_watchlist_screening_hits: EntityWatchlistScreeningHit[]
  next_cursor: Cursor
  request_id: RequestID
}
type WatchlistScreeningEntityListRequest = {
  assignee?: DashboardUserID | undefined
  client_id?: APIClientID | undefined
  client_user_id?: ClientUserID | undefined
  cursor?: Cursor | undefined
  entity_watchlist_program_id: EntityWatchlistProgramID
  secret?: APISecret | undefined
  status?: WatchlistScreeningStatus | undefined
}
type WatchlistScreeningEntityListResponse = {
  entity_watchlist_screenings: EntityWatchlistScreening[]
  next_cursor: Cursor
  request_id: RequestID
}
type WatchlistScreeningEntityProgramGetRequest = {
  client_id?: APIClientID | undefined
  entity_watchlist_program_id: EntityWatchlistProgramID
  secret?: APISecret | undefined
}
type ProgramArchived = boolean
type EntityWatchlistScreeningProgramName = string
type ProgramNameSensitivity = 'coarse' | 'balanced' | 'strict' | 'exact'
type WatchlistScreeningEntityProgramGetResponse = {
  audit_trail: WatchlistScreeningAuditTrail
  created_at: Timestamp
  id: EntityWatchlistProgramID
  is_archived: ProgramArchived
  is_rescanning_enabled: boolean
  lists_enabled: EntityWatchlistCode[]
  name: EntityWatchlistScreeningProgramName
  name_sensitivity: ProgramNameSensitivity
  request_id: RequestID
}
type WatchlistScreeningEntityProgramListRequest = {
  client_id?: APIClientID | undefined
  cursor?: Cursor | undefined
  secret?: APISecret | undefined
}
type EntityWatchlistProgram = {
  audit_trail: WatchlistScreeningAuditTrail
  created_at: Timestamp
  id: EntityWatchlistProgramID
  is_archived: ProgramArchived
  is_rescanning_enabled: boolean
  lists_enabled: EntityWatchlistCode[]
  name: EntityWatchlistScreeningProgramName
  name_sensitivity: ProgramNameSensitivity
}
type WatchlistScreeningEntityProgramListResponse = {
  entity_watchlist_programs: EntityWatchlistProgram[]
  next_cursor: Cursor
  request_id: RequestID
}
type ReviewComment = string | null
type WatchlistScreeningEntityReviewCreateRequest = {
  client_id?: APIClientID | undefined
  comment?: ReviewComment | undefined
  confirmed_hits: EntityWatchlistScreeningHitID[]
  dismissed_hits: EntityWatchlistScreeningHitID[]
  entity_watchlist_screening_id: EntityWatchlistScreeningID
  secret?: APISecret | undefined
}
type EntityWatchlistScreeningReviewID = string
type WatchlistScreeningEntityReviewCreateResponse = {
  audit_trail: WatchlistScreeningAuditTrail
  comment: ReviewComment
  confirmed_hits: EntityWatchlistScreeningHitID[]
  dismissed_hits: EntityWatchlistScreeningHitID[]
  id: EntityWatchlistScreeningReviewID
  request_id: RequestID
}
type WatchlistScreeningEntityReviewListRequest = {
  client_id?: APIClientID | undefined
  cursor?: Cursor | undefined
  entity_watchlist_screening_id: EntityWatchlistScreeningID
  secret?: APISecret | undefined
}
type EntityWatchlistScreeningReview = {
  audit_trail: WatchlistScreeningAuditTrail
  comment: ReviewComment
  confirmed_hits: EntityWatchlistScreeningHitID[]
  dismissed_hits: EntityWatchlistScreeningHitID[]
  id: EntityWatchlistScreeningReviewID
}
type WatchlistScreeningEntityReviewListResponse = {
  entity_watchlist_screening_reviews: EntityWatchlistScreeningReview[]
  next_cursor: Cursor
  request_id: RequestID
}
type WatchlistScreeningEntityUpdateRequestResettableField = 'assignee'
type WatchlistScreeningEntityUpdateRequestResettableFieldList =
  | WatchlistScreeningEntityUpdateRequestResettableField[]
  | null
type UpdateEntityScreeningRequestSearchTerms = {
  client_id: APIClientID
  country?: GenericCountryCode | undefined
  document_number?: WatchlistScreeningDocumentValue | undefined
  email_address?: EmailAddress | undefined
  entity_watchlist_program_id: EntityWatchlistProgramID
  legal_name?: EntityWatchlistScreeningName | undefined
  phone_number?: WatchlistScreeningPhoneNumber | undefined
  secret: APISecret
  url?: URL | undefined
} | null
type WatchlistScreeningEntityUpdateRequest = {
  assignee?: DashboardUserID | undefined
  client_id?: APIClientID | undefined
  client_user_id?: ClientUserID | undefined
  entity_watchlist_screening_id: EntityWatchlistScreeningID
  reset_fields?: WatchlistScreeningEntityUpdateRequestResettableFieldList | undefined
  search_terms?: UpdateEntityScreeningRequestSearchTerms | undefined
  secret?: APISecret | undefined
  status?: WatchlistScreeningStatus | undefined
}
type WatchlistScreeningEntityUpdateResponse = {
  assignee: DashboardUserIDNullable
  audit_trail: WatchlistScreeningAuditTrail
  client_user_id: ClientUserIDNullable
  id: EntityWatchlistScreeningID
  request_id: RequestID
  search_terms: EntityWatchlistScreeningSearchTerms
  status: WatchlistScreeningStatus
}
type WatchlistScreeningIndividualName = string
type WatchlistProgramID = string
type WatchlistScreeningRequestSearchTerms = {
  country?: GenericCountryCode | undefined
  date_of_birth?: ISO8601Date | undefined
  document_number?: WatchlistScreeningDocumentValue | undefined
  legal_name: WatchlistScreeningIndividualName
  watchlist_program_id: WatchlistProgramID
}
type WatchlistScreeningIndividualCreateRequest = {
  client_id?: APIClientID | undefined
  client_user_id?: ClientUserID | undefined
  search_terms: WatchlistScreeningRequestSearchTerms
  secret?: APISecret | undefined
}
type WatchlistScreeningIndividualID = string
type WatchlistScreeningSearchTerms = {
  country: GenericCountryCodeNullable
  date_of_birth: ISO8601DateNullable
  document_number: WatchlistScreeningDocumentValueNullable
  legal_name: WatchlistScreeningIndividualName
  version: number
  watchlist_program_id: WatchlistProgramID
}
type WatchlistScreeningIndividualCreateResponse = {
  assignee: DashboardUserIDNullable
  audit_trail: WatchlistScreeningAuditTrail
  client_user_id: ClientUserIDNullable
  id: WatchlistScreeningIndividualID
  request_id: RequestID
  search_terms: WatchlistScreeningSearchTerms
  status: WatchlistScreeningStatus
}
type WatchlistScreeningIndividualGetRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  watchlist_screening_id: WatchlistScreeningIndividualID
}
type WatchlistScreeningIndividualGetResponse = {
  assignee: DashboardUserIDNullable
  audit_trail: WatchlistScreeningAuditTrail
  client_user_id: ClientUserIDNullable
  id: WatchlistScreeningIndividualID
  request_id: RequestID
  search_terms: WatchlistScreeningSearchTerms
  status: WatchlistScreeningStatus
}
type WatchlistScreeningIndividualHistoryListRequest = {
  client_id?: APIClientID | undefined
  cursor?: Cursor | undefined
  secret?: APISecret | undefined
  watchlist_screening_id: WatchlistScreeningIndividualID
}
type WatchlistScreeningIndividual = {
  assignee: DashboardUserIDNullable
  audit_trail: WatchlistScreeningAuditTrail
  client_user_id: ClientUserIDNullable
  id: WatchlistScreeningIndividualID
  search_terms: WatchlistScreeningSearchTerms
  status: WatchlistScreeningStatus
}
type WatchlistScreeningIndividualHistoryListResponse = {
  next_cursor: Cursor
  request_id: RequestID
  watchlist_screenings: WatchlistScreeningIndividual[]
}
type WatchlistScreeningIndividualHitListRequest = {
  client_id?: APIClientID | undefined
  cursor?: Cursor | undefined
  secret?: APISecret | undefined
  watchlist_screening_id: WatchlistScreeningIndividualID
}
type ScreeningHitAnalysis = {
  dates_of_birth?: MatchSummaryCode | undefined
  documents?: MatchSummaryCode | undefined
  locations?: MatchSummaryCode | undefined
  names?: MatchSummaryCode | undefined
  search_terms_version: number
}
type DateRange = { beginning: ISO8601Date; ending: ISO8601Date }
type ScreeningHitDateOfBirthItem = {
  analysis?: MatchSummary | undefined
  data?: DateRange | undefined
}
type WatchlistScreeningDocumentType =
  | 'birth_certificate'
  | 'drivers_license'
  | 'immigration_number'
  | 'military_id'
  | 'other'
  | 'passport'
  | 'personal_identification'
  | 'ration_card'
  | 'ssn'
  | 'student_id'
  | 'tax_id'
  | 'travel_document'
  | 'voter_id'
type WatchlistScreeningDocument = {
  number: WatchlistScreeningDocumentValue
  type: WatchlistScreeningDocumentType
}
type ScreeningHitDocumentsItems = {
  analysis?: MatchSummary | undefined
  data?: WatchlistScreeningDocument | undefined
}
type IndividualScreeningHitNames = {
  full: string
  is_primary: boolean
  weak_alias_determination: WeakAliasDetermination
}
type ScreeningHitNamesItems = {
  analysis?: MatchSummary | undefined
  data?: IndividualScreeningHitNames | undefined
}
type ScreeningHitData = {
  dates_of_birth?: ScreeningHitDateOfBirthItem[] | undefined
  documents?: ScreeningHitDocumentsItems[] | undefined
  locations?: GenericScreeningHitLocationItems[] | undefined
  names?: ScreeningHitNamesItems[] | undefined
}
type WatchlistScreeningHitID = string
type IndividualWatchlistCode =
  | 'AU_CON'
  | 'CA_CON'
  | 'EU_CON'
  | 'IZ_CIA'
  | 'IZ_IPL'
  | 'IZ_PEP'
  | 'IZ_UNC'
  | 'IZ_WBK'
  | 'UK_HMC'
  | 'US_DPL'
  | 'US_DTC'
  | 'US_FBI'
  | 'US_FSE'
  | 'US_ISN'
  | 'US_MBS'
  | 'US_PLC'
  | 'US_SDN'
  | 'US_SSI'
  | 'SG_SOF'
  | 'TR_TWL'
  | 'TR_DFD'
  | 'TR_FOR'
  | 'TR_WMD'
  | 'TR_CMB'
type WatchlistScreeningHit = {
  analysis?: ScreeningHitAnalysis | undefined
  data?: ScreeningHitData | undefined
  first_active: Timestamp
  historical_since: TimestampNullable
  id: WatchlistScreeningHitID
  inactive_since: TimestampNullable
  list_code: IndividualWatchlistCode
  plaid_uid: InternalUID
  review_status: WatchlistScreeningHitStatus
  source_uid: SourceUID
}
type WatchlistScreeningIndividualHitListResponse = {
  next_cursor: Cursor
  request_id: RequestID
  watchlist_screening_hits: WatchlistScreeningHit[]
}
type WatchlistScreeningIndividualListRequest = {
  assignee?: DashboardUserID | undefined
  client_id?: APIClientID | undefined
  client_user_id?: ClientUserID | undefined
  cursor?: Cursor | undefined
  secret?: APISecret | undefined
  status?: WatchlistScreeningStatus | undefined
  watchlist_program_id: WatchlistProgramID
}
type WatchlistScreeningIndividualListResponse = {
  next_cursor: Cursor
  request_id: RequestID
  watchlist_screenings: WatchlistScreeningIndividual[]
}
type WatchlistScreeningIndividualProgramGetRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  watchlist_program_id: WatchlistProgramID
}
type IndividualWatchlistScreeningProgramName = string
type WatchlistScreeningIndividualProgramGetResponse = {
  audit_trail: WatchlistScreeningAuditTrail
  created_at: Timestamp
  id: WatchlistProgramID
  is_archived: ProgramArchived
  is_rescanning_enabled: boolean
  lists_enabled: IndividualWatchlistCode[]
  name: IndividualWatchlistScreeningProgramName
  name_sensitivity: ProgramNameSensitivity
  request_id: RequestID
}
type WatchlistScreeningIndividualProgramListRequest = {
  client_id?: APIClientID | undefined
  cursor?: Cursor | undefined
  secret?: APISecret | undefined
}
type IndividualWatchlistProgram = {
  audit_trail: WatchlistScreeningAuditTrail
  created_at: Timestamp
  id: WatchlistProgramID
  is_archived: ProgramArchived
  is_rescanning_enabled: boolean
  lists_enabled: IndividualWatchlistCode[]
  name: IndividualWatchlistScreeningProgramName
  name_sensitivity: ProgramNameSensitivity
}
type WatchlistScreeningIndividualProgramListResponse = {
  next_cursor: Cursor
  request_id: RequestID
  watchlist_programs: IndividualWatchlistProgram[]
}
type WatchlistScreeningIndividualReviewCreateRequest = {
  client_id?: APIClientID | undefined
  comment?: ReviewComment | undefined
  confirmed_hits: WatchlistScreeningHitID[]
  dismissed_hits: WatchlistScreeningHitID[]
  secret?: APISecret | undefined
  watchlist_screening_id: WatchlistScreeningIndividualID
}
type WatchlistScreeningReviewID = string
type WatchlistScreeningIndividualReviewCreateResponse = {
  audit_trail: WatchlistScreeningAuditTrail
  comment: ReviewComment
  confirmed_hits: WatchlistScreeningHitID[]
  dismissed_hits: WatchlistScreeningHitID[]
  id: WatchlistScreeningReviewID
  request_id: RequestID
}
type WatchlistScreeningIndividualReviewListRequest = {
  client_id?: APIClientID | undefined
  cursor?: Cursor | undefined
  secret?: APISecret | undefined
  watchlist_screening_id: WatchlistScreeningIndividualID
}
type WatchlistScreeningReview = {
  audit_trail: WatchlistScreeningAuditTrail
  comment: ReviewComment
  confirmed_hits: WatchlistScreeningHitID[]
  dismissed_hits: WatchlistScreeningHitID[]
  id: WatchlistScreeningReviewID
}
type WatchlistScreeningIndividualReviewListResponse = {
  next_cursor: Cursor
  request_id: RequestID
  watchlist_screening_reviews: WatchlistScreeningReview[]
}
type WatchlistScreeningIndividualUpdateRequestResettableField = 'assignee'
type WatchlistScreeningIndividualUpdateRequestResettableFieldList =
  | WatchlistScreeningIndividualUpdateRequestResettableField[]
  | null
type UpdateIndividualScreeningRequestSearchTerms = {
  country?: GenericCountryCode | undefined
  date_of_birth?: ISO8601Date | undefined
  document_number?: WatchlistScreeningDocumentValue | undefined
  legal_name?: WatchlistScreeningIndividualName | undefined
  watchlist_program_id?: WatchlistProgramID | undefined
} | null
type WatchlistScreeningIndividualUpdateRequest = {
  assignee?: DashboardUserID | undefined
  client_id?: APIClientID | undefined
  client_user_id?: ClientUserID | undefined
  reset_fields?: WatchlistScreeningIndividualUpdateRequestResettableFieldList | undefined
  search_terms?: UpdateIndividualScreeningRequestSearchTerms | undefined
  secret?: APISecret | undefined
  status?: WatchlistScreeningStatus | undefined
  watchlist_screening_id: WatchlistScreeningIndividualID
}
type WatchlistScreeningIndividualUpdateResponse = {
  assignee: DashboardUserIDNullable
  audit_trail: WatchlistScreeningAuditTrail
  client_user_id: ClientUserIDNullable
  id: WatchlistScreeningIndividualID
  request_id: RequestID
  search_terms: WatchlistScreeningSearchTerms
  status: WatchlistScreeningStatus
}
type WebhookVerificationKeyGetRequest = {
  client_id?: APIClientID | undefined
  key_id: string
  secret?: APISecret | undefined
}
type JWKPublicKey = {
  alg: string
  created_at: number
  crv: string
  expired_at: number | null
  kid: string
  kty: string
  use: string
  x: string
  y: string
}
type WebhookVerificationKeyGetResponse = { key: JWKPublicKey; request_id: RequestID }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/accounts/balance/get': {
      $post: {
        input: { json: AccountsBalanceGetRequest }
        output: AccountsGetResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/accounts/get': {
      $post:
        | {
            input: { json: AccountsGetRequest }
            output: AccountsGetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: AccountsGetRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/application/get': {
      $post:
        | {
            input: { json: ApplicationGetRequest }
            output: ApplicationGetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ApplicationGetRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/asset_report/audit_copy/create': {
      $post: {
        input: { json: AssetReportAuditCopyCreateRequest }
        output: AssetReportAuditCopyCreateResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/asset_report/audit_copy/get': {
      $post: {
        input: { json: AssetReportAuditCopyGetRequest }
        output: AssetReportGetResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/asset_report/audit_copy/remove': {
      $post: {
        input: { json: AssetReportAuditCopyRemoveRequest }
        output: AssetReportAuditCopyRemoveResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/asset_report/create': {
      $post: {
        input: { json: AssetReportCreateRequest }
        output: AssetReportCreateResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/asset_report/filter': {
      $post: {
        input: { json: AssetReportFilterRequest }
        output: AssetReportFilterResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/asset_report/get': {
      $post: {
        input: { json: AssetReportGetRequest }
        output: AssetReportGetResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/asset_report/pdf/get': {
      $post: {
        input: { json: AssetReportPDFGetRequest }
        output: AssetReportPDFGetResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/asset_report/refresh': {
      $post: {
        input: { json: AssetReportRefreshRequest }
        output: AssetReportRefreshResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/asset_report/remove': {
      $post: {
        input: { json: AssetReportRemoveRequest }
        output: AssetReportRemoveResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/auth/get': {
      $post:
        | {
            input: { json: AuthGetRequest }
            output: AuthGetResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: AuthGetRequest }; output: PlaidError; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/bank_transfer/balance/get': {
      $post:
        | {
            input: { json: BankTransferBalanceGetRequest }
            output: BankTransferBalanceGetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: BankTransferBalanceGetRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/bank_transfer/cancel': {
      $post:
        | {
            input: { json: BankTransferCancelRequest }
            output: BankTransferCancelResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: BankTransferCancelRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/bank_transfer/create': {
      $post:
        | {
            input: { json: BankTransferCreateRequest }
            output: BankTransferCreateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: BankTransferCreateRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/bank_transfer/event/list': {
      $post:
        | {
            input: { json: BankTransferEventListRequest }
            output: BankTransferEventListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: BankTransferEventListRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/bank_transfer/event/sync': {
      $post:
        | {
            input: { json: BankTransferEventSyncRequest }
            output: BankTransferEventSyncResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: BankTransferEventSyncRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/bank_transfer/get': {
      $post:
        | {
            input: { json: BankTransferGetRequest }
            output: BankTransferGetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: BankTransferGetRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/bank_transfer/list': {
      $post:
        | {
            input: { json: BankTransferListRequest }
            output: BankTransferListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: BankTransferListRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/bank_transfer/migrate_account': {
      $post:
        | {
            input: { json: BankTransferMigrateAccountRequest }
            output: BankTransferMigrateAccountResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: BankTransferMigrateAccountRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/bank_transfer/sweep/get': {
      $post:
        | {
            input: { json: BankTransferSweepGetRequest }
            output: BankTransferSweepGetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: BankTransferSweepGetRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/bank_transfer/sweep/list': {
      $post:
        | {
            input: { json: BankTransferSweepListRequest }
            output: BankTransferSweepListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: BankTransferSweepListRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/beta/credit/v1/bank_employment/get': {
      $post: {
        input: { json: CreditBankEmploymentGetRequest }
        output: CreditBankEmploymentGetResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/beta/transactions/rules/v1/create': {
      $post:
        | {
            input: { json: TransactionsRulesCreateRequest }
            output: TransactionsRulesCreateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: TransactionsRulesCreateRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/beta/transactions/rules/v1/list': {
      $post:
        | {
            input: { json: TransactionsRulesListRequest }
            output: TransactionsRulesListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: TransactionsRulesListRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/beta/transactions/rules/v1/remove': {
      $post:
        | {
            input: { json: TransactionsRulesRemoveRequest }
            output: TransactionsRulesRemoveResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: TransactionsRulesRemoveRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/beta/transactions/v1/enhance': {
      $post:
        | {
            input: { json: TransactionsEnhanceGetRequest }
            output: TransactionsEnhanceGetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: TransactionsEnhanceGetRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/categories/get': {
      $post:
        | {
            input: { json: CategoriesGetRequest }
            output: CategoriesGetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CategoriesGetRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/credit/asset_report/freddie_mac/get': {
      $post: {
        input: { json: AssetReportFreddieGetRequest }
        output: AssetReportFreddieGetResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/credit/audit_copy_token/create': {
      $post: {
        input: { json: CreditAuditCopyTokenCreateRequest }
        output: CreditAuditCopyTokenCreateResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/credit/audit_copy_token/remove': {
      $post: {
        input: { json: CreditAuditCopyTokenRemoveRequest }
        output: CreditAuditCopyTokenRemoveResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/credit/audit_copy_token/update': {
      $post: {
        input: { json: CreditAuditCopyTokenUpdateRequest }
        output: CreditAuditCopyTokenUpdateResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/credit/bank_income/get': {
      $post: {
        input: { json: CreditBankIncomeGetRequest }
        output: CreditBankIncomeGetResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/credit/bank_income/pdf/get': {
      $post: {
        input: { json: CreditBankIncomePDFGetRequest }
        output: CreditBankIncomePDFGetResponse
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/credit/bank_income/refresh': {
      $post: {
        input: { json: CreditBankIncomeRefreshRequest }
        output: CreditBankIncomeRefreshResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/credit/employment/get': {
      $post: {
        input: { json: CreditEmploymentGetRequest }
        output: CreditEmploymentGetResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/credit/freddie_mac/reports/get': {
      $post: {
        input: { json: CreditFreddieMacReportsGetRequest }
        output: CreditFreddieMacReportsGetResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/credit/payroll_income/get': {
      $post: {
        input: { json: CreditPayrollIncomeGetRequest }
        output: CreditPayrollIncomeGetResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/credit/payroll_income/precheck': {
      $post: {
        input: { json: CreditPayrollIncomePrecheckRequest }
        output: CreditPayrollIncomePrecheckResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/credit/payroll_income/refresh': {
      $post:
        | {
            input: { json: CreditPayrollIncomeRefreshRequest }
            output: CreditPayrollIncomeRefreshResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreditPayrollIncomeRefreshRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/credit/relay/create': {
      $post: {
        input: { json: CreditRelayCreateRequest }
        output: CreditRelayCreateResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/credit/relay/get': {
      $post: {
        input: { json: CreditRelayGetRequest }
        output: AssetReportGetResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/credit/relay/refresh': {
      $post: {
        input: { json: CreditRelayRefreshRequest }
        output: CreditRelayRefreshResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/credit/relay/remove': {
      $post: {
        input: { json: CreditRelayRemoveRequest }
        output: CreditRelayRemoveResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/credit/sessions/get': {
      $post: {
        input: { json: CreditSessionsGetRequest }
        output: CreditSessionsGetResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dashboard_user/get': {
      $post: {
        input: { json: DashboardUserGetRequest }
        output: DashboardUserGetResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/dashboard_user/list': {
      $post: {
        input: { json: DashboardUserListRequest }
        output: DashboardUserListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/deposit_switch/alt/create': {
      $post: {
        input: { json: DepositSwitchAltCreateRequest }
        output: DepositSwitchAltCreateResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/deposit_switch/create': {
      $post: {
        input: { json: DepositSwitchCreateRequest }
        output: DepositSwitchCreateResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/deposit_switch/get': {
      $post: {
        input: { json: DepositSwitchGetRequest }
        output: DepositSwitchGetResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/deposit_switch/token/create': {
      $post: {
        input: { json: DepositSwitchTokenCreateRequest }
        output: DepositSwitchTokenCreateResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/employers/search': {
      $post: {
        input: { json: EmployersSearchRequest }
        output: EmployersSearchResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/employment/verification/get': {
      $post: {
        input: { json: EmploymentVerificationGetRequest }
        output: EmploymentVerificationGetResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/fdx/notifications': {
      $post:
        | { input: { json: FDXNotification }; output: {}; outputFormat: string; status: 200 }
        | {
            input: { json: FDXNotification }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/identity/get': {
      $post: {
        input: { json: IdentityGetRequest }
        output: IdentityGetResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/identity/match': {
      $post: {
        input: { json: IdentityMatchRequest }
        output: IdentityMatchResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/identity_verification/create': {
      $post: {
        input: { json: IdentityVerificationCreateRequest }
        output: IdentityVerificationCreateResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/identity_verification/get': {
      $post: {
        input: { json: IdentityVerificationGetRequest }
        output: IdentityVerificationGetResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/identity_verification/list': {
      $post: {
        input: { json: IdentityVerificationListRequest }
        output: IdentityVerificationListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/identity_verification/retry': {
      $post: {
        input: { json: IdentityVerificationRetryRequest }
        output: IdentityVerificationRetryResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/income/verification/create': {
      $post: {
        input: { json: IncomeVerificationCreateRequest }
        output: IncomeVerificationCreateResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/income/verification/documents/download': {
      $post: {
        input: { json: IncomeVerificationDocumentsDownloadRequest }
        output: File
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/income/verification/paystubs/get': {
      $post: {
        input: { json: IncomeVerificationPaystubsGetRequest }
        output: IncomeVerificationPaystubsGetResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/income/verification/precheck': {
      $post: {
        input: { json: IncomeVerificationPrecheckRequest }
        output: IncomeVerificationPrecheckResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/income/verification/taxforms/get': {
      $post:
        | {
            input: { json: IncomeVerificationTaxformsGetRequest }
            output: IncomeVerificationTaxformsGetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: IncomeVerificationTaxformsGetRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/institutions/get': {
      $post:
        | {
            input: { json: InstitutionsGetRequest }
            output: InstitutionsGetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: InstitutionsGetRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/institutions/get_by_id': {
      $post:
        | {
            input: { json: InstitutionsGetByIdRequest }
            output: InstitutionsGetByIdResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: InstitutionsGetByIdRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/institutions/search': {
      $post:
        | {
            input: { json: InstitutionsSearchRequest }
            output: InstitutionsSearchResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: InstitutionsSearchRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/investments/holdings/get': {
      $post: {
        input: { json: InvestmentsHoldingsGetRequest }
        output: InvestmentsHoldingsGetResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/investments/transactions/get': {
      $post: {
        input: { json: InvestmentsTransactionsGetRequest }
        output: InvestmentsTransactionsGetResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/item/access_token/invalidate': {
      $post: {
        input: { json: ItemAccessTokenInvalidateRequest }
        output: ItemAccessTokenInvalidateResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/item/activity/list': {
      $post:
        | {
            input: { json: ItemActivityListRequest }
            output: ItemActivityListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ItemActivityListRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/item/application/list': {
      $post:
        | {
            input: { json: ItemApplicationListRequest }
            output: ItemApplicationListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ItemApplicationListRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/item/application/scopes/update': {
      $post:
        | {
            input: { json: ItemApplicationScopesUpdateRequest }
            output: ItemApplicationScopesUpdateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ItemApplicationScopesUpdateRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/item/get': {
      $post:
        | {
            input: { json: ItemGetRequest }
            output: ItemGetResponse
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: ItemGetRequest }; output: PlaidError; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/item/import': {
      $post: {
        input: { json: ItemImportRequest }
        output: ItemImportResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/item/public_token/create': {
      $post: {
        input: { json: ItemPublicTokenCreateRequest }
        output: ItemPublicTokenCreateResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/item/public_token/exchange': {
      $post: {
        input: { json: ItemPublicTokenExchangeRequest }
        output: ItemPublicTokenExchangeResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/item/remove': {
      $post:
        | {
            input: { json: ItemRemoveRequest }
            output: ItemRemoveResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ItemRemoveRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/item/webhook/update': {
      $post: {
        input: { json: ItemWebhookUpdateRequest }
        output: ItemWebhookUpdateResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/liabilities/get': {
      $post: {
        input: { json: LiabilitiesGetRequest }
        output: LiabilitiesGetResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/link/oauth/correlation_id/exchange': {
      $post: {
        input: { json: LinkOAuthCorrelationIdExchangeRequest }
        output: LinkOAuthCorrelationIdExchangeResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/link/token/create': {
      $post: {
        input: { json: LinkTokenCreateRequest }
        output: LinkTokenCreateResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/link/token/get': {
      $post: {
        input: { json: LinkTokenGetRequest }
        output: LinkTokenGetResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/link_delivery/create': {
      $post:
        | {
            input: { json: LinkDeliveryCreateRequest }
            output: LinkDeliveryCreateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: LinkDeliveryCreateRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/link_delivery/get': {
      $post:
        | {
            input: { json: LinkDeliveryGetRequest }
            output: LinkDeliveryGetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: LinkDeliveryGetRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/partner/customer/create': {
      $post:
        | {
            input: { json: PartnerCustomerCreateRequest }
            output: PartnerCustomerCreateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: PartnerCustomerCreateRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/partner/customer/enable': {
      $post:
        | {
            input: { json: PartnerCustomerEnableRequest }
            output: PartnerCustomerEnableResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: PartnerCustomerEnableRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/partner/customer/get': {
      $post:
        | {
            input: { json: PartnerCustomerGetRequest }
            output: PartnerCustomerGetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: PartnerCustomerGetRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/partner/customer/oauth_institutions/get': {
      $post:
        | {
            input: { json: PartnerCustomerOAuthInstitutionsGetRequest }
            output: PartnerCustomerOAuthInstitutionsGetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: PartnerCustomerOAuthInstitutionsGetRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/partner/customer/remove': {
      $post:
        | {
            input: { json: PartnerCustomerRemoveRequest }
            output: PartnerCustomerRemoveResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: PartnerCustomerRemoveRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/payment_initiation/consent/create': {
      $post: {
        input: { json: PaymentInitiationConsentCreateRequest }
        output: PaymentInitiationConsentCreateResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/payment_initiation/consent/get': {
      $post: {
        input: { json: PaymentInitiationConsentGetRequest }
        output: PaymentInitiationConsentGetResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/payment_initiation/consent/payment/execute': {
      $post: {
        input: { json: PaymentInitiationConsentPaymentExecuteRequest }
        output: PaymentInitiationConsentPaymentExecuteResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/payment_initiation/consent/revoke': {
      $post: {
        input: { json: PaymentInitiationConsentRevokeRequest }
        output: PaymentInitiationConsentRevokeResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/payment_initiation/payment/create': {
      $post: {
        input: { json: PaymentInitiationPaymentCreateRequest }
        output: PaymentInitiationPaymentCreateResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/payment_initiation/payment/get': {
      $post: {
        input: { json: PaymentInitiationPaymentGetRequest }
        output: PaymentInitiationPaymentGetResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/payment_initiation/payment/list': {
      $post: {
        input: { json: PaymentInitiationPaymentListRequest }
        output: PaymentInitiationPaymentListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/payment_initiation/payment/reverse': {
      $post: {
        input: { json: PaymentInitiationPaymentReverseRequest }
        output: PaymentInitiationPaymentReverseResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/payment_initiation/payment/token/create': {
      $post: {
        input: { json: PaymentInitiationPaymentTokenCreateRequest }
        output: PaymentInitiationPaymentTokenCreateResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/payment_initiation/recipient/create': {
      $post: {
        input: { json: PaymentInitiationRecipientCreateRequest }
        output: PaymentInitiationRecipientCreateResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/payment_initiation/recipient/get': {
      $post: {
        input: { json: PaymentInitiationRecipientGetRequest }
        output: PaymentInitiationRecipientGetResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/payment_initiation/recipient/list': {
      $post: {
        input: { json: PaymentInitiationRecipientListRequest }
        output: PaymentInitiationRecipientListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/payment_profile/create': {
      $post:
        | {
            input: { json: PaymentProfileCreateRequest }
            output: PaymentProfileCreateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: PaymentProfileCreateRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/payment_profile/get': {
      $post:
        | {
            input: { json: PaymentProfileGetRequest }
            output: PaymentProfileGetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: PaymentProfileGetRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/payment_profile/remove': {
      $post:
        | {
            input: { json: PaymentProfileRemoveRequest }
            output: PaymentProfileRemoveResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: PaymentProfileRemoveRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/processor/apex/processor_token/create': {
      $post: {
        input: { json: ProcessorApexProcessorTokenCreateRequest }
        output: ProcessorTokenCreateResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/processor/auth/get': {
      $post: {
        input: { json: ProcessorAuthGetRequest }
        output: ProcessorAuthGetResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/processor/balance/get': {
      $post: {
        input: { json: ProcessorBalanceGetRequest }
        output: ProcessorBalanceGetResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/processor/bank_transfer/create': {
      $post:
        | {
            input: { json: ProcessorBankTransferCreateRequest }
            output: ProcessorBankTransferCreateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ProcessorBankTransferCreateRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/processor/identity/get': {
      $post: {
        input: { json: ProcessorIdentityGetRequest }
        output: ProcessorIdentityGetResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/processor/signal/decision/report': {
      $post:
        | {
            input: { json: ProcessorSignalDecisionReportRequest }
            output: ProcessorSignalDecisionReportResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ProcessorSignalDecisionReportRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/processor/signal/evaluate': {
      $post:
        | {
            input: { json: ProcessorSignalEvaluateRequest }
            output: ProcessorSignalEvaluateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ProcessorSignalEvaluateRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/processor/signal/return/report': {
      $post:
        | {
            input: { json: ProcessorSignalReturnReportRequest }
            output: ProcessorSignalReturnReportResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ProcessorSignalReturnReportRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/processor/stripe/bank_account_token/create': {
      $post: {
        input: { json: ProcessorStripeBankAccountTokenCreateRequest }
        output: ProcessorStripeBankAccountTokenCreateResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/processor/token/create': {
      $post: {
        input: { json: ProcessorTokenCreateRequest }
        output: ProcessorTokenCreateResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sandbox/bank_transfer/fire_webhook': {
      $post:
        | {
            input: { json: SandboxBankTransferFireWebhookRequest }
            output: SandboxBankTransferFireWebhookResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: SandboxBankTransferFireWebhookRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/sandbox/bank_transfer/simulate': {
      $post:
        | {
            input: { json: SandboxBankTransferSimulateRequest }
            output: SandboxBankTransferSimulateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: SandboxBankTransferSimulateRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/sandbox/income/fire_webhook': {
      $post:
        | {
            input: { json: SandboxIncomeFireWebhookRequest }
            output: SandboxIncomeFireWebhookResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: SandboxIncomeFireWebhookRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/sandbox/item/fire_webhook': {
      $post:
        | {
            input: { json: SandboxItemFireWebhookRequest }
            output: SandboxItemFireWebhookResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: SandboxItemFireWebhookRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/sandbox/item/reset_login': {
      $post: {
        input: { json: SandboxItemResetLoginRequest }
        output: SandboxItemResetLoginResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sandbox/item/set_verification_status': {
      $post: {
        input: { json: SandboxItemSetVerificationStatusRequest }
        output: SandboxItemSetVerificationStatusResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sandbox/oauth/select_accounts': {
      $post:
        | {
            input: { json: SandboxOauthSelectAccountsRequest }
            output: SandboxOauthSelectAccountsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: SandboxOauthSelectAccountsRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/sandbox/payment_profile/reset_login': {
      $post: {
        input: { json: SandboxPaymentProfileResetLoginRequest }
        output: SandboxPaymentProfileResetLoginResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/sandbox/processor_token/create': {
      $post:
        | {
            input: { json: SandboxProcessorTokenCreateRequest }
            output: SandboxProcessorTokenCreateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: SandboxProcessorTokenCreateRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/sandbox/public_token/create': {
      $post:
        | {
            input: { json: SandboxPublicTokenCreateRequest }
            output: SandboxPublicTokenCreateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: SandboxPublicTokenCreateRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/sandbox/transfer/fire_webhook': {
      $post:
        | {
            input: { json: SandboxTransferFireWebhookRequest }
            output: SandboxTransferFireWebhookResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: SandboxTransferFireWebhookRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/sandbox/transfer/repayment/simulate': {
      $post:
        | {
            input: { json: SandboxTransferRepaymentSimulateRequest }
            output: SandboxTransferRepaymentSimulateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: SandboxTransferRepaymentSimulateRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/sandbox/transfer/simulate': {
      $post:
        | {
            input: { json: SandboxTransferSimulateRequest }
            output: SandboxTransferSimulateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: SandboxTransferSimulateRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/sandbox/transfer/sweep/simulate': {
      $post:
        | {
            input: { json: SandboxTransferSweepSimulateRequest }
            output: SandboxTransferSweepSimulateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: SandboxTransferSweepSimulateRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/sandbox/transfer/test_clock/advance': {
      $post:
        | {
            input: { json: SandboxTransferTestClockAdvanceRequest }
            output: SandboxTransferTestClockAdvanceResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: SandboxTransferTestClockAdvanceRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/sandbox/transfer/test_clock/create': {
      $post:
        | {
            input: { json: SandboxTransferTestClockCreateRequest }
            output: SandboxTransferTestClockCreateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: SandboxTransferTestClockCreateRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/sandbox/transfer/test_clock/get': {
      $post:
        | {
            input: { json: SandboxTransferTestClockGetRequest }
            output: SandboxTransferTestClockGetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: SandboxTransferTestClockGetRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/sandbox/transfer/test_clock/list': {
      $post:
        | {
            input: { json: SandboxTransferTestClockListRequest }
            output: SandboxTransferTestClockListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: SandboxTransferTestClockListRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/signal/decision/report': {
      $post:
        | {
            input: { json: SignalDecisionReportRequest }
            output: SignalDecisionReportResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: SignalDecisionReportRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/signal/evaluate': {
      $post:
        | {
            input: { json: SignalEvaluateRequest }
            output: SignalEvaluateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: SignalEvaluateRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/signal/prepare': {
      $post:
        | {
            input: { json: SignalPrepareRequest }
            output: SignalPrepareResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: SignalPrepareRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/signal/return/report': {
      $post:
        | {
            input: { json: SignalReturnReportRequest }
            output: SignalReturnReportResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: SignalReturnReportRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/transactions/enrich': {
      $post:
        | {
            input: { json: TransactionsEnrichGetRequest }
            output: TransactionsEnrichGetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: TransactionsEnrichGetRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/transactions/get': {
      $post:
        | {
            input: { json: TransactionsGetRequest }
            output: TransactionsGetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: TransactionsGetRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/transactions/recurring/get': {
      $post:
        | {
            input: { json: TransactionsRecurringGetRequest }
            output: TransactionsRecurringGetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: TransactionsRecurringGetRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/transactions/refresh': {
      $post:
        | {
            input: { json: TransactionsRefreshRequest }
            output: TransactionsRefreshResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: TransactionsRefreshRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/transactions/sync': {
      $post:
        | {
            input: { json: TransactionsSyncRequest }
            output: TransactionsSyncResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: TransactionsSyncRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/transfer/authorization/create': {
      $post:
        | {
            input: { json: TransferAuthorizationCreateRequest }
            output: TransferAuthorizationCreateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: TransferAuthorizationCreateRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/transfer/cancel': {
      $post:
        | {
            input: { json: TransferCancelRequest }
            output: TransferCancelResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: TransferCancelRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/transfer/capabilities/get': {
      $post:
        | {
            input: { json: TransferCapabilitiesGetRequest }
            output: TransferCapabilitiesGetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: TransferCapabilitiesGetRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/transfer/create': {
      $post:
        | {
            input: { json: TransferCreateRequest }
            output: TransferCreateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: TransferCreateRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/transfer/event/list': {
      $post:
        | {
            input: { json: TransferEventListRequest }
            output: TransferEventListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: TransferEventListRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/transfer/event/sync': {
      $post:
        | {
            input: { json: TransferEventSyncRequest }
            output: TransferEventSyncResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: TransferEventSyncRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/transfer/get': {
      $post:
        | {
            input: { json: TransferGetRequest }
            output: TransferGetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: TransferGetRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/transfer/intent/create': {
      $post:
        | {
            input: { json: TransferIntentCreateRequest }
            output: TransferIntentCreateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: TransferIntentCreateRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/transfer/intent/get': {
      $post:
        | {
            input: { json: TransferIntentGetRequest }
            output: TransferIntentGetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: TransferIntentGetRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/transfer/list': {
      $post:
        | {
            input: { json: TransferListRequest }
            output: TransferListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: TransferListRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/transfer/migrate_account': {
      $post:
        | {
            input: { json: TransferMigrateAccountRequest }
            output: TransferMigrateAccountResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: TransferMigrateAccountRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/transfer/originator/create': {
      $post:
        | {
            input: { json: TransferOriginatorCreateRequest }
            output: TransferOriginatorCreateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: TransferOriginatorCreateRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/transfer/originator/get': {
      $post:
        | {
            input: { json: TransferOriginatorGetRequest }
            output: TransferOriginatorGetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: TransferOriginatorGetRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/transfer/originator/list': {
      $post:
        | {
            input: { json: TransferOriginatorListRequest }
            output: TransferOriginatorListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: TransferOriginatorListRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/transfer/questionnaire/create': {
      $post:
        | {
            input: { json: TransferQuestionnaireCreateRequest }
            output: TransferQuestionnaireCreateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: TransferQuestionnaireCreateRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/transfer/recurring/cancel': {
      $post:
        | {
            input: { json: TransferRecurringCancelRequest }
            output: TransferRecurringCancelResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: TransferRecurringCancelRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/transfer/recurring/create': {
      $post:
        | {
            input: { json: TransferRecurringCreateRequest }
            output: TransferRecurringCreateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: TransferRecurringCreateRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/transfer/recurring/get': {
      $post:
        | {
            input: { json: TransferRecurringGetRequest }
            output: TransferRecurringGetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: TransferRecurringGetRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/transfer/recurring/list': {
      $post:
        | {
            input: { json: TransferRecurringListRequest }
            output: TransferRecurringListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: TransferRecurringListRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/transfer/refund/cancel': {
      $post:
        | {
            input: { json: TransferRefundCancelRequest }
            output: TransferRefundCancelResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: TransferRefundCancelRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/transfer/refund/create': {
      $post:
        | {
            input: { json: TransferRefundCreateRequest }
            output: TransferRefundCreateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: TransferRefundCreateRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/transfer/refund/get': {
      $post:
        | {
            input: { json: TransferRefundGetRequest }
            output: TransferRefundGetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: TransferRefundGetRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/transfer/repayment/list': {
      $post:
        | {
            input: { json: TransferRepaymentListRequest }
            output: TransferRepaymentListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: TransferRepaymentListRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/transfer/repayment/return/list': {
      $post:
        | {
            input: { json: TransferRepaymentReturnListRequest }
            output: TransferRepaymentReturnListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: TransferRepaymentReturnListRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/transfer/sweep/get': {
      $post:
        | {
            input: { json: TransferSweepGetRequest }
            output: TransferSweepGetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: TransferSweepGetRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/transfer/sweep/list': {
      $post:
        | {
            input: { json: TransferSweepListRequest }
            output: TransferSweepListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: TransferSweepListRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/user/create': {
      $post: {
        input: { json: UserCreateRequest }
        output: UserCreateResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/wallet/create': {
      $post: {
        input: { json: WalletCreateRequest }
        output: WalletCreateResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/wallet/get': {
      $post: {
        input: { json: WalletGetRequest }
        output: WalletGetResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/wallet/list': {
      $post: {
        input: { json: WalletListRequest }
        output: WalletListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/wallet/transaction/execute': {
      $post: {
        input: { json: WalletTransactionExecuteRequest }
        output: WalletTransactionExecuteResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/wallet/transaction/get': {
      $post: {
        input: { json: WalletTransactionGetRequest }
        output: WalletTransactionGetResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/wallet/transaction/list': {
      $post: {
        input: { json: WalletTransactionListRequest }
        output: WalletTransactionListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/watchlist_screening/entity/create': {
      $post: {
        input: { json: WatchlistScreeningEntityCreateRequest }
        output: WatchlistScreeningEntityCreateResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/watchlist_screening/entity/get': {
      $post: {
        input: { json: WatchlistScreeningEntityGetRequest }
        output: WatchlistScreeningEntityGetResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/watchlist_screening/entity/history/list': {
      $post: {
        input: { json: WatchlistScreeningEntityHistoryListRequest }
        output: WatchlistScreeningEntityHistoryListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/watchlist_screening/entity/hit/list': {
      $post: {
        input: { json: WatchlistScreeningEntityHitListRequest }
        output: WatchlistScreeningEntityHitListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/watchlist_screening/entity/list': {
      $post: {
        input: { json: WatchlistScreeningEntityListRequest }
        output: WatchlistScreeningEntityListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/watchlist_screening/entity/program/get': {
      $post: {
        input: { json: WatchlistScreeningEntityProgramGetRequest }
        output: WatchlistScreeningEntityProgramGetResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/watchlist_screening/entity/program/list': {
      $post: {
        input: { json: WatchlistScreeningEntityProgramListRequest }
        output: WatchlistScreeningEntityProgramListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/watchlist_screening/entity/review/create': {
      $post: {
        input: { json: WatchlistScreeningEntityReviewCreateRequest }
        output: WatchlistScreeningEntityReviewCreateResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/watchlist_screening/entity/review/list': {
      $post: {
        input: { json: WatchlistScreeningEntityReviewListRequest }
        output: WatchlistScreeningEntityReviewListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/watchlist_screening/entity/update': {
      $post: {
        input: { json: WatchlistScreeningEntityUpdateRequest }
        output: WatchlistScreeningEntityUpdateResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/watchlist_screening/individual/create': {
      $post: {
        input: { json: WatchlistScreeningIndividualCreateRequest }
        output: WatchlistScreeningIndividualCreateResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/watchlist_screening/individual/get': {
      $post: {
        input: { json: WatchlistScreeningIndividualGetRequest }
        output: WatchlistScreeningIndividualGetResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/watchlist_screening/individual/history/list': {
      $post: {
        input: { json: WatchlistScreeningIndividualHistoryListRequest }
        output: WatchlistScreeningIndividualHistoryListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/watchlist_screening/individual/hit/list': {
      $post: {
        input: { json: WatchlistScreeningIndividualHitListRequest }
        output: WatchlistScreeningIndividualHitListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/watchlist_screening/individual/list': {
      $post: {
        input: { json: WatchlistScreeningIndividualListRequest }
        output: WatchlistScreeningIndividualListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/watchlist_screening/individual/program/get': {
      $post: {
        input: { json: WatchlistScreeningIndividualProgramGetRequest }
        output: WatchlistScreeningIndividualProgramGetResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/watchlist_screening/individual/program/list': {
      $post: {
        input: { json: WatchlistScreeningIndividualProgramListRequest }
        output: WatchlistScreeningIndividualProgramListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/watchlist_screening/individual/review/create': {
      $post: {
        input: { json: WatchlistScreeningIndividualReviewCreateRequest }
        output: WatchlistScreeningIndividualReviewCreateResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/watchlist_screening/individual/review/list': {
      $post: {
        input: { json: WatchlistScreeningIndividualReviewListRequest }
        output: WatchlistScreeningIndividualReviewListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/watchlist_screening/individual/update': {
      $post: {
        input: { json: WatchlistScreeningIndividualUpdateRequest }
        output: WatchlistScreeningIndividualUpdateResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/webhook_verification_key/get': {
      $post: {
        input: { json: WebhookVerificationKeyGetRequest }
        output: WebhookVerificationKeyGetResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
