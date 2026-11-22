type LocateStatus = 'active' | 'expired' | 'rejected'
type Locate = {
  all_or_none: boolean
  created_at: string
  expires_at?: (string | null) | undefined
  id: string
  limit_price?: (string | null) | undefined
  located_price?: (string | null) | undefined
  located_qty?: (bigint | null) | undefined
  rejection_reason?: (string | null) | undefined
  requested_qty: bigint
  status: LocateStatus
  symbol: string
  total_fee?: (string | null) | undefined
}
type ListLocatesResponse = { locates: Locate[]; next_page_token: string | null }
type LocateError = {
  code?:
    | 'invalid_input'
    | 'invalid_request_body'
    | 'invalid_limit_price'
    | 'invalid_symbols'
    | 'symbol_not_found'
    | 'security_not_found'
    | 'insufficient_buying_power'
    | 'easy_to_borrow'
    | 'threshold_security'
    | 'idempotency_key_conflict'
    | 'quote_unavailable'
    | undefined
  message: string
}
type ErrorResponse = { message?: string | undefined }
type CreateLocateRequest = {
  all_or_none?: boolean | undefined
  limit_price?: (string | null) | undefined
  qty: bigint
  symbol: string
}
type LocateQuoteError = {
  code:
    | 'symbol_not_found'
    | 'easy_to_borrow'
    | 'threshold_security'
    | 'corporate_action'
    | 'quote_unavailable'
  message: string
  symbol: string
}
type LocateQuote = {
  available_qty: bigint
  price?: string | undefined
  quoted_at: string
  symbol: string
}
type ListLocateQuotesResponse = { errors?: LocateQuoteError[] | undefined; quotes: LocateQuote[] }
type ActivityEventV2Asset = {
  cusip?: string | undefined
  id?: string | undefined
  isin?: string | undefined
  symbol?: string | undefined
}
type ActivityV2DetailTRD = {
  asset_id: string
  client_order_id?: string | undefined
  commission?: string | undefined
  cum_qty: string
  cusip?: string | undefined
  execution_type: 'fill' | 'partial_fill' | 'trade_correct' | 'trade_bust'
  leaves_qty: string
  order_id: string
  order_status: string
  settlement_currency?: string | undefined
  side: 'buy' | 'sell'
  symbol: string
}
type DIVSPDActivityV2 = {
  group_id?: string | undefined
  system_date: string
  ca_id?: string | undefined
  position_date: string
  reorg_id?: string | undefined
  cash_payout: string
  cusip: string
  due_bill_off_date?: string | undefined
  due_bill_on_date?: string | undefined
  entitled_qty: string
  ex_date?: string | undefined
  foreign: 'true' | 'false'
  isin?: string | undefined
  payable_date?: string | undefined
  rate: string
  record_date?: string | undefined
  special: 'true' | 'false'
  symbol: string
}
type CDIVActivityV2 = {
  group_id?: string | undefined
  system_date: string
  ca_id?: string | undefined
  position_date: string
  reorg_id?: string | undefined
  cusip: string
  due_bill_off_date?: string | undefined
  due_bill_on_date?: string | undefined
  ex_date?: string | undefined
  foreign: 'true' | 'false'
  isin?: string | undefined
  payable_date?: string | undefined
  rate: string
  record_date?: string | undefined
  special: 'true' | 'false'
  symbol: string
  cash_payout: string
  entitled_qty: string
}
type SDIVActivityV2 = {
  group_id?: string | undefined
  system_date: string
  ca_id?: string | undefined
  position_date: string
  reorg_id?: string | undefined
  cusip: string
  ex_date?: string | undefined
  isin?: string | undefined
  payable_date?: string | undefined
  rate: string
  record_date?: string | undefined
  symbol: string
  entitled_qty: string
  new_qty: string
  paid_qty: string
}
type CGDActivityV2 = {
  group_id?: string | undefined
  system_date: string
  ca_id?: string | undefined
  position_date: string
  reorg_id?: string | undefined
  cash_payout: string
  cusip: string
  entitled_qty: string
  ex_date?: string | undefined
  isin?: string | undefined
  long_term_rate?: string | undefined
  payable_date?: string | undefined
  rate: string
  record_date?: string | undefined
  short_term_rate?: string | undefined
  symbol: string
}
type ForwardSplitActivityV2 = {
  group_id?: string | undefined
  system_date: string
  ca_id?: string | undefined
  position_date: string
  reorg_id?: string | undefined
  new_cusip: string
  new_isin?: string | undefined
  new_rate: string
  old_cusip: string
  old_isin?: string | undefined
  old_rate: string
  payable_date?: string | undefined
  new_qty: string
  old_qty: string
  due_bill_redemption_date?: string | undefined
  ex_date?: string | undefined
  record_date?: string | undefined
  symbol: string
}
type ReverseSplitActivityV2 = {
  group_id?: string | undefined
  system_date: string
  ca_id?: string | undefined
  position_date: string
  reorg_id?: string | undefined
  new_cusip: string
  new_isin?: string | undefined
  new_rate: string
  old_cusip: string
  old_isin?: string | undefined
  old_rate: string
  payable_date?: string | undefined
  new_qty: string
  old_qty: string
  ex_date?: string | undefined
  new_symbol?: string | undefined
  record_date?: string | undefined
  symbol: string
}
type UnitSplitActivityV2 = {
  group_id?: string | undefined
  system_date: string
  ca_id?: string | undefined
  position_date: string
  reorg_id?: string | undefined
  new_cusip: string
  new_isin?: string | undefined
  new_rate: string
  old_cusip: string
  old_isin?: string | undefined
  old_rate: string
  payable_date?: string | undefined
  new_qty: string
  old_qty: string
  alternate_cusip: string
  alternate_isin?: string | undefined
  alternate_qty: string
  alternate_rate: string
  alternate_symbol: string
  effective_date: string
  new_symbol: string
  old_symbol: string
}
type SpinoffActivityV2 = {
  group_id?: string | undefined
  system_date: string
  ca_id?: string | undefined
  position_date: string
  reorg_id?: string | undefined
  due_bill_redemption_date?: string | undefined
  ex_date?: string | undefined
  new_cusip: string
  new_isin?: string | undefined
  new_price: string
  new_rate: string
  new_symbol: string
  payable_date?: string | undefined
  record_date?: string | undefined
  source_cusip: string
  source_isin?: string | undefined
  source_price: string
  source_rate: string
  source_symbol: string
  new_qty: string
  source_qty: string
}
type MAActivityV2 = {
  group_id?: string | undefined
  system_date: string
  ca_id?: string | undefined
  position_date: string
  reorg_id?: string | undefined
  acquiree_cusip: string
  acquiree_isin?: string | undefined
  acquiree_rate?: string | undefined
  acquiree_symbol: string
  acquirer_cusip?: string | undefined
  acquirer_isin?: string | undefined
  acquirer_rate?: string | undefined
  acquirer_symbol?: string | undefined
  effective_date: string
  payable_date: string
  acquiree_qty: string
  acquirer_qty?: string | undefined
  cash_payout?: string | undefined
  cash_rate?: string | undefined
}
type NCActivityV2 = {
  group_id?: string | undefined
  system_date: string
  ca_id?: string | undefined
  position_date: string
  reorg_id?: string | undefined
  new_cusip: string
  new_symbol: string
  old_cusip: string
  old_symbol: string
  position_qty: string
}
type FixedIncomeRedemptionActivityV2 = {
  group_id?: string | undefined
  system_date: string
  ca_id: string
  cash_payout: string
  cusip: string
  payment_date: string
  qty: string
}
type FixedIncomeInterestType = 'coupon' | 'accrued'
type FixedIncomeInterestActivityV2 = {
  group_id?: string | undefined
  system_date: string
  ca_id?: string | undefined
  position_date: string
  reorg_id?: string | undefined
  accrued_interest_rate?: string | undefined
  cash_payout: string
  cusip: string
  entitled_qty: string
  interest_type: FixedIncomeInterestType
  isin?: string | undefined
  order_id?: string | undefined
  parent_id?: string | undefined
  payment_date?: string | undefined
  price?: string | undefined
  rate?: string | undefined
  record_date?: string | undefined
}
type REOActivityV2 = {
  group_id?: string | undefined
  system_date: string
  ca_id?: string | undefined
  position_date: string
  reorg_id?: string | undefined
  cash_payout?: string | undefined
  cash_rate?: string | undefined
  cusip?: string | undefined
  effective_date?: string | undefined
  isin?: string | undefined
  new_rate?: string | undefined
  payable_date: string
  qty?: string | undefined
  removed_qty?: string | undefined
  source_cusip: string
  source_isin?: string | undefined
  source_qty?: string | undefined
  source_rate?: string | undefined
  source_symbol: string
  symbol?: string | undefined
}
type RightsDistributionActivityV2 = {
  group_id?: string | undefined
  system_date: string
  ca_id?: string | undefined
  position_date: string
  reorg_id?: string | undefined
  ex_date?: string | undefined
  expiration_date?: string | undefined
  new_cusip: string
  new_qty: string
  new_symbol: string
  payable_date?: string | undefined
  rate: string
  record_date?: string | undefined
  source_cusip: string
  source_qty: string
  source_symbol: string
}
type RightsSubscriptionElectionActivityV2 = {
  group_id?: string | undefined
  system_date: string
  new_cusip?: string | undefined
  new_symbol?: string | undefined
  source_cusip: string
  source_symbol: string
}
type TenderOfferActivityV2 = {
  group_id?: string | undefined
  system_date: string
  new_cusip?: string | undefined
  new_symbol?: string | undefined
  source_cusip: string
  source_symbol: string
}
type ExchangeOfferActivityV2 = {
  group_id?: string | undefined
  system_date: string
  new_cusip?: string | undefined
  new_symbol?: string | undefined
  source_cusip: string
  source_symbol: string
}
type WarrantExerciseElectionActivityV2 = {
  group_id?: string | undefined
  system_date: string
  new_cusip?: string | undefined
  new_symbol?: string | undefined
  source_cusip: string
  source_symbol: string
}
type WRMActivityV2 = {
  group_id?: string | undefined
  system_date: string
  ca_id?: string | undefined
  position_date: string
  reorg_id?: string | undefined
  cusip: string
  isin?: string | undefined
  removed_qty: string
  symbol: string
}
type OpcaCDIVActivityV2 = {
  group_id?: string | undefined
  system_date: string
  ca_id?: string | undefined
  position_date: string
  reorg_id?: string | undefined
  new_contract_symbol: string
  new_qty?: string | undefined
  old_contract_symbol: string
  old_qty?: string | undefined
  qty?: string | undefined
  cusip: string
  due_bill_off_date?: string | undefined
  due_bill_on_date?: string | undefined
  ex_date?: string | undefined
  foreign: 'true' | 'false'
  isin?: string | undefined
  payable_date?: string | undefined
  rate: string
  record_date?: string | undefined
  special: 'true' | 'false'
  symbol: string
}
type OpcaSDIVActivityV2 = {
  group_id?: string | undefined
  system_date: string
  ca_id?: string | undefined
  position_date: string
  reorg_id?: string | undefined
  new_contract_symbol: string
  new_qty?: string | undefined
  old_contract_symbol: string
  old_qty?: string | undefined
  qty?: string | undefined
  cusip: string
  ex_date?: string | undefined
  isin?: string | undefined
  payable_date?: string | undefined
  rate: string
  record_date?: string | undefined
  symbol: string
}
type OpcaMAActivityV2 = {
  group_id?: string | undefined
  system_date: string
  ca_id?: string | undefined
  position_date: string
  reorg_id?: string | undefined
  new_contract_symbol: string
  new_qty?: string | undefined
  old_contract_symbol: string
  old_qty?: string | undefined
  qty?: string | undefined
  acquiree_cusip: string
  acquiree_isin?: string | undefined
  acquiree_rate?: string | undefined
  acquiree_symbol: string
  acquirer_cusip?: string | undefined
  acquirer_isin?: string | undefined
  acquirer_rate?: string | undefined
  acquirer_symbol?: string | undefined
  effective_date: string
  payable_date: string
}
type OpcaNCActivityV2 = {
  group_id?: string | undefined
  system_date: string
  ca_id?: string | undefined
  position_date: string
  reorg_id?: string | undefined
  new_contract_symbol: string
  new_qty?: string | undefined
  old_contract_symbol: string
  old_qty?: string | undefined
  qty?: string | undefined
  new_cusip: string
  new_symbol: string
  old_cusip: string
  old_symbol: string
}
type OpcaSPINActivityV2 = {
  group_id?: string | undefined
  system_date: string
  ca_id?: string | undefined
  position_date: string
  reorg_id?: string | undefined
  new_contract_symbol: string
  new_qty?: string | undefined
  old_contract_symbol: string
  old_qty?: string | undefined
  qty?: string | undefined
  due_bill_redemption_date?: string | undefined
  ex_date?: string | undefined
  new_cusip: string
  new_isin?: string | undefined
  new_price: string
  new_rate: string
  new_symbol: string
  payable_date?: string | undefined
  record_date?: string | undefined
  source_cusip: string
  source_isin?: string | undefined
  source_price: string
  source_rate: string
  source_symbol: string
}
type OpcaFSPLITActivityV2 = {
  group_id?: string | undefined
  system_date: string
  ca_id?: string | undefined
  position_date: string
  reorg_id?: string | undefined
  new_contract_symbol: string
  new_qty?: string | undefined
  old_contract_symbol: string
  old_qty?: string | undefined
  qty?: string | undefined
  new_cusip: string
  new_isin?: string | undefined
  new_rate: string
  old_cusip: string
  old_isin?: string | undefined
  old_rate: string
  payable_date?: string | undefined
  due_bill_redemption_date?: string | undefined
  ex_date?: string | undefined
  record_date?: string | undefined
  symbol: string
}
type OpcaUSPLITActivityV2 = {
  group_id?: string | undefined
  system_date: string
  ca_id?: string | undefined
  position_date: string
  reorg_id?: string | undefined
  new_contract_symbol: string
  new_qty?: string | undefined
  old_contract_symbol: string
  old_qty?: string | undefined
  qty?: string | undefined
  new_cusip: string
  new_isin?: string | undefined
  new_rate: string
  old_cusip: string
  old_isin?: string | undefined
  old_rate: string
  payable_date?: string | undefined
  alternate_cusip: string
  alternate_rate: string
  alternate_symbol: string
  effective_date: string
  new_symbol: string
  old_symbol: string
}
type OpcaRSPLITActivityV2 = {
  group_id?: string | undefined
  system_date: string
  ca_id?: string | undefined
  position_date: string
  reorg_id?: string | undefined
  new_contract_symbol: string
  new_qty?: string | undefined
  old_contract_symbol: string
  old_qty?: string | undefined
  qty?: string | undefined
  new_cusip: string
  new_isin?: string | undefined
  new_rate: string
  old_cusip: string
  old_isin?: string | undefined
  old_rate: string
  payable_date?: string | undefined
  ex_date?: string | undefined
  new_symbol?: string | undefined
  record_date?: string | undefined
  symbol: string
}
type OpcaCGDActivityV2 = {
  group_id?: string | undefined
  system_date: string
  ca_id?: string | undefined
  position_date: string
  reorg_id?: string | undefined
  new_contract_symbol: string
  new_qty?: string | undefined
  old_contract_symbol: string
  old_qty?: string | undefined
  qty?: string | undefined
  cusip: string
  ex_date?: string | undefined
  isin?: string | undefined
  long_term_rate?: string | undefined
  payable_date?: string | undefined
  rate: string
  record_date?: string | undefined
  short_term_rate?: string | undefined
  symbol: string
}
type OPASNActivityV2 = {
  group_id?: string | undefined
  system_date: string
  contract_symbol?: string | undefined
  cusip?: string | undefined
  symbol?: string | undefined
}
type OPEXCActivityV2 = {
  group_id?: string | undefined
  system_date: string
  contract_symbol?: string | undefined
  cusip?: string | undefined
  symbol?: string | undefined
}
type OPEXPActivityV2 = {
  group_id?: string | undefined
  system_date: string
  contract_symbol?: string | undefined
  cusip?: string | undefined
  symbol?: string | undefined
}
type OPTRDActivityV2 = {
  group_id?: string | undefined
  system_date: string
  contract_symbol?: string | undefined
  cusip?: string | undefined
  symbol?: string | undefined
}
type OPCSHActivityV2 = {
  group_id?: string | undefined
  system_date: string
  contract_symbol?: string | undefined
  cusip?: string | undefined
  symbol?: string | undefined
}
type AcatsActivityV2 = {
  group_id?: string | undefined
  system_date: string
  external_id: string
  hold_date?: string | undefined
  request_id: string
  symbol: string
}
type AcatcActivityV2 = {
  group_id?: string | undefined
  system_date: string
  external_id: string
  hold_date?: string | undefined
  request_id: string
}
type FOPTActivityV2 = {
  group_id?: string | undefined
  system_date: string
  contra: string
  external_id: string
  symbol: string
}
type DIVNRAActivityV2 = {
  group_id?: string | undefined
  system_date: string
  cusip: string
  parent_id: string
  symbol: string
  tax_country?: string | undefined
  tax_rate?: string | undefined
}
type DIVWHActivityV2 = {
  group_id?: string | undefined
  system_date: string
  cusip: string
  isin?: string | undefined
  parent_id: string
  symbol: string
}
type JNLSActivityV2 = {
  group_id?: string | undefined
  system_date: string
  journal_id?: string | undefined
  issuer?: string | undefined
  symbol: string
}
type JNLCActivityV2 = {
  group_id?: string | undefined
  system_date: string
  journal_id?: string | undefined
}
type CSWActivityV2 = {
  group_id?: string | undefined
  system_date: string
  bank_transaction_id?: string | undefined
}
type FEEActivityV2 = {
  group_id?: string | undefined
  system_date: string
  execution_id?: string | undefined
  order_id?: string | undefined
  parent_id?: string | undefined
  swap_rate?: string | undefined
}
type MEMActivityV2 = { group_id?: string | undefined; system_date: string; transfer_id: string }
type OCTActivityV2 = {
  group_id?: string | undefined
  system_date: string
  symbol: string
  transfer_id: string
}
type FXTRDActivityV2 = {
  group_id?: string | undefined
  system_date: string
  order_id?: string | undefined
  swap_rate?: string | undefined
}
type ActivityV2DetailNTA =
  | DIVSPDActivityV2
  | CDIVActivityV2
  | SDIVActivityV2
  | CGDActivityV2
  | ForwardSplitActivityV2
  | ReverseSplitActivityV2
  | UnitSplitActivityV2
  | SpinoffActivityV2
  | MAActivityV2
  | NCActivityV2
  | FixedIncomeRedemptionActivityV2
  | FixedIncomeInterestActivityV2
  | REOActivityV2
  | RightsDistributionActivityV2
  | RightsSubscriptionElectionActivityV2
  | TenderOfferActivityV2
  | ExchangeOfferActivityV2
  | WarrantExerciseElectionActivityV2
  | WRMActivityV2
  | OpcaCDIVActivityV2
  | OpcaSDIVActivityV2
  | OpcaMAActivityV2
  | OpcaNCActivityV2
  | OpcaSPINActivityV2
  | OpcaFSPLITActivityV2
  | OpcaUSPLITActivityV2
  | OpcaRSPLITActivityV2
  | OpcaCGDActivityV2
  | OPASNActivityV2
  | OPEXCActivityV2
  | OPEXPActivityV2
  | OPTRDActivityV2
  | OPCSHActivityV2
  | AcatsActivityV2
  | AcatcActivityV2
  | FOPTActivityV2
  | DIVNRAActivityV2
  | DIVWHActivityV2
  | JNLSActivityV2
  | JNLCActivityV2
  | CSWActivityV2
  | FEEActivityV2
  | MEMActivityV2
  | OCTActivityV2
  | FXTRDActivityV2
