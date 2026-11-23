type APIClientID = string
type APISecret = string
type AccessToken = string
type AssetReportAddOns = 'investments' | 'fast_assets'
type AssetReportUser = {
  client_user_id?: (string | null) | undefined
  first_name?: (string | null) | undefined
  middle_name?: (string | null) | undefined
  last_name?: (string | null) | undefined
  ssn?: (string | null) | undefined
  phone_number?: (string | null) | undefined
  email?: (string | null) | undefined
}
type AssetReportCreateRequestOptions = {
  client_report_id?: (string | null) | undefined
  webhook?: (string | null) | undefined
  include_fast_report?: (boolean | null) | undefined
  products?: string[] | undefined
  add_ons?: AssetReportAddOns[] | undefined
  user?: AssetReportUser | undefined
  require_all_items?: (boolean | null) | undefined
}
type AssetReportCreateRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  access_tokens?: AccessToken[] | undefined
  days_requested: number
  options?: AssetReportCreateRequestOptions | undefined
}
type AssetReportToken = string
type AssetReportId = string
type RequestID = string
type AssetReportCreateResponse = {
  asset_report_token: AssetReportToken
  asset_report_id: AssetReportId
  request_id: RequestID
}
type PlaidErrorType =
  | 'INVALID_REQUEST'
  | 'INVALID_RESULT'
  | 'INVALID_INPUT'
  | 'INSTITUTION_ERROR'
  | 'RATE_LIMIT_EXCEEDED'
  | 'API_ERROR'
  | 'ITEM_ERROR'
  | 'ASSET_REPORT_ERROR'
  | 'BASE_REPORT_ERROR'
  | 'RECAPTCHA_ERROR'
  | 'OAUTH_ERROR'
  | 'PAYMENT_ERROR'
  | 'BANK_TRANSFER_ERROR'
  | 'INCOME_VERIFICATION_ERROR'
  | 'MICRODEPOSITS_ERROR'
  | 'SANDBOX_ERROR'
  | 'PARTNER_ERROR'
  | 'SIGNAL_ERROR'
  | 'TRANSACTIONS_ERROR'
  | 'TRANSACTION_ERROR'
  | 'TRANSFER_ERROR'
  | 'CHECK_REPORT_ERROR'
  | 'CONSUMER_REPORT_ERROR'
  | 'USER_ERROR'
  | 'IDEMPOTENCY_ERROR'
  | 'ASSETS_ERROR'
  | 'CRA_MONITORING_ERROR'
  | 'CREDIT_PROFILE_REPORT_ERROR'
  | 'ENCOMPASS_ERROR'
  | 'ENRICH_ERROR'
  | 'FRAUD_INSIGHTS_ERROR'
  | 'FREDDIE_MAC_ERROR'
  | 'LINK_DELIVERY_ERROR'
  | 'PROFILE_ERROR'
  | 'RECURRING_TRANSACTIONS_ERROR'
  | 'STATEMENTS_ERROR'
  | 'TRANSFER_RECURRING_ERROR'
  | 'TRANSFER_REFUND_ERROR'
  | 'CRA_REPORT_ERROR'
  | 'CRA_PARTNER_INSIGHTS_ERROR'
type PlaidError = {
  error_type: PlaidErrorType
  error_code: string
  error_code_reason?: (string | null) | undefined
  error_message: string
  display_message: string | null
  request_id?: string | undefined
  causes?: { [x: string]: unknown }[] | undefined
  status?: (number | null) | undefined
  documentation_url?: string | undefined
  suggested_action?: (string | null) | undefined
  required_account_subtypes?: string[] | undefined
  provided_account_subtypes?: string[] | undefined
} | null
type AssetReportTokenNullable = string
type AssetReportGetRequestOptions = { days_to_include?: (number | null) | undefined }
type AssetReportGetRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  asset_report_token?: AssetReportTokenNullable | undefined
  user_token?: string | undefined
  include_insights?: boolean | undefined
  fast_report?: boolean | undefined
  options?: AssetReportGetRequestOptions | undefined
}
type MonthlyAverage = {
  amount?: (number | null) | undefined
  iso_currency_code?: (string | null) | undefined
  unofficial_currency_code?: (string | null) | undefined
} | null
type CategoryExpenses = {
  id?: string | undefined
  transactions_count?: (number | null) | undefined
  amount?: (number | null) | undefined
  iso_currency_code?: (string | null) | undefined
  unofficial_currency_code?: (string | null) | undefined
  monthly_average?: MonthlyAverage | undefined
} | null
type AmountWithCurrency = {
  amount?: (number | null) | undefined
  iso_currency_code?: (string | null) | undefined
  unofficial_currency_code?: (string | null) | undefined
} | null
type MonthlySummary = {
  start_date?: (string | null) | undefined
  end_date?: (string | null) | undefined
  total_amount?: AmountWithCurrency | undefined
} | null
type BankPenaltiesIndicators = {
  amount?: (number | null) | undefined
  iso_currency_code?: (string | null) | undefined
  unofficial_currency_code?: (string | null) | undefined
  monthly_average?: MonthlyAverage | undefined
  category_details: CategoryExpenses[]
  transactions_count?: (number | null) | undefined
  monthly_summaries: MonthlySummary[]
  days_since_last_occurrence?: (number | null) | undefined
  percentage_of_income?: (number | null) | undefined
} | null
type GamblingIndicators = {
  amount?: (number | null) | undefined
  iso_currency_code?: (string | null) | undefined
  unofficial_currency_code?: (string | null) | undefined
  monthly_average?: MonthlyAverage | undefined
  top_merchants: string[]
  transactions_count?: (number | null) | undefined
  monthly_summaries: MonthlySummary[]
  days_since_last_occurrence?: (number | null) | undefined
  percentage_of_income?: (number | null) | undefined
} | null
type LoanDisbursementsIndicators = {
  amount?: (number | null) | undefined
  iso_currency_code?: (string | null) | undefined
  unofficial_currency_code?: (string | null) | undefined
  category_details: CategoryExpenses[]
  monthly_average?: MonthlyAverage | undefined
  top_providers: string[]
  transactions_count?: (number | null) | undefined
  monthly_summaries: MonthlySummary[]
  days_since_last_occurrence?: (number | null) | undefined
  percentage_of_income?: (number | null) | undefined
} | null
type LoanPaymentsIndicators = {
  amount?: (number | null) | undefined
  iso_currency_code?: (string | null) | undefined
  unofficial_currency_code?: (string | null) | undefined
  monthly_average?: MonthlyAverage | undefined
  category_details: CategoryExpenses[]
  top_providers: string[]
  transactions_count?: (number | null) | undefined
  monthly_summaries: MonthlySummary[]
  days_since_last_occurrence?: (number | null) | undefined
  percentage_of_income?: (number | null) | undefined
} | null
type NegativeBalanceOccurrence = {
  start_date?: (string | null) | undefined
  end_date?: (string | null) | undefined
  minimum_balance?: AmountWithCurrency | undefined
} | null
type NegativeBalanceInsights = {
  days_since_last_occurrence?: (number | null) | undefined
  days_with_negative_balance?: (number | null) | undefined
  minimum_balance?: AmountWithCurrency | undefined
  occurrences?: NegativeBalanceOccurrence[] | undefined
} | null
type RiskIndicators = {
  bank_penalties?: BankPenaltiesIndicators | undefined
  gambling?: GamblingIndicators | undefined
  loan_disbursements?: LoanDisbursementsIndicators | undefined
  loan_payments?: LoanPaymentsIndicators | undefined
  negative_balance?: NegativeBalanceInsights | undefined
} | null
type ExpenditureSummary = {
  amount?: (number | null) | undefined
  iso_currency_code?: (string | null) | undefined
  unofficial_currency_code?: (string | null) | undefined
  monthly_average?: MonthlyAverage | undefined
  transactions_count?: (number | null) | undefined
  percentage_of_income?: (number | null) | undefined
  top_categories: CategoryExpenses[]
  monthly_summaries: MonthlySummary[]
} | null
type OutlierTransactionsInsights = {
  transactions_count?: (number | null) | undefined
  total_amount?: AmountWithCurrency | undefined
  top_categories: CategoryExpenses[]
} | null
type ExpenditureInsights = {
  cash_flow?:
    | {
        amount?: (number | null) | undefined
        iso_currency_code?: (string | null) | undefined
        unofficial_currency_code?: (string | null) | undefined
        monthly_average?: MonthlyAverage | undefined
      }
    | undefined
  total_expenditure?: ExpenditureSummary | undefined
  essential_expenditure?: ExpenditureSummary | undefined
  non_essential_expenditure?: ExpenditureSummary | undefined
  other_expenditure?: ExpenditureSummary | undefined
  transfers_out?: ExpenditureSummary | undefined
  outlier_transactions?: OutlierTransactionsInsights | undefined
} | null
type IncomeInsights = {
  total_income?:
    | {
        amount?: (number | null) | undefined
        iso_currency_code?: (string | null) | undefined
        unofficial_currency_code?: (string | null) | undefined
        monthly_average?: MonthlyAverage | undefined
      }
    | undefined
  income_excluding_transfers?:
    | {
        amount?: (number | null) | undefined
        iso_currency_code?: (string | null) | undefined
        unofficial_currency_code?: (string | null) | undefined
        monthly_average?: MonthlyAverage | undefined
      }
    | undefined
  transfers_in?:
    | {
        amount?: (number | null) | undefined
        iso_currency_code?: (string | null) | undefined
        unofficial_currency_code?: (string | null) | undefined
        monthly_average?: MonthlyAverage | undefined
      }
    | undefined
} | null
type AffordabilityInsights = {
  expenditure?: ExpenditureInsights | undefined
  income?: IncomeInsights | undefined
} | null
type ItemId = string
type AssetReportAccountBalance = {
  available: number | null
  current: number | null
  limit: number | null
  margin_loan_amount: number | null
  iso_currency_code: string | null
  unofficial_currency_code: string | null
  last_updated_datetime?: (string | null) | undefined
}
type AccountType =
  | 'investment'
  | 'credit'
  | 'depository'
  | 'loan'
  | 'brokerage'
  | 'payroll'
  | 'other'
type AccountSubtype =
  | '401a'
  | '401k'
  | '403B'
  | '457b'
  | '529'
  | '530a'
  | 'auto'
  | 'brokerage'
  | 'business'
  | 'cash isa'
  | 'cash management'
  | 'cd'
  | 'checking'
  | 'commercial'
  | 'commercial line of credit'
  | 'construction'
  | 'consumer'
  | 'credit card'
  | 'crypto exchange'
  | 'ebt'
  | 'education savings account'
  | 'fhsa'
  | 'fixed annuity'
  | 'gic'
  | 'health reimbursement arrangement'
  | 'home equity'
  | 'home equity loan'
  | 'hsa'
  | 'isa'
  | 'ira'
  | 'keogh'
  | 'lif'
  | 'life insurance'
  | 'limited purpose checking'
  | 'line of credit'
  | 'lira'
  | 'loan'
  | 'lrif'
  | 'lrsp'
  | 'money market'
  | 'mortgage'
  | 'mutual fund'
  | 'non-custodial wallet'
  | 'non-taxable brokerage account'
  | 'other'
  | 'other insurance'
  | 'other annuity'
  | 'overdraft'
  | 'paypal'
  | 'payroll'
  | 'pension'
  | 'prediction market'
  | 'prepaid'
  | 'prif'
  | 'profit sharing plan'
  | 'qshr'
  | 'rdsp'
  | 'resp'
  | 'retirement'
  | 'rlif'
  | 'roth'
  | 'roth 401k'
  | 'roth 403B'
  | 'roth 457b'
  | 'roth pension'
  | 'roth profit sharing plan'
  | 'roth thrift savings plan'
  | 'rrif'
  | 'rrsp'
  | 'sarsep'
  | 'savings'
  | 'sep ira'
  | 'simple ira'
  | 'sipp'
  | 'stock plan'
  | 'student'
  | 'thrift savings plan'
  | 'tfsa'
  | 'trust'
  | 'ugma'
  | 'utma'
  | 'variable annuity'
type CreditCategory = { primary: string | null; detailed: string | null } | null
type AssetReportTransaction = {
  account_id: string
  amount: number
  iso_currency_code: string | null
  unofficial_currency_code: string | null
  original_description: string | null
  category?: (string[] | null) | undefined
  category_id?: (string | null) | undefined
  credit_category?: CreditCategory | undefined
  check_number?: (string | null) | undefined
  date: string
  date_transacted?: (string | null) | undefined
  location?:
    | {
        address: string | null
        city: string | null
        region: string | null
        postal_code: string | null
        country: string | null
        lat: number | null
        lon: number | null
        store_number: string | null
      }
    | undefined
  name?: (string | null) | undefined
  merchant_name?: (string | null) | undefined
  payment_meta?:
    | {
        reference_number: string | null
        ppd_id: string | null
        payee: string | null
        by_order_of: string | null
        payer: string | null
        payment_method: string | null
        payment_processor: string | null
        reason: string | null
      }
    | undefined
  pending: boolean
  pending_transaction_id?: (string | null) | undefined
  account_owner?: (string | null) | undefined
  transaction_id: string
  transaction_type?: {} | undefined
  income_source_id?: string | undefined
}
type HoldingTaxLotPositionType = 'LONG' | 'SHORT'
type HoldingTaxLot = {
  institution_lot_id: string | null
  original_purchase_datetime: string | null
  quantity: number | null
  purchase_price: number | null
  cost_basis: number | null
  current_value: number | null
  position_type: HoldingTaxLotPositionType
}
type AssetReportInvestmentHolding = {
  account_id: string
  security_id: string
  ticker_symbol: string | null
  name: string | null
  institution_price: number | null
  institution_price_as_of?: (string | null) | undefined
  institution_value: number | null
  quantity: number | null
  vested_quantity?: (number | null) | undefined
  vested_value?: (number | null) | undefined
  iso_currency_code: string | null
  unofficial_currency_code: string | null
  tax_lots?: HoldingTaxLot[] | undefined
}
type AssetReportInvestmentSecurity = {
  security_id: string
  name: string | null
  ticker_symbol: string | null
  type: string | null
}
type AssetReportInvestmentTransaction = {
  investment_transaction_id: string
  account_id: string
  security_id: string | null
  date: string
  name: string | null
  quantity: number | null
  amount: number | null
  price: number | null
  fees: number | null
  type: {}
  subtype: {}
  iso_currency_code: string | null
  unofficial_currency_code: string | null
}
type PhoneNumber = {
  data: string
  primary: boolean
  type: 'home' | 'work' | 'office' | 'mobile' | 'mobile1' | 'other'
}
type Email = { data: string; primary: boolean; type: 'primary' | 'secondary' | 'other' }
type AddressData = {
  city: string | null
  region: string | null
  street: string | null
  postal_code: string | null
  country: string | null
}
type Address = { data: AddressData; primary?: boolean | undefined }
type Owner = {
  names: string[]
  phone_numbers: PhoneNumber[]
  emails: Email[]
  addresses: Address[]
}
type OwnershipType = null | 'individual' | 'joint' | 'association' | 'trust'
type HistoricalBalance = {
  date: string
  current: number
  iso_currency_code: string | null
  unofficial_currency_code: string | null
}
type AccountInsights = {
  risk?: RiskIndicators | undefined
  affordability?: AffordabilityInsights | undefined
} | null
type AccountAssets = {
  account_id: string
  balances: AssetReportAccountBalance
  mask: string | null
  name: string
  official_name: string | null
  type: AccountType
  subtype: AccountSubtype
  verification_status?:
    | 'automatically_verified'
    | 'pending_automatic_verification'
    | 'pending_manual_verification'
    | 'manually_verified'
    | 'verification_expired'
    | 'verification_failed'
    | 'database_matched'
    | undefined
  persistent_account_id?: string | undefined
  days_available: number
  transactions: AssetReportTransaction[]
  investments?:
    | {
        holdings: AssetReportInvestmentHolding[]
        securities: AssetReportInvestmentSecurity[]
        transactions: AssetReportInvestmentTransaction[]
      }
    | undefined
  owners: Owner[]
  ownership_type?: OwnershipType | undefined
  historical_balances: HistoricalBalance[]
  account_insights?: AccountInsights | undefined
}
type AssetReportItem = {
  item_id: ItemId
  institution_name: string
  institution_id: string
  date_last_updated: string
  accounts: AccountAssets[]
}
type AssetReport = {
  asset_report_id: AssetReportId
  insights?:
    | { risk?: RiskIndicators | undefined; affordability?: AffordabilityInsights | undefined }
    | undefined
  client_report_id: string | null
  date_generated: string
  days_requested: number
  user: AssetReportUser
  items: AssetReportItem[]
}
type Cause = {
  error_type: PlaidErrorType
  error_code: string
  error_code_reason?: (string | null) | undefined
  error_message: string
  display_message: string | null
  request_id?: string | undefined
  causes?: { [x: string]: unknown }[] | undefined
  status?: (number | null) | undefined
  documentation_url?: string | undefined
  suggested_action?: (string | null) | undefined
  required_account_subtypes?: string[] | undefined
  provided_account_subtypes?: string[] | undefined
  item_id?: ItemId | undefined
}
type Warning = {
  warning_type: string
  warning_code:
    | 'OWNERS_UNAVAILABLE'
    | 'INVESTMENTS_UNAVAILABLE'
    | 'TRANSACTIONS_UNAVAILABLE'
    | 'BANK_INCOME_INSIGHTS_INSUFFICIENT_DATA'
    | 'BANK_INCOME_INSIGHTS_INCOMPLETE'
    | 'BANK_INCOME_INSIGHTS_STATUS_IN_PROGRESS'
    | 'BANK_INCOME_INSIGHTS_INTERNAL_ERROR'
    | 'BANK_INCOME_INSIGHTS_MISMATCHED_DAYS_REQUESTED'
  cause: Cause
}
type AssetReportGetResponse = { report: AssetReport; warnings: Warning[]; request_id: RequestID }
type AssetReportPDFGetRequestOptions = { days_to_include?: (number | null) | undefined }
type AssetReportPDFGetRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  asset_report_token: AssetReportToken
  options?: AssetReportPDFGetRequestOptions | undefined
}
type AssetReportPDFGetResponse = File
type AssetReportRefreshAssetReportToken = string
type AssetReportRefreshRequestOptions = {
  client_report_id?: (string | null) | undefined
  webhook?: (string | null) | undefined
  user?: AssetReportUser | undefined
}
type AssetReportRefreshRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  asset_report_token: AssetReportRefreshAssetReportToken
  days_requested?: (number | null) | undefined
  options?: AssetReportRefreshRequestOptions | undefined
}
type AssetReportRefreshResponse = {
  asset_report_id: AssetReportId
  asset_report_token: AssetReportToken
  request_id: RequestID
}
type AssetReportFilterRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  asset_report_token: AssetReportToken
  account_ids_to_exclude: string[]
}
type AssetReportFilterResponse = {
  asset_report_token: AssetReportToken
  asset_report_id: AssetReportId
  request_id: RequestID
}
type AssetReportRemoveRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  asset_report_token: AssetReportToken
}
type AssetReportRemoveResponse = { removed: boolean; request_id: RequestID }
type AssetReportAuditCopyCreateRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  asset_report_token: AssetReportToken
  auditor_id?: string | undefined
}
type AssetReportAuditCopyCreateResponse = { audit_copy_token: string; request_id: RequestID }
type AssetReportAuditCopyGetRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  audit_copy_token: string
}
type AssetReportAuditCopyPdfGetRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  audit_copy_token: string
  options?: AssetReportPDFGetRequestOptions | undefined
}
type AssetReportAuditCopyPdfGetResponse = File
type AssetReportAuditCopyRemoveRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  audit_copy_token: string
}
type AssetReportAuditCopyRemoveResponse = { removed: boolean; request_id: RequestID }
type NewUserID = string
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
  | 'BENEFIT_OTHER'
  | 'OTHER'
type UserToken = string
type CraMonitoringInsightsSubscribeRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  user_id?: NewUserID | undefined
  item_id?: string | undefined
  webhook: string
  income_categories?: (CreditBankIncomeCategory[] | null) | undefined
  user_token?: UserToken | undefined
}
type CraMonitoringInsightsSubscriptionID = string
type CraMonitoringInsightsSubscribeResponse = {
  request_id: RequestID
  subscription_id: CraMonitoringInsightsSubscriptionID
}
type CraMonitoringInsightsUnsubscribeRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  subscription_id: CraMonitoringInsightsSubscriptionID
}
type CraMonitoringInsightsUnsubscribeResponse = { request_id: RequestID }
type MonitoringConsumerReportPermissiblePurpose =
  | 'ACCOUNT_REVIEW_CREDIT'
  | 'ACCOUNT_REVIEW_NON_CREDIT'
  | 'WRITTEN_INSTRUCTION_OTHER'
  | 'SECONDARY_INVESTOR'
type CraMonitoringInsightsGetRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  user_id?: NewUserID | undefined
  consumer_report_permissible_purpose: MonitoringConsumerReportPermissiblePurpose
  user_token?: UserToken | undefined
}
type UserInsightsId = string
type MonitoringItemStatusCode = 'AVAILABLE' | 'FAILED' | 'PENDING'
type MonitoringInsightsItemStatus = {
  status_code: MonitoringItemStatusCode
  reason?: (string | null) | undefined
}
type TotalMonthlyIncomeInsights = {
  baseline_amount?: (number | null) | undefined
  current_amount: number
}
type IncomeSourcesCounts = { baseline_count?: (number | null) | undefined; current_count: number }
type ForecastedMonthlyIncome = {
  baseline_amount?: (number | null) | undefined
  current_amount: number
}
type HistoricalAnnualIncome = {
  baseline_amount?: (number | null) | undefined
  current_amount: number
}
type MonitoringIncomeSource = {
  income_source_id: string
  income_description: string
  income_category: CreditBankIncomeCategory
  last_transaction_date: string
}
type MonitoringIncomeInsights = {
  total_monthly_income: TotalMonthlyIncomeInsights
  income_sources_counts: IncomeSourcesCounts
  forecasted_monthly_income: ForecastedMonthlyIncome
  historical_annual_income: HistoricalAnnualIncome
  income_sources: MonitoringIncomeSource[]
}
type LoanPaymentsCounts = { baseline_count?: (number | null) | undefined; current_count: number }
type LoanPaymentsMerchantCounts = {
  baseline_count?: (number | null) | undefined
  current_count: number
}
type MonitoringLoanInsights = {
  loan_payments_counts: LoanPaymentsCounts
  loan_disbursements_count: number
  loan_payment_merchants_counts: LoanPaymentsMerchantCounts
}
type MonitoringInsights = { income: MonitoringIncomeInsights; loans: MonitoringLoanInsights } | null
type CreditIsoCurrencyCode = string | null
type CreditUnofficialCurrencyCode = string | null
type CreditAmountWithCurrency = {
  amount: number
  iso_currency_code: CreditIsoCurrencyCode
  unofficial_currency_code: CreditUnofficialCurrencyCode
}
type BaseReportAverageMonthlyBalances = {
  start_date: string
  end_date: string
  average_balance: CreditAmountWithCurrency
}
type BaseReportAccountBalances = {
  available: number | null
  current: number | null
  limit: number | null
  iso_currency_code: string | null
  unofficial_currency_code: string | null
  last_updated_datetime?: (string | null) | undefined
  average_balance?: (number | null) | undefined
  average_monthly_balances?: BaseReportAverageMonthlyBalances[] | undefined
  most_recent_thirty_day_average_balance?: (number | null) | undefined
}
type ConsumerDisputeCategory = 'TRANSACTION' | 'BALANCE' | 'IDENTITY' | 'OTHER'
type ConsumerDispute = {
  consumer_dispute_id: string
  dispute_field_create_date: string
  category: ConsumerDisputeCategory
  statement: string
}
type BaseReportAccountMetadata = { start_date: string | null; end_date: string | null }
type BaseReportTransactionType = 'digital' | 'place' | 'special' | 'unresolved'
type PersonalFinanceCategoryVersion = 'v1' | 'v2'
type BaseReportTransaction = {
  account_id: string
  amount: number
  iso_currency_code: string | null
  unofficial_currency_code: string | null
  name?: (string | null) | undefined
  original_description: string | null
  credit_category?: CreditCategory | undefined
  check_number?: (string | null) | undefined
  date: string
  date_transacted?: (string | null) | undefined
  location?:
    | {
        address: string | null
        city: string | null
        region: string | null
        postal_code: string | null
        country: string | null
        lat: number | null
        lon: number | null
        store_number: string | null
      }
    | undefined
  merchant_name?: (string | null) | undefined
  pending: boolean
  account_owner?: (string | null) | undefined
  transaction_id: string
  transaction_type?: BaseReportTransactionType | undefined
  category?: (string[] | null) | undefined
  category_id?: (string | null) | undefined
  personal_finance_category?:
    | {
        primary: string
        detailed: string
        confidence_level?: (string | null) | undefined
        version?: PersonalFinanceCategoryVersion | undefined
      }
    | undefined
}
type BaseReportInvestmentHolding = {
  account_id: string
  security_id: string
  institution_price: number
  institution_price_as_of?: (string | null) | undefined
  institution_value: number
  cost_basis: number | null
  quantity: number
  iso_currency_code: string | null
  unofficial_currency_code: string | null
  tax_lots?: HoldingTaxLot[] | undefined
}
type BaseReportInvestmentSecurity = {
  security_id: string
  name: string | null
  isin: string | null
  cusip: string | null
  institution_security_id: string | null
  institution_id: string | null
  ticker_symbol: string | null
  type: string | null
}
type InvestmentTransactionType = 'buy' | 'sell' | 'cancel' | 'cash' | 'fee' | 'transfer'
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
  | 'interest'
  | 'interest receivable'
  | 'interest reinvestment'
  | 'legal fee'
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
type BaseReportInvestmentTransaction = {
  investment_transaction_id: string
  account_id: string
  security_id: string | null
  date: string
  name: string
  quantity: number
  amount: number
  price: number
  fees: number | null
  type: InvestmentTransactionType
  subtype: InvestmentTransactionSubtype
  iso_currency_code: string | null
  unofficial_currency_code: string | null
}
type BaseReportHistoricalBalance = {
  date: string
  current: number
  iso_currency_code: string | null
  unofficial_currency_code: string | null
}
type BaseReportLongestGapInsights = {
  start_date?: string | undefined
  end_date?: string | undefined
  days?: (number | null) | undefined
}
type BaseReportNumberFlowInsights = { start_date: string; end_date: string; count: number }
type BaseReportAverageFlowInsights = {
  start_date: string
  end_date: string
  total_amount: CreditAmountWithCurrency
}
type BaseReportAccountInsights = {
  oldest_transaction_date?: (string | null) | undefined
  most_recent_transaction_date?: (string | null) | undefined
  days_available?: number | undefined
  average_days_between_transactions?: number | undefined
  longest_gaps_between_transactions?: BaseReportLongestGapInsights[] | undefined
  number_of_inflows?: BaseReportNumberFlowInsights[] | undefined
  average_inflow_amounts?: BaseReportAverageFlowInsights[] | undefined
  number_of_outflows?: BaseReportNumberFlowInsights[] | undefined
  average_outflow_amounts?: BaseReportAverageFlowInsights[] | undefined
  number_of_days_no_transactions?: number | undefined
}
type TotalInflowAmount = {
  amount: number
  iso_currency_code: CreditIsoCurrencyCode
  unofficial_currency_code: CreditUnofficialCurrencyCode
} | null
type TotalInflowAmount30d = {
  amount: number
  iso_currency_code: CreditIsoCurrencyCode
  unofficial_currency_code: CreditUnofficialCurrencyCode
} | null
type TotalInflowAmount60d = {
  amount: number
  iso_currency_code: CreditIsoCurrencyCode
  unofficial_currency_code: CreditUnofficialCurrencyCode
} | null
type TotalInflowAmount90d = {
  amount: number
  iso_currency_code: CreditIsoCurrencyCode
  unofficial_currency_code: CreditUnofficialCurrencyCode
} | null
type TotalOutflowAmount = {
  amount: number
  iso_currency_code: CreditIsoCurrencyCode
  unofficial_currency_code: CreditUnofficialCurrencyCode
} | null
type TotalOutflowAmount30d = {
  amount: number
  iso_currency_code: CreditIsoCurrencyCode
  unofficial_currency_code: CreditUnofficialCurrencyCode
} | null
type TotalOutflowAmount60d = {
  amount: number
  iso_currency_code: CreditIsoCurrencyCode
  unofficial_currency_code: CreditUnofficialCurrencyCode
} | null
type TotalOutflowAmount90d = {
  amount: number
  iso_currency_code: CreditIsoCurrencyCode
  unofficial_currency_code: CreditUnofficialCurrencyCode
} | null
type BaseReportAttributes = {
  is_primary_account?: (boolean | null) | undefined
  primary_account_score?: (number | null) | undefined
  nsf_overdraft_transactions_count?: (number | null) | undefined
  nsf_overdraft_transactions_count_30d?: (number | null) | undefined
  nsf_overdraft_transactions_count_60d?: (number | null) | undefined
  nsf_overdraft_transactions_count_90d?: (number | null) | undefined
  total_inflow_amount?: TotalInflowAmount | undefined
  total_inflow_amount_30d?: TotalInflowAmount30d | undefined
  total_inflow_amount_60d?: TotalInflowAmount60d | undefined
  total_inflow_amount_90d?: TotalInflowAmount90d | undefined
  total_outflow_amount?: TotalOutflowAmount | undefined
  total_outflow_amount_30d?: TotalOutflowAmount30d | undefined
  total_outflow_amount_60d?: TotalOutflowAmount60d | undefined
  total_outflow_amount_90d?: TotalOutflowAmount90d | undefined
}
type BaseReportAccount = {
  account_id: string
  balances: BaseReportAccountBalances
  consumer_disputes: ConsumerDispute[]
  mask: string | null
  metadata: BaseReportAccountMetadata
  name: string
  official_name: string | null
  type: AccountType
  subtype: AccountSubtype
  days_available: number
  transactions: BaseReportTransaction[]
  owners: Owner[]
  holder_category: {}
  ownership_type: OwnershipType
  investments?:
    | {
        holdings: BaseReportInvestmentHolding[]
        securities: BaseReportInvestmentSecurity[]
        investment_transactions: BaseReportInvestmentTransaction[]
      }
    | undefined
  historical_balances?: BaseReportHistoricalBalance[] | undefined
  account_insights?: BaseReportAccountInsights | undefined
  attributes?: BaseReportAttributes | undefined
}
type CraMonitoringInsightsItem = {
  date_generated: string
  item_id: string
  institution_id: string
  institution_name: string
  status: MonitoringInsightsItemStatus
  insights: MonitoringInsights
  accounts?: BaseReportAccount[] | undefined
}
type CraMonitoringInsightsGetResponse = {
  request_id: RequestID
  user_insights_id: UserInsightsId
  items: CraMonitoringInsightsItem[]
}
type CreditAuditCopyTokenUpdateRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  audit_copy_token: string
  report_tokens: AssetReportToken[]
}
type CreditAuditCopyTokenUpdateResponse = { request_id: RequestID; updated: boolean }
type CraUserTier = 'free' | 'paid' | null
type CraPartnerInsightsGetRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  user_token: UserToken
  user_tier?: CraUserTier | undefined
}
type CraPartnerInsightsUltraFicoScoreVersion = '1.0'
type CraPartnerInsightsUltraFicoScore = {
  ultrafico_score_version: CraPartnerInsightsUltraFicoScoreVersion
  score: number
  negative_reason_codes?: string[] | undefined
  positive_reason_codes?: string[] | undefined
  reason_code_1?: (string | null) | undefined
  reason_code_2?: (string | null) | undefined
  reason_code_3?: (string | null) | undefined
  reason_code_4?: (string | null) | undefined
  positive_reason_code_1?: (string | null) | undefined
  positive_reason_code_2?: (string | null) | undefined
  positive_reason_code_3?: (string | null) | undefined
  positive_reason_code_4?: (string | null) | undefined
  did_inquiries_adversely_affect_score?: (boolean | null) | undefined
} | null
type CraPartnerInsightsUltraFicoScoreResult = {
  request_correlation_id?: string | undefined
  fico_scoring_request_id?: string | undefined
  ultrafico_score?: CraPartnerInsightsUltraFicoScore | undefined
  error_reason?: string | undefined
  exclusion_code?: (string | null) | undefined
}
type CraPartnerInsightsFicoReportCharacteristics = {
  num_accounts?: (number | null) | undefined
  avg_daily_balance_over_1_month?: (number | null) | undefined
  avg_daily_balance_over_3_months?: (number | null) | undefined
  avg_daily_balance_over_6_months?: (number | null) | undefined
  avg_daily_balance_over_12_months?: (number | null) | undefined
  days_since_earliest_tx?: (number | null) | undefined
  days_since_most_recent_negative_ending_balance?: (number | null) | undefined
  days_since_most_recent_insufficient_funds_fee_debit_tx?: (number | null) | undefined
  tot_number_days_with_negative_balance_over_1_month?: (number | null) | undefined
  tot_number_days_with_negative_balance_over_3_months?: (number | null) | undefined
  tot_number_days_with_negative_balance_over_6_months?: (number | null) | undefined
  tot_number_days_with_negative_balance_over_12_months?: (number | null) | undefined
  days_since_most_recent_tx?: (number | null) | undefined
  days_with_tx_over_1_month?: (number | null) | undefined
  days_with_tx_over_3_months?: (number | null) | undefined
  days_with_tx_over_6_months?: (number | null) | undefined
  days_with_tx_over_12_months?: (number | null) | undefined
  tot_current_balances?: (number | null) | undefined
  num_checking_accounts?: (number | null) | undefined
  num_money_market_accounts?: (number | null) | undefined
  num_savings_accounts?: (number | null) | undefined
} | null
type CraPartnerInsightsFicoResults = {
  lender_application_id: string
  ultrafico_score_results: CraPartnerInsightsUltraFicoScoreResult[]
  report_characteristics?: CraPartnerInsightsFicoReportCharacteristics | undefined
} | null
type PrismInsightsResult = { [x: string]: unknown }
type PrismErrorReason = string
type PrismInsights = {
  version: number
  model_version?: string | undefined
  result?: PrismInsightsResult | undefined
  error_reason?: PrismErrorReason | undefined
} | null
type PrismCashScoreMetadata = {
  max_age: number | null
  min_age: number | null
  min_age_credit: number | null
  min_age_debit: number | null
  max_age_debit: number | null
  max_age_credit: number | null
  num_trxn_credit: number | null
  num_trxn_debit: number | null
  l1m_credit_value_cnt: number | null
  l1m_debit_value_cnt: number | null
}
type PrismCashScore = {
  version: number
  model_version?: string | undefined
  score: number | null
  reason_codes?: string[] | undefined
  metadata?: PrismCashScoreMetadata | undefined
  error_reason?: PrismErrorReason | undefined
} | null
type PrismExtend = {
  model_version: string
  score: number | null
  reason_codes?: string[] | undefined
  metadata?: PrismCashScoreMetadata | undefined
  error_reason?: PrismErrorReason | undefined
} | null
type PrismFirstDetect = {
  version: number
  model_version?: string | undefined
  score: number | null
  reason_codes?: string[] | undefined
  metadata?: PrismCashScoreMetadata | undefined
  error_reason?: PrismErrorReason | undefined
} | null
type PrismDetect = {
  model_version: string
  score: number | null
  reason_codes?: string[] | undefined
  metadata?: PrismCashScoreMetadata | undefined
  error_reason?: PrismErrorReason | undefined
} | null
type CraPartnerInsightsPrism = {
  insights?: PrismInsights | undefined
  cash_score?: PrismCashScore | undefined
  extend?: PrismExtend | undefined
  first_detect?: PrismFirstDetect | undefined
  detect?: PrismDetect | undefined
  status: string
} | null
type CraPartnerInsightsItemAccountMetadata = { start_date: string | null; end_date: string | null }
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
  | 'limited purpose checking'
  | 'all'
type CreditBankIncomeAccountType = 'depository'
type CraPartnerInsightsItemAccount = {
  account_id?: string | undefined
  mask: string | null
  metadata: CraPartnerInsightsItemAccountMetadata
  name: string
  official_name: string | null
  subtype: DepositoryAccountSubtype
  type: CreditBankIncomeAccountType
  owners: Owner[]
}
type CraPartnerInsightsItem = {
  institution_id?: string | undefined
  institution_name?: string | undefined
  item_id?: string | undefined
  accounts?: CraPartnerInsightsItemAccount[] | undefined
}
type CraPartnerInsights = {
  report_id?: string | undefined
  generated_time?: string | undefined
  client_report_id?: (string | null) | undefined
  fico?: CraPartnerInsightsFicoResults | undefined
  prism?: CraPartnerInsightsPrism | undefined
  items?: CraPartnerInsightsItem[] | undefined
}
type CraPartnerInsightsGetResponse = {
  report?: CraPartnerInsights[] | undefined
  request_id: RequestID
}
type ThirdPartyUserToken = string
type IncomeInsightsFilter = {
  included_categories: string[]
  excluded_categories?: string[] | undefined
} | null
type IncomeInsightsVersion = 'II2'
type CraCheckReportIncomeInsightsGetOptions = {
  income_insights_filter?: IncomeInsightsFilter | undefined
  income_insights_version: IncomeInsightsVersion
} | null
type CraCheckReportIncomeInsightsGetRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  user_token?: UserToken | undefined
  third_party_user_token?: ThirdPartyUserToken | undefined
  user_id?: NewUserID | undefined
  options?: CraCheckReportIncomeInsightsGetOptions | undefined
  report_id?: string | undefined
  consumer_report_permissible_purpose?: {} | undefined
}
type CraBankIncomeAccountMetadata = { start_date: string | null; end_date: string | null }
type CraBankIncomeAccount = {
  account_id?: string | undefined
  mask: string | null
  metadata: CraBankIncomeAccountMetadata
  name: string
  official_name: string | null
  subtype: DepositoryAccountSubtype
  type: CreditBankIncomeAccountType
  owners: Owner[]
  consumer_disputes: ConsumerDispute[]
}
type CreditBankIncomePayFrequency =
  | 'WEEKLY'
  | 'BIWEEKLY'
  | 'SEMI_MONTHLY'
  | 'MONTHLY'
  | 'DAILY'
  | 'UNKNOWN'
type CraBankIncomeStatus = 'ACTIVE' | 'INACTIVE' | 'UNKNOWN'
type CraPredictionInterval = {
  lower_bound?: (number | null) | undefined
  upper_bound?: (number | null) | undefined
  probability?: (number | null) | undefined
}
type CraBankIncomeEmployer = { name: string | null }
type CraBankIncomeIncomeProvider = { name: string; is_normalized: boolean } | null
type CraBankIncomeBonusType = 'BONUS_INCLUDED' | 'BONUS_ONLY' | null
type CraBankIncomeTransaction = {
  transaction_id: string
  amount: number
  date: string
  name?: string | undefined
  original_description: string | null
  pending: boolean
  check_number?: (string | null) | undefined
  iso_currency_code: CreditIsoCurrencyCode
  unofficial_currency_code: CreditUnofficialCurrencyCode
  bonus_type?: CraBankIncomeBonusType | undefined
}
type CraBankIncomeHistoricalSummary = {
  total_amounts?: CreditAmountWithCurrency[] | undefined
  start_date?: string | undefined
  end_date?: string | undefined
  transactions?: CraBankIncomeTransaction[] | undefined
}
type CraBankIncomeSource = {
  account_id?: string | undefined
  income_source_id?: string | undefined
  income_description?: string | undefined
  income_category?: CreditBankIncomeCategory | undefined
  start_date?: string | undefined
  end_date?: string | undefined
  pay_frequency?: CreditBankIncomePayFrequency | undefined
  total_amount?: number | undefined
  iso_currency_code?: CreditIsoCurrencyCode | undefined
  unofficial_currency_code?: CreditUnofficialCurrencyCode | undefined
  transaction_count?: number | undefined
  next_payment_date?: (string | null) | undefined
  status?: CraBankIncomeStatus | undefined
  historical_average_monthly_gross_income?: (number | null) | undefined
  historical_average_monthly_income?: (number | null) | undefined
  forecasted_average_monthly_income?: (number | null) | undefined
  forecasted_average_monthly_income_prediction_intervals: CraPredictionInterval[]
  employer?: CraBankIncomeEmployer | undefined
  income_provider: CraBankIncomeIncomeProvider
  historical_summary?: CraBankIncomeHistoricalSummary[] | undefined
}
type CraBankIncomeItem = {
  item_id?: ItemId | undefined
  accounts?: CraBankIncomeAccount[] | undefined
  bank_income_accounts: CraBankIncomeAccount[]
  bank_income_sources: CraBankIncomeSource[]
  last_updated_time?: string | undefined
  institution_id?: string | undefined
  institution_name?: string | undefined
}
type CraMonthlyIncomeValues = { gross_income: number; net_income: number }
type CraAnnualIncomeValues = { gross_income: number; net_income: number }
type CraCurrentModeledIncome = {
  monthly: CraMonthlyIncomeValues
  annual: CraAnnualIncomeValues
} | null
type CraProjectedModeledIncome = {
  monthly: CraMonthlyIncomeValues
  annual: CraAnnualIncomeValues
} | null
type CraIncomeMetrics = {
  current: CraCurrentModeledIncome
  projected: CraProjectedModeledIncome
  iso_currency_code: CreditIsoCurrencyCode
  unofficial_currency_code: CreditUnofficialCurrencyCode
}
type CraIncomeInsightsUserSummary = { income_metrics: CraIncomeMetrics[] } | null
type CraIncomeCategory = { primary: string; secondary: string }
type CraIncomeNextPayment = { date: string } | null
type CraIncomeStreamInsights = {
  income_category: CraIncomeCategory
  pay_frequency: CreditBankIncomePayFrequency
  income_provider: CraBankIncomeIncomeProvider
  status: CraBankIncomeStatus
  next_payment: CraIncomeNextPayment
}
type CraIncomeTransactionOutlier = { is_outlier: boolean; amount?: (number | null) | undefined }
type CraIncomeTransaction = {
  transaction_id: string
  item_id: ItemId
  account_id: string
  amount: number
  date: string
  original_description: string
  iso_currency_code: CreditIsoCurrencyCode
  unofficial_currency_code: CreditUnofficialCurrencyCode
  outlier: CraIncomeTransactionOutlier
}
type CraIncomeStream = {
  income_stream_id: string
  start_date: string
  end_date: string
  description: string
  insights: CraIncomeStreamInsights
  income_metrics: CraIncomeMetrics
  transactions: CraIncomeTransaction[]
}
type CraBankIncomeSummary = {
  total_amounts?: CreditAmountWithCurrency[] | undefined
  start_date?: string | undefined
  end_date?: string | undefined
  income_sources_count?: number | undefined
  income_categories_count?: number | undefined
  income_transactions_count?: number | undefined
  historical_average_monthly_gross_income?: CreditAmountWithCurrency[] | undefined
  historical_average_monthly_income?: CreditAmountWithCurrency[] | undefined
  forecasted_average_monthly_income?: CreditAmountWithCurrency[] | undefined
  historical_annual_gross_income?: CreditAmountWithCurrency[] | undefined
  historical_annual_income?: CreditAmountWithCurrency[] | undefined
  forecasted_annual_income?: CreditAmountWithCurrency[] | undefined
  historical_summary?: CraBankIncomeHistoricalSummary[] | undefined
}
type CreditBankIncomeWarningType = 'BANK_INCOME_WARNING'
type CraBankIncomeWarningCode =
  | 'IDENTITY_UNAVAILABLE'
  | 'TRANSACTIONS_UNAVAILABLE'
  | 'REPORT_DELETED'
  | 'DATA_UNAVAILABLE'
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
type CraBankIncomeCause = {
  error_type: CreditBankIncomeErrorType
  error_code: string
  error_message: string
  display_message: string
}
type CraBankIncomeWarning = {
  warning_type?: CreditBankIncomeWarningType | undefined
  warning_code?: CraBankIncomeWarningCode | undefined
  cause?: CraBankIncomeCause | undefined
}
type CraIncomeInsights = {
  report_id?: string | undefined
  generated_time?: string | undefined
  days_requested?: number | undefined
  client_report_id?: (string | null) | undefined
  items?: CraBankIncomeItem[] | undefined
  user_summary?: CraIncomeInsightsUserSummary | undefined
  income_streams: CraIncomeStream[]
  bank_income_summary?: CraBankIncomeSummary | undefined
  warnings?: CraBankIncomeWarning[] | undefined
}
type CheckReportWarningCode =
  | 'IDENTITY_UNAVAILABLE'
  | 'TRANSACTIONS_UNAVAILABLE'
  | 'USER_FRAUD_ALERT'
type CheckReportWarning = {
  warning_type: string
  warning_code: CheckReportWarningCode
  cause: Cause
}
type CraCheckReportIncomeInsightsGetResponse = {
  report?: CraIncomeInsights | undefined
  request_id: RequestID
  warnings?: CheckReportWarning[] | undefined
}
type CraCheckReportBaseReportGetRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  user_id?: NewUserID | undefined
  third_party_user_token?: ThirdPartyUserToken | undefined
  item_ids?: (ItemId[] | null) | undefined
  user_token?: UserToken | undefined
  user_tier?: CraUserTier | undefined
  report_id?: string | undefined
  consumer_report_permissible_purpose?: {} | undefined
}
type BaseReportId = string
type BaseReportItem = {
  institution_name: string
  institution_id: string
  date_last_updated: string
  item_id: ItemId
  accounts: BaseReportAccount[]
}
type TotalReportInflowAmount = {
  amount: number
  iso_currency_code: CreditIsoCurrencyCode
  unofficial_currency_code: CreditUnofficialCurrencyCode
} | null
type TotalReportInflowAmount30d = {
  amount: number
  iso_currency_code: CreditIsoCurrencyCode
  unofficial_currency_code: CreditUnofficialCurrencyCode
} | null
type TotalReportInflowAmount60d = {
  amount: number
  iso_currency_code: CreditIsoCurrencyCode
  unofficial_currency_code: CreditUnofficialCurrencyCode
} | null
type TotalReportInflowAmount90d = {
  amount: number
  iso_currency_code: CreditIsoCurrencyCode
  unofficial_currency_code: CreditUnofficialCurrencyCode
} | null
type TotalReportOutflowAmount = {
  amount: number
  iso_currency_code: CreditIsoCurrencyCode
  unofficial_currency_code: CreditUnofficialCurrencyCode
} | null
type TotalReportOutflowAmount30d = {
  amount: number
  iso_currency_code: CreditIsoCurrencyCode
  unofficial_currency_code: CreditUnofficialCurrencyCode
} | null
type TotalReportOutflowAmount60d = {
  amount: number
  iso_currency_code: CreditIsoCurrencyCode
  unofficial_currency_code: CreditUnofficialCurrencyCode
} | null
type TotalReportOutflowAmount90d = {
  amount: number
  iso_currency_code: CreditIsoCurrencyCode
  unofficial_currency_code: CreditUnofficialCurrencyCode
} | null
type BaseReportUserAttributes = {
  nsf_overdraft_transactions_count?: (number | null) | undefined
  nsf_overdraft_transactions_count_30d?: (number | null) | undefined
  nsf_overdraft_transactions_count_60d?: (number | null) | undefined
  nsf_overdraft_transactions_count_90d?: (number | null) | undefined
  total_inflow_amount?: TotalReportInflowAmount | undefined
  total_inflow_amount_30d?: TotalReportInflowAmount30d | undefined
  total_inflow_amount_60d?: TotalReportInflowAmount60d | undefined
  total_inflow_amount_90d?: TotalReportInflowAmount90d | undefined
  total_outflow_amount?: TotalReportOutflowAmount | undefined
  total_outflow_amount_30d?: TotalReportOutflowAmount30d | undefined
  total_outflow_amount_60d?: TotalReportOutflowAmount60d | undefined
  total_outflow_amount_90d?: TotalReportOutflowAmount90d | undefined
}
type BaseReport = {
  report_id: BaseReportId
  date_generated: string
  days_requested: number
  client_report_id?: (string | null) | undefined
  items: BaseReportItem[]
  attributes?: BaseReportUserAttributes | undefined
}
type BaseReportWarningCode =
  | 'IDENTITY_UNAVAILABLE'
  | 'TRANSACTIONS_UNAVAILABLE'
  | 'USER_FRAUD_ALERT'
type BaseReportWarning = { warning_type: string; warning_code: BaseReportWarningCode; cause: Cause }
type CraCheckReportBaseReportGetResponse = {
  report: BaseReport
  warnings: BaseReportWarning[]
  request_id: RequestID
}
type CraPDFAddOns = 'cra_income_insights' | 'cra_partner_insights' | 'cra_lend_score'
type CraCheckReportPDFGetRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  user_id?: NewUserID | undefined
  third_party_user_token?: ThirdPartyUserToken | undefined
  add_ons?: CraPDFAddOns[] | undefined
  user_token?: UserToken | undefined
}
type CraCheckReportPDFGetResponse = File
type Products =
  | 'assets'
  | 'auth'
  | 'balance'
  | 'balance_plus'
  | 'beacon'
  | 'identity'
  | 'identity_match'
  | 'investments'
  | 'investments_auth'
  | 'liabilities'
  | 'payment_initiation'
  | 'identity_verification'
  | 'transactions'
  | 'credit_details'
  | 'income'
  | 'income_verification'
  | 'standing_orders'
  | 'transfer'
  | 'employment'
  | 'recurring_transactions'
  | 'transactions_refresh'
  | 'signal'
  | 'statements'
  | 'processor_payments'
  | 'processor_identity'
  | 'profile'
  | 'cra_base_report'
  | 'cra_income_insights'
  | 'cra_partner_insights'
  | 'cra_network_insights'
  | 'cra_cashflow_insights'
  | 'cra_monitoring'
  | 'cra_lend_score'
  | 'cra_plaid_credit_score'
  | 'cra_qualify'
  | 'cra_home_lending'
  | 'cra_lend_score_complete'
  | 'cra_income_complete'
  | 'cra_home_lending_voa'
  | 'layer'
  | 'pay_by_bank'
  | 'protect_linked_bank'
  | 'protect_transactions'
type GSEReportType = 'VOA' | 'EMPLOYMENT_REFRESH'
type CraCheckReportGSEOptions = { report_types: GSEReportType[] } | null
type CraCheckReportVerificationGetReportType = 'VOA' | 'EMPLOYMENT_REFRESH' | 'INCOME'
type CraCheckReportCreateEmploymentRefreshOptions = { days_requested: number } | null
type CraCheckReportHomeLendingReportOptions = {
  reports_requested: CraCheckReportVerificationGetReportType[]
  employment_refresh_options?: CraCheckReportCreateEmploymentRefreshOptions | undefined
} | null
type CraCheckReportCreateBaseReportOptions = {
  client_report_id?: (string | null) | undefined
  gse_options?: CraCheckReportGSEOptions | undefined
  require_identity?: (boolean | null) | undefined
  home_lending_report_options?: CraCheckReportHomeLendingReportOptions | undefined
  exclude_transactions?: (boolean | null) | undefined
  base_report_version?: {} | undefined
} | null
type CashflowAttributesVersion = 'v1.0' | 'v2.0' | 'CFI1'
type CraCheckReportCreateCashflowInsightsOptions = {
  attributes_version?: CashflowAttributesVersion | undefined
} | null
type PrismFirstDetectVersion = '3' | null
type PrismDetectVersion = '4.1' | '4' | null
type PrismCashScoreVersion = '4.1' | '4' | '3_lite' | '3' | null
type PrismExtendVersion = '4.1' | '4' | null
type PrismInsightsVersion = '4.1' | '4' | '3' | null
type PrismVersions = {
  firstdetect?: PrismFirstDetectVersion | undefined
  detect?: PrismDetectVersion | undefined
  cashscore?: PrismCashScoreVersion | undefined
  extend?: PrismExtendVersion | undefined
  insights?: PrismInsightsVersion | undefined
} | null
type CraPartnerInsightsBureau = 'EQUIFAX' | 'EXPERIAN' | 'TRANSUNION'
type CraPartnerInsightsBaseFicoScoreVersion = '8' | '9' | '10' | '10T'
type CraPartnerInsightsBaseFicoScore = {
  bureau: CraPartnerInsightsBureau
  score: number
  reason_codes?: string[] | undefined
  reason_code_1?: (string | null) | undefined
  reason_code_2?: (string | null) | undefined
  reason_code_3?: (string | null) | undefined
  reason_code_4?: (string | null) | undefined
  did_inquiries_adversely_affect_score?: (boolean | null) | undefined
  base_fico_score_version: CraPartnerInsightsBaseFicoScoreVersion
}
type CraPartnerInsightsUltraFicoScoreRequest = {
  ultrafico_score_version: CraPartnerInsightsUltraFicoScoreVersion
  fico_scoring_request_id?: string | undefined
  request_correlation_id?: string | undefined
  base_fico_score: CraPartnerInsightsBaseFicoScore
}
type CraPartnerInsightsFicoInput = {
  fico_lender_id: string
  lender_application_id: string
  ultrafico_score_requests: CraPartnerInsightsUltraFicoScoreRequest[]
} | null
type CraCheckReportCreatePartnerInsightsOptions = {
  prism_versions?: PrismVersions | undefined
  fico?: CraPartnerInsightsFicoInput | undefined
} | null
type PlaidLendScoreVersion = 'v2.0' | 'LS1'
type CraCheckReportCreateLendScoreOptions = {
  lend_score_version?: PlaidLendScoreVersion | undefined
} | null
type NetworkInsightsVersion = 'NI1'
type CraCheckReportCreateNetworkInsightsOptions = {
  network_insights_version?: NetworkInsightsVersion | undefined
} | null
type CraCheckReportCreateIncomeInsightsOptions = {
  income_insights_filter?: IncomeInsightsFilter | undefined
  income_insights_version: IncomeInsightsVersion
} | null
type ConsumerReportPermissiblePurpose =
  | 'ACCOUNT_REVIEW_CREDIT'
  | 'ACCOUNT_REVIEW_NON_CREDIT'
  | 'EXTENSION_OF_CREDIT'
  | 'LEGITIMATE_BUSINESS_NEED_TENANT_SCREENING'
  | 'LEGITIMATE_BUSINESS_NEED_OTHER'
  | 'WRITTEN_INSTRUCTION_PREQUALIFICATION'
  | 'WRITTEN_INSTRUCTION_OTHER'
  | 'ELIGIBILITY_FOR_GOVT_BENEFITS'
  | 'INSURANCE_UNDERWRITING'
  | 'SECONDARY_INVESTOR'
type CraCheckReportCreateRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  user_id?: NewUserID | undefined
  user_token?: UserToken | undefined
  webhook: string
  days_requested: number
  days_required?: number | undefined
  client_report_id?: (string | null) | undefined
  products?: (Products[] | null) | undefined
  base_report?: CraCheckReportCreateBaseReportOptions | undefined
  cashflow_insights?: CraCheckReportCreateCashflowInsightsOptions | undefined
  partner_insights?: CraCheckReportCreatePartnerInsightsOptions | undefined
  lend_score?: CraCheckReportCreateLendScoreOptions | undefined
  network_insights?: CraCheckReportCreateNetworkInsightsOptions | undefined
  include_investments?: (boolean | null) | undefined
  income_insights?: CraCheckReportCreateIncomeInsightsOptions | undefined
  consumer_report_permissible_purpose: ConsumerReportPermissiblePurpose
}
type CraCheckReportCreateResponse = { request_id?: RequestID | undefined }
type CraCheckReportPartnerInsightsGetPartnerInsights = {
  prism_versions?: PrismVersions | undefined
  fico?: CraPartnerInsightsFicoInput | undefined
}
type PrismVersionsDeprecated = {
  firstdetect?: PrismFirstDetectVersion | undefined
  detect?: PrismDetectVersion | undefined
  cashscore?: PrismCashScoreVersion | undefined
  extend?: PrismExtendVersion | undefined
  insights?: PrismInsightsVersion | undefined
} | null
type CraCheckReportPartnerInsightsGetOptions = {
  prism_versions?: PrismVersionsDeprecated | undefined
} | null
type CraCheckReportPartnerInsightsGetRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  user_id?: NewUserID | undefined
  third_party_user_token?: ThirdPartyUserToken | undefined
  user_token?: UserToken | undefined
  user_tier?: CraUserTier | undefined
  partner_insights?: CraCheckReportPartnerInsightsGetPartnerInsights | undefined
  options?: CraCheckReportPartnerInsightsGetOptions | undefined
}
type CraCheckReportPartnerInsightsGetResponse = {
  report?: CraPartnerInsights | undefined
  request_id: RequestID
  warnings?: CheckReportWarning[] | undefined
}
type CraCheckReportCashflowInsightsGetOptions = {
  attributes_version?: CashflowAttributesVersion | undefined
} | null
type CraCheckReportCashflowInsightsGetRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  user_id?: NewUserID | undefined
  third_party_user_token?: ThirdPartyUserToken | undefined
  user_token?: UserToken | undefined
  options?: CraCheckReportCashflowInsightsGetOptions | undefined
}
type CashflowAttributesSchema = { [x: string]: unknown }
type CraCashflowInsightsReport = {
  report_id: string
  generated_time: string
  attributes?: CashflowAttributesSchema | undefined
}
type CraCheckReportCashflowInsightsGetResponse = {
  report: CraCashflowInsightsReport
  request_id: RequestID
  warnings?: CheckReportWarning[] | undefined
}
type CraCheckReportLendScoreGetOptions = {
  lend_score_version?: PlaidLendScoreVersion | undefined
} | null
type CraCheckReportLendScoreGetRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  user_id?: NewUserID | undefined
  third_party_user_token?: ThirdPartyUserToken | undefined
  user_token?: UserToken | undefined
  options?: CraCheckReportLendScoreGetOptions | undefined
}
type LendScore = {
  score?: (number | null) | undefined
  reason_codes?: string[] | undefined
  error_reason?: (string | null) | undefined
} | null
type CraLendScoreReport = {
  report_id: string
  generated_time: string
  lend_score?: LendScore | undefined
}
type CraCheckReportLendScoreGetResponse = {
  report: CraLendScoreReport
  request_id: RequestID
  warnings?: CheckReportWarning[] | undefined
}
type CraCheckReportNetworkInsightsGetOptions = {
  network_insights_version?: NetworkInsightsVersion | undefined
} | null
type CraCheckReportNetworkInsightsGetRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  user_id?: NewUserID | undefined
  options?: CraCheckReportNetworkInsightsGetOptions | undefined
  third_party_user_token?: ThirdPartyUserToken | undefined
  user_token?: UserToken | undefined
}
type NetworkInsightsSchema = { [x: string]: unknown }
type CraNetworkInsightsItem = { institution_id: string; institution_name: string; item_id: string }
type CraNetworkInsightsReport = {
  report_id: string
  generated_time: string
  network_attributes: NetworkInsightsSchema
  items: CraNetworkInsightsItem[]
}
type CraCheckReportNetworkInsightsGetResponse = {
  report: CraNetworkInsightsReport
  request_id: RequestID
  warnings?: CheckReportWarning[] | undefined
}
type CraCheckReportVerificationGetEmploymentRefreshOptions = { days_requested: number } | null
type CraCheckReportVerificationGetRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  user_id?: NewUserID | undefined
  reports_requested: CraCheckReportVerificationGetReportType[]
  employment_refresh_options?: CraCheckReportVerificationGetEmploymentRefreshOptions | undefined
  user_token?: UserToken | undefined
}
type CraVoaReportAccountHistoricalBalance = {
  current: number
  date: string
  iso_currency_code: string | null
  unofficial_currency_code: string | null
}
type CraVoaReportAccountBalances = {
  available: number | null
  current: number | null
  iso_currency_code: string | null
  unofficial_currency_code: string | null
  historical_balances: CraVoaReportAccountHistoricalBalance[]
  average_balance_30_days: number | null
  average_balance_60_days: number | null
  nsf_overdraft_transactions_count: number
}
type CraVoaReportTransactionsInsights = {
  all_transactions: BaseReportTransaction[]
  end_date: string | null
  start_date: string | null
}
type BaseReportInvestments = {
  holdings: BaseReportInvestmentHolding[]
  securities: BaseReportInvestmentSecurity[]
  investment_transactions: BaseReportInvestmentTransaction[]
} | null
type CraVoaReportAccount = {
  account_id: string
  balances: CraVoaReportAccountBalances
  consumer_disputes: ConsumerDispute[]
  mask: string | null
  name: string
  official_name: string | null
  type: AccountType
  subtype: AccountSubtype
  days_available: number
  transactions_insights: CraVoaReportTransactionsInsights
  owners: Owner[]
  ownership_type: OwnershipType
  investments?: BaseReportInvestments | undefined
}
type CraVoaReportItem = {
  accounts: CraVoaReportAccount[]
  institution_name: string
  institution_id: string
  item_id: ItemId
  last_update_time: string
}
type CraVoaReportAttributes = {
  total_inflow_amount: TotalReportInflowAmount
  total_outflow_amount: TotalReportOutflowAmount
}
type CraVoaReport = {
  generated_time: string
  days_requested: number
  items: CraVoaReportItem[]
  attributes: CraVoaReportAttributes
} | null
type CraEmploymentRefreshReportTransaction = {
  account_id: string
  original_description: string
  date: string
  pending: boolean
  transaction_id: string
}
type CraEmploymentRefreshReportAccount = {
  account_id: string
  name: string
  official_name: string | null
  type: AccountType
  subtype: AccountSubtype
  transactions: CraEmploymentRefreshReportTransaction[]
}
type CraEmploymentRefreshReportItem = {
  accounts: CraEmploymentRefreshReportAccount[]
  institution_name: string
  institution_id: string
  item_id: ItemId
  last_update_time: string
}
type CraEmploymentRefreshReport = {
  generated_time: string
  days_requested: number
  items: CraEmploymentRefreshReportItem[]
} | null
type CraVerificationIncomeValues = { gross_income: number; net_income: number }
type CraVerificationModeledIncome = {
  monthly: CraVerificationIncomeValues
  annual: CraVerificationIncomeValues
} | null
type CraVerificationIncomeMetrics = {
  current: CraVerificationModeledIncome
  iso_currency_code: CreditIsoCurrencyCode
  unofficial_currency_code: CreditUnofficialCurrencyCode
}
type CraVerificationIncomeUserSummary = { income_metrics: CraVerificationIncomeMetrics[] } | null
type CraVerificationIncomeCategory = { primary: string; secondary: string }
type CraVerificationIncomePayFrequency =
  | 'WEEKLY'
  | 'BIWEEKLY'
  | 'SEMI_MONTHLY'
  | 'MONTHLY'
  | 'DAILY'
  | 'UNKNOWN'
type CraVerificationIncomeProvider = { name: string; is_normalized: boolean } | null
type CraVerificationIncomeStatus = 'ACTIVE' | 'INACTIVE' | 'UNKNOWN'
type CraVerificationIncomeNextPayment = { date: string } | null
type CraVerificationIncomeStreamInsights = {
  income_category: CraVerificationIncomeCategory
  pay_frequency: CraVerificationIncomePayFrequency
  income_provider: CraVerificationIncomeProvider
  status: CraVerificationIncomeStatus
  next_payment: CraVerificationIncomeNextPayment
}
type CraVerificationIncomeTransactionOutlier = {
  is_outlier: boolean
  amount?: (number | null) | undefined
}
type CraVerificationIncomeTransaction = {
  transaction_id: string
  item_id: ItemId
  account_id: string
  amount: number
  date: string
  original_description: string
  iso_currency_code: CreditIsoCurrencyCode
  unofficial_currency_code: CreditUnofficialCurrencyCode
  outlier: CraVerificationIncomeTransactionOutlier
}
type CraVerificationIncomeStream = {
  income_stream_id: string
  start_date: string
  end_date: string
  description: string
  insights: CraVerificationIncomeStreamInsights
  income_metrics: CraVerificationIncomeMetrics
  transactions: CraVerificationIncomeTransaction[]
}
type CraVerificationIncomeAccount = {
  account_id: string
  mask: string | null
  metadata: CraBankIncomeAccountMetadata
  name: string
  official_name: string | null
  subtype: AccountSubtype
  type: AccountType
}
type CraVerificationIncomeItem = {
  item_id: ItemId
  accounts: CraVerificationIncomeAccount[]
  last_updated_time: string
  institution_id: string
  institution_name: string
}
type CraVerificationIncomeReport = {
  generated_time: string
  days_requested: number
  user_summary: CraVerificationIncomeUserSummary
  income_streams: CraVerificationIncomeStream[]
  items: CraVerificationIncomeItem[]
} | null
type CraVerificationReport = {
  report_id: string
  gse_reference_id?: string | undefined
  client_report_id?: (string | null) | undefined
  voa?: CraVoaReport | undefined
  employment_refresh?: CraEmploymentRefreshReport | undefined
  income?: CraVerificationIncomeReport | undefined
}
type CraCheckReportVerificationGetResponse = {
  report: CraVerificationReport
  request_id: RequestID
  warnings: CheckReportWarning[]
}
type CraCheckReportVerificationPdfReportType = 'voa' | 'employment_refresh' | 'income'
type CraCheckReportVerificationPdfGetRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  user_id?: NewUserID | undefined
  third_party_user_token?: ThirdPartyUserToken | undefined
  report_requested?: {} | undefined
  reports_requested?: CraCheckReportVerificationPdfReportType[] | undefined
  hide_gse_details?: boolean | undefined
  user_token?: UserToken | undefined
}
type CraCheckReportVerificationPdfGetResponse = File
type CraLoanUserToken = string
type CraLoanApplicationID = string
type CraLoanType =
  | 'PERSONAL'
  | 'CREDIT_CARD'
  | 'BUSINESS'
  | 'MORTGAGE'
  | 'AUTO'
  | 'PAYDAY'
  | 'STUDENT'
  | 'HOME_EQUITY'
  | 'OTHER'
type CraLoanApplicationDecision = 'APPROVED' | 'DECLINED' | 'OTHER'
type CraLoanApplication = {
  user_token: CraLoanUserToken
  application_id: CraLoanApplicationID
  type: CraLoanType
  decision: CraLoanApplicationDecision
  application_date?: string | undefined
  decision_date?: string | undefined
}
type CraLoansApplicationsRegisterRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  applications: CraLoanApplication[]
}
type CraLoansApplicationsRegisterResponse = { request_id: RequestID }
type CraLoanID = string
type CraLoanPaymentSchedule =
  | 'DAILY'
  | 'WEEKLY'
  | 'BIWEEKLY'
  | 'MONTHLY'
  | 'QUARTERLY'
  | 'ANNUALLY'
  | 'OTHER'
type CraLoanStatus =
  | 'APPROVED'
  | 'DECLINED'
  | 'BOOKED'
  | 'CURRENT'
  | 'DELINQUENT'
  | 'DEFAULT'
  | 'CHARGED_OFF'
  | 'TRANSFERRED'
  | 'PAID_OFF'
  | 'OTHER'
type CraLoanStatusEffectiveDate = string
type CraLoanOpenedStatus = { status: CraLoanStatus; date: CraLoanStatusEffectiveDate }
type CraLoanRegisterApplication = {
  application_id?: CraLoanApplicationID | undefined
  application_date?: string | undefined
}
type CraLoanRegister = {
  user_token: CraLoanUserToken
  loan_id: CraLoanID
  type: CraLoanType
  payment_schedule: CraLoanPaymentSchedule
  opened_date: string
  opened_with_status: CraLoanOpenedStatus
  loan_amount?: number | undefined
  application?: CraLoanRegisterApplication | undefined
}
type CRALoansRegisterRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  loans: CraLoanRegister[]
}
type CraLoansRegisterResponse = { request_id: RequestID }
type CraLoanStatusHistoryUpdate = { status: CraLoanStatus; date: CraLoanStatusEffectiveDate }
type CraLoanPaymentHistory = {
  period: number
  due_date: string
  days_past_due: number
  amount_past_due?: number | undefined
  balance_remaining?: number | undefined
}
type CraLoanUpdate = {
  loan_id?: CraLoanID | undefined
  status_history?: CraLoanStatusHistoryUpdate[] | undefined
  payment_history?: CraLoanPaymentHistory[] | undefined
}
type CraLoansUpdateRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  loans: CraLoanUpdate[]
}
type CraLoansUpdateResponse = { request_id: RequestID }
type CraLoanClosedStatus = { status: CraLoanStatus; date: CraLoanStatusEffectiveDate }
type CraLoanUnregister = { loan_id: CraLoanID; closed_with_status: CraLoanClosedStatus }
type CraLoansUnregisterRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  loans: CraLoanUnregister[]
}
type CraLoanUnregisterResponse = { request_id: RequestID }
type CraSubscriptionCadence = 'DAILY' | null
type CraProductVersion = string
type CraQualifyProductConfig = { product: 'cra_qualify'; version: CraProductVersion }
type CraBaseReportProductConfig = { product: 'cra_base_report'; version: CraProductVersion }
type CraIncomeInsightsProductConfig = {
  product: 'cra_income_insights'
  version: CraProductVersion
  options?: CraCheckReportCreateIncomeInsightsOptions | undefined
}
type CraSubscriptionProductConfig =
  | CraQualifyProductConfig
  | CraBaseReportProductConfig
  | CraIncomeInsightsProductConfig
type CraServicingSubscriptionCreateRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  user_id: NewUserID
  scope: {}
  cadence?: CraSubscriptionCadence | undefined
  webhook?: string | undefined
  products: CraSubscriptionProductConfig[]
}
type CraSubscriptionID = string
type CraServicingSubscriptionCreateResponse = {
  subscription_id: CraSubscriptionID
  request_id: RequestID
}
type CraServicingSubscriptionDeleteRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  subscription_id: CraSubscriptionID
}
type CraServicingSubscriptionDeleteResponse = {
  subscription_id: CraSubscriptionID
  request_id: RequestID
}
type CraServicingSubscriptionGetRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  subscription_id: CraSubscriptionID
}
type CraServicingSubscription = {
  subscription_id: CraSubscriptionID
  user_id: NewUserID
  scope: {}
  cadence?: CraSubscriptionCadence | undefined
  webhook?: (string | null) | undefined
  products: CraSubscriptionProductConfig[]
}
type CraServicingSubscriptionGetResponse = {
  subscription: CraServicingSubscription
  request_id: RequestID
}
type CraServicingSubscriptionListRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  user_id: NewUserID
}
type CraServicingSubscriptionListResponse = {
  subscriptions: CraServicingSubscription[]
  request_id: RequestID
}
type CraServicingSubscriptionUpdateRequestResettableField = 'webhook'
type CraServicingSubscriptionUpdateRequestResettableFieldList =
  | CraServicingSubscriptionUpdateRequestResettableField[]
  | null
type CraServicingSubscriptionUpdateRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  subscription_id: CraSubscriptionID
  webhook?: string | undefined
  products?: CraSubscriptionProductConfig[] | undefined
  reset_fields?: CraServicingSubscriptionUpdateRequestResettableFieldList | undefined
}
type CraServicingSubscriptionUpdateResponse = {
  subscription_id: CraSubscriptionID
  request_id: RequestID
}
type CraReportCreateBaseReportOptions = {
  require_identity?: (boolean | null) | undefined
  exclude_transactions?: (boolean | null) | undefined
} | null
type CraReportCreateBaseReportProductConfig = {
  product: 'cra_base_report'
  version: CraProductVersion
  options?: CraReportCreateBaseReportOptions | undefined
}
type CraReportCreateCashflowInsightsProductConfig = {
  product: 'cra_cashflow_insights'
  version: CraProductVersion
}
type CraReportCreateHomeLendingProductConfig = {
  product: 'cra_home_lending'
  version: CraProductVersion
}
type CraReportCreateHomeLendingVoaOptions = { report_format?: {} | undefined } | null
type CraReportCreateHomeLendingVoaProductConfig = {
  product: 'cra_home_lending_voa'
  version: CraProductVersion
  options?: CraReportCreateHomeLendingVoaOptions | undefined
}
type CraReportCreateIncomeInsightsOptions = {
  income_insights_filter?: IncomeInsightsFilter | undefined
} | null
type CraReportCreateIncomeInsightsProductConfig = {
  product: 'cra_income_insights'
  version: CraProductVersion
  options?: CraReportCreateIncomeInsightsOptions | undefined
}
type CraLendScoreVariant = 'GENERALIST' | 'AUTO' | 'MORTGAGE' | 'SHORT_TERM_LOANS' | 'ARC'
type CraReportCreateLendScoreOptions = { variants?: CraLendScoreVariant[] | undefined } | null
type CraReportCreateLendScoreProductConfig = {
  product: 'cra_lend_score'
  version: CraProductVersion
  options?: CraReportCreateLendScoreOptions | undefined
}
type CraReportCreateNetworkInsightsProductConfig = {
  product: 'cra_network_insights'
  version: CraProductVersion
}
type CraReportCreatePrismCashScoreVersion = '4.1' | '4' | '3' | null
type CraReportCreatePrismInsightsVersion = '4.1' | '4' | '3' | null
type CraReportCreatePrismDetectVersion = '4.1' | '4' | null
type CraReportCreatePrismExtendVersion = '4.1' | '4' | null
type CraReportCreatePrismOptions = {
  cashscore?: CraReportCreatePrismCashScoreVersion | undefined
  insights?: CraReportCreatePrismInsightsVersion | undefined
  detect?: CraReportCreatePrismDetectVersion | undefined
  extend?: CraReportCreatePrismExtendVersion | undefined
}
type CraReportCreatePrismProductConfig = {
  product: 'cra_prism'
  version: CraProductVersion
  options: CraReportCreatePrismOptions
}
type CraUltraFicoScoreVersion = '1.0'
type CraUltraFicoBureau = 'EQUIFAX' | 'EXPERIAN' | 'TRANSUNION'
type CraUltraFicoBaseFicoScoreVersion = '8' | '9' | '10' | '10T'
type CraReportCreateUltraFicoBaseFicoScore = {
  bureau: CraUltraFicoBureau
  score: number
  reason_codes: string[]
  did_inquiries_adversely_affect_score?: (boolean | null) | undefined
  base_fico_score_version: CraUltraFicoBaseFicoScoreVersion
}
type CraReportCreateUltraFicoScoreRequest = {
  ultrafico_score_version: CraUltraFicoScoreVersion
  request_correlation_id?: string | undefined
  fico_scoring_request_id?: string | undefined
  base_fico_score: CraReportCreateUltraFicoBaseFicoScore
}
type CraReportCreateUltraFicoOptions = {
  fico_lender_id: string
  lender_application_id: string
  ultrafico_score_requests: CraReportCreateUltraFicoScoreRequest[]
}
type CraReportCreateUltraFicoProductConfig = {
  product: 'cra_ultrafico'
  version: CraProductVersion
  options: CraReportCreateUltraFicoOptions
}
type CraReportCreateQualifyProductConfig = { product: 'cra_qualify'; version: CraProductVersion }
type CraReportCreateLendScoreCompleteOptions = {
  variants?: CraLendScoreVariant[] | undefined
} | null
type CraReportCreateLendScoreCompleteBundleProductConfig = {
  product: 'cra_lend_score_complete'
  version: CraProductVersion
  options?: CraReportCreateLendScoreCompleteOptions | undefined
}
type CraReportCreateIncomeCompleteOptions = {
  income_insights_filter?: IncomeInsightsFilter | undefined
} | null
type CraReportCreateIncomeCompleteBundleProductConfig = {
  product: 'cra_income_complete'
  version: CraProductVersion
  options?: CraReportCreateIncomeCompleteOptions | undefined
}
type CraReportProduct =
  | CraReportCreateBaseReportProductConfig
  | CraReportCreateCashflowInsightsProductConfig
  | CraReportCreateHomeLendingProductConfig
  | CraReportCreateHomeLendingVoaProductConfig
  | CraReportCreateIncomeInsightsProductConfig
  | CraReportCreateLendScoreProductConfig
  | CraReportCreateNetworkInsightsProductConfig
  | CraReportCreatePrismProductConfig
  | CraReportCreateUltraFicoProductConfig
  | CraReportCreateQualifyProductConfig
  | CraReportCreateLendScoreCompleteBundleProductConfig
  | CraReportCreateIncomeCompleteBundleProductConfig
type CraReportDecisionStage = 'PREQUALIFICATION' | 'DECISIONING' | 'SERVICING'
type CraReportCreateRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  user_id: NewUserID
  products: CraReportProduct[]
  scope: {}
  decision_stage: CraReportDecisionStage
  consumer_report_permissible_purpose: {}
  client_report_id?: (string | null) | undefined
  days_requested?: (number | null) | undefined
  days_required?: (number | null) | undefined
  include_investments?: (boolean | null) | undefined
  include_identity_match?: (boolean | null) | undefined
  webhook?: string | undefined
}
type CraReportCreateResponse = { report_id: {}; request_id: RequestID }
type CraQualifyProduct = { product: 'cra_qualify'; version: CraProductVersion }
type CraIncomeInsightsProduct = { product: 'cra_income_insights'; version: CraProductVersion }
type CraHomeLendingProduct = { product: 'cra_home_lending'; version: CraProductVersion }
type CraReportGetHomeLendingVoaOptions = { report_format?: {} | undefined } | null
type CraHomeLendingVoaProduct = {
  product: 'cra_home_lending_voa'
  version: CraProductVersion
  options?: CraReportGetHomeLendingVoaOptions | undefined
}
type CraBaseReportProduct = { product: 'cra_base_report'; version: CraProductVersion }
type CraReportGetLendScoreOptions = { variants?: CraLendScoreVariant[] | undefined } | null
type CraLendScoreProduct = {
  product: 'cra_lend_score'
  version: CraProductVersion
  options?: CraReportGetLendScoreOptions | undefined
}
type CraCashflowInsightsProduct = { product: 'cra_cashflow_insights'; version: CraProductVersion }
type CraNetworkInsightsProduct = { product: 'cra_network_insights'; version: CraProductVersion }
type CraReportGetLendScoreCompleteOptions = { variants?: CraLendScoreVariant[] | undefined } | null
type CraLendScoreCompleteBundleProduct = {
  product: 'cra_lend_score_complete'
  version: CraProductVersion
  options?: CraReportGetLendScoreCompleteOptions | undefined
}
type CraIncomeCompleteBundleProduct = { product: 'cra_income_complete'; version: CraProductVersion }
type CraPrismProduct = { product: 'cra_prism'; version: CraProductVersion }
type CraUltraFicoProduct = { product: 'cra_ultrafico'; version: CraProductVersion }
type CraReportGetRequestProduct =
  | CraQualifyProduct
  | CraIncomeInsightsProduct
  | CraHomeLendingProduct
  | CraHomeLendingVoaProduct
  | CraBaseReportProduct
  | CraLendScoreProduct
  | CraCashflowInsightsProduct
  | CraNetworkInsightsProduct
  | CraLendScoreCompleteBundleProduct
  | CraIncomeCompleteBundleProduct
  | CraPrismProduct
  | CraUltraFicoProduct
type CraReportScope = 'PLAID_NETWORK' | 'CLIENT_USER'
type CraReportGetRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  user_id: NewUserID
  products: CraReportGetRequestProduct[]
  scope?: CraReportScope | undefined
  decision_stage: CraReportDecisionStage
  consumer_report_permissible_purpose: {}
  report_id?: {} | undefined
}
type CraReportGetProductMetadata = { [x: string]: { [x: string]: unknown } } | null
type CraReportGetProductAttributes = { [x: string]: { [x: string]: unknown } } | null
type CraReportGetQualifyResponseProduct = {
  product: 'cra_qualify'
  version: CraProductVersion
  metadata: CraReportGetProductMetadata
  attributes: CraReportGetProductAttributes
  errors: PlaidError[]
}
type CraReportGetIncomeInsightsMetadata = {
  generated_time: string | null
  item_count: number
  account_count: number
  institution_ids: string[]
  primary_account_count: number
  depository_account_type_count: number
  credit_account_type_count: number
  investment_account_type_count: number
  other_account_type_count: number
  multiple_owner_account_count: number
  oldest_transaction_date: string | null
  most_recent_transaction_date: string | null
}
type CraReportGetIncomeInsightsStream = {
  income_stream_id: string
  start_date: string | null
  end_date: string | null
  description: string | null
  insights: CraIncomeStreamInsights
  income_metrics: CraIncomeMetrics
  transactions: CraIncomeTransaction[]
}
type CraReportGetIncomeInsightsAttributes = {
  income_streams: CraReportGetIncomeInsightsStream[]
  user_summary: CraIncomeInsightsUserSummary
} | null
type CraReportGetIncomeInsightsAccount = {
  account_id: string
  name: string
  official_name: string | null
  mask: string | null
  type: AccountType
  subtype: AccountSubtype
  consumer_disputes: ConsumerDispute[]
}
type CraReportGetIncomeInsightsItem = {
  institution_id: string
  institution_name: string
  item_id: ItemId
  last_updated_time: string
  accounts: CraReportGetIncomeInsightsAccount[]
}
type CraReportGetIncomeInsightsResponseProduct = {
  product: 'cra_income_insights'
  version: CraProductVersion
  metadata: CraReportGetIncomeInsightsMetadata
  attributes: CraReportGetIncomeInsightsAttributes
  items: CraReportGetIncomeInsightsItem[]
  errors: PlaidError[]
}
type CraReportGetHomeLendingMetadata = {
  generated_time: string | null
  item_count: number
  account_count: number
  institution_ids: string[]
}
type CraReportGetHomeLendingIncomeMetrics = {
  current: CraCurrentModeledIncome
  iso_currency_code: CreditIsoCurrencyCode
  unofficial_currency_code: CreditUnofficialCurrencyCode
}
type CraReportGetHomeLendingCategoryIncome = {
  income_category: CraIncomeCategory
  current: CraCurrentModeledIncome
}
type CraReportGetHomeLendingIncomeByCategories = {
  iso_currency_code: CreditIsoCurrencyCode
  unofficial_currency_code: CreditUnofficialCurrencyCode
  categories: CraReportGetHomeLendingCategoryIncome[]
}
type CraReportGetHomeLendingIncomeSources = {
  income_stream_count: number
  income_providers: CraBankIncomeIncomeProvider[]
} | null
type CraReportGetHomeLendingAttributes = {
  income_metrics: CraReportGetHomeLendingIncomeMetrics[]
  income_by_categories: CraReportGetHomeLendingIncomeByCategories[]
  income_sources: CraReportGetHomeLendingIncomeSources
  loan_payments_cash_advance_count_90d: number
  loan_payments_bnpl_count_90d: number
  payment_behavior_nsf_late_fees_flag_90d: number
} | null
type CraReportGetAccountPrimaryAccount = { is_primary: boolean; score: number } | null
type NameMatchScore = {
  score: number | null
  is_first_name_or_last_name_match: boolean | null
  is_nickname_match: boolean | null
  is_business_name_detected: boolean | null
}
type PhoneNumberMatchScore = { score: number | null }
type EmailAddressMatchScore = { score: number | null }
type AddressMatchScore = { score: number | null; is_postal_code_match: boolean | null }
type CraReportGetAccountIdentityMatch = {
  legal_name: NameMatchScore
  phone_number: PhoneNumberMatchScore
  email_address: EmailAddressMatchScore
  address: AddressMatchScore
} | null
type CraReportGetHomeLendingAccount = {
  account_id: string
  name: string
  official_name: string | null
  mask: string | null
  type: AccountType
  subtype: AccountSubtype
  primary_account: CraReportGetAccountPrimaryAccount
  identity_match: CraReportGetAccountIdentityMatch
  owners: Owner[]
}
type CraReportGetHomeLendingItem = {
  institution_id: string
  institution_name: string
  item_id: ItemId
  last_updated_time: string
  accounts: CraReportGetHomeLendingAccount[]
}
type CraReportGetHomeLendingResponseProduct = {
  product: 'cra_home_lending'
  version: CraProductVersion
  metadata: CraReportGetHomeLendingMetadata
  attributes: CraReportGetHomeLendingAttributes
  items: CraReportGetHomeLendingItem[]
  errors: PlaidError[]
}
type CraHomeLendingVoaReportFormat = 'VOA' | 'EMPLOYMENT_REFRESH'
type CraReportGetHomeLendingVoaMetadata = {
  generated_time: string | null
  item_count: number
  account_count: number
  institution_ids: string[]
  report_format: CraHomeLendingVoaReportFormat
  days_requested: number
  primary_account_count: number
  depository_account_type_count: number
  credit_account_type_count: number
  investment_account_type_count: number
  other_account_type_count: number
  multiple_owner_account_count: number
  oldest_transaction_date: string | null
  most_recent_transaction_date: string | null
}
type CraReportGetHomeLendingVoaAccountBalances = {
  available: number | null
  current: number | null
  iso_currency_code: CreditIsoCurrencyCode
  unofficial_currency_code: CreditUnofficialCurrencyCode
  most_recent_thirty_day_average_balance: number | null
  most_recent_sixty_day_average_balance: number | null
} | null
type CraReportGetHomeLendingVoaAccountMetadata = {
  start_date: string | null
  end_date: string | null
} | null
type CraReportGetHomeLendingVoaAccountAttributes = {
  is_primary_account: boolean | null
  primary_account_score: number | null
} | null
type CraReportGetHomeLendingVoaAccountHistoricalBalance = {
  current: number
  date: string
  iso_currency_code: CreditIsoCurrencyCode
  unofficial_currency_code: CreditUnofficialCurrencyCode
}
type CraReportGetHomeLendingVoaTransaction = {
  transaction_id: string
  account_id: string
  amount?: (number | null) | undefined
  iso_currency_code?: CreditIsoCurrencyCode | undefined
  unofficial_currency_code?: CreditUnofficialCurrencyCode | undefined
  original_description: string | null
  merchant_name?: (string | null) | undefined
  credit_category?: CreditCategory | undefined
  check_number?: (string | null) | undefined
  date: string
  date_transacted?: (string | null) | undefined
  pending: boolean
  account_owner?: (string | null) | undefined
  location?:
    | {
        address: string | null
        city: string | null
        region: string | null
        postal_code: string | null
        country: string | null
        lat: number | null
        lon: number | null
        store_number: string | null
      }
    | undefined
}
type CraReportGetHomeLendingVoaAccount = {
  account_id: string
  name: string
  official_name: string | null
  type: AccountType
  subtype: AccountSubtype
  balances?: CraReportGetHomeLendingVoaAccountBalances | undefined
  mask?: (string | null) | undefined
  days_available?: (number | null) | undefined
  metadata?: CraReportGetHomeLendingVoaAccountMetadata | undefined
  owners: Owner[]
  attributes: CraReportGetHomeLendingVoaAccountAttributes
  identity_match?:
    | {
        legal_name: NameMatchScore
        phone_number: PhoneNumberMatchScore
        email_address: EmailAddressMatchScore
        address: AddressMatchScore
      }
    | undefined
  ownership_type?: OwnershipType | undefined
  historical_balances: CraReportGetHomeLendingVoaAccountHistoricalBalance[]
  transactions: CraReportGetHomeLendingVoaTransaction[]
}
type CraReportGetHomeLendingVoaItem = {
  accounts: CraReportGetHomeLendingVoaAccount[]
  institution_name: string
  institution_id: string
  item_id: ItemId
  date_last_updated: string
}
type CraReportGetHomeLendingVoaAttributes = {
  total_inflow_amount: TotalReportInflowAmount
  total_outflow_amount: TotalReportOutflowAmount
} | null
type CraReportGetHomeLendingVoaResponseProduct = {
  product: 'cra_home_lending_voa'
  version: CraProductVersion
  metadata: CraReportGetHomeLendingVoaMetadata
  gse_reference_id: string | null
  items: CraReportGetHomeLendingVoaItem[]
  attributes?: CraReportGetHomeLendingVoaAttributes | undefined
  errors: PlaidError[]
}
type CraReportGetCashflowInsightsMetadata = {
  generated_time: string | null
  item_count: number
  account_count: number
  institution_ids: string[]
  primary_account_count: number
  depository_account_type_count: number
  credit_account_type_count: number
  investment_account_type_count: number
  other_account_type_count: number
  multiple_owner_account_count: number
  oldest_transaction_date: string | null
  most_recent_transaction_date: string | null
}
type CraReportGetCashflowInsightsAttributes = { [x: string]: { [x: string]: unknown } } | null
type CraReportGetCashflowInsightsResponseProduct = {
  product: 'cra_cashflow_insights'
  version: CraProductVersion
  metadata: CraReportGetCashflowInsightsMetadata
  attributes: CraReportGetCashflowInsightsAttributes
  errors: PlaidError[]
}
type CraReportGetNetworkInsightsMetadata = {
  generated_time: string | null
  item_count: number
  account_count: number
  institution_ids: string[]
  primary_account_count: number
  depository_account_type_count: number
  credit_account_type_count: number
  investment_account_type_count: number
  other_account_type_count: number
  multiple_owner_account_count: number
  oldest_transaction_date: string | null
  most_recent_transaction_date: string | null
}
type CraReportGetNetworkInsightsAttributes = { [x: string]: { [x: string]: unknown } } | null
type CraReportGetNetworkInsightsResponseProduct = {
  product: 'cra_network_insights'
  version: CraProductVersion
  metadata: CraReportGetNetworkInsightsMetadata
  attributes: CraReportGetNetworkInsightsAttributes
  errors: PlaidError[]
}
type CraReportGetLendScoreMetadata = {
  generated_time: string | null
  item_count: number
  account_count: number
  institution_ids: string[]
  primary_account_count: number
  depository_account_type_count: number
  credit_account_type_count: number
  investment_account_type_count: number
  other_account_type_count: number
  multiple_owner_account_count: number
  oldest_transaction_date: string | null
  most_recent_transaction_date: string | null
}
type CraReportGetLendScoreVariantScore = {
  variant: CraLendScoreVariant
  score: number | null
  reason_codes: string[]
  error_code: string | null
}
type CraReportGetLendScoreResponseProduct = {
  product: 'cra_lend_score'
  version: CraProductVersion
  metadata: CraReportGetLendScoreMetadata
  scores: CraReportGetLendScoreVariantScore[]
  errors: PlaidError[]
}
type CraReportGetBaseReportMetadata = {
  generated_time: string | null
  item_count: number
  account_count: number
  institution_ids: string[]
  days_requested: number
  primary_account_count: number
  depository_account_type_count: number
  credit_account_type_count: number
  investment_account_type_count: number
  other_account_type_count: number
  multiple_owner_account_count: number
  oldest_transaction_date: string | null
  most_recent_transaction_date: string | null
}
type CraReportGetBaseReportAverageMonthlyBalance = {
  start_date: string
  end_date: string
  average_balance: CreditAmountWithCurrency
}
type CraReportGetBaseReportAccountBalances = {
  available: number | null
  current: number | null
  limit: number | null
  iso_currency_code: CreditIsoCurrencyCode
  unofficial_currency_code: CreditUnofficialCurrencyCode
  average_balance: number | null
  most_recent_thirty_day_average_balance: number | null
  average_monthly_balances: CraReportGetBaseReportAverageMonthlyBalance[]
}
type Location = {
  address: string | null
  city: string | null
  region: string | null
  postal_code: string | null
  country: string | null
  lat: number | null
  lon: number | null
  store_number: string | null
}
type CraReportGetBaseReportTransaction = {
  transaction_id: string
  account_id: string
  amount: number
  iso_currency_code: CreditIsoCurrencyCode
  unofficial_currency_code: CreditUnofficialCurrencyCode
  original_description: string | null
  merchant_name: string | null
  credit_category: CreditCategory
  check_number: string | null
  date: string
  date_transacted: string | null
  pending: boolean
  account_owner: string | null
  location: Location
  name?: (string | null) | undefined
  category?: string[] | undefined
  category_id?: (string | null) | undefined
  personal_finance_category?:
    | {
        primary: string
        detailed: string
        confidence_level?: (string | null) | undefined
        version?: PersonalFinanceCategoryVersion | undefined
      }
    | undefined
}
type CraReportGetBaseReportLongestGapInsight = {
  start_date: string
  end_date: string
  days: number | null
}
type CraReportGetBaseReportAccountAttributes = {
  is_primary_account: boolean | null
  primary_account_score: number | null
  nsf_overdraft_transactions_count?: (number | null) | undefined
  nsf_overdraft_transactions_count_30d?: (number | null) | undefined
  nsf_overdraft_transactions_count_60d?: (number | null) | undefined
  nsf_overdraft_transactions_count_90d?: (number | null) | undefined
  total_inflow_amount?:
    | {
        amount: number
        iso_currency_code: CreditIsoCurrencyCode
        unofficial_currency_code: CreditUnofficialCurrencyCode
      }
    | undefined
  total_inflow_amount_30d?:
    | {
        amount: number
        iso_currency_code: CreditIsoCurrencyCode
        unofficial_currency_code: CreditUnofficialCurrencyCode
      }
    | undefined
  total_inflow_amount_60d?:
    | {
        amount: number
        iso_currency_code: CreditIsoCurrencyCode
        unofficial_currency_code: CreditUnofficialCurrencyCode
      }
    | undefined
  total_inflow_amount_90d?:
    | {
        amount: number
        iso_currency_code: CreditIsoCurrencyCode
        unofficial_currency_code: CreditUnofficialCurrencyCode
      }
    | undefined
  total_outflow_amount?:
    | {
        amount: number
        iso_currency_code: CreditIsoCurrencyCode
        unofficial_currency_code: CreditUnofficialCurrencyCode
      }
    | undefined
  total_outflow_amount_30d?:
    | {
        amount: number
        iso_currency_code: CreditIsoCurrencyCode
        unofficial_currency_code: CreditUnofficialCurrencyCode
      }
    | undefined
  total_outflow_amount_60d?:
    | {
        amount: number
        iso_currency_code: CreditIsoCurrencyCode
        unofficial_currency_code: CreditUnofficialCurrencyCode
      }
    | undefined
  total_outflow_amount_90d?:
    | {
        amount: number
        iso_currency_code: CreditIsoCurrencyCode
        unofficial_currency_code: CreditUnofficialCurrencyCode
      }
    | undefined
} | null
type CraReportGetBaseReportAccountIdentityMatch = {
  legal_name: NameMatchScore
  phone_number: PhoneNumberMatchScore
  email_address: EmailAddressMatchScore
  address: AddressMatchScore
} | null
type CraReportGetBaseReportAccount = {
  account_id: string
  name: string
  official_name: string | null
  mask: string | null
  type: AccountType
  subtype: AccountSubtype
  days_available: number
  metadata: BaseReportAccountMetadata
  balances: CraReportGetBaseReportAccountBalances
  owners: Owner[]
  ownership_type: OwnershipType
  consumer_disputes: ConsumerDispute[]
  transactions: CraReportGetBaseReportTransaction[]
  historical_balances?: BaseReportHistoricalBalance[] | undefined
  account_insights?:
    | {
        oldest_transaction_date: string | null
        most_recent_transaction_date: string | null
        average_days_between_transactions: number | null
        number_of_days_no_transactions: number
        longest_gaps_between_transactions: CraReportGetBaseReportLongestGapInsight[]
        number_of_inflows: BaseReportNumberFlowInsights[]
        number_of_outflows: BaseReportNumberFlowInsights[]
        average_inflow_amounts: BaseReportAverageFlowInsights[]
        average_outflow_amounts: BaseReportAverageFlowInsights[]
      }
    | undefined
  attributes: CraReportGetBaseReportAccountAttributes
  identity_match?: CraReportGetBaseReportAccountIdentityMatch | undefined
  holder_category: {}
  investments?:
    | {
        holdings: BaseReportInvestmentHolding[]
        securities: BaseReportInvestmentSecurity[]
        investment_transactions: BaseReportInvestmentTransaction[]
      }
    | undefined
}
type CraReportGetBaseReportItem = {
  item_id: ItemId
  institution_id: string
  institution_name: string
  date_last_updated: string
  accounts: CraReportGetBaseReportAccount[]
}
type CraReportGetBaseReportResponseProduct = {
  product: 'cra_base_report'
  version: CraProductVersion
  metadata: CraReportGetBaseReportMetadata
  items: CraReportGetBaseReportItem[]
  attributes?:
    | {
        nsf_overdraft_transactions_count?: (number | null) | undefined
        nsf_overdraft_transactions_count_30d?: (number | null) | undefined
        nsf_overdraft_transactions_count_60d?: (number | null) | undefined
        nsf_overdraft_transactions_count_90d?: (number | null) | undefined
        total_inflow_amount?:
          | {
              amount: number
              iso_currency_code: CreditIsoCurrencyCode
              unofficial_currency_code: CreditUnofficialCurrencyCode
            }
          | undefined
        total_inflow_amount_30d?:
          | {
              amount: number
              iso_currency_code: CreditIsoCurrencyCode
              unofficial_currency_code: CreditUnofficialCurrencyCode
            }
          | undefined
        total_inflow_amount_60d?:
          | {
              amount: number
              iso_currency_code: CreditIsoCurrencyCode
              unofficial_currency_code: CreditUnofficialCurrencyCode
            }
          | undefined
        total_inflow_amount_90d?:
          | {
              amount: number
              iso_currency_code: CreditIsoCurrencyCode
              unofficial_currency_code: CreditUnofficialCurrencyCode
            }
          | undefined
        total_outflow_amount?:
          | {
              amount: number
              iso_currency_code: CreditIsoCurrencyCode
              unofficial_currency_code: CreditUnofficialCurrencyCode
            }
          | undefined
        total_outflow_amount_30d?:
          | {
              amount: number
              iso_currency_code: CreditIsoCurrencyCode
              unofficial_currency_code: CreditUnofficialCurrencyCode
            }
          | undefined
        total_outflow_amount_60d?:
          | {
              amount: number
              iso_currency_code: CreditIsoCurrencyCode
              unofficial_currency_code: CreditUnofficialCurrencyCode
            }
          | undefined
        total_outflow_amount_90d?:
          | {
              amount: number
              iso_currency_code: CreditIsoCurrencyCode
              unofficial_currency_code: CreditUnofficialCurrencyCode
            }
          | undefined
      }
    | undefined
  errors: PlaidError[]
}
type CraReportGetLendScoreCompleteMetadata = {
  generated_time: string | null
  item_count: number
  account_count: number
  institution_ids: string[]
  primary_account_count: number
  depository_account_type_count: number
  credit_account_type_count: number
  investment_account_type_count: number
  other_account_type_count: number
  multiple_owner_account_count: number
  oldest_transaction_date: string | null
  most_recent_transaction_date: string | null
}
type CraReportGetLendScoreCompleteAttributes = {
  lend_scores: CraReportGetLendScoreVariantScore[]
  cashflow_insights: CraReportGetCashflowInsightsAttributes
  network_insights: CraReportGetNetworkInsightsAttributes
} | null
type CraReportGetLendScoreCompleteAccount = {
  account_id: string
  name: string
  official_name: string | null
  mask: string | null
  type: AccountType
  subtype: AccountSubtype
  primary_account: CraReportGetAccountPrimaryAccount
  identity_match: CraReportGetAccountIdentityMatch
  owners: Owner[]
}
type CraReportGetLendScoreCompleteItem = {
  institution_id: string
  institution_name: string
  item_id: ItemId
  last_updated_time: string
  accounts: CraReportGetLendScoreCompleteAccount[]
}
type CraReportGetLendScoreCompleteResponseProduct = {
  product: 'cra_lend_score_complete'
  version: CraProductVersion
  metadata: CraReportGetLendScoreCompleteMetadata
  attributes: CraReportGetLendScoreCompleteAttributes
  items: CraReportGetLendScoreCompleteItem[]
  errors: PlaidError[]
}
type CraReportGetIncomeCompleteMetadata = {
  generated_time: string | null
  item_count: number
  account_count: number
  institution_ids: string[]
  primary_account_count: number
  depository_account_type_count: number
  credit_account_type_count: number
  investment_account_type_count: number
  other_account_type_count: number
  multiple_owner_account_count: number
  oldest_transaction_date: string | null
  most_recent_transaction_date: string | null
}
type CraReportGetIncomeCompleteAttributes = {
  income_insights: CraReportGetIncomeInsightsAttributes
} | null
type CraReportGetIncomeCompleteAccount = {
  account_id: string
  name: string
  official_name: string | null
  mask: string | null
  type: AccountType
  subtype: AccountSubtype
  primary_account: CraReportGetAccountPrimaryAccount
  identity_match: CraReportGetAccountIdentityMatch
  owners: Owner[]
  consumer_disputes: ConsumerDispute[]
}
type CraReportGetIncomeCompleteItem = {
  institution_id: string
  institution_name: string
  item_id: ItemId
  last_updated_time: string
  accounts: CraReportGetIncomeCompleteAccount[]
}
type CraReportGetIncomeCompleteResponseProduct = {
  product: 'cra_income_complete'
  version: CraProductVersion
  metadata: CraReportGetIncomeCompleteMetadata
  attributes: CraReportGetIncomeCompleteAttributes
  items: CraReportGetIncomeCompleteItem[]
  errors: PlaidError[]
}
type CraReportGetPrismMetadata = {
  generated_time: string | null
  item_count: number
  account_count: number
  institution_ids: string[]
  primary_account_count: number
  depository_account_type_count: number
  credit_account_type_count: number
  investment_account_type_count: number
  other_account_type_count: number
  multiple_owner_account_count: number
  oldest_transaction_date: string | null
  most_recent_transaction_date: string | null
}
type CraReportGetPrismInsights = {
  model_version: string
  result?: PrismInsightsResult | undefined
  error_reason?: PrismErrorReason | undefined
} | null
type CraReportGetPrismCashScore = {
  model_version: string
  score: number | null
  reason_codes?: string[] | undefined
  metadata?: PrismCashScoreMetadata | undefined
  error_reason?: PrismErrorReason | undefined
} | null
type CraReportGetPrismDetect = {
  model_version: string
  score: number | null
  reason_codes?: string[] | undefined
  metadata?: PrismCashScoreMetadata | undefined
  error_reason?: PrismErrorReason | undefined
} | null
type CraReportGetPrismExtend = {
  model_version: string
  score: number | null
  reason_codes?: string[] | undefined
  metadata?: PrismCashScoreMetadata | undefined
  error_reason?: PrismErrorReason | undefined
} | null
type CraReportGetPrismStatus = 'SUCCESS' | 'PARTIAL_SUCCESS' | 'ERROR'
type CraReportGetPrism = {
  insights?: CraReportGetPrismInsights | undefined
  cashscore?: CraReportGetPrismCashScore | undefined
  detect?: CraReportGetPrismDetect | undefined
  extend?: CraReportGetPrismExtend | undefined
  status: CraReportGetPrismStatus
}
type CraReportGetPrismAccount = {
  account_id: string
  name: string
  official_name: string | null
  mask: string | null
  type: AccountType
  subtype: AccountSubtype
}
type CraReportGetPrismItem = {
  institution_id: string
  institution_name: string
  item_id: ItemId
  last_updated_time: string
  accounts: CraReportGetPrismAccount[]
}
type CraReportGetPrismResponseProduct = {
  product: 'cra_prism'
  version: CraProductVersion
  metadata: CraReportGetPrismMetadata
  prism: CraReportGetPrism
  items: CraReportGetPrismItem[]
  errors: PlaidError[]
}
type CraReportGetUltraFicoMetadata = {
  generated_time: string | null
  item_count: number
  account_count: number
  institution_ids: string[]
  primary_account_count: number
  depository_account_type_count: number
  credit_account_type_count: number
  investment_account_type_count: number
  other_account_type_count: number
  multiple_owner_account_count: number
  oldest_transaction_date: string | null
  most_recent_transaction_date: string | null
}
type CraReportGetUltraFicoScore = {
  ultrafico_score_version: CraUltraFicoScoreVersion
  score: number
  negative_reason_codes: string[]
  positive_reason_codes: string[]
  did_inquiries_adversely_affect_score?: (boolean | null) | undefined
} | null
type CraReportGetUltraFicoScoreResult = {
  request_correlation_id: string | null
  fico_scoring_request_id: string | null
  ultrafico_score: CraReportGetUltraFicoScore
  error_reason: string | null
  exclusion_code: string | null
}
type CraReportGetUltraFicoReportCharacteristics = {
  num_accounts?: (number | null) | undefined
  avg_daily_balance_over_1_month?: (number | null) | undefined
  avg_daily_balance_over_3_months?: (number | null) | undefined
  avg_daily_balance_over_6_months?: (number | null) | undefined
  avg_daily_balance_over_12_months?: (number | null) | undefined
  days_since_earliest_tx?: (number | null) | undefined
  days_since_most_recent_negative_ending_balance?: (number | null) | undefined
  days_since_most_recent_insufficient_funds_fee_debit_tx?: (number | null) | undefined
  tot_number_days_with_negative_balance_over_1_month?: (number | null) | undefined
  tot_number_days_with_negative_balance_over_3_months?: (number | null) | undefined
  tot_number_days_with_negative_balance_over_6_months?: (number | null) | undefined
  tot_number_days_with_negative_balance_over_12_months?: (number | null) | undefined
  days_since_most_recent_tx?: (number | null) | undefined
  days_with_tx_over_1_month?: (number | null) | undefined
  days_with_tx_over_3_months?: (number | null) | undefined
  days_with_tx_over_6_months?: (number | null) | undefined
  days_with_tx_over_12_months?: (number | null) | undefined
  tot_current_balances?: (number | null) | undefined
  num_checking_accounts?: (number | null) | undefined
  num_money_market_accounts?: (number | null) | undefined
  num_savings_accounts?: (number | null) | undefined
} | null
type CraReportGetUltraFico = {
  lender_application_id: string
  ultrafico_score_results: CraReportGetUltraFicoScoreResult[]
  report_characteristics: CraReportGetUltraFicoReportCharacteristics
} | null
type CraReportGetUltraFicoAccount = {
  account_id: string
  name: string
  official_name: string | null
  mask: string | null
  type: AccountType
  subtype: AccountSubtype
  primary_account: CraReportGetAccountPrimaryAccount
  identity_match: CraReportGetAccountIdentityMatch
  owners: Owner[]
}
type CraReportGetUltraFicoItem = {
  institution_id: string
  institution_name: string
  item_id: ItemId
  last_updated_time: string
  accounts: CraReportGetUltraFicoAccount[]
}
type CraReportGetUltraFicoResponseProduct = {
  product: 'cra_ultrafico'
  version: CraProductVersion
  metadata: CraReportGetUltraFicoMetadata
  ultrafico: CraReportGetUltraFico
  items: CraReportGetUltraFicoItem[]
  errors: PlaidError[]
}
type CraReportGetResponseProduct =
  | CraReportGetQualifyResponseProduct
  | CraReportGetIncomeInsightsResponseProduct
  | CraReportGetHomeLendingResponseProduct
  | CraReportGetHomeLendingVoaResponseProduct
  | CraReportGetCashflowInsightsResponseProduct
  | CraReportGetNetworkInsightsResponseProduct
  | CraReportGetLendScoreResponseProduct
  | CraReportGetBaseReportResponseProduct
  | CraReportGetLendScoreCompleteResponseProduct
  | CraReportGetIncomeCompleteResponseProduct
  | CraReportGetPrismResponseProduct
  | CraReportGetUltraFicoResponseProduct
type CraReportGetReport = {
  report_id: {}
  client_report_id: string | null
  retrieved_time: string
  scope: CraReportScope
  decision_stage: CraReportDecisionStage
  consumer_report_permissible_purpose: {}
  products: CraReportGetResponseProduct[]
}
type CraReportGetResponse = {
  report: CraReportGetReport
  request_id: RequestID
  user_id: NewUserID
  client_user_id: string | null
  warnings: CheckReportWarning[]
}
type CraCreditProfileReportType = 'QUALIFY'
type CraCreditProfileInquiryType = 'SOFT_INQUIRY' | 'STANDARD_INQUIRY'
type CraCreditProfileReportVersion = 'v1'
type CraCreditProfileReportGetRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  user_id: NewUserID
  consumer_report_permissible_purpose: ConsumerReportPermissiblePurpose
  client_report_id: string
  report_type: CraCreditProfileReportType
  inquiry_type: CraCreditProfileInquiryType
  version: CraCreditProfileReportVersion
}
type CraCreditProfileLendScore = {
  score: number | null
  reason_codes: string[]
  variant: string
  error_reason: string | null
} | null
type CraCreditProfileCashflowAttributesSchema = { [x: string]: { [x: string]: unknown } } | null
type CraCreditProfileNetworkInsightsSchema = { [x: string]: { [x: string]: unknown } } | null
type CraCreditProfileReportMetadata = {
  item_count: number
  institution_ids: string[]
  account_count: number
  primary_account_count: number
  depository_account_type_count: number
  credit_account_type_count: number
  investment_account_type_count: number
  other_account_type_count: number
  multiple_owner_account_count: number
  generated_at: string
  oldest_transaction_date: string
  most_recent_transaction_date: string
} | null
type CraCreditProfileReport = {
  date_retrieved: string
  inquiry_type: CraCreditProfileInquiryType
  client_report_id: string
  lend_scores: CraCreditProfileLendScore[]
  cashflow_insights_attributes: CraCreditProfileCashflowAttributesSchema
  network_insights_attributes: CraCreditProfileNetworkInsightsSchema
  metadata: CraCreditProfileReportMetadata
}
type CraCreditProfileReportGetResponse = {
  report: CraCreditProfileReport
  request_id: RequestID
  user_id?: NewUserID | undefined
  warnings: CheckReportWarning[]
}
type ConsumerReportPDFGetRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  user_token: UserToken
}
type ConsumerReportPDFGetResponse = File
type OAuthGrantType =
  | 'refresh_token'
  | 'urn:ietf:params:oauth:grant-type:token-exchange'
  | 'client_credentials'
type OauthAPISecret = string
type OAuthScope = string
type OAuthRefreshToken = string
type OAuthSubjectTokenType =
  | 'urn:plaid:params:tokens:user'
  | 'urn:plaid:params:oauth:user-token'
  | 'urn:plaid:params:credit:multi-user'
type OAuthTokenRequest = {
  grant_type: OAuthGrantType
  client_id?: APIClientID | undefined
  client_secret?: OauthAPISecret | undefined
  secret?: OauthAPISecret | undefined
  scope?: OAuthScope | undefined
  refresh_token?: OAuthRefreshToken | undefined
  resource?: string | undefined
  audience?: string | undefined
  subject_token?: string | undefined
  subject_token_type?: OAuthSubjectTokenType | undefined
}
type OAuthAccessToken = string
type OAuthTokenResponse = {
  access_token: OAuthAccessToken
  refresh_token: OAuthRefreshToken
  token_type: string
  expires_in: number
  request_id: RequestID
}
type OAuthErrorCode =
  | 'invalid_request'
  | 'invalid_client'
  | 'invalid_grant'
  | 'unauthorized_client'
  | 'invalid_scope'
  | 'unsupported_grant_type'
type OAuthErrorDescription = string
type OAuthErrorURI = string
type OAuthErrorResponse = {
  error?: OAuthErrorCode | undefined
  error_description?: OAuthErrorDescription | undefined
  error_uri?: OAuthErrorURI | undefined
  request_id: RequestID
}
type OAuthAnyToken = string
type OAuthIntrospectRequest = {
  token: OAuthAnyToken
  client_id?: APIClientID | undefined
  client_secret?: OauthAPISecret | undefined
  secret?: OauthAPISecret | undefined
}
type OAuthIntrospectResponse = {
  active: boolean
  scope?: OAuthScope | undefined
  client_id?: APIClientID | undefined
  exp?: number | undefined
  iat?: number | undefined
  sub?: string | undefined
  aud?: string | undefined
  iss?: string | undefined
  token_type?: string | undefined
  user_id?: string | undefined
  request_id: RequestID
}
type OAuthRevokeRequest = {
  token: OAuthAnyToken
  client_id?: APIClientID | undefined
  client_secret?: OauthAPISecret | undefined
  secret?: OauthAPISecret | undefined
}
type OAuthRevokeResponse = { request_id: RequestID }
type StatementsListRequest = {
  access_token: AccessToken
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
}
type StatementsStatement = {
  statement_id: string
  date_posted?: (string | null) | undefined
  month: number
  year: number
}
type StatementsAccount = {
  account_id: string
  account_mask: string
  account_name: string
  account_official_name: string
  account_subtype: string
  account_type: string
  statements: StatementsStatement[]
}
type StatementsListResponse = {
  accounts: StatementsAccount[]
  institution_id: string
  institution_name: string
  item_id: string
  request_id: RequestID
}
type StatementsDownloadRequest = {
  access_token: AccessToken
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  statement_id: string
}
type StatementsDownloadResponse = File
type StatementsRefreshRequest = {
  access_token: AccessToken
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  start_date: string
  end_date: string
}
type StatementsRefreshResponse = { request_id: RequestID }
type ConsentEventsGetRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  access_token: AccessToken
}
type ConsentEventType = 'CONSENT_GRANTED' | 'CONSENT_REVOKED' | 'CONSENT_UPDATED'
type ConsentEventCode =
  | 'USER_AGREEMENT'
  | 'USE_CASES'
  | 'DATA_SCOPES'
  | 'ACCOUNT_SCOPES'
  | 'REVOCATION'
type ConsentEventInitiator = 'PLAID' | 'DATA_PROVIDER' | 'CUSTOMER' | 'END_USER'
type ConsentedAccount = {
  account_id?: string | undefined
  mask?: string | undefined
  name?: string | undefined
  official_name?: string | undefined
  type?: AccountType | undefined
  subtype?: AccountSubtype | undefined
}
type ConsentEvent = {
  item_id?: string | undefined
  created_at?: string | undefined
  event_type?: ConsentEventType | undefined
  event_code?: ConsentEventCode | undefined
  institution_id?: (string | null) | undefined
  institution_name?: (string | null) | undefined
  initiator?: ConsentEventInitiator | undefined
  consented_use_cases?: string[] | undefined
  consented_data_scopes?: string[] | undefined
  consented_accounts?: ConsentedAccount[] | undefined
}
type ConsentEventsGetResponse = { request_id: RequestID; consent_events: ConsentEvent[] }
type ItemActivityListRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  access_token?: AccessToken | undefined
  cursor?: string | undefined
  count?: number | undefined
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
type ActionState = 'UNKNOWN' | 'ATTEMPT' | 'SUCCESS' | 'FAILURE' | 'SKIPPED'
type ApplicationID = string
type ProductAccess = {
  statements?: (boolean | null) | undefined
  identity?: (boolean | null) | undefined
  auth?: (boolean | null) | undefined
  transactions?: (boolean | null) | undefined
  accounts_details_transactions?: (boolean | null) | undefined
  accounts_routing_number?: (boolean | null) | undefined
  accounts_statements?: (boolean | null) | undefined
  accounts_tax_statements?: (boolean | null) | undefined
  customers_profiles?: (boolean | null) | undefined
}
type AccountProductAccessNullable = {
  account_data?: (boolean | null) | undefined
  statements?: (boolean | null) | undefined
  tax_documents?: (boolean | null) | undefined
}
type AccountAccess = {
  unique_id: string
  authorized?: (boolean | null) | undefined
  account_product_access?: AccountProductAccessNullable | undefined
}
type ScopesNullable = {
  product_access?: ProductAccess | undefined
  accounts?: AccountAccess[] | undefined
  new_accounts?: (boolean | null) | undefined
}
type ItemCreateAuthentication = 'UNKNOWN' | 'DATA_PARTNER' | 'PLAID'
type Activity = {
  activity: ActivityType
  initiated_date: string
  id: string
  initiator: string
  state: ActionState
  target_application_id?: ApplicationID | undefined
  scopes?: ScopesNullable | undefined
  authentication?: ItemCreateAuthentication | undefined
}
type ApplicationLastDataAccessTimes = {
  application_id: string
  account_balance_info: string | null
  account_routing_number: string | null
  contact_info: string | null
  transactions: string | null
  credit_loan_info: string | null
  investments: string | null
}
type ItemActivityListResponse = {
  request_id: RequestID
  activities: Activity[]
  last_data_access_times: ApplicationLastDataAccessTimes[]
  cursor?: string | undefined
}
type AccessTokenNullable = string | null
type ItemApplicationListRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  access_token?: AccessTokenNullable | undefined
}
type ConnectedApplication = {
  application_id: ApplicationID
  name: string
  display_name?: (string | null) | undefined
  logo_url?: (string | null) | undefined
  application_url?: (string | null) | undefined
  reason_for_access?: (string | null) | undefined
  created_at: string
  scopes?: ScopesNullable | undefined
}
type DisconnectedApplication = {
  application_id: ApplicationID
  name: string
  display_name?: (string | null) | undefined
  logo_url?: (string | null) | undefined
  application_url?: (string | null) | undefined
  reason_for_access?: (string | null) | undefined
}
type ItemApplicationListResponse = {
  request_id?: RequestID | undefined
  applications: ConnectedApplication[]
  disconnected_applications?: DisconnectedApplication[] | undefined
}
type ItemApplicationUnlinkRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  access_token: AccessToken
  application_id: ApplicationID
}
type ItemApplicationUnlinkResponse = { request_id: RequestID }
type Scopes = {
  product_access?: ProductAccess | undefined
  accounts?: AccountAccess[] | undefined
  new_accounts?: (boolean | null) | undefined
}
type ScopesState = string
type ScopesContext = 'ENROLLMENT' | 'PORTAL'
type ItemApplicationScopesUpdateRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  access_token: AccessToken
  application_id: ApplicationID
  scopes: Scopes
  state?: ScopesState | undefined
  context: ScopesContext
}
type ItemApplicationScopesUpdateResponse = { request_id: RequestID }
type ApplicationGetRequest = {
  client_id: APIClientID
  secret: APISecret
  application_id: ApplicationID
}
type Application = {
  application_id: ApplicationID
  name: string
  display_name: string | null
  join_date: string
  logo_url: string | null
  application_url: string | null
  reason_for_access: string | null
  use_case: string | null
  company_legal_name: string | null
  city: string | null
  region: string | null
  postal_code: string | null
  country_code: string | null
}
type ApplicationGetResponse = { request_id: RequestID; application: Application }
type ItemGetRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  access_token: AccessToken
}
type ItemAuthMethod =
  | 'INSTANT_AUTH'
  | 'INSTANT_MATCH'
  | 'AUTOMATED_MICRODEPOSITS'
  | 'SAME_DAY_MICRODEPOSITS'
  | 'INSTANT_MICRODEPOSITS'
  | 'DATABASE_MATCH'
  | 'DATABASE_INSIGHTS'
  | 'TRANSFER_MIGRATED'
  | 'INVESTMENTS_FALLBACK'
  | 'DATABASE_INSIGHTS_API'
  | null
type ItemConsentedDataScope =
  | 'account_balance_info'
  | 'contact_info'
  | 'account_routing_number'
  | 'transactions'
  | 'credit_loan_info'
  | 'investments'
  | 'payroll_info'
  | 'income_verification_paystubs_info'
  | 'income_verification_w2s_info'
  | 'income_verification_bank_statements'
  | 'income_verification_employment_info'
  | 'bank_statements'
  | 'risk_info'
  | 'network_insights_lite'
  | 'fraud_info'
type ItemWithConsentFields = {
  item_id: string
  institution_id?: (string | null) | undefined
  institution_name?: (string | null) | undefined
  webhook: string | null
  auth_method?: ItemAuthMethod | undefined
  error: PlaidError
  available_products: Products[]
  billed_products: Products[]
  products: Products[]
  consented_products?: Products[] | undefined
  consent_expiration_time: string | null
  update_type: 'background' | 'user_present_required'
  paired_item_id?: (string | null) | undefined
  created_at?: (string | null) | undefined
  consented_use_cases?: string[] | undefined
  consented_data_scopes?: ItemConsentedDataScope[] | undefined
}
type ItemStatusInvestments = {
  last_successful_update?: (string | null) | undefined
  last_failed_update?: (string | null) | undefined
} | null
type ItemStatusTransactions = {
  last_successful_update?: (string | null) | undefined
  last_failed_update?: (string | null) | undefined
} | null
type ItemStatusLastWebhook = {
  sent_at?: (string | null) | undefined
  code_sent?: string | undefined
} | null
type ItemStatusNullable = {
  investments?: ItemStatusInvestments | undefined
  transactions?: ItemStatusTransactions | undefined
  last_webhook: ItemStatusLastWebhook
}
type ItemGetResponse = {
  item: ItemWithConsentFields
  status?: ItemStatusNullable | undefined
  request_id: RequestID
}
type UserAccountSessionGetRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  public_token: string
}
type UserAccountIdentityName = {
  first_name?: string | undefined
  last_name?: string | undefined
} | null
type UserAccountIdentityAddress = {
  city?: (string | null) | undefined
  region?: (string | null) | undefined
  street?: (string | null) | undefined
  street2?: (string | null) | undefined
  postal_code?: (string | null) | undefined
  country?: (string | null) | undefined
} | null
type UserAccountIdentity = {
  name?: UserAccountIdentityName | undefined
  address?: UserAccountIdentityAddress | undefined
  phone_number?: string | undefined
  email?: (string | null) | undefined
  date_of_birth?: (string | null) | undefined
  ssn?: (string | null) | undefined
  ssn_last_4?: (string | null) | undefined
} | null
type UserAccountItem = { item_id?: string | undefined; access_token?: AccessToken | undefined }
type UserAccountIdentityEditCounts = {
  edits_current?: number | undefined
  edits_1d?: number | undefined
  edits_30d?: number | undefined
  edits_365d?: number | undefined
  edits_all_time?: number | undefined
}
type UserAccountIdentityOfficialDocument = {
  ssn?: UserAccountIdentityEditCounts | undefined
} | null
type UserAccountIdentityEditHistory = {
  name?: UserAccountIdentityEditCounts | undefined
  address?: UserAccountIdentityEditCounts | undefined
  email?: UserAccountIdentityEditCounts | undefined
  date_of_birth?: UserAccountIdentityEditCounts | undefined
  official_document?: UserAccountIdentityOfficialDocument | undefined
} | null
type UserAccountSessionGetResponse = {
  idv_session_status?: {} | undefined
  link_session_id: string | null
  identity: UserAccountIdentity
  items: UserAccountItem[]
  identity_edit_history?: UserAccountIdentityEditHistory | undefined
  request_id: RequestID
}
type UserAccountSessionEvent = { name: string; timestamp: string; outcome?: string | undefined }
type UserAccountSessionEventSendRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  cohort_id?: string | undefined
  link_session_id: string
  event: UserAccountSessionEvent
}
type UserAccountSessionEventSendResponse = { request_id: RequestID }
type NetworkStatusGetUser = { phone_number: string }
type ProfileNetworkStatusGetRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  user: NetworkStatusGetUser
}
type NetworkStatusGetResponseNetworkStatus = 'UNKNOWN' | 'RETURNING_USER'
type ProfileNetworkStatusGetResponse = {
  network_status: NetworkStatusGetResponseNetworkStatus
  request_id: RequestID
}
type NetworkStatusGetRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  user: NetworkStatusGetUser
  template_id?: string | undefined
}
type NetworkStatusGetResponseLayer = { eligible: boolean } | null
type NetworkStatusGetResponse = {
  network_status: NetworkStatusGetResponseNetworkStatus
  layer?: NetworkStatusGetResponseLayer | undefined
  request_id: RequestID
}
type AuthGetRequestOptions = { account_ids?: string[] | undefined }
type AuthGetRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  access_token: AccessToken
  options?: AuthGetRequestOptions | undefined
}
type AccountBalance = {
  available: number | null
  current: number | null
  limit: number | null
  iso_currency_code: string | null
  unofficial_currency_code: string | null
  last_updated_datetime?: (string | null) | undefined
}
type AccountVerificationInsightsAccountNumberFormat = 'valid' | 'invalid' | 'unknown'
type AccountHolderCategory = 'business' | 'personal' | 'unrecognized'
type AccountBase = {
  account_id: string
  balances: AccountBalance
  mask: string | null
  name: string
  official_name: string | null
  type: AccountType
  subtype: AccountSubtype
  verification_status?:
    | 'automatically_verified'
    | 'pending_automatic_verification'
    | 'pending_manual_verification'
    | 'unsent'
    | 'manually_verified'
    | 'verification_expired'
    | 'verification_failed'
    | 'database_matched'
    | 'database_insights_pass'
    | 'database_insights_pass_with_caution'
    | 'database_insights_fail'
    | undefined
  verification_name?: string | undefined
  verification_insights?:
    | {
        name_match_score?: (number | null) | undefined
        network_status?:
          | { has_numbers_match: boolean; is_numbers_match_verified: boolean }
          | undefined
        previous_returns?: { has_previous_administrative_return: boolean } | undefined
        account_number_format: AccountVerificationInsightsAccountNumberFormat
      }
    | undefined
  persistent_account_id?: string | undefined
  apy?: (number | null) | undefined
  holder_category?: AccountHolderCategory | undefined
  paired_account_id?: (string | null) | undefined
}
type NumbersACH = {
  account_id: string
  account: string | null
  is_tokenized_account_number: boolean
  routing: string | null
  wire_routing: string | null
  can_transfer_in?: (boolean | null) | undefined
  can_transfer_out?: (boolean | null) | undefined
}
type NumbersEFT = {
  account_id: string
  account: string | null
  institution: string
  branch: string
}
type NumbersInternational = { account_id: string; iban: string | null; bic: string | null }
type NumbersBACS = { account_id: string; account: string; sort_code: string }
type AuthGetNumbers = {
  ach: NumbersACH[]
  eft: NumbersEFT[]
  international: NumbersInternational[]
  bacs: NumbersBACS[]
}
type Item = {
  item_id: string
  institution_id?: (string | null) | undefined
  institution_name?: (string | null) | undefined
  webhook: string | null
  auth_method?: ItemAuthMethod | undefined
  error: PlaidError
  available_products: Products[]
  billed_products: Products[]
  products: Products[]
  consented_products?: Products[] | undefined
  consent_expiration_time: string | null
  update_type: 'background' | 'user_present_required'
  paired_item_id?: (string | null) | undefined
}
type AuthGetResponse = {
  accounts: AccountBase[]
  numbers: AuthGetNumbers
  item: Item
  request_id: RequestID
}
type AuthVerifyNumbersACH = { account: string; routing: string }
type AuthVerifyRequestNumbers = { ach: AuthVerifyNumbersACH }
type AuthVerifyRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  legal_name?: (string | null) | undefined
  numbers: AuthVerifyRequestNumbers
}
type AccountVerificationInsights = {
  name_match_score?: (number | null) | undefined
  network_status?: { has_numbers_match: boolean; is_numbers_match_verified: boolean } | undefined
  previous_returns?: { has_previous_administrative_return: boolean } | undefined
  account_number_format: AccountVerificationInsightsAccountNumberFormat
}
type AuthVerifyResponse = {
  request_id: RequestID
  item_id?: (string | null) | undefined
  verification_status: string
  verification_insights: AccountVerificationInsights
}
type TransactionsGetRequestOptions = {
  account_ids?: string[] | undefined
  count?: number | undefined
  offset?: number | undefined
  include_original_description?: (boolean | null) | undefined
  include_personal_finance_category_beta?: boolean | undefined
  include_personal_finance_category?: boolean | undefined
  include_logo_and_counterparty_beta?: boolean | undefined
  personal_finance_category_version?: PersonalFinanceCategoryVersion | undefined
  days_requested?: number | undefined
}
type TransactionsGetRequest = {
  client_id?: APIClientID | undefined
  options?: TransactionsGetRequestOptions | undefined
  access_token: AccessToken
  secret?: APISecret | undefined
  start_date: string
  end_date: string
}
type PaymentMeta = {
  reference_number: string | null
  ppd_id: string | null
  payee: string | null
  by_order_of: string | null
  payer: string | null
  payment_method: string | null
  payment_processor: string | null
  reason: string | null
}
type PersonalFinanceCategory = {
  primary: string
  detailed: string
  confidence_level?: (string | null) | undefined
  version?: PersonalFinanceCategoryVersion | undefined
} | null
type BusinessFinanceCategory = {
  primary: string
  detailed: string
  confidence_level?: (string | null) | undefined
} | null
type TransactionCode =
  | 'adjustment'
  | 'atm'
  | 'bank charge'
  | 'bill payment'
  | 'cash'
  | 'cash advance'
  | 'cashback'
  | 'cheque'
  | 'direct debit'
  | 'interest'
  | 'late fee'
  | 'membership fee'
  | 'payment'
  | 'purchase'
  | 'refund'
  | 'returned item fee'
  | 'standing order'
  | 'transfer'
  | null
type CounterpartyType =
  | 'merchant'
  | 'financial_institution'
  | 'payment_app'
  | 'marketplace'
  | 'payment_terminal'
  | 'income_source'
type CounterpartyNumbersBACS = {
  account?: (string | null) | undefined
  sort_code?: (string | null) | undefined
} | null
type NumbersIBANNullable = {}
type CounterpartyNumbersInternational = {
  iban?: NumbersIBANNullable | undefined
  bic?: (string | null) | undefined
} | null
type CounterpartyNumbers = {
  bacs?: CounterpartyNumbersBACS | undefined
  international?: CounterpartyNumbersInternational | undefined
} | null
type TransactionCounterparty = {
  name: string
  entity_id?: (string | null) | undefined
  type: CounterpartyType
  website: string | null
  logo_url: string | null
  confidence_level?: (string | null) | undefined
  account_numbers?: CounterpartyNumbers | undefined
}
type ClientCustomization = { custom_entity_id?: string | undefined } | null
type Transaction = {
  account_id: string
  amount: number
  iso_currency_code: string | null
  unofficial_currency_code: string | null
  category?: (string[] | null) | undefined
  category_id?: (string | null) | undefined
  check_number?: (string | null) | undefined
  date: string
  location?: Location | undefined
  name?: string | undefined
  merchant_name?: (string | null) | undefined
  original_description?: (string | null) | undefined
  payment_meta?: PaymentMeta | undefined
  pending: boolean
  pending_transaction_id?: (string | null) | undefined
  account_owner?: (string | null) | undefined
  transaction_id: string
  transaction_type?: 'digital' | 'place' | 'special' | 'unresolved' | undefined
  logo_url?: (string | null) | undefined
  website?: (string | null) | undefined
  authorized_date: string | null
  authorized_datetime: string | null
  datetime: string | null
  payment_channel: 'online' | 'in store' | 'other'
  personal_finance_category?: PersonalFinanceCategory | undefined
  business_finance_category?: BusinessFinanceCategory | undefined
  transaction_code: TransactionCode
  personal_finance_category_icon_url?: string | undefined
  counterparties?: TransactionCounterparty[] | undefined
  merchant_entity_id?: (string | null) | undefined
  merchant_category_code?: (string | null) | undefined
  running_balance?: (number | null) | undefined
  client_customization?: ClientCustomization | undefined
}
type TransactionsGetResponse = {
  accounts: AccountBase[]
  transactions: Transaction[]
  total_transactions: number
  item: Item
  request_id: RequestID
}
type TransactionsRefreshRequest = {
  client_id?: APIClientID | undefined
  access_token: AccessToken
  secret?: APISecret | undefined
}
type TransactionsRefreshResponse = { request_id: RequestID }
type CustomSandboxTransaction = {
  date_transacted: string
  date_posted: string
  amount: number
  description: string
  iso_currency_code?: string | undefined
  account_id?: string | undefined
}
type SandboxTransactionsCreateRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  access_token: AccessToken
  transactions: CustomSandboxTransaction[]
}
type SandboxTransactionsCreateResponse = { request_id: RequestID }
type CashflowReportRefreshRequest = {
  client_id?: APIClientID | undefined
  access_token: AccessToken
  secret?: APISecret | undefined
  days_requested: number
}
type CashflowReportRefreshResponse = { request_id: RequestID }
type CashflowReportGetRequestOptions = { account_ids?: string[] | undefined }
type CashflowReportGetRequest = {
  client_id?: APIClientID | undefined
  access_token: AccessToken
  secret?: APISecret | undefined
  days_requested: number
  count?: number | undefined
  cursor?: string | undefined
  options?: CashflowReportGetRequestOptions | undefined
}
type BusinessAccount = {
  account_id: string
  balances: AccountBalance
  mask: string | null
  name: string
  official_name: string | null
  type: AccountType
  subtype: AccountSubtype
  verification_status?:
    | 'automatically_verified'
    | 'pending_automatic_verification'
    | 'pending_manual_verification'
    | 'unsent'
    | 'manually_verified'
    | 'verification_expired'
    | 'verification_failed'
    | 'database_matched'
    | 'database_insights_pass'
    | 'database_insights_pass_with_caution'
    | 'database_insights_fail'
    | undefined
  verification_name?: string | undefined
  verification_insights?:
    | {
        name_match_score?: (number | null) | undefined
        network_status?:
          | { has_numbers_match: boolean; is_numbers_match_verified: boolean }
          | undefined
        previous_returns?: { has_previous_administrative_return: boolean } | undefined
        account_number_format: AccountVerificationInsightsAccountNumberFormat
      }
    | undefined
  persistent_account_id?: string | undefined
  apy?: (number | null) | undefined
  holder_category?: AccountHolderCategory | undefined
  paired_account_id?: (string | null) | undefined
  owners?: Owner[] | undefined
}
type CashflowReportPaymentMeta = {
  reference_number: string | null
  ppd_id: string | null
  payee: string | null
  by_order_of: string | null
  payer: string | null
  payment_method: string | null
  payment_processor: string | null
  reason: string | null
}
type PaymentChannel = 'online' | 'in store' | 'other'
type CashflowReportTransaction = {
  account_id: string
  amount: number | null
  iso_currency_code: string | null
  unofficial_currency_code: string | null
  check_number?: (string | null) | undefined
  date: string
  location: Location
  name: string | null
  merchant_name?: (string | null) | undefined
  original_description?: (string | null) | undefined
  payment_meta: CashflowReportPaymentMeta
  pending: boolean | null
  pending_transaction_id: string | null
  account_owner: string | null
  transaction_id: string
  logo_url?: (string | null) | undefined
  website?: (string | null) | undefined
  authorized_date: string | null
  authorized_datetime: string | null
  datetime: string | null
  payment_channel: PaymentChannel
  personal_finance_category?: PersonalFinanceCategory | undefined
  business_finance_category?: BusinessFinanceCategory | undefined
  credit_category?: CreditCategory | undefined
  transaction_code: TransactionCode
  personal_finance_category_icon_url?: (string | null) | undefined
  counterparties?: TransactionCounterparty[] | undefined
  merchant_entity_id?: (string | null) | undefined
}
type CashflowReportGetResponse = {
  accounts: BusinessAccount[]
  transactions: CashflowReportTransaction[]
  total_transactions: number
  item: Item
  next_cursor: string
  has_more: boolean
  last_successful_update_time: string
  request_id: RequestID
}
type CashflowReportTransactionsGetRequestOptions = { account_ids?: string[] | undefined }
type CashflowReportTransactionsGetRequest = {
  client_id?: APIClientID | undefined
  access_token: AccessToken
  secret?: APISecret | undefined
  count?: number | undefined
  cursor?: string | undefined
  options?: CashflowReportTransactionsGetRequestOptions | undefined
}
type CashflowReportTransactionsGetResponse = {
  accounts: BusinessAccount[]
  transactions: CashflowReportTransaction[]
  total_transactions: number
  item: Item
  next_cursor: string
  has_more: boolean
  request_id: RequestID
}
type CashflowReportInsightsGetRequest = {
  client_id?: APIClientID | undefined
  access_token: AccessToken
  secret?: APISecret | undefined
}
type CashflowReportHistoricalBalance = {
  date: string
  amount: number
  iso_currency_code: string | null
  unofficial_currency_code: string | null
}
type CashflowIsoCurrencyCode = string | null
type CashflowUnofficialCurrencyCode = string | null
type CashflowReportMonthlySummaryStartingBalance = {
  amount: number
  iso_currency_code: CashflowIsoCurrencyCode
  unofficial_currency_code: CashflowUnofficialCurrencyCode
} | null
type CashflowReportMonthlySummaryEndingBalance = {
  amount: number
  iso_currency_code: CashflowIsoCurrencyCode
  unofficial_currency_code: CashflowUnofficialCurrencyCode
} | null
type CashflowReportMonthlySummaryAverageDailyEndingBalance = {
  amount: number
  iso_currency_code: CashflowIsoCurrencyCode
  unofficial_currency_code: CashflowUnofficialCurrencyCode
}
type CashflowReportMonthlySummaryAverageDailyInflowAmount = {
  amount: number
  iso_currency_code: CashflowIsoCurrencyCode
  unofficial_currency_code: CashflowUnofficialCurrencyCode
}
type CashflowReportMonthlySummaryAverageDailyOutflowAmount = {
  amount: number
  iso_currency_code: CashflowIsoCurrencyCode
  unofficial_currency_code: CashflowUnofficialCurrencyCode
}
type CashflowReportMonthlySummaryAverageDailyNetCashflowAmount = {
  amount: number
  iso_currency_code: CashflowIsoCurrencyCode
  unofficial_currency_code: CashflowUnofficialCurrencyCode
}
type CashflowReportMonthlySummaryTotalRevenue = {
  amount: number
  iso_currency_code: CashflowIsoCurrencyCode
  unofficial_currency_code: CashflowUnofficialCurrencyCode
}
type CashflowReportMonthlySummaryTotalLoanPayment = {
  amount: number
  iso_currency_code: CashflowIsoCurrencyCode
  unofficial_currency_code: CashflowUnofficialCurrencyCode
}
type CashflowReportMonthlySummaryTotalVariableExpense = {
  amount: number
  iso_currency_code: CashflowIsoCurrencyCode
  unofficial_currency_code: CashflowUnofficialCurrencyCode
}
type CashflowReportMonthlySummaryTotalPayroll = {
  amount: number
  iso_currency_code: CashflowIsoCurrencyCode
  unofficial_currency_code: CashflowUnofficialCurrencyCode
}
type CashflowReportMonthlySummary = {
  start_date: string
  end_date: string
  starting_balance: CashflowReportMonthlySummaryStartingBalance
  ending_balance: CashflowReportMonthlySummaryEndingBalance
  average_daily_ending_balance: CashflowReportMonthlySummaryAverageDailyEndingBalance
  average_daily_inflow_amount: CashflowReportMonthlySummaryAverageDailyInflowAmount
  average_daily_outflow_amount: CashflowReportMonthlySummaryAverageDailyOutflowAmount
  average_daily_net_cashflow_amount: CashflowReportMonthlySummaryAverageDailyNetCashflowAmount
  average_daily_inflow_transaction_count: number
  average_daily_outflow_transaction_count: number
  total_revenue: CashflowReportMonthlySummaryTotalRevenue
  total_loan_payment: CashflowReportMonthlySummaryTotalLoanPayment
  total_variable_expense: CashflowReportMonthlySummaryTotalVariableExpense
  total_payroll: CashflowReportMonthlySummaryTotalPayroll
  nsf_transaction_count: number
  overdraft_transaction_count: number
  negative_ending_balance_day_count: number
}
type CashflowReportAccountInsights = {
  historical_balances: CashflowReportHistoricalBalance[]
  monthly_summaries: CashflowReportMonthlySummary[]
}
type CashflowReportInsightsGetResponse = {
  item: Item
  accounts: BusinessAccount[]
  account_insights: CashflowReportAccountInsights
  last_generated_time: string
  request_id: RequestID
}
type TransactionsRecurringGetRequestOptions = {
  include_personal_finance_category?: boolean | undefined
  personal_finance_category_version?: PersonalFinanceCategoryVersion | undefined
}
type TransactionsRecurringGetRequest = {
  client_id?: APIClientID | undefined
  access_token: AccessToken
  secret?: APISecret | undefined
  options?: TransactionsRecurringGetRequestOptions | undefined
  account_ids?: string[] | undefined
}
type RecurringTransactionFrequency =
  | 'UNKNOWN'
  | 'WEEKLY'
  | 'BIWEEKLY'
  | 'SEMI_MONTHLY'
  | 'MONTHLY'
  | 'ANNUALLY'
type TransactionStreamAmount = {
  amount?: number | undefined
  iso_currency_code?: (string | null) | undefined
  unofficial_currency_code?: (string | null) | undefined
}
type TransactionStreamStatus = 'UNKNOWN' | 'MATURE' | 'EARLY_DETECTION' | 'TOMBSTONED'
type TransactionStream = {
  account_id: string
  stream_id: string
  category: string[] | null
  category_id: string | null
  description: string
  merchant_name: string | null
  first_date: string
  last_date: string
  predicted_next_date?: (string | null) | undefined
  frequency: RecurringTransactionFrequency
  transaction_ids: string[]
  average_amount: TransactionStreamAmount
  last_amount: TransactionStreamAmount
  is_active: boolean
  status: TransactionStreamStatus
  personal_finance_category?: PersonalFinanceCategory | undefined
  is_user_modified: boolean
  last_user_modified_datetime?: string | undefined
}
type TransactionsRecurringGetResponse = {
  inflow_streams: TransactionStream[]
  outflow_streams: TransactionStream[]
  updated_datetime: string
  personal_finance_category_version?: PersonalFinanceCategoryVersion | undefined
  request_id: RequestID
}
type TransactionsSyncRequestOptions = {
  include_original_description?: (boolean | null) | undefined
  include_personal_finance_category?: boolean | undefined
  include_logo_and_counterparty_beta?: boolean | undefined
  personal_finance_category_version?: PersonalFinanceCategoryVersion | undefined
  days_requested?: number | undefined
  account_id?: string | undefined
}
type TransactionsSyncRequest = {
  client_id?: APIClientID | undefined
  access_token: AccessToken
  secret?: APISecret | undefined
  cursor?: string | undefined
  count?: number | undefined
  options?: TransactionsSyncRequestOptions | undefined
}
type TransactionsUpdateStatus =
  | 'TRANSACTIONS_UPDATE_STATUS_UNKNOWN'
  | 'NOT_READY'
  | 'INITIAL_UPDATE_COMPLETE'
  | 'HISTORICAL_UPDATE_COMPLETE'
type RemovedTransaction = { transaction_id: string; account_id: string }
type TransactionsSyncResponse = {
  transactions_update_status: TransactionsUpdateStatus
  accounts: AccountBase[]
  added: Transaction[]
  modified: Transaction[]
  removed: RemovedTransaction[]
  next_cursor: string
  has_more: boolean
  request_id: RequestID
}
type EnrichTransactionDirection = 'INFLOW' | 'OUTFLOW'
type ClientProvidedTransactionLocation = {
  country?: string | undefined
  region?: string | undefined
  city?: string | undefined
  address?: string | undefined
  postal_code?: string | undefined
}
type ClientProvidedTransaction = {
  id: string
  user_id?: string | undefined
  client_user_id?: string | undefined
  client_account_id?: string | undefined
  account_type?: string | undefined
  account_subtype?: string | undefined
  description: string
  amount: number
  direction: EnrichTransactionDirection
  iso_currency_code: string
  location?: ClientProvidedTransactionLocation | undefined
  mcc?: string | undefined
  date_posted?: string | undefined
}
type TransactionsEnrichRequestOptions = {
  include_legacy_category?: boolean | undefined
  personal_finance_category_version?: PersonalFinanceCategoryVersion | undefined
}
type TransactionsEnrichRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  account_type: string
  transactions: ClientProvidedTransaction[]
  options?: TransactionsEnrichRequestOptions | undefined
}
type Counterparty = {
  name: string
  entity_id?: (string | null) | undefined
  type: CounterpartyType
  website: string | null
  logo_url: string | null
  confidence_level?: (string | null) | undefined
  phone_number: string | null
  account_numbers?: CounterpartyNumbers | undefined
}
type Enrichments = {
  check_number?: (string | null) | undefined
  counterparties: Counterparty[]
  entity_id?: (string | null) | undefined
  legacy_category_id?: (string | null) | undefined
  legacy_category?: (string[] | null) | undefined
  location: Location
  logo_url: string | null
  merchant_name: string | null
  payment_channel: PaymentChannel
  phone_number: string | null
  personal_finance_category: PersonalFinanceCategory
  personal_finance_category_icon_url: string
  website: string | null
}
type ClientProvidedEnrichedTransaction = {
  id: string
  client_user_id?: string | undefined
  client_account_id?: string | undefined
  account_type?: string | undefined
  account_subtype?: string | undefined
  description: string
  amount: number
  direction?: EnrichTransactionDirection | undefined
  iso_currency_code: string
  enrichments: Enrichments
  client_customization?: ClientCustomization | undefined
}
type TransactionsEnrichResponse = {
  enriched_transactions: ClientProvidedEnrichedTransaction[]
  request_id?: RequestID | undefined
}
type UserTransactionsRefreshRequest = {
  user_id: string
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
}
type RefreshResult = {
  item_id?: string | undefined
  product?: string | undefined
  error?: PlaidError | undefined
}
type UserTransactionsRefreshResponse = {
  request_id?: RequestID | undefined
  user_id?: string | undefined
  results?: RefreshResult[] | undefined
}
type UserFinancialDataRefreshRequest = {
  user_id: string
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
}
type UserFinancialDataRefreshResponse = {
  request_id?: RequestID | undefined
  user_id?: string | undefined
  results?: RefreshResult[] | undefined
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
  | 'PT'
  | 'BE'
  | 'AT'
  | 'FI'
type InstitutionsGetRequestOptions = {
  products?: (Products[] | null) | undefined
  routing_numbers?: (string[] | null) | undefined
  oauth?: (boolean | null) | undefined
  include_optional_metadata?: boolean | undefined
  include_auth_metadata?: boolean | undefined
  include_payment_initiation_metadata?: boolean | undefined
}
type InstitutionsGetRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  count: number
  offset: number
  country_codes: CountryCode[]
  options?: InstitutionsGetRequestOptions | undefined
}
type InstitutionConnectionAvailability = 'SUPPORTED' | 'NOT_SUPPORTED'
type ProductStatusBreakdown = {
  success: number
  error_plaid: number
  error_institution: number
  refresh_interval?: 'NORMAL' | 'DELAYED' | 'STOPPED' | undefined
}
type ProductStatus = {
  status: 'HEALTHY' | 'DEGRADED' | 'DOWN'
  last_status_change: string
  breakdown: ProductStatusBreakdown
} | null
type IncidentUpdate = {
  description?: string | undefined
  status?: 'INVESTIGATING' | 'IDENTIFIED' | 'SCHEDULED' | 'RESOLVED' | 'UNKNOWN' | undefined
  updated_date?: string | undefined
}
type HealthIncident = {
  start_date: string
  end_date?: (string | null) | undefined
  title: string
  incident_updates: IncidentUpdate[] | null
}
type InstitutionStatus = {
  item_logins: ProductStatus
  transactions_updates?: ProductStatus | undefined
  auth?: ProductStatus | undefined
  identity?: ProductStatus | undefined
  investments_updates?: ProductStatus | undefined
  liabilities_updates?: ProductStatus | undefined
  liabilities?: ProductStatus | undefined
  investments?: ProductStatus | undefined
  health_incidents?: (HealthIncident[] | null) | undefined
} | null
type PaymentInitiationMaximumPaymentAmount = { [x: string]: string }
type PaymentScheduleInterval = 'WEEKLY' | 'MONTHLY'
type PaymentInitiationStandingOrderMetadata = {
  supports_standing_order_end_date: boolean
  supports_standing_order_negative_execution_days: boolean
  valid_standing_order_intervals: PaymentScheduleInterval[] | null
} | null
type PaymentInitiationMetadata = {
  supports_international_payments: boolean
  supports_sepa_instant: boolean
  maximum_payment_amount?: PaymentInitiationMaximumPaymentAmount | undefined
  supports_refund_details: boolean
  standing_order_metadata?: PaymentInitiationStandingOrderMetadata | undefined
  supports_payment_consents: boolean
  supports_commercial_payment_consents: boolean
} | null
type AuthSupportedMethods = {
  instant_auth: boolean
  instant_match: boolean
  automated_micro_deposits: boolean
  instant_micro_deposits: boolean
} | null
type AuthMetadata = { supported_methods: AuthSupportedMethods } | null
type Institution = {
  institution_id: string
  name: string
  products: Products[]
  country_codes: CountryCode[]
  url?: (string | null) | undefined
  primary_color?: (string | null) | undefined
  logo?: (string | null) | undefined
  routing_numbers: string[]
  dtc_numbers?: string[] | undefined
  oauth: boolean
  connection_availability: InstitutionConnectionAvailability
  status?: InstitutionStatus | undefined
  payment_initiation_metadata?: PaymentInitiationMetadata | undefined
  auth_metadata?: AuthMetadata | undefined
}
type InstitutionsGetResponse = { institutions: Institution[]; total: number; request_id: RequestID }
type InstitutionsSearchPaymentInitiationOptions = {
  payment_id?: (string | null) | undefined
  consent_id?: (string | null) | undefined
} | null
type InstitutionsSearchRequestOptions = {
  oauth?: (boolean | null) | undefined
  include_optional_metadata?: boolean | undefined
  include_auth_metadata?: (boolean | null) | undefined
  include_payment_initiation_metadata?: (boolean | null) | undefined
  payment_initiation?: InstitutionsSearchPaymentInitiationOptions | undefined
}
type InstitutionsSearchRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  query: string
  products?: (Products[] | null) | undefined
  country_codes: CountryCode[]
  options?: InstitutionsSearchRequestOptions | undefined
}
type InstitutionsSearchResponse = { institutions: Institution[]; request_id: RequestID }
type InstitutionsGetByIdRequestOptions = {
  include_optional_metadata?: boolean | undefined
  include_status?: boolean | undefined
  include_auth_metadata?: boolean | undefined
  include_payment_initiation_metadata?: boolean | undefined
}
type InstitutionsGetByIdRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  institution_id: string
  country_codes: CountryCode[]
  options?: InstitutionsGetByIdRequestOptions | undefined
}
type InstitutionsGetByIdResponse = { institution: Institution; request_id: RequestID }
type ItemRemoveReasonCode =
  | 'FRAUD_FIRST_PARTY'
  | 'FRAUD_FALSE_IDENTITY'
  | 'FRAUD_ABUSE'
  | 'FRAUD_OTHER'
  | 'CONNECTION_IS_NON_FUNCTIONAL'
  | 'OTHER'
type ItemRemoveRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  access_token: AccessToken
  reason_code?: ItemRemoveReasonCode | undefined
  reason_note?: (string | null) | undefined
}
type ItemRemoveResponse = { request_id: RequestID }
type ProductsTerminateReasonCode =
  | 'FRAUD_FIRST_PARTY'
  | 'FRAUD_FALSE_IDENTITY'
  | 'FRAUD_ABUSE'
  | 'FRAUD_OTHER'
  | 'FRAUD_TRANSACTION'
  | 'CONSUMER_LOAN_PAID_OFF'
  | 'CONSUMER_ACCOUNT_CLOSED'
  | 'CONSUMER_CHARGE_OFF'
  | 'CONSUMER_PAYMENT_METHOD_SWITCHED'
  | 'USER_OFFBOARDING'
  | 'DUPLICATE_ITEM'
  | 'BILLING_TERMINATION'
  | 'OTHER'
type ItemProductsTerminateRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  access_token: AccessToken
  reason_code: ProductsTerminateReasonCode
  reason_note?: (string | null) | undefined
}
type ItemProductsTerminateResponse = { request_id: RequestID }
type AccountsGetRequestOptions = { account_ids?: string[] | undefined }
type AccountsGetRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  access_token: AccessToken
  options?: AccountsGetRequestOptions | undefined
}
type AccountsGetResponse = { accounts: AccountBase[]; item: Item; request_id: RequestID }
type CategoriesGetRequest = { [x: string]: unknown }
type Category = { category_id: string; group: string; hierarchy: string[] }
type CategoriesGetResponse = { categories: Category[]; request_id: RequestID }
type SandboxOverrideUsername = string | null
type SandboxOverridePassword = string | null
type SandboxProcessorTokenCreateRequestOptions = {
  override_username?: SandboxOverrideUsername | undefined
  override_password?: SandboxOverridePassword | undefined
}
type SandboxProcessorTokenCreateRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  institution_id: string
  options?: SandboxProcessorTokenCreateRequestOptions | undefined
}
type SandboxProcessorTokenCreateResponse = { processor_token: string; request_id: RequestID }
type SandboxPublicTokenCreateRequestOptionsTransactions = {
  start_date?: string | undefined
  end_date?: string | undefined
  days_requested?: number | undefined
} | null
type SandboxPublicTokenCreateRequestOptionsStatements = {
  start_date: string
  end_date: string
} | null
type IncomeVerificationSourceType = 'bank' | 'payroll'
type SandboxPublicTokenCreateRequestIncomeVerificationBankIncome = {
  days_requested?: number | undefined
}
type SandboxPublicTokenCreateRequestOptionsIncomeVerification = {
  income_source_types?: IncomeVerificationSourceType[] | undefined
  bank_income?: SandboxPublicTokenCreateRequestIncomeVerificationBankIncome | undefined
}
type SandboxPublicTokenCreateRequestOptions = {
  webhook?: string | undefined
  override_username?: SandboxOverrideUsername | undefined
  override_password?: SandboxOverridePassword | undefined
  transactions?: SandboxPublicTokenCreateRequestOptionsTransactions | undefined
  statements?: SandboxPublicTokenCreateRequestOptionsStatements | undefined
  income_verification?: SandboxPublicTokenCreateRequestOptionsIncomeVerification | undefined
}
type SandboxPublicTokenCreateRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  institution_id: string
  initial_products: Products[]
  options?: SandboxPublicTokenCreateRequestOptions | undefined
  user_token?: UserToken | undefined
  user_id?: NewUserID | undefined
}
type SandboxPublicTokenCreateResponse = { public_token: string; request_id: RequestID }
type WebhookType =
  | 'AUTH'
  | 'HOLDINGS'
  | 'INVESTMENTS_TRANSACTIONS'
  | 'ITEM'
  | 'LIABILITIES'
  | 'TRANSACTIONS'
  | 'ASSETS'
  | 'IDENTITY'
type SandboxItemFireWebhookRequestOptions = { new_transactions?: number | undefined }
type SandboxItemFireWebhookRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  access_token: AccessToken
  webhook_type?: WebhookType | undefined
  webhook_code:
    | 'DEFAULT_UPDATE'
    | 'NEW_ACCOUNTS_AVAILABLE'
    | 'SMS_MICRODEPOSITS_VERIFICATION'
    | 'AUTHORIZATION_GRANTED'
    | 'USER_PERMISSION_REVOKED'
    | 'USER_ACCOUNT_REVOKED'
    | 'PENDING_DISCONNECT'
    | 'CONSENT_UPDATED'
    | 'RECURRING_TRANSACTIONS_UPDATE'
    | 'LOGIN_REPAIRED'
    | 'SYNC_UPDATES_AVAILABLE'
    | 'PRODUCT_READY'
    | 'ERROR'
  options?: SandboxItemFireWebhookRequestOptions | undefined
}
type SandboxItemFireWebhookResponse = { webhook_fired: boolean; request_id: RequestID }
type SandboxUserFireWebhookType = 'CHECK_REPORT'
type SandboxUserFireWebhookCode =
  | 'USER_CHECK_REPORT_READY'
  | 'USER_CHECK_REPORT_FAILED'
  | 'CHECK_REPORT_READY'
  | 'CHECK_REPORT_FAILED'
type SandboxUserFireWebhookRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  user_id?: NewUserID | undefined
  user_token?: UserToken | undefined
  webhook_type: SandboxUserFireWebhookType
  webhook_code: SandboxUserFireWebhookCode
  webhook: string
}
type SandboxUserFireWebhookResponse = { webhook_fired: boolean; request_id: RequestID }
type MinLastUpdatedDatetime = string
type AccountsBalanceGetRequestOptions = {
  account_ids?: string[] | undefined
  min_last_updated_datetime?: MinLastUpdatedDatetime | undefined
}
type AccountsBalanceGetRequest = {
  access_token: AccessToken
  secret?: APISecret | undefined
  client_id?: APIClientID | undefined
  options?: AccountsBalanceGetRequestOptions | undefined
}
type IdentityGetRequestOptions = { account_ids?: string[] | undefined }
type IdentityGetRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  access_token: AccessToken
  options?: IdentityGetRequestOptions | undefined
}
type AccountIdentity = {
  account_id: string
  balances: AccountBalance
  mask: string | null
  name: string
  official_name: string | null
  type: AccountType
  subtype: AccountSubtype
  verification_status?:
    | 'automatically_verified'
    | 'pending_automatic_verification'
    | 'pending_manual_verification'
    | 'unsent'
    | 'manually_verified'
    | 'verification_expired'
    | 'verification_failed'
    | 'database_matched'
    | 'database_insights_pass'
    | 'database_insights_pass_with_caution'
    | 'database_insights_fail'
    | undefined
  verification_name?: string | undefined
  verification_insights?:
    | {
        name_match_score?: (number | null) | undefined
        network_status?:
          | { has_numbers_match: boolean; is_numbers_match_verified: boolean }
          | undefined
        previous_returns?: { has_previous_administrative_return: boolean } | undefined
        account_number_format: AccountVerificationInsightsAccountNumberFormat
      }
    | undefined
  persistent_account_id?: string | undefined
  apy?: (number | null) | undefined
  holder_category?: AccountHolderCategory | undefined
  paired_account_id?: (string | null) | undefined
  owners: Owner[]
}
type IdentityGetResponse = { accounts: AccountIdentity[]; item: Item; request_id: RequestID }
type IdentityDocumentsUploadsGetRequestOptions = { account_ids?: string[] | undefined }
type IdentityDocumentsUploadsGetRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  access_token: AccessToken
  options?: IdentityDocumentsUploadsGetRequestOptions | undefined
}
type IdentityDocumentUploadMetadata = {
  document_type?: (string | null) | undefined
  is_account_number_match?: (boolean | null) | undefined
  page_count?: (number | null) | undefined
  last_updated?: string | undefined
  uploaded_at?: string | undefined
}
type IdentityDocumentUploadRiskSummary = { risk_score?: (number | null) | undefined }
type IdentityDocumentUploadRiskSignal = {
  type?: (string | null) | undefined
  has_fraud_risk?: (boolean | null) | undefined
  signal_description?: (string | null) | undefined
  page_number?: (number | null) | undefined
}
type IdentityDocumentUploadRiskInsights = {
  risk_summary?: IdentityDocumentUploadRiskSummary | undefined
  risk_signals?: IdentityDocumentUploadRiskSignal[] | undefined
}
type IdentityDocumentUpload = {
  document_id?: string | undefined
  metadata?: IdentityDocumentUploadMetadata | undefined
  risk_insights?: IdentityDocumentUploadRiskInsights | undefined
}
type AccountIdentityDocumentUpload = {
  account_id: string
  balances: AccountBalance
  mask: string | null
  name: string
  official_name: string | null
  type: AccountType
  subtype: AccountSubtype
  verification_status?:
    | 'automatically_verified'
    | 'pending_automatic_verification'
    | 'pending_manual_verification'
    | 'unsent'
    | 'manually_verified'
    | 'verification_expired'
    | 'verification_failed'
    | 'database_matched'
    | 'database_insights_pass'
    | 'database_insights_pass_with_caution'
    | 'database_insights_fail'
    | undefined
  verification_name?: string | undefined
  verification_insights?:
    | {
        name_match_score?: (number | null) | undefined
        network_status?:
          | { has_numbers_match: boolean; is_numbers_match_verified: boolean }
          | undefined
        previous_returns?: { has_previous_administrative_return: boolean } | undefined
        account_number_format: AccountVerificationInsightsAccountNumberFormat
      }
    | undefined
  persistent_account_id?: string | undefined
  apy?: (number | null) | undefined
  holder_category?: AccountHolderCategory | undefined
  paired_account_id?: (string | null) | undefined
  owners: Owner[]
  documents?: (IdentityDocumentUpload[] | null) | undefined
}
type IdentityDocumentsUploadsGetResponse = {
  accounts: AccountIdentityDocumentUpload[]
  item: Item
  request_id: RequestID
}
type AddressDataNullableNoRequiredFields = {
  city?: (string | null) | undefined
  region?: (string | null) | undefined
  street?: (string | null) | undefined
  postal_code?: (string | null) | undefined
  country?: (string | null) | undefined
}
type IdentityMatchUser = {
  legal_name?: (string | null) | undefined
  phone_number?: (string | null) | undefined
  email_address?: (string | null) | undefined
  address?: AddressDataNullableNoRequiredFields | undefined
}
type IdentityMatchRequestOptions = { account_ids?: string[] | undefined }
type IdentityMatchRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  access_token: AccessToken
  user?: IdentityMatchUser | undefined
  options?: IdentityMatchRequestOptions | undefined
}
type AccountIdentityMatchScore = {
  account_id: string
  balances: AccountBalance
  mask: string | null
  name: string
  official_name: string | null
  type: AccountType
  subtype: AccountSubtype
  verification_status?:
    | 'automatically_verified'
    | 'pending_automatic_verification'
    | 'pending_manual_verification'
    | 'unsent'
    | 'manually_verified'
    | 'verification_expired'
    | 'verification_failed'
    | 'database_matched'
    | 'database_insights_pass'
    | 'database_insights_pass_with_caution'
    | 'database_insights_fail'
    | undefined
  verification_name?: string | undefined
  verification_insights?:
    | {
        name_match_score?: (number | null) | undefined
        network_status?:
          | { has_numbers_match: boolean; is_numbers_match_verified: boolean }
          | undefined
        previous_returns?: { has_previous_administrative_return: boolean } | undefined
        account_number_format: AccountVerificationInsightsAccountNumberFormat
      }
    | undefined
  persistent_account_id?: string | undefined
  apy?: (number | null) | undefined
  holder_category?: AccountHolderCategory | undefined
  paired_account_id?: (string | null) | undefined
  legal_name: NameMatchScore
  phone_number: PhoneNumberMatchScore
  email_address: EmailAddressMatchScore
  address: AddressMatchScore
}
type IdentityMatchResponse = {
  accounts: AccountIdentityMatchScore[]
  item: Item
  request_id: RequestID
}
type IdentityMatchListRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  start_time: string
  end_time: string
  count?: number | undefined
  cursor?: string | undefined
}
type IdentityMatchListOutcome = 'PASS' | 'FAIL' | 'UNKNOWN'
type IdentityMatchListAttemptScore = {
  account_id: string | null
  legal_name: NameMatchScore
  phone_number: PhoneNumberMatchScore
  email_address: EmailAddressMatchScore
  address: AddressMatchScore
}
type IdentityMatchListAttempt = {
  attempt_id: string
  item_id: string | null
  created_at: string
  link_session_id: string
  link_customization_name: string
  ruleset_revision: number
  outcome: IdentityMatchListOutcome
  outcome_account_id: string | null
  scores: IdentityMatchListAttemptScore[]
}
type IdentityMatchListResponse = {
  identity_match_attempts: IdentityMatchListAttempt[]
  next_cursor: string | null
  has_more: boolean
  request_id: RequestID
}
type IdentityRefreshRequest = {
  client_id?: APIClientID | undefined
  access_token: AccessToken
  secret?: APISecret | undefined
}
type IdentityRefreshResponse = { request_id: RequestID }
type DashboardUserID = string
type DashboardUserGetRequest = {
  dashboard_user_id: DashboardUserID
  secret?: APISecret | undefined
  client_id?: APIClientID | undefined
}
type Timestamp = string
type EmailAddress = string
type DashboardUserStatus = 'invited' | 'active' | 'deactivated'
type DashboardUserGetResponse = {
  id: DashboardUserID
  created_at: Timestamp
  email_address: EmailAddress
  status: DashboardUserStatus
  request_id: RequestID
}
type Cursor = string | null
type DashboardUserListRequest = {
  secret?: APISecret | undefined
  client_id?: APIClientID | undefined
  cursor?: Cursor | undefined
}
type DashboardUser = {
  id: DashboardUserID
  created_at: Timestamp
  email_address: EmailAddress
  status: DashboardUserStatus
}
type DashboardUserListResponse = {
  dashboard_users: DashboardUser[]
  next_cursor: Cursor
  request_id: RequestID
}
type ClientUserID = string
type PlaidUserID = string
type IdentityVerificationTemplateID = string
type IdentityVerificationLanguage =
  | 'en-US'
  | 'es-ES'
  | 'es-US'
  | 'fr-CA'
  | 'ja-JP'
  | 'pt-BR'
  | 'pt-PT'
  | null
type IdentityVerificationConsent = boolean
type IdentityVerificationUserPhoneNumber = string | null
type ISO8601Date = string
type GivenNameField = string
type FamilyNameField = string
type IdentityVerificationRequestUserName = {
  given_name: GivenNameField
  family_name: FamilyNameField
} | null
type StreetNullable = string | null
type Street2 = string | null
type CityNullable = string | null
type Region = string | null
type PostalCode = string | null
type GenericCountryCode = string
type UserAddress = {
  street?: StreetNullable | undefined
  street2?: Street2 | undefined
  city?: CityNullable | undefined
  region?: Region | undefined
  postal_code?: PostalCode | undefined
  country: GenericCountryCode
} | null
type IDNumberValue = string
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
  | 'in_epic'
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
type UserIDNumber = { value: IDNumberValue; type: IDNumberType } | null
type DeprecatedClientUserID = string | null
type IPAddress = string | null
type IdentityVerificationCreateRequestUser = {
  email_address?: EmailAddress | undefined
  phone_number?: IdentityVerificationUserPhoneNumber | undefined
  date_of_birth?: ISO8601Date | undefined
  name?: IdentityVerificationRequestUserName | undefined
  address?: UserAddress | undefined
  id_number?: UserIDNumber | undefined
  client_user_id?: DeprecatedClientUserID | undefined
  ip_address?: IPAddress | undefined
} | null
type IdempotencyFlag = boolean | null
type IdentityVerificationCreateRequest = {
  client_user_id?: ClientUserID | undefined
  user_id?: PlaidUserID | undefined
  is_shareable: boolean
  template_id: IdentityVerificationTemplateID
  language?: IdentityVerificationLanguage | undefined
  gave_consent: IdentityVerificationConsent
  user?: IdentityVerificationCreateRequestUser | undefined
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  is_idempotent?: IdempotencyFlag | undefined
}
type IdentityVerificationID = string
type TimestampNullable = string | null
type PreviousIdentityVerificationAttemptID = string | null
type ShareableURL = string | null
type IdentityVerificationTemplateVersion = number
type IdentityVerificationTemplateReference = {
  id: IdentityVerificationTemplateID
  version: IdentityVerificationTemplateVersion
}
type ISO8601DateNullable = string | null
type EmailAddressNullable = string | null
type IdentityVerificationResponseUserName = {
  given_name: GivenNameField
  family_name: FamilyNameField
} | null
type IdentityVerificationUserAddress = {
  street: StreetNullable
  street2: Street2
  city: CityNullable
  region: Region
  postal_code: PostalCode
  country: GenericCountryCode
} | null
type IdentityVerificationUserData = {
  phone_number?: IdentityVerificationUserPhoneNumber | undefined
  date_of_birth: ISO8601DateNullable
  ip_address: IPAddress
  email_address: EmailAddressNullable
  name: IdentityVerificationResponseUserName
  address: IdentityVerificationUserAddress
  id_number: UserIDNumber
}
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
  verify_sms: IdentityVerificationStepStatus
  kyc_check: IdentityVerificationStepStatus
  documentary_verification: IdentityVerificationStepStatus
  selfie_check: IdentityVerificationStepStatus
  watchlist_screening: IdentityVerificationStepStatus
  risk_check: IdentityVerificationStepStatus
}
type DocumentStatus = 'success' | 'failed' | 'manually_approved'
type DocumentImageFront = string | null
type DocumentImageBack = string | null
type DocumentImageCroppedFront = string | null
type DocumentImageCroppedBack = string | null
type DocumentImageFace = string | null
type PhysicalDocumentImages = {
  original_front: DocumentImageFront
  original_back: DocumentImageBack
  cropped_front: DocumentImageCroppedFront
  cropped_back: DocumentImageCroppedBack
  face: DocumentImageFace
}
type PhysicalDocumentIDNumber = string | null
type PhysicalDocumentCategory =
  | 'drivers_license'
  | 'id_card'
  | 'passport'
  | 'residence_permit_card'
  | 'resident_card'
  | 'visa'
type IdentityVerificationDocumentISO8601ExpirationDate = string | null
type IdentityVerificationDocumentISO8601IssueDate = string | null
type IdentityVerificationDocumentISO8601DateOfBirth = string | null
type IdentityVerificationDocumentStreet = string
type IdentityVerificationDocumentCity = string
type IdentityVerificationDocumentRegion = string | null
type IdentityVerificationDocumentPostalCode = string | null
type IdentityVerificationDocumentCountryCode = string
type IdentityVerificationDocumentAddressResponse = {
  street: IdentityVerificationDocumentStreet
  city: IdentityVerificationDocumentCity
  region: IdentityVerificationDocumentRegion
  postal_code: IdentityVerificationDocumentPostalCode
  country: IdentityVerificationDocumentCountryCode
} | null
type IdentityVerificationDocumentNameResponse = {
  given_name: GivenNameField
  family_name: FamilyNameField
} | null
type PhysicalDocumentExtractedData = {
  id_number: PhysicalDocumentIDNumber
  category: PhysicalDocumentCategory
  expiration_date: IdentityVerificationDocumentISO8601ExpirationDate
  issue_date: IdentityVerificationDocumentISO8601IssueDate
  issuing_country: GenericCountryCode
  issuing_region: Region
  date_of_birth: IdentityVerificationDocumentISO8601DateOfBirth
  address: IdentityVerificationDocumentAddressResponse
  name?: IdentityVerificationDocumentNameResponse | undefined
} | null
type DocumentAuthenticityMatchCode = 'match' | 'partial_match' | 'no_match' | 'no_data'
type ImageQuality = 'high' | 'medium' | 'low'
type DocumentNameMatchCode = 'match' | 'partial_match' | 'no_match' | 'no_data'
type DocumentDateOfBirthMatchCode = 'match' | 'partial_match' | 'no_match' | 'no_data'
type ExpirationDate = 'not_expired' | 'expired' | 'no_data'
type IssuingCountry = 'match' | 'no_match'
type PhysicalDocumentExtractedDataAnalysis = {
  name: DocumentNameMatchCode
  date_of_birth: DocumentDateOfBirthMatchCode
  expiration_date: ExpirationDate
  issuing_country: IssuingCountry
} | null
type FraudAnalysisDetails = {
  type_supported: {}
  portrait_presence_check: {}
  portrait_details_check: {}
  image_composition_check: {}
  integrity_check: {}
  detail_check: {}
  issue_date_check: {}
} | null
type ImageQualityDetails = { glare_check: {}; dimensions_check: {}; blur_check: {} } | null
type HumanReviewStatus = 'success' | 'failed' | 'no_data'
type HumanReview = { status: HumanReviewStatus } | null
type AAMVAMatchResult = 'match' | 'no_match' | 'no_data'
type AAMVADetailedMatchResult = 'match' | 'partial_match' | 'no_match' | 'no_data'
type AAMVAAnalysis = {
  is_verified: boolean
  id_number: AAMVAMatchResult
  id_issue_date: AAMVAMatchResult
  id_expiration_date: AAMVAMatchResult
  street: AAMVADetailedMatchResult
  city: AAMVAMatchResult
  postal_code: AAMVADetailedMatchResult
  date_of_birth: AAMVAMatchResult
  gender: AAMVAMatchResult
  height: AAMVAMatchResult
  eye_color: AAMVAMatchResult
  first_name: AAMVADetailedMatchResult
  middle_name: AAMVADetailedMatchResult
  last_name: AAMVADetailedMatchResult
} | null
type DocumentAnalysis = {
  authenticity: DocumentAuthenticityMatchCode
  image_quality: ImageQuality
  extracted_data: PhysicalDocumentExtractedDataAnalysis
  fraud_analysis_details: FraudAnalysisDetails
  image_quality_details: ImageQualityDetails
  human_review?: HumanReview | undefined
  aamva_verification: AAMVAAnalysis
}
type DocumentaryVerificationDocument = {
  status: DocumentStatus
  attempt: number
  images: PhysicalDocumentImages
  extracted_data: PhysicalDocumentExtractedData
  analysis: DocumentAnalysis
  redacted_at: TimestampNullable
}
type DocumentaryVerification = {
  status: string
  documents: DocumentaryVerificationDocument[]
} | null
type SelfieCheckStatus = 'success' | 'failed'
type SelfieStatus = 'success' | 'failed'
type SelfieCaptureImageURL = string | null
type SelfieCaptureVideoURL = string | null
type SelfieCapture = { image_url: SelfieCaptureImageURL; video_url: SelfieCaptureVideoURL }
type SelfieAnalysisDocumentComparison = 'match' | 'no_match' | 'no_input'
type SelfieAnalysisLivenessCheck = 'success' | 'failed'
type SelfieAgeCheckStatus = 'match' | 'warning' | 'no_match' | 'no_data'
type SelfieAgeCheck = {
  status: SelfieAgeCheckStatus
  reported_age: number | null
  age_estimate_lower_bound: number
  age_estimate_upper_bound: number
} | null
type SelfieAnalysisFacialAnalysisOutcome = 'success' | 'failed'
type SelfieAnalysisFacialAnalysis = {
  left_eye: SelfieAnalysisFacialAnalysisOutcome
  right_eye: SelfieAnalysisFacialAnalysisOutcome
  left_brow: SelfieAnalysisFacialAnalysisOutcome
  right_brow: SelfieAnalysisFacialAnalysisOutcome
  forehead: SelfieAnalysisFacialAnalysisOutcome
  middle_forehead: SelfieAnalysisFacialAnalysisOutcome
  nose: SelfieAnalysisFacialAnalysisOutcome
  philtrum: SelfieAnalysisFacialAnalysisOutcome
  mouth: SelfieAnalysisFacialAnalysisOutcome
  jaw: SelfieAnalysisFacialAnalysisOutcome
  left_cheek: SelfieAnalysisFacialAnalysisOutcome
  right_cheek: SelfieAnalysisFacialAnalysisOutcome
} | null
type SelfieAnalysis = {
  document_comparison: SelfieAnalysisDocumentComparison
  liveness_check: SelfieAnalysisLivenessCheck
  age_check?: SelfieAgeCheck | undefined
  facial_analysis?: SelfieAnalysisFacialAnalysis | undefined
}
type SelfieCheckSelfie = {
  status: SelfieStatus
  attempt: number
  capture: SelfieCapture
  analysis: SelfieAnalysis
}
type SelfieCheck = { status: SelfieCheckStatus; selfies: SelfieCheckSelfie[] } | null
type MatchSummaryCode = 'match' | 'partial_match' | 'no_match' | 'no_data' | 'no_input'
type POBoxStatus = 'yes' | 'no' | 'no_data'
type AddressPurposeLabel = 'residential' | 'commercial' | 'no_data'
type HiddenMatchSummaryCode = 'match' | 'partial_match' | 'no_match' | 'no_data' | 'no_input'
type KYCCheckDetailsInternationalAddress = {
  building: HiddenMatchSummaryCode
  county: HiddenMatchSummaryCode
  district: HiddenMatchSummaryCode
  house_number: HiddenMatchSummaryCode
  subpremise: HiddenMatchSummaryCode
  thoroughfare: HiddenMatchSummaryCode
} | null
type KYCCheckAddressSummary = {
  summary: MatchSummaryCode
  po_box: POBoxStatus
  type: AddressPurposeLabel
  street?: HiddenMatchSummaryCode | undefined
  city?: HiddenMatchSummaryCode | undefined
  region?: HiddenMatchSummaryCode | undefined
  postal_code?: HiddenMatchSummaryCode | undefined
  international_details?: KYCCheckDetailsInternationalAddress | undefined
}
type KYCCheckNameSummary = {
  summary: MatchSummaryCode
  given_name?: HiddenMatchSummaryCode | undefined
  family_name?: HiddenMatchSummaryCode | undefined
}
type KYCCheckDateOfBirthSummary = {
  summary: MatchSummaryCode
  day?: HiddenMatchSummaryCode | undefined
  month?: HiddenMatchSummaryCode | undefined
  year?: HiddenMatchSummaryCode | undefined
}
type KYCCheckSSAMatchStatus = 'match' | 'no_match' | 'no_data'
type KYCCheckSSAAnalysis = {
  match: KYCCheckSSAMatchStatus
  is_deceased: boolean | null
  name_match?: {} | undefined
  date_of_birth_match?: {} | undefined
  ssn_match?: {} | undefined
  other_match?: {} | undefined
} | null
type KYCCheckIDNumberSummary = { summary: MatchSummaryCode; ssa_verification: KYCCheckSSAAnalysis }
type KYCCheckPhoneSummary = { summary: MatchSummaryCode; area_code: MatchSummaryCode }
type KYCCheckDetails = {
  status: string
  address: KYCCheckAddressSummary
  name: KYCCheckNameSummary
  date_of_birth: KYCCheckDateOfBirthSummary
  id_number: KYCCheckIDNumberSummary
  phone_number: KYCCheckPhoneSummary
} | null
type RiskCheckBehaviorUserInteractionsLabel = 'genuine' | 'neutral' | 'risky' | 'no_data'
type RiskCheckBehaviorFraudRingDetectedLabel = 'yes' | 'no' | 'no_data'
type RiskCheckBehaviorBotDetectedLabel = 'yes' | 'no' | 'no_data'
type RiskLevelWithNoData = 'low' | 'medium' | 'high' | 'no_data'
type RiskCheckBehavior = {
  user_interactions: RiskCheckBehaviorUserInteractionsLabel
  fraud_ring_detected: RiskCheckBehaviorFraudRingDetectedLabel
  bot_detected: RiskCheckBehaviorBotDetectedLabel
  risk_level?: RiskLevelWithNoData | undefined
} | null
type RiskCheckEmailIsDeliverableStatus = 'yes' | 'no' | 'no_data'
type RiskCheckEmailDomainIsFreeProvider = 'yes' | 'no' | 'no_data'
type RiskCheckEmailDomainIsCustom = 'yes' | 'no' | 'no_data'
type RiskCheckEmailDomainIsDisposable = 'yes' | 'no' | 'no_data'
type RiskCheckEmailTopLevelDomainIsSuspicious = 'yes' | 'no' | 'no_data'
type RiskCheckEmailIsEdu = 'yes' | 'no' | 'no_data'
type RiskCheckEmailIncludesDateOfBirth = 'yes' | 'no' | 'no_data'
type RiskCheckEmailName =
  | 'no_input'
  | 'indeterminate'
  | 'no_match'
  | 'partial_match'
  | 'match'
  | 'no_data'
type RiskCheckLinkedService =
  | 'aboutme'
  | 'adobe'
  | 'adult_sites'
  | 'airbnb'
  | 'altbalaji'
  | 'amazon'
  | 'apple'
  | 'archiveorg'
  | 'atlassian'
  | 'bitmoji'
  | 'bodybuilding'
  | 'booking'
  | 'bukalapak'
  | 'codecademy'
  | 'deliveroo'
  | 'diigo'
  | 'discord'
  | 'disneyplus'
  | 'duolingo'
  | 'ebay'
  | 'envato'
  | 'eventbrite'
  | 'evernote'
  | 'facebook'
  | 'firefox'
  | 'flickr'
  | 'flipkart'
  | 'foursquare'
  | 'freelancer'
  | 'gaana'
  | 'giphy'
  | 'github'
  | 'google'
  | 'gravatar'
  | 'hubspot'
  | 'imgur'
  | 'instagram'
  | 'jdid'
  | 'kakao'
  | 'kommo'
  | 'komoot'
  | 'lastfm'
  | 'lazada'
  | 'line'
  | 'linkedin'
  | 'mailru'
  | 'microsoft'
  | 'myspace'
  | 'netflix'
  | 'nike'
  | 'ok'
  | 'patreon'
  | 'pinterest'
  | 'plurk'
  | 'quora'
  | 'qzone'
  | 'rambler'
  | 'rappi'
  | 'replit'
  | 'samsung'
  | 'seoclerks'
  | 'shopclues'
  | 'skype'
  | 'snapchat'
  | 'snapdeal'
  | 'soundcloud'
  | 'spotify'
  | 'starz'
  | 'strava'
  | 'taringa'
  | 'telegram'
  | 'tiki'
  | 'tokopedia'
  | 'treehouse'
  | 'tumblr'
  | 'twitter'
  | 'venmo'
  | 'viber'
  | 'vimeo'
  | 'vivino'
  | 'vkontakte'
  | 'wattpad'
  | 'weibo'
  | 'whatsapp'
  | 'wordpress'
  | 'xing'
  | 'yahoo'
  | 'yandex'
  | 'zalo'
  | 'zoho'
type RiskLevel = 'low' | 'medium' | 'high'
type RiskCheckFactors = string[]
type RiskCheckEmail = {
  is_deliverable: RiskCheckEmailIsDeliverableStatus
  breach_count: number | null
  first_breached_at: ISO8601DateNullable
  last_breached_at: ISO8601DateNullable
  domain_registered_at: ISO8601DateNullable
  domain_is_free_provider: RiskCheckEmailDomainIsFreeProvider
  domain_is_custom: RiskCheckEmailDomainIsCustom
  domain_is_disposable: RiskCheckEmailDomainIsDisposable
  top_level_domain_is_suspicious: RiskCheckEmailTopLevelDomainIsSuspicious
  is_edu: RiskCheckEmailIsEdu
  includes_date_of_birth: RiskCheckEmailIncludesDateOfBirth
  name: RiskCheckEmailName
  linked_services: RiskCheckLinkedService[]
  risk_level?: RiskLevel | undefined
  factors?: RiskCheckFactors | undefined
} | null
type RiskCheckPhone = {
  linked_services: RiskCheckLinkedService[]
  risk_level?: RiskLevel | undefined
  factors?: RiskCheckFactors | undefined
} | null
type ProxyType = 'none_detected' | 'tor' | 'vpn' | 'web_proxy' | 'public_proxy'
type UTCOffset = string | null
type RiskCheckDevice = {
  ip_proxy_type: ProxyType
  ip_spam_list_count: number | null
  ip_timezone_offset: UTCOffset
  risk_level?: RiskLevel | undefined
  factors?: RiskCheckFactors | undefined
}
type SyntheticFraud = { risk_level: RiskLevel } | null
type RiskCheckSyntheticIdentity = {
  score: number
  risk_level?: RiskLevel | undefined
  first_party_synthetic_fraud?: SyntheticFraud | undefined
  third_party_synthetic_fraud?: SyntheticFraud | undefined
} | null
type RiskCheckStolenIdentity = { score: number; risk_level?: RiskLevel | undefined } | null
type RiskCheckIdentityAbuseSignals = {
  synthetic_identity: RiskCheckSyntheticIdentity
  stolen_identity: RiskCheckStolenIdentity
} | null
type RiskCheckNetwork = { risk_level: RiskLevel; factors: RiskCheckFactors } | null
type RiskCheckFacialDuplicate = {
  id: IdentityVerificationID
  similarity: number
  matched_after_completed: boolean
}
type RiskCheckDetails = {
  status: IdentityVerificationStepStatus
  behavior: RiskCheckBehavior
  email: RiskCheckEmail
  phone: RiskCheckPhone
  devices: RiskCheckDevice[]
  identity_abuse_signals: RiskCheckIdentityAbuseSignals
  network?: RiskCheckNetwork | undefined
  facial_duplicates: RiskCheckFacialDuplicate[]
  trust_index_score: number | null
} | null
type VerifySMSDetailsStatus = 'success' | 'failed'
type SMSVerificationStatus = 'pending' | 'success' | 'failed' | 'canceled'
type SMSVerification = {
  status: SMSVerificationStatus
  attempt: number
  phone_number: string | null
  delivery_attempt_count: number
  solve_attempt_count: number
  initially_sent_at: TimestampNullable
  last_sent_at: TimestampNullable
  redacted_at: TimestampNullable
}
type VerifySMSDetails = { status: VerifySMSDetailsStatus; verifications: SMSVerification[] } | null
type WatchlistScreeningIndividualIDNullable = string | null
type BeaconUserIDNullable = string | null
type PlaidUserIDNullable = string | null
type TrustIndexSubscore = { score: number } | null
type TrustIndexSubscores = {
  device_and_connection?: TrustIndexSubscore | undefined
  bank_account_insights?: TrustIndexSubscore | undefined
} | null
type TrustIndex = { score: number; model: string; subscores: TrustIndexSubscores } | null
type FraudAttributes = { [x: string]: { [x: string]: unknown } } | null
type IDVProtectEvent = {
  event_id: string
  timestamp: string
  trust_index: TrustIndex
  fraud_attributes: FraudAttributes
} | null
type IdentityVerificationCreateResponse = {
  id: IdentityVerificationID
  client_user_id: ClientUserID
  created_at: Timestamp
  completed_at: TimestampNullable
  previous_attempt_id: PreviousIdentityVerificationAttemptID
  shareable_url: ShareableURL
  template: IdentityVerificationTemplateReference
  user: IdentityVerificationUserData
  status: IdentityVerificationStatus
  steps: IdentityVerificationStepSummary
  documentary_verification: DocumentaryVerification
  selfie_check: SelfieCheck
  kyc_check: KYCCheckDetails
  risk_check: RiskCheckDetails
  verify_sms: VerifySMSDetails
  watchlist_screening_id: WatchlistScreeningIndividualIDNullable
  beacon_user_id: BeaconUserIDNullable
  user_id: PlaidUserIDNullable
  redacted_at: TimestampNullable
  latest_scored_protect_event?: IDVProtectEvent | undefined
  request_id: RequestID
}
type IdentityVerificationGetRequest = {
  identity_verification_id: IdentityVerificationID
  secret?: APISecret | undefined
  client_id?: APIClientID | undefined
}
type IdentityVerificationGetResponse = {
  id: IdentityVerificationID
  client_user_id: ClientUserID
  created_at: Timestamp
  completed_at: TimestampNullable
  previous_attempt_id: PreviousIdentityVerificationAttemptID
  shareable_url: ShareableURL
  template: IdentityVerificationTemplateReference
  user: IdentityVerificationUserData
  status: IdentityVerificationStatus
  steps: IdentityVerificationStepSummary
  documentary_verification: DocumentaryVerification
  selfie_check: SelfieCheck
  kyc_check: KYCCheckDetails
  risk_check: RiskCheckDetails
  verify_sms: VerifySMSDetails
  watchlist_screening_id: WatchlistScreeningIndividualIDNullable
  beacon_user_id: BeaconUserIDNullable
  user_id: PlaidUserIDNullable
  redacted_at: TimestampNullable
  latest_scored_protect_event?: IDVProtectEvent | undefined
  request_id: RequestID
}
type IdentityVerificationListRequest = {
  secret?: APISecret | undefined
  client_id?: APIClientID | undefined
  template_id: IdentityVerificationTemplateID
  client_user_id?: ClientUserID | undefined
  user_id?: {} | undefined
  cursor?: Cursor | undefined
}
type IdentityVerification = {
  id: IdentityVerificationID
  client_user_id: ClientUserID
  created_at: Timestamp
  completed_at: TimestampNullable
  previous_attempt_id: PreviousIdentityVerificationAttemptID
  shareable_url: ShareableURL
  template: IdentityVerificationTemplateReference
  user: IdentityVerificationUserData
  status: IdentityVerificationStatus
  steps: IdentityVerificationStepSummary
  documentary_verification: DocumentaryVerification
  selfie_check: SelfieCheck
  kyc_check: KYCCheckDetails
  risk_check: RiskCheckDetails
  verify_sms: VerifySMSDetails
  watchlist_screening_id: WatchlistScreeningIndividualIDNullable
  beacon_user_id: BeaconUserIDNullable
  user_id: PlaidUserIDNullable
  redacted_at: TimestampNullable
  latest_scored_protect_event?: IDVProtectEvent | undefined
}
type IdentityVerificationListResponse = {
  identity_verifications: IdentityVerification[]
  next_cursor: Cursor
  request_id: RequestID
}
type Strategy = 'reset' | 'incomplete' | 'infer' | 'custom'
type IdentityVerificationRequestUser = {
  email_address?: EmailAddress | undefined
  phone_number?: IdentityVerificationUserPhoneNumber | undefined
  date_of_birth?: ISO8601Date | undefined
  name?: IdentityVerificationRequestUserName | undefined
  address?: UserAddress | undefined
  id_number?: UserIDNumber | undefined
} | null
type IdentityVerificationRetryRequestStepsObject = {
  verify_sms: boolean
  kyc_check: boolean
  documentary_verification: boolean
  selfie_check: boolean
} | null
type IdentityVerificationRetryRequest = {
  client_user_id: ClientUserID
  template_id: IdentityVerificationTemplateID
  strategy: Strategy
  user?: IdentityVerificationRequestUser | undefined
  steps?: IdentityVerificationRetryRequestStepsObject | undefined
  is_shareable?: (boolean | null) | undefined
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
}
type IdentityVerificationRetryResponse = {
  id: IdentityVerificationID
  client_user_id: ClientUserID
  created_at: Timestamp
  completed_at: TimestampNullable
  previous_attempt_id: PreviousIdentityVerificationAttemptID
  shareable_url: ShareableURL
  template: IdentityVerificationTemplateReference
  user: IdentityVerificationUserData
  status: IdentityVerificationStatus
  steps: IdentityVerificationStepSummary
  documentary_verification: DocumentaryVerification
  selfie_check: SelfieCheck
  kyc_check: KYCCheckDetails
  risk_check: RiskCheckDetails
  verify_sms: VerifySMSDetails
  watchlist_screening_id: WatchlistScreeningIndividualIDNullable
  beacon_user_id: BeaconUserIDNullable
  user_id: PlaidUserIDNullable
  redacted_at: TimestampNullable
  latest_scored_protect_event?: IDVProtectEvent | undefined
  request_id: RequestID
}
type EntityWatchlistProgramID = string
type EntityWatchlistScreeningName = string
type WatchlistScreeningDocumentValueNullable = string | null
type GenericCountryCodeNullable = string | null
type WatchlistScreeningPhoneNumberNullable = string | null
type URLNullable = string | null
type EntityWatchlistSearchTerms = {
  entity_watchlist_program_id: EntityWatchlistProgramID
  legal_name: EntityWatchlistScreeningName
  document_number?: WatchlistScreeningDocumentValueNullable | undefined
  email_address?: EmailAddressNullable | undefined
  country?: GenericCountryCodeNullable | undefined
  phone_number?: WatchlistScreeningPhoneNumberNullable | undefined
  url?: URLNullable | undefined
}
type WatchlistScreeningEntityCreateRequest = {
  search_terms: EntityWatchlistSearchTerms
  client_user_id?: ClientUserID | undefined
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
}
type EntityWatchlistScreeningID = string
type EntityWatchlistScreeningSearchTerms = {
  entity_watchlist_program_id: EntityWatchlistProgramID
  legal_name: EntityWatchlistScreeningName
  document_number: WatchlistScreeningDocumentValueNullable
  email_address: EmailAddressNullable
  country: GenericCountryCodeNullable
  phone_number: WatchlistScreeningPhoneNumberNullable
  url: URLNullable
  version: number
}
type DashboardUserIDNullable = string | null
type WatchlistScreeningStatus = 'rejected' | 'pending_review' | 'cleared'
type ClientUserIDNullable = string | null
type Source = 'dashboard' | 'link' | 'api' | 'system' | 'retro'
type WatchlistScreeningAuditTrail = {
  source: Source
  dashboard_user_id: DashboardUserIDNullable
  timestamp: Timestamp
}
type WatchlistScreeningEntityCreateResponse = {
  id: EntityWatchlistScreeningID
  search_terms: EntityWatchlistScreeningSearchTerms
  assignee: DashboardUserIDNullable
  status: WatchlistScreeningStatus
  client_user_id: ClientUserIDNullable
  audit_trail: WatchlistScreeningAuditTrail
  request_id: RequestID
}
type WatchlistScreeningEntityGetRequest = {
  entity_watchlist_screening_id: EntityWatchlistScreeningID
  secret?: APISecret | undefined
  client_id?: APIClientID | undefined
}
type WatchlistScreeningEntityGetResponse = {
  id: EntityWatchlistScreeningID
  search_terms: EntityWatchlistScreeningSearchTerms
  assignee: DashboardUserIDNullable
  status: WatchlistScreeningStatus
  client_user_id: ClientUserIDNullable
  audit_trail: WatchlistScreeningAuditTrail
  request_id: RequestID
}
type WatchlistScreeningEntityHistoryListRequest = {
  secret?: APISecret | undefined
  client_id?: APIClientID | undefined
  entity_watchlist_screening_id: EntityWatchlistScreeningID
  cursor?: Cursor | undefined
}
type EntityWatchlistScreening = {
  id: EntityWatchlistScreeningID
  search_terms: EntityWatchlistScreeningSearchTerms
  assignee: DashboardUserIDNullable
  status: WatchlistScreeningStatus
  client_user_id: ClientUserIDNullable
  audit_trail: WatchlistScreeningAuditTrail
}
type WatchlistScreeningEntityHistoryListResponse = {
  entity_watchlist_screenings: EntityWatchlistScreening[]
  next_cursor: Cursor
  request_id: RequestID
}
type WatchlistScreeningEntityHitListRequest = {
  secret?: APISecret | undefined
  client_id?: APIClientID | undefined
  entity_watchlist_screening_id: EntityWatchlistScreeningID
  cursor?: Cursor | undefined
}
type EntityWatchlistScreeningHitID = string
type WatchlistScreeningHitStatus = 'confirmed' | 'pending_review' | 'dismissed'
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
  | 'US_SAM'
  | 'US_TEL'
  | 'AU_CON'
  | 'UK_HMC'
type InternalUID = string
type SourceUID = string | null
type EntityScreeningHitAnalysis = {
  documents?: MatchSummaryCode | undefined
  email_addresses?: MatchSummaryCode | undefined
  locations?: MatchSummaryCode | undefined
  names?: MatchSummaryCode | undefined
  phone_numbers?: MatchSummaryCode | undefined
  urls?: MatchSummaryCode | undefined
  search_terms_version: number
}
type MatchSummary = { summary: MatchSummaryCode }
type EntityDocumentType = 'bik' | 'business_number' | 'imo' | 'other' | 'swift' | 'tax_id'
type WatchlistScreeningDocumentValue = string
type EntityDocument = { type: EntityDocumentType; number: WatchlistScreeningDocumentValue }
type EntityScreeningHitDocumentsItems = {
  analysis?: MatchSummary | undefined
  data?: EntityDocument | undefined
}
type EntityScreeningHitEmails = { email_address: EmailAddress }
type EntityScreeningHitEmailsItems = {
  analysis?: MatchSummary | undefined
  data?: EntityScreeningHitEmails | undefined
}
type WatchlistScreeningHitLocations = { full: string; country: GenericCountryCode }
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
type PhoneType = 'phone' | 'fax'
type WatchlistScreeningPhoneNumber = string
type EntityScreeningHitPhoneNumbers = {
  type: PhoneType
  phone_number: WatchlistScreeningPhoneNumber
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
type EntityWatchlistScreeningHit = {
  id: EntityWatchlistScreeningHitID
  review_status: WatchlistScreeningHitStatus
  first_active: Timestamp
  inactive_since: TimestampNullable
  historical_since: TimestampNullable
  list_code: EntityWatchlistCode
  plaid_uid: InternalUID
  source_uid: SourceUID
  sub_programs: string[]
  analysis?: EntityScreeningHitAnalysis | undefined
  data?: EntityScreeningHitData | undefined
}
type WatchlistScreeningEntityHitListResponse = {
  entity_watchlist_screening_hits: EntityWatchlistScreeningHit[]
  next_cursor: Cursor
  request_id: RequestID
}
type WatchlistScreeningEntityListRequest = {
  secret?: APISecret | undefined
  client_id?: APIClientID | undefined
  entity_watchlist_program_id: EntityWatchlistProgramID
  client_user_id?: ClientUserID | undefined
  status?: WatchlistScreeningStatus | undefined
  assignee?: DashboardUserID | undefined
  cursor?: Cursor | undefined
}
type WatchlistScreeningEntityListResponse = {
  entity_watchlist_screenings: EntityWatchlistScreening[]
  next_cursor: Cursor
  request_id: RequestID
}
type WatchlistScreeningEntityProgramGetRequest = {
  entity_watchlist_program_id: EntityWatchlistProgramID
  secret?: APISecret | undefined
  client_id?: APIClientID | undefined
}
type EntityWatchlistScreeningProgramName = string
type ProgramNameSensitivity = 'coarse' | 'balanced' | 'strict' | 'exact'
type ProgramArchived = boolean
type WatchlistScreeningEntityProgramGetResponse = {
  id: EntityWatchlistProgramID
  created_at: Timestamp
  is_rescanning_enabled: boolean
  lists_enabled: EntityWatchlistCode[]
  name: EntityWatchlistScreeningProgramName
  name_sensitivity: ProgramNameSensitivity
  audit_trail: WatchlistScreeningAuditTrail
  is_archived: ProgramArchived
  request_id: RequestID
}
type WatchlistScreeningEntityProgramListRequest = {
  secret?: APISecret | undefined
  client_id?: APIClientID | undefined
  cursor?: Cursor | undefined
}
type EntityWatchlistProgram = {
  id: EntityWatchlistProgramID
  created_at: Timestamp
  is_rescanning_enabled: boolean
  lists_enabled: EntityWatchlistCode[]
  name: EntityWatchlistScreeningProgramName
  name_sensitivity: ProgramNameSensitivity
  audit_trail: WatchlistScreeningAuditTrail
  is_archived: ProgramArchived
}
type WatchlistScreeningEntityProgramListResponse = {
  entity_watchlist_programs: EntityWatchlistProgram[]
  next_cursor: Cursor
  request_id: RequestID
}
type ReviewComment = string | null
type WatchlistScreeningEntityReviewCreateRequest = {
  confirmed_hits: EntityWatchlistScreeningHitID[]
  dismissed_hits: EntityWatchlistScreeningHitID[]
  comment?: ReviewComment | undefined
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  entity_watchlist_screening_id: EntityWatchlistScreeningID
}
type EntityWatchlistScreeningReviewID = string
type WatchlistScreeningEntityReviewCreateResponse = {
  id: EntityWatchlistScreeningReviewID
  confirmed_hits: EntityWatchlistScreeningHitID[]
  dismissed_hits: EntityWatchlistScreeningHitID[]
  comment: ReviewComment
  audit_trail: WatchlistScreeningAuditTrail
  request_id: RequestID
}
type WatchlistScreeningEntityReviewListRequest = {
  secret?: APISecret | undefined
  client_id?: APIClientID | undefined
  entity_watchlist_screening_id: EntityWatchlistScreeningID
  cursor?: Cursor | undefined
}
type EntityWatchlistScreeningReview = {
  id: EntityWatchlistScreeningReviewID
  confirmed_hits: EntityWatchlistScreeningHitID[]
  dismissed_hits: EntityWatchlistScreeningHitID[]
  comment: ReviewComment
  audit_trail: WatchlistScreeningAuditTrail
}
type WatchlistScreeningEntityReviewListResponse = {
  entity_watchlist_screening_reviews: EntityWatchlistScreeningReview[]
  next_cursor: Cursor
  request_id: RequestID
}
type UpdateEntityScreeningRequestSearchTerms = {
  entity_watchlist_program_id: EntityWatchlistProgramID
  legal_name?: EntityWatchlistScreeningName | undefined
  document_number?: WatchlistScreeningDocumentValue | undefined
  email_address?: EmailAddress | undefined
  country?: GenericCountryCode | undefined
  phone_number?: WatchlistScreeningPhoneNumber | undefined
  url?: URL | undefined
} | null
type WatchlistScreeningEntityUpdateRequestResettableField = 'assignee'
type WatchlistScreeningEntityUpdateRequestResettableFieldList =
  | WatchlistScreeningEntityUpdateRequestResettableField[]
  | null
type WatchlistScreeningEntityUpdateRequest = {
  entity_watchlist_screening_id: EntityWatchlistScreeningID
  search_terms?: UpdateEntityScreeningRequestSearchTerms | undefined
  assignee?: DashboardUserID | undefined
  status?: WatchlistScreeningStatus | undefined
  client_user_id?: ClientUserID | undefined
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  reset_fields?: WatchlistScreeningEntityUpdateRequestResettableFieldList | undefined
}
type WatchlistScreeningEntityUpdateResponse = {
  id: EntityWatchlistScreeningID
  search_terms: EntityWatchlistScreeningSearchTerms
  assignee: DashboardUserIDNullable
  status: WatchlistScreeningStatus
  client_user_id: ClientUserIDNullable
  audit_trail: WatchlistScreeningAuditTrail
  request_id: RequestID
}
type WatchlistProgramID = string
type WatchlistScreeningIndividualName = string
type WatchlistScreeningRequestSearchTerms = {
  watchlist_program_id: WatchlistProgramID
  legal_name: WatchlistScreeningIndividualName
  date_of_birth?: ISO8601Date | undefined
  document_number?: WatchlistScreeningDocumentValue | undefined
  country?: GenericCountryCode | undefined
}
type WatchlistScreeningIndividualCreateRequest = {
  search_terms: WatchlistScreeningRequestSearchTerms
  client_user_id?: ClientUserID | undefined
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
}
type WatchlistScreeningIndividualID = string
type WatchlistScreeningSearchTerms = {
  watchlist_program_id: WatchlistProgramID
  legal_name: WatchlistScreeningIndividualName
  date_of_birth: ISO8601DateNullable
  document_number: WatchlistScreeningDocumentValueNullable
  country: GenericCountryCodeNullable
  version: number
}
type WatchlistScreeningIndividualCreateResponse = {
  id: WatchlistScreeningIndividualID
  search_terms: WatchlistScreeningSearchTerms
  assignee: DashboardUserIDNullable
  status: WatchlistScreeningStatus
  client_user_id: ClientUserIDNullable
  audit_trail: WatchlistScreeningAuditTrail
  request_id: RequestID
}
type WatchlistScreeningIndividualGetRequest = {
  watchlist_screening_id: WatchlistScreeningIndividualID
  secret?: APISecret | undefined
  client_id?: APIClientID | undefined
}
type WatchlistScreeningIndividualGetResponse = {
  id: WatchlistScreeningIndividualID
  search_terms: WatchlistScreeningSearchTerms
  assignee: DashboardUserIDNullable
  status: WatchlistScreeningStatus
  client_user_id: ClientUserIDNullable
  audit_trail: WatchlistScreeningAuditTrail
  request_id: RequestID
}
type WatchlistScreeningIndividualHistoryListRequest = {
  secret?: APISecret | undefined
  client_id?: APIClientID | undefined
  watchlist_screening_id: WatchlistScreeningIndividualID
  cursor?: Cursor | undefined
}
type WatchlistScreeningIndividual = {
  id: WatchlistScreeningIndividualID
  search_terms: WatchlistScreeningSearchTerms
  assignee: DashboardUserIDNullable
  status: WatchlistScreeningStatus
  client_user_id: ClientUserIDNullable
  audit_trail: WatchlistScreeningAuditTrail
}
type WatchlistScreeningIndividualHistoryListResponse = {
  watchlist_screenings: WatchlistScreeningIndividual[]
  next_cursor: Cursor
  request_id: RequestID
}
type WatchlistScreeningIndividualHitListRequest = {
  secret?: APISecret | undefined
  client_id?: APIClientID | undefined
  watchlist_screening_id: WatchlistScreeningIndividualID
  cursor?: Cursor | undefined
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
  | 'US_SAM'
  | 'US_SDN'
  | 'US_SSI'
  | 'SG_SOF'
  | 'TR_TWL'
  | 'TR_DFD'
  | 'TR_FOR'
  | 'TR_WMD'
  | 'TR_CMB'
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
  type: WatchlistScreeningDocumentType
  number: WatchlistScreeningDocumentValue
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
type WatchlistScreeningHit = {
  id: WatchlistScreeningHitID
  review_status: WatchlistScreeningHitStatus
  first_active: Timestamp
  inactive_since: TimestampNullable
  historical_since: TimestampNullable
  list_code: IndividualWatchlistCode
  plaid_uid: InternalUID
  source_uid: SourceUID
  sub_programs: string[]
  analysis?: ScreeningHitAnalysis | undefined
  data?: ScreeningHitData | undefined
}
type WatchlistScreeningIndividualHitListResponse = {
  watchlist_screening_hits: WatchlistScreeningHit[]
  next_cursor: Cursor
  request_id: RequestID
}
type WatchlistScreeningIndividualListRequest = {
  secret?: APISecret | undefined
  client_id?: APIClientID | undefined
  watchlist_program_id: WatchlistProgramID
  client_user_id?: ClientUserID | undefined
  status?: WatchlistScreeningStatus | undefined
  assignee?: DashboardUserID | undefined
  cursor?: Cursor | undefined
}
type WatchlistScreeningIndividualListResponse = {
  watchlist_screenings: WatchlistScreeningIndividual[]
  next_cursor: Cursor
  request_id: RequestID
}
type WatchlistScreeningIndividualProgramGetRequest = {
  watchlist_program_id: WatchlistProgramID
  secret?: APISecret | undefined
  client_id?: APIClientID | undefined
}
type IndividualWatchlistScreeningProgramName = string
type WatchlistScreeningIndividualProgramGetResponse = {
  id: WatchlistProgramID
  created_at: Timestamp
  is_rescanning_enabled: boolean
  lists_enabled: IndividualWatchlistCode[]
  name: IndividualWatchlistScreeningProgramName
  name_sensitivity: ProgramNameSensitivity
  audit_trail: WatchlistScreeningAuditTrail
  is_archived: ProgramArchived
  request_id: RequestID
}
type WatchlistScreeningIndividualProgramListRequest = {
  secret?: APISecret | undefined
  client_id?: APIClientID | undefined
  cursor?: Cursor | undefined
}
type IndividualWatchlistProgram = {
  id: WatchlistProgramID
  created_at: Timestamp
  is_rescanning_enabled: boolean
  lists_enabled: IndividualWatchlistCode[]
  name: IndividualWatchlistScreeningProgramName
  name_sensitivity: ProgramNameSensitivity
  audit_trail: WatchlistScreeningAuditTrail
  is_archived: ProgramArchived
}
type WatchlistScreeningIndividualProgramListResponse = {
  watchlist_programs: IndividualWatchlistProgram[]
  next_cursor: Cursor
  request_id: RequestID
}
type WatchlistScreeningIndividualReviewCreateRequest = {
  confirmed_hits: WatchlistScreeningHitID[]
  dismissed_hits: WatchlistScreeningHitID[]
  comment?: ReviewComment | undefined
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  watchlist_screening_id: WatchlistScreeningIndividualID
}
type WatchlistScreeningReviewID = string
type WatchlistScreeningIndividualReviewCreateResponse = {
  id: WatchlistScreeningReviewID
  confirmed_hits: WatchlistScreeningHitID[]
  dismissed_hits: WatchlistScreeningHitID[]
  comment: ReviewComment
  audit_trail: WatchlistScreeningAuditTrail
  request_id: RequestID
}
type WatchlistScreeningIndividualReviewListRequest = {
  secret?: APISecret | undefined
  client_id?: APIClientID | undefined
  watchlist_screening_id: WatchlistScreeningIndividualID
  cursor?: Cursor | undefined
}
type WatchlistScreeningReview = {
  id: WatchlistScreeningReviewID
  confirmed_hits: WatchlistScreeningHitID[]
  dismissed_hits: WatchlistScreeningHitID[]
  comment: ReviewComment
  audit_trail: WatchlistScreeningAuditTrail
}
type WatchlistScreeningIndividualReviewListResponse = {
  watchlist_screening_reviews: WatchlistScreeningReview[]
  next_cursor: Cursor
  request_id: RequestID
}
type UpdateIndividualScreeningRequestSearchTerms = {
  watchlist_program_id?: WatchlistProgramID | undefined
  legal_name?: WatchlistScreeningIndividualName | undefined
  date_of_birth?: ISO8601Date | undefined
  document_number?: WatchlistScreeningDocumentValue | undefined
  country?: GenericCountryCode | undefined
} | null
type WatchlistScreeningIndividualUpdateRequestResettableField = 'assignee'
type WatchlistScreeningIndividualUpdateRequestResettableFieldList =
  | WatchlistScreeningIndividualUpdateRequestResettableField[]
  | null
type WatchlistScreeningIndividualUpdateRequest = {
  watchlist_screening_id: WatchlistScreeningIndividualID
  search_terms?: UpdateIndividualScreeningRequestSearchTerms | undefined
  assignee?: DashboardUserID | undefined
  status?: WatchlistScreeningStatus | undefined
  client_user_id?: ClientUserID | undefined
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  reset_fields?: WatchlistScreeningIndividualUpdateRequestResettableFieldList | undefined
}
type WatchlistScreeningIndividualUpdateResponse = {
  id: WatchlistScreeningIndividualID
  search_terms: WatchlistScreeningSearchTerms
  assignee: DashboardUserIDNullable
  status: WatchlistScreeningStatus
  client_user_id: ClientUserIDNullable
  audit_trail: WatchlistScreeningAuditTrail
  request_id: RequestID
}
type BeaconAccountRiskEvaluateRequestOptions = { account_ids?: string[] | undefined }
type BeaconAccountRiskEvaluateEvaluationReason =
  | 'ONBOARDING'
  | 'NEW_ACCOUNT'
  | 'INFORMATION_CHANGE'
  | 'DORMANT_USER'
  | 'OTHER'
type SignalDevice = {
  ip_address?: (string | null) | undefined
  user_agent?: (string | null) | undefined
}
type BeaconAccountRiskEvaluateRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  access_token?: AccessToken | undefined
  options?: BeaconAccountRiskEvaluateRequestOptions | undefined
  client_user_id?: string | undefined
  client_evaluation_id?: string | undefined
  evaluation_reason?: BeaconAccountRiskEvaluateEvaluationReason | undefined
  device?: SignalDevice | undefined
  evaluate_time?: string | undefined
}
type BeaconAccountRiskEvaluateAccountAttributes = {
  days_since_first_plaid_connection?: (number | null) | undefined
  is_account_closed?: (boolean | null) | undefined
  is_account_frozen_or_restricted?: (boolean | null) | undefined
  total_plaid_connections_count?: (number | null) | undefined
  plaid_connections_count_7d?: (number | null) | undefined
  plaid_connections_count_30d?: (number | null) | undefined
  failed_plaid_non_oauth_authentication_attempts_count_3d?: (number | null) | undefined
  plaid_non_oauth_authentication_attempts_count_3d?: (number | null) | undefined
  failed_plaid_non_oauth_authentication_attempts_count_7d?: (number | null) | undefined
  plaid_non_oauth_authentication_attempts_count_7d?: (number | null) | undefined
  failed_plaid_non_oauth_authentication_attempts_count_30d?: (number | null) | undefined
  plaid_non_oauth_authentication_attempts_count_30d?: (number | null) | undefined
  distinct_ip_addresses_count_3d?: (number | null) | undefined
  distinct_ip_addresses_count_7d?: (number | null) | undefined
  distinct_ip_addresses_count_30d?: (number | null) | undefined
  distinct_ip_addresses_count_90d?: (number | null) | undefined
  distinct_user_agents_count_3d?: (number | null) | undefined
  distinct_user_agents_count_7d?: (number | null) | undefined
  distinct_user_agents_count_30d?: (number | null) | undefined
  distinct_user_agents_count_90d?: (number | null) | undefined
  address_change_count_28d?: (number | null) | undefined
  email_change_count_28d?: (number | null) | undefined
  phone_change_count_28d?: (number | null) | undefined
  address_change_count_90d?: (number | null) | undefined
  email_change_count_90d?: (number | null) | undefined
  phone_change_count_90d?: (number | null) | undefined
  days_since_account_opening?: (number | null) | undefined
  days_since_first_observed_transaction?: (number | null) | undefined
}
type BeaconAccountRiskEvaluateAccount = {
  account_id?: string | undefined
  type?: AccountType | undefined
  subtype?: AccountSubtype | undefined
  attributes?: BeaconAccountRiskEvaluateAccountAttributes | undefined
}
type BeaconAccountRiskEvaluateResponse = {
  request_id: RequestID
  accounts: BeaconAccountRiskEvaluateAccount[]
}
type BeaconProgramID = string
type BeaconUserName = { given_name: GivenNameField; family_name: FamilyNameField }
type Street = string
type City = string
type BeaconUserRequestAddress = {
  street: Street
  street2?: Street2 | undefined
  city: City
  region?: Region | undefined
  postal_code?: PostalCode | undefined
  country: GenericCountryCode
} | null
type BeaconUserPhoneNumber = string | null
type BeaconUserIDNumber = { value: IDNumberValue; type: IDNumberType } | null
type RoutingNumber = string
type BeaconUserRequestDepositoryAccount = { account_number: string; routing_number: RoutingNumber }
type BeaconUserRequestData = {
  date_of_birth?: ISO8601Date | undefined
  name: BeaconUserName
  address?: BeaconUserRequestAddress | undefined
  email_address?: EmailAddress | undefined
  phone_number?: BeaconUserPhoneNumber | undefined
  id_number?: BeaconUserIDNumber | undefined
  ip_address?: IPAddress | undefined
  depository_accounts?: BeaconUserRequestDepositoryAccount[] | undefined
}
type BeaconUserCreateRequest = {
  program_id: BeaconProgramID
  client_user_id: ClientUserID
  user: BeaconUserRequestData
  access_tokens?: (AccessToken[] | null) | undefined
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
}
type BeaconUserID = string
type UpdatedAtTimestamp = string
type BeaconUserStatus = 'rejected' | 'pending_review' | 'cleared'
type BeaconUserAddress = {
  street: Street
  street2: Street2
  city: City
  region: Region
  postal_code: PostalCode
  country: GenericCountryCode
}
type AccountMask = string
type BeaconUserDepositoryAccount = {
  account_mask: AccountMask
  routing_number: RoutingNumber
  added_at: Timestamp
}
type BeaconUserData = {
  date_of_birth: ISO8601Date
  name: BeaconUserName
  address: BeaconUserAddress
  email_address: EmailAddressNullable
  phone_number: BeaconUserPhoneNumber
  id_number: BeaconUserIDNumber
  ip_address: IPAddress
  depository_accounts: BeaconUserDepositoryAccount[]
}
type BeaconAuditTrailSource = 'dashboard' | 'api' | 'system' | 'bulk_import'
type BeaconAuditTrail = {
  source: BeaconAuditTrailSource
  dashboard_user_id: DashboardUserIDNullable
  timestamp: Timestamp
}
type BeaconUserCreateResponse = {
  item_ids: string[]
  id: BeaconUserID
  version: number
  created_at: Timestamp
  updated_at: UpdatedAtTimestamp
  status: BeaconUserStatus
  program_id: BeaconProgramID
  client_user_id: ClientUserID
  user: BeaconUserData
  audit_trail: BeaconAuditTrail
  request_id: RequestID
}
type BeaconUserGetRequest = {
  beacon_user_id: BeaconUserID
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
}
type BeaconUserGetResponse = {
  item_ids: string[]
  id: BeaconUserID
  version: number
  created_at: Timestamp
  updated_at: UpdatedAtTimestamp
  status: BeaconUserStatus
  program_id: BeaconProgramID
  client_user_id: ClientUserID
  user: BeaconUserData
  audit_trail: BeaconAuditTrail
  request_id: RequestID
}
type BeaconUserReviewRequest = {
  beacon_user_id: BeaconUserID
  status: BeaconUserStatus
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
}
type BeaconReportCreateType =
  | 'first_party'
  | 'stolen'
  | 'synthetic'
  | 'account_takeover'
  | 'data_breach'
  | 'unknown'
type ISOCurrencyCode = 'USD'
type FraudAmount = { iso_currency_code: ISOCurrencyCode; value: number } | null
type BeaconReportCreateRequest = {
  beacon_user_id: BeaconUserID
  type: BeaconReportCreateType
  fraud_date: ISO8601Date
  fraud_amount?: FraudAmount | undefined
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
}
type BeaconReportID = string
type BeaconReportType =
  | 'first_party'
  | 'stolen'
  | 'synthetic'
  | 'account_takeover'
  | 'data_breach'
  | 'unknown'
type BeaconReportCreateResponse = {
  id: BeaconReportID
  beacon_user_id: BeaconUserID
  created_at: Timestamp
  type: BeaconReportType
  fraud_date: ISO8601DateNullable
  event_date: ISO8601Date
  fraud_amount: FraudAmount
  audit_trail: BeaconAuditTrail
  request_id: RequestID
}
type BeaconReportListRequest = {
  beacon_user_id: BeaconUserID
  cursor?: Cursor | undefined
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
}
type BeaconReport = {
  id: BeaconReportID
  beacon_user_id: BeaconUserID
  created_at: Timestamp
  type: BeaconReportType
  fraud_date: ISO8601DateNullable
  event_date: ISO8601Date
  fraud_amount: FraudAmount
  audit_trail: BeaconAuditTrail
}
type BeaconReportListResponse = {
  beacon_reports: BeaconReport[]
  next_cursor: Cursor
  request_id: RequestID
}
type BeaconReportSyndicationListRequest = {
  beacon_user_id: BeaconUserID
  cursor?: Cursor | undefined
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
}
type BeaconReportSyndicationID = string
type BeaconReportIDNullable = string | null
type BeaconReportSyndicationOriginalReport = {
  id: BeaconReportIDNullable
  created_at: Timestamp
  type: BeaconReportType
  fraud_date: ISO8601DateNullable
  event_date: ISO8601Date
}
type BeaconMatchSummaryCode = 'match' | 'partial_match' | 'no_match' | 'no_data'
type BeaconSyndicatedReportDepositoryAccountMatchAnalysis = {
  account_mask: AccountMask
  routing_number: RoutingNumber
  match_status: BeaconMatchSummaryCode
}
type BeaconReportSyndicationAnalysis = {
  address: BeaconMatchSummaryCode
  date_of_birth: BeaconMatchSummaryCode
  email_address: BeaconMatchSummaryCode
  name: BeaconMatchSummaryCode
  id_number: BeaconMatchSummaryCode
  ip_address: BeaconMatchSummaryCode
  phone_number: BeaconMatchSummaryCode
  depository_accounts: BeaconSyndicatedReportDepositoryAccountMatchAnalysis[]
}
type BeaconReportSyndication = {
  id: BeaconReportSyndicationID
  beacon_user_id: BeaconUserID
  report: BeaconReportSyndicationOriginalReport
  analysis: BeaconReportSyndicationAnalysis
}
type BeaconReportSyndicationListResponse = {
  beacon_report_syndications: BeaconReportSyndication[]
  next_cursor: Cursor
  request_id: RequestID
}
type BeaconReportGetRequest = {
  beacon_report_id: BeaconReportID
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
}
type BeaconReportGetResponse = {
  id: BeaconReportID
  beacon_user_id: BeaconUserID
  created_at: Timestamp
  type: BeaconReportType
  fraud_date: ISO8601DateNullable
  event_date: ISO8601Date
  fraud_amount: FraudAmount
  audit_trail: BeaconAuditTrail
  request_id: RequestID
}
type BeaconReportSyndicationGetRequest = {
  beacon_report_syndication_id: BeaconReportSyndicationID
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
}
type BeaconReportSyndicationGetResponse = {
  id: BeaconReportSyndicationID
  beacon_user_id: BeaconUserID
  report: BeaconReportSyndicationOriginalReport
  analysis: BeaconReportSyndicationAnalysis
  request_id: RequestID
}
type BeaconUserNameNullable = { given_name: GivenNameField; family_name: FamilyNameField } | null
type BeaconUserRequestAddressNullable = {
  street: Street
  street2?: Street2 | undefined
  city: City
  region?: Region | undefined
  postal_code?: PostalCode | undefined
  country: GenericCountryCode
} | null
type BeaconUserUpdateRequestData = {
  date_of_birth?: ISO8601Date | undefined
  name?: BeaconUserNameNullable | undefined
  address?: BeaconUserRequestAddressNullable | undefined
  email_address?: EmailAddress | undefined
  phone_number?: BeaconUserPhoneNumber | undefined
  id_number?: BeaconUserIDNumber | undefined
  ip_address?: IPAddress | undefined
  depository_accounts?: BeaconUserRequestDepositoryAccount[] | undefined
} | null
type BeaconUserUpdateRequest = {
  beacon_user_id: BeaconUserID
  user?: BeaconUserUpdateRequestData | undefined
  access_tokens?: (AccessToken[] | null) | undefined
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
}
type BeaconUserUpdateResponse = {
  item_ids: string[]
  id: BeaconUserID
  version: number
  created_at: Timestamp
  updated_at: UpdatedAtTimestamp
  status: BeaconUserStatus
  program_id: BeaconProgramID
  client_user_id: ClientUserID
  user: BeaconUserData
  audit_trail: BeaconAuditTrail
  request_id: RequestID
}
type BeaconDuplicateID = string
type BeaconDuplicateGetRequest = {
  beacon_duplicate_id: BeaconDuplicateID
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
}
type BeaconUserRevision = { id: BeaconUserID; version: number }
type BeaconMatchSummaryAnalysis = {
  address: BeaconMatchSummaryCode
  date_of_birth: BeaconMatchSummaryCode
  email_address: BeaconMatchSummaryCode
  name: BeaconMatchSummaryCode
  id_number: BeaconMatchSummaryCode
  ip_address: BeaconMatchSummaryCode
  phone_number: BeaconMatchSummaryCode
}
type BeaconDuplicateGetResponse = {
  id: BeaconDuplicateID
  beacon_user1: BeaconUserRevision
  beacon_user2: BeaconUserRevision
  analysis: BeaconMatchSummaryAnalysis
  request_id: RequestID
}
type IdentityVerificationAutofillCreateRequest = {
  identity_verification_id: IdentityVerificationID
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
}
type IdentityVerificationAutofillStatus = 'success' | 'failed'
type IdentityVerificationAutofillAddress = {
  street: Street
  street2: Street2
  city: CityNullable
  region: Region
  postal_code: PostalCode
  country: GenericCountryCode
  po_box: POBoxStatus
  type: AddressPurposeLabel
} | null
type IdentityVerificationAutofillUserData = {
  name: IdentityVerificationResponseUserName
  address: IdentityVerificationAutofillAddress
  id_number: UserIDNumber
} | null
type IdentityVerificationAutofillCreateResponse = {
  status: IdentityVerificationAutofillStatus
  user: IdentityVerificationAutofillUserData
  request_id: RequestID
}
type BeaconUserHistoryListRequest = {
  beacon_user_id: BeaconUserID
  cursor?: Cursor | undefined
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
}
type BeaconUser = {
  item_ids: string[]
  id: BeaconUserID
  version: number
  created_at: Timestamp
  updated_at: UpdatedAtTimestamp
  status: BeaconUserStatus
  program_id: BeaconProgramID
  client_user_id: ClientUserID
  user: BeaconUserData
  audit_trail: BeaconAuditTrail
}
type BeaconUserHistoryListResponse = {
  beacon_users: BeaconUser[]
  next_cursor: Cursor
  request_id: RequestID
}
type BeaconUserAccountInsightsGetRequest = {
  beacon_user_id: BeaconUserID
  access_token: AccessToken
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
}
type BeaconAccountRiskAttributes = {
  days_since_first_plaid_connection: number | null
  is_account_closed: boolean | null
  is_account_frozen_or_restricted: boolean | null
  total_plaid_connections_count: number | null
  plaid_connections_count_7d: number | null
  plaid_connections_count_30d: number | null
  failed_plaid_non_oauth_authentication_attempts_count_3d: number | null
  plaid_non_oauth_authentication_attempts_count_3d: number | null
  failed_plaid_non_oauth_authentication_attempts_count_7d: number | null
  plaid_non_oauth_authentication_attempts_count_7d: number | null
  failed_plaid_non_oauth_authentication_attempts_count_30d: number | null
  plaid_non_oauth_authentication_attempts_count_30d: number | null
  distinct_ip_addresses_count_3d: number | null
  distinct_ip_addresses_count_7d: number | null
  distinct_ip_addresses_count_30d: number | null
  distinct_ip_addresses_count_90d: number | null
  distinct_user_agents_count_3d: number | null
  distinct_user_agents_count_7d: number | null
  distinct_user_agents_count_30d: number | null
  distinct_user_agents_count_90d: number | null
  address_change_count_28d: number | null
  email_change_count_28d: number | null
  phone_change_count_28d: number | null
  address_change_count_90d: number | null
  email_change_count_90d: number | null
  phone_change_count_90d: number | null
  days_since_account_opening: number | null
  days_since_first_observed_transaction: number | null
}
type BeaconBankAccountInsights = {
  account_id: string
  type: AccountType
  subtype: AccountSubtype
  attributes: BeaconAccountRiskAttributes
}
type BeaconBankAccounts = { item_id: string; accounts: BeaconBankAccountInsights[] }
type BeaconUserAccountInsightsGetResponse = {
  beacon_user_id: BeaconUserID
  created_at: Timestamp
  updated_at: UpdatedAtTimestamp
  bank_account_insights: BeaconBankAccounts
  request_id: RequestID
}
type ProtectUserInsightsGetRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  user_id?: string | undefined
  client_user_id?: string | undefined
}
type LatestScoredEvent = {
  event_id: string
  timestamp: string
  event_type?: string | undefined
  trust_index: TrustIndex
  fraud_attributes: FraudAttributes
} | null
type ProtectIncidentAmount = {
  iso_currency_code?: (string | null) | undefined
  value: number
} | null
type ProtectIncidentEventResponse = {
  protect_event_id?: (string | null) | undefined
  link_session_id?: (string | null) | undefined
  idv_session_id?: (string | null) | undefined
  signal_client_transaction_id?: (string | null) | undefined
  internal_reference?: (string | null) | undefined
  time?: (string | null) | undefined
  amount?: ProtectIncidentAmount | undefined
  item_id?: (string | null) | undefined
} | null
type ProtectReportConfidence = 'CONFIRMED' | 'SUSPECTED'
type ProtectReportType =
  | 'USER_ACCOUNT_TAKEOVER'
  | 'FALSE_IDENTITY'
  | 'STOLEN_IDENTITY'
  | 'SYNTHETIC_IDENTITY'
  | 'MULTIPLE_USER_ACCOUNTS'
  | 'SCAM_VICTIM'
  | 'BANK_ACCOUNT_TAKEOVER'
  | 'BANK_CONNECTION_REVOKED'
  | 'CARD_TESTING'
  | 'UNAUTHORIZED_TRANSACTION'
  | 'CARD_CHARGEBACK'
  | 'ACH_RETURN'
  | 'DISPUTE'
  | 'FIRST_PARTY_FRAUD'
  | 'MISSED_PAYMENT'
  | 'LOAN_STACKING'
  | 'MONEY_LAUNDERING'
  | 'NO_FRAUD'
  | 'OTHER'
type ProtectReportSource =
  | 'INTERNAL_REVIEW'
  | 'USER_SELF_REPORTED'
  | 'BANK_FEEDBACK'
  | 'NETWORK_FEEDBACK'
  | 'AUTOMATED_SYSTEM'
  | 'THIRD_PARTY_ALERT'
  | 'OTHER'
type ProtectBankAccount = {
  account_id?: (string | null) | undefined
  account_number?: (string | null) | undefined
  routing_number?: (string | null) | undefined
} | null
type ProtectReport = {
  report_id: string
  incident_event: ProtectIncidentEventResponse
  report_confidence: ProtectReportConfidence
  report_type: ProtectReportType
  report_source: ProtectReportSource
  bank_account: ProtectBankAccount
  ach_return_code: string | null
  notes: string | null
  created_at: string
}
type ProtectUserInsightsGetResponse = {
  user_id: string
  latest_scored_event: LatestScoredEvent
  reports?: ProtectReport[] | undefined
  request_id: RequestID
}
type ProtectIncidentEvent = {
  protect_event_id?: (string | null) | undefined
  link_session_id?: (string | null) | undefined
  idv_session_id?: (string | null) | undefined
  signal_client_transaction_id?: (string | null) | undefined
  internal_reference?: (string | null) | undefined
  time?: (string | null) | undefined
  amount?: ProtectIncidentAmount | undefined
  access_token?: {} | undefined
  item_id?: (string | null) | undefined
} | null
type ProtectReportCreateRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  user_id?: (string | null) | undefined
  client_user_id?: (string | null) | undefined
  incident_event?: ProtectIncidentEvent | undefined
  report_confidence: ProtectReportConfidence
  report_type: ProtectReportType
  report_source: ProtectReportSource
  bank_account?: ProtectBankAccount | undefined
  ach_return_code?: (string | null) | undefined
  notes?: (string | null) | undefined
}
type ProtectReportCreateResponse = { report_id: string; request_id: RequestID }
type ProtectUser = { user_id?: string | undefined; client_user_id?: string | undefined }
type CashAdvanceType = 'FIRST' | 'REPEAT'
type CashAdvanceDecisionOutcome = 'APPROVED' | 'DECLINED'
type CashAdvanceInfo = {
  amount_approved: { iso_currency_code?: string | undefined; value: number }
  amount_due?: { iso_currency_code?: string | undefined; value: number } | undefined
  due_date?: string | undefined
} | null
type ProtectCashAdvanceDecisionCreateRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  user: ProtectUser
  client_advance_id?: (string | null) | undefined
  advance_type?: CashAdvanceType | undefined
  previous_advance_count?: (number | null) | undefined
  decision_time: string
  decision: CashAdvanceDecisionOutcome
  is_taken?: (boolean | null) | undefined
  cash_advance?: CashAdvanceInfo | undefined
}
type ProtectCashAdvanceDecisionCreateResponse = { request_id: RequestID }
type CashAdvanceRepaymentStatus = 'REPAID' | 'PARTIAL_PAYMENT' | 'UNPAID'
type CashAdvanceRepayment = {
  amount_paid?: { iso_currency_code?: string | undefined; value: number } | undefined
  amount_due: { iso_currency_code?: string | undefined; value: number }
  due_date: string
}
type ProtectCashAdvanceRepaymentCreateRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  user: ProtectUser
  client_advance_id: string
  status: CashAdvanceRepaymentStatus
  repayment_time?: (string | null) | undefined
  repayment: CashAdvanceRepayment
}
type ProtectCashAdvanceRepaymentCreateResponse = { request_id: RequestID }
type CashAdvanceFeedbackType = 'DECISION' | 'REPAYMENT'
type ProtectCashAdvanceFeedbackUploadRequest = {
  feedback_type: CashAdvanceFeedbackType
  file: File
}
type ProtectCashAdvanceFeedbackUploadResponse = { request_id: RequestID; upload_id: string }
type ProtectLinkModelInputs = {
  link_session_id: string
  require_extracted_data?: boolean | undefined
} | null
type ProtectDeviceModelInputs = { device_session_id: string } | null
type ProtectModelInputs = {
  link?: ProtectLinkModelInputs | undefined
  device?: ProtectDeviceModelInputs | undefined
} | null
type ProtectComputeRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  model: string
  user: ProtectUser
  model_inputs?: ProtectModelInputs | undefined
}
type ProtectComputeSubscores = {
  cash_advance_bucket_0_25?: (number | null) | undefined
  cash_advance_bucket_25_50?: (number | null) | undefined
  cash_advance_bucket_50_100?: (number | null) | undefined
  cash_advance_bucket_100_200?: (number | null) | undefined
  cash_advance_bucket_200_300?: (number | null) | undefined
  cash_advance_bucket_300_400?: (number | null) | undefined
  cash_advance_bucket_400_500?: (number | null) | undefined
} | null
type ProtectComputeResponse = {
  score?: (number | null) | undefined
  model?: string | undefined
  attributes?: FraudAttributes | undefined
  subscores?: ProtectComputeSubscores | undefined
  timestamp?: (string | null) | undefined
  request_id: RequestID
}
type ProtectAppVisitEvent = { [x: string]: unknown } | null
type ProtectUserSignInEvent = { [x: string]: unknown } | null
type ProtectUserSignUpEvent = { [x: string]: unknown } | null
type ProtectEvent = {
  timestamp: string
  device_session_id?: string | undefined
  app_visit?: ProtectAppVisitEvent | undefined
  user_sign_in?: ProtectUserSignInEvent | undefined
  user_sign_up?: ProtectUserSignUpEvent | undefined
} | null
type ProtectEventSendRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  timestamp?: string | undefined
  event: ProtectEvent
  device_session_id?: string | undefined
  request_trust_index?: boolean | undefined
}
type ProtectEventSendResponse = {
  event_id: string
  trust_index?: TrustIndex | undefined
  fraud_attributes?: FraudAttributes | undefined
  request_id: RequestID
}
type ProtectEventGetRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  event_id: string
}
type ProtectEventGetResponse = {
  event_id: string
  timestamp: string
  event_type?: string | undefined
  trust_index?: TrustIndex | undefined
  fraud_attributes?: FraudAttributes | undefined
  request_id: RequestID
}
type BusinessVerificationID = string
type BusinessVerificationGetRequest = {
  business_verification_id: BusinessVerificationID
  secret?: APISecret | undefined
  client_id?: APIClientID | undefined
}
type BusinessVerificationStatusOverall = 'active' | 'success' | 'failed'
type BusinessVerificationRequestedChecks = {
  include_website_analysis: boolean
  include_industry_classification: boolean
}
type BusinessNameNullable = string | null
type BusinessName = string
type ResponseBusinessAddress = {
  street: StreetNullable
  street2: Street2
  city: CityNullable
  region: Region
  postal_code: PostalCode
  country: GenericCountryCode
}
type BusinessVerificationPhoneNumberNullable = string | null
type BusinessOfficer = { name: string }
type BusinessSearchTerms = {
  name: BusinessNameNullable
  alternative_names: BusinessName[]
  address: ResponseBusinessAddress
  website: URLNullable
  phone_number: BusinessVerificationPhoneNumberNullable
  email_address: EmailAddressNullable
  tin: string | null
  officers: BusinessOfficer[]
}
type BusinessVerificationStatusBusinessVerificationCheck = 'active' | 'success' | 'failed'
type BusinessFieldMatchSummary = { summary: MatchSummaryCode }
type BusinessAddressValidationLevel = 'full' | 'partial' | 'invalid' | null
type BusinessStandardizedAddress = {
  street: StreetNullable
  street2: Street2
  city: CityNullable
  region: Region
  postal_code: PostalCode
  country: GenericCountryCode
  lat: number | null
  lon: number | null
} | null
type BusinessResidentialIndicator = 'residential' | 'commercial' | null
type BusinessDeliveryType =
  | 'street'
  | 'firm'
  | 'general_delivery'
  | 'high_rise'
  | 'post_office'
  | 'rural_route'
  | null
type BusinessAddressDeliverabilityNullable = {
  is_deliverable: boolean | null
  is_cmra: boolean | null
  residential_indicator: BusinessResidentialIndicator
  delivery_type: BusinessDeliveryType
} | null
type BusinessAddressValidation = {
  level: BusinessAddressValidationLevel
  standardized_address: BusinessStandardizedAddress
  deliverability: BusinessAddressDeliverabilityNullable
} | null
type BusinessAddressMatch = { summary: MatchSummaryCode; validation: BusinessAddressValidation }
type BusinessTINType = 'ein' | 'ssn' | 'unknown' | null
type BusinessTINMatch = { summary: MatchSummaryCode; tin_type: BusinessTINType }
type BusinessEntityType =
  | 'sole_proprietorship'
  | 'general_partnership'
  | 'llc'
  | 'llp'
  | 'lllp'
  | 'lp'
  | 'c_corporation'
  | 's_corporation'
  | 'b_corporation'
  | 'nonprofit'
  | 'cooperative'
  | 'trust'
  | 'professional_association'
  | 'professional_corporation'
  | 'trade_name'
  | 'bank'
  | 'credit_union'
  | 'insurance'
  | 'other'
  | 'unknown'
type BusinessAddressDeliverability = {
  is_deliverable: boolean | null
  is_cmra: boolean | null
  residential_indicator: BusinessResidentialIndicator
  delivery_type: BusinessDeliveryType
}
type BusinessEntitySource = 'secretary_of_state' | 'online'
type BusinessDetailAddress = {
  is_primary: boolean
  street: StreetNullable
  street2: Street2
  city: CityNullable
  region: Region
  postal_code: PostalCode
  country: GenericCountryCode
  lat: number | null
  lon: number | null
  deliverability: BusinessAddressDeliverability
  sources: BusinessEntitySource[]
}
type BusinessPhoneNumber = { number: string | null }
type BusinessEmailAddress = { email_address: string | null }
type BusinessWebsite = { url: string | null }
type BusinessDetailOfficer = {
  name: string | null
  titles: string[]
  jurisdictions: string[]
  sources: BusinessEntitySource[]
}
type BusinessRegistrationType = 'domestic' | 'foreign' | 'unknown' | null
type BusinessRegistrationStatus = 'active' | 'inactive' | 'unknown' | null
type BusinessRegistrationAddressNullable = {
  street: StreetNullable
  street2: Street2
  city: CityNullable
  region: Region
  postal_code: PostalCode
  country: GenericCountryCode
  lat: number | null
  lon: number | null
  deliverability: BusinessAddressDeliverability
} | null
type BusinessRegisteredAgent = {
  name: string | null
  address: BusinessRegistrationAddressNullable
} | null
type BusinessRegistrationOfficer = { name: string | null; titles: string[] }
type BusinessRegistration = {
  name: string | null
  file_number: string | null
  jurisdiction: string | null
  type: BusinessRegistrationType
  status: BusinessRegistrationStatus
  standing: string | null
  issue_date: ISO8601DateNullable
  inactive_date: ISO8601DateNullable
  dissolution_date: ISO8601DateNullable
  address: BusinessRegistrationAddressNullable
  registered_agent: BusinessRegisteredAgent
  officers: BusinessRegistrationOfficer[]
}
type BusinessIndustryConfidence = 'low' | 'medium' | 'high' | null
type BusinessMerchantCategoryCode = { code: string; description: string | null }
type BusinessStandardIndustrialClassificationCode = { code: string; description: string | null }
type IndustryClassification = {
  code: string
  description: string
  confidence: BusinessIndustryConfidence
  mcc_codes: BusinessMerchantCategoryCode[]
  sic_codes: BusinessStandardIndustrialClassificationCode[]
} | null
type BusinessIndustry = { classification: IndustryClassification }
type BusinessSECRegistration = {
  cik: string | null
  tickers: string[]
  exchanges: string[]
  edgar_url: string | null
}
type BusinessDetails = {
  name: string | null
  alternative_names: string[]
  entity_type: BusinessEntityType
  incorporation_date: ISO8601DateNullable
  incorporation_jurisdiction: string | null
  addresses: BusinessDetailAddress[]
  phone_numbers: BusinessPhoneNumber[]
  email_addresses: BusinessEmailAddress[]
  websites: BusinessWebsite[]
  officers: BusinessDetailOfficer[]
  registrations: BusinessRegistration[]
  industry: BusinessIndustry
  sec_registrations: BusinessSECRegistration[]
}
type BusinessVerificationCheck = {
  status: BusinessVerificationStatusBusinessVerificationCheck
  score: number | null
  name: BusinessFieldMatchSummary
  address: BusinessAddressMatch
  website: BusinessFieldMatchSummary
  tin: BusinessTINMatch
  officers: BusinessFieldMatchSummary
  registered_agent: BusinessFieldMatchSummary
  business_details: BusinessDetails
} | null
type BusinessVerificationStatusRiskCheck = 'active' | 'success' | 'failed'
type BusinessRiskCheck = {
  status: BusinessVerificationStatusRiskCheck
  score: number | null
} | null
type BusinessVerificationStatusWebPresenceCheck = 'active' | 'success' | 'failed' | 'not_applicable'
type BusinessCheckBooleanStatus = 'yes' | 'no' | 'no_data'
type BusinessWebsiteBuildStatus = 'coming_soon' | 'active' | 'inactive' | null
type BusinessWhoisRecord = {
  domain_created_at: TimestampNullable
  domain_updated_at: TimestampNullable
  domain_expires_at: TimestampNullable
  registrar: string | null
}
type BusinessWebsiteSSL = { is_valid: BusinessCheckBooleanStatus }
type BusinessWebsiteAnalysis = {
  is_parked: BusinessCheckBooleanStatus
  email_is_deliverable: BusinessCheckBooleanStatus
  website_build_status: BusinessWebsiteBuildStatus
  whois_record: BusinessWhoisRecord
  ssl: BusinessWebsiteSSL
} | null
type BusinessDigitalPresenceCheck = {
  status: BusinessVerificationStatusWebPresenceCheck
  score: number | null
  address: BusinessFieldMatchSummary
  phone_number: BusinessFieldMatchSummary
  email_address: BusinessFieldMatchSummary
  website: BusinessFieldMatchSummary
  website_analysis: BusinessWebsiteAnalysis
} | null
type BusinessVerificationShareableURL = string | null
type BusinessVerificationGetResponse = {
  id: BusinessVerificationID
  client_user_id: ClientUserID
  created_at: Timestamp
  completed_at: TimestampNullable
  redacted_at: TimestampNullable
  status: BusinessVerificationStatusOverall
  requested_checks: BusinessVerificationRequestedChecks
  search_terms: BusinessSearchTerms
  business_verification: BusinessVerificationCheck
  risk_check: BusinessRiskCheck
  digital_presence_check: BusinessDigitalPresenceCheck
  request_id: RequestID
  shareable_url: BusinessVerificationShareableURL
}
type RequestBusinessAddress = {
  street: Street
  street2?: Street2 | undefined
  city: City
  region?: Region | undefined
  postal_code?: PostalCode | undefined
  country: GenericCountryCode
}
type BusinessVerificationPhoneNumber = string
type BusinessVerificationCreateRequestBusiness = {
  name: BusinessName
  alternative_name?: BusinessNameNullable | undefined
  address: RequestBusinessAddress
  website?: URL | undefined
  phone_number?: BusinessVerificationPhoneNumber | undefined
  email_address?: EmailAddress | undefined
  tin?: (string | null) | undefined
  officers?: (BusinessOfficer[] | null) | undefined
}
type BusinessVerificationCreateRequestOptions = {
  include_website_analysis?: (boolean | null) | undefined
  include_industry_classification?: (boolean | null) | undefined
} | null
type BusinessVerificationCreateRequest = {
  client_user_id: ClientUserID
  business: BusinessVerificationCreateRequestBusiness
  options?: BusinessVerificationCreateRequestOptions | undefined
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
}
type BusinessVerificationCreateResponse = {
  id: BusinessVerificationID
  client_user_id: ClientUserID
  created_at: Timestamp
  completed_at: TimestampNullable
  redacted_at: TimestampNullable
  status: BusinessVerificationStatusOverall
  requested_checks: BusinessVerificationRequestedChecks
  search_terms: BusinessSearchTerms
  business_verification: BusinessVerificationCheck
  risk_check: BusinessRiskCheck
  digital_presence_check: BusinessDigitalPresenceCheck
  request_id: RequestID
  shareable_url: BusinessVerificationShareableURL
}
type ProcessorToken = string
type ProcessorAuthGetRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  processor_token: ProcessorToken
}
type NumbersACHNullable = {
  account_id: string
  account: string | null
  is_tokenized_account_number: boolean
  routing: string | null
  wire_routing: string | null
  can_transfer_in?: (boolean | null) | undefined
  can_transfer_out?: (boolean | null) | undefined
}
type NumbersEFTNullable = {
  account_id: string
  account: string | null
  institution: string
  branch: string
}
type NumbersInternationalNullable = { account_id: string; iban: string | null; bic: string | null }
type NumbersBACSNullable = { account_id: string; account: string; sort_code: string }
type ProcessorNumber = {
  ach: NumbersACHNullable
  eft: NumbersEFTNullable
  international: NumbersInternationalNullable
  bacs: NumbersBACSNullable
}
type ProcessorAuthGetResponse = {
  request_id: RequestID
  numbers: ProcessorNumber
  account: AccountBase
}
type ProcessorAccountGetRequest = {
  client_id?: APIClientID | undefined
  processor_token: ProcessorToken
  secret?: APISecret | undefined
}
type ProcessorAccountGetResponse = {
  account: AccountBase
  institution_id: string
  request_id: RequestID
}
type ProcessorInvestmentsHoldingsGetRequest = {
  client_id?: APIClientID | undefined
  processor_token: ProcessorToken
  secret?: APISecret | undefined
}
type InvestmentAccountBalance = {
  available: number | null
  current: number | null
  limit: number | null
  iso_currency_code: string | null
  unofficial_currency_code: string | null
  last_updated_datetime?: (string | null) | undefined
  margin_loan_amount: number | null
}
type InvestmentAccount = {
  account_id: string
  balances: InvestmentAccountBalance
  mask: string | null
  name: string
  official_name: string | null
  type: AccountType
  subtype: AccountSubtype
  verification_status?:
    | 'automatically_verified'
    | 'pending_automatic_verification'
    | 'pending_manual_verification'
    | 'unsent'
    | 'manually_verified'
    | 'verification_expired'
    | 'verification_failed'
    | 'database_matched'
    | 'database_insights_pass'
    | 'database_insights_pass_with_caution'
    | 'database_insights_fail'
    | undefined
  verification_name?: string | undefined
  verification_insights?:
    | {
        name_match_score?: (number | null) | undefined
        network_status?:
          | { has_numbers_match: boolean; is_numbers_match_verified: boolean }
          | undefined
        previous_returns?: { has_previous_administrative_return: boolean } | undefined
        account_number_format: AccountVerificationInsightsAccountNumberFormat
      }
    | undefined
  persistent_account_id?: string | undefined
  apy?: (number | null) | undefined
  holder_category?: AccountHolderCategory | undefined
  paired_account_id?: (string | null) | undefined
}
type Holding = {
  account_id: string
  security_id: string
  institution_price: number | null
  institution_price_as_of?: (string | null) | undefined
  institution_price_datetime?: (string | null) | undefined
  institution_value: number | null
  cost_basis: number | null
  quantity: number | null
  iso_currency_code: string | null
  unofficial_currency_code: string | null
  vested_quantity?: (number | null) | undefined
  vested_value?: (number | null) | undefined
  tax_lots: HoldingTaxLot[]
}
type OptionContract = {
  contract_type: string
  expiration_date: string
  strike_price: number
  underlying_security_ticker: string
} | null
type YieldRateType = 'coupon' | 'coupon_equivalent' | 'discount' | 'yield' | null
type YieldRate = { percentage: number; type: YieldRateType } | null
type FixedIncome = {
  yield_rate: YieldRate
  maturity_date: string | null
  issue_date: string | null
  face_value: number | null
} | null
type Security = {
  security_id: string
  isin: string | null
  cusip: string | null
  sedol: string | null
  institution_security_id: string | null
  institution_id: string | null
  proxy_security_id: string | null
  name: string | null
  ticker_symbol: string | null
  is_cash_equivalent: boolean | null
  type: string | null
  subtype?: (string | null) | undefined
  close_price: number | null
  close_price_as_of: string | null
  update_datetime?: (string | null) | undefined
  iso_currency_code: string | null
  unofficial_currency_code: string | null
  market_identifier_code: string | null
  sector: string | null
  industry: string | null
  cfi_code: string | null
  figi: string | null
  option_contract: OptionContract
  fixed_income: FixedIncome
}
type ProcessorInvestmentsHoldingsGetResponse = {
  account: InvestmentAccount
  holdings: Holding[]
  securities: Security[]
  is_investments_fallback_item?: boolean | undefined
  request_id?: RequestID | undefined
}
type ProcessorInvestmentsAuthGetRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  processor_token: ProcessorToken
}
type InvestmentsAuthOwner = { account_id?: string | undefined; names?: string[] | undefined }
type NumbersACATS = { account_id: string; account: string; dtc_numbers: string[] }
type NumbersATON = { account_id: string; account: string }
type NumbersRetirement401k = {
  account_id: string
  plan?: string | undefined
  account?: string | undefined
}
type InvestmentsAuthGetNumbers = {
  acats?: NumbersACATS[] | undefined
  aton?: NumbersATON[] | undefined
  retirement_401k?: NumbersRetirement401k[] | undefined
}
type DataSources = 'INSTITUTION' | 'INSTITUTION_MASK' | 'USER'
type InvestmentsAuthDataSources = {
  numbers?: DataSources | undefined
  owners?: DataSources | undefined
  holdings?: DataSources | undefined
}
type InvestmentsAuth401kFeeDetails = {
  account_fee_count_12m: number
  account_fee_amount_12m: number
}
type InvestmentTransaction = {
  investment_transaction_id: string
  cancel_transaction_id?: (string | null) | undefined
  account_id: string
  security_id: string | null
  date: string
  transaction_datetime?: (string | null) | undefined
  name: string | null
  quantity: number | null
  amount: number | null
  price: number | null
  fees: number | null
  type: {}
  subtype: {}
  iso_currency_code: string | null
  unofficial_currency_code: string | null
}
type InvestmentsAuth401kContributionDetails = {
  last_contribution_transactions: InvestmentTransaction[]
  contribution_count_1m: number
  contribution_amount_1m: number
  contribution_count_6m: number
  contribution_amount_6m: number
  contribution_count_12m: number
  contribution_amount_12m: number
}
type InvestmentsAuthAccountDetails401k = {
  account_id?: string | undefined
  fee_details?: InvestmentsAuth401kFeeDetails | undefined
  contribution_details?: InvestmentsAuth401kContributionDetails | undefined
}
type ProcessorInvestmentsAuthGetResponse = {
  account: AccountBase
  holdings: Holding[]
  securities: Security[]
  owners: InvestmentsAuthOwner[]
  numbers: InvestmentsAuthGetNumbers
  data_sources: InvestmentsAuthDataSources
  account_details_401k?: InvestmentsAuthAccountDetails401k[] | undefined
  is_investments_fallback_item?: boolean | undefined
  request_id: RequestID
}
type InvestmentsTransactionsGetRequestOptions = {
  account_ids?: string[] | undefined
  count?: number | undefined
  offset?: number | undefined
  async_update?: boolean | undefined
}
type ProcessorInvestmentsTransactionsGetRequest = {
  client_id?: APIClientID | undefined
  options?: InvestmentsTransactionsGetRequestOptions | undefined
  processor_token: ProcessorToken
  secret?: APISecret | undefined
  start_date: string
  end_date: string
}
type ProcessorInvestmentsTransactionsGetResponse = {
  account: InvestmentAccount
  investment_transactions: InvestmentTransaction[]
  securities: Security[]
  total_investment_transactions: number
  request_id: RequestID
  is_investments_fallback_item?: boolean | undefined
}
type ProcessorTransactionsGetRequestOptions = {
  count?: number | undefined
  offset?: number | undefined
  include_original_description?: (boolean | null) | undefined
  include_personal_finance_category_beta?: boolean | undefined
  include_personal_finance_category?: boolean | undefined
  include_logo_and_counterparty_beta?: boolean | undefined
}
type ProcessorTransactionsGetRequest = {
  client_id?: APIClientID | undefined
  options?: ProcessorTransactionsGetRequestOptions | undefined
  processor_token: ProcessorToken
  secret?: APISecret | undefined
  start_date: string
  end_date: string
}
type ProcessorTransactionsGetResponse = {
  account: AccountBase
  transactions: Transaction[]
  total_transactions: number
  request_id: RequestID
}
type ProcessorTransactionsSyncRequest = {
  client_id?: APIClientID | undefined
  processor_token: ProcessorToken
  secret?: APISecret | undefined
  cursor?: string | undefined
  count?: number | undefined
  options?: TransactionsSyncRequestOptions | undefined
}
type AccountBaseNullable = {
  account_id: string
  balances: AccountBalance
  mask: string | null
  name: string
  official_name: string | null
  type: AccountType
  subtype: AccountSubtype
  verification_status?:
    | 'automatically_verified'
    | 'pending_automatic_verification'
    | 'pending_manual_verification'
    | 'unsent'
    | 'manually_verified'
    | 'verification_expired'
    | 'verification_failed'
    | 'database_matched'
    | 'database_insights_pass'
    | 'database_insights_pass_with_caution'
    | 'database_insights_fail'
    | undefined
  verification_name?: string | undefined
  verification_insights?:
    | {
        name_match_score?: (number | null) | undefined
        network_status?:
          | { has_numbers_match: boolean; is_numbers_match_verified: boolean }
          | undefined
        previous_returns?: { has_previous_administrative_return: boolean } | undefined
        account_number_format: AccountVerificationInsightsAccountNumberFormat
      }
    | undefined
  persistent_account_id?: string | undefined
  apy?: (number | null) | undefined
  holder_category?: AccountHolderCategory | undefined
  paired_account_id?: (string | null) | undefined
}
type ProcessorTransactionsSyncResponse = {
  transactions_update_status: TransactionsUpdateStatus
  account: AccountBaseNullable
  added: Transaction[]
  modified: Transaction[]
  removed: RemovedTransaction[]
  next_cursor: string
  has_more: boolean
  request_id: RequestID
}
type ProcessorTransactionsRefreshRequest = {
  client_id?: APIClientID | undefined
  processor_token: ProcessorToken
  secret?: APISecret | undefined
}
type ProcessorTransactionsRefreshResponse = { request_id: RequestID }
type ProcessorTransactionsRecurringGetRequest = {
  client_id?: APIClientID | undefined
  processor_token: ProcessorToken
  secret?: APISecret | undefined
  options?: TransactionsRecurringGetRequestOptions | undefined
}
type ProcessorTransactionsRecurringGetResponse = {
  inflow_streams: TransactionStream[]
  outflow_streams: TransactionStream[]
  updated_datetime: string
  personal_finance_category_version?: PersonalFinanceCategoryVersion | undefined
  request_id: RequestID
}
type SignalPersonName = {
  prefix?: (string | null) | undefined
  given_name?: (string | null) | undefined
  middle_name?: (string | null) | undefined
  family_name?: (string | null) | undefined
  suffix?: (string | null) | undefined
} | null
type SignalAddressData = {
  city?: string | undefined
  region?: (string | null) | undefined
  street?: string | undefined
  postal_code?: (string | null) | undefined
  country?: (string | null) | undefined
} | null
type SignalUser = {
  name?: SignalPersonName | undefined
  phone_number?: (string | null) | undefined
  email_address?: (string | null) | undefined
  address?: SignalAddressData | undefined
}
type ProcessorSignalEvaluateRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  processor_token: ProcessorToken
  client_transaction_id: string
  amount: number
  user_present?: (boolean | null) | undefined
  client_user_id?: string | undefined
  is_recurring?: (boolean | null) | undefined
  default_payment_method?: (string | null) | undefined
  user?: SignalUser | undefined
  device?: SignalDevice | undefined
  ruleset_key?: (string | null) | undefined
}
type SignalScore = number
type CustomerInitiatedRiskTier = number
type CustomerInitiatedReturnRisk = { score: SignalScore; risk_tier: CustomerInitiatedRiskTier }
type BankInitiatedRiskTier = number
type BankInitiatedReturnRisk = { score: SignalScore; risk_tier: BankInitiatedRiskTier }
type SignalScores = {
  customer_initiated_return_risk?: CustomerInitiatedReturnRisk | undefined
  bank_initiated_return_risk?: BankInitiatedReturnRisk | undefined
} | null
type SignalEvaluateCoreAttributes = {
  unauthorized_transactions_count_7d?: (number | null) | undefined
  unauthorized_transactions_count_30d?: (number | null) | undefined
  unauthorized_transactions_count_60d?: (number | null) | undefined
  unauthorized_transactions_count_90d?: (number | null) | undefined
  nsf_overdraft_transactions_count_7d?: (number | null) | undefined
  nsf_overdraft_transactions_count_30d?: (number | null) | undefined
  nsf_overdraft_transactions_count_60d?: (number | null) | undefined
  nsf_overdraft_transactions_count_90d?: (number | null) | undefined
  days_since_first_plaid_connection?: (number | null) | undefined
  plaid_connections_count_7d?: (number | null) | undefined
  plaid_connections_count_30d?: (number | null) | undefined
  total_plaid_connections_count?: (number | null) | undefined
  is_savings_or_money_market_account?: (boolean | null) | undefined
  total_credit_transactions_amount_10d?: (number | null) | undefined
  total_debit_transactions_amount_10d?: (number | null) | undefined
  p50_credit_transactions_amount_28d?: (number | null) | undefined
  p50_debit_transactions_amount_28d?: (number | null) | undefined
  p95_credit_transactions_amount_28d?: (number | null) | undefined
  p95_debit_transactions_amount_28d?: (number | null) | undefined
  days_with_negative_balance_count_90d?: (number | null) | undefined
  p90_eod_balance_30d?: (number | null) | undefined
  p90_eod_balance_60d?: (number | null) | undefined
  p90_eod_balance_90d?: (number | null) | undefined
  p10_eod_balance_30d?: (number | null) | undefined
  p10_eod_balance_60d?: (number | null) | undefined
  p10_eod_balance_90d?: (number | null) | undefined
  available_balance?: (number | null) | undefined
  current_balance?: (number | null) | undefined
  balance_last_updated?: (string | null) | undefined
  phone_change_count_28d?: (number | null) | undefined
  phone_change_count_90d?: (number | null) | undefined
  email_change_count_28d?: (number | null) | undefined
  email_change_count_90d?: (number | null) | undefined
  address_change_count_28d?: (number | null) | undefined
  address_change_count_90d?: (number | null) | undefined
  plaid_non_oauth_authentication_attempts_count_3d?: (number | null) | undefined
  plaid_non_oauth_authentication_attempts_count_7d?: (number | null) | undefined
  plaid_non_oauth_authentication_attempts_count_30d?: (number | null) | undefined
  failed_plaid_non_oauth_authentication_attempts_count_3d?: (number | null) | undefined
  failed_plaid_non_oauth_authentication_attempts_count_7d?: (number | null) | undefined
  failed_plaid_non_oauth_authentication_attempts_count_30d?: (number | null) | undefined
  debit_transactions_count_10d?: (number | null) | undefined
  credit_transactions_count_10d?: (number | null) | undefined
  debit_transactions_count_30d?: (number | null) | undefined
  credit_transactions_count_30d?: (number | null) | undefined
  debit_transactions_count_60d?: (number | null) | undefined
  credit_transactions_count_60d?: (number | null) | undefined
  debit_transactions_count_90d?: (number | null) | undefined
  credit_transactions_count_90d?: (number | null) | undefined
  total_debit_transactions_amount_30d?: (number | null) | undefined
  total_credit_transactions_amount_30d?: (number | null) | undefined
  total_debit_transactions_amount_60d?: (number | null) | undefined
  total_credit_transactions_amount_60d?: (number | null) | undefined
  total_debit_transactions_amount_90d?: (number | null) | undefined
  total_credit_transactions_amount_90d?: (number | null) | undefined
  p50_eod_balance_30d?: (number | null) | undefined
  p50_eod_balance_60d?: (number | null) | undefined
  p50_eod_balance_90d?: (number | null) | undefined
  p50_eod_balance_31d_to_60d?: (number | null) | undefined
  p50_eod_balance_61d_to_90d?: (number | null) | undefined
  p90_eod_balance_31d_to_60d?: (number | null) | undefined
  p90_eod_balance_61d_to_90d?: (number | null) | undefined
  p10_eod_balance_31d_to_60d?: (number | null) | undefined
  p10_eod_balance_61d_to_90d?: (number | null) | undefined
  transactions_last_updated?: (string | null) | undefined
  is_account_closed?: (boolean | null) | undefined
  is_account_frozen_or_restricted?: (boolean | null) | undefined
  distinct_ip_addresses_count_3d?: (number | null) | undefined
  distinct_ip_addresses_count_7d?: (number | null) | undefined
  distinct_ip_addresses_count_30d?: (number | null) | undefined
  distinct_ip_addresses_count_90d?: (number | null) | undefined
  distinct_user_agents_count_3d?: (number | null) | undefined
  distinct_user_agents_count_7d?: (number | null) | undefined
  distinct_user_agents_count_30d?: (number | null) | undefined
  distinct_user_agents_count_90d?: (number | null) | undefined
  distinct_ssl_tls_connection_sessions_count_3d?: (number | null) | undefined
  distinct_ssl_tls_connection_sessions_count_7d?: (number | null) | undefined
  distinct_ssl_tls_connection_sessions_count_30d?: (number | null) | undefined
  distinct_ssl_tls_connection_sessions_count_90d?: (number | null) | undefined
  days_since_account_opening?: (number | null) | undefined
  balance_to_transaction_amount_ratio?: (number | null) | undefined
}
type RuleResult = 'ACCEPT' | 'REROUTE' | 'REVIEW'
type RuleDetails = {
  internal_note?: string | undefined
  custom_action_key?: string | undefined
} | null
type Ruleset = {
  ruleset_key?: string | undefined
  result: RuleResult
  triggered_rule_details?: RuleDetails | undefined
  outcome?: string | undefined
} | null
type SignalWarning = {
  warning_type?: string | undefined
  warning_code?: string | undefined
  warning_message?: string | undefined
}
type ProcessorSignalEvaluateResponse = {
  request_id: RequestID
  scores: SignalScores
  core_attributes?: SignalEvaluateCoreAttributes | undefined
  ruleset?: Ruleset | undefined
  warnings?: SignalWarning[] | undefined
}
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
  | 'MULTIPLE_PAYMENT_METHODS'
  | null
type ProcessorSignalDecisionReportRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  processor_token: ProcessorToken
  client_transaction_id: string
  initiated: boolean
  days_funds_on_hold?: (number | null) | undefined
  decision_outcome?: SignalDecisionOutcome | undefined
  payment_method?: SignalPaymentMethod | undefined
  amount_instantly_available?: (number | null) | undefined
}
type ProcessorSignalDecisionReportResponse = { request_id: RequestID }
type ProcessorSignalReturnReportRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  processor_token: ProcessorToken
  client_transaction_id: string
  return_code: string
  returned_at?: (string | null) | undefined
}
type ProcessorSignalReturnReportResponse = { request_id: RequestID }
type ProcessorSignalPrepareRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  processor_token: ProcessorToken
}
type ProcessorSignalPrepareResponse = { request_id: RequestID }
type BankTransferIdempotencyKey = string
type BankTransferType = 'debit' | 'credit'
type BankTransferNetwork = 'ach' | 'same-day-ach' | 'wire'
type BankTransferAmount = string
type ACHClass = 'ccd' | 'ppd' | 'tel' | 'web'
type BankTransferUser = {
  legal_name: string
  email_address?: (string | null) | undefined
  routing_number?: string | undefined
}
type BankTransferMetadata = { [x: string]: string } | null
type ProcessorBankTransferCreateRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  idempotency_key: BankTransferIdempotencyKey
  processor_token: ProcessorToken
  type: BankTransferType
  network: BankTransferNetwork
  amount: BankTransferAmount
  iso_currency_code: string
  description: string
  ach_class?: ACHClass | undefined
  user: BankTransferUser
  custom_tag?: (string | null) | undefined
  metadata?: BankTransferMetadata | undefined
  origination_account_id?: (string | null) | undefined
}
type BankTransferID = string
type BankTransferStatus = 'pending' | 'posted' | 'cancelled' | 'failed' | 'reversed'
type BankTransferFailure = {
  ach_return_code?: (string | null) | undefined
  description?: (string | null) | undefined
} | null
type BankTransferDirection = 'outbound' | 'inbound' | null
type BankTransfer = {
  id: BankTransferID
  ach_class: ACHClass
  account_id: string
  type: BankTransferType
  user: BankTransferUser
  amount: BankTransferAmount
  iso_currency_code: string
  description: string
  created: string
  status: BankTransferStatus
  network: BankTransferNetwork
  cancellable: boolean
  failure_reason: BankTransferFailure
  custom_tag: string | null
  metadata: BankTransferMetadata
  origination_account_id: string | null
  direction: BankTransferDirection
}
type ProcessorBankTransferCreateResponse = { bank_transfer: BankTransfer; request_id: RequestID }
type ProcessorLiabilitiesGetRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  processor_token: ProcessorToken
}
type APR = {
  apr_percentage: number
  apr_type: 'balance_transfer_apr' | 'cash_apr' | 'penalty_apr' | 'purchase_apr' | 'special'
  balance_subject_to_apr: number | null
  interest_charge_amount: number | null
}
type CreditCardLiability = {
  account_id: string | null
  aprs: APR[]
  is_overdue: boolean | null
  last_payment_amount: number | null
  last_payment_date: string | null
  last_statement_issue_date: string | null
  last_statement_balance: number | null
  minimum_payment_amount: number | null
  next_payment_due_date: string | null
  cash_advance_limit?: (number | null) | undefined
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
  account_number: string | null
  current_late_fee: number | null
  escrow_balance: number | null
  has_pmi: boolean | null
  has_prepayment_penalty: boolean | null
  interest_rate: MortgageInterestRate
  last_payment_amount: number | null
  last_payment_date: string | null
  loan_type_description: string | null
  loan_term: string | null
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
    | 'pending idr'
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
    | 'income-sensitive repayment'
    | 'interest only'
    | 'other'
    | 'pay as you earn'
    | 'revised pay as you earn'
    | 'standard'
    | 'saving on a valuable education'
    | null
}
type ServicerAddressData = {
  city: string | null
  region: string | null
  street: string | null
  postal_code: string | null
  country: string | null
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
  last_statement_balance?: (number | null) | undefined
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
type LoanInterestRateType = 'fixed' | 'variable'
type LoanInterestRate = { percentage: number | null; type: LoanInterestRateType } | null
type LoanPaymentFrequency =
  | 'daily'
  | 'weekly'
  | 'biweekly'
  | 'semimonthly'
  | 'monthly'
  | 'semiannually'
  | 'annually'
type LoanCompoundingPeriod =
  | 'daily'
  | 'weekly'
  | 'biweekly'
  | 'semimonthly'
  | 'monthly'
  | 'semiannually'
  | 'annually'
type LoanLiability = {
  account_id: string
  account_number: string | null
  interest_rate: LoanInterestRate
  principal_balance: number | null
  origination_principal_amount: number | null
  origination_date: string | null
  loan_term_months: number | null
  maturity_date: string | null
  payment_count: number | null
  payment_frequency: LoanPaymentFrequency
  next_payment_amount: number | null
  next_payment_due_date: string | null
  last_payment_amount: number | null
  last_payment_date: string | null
  payoff_amount: number | null
  ytd_interest_paid: number | null
  compounding_period: LoanCompoundingPeriod
}
type LineOfCreditLiability = {
  account_id: string
  interest_rate: LoanInterestRate
  credit_limit: number | null
  available_credit: number | null
  principal_balance: number | null
  minimum_payment_amount: number | null
  next_payment_amount: number | null
  next_payment_due_date: string | null
  last_payment_amount: number | null
  last_payment_date: string | null
  last_statement_balance: number | null
  last_statement_issue_date: string | null
  past_due_amount: number | null
  finance_charges: number | null
  draw_period_end_date: string | null
  aprs: APR[]
}
type LiabilitiesObject = {
  credit: CreditCardLiability[] | null
  mortgage: MortgageLiability[] | null
  student: StudentLoan[] | null
  loan?: (LoanLiability[] | null) | undefined
  line_of_credit?: (LineOfCreditLiability[] | null) | undefined
}
type ProcessorLiabilitiesGetResponse = {
  account: AccountBase
  liabilities: LiabilitiesObject
  request_id: RequestID
}
type ProcessorIdentityGetRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  processor_token: ProcessorToken
}
type ProcessorIdentityGetResponse = { account: AccountIdentity; request_id: RequestID }
type ProcessorIdentityMatchRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  processor_token: ProcessorToken
  user?: IdentityMatchUser | undefined
}
type ProcessorIdentityMatchResponse = { account: AccountIdentityMatchScore; request_id: RequestID }
type ProcessorBalanceGetRequestOptions = {
  min_last_updated_datetime?: MinLastUpdatedDatetime | undefined
}
type ProcessorBalanceGetRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  processor_token: ProcessorToken
  options?: ProcessorBalanceGetRequestOptions | undefined
}
type ProcessorBalanceGetResponse = { account: AccountBase; request_id: RequestID }
type ItemWebhookUpdateRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  access_token: AccessToken
  webhook?: (string | null) | undefined
}
type ItemWebhookUpdateResponse = { item: Item; request_id: RequestID }
type ItemAccessTokenInvalidateRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  access_token: AccessToken
}
type ItemAccessTokenInvalidateResponse = { new_access_token: AccessToken; request_id: RequestID }
type WebhookEventDeliveryStatus = 'PENDING' | 'DELIVERED' | 'FAILED'
type BetaWebhookEventsListRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  cursor?: string | undefined
  start_time?: (string | null) | undefined
  count?: (number | null) | undefined
  webhook_types?: string[] | undefined
  webhook_codes?: string[] | undefined
  item_ids?: string[] | undefined
  delivery_statuses?: WebhookEventDeliveryStatus[] | undefined
}
type WebhookEventPayload = { [x: string]: { [x: string]: unknown } }
type WebhookEvent = {
  webhook_message_id: string
  webhook_type: string
  webhook_code: string
  item_id: string | null
  sent_time: string
  payload: WebhookEventPayload
  destination_url: string
  delivery_status: WebhookEventDeliveryStatus
  last_http_status_code: number | null
  attempt_count: number
  last_attempt_time: string | null
}
type BetaWebhookEventsListResponse = {
  webhook_events: WebhookEvent[]
  has_more: boolean
  next_cursor: string
  request_id: RequestID
}
type WebhookVerificationKeyGetRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  key_id: string
}
type JWKPublicKey = {
  alg: string
  crv: string
  kid: string
  kty: string
  use: string
  x: string
  y: string
  created_at: number
  expired_at: number | null
}
type WebhookVerificationKeyGetResponse = { key: JWKPublicKey; request_id: RequestID }
type LiabilitiesGetRequestOptions = { account_ids?: string[] | undefined }
type LiabilitiesGetRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  access_token: AccessToken
  options?: LiabilitiesGetRequestOptions | undefined
}
type LiabilitiesGetResponse = {
  accounts: AccountBase[]
  item: Item
  liabilities: LiabilitiesObject
  request_id: RequestID
}
type RecipientBACSNullable = { account?: string | undefined; sort_code?: string | undefined }
type PaymentInitiationAddress = {
  street: string[]
  city: string
  postal_code: string
  country: string
} | null
type PaymentInitiationRecipientCreateRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  name: string
  iban?: (string | null) | undefined
  bacs?: RecipientBACSNullable | undefined
  address?: PaymentInitiationAddress | undefined
}
type PaymentInitiationRecipientCreateResponse = { recipient_id: string; request_id: RequestID }
type WalletTransactionIdempotencyKey = string
type PaymentAmountCurrency = 'GBP' | 'EUR' | 'PLN' | 'SEK' | 'DKK' | 'NOK'
type PaymentAmountToRefund = { currency: PaymentAmountCurrency; value: number }
type PaymentInitiationPaymentReverseRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  payment_id: string
  idempotency_key: WalletTransactionIdempotencyKey
  reference: string
  amount?: PaymentAmountToRefund | undefined
  counterparty_date_of_birth?: (string | null) | undefined
  counterparty_address?: PaymentInitiationAddress | undefined
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
  status: WalletTransactionStatus
  request_id: RequestID
}
type PaymentInitiationRecipientGetRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  recipient_id: string
}
type RecipientBACSNullableInResponse = { account: string; sort_code: string }
type PaymentInitiationRecipientGetResponse = {
  recipient_id: string
  name: string
  address?: PaymentInitiationAddress | undefined
  iban?: (string | null) | undefined
  bacs?: RecipientBACSNullableInResponse | undefined
  request_id?: RequestID | undefined
}
type PaymentInitiationRecipientListRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  count?: (number | null) | undefined
  cursor?: string | undefined
}
type PaymentInitiationRecipient = {
  recipient_id: string
  name: string
  address?: PaymentInitiationAddress | undefined
  iban?: (string | null) | undefined
  bacs?: RecipientBACSNullableInResponse | undefined
}
type PaymentInitiationRecipientListResponse = {
  recipients: PaymentInitiationRecipient[]
  request_id: RequestID
  next_cursor?: string | undefined
}
type PaymentAmount = { currency: PaymentAmountCurrency; value: number }
type ExternalPaymentScheduleRequest = {
  interval?: PaymentScheduleInterval | undefined
  interval_execution_day?: number | undefined
  start_date?: string | undefined
  end_date?: (string | null) | undefined
  adjusted_start_date?: (string | null) | undefined
}
type PaymentInitiationOptionalRestrictionBacs = {
  account?: string | undefined
  sort_code?: string | undefined
}
type PaymentScheme =
  | null
  | 'LOCAL_DEFAULT'
  | 'LOCAL_INSTANT'
  | 'SEPA_CREDIT_TRANSFER'
  | 'SEPA_CREDIT_TRANSFER_INSTANT'
type ExternalPaymentOptions = {
  request_refund_details?: (boolean | null) | undefined
  iban?: (string | null) | undefined
  bacs?: PaymentInitiationOptionalRestrictionBacs | undefined
  scheme?: PaymentScheme | undefined
} | null
type PaymentInitiationPaymentCreateRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  recipient_id: string
  user_id?: string | undefined
  reference: string
  amount: PaymentAmount
  schedule?: ExternalPaymentScheduleRequest | undefined
  options?: ExternalPaymentOptions | undefined
}
type PaymentInitiationPaymentCreateStatus = 'PAYMENT_STATUS_INPUT_NEEDED'
type PaymentInitiationPaymentCreateResponse = {
  payment_id: string
  status: PaymentInitiationPaymentCreateStatus
  request_id: RequestID
}
type PaymentInitiationPaymentTokenCreateRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  payment_id: string
}
type PaymentInitiationPaymentTokenCreateResponse = {
  payment_token: string
  payment_token_expiration_time: string
  request_id: RequestID
}
type PaymentInitiationConsentScope = 'ME_TO_ME' | 'EXTERNAL'
type PaymentInitiationConsentType = 'SWEEPING' | 'COMMERCIAL'
type PaymentConsentValidDateTime = {
  from?: (string | null) | undefined
  to?: (string | null) | undefined
} | null
type PaymentConsentMaxPaymentAmount = { currency: PaymentAmountCurrency; value: number }
type PaymentConsentPeriodicAmountAmount = { currency: PaymentAmountCurrency; value: number }
type PaymentConsentPeriodicInterval = 'DAY' | 'WEEK' | 'MONTH' | 'YEAR'
type PaymentConsentPeriodicAlignment = 'CALENDAR' | 'CONSENT'
type PaymentConsentPeriodicAmount = {
  amount: PaymentConsentPeriodicAmountAmount
  interval: PaymentConsentPeriodicInterval
  alignment: PaymentConsentPeriodicAlignment
}
type PaymentInitiationConsentConstraints = {
  valid_date_time?: PaymentConsentValidDateTime | undefined
  max_payment_amount: PaymentConsentMaxPaymentAmount
  periodic_amounts: PaymentConsentPeriodicAmount[]
}
type ExternalPaymentInitiationConsentOptions = {
  request_refund_details?: (boolean | null) | undefined
  iban?: (string | null) | undefined
  bacs?: PaymentInitiationOptionalRestrictionBacs | undefined
} | null
type PaymentInitiationConsentPayerNumbers = {
  bacs?: PaymentInitiationOptionalRestrictionBacs | undefined
  iban?: NumbersIBANNullable | undefined
}
type PaymentInitiationConsentPayerDetails = {
  name: string
  numbers: PaymentInitiationConsentPayerNumbers
  address?: PaymentInitiationAddress | undefined
  date_of_birth?: (string | null) | undefined
  phone_numbers?: string[] | undefined
  emails?: string[] | undefined
} | null
type PaymentInitiationConsentCreateRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  recipient_id: string
  user_id?: string | undefined
  reference: string
  scopes?: PaymentInitiationConsentScope[] | undefined
  type?: PaymentInitiationConsentType | undefined
  constraints: PaymentInitiationConsentConstraints
  options?: ExternalPaymentInitiationConsentOptions | undefined
  payer_details?: PaymentInitiationConsentPayerDetails | undefined
}
type PaymentInitiationConsentStatus =
  | 'UNAUTHORISED'
  | 'AUTHORISED'
  | 'REVOKED'
  | 'REJECTED'
  | 'EXPIRED'
type PaymentInitiationConsentCreateResponse = {
  consent_id: string
  status: PaymentInitiationConsentStatus
  request_id: RequestID
}
type PaymentInitiationConsentGetRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  consent_id: string
}
type ExternalPaymentRefundDetails = {
  name: string
  iban: string | null
  bacs: RecipientBACSNullableInResponse
} | null
type PaymentInitiationConsentGetResponse = {
  consent_id: string
  status: PaymentInitiationConsentStatus
  created_at: string
  recipient_id: string
  reference: string
  constraints: PaymentInitiationConsentConstraints
  scopes?: PaymentInitiationConsentScope[] | undefined
  type?: PaymentInitiationConsentType | undefined
  payer_details?: ExternalPaymentRefundDetails | undefined
  request_id?: RequestID | undefined
}
type PaymentInitiationConsentRevokeRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  consent_id: string
}
type PaymentInitiationConsentRevokeResponse = { request_id?: RequestID | undefined }
type ConsentPaymentIdempotencyKey = string
type PaymentInitiationConsentProcessingMode = 'ASYNC' | 'IMMEDIATE'
type PaymentInitiationConsentPaymentExecuteRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  consent_id: string
  amount: PaymentAmount
  idempotency_key: ConsentPaymentIdempotencyKey
  reference?: (string | null) | undefined
  scope?: {} | undefined
  processing_mode?: PaymentInitiationConsentProcessingMode | undefined
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
  status: PaymentInitiationPaymentStatus
  request_id: RequestID
  error?: PlaidError | undefined
}
type SandboxItemResetLoginRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  access_token: AccessToken
}
type SandboxItemResetLoginResponse = { reset_login: boolean; request_id: RequestID }
type SandboxItemApplicationSeedRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  access_token: AccessToken
  application_id: ApplicationID
}
type SandboxItemApplicationSeedResponse = { item_id: string; request_id: RequestID }
type SandboxFdxConsentSeedRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  customer_id: string
  application_id: ApplicationID
  consent_id?: string | undefined
}
type SandboxFdxConsentSeedResponse = { consent_id: string; request_id: RequestID }
type SandboxItemSetVerificationStatusRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  access_token: AccessToken
  account_id: string
  verification_status: 'automatically_verified' | 'verification_expired'
}
type SandboxItemSetVerificationStatusResponse = { request_id: RequestID }
type SandboxUserResetLoginRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  user_token?: UserToken | undefined
  item_ids?: (ItemId[] | null) | undefined
  user_id?: NewUserID | undefined
}
type SandboxUserResetLoginResponse = { request_id: RequestID }
type ItemPublicTokenExchangeRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  public_token: string
}
type ItemPublicTokenExchangeResponse = {
  access_token: AccessToken
  item_id: string
  request_id: RequestID
}
type ItemPublicTokenCreateRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  access_token: AccessToken
}
type ItemPublicTokenCreateResponse = {
  public_token: string
  expiration?: string | undefined
  request_id: RequestID
}
type ClientUserIdentityName = { given_name: string; family_name: string } | null
type ClientUserIdentityEmail = { data: string; primary: boolean }
type ClientUserIdentityPhoneNumber = { data: string; primary: boolean }
type ClientUserIdentityAddress = {
  street_1?: (string | null) | undefined
  street_2?: (string | null) | undefined
  city?: (string | null) | undefined
  region?: (string | null) | undefined
  country: string
  postal_code?: (string | null) | undefined
  primary: boolean
}
type ClientUserIdentity = {
  name?: ClientUserIdentityName | undefined
  date_of_birth?: (string | null) | undefined
  emails?: ClientUserIdentityEmail[] | undefined
  phone_numbers?: ClientUserIdentityPhoneNumber[] | undefined
  addresses?: ClientUserIdentityAddress[] | undefined
  id_numbers?: UserIDNumber[] | undefined
} | null
type ConsumerReportUserIdentity = {
  first_name: string
  last_name: string
  phone_numbers: string[]
  emails: string[]
  ssn_full?: (string | null) | undefined
  ssn_last_4?: (string | null) | undefined
  date_of_birth: string | null
  primary_address: AddressData
} | null
type UserCreateRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  client_user_id: string
  identity?: ClientUserIdentity | undefined
  end_customer?: string | undefined
  consumer_report_user_identity?: ConsumerReportUserIdentity | undefined
  with_upgraded_user?: boolean | undefined
}
type UserCreateResponse = {
  user_token?: UserToken | undefined
  user_id: NewUserID
  request_id: RequestID
}
type UserGetRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  user_id: NewUserID
}
type UserGetResponse = {
  request_id: RequestID
  user_id: NewUserID
  client_user_id: string | null
  created_at: string
  updated_at?: string | undefined
  identity?: ClientUserIdentity | undefined
}
type UserIdentityRemoveRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  user_id: NewUserID
}
type UserIdentityRemoveResponse = { request_id: RequestID }
type UserUpdateRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  user_id?: NewUserID | undefined
  identity?: ClientUserIdentity | undefined
  user_token?: UserToken | undefined
  consumer_report_user_identity?: ConsumerReportUserIdentity | undefined
}
type UserUpdateResponse = { request_id: RequestID }
type UserRemoveRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  user_id?: NewUserID | undefined
  user_token?: UserToken | undefined
}
type UserRemoveResponse = { request_id: RequestID }
type UserProductsTerminateRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  user_id: NewUserID
  reason_code: ProductsTerminateReasonCode
  reason_note?: (string | null) | undefined
}
type UserProductsTerminateResponse = { request_id: RequestID }
type UserTransferLimitsGetRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  user_id: NewUserID
}
type UserTransferLimitAmountNullable = { value: string; iso_currency_code: string }
type UserGuaranteeLimits = {
  transaction_limit: { value: string; iso_currency_code: string }
  daily_limit: UserTransferLimitAmountNullable
  weekly_limit: UserTransferLimitAmountNullable
  monthly_limit: UserTransferLimitAmountNullable
}
type UserTransferLimitsGetResponse = {
  guarantee_limits: UserGuaranteeLimits
  request_id: RequestID
}
type UserItemsGetRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  user_token?: UserToken | undefined
  user_id?: NewUserID | undefined
}
type UserItemsGetResponse = { items: Item[]; request_id: RequestID }
type UserItemsAssociateRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  user_id: NewUserID
  item_ids: ItemId[]
}
type UserItemsAssociateResponse = { request_id: RequestID }
type UserItemsRemoveRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  user_token?: UserToken | undefined
  user_id?: NewUserID | undefined
  item_ids: ItemId[]
}
type UserItemsRemoveResponse = { request_id: RequestID }
type UserThirdPartyTokenCreateRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  user_token?: UserToken | undefined
  third_party_client_id: string
  expiration_time?: (string | null) | undefined
  user_id?: NewUserID | undefined
}
type UserThirdPartyTokenCreateResponse = {
  request_id: RequestID
  third_party_user_token: ThirdPartyUserToken
}
type UserThirdPartyTokenRemoveRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  third_party_user_token: ThirdPartyUserToken
}
type UserThirdPartyTokenRemoveResponse = { removed: boolean; request_id: RequestID }
type CreditSessionsGetRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  user_token?: UserToken | undefined
  user_id?: NewUserID | undefined
}
type CreditSessionItemAddResult = {
  public_token?: string | undefined
  item_id?: string | undefined
  institution_id?: string | undefined
}
type CreditSessionBankIncomeStatus =
  | 'APPROVED'
  | 'NO_DEPOSITS_FOUND'
  | 'USER_REPORTED_NO_INCOME'
  | 'STARTED'
  | 'INTERNAL_ERROR'
type CreditSessionBankIncomeResult = {
  status?: CreditSessionBankIncomeStatus | undefined
  item_id?: string | undefined
  institution_id?: string | undefined
}
type CreditSessionBankEmploymentStatus =
  | 'APPROVED'
  | 'NO_EMPLOYERS_FOUND'
  | 'EMPLOYER_NOT_LISTED'
  | 'STARTED'
  | 'INTERNAL_ERROR'
type CreditSessionBankEmploymentResult = {
  status?: CreditSessionBankEmploymentStatus | undefined
  item_id?: string | undefined
  institution_id?: string | undefined
}
type CreditSessionPayrollIncomeResult = {
  num_paystubs_retrieved?: number | undefined
  num_w2s_retrieved?: number | undefined
  institution_id?: string | undefined
  institution_name?: string | undefined
}
type CreditSessionDocumentIncomeResult = {
  num_paystubs_uploaded: number
  num_w2s_uploaded: number
  num_bank_statements_uploaded: number
  num_1099s_uploaded: number
  num_i20s_uploaded: number
} | null
type CreditSessionResults = {
  item_add_results?: CreditSessionItemAddResult[] | undefined
  bank_income_results?: CreditSessionBankIncomeResult[] | undefined
  bank_employment_results?: CreditSessionBankEmploymentResult[] | undefined
  payroll_income_results?: CreditSessionPayrollIncomeResult[] | undefined
  document_income_results?: CreditSessionDocumentIncomeResult | undefined
}
type CreditSessionError = {
  error_type?: string | undefined
  error_code?: string | undefined
  error_message?: string | undefined
  display_message?: (string | null) | undefined
}
type CreditSession = {
  link_session_id?: string | undefined
  session_start_time?: string | undefined
  results?: CreditSessionResults | undefined
  errors?: CreditSessionError[] | undefined
}
type CreditSessionsGetResponse = { sessions?: CreditSession[] | undefined; request_id: RequestID }
type PaymentInitiationPaymentGetRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  payment_id: string
}
type ExternalPaymentScheduleGet = {
  interval?: PaymentScheduleInterval | undefined
  interval_execution_day?: number | undefined
  start_date?: string | undefined
  end_date?: (string | null) | undefined
  adjusted_start_date?: (string | null) | undefined
}
type SenderBACSNullable = { account: string; sort_code: string }
type PaymentAmountRefunded = { currency: PaymentAmountCurrency; value: number }
type PaymentInitiationPaymentGetResponse = {
  payment_id: string
  amount: PaymentAmount
  status: PaymentInitiationPaymentStatus
  recipient_id: string
  reference: string
  adjusted_reference?: (string | null) | undefined
  last_status_update: string
  schedule?: ExternalPaymentScheduleGet | undefined
  refund_details?: ExternalPaymentRefundDetails | undefined
  bacs: SenderBACSNullable
  iban: string | null
  refund_ids?: (string[] | null) | undefined
  amount_refunded?: PaymentAmountRefunded | undefined
  wallet_id?: (string | null) | undefined
  scheme?: PaymentScheme | undefined
  adjusted_scheme?: PaymentScheme | undefined
  consent_id?: (string | null) | undefined
  transaction_id?: (string | null) | undefined
  end_to_end_id?: (string | null) | undefined
  error?: PlaidError | undefined
  institution_id?: (string | null) | undefined
  request_id?: RequestID | undefined
}
type PaymentInitiationPaymentListRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  count?: (number | null) | undefined
  cursor?: (string | null) | undefined
  consent_id?: (string | null) | undefined
}
type PaymentInitiationPayment = {
  payment_id: string
  amount: PaymentAmount
  status: PaymentInitiationPaymentStatus
  recipient_id: string
  reference: string
  adjusted_reference?: (string | null) | undefined
  last_status_update: string
  schedule?: ExternalPaymentScheduleGet | undefined
  refund_details?: ExternalPaymentRefundDetails | undefined
  bacs: SenderBACSNullable
  iban: string | null
  refund_ids?: (string[] | null) | undefined
  amount_refunded?: PaymentAmountRefunded | undefined
  wallet_id?: (string | null) | undefined
  scheme?: PaymentScheme | undefined
  adjusted_scheme?: PaymentScheme | undefined
  consent_id?: (string | null) | undefined
  transaction_id?: (string | null) | undefined
  end_to_end_id?: (string | null) | undefined
  error?: PlaidError | undefined
}
type PaymentInitiationPaymentListResponse = {
  payments: PaymentInitiationPayment[]
  next_cursor: string | null
  request_id: RequestID
}
type InvestmentHoldingsGetRequestOptions = { account_ids?: string[] | undefined }
type InvestmentsHoldingsGetRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  access_token: AccessToken
  options?: InvestmentHoldingsGetRequestOptions | undefined
}
type InvestmentsHoldingsGetResponse = {
  accounts: InvestmentAccount[]
  holdings: Holding[]
  securities: Security[]
  item: Item
  request_id: RequestID
  is_investments_fallback_item?: boolean | undefined
}
type InvestmentsTransactionsGetRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  access_token: AccessToken
  start_date: string
  end_date: string
  options?: InvestmentsTransactionsGetRequestOptions | undefined
}
type InvestmentsTransactionsGetResponse = {
  item: Item
  accounts: InvestmentAccount[]
  securities: Security[]
  investment_transactions: InvestmentTransaction[]
  total_investment_transactions: number
  request_id: RequestID
  is_investments_fallback_item?: boolean | undefined
}
type InvestmentsRefreshRequest = {
  client_id?: APIClientID | undefined
  access_token: AccessToken
  secret?: APISecret | undefined
}
type InvestmentsRefreshResponse = { request_id: RequestID }
type InvestmentsAuthGetRequestOptions = { account_ids?: string[] | undefined }
type InvestmentsAuthGetRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  access_token: AccessToken
  options?: InvestmentsAuthGetRequestOptions | undefined
}
type InvestmentsAuthGetResponse = {
  accounts: InvestmentAccount[]
  holdings: Holding[]
  securities: Security[]
  owners: InvestmentsAuthOwner[]
  numbers: InvestmentsAuthGetNumbers
  data_sources: InvestmentsAuthDataSources
  account_details_401k?: InvestmentsAuthAccountDetails401k[] | undefined
  item: Item
  request_id: RequestID
}
type ProcessorTokenCreateRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  access_token: AccessToken
  account_id: string
  processor:
    | 'dwolla'
    | 'galileo'
    | 'modern_treasury'
    | 'ocrolus'
    | 'stripe'
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
    | 'gemini'
    | 'apex_clearing'
    | 'gusto'
    | 'adyen'
    | 'atomic'
    | 'i2c'
    | 'wepay'
    | 'riskified'
    | 'utb'
    | 'adp_roll'
    | 'fortress_trust'
    | 'bond'
    | 'bakkt'
    | 'teal'
    | 'zero_hash'
    | 'taba_pay'
    | 'knot'
    | 'sardine'
    | 'alloy'
    | 'finix'
    | 'nuvei'
    | 'layer'
    | 'boom'
    | 'seamlessach'
    | 'stake'
    | 'wedbush'
    | 'esusu'
    | 'ansa'
    | 'scribeup'
    | 'straddle'
    | 'loanpro'
    | 'bloom_credit'
    | 'sfox'
    | 'brale'
    | 'parafin'
    | 'cardless'
    | 'open_ledger'
    | 'valon'
    | 'gainbridge'
    | 'cardlytics'
    | 'pinwheel'
    | 'thread_bank'
    | 'array'
    | 'fiant'
    | 'oatfi'
    | 'curinos'
    | 'frame'
    | 'interchecks'
    | 'interchange'
    | 'atomicfi'
    | 'pay'
    | 'natural'
    | 'kanmon'
    | 'kick'
    | 'increase'
    | 'airwallex'
    | 'cybrid'
    | 'bizcap'
    | 'webull'
    | 'kikoff_enterprise'
    | 'adyen_ca'
    | 'bitgo'
    | 'anchorage'
    | 'affina'
    | 'whop'
}
type ProcessorTokenCreateResponse = { processor_token: string; request_id: RequestID }
type ProcessorTokenPermissionsSetRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  processor_token: ProcessorToken
  products: Products[]
}
type ProcessorTokenPermissionsSetResponse = { request_id: RequestID }
type ProcessorTokenPermissionsGetRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  processor_token: ProcessorToken
}
type ProcessorTokenPermissionsGetResponse = { request_id: RequestID; products: Products[] }
type ProcessorTokenWebhookUpdateRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  processor_token: ProcessorToken
  webhook: string | null
}
type ProcessorTokenWebhookUpdateResponse = { request_id: RequestID }
type ProcessorStripeBankAccountTokenCreateRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  access_token: AccessToken
  account_id: string
}
type ProcessorStripeBankAccountTokenCreateResponse = {
  stripe_bank_account_token: string
  request_id: RequestID
}
type ProcessorApexProcessorTokenCreateRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  access_token: AccessToken
  account_id: string
}
type ItemImportRequestInstitutionID = string
type ItemImportRequestUserAuth = { user_id: string; auth_token?: string | undefined }
type ItemImportRequestOptions = { webhook?: string | undefined }
type ItemImportRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  institution_id?: ItemImportRequestInstitutionID | undefined
  products?: Products[] | undefined
  user_auth: ItemImportRequestUserAuth
  options?: ItemImportRequestOptions | undefined
}
type ItemImportResponse = { access_token: AccessToken; request_id: RequestID }
type LinkTokenCreateRequestUser = {
  client_user_id: string
  legal_name?: string | undefined
  name?: { given_name: GivenNameField; family_name: FamilyNameField } | undefined
  phone_number?: string | undefined
  phone_number_verified_time?: (string | null) | undefined
  email_address?: string | undefined
  email_address_verified_time?: (string | null) | undefined
  ssn?: string | undefined
  date_of_birth?: (string | null) | undefined
  address?:
    | {
        street?: StreetNullable | undefined
        street2?: Street2 | undefined
        city?: CityNullable | undefined
        region?: Region | undefined
        postal_code?: PostalCode | undefined
        country: GenericCountryCode
      }
    | undefined
  id_number?: { value: IDNumberValue; type: IDNumberType } | undefined
}
type LinkTokenCreateRequestAppearanceMode = 'LIGHT' | 'DARK' | 'SYSTEM' | null
type LinkTokenCreateRequestRedirectUri = string
type LinkTokenCreateInstitutionData = {
  routing_number?: string | undefined
  institution_id?: string | undefined
}
type LinkTokenCreateCardSwitch = { card_bin: string }
type DepositoryAccountSubtypes = DepositoryAccountSubtype[]
type LimitedPurposeType = 'RENT_MORTGAGE' | 'AUTO_LOAN' | 'GENERAL_PURPOSE'
type LimitedPurposeTypes = LimitedPurposeType[]
type DepositoryFilter = {
  account_subtypes: DepositoryAccountSubtypes
  limited_purpose_types?: LimitedPurposeTypes | undefined
}
type CreditAccountSubtype = 'credit card' | 'paypal' | 'all'
type CreditAccountSubtypes = CreditAccountSubtype[]
type CreditFilter = { account_subtypes: CreditAccountSubtypes }
type LoanAccountSubtype =
  | 'auto'
  | 'business'
  | 'commercial'
  | 'commercial line of credit'
  | 'construction'
  | 'consumer'
  | 'home equity'
  | 'home equity loan'
  | 'loan'
  | 'mortgage'
  | 'overdraft'
  | 'line of credit'
  | 'student'
  | 'other'
  | 'all'
type LoanAccountSubtypes = LoanAccountSubtype[]
type LoanFilter = { account_subtypes: LoanAccountSubtypes }
type InvestmentAccountSubtype =
  | '529'
  | '530a'
  | '401a'
  | '401k'
  | '403B'
  | '457b'
  | 'brokerage'
  | 'cash isa'
  | 'crypto exchange'
  | 'education savings account'
  | 'fhsa'
  | 'fixed annuity'
  | 'gic'
  | 'health reimbursement arrangement'
  | 'hsa'
  | 'ira'
  | 'isa'
  | 'keogh'
  | 'lif'
  | 'life insurance'
  | 'line of credit'
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
  | 'prediction market'
  | 'prif'
  | 'profit sharing plan'
  | 'qshr'
  | 'rdsp'
  | 'resp'
  | 'retirement'
  | 'rlif'
  | 'roth'
  | 'roth 401k'
  | 'roth 403B'
  | 'roth 457b'
  | 'roth pension'
  | 'roth profit sharing plan'
  | 'roth thrift savings plan'
  | 'rrif'
  | 'rrsp'
  | 'sarsep'
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
  | 'all'
type InvestmentAccountSubtypes = InvestmentAccountSubtype[]
type InvestmentFilter = { account_subtypes: InvestmentAccountSubtypes }
type OtherAccountSubtype = 'other' | 'all'
type OtherAccountSubtypes = OtherAccountSubtype[]
type OtherFilter = { account_subtypes: OtherAccountSubtypes }
type LinkTokenAccountFilters = {
  depository?: DepositoryFilter | undefined
  credit?: CreditFilter | undefined
  loan?: LoanFilter | undefined
  investment?: InvestmentFilter | undefined
  other?: OtherFilter | undefined
}
type LinkTokenEUConfig = { headless?: boolean | undefined }
type LinkTokenCreateRequestPaymentConfiguration = {
  amount: string
  description?: string | undefined
}
type LinkTokenCreateRequestPaymentInitiation = {
  payment_id?: string | undefined
  consent_id?: string | undefined
}
type EmploymentSourceType = 'bank' | 'payroll'
type LinkTokenCreateRequestEmploymentBankIncome = { days_requested: number }
type LinkTokenCreateRequestEmployment = {
  employment_source_types?: EmploymentSourceType[] | undefined
  bank_employment?: LinkTokenCreateRequestEmploymentBankIncome | undefined
}
type LinkTokenCreateRequestIncomeVerificationBankIncome = {
  days_requested: number
  enable_multiple_items?: (boolean | null) | undefined
}
type IncomeVerificationPayrollFlowType = 'payroll_digital_income' | 'payroll_document_income'
type IncomeVerificationDocParsingConfig = 'ocr' | 'risk_signals'
type LinkTokenCreateRequestIncomeVerificationPayrollIncome = {
  flow_types?: (IncomeVerificationPayrollFlowType[] | null) | undefined
  is_update_mode?: boolean | undefined
  item_id_to_update?: (string | null) | undefined
  parsing_config?: (IncomeVerificationDocParsingConfig[] | null) | undefined
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
type UserStatedIncomeSourcePayType = 'UNKNOWN' | 'GROSS' | 'NET'
type UserStatedIncomeSourceFrequency =
  | 'UNKNOWN'
  | 'WEEKLY'
  | 'BIWEEKLY'
  | 'SEMI_MONTHLY'
  | 'MONTHLY'
type LinkTokenCreateRequestUserStatedIncomeSource = {
  employer?: string | undefined
  category?: UserStatedIncomeSourceCategory | undefined
  pay_per_cycle?: number | undefined
  pay_annual?: number | undefined
  pay_type?: UserStatedIncomeSourcePayType | undefined
  pay_frequency?: UserStatedIncomeSourceFrequency | undefined
}
type LinkTokenCreateRequestIncomeVerification = {
  income_verification_id?: string | undefined
  asset_report_id?: string | undefined
  access_tokens?: (AccessToken[] | null) | undefined
  income_source_types?: IncomeVerificationSourceType[] | undefined
  bank_income?: LinkTokenCreateRequestIncomeVerificationBankIncome | undefined
  payroll_income?: LinkTokenCreateRequestIncomeVerificationPayrollIncome | undefined
  stated_income_sources?: LinkTokenCreateRequestUserStatedIncomeSource[] | undefined
}
type LinkTokenCreateRequestBaseReport = {
  days_requested: number
  client_report_id?: (string | null) | undefined
}
type LinkTokenCreateRequestCreditPartnerInsights = { days_requested?: number | undefined }
type LinkTokenCreateRequestCraOptionsPartnerInsights = {
  prism_versions?: PrismVersions | undefined
  fico?: CraPartnerInsightsFicoInput | undefined
}
type LinkTokenCreateRequestCraOptionsBaseReportGSEOptions = { report_types: GSEReportType[] } | null
type LinkTokenCreateRequestCraOptionsBaseReport = {
  client_report_id?: (string | null) | undefined
  gse_options?: LinkTokenCreateRequestCraOptionsBaseReportGSEOptions | undefined
  require_identity?: (boolean | null) | undefined
  home_lending_report_options?: CraCheckReportHomeLendingReportOptions | undefined
  exclude_transactions?: (boolean | null) | undefined
  base_report_version?: {} | undefined
}
type LinkTokenCreateRequestCraOptionsCashflowInsights = {
  attributes_version?: CashflowAttributesVersion | undefined
}
type LinkTokenCreateRequestCraOptionsLendScore = {
  lend_score_version?: PlaidLendScoreVersion | undefined
}
type LinkTokenCreateRequestCraOptionsNetworkInsights = {
  network_insights_version?: NetworkInsightsVersion | undefined
}
type LinkTokenCreateRequestCraOptionsIncomeInsights = {
  income_insights_filter?: IncomeInsightsFilter | undefined
  income_insights_version: IncomeInsightsVersion
}
type LinkTokenCreateRequestCraOptions = {
  days_requested: number
  days_required?: number | undefined
  client_report_id?: (string | null) | undefined
  partner_insights?: LinkTokenCreateRequestCraOptionsPartnerInsights | undefined
  base_report?: LinkTokenCreateRequestCraOptionsBaseReport | undefined
  cashflow_insights?: LinkTokenCreateRequestCraOptionsCashflowInsights | undefined
  lend_score?: LinkTokenCreateRequestCraOptionsLendScore | undefined
  network_insights?: LinkTokenCreateRequestCraOptionsNetworkInsights | undefined
  include_investments?: (boolean | null) | undefined
  income_insights?: LinkTokenCreateRequestCraOptionsIncomeInsights | undefined
}
type LinkTokenCreateRequestCraReportParameter = {
  scope: {}
  decision_stage: CraReportDecisionStage
  client_report_id?: (string | null) | undefined
  days_requested?: (number | null) | undefined
  days_required?: (number | null) | undefined
  include_investments?: (boolean | null) | undefined
  include_identity_match?: (boolean | null) | undefined
  products?: CraReportProduct[] | undefined
}
type LinkTokenCreateRequestAuth = {
  auth_type_select_enabled?: boolean | undefined
  automated_microdeposits_enabled?: boolean | undefined
  instant_match_enabled?: boolean | undefined
  same_day_microdeposits_enabled?: boolean | undefined
  instant_microdeposits_enabled?: boolean | undefined
  reroute_to_credentials?: 'OFF' | 'OPTIONAL' | 'FORCED' | undefined
  database_match_enabled?: boolean | undefined
  database_insights_enabled?: boolean | undefined
  flow_type?: 'FLEXIBLE_AUTH' | undefined
  sms_microdeposits_verification_enabled?: boolean | undefined
}
type LinkTokenCreateRequestTransfer = {
  intent_id?: string | undefined
  authorization_id?: string | undefined
  payment_profile_token?: string | undefined
}
type LinkTokenCreateRequestUpdate = {
  account_selection_enabled?: boolean | undefined
  reauthorization_enabled?: boolean | undefined
  user?: boolean | undefined
  item_ids?: (ItemId[] | null) | undefined
}
type LinkTokenCreateRequestIdentityVerification = {
  template_id: {}
  consent?: {} | undefined
  gave_consent?: IdentityVerificationConsent | undefined
}
type LinkTokenCreateRequestStatements = { start_date: string; end_date: string }
type LinkTokenInvestments = {
  allow_unverified_crypto_wallets?: boolean | undefined
  allow_manual_entry?: boolean | undefined
  async_update?: (boolean | null) | undefined
}
type LinkTokenInvestmentsAuth = {
  manual_entry_enabled?: (boolean | null) | undefined
  masked_number_match_enabled?: (boolean | null) | undefined
  stated_account_number_enabled?: (boolean | null) | undefined
  rollover_401k_enabled?: (boolean | null) | undefined
}
type HostedLinkDeliveryMethod = 'sms' | 'email'
type HostedLinkCompletionRedirectURI = string
type HostedLinkURLLifetimeSeconds = number
type HostedLinkIsMobileApp = boolean
type LinkTokenCreateHostedLink = {
  delivery_method?: HostedLinkDeliveryMethod | undefined
  completion_redirect_uri?: HostedLinkCompletionRedirectURI | undefined
  url_lifetime_seconds?: HostedLinkURLLifetimeSeconds | undefined
  is_mobile_app?: HostedLinkIsMobileApp | undefined
}
type LinkTokenTransactions = { days_requested?: number | undefined }
type LinkTokenCashflowReport = { days_requested?: number | undefined }
type LinkTokenCreateIdentity = {
  is_document_upload?: boolean | undefined
  account_ids?: string[] | undefined
  parsing_configs?: IncomeVerificationDocParsingConfig[] | undefined
}
type LinkTokenCreateRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  client_name: string
  language: string
  country_codes: CountryCode[]
  user?: LinkTokenCreateRequestUser | undefined
  user_id?: string | undefined
  products?: (Products[] | null) | undefined
  required_if_supported_products?: (Products[] | null) | undefined
  optional_products?: (Products[] | null) | undefined
  additional_consented_products?: (Products[] | null) | undefined
  webhook?: string | undefined
  access_token?: (string | null) | undefined
  access_tokens?: string[] | undefined
  link_customization_name?: string | undefined
  appearance_mode?: LinkTokenCreateRequestAppearanceMode | undefined
  redirect_uri?: LinkTokenCreateRequestRedirectUri | undefined
  android_package_name?: string | undefined
  institution_data?: LinkTokenCreateInstitutionData | undefined
  card_switch?: LinkTokenCreateCardSwitch | undefined
  account_filters?: LinkTokenAccountFilters | undefined
  eu_config?: LinkTokenEUConfig | undefined
  institution_id?: string | undefined
  payment_configuration?: LinkTokenCreateRequestPaymentConfiguration | undefined
  payment_initiation?: LinkTokenCreateRequestPaymentInitiation | undefined
  employment?: LinkTokenCreateRequestEmployment | undefined
  income_verification?: LinkTokenCreateRequestIncomeVerification | undefined
  base_report?: LinkTokenCreateRequestBaseReport | undefined
  credit_partner_insights?: LinkTokenCreateRequestCreditPartnerInsights | undefined
  cra_options?: LinkTokenCreateRequestCraOptions | undefined
  cra_report_parameter?: LinkTokenCreateRequestCraReportParameter | undefined
  consumer_report_permissible_purpose?: ConsumerReportPermissiblePurpose | undefined
  auth?: LinkTokenCreateRequestAuth | undefined
  transfer?: LinkTokenCreateRequestTransfer | undefined
  update?: LinkTokenCreateRequestUpdate | undefined
  identity_verification?: LinkTokenCreateRequestIdentityVerification | undefined
  statements?: LinkTokenCreateRequestStatements | undefined
  third_party_user_token?: string | undefined
  investments?: LinkTokenInvestments | undefined
  investments_auth?: LinkTokenInvestmentsAuth | undefined
  hosted_link?: LinkTokenCreateHostedLink | undefined
  transactions?: LinkTokenTransactions | undefined
  cashflow_report?: LinkTokenCashflowReport | undefined
  cra_enabled?: boolean | undefined
  identity?: LinkTokenCreateIdentity | undefined
  financekit_supported?: boolean | undefined
  enable_multi_item_link?: boolean | undefined
  user_token?: string | undefined
}
type LinkTokenCreateResponse = {
  link_token: string
  expiration: string
  request_id: RequestID
  hosted_link_url?: string | undefined
  user_id?: NewUserID | undefined
}
type LinkTokenGetRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  link_token: string
}
type LinkSessionSuccessMetadataInstitution = {
  name?: string | undefined
  institution_id?: string | undefined
} | null
type LinkSessionSuccessMetadataAccount = {
  id?: string | undefined
  name?: string | undefined
  mask?: (string | null) | undefined
  type?: string | undefined
  subtype?: string | undefined
  verification_status?: (string | null) | undefined
  class_type?: (string | null) | undefined
}
type LinkSessionSuccessMetadataTransferStatus = 'COMPLETE' | 'INCOMPLETE' | null
type LinkSessionSuccessMetadata = {
  institution?: LinkSessionSuccessMetadataInstitution | undefined
  accounts?: LinkSessionSuccessMetadataAccount[] | undefined
  link_session_id?: string | undefined
  session_group_id?: string | undefined
  transfer_status?: LinkSessionSuccessMetadataTransferStatus | undefined
} | null
type LinkSessionSuccess = { public_token: string; metadata: LinkSessionSuccessMetadata } | null
type LinkSessionExitMetadataInstitution = {
  name?: string | undefined
  institution_id?: string | undefined
} | null
type LinkSessionExitMetadata = {
  institution?: LinkSessionExitMetadataInstitution | undefined
  status?: string | undefined
  link_session_id?: string | undefined
  request_id?: string | undefined
} | null
type LinkSessionExitDeprecated = { error: PlaidError; metadata: LinkSessionExitMetadata } | null
type LinkSessionExit = { error: PlaidError; metadata: LinkSessionExitMetadata } | null
type LinkEventMetadata = {
  error_code?: string | undefined
  error_message?: string | undefined
  error_type?: string | undefined
  exit_status?: string | undefined
  institution_id?: string | undefined
  institution_name?: string | undefined
  institution_search_query?: string | undefined
  request_id?: string | undefined
  mfa_type?: string | undefined
  view_name?: string | undefined
  selection?: string | undefined
  brand_name?: string | undefined
  match_reason?: string | undefined
  routing_number?: string | undefined
  account_number_mask?: string | undefined
}
type LinkEvent = {
  event_name: string
  timestamp: string
  event_id: string
  event_metadata: LinkEventMetadata
}
type LinkSessionItemAddResult = {
  public_token: string
  accounts: LinkSessionSuccessMetadataAccount[]
  institution: LinkSessionSuccessMetadataInstitution
}
type LinkSessionCraItemAddResult = {
  item_id: string
  accounts: LinkSessionSuccessMetadataAccount[]
  institution: LinkSessionSuccessMetadataInstitution
}
type LinkSessionCraUpdateResult = {
  item_id: string
  accounts: LinkSessionSuccessMetadataAccount[]
  institution: LinkSessionSuccessMetadataInstitution
}
type LinkSessionBankIncomeResult = {
  status: CreditSessionBankIncomeStatus
  item_id: string
  institution: LinkSessionSuccessMetadataInstitution
}
type LinkSessionPayrollIncomeResult = {
  num_paystubs_retrieved: number
  num_w2s_retrieved: number
  institution: LinkSessionSuccessMetadataInstitution
}
type LinkSessionCraReportResult = { report_id: {} } | null
type LinkSessionResults = {
  item_add_results: LinkSessionItemAddResult[]
  cra_item_add_results: LinkSessionCraItemAddResult[]
  cra_update_results: LinkSessionCraUpdateResult[]
  bank_income_results: LinkSessionBankIncomeResult[]
  payroll_income_results: LinkSessionPayrollIncomeResult[]
  document_income_results: CreditSessionDocumentIncomeResult
  cra_document_upload_results?: { num_bank_statements_uploaded: number } | undefined
  cra_report_results: LinkSessionCraReportResult
} | null
type LinkTokenGetSessionsResponse = {
  link_session_id: string
  started_at?: string | undefined
  finished_at?: (string | null) | undefined
  on_success?: LinkSessionSuccess | undefined
  on_exit?: LinkSessionExitDeprecated | undefined
  exit?: LinkSessionExit | undefined
  events?: LinkEvent[] | undefined
  results?: LinkSessionResults | undefined
}
type LinkTokenGetMetadataResponse = {
  initial_products: Products[]
  webhook: string | null
  country_codes: CountryCode[]
  language: string | null
  institution_data?:
    | { routing_number?: string | undefined; institution_id?: string | undefined }
    | undefined
  account_filters?:
    | {
        depository?:
          | {
              account_subtypes: DepositoryAccountSubtypes
              limited_purpose_types?: LimitedPurposeTypes | undefined
            }
          | undefined
        credit?: { account_subtypes: CreditAccountSubtypes } | undefined
        loan?: { account_subtypes: LoanAccountSubtypes } | undefined
        investment?: { account_subtypes: InvestmentAccountSubtypes } | undefined
      }
    | undefined
  redirect_uri: string | null
  client_name: string | null
}
type LinkTokenGetResponse = {
  link_token: string
  created_at: string | null
  expiration: string | null
  link_sessions?: LinkTokenGetSessionsResponse[] | undefined
  metadata: LinkTokenGetMetadataResponse
  user_id?: NewUserID | undefined
  request_id: RequestID
}
type LinkOAuthCorrelationIdExchangeRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  link_correlation_id: string
}
type LinkOAuthCorrelationIdExchangeResponse = { link_token: string; request_id: RequestID }
type SessionTokenCreateRequestUser = { client_user_id: string; user_id?: {} | undefined }
type SessionTokenCreateRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  template_id: string
  user?: SessionTokenCreateRequestUser | undefined
  redirect_uri?: LinkTokenCreateRequestRedirectUri | undefined
  android_package_name?: string | undefined
  webhook?: string | undefined
  user_id?: NewUserID | undefined
}
type SessionTokenCreateResponseLink = {
  link_token: string
  expiration: string
  user_id?: NewUserID | undefined
}
type SessionTokenCreateResponse = {
  request_id: RequestID
  link?: SessionTokenCreateResponseLink | undefined
}
type TransferID = string
type TransferAuthorizationID = string
type TransferGetRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  transfer_id?: TransferID | undefined
  authorization_id?: TransferAuthorizationID | undefined
  originator_client_id?: (string | null) | undefined
}
type TransferFundingAccountIDResponseNullable = string | null
type TransferLedgerID = string | null
type TransferType = 'debit' | 'credit'
type TransferUserAddressInResponse = {
  street: string | null
  city: string | null
  region: string | null
  postal_code: string | null
  country: string | null
} | null
type TransferUserInResponse = {
  legal_name: string
  phone_number: string | null
  email_address: string | null
  address: TransferUserAddressInResponse
}
type TransferAmount = string
type TransferStatus =
  | 'pending'
  | 'posted'
  | 'settled'
  | 'funds_available'
  | 'cancelled'
  | 'failed'
  | 'returned'
type TransferSweepStatus = null | 'unswept' | 'swept' | 'swept_settled' | 'return_swept'
type TransferNetwork = 'ach' | 'same-day-ach' | 'rtp' | 'wire' | 'rfp'
type TransferWireDetails = {
  message_to_beneficiary?: (string | null) | undefined
  wire_return_fee?: (string | null) | undefined
} | null
type TransferFailure = {
  failure_code?: (string | null) | undefined
  ach_return_code?: (string | null) | undefined
  description?: string | undefined
} | null
type TransferMetadata = { [x: string]: string } | null
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
type TransferGuaranteeScheduleItem = {
  amount: string
  observation_window_business_days: number
  observation_window_expiration_time?: (string | null) | undefined
}
type TransferGuaranteeDetails = {
  guaranteed_amount: string
  schedule: TransferGuaranteeScheduleItem[]
} | null
type TransferRefundID = string
type TransferIDForRefund = string
type TransferRefundAmount = string
type TransferRefundStatus = 'pending' | 'posted' | 'cancelled' | 'failed' | 'settled' | 'returned'
type TransferRefundFailure = {
  failure_code?: (string | null) | undefined
  ach_return_code?: (string | null) | undefined
  description?: string | undefined
} | null
type TransferNetworkTraceID = string | null
type TransferRefund = {
  id: TransferRefundID
  transfer_id: TransferIDForRefund
  amount: TransferRefundAmount
  status: TransferRefundStatus
  failure_reason: TransferRefundFailure
  ledger_id?: TransferLedgerID | undefined
  created: string
  network_trace_id?: TransferNetworkTraceID | undefined
}
type TransferExpectedSweepSettlementScheduleItem = {
  sweep_settlement_date: string
  swept_settled_amount: string
}
type TransferFacilitatorFee = string
type Transfer = {
  id: TransferID
  authorization_id: TransferAuthorizationID
  ach_class?: ACHClass | undefined
  account_id?: string | undefined
  funding_account_id: TransferFundingAccountIDResponseNullable
  ledger_id?: TransferLedgerID | undefined
  type: TransferType
  user: TransferUserInResponse
  amount: TransferAmount
  description: string
  created: string
  status: TransferStatus
  sweep_status?: TransferSweepStatus | undefined
  network: TransferNetwork
  wire_details?: TransferWireDetails | undefined
  cancellable: boolean
  failure_reason: TransferFailure
  metadata: TransferMetadata
  origination_account_id: string
  guarantee_decision: {}
  guarantee_decision_rationale: TransferAuthorizationGuaranteeDecisionRationale
  guarantee_details?: TransferGuaranteeDetails | undefined
  iso_currency_code: string
  standard_return_window: string | null
  unauthorized_return_window: string | null
  expected_settlement_date: string | null
  expected_funds_available_date?: (string | null) | undefined
  originator_client_id: string | null
  refunds: TransferRefund[]
  recurring_transfer_id: string | null
  expected_sweep_settlement_schedule?: TransferExpectedSweepSettlementScheduleItem[] | undefined
  credit_funds_source: {}
  facilitator_fee?: TransferFacilitatorFee | undefined
  network_trace_id?: TransferNetworkTraceID | undefined
}
type TransferGetResponse = { transfer: Transfer; request_id: RequestID }
type RecurringTransferID = string
type TransferRecurringGetRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  recurring_transfer_id: RecurringTransferID
}
type TransferRecurringStatus = 'active' | 'cancelled' | 'expired'
type TransferRecurringNetwork = 'ach' | 'same-day-ach' | 'rtp'
type TransferFundingAccountIDResponse = string
type TransferScheduleIntervalUnit = 'week' | 'month'
type TransferScheduleIntervalCount = number
type TransferRecurringSchedule = {
  interval_unit: TransferScheduleIntervalUnit
  interval_count: TransferScheduleIntervalCount
  interval_execution_day: number
  start_date: string
  end_date?: (string | null) | undefined
}
type RecurringTransfer = {
  recurring_transfer_id: RecurringTransferID
  created: string
  next_origination_date: string | null
  test_clock_id?: (string | null) | undefined
  type: TransferType
  amount: TransferAmount
  status: TransferRecurringStatus
  ach_class?: ACHClass | undefined
  network: TransferRecurringNetwork
  origination_account_id: string
  account_id: string
  funding_account_id: TransferFundingAccountIDResponse
  iso_currency_code: string
  description: string
  transfer_ids: TransferID[]
  user: TransferUserInResponse
  schedule: TransferRecurringSchedule
}
type TransferRecurringGetResponse = { recurring_transfer: RecurringTransfer; request_id: RequestID }
type BankTransferGetRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  bank_transfer_id: BankTransferID
}
type BankTransferGetResponse = { bank_transfer: BankTransfer; request_id: RequestID }
type TransferAccessToken = string
type TransferAccountID = string
type TransferMigratedFundingAccountIDRequest = string | null
type TransferPaymentProfileToken = string
type TransferUserAddressInRequest = {
  street?: string | undefined
  city?: string | undefined
  region?: string | undefined
  postal_code?: string | undefined
  country?: string | undefined
}
type TransferAuthorizationUserInRequest = {
  legal_name: string
  phone_number?: string | undefined
  email_address?: string | undefined
  address?: TransferUserAddressInRequest | undefined
}
type TransferAuthorizationDevice = {
  ip_address?: string | undefined
  user_agent?: string | undefined
}
type TransferAuthorizationIdempotencyKey = string | null
type TransferAuthorizationCustomAttributes = { [x: string]: string } | null
type TransferAuthorizationCreateRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  access_token: TransferAccessToken
  account_id: TransferAccountID
  funding_account_id?: TransferMigratedFundingAccountIDRequest | undefined
  ledger_id?: (string | null) | undefined
  payment_profile_token?: TransferPaymentProfileToken | undefined
  type: TransferType
  network: TransferNetwork
  amount: TransferAmount
  ach_class?: ACHClass | undefined
  wire_details?: TransferWireDetails | undefined
  user: TransferAuthorizationUserInRequest
  user_id?: {} | undefined
  device?: TransferAuthorizationDevice | undefined
  origination_account_id?: string | undefined
  iso_currency_code?: string | undefined
  idempotency_key?: TransferAuthorizationIdempotencyKey | undefined
  user_present?: (boolean | null) | undefined
  with_guarantee?: (boolean | null) | undefined
  request_guarantee?: (boolean | null) | undefined
  beacon_session_id?: (string | null) | undefined
  originator_client_id?: (string | null) | undefined
  credit_funds_source?: {} | undefined
  test_clock_id?: (string | null) | undefined
  ruleset_key?: (string | null) | undefined
  custom_attributes?: TransferAuthorizationCustomAttributes | undefined
  user_attributes?:
    | {
        account_created_time?: (string | null) | undefined
        successful_payment_count?: (bigint | null) | undefined
      }
    | undefined
}
type TransferAuthorizationDecision = 'approved' | 'declined' | 'user_action_required'
type TransferAuthorizationDecisionRationaleCode =
  | 'NSF'
  | 'RISK'
  | 'TRANSFER_LIMIT_REACHED'
  | 'MANUALLY_VERIFIED_ITEM'
  | 'ITEM_LOGIN_REQUIRED'
  | 'PAYMENT_PROFILE_LOGIN_REQUIRED'
  | 'ERROR'
  | 'MIGRATED_ACCOUNT_ITEM'
  | 'ADMIN'
  | 'FRAUD'
  | null
type TransferAuthorizationDecisionRationale = {
  code: TransferAuthorizationDecisionRationaleCode
  description: string
} | null
type TransferGuaranteeOutcome =
  | 'FULL_INSTANT'
  | 'PARTIAL_INSTANT_ONLY'
  | 'PARTIAL_INSTANT_WITH_OBSERVATION_WINDOW'
  | 'NOT_GUARANTEED'
type AuthorizationGuaranteeScheduleItem = {
  amount: string
  observation_window_business_days: number
}
type AuthorizationGuaranteeDetails = {
  outcome: TransferGuaranteeOutcome
  schedule: AuthorizationGuaranteeScheduleItem[]
} | null
type TransferAuthorizationRiskLevel =
  | 'HIGH_RISK'
  | 'MEDIUM_HIGH_RISK'
  | 'MEDIUM_RISK'
  | 'MEDIUM_LOW_RISK'
  | 'LOW_RISK'
type TransferAuthorizationPaymentRisk = {
  bank_initiated_return_score: number | null
  customer_initiated_return_score: number | null
  risk_level: TransferAuthorizationRiskLevel
  warnings: SignalWarning[]
} | null
type TransferAuthorizationProposedTransfer = {
  ach_class?: ACHClass | undefined
  account_id?: string | undefined
  funding_account_id: TransferFundingAccountIDResponseNullable
  ledger_id?: TransferLedgerID | undefined
  type: TransferType
  user: TransferUserInResponse
  amount: TransferAmount
  requested_amount: string
  network: string
  wire_details?: TransferWireDetails | undefined
  origination_account_id: string
  iso_currency_code: string
  originator_client_id: string | null
  credit_funds_source: {}
}
type TransferAuthorization = {
  id: TransferAuthorizationID
  created: string
  decision: TransferAuthorizationDecision
  decision_rationale: TransferAuthorizationDecisionRationale
  guarantee_decision: {}
  guarantee_decision_rationale: TransferAuthorizationGuaranteeDecisionRationale
  guarantee_details?: AuthorizationGuaranteeDetails | undefined
  payment_risk: TransferAuthorizationPaymentRisk
  proposed_transfer: TransferAuthorizationProposedTransfer
}
type TransferAuthorizationCreateResponse = {
  authorization: TransferAuthorization
  request_id: RequestID
}
type TransferAuthorizationCancelRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  authorization_id: TransferAuthorizationID
}
type TransferAuthorizationCancelResponse = { request_id: RequestID }
type TransferBalanceType = 'prefunded_rtp_credits' | 'prefunded_ach_credits'
type TransferBalanceGetRequest = {
  client_id?: APIClientID | undefined
  originator_client_id?: (string | null) | undefined
  secret?: APISecret | undefined
  type?: TransferBalanceType | undefined
}
type TransferBalance = {
  available: string
  current?: string | undefined
  type: TransferBalanceType
}
type TransferBalanceGetResponse = { balance: TransferBalance; request_id: RequestID }
type PaymentProfileToken = string
type TransferCapabilitiesGetRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  access_token: TransferAccessToken
  account_id: TransferAccountID
  payment_profile_token?: PaymentProfileToken | undefined
}
type TransferCapabilitiesGetRTP = { credit?: boolean | undefined }
type TransferCapabilitiesGetRfP = {
  debit?: boolean | undefined
  max_amount?: (string | null) | undefined
  iso_currency_code?: (string | null) | undefined
}
type InstitutionSupportedNetworks = {
  rtp: TransferCapabilitiesGetRTP
  rfp: TransferCapabilitiesGetRfP
}
type TransferCapabilitiesGetResponse = {
  institution_supported_networks: InstitutionSupportedNetworks
  request_id: RequestID
}
type TransferConfigurationGetRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  originator_client_id?: (string | null) | undefined
}
type TransferConfigurationGetResponse = {
  request_id: RequestID
  max_single_transfer_amount: string
  max_single_transfer_credit_amount: string
  max_single_transfer_debit_amount: string
  max_daily_credit_amount: string
  max_daily_debit_amount: string
  max_monthly_amount: string
  max_monthly_credit_amount: string
  max_monthly_debit_amount: string
  iso_currency_code: string
}
type TransferLedgerGetRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  ledger_id?: (string | null) | undefined
  originator_client_id?: (string | null) | undefined
}
type TransferLedgerBalance = { available: string; pending: string }
type TransferLedgerGetResponse = {
  ledger_id: string
  balance: TransferLedgerBalance
  name: string
  is_default: boolean
  request_id: RequestID
}
type LedgerDistributeIdempotencyKey = string
type TransferLedgerDistributeRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  from_ledger_id: string
  to_ledger_id: string
  amount: string
  idempotency_key: LedgerDistributeIdempotencyKey
  description?: string | undefined
}
type TransferLedgerDistributeResponse = { request_id: RequestID }
type TransferOriginatorClientID = string | null
type TransferLedgerFundingAccountIDRequest = string | null
type SweepDescription = string | null
type LedgerDepositIdempotencyKey = string
type TransferACHNetwork = 'ach' | 'same-day-ach'
type TransferLedgerDepositRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  originator_client_id?: TransferOriginatorClientID | undefined
  funding_account_id?: TransferLedgerFundingAccountIDRequest | undefined
  ledger_id?: (string | null) | undefined
  amount: string
  description?: SweepDescription | undefined
  idempotency_key: LedgerDepositIdempotencyKey
  network: TransferACHNetwork
}
type SweepStatus =
  | 'pending'
  | 'posted'
  | 'settled'
  | 'funds_available'
  | 'returned'
  | 'failed'
  | null
type SweepTrigger = 'manual' | 'incoming' | 'balance_threshold' | 'automatic_aggregate'
type SweepFailure = {
  failure_code?: (string | null) | undefined
  description?: (string | null) | undefined
} | null
type TransferSweep = {
  id: string
  funding_account_id: TransferFundingAccountIDResponse
  ledger_id?: TransferLedgerID | undefined
  created: string
  amount: string
  iso_currency_code: string
  settled: string | null
  expected_funds_available_date?: (string | null) | undefined
  status?: SweepStatus | undefined
  trigger?: SweepTrigger | undefined
  description?: string | undefined
  network_trace_id?: TransferNetworkTraceID | undefined
  failure_reason?: SweepFailure | undefined
}
type TransferLedgerDepositResponse = { sweep: TransferSweep; request_id: RequestID }
type LedgerWithdrawIdempotencyKey = string
type TransferLedgerWithdrawRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  originator_client_id?: TransferOriginatorClientID | undefined
  funding_account_id?: TransferLedgerFundingAccountIDRequest | undefined
  ledger_id?: (string | null) | undefined
  amount: string
  description?: SweepDescription | undefined
  idempotency_key: LedgerWithdrawIdempotencyKey
  network: {}
}
type TransferLedgerWithdrawResponse = { sweep: TransferSweep; request_id: RequestID }
type TransferFundingAccount = { access_token: AccessToken; account_id: string }
type TransferOriginatorFundingAccountUpdateRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  originator_client_id: string
  funding_account: TransferFundingAccount
}
type TransferOriginatorFundingAccountUpdateResponse = { request_id: RequestID }
type TransferFundingAccountWithDisplayName = {
  access_token: AccessToken
  account_id: string
  display_name?: string | undefined
}
type TransferOriginatorFundingAccountCreateRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  originator_client_id: string
  funding_account: TransferFundingAccountWithDisplayName
}
type TransferOriginatorFundingAccountCreateResponse = {
  funding_account_id?: TransferFundingAccountIDResponse | undefined
  request_id: RequestID
}
type TransferMetricsGetRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  originator_client_id?: (string | null) | undefined
}
type TransferMetricsGetReturnRatesOverInterval = {
  overall_return_rate?: string | undefined
  unauthorized_return_rate?: string | undefined
  administrative_return_rate?: string | undefined
} | null
type TransferMetricsGetReturnRates = {
  last_60d?: TransferMetricsGetReturnRatesOverInterval | undefined
} | null
type TransferMetricsGetAuthorizationUsage = {
  daily_credit_utilization?: string | undefined
  daily_debit_utilization?: string | undefined
  monthly_credit_utilization?: string | undefined
  monthly_debit_utilization?: string | undefined
} | null
type TransferMetricsGetResponse = {
  request_id: RequestID
  daily_debit_transfer_volume: string
  daily_credit_transfer_volume: string
  monthly_transfer_volume: string
  monthly_debit_transfer_volume: string
  monthly_credit_transfer_volume: string
  iso_currency_code: string
  return_rates?: TransferMetricsGetReturnRates | undefined
  authorization_usage?: TransferMetricsGetAuthorizationUsage | undefined
}
type TransferCreateIdempotencyKey = string
type TransferUserInRequestDeprecated = {
  legal_name?: string | undefined
  phone_number?: string | undefined
  email_address?: string | undefined
  address?: TransferUserAddressInRequest | undefined
} | null
type TransferCreateRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  idempotency_key?: TransferCreateIdempotencyKey | undefined
  access_token: TransferAccessToken
  account_id: TransferAccountID
  authorization_id: string
  type?: {} | undefined
  network?: {} | undefined
  amount?: TransferAmount | undefined
  description: string
  ach_class?: {} | undefined
  user?: TransferUserInRequestDeprecated | undefined
  metadata?: TransferMetadata | undefined
  origination_account_id?: (string | null) | undefined
  iso_currency_code?: string | undefined
  test_clock_id?: (string | null) | undefined
  facilitator_fee?: TransferFacilitatorFee | undefined
}
type TransferCreateResponse = { transfer: Transfer; request_id: RequestID }
type TransferRecurringIdempotencyKey = string
type TransferUserInRequest = {
  legal_name: string
  phone_number?: string | undefined
  email_address?: string | undefined
  address?: TransferUserAddressInRequest | undefined
}
type TransferDevice = { ip_address: string; user_agent: string }
type TransferRecurringCreateRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  access_token: TransferAccessToken
  idempotency_key: TransferRecurringIdempotencyKey
  account_id: TransferAccountID
  funding_account_id?: (string | null) | undefined
  type: TransferType
  network: TransferRecurringNetwork
  ach_class?: ACHClass | undefined
  amount: TransferAmount
  user_present?: (boolean | null) | undefined
  iso_currency_code?: string | undefined
  description: string
  test_clock_id?: (string | null) | undefined
  schedule: TransferRecurringSchedule
  user: TransferUserInRequest
  device?: TransferDevice | undefined
}
type RecurringTransferNullable = {
  recurring_transfer_id: RecurringTransferID
  created: string
  next_origination_date: string | null
  test_clock_id?: (string | null) | undefined
  type: TransferType
  amount: TransferAmount
  status: TransferRecurringStatus
  ach_class?: ACHClass | undefined
  network: TransferRecurringNetwork
  origination_account_id: string
  account_id: string
  funding_account_id: TransferFundingAccountIDResponse
  iso_currency_code: string
  description: string
  transfer_ids: TransferID[]
  user: TransferUserInResponse
  schedule: TransferRecurringSchedule
}
type TransferRecurringCreateResponse = {
  recurring_transfer?: RecurringTransferNullable | undefined
  decision: TransferAuthorizationDecision
  decision_rationale?: TransferAuthorizationDecisionRationale | undefined
  request_id: RequestID
}
type BankTransferAccessToken = string
type BankTransferCreateRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  idempotency_key: BankTransferIdempotencyKey
  access_token: BankTransferAccessToken
  account_id: string
  type: BankTransferType
  network: BankTransferNetwork
  amount: BankTransferAmount
  iso_currency_code: string
  description: string
  ach_class?: ACHClass | undefined
  user: BankTransferUser
  custom_tag?: (string | null) | undefined
  metadata?: BankTransferMetadata | undefined
  origination_account_id?: (string | null) | undefined
}
type BankTransferCreateResponse = { bank_transfer: BankTransfer; request_id: RequestID }
type TransferListRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  start_date?: (string | null) | undefined
  end_date?: (string | null) | undefined
  count?: number | undefined
  offset?: number | undefined
  origination_account_id?: (string | null) | undefined
  originator_client_id?: (string | null) | undefined
  funding_account_id?: (string | null) | undefined
}
type TransferListResponse = { transfers: Transfer[]; request_id: RequestID }
type TransferRecurringListRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  start_time?: (string | null) | undefined
  end_time?: (string | null) | undefined
  count?: number | undefined
  offset?: number | undefined
  funding_account_id?: (string | null) | undefined
}
type TransferRecurringListResponse = {
  recurring_transfers: RecurringTransfer[]
  request_id: RequestID
}
type BankTransferListRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  start_date?: (string | null) | undefined
  end_date?: (string | null) | undefined
  count?: number | undefined
  offset?: number | undefined
  origination_account_id?: (string | null) | undefined
  direction?: BankTransferDirection | undefined
}
type BankTransferListResponse = { bank_transfers: BankTransfer[]; request_id: RequestID }
type ReasonCode =
  | 'AC03'
  | 'AM09'
  | 'CUST'
  | 'DUPL'
  | 'FRAD'
  | 'TECH'
  | 'UPAY'
  | 'AC14'
  | 'AM06'
  | 'BE05'
  | 'FOCR'
  | 'MS02'
  | 'MS03'
  | 'RR04'
  | 'RUTA'
type TransferCancelRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  transfer_id: TransferID
  originator_client_id?: (string | null) | undefined
  reason_code?: ReasonCode | undefined
}
type TransferCancelResponse = { request_id: RequestID }
type TransferRecurringCancelRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  recurring_transfer_id: RecurringTransferID
}
type TransferRecurringCancelResponse = { request_id: RequestID }
type BankTransferCancelRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  bank_transfer_id: BankTransferID
}
type BankTransferCancelResponse = { request_id: RequestID }
type TransferEventListTransferType = 'debit' | 'credit' | null
type TransferEventType =
  | 'pending'
  | 'cancelled'
  | 'failed'
  | 'posted'
  | 'settled'
  | 'funds_available'
  | 'guaranteed'
  | 'returned'
  | 'adjustment'
  | 'guarantee_reimbursed'
  | 'client_return_recovered'
  | 'plaid_return_recovered'
  | 'swept'
  | 'swept_settled'
  | 'return_swept'
  | 'sweep.pending'
  | 'sweep.posted'
  | 'sweep.settled'
  | 'sweep.returned'
  | 'sweep.failed'
  | 'sweep.funds_available'
  | 'refund.pending'
  | 'refund.cancelled'
  | 'refund.failed'
  | 'refund.posted'
  | 'refund.settled'
  | 'refund.returned'
  | 'refund.swept'
  | 'refund.return_swept'
type TransferEventListRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  start_date?: (string | null) | undefined
  end_date?: (string | null) | undefined
  transfer_id?: (string | null) | undefined
  account_id?: (string | null) | undefined
  transfer_type?: TransferEventListTransferType | undefined
  event_types?: TransferEventType[] | undefined
  sweep_id?: string | undefined
  count?: (number | null) | undefined
  offset?: (number | null) | undefined
  origination_account_id?: (string | null) | undefined
  originator_client_id?: (string | null) | undefined
  funding_account_id?: (string | null) | undefined
}
type OmittableTransferType = 'debit' | 'credit'
type TransferSweepIDNullable = string | null
type TransferSweepAmount = string | null
type TransferEvent = {
  event_id: number
  timestamp: string
  event_type: TransferEventType
  account_id?: string | undefined
  funding_account_id: TransferFundingAccountIDResponseNullable
  ledger_id?: TransferLedgerID | undefined
  transfer_id: string
  origination_account_id: string | null
  transfer_type?: OmittableTransferType | undefined
  transfer_amount?: string | undefined
  failure_reason: TransferFailure
  sweep_id: TransferSweepIDNullable
  sweep_amount: TransferSweepAmount
  event_amount?: (string | null) | undefined
  refund_id: string | null
  originator_client_id: string | null
  intent_id?: (string | null) | undefined
  wire_return_fee?: (string | null) | undefined
}
type TransferEventListResponse = {
  transfer_events: TransferEvent[]
  has_more: boolean
  request_id: RequestID
}
type LedgerEventSourceType = 'TRANSFER' | 'SWEEP' | 'REFUND'
type TransferLedgerEventListRequest = {
  client_id?: APIClientID | undefined
  originator_client_id?: (string | null) | undefined
  secret?: APISecret | undefined
  start_date?: (string | null) | undefined
  end_date?: (string | null) | undefined
  ledger_id?: (string | null) | undefined
  ledger_event_id?: (string | null) | undefined
  source_type?: LedgerEventSourceType | undefined
  source_id?: (string | null) | undefined
  count?: (number | null) | undefined
  offset?: (number | null) | undefined
}
type TransferLedgerEvent = {
  ledger_event_id: string
  ledger_id: string
  amount: string
  transfer_id?: (string | null) | undefined
  refund_id?: (string | null) | undefined
  sweep_id?: (string | null) | undefined
  description: string
  pending_balance: string
  available_balance: string
  type: string
  timestamp: string
}
type TransferLedgerEventListResponse = {
  ledger_events: TransferLedgerEvent[]
  has_more: boolean
  request_id: RequestID
}
type BankTransferEventListBankTransferType = 'debit' | 'credit' | null
type BankTransferEventType = 'pending' | 'cancelled' | 'failed' | 'posted' | 'reversed'
type BankTransferEventListDirection = 'inbound' | 'outbound' | null
type BankTransferEventListRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  start_date?: (string | null) | undefined
  end_date?: (string | null) | undefined
  bank_transfer_id?: (string | null) | undefined
  account_id?: (string | null) | undefined
  bank_transfer_type?: BankTransferEventListBankTransferType | undefined
  event_types?: BankTransferEventType[] | undefined
  count?: (number | null) | undefined
  offset?: (number | null) | undefined
  origination_account_id?: (string | null) | undefined
  direction?: BankTransferEventListDirection | undefined
}
type ReceiverDetails = { available_balance: string | null } | null
type BankTransferEvent = {
  event_id: number
  timestamp: string
  event_type: BankTransferEventType
  account_id: string
  bank_transfer_id: BankTransferID
  origination_account_id: string | null
  bank_transfer_type: BankTransferType
  bank_transfer_amount: string
  bank_transfer_iso_currency_code: string
  failure_reason: BankTransferFailure
  direction: BankTransferDirection
  receiver_details: ReceiverDetails
}
type BankTransferEventListResponse = {
  bank_transfer_events: BankTransferEvent[]
  request_id: RequestID
}
type TransferEventSyncRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  after_id: number
  count?: (number | null) | undefined
}
type TransferEventSyncResponse = {
  transfer_events: TransferEvent[]
  has_more: boolean
  request_id: RequestID
}
type BankTransferEventSyncRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  after_id: number
  count?: (number | null) | undefined
}
type BankTransferEventSyncResponse = {
  bank_transfer_events: BankTransferEvent[]
  request_id: RequestID
}
type TransferSweepGetRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  sweep_id: string
}
type TransferSweepGetResponse = { sweep: TransferSweep; request_id: RequestID }
type BankTransferSweepGetRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  sweep_id: string
}
type BankTransferSweep = {
  id: string
  created_at: string
  amount: string
  iso_currency_code: string
}
type BankTransferSweepGetResponse = { sweep: BankTransferSweep; request_id: RequestID }
type TransferSweepListRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  start_date?: (string | null) | undefined
  end_date?: (string | null) | undefined
  count?: (number | null) | undefined
  offset?: number | undefined
  amount?: (string | null) | undefined
  status?: SweepStatus | undefined
  originator_client_id?: (string | null) | undefined
  funding_account_id?: (string | null) | undefined
  transfer_id?: (string | null) | undefined
  trigger?: SweepTrigger | undefined
}
type TransferSweepListResponse = { sweeps: TransferSweep[]; request_id: RequestID }
type BankTransferSweepListRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  origination_account_id?: (string | null) | undefined
  start_time?: (string | null) | undefined
  end_time?: (string | null) | undefined
  count?: (number | null) | undefined
}
type BankTransferSweepListResponse = { sweeps: BankTransferSweep[]; request_id: RequestID }
type BankTransferBalanceGetRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  origination_account_id?: (string | null) | undefined
}
type BankTransferBalance = { available: string; transactable: string }
type BankTransferBalanceGetResponse = {
  balance: BankTransferBalance
  origination_account_id: string | null
  request_id: RequestID
}
type BankTransferMigrateAccountRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  account_number: string
  routing_number: string
  wire_routing_number?: string | undefined
  account_type: string
}
type BankTransferMigrateAccountResponse = {
  access_token: string
  account_id: string
  request_id: RequestID
}
type TransferMigrateAccountRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  account_number: string
  routing_number: string
  wire_routing_number?: string | undefined
  account_type: string
}
type TransferMigrateAccountResponse = {
  access_token: string
  account_id: string
  request_id: RequestID
}
type TransferIntentCreateMode = 'PAYMENT' | 'DISBURSEMENT'
type TransferIntentCreateNetwork = 'ach' | 'same-day-ach' | 'rtp'
type TransferIntentCreateRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  account_id?: (string | null) | undefined
  funding_account_id?: TransferMigratedFundingAccountIDRequest | undefined
  mode: TransferIntentCreateMode
  network?: TransferIntentCreateNetwork | undefined
  amount: TransferAmount
  description: string
  ach_class?: ACHClass | undefined
  origination_account_id?: (string | null) | undefined
  user: TransferUserInRequest
  metadata?: TransferMetadata | undefined
  iso_currency_code?: string | undefined
  require_guarantee?: (boolean | null) | undefined
}
type TransferIntentStatus = 'PENDING' | 'SUCCEEDED' | 'FAILED'
type TransferIntentCreate = {
  id: string
  created: string
  status: TransferIntentStatus
  account_id?: (string | null) | undefined
  origination_account_id: string
  funding_account_id: TransferFundingAccountIDResponse
  amount: TransferAmount
  mode: TransferIntentCreateMode
  network?: TransferIntentCreateNetwork | undefined
  ach_class?: ACHClass | undefined
  user: TransferUserInResponse
  description: string
  metadata?: TransferMetadata | undefined
  iso_currency_code: string
  require_guarantee?: (boolean | null) | undefined
}
type TransferIntentCreateResponse = { transfer_intent: TransferIntentCreate; request_id: RequestID }
type TransferIntentGetRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  transfer_intent_id: string
}
type TransferIntentGetFailureReason = {
  error_type?: string | undefined
  error_code?: string | undefined
  error_message?: string | undefined
} | null
type TransferIntentAuthorizationDecision = 'APPROVED' | 'DECLINED'
type TransferAuthorizationGuaranteeDecision = 'GUARANTEED' | 'NOT_GUARANTEED' | null
type TransferIntentGet = {
  id: string
  created: string
  status: TransferIntentStatus
  transfer_id: string | null
  failure_reason: TransferIntentGetFailureReason
  authorization_decision: TransferIntentAuthorizationDecision
  authorization_decision_rationale: TransferAuthorizationDecisionRationale
  account_id?: (string | null) | undefined
  origination_account_id: string
  funding_account_id: TransferFundingAccountIDResponse
  amount: TransferAmount
  mode: TransferIntentCreateMode
  network?: TransferIntentCreateNetwork | undefined
  ach_class?: ACHClass | undefined
  user: TransferUserInResponse
  description: string
  metadata?: TransferMetadata | undefined
  iso_currency_code: string
  require_guarantee?: (boolean | null) | undefined
  guarantee_decision: TransferAuthorizationGuaranteeDecision
  guarantee_decision_rationale: TransferAuthorizationGuaranteeDecisionRationale
}
type TransferIntentGetResponse = { transfer_intent: TransferIntentGet; request_id: RequestID }
type TransferRepaymentListRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  start_date?: (string | null) | undefined
  end_date?: (string | null) | undefined
  count?: (number | null) | undefined
  offset?: number | undefined
}
type TransferRepayment = {
  repayment_id: string
  created: string
  amount: string
  iso_currency_code: string
}
type TransferRepaymentListResponse = { repayments: TransferRepayment[]; request_id: RequestID }
type TransferRepaymentReturnListRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  repayment_id: string
  count?: (number | null) | undefined
  offset?: number | undefined
}
type TransferRepaymentReturn = {
  transfer_id: string
  event_id: number
  amount: string
  iso_currency_code: string
}
type TransferRepaymentReturnListResponse = {
  repayment_returns: TransferRepaymentReturn[]
  request_id: RequestID
}
type TransferPlatformRequirementSubmission = {
  requirement_type: string
  value: string
  person_id?: string | undefined
}
type TransferPlatformRequirementSubmitRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  originator_client_id: string
  requirement_submissions: TransferPlatformRequirementSubmission[]
}
type TransferPlatformRequirementSubmitResponse = { request_id: RequestID }
type TransferOriginatorCreateRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  company_name: string
}
type TransferOriginatorCreateResponse = {
  originator_client_id: string
  company_name: string
  request_id: RequestID
}
type TransferQuestionnaireCreateRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  originator_client_id: string
  redirect_uri: string
}
type TransferQuestionnaireCreateResponse = { onboarding_url: string; request_id: RequestID }
type OriginatorExpectedTransferFrequency =
  | 'once_per_month'
  | 'twice_per_month'
  | 'once_per_week'
  | 'daily'
type CreditACHClass = 'ccd' | 'ppd' | 'web'
type TransferCreditUsageConfiguration = {
  expected_frequency: OriginatorExpectedTransferFrequency
  expected_highest_amount: string
  expected_average_amount: string
  expected_monthly_amount: string
  sec_codes: CreditACHClass[]
} | null
type TransferDebitUsageConfiguration = {
  expected_frequency: OriginatorExpectedTransferFrequency
  expected_highest_amount: string
  expected_average_amount: string
  expected_monthly_amount: string
  sec_codes: ACHClass[]
} | null
type TransferOriginatorAddress = {
  city: string
  street: string
  region: string
  postal_code: string
  country_code: string
}
type TransferOriginatorDiligence = {
  dba: string
  tax_id: string
  credit_usage_configuration?: TransferCreditUsageConfiguration | undefined
  debit_usage_configuration?: TransferDebitUsageConfiguration | undefined
  address: TransferOriginatorAddress
  website: string
  naics_code: string
  funding_account: TransferFundingAccount
}
type TransferDiligenceSubmitRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  originator_client_id: string
  originator_diligence: TransferOriginatorDiligence
}
type TransferDiligenceSubmitResponse = { request_id: RequestID }
type TransferDocumentPurpose = 'DUE_DILIGENCE'
type TransferDiligenceDocumentUploadRequest = {
  originator_client_id: string
  file: File
  purpose: TransferDocumentPurpose
}
type TransferDiligenceDocumentUploadResponse = { request_id: RequestID }
type TransferOriginatorGetRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  originator_client_id: string
}
type TransferDiligenceStatus =
  | 'not_submitted'
  | 'submitted'
  | 'under_review'
  | 'approved'
  | 'denied'
  | 'more_information_required'
type TransferPlatformRequirement = {
  requirement_type?: string | undefined
  person_id?: (string | null) | undefined
}
type DetailedOriginator = {
  client_id: string
  transfer_diligence_status: TransferDiligenceStatus
  company_name: string
  outstanding_requirements?: TransferPlatformRequirement[] | undefined
}
type TransferOriginatorGetResponse = { originator: DetailedOriginator; request_id: RequestID }
type TransferOriginatorListRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  count?: (number | null) | undefined
  offset?: (number | null) | undefined
}
type Originator = { client_id: string; transfer_diligence_status: TransferDiligenceStatus }
type TransferOriginatorListResponse = { originators: Originator[]; request_id: RequestID }
type TransferRefundIdempotencyKey = string
type TransferRefundCreateRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  transfer_id: TransferIDForRefund
  amount: TransferRefundAmount
  idempotency_key: TransferRefundIdempotencyKey
}
type TransferRefundCreateResponse = { refund: TransferRefund; request_id: RequestID }
type TransferReturnRecoverTransferID = string
type TransferReturnRecoverAmount = string
type TransferReturnRecoverIdempotencyKey = string
type TransferReturnRecoverRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  transfer_id: TransferReturnRecoverTransferID
  amount: TransferReturnRecoverAmount
  idempotency_key: TransferReturnRecoverIdempotencyKey
}
type TransferReturnRecoverResponse = { request_id: RequestID }
type TransferRefundGetRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  refund_id: TransferRefundID
}
type TransferRefundGetResponse = { refund: TransferRefund; request_id: RequestID }
type TransferRefundCancelRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  refund_id: TransferRefundID
}
type TransferRefundCancelResponse = { request_id: RequestID }
type TransferPlatformOriginatorClientID = string
type TransferPlatformTOSAcceptanceMetadata = {
  agreement_accepted: boolean
  originator_ip_address: string
  agreement_accepted_at: string
}
type TransferPlatformOriginatorCreateRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  originator_client_id: TransferPlatformOriginatorClientID
  tos_acceptance_metadata: TransferPlatformTOSAcceptanceMetadata
  originator_reviewed_at: string
  webhook?: string | undefined
}
type TransferPlatformOriginatorCreateResponse = { request_id: RequestID }
type TransferPlatformPersonName = { given_name: GivenNameField; family_name: FamilyNameField }
type TransferPlatformPersonAddress = {
  city: string
  country: string
  postal_code: string
  region: string
  street: string
  street2?: string | undefined
}
type TransferPlatformPersonIDNumber = { value: string; type: IDNumberType }
type TransferPlatformPersonCreateRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  originator_client_id: TransferPlatformOriginatorClientID
  name?: TransferPlatformPersonName | undefined
  email_address?: string | undefined
  phone_number?: string | undefined
  address?: TransferPlatformPersonAddress | undefined
  id_number?: TransferPlatformPersonIDNumber | undefined
  date_of_birth?: string | undefined
  relationship_to_originator?: string | undefined
  ownership_percentage?: number | undefined
  title?: string | undefined
}
type TransferPlatformPersonCreateResponse = { request_id: RequestID; person_id: string }
type SandboxBankTransferSimulateRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  bank_transfer_id: BankTransferID
  event_type: string
  failure_reason?: BankTransferFailure | undefined
}
type SandboxBankTransferSimulateResponse = { request_id: RequestID }
type SandboxTransferSweepSimulateRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  test_clock_id?: (string | null) | undefined
  webhook?: string | undefined
}
type SimulatedTransferSweep = {
  id: string
  funding_account_id: TransferFundingAccountIDResponse
  ledger_id?: TransferLedgerID | undefined
  created: string
  amount: string
  iso_currency_code: string
  settled: string | null
  expected_funds_available_date?: (string | null) | undefined
  status?: SweepStatus | undefined
  trigger?: SweepTrigger | undefined
  description?: string | undefined
  network_trace_id?: TransferNetworkTraceID | undefined
  failure_reason?: SweepFailure | undefined
}
type SandboxTransferSweepSimulateResponse = {
  sweep?: SimulatedTransferSweep | undefined
  request_id: RequestID
}
type SandboxTransferSimulateRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  transfer_id: TransferID
  test_clock_id?: (string | null) | undefined
  event_type: string
  failure_reason?: TransferFailure | undefined
  webhook?: string | undefined
}
type SandboxTransferSimulateResponse = { request_id: RequestID }
type SandboxTransferRefundSimulateRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  refund_id: TransferRefundID
  test_clock_id?: (string | null) | undefined
  event_type: string
  failure_reason?: TransferFailure | undefined
  webhook?: string | undefined
}
type SandboxTransferRefundSimulateResponse = { request_id: RequestID }
type SandboxTransferLedgerSimulateAvailableRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  ledger_id?: (string | null) | undefined
  originator_client_id?: (string | null) | undefined
  test_clock_id?: (string | null) | undefined
  webhook?: string | undefined
}
type SandboxTransferLedgerSimulateAvailableResponse = { request_id: RequestID }
type TransferSweepID = string
type TransferLedgerSweepSimulateEventType =
  | 'sweep.posted'
  | 'sweep.settled'
  | 'sweep.returned'
  | 'sweep.failed'
  | 'sweep.funds_available'
type SandboxTransferLedgerDepositSimulateRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  sweep_id: TransferSweepID
  event_type: TransferLedgerSweepSimulateEventType
  failure_reason?: TransferFailure | undefined
}
type SandboxTransferLedgerDepositSimulateResponse = { request_id: RequestID }
type SandboxTransferLedgerWithdrawSimulateRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  sweep_id: TransferSweepID
  event_type: TransferLedgerSweepSimulateEventType
  failure_reason?: TransferFailure | undefined
}
type SandboxTransferLedgerWithdrawSimulateResponse = { request_id: RequestID }
type SandboxTransferFireWebhookRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  webhook: string
}
type SandboxTransferFireWebhookResponse = { request_id: RequestID }
type SandboxTransferTestClockCreateRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  virtual_time?: (string | null) | undefined
}
type TransferTestClockID = string
type VirtualTime = string
type TransferTestClock = { test_clock_id: TransferTestClockID; virtual_time: VirtualTime }
type SandboxTransferTestClockCreateResponse = {
  test_clock: TransferTestClock
  request_id: RequestID
}
type SandboxTransferTestClockAdvanceRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  test_clock_id: TransferTestClockID
  new_virtual_time: VirtualTime
}
type SandboxTransferTestClockAdvanceResponse = { request_id: RequestID }
type SandboxTransferTestClockGetRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  test_clock_id: TransferTestClockID
}
type SandboxTransferTestClockGetResponse = { test_clock: TransferTestClock; request_id: RequestID }
type SandboxTransferTestClockListRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  start_virtual_time?: (string | null) | undefined
  end_virtual_time?: (string | null) | undefined
  count?: (number | null) | undefined
  offset?: number | undefined
}
type SandboxTransferTestClockListResponse = {
  test_clocks: TransferTestClock[]
  request_id: RequestID
}
type SandboxPaymentProfileResetLoginRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  payment_profile_token: PaymentProfileToken
}
type SandboxPaymentProfileResetLoginResponse = { reset_login: boolean; request_id: RequestID }
type SandboxPaymentSimulateRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  payment_id: string
  webhook: string
  status: string
}
type SandboxPaymentSimulateResponse = {
  request_id: RequestID
  old_status: PaymentInitiationPaymentStatus
  new_status: PaymentInitiationPaymentStatus
}
type EmployersSearchRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  query: string
  products: string[]
}
type AddressDataNullable = {
  city: string | null
  region: string | null
  street: string | null
  postal_code: string | null
  country: string | null
}
type Employer = {
  employer_id: string
  name: string
  address: AddressDataNullable
  confidence_score: number
}
type EmployersSearchResponse = { employers: Employer[]; request_id: RequestID }
type IncomeVerificationCreateRequestOptions = { access_tokens?: AccessToken[] | undefined }
type IncomeVerificationCreateRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  webhook: string
  precheck_id?: string | undefined
  options?: IncomeVerificationCreateRequestOptions | undefined
}
type IncomeVerificationCreateResponse = { income_verification_id: string; request_id: RequestID }
type IncomeVerificationPaystubsGetRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  income_verification_id?: (string | null) | undefined
  access_token?: AccessTokenNullable | undefined
}
type DocType =
  | 'DOCUMENT_TYPE_UNKNOWN'
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
  | 'DOCUMENT_TYPE_US_STUDENT_I20'
type DocumentMetadata = {
  name: string
  status?: (string | null) | undefined
  doc_id: string
  doc_type: DocType
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
  description?: (string | null) | undefined
  current_pay?: Pay | undefined
  ytd_pay?: Pay | undefined
}
type DeductionsBreakdown = {
  current_amount?: (number | null) | undefined
  description?: (string | null) | undefined
  iso_currency_code?: (string | null) | undefined
  unofficial_currency_code?: (string | null) | undefined
  ytd_amount?: (number | null) | undefined
}
type DeductionsTotal = {
  current_amount?: (number | null) | undefined
  iso_currency_code?: (string | null) | undefined
  unofficial_currency_code?: (string | null) | undefined
  ytd_amount?: (number | null) | undefined
}
type Deductions = {
  subtotals?: Total[] | undefined
  breakdown: DeductionsBreakdown[]
  totals?: Total[] | undefined
  total: DeductionsTotal
}
type EarningsTotal = {
  current_amount?: (number | null) | undefined
  current_pay?: Pay | undefined
  ytd_pay?: Pay | undefined
  hours?: (number | null) | undefined
  iso_currency_code?: (string | null) | undefined
  unofficial_currency_code?: (string | null) | undefined
  ytd_amount?: (number | null) | undefined
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
type Earnings = {
  subtotals?: EarningsTotal[] | undefined
  totals?: EarningsTotal[] | undefined
  breakdown?: EarningsBreakdown[] | undefined
  total?: EarningsTotal | undefined
}
type PaystubAddress = {
  city?: (string | null) | undefined
  country?: (string | null) | undefined
  postal_code?: (string | null) | undefined
  region?: (string | null) | undefined
  street?: (string | null) | undefined
  line1?: (string | null) | undefined
  line2?: (string | null) | undefined
  state_code?: (string | null) | undefined
}
type TaxpayerID = {
  id_type?: (string | null) | undefined
  id_mask?: (string | null) | undefined
  last_4_digits?: (string | null) | undefined
}
type Employee = {
  address: PaystubAddress
  name: string | null
  marital_status?: (string | null) | undefined
  taxpayer_id?: TaxpayerID | undefined
}
type PaystubEmployer = { address?: PaystubAddress | undefined; name: string | null }
type EmploymentDetails = {
  annual_salary?: Pay | undefined
  hire_date?: (string | null) | undefined
}
type NetPay = {
  current_amount?: (number | null) | undefined
  description?: (string | null) | undefined
  iso_currency_code?: (string | null) | undefined
  unofficial_currency_code?: (string | null) | undefined
  ytd_amount?: (number | null) | undefined
  total?: Total | undefined
}
type DistributionBreakdown = {
  account_name?: (string | null) | undefined
  bank_name?: (string | null) | undefined
  current_amount?: (number | null) | undefined
  iso_currency_code?: (string | null) | undefined
  mask?: (string | null) | undefined
  type?: (string | null) | undefined
  unofficial_currency_code?: (string | null) | undefined
  current_pay?: Pay | undefined
}
type PayPeriodDetailsPayFrequency =
  | 'PAY_FREQUENCY_UNKNOWN'
  | 'PAY_FREQUENCY_WEEKLY'
  | 'PAY_FREQUENCY_BIWEEKLY'
  | 'PAY_FREQUENCY_SEMIMONTHLY'
  | 'PAY_FREQUENCY_MONTHLY'
  | null
type PayPeriodDetails = {
  check_amount?: (number | null) | undefined
  distribution_breakdown?: DistributionBreakdown[] | undefined
  end_date?: (string | null) | undefined
  gross_earnings?: (number | null) | undefined
  pay_date?: (string | null) | undefined
  pay_frequency?: PayPeriodDetailsPayFrequency | undefined
  pay_day?: (string | null) | undefined
  start_date?: (string | null) | undefined
}
type PaystubPayFrequency = 'MONTHLY' | 'BI-WEEKLY' | 'WEEKLY' | 'SEMI-MONTHLY' | null
type PaystubDetails = {
  pay_period_start_date?: (string | null) | undefined
  pay_period_end_date?: (string | null) | undefined
  pay_date?: (string | null) | undefined
  paystub_provider?: (string | null) | undefined
  pay_frequency?: PaystubPayFrequency | undefined
}
type IncomeBreakdownType = 'bonus' | 'overtime' | 'regular' | null
type IncomeBreakdown = {
  type: IncomeBreakdownType
  rate: number | null
  hours: number | null
  total: number | null
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
  net_pay: NetPay
  pay_period_details: PayPeriodDetails
  paystub_details?: PaystubDetails | undefined
  income_breakdown?: IncomeBreakdown[] | undefined
  ytd_earnings?: PaystubYTDDetails | undefined
}
type IncomeVerificationPaystubsGetResponse = {
  document_metadata?: DocumentMetadata[] | undefined
  paystubs: Paystub[]
  error?: PlaidError | undefined
  request_id: RequestID
}
type IncomeVerificationDocumentsDownloadRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  income_verification_id?: (string | null) | undefined
  access_token?: AccessTokenNullable | undefined
  document_id?: (string | null) | undefined
}
type IncomeVerificationTaxformsGetRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  income_verification_id?: (string | null) | undefined
  access_token?: AccessTokenNullable | undefined
}
type W2Box12 = { code?: (string | null) | undefined; amount?: (string | null) | undefined }
type W2StateAndLocalWages = {
  state?: (string | null) | undefined
  employer_state_id_number?: (string | null) | undefined
  state_wages_tips?: (string | null) | undefined
  state_income_tax?: (string | null) | undefined
  local_wages_tips?: (string | null) | undefined
  local_income_tax?: (string | null) | undefined
  locality_name?: (string | null) | undefined
}
type W2 = {
  employer?: PaystubEmployer | undefined
  employee?: Employee | undefined
  tax_year?: (string | null) | undefined
  employer_id_number?: (string | null) | undefined
  wages_tips_other_comp?: (string | null) | undefined
  federal_income_tax_withheld?: (string | null) | undefined
  social_security_wages?: (string | null) | undefined
  social_security_tax_withheld?: (string | null) | undefined
  medicare_wages_and_tips?: (string | null) | undefined
  medicare_tax_withheld?: (string | null) | undefined
  social_security_tips?: (string | null) | undefined
  allocated_tips?: (string | null) | undefined
  box_9?: (string | null) | undefined
  dependent_care_benefits?: (string | null) | undefined
  nonqualified_plans?: (string | null) | undefined
  box_12?: W2Box12[] | undefined
  statutory_employee?: (string | null) | undefined
  retirement_plan?: (string | null) | undefined
  third_party_sick_pay?: (string | null) | undefined
  other?: (string | null) | undefined
  state_and_local_wages?: W2StateAndLocalWages[] | undefined
}
type Taxform = { doc_id?: string | undefined; document_type: string; w2?: W2 | undefined }
type IncomeVerificationTaxformsGetResponse = {
  request_id?: RequestID | undefined
  document_metadata: DocumentMetadata[]
  taxforms: Taxform[]
  error?: PlaidError | undefined
}
type IncomeVerificationPrecheckUser = {
  first_name?: (string | null) | undefined
  last_name?: (string | null) | undefined
  email_address?: (string | null) | undefined
  home_address?: SignalAddressData | undefined
} | null
type IncomeVerificationPrecheckEmployerAddress = {
  city?: string | undefined
  country?: string | undefined
  postal_code?: string | undefined
  region?: string | undefined
  street?: string | undefined
}
type IncomeVerificationPrecheckEmployer = {
  name?: (string | null) | undefined
  address?: IncomeVerificationPrecheckEmployerAddress | undefined
  tax_id?: (string | null) | undefined
  url?: (string | null) | undefined
} | null
type IncomeVerificationPrecheckPayrollInstitution = { name?: (string | null) | undefined } | null
type IncomeVerificationPrecheckMilitaryInfo = {
  is_active_duty?: (boolean | null) | undefined
  branch?: (string | null) | undefined
} | null
type IncomeVerificationPrecheckRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  user?: IncomeVerificationPrecheckUser | undefined
  employer?: IncomeVerificationPrecheckEmployer | undefined
  payroll_institution?: IncomeVerificationPrecheckPayrollInstitution | undefined
  transactions_access_token?: {} | undefined
  transactions_access_tokens?: AccessToken[] | undefined
  us_military_info?: IncomeVerificationPrecheckMilitaryInfo | undefined
}
type IncomeVerificationPrecheckConfidence = 'HIGH' | 'LOW' | 'UNKNOWN'
type IncomeVerificationPrecheckResponse = {
  precheck_id: string
  request_id: RequestID
  confidence: IncomeVerificationPrecheckConfidence
}
type EmploymentVerificationGetRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  access_token: AccessToken
}
type EmploymentVerificationStatus = 'EMPLOYMENT_STATUS_ACTIVE' | 'EMPLOYMENT_STATUS_INACTIVE' | null
type EmployerVerification = { name?: (string | null) | undefined }
type PlatformIds = {
  employee_id?: (string | null) | undefined
  payroll_id?: (string | null) | undefined
  position_id?: (string | null) | undefined
}
type EmploymentVerification = {
  status?: EmploymentVerificationStatus | undefined
  start_date?: (string | null) | undefined
  end_date?: (string | null) | undefined
  employer?: EmployerVerification | undefined
  title?: (string | null) | undefined
  platform_ids?: PlatformIds | undefined
}
type EmploymentVerificationGetResponse = {
  employments: EmploymentVerification[]
  request_id: RequestID
}
type CreditAuditCopyTokenCreateRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  report_tokens: string[]
}
type CreditAuditCopyTokenCreateResponse = { audit_copy_token: string; request_id: RequestID }
type CreditAuditCopyTokenRemoveRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  audit_copy_token: string
}
type CreditAuditCopyTokenRemoveResponse = { removed: boolean; request_id: RequestID }
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
type ReportingInformation = { ReportingInformationIdentifier: string }
type ServiceProductFulfillmentIdentifier = 'VOA' | 'VOE'
type ServiceProductFulfillmentDetail = {
  VendorOrderIdentifier: string | null
  ServiceProductFulfillmentIdentifier: ServiceProductFulfillmentIdentifier
}
type ServiceProductFulfillment = {
  SERVICE_PRODUCT_FULFILLMENT_DETAIL: ServiceProductFulfillmentDetail
}
type AssetType = 'CheckingAccount' | 'SavingsAccount' | 'Investment' | 'MoneyMarketFund' | 'Other'
type AssetDetail = {
  AssetUniqueIdentifier: string
  AssetAccountIdentifier: string
  AssetAsOfDate: string
  AssetDescription: string | null
  AssetAvailableBalanceAmount: number
  AssetCurrentBalanceAmount: number
  AssetHoldingBalanceAmount?: (number | null) | undefined
  AssetHoldingBalanceNetMarginAmount?: (number | null) | undefined
  AssetBondsBalanceAmount?: (number | null) | undefined
  AssetStocksBalanceAmount?: (number | null) | undefined
  AssetCryptoBalanceAmount?: (number | null) | undefined
  AssetOtherBalanceAmount?: (number | null) | undefined
  AssetMarginAmountBalance?: (number | null) | undefined
  AssetAvailableCashBalanceAmount?: (number | null) | undefined
  AssetCashBalanceAmount?: (number | null) | undefined
  AssetType: AssetType
  AssetTypeAdditionalDescription: string | null
  AssetDaysRequestedCount: number
  AssetOwnershipType: string | null
  AssetRetirementIndicator?: 'Yes' | 'No' | undefined
  AssetEmployerSponsoredIndicator?: 'Yes' | 'No' | undefined
}
type AssetOwner = { AssetOwnerText: string | null }
type AssetOwners = { ASSET_OWNER: AssetOwner[] }
type AssetHolderName = { FullName: string }
type AssetHolder = { NAME: AssetHolderName }
type AssetTransactionType = 'Credit' | 'Debit'
type AssetInvestmentTransactionType =
  | 'Buy'
  | 'Sell'
  | 'Dividends'
  | 'Interest'
  | 'Transfers'
  | 'Reinvestments'
  | 'FundsReceived'
  | 'Other'
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
type AssetTransactionDetail = {
  AssetTransactionUniqueIdentifier: string
  AssetTransactionAmount: number
  AssetTransactionDate: string
  AssetTransactionPostDate: string
  AssetTransactionType: AssetTransactionType
  AssetInvestmentTransactionType?: AssetInvestmentTransactionType | undefined
  AssetTransactionPaidByName: string | null
  AssetTransactionPaidToName?: (string | null) | undefined
  AssetTransactionTypeAdditionalDescription: string | null
  AssetInvestmentTransactionTypeDescription: string | null
  AssetTransactionCategoryType: AssetTransactionCategoryType
  FinancialInstitutionTransactionIdentifier: string | null
}
type AssetTransactionDescription = { AssetTransactionDescription: string }
type AssetTransaction = {
  ASSET_TRANSACTION_DETAIL: AssetTransactionDetail
  ASSET_TRANSACTION_DESCRIPTON: AssetTransactionDescription[]
}
type AssetTransactions = { ASSET_TRANSACTION: AssetTransaction[] }
type ValidationSource = {
  ValidationSourceName: string | null
  ValidationSourceReferenceIdentifier: string | null
}
type ValidationSources = { VALIDATION_SOURCE: ValidationSource[] }
type Asset = {
  ASSET_DETAIL: AssetDetail
  ASSET_OWNERS: AssetOwners
  ASSET_HOLDER: AssetHolder
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
type Status = { StatusCode: string | null; StatusDescription: string | null }
type Statuses = { STATUS: Status }
type Service = { VERIFICATION_OF_ASSET: VerificationOfAsset; STATUSES: Statuses }
type Services = { SERVICE: Service }
type AssetReportFreddie = { LOANS: Loans; PARTIES: Parties; SERVICES: Services }
type AssetReportFreddieGetResponse = {
  DEAL: AssetReportFreddie
  request_id: RequestID
  SchemaVersion: number
}
type CreditFreddieMacReportsGetRequest = {
  audit_copy_token: string
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
}
type CreditFreddieMacLoanIdentifiers = { LOAN_IDENTIFIER: LoanIdentifier[] }
type CreditFreddieMacLoan = {
  LOAN_IDENTIFIERS: CreditFreddieMacLoanIdentifiers
  LoanRoleType: string
}
type CreditFreddieMacLoans = { LOAN: CreditFreddieMacLoan }
type CreditFreddieMacIndividualName = { FirstName: string; LastName: string; MiddleName: string }
type CreditFreddieMacPartyIndividual = { NAME: CreditFreddieMacIndividualName }
type CreditFreddieMacParty = {
  INDIVIDUAL: CreditFreddieMacPartyIndividual
  ROLES: Roles
  TAXPAYER_IDENTIFIERS: TaxpayerIdentifiers
}
type CreditFreddieMacParties = { PARTY: CreditFreddieMacParty[] }
type CreditFreddieMacReportingInformation = {
  ReportDateTime?: string | undefined
  ReportIdentifierType?: string | undefined
  ReportingInformationParentIdentifier?: string | undefined
  ReportingInformationIdentifier: string
}
type AssetHolding = {
  AssetHoldingID: string | null
  Currency: string | null
  AssetHoldingDescription: string | null
  AssetHoldingSymbol: string | null
  AssetHoldingSecurityName: string | null
  AssetHoldingUnits: number | null
  AssetHoldingMarketValueAmount: number | null
  AssetHoldingCurrentPriceAmount: number | null
  AssetHoldingType: 'Bond' | 'Stock' | 'Crypto' | 'Other'
  AssetHoldingRestrictedIndicator: 'Yes' | 'No'
  AssetHoldingVestedAmount: number | null
}
type AssetHoldings = { ASSET_HOLDING: AssetHolding[] }
type CreditFreddieMacAssetTransaction = {
  ASSET_TRANSACTION_DETAIL: AssetTransactionDetail
  ASSET_TRANSACTION_DESCRIPTION: AssetTransactionDescription[]
}
type CreditFreddieMacAssetTransactions = { ASSET_TRANSACTION: CreditFreddieMacAssetTransaction[] }
type CreditFreddieMacAsset = {
  ASSET_DETAIL: AssetDetail
  ASSET_OWNERS: AssetOwners
  ASSET_HOLDER: AssetHolder
  ASSET_HOLDINGS?: AssetHoldings | undefined
  ASSET_TRANSACTIONS: CreditFreddieMacAssetTransactions
  VALIDATION_SOURCES: ValidationSources
}
type CreditFreddieMacAssets = { ASSET: CreditFreddieMacAsset[] }
type CreditFreddieMacVerificationOfAssetResponse = { ASSETS: CreditFreddieMacAssets }
type CreditFreddieMacVerificationOfAsset = {
  REPORTING_INFORMATION: CreditFreddieMacReportingInformation
  SERVICE_PRODUCT_FULFILLMENT: ServiceProductFulfillment
  VERIFICATION_OF_ASSET_RESPONSE: CreditFreddieMacVerificationOfAssetResponse
}
type CreditFreddieMacService = {
  VERIFICATION_OF_ASSET: CreditFreddieMacVerificationOfAsset[]
  STATUSES: Statuses
}
type CreditFreddieMacServices = { SERVICE: CreditFreddieMacService }
type CreditFreddieMacVerificationOfAssetsDeal = {
  LOANS: CreditFreddieMacLoans
  PARTIES: CreditFreddieMacParties
  SERVICES: CreditFreddieMacServices
}
type CreditFreddieMacReportsGetResponse = {
  DEAL: CreditFreddieMacVerificationOfAssetsDeal
  request_id: RequestID
  SchemaVersion: number
}
type CreditBankEmploymentGetRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  user_token: UserToken
}
type CreditBankEmployer = { name: string }
type CreditBankEmployment = {
  bank_employment_id: string
  account_id: string
  employer: CreditBankEmployer
  latest_deposit_date: string
  earliest_deposit_date: string
}
type CreditBankIncomeAccount = {
  account_id: string
  mask: string | null
  name: string
  official_name: string | null
  subtype: DepositoryAccountSubtype
  type: CreditBankIncomeAccountType
  owners: Owner[]
}
type CreditBankEmploymentItem = {
  item_id: string
  last_updated_time: string
  institution_id: string
  institution_name: string
  bank_employments: CreditBankEmployment[]
  bank_employment_accounts: CreditBankIncomeAccount[]
}
type CreditBankEmploymentWarningType = 'BANK_EMPLOYMENT_WARNING'
type CreditBankIncomeWarningCode =
  | 'IDENTITY_UNAVAILABLE'
  | 'TRANSACTIONS_UNAVAILABLE'
  | 'ITEM_UNAPPROVED'
  | 'REPORT_DELETED'
  | 'DATA_UNAVAILABLE'
type CreditBankIncomeCause = {
  error_type: CreditBankIncomeErrorType
  error_code: string
  error_message: string
  display_message: string
  item_id: string
}
type CreditBankEmploymentWarning = {
  warning_type: CreditBankEmploymentWarningType
  warning_code: CreditBankIncomeWarningCode
  cause: CreditBankIncomeCause
}
type CreditBankEmploymentReport = {
  bank_employment_report_id: string
  generated_time: string
  days_requested: number
  items: CreditBankEmploymentItem[]
  warnings: CreditBankEmploymentWarning[]
}
type CreditBankEmploymentGetResponse = {
  bank_employment_reports: CreditBankEmploymentReport[]
  request_id: RequestID
}
type CreditBankIncomeGetRequestOptions = { count?: number | undefined }
type CreditBankIncomeGetRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  user_token?: UserToken | undefined
  user_id?: NewUserID | undefined
  options?: CreditBankIncomeGetRequestOptions | undefined
}
type CreditBankIncomeTransaction = {
  amount?: number | undefined
  date?: string | undefined
  name?: string | undefined
  original_description?: (string | null) | undefined
  pending?: boolean | undefined
  transaction_id?: string | undefined
  check_number?: (string | null) | undefined
  iso_currency_code?: CreditIsoCurrencyCode | undefined
  unofficial_currency_code?: CreditUnofficialCurrencyCode | undefined
}
type CreditBankIncomeHistoricalSummary = {
  total_amount?: number | undefined
  iso_currency_code?: (string | null) | undefined
  unofficial_currency_code?: (string | null) | undefined
  total_amounts?: CreditAmountWithCurrency[] | undefined
  start_date?: string | undefined
  end_date?: string | undefined
  transactions?: CreditBankIncomeTransaction[] | undefined
}
type CreditBankIncomeSource = {
  income_source_id?: string | undefined
  income_description?: string | undefined
  income_category?: CreditBankIncomeCategory | undefined
  account_id?: string | undefined
  start_date?: string | undefined
  end_date?: string | undefined
  pay_frequency?: CreditBankIncomePayFrequency | undefined
  total_amount?: number | undefined
  transaction_count?: number | undefined
  historical_summary?: CreditBankIncomeHistoricalSummary[] | undefined
}
type CreditBankIncomeItem = {
  bank_income_accounts?: CreditBankIncomeAccount[] | undefined
  bank_income_sources?: CreditBankIncomeSource[] | undefined
  last_updated_time?: string | undefined
  institution_id?: string | undefined
  institution_name?: string | undefined
  item_id?: string | undefined
}
type CreditBankIncomeSummary = {
  total_amount?: number | undefined
  iso_currency_code?: (string | null) | undefined
  unofficial_currency_code?: (string | null) | undefined
  total_amounts?: CreditAmountWithCurrency[] | undefined
  start_date?: string | undefined
  end_date?: string | undefined
  income_sources_count?: number | undefined
  income_categories_count?: number | undefined
  income_transactions_count?: number | undefined
  historical_summary?: CreditBankIncomeHistoricalSummary[] | undefined
}
type CreditBankIncomeWarning = {
  warning_type?: CreditBankIncomeWarningType | undefined
  warning_code?: CreditBankIncomeWarningCode | undefined
  cause?: CreditBankIncomeCause | undefined
}
type CreditBankIncome = {
  bank_income_id?: string | undefined
  generated_time?: string | undefined
  days_requested?: number | undefined
  items?: CreditBankIncomeItem[] | undefined
  bank_income_summary?: CreditBankIncomeSummary | undefined
  warnings?: CreditBankIncomeWarning[] | undefined
}
type CreditBankIncomeGetResponse = {
  bank_income?: CreditBankIncome[] | undefined
  request_id: RequestID
}
type CreditBankIncomePDFGetRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  user_token?: UserToken | undefined
  user_id?: NewUserID | undefined
}
type CreditBankIncomePDFGetResponse = File
type CreditBankIncomeRefreshRequestOptions = { days_requested?: number | undefined }
type CreditBankIncomeRefreshRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  user_token: UserToken
  user_id?: {} | undefined
  options?: CreditBankIncomeRefreshRequestOptions | undefined
}
type CreditBankIncomeRefreshResponse = { request_id: RequestID }
type CreditBankIncomeWebhookUpdateRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  user_token: UserToken
  user_id?: {} | undefined
  enable_webhooks: boolean
}
type CreditBankIncomeWebhookUpdateResponse = { request_id: RequestID }
type CreditPayrollIncomeParsingConfigUpdateRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  user_token?: UserToken | undefined
  user_id?: NewUserID | undefined
  item_id?: ItemId | undefined
  parsing_config: IncomeVerificationDocParsingConfig[]
}
type CreditPayrollIncomeParsingConfigUpdateResponse = { request_id: RequestID }
type CreditBankStatementsUploadsGetRequestOptions = { item_ids?: string[] | undefined }
type CreditBankStatementsUploadsGetRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  user_token?: UserToken | undefined
  user_id?: NewUserID | undefined
  options?: CreditBankStatementsUploadsGetRequestOptions | undefined
}
type CreditBankStatementUploadTransaction = {
  amount: number | null
  date: string | null
  original_description: string | null
  account_id: string | null
}
type CreditDocumentType = string | null
type CreditDocumentMetadata = {
  name: string
  document_type: CreditDocumentType
  download_url: string | null
  status: string | null
  page_count?: (number | null) | undefined
  error_message?: (string | null) | undefined
}
type CreditBankStatementUploadAccountOwnerAddress = {
  city: string | null
  country: string | null
  postal_code: string | null
  region: string | null
  street: string | null
}
type CreditBankStatementUploadAccountOwner = {
  name: string | null
  address: CreditBankStatementUploadAccountOwnerAddress
}
type CreditBankStatementUploadBankAccountPeriod = {
  start_date: string | null
  end_date: string | null
  starting_balance: number | null
  ending_balance: number | null
}
type CreditBankStatementUploadBankAccount = {
  name: string | null
  bank_name: string | null
  account_type: string | null
  account_number: string | null
  owner: CreditBankStatementUploadAccountOwner
  periods: CreditBankStatementUploadBankAccountPeriod[]
  account_id: string | null
}
type CreditBankStatementUploadObject = {
  transactions: CreditBankStatementUploadTransaction[]
  document_metadata: CreditDocumentMetadata
  document_id: string | null
  bank_accounts: CreditBankStatementUploadBankAccount[]
}
type PayrollItemStatus = { processing_status?: (string | null) | undefined } | null
type CreditBankStatementUploadItem = {
  item_id: ItemId
  bank_statements: CreditBankStatementUploadObject[]
  status: PayrollItemStatus
  updated_at: string | null
}
type CreditBankStatementsUploadsGetResponse = {
  items: CreditBankStatementUploadItem[]
  request_id: RequestID
}
type CreditPayrollIncomeGetRequestOptions = { item_ids?: string[] | undefined }
type CreditPayrollIncomeGetRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  user_token?: UserToken | undefined
  user_id?: NewUserID | undefined
  options?: CreditPayrollIncomeGetRequestOptions | undefined
}
type PayrollIncomeRateOfPay = {
  pay_rate?: (string | null) | undefined
  pay_amount?: (number | null) | undefined
}
type PayrollIncomeAccountData = {
  account_id: string | null
  rate_of_pay: PayrollIncomeRateOfPay
  pay_frequency: string | null
} | null
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
type CreditPayStubAddress = {
  city: string | null
  country: string | null
  postal_code: string | null
  region: string | null
  street: string | null
}
type PayStubTaxpayerID = { id_type: string | null; id_mask: string | null }
type CreditPayStubEmployee = {
  address: CreditPayStubAddress
  name: string | null
  marital_status: string | null
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
  pay_amount: number | null
  distribution_breakdown: PayStubDistributionBreakdown[]
  end_date: string | null
  gross_earnings: number | null
  iso_currency_code: string | null
  pay_date: string | null
  pay_frequency: string | null
  pay_basis?: CreditPayStubPayBasisType | undefined
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
type CreditW2 = {
  document_metadata: CreditDocumentMetadata
  document_id: string
  employer: CreditPayStubEmployer
  employee: CreditPayStubEmployee
  tax_year: string | null
  employer_id_number: string | null
  wages_tips_other_comp: string | null
  federal_income_tax_withheld: string | null
  social_security_wages: string | null
  social_security_tax_withheld: string | null
  medicare_wages_and_tips: string | null
  medicare_tax_withheld: string | null
  social_security_tips: string | null
  allocated_tips: string | null
  box_9: string | null
  dependent_care_benefits: string | null
  nonqualified_plans: string | null
  box_12: W2Box12[]
  statutory_employee: string | null
  retirement_plan: string | null
  third_party_sick_pay: string | null
  other: string | null
  state_and_local_wages: W2StateAndLocalWages[]
}
type Form1099Type = 'FORM_1099_TYPE_UNKNOWN' | 'FORM_1099_TYPE_MISC' | 'FORM_1099_TYPE_K'
type Credit1099Recipient = {
  address?: CreditPayStubAddress | undefined
  name?: (string | null) | undefined
  tin?: (string | null) | undefined
  account_number?: (string | null) | undefined
  facta_filing_requirement?: (string | null) | undefined
  second_tin_exists?: (string | null) | undefined
}
type Credit1099Payer = {
  address?: CreditPayStubAddress | undefined
  name?: (string | null) | undefined
  tin?: (string | null) | undefined
  telephone_number?: (string | null) | undefined
}
type Credit1099Filer = {
  address?: CreditPayStubAddress | undefined
  name?: (string | null) | undefined
  tin?: (string | null) | undefined
  type?: (string | null) | undefined
}
type Credit1099 = {
  document_id: string | null
  document_metadata?: CreditDocumentMetadata | undefined
  form_1099_type?: Form1099Type | undefined
  recipient?: Credit1099Recipient | undefined
  payer?: Credit1099Payer | undefined
  filer?: Credit1099Filer | undefined
  tax_year?: (string | null) | undefined
  rents?: (number | null) | undefined
  royalties?: (number | null) | undefined
  other_income?: (number | null) | undefined
  federal_income_tax_withheld?: (number | null) | undefined
  fishing_boat_proceeds?: (number | null) | undefined
  medical_and_healthcare_payments?: (number | null) | undefined
  nonemployee_compensation?: (number | null) | undefined
  substitute_payments_in_lieu_of_dividends_or_interest?: (number | null) | undefined
  payer_made_direct_sales_of_5000_or_more_of_consumer_products_to_buyer?:
    | (string | null)
    | undefined
  crop_insurance_proceeds?: (number | null) | undefined
  excess_golden_parachute_payments?: (number | null) | undefined
  gross_proceeds_paid_to_an_attorney?: (number | null) | undefined
  section_409a_deferrals?: (number | null) | undefined
  section_409a_income?: (number | null) | undefined
  state_tax_withheld?: (number | null) | undefined
  state_tax_withheld_lower?: (number | null) | undefined
  payer_state_number?: (string | null) | undefined
  payer_state_number_lower?: (string | null) | undefined
  state_income?: (number | null) | undefined
  state_income_lower?: (number | null) | undefined
  transactions_reported?: (string | null) | undefined
  pse_name?: (string | null) | undefined
  pse_telephone_number?: (string | null) | undefined
  gross_amount?: (number | null) | undefined
  card_not_present_transaction?: (number | null) | undefined
  merchant_category_code?: (string | null) | undefined
  number_of_payment_transactions?: (string | null) | undefined
  january_amount?: (number | null) | undefined
  february_amount?: (number | null) | undefined
  march_amount?: (number | null) | undefined
  april_amount?: (number | null) | undefined
  may_amount?: (number | null) | undefined
  june_amount?: (number | null) | undefined
  july_amount?: (number | null) | undefined
  august_amount?: (number | null) | undefined
  september_amount?: (number | null) | undefined
  october_amount?: (number | null) | undefined
  november_amount?: (number | null) | undefined
  december_amount?: (number | null) | undefined
  primary_state?: (string | null) | undefined
  secondary_state?: (string | null) | undefined
  primary_state_id?: (string | null) | undefined
  secondary_state_id?: (string | null) | undefined
  primary_state_income_tax?: (number | null) | undefined
  secondary_state_income_tax?: (number | null) | undefined
}
type CreditI20Student = {
  given_name?: (string | null) | undefined
  surname_primary_name?: (string | null) | undefined
  passport_name?: (string | null) | undefined
  preferred_name?: (string | null) | undefined
  school_name?: (string | null) | undefined
  program_start_date?: (string | null) | undefined
  program_end_date?: (string | null) | undefined
}
type CreditI20 = {
  document_id?: (string | null) | undefined
  document_metadata?: CreditDocumentMetadata | undefined
  student?: CreditI20Student | undefined
  personal_funds?: (number | null) | undefined
  on_campus_employment?: (number | null) | undefined
  funds_from_this_school?: (number | null) | undefined
  students_funding_total?: (number | null) | undefined
  funds_from_another_source?: (number | null) | undefined
  estimated_average_costs_total?: (number | null) | undefined
  estimated_average_living_expenses?: (number | null) | undefined
  students_funding_period_months?: (bigint | null) | undefined
  estimated_average_costs_period_months?: (bigint | null) | undefined
}
type PayrollIncomeObject = {
  account_id: string | null
  pay_stubs: CreditPayStub[]
  w2s: CreditW2[]
  form1099s: Credit1099[]
  i20s: CreditI20[]
}
type PayrollItem = {
  item_id: ItemId
  institution_id: string
  institution_name: string
  accounts: PayrollIncomeAccountData[]
  payroll_income: PayrollIncomeObject[]
  status: PayrollItemStatus
  updated_at: string | null
}
type CreditPayrollIncomeGetResponse = {
  items: PayrollItem[]
  error?: PlaidError | undefined
  request_id: RequestID
}
type CreditPayrollIncomeRiskSignalsGetRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  user_token?: UserToken | undefined
  user_id?: NewUserID | undefined
}
type RiskSignalDocumentStatus =
  | 'PROCESSING'
  | 'PROCESSING_COMPLETE'
  | 'PROCESSING_ERROR'
  | 'PASSWORD_PROTECTED'
  | 'VIRUS_DETECTED'
type RiskSignalDocumentType =
  | 'UNKNOWN'
  | 'BANK_STATEMENT'
  | 'BENEFITS_STATEMENT'
  | 'BUSINESS_FILING'
  | 'CHECK'
  | 'DRIVING_LICENSE'
  | 'FINANCIAL_STATEMENT'
  | 'INVOICE'
  | 'PAYSLIP'
  | 'SOCIAL_SECURITY_CARD'
  | 'TAX_FORM'
  | 'UTILITY_BILL'
type RiskSignalFileType =
  | 'UNKNOWN'
  | 'IMAGE_PDF'
  | 'SCAN_OCR'
  | 'TRUE_PDF'
  | 'IMAGE'
  | 'MIXED_PAGE_PDF'
  | 'EMPTY_PDF'
  | 'FLATTENED_PDF'
type RiskSignalDocumentReference = {
  document_id?: (string | null) | undefined
  document_name?: string | undefined
  status?: RiskSignalDocumentStatus | undefined
  document_type?: RiskSignalDocumentType | undefined
  file_type?: RiskSignalFileType | undefined
}
type DocumentRiskSignalInstitutionMetadata = { item_id: ItemId } | null
type DocumentRiskSignal = {
  type: string | null
  field: string | null
  has_fraud_risk: boolean | null
  institution_metadata: DocumentRiskSignalInstitutionMetadata
  expected_value: string | null
  actual_value: string | null
  signal_description: string | null
  page_number: number | null
} | null
type DocumentRiskSummary = { risk_score: number | null }
type SingleDocumentRiskSignal = {
  document_reference: RiskSignalDocumentReference
  risk_signals: DocumentRiskSignal[]
  risk_summary: DocumentRiskSummary
}
type MultiDocumentRiskSignal = {
  document_references: RiskSignalDocumentReference[]
  risk_signals: DocumentRiskSignal[]
}
type DocumentRiskSignalsObject = {
  account_id: string | null
  single_document_risk_signals: SingleDocumentRiskSignal[]
  multi_document_risk_signals: MultiDocumentRiskSignal[]
}
type PayrollRiskSignalsItem = {
  item_id: ItemId
  verification_risk_signals: DocumentRiskSignalsObject[]
}
type CreditPayrollIncomeRiskSignalsGetResponse = {
  items: PayrollRiskSignalsItem[]
  error?: PlaidError | undefined
  request_id: RequestID
}
type CreditPayrollIncomePrecheckRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  user_token?: UserToken | undefined
  user_id?: {} | undefined
  access_tokens?: AccessToken[] | undefined
  employer?: IncomeVerificationPrecheckEmployer | undefined
  us_military_info?: IncomeVerificationPrecheckMilitaryInfo | undefined
  payroll_institution?: IncomeVerificationPrecheckPayrollInstitution | undefined
}
type CreditPayrollIncomePrecheckResponse = {
  request_id: RequestID
  confidence: IncomeVerificationPrecheckConfidence
}
type CreditEmploymentGetRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  user_token?: UserToken | undefined
  user_id?: NewUserID | undefined
}
type CreditEmploymentVerificationStatus = string | null
type CreditEmployerVerification = { name: string | null }
type CreditPlatformIds = {
  employee_id: string | null
  payroll_id: string | null
  position_id: string | null
}
type CreditEmploymentEmployeeType = string | null
type CreditEmploymentVerification = {
  account_id: string | null
  status: CreditEmploymentVerificationStatus
  start_date: string | null
  end_date: string | null
  employer: CreditEmployerVerification
  title: string | null
  platform_ids: CreditPlatformIds
  employee_type: CreditEmploymentEmployeeType
  last_paystub_date: string | null
}
type CreditEmploymentItem = {
  item_id: ItemId
  employments: CreditEmploymentVerification[]
  employment_report_token?: string | undefined
}
type CreditEmploymentGetResponse = { items: CreditEmploymentItem[]; request_id: RequestID }
type CreditPayrollIncomeRefreshRequestOptions = {
  item_ids?: string[] | undefined
  webhook?: string | undefined
}
type CreditPayrollIncomeRefreshRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  user_token?: UserToken | undefined
  user_id?: NewUserID | undefined
  options?: CreditPayrollIncomeRefreshRequestOptions | undefined
}
type CreditPayrollIncomeRefreshStatus = string
type CreditPayrollIncomeRefreshResponse = {
  request_id: RequestID
  verification_refresh_status: CreditPayrollIncomeRefreshStatus
}
type CreditRelayCreateRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  report_tokens: string[]
  secondary_client_id: string
  webhook?: (string | null) | undefined
}
type CreditRelayCreateResponse = { relay_token: string; request_id: RequestID }
type ReportType = 'asset'
type CreditRelayGetRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  relay_token: string
  report_type: ReportType
  include_insights?: boolean | undefined
}
type CreditRelayPDFGetRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  relay_token: string
  report_type: ReportType
}
type CreditRelayPDFGetResponse = File
type CreditRelayRefreshRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  relay_token: string
  report_type: ReportType
  webhook?: (string | null) | undefined
}
type CreditRelayRefreshResponse = {
  relay_token: string
  asset_report_id?: AssetReportId | undefined
  request_id: RequestID
}
type CreditRelayRemoveRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  relay_token: string
}
type CreditRelayRemoveResponse = { removed: boolean; request_id: RequestID }
type SandboxBankTransferFireWebhookRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  webhook: string
}
type SandboxBankTransferFireWebhookResponse = { request_id: RequestID }
type SandboxIncomeWebhookFireRequestWebhookCode =
  | 'INCOME_VERIFICATION'
  | 'USER_INCOME_VERIFICATION'
  | 'INCOME_VERIFICATION_RISK_SIGNALS'
  | 'USER_INCOME_VERIFICATION_RISK_SIGNALS'
type SandboxIncomeFireWebhookRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  item_id: string
  user_id?: string | undefined
  webhook: string
  verification_status?:
    | 'VERIFICATION_STATUS_PROCESSING_COMPLETE'
    | 'VERIFICATION_STATUS_PROCESSING_FAILED'
    | 'VERIFICATION_STATUS_DOCUMENT_REJECTED'
    | undefined
  webhook_code: SandboxIncomeWebhookFireRequestWebhookCode
}
type SandboxIncomeFireWebhookResponse = { request_id: RequestID }
type SandboxBankIncomeWebhookFireRequestWebhookCode =
  | 'BANK_INCOME_REFRESH_UPDATE'
  | 'BANK_INCOME_REFRESH_COMPLETE'
type BankIncomeRefreshCompleteResult = 'SUCCESS' | 'FAILURE'
type SandboxBankIncomeWebhookFireRequestWebhookFields = {
  user_id: string
  bank_income_refresh_complete_result?: BankIncomeRefreshCompleteResult | undefined
}
type SandboxBankIncomeFireWebhookRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  webhook_override?: string | undefined
  webhook_code: SandboxBankIncomeWebhookFireRequestWebhookCode
  webhook_fields: SandboxBankIncomeWebhookFireRequestWebhookFields
}
type SandboxBankIncomeFireWebhookResponse = { request_id: RequestID }
type CashFlowUpdatesEventWebhookCodes =
  | 'LARGE_DEPOSIT_DETECTED'
  | 'LOW_BALANCE_DETECTED'
  | 'NEW_LOAN_PAYMENT_DETECTED'
  | 'NSF_OVERDRAFT_DETECTED'
type SandboxCraCashflowUpdatesUpdateRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  user_token?: UserToken | undefined
  webhook_codes?: (CashFlowUpdatesEventWebhookCodes[] | null) | undefined
  user_id?: NewUserID | undefined
}
type SandboxCraCashflowUpdatesUpdateResponse = { request_id: RequestID }
type SandboxCraServicingSimulateErrorWebhookCode =
  | 'USER_NOT_FOUND'
  | 'PRODUCT_GENERATION_FAILED'
  | 'UNMATCH'
  | 'DATA_UNAVAILABLE'
  | 'NO_ELIGIBLE_ITEMS_ON_PROFILE'
type SandboxCraServicingSimulateRequestOptions = {
  transactions_end_date?: (string | null) | undefined
  error_webhook_code?: SandboxCraServicingSimulateErrorWebhookCode | undefined
} | null
type SandboxCraServicingSimulateRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  subscription_id: string
  user_id?: string | undefined
  options?: SandboxCraServicingSimulateRequestOptions | undefined
}
type SandboxCraServicingSimulateResponse = {
  report_id?: (string | null) | undefined
  request_id: RequestID
}
type SandboxOauthSelectAccountsRequest = { oauth_state_id: string; accounts: string[] }
type SandboxOauthSelectAccountsResponse = { [x: string]: unknown }
type SignalEvaluateRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  access_token: AccessToken
  account_id: string
  client_transaction_id: string
  amount: number
  user_present?: (boolean | null) | undefined
  client_user_id?: string | undefined
  is_recurring?: (boolean | null) | undefined
  default_payment_method?: (string | null) | undefined
  user?: SignalUser | undefined
  device?: SignalDevice | undefined
  risk_profile_key?: (string | null) | undefined
  ruleset_key?: (string | null) | undefined
}
type RiskProfile = { key?: string | undefined; outcome?: string | undefined } | null
type SignalEvaluateResponse = {
  request_id: RequestID
  scores: SignalScores
  core_attributes?: SignalEvaluateCoreAttributes | undefined
  risk_profile?: RiskProfile | undefined
  ruleset?: Ruleset | undefined
  warnings: SignalWarning[]
}
type SignalScheduleDefaultPaymentMethod =
  | 'SAME_DAY_ACH'
  | 'STANDARD_ACH'
  | 'MULTIPLE_PAYMENT_METHODS'
type SignalScheduleRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  access_token: AccessToken
  account_id: string
  client_transaction_id: string
  amount: number
  default_payment_method?: SignalScheduleDefaultPaymentMethod | undefined
}
type RecommendationString = 'RECOMMENDED' | 'NOT_RECOMMENDED' | 'UNKNOWN'
type SignalScheduleRecommendation = {
  date?: string | undefined
  recommendation?: RecommendationString | undefined
  rank?: (number | null) | undefined
}
type SignalScheduleResponse = {
  optimal_date: string | null
  recommendations: SignalScheduleRecommendation[]
  warnings: SignalWarning[]
  request_id: RequestID
}
type SignalDecisionReportRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  client_transaction_id: string
  initiated: boolean
  days_funds_on_hold?: (number | null) | undefined
  decision_outcome?: SignalDecisionOutcome | undefined
  payment_method?: SignalPaymentMethod | undefined
  amount_instantly_available?: (number | null) | undefined
  submitted_at?: string | undefined
}
type SignalDecisionReportResponse = { request_id: RequestID }
type SignalReturnReportRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  client_transaction_id: string
  return_code: string
  returned_at?: (string | null) | undefined
}
type SignalReturnReportResponse = { request_id: RequestID }
type SignalPrepareRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  access_token: AccessToken
}
type SignalPrepareResponse = { request_id: RequestID }
type WalletISOCurrencyCode = 'GBP' | 'EUR'
type WalletCreateRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  iso_currency_code: WalletISOCurrencyCode
}
type WalletBalance = { iso_currency_code: string; current: number; available: number }
type RecipientBACSInResponse = { account: string; sort_code: string } | null
type NumbersIBAN = string
type NumbersInternationalIBAN = { iban: NumbersIBAN; bic: string } | null
type WalletNumbers = {
  bacs?: RecipientBACSInResponse | undefined
  international?: NumbersInternationalIBAN | undefined
}
type WalletStatus = 'UNKNOWN' | 'ACTIVE' | 'CLOSED' | 'BLOCKED'
type WalletCreateResponse = {
  wallet_id: string
  balance: WalletBalance
  numbers: WalletNumbers
  recipient_id?: string | undefined
  status: WalletStatus
  request_id?: RequestID | undefined
}
type WalletGetRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  wallet_id: string
}
type WalletGetResponse = {
  wallet_id: string
  balance: WalletBalance
  numbers: WalletNumbers
  recipient_id?: string | undefined
  status: WalletStatus
  request_id?: RequestID | undefined
}
type WalletListRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  iso_currency_code?: WalletISOCurrencyCode | undefined
  cursor?: string | undefined
  count?: number | undefined
}
type Wallet = {
  wallet_id: string
  balance: WalletBalance
  numbers: WalletNumbers
  recipient_id?: string | undefined
  status: WalletStatus
}
type WalletListResponse = {
  wallets: Wallet[]
  next_cursor?: string | undefined
  request_id: RequestID
}
type WalletTransactionCounterpartyBACS = {
  account?: string | undefined
  sort_code?: string | undefined
}
type WalletTransactionCounterpartyInternational = { iban?: NumbersIBAN | undefined } | null
type WalletTransactionCounterpartyNumbers = {
  bacs?: WalletTransactionCounterpartyBACS | undefined
  international?: WalletTransactionCounterpartyInternational | undefined
}
type WalletTransactionCounterparty = {
  name: string
  numbers: WalletTransactionCounterpartyNumbers
  address?: PaymentInitiationAddress | undefined
  date_of_birth?: (string | null) | undefined
  holder_category?: {} | undefined
  is_verified?: boolean | undefined
}
type WalletTransactionAmount = { iso_currency_code: WalletISOCurrencyCode; value: number }
type OriginatingFundSource = {
  full_name: string
  address: PaymentInitiationAddress
  account_number: string
  bic: string
} | null
type WalletTransactionExecuteRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  idempotency_key: WalletTransactionIdempotencyKey
  wallet_id: string
  counterparty: WalletTransactionCounterparty
  amount: WalletTransactionAmount
  user_id?: string | undefined
  reference: string
  originating_fund_source?: OriginatingFundSource | undefined
}
type WalletTransactionExecuteResponse = {
  transaction_id: string
  status: WalletTransactionStatus
  request_id: RequestID
}
type WalletTransactionGetRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  transaction_id: string
}
type WalletPaymentScheme =
  | null
  | 'FASTER_PAYMENTS'
  | 'SEPA_CREDIT_TRANSFER'
  | 'SEPA_CREDIT_TRANSFER_INSTANT'
type WalletTransactionCounterpartyBACSInResponse = { account: string; sort_code: string }
type WalletTransactionCounterpartyNumbersInResponse = {
  bacs?: WalletTransactionCounterpartyBACSInResponse | undefined
  international?: WalletTransactionCounterpartyInternational | undefined
}
type WalletTransactionCounterpartyInResponse = {
  name: string
  numbers: WalletTransactionCounterpartyNumbersInResponse
  address?: PaymentInitiationAddress | undefined
  date_of_birth?: (string | null) | undefined
}
type WalletTransactionPayeeVerificationStatus =
  | 'FULL_MATCH'
  | 'PARTIAL_MATCH'
  | 'NO_MATCH'
  | 'ERROR'
  | 'CHECK_NOT_POSSIBLE'
type WalletTransactionFailureReason =
  | 'EXTERNAL_SYSTEM'
  | 'EXPIRED'
  | 'CANCELLED'
  | 'INVALID'
  | 'ACCOUNT_INVALID'
  | 'AUTHENTICATION_FAILED'
  | 'UNKNOWN'
type WalletTransactionRelation = {
  id?: string | undefined
  type?: 'PAYOUT' | 'RETURN' | 'REFUND' | 'FUNDS_SWEEP' | undefined
}
type WalletTransactionGetResponse = {
  transaction_id: string
  wallet_id: string
  reference: string
  type:
    | 'BANK_TRANSFER'
    | 'PAYOUT'
    | 'PIS_PAY_IN'
    | 'REFUND'
    | 'FUNDS_SWEEP'
    | 'RETURN'
    | 'RECALL'
    | 'ACCOUNT_FUNDING'
    | 'AUTO_REFUND'
    | 'TRANSFER_OUT'
  scheme?: WalletPaymentScheme | undefined
  amount: WalletTransactionAmount
  counterparty: WalletTransactionCounterpartyInResponse
  status: WalletTransactionStatus
  created_at: string
  last_status_update: string
  payee_verification_status?: WalletTransactionPayeeVerificationStatus | undefined
  payment_id?: (string | null) | undefined
  failure_reason?: WalletTransactionFailureReason | undefined
  error?: PlaidError | undefined
  related_transactions?: WalletTransactionRelation[] | undefined
  request_id?: RequestID | undefined
}
type WalletTransactionListRequestOptions = {
  start_time?: string | undefined
  end_time?: string | undefined
} | null
type WalletTransactionListRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  wallet_id: string
  cursor?: string | undefined
  count?: number | undefined
  options?: WalletTransactionListRequestOptions | undefined
}
type WalletTransaction = {
  transaction_id: string
  wallet_id: string
  reference: string
  type:
    | 'BANK_TRANSFER'
    | 'PAYOUT'
    | 'PIS_PAY_IN'
    | 'REFUND'
    | 'FUNDS_SWEEP'
    | 'RETURN'
    | 'RECALL'
    | 'ACCOUNT_FUNDING'
    | 'AUTO_REFUND'
    | 'TRANSFER_OUT'
  scheme?: WalletPaymentScheme | undefined
  amount: WalletTransactionAmount
  counterparty: WalletTransactionCounterpartyInResponse
  status: WalletTransactionStatus
  created_at: string
  last_status_update: string
  payee_verification_status?: WalletTransactionPayeeVerificationStatus | undefined
  payment_id?: (string | null) | undefined
  failure_reason?: WalletTransactionFailureReason | undefined
  error?: PlaidError | undefined
  related_transactions?: WalletTransactionRelation[] | undefined
}
type WalletTransactionListResponse = {
  transactions: WalletTransaction[]
  next_cursor?: string | undefined
  request_id: RequestID
}
type PfcPrimaryCategory = string
type PfcDetailedCategory = string
type TransactionsRuleField = 'TRANSACTION_ID' | 'MERCHANT_NAME'
type TransactionsRuleType = 'EXACT_MATCH' | 'SUBSTRING_MATCH'
type TransactionsRuleDetails = {
  field: TransactionsRuleField
  type: TransactionsRuleType
  query: string
}
type TransactionsRulesCreateRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  client_user_id: string
  pfc_primary_category: PfcPrimaryCategory
  pfc_detailed_category: PfcDetailedCategory
  rule_details: TransactionsRuleDetails
}
type TransactionsCategoryRule = {
  id?: string | undefined
  user_id?: string | undefined
  created_at?: string | undefined
  updated_at?: string | undefined
  pfc_primary_category?: PfcPrimaryCategory | undefined
  pfc_detailed_category?: PfcDetailedCategory | undefined
  rule_details?: TransactionsRuleDetails | undefined
}
type TransactionsRulesCreateResponse = { rule: TransactionsCategoryRule; request_id: RequestID }
type TransactionsRulesListRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  client_user_id: string
}
type TransactionsRulesListResponse = { rules: TransactionsCategoryRule[]; request_id: RequestID }
type TransactionsRulesRemoveRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  client_user_id: string
  rule_id: string
}
type TransactionsRulesRemoveResponse = { request_id: RequestID }
type TransactionsUserInsightsGetRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  client_user_id: string
}
type UserDataOverview = {
  transaction_count: number
  oldest_transaction_date?: string | undefined
  newest_transaction_date?: string | undefined
  days_available: number
  total_outflows: number
  total_inflows: number
}
type DetectedAccount = {
  account_type: string | null
  account_subtype: string | null
  transaction_count: number
  oldest_transaction_date?: string | undefined
  newest_transaction_date?: string | undefined
  newest_transaction_amount?: number | undefined
  total_outflows: number
  total_inflows: number
}
type FinancialInstitutionInsights = {
  name: string
  entity_id?: (string | null) | undefined
  website: string | null
  detected_accounts: DetectedAccount[]
}
type MerchantInsights = {
  name: string
  entity_id?: (string | null) | undefined
  website: string | null
  transaction_count: number
  personal_finance_category_primary: string | null
  personal_finance_category_detailed: string | null
  total_outflows: number
  total_inflows: number
}
type CounterpartyInsights = {
  financial_institution_insights?: FinancialInstitutionInsights[] | undefined
  merchant_insights?: MerchantInsights[] | undefined
}
type CategoryInsightDetails = {
  name: string
  transaction_count: number
  total_outflows: number
  total_inflows: number
  top_counterparties?: string[] | undefined
}
type CategoryInsights = {
  primary_category_insights?: CategoryInsightDetails[] | undefined
  detailed_category_insights?: CategoryInsightDetails[] | undefined
}
type RecurringInsightsStream = {
  stream_id: string
  description?: string | undefined
  merchant_name: string
  oldest_transaction_date?: string | undefined
  newest_transaction_date?: string | undefined
  average_days_apart: number
  frequency?: RecurringTransactionFrequency | undefined
  transaction_count?: number | undefined
  transaction_ids?: string[] | undefined
  average_amount?: TransactionStreamAmount | undefined
  newest_transaction_amount?: TransactionStreamAmount | undefined
  is_active: boolean
  status?: TransactionStreamStatus | undefined
  personal_finance_category_primary?: string | undefined
  personal_finance_category_detailed?: string | undefined
}
type RecurringTransactions = {
  inflow_streams: RecurringInsightsStream[]
  outflow_streams: RecurringInsightsStream[]
}
type TransactionsUserInsightsGetResponse = {
  user_data_overview: UserDataOverview
  counterparty_insights?: CounterpartyInsights | undefined
  category_insights?: CategoryInsights | undefined
  recurring_transactions?: RecurringTransactions | undefined
}
type BetaEwaReportV1GetRequest = {
  access_token: AccessToken
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
}
type EwaScore = {
  lowest_amount?: number | undefined
  highest_amount?: number | undefined
  score?: number | undefined
}
type EwaAttributes = { [x: string]: number | null } | null
type BetaEwaReportV1GetResponse = {
  request_id?: RequestID | undefined
  ewa_report_id?: string | undefined
  generation_time?: string | undefined
  ewa_scores?: EwaScore[] | undefined
  ewa_attributes?: EwaAttributes | undefined
}
type BetaCashAdvanceIncomeInsightsV1GetRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  user_id: NewUserID
}
type CashAdvanceIncomeCategory = { primary: string | null } | null
type CashAdvancePayFrequency =
  | 'WEEKLY'
  | 'BIWEEKLY'
  | 'SEMI_MONTHLY'
  | 'MONTHLY'
  | 'ANNUALLY'
  | 'DAILY'
  | 'DYNAMIC'
  | null
type CashAdvanceIncomeStream = {
  provider_name: string | null
  category: CashAdvanceIncomeCategory
  pay_frequency: CashAdvancePayFrequency
  iso_currency_code: string | null
}
type BetaCashAdvanceIncomeInsightsV1GetResponse = {
  request_id: RequestID
  next_payment_date: string | null
  next_payment_amount: number | null
  iso_currency_code: string | null
  income_streams: CashAdvanceIncomeStream[]
}
type BetaIssuesV1GetRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  issue_id: string
}
type BetaIssuesV1IssueType = 'ERROR'
type BetaIssuesV1IssueSeverity = 'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW'
type BetaIssuesV1IssueBehavior =
  | 'NEW_CONNECTIONS_CANNOT_BE_ESTABLISHED'
  | 'EXISTING_CONNECTIONS_WILL_NOT_RECEIVE_UPDATES'
  | 'EXISTING_CONNECTIONS_WILL_BE_DISCONNECTED'
type BetaIssuesV1IssueAttribution = 'USER' | 'PLAID' | 'DATA_PARTNER'
type BetaIssuesV1IssueStatus =
  | 'USER_ACTION_REQUIRED'
  | 'BACKLOGGED'
  | 'LIKELY_TO_BE_PRIORITIZED'
  | 'IN_PROGRESS'
  | 'RESOLVED'
  | 'PENDING_NOTIFICATION'
  | 'DATA_PARTNER_NOTIFIED'
  | 'DATA_PARTNER_FIX_IN_PROGRESS'
type BetaIssuesV1IssueImpact = {
  affected_new_item_count: number
  affected_existing_item_count: number
} | null
type BetaIssuesV1IssueResolutionType = 'MANUAL_RESOLUTION' | 'AUTOMATED_RESOLUTION'
type BetaIssuesV1IssueResolutionEvent = {
  resolution_time: string
  type: BetaIssuesV1IssueResolutionType
}
type BetaIssuesV1GetResponse = {
  issue_id: string
  issue_type: BetaIssuesV1IssueType
  severity: BetaIssuesV1IssueSeverity
  institution_id: string
  institution_name: string
  behaviors: BetaIssuesV1IssueBehavior[]
  issue_error_type: string | null
  issue_error_code: string | null
  description: string
  attribution: BetaIssuesV1IssueAttribution
  status: BetaIssuesV1IssueStatus
  user_guidance: string | null
  estimated_resolution_time: string | null
  start_time: string | null
  end_time: string | null
  impact: BetaIssuesV1IssueImpact
  affected_products: Products[]
  resolution_log: BetaIssuesV1IssueResolutionEvent[]
  request_id?: RequestID | undefined
}
type BetaIssuesV1ListRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  institution_id: string
}
type BetaIssuesV1Issue = {
  issue_id: string
  issue_type: BetaIssuesV1IssueType
  severity: BetaIssuesV1IssueSeverity
  institution_id: string
  institution_name: string
  behaviors: BetaIssuesV1IssueBehavior[]
  issue_error_type: string | null
  issue_error_code: string | null
  description: string
  attribution: BetaIssuesV1IssueAttribution
  status: BetaIssuesV1IssueStatus
  user_guidance: string | null
  estimated_resolution_time: string | null
  start_time: string | null
  end_time: string | null
  impact: BetaIssuesV1IssueImpact
  affected_products: Products[]
  resolution_log: BetaIssuesV1IssueResolutionEvent[]
}
type BetaIssuesV1ListResponse = { issues: BetaIssuesV1Issue[]; request_id: RequestID }
type BetaIssuesV1MatchIdentifierType = 'ITEM_ID' | 'REQUEST_ID' | 'LINK_SESSION_ID' | 'ACCOUNT_ID'
type BetaIssuesV1MatchRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  identifier_type: BetaIssuesV1MatchIdentifierType
  identifier: string
}
type BetaIssuesV1MatchResponse = {
  item_id: string
  issues: BetaIssuesV1Issue[]
  request_id: RequestID
}
type BetaIssuesV1SubscribeRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  issue_id: string
  webhook: string
}
type BetaIssuesV1SubscribeResponse = { request_id: RequestID }
type BetaIssuesV1UnsubscribeRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  issue_id: string
}
type BetaIssuesV1UnsubscribeResponse = { request_id: RequestID }
type IssuesSearchRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  item_id?: string | undefined
  link_session_id?: string | undefined
  link_session_request_id?: string | undefined
}
type IssuesStatus =
  | 'REPORTED'
  | 'AWAITING_RESOLUTION'
  | 'FIX_IN_PROGRESS'
  | 'FIX_PENDING_VALIDATION'
  | 'CANNOT_FIX'
  | 'RESOLVED'
type Issue = {
  issue_id?: string | undefined
  institution_names?: string[] | undefined
  institution_ids?: string[] | undefined
  created_at?: string | undefined
  summary?: string | undefined
  detailed_description?: string | undefined
  status?: IssuesStatus | undefined
}
type IssuesSearchResponse = { issues?: Issue[] | undefined; request_id?: RequestID | undefined }
type IssuesGetRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  issue_id: string
}
type IssuesGetResponse = { issue?: Issue | undefined; request_id?: RequestID | undefined }
type IssuesSubscribeRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  issue_id: string
  webhook: string
}
type IssuesSubscribeResponse = { request_id: RequestID }
type PaymentProfileCreateRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
}
type PaymentProfileCreateResponse = {
  payment_profile_token: PaymentProfileToken
  request_id: RequestID
}
type PaymentProfileGetRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  payment_profile_token: PaymentProfileToken
}
type PaymentProfileStatus = 'PENDING' | 'READY' | 'REMOVED'
type PaymentProfileGetResponse = {
  updated_at: string
  created_at: string
  deleted_at: string | null
  status: PaymentProfileStatus
  request_id: RequestID
}
type PaymentProfileRemoveRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  payment_profile_token: PaymentProfileToken
}
type PaymentProfileRemoveResponse = { request_id: RequestID }
type PartnerEndCustomerTechnicalContact = {
  given_name?: string | undefined
  family_name?: string | undefined
  email?: string | undefined
}
type PartnerEndCustomerBillingContact = {
  given_name?: string | undefined
  family_name?: string | undefined
  email?: string | undefined
}
type PartnerEndCustomerCustomerSupportInfo = {
  email?: string | undefined
  phone_number?: string | undefined
  contact_url?: string | undefined
  link_update_url?: string | undefined
}
type PartnerEndCustomerAddress = {
  city?: string | undefined
  street?: string | undefined
  region?: string | undefined
  postal_code?: string | undefined
  country_code?: string | undefined
}
type PartnerEndCustomerAssetsUnderManagement = { amount: number; iso_currency_code: string }
type PartnerCustomerCreateRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  company_name: string
  is_diligence_attested: boolean
  products?: Products[] | undefined
  create_link_customization?: boolean | undefined
  logo?: string | undefined
  legal_entity_name: string
  website: string
  application_name: string
  technical_contact?: PartnerEndCustomerTechnicalContact | undefined
  billing_contact?: PartnerEndCustomerBillingContact | undefined
  customer_support_info?: PartnerEndCustomerCustomerSupportInfo | undefined
  address: PartnerEndCustomerAddress
  is_bank_addendum_completed: boolean
  assets_under_management?: PartnerEndCustomerAssetsUnderManagement | undefined
  redirect_uris?: string[] | undefined
  registration_number?: string | undefined
}
type PartnerEndCustomerStatus =
  | 'UNDER_REVIEW'
  | 'PENDING_ENABLEMENT'
  | 'ACTIVE'
  | 'DENIED'
  | 'MORE_INFORMATION_NEEDED'
type PartnerEndCustomerSecrets = {
  sandbox?: string | undefined
  development?: string | undefined
  production?: string | undefined
}
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
type PartnerCustomerGetRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  end_customer_client_id: string
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
type PartnerCustomerEnableRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  end_customer_client_id: string
}
type PartnerCustomerEnableResponse = {
  production_secret?: string | undefined
  request_id?: RequestID | undefined
}
type PartnerCustomerRemoveRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  end_customer_client_id: string
}
type PartnerCustomerRemoveResponse = { request_id?: RequestID | undefined }
type PartnerCustomerOAuthInstitutionsGetRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  end_customer_client_id: string
}
type PartnerEndCustomerFlowdownStatus = 'NOT_STARTED' | 'IN_REVIEW' | 'NEGOTIATION' | 'COMPLETE'
type PartnerEndCustomerQuestionnaireStatus = 'NOT_STARTED' | 'RECEIVED' | 'COMPLETE'
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
  name?: string | undefined
  institution_id?: string | undefined
  environments?: PartnerEndCustomerOAuthInstitutionEnvironments | undefined
  production_enablement_date?: (string | null) | undefined
  classic_disablement_date?: (string | null) | undefined
  errors?: PlaidError[] | undefined
}
type PartnerCustomerOAuthInstitutionsGetResponse = {
  flowdown_status?: PartnerEndCustomerFlowdownStatus | undefined
  questionnaire_status?: PartnerEndCustomerQuestionnaireStatus | undefined
  institutions?: PartnerEndCustomerOAuthInstitution[] | undefined
  request_id?: RequestID | undefined
}
type PartnerEndCustomerBankAddendumAcceptance = {
  customer_accepted?: boolean | undefined
  customer_ip_address?: string | undefined
  customer_agreement_timestamp?: string | undefined
}
type PartnerEndCustomerCRAUseCase =
  | 'CREDIT_UNDERWRITING'
  | 'TENANT_SCREENING'
  | 'INVESTOR_OR_SERVICER_OF_CREDIT'
  | 'UTILITIES'
  | 'BANK_ACCOUNT_OPENING'
  | 'IDENTITY_VERIFICATION_FRAUD_PREVENTION'
  | 'COLLECTIONS_DEBT_RECOVERY'
type PartnerEndCustomerCRAUseCases = { use_cases?: PartnerEndCustomerCRAUseCase[] | undefined }
type PartnerEndCustomerCRAPurposes = {
  WRITTEN_INSTRUCTION?: PartnerEndCustomerCRAUseCases | undefined
  EXTENSION_OF_CREDIT_OR_ACCOUNT_REVIEW?: PartnerEndCustomerCRAUseCases | undefined
  EMPLOYMENT?: PartnerEndCustomerCRAUseCases | undefined
  INSURANCE_UNDERWRITING?: PartnerEndCustomerCRAUseCases | undefined
  LICENSE_ELIGIBILITY?: PartnerEndCustomerCRAUseCases | undefined
  RISK_ASSESSMENT?: PartnerEndCustomerCRAUseCases | undefined
  BUSINESS_NEED_TRANSACTION?: PartnerEndCustomerCRAUseCases | undefined
  BUSINESS_NEED_ACCOUNT_REVIEW?: PartnerEndCustomerCRAUseCases | undefined
}
type PartnerEndCustomerCRAQuestionnaire = {
  purposes?: PartnerEndCustomerCRAPurposes | undefined
  is_third_party_involved?: boolean | undefined
  is_technical_service_provider_involved?: boolean | undefined
}
type PartnerEndCustomerQuestionnaires = { cra?: PartnerEndCustomerCRAQuestionnaire | undefined }
type BetaPartnerCustomerV1CreateRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  company_name: string
  is_diligence_attested?: boolean | undefined
  products?: Products[] | undefined
  create_link_customization?: boolean | undefined
  logo?: string | undefined
  legal_entity_name?: string | undefined
  website: string
  application_name: string
  technical_contact?: PartnerEndCustomerTechnicalContact | undefined
  billing_contact?: PartnerEndCustomerBillingContact | undefined
  customer_support_info: PartnerEndCustomerCustomerSupportInfo
  address: PartnerEndCustomerAddress
  redirect_uris?: string[] | undefined
  bank_addendum_acceptance?: PartnerEndCustomerBankAddendumAcceptance | undefined
  questionnaires?: PartnerEndCustomerQuestionnaires | undefined
}
type PartnerEndCustomerProductStatuses = { [x: string]: { [x: string]: unknown } }
type PartnerEndCustomerRequirementDue =
  | 'legal_entity_name'
  | 'website'
  | 'application_name'
  | 'is_diligence_attested'
  | 'technical_contact'
  | 'billing_contact'
  | 'address'
  | 'bank_addendum_acceptance'
  | 'questionnaires.cra'
type PartnerEndCustomerRequirementsDue = PartnerEndCustomerRequirementDue[]
type BetaPartnerEndCustomerWithSecrets = {
  client_id?: string | undefined
  company_name?: string | undefined
  status?: PartnerEndCustomerStatus | undefined
  product_statuses?: PartnerEndCustomerProductStatuses | undefined
  requirements_due?: PartnerEndCustomerRequirementsDue | undefined
  secrets?: PartnerEndCustomerSecrets | undefined
}
type BetaPartnerCustomerV1CreateResponse = {
  end_customer?: BetaPartnerEndCustomerWithSecrets | undefined
  request_id?: RequestID | undefined
}
type BetaPartnerCustomerV1GetRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  end_customer_client_id: string
}
type BetaPartnerEndCustomer = {
  client_id?: string | undefined
  company_name?: string | undefined
  status?: PartnerEndCustomerStatus | undefined
  product_statuses?: PartnerEndCustomerProductStatuses | undefined
  requirements_due?: PartnerEndCustomerRequirementsDue | undefined
}
type BetaPartnerCustomerV1GetResponse = {
  end_customer?: BetaPartnerEndCustomer | undefined
  request_id?: RequestID | undefined
}
type BetaPartnerCustomerV1UpdateRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  end_customer_client_id: string
  legal_entity_name?: string | undefined
  redirect_uris?: string[] | undefined
  bank_addendum_acceptance?: PartnerEndCustomerBankAddendumAcceptance | undefined
  questionnaires?: PartnerEndCustomerQuestionnaires | undefined
}
type BetaPartnerCustomerV1UpdateResponse = {
  end_customer?: BetaPartnerEndCustomer | undefined
  request_id?: RequestID | undefined
}
type BetaPartnerCustomerV1EnableRequest = {
  client_id?: APIClientID | undefined
  secret?: APISecret | undefined
  end_customer_client_id: string
  products?: Products[] | undefined
}
type BetaPartnerCustomerV1EnableResponse = {
  end_customer_client_id?: string | undefined
  status?: PartnerEndCustomerStatus | undefined
  product_statuses?: PartnerEndCustomerProductStatuses | undefined
  production_secret?: string | undefined
  request_id?: RequestID | undefined
}
type FDXNotificationType =
  | 'ACCOUNT_TAKEOVER'
  | 'ADDRESS_CHANGED'
  | 'BALANCE'
  | 'CONSENT_EXPIRED'
  | 'CONSENT_GRANTED'
  | 'CONSENT_REVOKED'
  | 'CONSENT_UPDATED'
  | 'CUSTOM'
  | 'MFA_TARGET_CHANGED'
  | 'PHONE_CHANGED'
  | 'PLANNED_OUTAGE'
  | 'RISK'
  | 'SERVICE'
  | 'SUSPECTED_INCIDENT'
  | 'TAN_ACTIVATED'
  | 'TAN_CREATED'
  | 'TAN_REVOKED'
  | 'TAN_SUSPENDED'
type FDXTimestamp = string
type FDXNotificationCategory =
  | 'SECURITY'
  | 'MAINTENANCE'
  | 'FRAUD'
  | 'CONSENT'
  | 'NEW_DATA'
  | 'TOKENIZED_ACCOUNT_NUMBER'
type FDXNotificationSeverity = 'EMERGENCY' | 'ALERT' | 'WARNING' | 'NOTICE' | 'INFO'
type FDXNotificationPriority = 'HIGH' | 'MEDIUM' | 'LOW'
type FDXPartyType =
  | 'DATA_ACCESS_PLATFORM'
  | 'DATA_PROVIDER'
  | 'DATA_RECIPIENT'
  | 'INDIVIDUAL'
  | 'MERCHANT'
  | 'VENDOR'
type FDXPartyRegistry = 'FDX' | 'GLEIF' | 'ICANN' | 'PRIVATE'
type FDXParty = {
  name: string
  type: FDXPartyType
  homeUri?: string | undefined
  logoUri?: string | undefined
  registry?: FDXPartyRegistry | undefined
  registeredEntityName?: string | undefined
  registeredEntityId?: string | undefined
}
type FDXNotificationPayloadIdType = 'ACCOUNT' | 'CUSTOMER' | 'PARTY' | 'MAINTENANCE' | 'CONSENT'
type FDXEventStatus = 'ACTIVE' | 'EXPIRED' | 'REVOKED' | 'SUSPENDED'
type FDXUpdateReason = 'BUSINESS_RULE' | 'SECURITY_EVENT' | 'USER_ACTION' | 'OTHER'
type FDXLifecycleEvent = {
  status?: FDXEventStatus | undefined
  reason?: FDXUpdateReason | undefined
  otherReason?: string | undefined
  initiator?: FDXPartyType | undefined
  updatedTime?: FDXTimestamp | undefined
}
type FDXNotificationPayload = {
  id?: string | undefined
  idType?: FDXNotificationPayloadIdType | undefined
  event?: FDXLifecycleEvent | undefined
}
type FDXHateoasLinkAction = 'GET' | 'POST' | 'PATCH' | 'DELETE' | 'PUT'
type FDXContentTypes =
  | 'application/pdf'
  | 'image/gif'
  | 'image/jpeg'
  | 'image/tiff'
  | 'image/png'
  | 'application/json'
type FDXHateoasLink = {
  href: string
  action?: FDXHateoasLinkAction | undefined
  rel?: string | undefined
  types?: FDXContentTypes[] | undefined
}
type FDXNotification = {
  notificationId: string
  type: FDXNotificationType
  subtype?: string | undefined
  sentOn: FDXTimestamp
  category: FDXNotificationCategory
  severity?: FDXNotificationSeverity | undefined
  priority?: FDXNotificationPriority | undefined
  publisher?: FDXParty | undefined
  subscriber?: FDXParty | undefined
  notificationPayload: FDXNotificationPayload
  url?: FDXHateoasLink | undefined
}
type ExtendedRecipientMetadata = {
  recipient_id: string
  client_name: string
  logo_uri?: (string | null) | undefined
  third_party_legal_name: string
  category: string
  joined_date: string
  connection_count: number
}
type GetRecipientsResponse = { recipients: ExtendedRecipientMetadata[] }
type FDXConsentGrantStatus = 'ACTIVE' | 'REVOKED' | 'EXPIRED'
type FDXConsentResourceType = 'ACCOUNT' | 'CUSTOMER' | 'DOCUMENT'
type FDXDataCluster =
  | 'ACCOUNT_BASIC'
  | 'ACCOUNT_DETAILED'
  | 'ACCOUNT_PAYMENTS'
  | 'BILLS'
  | 'CUSTOMER_CONTACT'
  | 'CUSTOMER_PERSONAL'
  | 'IMAGES'
  | 'INVESTMENTS'
  | 'NOTIFICATIONS'
  | 'PAYMENT_SUPPORT'
  | 'REWARDS'
  | 'STATEMENTS'
  | 'TAX'
  | 'TRANSACTIONS'
  | 'BALANCES'
  | 'SCHEDULED_PAYMENTS'
type FDXConsentGrantResource = {
  resourceType: FDXConsentResourceType
  resourceId: string
  dataClusters: FDXDataCluster[]
}
type FDXConsentGrant = {
  id: string
  status: FDXConsentGrantStatus
  createdTime: string
  updatedTime: string
  expirationTime?: string | undefined
  parties: FDXParty[]
  resources?: FDXConsentGrantResource[] | undefined
}
type GetConsentsResponse = { consent_grants: FDXConsentGrant[] }
type FDXError = { error_type: string; error_code: string; error_message: string }
type FDXConsentRevocation = {
  initiator: FDXPartyType
  reason: FDXUpdateReason
  otherReason?: string | undefined
  updatedTime?: string | undefined
}
type FDXConsentRevocationRecord = {
  status: FDXConsentGrantStatus
  reason: FDXUpdateReason
  initiator: FDXPartyType
  updatedTime: string
}
type FDXConsentRevocations = { revocations: FDXConsentRevocationRecord[] }
type GetRecipientResponse = {
  recipient_id: string
  client_name: string
  logo_uri?: (string | null) | undefined
  third_party_legal_name: string
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/asset_report/create': {
      $post:
        | {
            input: { json: AssetReportCreateRequest }
            output: AssetReportCreateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: AssetReportCreateRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/asset_report/get': {
      $post:
        | {
            input: { json: AssetReportGetRequest }
            output: AssetReportGetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: AssetReportGetRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/asset_report/pdf/get': {
      $post:
        | {
            input: { json: AssetReportPDFGetRequest }
            output: AssetReportPDFGetResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: AssetReportPDFGetRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/asset_report/refresh': {
      $post:
        | {
            input: { json: AssetReportRefreshRequest }
            output: AssetReportRefreshResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: AssetReportRefreshRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/asset_report/filter': {
      $post:
        | {
            input: { json: AssetReportFilterRequest }
            output: AssetReportFilterResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: AssetReportFilterRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/asset_report/remove': {
      $post:
        | {
            input: { json: AssetReportRemoveRequest }
            output: AssetReportRemoveResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: AssetReportRemoveRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/asset_report/audit_copy/create': {
      $post:
        | {
            input: { json: AssetReportAuditCopyCreateRequest }
            output: AssetReportAuditCopyCreateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: AssetReportAuditCopyCreateRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/asset_report/audit_copy/get': {
      $post:
        | {
            input: { json: AssetReportAuditCopyGetRequest }
            output: AssetReportGetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: AssetReportAuditCopyGetRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/asset_report/audit_copy/pdf/get': {
      $post:
        | {
            input: { json: AssetReportAuditCopyPdfGetRequest }
            output: AssetReportAuditCopyPdfGetResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: AssetReportAuditCopyPdfGetRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/asset_report/audit_copy/remove': {
      $post:
        | {
            input: { json: AssetReportAuditCopyRemoveRequest }
            output: AssetReportAuditCopyRemoveResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: AssetReportAuditCopyRemoveRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/cra/monitoring_insights/subscribe': {
      $post:
        | {
            input: { json: CraMonitoringInsightsSubscribeRequest }
            output: CraMonitoringInsightsSubscribeResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CraMonitoringInsightsSubscribeRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/cra/monitoring_insights/unsubscribe': {
      $post:
        | {
            input: { json: CraMonitoringInsightsUnsubscribeRequest }
            output: CraMonitoringInsightsUnsubscribeResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CraMonitoringInsightsUnsubscribeRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/cra/monitoring_insights/get': {
      $post:
        | {
            input: { json: CraMonitoringInsightsGetRequest }
            output: CraMonitoringInsightsGetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CraMonitoringInsightsGetRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/credit/audit_copy_token/update': {
      $post:
        | {
            input: { json: CreditAuditCopyTokenUpdateRequest }
            output: CreditAuditCopyTokenUpdateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreditAuditCopyTokenUpdateRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/cra/partner_insights/get': {
      $post:
        | {
            input: { json: CraPartnerInsightsGetRequest }
            output: CraPartnerInsightsGetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CraPartnerInsightsGetRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/cra/check_report/income_insights/get': {
      $post:
        | {
            input: { json: CraCheckReportIncomeInsightsGetRequest }
            output: CraCheckReportIncomeInsightsGetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CraCheckReportIncomeInsightsGetRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/cra/check_report/base_report/get': {
      $post:
        | {
            input: { json: CraCheckReportBaseReportGetRequest }
            output: CraCheckReportBaseReportGetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CraCheckReportBaseReportGetRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/cra/check_report/pdf/get': {
      $post:
        | {
            input: { json: CraCheckReportPDFGetRequest }
            output: CraCheckReportPDFGetResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: CraCheckReportPDFGetRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/cra/check_report/create': {
      $post:
        | {
            input: { json: CraCheckReportCreateRequest }
            output: CraCheckReportCreateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CraCheckReportCreateRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/cra/check_report/partner_insights/get': {
      $post:
        | {
            input: { json: CraCheckReportPartnerInsightsGetRequest }
            output: CraCheckReportPartnerInsightsGetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CraCheckReportPartnerInsightsGetRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/cra/check_report/cashflow_insights/get': {
      $post:
        | {
            input: { json: CraCheckReportCashflowInsightsGetRequest }
            output: CraCheckReportCashflowInsightsGetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CraCheckReportCashflowInsightsGetRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/cra/check_report/lend_score/get': {
      $post:
        | {
            input: { json: CraCheckReportLendScoreGetRequest }
            output: CraCheckReportLendScoreGetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CraCheckReportLendScoreGetRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/cra/check_report/network_insights/get': {
      $post:
        | {
            input: { json: CraCheckReportNetworkInsightsGetRequest }
            output: CraCheckReportNetworkInsightsGetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CraCheckReportNetworkInsightsGetRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/cra/check_report/verification/get': {
      $post:
        | {
            input: { json: CraCheckReportVerificationGetRequest }
            output: CraCheckReportVerificationGetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CraCheckReportVerificationGetRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/cra/check_report/verification/pdf/get': {
      $post:
        | {
            input: { json: CraCheckReportVerificationPdfGetRequest }
            output: CraCheckReportVerificationPdfGetResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: CraCheckReportVerificationPdfGetRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/cra/loans/applications/register': {
      $post:
        | {
            input: { json: CraLoansApplicationsRegisterRequest }
            output: CraLoansApplicationsRegisterResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CraLoansApplicationsRegisterRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/cra/loans/register': {
      $post:
        | {
            input: { json: CRALoansRegisterRequest }
            output: CraLoansRegisterResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CRALoansRegisterRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/cra/loans/update': {
      $post:
        | {
            input: { json: CraLoansUpdateRequest }
            output: CraLoansUpdateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CraLoansUpdateRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/cra/loans/unregister': {
      $post:
        | {
            input: { json: CraLoansUnregisterRequest }
            output: CraLoanUnregisterResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CraLoansUnregisterRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/cra/servicing/subscription/create': {
      $post:
        | {
            input: { json: CraServicingSubscriptionCreateRequest }
            output: CraServicingSubscriptionCreateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CraServicingSubscriptionCreateRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/cra/servicing/subscription/delete': {
      $post:
        | {
            input: { json: CraServicingSubscriptionDeleteRequest }
            output: CraServicingSubscriptionDeleteResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CraServicingSubscriptionDeleteRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/cra/servicing/subscription/get': {
      $post:
        | {
            input: { json: CraServicingSubscriptionGetRequest }
            output: CraServicingSubscriptionGetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CraServicingSubscriptionGetRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/cra/servicing/subscription/list': {
      $post:
        | {
            input: { json: CraServicingSubscriptionListRequest }
            output: CraServicingSubscriptionListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CraServicingSubscriptionListRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/cra/servicing/subscription/update': {
      $post:
        | {
            input: { json: CraServicingSubscriptionUpdateRequest }
            output: CraServicingSubscriptionUpdateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CraServicingSubscriptionUpdateRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/cra/report/create': {
      $post:
        | {
            input: { json: CraReportCreateRequest }
            output: CraReportCreateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CraReportCreateRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/cra/report/get': {
      $post:
        | {
            input: { json: CraReportGetRequest }
            output: CraReportGetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CraReportGetRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/cra/credit_profile/report/get': {
      $post:
        | {
            input: { json: CraCreditProfileReportGetRequest }
            output: CraCreditProfileReportGetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CraCreditProfileReportGetRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/consumer_report/pdf/get': {
      $post:
        | {
            input: { json: ConsumerReportPDFGetRequest }
            output: ConsumerReportPDFGetResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: ConsumerReportPDFGetRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/oauth/token': {
      $post:
        | {
            input: { json: OAuthTokenRequest }
            output: OAuthTokenResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: OAuthTokenRequest }
            output: OAuthErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/oauth/introspect': {
      $post:
        | {
            input: { json: OAuthIntrospectRequest }
            output: OAuthIntrospectResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: OAuthIntrospectRequest }
            output: OAuthErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/oauth/revoke': {
      $post:
        | {
            input: { json: OAuthRevokeRequest }
            output: OAuthRevokeResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: OAuthRevokeRequest }
            output: OAuthErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/statements/list': {
      $post:
        | {
            input: { json: StatementsListRequest }
            output: StatementsListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: StatementsListRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/statements/download': {
      $post:
        | {
            input: { json: StatementsDownloadRequest }
            output: StatementsDownloadResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: StatementsDownloadRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/statements/refresh': {
      $post:
        | {
            input: { json: StatementsRefreshRequest }
            output: StatementsRefreshResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: StatementsRefreshRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/consent/events/get': {
      $post:
        | {
            input: { json: ConsentEventsGetRequest }
            output: ConsentEventsGetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ConsentEventsGetRequest }
            output: PlaidError
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
    '/item/application/unlink': {
      $post:
        | {
            input: { json: ItemApplicationUnlinkRequest }
            output: ItemApplicationUnlinkResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ItemApplicationUnlinkRequest }
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
    '/user_account/session/get': {
      $post:
        | {
            input: { json: UserAccountSessionGetRequest }
            output: UserAccountSessionGetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: UserAccountSessionGetRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/user_account/session/event/send': {
      $post:
        | {
            input: { json: UserAccountSessionEventSendRequest }
            output: UserAccountSessionEventSendResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: UserAccountSessionEventSendRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/profile/network_status/get': {
      $post:
        | {
            input: { json: ProfileNetworkStatusGetRequest }
            output: ProfileNetworkStatusGetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ProfileNetworkStatusGetRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/network/status/get': {
      $post:
        | {
            input: { json: NetworkStatusGetRequest }
            output: NetworkStatusGetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: NetworkStatusGetRequest }
            output: PlaidError
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
    '/auth/verify': {
      $post:
        | {
            input: { json: AuthVerifyRequest }
            output: AuthVerifyResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: AuthVerifyRequest }
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
    '/sandbox/transactions/create': {
      $post:
        | {
            input: { json: SandboxTransactionsCreateRequest }
            output: SandboxTransactionsCreateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: SandboxTransactionsCreateRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: SandboxTransactionsCreateRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/cashflow_report/refresh': {
      $post:
        | {
            input: { json: CashflowReportRefreshRequest }
            output: CashflowReportRefreshResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CashflowReportRefreshRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/cashflow_report/get': {
      $post:
        | {
            input: { json: CashflowReportGetRequest }
            output: CashflowReportGetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CashflowReportGetRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/cashflow_report/transactions/get': {
      $post:
        | {
            input: { json: CashflowReportTransactionsGetRequest }
            output: CashflowReportTransactionsGetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CashflowReportTransactionsGetRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/cashflow_report/insights/get': {
      $post:
        | {
            input: { json: CashflowReportInsightsGetRequest }
            output: CashflowReportInsightsGetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CashflowReportInsightsGetRequest }
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
    '/transactions/enrich': {
      $post:
        | {
            input: { json: TransactionsEnrichRequest }
            output: TransactionsEnrichResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: TransactionsEnrichRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/user/transactions/refresh': {
      $post:
        | {
            input: { json: UserTransactionsRefreshRequest }
            output: UserTransactionsRefreshResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: UserTransactionsRefreshRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/user/financial_data/refresh': {
      $post:
        | {
            input: { json: UserFinancialDataRefreshRequest }
            output: UserFinancialDataRefreshResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: UserFinancialDataRefreshRequest }
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
    '/item/products/terminate': {
      $post:
        | {
            input: { json: ItemProductsTerminateRequest }
            output: ItemProductsTerminateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ItemProductsTerminateRequest }
            output: PlaidError
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
    '/sandbox/user/fire_webhook': {
      $post:
        | {
            input: { json: SandboxUserFireWebhookRequest }
            output: SandboxUserFireWebhookResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: SandboxUserFireWebhookRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/accounts/balance/get': {
      $post:
        | {
            input: { json: AccountsBalanceGetRequest }
            output: AccountsGetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: AccountsBalanceGetRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/identity/get': {
      $post:
        | {
            input: { json: IdentityGetRequest }
            output: IdentityGetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: IdentityGetRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/identity/documents/uploads/get': {
      $post:
        | {
            input: { json: IdentityDocumentsUploadsGetRequest }
            output: IdentityDocumentsUploadsGetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: IdentityDocumentsUploadsGetRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/identity/match': {
      $post:
        | {
            input: { json: IdentityMatchRequest }
            output: IdentityMatchResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: IdentityMatchRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/identity/match/list': {
      $post:
        | {
            input: { json: IdentityMatchListRequest }
            output: IdentityMatchListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: IdentityMatchListRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/identity/refresh': {
      $post:
        | {
            input: { json: IdentityRefreshRequest }
            output: IdentityRefreshResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: IdentityRefreshRequest }
            output: PlaidError
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
    '/beacon/account_risk/v1/evaluate': {
      $post:
        | {
            input: { json: BeaconAccountRiskEvaluateRequest }
            output: BeaconAccountRiskEvaluateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: BeaconAccountRiskEvaluateRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/beacon/user/create': {
      $post: {
        input: { json: BeaconUserCreateRequest }
        output: BeaconUserCreateResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/beacon/user/get': {
      $post: {
        input: { json: BeaconUserGetRequest }
        output: BeaconUserGetResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/beacon/user/review': {
      $post: {
        input: { json: BeaconUserReviewRequest }
        output: BeaconUserGetResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/beacon/report/create': {
      $post: {
        input: { json: BeaconReportCreateRequest }
        output: BeaconReportCreateResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/beacon/report/list': {
      $post: {
        input: { json: BeaconReportListRequest }
        output: BeaconReportListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/beacon/report_syndication/list': {
      $post: {
        input: { json: BeaconReportSyndicationListRequest }
        output: BeaconReportSyndicationListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/beacon/report/get': {
      $post: {
        input: { json: BeaconReportGetRequest }
        output: BeaconReportGetResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/beacon/report_syndication/get': {
      $post: {
        input: { json: BeaconReportSyndicationGetRequest }
        output: BeaconReportSyndicationGetResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/beacon/user/update': {
      $post: {
        input: { json: BeaconUserUpdateRequest }
        output: BeaconUserUpdateResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/beacon/duplicate/get': {
      $post: {
        input: { json: BeaconDuplicateGetRequest }
        output: BeaconDuplicateGetResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/identity_verification/autofill/create': {
      $post: {
        input: { json: IdentityVerificationAutofillCreateRequest }
        output: IdentityVerificationAutofillCreateResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/beacon/user/history/list': {
      $post: {
        input: { json: BeaconUserHistoryListRequest }
        output: BeaconUserHistoryListResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/beacon/user/account_insights/get': {
      $post: {
        input: { json: BeaconUserAccountInsightsGetRequest }
        output: BeaconUserAccountInsightsGetResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/protect/user/insights/get': {
      $post: {
        input: { json: ProtectUserInsightsGetRequest }
        output: ProtectUserInsightsGetResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/protect/report/create': {
      $post: {
        input: { json: ProtectReportCreateRequest }
        output: ProtectReportCreateResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/protect/cash_advance/decision/create': {
      $post: {
        input: { json: ProtectCashAdvanceDecisionCreateRequest }
        output: ProtectCashAdvanceDecisionCreateResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/protect/cash_advance/repayment/create': {
      $post: {
        input: { json: ProtectCashAdvanceRepaymentCreateRequest }
        output: ProtectCashAdvanceRepaymentCreateResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/protect/cash_advance/feedback/upload': {
      $post: {
        input: { json: ProtectCashAdvanceFeedbackUploadRequest }
        output: ProtectCashAdvanceFeedbackUploadResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/protect/compute': {
      $post: {
        input: { json: ProtectComputeRequest }
        output: ProtectComputeResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/protect/event/send': {
      $post: {
        input: { json: ProtectEventSendRequest }
        output: ProtectEventSendResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/protect/event/get': {
      $post: {
        input: { json: ProtectEventGetRequest }
        output: ProtectEventGetResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/business_verification/get': {
      $post: {
        input: { json: BusinessVerificationGetRequest }
        output: BusinessVerificationGetResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/business_verification/create': {
      $post: {
        input: { json: BusinessVerificationCreateRequest }
        output: BusinessVerificationCreateResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/processor/auth/get': {
      $post:
        | {
            input: { json: ProcessorAuthGetRequest }
            output: ProcessorAuthGetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ProcessorAuthGetRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/processor/account/get': {
      $post:
        | {
            input: { json: ProcessorAccountGetRequest }
            output: ProcessorAccountGetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ProcessorAccountGetRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/processor/investments/holdings/get': {
      $post:
        | {
            input: { json: ProcessorInvestmentsHoldingsGetRequest }
            output: ProcessorInvestmentsHoldingsGetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ProcessorInvestmentsHoldingsGetRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/processor/investments/auth/get': {
      $post:
        | {
            input: { json: ProcessorInvestmentsAuthGetRequest }
            output: ProcessorInvestmentsAuthGetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ProcessorInvestmentsAuthGetRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/processor/investments/transactions/get': {
      $post:
        | {
            input: { json: ProcessorInvestmentsTransactionsGetRequest }
            output: ProcessorInvestmentsTransactionsGetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ProcessorInvestmentsTransactionsGetRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/processor/transactions/get': {
      $post:
        | {
            input: { json: ProcessorTransactionsGetRequest }
            output: ProcessorTransactionsGetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ProcessorTransactionsGetRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/processor/transactions/sync': {
      $post:
        | {
            input: { json: ProcessorTransactionsSyncRequest }
            output: ProcessorTransactionsSyncResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ProcessorTransactionsSyncRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/processor/transactions/refresh': {
      $post:
        | {
            input: { json: ProcessorTransactionsRefreshRequest }
            output: ProcessorTransactionsRefreshResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ProcessorTransactionsRefreshRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/processor/transactions/recurring/get': {
      $post:
        | {
            input: { json: ProcessorTransactionsRecurringGetRequest }
            output: ProcessorTransactionsRecurringGetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ProcessorTransactionsRecurringGetRequest }
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
    '/processor/signal/prepare': {
      $post:
        | {
            input: { json: ProcessorSignalPrepareRequest }
            output: ProcessorSignalPrepareResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ProcessorSignalPrepareRequest }
            output: PlaidError
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
    '/processor/liabilities/get': {
      $post:
        | {
            input: { json: ProcessorLiabilitiesGetRequest }
            output: ProcessorLiabilitiesGetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ProcessorLiabilitiesGetRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/processor/identity/get': {
      $post:
        | {
            input: { json: ProcessorIdentityGetRequest }
            output: ProcessorIdentityGetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ProcessorIdentityGetRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/processor/identity/match': {
      $post:
        | {
            input: { json: ProcessorIdentityMatchRequest }
            output: ProcessorIdentityMatchResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ProcessorIdentityMatchRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/processor/balance/get': {
      $post:
        | {
            input: { json: ProcessorBalanceGetRequest }
            output: ProcessorBalanceGetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ProcessorBalanceGetRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/item/webhook/update': {
      $post:
        | {
            input: { json: ItemWebhookUpdateRequest }
            output: ItemWebhookUpdateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ItemWebhookUpdateRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/item/access_token/invalidate': {
      $post:
        | {
            input: { json: ItemAccessTokenInvalidateRequest }
            output: ItemAccessTokenInvalidateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ItemAccessTokenInvalidateRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/beta/webhook_events/list': {
      $post:
        | {
            input: { json: BetaWebhookEventsListRequest }
            output: BetaWebhookEventsListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: BetaWebhookEventsListRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/webhook_verification_key/get': {
      $post:
        | {
            input: { json: WebhookVerificationKeyGetRequest }
            output: WebhookVerificationKeyGetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: WebhookVerificationKeyGetRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/liabilities/get': {
      $post:
        | {
            input: { json: LiabilitiesGetRequest }
            output: LiabilitiesGetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: LiabilitiesGetRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/payment_initiation/recipient/create': {
      $post:
        | {
            input: { json: PaymentInitiationRecipientCreateRequest }
            output: PaymentInitiationRecipientCreateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: PaymentInitiationRecipientCreateRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/payment_initiation/payment/reverse': {
      $post:
        | {
            input: { json: PaymentInitiationPaymentReverseRequest }
            output: PaymentInitiationPaymentReverseResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: PaymentInitiationPaymentReverseRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/payment_initiation/recipient/get': {
      $post:
        | {
            input: { json: PaymentInitiationRecipientGetRequest }
            output: PaymentInitiationRecipientGetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: PaymentInitiationRecipientGetRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/payment_initiation/recipient/list': {
      $post:
        | {
            input: { json: PaymentInitiationRecipientListRequest }
            output: PaymentInitiationRecipientListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: PaymentInitiationRecipientListRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/payment_initiation/payment/create': {
      $post:
        | {
            input: { json: PaymentInitiationPaymentCreateRequest }
            output: PaymentInitiationPaymentCreateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: PaymentInitiationPaymentCreateRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/payment_initiation/payment/token/create': {
      $post:
        | {
            input: { json: PaymentInitiationPaymentTokenCreateRequest }
            output: PaymentInitiationPaymentTokenCreateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: PaymentInitiationPaymentTokenCreateRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/payment_initiation/consent/create': {
      $post:
        | {
            input: { json: PaymentInitiationConsentCreateRequest }
            output: PaymentInitiationConsentCreateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: PaymentInitiationConsentCreateRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/payment_initiation/consent/get': {
      $post:
        | {
            input: { json: PaymentInitiationConsentGetRequest }
            output: PaymentInitiationConsentGetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: PaymentInitiationConsentGetRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/payment_initiation/consent/revoke': {
      $post:
        | {
            input: { json: PaymentInitiationConsentRevokeRequest }
            output: PaymentInitiationConsentRevokeResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: PaymentInitiationConsentRevokeRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/payment_initiation/consent/payment/execute': {
      $post:
        | {
            input: { json: PaymentInitiationConsentPaymentExecuteRequest }
            output: PaymentInitiationConsentPaymentExecuteResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: PaymentInitiationConsentPaymentExecuteRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/sandbox/item/reset_login': {
      $post:
        | {
            input: { json: SandboxItemResetLoginRequest }
            output: SandboxItemResetLoginResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: SandboxItemResetLoginRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/sandbox/item/application/seed': {
      $post:
        | {
            input: { json: SandboxItemApplicationSeedRequest }
            output: SandboxItemApplicationSeedResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: SandboxItemApplicationSeedRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/sandbox/fdx/consent/seed': {
      $post:
        | {
            input: { json: SandboxFdxConsentSeedRequest }
            output: SandboxFdxConsentSeedResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: SandboxFdxConsentSeedRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/sandbox/item/set_verification_status': {
      $post:
        | {
            input: { json: SandboxItemSetVerificationStatusRequest }
            output: SandboxItemSetVerificationStatusResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: SandboxItemSetVerificationStatusRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/sandbox/user/reset_login': {
      $post:
        | {
            input: { json: SandboxUserResetLoginRequest }
            output: SandboxUserResetLoginResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: SandboxUserResetLoginRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/item/public_token/exchange': {
      $post:
        | {
            input: { json: ItemPublicTokenExchangeRequest }
            output: ItemPublicTokenExchangeResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ItemPublicTokenExchangeRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/item/public_token/create': {
      $post:
        | {
            input: { json: ItemPublicTokenCreateRequest }
            output: ItemPublicTokenCreateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ItemPublicTokenCreateRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/user/create': {
      $post:
        | {
            input: { header: { 'Plaid-New-User-API-Enabled'?: boolean | undefined } } & {
              json: UserCreateRequest
            }
            output: UserCreateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'Plaid-New-User-API-Enabled'?: boolean | undefined } } & {
              json: UserCreateRequest
            }
            output: UserCreateResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { header: { 'Plaid-New-User-API-Enabled'?: boolean | undefined } } & {
              json: UserCreateRequest
            }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/user/get': {
      $post:
        | {
            input: { header: { 'Plaid-New-User-API-Enabled'?: boolean | undefined } } & {
              json: UserGetRequest
            }
            output: UserGetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'Plaid-New-User-API-Enabled'?: boolean | undefined } } & {
              json: UserGetRequest
            }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/user/identity/remove': {
      $post:
        | {
            input: { header: { 'Plaid-New-User-API-Enabled'?: boolean | undefined } } & {
              json: UserIdentityRemoveRequest
            }
            output: UserIdentityRemoveResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'Plaid-New-User-API-Enabled'?: boolean | undefined } } & {
              json: UserIdentityRemoveRequest
            }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/user/update': {
      $post:
        | {
            input: { header: { 'Plaid-New-User-API-Enabled'?: boolean | undefined } } & {
              json: UserUpdateRequest
            }
            output: UserUpdateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'Plaid-New-User-API-Enabled'?: boolean | undefined } } & {
              json: UserUpdateRequest
            }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/user/remove': {
      $post:
        | {
            input: { header: { 'Plaid-New-User-API-Enabled'?: boolean | undefined } } & {
              json: UserRemoveRequest
            }
            output: UserRemoveResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'Plaid-New-User-API-Enabled'?: boolean | undefined } } & {
              json: UserRemoveRequest
            }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/user/products/terminate': {
      $post:
        | {
            input: { json: UserProductsTerminateRequest }
            output: UserProductsTerminateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: UserProductsTerminateRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/user/transfer/limits/get': {
      $post:
        | {
            input: { json: UserTransferLimitsGetRequest }
            output: UserTransferLimitsGetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: UserTransferLimitsGetRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/user/items/get': {
      $post:
        | {
            input: { json: UserItemsGetRequest }
            output: UserItemsGetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: UserItemsGetRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/user/items/associate': {
      $post:
        | {
            input: { json: UserItemsAssociateRequest }
            output: UserItemsAssociateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: UserItemsAssociateRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/user/items/remove': {
      $post:
        | {
            input: { json: UserItemsRemoveRequest }
            output: UserItemsRemoveResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: UserItemsRemoveRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/user/third_party_token/create': {
      $post:
        | {
            input: { json: UserThirdPartyTokenCreateRequest }
            output: UserThirdPartyTokenCreateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: UserThirdPartyTokenCreateRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/user/third_party_token/remove': {
      $post:
        | {
            input: { json: UserThirdPartyTokenRemoveRequest }
            output: UserThirdPartyTokenRemoveResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: UserThirdPartyTokenRemoveRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/credit/sessions/get': {
      $post:
        | {
            input: { json: CreditSessionsGetRequest }
            output: CreditSessionsGetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreditSessionsGetRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/payment_initiation/payment/get': {
      $post:
        | {
            input: { json: PaymentInitiationPaymentGetRequest }
            output: PaymentInitiationPaymentGetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: PaymentInitiationPaymentGetRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/payment_initiation/payment/list': {
      $post:
        | {
            input: { json: PaymentInitiationPaymentListRequest }
            output: PaymentInitiationPaymentListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: PaymentInitiationPaymentListRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/investments/holdings/get': {
      $post:
        | {
            input: { json: InvestmentsHoldingsGetRequest }
            output: InvestmentsHoldingsGetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: InvestmentsHoldingsGetRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/investments/transactions/get': {
      $post:
        | {
            input: { json: InvestmentsTransactionsGetRequest }
            output: InvestmentsTransactionsGetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: InvestmentsTransactionsGetRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/investments/refresh': {
      $post:
        | {
            input: { json: InvestmentsRefreshRequest }
            output: InvestmentsRefreshResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: InvestmentsRefreshRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/investments/auth/get': {
      $post:
        | {
            input: { json: InvestmentsAuthGetRequest }
            output: InvestmentsAuthGetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: InvestmentsAuthGetRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/processor/token/create': {
      $post:
        | {
            input: { json: ProcessorTokenCreateRequest }
            output: ProcessorTokenCreateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ProcessorTokenCreateRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/processor/token/permissions/set': {
      $post:
        | {
            input: { json: ProcessorTokenPermissionsSetRequest }
            output: ProcessorTokenPermissionsSetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ProcessorTokenPermissionsSetRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/processor/token/permissions/get': {
      $post:
        | {
            input: { json: ProcessorTokenPermissionsGetRequest }
            output: ProcessorTokenPermissionsGetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ProcessorTokenPermissionsGetRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/processor/token/webhook/update': {
      $post:
        | {
            input: { json: ProcessorTokenWebhookUpdateRequest }
            output: ProcessorTokenWebhookUpdateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ProcessorTokenWebhookUpdateRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/processor/stripe/bank_account_token/create': {
      $post:
        | {
            input: { json: ProcessorStripeBankAccountTokenCreateRequest }
            output: ProcessorStripeBankAccountTokenCreateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ProcessorStripeBankAccountTokenCreateRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/processor/apex/processor_token/create': {
      $post:
        | {
            input: { json: ProcessorApexProcessorTokenCreateRequest }
            output: ProcessorTokenCreateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ProcessorApexProcessorTokenCreateRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/item/import': {
      $post:
        | {
            input: { json: ItemImportRequest }
            output: ItemImportResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ItemImportRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/link/token/create': {
      $post:
        | {
            input: { json: LinkTokenCreateRequest }
            output: LinkTokenCreateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: LinkTokenCreateRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/link/token/get': {
      $post:
        | {
            input: { json: LinkTokenGetRequest }
            output: LinkTokenGetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: LinkTokenGetRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/link/oauth/correlation_id/exchange': {
      $post:
        | {
            input: { json: LinkOAuthCorrelationIdExchangeRequest }
            output: LinkOAuthCorrelationIdExchangeResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: LinkOAuthCorrelationIdExchangeRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/session/token/create': {
      $post:
        | {
            input: { json: SessionTokenCreateRequest }
            output: SessionTokenCreateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: SessionTokenCreateRequest }
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
    '/transfer/authorization/cancel': {
      $post:
        | {
            input: { json: TransferAuthorizationCancelRequest }
            output: TransferAuthorizationCancelResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: TransferAuthorizationCancelRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/transfer/balance/get': {
      $post:
        | {
            input: { json: TransferBalanceGetRequest }
            output: TransferBalanceGetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: TransferBalanceGetRequest }
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
    '/transfer/configuration/get': {
      $post:
        | {
            input: { json: TransferConfigurationGetRequest }
            output: TransferConfigurationGetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: TransferConfigurationGetRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/transfer/ledger/get': {
      $post:
        | {
            input: { json: TransferLedgerGetRequest }
            output: TransferLedgerGetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: TransferLedgerGetRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/transfer/ledger/distribute': {
      $post:
        | {
            input: { json: TransferLedgerDistributeRequest }
            output: TransferLedgerDistributeResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: TransferLedgerDistributeRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/transfer/ledger/deposit': {
      $post:
        | {
            input: { json: TransferLedgerDepositRequest }
            output: TransferLedgerDepositResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: TransferLedgerDepositRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/transfer/ledger/withdraw': {
      $post:
        | {
            input: { json: TransferLedgerWithdrawRequest }
            output: TransferLedgerWithdrawResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: TransferLedgerWithdrawRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/transfer/originator/funding_account/update': {
      $post:
        | {
            input: { json: TransferOriginatorFundingAccountUpdateRequest }
            output: TransferOriginatorFundingAccountUpdateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: TransferOriginatorFundingAccountUpdateRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/transfer/originator/funding_account/create': {
      $post:
        | {
            input: { json: TransferOriginatorFundingAccountCreateRequest }
            output: TransferOriginatorFundingAccountCreateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: TransferOriginatorFundingAccountCreateRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/transfer/metrics/get': {
      $post:
        | {
            input: { json: TransferMetricsGetRequest }
            output: TransferMetricsGetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: TransferMetricsGetRequest }
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
    '/transfer/ledger/event/list': {
      $post:
        | {
            input: { json: TransferLedgerEventListRequest }
            output: TransferLedgerEventListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: TransferLedgerEventListRequest }
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
    '/transfer/platform/requirement/submit': {
      $post:
        | {
            input: { json: TransferPlatformRequirementSubmitRequest }
            output: TransferPlatformRequirementSubmitResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: TransferPlatformRequirementSubmitRequest }
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
    '/transfer/diligence/submit': {
      $post:
        | {
            input: { json: TransferDiligenceSubmitRequest }
            output: TransferDiligenceSubmitResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: TransferDiligenceSubmitRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/transfer/diligence/document/upload': {
      $post:
        | {
            input: { json: TransferDiligenceDocumentUploadRequest }
            output: TransferDiligenceDocumentUploadResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: TransferDiligenceDocumentUploadRequest }
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
    '/transfer/return/recover': {
      $post:
        | {
            input: { json: TransferReturnRecoverRequest }
            output: TransferReturnRecoverResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: TransferReturnRecoverRequest }
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
    '/transfer/platform/originator/create': {
      $post:
        | {
            input: { json: TransferPlatformOriginatorCreateRequest }
            output: TransferPlatformOriginatorCreateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: TransferPlatformOriginatorCreateRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/transfer/platform/person/create': {
      $post:
        | {
            input: { json: TransferPlatformPersonCreateRequest }
            output: TransferPlatformPersonCreateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: TransferPlatformPersonCreateRequest }
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
    '/sandbox/transfer/refund/simulate': {
      $post:
        | {
            input: { json: SandboxTransferRefundSimulateRequest }
            output: SandboxTransferRefundSimulateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: SandboxTransferRefundSimulateRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/sandbox/transfer/ledger/simulate_available': {
      $post:
        | {
            input: { json: SandboxTransferLedgerSimulateAvailableRequest }
            output: SandboxTransferLedgerSimulateAvailableResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: SandboxTransferLedgerSimulateAvailableRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/sandbox/transfer/ledger/deposit/simulate': {
      $post:
        | {
            input: { json: SandboxTransferLedgerDepositSimulateRequest }
            output: SandboxTransferLedgerDepositSimulateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: SandboxTransferLedgerDepositSimulateRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/sandbox/transfer/ledger/withdraw/simulate': {
      $post:
        | {
            input: { json: SandboxTransferLedgerWithdrawSimulateRequest }
            output: SandboxTransferLedgerWithdrawSimulateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: SandboxTransferLedgerWithdrawSimulateRequest }
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
    '/sandbox/payment_profile/reset_login': {
      $post:
        | {
            input: { json: SandboxPaymentProfileResetLoginRequest }
            output: SandboxPaymentProfileResetLoginResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: SandboxPaymentProfileResetLoginRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/sandbox/payment/simulate': {
      $post:
        | {
            input: { json: SandboxPaymentSimulateRequest }
            output: SandboxPaymentSimulateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: SandboxPaymentSimulateRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/employers/search': {
      $post:
        | {
            input: { json: EmployersSearchRequest }
            output: EmployersSearchResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: EmployersSearchRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/income/verification/create': {
      $post:
        | {
            input: { json: IncomeVerificationCreateRequest }
            output: IncomeVerificationCreateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: IncomeVerificationCreateRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/income/verification/paystubs/get': {
      $post:
        | {
            input: { json: IncomeVerificationPaystubsGetRequest }
            output: IncomeVerificationPaystubsGetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: IncomeVerificationPaystubsGetRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/income/verification/documents/download': {
      $post:
        | {
            input: { json: IncomeVerificationDocumentsDownloadRequest }
            output: File
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: IncomeVerificationDocumentsDownloadRequest }
            output: PlaidError
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
    '/income/verification/precheck': {
      $post:
        | {
            input: { json: IncomeVerificationPrecheckRequest }
            output: IncomeVerificationPrecheckResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: IncomeVerificationPrecheckRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/employment/verification/get': {
      $post:
        | {
            input: { json: EmploymentVerificationGetRequest }
            output: EmploymentVerificationGetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: EmploymentVerificationGetRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/credit/audit_copy_token/create': {
      $post:
        | {
            input: { json: CreditAuditCopyTokenCreateRequest }
            output: CreditAuditCopyTokenCreateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreditAuditCopyTokenCreateRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/credit/audit_copy_token/remove': {
      $post:
        | {
            input: { json: CreditAuditCopyTokenRemoveRequest }
            output: CreditAuditCopyTokenRemoveResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreditAuditCopyTokenRemoveRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/credit/asset_report/freddie_mac/get': {
      $post:
        | {
            input: { json: AssetReportFreddieGetRequest }
            output: AssetReportFreddieGetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: AssetReportFreddieGetRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/credit/freddie_mac/reports/get': {
      $post:
        | {
            input: { json: CreditFreddieMacReportsGetRequest }
            output: CreditFreddieMacReportsGetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreditFreddieMacReportsGetRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/beta/credit/v1/bank_employment/get': {
      $post:
        | {
            input: { json: CreditBankEmploymentGetRequest }
            output: CreditBankEmploymentGetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreditBankEmploymentGetRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/credit/bank_income/get': {
      $post:
        | {
            input: { json: CreditBankIncomeGetRequest }
            output: CreditBankIncomeGetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreditBankIncomeGetRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/credit/bank_income/pdf/get': {
      $post:
        | {
            input: { json: CreditBankIncomePDFGetRequest }
            output: CreditBankIncomePDFGetResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: CreditBankIncomePDFGetRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/credit/bank_income/refresh': {
      $post:
        | {
            input: { json: CreditBankIncomeRefreshRequest }
            output: CreditBankIncomeRefreshResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreditBankIncomeRefreshRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/credit/bank_income/webhook/update': {
      $post:
        | {
            input: { json: CreditBankIncomeWebhookUpdateRequest }
            output: CreditBankIncomeWebhookUpdateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreditBankIncomeWebhookUpdateRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/credit/payroll_income/parsing_config/update': {
      $post:
        | {
            input: { json: CreditPayrollIncomeParsingConfigUpdateRequest }
            output: CreditPayrollIncomeParsingConfigUpdateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreditPayrollIncomeParsingConfigUpdateRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/credit/bank_statements/uploads/get': {
      $post:
        | {
            input: { json: CreditBankStatementsUploadsGetRequest }
            output: CreditBankStatementsUploadsGetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreditBankStatementsUploadsGetRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/credit/payroll_income/get': {
      $post:
        | {
            input: { json: CreditPayrollIncomeGetRequest }
            output: CreditPayrollIncomeGetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreditPayrollIncomeGetRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/credit/payroll_income/risk_signals/get': {
      $post:
        | {
            input: { json: CreditPayrollIncomeRiskSignalsGetRequest }
            output: CreditPayrollIncomeRiskSignalsGetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreditPayrollIncomeRiskSignalsGetRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/credit/payroll_income/precheck': {
      $post:
        | {
            input: { json: CreditPayrollIncomePrecheckRequest }
            output: CreditPayrollIncomePrecheckResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreditPayrollIncomePrecheckRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/credit/employment/get': {
      $post:
        | {
            input: { json: CreditEmploymentGetRequest }
            output: CreditEmploymentGetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreditEmploymentGetRequest }
            output: PlaidError
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
      $post:
        | {
            input: { json: CreditRelayCreateRequest }
            output: CreditRelayCreateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreditRelayCreateRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/credit/relay/get': {
      $post:
        | {
            input: { json: CreditRelayGetRequest }
            output: AssetReportGetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreditRelayGetRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/credit/relay/pdf/get': {
      $post:
        | {
            input: { json: CreditRelayPDFGetRequest }
            output: CreditRelayPDFGetResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: CreditRelayPDFGetRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/credit/relay/refresh': {
      $post:
        | {
            input: { json: CreditRelayRefreshRequest }
            output: CreditRelayRefreshResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreditRelayRefreshRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/credit/relay/remove': {
      $post:
        | {
            input: { json: CreditRelayRemoveRequest }
            output: CreditRelayRemoveResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreditRelayRemoveRequest }
            output: PlaidError
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
    '/sandbox/bank_income/fire_webhook': {
      $post:
        | {
            input: { json: SandboxBankIncomeFireWebhookRequest }
            output: SandboxBankIncomeFireWebhookResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: SandboxBankIncomeFireWebhookRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/sandbox/cra/cashflow_updates/update': {
      $post:
        | {
            input: { json: SandboxCraCashflowUpdatesUpdateRequest }
            output: SandboxCraCashflowUpdatesUpdateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: SandboxCraCashflowUpdatesUpdateRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/sandbox/cra/servicing/simulate': {
      $post:
        | {
            input: { json: SandboxCraServicingSimulateRequest }
            output: SandboxCraServicingSimulateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: SandboxCraServicingSimulateRequest }
            output: PlaidError
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
    '/signal/schedule': {
      $post:
        | {
            input: { json: SignalScheduleRequest }
            output: SignalScheduleResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: SignalScheduleRequest }
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
    '/wallet/create': {
      $post:
        | {
            input: { json: WalletCreateRequest }
            output: WalletCreateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: WalletCreateRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/wallet/get': {
      $post:
        | {
            input: { json: WalletGetRequest }
            output: WalletGetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: WalletGetRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/wallet/list': {
      $post:
        | {
            input: { json: WalletListRequest }
            output: WalletListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: WalletListRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/wallet/transaction/execute': {
      $post:
        | {
            input: { json: WalletTransactionExecuteRequest }
            output: WalletTransactionExecuteResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: WalletTransactionExecuteRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/wallet/transaction/get': {
      $post:
        | {
            input: { json: WalletTransactionGetRequest }
            output: WalletTransactionGetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: WalletTransactionGetRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/wallet/transaction/list': {
      $post:
        | {
            input: { json: WalletTransactionListRequest }
            output: WalletTransactionListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: WalletTransactionListRequest }
            output: PlaidError
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
    '/beta/transactions/user_insights/v1/get': {
      $post:
        | {
            input: { json: TransactionsUserInsightsGetRequest }
            output: TransactionsUserInsightsGetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: TransactionsUserInsightsGetRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/beta/ewa_report/v1/get': {
      $post:
        | {
            input: { json: BetaEwaReportV1GetRequest }
            output: BetaEwaReportV1GetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: BetaEwaReportV1GetRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/beta/cash_advance/income_insights/v1/get': {
      $post:
        | {
            input: { json: BetaCashAdvanceIncomeInsightsV1GetRequest }
            output: BetaCashAdvanceIncomeInsightsV1GetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: BetaCashAdvanceIncomeInsightsV1GetRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/beta/issues/v1/get': {
      $post:
        | {
            input: { json: BetaIssuesV1GetRequest }
            output: BetaIssuesV1GetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: BetaIssuesV1GetRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/beta/issues/v1/list': {
      $post:
        | {
            input: { json: BetaIssuesV1ListRequest }
            output: BetaIssuesV1ListResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: BetaIssuesV1ListRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/beta/issues/v1/match': {
      $post:
        | {
            input: { json: BetaIssuesV1MatchRequest }
            output: BetaIssuesV1MatchResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: BetaIssuesV1MatchRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/beta/issues/v1/subscribe': {
      $post:
        | {
            input: { json: BetaIssuesV1SubscribeRequest }
            output: BetaIssuesV1SubscribeResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: BetaIssuesV1SubscribeRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/beta/issues/v1/unsubscribe': {
      $post:
        | {
            input: { json: BetaIssuesV1UnsubscribeRequest }
            output: BetaIssuesV1UnsubscribeResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: BetaIssuesV1UnsubscribeRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/issues/search': {
      $post:
        | {
            input: { json: IssuesSearchRequest }
            output: IssuesSearchResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: IssuesSearchRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/issues/get': {
      $post:
        | {
            input: { json: IssuesGetRequest }
            output: IssuesGetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: IssuesGetRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/issues/subscribe': {
      $post:
        | {
            input: { json: IssuesSubscribeRequest }
            output: IssuesSubscribeResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: IssuesSubscribeRequest }
            output: PlaidError
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
    '/beta/partner/customer/v1/create': {
      $post:
        | {
            input: { json: BetaPartnerCustomerV1CreateRequest }
            output: BetaPartnerCustomerV1CreateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: BetaPartnerCustomerV1CreateRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/beta/partner/customer/v1/get': {
      $post:
        | {
            input: { json: BetaPartnerCustomerV1GetRequest }
            output: BetaPartnerCustomerV1GetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: BetaPartnerCustomerV1GetRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/beta/partner/customer/v1/update': {
      $post:
        | {
            input: { json: BetaPartnerCustomerV1UpdateRequest }
            output: BetaPartnerCustomerV1UpdateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: BetaPartnerCustomerV1UpdateRequest }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/beta/partner/customer/v1/enable': {
      $post:
        | {
            input: { json: BetaPartnerCustomerV1EnableRequest }
            output: BetaPartnerCustomerV1EnableResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: BetaPartnerCustomerV1EnableRequest }
            output: PlaidError
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
    '/fdx/recipients': {
      $get:
        | { input: {}; output: GetRecipientsResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: PlaidError; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/fdx/consents': {
      $get:
        | {
            input: { query: { customerId: string; status?: FDXConsentGrantStatus | undefined } }
            output: GetConsentsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { customerId: string; status?: FDXConsentGrantStatus | undefined } }
            output: FDXError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/fdx/consents/:consentId/revocation': {
      $put:
        | {
            input: { param: { consentId: string } } & { json: FDXConsentRevocation }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { consentId: string } } & { json: FDXConsentRevocation }
            output: FDXError
            outputFormat: 'json'
            status: 200
          }
      $get:
        | {
            input: { param: { consentId: string } }
            output: FDXConsentRevocations
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { consentId: string } }
            output: FDXError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/fdx/consents/:consentId': {
      $get:
        | {
            input: { param: { consentId: string } }
            output: FDXConsentGrant
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { consentId: string } }
            output: FDXError
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/fdx/recipient/:recipientId': {
      $get:
        | {
            input: { param: { recipientId: string } } & {
              header: { 'OAUTH-STATE-ID'?: string | undefined }
            }
            output: GetRecipientResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { recipientId: string } } & {
              header: { 'OAUTH-STATE-ID'?: string | undefined }
            }
            output: PlaidError
            outputFormat: 'json'
            status: 200
          }
    }
  },
  '/'
>
export default routes
