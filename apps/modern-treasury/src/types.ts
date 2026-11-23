type AccountCollectionFlow = {
  client_token?: string | undefined
  counterparty_id: string
  created_at?: string | undefined
  external_account_id?: (string | null) | undefined
  id?: string | undefined
  live_mode?: boolean | undefined
  object?: string | undefined
  payment_types: ('ach' | 'wire')[]
  receiving_countries?:
    | (
        | 'USA'
        | 'AUS'
        | 'BEL'
        | 'CAN'
        | 'CHL'
        | 'CHN'
        | 'COL'
        | 'FRA'
        | 'DEU'
        | 'HKG'
        | 'IND'
        | 'IRL'
        | 'ITA'
        | 'MEX'
        | 'NLD'
        | 'PER'
        | 'ESP'
        | 'GBR'
      )[]
    | undefined
  status?: 'cancelled' | 'completed' | 'expired' | 'pending' | undefined
  updated_at?: string | undefined
}
type ErrorMessage = {
  errors: {
    code?:
      | 'parameter_invalid'
      | 'parameter_missing'
      | 'resource_not_found'
      | 'not_found'
      | 'forbidden'
      | 'invalid_ip'
      | 'invalid_key'
      | 'header_invalid'
      | 'expired_key'
      | 'conflict'
      | 'too_many_requests'
      | undefined
    message?: string | undefined
    parameter?: string | undefined
  }
}
type AccountCollectionFlowCreateRequest = {
  counterparty_id: string
  payment_types: string[]
  receiving_countries?:
    | (
        | 'USA'
        | 'AUS'
        | 'BEL'
        | 'CAN'
        | 'CHL'
        | 'CHN'
        | 'COL'
        | 'FRA'
        | 'DEU'
        | 'HKG'
        | 'IND'
        | 'IRL'
        | 'ITA'
        | 'MEX'
        | 'NLD'
        | 'PER'
        | 'ESP'
        | 'GBR'
      )[]
    | undefined
}
type AccountCollectionFlowUpdateRequest = { status: 'cancelled' }
type BulkRequest = {
  action_type: 'create' | 'update' | 'delete'
  created_at: string
  failed_result_count: number
  id: string
  live_mode: boolean
  metadata: { [x: string]: string }
  object: string
  resource_type:
    | 'payment_order'
    | 'ledger_account'
    | 'ledger_transaction'
    | 'expected_payment'
    | 'transaction'
    | 'transaction_line_item'
  status: 'pending' | 'processing' | 'completed'
  success_result_count: number
  total_resource_count: number
  updated_at: string
}
type Accounting = {
  account_id?: (string | null) | undefined
  class_id?: (string | null) | undefined
}
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
  | 'BCH'
  | 'BDT'
  | 'BGN'
  | 'BHD'
  | 'BIF'
  | 'BMD'
  | 'BND'
  | 'BOB'
  | 'BRL'
  | 'BSD'
  | 'BTC'
  | 'BTN'
  | 'BWP'
  | 'BYN'
  | 'BYR'
  | 'BZD'
  | 'CAD'
  | 'CDF'
  | 'CHF'
  | 'CLF'
  | 'CLP'
  | 'CNH'
  | 'CNY'
  | 'COP'
  | 'CRC'
  | 'CUC'
  | 'CUP'
  | 'CVE'
  | 'CZK'
  | 'DJF'
  | 'DKK'
  | 'DOP'
  | 'DZD'
  | 'EEK'
  | 'EGP'
  | 'ERN'
  | 'ETB'
  | 'ETH'
  | 'EUR'
  | 'EURC'
  | 'FJD'
  | 'FKP'
  | 'GBP'
  | 'GBX'
  | 'GEL'
  | 'GGP'
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
  | 'IMP'
  | 'INR'
  | 'IQD'
  | 'IRR'
  | 'ISK'
  | 'JEP'
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
  | 'MRU'
  | 'MTL'
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
  | 'OMR'
  | 'OP'
  | 'OUSD'
  | 'PAB'
  | 'PEN'
  | 'PGK'
  | 'PHP'
  | 'PKR'
  | 'PLN'
  | 'PYG'
  | 'PYUSD'
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
  | 'SKK'
  | 'SLE'
  | 'SLL'
  | 'SOS'
  | 'SRD'
  | 'SSP'
  | 'STD'
  | 'STN'
  | 'SVC'
  | 'SYP'
  | 'SZL'
  | 'THB'
  | 'TJS'
  | 'TMM'
  | 'TMT'
  | 'TND'
  | 'TOP'
  | 'TRY'
  | 'TTD'
  | 'TWD'
  | 'TZS'
  | 'UAH'
  | 'UGX'
  | 'USD'
  | 'USDC'
  | 'USDG'
  | 'USDT'
  | 'UYU'
  | 'UZS'
  | 'VEF'
  | 'VES'
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
  | 'XCG'
  | 'XDR'
  | 'XFU'
  | 'XOF'
  | 'XPD'
  | 'XPF'
  | 'XPT'
  | 'XTS'
  | 'YER'
  | 'ZAR'
  | 'ZMK'
  | 'ZMW'
  | 'ZWD'
  | 'ZWG'
  | 'ZWL'
  | 'ZWN'
  | 'ZWR'
type LedgerEntryCreateRequest = {
  amount?: number | undefined
  amount_string?: string | undefined
  available_balance_amount?: ({ [x: string]: number } | null) | undefined
  direction: 'credit' | 'debit'
  effective_at?: string | undefined
  ledger_account_id: string
  lock_version?: (number | null) | undefined
  metadata?: { [x: string]: string } | undefined
  pending_balance_amount?: ({ [x: string]: number } | null) | undefined
  posted_balance_amount?: ({ [x: string]: number } | null) | undefined
  show_resulting_ledger_account_balances?: (boolean | null) | undefined
}
type LedgerTransactionCreateRequest = {
  description?: (string | null) | undefined
  effective_at?: string | undefined
  effective_date?: string | undefined
  external_id?: string | undefined
  ledger_entries: LedgerEntryCreateRequest[]
  ledgerable_id?: string | undefined
  ledgerable_type?:
    | 'expected_payment'
    | 'incoming_payment_detail'
    | 'payment_order'
    | 'return'
    | 'reversal'
    | undefined
  metadata?: { [x: string]: string } | undefined
  status?: 'archived' | 'pending' | 'posted' | undefined
}
type LineItemRequest = {
  accounting_category_id?: (string | null) | undefined
  amount: number
  description?: (string | null) | undefined
  metadata?: { [x: string]: string } | undefined
}
type ExternalAccountType =
  | 'cash'
  | 'checking'
  | 'general_ledger'
  | 'hosted_wallet'
  | 'loan'
  | 'non_resident'
  | 'other'
  | 'overdraft'
  | 'savings'
  | 'self_hosted_wallet'
type ContactDetailCreateRequest = {
  contact_identifier?: string | undefined
  contact_identifier_type?: 'email' | 'phone_number' | 'website' | undefined
}
type LedgerAccountCreateRequest = {
  currency: string
  currency_exponent?: (number | null) | undefined
  description?: (string | null) | undefined
  external_id?: (string | null) | undefined
  ledger_account_category_ids?: string[] | undefined
  ledger_id: string
  ledgerable_id?: string | undefined
  ledgerable_type?: 'external_account' | 'internal_account' | 'virtual_account' | undefined
  metadata?: { [x: string]: string } | undefined
  name: string
  normal_balance: 'credit' | 'debit'
}
type AddressRequest = {
  country?: (string | null) | undefined
  line1?: (string | null) | undefined
  line2?: (string | null) | undefined
  locality?: (string | null) | undefined
  postal_code?: (string | null) | undefined
  region?: (string | null) | undefined
}
type PaymentOrderSubtype =
  | '0C'
  | '0N'
  | '0S'
  | 'CCD'
  | 'CIE'
  | 'CTX'
  | 'IAT'
  | 'PPD'
  | 'TEL'
  | 'WEB'
  | 'arbitrum'
  | 'au_becs'
  | 'avalanche'
  | 'bacs'
  | 'base'
  | 'chats'
  | 'digital'
  | 'dk_nets'
  | 'eft'
  | 'ethereum'
  | 'masav'
  | 'mx_ccen'
  | 'neft'
  | 'nics'
  | 'nz_becs'
  | 'pl_elixir'
  | 'polygon'
  | 'print'
  | 'remote_deposit'
  | 'se_bankgirot'
  | 'sepa'
  | 'sg_giro'
  | 'sic'
  | 'solana'
  | 'zengin'
type PaymentOrderType =
  | 'ach'
  | 'au_becs'
  | 'bacs'
  | 'book'
  | 'card'
  | 'chats'
  | 'check'
  | 'cross_border'
  | 'dk_nets'
  | 'eft'
  | 'gb_fps'
  | 'masav'
  | 'mx_ccen'
  | 'neft'
  | 'nics'
  | 'nz_becs'
  | 'pl_elixir'
  | 'rtp'
  | 'se_bankgirot'
  | 'sepa'
  | 'sg_giro'
  | 'sic'
  | 'stablecoin'
  | 'wire'
  | 'zengin'
type PaymentOrderAsyncCreateRequest = {
  accounting?: Accounting | undefined
  accounting_category_id?: (string | null) | undefined
  accounting_ledger_class_id?: (string | null) | undefined
  amount: number
  charge_bearer?: 'shared' | 'sender' | 'receiver' | undefined
  currency?: Currency | undefined
  description?: (string | null) | undefined
  direction: 'credit' | 'debit'
  effective_date?: string | undefined
  end_to_end_id?: (string | null) | undefined
  expires_at?: (string | null) | undefined
  external_id?: (string | null) | undefined
  fallback_type?: 'ach' | undefined
  foreign_exchange_contract?: (string | null) | undefined
  foreign_exchange_indicator?: 'fixed_to_variable' | 'variable_to_fixed' | undefined
  ledger_transaction?: LedgerTransactionCreateRequest | undefined
  ledger_transaction_id?: string | undefined
  line_items?: LineItemRequest[] | undefined
  metadata?: { [x: string]: string } | undefined
  nsf_protected?: boolean | undefined
  originating_account_id: string
  originating_party_address?:
    | ({
        country?: (string | null) | undefined
        line1?: (string | null) | undefined
        line2?: (string | null) | undefined
        locality?: (string | null) | undefined
        postal_code?: (string | null) | undefined
        region?: (string | null) | undefined
      } | null)
    | undefined
  originating_party_name?: (string | null) | undefined
  originating_secondary_party_name?: (string | null) | undefined
  priority?: 'high' | 'normal' | undefined
  process_after?: (string | null) | undefined
  purpose?: (string | null) | undefined
  receiving_account?:
    | {
        account_details?:
          | {
              account_number: string
              account_number_type?:
                | 'arbitrum_address'
                | 'au_number'
                | 'avalanche_address'
                | 'base_address'
                | 'card_token'
                | 'clabe'
                | 'ethereum_address'
                | 'hk_number'
                | 'iban'
                | 'id_number'
                | 'nz_number'
                | 'other'
                | 'polygon_address'
                | 'sg_number'
                | 'solana_address'
                | undefined
            }[]
          | undefined
        account_type?: ExternalAccountType | undefined
        contact_details?: ContactDetailCreateRequest[] | undefined
        external_id?: (string | null) | undefined
        ledger_account?: LedgerAccountCreateRequest | undefined
        metadata?: { [x: string]: string } | undefined
        name?: (string | null) | undefined
        party_address?: AddressRequest | undefined
        party_identifier?: string | undefined
        party_name?: string | undefined
        party_type?: 'business' | 'individual' | undefined
        plaid_processor_token?: string | undefined
        routing_details?:
          | {
              payment_type?:
                | 'ach'
                | 'au_becs'
                | 'bacs'
                | 'book'
                | 'card'
                | 'chats'
                | 'check'
                | 'cross_border'
                | 'dk_nets'
                | 'eft'
                | 'gb_fps'
                | 'masav'
                | 'mx_ccen'
                | 'neft'
                | 'nics'
                | 'nz_becs'
                | 'pl_elixir'
                | 'rtp'
                | 'se_bankgirot'
                | 'sepa'
                | 'sg_giro'
                | 'sic'
                | 'stablecoin'
                | 'wire'
                | 'zengin'
                | undefined
              routing_number: string
              routing_number_type:
                | 'aba'
                | 'au_bsb'
                | 'br_codigo'
                | 'ca_cpa'
                | 'chips'
                | 'cnaps'
                | 'dk_interbank_clearing_code'
                | 'gb_sort_code'
                | 'hk_interbank_clearing_code'
                | 'il_bank_code'
                | 'in_ifsc'
                | 'jp_zengin_code'
                | 'my_branch_code'
                | 'mx_bank_identifier'
                | 'nz_national_clearing_code'
                | 'pl_national_clearing_code'
                | 'se_bankgiro_clearing_code'
                | 'sg_interbank_clearing_code'
                | 'swift'
                | 'vasp'
                | 'za_national_clearing_code'
            }[]
          | undefined
      }
    | undefined
  receiving_account_id?: string | undefined
  reconciliation_status?: 'unreconciled' | 'tentatively_reconciled' | 'reconciled' | undefined
  remittance_information?: (string | null) | undefined
  send_remittance_advice?: (boolean | null) | undefined
  statement_descriptor?: (string | null) | undefined
  subtype?: PaymentOrderSubtype | undefined
  transaction_monitoring_enabled?: boolean | undefined
  type: PaymentOrderType
  ultimate_originating_account_id?: string | undefined
  ultimate_originating_party_address?:
    | ({
        country?: string | undefined
        line1?: string | undefined
        line2?: string | undefined
        locality?: string | undefined
        postal_code?: string | undefined
        region?: string | undefined
      } | null)
    | undefined
  ultimate_originating_party_identifier?: (string | null) | undefined
  ultimate_originating_party_name?: (string | null) | undefined
  ultimate_receiving_party_identifier?: (string | null) | undefined
  ultimate_receiving_party_name?: (string | null) | undefined
  vendor_attributes?: { [x: string]: unknown } | undefined
}
type ReconciliationRuleVariable = {
  amount_lower_bound: number
  amount_upper_bound: number
  counterparty_id?: (string | null) | undefined
  currency?: Currency | undefined
  custom_identifiers?: ({ [x: string]: string } | null) | undefined
  date_lower_bound?: (string | null) | undefined
  date_upper_bound?: (string | null) | undefined
  direction: 'credit' | 'debit'
  internal_account_id: string
  type?:
    | 'ach'
    | 'au_becs'
    | 'bacs'
    | 'book'
    | 'card'
    | 'chats'
    | 'check'
    | 'cross_border'
    | 'dk_nets'
    | 'eft'
    | 'gb_fps'
    | 'masav'
    | 'mx_ccen'
    | 'neft'
    | 'nics'
    | 'nz_becs'
    | 'pl_elixir'
    | 'rtp'
    | 'se_bankgirot'
    | 'sepa'
    | 'sg_giro'
    | 'sic'
    | 'stablecoin'
    | 'wire'
    | 'zengin'
    | undefined
}
type ExpectedPaymentType =
  | 'ach'
  | 'au_becs'
  | 'bacs'
  | 'book'
  | 'card'
  | 'chats'
  | 'check'
  | 'cross_border'
  | 'dk_nets'
  | 'eft'
  | 'gb_fps'
  | 'masav'
  | 'mx_ccen'
  | 'neft'
  | 'nics'
  | 'nz_becs'
  | 'pl_elixir'
  | 'rtp'
  | 'se_bankgirot'
  | 'sepa'
  | 'sg_giro'
  | 'sic'
  | 'stablecoin'
  | 'wire'
  | 'zengin'
type ExpectedPaymentCreateRequest = {
  amount_lower_bound?: (number | null) | undefined
  amount_reconciled?: (number | null) | undefined
  amount_reconciled_direction?: 'credit' | 'debit' | undefined
  amount_unreconciled?: (number | null) | undefined
  amount_unreconciled_direction?: 'credit' | 'debit' | undefined
  amount_upper_bound?: (number | null) | undefined
  counterparty_id?: (string | null) | undefined
  currency?: {} | undefined
  date_lower_bound?: (string | null) | undefined
  date_upper_bound?: (string | null) | undefined
  description?: (string | null) | undefined
  direction?: 'credit' | 'debit' | undefined
  external_id?: (string | null) | undefined
  internal_account_id?: (string | null) | undefined
  ledger_transaction?: LedgerTransactionCreateRequest | undefined
  ledger_transaction_id?: string | undefined
  line_items?: LineItemRequest[] | undefined
  metadata?: { [x: string]: string } | undefined
  reconciliation_filters?: ({ [x: string]: unknown } | null) | undefined
  reconciliation_groups?: ({ [x: string]: unknown } | null) | undefined
  reconciliation_rule_variables?: ReconciliationRuleVariable[] | undefined
  remittance_information?: (string | null) | undefined
  statement_descriptor?: (string | null) | undefined
  type?: ExpectedPaymentType | undefined
}
type TransactionCreateRequest = {
  amount?: number | undefined
  amount_string?: string | undefined
  as_of_date: string | null
  direction: string
  internal_account_id: string
  metadata?: { [x: string]: string } | undefined
  posted?: boolean | undefined
  type?:
    | 'ach'
    | 'au_becs'
    | 'bacs'
    | 'book'
    | 'card'
    | 'chats'
    | 'check'
    | 'cross_border'
    | 'dk_nets'
    | 'eft'
    | 'gb_fps'
    | 'masav'
    | 'mx_ccen'
    | 'neft'
    | 'nics'
    | 'nz_becs'
    | 'pl_elixir'
    | 'rtp'
    | 'se_bankgirot'
    | 'sepa'
    | 'sg_giro'
    | 'sic'
    | 'stablecoin'
    | 'wire'
    | 'zengin'
    | 'other'
    | undefined
  vendor_code: string | null
  vendor_code_type: string | null
  vendor_customer_id?: (string | null) | undefined
  vendor_description?: (string | null) | undefined
}
type BulkRequestCreateRequest = {
  action_type: 'create' | 'update' | 'delete'
  metadata?: { [x: string]: string } | undefined
  resource_type:
    | 'payment_order'
    | 'ledger_account'
    | 'ledger_transaction'
    | 'expected_payment'
    | 'transaction'
    | 'transaction_line_item'
  resources: (
    | PaymentOrderAsyncCreateRequest
    | ExpectedPaymentCreateRequest
    | LedgerTransactionCreateRequest
    | LedgerAccountCreateRequest
    | TransactionCreateRequest
    | { id?: string | undefined }
    | {
        accounting?: Accounting | undefined
        accounting_category_id?: (string | null) | undefined
        accounting_ledger_class_id?: (string | null) | undefined
        amount?: number | undefined
        charge_bearer?: 'shared' | 'sender' | 'receiver' | undefined
        counterparty_id?: (string | null) | undefined
        currency?: Currency | undefined
        description?: (string | null) | undefined
        direction?: 'credit' | 'debit' | undefined
        effective_date?: string | undefined
        end_to_end_id?: (string | null) | undefined
        expires_at?: (string | null) | undefined
        external_id?: (string | null) | undefined
        fallback_type?: 'ach' | undefined
        foreign_exchange_contract?: (string | null) | undefined
        foreign_exchange_indicator?: 'fixed_to_variable' | 'variable_to_fixed' | undefined
        line_items?: LineItemRequest[] | undefined
        metadata?: { [x: string]: string } | undefined
        nsf_protected?: boolean | undefined
        originating_account_id?: string | undefined
        originating_party_address?:
          | ({
              country?: (string | null) | undefined
              line1?: (string | null) | undefined
              line2?: (string | null) | undefined
              locality?: (string | null) | undefined
              postal_code?: (string | null) | undefined
              region?: (string | null) | undefined
            } | null)
          | undefined
        originating_party_name?: (string | null) | undefined
        originating_secondary_party_name?: (string | null) | undefined
        priority?: 'high' | 'normal' | undefined
        process_after?: (string | null) | undefined
        purpose?: (string | null) | undefined
        receiving_account?:
          | {
              account_details?:
                | {
                    account_number: string
                    account_number_type?:
                      | 'arbitrum_address'
                      | 'au_number'
                      | 'avalanche_address'
                      | 'base_address'
                      | 'card_token'
                      | 'clabe'
                      | 'ethereum_address'
                      | 'hk_number'
                      | 'iban'
                      | 'id_number'
                      | 'nz_number'
                      | 'other'
                      | 'polygon_address'
                      | 'sg_number'
                      | 'solana_address'
                      | undefined
                  }[]
                | undefined
              account_type?: ExternalAccountType | undefined
              contact_details?: ContactDetailCreateRequest[] | undefined
              external_id?: (string | null) | undefined
              ledger_account?: LedgerAccountCreateRequest | undefined
              metadata?: { [x: string]: string } | undefined
              name?: (string | null) | undefined
              party_address?: AddressRequest | undefined
              party_identifier?: string | undefined
              party_name?: string | undefined
              party_type?: 'business' | 'individual' | undefined
              plaid_processor_token?: string | undefined
              routing_details?:
                | {
                    payment_type?:
                      | 'ach'
                      | 'au_becs'
                      | 'bacs'
                      | 'book'
                      | 'card'
                      | 'chats'
                      | 'check'
                      | 'cross_border'
                      | 'dk_nets'
                      | 'eft'
                      | 'gb_fps'
                      | 'masav'
                      | 'mx_ccen'
                      | 'neft'
                      | 'nics'
                      | 'nz_becs'
                      | 'pl_elixir'
                      | 'rtp'
                      | 'se_bankgirot'
                      | 'sepa'
                      | 'sg_giro'
                      | 'sic'
                      | 'stablecoin'
                      | 'wire'
                      | 'zengin'
                      | undefined
                    routing_number: string
                    routing_number_type:
                      | 'aba'
                      | 'au_bsb'
                      | 'br_codigo'
                      | 'ca_cpa'
                      | 'chips'
                      | 'cnaps'
                      | 'dk_interbank_clearing_code'
                      | 'gb_sort_code'
                      | 'hk_interbank_clearing_code'
                      | 'il_bank_code'
                      | 'in_ifsc'
                      | 'jp_zengin_code'
                      | 'my_branch_code'
                      | 'mx_bank_identifier'
                      | 'nz_national_clearing_code'
                      | 'pl_national_clearing_code'
                      | 'se_bankgiro_clearing_code'
                      | 'sg_interbank_clearing_code'
                      | 'swift'
                      | 'vasp'
                      | 'za_national_clearing_code'
                  }[]
                | undefined
            }
          | undefined
        receiving_account_id?: string | undefined
        reconciliation_status?: 'unreconciled' | 'tentatively_reconciled' | 'reconciled' | undefined
        remittance_information?: (string | null) | undefined
        send_remittance_advice?: (boolean | null) | undefined
        statement_descriptor?: (string | null) | undefined
        status?:
          | 'approved'
          | 'cancelled'
          | 'completed'
          | 'denied'
          | 'failed'
          | 'held'
          | 'needs_approval'
          | 'pending'
          | 'processing'
          | 'returned'
          | 'reversed'
          | 'sent'
          | 'stopped'
          | undefined
        subtype?: PaymentOrderSubtype | undefined
        type?: PaymentOrderType | undefined
        ultimate_originating_party_identifier?: (string | null) | undefined
        ultimate_originating_party_name?: (string | null) | undefined
        ultimate_receiving_party_identifier?: (string | null) | undefined
        ultimate_receiving_party_name?: (string | null) | undefined
        id?: string | undefined
      }
    | {
        amount_lower_bound?: (number | null) | undefined
        amount_reconciled?: (number | null) | undefined
        amount_reconciled_direction?: 'credit' | 'debit' | undefined
        amount_unreconciled?: (number | null) | undefined
        amount_unreconciled_direction?: 'credit' | 'debit' | undefined
        amount_upper_bound?: (number | null) | undefined
        counterparty_id?: (string | null) | undefined
        currency?: {} | undefined
        date_lower_bound?: (string | null) | undefined
        date_upper_bound?: (string | null) | undefined
        description?: (string | null) | undefined
        direction?: 'credit' | 'debit' | undefined
        external_id?: (string | null) | undefined
        internal_account_id?: (string | null) | undefined
        metadata?: { [x: string]: string } | undefined
        reconciliation_filters?: ({ [x: string]: unknown } | null) | undefined
        reconciliation_groups?: ({ [x: string]: unknown } | null) | undefined
        reconciliation_rule_variables?: ReconciliationRuleVariable[] | undefined
        remittance_information?: (string | null) | undefined
        statement_descriptor?: (string | null) | undefined
        status?: 'reconciled' | undefined
        type?: ExpectedPaymentType | undefined
        id?: string | undefined
      }
    | { metadata?: { [x: string]: string } | undefined; id?: string | undefined }
    | {
        description?: (string | null) | undefined
        effective_at?: string | undefined
        external_id?: (string | null) | undefined
        ledger_entries?: LedgerEntryCreateRequest[] | undefined
        ledgerable_id?: string | undefined
        ledgerable_type?:
          | 'expected_payment'
          | 'incoming_payment_detail'
          | 'payment_order'
          | 'return'
          | 'reversal'
          | undefined
        metadata?: { [x: string]: string } | undefined
        status?: 'archived' | 'pending' | 'posted' | undefined
        id?: string | undefined
      }
    | {
        description?: (string | null) | undefined
        external_id?: (string | null) | undefined
        metadata?: { [x: string]: string } | undefined
        name?: string | undefined
        id?: string | undefined
      }
  )[]
}
type PaymentReference = {
  created_at: string
  id: string
  live_mode: boolean
  object: string
  reference_number: string
  reference_number_type:
    | 'ach_original_trace_number'
    | 'ach_trace_number'
    | 'bankprov_payment_activity_date'
    | 'bankprov_payment_id'
    | 'blockchain_transaction_hash'
    | 'blockchain_transaction_index'
    | 'bnk_dev_prenotification_id'
    | 'bnk_dev_transfer_id'
    | 'bny_mellon_transaction_reference_number'
    | 'bofa_end_to_end_id'
    | 'bofa_neft_clearing_reference_number'
    | 'bofa_transaction_id'
    | 'check_number'
    | 'chips_uid'
    | 'citibank_reference_number'
    | 'citibank_worldlink_clearing_system_reference_number'
    | 'column_fx_quote_id'
    | 'column_reversal_pair_transfer_id'
    | 'column_transfer_id'
    | 'cross_river_card_network'
    | 'cross_river_card_trace_number'
    | 'cross_river_core_transaction_id'
    | 'cross_river_fed_batch_id'
    | 'cross_river_payment_id'
    | 'cross_river_retrieval_reference_id'
    | 'cross_river_service_message'
    | 'cross_river_transaction_id'
    | 'currencycloud_conversion_id'
    | 'currencycloud_payment_id'
    | 'eft_trace_number'
    | 'end_to_end_identification'
    | 'evolve_core_batch'
    | 'evolve_core_file_key'
    | 'evolve_core_seq'
    | 'evolve_transaction_id'
    | 'fake_vendor_payment_id'
    | 'fedwire_imad'
    | 'fedwire_omad'
    | 'first_republic_internal_id'
    | 'goldman_sachs_collection_request_id'
    | 'goldman_sachs_end_to_end_id'
    | 'goldman_sachs_payment_request_id'
    | 'goldman_sachs_request_id'
    | 'goldman_sachs_unique_payment_id'
    | 'instruction_identification'
    | 'jpmc_ccn'
    | 'jpmc_clearing_system_reference'
    | 'jpmc_customer_reference_id'
    | 'jpmc_end_to_end_id'
    | 'jpmc_firm_root_id'
    | 'jpmc_fx_trn_id'
    | 'jpmc_p3_id'
    | 'jpmc_payment_batch_id'
    | 'jpmc_payment_information_id'
    | 'jpmc_payment_returned_datetime'
    | 'jpmc_transaction_reference_number'
    | 'lob_check_id'
    | 'other'
    | 'partial_swift_mir'
    | 'paxos_crypto_withdrawal_id'
    | 'paxos_fiat_withdrawal_id'
    | 'paxos_group_id'
    | 'paxos_orchestration_id'
    | 'paxos_transfer_id'
    | 'pnc_clearing_reference'
    | 'pnc_instruction_id'
    | 'pnc_multipayment_id'
    | 'pnc_payment_trace_id'
    | 'pnc_request_for_payment_id'
    | 'pnc_transaction_reference_number'
    | 'rbc_wire_reference_id'
    | 'return_identification'
    | 'rtp_instruction_id'
    | 'silvergate_payment_id'
    | 'svb_end_to_end_id'
    | 'svb_payment_id'
    | 'swift_mir'
    | 'swift_uetr'
    | 'transaction_identification'
    | 'turnkey_activity_id'
    | 'turnkey_send_transaction_status_id'
    | 'uetr'
    | 'umb_product_partner_account_number'
    | 'usbank_payment_application_reference_id'
    | 'usbank_payment_id'
    | 'usbank_pending_rtp_payment_id'
    | 'usbank_posted_rtp_payment_id'
    | 'wells_fargo_end_to_end_id'
    | 'wells_fargo_payment_id'
    | 'wells_fargo_trace_number'
    | 'wells_fargo_uetr'
    | 'western_alliance_payment_id'
    | 'western_alliance_transaction_id'
    | 'western_alliance_wire_confirmation_number'
  updated_at: string
}
type AccountDetail = {
  account_number?: string | undefined
  account_number_safe: string
  account_number_type:
    | 'arbitrum_address'
    | 'au_number'
    | 'avalanche_address'
    | 'base_address'
    | 'card_token'
    | 'clabe'
    | 'ethereum_address'
    | 'hk_number'
    | 'iban'
    | 'id_number'
    | 'nz_number'
    | 'other'
    | 'polygon_address'
    | 'sg_number'
    | 'solana_address'
  created_at: string
  discarded_at: string | null
  id: string
  live_mode: boolean
  object: string
  updated_at: string
}
type ContactDetail = {
  contact_identifier: string
  contact_identifier_type: 'email' | 'phone_number' | 'website'
  created_at: string
  discarded_at: string | null
  id: string
  live_mode: boolean
  object: string
  updated_at: string
}
type Address = {
  country: string | null
  created_at: string
  id: string
  line1: string | null
  line2: string | null
  live_mode: boolean
  locality: string | null
  object: string
  postal_code: string | null
  region: string | null
  updated_at: string
} | null
type RoutingDetail = {
  bank_address: Address
  bank_name: string
  created_at: string
  discarded_at: string | null
  id: string
  live_mode: boolean
  object: string
  payment_type:
    | 'ach'
    | 'au_becs'
    | 'bacs'
    | 'book'
    | 'card'
    | 'chats'
    | 'check'
    | 'cross_border'
    | 'dk_nets'
    | 'eft'
    | 'gb_fps'
    | 'masav'
    | 'mx_ccen'
    | 'neft'
    | 'nics'
    | 'nz_becs'
    | 'pl_elixir'
    | 'rtp'
    | 'se_bankgirot'
    | 'sepa'
    | 'sg_giro'
    | 'sic'
    | 'stablecoin'
    | 'wire'
    | 'zengin'
  routing_number: string
  routing_number_type:
    | 'aba'
    | 'au_bsb'
    | 'br_codigo'
    | 'ca_cpa'
    | 'chips'
    | 'cnaps'
    | 'dk_interbank_clearing_code'
    | 'gb_sort_code'
    | 'hk_interbank_clearing_code'
    | 'il_bank_code'
    | 'in_ifsc'
    | 'jp_zengin_code'
    | 'mx_bank_identifier'
    | 'my_branch_code'
    | 'nz_national_clearing_code'
    | 'pl_national_clearing_code'
    | 'se_bankgiro_clearing_code'
    | 'sg_interbank_clearing_code'
    | 'swift'
    | 'vasp'
    | 'za_national_clearing_code'
  updated_at: string
}
type AccountCapability = {
  created_at: string
  direction: 'credit' | 'debit'
  discarded_at: string | null
  id: string
  identifier: string | null
  live_mode: boolean
  object: string
  payment_type:
    | 'ach'
    | 'au_becs'
    | 'bacs'
    | 'book'
    | 'card'
    | 'chats'
    | 'check'
    | 'cross_border'
    | 'dk_nets'
    | 'eft'
    | 'gb_fps'
    | 'masav'
    | 'mx_ccen'
    | 'neft'
    | 'nics'
    | 'nz_becs'
    | 'pl_elixir'
    | 'rtp'
    | 'se_bankgirot'
    | 'sepa'
    | 'sg_giro'
    | 'sic'
    | 'stablecoin'
    | 'wire'
    | 'zengin'
  updated_at: string
}
type Connection = {
  created_at: string
  discarded_at: string | null
  id: string
  live_mode: boolean
  object: string
  updated_at: string
  vendor_customer_id: string | null
  vendor_id: string
  vendor_name: string
}
type InternalAccount = {
  account_capabilities: AccountCapability[]
  account_details: AccountDetail[]
  account_type:
    | 'cash'
    | 'checking'
    | 'general_ledger'
    | 'hosted_wallet'
    | 'loan'
    | 'non_resident'
    | 'other'
    | 'overdraft'
    | 'savings'
    | 'self_hosted_wallet'
  allowed_ach_debit_company_ids: string[] | null
  connection: Connection
  contra_ledger_account_id: string | null
  counterparty_id: string | null
  created_at: string
  currency: Currency
  debitable: boolean | null
  external_id: string | null
  id: string
  ledger_account_id: string | null
  legal_entity_id: string | null
  live_mode: boolean
  metadata: { [x: string]: string }
  name: string | null
  object: string
  parent_account_id: string | null
  party_address: Address
  party_name: string
  party_type: 'business' | 'individual'
  routing_details: RoutingDetail[]
  status: 'active' | 'closed' | 'pending_activation' | 'pending_closure' | 'suspended'
  title: string
  updated_at: string
  vendor_id: string | null
}
type VirtualAccount = {
  account_details: AccountDetail[]
  counterparty_id: string | null
  created_at: string
  credit_ledger_account_id: string | null
  debit_ledger_account_id: string | null
  description: string | null
  discarded_at: string | null
  external_id: string | null
  id: string
  internal_account_id: string
  ledger_account_id: string | null
  live_mode: boolean
  metadata: { [x: string]: string }
  name: string
  object: string
  party_address: {
    country: string | null
    created_at: string
    id: string
    line1: string | null
    line2: string | null
    live_mode: boolean
    locality: string | null
    object: string
    postal_code: string | null
    region: string | null
    updated_at: string
  }
  routing_details: RoutingDetail[]
  updated_at: string
}
type PaymentOrder = {
  accounting: Accounting
  accounting_category_id: string | null
  accounting_ledger_class_id: string | null
  amount: number
  batch_id: string | null
  charge_bearer: 'shared' | 'sender' | 'receiver'
  counterparty_id: string | null
  created_at: string
  currency: Currency
  current_hold: {
    created_at: string
    id: string
    live_mode?: boolean | undefined
    metadata?: ({ [x: string]: string } | null) | undefined
    object: 'hold'
    reason?: (string | null) | undefined
    resolution?: (string | null) | undefined
    resolved_at?: (string | null) | undefined
    status: 'active' | 'resolved'
    target_id: string
    target_type: 'payment_order'
    updated_at: string
  }
  current_return: {
    additional_information?: (string | null) | undefined
    amount: number
    code:
      | '901'
      | '902'
      | '903'
      | '904'
      | '905'
      | '907'
      | '908'
      | '909'
      | '910'
      | '911'
      | '912'
      | '914'
      | 'C01'
      | 'C02'
      | 'C03'
      | 'C05'
      | 'C06'
      | 'C07'
      | 'C08'
      | 'C09'
      | 'C13'
      | 'C14'
      | 'R01'
      | 'R02'
      | 'R03'
      | 'R04'
      | 'R05'
      | 'R06'
      | 'R07'
      | 'R08'
      | 'R09'
      | 'R10'
      | 'R11'
      | 'R12'
      | 'R13'
      | 'R14'
      | 'R15'
      | 'R16'
      | 'R17'
      | 'R18'
      | 'R19'
      | 'R20'
      | 'R21'
      | 'R22'
      | 'R23'
      | 'R24'
      | 'R25'
      | 'R26'
      | 'R27'
      | 'R28'
      | 'R29'
      | 'R30'
      | 'R31'
      | 'R32'
      | 'R33'
      | 'R34'
      | 'R35'
      | 'R36'
      | 'R37'
      | 'R38'
      | 'R39'
      | 'R40'
      | 'R41'
      | 'R42'
      | 'R43'
      | 'R44'
      | 'R45'
      | 'R46'
      | 'R47'
      | 'R50'
      | 'R51'
      | 'R52'
      | 'R53'
      | 'R61'
      | 'R62'
      | 'R67'
      | 'R68'
      | 'R69'
      | 'R70'
      | 'R71'
      | 'R72'
      | 'R73'
      | 'R74'
      | 'R75'
      | 'R76'
      | 'R77'
      | 'R80'
      | 'R81'
      | 'R82'
      | 'R83'
      | 'R84'
      | 'R85'
      | 'currencycloud'
    corrections: {
      account_number?: (string | null) | undefined
      company_id?: (string | null) | undefined
      company_name?: (string | null) | undefined
      individual_identification_number?: (string | null) | undefined
      routing_number?: (string | null) | undefined
      transaction_code?: (string | null) | undefined
    } | null
    created_at: string
    currency: Currency
    current_return: {}
    data?: ({ [x: string]: unknown } | null) | undefined
    date_of_death: string | null
    discarded_at: string | null
    failure_reason: string | null
    id: string
    internal_account_id: string | null
    ledger_transaction_id: string | null
    live_mode: boolean
    object: string
    reason: string | null
    reconciliation_status: 'unreconciled' | 'tentatively_reconciled' | 'reconciled'
    reference_numbers: PaymentReference[]
    returnable_id: string | null
    returnable_type: 'incoming_payment_detail' | 'payment_order' | 'return' | 'reversal'
    role: 'originating' | 'receiving'
    status: 'cancelled' | 'completed' | 'failed' | 'pending' | 'processing' | 'returned' | 'sent'
    transaction_id: string | null
    transaction_line_item_id: string | null
    type:
      | 'ach'
      | 'ach_noc'
      | 'au_becs'
      | 'bacs'
      | 'book'
      | 'check'
      | 'cross_border'
      | 'eft'
      | 'gb_fps'
      | 'manual'
      | 'neft'
      | 'nz_becs'
      | 'rtp'
      | 'sepa'
      | 'stablecoin'
      | 'wire'
      | 'zengin'
    updated_at: string
  }
  description: string | null
  direction: 'credit' | 'debit'
  effective_date: string
  expires_at: string | null
  external_id: string | null
  foreign_exchange_contract: string | null
  foreign_exchange_indicator: 'fixed_to_variable' | 'variable_to_fixed'
  foreign_exchange_rate: {
    base_amount: number
    base_currency: Currency
    exponent: number
    rate_string: string
    target_amount: number
    target_currency: Currency
    value: number
  }
  id: string
  ledger_transaction_id: string | null
  live_mode: boolean
  metadata: { [x: string]: string }
  nsf_protected: boolean
  object: string
  originating_account_id: string
  originating_account_type: 'internal_account' | 'virtual_account'
  originating_party_address: {
    country?: (string | null) | undefined
    line1?: (string | null) | undefined
    line2?: (string | null) | undefined
    locality?: (string | null) | undefined
    postal_code?: (string | null) | undefined
    region?: (string | null) | undefined
  } | null
  originating_party_name: string | null
  originating_secondary_party_name: string | null
  priority: 'high' | 'normal'
  process_after: string | null
  purpose: string | null
  receiving_account:
    | {
        account_details?: AccountDetail[] | undefined
        account_type?: ExternalAccountType | undefined
        card_id?: (string | null) | undefined
        contact_details?: ContactDetail[] | undefined
        created_at?: string | undefined
        discarded_at?: (string | null) | undefined
        external_id?: (string | null) | undefined
        id?: string | undefined
        ledger_account_id?: (string | null) | undefined
        live_mode?: boolean | undefined
        metadata?: { [x: string]: string } | undefined
        name?: (string | null) | undefined
        object?: string | undefined
        party_address?: Address | undefined
        party_name?: string | undefined
        party_type?: 'business' | 'individual' | undefined
        routing_details?: RoutingDetail[] | undefined
        updated_at?: string | undefined
        verification_source?: 'ach_prenote' | 'microdeposits' | 'plaid' | undefined
        verification_status?: 'pending_verification' | 'unverified' | 'verified' | undefined
      }
    | InternalAccount
  receiving_account_id: string
  receiving_account_type: 'internal_account' | 'external_account'
  reconciliation_status: 'unreconciled' | 'tentatively_reconciled' | 'reconciled'
  reference_numbers: PaymentReference[]
  remittance_information: string | null
  send_remittance_advice: boolean | null
  statement_descriptor: string | null
  status:
    | 'approved'
    | 'cancelled'
    | 'completed'
    | 'denied'
    | 'failed'
    | 'held'
    | 'needs_approval'
    | 'pending'
    | 'processing'
    | 'returned'
    | 'reversed'
    | 'sent'
    | 'stopped'
  subtype: PaymentOrderSubtype
  transaction_ids: string[]
  type: PaymentOrderType
  ultimate_originating_account: VirtualAccount | InternalAccount
  ultimate_originating_account_id: string | null
  ultimate_originating_account_type: 'internal_account' | 'virtual_account'
  ultimate_originating_party_identifier: string | null
  ultimate_originating_party_name: string | null
  ultimate_receiving_party_identifier: string | null
  ultimate_receiving_party_name: string | null
  updated_at: string
  vendor_attributes: { [x: string]: unknown } | null
  vendor_failure_reason: string | null
}
type ExpectedPayment = {
  amount_lower_bound: number | null
  amount_reconciled: number | null
  amount_reconciled_direction: 'credit' | 'debit'
  amount_unreconciled: number | null
  amount_unreconciled_direction: 'credit' | 'debit'
  amount_upper_bound: number | null
  counterparty_id: string | null
  created_at: string
  currency: {}
  date_lower_bound: string | null
  date_upper_bound: string | null
  description: string | null
  direction: 'credit' | 'debit'
  external_id: string | null
  id: string
  internal_account_id: string | null
  ledger_transaction_id: string | null
  live_mode: boolean
  metadata: { [x: string]: string }
  object: string
  reconciliation_filters: { [x: string]: unknown } | null
  reconciliation_groups: { [x: string]: unknown } | null
  reconciliation_method: 'automatic' | 'manual'
  reconciliation_rule_variables: ReconciliationRuleVariable[]
  remittance_information: string | null
  statement_descriptor: string | null
  status: 'archived' | 'partially_reconciled' | 'reconciled' | 'unreconciled'
  transaction_id: string | null
  transaction_line_item_id: string | null
  type: ExpectedPaymentType
  updated_at: string
}
type LedgerBalance = {
  amount: number
  amount_string: string
  credits: number
  credits_string: string
  currency: string
  currency_exponent: number
  debits: number
  debits_string: string
}
type LedgerEntry = {
  amount: number
  amount_string: string
  created_at: string
  direction: 'credit' | 'debit'
  discarded_at: string | null
  effective_at: string
  id: string
  ledger_account_currency: string
  ledger_account_currency_exponent: number
  ledger_account_id: string
  ledger_account_lock_version: number | null
  ledger_transaction_id: string
  live_mode: boolean
  metadata: { [x: string]: string }
  object: string
  resulting_ledger_account_balances: {
    available_balance: LedgerBalance
    pending_balance: LedgerBalance
    posted_balance: LedgerBalance
  }
  status: 'archived' | 'pending' | 'posted'
  updated_at: string
}
type LedgerTransaction = {
  archived_reason: string | null
  created_at: string
  description: string | null
  effective_at: string
  effective_date: string
  external_id: string | null
  id: string
  ledger_entries: LedgerEntry[]
  ledger_id: string
  ledgerable_id: string | null
  ledgerable_type:
    | 'expected_payment'
    | 'incoming_payment_detail'
    | 'payment_order'
    | 'return'
    | 'reversal'
  live_mode: boolean
  metadata: { [x: string]: string }
  object: string
  partially_posts_ledger_transaction_id: string | null
  posted_at: string | null
  reversed_by_ledger_transaction_id: string | null
  reverses_ledger_transaction_id: string | null
  status: 'archived' | 'pending' | 'posted'
  updated_at: string
}
type LedgerBalancesWithEffectiveAt = {
  available_balance: LedgerBalance
  effective_at_lower_bound: string | null
  effective_at_upper_bound: string | null
  pending_balance: LedgerBalance
  posted_balance: LedgerBalance
}
type LedgerAccount = {
  balances: LedgerBalancesWithEffectiveAt
  created_at: string
  description: string | null
  discarded_at: string | null
  external_id: string | null
  id: string
  ledger_id: string
  ledgerable_id: string | null
  ledgerable_type: 'external_account' | 'internal_account' | 'virtual_account'
  live_mode: boolean
  lock_version: number
  metadata: { [x: string]: string }
  name: string
  normal_balance: 'credit' | 'debit'
  object: string
  updated_at: string
}
type Transaction = {
  amount: number
  amount_string: string
  as_of_date: string | null
  as_of_time: string | null
  as_of_timezone: string | null
  created_at: string
  currency: Currency
  custom_identifiers: { [x: string]: string }
  details?: { [x: string]: string } | undefined
  direction: string
  discarded_at: string | null
  foreign_exchange_rate: {
    base_amount: number
    base_currency: Currency
    exponent: number
    rate_string: string
    target_amount: number
    target_currency: Currency
    value: number
  }
  id: string
  internal_account_id: string
  live_mode: boolean
  metadata: { [x: string]: string }
  object: string
  posted: boolean
  reconciled: boolean
  type:
    | 'ach'
    | 'au_becs'
    | 'bacs'
    | 'book'
    | 'card'
    | 'chats'
    | 'check'
    | 'cross_border'
    | 'dk_nets'
    | 'eft'
    | 'gb_fps'
    | 'masav'
    | 'mx_ccen'
    | 'neft'
    | 'nics'
    | 'nz_becs'
    | 'pl_elixir'
    | 'rtp'
    | 'se_bankgirot'
    | 'sepa'
    | 'sg_giro'
    | 'sic'
    | 'stablecoin'
    | 'wire'
    | 'zengin'
    | 'other'
  updated_at: string
  vendor_code: string | null
  vendor_code_type:
    | 'bai2'
    | 'banking_circle'
    | 'bankprov'
    | 'bnk_dev'
    | 'cleartouch'
    | 'coinbase_prime'
    | 'column'
    | 'cross_river'
    | 'currencycloud'
    | 'dwolla'
    | 'evolve'
    | 'fake_vendor'
    | 'goldman_sachs'
    | 'iso20022'
    | 'jpmc'
    | 'modern_treasury'
    | 'mx'
    | 'one_money'
    | 'paxos'
    | 'paypal'
    | 'pnc'
    | 'silvergate'
    | 'swift'
    | 'turnkey'
    | 'us_bank'
    | 'user'
    | 'western_alliance'
  vendor_customer_id: string | null
  vendor_description?: (string | null) | undefined
  vendor_id: string | null
}
type BulkError = {
  created_at: string
  id: string
  live_mode: boolean
  object: string
  request_errors: {
    code?: string | undefined
    message?: string | undefined
    parameter?: string | undefined
  }[]
  updated_at: string
}
type BulkResult = {
  created_at: string
  entity:
    | PaymentOrder
    | ExpectedPayment
    | LedgerTransaction
    | LedgerAccount
    | Transaction
    | BulkError
  entity_id: string
  entity_type:
    | 'payment_order'
    | 'ledger_account'
    | 'ledger_transaction'
    | 'expected_payment'
    | 'transaction'
    | 'transaction_line_item'
    | 'bulk_error'
  id: string
  live_mode: boolean
  object: string
  request_id: string
  request_params: { [x: string]: string } | null
  request_type: 'bulk_request'
  status: 'pending' | 'successful' | 'failed'
  updated_at: string
}
type RequestedAction = {
  category:
    | 'onboarding_articles_of_incorporation_failure'
    | 'onboarding_business_registry_verification_failure'
    | 'onboarding_database_failure'
    | 'onboarding_proof_of_address_failure'
    | 'onboarding_ssn_check_failure'
    | 'onboarding_tin_check_failure'
  created_at: string
  field: 'articles_of_incorporation' | 'ein_letter' | 'legal_entity_details' | 'proof_of_address'
  id: string
  instructions: string | null
  live_mode: boolean
  object: string
  reasons: string[]
  updated_at: string
}
type Case = {
  created_at: string
  id: string
  live_mode: boolean
  object: string
  requested_actions: RequestedAction[]
  resolved_actions: RequestedAction[]
  status: 'open' | 'resolved'
  subject_id: string
  subject_type: string
  updated_at: string
}
type ConnectionLegalEntity = {
  connection_id: string
  created_at: string
  discarded_at: string | null
  id: string
  legal_entity_id: string
  live_mode: boolean
  object: string
  status: 'completed' | 'denied' | 'failed' | 'processing' | 'suspended'
  updated_at: string
  vendor_id: string
}
type LegalEntityAddressCreateRequest = {
  address_types?:
    | (
        | 'business'
        | 'business_physical'
        | 'business_registered'
        | 'mailing'
        | 'other'
        | 'po_box'
        | 'residential'
      )[]
    | undefined
  country: string | null
  line1: string | null
  line2?: (string | null) | undefined
  locality: string | null
  postal_code?: (string | null) | undefined
  primary?: (boolean | null) | undefined
  region?: (string | null) | undefined
}
type IdentificationCreateRequest = {
  documents?:
    | {
        document_type:
          | 'articles_of_incorporation'
          | 'certificate_of_good_standing'
          | 'ein_letter'
          | 'generic'
          | 'identification_back'
          | 'identification_front'
          | 'proof_of_address'
        file_data: string
        filename?: string | undefined
      }[]
    | undefined
  expiration_date?: (string | null) | undefined
  id_number: string
  id_type:
    | 'ad_nrt'
    | 'ae_eid'
    | 'ae_trn'
    | 'ag_tin'
    | 'ai_tin'
    | 'al_nid'
    | 'al_nipt'
    | 'am_tin'
    | 'ao_nif'
    | 'ar_cuil'
    | 'ar_cuit'
    | 'at_atin'
    | 'at_vat'
    | 'au_abn'
    | 'au_tfn'
    | 'aw_tin'
    | 'az_pin'
    | 'bb_tin'
    | 'bd_tin'
    | 'be_ent'
    | 'be_nrn'
    | 'bf_ifu'
    | 'bg_egn'
    | 'bh_cpr'
    | 'bh_vat'
    | 'bj_ifu'
    | 'bo_nit'
    | 'br_cnpj'
    | 'br_cpf'
    | 'bs_tin'
    | 'bt_bin'
    | 'bw_tin'
    | 'bz_tin'
    | 'ca_bn'
    | 'ca_sin'
    | 'ch_ahv'
    | 'ch_uid'
    | 'ci_ncc'
    | 'cl_run'
    | 'cl_rut'
    | 'cm_niu'
    | 'co_cedulas'
    | 'co_nit'
    | 'cr_cpf'
    | 'cw_crib'
    | 'cy_tin'
    | 'cz_ico'
    | 'cz_rc'
    | 'de_stid'
    | 'de_stnr'
    | 'de_vat'
    | 'dk_cpr'
    | 'dk_cvr'
    | 'dm_tin'
    | 'do_cedula'
    | 'do_rnc'
    | 'drivers_license'
    | 'ec_ruc'
    | 'ee_ik'
    | 'ee_rk'
    | 'es_nie'
    | 'es_nif'
    | 'fi_hetu'
    | 'fi_ytj'
    | 'fj_tin'
    | 'fo_ptal'
    | 'fr_nif'
    | 'fr_siren'
    | 'fr_vat'
    | 'gb_nino'
    | 'gb_utr'
    | 'gb_vat'
    | 'gd_tin'
    | 'ge_ic'
    | 'ge_pn'
    | 'ge_tin'
    | 'generic_international'
    | 'gg_sin'
    | 'gh_pin'
    | 'gh_tin'
    | 'gi_trn'
    | 'gl_cpr'
    | 'gl_ger'
    | 'gm_tin'
    | 'gr_vat'
    | 'gt_nit'
    | 'hk_brn'
    | 'hk_hkid'
    | 'hn_id'
    | 'hn_rtn'
    | 'hr_oib'
    | 'hu_adj'
    | 'hu_anum'
    | 'id_nik'
    | 'id_npwp'
    | 'ie_pps'
    | 'ie_trn'
    | 'il_cn'
    | 'il_pin'
    | 'im_trn'
    | 'in_lei'
    | 'is_knt'
    | 'it_cf'
    | 'it_piva'
    | 'je_ssn'
    | 'je_tin'
    | 'jm_trn'
    | 'jo_tin'
    | 'jp_hb'
    | 'jp_mn'
    | 'ke_pin'
    | 'kg_pin'
    | 'kn_tin'
    | 'kr_brn'
    | 'kr_crn'
    | 'kr_rrn'
    | 'kw_cid'
    | 'kz_bin'
    | 'kz_iin'
    | 'la_tin'
    | 'lc_tin'
    | 'li_peid'
    | 'lk_tin'
    | 'ls_tin'
    | 'lt_ak'
    | 'lt_jak'
    | 'lu_mtc'
    | 'lu_vat'
    | 'lv_pk'
    | 'lv_rn'
    | 'md_idnp'
    | 'me_jmbg'
    | 'me_pib'
    | 'mg_nif'
    | 'mh_ssn'
    | 'mo_bir'
    | 'mo_tin_b'
    | 'mo_tin_i'
    | 'mr_nif'
    | 'mt_tin'
    | 'mt_vat'
    | 'mu_tan'
    | 'mw_tpin'
    | 'mx_curp'
    | 'mx_ine'
    | 'mx_rfc'
    | 'my_npc'
    | 'my_nric'
    | 'my_tin_b'
    | 'mz_nuit'
    | 'na_tin'
    | 'national_id'
    | 'nl_bsn'
    | 'nl_btw'
    | 'nl_rsin'
    | 'no_fdn'
    | 'no_mva'
    | 'no_orgnr'
    | 'nr_tin'
    | 'nz_ird'
    | 'om_cid'
    | 'pa_cedula'
    | 'pa_ruc'
    | 'passport'
    | 'pe_ruc'
    | 'pg_tin'
    | 'ph_tin'
    | 'pl_nip'
    | 'pl_pesel'
    | 'pt_nif'
    | 'py_ruc'
    | 'qa_qid'
    | 'qa_tin'
    | 'ro_cnp'
    | 'ro_cui'
    | 'rw_tin'
    | 'sa_tin'
    | 'sa_vat'
    | 'se_orgnr'
    | 'se_pnmr'
    | 'sg_fin'
    | 'sg_nric'
    | 'sg_uen'
    | 'si_dav'
    | 'si_tin'
    | 'sk_ico'
    | 'sk_rc'
    | 'sl_tin'
    | 'sm_ssi'
    | 'sz_tin'
    | 'tg_nif'
    | 'th_jid'
    | 'th_pin'
    | 'tj_inn'
    | 'to_tin'
    | 'tr_tckn'
    | 'tt_bir'
    | 'tw_nric'
    | 'tw_ubn'
    | 'ug_tin'
    | 'us_ein'
    | 'us_itin'
    | 'us_ssn'
    | 'uy_rut'
    | 'uz_inn'
    | 'uz_pin'
    | 'vn_tin'
    | 'za_trn'
    | 'za_vat'
    | 'zm_tpin'
  issuing_country?: (string | null) | undefined
  issuing_region?: (string | null) | undefined
}
type LegalEntityIndustryClassification = {
  classification_codes: string[]
  classification_type:
    | 'anzsic'
    | 'bics'
    | 'gics'
    | 'hsics'
    | 'icb'
    | 'isic'
    | 'mgecs'
    | 'nace'
    | 'naics'
    | 'rbics'
    | 'sic'
    | 'sni'
    | 'trbc'
    | 'uksic'
    | 'unspsc'
  created_at: string
  discarded_at: string | null
  id: string
  live_mode: boolean
  object: string
  updated_at: string
}
type LegalEntityRegulator = { jurisdiction: string; name: string; registration_number: string }
type ThirdPartyVerification = {
  comment?: (string | null) | undefined
  outcome: 'passed' | 'failed'
  vendor: 'persona' | 'middesk' | 'alloy' | 'idology' | 'socure' | 'sumsub' | 'veriff' | 'smarty'
  vendor_verification_id: string
  verification_category:
    | 'legal_name'
    | 'date_of_birth'
    | 'address'
    | 'government_id_number'
    | 'tax_id'
    | 'adverse_media'
  verification_method: string
  verification_time: string
}
type ChildLegalEntityCreate = {
  addresses?: LegalEntityAddressCreateRequest[] | undefined
  bank_settings?:
    | {
        backup_withholding_percentage: number | null
        created_at: string
        discarded_at: string | null
        enable_backup_withholding: boolean | null
        id: string
        live_mode: boolean
        object: string
        privacy_opt_out: boolean | null
        regulation_o: boolean | null
        updated_at: string
      }
    | undefined
  business_description?: (string | null) | undefined
  business_designation?: 'exempt_financial_institution' | 'non_operating_business' | undefined
  business_name?: (string | null) | undefined
  citizenship_country?: (string | null) | undefined
  compliance_details?: ({ [x: string]: unknown } | null) | undefined
  connection_id?: (string | null) | undefined
  country_of_incorporation?: (string | null) | undefined
  date_formed?: (string | null) | undefined
  date_of_birth?: (string | null) | undefined
  documents?:
    | {
        document_type:
          | 'articles_of_incorporation'
          | 'certificate_of_good_standing'
          | 'ein_letter'
          | 'generic'
          | 'identification_back'
          | 'identification_front'
          | 'proof_of_address'
        file_data: string
        filename?: string | undefined
      }[]
    | undefined
  doing_business_as_names?: string[] | undefined
  email?: (string | null) | undefined
  expected_activity_volume?: (number | null) | undefined
  external_id?: (string | null) | undefined
  first_name?: (string | null) | undefined
  identifications?: IdentificationCreateRequest[] | undefined
  industry_classifications?: LegalEntityIndustryClassification[] | undefined
  intended_use?: (string | null) | undefined
  last_name?: (string | null) | undefined
  legal_entity_associations?: (LegalEntityAssociationInlineCreateRequest[] | null) | undefined
  legal_entity_type?: 'business' | 'individual' | undefined
  legal_structure?:
    | 'corporation'
    | 'llc'
    | 'non_profit'
    | 'partnership'
    | 'sole_proprietorship'
    | 'trust'
    | undefined
  listed_exchange?: (string | null) | undefined
  metadata?: { [x: string]: string } | undefined
  middle_name?: (string | null) | undefined
  operating_jurisdictions?: string[] | undefined
  phone_numbers?: { phone_number?: string | undefined }[] | undefined
  politically_exposed_person?: (boolean | null) | undefined
  preferred_name?: (string | null) | undefined
  prefix?: (string | null) | undefined
  primary_social_media_sites?: string[] | undefined
  regulators?: (LegalEntityRegulator[] | null) | undefined
  risk_rating?: 'low' | 'medium' | 'high' | undefined
  service_provider_legal_entity_id?: (string | null) | undefined
  suffix?: (string | null) | undefined
  terms_of_use?:
    | ({ accepted_at?: string | undefined; ip_address?: string | undefined } | null)
    | undefined
  third_party_verification?:
    | {
        comment?: (string | null) | undefined
        outcome: 'passed' | 'failed'
        vendor:
          | 'persona'
          | 'middesk'
          | 'alloy'
          | 'idology'
          | 'socure'
          | 'sumsub'
          | 'veriff'
          | 'smarty'
        vendor_verification_id: string
        verification_category:
          | 'legal_name'
          | 'date_of_birth'
          | 'address'
          | 'government_id_number'
          | 'tax_id'
          | 'adverse_media'
        verification_method: string
        verification_time: string
      }
    | undefined
  third_party_verifications?: ThirdPartyVerification[] | undefined
  ticker_symbol?: (string | null) | undefined
  wealth_and_employment_details?:
    | {
        annual_income: number | null
        created_at: string
        discarded_at: string | null
        employer_country: string | null
        employer_name: string | null
        employer_state: string | null
        employment_status: 'employed' | 'retired' | 'self_employed' | 'student' | 'unemployed'
        id: string
        income_country: string | null
        income_source:
          | 'family_support'
          | 'government_benefits'
          | 'inheritance'
          | 'investments'
          | 'rental_income'
          | 'retirement'
          | 'salary'
          | 'self_employed'
        income_state: string | null
        industry:
          | 'accounting'
          | 'agriculture'
          | 'automotive'
          | 'chemical_manufacturing'
          | 'construction'
          | 'educational_medical'
          | 'food_service'
          | 'finance'
          | 'gasoline'
          | 'health_stores'
          | 'laundry'
          | 'maintenance'
          | 'manufacturing'
          | 'merchant_wholesale'
          | 'mining'
          | 'performing_arts'
          | 'professional_non_legal'
          | 'public_administration'
          | 'publishing'
          | 'real_estate'
          | 'recreation_gambling'
          | 'religious_charity'
          | 'rental_services'
          | 'retail_clothing'
          | 'retail_electronics'
          | 'retail_food'
          | 'retail_furnishing'
          | 'retail_home'
          | 'retail_non_store'
          | 'retail_sporting'
          | 'transportation'
          | 'travel'
          | 'utilities'
        live_mode: boolean
        object: string
        occupation:
          | 'consulting'
          | 'executive'
          | 'finance_accounting'
          | 'food_services'
          | 'government'
          | 'healthcare'
          | 'legal_services'
          | 'manufacturing'
          | 'other'
          | 'sales'
          | 'science_engineering'
          | 'technology'
        source_of_funds:
          | 'alimony'
          | 'annuity'
          | 'business_owner'
          | 'business_revenue'
          | 'debt_financing'
          | 'general_employee'
          | 'government_benefits'
          | 'homemaker'
          | 'inheritance_gift'
          | 'intercompany_loan'
          | 'investment'
          | 'investor_funding'
          | 'legal_settlement'
          | 'lottery'
          | 'real_estate'
          | 'retained_earnings_or_savings'
          | 'retired'
          | 'retirement'
          | 'salary'
          | 'sale_of_business_assets'
          | 'sale_of_real_estate'
          | 'self_employed'
          | 'senior_executive'
          | 'trust_income'
        updated_at: string
        wealth_source:
          | 'business_sale'
          | 'family_support'
          | 'government_benefits'
          | 'inheritance'
          | 'investments'
          | 'other'
          | 'rental_income'
          | 'retirement'
          | 'salary'
          | 'self_employed'
      }
    | undefined
  website?: (string | null) | undefined
}
type LegalEntityAssociationInlineCreateRequest = {
  child_legal_entity?: ChildLegalEntityCreate | undefined
  child_legal_entity_id?: string | undefined
  ownership_percentage?: (number | null) | undefined
  relationship_types: ('authorized_signer' | 'beneficial_owner' | 'control_person')[]
  title?: (string | null) | undefined
}
type ConnectionLegalEntityCreateRequest = {
  connection_id: string
  legal_entity?:
    | {
        addresses?: LegalEntityAddressCreateRequest[] | undefined
        bank_settings?:
          | {
              backup_withholding_percentage: number | null
              created_at: string
              discarded_at: string | null
              enable_backup_withholding: boolean | null
              id: string
              live_mode: boolean
              object: string
              privacy_opt_out: boolean | null
              regulation_o: boolean | null
              updated_at: string
            }
          | undefined
        business_description?: (string | null) | undefined
        business_designation?: 'exempt_financial_institution' | 'non_operating_business' | undefined
        business_name?: (string | null) | undefined
        citizenship_country?: (string | null) | undefined
        compliance_details?: ({ [x: string]: unknown } | null) | undefined
        connection_id?: (string | null) | undefined
        country_of_incorporation?: (string | null) | undefined
        date_formed?: (string | null) | undefined
        date_of_birth?: (string | null) | undefined
        documents?:
          | {
              document_type:
                | 'articles_of_incorporation'
                | 'certificate_of_good_standing'
                | 'ein_letter'
                | 'generic'
                | 'identification_back'
                | 'identification_front'
                | 'proof_of_address'
              file_data: string
              filename?: string | undefined
            }[]
          | undefined
        doing_business_as_names?: string[] | undefined
        email?: (string | null) | undefined
        expected_activity_volume?: (number | null) | undefined
        external_id?: (string | null) | undefined
        first_name?: (string | null) | undefined
        identifications?: IdentificationCreateRequest[] | undefined
        industry_classifications?: LegalEntityIndustryClassification[] | undefined
        intended_use?: (string | null) | undefined
        last_name?: (string | null) | undefined
        legal_entity_associations?: (LegalEntityAssociationInlineCreateRequest[] | null) | undefined
        legal_entity_type?: 'business' | 'individual' | undefined
        legal_structure?:
          | 'corporation'
          | 'llc'
          | 'non_profit'
          | 'partnership'
          | 'sole_proprietorship'
          | 'trust'
          | undefined
        listed_exchange?: (string | null) | undefined
        metadata?: { [x: string]: string } | undefined
        middle_name?: (string | null) | undefined
        operating_jurisdictions?: string[] | undefined
        phone_numbers?: { phone_number?: string | undefined }[] | undefined
        politically_exposed_person?: (boolean | null) | undefined
        preferred_name?: (string | null) | undefined
        prefix?: (string | null) | undefined
        primary_social_media_sites?: string[] | undefined
        regulators?: (LegalEntityRegulator[] | null) | undefined
        risk_rating?: 'low' | 'medium' | 'high' | undefined
        service_provider_legal_entity_id?: (string | null) | undefined
        suffix?: (string | null) | undefined
        terms_of_use?:
          | ({ accepted_at?: string | undefined; ip_address?: string | undefined } | null)
          | undefined
        third_party_verification?:
          | {
              comment?: (string | null) | undefined
              outcome: 'passed' | 'failed'
              vendor:
                | 'persona'
                | 'middesk'
                | 'alloy'
                | 'idology'
                | 'socure'
                | 'sumsub'
                | 'veriff'
                | 'smarty'
              vendor_verification_id: string
              verification_category:
                | 'legal_name'
                | 'date_of_birth'
                | 'address'
                | 'government_id_number'
                | 'tax_id'
                | 'adverse_media'
              verification_method: string
              verification_time: string
            }
          | undefined
        third_party_verifications?: ThirdPartyVerification[] | undefined
        ticker_symbol?: (string | null) | undefined
        wealth_and_employment_details?:
          | {
              annual_income: number | null
              created_at: string
              discarded_at: string | null
              employer_country: string | null
              employer_name: string | null
              employer_state: string | null
              employment_status: 'employed' | 'retired' | 'self_employed' | 'student' | 'unemployed'
              id: string
              income_country: string | null
              income_source:
                | 'family_support'
                | 'government_benefits'
                | 'inheritance'
                | 'investments'
                | 'rental_income'
                | 'retirement'
                | 'salary'
                | 'self_employed'
              income_state: string | null
              industry:
                | 'accounting'
                | 'agriculture'
                | 'automotive'
                | 'chemical_manufacturing'
                | 'construction'
                | 'educational_medical'
                | 'food_service'
                | 'finance'
                | 'gasoline'
                | 'health_stores'
                | 'laundry'
                | 'maintenance'
                | 'manufacturing'
                | 'merchant_wholesale'
                | 'mining'
                | 'performing_arts'
                | 'professional_non_legal'
                | 'public_administration'
                | 'publishing'
                | 'real_estate'
                | 'recreation_gambling'
                | 'religious_charity'
                | 'rental_services'
                | 'retail_clothing'
                | 'retail_electronics'
                | 'retail_food'
                | 'retail_furnishing'
                | 'retail_home'
                | 'retail_non_store'
                | 'retail_sporting'
                | 'transportation'
                | 'travel'
                | 'utilities'
              live_mode: boolean
              object: string
              occupation:
                | 'consulting'
                | 'executive'
                | 'finance_accounting'
                | 'food_services'
                | 'government'
                | 'healthcare'
                | 'legal_services'
                | 'manufacturing'
                | 'other'
                | 'sales'
                | 'science_engineering'
                | 'technology'
              source_of_funds:
                | 'alimony'
                | 'annuity'
                | 'business_owner'
                | 'business_revenue'
                | 'debt_financing'
                | 'general_employee'
                | 'government_benefits'
                | 'homemaker'
                | 'inheritance_gift'
                | 'intercompany_loan'
                | 'investment'
                | 'investor_funding'
                | 'legal_settlement'
                | 'lottery'
                | 'real_estate'
                | 'retained_earnings_or_savings'
                | 'retired'
                | 'retirement'
                | 'salary'
                | 'sale_of_business_assets'
                | 'sale_of_real_estate'
                | 'self_employed'
                | 'senior_executive'
                | 'trust_income'
              updated_at: string
              wealth_source:
                | 'business_sale'
                | 'family_support'
                | 'government_benefits'
                | 'inheritance'
                | 'investments'
                | 'other'
                | 'rental_income'
                | 'retirement'
                | 'salary'
                | 'self_employed'
            }
          | undefined
        website?: (string | null) | undefined
      }
    | undefined
  legal_entity_id?: string | undefined
}
type ConnectionLegalEntityUpdateRequest = { status?: 'processing' | undefined }
type Counterparty = {
  accounts: {
    account_details?: AccountDetail[] | undefined
    account_type?: ExternalAccountType | undefined
    card_id?: (string | null) | undefined
    contact_details?: ContactDetail[] | undefined
    created_at?: string | undefined
    discarded_at?: (string | null) | undefined
    external_id?: (string | null) | undefined
    id?: string | undefined
    ledger_account_id?: (string | null) | undefined
    live_mode?: boolean | undefined
    metadata?: { [x: string]: string } | undefined
    name?: (string | null) | undefined
    object?: string | undefined
    party_address?: Address | undefined
    party_name?: string | undefined
    party_type?: 'business' | 'individual' | undefined
    routing_details?: RoutingDetail[] | undefined
    updated_at?: string | undefined
    verification_source?: 'ach_prenote' | 'microdeposits' | 'plaid' | undefined
    verification_status?: 'pending_verification' | 'unverified' | 'verified' | undefined
  }[]
  created_at: string
  discarded_at: string | null
  email: string | null
  external_id: string | null
  id: string
  legal_entity_id: string | null
  live_mode: boolean
  metadata: { [x: string]: string }
  name: string | null
  object: string
  send_remittance_advice: boolean
  updated_at: string
  verification_status: string
}
type LegalEntityCreateRequest = {
  addresses?: LegalEntityAddressCreateRequest[] | undefined
  bank_settings?:
    | {
        backup_withholding_percentage: number | null
        created_at: string
        discarded_at: string | null
        enable_backup_withholding: boolean | null
        id: string
        live_mode: boolean
        object: string
        privacy_opt_out: boolean | null
        regulation_o: boolean | null
        updated_at: string
      }
    | undefined
  business_description?: (string | null) | undefined
  business_designation?: 'exempt_financial_institution' | 'non_operating_business' | undefined
  business_name?: (string | null) | undefined
  citizenship_country?: (string | null) | undefined
  compliance_details?: ({ [x: string]: unknown } | null) | undefined
  connection_id?: (string | null) | undefined
  country_of_incorporation?: (string | null) | undefined
  date_formed?: (string | null) | undefined
  date_of_birth?: (string | null) | undefined
  documents?:
    | {
        document_type:
          | 'articles_of_incorporation'
          | 'certificate_of_good_standing'
          | 'ein_letter'
          | 'generic'
          | 'identification_back'
          | 'identification_front'
          | 'proof_of_address'
        file_data: string
        filename?: string | undefined
      }[]
    | undefined
  doing_business_as_names?: string[] | undefined
  email?: (string | null) | undefined
  expected_activity_volume?: (number | null) | undefined
  external_id?: (string | null) | undefined
  first_name?: (string | null) | undefined
  identifications?: IdentificationCreateRequest[] | undefined
  industry_classifications?: LegalEntityIndustryClassification[] | undefined
  intended_use?: (string | null) | undefined
  last_name?: (string | null) | undefined
  legal_entity_associations?: (LegalEntityAssociationInlineCreateRequest[] | null) | undefined
  legal_entity_type: 'business' | 'individual'
  legal_structure?:
    | 'corporation'
    | 'llc'
    | 'non_profit'
    | 'partnership'
    | 'sole_proprietorship'
    | 'trust'
    | undefined
  listed_exchange?: (string | null) | undefined
  metadata?: { [x: string]: string } | undefined
  middle_name?: (string | null) | undefined
  operating_jurisdictions?: string[] | undefined
  phone_numbers?: { phone_number?: string | undefined }[] | undefined
  politically_exposed_person?: (boolean | null) | undefined
  preferred_name?: (string | null) | undefined
  prefix?: (string | null) | undefined
  primary_social_media_sites?: string[] | undefined
  regulators?: (LegalEntityRegulator[] | null) | undefined
  risk_rating?: 'low' | 'medium' | 'high' | undefined
  service_provider_legal_entity_id?: (string | null) | undefined
  status?: 'draft' | undefined
  suffix?: (string | null) | undefined
  terms_of_use?:
    | ({ accepted_at?: string | undefined; ip_address?: string | undefined } | null)
    | undefined
  third_party_verification?:
    | {
        comment?: (string | null) | undefined
        outcome: 'passed' | 'failed'
        vendor:
          | 'persona'
          | 'middesk'
          | 'alloy'
          | 'idology'
          | 'socure'
          | 'sumsub'
          | 'veriff'
          | 'smarty'
        vendor_verification_id: string
        verification_category:
          | 'legal_name'
          | 'date_of_birth'
          | 'address'
          | 'government_id_number'
          | 'tax_id'
          | 'adverse_media'
        verification_method: string
        verification_time: string
      }
    | undefined
  third_party_verifications?: ThirdPartyVerification[] | undefined
  ticker_symbol?: (string | null) | undefined
  wealth_and_employment_details?:
    | {
        annual_income: number | null
        created_at: string
        discarded_at: string | null
        employer_country: string | null
        employer_name: string | null
        employer_state: string | null
        employment_status: 'employed' | 'retired' | 'self_employed' | 'student' | 'unemployed'
        id: string
        income_country: string | null
        income_source:
          | 'family_support'
          | 'government_benefits'
          | 'inheritance'
          | 'investments'
          | 'rental_income'
          | 'retirement'
          | 'salary'
          | 'self_employed'
        income_state: string | null
        industry:
          | 'accounting'
          | 'agriculture'
          | 'automotive'
          | 'chemical_manufacturing'
          | 'construction'
          | 'educational_medical'
          | 'food_service'
          | 'finance'
          | 'gasoline'
          | 'health_stores'
          | 'laundry'
          | 'maintenance'
          | 'manufacturing'
          | 'merchant_wholesale'
          | 'mining'
          | 'performing_arts'
          | 'professional_non_legal'
          | 'public_administration'
          | 'publishing'
          | 'real_estate'
          | 'recreation_gambling'
          | 'religious_charity'
          | 'rental_services'
          | 'retail_clothing'
          | 'retail_electronics'
          | 'retail_food'
          | 'retail_furnishing'
          | 'retail_home'
          | 'retail_non_store'
          | 'retail_sporting'
          | 'transportation'
          | 'travel'
          | 'utilities'
        live_mode: boolean
        object: string
        occupation:
          | 'consulting'
          | 'executive'
          | 'finance_accounting'
          | 'food_services'
          | 'government'
          | 'healthcare'
          | 'legal_services'
          | 'manufacturing'
          | 'other'
          | 'sales'
          | 'science_engineering'
          | 'technology'
        source_of_funds:
          | 'alimony'
          | 'annuity'
          | 'business_owner'
          | 'business_revenue'
          | 'debt_financing'
          | 'general_employee'
          | 'government_benefits'
          | 'homemaker'
          | 'inheritance_gift'
          | 'intercompany_loan'
          | 'investment'
          | 'investor_funding'
          | 'legal_settlement'
          | 'lottery'
          | 'real_estate'
          | 'retained_earnings_or_savings'
          | 'retired'
          | 'retirement'
          | 'salary'
          | 'sale_of_business_assets'
          | 'sale_of_real_estate'
          | 'self_employed'
          | 'senior_executive'
          | 'trust_income'
        updated_at: string
        wealth_source:
          | 'business_sale'
          | 'family_support'
          | 'government_benefits'
          | 'inheritance'
          | 'investments'
          | 'other'
          | 'rental_income'
          | 'retirement'
          | 'salary'
          | 'self_employed'
      }
    | undefined
  website?: (string | null) | undefined
}
type CounterpartyCreateRequest = {
  accounts?:
    | {
        account_details?:
          | {
              account_number: string
              account_number_type?:
                | 'arbitrum_address'
                | 'au_number'
                | 'avalanche_address'
                | 'base_address'
                | 'card_token'
                | 'clabe'
                | 'ethereum_address'
                | 'hk_number'
                | 'iban'
                | 'id_number'
                | 'nz_number'
                | 'other'
                | 'polygon_address'
                | 'sg_number'
                | 'solana_address'
                | undefined
            }[]
          | undefined
        account_type?: ExternalAccountType | undefined
        contact_details?: ContactDetailCreateRequest[] | undefined
        external_id?: (string | null) | undefined
        ledger_account?: LedgerAccountCreateRequest | undefined
        metadata?: { [x: string]: string } | undefined
        name?: (string | null) | undefined
        party_address?: AddressRequest | undefined
        party_identifier?: string | undefined
        party_name?: string | undefined
        party_type?: 'business' | 'individual' | undefined
        plaid_processor_token?: string | undefined
        routing_details?:
          | {
              payment_type?:
                | 'ach'
                | 'au_becs'
                | 'bacs'
                | 'book'
                | 'card'
                | 'chats'
                | 'check'
                | 'cross_border'
                | 'dk_nets'
                | 'eft'
                | 'gb_fps'
                | 'masav'
                | 'mx_ccen'
                | 'neft'
                | 'nics'
                | 'nz_becs'
                | 'pl_elixir'
                | 'rtp'
                | 'se_bankgirot'
                | 'sepa'
                | 'sg_giro'
                | 'sic'
                | 'stablecoin'
                | 'wire'
                | 'zengin'
                | undefined
              routing_number: string
              routing_number_type:
                | 'aba'
                | 'au_bsb'
                | 'br_codigo'
                | 'ca_cpa'
                | 'chips'
                | 'cnaps'
                | 'dk_interbank_clearing_code'
                | 'gb_sort_code'
                | 'hk_interbank_clearing_code'
                | 'il_bank_code'
                | 'in_ifsc'
                | 'jp_zengin_code'
                | 'my_branch_code'
                | 'mx_bank_identifier'
                | 'nz_national_clearing_code'
                | 'pl_national_clearing_code'
                | 'se_bankgiro_clearing_code'
                | 'sg_interbank_clearing_code'
                | 'swift'
                | 'vasp'
                | 'za_national_clearing_code'
            }[]
          | undefined
      }[]
    | undefined
  email?: (string | null) | undefined
  external_id?: (string | null) | undefined
  legal_entity?: LegalEntityCreateRequest | undefined
  legal_entity_id?: (string | null) | undefined
  metadata?: { [x: string]: string } | undefined
  name: string | null
  send_remittance_advice?: boolean | undefined
  taxpayer_identifier?: string | undefined
  verification_status?: string | undefined
}
type CounterpartyUpdateRequest = {
  email?: string | undefined
  external_id?: (string | null) | undefined
  legal_entity_id?: (string | null) | undefined
  metadata?: { [x: string]: string } | undefined
  name?: string | undefined
  send_remittance_advice?: boolean | undefined
  taxpayer_identifier?: string | undefined
}
type CounterpartyCollectAccountRequest = {
  custom_redirect?: string | undefined
  direction: 'credit' | 'debit'
  fields?:
    | (
        | 'name'
        | 'nameOnAccount'
        | 'taxpayerIdentifier'
        | 'accountType'
        | 'accountNumber'
        | 'ibanNumber'
        | 'clabeNumber'
        | 'walletAddress'
        | 'routingNumber'
        | 'abaWireRoutingNumber'
        | 'swiftCode'
        | 'auBsb'
        | 'caCpa'
        | 'cnaps'
        | 'gbSortCode'
        | 'inIfsc'
        | 'myBranchCode'
        | 'brCodigo'
        | 'routingNumberType'
        | 'address'
        | 'jpZenginCode'
        | 'seBankgiroClearingCode'
        | 'nzNationalClearingCode'
        | 'hkInterbankClearingCode'
        | 'dkInterbankClearingCode'
        | 'zaNationalClearingCode'
      )[]
    | undefined
  send_email?: boolean | undefined
}
type CounterpartyCollectAccountResponse = { form_link: string; id: string; is_resend: boolean }
type Document = {
  created_at: string
  discarded_at: string | null
  document_type: string | null
  documentable_id: string | null
  documentable_type:
    | 'connection'
    | 'counterparty'
    | 'expected_payment'
    | 'identification'
    | 'incoming_payment_detail'
    | 'internal_account'
    | 'legal_entity'
    | 'payment_order'
    | 'return'
    | 'transaction'
  file: {
    content_type?: string | undefined
    filename?: string | undefined
    size?: number | undefined
  }
  id: string
  live_mode: boolean
  object: string
  source: string
  updated_at: string
}
type DocumentCreateRequest = {
  document_type?: string | undefined
  documentable_id?: string | undefined
  documentable_type?:
    | 'connection'
    | 'counterparty'
    | 'expected_payment'
    | 'identification'
    | 'incoming_payment_detail'
    | 'internal_account'
    | 'legal_entity'
    | 'payment_order'
    | 'return'
    | 'transaction'
    | undefined
  file: File
}
type EmbeddableFlow = {
  client_token: string
  created_at: string
  expires_at: string
  id: string
  live_mode: boolean
  object: string
  options:
    | { legal_entity_id: string; type: 'individual' }
    | {
        counterparty_id: string | null
        external_account_id: string | null
        payment_types: string[]
        receiving_countries: string[]
      }
    | {
        amount: number
        counterparty_id: string | null
        currency: string
        direction: 'credit' | 'debit'
        due_date: string | null
        effective_date_selection_enabled: boolean
        existing_external_accounts_filter: 'verified'
        external_account_collection: 'enabled' | 'disabled'
        originating_account_id: string
        payment_order_id: string | null
        receiving_account_id: string | null
        selected_effective_date: string | null
      }
  status: 'cancelled' | 'completed' | 'expired' | 'pending'
  template: 'legal_entity_onboarding' | 'account_collection' | 'payment'
  updated_at: string
}
type PaymentFlowCreateRequest = {
  amount: number
  counterparty_id: string
  currency: string
  direction: 'credit' | 'debit'
  due_date?: string | undefined
  originating_account_id: string
}
type EmbeddableFlowCreateRequest = {
  options: AccountCollectionFlowCreateRequest | PaymentFlowCreateRequest | { type: 'individual' }
  template: 'legal_entity_onboarding' | 'account_collection' | 'payment'
}
type EmbeddableFlowUpdateRequest = { status: 'cancelled' }
type Event = {
  created_at: string
  data: { [x: string]: unknown }
  entity_id: string
  event_name: string
  event_time: string
  id: string
  live_mode: boolean
  object: string
  resource: string
  updated_at: string
}
type ExpectedPaymentUpdateRequest = {
  amount_lower_bound?: (number | null) | undefined
  amount_reconciled?: (number | null) | undefined
  amount_reconciled_direction?: 'credit' | 'debit' | undefined
  amount_unreconciled?: (number | null) | undefined
  amount_unreconciled_direction?: 'credit' | 'debit' | undefined
  amount_upper_bound?: (number | null) | undefined
  counterparty_id?: (string | null) | undefined
  currency?: {} | undefined
  date_lower_bound?: (string | null) | undefined
  date_upper_bound?: (string | null) | undefined
  description?: (string | null) | undefined
  direction?: 'credit' | 'debit' | undefined
  external_id?: (string | null) | undefined
  internal_account_id?: (string | null) | undefined
  metadata?: { [x: string]: string } | undefined
  reconciliation_filters?: ({ [x: string]: unknown } | null) | undefined
  reconciliation_groups?: ({ [x: string]: unknown } | null) | undefined
  reconciliation_rule_variables?: ReconciliationRuleVariable[] | undefined
  remittance_information?: (string | null) | undefined
  statement_descriptor?: (string | null) | undefined
  status?: 'reconciled' | undefined
  type?: ExpectedPaymentType | undefined
}
type ExternalAccount = {
  account_details: AccountDetail[]
  account_type: ExternalAccountType
  card_id: string | null
  contact_details: ContactDetail[]
  counterparty_id: string | null
  created_at: string
  discarded_at: string | null
  external_id: string | null
  id: string
  ledger_account_id: string | null
  live_mode: boolean
  metadata: { [x: string]: string }
  name: string | null
  object: string
  party_address: Address
  party_name: string
  party_type: 'business' | 'individual'
  routing_details: RoutingDetail[]
  updated_at: string
  verification_source: 'ach_prenote' | 'microdeposits' | 'plaid'
  verification_status: 'pending_verification' | 'unverified' | 'verified'
}
type ExternalAccountCreateRequest = {
  account_details?:
    | {
        account_number: string
        account_number_type?:
          | 'arbitrum_address'
          | 'au_number'
          | 'avalanche_address'
          | 'base_address'
          | 'card_token'
          | 'clabe'
          | 'ethereum_address'
          | 'hk_number'
          | 'iban'
          | 'id_number'
          | 'nz_number'
          | 'other'
          | 'polygon_address'
          | 'sg_number'
          | 'solana_address'
          | undefined
      }[]
    | undefined
  account_type?: ExternalAccountType | undefined
  contact_details?: ContactDetailCreateRequest[] | undefined
  counterparty_id: string | null
  external_id?: (string | null) | undefined
  ledger_account?: LedgerAccountCreateRequest | undefined
  metadata?: { [x: string]: string } | undefined
  name?: (string | null) | undefined
  party_address?: AddressRequest | undefined
  party_identifier?: string | undefined
  party_name?: string | undefined
  party_type?: 'business' | 'individual' | undefined
  plaid_processor_token?: string | undefined
  routing_details?:
    | {
        payment_type?:
          | 'ach'
          | 'au_becs'
          | 'bacs'
          | 'book'
          | 'card'
          | 'chats'
          | 'check'
          | 'cross_border'
          | 'dk_nets'
          | 'eft'
          | 'gb_fps'
          | 'masav'
          | 'mx_ccen'
          | 'neft'
          | 'nics'
          | 'nz_becs'
          | 'pl_elixir'
          | 'rtp'
          | 'se_bankgirot'
          | 'sepa'
          | 'sg_giro'
          | 'sic'
          | 'stablecoin'
          | 'wire'
          | 'zengin'
          | undefined
        routing_number: string
        routing_number_type:
          | 'aba'
          | 'au_bsb'
          | 'br_codigo'
          | 'ca_cpa'
          | 'chips'
          | 'cnaps'
          | 'dk_interbank_clearing_code'
          | 'gb_sort_code'
          | 'hk_interbank_clearing_code'
          | 'il_bank_code'
          | 'in_ifsc'
          | 'jp_zengin_code'
          | 'my_branch_code'
          | 'mx_bank_identifier'
          | 'nz_national_clearing_code'
          | 'pl_national_clearing_code'
          | 'se_bankgiro_clearing_code'
          | 'sg_interbank_clearing_code'
          | 'swift'
          | 'vasp'
          | 'za_national_clearing_code'
      }[]
    | undefined
}
type ExternalAccountUpdateRequest = {
  account_type?: ExternalAccountType | undefined
  counterparty_id?: (string | null) | undefined
  metadata?: { [x: string]: string } | undefined
  name?: (string | null) | undefined
  party_address?:
    | {
        country?: (string | null) | undefined
        line1?: (string | null) | undefined
        line2?: (string | null) | undefined
        locality?: (string | null) | undefined
        postal_code?: (string | null) | undefined
        region?: (string | null) | undefined
      }
    | undefined
  party_name?: string | undefined
  party_type?: 'business' | 'individual' | undefined
}
type ExternalAccountCompleteVerificationRequest = { amounts?: number[] | undefined }
type ExternalAccountVerifyRequest = {
  currency?: Currency | undefined
  fallback_type?: 'ach' | undefined
  originating_account_id: string
  payment_type:
    | 'ach'
    | 'au_becs'
    | 'bacs'
    | 'book'
    | 'card'
    | 'chats'
    | 'check'
    | 'cross_border'
    | 'dk_nets'
    | 'eft'
    | 'gb_fps'
    | 'masav'
    | 'mx_ccen'
    | 'neft'
    | 'nics'
    | 'nz_becs'
    | 'pl_elixir'
    | 'rtp'
    | 'se_bankgirot'
    | 'sepa'
    | 'sg_giro'
    | 'sic'
    | 'stablecoin'
    | 'wire'
    | 'zengin'
  priority?: 'high' | 'normal' | undefined
}
type ExternalAccountVerificationAttempt = {
  created_at: string
  external_account_id: string
  id: string
  live_mode: boolean
  object: string
  originating_account_id: string
  payment_type:
    | 'ach'
    | 'au_becs'
    | 'bacs'
    | 'book'
    | 'card'
    | 'chats'
    | 'check'
    | 'cross_border'
    | 'dk_nets'
    | 'eft'
    | 'gb_fps'
    | 'masav'
    | 'mx_ccen'
    | 'neft'
    | 'nics'
    | 'nz_becs'
    | 'pl_elixir'
    | 'rtp'
    | 'se_bankgirot'
    | 'sepa'
    | 'sg_giro'
    | 'sic'
    | 'stablecoin'
    | 'wire'
    | 'zengin'
  priority: 'high' | 'normal'
  status: 'cancelled' | 'failed' | 'pending_verification' | 'verified'
  updated_at: string
}
type ForeignExchangeRate = {
  base_amount: number
  base_currency: Currency
  exponent: number
  rate_string: string
  target_amount: number
  target_currency: Currency
  value: number
}
type ForeignExchangeQuote = {
  created_at: string
  effective_at: string
  expires_at: string
  foreign_exchange_indicator: string
  foreign_exchange_rate: ForeignExchangeRate
  id: string
  internal_account_id: string
  live_mode: boolean
  metadata: { [x: string]: string }
  object: string
  updated_at: string
  vendor_id?: string | undefined
}
type ForeignExchangeQuoteCreateRequest = {
  base_amount?: number | undefined
  base_currency?: Currency | undefined
  effective_at?: string | undefined
  internal_account_id: string
  target_amount?: number | undefined
  target_currency: Currency
}
type Hold = {
  created_at: string
  id: string
  live_mode?: boolean | undefined
  metadata?: ({ [x: string]: string } | null) | undefined
  object: 'hold'
  reason?: (string | null) | undefined
  resolution?: (string | null) | undefined
  resolved_at?: (string | null) | undefined
  status: 'active' | 'resolved'
  target_id: string
  target_type: 'payment_order'
  updated_at: string
}
type StandaloneIdentificationCreateRequest = {
  documents?:
    | {
        document_type:
          | 'articles_of_incorporation'
          | 'certificate_of_good_standing'
          | 'ein_letter'
          | 'generic'
          | 'identification_back'
          | 'identification_front'
          | 'proof_of_address'
        file_data: string
        filename?: string | undefined
      }[]
    | undefined
  expiration_date?: (string | null) | undefined
  id_number: string
  id_type:
    | 'ad_nrt'
    | 'ae_eid'
    | 'ae_trn'
    | 'ag_tin'
    | 'ai_tin'
    | 'al_nid'
    | 'al_nipt'
    | 'am_tin'
    | 'ao_nif'
    | 'ar_cuil'
    | 'ar_cuit'
    | 'at_atin'
    | 'at_vat'
    | 'au_abn'
    | 'au_tfn'
    | 'aw_tin'
    | 'az_pin'
    | 'bb_tin'
    | 'bd_tin'
    | 'be_ent'
    | 'be_nrn'
    | 'bf_ifu'
    | 'bg_egn'
    | 'bh_cpr'
    | 'bh_vat'
    | 'bj_ifu'
    | 'bo_nit'
    | 'br_cnpj'
    | 'br_cpf'
    | 'bs_tin'
    | 'bt_bin'
    | 'bw_tin'
    | 'bz_tin'
    | 'ca_bn'
    | 'ca_sin'
    | 'ch_ahv'
    | 'ch_uid'
    | 'ci_ncc'
    | 'cl_run'
    | 'cl_rut'
    | 'cm_niu'
    | 'co_cedulas'
    | 'co_nit'
    | 'cr_cpf'
    | 'cw_crib'
    | 'cy_tin'
    | 'cz_ico'
    | 'cz_rc'
    | 'de_stid'
    | 'de_stnr'
    | 'de_vat'
    | 'dk_cpr'
    | 'dk_cvr'
    | 'dm_tin'
    | 'do_cedula'
    | 'do_rnc'
    | 'drivers_license'
    | 'ec_ruc'
    | 'ee_ik'
    | 'ee_rk'
    | 'es_nie'
    | 'es_nif'
    | 'fi_hetu'
    | 'fi_ytj'
    | 'fj_tin'
    | 'fo_ptal'
    | 'fr_nif'
    | 'fr_siren'
    | 'fr_vat'
    | 'gb_nino'
    | 'gb_utr'
    | 'gb_vat'
    | 'gd_tin'
    | 'ge_ic'
    | 'ge_pn'
    | 'ge_tin'
    | 'generic_international'
    | 'gg_sin'
    | 'gh_pin'
    | 'gh_tin'
    | 'gi_trn'
    | 'gl_cpr'
    | 'gl_ger'
    | 'gm_tin'
    | 'gr_vat'
    | 'gt_nit'
    | 'hk_brn'
    | 'hk_hkid'
    | 'hn_id'
    | 'hn_rtn'
    | 'hr_oib'
    | 'hu_adj'
    | 'hu_anum'
    | 'id_nik'
    | 'id_npwp'
    | 'ie_pps'
    | 'ie_trn'
    | 'il_cn'
    | 'il_pin'
    | 'im_trn'
    | 'in_lei'
    | 'is_knt'
    | 'it_cf'
    | 'it_piva'
    | 'je_ssn'
    | 'je_tin'
    | 'jm_trn'
    | 'jo_tin'
    | 'jp_hb'
    | 'jp_mn'
    | 'ke_pin'
    | 'kg_pin'
    | 'kn_tin'
    | 'kr_brn'
    | 'kr_crn'
    | 'kr_rrn'
    | 'kw_cid'
    | 'kz_bin'
    | 'kz_iin'
    | 'la_tin'
    | 'lc_tin'
    | 'li_peid'
    | 'lk_tin'
    | 'ls_tin'
    | 'lt_ak'
    | 'lt_jak'
    | 'lu_mtc'
    | 'lu_vat'
    | 'lv_pk'
    | 'lv_rn'
    | 'md_idnp'
    | 'me_jmbg'
    | 'me_pib'
    | 'mg_nif'
    | 'mh_ssn'
    | 'mo_bir'
    | 'mo_tin_b'
    | 'mo_tin_i'
    | 'mr_nif'
    | 'mt_tin'
    | 'mt_vat'
    | 'mu_tan'
    | 'mw_tpin'
    | 'mx_curp'
    | 'mx_ine'
    | 'mx_rfc'
    | 'my_npc'
    | 'my_nric'
    | 'my_tin_b'
    | 'mz_nuit'
    | 'na_tin'
    | 'national_id'
    | 'nl_bsn'
    | 'nl_btw'
    | 'nl_rsin'
    | 'no_fdn'
    | 'no_mva'
    | 'no_orgnr'
    | 'nr_tin'
    | 'nz_ird'
    | 'om_cid'
    | 'pa_cedula'
    | 'pa_ruc'
    | 'passport'
    | 'pe_ruc'
    | 'pg_tin'
    | 'ph_tin'
    | 'pl_nip'
    | 'pl_pesel'
    | 'pt_nif'
    | 'py_ruc'
    | 'qa_qid'
    | 'qa_tin'
    | 'ro_cnp'
    | 'ro_cui'
    | 'rw_tin'
    | 'sa_tin'
    | 'sa_vat'
    | 'se_orgnr'
    | 'se_pnmr'
    | 'sg_fin'
    | 'sg_nric'
    | 'sg_uen'
    | 'si_dav'
    | 'si_tin'
    | 'sk_ico'
    | 'sk_rc'
    | 'sl_tin'
    | 'sm_ssi'
    | 'sz_tin'
    | 'tg_nif'
    | 'th_jid'
    | 'th_pin'
    | 'tj_inn'
    | 'to_tin'
    | 'tr_tckn'
    | 'tt_bir'
    | 'tw_nric'
    | 'tw_ubn'
    | 'ug_tin'
    | 'us_ein'
    | 'us_itin'
    | 'us_ssn'
    | 'uy_rut'
    | 'uz_inn'
    | 'uz_pin'
    | 'vn_tin'
    | 'za_trn'
    | 'za_vat'
    | 'zm_tpin'
  issuing_country?: (string | null) | undefined
  issuing_region?: (string | null) | undefined
  legal_entity_id: string
}
type Identification = {
  created_at: string
  discarded_at: string | null
  documents: Document[]
  expiration_date: string | null
  id: string
  id_type:
    | 'ad_nrt'
    | 'ae_eid'
    | 'ae_trn'
    | 'ag_tin'
    | 'ai_tin'
    | 'al_nid'
    | 'al_nipt'
    | 'am_tin'
    | 'ao_nif'
    | 'ar_cuil'
    | 'ar_cuit'
    | 'at_atin'
    | 'at_vat'
    | 'au_abn'
    | 'au_tfn'
    | 'aw_tin'
    | 'az_pin'
    | 'bb_tin'
    | 'bd_tin'
    | 'be_ent'
    | 'be_nrn'
    | 'bf_ifu'
    | 'bg_egn'
    | 'bh_cpr'
    | 'bh_vat'
    | 'bj_ifu'
    | 'bo_nit'
    | 'br_cnpj'
    | 'br_cpf'
    | 'bs_tin'
    | 'bt_bin'
    | 'bw_tin'
    | 'bz_tin'
    | 'ca_bn'
    | 'ca_sin'
    | 'ch_ahv'
    | 'ch_uid'
    | 'ci_ncc'
    | 'cl_run'
    | 'cl_rut'
    | 'cm_niu'
    | 'co_cedulas'
    | 'co_nit'
    | 'cr_cpf'
    | 'cw_crib'
    | 'cy_tin'
    | 'cz_ico'
    | 'cz_rc'
    | 'de_stid'
    | 'de_stnr'
    | 'de_vat'
    | 'dk_cpr'
    | 'dk_cvr'
    | 'dm_tin'
    | 'do_cedula'
    | 'do_rnc'
    | 'drivers_license'
    | 'ec_ruc'
    | 'ee_ik'
    | 'ee_rk'
    | 'es_nie'
    | 'es_nif'
    | 'fi_hetu'
    | 'fi_ytj'
    | 'fj_tin'
    | 'fo_ptal'
    | 'fr_nif'
    | 'fr_siren'
    | 'fr_vat'
    | 'gb_nino'
    | 'gb_utr'
    | 'gb_vat'
    | 'gd_tin'
    | 'ge_ic'
    | 'ge_pn'
    | 'ge_tin'
    | 'generic_international'
    | 'gg_sin'
    | 'gh_pin'
    | 'gh_tin'
    | 'gi_trn'
    | 'gl_cpr'
    | 'gl_ger'
    | 'gm_tin'
    | 'gr_vat'
    | 'gt_nit'
    | 'hk_brn'
    | 'hk_hkid'
    | 'hn_id'
    | 'hn_rtn'
    | 'hr_oib'
    | 'hu_adj'
    | 'hu_anum'
    | 'id_nik'
    | 'id_npwp'
    | 'ie_pps'
    | 'ie_trn'
    | 'il_cn'
    | 'il_pin'
    | 'im_trn'
    | 'in_lei'
    | 'is_knt'
    | 'it_cf'
    | 'it_piva'
    | 'je_ssn'
    | 'je_tin'
    | 'jm_trn'
    | 'jo_tin'
    | 'jp_hb'
    | 'jp_mn'
    | 'ke_pin'
    | 'kg_pin'
    | 'kn_tin'
    | 'kr_brn'
    | 'kr_crn'
    | 'kr_rrn'
    | 'kw_cid'
    | 'kz_bin'
    | 'kz_iin'
    | 'la_tin'
    | 'lc_tin'
    | 'li_peid'
    | 'lk_tin'
    | 'ls_tin'
    | 'lt_ak'
    | 'lt_jak'
    | 'lu_mtc'
    | 'lu_vat'
    | 'lv_pk'
    | 'lv_rn'
    | 'md_idnp'
    | 'me_jmbg'
    | 'me_pib'
    | 'mg_nif'
    | 'mh_ssn'
    | 'mo_bir'
    | 'mo_tin_b'
    | 'mo_tin_i'
    | 'mr_nif'
    | 'mt_tin'
    | 'mt_vat'
    | 'mu_tan'
    | 'mw_tpin'
    | 'mx_curp'
    | 'mx_ine'
    | 'mx_rfc'
    | 'my_npc'
    | 'my_nric'
    | 'my_tin_b'
    | 'mz_nuit'
    | 'na_tin'
    | 'national_id'
    | 'nl_bsn'
    | 'nl_btw'
    | 'nl_rsin'
    | 'no_fdn'
    | 'no_mva'
    | 'no_orgnr'
    | 'nr_tin'
    | 'nz_ird'
    | 'om_cid'
    | 'pa_cedula'
    | 'pa_ruc'
    | 'passport'
    | 'pe_ruc'
    | 'pg_tin'
    | 'ph_tin'
    | 'pl_nip'
    | 'pl_pesel'
    | 'pt_nif'
    | 'py_ruc'
    | 'qa_qid'
    | 'qa_tin'
    | 'ro_cnp'
    | 'ro_cui'
    | 'rw_tin'
    | 'sa_tin'
    | 'sa_vat'
    | 'se_orgnr'
    | 'se_pnmr'
    | 'sg_fin'
    | 'sg_nric'
    | 'sg_uen'
    | 'si_dav'
    | 'si_tin'
    | 'sk_ico'
    | 'sk_rc'
    | 'sl_tin'
    | 'sm_ssi'
    | 'sz_tin'
    | 'tg_nif'
    | 'th_jid'
    | 'th_pin'
    | 'tj_inn'
    | 'to_tin'
    | 'tr_tckn'
    | 'tt_bir'
    | 'tw_nric'
    | 'tw_ubn'
    | 'ug_tin'
    | 'us_ein'
    | 'us_itin'
    | 'us_ssn'
    | 'uy_rut'
    | 'uz_inn'
    | 'uz_pin'
    | 'vn_tin'
    | 'za_trn'
    | 'za_vat'
    | 'zm_tpin'
  issuing_country: string | null
  issuing_region: string | null
  live_mode: boolean
  object: string
  updated_at: string
}
type IdentificationUpdateRequest = {
  expiration_date?: (string | null) | undefined
  id_number?: string | undefined
  id_type?:
    | 'ad_nrt'
    | 'ae_eid'
    | 'ae_trn'
    | 'ag_tin'
    | 'ai_tin'
    | 'al_nid'
    | 'al_nipt'
    | 'am_tin'
    | 'ao_nif'
    | 'ar_cuil'
    | 'ar_cuit'
    | 'at_atin'
    | 'at_vat'
    | 'au_abn'
    | 'au_tfn'
    | 'aw_tin'
    | 'az_pin'
    | 'bb_tin'
    | 'bd_tin'
    | 'be_ent'
    | 'be_nrn'
    | 'bf_ifu'
    | 'bg_egn'
    | 'bh_cpr'
    | 'bh_vat'
    | 'bj_ifu'
    | 'bo_nit'
    | 'br_cnpj'
    | 'br_cpf'
    | 'bs_tin'
    | 'bt_bin'
    | 'bw_tin'
    | 'bz_tin'
    | 'ca_bn'
    | 'ca_sin'
    | 'ch_ahv'
    | 'ch_uid'
    | 'ci_ncc'
    | 'cl_run'
    | 'cl_rut'
    | 'cm_niu'
    | 'co_cedulas'
    | 'co_nit'
    | 'cr_cpf'
    | 'cw_crib'
    | 'cy_tin'
    | 'cz_ico'
    | 'cz_rc'
    | 'de_stid'
    | 'de_stnr'
    | 'de_vat'
    | 'dk_cpr'
    | 'dk_cvr'
    | 'dm_tin'
    | 'do_cedula'
    | 'do_rnc'
    | 'drivers_license'
    | 'ec_ruc'
    | 'ee_ik'
    | 'ee_rk'
    | 'es_nie'
    | 'es_nif'
    | 'fi_hetu'
    | 'fi_ytj'
    | 'fj_tin'
    | 'fo_ptal'
    | 'fr_nif'
    | 'fr_siren'
    | 'fr_vat'
    | 'gb_nino'
    | 'gb_utr'
    | 'gb_vat'
    | 'gd_tin'
    | 'ge_ic'
    | 'ge_pn'
    | 'ge_tin'
    | 'generic_international'
    | 'gg_sin'
    | 'gh_pin'
    | 'gh_tin'
    | 'gi_trn'
    | 'gl_cpr'
    | 'gl_ger'
    | 'gm_tin'
    | 'gr_vat'
    | 'gt_nit'
    | 'hk_brn'
    | 'hk_hkid'
    | 'hn_id'
    | 'hn_rtn'
    | 'hr_oib'
    | 'hu_adj'
    | 'hu_anum'
    | 'id_nik'
    | 'id_npwp'
    | 'ie_pps'
    | 'ie_trn'
    | 'il_cn'
    | 'il_pin'
    | 'im_trn'
    | 'in_lei'
    | 'is_knt'
    | 'it_cf'
    | 'it_piva'
    | 'je_ssn'
    | 'je_tin'
    | 'jm_trn'
    | 'jo_tin'
    | 'jp_hb'
    | 'jp_mn'
    | 'ke_pin'
    | 'kg_pin'
    | 'kn_tin'
    | 'kr_brn'
    | 'kr_crn'
    | 'kr_rrn'
    | 'kw_cid'
    | 'kz_bin'
    | 'kz_iin'
    | 'la_tin'
    | 'lc_tin'
    | 'li_peid'
    | 'lk_tin'
    | 'ls_tin'
    | 'lt_ak'
    | 'lt_jak'
    | 'lu_mtc'
    | 'lu_vat'
    | 'lv_pk'
    | 'lv_rn'
    | 'md_idnp'
    | 'me_jmbg'
    | 'me_pib'
    | 'mg_nif'
    | 'mh_ssn'
    | 'mo_bir'
    | 'mo_tin_b'
    | 'mo_tin_i'
    | 'mr_nif'
    | 'mt_tin'
    | 'mt_vat'
    | 'mu_tan'
    | 'mw_tpin'
    | 'mx_curp'
    | 'mx_ine'
    | 'mx_rfc'
    | 'my_npc'
    | 'my_nric'
    | 'my_tin_b'
    | 'mz_nuit'
    | 'na_tin'
    | 'national_id'
    | 'nl_bsn'
    | 'nl_btw'
    | 'nl_rsin'
    | 'no_fdn'
    | 'no_mva'
    | 'no_orgnr'
    | 'nr_tin'
    | 'nz_ird'
    | 'om_cid'
    | 'pa_cedula'
    | 'pa_ruc'
    | 'passport'
    | 'pe_ruc'
    | 'pg_tin'
    | 'ph_tin'
    | 'pl_nip'
    | 'pl_pesel'
    | 'pt_nif'
    | 'py_ruc'
    | 'qa_qid'
    | 'qa_tin'
    | 'ro_cnp'
    | 'ro_cui'
    | 'rw_tin'
    | 'sa_tin'
    | 'sa_vat'
    | 'se_orgnr'
    | 'se_pnmr'
    | 'sg_fin'
    | 'sg_nric'
    | 'sg_uen'
    | 'si_dav'
    | 'si_tin'
    | 'sk_ico'
    | 'sk_rc'
    | 'sl_tin'
    | 'sm_ssi'
    | 'sz_tin'
    | 'tg_nif'
    | 'th_jid'
    | 'th_pin'
    | 'tj_inn'
    | 'to_tin'
    | 'tr_tckn'
    | 'tt_bir'
    | 'tw_nric'
    | 'tw_ubn'
    | 'ug_tin'
    | 'us_ein'
    | 'us_itin'
    | 'us_ssn'
    | 'uy_rut'
    | 'uz_inn'
    | 'uz_pin'
    | 'vn_tin'
    | 'za_trn'
    | 'za_vat'
    | 'zm_tpin'
    | undefined
  issuing_country?: (string | null) | undefined
  issuing_region?: (string | null) | undefined
}
type IncomingPaymentDetail = {
  amount: number
  as_of_date: string
  created_at: string
  currency: Currency
  data: { [x: string]: unknown }
  direction: 'credit' | 'debit'
  failure_reason: string | null
  id: string
  internal_account_id: string
  ledger_transaction_id: string | null
  live_mode: boolean
  metadata: { [x: string]: string }
  object: string
  originating_account_number?: (string | null) | undefined
  originating_account_number_safe: string | null
  originating_account_number_type:
    | 'arbitrum_address'
    | 'au_number'
    | 'avalanche_address'
    | 'base_address'
    | 'card_token'
    | 'clabe'
    | 'ethereum_address'
    | 'hk_number'
    | 'iban'
    | 'id_number'
    | 'nz_number'
    | 'other'
    | 'polygon_address'
    | 'sg_number'
    | 'solana_address'
  originating_party_address?:
    | {
        country: string | null
        created_at: string
        id: string
        line1: string | null
        line2: string | null
        live_mode: boolean
        locality: string | null
        object: string
        postal_code: string | null
        region: string | null
        updated_at: string
      }
    | undefined
  originating_party_name?: (string | null) | undefined
  originating_party_vendor_identifier?: (string | null) | undefined
  originating_routing_number: string | null
  originating_routing_number_type:
    | 'aba'
    | 'au_bsb'
    | 'br_codigo'
    | 'ca_cpa'
    | 'chips'
    | 'cnaps'
    | 'dk_interbank_clearing_code'
    | 'gb_sort_code'
    | 'hk_interbank_clearing_code'
    | 'il_bank_code'
    | 'in_ifsc'
    | 'jp_zengin_code'
    | 'mx_bank_identifier'
    | 'my_branch_code'
    | 'nz_national_clearing_code'
    | 'pl_national_clearing_code'
    | 'se_bankgiro_clearing_code'
    | 'sg_interbank_clearing_code'
    | 'swift'
    | 'vasp'
    | 'za_national_clearing_code'
  receiving_account_number?: (string | null) | undefined
  receiving_account_number_safe?: (string | null) | undefined
  reconciliation_status: 'unreconciled' | 'tentatively_reconciled' | 'reconciled'
  status: 'completed' | 'failed' | 'held' | 'pending' | 'returned'
  subtype: string | null
  transaction_id: string | null
  transaction_line_item_id: string | null
  type:
    | 'ach'
    | 'au_becs'
    | 'bacs'
    | 'book'
    | 'check'
    | 'eft'
    | 'neft'
    | 'nz_becs'
    | 'rtp'
    | 'sepa'
    | 'stablecoin'
    | 'wire'
    | 'zengin'
  updated_at: string
  vendor_id: string | null
  virtual_account: {
    account_details: AccountDetail[]
    counterparty_id: string | null
    created_at: string
    credit_ledger_account_id: string | null
    debit_ledger_account_id: string | null
    description: string | null
    discarded_at: string | null
    external_id: string | null
    id: string
    internal_account_id: string
    ledger_account_id: string | null
    live_mode: boolean
    metadata: { [x: string]: string }
    name: string
    object: string
    party_address: {
      country: string | null
      created_at: string
      id: string
      line1: string | null
      line2: string | null
      live_mode: boolean
      locality: string | null
      object: string
      postal_code: string | null
      region: string | null
      updated_at: string
    }
    routing_details: RoutingDetail[]
    updated_at: string
  }
  virtual_account_id: string | null
}
type IncomingPaymentDetailUpdateRequest = { metadata?: { [x: string]: string } | undefined }
type InternalAccountCreateRequest = {
  account_capabilities?: AccountCapability[] | undefined
  account_type?:
    | 'cash'
    | 'checking'
    | 'general_ledger'
    | 'loan'
    | 'non_resident'
    | 'other'
    | 'overdraft'
    | 'savings'
    | undefined
  allowed_ach_debit_company_ids?: (string[] | null) | undefined
  connection_id?: string | undefined
  counterparty_id?: string | undefined
  currency: 'USD' | 'CAD' | 'USDC' | 'USDT' | 'PYUSD' | 'USDG'
  debitable?: (boolean | null) | undefined
  external_id?: (string | null) | undefined
  legal_entity_id?: string | undefined
  metadata?: { [x: string]: string } | undefined
  name: string
  parent_account_id?: string | undefined
  party_address?:
    | {
        country: string
        line1: string
        line2?: string | undefined
        locality: string
        postal_code: string
        region: string
      }
    | undefined
  party_name?: (string | null) | undefined
  party_type?: 'individual' | 'business' | undefined
  requested_account_number_types?:
    | (
        | 'arbitrum_address'
        | 'avalanche_address'
        | 'base_address'
        | 'ethereum_address'
        | 'polygon_address'
        | 'solana_address'
      )[]
    | undefined
  title?: (string | null) | undefined
  vendor_attributes?: { [x: string]: string } | undefined
}
type InternalAccountUpdateRequest = {
  allowed_ach_debit_company_ids?: (string[] | null) | undefined
  contra_ledger_account_id?: string | undefined
  counterparty_id?: string | undefined
  external_id?: (string | null) | undefined
  ledger_account_id?: string | undefined
  metadata?: { [x: string]: string } | undefined
  name?: string | undefined
  parent_account_id?: string | undefined
  party_address?:
    | {
        country?: (string | null) | undefined
        line1?: (string | null) | undefined
        line2?: (string | null) | undefined
        locality?: (string | null) | undefined
        postal_code?: (string | null) | undefined
        region?: (string | null) | undefined
      }
    | undefined
  party_type?: 'individual' | 'business' | undefined
  status?: 'pending_closure' | undefined
}
type AccountCapabilityUpdateRequest = { identifier: string }
type Balance = {
  amount: number
  amount_string: string
  as_of_date: string | null
  as_of_time: string | null
  balance_type:
    | 'closing_available'
    | 'closing_ledger'
    | 'closing_pending_inflows'
    | 'closing_pending_outflows'
    | 'current_available'
    | 'current_ledger'
    | 'current_pending_inflows'
    | 'current_pending_outflows'
    | 'opening_available'
    | 'opening_available_next_business_day'
    | 'opening_ledger'
    | 'other'
    | 'previously_closed_book'
  created_at: string
  currency: Currency
  id: string
  live_mode: boolean
  object: string
  updated_at: string
  value_date: string | null
  vendor_code: string
  vendor_code_type: string | null
}
type BalanceReport = {
  as_of_date: string
  as_of_time: string
  balance_report_type: 'intraday' | 'other' | 'previous_day' | 'real_time'
  balances: Balance[]
  created_at: string
  id: string
  internal_account_id: string
  live_mode: boolean
  object: string
  updated_at: string
}
type BalanceCreateRequest = {
  amount?: number | undefined
  amount_string?: string | undefined
  balance_type:
    | 'closing_available'
    | 'closing_ledger'
    | 'closing_pending_inflows'
    | 'closing_pending_outflows'
    | 'current_available'
    | 'current_ledger'
    | 'current_pending_inflows'
    | 'current_pending_outflows'
    | 'opening_available'
    | 'opening_available_next_business_day'
    | 'opening_ledger'
    | 'other'
    | 'previously_closed_book'
  vendor_code: string
  vendor_code_type: string | null
}
type BalanceReportCreateRequest = {
  as_of_date: string
  as_of_time: string
  balance_report_type: 'intraday' | 'other' | 'previous_day' | 'real_time'
  balances: BalanceCreateRequest[]
}
type Invoice = {
  amount_paid: number
  amount_remaining: number
  contact_details: ContactDetail[]
  counterparty_billing_address: {
    country: string
    line1: string
    line2?: string | undefined
    locality: string
    postal_code: string
    region: string
  } | null
  counterparty_id: string
  counterparty_shipping_address: {
    country: string
    line1: string
    line2?: string | undefined
    locality: string
    postal_code: string
    region: string
  } | null
  created_at: string
  currency: Currency
  description: string
  due_date: string
  expected_payments: ExpectedPayment[]
  fallback_payment_method: string | null
  hosted_url: string
  id: string
  invoicer_address: {
    country: string
    line1: string
    line2?: string | undefined
    locality: string
    postal_code: string
    region: string
  } | null
  invoicer_name: string | null
  issued_at: string | null
  ledger_account_settlement_id: string | null
  live_mode: boolean
  metadata: { [x: string]: string } | null
  notification_email_addresses: string[] | null
  notifications_enabled: boolean
  number: string
  object: string
  originating_account_id: string
  paid_at: string | null
  payment_effective_date: string | null
  payment_method: 'ui' | 'manual' | 'automatic'
  payment_orders: PaymentOrder[]
  payment_type: 'eft' | 'ach'
  pdf_url: string | null
  receiving_account_id: string | null
  recipient_email: string | null
  recipient_name: string | null
  remind_after_overdue_days: number[] | null
  status: 'draft' | 'paid' | 'partially_paid' | 'payment_pending' | 'unpaid' | 'voided'
  total_amount: number
  transaction_line_item_ids: string[]
  updated_at: string
  virtual_account_id: string | null
  voided_at: string | null
}
type InvoiceLineItemCreateRequest = {
  description?: string | undefined
  direction?: string | undefined
  metadata?: { [x: string]: string } | undefined
  name: string
  quantity?: number | undefined
  unit_amount: number
  unit_amount_decimal?: string | undefined
}
type InvoiceCreateRequest = {
  auto_advance?: (boolean | null) | undefined
  contact_details?: ContactDetail[] | undefined
  counterparty_billing_address?:
    | ({
        country: string
        line1: string
        line2?: string | undefined
        locality: string
        postal_code: string
        region: string
      } | null)
    | undefined
  counterparty_id: string
  counterparty_shipping_address?:
    | ({
        country: string
        line1: string
        line2?: string | undefined
        locality: string
        postal_code: string
        region: string
      } | null)
    | undefined
  currency?: Currency | undefined
  description?: string | undefined
  due_date: string
  fallback_payment_method?: (string | null) | undefined
  invoice_line_items?: (InvoiceLineItemCreateRequest[] | null) | undefined
  invoicer_address?:
    | ({
        country: string
        line1: string
        line2?: string | undefined
        locality: string
        postal_code: string
        region: string
      } | null)
    | undefined
  invoicer_name?: (string | null) | undefined
  metadata?: ({ [x: string]: string } | null) | undefined
  notification_email_addresses?: (string[] | null) | undefined
  notifications_enabled?: boolean | undefined
  originating_account_id: string
  payment_effective_date?: string | undefined
  payment_method?: 'ui' | 'manual' | 'automatic' | undefined
  payment_type?: PaymentOrderType | undefined
  receiving_account_id?: string | undefined
  recipient_email?: (string | null) | undefined
  recipient_name?: (string | null) | undefined
  remind_after_overdue_days?: (number[] | null) | undefined
  virtual_account_id?: (string | null) | undefined
}
type InvoiceUpdateRequest = {
  contact_details?: ContactDetail[] | undefined
  counterparty_billing_address?:
    | ({
        country: string
        line1: string
        line2?: string | undefined
        locality: string
        postal_code: string
        region: string
      } | null)
    | undefined
  counterparty_id?: string | undefined
  counterparty_shipping_address?:
    | ({
        country: string
        line1: string
        line2?: string | undefined
        locality: string
        postal_code: string
        region: string
      } | null)
    | undefined
  currency?: Currency | undefined
  description?: string | undefined
  due_date?: string | undefined
  fallback_payment_method?: (string | null) | undefined
  invoice_line_items?: (InvoiceLineItemCreateRequest[] | null) | undefined
  invoicer_address?:
    | ({
        country: string
        line1: string
        line2?: string | undefined
        locality: string
        postal_code: string
        region: string
      } | null)
    | undefined
  invoicer_name?: (string | null) | undefined
  metadata?: ({ [x: string]: string } | null) | undefined
  notification_email_addresses?: (string[] | null) | undefined
  notifications_enabled?: boolean | undefined
  originating_account_id?: string | undefined
  payment_effective_date?: string | undefined
  payment_method?: 'ui' | 'manual' | 'automatic' | undefined
  payment_type?: PaymentOrderType | undefined
  receiving_account_id?: string | undefined
  recipient_email?: (string | null) | undefined
  recipient_name?: (string | null) | undefined
  remind_after_overdue_days?: (number[] | null) | undefined
  status?: string | undefined
  virtual_account_id?: (string | null) | undefined
}
type InvoiceLineItem = {
  amount: number
  created_at: string
  description: string
  direction: string
  id: string
  invoice_id: string
  live_mode: boolean
  metadata: { [x: string]: string }
  name: string
  object: string
  quantity: number
  unit_amount: number
  unit_amount_decimal: string
  updated_at: string
}
type InvoiceLineItemUpdateRequest = {
  description?: string | undefined
  direction?: string | undefined
  metadata?: { [x: string]: string } | undefined
  name?: string | undefined
  quantity?: number | undefined
  unit_amount?: number | undefined
  unit_amount_decimal?: string | undefined
}
type AlertCondition = { field: string; operator: string; value: number }
type LedgerBalances = {
  available_balance: LedgerBalance
  pending_balance: LedgerBalance
  posted_balance: LedgerBalance
}
type CurrentLedgerAccountBalanceState = {
  balances: LedgerBalances
  ledger_account_lock_version: number
  triggered: boolean
}
type LedgerAccountBalanceMonitor = {
  alert_condition: AlertCondition
  created_at: string
  current_ledger_account_balance_state: CurrentLedgerAccountBalanceState
  description: string | null
  discarded_at: string | null
  id: string
  ledger_account_id: string
  live_mode: boolean
  metadata: { [x: string]: string }
  object: string
  updated_at: string
}
type AlertConditionCreateRequest = { field: string; operator: string; value: number }
type LedgerAccountBalanceMonitorCreateRequest = {
  alert_condition: AlertConditionCreateRequest
  description?: string | undefined
  ledger_account_id: string
  metadata?: { [x: string]: string } | undefined
}
type LedgerAccountBalanceMonitorUpdateRequest = {
  description?: string | undefined
  metadata?: { [x: string]: string } | undefined
}
type LedgerAccountCategory = {
  balances: LedgerBalances
  created_at: string
  description: string | null
  discarded_at: string | null
  external_id: string | null
  id: string
  ledger_id: string
  live_mode: boolean
  metadata: { [x: string]: string }
  name: string
  normal_balance: 'credit' | 'debit'
  object: string
  updated_at: string
}
type LedgerAccountCategoryCreateRequest = {
  currency: string
  currency_exponent?: (number | null) | undefined
  description?: (string | null) | undefined
  external_id?: (string | null) | undefined
  ledger_account_category_ids?: string[] | undefined
  ledger_id: string
  metadata?: { [x: string]: string } | undefined
  name: string
  normal_balance: 'credit' | 'debit'
}
type LedgerAccountCategoryUpdateRequest = {
  description?: (string | null) | undefined
  external_id?: (string | null) | undefined
  metadata?: { [x: string]: string } | undefined
  name?: string | undefined
}
type LedgerAccountSettlement = {
  amount: number | null
  contra_ledger_account_id: string
  created_at: string
  currency: string
  currency_exponent: number | null
  description: string | null
  effective_at_upper_bound: string | null
  id: string
  ledger_id: string
  ledger_transaction_id: string | null
  live_mode: boolean
  metadata: { [x: string]: string }
  object: string
  settled_ledger_account_id: string
  settlement_entry_direction: string | null
  status: 'archived' | 'archiving' | 'drafting' | 'pending' | 'posted' | 'processing'
  updated_at: string
}
type LedgerAccountSettlementCreateRequest = {
  allow_either_direction?: (boolean | null) | undefined
  contra_ledger_account_id: string
  description?: (string | null) | undefined
  effective_at_upper_bound?: (string | null) | undefined
  metadata?: { [x: string]: string } | undefined
  settled_ledger_account_id: string
  skip_settlement_ledger_transaction?: (boolean | null) | undefined
  status?: 'pending' | 'posted' | 'drafting' | undefined
}
type LedgerAccountSettlementUpdateRequest = {
  description?: (string | null) | undefined
  metadata?: { [x: string]: string } | undefined
  skip_settlement_ledger_transaction?: (boolean | null) | undefined
  status?: 'posted' | 'archived' | undefined
}
type LedgerAccountSettlementEntriesPatchRequest = { ledger_entry_ids: string[] | null }
type LedgerAccountSettlementEntriesDeleteRequest = { ledger_entry_ids: string[] | null }
type LedgerAccountStatementCreateRequest = {
  description?: (string | null) | undefined
  effective_at_lower_bound: string
  effective_at_upper_bound: string
  ledger_account_id: string
  metadata?: { [x: string]: string } | undefined
}
type LedgerAccountStatement = {
  created_at: string
  description: string | null
  effective_at_lower_bound: string
  effective_at_upper_bound: string
  ending_balance: LedgerBalances
  id: string
  ledger_account_id: string
  ledger_account_lock_version: number
  ledger_account_normal_balance: 'credit' | 'debit'
  ledger_id: string
  live_mode: boolean
  metadata: { [x: string]: string }
  object: string
  starting_balance: LedgerBalances
  updated_at: string
}
type LedgerAccountUpdateRequest = {
  description?: (string | null) | undefined
  external_id?: (string | null) | undefined
  metadata?: { [x: string]: string } | undefined
  name?: string | undefined
}
type LedgerEntryUpdateRequest = { metadata?: { [x: string]: string } | undefined }
type LedgerEntryOfTransactionVersion = {
  amount: number
  amount_string: string
  created_at: string
  direction: 'credit' | 'debit'
  effective_at: string
  id: string
  ledger_account_currency: string
  ledger_account_currency_exponent: number
  ledger_account_id: string
  ledger_account_lock_version: number | null
  ledger_transaction_id: string
  live_mode: boolean
  metadata: { [x: string]: string }
  object: string
  resulting_ledger_account_balances: {
    available_balance: LedgerBalance
    pending_balance: LedgerBalance
    posted_balance: LedgerBalance
  }
  status: 'archived' | 'pending' | 'posted'
}
type LedgerTransactionVersion = {
  archived_reason: string | null
  created_at: string
  description: string | null
  effective_at: string
  effective_date: string
  external_id: string | null
  id: string
  ledger_entries: LedgerEntryOfTransactionVersion[]
  ledger_id: string
  ledger_transaction_id: string
  ledgerable_id: string | null
  ledgerable_type:
    | 'expected_payment'
    | 'incoming_payment_detail'
    | 'payment_order'
    | 'return'
    | 'reversal'
  live_mode: boolean
  metadata: { [x: string]: string }
  object: string
  partially_posts_ledger_transaction_id: string | null
  posted_at: string | null
  reversed_by_ledger_transaction_id: string | null
  reverses_ledger_transaction_id: string | null
  status: 'archived' | 'pending' | 'posted'
  version: number
}
type LedgerTransactionUpdateRequest = {
  description?: (string | null) | undefined
  effective_at?: string | undefined
  external_id?: (string | null) | undefined
  ledger_entries?: LedgerEntryCreateRequest[] | undefined
  ledgerable_id?: string | undefined
  ledgerable_type?:
    | 'expected_payment'
    | 'incoming_payment_detail'
    | 'payment_order'
    | 'return'
    | 'reversal'
    | undefined
  metadata?: { [x: string]: string } | undefined
  status?: 'archived' | 'pending' | 'posted' | undefined
}
type LedgerEntryPartialPostCreateRequest = {
  amount?: number | undefined
  amount_string?: string | undefined
  available_balance_amount?: ({ [x: string]: number } | null) | undefined
  direction: 'credit' | 'debit'
  ledger_account_id: string
  lock_version?: (number | null) | undefined
  metadata?: { [x: string]: string } | undefined
  pending_balance_amount?: ({ [x: string]: number } | null) | undefined
  posted_balance_amount?: ({ [x: string]: number } | null) | undefined
  show_resulting_ledger_account_balances?: (boolean | null) | undefined
}
type LedgerTransactionPartialPostCreateRequest = {
  description?: string | undefined
  effective_at?: string | undefined
  metadata?: { [x: string]: string } | undefined
  posted_ledger_entries: LedgerEntryPartialPostCreateRequest[]
}
type LedgerTransactionReversalCreateRequest = {
  description?: string | undefined
  effective_at?: (string | null) | undefined
  external_id?: string | undefined
  ledgerable_id?: string | undefined
  ledgerable_type?:
    | 'expected_payment'
    | 'incoming_payment_detail'
    | 'payment_order'
    | 'return'
    | 'reversal'
    | undefined
  metadata?: { [x: string]: string } | undefined
  status?: 'archived' | 'pending' | 'posted' | undefined
}
type Ledger = {
  created_at: string
  description: string | null
  discarded_at: string | null
  id: string
  live_mode: boolean
  metadata: { [x: string]: string }
  name: string
  object: string
  updated_at: string
}
type LedgerCreateRequest = {
  description?: (string | null) | undefined
  metadata?: { [x: string]: string } | undefined
  name: string
}
type LedgerUpdateRequest = {
  description?: (string | null) | undefined
  metadata?: { [x: string]: string } | undefined
  name?: string | undefined
}
type LegalEntityAddress = {
  address_types: (
    | 'business'
    | 'business_physical'
    | 'business_registered'
    | 'mailing'
    | 'other'
    | 'po_box'
    | 'residential'
  )[]
  country: string | null
  created_at: string
  discarded_at: string | null
  id: string
  line1: string | null
  line2: string | null
  live_mode: boolean
  locality: string | null
  object: string
  postal_code: string | null
  primary: boolean | null
  region: string | null
  updated_at: string
}
type ChildLegalEntity = {
  addresses: LegalEntityAddress[]
  bank_settings: {
    backup_withholding_percentage: number | null
    created_at: string
    discarded_at: string | null
    enable_backup_withholding: boolean | null
    id: string
    live_mode: boolean
    object: string
    privacy_opt_out: boolean | null
    regulation_o: boolean | null
    updated_at: string
  }
  business_description: string | null
  business_designation: 'exempt_financial_institution' | 'non_operating_business'
  business_name: string | null
  citizenship_country: string | null
  compliance_details: { [x: string]: unknown } | null
  country_of_incorporation: string | null
  created_at: string
  date_formed: string | null
  date_of_birth: string | null
  discarded_at: string | null
  documents: Document[]
  doing_business_as_names: string[]
  email: string | null
  expected_activity_volume: number | null
  external_id: string | null
  first_name: string | null
  id: string
  identifications: Identification[]
  industry_classifications: LegalEntityIndustryClassification[]
  intended_use: string | null
  last_name: string | null
  legal_entity_associations: LegalEntityAssociation[] | null
  legal_entity_type: 'business' | 'individual'
  legal_structure:
    | 'corporation'
    | 'llc'
    | 'non_profit'
    | 'partnership'
    | 'sole_proprietorship'
    | 'trust'
  listed_exchange: string | null
  live_mode: boolean
  metadata: { [x: string]: string }
  middle_name: string | null
  object: string
  operating_jurisdictions: string[]
  phone_numbers: { phone_number?: string | undefined }[]
  politically_exposed_person: boolean | null
  preferred_name: string | null
  prefix: string | null
  primary_social_media_sites: string[]
  regulators: LegalEntityRegulator[] | null
  risk_rating: 'low' | 'medium' | 'high'
  service_provider_legal_entity_id: string | null
  status: 'active' | 'denied' | 'draft' | 'pending' | 'suspended'
  suffix: string | null
  terms_of_use: { accepted_at?: string | undefined; ip_address?: string | undefined } | null
  third_party_verification: {
    comment?: (string | null) | undefined
    outcome: 'passed' | 'failed'
    vendor: 'persona' | 'middesk' | 'alloy' | 'idology' | 'socure' | 'sumsub' | 'veriff' | 'smarty'
    vendor_verification_id: string
    verification_category:
      | 'legal_name'
      | 'date_of_birth'
      | 'address'
      | 'government_id_number'
      | 'tax_id'
      | 'adverse_media'
    verification_method: string
    verification_time: string
  }
  third_party_verifications: ThirdPartyVerification[]
  ticker_symbol: string | null
  updated_at: string
  wealth_and_employment_details: {
    annual_income: number | null
    created_at: string
    discarded_at: string | null
    employer_country: string | null
    employer_name: string | null
    employer_state: string | null
    employment_status: 'employed' | 'retired' | 'self_employed' | 'student' | 'unemployed'
    id: string
    income_country: string | null
    income_source:
      | 'family_support'
      | 'government_benefits'
      | 'inheritance'
      | 'investments'
      | 'rental_income'
      | 'retirement'
      | 'salary'
      | 'self_employed'
    income_state: string | null
    industry:
      | 'accounting'
      | 'agriculture'
      | 'automotive'
      | 'chemical_manufacturing'
      | 'construction'
      | 'educational_medical'
      | 'food_service'
      | 'finance'
      | 'gasoline'
      | 'health_stores'
      | 'laundry'
      | 'maintenance'
      | 'manufacturing'
      | 'merchant_wholesale'
      | 'mining'
      | 'performing_arts'
      | 'professional_non_legal'
      | 'public_administration'
      | 'publishing'
      | 'real_estate'
      | 'recreation_gambling'
      | 'religious_charity'
      | 'rental_services'
      | 'retail_clothing'
      | 'retail_electronics'
      | 'retail_food'
      | 'retail_furnishing'
      | 'retail_home'
      | 'retail_non_store'
      | 'retail_sporting'
      | 'transportation'
      | 'travel'
      | 'utilities'
    live_mode: boolean
    object: string
    occupation:
      | 'consulting'
      | 'executive'
      | 'finance_accounting'
      | 'food_services'
      | 'government'
      | 'healthcare'
      | 'legal_services'
      | 'manufacturing'
      | 'other'
      | 'sales'
      | 'science_engineering'
      | 'technology'
    source_of_funds:
      | 'alimony'
      | 'annuity'
      | 'business_owner'
      | 'business_revenue'
      | 'debt_financing'
      | 'general_employee'
      | 'government_benefits'
      | 'homemaker'
      | 'inheritance_gift'
      | 'intercompany_loan'
      | 'investment'
      | 'investor_funding'
      | 'legal_settlement'
      | 'lottery'
      | 'real_estate'
      | 'retained_earnings_or_savings'
      | 'retired'
      | 'retirement'
      | 'salary'
      | 'sale_of_business_assets'
      | 'sale_of_real_estate'
      | 'self_employed'
      | 'senior_executive'
      | 'trust_income'
    updated_at: string
    wealth_source:
      | 'business_sale'
      | 'family_support'
      | 'government_benefits'
      | 'inheritance'
      | 'investments'
      | 'other'
      | 'rental_income'
      | 'retirement'
      | 'salary'
      | 'self_employed'
  }
  website: string | null
}
type LegalEntityAssociation = {
  child_legal_entity: ChildLegalEntity
  created_at: string
  discarded_at: string | null
  id: string
  live_mode: boolean
  object: string
  ownership_percentage: number | null
  parent_legal_entity_id: string
  relationship_types: ('authorized_signer' | 'beneficial_owner' | 'control_person')[]
  title: string | null
  updated_at: string
}
type LegalEntity = {
  addresses: LegalEntityAddress[]
  bank_settings: {
    backup_withholding_percentage: number | null
    created_at: string
    discarded_at: string | null
    enable_backup_withholding: boolean | null
    id: string
    live_mode: boolean
    object: string
    privacy_opt_out: boolean | null
    regulation_o: boolean | null
    updated_at: string
  }
  business_description: string | null
  business_designation: 'exempt_financial_institution' | 'non_operating_business'
  business_name: string | null
  citizenship_country: string | null
  compliance_details: { [x: string]: unknown } | null
  country_of_incorporation: string | null
  created_at: string
  date_formed: string | null
  date_of_birth: string | null
  discarded_at: string | null
  documents: Document[]
  doing_business_as_names: string[]
  email: string | null
  expected_activity_volume: number | null
  external_id: string | null
  first_name: string | null
  id: string
  identifications: Identification[]
  industry_classifications: LegalEntityIndustryClassification[]
  intended_use: string | null
  last_name: string | null
  legal_entity_associations?: (LegalEntityAssociation[] | null) | undefined
  legal_entity_type: 'business' | 'individual'
  legal_structure:
    | 'corporation'
    | 'llc'
    | 'non_profit'
    | 'partnership'
    | 'sole_proprietorship'
    | 'trust'
  listed_exchange: string | null
  live_mode: boolean
  metadata: { [x: string]: string }
  middle_name: string | null
  object: string
  operating_jurisdictions: string[]
  phone_numbers: { phone_number?: string | undefined }[]
  politically_exposed_person: boolean | null
  preferred_name: string | null
  prefix: string | null
  primary_social_media_sites: string[]
  regulators: LegalEntityRegulator[] | null
  risk_rating: 'low' | 'medium' | 'high'
  service_provider_legal_entity_id: string | null
  status: 'active' | 'denied' | 'draft' | 'pending' | 'suspended'
  suffix: string | null
  terms_of_use: { accepted_at?: string | undefined; ip_address?: string | undefined } | null
  third_party_verification: {
    comment?: (string | null) | undefined
    outcome: 'passed' | 'failed'
    vendor: 'persona' | 'middesk' | 'alloy' | 'idology' | 'socure' | 'sumsub' | 'veriff' | 'smarty'
    vendor_verification_id: string
    verification_category:
      | 'legal_name'
      | 'date_of_birth'
      | 'address'
      | 'government_id_number'
      | 'tax_id'
      | 'adverse_media'
    verification_method: string
    verification_time: string
  }
  third_party_verifications: ThirdPartyVerification[]
  ticker_symbol: string | null
  updated_at: string
  wealth_and_employment_details: {
    annual_income: number | null
    created_at: string
    discarded_at: string | null
    employer_country: string | null
    employer_name: string | null
    employer_state: string | null
    employment_status: 'employed' | 'retired' | 'self_employed' | 'student' | 'unemployed'
    id: string
    income_country: string | null
    income_source:
      | 'family_support'
      | 'government_benefits'
      | 'inheritance'
      | 'investments'
      | 'rental_income'
      | 'retirement'
      | 'salary'
      | 'self_employed'
    income_state: string | null
    industry:
      | 'accounting'
      | 'agriculture'
      | 'automotive'
      | 'chemical_manufacturing'
      | 'construction'
      | 'educational_medical'
      | 'food_service'
      | 'finance'
      | 'gasoline'
      | 'health_stores'
      | 'laundry'
      | 'maintenance'
      | 'manufacturing'
      | 'merchant_wholesale'
      | 'mining'
      | 'performing_arts'
      | 'professional_non_legal'
      | 'public_administration'
      | 'publishing'
      | 'real_estate'
      | 'recreation_gambling'
      | 'religious_charity'
      | 'rental_services'
      | 'retail_clothing'
      | 'retail_electronics'
      | 'retail_food'
      | 'retail_furnishing'
      | 'retail_home'
      | 'retail_non_store'
      | 'retail_sporting'
      | 'transportation'
      | 'travel'
      | 'utilities'
    live_mode: boolean
    object: string
    occupation:
      | 'consulting'
      | 'executive'
      | 'finance_accounting'
      | 'food_services'
      | 'government'
      | 'healthcare'
      | 'legal_services'
      | 'manufacturing'
      | 'other'
      | 'sales'
      | 'science_engineering'
      | 'technology'
    source_of_funds:
      | 'alimony'
      | 'annuity'
      | 'business_owner'
      | 'business_revenue'
      | 'debt_financing'
      | 'general_employee'
      | 'government_benefits'
      | 'homemaker'
      | 'inheritance_gift'
      | 'intercompany_loan'
      | 'investment'
      | 'investor_funding'
      | 'legal_settlement'
      | 'lottery'
      | 'real_estate'
      | 'retained_earnings_or_savings'
      | 'retired'
      | 'retirement'
      | 'salary'
      | 'sale_of_business_assets'
      | 'sale_of_real_estate'
      | 'self_employed'
      | 'senior_executive'
      | 'trust_income'
    updated_at: string
    wealth_source:
      | 'business_sale'
      | 'family_support'
      | 'government_benefits'
      | 'inheritance'
      | 'investments'
      | 'other'
      | 'rental_income'
      | 'retirement'
      | 'salary'
      | 'self_employed'
  }
  website: string | null
}
type LegalEntityUpdateRequest = {
  addresses?: LegalEntityAddressCreateRequest[] | undefined
  bank_settings?:
    | {
        backup_withholding_percentage: number | null
        created_at: string
        discarded_at: string | null
        enable_backup_withholding: boolean | null
        id: string
        live_mode: boolean
        object: string
        privacy_opt_out: boolean | null
        regulation_o: boolean | null
        updated_at: string
      }
    | undefined
  business_description?: (string | null) | undefined
  business_designation?: 'exempt_financial_institution' | 'non_operating_business' | undefined
  business_name?: (string | null) | undefined
  citizenship_country?: (string | null) | undefined
  country_of_incorporation?: (string | null) | undefined
  date_formed?: (string | null) | undefined
  date_of_birth?: (string | null) | undefined
  doing_business_as_names?: string[] | undefined
  email?: (string | null) | undefined
  expected_activity_volume?: (number | null) | undefined
  external_id?: (string | null) | undefined
  first_name?: (string | null) | undefined
  identifications?: IdentificationCreateRequest[] | undefined
  industry_classifications?: LegalEntityIndustryClassification[] | undefined
  intended_use?: (string | null) | undefined
  last_name?: (string | null) | undefined
  legal_structure?:
    | 'corporation'
    | 'llc'
    | 'non_profit'
    | 'partnership'
    | 'sole_proprietorship'
    | 'trust'
    | undefined
  listed_exchange?: (string | null) | undefined
  metadata?: { [x: string]: string } | undefined
  middle_name?: (string | null) | undefined
  operating_jurisdictions?: string[] | undefined
  phone_numbers?: { phone_number?: string | undefined }[] | undefined
  politically_exposed_person?: (boolean | null) | undefined
  preferred_name?: (string | null) | undefined
  prefix?: (string | null) | undefined
  primary_social_media_sites?: string[] | undefined
  regulators?: (LegalEntityRegulator[] | null) | undefined
  risk_rating?: 'low' | 'medium' | 'high' | undefined
  service_provider_legal_entity_id?: (string | null) | undefined
  status?: 'pending' | undefined
  suffix?: (string | null) | undefined
  terms_of_use?:
    | ({ accepted_at?: string | undefined; ip_address?: string | undefined } | null)
    | undefined
  third_party_verification?:
    | {
        comment?: (string | null) | undefined
        outcome: 'passed' | 'failed'
        vendor:
          | 'persona'
          | 'middesk'
          | 'alloy'
          | 'idology'
          | 'socure'
          | 'sumsub'
          | 'veriff'
          | 'smarty'
        vendor_verification_id: string
        verification_category:
          | 'legal_name'
          | 'date_of_birth'
          | 'address'
          | 'government_id_number'
          | 'tax_id'
          | 'adverse_media'
        verification_method: string
        verification_time: string
      }
    | undefined
  third_party_verifications?: ThirdPartyVerification[] | undefined
  ticker_symbol?: (string | null) | undefined
  wealth_and_employment_details?:
    | {
        annual_income: number | null
        created_at: string
        discarded_at: string | null
        employer_country: string | null
        employer_name: string | null
        employer_state: string | null
        employment_status: 'employed' | 'retired' | 'self_employed' | 'student' | 'unemployed'
        id: string
        income_country: string | null
        income_source:
          | 'family_support'
          | 'government_benefits'
          | 'inheritance'
          | 'investments'
          | 'rental_income'
          | 'retirement'
          | 'salary'
          | 'self_employed'
        income_state: string | null
        industry:
          | 'accounting'
          | 'agriculture'
          | 'automotive'
          | 'chemical_manufacturing'
          | 'construction'
          | 'educational_medical'
          | 'food_service'
          | 'finance'
          | 'gasoline'
          | 'health_stores'
          | 'laundry'
          | 'maintenance'
          | 'manufacturing'
          | 'merchant_wholesale'
          | 'mining'
          | 'performing_arts'
          | 'professional_non_legal'
          | 'public_administration'
          | 'publishing'
          | 'real_estate'
          | 'recreation_gambling'
          | 'religious_charity'
          | 'rental_services'
          | 'retail_clothing'
          | 'retail_electronics'
          | 'retail_food'
          | 'retail_furnishing'
          | 'retail_home'
          | 'retail_non_store'
          | 'retail_sporting'
          | 'transportation'
          | 'travel'
          | 'utilities'
        live_mode: boolean
        object: string
        occupation:
          | 'consulting'
          | 'executive'
          | 'finance_accounting'
          | 'food_services'
          | 'government'
          | 'healthcare'
          | 'legal_services'
          | 'manufacturing'
          | 'other'
          | 'sales'
          | 'science_engineering'
          | 'technology'
        source_of_funds:
          | 'alimony'
          | 'annuity'
          | 'business_owner'
          | 'business_revenue'
          | 'debt_financing'
          | 'general_employee'
          | 'government_benefits'
          | 'homemaker'
          | 'inheritance_gift'
          | 'intercompany_loan'
          | 'investment'
          | 'investor_funding'
          | 'legal_settlement'
          | 'lottery'
          | 'real_estate'
          | 'retained_earnings_or_savings'
          | 'retired'
          | 'retirement'
          | 'salary'
          | 'sale_of_business_assets'
          | 'sale_of_real_estate'
          | 'self_employed'
          | 'senior_executive'
          | 'trust_income'
        updated_at: string
        wealth_source:
          | 'business_sale'
          | 'family_support'
          | 'government_benefits'
          | 'inheritance'
          | 'investments'
          | 'other'
          | 'rental_income'
          | 'retirement'
          | 'salary'
          | 'self_employed'
      }
    | undefined
  website?: (string | null) | undefined
}
type LegalEntityAssociationCreateRequest = {
  child_legal_entity?: ChildLegalEntityCreate | undefined
  child_legal_entity_id?: string | undefined
  ownership_percentage?: (number | null) | undefined
  parent_legal_entity_id: string
  relationship_types: ('authorized_signer' | 'beneficial_owner' | 'control_person')[]
  title?: (string | null) | undefined
}
type PaymentAction = {
  actionable_id: string | null
  actionable_type: string | null
  created_at: string
  details: { [x: string]: unknown }
  id: string
  internal_account_id: string
  live_mode: boolean
  object: string
  status: string
  type: string
  updated_at: string
}
type PaymentActionCreateRequest = {
  actionable_id?: string | undefined
  actionable_type?: string | undefined
  details?: { [x: string]: unknown } | undefined
  internal_account_id?: string | undefined
  type: string
}
type PaymentActionUpdateRequest = {
  status:
    | 'pending'
    | 'processable'
    | 'processing'
    | 'sent'
    | 'acknowledged'
    | 'failed'
    | 'cancelled'
}
type PaymentFlow = {
  amount?: number | undefined
  client_token?: string | undefined
  counterparty_id?: (string | null) | undefined
  created_at?: string | undefined
  currency?: string | undefined
  direction?: 'credit' | 'debit' | undefined
  due_date?: (string | null) | undefined
  effective_date_selection_enabled?: boolean | undefined
  existing_external_accounts_filter?: 'verified' | undefined
  external_account_collection?: 'disabled' | 'enabled' | undefined
  id?: string | undefined
  live_mode?: boolean | undefined
  object?: string | undefined
  originating_account_id?: (string | null) | undefined
  payment_order_id?: (string | null) | undefined
  receiving_account_id?: (string | null) | undefined
  selected_effective_date?: (string | null) | undefined
  status?: 'cancelled' | 'completed' | 'expired' | 'pending' | undefined
  updated_at?: string | undefined
}
type PaymentFlowUpdateRequest = { status: 'cancelled' }
type PaymentOrderDocumentCreateRequest = {
  document_type?: string | undefined
  documentable_id?: string | undefined
  documentable_type?:
    | 'connection'
    | 'counterparty'
    | 'expected_payment'
    | 'identification'
    | 'incoming_payment_detail'
    | 'internal_account'
    | 'legal_entity'
    | 'payment_order'
    | 'return'
    | 'transaction'
    | undefined
  file: File
}
type PaymentOrderCreateRequest = {
  accounting?: Accounting | undefined
  accounting_category_id?: (string | null) | undefined
  accounting_ledger_class_id?: (string | null) | undefined
  amount: number
  charge_bearer?: 'shared' | 'sender' | 'receiver' | undefined
  currency?: Currency | undefined
  description?: (string | null) | undefined
  direction: 'credit' | 'debit'
  documents?: PaymentOrderDocumentCreateRequest[] | undefined
  effective_date?: string | undefined
  end_to_end_id?: (string | null) | undefined
  expires_at?: (string | null) | undefined
  external_id?: (string | null) | undefined
  fallback_type?: 'ach' | undefined
  foreign_exchange_contract?: (string | null) | undefined
  foreign_exchange_indicator?: 'fixed_to_variable' | 'variable_to_fixed' | undefined
  ledger_transaction?: LedgerTransactionCreateRequest | undefined
  ledger_transaction_id?: string | undefined
  line_items?: LineItemRequest[] | undefined
  metadata?: { [x: string]: string } | undefined
  nsf_protected?: boolean | undefined
  originating_account_id: string
  originating_party_address?:
    | ({
        country?: (string | null) | undefined
        line1?: (string | null) | undefined
        line2?: (string | null) | undefined
        locality?: (string | null) | undefined
        postal_code?: (string | null) | undefined
        region?: (string | null) | undefined
      } | null)
    | undefined
  originating_party_name?: (string | null) | undefined
  originating_secondary_party_name?: (string | null) | undefined
  priority?: 'high' | 'normal' | undefined
  process_after?: (string | null) | undefined
  purpose?: (string | null) | undefined
  receiving_account?:
    | {
        account_details?:
          | {
              account_number: string
              account_number_type?:
                | 'arbitrum_address'
                | 'au_number'
                | 'avalanche_address'
                | 'base_address'
                | 'card_token'
                | 'clabe'
                | 'ethereum_address'
                | 'hk_number'
                | 'iban'
                | 'id_number'
                | 'nz_number'
                | 'other'
                | 'polygon_address'
                | 'sg_number'
                | 'solana_address'
                | undefined
            }[]
          | undefined
        account_type?: ExternalAccountType | undefined
        contact_details?: ContactDetailCreateRequest[] | undefined
        external_id?: (string | null) | undefined
        ledger_account?: LedgerAccountCreateRequest | undefined
        metadata?: { [x: string]: string } | undefined
        name?: (string | null) | undefined
        party_address?: AddressRequest | undefined
        party_identifier?: string | undefined
        party_name?: string | undefined
        party_type?: 'business' | 'individual' | undefined
        plaid_processor_token?: string | undefined
        routing_details?:
          | {
              payment_type?:
                | 'ach'
                | 'au_becs'
                | 'bacs'
                | 'book'
                | 'card'
                | 'chats'
                | 'check'
                | 'cross_border'
                | 'dk_nets'
                | 'eft'
                | 'gb_fps'
                | 'masav'
                | 'mx_ccen'
                | 'neft'
                | 'nics'
                | 'nz_becs'
                | 'pl_elixir'
                | 'rtp'
                | 'se_bankgirot'
                | 'sepa'
                | 'sg_giro'
                | 'sic'
                | 'stablecoin'
                | 'wire'
                | 'zengin'
                | undefined
              routing_number: string
              routing_number_type:
                | 'aba'
                | 'au_bsb'
                | 'br_codigo'
                | 'ca_cpa'
                | 'chips'
                | 'cnaps'
                | 'dk_interbank_clearing_code'
                | 'gb_sort_code'
                | 'hk_interbank_clearing_code'
                | 'il_bank_code'
                | 'in_ifsc'
                | 'jp_zengin_code'
                | 'my_branch_code'
                | 'mx_bank_identifier'
                | 'nz_national_clearing_code'
                | 'pl_national_clearing_code'
                | 'se_bankgiro_clearing_code'
                | 'sg_interbank_clearing_code'
                | 'swift'
                | 'vasp'
                | 'za_national_clearing_code'
            }[]
          | undefined
      }
    | undefined
  receiving_account_id?: string | undefined
  reconciliation_status?: 'unreconciled' | 'tentatively_reconciled' | 'reconciled' | undefined
  remittance_information?: (string | null) | undefined
  send_remittance_advice?: (boolean | null) | undefined
  statement_descriptor?: (string | null) | undefined
  subtype?: PaymentOrderSubtype | undefined
  transaction_monitoring_enabled?: boolean | undefined
  type: PaymentOrderType
  ultimate_originating_account_id?: string | undefined
  ultimate_originating_party_address?:
    | ({
        country?: string | undefined
        line1?: string | undefined
        line2?: string | undefined
        locality?: string | undefined
        postal_code?: string | undefined
        region?: string | undefined
      } | null)
    | undefined
  ultimate_originating_party_identifier?: (string | null) | undefined
  ultimate_originating_party_name?: (string | null) | undefined
  ultimate_receiving_party_identifier?: (string | null) | undefined
  ultimate_receiving_party_name?: (string | null) | undefined
  vendor_attributes?: { [x: string]: unknown } | undefined
}
type AsyncResponse = { id: string; object: string }
type PaymentOrderUpdateRequest = {
  accounting?: Accounting | undefined
  accounting_category_id?: (string | null) | undefined
  accounting_ledger_class_id?: (string | null) | undefined
  amount?: number | undefined
  charge_bearer?: 'shared' | 'sender' | 'receiver' | undefined
  counterparty_id?: (string | null) | undefined
  currency?: Currency | undefined
  description?: (string | null) | undefined
  direction?: 'credit' | 'debit' | undefined
  effective_date?: string | undefined
  end_to_end_id?: (string | null) | undefined
  expires_at?: (string | null) | undefined
  external_id?: (string | null) | undefined
  fallback_type?: 'ach' | undefined
  foreign_exchange_contract?: (string | null) | undefined
  foreign_exchange_indicator?: 'fixed_to_variable' | 'variable_to_fixed' | undefined
  line_items?: LineItemRequest[] | undefined
  metadata?: { [x: string]: string } | undefined
  nsf_protected?: boolean | undefined
  originating_account_id?: string | undefined
  originating_party_address?:
    | ({
        country?: (string | null) | undefined
        line1?: (string | null) | undefined
        line2?: (string | null) | undefined
        locality?: (string | null) | undefined
        postal_code?: (string | null) | undefined
        region?: (string | null) | undefined
      } | null)
    | undefined
  originating_party_name?: (string | null) | undefined
  originating_secondary_party_name?: (string | null) | undefined
  priority?: 'high' | 'normal' | undefined
  process_after?: (string | null) | undefined
  purpose?: (string | null) | undefined
  receiving_account?:
    | {
        account_details?:
          | {
              account_number: string
              account_number_type?:
                | 'arbitrum_address'
                | 'au_number'
                | 'avalanche_address'
                | 'base_address'
                | 'card_token'
                | 'clabe'
                | 'ethereum_address'
                | 'hk_number'
                | 'iban'
                | 'id_number'
                | 'nz_number'
                | 'other'
                | 'polygon_address'
                | 'sg_number'
                | 'solana_address'
                | undefined
            }[]
          | undefined
        account_type?: ExternalAccountType | undefined
        contact_details?: ContactDetailCreateRequest[] | undefined
        external_id?: (string | null) | undefined
        ledger_account?: LedgerAccountCreateRequest | undefined
        metadata?: { [x: string]: string } | undefined
        name?: (string | null) | undefined
        party_address?: AddressRequest | undefined
        party_identifier?: string | undefined
        party_name?: string | undefined
        party_type?: 'business' | 'individual' | undefined
        plaid_processor_token?: string | undefined
        routing_details?:
          | {
              payment_type?:
                | 'ach'
                | 'au_becs'
                | 'bacs'
                | 'book'
                | 'card'
                | 'chats'
                | 'check'
                | 'cross_border'
                | 'dk_nets'
                | 'eft'
                | 'gb_fps'
                | 'masav'
                | 'mx_ccen'
                | 'neft'
                | 'nics'
                | 'nz_becs'
                | 'pl_elixir'
                | 'rtp'
                | 'se_bankgirot'
                | 'sepa'
                | 'sg_giro'
                | 'sic'
                | 'stablecoin'
                | 'wire'
                | 'zengin'
                | undefined
              routing_number: string
              routing_number_type:
                | 'aba'
                | 'au_bsb'
                | 'br_codigo'
                | 'ca_cpa'
                | 'chips'
                | 'cnaps'
                | 'dk_interbank_clearing_code'
                | 'gb_sort_code'
                | 'hk_interbank_clearing_code'
                | 'il_bank_code'
                | 'in_ifsc'
                | 'jp_zengin_code'
                | 'my_branch_code'
                | 'mx_bank_identifier'
                | 'nz_national_clearing_code'
                | 'pl_national_clearing_code'
                | 'se_bankgiro_clearing_code'
                | 'sg_interbank_clearing_code'
                | 'swift'
                | 'vasp'
                | 'za_national_clearing_code'
            }[]
          | undefined
      }
    | undefined
  receiving_account_id?: string | undefined
  reconciliation_status?: 'unreconciled' | 'tentatively_reconciled' | 'reconciled' | undefined
  remittance_information?: (string | null) | undefined
  send_remittance_advice?: (boolean | null) | undefined
  statement_descriptor?: (string | null) | undefined
  status?:
    | 'approved'
    | 'cancelled'
    | 'completed'
    | 'denied'
    | 'failed'
    | 'held'
    | 'needs_approval'
    | 'pending'
    | 'processing'
    | 'returned'
    | 'reversed'
    | 'sent'
    | 'stopped'
    | undefined
  subtype?: PaymentOrderSubtype | undefined
  type?: PaymentOrderType | undefined
  ultimate_originating_party_identifier?: (string | null) | undefined
  ultimate_originating_party_name?: (string | null) | undefined
  ultimate_receiving_party_identifier?: (string | null) | undefined
  ultimate_receiving_party_name?: (string | null) | undefined
}
type Reversal = {
  created_at: string
  id: string
  internal_account_id: string | null
  ledger_transaction_id: string | null
  live_mode: boolean
  metadata: { [x: string]: string }
  object: string
  payment_order_id: string | null
  reason:
    | 'duplicate'
    | 'incorrect_amount'
    | 'incorrect_receiving_account'
    | 'date_earlier_than_intended'
    | 'date_later_than_intended'
  reconciliation_status: 'unreconciled' | 'tentatively_reconciled' | 'reconciled'
  status: 'cancelled' | 'completed' | 'failed' | 'pending' | 'processing' | 'returned' | 'sent'
  transaction_ids: (string | null)[]
  updated_at: string
}
type ReversalCreateRequest = {
  ledger_transaction?: LedgerTransactionCreateRequest | undefined
  metadata?: { [x: string]: string } | undefined
  reason:
    | 'duplicate'
    | 'incorrect_amount'
    | 'incorrect_receiving_account'
    | 'date_earlier_than_intended'
    | 'date_later_than_intended'
}
type PaymentReferenceObject = {
  created_at: string
  id: string
  live_mode: boolean
  object: string
  reference_number: string
  reference_number_type:
    | 'ach_original_trace_number'
    | 'ach_trace_number'
    | 'bankprov_payment_activity_date'
    | 'bankprov_payment_id'
    | 'blockchain_transaction_hash'
    | 'blockchain_transaction_index'
    | 'bnk_dev_prenotification_id'
    | 'bnk_dev_transfer_id'
    | 'bny_mellon_transaction_reference_number'
    | 'bofa_end_to_end_id'
    | 'bofa_neft_clearing_reference_number'
    | 'bofa_transaction_id'
    | 'check_number'
    | 'chips_uid'
    | 'citibank_reference_number'
    | 'citibank_worldlink_clearing_system_reference_number'
    | 'column_fx_quote_id'
    | 'column_reversal_pair_transfer_id'
    | 'column_transfer_id'
    | 'cross_river_card_network'
    | 'cross_river_card_trace_number'
    | 'cross_river_core_transaction_id'
    | 'cross_river_fed_batch_id'
    | 'cross_river_payment_id'
    | 'cross_river_retrieval_reference_id'
    | 'cross_river_service_message'
    | 'cross_river_transaction_id'
    | 'currencycloud_conversion_id'
    | 'currencycloud_payment_id'
    | 'eft_trace_number'
    | 'end_to_end_identification'
    | 'evolve_core_batch'
    | 'evolve_core_file_key'
    | 'evolve_core_seq'
    | 'evolve_transaction_id'
    | 'fake_vendor_payment_id'
    | 'fedwire_imad'
    | 'fedwire_omad'
    | 'first_republic_internal_id'
    | 'goldman_sachs_collection_request_id'
    | 'goldman_sachs_end_to_end_id'
    | 'goldman_sachs_payment_request_id'
    | 'goldman_sachs_request_id'
    | 'goldman_sachs_unique_payment_id'
    | 'instruction_identification'
    | 'jpmc_ccn'
    | 'jpmc_clearing_system_reference'
    | 'jpmc_customer_reference_id'
    | 'jpmc_end_to_end_id'
    | 'jpmc_firm_root_id'
    | 'jpmc_fx_trn_id'
    | 'jpmc_p3_id'
    | 'jpmc_payment_batch_id'
    | 'jpmc_payment_information_id'
    | 'jpmc_payment_returned_datetime'
    | 'jpmc_transaction_reference_number'
    | 'lob_check_id'
    | 'other'
    | 'partial_swift_mir'
    | 'paxos_crypto_withdrawal_id'
    | 'paxos_fiat_withdrawal_id'
    | 'paxos_group_id'
    | 'paxos_orchestration_id'
    | 'paxos_transfer_id'
    | 'pnc_clearing_reference'
    | 'pnc_instruction_id'
    | 'pnc_multipayment_id'
    | 'pnc_payment_trace_id'
    | 'pnc_request_for_payment_id'
    | 'pnc_transaction_reference_number'
    | 'rbc_wire_reference_id'
    | 'return_identification'
    | 'rtp_instruction_id'
    | 'silvergate_payment_id'
    | 'svb_end_to_end_id'
    | 'svb_payment_id'
    | 'swift_mir'
    | 'swift_uetr'
    | 'transaction_identification'
    | 'turnkey_activity_id'
    | 'turnkey_send_transaction_status_id'
    | 'uetr'
    | 'umb_product_partner_account_number'
    | 'usbank_payment_application_reference_id'
    | 'usbank_payment_id'
    | 'usbank_pending_rtp_payment_id'
    | 'usbank_posted_rtp_payment_id'
    | 'wells_fargo_end_to_end_id'
    | 'wells_fargo_payment_id'
    | 'wells_fargo_trace_number'
    | 'wells_fargo_uetr'
    | 'western_alliance_payment_id'
    | 'western_alliance_transaction_id'
    | 'western_alliance_wire_confirmation_number'
  referenceable_id: string
  referenceable_type:
    | 'payment_order'
    | 'reversal'
    | 'return'
    | 'incoming_payment_detail'
    | 'transaction'
  updated_at: string
}
type PingResponse = { ping: string }
type Return = {
  additional_information?: (string | null) | undefined
  amount: number
  code:
    | '901'
    | '902'
    | '903'
    | '904'
    | '905'
    | '907'
    | '908'
    | '909'
    | '910'
    | '911'
    | '912'
    | '914'
    | 'C01'
    | 'C02'
    | 'C03'
    | 'C05'
    | 'C06'
    | 'C07'
    | 'C08'
    | 'C09'
    | 'C13'
    | 'C14'
    | 'R01'
    | 'R02'
    | 'R03'
    | 'R04'
    | 'R05'
    | 'R06'
    | 'R07'
    | 'R08'
    | 'R09'
    | 'R10'
    | 'R11'
    | 'R12'
    | 'R13'
    | 'R14'
    | 'R15'
    | 'R16'
    | 'R17'
    | 'R18'
    | 'R19'
    | 'R20'
    | 'R21'
    | 'R22'
    | 'R23'
    | 'R24'
    | 'R25'
    | 'R26'
    | 'R27'
    | 'R28'
    | 'R29'
    | 'R30'
    | 'R31'
    | 'R32'
    | 'R33'
    | 'R34'
    | 'R35'
    | 'R36'
    | 'R37'
    | 'R38'
    | 'R39'
    | 'R40'
    | 'R41'
    | 'R42'
    | 'R43'
    | 'R44'
    | 'R45'
    | 'R46'
    | 'R47'
    | 'R50'
    | 'R51'
    | 'R52'
    | 'R53'
    | 'R61'
    | 'R62'
    | 'R67'
    | 'R68'
    | 'R69'
    | 'R70'
    | 'R71'
    | 'R72'
    | 'R73'
    | 'R74'
    | 'R75'
    | 'R76'
    | 'R77'
    | 'R80'
    | 'R81'
    | 'R82'
    | 'R83'
    | 'R84'
    | 'R85'
    | 'currencycloud'
  corrections: {
    account_number?: (string | null) | undefined
    company_id?: (string | null) | undefined
    company_name?: (string | null) | undefined
    individual_identification_number?: (string | null) | undefined
    routing_number?: (string | null) | undefined
    transaction_code?: (string | null) | undefined
  } | null
  created_at: string
  currency: Currency
  current_return: {}
  data?: ({ [x: string]: unknown } | null) | undefined
  date_of_death: string | null
  discarded_at: string | null
  failure_reason: string | null
  id: string
  internal_account_id: string | null
  ledger_transaction_id: string | null
  live_mode: boolean
  object: string
  reason: string | null
  reconciliation_status: 'unreconciled' | 'tentatively_reconciled' | 'reconciled'
  reference_numbers: PaymentReference[]
  returnable_id: string | null
  returnable_type: 'incoming_payment_detail' | 'payment_order' | 'return' | 'reversal'
  role: 'originating' | 'receiving'
  status: 'cancelled' | 'completed' | 'failed' | 'pending' | 'processing' | 'returned' | 'sent'
  transaction_id: string | null
  transaction_line_item_id: string | null
  type:
    | 'ach'
    | 'ach_noc'
    | 'au_becs'
    | 'bacs'
    | 'book'
    | 'check'
    | 'cross_border'
    | 'eft'
    | 'gb_fps'
    | 'manual'
    | 'neft'
    | 'nz_becs'
    | 'rtp'
    | 'sepa'
    | 'stablecoin'
    | 'wire'
    | 'zengin'
  updated_at: string
}
type ReturnCreateRequest = {
  additional_information?: (string | null) | undefined
  code?:
    | '901'
    | '902'
    | '903'
    | '904'
    | '905'
    | '907'
    | '908'
    | '909'
    | '910'
    | '911'
    | '912'
    | '914'
    | 'C01'
    | 'C02'
    | 'C03'
    | 'C05'
    | 'C06'
    | 'C07'
    | 'C08'
    | 'C09'
    | 'C13'
    | 'C14'
    | 'R01'
    | 'R02'
    | 'R03'
    | 'R04'
    | 'R05'
    | 'R06'
    | 'R07'
    | 'R08'
    | 'R09'
    | 'R10'
    | 'R11'
    | 'R12'
    | 'R13'
    | 'R14'
    | 'R15'
    | 'R16'
    | 'R17'
    | 'R18'
    | 'R19'
    | 'R20'
    | 'R21'
    | 'R22'
    | 'R23'
    | 'R24'
    | 'R25'
    | 'R26'
    | 'R27'
    | 'R28'
    | 'R29'
    | 'R30'
    | 'R31'
    | 'R32'
    | 'R33'
    | 'R34'
    | 'R35'
    | 'R36'
    | 'R37'
    | 'R38'
    | 'R39'
    | 'R40'
    | 'R41'
    | 'R42'
    | 'R43'
    | 'R44'
    | 'R45'
    | 'R46'
    | 'R47'
    | 'R50'
    | 'R51'
    | 'R52'
    | 'R53'
    | 'R61'
    | 'R62'
    | 'R67'
    | 'R68'
    | 'R69'
    | 'R70'
    | 'R71'
    | 'R72'
    | 'R73'
    | 'R74'
    | 'R75'
    | 'R76'
    | 'R77'
    | 'R80'
    | 'R81'
    | 'R82'
    | 'R83'
    | 'R84'
    | 'R85'
    | 'currencycloud'
    | undefined
  corrections?:
    | ({
        account_number?: (string | null) | undefined
        company_id?: (string | null) | undefined
        company_name?: (string | null) | undefined
        individual_identification_number?: (string | null) | undefined
        routing_number?: (string | null) | undefined
        transaction_code?: (string | null) | undefined
      } | null)
    | undefined
  data?: ({ [x: string]: unknown } | null) | undefined
  date_of_death?: (string | null) | undefined
  ledger_transaction?: LedgerTransactionCreateRequest | undefined
  reason?: (string | null) | undefined
  reconciliation_status?: 'unreconciled' | 'tentatively_reconciled' | 'reconciled' | undefined
  returnable_id: string | null
  returnable_type: 'incoming_payment_detail'
}
type CaseResolveRequest = {
  category?:
    | 'onboarding.proof_of_address_failure'
    | 'onboarding.business_registry_verification_failure'
    | 'onboarding.tin_check_failure'
    | 'onboarding.ssn_check_failure'
    | 'onboarding.database_failure'
    | undefined
}
type IncomingPaymentDetailCreateRequest = {
  amount?: number | undefined
  as_of_date?: (string | null) | undefined
  currency?: {} | undefined
  data?: ({ [x: string]: unknown } | null) | undefined
  description?: (string | null) | undefined
  direction?: 'credit' | 'debit' | undefined
  internal_account_id?: string | undefined
  subtype?: (string | null) | undefined
  type:
    | 'ach'
    | 'au_becs'
    | 'bacs'
    | 'book'
    | 'check'
    | 'eft'
    | 'neft'
    | 'nz_becs'
    | 'rtp'
    | 'sepa'
    | 'stablecoin'
    | 'wire'
    | 'zengin'
  virtual_account_id?: (string | null) | undefined
}
type LegalEntityUpdateStatusRequest = { status: 'active' | 'suspended' | 'denied' }
type TransactionLineItem = {
  amount: number
  counterparty_id: string | null
  created_at: string
  description: string
  discarded_at: string | null
  expected_payment_id: string | null
  id: string
  live_mode: boolean
  object: string
  reconcilable: boolean
  reconciliation_group_id: string | null
  transactable_id: string | null
  transactable_type:
    | 'incoming_payment_detail'
    | 'payment_order'
    | 'payment_order_attempt'
    | 'return'
    | 'reversal'
  transaction_id: string
  type: 'originating' | 'receiving'
  updated_at: string
}
type TransactionLineItemCreateRequest = {
  amount: number
  expected_payment_id: string
  transaction_id: string
}
type TransactionUpdateRequest = { metadata?: { [x: string]: string } | undefined }
type RoutingNumberLookupRequest = {
  bank_address?: AddressRequest | undefined
  bank_name?: string | undefined
  routing_number?: string | undefined
  routing_number_type?:
    | 'aba'
    | 'au_bsb'
    | 'ca_cpa'
    | 'gb_sort_code'
    | 'in_ifsc'
    | 'nz_national_clearing_code'
    | 'se_bankgiro_clearing_code'
    | 'swift'
    | 'vasp'
    | 'za_national_clearing_code'
    | undefined
  sanctions?: { [x: string]: unknown } | undefined
  supported_payment_types?:
    | (
        | 'ach'
        | 'au_becs'
        | 'bacs'
        | 'book'
        | 'card'
        | 'chats'
        | 'check'
        | 'cross_border'
        | 'dk_nets'
        | 'eft'
        | 'gb_fps'
        | 'masav'
        | 'mx_ccen'
        | 'neft'
        | 'nics'
        | 'nz_becs'
        | 'pl_elixir'
        | 'rtp'
        | 'se_bankgirot'
        | 'sepa'
        | 'sg_giro'
        | 'sic'
        | 'stablecoin'
        | 'wire'
        | 'zengin'
      )[]
    | undefined
}
type VirtualAccountSetting = {
  created_at: string
  external_id: string | null
  id: string
  live_mode: boolean
  object: string
  updated_at: string
}
type VirtualAccountSettingCreateRequest = {
  allocation_identifier?: (string | null) | undefined
  allocation_length?: (number | null) | undefined
  allocation_range_end?: (string | null) | undefined
  allocation_range_start?: (string | null) | undefined
  allocation_type: string
  external_id?: (string | null) | undefined
  generated_allocation_identifier_length?: (number | null) | undefined
  internal_account_id: string
}
type AccountDetailCreateRequest = {
  account_number: string
  account_number_type?:
    | 'arbitrum_address'
    | 'au_number'
    | 'avalanche_address'
    | 'base_address'
    | 'card_token'
    | 'clabe'
    | 'ethereum_address'
    | 'hk_number'
    | 'iban'
    | 'id_number'
    | 'nz_number'
    | 'other'
    | 'polygon_address'
    | 'sg_number'
    | 'solana_address'
    | undefined
}
type RoutingDetailCreateRequest = {
  payment_type?:
    | 'ach'
    | 'au_becs'
    | 'bacs'
    | 'book'
    | 'card'
    | 'chats'
    | 'check'
    | 'cross_border'
    | 'dk_nets'
    | 'eft'
    | 'gb_fps'
    | 'masav'
    | 'mx_ccen'
    | 'neft'
    | 'nics'
    | 'nz_becs'
    | 'pl_elixir'
    | 'rtp'
    | 'se_bankgirot'
    | 'sepa'
    | 'sg_giro'
    | 'sic'
    | 'stablecoin'
    | 'wire'
    | 'zengin'
    | undefined
  routing_number: string
  routing_number_type:
    | 'aba'
    | 'au_bsb'
    | 'br_codigo'
    | 'ca_cpa'
    | 'chips'
    | 'cnaps'
    | 'dk_interbank_clearing_code'
    | 'gb_sort_code'
    | 'hk_interbank_clearing_code'
    | 'il_bank_code'
    | 'in_ifsc'
    | 'jp_zengin_code'
    | 'mx_bank_identifier'
    | 'my_branch_code'
    | 'nz_national_clearing_code'
    | 'pl_national_clearing_code'
    | 'se_bankgiro_clearing_code'
    | 'sg_interbank_clearing_code'
    | 'swift'
    | 'vasp'
    | 'za_national_clearing_code'
}
type VirtualAccountCreateRequest = {
  account_details?: AccountDetailCreateRequest[] | undefined
  counterparty_id?: string | undefined
  credit_ledger_account_id?: string | undefined
  debit_ledger_account_id?: string | undefined
  description?: string | undefined
  external_id?: (string | null) | undefined
  internal_account_id: string
  ledger_account?: LedgerAccountCreateRequest | undefined
  ledger_account_id?: string | undefined
  metadata?: { [x: string]: string } | undefined
  name: string
  party_address?: AddressRequest | undefined
  routing_details?: RoutingDetailCreateRequest[] | undefined
  virtual_account_setting_id?: string | undefined
}
type VirtualAccountUpdateRequest = {
  counterparty_id?: string | undefined
  ledger_account_id?: string | undefined
  metadata?: { [x: string]: string } | undefined
  name?: (string | null) | undefined
  party_address?:
    | {
        country?: (string | null) | undefined
        line1?: (string | null) | undefined
        line2?: (string | null) | undefined
        locality?: (string | null) | undefined
        postal_code?: (string | null) | undefined
        region?: (string | null) | undefined
      }
    | undefined
}
type AccountsType = 'external_accounts' | 'internal_accounts'
type LegacyDocumentCreateRequest = { document_type?: string | undefined; file: File }
type LineItem = {
  accounting: Accounting
  accounting_category_id: string | null
  accounting_ledger_class_id: string | null
  amount: number
  created_at: string
  description: string | null
  id: string
  itemizable_id: string
  itemizable_type: 'ExpectedPayment' | 'PaymentOrder'
  live_mode: boolean
  metadata: { [x: string]: string }
  object: string
  updated_at: string
}
type LineItemUpdateRequest = { metadata?: { [x: string]: string } | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/api/account_collection_flows': {
      $get:
        | {
            input: {
              query: {
                after_cursor?: (string | null) | undefined
                client_token?: string | undefined
                counterparty_id?: string | undefined
                external_account_id?: string | undefined
                per_page?: number | undefined
                status?: string | undefined
              }
            }
            output: AccountCollectionFlow[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                after_cursor?: (string | null) | undefined
                client_token?: string | undefined
                counterparty_id?: string | undefined
                external_account_id?: string | undefined
                per_page?: number | undefined
                status?: string | undefined
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                after_cursor?: (string | null) | undefined
                client_token?: string | undefined
                counterparty_id?: string | undefined
                external_account_id?: string | undefined
                per_page?: number | undefined
                status?: string | undefined
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                after_cursor?: (string | null) | undefined
                client_token?: string | undefined
                counterparty_id?: string | undefined
                external_account_id?: string | undefined
                per_page?: number | undefined
                status?: string | undefined
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                after_cursor?: (string | null) | undefined
                client_token?: string | undefined
                counterparty_id?: string | undefined
                external_account_id?: string | undefined
                per_page?: number | undefined
                status?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
      $post:
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: AccountCollectionFlowCreateRequest
            }
            output: AccountCollectionFlow
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: AccountCollectionFlowCreateRequest
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: AccountCollectionFlowCreateRequest
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: AccountCollectionFlowCreateRequest
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: AccountCollectionFlowCreateRequest
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: AccountCollectionFlowCreateRequest
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: AccountCollectionFlowCreateRequest
            }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/account_collection_flows/:id': {
      $get:
        | {
            input: { param: { id: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            }
            output: AccountCollectionFlow
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 429
          }
      $patch:
        | {
            input: { param: { id: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            } & { json: AccountCollectionFlowUpdateRequest }
            output: AccountCollectionFlow
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            } & { json: AccountCollectionFlowUpdateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            } & { json: AccountCollectionFlowUpdateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            } & { json: AccountCollectionFlowUpdateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            } & { json: AccountCollectionFlowUpdateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            } & { json: AccountCollectionFlowUpdateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            } & { json: AccountCollectionFlowUpdateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            } & { json: AccountCollectionFlowUpdateRequest }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/bulk_requests': {
      $get:
        | {
            input: {
              query: {
                action_type?: 'create' | 'update' | 'delete' | undefined
                after_cursor?: (string | null) | undefined
                per_page?: number | undefined
                resource_type?:
                  | 'payment_order'
                  | 'ledger_account'
                  | 'ledger_transaction'
                  | 'expected_payment'
                  | 'transaction'
                  | 'transaction_line_item'
                  | undefined
                status?: 'pending' | 'processing' | 'completed' | undefined
                metadata?: { [x: string]: string } | undefined
              }
            }
            output: BulkRequest[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                action_type?: 'create' | 'update' | 'delete' | undefined
                after_cursor?: (string | null) | undefined
                per_page?: number | undefined
                resource_type?:
                  | 'payment_order'
                  | 'ledger_account'
                  | 'ledger_transaction'
                  | 'expected_payment'
                  | 'transaction'
                  | 'transaction_line_item'
                  | undefined
                status?: 'pending' | 'processing' | 'completed' | undefined
                metadata?: { [x: string]: string } | undefined
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                action_type?: 'create' | 'update' | 'delete' | undefined
                after_cursor?: (string | null) | undefined
                per_page?: number | undefined
                resource_type?:
                  | 'payment_order'
                  | 'ledger_account'
                  | 'ledger_transaction'
                  | 'expected_payment'
                  | 'transaction'
                  | 'transaction_line_item'
                  | undefined
                status?: 'pending' | 'processing' | 'completed' | undefined
                metadata?: { [x: string]: string } | undefined
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                action_type?: 'create' | 'update' | 'delete' | undefined
                after_cursor?: (string | null) | undefined
                per_page?: number | undefined
                resource_type?:
                  | 'payment_order'
                  | 'ledger_account'
                  | 'ledger_transaction'
                  | 'expected_payment'
                  | 'transaction'
                  | 'transaction_line_item'
                  | undefined
                status?: 'pending' | 'processing' | 'completed' | undefined
                metadata?: { [x: string]: string } | undefined
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                action_type?: 'create' | 'update' | 'delete' | undefined
                after_cursor?: (string | null) | undefined
                per_page?: number | undefined
                resource_type?:
                  | 'payment_order'
                  | 'ledger_account'
                  | 'ledger_transaction'
                  | 'expected_payment'
                  | 'transaction'
                  | 'transaction_line_item'
                  | undefined
                status?: 'pending' | 'processing' | 'completed' | undefined
                metadata?: { [x: string]: string } | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
      $post:
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: BulkRequestCreateRequest
            }
            output: BulkRequest
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: BulkRequestCreateRequest
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: BulkRequestCreateRequest
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: BulkRequestCreateRequest
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: BulkRequestCreateRequest
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: BulkRequestCreateRequest
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: BulkRequestCreateRequest
            }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/bulk_requests/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: BulkRequest
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
    }
  } & {
    '/api/bulk_results': {
      $get:
        | {
            input: {
              query: {
                after_cursor?: (string | null) | undefined
                entity_id?: string | undefined
                entity_type?:
                  | 'payment_order'
                  | 'ledger_account'
                  | 'ledger_transaction'
                  | 'expected_payment'
                  | 'transaction'
                  | 'transaction_line_item'
                  | 'bulk_error'
                  | undefined
                per_page?: number | undefined
                request_id?: string | undefined
                request_type?: 'bulk_request' | undefined
                status?: 'pending' | 'successful' | 'failed' | undefined
              }
            }
            output: BulkResult[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                after_cursor?: (string | null) | undefined
                entity_id?: string | undefined
                entity_type?:
                  | 'payment_order'
                  | 'ledger_account'
                  | 'ledger_transaction'
                  | 'expected_payment'
                  | 'transaction'
                  | 'transaction_line_item'
                  | 'bulk_error'
                  | undefined
                per_page?: number | undefined
                request_id?: string | undefined
                request_type?: 'bulk_request' | undefined
                status?: 'pending' | 'successful' | 'failed' | undefined
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                after_cursor?: (string | null) | undefined
                entity_id?: string | undefined
                entity_type?:
                  | 'payment_order'
                  | 'ledger_account'
                  | 'ledger_transaction'
                  | 'expected_payment'
                  | 'transaction'
                  | 'transaction_line_item'
                  | 'bulk_error'
                  | undefined
                per_page?: number | undefined
                request_id?: string | undefined
                request_type?: 'bulk_request' | undefined
                status?: 'pending' | 'successful' | 'failed' | undefined
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                after_cursor?: (string | null) | undefined
                entity_id?: string | undefined
                entity_type?:
                  | 'payment_order'
                  | 'ledger_account'
                  | 'ledger_transaction'
                  | 'expected_payment'
                  | 'transaction'
                  | 'transaction_line_item'
                  | 'bulk_error'
                  | undefined
                per_page?: number | undefined
                request_id?: string | undefined
                request_type?: 'bulk_request' | undefined
                status?: 'pending' | 'successful' | 'failed' | undefined
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                after_cursor?: (string | null) | undefined
                entity_id?: string | undefined
                entity_type?:
                  | 'payment_order'
                  | 'ledger_account'
                  | 'ledger_transaction'
                  | 'expected_payment'
                  | 'transaction'
                  | 'transaction_line_item'
                  | 'bulk_error'
                  | undefined
                per_page?: number | undefined
                request_id?: string | undefined
                request_type?: 'bulk_request' | undefined
                status?: 'pending' | 'successful' | 'failed' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/bulk_results/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: BulkResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
    }
  } & {
    '/api/cases': {
      $get:
        | {
            input: {
              query: {
                after_cursor?: (string | null) | undefined
                per_page?: number | undefined
                status?: 'open' | 'resolved' | undefined
                subject_id?: string | undefined
                subject_type?: 'legal_entity' | undefined
              }
            }
            output: Case[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                after_cursor?: (string | null) | undefined
                per_page?: number | undefined
                status?: 'open' | 'resolved' | undefined
                subject_id?: string | undefined
                subject_type?: 'legal_entity' | undefined
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                after_cursor?: (string | null) | undefined
                per_page?: number | undefined
                status?: 'open' | 'resolved' | undefined
                subject_id?: string | undefined
                subject_type?: 'legal_entity' | undefined
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                after_cursor?: (string | null) | undefined
                per_page?: number | undefined
                status?: 'open' | 'resolved' | undefined
                subject_id?: string | undefined
                subject_type?: 'legal_entity' | undefined
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                after_cursor?: (string | null) | undefined
                per_page?: number | undefined
                status?: 'open' | 'resolved' | undefined
                subject_id?: string | undefined
                subject_type?: 'legal_entity' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/cases/:id': {
      $get:
        | { input: { param: { id: string } }; output: Case; outputFormat: 'json'; status: 200 }
        | {
            input: { param: { id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
    }
  } & {
    '/api/connection_legal_entities': {
      $get:
        | {
            input: {
              query: {
                after_cursor?: (string | null) | undefined
                connection_id?: string | undefined
                legal_entity_id?: string | undefined
                per_page?: number | undefined
                status?: 'completed' | 'denied' | 'failed' | 'processing' | 'suspended' | undefined
              }
            }
            output: ConnectionLegalEntity[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                after_cursor?: (string | null) | undefined
                connection_id?: string | undefined
                legal_entity_id?: string | undefined
                per_page?: number | undefined
                status?: 'completed' | 'denied' | 'failed' | 'processing' | 'suspended' | undefined
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                after_cursor?: (string | null) | undefined
                connection_id?: string | undefined
                legal_entity_id?: string | undefined
                per_page?: number | undefined
                status?: 'completed' | 'denied' | 'failed' | 'processing' | 'suspended' | undefined
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                after_cursor?: (string | null) | undefined
                connection_id?: string | undefined
                legal_entity_id?: string | undefined
                per_page?: number | undefined
                status?: 'completed' | 'denied' | 'failed' | 'processing' | 'suspended' | undefined
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                after_cursor?: (string | null) | undefined
                connection_id?: string | undefined
                legal_entity_id?: string | undefined
                per_page?: number | undefined
                status?: 'completed' | 'denied' | 'failed' | 'processing' | 'suspended' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
      $post:
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: ConnectionLegalEntityCreateRequest
            }
            output: ConnectionLegalEntity
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: ConnectionLegalEntityCreateRequest
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: ConnectionLegalEntityCreateRequest
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: ConnectionLegalEntityCreateRequest
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: ConnectionLegalEntityCreateRequest
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: ConnectionLegalEntityCreateRequest
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: ConnectionLegalEntityCreateRequest
            }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/connection_legal_entities/:id': {
      $get:
        | {
            input: { param: { id: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            }
            output: ConnectionLegalEntity
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 429
          }
      $patch:
        | {
            input: { param: { id: string } } & { json: ConnectionLegalEntityUpdateRequest }
            output: ConnectionLegalEntity
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: ConnectionLegalEntityUpdateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: ConnectionLegalEntityUpdateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: ConnectionLegalEntityUpdateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: ConnectionLegalEntityUpdateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: ConnectionLegalEntityUpdateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { id: string } } & { json: ConnectionLegalEntityUpdateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { json: ConnectionLegalEntityUpdateRequest }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/connections': {
      $get:
        | {
            input: {
              query: {
                after_cursor?: (string | null) | undefined
                entity?: string | undefined
                per_page?: number | undefined
                vendor_customer_id?: string | undefined
              }
            }
            output: Connection[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                after_cursor?: (string | null) | undefined
                entity?: string | undefined
                per_page?: number | undefined
                vendor_customer_id?: string | undefined
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                after_cursor?: (string | null) | undefined
                entity?: string | undefined
                per_page?: number | undefined
                vendor_customer_id?: string | undefined
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                after_cursor?: (string | null) | undefined
                entity?: string | undefined
                per_page?: number | undefined
                vendor_customer_id?: string | undefined
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                after_cursor?: (string | null) | undefined
                entity?: string | undefined
                per_page?: number | undefined
                vendor_customer_id?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/counterparties': {
      $get:
        | {
            input: {
              query: {
                after_cursor?: (string | null) | undefined
                created_at_lower_bound?: string | undefined
                created_at_upper_bound?: string | undefined
                email?: string | undefined
                external_id?: string | undefined
                legal_entity_id?: string | undefined
                name?: string | undefined
                per_page?: number | undefined
                metadata?: { [x: string]: string } | undefined
              }
            }
            output: Counterparty[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                after_cursor?: (string | null) | undefined
                created_at_lower_bound?: string | undefined
                created_at_upper_bound?: string | undefined
                email?: string | undefined
                external_id?: string | undefined
                legal_entity_id?: string | undefined
                name?: string | undefined
                per_page?: number | undefined
                metadata?: { [x: string]: string } | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                after_cursor?: (string | null) | undefined
                created_at_lower_bound?: string | undefined
                created_at_upper_bound?: string | undefined
                email?: string | undefined
                external_id?: string | undefined
                legal_entity_id?: string | undefined
                name?: string | undefined
                per_page?: number | undefined
                metadata?: { [x: string]: string } | undefined
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                after_cursor?: (string | null) | undefined
                created_at_lower_bound?: string | undefined
                created_at_upper_bound?: string | undefined
                email?: string | undefined
                external_id?: string | undefined
                legal_entity_id?: string | undefined
                name?: string | undefined
                per_page?: number | undefined
                metadata?: { [x: string]: string } | undefined
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                after_cursor?: (string | null) | undefined
                created_at_lower_bound?: string | undefined
                created_at_upper_bound?: string | undefined
                email?: string | undefined
                external_id?: string | undefined
                legal_entity_id?: string | undefined
                name?: string | undefined
                per_page?: number | undefined
                metadata?: { [x: string]: string } | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
      $post:
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: CounterpartyCreateRequest
            }
            output: Counterparty
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: CounterpartyCreateRequest
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: CounterpartyCreateRequest
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: CounterpartyCreateRequest
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: CounterpartyCreateRequest
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: CounterpartyCreateRequest
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: CounterpartyCreateRequest
            }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/counterparties/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: Counterparty
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $patch:
        | {
            input: { param: { id: string } } & { json: CounterpartyUpdateRequest }
            output: Counterparty
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: CounterpartyUpdateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: CounterpartyUpdateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: CounterpartyUpdateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: CounterpartyUpdateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: CounterpartyUpdateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { id: string } } & { json: CounterpartyUpdateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { id: string } } & { json: CounterpartyUpdateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { json: CounterpartyUpdateRequest }
            output: {}
            outputFormat: string
            status: 429
          }
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
    }
  } & {
    '/api/counterparties/:id/collect_account': {
      $post:
        | {
            input: { param: { id: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            } & { json: CounterpartyCollectAccountRequest }
            output: CounterpartyCollectAccountResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            } & { json: CounterpartyCollectAccountRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            } & { json: CounterpartyCollectAccountRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            } & { json: CounterpartyCollectAccountRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            } & { json: CounterpartyCollectAccountRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            } & { json: CounterpartyCollectAccountRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            } & { json: CounterpartyCollectAccountRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            } & { json: CounterpartyCollectAccountRequest }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/documents': {
      $get:
        | {
            input: {
              query: {
                after_cursor?: (string | null) | undefined
                documentable_id?: string | undefined
                documentable_type?:
                  | 'connection'
                  | 'counterparty'
                  | 'expected_payment'
                  | 'identification'
                  | 'incoming_payment_detail'
                  | 'internal_account'
                  | 'legal_entity'
                  | 'payment_order'
                  | 'return'
                  | 'transaction'
                  | undefined
                per_page?: number | undefined
              }
            }
            output: Document[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                after_cursor?: (string | null) | undefined
                documentable_id?: string | undefined
                documentable_type?:
                  | 'connection'
                  | 'counterparty'
                  | 'expected_payment'
                  | 'identification'
                  | 'incoming_payment_detail'
                  | 'internal_account'
                  | 'legal_entity'
                  | 'payment_order'
                  | 'return'
                  | 'transaction'
                  | undefined
                per_page?: number | undefined
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                after_cursor?: (string | null) | undefined
                documentable_id?: string | undefined
                documentable_type?:
                  | 'connection'
                  | 'counterparty'
                  | 'expected_payment'
                  | 'identification'
                  | 'incoming_payment_detail'
                  | 'internal_account'
                  | 'legal_entity'
                  | 'payment_order'
                  | 'return'
                  | 'transaction'
                  | undefined
                per_page?: number | undefined
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                after_cursor?: (string | null) | undefined
                documentable_id?: string | undefined
                documentable_type?:
                  | 'connection'
                  | 'counterparty'
                  | 'expected_payment'
                  | 'identification'
                  | 'incoming_payment_detail'
                  | 'internal_account'
                  | 'legal_entity'
                  | 'payment_order'
                  | 'return'
                  | 'transaction'
                  | undefined
                per_page?: number | undefined
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                after_cursor?: (string | null) | undefined
                documentable_id?: string | undefined
                documentable_type?:
                  | 'connection'
                  | 'counterparty'
                  | 'expected_payment'
                  | 'identification'
                  | 'incoming_payment_detail'
                  | 'internal_account'
                  | 'legal_entity'
                  | 'payment_order'
                  | 'return'
                  | 'transaction'
                  | undefined
                per_page?: number | undefined
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                after_cursor?: (string | null) | undefined
                documentable_id?: string | undefined
                documentable_type?:
                  | 'connection'
                  | 'counterparty'
                  | 'expected_payment'
                  | 'identification'
                  | 'incoming_payment_detail'
                  | 'internal_account'
                  | 'legal_entity'
                  | 'payment_order'
                  | 'return'
                  | 'transaction'
                  | undefined
                per_page?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
      $post:
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              form: DocumentCreateRequest
            }
            output: Document
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              form: DocumentCreateRequest
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              form: DocumentCreateRequest
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              form: DocumentCreateRequest
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              form: DocumentCreateRequest
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              form: DocumentCreateRequest
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              form: DocumentCreateRequest
            }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/documents/:id': {
      $get:
        | { input: { param: { id: string } }; output: Document; outputFormat: 'json'; status: 200 }
        | {
            input: { param: { id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
    }
  } & {
    '/api/documents/:id/download': {
      $get:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 302 }
        | {
            input: { param: { id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
    }
  } & {
    '/api/embeddable_flows': {
      $get:
        | {
            input: {
              query: {
                after_cursor?: (string | null) | undefined
                per_page?: number | undefined
                status?: string | undefined
                template?: 'legal_entity_onboarding' | 'account_collection' | 'payment' | undefined
              }
            }
            output: EmbeddableFlow[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                after_cursor?: (string | null) | undefined
                per_page?: number | undefined
                status?: string | undefined
                template?: 'legal_entity_onboarding' | 'account_collection' | 'payment' | undefined
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                after_cursor?: (string | null) | undefined
                per_page?: number | undefined
                status?: string | undefined
                template?: 'legal_entity_onboarding' | 'account_collection' | 'payment' | undefined
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                after_cursor?: (string | null) | undefined
                per_page?: number | undefined
                status?: string | undefined
                template?: 'legal_entity_onboarding' | 'account_collection' | 'payment' | undefined
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                after_cursor?: (string | null) | undefined
                per_page?: number | undefined
                status?: string | undefined
                template?: 'legal_entity_onboarding' | 'account_collection' | 'payment' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
      $post:
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: EmbeddableFlowCreateRequest
            }
            output: EmbeddableFlow
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: EmbeddableFlowCreateRequest
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: EmbeddableFlowCreateRequest
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: EmbeddableFlowCreateRequest
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: EmbeddableFlowCreateRequest
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: EmbeddableFlowCreateRequest
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: EmbeddableFlowCreateRequest
            }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/embeddable_flows/:id': {
      $get:
        | {
            input: { param: { id: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            }
            output: EmbeddableFlow
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 429
          }
      $patch:
        | {
            input: { param: { id: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            } & { json: EmbeddableFlowUpdateRequest }
            output: EmbeddableFlow
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            } & { json: EmbeddableFlowUpdateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            } & { json: EmbeddableFlowUpdateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            } & { json: EmbeddableFlowUpdateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            } & { json: EmbeddableFlowUpdateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            } & { json: EmbeddableFlowUpdateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            } & { json: EmbeddableFlowUpdateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            } & { json: EmbeddableFlowUpdateRequest }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/events': {
      $get:
        | {
            input: {
              query: {
                after_cursor?: (string | null) | undefined
                entity_id?: string | undefined
                event_name?: string | undefined
                event_time_end?: string | undefined
                event_time_start?: string | undefined
                per_page?: number | undefined
                resource?: string | undefined
              }
            }
            output: Event[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                after_cursor?: (string | null) | undefined
                entity_id?: string | undefined
                event_name?: string | undefined
                event_time_end?: string | undefined
                event_time_start?: string | undefined
                per_page?: number | undefined
                resource?: string | undefined
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                after_cursor?: (string | null) | undefined
                entity_id?: string | undefined
                event_name?: string | undefined
                event_time_end?: string | undefined
                event_time_start?: string | undefined
                per_page?: number | undefined
                resource?: string | undefined
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                after_cursor?: (string | null) | undefined
                entity_id?: string | undefined
                event_name?: string | undefined
                event_time_end?: string | undefined
                event_time_start?: string | undefined
                per_page?: number | undefined
                resource?: string | undefined
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                after_cursor?: (string | null) | undefined
                entity_id?: string | undefined
                event_name?: string | undefined
                event_time_end?: string | undefined
                event_time_start?: string | undefined
                per_page?: number | undefined
                resource?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/events/:id': {
      $get:
        | { input: { param: { id: string } }; output: Event; outputFormat: 'json'; status: 200 }
        | {
            input: { param: { id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
    }
  } & {
    '/api/expected_payments': {
      $get:
        | {
            input: {
              query: {
                after_cursor?: (string | null) | undefined
                counterparty_id?: string | undefined
                created_at_lower_bound?: string | undefined
                created_at_upper_bound?: string | undefined
                direction?: 'credit' | 'debit' | undefined
                external_id?: string | undefined
                internal_account_id?: string | undefined
                per_page?: number | undefined
                status?:
                  | 'archived'
                  | 'partially_reconciled'
                  | 'reconciled'
                  | 'unreconciled'
                  | undefined
                type?:
                  | 'ach'
                  | 'au_becs'
                  | 'bacs'
                  | 'book'
                  | 'card'
                  | 'chats'
                  | 'check'
                  | 'cross_border'
                  | 'dk_nets'
                  | 'eft'
                  | 'gb_fps'
                  | 'masav'
                  | 'mx_ccen'
                  | 'neft'
                  | 'nics'
                  | 'nz_becs'
                  | 'pl_elixir'
                  | 'rtp'
                  | 'se_bankgirot'
                  | 'sepa'
                  | 'sg_giro'
                  | 'sic'
                  | 'stablecoin'
                  | 'wire'
                  | 'zengin'
                  | undefined
                updated_at_lower_bound?: string | undefined
                updated_at_upper_bound?: string | undefined
                metadata?: { [x: string]: string } | undefined
              }
            }
            output: ExpectedPayment[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                after_cursor?: (string | null) | undefined
                counterparty_id?: string | undefined
                created_at_lower_bound?: string | undefined
                created_at_upper_bound?: string | undefined
                direction?: 'credit' | 'debit' | undefined
                external_id?: string | undefined
                internal_account_id?: string | undefined
                per_page?: number | undefined
                status?:
                  | 'archived'
                  | 'partially_reconciled'
                  | 'reconciled'
                  | 'unreconciled'
                  | undefined
                type?:
                  | 'ach'
                  | 'au_becs'
                  | 'bacs'
                  | 'book'
                  | 'card'
                  | 'chats'
                  | 'check'
                  | 'cross_border'
                  | 'dk_nets'
                  | 'eft'
                  | 'gb_fps'
                  | 'masav'
                  | 'mx_ccen'
                  | 'neft'
                  | 'nics'
                  | 'nz_becs'
                  | 'pl_elixir'
                  | 'rtp'
                  | 'se_bankgirot'
                  | 'sepa'
                  | 'sg_giro'
                  | 'sic'
                  | 'stablecoin'
                  | 'wire'
                  | 'zengin'
                  | undefined
                updated_at_lower_bound?: string | undefined
                updated_at_upper_bound?: string | undefined
                metadata?: { [x: string]: string } | undefined
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                after_cursor?: (string | null) | undefined
                counterparty_id?: string | undefined
                created_at_lower_bound?: string | undefined
                created_at_upper_bound?: string | undefined
                direction?: 'credit' | 'debit' | undefined
                external_id?: string | undefined
                internal_account_id?: string | undefined
                per_page?: number | undefined
                status?:
                  | 'archived'
                  | 'partially_reconciled'
                  | 'reconciled'
                  | 'unreconciled'
                  | undefined
                type?:
                  | 'ach'
                  | 'au_becs'
                  | 'bacs'
                  | 'book'
                  | 'card'
                  | 'chats'
                  | 'check'
                  | 'cross_border'
                  | 'dk_nets'
                  | 'eft'
                  | 'gb_fps'
                  | 'masav'
                  | 'mx_ccen'
                  | 'neft'
                  | 'nics'
                  | 'nz_becs'
                  | 'pl_elixir'
                  | 'rtp'
                  | 'se_bankgirot'
                  | 'sepa'
                  | 'sg_giro'
                  | 'sic'
                  | 'stablecoin'
                  | 'wire'
                  | 'zengin'
                  | undefined
                updated_at_lower_bound?: string | undefined
                updated_at_upper_bound?: string | undefined
                metadata?: { [x: string]: string } | undefined
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                after_cursor?: (string | null) | undefined
                counterparty_id?: string | undefined
                created_at_lower_bound?: string | undefined
                created_at_upper_bound?: string | undefined
                direction?: 'credit' | 'debit' | undefined
                external_id?: string | undefined
                internal_account_id?: string | undefined
                per_page?: number | undefined
                status?:
                  | 'archived'
                  | 'partially_reconciled'
                  | 'reconciled'
                  | 'unreconciled'
                  | undefined
                type?:
                  | 'ach'
                  | 'au_becs'
                  | 'bacs'
                  | 'book'
                  | 'card'
                  | 'chats'
                  | 'check'
                  | 'cross_border'
                  | 'dk_nets'
                  | 'eft'
                  | 'gb_fps'
                  | 'masav'
                  | 'mx_ccen'
                  | 'neft'
                  | 'nics'
                  | 'nz_becs'
                  | 'pl_elixir'
                  | 'rtp'
                  | 'se_bankgirot'
                  | 'sepa'
                  | 'sg_giro'
                  | 'sic'
                  | 'stablecoin'
                  | 'wire'
                  | 'zengin'
                  | undefined
                updated_at_lower_bound?: string | undefined
                updated_at_upper_bound?: string | undefined
                metadata?: { [x: string]: string } | undefined
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                after_cursor?: (string | null) | undefined
                counterparty_id?: string | undefined
                created_at_lower_bound?: string | undefined
                created_at_upper_bound?: string | undefined
                direction?: 'credit' | 'debit' | undefined
                external_id?: string | undefined
                internal_account_id?: string | undefined
                per_page?: number | undefined
                status?:
                  | 'archived'
                  | 'partially_reconciled'
                  | 'reconciled'
                  | 'unreconciled'
                  | undefined
                type?:
                  | 'ach'
                  | 'au_becs'
                  | 'bacs'
                  | 'book'
                  | 'card'
                  | 'chats'
                  | 'check'
                  | 'cross_border'
                  | 'dk_nets'
                  | 'eft'
                  | 'gb_fps'
                  | 'masav'
                  | 'mx_ccen'
                  | 'neft'
                  | 'nics'
                  | 'nz_becs'
                  | 'pl_elixir'
                  | 'rtp'
                  | 'se_bankgirot'
                  | 'sepa'
                  | 'sg_giro'
                  | 'sic'
                  | 'stablecoin'
                  | 'wire'
                  | 'zengin'
                  | undefined
                updated_at_lower_bound?: string | undefined
                updated_at_upper_bound?: string | undefined
                metadata?: { [x: string]: string } | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
      $post:
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: ExpectedPaymentCreateRequest
            }
            output: ExpectedPayment
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: ExpectedPaymentCreateRequest
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: ExpectedPaymentCreateRequest
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: ExpectedPaymentCreateRequest
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: ExpectedPaymentCreateRequest
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: ExpectedPaymentCreateRequest
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: ExpectedPaymentCreateRequest
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: ExpectedPaymentCreateRequest
            }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/expected_payments/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: ExpectedPayment
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $patch:
        | {
            input: { param: { id: string } } & { json: ExpectedPaymentUpdateRequest }
            output: ExpectedPayment
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: ExpectedPaymentUpdateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: ExpectedPaymentUpdateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: ExpectedPaymentUpdateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: ExpectedPaymentUpdateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: ExpectedPaymentUpdateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { id: string } } & { json: ExpectedPaymentUpdateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { id: string } } & { json: ExpectedPaymentUpdateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { json: ExpectedPaymentUpdateRequest }
            output: {}
            outputFormat: string
            status: 429
          }
      $delete:
        | {
            input: { param: { id: string } }
            output: ExpectedPayment
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 422
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
    }
  } & {
    '/api/external_accounts': {
      $get:
        | {
            input: {
              query: {
                after_cursor?: (string | null) | undefined
                counterparty_id?: string | undefined
                external_id?: string | undefined
                party_name?: string | undefined
                per_page?: number | undefined
                metadata?: { [x: string]: string } | undefined
              }
            }
            output: ExternalAccount[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                after_cursor?: (string | null) | undefined
                counterparty_id?: string | undefined
                external_id?: string | undefined
                party_name?: string | undefined
                per_page?: number | undefined
                metadata?: { [x: string]: string } | undefined
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                after_cursor?: (string | null) | undefined
                counterparty_id?: string | undefined
                external_id?: string | undefined
                party_name?: string | undefined
                per_page?: number | undefined
                metadata?: { [x: string]: string } | undefined
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                after_cursor?: (string | null) | undefined
                counterparty_id?: string | undefined
                external_id?: string | undefined
                party_name?: string | undefined
                per_page?: number | undefined
                metadata?: { [x: string]: string } | undefined
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                after_cursor?: (string | null) | undefined
                counterparty_id?: string | undefined
                external_id?: string | undefined
                party_name?: string | undefined
                per_page?: number | undefined
                metadata?: { [x: string]: string } | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
      $post:
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: ExternalAccountCreateRequest
            }
            output: ExternalAccount
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: ExternalAccountCreateRequest
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: ExternalAccountCreateRequest
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: ExternalAccountCreateRequest
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: ExternalAccountCreateRequest
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: ExternalAccountCreateRequest
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: ExternalAccountCreateRequest
            }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/external_accounts/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: ExternalAccount
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $patch:
        | {
            input: { param: { id: string } } & { json: ExternalAccountUpdateRequest }
            output: ExternalAccount
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: ExternalAccountUpdateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: ExternalAccountUpdateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: ExternalAccountUpdateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: ExternalAccountUpdateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: ExternalAccountUpdateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { id: string } } & { json: ExternalAccountUpdateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { id: string } } & { json: ExternalAccountUpdateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { json: ExternalAccountUpdateRequest }
            output: {}
            outputFormat: string
            status: 429
          }
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
    }
  } & {
    '/api/external_accounts/:id/complete_verification': {
      $post:
        | {
            input: { param: { id: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            } & { json: ExternalAccountCompleteVerificationRequest }
            output: ExternalAccount
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            } & { json: ExternalAccountCompleteVerificationRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            } & { json: ExternalAccountCompleteVerificationRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            } & { json: ExternalAccountCompleteVerificationRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            } & { json: ExternalAccountCompleteVerificationRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            } & { json: ExternalAccountCompleteVerificationRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            } & { json: ExternalAccountCompleteVerificationRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            } & { json: ExternalAccountCompleteVerificationRequest }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/external_accounts/:id/verify': {
      $post:
        | {
            input: { param: { id: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            } & { json: ExternalAccountVerifyRequest }
            output: ExternalAccount | ExternalAccountVerificationAttempt
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            } & { json: ExternalAccountVerifyRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            } & { json: ExternalAccountVerifyRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            } & { json: ExternalAccountVerifyRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            } & { json: ExternalAccountVerifyRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            } & { json: ExternalAccountVerifyRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            } & { json: ExternalAccountVerifyRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            } & { json: ExternalAccountVerifyRequest }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/foreign_exchange_quotes': {
      $get:
        | {
            input: {
              query: {
                after_cursor?: (string | null) | undefined
                base_currency?: string | undefined
                effective_at_end?: string | undefined
                effective_at_start?: string | undefined
                expires_at?: string | undefined
                internal_account_id?: string | undefined
                per_page?: number | undefined
                target_currency?: string | undefined
                metadata?: { [x: string]: string } | undefined
              }
            }
            output: ForeignExchangeQuote[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                after_cursor?: (string | null) | undefined
                base_currency?: string | undefined
                effective_at_end?: string | undefined
                effective_at_start?: string | undefined
                expires_at?: string | undefined
                internal_account_id?: string | undefined
                per_page?: number | undefined
                target_currency?: string | undefined
                metadata?: { [x: string]: string } | undefined
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                after_cursor?: (string | null) | undefined
                base_currency?: string | undefined
                effective_at_end?: string | undefined
                effective_at_start?: string | undefined
                expires_at?: string | undefined
                internal_account_id?: string | undefined
                per_page?: number | undefined
                target_currency?: string | undefined
                metadata?: { [x: string]: string } | undefined
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                after_cursor?: (string | null) | undefined
                base_currency?: string | undefined
                effective_at_end?: string | undefined
                effective_at_start?: string | undefined
                expires_at?: string | undefined
                internal_account_id?: string | undefined
                per_page?: number | undefined
                target_currency?: string | undefined
                metadata?: { [x: string]: string } | undefined
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                after_cursor?: (string | null) | undefined
                base_currency?: string | undefined
                effective_at_end?: string | undefined
                effective_at_start?: string | undefined
                expires_at?: string | undefined
                internal_account_id?: string | undefined
                per_page?: number | undefined
                target_currency?: string | undefined
                metadata?: { [x: string]: string } | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
      $post:
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: ForeignExchangeQuoteCreateRequest
            }
            output: ForeignExchangeQuote
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: ForeignExchangeQuoteCreateRequest
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: ForeignExchangeQuoteCreateRequest
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: ForeignExchangeQuoteCreateRequest
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: ForeignExchangeQuoteCreateRequest
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: ForeignExchangeQuoteCreateRequest
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: ForeignExchangeQuoteCreateRequest
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: ForeignExchangeQuoteCreateRequest
            }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/foreign_exchange_quotes/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: ForeignExchangeQuote
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
    }
  } & {
    '/api/holds': {
      $get:
        | {
            input: {
              query: {
                after_cursor?: (string | null) | undefined
                per_page?: number | undefined
                status?: 'active' | 'resolved' | undefined
                target_id?: (string | null) | undefined
                target_type?: 'payment_order' | undefined
                metadata?: { [x: string]: string } | undefined
              }
            }
            output: Hold[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                after_cursor?: (string | null) | undefined
                per_page?: number | undefined
                status?: 'active' | 'resolved' | undefined
                target_id?: (string | null) | undefined
                target_type?: 'payment_order' | undefined
                metadata?: { [x: string]: string } | undefined
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                after_cursor?: (string | null) | undefined
                per_page?: number | undefined
                status?: 'active' | 'resolved' | undefined
                target_id?: (string | null) | undefined
                target_type?: 'payment_order' | undefined
                metadata?: { [x: string]: string } | undefined
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                after_cursor?: (string | null) | undefined
                per_page?: number | undefined
                status?: 'active' | 'resolved' | undefined
                target_id?: (string | null) | undefined
                target_type?: 'payment_order' | undefined
                metadata?: { [x: string]: string } | undefined
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                after_cursor?: (string | null) | undefined
                per_page?: number | undefined
                status?: 'active' | 'resolved' | undefined
                target_id?: (string | null) | undefined
                target_type?: 'payment_order' | undefined
                metadata?: { [x: string]: string } | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
      $post:
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: {
                metadata?: ({ [x: string]: string } | null) | undefined
                reason?: (string | null) | undefined
                status: 'active'
                target_id: string
                target_type: 'payment_order'
              }
            }
            output: Hold
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: {
                metadata?: ({ [x: string]: string } | null) | undefined
                reason?: (string | null) | undefined
                status: 'active'
                target_id: string
                target_type: 'payment_order'
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: {
                metadata?: ({ [x: string]: string } | null) | undefined
                reason?: (string | null) | undefined
                status: 'active'
                target_id: string
                target_type: 'payment_order'
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: {
                metadata?: ({ [x: string]: string } | null) | undefined
                reason?: (string | null) | undefined
                status: 'active'
                target_id: string
                target_type: 'payment_order'
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: {
                metadata?: ({ [x: string]: string } | null) | undefined
                reason?: (string | null) | undefined
                status: 'active'
                target_id: string
                target_type: 'payment_order'
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: {
                metadata?: ({ [x: string]: string } | null) | undefined
                reason?: (string | null) | undefined
                status: 'active'
                target_id: string
                target_type: 'payment_order'
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: {
                metadata?: ({ [x: string]: string } | null) | undefined
                reason?: (string | null) | undefined
                status: 'active'
                target_id: string
                target_type: 'payment_order'
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: {
                metadata?: ({ [x: string]: string } | null) | undefined
                reason?: (string | null) | undefined
                status: 'active'
                target_id: string
                target_type: 'payment_order'
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/holds/:id': {
      $get:
        | { input: { param: { id: string } }; output: Hold; outputFormat: 'json'; status: 200 }
        | {
            input: { param: { id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $patch:
        | {
            input: { param: { id: string } } & {
              json: { resolution?: (string | null) | undefined; status: 'resolved' }
            }
            output: Hold
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: { resolution?: (string | null) | undefined; status: 'resolved' }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              json: { resolution?: (string | null) | undefined; status: 'resolved' }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              json: { resolution?: (string | null) | undefined; status: 'resolved' }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              json: { resolution?: (string | null) | undefined; status: 'resolved' }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              json: { resolution?: (string | null) | undefined; status: 'resolved' }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { id: string } } & {
              json: { resolution?: (string | null) | undefined; status: 'resolved' }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & {
              json: { resolution?: (string | null) | undefined; status: 'resolved' }
            }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/identifications': {
      $post:
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: StandaloneIdentificationCreateRequest
            }
            output: Identification
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: StandaloneIdentificationCreateRequest
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: StandaloneIdentificationCreateRequest
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: StandaloneIdentificationCreateRequest
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: StandaloneIdentificationCreateRequest
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: StandaloneIdentificationCreateRequest
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: StandaloneIdentificationCreateRequest
            }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/identifications/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: Identification
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $patch:
        | {
            input: { param: { id: string } } & { json: IdentificationUpdateRequest }
            output: Identification
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: IdentificationUpdateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: IdentificationUpdateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: IdentificationUpdateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: IdentificationUpdateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: IdentificationUpdateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { id: string } } & { json: IdentificationUpdateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { json: IdentificationUpdateRequest }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/incoming_payment_details': {
      $get:
        | {
            input: {
              query: {
                after_cursor?: (string | null) | undefined
                as_of_date_end?: string | undefined
                as_of_date_start?: string | undefined
                direction?: 'credit' | 'debit' | undefined
                per_page?: number | undefined
                status?: 'completed' | 'failed' | 'held' | 'pending' | 'returned' | undefined
                subtype?: string | undefined
                type?:
                  | 'ach'
                  | 'au_becs'
                  | 'bacs'
                  | 'book'
                  | 'check'
                  | 'eft'
                  | 'neft'
                  | 'nz_becs'
                  | 'rtp'
                  | 'sepa'
                  | 'stablecoin'
                  | 'wire'
                  | 'zengin'
                  | undefined
                virtual_account_id?: string | undefined
                metadata?: { [x: string]: string } | undefined
              }
            }
            output: IncomingPaymentDetail[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                after_cursor?: (string | null) | undefined
                as_of_date_end?: string | undefined
                as_of_date_start?: string | undefined
                direction?: 'credit' | 'debit' | undefined
                per_page?: number | undefined
                status?: 'completed' | 'failed' | 'held' | 'pending' | 'returned' | undefined
                subtype?: string | undefined
                type?:
                  | 'ach'
                  | 'au_becs'
                  | 'bacs'
                  | 'book'
                  | 'check'
                  | 'eft'
                  | 'neft'
                  | 'nz_becs'
                  | 'rtp'
                  | 'sepa'
                  | 'stablecoin'
                  | 'wire'
                  | 'zengin'
                  | undefined
                virtual_account_id?: string | undefined
                metadata?: { [x: string]: string } | undefined
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                after_cursor?: (string | null) | undefined
                as_of_date_end?: string | undefined
                as_of_date_start?: string | undefined
                direction?: 'credit' | 'debit' | undefined
                per_page?: number | undefined
                status?: 'completed' | 'failed' | 'held' | 'pending' | 'returned' | undefined
                subtype?: string | undefined
                type?:
                  | 'ach'
                  | 'au_becs'
                  | 'bacs'
                  | 'book'
                  | 'check'
                  | 'eft'
                  | 'neft'
                  | 'nz_becs'
                  | 'rtp'
                  | 'sepa'
                  | 'stablecoin'
                  | 'wire'
                  | 'zengin'
                  | undefined
                virtual_account_id?: string | undefined
                metadata?: { [x: string]: string } | undefined
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                after_cursor?: (string | null) | undefined
                as_of_date_end?: string | undefined
                as_of_date_start?: string | undefined
                direction?: 'credit' | 'debit' | undefined
                per_page?: number | undefined
                status?: 'completed' | 'failed' | 'held' | 'pending' | 'returned' | undefined
                subtype?: string | undefined
                type?:
                  | 'ach'
                  | 'au_becs'
                  | 'bacs'
                  | 'book'
                  | 'check'
                  | 'eft'
                  | 'neft'
                  | 'nz_becs'
                  | 'rtp'
                  | 'sepa'
                  | 'stablecoin'
                  | 'wire'
                  | 'zengin'
                  | undefined
                virtual_account_id?: string | undefined
                metadata?: { [x: string]: string } | undefined
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                after_cursor?: (string | null) | undefined
                as_of_date_end?: string | undefined
                as_of_date_start?: string | undefined
                direction?: 'credit' | 'debit' | undefined
                per_page?: number | undefined
                status?: 'completed' | 'failed' | 'held' | 'pending' | 'returned' | undefined
                subtype?: string | undefined
                type?:
                  | 'ach'
                  | 'au_becs'
                  | 'bacs'
                  | 'book'
                  | 'check'
                  | 'eft'
                  | 'neft'
                  | 'nz_becs'
                  | 'rtp'
                  | 'sepa'
                  | 'stablecoin'
                  | 'wire'
                  | 'zengin'
                  | undefined
                virtual_account_id?: string | undefined
                metadata?: { [x: string]: string } | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/incoming_payment_details/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: IncomingPaymentDetail
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $patch:
        | {
            input: { param: { id: string } } & { json: IncomingPaymentDetailUpdateRequest }
            output: IncomingPaymentDetail
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: IncomingPaymentDetailUpdateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: IncomingPaymentDetailUpdateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: IncomingPaymentDetailUpdateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: IncomingPaymentDetailUpdateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: IncomingPaymentDetailUpdateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { id: string } } & { json: IncomingPaymentDetailUpdateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { json: IncomingPaymentDetailUpdateRequest }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/internal_accounts': {
      $get:
        | {
            input: {
              query: {
                after_cursor?: (string | null) | undefined
                counterparty_id?: string | undefined
                currency?: Currency | undefined
                external_id?: string | undefined
                legal_entity_id?: string | undefined
                payment_direction?: 'credit' | 'debit' | undefined
                payment_type?:
                  | 'ach'
                  | 'au_becs'
                  | 'bacs'
                  | 'book'
                  | 'card'
                  | 'chats'
                  | 'check'
                  | 'cross_border'
                  | 'dk_nets'
                  | 'eft'
                  | 'gb_fps'
                  | 'masav'
                  | 'mx_ccen'
                  | 'neft'
                  | 'nics'
                  | 'nz_becs'
                  | 'pl_elixir'
                  | 'rtp'
                  | 'se_bankgirot'
                  | 'sepa'
                  | 'sg_giro'
                  | 'sic'
                  | 'stablecoin'
                  | 'wire'
                  | 'zengin'
                  | undefined
                per_page?: number | undefined
                status?:
                  | 'active'
                  | 'pending_activation'
                  | 'suspended'
                  | 'pending_closure'
                  | 'closed'
                  | undefined
                metadata?: { [x: string]: string } | undefined
              }
            }
            output: InternalAccount[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                after_cursor?: (string | null) | undefined
                counterparty_id?: string | undefined
                currency?: Currency | undefined
                external_id?: string | undefined
                legal_entity_id?: string | undefined
                payment_direction?: 'credit' | 'debit' | undefined
                payment_type?:
                  | 'ach'
                  | 'au_becs'
                  | 'bacs'
                  | 'book'
                  | 'card'
                  | 'chats'
                  | 'check'
                  | 'cross_border'
                  | 'dk_nets'
                  | 'eft'
                  | 'gb_fps'
                  | 'masav'
                  | 'mx_ccen'
                  | 'neft'
                  | 'nics'
                  | 'nz_becs'
                  | 'pl_elixir'
                  | 'rtp'
                  | 'se_bankgirot'
                  | 'sepa'
                  | 'sg_giro'
                  | 'sic'
                  | 'stablecoin'
                  | 'wire'
                  | 'zengin'
                  | undefined
                per_page?: number | undefined
                status?:
                  | 'active'
                  | 'pending_activation'
                  | 'suspended'
                  | 'pending_closure'
                  | 'closed'
                  | undefined
                metadata?: { [x: string]: string } | undefined
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                after_cursor?: (string | null) | undefined
                counterparty_id?: string | undefined
                currency?: Currency | undefined
                external_id?: string | undefined
                legal_entity_id?: string | undefined
                payment_direction?: 'credit' | 'debit' | undefined
                payment_type?:
                  | 'ach'
                  | 'au_becs'
                  | 'bacs'
                  | 'book'
                  | 'card'
                  | 'chats'
                  | 'check'
                  | 'cross_border'
                  | 'dk_nets'
                  | 'eft'
                  | 'gb_fps'
                  | 'masav'
                  | 'mx_ccen'
                  | 'neft'
                  | 'nics'
                  | 'nz_becs'
                  | 'pl_elixir'
                  | 'rtp'
                  | 'se_bankgirot'
                  | 'sepa'
                  | 'sg_giro'
                  | 'sic'
                  | 'stablecoin'
                  | 'wire'
                  | 'zengin'
                  | undefined
                per_page?: number | undefined
                status?:
                  | 'active'
                  | 'pending_activation'
                  | 'suspended'
                  | 'pending_closure'
                  | 'closed'
                  | undefined
                metadata?: { [x: string]: string } | undefined
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                after_cursor?: (string | null) | undefined
                counterparty_id?: string | undefined
                currency?: Currency | undefined
                external_id?: string | undefined
                legal_entity_id?: string | undefined
                payment_direction?: 'credit' | 'debit' | undefined
                payment_type?:
                  | 'ach'
                  | 'au_becs'
                  | 'bacs'
                  | 'book'
                  | 'card'
                  | 'chats'
                  | 'check'
                  | 'cross_border'
                  | 'dk_nets'
                  | 'eft'
                  | 'gb_fps'
                  | 'masav'
                  | 'mx_ccen'
                  | 'neft'
                  | 'nics'
                  | 'nz_becs'
                  | 'pl_elixir'
                  | 'rtp'
                  | 'se_bankgirot'
                  | 'sepa'
                  | 'sg_giro'
                  | 'sic'
                  | 'stablecoin'
                  | 'wire'
                  | 'zengin'
                  | undefined
                per_page?: number | undefined
                status?:
                  | 'active'
                  | 'pending_activation'
                  | 'suspended'
                  | 'pending_closure'
                  | 'closed'
                  | undefined
                metadata?: { [x: string]: string } | undefined
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                after_cursor?: (string | null) | undefined
                counterparty_id?: string | undefined
                currency?: Currency | undefined
                external_id?: string | undefined
                legal_entity_id?: string | undefined
                payment_direction?: 'credit' | 'debit' | undefined
                payment_type?:
                  | 'ach'
                  | 'au_becs'
                  | 'bacs'
                  | 'book'
                  | 'card'
                  | 'chats'
                  | 'check'
                  | 'cross_border'
                  | 'dk_nets'
                  | 'eft'
                  | 'gb_fps'
                  | 'masav'
                  | 'mx_ccen'
                  | 'neft'
                  | 'nics'
                  | 'nz_becs'
                  | 'pl_elixir'
                  | 'rtp'
                  | 'se_bankgirot'
                  | 'sepa'
                  | 'sg_giro'
                  | 'sic'
                  | 'stablecoin'
                  | 'wire'
                  | 'zengin'
                  | undefined
                per_page?: number | undefined
                status?:
                  | 'active'
                  | 'pending_activation'
                  | 'suspended'
                  | 'pending_closure'
                  | 'closed'
                  | undefined
                metadata?: { [x: string]: string } | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
      $post:
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: InternalAccountCreateRequest
            }
            output: InternalAccount
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: InternalAccountCreateRequest
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: InternalAccountCreateRequest
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: InternalAccountCreateRequest
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: InternalAccountCreateRequest
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: InternalAccountCreateRequest
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: InternalAccountCreateRequest
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: InternalAccountCreateRequest
            }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/internal_accounts/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: InternalAccount
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $patch:
        | {
            input: { param: { id: string } } & { json: InternalAccountUpdateRequest }
            output: InternalAccount
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: InternalAccountUpdateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: InternalAccountUpdateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: InternalAccountUpdateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: InternalAccountUpdateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: InternalAccountUpdateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { id: string } } & { json: InternalAccountUpdateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { id: string } } & { json: InternalAccountUpdateRequest }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { param: { id: string } } & { json: InternalAccountUpdateRequest }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/internal_accounts/:id/request_closure': {
      $post:
        | {
            input: { param: { id: string } }
            output: InternalAccount
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 422
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
    }
  } & {
    '/api/internal_accounts/:internal_account_id/account_capabilities/:id': {
      $patch:
        | {
            input: { param: { id: string; internal_account_id: string } } & {
              json: AccountCapabilityUpdateRequest
            }
            output: AccountCapability
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string; internal_account_id: string } } & {
              json: AccountCapabilityUpdateRequest
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string; internal_account_id: string } } & {
              json: AccountCapabilityUpdateRequest
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string; internal_account_id: string } } & {
              json: AccountCapabilityUpdateRequest
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string; internal_account_id: string } } & {
              json: AccountCapabilityUpdateRequest
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string; internal_account_id: string } } & {
              json: AccountCapabilityUpdateRequest
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { id: string; internal_account_id: string } } & {
              json: AccountCapabilityUpdateRequest
            }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { param: { id: string; internal_account_id: string } } & {
              json: AccountCapabilityUpdateRequest
            }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/internal_accounts/:internal_account_id/balance_reports': {
      $get:
        | {
            input: { param: { internal_account_id: string } } & {
              query: {
                after_cursor?: (string | null) | undefined
                as_of_date?: string | undefined
                balance_report_type?:
                  | 'intraday'
                  | 'other'
                  | 'previous_day'
                  | 'real_time'
                  | undefined
                per_page?: number | undefined
              }
            }
            output: BalanceReport[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { internal_account_id: string } } & {
              query: {
                after_cursor?: (string | null) | undefined
                as_of_date?: string | undefined
                balance_report_type?:
                  | 'intraday'
                  | 'other'
                  | 'previous_day'
                  | 'real_time'
                  | undefined
                per_page?: number | undefined
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { internal_account_id: string } } & {
              query: {
                after_cursor?: (string | null) | undefined
                as_of_date?: string | undefined
                balance_report_type?:
                  | 'intraday'
                  | 'other'
                  | 'previous_day'
                  | 'real_time'
                  | undefined
                per_page?: number | undefined
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { internal_account_id: string } } & {
              query: {
                after_cursor?: (string | null) | undefined
                as_of_date?: string | undefined
                balance_report_type?:
                  | 'intraday'
                  | 'other'
                  | 'previous_day'
                  | 'real_time'
                  | undefined
                per_page?: number | undefined
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { internal_account_id: string } } & {
              query: {
                after_cursor?: (string | null) | undefined
                as_of_date?: string | undefined
                balance_report_type?:
                  | 'intraday'
                  | 'other'
                  | 'previous_day'
                  | 'real_time'
                  | undefined
                per_page?: number | undefined
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { internal_account_id: string } } & {
              query: {
                after_cursor?: (string | null) | undefined
                as_of_date?: string | undefined
                balance_report_type?:
                  | 'intraday'
                  | 'other'
                  | 'previous_day'
                  | 'real_time'
                  | undefined
                per_page?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
      $post:
        | {
            input: { param: { internal_account_id: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            } & { json: BalanceReportCreateRequest }
            output: BalanceReport
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { internal_account_id: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            } & { json: BalanceReportCreateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { internal_account_id: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            } & { json: BalanceReportCreateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { internal_account_id: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            } & { json: BalanceReportCreateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { internal_account_id: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            } & { json: BalanceReportCreateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { internal_account_id: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            } & { json: BalanceReportCreateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { internal_account_id: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            } & { json: BalanceReportCreateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { internal_account_id: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            } & { json: BalanceReportCreateRequest }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/internal_accounts/:internal_account_id/balance_reports/:id': {
      $get:
        | {
            input: { param: { id: string | 'latest'; internal_account_id: string } }
            output: BalanceReport
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string | 'latest'; internal_account_id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string | 'latest'; internal_account_id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string | 'latest'; internal_account_id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string | 'latest'; internal_account_id: string } }
            output: {}
            outputFormat: string
            status: 429
          }
      $delete:
        | {
            input: { param: { id: string; internal_account_id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { id: string; internal_account_id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string; internal_account_id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string; internal_account_id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string; internal_account_id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string; internal_account_id: string } }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/invoices': {
      $get:
        | {
            input: {
              query: {
                after_cursor?: (string | null) | undefined
                counterparty_id?: string | undefined
                created_at_end?: string | undefined
                created_at_start?: string | undefined
                due_date_end?: string | undefined
                due_date_start?: string | undefined
                expected_payment_id?: string | undefined
                number?: string | undefined
                originating_account_id?: string | undefined
                payment_order_id?: string | undefined
                per_page?: number | undefined
                status?:
                  | 'draft'
                  | 'paid'
                  | 'partially_paid'
                  | 'payment_pending'
                  | 'unpaid'
                  | 'voided'
                  | undefined
                metadata?: { [x: string]: string } | undefined
              }
            }
            output: Invoice[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                after_cursor?: (string | null) | undefined
                counterparty_id?: string | undefined
                created_at_end?: string | undefined
                created_at_start?: string | undefined
                due_date_end?: string | undefined
                due_date_start?: string | undefined
                expected_payment_id?: string | undefined
                number?: string | undefined
                originating_account_id?: string | undefined
                payment_order_id?: string | undefined
                per_page?: number | undefined
                status?:
                  | 'draft'
                  | 'paid'
                  | 'partially_paid'
                  | 'payment_pending'
                  | 'unpaid'
                  | 'voided'
                  | undefined
                metadata?: { [x: string]: string } | undefined
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                after_cursor?: (string | null) | undefined
                counterparty_id?: string | undefined
                created_at_end?: string | undefined
                created_at_start?: string | undefined
                due_date_end?: string | undefined
                due_date_start?: string | undefined
                expected_payment_id?: string | undefined
                number?: string | undefined
                originating_account_id?: string | undefined
                payment_order_id?: string | undefined
                per_page?: number | undefined
                status?:
                  | 'draft'
                  | 'paid'
                  | 'partially_paid'
                  | 'payment_pending'
                  | 'unpaid'
                  | 'voided'
                  | undefined
                metadata?: { [x: string]: string } | undefined
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                after_cursor?: (string | null) | undefined
                counterparty_id?: string | undefined
                created_at_end?: string | undefined
                created_at_start?: string | undefined
                due_date_end?: string | undefined
                due_date_start?: string | undefined
                expected_payment_id?: string | undefined
                number?: string | undefined
                originating_account_id?: string | undefined
                payment_order_id?: string | undefined
                per_page?: number | undefined
                status?:
                  | 'draft'
                  | 'paid'
                  | 'partially_paid'
                  | 'payment_pending'
                  | 'unpaid'
                  | 'voided'
                  | undefined
                metadata?: { [x: string]: string } | undefined
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                after_cursor?: (string | null) | undefined
                counterparty_id?: string | undefined
                created_at_end?: string | undefined
                created_at_start?: string | undefined
                due_date_end?: string | undefined
                due_date_start?: string | undefined
                expected_payment_id?: string | undefined
                number?: string | undefined
                originating_account_id?: string | undefined
                payment_order_id?: string | undefined
                per_page?: number | undefined
                status?:
                  | 'draft'
                  | 'paid'
                  | 'partially_paid'
                  | 'payment_pending'
                  | 'unpaid'
                  | 'voided'
                  | undefined
                metadata?: { [x: string]: string } | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
      $post:
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: InvoiceCreateRequest
            }
            output: Invoice
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: InvoiceCreateRequest
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: InvoiceCreateRequest
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: InvoiceCreateRequest
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: InvoiceCreateRequest
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: InvoiceCreateRequest
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: InvoiceCreateRequest
            }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/invoices/:id': {
      $get:
        | { input: { param: { id: string } }; output: Invoice; outputFormat: 'json'; status: 200 }
        | {
            input: { param: { id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $patch:
        | {
            input: { param: { id: string } } & { json: InvoiceUpdateRequest }
            output: Invoice
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: InvoiceUpdateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: InvoiceUpdateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: InvoiceUpdateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: InvoiceUpdateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: InvoiceUpdateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { id: string } } & { json: InvoiceUpdateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { json: InvoiceUpdateRequest }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/invoices/:id/payment_orders/:payment_order_id': {
      $put:
        | {
            input: { param: { id: string; payment_order_id: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { id: string; payment_order_id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string; payment_order_id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string; payment_order_id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string; payment_order_id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string; payment_order_id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string; payment_order_id: string } }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/invoices/:invoice_id/invoice_line_items': {
      $get:
        | {
            input: { param: { invoice_id: string } } & {
              query: { after_cursor?: (string | null) | undefined; per_page?: number | undefined }
            }
            output: InvoiceLineItem[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { invoice_id: string } } & {
              query: { after_cursor?: (string | null) | undefined; per_page?: number | undefined }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { invoice_id: string } } & {
              query: { after_cursor?: (string | null) | undefined; per_page?: number | undefined }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { invoice_id: string } } & {
              query: { after_cursor?: (string | null) | undefined; per_page?: number | undefined }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { invoice_id: string } } & {
              query: { after_cursor?: (string | null) | undefined; per_page?: number | undefined }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { invoice_id: string } } & {
              query: { after_cursor?: (string | null) | undefined; per_page?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 429
          }
      $post:
        | {
            input: { param: { invoice_id: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            } & { json: InvoiceLineItemCreateRequest }
            output: InvoiceLineItem
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { invoice_id: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            } & { json: InvoiceLineItemCreateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { invoice_id: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            } & { json: InvoiceLineItemCreateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { invoice_id: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            } & { json: InvoiceLineItemCreateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { invoice_id: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            } & { json: InvoiceLineItemCreateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { invoice_id: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            } & { json: InvoiceLineItemCreateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { invoice_id: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            } & { json: InvoiceLineItemCreateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { invoice_id: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            } & { json: InvoiceLineItemCreateRequest }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/invoices/:invoice_id/invoice_line_items/:id': {
      $get:
        | {
            input: { param: { id: string; invoice_id: string } }
            output: InvoiceLineItem
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string; invoice_id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string; invoice_id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string; invoice_id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string; invoice_id: string } }
            output: {}
            outputFormat: string
            status: 429
          }
      $patch:
        | {
            input: { param: { id: string; invoice_id: string } } & {
              json: InvoiceLineItemUpdateRequest
            }
            output: InvoiceLineItem
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string; invoice_id: string } } & {
              json: InvoiceLineItemUpdateRequest
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string; invoice_id: string } } & {
              json: InvoiceLineItemUpdateRequest
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string; invoice_id: string } } & {
              json: InvoiceLineItemUpdateRequest
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string; invoice_id: string } } & {
              json: InvoiceLineItemUpdateRequest
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string; invoice_id: string } } & {
              json: InvoiceLineItemUpdateRequest
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { id: string; invoice_id: string } } & {
              json: InvoiceLineItemUpdateRequest
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string; invoice_id: string } } & {
              json: InvoiceLineItemUpdateRequest
            }
            output: {}
            outputFormat: string
            status: 429
          }
      $delete:
        | {
            input: { param: { id: string; invoice_id: string } }
            output: InvoiceLineItem
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string; invoice_id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string; invoice_id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string; invoice_id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string; invoice_id: string } }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/journal_entries': {
      $get:
        | {
            input: {
              query: {
                journal_report_id: string
                page?: number | undefined
                per_page?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              query: {
                journal_report_id: string
                page?: number | undefined
                per_page?: number | undefined
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                journal_report_id: string
                page?: number | undefined
                per_page?: number | undefined
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                journal_report_id: string
                page?: number | undefined
                per_page?: number | undefined
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                journal_report_id: string
                page?: number | undefined
                per_page?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              query: {
                journal_report_id: string
                page?: number | undefined
                per_page?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: {
              query: {
                journal_report_id: string
                page?: number | undefined
                per_page?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/journal_entries/:id': {
      $get:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
        | {
            input: { param: { id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
    }
  } & {
    '/api/journal_reports': {
      $get:
        | {
            input: { query: { status?: 'draft' | 'published' | 'ready' | undefined } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { query: { status?: 'draft' | 'published' | 'ready' | undefined } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { status?: 'draft' | 'published' | 'ready' | undefined } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { status?: 'draft' | 'published' | 'ready' | undefined } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { status?: 'draft' | 'published' | 'ready' | undefined } }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/journal_reports/:id': {
      $get:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
        | {
            input: { param: { id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $patch:
        | {
            input: { param: { id: string } } & {
              json: { metadata?: { [x: string]: unknown } | undefined; status?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              json: { metadata?: { [x: string]: unknown } | undefined; status?: string | undefined }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              json: { metadata?: { [x: string]: unknown } | undefined; status?: string | undefined }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              json: { metadata?: { [x: string]: unknown } | undefined; status?: string | undefined }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              json: { metadata?: { [x: string]: unknown } | undefined; status?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              json: { metadata?: { [x: string]: unknown } | undefined; status?: string | undefined }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { id: string } } & {
              json: { metadata?: { [x: string]: unknown } | undefined; status?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { param: { id: string } } & {
              json: { metadata?: { [x: string]: unknown } | undefined; status?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/journal_sources': {
      $get:
        | {
            input: {
              query: {
                journal_entry_id?: string | undefined
                journal_report_id?: string | undefined
                page?: number | undefined
                per_page?: number | undefined
                source_id?: string | undefined
                source_type?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              query: {
                journal_entry_id?: string | undefined
                journal_report_id?: string | undefined
                page?: number | undefined
                per_page?: number | undefined
                source_id?: string | undefined
                source_type?: string | undefined
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                journal_entry_id?: string | undefined
                journal_report_id?: string | undefined
                page?: number | undefined
                per_page?: number | undefined
                source_id?: string | undefined
                source_type?: string | undefined
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                journal_entry_id?: string | undefined
                journal_report_id?: string | undefined
                page?: number | undefined
                per_page?: number | undefined
                source_id?: string | undefined
                source_type?: string | undefined
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                journal_entry_id?: string | undefined
                journal_report_id?: string | undefined
                page?: number | undefined
                per_page?: number | undefined
                source_id?: string | undefined
                source_type?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              query: {
                journal_entry_id?: string | undefined
                journal_report_id?: string | undefined
                page?: number | undefined
                per_page?: number | undefined
                source_id?: string | undefined
                source_type?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/journal_sources/:id': {
      $get:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
        | {
            input: { param: { id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
    }
  } & {
    '/api/ledger_account_balance_monitors': {
      $get:
        | {
            input: {
              query: {
                after_cursor?: (string | null) | undefined
                ledger_account_id?: string | undefined
                per_page?: number | undefined
                'id[]'?: string[] | undefined
                metadata?: { [x: string]: string } | undefined
              }
            }
            output: LedgerAccountBalanceMonitor[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                after_cursor?: (string | null) | undefined
                ledger_account_id?: string | undefined
                per_page?: number | undefined
                'id[]'?: string[] | undefined
                metadata?: { [x: string]: string } | undefined
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                after_cursor?: (string | null) | undefined
                ledger_account_id?: string | undefined
                per_page?: number | undefined
                'id[]'?: string[] | undefined
                metadata?: { [x: string]: string } | undefined
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                after_cursor?: (string | null) | undefined
                ledger_account_id?: string | undefined
                per_page?: number | undefined
                'id[]'?: string[] | undefined
                metadata?: { [x: string]: string } | undefined
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                after_cursor?: (string | null) | undefined
                ledger_account_id?: string | undefined
                per_page?: number | undefined
                'id[]'?: string[] | undefined
                metadata?: { [x: string]: string } | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
      $post:
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: LedgerAccountBalanceMonitorCreateRequest
            }
            output: LedgerAccountBalanceMonitor
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: LedgerAccountBalanceMonitorCreateRequest
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: LedgerAccountBalanceMonitorCreateRequest
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: LedgerAccountBalanceMonitorCreateRequest
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: LedgerAccountBalanceMonitorCreateRequest
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: LedgerAccountBalanceMonitorCreateRequest
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: LedgerAccountBalanceMonitorCreateRequest
            }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/ledger_account_balance_monitors/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: LedgerAccountBalanceMonitor
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $patch:
        | {
            input: { param: { id: string } } & { json: LedgerAccountBalanceMonitorUpdateRequest }
            output: LedgerAccountBalanceMonitor
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: LedgerAccountBalanceMonitorUpdateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: LedgerAccountBalanceMonitorUpdateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: LedgerAccountBalanceMonitorUpdateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: LedgerAccountBalanceMonitorUpdateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: LedgerAccountBalanceMonitorUpdateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { id: string } } & { json: LedgerAccountBalanceMonitorUpdateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { json: LedgerAccountBalanceMonitorUpdateRequest }
            output: {}
            outputFormat: string
            status: 429
          }
      $delete:
        | {
            input: { param: { id: string } }
            output: LedgerAccountBalanceMonitor
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
    }
  } & {
    '/api/ledger_account_categories': {
      $get:
        | {
            input: {
              query: {
                after_cursor?: (string | null) | undefined
                balances?: { effective_at?: string | undefined } | undefined
                currency?: string | undefined
                external_id?: string | undefined
                ledger_account_id?: string | undefined
                ledger_id?: string | undefined
                name?: string | undefined
                parent_ledger_account_category_id?: string | undefined
                per_page?: number | undefined
                'id[]'?: string[] | undefined
                'name[]'?: string[] | undefined
                metadata?: { [x: string]: string } | undefined
              }
            }
            output: LedgerAccountCategory[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                after_cursor?: (string | null) | undefined
                balances?: { effective_at?: string | undefined } | undefined
                currency?: string | undefined
                external_id?: string | undefined
                ledger_account_id?: string | undefined
                ledger_id?: string | undefined
                name?: string | undefined
                parent_ledger_account_category_id?: string | undefined
                per_page?: number | undefined
                'id[]'?: string[] | undefined
                'name[]'?: string[] | undefined
                metadata?: { [x: string]: string } | undefined
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                after_cursor?: (string | null) | undefined
                balances?: { effective_at?: string | undefined } | undefined
                currency?: string | undefined
                external_id?: string | undefined
                ledger_account_id?: string | undefined
                ledger_id?: string | undefined
                name?: string | undefined
                parent_ledger_account_category_id?: string | undefined
                per_page?: number | undefined
                'id[]'?: string[] | undefined
                'name[]'?: string[] | undefined
                metadata?: { [x: string]: string } | undefined
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                after_cursor?: (string | null) | undefined
                balances?: { effective_at?: string | undefined } | undefined
                currency?: string | undefined
                external_id?: string | undefined
                ledger_account_id?: string | undefined
                ledger_id?: string | undefined
                name?: string | undefined
                parent_ledger_account_category_id?: string | undefined
                per_page?: number | undefined
                'id[]'?: string[] | undefined
                'name[]'?: string[] | undefined
                metadata?: { [x: string]: string } | undefined
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                after_cursor?: (string | null) | undefined
                balances?: { effective_at?: string | undefined } | undefined
                currency?: string | undefined
                external_id?: string | undefined
                ledger_account_id?: string | undefined
                ledger_id?: string | undefined
                name?: string | undefined
                parent_ledger_account_category_id?: string | undefined
                per_page?: number | undefined
                'id[]'?: string[] | undefined
                'name[]'?: string[] | undefined
                metadata?: { [x: string]: string } | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
      $post:
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: LedgerAccountCategoryCreateRequest
            }
            output: LedgerAccountCategory
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: LedgerAccountCategoryCreateRequest
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: LedgerAccountCategoryCreateRequest
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: LedgerAccountCategoryCreateRequest
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: LedgerAccountCategoryCreateRequest
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: LedgerAccountCategoryCreateRequest
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: LedgerAccountCategoryCreateRequest
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: LedgerAccountCategoryCreateRequest
            }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/ledger_account_categories/:id': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                balances?:
                  | { as_of_date?: string | undefined; effective_at?: string | undefined }
                  | undefined
              }
            }
            output: LedgerAccountCategory
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                balances?:
                  | { as_of_date?: string | undefined; effective_at?: string | undefined }
                  | undefined
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: {
                balances?:
                  | { as_of_date?: string | undefined; effective_at?: string | undefined }
                  | undefined
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: {
                balances?:
                  | { as_of_date?: string | undefined; effective_at?: string | undefined }
                  | undefined
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              query: {
                balances?:
                  | { as_of_date?: string | undefined; effective_at?: string | undefined }
                  | undefined
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & {
              query: {
                balances?:
                  | { as_of_date?: string | undefined; effective_at?: string | undefined }
                  | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
      $patch:
        | {
            input: { param: { id: string } } & { json: LedgerAccountCategoryUpdateRequest }
            output: LedgerAccountCategory
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: LedgerAccountCategoryUpdateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: LedgerAccountCategoryUpdateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: LedgerAccountCategoryUpdateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: LedgerAccountCategoryUpdateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: LedgerAccountCategoryUpdateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { id: string } } & { json: LedgerAccountCategoryUpdateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { id: string } } & { json: LedgerAccountCategoryUpdateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { json: LedgerAccountCategoryUpdateRequest }
            output: {}
            outputFormat: string
            status: 429
          }
      $delete:
        | {
            input: { param: { id: string } }
            output: LedgerAccountCategory
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
    }
  } & {
    '/api/ledger_account_categories/:id/ledger_account_categories/:sub_category_id': {
      $put:
        | {
            input: { param: { id: string; sub_category_id: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { id: string; sub_category_id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string; sub_category_id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string; sub_category_id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string; sub_category_id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string; sub_category_id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string; sub_category_id: string } }
            output: {}
            outputFormat: string
            status: 429
          }
      $delete:
        | {
            input: { param: { id: string; sub_category_id: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { id: string; sub_category_id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string; sub_category_id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string; sub_category_id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string; sub_category_id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string; sub_category_id: string } }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/ledger_account_categories/:id/ledger_accounts/:ledger_account_id': {
      $put:
        | {
            input: { param: { id: string; ledger_account_id: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { id: string; ledger_account_id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string; ledger_account_id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string; ledger_account_id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string; ledger_account_id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string; ledger_account_id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string; ledger_account_id: string } }
            output: {}
            outputFormat: string
            status: 429
          }
      $delete:
        | {
            input: { param: { id: string; ledger_account_id: string } }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { id: string; ledger_account_id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string; ledger_account_id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string; ledger_account_id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string; ledger_account_id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string; ledger_account_id: string } }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/ledger_account_settlements': {
      $get:
        | {
            input: {
              query: {
                after_cursor?: (string | null) | undefined
                created_at?: { [x: string]: string } | undefined
                ledger_id?: string | undefined
                ledger_transaction_id?: string | undefined
                per_page?: number | undefined
                settled_ledger_account_id?: string | undefined
                settlement_entry_direction?: string | undefined
                updated_at?: { [x: string]: string } | undefined
                'id[]'?: string[] | undefined
                metadata?: { [x: string]: string } | undefined
              }
            }
            output: LedgerAccountSettlement[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                after_cursor?: (string | null) | undefined
                created_at?: { [x: string]: string } | undefined
                ledger_id?: string | undefined
                ledger_transaction_id?: string | undefined
                per_page?: number | undefined
                settled_ledger_account_id?: string | undefined
                settlement_entry_direction?: string | undefined
                updated_at?: { [x: string]: string } | undefined
                'id[]'?: string[] | undefined
                metadata?: { [x: string]: string } | undefined
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                after_cursor?: (string | null) | undefined
                created_at?: { [x: string]: string } | undefined
                ledger_id?: string | undefined
                ledger_transaction_id?: string | undefined
                per_page?: number | undefined
                settled_ledger_account_id?: string | undefined
                settlement_entry_direction?: string | undefined
                updated_at?: { [x: string]: string } | undefined
                'id[]'?: string[] | undefined
                metadata?: { [x: string]: string } | undefined
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                after_cursor?: (string | null) | undefined
                created_at?: { [x: string]: string } | undefined
                ledger_id?: string | undefined
                ledger_transaction_id?: string | undefined
                per_page?: number | undefined
                settled_ledger_account_id?: string | undefined
                settlement_entry_direction?: string | undefined
                updated_at?: { [x: string]: string } | undefined
                'id[]'?: string[] | undefined
                metadata?: { [x: string]: string } | undefined
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                after_cursor?: (string | null) | undefined
                created_at?: { [x: string]: string } | undefined
                ledger_id?: string | undefined
                ledger_transaction_id?: string | undefined
                per_page?: number | undefined
                settled_ledger_account_id?: string | undefined
                settlement_entry_direction?: string | undefined
                updated_at?: { [x: string]: string } | undefined
                'id[]'?: string[] | undefined
                metadata?: { [x: string]: string } | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
      $post:
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: LedgerAccountSettlementCreateRequest
            }
            output: LedgerAccountSettlement
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: LedgerAccountSettlementCreateRequest
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: LedgerAccountSettlementCreateRequest
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: LedgerAccountSettlementCreateRequest
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: LedgerAccountSettlementCreateRequest
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: LedgerAccountSettlementCreateRequest
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: LedgerAccountSettlementCreateRequest
            }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/ledger_account_settlements/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: LedgerAccountSettlement
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $patch:
        | {
            input: { param: { id: string } } & { json: LedgerAccountSettlementUpdateRequest }
            output: LedgerAccountSettlement
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: LedgerAccountSettlementUpdateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: LedgerAccountSettlementUpdateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: LedgerAccountSettlementUpdateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: LedgerAccountSettlementUpdateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: LedgerAccountSettlementUpdateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { id: string } } & { json: LedgerAccountSettlementUpdateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { json: LedgerAccountSettlementUpdateRequest }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/ledger_account_settlements/:id/ledger_entries': {
      $patch:
        | {
            input: { param: { id: string } } & { json: LedgerAccountSettlementEntriesPatchRequest }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: LedgerAccountSettlementEntriesPatchRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: LedgerAccountSettlementEntriesPatchRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: LedgerAccountSettlementEntriesPatchRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: LedgerAccountSettlementEntriesPatchRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: LedgerAccountSettlementEntriesPatchRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { id: string } } & { json: LedgerAccountSettlementEntriesPatchRequest }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { param: { id: string } } & { json: LedgerAccountSettlementEntriesPatchRequest }
            output: {}
            outputFormat: string
            status: 429
          }
      $delete:
        | {
            input: { param: { id: string } } & { json: LedgerAccountSettlementEntriesDeleteRequest }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: LedgerAccountSettlementEntriesDeleteRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: LedgerAccountSettlementEntriesDeleteRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: LedgerAccountSettlementEntriesDeleteRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: LedgerAccountSettlementEntriesDeleteRequest }
            output: {}
            outputFormat: string
            status: 422
          }
        | {
            input: { param: { id: string } } & { json: LedgerAccountSettlementEntriesDeleteRequest }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/ledger_account_statements': {
      $post:
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: LedgerAccountStatementCreateRequest
            }
            output: LedgerAccountStatement
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: LedgerAccountStatementCreateRequest
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: LedgerAccountStatementCreateRequest
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: LedgerAccountStatementCreateRequest
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: LedgerAccountStatementCreateRequest
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: LedgerAccountStatementCreateRequest
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: LedgerAccountStatementCreateRequest
            }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/ledger_account_statements/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: LedgerAccountStatement
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
    }
  } & {
    '/api/ledger_accounts': {
      $get:
        | {
            input: {
              query: {
                after_cursor?: (string | null) | undefined
                available_balance_amount?:
                  | {
                      eq?: number | undefined
                      gt?: number | undefined
                      gte?: number | undefined
                      lt?: number | undefined
                      lte?: number | undefined
                      not_eq?: number | undefined
                    }
                  | undefined
                balances?:
                  | {
                      as_of_date?: string | undefined
                      effective_at?: string | undefined
                      effective_at_lower_bound?: string | undefined
                      effective_at_upper_bound?: string | undefined
                    }
                  | undefined
                created_at?: { [x: string]: string } | undefined
                currency?: string | undefined
                external_id?: string | undefined
                ledger_account_category_id?: string | undefined
                ledger_id?: string | undefined
                normal_balance?: 'credit' | 'debit' | undefined
                pending_balance_amount?:
                  | {
                      eq?: number | undefined
                      gt?: number | undefined
                      gte?: number | undefined
                      lt?: number | undefined
                      lte?: number | undefined
                      not_eq?: number | undefined
                    }
                  | undefined
                per_page?: number | undefined
                posted_balance_amount?:
                  | {
                      eq?: number | undefined
                      gt?: number | undefined
                      gte?: number | undefined
                      lt?: number | undefined
                      lte?: number | undefined
                      not_eq?: number | undefined
                    }
                  | undefined
                updated_at?: { [x: string]: string } | undefined
                'id[]'?: string[] | undefined
                'name[]'?: string[] | undefined
                metadata?: { [x: string]: string } | undefined
              }
            }
            output: LedgerAccount[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                after_cursor?: (string | null) | undefined
                available_balance_amount?:
                  | {
                      eq?: number | undefined
                      gt?: number | undefined
                      gte?: number | undefined
                      lt?: number | undefined
                      lte?: number | undefined
                      not_eq?: number | undefined
                    }
                  | undefined
                balances?:
                  | {
                      as_of_date?: string | undefined
                      effective_at?: string | undefined
                      effective_at_lower_bound?: string | undefined
                      effective_at_upper_bound?: string | undefined
                    }
                  | undefined
                created_at?: { [x: string]: string } | undefined
                currency?: string | undefined
                external_id?: string | undefined
                ledger_account_category_id?: string | undefined
                ledger_id?: string | undefined
                normal_balance?: 'credit' | 'debit' | undefined
                pending_balance_amount?:
                  | {
                      eq?: number | undefined
                      gt?: number | undefined
                      gte?: number | undefined
                      lt?: number | undefined
                      lte?: number | undefined
                      not_eq?: number | undefined
                    }
                  | undefined
                per_page?: number | undefined
                posted_balance_amount?:
                  | {
                      eq?: number | undefined
                      gt?: number | undefined
                      gte?: number | undefined
                      lt?: number | undefined
                      lte?: number | undefined
                      not_eq?: number | undefined
                    }
                  | undefined
                updated_at?: { [x: string]: string } | undefined
                'id[]'?: string[] | undefined
                'name[]'?: string[] | undefined
                metadata?: { [x: string]: string } | undefined
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                after_cursor?: (string | null) | undefined
                available_balance_amount?:
                  | {
                      eq?: number | undefined
                      gt?: number | undefined
                      gte?: number | undefined
                      lt?: number | undefined
                      lte?: number | undefined
                      not_eq?: number | undefined
                    }
                  | undefined
                balances?:
                  | {
                      as_of_date?: string | undefined
                      effective_at?: string | undefined
                      effective_at_lower_bound?: string | undefined
                      effective_at_upper_bound?: string | undefined
                    }
                  | undefined
                created_at?: { [x: string]: string } | undefined
                currency?: string | undefined
                external_id?: string | undefined
                ledger_account_category_id?: string | undefined
                ledger_id?: string | undefined
                normal_balance?: 'credit' | 'debit' | undefined
                pending_balance_amount?:
                  | {
                      eq?: number | undefined
                      gt?: number | undefined
                      gte?: number | undefined
                      lt?: number | undefined
                      lte?: number | undefined
                      not_eq?: number | undefined
                    }
                  | undefined
                per_page?: number | undefined
                posted_balance_amount?:
                  | {
                      eq?: number | undefined
                      gt?: number | undefined
                      gte?: number | undefined
                      lt?: number | undefined
                      lte?: number | undefined
                      not_eq?: number | undefined
                    }
                  | undefined
                updated_at?: { [x: string]: string } | undefined
                'id[]'?: string[] | undefined
                'name[]'?: string[] | undefined
                metadata?: { [x: string]: string } | undefined
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                after_cursor?: (string | null) | undefined
                available_balance_amount?:
                  | {
                      eq?: number | undefined
                      gt?: number | undefined
                      gte?: number | undefined
                      lt?: number | undefined
                      lte?: number | undefined
                      not_eq?: number | undefined
                    }
                  | undefined
                balances?:
                  | {
                      as_of_date?: string | undefined
                      effective_at?: string | undefined
                      effective_at_lower_bound?: string | undefined
                      effective_at_upper_bound?: string | undefined
                    }
                  | undefined
                created_at?: { [x: string]: string } | undefined
                currency?: string | undefined
                external_id?: string | undefined
                ledger_account_category_id?: string | undefined
                ledger_id?: string | undefined
                normal_balance?: 'credit' | 'debit' | undefined
                pending_balance_amount?:
                  | {
                      eq?: number | undefined
                      gt?: number | undefined
                      gte?: number | undefined
                      lt?: number | undefined
                      lte?: number | undefined
                      not_eq?: number | undefined
                    }
                  | undefined
                per_page?: number | undefined
                posted_balance_amount?:
                  | {
                      eq?: number | undefined
                      gt?: number | undefined
                      gte?: number | undefined
                      lt?: number | undefined
                      lte?: number | undefined
                      not_eq?: number | undefined
                    }
                  | undefined
                updated_at?: { [x: string]: string } | undefined
                'id[]'?: string[] | undefined
                'name[]'?: string[] | undefined
                metadata?: { [x: string]: string } | undefined
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                after_cursor?: (string | null) | undefined
                available_balance_amount?:
                  | {
                      eq?: number | undefined
                      gt?: number | undefined
                      gte?: number | undefined
                      lt?: number | undefined
                      lte?: number | undefined
                      not_eq?: number | undefined
                    }
                  | undefined
                balances?:
                  | {
                      as_of_date?: string | undefined
                      effective_at?: string | undefined
                      effective_at_lower_bound?: string | undefined
                      effective_at_upper_bound?: string | undefined
                    }
                  | undefined
                created_at?: { [x: string]: string } | undefined
                currency?: string | undefined
                external_id?: string | undefined
                ledger_account_category_id?: string | undefined
                ledger_id?: string | undefined
                normal_balance?: 'credit' | 'debit' | undefined
                pending_balance_amount?:
                  | {
                      eq?: number | undefined
                      gt?: number | undefined
                      gte?: number | undefined
                      lt?: number | undefined
                      lte?: number | undefined
                      not_eq?: number | undefined
                    }
                  | undefined
                per_page?: number | undefined
                posted_balance_amount?:
                  | {
                      eq?: number | undefined
                      gt?: number | undefined
                      gte?: number | undefined
                      lt?: number | undefined
                      lte?: number | undefined
                      not_eq?: number | undefined
                    }
                  | undefined
                updated_at?: { [x: string]: string } | undefined
                'id[]'?: string[] | undefined
                'name[]'?: string[] | undefined
                metadata?: { [x: string]: string } | undefined
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              query: {
                after_cursor?: (string | null) | undefined
                available_balance_amount?:
                  | {
                      eq?: number | undefined
                      gt?: number | undefined
                      gte?: number | undefined
                      lt?: number | undefined
                      lte?: number | undefined
                      not_eq?: number | undefined
                    }
                  | undefined
                balances?:
                  | {
                      as_of_date?: string | undefined
                      effective_at?: string | undefined
                      effective_at_lower_bound?: string | undefined
                      effective_at_upper_bound?: string | undefined
                    }
                  | undefined
                created_at?: { [x: string]: string } | undefined
                currency?: string | undefined
                external_id?: string | undefined
                ledger_account_category_id?: string | undefined
                ledger_id?: string | undefined
                normal_balance?: 'credit' | 'debit' | undefined
                pending_balance_amount?:
                  | {
                      eq?: number | undefined
                      gt?: number | undefined
                      gte?: number | undefined
                      lt?: number | undefined
                      lte?: number | undefined
                      not_eq?: number | undefined
                    }
                  | undefined
                per_page?: number | undefined
                posted_balance_amount?:
                  | {
                      eq?: number | undefined
                      gt?: number | undefined
                      gte?: number | undefined
                      lt?: number | undefined
                      lte?: number | undefined
                      not_eq?: number | undefined
                    }
                  | undefined
                updated_at?: { [x: string]: string } | undefined
                'id[]'?: string[] | undefined
                'name[]'?: string[] | undefined
                metadata?: { [x: string]: string } | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
      $post:
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: LedgerAccountCreateRequest
            }
            output: LedgerAccount
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: LedgerAccountCreateRequest
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: LedgerAccountCreateRequest
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: LedgerAccountCreateRequest
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: LedgerAccountCreateRequest
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: LedgerAccountCreateRequest
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: LedgerAccountCreateRequest
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: LedgerAccountCreateRequest
            }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/ledger_accounts/:id': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                balances?:
                  | {
                      as_of_date?: string | undefined
                      as_of_lock_version?: number | undefined
                      effective_at?: string | undefined
                      effective_at_lower_bound?: string | undefined
                      effective_at_upper_bound?: string | undefined
                    }
                  | undefined
              }
            }
            output: LedgerAccount
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                balances?:
                  | {
                      as_of_date?: string | undefined
                      as_of_lock_version?: number | undefined
                      effective_at?: string | undefined
                      effective_at_lower_bound?: string | undefined
                      effective_at_upper_bound?: string | undefined
                    }
                  | undefined
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: {
                balances?:
                  | {
                      as_of_date?: string | undefined
                      as_of_lock_version?: number | undefined
                      effective_at?: string | undefined
                      effective_at_lower_bound?: string | undefined
                      effective_at_upper_bound?: string | undefined
                    }
                  | undefined
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: {
                balances?:
                  | {
                      as_of_date?: string | undefined
                      as_of_lock_version?: number | undefined
                      effective_at?: string | undefined
                      effective_at_lower_bound?: string | undefined
                      effective_at_upper_bound?: string | undefined
                    }
                  | undefined
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              query: {
                balances?:
                  | {
                      as_of_date?: string | undefined
                      as_of_lock_version?: number | undefined
                      effective_at?: string | undefined
                      effective_at_lower_bound?: string | undefined
                      effective_at_upper_bound?: string | undefined
                    }
                  | undefined
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & {
              query: {
                balances?:
                  | {
                      as_of_date?: string | undefined
                      as_of_lock_version?: number | undefined
                      effective_at?: string | undefined
                      effective_at_lower_bound?: string | undefined
                      effective_at_upper_bound?: string | undefined
                    }
                  | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
      $patch:
        | {
            input: { param: { id: string } } & { json: LedgerAccountUpdateRequest }
            output: LedgerAccount
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: LedgerAccountUpdateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: LedgerAccountUpdateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: LedgerAccountUpdateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: LedgerAccountUpdateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: LedgerAccountUpdateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { id: string } } & { json: LedgerAccountUpdateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { id: string } } & { json: LedgerAccountUpdateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { json: LedgerAccountUpdateRequest }
            output: {}
            outputFormat: string
            status: 429
          }
      $delete:
        | {
            input: { param: { id: string } }
            output: LedgerAccount
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
    }
  } & {
    '/api/ledger_entries': {
      $get:
        | {
            input: {
              query: {
                after_cursor?: (string | null) | undefined
                amount?:
                  | {
                      eq?: number | undefined
                      gt?: number | undefined
                      gte?: number | undefined
                      lt?: number | undefined
                      lte?: number | undefined
                    }
                  | undefined
                as_of_lock_version?: number | undefined
                direction?: 'credit' | 'debit' | undefined
                effective_at?: { [x: string]: string } | undefined
                effective_date?: { [x: string]: string } | undefined
                ledger_account_category_id?: string | undefined
                ledger_account_id?: string | undefined
                ledger_account_lock_version?: { [x: string]: number } | undefined
                ledger_account_payout_id?: string | undefined
                ledger_account_settlement_id?: string | undefined
                ledger_account_statement_id?: string | undefined
                ledger_transaction_id?: string | undefined
                order_by?:
                  | {
                      created_at?: 'asc' | 'desc' | undefined
                      effective_at?: 'asc' | 'desc' | undefined
                    }
                  | undefined
                per_page?: number | undefined
                show_balances?: boolean | undefined
                show_deleted?: boolean | undefined
                status?: 'pending' | 'posted' | 'archived' | undefined
                'status[]'?: ('pending' | 'posted' | 'archived')[] | undefined
                updated_at?: { [x: string]: string } | undefined
                'id[]'?: string[] | undefined
                metadata?: { [x: string]: string } | undefined
              }
            }
            output: LedgerEntry[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                after_cursor?: (string | null) | undefined
                amount?:
                  | {
                      eq?: number | undefined
                      gt?: number | undefined
                      gte?: number | undefined
                      lt?: number | undefined
                      lte?: number | undefined
                    }
                  | undefined
                as_of_lock_version?: number | undefined
                direction?: 'credit' | 'debit' | undefined
                effective_at?: { [x: string]: string } | undefined
                effective_date?: { [x: string]: string } | undefined
                ledger_account_category_id?: string | undefined
                ledger_account_id?: string | undefined
                ledger_account_lock_version?: { [x: string]: number } | undefined
                ledger_account_payout_id?: string | undefined
                ledger_account_settlement_id?: string | undefined
                ledger_account_statement_id?: string | undefined
                ledger_transaction_id?: string | undefined
                order_by?:
                  | {
                      created_at?: 'asc' | 'desc' | undefined
                      effective_at?: 'asc' | 'desc' | undefined
                    }
                  | undefined
                per_page?: number | undefined
                show_balances?: boolean | undefined
                show_deleted?: boolean | undefined
                status?: 'pending' | 'posted' | 'archived' | undefined
                'status[]'?: ('pending' | 'posted' | 'archived')[] | undefined
                updated_at?: { [x: string]: string } | undefined
                'id[]'?: string[] | undefined
                metadata?: { [x: string]: string } | undefined
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                after_cursor?: (string | null) | undefined
                amount?:
                  | {
                      eq?: number | undefined
                      gt?: number | undefined
                      gte?: number | undefined
                      lt?: number | undefined
                      lte?: number | undefined
                    }
                  | undefined
                as_of_lock_version?: number | undefined
                direction?: 'credit' | 'debit' | undefined
                effective_at?: { [x: string]: string } | undefined
                effective_date?: { [x: string]: string } | undefined
                ledger_account_category_id?: string | undefined
                ledger_account_id?: string | undefined
                ledger_account_lock_version?: { [x: string]: number } | undefined
                ledger_account_payout_id?: string | undefined
                ledger_account_settlement_id?: string | undefined
                ledger_account_statement_id?: string | undefined
                ledger_transaction_id?: string | undefined
                order_by?:
                  | {
                      created_at?: 'asc' | 'desc' | undefined
                      effective_at?: 'asc' | 'desc' | undefined
                    }
                  | undefined
                per_page?: number | undefined
                show_balances?: boolean | undefined
                show_deleted?: boolean | undefined
                status?: 'pending' | 'posted' | 'archived' | undefined
                'status[]'?: ('pending' | 'posted' | 'archived')[] | undefined
                updated_at?: { [x: string]: string } | undefined
                'id[]'?: string[] | undefined
                metadata?: { [x: string]: string } | undefined
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                after_cursor?: (string | null) | undefined
                amount?:
                  | {
                      eq?: number | undefined
                      gt?: number | undefined
                      gte?: number | undefined
                      lt?: number | undefined
                      lte?: number | undefined
                    }
                  | undefined
                as_of_lock_version?: number | undefined
                direction?: 'credit' | 'debit' | undefined
                effective_at?: { [x: string]: string } | undefined
                effective_date?: { [x: string]: string } | undefined
                ledger_account_category_id?: string | undefined
                ledger_account_id?: string | undefined
                ledger_account_lock_version?: { [x: string]: number } | undefined
                ledger_account_payout_id?: string | undefined
                ledger_account_settlement_id?: string | undefined
                ledger_account_statement_id?: string | undefined
                ledger_transaction_id?: string | undefined
                order_by?:
                  | {
                      created_at?: 'asc' | 'desc' | undefined
                      effective_at?: 'asc' | 'desc' | undefined
                    }
                  | undefined
                per_page?: number | undefined
                show_balances?: boolean | undefined
                show_deleted?: boolean | undefined
                status?: 'pending' | 'posted' | 'archived' | undefined
                'status[]'?: ('pending' | 'posted' | 'archived')[] | undefined
                updated_at?: { [x: string]: string } | undefined
                'id[]'?: string[] | undefined
                metadata?: { [x: string]: string } | undefined
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                after_cursor?: (string | null) | undefined
                amount?:
                  | {
                      eq?: number | undefined
                      gt?: number | undefined
                      gte?: number | undefined
                      lt?: number | undefined
                      lte?: number | undefined
                    }
                  | undefined
                as_of_lock_version?: number | undefined
                direction?: 'credit' | 'debit' | undefined
                effective_at?: { [x: string]: string } | undefined
                effective_date?: { [x: string]: string } | undefined
                ledger_account_category_id?: string | undefined
                ledger_account_id?: string | undefined
                ledger_account_lock_version?: { [x: string]: number } | undefined
                ledger_account_payout_id?: string | undefined
                ledger_account_settlement_id?: string | undefined
                ledger_account_statement_id?: string | undefined
                ledger_transaction_id?: string | undefined
                order_by?:
                  | {
                      created_at?: 'asc' | 'desc' | undefined
                      effective_at?: 'asc' | 'desc' | undefined
                    }
                  | undefined
                per_page?: number | undefined
                show_balances?: boolean | undefined
                show_deleted?: boolean | undefined
                status?: 'pending' | 'posted' | 'archived' | undefined
                'status[]'?: ('pending' | 'posted' | 'archived')[] | undefined
                updated_at?: { [x: string]: string } | undefined
                'id[]'?: string[] | undefined
                metadata?: { [x: string]: string } | undefined
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              query: {
                after_cursor?: (string | null) | undefined
                amount?:
                  | {
                      eq?: number | undefined
                      gt?: number | undefined
                      gte?: number | undefined
                      lt?: number | undefined
                      lte?: number | undefined
                    }
                  | undefined
                as_of_lock_version?: number | undefined
                direction?: 'credit' | 'debit' | undefined
                effective_at?: { [x: string]: string } | undefined
                effective_date?: { [x: string]: string } | undefined
                ledger_account_category_id?: string | undefined
                ledger_account_id?: string | undefined
                ledger_account_lock_version?: { [x: string]: number } | undefined
                ledger_account_payout_id?: string | undefined
                ledger_account_settlement_id?: string | undefined
                ledger_account_statement_id?: string | undefined
                ledger_transaction_id?: string | undefined
                order_by?:
                  | {
                      created_at?: 'asc' | 'desc' | undefined
                      effective_at?: 'asc' | 'desc' | undefined
                    }
                  | undefined
                per_page?: number | undefined
                show_balances?: boolean | undefined
                show_deleted?: boolean | undefined
                status?: 'pending' | 'posted' | 'archived' | undefined
                'status[]'?: ('pending' | 'posted' | 'archived')[] | undefined
                updated_at?: { [x: string]: string } | undefined
                'id[]'?: string[] | undefined
                metadata?: { [x: string]: string } | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/ledger_entries/:id': {
      $get:
        | {
            input: { param: { id: string } } & { query: { show_balances?: boolean | undefined } }
            output: LedgerEntry
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { show_balances?: boolean | undefined } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { query: { show_balances?: boolean | undefined } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { query: { show_balances?: boolean | undefined } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { query: { show_balances?: boolean | undefined } }
            output: {}
            outputFormat: string
            status: 429
          }
      $patch:
        | {
            input: { param: { id: string } } & { json: LedgerEntryUpdateRequest }
            output: LedgerEntry
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: LedgerEntryUpdateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: LedgerEntryUpdateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: LedgerEntryUpdateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: LedgerEntryUpdateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: LedgerEntryUpdateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { id: string } } & { json: LedgerEntryUpdateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { json: LedgerEntryUpdateRequest }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/ledger_transaction_versions': {
      $get:
        | {
            input: {
              query: {
                after_cursor?: (string | null) | undefined
                created_at?: { [x: string]: string } | undefined
                ledger_account_statement_id?: string | undefined
                ledger_transaction_id?: string | undefined
                per_page?: number | undefined
                version?: { [x: string]: number } | undefined
              }
            }
            output: LedgerTransactionVersion[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                after_cursor?: (string | null) | undefined
                created_at?: { [x: string]: string } | undefined
                ledger_account_statement_id?: string | undefined
                ledger_transaction_id?: string | undefined
                per_page?: number | undefined
                version?: { [x: string]: number } | undefined
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                after_cursor?: (string | null) | undefined
                created_at?: { [x: string]: string } | undefined
                ledger_account_statement_id?: string | undefined
                ledger_transaction_id?: string | undefined
                per_page?: number | undefined
                version?: { [x: string]: number } | undefined
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                after_cursor?: (string | null) | undefined
                created_at?: { [x: string]: string } | undefined
                ledger_account_statement_id?: string | undefined
                ledger_transaction_id?: string | undefined
                per_page?: number | undefined
                version?: { [x: string]: number } | undefined
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                after_cursor?: (string | null) | undefined
                created_at?: { [x: string]: string } | undefined
                ledger_account_statement_id?: string | undefined
                ledger_transaction_id?: string | undefined
                per_page?: number | undefined
                version?: { [x: string]: number } | undefined
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                after_cursor?: (string | null) | undefined
                created_at?: { [x: string]: string } | undefined
                ledger_account_statement_id?: string | undefined
                ledger_transaction_id?: string | undefined
                per_page?: number | undefined
                version?: { [x: string]: number } | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/ledger_transactions': {
      $get:
        | {
            input: {
              query: {
                after_cursor?: (string | null) | undefined
                amount?:
                  | {
                      eq?: number | undefined
                      gt?: number | undefined
                      gte?: number | undefined
                      lt?: number | undefined
                      lte?: number | undefined
                    }
                  | undefined
                effective_at?: { [x: string]: string } | undefined
                effective_date?: { [x: string]: string } | undefined
                external_id?: string | undefined
                ledger_account_category_id?: string | undefined
                ledger_account_id?: string | undefined
                ledger_account_settlement_id?: string | undefined
                ledger_id?: string | undefined
                ledgerable_id?: string | undefined
                ledgerable_type?:
                  | 'expected_payment'
                  | 'incoming_payment_detail'
                  | 'payment_order'
                  | 'return'
                  | 'reversal'
                  | undefined
                order_by?:
                  | {
                      created_at?: 'asc' | 'desc' | undefined
                      effective_at?: 'asc' | 'desc' | undefined
                    }
                  | undefined
                partially_posts_ledger_transaction_id?: string | undefined
                per_page?: number | undefined
                posted_at?: { [x: string]: string } | undefined
                reverses_ledger_transaction_id?: string | undefined
                status?:
                  | 'pending'
                  | 'posted'
                  | 'archived'
                  | ('pending' | 'posted' | 'archived')[]
                  | undefined
                updated_at?: { [x: string]: string } | undefined
                'id[]'?: string[] | undefined
                metadata?: { [x: string]: string } | undefined
              }
            }
            output: LedgerTransaction[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                after_cursor?: (string | null) | undefined
                amount?:
                  | {
                      eq?: number | undefined
                      gt?: number | undefined
                      gte?: number | undefined
                      lt?: number | undefined
                      lte?: number | undefined
                    }
                  | undefined
                effective_at?: { [x: string]: string } | undefined
                effective_date?: { [x: string]: string } | undefined
                external_id?: string | undefined
                ledger_account_category_id?: string | undefined
                ledger_account_id?: string | undefined
                ledger_account_settlement_id?: string | undefined
                ledger_id?: string | undefined
                ledgerable_id?: string | undefined
                ledgerable_type?:
                  | 'expected_payment'
                  | 'incoming_payment_detail'
                  | 'payment_order'
                  | 'return'
                  | 'reversal'
                  | undefined
                order_by?:
                  | {
                      created_at?: 'asc' | 'desc' | undefined
                      effective_at?: 'asc' | 'desc' | undefined
                    }
                  | undefined
                partially_posts_ledger_transaction_id?: string | undefined
                per_page?: number | undefined
                posted_at?: { [x: string]: string } | undefined
                reverses_ledger_transaction_id?: string | undefined
                status?:
                  | 'pending'
                  | 'posted'
                  | 'archived'
                  | ('pending' | 'posted' | 'archived')[]
                  | undefined
                updated_at?: { [x: string]: string } | undefined
                'id[]'?: string[] | undefined
                metadata?: { [x: string]: string } | undefined
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                after_cursor?: (string | null) | undefined
                amount?:
                  | {
                      eq?: number | undefined
                      gt?: number | undefined
                      gte?: number | undefined
                      lt?: number | undefined
                      lte?: number | undefined
                    }
                  | undefined
                effective_at?: { [x: string]: string } | undefined
                effective_date?: { [x: string]: string } | undefined
                external_id?: string | undefined
                ledger_account_category_id?: string | undefined
                ledger_account_id?: string | undefined
                ledger_account_settlement_id?: string | undefined
                ledger_id?: string | undefined
                ledgerable_id?: string | undefined
                ledgerable_type?:
                  | 'expected_payment'
                  | 'incoming_payment_detail'
                  | 'payment_order'
                  | 'return'
                  | 'reversal'
                  | undefined
                order_by?:
                  | {
                      created_at?: 'asc' | 'desc' | undefined
                      effective_at?: 'asc' | 'desc' | undefined
                    }
                  | undefined
                partially_posts_ledger_transaction_id?: string | undefined
                per_page?: number | undefined
                posted_at?: { [x: string]: string } | undefined
                reverses_ledger_transaction_id?: string | undefined
                status?:
                  | 'pending'
                  | 'posted'
                  | 'archived'
                  | ('pending' | 'posted' | 'archived')[]
                  | undefined
                updated_at?: { [x: string]: string } | undefined
                'id[]'?: string[] | undefined
                metadata?: { [x: string]: string } | undefined
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                after_cursor?: (string | null) | undefined
                amount?:
                  | {
                      eq?: number | undefined
                      gt?: number | undefined
                      gte?: number | undefined
                      lt?: number | undefined
                      lte?: number | undefined
                    }
                  | undefined
                effective_at?: { [x: string]: string } | undefined
                effective_date?: { [x: string]: string } | undefined
                external_id?: string | undefined
                ledger_account_category_id?: string | undefined
                ledger_account_id?: string | undefined
                ledger_account_settlement_id?: string | undefined
                ledger_id?: string | undefined
                ledgerable_id?: string | undefined
                ledgerable_type?:
                  | 'expected_payment'
                  | 'incoming_payment_detail'
                  | 'payment_order'
                  | 'return'
                  | 'reversal'
                  | undefined
                order_by?:
                  | {
                      created_at?: 'asc' | 'desc' | undefined
                      effective_at?: 'asc' | 'desc' | undefined
                    }
                  | undefined
                partially_posts_ledger_transaction_id?: string | undefined
                per_page?: number | undefined
                posted_at?: { [x: string]: string } | undefined
                reverses_ledger_transaction_id?: string | undefined
                status?:
                  | 'pending'
                  | 'posted'
                  | 'archived'
                  | ('pending' | 'posted' | 'archived')[]
                  | undefined
                updated_at?: { [x: string]: string } | undefined
                'id[]'?: string[] | undefined
                metadata?: { [x: string]: string } | undefined
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                after_cursor?: (string | null) | undefined
                amount?:
                  | {
                      eq?: number | undefined
                      gt?: number | undefined
                      gte?: number | undefined
                      lt?: number | undefined
                      lte?: number | undefined
                    }
                  | undefined
                effective_at?: { [x: string]: string } | undefined
                effective_date?: { [x: string]: string } | undefined
                external_id?: string | undefined
                ledger_account_category_id?: string | undefined
                ledger_account_id?: string | undefined
                ledger_account_settlement_id?: string | undefined
                ledger_id?: string | undefined
                ledgerable_id?: string | undefined
                ledgerable_type?:
                  | 'expected_payment'
                  | 'incoming_payment_detail'
                  | 'payment_order'
                  | 'return'
                  | 'reversal'
                  | undefined
                order_by?:
                  | {
                      created_at?: 'asc' | 'desc' | undefined
                      effective_at?: 'asc' | 'desc' | undefined
                    }
                  | undefined
                partially_posts_ledger_transaction_id?: string | undefined
                per_page?: number | undefined
                posted_at?: { [x: string]: string } | undefined
                reverses_ledger_transaction_id?: string | undefined
                status?:
                  | 'pending'
                  | 'posted'
                  | 'archived'
                  | ('pending' | 'posted' | 'archived')[]
                  | undefined
                updated_at?: { [x: string]: string } | undefined
                'id[]'?: string[] | undefined
                metadata?: { [x: string]: string } | undefined
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              query: {
                after_cursor?: (string | null) | undefined
                amount?:
                  | {
                      eq?: number | undefined
                      gt?: number | undefined
                      gte?: number | undefined
                      lt?: number | undefined
                      lte?: number | undefined
                    }
                  | undefined
                effective_at?: { [x: string]: string } | undefined
                effective_date?: { [x: string]: string } | undefined
                external_id?: string | undefined
                ledger_account_category_id?: string | undefined
                ledger_account_id?: string | undefined
                ledger_account_settlement_id?: string | undefined
                ledger_id?: string | undefined
                ledgerable_id?: string | undefined
                ledgerable_type?:
                  | 'expected_payment'
                  | 'incoming_payment_detail'
                  | 'payment_order'
                  | 'return'
                  | 'reversal'
                  | undefined
                order_by?:
                  | {
                      created_at?: 'asc' | 'desc' | undefined
                      effective_at?: 'asc' | 'desc' | undefined
                    }
                  | undefined
                partially_posts_ledger_transaction_id?: string | undefined
                per_page?: number | undefined
                posted_at?: { [x: string]: string } | undefined
                reverses_ledger_transaction_id?: string | undefined
                status?:
                  | 'pending'
                  | 'posted'
                  | 'archived'
                  | ('pending' | 'posted' | 'archived')[]
                  | undefined
                updated_at?: { [x: string]: string } | undefined
                'id[]'?: string[] | undefined
                metadata?: { [x: string]: string } | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
      $post:
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: LedgerTransactionCreateRequest
            }
            output: LedgerTransaction
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: LedgerTransactionCreateRequest
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: LedgerTransactionCreateRequest
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: LedgerTransactionCreateRequest
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: LedgerTransactionCreateRequest
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: LedgerTransactionCreateRequest
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: LedgerTransactionCreateRequest
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: LedgerTransactionCreateRequest
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/ledger_transactions/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: LedgerTransaction
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 409
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $patch:
        | {
            input: { param: { id: string } } & { json: LedgerTransactionUpdateRequest }
            output: LedgerTransaction
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: LedgerTransactionUpdateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: LedgerTransactionUpdateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: LedgerTransactionUpdateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: LedgerTransactionUpdateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: LedgerTransactionUpdateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { id: string } } & { json: LedgerTransactionUpdateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { id: string } } & { json: LedgerTransactionUpdateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { json: LedgerTransactionUpdateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 429
          }
    }
  } & {
    '/api/ledger_transactions/:id/partial_post': {
      $post:
        | {
            input: { param: { id: string } } & { json: LedgerTransactionPartialPostCreateRequest }
            output: LedgerTransaction
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: string } } & { json: LedgerTransactionPartialPostCreateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: LedgerTransactionPartialPostCreateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: LedgerTransactionPartialPostCreateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: LedgerTransactionPartialPostCreateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: LedgerTransactionPartialPostCreateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { id: string } } & { json: LedgerTransactionPartialPostCreateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { json: LedgerTransactionPartialPostCreateRequest }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/ledger_transactions/:id/reversal': {
      $post:
        | {
            input: { param: { id: string } } & { json: LedgerTransactionReversalCreateRequest }
            output: LedgerTransaction
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { id: string } } & { json: LedgerTransactionReversalCreateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: LedgerTransactionReversalCreateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: LedgerTransactionReversalCreateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: LedgerTransactionReversalCreateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: LedgerTransactionReversalCreateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { id: string } } & { json: LedgerTransactionReversalCreateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { json: LedgerTransactionReversalCreateRequest }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/ledger_transactions/:id/versions': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: {
                after_cursor?: (string | null) | undefined
                created_at?: { [x: string]: string } | undefined
                per_page?: number | undefined
                version?: { [x: string]: number } | undefined
                'id[]'?: string[] | undefined
              }
            }
            output: LedgerTransactionVersion[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: {
                after_cursor?: (string | null) | undefined
                created_at?: { [x: string]: string } | undefined
                per_page?: number | undefined
                version?: { [x: string]: number } | undefined
                'id[]'?: string[] | undefined
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: {
                after_cursor?: (string | null) | undefined
                created_at?: { [x: string]: string } | undefined
                per_page?: number | undefined
                version?: { [x: string]: number } | undefined
                'id[]'?: string[] | undefined
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: {
                after_cursor?: (string | null) | undefined
                created_at?: { [x: string]: string } | undefined
                per_page?: number | undefined
                version?: { [x: string]: number } | undefined
                'id[]'?: string[] | undefined
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: {
                after_cursor?: (string | null) | undefined
                created_at?: { [x: string]: string } | undefined
                per_page?: number | undefined
                version?: { [x: string]: number } | undefined
                'id[]'?: string[] | undefined
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              query: {
                after_cursor?: (string | null) | undefined
                created_at?: { [x: string]: string } | undefined
                per_page?: number | undefined
                version?: { [x: string]: number } | undefined
                'id[]'?: string[] | undefined
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & {
              query: {
                after_cursor?: (string | null) | undefined
                created_at?: { [x: string]: string } | undefined
                per_page?: number | undefined
                version?: { [x: string]: number } | undefined
                'id[]'?: string[] | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/ledgers': {
      $get:
        | {
            input: {
              query: {
                after_cursor?: (string | null) | undefined
                per_page?: number | undefined
                updated_at?: { [x: string]: string } | undefined
                'id[]'?: string[] | undefined
                metadata?: { [x: string]: string } | undefined
              }
            }
            output: Ledger[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                after_cursor?: (string | null) | undefined
                per_page?: number | undefined
                updated_at?: { [x: string]: string } | undefined
                'id[]'?: string[] | undefined
                metadata?: { [x: string]: string } | undefined
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                after_cursor?: (string | null) | undefined
                per_page?: number | undefined
                updated_at?: { [x: string]: string } | undefined
                'id[]'?: string[] | undefined
                metadata?: { [x: string]: string } | undefined
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                after_cursor?: (string | null) | undefined
                per_page?: number | undefined
                updated_at?: { [x: string]: string } | undefined
                'id[]'?: string[] | undefined
                metadata?: { [x: string]: string } | undefined
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                after_cursor?: (string | null) | undefined
                per_page?: number | undefined
                updated_at?: { [x: string]: string } | undefined
                'id[]'?: string[] | undefined
                metadata?: { [x: string]: string } | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
      $post:
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: LedgerCreateRequest
            }
            output: Ledger
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: LedgerCreateRequest
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: LedgerCreateRequest
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: LedgerCreateRequest
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: LedgerCreateRequest
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: LedgerCreateRequest
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: LedgerCreateRequest
            }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/ledgers/:id': {
      $get:
        | { input: { param: { id: string } }; output: Ledger; outputFormat: 'json'; status: 200 }
        | {
            input: { param: { id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $patch:
        | {
            input: { param: { id: string } } & { json: LedgerUpdateRequest }
            output: Ledger
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: LedgerUpdateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: LedgerUpdateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: LedgerUpdateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: LedgerUpdateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: LedgerUpdateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { id: string } } & { json: LedgerUpdateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { json: LedgerUpdateRequest }
            output: {}
            outputFormat: string
            status: 429
          }
      $delete:
        | { input: { param: { id: string } }; output: Ledger; outputFormat: 'json'; status: 200 }
        | {
            input: { param: { id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
    }
  } & {
    '/api/legal_entities': {
      $get:
        | {
            input: {
              query: {
                after_cursor?: (string | null) | undefined
                external_id?: string | undefined
                legal_entity_type?: 'business' | 'individual' | undefined
                per_page?: number | undefined
                show_deleted?: string | undefined
                status?: 'pending' | 'draft' | 'active' | 'suspended' | 'denied' | undefined
                metadata?: { [x: string]: string } | undefined
              }
            }
            output: LegalEntity[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                after_cursor?: (string | null) | undefined
                external_id?: string | undefined
                legal_entity_type?: 'business' | 'individual' | undefined
                per_page?: number | undefined
                show_deleted?: string | undefined
                status?: 'pending' | 'draft' | 'active' | 'suspended' | 'denied' | undefined
                metadata?: { [x: string]: string } | undefined
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                after_cursor?: (string | null) | undefined
                external_id?: string | undefined
                legal_entity_type?: 'business' | 'individual' | undefined
                per_page?: number | undefined
                show_deleted?: string | undefined
                status?: 'pending' | 'draft' | 'active' | 'suspended' | 'denied' | undefined
                metadata?: { [x: string]: string } | undefined
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                after_cursor?: (string | null) | undefined
                external_id?: string | undefined
                legal_entity_type?: 'business' | 'individual' | undefined
                per_page?: number | undefined
                show_deleted?: string | undefined
                status?: 'pending' | 'draft' | 'active' | 'suspended' | 'denied' | undefined
                metadata?: { [x: string]: string } | undefined
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                after_cursor?: (string | null) | undefined
                external_id?: string | undefined
                legal_entity_type?: 'business' | 'individual' | undefined
                per_page?: number | undefined
                show_deleted?: string | undefined
                status?: 'pending' | 'draft' | 'active' | 'suspended' | 'denied' | undefined
                metadata?: { [x: string]: string } | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
      $post:
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: LegalEntityCreateRequest
            }
            output: LegalEntity
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: LegalEntityCreateRequest
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: LegalEntityCreateRequest
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: LegalEntityCreateRequest
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: LegalEntityCreateRequest
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: LegalEntityCreateRequest
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: LegalEntityCreateRequest
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: LegalEntityCreateRequest
            }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/legal_entities/:id': {
      $get:
        | {
            input: { param: { id: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            }
            output: LegalEntity
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 429
          }
      $patch:
        | {
            input: { param: { id: string } } & { json: LegalEntityUpdateRequest }
            output: LegalEntity
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: LegalEntityUpdateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: LegalEntityUpdateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: LegalEntityUpdateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: LegalEntityUpdateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: LegalEntityUpdateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { id: string } } & { json: LegalEntityUpdateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { id: string } } & { json: LegalEntityUpdateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { json: LegalEntityUpdateRequest }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/legal_entity_associations': {
      $post:
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: LegalEntityAssociationCreateRequest
            }
            output: LegalEntityAssociation
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: LegalEntityAssociationCreateRequest
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: LegalEntityAssociationCreateRequest
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: LegalEntityAssociationCreateRequest
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: LegalEntityAssociationCreateRequest
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: LegalEntityAssociationCreateRequest
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: LegalEntityAssociationCreateRequest
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: LegalEntityAssociationCreateRequest
            }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/legal_entity_associations/:id': {
      $delete:
        | {
            input: { param: { id: string } }
            output: LegalEntityAssociation
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
    }
  } & {
    '/api/payment_actions': {
      $get:
        | {
            input: {
              query: {
                actionable_id?: string | undefined
                actionable_type?: string | undefined
                after_cursor?: (string | null) | undefined
                created_at?:
                  | {
                      eq?: string | undefined
                      gt?: string | undefined
                      gte?: string | undefined
                      lt?: string | undefined
                      lte?: string | undefined
                    }
                  | undefined
                internal_account_id?: string | undefined
                per_page?: number | undefined
                status?:
                  | 'pending'
                  | 'processable'
                  | 'processing'
                  | 'sent'
                  | 'acknowledged'
                  | 'failed'
                  | 'cancelled'
                  | undefined
                type?: 'void' | 'stop' | 'issue' | undefined
                metadata?: { [x: string]: string } | undefined
              }
            }
            output: PaymentAction[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                actionable_id?: string | undefined
                actionable_type?: string | undefined
                after_cursor?: (string | null) | undefined
                created_at?:
                  | {
                      eq?: string | undefined
                      gt?: string | undefined
                      gte?: string | undefined
                      lt?: string | undefined
                      lte?: string | undefined
                    }
                  | undefined
                internal_account_id?: string | undefined
                per_page?: number | undefined
                status?:
                  | 'pending'
                  | 'processable'
                  | 'processing'
                  | 'sent'
                  | 'acknowledged'
                  | 'failed'
                  | 'cancelled'
                  | undefined
                type?: 'void' | 'stop' | 'issue' | undefined
                metadata?: { [x: string]: string } | undefined
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                actionable_id?: string | undefined
                actionable_type?: string | undefined
                after_cursor?: (string | null) | undefined
                created_at?:
                  | {
                      eq?: string | undefined
                      gt?: string | undefined
                      gte?: string | undefined
                      lt?: string | undefined
                      lte?: string | undefined
                    }
                  | undefined
                internal_account_id?: string | undefined
                per_page?: number | undefined
                status?:
                  | 'pending'
                  | 'processable'
                  | 'processing'
                  | 'sent'
                  | 'acknowledged'
                  | 'failed'
                  | 'cancelled'
                  | undefined
                type?: 'void' | 'stop' | 'issue' | undefined
                metadata?: { [x: string]: string } | undefined
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                actionable_id?: string | undefined
                actionable_type?: string | undefined
                after_cursor?: (string | null) | undefined
                created_at?:
                  | {
                      eq?: string | undefined
                      gt?: string | undefined
                      gte?: string | undefined
                      lt?: string | undefined
                      lte?: string | undefined
                    }
                  | undefined
                internal_account_id?: string | undefined
                per_page?: number | undefined
                status?:
                  | 'pending'
                  | 'processable'
                  | 'processing'
                  | 'sent'
                  | 'acknowledged'
                  | 'failed'
                  | 'cancelled'
                  | undefined
                type?: 'void' | 'stop' | 'issue' | undefined
                metadata?: { [x: string]: string } | undefined
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                actionable_id?: string | undefined
                actionable_type?: string | undefined
                after_cursor?: (string | null) | undefined
                created_at?:
                  | {
                      eq?: string | undefined
                      gt?: string | undefined
                      gte?: string | undefined
                      lt?: string | undefined
                      lte?: string | undefined
                    }
                  | undefined
                internal_account_id?: string | undefined
                per_page?: number | undefined
                status?:
                  | 'pending'
                  | 'processable'
                  | 'processing'
                  | 'sent'
                  | 'acknowledged'
                  | 'failed'
                  | 'cancelled'
                  | undefined
                type?: 'void' | 'stop' | 'issue' | undefined
                metadata?: { [x: string]: string } | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
      $post:
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: PaymentActionCreateRequest
            }
            output: PaymentAction
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: PaymentActionCreateRequest
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: PaymentActionCreateRequest
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: PaymentActionCreateRequest
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: PaymentActionCreateRequest
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: PaymentActionCreateRequest
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: PaymentActionCreateRequest
            }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/payment_actions/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: PaymentAction
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $patch:
        | {
            input: { param: { id: string } } & { json: PaymentActionUpdateRequest }
            output: PaymentAction
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: PaymentActionUpdateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: PaymentActionUpdateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: PaymentActionUpdateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: PaymentActionUpdateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: PaymentActionUpdateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { id: string } } & { json: PaymentActionUpdateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { json: PaymentActionUpdateRequest }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/payment_flows': {
      $get:
        | {
            input: {
              query: {
                after_cursor?: (string | null) | undefined
                client_token?: string | undefined
                counterparty_id?: string | undefined
                originating_account_id?: string | undefined
                payment_order_id?: string | undefined
                per_page?: number | undefined
                receiving_account_id?: string | undefined
                status?: string | undefined
              }
            }
            output: PaymentFlow[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                after_cursor?: (string | null) | undefined
                client_token?: string | undefined
                counterparty_id?: string | undefined
                originating_account_id?: string | undefined
                payment_order_id?: string | undefined
                per_page?: number | undefined
                receiving_account_id?: string | undefined
                status?: string | undefined
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                after_cursor?: (string | null) | undefined
                client_token?: string | undefined
                counterparty_id?: string | undefined
                originating_account_id?: string | undefined
                payment_order_id?: string | undefined
                per_page?: number | undefined
                receiving_account_id?: string | undefined
                status?: string | undefined
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                after_cursor?: (string | null) | undefined
                client_token?: string | undefined
                counterparty_id?: string | undefined
                originating_account_id?: string | undefined
                payment_order_id?: string | undefined
                per_page?: number | undefined
                receiving_account_id?: string | undefined
                status?: string | undefined
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                after_cursor?: (string | null) | undefined
                client_token?: string | undefined
                counterparty_id?: string | undefined
                originating_account_id?: string | undefined
                payment_order_id?: string | undefined
                per_page?: number | undefined
                receiving_account_id?: string | undefined
                status?: string | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
      $post:
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: PaymentFlowCreateRequest
            }
            output: PaymentFlow
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: PaymentFlowCreateRequest
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: PaymentFlowCreateRequest
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: PaymentFlowCreateRequest
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: PaymentFlowCreateRequest
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: PaymentFlowCreateRequest
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: PaymentFlowCreateRequest
            }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/payment_flows/:id': {
      $get:
        | {
            input: { param: { id: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            }
            output: PaymentFlow
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 429
          }
      $patch:
        | {
            input: { param: { id: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            } & { json: PaymentFlowUpdateRequest }
            output: PaymentFlow
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            } & { json: PaymentFlowUpdateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            } & { json: PaymentFlowUpdateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            } & { json: PaymentFlowUpdateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            } & { json: PaymentFlowUpdateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            } & { json: PaymentFlowUpdateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            } & { json: PaymentFlowUpdateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            } & { json: PaymentFlowUpdateRequest }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/payment_orders': {
      $get:
        | {
            input: {
              query: {
                after_cursor?: (string | null) | undefined
                counterparty_id?: string | undefined
                created_at_end?: string | undefined
                created_at_start?: string | undefined
                direction?: 'credit' | 'debit' | undefined
                effective_date_end?: string | undefined
                effective_date_start?: string | undefined
                external_id?: string | undefined
                originating_account_id?: string | undefined
                per_page?: number | undefined
                priority?: 'high' | 'normal' | undefined
                process_after_end?: string | undefined
                process_after_start?: string | undefined
                reference_number?: string | undefined
                status?:
                  | 'approved'
                  | 'cancelled'
                  | 'completed'
                  | 'denied'
                  | 'failed'
                  | 'held'
                  | 'needs_approval'
                  | 'pending'
                  | 'processing'
                  | 'returned'
                  | 'reversed'
                  | 'sent'
                  | 'stopped'
                  | undefined
                transaction_id?: string | undefined
                type?:
                  | 'ach'
                  | 'au_becs'
                  | 'bacs'
                  | 'book'
                  | 'card'
                  | 'chats'
                  | 'check'
                  | 'cross_border'
                  | 'dk_nets'
                  | 'eft'
                  | 'gb_fps'
                  | 'masav'
                  | 'mx_ccen'
                  | 'neft'
                  | 'nics'
                  | 'nz_becs'
                  | 'pl_elixir'
                  | 'rtp'
                  | 'se_bankgirot'
                  | 'sepa'
                  | 'sg_giro'
                  | 'sic'
                  | 'stablecoin'
                  | 'wire'
                  | 'zengin'
                  | undefined
                metadata?: { [x: string]: string } | undefined
              }
            }
            output: PaymentOrder[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                after_cursor?: (string | null) | undefined
                counterparty_id?: string | undefined
                created_at_end?: string | undefined
                created_at_start?: string | undefined
                direction?: 'credit' | 'debit' | undefined
                effective_date_end?: string | undefined
                effective_date_start?: string | undefined
                external_id?: string | undefined
                originating_account_id?: string | undefined
                per_page?: number | undefined
                priority?: 'high' | 'normal' | undefined
                process_after_end?: string | undefined
                process_after_start?: string | undefined
                reference_number?: string | undefined
                status?:
                  | 'approved'
                  | 'cancelled'
                  | 'completed'
                  | 'denied'
                  | 'failed'
                  | 'held'
                  | 'needs_approval'
                  | 'pending'
                  | 'processing'
                  | 'returned'
                  | 'reversed'
                  | 'sent'
                  | 'stopped'
                  | undefined
                transaction_id?: string | undefined
                type?:
                  | 'ach'
                  | 'au_becs'
                  | 'bacs'
                  | 'book'
                  | 'card'
                  | 'chats'
                  | 'check'
                  | 'cross_border'
                  | 'dk_nets'
                  | 'eft'
                  | 'gb_fps'
                  | 'masav'
                  | 'mx_ccen'
                  | 'neft'
                  | 'nics'
                  | 'nz_becs'
                  | 'pl_elixir'
                  | 'rtp'
                  | 'se_bankgirot'
                  | 'sepa'
                  | 'sg_giro'
                  | 'sic'
                  | 'stablecoin'
                  | 'wire'
                  | 'zengin'
                  | undefined
                metadata?: { [x: string]: string } | undefined
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                after_cursor?: (string | null) | undefined
                counterparty_id?: string | undefined
                created_at_end?: string | undefined
                created_at_start?: string | undefined
                direction?: 'credit' | 'debit' | undefined
                effective_date_end?: string | undefined
                effective_date_start?: string | undefined
                external_id?: string | undefined
                originating_account_id?: string | undefined
                per_page?: number | undefined
                priority?: 'high' | 'normal' | undefined
                process_after_end?: string | undefined
                process_after_start?: string | undefined
                reference_number?: string | undefined
                status?:
                  | 'approved'
                  | 'cancelled'
                  | 'completed'
                  | 'denied'
                  | 'failed'
                  | 'held'
                  | 'needs_approval'
                  | 'pending'
                  | 'processing'
                  | 'returned'
                  | 'reversed'
                  | 'sent'
                  | 'stopped'
                  | undefined
                transaction_id?: string | undefined
                type?:
                  | 'ach'
                  | 'au_becs'
                  | 'bacs'
                  | 'book'
                  | 'card'
                  | 'chats'
                  | 'check'
                  | 'cross_border'
                  | 'dk_nets'
                  | 'eft'
                  | 'gb_fps'
                  | 'masav'
                  | 'mx_ccen'
                  | 'neft'
                  | 'nics'
                  | 'nz_becs'
                  | 'pl_elixir'
                  | 'rtp'
                  | 'se_bankgirot'
                  | 'sepa'
                  | 'sg_giro'
                  | 'sic'
                  | 'stablecoin'
                  | 'wire'
                  | 'zengin'
                  | undefined
                metadata?: { [x: string]: string } | undefined
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                after_cursor?: (string | null) | undefined
                counterparty_id?: string | undefined
                created_at_end?: string | undefined
                created_at_start?: string | undefined
                direction?: 'credit' | 'debit' | undefined
                effective_date_end?: string | undefined
                effective_date_start?: string | undefined
                external_id?: string | undefined
                originating_account_id?: string | undefined
                per_page?: number | undefined
                priority?: 'high' | 'normal' | undefined
                process_after_end?: string | undefined
                process_after_start?: string | undefined
                reference_number?: string | undefined
                status?:
                  | 'approved'
                  | 'cancelled'
                  | 'completed'
                  | 'denied'
                  | 'failed'
                  | 'held'
                  | 'needs_approval'
                  | 'pending'
                  | 'processing'
                  | 'returned'
                  | 'reversed'
                  | 'sent'
                  | 'stopped'
                  | undefined
                transaction_id?: string | undefined
                type?:
                  | 'ach'
                  | 'au_becs'
                  | 'bacs'
                  | 'book'
                  | 'card'
                  | 'chats'
                  | 'check'
                  | 'cross_border'
                  | 'dk_nets'
                  | 'eft'
                  | 'gb_fps'
                  | 'masav'
                  | 'mx_ccen'
                  | 'neft'
                  | 'nics'
                  | 'nz_becs'
                  | 'pl_elixir'
                  | 'rtp'
                  | 'se_bankgirot'
                  | 'sepa'
                  | 'sg_giro'
                  | 'sic'
                  | 'stablecoin'
                  | 'wire'
                  | 'zengin'
                  | undefined
                metadata?: { [x: string]: string } | undefined
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                after_cursor?: (string | null) | undefined
                counterparty_id?: string | undefined
                created_at_end?: string | undefined
                created_at_start?: string | undefined
                direction?: 'credit' | 'debit' | undefined
                effective_date_end?: string | undefined
                effective_date_start?: string | undefined
                external_id?: string | undefined
                originating_account_id?: string | undefined
                per_page?: number | undefined
                priority?: 'high' | 'normal' | undefined
                process_after_end?: string | undefined
                process_after_start?: string | undefined
                reference_number?: string | undefined
                status?:
                  | 'approved'
                  | 'cancelled'
                  | 'completed'
                  | 'denied'
                  | 'failed'
                  | 'held'
                  | 'needs_approval'
                  | 'pending'
                  | 'processing'
                  | 'returned'
                  | 'reversed'
                  | 'sent'
                  | 'stopped'
                  | undefined
                transaction_id?: string | undefined
                type?:
                  | 'ach'
                  | 'au_becs'
                  | 'bacs'
                  | 'book'
                  | 'card'
                  | 'chats'
                  | 'check'
                  | 'cross_border'
                  | 'dk_nets'
                  | 'eft'
                  | 'gb_fps'
                  | 'masav'
                  | 'mx_ccen'
                  | 'neft'
                  | 'nics'
                  | 'nz_becs'
                  | 'pl_elixir'
                  | 'rtp'
                  | 'se_bankgirot'
                  | 'sepa'
                  | 'sg_giro'
                  | 'sic'
                  | 'stablecoin'
                  | 'wire'
                  | 'zengin'
                  | undefined
                metadata?: { [x: string]: string } | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
      $post:
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: PaymentOrderCreateRequest
            } & { form: PaymentOrderCreateRequest }
            output: PaymentOrder
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: PaymentOrderCreateRequest
            } & { form: PaymentOrderCreateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: PaymentOrderCreateRequest
            } & { form: PaymentOrderCreateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: PaymentOrderCreateRequest
            } & { form: PaymentOrderCreateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: PaymentOrderCreateRequest
            } & { form: PaymentOrderCreateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: PaymentOrderCreateRequest
            } & { form: PaymentOrderCreateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: PaymentOrderCreateRequest
            } & { form: PaymentOrderCreateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: PaymentOrderCreateRequest
            } & { form: PaymentOrderCreateRequest }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/payment_orders/create_async': {
      $post:
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: PaymentOrderAsyncCreateRequest
            }
            output: AsyncResponse
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: PaymentOrderAsyncCreateRequest
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: PaymentOrderAsyncCreateRequest
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: PaymentOrderAsyncCreateRequest
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: PaymentOrderAsyncCreateRequest
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: PaymentOrderAsyncCreateRequest
            }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/payment_orders/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: PaymentOrder
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $patch:
        | {
            input: { param: { id: string } } & { json: PaymentOrderUpdateRequest }
            output: PaymentOrder
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: PaymentOrderUpdateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: PaymentOrderUpdateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: PaymentOrderUpdateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: PaymentOrderUpdateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: PaymentOrderUpdateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { id: string } } & { json: PaymentOrderUpdateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { id: string } } & { json: PaymentOrderUpdateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { json: PaymentOrderUpdateRequest }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/payment_orders/:payment_order_id/reversals': {
      $get:
        | {
            input: { param: { payment_order_id: string } } & {
              query: { after_cursor?: (string | null) | undefined; per_page?: number | undefined }
            }
            output: Reversal[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { payment_order_id: string } } & {
              query: { after_cursor?: (string | null) | undefined; per_page?: number | undefined }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { payment_order_id: string } } & {
              query: { after_cursor?: (string | null) | undefined; per_page?: number | undefined }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { payment_order_id: string } } & {
              query: { after_cursor?: (string | null) | undefined; per_page?: number | undefined }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { payment_order_id: string } } & {
              query: { after_cursor?: (string | null) | undefined; per_page?: number | undefined }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { payment_order_id: string } } & {
              query: { after_cursor?: (string | null) | undefined; per_page?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 429
          }
      $post:
        | {
            input: { param: { payment_order_id: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            } & { json: ReversalCreateRequest }
            output: Reversal
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { payment_order_id: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            } & { json: ReversalCreateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { payment_order_id: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            } & { json: ReversalCreateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { payment_order_id: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            } & { json: ReversalCreateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { payment_order_id: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            } & { json: ReversalCreateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { payment_order_id: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            } & { json: ReversalCreateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { payment_order_id: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            } & { json: ReversalCreateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { payment_order_id: string } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            } & { json: ReversalCreateRequest }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/payment_orders/:payment_order_id/reversals/:reversal_id': {
      $get:
        | {
            input: { param: { payment_order_id: string; reversal_id: string } }
            output: Reversal
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { payment_order_id: string; reversal_id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { payment_order_id: string; reversal_id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { payment_order_id: string; reversal_id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { payment_order_id: string; reversal_id: string } }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/payment_references': {
      $get:
        | {
            input: {
              query: {
                after_cursor?: (string | null) | undefined
                per_page?: number | undefined
                reference_number?: string | undefined
                referenceable_id?: string | undefined
                referenceable_type?:
                  | 'payment_order'
                  | 'return'
                  | 'reversal'
                  | 'incoming_payment_detail'
                  | 'transaction'
                  | undefined
              }
            }
            output: PaymentReferenceObject[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                after_cursor?: (string | null) | undefined
                per_page?: number | undefined
                reference_number?: string | undefined
                referenceable_id?: string | undefined
                referenceable_type?:
                  | 'payment_order'
                  | 'return'
                  | 'reversal'
                  | 'incoming_payment_detail'
                  | 'transaction'
                  | undefined
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                after_cursor?: (string | null) | undefined
                per_page?: number | undefined
                reference_number?: string | undefined
                referenceable_id?: string | undefined
                referenceable_type?:
                  | 'payment_order'
                  | 'return'
                  | 'reversal'
                  | 'incoming_payment_detail'
                  | 'transaction'
                  | undefined
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                after_cursor?: (string | null) | undefined
                per_page?: number | undefined
                reference_number?: string | undefined
                referenceable_id?: string | undefined
                referenceable_type?:
                  | 'payment_order'
                  | 'return'
                  | 'reversal'
                  | 'incoming_payment_detail'
                  | 'transaction'
                  | undefined
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                after_cursor?: (string | null) | undefined
                per_page?: number | undefined
                reference_number?: string | undefined
                referenceable_id?: string | undefined
                referenceable_type?:
                  | 'payment_order'
                  | 'return'
                  | 'reversal'
                  | 'incoming_payment_detail'
                  | 'transaction'
                  | undefined
              }
            }
            output: { errors?: string[] | undefined }
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              query: {
                after_cursor?: (string | null) | undefined
                per_page?: number | undefined
                reference_number?: string | undefined
                referenceable_id?: string | undefined
                referenceable_type?:
                  | 'payment_order'
                  | 'return'
                  | 'reversal'
                  | 'incoming_payment_detail'
                  | 'transaction'
                  | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/payment_references/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: PaymentReferenceObject
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
    }
  } & {
    '/api/ping': {
      $get:
        | { input: {}; output: PingResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorMessage; outputFormat: 'json'; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 429 }
        | { input: {}; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/api/returns': {
      $get:
        | {
            input: {
              query: {
                after_cursor?: (string | null) | undefined
                counterparty_id?: string | undefined
                internal_account_id?: string | undefined
                per_page?: number | undefined
                returnable_id?: string | undefined
                returnable_type?:
                  | 'incoming_payment_detail'
                  | 'payment_order'
                  | 'return'
                  | 'reversal'
                  | undefined
              }
            }
            output: Return[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                after_cursor?: (string | null) | undefined
                counterparty_id?: string | undefined
                internal_account_id?: string | undefined
                per_page?: number | undefined
                returnable_id?: string | undefined
                returnable_type?:
                  | 'incoming_payment_detail'
                  | 'payment_order'
                  | 'return'
                  | 'reversal'
                  | undefined
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                after_cursor?: (string | null) | undefined
                counterparty_id?: string | undefined
                internal_account_id?: string | undefined
                per_page?: number | undefined
                returnable_id?: string | undefined
                returnable_type?:
                  | 'incoming_payment_detail'
                  | 'payment_order'
                  | 'return'
                  | 'reversal'
                  | undefined
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                after_cursor?: (string | null) | undefined
                counterparty_id?: string | undefined
                internal_account_id?: string | undefined
                per_page?: number | undefined
                returnable_id?: string | undefined
                returnable_type?:
                  | 'incoming_payment_detail'
                  | 'payment_order'
                  | 'return'
                  | 'reversal'
                  | undefined
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                after_cursor?: (string | null) | undefined
                counterparty_id?: string | undefined
                internal_account_id?: string | undefined
                per_page?: number | undefined
                returnable_id?: string | undefined
                returnable_type?:
                  | 'incoming_payment_detail'
                  | 'payment_order'
                  | 'return'
                  | 'reversal'
                  | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
      $post:
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: ReturnCreateRequest
            }
            output: Return
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: ReturnCreateRequest
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: ReturnCreateRequest
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: ReturnCreateRequest
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: ReturnCreateRequest
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: ReturnCreateRequest
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: ReturnCreateRequest
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: ReturnCreateRequest
            }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/returns/:id': {
      $get:
        | { input: { param: { id: string } }; output: Return; outputFormat: 'json'; status: 200 }
        | {
            input: { param: { id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
    }
  } & {
    '/api/simulations/cases/:id/resolve': {
      $patch:
        | {
            input: { param: { id: string } } & { json: CaseResolveRequest }
            output: Case
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { id: string } } & { json: CaseResolveRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: CaseResolveRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: CaseResolveRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: CaseResolveRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: CaseResolveRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { id: string } } & { json: CaseResolveRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { id: string } } & { json: CaseResolveRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { json: CaseResolveRequest }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/simulations/incoming_payment_details/create_async': {
      $post:
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: IncomingPaymentDetailCreateRequest
            }
            output: IncomingPaymentDetail
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: IncomingPaymentDetailCreateRequest
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: IncomingPaymentDetailCreateRequest
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: IncomingPaymentDetailCreateRequest
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: IncomingPaymentDetailCreateRequest
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: IncomingPaymentDetailCreateRequest
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: IncomingPaymentDetailCreateRequest
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: IncomingPaymentDetailCreateRequest
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: IncomingPaymentDetailCreateRequest
            }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/simulations/legal_entities/:id/update_status': {
      $patch:
        | {
            input: { param: { id: string } } & { json: LegalEntityUpdateStatusRequest }
            output: LegalEntity
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { id: string } } & { json: LegalEntityUpdateStatusRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: LegalEntityUpdateStatusRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: LegalEntityUpdateStatusRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: LegalEntityUpdateStatusRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: LegalEntityUpdateStatusRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 405
          }
        | {
            input: { param: { id: string } } & { json: LegalEntityUpdateStatusRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { id: string } } & { json: LegalEntityUpdateStatusRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { json: LegalEntityUpdateStatusRequest }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/transaction_line_items': {
      $get:
        | {
            input: {
              query: {
                after_cursor?: (string | null) | undefined
                id?: { [x: string]: string } | undefined
                per_page?: number | undefined
                transaction_id?: string | undefined
                type?: 'originating' | 'receiving' | undefined
              }
            }
            output: TransactionLineItem[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                after_cursor?: (string | null) | undefined
                id?: { [x: string]: string } | undefined
                per_page?: number | undefined
                transaction_id?: string | undefined
                type?: 'originating' | 'receiving' | undefined
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                after_cursor?: (string | null) | undefined
                id?: { [x: string]: string } | undefined
                per_page?: number | undefined
                transaction_id?: string | undefined
                type?: 'originating' | 'receiving' | undefined
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                after_cursor?: (string | null) | undefined
                id?: { [x: string]: string } | undefined
                per_page?: number | undefined
                transaction_id?: string | undefined
                type?: 'originating' | 'receiving' | undefined
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                after_cursor?: (string | null) | undefined
                id?: { [x: string]: string } | undefined
                per_page?: number | undefined
                transaction_id?: string | undefined
                type?: 'originating' | 'receiving' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
      $post:
        | {
            input: { json: TransactionLineItemCreateRequest }
            output: TransactionLineItem
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: TransactionLineItemCreateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: TransactionLineItemCreateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: TransactionLineItemCreateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: TransactionLineItemCreateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { json: TransactionLineItemCreateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: TransactionLineItemCreateRequest }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/transaction_line_items/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: TransactionLineItem
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 200 }
        | {
            input: { param: { id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 422
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
    }
  } & {
    '/api/transactions': {
      $get:
        | {
            input: {
              query: {
                after_cursor?: (string | null) | undefined
                as_of_date_end?: string | undefined
                as_of_date_start?: string | undefined
                counterparty_id?: string | undefined
                description?: string | undefined
                direction?: string | undefined
                internal_account_id?: string | undefined
                payment_type?: string | undefined
                per_page?: number | undefined
                posted?: boolean | undefined
                vendor_id?: string | undefined
                virtual_account_id?: string | undefined
                metadata?: { [x: string]: string } | undefined
              }
            }
            output: Transaction[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                after_cursor?: (string | null) | undefined
                as_of_date_end?: string | undefined
                as_of_date_start?: string | undefined
                counterparty_id?: string | undefined
                description?: string | undefined
                direction?: string | undefined
                internal_account_id?: string | undefined
                payment_type?: string | undefined
                per_page?: number | undefined
                posted?: boolean | undefined
                vendor_id?: string | undefined
                virtual_account_id?: string | undefined
                metadata?: { [x: string]: string } | undefined
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                after_cursor?: (string | null) | undefined
                as_of_date_end?: string | undefined
                as_of_date_start?: string | undefined
                counterparty_id?: string | undefined
                description?: string | undefined
                direction?: string | undefined
                internal_account_id?: string | undefined
                payment_type?: string | undefined
                per_page?: number | undefined
                posted?: boolean | undefined
                vendor_id?: string | undefined
                virtual_account_id?: string | undefined
                metadata?: { [x: string]: string } | undefined
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                after_cursor?: (string | null) | undefined
                as_of_date_end?: string | undefined
                as_of_date_start?: string | undefined
                counterparty_id?: string | undefined
                description?: string | undefined
                direction?: string | undefined
                internal_account_id?: string | undefined
                payment_type?: string | undefined
                per_page?: number | undefined
                posted?: boolean | undefined
                vendor_id?: string | undefined
                virtual_account_id?: string | undefined
                metadata?: { [x: string]: string } | undefined
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                after_cursor?: (string | null) | undefined
                as_of_date_end?: string | undefined
                as_of_date_start?: string | undefined
                counterparty_id?: string | undefined
                description?: string | undefined
                direction?: string | undefined
                internal_account_id?: string | undefined
                payment_type?: string | undefined
                per_page?: number | undefined
                posted?: boolean | undefined
                vendor_id?: string | undefined
                virtual_account_id?: string | undefined
                metadata?: { [x: string]: string } | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
      $post:
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: TransactionCreateRequest
            }
            output: Transaction
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: TransactionCreateRequest
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: TransactionCreateRequest
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: TransactionCreateRequest
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: TransactionCreateRequest
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: TransactionCreateRequest
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: TransactionCreateRequest
            }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/transactions/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: Transaction
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $patch:
        | {
            input: { param: { id: string } } & { json: TransactionUpdateRequest }
            output: Transaction
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: TransactionUpdateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: TransactionUpdateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: TransactionUpdateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: TransactionUpdateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: TransactionUpdateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { id: string } } & { json: TransactionUpdateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { json: TransactionUpdateRequest }
            output: {}
            outputFormat: string
            status: 429
          }
      $delete:
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 422
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
    }
  } & {
    '/api/transactions/:transaction_id/line_items': {
      $get:
        | {
            input: { param: { transaction_id: string } } & {
              query: {
                after_cursor?: (string | null) | undefined
                per_page?: number | undefined
                type?: 'originating' | 'receiving' | undefined
              }
            }
            output: TransactionLineItem[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { transaction_id: string } } & {
              query: {
                after_cursor?: (string | null) | undefined
                per_page?: number | undefined
                type?: 'originating' | 'receiving' | undefined
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { transaction_id: string } } & {
              query: {
                after_cursor?: (string | null) | undefined
                per_page?: number | undefined
                type?: 'originating' | 'receiving' | undefined
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { transaction_id: string } } & {
              query: {
                after_cursor?: (string | null) | undefined
                per_page?: number | undefined
                type?: 'originating' | 'receiving' | undefined
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { transaction_id: string } } & {
              query: {
                after_cursor?: (string | null) | undefined
                per_page?: number | undefined
                type?: 'originating' | 'receiving' | undefined
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { transaction_id: string } } & {
              query: {
                after_cursor?: (string | null) | undefined
                per_page?: number | undefined
                type?: 'originating' | 'receiving' | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/validations/routing_numbers': {
      $get:
        | {
            input: {
              query: {
                routing_number: string
                routing_number_type:
                  | 'aba'
                  | 'au_bsb'
                  | 'br_codigo'
                  | 'ca_cpa'
                  | 'chips'
                  | 'cnaps'
                  | 'dk_interbank_clearing_code'
                  | 'gb_sort_code'
                  | 'hk_interbank_clearing_code'
                  | 'il_bank_code'
                  | 'in_ifsc'
                  | 'jp_zengin_code'
                  | 'mx_bank_identifier'
                  | 'my_branch_code'
                  | 'nz_national_clearing_code'
                  | 'pl_national_clearing_code'
                  | 'se_bankgiro_clearing_code'
                  | 'sg_interbank_clearing_code'
                  | 'swift'
                  | 'vasp'
                  | 'za_national_clearing_code'
              }
            }
            output: RoutingNumberLookupRequest
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                routing_number: string
                routing_number_type:
                  | 'aba'
                  | 'au_bsb'
                  | 'br_codigo'
                  | 'ca_cpa'
                  | 'chips'
                  | 'cnaps'
                  | 'dk_interbank_clearing_code'
                  | 'gb_sort_code'
                  | 'hk_interbank_clearing_code'
                  | 'il_bank_code'
                  | 'in_ifsc'
                  | 'jp_zengin_code'
                  | 'mx_bank_identifier'
                  | 'my_branch_code'
                  | 'nz_national_clearing_code'
                  | 'pl_national_clearing_code'
                  | 'se_bankgiro_clearing_code'
                  | 'sg_interbank_clearing_code'
                  | 'swift'
                  | 'vasp'
                  | 'za_national_clearing_code'
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                routing_number: string
                routing_number_type:
                  | 'aba'
                  | 'au_bsb'
                  | 'br_codigo'
                  | 'ca_cpa'
                  | 'chips'
                  | 'cnaps'
                  | 'dk_interbank_clearing_code'
                  | 'gb_sort_code'
                  | 'hk_interbank_clearing_code'
                  | 'il_bank_code'
                  | 'in_ifsc'
                  | 'jp_zengin_code'
                  | 'mx_bank_identifier'
                  | 'my_branch_code'
                  | 'nz_national_clearing_code'
                  | 'pl_national_clearing_code'
                  | 'se_bankgiro_clearing_code'
                  | 'sg_interbank_clearing_code'
                  | 'swift'
                  | 'vasp'
                  | 'za_national_clearing_code'
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                routing_number: string
                routing_number_type:
                  | 'aba'
                  | 'au_bsb'
                  | 'br_codigo'
                  | 'ca_cpa'
                  | 'chips'
                  | 'cnaps'
                  | 'dk_interbank_clearing_code'
                  | 'gb_sort_code'
                  | 'hk_interbank_clearing_code'
                  | 'il_bank_code'
                  | 'in_ifsc'
                  | 'jp_zengin_code'
                  | 'mx_bank_identifier'
                  | 'my_branch_code'
                  | 'nz_national_clearing_code'
                  | 'pl_national_clearing_code'
                  | 'se_bankgiro_clearing_code'
                  | 'sg_interbank_clearing_code'
                  | 'swift'
                  | 'vasp'
                  | 'za_national_clearing_code'
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                routing_number: string
                routing_number_type:
                  | 'aba'
                  | 'au_bsb'
                  | 'br_codigo'
                  | 'ca_cpa'
                  | 'chips'
                  | 'cnaps'
                  | 'dk_interbank_clearing_code'
                  | 'gb_sort_code'
                  | 'hk_interbank_clearing_code'
                  | 'il_bank_code'
                  | 'in_ifsc'
                  | 'jp_zengin_code'
                  | 'mx_bank_identifier'
                  | 'my_branch_code'
                  | 'nz_national_clearing_code'
                  | 'pl_national_clearing_code'
                  | 'se_bankgiro_clearing_code'
                  | 'sg_interbank_clearing_code'
                  | 'swift'
                  | 'vasp'
                  | 'za_national_clearing_code'
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              query: {
                routing_number: string
                routing_number_type:
                  | 'aba'
                  | 'au_bsb'
                  | 'br_codigo'
                  | 'ca_cpa'
                  | 'chips'
                  | 'cnaps'
                  | 'dk_interbank_clearing_code'
                  | 'gb_sort_code'
                  | 'hk_interbank_clearing_code'
                  | 'il_bank_code'
                  | 'in_ifsc'
                  | 'jp_zengin_code'
                  | 'mx_bank_identifier'
                  | 'my_branch_code'
                  | 'nz_national_clearing_code'
                  | 'pl_national_clearing_code'
                  | 'se_bankgiro_clearing_code'
                  | 'sg_interbank_clearing_code'
                  | 'swift'
                  | 'vasp'
                  | 'za_national_clearing_code'
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/virtual_account_settings': {
      $get:
        | {
            input: {
              query: {
                after_cursor?: (string | null) | undefined
                external_id?: string | undefined
                per_page?: number | undefined
              }
            }
            output: VirtualAccountSetting[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                after_cursor?: (string | null) | undefined
                external_id?: string | undefined
                per_page?: number | undefined
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                after_cursor?: (string | null) | undefined
                external_id?: string | undefined
                per_page?: number | undefined
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                after_cursor?: (string | null) | undefined
                external_id?: string | undefined
                per_page?: number | undefined
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                after_cursor?: (string | null) | undefined
                external_id?: string | undefined
                per_page?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
      $post:
        | {
            input: { json: VirtualAccountSettingCreateRequest }
            output: VirtualAccountSetting
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: VirtualAccountSettingCreateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: VirtualAccountSettingCreateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: VirtualAccountSettingCreateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: VirtualAccountSettingCreateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { json: VirtualAccountSettingCreateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { json: VirtualAccountSettingCreateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { json: VirtualAccountSettingCreateRequest }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/virtual_accounts': {
      $get:
        | {
            input: {
              query: {
                after_cursor?: (string | null) | undefined
                counterparty_id?: string | undefined
                external_id?: string | undefined
                internal_account_id?: string | undefined
                per_page?: number | undefined
                metadata?: { [x: string]: string } | undefined
              }
            }
            output: VirtualAccount[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                after_cursor?: (string | null) | undefined
                counterparty_id?: string | undefined
                external_id?: string | undefined
                internal_account_id?: string | undefined
                per_page?: number | undefined
                metadata?: { [x: string]: string } | undefined
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                after_cursor?: (string | null) | undefined
                counterparty_id?: string | undefined
                external_id?: string | undefined
                internal_account_id?: string | undefined
                per_page?: number | undefined
                metadata?: { [x: string]: string } | undefined
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                after_cursor?: (string | null) | undefined
                counterparty_id?: string | undefined
                external_id?: string | undefined
                internal_account_id?: string | undefined
                per_page?: number | undefined
                metadata?: { [x: string]: string } | undefined
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                after_cursor?: (string | null) | undefined
                counterparty_id?: string | undefined
                external_id?: string | undefined
                internal_account_id?: string | undefined
                per_page?: number | undefined
                metadata?: { [x: string]: string } | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
      $post:
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: VirtualAccountCreateRequest
            }
            output: VirtualAccount
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: VirtualAccountCreateRequest
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: VirtualAccountCreateRequest
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: VirtualAccountCreateRequest
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: VirtualAccountCreateRequest
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: VirtualAccountCreateRequest
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: VirtualAccountCreateRequest
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { header: { 'Idempotency-Key'?: string | undefined } } & {
              json: VirtualAccountCreateRequest
            }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/virtual_accounts/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: VirtualAccount
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
      $patch:
        | {
            input: { param: { id: string } } & { json: VirtualAccountUpdateRequest }
            output: VirtualAccount
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: VirtualAccountUpdateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: VirtualAccountUpdateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: VirtualAccountUpdateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: VirtualAccountUpdateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: VirtualAccountUpdateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { id: string } } & { json: VirtualAccountUpdateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { id: string } } & { json: VirtualAccountUpdateRequest }
            output: {}
            outputFormat: string
            status: 429
          }
      $delete:
        | {
            input: { param: { id: string } }
            output: VirtualAccount
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 429 }
    }
  } & {
    '/api/:accounts_type/:account_id/account_details': {
      $get:
        | {
            input: { param: { account_id: string; accounts_type: AccountsType } } & {
              query: { after_cursor?: (string | null) | undefined; per_page?: number | undefined }
            }
            output: AccountDetail[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: string; accounts_type: AccountsType } } & {
              query: { after_cursor?: (string | null) | undefined; per_page?: number | undefined }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { account_id: string; accounts_type: AccountsType } } & {
              query: { after_cursor?: (string | null) | undefined; per_page?: number | undefined }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { account_id: string; accounts_type: AccountsType } } & {
              query: { after_cursor?: (string | null) | undefined; per_page?: number | undefined }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { account_id: string; accounts_type: AccountsType } } & {
              query: { after_cursor?: (string | null) | undefined; per_page?: number | undefined }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { account_id: string; accounts_type: AccountsType } } & {
              query: { after_cursor?: (string | null) | undefined; per_page?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 429
          }
      $post:
        | {
            input: { param: { account_id: string; accounts_type: 'external_accounts' } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            } & { json: AccountDetailCreateRequest }
            output: AccountDetail
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { account_id: string; accounts_type: 'external_accounts' } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            } & { json: AccountDetailCreateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { account_id: string; accounts_type: 'external_accounts' } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            } & { json: AccountDetailCreateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { account_id: string; accounts_type: 'external_accounts' } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            } & { json: AccountDetailCreateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { account_id: string; accounts_type: 'external_accounts' } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            } & { json: AccountDetailCreateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { account_id: string; accounts_type: 'external_accounts' } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            } & { json: AccountDetailCreateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { account_id: string; accounts_type: 'external_accounts' } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            } & { json: AccountDetailCreateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { account_id: string; accounts_type: 'external_accounts' } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            } & { json: AccountDetailCreateRequest }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/:accounts_type/:account_id/account_details/:id': {
      $get:
        | {
            input: { param: { account_id: string; accounts_type: AccountsType; id: string } }
            output: AccountDetail
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: string; accounts_type: AccountsType; id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { account_id: string; accounts_type: AccountsType; id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { account_id: string; accounts_type: AccountsType; id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { account_id: string; accounts_type: AccountsType; id: string } }
            output: {}
            outputFormat: string
            status: 429
          }
      $delete:
        | {
            input: { param: { account_id: string; accounts_type: 'external_accounts'; id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { account_id: string; accounts_type: 'external_accounts'; id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { account_id: string; accounts_type: 'external_accounts'; id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { account_id: string; accounts_type: 'external_accounts'; id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { account_id: string; accounts_type: 'external_accounts'; id: string } }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/:accounts_type/:account_id/routing_details': {
      $get:
        | {
            input: { param: { account_id: string; accounts_type: AccountsType } } & {
              query: { after_cursor?: (string | null) | undefined; per_page?: number | undefined }
            }
            output: RoutingDetail[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: string; accounts_type: AccountsType } } & {
              query: { after_cursor?: (string | null) | undefined; per_page?: number | undefined }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { account_id: string; accounts_type: AccountsType } } & {
              query: { after_cursor?: (string | null) | undefined; per_page?: number | undefined }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { account_id: string; accounts_type: AccountsType } } & {
              query: { after_cursor?: (string | null) | undefined; per_page?: number | undefined }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { account_id: string; accounts_type: AccountsType } } & {
              query: { after_cursor?: (string | null) | undefined; per_page?: number | undefined }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { account_id: string; accounts_type: AccountsType } } & {
              query: { after_cursor?: (string | null) | undefined; per_page?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 429
          }
      $post:
        | {
            input: { param: { account_id: string; accounts_type: 'external_accounts' } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            } & { json: RoutingDetailCreateRequest }
            output: RoutingDetail
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { account_id: string; accounts_type: 'external_accounts' } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            } & { json: RoutingDetailCreateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { account_id: string; accounts_type: 'external_accounts' } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            } & { json: RoutingDetailCreateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { account_id: string; accounts_type: 'external_accounts' } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            } & { json: RoutingDetailCreateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { account_id: string; accounts_type: 'external_accounts' } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            } & { json: RoutingDetailCreateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { account_id: string; accounts_type: 'external_accounts' } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            } & { json: RoutingDetailCreateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { account_id: string; accounts_type: 'external_accounts' } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            } & { json: RoutingDetailCreateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { account_id: string; accounts_type: 'external_accounts' } } & {
              header: { 'Idempotency-Key'?: string | undefined }
            } & { json: RoutingDetailCreateRequest }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/:accounts_type/:account_id/routing_details/:id': {
      $get:
        | {
            input: { param: { account_id: string; accounts_type: AccountsType; id: string } }
            output: RoutingDetail
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { account_id: string; accounts_type: AccountsType; id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { account_id: string; accounts_type: AccountsType; id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { account_id: string; accounts_type: AccountsType; id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { account_id: string; accounts_type: AccountsType; id: string } }
            output: {}
            outputFormat: string
            status: 429
          }
      $delete:
        | {
            input: { param: { account_id: string; accounts_type: 'external_accounts'; id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { account_id: string; accounts_type: 'external_accounts'; id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { account_id: string; accounts_type: 'external_accounts'; id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { account_id: string; accounts_type: 'external_accounts'; id: string } }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { account_id: string; accounts_type: 'external_accounts'; id: string } }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/:documentable_type/:documentable_id/documents': {
      $get:
        | {
            input: {
              param: {
                documentable_id: string
                documentable_type:
                  | 'connections'
                  | 'counterparties'
                  | 'expected_payments'
                  | 'identifications'
                  | 'incoming_payment_details'
                  | 'internal_accounts'
                  | 'legal_entities'
                  | 'payment_orders'
                  | 'returns'
                  | 'transactions'
              }
            } & {
              query: {
                after_cursor?: (string | null) | undefined
                document_type?: string | undefined
                per_page?: number | undefined
              }
            }
            output: Document[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                documentable_id: string
                documentable_type:
                  | 'connections'
                  | 'counterparties'
                  | 'expected_payments'
                  | 'identifications'
                  | 'incoming_payment_details'
                  | 'internal_accounts'
                  | 'legal_entities'
                  | 'payment_orders'
                  | 'returns'
                  | 'transactions'
              }
            } & {
              query: {
                after_cursor?: (string | null) | undefined
                document_type?: string | undefined
                per_page?: number | undefined
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: {
                documentable_id: string
                documentable_type:
                  | 'connections'
                  | 'counterparties'
                  | 'expected_payments'
                  | 'identifications'
                  | 'incoming_payment_details'
                  | 'internal_accounts'
                  | 'legal_entities'
                  | 'payment_orders'
                  | 'returns'
                  | 'transactions'
              }
            } & {
              query: {
                after_cursor?: (string | null) | undefined
                document_type?: string | undefined
                per_page?: number | undefined
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: {
                documentable_id: string
                documentable_type:
                  | 'connections'
                  | 'counterparties'
                  | 'expected_payments'
                  | 'identifications'
                  | 'incoming_payment_details'
                  | 'internal_accounts'
                  | 'legal_entities'
                  | 'payment_orders'
                  | 'returns'
                  | 'transactions'
              }
            } & {
              query: {
                after_cursor?: (string | null) | undefined
                document_type?: string | undefined
                per_page?: number | undefined
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              param: {
                documentable_id: string
                documentable_type:
                  | 'connections'
                  | 'counterparties'
                  | 'expected_payments'
                  | 'identifications'
                  | 'incoming_payment_details'
                  | 'internal_accounts'
                  | 'legal_entities'
                  | 'payment_orders'
                  | 'returns'
                  | 'transactions'
              }
            } & {
              query: {
                after_cursor?: (string | null) | undefined
                document_type?: string | undefined
                per_page?: number | undefined
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: {
                documentable_id: string
                documentable_type:
                  | 'connections'
                  | 'counterparties'
                  | 'expected_payments'
                  | 'identifications'
                  | 'incoming_payment_details'
                  | 'internal_accounts'
                  | 'legal_entities'
                  | 'payment_orders'
                  | 'returns'
                  | 'transactions'
              }
            } & {
              query: {
                after_cursor?: (string | null) | undefined
                document_type?: string | undefined
                per_page?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
      $post:
        | {
            input: {
              param: {
                documentable_id: string
                documentable_type:
                  | 'connections'
                  | 'counterparties'
                  | 'expected_payments'
                  | 'identifications'
                  | 'incoming_payment_details'
                  | 'internal_accounts'
                  | 'legal_entities'
                  | 'payment_orders'
                  | 'returns'
                  | 'transactions'
              }
            } & { header: { 'Idempotency-Key'?: string | undefined } } & {
              form: LegacyDocumentCreateRequest
            }
            output: Document
            outputFormat: 'json'
            status: 201
          }
        | {
            input: {
              param: {
                documentable_id: string
                documentable_type:
                  | 'connections'
                  | 'counterparties'
                  | 'expected_payments'
                  | 'identifications'
                  | 'incoming_payment_details'
                  | 'internal_accounts'
                  | 'legal_entities'
                  | 'payment_orders'
                  | 'returns'
                  | 'transactions'
              }
            } & { header: { 'Idempotency-Key'?: string | undefined } } & {
              form: LegacyDocumentCreateRequest
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: {
                documentable_id: string
                documentable_type:
                  | 'connections'
                  | 'counterparties'
                  | 'expected_payments'
                  | 'identifications'
                  | 'incoming_payment_details'
                  | 'internal_accounts'
                  | 'legal_entities'
                  | 'payment_orders'
                  | 'returns'
                  | 'transactions'
              }
            } & { header: { 'Idempotency-Key'?: string | undefined } } & {
              form: LegacyDocumentCreateRequest
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: {
                documentable_id: string
                documentable_type:
                  | 'connections'
                  | 'counterparties'
                  | 'expected_payments'
                  | 'identifications'
                  | 'incoming_payment_details'
                  | 'internal_accounts'
                  | 'legal_entities'
                  | 'payment_orders'
                  | 'returns'
                  | 'transactions'
              }
            } & { header: { 'Idempotency-Key'?: string | undefined } } & {
              form: LegacyDocumentCreateRequest
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              param: {
                documentable_id: string
                documentable_type:
                  | 'connections'
                  | 'counterparties'
                  | 'expected_payments'
                  | 'identifications'
                  | 'incoming_payment_details'
                  | 'internal_accounts'
                  | 'legal_entities'
                  | 'payment_orders'
                  | 'returns'
                  | 'transactions'
              }
            } & { header: { 'Idempotency-Key'?: string | undefined } } & {
              form: LegacyDocumentCreateRequest
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: {
                documentable_id: string
                documentable_type:
                  | 'connections'
                  | 'counterparties'
                  | 'expected_payments'
                  | 'identifications'
                  | 'incoming_payment_details'
                  | 'internal_accounts'
                  | 'legal_entities'
                  | 'payment_orders'
                  | 'returns'
                  | 'transactions'
              }
            } & { header: { 'Idempotency-Key'?: string | undefined } } & {
              form: LegacyDocumentCreateRequest
            }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/:documentable_type/:documentable_id/documents/:id': {
      $get:
        | {
            input: {
              param: {
                documentable_id: string
                documentable_type:
                  | 'connections'
                  | 'counterparties'
                  | 'expected_payments'
                  | 'identifications'
                  | 'incoming_payment_details'
                  | 'internal_accounts'
                  | 'legal_entities'
                  | 'payment_orders'
                  | 'returns'
                  | 'transactions'
                id: string
              }
            }
            output: Document
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                documentable_id: string
                documentable_type:
                  | 'connections'
                  | 'counterparties'
                  | 'expected_payments'
                  | 'identifications'
                  | 'incoming_payment_details'
                  | 'internal_accounts'
                  | 'legal_entities'
                  | 'payment_orders'
                  | 'returns'
                  | 'transactions'
                id: string
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: {
                documentable_id: string
                documentable_type:
                  | 'connections'
                  | 'counterparties'
                  | 'expected_payments'
                  | 'identifications'
                  | 'incoming_payment_details'
                  | 'internal_accounts'
                  | 'legal_entities'
                  | 'payment_orders'
                  | 'returns'
                  | 'transactions'
                id: string
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              param: {
                documentable_id: string
                documentable_type:
                  | 'connections'
                  | 'counterparties'
                  | 'expected_payments'
                  | 'identifications'
                  | 'incoming_payment_details'
                  | 'internal_accounts'
                  | 'legal_entities'
                  | 'payment_orders'
                  | 'returns'
                  | 'transactions'
                id: string
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: {
                documentable_id: string
                documentable_type:
                  | 'connections'
                  | 'counterparties'
                  | 'expected_payments'
                  | 'identifications'
                  | 'incoming_payment_details'
                  | 'internal_accounts'
                  | 'legal_entities'
                  | 'payment_orders'
                  | 'returns'
                  | 'transactions'
                id: string
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/:documentable_type/:documentable_id/documents/:id/download': {
      $get:
        | {
            input: {
              param: {
                documentable_id: string
                documentable_type:
                  | 'connections'
                  | 'counterparties'
                  | 'expected_payments'
                  | 'identifications'
                  | 'incoming_payment_details'
                  | 'internal_accounts'
                  | 'legal_entities'
                  | 'payment_orders'
                  | 'returns'
                  | 'transactions'
                id: string
              }
            }
            output: {}
            outputFormat: string
            status: 302
          }
        | {
            input: {
              param: {
                documentable_id: string
                documentable_type:
                  | 'connections'
                  | 'counterparties'
                  | 'expected_payments'
                  | 'identifications'
                  | 'incoming_payment_details'
                  | 'internal_accounts'
                  | 'legal_entities'
                  | 'payment_orders'
                  | 'returns'
                  | 'transactions'
                id: string
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: {
                documentable_id: string
                documentable_type:
                  | 'connections'
                  | 'counterparties'
                  | 'expected_payments'
                  | 'identifications'
                  | 'incoming_payment_details'
                  | 'internal_accounts'
                  | 'legal_entities'
                  | 'payment_orders'
                  | 'returns'
                  | 'transactions'
                id: string
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              param: {
                documentable_id: string
                documentable_type:
                  | 'connections'
                  | 'counterparties'
                  | 'expected_payments'
                  | 'identifications'
                  | 'incoming_payment_details'
                  | 'internal_accounts'
                  | 'legal_entities'
                  | 'payment_orders'
                  | 'returns'
                  | 'transactions'
                id: string
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: {
                documentable_id: string
                documentable_type:
                  | 'connections'
                  | 'counterparties'
                  | 'expected_payments'
                  | 'identifications'
                  | 'incoming_payment_details'
                  | 'internal_accounts'
                  | 'legal_entities'
                  | 'payment_orders'
                  | 'returns'
                  | 'transactions'
                id: string
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/:itemizable_type/:itemizable_id/line_items': {
      $get:
        | {
            input: {
              param: {
                itemizable_id: string
                itemizable_type: 'expected_payments' | 'payment_orders'
              }
            } & {
              query: { after_cursor?: (string | null) | undefined; per_page?: number | undefined }
            }
            output: LineItem[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                itemizable_id: string
                itemizable_type: 'expected_payments' | 'payment_orders'
              }
            } & {
              query: { after_cursor?: (string | null) | undefined; per_page?: number | undefined }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: {
                itemizable_id: string
                itemizable_type: 'expected_payments' | 'payment_orders'
              }
            } & {
              query: { after_cursor?: (string | null) | undefined; per_page?: number | undefined }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: {
                itemizable_id: string
                itemizable_type: 'expected_payments' | 'payment_orders'
              }
            } & {
              query: { after_cursor?: (string | null) | undefined; per_page?: number | undefined }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              param: {
                itemizable_id: string
                itemizable_type: 'expected_payments' | 'payment_orders'
              }
            } & {
              query: { after_cursor?: (string | null) | undefined; per_page?: number | undefined }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: {
                itemizable_id: string
                itemizable_type: 'expected_payments' | 'payment_orders'
              }
            } & {
              query: { after_cursor?: (string | null) | undefined; per_page?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/:itemizable_type/:itemizable_id/line_items/:id': {
      $get:
        | {
            input: {
              param: {
                id: string
                itemizable_id: string
                itemizable_type: 'expected_payments' | 'payment_orders'
              }
            }
            output: LineItem
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                id: string
                itemizable_id: string
                itemizable_type: 'expected_payments' | 'payment_orders'
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: {
                id: string
                itemizable_id: string
                itemizable_type: 'expected_payments' | 'payment_orders'
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              param: {
                id: string
                itemizable_id: string
                itemizable_type: 'expected_payments' | 'payment_orders'
              }
            }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: {
                id: string
                itemizable_id: string
                itemizable_type: 'expected_payments' | 'payment_orders'
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
      $patch:
        | {
            input: {
              param: {
                id: string
                itemizable_id: string
                itemizable_type: 'expected_payments' | 'payment_orders'
              }
            } & { json: LineItemUpdateRequest }
            output: LineItem
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                id: string
                itemizable_id: string
                itemizable_type: 'expected_payments' | 'payment_orders'
              }
            } & { json: LineItemUpdateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: {
                id: string
                itemizable_id: string
                itemizable_type: 'expected_payments' | 'payment_orders'
              }
            } & { json: LineItemUpdateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: {
                id: string
                itemizable_id: string
                itemizable_type: 'expected_payments' | 'payment_orders'
              }
            } & { json: LineItemUpdateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              param: {
                id: string
                itemizable_id: string
                itemizable_type: 'expected_payments' | 'payment_orders'
              }
            } & { json: LineItemUpdateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: {
                id: string
                itemizable_id: string
                itemizable_type: 'expected_payments' | 'payment_orders'
              }
            } & { json: LineItemUpdateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 415
          }
        | {
            input: {
              param: {
                id: string
                itemizable_id: string
                itemizable_type: 'expected_payments' | 'payment_orders'
              }
            } & { json: LineItemUpdateRequest }
            output: ErrorMessage
            outputFormat: 'json'
            status: 422
          }
        | {
            input: {
              param: {
                id: string
                itemizable_id: string
                itemizable_type: 'expected_payments' | 'payment_orders'
              }
            } & { json: LineItemUpdateRequest }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  },
  '/'
>
export default routes