type ActivityEventV2 = {
  activity_subtype?: string | undefined
  activity_type: string
  asset?: ActivityEventV2Asset | undefined
  at: string
  currency: string
  event_id: string
  executed_at: string
  net_amount?: string | undefined
  previous_id?: string | undefined
  price?: string | undefined
  qty?: string | undefined
  ref_id: string
  settle_date: string
  status: string
  swap_fee_bps?: string | undefined
  swap_rate?: string | undefined
  details: ActivityV2DetailTRD | ActivityV2DetailNTA
}
type AccountStatus =
  | 'INACTIVE'
  | 'PAPER_ONLY'
  | 'ONBOARDING'
  | 'SUBMISSION_FAILED'
  | 'SUBMITTED'
  | 'ACCOUNT_UPDATED'
  | 'APPROVAL_PENDING'
  | 'ACTIVE'
  | 'REJECTED'
  | 'ACCOUNT_CLOSED'
  | 'APPROVED'
  | 'ACCOUNT_CLOSED_PENDING'
  | 'ACTION_REQUIRED'
  | 'LIMITED'
type Account = {
  account_blocked?: boolean | undefined
  account_number?: (string | null) | undefined
  accrued_fees?: string | undefined
  balance_asof?: string | undefined
  buying_power?: string | undefined
  cash?: string | undefined
  created_at?: string | undefined
  crypto_status?: AccountStatus | undefined
  currency?: string | undefined
  equity?: string | undefined
  id: string
  initial_margin?: string | undefined
  intraday_adjustments?: string | undefined
  last_equity?: string | undefined
  last_maintenance_margin?: string | undefined
  long_market_value?: string | undefined
  maintenance_margin?: string | undefined
  multiplier?: string | undefined
  non_marginable_buying_power?: string | undefined
  options_approved_level?: 0 | 1 | 2 | 3 | undefined
  options_buying_power?: string | undefined
  options_trading_level?: 0 | 1 | 2 | 3 | undefined
  pending_reg_taf_fees?: string | undefined
  pending_transfer_in?: string | undefined
  pending_transfer_out?: string | undefined
  portfolio_value?: string | undefined
  regt_buying_power?: string | undefined
  short_market_value?: string | undefined
  shorting_enabled?: boolean | undefined
  sma?: string | undefined
  status: AccountStatus
  trade_suspended_by_user?: boolean | undefined
  trading_blocked?: boolean | undefined
  transfers_blocked?: boolean | undefined
}
type ActivityTypeFilter =
  | 'ACATC'
  | 'ACATS'
  | 'ALLOC'
  | 'CFEE'
  | 'CGD'
  | 'CIL'
  | 'CSD'
  | 'CSR'
  | 'CSW'
  | 'DIV'
  | 'DIVCGL'
  | 'DIVCGS'
  | 'DIVFEE'
  | 'DIVFT'
  | 'DIVNRA'
  | 'DIVROC'
  | 'DIVTW'
  | 'DIVTXEX'
  | 'DIVWH'
  | 'DVF'
  | 'ECEXP'
  | 'EXTRD'
  | 'FEE'
  | 'FIMAT'
  | 'FXCNV'
  | 'FXTRD'
  | 'INT'
  | 'INTNRA'
  | 'INTTW'
  | 'INVPNL'
  | 'JNL'
  | 'JNLC'
  | 'JNLS'
  | 'MA'
  | 'MEM'
  | 'NC'
  | 'OCT'
  | 'OPASN'
  | 'OPCA'
  | 'OPCSH'
  | 'OPEXC'
  | 'OPEXP'
  | 'OPTRD'
  | 'PTC'
  | 'PTR'
  | 'REO'
  | 'REORG'
  | 'SC'
  | 'SPIN'
  | 'SPLIT'
  | 'SUB'
  | 'SWP'
  | 'TRD'
  | 'VOF'
  | 'WH'
  | 'FOPT'
  | 'FILL'
  | 'MISC'
  | 'TRANS'
type ActivityType =
  | 'FILL'
  | 'ACATC'
  | 'ACATS'
  | 'ALLOC'
  | 'CFEE'
  | 'CGD'
  | 'CIL'
  | 'CORR'
  | 'CSD'
  | 'CSR'
  | 'CSW'
  | 'DIV'
  | 'DIVCGL'
  | 'DIVCGS'
  | 'DIVFEE'
  | 'DIVFT'
  | 'DIVNRA'
  | 'DIVROC'
  | 'DIVTW'
  | 'DIVTXEX'
  | 'DIVWH'
  | 'DTCS'
  | 'DVF'
  | 'ECEXP'
  | 'EXTRD'
  | 'FEE'
  | 'FIMAT'
  | 'FXCNV'
  | 'FXTRD'
  | 'INT'
  | 'INTNRA'
  | 'INTTW'
  | 'INVPNL'
  | 'JNL'
  | 'JNLC'
  | 'JNLS'
  | 'MA'
  | 'MEM'
  | 'NC'
  | 'OPASN'
  | 'OPCA'
  | 'OPCSH'
  | 'OPEXC'
  | 'OPEXP'
  | 'OPTRD'
  | 'PTC'
  | 'PTR'
  | 'REO'
  | 'REORG'
  | 'SC'
  | 'SEG'
  | 'SPIN'
  | 'SPLIT'
  | 'SSO'
  | 'SSP'
  | 'SUB'
  | 'VOF'
  | 'WH'
  | 'FOPT'
  | 'OCT'
type OrderStatus =
  | 'new'
  | 'partially_filled'
  | 'filled'
  | 'done_for_day'
  | 'canceled'
  | 'expired'
  | 'replaced'
  | 'pending_cancel'
  | 'pending_replace'
  | 'accepted'
  | 'pending_new'
  | 'accepted_for_bidding'
  | 'stopped'
  | 'rejected'
  | 'suspended'
  | 'calculated'
  | 'held'
type TradingActivities = {
  activity_type?: ActivityType | undefined
  cum_qty?: string | undefined
  id?: string | undefined
  leaves_qty?: string | undefined
  order_id?: string | undefined
  order_status?: OrderStatus | undefined
  price?: string | undefined
  qty?: string | undefined
  side?: string | undefined
  symbol?: string | undefined
  transaction_time?: string | undefined
  type?: 'fill' | 'partial_fill' | undefined
}
type ActivitySubType = string
type NonTradeActivities = {
  activity_sub_type?: ActivitySubType | undefined
  activity_type?: ActivityType | undefined
  created_at?: string | undefined
  currency?: string | undefined
  cusip?: string | undefined
  date?: string | undefined
  group_id?: string | undefined
  id?: string | undefined
  net_amount?: string | undefined
  per_share_amount?: string | undefined
  qty?: string | undefined
  status?: 'executed' | 'correct' | 'canceled' | undefined
  symbol?: string | undefined
}
type AccountConfigurations = {
  disable_overnight_trading?: boolean | undefined
  fractional_trading?: boolean | undefined
  max_margin_multiplier?: string | undefined
  max_options_trading_level?: 0 | 1 | 2 | 3 | undefined
  no_shorting?: boolean | undefined
  ptp_no_exception_entry?: boolean | undefined
  suspend_trade?: boolean | undefined
  trade_confirm_email?: string | undefined
}
type PortfolioHistoryTimeframe = '1D' | '1H' | '15Min' | '5Min' | '1Min'
type PortfolioHistory = {
  base_value: number | null
  base_value_asof?: string | undefined
  cashflow?: { [x: string]: number[] } | undefined
  equity: (number | null)[]
  profit_loss: (number | null)[]
  profit_loss_pct: (number | null)[]
  timeframe: PortfolioHistoryTimeframe
  timestamp: bigint[]
}
type PortfolioHistoryError = { code: number; message: string }
type AssetAttribute =
  | 'ptp_no_exception'
  | 'ptp_with_exception'
  | 'ipo'
  | 'has_options'
  | 'options_late_close'
  | 'fractional_eh_enabled'
  | 'overnight_tradable'
  | 'overnight_halted'
type AssetClass =
  | 'us_equity'
  | 'us_option'
  | 'crypto'
  | 'crypto_perp'
  | 'treasury'
  | 'corporate'
  | 'global_equity'
  | 'us_index'
  | 'us_equity_chain'
  | 'ipo'
type Exchange =
  | 'AMEX'
  | 'ARCA'
  | 'BATS'
  | 'NYSE'
  | 'NASDAQ'
  | 'NYSEARCA'
  | 'OTC'
  | 'CRYPTO'
  | 'TXSE'
  | 'ERSX'
  | 'CRXL'
  | 'ASCX'
  | 'INDEX'
type Assets = {
  attributes?: AssetAttribute[] | undefined
  borrow_status?: 'easy_to_borrow' | 'hard_to_borrow' | undefined
  class: AssetClass
  cusip?: (string | null) | undefined
  exchange: Exchange
  fractionable: boolean
  id: string
  maintenance_margin_requirement?: number | undefined
  margin_requirement_long?: string | undefined
  margin_requirement_short?: string | undefined
  marginable: boolean
  min_order_size?: string | undefined
  min_trade_increment?: string | undefined
  name: string
  price_increment?: string | undefined
  shortable: boolean
  status: 'active' | 'inactive'
  symbol: string
  tradable: boolean
}
type LegacyCalendarDay = {
  close: string
  date: string
  open: string
  session_close: string
  session_open: string
  settlement_date: string
}
type LegacyPublicCalendarResp = LegacyCalendarDay[]
type LegacyClock = { is_open: boolean; next_close: string; next_open: string; timestamp: string }
type CorporateActionCaType = 'Spinoff' | 'Merger' | 'Split' | 'Reorg' | 'Dividend'
type CorporateAnnouncement = {
  ca_sub_type?: string | undefined
  ca_type?: CorporateActionCaType | undefined
  cash?: string | undefined
  corporate_action_id?: string | undefined
  declaration_date?: string | undefined
  effective_date?: string | undefined
  ex_date?: string | undefined
  id?: string | undefined
  initiating_original_cusip?: string | undefined
  initiating_symbol?: string | undefined
  new_rate?: string | undefined
  old_rate?: string | undefined
  payable_date?: string | undefined
  record_date?: string | undefined
  target_original_cusip?: string | undefined
  target_symbol?: string | undefined
}
type OptionContractType = 'call' | 'put'
type OptionContractStyle = 'american' | 'european'
type NextPageToken = string | null
type OptionDeliverable = {
  allocation_percentage: string
  amount: string
  asset_id?: string | undefined
  delayed_settlement: boolean
  settlement_method: 'BTOB' | 'CADF' | 'CAFX' | 'CCC'
  settlement_type: 'T+0' | 'T+1' | 'T+2' | 'T+3' | 'T+4' | 'T+5'
  symbol: string
  type: 'cash' | 'equity'
}
type OptionContract = {
  close_price?: string | undefined
  close_price_date?: string | undefined
  deliverables?: OptionDeliverable[] | undefined
  expiration_date: string
  id: string
  multiplier: string
  name: string
  open_interest?: string | undefined
  open_interest_date?: string | undefined
  ppind: boolean
  root_symbol?: string | undefined
  size: string
  status: 'active' | 'inactive'
  strike_price: string
  style: OptionContractStyle
  symbol: string
  tradable: boolean
  type: OptionContractType
  underlying_asset_id: string
  underlying_symbol: string
}
type OptionContractsResponse = {
  next_page_token?: NextPageToken | undefined
  option_contracts: OptionContract[]
}
type Error = { code: number; message: string }
type CanceledOrderResponse = { id?: string | undefined; status?: number | undefined }
type OrderGroupRole = 'entry' | 'take_profit' | 'stop_loss'
type OrderClass = 'simple' | 'bracket' | 'oco' | 'oto' | 'mleg' | ''
type PositionIntent = 'buy_to_open' | 'buy_to_close' | 'sell_to_open' | 'sell_to_close'
type OrderSide = 'buy' | 'sell'
type TimeInForce = 'day' | 'gtc' | 'opg' | 'cls' | 'ioc' | 'fok'
type OrderType = 'market' | 'limit' | 'stop' | 'stop_limit' | 'trailing_stop'
type OrderLeg = {
  asset_class?: AssetClass | undefined
  asset_id?: string | undefined
  canceled_at?: (string | null) | undefined
  client_order_id?: string | undefined
  created_at?: string | undefined
  expired_at?: (string | null) | undefined
  extended_hours?: boolean | undefined
  failed_at?: (string | null) | undefined
  filled_at?: (string | null) | undefined
  filled_avg_price?: (string | null) | undefined
  filled_qty?: string | undefined
  group_id?: string | undefined
  group_role?: OrderGroupRole | undefined
  hwm?: (string | null) | undefined
  id?: string | undefined
  legs?: ({ [x: string]: unknown }[] | null) | undefined
  limit_price?: (string | null) | undefined
  notional: string | null
  order_class?: OrderClass | undefined
  order_type?: string | undefined
  position_intent?: PositionIntent | undefined
  qty: string | null
  replaced_at?: (string | null) | undefined
  replaced_by?: (string | null) | undefined
  replaces?: (string | null) | undefined
  side: OrderSide
  status?: OrderStatus | undefined
  stop_price?: (string | null) | undefined
  submitted_at?: string | undefined
  symbol: string
  time_in_force: TimeInForce
  trail_percent?: (string | null) | undefined
  trail_price?: (string | null) | undefined
  type: OrderType
  updated_at?: string | undefined
}
type Order = {
  asset_class?: AssetClass | undefined
  asset_id?: string | undefined
  canceled_at?: (string | null) | undefined
  client_order_id?: string | undefined
  created_at?: string | undefined
  expired_at?: (string | null) | undefined
  expires_at?: string | undefined
  extended_hours?: boolean | undefined
  failed_at?: (string | null) | undefined
  filled_at?: (string | null) | undefined
  filled_avg_price?: (string | null) | undefined
  filled_qty?: string | undefined
  group_id?: string | undefined
  group_role?: OrderGroupRole | undefined
  hwm?: (string | null) | undefined
  id?: string | undefined
  legs?: (OrderLeg[] | null) | undefined
  limit_price?: (string | null) | undefined
  notional: string | null
  order_class?: OrderClass | undefined
  order_type?: string | undefined
  position_intent?: PositionIntent | undefined
  qty?: (string | null) | undefined
  ratio_qty?: (string | null) | undefined
  replaced_at?: (string | null) | undefined
  replaced_by?: (string | null) | undefined
  replaces?: (string | null) | undefined
  side?: OrderSide | undefined
  status?: OrderStatus | undefined
  stop_price?: (string | null) | undefined
  submitted_at?: string | undefined
  symbol?: string | undefined
  time_in_force: TimeInForce
  trail_percent?: (string | null) | undefined
  trail_price?: (string | null) | undefined
  type: OrderType
  updated_at?: string | undefined
}
type AdvancedInstructions = {
  algorithm?: 'DMA' | 'TWAP' | 'VWAP' | undefined
  destination?: 'NYSE' | 'NASDAQ' | 'ARCA' | 'IEX' | 'MEMX' | undefined
  display_qty?: string | undefined
  end_time?: string | undefined
  max_percentage?: string | undefined
  start_time?: string | undefined
}
type MLegOrderLeg = {
  position_intent?: PositionIntent | undefined
  ratio_qty: string
  side?: OrderSide | undefined
  symbol: string
}
type CreateOrderRequest = {
  advanced_instructions?: AdvancedInstructions | undefined
  client_order_id?: string | undefined
  extended_hours?: boolean | undefined
  legs?: MLegOrderLeg[] | undefined
  limit_price?: string | undefined
  notional?: string | undefined
  order_class?: OrderClass | undefined
  position_intent?: PositionIntent | undefined
  qty?: string | undefined
  side?: OrderSide | undefined
  stop_loss?: { limit_price?: string | undefined; stop_price?: string | undefined } | undefined
  stop_price?: string | undefined
  symbol?: string | undefined
  take_profit?: { limit_price?: string | undefined } | undefined
  time_in_force: TimeInForce
  trail_percent?: string | undefined
  trail_price?: string | undefined
  type: OrderType
}
type PatchOrderRequest = {
  advanced_instructions?: AdvancedInstructions | undefined
  client_order_id?: string | undefined
  limit_price?: string | undefined
  notional?: string | undefined
  qty?: string | undefined
  stop_price?: string | undefined
  time_in_force?: TimeInForce | undefined
  trail?: string | undefined
}
type ClosePositionError = {
  available?: string | undefined
  code: number
  existing_qty?: string | undefined
  held_for_options?: string | undefined
  held_for_orders?: string | undefined
  message: string
  symbol?: string | undefined
}
type PositionClosedResponse = {
  body?: Order | ClosePositionError | undefined
  status: number
  symbol: string
}
type ExchangeForPosition =
  | 'AMEX'
  | 'ARCA'
  | 'BATS'
  | 'NYSE'
  | 'NASDAQ'
  | 'NYSEARCA'
  | 'OTC'
  | 'CRYPTO'
  | 'TXSE'
  | 'ERSX'
  | 'CRXL'
  | 'ASCX'
  | 'INDEX'
  | ''
type USDPositionValues = {
  avg_entry_price: string
  change_today?: string | undefined
  cost_basis: string
  current_price?: string | undefined
  lastday_price?: string | undefined
  market_value?: string | undefined
  unrealized_intraday_pl?: string | undefined
  unrealized_intraday_plpc?: string | undefined
  unrealized_pl?: string | undefined
  unrealized_plpc?: string | undefined
}
type Position = {
  asset_class: AssetClass
  asset_id: string
  asset_marginable: boolean
  avg_entry_price: string
  avg_entry_swap_rate?: string | undefined
  change_today: string
  cost_basis: string
  current_price: string
  exchange: ExchangeForPosition
  lastday_price: string
  market_value: string
  prev_swap_rate?: string | undefined
  qty: string
  qty_available?: string | undefined
  side: 'long' | 'short'
  swap_rate?: string | undefined
  symbol: string
  unrealized_intraday_pl: string
  unrealized_intraday_plpc: string
  unrealized_pl: string
  unrealized_plpc: string
  usd?: USDPositionValues | undefined
}
type TokenizationIssuer =
  | 'binance'
  | 'bitget'
  | 'coinbase'
  | 'ondo'
  | 'robinhood'
  | 'st0x'
  | 'xstocks'
type TokenizationNetwork =
  | 'arbitrum'
  | 'base'
  | 'binance'
  | 'cronos'
  | 'ethereum'
  | 'hypercore'
  | 'hyperevm'
  | 'mantle'
  | 'robinhood'
  | 'solana'
  | 'ton'
  | 'tron'
type TokenizationMintRequest = {
  client_request_id?: string | undefined
  issuer: TokenizationIssuer
  network: TokenizationNetwork
  qty: string
  underlying_symbol: string
  wallet_address: string
}
type TokenizationRequestStatus = 'pending' | 'rejected' | 'completed'
type TokenizationMintResponse = {
  client_request_id?: string | undefined
  created_at: string
  issuer: TokenizationIssuer
  network: TokenizationNetwork
  qty: string
  status: TokenizationRequestStatus
  token_symbol: string
  tokenization_request_id: string
  underlying_symbol: string
}
type TokenizationRequestType = 'mint' | 'redeem'
type TokenizationTransferStatus = 'pending' | 'completed' | 'rejected'
type TokenizationRequest = {
  client_account_id?: string | undefined
  client_external_account_id?: string | undefined
  client_request_id?: string | undefined
  created_at: string
  fees?: (string | null) | undefined
  issuer: TokenizationIssuer
  issuer_request_id?: (string | null) | undefined
  network: TokenizationNetwork
  qty: string
  status: TokenizationRequestStatus
  token_symbol: string
  tokenization_request_id: string
  transfer_status?: TokenizationTransferStatus | undefined
  tx_hash?: (string | null) | undefined
  type: TokenizationRequestType
  underlying_symbol: string
  updated_at?: (string | null) | undefined
  wallet_address: string
}
type CryptoChain = 'SOL' | 'ETH' | 'BTC' | 'XRP' | 'ARB'
type CryptoWallet = {
  address?: string | undefined
  chain?: string | undefined
  created_at?: string | undefined
}
type WalletFeeEstimateResponse = { fee?: string | undefined; network_fee?: string | undefined }
type TransferDirection = 'INCOMING' | 'OUTGOING'
type CryptoTransferStatus = 'PROCESSING' | 'FAILED' | 'COMPLETE'
type CryptoTransfer = {
  amount?: string | undefined
  asset?: string | undefined
  chain?: string | undefined
  created_at?: string | undefined
  direction?: TransferDirection | undefined
  fees?: string | undefined
  from_address?: string | undefined
  id?: string | undefined
  network_fee?: string | undefined
  status?: CryptoTransferStatus | undefined
  to_address?: string | undefined
  tx_hash?: string | undefined
  usd_value?: string | undefined
}
type VASP = {
  address?: string | undefined
  city?: string | undefined
  country?: string | undefined
  did?: string | undefined
  emailDomain?: string | undefined
  id: string
  name: string
  postalCode?: string | undefined
  state?: string | undefined
  website?: string | undefined
}
type SearchVASPsResponse = {
  page?: number | undefined
  pages?: number | undefined
  total?: number | undefined
  vasps: VASP[]
}
type TravelRuleManualEntry = { vasp_name: string; vasp_website: string }
type WhitelistedAddress = {
  address?: string | undefined
  asset?: string | undefined
  chain?: string | undefined
  created_at?: string | undefined
  id?: string | undefined
  status?: 'APPROVED' | 'PENDING' | undefined
  travel_rule_info?:
    | {
        beneficiary_country_of_residence?: string | undefined
        beneficiary_entity_name?: string | undefined
        beneficiary_family_name?: string | undefined
        beneficiary_geographic_address_building_number?: string | undefined
        beneficiary_geographic_address_country?: string | undefined
        beneficiary_geographic_address_post_code?: string | undefined
        beneficiary_geographic_address_street_name?: string | undefined
        beneficiary_geographic_address_town_name?: string | undefined
        beneficiary_given_name?: string | undefined
        beneficiary_is_self_hosted?: boolean | undefined
        beneficiary_manual_entry?: TravelRuleManualEntry | undefined
        beneficiary_vasp_id?: string | undefined
      }
    | undefined
}
type TravelRuleInfo = {
  beneficiary_country_of_residence?: string | undefined
  beneficiary_entity_name?: string | undefined
  beneficiary_family_name?: string | undefined
  beneficiary_geographic_address_building_number?: string | undefined
  beneficiary_geographic_address_country?: string | undefined
  beneficiary_geographic_address_post_code?: string | undefined
  beneficiary_geographic_address_street_name?: string | undefined
  beneficiary_geographic_address_town_name?: string | undefined
  beneficiary_given_name?: string | undefined
  beneficiary_is_self_hosted?: boolean | undefined
  beneficiary_manual_entry?: TravelRuleManualEntry | undefined
  beneficiary_vasp_id?: string | undefined
}
type CreateWhitelistedAddressRequest = {
  address?: string | undefined
  asset?: string | undefined
  chain?: CryptoChain | undefined
  travel_rule_info?: TravelRuleInfo | undefined
}
type TravelRuleValidationErrorCode =
  | 'INVALID_DATA'
  | 'UNKNOWN_VASP'
  | 'ADDRESS_BELONGS_TO_VASP'
  | 'TRAVEL_RULE_ACTION_REQUIRED'
  | 'BENEFICIARY_NAME_REQUIRED'
type TravelRuleFieldOption = { description: string; value: string }
type TravelRuleRequiredField = {
  description: string
  field: string
  options?: (TravelRuleFieldOption[] | null) | undefined
  value_type: 'string' | 'bool'
}
type TravelRuleNextAction = {
  description: string
  name: string
  required_fields?: TravelRuleRequiredField[] | undefined
  type: 'REQUIRED' | 'ONE_OF'
}
type TravelRuleValidationError = {
  error_code: TravelRuleValidationErrorCode
  message: string
  next_actions: TravelRuleNextAction[]
}
type WalletError = { message: string }
type TravelRuleErrorResponse = TravelRuleValidationError | WalletError
type UpdateWhitelistedAddressTravelRuleInfoRequest = { travel_rule_info: TravelRuleInfo }
type WatchlistWithoutAsset = {
  account_id: string
  created_at: string
  id: string
  name: string
  updated_at: string
}
type CreateWatchlistRequest = { name: string; symbols?: string[] | undefined }
type Watchlist = {
  account_id: string
  assets?: Assets[] | undefined
  created_at: string
  id: string
  name: string
  updated_at: string
}
type AddAssetToWatchlistRequest = { symbol?: string | undefined }
type UpdateWatchlistRequest = { [x: string]: unknown } | { [x: string]: unknown }
type Market =
  | 'BMO'
  | 'BNYM'
  | 'BOATS'
  | 'CEUX'
  | 'CHIX'
  | 'HKEX'
  | 'IEX'
  | 'IEXG'
  | 'ISE'
  | 'LSE'
  | 'MTA'
  | 'MTAA'
  | 'NASDAQ'
  | 'NYSE'
  | 'OCEA'
  | 'OPRA'
  | 'OTC'
  | 'OTCM'
  | 'SIFMA'
  | 'TADAWUL'
  | 'XAMS'
  | 'XBRU'
  | 'XDUB'
  | 'XETR'
  | 'XETRA'
  | 'XHKG'
  | 'XLIS'
  | 'XLON'
  | 'XNAS'
  | 'XNYS'
  | 'XPAR'
  | 'XSAU'
type CalendarDay = {
  core_end: string
  core_start: string
  date: string
  lunch_end?: string | undefined
  lunch_start?: string | undefined
  post_end?: string | undefined
  post_start?: string | undefined
  pre_end?: string | undefined
  pre_start?: string | undefined
  settlement_date?: string | undefined
}
type MarketAcronym = string
type Bic = string
type Mic = string
type MarketName = string
type MarketTimezone = string
type PublicMarket = {
  acronym: MarketAcronym
  bic?: Bic | undefined
  mic?: Mic | undefined
  name: MarketName
  timezone: MarketTimezone
}
type PublicCalendarResp = { calendar: CalendarDay[]; market: PublicMarket }
type Phase = 'closed' | 'pre' | 'core' | 'lunch' | 'post'
type Clock = {
  is_market_day: boolean
  market: PublicMarket
  next_market_close: string
  next_market_open: string
  phase: Phase
  phase_until: string
  timestamp: string
}
type ClockResp = { clocks: Clock[] }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1/locates': {
      $get:
        | {
            input: {
              query: {
                page_token?: string | undefined
                limit?: number | undefined
                status?: LocateStatus | undefined
                symbol?: string | undefined
                start?: string | undefined
                end?: string | undefined
              }
            }
            output: ListLocatesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                page_token?: string | undefined
                limit?: number | undefined
                status?: LocateStatus | undefined
                symbol?: string | undefined
                start?: string | undefined
                end?: string | undefined
              }
            }
            output: LocateError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                page_token?: string | undefined
                limit?: number | undefined
                status?: LocateStatus | undefined
                symbol?: string | undefined
                start?: string | undefined
                end?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                page_token?: string | undefined
                limit?: number | undefined
                status?: LocateStatus | undefined
                symbol?: string | undefined
                start?: string | undefined
                end?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                page_token?: string | undefined
                limit?: number | undefined
                status?: LocateStatus | undefined
                symbol?: string | undefined
                start?: string | undefined
                end?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: CreateLocateRequest
            }
            output: Locate
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: CreateLocateRequest
            }
            output: LocateError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: CreateLocateRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: CreateLocateRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: CreateLocateRequest
            }
            output: LocateError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: CreateLocateRequest
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/locates/:locate_id': {
      $get:
        | {
            input: { param: { locate_id: string } }
            output: Locate
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { locate_id: string } }
            output: LocateError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { locate_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { locate_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { locate_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { locate_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v1/locates/quotes': {
      $get:
        | {
            input: { query: { symbols: string } }
            output: ListLocateQuotesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { symbols: string } }
            output: LocateError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { symbols: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { symbols: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { symbols: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v2beta1/events/activities': {
      $get: {
        input: {
          query: {
            since?: string | undefined
            until?: string | undefined
            since_id?: string | undefined
            until_id?: string | undefined
          }
        }
        output: ActivityEventV2[]
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/v2/account': { $get: { input: {}; output: Account; outputFormat: 'json'; status: 200 } }
  } & {
    '/v2/account/activities': {
      $get: {
        input: {
          query: {
            activity_types?: ActivityTypeFilter[] | undefined
            category?: 'trade_activity' | 'non_trade_activity' | undefined
            order_id?: string | undefined
            date?: string | undefined
            until?: string | undefined
            after?: string | undefined
            direction?: 'asc' | 'desc' | undefined
            page_size?: number | undefined
            page_token?: string | undefined
          }
        }
        output: (TradingActivities | NonTradeActivities)[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/account/activities/:activity_type': {
      $get: {
        input: { param: { activity_type: ActivityTypeFilter } } & {
          query: {
            order_id?: string | undefined
            date?: string | undefined
            until?: string | undefined
            after?: string | undefined
            direction?: 'asc' | 'desc' | undefined
            page_size?: number | undefined
            page_token?: string | undefined
          }
        }
        output: (TradingActivities | NonTradeActivities)[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/account/configurations': {
      $get: { input: {}; output: AccountConfigurations; outputFormat: 'json'; status: 200 }
      $patch: {
        input: { json: AccountConfigurations }
        output: AccountConfigurations
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/account/portfolio/history': {
      $get:
        | {
            input: {
              query: {
                period?: string | undefined
                timeframe?: PortfolioHistoryTimeframe | undefined
                intraday_reporting?: 'market_hours' | 'extended_hours' | 'continuous' | undefined
                start?: string | undefined
                pnl_reset?: 'no_reset' | 'per_day' | undefined
                end?: string | undefined
                extended_hours?: string | undefined
                cashflow_types?: string | undefined
              }
            }
            output: PortfolioHistory
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                period?: string | undefined
                timeframe?: PortfolioHistoryTimeframe | undefined
                intraday_reporting?: 'market_hours' | 'extended_hours' | 'continuous' | undefined
                start?: string | undefined
                pnl_reset?: 'no_reset' | 'per_day' | undefined
                end?: string | undefined
                extended_hours?: string | undefined
                cashflow_types?: string | undefined
              }
            }
            output: PortfolioHistoryError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                period?: string | undefined
                timeframe?: PortfolioHistoryTimeframe | undefined
                intraday_reporting?: 'market_hours' | 'extended_hours' | 'continuous' | undefined
                start?: string | undefined
                pnl_reset?: 'no_reset' | 'per_day' | undefined
                end?: string | undefined
                extended_hours?: string | undefined
                cashflow_types?: string | undefined
              }
            }
            output: PortfolioHistoryError
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                period?: string | undefined
                timeframe?: PortfolioHistoryTimeframe | undefined
                intraday_reporting?: 'market_hours' | 'extended_hours' | 'continuous' | undefined
                start?: string | undefined
                pnl_reset?: 'no_reset' | 'per_day' | undefined
                end?: string | undefined
                extended_hours?: string | undefined
                cashflow_types?: string | undefined
              }
            }
            output: PortfolioHistoryError
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                period?: string | undefined
                timeframe?: PortfolioHistoryTimeframe | undefined
                intraday_reporting?: 'market_hours' | 'extended_hours' | 'continuous' | undefined
                start?: string | undefined
                pnl_reset?: 'no_reset' | 'per_day' | undefined
                end?: string | undefined
                extended_hours?: string | undefined
                cashflow_types?: string | undefined
              }
            }
            output: PortfolioHistoryError
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              query: {
                period?: string | undefined
                timeframe?: PortfolioHistoryTimeframe | undefined
                intraday_reporting?: 'market_hours' | 'extended_hours' | 'continuous' | undefined
                start?: string | undefined
                pnl_reset?: 'no_reset' | 'per_day' | undefined
                end?: string | undefined
                extended_hours?: string | undefined
                cashflow_types?: string | undefined
              }
            }
            output: PortfolioHistoryError
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              query: {
                period?: string | undefined
                timeframe?: PortfolioHistoryTimeframe | undefined
                intraday_reporting?: 'market_hours' | 'extended_hours' | 'continuous' | undefined
                start?: string | undefined
                pnl_reset?: 'no_reset' | 'per_day' | undefined
                end?: string | undefined
                extended_hours?: string | undefined
                cashflow_types?: string | undefined
              }
            }
            output: PortfolioHistoryError
            outputFormat: 'json'
            status: 500
          }
        | {
            input: {
              query: {
                period?: string | undefined
                timeframe?: PortfolioHistoryTimeframe | undefined
                intraday_reporting?: 'market_hours' | 'extended_hours' | 'continuous' | undefined
                start?: string | undefined
                pnl_reset?: 'no_reset' | 'per_day' | undefined
                end?: string | undefined
                extended_hours?: string | undefined
                cashflow_types?: string | undefined
              }
            }
            output: PortfolioHistoryError
            outputFormat: 'json'
            status: 504
          }
    }
  } & {
    '/v2/assets': {
      $get: {
        input: {
          query: {
            status?: string | undefined
            asset_class?: string | undefined
            exchange?: string | undefined
            attributes?: AssetAttribute[] | undefined
          }
        }
        output: Assets[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/assets/:symbol_or_asset_id': {
      $get:
        | {
            input: { param: { symbol_or_asset_id: string } }
            output: Assets
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { symbol_or_asset_id: string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v2/calendar': {
      $get:
        | {
            input: {
              query: {
                start?: string | undefined
                end?: string | undefined
                date_type?: 'TRADING' | 'SETTLEMENT' | undefined
              }
            }
            output: LegacyPublicCalendarResp
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                start?: string | undefined
                end?: string | undefined
                date_type?: 'TRADING' | 'SETTLEMENT' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                start?: string | undefined
                end?: string | undefined
                date_type?: 'TRADING' | 'SETTLEMENT' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: {
              query: {
                start?: string | undefined
                end?: string | undefined
                date_type?: 'TRADING' | 'SETTLEMENT' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v2/clock': {
      $get:
        | { input: {}; output: LegacyClock; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 429 }
        | { input: {}; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/v2/corporate_actions/announcements': {
      $get: {
        input: {
          query: {
            ca_types: CorporateActionCaType[]
            since: string
            until: string
            symbol?: string | undefined
            cusip?: string | undefined
            date_type?: 'declaration_date' | 'ex_date' | 'record_date' | 'payable_date' | undefined
          }
        }
        output: CorporateAnnouncement[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/corporate_actions/announcements/:id': {
      $get: {
        input: { param: { id: string } }
        output: CorporateAnnouncement
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/options/contracts': {
      $get: {
        input: {
          query: {
            underlying_symbols?: string | undefined
            show_deliverables?: boolean | undefined
            status?: 'active' | 'inactive' | undefined
            expiration_date?: string | undefined
            expiration_date_gte?: string | undefined
            expiration_date_lte?: string | undefined
            root_symbol?: string | undefined
            type?: OptionContractType | undefined
            style?: OptionContractStyle | undefined
            strike_price_gte?: number | undefined
            strike_price_lte?: number | undefined
            page_token?: string | undefined
            limit?: number | undefined
            ppind?: boolean | undefined
          }
        }
        output: OptionContractsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/options/contracts/:symbol_or_id': {
      $get:
        | {
            input: { param: { symbol_or_id: string } }
            output: OptionContract
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { symbol_or_id: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/v2/orders': {
      $delete:
        | { input: {}; output: CanceledOrderResponse[]; outputFormat: 'json'; status: 207 }
        | { input: {}; output: {}; outputFormat: string; status: 500 }
      $get: {
        input: {
          query: {
            status?: 'open' | 'closed' | 'all' | undefined
            limit?: number | undefined
            after?: string | undefined
            until?: string | undefined
            direction?: 'asc' | 'desc' | undefined
            nested?: boolean | undefined
            symbols?: string | undefined
            side?: string | undefined
            asset_class?:
              | (
                  | 'us_equity'
                  | 'us_option'
                  | 'crypto'
                  | 'crypto_perp'
                  | 'treasury'
                  | 'corporate'
                  | 'global_equity'
                  | 'us_index'
                  | 'us_equity_chain'
                  | 'ipo'
                  | 'all'
                )[]
              | undefined
            before_order_id?: string | undefined
            after_order_id?: string | undefined
          }
        }
        output: Order[]
        outputFormat: 'json'
        status: 200
      }
      $post:
        | { input: { json: CreateOrderRequest }; output: Order; outputFormat: 'json'; status: 200 }
        | { input: { json: CreateOrderRequest }; output: {}; outputFormat: string; status: 403 }
        | { input: { json: CreateOrderRequest }; output: {}; outputFormat: string; status: 422 }
    }
  } & {
    '/v2/orders/:order_id': {
      $delete:
        | { input: { param: { order_id: string } }; output: {}; outputFormat: string; status: 204 }
        | { input: { param: { order_id: string } }; output: {}; outputFormat: string; status: 422 }
      $get: {
        input: { param: { order_id: string } } & { query: { nested?: boolean | undefined } }
        output: Order
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { order_id: string } } & { json: PatchOrderRequest }
        output: Order
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/orders:by_client_order_id': {
      $get: {
        input: { query: { client_order_id: string } }
        output: Order
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/positions': {
      $delete:
        | {
            input: { query: { cancel_orders?: boolean | undefined } }
            output: PositionClosedResponse[]
            outputFormat: 'json'
            status: 207
          }
        | {
            input: { query: { cancel_orders?: boolean | undefined } }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { query: { cancel_orders?: boolean | undefined } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $get: { input: {}; output: Position[]; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/v2/positions/:symbol_or_asset_id': {
      $delete: {
        input: { param: { symbol_or_asset_id: string } } & {
          query: { qty?: number | undefined; percentage?: number | undefined }
        }
        output: Order
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { symbol_or_asset_id: string } }
        output: Position
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/positions/:symbol_or_contract_id/do-not-exercise': {
      $post:
        | {
            input: { param: { symbol_or_contract_id: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { symbol_or_contract_id: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { symbol_or_contract_id: string } }
            output: Error
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v2/positions/:symbol_or_contract_id/exercise': {
      $post:
        | {
            input: { param: { symbol_or_contract_id: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { symbol_or_contract_id: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { symbol_or_contract_id: string } }
            output: Error
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v2/tokenization/mint': {
      $post:
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: TokenizationMintRequest
            }
            output: TokenizationMintResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: TokenizationMintRequest
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: TokenizationMintRequest
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: TokenizationMintRequest
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: TokenizationMintRequest
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v2/tokenization/requests': {
      $get:
        | {
            input: {
              query: {
                type?: TokenizationRequestType | undefined
                status?: TokenizationRequestStatus | undefined
                underlying_symbol?: string | undefined
                issuer?: TokenizationIssuer | undefined
                network?: TokenizationNetwork | undefined
                after?: string | undefined
                before?: string | undefined
              }
            }
            output: TokenizationRequest[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                type?: TokenizationRequestType | undefined
                status?: TokenizationRequestStatus | undefined
                underlying_symbol?: string | undefined
                issuer?: TokenizationIssuer | undefined
                network?: TokenizationNetwork | undefined
                after?: string | undefined
                before?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                type?: TokenizationRequestType | undefined
                status?: TokenizationRequestStatus | undefined
                underlying_symbol?: string | undefined
                issuer?: TokenizationIssuer | undefined
                network?: TokenizationNetwork | undefined
                after?: string | undefined
                before?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                type?: TokenizationRequestType | undefined
                status?: TokenizationRequestStatus | undefined
                underlying_symbol?: string | undefined
                issuer?: TokenizationIssuer | undefined
                network?: TokenizationNetwork | undefined
                after?: string | undefined
                before?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v2/tokenization/requests/:tokenization_request_id': {
      $get:
        | {
            input: { param: { tokenization_request_id: string } }
            output: TokenizationRequest
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tokenization_request_id: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { tokenization_request_id: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { tokenization_request_id: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { tokenization_request_id: string } }
            output: Error
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v2/tokenization/requests:by_client_request_id': {
      $get:
        | {
            input: { query: { client_request_id: string } }
            output: TokenizationRequest
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { client_request_id: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { client_request_id: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { client_request_id: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { client_request_id: string } }
            output: Error
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/v2/wallets': {
      $get: {
        input: {
          query: {
            asset?: string | undefined
            chain?: CryptoChain | undefined
            network?: 'ethereum' | 'solana' | undefined
          }
        }
        output: CryptoWallet
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/wallets/fees/estimate': {
      $get: {
        input: {
          query: {
            asset?: string | undefined
            from_address?: string | undefined
            to_address?: string | undefined
            amount?: string | undefined
          }
        }
        output: WalletFeeEstimateResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/wallets/transfers': {
      $get: { input: {}; output: CryptoTransfer; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/v2/wallets/transfers/:transfer_id': {
      $get: {
        input: { param: { transfer_id: string } }
        output: CryptoTransfer
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/wallets/travel-rule/vasps': {
      $get: {
        input: {
          query: {
            q?: string | undefined
            emailDomain?: string | undefined
            chainalysisName?: string | undefined
            fields?: string | undefined
            page?: number | undefined
            per_page?: number | undefined
            order?: string | undefined
            includeSubsidiaryVASPs?: boolean | undefined
          }
        }
        output: SearchVASPsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/wallets/whitelists': {
      $get: { input: {}; output: WhitelistedAddress; outputFormat: 'json'; status: 200 }
      $post:
        | {
            input: { json: CreateWhitelistedAddressRequest }
            output: WhitelistedAddress
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: CreateWhitelistedAddressRequest }
            output: TravelRuleErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/v2/wallets/whitelists/:whitelisted_address_id': {
      $delete: {
        input: { param: { whitelisted_address_id: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/v2/wallets/whitelists/:whitelisted_address_id/travel-rule-info': {
      $patch:
        | {
            input: { param: { whitelisted_address_id: string } } & {
              json: UpdateWhitelistedAddressTravelRuleInfoRequest
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { whitelisted_address_id: string } } & {
              json: UpdateWhitelistedAddressTravelRuleInfoRequest
            }
            output: TravelRuleErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/v2/watchlists': {
      $get: { input: {}; output: WatchlistWithoutAsset[]; outputFormat: 'json'; status: 200 }
      $post: {
        input: { json: CreateWatchlistRequest }
        output: Watchlist
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/watchlists/:watchlist_id': {
      $delete:
        | {
            input: { param: { watchlist_id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { watchlist_id: string } }
            output: {}
            outputFormat: string
            status: 404
          }
      $get: {
        input: { param: { watchlist_id: string } }
        output: Watchlist
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { watchlist_id: string } } & { json: AddAssetToWatchlistRequest }
        output: Watchlist
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { watchlist_id: string } } & { json: UpdateWatchlistRequest }
        output: Watchlist
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/watchlists/:watchlist_id/:symbol': {
      $delete: {
        input: { param: { watchlist_id: string; symbol: string } }
        output: Watchlist
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/watchlists:by_name': {
      $delete: { input: { query: { name: string } }; output: {}; outputFormat: string; status: 204 }
      $get: {
        input: { query: { name: string } }
        output: Watchlist
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { query: { name: string } } & { json: AddAssetToWatchlistRequest }
        output: Watchlist
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { query: { name: string } } & { json: UpdateWatchlistRequest }
        output: Watchlist
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v3/calendar/:market': {
      $get:
        | {
            input: { param: { market: Market } } & {
              query: {
                start?: string | undefined
                end?: string | undefined
                timezone?: 'UTC' | undefined
              }
            }
            output: PublicCalendarResp
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { market: Market } } & {
              query: {
                start?: string | undefined
                end?: string | undefined
                timezone?: 'UTC' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { market: Market } } & {
              query: {
                start?: string | undefined
                end?: string | undefined
                timezone?: 'UTC' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { market: Market } } & {
              query: {
                start?: string | undefined
                end?: string | undefined
                timezone?: 'UTC' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/v3/clock': {
      $get:
        | {
            input: { query: { markets?: string | undefined; time?: string | undefined } }
            output: ClockResp
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { markets?: string | undefined; time?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { markets?: string | undefined; time?: string | undefined } }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { query: { markets?: string | undefined; time?: string | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  },
  '/'
>
export default routes
